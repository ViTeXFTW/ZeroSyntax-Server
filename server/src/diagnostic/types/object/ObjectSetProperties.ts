import { PropertyDefinition } from '../../properties';
import { IniTypes_t } from '../IniType_t';
import * as list from '../../../utils/lists';

export const weaponSetProperties: { [key: string]: PropertyDefinition } = {
	'Conditions': {
		name: 'Conditions',
		type: 'string',
		description: 'The condition states for the weapon set',
		validValues: list.allowedConditionStates,
		numberOfValues: [-1]
	},
	'Weapon': {
		name: 'Weapon',
		type: IniTypes_t.WEAPON,
		description: 'The weapon for the weapon set',
	}
}

export const armorSetProperties: { [key: string]: PropertyDefinition } = {
	'Conditions': {
		name: 'Conditions',
		type: 'string',
		description: 'The condition states for the armor set',
		validValues: list.allowedConditionStates,
		numberOfValues: [-1]
	},
	'Armor': {
		name: 'Armor',
		type: IniTypes_t.ARMOR,
		description: 'The armor for the armor set',
	},
	'DamageFx': {
		name: 'DamageFx',
		type: IniTypes_t.FXLIST,
		description: 'The damage effects for the armor set',
	}
}

export const prerequisiteProperties: { [key: string]: PropertyDefinition } = {
	'Object': {
		name: 'Object',
		type: IniTypes_t.OBJECT,
		description: 'The object for the prerequisite',
		numberOfValues: [-1]
	},
	'Science': {
		name: 'Science',
		type: IniTypes_t.SCIENCE,
		description: 'The science for the prerequisite',
		numberOfValues: [-1]
	}
}

export const unitSpecificSoundsProperties: { [key: string]: PropertyDefinition } = {
	
}

export const unitSpecificFXProperties: { [key: string]: PropertyDefinition } = {

}
