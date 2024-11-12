import { RBTree } from 'bintrees';
import { PropertyDefinition } from '../../properties';
import { BuildCompletion_t, EditorSorting_t, Locomotor_types_t, MaxSimultaneousLinkKey_t, RadarPriority_t, Shadow_t, Side_t } from '../PropertyTypes';
import { IniTypes_t } from '../IniType_t';
import * as list from '../../../utils/lists';

const objectPropertyTree: RBTree<string> = new RBTree<string>((a, b) => a.localeCompare(b));

export const objectProperties: PropertyDefinition[] = [
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
		name: 'InstanceScaleFuzziness',
		type: 'float',
		description: 'The instance scale fuzziness of the object',
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
		name: 'MaxSimultaneousLinkKey',
		type: "string",
		description: 'The maximum number of simultaneous links for the object',
		validValues: Object.values(MaxSimultaneousLinkKey_t)
	},
	{
		name: 'MaxSimultaneousOfType',
		type: 'string',
		description: 'The maximum number of objects of the same type that can be linked to the object',
		validValues: ['DeterminedBySuperweaponRestriction', 'Unlimited']
	},
	{
		name: 'OcclusionDelay',
		type: 'float',
		description: 'The occlusion delay of the object',
	},
	{
		name: "RadarPriority",
		type: "string",
		description: "The radar priority of the object",
		validValues: Object.values(RadarPriority_t)
	},
	{
		name: 'Scale',
		type: 'float',
		description: 'The scale of the object',
	},
	{
		name: 'SelectPortrait',
		type: IniTypes_t.MAPPED_IMAGE,
		description: 'The select portrait of the object',
	},
	{
		name: 'Shadow',
		type: 'string',
		description: 'Whether the object casts a shadow',
		validValues: Object.values(Shadow_t)
	},
	{
		name: 'ShadowSizeX',
		type: 'float',
		description: 'The shadow size x of the object',
	},
	{
		name: 'ShadowSizeY',
		type: 'float',
		description: 'The shadow size y of the object',
	},
	{
		name: 'ShadowOffsetX',
		type: 'float',
		description: 'The shadow offset x of the object',
	},
	{
		name: 'ShadowOffsetY',
		type: 'float',
		description: 'The shadow offset y of the object',
	},
	{
		name: 'ShadowTexture',
		type: 'string',
		description: 'The shadow texture of the object',
	},
	{
		name: 'ShroudClearingRange',
		type: 'float',
		description: 'The shroud clearing range of the object',
	},
	{
		name: 'ShroudRevealingRange',
		type: 'float',
		description: 'The shroud revealing range of the object',
	},
	{
		name: 'Side',
		type: Object.values(Side_t),
		description: 'The side of the object'
	},
	{
		name: 'TransportSlotCount',
		type: 'integer',
		description: 'The number of transport slots the object occupies',
	},
	{
		name: 'UpgradeCameo1',
		type: IniTypes_t.UPGRADE,
		description: 'The first upgrade cameo of the object',
	},
	{
		name: 'UpgradeCameo2',
		type: IniTypes_t.UPGRADE,
		description: 'The second upgrade cameo of the object',
	},
	{
		name: 'UpgradeCameo3',
		type: IniTypes_t.UPGRADE,
		description: 'The third upgrade cameo of the object',
	},
	{
		name: 'UpgradeCameo4',
		type: IniTypes_t.UPGRADE,
		description: 'The fourth upgrade cameo of the object',
	},
	{
		name: 'UpgradeCameo5',
		type: IniTypes_t.UPGRADE,
		description: 'The fifth upgrade cameo of the object',
	},
	{
		name: 'VoiceSelect',
		type: IniTypes_t.AUDIO_EVENT,
		description: 'The voice select of the object',
	},
	{
		name: 'VoiceGroupSelect',
		type: IniTypes_t.AUDIO_EVENT,
		description: 'The voice group select of the object',
	},
	{
		name: 'VoiceMovement',
		type: IniTypes_t.AUDIO_EVENT,
		description: 'The voice movement of the object',
	},
	{
		name: 'VoiceAttack',
		type: IniTypes_t.AUDIO_EVENT,
		description: 'The voice attack of the object',
	},
	{
		name: 'VoiceEnter',
		type: IniTypes_t.AUDIO_EVENT,
		description: 'The voice enter of the object',
	},
	{
		name: 'VoiceFear',
		type: IniTypes_t.AUDIO_EVENT,
		description: 'The voice fear of the object',
	},
	{
		name: 'VoiceSelectElite',
		type: IniTypes_t.AUDIO_EVENT,
		description: 'The voice select elite of the object',
	},
	{
		name: 'VoiceCreated',
		type: IniTypes_t.AUDIO_EVENT,
		description: 'The voice created of the object',
	},
	{
		name: 'VoiceNearEnemy',
		type: IniTypes_t.AUDIO_EVENT,
		description: 'The voice near enemy of the object',
	},
	{
		name: 'VoiceTaskUnable',
		type: IniTypes_t.AUDIO_EVENT,
		description: 'The voice task unable of the object',
	},
	{
		name: 'VoiceTaskComplete',
		type: IniTypes_t.AUDIO_EVENT,
		description: 'The voice task complete of the object',
	},
	{
		name: 'VoiceMeetEnemy',
		type: IniTypes_t.AUDIO_EVENT,
		description: 'The voice meet enemy of the object',
	},
	{
		name: 'VoiceGarrison',
		type: IniTypes_t.AUDIO_EVENT,
		description: 'The voice garrison of the object',
	},
	{
		name: 'VoiceDefeat',
		type: IniTypes_t.AUDIO_EVENT,
		description: 'The voice defeat of the object',
	},
	{
		name: 'VoiceAttackSpecial',
		type: IniTypes_t.AUDIO_EVENT,
		description: 'The voice attack special of the object',
	},
	{
		name: 'VoiceAttackAir',
		type: IniTypes_t.AUDIO_EVENT,
		description: 'The voice attack air of the object',
	},
	{
		name: 'SoundMoveStart',
		type: IniTypes_t.AUDIO_EVENT,
		description: 'The sound move start of the object',
	},
	{
		name: 'SoundAmbientDamage',
		type: IniTypes_t.AUDIO_EVENT,
		description: 'The sound ambient damage of the object',
	},
	{
		name: 'SoundAmbientReallyDamaged',
		type: IniTypes_t.AUDIO_EVENT,
		description: 'The sound ambient really damaged of the object',
	},
	{
		name: 'SoundAmbientRubbled',
		type: IniTypes_t.AUDIO_EVENT,
		description: 'The sound ambient rubbled of the object',
	},
	{
		name: 'SoundStealthOn',
		type: IniTypes_t.AUDIO_EVENT,
		description: 'The sound stealth on of the object',
	},
	{
		name: 'SoundStealthOff',
		type: IniTypes_t.AUDIO_EVENT,
		description: 'The sound stealth off of the object',
	},
	{
		name: 'SoundCreated',
		type: IniTypes_t.AUDIO_EVENT,
		description: 'The sound created of the object',
	},
	{
		name: 'SoundOnDamaged',
		type: IniTypes_t.AUDIO_EVENT,
		description: 'The sound on damage of the object',
	},
	{
		name: 'SoundOnReallyDamaged',
		type: IniTypes_t.AUDIO_EVENT,
		description: 'The sound on really damaged of the object',
	},
	{
		name: 'SoundEnter',
		type: IniTypes_t.AUDIO_EVENT,
		description: 'The sound enter of the object',
	},
	{
		name: 'SoundExit',
		type: IniTypes_t.AUDIO_EVENT,
		description: 'The sound exit of the object',
	},
	{
		name: 'SoundPromotedVeteran',
		type: IniTypes_t.AUDIO_EVENT,
		description: 'The sound promoted veteran of the object',
	},
	{
		name: 'SoundPromotedElite',
		type: IniTypes_t.AUDIO_EVENT,
		description: 'The sound promoted elite of the object',
	},
	{
		name: 'SoundPromotedHero',
		type: IniTypes_t.AUDIO_EVENT,
		description: 'The sound promoted hero of the object',
	},
];

objectProperties.forEach(property => {
	objectPropertyTree.insert(property.name);
});

export function getObjectPropertyTree(): RBTree<string> {
	return objectPropertyTree;
}

export function getObjectPropertyDefinition(propertyName: string): PropertyDefinition | undefined {
	return objectProperties.find(property => property.name === propertyName);
}
