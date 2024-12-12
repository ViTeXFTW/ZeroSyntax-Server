import { Diagnostic, DiagnosticSeverity } from 'vscode-languageserver';
import { IModuleHandler } from './interfaces/IModuleHandler';
import { Location } from '../../utils/location';
import { ObjectModulesContext, PropertyContext } from '../../utils/antlr4ng/MapIniParser';
import { getBehaviorModulePropertyTree } from '../types/complex/object/behaviorModule/BehaviorModuleProperties';
import { BehaviorModule_t } from '../types/complex/object/behaviorModule/BehaviorModule_t';
import { kindOfs_t } from '../types/PropertyTypes';
import { AbstractParseTreeVisitor, ParserRuleContext } from 'antlr4ng';
import { ILanguageServerSettings } from './interfaces/ILanguageServerSettings';
import { IniTypes_t } from '../types/IniType_t';
import * as list from '../../utils/lists';
import { PropertyDefinition } from './interfaces/IPropertyDefinition';

/**
 * Abstract base class for module handlers that validate and process class contexts.
 * Implements the IModuleHandler interface and provides common functionality for
 * diagnostic handling and property validation.
 * 
 * @template TContext - The type of class context this handler processes
 */
export abstract class BaseModuleHandler<TContext> implements IModuleHandler<TContext> {
    /** Collection of diagnostic messages generated during validation */
    protected diagnostics: Diagnostic[] = [];

    /** Parse tree visitor */
    protected parseTreeVisitor?: AbstractParseTreeVisitor<void>;

    /** Language server settings */
    protected languageServerSettings?: ILanguageServerSettings;

    /** List of behavior modules found in the class context */
    protected classBehaviorModules: BehaviorModule_t[] = [];

    /** List of KindOf values found in the class context */
    protected classKindOfs: kindOfs_t[] = [];
    
    /**
     * Adds a diagnostic message to the diagnostics collection.
     * @param severity - The severity level of the diagnostic
     * @param start - Starting location of the issue
     * @param end - Ending location of the issue  
     * @param message - The diagnostic message
     * @param srcAppend - Optional source identifier to append
     * @param data - Optional additional diagnostic data
     */
    protected addDiagnostic(
        severity: DiagnosticSeverity,
        start: Location,
        end: Location,
        message: string,
        srcAppend: string = '',
        data?: any
    ): void {
        this.diagnostics.push({
            severity,
            range: {
                start: start.toPosition(),
                end: end.toPosition()
            },
            message,
            source: srcAppend,
            data
        });
    }

    /**
     * Abstract method that must be implemented to handle class context validation.
     * @param ctx - The class context to validate
     * @returns Array of diagnostic messages from validation
     */
    abstract handleClass(ctx: TContext): Diagnostic[];

    /**
     * Validates a property against its definition and generates diagnostics for any issues.
     * Checks for:
     * - Required equals sign
     * - Required values
     * - Number of values constraints
     * - Required modules/KindOfs
     * - Value type correctness
     * 
     * @param propertyName - Name of the property being validated
     * @param property - Property context containing the value and location info
     * @param propertyDefinition - Definition specifying valid values and types
     * @returns Array of diagnostic messages from validation
     */
    validateProperty(propertyName: string, property: PropertyContext, propertyDefinition: PropertyDefinition): Diagnostic[] {
        console.log(`validateProperty: ${propertyName}`);
        if (!property.EQ()) {
            const severity = DiagnosticSeverity.Error;
            const start = new Location(property.start!.line, property.start!.column);
            const msg = `Property must be assigned a value`;
            this.addDiagnostic(severity, start, start, msg, "equals");
        }

        if (property.property_values()) {
            const propertyValues = property.property_values();

            // Check if property value is newline
            // TODO: Check all values and ensure none is newline to display error if property doesn't have a value
            if (!propertyValues.getChild(0) || /\r?\n$/.test(propertyValues.getChild(0)!.getText()) || propertyValues.getChild(0)!.getText().toUpperCase() === '<MISSING ID>') {
                const severity = DiagnosticSeverity.Error;
                const start = new Location(propertyValues.start!.line, propertyValues.start!.column);
                const msg = `Property ${propertyName} must be assigned a value`;
                this.addDiagnostic(severity, start, start, msg, "newline");
            }

            // Check if the property has a limited number of values
            if (propertyDefinition?.numberOfValues) {
                // If the property does not have an infinite number of values, check if it has the correct number of values
                if (!propertyDefinition.numberOfValues.includes(-1) &&
                    !propertyDefinition.numberOfValues.includes(propertyValues.value().length)) {
                    const severity = DiagnosticSeverity.Error;
                    const start = new Location(property.start!.line, property.start!.column);
                    const msg = `Property ${propertyName} must have one of these numbers of values: ${propertyDefinition.numberOfValues.join(', ')}`;
                    this.addDiagnostic(severity, start, start, msg, "limit_n");
                }
            } else {
                // If the property does not have a specified limit, the limit is 1
                if (propertyValues.value().length !== 1) {
                    const severity = DiagnosticSeverity.Error;
                    const start = new Location(propertyValues.stop!.line, propertyValues.stop!.column);
                    const end = new Location(propertyValues.stop!.line, propertyValues.stop!.column + propertyName.length);
                    const msg = `Property ${propertyName} must have one value`;
                    this.addDiagnostic(severity, start, end, msg, "limit_1");
                }
            }

            // Check if the property has required modules
            if (propertyDefinition?.requiredValues) {
                propertyDefinition.requiredValues.forEach(requiredValue => {
                    // If type is BehaviorModule_t, check required modules
                    if (getBehaviorModulePropertyTree(requiredValue.type as BehaviorModule_t)) {
                        this.checkRequiredModules(property, [requiredValue.type as BehaviorModule_t]);
                    } else if (Object.values(kindOfs_t).includes(requiredValue.type as kindOfs_t)) {
                        if (!this.classKindOfs.includes(requiredValue.type as kindOfs_t)) {
                            const severity = DiagnosticSeverity.Warning;
                            const start = new Location(property.start!.line, property.start!.column);
                            const msg = `Property ${propertyName} requires KindOf: ${requiredValue.type}`;
                            this.addDiagnostic(severity, start, start, msg);
                        }
                    }
                });
            }

            // Check if the property values are valid
            for (const [i, value] of propertyValues.value().entries()) {
                const valueText = value.getText();
                
                // Check if the property has a custom value handler
                if (propertyDefinition && propertyDefinition.customValueHandler) {
                    if (!propertyDefinition.customValueHandler(valueText, propertyDefinition, i)) {
                        const severity = propertyDefinition.customWarningType || DiagnosticSeverity.Error;
                        const start = new Location(value.start!.line, value.start!.column);
                        const msg = `Invalid value for property ${propertyName}`;
                        this.addDiagnostic(severity, start, start, msg, "custom_value_handler");
                    }
                } else if (!this.isValidPropertyValue(valueText, propertyDefinition, i)) {
                    const severity = propertyDefinition.customWarningType || DiagnosticSeverity.Error;
                    const start = new Location(value.start!.line, value.start!.column);
                    const end = new Location(value.stop!.line, value.stop!.column);
                    // Get the type for this specific position

                    const expectedType = Array.isArray(propertyDefinition.type)
                        ? propertyDefinition.type[Math.min(i, propertyDefinition.type.length - 1)]
                        : propertyDefinition.type;

                    // Get the validation info for error message
                    let validationInfo = '';
                    if (propertyDefinition.validValues) {
                        if (Array.isArray(propertyDefinition.validValues[0])) {
                            const positionValidValues = propertyDefinition.validValues[
                                Math.min(i, propertyDefinition.validValues.length - 1)
                            ] as string[] | null;

                            if (positionValidValues !== null) {
                                validationInfo = `. Valid values: string`;
                            }
                        } else {
                            validationInfo = `. Valid values: ${(propertyDefinition.validValues as string[]).join(', ')}`;
                        }
                    }

                    const msg = `Invalid value for property ${propertyName}. Expected type: ${expectedType}${validationInfo}`;

                    const data = {
                        propertyName: valueText,
                        propertyDefinition: propertyDefinition,
                        position: i
                    };

                    this.addDiagnostic(severity, start, end, msg, "incorrect_value", data);
                } else {
                    // If PropertyName is 'KindOf', add value to classKindOfs
                    if (propertyName === 'KindOf') {
                        this.classKindOfs.push(valueText as kindOfs_t);
                    }

                }
            }
        }

        return this.diagnostics;
    }

    isValidPropertyValue(value: string, propertyDefinition: PropertyDefinition, position: number): boolean {
        console.log(`isValidPropertyValue: ${value} - type: ${propertyDefinition?.type} - position: ${position}`);

        // If the property type is an array, get the type at the given position else get the type
        const type = Array.isArray(propertyDefinition?.type) 
            ? propertyDefinition?.type[Math.min(position, propertyDefinition?.type.length - 1)]
            : propertyDefinition?.type;
    
        let prefix = Array.isArray(propertyDefinition?.prefix)
            ? propertyDefinition?.prefix[Math.min(position, propertyDefinition?.prefix.length - 1)]
            : propertyDefinition?.prefix;
    
        // If PropertyDefinition has a prefix, check that it is present in the value and remove it for validation
        if (prefix) {
            if (propertyDefinition.ignoreCase && propertyDefinition.ignoreCase == true) {
                value = value.toUpperCase();
                prefix = prefix.toUpperCase();
            }
            
            if (value.startsWith(prefix)) {
                value = value.substring(prefix.length);
            } else {
                return false;
            }
        }
    
        if (value.at(1) === '-') {
            value = value.substring(1);
        }
    
        if (type === 'integer') {
            return !isNaN(Number(value)) && !value.includes('.');
        } else if (type === 'float') {
            if (value.endsWith('f')) {
                value = value.substring(0, value.length - 1);
            }
            return !isNaN(Number(value));
        } else if (type === 'boolean') {
            return ['YES', 'NO'].includes(value.toUpperCase());
        } else if (type === 'percent') {
            return this.handlePercentageValidation(value);
        } else { // string
    
            switch (type) {
                case IniTypes_t.ARMOR:
                    return this.isInListCaseInsensitive(value, [...list.armor, ...list.customArmor], propertyDefinition?.ignoreCase);
                case IniTypes_t.AUDIO_EVENT:
                    return this.isInListCaseInsensitive(value, [...list.audioEvent, ...list.customAudioEvent], propertyDefinition?.ignoreCase);
                case IniTypes_t.DIALOG_EVENT:
                    return this.isInListCaseInsensitive(value, [...list.dialogEvent, ...list.customDialogEvent], propertyDefinition?.ignoreCase);
                case IniTypes_t.COMMAND_BUTTON:
                    return this.isInListCaseInsensitive(value, [...list.commandButtons, ...list.customCommandButtons], propertyDefinition?.ignoreCase);
                case IniTypes_t.COMMAND_SET:
                    return this.isInListCaseInsensitive(value, [...list.commandSets, ...list.customCommandSets], propertyDefinition?.ignoreCase);
                case IniTypes_t.FXLIST:
                    return this.isInListCaseInsensitive(value, [...list.fxLists, ...list.customFXLists], propertyDefinition?.ignoreCase);
                case IniTypes_t.MAPPED_IMAGE:
                    return this.isInListCaseInsensitive(value, [...list.mappedImages, ...list.customMappedImages], propertyDefinition?.ignoreCase);
                case IniTypes_t.OBJECT:
                    return this.isInListCaseInsensitive(value, [...list.objects, ...list.customObjects, ...list.objectReskin, ...list.customObjectReskin], propertyDefinition?.ignoreCase);
                case IniTypes_t.OBJECT_CREATION_LIST:
                    return this.isInListCaseInsensitive(value, [...list.ocls, ...list.customOCLs], propertyDefinition?.ignoreCase);
                case IniTypes_t.SPECIAL_POWER:
                    return this.isInListCaseInsensitive(value, [...list.specialPower, ...list.customSpecialPower], propertyDefinition?.ignoreCase);
                case IniTypes_t.SCIENCE:
                    return this.isInListCaseInsensitive(value, [...list.science, ...list.customScience], propertyDefinition?.ignoreCase);
                case IniTypes_t.PARTICLE_SYSTEM:
                    return this.isInListCaseInsensitive(value, [...list.particleSystem, ...list.customParticleSystem], propertyDefinition?.ignoreCase);
                case IniTypes_t.UPGRADE:
                    return this.isInListCaseInsensitive(value, [...list.upgrade, ...list.customUpgrade], propertyDefinition?.ignoreCase);
                case IniTypes_t.WEAPON:
                    return this.isInListCaseInsensitive(value, [...list.weapon, ...list.customWeapon], propertyDefinition?.ignoreCase);
                default:
                    if (propertyDefinition?.ignoreCase) {
                        value = value.toUpperCase();
                    }
                    return this.handleStringValidation(value, propertyDefinition, position);
            }
        }
    }

    private handlePercentageValidation(value: string): boolean {
        // Must end with %
        if (value.endsWith('%')) {
            // Remove the % and check the number part
            value = value.slice(0, -1);
        }
    
        // Allow negative numbers but and decimals
        const regex = /^-?\d*\.?\d+$/;
        return regex.test(value);
    }

    private isInListCaseInsensitive(value: string, list: string[], ignoreCase?: boolean): boolean {
        if (ignoreCase) {
            const upperValue = value.toUpperCase();
            return list.some(item => item.toUpperCase() === upperValue);
        }
        return list.includes(value);
    }
    
    /**
     * Handles the validation of a string property
     * 
     * @param value - Text of the value to validate
     * @param propertyDefinition - PropertyDefinition for the property being validated
     * @param position - The index position in the property currently being validated
     */
    private handleStringValidation(value: string, propertyDefinition: PropertyDefinition, position: number): boolean {
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

    /**
     * Checks if a context ends with the 'End' keyword.
     * @param ctx - The context to check
     * @returns True if the context ends properly, false otherwise
     */
    protected checkEnd(ctx: ParserRuleContext): boolean {
        if (ctx.children) {
            const lastChild = ctx.children[ctx.children.length - 1];
            const lastChildText = lastChild.getText().toUpperCase();
            switch (lastChildText) {
                case 'END': {
                    return true;
                }
                default: {
                    const severity = DiagnosticSeverity.Error;
                    const start = new Location(ctx.start!.line, ctx.start!.column);
                    const msg = `${ctx.getChild(0)!.getText()} must be closed with 'End'`;
                    this.addDiagnostic(severity, start, start, msg);
                    return false;
                }
            }
        }
        console.log(`checkEnd: true`);
        return true;
    }

    /**
     * Checks if a property has an equals sign.
     * @param ctx - The property context to check
     * @returns True if the property has an equals sign, false otherwise
     */
    protected checkEQ(ctx: PropertyContext | ObjectModulesContext): boolean {
        if (!ctx.EQ()) {
            const severity = DiagnosticSeverity.Error;
            const start = new Location(ctx.start!.line, ctx.start!.column);
            const msg = `Property must be assigned a value`;
            this.addDiagnostic(severity, start, start, msg, "equals");
            return false;
        }
        return true;
    }

    /**
     * Checks if required behavior modules are present.
     * @param ctx - The context requiring the modules
     * @param requiredModules - Array of required module types
     */
    private checkRequiredModules(ctx: ParserRuleContext, requiredModules: BehaviorModule_t[]): void {
        requiredModules.forEach(requiredModule => {
            if (!this.classBehaviorModules.includes(requiredModule)) {
                const severity = DiagnosticSeverity.Warning;
                const start = new Location(ctx.start!.line, ctx.start!.column);
                const msg = `Property requires module ${requiredModule}`;
                this.addDiagnostic(severity, start, start, msg);
            }
        });
    }
}
