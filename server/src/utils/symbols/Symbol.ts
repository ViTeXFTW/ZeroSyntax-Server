import { Scope } from './Scope'
import { Location } from '../location'

/**
 * Enum for assigning Symbols a type for keeping track of Symbol in a SymbolTable
 * @enum $ Corresponds to actual ini descriptor.
 */
export enum IniType {
	FILE = 'File',
	OBJECT = 'Object',
	MODULEMODIFIER = 'ModuleModifier',
	OBJECTPREREQUISITE = 'ObjectPrerequisite',
	DRAWMODULE = 'DrawModule',
	DEFAULTCONDITIONSTATEBLOCK = 'DefaultConditionStateBlock',
	CONDITIONSTATEBLOCK = 'ConditionStateBlock',
	CONDITIONSTATE = 'ConditionStateValue',
	TRANSITIONKEY = 'TransitionKey',
	BODYMODULE = 'BodyModule',
	BEHAVIORMODULE = 'BehaviorModule',
	PROPERTY = 'Property'
}

/**
 * Entry in SymbolTable
 * @param name string. Name for symbol entry.
 * @param iniType IniType. Type from map.ini.
 * @param location Location. Where in document Symbol is located.
 * @param tokenType string. SemanticToken type.
 * @param tokenModifier string[]. SemanticToken modifiers.
 */
export class Symbol {
	name: string
	iniType: IniType
	location: Location
	tokenType: number
	tokenModifiers: string[]

	constructor(name: string, type: IniType, location: Location, tokenType: number = -1, tokenModifiers: string[] = []) {
		this.name = name	
		this.iniType = type
		this.tokenType = tokenType
		this.tokenModifiers = tokenModifiers
		this.location = location
	}
}