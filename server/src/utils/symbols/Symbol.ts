import { Scope } from './Scope'
import { Location } from '../location'
import { Position, Range } from 'vscode-languageserver'

/**
 * Enum for assigning Symbols a type for keeping track of Symbol in a SymbolTable
 * @enum $ Corresponds to actual ini descriptor.
 */
export enum IniType {
	FILE = 'File',
	OBJECT = 'Object',
	MODULEMODIFIER = 'ModuleModifier',
	OBJECTPREREQUISITE = 'ObjectPrerequisite',
	ADDMODULE = 'AddModule',
	DRAWMODULE = 'DrawModule',
	DEFAULTCONDITIONSTATEBLOCK = 'DefaultConditionStateBlock',
	CONDITIONSTATEBLOCK = 'ConditionStateBlock',
	CONDITIONSTATE = 'ConditionStateValue',
	TRANSITIONKEY = 'TransitionKey',
	ALIASCONDITIONSTATEBLCOK = 'AliasConditionStateBlock',
	TRANSITIONSTATEBLOCK = 'TransitionStateBlock',
	BODYMODULE = 'BodyModule',
	BEHAVIORMODULE = 'BehaviorModule',
	PROPERTY = 'Property'
}

/**
 * Entry in SymbolTable
 * @param name string. Name for symbol entry.
 * @param iniType IniType. Type from map.ini.
 * @param position Position. Where in document Symbol is located.
 * @param tokenType string. SemanticToken type.
 * @param tokenModifier string[]. SemanticToken modifiers.
 */
export class Symbol {
	name: string
	iniType: IniType
	range: Range
	tokenType: number
	tokenModifiers: string[]

	constructor(name: string, type: IniType, range: Range, tokenType: number = -1, tokenModifiers: string[] = []) {
		this.name = name	
		this.iniType = type
		this.tokenType = tokenType
		this.range = range
		this.tokenModifiers = tokenModifiers
	}
}