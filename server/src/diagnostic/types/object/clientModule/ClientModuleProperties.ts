import { RBTree } from 'bintrees';
import { ClientModule_t } from './ClientModule_t';
import { PropertyDefinition } from '../../../properties';
import { IniTypes_t } from '../../IniType_t';


export const ClientModuleTrees: {[key in ClientModule_t]: RBTree<string>} = {
	[ClientModule_t.ANIMATED_PARTICLE_SYS_BONE_CLIENT_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[ClientModule_t.BEACON_CLIENT_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[ClientModule_t.LASER_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
	[ClientModule_t.SWAY_CLIENT_UPDATE]: new RBTree<string>((a, b) => a.localeCompare(b)),
}

export const ClientModuleProperties: {[key in ClientModule_t]: {[key: string]: PropertyDefinition}} = {
	[ClientModule_t.ANIMATED_PARTICLE_SYS_BONE_CLIENT_UPDATE]: {},
	[ClientModule_t.BEACON_CLIENT_UPDATE]: {},
	[ClientModule_t.LASER_UPDATE]: {
		'MuzzleParticleSystem': {
			name: 'MuzzleParticleSystem',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The particle system to play when the laser is fired'
		},
		'TargetParticleSystem': {
			name: 'TargetParticleSystem',
			type: IniTypes_t.PARTICLE_SYSTEM,
			description: 'The particle system to play when the laser hits a target'
		}
	},
	[ClientModule_t.SWAY_CLIENT_UPDATE]: {},
}

Object.entries(ClientModuleProperties).forEach(([key, value]) => {
	Object.keys(value).forEach(propKey => ClientModuleTrees[key as ClientModule_t].insert(propKey));
});

export function getClientModulePropertyTree(clientModule: ClientModule_t): RBTree<string> {
	return ClientModuleTrees[clientModule]
}

export function getClientModulePropertyDefinition(clientModule: ClientModule_t, propertyName: string): PropertyDefinition | undefined {
	return ClientModuleProperties[clientModule][propertyName]
}
