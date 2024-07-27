/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as path from 'path';
import * as vscode from 'vscode';

import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind
} from 'vscode-languageclient/node';

let client: LanguageClient;
let languageServerRunning = false;

const ZSconfig = vscode.workspace.getConfiguration('ZeroSyntax');
const EditorConfig = vscode.workspace.getConfiguration('editor')

let forceAddModule = ZSconfig.get<boolean>('forceAddModule', false)

export function activate(context: vscode.ExtensionContext) {

	// const command = "extension.formatDocument";
	
	// context.subscriptions.push(vscode.commands.registerCommand(command, formatDocument));

	let languageServerRunning = ZSconfig.get<boolean>('serverStartupSetting', false); // Default to 2 if not set

	context.subscriptions.push(vscode.commands.registerCommand('ZeroSyntax.stopLanguageServer', () => {
		if(languageServerRunning) {
			console.log(`Stopping LS...`)
			client.stop();
			languageServerRunning = false;
		}
	}));

	context.subscriptions.push(vscode.commands.registerCommand('ZeroSyntax.startLanguageServer', () => {
		if(!languageServerRunning) {
			console.log(`Starting LS...`)
			client.start();
			languageServerRunning = true;
		}
	}));

	// The server is implemented in node
	const serverModule = context.asAbsolutePath(
		path.join('server', 'out', 'server.js')
	);

	console.log("ZeroSyntax Client Active");

	// If the extension is launched in debug mode then the debug server options are used
	// Otherwise the run options are used
	const serverOptions: ServerOptions = {
		run: { module: serverModule, transport: TransportKind.ipc },
		debug: {
			module: serverModule,
			transport: TransportKind.ipc
		}
	};

	// Options to control the language client
	const clientOptions: LanguageClientOptions = {
		// Register the server for plain text documents
		documentSelector: [{ scheme: 'file', language: 'ini' }],
		synchronize: {
			// Notify the server about file changes to '.clientrc files contained in the workspace
			fileEvents: vscode.workspace.createFileSystemWatcher('**/.clientrc')
		}
	};

	// Create the language client and start the client.
	client = new LanguageClient(
		'ZeroSyntax',
		'Zero Hour Language Server',
		serverOptions,
		clientOptions
	);

	// Start the client. This will also launch the server
	if(languageServerRunning) {
		client.start();
	}
}

vscode.workspace.onDidChangeConfiguration((e) => {
	if(e.affectsConfiguration('ZeroSyntax.serverStartupSetting')) {
		languageServerRunning = ZSconfig.get<boolean>('serverStartupSetting', false);
		toggleLanguageServer();
	}
});

function toggleLanguageServer() {
	if(languageServerRunning) {
		client.stop();
		languageServerRunning = false;
	} else {
		client.start();
		languageServerRunning = true;
	}
}

export function deactivate(): Thenable<void> | undefined {
	if (!client) {
		return undefined;
	}
	return client.stop();
}
