import { PropertyDefinition } from '../../../handlers/interfaces/IPropertyDefinition';
import { IniTypes_t } from '../../IniType_t';


export const AiDataSideInfoPropertyMap: Map<string, PropertyDefinition> = new Map();
export const AiDataSideInfoProperties: PropertyDefinition[] = [
	{
		name: 'ResourceGatherersEasy',
		type: 'integer',
		description: 'Number of resource gatherers for the AI to consider itself easy',
	},
	{
		name: 'ResourceGatherersNormal',
		type: 'integer',
		description: 'Number of resource gatherers for the AI to consider itself normal',
	},
	{
		name: 'ResourceGatherersHard',
		type: 'integer',
		description: 'Number of resource gatherers for the AI to consider itself hard',
	},
	{
		name: 'BaseDefenseStructure1',
		type: IniTypes_t.OBJECT,
		description: 'Base defense structure for the AI to consider itself easy',
	}
];


AiDataSideInfoProperties.forEach(property => {
	AiDataSideInfoPropertyMap.set(property.name, property);
});

