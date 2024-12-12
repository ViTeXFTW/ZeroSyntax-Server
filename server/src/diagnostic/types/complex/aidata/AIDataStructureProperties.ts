import { PropertyDefinition } from '../../../handlers/interfaces/IPropertyDefinition';



export const AIDataStructurePropertyMap: Map<string, PropertyDefinition> = new Map();
export const AIDataStructureProperties: PropertyDefinition[] = [
	{
		name: 'Location',
		type: ['string', 'string'],
		numberOfValues: [2],
		description: 'The location of the structure',
		customValueHandler(value, propertyDefinition, position) {
			if (position === 0) {
				const trimmed = value.trim();
				return trimmed.startsWith('X:') && !isNaN(parseFloat(trimmed.substring(2)));
			} else if (position === 1) {
				const trimmed = value.trim();
				return trimmed.startsWith('Y:') && !isNaN(parseFloat(trimmed.substring(2)));
			}
			return false;
		},
	},
	{
		name: 'Rebuilds',
		type: 'integer',
		description: 'The number of times the structure will rebuild'
	},
	{
		name: 'Angle',
		type: 'float',
		description: 'The angle of the structure'
	},
	{
		name: 'InitiallyBuilt',
		type: 'boolean',
		description: 'Whether the structure is initially built'
	},
	{
		name: 'AutomaticallyBuild',
		type: 'boolean',
		description: 'Whether the structure is automatically built'
	}
];

AIDataStructureProperties.forEach(property => {
	AIDataStructurePropertyMap.set(property.name, property);
});
