/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import {
	createConnection,
	TextDocuments,
	ProposedFeatures,
	InitializeParams,
	DidChangeConfigurationNotification,
	CompletionItem,
	CompletionItemKind,
	TextDocumentPositionParams,
	TextDocumentSyncKind,
	InitializeResult,
	DidChangeConfigurationParams,
	DocumentFormattingRequest,
	DidOpenTextDocumentParams,
} from 'vscode-languageserver/node'

import {
	TextDocument,
} from 'vscode-languageserver-textdocument';

import { formatDocument } from './formatter/formatter';
import { computeDiagnostics } from './diagnostic/diagnosticsVisitor';
import { Parser } from './parser';
import { CodeCompletionCore } from 'antlr4-c3';
import { MapIniParser } from './utils/antlr4ng/MapIniParser';
import { MapIniLexer } from './utils/antlr4ng/MapIniLexer';
import { CharStream, CommonTokenStream, DefaultErrorStrategy } from 'antlr4ng';
import { findContextAtPosition, findTokenIndex, generateCompletionItems, getContextSpecificCompletions } from './completion/helpers';

// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager.
// const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

// Timer used to delay parsing
let diagnosticTimer: NodeJS.Timeout | null = null;
const diagnosticParserDelay = 1000;

let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
let hasDiagnosticRelatedInformationCapability = false;

const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

let parser: Parser = new Parser();
let currentParser: MapIniParser;

let forceAddModule: boolean = true
let precompileTransitionKeys: boolean = false

connection.onInitialize((params: InitializeParams) => {
	const capabilities = params.capabilities;
	const options = params.initializationOptions

	// Does the client support the `workspace/configuration` request?
	// If not, we fall back using global settings.
	hasConfigurationCapability = !!(
		capabilities.workspace && !!capabilities.workspace.configuration
	);
	hasWorkspaceFolderCapability = !!(
		capabilities.workspace && !!capabilities.workspace.workspaceFolders
	);
	hasDiagnosticRelatedInformationCapability = !!(
		capabilities.textDocument &&
		capabilities.textDocument.publishDiagnostics &&
		capabilities.textDocument.publishDiagnostics.relatedInformation
	);

	const result: InitializeResult = {
		capabilities: {
			textDocumentSync: TextDocumentSyncKind.Full,
			documentFormattingProvider: true,
			// Tell the client that this server supports code completion.
			// definitionProvider: false, //true
			// hoverProvider: false, //true
			completionProvider: {
				resolveProvider: false
			},
			// semanticTokensProvider: {
			// 	legend: {
			// 		tokenTypes,
			// 		tokenModifiers
			// 	},
			// 	range: true,
			// 	full: {
			// 		delta: false
			// 	}
			// }
		}
	};

	forceAddModule = options.forceAddModule !== undefined ? options.forceAddModule : true
	precompileTransitionKeys = options.precompileTransitionKeys !== undefined ? options.precompileTransitionKeys : false

	if (hasWorkspaceFolderCapability) {
		result.capabilities.workspace = {
			workspaceFolders: {
				supported: true
			}
		};
	}
	return result;
});

connection.onInitialized(() => {
	if (hasWorkspaceFolderCapability) {
		connection.workspace.onDidChangeWorkspaceFolders(_event => {
			console.log('Workspace folder change event received.');

			// Rerun symbol table
		});
	}

	connection.client.register(DocumentFormattingRequest.type)

	connection.client.register(DidChangeConfigurationNotification.type)

	if (hasConfigurationCapability) {
		connection.onDidChangeConfiguration(async (change: DidChangeConfigurationParams) => {
			const settings = await connection.workspace.getConfiguration('ZeroSyntax')

			forceAddModule = settings.forceAddModule !== null ? settings.forceAddModule : true
			
			if (settings.precompileTransitionKeys !== null) {
				precompileTransitionKeys = settings.precompileTransitionKeys
			}
		})
	}
});

connection.onDocumentFormatting((_edits) => {
	const document = documents.get(_edits.textDocument.uri)
	if (!document) {
		console.log(`Document not found.`)
		return null
	}

	return formatDocument(document, _edits.options.tabSize)
})

// connection.onDidOpenTextDocument((params: DidOpenTextDocumentParams) => {
// 	const document = params.textDocument.text
// 	documents.set(params.textDocument.uri, params.textDocument.text)
// })

// connection.onDidChangeTextDocument((params: DidChangeTextDocumentParams) => {

// 	console.log('Content Change!')
// 	const changes: TextDocumentContentChangeEvent[] = params.contentChanges

// 	// changes.forEach((change: TextDocumentContentChangeEvent) => {
// 	// 	if(TextDocumentContentChangeEvent.isIncremental(change)) {
// 	// 	}
// 	// })

// 	changes.forEach((change: TextDocumentContentChangeEvent) => {
// 		if(TextDocumentContentChangeEvent.isFull(change)) {
// 			computeDiagnostics(documents.get(params.textDocument.uri)!)
// 		}
// 	})

// })

// connection.onDidCloseTextDocument((params: DidCloseTextDocumentParams) => {
// 	console.log('Closed document')
// 	documents.delete(params.textDocument.uri)
// })

connection.onDidOpenTextDocument((params: DidOpenTextDocumentParams) => {
	const textDocument = documents.get(params.textDocument.uri)
});

documents.onDidChangeContent((change) => {
	if (diagnosticTimer) {
		clearTimeout(diagnosticTimer)
	}

    currentParser = parser.updateParser(change.document) //Potentially add another timer that is shorter, but does not create a parser for every input.

	diagnosticTimer = setTimeout(() => {
		let diagnostics = computeDiagnostics(currentParser, precompileTransitionKeys)
		// console.log(`Diagnostics: ${diagnostics}`)
		connection.sendDiagnostics({ uri: change.document.uri, diagnostics })
		console.log(`Diagnostics sent!`)
	}, diagnosticParserDelay)
});


connection.onCompletion((_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
	// console.log(`Requesting completions!`)

	// Retrieve the document
	const document = documents.get(_textDocumentPosition.textDocument.uri)!;
	const offset = document.offsetAt(_textDocumentPosition.position);

	
	let inputStream = CharStream.fromString(document.getText());
	let lexer = new MapIniLexer(inputStream);
	lexer.removeErrorListeners()
	let tokenStream = new CommonTokenStream(lexer);
	let parser = new MapIniParser(tokenStream);
	parser.removeErrorListeners()
	parser.errorHandler = new DefaultErrorStrategy()

	// Parse the document
	parser.buildParseTrees = true;
	const tree = parser.program(); // Use your language's entry point

	// Create the CodeCompletionCore instance
	const core = new CodeCompletionCore(parser);

	// Configure the core (optional)
	core.ignoredTokens = new Set([
		MapIniLexer.WS,    // Whitespace
		MapIniLexer.NEWLINE,
		MapIniLexer.COMMENT,
		MapIniLexer.EOF,   // End of file
		// Add other tokens to ignore if necessary
	]);

	if (!tokenStream) return []

	// Find the token index at the cursor position
	const tokenIndex = findTokenIndex(tokenStream.getTokens(), offset);

    console.log('Got Index')
	
	const contextAtPosition = findContextAtPosition(tree, offset);

	console.log(`ContextAtPosition: ${parser.ruleNames[contextAtPosition!.ruleIndex]}`)

	let candidates = null;

	// Collect completion candidates
	core.showDebugOutput = false
	if (contextAtPosition) {
		candidates = core.collectCandidates(tokenIndex, contextAtPosition);
        console.log(`Got candiates`)
	} else {
        console.log(`No candidates`)
    }


	// Generate completion items

	let completionItems: CompletionItem[] = []
    
    if(candidates) {
        completionItems = generateCompletionItems(candidates, parser);
    }

	completionItems.push(...getContextSpecificCompletions(parser.ruleNames[contextAtPosition!.ruleIndex]))

	return completionItems;
})

connection.onDidChangeWatchedFiles(_change => {
	// Monitored files have change in VSCode
	console.log('We received a file change event');
});

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();