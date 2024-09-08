import { SemanticTokens, SemanticTokensBuilder, SemanticTokensParams, TextDocuments } from 'vscode-languageserver';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { SymbolTable } from './symbols/SymbolTable';
import { tokenModifierEnum, tokenModifiers, tokenTypes } from './tokenTypes';


export async function getSemanticTokens(documents: TextDocuments<TextDocument>, params: SemanticTokensParams, symbolTable: SymbolTable): Promise<SemanticTokens> {
	const document = documents.get(params.textDocument.uri);
	if (!document) return { data: [] };

	const tokensBuilder = new SemanticTokensBuilder();
	const text = document.getText();
	const lines = text.split(/\r?\n/);

	const allSymbols = symbolTable.getAllSymbols();

	for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
		const line = lines[lineIndex];
		const words = line.split(/\W+/);

		for (let wordIndex = 0; wordIndex < words.length; wordIndex++) {
			const word = words[wordIndex];
			const symbol = allSymbols.find(s =>
				s.name.toLowerCase() === word.toLowerCase() &&
				s.tokenModifiers.includes(tokenModifierEnum.DECLARATION)
			);

			if (symbol) {

				const definitionSymbol = allSymbols.find(s =>
                    s.name.toLowerCase() === word.toLowerCase() &&
                    s.tokenModifiers.includes(tokenModifierEnum.DEFINITION)
                );

				if(definitionSymbol) {
					const startCharacter = line.indexOf(word);
					const length = word.length;
	
					tokensBuilder.push(
						lineIndex,
						startCharacter,
						length,
						symbol.tokenType,
						getTokenModifiersBitmask(symbol.tokenModifiers)
					);
				}				
			}
		}
	}

	return tokensBuilder.build();
}

function getTokenModifiersBitmask(modifiers: string[]): number {
    let bitmask = 0;
    for (const modifier of modifiers) {
        const index = tokenModifiers.indexOf(modifier);
        if (index !== -1) {
            bitmask |= (1 << index);
        }
    }
    return bitmask;
}