import { PropertyDefinition } from '../../handlers/interfaces/IPropertyDefinition';

// =============
// === LISTS ===
// =============

export enum ArmorTypes_t {
	DEFAULT = 'DEFAULT',
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
	HEALING = 'HEALING',
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
	PARTICLE_BEAM = 'PARTICLE_BEAM',
	MICROWAVE = 'MICROWAVE',
	TOPPLING = 'TOPPLING'
}

// ==================
// === PROPERTIES ===
// ==================

export const ArmorPropertyMap: Map<string, PropertyDefinition> = new Map();
export const ArmorProperties: PropertyDefinition[] = [
	{
		name: 'Armor',
		type: ['string', 'percent'],
		description: 'The armor of the armor',
		validValues: [Object.values(ArmorTypes_t), null],
		numberOfValues: [2]
	}
];

ArmorProperties.forEach(property => {
	ArmorPropertyMap.set(property.name, property);
});
