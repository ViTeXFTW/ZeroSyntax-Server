
import { AbstractParseTreeVisitor, ParserRuleContext } from "antlr4ng";
import { Diagnostic, DiagnosticSeverity } from "vscode-languageserver";
import { TextDocument } from 'vscode-languageserver-textdocument';
import { AddModuleContext, ClassContext, ComplexClassContext, ConditionBlockContext, EndContext, MapIniParser, Module_modifierContext, ObjectModulesContext, ProgramContext, PropertyBlockContext, PropertyContext, RemoveModuleContext, SimpleClassContext } from "../utils/antlr4ng/MapIniParser";
import { MapIniVisitor } from "../utils/antlr4ng/MapIniVisitor";
import { Location } from "../utils/location";
import { ClassVisitor } from './classVisitor';
import { clearAllCustomClassLists } from './data/ClassLists';
import { isValidPropertyValue, PropertyDefinition } from './properties';
import { ComplexClassTypes_t, IniTypes_t } from './types/IniType_t';
import { BehaviorModule_t } from './types/object/behaviorModule/BehaviorModule_t';
import { baseTurretProperties, getBehaviorModulePropertyDefinition, getBehaviorModulePropertyTree } from './types/object/behaviorModule/BehaviorModuleProperties';
import { BodyModule_t } from './types/object/bodyModule/BodyModule_t';
import { getBodyModulePropertyDefinition, getBodyModulePropertyTree } from './types/object/bodyModule/BodyModuleProperties';
import { ClientModule_t } from './types/object/clientModule/ClientModule_t';
import { getClientModulePropertyDefinition, getClientModulePropertyTree } from './types/object/clientModule/ClientModuleProperties';
import { getConditionStatePropertyDefinition, getConditionStatePropertyTree } from './types/object/ConditionStateProperties';
import { DrawModule_t } from './types/object/drawModule/DrawModule_t';
import { getDrawModulePropertyDefinition, getDrawModulePropertyTree } from './types/object/drawModule/DrawModuleProperties';
import { ForceAddModule_t } from './types/object/ForceAddModule_t';
import { getObjectPropertyDefinition, getObjectPropertyTree, objectProperties } from './types/object/ObjectProperties';
import { ArmorSetPropertyMap, PrerequisitePropertyMap, UnitSpecificFXPropertyMap, UnitSpecificSoundsPropertyMap, WeaponSetPropertyMap } from './types/object/ObjectSetProperties';
import { DrawModuleAssignmentBlockTypes_t, DrawModulePropertyBlockTypes_t, ObjectModuleTypeNames_t, ObjectSetTypes_t } from './types/object/ObjectTypes';
import { AnimationProperties, AnimationPropertyMap } from './types/simple/AnimationProperties';
import { ArmorProperties, ArmorPropertyMap } from './types/simple/ArmorProperties';
import { AudioEventProperties, AudioEventPropertyMap } from './types/simple/AudioEventProperties';
import { CommandButtonProperties, CommandButtonPropertyMap } from './types/simple/CommandButtonProperties';
import { CommandSetProperties, CommandSetPropertyMap } from './types/simple/CommandSetProperties';
import { DamageFXProperties, DamageFXPropertyMap } from './types/simple/DamageFXProperties';
import { DialogEventProperties, DialogEventPropertyMap } from './types/simple/DialogEventProperties';
import { LocomotorProperties, LocomotorPropertyMap } from './types/simple/LocomotorProperties';
import { conditionStates, customConditionStates } from '../utils/lists';
import { kindOfs_t } from './types/PropertyTypes';
import { BehaviorModuleAI_t } from './types/object/behaviorModule/BehaviorModuleAI_t';


export class DiagnosticVisitor extends AbstractParseTreeVisitor<void> implements MapIniVisitor<void> {
    protected defaultResult(): void {
    }

    document: TextDocument;

    diagnostics: Diagnostic[];
    forceAddModule: ForceAddModule_t;
    forceAddModule_determined: boolean;
    precompileTransitionKeys: boolean;

    // Module tags
    classModuleTags: string[];
    classBehaviorModules: BehaviorModule_t[];
    classKindOfs: kindOfs_t[];

    constructor(document: TextDocument, diagnostics: Diagnostic[], forceAddModule: ForceAddModule_t = ForceAddModule_t.No, precompileTransitionKeys: boolean = false) {
        super();
        this.document = document;
        this.diagnostics = diagnostics;
        this.forceAddModule = forceAddModule;
        this.forceAddModule_determined = false;
        this.precompileTransitionKeys = precompileTransitionKeys;

        this.classModuleTags = [];
        this.classBehaviorModules = [];
        this.classKindOfs = [];
    }

    visitProgram(ctx: ProgramContext): void {
        clearAllCustomClassLists();

        this.visitChildren(ctx);
    }

    visitClass(ctx: ClassContext): void {
        this.determineForceAddModule(ctx);

        this.visitChildren(ctx);
    }

    // =====================================
    // ============ SIMPLE CLASS ===========
    // =====================================

    visitSimpleClass(ctx: SimpleClassContext): void {
        if (!this.checkEnd(ctx)) {
            return;
        }

        const classType = ctx.class_identifier()?.getText();
        const className = ctx.class_value()?.ID()?.getText();

        if (!classType || !className || !(Object.values(IniTypes_t).includes(classType as IniTypes_t))) {
            const severity = DiagnosticSeverity.Error;
            const start = new Location(ctx.class_identifier()!.start!.line, ctx.class_identifier()!.start!.column);
            const msg = `Not a valid class type`;
            this.addDiagnostic(severity, start, start, msg);
            return;
        }

        switch (classType as IniTypes_t) {
            case IniTypes_t.ANIMATION: {
                this.handleAnimationClass(ctx);
                break;
            }
            case IniTypes_t.ARMOR: {
                this.handleArmorClass(ctx);
                break;
            }
            case IniTypes_t.AUDIO_EVENT: {
                this.handleAudioEventClass(ctx);
                break;
            }
            case IniTypes_t.COMMAND_BUTTON: {
                this.handleCommandButtonClass(ctx);
                break;
            }
            case IniTypes_t.COMMAND_SET: {
                this.handleCommandSetClass(ctx);
                break;
            }
            case IniTypes_t.DIALOG_EVENT: {
                this.handleDialogEventClass(ctx);
                break;
            }
            case IniTypes_t.DAMAGE_FX: {
                this.handleDamageFXClass(ctx);
                break;
            }
            case IniTypes_t.LOCOMOTOR: {
                this.handleLocomotorClass(ctx);
                break;
            }
            case IniTypes_t.OBJECT: {
                this.handleSimpleObjectClass(ctx);
                break;
            }
            case IniTypes_t.PARTICLE_SYSTEM: {
                // this.handleParticleSystemClass(ctx);
                break;
            }
            case IniTypes_t.SPECIAL_POWER: {
                break;
            }
            case IniTypes_t.SCIENCE: {
                break;
            }
            case IniTypes_t.UPGRADE: {
                break;
            }
            case IniTypes_t.WEAPON: {
                break;
            }
            default: {
                const severity = DiagnosticSeverity.Warning;
                const start = new Location(ctx.class_identifier()!.start!.line, ctx.class_identifier()!.start!.column);
                const msg = `Unknown class type ${classType}`;
                this.addDiagnostic(severity, start, start, msg);
                break;
            }
        }

        this.visitChildren(ctx);
    }

    // =====================================
    // ======= ANIMATION CLASS =============
    // =====================================

    private handleAnimationClass(ctx: SimpleClassContext): void {

        if (ctx.property()) {
            let numberImages: number = -1;
            let numberImagesLocation: Location = new Location(ctx.start!.line, ctx.start!.column);
            let images: number = 0;

            ctx.property().forEach(property => {
                if (property.property_values().value()[0].getText() === "NumberImages" && numberImages != 0) {
                    numberImages = Number(property.property_values().value()[0].getText());
                    numberImagesLocation = new Location(property.start!.line, property.start!.column);
                } else if (property.property_values().value()[0].getText() === "Image") {
                    images++;
                }

                const text = property.value().ID()?.getText();

                if (text) {
                    if (!AnimationPropertyMap.has(text)) {
                        const severity = DiagnosticSeverity.Error;
                        const start = new Location(property.start!.line, property.start!.column);
                        const msg = `Animation doesn't have property ${text}`;

                        const data = {
                            propertyName: text,
                            propertyDefinition: AnimationProperties
                        };

                        this.addDiagnostic(severity, start, start, msg, "missing_property", data);
                        return;
                    }

                    this.validateAssignment(text!, property, AnimationPropertyMap.get(text)!);
                }
            });

            if (numberImages != -1 && images != numberImages) {
                const severity = DiagnosticSeverity.Error;
                const start = numberImagesLocation!;
                const msg = `Number of images does not match`;
                const data = {
                    images: images,
                    numberImages: numberImages
                };
                this.addDiagnostic(severity, start, start, msg, "missing_images", data);
            }
        }

        this.visitChildren(ctx);
    }

    // =====================================
    // =========== ARMOR CLASS =============
    // =====================================

    private handleArmorClass(ctx: SimpleClassContext): void {

        if (ctx.property()) {
            for (const property of ctx.property()) {
                const text = property.value().ID()?.getText();

                if (text) {
                    if (!ArmorPropertyMap.has(text)) {
                        const severity = DiagnosticSeverity.Error;
                        const start = new Location(property.start!.line, property.start!.column);
                        const msg = `Armor doesn't have property ${text}`;

                        const data = {
                            propertyName: text,
                            propertyDefinition: ArmorProperties,
                        };

                        this.addDiagnostic(severity, start, start, msg, "missing_property", data);
                        return;
                    }

                    this.validateAssignment(text, property, ArmorPropertyMap.get(text)!);
                }
            }
        }

        this.visitChildren(ctx);
    }

    // =====================================
    // ========= AUDIO EVENT ==============
    // =====================================

    private handleAudioEventClass(ctx: SimpleClassContext): void {
        if (ctx.property()) {
            for (const property of ctx.property()) {
                const text = property.value().ID()?.getText();

                if (text) {
                    if (!AudioEventPropertyMap.has(text)) {
                        const severity = DiagnosticSeverity.Error;
                        const start = new Location(property.start!.line, property.start!.column);
                        const msg = `AudioEvent doesn't have property ${text}`;

                        const data = {
                            propertyName: text,
                            propertyDefinition: AudioEventProperties
                        };

                        this.addDiagnostic(severity, start, start, msg, "missing_property", data);
                        return;
                    }

                    this.validateAssignment(text, property, AudioEventPropertyMap.get(text)!);
                }
            }
        }

        this.visitChildren(ctx);
    }

    // =====================================
    // ========= COMMAND BUTTON ============
    // =====================================

    private handleCommandButtonClass(ctx: SimpleClassContext): void {

        if (ctx.property()) {
            for (const property of ctx.property()) {
                const text = property.value().ID()?.getText();

                if (text) {
                    if (!CommandButtonPropertyMap.has(text)) {
                        const severity = DiagnosticSeverity.Error;
                        const start = new Location(property.start!.line, property.start!.column);
                        const msg = `CommandButton doesn't have property ${text}`;

                        const data = {
                            propertyName: text,
                            propertyDefinition: CommandButtonProperties
                        };

                        this.addDiagnostic(severity, start, start, msg, "missing_property", data);
                        return;
                    }

                    this.validateAssignment(text, property, CommandButtonPropertyMap.get(text)!);
                }
            }
        }

        this.visitChildren(ctx);
    }

    // =====================================
    // =========== COMMAND SET =============
    // =====================================

    private handleCommandSetClass(ctx: SimpleClassContext): void {

        if (ctx.property()) {
            for (const property of ctx.property()) {
                const text = property.value().ID()?.getText();

                if (text) {
                    if (!CommandSetPropertyMap.has(text)) {
                        const severity = DiagnosticSeverity.Error;
                        const start = new Location(property.start!.line, property.start!.column);
                        const msg = `CommandSet doesn't have property ${text}`;

                        const data = {
                            propertyName: text,
                            propertyDefinition: CommandSetProperties
                        };

                        this.addDiagnostic(severity, start, start, msg, "missing_property", data);
                        return;
                    }

                    this.validateAssignment(text, property, CommandSetPropertyMap.get(text)!);
                }
            }
        }

        this.visitChildren(ctx);
    }

    // =====================================
    // ========= DIALOG EVENT ============
    // =====================================

    private handleDialogEventClass(ctx: SimpleClassContext): void {
        if (ctx.property()) {
            for (const property of ctx.property()) {
                const text = property.value().ID()?.getText();

                if (text) {
                    if (!DialogEventPropertyMap.has(text)) {
                        const severity = DiagnosticSeverity.Error;
                        const start = new Location(property.start!.line, property.start!.column);
                        const msg = `DialogEvent doesn't have property ${text}`;

                        const data = {
                            propertyName: text,
                            propertyDefinition: DialogEventProperties
                        };

                        this.addDiagnostic(severity, start, start, msg, "missing_property", data);
                    }

                    this.validateAssignment(text, property, DialogEventPropertyMap.get(text)!);
                }
            }
        }

        this.visitChildren(ctx);
    }

    // =====================================
    // ========= DAMAGEFX CLASS ============
    // =====================================

    private handleDamageFXClass(ctx: SimpleClassContext): void {
        if (ctx.property()) {
            for (const property of ctx.property()) {
                const text = property.value().ID()?.getText();

                if (text) {
                    if (!DamageFXPropertyMap.has(text)) {
                        const severity = DiagnosticSeverity.Error;
                        const start = new Location(property.start!.line, property.start!.column);
                        const msg = `DamageFX doesn't have property ${text}`;

                        const data = {
                            propertyName: text,
                            propertyDefinition: DamageFXProperties
                        };

                        this.addDiagnostic(severity, start, start, msg, "missing_property", data);
                    }

                    this.validateAssignment(text, property, DamageFXPropertyMap.get(text)!);
                }
            }
        }

        this.visitChildren(ctx);
    }

    // =====================================
    // ========= LOCUMOTOR CLASS ===========
    // =====================================

    private handleLocomotorClass(ctx: SimpleClassContext): void {
        if (ctx.property()) {
            for (const property of ctx.property()) {
                const text = property.value().ID()?.getText();

                if (text) {
                    if (!LocomotorPropertyMap.has(text)) {
                        const severity = DiagnosticSeverity.Error;
                        const start = new Location(property.start!.line, property.start!.column);
                        const msg = `Locomotor doesn't have property ${text}`;

                        const data = {
                            propertyName: text,
                            propertyDefinition: LocomotorProperties
                        };

                        this.addDiagnostic(severity, start, start, msg, "missing_property", data);
                        return;
                    }

                    this.validateAssignment(text, property, LocomotorPropertyMap.get(text)!);
                }
            }
        }

        this.visitChildren(ctx);
    }

    // =====================================
    // =========== OBJECT CLASS ============
    // =====================================

    //* SimpleObjectClass is a class that doesn't have any blocks, only properties
    private handleSimpleObjectClass(ctx: SimpleClassContext): void {
        if (!this.checkEnd(ctx)) {
            return;
        }

        this.handleObjectProperties(ctx);
        this.visitChildren(ctx);
    }

    visitComplexClass(ctx: ComplexClassContext): void {
        // list.customConditionStates.clear()
        if (!this.checkEnd(ctx)) {
            return;
        }


        const classType = ctx.class_identifier()?.getText();
        const className = ctx.class_value()[0]?.getText();

        if (!classType || !className) {
            return;
        }

        console.log(`Current ${classType}: ${className}`);

        switch (classType) {
            case ComplexClassTypes_t.OBJECT: {
                this.classModuleTags = [];
                this.classBehaviorModules = [];
                this.handleObjectClass(ctx);
                break;
            }
            default: {
                break;
            }
        }


        this.visitChildren(ctx);
    }

    /**
     * Handle properties of the Object class
     * @param ctx - The context of the Object class
     */
    private handleObjectClass(ctx: ComplexClassContext): void {
        console.log(`Handling Object Class`);

        // Precompile list of behavior modules
        this.compileBehaviorModules(ctx);

        // Handle outer properties
        this.handleObjectProperties(ctx);

        // Handle ObjectSets
        this.handleObjectSets(ctx);
    }

    private compileBehaviorModules(ctx: ComplexClassContext): void {

        if (ctx.objectModules()) {
            this.handleObjectModules(ctx.objectModules());
        } 

        if (ctx.module_modifier()) {
            for (const modifier of ctx.module_modifier()) {
                if (modifier.addModule()?.objectModules()) {
                    this.handleObjectModules(modifier.addModule()!.objectModules());
                }
            }
        }
    }

    private handleObjectModules(objectModules: ObjectModulesContext[]): void {
        for (const module of objectModules) {
            const moduleName = module.module_name()?.getText();

            if (moduleName && module.module_type()?.getText() === ObjectModuleTypeNames_t.BEHAVIOR) {
                if (!this.classBehaviorModules.includes(moduleName as BehaviorModule_t)) {
                    this.classBehaviorModules.push(moduleName as BehaviorModule_t);
                }
            }
        }
    }


    /**
     * Handle properties of the Object class
     * @param ctx - The context of the Object class
     */
    private handleObjectProperties(ctx: ComplexClassContext | SimpleClassContext): void {
        if (ctx.property()) {
            for (const property of ctx.property()) {
                if (property.value()) {
                    const valueText = property.value()!.getText();

                    if (!property.EQ()) {
                        const severity = DiagnosticSeverity.Error;
                        const start = new Location(property.start!.line, property.start!.column);
                        const msg = `Property must be assigned a value`;
                        this.addDiagnostic(severity, start, start, msg, "missing_property");
                        return;
                    }

                    if (!getObjectPropertyTree().find(valueText)) {
                        const severity = DiagnosticSeverity.Error;
                        const start = new Location(property.start!.line, property.start!.column);
                        const msg = `Object doesn't have property ${valueText}`;

                        const data = {
                            propertyName: valueText,
                            propertyDefinition: objectProperties
                        };

                        this.addDiagnostic(severity, start, start, msg, 'missing_property', data);
                    }

                    this.validateAssignment(valueText, property, getObjectPropertyDefinition(valueText)!);
                }
            }
        }
    }

    /**
     * Handle ObjectSets
     * @param ctx - The context of the Object class
     */
    private handleObjectSets(ctx: ComplexClassContext): void {

        if (ctx.propertyBlock()) {
            for (const propertyBlock of ctx.propertyBlock()) {
                const text = propertyBlock.ID()?.getText();

                switch (text) {
                    case ObjectSetTypes_t.WEAPONSET: {
                        this.handleObjectWeaponSet(propertyBlock);
                        break;
                    }
                    case ObjectSetTypes_t.ARMORSET: {
                        this.handleObjectArmorSet(propertyBlock);
                        break;
                    }
                    case ObjectSetTypes_t.PREREQUISITES: {
                        this.handleObjectPrerequisites(propertyBlock);
                        break;
                    }
                    case ObjectSetTypes_t.UNITSPECIFICSOUNDS: {
                        this.handleObjectUnitSpecificSounds(propertyBlock);
                        break;
                    }
                    case ObjectSetTypes_t.UNITSPECIFICFX: {
                        this.handleObjectUnitSpecificFX(propertyBlock);
                        break;
                    }
                }
            }
        }
    }

    private handleObjectWeaponSet(ctx: PropertyBlockContext): void {
        if (!this.checkEnd(ctx)) {
            return;
        }

        for (const property of ctx.property()) {
            const text = property.value().ID()?.getText();

            if (!text) {
                console.log(`No property name found: ${property.getText()}`);
                continue;
            }

            if (!property.EQ()) {
                const severity = DiagnosticSeverity.Error;
                const start = new Location(property.start!.line, property.start!.column);
                const msg = `Property must be assigned a value`;
                this.addDiagnostic(severity, start, start, msg, "weapon_set");
                return;
            }

            if (!WeaponSetPropertyMap.has(text)) {
                const severity = DiagnosticSeverity.Error;
                const start = new Location(property.start!.line, property.start!.column);
                const msg = `WeaponSet doesn't have property ${text}`;
                this.addDiagnostic(severity, start, start, msg, "weapon_set");
            }

            this.validateAssignment(text, property, WeaponSetPropertyMap.get(text)!);
        }

        this.visitChildren(ctx);
    }

    private handleObjectArmorSet(ctx: PropertyBlockContext): void {
        if (!this.checkEnd(ctx)) {
            return;
        }

        for (const property of ctx.property()) {
            const text = property.value().ID()?.getText();

            if (!text) {
                console.log(`No property name found: ${property.getText()}`);
                continue;
            }

            if (!property.EQ()) {
                const severity = DiagnosticSeverity.Error;
                const start = new Location(property.start!.line, property.start!.column);
                const msg = `Property must be assigned a value`;
                this.addDiagnostic(severity, start, start, msg, "armor_set");
            }

            if (!ArmorSetPropertyMap.has(text)) {
                const severity = DiagnosticSeverity.Error;
                const start = new Location(property.start!.line, property.start!.column);
                const msg = `ArmorSet doesn't have property ${text}`;
                this.addDiagnostic(severity, start, start, msg, "armor_set");
            }

            this.validateAssignment(text, property, ArmorSetPropertyMap.get(text)!);
        }

        this.visitChildren(ctx);
    }

    visitAddModule(ctx: AddModuleContext): void {
        if (!this.checkEnd(ctx)) {
            return;
        }

        this.visitChildren(ctx);
    }

    visitRemoveModule(ctx: RemoveModuleContext): void {
        this.visitChildren(ctx);
    }

    visitObjectModules(ctx: ObjectModulesContext): void {
        if (this.forceAddModule === ForceAddModule_t.Yes) {
            const parent = ctx.parent;
            // If parent is not a module_modifier, provide an error
            if (!(parent instanceof AddModuleContext)) {
                const severity = DiagnosticSeverity.Error;
                const start = new Location(ctx.start!.line, ctx.start!.column);
                const msg = `This module must be incapsulated in a AddModule block`;
                this.addDiagnostic(severity, start, start, msg, "module");
                // TODO: Add a quick fix to change ForceAddModule setting
            }
        }

        const moduleType = ctx.module_type()?.getText();
        const moduleName = ctx.module_name()?.getText();
        const moduleTag = ctx.moduleTag_value()?.getText();

        if (!moduleType || !moduleName || !moduleTag) {
            console.log(`No module type, name, or tag found: ${ctx.getText()}`);
            return;
        }

        if (ctx.moduleTag_value() && this.classModuleTags.includes(ctx.moduleTag_value()!.getText())) {
            const severity = DiagnosticSeverity.Warning;
            const start = new Location(ctx.moduleTag_value()!.start!.line, ctx.moduleTag_value()!.start!.column);
            const msg = `ModuleTag ${ctx.moduleTag_value()!.getText()} is already used in another class`;
            this.addDiagnostic(severity, start, start, msg, "module_tag");
        } else {
            this.classModuleTags.push(ctx.moduleTag_value()!.getText());
        }

        switch (moduleType) {
            case ObjectModuleTypeNames_t.DRAW: {
                this.handleDrawModule(ctx);
                break;
            }
            case ObjectModuleTypeNames_t.BODY: {
                this.handleBodyModule(ctx);
                break;
            }
            case ObjectModuleTypeNames_t.BEHAVIOR: {
                this.handleBehaviorModule(ctx);
                break;
            }
            case ObjectModuleTypeNames_t.CLIENT: {
                this.handleClientModule(ctx);
                break;
            }
            default: {
                const severity = DiagnosticSeverity.Error;
                const start = new Location(ctx.module_type()!.start!.line, ctx.module_type()!.start!.column);
                const msg = `Not a valid module type`;
                this.addDiagnostic(severity, start, start, msg, "module");
                break;
            }
        }

        this.visitChildren(ctx);
    }

    private handleObjectPrerequisites(ctx: PropertyBlockContext): void {
        if (!this.checkEnd(ctx)) {
            return;
        }

        for (const property of ctx.property()) {
            const text = property.value().ID()?.getText();

            if (!text) {
                console.log(`No property name found: ${property.getText()}`);
                continue;
            }

            if (!property.EQ()) {
                const severity = DiagnosticSeverity.Error;
                const start = new Location(property.start!.line, property.start!.column);
                const msg = `Property must be assigned a value`;
                this.addDiagnostic(severity, start, start, msg, "prerequisite");
            }

            if (!PrerequisitePropertyMap.has(text)) {
                const severity = DiagnosticSeverity.Error;
                const start = new Location(property.start!.line, property.start!.column);
                const msg = `Prerequisite doesn't have property ${text}`;
                this.addDiagnostic(severity, start, start, msg, "prerequisite");
            }

            this.validateAssignment(text, property, PrerequisitePropertyMap.get(text)!);
        }
    }

    private handleObjectUnitSpecificSounds(ctx: PropertyBlockContext): void {
        if (!this.checkEnd(ctx)) {
            return;
        }

        for (const property of ctx.property()) {
            const text = property.value().ID()?.getText();

            if (!text) {
                console.log(`No property name found: ${property.getText()}`);
                continue;
            }

            if (!property.EQ()) {
                const severity = DiagnosticSeverity.Error;
                const start = new Location(property.start!.line, property.start!.column);
                const msg = `Property must be assigned a value`;
                this.addDiagnostic(severity, start, start, msg, "unit_specific_sounds");
            }

            if (!UnitSpecificSoundsPropertyMap.has(text)) {
                const severity = DiagnosticSeverity.Error;
                const start = new Location(property.start!.line, property.start!.column);
                const msg = `UnitSpecificSounds doesn't have property ${text}`;
                this.addDiagnostic(severity, start, start, msg, "unit_specific_sounds");
            }

            this.validateAssignment(text, property, UnitSpecificSoundsPropertyMap.get(text)!);
        }
    }

    private handleObjectUnitSpecificFX(ctx: PropertyBlockContext): void {
        if (!this.checkEnd(ctx)) {
            return;
        }

        for (const property of ctx.property()) {
            const text = property.value().ID()?.getText();

            if (!text) {
                console.log(`No property name found: ${property.getText()}`);
                continue;
            }

            if (!property.EQ()) {
                const severity = DiagnosticSeverity.Error;
                const start = new Location(property.start!.line, property.start!.column);
                const msg = `Property must be assigned a value`;
                this.addDiagnostic(severity, start, start, msg, "unit_specific_fx");
            }

            if (!UnitSpecificFXPropertyMap.has(text)) {
                const severity = DiagnosticSeverity.Error;
                const start = new Location(property.start!.line, property.start!.column);
                const msg = `UnitSpecificFX doesn't have property ${text}`;
                this.addDiagnostic(severity, start, start, msg, "unit_specific_fx");
            }

            this.validateAssignment(text, property, UnitSpecificFXPropertyMap.get(text)!);
        }
    }

    // *********************** //
    // ***** DRAW MODULE ***** //
    // *********************** //
    private handleDrawModule(ctx: ObjectModulesContext): void {
        if (!this.checkEnd(ctx)) {
            return;
        }

        // We are sure that module_name is defined otherwise this function would not be called
        const drawModule = ctx.module_name()!.ID()!.getText() as DrawModule_t;
        const tree = getDrawModulePropertyTree(drawModule);

        console.log(`DrawModule: ${drawModule}`);

        // If the tree hasn't been found, then that means that the entered DrawModule doesn't exist.
        if (!tree) {
            const severity = DiagnosticSeverity.Error;
            const start = new Location(ctx.module_name()!.ID()!.symbol.line, ctx.module_name()!.ID()!.symbol.column);
            const msg = `Not a valid DrawModule`;
            this.addDiagnostic(severity, start, start, msg);
        }

        // Properties for DrawModule
        if (ctx.property()) {
            for (const [propertyIndex, property] of ctx.property().entries()) {
                const propertyName = property.value().ID()!.getText();

                //! 1. Check if property is starting a ConditionState or TransitionState block
                //! 2. If it is, then check if the ConditionStateValues are valid
                //! 3. If they are then parse all following properties as ConditionState or TransitionState properties
                //! 4. When an endRule is found, return back to draw module properties

                // If the property doesn't exist in the tree, then we skip validation
                if (!tree.find(propertyName)) {
                    const severity = DiagnosticSeverity.Error;
                    const start = new Location(property.value().ID()!.symbol.line, property.value().ID()!.symbol.column);
                    const msg = `DrawModule ${drawModule} doesn't have property ${propertyName}`;
                    this.addDiagnostic(severity, start, start, msg, "draw_module");
                    continue;
                }

                this.validateAssignment(propertyName, property, getDrawModulePropertyDefinition(drawModule, propertyName)!);
            }
        }

        // PropertyBlocks for DrawModule (DefaultConditionState)
        if (ctx.propertyBlock()) {
            for (const propertyBlock of ctx.propertyBlock()) {
                this.handleDrawModulePropertyBlock(propertyBlock);
            }
        }
    }

    visitConditionBlock(ctx: ConditionBlockContext): void {

        const conditionBlockType = ctx.CONDITIONSTATE()?.getText();

        if (!conditionBlockType) {
            const severity = DiagnosticSeverity.Error;
            const start = new Location(ctx.start!.line, ctx.start!.column);
            const msg = `Not a valid block for DrawModule`;
            this.addDiagnostic(severity, start, start, msg, "draw_module");
            return;
        }

        switch (conditionBlockType) {
            case DrawModuleAssignmentBlockTypes_t.CONDITIONSTATE: {
                this.handleDrawModuleConditionState(ctx);
                break;
            }
            case DrawModuleAssignmentBlockTypes_t.TRANSITIONSTATE: {
                this.handleDrawModuleTransitionState(ctx);
                break;
            }
            default: {
                const severity = DiagnosticSeverity.Error;
                const start = new Location(ctx.start!.line, ctx.start!.column);
                const msg = `Not a valid block for DrawModule`;
                this.addDiagnostic(severity, start, start, msg, "draw_module");
                break;
            }
        }

        this.visitChildren(ctx);
    }

    private handleDrawModuleConditionState(ctx: ConditionBlockContext): void {
        this.handleDrawModuleConditionStateValues(ctx);

        for (const property of ctx.property()) {
            this.handleDrawModuleConditionStateProperty(property);
        }

        this.visitChildren(ctx);
    }

    private handleDrawModuleTransitionState(ctx: ConditionBlockContext): void {
        this.handleDrawModuleConditionStateValues(ctx);

        for (const property of ctx.property()) {
            this.handleDrawModuleTransitionStateProperty(property);
        }

        this.visitChildren(ctx);
    }

    private handleDrawModuleConditionStateValues(ctx: ConditionBlockContext): void {

        for (const conditionStateValue of ctx.property_values().value()) {
            const conditionStateValueText = conditionStateValue.getText().toUpperCase();

            if (!conditionStates.find(conditionStateValueText) && !customConditionStates.find(conditionStateValueText)) {
                const severity = DiagnosticSeverity.Error;
                const start = new Location(conditionStateValue.start!.line, conditionStateValue.start!.column);
                const msg = `ConditionState doesn't have value ${conditionStateValueText}`;
                this.addDiagnostic(severity, start, start, msg);
            }
        }

        this.visitChildren(ctx);
    }

    private handleDrawModulePropertyBlock(ctx: PropertyBlockContext): void {
        const propertyBlockType = ctx.ID()!.getText();

        console.log(`PropertyBlockType: ${propertyBlockType}`);

        switch (propertyBlockType) {
            case DrawModulePropertyBlockTypes_t.DEFAULTCONDITIONSTATE: {
                for (const property of ctx.property()) {
                    this.handleDrawModuleConditionStateProperty(property);
                }
                break;
            }
            default: {
                const severity = DiagnosticSeverity.Error;
                const start = new Location(ctx.ID()!.symbol.line, ctx.ID()!.symbol.column);
                const msg = `Not a valid block for DrawModule`;
                this.addDiagnostic(severity, start, start, msg, "draw_module");
                break;
            }
        }
    }

    private handleDrawModuleConditionStateProperty(ctx: PropertyContext): void {
        const propertyName = ctx.value().ID()!.getText();

        if (!getConditionStatePropertyTree().find(propertyName)) {
            const severity = DiagnosticSeverity.Error;
            const start = new Location(ctx.value().ID()!.symbol.line, ctx.value().ID()!.symbol.column);
            const msg = `ConditionState doesn't have property ${propertyName}`;
            this.addDiagnostic(severity, start, start, msg);
            return;
        }

        this.validateAssignment(propertyName, ctx, getConditionStatePropertyDefinition(propertyName)!);
    }

    private handleDrawModuleTransitionStateProperty(ctx: PropertyContext): void {
        const propertyName = ctx.value().ID()!.getText();

        // TODO: Implement
        console.log(`TransitionStateProperty Missing implementation`);
    }

    // *********************** //
    // ***** BODY MODULE ***** //
    // *********************** //
    private handleBodyModule(ctx: ObjectModulesContext): void {
        if (!this.checkEnd(ctx)) {
            return;
        }

        const bodyModule = ctx.module_name()!.ID()!.getText() as BodyModule_t;
        const tree = getBodyModulePropertyTree(bodyModule);

        if (tree === undefined) {
            const severity = DiagnosticSeverity.Error;
            const start = new Location(ctx.module_name()!.ID()!.symbol.line, ctx.module_name()!.ID()!.symbol.column);
            const msg = `Not a valid BodyModule`;
            this.addDiagnostic(severity, start, start, msg);
            return;
        }

        // Properties for BodyModule
        if (ctx.property()) {
            for (const property of ctx.property()) {
                const propertyName = property.value().ID()!.getText();

                if (!tree.find(propertyName)) {
                    const severity = DiagnosticSeverity.Error;
                    const start = new Location(property.value().ID()!.symbol.line, property.value().ID()!.symbol.column);
                    const msg = `BodyModule ${bodyModule} doesn't have property ${propertyName}`;
                    this.addDiagnostic(severity, start, start, msg, "body_module");
                    break;
                }

                this.validateAssignment(propertyName, property, getBodyModulePropertyDefinition(bodyModule, propertyName)!);
            }
        }
    }

    // *************************** //
    // ***** BEHAVIOR MODULE ***** //
    // *************************** //
    // TODO: Implement check for valid behavior name
    private handleBehaviorModule(ctx: ObjectModulesContext): void {
        if (!this.checkEnd(ctx)) {
            return;
        }

        const behaviorModule = ctx.module_name()!.ID()!.getText() as BehaviorModule_t;
        const tree = getBehaviorModulePropertyTree(behaviorModule);

        if (tree === undefined) {
            const severity = DiagnosticSeverity.Error;
            const start = new Location(ctx.module_name()!.ID()!.symbol.line, ctx.module_name()!.ID()!.symbol.column);
            const msg = `Not a valid BehaviorModule`;
            this.addDiagnostic(severity, start, start, msg);
            return;
        }

        // Only allowed block here is Turret | AltTurret
        if (ctx.propertyBlock()) {
            for (const propertyBlock of ctx.propertyBlock()) {
                if (BehaviorModuleAI_t.includes(behaviorModule)) {
                    if (propertyBlock.ID()!.getText() !== 'Turret' && propertyBlock.ID()!.getText() !== 'AltTurret') {
                        const severity = DiagnosticSeverity.Error;
                        const start = new Location(propertyBlock.ID()!.symbol.line, propertyBlock.ID()!.symbol.column);
                        const msg = `Only allowed blocks are Turret and AltTurret`;
                        this.addDiagnostic(severity, start, start, msg, "behavior_module");
                        break;
                    }

                    this.checkEnd(propertyBlock);

                    for (const property of propertyBlock.property()) {
                        this.handleTurretProperty(property);
                    }
                } else {
                    const severity = DiagnosticSeverity.Error;
                    const start = new Location(propertyBlock.ID()!.symbol.line, propertyBlock.ID()!.symbol.column);
                    const msg = `BehaviorModule ${behaviorModule} doesn't have Turret or AltTurret block`;
                    this.addDiagnostic(severity, start, start, msg, "behavior_module");
                }
            }
        }

        // Properties for BehaviorModule
        if (ctx.property()) {
            for (const property of ctx.property()) {
                const propertyName = property.value().ID()!.getText();

                if (!tree.find(propertyName)) {
                    const severity = DiagnosticSeverity.Error;
                    const start = new Location(property.value().ID()!.symbol.line, property.value().ID()!.symbol.column);
                    const msg = `BehaviorModule ${behaviorModule} doesn't have property ${propertyName}`;
                    this.addDiagnostic(severity, start, start, msg, "behavior_module");
                    break;
                }

                this.validateAssignment(propertyName, property, getBehaviorModulePropertyDefinition(behaviorModule, propertyName)!);
            }
        }
    }

    private handleTurretProperty(ctx: PropertyContext): void {
        const propertyName = ctx.value().ID()!.getText();

        if (!baseTurretProperties[propertyName]) {
            const severity = DiagnosticSeverity.Error;
            const start = new Location(ctx.value().ID()!.symbol.line, ctx.value().ID()!.symbol.column);
            const msg = `Turret doesn't have property ${propertyName}`;
            this.addDiagnostic(severity, start, start, msg, "behavior_module");
        }

        this.validateAssignment(propertyName, ctx, baseTurretProperties[propertyName]);
    }

    // ************************* //
    // ***** CLIENT MODULE ***** //
    // ************************* //
    private handleClientModule(ctx: ObjectModulesContext): void {
        if (!this.checkEnd(ctx)) {
            return;
        }

        const clientModule = ctx.module_name()!.ID()!.getText() as ClientModule_t;
        const tree = getClientModulePropertyTree(clientModule);

        if (tree === undefined) {
            const severity = DiagnosticSeverity.Error;
            const start = new Location(ctx.module_name()!.ID()!.symbol.line, ctx.module_name()!.ID()!.symbol.column);
            const msg = `Not a valid ClientModule`;
            this.addDiagnostic(severity, start, start, msg);
            return;
        }

        // Properties for ClientModule
        if (ctx.property()) {
            for (const property of ctx.property()) {
                const propertyName = property.value().ID()!.getText();

                if (!tree.find(propertyName)) {
                    const severity = DiagnosticSeverity.Error;
                    const start = new Location(property.value().ID()!.symbol.line, property.value().ID()!.symbol.column);
                    const msg = `ClientModule ${clientModule} doesn't have property ${propertyName}`;
                    this.addDiagnostic(severity, start, start, msg, "client_module");
                    break;
                }

                this.validateAssignment(propertyName, property, getClientModulePropertyDefinition(clientModule, propertyName)!);
            }
        }
    }

    private determineForceAddModule(ctx: ParserRuleContext): void {
        // Determine if the forceAddModule should be Yes or No
        if (this.forceAddModule === ForceAddModule_t.Auto && !this.forceAddModule_determined) {
            console.log("Determining ForceAddModule");
            for (const child of ctx.children || []) {
                if (child instanceof ComplexClassContext) {
                    // Look for AddModule or direct module declarations
                    for (const moduleChild of child.children || []) {
                        if (moduleChild instanceof Module_modifierContext) {
                            console.log("Found AddModule - setting to Yes");
                            this.forceAddModule = ForceAddModule_t.Yes;
                            this.forceAddModule_determined = true;
                            break;
                        } else if (
                            moduleChild instanceof ObjectModulesContext
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


    /**
     * Adds diagnostics for assignments for properties
     * @param propertyName - The name of the property
     * @param ctx - The context of the property
     * @param propertyDefinition - The definition of the property
     */
    private validateAssignment(
        propertyName: string,
        ctx: PropertyContext,
        propertyDefinition: PropertyDefinition
    ): void {
        // Check if the property is assigned a value
        if (!ctx.EQ()) {
            const severity = DiagnosticSeverity.Error;
            const start = new Location(ctx.start!.line, ctx.start!.column);
            const msg = `Property must be assigned a value`;
            this.addDiagnostic(severity, start, start, msg, "equals");
            this.visitChildren(ctx);
        }

        if (ctx.property_values()) {
            const propertyValues = ctx.property_values();

            // Check if property value is newline
            // TODO: Check all values and ensure none is newline to display error if property doesn't have a value
            if (/\r?\n$/.test(propertyValues.getChild(0)!.getText()) || propertyValues.getChild(0)!.getText().toUpperCase() === '<MISSING ID>') {
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
                    const start = new Location(ctx.start!.line, ctx.start!.column);
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
                        this.checkRequiredModules(ctx, [requiredValue.type as BehaviorModule_t]);
                    } else if (Object.values(kindOfs_t).includes(requiredValue.type as kindOfs_t)) {
                        if (!this.classKindOfs.includes(requiredValue.type as kindOfs_t)) {
                            const severity = DiagnosticSeverity.Warning;
                            const start = new Location(ctx.start!.line, ctx.start!.column);
                            const msg = `Property ${propertyName} requires KindOf: ${requiredValue.type}`;
                            this.addDiagnostic(severity, start, start, msg);
                        }
                    }
                });
            }

            // Check if the property values are valid
            for (const [i, value] of propertyValues.value().entries()) {
                const valueText = value.getText();

                if (!isValidPropertyValue(valueText, propertyDefinition, i)) {
                    const severity = DiagnosticSeverity.Error;
                    const start = new Location(value.start!.line, value.start!.column);
                    const end = new Location(value.stop!.line, value.stop!.column);
                    // Get the type for this specific position
                    console.log(`PropertyDefinition: ${propertyDefinition.validValues}`);

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
                        console.log(`ClassKindOfs: ${this.classKindOfs.toString()}`);
                    }

                }
            }
        }
    }

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

    private checkEnd(ctx: ParserRuleContext): boolean {
        if (ctx.children) {
            const lastChild = ctx.children[ctx.children.length - 1];
            if (lastChild.getText().toUpperCase() !== 'END') {
                const severity = DiagnosticSeverity.Error;
                const start = new Location(ctx.start!.line, ctx.start!.column);
                const msg = `${ctx.getChild(ctx.children.length - 1)!.getText()} must be closed with 'End'`;
                this.addDiagnostic(severity, start, start, msg);
                return false;
            }
        }
        return true;
    }

    private addDiagnostic(
        severity: DiagnosticSeverity,
        start: Location,
        end: Location,
        msg: string,
        srcAppend: string = '',
        data?: any
    ): Diagnostic {
        const diagnostic: Diagnostic = {
            severity,
            range: {
                start: start.toPosition(),
                end: end.toPosition()
            },
            message: msg,
            source: `ZeroSyntax-Server_${srcAppend}`,
            data: data
        };
        this.diagnostics.push(diagnostic);
        return diagnostic;
    }

    public getDiagnostics(): Diagnostic[] {
        return this.diagnostics;
    }

    public resetDiagnostics(): void {
        this.diagnostics = [];
    }
}

export function computeDiagnostics(document: TextDocument, parser: MapIniParser, forceAddModule: ForceAddModule_t, precompileTransitionKeys: boolean): Diagnostic[] {

    const diagnostics: Diagnostic[] = [];

    parser.removeErrorListeners();
    // parser.addErrorListener(new ErrorListener(diagnostics))

    const tree = parser.program();
    // console.log(`Tree: ${tree.getText()}`)

    const vistor = new DiagnosticVisitor(document, diagnostics, forceAddModule, precompileTransitionKeys);
    const classVisitor = new ClassVisitor();

    classVisitor.visitProgram(tree);
    vistor.visitProgram(tree);

    return diagnostics;
}