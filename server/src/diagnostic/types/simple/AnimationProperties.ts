import { PropertyDefinition } from '../../handlers/interfaces/IPropertyDefinition';
import { IniTypes_t } from '../IniType_t';

// =============
// === LISTS ===
// =============

export enum AnimationMode_t {
	MANUAL = 'MANUAL',
	ONCE = 'ONCE',
	ONCE_BACKWARDS = 'ONCE_BACKWARDS',
	LOOP = 'LOOP',
	PING_PONG = 'PING_PONG',
	LOOP_BACKWARDS = 'LOOP_BACKWARDS'
}

// ==================
// === PROPERTIES ===
// ==================

export const AnimationPropertyMap: Map<string, PropertyDefinition> = new Map();
export const AnimationProperties: PropertyDefinition[] = [
	{
		name: 'AnimationMode',
		type: 'string',
		description: 'The mode of the animation',
		validValues: Object.values(AnimationMode_t),
	},
	{
		name: 'AnimationDelay',
		type: 'integer',
		description: 'The delay of the animation',
	},
	{
		name: 'RandomizeStartFrame',
		type: 'boolean',
		description: 'Whether to randomize the start frame of the animation',
	},
	{
		name: 'NumberImages',
		type: 'integer',
		description: 'The number of images in the animation',
	},
	{
		name: 'Image',
		type: IniTypes_t.MAPPED_IMAGE,
		description: 'The image of the animation',
	}
];

AnimationProperties.forEach(property => {
	AnimationPropertyMap.set(property.name, property);
});