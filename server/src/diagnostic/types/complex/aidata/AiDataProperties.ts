import { PropertyDefinition } from '../../../handlers/interfaces/IPropertyDefinition';


// ==================
// === PROPERTIES ===
// ==================

export const AiDataPropertyMap: Map<string, PropertyDefinition> = new Map();
export const AiDataProperties: PropertyDefinition[] = [
	{
		name: 'StructureSeconds',
		type: 'float',
		description: 'AI tries to build a new structure every N seconds',
	},
	{
		name: 'TeamSeconds', 
		type: 'integer',
		description: 'AI tries to build a new team every N seconds',
	},
	{
		name: 'Wealthy',
		type: 'integer', 
		description: 'Number of resources for the AI to consider itself wealthy',
	},
	{
		name: 'Poor',
		type: 'integer',
		description: 'Number of resources for the AI to consider itself poor',
	},
	{
		name: 'StructuresWealthyRate',
		type: 'float',
		description: 'Rate modifier for structure building when wealthy (2=twice as fast)',
	},
	{
		name: 'StructuresPoorRate',
		type: 'float', 
		description: 'Rate modifier for structures when poor (0.5=half as fast)',
	},
	{
		name: 'TeamsWealthyRate',
		type: 'float',
		description: 'Rate modifier for teams building when wealthy (2=twice as fast)',
	},
	{
		name: 'TeamsPoorRate',
		type: 'float',
		description: 'Rate modifier for teams when poor (0.5=half as fast)',
	},
	{
		name: 'TeamResourcesToStart',
		type: 'float',
		description: 'Amount of resources required to start building a team (1.0=100%)',
	},
	{
		name: 'GuardInnerModifierAI',
		type: 'float',
		description: 'The radius modifier to vision which a guarding (AI Controlled) unit will aggressively attack',
	},
	{
		name: 'GuardOuterModifierAI',
		type: 'float',
		description: 'The radius modifier to vision which a guarding (AI Controlled) unit will chase after',
	},
	{
		name: 'GuardInnerModifierHuman',
		type: 'float',
		description: 'The radius modifier to vision which a guarding (Human Controlled) unit will aggressively attack',
	},
	{
		name: 'GuardOuterModifierHuman',
		type: 'float',
		description: 'The radius modifier to vision which a guarding (Human Controlled) unit will chase after',
	},
	{
		name: 'GuardChaseUnitsDuration',
		type: 'integer',
		description: 'The number of msec for which a guarding unit will chase attackers before giving up',
	},
	{
		name: 'GuardEnemyScanRate',
		type: 'integer',
		description: 'When actively guarding, how often to scan for enemies (msec)',
	},
	{
		name: 'GuardEnemyReturnScanRate',
		type: 'integer',
		description: 'When returning to "active" guarding (from pursuing someone), how often to scan for enemies (msec)',
	},
	{
		name: 'AlertRangeModifier',
		type: 'float',
		description: 'The adjustment applied when a unit is alert and doing various scans for enemies (AI units only)',
	},
	{
		name: 'AggressiveRangeModifier',
		type: 'float',
		description: 'The adjustment applied when a unit is aggressive and doing various scans for enemies (AI units only)',
	},
	{
		name: 'AttackPriorityDistanceModifier',
		type: 'float',
		description: 'The distance required to reduce attack priority by 1',
	},
	{
		name: 'MaxRecruitRadius',
		type: 'float',
		description: 'The maximum distance a unit will be from a unit that recruits it',
	},
	{
		name: 'SkirmishBaseDefenseExtraDistance',
		type: 'float',
		description: 'Instead of placing base defenses on the template edge, bump it this much farther out',
	},
	{
		name: 'ForceIdleMSEC',
		type: 'integer',
		description: 'The number of millisec a unit must be idle before looking for an enemy',
	},
	{
		name: 'ForceSkirmishAI',
		type: 'boolean',
		description: 'Use skirmish instead of solo AI',
	},
	{
		name: 'RotateSkirmishBases',
		type: 'boolean',
		description: 'If yes, rotate base layout so same side of base faces center of map',
	},
	{
		name: 'AttackUsesLineOfSight',
		type: 'boolean',
		description: 'If yes, attack for ALL UNITS (player and AI) uses line of sight',
	},
	{
		name: 'EnableRepulsors',
		type: 'boolean',
		description: 'If yes, KINDOF_CAN_BE_REPULSED will run from enemies & repulsors',
	},
	{
		name: 'RepulsedDistance',
		type: 'float',
		description: 'How far beyond vision range a repulsed civilian will run before stopping',
	},
	{
		name: 'WallHeight',
		type: 'integer',
		description: 'Height of the "Wall", made of KIND WALK_ON_TOP pieces',
	},
	{
		name: 'AttackIgnoreInsignificantBuildings',
		type: 'boolean',
		description: 'If yes, units will ignore enemy-owned buildings that are not faction buildings',
	},
	{
		name: 'SkirmishGroupFudgeDistance',
		type: 'float',
		description: 'Distance multiplied by number of units in group to determine if close enough to waypoint',
	},
	{
		name: 'MinInfantryForGroup',
		type: 'integer',
		description: 'Minimum number of infantry required to do group movement',
	},
	{
		name: 'MinVehiclesForGroup',
		type: 'integer',
		description: 'Minimum number of vehicles required to do group movement',
	},
	{
		name: 'MinDistanceForGroup',
		type: 'float',
		description: 'Minimum distance required to do group movement',
	},
	{
		name: 'DistanceRequiresGroup',
		type: 'float',
		description: 'Force group movement if moving at least this far',
	},
	{
		name: 'InfantryPathfindDiameter',
		type: 'integer',
		description: 'Number of pathfind cells wide group path is for infantry',
	},
	{
		name: 'VehiclePathfindDiameter',
		type: 'integer',
		description: 'Number of pathfind cells wide group path is for vehicles',
	},
	{
		name: 'SupplyCenterSafeRadius',
		type: 'float',
		description: 'Radius to scan for enemies to determine if a supply center is safe',
	},
	{
		name: 'RebuildDelayTimeSeconds',
		type: 'integer',
		description: 'Delay in seconds before attempting rebuild when a base building is destroyed or captured',
	},
	{
		name: 'AIDozerBoredRadiusModifier',
		type: 'float',
		description: 'Multiplier to dozer scan radius for repair & mine clearing',
	},
	{
		name: 'AICrushesInfantry',
		type: 'boolean',
		description: 'If yes, AI will attempt to crush infantry with vehicles',
	},
	{
		name: 'MaxRetaliationDistance',
		type: 'float',
		description: 'Maximum distance for retaliation chase - prevents chasing artillery',
	},
	{
		name: 'RetaliationFriendsRadius',
		type: 'float',
		description: 'Retaliator gathers allies within this distance & attacks',
	}
];

AiDataProperties.forEach(property => {
	AiDataPropertyMap.set(property.name, property);
});
