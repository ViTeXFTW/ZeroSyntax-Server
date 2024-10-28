import { RBTree } from 'bintrees';
import * as list from '../utils/lists';
import { BuildCompletion_t, EditorSorting_t, MaxSimultaneousLinkKey_t, RadarPriority_t } from './propertyTypes';

interface PropertyDefinition {
	name: string;
	type: string;
	description: string;
	isRequired: boolean;
	allowMultiple: boolean;
	validValues?: string[];
	multipleValues?: boolean;
}

function propertyComparator(a: string, b: string): number {
	if (a < b) return -1;
	if (a > b) return 1;
	return 0;
}

export function isValidPropertyValue(value: string, propertyDefinition: PropertyDefinition): boolean {
	
	const type = propertyDefinition.type

	if (type === 'number') {
		// Check if the value is a number
		return !isNaN(Number(value))
	} else if (type === 'boolean') {
		// Check if the value is a boolean
		return ['YES', 'NO'].includes(value.toUpperCase())
	} else if (type === 'rgb') {
		// Check if the value is a valid rgb color
		return /^[RGB]:\d+$/.test(value)
	} else { // string
		if (!isNaN(Number(value)) || !['YES', 'NO'].includes(value.toUpperCase())) {
			// Check if the value is in the list of valid values
			if (propertyDefinition.validValues) {
				return propertyDefinition.validValues.includes(value)
			} else {
				// If there are no valid values, then the value is valid
				return true
			}
		} else {
			// If the value is a number or boolean, then it is not valid
			return false
		}
	}
}

// ================================
// ============= TREE =============
// ================================

export const objectPropertiesTree = new RBTree(propertyComparator);

const objectProperties: PropertyDefinition[] = [
	{
		name: "Buildable",
		type: "boolean",
		description: "Whether the object can be built",
		isRequired: false,
		allowMultiple: false
	},
	{
		name: 'CrusherLevel',
		type: 'number',
		description: 'The crusher level of the object',
		isRequired: false,
		allowMultiple: false,
		validValues: ["0", "1", "2", "3", "4"]
	},
	{
		name: 'CrushableLevel',
		type: 'number',
		description: 'The crushable level of the object',
		isRequired: false,
		allowMultiple: false,
		validValues: ["0", "1", "2", "3", "4"]
	},
	{
		name: "BuildCompletion",
		type: "string",
		description: "Where the object is spawned when the build is completed",
		isRequired: false,
		allowMultiple: false,
		validValues: Object.values(BuildCompletion_t)
	},
	{
		name: "BuildCost",
		type: "number",
		description: "The build cost of the object",
		isRequired: false,
		allowMultiple: false
	},
	{
		name: "BuildVariations",
		type: "string",
		description: "The variations of the object",
		isRequired: false,
		allowMultiple: false,
		validValues: list.definedObjects
	},
	{
		name: "BuildTime",
		type: "number",
		description: "The build time of the object",
		isRequired: false,
		allowMultiple: false
	},
	{
		name: 'ButtonImage',
		type: 'string',
		description: 'The button image of the object',
		isRequired: false,
		allowMultiple: false,
		validValues: list.definedMappedImages
	},
	{
		name: 'CommandSet',
		type: 'string',
		description: 'The command set of the object',
		isRequired: false,
		allowMultiple: false,
		validValues: list.definedCommandSets
	},
	{
		name: 'DisplayColor',
		type: 'rgb',
		description: 'The display color of the object',
		isRequired: false,
		allowMultiple: false,
	},
	{
		name: "DisplayName",
		type: "string",
		description: "The display name of the object",
		isRequired: false,
		allowMultiple: false
	},
	{
		name: 'EditorSorting',
		type: 'string',
		description: 'The sorting of the object in the editor',
		isRequired: false,
		allowMultiple: false,
		validValues: Object.values(EditorSorting_t)
	},
	{
		name: 'ExperienceValue',
		type: 'number',
		description: 'The experience value of the object',
		isRequired: false,
		allowMultiple: false,
		multipleValues: true
	},
	{
		name: 'ExperienceRequired',
		type: 'number',
		description: 'The experience required to build the object',
		isRequired: false,
		allowMultiple: false,
		multipleValues: true
	},
	{
		name: 'EnterGuard',
		type: 'boolean',
		description: 'Whether the object can be entered by the player',
		isRequired: false,
		allowMultiple: false
	},
	{
		name: 'EnergyProduction',
		type: 'number',
		description: 'The energy production of the object',
		isRequired: false,
		allowMultiple: false
	},
	{
		name: 'EnergyBonus',
		type: 'number',
		description: 'The energy bonus of the object',
		isRequired: false,
		allowMultiple: false
	},
	{
		name: 'FenceWidth',
		type: 'number',
		description: 'The fence width of the object',
		isRequired: false,
		allowMultiple: false
	},
	{
		name: 'FenceXOffset',
		type: 'number',
		description: 'The fence x offset of the object',
		isRequired: false,
		allowMultiple: false
	},
	{
		name: 'FactoryExitWidth',
		type: 'number',
		description: 'The factory exit width of the object',
		isRequired: false,
		allowMultiple: false
	},
	{
		name: 'FactoryExtraBibWidth',
		type: 'number',
		description: 'The factory extra bib width of the object',
		isRequired: false,
		allowMultiple: false
	},
	{
		name: 'Geometry',
		type: 'string',
		description: 'The geometry of the object',
		isRequired: false,
		allowMultiple: false,
		validValues: ["Point", "Line", "Box", "Sphere", "Cylinder"]
	},
	{
		name: 'GeometryMajorRadius',
		type: 'number',
		description: 'The major radius of the object',
		isRequired: false,
		allowMultiple: false
	},
	{
		name: 'GeometryMinorRadius',
		type: 'number',
		description: 'The minor radius of the object',
		isRequired: false,
		allowMultiple: false
	},
	{
		name: 'GeometryHeight',
		type: 'number',
		description: 'The height of the object',
		isRequired: false,
		allowMultiple: false
	},
	{
		name: 'GeometryIsSmall',
		type: 'boolean',
		description: 'Whether the object is small',
		isRequired: false,
		allowMultiple: false
	},
	{
		name: 'IsBridge',
		type: 'boolean',
		description: 'Whether the object is a bridge',
		isRequired: false,
		allowMultiple: false
	},
	{
		name: 'IsTrainable',
		type: 'boolean',
		description: 'Whether the object is trainable',
		isRequired: false,
		allowMultiple: false
	},
	{
		name: 'IsForbidden',
		type: 'boolean',
		description: 'Whether the object is forbidden',
		isRequired: false,
		allowMultiple: false
	},
	{
		name: 'IsPrerequisite',
		type: 'boolean',
		description: 'Whether the object is a prerequisite',
		isRequired: false,
		allowMultiple: false
	},
	{
		name: 'Locomotor',
		type: 'string',
		description: 'The locomotor of the object',
		isRequired: false,
		allowMultiple: false,
		validValues: list.locomotors
	},
	{
		name: "RadarPriority",
		type: "string",
		description: "The radar priority of the object",
		isRequired: false,
		allowMultiple: false,
		validValues: Object.values(RadarPriority_t)
	},
	{
		name: 'MaxSimultaneousLinkKey',
		type: "string",
		description: 'The maximum number of simultaneous links for the object',
		isRequired: false,
		allowMultiple: false,
		validValues: Object.values(MaxSimultaneousLinkKey_t)
	},
	{
		name: 'TransportSlotCount',
		type: 'number',
		description: 'The number of transport slots the object occupies',
		isRequired: false,
		allowMultiple: false
	}
]

// Create a map to store properties by name
const propertyDefinitionsMap = new Map<string, PropertyDefinition>();

// Update how properties are inserted
objectProperties.forEach(property => {
	propertyDefinitionsMap.set(property.name, property);
	objectPropertiesTree.insert(property.name);
});

// Add a helper function to get property definition
export function getPropertyDefinition(name: string): PropertyDefinition | undefined {
	return propertyDefinitionsMap.get(name);
}
