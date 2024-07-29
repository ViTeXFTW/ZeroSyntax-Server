import { Scope } from './Scope'
import { Location } from '../location'

/**
 * Enum for assigning Symbols a type for keeping track of Symbol in a SymbolTable
 */

export enum SymbolType {
	FILE = 'File',
	OBJECT = 'class',
	MODULEMODIFIER = 'ModuleModifier',
	OBJECTPREREQUISITE = 'ObjectPrerequisite',
	DRAWMODULE = 'DrawModule',
	BODYMODUKLE = 'BodyModule',
	BEHAVIORMODULE = 'BehaviorModule',
	PROPERTY = 'Property'
}

export class Symbol {
	name: string
	type: SymbolType
	location: Location
	children: Symbol[] = []

	constructor(name: string, type: SymbolType, location: Location) {
		this.name = name	
		this.type = type
		this.location = location
	}

	public addChild(symbol: Symbol): void {
		this.children.push(symbol)
	}
}