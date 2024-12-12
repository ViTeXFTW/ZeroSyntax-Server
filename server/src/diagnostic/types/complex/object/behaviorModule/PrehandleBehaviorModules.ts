import { ObjectModulesContext } from '../../../../../utils/antlr4ng/MapIniParser';
import { customConditionStates } from '../../../../../utils/lists';
import { IniTypes_t } from '../../../IniType_t';
import { BehaviorModule_t } from './BehaviorModule_t';


export enum PrehandleBehaviorModules_t {
	GARRISON_CONTAIN = BehaviorModule_t.GARRISON_CONTAIN,
	MODEL_CONDITION_UPGRADE = BehaviorModule_t.MODEL_CONDITION_UPGRADE,
	RADAR_UPDATE = BehaviorModule_t.RADAR_UPDATE,
}

export const prehandleBehaviorModules: { [key in PrehandleBehaviorModules_t]: (ctx: ObjectModulesContext) => void } = {
	[PrehandleBehaviorModules_t.GARRISON_CONTAIN]: (ctx: ObjectModulesContext) => {
		if (!customConditionStates.includes('GARRISONED')) {
			customConditionStates.push('GARRISONED');
		}
	},
	[PrehandleBehaviorModules_t.MODEL_CONDITION_UPGRADE]: (ctx: ObjectModulesContext) => {
		// Loop through all properties in the module
		for (const property of ctx.property()) {
			if (property.value()?.getText() === 'ConditionFlag') {
				for (const value of property.property_values().value()) {
					if (!customConditionStates.includes(value.getText())) {
						console.log(`Adding ${value.getText()} to customConditionStates`);
						customConditionStates.push(value.getText());
					}
				}
			}
		}
	},
	[PrehandleBehaviorModules_t.RADAR_UPDATE]: (ctx: ObjectModulesContext) => {
		if (!customConditionStates.includes('RADAR_EXTENDING')) {
			customConditionStates.push('RADAR_EXTENDING');
		}
		if (!customConditionStates.includes('RADAR_UPGRADED')) {
			customConditionStates.push('RADAR_UPGRADED');
		}
	}
};