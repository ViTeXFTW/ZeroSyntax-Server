import * as assert from 'assert';
import * as vscode from 'vscode';
import * as helper from './helper';

suite('Extension Diagnostic Suite', async () => {
    vscode.window.showInformationMessage('Starting diagnostic tests!');

    let extension: vscode.Extension<any>
    let docUri: vscode.Uri

    suiteSetup(async () => {
        docUri = helper.getDocUri('test_diagnostics.ini')
        extension = await helper.activate(docUri)
    })
});