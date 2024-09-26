import { IniType, Symbol } from './Symbol'

/**
 * Scope for symbols for creating connected structure between Symbols
 * @param name string. Scope name.
 * @param parent Scope | null. If a subScope, what Scope is parent.
 * @param symbols Map<string, Symbol>. Symbols belonging to Scope, referenced by Symbol.name.
 * @param children Scope[]. Does this scope have subScopes. Is Scope a parent?
 */
export class Scope {
	name: string
	parent: Scope | null
	IniType: IniType | null
	symbols: Map<string, Symbol>
	children: Scope[]

	constructor(name: string, parent: Scope | null = null, iniType: IniType | null = null) {
		this.name = name
		this.parent = parent
		this.IniType = iniType
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