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
	CodeActionParams,
	CodeAction,
	Diagnostic,
	CodeActionKind,
	TextEdit,
} from 'vscode-languageserver/node';

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
import { ForceAddModule_t } from './diagnostic/types/object/ForceAddModule_t';
import { PropertyDefinition } from './diagnostic/properties';
import { findClosestMatches } from './utils/quickfix/Algorithms';

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

const parser: Parser = new Parser();
let currentParser: MapIniParser;

let forceAddModule: ForceAddModule_t = ForceAddModule_t.No;
let precompileTransitionKeys: boolean = false;

let lastCodeActions: CodeAction[] = [];
let lastDiagnostics: Diagnostic[] = [];

connection.onInitialize((params: InitializeParams) => {
	const capabilities = params.capabilities;
	const options = params.initializationOptions;

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
			codeActionProvider: true,
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

	forceAddModule = options.forceAddModule !== undefined ? options.forceAddModule : true;
	precompileTransitionKeys = options.precompileTransitionKeys !== undefined ? options.precompileTransitionKeys : false;

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

	connection.client.register(DocumentFormattingRequest.type);

	connection.client.register(DidChangeConfigurationNotification.type);

	if (hasConfigurationCapability) {
		connection.onDidChangeConfiguration(async (change: DidChangeConfigurationParams) => {
			const settings = await connection.workspace.getConfiguration('ZeroSyntax');

			forceAddModule = settings.forceAddModule !== null ? settings.forceAddModule : true;
			
			if (settings.precompileTransitionKeys !== null) {
				precompileTransitionKeys = settings.precompileTransitionKeys;
			}

			if (settings.forceAddModule !== null) {
				forceAddModule = settings.forceAddModule as ForceAddModule_t;
			}
		});
	}
});

connection.onDocumentFormatting((_edits) => {
	const document = documents.get(_edits.textDocument.uri);
	if (!document) {
		console.log(`Document not found.`);
		return null;
	}

	return formatDocument(document, _edits.options.tabSize);
});

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
	const textDocument = documents.get(params.textDocument.uri);
});

documents.onDidChangeContent((change) => {
	if (diagnosticTimer) {
		clearTimeout(diagnosticTimer);
	}

    currentParser = parser.updateParser(change.document); //Potentially add another timer that is shorter, but does not create a parser for every input.

	diagnosticTimer = setTimeout(() => {
		const diagnostics = computeDiagnostics(change.document, currentParser, forceAddModule, precompileTransitionKeys);
		lastDiagnostics = diagnostics;
		// console.log(`Diagnostics: ${diagnostics}`)
		connection.sendDiagnostics({ uri: change.document.uri, diagnostics });
		console.log(`Diagnostics sent!`);
	}, diagnosticParserDelay);
});

connection.onCodeAction((params: CodeActionParams): CodeAction[] => {

	console.log(`Code action request received!`);
	lastCodeActions = [];

	for (const diagnostic of params.context.diagnostics) {
		console.log(`Diagnostic: ${diagnostic.message}`);

		if (diagnostic.source === 'ZeroSyntax-Server_missing_images') {

			const data = diagnostic.data as { images: number, numberImages: number };
			if (!data) {
				console.log(`No data found for diagnostic!`);
				continue;
			}

			let editString = '';
			for (let i = 0; i < data.numberImages - data.images; i++) {
				editString += `${' '.repeat(diagnostic.range.start.character)}Image = \n`;
			}

			lastCodeActions.push({
				title: `Add NumberImages`,
				kind: CodeActionKind.QuickFix,
				diagnostics: [diagnostic],
				edit: {
					changes: {
						[params.textDocument.uri]: [
							TextEdit.insert(
								{
									line: diagnostic.range.start.line + 1,
									character: 0
								},
								editString
							)
						]
					}
				}
			});
		} else if (diagnostic.source === 'ZeroSyntax-Server_missing_property') {
			const data = diagnostic.data as { propertyName: string, propertyDefinition: PropertyDefinition[] };
			if (!data) {
				console.log(`No data found for diagnostic!`);
				continue;
			}

			const closestMatches = findClosestMatches(data.propertyName, data.propertyDefinition.map(property => property.name));

			if (closestMatches.length === 0) {
				console.log(`No closest matches found for diagnostic!`);
				continue;
			}

			lastCodeActions.push({
				title: `Did you mean ${closestMatches[0]}?`,
				kind: CodeActionKind.QuickFix,
				diagnostics: [diagnostic],
				edit: {
					changes: {
						[params.textDocument.uri]: [
							TextEdit.replace(
								{
									start: diagnostic.range.start,
									end: {line: diagnostic.range.end.line, character: diagnostic.range.end.character + data.propertyName.length}
								},
								closestMatches[0]
							)
						]
					}
				}
			});
		} else if (diagnostic.source === 'ZeroSyntax-Server_incorrect_value') {
			const data = diagnostic.data as {
				propertyName: string,
				propertyDefinition: PropertyDefinition,
				position: number
			};
			if (!data) {
				console.log(`No data found for diagnostic!`);
				continue;
			}

			if (!data.propertyDefinition.validValues || !data.propertyDefinition.validValues[data.position]) {
				console.log(`No valid values found for diagnostic!`);
				continue;
			}


			let validValues: string[] | null = null;
			if (Array.isArray(data.propertyDefinition.type)) {
				validValues = data.propertyDefinition.validValues[data.position] as string[] | null;
			} else {
				validValues = data.propertyDefinition.validValues as string[] | null;
			}

			const closestMatches = findClosestMatches(data.propertyName, validValues, 4);

			if (closestMatches.length === 0) {
				console.log(`No closest matches found for diagnostic!`);
				continue;
			}

			lastCodeActions.push({
				title: `Did you mean ${closestMatches[0]}?`,
				kind: CodeActionKind.QuickFix,
				diagnostics: [diagnostic],
				edit: {
					changes: {
						[params.textDocument.uri]: [
							TextEdit.replace(
								{
									start: diagnostic.range.start,
									end: { line: diagnostic.range.start.line, character: diagnostic.range.start.character + data.propertyName.length }
								},
								closestMatches[0]
							)
						]
					}
				}
			});
		}
	}


	return lastCodeActions;
});

connection.onCompletion((_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
	// console.log(`Requesting completions!`)

	// Retrieve the document
	// const document = documents.get(_textDocumentPosition.textDocument.uri)!;
	// const offset = document.offsetAt(_textDocumentPosition.position);

	
	// let inputStream = CharStream.fromString(document.getText());
	// let lexer = new MapIniLexer(inputStream);
	// lexer.removeErrorListeners()
	// let tokenStream = new CommonTokenStream(lexer);
	// let parser = new MapIniParser(tokenStream);
	// parser.removeErrorListeners()
	// parser.errorHandler = new DefaultErrorStrategy()

	// // Parse the document
	// parser.buildParseTrees = true;
	// const tree = parser.program(); // Use your language's entry point

	// const completionVisitor = new CompletionVisitor(offset)
	// completionVisitor.visit(tree)
	// // Create the CodeCompletionCore instance
	// const core = new CodeCompletionCore(parser);

	// // Configure the core (optional)
	// core.ignoredTokens = new Set([
	// 	MapIniLexer.ID,
	// 	MapIniLexer.WS,    // Whitespace
	// 	MapIniLexer.NEWLINE,
	// 	MapIniLexer.COMMENT,
	// 	MapIniLexer.EOF,   // End of file
	// 	// Add other tokens to ignore if necessary
	// ]);

	// if (!tokenStream) return []

	// // Find the token index at the cursor position
	// const tokenIndex = findTokenIndex(tokenStream.getTokens(), offset);

    // console.log('Got Index')
	
	// const contextAtPosition = findContextAtPosition(tree, offset);

	// console.log(`ContextAtPosition: ${parser.ruleNames[contextAtPosition!.ruleIndex]}`)

	// let candidates = null;

	// // Collect completion candidates
	// core.showDebugOutput = false
	// if (contextAtPosition) {
	// 	candidates = core.collectCandidates(tokenIndex, contextAtPosition);
    //     console.log(`Got candiates`)
	// } else {
    //     console.log(`No candidates`)
    // }

	// // Generate completion items

	// let completionItems: CompletionItem[] = []
    
    // if(candidates) {
    //     completionItems = generateCompletionItems(candidates, parser);
    // }

	// completionItems.push(...completionVisitor.getCompletionList())

	// completionItems.push(...getContextSpecificCompletions(parser.ruleNames[contextAtPosition!.ruleIndex]))

	// return completionItems;
	return [];
});

connection.onDidChangeWatchedFiles(_change => {
	// Monitored files have change in VSCode
	console.log('We received a file change event');
});

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();