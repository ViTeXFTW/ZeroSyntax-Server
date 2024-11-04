
import { AbstractParseTreeVisitor, ParserRuleContext } from "antlr4ng";
import { Diagnostic, DiagnosticSeverity } from "vscode-languageserver";
import { AddModuleContext, AliasConditionContext, BehaviorModuleContext, BodyModuleContext, BodyModulePropertyContext, ClassContext, ClientModuleContext, ConditionState_valuesContext, ConditionStateBlockContext, ConditionStatePropertyContext, DefaultConditionStateBlockContext, DrawModule_typeContext, DrawModuleContext, DrawModulePropertyContext, MapIniParser, Module_modifierContext, ModuleContext, ObjectArmorSetContext, ObjectClassContext, ObjectPrerequisiteContext, ObjectPropertyContext, ObjectUnitSpecificFXContext, ObjectUnitSpecificSoundsContext, ObjectWeaponSetContext, ProgramContext, PropertyContext, RemoveModuleContext, TransitionStateBlockContext } from "../utils/antlr4ng/MapIniParser";
import { MapIniVisitor } from "../utils/antlr4ng/MapIniVisitor";
import * as list from '../utils/lists';
import { Location } from "../utils/location";
import { ClassVisitor } from './classVisitor';
import { getObjectPropertyDefinition, isValidPropertyValue, objectPropertyNameTree, PropertyDefinition } from './properties';
import { BehaviorModule_t } from './types/BehaviorModule_t';
import { getBehaviorModulePropertyDefinition, getBehaviorModulePropertyTree } from './types/BehaviorModuleProperties';
import { BodyModule_t } from './types/BodyModule_t';
import { getBodyModulePropertyDefinition, getBodyModulePropertyTree } from './types/BodyModuleProperties';
import { ClientModule_t } from './types/ClientModule_t';
import { getClientModulePropertyDefinition, getClientModulePropertyTree } from './types/ClientModuleProperties';
import { getConditionStatePropertyDefinition, getConditionStatePropertyTree } from './types/ConditionStateProperties';
import { DrawModule_t } from './types/DrawModule_t';
import { getDrawModulePropertyDefinition, getDrawModulePropertyTree } from './types/DrawModuleProperties';
import { ForceAddModule_t } from './types/ForceAddModule_t';
import { armorSetProperties, prerequisiteProperties, unitSpecificFXProperties, unitSpecificSoundsProperties, weaponSetProperties } from './types/ObjectSetProperties';


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
        if (!this.checkEnd(ctx)) {
            return
        }

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
        if (!this.checkEnd(ctx)) {
            return
        }

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
        if (!this.checkEnd(ctx)) {
            return
        }
		
		if (ctx.objectWeaponSetProperty()) {
			for (const property of ctx.objectWeaponSetProperty()) {
				const propertyName = property.ID()!.getText()

				if (!property.EQ()) {
					const severity = DiagnosticSeverity.Error
					const start = new Location(property.ID()!.symbol.line, property.ID()!.symbol.column)
					const msg = `Property must be assigned a value`
					this.addDiagnostic(severity, start, start, msg, "weapon_set")
					return
				}

				if (!weaponSetProperties[propertyName]) {
					const severity = DiagnosticSeverity.Error
					const start = new Location(property.ID()!.symbol.line, property.ID()!.symbol.column)
					const msg = `WeaponSet doesn't have property ${propertyName}`
					this.addDiagnostic(severity, start, start, msg, "weapon_set")
				}

				this.validateProperty(propertyName, property, weaponSetProperties[propertyName]!)
			}
		}

        this.visitChildren(ctx)
    }

    visitObjectArmorSet(ctx: ObjectArmorSetContext): void {
        if (!this.checkEnd(ctx)) {
            return
        }

		if (ctx.objectArmorSetProperty()) {
			for (const property of ctx.objectArmorSetProperty()) {
				const propertyName = property.ID()!.getText()

				if (!property.EQ()) {
					const severity = DiagnosticSeverity.Error
					const start = new Location(property.ID()!.symbol.line, property.ID()!.symbol.column)
					const msg = `Property must be assigned a value`
					this.addDiagnostic(severity, start, start, msg, "armor_set")
					return
				}

				if (!armorSetProperties[propertyName]) {
					const severity = DiagnosticSeverity.Error
					const start = new Location(property.ID()!.symbol.line, property.ID()!.symbol.column)
					const msg = `ArmorSet doesn't have property ${propertyName}`
					this.addDiagnostic(severity, start, start, msg, "armor_set")
				}

				this.validateProperty(propertyName, property, armorSetProperties[propertyName]!)
			}
		}

        this.visitChildren(ctx)
    }

    visitObjectPrerequisite(ctx: ObjectPrerequisiteContext): void {
        if (!this.checkEnd(ctx)) {
            return
        }

		if (ctx.objectPrerequisiteProperty()) {
			for (const property of ctx.objectPrerequisiteProperty()) {
				const propertyName = property.ID()!.getText()

				if (!property.EQ()) {
					const severity = DiagnosticSeverity.Error
					const start = new Location(property.ID()!.symbol.line, property.ID()!.symbol.column)
					const msg = `Property must be assigned a value`
					this.addDiagnostic(severity, start, start, msg, "prerequisite")
					return
				}

				if (!prerequisiteProperties[propertyName]) {
					const severity = DiagnosticSeverity.Error
					const start = new Location(property.ID()!.symbol.line, property.ID()!.symbol.column)
					const msg = `Prerequisite doesn't have property ${propertyName}`
					this.addDiagnostic(severity, start, start, msg, "prerequisite")
				}

				this.validateProperty(propertyName, property, prerequisiteProperties[propertyName]!)
			}
		}

        this.visitChildren(ctx)
    }

	visitObjectUnitSpecificSounds(ctx: ObjectUnitSpecificSoundsContext): void {
		if (!this.checkEnd(ctx)) {
			return
		}

		if (ctx.objectUnitSpecificSoundsProperty()) {
			for (const property of ctx.objectUnitSpecificSoundsProperty()) {
				const propertyName = property.ID()!.getText()

				if (!property.EQ()) {
					const severity = DiagnosticSeverity.Error
					const start = new Location(property.ID()!.symbol.line, property.ID()!.symbol.column)
					const msg = `Property must be assigned a value`
					this.addDiagnostic(severity, start, start, msg, "unit_specific_sounds")
				}

				if (!unitSpecificSoundsProperties[propertyName]) {
					const severity = DiagnosticSeverity.Error
					const start = new Location(property.ID()!.symbol.line, property.ID()!.symbol.column)
					const msg = `UnitSpecificSounds doesn't have property ${propertyName}`
					this.addDiagnostic(severity, start, start, msg, "unit_specific_sounds")
				}

				this.validateProperty(propertyName, property, unitSpecificSoundsProperties[propertyName]!)
			}
		}

		this.visitChildren(ctx)
	}

    visitObjectUnitSpecificFX(ctx: ObjectUnitSpecificFXContext): void {
		if (!this.checkEnd(ctx)) {
			return
		}

		if (ctx.objectUnitSpecificFXProperty()) {
			for (const property of ctx.objectUnitSpecificFXProperty()) {
				const propertyName = property.ID()!.getText()

				if (!property.EQ()) {
					const severity = DiagnosticSeverity.Error
					const start = new Location(property.ID()!.symbol.line, property.ID()!.symbol.column)
					const msg = `Property must be assigned a value`
					this.addDiagnostic(severity, start, start, msg, "unit_specific_fx")
				}

				if (!unitSpecificFXProperties[propertyName]) {
					const severity = DiagnosticSeverity.Error
					const start = new Location(property.ID()!.symbol.line, property.ID()!.symbol.column)
					const msg = `UnitSpecificFX doesn't have property ${propertyName}`
					this.addDiagnostic(severity, start, start, msg, "unit_specific_fx")
				}

				this.validateProperty(propertyName, property, unitSpecificFXProperties[propertyName]!)
			}
		}

		this.visitChildren(ctx)
	}

    visitDrawModule(ctx: DrawModuleContext): void {
        if (!this.checkEnd(ctx)) {
            return
        }

        const drawModule = ctx.drawModule_type()!.ID()!.getText() as DrawModule_t
        const tree = getDrawModulePropertyTree(drawModule)

		if (ctx.conditionState()) {
			for (const condition of ctx.conditionState()) {
				if (condition.defaultConditionStateBlock() && condition.defaultConditionStateBlock()!.getChild(0)) {
					if (!getDrawModulePropertyDefinition(drawModule, condition.defaultConditionStateBlock()!.getChild(0)!.getText())) {
						const severity = DiagnosticSeverity.Error
						const start = new Location(condition.defaultConditionStateBlock()!.start!.line, condition.defaultConditionStateBlock()!.start!.column)
						const msg = `DrawModule ${drawModule} doesn't have ConditionBlock`
						this.addDiagnostic(severity, start, start, msg, "draw_module")
					}
				} else if (condition.conditionStateBlock()) {
					if (!getDrawModulePropertyDefinition(drawModule, condition.conditionStateBlock()!.getChild(0)!.getText())) {
						const severity = DiagnosticSeverity.Error
						const start = new Location(condition.conditionStateBlock()!.start!.line, condition.conditionStateBlock()!.start!.column)
						const msg = `DrawModule ${drawModule} doesn't have ConditionBlock`
						this.addDiagnostic(severity, start, start, msg, "draw_module")
					}
				} else if (condition.transitionStateBlock()) {
					if (!getDrawModulePropertyDefinition(drawModule, condition.transitionStateBlock()!.getChild(0)!.getText())) {
						const severity = DiagnosticSeverity.Error
						const start = new Location(condition.transitionStateBlock()!.start!.line, condition.transitionStateBlock()!.start!.column)
						const msg = `DrawModule ${drawModule} doesn't have ConditionBlock`
						this.addDiagnostic(severity, start, start, msg, "draw_module")
					}
				}
			}
		}

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

	visitDefaultConditionStateBlock(ctx: DefaultConditionStateBlockContext): void {
		if (!this.checkEnd(ctx)) {
			return
		}

		this.visitChildren(ctx)
	}

	visitConditionStateBlock(ctx: ConditionStateBlockContext): void {
		if (!this.checkEnd(ctx)) {
			return
		}

		this.visitChildren(ctx)
	}

	visitTransitionStateBlock(ctx: TransitionStateBlockContext): void {
		if (!this.checkEnd(ctx)) {
			return
		}

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
            
            if (!getConditionStatePropertyTree().find(propertyName)) {
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
		if (!this.checkEnd(ctx)) {
			return
		}

		const bodyModule = ctx.bodyModule_type()!.ID()!.getText() as BodyModule_t
        const tree = getBodyModulePropertyTree(bodyModule)

        if (bodyModule && ctx.bodyModuleProperty()) {
            for (const property of ctx.bodyModuleProperty()) {
                if (property.ID()) {
                    const propertyName = property.ID()!.getText()
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

	// TODO: Implement check for valid behavior name
    visitBehaviorModule(ctx: BehaviorModuleContext): void {
		if (!this.checkEnd(ctx)) {
			return
		}

		const behaviorModule = ctx.behaviorModule_type()!.ID()!.getText() as BehaviorModule_t
        const tree = getBehaviorModulePropertyTree(behaviorModule)

		if (behaviorModule && ctx.behaviorModuleProperty()) {
			for (const property of ctx.behaviorModuleProperty()) {
				if (property.ID()) {
					const propertyName = property.ID()!.getText()
					if (!tree.find(propertyName)) {
						const severity = DiagnosticSeverity.Error
						const start = new Location(property.ID()!.symbol.line, property.ID()!.symbol.column)
						const msg = `BehaviorModule ${behaviorModule} doesn't have property ${propertyName}`
						this.addDiagnostic(severity, start, start, msg, "behavior_module")
						break;
					}

					this.validateProperty(propertyName, property, getBehaviorModulePropertyDefinition(behaviorModule, propertyName)!)
				}
			}
		}

        this.visitChildren(ctx)
    }

    visitClientModule(ctx: ClientModuleContext): void {
		if (!this.checkEnd(ctx)) {
			return
		}

		const clientModule = ctx.clientModule_type()!.ID()!.getText() as ClientModule_t
		const tree = getClientModulePropertyTree(clientModule)

		if (clientModule && ctx.clientModuleProperty()) {
			for (const property of ctx.clientModuleProperty()) {
				if (property.ID()) {
					const propertyName = property.ID()!.getText()
					if (!tree.find(propertyName)) {
						const severity = DiagnosticSeverity.Error
						const start = new Location(property.ID()!.symbol.line, property.ID()!.symbol.column)
						const msg = `ClientModule ${clientModule} doesn't have property ${propertyName}`
						this.addDiagnostic(severity, start, start, msg, "client_module")
						break;
					}

					this.validateProperty(propertyName, property, getClientModulePropertyDefinition(clientModule, propertyName)!)
				}
			}
		}

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
        }
    
        if (ctx.property_values()) {
            const propertyValues = ctx.property_values()

			// Check if property value is newline
			if (/\r?\n$/.test(propertyValues.getChild(0)!.getText()) || propertyValues.getChild(0)!.getText().toUpperCase() === '<MISSING ID>') {
				const severity = DiagnosticSeverity.Error
				const start = new Location(ctx.start!.line, ctx.start!.column)
				const msg = `Property ${propertyName} must be assigned a value`
				this.addDiagnostic(severity, start, start, msg, "newline")
			}

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

    private checkEnd(ctx: ParserRuleContext): boolean {
        if (ctx.children) {
            const lastChild = ctx.children[ctx.children.length - 1]
            if (lastChild.getText().toUpperCase() !== 'END') {
                const severity = DiagnosticSeverity.Error
                const start = new Location(ctx.start!.line, ctx.start!.column)
                const msg = `${ctx.getChild(0)!.getText()} must be closed with 'End'`
                this.addDiagnostic(severity, start, start, msg)
				return false
            }
        }
		return true
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