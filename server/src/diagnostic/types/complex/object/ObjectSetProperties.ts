/* eslint-disable prefer-const */
import { IniTypes_t } from '../../IniType_t';
import * as list from '../../../../utils/lists';
import { ObjectSoundProperties } from './ObjectProperties';
import { ArmorSetCondition_t, AutoChooseSources_t, kindOfs_t, WeaponSetCondition_t, WeaponSlot_t } from '../../PropertyTypes';
import { BehaviorModule_t } from './behaviorModule/BehaviorModule_t';
import { DrawModule_t } from './drawModule/DrawModule_t';
import { PropertyDefinition } from '../../../handlers/interfaces/IPropertyDefinition';

export const WeaponSetPropertyMap: Map<string, PropertyDefinition> = new Map();
export const WeaponSetProperties: PropertyDefinition[] = [
	{
		name: 'Conditions',
		type: 'string',
		description: 'The condition states for the weapon set',
		validValues: Object.values(WeaponSetCondition_t),
		numberOfValues: [-1],
		ignoreCase: true
	},
	{
		name: 'Weapon',
		type: ['string', IniTypes_t.WEAPON],
		description: 'The weapon for the weapon set',
		validValues: [Object.values(WeaponSlot_t), null],
		numberOfValues: [2]
	},
	{
		name: 'AutoChooseSources',
		type: ['string', 'string'],
		description: 'The auto choose sources for the weapon set',
		validValues: [Object.values(WeaponSlot_t), Object.values(AutoChooseSources_t)],
		numberOfValues: [-1],
		ignoreCase: true
	},
	{
		name: 'PreferredAgainst',
		type: ['string', 'string'],
		description: 'The preferred against for the weapon set',
		validValues: [Object.values(WeaponSlot_t), Object.values(kindOfs_t)],
		numberOfValues: [-1]
	},
	{
		name: 'ShareWeaponReloadTime',
		type: 'boolean',
		description: 'Whether the weapon set shares the weapon reload time',
	},
	{
		name: 'WeaponLockSharedAcrossSets',
		type: 'boolean',
		description: 'Whether the weapon lock is shared across sets'
	}
];

WeaponSetProperties.forEach(property => {
	WeaponSetPropertyMap.set(property.name, property);
});

export const ArmorSetPropertyMap: Map<string, PropertyDefinition> = new Map();
export const ArmorSetProperties: PropertyDefinition[] = [
	{
		name: 'Conditions',
		type: 'string',
		description: 'The condition states for the weapon set',
		validValues: Object.values(ArmorSetCondition_t),
		numberOfValues: [-1],
		ignoreCase: true
	},
	{
		name: 'Armor',
		type: IniTypes_t.ARMOR,
		description: 'The armor for the armor set',
	},
	{
		name: 'DamageFX',
		type: IniTypes_t.DAMAGE_FX,
		description: 'The damage effects for the armor set',
	}
];

ArmorSetProperties.forEach(property => {
	ArmorSetPropertyMap.set(property.name, property);
});

export const PrerequisitePropertyMap: Map<string, PropertyDefinition> = new Map();
export const PrerequisiteProperties: PropertyDefinition[] = [
	{
		name: 'Object',
		type: IniTypes_t.OBJECT,
		description: 'The object for the prerequisite',
		numberOfValues: [-1]
	},
	{
		name: 'Science',
		type: IniTypes_t.SCIENCE,
		description: 'The science for the prerequisite',
		numberOfValues: [-1]
	}
];

PrerequisiteProperties.forEach(property => {
	PrerequisitePropertyMap.set(property.name, property);
});

// List of allowed unit specific sounds properties

interface SoundProperty {
	property: PropertyDefinition;
	requiredModules?: BehaviorModule_t[][];
	requiredKindOfs?: kindOfs_t[][];
	requiredDrawModules?: DrawModule_t[][];
	quickFix?: () => void;
}

export const UnitSpecificSounds: { [key: string]: SoundProperty } = {
	'VoiceCreate': {
		property: {
			name: 'VoiceCreate',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The voice create of the object',
		},
		requiredKindOfs: [[kindOfs_t.VEHICLE, kindOfs_t.INFANTRY, kindOfs_t.AIRCRAFT, kindOfs_t.UNIT]]
	},
	'VoiceCrush': {
		property: {
			name: 'VoiceCrush',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The voice crush of the object',
		},
		requiredKindOfs: [[kindOfs_t.INFANTRY, kindOfs_t.VEHICLE, kindOfs_t.UNIT]]
	},
	'VoiceUnload': {
		property: {
			name: 'VoiceUnload',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The voice unload of the object',
		},
		requiredKindOfs: [[kindOfs_t.UNIT, kindOfs_t.VEHICLE, kindOfs_t.INFANTRY]]
	},
	'VoiceEnter': {
		property: {
			name: 'VoiceEnter',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The voice enter of the object',
		},
		requiredKindOfs: [[kindOfs_t.UNIT, kindOfs_t.VEHICLE, kindOfs_t.INFANTRY]]
	},
	'VoiceGarrison': {
		property: {
			name: 'VoiceGarrison',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The voice garrison of the object',
		},
		requiredKindOfs: [[kindOfs_t.INFANTRY]]
	},
	'VoiceBombard': {
		property: {
			name: 'VoiceBombard',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The voice bombard of the object',
		},
		requiredKindOfs: [[kindOfs_t.CAN_ATTACK]]
	},
	'VoiceGetHealed': {
		property: {
			name: 'VoiceGetHealed',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The voice get healed of the object',
		},
		requiredKindOfs: [[kindOfs_t.UNIT, kindOfs_t.INFANTRY, kindOfs_t.VEHICLE]]
	},
	'VoiceLowFuel': {
		property: {
			name: 'VoiceLowFuel',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The voice low fuel of the object',
		},
		requiredKindOfs: [[kindOfs_t.AIRCRAFT]]
	},
	'VoicePrimaryWeaponMode': {
		property: {
			name: 'VoicePrimaryWeaponMode',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The voice primary weapon mode of the object',
		}
	},
	'VoiceSecondaryWeaponMode': {
		property: {
			name: 'VoiceSecondaryWeaponMode',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The voice secondary weapon mode of the object',
		}
	},
	'VoiceTertiaryWeaponMode': {
		property: {
			name: 'VoiceTertiaryWeaponMode',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The voice tertiary weapon mode of the object',
		}
	},
	'VoiceCaptureBuildingComplete': {
		property: {
			name: 'VoiceCaptureBuildingComplete',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The voice capture building complete of the object',
		}
	},
	'VoiceClearBuilding': {
		property: {
			name: 'VoiceClearBuilding',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The voice clear building of the object',
		}
	},
	'VoiceBuildResponse': {
		property: {
			name: 'VoiceBuildResponse',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The voice build response of the object',
		},
		requiredKindOfs: [[kindOfs_t.DOZER]]
	},
	'VoiceNoBuild': {
		property: {
			name: 'VoiceNoBuild',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The voice no build of the object',
		},
		requiredKindOfs: [[kindOfs_t.DOZER]]
	},
	'VoiceRepair': {
		property: {
			name: 'VoiceRepair',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The voice repair of the object',
		},
		requiredKindOfs: [[kindOfs_t.DOZER]]
	},
	'VoiceDisarm': {
		property: {
			name: 'VoiceDisarm',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The voice disarm of the object',
		},
		requiredKindOfs: [[kindOfs_t.DOZER]]
	},
	'VoiceSupply': {
		property: {
			name: 'VoiceSupply',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The voice supply of the object',
		},
		requiredKindOfs: [[kindOfs_t.HARVESTER]]
	},
	'VoiceSubdue': {
		property: {
			name: 'VoiceSubdue',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The voice subdue of the object',
		}
	},
	'SoundEject': {
		property: {
			name: 'SoundEject',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The sound eject of the object',
		},
		requiredModules: [[BehaviorModule_t.EJECT_PILOT_DIE]]
	},
	'VoiceEject': {
		property: {
			name: 'VoiceEject',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The voice eject of the object',
		},
		requiredModules: [[BehaviorModule_t.EJECT_PILOT_DIE]]
	},
	'VoiceMelee': {
		property: {
			name: 'VoiceMelee',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The voice melee of the object',
		}
	},
	'VoiceCombatDrop': {
		property: {
			name: 'VoiceCombatDrop',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The voice combat drop of the object',
		},
		requiredModules: [[BehaviorModule_t.CHINOOK_AI_UPDATE]]
	},
	'VoiceFireRocketPods': {
		property: {
			name: 'VoiceFireRocketPods',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The voice fire rocket pods of the object',
		}
	},
	'VoiceRapidFire': {
		property: {
			name: 'VoiceRapidFire',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The voice rapid fire of the object',
		}
	},
	'VoiceStealCashComplete': {
		property: {
			name: 'VoiceStealCashComplete',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The voice steal cash complete of the object',
		}
	},
	'VoiceDisableVehicleComplete': {
		property: {
			name: 'VoiceDisableVehicleComplete',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The voice disable vehicle complete of the object',
		}
	},
	'VoiceHackInternet': {
		property: {
			name: 'VoiceHackInternet',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The voice hack internet of the object',
		}
	},
	'VoiceFlameLocation': {
		property: {
			name: 'VoiceFlameLocation',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The voice flame location of the object',
		}
	},
	'VoiceSalvage': {
		property: {
			name: 'VoiceSalvage',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The voice salvage of the object',
		}
	},
	'VoiceSnipePilot': {
		property: {
			name: 'VoiceSnipePilot',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The voice snipe pilot of the object',
		}
	},
	'VoiceEnterHostile': {
		property: {
			name: 'VoiceEnterHostile',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The voice enter hostile of the object',
		}
	},
	'VoiceMoveUpgraded': {
		property: {
			name: 'VoiceMoveUpgraded',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The voice move upgraded of the object',
		},
		requiredModules: [[BehaviorModule_t.LOCOMOTOR_SET_UPGRADE]]
	},
	'VoicePoisonLocation': {
		property: {
			name: 'VoicePoisonLocation',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The voice poison location of the object',
		}
	},
	'WeaponUpgradeSound': {
		property: {
			name: 'WeaponUpgradeSound',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The weapon upgrade sound of the object',
		},
		requiredModules: [[BehaviorModule_t.WEAPON_SET_UPGRADE]]
	},
	'TurretMoveStart': {
		property: {
			name: 'TurretMoveStart',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The turret move start of the object',
		},
		requiredModules: [[BehaviorModule_t.AI_UPDATE_INTERFACE, BehaviorModule_t.CHINOOK_AI_UPDATE, BehaviorModule_t.DOZER_AI_UPDATE, BehaviorModule_t.TRANSPORT_AI_UPDATE, BehaviorModule_t.DEPLOY_STYLE_AI_UPDATE]]
	},
	'TurretMoveLoop': {
		property: {
			name: 'TurretMoveLoop',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The turret move loop of the object',
		},
		requiredModules: [[BehaviorModule_t.AI_UPDATE_INTERFACE, BehaviorModule_t.CHINOOK_AI_UPDATE, BehaviorModule_t.DOZER_AI_UPDATE, BehaviorModule_t.TRANSPORT_AI_UPDATE, BehaviorModule_t.DEPLOY_STYLE_AI_UPDATE]] 
	},
	'Deploy': {
		property: {
			name: 'Deploy',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The deploy of the object',
		},
		requiredModules: [[BehaviorModule_t.DEPLOY_STYLE_AI_UPDATE]]
	},
	'Undeploy': {
		property: {
			name: 'Undeploy',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The undeploy of the object',
		},
		requiredModules: [[BehaviorModule_t.DEPLOY_STYLE_AI_UPDATE]]
	},
	'TruckLandingSound': {
		property: {
			name: 'TruckLandingSound',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The truck landing sound of the object',
		},
		requiredDrawModules: [[DrawModule_t.W3DTRUCKDRAW]]
	},
	'TruckPowerslideSound': {
		property: {
			name: 'TruckPowerslideSound',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The truck powerslide sound of the object',
		},
		requiredDrawModules: [[DrawModule_t.W3DTRUCKDRAW]]
	},
	'Afterburner': {
		property: {
			name: 'Afterburner',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The after burner of the object',
		},
	},
	'UnderConstruction': {
		property: {
			name: 'UnderConstruction',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The under construction of the object',
		},
		requiredKindOfs: [[kindOfs_t.STRUCTURE]]
	},
	'StickyBombCreated': {
		property: {
			name: 'StickyBombCreated',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The sticky bomb created of the object',
		},
		requiredModules: [[BehaviorModule_t.STICKY_BOMB_UPDATE]]
	},
	'DisguiseStarted': {
		property: {
			name: 'DisguiseStarted',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The disguise started of the object',
		}
	},
	'DisguiseRevealedSuccess': {
		property: {
			name: 'DisguiseRevealedSuccess',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The disguise revealed success of the object',
		}
	},
	'DisguiseRevealedFailure': {
		property: {
			name: 'DisguiseRevealedFailure',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The disguise revealed failure of the object',
		}
	},
	'HowitzerFire': {
		property: {
			name: 'HowitzerFire',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The howitzer fire of the object',
		}
	},
	'StartDive': {
		property: {
			name: 'StartDive',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The start dive of the object',
		},
		requiredModules: [[BehaviorModule_t.DELIVER_PAYLOAD_AI_UPDATE]]
	}
};

interface FXProperty {
	property: PropertyDefinition;
	requiredModules?: BehaviorModule_t[][];
	requiredKindOfs?: kindOfs_t[][];
	requiredDrawModules?: DrawModule_t[][];
	quickFix?: () => void;
}

export const UnitSpecificFXs: { [key: string]: FXProperty } = {
	'CombatDropKillFX': {
		property: {
			name: 'CombatDropKillFX',
			type: IniTypes_t.FXLIST,
			description: 'The combat drop kill FX of the object',
		},
		requiredKindOfs: [[kindOfs_t.CAN_RAPPEL]]
	}
};