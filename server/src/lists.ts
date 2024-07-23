

export class ReservedKeywords {

	private static readonly allowedObjectProperties: string[] = [
		"RadarPriority",
		"KindOf",
		"SelectPortrait",
		"ButtonImage",
		"UpgradeCameo1",
		"UpgradeCameo2",
		"UpgradeCameo3",
		"UpgradeCameo4",
		"UpgradeCameo5",
		"DisplayName",
		"Side",
		"EditorSorting",
		"TransportSlotCount",
		"BuildCost",
		"BuildTime",
		"VisionRange",
		"ShroudClearingRange",
		"CrusherLevel",
		"CrushableLevel",
		"CommandSet",
		"VoiceSelect",
		"VoiceMove",
		"VoiceEnter",
		"VoiceTaskComplete",
		"SoundMoveStart",
		"SoundMoveStartDamaged",
		"Locomotor",
		"Geometry",
		"GeometryMajorRadius",
		"GeometryMinorRadius",
		"GeometryHeight",
		"GeometryIsSmall",
		"Shadow",
		"ShadowSizeX"
	];

	public getAllowedObjectProperties(): string[] {
		return ReservedKeywords.allowedObjectProperties;
	}

	private static readonly allowedAddModuleProperties: string[] = [
		"Locomotor",
	];

	public getAllowedAddModuleProperties(): string[] {
		return ReservedKeywords.allowedAddModuleProperties;
	}

	private static readonly allowedLocomotorProperties: string[] = [
		"SET_NORMAL",
		"SET_PANIC",
		"SET_NORMAL_UPGRADED",
		"SET_SUPERSONIC",
		"SET_SLUGGISH",
		"SET_TAXIING",
		"SET_FREEFALL",
		"SET_WANDER"
	];

	public getAllowedLocomotorProperties(): string[] {
		return ReservedKeywords.allowedLocomotorProperties;
	}

	private static readonly allowedModelDraws: string[] = [
		"W3DDebrisDraw",
		"W3DDefaultDraw",
		"W3DDependencyModelDraw",
		"W3DModelDraw",
		"W3DOverlordTankDraw",
		"W3DOverlordAircraftDraw",
		"W3DOverlordTruckDraw",
		"W3DLaserDraw",
		"W3DPoliceCarDraw",
		"W3DTreeDraw",
		"W3DPropDraw",
		"W3DProjectileStreamDraw",
		"W3DRopeDraw",
		"W3DScienceModelDraw",
		"W3DSupplyDraw",
		"W3DTankDraw",
		"W3DTankTruckDraw",
		"W3DTracerDraw",
		"W3DTruckDraw"
	];

	public getAllowedModelDraws(): string[] {
		return ReservedKeywords.allowedModelDraws;
	}

	private static readonly allowedSingleModelDrawProperties: string[] = [
		"TrackMarks",
		"Dust",
		"DirtSpray",
		"PowerslideSpray",
		"AliasConditionState",
		"TransitionState",
		"IgnoreConditionStates",
		"AnimationRequirePower",
		"MinLODRequired",
		"OkToChangeModelColor",
		"ReceivesDynamicLights",
		"ParticlesAttachedToAnimatedBones",
		"ProjectileBoneFeedbackEnabledSlots",
		"AttachToBoneInAnotherModule",
		"InitialRecoilSpeed",
		"MaxRecoilDistance",
		"RecoilSettleSpeed",
		"RecoilDamping"
	];

	public getAllowedSingleModelDrawProperties(): string[] {
		return ReservedKeywords.allowedSingleModelDrawProperties;
	}

	private static readonly allowedMultiModelDrawProperties: string[] = [
		"ExtraPublicBone"
	];

	public getAllowedMultiModelDrawProperties(): string[] {
		return ReservedKeywords.allowedMultiModelDrawProperties;
	}

	private static readonly allowedTankDrawProperties: string[] = [
		"TreadDriveSpeedFraction",
		"TreadPivotSpeedFraction",
		"TreadAnimationRate",
		"TreadDebrisLeft",
		"TreadDebrisRight"
	];

	public getAllowedTankDrawProperties(): string[] {
		return ReservedKeywords.allowedTankDrawProperties.concat(this.getAllowedSingleModelDrawProperties());

	}

	private static readonly allowedTruckDrawProperties: string[] = [
		"RotationDamping",
		"TrailerRotationMultiplier",
		"TrailerBone",
		"CabRotationMultiplier",
		"CabBone",
		"PowerslideRotationAddition",
		"TireRotationMultiplier",
		"MidRightMidTireBone",
		"MidLeftMidTireBone",
		"MidRightRearTireBone",
		"MidLeftRearTireBone",
		"MidRightFrontTireBone",
		"MidLeftFrontTireBone",
		"RightRearTireBone",
		"LeftRearTireBone",
		"RightFrontTireBone",
		"LeftFrontTireBone",
		"PowerslideSpray",
		"DirtSpray",
		"Dust"
	];
	
	public getAllowedTruckDrawProperties(): string[] {
		return ReservedKeywords.allowedTruckDrawProperties.concat(this.getAllowedSingleModelDrawProperties());
	}

	public getAllowedTankTruckDrawProperties(): string[] {
		return ReservedKeywords.allowedTruckDrawProperties.concat(this.getAllowedTankDrawProperties());
	}

	private static readonly allowedTreeDrawProperties: string[] = [
		"ModelName",
		"TextureName",
		"MinimumToppleSpeed",
		"DoTopple",
		"DoShadow",
		"ToppleFX",
		"BounceFX",
		"KillWhenFinishedToppling",
		"SinkDistance",
		"SinkTime",
		"DarkeningFactor",
		"MoveInwardTime",
		"MoveOutwardTime",
		"MoveOutwardDistanceFactor"
	];

	public getAllowedTreesDrawProperties(): string[] {
		return ReservedKeywords.allowedTreeDrawProperties;
	}

	private static readonly allowedProjectileStreamDrawProperties: string[] = [
		"Texture",
		"Width",
		"TileFactor",
		"ScrollRate",
		"MaxSegments"
	];

	public getAllowedProjectileStreamDrawProperties(): string[] {
		return ReservedKeywords.allowedProjectileStreamDrawProperties;
	}

	private static readonly allowedLaserDrawProperties: string[] = [
		"Texture",
		"NumBeams",
		"InnerBeamWidth",
		"OuterBeamWidth",
		"InnerColor",
		"OuterColor",
		"MaxIntensityLifetime",
		"FadeLifetime",
		"Tile",
		"Segments",
		"SegmentOverlapRatio",
		"ArcHeight",
		"TilingScalar"
	];

	public getAllowedLaserDrawProperties(): string[] {
		return ReservedKeywords.allowedLaserDrawProperties;
	}

	private static readonly allowedSingleConditionProperties: string[] = [
		"Model",
		"WeaponHideShowBone",
		"AnimationSpeedFactorRange",
		"AnimationMode",
		"TransitionKey",
		"Flags",
		"WaitForStateToFinishIfPossible",
		"Turret",
		"TurretArtAngle",
		"TurretPitch",
		"TurretArtPitch",
		"AltTurret",
		"AltTurretArtAngle",
		"AltTurretPitch",
		"AltTurretArtPitch",
		"ShowSubObject",
		"HideSubObject",
	];

	public getAllowedSingleConditionProperties(): string[] {
		
		return ReservedKeywords.allowedSingleConditionProperties;
	}

	private static readonly allowedMultiConditionProperties: string[] = [
		"WeaponRecoilBone",
		"WeaponFireFXBone",
		"WeaponMuzzleFlash",
		"WeaponLaunchBone",
		"Animation",
		"IdleAnimation",
		"ParticleSysBone"
	];

	public getAllowedMultiConditionProperties(): string[] {
		return ReservedKeywords.allowedMultiConditionProperties;
	}

	private static readonly allowedConditionStates: string[] = [
		"NONE",
		"USER_1",
		"USER_2",
		"JAMMED",
		"ATTACKING",
		"WEAPONSET_CRATEUPGRADE_ONE",
		"WEAPONSET_CRATEUPGRADE_TWO",
		"ARMORSET_CRATEUPGRADE_TWO",
		"ARMORSET_CRATEUPGRADE_ONE",
		"PREORDER",
		"STUNNED",
		"STUNNED_FLAILING",
		"EXPLODED_BOUNCING",
		"EXPLODED_FLAILING",
		"CAPTURED",
		"RAISING_FLAG",
		"CONTINUOUS_FIRE_SLOW",
		"CONTINUOUS_FIRE_FAST",
		"CONTINUOUS_FIRE_MEAN",
		"SPECIAL_CHEERING",
		"ARMED",
		"RAPELLING",
		"PARACHUTING",
		"CLIMBING",
		"SPLATTED",
		"BURNED",
		"AFLAME",
		"SMOLDERING",
		"POWER_PLANT_UPGRADING",
		"POWER_PLANT_UPGRADED",
		"OVER_WATER",
		"MOVING",
		"DEPLOYED",
		"UNPACKING",
		"PACKING",
		"JETEXHAUST",
		"JETAFTERBURNER",
		"LOADED",
		"CARRYING",
		"DOCKING_ENDING",
		"DOCKING_ACTIVE",
		"DOCKING_BEGINNING",
		"DOCKING",
		"PANICKING",
		"RADAR_UPGRADED",
		"RADAR_EXTENDED",
		"CONSTRUCTION_COMPLETE",
		"ACTIVELY_CONSTRUCTING",
		"ACTIVELY_BEING_CONSTRUCTED",
		"PARTIALLY_CONSTRUCTED",
		"AWAITING_CONSTRUCTION",
		"DYING",
		"PRONE",
		"FREEFALL",
		"POST_COLLAPSE",
		"TOPPLED",
		"TURRET_ROTATE",
		"RELOADING_A",
		"BETWEEN_FIRING_SHOTS_A",
		"FIRING_A",
		"PREATTACK_A",
		"USING_WEAPON_A",
		"RELOADING_B",
		"BETWEEN_FIRING_SHOTS_B",
		"FIRING_B",
		"PREATTACK_B",
		"USING_WEAPON_B",
		"RELOADING_C",
		"BETWEEN_FIRING_SHOTS_C",
		"FIRING_C",
		"PREATTACK_C",
		"USING_WEAPON_C",
		"DOOR_4_WAITING_TO_CLOSE",
		"DOOR_4_WAITING_OPEN",
		"DOOR_4_CLOSING",
		"DOOR_4_OPENING",
		"DOOR_3_WAITING_TO_CLOSE",
		"DOOR_3_WAITING_OPEN",
		"DOOR_3_CLOSING",
		"DOOR_3_OPENING",
		"DOOR_2_WAITING_TO_CLOSE",
		"DOOR_2_WAITING_OPEN",
		"DOOR_2_CLOSING",
		"DOOR_2_OPENING",
		"DOOR_1_WAITING_TO_CLOSE",
		"DOOR_1_WAITING_OPEN",
		"DOOR_1_CLOSING",
		"DOOR_1_OPENING",
		"WEAPONSET_PLAYER_UPGRADE",
		"WEAPONSET_HERO",
		"WEAPONSET_ELITE",
		"WEAPONSET_VETERAN",
		"ENEMYNEAR",
		"REALLYDAMAGED",
		"RUBBLE",
		"DAMAGED",
		"SNOW",
		"SOLD",
		"DISGUISED",
		"NIGHT",
		"SPECIAL_DAMAGED",
		"BACKCRUSHED",
		"FRONTCRUSHED",
		"SECOND_LIFE",
		"RIDER1",
		"RIDER2",
		"RIDER3",
		"RIDER4",
		"RIDER5",
		"RIDER6",
		"RIDER7",
		"RIDER8",
		"PRISTINE",
		"RIGHT_TO_CENTER",
		"CENTER_TO_RIGHT",
		"LEFT_TO_CENTER",
		"CENTER_TO_LEFT"
	];

	public getAllowedConditionStates(): string[] {
		return ReservedKeywords.allowedConditionStates;
	}
}