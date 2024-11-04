import { RBTree } from 'bintrees';
import * as list from '../utils/lists';
import { IniTypes_t } from './types/IniType_t';
import { AnimationMode_t, BuildCompletion_t, ConditionStateFlags_t, EditorSorting_t, Locomotor_types_t, LOD_t, MaxSimultaneousLinkKey_t, RadarPriority_t, Side_t, WeaponSlot_t } from './types/PropertyTypes';


/**
 * Diagnostic definition of a property
 * 
 * @property `name` - The property name
 * @property `type` - The property type as a string
 * @property `description` - The property description
 * @property `isRequired` - Whether the property is required in the context
 * @property `allowMultipleDefinitions` - Whether the property allows multiple definitions
 * @property `numberOfValues` - How many values the property can have `(-1 for infinite)`
 * @property `validValues` - List of valid values for the property
 */
export interface PropertyDefinition {
	name: string;
	type: string | string[] | IniTypes_t | (string | IniTypes_t)[];
	description: string;
	numberOfValues?: number[];
	validValues?: (string[] | null)[] | string[];
	modifier?: string[];
}

function propertyComparator(a: string, b: string): number {
	if (a < b) return -1;
	if (a > b) return 1;
	return 0;
}

export function isValidPropertyValue(value: string, propertyDefinition: PropertyDefinition, position: number): boolean {
	
	// If the property type is an array, get the type at the given position else get the type
	const type = Array.isArray(propertyDefinition?.type) 
        ? propertyDefinition?.type[Math.min(position, propertyDefinition?.type.length - 1)]
        : propertyDefinition?.type;


	if (type === 'integer') {
		return !isNaN(Number(value)) && !value.includes('.')
	} else if (type === 'float') {
		return !isNaN(Number(value))
	} else if (type === 'boolean') {
		return ['YES', 'NO'].includes(value.toUpperCase())
	} else { // string
		
		if (!isNaN(Number(value))) return false;

		if (['YES', 'NO'].includes(value.toUpperCase())) return false;

		switch (propertyDefinition?.type) {
			case IniTypes_t.ARMOR:
				if(list.definedArmor.find(value) || list.customArmor.find(value)) {
					return true;
				}
				return false;
			case IniTypes_t.AUDIO_EVENT:
			case IniTypes_t.DIALOG_EVENT:
				if(list.audioEvent.find(value) || list.customAudioEvent.find(value)) {
					return true;
				}
				return false;
			case IniTypes_t.COMMAND_BUTTON:
				if(list.commandButtons.find(value) || list.customCommandButtons.find(value)) {
					return true;
				}
				return false;
			case IniTypes_t.COMMAND_SET:
				if(list.commandSets.find(value) || list.customCommandSets.find(value)) {
					return true;
				}
				return false;
			case IniTypes_t.FXLIST:
				if(list.fxLists.find(value) || list.customFXLists.find(value)) {
					return true;
				}
				return false;
			case IniTypes_t.MAPPED_IMAGE:
				if(list.mappedImages.find(value) || list.customMappedImages.find(value)) {
					return true;
				}
				return false;
			case IniTypes_t.OBJECT:
				if(list.objects.find(value) || list.customObjects.find(value)) {
					return true;
				}
				return false;
			case IniTypes_t.OBJECT_CREATION_LIST:
				if(list.ocls.find(value) || list.customOCLs.find(value)) {
					return true;
				}
				return false;
			case IniTypes_t.SPECIAL_POWER:
				if(list.specialPower.find(value) || list.customSpecialPower.find(value)) {
					return true;
				}
				return false;
			case IniTypes_t.SCIENCE:
				if(list.science.find(value) || list.customScience.find(value)) {
					return true;
				}
				return false;
			case IniTypes_t.PARTICLE_SYSTEM:
				if(list.particleSystem.find(value) || list.customParticleSystem.find(value)) {
					return true;
				}
				return false;
			case IniTypes_t.UPGRADE:
				if(list.upgrades.find(value) || list.customUpgrades.find(value)) {
					return true;
				}
				return false;
			case IniTypes_t.WEAPON:
				if(list.weapons.find(value) || list.customWeapons.find(value)) {
					return true;
				}
				return false;
			default:
				return handleStringValidation(value, propertyDefinition, position);
		}
	}
}

export function handleStringValidation(value: string, propertyDefinition: PropertyDefinition, position: number): boolean {
	if (propertyDefinition?.modifier) {
		for (const modifier of propertyDefinition.modifier) {
			if (value.startsWith(modifier)) {
				value = value.substring(modifier.length)
			}
		}
	}

	// Check position-specific valid values if they exist
	if (propertyDefinition?.validValues) {
		// If the property has an array type, always treat validValues as position-specific
		if (Array.isArray(propertyDefinition.type)) {
			const positionValidValues = propertyDefinition.validValues[
				Math.min(position, propertyDefinition.validValues.length - 1)
			] as string[] | null;
			
			// If null/undefined, skip validation for this position
			if (positionValidValues === null) return true;
			
			return positionValidValues.includes(value);
		} else {
			// Single type properties use the simple array validation
			return (propertyDefinition.validValues as string[]).includes(value);
		}
	}
	return true;
}

// ================================
// ============= TREE =============
// ================================

export const objectPropertyNameTree = new RBTree(propertyComparator);

const objectProperties: PropertyDefinition[] = [
	{
		name: "Buildable",
		type: "boolean",
		description: "Whether the object can be built",
	},
	{
		name: 'CrusherLevel',
		type: 'integer',
		description: 'The crusher level of the object',
		validValues: ["0", "1", "2", "3"]
	},
	{
		name: 'CrushableLevel',
		type: 'integer',
		description: 'The crushable level of the object',
		validValues: ["0", "1", "2", "3"]
	},
	{
		name: "BuildCompletion",
		type: "string",
		description: "Where the object is spawned when the build is completed",
		validValues: Object.values(BuildCompletion_t)
	},
	{
		name: "BuildCost",
		type: "integer",
		description: "The build cost of the object",
	},
	{
		name: "BuildVariations",
		type: IniTypes_t.OBJECT,
		description: "The variations of the object",
		numberOfValues: [-1]
	},
	{
		name: "BuildTime",
		type: "float",
		description: "The build time of the object",
	},
	{
		name: 'ButtonImage',
		type: IniTypes_t.MAPPED_IMAGE,
		description: 'The button image of the object'
	},
	{
		name: 'CommandSet',
		type: IniTypes_t.COMMAND_SET,
		description: 'The command set of the object'
	},
	{
		name: 'DisplayColor',
		type: ['string', 'string', 'string'],
		description: 'The display color of the object',
		numberOfValues: [3],
	},
	{
		name: "DisplayName",
		type: "string",
		description: "The display name of the object",
	},
	{
		name: 'EditorSorting',
		type: 'string',
		description: 'The sorting of the object in the editor',
		validValues: Object.values(EditorSorting_t)
	},
	{
		name: 'ExperienceValue',
		type: 'integer',
		description: 'The experience value of the object',
		numberOfValues: [1, 2, 3]
	},
	{
		name: 'ExperienceRequired',
		type: 'integer',
		description: 'The experience required to build the object',
		numberOfValues: [1, 2, 3, 4]
	},
	{
		name: 'EnterGuard',
		type: [IniTypes_t.AUDIO_EVENT, IniTypes_t.DIALOG_EVENT],
		description: 'Sound played when the object begins guarding',
	},
	{
		name: 'EnergyProduction',
		type: 'integer',
		description: 'The energy production of the object',
	},
	{
		name: 'EnergyBonus',
		type: 'integer',
		description: 'The energy bonus of the object',
	},
	{
		name: 'FenceWidth',
		type: 'float',
		description: 'The fence width of the object',
	},
	{
		name: 'FenceXOffset',
		type: 'float',
		description: 'The fence x offset of the object',
	},
	{
		name: 'FactoryExitWidth',
		type: 'float',
		description: 'The factory exit width of the object',
	},
	{
		name: 'FactoryExtraBibWidth',
		type: 'float',
		description: 'The factory extra bib width of the object',
	},
	{
		name: 'Geometry',
		type: 'string',
		description: 'The geometry of the object',
		validValues: ["Point", "Line", "Box", "Sphere", "Cylinder"]
	},
	{
		name: 'GeometryMajorRadius',
		type: 'float',
		description: 'The major radius of the object',
	},
	{
		name: 'GeometryMinorRadius',
		type: 'float',
		description: 'The minor radius of the object',
	},
	{
		name: 'GeometryHeight',
		type: 'float',
		description: 'The height of the object',
	},
	{
		name: 'GeometryIsSmall',
		type: 'boolean',
		description: 'Whether the object is small',
	},
	{
		name: 'IsBridge',
		type: 'boolean',
		description: 'Whether the object is a bridge',
	},
	{
		name: 'IsTrainable',
		type: 'boolean',
		description: 'Whether the object is trainable',
	},
	{
		name: 'IsForbidden',
		type: 'boolean',
		description: 'Whether the object is forbidden',
	},
	{
		name: 'IsPrerequisite',
		type: 'boolean',
		description: 'Whether the object is a prerequisite',
	},
	{
		name: 'KindOf',
		type: 'string',
		description: 'The kind of the object',
		validValues: list.allowedKindOfs,
		numberOfValues: [-1],
		modifier: ['+', '-']
	},
	{
		name: 'Locomotor',
		type: ['string', IniTypes_t.LOCOMOTOR],
		description: 'The locomotor of the object',
		numberOfValues: [2],
		validValues: [Object.values(Locomotor_types_t), list.locomotors]
	},
	{
		name: "RadarPriority",
		type: "string",
		description: "The radar priority of the object",
		validValues: Object.values(RadarPriority_t)
	},
	{
		name: 'Side',
		type: Object.values(Side_t),
		description: 'The side of the object'
	},
	{
		name: 'MaxSimultaneousLinkKey',
		type: "string",
		description: 'The maximum number of simultaneous links for the object',
		validValues: Object.values(MaxSimultaneousLinkKey_t)
	},
	{
		name: 'TransportSlotCount',
		type: 'integer',
		description: 'The number of transport slots the object occupies',
	}
]

// Create a map to store properties by name
const objectPropertyDefinitionMap = new Map<string, PropertyDefinition>();

// Update how properties are inserted
objectProperties.forEach(property => {
	objectPropertyDefinitionMap.set(property.name, property);
	objectPropertyNameTree.insert(property.name);
});

// Add a helper function to get property definition
export function getObjectPropertyDefinition(name: string): PropertyDefinition | undefined {
	return objectPropertyDefinitionMap.get(name);
}
