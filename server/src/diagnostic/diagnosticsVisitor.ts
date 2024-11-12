
import { AbstractParseTreeVisitor, ConsoleErrorListener, ParserRuleContext } from "antlr4ng";
import { Diagnostic, DiagnosticSeverity } from "vscode-languageserver";
import { TextDocument } from 'vscode-languageserver-textdocument';
import { AddModuleContext, AliasConditionContext, BehaviorModuleContext, BehaviorModulePropertyContext, BodyModuleContext, BodyModulePropertyContext, ClassContext, ClientModuleContext, ClientModulePropertyContext, ConditionState_valuesContext, ConditionStateBlockContext, ConditionStatePropertyContext, DefaultConditionStateBlockContext, DrawModuleContext, DrawModulePropertyContext, MapIniParser, Module_modifierContext, ModuleContext, ObjectArmorSetContext, ObjectArmorSetPropertyContext, ObjectClassContext, ObjectPrerequisiteContext, ObjectPrerequisitePropertyContext, ObjectPropertyContext, ObjectUnitSpecificFXContext, ObjectUnitSpecificFXPropertyContext, ObjectUnitSpecificSoundsContext, ObjectUnitSpecificSoundsPropertyContext, ObjectWeaponSetContext, ProgramContext, PropertyContext, RemoveModuleContext, SimpleClassContext, TransitionStateBlockContext } from "../utils/antlr4ng/MapIniParser";
import { MapIniVisitor } from "../utils/antlr4ng/MapIniVisitor";
import * as list from '../utils/lists';
import { Location } from "../utils/location";
import { ClassVisitor } from './classVisitor';
import { clearAllCustomClassLists } from './data/ClassLists';
import { isValidPropertyValue, PropertyDefinition } from './properties';
import { SimpleClassTypes_t } from './types/IniType_t';
import { BehaviorModule_t } from './types/object/behaviorModule/BehaviorModule_t';
import { getBehaviorModulePropertyDefinition, getBehaviorModulePropertyTree } from './types/object/behaviorModule/BehaviorModuleProperties';
import { BodyModule_t } from './types/object/bodyModule/BodyModule_t';
import { getBodyModulePropertyDefinition, getBodyModulePropertyTree } from './types/object/bodyModule/BodyModuleProperties';
import { ClientModule_t } from './types/object/clientModule/ClientModule_t';
import { getClientModulePropertyDefinition, getClientModulePropertyTree } from './types/object/clientModule/ClientModuleProperties';
import { getConditionStatePropertyDefinition, getConditionStatePropertyTree } from './types/object/ConditionStateProperties';
import { DrawModule_t } from './types/object/drawModule/DrawModule_t';
import { getDrawModulePropertyDefinition, getDrawModulePropertyTree } from './types/object/drawModule/DrawModuleProperties';
import { ForceAddModule_t } from './types/object/ForceAddModule_t';
import { getObjectPropertyDefinition, getObjectPropertyTree, objectProperties } from './types/object/ObjectProperties';
import { armorSetProperties, prerequisiteProperties, unitSpecificFXProperties, unitSpecificSoundsProperties, weaponSetProperties } from './types/object/ObjectSetProperties';
import { AnimationProperties, AnimationPropertyMap } from './types/simple/AnimationProperties';
import { ArmorProperties, ArmorPropertyMap } from './types/simple/ArmorProperties';
import { CommandButtonProperties, CommandButtonPropertyMap } from './types/simple/CommandButtonProperties';
import { CommandSetProperties, CommandSetPropertyMap } from './types/simple/CommandSetProperties';
import { AudioEventProperties, AudioEventPropertyMap } from './types/simple/AudioEventProperties';
import { DialogEventProperties, DialogEventPropertyMap } from './types/simple/DialogEventProperties';
import { DamageFXProperties, DamageFXPropertyMap } from './types/simple/DamageFXProperties';
import { LocomotorProperties, LocomotorPropertyMap } from './types/simple/LocomotorProperties';


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

    constructor(document: TextDocument, diagnostics: Diagnostic[], forceAddModule: ForceAddModule_t = ForceAddModule_t.No, precompileTransitionKeys: boolean = false) {
        super();
        this.document = document;
        this.diagnostics = diagnostics;
        this.forceAddModule = forceAddModule;
        this.forceAddModule_determined = false;
        this.precompileTransitionKeys = precompileTransitionKeys;

		this.classModuleTags = [];
    }

    visitProgram(ctx: ProgramContext): void {
        clearAllCustomClassLists();

        this.visitChildren(ctx);
    }

    visitClass(ctx: ClassContext): void {
        this.determineForceAddModule(ctx);

		this.classModuleTags = [];

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

        if (!classType || !className || !(Object.values(SimpleClassTypes_t).includes(classType as SimpleClassTypes_t))) {
            const severity = DiagnosticSeverity.Error;
            const start = new Location(ctx.class_identifier()!.start!.line, ctx.class_identifier()!.start!.column);
            const msg = `Not a valid class type`;
            this.addDiagnostic(severity, start, start, msg);
            return;
        }

        switch (classType as SimpleClassTypes_t) {
            case SimpleClassTypes_t.ANIMATION: {
                this.handleAnimationClass(ctx);
                break;
            }
            case SimpleClassTypes_t.ARMOR: {
                this.handleArmorClass(ctx);
                break;
            }
            case SimpleClassTypes_t.AUDIO_EVENT: {
                this.handleAudioEventClass(ctx);
                break;
            }
            case SimpleClassTypes_t.COMMAND_BUTTON: {
                this.handleCommandButtonClass(ctx);
                break;
            }
            case SimpleClassTypes_t.COMMAND_SET: {
                this.handleCommandSetClass(ctx);
                break;
            }
            case SimpleClassTypes_t.DIALOG_EVENT: {
				this.handleDialogEventClass(ctx);
                break;
            }
            case SimpleClassTypes_t.DAMAGE_FX: {
                this.handleDamageFXClass(ctx);
                break;
            }
            case SimpleClassTypes_t.LOCOMOTOR: {
                this.handleLocomotorClass(ctx);
                break;
            }
            case SimpleClassTypes_t.SPECIAL_POWER: {
                break;
            }
            case SimpleClassTypes_t.SCIENCE: {
                break;
            }
            case SimpleClassTypes_t.UPGRADE: {
                break;
            }
            case SimpleClassTypes_t.WEAPON: {
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
                if (property.property_value().ID()?.getText() === "NumberImages" && numberImages != 0) {
                    numberImages = Number(property.property_values()?.property_value()[0].getText());
                    numberImagesLocation = new Location(property.start!.line, property.start!.column);
                } else if (property.property_value().ID()?.getText() === "Image") {
                    images++;
                }

                const text = this.getPropertyText(property);

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
                const text = this.getPropertyText(property);

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
                const text = this.getPropertyText(property);

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
                const text = this.getPropertyText(property);

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
                const text = this.getPropertyText(property);

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
				const text = this.getPropertyText(property);

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
                const text = this.getPropertyText(property);

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
                const text = this.getPropertyText(property);

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

    visitObjectClass(ctx: ObjectClassContext): void {
        // list.customConditionStates.clear()
        if (!this.checkEnd(ctx)) {
            return;
        }
        console.log(`Current class: ${ctx.object_value()?.getText()}`);

        const classType = ctx.object_identifier()?.getText();
        const className = ctx.object_value()?.ID()?.getText();

        if (!classType || !className) {
            return;
        }

        this.visitChildren(ctx);
    }

    visitObjectProperty(ctx: ObjectPropertyContext): void {

        if (ctx.ID()) {
            const propertyName = ctx.ID()!.getText();

            if (!getObjectPropertyTree().find(propertyName)) {
                const severity = DiagnosticSeverity.Error;
                const start = new Location(ctx.ID()!.symbol.line, ctx.ID()!.symbol.column);
                const msg = `Object doesn't have property ${propertyName}`;

				const data = {
					propertyName: propertyName,
					propertyDefinition: objectProperties
				};

                this.addDiagnostic(severity, start, start, msg, 'missing_property', data);
                this.visitChildren(ctx);
                return;
            }
            
            this.validateAssignment(propertyName, ctx, getObjectPropertyDefinition(propertyName)!);
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

    visitModule(ctx: ModuleContext): void {
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

		// Check if ModuleTags are reused
		if (ctx.drawModule()) {
			if (this.classModuleTags.includes(ctx.drawModule()!.moduleTag_value()!.getText())) {
				const severity = DiagnosticSeverity.Warning;
				const start = new Location(ctx.drawModule()!.moduleTag_value()!.start!.line, ctx.drawModule()!.moduleTag_value()!.start!.column);
				const msg = `ModuleTag is already used in another class`;
				this.addDiagnostic(severity, start, start, msg, "module_tag");
			} else {
				this.classModuleTags.push(ctx.drawModule()!.moduleTag_value()!.getText());
			}
		} else if (ctx.bodyModule()) {
			if (this.classModuleTags.includes(ctx.bodyModule()!.moduleTag_value()!.getText())) {
				const severity = DiagnosticSeverity.Warning;
				const start = new Location(ctx.bodyModule()!.moduleTag_value()!.start!.line, ctx.bodyModule()!.moduleTag_value()!.start!.column);
				const msg = `ModuleTag is already used in another class`;
				this.addDiagnostic(severity, start, start, msg, "module_tag");
			} else {
				this.classModuleTags.push(ctx.bodyModule()!.moduleTag_value()!.getText());
			}
		} else if (ctx.behaviorModule()) {
			if (this.classModuleTags.includes(ctx.behaviorModule()!.moduleTag_value()!.getText())) {
				const severity = DiagnosticSeverity.Warning;
				const start = new Location(ctx.behaviorModule()!.moduleTag_value()!.start!.line, ctx.behaviorModule()!.moduleTag_value()!.start!.column);
				const msg = `ModuleTag is already used in another class`;
				this.addDiagnostic(severity, start, start, msg, "module_tag");
			} else {
				this.classModuleTags.push(ctx.behaviorModule()!.moduleTag_value()!.getText());
			}
		} else if (ctx.clientModule()) {
			if (this.classModuleTags.includes(ctx.clientModule()!.moduleTag_value()!.getText())) {
				const severity = DiagnosticSeverity.Warning;
				const start = new Location(ctx.clientModule()!.moduleTag_value()!.start!.line, ctx.clientModule()!.moduleTag_value()!.start!.column);
				const msg = `ModuleTag is already used in another module`;
				this.addDiagnostic(severity, start, start, msg, "module_tag");
			} else {
				this.classModuleTags.push(ctx.clientModule()!.moduleTag_value()!.getText());
			}
		}



        this.visitChildren(ctx);
    }

    visitObjectWeaponSet(ctx: ObjectWeaponSetContext): void {
        if (!this.checkEnd(ctx)) {
            return;
        }
		
		if (ctx.objectWeaponSetProperty()) {
			for (const property of ctx.objectWeaponSetProperty()) {
				const propertyName = this.getPropertyText(property);

				if (!propertyName) {
                    console.log(`No property name found: ${property.getText()}`);
					continue;
				}

				if (!property.EQ()) {
					const severity = DiagnosticSeverity.Error;
					const start = new Location(property.ID()!.symbol.line, property.ID()!.symbol.column);
					const msg = `Property must be assigned a value`;
					this.addDiagnostic(severity, start, start, msg, "weapon_set");
					return;
				}

				if (!weaponSetProperties[propertyName]) {
					const severity = DiagnosticSeverity.Error;
					const start = new Location(property.ID()!.symbol.line, property.ID()!.symbol.column);
					const msg = `WeaponSet doesn't have property ${propertyName}`;
					this.addDiagnostic(severity, start, start, msg, "weapon_set");
				}

				this.validateAssignment(propertyName, property, weaponSetProperties[propertyName]!);
			}
		}

        this.visitChildren(ctx);
    }

    visitObjectArmorSet(ctx: ObjectArmorSetContext): void {
        if (!this.checkEnd(ctx)) {
            return;
        }

		if (ctx.objectArmorSetProperty()) {
			for (const property of ctx.objectArmorSetProperty()) {
				const propertyName = this.getPropertyText(property);

				if (!propertyName) {
                    console.log(`No property name found: ${property.getText()}`);
					continue;
				}

				if (!property.EQ()) {
					const severity = DiagnosticSeverity.Error;
					const start = new Location(property.ID()!.symbol.line, property.ID()!.symbol.column);
					const msg = `Property must be assigned a value`;
					this.addDiagnostic(severity, start, start, msg, "armor_set");
					return;
				}

				if (!armorSetProperties[propertyName]) {
					const severity = DiagnosticSeverity.Error;
					const start = new Location(property.ID()!.symbol.line, property.ID()!.symbol.column);
					const msg = `ArmorSet doesn't have property ${propertyName}`;
					this.addDiagnostic(severity, start, start, msg, "armor_set");
				}

				this.validateAssignment(propertyName, property, armorSetProperties[propertyName]!);
			}
		}

        this.visitChildren(ctx);
    }

    visitObjectPrerequisite(ctx: ObjectPrerequisiteContext): void {
        if (!this.checkEnd(ctx)) {
            return;
        }

		if (ctx.objectPrerequisiteProperty()) {
			for (const property of ctx.objectPrerequisiteProperty()) {
				const propertyName = this.getPropertyText(property);

				if (!propertyName) {
                    console.log(`No property name found`);
					continue;
				}

				if (!property.EQ()) {
					const severity = DiagnosticSeverity.Error;
					const start = new Location(property.ID()!.symbol.line, property.ID()!.symbol.column);
					const msg = `Property must be assigned a value`;
					this.addDiagnostic(severity, start, start, msg, "prerequisite");
					return;
				}

				if (!prerequisiteProperties[propertyName]) {
					const severity = DiagnosticSeverity.Error;
					const start = new Location(property.ID()!.symbol.line, property.ID()!.symbol.column);
					const msg = `Prerequisite doesn't have property ${propertyName}`;
					this.addDiagnostic(severity, start, start, msg, "prerequisite");
				}

				this.validateAssignment(propertyName, property, prerequisiteProperties[propertyName]!);
			}
		}

        this.visitChildren(ctx);
    }

	visitObjectUnitSpecificSounds(ctx: ObjectUnitSpecificSoundsContext): void {
		if (!this.checkEnd(ctx)) {
			return;
		}

		if (ctx.objectUnitSpecificSoundsProperty()) {
			for (const property of ctx.objectUnitSpecificSoundsProperty()) {
				const propertyName = this.getPropertyText(property);

				if (!propertyName) {
                    console.log(`No property name found: ${property.getText()}`);
					continue;
				}

				if (!property.EQ()) {
					const severity = DiagnosticSeverity.Error;
					const start = new Location(property.ID()!.symbol.line, property.ID()!.symbol.column);
					const msg = `Property must be assigned a value`;
					this.addDiagnostic(severity, start, start, msg, "unit_specific_sounds");
				}

				if (!unitSpecificSoundsProperties[propertyName]) {
					const severity = DiagnosticSeverity.Error;
					const start = new Location(property.ID()!.symbol.line, property.ID()!.symbol.column);
					const msg = `UnitSpecificSounds doesn't have property ${propertyName}`;
					this.addDiagnostic(severity, start, start, msg, "unit_specific_sounds");
				}

				this.validateAssignment(propertyName, property, unitSpecificSoundsProperties[propertyName]!);
			}
		}

		this.visitChildren(ctx);
	}

    visitObjectUnitSpecificFX(ctx: ObjectUnitSpecificFXContext): void {
		if (!this.checkEnd(ctx)) {
			return;
		}

		if (ctx.objectUnitSpecificFXProperty()) {
			for (const property of ctx.objectUnitSpecificFXProperty()) {
				const propertyName = this.getPropertyText(property);

				if (!propertyName) {
                    console.log(`No property name found: ${property.getText()}`);
					continue;
				}

				if (!property.EQ()) {
					const severity = DiagnosticSeverity.Error;
					const start = new Location(property.ID()!.symbol.line, property.ID()!.symbol.column);
					const msg = `Property must be assigned a value`;
					this.addDiagnostic(severity, start, start, msg, "unit_specific_fx");
				}

				if (!unitSpecificFXProperties[propertyName]) {
					const severity = DiagnosticSeverity.Error;
					const start = new Location(property.ID()!.symbol.line, property.ID()!.symbol.column);
					const msg = `UnitSpecificFX doesn't have property ${propertyName}`;
					this.addDiagnostic(severity, start, start, msg, "unit_specific_fx");
				}

				this.validateAssignment(propertyName, property, unitSpecificFXProperties[propertyName]!);
			}
		}

		this.visitChildren(ctx);
	}

    visitDrawModule(ctx: DrawModuleContext): void {
        if (!this.checkEnd(ctx)) {
            return;
        }

        const drawModule = ctx.drawModule_type()!.ID()!.getText() as DrawModule_t;
        const tree = getDrawModulePropertyTree(drawModule);

        if (tree === undefined) {
            const severity = DiagnosticSeverity.Error;
            const start = new Location(ctx.drawModule_type()!.ID()!.symbol.line, ctx.drawModule_type()!.ID()!.symbol.column);
            const msg = `Not a valid DrawModule`;
            this.addDiagnostic(severity, start, start, msg);
            return;
        }

		if (ctx.conditionState()) {
			for (const condition of ctx.conditionState()) {
				if (condition.defaultConditionStateBlock() && condition.defaultConditionStateBlock()!.getChild(0)) {
					if (!getDrawModulePropertyDefinition(drawModule, condition.defaultConditionStateBlock()!.getChild(0)!.getText())) {
						const severity = DiagnosticSeverity.Error;
						const start = new Location(condition.defaultConditionStateBlock()!.start!.line, condition.defaultConditionStateBlock()!.start!.column);
						const msg = `DrawModule ${drawModule} doesn't have ConditionBlock`;
						this.addDiagnostic(severity, start, start, msg, "draw_module");
					}
				} else if (condition.conditionStateBlock()) {
					if (!getDrawModulePropertyDefinition(drawModule, condition.conditionStateBlock()!.getChild(0)!.getText())) {
						const severity = DiagnosticSeverity.Error;
						const start = new Location(condition.conditionStateBlock()!.start!.line, condition.conditionStateBlock()!.start!.column);
						const msg = `DrawModule ${drawModule} doesn't have ConditionBlock`;
						this.addDiagnostic(severity, start, start, msg, "draw_module");
					}
				} else if (condition.transitionStateBlock()) {
					if (!getDrawModulePropertyDefinition(drawModule, condition.transitionStateBlock()!.getChild(0)!.getText())) {
						const severity = DiagnosticSeverity.Error;
						const start = new Location(condition.transitionStateBlock()!.start!.line, condition.transitionStateBlock()!.start!.column);
						const msg = `DrawModule ${drawModule} doesn't have ConditionBlock`;
						this.addDiagnostic(severity, start, start, msg, "draw_module");
					}
				}
			}
		}

        if (drawModule && ctx.drawModuleProperty()) {
            for (const property of ctx.drawModuleProperty()) {
                if (property.ID()) {
                    const propertyName = property.ID()!.getText();
                    if (!tree.find(propertyName)) {
                        const severity = DiagnosticSeverity.Error;
                        const start = new Location(property.ID()!.symbol.line, property.ID()!.symbol.column);
                        const msg = `DrawModule ${drawModule} doesn't have property ${propertyName}`;
                        this.addDiagnostic(severity, start, start, msg, "draw_module");
                        break;
                    }

                    this.validateAssignment(propertyName, property, getDrawModulePropertyDefinition(drawModule, propertyName)!);
                }
            }
        }

        this.visitChildren(ctx);
    }

	visitDefaultConditionStateBlock(ctx: DefaultConditionStateBlockContext): void {
		if (!this.checkEnd(ctx)) {
			return;
		}

		this.visitChildren(ctx);
	}

	visitConditionStateBlock(ctx: ConditionStateBlockContext): void {
		if (!this.checkEnd(ctx)) {
			return;
		}

		this.visitChildren(ctx);
	}

	visitTransitionStateBlock(ctx: TransitionStateBlockContext): void {
		if (!this.checkEnd(ctx)) {
			return;
		}

		this.visitChildren(ctx);
	}

    visitConditionState_values(ctx: ConditionState_valuesContext): void {
        if (ctx.ID()) {
            for (const state of ctx.ID()) {
                if (!list.conditionStates.find(state.getText().toUpperCase()) && !list.customConditionStates.find(state.getText().toUpperCase())) {
                    const severity = DiagnosticSeverity.Error;
                    const start = new Location(state.symbol.line, state.symbol.column);
                    const msg = `Condition state ${state.getText()} is not defined`;
                    this.addDiagnostic(severity, start, start, msg);
                }
            }
        }

        this.visitChildren(ctx);
    }

    visitConditionStateProperty(ctx: ConditionStatePropertyContext): void {
        if (ctx.ID()) {
            const propertyName = ctx.ID()!.getText();
            
            if (!getConditionStatePropertyTree().find(propertyName)) {
                const severity = DiagnosticSeverity.Error;
                const start = new Location(ctx.ID()!.symbol.line, ctx.ID()!.symbol.column);
                const msg = `ConditionState doesn't have property ${propertyName}`;
                this.addDiagnostic(severity, start, start, msg);
                this.visitChildren(ctx);
                return;
            }

            this.validateAssignment(propertyName, ctx, getConditionStatePropertyDefinition(propertyName)!);
        }

        this.visitChildren(ctx);
    }

    visitAliasCondition(ctx: AliasConditionContext): void {
        this.visitChildren(ctx);
    }

    visitBodyModule(ctx: BodyModuleContext): void {
		if (!this.checkEnd(ctx)) {
			return;
		}

		const bodyModule = ctx.bodyModule_type()!.ID()!.getText() as BodyModule_t;
        const tree = getBodyModulePropertyTree(bodyModule);

        if (tree === undefined) {
            const severity = DiagnosticSeverity.Error;
            const start = new Location(ctx.bodyModule_type()!.ID()!.symbol.line, ctx.bodyModule_type()!.ID()!.symbol.column);
            const msg = `Not a valid BodyModule`;
            this.addDiagnostic(severity, start, start, msg);
            return;
        }

        if (bodyModule && ctx.bodyModuleProperty()) {
            for (const property of ctx.bodyModuleProperty()) {
                if (property.ID()) {
                    const propertyName = property.ID()!.getText();
                    if (!tree.find(propertyName)) {
                        const severity = DiagnosticSeverity.Error;
                        const start = new Location(property.ID()!.symbol.line, property.ID()!.symbol.column);
                        const msg = `BodyModule ${bodyModule} doesn't have property ${propertyName}`;
                        this.addDiagnostic(severity, start, start, msg, "body_module");
                        break;
                    }

                    this.validateAssignment(propertyName, property, getBodyModulePropertyDefinition(bodyModule, propertyName)!);
                }
            }
        }
        this.visitChildren(ctx);
    }

	// TODO: Implement check for valid behavior name
    visitBehaviorModule(ctx: BehaviorModuleContext): void {
		if (!this.checkEnd(ctx)) {
			return;
		}

		const behaviorModule = ctx.behaviorModule_type()!.ID()!.getText() as BehaviorModule_t;
        const tree = getBehaviorModulePropertyTree(behaviorModule);
        
        if (tree === undefined) {
            const severity = DiagnosticSeverity.Error;
            const start = new Location(ctx.behaviorModule_type()!.ID()!.symbol.line, ctx.behaviorModule_type()!.ID()!.symbol.column);
            const msg = `Not a valid BehaviorModule`;
            this.addDiagnostic(severity, start, start, msg);
            return;
        }

		if (behaviorModule && ctx.behaviorModuleProperty()) {
			for (const property of ctx.behaviorModuleProperty()) {
				if (property.ID()) {
					const propertyName = property.ID()!.getText();
					if (!tree.find(propertyName)) {
						const severity = DiagnosticSeverity.Error;
						const start = new Location(property.ID()!.symbol.line, property.ID()!.symbol.column);
						const msg = `BehaviorModule ${behaviorModule} doesn't have property ${propertyName}`;
						this.addDiagnostic(severity, start, start, msg, "behavior_module");
						break;
					}

					this.validateAssignment(propertyName, property, getBehaviorModulePropertyDefinition(behaviorModule, propertyName)!);
				}
			}
		}

        this.visitChildren(ctx);
    }

    visitClientModule(ctx: ClientModuleContext): void {
		if (!this.checkEnd(ctx)) {
			return;
		}

		const clientModule = ctx.clientModule_type()!.ID()!.getText() as ClientModule_t;
		const tree = getClientModulePropertyTree(clientModule);

		if (tree === undefined) {
            const severity = DiagnosticSeverity.Error;
            const start = new Location(ctx.clientModule_type()!.ID()!.symbol.line, ctx.clientModule_type()!.ID()!.symbol.column);
            const msg = `Not a valid ClientModule`;
            this.addDiagnostic(severity, start, start, msg);
            return;
        }

		if (clientModule && ctx.clientModuleProperty()) {
			for (const property of ctx.clientModuleProperty()) {
				if (property.ID()) {
					const propertyName = property.ID()!.getText();
					if (!tree.find(propertyName)) {
						const severity = DiagnosticSeverity.Error;
						const start = new Location(property.ID()!.symbol.line, property.ID()!.symbol.column);
						const msg = `ClientModule ${clientModule} doesn't have property ${propertyName}`;
						this.addDiagnostic(severity, start, start, msg, "client_module");
						break;
					}

					this.validateAssignment(propertyName, property, getClientModulePropertyDefinition(clientModule, propertyName)!);
				}
			}
		}

        this.visitChildren(ctx);
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


    /**
     * Adds diagnostics for assignments for properties
     * @param propertyName - The name of the property
     * @param ctx - The context of the property
     * @param propertyDefinition - The definition of the property
     */
    private validateAssignment(
        propertyName: string, 
        ctx: PropertyContext | ObjectPropertyContext | DrawModulePropertyContext | ConditionStatePropertyContext | BodyModulePropertyContext | BehaviorModulePropertyContext | ClientModulePropertyContext,
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
            if (propertyDefinition && propertyDefinition.numberOfValues) {
                // If the property does not have an infinite number of values, check if it has the correct number of values
                if (!propertyDefinition.numberOfValues.includes(-1) && 
                    !propertyDefinition.numberOfValues.includes(propertyValues.property_value().length)) {
                    const severity = DiagnosticSeverity.Error;
                    const start = new Location(ctx.start!.line, ctx.start!.column);
                    const msg = `Property ${propertyName} must have one of these numbers of values: ${propertyDefinition.numberOfValues.join(', ')}`;
                    this.addDiagnostic(severity, start, start, msg, "limit_n");
                }
            } else {
                // If the property does not have a specified limit, the limit is 1
                if (propertyValues.property_value().length !== 1) {
                    const severity = DiagnosticSeverity.Error;
                    const start = new Location(propertyValues.stop!.line, propertyValues.stop!.column);
                    const end = new Location(propertyValues.stop!.line, propertyValues.stop!.column + propertyName.length);
                    const msg = `Property ${propertyName} must have one value`;
                    this.addDiagnostic(severity, start, end, msg, "limit_1");
                }
            }
    
            // Check if the property values are valid
            for (const [i, value] of propertyValues.property_value().entries()) {
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
                }
            }
        }
    }

    private checkEnd(ctx: ParserRuleContext): boolean {
        if (ctx.children) {
            const lastChild = ctx.children[ctx.children.length - 1];
            if (lastChild.getText().toUpperCase() !== 'END') {
                const severity = DiagnosticSeverity.Error;
                const start = new Location(ctx.start!.line, ctx.start!.column);
                const msg = `${ctx.getChild(0)!.getText()} must be closed with 'End'`;
                this.addDiagnostic(severity, start, start, msg);
				return false;
            }
        }
		return true;
    }

    private getPropertyText(
        ctx: PropertyContext | ObjectPrerequisitePropertyContext | ObjectArmorSetPropertyContext | ObjectUnitSpecificSoundsPropertyContext | ObjectUnitSpecificFXPropertyContext
    ): string | null { 

        if (ctx instanceof PropertyContext) {
            if (ctx.property_value().ID()) {
                return ctx.property_value().ID()!.getText();
            } else if (ctx.property_value().class_identifier()) {
                return ctx.property_value().class_identifier()!.getText();
            } else if (ctx.property_value().object_value()) {
                return ctx.property_value().object_value()!.getText();
            }
        } else if (ctx instanceof ObjectPrerequisitePropertyContext) {
            if (ctx.ID()) {
                return ctx.ID()!.getText();
            } else if (ctx.class_identifier()) {
                return ctx.class_identifier()!.getText();
            } else if (ctx.object_identifier()) {
                return ctx.object_identifier()!.getText();
            }
        } else if (ctx instanceof ObjectArmorSetPropertyContext) {
            if (ctx.ID()) {
                return ctx.ID()!.getText();
            } else if (ctx.class_identifier()) {
                return ctx.class_identifier()!.getText();
            }
        } else if (ctx instanceof ObjectUnitSpecificSoundsPropertyContext) {
            if (ctx.ID()) {
                return ctx.ID()!.getText();
            }
        } else if (ctx instanceof ObjectUnitSpecificFXPropertyContext) {
            if (ctx.ID()) {
                return ctx.ID()!.getText();
            }
        }

        return null;
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