export enum IniTypes_t {
	ANIMATION = 'Animation',
	ARMOR = 'Armor',
	AUDIO_EVENT = 'AudioEvent',
	COMMAND_BUTTON = 'CommandButton',
	COMMAND_SET = 'CommandSet',
	DIALOG_EVENT = 'DialogEvent',
	DAMAGE_FX = 'DamageFX',
	FXLIST = 'FXList',
	MAPPED_IMAGE = 'MappedImage',
	LOCOMOTOR = 'Locomotor',
	OBJECT = 'Object',
	OBJECT_CREATION_LIST = 'ObjectCreationList',
	SPECIAL_POWER = 'SpecialPower',
	SCIENCE = 'Science',
	PARTICLE_SYSTEM = 'ParticleSystem',
	UPGRADE = 'Upgrade',
	WEAPON = 'Weapon',
}

export enum SimpleClassTypes_t {
	ANIMATION = IniTypes_t.ANIMATION,
	ARMOR = IniTypes_t.ARMOR,
	AUDIO_EVENT = IniTypes_t.AUDIO_EVENT,
	COMMAND_BUTTON = IniTypes_t.COMMAND_BUTTON,
	COMMAND_SET = IniTypes_t.COMMAND_SET,
	DIALOG_EVENT = IniTypes_t.DIALOG_EVENT,
	DAMAGE_FX = IniTypes_t.DAMAGE_FX,
	MAPPED_IMAGE = IniTypes_t.MAPPED_IMAGE,
	LOCOMOTOR = IniTypes_t.LOCOMOTOR,
	SPECIAL_POWER = IniTypes_t.SPECIAL_POWER,
	SCIENCE = IniTypes_t.SCIENCE,
	UPGRADE = IniTypes_t.UPGRADE,
	WEAPON = IniTypes_t.WEAPON,
}

export enum ComplexClassTypes_t {
	FXLIST = IniTypes_t.FXLIST,
	OBJECT = IniTypes_t.OBJECT,
	OBJECT_CREATION_LIST = IniTypes_t.OBJECT_CREATION_LIST,
	PARTICLE_SYSTEM = IniTypes_t.PARTICLE_SYSTEM,
}
