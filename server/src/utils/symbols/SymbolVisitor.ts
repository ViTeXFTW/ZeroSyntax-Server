import { EndContext, MapIniParser, ProgramContext } from '../antlr/MapIniParser';
import { MapIniVisitor } from '../antlr/MapIniVisitor';
import { AbstractParseTreeVisitor} from '../../../../node_modules/antlr4ts/tree/AbstractParseTreeVisitor'
import { SymbolTable } from './SymbolTable';
import { Symbol, IniType } from './Symbol';
import { tokenModifierEnum, tokenTypeEnum } from '../tokenTypes';
import * as list from '../lists'
import { TextDocument } from 'vscode-languageserver-textdocument';
import { CharStreams, CommonTokenStream, ParserRuleContext } from 'antlr4ts';
import { MapIniLexer } from '../antlr/MapIniLexer';
import { Position, Range } from 'vscode-languageserver';


/**
 * SymbolVisitor, visit all notes from the Abstract Syntax Tree 
 * over the document and adds Symbols to a SymbolTable
 */
export class SymbolVisitor extends AbstractParseTreeVisitor<void> implements MapIniVisitor<void> {
	
	protected defaultResult(): void {
		
	}

	// 
	symbolTable: SymbolTable


	// Lists

	constructor(symbolTable: SymbolTable) {
		super()
		this.symbolTable = symbolTable
	}

	visitProgram(ctx: ProgramContext): void {
		this.visitChildren(ctx)
		// Do nothing
	}

	visitEnd(ctx: EndContext): void {
		// Do nothing
	}

	private createRange(ctx: ParserRuleContext): Range {
        const start: Position = {
            line: ctx.start.line - 1,
            character: ctx.start.charPositionInLine
        };

		const end: Position = {
			line: ctx.stop ? ctx.stop.line - 1 : 0,
			character: ctx.stop && ctx.stop.text ? ctx.stop.charPositionInLine + ctx.stop.text.length : 0
		};
        return { start, end };
    }

	public getSymbolTable(): SymbolTable {
		return this.symbolTable
	}
}

export async function computeSymbolTable(document: TextDocument): Promise<SymbolTable> {

	const inputStream = CharStreams.fromString(document.getText());
	const lexer = new MapIniLexer(inputStream);
	const tokenStream = new CommonTokenStream(lexer);
	const parser = new MapIniParser(tokenStream);

	console.log('SymbolTable: Created antlr variables')

	const tree = parser.program()
	const symbolTable = new SymbolTable()
	const vistor = new SymbolVisitor(symbolTable)

	vistor.visitProgram(tree)
	vistor.getSymbolTable().printAllSymbols()

	return symbolTable
}