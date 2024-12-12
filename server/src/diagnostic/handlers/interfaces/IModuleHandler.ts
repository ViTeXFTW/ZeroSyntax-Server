import { Diagnostic } from 'vscode-languageserver';
import { PropertyContext } from '../../../utils/antlr4ng/MapIniParser';
import { PropertyDefinition } from './IPropertyDefinition';

/**
 * Interface for handling module validation and diagnostics.
 * Provides methods for validating class contexts and individual properties.
 */
export interface IModuleHandler<TContext> {
    /**
     * Validates a class context and generates diagnostics for any issues found.
     * @param ctx - The class context to validate
     * @returns Array of diagnostic messages from validation
     */
    handleClass(ctx: TContext): Diagnostic[];

    /**
     * Validates a single property against its definition and generates diagnostics.
     * @param propertyName - Name of the property being validated
     * @param property - Property context containing the value and location information
     * @param propertyDefinition - Definition specifying valid values and types for the property
     * @returns Array of diagnostic messages from property validation
     */
    validateProperty(propertyName: string, property: PropertyContext, propertyDefinition: PropertyDefinition): Diagnostic[];
}
