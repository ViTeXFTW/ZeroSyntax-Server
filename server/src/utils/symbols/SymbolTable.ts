import { TextDocument } from 'vscode-languageserver-textdocument';
import { IniType, Symbol } from './Symbol';
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

	/**
	 * Adds a symbol to the SymbolTable under the current Scope
	 * @param symbol Symbol to be added
	 */
	addSymbol(symbol: Symbol): void {
		this.currentScope.addSymbol(symbol);
	}

	/**
	 * Creates a new Scope and enters it. 
	 * @param scopeName Name for new scope entry
	 */
	enterScope(scopeName: string, iniType: IniType): void {
		const newScope = new Scope(scopeName, this.currentScope, iniType);
		this.currentScope.addChildScope(newScope);
		this.currentScope = newScope;
	}

	/**
	 * Exists the current scope, and goes to parent if it exists.
	 */
	exitScope(): void {
		if (this.currentScope.parent) {
			this.currentScope = this.currentScope.parent;
		}
	}

	/**
	 * @returns Current Scope
	 */
	getScope(): Scope {
		return this.currentScope
	}

	/**
	 * @returns Parent scope, if it exists.
	 */
	getParent(): Scope | null {
		if(this.currentScope.parent) {
			return this.currentScope.parent
		}
		return null
	}

	/**
	 * Get array of all symbols in table.
	 * @returns Goes through all scopes and retreives each Symbol.
	 */
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

	/**
	 * For debugging or hierarchical display.
	 * Prints the whole table to terminal.
	 */ 
	printAllSymbols(): void {
		this.printSymbols(this.globalScope, 0);
	}

	private printSymbols(scope: Scope, level: number): void {
		const indent = '  '.repeat(level);
		for (const symbol of scope.symbols.values()) {
			console.log(`${indent}${symbol.name} (${symbol.iniType})`);
		}
		for (const childScope of scope.children) {
			console.log(`${indent}Scope: ${childScope.name}`);
			this.printSymbols(childScope, level + 1);
		}
	}

}