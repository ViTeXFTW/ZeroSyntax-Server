
export enum ObjectSetTypes_t {
    WEAPONSET = "WeaponSet",
	ARMORSET = "ArmorSet",
	PREREQUISITES = "Prerequisites",
	UNITSPECIFICSOUNDS = "UnitSpecificSounds",
	UNITSPECIFICFX = "UnitSpecificFX",
}

export enum ObjectModuleTypeNames_t {
    DRAW = "Draw",
	BODY = "Body",
	BEHAVIOR = "Behavior",
	CLIENT = "ClientUpdate",
}

export enum DrawModulePropertyBlockTypes_t {
	DEFAULTCONDITIONSTATE = "DefaultConditionState",
}

export enum DrawModuleAssignmentBlockTypes_t {
	CONDITIONSTATE = "ConditionState",
	TRANSITIONSTATE = "TransitionState",
}

export enum ObjectConditionTypes_t {
	USING_ABILITY = "USING_ABILITY",
	RIDERS_ATTACKING = "RIDERS_ATTACKING",
	TAKING_DAMAGE = "TAKING_DAMAGE",
	NO_BLACK_MARKET = "NO_BLACK_MARKET",
	FIRING_TERTIARY = "FIRING_TERTIARY",
	FIRING_SECONDARY = "FIRING_SECONDARY",
	FIRING_PRIMARY = "FIRING_PRIMARY",
	MOVING = "MOVING",
	ATTACKING = "ATTACKING",
	NONE = "NONE"
}
