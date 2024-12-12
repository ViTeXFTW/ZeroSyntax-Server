import { PropertyDefinition } from '../../../handlers/interfaces/IPropertyDefinition';


export const WeatherPropertyMap: Map<string, PropertyDefinition> = new Map();

export const WeatherProperties: PropertyDefinition[] = [
	{
		name: 'SnowEnabled',
		type: 'boolean',
		description: 'Whether the weather has snow enabled',
	},
	{
		name: 'SnowTexture',
		type: 'string',
		description: 'The texture of the snow',
	},
	{
		name: 'SnowBoxDimensions',
		type: 'integer',
		description: 'The dimensions of the snow box',
	},
	{
		name: 'SnowBoxDensity',
		type: 'integer',
		description: 'The density of the snow box',
	},
	{
		name: 'SnowFrequencyScaleX',
		type: 'float',
		description: 'The frequency scale of the snow on the x-axis',
	},
	{
		name: 'SnowFrequencyScaleY',
		type: 'float',
		description: 'The frequency scale of the snow on the y-axis',
	},
	{
		name: 'SnowAmplitude',
		type: 'float',
		description: 'The amplitude of the snow',
	},
	{
		name: 'SnowVelocity',
		type: 'float',
		description: 'The velocity of the snow',
	},
	{
		name: 'SnowPointSize',
		type: 'float',
		description: 'The point size of the snow',
	},
	{
		name: 'SnowMaxPointSize',
		type: 'float',
		description: 'The maximum point size of the snow',
	},
	{
		name: 'SnowMinPointSize',
		type: 'float',
		description: 'The minimum point size of the snow',
	},
	{
		name: 'SnowPointSprites',
		type: 'boolean',
		description: 'Whether the snow has point sprites',
	},
	{
		name: 'SnowQuadSize',
		type: 'float',
		description: 'The quad size of the snow',
	},
];

WeatherProperties.forEach(property => {
	WeatherPropertyMap.set(property.name, property);
});
