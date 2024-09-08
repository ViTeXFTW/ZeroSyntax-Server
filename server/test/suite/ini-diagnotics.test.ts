import * as vscode from 'vscode'
import * as fs from 'fs';
import * as path from 'path';
import * as vscode_languageserver_textdocument from 'vscode-languageserver-textdocument';
import * as assert from 'assert';
import { loadTestCaseJSONC } from '../helper';
import { testDiagnoticsConfigPath, testFilesPath } from '../constants';
import { computeDiagnostics } from '../../src/utils/diagnosticsVisitor';
import { Diagnostic } from 'vscode-languageserver';

suite('Language Server Diagnostics Suite', () => {
  
	// Setup hook to run before each test in the suite
	setup(async () => {
	  // Perform any setup if needed, such as clearing diagnostics or resetting the environment
	});
  
	// Teardown hook to run after each test in the suite
	teardown(async () => {
	  // Clean up after each test if needed
	});

	const testCases = loadTestCaseJSONC(testDiagnoticsConfigPath);
  
	for(const testCase of testCases.tests) {
		test(`${testCase.contentPath}, should give error? ${testCase.expectedDiagnostics}`, async () => {

			const absolutePath = path.resolve(testFilesPath + testCase.contentPath)

			assert.notEqual(absolutePath, null, `Path to test document could not be resolved!`)

			const fileContent = await fs.promises.readFile(absolutePath, 'utf-8')
		
			assert.notEqual(fileContent, null, `Contents of file couldn't be read!`)

			let document = vscode_languageserver_textdocument.TextDocument.create('','ini',0,fileContent)

			const diagnostics = await computeDiagnostics(document)

			const emptyDiag: Diagnostic[] = []

			if (testCase.expectedDiagnostics == true) {
				assert.notDeepStrictEqual(diagnostics, emptyDiag, 'Expected diagnostics, but computed diagnotics was empty')
			} else {
				assert.deepStrictEqual(diagnostics, emptyDiag, 'Expected no diagnotics, but computed diagnotics was not empty')
			}
		});
	}
});
