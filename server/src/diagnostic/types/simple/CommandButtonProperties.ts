import { DiagnosticSeverity } from 'vscode-languageserver';
import { PropertyDefinition } from '../../handlers/interfaces/IPropertyDefinition';
import { IniTypes_t } from '../IniType_t';
import { WeaponSlot_t } from '../PropertyTypes';

// =============
// === LISTS ===
// =============

export enum CommandButtonCommands_t {
	DOZER_CONSTRUCT = 'DOZER_CONSTRUCT',
	DOZER_CONSTRUCT_CANCEL = 'DOZER_CONSTRUCT_CANCEL',
	UNIT_BUILD = 'UNIT_BUILD',
	CANCEL_UNIT_BUILD = 'CANCEL_UNIT_BUILD',
	PLAYER_UPGRADE = 'PLAYER_UPGRADE',
	OBJECT_UPGRADE = 'OBJECT_UPGRADE',
	CANCEL_UPGRADE = 'CANCEL_UPGRADE',
	ATTACK_MOVE = 'ATTACK_MOVE',
	GUARD = 'GUARD',
	GUARD_WITHOUT_PURSUIT = 'GUARD_WITHOUT_PURSUIT',
	GUARD_FLYING_UNITS_ONLY = 'GUARD_FLYING_UNITS_ONLY',
	STOP = 'STOP',
	WAYPOINTS = 'WAYPOINTS',
	EXIT_CONTAINER = 'EXIT_CONTAINER',
	EVACUATE = 'EVACUATE',
	EXECUTE_RAILED_TRANSPORT = 'EXECUTE_RAILED_TRANSPORT',
	BEACON_DELETE = 'BEACON_DELETE',
	SET_RALLY_POINT = 'SET_RALLY_POINT',
	SELL = 'SELL',
	FIRE_WEAPON = 'FIRE_WEAPON',
	SPECIAL_POWER = 'SPECIAL_POWER',
	PURCHASE_SCIENCE = 'PURCHASE_SCIENCE',
	HACK_INTERNET = 'HACK_INTERNET',
	TOGGLE_OVERCHARGE = 'TOGGLE_OVERCHARGE',
	COMBATDROP = 'COMBATDROP',
	SWITCH_WEAPON = 'SWITCH_WEAPON',
	HIJACK_VEHICLE = 'HIJACK_VEHICLE',
	CONVERT_TO_CARBOMB = 'CONVERT_TO_CARBOMB',
	SABOTAGE_BUILDING = 'SABOTAGE_BUILDING',
	PLACE_BEACON = 'PLACE_BEACON',
	SPECIAL_POWER_FROM_SHORTCUT = 'SPECIAL_POWER_FROM_SHORTCUT',
	SPECIAL_POWER_CONSTRUCT = 'SPECIAL_POWER_CONSTRUCT',
	SPECIAL_POWER_CONSTRUCT_FROM_SHORTCUT = 'SPECIAL_POWER_CONSTRUCT_FROM_SHORTCUT',
	SELECT_ALL_UNITS_OF_TYPE = 'SELECT_ALL_UNITS_OF_TYPE'
}

export enum CommandButtonOptions_t {
	NEED_TARGET_ENEMY_OBJECT = 'NEED_TARGET_ENEMY_OBJECT',
	NEED_TARGET_NEUTRAL_OBJECT = 'NEED_TARGET_NEUTRAL_OBJECT',
	NEED_TARGET_ALLY_OBJECT = 'NEED_TARGET_ALLY_OBJECT',
	ALLOW_SHRUBBERY_TARGET = 'ALLOW_SHRUBBERY_TARGET',
	NEED_TARGET_POS = 'NEED_TARGET_POS',
	NEED_UPGRADE = 'NEED_UPGRADE',
	NEED_SPECIAL_POWER_SCIENCE = 'NEED_SPECIAL_POWER_SCIENCE',
	OK_FOR_MULTI_SELECT = 'OK_FOR_MULTI_SELECT',
	CONTEXTMODE_COMMAND = 'CONTEXTMODE_COMMAND',
	CHECK_LIKE = 'CHECK_LIKE',
	ALLOW_MINE_TARGET = 'ALLOW_MINE_TARGET',
	ATTACK_OBJECTS_POSITION = 'ATTACK_OBJECTS_POSITION',
	OPTION_ONE = 'OPTION_ONE',
	OPTION_TWO = 'OPTION_TWO',
	OPTION_THREE = 'OPTION_THREE',
	NOT_QUEUEABLE = 'NOT_QUEUEABLE',
	SINGLE_USE_COMMAND = 'SINGLE_USE_COMMAND',
	SCRIPT_ONLY = 'SCRIPT_ONLY',
	IGNORES_UNDERPOWERED = 'IGNORES_UNDERPOWERED',
	USES_MINE_CLEARING_WEAPONSET = 'USES_MINE_CLEARING_WEAPONSET',
	CAN_USE_WAYPOINTS = 'CAN_USE_WAYPOINTS',
	MUST_BE_STOPPED = 'MUST_BE_STOPPED'
}

export enum CommandButtonBorderTypes_t {
	NONE = 'NONE',
	BUILD = 'BUILD',
	UPGRADE = 'UPGRADE',
	ACTION = 'ACTION',
	SYSTEM = 'SYSTEM',
	COUNT = 'COUNT'
}

// ==================
// === PROPERTIES ===
// ==================

export const CommandButtonPropertyMap: Map<string, PropertyDefinition> = new Map();
export const CommandButtonProperties: PropertyDefinition[] = [
	{
		name: 'Command',
		type: 'string',
		description: 'The command of the command button',
		validValues: Object.values(CommandButtonCommands_t),
	},
	{
		name: 'Options',
		type: 'string',
		description: 'The options of the command button',
		validValues: Object.values(CommandButtonOptions_t),
		numberOfValues: [-1]
	},
	{
		name: 'SpecialPower',
		type: IniTypes_t.SPECIAL_POWER,
		ignoreCase: true,
		customWarningType: DiagnosticSeverity.Warning,
		description: 'The special power of the command button'
	},
	{
		name: 'Science',
		type: IniTypes_t.SCIENCE,
		ignoreCase: true,
		description: 'The science of the command button',
		numberOfValues: [-1]
	},
	{
		name: 'ButtonImage',
		type: IniTypes_t.MAPPED_IMAGE,
		ignoreCase: true,
		description: 'The image of the command button',
	},
	{
		name: 'ButtonBorderType',
		type: 'string',
		description: 'The border type of the command button',
		validValues: Object.values(CommandButtonBorderTypes_t),
	},
	{
		name: 'TextLabel',
		type: 'string',
		description: 'The text label of the command button',
	},
	{
		name: 'DescriptLabel',
		type: 'string',
		description: 'The description label of the command button',
	},
	{
		name: 'ConflictingLabel',
		type: 'string',
		description: 'The conflicting label of the command button',
	},
	{
		name: 'CursorName',
		type: 'string',
		description: 'The cursor name of the command button', //TODO: Add valid values
	},
	{
		name: 'RadiusCursorType',
		type: 'string',
		description: 'The radius cursor type of the command button',
	},
	{
		name: 'InvalidCursorName',
		type: 'string',
		description: 'The invalid cursor name of the command button',
	},
	{
		name: 'UnitSpecificSound',
		type: IniTypes_t.AUDIO_EVENT,
		ignoreCase: true,
		description: 'The unit specific sound of the command button',
	},
	{
		name: 'MaxShotsToFire',
		type: 'integer',
		description: 'The max shots to fire of the command button',
	},
	{
		name: 'PurchaseLabel',
		type: 'string',
		description: 'The purchase label of the command button',
	},
	{
		name: 'WeaponSlot',
		type: 'string',
		description: 'The weapon slot of the command button',
		validValues: Object.values(WeaponSlot_t),
		numberOfValues: [-1]
	},
	{
		name: 'Upgrade',
		type: IniTypes_t.UPGRADE,
		ignoreCase: true,
		description: 'The upgrade of the command button',
	},
	{
		name: 'Object',
		type: IniTypes_t.OBJECT,
		ignoreCase: true,
		description: 'The object of the command button',
	}
];

CommandButtonProperties.forEach(property => {
	CommandButtonPropertyMap.set(property.name, property);
});
