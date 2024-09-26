import { testFilesPath, testFormatterConfigPath } from '../constants';
import { loadTestCaseJSONC } from '../helper';
import * as vscode from 'vscode'
import * as fs from 'fs';
import * as path from 'path';
import * as vscode_languageserver_textdocument from 'vscode-languageserver-textdocument';
import * as assert from 'assert';
import { formatDocument } from '../../src/utils/formatter';



suite('Language Server Formatter Suite', () => {

	// Setup hook to run before each test in the suite
	setup(async () => {
		// Perform any setup if needed, such as clearing diagnostics or resetting the environment
	});

	// Teardown hook to run after each test in the suite
	teardown(async () => {
		// Clean up after each test if needed
	});

	const testCases = loadTestCaseJSONC(testFormatterConfigPath)
	
	for (const testCase of testCases.tests) {
		test(`${testCase.contentPath}`, async () => {
			assert.deepStrictEqual(true, false, 'Not Implemented')
		})
	}

})