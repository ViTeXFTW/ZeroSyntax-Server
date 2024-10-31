
import { Diagnostic, DiagnosticSeverity } from "vscode-languageserver";
import * as list from '../utils/lists'
import { Location } from "../utils/location";
import { MapIniVisitor } from "../utils/antlr4ng/MapIniVisitor";
import { AddModuleContext, AliasConditionContext, BehaviorModuleContext, BodyModule_typeContext, BodyModuleContext, ClassContext, ClientModuleContext, ConditionState_valuesContext, ConditionStateContext, ConditionStatePropertyContext, DrawModule_typeContext, DrawModuleContext, DrawModulePropertyContext, EndContext, MapIniParser, MappedImageClassContext, Module_modifierContext, ModuleContext, ObjectArmorSetContext, ObjectClassContext, ObjectPrerequisiteContext, ObjectPropertyContext, ObjectUnitSpecificSoundsContext, ObjectUnitSpecificFXContext, ObjectWeaponSetContext, ProgramContext, Property_valueContext, Property_valuesContext, PropertyContext, RemoveModuleContext, BodyModulePropertyContext } from "../utils/antlr4ng/MapIniParser";
import { AbstractParseTreeVisitor, ParserRuleContext, TerminalNode } from "antlr4ng";
import { ErrorListener } from "../errorListener";
import { ClassVisitor } from './classVisitor';
import { conditionStatePropertyNameTree, W3DModelDrawPropertyNameTree, getConditionStatePropertyDefinition, getW3DModelDrawPropertyDefinition, getObjectPropertyDefinition, isValidPropertyValue, objectPropertyNameTree, PropertyDefinition } from './properties';
import { ForceAddModule_t } from './types/ForceAddModule_t';
import { WeaponSlot_t } from './types/PropertyTypes';
import { DrawModule_t } from './types/DrawModule_t';
import { getDrawModulePropertyDefinition, getDrawModulePropertyTree } from './types/DrawModuleProperties';
import { BodyModule_t } from './types/BodyModule_t';
import { getBodyModulePropertyDefinition, getBodyModulePropertyTree } from './types/BodyModuleProperties';


export class DiagnosticVisitor extends AbstractParseTreeVisitor<void> implements MapIniVisitor<void> {
    protected defaultResult(): void {
    }

    diagnostics: Diagnostic[]
    forceAddModule: ForceAddModule_t
    forceAddModule_determined: boolean
    precompileTransitionKeys: boolean

    constructor(diagnostics: Diagnostic[], forceAddModule: ForceAddModule_t = ForceAddModule_t.No, precompileTransitionKeys: boolean = false) {
        super()
        this.diagnostics = diagnostics
        this.forceAddModule = forceAddModule
        this.forceAddModule_determined = false
        this.precompileTransitionKeys = precompileTransitionKeys
    }

    visitProgram(ctx: ProgramContext): void {
        this.visitChildren(ctx);
    }

    visitClass(ctx: ClassContext): void {
        this.determineForceAddModule(ctx)

        this.visitChildren(ctx)
    }

    visitProperty(ctx: PropertyContext): void {
        const propertyName = ctx.ID()!.getText()

        // Check if the property is assigned a value
        if (!ctx.EQ()) {
            const severity = DiagnosticSeverity.Error
            const start = new Location(ctx.ID()!.symbol.line, ctx.ID()!.symbol.column)
            const msg = `Property must be assigned a value`
            this.addDiagnostic(severity, start, start, msg)
            this.visitChildren(ctx)
            return
        }

        if (ctx.property_values()) {
            const propertyValues = ctx.property_values()

            // Check if the property has a limited number of values
            if (getObjectPropertyDefinition(propertyName)?.numberOfValues) {

                // If the property does not have an infinite number of values, check if it has the correct number of values
                if (!getObjectPropertyDefinition(propertyName)!.numberOfValues!.includes(-1) && !getObjectPropertyDefinition(propertyName)!.numberOfValues!.includes(propertyValues.ID().length)) {
                    const severity = DiagnosticSeverity.Error
                    const start = new Location(propertyValues.ID()[0].symbol.line, propertyValues.ID()[0].symbol.column)
                    const msg = `Property ${propertyName} must have one of these numbers of values: ${getObjectPropertyDefinition(propertyName)!.numberOfValues!.join(', ')}`
                    this.addDiagnostic(severity, start, start, msg)
                }
            } else {
                // If the property does not have a specified limit, the limit is 1
                if (propertyValues.ID().length > 1) {
                    const severity = DiagnosticSeverity.Error
                    const start = new Location(propertyValues.ID()[1].symbol.line, propertyValues.ID()[1].symbol.column)
                    const stop = new Location(propertyValues.ID()[propertyValues.ID().length - 1].symbol.line, propertyValues.ID()[propertyValues.ID().length - 1].symbol.column + propertyValues.ID()[propertyValues.ID().length - 1].getText().length)
                    const msg = `Property ${propertyName} does not allow multiple values`
                    this.addDiagnostic(severity, start, stop, msg)
                }
            }

            // Check if the property values are valid
            for (const [i, value] of propertyValues.ID().entries()) {
                const valueText = value.getText()
                if (!isValidPropertyValue(valueText, getObjectPropertyDefinition(propertyName)!, i)) {
                    const severity = DiagnosticSeverity.Error
                    const start = new Location(value.symbol.line, value.symbol.column)
                    const msg = `Invalid value for property ${propertyName}. Expected type: ${getObjectPropertyDefinition(propertyName)?.type}`
                    this.addDiagnostic(severity, start, start, msg)
                }
            }
        }

        this.visitChildren(ctx)
    }

    // =====================================
    // =========== OBJECT CLASS ============
    // =====================================

    visitObjectClass(ctx: ObjectClassContext): void {
        // list.customConditionStates.clear()
        this.checkEnd(ctx)

        this.visitChildren(ctx)
    }

    visitObjectProperty(ctx: ObjectPropertyContext): void {

        if (ctx.ID()) {
            const propertyName = ctx.ID()!.getText()

            if (!objectPropertyNameTree.find(propertyName)) {
                const severity = DiagnosticSeverity.Error
                const start = new Location(ctx.ID()!.symbol.line, ctx.ID()!.symbol.column)
                const msg = `Object doesn't have property ${propertyName}`
                this.addDiagnostic(severity, start, start, msg)
                this.visitChildren(ctx)
                return
            }
            
            this.validateProperty(propertyName, ctx, getObjectPropertyDefinition(propertyName)!)
        }

        this.visitChildren(ctx)
    }

    visitAddModule(ctx: AddModuleContext): void {
        this.checkEnd(ctx)

        this.visitChildren(ctx)
    }

    visitRemoveModule(ctx: RemoveModuleContext): void {
        this.visitChildren(ctx)
    }

    visitModule(ctx: ModuleContext): void {
        if (this.forceAddModule === ForceAddModule_t.Yes) {
            const parent = ctx.parent
            // If parent is not a module_modifier, provide an error
            if (!(parent instanceof AddModuleContext)) {
                const severity = DiagnosticSeverity.Error
                const start = new Location(ctx.start!.line, ctx.start!.column)
                const msg = `This module must be incapsulated in a AddModule block`
                this.addDiagnostic(severity, start, start, msg, "module")
                // TODO: Add a quick fix to change ForceAddModule setting
            }
        }

        this.visitChildren(ctx)
    }

    visitObjectWeaponSet(ctx: ObjectWeaponSetContext): void {
        this.checkEnd(ctx)

        if (ctx.propertyCondition()) {
            if (ctx.propertyCondition().length < 1) {
                const severity = DiagnosticSeverity.Error
                const start = new Location(ctx.start!.line, ctx.start!.column)
                const msg = `WeaponSet must have at least one condition`
                this.addDiagnostic(severity, start, start, msg, "weapon_set")
                this.visitChildren(ctx)
                return
            }

            for (const condition of ctx.propertyCondition()) {
                for (const property of condition.property_values().ID()) {
                    const propertyName = property.getText()
                    if (!list.conditionStates.find(propertyName.toUpperCase()) && !list.customConditionStates.find(propertyName.toUpperCase())) {
                        const severity = DiagnosticSeverity.Error
                        const start = new Location(property.symbol.line, property.symbol.column)
                        const msg = `Condition state ${propertyName} is not defined`
                        this.addDiagnostic(severity, start, start, msg, "weapon_set")
                    }
                }
            }
        }

        if (ctx.objectWeaponSetWeapon()) {
            for (const weapon of ctx.objectWeaponSetWeapon()) {
                if (!weapon.EQ()) {
                    const severity = DiagnosticSeverity.Error
                    const start = new Location(weapon.start!.line, weapon.start!.column)
                    const msg = `Weapon must be assigned a value`
                    this.addDiagnostic(severity, start, start, msg, "weapon_set")
                    this.visitChildren(weapon)
                    return
                }

                if (weapon.weaponSlot_value().ID()) {
                    const weaponSlot = weapon.weaponSlot_value()!.ID()!.getText()
                    if (!Object.values(WeaponSlot_t).includes(weaponSlot as WeaponSlot_t)) {
                        const severity = DiagnosticSeverity.Error
                        const start = new Location(weapon.weaponSlot_value()!.ID().symbol.line, weapon.weaponSlot_value()!.ID().symbol.column)
                        const msg = `Invalid WeaponSlot, valid values are: ${Object.values(WeaponSlot_t).join(', ')}`
                        this.addDiagnostic(severity, start, start, msg, "weapon_set")
                        this.visitChildren(weapon)
                        return
                    }
                } else {
                    const severity = DiagnosticSeverity.Error
                    const start = new Location(weapon.start!.line, weapon.start!.column)
                    const msg = `Weapon must be assigned a WeaponSlot`
                    this.addDiagnostic(severity, start, start, msg, "weapon_set")
                    this.visitChildren(weapon)
                    return
                }

                if (weapon.property_values().ID()) {
                    for (const property of weapon.property_values().ID()) {
                        const propertyName = property.getText()
                        if (!list.weapons.find(propertyName) && !list.customWeapons.find(propertyName)) {
                            const severity = DiagnosticSeverity.Error
                            const start = new Location(property.symbol.line, property.symbol.column)
                            const msg = `Weapon ${propertyName} is not defined`
                            this.addDiagnostic(severity, start, start, msg, "weapon_set")
                            this.visitChildren(weapon)
                            return
                        }
                    }
                }
            }
        }

        this.visitChildren(ctx)
    }

    visitObjectArmorSet(ctx: ObjectArmorSetContext): void {
        this.checkEnd(ctx)

        if (ctx.propertyCondition()) {
            if (ctx.propertyCondition().length < 1) {
                const severity = DiagnosticSeverity.Error
                const start = new Location(ctx.start!.line, ctx.start!.column)
                const msg = `ArmorSet must have at least one condition`
                this.addDiagnostic(severity, start, start, msg, "armor_set")
                this.visitChildren(ctx)
                return
            }

            for (const condition of ctx.propertyCondition()) {
                for (const property of condition.property_values().ID()) {
                    const propertyName = property.getText()
                    if (!list.conditionStates.find(propertyName.toUpperCase()) && !list.customConditionStates.find(propertyName.toUpperCase())) {
                        const severity = DiagnosticSeverity.Error
                        const start = new Location(property.symbol.line, property.symbol.column)
                        const msg = `Condition state ${propertyName} is not defined`
                        this.addDiagnostic(severity, start, start, msg, "armor_set")
                    }
                }
            }
        }

        if (ctx.objectArmorSetArmor()) {
            for (const armor of ctx.objectArmorSetArmor()) {
                if (!armor.EQ()) {
                    const severity = DiagnosticSeverity.Error
                    const start = new Location(armor.start!.line, armor.start!.column)
                    const msg = `Armor must be assigned a value`
                    this.addDiagnostic(severity, start, start, msg, "armor_set")
                    this.visitChildren(armor)
                    return
                }

                if (armor.property_values().ID()) {
                    for (const property of armor.property_values().ID()) {
                        const propertyName = property.getText()
                        if (!list.definedArmor.find(propertyName) && !list.customArmor.find(propertyName)) {
                            const severity = DiagnosticSeverity.Error
                            const start = new Location(property.symbol.line, property.symbol.column)
                            const msg = `Armor ${propertyName} is not defined`
                            this.addDiagnostic(severity, start, start, msg, "armor_set")
                        }
                    }
                }
            }
        }

        this.visitChildren(ctx)
    }

    visitObjectPrerequisite(ctx: ObjectPrerequisiteContext): void {
        this.checkEnd(ctx)

        if (ctx.objectPrerequisite_object()) {
            for (const objectProperty of ctx.objectPrerequisite_object()) {
                for (const property of objectProperty.property_values().ID()) {
                    const propertyName = property.getText()
                    if (!list.objects.find(propertyName) && !list.customObjects.find(propertyName)) {
                        const severity = DiagnosticSeverity.Error
                        const start = new Location(property.symbol.line, property.symbol.column)
                        const msg = `Object ${propertyName} is not defined`
                        this.addDiagnostic(severity, start, start, msg, "prerequisite")
                    }
                }
            }
        }

        if (ctx.objectPrerequisite_science()) {
            for (const scienceProperty of ctx.objectPrerequisite_science()) {
                for (const property of scienceProperty.property_values().ID()) {
                    const propertyName = property.getText()
                    if (!list.science.find(propertyName) && !list.customScience.find(propertyName)) {
                        const severity = DiagnosticSeverity.Error
                        const start = new Location(property.symbol.line, property.symbol.column)
                        const msg = `Science ${propertyName} is not defined`
                        this.addDiagnostic(severity, start, start, msg, "prerequisite")
                    }
                }
            }
        }

        this.visitChildren(ctx)
    }

	visitObjectUnitSpecificSounds(ctx: ObjectUnitSpecificSoundsContext): void {
		this.checkEnd(ctx)

		this.visitChildren(ctx)
	}

    visitObjectUnitSpecificFX(ctx: ObjectUnitSpecificFXContext): void {
		this.checkEnd(ctx)

		this.visitChildren(ctx)
	}

    visitDrawModule(ctx: DrawModuleContext): void {
        this.checkEnd(ctx)

        const drawModule = ctx.drawModule_type()!.ID()!.getText() as DrawModule_t
        const tree = getDrawModulePropertyTree(drawModule)

        if (drawModule && ctx.drawModuleProperty()) {
            for (const property of ctx.drawModuleProperty()) {
                if (property.ID()) {
                    const propertyName = property.ID()!.getText()
                    if (!tree.find(propertyName)) {
                        const severity = DiagnosticSeverity.Error
                        const start = new Location(property.ID()!.symbol.line, property.ID()!.symbol.column)
                        const msg = `DrawModule ${drawModule} doesn't have property ${propertyName}`
                        this.addDiagnostic(severity, start, start, msg, "draw_module")
                        break;
                    }

                    this.validateProperty(propertyName, property, getDrawModulePropertyDefinition(drawModule, propertyName)!)
                }
            }
        }

        this.visitChildren(ctx)
    }

    visitDrawModule_type(ctx: DrawModule_typeContext): void {
        if (ctx.ID()) {
            const ID_text = ctx.ID()!.getText()
            if (!list.modelDraws.find(ID_text)) {
                const severity = DiagnosticSeverity.Error
                const start = new Location(ctx.ID()!.symbol.line, ctx.ID()!.symbol.column)
                const msg = `DrawModule ${ID_text} is not allowed`
                this.addDiagnostic(severity, start, start, msg)
            }
        }

        this.visitChildren(ctx)
    }

    visitDrawModuleProperty(ctx: DrawModulePropertyContext): void {
        // if (ctx.ID()) {
        //     const propertyName = ctx.ID()!.getText()

        //     if (!W3DModelDrawPropertyNameTree.find(propertyName)) {
        //         const severity = DiagnosticSeverity.Error
        //         const start = new Location(ctx.ID()!.symbol.line, ctx.ID()!.symbol.column)
        //         const msg = `DrawModule doesn't have property ${propertyName}`
        //         this.addDiagnostic(severity, start, start, msg)
        //         this.visitChildren(ctx)
        //         return
        //     }

        //     this.validateProperty(propertyName, ctx, getW3DModelDrawPropertyDefinition(propertyName)!)
        // }

        this.visitChildren(ctx)
    }

    visitConditionState(ctx: ConditionStateContext): void {
        this.checkEnd(ctx)

        this.visitChildren(ctx)
    }

    visitConditionState_values(ctx: ConditionState_valuesContext): void {
        if (ctx.ID()) {
            for (const state of ctx.ID()) {
                if (!list.conditionStates.find(state.getText().toUpperCase()) && !list.customConditionStates.find(state.getText().toUpperCase())) {
                    const severity = DiagnosticSeverity.Error
                    const start = new Location(state.symbol.line, state.symbol.column)
                    const msg = `Condition state ${state.getText()} is not defined`
                    this.addDiagnostic(severity, start, start, msg)
                }
            }
        }

        this.visitChildren(ctx)
    }

    visitConditionStateProperty(ctx: ConditionStatePropertyContext): void {
        if (ctx.ID()) {
            const propertyName = ctx.ID()!.getText()
            
            if (!conditionStatePropertyNameTree.find(propertyName)) {
                const severity = DiagnosticSeverity.Error
                const start = new Location(ctx.ID()!.symbol.line, ctx.ID()!.symbol.column)
                const msg = `ConditionState doesn't have property ${propertyName}`
                this.addDiagnostic(severity, start, start, msg)
                this.visitChildren(ctx)
                return
            }

            this.validateProperty(propertyName, ctx, getConditionStatePropertyDefinition(propertyName)!)
        }

        this.visitChildren(ctx)
    }

    visitAliasCondition(ctx: AliasConditionContext): void {
        this.visitChildren(ctx)
    }

    visitBodyModule(ctx: BodyModuleContext): void {
		this.checkEnd(ctx);

		const bodyModule = ctx.bodyModule_type()!.ID()!.getText() as BodyModule_t
        const tree = getBodyModulePropertyTree(bodyModule)

		console.log(`BodyModule: ${bodyModule}`)

        if (bodyModule && ctx.bodyModuleProperty()) {
            for (const property of ctx.bodyModuleProperty()) {
                if (property.ID()) {
                    const propertyName = property.ID()!.getText()
					console.log(`Property: ${propertyName}`)
                    if (!tree.find(propertyName)) {
                        const severity = DiagnosticSeverity.Error
                        const start = new Location(property.ID()!.symbol.line, property.ID()!.symbol.column)
                        const msg = `BodyModule ${bodyModule} doesn't have property ${propertyName}`
                        this.addDiagnostic(severity, start, start, msg, "body_module")
                        break;
                    }

                    this.validateProperty(propertyName, property, getBodyModulePropertyDefinition(bodyModule, propertyName)!)
                }
            }
        }
        this.visitChildren(ctx)
    }

    visitBehaviorModule(ctx: BehaviorModuleContext): void {
        this.visitChildren(ctx)
    }

    visitClientModule(ctx: ClientModuleContext): void {
        this.visitChildren(ctx)
    }

    private determineForceAddModule(ctx: ParserRuleContext): void {
        // Determine if the forceAddModule should be Yes or No
        if (this.forceAddModule === ForceAddModule_t.Auto && !this.forceAddModule_determined) {
            console.log("Determining ForceAddModule");
            for (const child of ctx.children || []) {
                if (child instanceof ObjectClassContext) {
                    // Look for AddModule or direct module declarations
                    for (const moduleChild of child.children || []) {
                        if (moduleChild instanceof Module_modifierContext) {
                            console.log("Found AddModule - setting to Yes");
                            this.forceAddModule = ForceAddModule_t.Yes;
                            this.forceAddModule_determined = true;
                            break;
                        } else if (
                            moduleChild instanceof DrawModuleContext ||
                            moduleChild instanceof BodyModuleContext ||
                            moduleChild instanceof BehaviorModuleContext ||
                            moduleChild instanceof ClientModuleContext
                        ) {
                            console.log("Found direct Module - setting to No");
                            this.forceAddModule = ForceAddModule_t.No;
                            this.forceAddModule_determined = true;
                            break;
                        }
                    }
                    
                    if (this.forceAddModule_determined) {
                        console.log(`ForceAddModule set to: ${this.forceAddModule}`);
                        break;
                    }
                }
            }
            
            // If we haven't determined the mode yet, default to No
            if (!this.forceAddModule_determined) {
                console.log("No modules found - defaulting to No");
                this.forceAddModule = ForceAddModule_t.No;
                this.forceAddModule_determined = true;
            }
        }
    }

    private validateProperty(
        propertyName: string, 
        ctx: PropertyContext | DrawModulePropertyContext | ConditionStatePropertyContext | BodyModulePropertyContext,
        propertyDefinition: PropertyDefinition
    ): void {
        // Check if the property is assigned a value
        if (!ctx.EQ()) {
            const severity = DiagnosticSeverity.Error
            const start = new Location(ctx.ID()!.symbol.line, ctx.ID()!.symbol.column)
            const msg = `Property must be assigned a value`
            this.addDiagnostic(severity, start, start, msg, "equals")
            this.visitChildren(ctx)
            return
        }
    
        if (ctx.property_values()) {
            const propertyValues = ctx.property_values()
    
            // Check if the property has a limited number of values
            if (propertyDefinition.numberOfValues) {
                // If the property does not have an infinite number of values, check if it has the correct number of values
                if (!propertyDefinition.numberOfValues.includes(-1) && 
                    !propertyDefinition.numberOfValues.includes(propertyValues.ID().length)) {
                    const severity = DiagnosticSeverity.Error
                    const start = new Location(ctx.start!.line, ctx.start!.column)
                    const msg = `Property ${propertyName} must have one of these numbers of values: ${propertyDefinition.numberOfValues.join(', ')}`
                    this.addDiagnostic(severity, start, start, msg, "limit_n")
                }
            } else {
                // If the property does not have a specified limit, the limit is 1
                if (propertyValues.ID().length !== 1) {
                    const severity = DiagnosticSeverity.Error
                    const start = new Location(propertyValues.stop!.line, propertyValues.stop!.column)
                    const end = new Location(propertyValues.stop!.line, propertyValues.stop!.column + propertyName.length)
                    const msg = `Property ${propertyName} must have one value`
                    this.addDiagnostic(severity, start, end, msg, "limit_1")
                }
            }
    
            // Check if the property values are valid
            for (const [i, value] of propertyValues.ID().entries()) {
                let valueText = value.getText()
    
                if (!isValidPropertyValue(valueText, propertyDefinition, i)) {
                    const severity = DiagnosticSeverity.Error
                    const start = new Location(value.symbol.line, value.symbol.column)
                    
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
                    this.addDiagnostic(severity, start, start, msg, "property_value")
                }
            }
        }
    }

    private checkEnd(ctx: ParserRuleContext): void {
        if (ctx.children) {
            const lastChild = ctx.children[ctx.children.length - 1]
            if (lastChild.getText().toUpperCase() !== 'END') {
                const severity = DiagnosticSeverity.Error
                const start = new Location(ctx.start!.line, ctx.start!.column)
                const msg = `${ctx.getChild(0)!.getText()} must be closed with 'End'`
                this.addDiagnostic(severity, start, start, msg)
            }
        }
    }

    private addDiagnostic(severity: DiagnosticSeverity, start: Location, end: Location, msg: string, srcAppend: string = ''): void {
        const diagnostic: Diagnostic = {
            severity,
            range: {
                start: start.toPosition(),
                end: end.toPosition()
            },
            message: msg,
            source: `ZeroSyntax-Server_${srcAppend}`
        };
        this.diagnostics.push(diagnostic)
    }

    public getDiagnostics(): Diagnostic[] {
        return this.diagnostics
    }

    public resetDiagnostics(): void {
        this.diagnostics = []
    }
}

export function computeDiagnostics(parser: MapIniParser, forceAddModule: ForceAddModule_t, precompileTransitionKeys: boolean): Diagnostic[] {

    let diagnostics: Diagnostic[] = []

    parser.removeErrorListeners()
    // parser.addErrorListener(new ErrorListener(diagnostics))

    const tree = parser.program()
    // console.log(`Tree: ${tree.getText()}`)

    const vistor = new DiagnosticVisitor(diagnostics, forceAddModule, precompileTransitionKeys)
    const classVisitor = new ClassVisitor()

    classVisitor.visitProgram(tree)
    vistor.visitProgram(tree)

    return diagnostics
}