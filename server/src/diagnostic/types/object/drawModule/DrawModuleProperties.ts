import { PropertyDefinition } from '../../../properties';
import { DrawModule_t } from './DrawModule_t';
import { RBTree } from 'bintrees';
import { WeaponSlot_t } from '../../PropertyTypes';
import { LOD_t } from '../../PropertyTypes';
import * as list from '../../../../utils/lists';
import { IniTypes_t } from '../../IniType_t';


export const W3DDrawModuleTrees: { [key in DrawModule_t]: RBTree<string> } = {
	[DrawModule_t.W3DMODELDRAW]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[DrawModule_t.W3DDEBRISDRAW]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[DrawModule_t.W3DDEFAULT]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[DrawModule_t.W3DDEPENDENCYMODELDRAW]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[DrawModule_t.W3DOverlordTANKDRAW]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[DrawModule_t.W3DOverlordAIRCRAFTDRAW]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[DrawModule_t.W3DOverlordTRUCKDRAW]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[DrawModule_t.W3DLLASERDRAW]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[DrawModule_t.W3DPOLICECARDRAW]: new RBTree<string>((a, b) => a.localeCompare(b)),
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
};

const baseW3DModelProperties: { [key: string]: PropertyDefinition } = {
	'ConditionState': {	// Used to define that this DrawModule needs a CondtionState block.
		name: 'ConditionState',
		type: 'string',
		description: 'The condition state of the object'
	},
	'DefaultConditionState': {	// Used to define that this DrawModule needs a DefaultConditionState block.
		name: 'DefaultConditionState',
		type: 'string',
		description: 'The default condition state of the object'
	},
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
};

const baseW3DTankProperties: {[key: string]: PropertyDefinition} = {
	'TreadDebrisLeft': {
		name: 'TreadDebrisLeft',
		type: 'string',
		description: 'The type of tread debris left by the tank',
	},
	'TreadDebrisRight': {
		name: 'TreadDebrisRight',
		type: 'string',
		description: 'The type of tread debris left by the tank',
	},
	'TreadAnimationRate': {
		name: 'TreadAnimationRate',
		type: 'float',
		description: 'The animation rate of the treads',
	},
	'TreadPivotSpeedFraction': {
		name: 'TreadPivotSpeedFraction',
		type: 'float',
		description: 'The pivot speed fraction of the treads',
	},
	'TreadDriveSpeedFraction': {
		name: 'TreadDriveSpeedFraction',
		type: 'float',
		description: 'The drive speed fraction of the treads',
	}
};

const baseW3DTruckProperties: {[key: string]: PropertyDefinition} = {
	'Dust': {
		name: 'Dust',
		type: 'string',
		description: 'The type of dust the truck leaves',
	},
	'DirtSpray': {
		name: 'DirtSpray',
		type: 'string',
		description: 'The type of dirt spray the truck leaves',
	},
	'PowerSlideSpray': {
		name: 'PowerSlideSpray',
		type: 'string',
		description: 'The type of power slide spray the truck leaves',
	},
	'LeftFrontTireBone': {
		name: 'LeftFrontTireBone',
		type: 'string',
		description: 'The bone of the left front tire',
	},
	'RightFrontTireBone': {
		name: 'RightFrontTireBone',
		type: 'string',
		description: 'The bone of the right front tire',
	},
	'LeftRearTireBone': {
		name: 'LeftRearTireBone',
		type: 'string',
		description: 'The bone of the left rear tire',
	},
	'RightRearTireBone': {
		name: 'RightRearTireBone',
		type: 'string',
		description: 'The bone of the right rear tire',
	},
	'MidLeftFrontTireBone': {
		name: 'MidLeftFrontTireBone',
		type: 'string',
		description: 'The bone of the mid left front tire',
	},
	'MidRightFrontTireBone': {
		name: 'MidRightFrontTireBone',
		type: 'string',
		description: 'The bone of the mid right front tire',
	},
	'MidLeftRearTireBone': {
		name: 'MidLeftRearTireBone',
		type: 'string',
		description: 'The bone of the mid left rear tire',
	},
	'MidRightRearTireBone': {
		name: 'MidRightRearTireBone',
		type: 'string',
		description: 'The bone of the mid right rear tire',
	},
	'MidLeftMidTireBone': {
		name: 'MidLeftMidTireBone',
		type: 'string',
		description: 'The bone of the mid left mid tire',
	},
	'MidRightMidTireBone': {
		name: 'MidRightMidTireBone',
		type: 'string',
		description: 'The bone of the mid right mid tire',
	},
	'TireRotationMultiplier': {
		name: 'TireRotationMultiplier',
		type: 'float',
		description: 'The rotation multiplier of the tires',
	},
	'PowerSlideRotationAdditional': {
		name: 'PowerSlideRotationAdditional',
		type: 'float',
		description: 'The additional rotation of the tires',
	},
	'CabBone': {
		name: 'CabBone',
		type: 'string',
		description: 'The bone of the cab',
	},
	'TrailerBone': {
		name: 'TrailerBone',
		type: 'string',
		description: 'The bone of the trailer',
	},
	'CabRotationMultiplier': {
		name: 'CabRotationMultiplier',
		type: 'float',
		description: 'The rotation multiplier of the cab',
	},
	'TrailerRotationMultiplier': {
		name: 'TrailerRotationMultiplier',
		type: 'float',
		description: 'The rotation multiplier of the trailer',
	},
	'RotationDamping': {
		name: 'RotationDamping',
		type: 'float',
		description: 'The damping of the rotation',
	}
};

const baseW3DOverlordProperty: {[key: string]: PropertyDefinition} = {
	'AttachToBoneInContainer': {
		name: 'AttachToBoneInContainer',
		type: 'string',
		description: 'The bone to attach the object to in a container',
	}
};

const W3DModelDrawPropertyDefinitions: { [key in DrawModule_t]: { [key: string]: PropertyDefinition } } = {
	[DrawModule_t.W3DMODELDRAW]: baseW3DModelProperties,
	[DrawModule_t.W3DDEBRISDRAW]: {},
	[DrawModule_t.W3DDEFAULT]: {},
	[DrawModule_t.W3DDEPENDENCYMODELDRAW]: {
		...baseW3DModelProperties, // Use base properties
		...baseW3DOverlordProperty,
	},
	[DrawModule_t.W3DLLASERDRAW]: {
		'NumBeams': {
			name: 'NumBeams',
			type: 'integer',
			description: 'The number of beams the laser has',
		},
		'InnerBeamWidth': {
			name: 'InnerBeamWidth',
			type: 'float',
			description: 'The width of the inner beam',
		},
		'OuterBeamWidth': {
			name: 'OuterBeamWidth',
			type: 'float',
			description: 'The width of the outer beam',
		},
		'InnerColor': {
			name: 'InnerColor',
			type: ['string', 'string', 'string', 'string'],
			description: 'The color of the inner beam',
			numberOfValues: [4]
		},
		'OuterColor': {
			name: 'OuterColor',
			type: ['string', 'string', 'string', 'string'],
			description: 'The color of the outer beam',
			numberOfValues: [4]
		},
		'MaxIntensityLifetime': {
			name: 'MaxIntensityLifetime',
			type: 'float',
			description: 'The maximum intensity lifetime of the laser',
		},
		'FadeLifetime': {
			name: 'FadeLifetime',
			type: 'float',
			description: 'The fade lifetime of the laser',
		},
		'Texture': {
			name: 'Texture',
			type: 'string',
			description: 'The texture of the laser',
		},
		'ScrollRate': {
			name: 'ScrollRate',
			type: 'float',
			description: 'The scroll rate of the laser',
		},
		'Tile': {
			name: 'Tile',
			type: 'boolean',
			description: 'Whether the laser tiles',
		},
		'Segments': {
			name: 'Segments',
			type: 'integer',
			description: 'The number of segments the laser has',
		},
		'ArcHeight': {
			name: 'ArcHeight',
			type: 'float',
			description: 'The height of the arc',
		},
		'SegmentOverlapRatio': {
			name: 'SegmentOverlapRatio',
			type: 'float',
			description: 'The overlap ratio of the segments',
		},
		'TilingScalar': {
			name: 'TilingScalar',
			type: 'float',
			description: 'The tiling scalar of the laser',
		}
	},
	[DrawModule_t.W3DTANKDRAW]: {
		...baseW3DModelProperties,
		...baseW3DTankProperties,
	},
	[DrawModule_t.W3DTRUCKDRAW]: {
		...baseW3DModelProperties,
		...baseW3DTruckProperties,
	},
	[DrawModule_t.W3DTANKTRUCKDRAW]: {
		...baseW3DModelProperties,
		...baseW3DTankProperties,
		...baseW3DTruckProperties,
	},
	[DrawModule_t.W3DOverlordTANKDRAW]: {
		...baseW3DModelProperties,
		...baseW3DOverlordProperty,
		...baseW3DTankProperties,
	},
	[DrawModule_t.W3DOverlordAIRCRAFTDRAW]: {
		...baseW3DModelProperties,
		...baseW3DOverlordProperty,
	},
	[DrawModule_t.W3DOverlordTRUCKDRAW]: {
		...baseW3DModelProperties,
		...baseW3DOverlordProperty,
		...baseW3DTruckProperties,
	},
	[DrawModule_t.W3DPOLICECARDRAW]: {
		...baseW3DModelProperties,
		...baseW3DTruckProperties
	},
	[DrawModule_t.W3DPROJECTILESTREAMDRAW]: {
		'Texture': {
			name: 'Texture',
			type: 'string',
			description: 'The texture of the projectile stream',
		},
		'Width': {
			name: 'Width',
			type: 'float',
			description: 'The width of the projectile stream',
		},
		'TileFactor': {
			name: 'TileFactor',
			type: 'float',
			description: 'The tile factor of the projectile stream',
		},
		'ScrollRate': {
			name: 'ScrollRate',
			type: 'float',
			description: 'The scroll rate of the projectile stream',
		},
		'MaxSegments': {
			name: 'MaxSegments',
			type: 'integer',
			description: 'The maximum number of segments the projectile stream has',
		}
	},
	[DrawModule_t.W3DDROPEDRAW]: {},
	[DrawModule_t.W3DSCIENCEMODELDRAW]: {
		...baseW3DModelProperties,
		'RequiredScience': {
			name: 'RequiredScience',
			type: 'string',
			description: 'The required science to display the object',
		}
	},
	[DrawModule_t.W3DSUPPLYDRAW]: {
		...baseW3DModelProperties,
		'SupplyBonePrefix': {
			name: 'SupplyBonePrefix',
			type: 'string',
			description: 'The prefix of the supply bone',
		}
	},
	[DrawModule_t.W3DTRACERDRAW]: {},
	[DrawModule_t.W3DTREEDRAW]: {
		'ModelName': {
			name: 'ModelName',
			type: 'string',
			description: 'The name of the model',
		},
		'TextureName': {
			name: 'TextureName',
			type: 'string',
			description: 'The name of the texture',
		},
		'MoveOutwardTime': {
			name: 'MoveOutwardTime',
			type: 'float',
			description: 'The time it takes to move outward',
		},
		'MoveInwardTime': {
			name: 'MoveInwardTime',
			type: 'float',
			description: 'The time it takes to move inward',
		},
		'MoveOutwardDistanceFactor': {
			name: 'MoveOutwardDistanceFactor',
			type: 'float',
			description: 'The distance factor of the move outward',
		},
		'DarkeningFactor': {
			name: 'DarkeningFactor',
			type: 'float',
			description: 'The darkening factor of the tree',
		},
		'ToppleFX': {
			name: 'ToppleFX',
			type: IniTypes_t.FXLIST,
			description: 'The FX to play when the tree topples',
		},
		'BounceFX': {
			name: 'BounceFX',
			type: IniTypes_t.FXLIST,
			description: 'The FX to play when the tree bounces',
		},
		'StumpName': {
			name: 'StumpName',
			type: 'string',
			description: 'The name of the stump',
		},
		'KillWhenFinishedToppling': {
			name: 'KillWhenFinishedToppling',
			type: 'boolean',
			description: 'Whether to kill the tree when it finishes toppling',	
		},
		'DoTopple': {
			name: 'DoTopple',
			type: 'boolean',
			description: 'Whether to topple the tree',
		},
		'InitialVelocityPercent': {
			name: 'InitialVelocityPercent',
			type: 'float',
			description: 'The initial velocity percent of the tree',
		},
		'InitialAccelPercent': {
			name: 'InitialAccelPercent',
			type: 'float',
			description: 'The initial acceleration percent of the tree',
		},
		'BounceVelocityPercent': {
			name: 'BounceVelocityPercent',
			type: 'float',
			description: 'The bounce velocity percent of the tree',
		},
		'MinimumToppleSpeed': {
			name: 'MinimumToppleSpeed',
			type: 'float',
			description: 'The minimum topple speed of the tree',
		},
		'SinkDistance': {
			name: 'SinkDistance',
			type: 'float',
			description: 'The sink distance of the tree',
		},
		'SinkTime': {
			name: 'SinkTime',
			type: 'float',
			description: 'The sink time of the tree',
		},
		'DoShadow': {
			name: 'DoShadow',
			type: 'boolean',
			description: 'Whether to do a shadow',
		}
	},
	[DrawModule_t.W3DPROPDRAW]: {},
};

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
