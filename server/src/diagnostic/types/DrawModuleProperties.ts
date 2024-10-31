import { PropertyDefinition } from '../properties';
import { DrawModule_t } from './DrawModule_t';
import { RBTree } from 'bintrees';
import { WeaponSlot_t } from './PropertyTypes';
import { LOD_t } from './PropertyTypes';
import * as list from '../../utils/lists';


export const W3DDrawModuleTrees: { [key in DrawModule_t]: RBTree<string>} = {
	[DrawModule_t.W3DMODELDRAW]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[DrawModule_t.W3DDEBRISDRAW]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[DrawModule_t.W3DDEFAULT]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[DrawModule_t.W3DDEPENDENCYMODELDRAW]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[DrawModule_t.W3DOverlordTANKDRAW]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[DrawModule_t.W3DOverlordAIRCRAFTDRAW]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[DrawModule_t.W3DOverlordTRUCKDRAW]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[DrawModule_t.W3DLLASERDRAW]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[DrawModule_t.W3DPOLICECARDDRAW]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[DrawModule_t.W3DTREEDRAW]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[DrawModule_t.W3DPROPDRAW]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[DrawModule_t.W3DPROJECTILESTREAMDRAW]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[DrawModule_t.W3DDROPEDRAW]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[DrawModule_t.W3DSCIENCEMODELDRAW]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[DrawModule_t.W3DSUPPLYDRAW]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[DrawModule_t.W3DTANKDRAW]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[DrawModule_t.W3DTANKTRUCKDRAW]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[DrawModule_t.W3DTRACERDRAW]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[DrawModule_t.W3DTRUCKDRAW]: new RBTree<string>((a, b) => a.localeCompare(b))
}

const W3DModelDrawPropertyDefinitions: { [key in DrawModule_t]: {[key: string]: PropertyDefinition}} = {
	[DrawModule_t.W3DMODELDRAW]: {
		'AnimationsRequirePower': {
			name: 'AnimationsRequirePower',
			type: 'boolean',
			description: 'Whether the animations require power',
		},
		'AttachToBoneInAnotherModule': {
			name: 'AttachToBoneInAnotherModule',
			type: 'string',
			description: 'The bone to attach the object to in another module',
		},
		'ExtraPublicBone': {
			name: 'ExtraPublicBone',
			type: 'string',
			description: 'Bone to expose to other modules',
		},
		'IgnoreConditionStates': {
			name: 'IgnoreConditionStates',
			type: 'string',
			description: 'Condition states to ignore',
			validValues: list.allowedConditionStates,
			numberOfValues: [-1]
		},
		'InitialRecoilSpeed': {
			name: 'InitialRecoilSpeed',
			type: 'float',
			description: 'The initial recoil speed of the object',
		},
		'MaxRecoilDistance': {
			name: 'MaxRecoilDistance',
			type: 'float',
			description: 'The maximum recoil distance of the object',
		},
		'MinLODRequired': {
			name: 'MinLODRequired',
			type: 'string',
			description: 'The minimum LOD required to display the object',
			validValues: Object.values(LOD_t)
		},
		'OkToChangeModelColor': {
			name: 'OkToChangeModelColor',
			type: 'boolean',
			description: 'Whether the object can change its model color',
		},
		'RecoilDamping': {
			name: 'RecoilDamping',
			type: 'float',
			description: 'The recoil damping of the object',
		},
		'RecoilSettleSpeed': {
			name: 'RecoilSettleSpeed',
			type: 'float',
			description: 'The recoil settle speed of the object',
		},
		'ReceivesDynamicLights': {
			name: 'ReceivesDynamicLights',
			type: 'boolean',
			description: 'Whether the object receives dynamic lights',
		},
		'ParticlesAttachedToAnimatedBones': {
			name: 'ParticlesAttachedToAnimatedBones',
			type: 'boolean',
			description: 'Whether particles are attached to animated bones',
		},
		'ProjectileBoneFeedbackEnabledSlots': {
			name: 'ProjectileBoneFeedbackEnabledSlots',
			type: 'string',
			description: 'The slots to enable projectile bone feedback for',
			numberOfValues: [-1],
			validValues: Object.values(WeaponSlot_t)
		},
		'TrackMarks': {
			name: 'TrackMarks',
			type: 'string',
			description: 'The type of track marks the object leaves',
		}
	},
	[DrawModule_t.W3DDEBRISDRAW]: {},
	[DrawModule_t.W3DDEFAULT]: {},
	[DrawModule_t.W3DDEPENDENCYMODELDRAW]: {},
	[DrawModule_t.W3DOverlordTANKDRAW]: {},
	[DrawModule_t.W3DOverlordAIRCRAFTDRAW]: {},
	[DrawModule_t.W3DOverlordTRUCKDRAW]: {},
	[DrawModule_t.W3DLLASERDRAW]: {},
	[DrawModule_t.W3DPOLICECARDDRAW]: {},
	[DrawModule_t.W3DTREEDRAW]: {},
	[DrawModule_t.W3DPROPDRAW]: {},
	[DrawModule_t.W3DPROJECTILESTREAMDRAW]: {},
	[DrawModule_t.W3DDROPEDRAW]: {},
	[DrawModule_t.W3DSCIENCEMODELDRAW]: {},
	[DrawModule_t.W3DSUPPLYDRAW]: {},
	[DrawModule_t.W3DTANKDRAW]: {},
	[DrawModule_t.W3DTANKTRUCKDRAW]: {},
	[DrawModule_t.W3DTRACERDRAW]: {},
	[DrawModule_t.W3DTRUCKDRAW]: {}
}

// Populate the trees with definition keys
Object.entries(W3DModelDrawPropertyDefinitions).forEach(([key, value]) => {
	Object.keys(value).forEach(propKey => W3DDrawModuleTrees[key as DrawModule_t].insert(propKey));
});

export function getDrawModulePropertyTree(drawModule: DrawModule_t): RBTree<string> {
	return W3DDrawModuleTrees[drawModule];
}

export function getDrawModulePropertyDefinition(drawType: DrawModule_t, propertyName: string): PropertyDefinition | undefined {
	return W3DModelDrawPropertyDefinitions[drawType]?.[propertyName];
}
