import { PropertyDefinition } from '../../properties';

// =============
// === LISTS ===
// =============

export enum AudioEventPriority_t {
	LOWEST = 'LOWEST',
	LOW = 'LOW',
	MEDIUM = 'MEDIUM',
	NORMAL = 'NORMAL',
	HIGH = 'HIGH',
	CRITICAL = 'CRITICAL'
}

export enum AudioEventControl_t {
	LOOP = 'LOOP',
	RANDOM = 'RANDOM',
	ALL = 'ALL',
	POST_DELAY = 'POST_DELAY',
	INTERRUPT = 'INTERRUPT',
	NONE = 'NONE',
}

export enum AudioEventType_t {
	UI = 'UI',
	WORLD = 'WORLD',
	SHROUDED = 'SHROUDED',
	GLOBAL = 'GLOBAL',
	VOICE = 'VOICE',
	PLAYER = 'PLAYER',
	ALLIES = 'ALLIES',
	ENEMIES = 'ENEMIES',
	EVERYONE = 'EVERYONE',
	NONE = 'NONE'
}

// ==================
// === PROPERTIES ===
// ==================

export const AudioEventPropertyMap: Map<string, PropertyDefinition> = new Map();
export const AudioEventProperties: PropertyDefinition[] = [
	{
		name: 'Priority',
		type: 'string',
		description: 'The priority of the audio event',
		validValues: Object.values(AudioEventPriority_t),
		numberOfValues: [-1],
		ignoreCase: true
	},
	{
		name: 'Control',
		type: 'string',
		description: 'The control of the audio event',
		validValues: Object.values(AudioEventControl_t),
		numberOfValues: [-1],
		ignoreCase: true
	},
	{
		name: 'Sounds',
		type: 'string',
		description: 'The sounds of the audio event',
		numberOfValues: [-1],
		ignoreCase: true
	},
	{
		name: 'Attack',
		type: 'string',
		description: 'The attack of the audio event'
	},
	{
		name: 'Delay',
		type: ['integer', 'integer'],
		description: 'The delay of the audio event',
		numberOfValues: [2]
	},
	{
		name: 'Limit',
		type: 'integer',
		description: 'The limit of the audio event'
	},
	{
		name: 'Decay',
		type: 'string',
		description: 'The decay of the audio event'
	},
	{
		name: 'Volume',
		type: 'float',
		description: 'The volume of the audio event'
	},
	{
		name: 'MinVolume',
		type: 'integer',
		description: 'The minimum volume of the audio event'
	},
	{
		name: 'MaxVolume',
		type: 'integer',
		description: 'The maximum volume of the audio event'
	},
	{
		name: 'Limit',
		type: 'integer',
		description: 'The limit of the audio event'
	},
	{
		name: 'Type',
		type: 'string',
		description: 'The type of the audio event',
		validValues: Object.values(AudioEventType_t),
		numberOfValues: [-1],
		ignoreCase: true
	},
	{
		name: 'LowPassCutoff',
		type: 'float',
		description: 'The low pass cutoff of the audio event'
	},
	{
		name: 'PitchShift',
		type: ['float', 'float'],
		description: 'The pitch shift of the audio event',
		numberOfValues: [2]
	},
	{
		name: 'VolumeShift',
		type: ['float'],
		description: 'The volume shift of the audio event'
	},
	{
		name: 'MinRange',
		type: 'integer',
		description: 'The minimum range of the audio event'
	},
	{
		name: 'MaxRange',
		type: 'integer',
		description: 'The maximum range of the audio event'
	}
];

Object.values(AudioEventProperties).forEach(property => {
	AudioEventPropertyMap.set(property.name, property);
});