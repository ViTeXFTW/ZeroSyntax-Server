/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import { getVSCodeDownloadUrl } from '@vscode/test-electron/out/util';
import { time } from 'console';
import * as path from 'path';
import * as vscode from 'vscode';

import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind
} from 'vscode-languageclient/node';

let client: LanguageClient;

export function activate(context: vscode.ExtensionContext) {

	// const command = "extension.formatDocument";
	
	// context.subscriptions.push(vscode.commands.registerCommand(command, formatDocument));

	context.subscriptions.push(vscode.languages.registerDocumentFormattingEditProvider('ini', {
		provideDocumentFormattingEdits: (document: vscode.TextDocument): vscode.TextEdit[] => {
			// return formatDocument(document);
			const edits: vscode.TextEdit[] = [];
			let indentlevel = 0;
			const indentSize = 2;

			let singleBlockList = ["^\\b([Oo]bject)\\s+[a-zA-Z0-9_]", "^\\b([Oo]bject[Rr]eskin)\\s+[a-zA-Z0-9_]", "^\\b([Aa]dd[Mm]odule)$", "^\\b([Rr]eplace[Mm]odule)$", "^\\b([Dd]efault[Cc]ondition[Ss]tate)$", "^\\b([Uu]nit[Ss]pecific[Ss]ounds)$", "^\\b([Pp]rerequisites)$", "^\\b([Aa]rmor[Ss]et)$", "^\\b([Ww]eapon[Ss]et)$"];
			let multiblock = ["\\b([Dd]raw)\\s*=", "\\b([Cc]ondition[Ss]tate)\\s*=", "\\b([Tt]ransition[Ss]tate)\\s*=", "\\b([Bb]ody)\\s*=", "\\b([Bb]ehavior)\\s*=", "\\b([Cc]lient[Uu]pdate)\\s*=", "^\\b(Turret)$"];

			for(let i = 0; i < document.lineCount; i++) {
				const lineText = document.lineAt(i).text;
				const trimmedLine = lineText.trim();

				if(trimmedLine.endsWith("End") || trimmedLine.endsWith("end") || trimmedLine.endsWith("END")) {
					indentlevel = Math.max(0, indentlevel - 1);
				}

				const indentedLine = " ".repeat(indentSize * indentlevel) + trimmedLine;
				const range = new vscode.Range(i, 0, i, lineText.length);
				edits.push(vscode.TextEdit.replace(range, indentedLine));
				
				for(let block of singleBlockList) {
					if(checkLineWithRegex(trimmedLine, block)) {
						indentlevel++;
					}
				}

				for(let block of multiblock) {
					if(checkLineWithRegex(trimmedLine, block)) {
						indentlevel++;
					}
				}
	
			}

			return edits;
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
			transport: TransportKind.ipc,
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
		'languageServerExample',
		'Language Server Example',
		serverOptions,
		clientOptions
	);

	// Start the client. This will also launch the server
	client.start();
}

function checkLineWithRegex(line: string, regex: string) {
	let Regex = new RegExp(regex, "g");
	return Regex.test(line);
}

export function deactivate(): Thenable<void> | undefined {
	if (!client) {
		return undefined;
	}
	return client.stop();
}
