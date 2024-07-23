/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import {
	createConnection,
	TextDocuments,
	Diagnostic,
	DiagnosticSeverity,
	ProposedFeatures,
	InitializeParams,
	DidChangeConfigurationNotification,
	CompletionItem,
	CompletionItemKind,
	TextDocumentPositionParams,
	TextDocumentSyncKind,
	InitializeResult
} from 'vscode-languageserver/node';

import {
	TextDocument
} from 'vscode-languageserver-textdocument';
import {
	CustomErrorListener,
	TreeListener
} from './AntlrListener';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { MapIniLexer } from './antlr/MapIniLexer';
import { MapIniParser } from './antlr/MapIniParser';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';

// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager.
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);
// Create a listener for tree traversal
const treeListener = new TreeListener();

// Timer used to delay parsing
let parseTimer: NodeJS.Timeout | null = null;
const parseDelay = 1000;

// Extension settings
let forceAddModule = false

let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
let hasDiagnosticRelatedInformationCapability = false;

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
			textDocumentSync: TextDocumentSyncKind.Incremental,
			// Tell the client that this server supports code completion.
			completionProvider: {
				resolveProvider: true
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
	forceAddModule = options.forceAddmodule
	return result;
});

connection.onInitialized(() => {
	if (hasConfigurationCapability) {
		// Register for all configuration changes.
		connection.client.register(DidChangeConfigurationNotification.type, undefined);
	}
	if (hasWorkspaceFolderCapability) {
		connection.workspace.onDidChangeWorkspaceFolders(_event => {
			connection.console.log('Workspace folder change event received.');
		});
	}
});

// The example settings
interface ExampleSettings {
	maxNumberOfProblems: number;
}

// The global settings, used when the `workspace/configuration` request is not supported by the client.
// Please note that this is not the case when using this server with the client provided in this example
// but could happen with other clients.
const defaultSettings: ExampleSettings = { maxNumberOfProblems: 1000 };
let globalSettings: ExampleSettings = defaultSettings;

// Cache the settings of all open documents
const documentSettings: Map<string, Thenable<ExampleSettings>> = new Map();

connection.onDidChangeConfiguration(change => {
	if (hasConfigurationCapability) {
		// Reset all cached document settings
		documentSettings.clear();
	} else {
		globalSettings = <ExampleSettings>(
			(change.settings.languageServerExample || defaultSettings)
		);
	}

	// Revalidate all open text documents
	documents.all().forEach(validateTextDocument);
});

function getDocumentSettings(resource: string): Thenable<ExampleSettings> {
	if (!hasConfigurationCapability) {
		return Promise.resolve(globalSettings);
	}
	let result = documentSettings.get(resource);
	if (!result) {
		result = connection.workspace.getConfiguration({
			scopeUri: resource,
			section: 'languageServerExample'
		});
		documentSettings.set(resource, result);
	}
	return result;
}

// Only keep settings for open documents
documents.onDidClose(e => {
	documentSettings.delete(e.document.uri);
});

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent(change => {
    if (parseTimer) {
        clearTimeout(parseTimer);
    }

    parseTimer = setTimeout(async () => {
        const textDocument = change.document;
        // Get the settings for every validate run.
        const settings = await getDocumentSettings(textDocument.uri);

        // Parse the document to compute diagnostics
        const diagnostics = await computeDiagnostics(textDocument);

        // Send the updated diagnostics to the client
        connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });

        // Reset the tree listener diagnostics for the next run
        treeListener.resetDiagnostics();
    }, parseDelay);
});

async function computeDiagnostics(textDocument: TextDocument): Promise<Diagnostic[]> {
    try {
		if(forceAddModule) {
			connection.console.log("Parsing with enforced addmule/replacemodule")
		}

        const inputStream = CharStreams.fromString(textDocument.getText());
        const lexer = new MapIniLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new MapIniParser(tokenStream);
		parser.removeErrorListeners();
		parser.addErrorListener(new CustomErrorListener(textDocument, treeListener));

        const walker = new ParseTreeWalker();
        const root = parser.program();
        walker.walk(treeListener, root);

        return treeListener.getDiagnostics();
    } catch (error) {
        // Handle any parsing errors here
        connection.console.error(`Error computing diagnostics: ${error}`);
        return [];
    }
}

async function validateTextDocument(textDocument: TextDocument): Promise<void> {
	
}

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

