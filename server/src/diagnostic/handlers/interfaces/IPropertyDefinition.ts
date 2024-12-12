import { DiagnosticSeverity } from 'vscode-languageserver';
import { BehaviorModule_t } from '../../types/complex/object/behaviorModule/BehaviorModule_t';
import { BodyModule_t } from '../../types/complex/object/bodyModule/BodyModule_t';
import { IniTypes_t } from '../../types/IniType_t';
import { kindOfs_t } from '../../types/PropertyTypes';

export interface RequiredValue {
	type: (string | IniTypes_t | BehaviorModule_t | BodyModule_t | kindOfs_t);
	values?: (string | null)[];
}

/**
 * Diagnostic definition of a property
 * 
 * @property `name` - The property name
 * @property `type` - The property type as a string
 * @property `description` - The property description
 * @property `isRequired?` - Whether the property is required in the context
 * @property `allowMultipleDefinitions?` - Whether the property allows multiple definitions
 * @property `numberOfValues?` - How many values the property can have `(-1 for infinite)`
 * @property `validValues?` - List of valid values for the property
 * @property `requiredModules?` - List of required behavior modules for the property
 * @property `ignoreCase?` - Whether the property values should be converted to uppercase
 */
export interface PropertyDefinition {
	name: string;
	type: string | IniTypes_t | (string | IniTypes_t)[];
	description: string;
	numberOfValues?: number[];
	validValues?: (string[] | null)[] | string[];
	modifier?: string[];
	prefix?: string | (string | null)[];
	requiredValues?: RequiredValue[];
	ignoreCase?: boolean;
	customWarningType?: DiagnosticSeverity;
	customValueHandler?: (value: string, propertyDefinition: PropertyDefinition, position: number) => boolean;
}