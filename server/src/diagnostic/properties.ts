import * as list from '../utils/lists';
import { IniTypes_t } from './types/IniType_t';


/**
 * Diagnostic definition of a property
 * 
 * @property `name` - The property name
 * @property `type` - The property type as a string
 * @property `description` - The property description
 * @property `isRequired` - Whether the property is required in the context
 * @property `allowMultipleDefinitions` - Whether the property allows multiple definitions
 * @property `numberOfValues` - How many values the property can have `(-1 for infinite)`
 * @property `validValues` - List of valid values for the property
 * @property `ignoreCase` - Whether the property values should be converted to uppercase
 */
export interface PropertyDefinition {
	name: string;
	type: string | IniTypes_t | (string | IniTypes_t)[];
	description: string;
	numberOfValues?: number[];
	validValues?: (string[] | null)[] | string[];
	modifier?: string[];
	ignoreCase?: boolean;
}

function propertyComparator(a: string, b: string): number {
	if (a < b) return -1;
	if (a > b) return 1;
	return 0;
}

/**
 * Returns whether the value is valid for the property at the given position
 * 
 * @param value - Text of the value to validate
 * @param propertyDefinition - PropertyDefinition for the property being validated
 * @param position - The index position in the property currently being validated
 */
export function isValidPropertyValue(value: string, propertyDefinition: PropertyDefinition, position: number): boolean {
	
	// If the property type is an array, get the type at the given position else get the type
	const type = Array.isArray(propertyDefinition?.type) 
        ? propertyDefinition?.type[Math.min(position, propertyDefinition?.type.length - 1)]
        : propertyDefinition?.type;


	if (type === 'integer') {
		return !isNaN(Number(value)) && !value.includes('.');
	} else if (type === 'float') {
		return !isNaN(Number(value));
	} else if (type === 'boolean') {
		return ['YES', 'NO'].includes(value.toUpperCase());
	} else if (type === 'percent') {
		return handlePercentageValidation(value);
	} else { // string

		switch (propertyDefinition?.type) {
			case IniTypes_t.ARMOR:
				if(list.definedArmor.find(value) || list.customArmor.find(value)) {
					return true;
				}
				return false;
			case IniTypes_t.AUDIO_EVENT:
				if(list.audioEvent.find(value) || list.customAudioEvent.find(value)) {
					return true;
				}
				return false;
			case IniTypes_t.DIALOG_EVENT:
				if(list.dialogEvent.find(value) || list.customDialogEvent.find(value)) {
					return true;
				}
				return false;
			case IniTypes_t.COMMAND_BUTTON:
				if(list.commandButtons.find(value) || list.customCommandButtons.find(value)) {
					return true;
				}
				return false;
			case IniTypes_t.COMMAND_SET:
				if(list.commandSets.find(value) || list.customCommandSets.find(value)) {
					return true;
				}
				return false;
			case IniTypes_t.FXLIST:
				if(list.fxLists.find(value) || list.customFXLists.find(value)) {
					return true;
				}
				return false;
			case IniTypes_t.MAPPED_IMAGE:
				if(list.mappedImages.find(value) || list.customMappedImages.find(value)) {
					return true;
				}
				return false;
			case IniTypes_t.OBJECT:
				if(list.objects.find(value) || list.customObjects.find(value)) {
					return true;
				}
				return false;
			case IniTypes_t.OBJECT_CREATION_LIST:
				if(list.ocls.find(value) || list.customOCLs.find(value)) {
					return true;
				}
				return false;
			case IniTypes_t.SPECIAL_POWER:
				if(list.specialPower.find(value) || list.customSpecialPower.find(value)) {
					return true;
				}
				return false;
			case IniTypes_t.SCIENCE:
				if(list.science.find(value) || list.customScience.find(value)) {
					return true;
				}
				return false;
			case IniTypes_t.PARTICLE_SYSTEM:
				if(list.particleSystem.find(value) || list.customParticleSystem.find(value)) {
					return true;
				}
				return false;
			case IniTypes_t.UPGRADE:
				if(list.upgrades.find(value) || list.customUpgrades.find(value)) {
					return true;
				}
				return false;
			case IniTypes_t.WEAPON:
				if(list.weapons.find(value) || list.customWeapons.find(value)) {
					return true;
				}
				return false;
			default:
				if (propertyDefinition?.ignoreCase) {
					value = value.toUpperCase();
				}
				return handleStringValidation(value, propertyDefinition, position);
		}
	}
}

function handlePercentageValidation(value: string): boolean {
	// Must end with %
    if (!value.endsWith('%')) {
        return false;
    }

    // Remove the % and check the number part
    const numberPart = value.slice(0, -1);
    
    // Allow negative numbers but no decimals
    const regex = /^-?\d+$/;
    return regex.test(numberPart);
}

/**
 * Handles the validation of a string property
 * 
 * @param value - Text of the value to validate
 * @param propertyDefinition - PropertyDefinition for the property being validated
 * @param position - The index position in the property currently being validated
 */
export function handleStringValidation(value: string, propertyDefinition: PropertyDefinition, position: number): boolean {
	if (propertyDefinition?.modifier) {
		for (const modifier of propertyDefinition.modifier) {
			if (value.startsWith(modifier)) {
				value = value.substring(modifier.length);
			}
		}
	}

	// Check position-specific valid values if they exist
	if (propertyDefinition?.validValues) {
		// If the property has an array type, always treat validValues as position-specific
		if (Array.isArray(propertyDefinition.type)) {
			const positionValidValues = propertyDefinition.validValues[
				Math.min(position, propertyDefinition.validValues.length - 1)
			] as string[] | null;
			
			// If null/undefined, skip validation for this position
			if (positionValidValues === null) return true;
			
			return positionValidValues.includes(value);
		} else {
			// Single type properties use the simple array validation
			return (propertyDefinition.validValues as string[]).includes(value);
		}
	}
	return true;
}
