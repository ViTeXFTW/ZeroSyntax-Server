import { RBTree } from 'bintrees';
import { BehaviorModule_t } from './BehaviorModule_t';
import { PropertyDefinition } from '../../../properties';
import { IniTypes_t } from '../../IniType_t';
import { AutoAcquireEnemiesWhenIdle_t, ChangeType_t, ConditionStateFlags_t, CreateLocation_t, DeathType_t, kindOfs_t, Locomotor_types_t, Status_t, TimeStamp_t, VeterancyTypes_t, WeaponSetCondition_t, WeaponSlot_t } from '../../PropertyTypes';
import { DamageTypes_t } from '../../simple/DamageFXProperties';
import { BodyModule_t } from '../bodyModule/BodyModule_t';
import { allowedConditionStates, conditionStates, WeaponBonuses } from '../../../../utils/lists';


export const BehaviorModuleTrees: {[key in BehaviorModule_t]: RBTree<string>} = {
	[BehaviorModule_t.ANIMATION_STEERING_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.ACTIVE_SHROUD_UPGRADE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.AI_UPDATE_INTERFACE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.ARMOR_UPGRADE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.ASSULT_TRANSPORT_AI_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.ASSISTED_TARGETING_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.AUTO_DEPOSIT_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.AUTO_FIND_HEALING_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.AUTO_HEAL_BEHAVIOR]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.BATTLE_BUS_SLOW_DEATH_BEHAVIOR]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.BUNKER_BUSTER_BEHAVIOR]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.BAIKONUR_LAUNCH_POWER]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.BASE_REGENERATE_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.BATTLE_PLAN_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.BONE_FX_DAMAGE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.BONE_FX_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.BRIDGE_BEHAVIOR]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.BRIDGE_SCAFFOLD_BEHAVIOR]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.BRIDGE_TOWER_BEHAVIOR]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.CASH_BOUNTY_POWER]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.CASH_HACK_SPECIAL_POWER]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.CAVE_CONTAIN]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.COUNTERMEASURES_BEHAVIOR]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.CHECKPOINT_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.CHINOOK_AI_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.CLEANUP_AREA_POWER]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.CLEANUP_HAZARD_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.COMMAND_SET_UPGRADE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.COMMAND_BUTTON_HUNT_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.CONVERT_TO_CAR_BOMB_CRATE_COLLIDE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.CONVERT_TO_HIJACKED_VEHICLE_CRATE_COLLIDE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.COST_MODIFIER_UPGRADE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.CREATE_CRATE_DIE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.CREATE_OBJECT_DIE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.CRUSH_DIE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.DAM_DIE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.DEFECTOR_SPECIAL_POWER]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.DEFAULT_PRODUCTION_EXIT_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.DELAYED_UPGRADE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.DELAYED_WEAPON_SET_UPGRADE_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.DELETION_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.DELIVER_PAYLOAD_AI_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.DEMO_TRAP_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.DEPLOY_STYLE_AI_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.DESTROY_DIE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.DOZER_AI_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.DUMB_PROJECTILE_BEHAVIOR]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.DYNAMIC_GEOMETRY_INFO_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.DYNAMIC_SHROUD_CLEARING_RANGE_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.EJECT_PILOT_DIE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.EMP_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.ENEMY_NEAR_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.EXPERIENCE_SCALAR_UPGRADE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.FIRE_SPREAD_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.FIRESTORM_DYNAMIC_GEOMETRY_INFO_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.FIRE_OCL_AFTER_WEAPON_COOLDOWN_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.FIRE_WEAPON_COLLIDE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.FIRE_WEAPON_WHEN_DAMAGED_BEHAVIOR]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.FIRE_WEAPON_WHEN_DEAD_BEHAVIOR]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.FIRE_WEAPON_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.FIRE_WEAPON_POWER]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.FLIGHT_DECK_BEHAVIOR]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.FLAMMABLE_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.FLOAT_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.FX_LIST_DIE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.GARRISON_CONTAIN]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.GRANT_STEALTH_BEHAVIOR]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.GRANT_UPGRADE_CREATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.GRANT_SCIENCE_UPGRADE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.GENERATE_MINEFIELD_BEHAVIOR]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.INTERNET_HACK_CONTAIN]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.HACK_INTERNET_AI_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.HEAL_CRATE_COLLIDE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.HEAL_CONTAIN]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.HEIGHT_DIE_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.HELICOPTER_SLOW_DEATH_BEHAVIOR]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.HIJACKER_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.HORDE_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.HELIX_CONTAIN]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.INSTANT_DEATH_BEHAVIOR]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.JET_AI_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.JET_SLOW_DEATH_BEHAVIOR]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.KEEP_OBJECT_DIE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.LIFETIME_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.LOCK_WEAPON_CREATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.LOCOMOTOR_SET_UPGRADE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.LEAFLET_DROP_BEHAVIOR]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.MAX_HEALTH_UPGRADE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.MINEFIELD_BEHAVIOR]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.MISSILE_AI_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.MISSILE_LAUNCHER_BUILDING_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.MOB_MEMBER_SLAVED_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.MOB_NEXUS_CONTAIN]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.MONEY_CRATE_COLLIDE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.MODEL_CONDITION_UPGRADE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.NEUTRON_MISSILE_SLOW_DEATH_BEHAVIOR]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.NEUTRON_BLAST_BEHAVIOR]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.NEUTRON_MISSILE_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.OBJECT_CREATION_UPGRADE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.OCL_SPECIAL_POWER]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.OCL_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.OPEN_CONTAIN]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.OVERCHARGE_BEHAVIOR]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.OVERLORD_CONTAIN]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.PARKING_PLACE_BEHAVIOR]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.PASSENGERS_FIRE_UPGRADE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.PARACHUTE_CONTAIN]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.PARTICLE_UPLINK_CANNON_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.PHYSICS_BEHAVIOR]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.PILOT_FIND_VEHICLE_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.POINT_DEFENSE_LASER_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.POISONED_BEHAVIOR]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.POWER_PLANT_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.POWER_PLANT_UPGRADE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.PREORDER_CREATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.PRODUCTION_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.PROJECTILE_STREAM_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.PRONE_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.PROPAGANDA_TOWER_BEHAVIOR]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.QUEUE_PRODUCTION_EXIT_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.RADAR_UPGRADE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.RADAR_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.RADIUS_DECAL_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.RAILED_TRANSPORT_AI_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.RAILED_TRANSPORT_CONTAIN]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.RAILED_TRANSPORT_DOCK_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.RAILROAD_BEHAVIOR]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.REPLACE_OBJECT_UPGRADE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.REBUILD_HOLE_BEHAVIOR]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.REBUILD_HOLE_EXPOSE_DIE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.REPAIR_DOCK_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.RIDER_CHANGE_CONTAIN]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.SALVAGE_CRATE_COLLIDE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.SABOTAGE_POWER_PLANT_CRATE_COLLIDE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.SABOTAGE_SUPPLY_DROPZONE_CRATE_COLLIDE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.SABOTAGE_SUPERWEAPON_CRATE_COLLIDE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.SABOTAGE_COMMAND_CENTER_CRATE_COLLIDE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.SABOTAGE_SUPPLY_CENTER_CRATE_COLLIDE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.SABOTAGE_MILITARY_FACTORY_CRATE_COLLIDE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.SABOTAGE_FAKE_BUILDING_CRATE_COLLIDE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.SABOTAGE_INTERNET_CENTER_CRATE_COLLIDE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.SHROUD_CRATE_COLLIDE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.SLAVED_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.SLOW_DEATH_BEHAVIOR]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.SPAWN_BEHAVIOR]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.SPAWN_POINT_PRODUCTION_EXIT_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.SPECIAL_ABILITY]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.SPECIAL_ABILITY_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.SPECIAL_POWER_CREATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.SPECIAL_POWER_COMPLETION_DIE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.SPECTRE_GUNSHIP_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.SPECTRE_GUNSHIP_DEPLOYMENT_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.SPY_VISION_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.SPY_VISION_SPECIAL_POWER]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.SQUISH_COLLIDE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.STATUS_BITS_UPGRADE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.SMART_BOMB_TARGET_HOMING_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.STEALTH_DETECTOR_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.STEALTH_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.STEALTH_UPGRADE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.STICKY_BOMB_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.STRUCTURE_COLLAPSE_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.STRUCTURE_TOPPLE_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.SUB_OBJECTS_UPGRADE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.SUPPLY_CENTER_CREATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.SUPPLY_CENTER_DOCK_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.SUPPLY_CENTER_PRODUCTION_EXIT_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.SUPPLY_TRUCK_AI_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.SUPPLY_WAREHOUSE_CREATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.SUPPLY_WAREHOUSE_CRIPPLE_BEHAVIOR]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.SUPPLY_WAREHOUSE_DOCK_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.TECH_BUILDING_BEHAVIOR]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.TENSIL_FORMATION_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.TOPPLE_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.TRANSITION_DAMAGE_FX]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.TRANSPORT_AI_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.TRANSPORT_CONTAIN]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.TUNNEL_CONTAIN]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.UNIT_CRATE_COLLIDE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.UNPAUSE_SPECIAL_POWER_UPGRADE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.UPGRADE_DIE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.VETERANCY_GAIN_CREATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.VETERANCY_CRATE_COLLIDE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.WANDER_AI_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.WAVE_GUIDE_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.WEAPON_BONUS_UPGRADE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.WEAPON_BONUS_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.WEAPON_SET_UPGRADE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.WORKER_AI_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b))
};

const baseUpgradeProperties: {[key: string]: PropertyDefinition} = {
	'TriggeredBy': {
		name: 'TriggeredBy',
		type: IniTypes_t.UPGRADE,
		description: 'The upgrade that triggers this behavior'
	},
	'ConflictsWith': {
		name: 'ConflictsWith',
		type: IniTypes_t.UPGRADE,
		description: 'The upgrade that conflicts with this upgrade'
	},
	'RequiresAllTriggers': {
		name: 'RequiresAllTriggers',
		type: 'boolean',
		description: 'Whether all triggers must be met for this upgrade to be triggered'
	},
	'FXListUpgrade': {
		name: 'FXListUpgrade',
		type: IniTypes_t.FXLIST,
		description: 'The FXList to use when this upgrade is triggered'
	}
};

const baseAiUpdateProperties: {[key: string]: PropertyDefinition} = {
	'AutoAcquireEnemiesWhenIdle': {
		name: 'AutoAcquireEnemiesWhenIdle',
		type: Object.values(AutoAcquireEnemiesWhenIdle_t),
		description: 'Whether the AI should automatically acquire enemies when it is idle'
	},
	'MoodAttackCheckRate': {
		name: 'MoodAttackCheckRate',
		type: 'integer',
		description: 'The rate at which the AI should check for enemies'
	},
	'ForbidPlayerCommands': {
		name: 'ForbidPlayerCommands',
		type: 'boolean',
		description: 'Whether the AI should forbid player commands'
	},
	'TurretsLinked': {
		name: 'TurretsLinked',
		type: 'boolean',
		description: 'Whether the AI should link turrets'
	}
};

export const baseTurretProperties: {[key: string]: PropertyDefinition} = {
	'ControlledWeaponSlots': {
		name: 'ControlledWeaponSlots',
		type: 'string',
		description: 'The weapon slots that the turret controls',
		validValues: Object.values(WeaponSlot_t)
	},
	'TurretTurnRate': {
		name: 'TurretTurnRate',
		type: 'integer',
		description: 'The rate at which the turret turns'
	},
	'TurretPitchRate': {
		name: 'TurretPitchRate',
		type: 'integer',
		description: 'The rate at which the turret pitches'
	},
	'NaturalTurretAngle': {
		name: 'NaturalTurretAngle',
		type: 'integer',
		description: 'The angle at which the turret naturally points'
	},
	'NaturalTurretPitch': {
		name: 'NaturalTurretPitch',
		type: 'integer',
		description: 'The pitch at which the turret naturally points'
	},
	'FirePitch': {
		name: 'FirePitch',
		type: 'integer',
		description: 'The pitch at which the turret fires'
	},
	'MinPhysicalPitch': {
		name: 'MinPhysicalPitch',
		type: 'integer',
		description: 'The minimum pitch at which the turret can physically point'
	},
	'GroundUnitPitch': {
		name: 'GroundUnitPitch',
		type: 'integer',
		description: 'The pitch at which the turret points when it is on the ground'
	},
	'TurretFireAngleSweep': {
		name: 'TurretFireAngleSweep',
		type: ['string', 'integer'],
		description: 'The angle sweep of the turret when it is firing',
		validValues: [Object.values(WeaponSlot_t), null]
	},
	'TurretSweepSpeedModifier': {
		name: 'TurretSweepSpeedModifier',
		type: ['string', 'float'],
		description: 'The speed modifier of the turret when it is sweeping',
		validValues: [Object.values(WeaponSlot_t), null]
	},
	'AllowsPitch': {
		name: 'AllowsPitch',
		type: 'boolean',
		description: 'Whether the turret allows pitch'
	},
	'MinIdleScanAngle': {
		name: 'MinIdleScanAngle',
		type: 'integer',
		description: 'The minimum angle at which the turret can scan'
	},
	'MaxIdleScanAngle': {
		name: 'MaxIdleScanAngle',
		type: 'integer',
		description: 'The maximum angle at which the turret can scan'
	},
	'MinIdleScanInterval': {
		name: 'MinIdleScanInterval',
		type: 'integer',
		description: 'The minimum interval at which the turret can scan'
	},
	'MaxIdleScanInterval': {
		name: 'MaxIdleScanInterval',
		type: 'integer',
		description: 'The maximum interval at which the turret can scan'
	},
	'RecenterTime': {
		name: 'RecenterTime',
		type: 'integer',
		description: 'The time it takes for the turret to recenter'
	},
	'InitiallyDisabled': {
		name: 'InitiallyDisabled',
		type: 'boolean',
		description: 'Whether the turret is initially disabled'
	},
	'FiresWhileTurning': {
		name: 'FiresWhileTurning',
		type: 'boolean',
		description: 'Whether the turret fires while turning'
	}
};

export const crateCollideProoperties: {[key: string]: PropertyDefinition} = {
	'RequiredKindOf': {
		name: 'RequiredKindOf',
		type: 'string',
		description: 'The kind of required',
		validValues: Object.values(kindOfs_t)
	},
	'ForbiddenKindOf': {
		name: 'ForbiddenKindOf',
		type: 'string',
		description: 'The kind of forbidden',
		validValues: Object.values(kindOfs_t)
	},
	'ForbidOwnerPlayer': {
		name: 'ForbidOwnerPlayer',
		type: 'boolean',
		description: 'Whether the owner player is forbidden'
	},
	'HumanOnly': {
		name: 'HumanOnly',
		type: 'boolean',
		description: 'Whether the crate is human only'
	},
	'BuildingPickup': {
		name: 'BuildingPickup',
		type: 'boolean',
		description: 'Whether the crate can be picked up by a building'
	},
	'PickupScience': {
		name: 'PickupScience',
		type: IniTypes_t.SCIENCE,
		description: 'The science to pickup'
	},
	'ExecuteFX': {
		name: 'ExecuteFX',
		type: IniTypes_t.FXLIST,
		description: 'The fx to execute'
	},
	'ExecuteAnimation': {
		name: 'ExecuteAnimation',
		type: IniTypes_t.ANIMATION,
		description: 'The animation to execute'
	},
	'ExecuteAnimationTime': {
		name: 'ExecuteAnimationTime',
		type: 'float',
		description: 'The time of the execute animation'
	},
	'ExecuteAnimationZRise': {
		name: 'ExecuteAnimationZRise',
		type: 'integer',
		description: 'The z rise of the execute animation'
	},
	'ExecuteAnimationFades': {
		name: 'ExecuteAnimationFades',
		type: 'boolean',
		description: 'Whether the execute animation fades'
	}
};

export const BehaviorModuleProperties: {[key in BehaviorModule_t]: {[key: string]: PropertyDefinition}} = {
	[BehaviorModule_t.ANIMATION_STEERING_UPDATE]: {
		'MinTransitionTime': {
			name: 'MinTransitionTime',
			type: 'integer',
			description: 'The minimum time to transition to the next animation'
		}
	},
	[BehaviorModule_t.ACTIVE_SHROUD_UPGRADE]: {
		...baseUpgradeProperties,
		'NewShroudRange': {
			name: 'NewShroudRange',
			type: 'integer',
			description: 'The new shroud range'
		}
	},
	[BehaviorModule_t.AI_UPDATE_INTERFACE]: {
		...baseAiUpdateProperties,
	},
	[BehaviorModule_t.ARMOR_UPGRADE]: {
		...baseUpgradeProperties,
	},
	[BehaviorModule_t.ASSULT_TRANSPORT_AI_UPDATE]: {
		...baseAiUpdateProperties,
		'MembersGetHealedAtLifeRatio': {
			name: 'MembersGetHealedAtLifeRatio',
			type: 'float',
			description: 'The ratio of life at which members get healed'
		},
		'ClearRangeRequiredToContinueAttackMove': {
			name: 'ClearRangeRequiredToContinueAttackMove',
			type: 'integer',
			description: 'The range required to continue attack move'
		}
	},
	[BehaviorModule_t.ASSISTED_TARGETING_UPDATE]: {
		'AssistingClipSize': {
			name: 'AssistingClipSize',
			type: 'integer',
			description: 'The clip size of the assisting weapon'
		},
		'AssistingWeaponSlot': {
			name: 'AssistingWeaponSlot',
			type: Object.values(WeaponSlot_t),
			description: 'The weapon slot of the assisting weapon'
		},
		'LaserFromAssisted': {
			name: 'LaserFromAssisted',
			type: IniTypes_t.OBJECT,
			description: 'Whether the laser is from the assisting weapon'
		},
		'LaserToTarget': {
			name: 'LaserToTarget',
			type: IniTypes_t.OBJECT,
			description: 'Whether the laser is to the target'
		}
	},
	[BehaviorModule_t.AUTO_DEPOSIT_UPDATE]: {
		'ActualMoney': {
			name: 'ActualMoney',
			type: 'boolean',
			description: 'If set to No, This will not give you any money bonus. Instead, the "$" that appears above is used for props only'
		},
		'DepositTiming': {
			name: 'DepositTiming',
			type: 'integer',
			description: 'The timing of the deposit'
		},
		'DepositAmount': {
			name: 'DepositAmount',
			type: 'integer',
			description: 'The amount of money to deposit'
		},
		'InitialCaptureBonus': {
			name: 'InitialCaptureBonus',
			type: 'integer',
			description: 'The initial capture bonus'
		},
		'UpgradedBoost': {
			name: 'UpgradedBoost',
			type: ['string', 'integer'],
			description: 'The upgraded boost',
			modifier: ['UpgradeType:', 'Boost:'],
			numberOfValues: [2]
		}
	},
	[BehaviorModule_t.AUTO_FIND_HEALING_UPDATE]: {
		'ScanRate': {
			name: 'ScanRate',
			type: 'integer',
			description: 'The scan rate'
		},
		'ScanRange': {
			name: 'ScanRange',
			type: 'integer',
			description: 'The scan range'
		},
		'NeverHeal': {
			name: 'NeverHeal',
			type: 'float',
			description: 'The ratio of life at which the AI never heals'
		},
		'AlwaysHeal': {
			name: 'AlwaysHeal',
			type: 'float',
			description: 'The ratio of life at which the AI always heals'
		}
	},
	[BehaviorModule_t.AUTO_HEAL_BEHAVIOR]: {
		...baseUpgradeProperties,
		'HealingAmount': {
			name: 'HealingAmount',
			type: 'integer',
			description: 'The amount of health to heal'
		},
		'HealingDelay': {
			name: 'HealingDelay',
			type: 'integer',
			description: 'The delay between healings'
		},
		'StartHealingDelay': {
			name: 'StartHealingDelay',
			type: 'integer',
			description: 'The delay before healing starts'
		},
		'Radius': {
			name: 'Radius',
			type: 'float',
			description: 'The radius of the healing'
		},
		'StartsActive': {
			name: 'StartsActive',
			type: 'boolean',
			description: 'Whether the healing starts active'
		},
		'SingleBurst': {
			name: 'SingleBurst',
			type: 'boolean',
			description: 'Whether the healing is a single burst'
		},
		'AffectsWholePlayer': {
			name: 'AffectsWholePlayer',
			type: 'boolean',
			description: 'Whether the healing affects the whole player'
		},
		'KindOf': {
			name: 'KindOf',
			type: Object.values(kindOfs_t),
			description: 'The kind of healing'
		},
		'ForbiddenKindOf': {
			name: 'ForbiddenKindOf',
			type: Object.values(kindOfs_t),
			description: 'The kind of healing that is forbidden'
		},
		'SkipSelfForHealing': {
			name: 'SkipSelfForHealing',
			type: 'boolean',
			description: 'Whether the healing skips self'
		},
		'RadiusParticleSystemName': {
			name: 'RadiusParticleSystemName',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The name of the radius particle system'
		},
		'UnitHealPulseParticleSystemName': {
			name: 'UnitHealPulseParticleSystemName',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The name of the unit heal pulse particle system'
		}
	},
	[BehaviorModule_t.BATTLE_BUS_SLOW_DEATH_BEHAVIOR]: {
		'DeathTypes': {
			name: 'DeathTypes',
			type: Object.values(DeathType_t),
			description: 'The types of death that trigger this behavior'
		},
		'SinkRate': {
			name: 'SinkRate',
			type: 'integer',
			description: 'The rate at which the object sinks'
		},
		'ExemptStatus': {
			name: 'ExemptStatus',
			type: Object.values(Status_t),
			description: 'The status that exempts the object from sinking'
		},
		'RequiredStatus': {
			name: 'RequiredStatus',
			type: Object.values(Status_t),
			description: 'The status that is required for this behavior to trigger'
		},
		'ProbabilityModifier': {
			name: 'ProbabilityModifier',
			type: 'integer',
			description: 'The probability modifier'
		},
		'ModifierBonusPerOverkillPercent': {
			name: 'ModifierBonusPerOverkillPercent',
			type: 'percent',
			description: 'The modifier bonus per overkill percent'
		},
		'SinkDelay': {
			name: 'SinkDelay',
			type: 'integer',
			description: 'The delay before sinking starts'
		},
		'SinkDelayVariance': {
			name: 'SinkDelayVariance',
			type: 'integer',
			description: 'The variance in the sink delay'
		},
		'DestructionDelay': {
			name: 'DestructionDelay',
			type: 'integer',
			description: 'The delay before destruction starts'
		},
		'DestructionDelayVariance': {
			name: 'DestructionDelayVariance',
			type: 'integer',
			description: 'The variance in the destruction delay'
		},
		'DestructionAltitude': {
			name: 'DestructionAltitude',
			type: 'integer',
			description: 'The altitude at which the object is destroyed'
		},
		'FlingForce': {
			name: 'FlingForce',
			type: 'integer',
			description: 'The force with which the object is flung'
		},
		'FlingForceVariance': {
			name: 'FlingForceVariance',
			type: 'integer',
			description: 'The variance in the fling force'
		},
		'FlingPitch': {
			name: 'FlingPitch',
			type: 'integer',
			description: 'The pitch at which the object is flung'
		},
		'FlingPitchVariance': {
			name: 'FlingPitchVariance',
			type: 'integer',
			description: 'The variance in the fling pitch'
		},
		'FX': {
			name: 'FX',
			type: ['string', IniTypes_t.FXLIST],
			description: 'The FX to play when the object dies',
			numberOfValues: [2],
			validValues: [Object.values(TimeStamp_t), null]
		},
		'OCL': {
			name: 'OCL',
			type: ['string', IniTypes_t.OBJECT_CREATION_LIST],
			description: 'The OCL to play when the object dies',
			numberOfValues: [2],
			validValues: [Object.values(TimeStamp_t), null]
		},
		'Weapon': {
			name: 'Weapon',
			type: ['string', IniTypes_t.WEAPON],
			description: 'The weapon to use when the object dies',
			numberOfValues: [2],
			validValues: [Object.values(TimeStamp_t), null]
		},
		'FXStartUndeath': {
			name: 'FXStartUndeath',
			type: IniTypes_t.FXLIST,
			description: 'The FX to play when the object starts undeath'
		},
		'OCLStartUndeath': {
			name: 'OCLStartUndeath',
			type: IniTypes_t.OBJECT_CREATION_LIST,
			description: 'The OCL to play when the object starts undeath'
		},
		'FXHitGround': {
			name: 'FXHitGround',
			type: IniTypes_t.FXLIST,
			description: 'The FX to play when the object hits the ground'
		},
		'OCLHitGround': {
			name: 'OCLHitGround',
			type: IniTypes_t.OBJECT_CREATION_LIST,
			description: 'The OCL to play when the object hits the ground'
		},
		'DelayFromGroundToFinalDeath': {
			name: 'DelayFromGroundToFinalDeath',
			type: 'integer',
			description: 'The delay before the object dies'
		},
		'ThrowForce': {
			name: 'ThrowForce',
			type: 'integer',
			description: 'The force with which the object is thrown'
		},
		'PercentDamageToPassengers': {
			name: 'PercentDamageToPassengers',
			type: 'percent',
			description: 'The percent of damage to passengers'
		},
		'EmptyHulkDestructionDelay': {
			name: 'EmptyHulkDestructionDelay',
			type: 'integer',
			description: 'The delay before the empty hulk is destroyed'
		}
	},
	[BehaviorModule_t.BUNKER_BUSTER_BEHAVIOR]: {
		'UpgradeRequired': {
			name: 'UpgradeRequired',
			type: [IniTypes_t.UPGRADE],
			description: 'The upgrade required'
		},
		'DetonationFX': {
			name: 'DetonationFX',
			type: IniTypes_t.FXLIST,
			description: 'The FX to play when the object detonates'
		},
		'CrashThroughBunkerFX': {
			name: 'CrashThroughBunkerFX',
			type: IniTypes_t.FXLIST,
			description: 'The FX to play when the object crashes through the bunker'
		},
		'CrashThroughBunkerFXFrequency': {
			name: 'CrashThroughBunkerFXFrequency',
			type: 'integer',
			description: 'The frequency at which the object crashes through the bunker'
		},
		'SeismicEffectRadius': {
			name: 'SeismicEffectRadius',
			type: 'integer',
			description: 'The radius of the seismic effect'
		},
		'SeismicEffectMagnitude': {
			name: 'SeismicEffectMagnitude',
			type: 'integer',
			description: 'The magnitude of the seismic effect'
		},
		'ShockwaveWeaponTemplate': {
			name: 'ShockwaveWeaponTemplate',
			type: IniTypes_t.WEAPON,
			description: 'The weapon template to use when the object detonates'
		},
		'OccupantDamageWeaponTemplate': {
			name: 'OccupantDamageWeaponTemplate',
			type: IniTypes_t.WEAPON,
			description: 'The weapon template to use when the object damages occupants'
		}
	},
	[BehaviorModule_t.BAIKONUR_LAUNCH_POWER]: {
		'SpecialPowerTemplate': {
			name: 'SpecialPowerTemplate',
			type: IniTypes_t.SPECIAL_POWER,
			description: 'The special power template to use'
		},
		'DetonationObject': {
			name: 'DetonationObject',
			type: IniTypes_t.OBJECT,
			description: 'The object to detonate'
		},
		'StartsPaused': {
			name: 'StartsPaused',
			type: 'boolean',
			description: 'Whether the special power starts paused'
		}
	},
	[BehaviorModule_t.BASE_REGENERATE_UPDATE]: {},
	[BehaviorModule_t.BATTLE_PLAN_UPDATE]: {
		'SpecialPowerTemplate': {
			name: 'SpecialPowerTemplate',
			type: IniTypes_t.SPECIAL_POWER,
			description: 'The special power template to use'
		},
		'BombardmentPlanAnimationTime': {
			name: 'BombardmentPlanAnimationTime',
			type: 'integer',
			description: 'The animation time for the bombardment plan'
		},
		'HoldTheLinePlanAnimationTime': {
			name: 'HoldTheLinePlanAnimationTime',
			type: 'integer',
			description: 'The animation time for the hold the line plan'
		},
		'SearchAndDestroyPlanAnimationTime': {
			name: 'SearchAndDestroyPlanAnimationTime',
			type: 'integer',
			description: 'The animation time for the search and destroy plan'
		},
		'TransitionIdleTime': {
			name: 'TransitionIdleTime',
			type: 'integer',
			description: 'The idle time for the transition'
		},
		'BombardmentAnnouncementName': {
			name: 'BombardmentAnnouncementName',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The audio event to play when the bombardment plan is announced'
		},
		'BombardmentPlanUnpackSoundName': {
			name: 'BombardmentPlanUnpackSoundName',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The audio event to play when the bombardment plan is unpacked'
		},
		'BombardmentPlanPackSoundName': {
			name: 'BombardmentPlanPackSoundName',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The audio event to play when the bombardment plan is packed'
		},
		'SearchAndDestroyPlanUnpackSoundName': {
			name: 'SearchAndDestroyPlanUnpackSoundName',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The audio event to play when the search and destroy plan is unpacked'
		},
		'SearchAndDestroyPlanIdleLoopSoundName': {
			name: 'SearchAndDestroyPlanIdleLoopSoundName',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The audio event to play when the search and destroy plan is idle'
		},
		'SearchAndDestroyPlanPackSoundName': {
			name: 'SearchAndDestroyPlanPackSoundName',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The audio event to play when the search and destroy plan is packed'
		},
		'SearchAndDestroyAnnouncementName': {
			name: 'SearchAndDestroyAnnouncementName',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The audio event to play when the search and destroy plan is announced'
		},
		'HoldTheLinePlanUnpackSoundName': {
			name: 'HoldTheLinePlanUnpackSoundName',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The audio event to play when the hold the line plan is unpacked'
		},
		'HoldTheLinePlanPackSoundName': {
			name: 'HoldTheLinePlanPackSoundName',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The audio event to play when the hold the line plan is packed'
		},
		'HoldTheLineAnnouncementName': {
			name: 'HoldTheLineAnnouncementName',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The audio event to play when the hold the line plan is announced'
		},
		'HoldTheLineMessageLabel': {
			name: 'HoldTheLineMessageLabel',
			type: 'string',
			description: 'The message label for the hold the line plan'
		},
		'BombardmentMessageLabel': {
			name: 'BombardmentMessageLabel',
			type: 'string',
			description: 'The message label for the bombardment plan'
		},
		'SearchAndDestroyMessageLabel': {
			name: 'SearchAndDestroyMessageLabel',
			type: 'string',
			description: 'The message label for the search and destroy plan'
		},
		'ValidMemberKindOf': {
			name: 'ValidMemberKindOf',
			type: Object.values(kindOfs_t),
			description: 'The valid member kind ofs for the hold the line plan',
			numberOfValues: [-1]
		},
		'InvalidMemberKindOf': {
			name: 'InvalidMemberKindOf',
			type: Object.values(kindOfs_t),
			description: 'The invalid member kind ofs for the hold the line plan',
			numberOfValues: [-1]
		},
		'BattlePlanChangeParalyzeTime': {
			name: 'BattlePlanChangeParalyzeTime',
			type: 'integer',
			description: 'The paralyze time for the battle plan change'
		},
		'HoldTheLinePlanArmorDamageScalar': {
			name: 'HoldTheLinePlanArmorDamageScalar',
			type: 'float',
			description: 'The armor damage scalar for the hold the line plan'
		},
		'SearchAndDestroyPlanSightRangeScalar': {
			name: 'SearchAndDestroyPlanSightRangeScalar',
			type: 'float',
			description: 'The sight range scalar for the search and destroy plan'
		},
		'StrategyCenterSearchAndDestroySightRangeScalar': {
			name: 'StrategyCenterSearchAndDestroySightRangeScalar',
			type: 'float',
			description: 'The sight range scalar for the search and destroy plan at the strategy center'
		},
		'StrategyCenterSearchAndDestroyDetectsStealth': {
			name: 'StrategyCenterSearchAndDestroyDetectsStealth',
			type: 'boolean',
			description: 'Whether the search and destroy plan detects stealth at the strategy center'
		},
		'StrategyCenterHoldTheLineMaxHealthScalar': {
			name: 'StrategyCenterHoldTheLineMaxHealthScalar',
			type: 'float',
			description: 'The max health scalar for the hold the line plan at the strategy center'
		},
		'StrategyCenterHoldTheLineMaxHealthChangeType': {
			name: 'StrategyCenterHoldTheLineMaxHealthChangeType',
			type: Object.values(ChangeType_t),
			description: 'The max health change type for the hold the line plan at the strategy center',
			numberOfValues: [1]
		},
		'VisionObjectName': {
			name: 'VisionObjectName',
			type: 'string',
			description: 'The name of the object to use for vision'
		}
	},
	[BehaviorModule_t.BONE_FX_DAMAGE]: {},
	[BehaviorModule_t.BONE_FX_UPDATE]: {
		'PristineParticleSystem1': {
			name: 'PristineParticleSystem1',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.PARTICLE_SYSTEM],
			description: 'The particle system to use for the pristine bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'PSys:']
		},
		'PristineParticleSystem2': {
			name: 'PristineParticleSystem2',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.PARTICLE_SYSTEM],
			description: 'The particle system to use for the pristine bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'PSys:']
		},
		'PristineParticleSystem3': {
			name: 'PristineParticleSystem4',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.PARTICLE_SYSTEM],
			description: 'The particle system to use for the pristine bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'PSys:']
		},
		'PristineParticleSystem5': {
			name: 'PristineParticleSystem5',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.PARTICLE_SYSTEM],
			description: 'The particle system to use for the pristine bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'PSys:']
		},
		'PristineParticleSystem6': {
			name: 'PristineParticleSystem6',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.PARTICLE_SYSTEM],
			description: 'The particle system to use for the pristine bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'PSys:']
		},
		'PristineParticleSystem7': {
			name: 'PristineParticleSystem7',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.PARTICLE_SYSTEM],
			description: 'The particle system to use for the pristine bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'PSys:']
		},
		'PristineParticleSystem8': {
			name: 'PristineParticleSystem8',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.PARTICLE_SYSTEM],
			description: 'The particle system to use for the pristine bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'PSys:']
		},
		'PristineOCL1': {
			name: 'PristineOCL1',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.OBJECT_CREATION_LIST],
			description: 'The object creation list to use for the pristine bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'OCL:']
		},
		'PristineOCL2': {
			name: 'PristineOCL2',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.OBJECT_CREATION_LIST],
			description: 'The object creation list to use for the pristine bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'OCL:']
		},
		'PristineOCL3': {
			name: 'PristineOCL3',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.OBJECT_CREATION_LIST],
			description: 'The object creation list to use for the pristine bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'OCL:']
		},
		'PristineOCL4': {
			name: 'PristineOCL4',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.OBJECT_CREATION_LIST],
			description: 'The object creation list to use for the pristine bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'OCL:']
		},
		'PristineOCL5': {
			name: 'PristineOCL5',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.OBJECT_CREATION_LIST],
			description: 'The object creation list to use for the pristine bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'OCL:']
		},
		'PristineOCL6': {
			name: 'PristineOCL6',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.OBJECT_CREATION_LIST],
			description: 'The object creation list to use for the pristine bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'OCL:']
		},
		'PristineOCL7': {
			name: 'PristineOCL7',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.OBJECT_CREATION_LIST],
			description: 'The object creation list to use for the pristine bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'OCL:']
		},
		'PristineOCL8': {
			name: 'PristineOCL8',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.OBJECT_CREATION_LIST],
			description: 'The object creation list to use for the pristine bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'OCL:']
		},
		'PristineFXList1': {
			name: 'PristineFXList1',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.FXLIST],
			description: 'The FX list to use for the pristine bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'FXList:']
		},
		'PristineFXList2': {
			name: 'PristineFXList2',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.FXLIST],
			description: 'The FX list to use for the pristine bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'FXList:']
		},
		'PristineFXList3': {
			name: 'PristineFXList3',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.FXLIST],
			description: 'The FX list to use for the pristine bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'FXList:']
		},
		'PristineFXList4': {
			name: 'PristineFXList4',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.FXLIST],
			description: 'The FX list to use for the pristine bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'FXList:']
		},
		'PristineFXList5': {
			name: 'PristineFXList5',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.FXLIST],
			description: 'The FX list to use for the pristine bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'FXList:']
		},
		'PristineFXList6': {
			name: 'PristineFXList6',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.FXLIST],
			description: 'The FX list to use for the pristine bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'FXList:']
		},
		'PristineFXList7': {
			name: 'PristineFXList7',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.FXLIST],
			description: 'The FX list to use for the pristine bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'FXList:']
		},
		'PristineFXList8': {
			name: 'PristineFXList8',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.FXLIST],
			description: 'The FX list to use for the pristine bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'FXList:']
		},
		'DamageParticleTypes': {
			name: 'DamageParticleTypes',
			type: 'string',
			description: 'The particle types to use for the damaged bone FX',
			validValues: Object.values(DamageTypes_t),
			numberOfValues: [-1]
		},
		'DamagedParticleSystem1': {
			name: 'DamagedParticleSystem1',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.PARTICLE_SYSTEM],
			description: 'The particle system to use for the damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'PSys:']
		},
		'DamagedParticleSystem2': {
			name: 'DamagedParticleSystem2',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.PARTICLE_SYSTEM],
			description: 'The particle system to use for the damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'PSys:']
		},
		'DamagedParticleSystem3': {
			name: 'DamagedParticleSystem3',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.PARTICLE_SYSTEM],
			description: 'The particle system to use for the damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'PSys:']
		},
		'DamagedParticleSystem4': {
			name: 'DamagedParticleSystem4',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.PARTICLE_SYSTEM],
			description: 'The particle system to use for the damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'PSys:']
		},
		'DamagedParticleSystem5': {
			name: 'DamagedParticleSystem5',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.PARTICLE_SYSTEM],
			description: 'The particle system to use for the damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'PSys:']
		},
		'DamagedParticleSystem6': {
			name: 'DamagedParticleSystem6',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.PARTICLE_SYSTEM],
			description: 'The particle system to use for the damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'PSys:']
		},
		'DamagedParticleSystem7': {
			name: 'DamagedParticleSystem7',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.PARTICLE_SYSTEM],
			description: 'The particle system to use for the damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'PSys:']
		},
		'DamagedParticleSystem8': {
			name: 'DamagedParticleSystem8',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.PARTICLE_SYSTEM],
			description: 'The particle system to use for the damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'PSys:']
		},
		'DamageOCLTypes': {
			name: 'DamageOCLTypes',
			type: 'string',
			description: 'The object creation list types to use for the damaged bone FX',
			validValues: Object.values(DamageTypes_t),
			numberOfValues: [-1]
		},
		'DamagedOCL1': {
			name: 'DamagedOCL1',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.OBJECT_CREATION_LIST],
			description: 'The object creation list to use for the damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'OCL:']
		},
		'DamagedOCL2': {
			name: 'DamagedOCL2',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.OBJECT_CREATION_LIST],
			description: 'The object creation list to use for the damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'OCL:']
		},
		'DamagedOCL3': {
			name: 'DamagedOCL3',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.OBJECT_CREATION_LIST],
			description: 'The object creation list to use for the damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'OCL:']
		},
		'DamagedOCL4': {
			name: 'DamagedOCL4',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.OBJECT_CREATION_LIST],
			description: 'The object creation list to use for the damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'OCL:']
		},
		'DamagedOCL5': {
			name: 'DamagedOCL5',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.OBJECT_CREATION_LIST],
			description: 'The object creation list to use for the damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'OCL:']
		},
		'DamagedOCL6': {
			name: 'DamagedOCL6',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.OBJECT_CREATION_LIST],
			description: 'The object creation list to use for the damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'OCL:']
		},
		'DamagedOCL7': {
			name: 'DamagedOCL7',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.OBJECT_CREATION_LIST],
			description: 'The object creation list to use for the damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'OCL:']
		},
		'DamagedOCL8': {
			name: 'DamagedOCL8',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.OBJECT_CREATION_LIST],
			description: 'The object creation list to use for the damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'OCL:']
		},
		'DamageFXTypes': {
			name: 'DamageFXTypes',
			type: 'string',
			description: 'The FX list types to use for the damaged bone FX',
			validValues: Object.values(DamageTypes_t),
			numberOfValues: [-1]
		},
		'DamagedFXList1': {
			name: 'DamagedFXList1',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.FXLIST],
			description: 'The FX list to use for the damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'FXList:']
		},
		'DamagedFXList2': {
			name: 'DamagedFXList2',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.FXLIST],
			description: 'The FX list to use for the damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'FXList:']
		},
		'DamagedFXList3': {
			name: 'DamagedFXList3',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.FXLIST],
			description: 'The FX list to use for the damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'FXList:']
		},
		'DamagedFXList4': {
			name: 'DamagedFXList4',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.FXLIST],
			description: 'The FX list to use for the damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'FXList:']
		},
		'DamagedFXList5': {
			name: 'DamagedFXList5',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.FXLIST],
			description: 'The FX list to use for the damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'FXList:']
		},
		'DamagedFXList6': {
			name: 'DamagedFXList6',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.FXLIST],
			description: 'The FX list to use for the damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'FXList:']
		},
		'DamagedFXList7': {
			name: 'DamagedFXList7',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.FXLIST],
			description: 'The FX list to use for the damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'FXList:']
		},
		'DamagedFXList8': {
			name: 'DamagedFXList8',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.FXLIST],
			description: 'The FX list to use for the damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'FXList:']
		},
		'ReallyDamagedFXList1': {
			name: 'ReallyDamagedFXList1',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.FXLIST],
			description: 'The FX list to use for the really damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'FXList:']
		},
		'ReallyDamagedFXList2': {
			name: 'ReallyDamagedFXList2',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.FXLIST],
			description: 'The FX list to use for the really damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'FXList:']
		},
		'ReallyDamagedFXList3': {
			name: 'ReallyDamagedFXList3',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.FXLIST],
			description: 'The FX list to use for the really damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'FXList:']
		},
		'ReallyDamagedFXList4': {
			name: 'ReallyDamagedFXList4',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.FXLIST],
			description: 'The FX list to use for the really damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'FXList:']
		},
		'ReallyDamagedFXList5': {
			name: 'ReallyDamagedFXList5',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.FXLIST],
			description: 'The FX list to use for the really damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'FXList:']
		},
		'ReallyDamagedFXList6': {
			name: 'ReallyDamagedFXList6',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.FXLIST],
			description: 'The FX list to use for the really damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'FXList:']
		},
		'ReallyDamagedFXList7': {
			name: 'ReallyDamagedFXList7',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.FXLIST],
			description: 'The FX list to use for the really damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'FXList:']
		},
		'ReallyDamagedFXList8': {
			name: 'ReallyDamagedFXList8',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.FXLIST],
			description: 'The FX list to use for the really damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'FXList:']
		},
		'ReallyDamagedOCL1': {
			name: 'ReallyDamagedOCL1',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.OBJECT_CREATION_LIST],
			description: 'The object creation list to use for the really damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'OCL:']
		},
		'ReallyDamagedOCL2': {
			name: 'ReallyDamagedOCL2',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.OBJECT_CREATION_LIST],
			description: 'The object creation list to use for the really damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'OCL:']
		},
		'ReallyDamagedOCL3': {
			name: 'ReallyDamagedOCL3',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.OBJECT_CREATION_LIST],
			description: 'The object creation list to use for the really damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'OCL:']
		},
		'ReallyDamagedOCL4': {
			name: 'ReallyDamagedOCL4',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.OBJECT_CREATION_LIST],
			description: 'The object creation list to use for the really damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'OCL:']
		},
		'ReallyDamagedOCL5': {
			name: 'ReallyDamagedOCL5',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.OBJECT_CREATION_LIST],
			description: 'The object creation list to use for the really damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'OCL:']
		},
		'ReallyDamagedOCL6': {
			name: 'ReallyDamagedOCL6',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.OBJECT_CREATION_LIST],
			description: 'The object creation list to use for the really damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'OCL:']
		},
		'ReallyDamagedOCL7': {
			name: 'ReallyDamagedOCL7',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.OBJECT_CREATION_LIST],
			description: 'The object creation list to use for the really damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'OCL:']
		},
		'ReallyDamagedOCL8': {
			name: 'ReallyDamagedOCL8',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.OBJECT_CREATION_LIST],
			description: 'The object creation list to use for the really damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'OCL:']
		},
		'ReallyDamagedParticleSystem1': {
			name: 'ReallyDamagedParticleSystem1',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.PARTICLE_SYSTEM],
			description: 'The particle system to use for the really damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'PSys:']
		},
		'ReallyDamagedParticleSystem2': {
			name: 'ReallyDamagedParticleSystem2',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.PARTICLE_SYSTEM],
			description: 'The particle system to use for the really damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'PSys:']
		},
		'ReallyDamagedParticleSystem3': {
			name: 'ReallyDamagedParticleSystem3',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.PARTICLE_SYSTEM],
			description: 'The particle system to use for the really damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'PSys:']
		},
		'ReallyDamagedParticleSystem4': {
			name: 'ReallyDamagedParticleSystem4',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.PARTICLE_SYSTEM],
			description: 'The particle system to use for the really damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'PSys:']
		},
		'ReallyDamagedParticleSystem5': {
			name: 'ReallyDamagedParticleSystem5',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.PARTICLE_SYSTEM],
			description: 'The particle system to use for the really damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'PSys:']
		},
		'ReallyDamagedParticleSystem6': {
			name: 'ReallyDamagedParticleSystem6',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.PARTICLE_SYSTEM],
			description: 'The particle system to use for the really damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'PSys:']
		},
		'ReallyDamagedParticleSystem7': {
			name: 'ReallyDamagedParticleSystem7',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.PARTICLE_SYSTEM],
			description: 'The particle system to use for the really damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'PSys:']
		},
		'ReallyDamagedParticleSystem8': {
			name: 'ReallyDamagedParticleSystem8',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.PARTICLE_SYSTEM],
			description: 'The particle system to use for the really damaged bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'PSys:']
		},
		'RubbleParticleSystem1': {
			name: 'RubbleParticleSystem1',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.PARTICLE_SYSTEM],
			description: 'The particle system to use for the rubble bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'PSys:']
		},
		'RubbleParticleSystem2': {
			name: 'RubbleParticleSystem2',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.PARTICLE_SYSTEM],
			description: 'The particle system to use for the rubble bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'PSys:']
		},
		'RubbleParticleSystem3': {
			name: 'RubbleParticleSystem3',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.PARTICLE_SYSTEM],
			description: 'The particle system to use for the rubble bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'PSys:']
		},
		'RubbleParticleSystem4': {
			name: 'RubbleParticleSystem4',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.PARTICLE_SYSTEM],
			description: 'The particle system to use for the rubble bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'PSys:']
		},
		'RubbleParticleSystem5': {
			name: 'RubbleParticleSystem5',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.PARTICLE_SYSTEM],
			description: 'The particle system to use for the rubble bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'PSys:']
		},
		'RubbleParticleSystem6': {
			name: 'RubbleParticleSystem6',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.PARTICLE_SYSTEM],
			description: 'The particle system to use for the rubble bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'PSys:']
		},
		'RubbleParticleSystem7': {
			name: 'RubbleParticleSystem7',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.PARTICLE_SYSTEM],
			description: 'The particle system to use for the rubble bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'PSys:']
		},
		'RubbleParticleSystem8': {
			name: 'RubbleParticleSystem8',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.PARTICLE_SYSTEM],
			description: 'The particle system to use for the rubble bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'PSys:']
		},
		'RubbleOCL1': {
			name: 'RubbleOCL1',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.OBJECT_CREATION_LIST],
			description: 'The object creation list to use for the rubble bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'OCL:']
		},
		'RubbleOCL2': {
			name: 'RubbleOCL2',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.OBJECT_CREATION_LIST],
			description: 'The object creation list to use for the rubble bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'OCL:']
		},
		'RubbleOCL3': {
			name: 'RubbleOCL3',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.OBJECT_CREATION_LIST],
			description: 'The object creation list to use for the rubble bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'OCL:']
		},
		'RubbleOCL4': {
			name: 'RubbleOCL4',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.OBJECT_CREATION_LIST],
			description: 'The object creation list to use for the rubble bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'OCL:']
		},
		'RubbleOCL5': {
			name: 'RubbleOCL5',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.OBJECT_CREATION_LIST],
			description: 'The object creation list to use for the rubble bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'OCL:']
		},
		'RubbleOCL6': {
			name: 'RubbleOCL6',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.OBJECT_CREATION_LIST],
			description: 'The object creation list to use for the rubble bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'OCL:']
		},
		'RubbleOCL7': {
			name: 'RubbleOCL7',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.OBJECT_CREATION_LIST],
			description: 'The object creation list to use for the rubble bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'OCL:']
		},
		'RubbleOCL8': {
			name: 'RubbleOCL8',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.OBJECT_CREATION_LIST],
			description: 'The object creation list to use for the rubble bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'OCL:']
		},
		'RubbleFXList1': {
			name: 'RubbleFXList1',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.FXLIST],
			description: 'The FX list to use for the rubble bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'FXList:']
		},
		'RubbleFXList2': {
			name: 'RubbleFXList2',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.FXLIST],
			description: 'The FX list to use for the rubble bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'FXList:']
		},
		'RubbleFXList3': {
			name: 'RubbleFXList3',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.FXLIST],
			description: 'The FX list to use for the rubble bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'FXList:']
		},
		'RubbleFXList4': {
			name: 'RubbleFXList4',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.FXLIST],
			description: 'The FX list to use for the rubble bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'FXList:']
		},
		'RubbleFXList5': {
			name: 'RubbleFXList5',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.FXLIST],
			description: 'The FX list to use for the rubble bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'FXList:']
		},
		'RubbleFXList6': {
			name: 'RubbleFXList6',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.FXLIST],
			description: 'The FX list to use for the rubble bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'FXList:']
		},
		'RubbleFXList7': {
			name: 'RubbleFXList7',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.FXLIST],
			description: 'The FX list to use for the rubble bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'FXList:']
		},
		'RubbleFXList8': {
			name: 'RubbleFXList8',
			type: ['string', 'boolean', 'integer', 'integer', IniTypes_t.FXLIST],
			description: 'The FX list to use for the rubble bone FX',
			numberOfValues: [5],
			prefix: ['bone:', 'OnlyOnce:', null, null, 'FXList:']
		}
	},
	[BehaviorModule_t.BRIDGE_BEHAVIOR]: {
		'LateralScaffoldSpeed': {
			name: 'LateralScaffoldSpeed',
			type: 'integer',
			description: 'The speed of the lateral scaffold'
		},
		'VerticalScaffoldSpeed': {
			name: 'VerticalScaffoldSpeed',
			type: 'integer',
			description: 'The speed of the vertical scaffold'
		},
		'BridgeDieFX': {
			name: 'BridgeDieFX',
			type: [IniTypes_t.FXLIST, 'integer', 'string'],
			description: 'The FX list to use for the bridge die FX',
			numberOfValues: [3],
			prefix: ['FX:', 'Delay:', 'Bone:']
		},
		'BridgeDieOCL': {
			name: 'BridgeDieOCL',
			type: [IniTypes_t.OBJECT_CREATION_LIST, 'integer', 'string'],
			description: 'The object creation list to use for the bridge die OCL',
			numberOfValues: [3],
			prefix: ['OCL:', 'Delay:', 'Bone:']
		}
	},
	[BehaviorModule_t.BRIDGE_SCAFFOLD_BEHAVIOR]: {},
	[BehaviorModule_t.BRIDGE_TOWER_BEHAVIOR]: {},
	[BehaviorModule_t.CASH_BOUNTY_POWER]: {
		'SpecialPowerTemplate': {
			name: 'SpecialPowerTemplate',
			type: IniTypes_t.SPECIAL_POWER,
			description: 'The special power template for the cash bounty power'
		},
		'Bounty': {
			name: 'Bounty',
			type: 'percent',
			description: 'The bounty for the cash bounty power'
		},
		'StartsPaused': {
			name: 'StartsPaused',
			type: 'boolean',
			description: 'Whether the cash bounty power starts paused',
			requiredValues: [{
				type: BehaviorModule_t.UNPAUSE_SPECIAL_POWER_UPGRADE
			}]
		}
	},
	[BehaviorModule_t.CASH_HACK_SPECIAL_POWER]: {
		'SpecialPowerTemplate': {
			name: 'SpecialPowerTemplate',
			type: IniTypes_t.SPECIAL_POWER,
			description: 'The special power template for the cash hack special power'
		},
		'MoneyAmount': {
			name: 'MoneyAmount',
			type: 'integer',
			description: 'The amount of money to hack'
		},
		'UpgradeMoneyAmount': {
			name: 'UpgradeMoneyAmount',
			type: IniTypes_t.SCIENCE,
			description: 'The amount of money to hack for each upgrade'
		},
		'StartsPaused': {
			name: 'StartsPaused',
			type: 'boolean',
			description: 'Whether the cash hack special power starts paused',
			requiredValues: [{
				type: BehaviorModule_t.UNPAUSE_SPECIAL_POWER_UPGRADE
			}]
		}
	},
	[BehaviorModule_t.CAVE_CONTAIN]: {
		'CaveIndex': {
			name: 'CaveIndex',
			type: 'integer',
			description: 'The index of the cave'
		},
		'AllowInsideKindOf': {
			name: 'AllowInsideKindOf',
			type: 'string',
			description: 'The kind of objects that can be inside the cave',
			validValues: Object.values(kindOfs_t),
			numberOfValues: [-1]
		},
		'ForbidInsideKindOf': {
			name: 'ForbidInsideKindOf',
			type: 'string',
			description: 'The kind of objects that cannot be inside the cave',
			validValues: Object.values(kindOfs_t),
			numberOfValues: [-1]
		}
	},
	[BehaviorModule_t.COUNTERMEASURES_BEHAVIOR]: {
		...baseUpgradeProperties,
		'FlareTemplateName': {
			name: 'FlareTemplateName',
			type: IniTypes_t.OBJECT,
			description: 'The flare template name'
		},
		'FlareBoneBaseName': {
			name: 'FlareBoneBaseName',
			type: 'string',
			description: 'The bone base name'
		},
		'VolleySize': {
			name: 'VolleySize',
			type: 'integer',
			description: 'The size of the volley'
		},
		'VolleyArcAngle': {
			name: 'VolleyArcAngle',
			type: 'integer',
			description: 'The arc angle of the volley'
		},
		'VolleyVelocityFactor': {
			name: 'VolleyVelocityFactor',
			type: 'integer',
			description: 'The velocity factor of the volley'
		},
		'DelayBetweenVolleys': {
			name: 'DelayBetweenVolleys',
			type: 'integer',
			description: 'The delay between volleys'
		},
		'NumberOfVolleys': {
			name: 'NumberOfVolleys',
			type: 'integer',
			description: 'The number of volleys'
		},
		'ReloadTime': {
			name: 'ReloadTime',
			type: 'integer',
			description: 'The reload time'
		},
		'EvasionRate': {
			name: 'EvasionRate',
			type: 'percent',
			description: 'The evasion rate'
		},
		'ReactionLaunchLatency': {
			name: 'ReactionLaunchLatency',
			type: 'integer',
			description: 'The reaction launch latency'
		},
		'MissileDecoyDelay': {
			name: 'MissileDecoyDelay',
			type: 'integer',
			description: 'The missile decoy delay'
		},
		'MustReloadAtAirfield': {
			name: 'MustReloadAtAirfield',
			type: 'boolean',
			description: 'Whether the countermeasures must reload at the airfield'
		}
	},
	[BehaviorModule_t.CHECKPOINT_UPDATE]: {},
	[BehaviorModule_t.CHINOOK_AI_UPDATE]: {
		...baseAiUpdateProperties,
		'RappelSpeed': {
			name: 'RappelSpeed',
			type: 'integer',
			description: 'The speed of the rappel'
		},
		'RopeDropSpeed': {
			name: 'RopeDropSpeed',
			type: 'integer',
			description: 'The speed of the rope drop'
		},
		'RopeName': {
			name: 'RopeName',
			type: IniTypes_t.OBJECT,
			description: 'The name of the rope'
		},
		'RopeFinalHeight': {
			name: 'RopeFinalHeight',
			type: 'integer',
			description: 'The final height of the rope'
		},
		'RopeWidth': {
			name: 'RopeWidth',
			type: 'float',
			description: 'The width of the rope'
		},
		'RopeWobbleLen': {
			name: 'RopeWobbleLen',
			type: 'integer',
			description: 'The length of the rope wobble'
		},
		'RopeWobbleAmplitude': {
			name: 'RopeWobbleAmplitude',
			type: 'float',
			description: 'The amplitude of the rope wobble'
		},
		'RopeWobbleRate': {
			name: 'RopeWobbleRate',
			type: 'integer',
			description: 'The rate of the rope wobble'
		},
		'RopeColor': {
			name: 'RopeColor',
			type: ['integer', 'integer', 'integer'],
			description: 'The color of the rope',
			numberOfValues: [3],
			prefix: ['R:', 'G:', 'B:'],
			ignoreCase: true
		},
		'RotorWashParticleSystem': {
			name: 'RotorWashParticleSystem',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The particle system to use for the rotor wash'
		},
		'NumRopes': {
			name: 'NumRopes',
			type: 'integer',
			description: 'The number of ropes'
		},
		'PerRopeDelayMin': {
			name: 'PerRopeDelayMin',
			type: 'integer',
			description: 'The minimum delay per rope'
		},
		'PerRopeDelayMax': {
			name: 'PerRopeDelayMax',
			type: 'integer',
			description: 'The maximum delay per rope'
		},
		'MinDropHeight': {
			name: 'MinDropHeight',
			type: 'integer',
			description: 'The minimum drop height'
		},
		'WaitForRopesToDrop': {
			name: 'WaitForRopesToDrop',
			type: 'boolean',
			description: 'Whether to wait for the ropes to drop'
		},
		'MaxBoxes': {
			name: 'MaxBoxes',
			type: 'integer',
			description: 'The maximum number of boxes',
			requiredValues: [{
				type: kindOfs_t.HARVESTER
			}]
		},
		'SupplyCenterActionDelay': {
			name: 'SupplyCenterActionDelay',
			type: 'integer',
			description: 'The delay for the supply center action',
			requiredValues: [{
				type: kindOfs_t.HARVESTER
			}]
		},
		'SupplyWarehouseActionDelay': {
			name: 'SupplyWarehouseActionDelay',
			type: 'integer',
			description: 'The delay for the supply warehouse action',
			requiredValues: [{
				type: kindOfs_t.HARVESTER
			}]
		},
		'SupplyWarehouseScanDistance': {
			name: 'SupplyWarehouseScanDistance',
			type: 'integer',
			description: 'The scan distance for the supply warehouse',
			requiredValues: [{
				type: kindOfs_t.HARVESTER
			}]
		},
		'SuppliesDepletedVoice': {
			name: 'SuppliesDepletedVoice',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The voice to play when the supplies are depleted',
			requiredValues: [{
				type: kindOfs_t.HARVESTER
			}]
		},
		'UpgradedSupplyBoost': {
			name: 'UpgradedSupplyBoost',
			type: 'percent',
			description: 'The supply boost for the upgraded supply',
			requiredValues: [{
				type: kindOfs_t.HARVESTER
			}]
		}
	},
	[BehaviorModule_t.CLEANUP_AREA_POWER]: {
		'SpecialPowerTemplate': {
			name: 'SpecialPowerTemplate',
			type: IniTypes_t.SPECIAL_POWER,
			description: 'The special power template for the cleanup area power'
		},
		'MaxMoveDistanceFromLocation': {
			name: 'MaxMoveDistanceFromLocation',
			type: 'float',
			description: 'The maximum move distance from the location'
		},
		'StartsPaused': {
			name: 'StartsPaused',
			type: 'boolean',
			description: 'Whether the cleanup area power starts paused',
			requiredValues: [{
				type: BehaviorModule_t.UNPAUSE_SPECIAL_POWER_UPGRADE
			}]
		},
		'InitiateSound': {
			name: 'InitiateSound',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The sound to play when the cleanup area power is initiated'
		}
	},
	[BehaviorModule_t.CLEANUP_HAZARD_UPDATE]: {
		'WeaponSlot': {
			name: 'WeaponSlot',
			type: 'string',
			description: 'The weapon slot to use for the cleanup hazard update',
			validValues: Object.values(WeaponSlot_t)
		},
		'ScanRate': {
			name: 'ScanRate',
			type: 'integer',
			description: 'The scan rate for the cleanup hazard update'
		},
		'ScanRange': {
			name: 'ScanRange',
			type: 'float',
			description: 'The scan range for the cleanup hazard update'
		}
	},
	[BehaviorModule_t.COMMAND_BUTTON_HUNT_UPDATE]: {},
	[BehaviorModule_t.COMMAND_SET_UPGRADE]: {
		...baseUpgradeProperties,
		'RemovesUpgrades': {
			name: 'RemovesUpgrades',
			type: IniTypes_t.UPGRADE,
			description: 'The upgrades to remove'
		},
		'CommandSet': {
			name: 'CommandSet',
			type: IniTypes_t.COMMAND_SET,
			description: 'The command set to use'
		},
		'CommandSetAlt': {
			name: 'CommandSetAlt',
			type: IniTypes_t.COMMAND_SET,
			description: 'The alternate command set to use'
		},
		'TriggerAlt': {
			name: 'TriggerAlt',
			type: IniTypes_t.UPGRADE,
			description: 'The upgrades to trigger the alternate command set'
		}
	},
	[BehaviorModule_t.CONVERT_TO_CAR_BOMB_CRATE_COLLIDE]: {
		'RequiredKindOf': {
			name: 'RequiredKindOf',
			type: 'string',
			description: 'The kind of objects that are required to convert to a car bomb crate',
			validValues: Object.values(kindOfs_t),
			numberOfValues: [-1]
		},
		'ForbiddenKindOf': {
			name: 'ForbiddenKindOf',
			type: 'string',
			description: 'The kind of objects that are forbidden to convert to a car bomb crate',
			validValues: Object.values(kindOfs_t),
			numberOfValues: [-1]
		},
		'FXList': {
			name: 'FXList',
			type: IniTypes_t.FXLIST,
			description: 'The FX list to use for the car bomb crate'
		},
		'ExecuteFX': {
			name: 'ExecuteFX',
			type: IniTypes_t.FXLIST,
			description: 'The FX list to execute'
		},
		'ExecuteAnimation': {
			name: 'ExecuteAnimation',
			type: IniTypes_t.ANIMATION,
			description: 'The animation to execute'
		},
		'ExecuteAnimationTime': {
			name: 'ExecuteAnimationTime',
			type: 'float',
			description: 'The time to execute the animation'
		},
		'ExecuteAnimationZRise': {
			name: 'ExecuteAnimationZRise',
			type: 'integer',
			description: 'The Z rise to execute the animation'
		},
		'ExecuteAnimationFades': {
			name: 'ExecuteAnimationFades',
			type: 'boolean',
			description: 'Whether the animation fades'
		}
	},
	[BehaviorModule_t.CONVERT_TO_HIJACKED_VEHICLE_CRATE_COLLIDE]: {
		'RequiredKindOf': {
			name: 'RequiredKindOf',
			type: 'string',
			description: 'The kind of objects that are required to convert to a hijacked vehicle crate',
			validValues: Object.values(kindOfs_t),
			numberOfValues: [-1]
		},
		'ForbiddenKindOf': {
			name: 'ForbiddenKindOf',
			type: 'string',
			description: 'The kind of objects that are forbidden to convert to a hijacked vehicle crate',
			validValues: Object.values(kindOfs_t),
			numberOfValues: [-1]
		},
		'ExecuteFX': {
			name: 'ExecuteFX',
			type: IniTypes_t.FXLIST,
			description: 'The FX list to execute'
		},
		'ExecuteAnimation': {
			name: 'ExecuteAnimation',
			type: IniTypes_t.ANIMATION,
			description: 'The animation to execute'
		},
		'ExecuteAnimationTime': {
			name: 'ExecuteAnimationTime',
			type: 'float',
			description: 'The time to execute the animation'
		},
		'ExecuteAnimationZRise': {
			name: 'ExecuteAnimationZRise',
			type: 'integer',
			description: 'The Z rise to execute the animation'
		},
		'ExecuteAnimationFades': {
			name: 'ExecuteAnimationFades',
			type: 'boolean',
			description: 'Whether the animation fades'
		},
	},
	[BehaviorModule_t.COST_MODIFIER_UPGRADE]: {
		...baseUpgradeProperties,
		'EffectKindOf': {
			name: 'EffectKindOf',
			type: 'string',
			description: 'The kind of objects to affect',
			validValues: Object.values(kindOfs_t),
			numberOfValues: [-1]
		},
		'Percentage': {
			name: 'Percentage',
			type: 'percent',
			description: 'The percentage to affect'
		}
	},
	[BehaviorModule_t.CREATE_CRATE_DIE]: {
		'DeathTypes': {
			name: 'DeathTypes',
			type: 'string',
			description: 'The death types to create crates',
			validValues: Object.values(DeathType_t),
			numberOfValues: [-1]
		},
		'RequiredStatus': {
			name: 'RequiredStatus',
			type: 'string',
			description: 'The status bits to require',
			validValues: Object.values(Status_t),
			numberOfValues: [-1]
		},
		'ExemptStatus': {
			name: 'ExemptStatus',
			type: 'string',
			description: 'The status bits to exempt',
			validValues: Object.values(Status_t),
			numberOfValues: [-1]
		},
		'CrateData': {
			name: 'CrateData',
			type: IniTypes_t.CRATE,
			description: 'The crate data to use'
		}
	},
	[BehaviorModule_t.CREATE_OBJECT_DIE]: {
		'DeathTypes': {
			name: 'DeathTypes',
			type: 'string',
			description: 'The death types to create crates',
			validValues: Object.values(DeathType_t),
			numberOfValues: [-1]
		},
		'RequiredStatus': {
			name: 'RequiredStatus',
			type: 'string',
			description: 'The status bits to require',
			validValues: Object.values(Status_t),
			numberOfValues: [-1]
		},
		'ExemptStatus': {
			name: 'ExemptStatus',
			type: 'string',
			description: 'The status bits to exempt',
			validValues: Object.values(Status_t),
			numberOfValues: [-1]
		},
		'CreationList': {
			name: 'CreationList',
			type: IniTypes_t.OBJECT_CREATION_LIST,
			description: 'The object creation list to use'
		},
		'TransferPreviousHealth': {
			name: 'TransferPreviousHealth',
			type: 'boolean',
			description: 'Whether to transfer the previous health'
		}
	},
	[BehaviorModule_t.CRUSH_DIE]: {
		'DeathTypes': {
			name: 'DeathTypes',
			type: 'string',
			description: 'The death types to create crates',
			validValues: Object.values(DeathType_t),
			numberOfValues: [-1]
		},
		'RequiredStatus': {
			name: 'RequiredStatus',
			type: 'string',
			description: 'The status bits to require',
			validValues: Object.values(Status_t),
			numberOfValues: [-1]
		},
		'ExemptStatus': {
			name: 'ExemptStatus',
			type: 'string',
			description: 'The status bits to exempt',
			validValues: Object.values(Status_t),
			numberOfValues: [-1]
		},
		'TotalCrushSound': {
			name: 'TotalCrushSound',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The sound to play when the object is crushed'
		},
		'BackEndCrushSound': {
			name: 'BackEndCrushSound',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The sound to play when the object is crushed'
		},
		'FrontEndCrushSound': {
			name: 'FrontEndCrushSound',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The sound to play when the object is crushed'
		},
		'TotalCrushSoundPercent': {
			name: 'TotalCrushSoundPercent',
			type: 'percent',
			description: 'The percentage of the total crush sound to play'
		},
		'BackEndCrushSoundPercent': {
			name: 'BackEndCrushSoundPercent',
			type: 'percent',
			description: 'The percentage of the back end crush sound to play'
		},
		'FrontEndCrushSoundPercent': {
			name: 'FrontEndCrushSoundPercent',
			type: 'percent',
			description: 'The percentage of the front end crush sound to play'
		}
	},
	[BehaviorModule_t.DAM_DIE]: {},
	[BehaviorModule_t.DEFECTOR_SPECIAL_POWER]: {
		'SpecialPowerTemplate': {
			name: 'SpecialPowerTemplate',
			type: IniTypes_t.SPECIAL_POWER,
			description: 'The special power template to use'
		},
		'FatCursorRadius': {
			name: 'FatCursorRadius',
			type: 'float',
			description: 'The radius of the fat cursor'
		},
		'StartsPaused': {
			name: 'StartsPaused',
			type: 'boolean',
			description: 'Whether the special power starts paused',
			requiredValues: [{
				type: BehaviorModule_t.UNPAUSE_SPECIAL_POWER_UPGRADE
			}]
		}
	},
	[BehaviorModule_t.DEFAULT_PRODUCTION_EXIT_UPDATE]: {
		'UnitCreatePoint': {
			name: 'UnitCreatePoint',
			type: ['float', 'float', 'float'],
			description: 'The point to create the unit',
			prefix: ['x:', 'y:', 'z:']
		},
		'NaturalRallyPoint': {
			name: 'NaturalRallyPoint',
			type: ['float', 'float', 'float'],
			description: 'The rally point to use',
			prefix: ['x:', 'y:', 'z:']
		},
		'UseSpawnRallyPoint': {
			name: 'UseSpawnRallyPoint',
			type: 'boolean',
			description: 'Whether to use the spawn rally point'
		}
	},
	[BehaviorModule_t.DELAYED_UPGRADE]: {
		...baseUpgradeProperties,
		'DelayTime': {
			name: 'DelayTime',
			type: 'integer',
			description: 'The delay time'
		}
	},
	[BehaviorModule_t.DELAYED_WEAPON_SET_UPGRADE_UPDATE]: {},
	[BehaviorModule_t.DELETION_UPDATE]: {
		'MinLifetime': {
			name: 'MinLifetime',
			type: 'integer',
			description: 'The minimum lifetime'
		},
		'MaxLifetime': {
			name: 'MaxLifetime',
			type: 'integer',
			description: 'The maximum lifetime'
		}
	},
	[BehaviorModule_t.DELIVER_PAYLOAD_AI_UPDATE]: {
		'DoorDelay': {
			name: 'DoorDelay',
			type: 'integer',
			description: 'The delay before the door opens'
		},
		'DeliveryDistance': {
			name: 'DeliveryDistance',
			type: 'integer',
			description: 'The distance to deliver the payload'
		},
		'MaxAttempts': {
			name: 'MaxAttempts',
			type: 'integer',
			description: 'The maximum number of attempts to deliver the payload'
		},
		'DropDelay': {
			name: 'DropDelay',
			type: 'integer',
			description: 'The delay before the payload is dropped'
		},
		'DropOffset': {
			name: 'DropOffset',
			type: ['float', 'float', 'float'],
			description: 'The offset to drop the payload',
			prefix: ['x:', 'y:', 'z:']
		},
		'DropVariance': {
			name: 'DropVariance',
			type: ['float', 'float', 'float'],
			description: 'The variance to drop the payload',
			prefix: ['x:', 'y:', 'z:']
		},
		'PutInContainer': {
			name: 'PutInContainer',
			type: IniTypes_t.OBJECT,
			description: 'The object to put the payload in'
		}
	},
	[BehaviorModule_t.DEMO_TRAP_UPDATE]: {
		'DefaultProximityMode': {
			name: 'DefaultProximityMode',
			type: 'boolean',
			description: 'Whether to use the default proximity mode'
		},
		'DetonationWeaponSlot': {
			name: 'DetonationWeaponSlot',
			type: 'string',
			description: 'The weapon slot to use for detonation',
			validValues: Object.values(WeaponSlot_t),
		},
		'ProximityModeWeaponSlot': {
			name: 'ProximityModeWeaponSlot',
			type: 'string',
			description: 'The weapon slot to use for proximity mode',
			validValues: Object.values(WeaponSlot_t),
		},
		'ManualModeWeaponSlot': {
			name: 'ManualModeWeaponSlot',
			type: 'string',
			description: 'The weapon slot to use for manual mode',
			validValues: Object.values(WeaponSlot_t),
		},
		'TriggerDetonationRange': {
			name: 'TriggerDetonationRange',
			type: 'float',
			description: 'The range to trigger detonation'
		},
		'IgnoreTargetTypes': {
			name: 'IgnoreTargetTypes',
			type: 'string',
			description: 'The types to ignore',
			validValues: Object.values(kindOfs_t),
			numberOfValues: [-1]
		},
		'AutoDetonationWithFriendsInvolved': {
			name: 'AutoDetonationWithFriendsInvolved',
			type: 'boolean',
			description: 'Whether to auto detonate with friends involved'
		},
		'DetonateWhenKilled': {
			name: 'DetonateWhenKilled',
			type: 'boolean',
			description: 'Whether to detonate when killed'
		},
		'DetonationWeapon': {
			name: 'DetonationWeapon',
			type: IniTypes_t.WEAPON,
			description: 'The weapon to use for detonation'
		}
	},
	[BehaviorModule_t.DEPLOY_STYLE_AI_UPDATE]: {
		...baseAiUpdateProperties,
		'PackTime': {
			name: 'PackTime',
			type: 'integer',
			description: 'The time to pack'
		},
		'UnpackTime': {
			name: 'UnpackTime',
			type: 'integer',
			description: 'The time to unpack'
		},
		'TurretsFunctionOnlyWhenDeployed': {
			name: 'TurretsFunctionOnlyWhenDeployed',
			type: 'boolean',
			description: 'Whether the turrets function only when deployed'
		},
		'TurretsMustCenterBeforePacking': {
			name: 'TurretsMustCenterBeforePacking',
			type: 'boolean',
			description: 'Whether the turrets must center before packing'
		},
		'ManualDeployAnimations': {
			name: 'ManualDeployAnimations',
			type: 'boolean',
			description: 'Whether to use manual deploy animations'
		},
		'ResetTurretBeforePacking': {
			name: 'ResetTurretBeforePacking',
			type: 'boolean',
			description: 'Whether to reset the turret before packing'
		}
	},
	[BehaviorModule_t.DESTROY_DIE]: {
		'DeathTypes': {
			name: 'DeathTypes',
			type: 'string',
			description: 'The death types to create crates',
			validValues: Object.values(DeathType_t),
			numberOfValues: [-1]
		},
		'RequiredStatus': {
			name: 'RequiredStatus',
			type: 'string',
			description: 'The status bits to require',
			validValues: Object.values(Status_t),
			numberOfValues: [-1]
		},
		'ExemptStatus': {
			name: 'ExemptStatus',
			type: 'string',
			description: 'The status bits to exempt',
			validValues: Object.values(Status_t),
			numberOfValues: [-1]
		}
	},
	[BehaviorModule_t.DOZER_AI_UPDATE]: {},
	[BehaviorModule_t.DUMB_PROJECTILE_BEHAVIOR]: {
		'MaxLifespan': {
			name: 'MaxLifespan',
			type: 'integer',
			description: 'The maximum lifespan',
			requiredValues: [{
				type: kindOfs_t.PROJECTILE
			}]
		},
		'TumbleRandomly': {
			name: 'TumbleRandomly',
			type: 'boolean',
			description: 'Whether to tumble randomly',
			requiredValues: [{
				type: kindOfs_t.PROJECTILE
			}]
		},
		'DetonateCallsKill': {
			name: 'DetonateCallsKill',
			type: 'boolean',
			description: 'Whether detonation calls kill',
			requiredValues: [{
				type: kindOfs_t.PROJECTILE
			}]
		},
		'OrientToFlightPath': {
			name: 'OrientToFlightPath',
			type: 'boolean',
			description: 'Whether to orient to the flight path',
			requiredValues: [{
				type: kindOfs_t.PROJECTILE
			}]
		},
		'FirstHeight': {
			name: 'FirstHeight',
			type: 'integer',
			description: 'The first height',
			requiredValues: [{
				type: kindOfs_t.PROJECTILE
			}]
		},
		'FirstPercentIndent': {
			name: 'FirstPercentIndent',
			type: 'percent',
			description: 'The first percent indent',
			requiredValues: [{
				type: kindOfs_t.PROJECTILE
			}]
		},
		'SecondHeight': {
			name: 'SecondHeight',
			type: 'integer',
			description: 'The second height',
			requiredValues: [{
				type: kindOfs_t.PROJECTILE
			}]
		},
		'SecondPercentIndent': {
			name: 'SecondPercentIndent',
			type: 'percent',
			description: 'The second percent indent',
			requiredValues: [{
				type: kindOfs_t.PROJECTILE
			}]
		},
		'GarrisonHitKillRequiredKindOf': {
			name: 'GarrisonHitKillRequiredKindOf',
			type: 'string',
			description: 'The kind of to require for garrison hit kill',
			validValues: Object.values(kindOfs_t),
			numberOfValues: [-1],
			requiredValues: [{
				type: kindOfs_t.PROJECTILE
			}]
		},
		'GarrisonHitKillForbiddenKindOf': {
			name: 'GarrisonHitKillForbiddenKindOf',
			type: 'string',
			description: 'The kind of to forbid for garrison hit kill',
			validValues: Object.values(kindOfs_t),
			numberOfValues: [-1],
			requiredValues: [{
				type: kindOfs_t.PROJECTILE
			}]
		},
		'GarrisonHitKillCount': {
			name: 'GarrisonHitKillCount',
			type: 'integer',
			description: 'The number of hits to require for garrison hit kill',
			requiredValues: [{
				type: kindOfs_t.PROJECTILE
			}]
		},
		'GarrisonHitKillFX': {
			name: 'GarrisonHitKillFX',
			type: IniTypes_t.FXLIST,
			description: 'The FX list to use for garrison hit kill',
			requiredValues: [{
				type: kindOfs_t.PROJECTILE
			}]
		},
		'FlightPathAdjustDistPerSecond': {
			name: 'FlightPathAdjustDistPerSecond',
			type: 'float',
			description: 'The distance to adjust per second',
			requiredValues: [{
				type: kindOfs_t.PROJECTILE
			}]
		}
	},
	[BehaviorModule_t.DYNAMIC_GEOMETRY_INFO_UPDATE]: {
		'InitialDelay': {
			name: 'InitialDelay',
			type: 'integer',
			description: 'The initial delay'
		},
		'InitialHeight': {
			name: 'InitialHeight',
			type: 'float',
			description: 'The initial height'
		},
		'InitialMajorRadius': {
			name: 'InitialMajorRadius',
			type: 'float',
			description: 'The initial major radius'
		},
		'InitialMinorRadius': {
			name: 'InitialMinorRadius',
			type: 'float',
			description: 'The initial minor radius'
		},
		'FinalHeight': {
			name: 'FinalHeight',
			type: 'float',
			description: 'The final height'
		},
		'FinalMajorRadius': {
			name: 'FinalMajorRadius',
			type: 'float',
			description: 'The final major radius'
		},
		'FinalMinorRadius': {
			name: 'FinalMinorRadius',
			type: 'float',
			description: 'The final minor radius'
		},
		'TransitionTime': {
			name: 'TransitionTime',
			type: 'integer',
			description: 'The transition time'
		},
		'ReverseAtTransitionTime': {
			name: 'ReverseAtTransitionTime',
			type: 'boolean',
			description: 'Whether to reverse at the transition time'
		}
	},
	[BehaviorModule_t.DYNAMIC_SHROUD_CLEARING_RANGE_UPDATE]: {},
	[BehaviorModule_t.EJECT_PILOT_DIE]: {
		'DeathTypes': {
			name: 'DeathTypes',
			type: 'string',
			description: 'The death types to create crates',
			validValues: Object.values(DeathType_t),
			numberOfValues: [-1]
		},
		'ExemptStatus': {
			name: 'ExemptStatus',
			type: 'string',
			description: 'The status bits to exempt',
			validValues: Object.values(Status_t),
			numberOfValues: [-1]
		},
		'GroundCreationList': {
			name: 'GroundCreationList',
			type: IniTypes_t.OBJECT_CREATION_LIST,
			description: 'The object creation list to use for ground'
		},
		'AirCreationList': {
			name: 'AirCreationList',
			type: IniTypes_t.OBJECT_CREATION_LIST,
			description: 'The object creation list to use for air'
		},
		'VeterancyLevels': {
			name: 'VeterancyLevels',
			type: 'string',
			description: 'The veterancy levels to use',
			validValues: Object.values(VeterancyTypes_t),
			numberOfValues: [-1]
		}
	},
	[BehaviorModule_t.EMP_UPDATE]: {
		'DisabledDuration': {
			name: 'DisabledDuration',
			type: 'integer',
			description: 'The duration to disable'
		},
		'Lifetime': {
			name: 'Lifetime',
			type: 'integer',
			description: 'The lifetime'
		},
		'StartColor': {
			name: 'StartColor',
			type: ['float', 'float', 'float'],
			description: 'The start color',
			prefix: ['r:', 'g:', 'b:']
		},
		'StartFadeTime': {
			name: 'StartFadeTime',
			type: 'integer',
			description: 'The start fade time'
		},
		'StartScale': {
			name: 'StartScale',
			type: 'float',
			description: 'The start scale'
		},
		'EndColor': {
			name: 'EndColor',
			type: ['float', 'float', 'float'],
			description: 'The end color',
			prefix: ['r:', 'g:', 'b:']
		},
		'TargetScaleMin': {
			name: 'TargetScaleMin',
			type: 'float',
			description: 'The minimum target scale'
		},
		'TargetScaleMax': {
			name: 'TargetScaleMax',
			type: 'float',
			description: 'The maximum target scale'
		},
		'DisableFXParticleSystem': {
			name: 'DisableFXParticleSystem',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The particle system to disable'
		},
		'SparksPerCubicFoot': {
			name: 'SparksPerCubicFoot',
			type: 'integer',
			description: 'The number of sparks per cubic foot'
		},
		'DoesNotAffectMyOwnBuildings': {
			name: 'DoesNotAffectMyOwnBuildings',
			type: 'boolean',
			description: 'Whether to not affect my own buildings'
		},
		'DoesNotAffect': {
			name: 'DoesNotAffect',
			type: 'string',
			description: 'Whether to not affect',
			validValues: ['ALLIES', 'ENEMIES', 'NEUTRALS', 'SELF'],
			numberOfValues: [-1],
			ignoreCase: true
		},
		'EffectRadius': {
			name: 'EffectRadius',
			type: 'integer',
			description: 'The effect radius'
		},
		'VictimForbiddenKindOf': {
			name: 'VictimForbiddenKindOf',
			type: 'string',
			description: 'The kind of to forbid',
			validValues: Object.values(kindOfs_t),
			numberOfValues: [-1]
		},
		'VictimRequiredKindOf': {
			name: 'VictimRequiredKindOf',
			type: 'string',
			description: 'The kind of to require',
			validValues: Object.values(kindOfs_t),
			numberOfValues: [-1]
		}
	},
	[BehaviorModule_t.ENEMY_NEAR_UPDATE]: {},
	[BehaviorModule_t.EXPERIENCE_SCALAR_UPGRADE]: {
		...baseUpgradeProperties,
		'AdXPScalar': {
			name: 'AdXPScalar',
			type: 'float',
			description: 'The XP scalar, 0.5 means 50% increase, 1.0 means 100% increase in bonus. So, if you specify the number \'0.25\', it would mean a 25% increase in EXP bonus.'
		}
	},
	[BehaviorModule_t.FIRE_SPREAD_UPDATE]: {
		'OCLEmbers': {
			name: 'OCLEmbers',
			type: IniTypes_t.OBJECT_CREATION_LIST,
			description: 'The object creation list to use for members'
		},
		'MinSpreadDelay': {
			name: 'MinSpreadDelay',
			type: 'integer',
			description: 'The minimum spread delay'
		},
		'MaxSpreadDelay': {
			name: 'MaxSpreadDelay',
			type: 'integer',
			description: 'The maximum spread delay'
		},
		'SpreadTryRange': {
			name: 'SpreadTryRange',
			type: 'float',
			description: 'The spread try range'
		}
	},
	[BehaviorModule_t.FIRESTORM_DYNAMIC_GEOMETRY_INFO_UPDATE]: {
		'InitialDelay': {
			name: 'InitialDelay',
			type: 'integer',
			description: 'The initial delay'
		},
		'InitialHeight': {
			name: 'InitialHeight',
			type: 'float',
			description: 'The initial height'
		},
		'InitialMajorRadius': {
			name: 'InitialMajorRadius',
			type: 'float',
			description: 'The initial major radius'
		},
		'InitialMinorRadius': {
			name: 'InitialMinorRadius',
			type: 'float',
			description: 'The initial minor radius'
		},
		'FinalHeight': {
			name: 'FinalHeight',
			type: 'float',
			description: 'The final height'
		},
		'FinalMajorRadius': {
			name: 'FinalMajorRadius',
			type: 'float',
			description: 'The final major radius'
		},
		'FinalMinorRadius': {
			name: 'FinalMinorRadius',
			type: 'float',
			description: 'The final minor radius'
		},
		'TransitionTime': {
			name: 'TransitionTime',
			type: 'integer',
			description: 'The transition time'
		},
		'ReverseAtTransitionTime': {
			name: 'ReverseAtTransitionTime',
			type: 'boolean',
			description: 'Whether to reverse at the transition time'
		},
		'ScorchSize': {
			name: 'ScorchSize',
			type: 'float',
			description: 'The scorch size'
		},
		'ParticleOffsetZ': {
			name: 'ParticleOffsetZ',
			type: 'float',
			description: 'The particle offset Z'
		},
		'ParticleSystem1': {
			name: 'ParticleSystem1',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The particle system 1'
		},
		'ParticleSystem2': {
			name: 'ParticleSystem2',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The particle system 2'
		},
		'ParticleSystem3': {
			name: 'ParticleSystem3',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The particle system 3'
		},
		'ParticleSystem4': {
			name: 'ParticleSystem4',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The particle system 4'
		},
		'ParticleSystem5': {
			name: 'ParticleSystem5',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The particle system 5'
		},
		'ParticleSystem6': {
			name: 'ParticleSystem6',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The particle system 6'
		},
		'ParticleSystem7': {
			name: 'ParticleSystem7',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The particle system 7'
		},
		'ParticleSystem8': {
			name: 'ParticleSystem8',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The particle system 8'
		},
		'ParticleSystem9': {
			name: 'ParticleSystem9',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The particle system 9'
		},
		'ParticleSystem10': {
			name: 'ParticleSystem10',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The particle system 10'
		},
		'ParticleSystem11': {
			name: 'ParticleSystem11',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The particle system 11'
		},
		'ParticleSystem12': {
			name: 'ParticleSystem12',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The particle system 12'
		},
		'ParticleSystem13': {
			name: 'ParticleSystem13',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The particle system 13'
		},
		'ParticleSystem14': {
			name: 'ParticleSystem14',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The particle system 14'
		},
		'ParticleSystem15': {
			name: 'ParticleSystem15',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The particle system 15'
		},
		'ParticleSystem16': {
			name: 'ParticleSystem16',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The particle system 16'
		},
		'FXList': {
			name: 'FXList',
			type: IniTypes_t.FXLIST,
			description: 'The FX list'
		},
		'DelayBetweenDamageFrames': {
			name: 'DelayBetweenDamageFrames',
			type: 'integer',
			description: 'The delay between damage frames'
		},
		'MaxHeightForDamage': {
			name: 'MaxHeightForDamage',
			type: 'integer',
			description: 'The maximum height for damage'
		},
		'DamageAmount': {
			name: 'DamageAmount',
			type: 'integer',
			description: 'The damage amount'
		}
	},
	[BehaviorModule_t.FIRE_OCL_AFTER_WEAPON_COOLDOWN_UPDATE]: {
		'WeaponSlot': {
			name: 'WeaponSlot',
			type: 'string',
			description: 'The weapon slot',
			validValues: Object.values(WeaponSlot_t)
		},
		'TriggeredBy': {
			name: 'TriggeredBy',
			type: IniTypes_t.UPGRADE,
			description: 'The upgrade to trigger by'
		},
		'ConflictsWith': {
			name: 'ConflictsWith',
			type: IniTypes_t.UPGRADE,
			description: 'The upgrade to conflict with'
		},
		'OCL': {
			name: 'OCL',
			type: IniTypes_t.OBJECT_CREATION_LIST,
			description: 'The object creation list'
		},
		'MinShotsToCreateOCL': {
			name: 'MinShotsToCreateOCL',
			type: 'integer',
			description: 'The minimum shots to create OCL'
		},
		'OCLLifetimePerSecond': {
			name: 'OCLLifetimePerSecond',
			type: 'integer',
			description: 'The OCL lifetime per second'
		},
		'OCLLifetimeMaxCap': {
			name: 'OCLLifetimeMaxCap',
			type: 'integer',
			description: 'The OCL lifetime max cap'
		}
	},
	[BehaviorModule_t.FIRE_WEAPON_COLLIDE]: {
		'CollideWeapon': {
			name: 'CollideWeapon',
			type: IniTypes_t.WEAPON,
			description: 'The weapon to collide with'
		},
		'ForbiddenStatus': {
			name: 'ForbiddenStatus',
			type: 'string',
			description: 'The status to forbid',
			validValues: Object.values(Status_t)
		},
		'RequiredStatus': {
			name: 'RequiredStatus',
			type: 'string',
			description: 'The status to require',
			validValues: Object.values(Status_t)
		}
	},
	[BehaviorModule_t.FIRE_WEAPON_WHEN_DAMAGED_BEHAVIOR]: {
		'StartsActive': {
			name: 'StartsActive',
			type: 'boolean',
			description: 'Whether to start active'
		},
		'TriggeredBy': {
			name: 'TriggeredBy',
			type: IniTypes_t.UPGRADE,
			description: 'The upgrade to trigger by'
		},
		'ConflictsWith': {
			name: 'ConflictsWith',
			type: IniTypes_t.UPGRADE,
			description: 'The upgrade to conflict with'
		},
		'ReactionWeaponPristine': {
			name: 'ReactionWeaponPristine',
			type: IniTypes_t.WEAPON,
			description: 'The reaction weapon pristine'
		},
		'ReactionWeaponDamaged': {
			name: 'ReactionWeaponDamaged',
			type: IniTypes_t.WEAPON,
			description: 'The reaction weapon damaged'
		},
		'ReactionWeaponReallyDamaged': {
			name: 'ReactionWeaponReallyDamaged',
			type: IniTypes_t.WEAPON,
			description: 'The reaction weapon really damaged'
		},
		'ReactionWeaponRubble': {
			name: 'ReactionWeaponRubble',
			type: IniTypes_t.WEAPON,
			description: 'The reaction weapon rubble'
		},
		'ContinuousWeaponPristine': {
			name: 'ContinuousWeaponPristine',
			type: IniTypes_t.WEAPON,
			description: 'The continuous weapon pristine'
		},
		'ContinuousWeaponDamaged': {
			name: 'ContinuousWeaponDamaged',
			type: IniTypes_t.WEAPON,
			description: 'The continuous weapon damaged'
		},
		'ContinuousWeaponReallyDamaged': {
			name: 'ContinuousWeaponReallyDamaged',
			type: IniTypes_t.WEAPON,
			description: 'The continuous weapon really damaged'
		},
		'ContinuousWeaponRubble': {
			name: 'ContinuousWeaponRubble',
			type: IniTypes_t.WEAPON,
			description: 'The continuous weapon rubble'
		},
		'DamageTypes': {
			name: 'DamageTypes',
			type: 'string',
			description: 'The damage types',
			validValues: Object.values(DamageTypes_t)
		},
		'DamageAmount': {
			name: 'DamageAmount',
			type: 'integer',
			description: 'The damage amount'
		}
	},
	[BehaviorModule_t.FIRE_WEAPON_WHEN_DEAD_BEHAVIOR]: {
		...baseUpgradeProperties,
		'DeathTypes': {
			name: 'DeathTypes',
			type: 'string',
			description: 'The death types',
			validValues: Object.values(DeathType_t)
		},
		'RequiredStatus': {
			name: 'RequiredStatus',
			type: 'string',
			description: 'The status to require',
			validValues: Object.values(Status_t)
		},
		'ExemptStatus': {
			name: 'ExemptStatus',
			type: 'string',
			description: 'The status to exempt',
			validValues: Object.values(Status_t)
		},
		'DeathWeapon': {
			name: 'DeathWeapon',
			type: IniTypes_t.WEAPON,
			description: 'The death weapon'
		},
		'StartsActive': {
			name: 'StartsActive',
			type: 'boolean',
			description: 'Whether to start active'
		}
	},
	[BehaviorModule_t.FIRE_WEAPON_UPDATE]: {
		'Weapon': {
			name: 'Weapon',
			type: IniTypes_t.WEAPON,
			description: 'The weapon to fire'
		},
		'ExclusiveWeaponDelay': {
			name: 'ExclusiveWeaponDelay',
			type: 'integer',
			description: 'The exclusive weapon delay'
		},
		'InitialDelay': {
			name: 'InitialDelay',
			type: 'integer',
			description: 'The initial delay'
		}
	},
	[BehaviorModule_t.FIRE_WEAPON_POWER]: {
		'SpecialPowerTemplate': {
			name: 'SpecialPowerTemplate',
			type: IniTypes_t.SPECIAL_POWER,
			description: 'The special power template'
		},
		'MaxShotsToFire': {
			name: 'MaxShotsToFire',
			type: 'integer',
			description: 'The maximum shots to fire'
		}
	},
	[BehaviorModule_t.FLIGHT_DECK_BEHAVIOR]: {
		'NumRunways': {
			name: 'NumRunways',
			type: 'float',
			description: 'The number of runways'
		},
		'NumSpacesPerRunway': {
			name: 'NumSpacesPerRunway',
			type: 'float',
			description: 'The number of spaces per runway'
		},
		'Runway1Spaces': {
			name: 'Runway1Spaces',
			type: 'string',
			description: 'The spaces for runway 1'
		},
		'Runway1Takeoff': {
			name: 'Runway1Takeoff',
			type: 'string',
			description: 'The takeoff for runway 1'
		},
		'Runway1Landing': {
			name: 'Runway1Landing',
			type: 'string',
			description: 'The landing for runway 1'
		},
		'Runway1Taxi': {
			name: 'Runway1Taxi',
			type: 'string',
			description: 'The taxi for runway 1'
		},
		'Runway1Creation': {
			name: 'Runway1Creation',
			type: 'string',
			description: 'The creation for runway 1'
		},
		'Runway1CatapultSystem': {
			name: 'Runway1CatapultSystem',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The catapult system for runway 1'
		},
		'Runway2Spaces': {
			name: 'Runway2Spaces',
			type: 'string',
			description: 'The spaces for runway 2'
		},
		'Runway2Takeoff': {
			name: 'Runway2Takeoff',
			type: 'string',
			description: 'The takeoff for runway 2'
		},
		'Runway2Landing': {
			name: 'Runway2Landing',
			type: 'string',
			description: 'The landing for runway 2'
		},
		'Runway2Taxi': {
			name: 'Runway2Taxi',
			type: 'string',
			description: 'The taxi for runway 2'
		},
		'Runway2Creation': {
			name: 'Runway2Creation',
			type: 'string',
			description: 'The creation for runway 2'
		},
		'Runway2CatapultSystem': {
			name: 'Runway2CatapultSystem',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The catapult system for runway 2'
		},
		'HealAmountPerSecond': {
			name: 'HealAmountPerSecond',
			type: 'integer',
			description: 'The heal amount per second'
		},
		'ApproachHeight': {
			name: 'ApproachHeight',
			type: 'integer',
			description: 'The approach height'
		},
		'LandingDeckHeightOffset': {
			name: 'LandingDeckHeightOffset',
			type: 'integer',
			description: 'The landing deck height offset'
		},
		'ParkingCleanupPeriod': {
			name: 'ParkingCleanupPeriod',
			type: 'integer',
			description: 'The parking cleanup period'
		},
		'HumanFollowPeriod': {
			name: 'HumanFollowPeriod',
			type: 'integer',
			description: 'The human follow period'
		},
		'PayloadTemplate': {
			name: 'PayloadTemplate',
			type: IniTypes_t.OBJECT,
			description: 'The payload template'
		},
		'ReplacementDelay': {
			name: 'ReplacementDelay',
			type: 'integer',
			description: 'The replacement delay'
		},
		'DockAnimationDelay': {
			name: 'DockAnimationDelay',
			type: 'integer',
			description: 'The dock animation delay'
		},
		'LaunchWaveDelay': {
			name: 'LaunchWaveDelay',
			type: 'integer',
			description: 'The launch wave delay'
		},
		'LaunchRampDelay': {
			name: 'LaunchRampDelay',
			type: 'integer',
			description: 'The launch ramp delay'
		},
		'LowerRampDelay': {
			name: 'LowerRampDelay',
			type: 'integer',
			description: 'The lower ramp delay'
		},
		'CatapultFireDelay': {
			name: 'CatapultFireDelay',
			type: 'integer',
			description: 'The catapult fire delay'
		}
	},
	[BehaviorModule_t.FLAMMABLE_UPDATE]: {
		'BurnedDelay': {
			name: 'BurnedDelay',
			type: 'integer',
			description: 'The burned delay'
		},
		'BurningSoundName': {
			name: 'BurningSoundName',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The burning sound name'
		},
		'FlameDamageLimit': {
			name: 'FlameDamageLimit',
			type: 'integer',
			description: 'The flame damage limit'
		},
		'FlameDamageExpiration': {
			name: 'FlameDamageExpiration',
			type: 'integer',
			description: 'The flame damage expiration'
		},
		'AflameDuration': {
			name: 'AflameDuration',
			type: 'integer',
			description: 'The aflame duration'
		},
		'AflameDamageAmount': {
			name: 'AflameDamageAmount',
			type: 'integer',
			description: 'The aflame damage amount'
		},
		'AflameDamageDelay': {
			name: 'AflameDamageDelay',
			type: 'integer',
			description: 'The aflame damage delay'
		}
	},
	[BehaviorModule_t.FLOAT_UPDATE]: {
		'Enabled': {
			name: 'Enabled',
			type: 'boolean',
			description: 'Whether the object floats'
		}
	},
	[BehaviorModule_t.FX_LIST_DIE]: {
		'DeathTypes': {
			name: 'DeathTypes',
			type: 'string',
			description: 'The death types',
			validValues: Object.values(DeathType_t)
		},
		'DeathFX': {
			name: 'DeathFX',
			type: IniTypes_t.FXLIST,
			description: 'The death FX'
		},
		'OrientToObject': {
			name: 'OrientToObject',
			type: 'boolean',
			description: 'Whether to orient to the object'
		},
		'RequiredStatus': {
			name: 'RequiredStatus',
			type: 'string',
			description: 'The required status',
			validValues: Object.values(Status_t)
		},
		'ExemptStatus': {
			name: 'ExemptStatus',
			type: 'string',
			description: 'The exempt status',
			validValues: Object.values(Status_t)
		},
		'StartsActive': {
			name: 'StartsActive',
			type: 'boolean',
			description: 'Whether the object starts active'
		},
		'TriggeredBy': {
			name: 'TriggeredBy',
			type: 'string',
			description: 'The triggered by'
		},
		'ConflictsWith': {
			name: 'ConflictsWith',
			type: 'string',
			description: 'The conflicts with'
		},
		'RequiresAllTriggers': {
			name: 'RequiresAllTriggers',
			type: 'boolean',
			description: 'Whether all triggers are required'
		}
	},
	[BehaviorModule_t.GARRISON_CONTAIN]: {
		'ContainMax': {
			name: 'ContainMax',
			type: 'integer',
			description: 'The contain max',
			requiredValues: [{
				type: BodyModule_t.HIVESTRUCTUREBODY
			}]
		},
		'EnterSound': {
			name: 'EnterSound',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The enter sound'
		},
		'ExitSound': {
			name: 'ExitSound',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The exit sound'
		},
		'DamagePercentToUnits': {
			name: 'DamagePercentToUnits',
			type: 'percent',
			description: 'The damage percent to units'
		},
		'MobileGarrison': {
			name: 'MobileGarrison',
			type: 'boolean',
			description: 'Whether the garrison is mobile'
		},
		'InitialRoster': {
			name: 'InitialRoster',
			type: [IniTypes_t.OBJECT, 'integer'],
			description: 'The initial roster'
		},
		'ImmuneToClearBuildingAttacks': {
			name: 'ImmuneToClearBuildingAttacks',
			type: 'boolean',
			description: 'Whether the garrison is immune to clear building attacks'
		},
		'IsEnclosingContainer': {
			name: 'IsEnclosingContainer',
			type: 'boolean',
			description: 'Whether the garrison is an enclosing container'
		},
		'HealObjects': {
			name: 'HealObjects',
			type: 'boolean',
			description: 'Whether the garrison heals objects'
		},
		'TimeForFullHeal': {
			name: 'TimeForFullHeal',
			type: 'integer',
			description: 'The time for full heal'
		},
		'PassengersAllowedToFire': {
			name: 'PassengersAllowedToFire',
			type: 'boolean',
			description: 'Whether passengers are allowed to fire'
		},
		'AllowInsideKindOf': {
			name: 'AllowInsideKindOf',
			type: 'string',
			description: 'The allow inside kind of',
			validValues: Object.values(kindOfs_t)
		},
		'ForbidInsideKindOf': {
			name: 'ForbidInsideKindOf',
			type: 'string',
			description: 'The forbid inside kind of',
			validValues: Object.values(kindOfs_t)
		},
		'AllowAlliesInside': {
			name: 'AllowAlliesInside',
			type: 'boolean',
			description: 'Whether allies are allowed inside'
		},
		'AllowEnemiesInside': {
			name: 'AllowEnemiesInside',
			type: 'boolean',
			description: 'Whether enemies are allowed inside'
		},
		'AllowNeutralInside': {
			name: 'AllowNeutralInside',
			type: 'boolean',
			description: 'Whether neutral objects are allowed inside'
		}
	},
	[BehaviorModule_t.GRANT_STEALTH_BEHAVIOR]: {
		'StartRadius': {
			name: 'StartRadius',
			type: 'integer',
			description: 'The start radius'
		},
		'FinalRadius': {
			name: 'FinalRadius',
			type: 'integer',
			description: 'The final radius'
		},
		'RadiusGrowRate': {
			name: 'RadiusGrowRate',
			type: 'integer',
			description: 'The radius grow rate'
		},
		'RadiusGrowRateTime': {
			name: 'RadiusGrowRateTime',
			type: 'integer',
			description: 'The radius grow rate time'
		},
		'RadiusParticleSystemName': {
			name: 'RadiusParticleSystemName',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The radius particle system name'
		},
		'KindOf': {
			name: 'KindOf',
			type: 'string',
			description: 'The kind of',
			validValues: Object.values(kindOfs_t)
		},
		'ForbiddenKindOf': {
			name: 'ForbiddenKindOf',
			type: 'string',
			description: 'The forbidden kind of',
			validValues: Object.values(kindOfs_t)
		}
	},
	[BehaviorModule_t.GENERATE_MINEFIELD_BEHAVIOR]: {
		'MineName': {
			name: 'MineName',
			type: IniTypes_t.OBJECT,
			description: 'The mine name'
		},
		'GenerationFX': {
			name: 'GenerationFX',
			type: IniTypes_t.FXLIST,
			description: 'The generation FX'
		},
		'DistanceAroundObject': {
			name: 'DistanceAroundObject',
			type: 'integer',
			description: 'The distance around object'
		},
		'MinesPerSquareFoot': {
			name: 'MinesPerSquareFoot',
			type: 'integer',
			description: 'The mines per square foot'
		},
		'GenerateOnlyOnDeath': {
			name: 'GenerateOnlyOnDeath',
			type: 'boolean',
			description: 'Whether to generate only on death'
		},
		'BorderOnly': {
			name: 'BorderOnly',
			type: 'boolean',
			description: 'Whether to generate only on the border'
		},
		'SmartBorder': {
			name: 'SmartBorder',
			type: 'boolean',
			description: 'Whether to use smart border'
		},
		'SmartBorderSkipInterior': {
			name: 'SmartBorderSkipInterior',
			type: 'boolean',
			description: 'Whether to skip interior for smart border'
		},
		'AlwaysCircular': {
			name: 'AlwaysCircular',
			type: 'boolean',
			description: 'Whether to always be circular'
		},
		'RandomJitter': {
			name: 'RandomJitter',
			type: 'integer',
			description: 'The random jitter'
		},
		'SkipIfThisMuchUnderStructure': {
			name: 'SkipIfThisMuchUnderStructure',
			type: 'integer',
			description: 'Whether to skip if this much under structure'
		},
		'Upgradable': {
			name: 'Upgradable',
			type: 'boolean',
			description: 'Whether the minefield is upgradable'
		},
		'UpgradedMineName': {
			name: 'UpgradedMineName',
			type: IniTypes_t.OBJECT,
			description: 'The upgraded mine name'
		},
		'UpgradedTriggeredBy': {
			name: 'UpgradedTriggeredBy',
			type: IniTypes_t.UPGRADE,
			description: 'The upgraded triggered by'
		}
	},
	[BehaviorModule_t.GRANT_UPGRADE_CREATE]: {
		'UpgradeToGrant': {
			name: 'UpgradeToGrant',
			type: IniTypes_t.UPGRADE,
			description: 'The upgrade to grant'
		},
		'ExemptStatus': {
			name: 'ExemptStatus',
			type: 'string',
			description: 'The exempt status',
			validValues: Object.values(Status_t)
		}
	},
	[BehaviorModule_t.GRANT_SCIENCE_UPGRADE]: {
		'GrantScience': {
			name: 'GrantScience',
			type: IniTypes_t.SCIENCE,
			description: 'The science to grant'
		},
		'TriggeredBy': {
			name: 'TriggeredBy',
			type: IniTypes_t.UPGRADE,
			description: 'The triggered by'
		}
	},
	[BehaviorModule_t.INTERNET_HACK_CONTAIN]: {},
	[BehaviorModule_t.HACK_INTERNET_AI_UPDATE]: {
		'UnpackTime': {
			name: 'UnpackTime',
			type: 'integer',
			description: 'The unpack time'
		},
		'PackTime': {
			name: 'PackTime',
			type: 'integer',
			description: 'The pack time'
		},
		'PackUnpackVariationFactor': {
			name: 'PackUnpackVariationFactor',
			type: 'float',
			description: 'The pack unpack variation factor'
		},
		'CashUpdateDelay': {
			name: 'CashUpdateDelay',
			type: 'integer',
			description: 'The cash update delay'
		},
		'CashUpdateDelayFast': {
			name: 'CashUpdateDelayFast',
			type: 'integer',
			description: 'The cash update delay fast'
		},
		'RegularCashAmount': {
			name: 'RegularCashAmount',
			type: 'integer',
			description: 'The regular cash amount'
		},
		'VeteranCashAmount': {
			name: 'VeteranCashAmount',
			type: 'integer',
			description: 'The veteran cash amount'
		},
		'EliteCashAmount': {
			name: 'EliteCashAmount',
			type: 'integer',
			description: 'The elite cash amount'
		},
		'HeroicCashAmount': {
			name: 'HeroicCashAmount',
			type: 'integer',
			description: 'The heroic cash amount'
		},
		'XpPerCashUpdate': {
			name: 'XpPerCashUpdate',
			type: 'integer',
			description: 'The xp per cash update'
		}
	},
	[BehaviorModule_t.HEAL_CRATE_COLLIDE]: {
		'RequiredKindOf': {
			name: 'RequiredKindOf',
			type: 'string',
			description: 'The required kind of',
			validValues: Object.values(kindOfs_t)
		},
		'ForbiddenKindOf': {
			name: 'ForbiddenKindOf',
			type: 'string',
			description: 'The forbidden kind of',
			validValues: Object.values(kindOfs_t)
		},
		'ForbidOwnerPlayer': {
			name: 'ForbidOwnerPlayer',
			type: 'boolean',
			description: 'Whether to forbid owner player'
		},
		'HumanOnly': {
			name: 'HumanOnly',
			type: 'boolean',
			description: 'Whether only humans can heal'
		},
		'BuildingPickup': {
			name: 'BuildingPickup',
			type: 'boolean',
			description: 'Whether buildings can pickup'
		},
		'PickupScience': {
			name: 'PickupScience',
			type: IniTypes_t.SCIENCE,
			description: 'The pickup science'
		},
		'ExecuteFX': {
			name: 'ExecuteFX',
			type: IniTypes_t.FXLIST,
			description: 'The execute FX'
		},
		'ExecuteAnimation': {
			name: 'ExecuteAnimation',
			type: IniTypes_t.ANIMATION,
			description: 'The execute animation'
		},
		'ExecuteAnimationTime': {
			name: 'ExecuteAnimationTime',
			type: 'integer',
			description: 'The execute animation time'
		},
		'ExecuteAnimationZRise': {
			name: 'ExecuteAnimationZRise',
			type: 'integer',
			description: 'The execute animation z rise'
		},
		'ExecuteAnimationFades': {
			name: 'ExecuteAnimationFades',
			type: 'boolean',
			description: 'Whether the execute animation fades'
		}
	},
	[BehaviorModule_t.HEAL_CONTAIN]: {
		'ContainMax': {
			name: 'ContainMax',
			type: 'integer',
			description: 'The contain max'
		},
		'TimeForFullHeal': {
			name: 'TimeForFullHeal',
			type: 'integer',
			description: 'The time for full heal'
		},
		'EnterSound': {
			name: 'EnterSound',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The enter sound'
		},
		'ExitSound': {
			name: 'ExitSound',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The exit sound'
		},
		'AllowInsideKindOf': {
			name: 'AllowInsideKindOf',
			type: 'string',
			description: 'The allow inside kind of',
			validValues: Object.values(kindOfs_t)
		},
		'ForbidInsideKindOf': {
			name: 'ForbidInsideKindOf',
			type: 'string',
			description: 'The forbid inside kind of',
			validValues: Object.values(kindOfs_t)
		},
		'AllowAlliesInside': {
			name: 'AllowAlliesInside',
			type: 'boolean',
			description: 'Whether to allow allies inside'
		},
		'AllowEnemiesInside': {
			name: 'AllowEnemiesInside',
			type: 'boolean',
			description: 'Whether to allow enemies inside'
		},
		'AllowNeutralInside': {
			name: 'AllowNeutralInside',
			type: 'boolean',
			description: 'Whether to allow neutral inside'
		}
	},
	[BehaviorModule_t.HEIGHT_DIE_UPDATE]: {
		'TargetHeight': {
			name: 'TargetHeight',
			type: 'float',
			description: 'The target height'
		},
		'TargetHeightIncludesStructures': {
			name: 'TargetHeightIncludesStructures',
			type: 'boolean',
			description: 'Whether the target height includes structures'
		},
		'OnlyWhenMovingDown': {
			name: 'OnlyWhenMovingDown',
			type: 'boolean',
			description: 'Whether to only move down'
		},
		'InitialDelay': {
			name: 'InitialDelay',
			type: 'integer',
			description: 'The initial delay'
		},
		'SnapToGroundOnDeath': {
			name: 'SnapToGroundOnDeath',
			type: 'boolean',
			description: 'Whether to snap to ground on death'
		},
		'DestroyAttachedParticlesAtHeight': {
			name: 'DestroyAttachedParticlesAtHeight',
			type: 'float',
			description: 'The destroy attached particles at height'
		}
	},
	[BehaviorModule_t.HELICOPTER_SLOW_DEATH_BEHAVIOR]: {
		'DestructionDelay': {
			name: 'DestructionDelay',
			type: 'integer',
			description: 'The destruction delay'
		},
		'DestructionDelayVariance': {
			name: 'DestructionDelayVariance',
			type: 'integer',
			description: 'The destruction delay variance'
		},
		'DestructionAltitude': {
			name: 'DestructionAltitude',
			type: 'integer',
			description: 'The destruction altitude'
		},
		'SpiralOrbitTurnRate': {
			name: 'SpiralOrbitTurnRate',
			type: 'float',
			description: 'The spiral orbit turn rate'
		},
		'SpiralOrbitForwardSpeed': {
			name: 'SpiralOrbitForwardSpeed',
			type: 'float',
			description: 'The spiral orbit forward speed'
		},
		'SpiralOrbitForwardSpeedDamping': {
			name: 'SpiralOrbitForwardSpeedDamping',
			type: 'float',
			description: 'The spiral orbit forward speed damping'
		},
		'MinSelfSpin': {
			name: 'MinSelfSpin',
			type: 'integer',
			description: 'The min self spin'
		},
		'MaxSelfSpin': {
			name: 'MaxSelfSpin',
			type: 'integer',
			description: 'The max self spin'
		},
		'SelfSpinUpdateDelay': {
			name: 'SelfSpinUpdateDelay',
			type: 'integer',
			description: 'The self spin update delay'
		},
		'SelfSpinUpdateAmount': {
			name: 'SelfSpinUpdateAmount',
			type: 'integer',
			description: 'The self spin update amount'
		},
		'FallHowFast': {
			name: 'FallHowFast',
			type: 'float',
			description: 'The fall how fast'
		},
		'MinBladeFlyOffDelay': {
			name: 'MinBladeFlyOffDelay',
			type: 'integer',
			description: 'The min blade fly off delay'
		},
		'MaxBladeFlyOffDelay': {
			name: 'MaxBladeFlyOffDelay',
			type: 'integer',
			description: 'The max blade fly off delay'
		},
		'AttachParticle': {
			name: 'AttachParticle',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The attach particle'
		},
		'AttachParticleBone': {
			name: 'AttachParticleBone',
			type: 'string',
			description: 'The attach particle bone'
		},
		'AttachParticleLoc': {
			name: 'AttachParticleLoc',
			type: ['string', 'string', 'string'],
			description: 'The attach particle loc',
			numberOfValues: [3],
			prefix: ['X:', 'Y:', 'Z:']
		},
		'BladeObjectName': {
			name: 'BladeObjectName',
			type: IniTypes_t.OBJECT,
			description: 'The blade object name'
		},
		'BladeBoneName': {
			name: 'BladeBoneName',
			type: 'string',
			description: 'The blade bone name'
		},
		'OCLEjectPilot': {
			name: 'OCLEjectPilot',
			type: IniTypes_t.OBJECT_CREATION_LIST,
			description: 'The ocl eject pilot'
		},
		'FXBlade': {
			name: 'FXBlade',
			type: IniTypes_t.FXLIST,
			description: 'The fx blade'
		},
		'OCLBlade': {
			name: 'OCLBlade',
			type: IniTypes_t.OBJECT_CREATION_LIST,
			description: 'The ocl blade'
		},
		'FXHitGround': {
			name: 'FXHitGround',
			type: IniTypes_t.FXLIST,
			description: 'The fx hit ground'
		},
		'OCLHitGround': {
			name: 'OCLHitGround',
			type: IniTypes_t.OBJECT_CREATION_LIST,
			description: 'The ocl hit ground'
		},
		'FXFinalBlowUp': {
			name: 'FXFinalBlowUp',
			type: IniTypes_t.FXLIST,
			description: 'The fx final blow up'
		},
		'OCLFinalBlowUp': {
			name: 'OCLFinalBlowUp',
			type: IniTypes_t.OBJECT_CREATION_LIST,
			description: 'The ocl final blow up'
		},
		'DelayFromGroundToFinalDeath': {
			name: 'DelayFromGroundToFinalDeath',
			type: 'integer',
			description: 'The delay from ground to final death'
		},
		'FinalRubbleObject': {
			name: 'FinalRubbleObject',
			type: IniTypes_t.OBJECT,
			description: 'The final rubble object'
		},
		'MaxBraking': {
			name: 'MaxBraking',
			type: 'integer',
			description: 'The max braking'
		},
		'SoundDeathLoop': {
			name: 'SoundDeathLoop',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The sound death loop'
		}
	},
	[BehaviorModule_t.HIJACKER_UPDATE]: {
		'ParachuteName': {
			name: 'ParachuteName',
			type: IniTypes_t.OBJECT,
			description: 'The parachute name'
		},
		'AttachToTargetBone': {
			name: 'AttachToTargetBone',
			type: 'string',
			description: 'The attach to target bone'
		},
		'OffsetZ': {
			name: 'OffsetZ',
			type: 'integer',
			description: 'The offset z'
		}
	},
	[BehaviorModule_t.HORDE_UPDATE]: {
		'UpdateRate': {
			name: 'UpdateRate',
			type: 'integer',
			description: 'The update rate'
		},
		'RubOffRadius': {
			name: 'RubOffRadius',
			type: 'integer',
			description: 'The rub off radius'
		},
		'AlliesOnly': {
			name: 'AlliesOnly',
			type: 'boolean',
			description: 'Whether to only count allies'
		},
		'ExactMatch': {
			name: 'ExactMatch',
			type: 'boolean',
			description: 'Whether to match exactly'
		},
		'Action': {
			name: 'Action',
			type: 'string',
			description: 'The action',
			validValues: WeaponBonuses
		},
		'KindOf': {
			name: 'KindOf',
			type: 'string',
			description: 'The kind of',
			validValues: Object.values(kindOfs_t)
		},
		'Count': {
			name: 'Count',
			type: 'integer',
			description: 'The count'
		},
		'AllowedNationalism': {
			name: 'AllowedNationalism',
			type: 'boolean',
			description: 'Whether to allow nationalism'
		},
		'FlagSubObjectNames': {
			name: 'FlagSubObjectNames',
			type: 'string',
			description: 'The flag sub object names'
		}
	},
	[BehaviorModule_t.HELIX_CONTAIN]: {
		'Slots': {
			name: 'Slots',
			type: 'integer',
			description: 'The slots'
		},
		'DamagePercentToUnits': {
			name: 'DamagePercentToUnits',
			type: 'percent',
			description: 'The damage percent to units'
		},
		'AllowInsideKindOf': {
			name: 'AllowInsideKindOf',
			type: 'string',
			description: 'The allow inside kind of',
			validValues: Object.values(kindOfs_t)
		},
		'ForbidInsideKindOf': {
			name: 'ForbidInsideKindOf',
			type: 'string',
			description: 'The forbid inside kind of',
			validValues: Object.values(kindOfs_t)
		},
		'AllowAlliesInside': {
			name: 'AllowAlliesInside',
			type: 'boolean',
			description: 'Whether to allow allies inside'
		},
		'AllowNeutralInside': {
			name: 'AllowNeutralInside',
			type: 'boolean',
			description: 'Whether to allow neutral inside'
		},
		'AllowEnemiesInside': {
			name: 'AllowEnemiesInside',
			type: 'boolean',
			description: 'Whether to allow enemies inside'
		},
		'ExitDelay': {
			name: 'ExitDelay',
			type: 'integer',
			description: 'The exit delay'
		},
		'NumberOfExitPaths': {
			name: 'NumberOfExitPaths',
			type: 'integer',
			description: 'The number of exit paths'
		},
		'GoAggressiveOnExit': {
			name: 'GoAggressiveOnExit',
			type: 'boolean',
			description: 'Whether to go aggressive on exit'
		},
		'ScatterNearbyOnExit': {
			name: 'ScatterNearbyOnExit',
			type: 'boolean',
			description: 'Whether to scatter nearby on exit'
		},
		'OrientLikeContainerOnExit': {
			name: 'OrientLikeContainerOnExit',
			type: 'boolean',
			description: 'Whether to orient like container on exit'
		},
		'KeepContainerVelocityOnExit': {
			name: 'KeepContainerVelocityOnExit',
			type: 'boolean',
			description: 'Whether to keep container velocity on exit'
		},
		'BurnedDeathToUnits': {
			name: 'BurnedDeathToUnits',
			type: 'boolean',
			description: 'Whether to burn death to units'
		},
		'ExitPitchRate': {
			name: 'ExitPitchRate',
			type: 'integer',
			description: 'The exit pitch rate'
		},
		'ExitBone': {
			name: 'ExitBone',
			type: 'string',
			description: 'The exit bone'
		},
		'DoorOpenTime': {
			name: 'DoorOpenTime',
			type: 'integer',
			description: 'The door open time'
		},
		'HealthRegen%PerSec': {
			name: 'HealthRegen%PerSec',
			type: 'percent',
			description: 'The health regen percent per sec'
		},
		'DestroyRidersWhoAreNotFreeToExit': {
			name: 'DestroyRidersWhoAreNotFreeToExit',
			type: 'boolean',
			description: 'Whether to destroy riders who are not free to exit'
		},
		'ResetMoodCheckTimeOnExit': {
			name: 'ResetMoodCheckTimeOnExit',
			type: 'boolean',
			description: 'Whether to reset mood check time on exit'
		},
		'ArmedRidersUpgradeMyWeaponSet': {
			name: 'ArmedRidersUpgradeMyWeaponSet',
			type: 'boolean',
			description: 'Whether to upgrade my weapon set'
		},
		'DelayExitInAir': {
			name: 'DelayExitInAir',
			type: 'boolean',
			description: 'Whether to delay exit in air'
		},
		'EnterSound': {
			name: 'EnterSound',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The enter sound'
		},
		'ExitSound': {
			name: 'ExitSound',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The exit sound'
		},
		'PassengersAllowedToFire': {
			name: 'PassengersAllowedToFire',
			type: 'boolean',
			description: 'Whether passengers are allowed to fire'
		},
		'PassengersInTurret': {
			name: 'PassengersInTurret',
			type: 'boolean',
			description: 'Whether passengers are in turret'
		},
		'WeaponBonusPassedToPassengers': {
			name: 'WeaponBonusPassedToPassengers',
			type: 'boolean',
			description: 'Whether to pass weapon bonus to passengers'
		},
		'PayloadTemplateName': {
			name: 'PayloadTemplateName',
			type: IniTypes_t.OBJECT,
			description: 'The payload template name'
		},
		'ShouldDrawPips': {
			name: 'ShouldDrawPips',
			type: 'boolean',
			description: 'Whether to draw pips'
		}
	},
	[BehaviorModule_t.INSTANT_DEATH_BEHAVIOR]: {
		'DeathTypes': {
			name: 'DeathTypes',
			type: 'string',
			description: 'The death types',
			validValues: Object.values(DeathType_t)
		},
		'FX': {
			name: 'FX',
			type: IniTypes_t.FXLIST,
			description: 'The fx'
		},
		'OCL': {
			name: 'OCL',
			type: IniTypes_t.OBJECT_CREATION_LIST,
			description: 'The ocl'
		},
		'Weapon': {
			name: 'Weapon',
			type: IniTypes_t.WEAPON,
			description: 'The weapon'
		},
		'RequiredStatus': {
			name: 'RequiredStatus',
			type: 'string',
			description: 'The required status',
			validValues: Object.values(Status_t)
		},
		'ExemptStatus': {
			name: 'ExemptStatus',
			type: 'string',
			description: 'The exempt status',
			validValues: Object.values(Status_t)
		}
	},
	[BehaviorModule_t.JET_AI_UPDATE]: {
		'OutOfAmmoDamagePerSecond': {
			name: 'OutOfAmmoDamagePerSecond',
			type: 'percent',
			description: 'The out of ammo damage per second'
		},
		'NeedsRunway': {
			name: 'NeedsRunway',
			type: 'boolean',
			description: 'Whether needs runway'
		},
		'KeepsParkingSpaceWhenAirborne': {
			name: 'KeepsParkingSpaceWhenAirborne',
			type: 'boolean',
			description: 'Whether keeps parking space when airborne'
		},
		'TakeoffDistForMaxLift': {
			name: 'TakeoffDistForMaxLift',
			type: 'percent',
			description: 'The takeoff dist for max lift'
		},
		'TakeoffPause': {
			name: 'TakeoffPause',
			type: 'integer',
			description: 'The takeoff pause'
		},
		'MinHeight': {
			name: 'MinHeight',
			type: 'integer',
			description: 'The min height'
		},
		'ParkingOffset': {
			name: 'ParkingOffset',
			type: 'integer',
			description: 'The parking offset'
		},
		'SneakyOffsetWhenAttacking': {
			name: 'SneakyOffsetWhenAttacking',
			type: 'integer',
			description: 'The sneaky offset when attacking'
		},
		'AttackLocomotorType': {
			name: 'AttackLocomotorType',
			type: 'string',
			description: 'The attack locomotor type',
			validValues: Object.values(Locomotor_types_t)
		},
		'AttackLocomotorPersistTime': {
			name: 'AttackLocomotorPersistTime',
			type: 'float',
			description: 'The attack locomotor persist time'
		},
		'AttackersMissPersistTime': {
			name: 'AttackersMissPersistTime',
			type: 'float',
			description: 'The attackers miss persist time'
		},
		'ReturnToBaseIdleTime': {
			name: 'ReturnToBaseIdleTime',
			type: 'integer',
			description: 'The return to base idle time'
		},
		'ReturnForAmmoLocomotorType': {
			name: 'ReturnForAmmoLocomotorType',
			type: 'string',
			description: 'The return for ammo locomotor type',
			validValues: Object.values(Locomotor_types_t)
		},
		'LockonTime': {
			name: 'LockonTime',
			type: 'integer',
			description: 'The lockon time'
		},
		'LockonCursor': {
			name: 'LockonCursor',
			type: 'string',
			description: 'The lockon cursor'
		},
		'LockonInitialDist': {
			name: 'LockonInitialDist',
			type: 'integer',
			description: 'The lockon initial dist'
		},
		'LockonFreq': {
			name: 'LockonFreq',
			type: 'float',
			description: 'The lockon freq'
		},
		'LockonAngleSpin': {
			name: 'LockonAngleSpin',
			type: 'float',
			description: 'The lockon angle spin'
		},
		'LockonBlinky': {
			name: 'LockonBlinky',
			type: 'boolean',
			description: 'Whether lockon blinky'
		},
		'AutoAcquireEnemiesWhenIdle': {
			name: 'AutoAcquireEnemiesWhenIdle',
			type: 'string',
			description: 'The auto acquire enemies when idle',
			validValues: ['Yes', 'No', 'NOTWHILEATTACKING', 'ATTACK_BUILDINGS', 'STEALTHED']
		},
		'MoodAttackCheckRate': {
			name: 'MoodAttackCheckRate',
			type: 'integer',
			description: 'The mood attack check rate'
		}
	},
	[BehaviorModule_t.JET_SLOW_DEATH_BEHAVIOR]: {
		'FXOnGroundDeath': {
			name: 'FXOnGroundDeath',
			type: IniTypes_t.FXLIST,
			description: 'The fx on ground death'
		},
		'OCLOnGroundDeath': {
			name: 'OCLOnGroundDeath',
			type: IniTypes_t.OBJECT_CREATION_LIST,
			description: 'The ocl on ground death'
		},
		'FXInitialDeath': {
			name: 'FXInitialDeath',
			type: IniTypes_t.FXLIST,
			description: 'The fx initial death'
		},
		'OCLInitialDeath': {
			name: 'OCLInitialDeath',
			type: IniTypes_t.OBJECT_CREATION_LIST,
			description: 'The ocl initial death'
		},
		'DelaySecondaryFromInitialDeath': {
			name: 'DelaySecondaryFromInitialDeath',
			type: 'integer',
			description: 'The delay secondary from initial death'
		},
		'FXSecondary': {
			name: 'FXSecondary',
			type: IniTypes_t.FXLIST,
			description: 'The fx secondary'
		},
		'OCLSecondary': {
			name: 'OCLSecondary',
			type: IniTypes_t.OBJECT_CREATION_LIST,
			description: 'The ocl secondary'
		},
		'DelayFinalBlowUpFromHitGround': {
			name: 'DelayFinalBlowUpFromHitGround',
			type: 'integer',
			description: 'The delay final blow up from hit ground'
		},
		'DestructionDelay': {
			name: 'DestructionDelay',
			type: 'integer',
			description: 'The destruction delay'
		},
		'DestructionDelayVariance': {
			name: 'DestructionDelayVariance',
			type: 'integer',
			description: 'The destruction delay variance'
		},
		'DestructionAltitude': {
			name: 'DestructionAltitude',
			type: 'integer',
			description: 'The destruction altitude'
		},
		'RollRate': {
			name: 'RollRate',
			type: 'float',
			description: 'The roll rate'
		},
		'RollRateDelta': {
			name: 'RollRateDelta',
			type: 'percent',
			description: 'The roll rate delta'
		},
		'PitchRate': {
			name: 'PitchRate',
			type: 'float',
			description: 'The pitch rate'
		},
		'FallHowFast': {
			name: 'FallHowFast',
			type: 'percent',
			description: 'The fall how fast'
		},
		'FXHitGround': {
			name: 'FXHitGround',
			type: IniTypes_t.FXLIST,
			description: 'The fx hit ground'
		},
		'OCLHitGround': {
			name: 'OCLHitGround',
			type: IniTypes_t.OBJECT_CREATION_LIST,
			description: 'The ocl hit ground'
		},
		'FXFinalBlowUp': {
			name: 'FXFinalBlowUp',
			type: IniTypes_t.FXLIST,
			description: 'The fx final blow up'
		},
		'OCLFinalBlowUp': {
			name: 'OCLFinalBlowUp',
			type: IniTypes_t.OBJECT_CREATION_LIST,
			description: 'The ocl final blow up'
		},
		'RequiredStatus': {
			name: 'RequiredStatus',
			type: 'string',
			description: 'The required status',
			validValues: Object.values(Status_t)
		},
		'ExemptStatus': {
			name: 'ExemptStatus',
			type: 'string',
			description: 'The exempt status',
			validValues: Object.values(Status_t)
		},
		'DeathTypes': {
			name: 'DeathTypes',
			type: 'string',
			description: 'The death types',
			validValues: Object.values(DeathType_t)
		}
	},
	[BehaviorModule_t.KEEP_OBJECT_DIE]: {
		'DeathTypes': {
			name: 'DeathTypes',
			type: 'string',
			description: 'The death types',
			validValues: Object.values(DeathType_t)
		},
		'RequiredStatus': {
			name: 'RequiredStatus',
			type: 'string',
			description: 'The required status',
			validValues: Object.values(Status_t)
		},
		'ExemptStatus': {
			name: 'ExemptStatus',
			type: 'string',
			description: 'The exempt status',
			validValues: Object.values(Status_t)
		}
	},
	[BehaviorModule_t.LIFETIME_UPDATE]: {
		'MinLifetime': {
			name: 'MinLifetime',
			type: 'integer',
			description: 'The min lifetime'
		},
		'MaxLifetime': {
			name: 'MaxLifetime',
			type: 'integer',
			description: 'The max lifetime'
		}
	},
	[BehaviorModule_t.LOCK_WEAPON_CREATE]: {
		'SlotToLock': {
			name: 'SlotToLock',
			type: 'string',
			description: 'The slot to lock',
			validValues: Object.values(WeaponSlot_t)
		}
	},
	[BehaviorModule_t.LOCOMOTOR_SET_UPGRADE]: {
		...baseUpgradeProperties
	},
	[BehaviorModule_t.LEAFLET_DROP_BEHAVIOR]: {
		'DisabledDuration': {
			name: 'DisabledDuration',
			type: 'integer',
			description: 'The disabled duration'
		},
		'Delay': {
			name: 'Delay',
			type: 'integer',
			description: 'The delay'
		},
		'AffectRadius': {
			name: 'AffectRadius',
			type: 'integer',
			description: 'The affect radius'
		},
		'LeafletFXParticleSystem': {
			name: 'LeafletFXParticleSystem',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The leaflet fx particle system'
		}
	},
	[BehaviorModule_t.MAX_HEALTH_UPGRADE]: {
		...baseUpgradeProperties,
		'AddMaxHealth': {
			name: 'AddMaxHealth',
			type: 'real',
			description: 'The add max health'
		},
		'ChangeType': {
			name: 'ChangeType',
			type: 'string',
			description: 'The change type',
			validValues: Object.values(ChangeType_t)
		}
	},
	[BehaviorModule_t.MINEFIELD_BEHAVIOR]: {
		'DetonationWeapon': {
			name: 'DetonationWeapon',
			type: IniTypes_t.WEAPON,
			description: 'The detonation weapon',
			requiredValues: [{
				type: kindOfs_t.MINE
			}]
		},
		'DetonatedBy': {
			name: 'DetonatedBy',
			type: 'string',
			description: 'The detonated by',
			validValues: ['ENEMIES', 'ALLIES', 'NEUTRAL'],
			requiredValues: [{
				type: kindOfs_t.MINE
			}]
		},
		'Regenerates': {
			name: 'Regenerates',
			type: 'boolean',
			description: 'The regenerates',
			requiredValues: [{
				type: kindOfs_t.MINE
			}]
		},
		'StopsRegenAfterCreatorDies': {
			name: 'StopsRegenAfterCreatorDies',
			type: 'boolean',
			description: 'The stops regen after creator dies',
			requiredValues: [{
				type: kindOfs_t.MINE
			}]
		},
		'WorkersDetonate': {
			name: 'WorkersDetonate',
			type: 'boolean',
			description: 'The workers detonate',
			requiredValues: [{
				type: kindOfs_t.MINE
			}]
		},
		'CreatorDeathCheckRate': {
			name: 'CreatorDeathCheckRate',
			type: 'integer',
			description: 'The creator death check rate',
			requiredValues: [{
				type: kindOfs_t.MINE
			}]
		},
		'ScootFromStartingPointTime': {
			name: 'ScootFromStartingPointTime',
			type: 'integer',
			description: 'The scoot from starting point time',
			requiredValues: [{
				type: kindOfs_t.MINE
			}]
		},
		'NumVirtualMines': {
			name: 'NumVirtualMines',
			type: 'integer',
			description: 'The num virtual mines',
			requiredValues: [{
				type: kindOfs_t.MINE
			}]
		},
		'RepeatDetonateMoveThresh': {
			name: 'RepeatDetonateMoveThresh',
			type: 'float',
			description: 'The repeat detonate move thresh',
			requiredValues: [{
				type: kindOfs_t.MINE
			}]
		},
		'DegenPercentPerSecondAfterCreatorDies': {
			name: 'DegenPercentPerSecondAfterCreatorDies',
			type: 'percent',
			description: 'The degen percent per second after creator dies',
			requiredValues: [{
				type: kindOfs_t.MINE
			}]
		},
		'CreationList': {
			name: 'CreationList',
			type: IniTypes_t.OBJECT_CREATION_LIST,
			description: 'The creation list',
			requiredValues: [{
				type: kindOfs_t.MINE
			}]
		}
	},
	[BehaviorModule_t.MISSILE_AI_UPDATE]: {
		'DetonateOnNoFuel': {
			name: 'DetonateOnNoFuel',
			type: 'boolean',
			description: 'The detonate on no fuel'
		},
		'DetonateCallsKill': {
			name: 'DetonateCallsKill',
			type: 'boolean',
			description: 'The detonate calls kill'
		},
		'UseWeaponSpeed': {
			name: 'UseWeaponSpeed',
			type: 'boolean',
			description: 'The use weapon speed'
		},
		'IgnitionFX': {
			name: 'IgnitionFX',
			type: IniTypes_t.FXLIST,
			description: 'The ignition fx'
		},
		'InitialVelocity': {
			name: 'InitialVelocity',
			type: 'integer',
			description: 'The initial velocity'
		},
		'IgnitionDelay': {
			name: 'IgnitionDelay',
			type: 'integer',
			description: 'The ignition delay'
		},
		'FuelLifetime': {
			name: 'FuelLifetime',
			type: 'integer',
			description: 'The fuel lifetime'
		},
		'TryToFollowTarget': {
			name: 'TryToFollowTarget',
			type: 'boolean',
			description: 'The try to follow target'
		},
		'KillSelfDelay': {
			name: 'KillSelfDelay',
			type: 'integer',
			description: 'The kill self delay'
		},
		'DistanceScatterWhenJammed': {
			name: 'DistanceScatterWhenJammed',
			type: 'integer',
			description: 'The distance scatter when jammed'
		},
		'GarrisonHitKillRequiredKindOf': {
			name: 'GarrisonHitKillRequiredKindOf',
			type: 'string',
			description: 'The garrison hit kill required kind of',
			validValues: Object.values(kindOfs_t)
		},
		'GarrisonHitKillForbiddenKindOf': {
			name: 'GarrisonHitKillForbiddenKindOf',
			type: 'string',
			description: 'The garrison hit kill forbidden kind of',
			validValues: Object.values(kindOfs_t)
		},
		'GarrisonHitKillCount': {
			name: 'GarrisonHitKillCount',
			type: 'integer',
			description: 'The garrison hit kill count'
		},
		'GarrisonHitKillFX': {
			name: 'GarrisonHitKillFX',
			type: IniTypes_t.FXLIST,
			description: 'The garrison hit kill fx'
		},
		'DistanceToTargetForLock': {
			name: 'DistanceToTargetForLock',
			type: 'integer',
			description: 'The distance to target for lock'
		},
		'DistanceToTargetBeforeDiving': {
			name: 'DistanceToTargetBeforeDiving',
			type: 'integer',
			description: 'The distance to target before diving'
		},
		'DistanceToTravelBeforeTurning': {
			name: 'DistanceToTravelBeforeTurning',
			type: 'integer',
			description: 'The distance to travel before turning'
		}
	},
	[BehaviorModule_t.MISSILE_LAUNCHER_BUILDING_UPDATE]: {
		'SpecialPowerTemplate': {
			name: 'SpecialPowerTemplate',
			type: IniTypes_t.SPECIAL_POWER,
			description: 'The special power template'
		},
		'DoorOpenTime': {
			name: 'DoorOpenTime',
			type: 'integer',
			description: 'The door open time'
		},
		'DoorWaitOpenTime': {
			name: 'DoorWaitOpenTime',
			type: 'integer',
			description: 'The door wait open time'
		},
		'DoorCloseTime': {
			name: 'DoorCloseTime',
			type: 'integer',
			description: 'The door close time'
		},
		'DoorOpeningFX': {
			name: 'DoorOpeningFX',
			type: IniTypes_t.FXLIST,
			description: 'The door opening fx'
		},
		'DoorOpenFX': {
			name: 'DoorOpenFX',
			type: IniTypes_t.FXLIST,
			description: 'The door open fx'
		},
		'DoorWaitingToCloseFX': {
			name: 'DoorWaitingToCloseFX',
			type: IniTypes_t.FXLIST,
			description: 'The door waiting to close fx'
		},
		'DoorClosingFX': {
			name: 'DoorClosingFX',
			type: IniTypes_t.FXLIST,
			description: 'The door closing fx'
		},
		'DoorClosedFX': {
			name: 'DoorClosedFX',
			type: IniTypes_t.FXLIST,
			description: 'The door closed fx'
		},
		'DoorOpenIdleAudio': {
			name: 'DoorOpenIdleAudio',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The door open idle audio'
		}
	},
	[BehaviorModule_t.MOB_MEMBER_SLAVED_UPDATE]: {
		'MustCatchUpRadius': {
			name: 'MustCatchUpRadius',
			type: 'integer',
			description: 'The must catch up radius'
		},
		'NoNeedToCatchUpRadius': {
			name: 'NoNeedToCatchUpRadius',
			type: 'integer',
			description: 'The no need to catch up radius'
		},
		'Squirrelliness': {
			name: 'Squirrelliness',
			type: 'float',
			description: 'The squirrelliness'
		},
		'CatchUpCrisisBailTime': {
			name: 'CatchUpCrisisBailTime',
			type: 'integer',
			description: 'The catch up crisis bail time'
		}
	},
	[BehaviorModule_t.MOB_NEXUS_CONTAIN]: {
		'Slots': {
			name: 'Slots',
			type: 'integer',
			description: 'The slots'
		},
		'InitialPayload': {
			name: 'InitialPayload',
			type: IniTypes_t.OBJECT,
			description: 'The initial payload',
			numberOfValues: [-1]
		},
		'DamagePercentToUnits': {
			name: 'DamagePercentToUnits',
			type: 'percent',
			description: 'The damage percent to units'
		},
		'HealthRegen%PerSec': {
			name: 'HealthRegen%PerSec',
			type: 'percent',
			description: 'The health regen % per sec'
		}
	},
	[BehaviorModule_t.MONEY_CRATE_COLLIDE]: {
		'MoneyProvided': {
			name: 'MoneyProvided',
			type: 'integer',
			description: 'The money provided'
		},
		'UpgradedBoost': {
			name: 'UpgradedBoost',
			type: ['string', 'integer'],
			description: 'The upgraded boost',
			numberOfValues: [2],
			prefix: ['UpgradeType:', 'Boost:']
		},
		'RequiredKindOf': {
			name: 'RequiredKindOf',
			type: 'string',
			description: 'The required kind of',
			validValues: Object.values(kindOfs_t)
		},
		'ForbiddenKindOf': {
			name: 'ForbiddenKindOf',
			type: 'string',
			description: 'The forbidden kind of',
			validValues: Object.values(kindOfs_t)
		},
		'ForbidOwnerPlayer': {
			name: 'ForbidOwnerPlayer',
			type: 'boolean',
			description: 'The forbid owner player'
		},
		'HumanOnly': {
			name: 'HumanOnly',
			type: 'boolean',
			description: 'The human only'
		},
		'BuildingPickup': {
			name: 'BuildingPickup',
			type: 'boolean',
			description: 'The building pickup'
		},
		'PickupScience': {
			name: 'PickupScience',
			type: IniTypes_t.SCIENCE,
			description: 'The pickup science'
		},
		'ExecuteFX': {
			name: 'ExecuteFX',
			type: IniTypes_t.FXLIST,
			description: 'The execute fx'
		},
		'ExecuteAnimation': {
			name: 'ExecuteAnimation',
			type: IniTypes_t.ANIMATION,
			description: 'The execute animation'
		},
		'ExecuteAnimationTime': {
			name: 'ExecuteAnimationTime',
			type: 'integer',
			description: 'The execute animation time'
		},
		'ExecuteAnimationZRise': {
			name: 'ExecuteAnimationZRise',
			type: 'integer',
			description: 'The execute animation z rise'
		},
		'ExecuteAnimationFades': {
			name: 'ExecuteAnimationFades',
			type: 'boolean',
			description: 'The execute animation fades'
		}
	},
	[BehaviorModule_t.MODEL_CONDITION_UPGRADE]: {
		...baseUpgradeProperties,
		'ConditionFlag': {
			name: 'ConditionFlag',
			type: 'string',
			description: 'The condition flag',
			validValues: allowedConditionStates
		}
	},
	[BehaviorModule_t.NEUTRON_MISSILE_SLOW_DEATH_BEHAVIOR]: {
		'DeathTypes': {
			name: 'DeathTypes',
			type: 'string',
			description: 'The death types',
			validValues: Object.values(DeathType_t)
		},
		'DestructionDelay': {
			name: 'DestructionDelay',
			type: 'integer',
			description: 'The destruction delay'
		},
		'DestructionDelayVariance': {
			name: 'DestructionDelayVariance',
			type: 'integer',
			description: 'The destruction delay variance'
		},
		'DestructionAltitude': {
			name: 'DestructionAltitude',
			type: 'integer',
			description: 'The destruction altitude'
		},
		'FX': {
			name: 'FX',
			type: ['string', IniTypes_t.FXLIST],
			description: 'The FX',
			numberOfValues: [2],
			validValues: [['INITIAL', 'MIDPOINT', 'FINAL'], null],
			ignoreCase: true
		},
		'OCL': {
			name: 'OCL',
			type: ['string', IniTypes_t.OBJECT_CREATION_LIST],
			description: 'The OCL',
			numberOfValues: [2],
			validValues: [['INITIAL', 'MIDPOINT', 'FINAL'], null],
			ignoreCase: true
		},
		'Weapon': {
			name: 'Weapon',
			type: ['string', IniTypes_t.WEAPON],
			description: 'The weapon',
			numberOfValues: [2],
			validValues: [['INITIAL', 'MIDPOINT', 'FINAL'], null],
			ignoreCase: true
		},
		'ScorchMarkSize': {
			name: 'ScorchMarkSize',
			type: 'integer',
			description: 'The scorch mark size'
		},
		'FXList': {
			name: 'FXList',
			type: IniTypes_t.FXLIST,
			description: 'The FX list'
		},
		'Blast1Enabled': {
			name: 'Blast1Enabled',
			type: 'boolean',
			description: 'The blast 1 enabled'
		},
		'Blast1Delay': {
			name: 'Blast1Delay',
			type: 'integer',
			description: 'The blast 1 delay'
		},
		'Blast1ScorchDelay': {
			name: 'Blast1ScorchDelay',
			type: 'integer',
			description: 'The blast 1 scorch delay'
		},
		'Blast1InnerRadius': {
			name: 'Blast1InnerRadius',
			type: 'integer',
			description: 'The blast 1 inner radius'
		},
		'Blast1OuterRadius': {
			name: 'Blast1OuterRadius',
			type: 'integer',
			description: 'The blast 1 outer radius'
		},
		'Blast1MaxDamage': {
			name: 'Blast1MaxDamage',
			type: 'integer',
			description: 'The blast 1 max damage'
		},
		'Blast1MinDamage': {
			name: 'Blast1MinDamage',
			type: 'integer',
			description: 'The blast 1 min damage'
		},
		'Blast1ToppleSpeed': {
			name: 'Blast1ToppleSpeed',
			type: 'integer',
			description: 'The blast 1 topple speed'
		},
		'Blast1PushForce': {
			name: 'Blast1PushForce',
			type: 'integer',
			description: 'The blast 1 push force'
		},
		'Blast2Enabled': {
			name: 'Blast2Enabled',
			type: 'boolean',
			description: 'The blast 2 enabled'
		},
		'Blast2Delay': {
			name: 'Blast2Delay',
			type: 'integer',
			description: 'The blast 2 delay'
		},
		'Blast2ScorchDelay': {
			name: 'Blast2ScorchDelay',
			type: 'integer',
			description: 'The blast 2 scorch delay'
		},
		'Blast2InnerRadius': {
			name: 'Blast2InnerRadius',
			type: 'integer',
			description: 'The blast 2 inner radius'
		},
		'Blast2OuterRadius': {
			name: 'Blast2OuterRadius',
			type: 'integer',
			description: 'The blast 2 outer radius'
		},
		'Blast2MaxDamage': {
			name: 'Blast2MaxDamage',
			type: 'integer',
			description: 'The blast 2 max damage'
		},
		'Blast2MinDamage': {
			name: 'Blast2MinDamage',
			type: 'integer',
			description: 'The blast 2 min damage'
		},
		'Blast2ToppleSpeed': {
			name: 'Blast2ToppleSpeed',
			type: 'integer',
			description: 'The blast 2 topple speed'
		},
		'Blast2PushForce': {
			name: 'Blast2PushForce',
			type: 'integer',
			description: 'The blast 2 push force'
		},
		'Blast3Enabled': {
			name: 'Blast3Enabled',
			type: 'boolean',
			description: 'The blast 3 enabled'
		},
		'Blast3Delay': {
			name: 'Blast3Delay',
			type: 'integer',
			description: 'The blast 3 delay'
		},
		'Blast3ScorchDelay': {
			name: 'Blast3ScorchDelay',
			type: 'integer',
			description: 'The blast 3 scorch delay'
		},
		'Blast3InnerRadius': {
			name: 'Blast3InnerRadius',
			type: 'integer',
			description: 'The blast 3 inner radius'
		},
		'Blast3OuterRadius': {
			name: 'Blast3OuterRadius',
			type: 'integer',
			description: 'The blast 3 outer radius'
		},
		'Blast3MaxDamage': {
			name: 'Blast3MaxDamage',
			type: 'integer',
			description: 'The blast 3 max damage'
		},
		'Blast3MinDamage': {
			name: 'Blast3MinDamage',
			type: 'integer',
			description: 'The blast 3 min damage'
		},
		'Blast3ToppleSpeed': {
			name: 'Blast3ToppleSpeed',
			type: 'integer',
			description: 'The blast 3 topple speed'
		},
		'Blast3PushForce': {
			name: 'Blast3PushForce',
			type: 'integer',
			description: 'The blast 3 push force'
		},
		'Blast4Enabled': {
			name: 'Blast4Enabled',
			type: 'boolean',
			description: 'The blast 4 enabled'
		},
		'Blast4Delay': {
			name: 'Blast4Delay',
			type: 'integer',
			description: 'The blast 4 delay'
		},
		'Blast4ScorchDelay': {
			name: 'Blast4ScorchDelay',
			type: 'integer',
			description: 'The blast 4 scorch delay'
		},
		'Blast4InnerRadius': {
			name: 'Blast4InnerRadius',
			type: 'integer',
			description: 'The blast 4 inner radius'
		},
		'Blast4OuterRadius': {
			name: 'Blast4OuterRadius',
			type: 'integer',
			description: 'The blast 4 outer radius'
		},
		'Blast4MaxDamage': {
			name: 'Blast4MaxDamage',
			type: 'integer',
			description: 'The blast 4 max damage'
		},
		'Blast4MinDamage': {
			name: 'Blast4MinDamage',
			type: 'integer',
			description: 'The blast 4 min damage'
		},
		'Blast4ToppleSpeed': {
			name: 'Blast4ToppleSpeed',
			type: 'integer',
			description: 'The blast 4 topple speed'
		},
		'Blast4PushForce': {
			name: 'Blast4PushForce',
			type: 'integer',
			description: 'The blast 4 push force'
		},
		'Blast5Enabled': {
			name: 'Blast5Enabled',
			type: 'boolean',
			description: 'The blast 5 enabled'
		},
		'Blast5Delay': {
			name: 'Blast5Delay',
			type: 'integer',
			description: 'The blast 5 delay'
		},
		'Blast5ScorchDelay': {
			name: 'Blast5ScorchDelay',
			type: 'integer',
			description: 'The blast 5 scorch delay'
		},
		'Blast5InnerRadius': {
			name: 'Blast5InnerRadius',
			type: 'integer',
			description: 'The blast 5 inner radius'
		},
		'Blast5OuterRadius': {
			name: 'Blast5OuterRadius',
			type: 'integer',
			description: 'The blast 5 outer radius'
		},
		'Blast5MaxDamage': {
			name: 'Blast5MaxDamage',
			type: 'integer',
			description: 'The blast 5 max damage'
		},
		'Blast5MinDamage': {
			name: 'Blast5MinDamage',
			type: 'integer',
			description: 'The blast 5 min damage'
		},
		'Blast5ToppleSpeed': {
			name: 'Blast5ToppleSpeed',
			type: 'integer',
			description: 'The blast 5 topple speed'
		},
		'Blast5PushForce': {
			name: 'Blast5PushForce',
			type: 'integer',
			description: 'The blast 5 push force'
		},
		'Blast6Enabled': {
			name: 'Blast6Enabled',
			type: 'boolean',
			description: 'The blast 6 enabled'
		},
		'Blast6Delay': {
			name: 'Blast6Delay',
			type: 'integer',
			description: 'The blast 6 delay'
		},
		'Blast6ScorchDelay': {
			name: 'Blast6ScorchDelay',
			type: 'integer',
			description: 'The blast 6 scorch delay'
		},
		'Blast6InnerRadius': {
			name: 'Blast6InnerRadius',
			type: 'integer',
			description: 'The blast 6 inner radius'
		},
		'Blast6OuterRadius': {
			name: 'Blast6OuterRadius',
			type: 'integer',
			description: 'The blast 6 outer radius'
		},
		'Blast6MaxDamage': {
			name: 'Blast6MaxDamage',
			type: 'integer',
			description: 'The blast 6 max damage'
		},
		'Blast6MinDamage': {
			name: 'Blast6MinDamage',
			type: 'integer',
			description: 'The blast 6 min damage'
		},
		'Blast6ToppleSpeed': {
			name: 'Blast6ToppleSpeed',
			type: 'integer',
			description: 'The blast 6 topple speed'
		},
		'Blast6PushForce': {
			name: 'Blast6PushForce',
			type: 'integer',
			description: 'The blast 6 push force'
		},
		'Blast7Enabled': {
			name: 'Blast7Enabled',
			type: 'boolean',
			description: 'The blast 7 enabled'
		},
		'Blast7Delay': {
			name: 'Blast7Delay',
			type: 'integer',
			description: 'The blast 7 delay'
		},
		'Blast7ScorchDelay': {
			name: 'Blast7ScorchDelay',
			type: 'integer',
			description: 'The blast 7 scorch delay'
		},
		'Blast7InnerRadius': {
			name: 'Blast1InnerRadius',
			type: 'integer',
			description: 'The blast 1 inner radius'
		},
		'Blast7OuterRadius': {
			name: 'Blast7OuterRadius',
			type: 'integer',
			description: 'The blast 7 outer radius'
		},
		'Blast7MaxDamage': {
			name: 'Blast7MaxDamage',
			type: 'integer',
			description: 'The blast 7 max damage'
		},
		'Blast7MinDamage': {
			name: 'Blast7MinDamage',
			type: 'integer',
			description: 'The blast 7 min damage'
		},
		'Blast7ToppleSpeed': {
			name: 'Blast7ToppleSpeed',
			type: 'integer',
			description: 'The blast 7 topple speed'
		},
		'Blast7PushForce': {
			name: 'Blast7PushForce',
			type: 'integer',
			description: 'The blast 7 push force'
		},
		'Blast8Enabled': {
			name: 'Blast8Enabled',
			type: 'boolean',
			description: 'The blast 8 enabled'
		},
		'Blast8Delay': {
			name: 'Blast8Delay',
			type: 'integer',
			description: 'The blast 8 delay'
		},
		'Blast8ScorchDelay': {
			name: 'Blast8ScorchDelay',
			type: 'integer',
			description: 'The blast 8 scorch delay'
		},
		'Blast8InnerRadius': {
			name: 'Blast8InnerRadius',
			type: 'integer',
			description: 'The blast 8 inner radius'
		},
		'Blast8OuterRadius': {
			name: 'Blast8OuterRadius',
			type: 'integer',
			description: 'The blast 8 outer radius'
		},
		'Blast8MaxDamage': {
			name: 'Blast8MaxDamage',
			type: 'integer',
			description: 'The blast 8 max damage'
		},
		'Blast8MinDamage': {
			name: 'Blast8MinDamage',
			type: 'integer',
			description: 'The blast 8 min damage'
		},
		'Blast8ToppleSpeed': {
			name: 'Blast8ToppleSpeed',
			type: 'integer',
			description: 'The blast 8 topple speed'
		},
		'Blast8PushForce': {
			name: 'Blast1PushForce',
			type: 'integer',
			description: 'The blast 8 push force'
		},
		'Blast9Enabled': {
			name: 'Blast9Enabled',
			type: 'boolean',
			description: 'The blast 9 enabled'
		},
		'Blast9Delay': {
			name: 'Blast9Delay',
			type: 'integer',
			description: 'The blast 9 delay'
		},
		'Blast9ScorchDelay': {
			name: 'Blast9ScorchDelay',
			type: 'integer',
			description: 'The blast 9 scorch delay'
		},
		'Blast9InnerRadius': {
			name: 'Blast9InnerRadius',
			type: 'integer',
			description: 'The blast 9 inner radius'
		},
		'Blast9OuterRadius': {
			name: 'Blast9OuterRadius',
			type: 'integer',
			description: 'The blast 9 outer radius'
		},
		'Blast9MaxDamage': {
			name: 'Blast9MaxDamage',
			type: 'integer',
			description: 'The blast 9 max damage'
		},
		'Blast9MinDamage': {
			name: 'Blast9MinDamage',
			type: 'integer',
			description: 'The blast 9 min damage'
		},
		'Blast9ToppleSpeed': {
			name: 'Blast9ToppleSpeed',
			type: 'integer',
			description: 'The blast 9 topple speed'
		},
		'Blast9PushForce': {
			name: 'Blast9PushForce',
			type: 'integer',
			description: 'The blast 9 push force'
		}
	},
	[BehaviorModule_t.NEUTRON_BLAST_BEHAVIOR]: {
		'BlastRadius': {
			name: 'BlastRadius',
			type: 'integer',
			description: 'The blast radius'
		},
		'AffectAirborne': {
			name: 'AffectAirborne',
			type: 'boolean',
			description: 'The affect airborne'
		},
		'AffectAllies': {
			name: 'AffectAllies',
			type: 'boolean',
			description: 'The affect allies'
		}
	},
	[BehaviorModule_t.NEUTRON_MISSILE_UPDATE]: {
		'LaunchFX': {
			name: 'LaunchFX',
			type: IniTypes_t.FXLIST,
			description: 'The launch FX'
		},
		'TargetFromDirectlyAbove': {
			name: 'TargetFromDirectlyAbove',
			type: 'integer',
			description: 'The target from directly above'
		},
		'RelativeSpeed': {
			name: 'RelativeSpeed',
			type: 'float',
			description: 'The relative speed'
		},
		'MaxTurnRate': {
			name: 'MaxTurnRate',
			type: 'integer',
			description: 'The max turn rate'
		},
		'ForwardDamping': {
			name: 'ForwardDamping',
			type: 'float',
			description: 'The forward damping'
		},
		'SpecialSpeedTime': {
			name: 'SpecialSpeedTime',
			type: 'integer',
			description: 'The special speed time'
		},
		'SpecialSpeedHeight': {
			name: 'SpecialSpeedHeight',
			type: 'integer',
			description: 'The special speed height'
		},
		'SpecialAccelFactor': {
			name: 'SpecialAccelFactor',
			type: 'integer',
			description: 'The special accel factor'
		},
		'SpecialJitterDistance': {
			name: 'SpecialJitterDistance',
			type: 'float',
			description: 'The special jitter distance'
		},
		'IgnitionFX': {
			name: 'IgnitionFX',
			type: IniTypes_t.FXLIST,
			description: 'The ignition FX'
		},
		'DistanceToTargetBeforeDiving': {
			name: 'DistanceToTargetBeforeDiving',
			type: 'integer',
			description: 'The distance to target before diving'
		},
		'DistanceToTravelBeforeTurning': {
			name: 'DistanceToTravelBeforeTurning',
			type: 'integer',
			description: 'The distance to travel before turning'
		},
		'IgnitionDelay': {
			name: 'IgnitionDelay',
			type: 'integer',
			description: 'The ignition delay'
		},
		'DeliveryDecalRadius': {
			name: 'DeliveryDecalRadius',
			type: 'integer',
			description: 'The delivery decal radius'
		}
	},
	[BehaviorModule_t.OBJECT_CREATION_UPGRADE]: {
		...baseUpgradeProperties,
		'UpgradeObject': {
			name: 'UpgradeObject',
			type: IniTypes_t.OBJECT_CREATION_LIST,
			description: 'The upgrade object'
		}
	},
	[BehaviorModule_t.OCL_SPECIAL_POWER]: {
		'SpecialPowerTemplate': {
			name: 'SpecialPowerTemplate',
			type: IniTypes_t.SPECIAL_POWER,
			description: 'The special power template'
		},
		'OCL': {
			name: 'OCL',
			type: IniTypes_t.OBJECT_CREATION_LIST,
			description: 'The OCL'
		},
		'UpgradeOCL': {
			name: 'UpgradeOCL',
			type: IniTypes_t.OBJECT_CREATION_LIST,
			description: 'The upgrade OCL'
		},
		'OCLAdjustPositionToPassable': {
			name: 'OCLAdjustPositionToPassable',
			type: 'boolean',
			description: 'The OCL adjust position to passable'
		},
		'CreateLocation': {
			name: 'CreateLocation',
			type: 'string',
			description: 'The create location',
			validValues: Object.values(CreateLocation_t)
		},
		'StartsPaused': {
			name: 'StartsPaused',
			type: 'boolean',
			description: 'The starts paused',
			requiredValues: [{
				type: BehaviorModule_t.UNPAUSE_SPECIAL_POWER_UPGRADE
			}]
		},
		'ReferenceObject': {
			name: 'ReferenceObject',
			type: IniTypes_t.OBJECT,
			description: 'The reference object'
		},
		'ScriptedSpecialPowerOnly': {
			name: 'ScriptedSpecialPowerOnly',
			type: 'boolean',
			description: 'The scripted special power only'
		}
	},
	[BehaviorModule_t.OCL_UPDATE]: {
		'FactionTriggered': {
			name: 'FactionTriggered',
			type: 'boolean',
			description: 'The faction triggered'
		},
		'FactionOCL': {
			name: 'FactionOCL',
			type: ['string', IniTypes_t.OBJECT_CREATION_LIST],
			description: 'The faction OCL',
			prefix: ['Faction:', null]
		},
		'MinDelay': {
			name: 'MinDelay',
			type: 'integer',
			description: 'The min delay'
		},
		'MaxDelay': {
			name: 'MaxDelay',
			type: 'integer',
			description: 'The max delay'
		},
		'CreateAtEdge': {
			name: 'CreateAtEdge',
			type: 'boolean',
			description: 'The create at edge'
		},
		'OCL': {
			name: 'OCL',
			type: IniTypes_t.OBJECT_CREATION_LIST,
			description: 'The OCL'
		}
	},
	[BehaviorModule_t.OPEN_CONTAIN]: {
		'ContainMax': {
			name: 'ContainMax',
			type: 'integer',
			description: 'The contain max'
		},
		'EnterSound': {
			name: 'EnterSound',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The enter sound'
		},
		'ExitSound': {
			name: 'ExitSound',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The exit sound'
		},
		'AllowInsideKindOf': {
			name: 'AllowInsideKindOf',
			type: 'string',
			description: 'The allow inside kind of',
			validValues: Object.values(kindOfs_t)
		},
		'ForbidInsideKindOf': {
			name: 'ForbidInsideKindOf',
			type: 'string',
			description: 'The forbid inside kind of',
			validValues: Object.values(kindOfs_t)
		},
		'PassengersAllowedToFire': {
			name: 'PassengersAllowedToFire',
			type: 'boolean',
			description: 'The passengers allowed to fire'
		},
		'PassengersInTurret': {
			name: 'PassengersInTurret',
			type: 'boolean',
			description: 'The passengers in turret'
		},
		'NumberOfExitPaths': {
			name: 'NumberOfExitPaths',
			type: 'integer',
			description: 'The number of exit paths'
		},
		'AllowAlliesInside': {
			name: 'AllowAlliesInside',
			type: 'boolean',
			description: 'The allow allies inside'
		},
		'AllowEnemiesInside': {
			name: 'AllowEnemiesInside',
			type: 'boolean',
			description: 'The allow enemies inside'
		},
		'AllowNeutralInside': {
			name: 'AllowNeutralInside',
			type: 'boolean',
			description: 'The allow neutral inside'
		},
		'DamagePercentToUnits': {
			name: 'DamagePercentToUnits',
			type: 'percent',
			description: 'The damage percent to units'
		}
	},
	[BehaviorModule_t.OVERCHARGE_BEHAVIOR]: {
		'HealthPercentToDrainPerSecond': {
			name: 'HealthPercentToDrainPerSecond',
			type: 'percent',
			description: 'The health percent to drain per second'
		},
		'NotAllowedWhenHealthBelowPercent': {
			name: 'NotAllowedWhenHealthBelowPercent',
			type: 'percent',
			description: 'The not allowed when health below percent'
		}
	},
	[BehaviorModule_t.OVERLORD_CONTAIN]: {
		'Slots': {
			name: 'Slots',
			type: 'integer',
			description: 'The slots'
		},
		'DamagePercentToUnits': {
			name: 'DamagePercentToUnits',
			type: 'percent',
			description: 'The damage percent to units'
		},
		'AllowInsideKindOf': {
			name: 'AllowInsideKindOf',
			type: 'string',
			description: 'The allow inside kind of',
			validValues: Object.values(kindOfs_t)
		},
		'PassengersAllowedToFire': {
			name: 'PassengersAllowedToFire',
			type: 'boolean',
			description: 'The passengers allowed to fire'
		},
		'WeaponBonusPassedToPassengers': {
			name: 'WeaponBonusPassedToPassengers',
			type: 'boolean',
			description: 'The weapon bonus passed to passengers'
		},
		'PayloadTemplateName': {
			name: 'PayloadTemplateName',
			type: IniTypes_t.OBJECT,
			description: 'The payload template name'
		},
		'InitialPayload': {
			name: 'InitialPayload',
			type: IniTypes_t.OBJECT_CREATION_LIST,
			description: 'The initial payload'
		}
	},
	[BehaviorModule_t.PARKING_PLACE_BEHAVIOR]: {
		'HealAmountPerSecond': {
			name: 'HealAmountPerSecond',
			type: 'integer',
			description: 'The heal amount per second'
		},
		'NumRows': {
			name: 'NumRows',
			type: 'integer',
			description: 'The num rows'
		},
		'NumCols': {
			name: 'NumCols',
			type: 'integer',
			description: 'The num cols'
		},
		'HasRunways': {
			name: 'HasRunways',
			type: 'boolean',
			description: 'The has runways'
		},
		'ApproachHeight': {
			name: 'ApproachHeight',
			type: 'integer',
			description: 'The approach height'
		},
		'ParkInHangars': {
			name: 'ParkInHangars',
			type: 'boolean',
			description: 'The park in hangars'
		}
	},
	[BehaviorModule_t.PASSENGERS_FIRE_UPGRADE]: {
		...baseUpgradeProperties
	},
	[BehaviorModule_t.PARACHUTE_CONTAIN]: {
		'PitchRateMax': {
			name: 'PitchRateMax',
			type: 'integer',
			description: 'The pitch rate max'
		},
		'RollRateMax': {
			name: 'RollRateMax',
			type: 'integer',
			description: 'The roll rate max'
		},
		'LowAltitudeDamping': {
			name: 'LowAltitudeDamping',
			type: 'float',
			description: 'The low altitude damping'
		},
		'ParachuteOpenDist': {
			name: 'ParachuteOpenDist',
			type: 'float',
			description: 'The parachute open dist'
		},
		'KillWhenLandingInWaterSlop': {
			name: 'KillWhenLandingInWaterSlop',
			type: 'boolean',
			description: 'The kill when landing in water slop'
		},
		'FreeFallDamagePercent': {
			name: 'FreeFallDamagePercent',
			type: 'percent',
			description: 'The free fall damage percent'
		},
		'AllowInsideKindOf': {
			name: 'AllowInsideKindOf',
			type: 'string',
			description: 'The allow inside kind of',
			validValues: Object.values(kindOfs_t)
		},
		'ForbidInsideKindOf': {
			name: 'ForbidInsideKindOf',
			type: 'string',
			description: 'The forbid inside kind of',
			validValues: Object.values(kindOfs_t)
		},
		'ParachuteOpenSound': {
			name: 'ParachuteOpenSound',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The parachute open sound'
		}
	},
	[BehaviorModule_t.PARTICLE_UPLINK_CANNON_UPDATE]: {
		'SpecialPowerTemplate': {
			name: 'SpecialPowerTemplate',
			type: IniTypes_t.SPECIAL_POWER,
			description: 'The special power template'
		},
		'BeginChargeTime': {
			name: 'BeginChargeTime',
			type: 'integer',
			description: 'The begin charge time'
		},
		'RaiseAntennaTime': {
			name: 'RaiseAntennaTime',
			type: 'integer',
			description: 'The raise antenna time'
		},
		'ReadyDelayTime': {
			name: 'ReadyDelayTime',
			type: 'integer',
			description: 'The ready delay time'
		},
		'WidthGrowTime': {
			name: 'WidthGrowTime',
			type: 'integer',
			description: 'The width grow time'
		},
		'BeamTravelTime': {
			name: 'BeamTravelTime',
			type: 'integer',
			description: 'The beam travel time'
		},
		'TotalFiringTime': {
			name: 'TotalFiringTime',
			type: 'integer',
			description: 'The total firing time'
		},
		'RevealRange': {
			name: 'RevealRange',
			type: 'integer',
			description: 'The reveal range'
		},
		'OuterEffectBoneName': {
			name: 'OuterEffectBoneName',
			type: 'string',
			description: 'The outer effect bone name'
		},
		'OuterEffectNumBones': {
			name: 'OuterEffectNumBones',
			type: 'integer',
			description: 'The outer effect num bones'
		},
		'OuterNodesLightFlareParticleSystem': {
			name: 'OuterNodesLightFlareParticleSystem',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The outer nodes light flare particle system'
		},
		'OuterNodesMediumFlareParticleSystem': {
			name: 'OuterNodesMediumFlareParticleSystem',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The outer nodes medium flare particle system'
		},
		'OuterNodesIntenseFlareParticleSystem': {
			name: 'OuterNodesIntenseFlareParticleSystem',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The outer nodes intense flare particle system'
		},
		'ConnectorBoneName': {
			name: 'ConnectorBoneName',
			type: 'string',
			description: 'The connector bone name'
		},
		'ConnectorMediumLaserName': {
			name: 'ConnectorMediumLaserName',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The connector medium laser name'
		},
		'ConnectorIntenseLaserName': {
			name: 'ConnectorIntenseLaserName',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The connector intense laser name'
		},
		'ConnectorMediumFlare': {
			name: 'ConnectorMediumFlare',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The connector medium flare'
		},
		'ConnectorIntenseFlare': {
			name: 'ConnectorIntenseFlare',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The connector intense flare'
		},
		'FireBoneName': {
			name: 'FireBoneName',
			type: 'string',
			description: 'The fire bone name'
		},
		'LaserBaseLightFlareParticleSystemName': {
			name: 'LaserBaseLightFlareParticleSystemName',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The laser base light flare particle system name'
		},
		'LaserBaseMediumFlareParticleSystemName': {
			name: 'LaserBaseMediumFlareParticleSystemName',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The laser base medium flare particle system name'
		},
		'LaserBaseIntenseFlareParticleSystemName': {
			name: 'LaserBaseIntenseFlareParticleSystemName',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The laser base intense flare particle system name'
		},
		'ParticleBeamLaserName': {
			name: 'ParticleBeamLaserName',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The particle beam laser name'
		},
		'SwathOfDeathDistance': {
			name: 'SwathOfDeathDistance',
			type: 'float',
			description: 'The swath of death distance'
		},
		'SwathOfDeathAmplitude': {
			name: 'SwathOfDeathAmplitude',
			type: 'float',
			description: 'The swath of death amplitude'
		},
		'TotalScorchMarks': {
			name: 'TotalScorchMarks',
			type: 'integer',
			description: 'The total scorch marks'
		},
		'ScorchMarkScalar': {
			name: 'ScorchMarkScalar',
			type: 'float',
			description: 'The scorch mark scalar'
		},
		'BeamLaunchFX': {
			name: 'BeamLaunchFX',
			type: IniTypes_t.FXLIST,
			description: 'The beam launch fx'
		},
		'DelayBetweenLaunchFX': {
			name: 'DelayBetweenLaunchFX',
			type: IniTypes_t.FXLIST,
			description: 'The delay between launch fx'
		},
		'GroundHitFX': {
			name: 'GroundHitFX',
			type: IniTypes_t.FXLIST,
			description: 'The ground hit fx'
		},
		'DamagePerSecond': {
			name: 'DamagePerSecond',
			type: 'integer',
			description: 'The damage per second'
		},
		'TotalDamagePulses': {
			name: 'TotalDamagePulses',
			type: 'integer',
			description: 'The total damage pulses'
		},
		'DamageType': {
			name: 'DamageType',
			type: 'string',
			description: 'The damage type',
			validValues: Object.values(DamageTypes_t)
		},
		'DamageRadius': {
			name: 'DamageRadius',
			type: 'float',
			description: 'The damage radius'
		},
		'PoweringUpSoundLoop': {
			name: 'PoweringUpSoundLoop',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The powering up sound loop'
		},
		'UnpackToIdleSoundLoop': {
			name: 'UnpackToIdleSoundLoop',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The unpack to idle sound loop'
		},
		'FiringToPackSoundLoop': {
			name: 'FiringToPackSoundLoop',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The firing to pack sound loop'
		},
		'GroundAnnihilationSoundLoop': {
			name: 'GroundAnnihilationSoundLoop',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The ground annihilation sound loop'
		},
		'DamagePulseRemnantObjectName': {
			name: 'DamagePulseRemnantObjectName',
			type: IniTypes_t.OBJECT,
			description: 'The damage pulse remnant object name'
		},
		'ManualDrivingSpeed': {
			name: 'ManualDrivingSpeed',
			type: 'integer',
			description: 'The manual driving speed'
		},
		'ManualFastDrivingSpeed': {
			name: 'ManualFastDrivingSpeed',
			type: 'integer',
			description: 'The manual fast driving speed'
		},
		'DoubleClickToFastDriveDelay': {
			name: 'DoubleClickToFastDriveDelay',
			type: 'integer',
			description: 'The double click to fast drive delay'
		}
	},
	[BehaviorModule_t.PHYSICS_BEHAVIOR]: {
		'VehicleCrashesIntoNonBuildingWeaponTemplate': {
			name: 'VehicleCrashesIntoNonBuildingWeaponTemplate',
			type: IniTypes_t.WEAPON,
			description: 'The vehicle crashes into non building weapon template'
		},
		'VehicleCrashesIntoBuildingWeaponTemplate': {
			name: 'VehicleCrashesIntoBuildingWeaponTemplate',
			type: IniTypes_t.WEAPON,
			description: 'The vehicle crashes into building weapon template'
		},
		'Mass': {
			name: 'Mass',
			type: 'integer',
			description: 'The mass'
		},
		'ForwardFriction': {
			name: 'ForwardFriction',
			type: 'integer',
			description: 'The forward friction'
		},
		'ZFriction': {
			name: 'ZFriction',
			type: 'integer',
			description: 'The z friction'
		},
		'LateralFriction': {
			name: 'LateralFriction',
			type: 'integer',
			description: 'The lateral friction'
		},
		'AerodynamicFriction': {
			name: 'AerodynamicFriction',
			type: 'integer',
			description: 'The aerodynamic friction'
		},
		'CenterOfMassOffset': {
			name: 'CenterOfMassOffset',
			type: 'integer',
			description: 'The center of mass offset'
		},
		'AllowBouncing': {
			name: 'AllowBouncing',
			type: 'boolean',
			description: 'The allow bouncing'
		},
		'AllowCollideForce': {
			name: 'AllowCollideForce',
			type: 'boolean',
			description: 'The allow collide force'
		},
		'KillWhenRestingOnGround': {
			name: 'KillWhenRestingOnGround',
			type: 'boolean',
			description: 'The kill when resting on ground'
		},
		'MinFallHeightForDamage': {
			name: 'MinFallHeightForDamage',
			type: 'integer',
			description: 'The min fall height for damage'
		},
		'FallHeightDamageFactor': {
			name: 'FallHeightDamageFactor',
			type: 'real number',
			description: 'The fall height damage factor'
		},
		'PitchRollYawFactor': {
			name: 'PitchRollYawFactor',
			type: 'real number',
			description: 'The pitch roll yaw factor'
		},
		//TODO: Add range property to PropertyDefinition
		'ShockMaxRoll': {
			name: 'ShockMaxRoll',
			type: 'float',
			description: 'The shock max roll'
		},
		'ShockMaxPitch': {
			name: 'ShockMaxPitch',
			type: 'float',
			description: 'The shock max pitch'
		},
		'ShockMaxYaw': {
			name: 'ShockMaxYaw',
			type: 'float',
			description: 'The shock max yaw'
		},
		'ShockResistance': {
			name: 'ShockResistance',
			type: 'float',
			description: 'The shock resistance'
		}
	},
	[BehaviorModule_t.PILOT_FIND_VEHICLE_UPDATE]: {
		'ScanRate': {
			name: 'ScanRate',
			type: 'integer',
			description: 'The scan rate'
		},
		'ScanRange': {
			name: 'ScanRange',
			type: 'integer',
			description: 'The scan range'
		},
		'MinHealth': {
			name: 'MinHealth',
			type: 'float',
			description: 'The min health'
		}
	},
	[BehaviorModule_t.POINT_DEFENSE_LASER_UPDATE]: {
		'WeaponTemplate': {
			name: 'WeaponTemplate',
			type: IniTypes_t.WEAPON,
			description: 'The weapon template'
		},
		'PrimaryTargetTypes': {
			name: 'PrimaryTargetTypes',
			type: 'string',
			description: 'The primary target types',
			validValues: Object.values(kindOfs_t)
		},
		'SecondaryTargetTypes': {
			name: 'SecondaryTargetTypes',
			type: 'string',
			description: 'The secondary target types',
			validValues: Object.values(kindOfs_t)
		},
		'ScanRate': {
			name: 'ScanRate',
			type: 'integer',
			description: 'The scan rate'
		},
		'ScanRange': {
			name: 'ScanRange',
			type: 'integer',
			description: 'The scan range'
		},
		'PredictTargetVelocityFactor': {
			name: 'PredictTargetVelocityFactor',
			type: 'float',
			description: 'The predict target velocity factor'
		}
	},
	[BehaviorModule_t.POISONED_BEHAVIOR]: {
		'PoisonDamageInterval': {
			name: 'PoisonDamageInterval',
			type: 'integer',
			description: 'The poison damage interval'
		},
		'PoisonDuration': {
			name: 'PoisonDuration',
			type: 'integer',
			description: 'The poison duration'
		}
	},
	[BehaviorModule_t.POWER_PLANT_UPDATE]: {
		'RodsExtendTime': {
			name: 'RodsExtendTime',
			type: 'integer',
			description: 'The rods extend time'
		}
	},
	[BehaviorModule_t.POWER_PLANT_UPGRADE]: {
		...baseUpgradeProperties
	},
	[BehaviorModule_t.PREORDER_CREATE]: {},
	[BehaviorModule_t.PRODUCTION_UPDATE]: {
		'MaxQueueEntries': {
			name: 'MaxQueueEntries',
			type: 'integer',
			description: 'The max queue entries'
		},
		'ConstructionCompleteDuration': {
			name: 'ConstructionCompleteDuration',
			type: 'integer',
			description: 'The construction complete duration'
		},
		'QuantityModifier': {
			name: 'QuantityModifier',
			type: [IniTypes_t.OBJECT, 'integer'],
			description: 'The quantity modifier',
			numberOfValues: [2]
		},
		'DisabledTypesToProcess': {
			name: 'DisabledTypesToProcess',
			type: 'string',
			description: 'The disabled types to process'
		},
		'NumDoorAnimations': {
			name: 'NumDoorAnimations',
			type: 'integer',
			description: 'The num door animations',
			validValues: ['1', '2', '3', '4']
		},
		'DoorOpeningTime': {
			name: 'DoorOpeningTime',
			type: 'integer',
			description: 'The door opening time'
		},
		'DoorWaitOpenTime': {
			name: 'DoorWaitOpenTime',
			type: 'integer',
			description: 'The door wait open time'
		},
		'DoorCloseTime': {
			name: 'DoorCloseTime',
			type: 'integer',
			description: 'The door close time'
		}
	},
	[BehaviorModule_t.PROJECTILE_STREAM_UPDATE]: {},
	[BehaviorModule_t.PRONE_UPDATE]: {
		'DamageToFramesRatio': {
			name: 'DamageToFramesRatio',
			type: 'float',
			description: 'The damage to frames ratio'
		}
	},
	[BehaviorModule_t.PROPAGANDA_TOWER_BEHAVIOR]: {
		'Radius': {
			name: 'Radius',
			type: 'float',
			description: 'The radius'
		},
		'DelayBetweenUpdates': {
			name: 'DelayBetweenUpdates',
			type: 'integer',
			description: 'The delay between updates'
		},
		'HealPercentEachSecond': {
			name: 'HealPercentEachSecond',
			type: 'percent',
			description: 'The heal percent each second'
		},
		'PulseFX': {
			name: 'PulseFX',
			type: IniTypes_t.FXLIST,
			description: 'The pulse fx'
		},
		'AffectsSelf': {
			name: 'AffectsSelf',
			type: 'boolean',
			description: 'The affects self'
		},
		'UpgradeRequired': {
			name: 'UpgradeRequired',
			type: IniTypes_t.UPGRADE,
			description: 'The upgrade required'
		},
		'UpgradedHealPercentEachSecond': {
			name: 'UpgradedHealPercentEachSecond',
			type: 'percent',
			description: 'The upgraded heal percent each second'
		},
		'UpgradedPulseFX': {
			name: 'UpgradedPulseFX',
			type: IniTypes_t.FXLIST,
			description: 'The upgraded pulse fx'
		}
	},
	[BehaviorModule_t.QUEUE_PRODUCTION_EXIT_UPDATE]: {
		'UnitCreatePoint': {
			name: 'UnitCreatePoint',
			type: ['string', 'string', 'string'],
			description: 'The unit create point',
			prefix: ['X:', 'Y:', 'Z:'],
			ignoreCase: true
		},
		'NaturalRallyPoint': {
			name: 'NaturalRallyPoint',
			type: ['string', 'string', 'string'],
			description: 'The natural rally point',
			prefix: ['X:', 'Y:', 'Z:'],
			ignoreCase: true
		},
		'ExitDelay': {
			name: 'ExitDelay',
			type: 'integer',
			description: 'The exit delay'
		},
		'InitialBurst': {
			name: 'InitialBurst',
			type: 'integer',
			description: 'The initial burst'
		}
	},
	[BehaviorModule_t.RADAR_UPGRADE]: {
		...baseUpgradeProperties,
		'DisableProof': {
			name: 'DisableProof',
			type: 'boolean',
			description: 'The disable proof'
		}
	},
	[BehaviorModule_t.RADAR_UPDATE]: {
		'RadarExtendTime': {
			name: 'RadarExtendTime',
			type: 'integer',
			description: 'The radar extend time'
		}
	},
	[BehaviorModule_t.RADIUS_DECAL_UPDATE]: {},
	[BehaviorModule_t.RAILED_TRANSPORT_AI_UPDATE]: {
		'PathPrefixName': {
			name: 'PathPrefixName',
			type: 'string',
			description: 'The path prefix name'
		}
	},
	[BehaviorModule_t.RAILED_TRANSPORT_CONTAIN]: {
		'Slots': {
			name: 'Slots',
			type: 'integer',
			description: 'The slots'
		},
		'DamagePercentToUnits': {
			name: 'DamagePercentToUnits',
			type: 'percent',
			description: 'The damage percent to units'
		},
		'AllowInsideKindOf': {
			name: 'AllowInsideKindOf',
			type: 'string',
			description: 'The allow inside kind of',
			validValues: Object.values(kindOfs_t)
		},
		'ForbidInsideKindOf': {
			name: 'ForbidInsideKindOf',
			type: 'string',
			description: 'The forbid inside kind of',
			validValues: Object.values(kindOfs_t)
		},
		'DoorOpenTime': {
			name: 'DoorOpenTime',
			type: 'integer',
			description: 'The door open time'
		},
		'ScatterNearbyOnExit': {
			name: 'ScatterNearbyOnExit',
			type: 'boolean',
			description: 'The scatter nearby on exit'
		},
		'DestroyRidersWhoAreNotFreeToExit': {
			name: 'DestroyRidersWhoAreNotFreeToExit',
			type: 'boolean',
			description: 'The destroy riders who are not free to exit'
		},
		'ResetMoodCheckTimeOnExit': {
			name: 'ResetMoodCheckTimeOnExit',
			type: 'boolean',
			description: 'The reset mood check time on exit'
		},
		'OrientLikeContainerOnExit': {
			name: 'OrientLikeContainerOnExit',
			type: 'boolean',
			description: 'The orient like container on exit'
		},
		'KeepContainerVelocityOnExit': {
			name: 'KeepContainerVelocityOnExit',
			type: 'boolean',
			description: 'The keep container velocity on exit'
		}
	},
	[BehaviorModule_t.RAILED_TRANSPORT_DOCK_UPDATE]: {
		'NumberApproachPositions': {
			name: 'NumberApproachPositions',
			type: 'integer',
			description: 'The number approach positions'
		},
		'PullInsideDuration': {
			name: 'PullInsideDuration',
			type: 'integer',
			description: 'The pull inside duration'
		},
		'PushOutsideDuration': {
			name: 'PushOutsideDuration',
			type: 'integer',
			description: 'The push outside duration'
		},
		'ToleranceDistance': {
			name: 'ToleranceDistance',
			type: 'integer',
			description: 'The tolerance distance'
		}
	},
	[BehaviorModule_t.RAILROAD_BEHAVIOR]: {
		'IsLocomotive': {
			name: 'IsLocomotive',
			type: 'boolean',
			description: 'The is locomotive'
		},
		'CrashFXTemplateName': {
			name: 'CrashFXTemplateName',
			type: IniTypes_t.OBJECT,
			description: 'The crash fx template name'
		},
		'PathPrefixName': {
			name: 'PathPrefixName',
			type: 'string',
			description: 'The path prefix name'
		},
		'CarriageTemplateName': {
			name: 'CarriageTemplateName',
			type: IniTypes_t.OBJECT,
			description: 'The carriage template name'
		},
		'BigMetalBounceSound': {
			name: 'BigMetalBounceSound',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The big metal bounce sound'
		},
		'SmallMetalBounceSound': {
			name: 'SmallMetalBounceSound',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The small metal bounce sound'
		},
		'MeatyBounceSound': {
			name: 'MeatyBounceSound',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The meaty bounce sound'
		},
		'RunningGarrisonSpeedMax': {
			name: 'RunningGarrisonSpeedMax',
			type: 'integer',
			description: 'The running garrison speed max'
		},
		'KillSpeedMin': {
			name: 'KillSpeedMin',
			type: 'integer',
			description: 'The kill speed min'
		},
		'SpeedMax': {
			name: 'SpeedMax',
			type: 'integer',
			description: 'The speed max'
		},
		'WaitAtStationTime': {
			name: 'WaitAtStationTime',
			type: 'integer',
			description: 'The wait at station time'
		},
		'RunningSound': {
			name: 'RunningSound',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The running sound'
		},
		'ClicketyClackSound': {
			name: 'ClicketyClackSound',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The clickety clack sound'
		},
		'WhistleSound': {
			name: 'WhistleSound',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The whistle sound'
		},
		'Friction': {
			name: 'Friction',
			type: 'float',
			description: 'The friction'
		}
	},
	[BehaviorModule_t.REPLACE_OBJECT_UPGRADE]: {
		...baseUpgradeProperties,
		'ReplaceObject': {
			name: 'ReplaceObject',
			type: IniTypes_t.OBJECT,
			description: 'The replace object'
		}
	},
	[BehaviorModule_t.REBUILD_HOLE_BEHAVIOR]: {
		'WorkerObjectName': {
			name: 'WorkerObjectName',
			type: IniTypes_t.OBJECT,
			description: 'The worker object name'
		},
		'WorkerRespawnDelay': {
			name: 'WorkerRespawnDelay',
			type: 'integer',
			description: 'The worker respawn delay'
		},
		'HoleHealthRegen%PerSecond': {
			name: 'HoleHealthRegen%PerSecond',
			type: 'percent',
			description: 'The hole health regen % per second'
		}
	},
	[BehaviorModule_t.REBUILD_HOLE_EXPOSE_DIE]: {
		'HoleName': {
			name: 'HoleName',
			type: IniTypes_t.OBJECT,
			description: 'The hole name'
		},
		'HoleMaxHealth': {
			name: 'HoleMaxHealth',
			type: 'float',
			description: 'The hole max health'
		},
		'TransferAttackers': {
			name: 'TransferAttackers',
			type: 'boolean',
			description: 'The transfer attackers'
		},
		'DeathTypes': {
			name: 'DeathTypes',
			type: 'string',
			description: 'The death types',
			validValues: Object.values(DeathType_t)
		},
		'RequiredStatus': {
			name: 'RequiredStatus',
			type: 'string',
			description: 'The required status',
			validValues: Object.values(Status_t)
		},
		'ExemptStatus': {
			name: 'ExemptStatus',
			type: 'string',
			description: 'The exempt status',
			validValues: Object.values(Status_t)
		}
	},
	[BehaviorModule_t.REPAIR_DOCK_UPDATE]: {
		'TimeForFullHeal': {
			name: 'TimeForFullHeal',
			type: 'integer',
			description: 'The time for full heal'
		},
		'AllowsPassthrough': {
			name: 'AllowsPassthrough',
			type: 'boolean',
			description: 'The allows passthrough'
		},
		'NumberOfApproachPositions': {
			name: 'NumberOfApproachPositions',
			type: 'integer',
			description: 'The number of approach positions'
		}
	},
	[BehaviorModule_t.RIDER_CHANGE_CONTAIN]: {
		'Rider1': {
			name: 'Rider1',
			type: [IniTypes_t.OBJECT, 'string', 'string', 'string', IniTypes_t.COMMAND_SET, IniTypes_t.LOCOMOTOR],
			description: 'The rider 1',
			validValues: [null, allowedConditionStates, Object.values(WeaponSetCondition_t), Object.values(Status_t), null, null]
		},
		'Rider2': {
			name: 'Rider2',
			type: [IniTypes_t.OBJECT, 'string', 'string', 'string', IniTypes_t.COMMAND_SET, IniTypes_t.LOCOMOTOR],
			description: 'The rider 1',
			validValues: [null, allowedConditionStates, Object.values(WeaponSetCondition_t), Object.values(Status_t), null, null]
		},
		'Rider3': {
			name: 'Rider3',
			type: [IniTypes_t.OBJECT, 'string', 'string', 'string', IniTypes_t.COMMAND_SET, IniTypes_t.LOCOMOTOR],
			description: 'The rider 3',
			validValues: [null, allowedConditionStates, Object.values(WeaponSetCondition_t), Object.values(Status_t), null, null]
		},
		'Rider4': {
			name: 'Rider4',
			type: [IniTypes_t.OBJECT, 'string', 'string', 'string', IniTypes_t.COMMAND_SET, IniTypes_t.LOCOMOTOR],
			description: 'The rider 4',
			validValues: [null, allowedConditionStates, Object.values(WeaponSetCondition_t), Object.values(Status_t), null, null]
		},
		'Rider5': {
			name: 'Rider5',
			type: [IniTypes_t.OBJECT, 'string', 'string', 'string', IniTypes_t.COMMAND_SET, IniTypes_t.LOCOMOTOR],
			description: 'The rider 5',
			validValues: [null, allowedConditionStates, Object.values(WeaponSetCondition_t), Object.values(Status_t), null, null]
		},
		'Rider6': {
			name: 'Rider6',
			type: [IniTypes_t.OBJECT, 'string', 'string', 'string', IniTypes_t.COMMAND_SET, IniTypes_t.LOCOMOTOR],
			description: 'The rider 6',
			validValues: [null, allowedConditionStates, Object.values(WeaponSetCondition_t), Object.values(Status_t), null, null]
		},
		'Rider7': {
			name: 'Rider7',
			type: [IniTypes_t.OBJECT, 'string', 'string', 'string', IniTypes_t.COMMAND_SET, IniTypes_t.LOCOMOTOR],
			description: 'The rider 7',
			validValues: [null, allowedConditionStates, Object.values(WeaponSetCondition_t), Object.values(Status_t), null, null]
		},
		'Rider8': {
			name: 'Rider8',
			type: [IniTypes_t.OBJECT, 'string', 'string', 'string', IniTypes_t.COMMAND_SET, IniTypes_t.LOCOMOTOR],
			description: 'The rider 8',
			validValues: [null, allowedConditionStates, Object.values(WeaponSetCondition_t), Object.values(Status_t), null, null]
		},
		'ScuttleDelay': {
			name: 'ScuttleDelay',
			type: 'integer',
			description: 'The scuttle delay'
		},
		'ScuttleStatus': {
			name: 'ScuttleStatus',
			type: 'string',
			description: 'The scuttle status',
			validValues: Object.values(Status_t)
		},
		'Slots': {
			name: 'Slots',
			type: 'integer',
			description: 'The slots'
		},
		'DamagePercentToUnits': {
			name: 'DamagePercentToUnits',
			type: 'percent',
			description: 'The damage percent to units'
		},
		'AllowInsideKindOf': {
			name: 'AllowInsideKindOf',
			type: 'string',
			description: 'The allow inside kind of',
			validValues: Object.values(kindOfs_t)
		},
		'ForbidInsideKindOf': {
			name: 'ForbidInsideKindOf',
			type: 'string',
			description: 'The forbid inside kind of',
			validValues: Object.values(kindOfs_t)
		},
		'ExitDelay': {
			name: 'ExitDelay',
			type: 'integer',
			description: 'The exit delay'
		},
		'NumberOfExitPaths': {
			name: 'NumberOfExitPaths',
			type: 'integer',
			description: 'The number of exit paths'
		},
		'GoAggressiveOnExit': {
			name: 'GoAggressiveOnExit',
			type: 'boolean',
			description: 'The go aggressive on exit'
		},
		'BurnedDeathToUnits': {
			name: 'BurnedDeathToUnits',
			type: 'boolean',
			description: 'The burned death to units'
		},
		'BurnedDeathToUnitsPercent': {
			name: 'BurnedDeathToUnitsPercent',
			type: 'percent',
			description: 'The burned death to units percent'
		},
		'ExitPitchRate': {
			name: 'ExitPitchRate',
			type: 'integer',
			description: 'The exit pitch rate'
		},
		'ExitBone': {
			name: 'ExitBone',
			type: 'string',
			description: 'The exit bone'
		},
		'DoorOpenTime': {
			name: 'DoorOpenTime',
			type: 'integer',
			description: 'The door open time'
		},
		'HealthRegen%PerSec': {
			name: 'HealthRegen%PerSec',
			type: 'percent',
			description: 'The health regen % per sec'
		},
		'DestroyRidersWhoAreNotFreeToExit': {
			name: 'DestroyRidersWhoAreNotFreeToExit',
			type: 'boolean',
			description: 'The destroy riders who are not free to exit'
		},
		'ResetMoodCheckTimeOnExit': {
			name: 'ResetMoodCheckTimeOnExit',
			type: 'boolean',
			description: 'The reset mood check time on exit'
		},
		'InitialPayload': {
			name: 'InitialPayload',
			type: [IniTypes_t.OBJECT, 'integer'],
			description: 'The initial payload'
		},
		'ArmedRidersUpgradeMyWeaponSet': {
			name: 'ArmedRidersUpgradeMyWeaponSet',
			type: 'boolean',
			description: 'The armed riders upgrade my weapon set'
		},
		'DelayExitInAir': {
			name: 'DelayExitInAir',
			type: 'boolean',
			description: 'The delay exit in air'
		},
		'EnterSound': {
			name: 'EnterSound',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The enter sound'
		},
		'ExitSound': {
			name: 'ExitSound',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The exit sound'
		}
	},
	[BehaviorModule_t.SALVAGE_CRATE_COLLIDE]: {
		'WeaponChance': {
			name: 'WeaponChance',
			type: 'percent',
			description: 'The weapon chance'
		},
		'LevelChance': {
			name: 'LevelChance',
			type: 'percent',
			description: 'The level chance'
		},
		'MoneyChance': {
			name: 'MoneyChance',
			type: 'percent',
			description: 'The money chance'
		},
		'MinMoney': {
			name: 'MinMoney',
			type: 'integer',
			description: 'The min money'
		},
		'MaxMoney': {
			name: 'MaxMoney',
			type: 'integer',
			description: 'The max money'
		},
		'RequiredKindOf': {
			name: 'RequiredKindOf',
			type: 'string',
			description: 'The required kind of',
			validValues: Object.values(kindOfs_t)
		},
		'ForbiddenKindOf': {
			name: 'ForbiddenKindOf',
			type: 'string',
			description: 'The forbidden kind of',
			validValues: Object.values(kindOfs_t)
		},
		'ForbidOwnerPlayer': {
			name: 'ForbidOwnerPlayer',
			type: 'boolean',
			description: 'The forbid owner player'
		},
		'HumanOnly': {
			name: 'HumanOnly',
			type: 'boolean',
			description: 'The human only'
		},
		'BuildingPickup': {
			name: 'BuildingPickup',
			type: 'boolean',
			description: 'The building pickup'
		},
		'PickupScience': {
			name: 'PickupScience',
			type: IniTypes_t.SCIENCE,
			description: 'The pickup science'
		},
		'ExecuteFX': {
			name: 'ExecuteFX',
			type: IniTypes_t.FXLIST,
			description: 'The execute fx'
		},
		'ExecuteAnimation': {
			name: 'ExecuteAnimation',
			type: IniTypes_t.ANIMATION,
			description: 'The execute animation'
		},
		'ExecuteAnimationTime': {
			name: 'ExecuteAnimationTime',
			type: 'integer',
			description: 'The execute animation time'
		},
		'ExecuteAnimationZRise': {
			name: 'ExecuteAnimationZRise',
			type: 'integer',
			description: 'The execute animation z rise'
		},
		'ExecuteAnimationFades': {
			name: 'ExecuteAnimationFades',
			type: 'boolean',
			description: 'The execute animation fades'
		},
	},
	[BehaviorModule_t.SABOTAGE_POWER_PLANT_CRATE_COLLIDE]: {
		'SabotagePowerDuration': {
			name: 'SabotagePowerDuration',
			type: 'float',
			description: 'The sabotage power duration'
		},
		...crateCollideProoperties
	},
	[BehaviorModule_t.SABOTAGE_SUPPLY_DROPZONE_CRATE_COLLIDE]: {
		'StealCashAmount': {
			name: 'StealCashAmount',
			type: 'integer',
			description: 'The steal cash amount'
		},
		...crateCollideProoperties
	},
	[BehaviorModule_t.SABOTAGE_SUPERWEAPON_CRATE_COLLIDE]: {
		...crateCollideProoperties
	},
	[BehaviorModule_t.SABOTAGE_COMMAND_CENTER_CRATE_COLLIDE]: {
		...crateCollideProoperties
	},
	[BehaviorModule_t.SABOTAGE_SUPPLY_CENTER_CRATE_COLLIDE]: {
		'StealCashAmount': {
			name: 'StealCashAmount',
			type: 'integer',
			description: 'The steal cash amount'
		},
		...crateCollideProoperties
	},
	[BehaviorModule_t.SABOTAGE_MILITARY_FACTORY_CRATE_COLLIDE]: {
		'SabotageDuration': {
			name: 'SabotageDuration',
			type: 'float',
			description: 'The sabotage duration'
		},
		...crateCollideProoperties
	},
	[BehaviorModule_t.SABOTAGE_FAKE_BUILDING_CRATE_COLLIDE]: {
		...crateCollideProoperties
	},
	[BehaviorModule_t.SABOTAGE_INTERNET_CENTER_CRATE_COLLIDE]: {
		'SabotageDuration': {
			name: 'SabotageDuration',
			type: 'float',
			description: 'The sabotage duration'
		},
		...crateCollideProoperties
	},
	[BehaviorModule_t.SHROUD_CRATE_COLLIDE]: {
		...crateCollideProoperties
	},
	[BehaviorModule_t.SLAVED_UPDATE]: {
		'GuardMaxRange': {
			name: 'GuardMaxRange',
			type: 'integer',
			description: 'The guard max range'
		},
		'GuardWanderRange': {
			name: 'GuardWanderRange',
			type: 'integer',
			description: 'The guard wander range'
		},
		'AttackRange': {
			name: 'AttackRange',
			type: 'integer',
			description: 'The attack range'
		},
		'AttackWanderRange': {
			name: 'AttackWanderRange',
			type: 'integer',
			description: 'The attack wander range'
		},
		'ScoutRange': {
			name: 'ScoutRange',
			type: 'integer',
			description: 'The scout range'
		},
		'ScoutWanderRange': {
			name: 'ScoutWanderRange',
			type: 'integer',
			description: 'The scout wander range'
		},
		'StayOnSameLayerAsMaster': {
			name: 'StayOnSameLayerAsMaster',
			type: 'boolean',
			description: 'The stay on same layer as master'
		},
		'DistToTargetToGrantRangeBonus': {
			name: 'DistToTargetToGrantRangeBonus',
			type: 'integer',
			description: 'The dist to target to grant range bonus'
		},
		'RepairRange': {
			name: 'RepairRange',
			type: 'integer',
			description: 'The repair range'
		},
		'RepairMinAltitude': {
			name: 'RepairMinAltitude',
			type: 'float',
			description: 'The repair min altitude'
		},
		'RepairMaxAltitude': {
			name: 'RepairMaxAltitude',
			type: 'float',
			description: 'The repair max altitude'
		},
		'RepairRatePerSecond': {
			name: 'RepairRatePerSecond',
			type: 'integer',
			description: 'The repair rate per second'
		},
		'RepairWhenBelowHealth%': {
			name: 'RepairWhenBelowHealth%',
			type: 'percent',
			description: 'The repair when below health %'
		},
		'RepairMinReadyTime': {
			name: 'RepairMinReadyTime',
			type: 'integer',
			description: 'The repair min ready time'
		},
		'RepairMaxReadyTime': {
			name: 'RepairMaxReadyTime',
			type: 'integer',
			description: 'The repair max ready time'
		},
		'RepairMinWeldTime': {
			name: 'RepairMinWeldTime',
			type: 'integer',
			description: 'The repair min weld time'
		},
		'RepairMaxWeldTime': {
			name: 'RepairMaxWeldTime',
			type: 'integer',
			description: 'The repair max weld time'
		},
		'RepairWeldingSys': {
			name: 'RepairWeldingSys',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The repair welding sys'
		},
		'RepairWeldingFXBone': {
			name: 'RepairWeldingFXBone',
			type: 'string',
			description: 'The repair welding fx bone'
		}
	},
	[BehaviorModule_t.SLOW_DEATH_BEHAVIOR]: {
		'DeathTypes': {
			name: 'DeathTypes',
			type: 'string',
			description: 'The death types',
			validValues: Object.values(DeathType_t)
		},
		'SinkRate': {
			name: 'SinkRate',
			type: 'float',
			description: 'The sink rate'
		},
		'ExemptStatus': {
			name: 'ExemptStatus',
			type: 'string',
			description: 'The exempt status',
			validValues: Object.values(Status_t)
		},
		'RequiredStatus': {
			name: 'RequiredStatus',
			type: 'string',
			description: 'The required status',
			validValues: Object.values(Status_t)
		},
		'ProbabilityModifier': {
			name: 'ProbabilityModifier',
			type: 'integer',
			description: 'The probability modifier'
		},
		'ModifierBonusPerOverkillPercent': {
			name: 'ModifierBonusPerOverkillPercent',
			type: 'percent',
			description: 'The modifier bonus per overkill percent'
		},
		'SinkDelay': {
			name: 'SinkDelay',
			type: 'integer',
			description: 'The sink delay'
		},
		'SinkDelayVariance': {
			name: 'SinkDelayVariance',
			type: 'integer',
			description: 'The sink delay variance'
		},
		'DestructionDelay': {
			name: 'DestructionDelay',
			type: 'integer',
			description: 'The destruction delay'
		},
		'DestructionDelayVariance': {
			name: 'DestructionDelayVariance',
			type: 'integer',
			description: 'The destruction delay variance'
		},
		'DestructionAltitude': {
			name: 'DestructionAltitude',
			type: 'integer',
			description: 'The destruction altitude'
		},
		'FlingForce': {
			name: 'FlingForce',
			type: 'integer',
			description: 'The fling force'
		},
		'FlingForceVariance': {
			name: 'FlingForceVariance',
			type: 'integer',
			description: 'The fling force variance'
		},
		'FlingPitch': {
			name: 'FlingPitch',
			type: 'integer',
			description: 'The fling pitch'
		},
		'FlingPitchVariance': {
			name: 'FlingPitchVariance',
			type: 'integer',
			description: 'The fling pitch variance'
		},
		'FX': {
			name: 'FX',
			type: ['string', IniTypes_t.FXLIST],
			description: 'The fx',
			numberOfValues: [2],
			validValues: [['INITIAL', 'MIDPOINT', 'FINAL'], null]
		},
		'OCL': {
			name: 'OCL',
			type: ['string', IniTypes_t.OBJECT_CREATION_LIST],
			description: 'The object creation list',
			numberOfValues: [2],
			validValues: [['INITIAL', 'MIDPOINT', 'FINAL'], null]
		},
		'Weapon': {
			name: 'Weapon',
			type: ['string', IniTypes_t.WEAPON],
			description: 'The weapon',
			numberOfValues: [2],
			validValues: [['INITIAL', 'MIDPOINT', 'FINAL'], null]
		}
	},
	[BehaviorModule_t.SPAWN_BEHAVIOR]: {
		'SpawnTemplateName': {
			name: 'SpawnTemplateName',
			type: 'string',
			description: 'The spawn template name'
		},
		'SpawnNumber': {
			name: 'SpawnNumber',
			type: 'integer',
			description: 'The spawn number'
		},
		'SpawnReplaceDelay': {
			name: 'SpawnReplaceDelay',
			type: 'integer',
			description: 'The spawn replace delay'
		},
		'SpawnedRequireSpawner': {
			name: 'SpawnedRequireSpawner',
			type: 'boolean',
			description: 'The spawned require spawner'
		},
		'OneShot': {
			name: 'OneShot',
			type: 'boolean',
			description: 'The one shot'
		},
		'CanReclaimOrphans': {
			name: 'CanReclaimOrphans',
			type: 'boolean',
			description: 'The can reclaim orphans'
		},
		'AggregateHealth': {
			name: 'AggregateHealth',
			type: 'boolean',
			description: 'The aggregate health'
		},
		'ExitByBudding': {
			name: 'ExitByBudding',
			type: 'boolean',
			description: 'The exit by budding'
		},
		'InitialBurst': {
			name: 'InitialBurst',
			type: 'integer',
			description: 'The initial burst'
		},
		'SlavesHaveFreeWill': {
			name: 'SlavesHaveFreeWill',
			type: 'boolean',
			description: 'The slaves have free will'
		}
	},
	[BehaviorModule_t.SPAWN_POINT_PRODUCTION_EXIT_UPDATE]: {
		'SpawnPointBoneName': {
			name: 'SpawnPointBoneName',
			type: 'string',
			description: 'The spawn point bone name'
		}
	},
	[BehaviorModule_t.SPECIAL_ABILITY]: {
		'SpecialPowerTemplate': {
			name: 'SpecialPowerTemplate',
			type: 'string',
			description: 'The special power template'
		},
		'UpdateModuleStartsAttack': {
			name: 'UpdateModuleStartsAttack',
			type: 'boolean',
			description: 'The update module starts attack'
		},
		'InitiateSound': {
			name: 'InitiateSound',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The initiate sound'
		},
		'StartsPaused': {
			name: 'StartsPaused',
			type: 'boolean',
			description: 'The starts paused',
			requiredValues: [{
				type: BehaviorModule_t.UNPAUSE_SPECIAL_POWER_UPGRADE
			}]
		}
	},
	[BehaviorModule_t.SPECIAL_ABILITY_UPDATE]: {
		'SpecialPowerTemplate': {
			name: 'SpecialPowerTemplate',
			type: IniTypes_t.SPECIAL_POWER,
			description: 'The special power template'
		},
		'StartAbilityRange': {
			name: 'StartAbilityRange',
			type: 'float',
			description: 'The start ability range'
		},
		'AbilityAbortRange': {
			name: 'AbilityAbortRange',
			type: 'float',
			description: 'The ability abort range'
		},
		'PreparationTime': {
			name: 'PreparationTime',
			type: 'integer',
			description: 'The preparation time'
		},
		'PreTriggerUnstealthTime': {
			name: 'PreTriggerUnstealthTime',
			type: 'integer',
			description: 'The pre trigger unstealth time'
		},
		'SkipPackingWithNoTarget': {
			name: 'SkipPackingWithNoTarget',
			type: 'boolean',
			description: 'The skip packing with no target'
		},
		'SpecialObject': {
			name: 'SpecialObject',
			type: 'string',
			description: 'The special object'
		},
		'SpecialObjectAttachToBone': {
			name: 'SpecialObjectAttachToBone',
			type: 'string',
			description: 'The special object attach to bone'
		},
		'SpecialObjectsPersistent': {
			name: 'SpecialObjectsPersistent',
			type: 'boolean',
			description: 'The special objects persistent'
		},
		'MaxSpecialObjects': {
			name: 'MaxSpecialObjects',
			type: 'integer',
			description: 'The max special objects'
		},
		'EffectDuration': {
			name: 'EffectDuration',
			type: 'integer',
			description: 'The effect duration'
		},
		'EffectValue': {
			name: 'EffectValue',
			type: 'integer',
			description: 'The effect value'
		},
		'UniqueSpecialObjectTargets': {
			name: 'UniqueSpecialObjectTargets',
			type: 'boolean',
			description: 'The unique special object targets'
		},
		'SpecialObjectsPersistWhenOwnerDies': {
			name: 'SpecialObjectsPersistWhenOwnerDies',
			type: 'boolean',
			description: 'The special objects persist when owner dies'
		},
		'AlwaysValidateSpecialObjects': {
			name: 'AlwaysValidateSpecialObjects',
			type: 'boolean',
			description: 'The always validate special objects'
		},
		'FlipOwnerAfterPacking': {
			name: 'FlipOwnerAfterPacking',
			type: 'boolean',
			description: 'The flip owner after packing'
		},
		'FlipOwnerAfterUnpacking': {
			name: 'FlipOwnerAfterUnpacking',
			type: 'boolean',
			description: 'The flip owner after unpacking'
		},
		'FleeRangeAfterCompletion': {
			name: 'FleeRangeAfterCompletion',
			type: 'float',
			description: 'The flee range after completion'
		},
		'DisableFXParticleSystem': {
			name: 'DisableFXParticleSystem',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The disable fx particle system'
		},
		'DoCaptureFX': {
			name: 'DoCaptureFX',
			type: 'boolean',
			description: 'The do capture fx'
		},
		'PackSound': {
			name: 'PackSound',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The pack sound'
		},
		'UnpackSound': {
			name: 'UnpackSound',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The unpack sound'
		},
		'PrepSoundLoop': {
			name: 'PrepSoundLoop',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The prep sound loop'
		},
		'TriggerSound': {
			name: 'TriggerSound',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The trigger sound'
		},
		'LoseStealthOnTrigger': {
			name: 'LoseStealthOnTrigger',
			type: 'boolean',
			description: 'The lose stealth on trigger'
		},
		'AwardXPForTriggering': {
			name: 'AwardXPForTriggering',
			type: 'integer',
			description: 'The award xp for triggering'
		},
		'SkillPointsForTriggering': {
			name: 'SkillPointsForTriggering',
			type: 'integer',
			description: 'The skill points for triggering'
		},
		'ApproachRequiresLOS': {
			name: 'ApproachRequiresLOS',
			type: 'boolean',
			description: 'The approach requires los'
		},
		'NeedToFaceTarget': {
			name: 'NeedToFaceTarget',
			type: 'boolean',
			description: 'The need to face target'
		},
		'UnpackTime': {
			name: 'UnpackTime',
			type: 'integer',
			description: 'The unpack time'
		},
		'PackTime': {
			name: 'PackTime',
			type: 'integer',
			description: 'The pack time'
		},
		'PersistentPrepTime': {
			name: 'PersistentPrepTime',
			type: 'integer',
			description: 'The persistent prep time'
		},
		'PersistenceRequiresRecharge': {
			name: 'PersistenceRequiresRecharge',
			type: 'boolean',
			description: 'The persistence requires recharge'
		}
	},
	[BehaviorModule_t.SPECIAL_POWER_CREATE]: {},
	[BehaviorModule_t.SPECIAL_POWER_COMPLETION_DIE]: {
		'SpecialPowerTemplate': {
			name: 'SpecialPowerTemplate',
			type: IniTypes_t.SPECIAL_POWER,
			description: 'The special power template'
		}
	},
	[BehaviorModule_t.SPECTRE_GUNSHIP_UPDATE]: {
		'SpecialPowerTemplate': {
			name: 'SpecialPowerTemplate',
			type: IniTypes_t.SPECIAL_POWER,
			description: 'The special power template'
		},
		'GunshipOrbitRadius': {
			name: 'GunshipOrbitRadius',
			type: 'float',
			description: 'The gunship orbit radius'
		},
		'TargetingReticleRadius': {
			name: 'TargetingReticleRadius',
			type: 'float',
			description: 'The targeting reticle radius'
		},
		'AttackAreaRadius': {
			name: 'AttackAreaRadius',
			type: 'float',
			description: 'The attack area radius'
		},
		'OrbitTime': {
			name: 'OrbitTime',
			type: 'integer',
			description: 'The orbit time'
		},
		'OrbitInsertionSlope': {
			name: 'OrbitInsertionSlope',
			type: 'float',
			description: 'The orbit insertion slope'
		},
		'HowitzerWeaponTemplate': {
			name: 'HowitzerWeaponTemplate',
			type: IniTypes_t.WEAPON,
			description: 'The howitzer weapon template'
		},
		'HowitzerFiringRate': {
			name: 'HowitzerFiringRate',
			type: 'integer',
			description: 'The howitzer firing rate'
		},
		'HowitzerFollowLag': {
			name: 'HowitzerFollowLag',
			type: 'integer',
			description: 'The howitzer follow lag'
		},
		'RandomOffsetForHowitzer': {
			name: 'RandomOffsetForHowitzer',
			type: 'float',
			description: 'The random offset for howitzer'
		},
		'GattlingTemplateName': {
			name: 'GattlingTemplateName',
			type: IniTypes_t.OBJECT,
			description: 'The gattling template name'
		},
		'GattlingStrafeFXParticleSystem': {
			name: 'GattlingStrafeFXParticleSystem',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The gattling strafe fx particle system'
		},
		'StrafingIncrement': {
			name: 'StrafingIncrement',
			type: 'float',
			description: 'The strafing increment'
		},
		// TODO: Add Targeting decals
	},
	[BehaviorModule_t.SPECTRE_GUNSHIP_DEPLOYMENT_UPDATE]: {
		'SpecialPowerTemplate': {
			name: 'SpecialPowerTemplate',
			type: IniTypes_t.SPECIAL_POWER,
			description: 'The special power template'
		},
		'RequiredScience': {
			name: 'RequiredScience',
			type: IniTypes_t.SCIENCE,
			description: 'The required science'
		},
		'GunshipTemplateName': {
			name: 'GunshipTemplateName',
			type: IniTypes_t.OBJECT,
			description: 'The gunship template name'
		},
		'AttackAreaRadius': {
			name: 'AttackAreaRadius',
			type: 'integer',
			description: 'The attack area radius'
		},
		'CreateLocation': {
			name: 'CreateLocation',
			type: 'string',
			description: 'The create location',
			validValues: Object.values(CreateLocation_t)
		}
	},
	[BehaviorModule_t.SPY_VISION_UPDATE]: {
		...baseUpgradeProperties,
		'NeedsUpgrade': {
			name: 'NeedsUpgrade',
			type: 'boolean',
			description: 'The needs upgrade'
		},
		'SelfPowered': {
			name: 'SelfPowered',
			type: 'boolean',
			description: 'The self powered'
		},
		'SelfPoweredDuration': {
			name: 'SelfPoweredDuration',
			type: 'integer',
			description: 'The self powered duration'
		},
		'SelfPoweredInterval': {
			name: 'SelfPoweredInterval',
			type: 'integer',
			description: 'The self powered interval'
		},
		'SpyOnKindof': {
			name: 'SpyOnKindof',
			type: 'string',
			description: 'The spy on kindof, defaults to all defined kindofs',
			validValues: Object.values(kindOfs_t)
		}
	},
	[BehaviorModule_t.SPY_VISION_SPECIAL_POWER]: {
		'SpecialPowerTemplate': {
			name: 'SpecialPowerTemplate',
			type: IniTypes_t.SPECIAL_POWER,
			description: 'The special power template'
		},
		'BaseDuration': {
			name: 'BaseDuration',
			type: 'integer',
			description: 'The base duration'
		},
		'StartsPaused': {
			name: 'StartsPaused',
			type: 'boolean',
			description: 'The starts paused',
			requiredValues: [{
				type: BehaviorModule_t.UNPAUSE_SPECIAL_POWER_UPGRADE
			}]
		}
	},
	[BehaviorModule_t.SQUISH_COLLIDE]: {},
	[BehaviorModule_t.STATUS_BITS_UPGRADE]: {
		...baseUpgradeProperties,
		'StatusToSet': {
			name: 'StatusToSet',
			type: 'string',
			description: 'The status to set',
			validValues: Object.values(Status_t)
		},
		'StatusToClear': {
			name: 'StatusToClear',
			type: 'string',
			description: 'The status to clear',
			validValues: Object.values(Status_t)
		}
	},
	[BehaviorModule_t.SMART_BOMB_TARGET_HOMING_UPDATE]: {
		'CourseCorrectionScalar': {
			name: 'CourseCorrectionScalar',
			type: 'float',
			description: 'The course correction scalar'
		}
	},
	[BehaviorModule_t.STEALTH_DETECTOR_UPDATE]: {
		'DetectionRate': {
			name: 'DetectionRate',
			type: 'integer',
			description: 'The detection rate'
		},
		'DetectionRange': {
			name: 'DetectionRange',
			type: 'integer',
			description: 'The detection range'
		},
		'CanDetectWhileGarrisoned': {
			name: 'CanDetectWhileGarrisoned',
			type: 'boolean',
			description: 'The can detect while garrisoned'
		},
		'CanDetectWhileContained': {
			name: 'CanDetectWhileContained',
			type: 'boolean',
			description: 'The can detect while contained'
		},
		'ExtraRequiredKindOf': {
			name: 'ExtraRequiredKindOf',
			type: 'string',
			description: 'The extra required kind of',
			validValues: Object.values(kindOfs_t)
		},
		'ExtraForbiddenKindOf': {
			name: 'ExtraForbiddenKindOf',
			type: 'string',
			description: 'The extra forbidden kind of',
			validValues: Object.values(kindOfs_t)
		},
		'PingSound': {
			name: 'PingSound',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The ping sound'
		},
		'LoudPingSound': {
			name: 'LoudPingSound',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The loud ping sound'
		},
		'IRParticleSysName': {
			name: 'IRParticleSysName',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The ir particle sys name'
		},
		'IRBrightParticleSysName': {
			name: 'IRBrightParticleSysName',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The ir bright particle sys name'
		},
		'IRGridParticleSysName': {
			name: 'IRGridParticleSysName',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The ir grid particle sys name'
		},
		'IRBeaconParticleSysName': {
			name: 'IRBeaconParticleSysName',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The ir beacon particle sys name'
		},
		'IRParticleSysBone': {
			name: 'IRParticleSysBone',
			type: 'string',
			description: 'The ir particle sys bone'
		},
		'InitiallyDisabled': {
			name: 'InitiallyDisabled',
			type: 'boolean',
			description: 'The initially disabled'
		}
	},
	[BehaviorModule_t.STEALTH_UPDATE]: {
		'UseRiderStealth': {
			name: 'UseRiderStealth',
			type: 'boolean',
			description: 'The use rider stealth'
		},
		'StealthDelay': {
			name: 'StealthDelay',
			type: 'integer',
			description: 'The stealth delay'
		},
		'MoveThresholdSpeed': {
			name: 'MoveThresholdSpeed',
			type: 'integer',
			description: 'The move threshold speed'
		},
		'StealthForbiddenConditions': {
			name: 'StealthForbiddenConditions',
			type: 'string',
			description: 'The stealth forbidden conditions',
			validValues: allowedConditionStates
		},
		'HintDetectableConditions': {
			name: 'HintDetectableConditions',
			type: 'string',
			description: 'The hint detectable conditions',
			validValues: Object.values(Status_t)
		},
		'FriendlyOpacityMin': {
			name: 'FriendlyOpacityMin',
			type: 'percent',
			description: 'The friendly opacity min'
		},
		'FriendlyOpacityMax': {
			name: 'FriendlyOpacityMax',
			type: 'percent',
			description: 'The friendly opacity max'
		},
		'PulseFrequency': {
			name: 'PulseFrequency',
			type: 'integer',
			description: 'The pulse frequency'
		},
		'RevealDistanceFromTarget': {
			name: 'RevealDistanceFromTarget',
			type: 'float',
			description: 'The reveal distance from target'
		},
		'OrderIdleEnemiesToAttackMeUponReveal': {
			name: 'OrderIdleEnemiesToAttackMeUponReveal',
			type: 'boolean',
			description: 'The order idle enemies to attack me upon reveal'
		},
		'ForbiddenStatus': {
			name: 'ForbiddenStatus',
			type: 'string',
			description: 'The forbidden status',
			validValues: Object.values(Status_t)
		},
		'RequiredStatus': {
			name: 'RequiredStatus',
			type: 'string',
			description: 'The required status',
			validValues: Object.values(Status_t)
		},
		'InnateStealth': {
			name: 'InnateStealth',
			type: 'boolean',
			description: 'The innate stealth'
		},
		'EnemyDetectionEvaEvent': {
			name: 'EnemyDetectionEvaEvent',
			type: IniTypes_t.EVA_EVENT,
			description: 'The enemy detection eva event'
		},
		'OwnDetectionEvaEvent': {
			name: 'OwnDetectionEvaEvent',
			type: IniTypes_t.EVA_EVENT,
			description: 'The own detection eva event'
		},
		'GrantedBySpecialPower': {
			name: 'GrantedBySpecialPower',
			type: 'boolean',
			description: 'The granted by special power'
		},
		'BlackMarketCheckDelay': {
			name: 'BlackMarketCheckDelay',
			type: 'integer',
			description: 'The black market check delay'
		},
		'DisguisesAsTeam': {
			name: 'DisguisesAsTeam',
			type: 'boolean',
			description: 'The disguises as team',
			requiredValues: [{
				type: kindOfs_t.DISGUISER
			}]
		},
		'DisguiseFX': {
			name: 'DisguiseFX',
			type: IniTypes_t.FXLIST,
			description: 'The disguise fx',
			requiredValues: [{
				type: kindOfs_t.DISGUISER
			}]
		},
		'DisguiseRevealFX': {
			name: 'DisguiseRevealFX',
			type: IniTypes_t.FXLIST,
			description: 'The disguise reveal fx',
			requiredValues: [{
				type: kindOfs_t.DISGUISER
			}]
		},
		'DisguiseTransitionTime': {
			name: 'DisguiseTransitionTime',
			type: 'integer',
			description: 'The disguise transition time',
			requiredValues: [{
				type: kindOfs_t.DISGUISER
			}]
		},
		'DisguiseRevealTransitionTime': {
			name: 'DisguiseRevealTransitionTime',
			type: 'integer',
			description: 'The disguise reveal transition time',
			requiredValues: [{
				type: kindOfs_t.DISGUISER
			}]
		}
	},
	[BehaviorModule_t.STEALTH_UPGRADE]: {
		...baseUpgradeProperties
	},
	[BehaviorModule_t.STICKY_BOMB_UPDATE]: {
		'GeometryBasedDamageWeapon': {
			name: 'GeometryBasedDamageWeapon',
			type: IniTypes_t.WEAPON,
			description: 'The geometry based damage weapon'
		},
		'GeometryBasedDamageFX': {
			name: 'GeometryBasedDamageFX',
			type: IniTypes_t.FXLIST,
			description: 'The geometry based damage fx'
		}
	},
	[BehaviorModule_t.STRUCTURE_COLLAPSE_UPDATE]: {
		'ExemptStatus': {
			name: 'ExemptStatus',
			type: 'string',
			description: 'The exempt status',
			validValues: Object.values(Status_t)
		},
		'MinCollapseDelay': {
			name: 'MinCollapseDelay',
			type: 'integer',
			description: 'The min collapse delay'
		},
		'MaxCollapseDelay': {
			name: 'MaxCollapseDelay',
			type: 'integer',
			description: 'The max collapse delay'
		},
		'CollapseDamping': {
			name: 'CollapseDamping',
			type: 'float',
			description: 'The collapse damping'
		},
		'MaxShudder': {
			name: 'MaxShudder',
			type: 'float',
			description: 'The max shudder'
		},
		'MinBurstDelay': {
			name: 'MinBurstDelay',
			type: 'integer',
			description: 'The min burst delay'
		},
		'MaxBurstDelay': {
			name: 'MaxBurstDelay',
			type: 'integer',
			description: 'The max burst delay'
		},
		'BigBurstFrequency': {
			name: 'BigBurstFrequency',
			type: 'integer',
			description: 'The big burst frequency'
		},
		'OCL': {
			name: 'OCL',
			type: ['string', IniTypes_t.OBJECT_CREATION_LIST],
			description: 'The object creation list',
			validValues: [['INITIAL', 'FINAL', 'DELAY', 'BURST'], null]
		},
		'FXList': {
			name: 'FXList',
			type: ['string', IniTypes_t.FXLIST],
			description: 'The fx list',
			validValues: [['INITIAL', 'FINAL', 'DELAY', 'BURST'], null]
		}
	},
	[BehaviorModule_t.STRUCTURE_TOPPLE_UPDATE]: {
		// TODO: add properties
	},
	[BehaviorModule_t.SUB_OBJECTS_UPGRADE]: {
		...baseUpgradeProperties,
		'ShowSubObjects': {
			name: 'ShowSubObjects',
			type: 'string',
			description: 'The show sub objects'
		},
		'HideSubObjects': {
			name: 'HideSubObjects',
			type: 'string',
			description: 'The hide sub objects'
		}
	},
	[BehaviorModule_t.SUPPLY_CENTER_CREATE]: {},
	[BehaviorModule_t.SUPPLY_CENTER_DOCK_UPDATE]: {
		'NumberApproachPositions': {
			name: 'NumberApproachPositions',
			type: 'integer',
			description: 'The number approach positions'
		},
		'AllowsPassthrough': {
			name: 'AllowsPassthrough',
			type: 'boolean',
			description: 'The allows passthrough'
		},
		'GrantTemporaryStealth': {
			name: 'GrantTemporaryStealth',
			type: 'integer',
			description: 'The grant temporary stealth'
		}
	},
	[BehaviorModule_t.SUPPLY_CENTER_PRODUCTION_EXIT_UPDATE]: {
		'UnitCreatePoint': {
			name: 'UnitCreatePoint',
			type: ['string', 'string', 'string'],
			description: 'The unit create point',
			prefix: ['X:', 'Y:', 'Z:']
		},
		'NaturalRallyPoint': {
			name: 'NaturalRallyPoint',
			type: ['string', 'string', 'string'],
			description: 'The natural rally point',
			prefix: ['X:', 'Y:', 'Z:']
		},
		'GrantTemporaryStealth': {
			name: 'GrantTemporaryStealth',
			type: 'integer',
			description: 'The grant temporary stealth'
		}
	},
	[BehaviorModule_t.SUPPLY_TRUCK_AI_UPDATE]: {},
	[BehaviorModule_t.SUPPLY_WAREHOUSE_CREATE]: {},
	[BehaviorModule_t.SUPPLY_WAREHOUSE_CRIPPLE_BEHAVIOR]: {
		'SelfHealingSupression': {
			name: 'SelfHealingSupression',
			type: 'integer',
			description: 'The self healing supression'
		},
		'SelfHealDelay': {
			name: 'SelfHealDelay',
			type: 'integer',
			description: 'The self heal delay'
		},
		'SelfHealAmount': {
			name: 'SelfHealAmount',
			type: 'integer',
			description: 'The self heal amount'
		}
	},
	[BehaviorModule_t.SUPPLY_WAREHOUSE_DOCK_UPDATE]: {
		'NumberApproachPositions': {
			name: 'NumberApproachPositions',
			type: 'integer',
			description: 'The number approach positions'
		},
		'AllowPassthrough': {
			name: 'AllowPassthrough',
			type: 'boolean',
			description: 'The allow passthrough'
		},
		'StartingBoxes': {
			name: 'StartingBoxes',
			type: 'integer',
			description: 'The starting boxes'
		},
		'DeleteWhenEmpty': {
			name: 'DeleteWhenEmpty',
			type: 'boolean',
			description: 'The delete when empty'
		}
	},
	[BehaviorModule_t.TECH_BUILDING_BEHAVIOR]: {
		'PulseFX': {
			name: 'PulseFX',
			type: IniTypes_t.FXLIST,
			description: 'The pulse fx'
		},
		'PulseFXRate': {
			name: 'PulseFXRate',
			type: 'integer',
			description: 'The pulse fx rate'
		}
	},
	[BehaviorModule_t.TENSIL_FORMATION_UPDATE]: {
		'Enabled': {
			name: 'Enabled',
			type: 'boolean',
			description: 'The enabled'
		},
		'CrackSound': {
			name: 'CrackSound',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The crack sound'
		}
	},
	[BehaviorModule_t.TOPPLE_UPDATE]: {},
	[BehaviorModule_t.TRANSITION_DAMAGE_FX]: {
		// TODO: add properties
	},
	[BehaviorModule_t.TRANSPORT_AI_UPDATE]: {},
	[BehaviorModule_t.TRANSPORT_CONTAIN]: {
		'Slots': {
			name: 'Slots',
			type: 'integer',
			description: 'The slots'
		},
		'DamagePercentToUnits': {
			name: 'DamagePercentToUnits',
			type: 'percent',
			description: 'The damage percent to units'
		},
		'AllowInsideKindOf': {
			name: 'AllowInsideKindOf',
			type: 'string',
			description: 'The allow inside kind of',
			validValues: Object.values(kindOfs_t)
		},
		'ForbidInsideKindOf': {
			name: 'ForbidInsideKindOf',
			type: 'string',
			description: 'The forbid inside kind of',
			validValues: Object.values(kindOfs_t)
		},
		'AllowAlliesInside': {
			name: 'AllowAlliesInside',
			type: 'boolean',
			description: 'The allow allies inside'
		},
		'AllowNeutralInside': {
			name: 'AllowNeutralInside',
			type: 'boolean',
			description: 'The allow neutral inside'
		},
		'AllowEnemiesInside': {
			name: 'AllowEnemiesInside',
			type: 'boolean',
			description: 'The allow enemies inside'
		},
		'ExitDelay': {
			name: 'ExitDelay',
			type: 'integer',
			description: 'The exit delay'
		},
		'NumberOfExitPaths': {
			name: 'NumberOfExitPaths',
			type: 'integer',
			description: 'The number of exit paths'
		},
		'GoAggressiveOnExit': {
			name: 'GoAggressiveOnExit',
			type: 'boolean',
			description: 'The go aggressive on exit'
		},
		'ScatterNearbyOnExit': {
			name: 'ScatterNearbyOnExit',
			type: 'boolean',
			description: 'The scatter nearby on exit'
		},
		'OrientLikeContainerOnExit': {
			name: 'OrientLikeContainerOnExit',
			type: 'boolean',
			description: 'The orient like container on exit'
		},
		'KeepContainerVelocityOnExit': {
			name: 'KeepContainerVelocityOnExit',
			type: 'boolean',
			description: 'The keep container velocity on exit'
		},
		'BurnedDeathToUnits': {
			name: 'BurnedDeathToUnits',
			type: 'boolean',
			description: 'The burned death to units'
		},
		'ExitPitchRate': {
			name: 'ExitPitchRate',
			type: 'integer',
			description: 'The exit pitch rate'
		},
		'ExitBone': {
			name: 'ExitBone',
			type: 'string',
			description: 'The exit bone'
		},
		'DoorOpenTime': {
			name: 'DoorOpenTime',
			type: 'integer',
			description: 'The door open time'
		},
		'HealthRegen%PerSec': {
			name: 'HealthRegen%PerSec',
			type: 'percent',
			description: 'The health regen percent per sec'
		},
		'DestroyRidersWhoAreNotFreeToExit': {
			name: 'DestroyRidersWhoAreNotFreeToExit',
			type: 'boolean',
			description: 'The destroy riders who are not free to exit'
		},
		'ResetMoodCheckTimeOnExit': {
			name: 'ResetMoodCheckTimeOnExit',
			type: 'boolean',
			description: 'The reset mood check time on exit'
		},
		'InitialPayload': {
			name: 'InitialPayload',
			type: [IniTypes_t.OBJECT, 'integer'],
			description: 'The initial payload'
		},
		'ArmedRidersUpgradeMyWeaponSet': {
			name: 'ArmedRidersUpgradeMyWeaponSet',
			type: 'boolean',
			description: 'The armed riders upgrade my weapon set'
		},
		'DelayExitInAir': {
			name: 'DelayExitInAir',
			type: 'boolean',
			description: 'The delay exit in air'
		},
		'EnterSound': {
			name: 'EnterSound',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The enter sound'
		},
		'ExitSound': {
			name: 'ExitSound',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The exit sound'
		},
		'WeaponBonusPassedToPassengers': {
			name: 'WeaponBonusPassedToPassengers',
			type: 'boolean',
			description: 'The weapon bonus passed to passengers'
		},
		'PassengersAllowedToFire': {
			name: 'PassengersAllowedToFire',
			type: 'boolean',
			description: 'The passengers allowed to fire'
		}
	},
	[BehaviorModule_t.TUNNEL_CONTAIN]: {
		'TimeForFullHeal': {
			name: 'TimeForFullHeal',
			type: 'integer',
			description: 'The time for full heal'
		},
		'EnterSound': {
			name: 'EnterSound',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The enter sound'
		},
		'ExitSound': {
			name: 'ExitSound',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The exit sound'
		},
		'NumberOfExitPaths': {
			name: 'NumberOfExitPaths',
			type: 'integer',
			description: 'The number of exit paths'
		},
		'AllowAlliesInside': {
			name: 'AllowAlliesInside',
			type: 'boolean',
			description: 'The allow allies inside'
		},
		'AllowNeutralInside': {
			name: 'AllowNeutralInside',
			type: 'boolean',
			description: 'The allow neutral inside'
		},
		'AllowEnemiesInside': {
			name: 'AllowEnemiesInside',
			type: 'boolean',
			description: 'The allow enemies inside'
		},
		'ExemptStatus': {
			name: 'ExemptStatus',
			type: 'string',
			description: 'The exempt status',
			validValues: Object.values(Status_t)
		}
	},
	[BehaviorModule_t.UNIT_CRATE_COLLIDE]: {
		...crateCollideProoperties,
		'UnitCount': {
			name: 'UnitCount',
			type: 'integer',
			description: 'The unit count'
		},
		'UnitName': {
			name: 'UnitName',
			type: IniTypes_t.OBJECT,
			description: 'The unit name'
		}
	},
	[BehaviorModule_t.UNPAUSE_SPECIAL_POWER_UPGRADE]: {
		...baseUpgradeProperties,
		'SpecialPowerTemplate': {
			name: 'SpecialPowerTemplate',
			type: IniTypes_t.SPECIAL_POWER,
			description: 'The special power template'
		}
	},
	[BehaviorModule_t.UPGRADE_DIE]: {
		'DeathTypes': {
			name: 'DeathTypes',
			type: 'string',
			description: 'The death types',
			validValues: Object.values(DeathType_t)
		},
		'UpgradeToRemove': {
			name: 'UpgradeToRemove',
			type: IniTypes_t.UPGRADE,
			description: 'The upgrade to remove'
		},
		'RequiredStatus': {
			name: 'RequiredStatus',
			type: 'string',
			description: 'The required status',
			validValues: Object.values(Status_t)
		},
		'ExemptStatus': {
			name: 'ExemptStatus',
			type: 'string',
			description: 'The exempt status',
			validValues: Object.values(Status_t)
		}
	},
	[BehaviorModule_t.VETERANCY_GAIN_CREATE]: {
		'StartingLevel': {
			name: 'StartingLevel',
			type: 'string',
			description: 'The starting level',
			validValues: Object.values(VeterancyTypes_t)
		},
		'ScienceRequired': {
			name: 'ScienceRequired',
			type: IniTypes_t.SCIENCE,
			description: 'The science required'
		}
	},
	[BehaviorModule_t.VETERANCY_CRATE_COLLIDE]: {
		...crateCollideProoperties,
		'EffectRange': {
			name: 'EffectRange',
			type: 'float',
			description: 'The effect range'
		},
		'AddsOwnerVeterancy': {
			name: 'AddsOwnerVeterancy',
			type: 'boolean',
			description: 'The adds owner veterancy'
		},
		'IsPilot': {
			name: 'IsPilot',
			type: 'boolean',
			description: 'The is pilot'
		}
	},
	[BehaviorModule_t.WANDER_AI_UPDATE]: {},
	[BehaviorModule_t.WAVE_GUIDE_UPDATE]: {
		'WaveDelay': {
			name: 'WaveDelay',
			type: 'integer',
			description: 'The wave delay'
		},
		'YSize': {
			name: 'YSize',
			type: 'float',
			description: 'The y size'
		},
		'LinearWaveSpacing': {
			name: 'LinearWaveSpacing',
			type: 'float',
			description: 'The linear wave spacing'
		},
		'WaveBendMagnitude': {
			name: 'WaveBendMagnitude',
			type: 'float',
			description: 'The wave bend magnitude'
		},
		'WaterVelocity': {
			name: 'WaterVelocity',
			type: 'float',
			description: 'The water velocity'
		},
		'PreferredHeight': {
			name: 'PreferredHeight',
			type: 'float',
			description: 'The preferred height'
		},
		'ShorelineEffectDistance': {
			name: 'ShorelineEffectDistance',
			type: 'float',
			description: 'The shoreline effect distance'
		},
		'DamageRadius': {
			name: 'DamageRadius',
			type: 'float',
			description: 'The damage radius'
		},
		'DamageAmount': {
			name: 'DamageAmount',
			type: 'integer',
			description: 'The damage amount'
		},
		'ToppleForce': {
			name: 'ToppleForce',
			type: 'float',
			description: 'The topple force'
		},
		'RandomSplashSound': {
			name: 'RandomSplashSound',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The random splash sound'
		},
		'RandomSplashSoundFrequency': {
			name: 'RandomSplashSoundFrequency',
			type: 'integer',
			description: 'The random splash sound frequency'
		},
		'BridgeParticle': {
			name: 'BridgeParticle',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The bridge particle'
		},
		'BridgeParticleAngleFudge': {
			name: 'BridgeParticleAngleFudge',
			type: 'float',
			description: 'The bridge particle angle fudge'
		},
		'LoopingSound': {
			name: 'LoopingSound',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The looping sound'
		}
	},
	[BehaviorModule_t.WEAPON_BONUS_UPGRADE]: {
		...baseUpgradeProperties
	},
	[BehaviorModule_t.WEAPON_BONUS_UPDATE]: {
		'RequiredAffectKindOf': {
			name: 'RequiredAffectKindOf',
			type: 'string',
			description: 'The required affect kind of',
			validValues: Object.values(kindOfs_t)
		},
		'ForbiddenAffectKindOf': {
			name: 'ForbiddenAffectKindOf',
			type: 'string',
			description: 'The forbidden affect kind of',
			validValues: Object.values(kindOfs_t)
		},
		'BonusDuration': {
			name: 'BonusDuration',
			type: 'integer',
			description: 'The bonus duration'
		},
		'BonusDelay': {
			name: 'BonusDelay',
			type: 'integer',
			description: 'The bonus delay'
		},
		'BonusRange': {
			name: 'BonusRange',
			type: 'integer',
			description: 'The bonus range'
		},
		'BonusConditionType': {
			name: 'BonusConditionType',
			type: 'string',
			description: 'The bonus condition type',
			validValues: WeaponBonuses
		}
	},
	[BehaviorModule_t.WEAPON_SET_UPGRADE]: {
		...baseUpgradeProperties
	},
	[BehaviorModule_t.WORKER_AI_UPDATE]: {
		'RepairHealthPercentPerSecond': {
			name: 'RepairHealthPercentPerSecond',
			type: 'percent',
			description: 'The repair health percent per second'
		},
		'BoredTime': {
			name: 'BoredTime',
			type: 'integer',
			description: 'The bored time'
		},
		'BoredRange': {
			name: 'BoredRange',
			type: 'integer',
			description: 'The bored range'
		},
		'MaxBoxes': {
			name: 'MaxBoxes',
			type: 'integer',
			description: 'The max boxes'
		},
		'AutoAcquireEnemiesWhenIdle': {
			name: 'AutoAcquireEnemiesWhenIdle',
			type: 'boolean',
			description: 'The auto acquire enemies when idle'
		},
		'UpgradedSupplyBoost': {
			name: 'UpgradedSupplyBoost',
			type: 'integer',
			description: 'The upgraded supply boost'
		},
		'SupplyCenterActionDelay': {
			name: 'SupplyCenterActionDelay',
			type: 'integer',
			description: 'The supply center action delay'
		},
		'SupplyWarehouseActionDelay': {
			name: 'SupplyWarehouseActionDelay',
			type: 'integer',
			description: 'The supply warehouse action delay'
		},
		'SupplyWarehouseScanDistance': {
			name: 'SupplyWarehouseScanDistance',
			type: 'integer',
			description: 'The supply warehouse scan distance'
		},
		'SuppliesDepletedVoice': {
			name: 'SuppliesDepletedVoice',
			type: IniTypes_t.AUDIO_EVENT,
			description: 'The supplies depleted voice'
		}
	}
};

export function getBehaviorModulePropertyTree(behaviorModule: BehaviorModule_t): RBTree<string> {
	return BehaviorModuleTrees[behaviorModule];
}

export function getBehaviorModulePropertyDefinition(behaviorModule: BehaviorModule_t, propertyName: string): PropertyDefinition | undefined {
	return BehaviorModuleProperties[behaviorModule]?.[propertyName];
}

// Populate the property trees
Object.entries(BehaviorModuleProperties).forEach(([key, value]) => {
	Object.entries(value).forEach(([propKey, propValue]) => {
		BehaviorModuleTrees[key as BehaviorModule_t].insert(propKey);
	});
});
