/* eslint-disable prefer-const */

import { BehaviorModule_t } from '../diagnostic/types/complex/object/behaviorModule/BehaviorModule_t';
import { kindOfs_t } from '../diagnostic/types/PropertyTypes';

// Load the IniNames.json file into string arrays if it exists
let IniNames: Record<string, string[]> = {};
try {
  IniNames = require("./nameExtractor/IniNames.json");
} catch (error) {
  console.warn("IniNames.json not found, using empty arrays as fallback");
}

export let audioEvent: string[] = IniNames.AudioEvent || [];
export let animation: string[] = IniNames.Animation || [];
export let armor: string[] = IniNames.Armor || [];
export let commandButtons: string[] = IniNames.CommandButton || [];
export let commandSets: string[] = IniNames.CommandSet || [];
export let crateData: string[] = IniNames.CrateData || [];
export let damageFX: string[] = IniNames.DamageFX || [];
export let dialogEvent: string[] = IniNames.DialogEvent || [];
export let evaEvent: string[] = IniNames.EvaEvent || [];
export let fxLists: string[] = IniNames.FXList || [];
export let locomotor: string[] = IniNames.Locomotor || [];
export let mappedImages: string[] = IniNames.MappedImage || [];
export let mouseCursor: string[] = IniNames.MouseCursor || [];
export let objects: string[] = IniNames.Object || [];
export let objectReskin: string[] = IniNames.ObjectReskin || [];
export let ocls: string[] = IniNames.ObjectCreationList || [];
export let particleSystem: string[] = IniNames.ParticleSystem || [];
export let playerTemplate: string[] = IniNames.PlayerTemplate || [];
export let science: string[] = IniNames.Science || [];
export let specialPower: string[] = IniNames.SpecialPower || [];
export let upgrade: string[] = IniNames.Upgrade || [];
export let weapon: string[] = IniNames.Weapon || [];

// Custom lists for user-defined items
export let customAudioEvent: string[] = [];
export let customAnimation: string[] = [];
export let customArmor: string[] = [];
export let customCommandButtons: string[] = [];
export let customCommandSets: string[] = [];
export let customCrateData: string[] = [];
export let customDamageFX: string[] = [];
export let customDialogEvent: string[] = [];
export let customEvaEvent: string[] = [];
export let customFXLists: string[] = [];
export let customLocomotor: string[] = [];
export let customMappedImages: string[] = [];
export let customMouseCursor: string[] = [];
export let customObjects: string[] = [];
export let customObjectReskin: string[] = [];
export let customOCLs: string[] = [];
export let customParticleSystem: string[] = [];
export let customPlayerTemplate: string[] = [];
export let customScience: string[] = [];
export let customSpecialPower: string[] = [];
export let customUpgrade: string[] = [];
export let customWeapon: string[] = [];

export let conditionStates: string[] = [
	'NONE',
	'USER_1',
	'USER_2',
	'JAMMED',
	'ATTACKING',
	'WEAPONSET_CRATEUPGRADE_ONE',
	'WEAPONSET_CRATEUPGRADE_TWO',
	'ARMORSET_CRATEUPGRADE_TWO',
	'ARMORSET_CRATEUPGRADE_ONE',
	'PREORDER',
	'STUNNED',
	'STUNNED_FLAILING',
	'EXPLODED_BOUNCING',
	'EXPLODED_FLAILING',
	'CAPTURED',
	'RAISING_FLAG',
	'CONTINUOUS_FIRE_SLOW',
	'CONTINUOUS_FIRE_FAST',
	'CONTINUOUS_FIRE_MEAN',
	'SPECIAL_CHEERING',
	'ARMED',
	'RAPELLING',
	'PARACHUTING',
	'CLIMBING',
	'SPLATTED',
	'BURNED',
	'AFLAME',
	'SMOLDERING',
	'POWER_PLANT_UPGRADING',
	'POWER_PLANT_UPGRADED',
	'OVER_WATER',
	'MOVING',
	'DEPLOYED',
	'UNPACKING',
	'PACKING',
	'JETEXHAUST',
	'JETAFTERBURNER',
	'LOADED',
	'CARRYING',
	'DOCKING_ENDING',
	'DOCKING_ACTIVE',
	'DOCKING_BEGINNING',
	'DOCKING',
	'PANICKING',
	'CONSTRUCTION_COMPLETE',
	'ACTIVELY_CONSTRUCTING',
	'ACTIVELY_BEING_CONSTRUCTED',
	'PARTIALLY_CONSTRUCTED',
	'AWAITING_CONSTRUCTION',
	'DYING',
	'PRONE',
	'FREEFALL',
	'POST_COLLAPSE',
	'TOPPLED',
	'TURRET_ROTATE',
	'RELOADING_A',
	'BETWEEN_FIRING_SHOTS_A',
	'FIRING_A',
	'PREATTACK_A',
	'USING_WEAPON_A',
	'RELOADING_B',
	'BETWEEN_FIRING_SHOTS_B',
	'FIRING_B',
	'PREATTACK_B',
	'USING_WEAPON_B',
	'RELOADING_C',
	'BETWEEN_FIRING_SHOTS_C',
	'FIRING_C',
	'PREATTACK_C',
	'USING_WEAPON_C',
	'DOOR_4_WAITING_TO_CLOSE',
	'DOOR_4_WAITING_OPEN',
	'DOOR_4_CLOSING',
	'DOOR_4_OPENING',
	'DOOR_3_WAITING_TO_CLOSE',
	'DOOR_3_WAITING_OPEN',
	'DOOR_3_CLOSING',
	'DOOR_3_OPENING',
	'DOOR_2_WAITING_TO_CLOSE',
	'DOOR_2_WAITING_OPEN',
	'DOOR_2_CLOSING',
	'DOOR_2_OPENING',
	'DOOR_1_WAITING_TO_CLOSE',
	'DOOR_1_WAITING_OPEN',
	'DOOR_1_CLOSING',
	'DOOR_1_OPENING',
	'WEAPONSET_PLAYER_UPGRADE',
	'WEAPONSET_HERO',
	'WEAPONSET_ELITE',
	'WEAPONSET_VETERAN',
	'ENEMYNEAR',
	'REALLYDAMAGED',
	'RUBBLE',
	'DAMAGED',
	'SNOW',
	'SOLD',
	'DISGUISED',
	'NIGHT',
	'SPECIAL_DAMAGED',
	'BACKCRUSHED',
	'FRONTCRUSHED',
	'SECOND_LIFE',
	'RIDER1',
	'RIDER2',
	'RIDER3',
	'RIDER4',
	'RIDER5',
	'RIDER6',
	'RIDER7',
	'RIDER8',
	'PRISTINE',
	'RIGHT_TO_CENTER',
	'CENTER_TO_RIGHT',
	'LEFT_TO_CENTER',
	'CENTER_TO_LEFT'
];

export let customConditionStates: string[] = [];
export function clearCustomConditionStates(): void {
	customConditionStates = [];
}

interface ConditionalConditionState {
	conditionState: string;
	requiredModules?: BehaviorModule_t[];
	requiredKindOfs?: kindOfs_t[];
	errorDescription: string;
}

export const additionalConditionStates: { [key: string]: ConditionalConditionState } = {
	'RAPPELLING': {
		conditionState: 'RAPPELLING',
		requiredKindOfs: [kindOfs_t.CAN_RAPPEL],
		errorDescription: 'Need to have the CAN_RAPPEL KindOf to use this condition state'
	}
};

export let transitionKeys: string[] = [];
export function clearTransitionKeys(): void {
	transitionKeys = [];
}

export let WeaponBonuses: string[] = [
	'GARRISONED',
	'HORDE',
	'CONTINUOUS_FIRE_MEAN',
	'CONTINUOUS_FIRE_FAST', 
	'NATIONALISM',
	'PLAYER_UPGRADE',
	'DRONE_SPOTTING',
	'ENTHUSIASTIC',
	'VETERAN',
	'ELITE',
	'HERO',
	'BATTLEPLAN_BOMBARDMENT',
	'BATTLEPLAN_HOLDTHELINE',
	'BATTLEPLAN_SEARCHANDDESTROY',
	'SUBLIMINAL',
	'SOLO_HUMAN_EASY',
	'SOLO_HUMAN_NORMAL',
	'SOLO_HUMAN_HARD',
	'SOLO_AI_EASY',
	'SOLO_AI_NORMAL',
	'SOLO_AI_HARD',
	'FRENZY_ONE',
	'FRENZY_TWO',
	'FRENZY_THREE',
	'FANATICISM',
	'DEMORALIZED_OBSOLETE',
	'TARGET_FAERIE_FIRE'
];
