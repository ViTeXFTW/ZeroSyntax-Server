import { Symbol } from './Symbol'

/**
 * Scope for symbols for creating connected structure between Symbols
 */
export class Scope {
	name: string
	parent: Scope | null
	symbols: Map<string, Symbol>
	children: Scope[]

	constructor(name: string, parent: Scope | null = null) {
		this.name = name
		this.parent = parent
		this.symbols = new Map<string, Symbol>()
		this.children = []
	}

	public addSymbol(symbol: Symbol): void {
		this.symbols.set(symbol.name, symbol);
	}

	public getSymbol(name: string): Symbol | undefined {
		return this.symbols.get(name);
	}

	public addChildScope(scope: Scope): void {
		this.children.push(scope);
	}
}