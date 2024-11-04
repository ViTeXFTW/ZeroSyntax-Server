import { RBTree } from 'bintrees';
import { BehaviorModule_t } from './BehaviorModule_t';
import { PropertyDefinition } from '../properties';
import { IniTypes_t } from './IniType_t';
import { AutoAcquireEnemiesWhenIdle_t, ChangeType_t, DeathType_t, kindOfs_t, Status_t, TimeStamp_t, WeaponSlot_t } from './PropertyTypes';


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
	[BehaviorModule_t.CLEANUP_HAZARD_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.COMMAND_BUTTON_HUNT_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BehaviorModule_t.COMMAND_BUTTON_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
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
}

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
}

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
}

const baseTurretProperties: {[key: string]: PropertyDefinition} = {
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
		type: 'integer',
		description: 'The angle sweep of the turret when it is firing'
	},
	'TurretSweepSpeedModifier': {
		name: 'TurretSweepSpeedModifier',
		type: 'float',
		description: 'The speed modifier of the turret when it is sweeping'
	},
	'ControlledWeaponSlots': {
		name: 'ControlledWeaponSlots',
		type: Object.values(WeaponSlot_t),
		description: 'The weapon slots that the turret controls'
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
}

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
	[BehaviorModule_t.BONE_FX_UPDATE]: {},
	[BehaviorModule_t.BRIDGE_BEHAVIOR]: {},
	[BehaviorModule_t.BRIDGE_SCAFFOLD_BEHAVIOR]: {},
	[BehaviorModule_t.BRIDGE_TOWER_BEHAVIOR]: {},
	[BehaviorModule_t.CASH_BOUNTY_POWER]: {},
	[BehaviorModule_t.CASH_HACK_SPECIAL_POWER]: {},
	[BehaviorModule_t.CAVE_CONTAIN]: {},
	[BehaviorModule_t.COUNTERMEASURES_BEHAVIOR]: {},
	[BehaviorModule_t.CHECKPOINT_UPDATE]: {},
	[BehaviorModule_t.CHINOOK_AI_UPDATE]: {},
	[BehaviorModule_t.CLEANUP_HAZARD_UPDATE]: {},
	[BehaviorModule_t.COMMAND_BUTTON_HUNT_UPDATE]: {},
	[BehaviorModule_t.COMMAND_BUTTON_UPDATE]: {},
	[BehaviorModule_t.CONVERT_TO_CAR_BOMB_CRATE_COLLIDE]: {},
	[BehaviorModule_t.CONVERT_TO_HIJACKED_VEHICLE_CRATE_COLLIDE]: {},
	[BehaviorModule_t.COST_MODIFIER_UPGRADE]: {},
	[BehaviorModule_t.CREATE_CRATE_DIE]: {},
	[BehaviorModule_t.CREATE_OBJECT_DIE]: {},
	[BehaviorModule_t.CRUSH_DIE]: {},
	[BehaviorModule_t.DAM_DIE]: {},
	[BehaviorModule_t.DEFECTOR_SPECIAL_POWER]: {},
	[BehaviorModule_t.DEFAULT_PRODUCTION_EXIT_UPDATE]: {},
	[BehaviorModule_t.DELAYED_UPGRADE]: {},
	[BehaviorModule_t.DELAYED_WEAPON_SET_UPGRADE_UPDATE]: {},
	[BehaviorModule_t.DELETION_UPDATE]: {},
	[BehaviorModule_t.DELIVER_PAYLOAD_AI_UPDATE]: {},
	[BehaviorModule_t.DEMO_TRAP_UPDATE]: {},
	[BehaviorModule_t.DEPLOY_STYLE_AI_UPDATE]: {},
	[BehaviorModule_t.DESTROY_DIE]: {},
	[BehaviorModule_t.DOZER_AI_UPDATE]: {},
	[BehaviorModule_t.DUMB_PROJECTILE_BEHAVIOR]: {},
	[BehaviorModule_t.DYNAMIC_GEOMETRY_INFO_UPDATE]: {},
	[BehaviorModule_t.DYNAMIC_SHROUD_CLEARING_RANGE_UPDATE]: {},
	[BehaviorModule_t.EJECT_PILOT_DIE]: {},
	[BehaviorModule_t.EMP_UPDATE]: {},
	[BehaviorModule_t.ENEMY_NEAR_UPDATE]: {},
	[BehaviorModule_t.EXPERIENCE_SCALAR_UPGRADE]: {},
	[BehaviorModule_t.FIRE_SPREAD_UPDATE]: {},
	[BehaviorModule_t.FIRESTORM_DYNAMIC_GEOMETRY_INFO_UPDATE]: {},
	[BehaviorModule_t.FIRE_OCL_AFTER_WEAPON_COOLDOWN_UPDATE]: {},
	[BehaviorModule_t.FIRE_WEAPON_COLLIDE]: {},
	[BehaviorModule_t.FIRE_WEAPON_WHEN_DAMAGED_BEHAVIOR]: {},
	[BehaviorModule_t.FIRE_WEAPON_WHEN_DEAD_BEHAVIOR]: {},
	[BehaviorModule_t.FIRE_WEAPON_UPDATE]: {},
	[BehaviorModule_t.FIRE_WEAPON_POWER]: {},
	[BehaviorModule_t.FLIGHT_DECK_BEHAVIOR]: {},
	[BehaviorModule_t.FLAMMABLE_UPDATE]: {},
	[BehaviorModule_t.FLOAT_UPDATE]: {},
	[BehaviorModule_t.FX_LIST_DIE]: {},
	[BehaviorModule_t.GARRISON_CONTAIN]: {},
	[BehaviorModule_t.GRANT_STEALTH_BEHAVIOR]: {},
	[BehaviorModule_t.GRANT_UPGRADE_CREATE]: {},
	[BehaviorModule_t.GRANT_SCIENCE_UPGRADE]: {},
	[BehaviorModule_t.GENERATE_MINEFIELD_BEHAVIOR]: {},
	[BehaviorModule_t.INTERNET_HACK_CONTAIN]: {},
	[BehaviorModule_t.HACK_INTERNET_AI_UPDATE]: {},
	[BehaviorModule_t.HEAL_CRATE_COLLIDE]: {},
	[BehaviorModule_t.HEAL_CONTAIN]: {},
	[BehaviorModule_t.HEIGHT_DIE_UPDATE]: {},
	[BehaviorModule_t.HELICOPTER_SLOW_DEATH_BEHAVIOR]: {},
	[BehaviorModule_t.HIJACKER_UPDATE]: {},
	[BehaviorModule_t.HORDE_UPDATE]: {},
	[BehaviorModule_t.HELIX_CONTAIN]: {},
	[BehaviorModule_t.INSTANT_DEATH_BEHAVIOR]: {},
	[BehaviorModule_t.JET_AI_UPDATE]: {},
	[BehaviorModule_t.JET_SLOW_DEATH_BEHAVIOR]: {},
	[BehaviorModule_t.KEEP_OBJECT_DIE]: {},
	[BehaviorModule_t.LIFETIME_UPDATE]: {},
	[BehaviorModule_t.LOCK_WEAPON_CREATE]: {},
	[BehaviorModule_t.LOCOMOTOR_SET_UPGRADE]: {},
	[BehaviorModule_t.LEAFLET_DROP_BEHAVIOR]: {},
	[BehaviorModule_t.MAX_HEALTH_UPGRADE]: {},
	[BehaviorModule_t.MINEFIELD_BEHAVIOR]: {},
	[BehaviorModule_t.MISSILE_AI_UPDATE]: {},
	[BehaviorModule_t.MISSILE_LAUNCHER_BUILDING_UPDATE]: {},
	[BehaviorModule_t.MOB_MEMBER_SLAVED_UPDATE]: {},
	[BehaviorModule_t.MOB_NEXUS_CONTAIN]: {},
	[BehaviorModule_t.MONEY_CRATE_COLLIDE]: {},
	[BehaviorModule_t.MODEL_CONDITION_UPGRADE]: {},
	[BehaviorModule_t.NEUTRON_MISSILE_SLOW_DEATH_BEHAVIOR]: {},
	[BehaviorModule_t.NEUTRON_BLAST_BEHAVIOR]: {},
	[BehaviorModule_t.NEUTRON_MISSILE_UPDATE]: {},
	[BehaviorModule_t.OBJECT_CREATION_UPGRADE]: {},
	[BehaviorModule_t.OCL_SPECIAL_POWER]: {},
	[BehaviorModule_t.OCL_UPDATE]: {},
	[BehaviorModule_t.OPEN_CONTAIN]: {},
	[BehaviorModule_t.OVERCHARGE_BEHAVIOR]: {},
	[BehaviorModule_t.OVERLORD_CONTAIN]: {},
	[BehaviorModule_t.PARKING_PLACE_BEHAVIOR]: {},
	[BehaviorModule_t.PASSENGERS_FIRE_UPGRADE]: {},
	[BehaviorModule_t.PARACHUTE_CONTAIN]: {},
	[BehaviorModule_t.PARTICLE_UPLINK_CANNON_UPDATE]: {},
	[BehaviorModule_t.PHYSICS_BEHAVIOR]: {},
	[BehaviorModule_t.PILOT_FIND_VEHICLE_UPDATE]: {},
	[BehaviorModule_t.POINT_DEFENSE_LASER_UPDATE]: {},
	[BehaviorModule_t.POISONED_BEHAVIOR]: {},
	[BehaviorModule_t.POWER_PLANT_UPDATE]: {},
	[BehaviorModule_t.POWER_PLANT_UPGRADE]: {},
	[BehaviorModule_t.PREORDER_CREATE]: {},
	[BehaviorModule_t.PRODUCTION_UPDATE]: {},
	[BehaviorModule_t.PROJECTILE_STREAM_UPDATE]: {},
	[BehaviorModule_t.PRONE_UPDATE]: {},
	[BehaviorModule_t.PROPAGANDA_TOWER_BEHAVIOR]: {},
	[BehaviorModule_t.QUEUE_PRODUCTION_EXIT_UPDATE]: {},
	[BehaviorModule_t.RADAR_UPGRADE]: {},
	[BehaviorModule_t.RADAR_UPDATE]: {},
	[BehaviorModule_t.RADIUS_DECAL_UPDATE]: {},
	[BehaviorModule_t.RAILED_TRANSPORT_AI_UPDATE]: {},
	[BehaviorModule_t.RAILED_TRANSPORT_CONTAIN]: {},
	[BehaviorModule_t.RAILED_TRANSPORT_DOCK_UPDATE]: {},
	[BehaviorModule_t.RAILROAD_BEHAVIOR]: {},
	[BehaviorModule_t.REPLACE_OBJECT_UPGRADE]: {},
	[BehaviorModule_t.REBUILD_HOLE_BEHAVIOR]: {},
	[BehaviorModule_t.REBUILD_HOLE_EXPOSE_DIE]: {},
	[BehaviorModule_t.REPAIR_DOCK_UPDATE]: {},
	[BehaviorModule_t.RIDER_CHANGE_CONTAIN]: {},
	[BehaviorModule_t.SALVAGE_CRATE_COLLIDE]: {},
	[BehaviorModule_t.SABOTAGE_POWER_PLANT_CRATE_COLLIDE]: {},
	[BehaviorModule_t.SABOTAGE_SUPPLY_DROPZONE_CRATE_COLLIDE]: {},
	[BehaviorModule_t.SABOTAGE_SUPERWEAPON_CRATE_COLLIDE]: {},
	[BehaviorModule_t.SABOTAGE_COMMAND_CENTER_CRATE_COLLIDE]: {},
	[BehaviorModule_t.SABOTAGE_SUPPLY_CENTER_CRATE_COLLIDE]: {},
	[BehaviorModule_t.SABOTAGE_MILITARY_FACTORY_CRATE_COLLIDE]: {},
	[BehaviorModule_t.SABOTAGE_FAKE_BUILDING_CRATE_COLLIDE]: {},
	[BehaviorModule_t.SABOTAGE_INTERNET_CENTER_CRATE_COLLIDE]: {},
	[BehaviorModule_t.SHROUD_CRATE_COLLIDE]: {},
	[BehaviorModule_t.SLAVED_UPDATE]: {},
	[BehaviorModule_t.SLOW_DEATH_BEHAVIOR]: {},
	[BehaviorModule_t.SPAWN_BEHAVIOR]: {},
	[BehaviorModule_t.SPAWN_POINT_PRODUCTION_EXIT_UPDATE]: {},
	[BehaviorModule_t.SPECIAL_ABILITY]: {},
	[BehaviorModule_t.SPECIAL_ABILITY_UPDATE]: {},
	[BehaviorModule_t.SPECIAL_POWER_CREATE]: {},
	[BehaviorModule_t.SPECIAL_POWER_COMPLETION_DIE]: {},
	[BehaviorModule_t.SPECTRE_GUNSHIP_UPDATE]: {},
	[BehaviorModule_t.SPECTRE_GUNSHIP_DEPLOYMENT_UPDATE]: {},
	[BehaviorModule_t.SPY_VISION_UPDATE]: {},
	[BehaviorModule_t.SPY_VISION_SPECIAL_POWER]: {},
	[BehaviorModule_t.SQUISH_COLLIDE]: {},
	[BehaviorModule_t.STATUS_BITS_UPGRADE]: {},
	[BehaviorModule_t.SMART_BOMB_TARGET_HOMING_UPDATE]: {},
	[BehaviorModule_t.STEALTH_DETECTOR_UPDATE]: {},
	[BehaviorModule_t.STEALTH_UPDATE]: {},
	[BehaviorModule_t.STEALTH_UPGRADE]: {},
	[BehaviorModule_t.STICKY_BOMB_UPDATE]: {},
	[BehaviorModule_t.STRUCTURE_COLLAPSE_UPDATE]: {},
	[BehaviorModule_t.STRUCTURE_TOPPLE_UPDATE]: {},
	[BehaviorModule_t.SUB_OBJECTS_UPGRADE]: {},
	[BehaviorModule_t.SUPPLY_CENTER_CREATE]: {},
	[BehaviorModule_t.SUPPLY_CENTER_DOCK_UPDATE]: {},
	[BehaviorModule_t.SUPPLY_CENTER_PRODUCTION_EXIT_UPDATE]: {},
	[BehaviorModule_t.SUPPLY_TRUCK_AI_UPDATE]: {},
	[BehaviorModule_t.SUPPLY_WAREHOUSE_CREATE]: {},
	[BehaviorModule_t.SUPPLY_WAREHOUSE_CRIPPLE_BEHAVIOR]: {},
	[BehaviorModule_t.SUPPLY_WAREHOUSE_DOCK_UPDATE]: {},
	[BehaviorModule_t.TECH_BUILDING_BEHAVIOR]: {},
	[BehaviorModule_t.TENSIL_FORMATION_UPDATE]: {},
	[BehaviorModule_t.TOPPLE_UPDATE]: {},
	[BehaviorModule_t.TRANSITION_DAMAGE_FX]: {},
	[BehaviorModule_t.TRANSPORT_AI_UPDATE]: {},
	[BehaviorModule_t.TRANSPORT_CONTAIN]: {},
	[BehaviorModule_t.TUNNEL_CONTAIN]: {},
	[BehaviorModule_t.UNIT_CRATE_COLLIDE]: {},
	[BehaviorModule_t.UNPAUSE_SPECIAL_POWER_UPGRADE]: {},
	[BehaviorModule_t.UPGRADE_DIE]: {},
	[BehaviorModule_t.VETERANCY_GAIN_CREATE]: {},
	[BehaviorModule_t.VETERANCY_CRATE_COLLIDE]: {},
	[BehaviorModule_t.WANDER_AI_UPDATE]: {},
	[BehaviorModule_t.WAVE_GUIDE_UPDATE]: {},
	[BehaviorModule_t.WEAPON_BONUS_UPGRADE]: {},
	[BehaviorModule_t.WEAPON_BONUS_UPDATE]: {},
	[BehaviorModule_t.WEAPON_SET_UPGRADE]: {},
	[BehaviorModule_t.WORKER_AI_UPDATE]: {}
}

Object.entries(BehaviorModuleProperties).forEach(([key, value]) => {
	Object.entries(baseUpgradeProperties).forEach(([propKey, propValue]) => {
		value[propKey] = propValue;
	});
});

export function getBehaviorModulePropertyTree(behaviorModule: BehaviorModule_t): RBTree<string> {
	return BehaviorModuleTrees[behaviorModule];
}

export function getBehaviorModulePropertyDefinition(behaviorModule: BehaviorModule_t, propertyName: string): PropertyDefinition | undefined {
	return BehaviorModuleProperties[behaviorModule]?.[propertyName];
}
