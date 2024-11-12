import { PropertyDefinition } from '../../properties';

// ===============
// ==== LISTS ====
// ===============

enum LocomotorSurfaceTypes_t {
	GROUND = 'GROUND',
	RUBBLE = 'RUBBLE',
	WATER = 'WATER',
	AIR = 'AIR',
	CLIFF = 'CLIFF'
}

enum LocomotorZAxisBehaviorTypes_t {
	NO_Z_MOTIVE_FORCE = 'NO_Z_MOTIVE_FORCE',
	SEA_LEVEL = 'SEA_LEVEL',
	SURFACE_RELATIVE_HEIGHT = 'SURFACE_RELATIVE_HEIGHT',
	ABSOLUTE_HEIGHT = 'ABSOLUTE_HEIGHT',
	FIXED_SURFACE_RELATIVE_HEIGHT = 'FIXED_SURFACE_RELATIVE_HEIGHT',
	FIXED_ABSOLUTE_HEIGHT = 'FIXED_ABSOLUTE_HEIGHT',
	FIXED_RELATIVE_TO_GROUND_AND_BUILDINGS = 'FIXED_RELATIVE_TO_GROUND_AND_BUILDINGS',
	RELATIVE_TO_HIGHEST_LAYER = 'RELATIVE_TO_HIGHEST_LAYER'
}

enum LocomotorAppearanceTypes_t {
	TWO_LEGS = 'TWO_LEGS',
	CLIMBER = 'CLIMBER',
	FOUR_WHEELS = 'FOUR_WHEELS',
	TREADS = 'TREADS',
	HOVER = 'HOVER',
	THRUST = 'THRUST',
	WINGS = 'WINGS',
	OTHER = 'OTHER',
	MOTORCYCLE = 'MOTORCYCLE'
}

enum LocomotorGroupMovementPriorityTypes_t {
	MOVES_FRONT = 'MOVES_FRONT',
	MOVES_MIDDLE = 'MOVES_MIDDLE',
	MOVES_BACK = 'MOVES_BACK'
}

// ==================
// === PROPERTIES ===
// ==================

export const LocomotorPropertyMap = new Map<string, PropertyDefinition>();
export const LocomotorProperties: PropertyDefinition[] = [
	{
		name: 'Surfaces',
		type: 'string',
		description: 'The surfaces the locomotor can travel on.',
		validValues: Object.values(LocomotorSurfaceTypes_t),
		numberOfValues: [-1],
		ignoreCase: true
	},
	{
		name: 'Speed',
		type: 'float',
		description: 'The speed of the locomotor on the ground.'
	},
	{
		name: 'MinSpeed',
		type: 'float',
		description: 'The minimum speed of the locomotor.'
	},
	{
		name: 'SpeedDamaged',
		type: 'float',
		description: 'The speed of the locomotor on the ground when damaged.'
	},
	{
		name: 'SpeedLimitZ',
		type: 'float',
		description: 'The speed limit of the locomotor on the Z-axis.'
	},
	{
		name: 'TurnRate',
		type: 'float',
		description: 'The turn rate of the locomotor.'
	},
	{
		name: 'TurnRateDamaged',
		type: 'float',
		description: 'The acceleration of the locomotor.'
	},
	{
		name: 'TurnPivotOffset',
		type: 'float',
		description: 'The turn pivot offset of the locomotor.'
	},
	{
		name: 'CirclingRadius',
		type: 'float',
		description: 'The circling radius of the locomotor.'
	},
	{
		name: 'SlideIntoPlaceTime',
		type: 'float',
		description: 'The slide into place time of the locomotor.'
	},
	{
		name: 'ForwardVelocityPitchFactor',
		type: 'float',
		description: 'The forward velocity pitch factor of the locomotor.'
	},
	{
		name: 'LateralVelocityRollFactor',
		type: 'float',
		description: 'The lateral velocity roll factor of the locomotor.'
	},
	{
		name: 'Apply2DFrictionWhenAirborne',
		type: 'boolean',
		description: 'Whether the locomotor applies 2D friction when airborne.'
	},
	{
		name: 'AirborneTargetingHeight',
		type: 'float',
		description: 'The airborne targeting height of the locomotor.'
	},
	{
		name: 'LocomotorWorksWhenDead',
		type: 'boolean',
		description: 'Whether the locomotor works when dead.'
	},
	{
		name: 'Acceleration',
		type: 'float',
		description: 'The acceleration of the locomotor.'
	},
	{
		name: 'AccelerationDamaged',
		type: 'float',
		description: 'The acceleration of the locomotor when damaged.'
	},
	{
		name: 'AccelerationPitchLimit',
		type: 'float',
		description: 'The acceleration pitch limit of the locomotor.'
	},
	{
		name: 'DecelerationPitchLimit',
		type: 'float',
		description: 'The deceleration pitch limit of the locomotor.'
	},
	{
		name: 'Braking',
		type: 'float',
		description: 'The braking of the locomotor.'
	},
	{
		name: 'MinTurnSpeed',
		type: 'float',
		description: 'The minimum turn speed of the locomotor.'
	},
	{
		name: 'MaxThrustAngle',
		type: 'float',
		description: 'The maximum thrust angle of the locomotor.'
	},
	{
		name: 'ZAxisBehavior',
		type: 'string',
		description: 'The behavior of the locomotor on the Z-axis.',
		validValues: Object.values(LocomotorZAxisBehaviorTypes_t),
		ignoreCase: true
	},
	{
		name: 'Appearance',
		type: 'string',
		description: 'The appearance of the locomotor.',
		validValues: Object.values(LocomotorAppearanceTypes_t),
		ignoreCase: true
	},
	{
		name: 'StickToGround',
		type: 'boolean',
		description: 'Whether the locomotor sticks to the ground.'
	},
	{
		name: 'GroupMovementPriority',
		type: 'string',
		description: 'The group movement priority of the locomotor.',
		validValues: Object.values(LocomotorGroupMovementPriorityTypes_t),
		ignoreCase: true
	},
	{
		name: 'WanderWidthFactor',
		type: 'float',
		description: 'The wander width factor of the locomotor.'
	},
	{
		name: 'WanderLengthFactor',
		type: 'float',
		description: 'The wander length factor of the locomotor.'
	},
	{
		name: 'WanderAboutPointRadius',
		type: 'float',
		description: 'The wander about point radius of the locomotor.'
	},
	{
		name: 'ThrustRoll',
		type: 'float',
		description: 'The thrust roll factor of the locomotor.'
	},
	{
		name: 'ThrustWobbleRate',
		type: 'float',
		description: 'The thrust wobble rate of the locomotor.'
	},
	{
		name: 'ThrustMinWobble',
		type: 'float',
		description: 'The thrust min wobble of the locomotor.'
	},
	{
		name: 'ThrustMaxWobble',
		type: 'float',
		description: 'The thrust max wobble of the locomotor.'
	},
	{
		name: 'PitchInDirectionOfZVelFactor',
		type: 'float',
		description: 'The pitch in direction of Z-velocity factor of the locomotor.'
	},
	{
		name: 'PitchStiffness',
		type: 'float',
		description: 'The pitch stiffness of the locomotor.'
	},
	{
		name: 'BounceAmount',
		type: 'float',
		description: 'The bounce amount of the locomotor.'
	},
	{
		name: 'RollStiffness',
		type: 'float',
		description: 'The roll stiffness of the locomotor.'
	},
	{
		name: 'PitchDamping',
		type: 'float',
		description: 'The pitch damping of the locomotor.'
	},
	{
		name: 'RollDamping',
		type: 'float',
		description: 'The roll damping of the locomotor.'
	},
	{
		name: 'PreferredHeight',
		type: 'float',
		description: 'The preferred height of the locomotor.'
	},
	{
		name: 'PreferredHeightDamping',
		type: 'float',
		description: 'The preferred height damping of the locomotor.'
	},
	{
		name: 'CloseEnoughDist',
		type: 'float',
		description: 'The close enough distance of the locomotor.'
	},
	{
		name: 'CloseEnoughDist3D',
		type: 'boolean',
		description: 'Whether the locomotor uses 3D close enough distance.'
	},
	{
		name: 'Extra2DFriction',
		type: 'float',
		description: 'The extra 2D friction of the locomotor.'
	},
	{
		name: 'DownhillOnly',
		type: 'boolean',
		description: 'Whether the locomotor only moves downhill.'
	},
	{
		name: 'Lift',
		type: 'float',
		description: 'The lift of the locomotor.'
	},
	{
		name: 'LiftDamaged',
		type: 'float',
		description: 'The lift of the locomotor when damaged.'
	},
	{
		name: 'ForwardAccelerationPitchFactor',
		type: 'float',
		description: 'The forward acceleration pitch factor of the locomotor.'
	},
	{
		name: 'LateralAccelerationRollFactor',
		type: 'float',
		description: 'The lateral acceleration roll factor of the locomotor.'
	},
	{
		name: 'HasSuspension',
		type: 'boolean',
		description: 'Whether the locomotor has suspension.'
	},
	{
		name: 'CanMoveBackwards',
		type: 'boolean',
		description: 'Whether the locomotor can move backwards.'
	},
	{
		name: 'AllowAirborneMotiveForce',
		type: 'boolean',
		description: 'Whether the locomotor allows airborne motive force.'
	},
	{
		name: 'MaximumWheelExtension',
		type: 'float',
		description: 'The maximum wheel extension of the locomotor.'
	},
	{
		name: 'MaximumWheelCompression',
		type: 'float',
		description: 'The maximum wheel compression of the locomotor.'
	},
	{
		name: 'FrontWheelTurnAngle',
		type: 'float',
		description: 'The front wheel turn angle of the locomotor.'
	},
	{
		name: 'UniformAxialDamping',
		type: 'float',
		description: 'The uniform axial damping of the locomotor.'
	},
	{
		name: 'RudderCorrectionDegree',
		type: 'float',
		description: 'The rudder correction degree of the locomotor.'
	},
	{
		name: 'RudderCorrectionRate',
		type: 'float',
		description: 'The rudder correction rate of the locomotor.'
	},
	{
		name: 'ElevatorCorrectionDegree',
		type: 'float',
		description: 'The elevator correction degree of the locomotor.'
	},
	{
		name: 'ElevatorCorrectionRate',
		type: 'float',
		description: 'The elevator correction rate of the locomotor.'
	}
];

Object.values(LocomotorProperties).forEach(property => {
	LocomotorPropertyMap.set(property.name, property);
});