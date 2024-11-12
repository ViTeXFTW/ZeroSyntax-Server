import { PropertyDefinition } from '../../properties';
import { AudioEventPriority_t, AudioEventType_t } from './AudioEventProperties';

// ==================
// === PROPERTIES ===
// ==================

export const DialogEventPropertyMap = new Map<string, PropertyDefinition>();
export const DialogEventProperties: PropertyDefinition[] = [
	{
		name: 'Filename',
		type: 'string',
		description: 'The filename of the dialog event'
	},
	{
		name: 'Volume',
		type: 'integer',
		description: 'The volume of the dialog event'
	},
	{
		name: 'MinRange',
		type: 'integer',
		description: 'The minimum range of the dialog event'
	},
	{
		name: 'MaxRange',
		type: 'integer',
		description: 'The maximum range of the dialog event'
	},
	{
		name: 'Type',
		type: 'string',
		description: 'The type of the dialog event',
		validValues: Object.values(AudioEventType_t),
		numberOfValues: [-1],
		ignoreCase: true
	},
	{
		name: 'Priority',
		type: 'string',
		description: 'The priority of the dialog event',
		validValues: Object.values(AudioEventPriority_t),
		numberOfValues: [-1],
		ignoreCase: true
	}
];

Object.values(DialogEventProperties).forEach(property => {
	DialogEventPropertyMap.set(property.name, property);
});