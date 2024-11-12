import { RBTree } from 'bintrees';
import * as list from '../../../utils/lists';
import { PropertyDefinition } from '../../properties';
import { IniTypes_t } from '../IniType_t';
import { ConditionStateFlags_t, WeaponSlot_t } from '../PropertyTypes';
import { AnimationMode_t } from '../simple/AnimationProperties';

export const conditionStateTree = new RBTree<string>((a, b) => a.localeCompare(b));

const conditionStatePropertyDefinitions: { [key: string]: PropertyDefinition } = {
	'Model': {
		name: 'Model',
		type: 'string',
		description: 'Model name to be used by the Draw module'
	},
	'Turret': {
		name: 'Turret',
		type: 'string',
			description: 'Bone name of the turret in the model'
	},
	'TurretArtAngle': {
		name: 'TurretArtAngle',
		type: 'float',
		description: 'The art angle of the turret'
	},
	'TurretPitch': {
		name: 'TurretPitch',
		type: 'float',
		description: 'The pitch of the turret'
	},
	'TurretArtPitch': {
		name: 'TurretArtPitch',
		type: 'float',
		description: 'The art pitch of the turret'
	},
	'AltTurret': {
		name: 'AltTurret',
		type: 'string',
		description: 'Alternative turret bone name'
	},
	'AltTurretArtAngle': {
		name: 'AltTurretArtAngle',
		type: 'float',
		description: 'Alternative turret art angle'
	},
	'AltTurretPitch': {
		name: 'AltTurretPitch',
		type: 'float',
		description: 'Alternative turret pitch'
	},
	'HideSubObject': {
		name: 'HideSubObject',
		type: 'string',
		description: 'Sub object to hide',
		numberOfValues: [-1]
	},
	'ShowSubObject': {
		name: 'ShowSubObject',
		type: 'string',
		description: 'Sub object to show',
		numberOfValues: [-1]
	},
	'WeaponFireFXBone': {
		name: 'WeaponFireFXBone',
		type: ['string', 'string'],
		description: 'Bone to attach the weapon fire FX to',
		validValues: [Object.values(WeaponSlot_t), null],
		numberOfValues: [2]
	},
	'WeaponRecoilBone': {
		name: 'WeaponRecoilBone',
		type: ['string', 'string'],
		description: 'Bone to attach the weapon recoil FX to',
		validValues: [Object.values(WeaponSlot_t), null],
		numberOfValues: [2]
	},
	'WeaponMuzzleFlash': {
		name: 'WeaponMuzzleFlash',
		type: ['string', IniTypes_t.FXLIST],
		description: 'Whether to show the weapon muzzle flash',
		validValues: [Object.values(WeaponSlot_t), null],
		numberOfValues: [2]
	},
	'WeaponLaunchBone': {
		name: 'WeaponLaunchBone',
		type: ['string', 'string'],
		description: 'Bone to attach the weapon launch FX to',
		validValues: [Object.values(WeaponSlot_t), null],
		numberOfValues: [2]
	},
	'WeaponHideShowBone': {
		name: 'WeaponHideShowBone',
		type: 'string',
		description: 'Bone to hide or show'
	},
	'Animation': {
		name: 'Animation',
		type: 'string',
		description: 'Animation to play'
	},
	'IdleAnimation': {
		name: 'IdleAnimation',
		type: 'string',
		description: 'Idle animation to play'
	},
	'AnimationMode': {
		name: 'AnimationMode',
		type: 'string',
		description: 'Animation mode to play',
		validValues: Object.values(AnimationMode_t)
	},
	'TransitionKey': {
		name: 'TransitionKey',
		type: 'string',
		description: 'Key to transition to the next state'
	},
	'WaitForStateToFinishIfPossible': {
		name: 'WaitForStateToFinishIfPossible',
		type: 'boolean',
		description: 'Whether to wait for the state to finish if possible'
	},
	'Flags': {
		name: 'Flags',
		type: 'string',
		description: 'Flags to set for the state',
		numberOfValues: [-1],
		validValues: Object.values(ConditionStateFlags_t)
	},
	'ParticleSysBone': {
		name: 'ParticleSysBone',
		type: ['string', 'string'],
		description: 'Bone to attach the particle system to',
		numberOfValues: [2],
		validValues: [null, list.definedParticleSystems]
	},
	'AnimationSpeedFactorRange': {
		name: 'AnimationSpeedFactorRange',
		type: 'integer',
		description: 'The animation speed factor range',
		numberOfValues: [1, 2]
	}
};

Object.entries(conditionStatePropertyDefinitions).forEach(([key, property]) => {
	conditionStateTree.insert(key);
});

export function getConditionStatePropertyDefinition(name: string): PropertyDefinition | undefined {
	return conditionStatePropertyDefinitions[name];
}

export function getConditionStatePropertyTree(): RBTree<string> {
	return conditionStateTree;
}