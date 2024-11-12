import { RBTree } from 'bintrees';
import { BodyModule_t } from './BodyModule_t';
import { PropertyDefinition } from '../../../properties';


export const BodyModuleTrees: { [key in BodyModule_t]: RBTree<string> } = {
	[BodyModule_t.ACTIVEBODY]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BodyModule_t.HIGHLANDERBODY]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BodyModule_t.HIVESTRUCTUREBODY]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BodyModule_t.IMMORTALBODY]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BodyModule_t.INACTIVEBODY]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BodyModule_t.STRUCTUREBODY]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[BodyModule_t.UNDEADBODY]: new RBTree<string>((a, b) => a.localeCompare(b)),
}

const baseBodyProperties: {[key: string]: PropertyDefinition} = {
	'MaxHealth': {
		name: 'MaxHealth',
		type: 'float',
		description: 'The max health of the object'
	},
	'InitialHealth': {
		name: 'InitialHealth',
		type: 'float',
		description: 'The starting health of the object'
	},
	'SubdualDamageCap': {
		name: 'SubdualDamageCap',
		type: 'float',
		description: 'Cap for how much damage the object can take in a single hit'
	},
	'SubdualDamageHealRate': {
		name: 'SubdualDamageHealRate',
		type: 'float',
		description: 'Rate at which the object heals when taking subdual damage'
	},
	'SubdualDamageHealAmount': {
		name: 'SubdualDamageHealAmount',
		type: 'float',
		description: 'Amount of health healed per tick when taking subdual damage'
	}
}

export const BodyModulesDefinitions: { [key in BodyModule_t]: { [key: string]: PropertyDefinition } } = {
	[BodyModule_t.ACTIVEBODY]: {
		...baseBodyProperties
	},
	[BodyModule_t.HIGHLANDERBODY]: {
		...baseBodyProperties
	},
	[BodyModule_t.HIVESTRUCTUREBODY]: {
		...baseBodyProperties,
		'PropagateDamageTypesToSlavesWhenExisting': {
			name: 'PropagateDamageTypesToSlavesWhenExisting',
			type: 'boolean',
			description: 'If true, the damage types will be propagated to the slaves when the slaves exist'
		},
		'SwallowDamageTypesIfSlavesNotExisting': {
			name: 'SwallowDamageTypesIfSlavesNotExisting',
			type: 'boolean',
			description: 'If true, the damage types will be swallowed if the slaves do not exist'
		}
	},
	[BodyModule_t.IMMORTALBODY]: {
		...baseBodyProperties
	},
	[BodyModule_t.INACTIVEBODY]: {},
	[BodyModule_t.STRUCTUREBODY]: {
		...baseBodyProperties
	},
	[BodyModule_t.UNDEADBODY]: {
		...baseBodyProperties,
		'SecondLifeMaxHealth': {
			name: 'SecondLifeMaxHealth',
			type: 'integer',
			description: 'Health of the object when it is in second life'
		}
	}
}

Object.entries(BodyModulesDefinitions).forEach(([key, value]) => {
	Object.keys(value).forEach(propKey => BodyModuleTrees[key as BodyModule_t].insert(propKey));
});

export function getBodyModulePropertyTree(bodyModule: BodyModule_t): RBTree<string> {
	return BodyModuleTrees[bodyModule];
}

export function getBodyModulePropertyDefinition(bodyModule: BodyModule_t, propertyName: string): PropertyDefinition | undefined {
	return BodyModulesDefinitions[bodyModule]?.[propertyName];
}
