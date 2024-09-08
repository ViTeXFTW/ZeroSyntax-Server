import { Hover, HoverParams, MarkupContent, MarkupKind, Position, TextDocuments } from 'vscode-languageserver';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { getWordAtPosition } from './definitions';
import { SymbolTable } from './symbols/SymbolTable';

export function getHoverInformation(params: HoverParams, documents: TextDocuments<TextDocument>, symbolTable: SymbolTable): Hover | null {
	const document = documents.get(params.textDocument.uri);
	if (!document) return null;

	const position = params.position;
	const word = getWordAtPosition(document, position);

	if (!word) return null;

	const symbol = symbolTable.getAllSymbols().find(s => s.name === word);
	if (!symbol) return null;

	const hoverContent: MarkupContent = {
		kind: MarkupKind.Markdown,
		value: `(${symbol.iniType}) - ${symbol.name}`
	};

	return {
		contents: hoverContent,
		range: {
			start: symbol.range.start,
			end: Position.create(symbol.range.end.line - 1, symbol.range.end.character + word.length)
		}
	};
}