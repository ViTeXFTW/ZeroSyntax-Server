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
	DefinitionParams,
	Definition,
	HoverParams,
	Hover,
	SemanticTokensParams,
	SemanticTokens,
	DidOpenTextDocumentParams,
	SemanticTokensBuilder,
	TextDocumentChangeEvent,
	DidOpenTextDocumentNotification,
	DidChangeTextDocumentParams,
	Diagnostic,
	DiagnosticSeverity,
	NotificationHandler,
	TextDocumentContentChangeEvent,
	DidCloseTextDocumentParams
} from 'vscode-languageserver/node'

import {
	TextDocument,
} from 'vscode-languageserver-textdocument';
import {
	TreeListener
} from './AntlrListener';

import { formatDocument } from './utils/formatter';
import { SymbolTable } from './utils/symbols/SymbolTable';
import { computeSymbolTable } from './utils/symbols/SymbolVisitor';
import { computeDiagnostics } from './utils/diagnosticsVisitor';
import { findDefinition } from './utils/definitions';
import { getHoverInformation } from './utils/hover';
import { tokenModifiers, tokenTypes } from './utils/tokenTypes'
import { getSemanticTokens } from './utils/semanticTokens';

// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager.
// const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

// Timer used to delay parsing
let parseTimer: NodeJS.Timeout | null = null;
const parseDelay = 1000;

let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
let hasDiagnosticRelatedInformationCapability = false;

const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

let forceAddModule: boolean = true

let symbolTable: Map<string, SymbolTable> = new Map<string, SymbolTable>();

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
			// Tell the client that this server supports code completion.
			// definitionProvider: false, //true
			// hoverProvider: false, //true
			// completionProvider: {
			// 	resolveProvider: false //true
			// },
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

	connection.onDocumentFormatting((_edits) => {
		const document = documents.get(_edits.textDocument.uri)
		if (!document) {
			console.log(`Document not found.`)
			return null
		}

		return formatDocument(document, _edits.options.tabSize)
	})

	connection.client.register(DidChangeConfigurationNotification.type)

	if (hasConfigurationCapability) {
		connection.onDidChangeConfiguration(async (change: DidChangeConfigurationParams) => {
			const settings = await connection.workspace.getConfiguration('ZeroSyntax')

			if (settings.forceAddModule !== null) {
				forceAddModule = settings.forceAddModule
				console.log(`Updated forceAddmodule to: ${forceAddModule}`)
			} else {
				// If setting is not null set forceAddmoule to setting else default to true
				change.settings.forceAddModule !== null ? forceAddModule = change.settings.forceAddModule : forceAddModule = true
			}
		})
	}
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

connection.onDidOpenTextDocument(async (params: DidOpenTextDocumentParams) => {
	const textDocument = documents.get(params.textDocument.uri)
	symbolTable.set(textDocument!.uri, await computeSymbolTable(textDocument!))
});

connection.onHover((params: HoverParams): Hover | null => {
	return getHoverInformation(params, documents, symbolTable.get(params.textDocument.uri)!)
});

connection.onDefinition((params: DefinitionParams): Definition | null => {
	return findDefinition(params, documents, symbolTable.get(params.textDocument.uri)!)
});

documents.onDidChangeContent(async (change) => {
	if(parseTimer) {
		clearTimeout(parseTimer)
	}

	parseTimer = setTimeout(async () => {

		/**
		 * Handles updating SymbolTables for a document
		 * if that document has been changed.
		 */
		if(!symbolTable.has(change.document.uri)) {
			console.log(`SymbolTable doesn't exists`)
			let table = await computeSymbolTable(change.document) 						// Compute Symbols from document, if table hasn't been created.
			table.setVersion(change.document.version)									// Store document version for table.
			symbolTable.set(change.document.uri, table)									// Update SymboTable Map
			console.log(`Added SymbolTable to map with key: ${change.document.uri}`)
		} else {
			console.log(`SymbolTable exists`)
			if(symbolTable.get(change.document.uri)?.getVersion() !== change.document.version) {
				console.log(`Document version is wrong. Recomputing SymbolTable`)
				symbolTable.delete(change.document.uri)
				symbolTable.set(change.document.uri, await computeSymbolTable(change.document))
			}
		}

		console.log(`Computing diagnostics...`)
		const diagnostics = await computeDiagnostics(change.document)
		connection.sendDiagnostics({uri: change.document.uri, diagnostics})
		console.log(`Diagnostics sent!`)
	}, parseDelay)
});

connection.onRequest("textDocument/semanticTokens/full", async (params: SemanticTokensParams): Promise<SemanticTokens> => {
	// let temp = new SemanticTokensBuilder()
	// return temp.build()

	let uri = params.textDocument.uri;
	if (!symbolTable.has(uri)) {
		let document = documents.get(uri);
		if (document) {
			let table = await computeSymbolTable(document);
			symbolTable.set(uri, table);
		}
	}
	return await getSemanticTokens(documents, params, symbolTable.get(uri)!);
});

connection.onRequest("textDocument/semanticTokens/range", async (params: SemanticTokensParams): Promise<SemanticTokens> => {
	// let temp = new SemanticTokensBuilder()
	// return temp.build()

	let uri = params.textDocument.uri;
	if (!symbolTable.has(uri)) {
		let document = documents.get(uri);
		if (document) {
			let table = await computeSymbolTable(document);
			symbolTable.set(uri, table);
		}
	}
	return await getSemanticTokens(documents, params, symbolTable.get(uri)!);
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

