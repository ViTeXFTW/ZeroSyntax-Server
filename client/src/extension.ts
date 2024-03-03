/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import { getVSCodeDownloadUrl } from '@vscode/test-electron/out/util';
import { time } from 'console';
import * as path from 'path';
import { config } from 'process';
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
			return formatDocument(document);
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

function formatDocument(document: vscode.TextDocument): vscode.TextEdit[] {
	const edits: vscode.TextEdit[] = [];
	let indentlevel = 0;

	const config = vscode.workspace.getConfiguration('ZeroSyntax');
	const indentSize = config.get<number>('indentNumber', 2); // Default to 2 if not set

	let ObjectsRegex = ["^\\b([Oo]bject)\\s+[a-zA-Z0-9_]", "^\\b([Oo]bject[Rr]eskin)\\s+[a-zA-Z0-9_]", "^\\b([Aa]dd[Mm]odule)$", "^\\b([Rr]eplace[Mm]odule)$", "^\\b([Dd]efault[Cc]ondition[Ss]tate)$", "^\\b([Uu]nit[Ss]pecific[Ss]ounds)$", "^\\b([Pp]rerequisites)$", "^\\b([Aa]rmor[Ss]et)$", "^\\b([Ww]eapon[Ss]et)$", "^\\b([Dd]raw)\\s*=", "^\\b([Cc]ondition[Ss]tate)\\s*=", "^\\b([Tt]ransition[Ss]tate)\\s*=", "^\\b([Bb]ody)\\s*=", "^\\b([Bb]ehavior)\\s*=", "^\\b([Cc]lient[Uu]pdate)\\s*=", "^\\b(Turret)$"];
	let SimpleClassesRegex = ["^\\b([Mm]apped[Ii]mage)\\s+[a-zA-Z0-9_]", "^\\b([Pp]article[Ss]ystem)\\s+[a-zA-Z0-9_]", "^\\b([Ll]ocomotor)\\s+[a-zA-Z0-9_]", "^\\b([Aa]udio[Ee]vent)\\s+[a-zA-Z0-9_]", "^\\b([Dd]ialog[Ee]vent)\\s+[a-zA-Z0-9_]", "^\\b([Aa]rmor)\\s+[a-zA-Z0-9_]", "^\\b([Cc]ommand[Ss]et)\\s+[a-zA-Z0-9_]", "^\\b([Cc]ommand[Bb]utton)\\s+[a-zA-Z0-9_]", "^\\b([Ww]eapon)\\s+[a-zA-Z0-9_]", "^\\b([Dd]amage[Ff][Xx])\\s+[A-Za-z0-9_]", "^\\b([Uu]pgrade)\\s+[a-zA-Z0-9_]", "^\\b([Pp]layer[Tt]emplate)\\s+[a-zA-Z0-9_]", "^\\b(Rank)\\s+[1-8]$", "^\\b([Ii]n[Gg]ame[Uu][Ii])$", "^\\b(A10StrikeRadiusCursor)$", "^\\b(AmbushRadiusCursor)$", "^\\b(ClusterMinesRadiusCursor)$", "^\\b(AnthraxBombRadiusCursor)$"];
	let OCLRegex = ["^\\b([Oo]bject[Cc]reation[Ll]ist)\\s+[a-zA-Z0-9_]", "^\\b([Cc]reate[Oo]bject)$", "^\\b([Cc]reate[Dd]ebris)$", "^\\b([Aa]pply[Rr]andom[Ff]orce)$", "^\\b([Dd]eliver[Pp]ayload)$", "^\\b([Dd]elivery[Dd]ecal)$", "^\\b([Ff]ire[ww]eapon)$", "^\\b([Aa]ttack)$"];
	let FXlistRegex = ["^\\b([Ff][Xx][Ll]ist)\\s+[a-zA-Z0-9_]", "^\\b([Pp]article[Ss]ystem)$", "^\\b([Ss]ound)$", "^\\b([Tt]errain[Ss]corch)$", "^\\b([Tt]racer)$", "^\\b([Ll]ight[Pp]ulse)$", "^\\b([Vv]iew[Ss]hake)$", "^\\b([Ff][Xx][Ll]ist[Aa]t[Bb]one[Pp]os)$"];

	let EndRegex = ["^\\b([Ee]nd)$", "^\\b(END)$"]

	for(let i = 0; i < document.lineCount; i++) {
		const lineText = document.lineAt(i).text;
		const trimmedLine = lineText.trim();

		for(let block of EndRegex) {
			if(checkLineWithRegex(trimmedLine, block)) {	
				indentlevel = Math.max(0, indentlevel - 1);
			}
		}

		const indentedLine = " ".repeat(indentSize * indentlevel) + trimmedLine;
		const range = new vscode.Range(i, 0, i, lineText.length);
		edits.push(vscode.TextEdit.replace(range, indentedLine));
		
		
		for(let block of ObjectsRegex) {
			if(checkLineWithRegex(trimmedLine, block)) {	
				indentlevel++;
			}
		}
		for(let block of SimpleClassesRegex) {
			if(checkLineWithRegex(trimmedLine, block)) {	
				indentlevel++;
			}
		}
		for(let block of FXlistRegex) {
			if(checkLineWithRegex(trimmedLine, block)) {	
				indentlevel++;
			}
		}
		for(let block of OCLRegex) {
			if(checkLineWithRegex(trimmedLine, block)) {	
				indentlevel++;
			}
		}
	}

	return edits;
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
