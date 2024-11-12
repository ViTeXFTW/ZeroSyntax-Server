import { PropertyDefinition } from '../../properties';
import { IniTypes_t } from '../IniType_t';

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
		name: 'Special Power',
		type: IniTypes_t.SPECIAL_POWER,
		description: 'The special power of the command button'
	},
	{
		name: 'Science',
		type: IniTypes_t.SCIENCE,
		description: 'The science of the command button',
		numberOfValues: [-1]
	},
	{
		name: 'Button Image',
		type: IniTypes_t.MAPPED_IMAGE,
		description: 'The image of the command button',
	},
	{
		name: 'Button Border Type',
		type: 'string',
		description: 'The border type of the command button',
		validValues: Object.values(CommandButtonBorderTypes_t),
	},
	{
		name: 'Text Label',
		type: 'string',
		description: 'The text label of the command button',
	},
	{
		name: 'Description Label',
		type: 'string',
		description: 'The description label of the command button',
	},
	{
		name: 'Conflicting Label',
		type: 'string',
		description: 'The conflicting label of the command button',
	},
	{
		name: 'Cursor Name',
		type: 'string',
		description: 'The cursor name of the command button', //TODO: Add valid values
	},
	{
		name: 'Radius Cursor Type',
		type: 'string',
		description: 'The radius cursor type of the command button',
	},
	{
		name: 'Invalid Cursor Name',
		type: 'string',
		description: 'The invalid cursor name of the command button',
	},
	{
		name: 'Unit Specific Sound',
		type: IniTypes_t.AUDIO_EVENT,
		description: 'The unit specific sound of the command button',
	},
	{
		name: 'Max Shots To Fire',
		type: 'integer',
		description: 'The max shots to fire of the command button',
	},
	{
		name: 'Purchase Label',
		type: 'string',
		description: 'The purchase label of the command button',
	},
]

CommandButtonProperties.forEach(property => {
	CommandButtonPropertyMap.set(property.name, property);
});
