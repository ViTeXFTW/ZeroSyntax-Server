import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
// import * as myExtension from '../extension';

//! Extension Imports
import { findContextAtPosition } from '../../completion/helpers';
import { MapIniParser } from '../../utils/antlr4ng/MapIniParser';
import { MapIniLexer } from '../../utils/antlr4ng/MapIniLexer';
import { readFileSync } from 'fs';
import { CharStream, CommonTokenStream, ParserRuleContext } from 'antlr4ng';
import { resolve } from 'path';

const __root = resolve(__dirname, '..', '..', '..');

suite('Completion Helpers', () => {
	let tree: ParserRuleContext;

	setup(() => {
		// Read test file
		const testFile = readFileSync(`${__root}/testDocuments/object.ini`, 'utf8');
		const inputStream = CharStream.fromString(testFile);
		const lexer = new MapIniLexer(inputStream);
		const tokenStream = new CommonTokenStream(lexer);
		tree = new MapIniParser(tokenStream).program();
	})

	test('findContextAtPosition', () => {
		
	})
});