export enum IniTypes_t {
	AIDATA = 'AIData',
	ANIMATION = 'Animation',
	ARMOR = 'Armor',
	AUDIO_SETTINGS = 'AudioSettings',
	AUDIO_EVENT = 'AudioEvent',
	COMMAND_BUTTON = 'CommandButton',
	COMMAND_SET = 'CommandSet',
	CRATE = 'Crate',
	DIALOG_EVENT = 'DialogEvent',
	DAMAGE_FX = 'DamageFX',
	EVA_EVENT = 'EvaEvent',
	FXLIST = 'FXList',
	MAPPED_IMAGE = 'MappedImage',
	LOCOMOTOR = 'Locomotor',
	OBJECT = 'Object',
	OBJECT_CREATION_LIST = 'ObjectCreationList',
	OBJECT_RESKIN = 'ObjectReskin',
	SPECIAL_POWER = 'SpecialPower',
	SCIENCE = 'Science',
	PARTICLE_SYSTEM = 'ParticleSystem',
	UPGRADE = 'Upgrade',
	WEAPON = 'Weapon',
	WATER_TRANSPARENCY = 'WaterTransparency',
	WEATHER = 'Weather'
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
	PARTICLE_SYSTEM = IniTypes_t.PARTICLE_SYSTEM,
	SPECIAL_POWER = IniTypes_t.SPECIAL_POWER,
	SCIENCE = IniTypes_t.SCIENCE,
	UPGRADE = IniTypes_t.UPGRADE,
	WEAPON = IniTypes_t.WEAPON
}

export enum ComplexClassTypes_t {
	FXLIST = IniTypes_t.FXLIST,
	OBJECT = IniTypes_t.OBJECT,
	OBJECT_RESKIN = IniTypes_t.OBJECT_RESKIN,
	OBJECT_CREATION_LIST = IniTypes_t.OBJECT_CREATION_LIST,
	WATER_TRANSPARENCY = IniTypes_t.WATER_TRANSPARENCY,
	WEATHER = IniTypes_t.WEATHER
}
