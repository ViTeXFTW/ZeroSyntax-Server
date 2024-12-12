import { PropertyDefinition } from '../../handlers/interfaces/IPropertyDefinition';
import { IniTypes_t } from '../IniType_t';
import { VeterancyTypes_t } from '../PropertyTypes';

// ==================
// ===== LISTS ======
// ==================

export enum DamageTypes_t {
	NONE = 'NONE',
	ALL = 'ALL',
	DEFAULT = 'DEFAULT',
	HEALING = 'HEALING',
	EXPLOSION = 'EXPLOSION',
	CRUSH = 'CRUSH',
	ARMOR_PIERCING = 'ARMOR_PIERCING',
	SMALL_ARMS = 'SMALL_ARMS',
	GATTLING = 'GATTLING',
	RADIATION = 'RADIATION',
	FLAME = 'FLAME',
	LASER = 'LASER',
	SNIPER = 'SNIPER',
	POISON = 'POISON',
	UNRESISTABLE = 'UNRESISTABLE',
	WATER = 'WATER',
	DEPLOY = 'DEPLOY',
	SURRENDER = 'SURRENDER',
	HACK = 'HACK',
	KILL_PILOT = 'KILL_PILOT',
	PENALTY = 'PENALTY',
	FALLING = 'FALLING',
	MELEE = 'MELEE',
	DISARM = 'DISARM',
	HAZARD_CLEANUP = 'HAZARD_CLEANUP',
	INFANTRY_MISSILE = 'INFANTRY_MISSILE',
	AURORA_BOMB = 'AURORA_BOMB',
	LAND_MINE = 'LAND_MINE',
	JET_MISSILES = 'JET_MISSILES',
	STEALTHJET_MISSILES = 'STEALTHJET_MISSILES',
	MOLOTOV_COCKTAIL = 'MOLOTOV_COCKTAIL',
	COMANCHE_VULCAN = 'COMANCHE_VULCAN',
	SUBDUAL_MISSILE = 'SUBDUAL_MISSILE',
	SUBDUAL_VEHICLE = 'SUBDUAL_VEHICLE',
	SUBDUAL_BUILDING = 'SUBDUAL_BUILDING',
	SUBDUAL_UNRESISTABLE = 'SUBDUAL_UNRESISTABLE',
	MICROWAVE = 'MICROWAVE',
	KILL_GARRISONED = 'KILL_GARRISONED',
	STATUS = 'STATUS',
	PARTICLE_BEAM = 'PARTICLE_BEAM'
}

// ==================
// === PROPERTIES ===
// ==================

export const DamageFXPropertyMap = new Map<string, PropertyDefinition>();
export const DamageFXProperties: PropertyDefinition[] = [
	{
		name: 'ThrottleTime',
		type: ['string', 'float'],
		description: 'The time between each damage application.',
		validValues: [Object.values(DamageTypes_t), null],
		numberOfValues: [2],
		ignoreCase: true
	},
	{
		name: 'AmountForMajorFX',
		type: ['string', 'float'],
		description: 'The amount of damage to apply for major FX.',
		validValues: [Object.values(DamageTypes_t), null],
		numberOfValues: [2],
		ignoreCase: true
	},
	{
		name: 'AmountForMinorFX',
		type: ['string', 'float'],
		description: 'The amount of damage to apply for minor FX.',
		validValues: [Object.values(DamageTypes_t), null],
		numberOfValues: [2],
		ignoreCase: true
	},
	{
		name: 'MajorFX',
		type: ['string', IniTypes_t.PARTICLE_SYSTEM],
		description: 'The major FX to apply.',
		validValues: [Object.values(DamageTypes_t), null],
		numberOfValues: [2],
		ignoreCase: true
	},
	{
		name: 'MinorFX',
		type: ['string', IniTypes_t.PARTICLE_SYSTEM],
		description: 'The minor FX to apply.',
		validValues: [Object.values(DamageTypes_t), null],
		numberOfValues: [2],
		ignoreCase: true
	},
	{
		name: 'VeterancyMajorFX',
		type: ['string', 'string', IniTypes_t.PARTICLE_SYSTEM],
		description: 'The major FX to apply for veterancy.',
		validValues: [Object.values(VeterancyTypes_t), Object.values(DamageTypes_t), null],
		numberOfValues: [3],
		ignoreCase: true
	},
	{
		name: 'VeterancyMinorFX',
		type: ['string', 'string', IniTypes_t.PARTICLE_SYSTEM],
		description: 'The minor FX to apply for veterancy.',
		validValues: [Object.values(VeterancyTypes_t), Object.values(DamageTypes_t), null],
		numberOfValues: [3],
		ignoreCase: true
	}
];

Object.values(DamageFXProperties).forEach(property => {
	DamageFXPropertyMap.set(property.name, property);
});
