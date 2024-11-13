import { PropertyDefinition } from '../../properties';
import { IniTypes_t } from '../IniType_t';
import * as list from '../../../utils/lists';
import { ObjectSoundProperties } from './ObjectProperties';

export const WeaponSetPropertyMap: Map<string, PropertyDefinition> = new Map();
export const WeaponSetProperties: PropertyDefinition[] = [
	{
		name: 'Conditions',
		type: 'string',
		description: 'The condition states for the weapon set',
		validValues: list.allowedConditionStates,
		numberOfValues: [-1],
		ignoreCase: true
	},
	{
		name: 'Weapon',
		type: IniTypes_t.WEAPON,
		description: 'The weapon for the weapon set',
	}
];

WeaponSetProperties.forEach(property => {
	WeaponSetPropertyMap.set(property.name, property);
});

export const ArmorSetPropertyMap: Map<string, PropertyDefinition> = new Map();
export const ArmorSetProperties: PropertyDefinition[] = [
	{
		name: 'Conditions',
		type: 'string',
		description: 'The condition states for the armor set',
		validValues: list.allowedConditionStates,
		numberOfValues: [-1],
		ignoreCase: true
	},
	{
		name: 'Armor',
		type: IniTypes_t.ARMOR,
		description: 'The armor for the armor set',
	},
	{
		name: 'DamageFX',
		type: IniTypes_t.DAMAGE_FX,
		description: 'The damage effects for the armor set',
	}
];

ArmorSetProperties.forEach(property => {
	ArmorSetPropertyMap.set(property.name, property);
});

export const PrerequisitePropertyMap: Map<string, PropertyDefinition> = new Map();
export const PrerequisiteProperties: PropertyDefinition[] = [
	{
		name: 'Object',
		type: IniTypes_t.OBJECT,
		description: 'The object for the prerequisite',
		numberOfValues: [-1]
	},
	{
		name: 'Science',
		type: IniTypes_t.SCIENCE,
		description: 'The science for the prerequisite',
		numberOfValues: [-1]
	}
];

PrerequisiteProperties.forEach(property => {
	PrerequisitePropertyMap.set(property.name, property);
});

export const UnitSpecificSoundsPropertyMap: Map<string, PropertyDefinition> = new Map();
export const UnitSpecificSoundsProperties: PropertyDefinition[] = [
	...ObjectSoundProperties,
	{
		name: 'UnderConstruction',
		type: IniTypes_t.AUDIO_EVENT,
		description: 'The audio event for the object under construction',
	}
];

UnitSpecificSoundsProperties.forEach(property => {
	UnitSpecificSoundsPropertyMap.set(property.name, property);
});

export const UnitSpecificFXPropertyMap: Map<string, PropertyDefinition> = new Map();
export const UnitSpecificFXProperties: PropertyDefinition[] = [
	// ...ObjectFXProperties
];

UnitSpecificFXProperties.forEach(property => {
	UnitSpecificFXPropertyMap.set(property.name, property);
});
