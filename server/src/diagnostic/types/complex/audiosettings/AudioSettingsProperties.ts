import { PropertyDefinition } from '../../../handlers/interfaces/IPropertyDefinition';




export const AudioSettingsPropertyMap: Map<string, PropertyDefinition> = new Map();
export const AudioSettingsProperties: PropertyDefinition[] = [
	{
		name: 'AudioRoot',
		type: 'string',
		description: 'The root of the audio',
	},
	{
		name: 'SoundsFolder',
		type: 'string', 
		description: 'Relative to Audio Root',
	},
	{
		name: 'MusicFolder',
		type: 'string',
		description: 'Relative to Audio Root',
	},
	{
		name: 'StreamingFolder',
		type: 'string',
		description: 'Relative to Audio Root',
	},
	{
		name: 'SoundsExtension',
		type: 'string',
		description: 'File extension for sound effects',
	},
	{
		name: 'UseDigital',
		type: 'boolean',
		description: 'Whether to use digital audio',
	},
	{
		name: 'UseMidi',
		type: 'boolean',
		description: 'Whether to use MIDI',
	},
	{
		name: 'OutputRate',
		type: 'integer',
		description: 'Audio output sample rate'
	},
	{
		name: 'OutputBits',
		type: 'integer',
		description: 'Audio bit depth',
	},
	{
		name: 'OutputChannels',
		type: 'integer',
		description: 'Number of audio channels (1=mono, 2=stereo)',
	},
	{
		name: 'SampleCount2D',
		type: 'integer',
		description: 'Number of simultaneous 2D (UI) samples allowed',
	},
	{
		name: 'SampleCount3D',
		type: 'integer',
		description: 'Number of simultaneous 3D (World) samples allowed',
	},
	{
		name: 'StreamCount',
		type: 'integer',
		description: 'Number of simultaneous streaming audio sources allowed',
	},
	{
		name: 'GlobalMinRange',
		type: 'integer',
		description: 'Minimum range for global type audio',
	},
	{
		name: 'GlobalMaxRange',
		type: 'integer',
		description: 'Maximum range for global type audio',
	},
	{
		name: 'TimeBetweenDrawableSounds',
		type: 'integer',
		description: 'Milliseconds between ambient drawable sound attempts',
	},
	{
		name: 'TimeToFadeAudio',
		type: 'integer',
		description: 'Milliseconds for audio fade in/out',
	},
	{
		name: 'AudioFootprintInBytes',
		type: 'integer',
		description: 'Audio memory footprint in bytes',
	},
	{
		name: 'MinSampleVolume',
		type: 'integer',
		description: 'Minimum volume threshold for sounds',
	},
	{
		name: 'Relative2DVolume',
		type: 'percent',
		description: 'Relative volume adjustment between 2D and 3D sounds',
	},
	{
		name: 'DefaultSoundVolume',
		type: 'percent',
		description: 'Default volume for sounds',
	},
	{
		name: 'Default3DSoundVolume',
		type: 'percent',
		description: 'Default volume for 3D sounds',
	},
	{
		name: 'DefaultSpeechVolume',
		type: 'percent',
		description: 'Default volume for speech',
	},
	{
		name: 'DefaultMusicVolume',
		type: 'percent',
		description: 'Default volume for music',
	},
	{
		name: 'Default2DSpeakerType',
		type: 'string',
		description: 'Default speaker configuration for 2D audio',
	},
	{
		name: 'Default3DSpeakerType',
		type: 'string',
		description: 'Default speaker configuration for 3D audio',
	},
	{
		name: 'Preferred3DHW1',
		type: 'string',
		description: 'Primary preferred 3D audio hardware',
	},
	{
		name: 'Preferred3DHW2',
		type: 'string',
		description: 'Secondary preferred 3D audio hardware',
	},
	{
		name: 'Preferred3DSW',
		type: 'string',
		description: 'Preferred 3D audio software fallback',
	},
	{
		name: 'MicrophoneDesiredHeightAboveTerrain',
		type: 'float',
		description: 'Desired height of the microphone above terrain',
	},
	{
		name: 'MicrophoneMaxPercentageBetweenGroundAndCamera',
		type: 'percent',
		description: 'Maximum percent of distance between ground and camera for microphone placement',
	},
	{
		name: 'ZoomMinDistance',
		type: 'float',
		description: 'Minimum distance for zoom-based volume adjustment',
	},
	{
		name: 'ZoomMaxDistance',
		type: 'float',
		description: 'Maximum distance for zoom-based volume adjustment',
	},
	{
		name: 'ZoomSoundVolumePercentageAmount',
		type: 'percent',
		description: 'percent of 3D sound volume dedicated to zooming',
	}
];

AudioSettingsProperties.forEach(property => {
	AudioSettingsPropertyMap.set(property.name, property);
});
