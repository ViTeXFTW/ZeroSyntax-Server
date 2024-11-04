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
import { CompletionVisitor } from './completion/completionVisitor';
import { ForceAddModule_t } from './diagnostic/types/ForceAddModule_t';
import { CompletionProvider } from './completion/completionProvider';

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

let forceAddModule: ForceAddModule_t = ForceAddModule_t.No
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

			if (settings.forceAddModule !== null) {
				forceAddModule = settings.forceAddModule as ForceAddModule_t
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
		let diagnostics = computeDiagnostics(currentParser, forceAddModule, precompileTransitionKeys)
		// console.log(`Diagnostics: ${diagnostics}`)
		connection.sendDiagnostics({ uri: change.document.uri, diagnostics })
		console.log(`Diagnostics sent!`)
	}, diagnosticParserDelay)
});

const completionProvider = new CompletionProvider(parser);

connection.onCompletion((_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
	// console.log(`Requesting completions!`)

	const document = documents.get(_textDocumentPosition.textDocument.uri)!;
    
    return completionProvider.getCompletions(
        document, 
        _textDocumentPosition.position
    );

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