import { Definition, DefinitionParams, Location, Position, TextDocuments } from 'vscode-languageserver';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { SymbolTable } from './symbols/SymbolTable';

export function findDefinition(params: DefinitionParams, documents: TextDocuments<TextDocument>, symbolTable: SymbolTable): Definition | null {
	const document = documents.get(params.textDocument.uri)
	if (!document) {
		console.log('No document')
		return null
	}

	const position = params.position
	const word = getWordAtPosition(document, position)

	if (!word) {
		console.log('No Word');
		return null;
	}

	console.log(`Definition word: ${word}`)

	const symbol = symbolTable.getAllSymbols().find(s => s.name === word)
	if (!symbol) {
		console.log('No Symbol');
		return null;
	}



	const location: Location = {
		uri: params.textDocument.uri,
		range: {
			start: Position.create(symbol.location.line - 1, symbol.location.column),
			end: Position.create(symbol.location.line - 1, symbol.location.column + word.length)
		}
	};

	return location
}


export function getWordAtPosition(document: TextDocument, position: Position): string | null {
	const text = document.getText();
	const offset = document.offsetAt(position);

	let start = offset;
	let end = offset;

	while (start > 0 && isWordCharacter(text.charAt(start - 1))) {
		start--;
	}

	while (end < text.length && isWordCharacter(text.charAt(end))) {
		end++;
	}

	const word = text.substring(start, end);
	return word.length > 0 ? word : null;
}

function isWordCharacter(char: string): boolean {
	return /[a-zA-Z_0-9]/.test(char);
}