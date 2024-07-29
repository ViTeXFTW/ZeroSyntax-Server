import { TextDocument } from 'vscode-languageserver-textdocument';
import { Symbol } from './Symbol';
import { Scope } from './Scope'
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { MapIniLexer } from '../antlr/MapIniLexer';
import { MapIniParser } from '../antlr/MapIniParser';
import { SymbolVisitor } from './SymbolVisitor';

/**
 * Table of Symbols 
 */
export class SymbolTable {
	private symbols: Map<string, Symbol> = new Map()
	private globalScope: Scope;
	private currentScope: Scope;

	constructor() {
		this.globalScope = new Scope("global");
		this.currentScope = this.globalScope;
	}

	addSymbol(symbol: Symbol): void {
		this.currentScope.addSymbol(symbol);
	}

	enterScope(scopeName: string): void {
		const newScope = new Scope(scopeName, this.currentScope);
		this.currentScope.addChildScope(newScope);
		this.currentScope = newScope;
	}

	exitScope(): void {
		if (this.currentScope.parent) {
			this.currentScope = this.currentScope.parent;
		}
	}

	getAllSymbols(): Symbol[] {
		const symbols: Symbol[] = [];
		this.collectSymbols(this.globalScope, symbols);
		return symbols;
	}

	private collectSymbols(scope: Scope, symbols: Symbol[]): void {
		for (const symbol of scope.symbols.values()) {
			symbols.push(symbol);
		}
		for (const childScope of scope.children) {
			this.collectSymbols(childScope, symbols);
		}
	}

	// For debugging or hierarchical display
	printAllSymbols(): void {
		this.printSymbols(this.globalScope, 0);
	}

	private printSymbols(scope: Scope, level: number): void {
		const indent = '  '.repeat(level);
		for (const symbol of scope.symbols.values()) {
			console.log(`${indent}${symbol.name} (${symbol.type})`);
		}
		for (const childScope of scope.children) {
			console.log(`${indent}Scope: ${childScope.name}`);
			this.printSymbols(childScope, level + 1);
		}
	}

}

export function computeSymbolTable(document: TextDocument): SymbolTable {

	const inputStream = CharStreams.fromString(document.getText());
	const lexer = new MapIniLexer(inputStream);
	const tokenStream = new CommonTokenStream(lexer);
	const parser = new MapIniParser(tokenStream);

	console.log('Created antlr variables')

	const tree = parser.program()
	const symbolTable = new SymbolTable()
	const vistor = new SymbolVisitor(symbolTable)

	vistor.visitProgram(tree)
	vistor.getSymbolTable().printAllSymbols()

	return symbolTable
}