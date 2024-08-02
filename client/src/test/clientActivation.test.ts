import * as assert from 'assert';
import * as vscode from 'vscode';
import { activate, getDocUri } from './helper';

suite('Extension Test Suite', async () => {
    vscode.window.showInformationMessage('Start all client tests.');

    let extension: vscode.Extension<any>
    let docUri: vscode.Uri

    suiteSetup(async () => {
        docUri = getDocUri('test_diagnostics.ini')
        extension = await activate(docUri)
    })
    
    test('Extension Activation Test', () => {
        assert.equal(extension.isActive, true, `Test: Extension not activated!`)
    });
});