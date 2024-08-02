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
	SemanticTokensBuilder
} from 'vscode-languageserver/node';

import {
	TextDocument
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
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

// Timer used to delay parsing
let parseTimer: NodeJS.Timeout | null = null;
const parseDelay = 1000;

let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
let hasDiagnosticRelatedInformationCapability = false;

let forceAddModule: boolean = true

let symbolTable: Map<string, SymbolTable> = new Map<string, SymbolTable>();

connection.onInitialize((params: InitializeParams) => {

	connection.console.log(`From server +connection`)
	console.log(`From server -connection`)

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
			textDocumentSync: TextDocumentSyncKind.Incremental,
			// Tell the client that this server supports code completion.
			definitionProvider: true,
			hoverProvider: true,
			completionProvider: {
				resolveProvider: true
			},
			semanticTokensProvider: {
				legend: {
					tokenTypes,
					tokenModifiers
				},
				range: true,
				full: {
					delta: false
				}
			}
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
			connection.console.log('Workspace folder change event received.');

			// Rerun symbol table
		});
	}

	connection.client.register(DocumentFormattingRequest.type)

	connection.onDocumentFormatting((_edits) => {
		const document = documents.get(_edits.textDocument.uri)
		if (!document) {
			connection.console.log(`Document not found.`)
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
				connection.console.log(`Updated forceAddmodule to: ${forceAddModule}`)
			} else {
				// If setting is not null set forceAddmoule to setting else default to true
				change.settings.forceAddModule !== null ? forceAddModule = change.settings.forceAddModule : forceAddModule = true
			}
		})
	}
});

connection.onDidOpenTextDocument((params: DidOpenTextDocumentParams) => {
	const textDocument = documents.get(params.textDocument.uri)
	symbolTable.set(textDocument!.uri, computeSymbolTable(textDocument!))
});

connection.onHover((params: HoverParams): Hover | null => {
	return getHoverInformation(params, documents, symbolTable.get(params.textDocument.uri)!)
});

connection.onDefinition((params: DefinitionParams): Definition | null => {
	return findDefinition(params, documents, symbolTable.get(params.textDocument.uri)!)
});

connection.onRequest("textDocument/semanticTokens/full", (params: SemanticTokensParams): SemanticTokens => {
	//TODO: Create symbol table before running
	const textDocument = documents.get(params.textDocument.uri)
	symbolTable.set(textDocument!.uri, computeSymbolTable(textDocument!))

	try {
		return getSemanticTokens(documents, params, symbolTable.get(params.textDocument.uri)!)
	} catch {
		console.log('Failed to generate SemanticTokens, rerun on next change.')
		let tokenBuilder = new SemanticTokensBuilder()
		return tokenBuilder.build()
	}
});

connection.onRequest("textDocument/semanticTokens/range", (params: SemanticTokensParams): SemanticTokens => {
	//TODO: Create symbol table before running
	const textDocument = documents.get(params.textDocument.uri)
	symbolTable.set(textDocument!.uri, computeSymbolTable(textDocument!))
	
	try {
		return getSemanticTokens(documents, params, symbolTable.get(params.textDocument.uri)!)
	} catch {
		console.log('Failed to generate SemanticTokens, rerun on next change.')
		let tokenBuilder = new SemanticTokensBuilder()
		return tokenBuilder.build()
	}
});

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent(change => {

	if (parseTimer) {
		clearTimeout(parseTimer);
	}

	parseTimer = setTimeout(async () => {
		const textDocument = change.document;
		// Update SymbolTable
		symbolTable.set(textDocument.uri, computeSymbolTable(textDocument))
		const diagnostics = computeDiagnostics(textDocument, symbolTable.get(textDocument.uri)!)

		console.log(`Server: ${diagnostics}`)

		// Create a listener for tree traversal
		// const treeListener = new TreeListener(forceAddModule);
		// Parse the document to compute diagnostics
		// const diagnostics = await computeDiagnostics(treeListener, textDocument);
		// treeListener.resetDiagnostics();

		// Send the updated diagnostics to the client
		connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
	}, parseDelay);
});

connection.onDidCloseTextDocument(e => {
	connection.console.log(`Closed document`)
});

connection.onDidChangeWatchedFiles(_change => {
	// Monitored files have change in VSCode
	connection.console.log('We received a file change event');
});

// This handler provides the initial list of the completion items.
connection.onCompletion(
	(_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
		// The pass parameter contains the position of the text document in
		// which code complete got requested. For the example we ignore this
		// info and always provide the same completion items.
		return [
			{
				label: 'RadarPriority',
				kind: CompletionItemKind.Text,
				data: 1
			},
			{
				label: 'KindOf',
				kind: CompletionItemKind.Text,
				data: 2
			},
			{
				label: 'Locomotor',
				kind: CompletionItemKind.Text,
			},
			{
				label: 'RemoveModule',
				kind: CompletionItemKind.Text,
			},
			{
				label: 'End',
				kind: CompletionItemKind.Text,
			},
			{
				label: 'NONE',
				kind: CompletionItemKind.Text,
			},
			{
				label: 'DAMAGED',
				kind: CompletionItemKind.Text,
			},
			{
				label: 'REALLYDAMAGED',
				kind: CompletionItemKind.Text,
			},
			{
				label: 'RUBBLE',
				kind: CompletionItemKind.Text,
			},
			{
				label: 'AliasConditionState',
				kind: CompletionItemKind.Text,
			},
			{
				label: 'IgnoreConditionStates',
				kind: CompletionItemKind.Text,
			},
			{
				label: 'TransitionState',
				kind: CompletionItemKind.Text,
			}
		];
	}
);

// This handler resolves additional information for the item selected in
// the completion list.
connection.onCompletionResolve(
	(item: CompletionItem): CompletionItem => {
		if (item.data === 1) {
			item.detail = 'TypeScript details';
			item.documentation = 'TypeScript documentation';
		} else if (item.data === 2) {
			item.detail = 'JavaScript details';
			item.documentation = 'JavaScript documentation';
		}
		return item;
	}
);

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();

