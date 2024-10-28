
import { Diagnostic, DiagnosticSeverity } from "vscode-languageserver";
import * as list from '../utils/lists'
import { Location } from "../utils/location";
import { MapIniVisitor } from "../utils/antlr4ng/MapIniVisitor";
import { AddModuleContext, AliasConditionContext, BehaviorModuleContext, BodyModule_typeContext, BodyModuleContext, ClassContext, ClientModuleContext, ConditionState_valuesContext, ConditionStateContext, DrawModule_typeContext, DrawModuleContext, EndContext, MapIniParser, MappedImageClassContext, ObjectClassContext, ObjectPropertyContext, ProgramContext } from "../utils/antlr4ng/MapIniParser";
import { AbstractParseTreeVisitor, ParserRuleContext } from "antlr4ng";
import { ErrorListener } from "../errorListener";
import { ClassVisitor } from './classVisitor';
import { Context } from './context';
import { getPropertyDefinition, isValidPropertyValue, objectPropertiesTree } from './properties';


export class DiagnosticVisitor extends AbstractParseTreeVisitor<void> implements MapIniVisitor<void> {
    protected defaultResult(): void {
    }

    diagnostics: Diagnostic[]
    precompileTransitionKeys: boolean
    context: Context = Context.PROGRAM

    constructor(diagnostics: Diagnostic[], precompileTransitionKeys: boolean) {
        super()
        this.diagnostics = diagnostics
        this.precompileTransitionKeys = precompileTransitionKeys
    }

    visitProgram(ctx: ProgramContext): void {
        // console.log(`Program: ${ctx.getText()}`)
        this.context = Context.PROGRAM
        this.visitChildren(ctx)
    }

    visitClass(ctx: ClassContext): void {
        this.context = Context.CLASS
        this.visitChildren(ctx)
    }

    // =====================================
    // ============== CLASSES ==============
    // =====================================


    // =====================================
    // ============== AI DATA ==============
    // =====================================

    // =====================================
    // ============ Audio Event ============
    // =====================================

    // visitAudioEventClass(ctx: AudioEventClassContext): void {
    //     console.log(`"${ctx.ID().getText()}",`)
    // }

    // visitDialogEventClass(ctx: DialogEventClassContext): void {
    //     console.log(`"${ctx.ID().getText()}",`)
    // }

    // // =====================================
    // // =========== COMMANDSET ==============
    // // =====================================
    // visitCommandSetClassProperty(ctx: CommandSetClassPropertyContext): void {

    //     if (ctx.INT()) {
    //         const num = Number(ctx.INT().getText())

    //         if (num <= 0 || num >= 19) {
    //             const symbol = ctx.INT().symbol
    //             const INT_text = ctx.INT().getText()

    //             const severity = DiagnosticSeverity.Error
    //             const start = new Location(symbol.line, symbol.column)
    //             const msg = `CommandButton index ${INT_text} is not allowed. Range is 1 - 18`
    //             this.addDiagnostic(severity, start, start, msg)
    //         }
    //     }

    //     if (ctx.commandbutton_value().ID()) {
    //         const symbol = ctx.commandbutton_value().ID()!.symbol
    //         const CB_text = ctx.commandbutton_value().ID()!.getText()

    //         if (!list.commandButtons.find(CB_text) && !list.customCommandButtons.find(CB_text)) {
    //             const severity = DiagnosticSeverity.Error
    //             const start = new Location(symbol.line, symbol.column)
    //             const msg = `CommandButton ${CB_text} is not defined`
    //             this.addDiagnostic(severity, start, start, msg)
    //         }
    //     }

    // }

    // =====================================
    // ========== COMMAND BUTTON ===========
    // =====================================


    // =====================================
    // ============= FX List ===============
    // =====================================


    // =====================================
    // =========== Locomotor ===============
    // =====================================

    // visitSurface_value(ctx: Surface_valueContext): void {
    //     if (ctx.ID()) {
    //         const symbol = ctx.ID()!.symbol
    //         const ID_text = ctx.ID()!.getText()

    //         if (!list.LocomotorSurface.includes(ID_text) && !list.LocomotorSurface.includes(ID_text)) {
    //             const severity = DiagnosticSeverity.Error
    //             const start = new Location(symbol.line, symbol.column)
    //             const msg = `CommandButton Option ${ID_text} is not defined`
    //             this.addDiagnostic(severity, start, start, msg)
    //         }
    //     }
    // }

    // visitZbehavior_value(ctx: Zbehavior_valueContext): void {
    //     if (ctx.ID()) {
    //         const symbol = ctx.ID()!.symbol
    //         const ID_text = ctx.ID()!.getText()

    //         if (!list.LocomotorZBehavior.includes(ID_text) && !list.LocomotorZBehavior.includes(ID_text)) {
    //             const severity = DiagnosticSeverity.Error
    //             const start = new Location(symbol.line, symbol.column)
    //             const msg = `CommandButton Option ${ID_text} is not defined`
    //             this.addDiagnostic(severity, start, start, msg)
    //         }
    //     }
    // }

    // visitAppereance_value(ctx: Appereance_valueContext): void {
    //     if (ctx.ID()) {
    //         const symbol = ctx.ID()!.symbol
    //         const ID_text = ctx.ID()!.getText()

    //         if (!list.LocomotorAppearence.includes(ID_text) && !list.LocomotorAppearence.includes(ID_text)) {
    //             const severity = DiagnosticSeverity.Error
    //             const start = new Location(symbol.line, symbol.column)
    //             const msg = `CommandButton Option ${ID_text} is not defined`
    //             this.addDiagnostic(severity, start, start, msg)
    //         }
    //     }
    // }

    // visitmovepriority_value(ctx: Movepriority_valueContext): void {
    //     if (ctx.ID()) {
    //         const symbol = ctx.ID()!.symbol
    //         const ID_text = ctx.ID()!.getText()

    //         if (!list.LocomotorMovePriority.includes(ID_text) && !list.LocomotorMovePriority.includes(ID_text)) {
    //             const severity = DiagnosticSeverity.Error
    //             const start = new Location(symbol.line, symbol.column)
    //             const msg = `CommandButton Option ${ID_text} is not defined`
    //             this.addDiagnostic(severity, start, start, msg)
    //         }
    //     }
    // }


    // =====================================
    // =========== OBJECT CLASS ============
    // =====================================

    visitObjectClass(ctx: ObjectClassContext): void {
        // list.customConditionStates.clear()
        this.context = Context.OBJECT_CLASS

        if (ctx.children && ctx.children.length > 0) {
            const lastChild = ctx.children[ctx.children.length - 1];
            if (!(lastChild instanceof EndContext)) {
                const severity = DiagnosticSeverity.Error;
                const start = new Location(ctx.start!.line, ctx.start!.column);
                const msg = "ObjectClass must be closed with 'End'";
                this.addDiagnostic(severity, start, start, msg);
            }
        }
        this.visitChildren(ctx)
    }

    visitObjectProperty(ctx: ObjectPropertyContext): void {
        console.log(`ObjectProperty: ${ctx.getText()}`)

        if (ctx.property().ID()) {
            const propertyName = ctx.property().ID()!.getText()

            if (!objectPropertiesTree.find(propertyName)) {
                const severity = DiagnosticSeverity.Error
                const start = new Location(ctx.property().ID()!.symbol.line, ctx.property().ID()!.symbol.column)
                const msg = `Object doesn't have property ${propertyName}`
                this.addDiagnostic(severity, start, start, msg)
                this.visitChildren(ctx)
                return
            }

            if (ctx.property().property_values()) {
                const propertyValues = ctx.property().property_values()
                for (const value of propertyValues.ID()) {
                    const valueText = value.getText()
                    if (!isValidPropertyValue(valueText, getPropertyDefinition(propertyName)!)) {
                        const severity = DiagnosticSeverity.Error
                        const start = new Location(value.symbol.line, value.symbol.column)
                        const msg = `Invalid value for property ${propertyName}. Expected type: ${getPropertyDefinition(propertyName)!.type}`
                        this.addDiagnostic(severity, start, start, msg)
                    }                    
                }
            }
        }

        this.visitChildren(ctx)
    }

    visitAddModule(ctx: AddModuleContext): void {
        this.context = Context.ADDMODULE

        if (ctx.children && ctx.children.length > 0) {
            const lastChild = ctx.children[ctx.children.length - 1];
            if (!(lastChild instanceof EndContext)) {
                const severity = DiagnosticSeverity.Error;
                const start = new Location(ctx.start!.line, ctx.start!.column);
                const msg = "AddModule must be closed with 'End'";
                this.addDiagnostic(severity, start, start, msg);
            }
        }

        this.visitChildren(ctx)
    }

    visitDrawModule(ctx: DrawModuleContext): void {
        this.context = Context.DRAW_MODULE

        if (ctx.children && ctx.children.length > 0) {
            const lastChild = ctx.children[ctx.children.length - 1];
            if (!(lastChild instanceof EndContext)) {
                const severity = DiagnosticSeverity.Error;
                const start = new Location(ctx.start!.line, ctx.start!.column);
                const msg = "DrawModule must be closed with 'End'";
                this.addDiagnostic(severity, start, start, msg);
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

    visitConditionState(ctx: ConditionStateContext): void {
        this.context = Context.CONDITION_STATE

        if (ctx.children && ctx.children.length > 0) {
            const lastChild = ctx.children[ctx.children.length - 1];
            if (!(lastChild instanceof EndContext)) {
                const severity = DiagnosticSeverity.Error;
                const start = new Location(ctx.start!.line, ctx.start!.column);
                const msg = "ConditionState must be closed with 'End'";
                this.addDiagnostic(severity, start, start, msg);
            }
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
    }

    visitAliasCondition(ctx: AliasConditionContext): void {
        this.context = Context.ALIAS_CONDITION_STATE
        this.visitChildren(ctx)
    }

    visitBodyModule(ctx: BodyModuleContext): void {
        this.context = Context.BODY_MODULE

        if (ctx.children && ctx.children.length > 0) {
            const lastChild = ctx.children[ctx.children.length - 1];
            if (!(lastChild instanceof EndContext)) {
                const severity = DiagnosticSeverity.Error;
                const start = new Location(ctx.start!.line, ctx.start!.column);
                const msg = "BodyModule must be closed with 'End'";
                this.addDiagnostic(severity, start, start, msg);
            }
        }

        this.visitChildren(ctx)
    }

    visitBehaviorModule(ctx: BehaviorModuleContext): void {
        this.context = Context.BEHAVIOR_MODULE

        if (ctx.children && ctx.children.length > 0) {
            const lastChild = ctx.children[ctx.children.length - 1];
            if (!(lastChild instanceof EndContext)) {
                const severity = DiagnosticSeverity.Error;
                const start = new Location(ctx.start!.line, ctx.start!.column);
                const msg = "BehaviorModule must be closed with 'End'";
                this.addDiagnostic(severity, start, start, msg);
            }
        }

        this.visitChildren(ctx)
    }

    visitClientModule(ctx: ClientModuleContext): void {
        this.context = Context.CLIENT_MODULE

        if (ctx.children && ctx.children.length > 0) {
            const lastChild = ctx.children[ctx.children.length - 1];
            if (!(lastChild instanceof EndContext)) {
                const severity = DiagnosticSeverity.Error;
                const start = new Location(ctx.start!.line, ctx.start!.column);
                const msg = "ClientModule must be closed with 'End'";
                this.addDiagnostic(severity, start, start, msg);
            }
        }

        this.visitChildren(ctx)
    }

    // visitObjectClass_properties(ctx: ObjectClass_propertiesContext): void {
    //     this.visitChildren(ctx)
    // }

    // visitObjectClass_sounds(ctx: ObjectClass_soundsContext): void {
    //     this.visitChildren(ctx)
    // }

    // visitObjectClass_sets(ctx: ObjectClass_setsContext): void {
    //     this.visitChildren(ctx)
    // }

    // visitObjectClass_drawModules(ctx: ObjectClass_drawModulesContext): void {
    //     list.customConditionStates.clear()


    //     if (this.precompileTransitionKeys) {
    //         for (const child of ctx.children || []) {
    //             if (child instanceof W3dModelDrawModuleContext ||
    //                 child instanceof W3dVehicleDrawModuleContext ||
    //                 child instanceof W3dOverlordTankDrawModuleContext
    //             ) {
    //                 this.collectTransitionKeys(child)
    //             }
    //         }
    //     }


    //     this.visitChildren(ctx)
    // }

    // private collectTransitionKeys(ctx: ParserRuleContext): void {
    //     for (const child of ctx.children || []) {
    //         if (child instanceof DrawModule_conditionBlockContext) {
    //             // Recursively check condition block for TransitionKey properties
    //             this.collectTransitionKeysFromBlock(child)
    //         } else if (child instanceof DrawModule_defaultconditionBlockContext) {
    //             // Check default condition block
    //             this.collectTransitionKeysFromBlock(child)
    //         }
    //         // Recursively check other children
    //         this.collectTransitionKeys(child as ParserRuleContext)
    //     }
    // }

    // private collectTransitionKeysFromBlock(ctx: ParserRuleContext): void {
    //     for (const child of ctx.children || []) {
    //         if (child instanceof DrawModule_conditionStatePropertiesContext) {
    //             const transitionKeyProp = child.drawModule_transitionKeyProperty?.()
    //             if (transitionKeyProp?.transitionKey_value()?.ID()) {
    //                 const ID_text = transitionKeyProp.transitionKey_value().ID()!.getText()
    //                 list.customConditionStates.remove(ID_text)
    //                 list.customConditionStates.insert(ID_text)
    //             }
    //         }
    //         // Recursively check other children
    //         this.collectTransitionKeysFromBlock(child as ParserRuleContext)
    //     }
    // }

    // // =====================================
    // // =========== CLASS VALUES ============
    // // =====================================

    // visitArmor_value(ctx: Armor_valueContext): void {
    //     if (ctx.ID()) {
    //         const symbol = ctx.ID()!.symbol
    //         const ID_text = ctx.ID()!.getText()

    //         if (!list.definedArmor.find(ID_text) && !list.customArmor.find(ID_text)) {
    //             const severity = DiagnosticSeverity.Error
    //             const start = new Location(symbol.line, symbol.column)
    //             const msg = `Armor ${ID_text} is not defined`
    //             this.addDiagnostic(severity, start, start, msg)
    //         }
    //     }
    // }

    // visitCommandbutton_value(ctx: Commandbutton_valueContext): void {
    //     if (ctx.ID()) {
    //         const symbol = ctx.ID()!.symbol
    //         const ID_text = ctx.ID()!.getText()

    //         if (!list.commandButtons.find(ID_text) && !list.customCommandButtons.find(ID_text)) {
    //             const severity = DiagnosticSeverity.Error
    //             const start = new Location(symbol.line, symbol.column)
    //             const msg = `CommandButton ${ID_text} is not defined`
    //             this.addDiagnostic(severity, start, start, msg)
    //         }
    //     }
    // }

    // visitCommandSet_value(ctx: CommandSet_valueContext): void {
    //     if (ctx.ID()) {
    //         const symbol = ctx.ID()!.symbol
    //         const ID_text = ctx.ID()!.getText()

    //         if (!list.commandSets.find(ID_text) && !list.customCommandSets.find(ID_text)) {
    //             const severity = DiagnosticSeverity.Error
    //             const start = new Location(symbol.line, symbol.column)
    //             const msg = `CommandSet ${ID_text} is not defined`
    //             this.addDiagnostic(severity, start, start, msg)
    //         }
    //     }
    // }

    // visitDamagefx_value(ctx: DamageFX_valueContext): void {
    //     if (ctx.ID()) {
    //         const symbol = ctx.ID()!.symbol
    //         const ID_text = ctx.ID()!.getText()

    //         if (!list.definedDamageFX.find(ID_text) && !list.customDamageFX.find(ID_text)) {
    //             const severity = DiagnosticSeverity.Error
    //             const start = new Location(symbol.line, symbol.column)
    //             const msg = `DamageFX ${ID_text} is not defined`
    //             this.addDiagnostic(severity, start, start, msg)
    //         }
    //     }
    // }

    // visitFxlist_value(ctx: Fxlist_valueContext): void {
    //     if (ctx.ID()) {
    //         const symbol = ctx.ID()!.symbol
    //         const ID_text = ctx.ID()!.getText()

    //         if (!list.fxLists.find(ID_text) && !list.customFXLists.find(ID_text)) {
    //             const severity = DiagnosticSeverity.Error
    //             const start = new Location(symbol.line, symbol.column)
    //             const msg = `FXList ${ID_text} is not defined`
    //             this.addDiagnostic(severity, start, start, msg)
    //         }
    //     }
    // }


    // visitMappedimage_value(ctx: Mappedimage_valueContext): void {
    //     if (ctx.ID()) {
    //         const symbol = ctx.ID()!.symbol
    //         const ID_text = ctx.ID()!.getText()

    //         if (!list.mappedImages.find(ID_text) && !list.customMappedImages.find(ID_text)) {
    //             const severity = DiagnosticSeverity.Error
    //             const start = new Location(symbol.line, symbol.column)
    //             const msg = `Image ${ID_text} is not defined`
    //             this.addDiagnostic(severity, start, start, msg)
    //         }
    //     }
    // }


    // visitObject_value(ctx: Object_valueContext): void {
    //     // console.log(`Object: ${ctx.ID()?.getText()}`)
    //     if (ctx.ID()) {
    //         const symbol = ctx.ID()!.symbol
    //         const ID_text = ctx.ID()!.getText()

    //         if (!list.objects.find(ID_text) && !list.customObjects.find(ID_text)) {
    //             const severity = DiagnosticSeverity.Error
    //             const start = new Location(symbol.line, symbol.column)
    //             const msg = `Object ${ID_text} is not defined`
    //             this.addDiagnostic(severity, start, start, msg)
    //         }
    //     }
    // }


    // visitLocomotor_value(ctx: Locomotor_valueContext): void {
    //     if (ctx.ID()) {
    //         const symbol = ctx.ID()!.symbol
    //         const ID_text = ctx.ID()!.getText()

    //         if (!list.definedLocomotors.find(ID_text) && !list.customLocomotor.find(ID_text)) {
    //             const severity = DiagnosticSeverity.Error
    //             const start = new Location(symbol.line, symbol.column)
    //             const msg = `Locomotor ${ID_text} is not defined`
    //             this.addDiagnostic(severity, start, start, msg)
    //         }
    //     }
    // }


    // // visitAudioevent_value(ctx: Audioevent_valueContext): void {
    // //     if (ctx.ID()) {
    // //         const symbol = ctx.ID()!.symbol
    // //         const ID_text = ctx.ID()!.getText()

    // //         if (!list.audioEvent.find(ID_text) && !list.customAudioEvent.find(ID_text)) {
    // //             const severity = DiagnosticSeverity.Error
    // //             const start = new Location(symbol.line, symbol.column)
    // //             const msg = `AudioEvent ${ID_text} is not defined`
    // //             this.addDiagnostic(severity, start, start, msg)
    // //         }
    // //     }
    // // }

    // visitParticlesystem_value(ctx: Particlesystem_valueContext): void {
    //     if (ctx.ID()) {
    //         const symbol = ctx.ID()!.symbol
    //         const ID_text = ctx.ID()!.getText()

    //         if (!list.particleSystem.find(ID_text) && !list.customParticleSystem.find(ID_text)) {
    //             const severity = DiagnosticSeverity.Error
    //             const start = new Location(symbol.line, symbol.column)
    //             const msg = `ParticleSystem ${ID_text} is not defined`
    //             this.addDiagnostic(severity, start, start, msg)
    //         }
    //     }
    // }


    // visitScience_value(ctx: Science_valueContext): void {
    //     if (ctx.ID()) {
    //         const symbol = ctx.ID()!.symbol
    //         const ID_text = ctx.ID()!.getText()

    //         if (!list.science.find(ID_text) && !list.customScience.find(ID_text)) {
    //             const severity = DiagnosticSeverity.Error
    //             const start = new Location(symbol.line, symbol.column)
    //             const msg = `Science ${ID_text} is not defined`
    //             this.addDiagnostic(severity, start, start, msg)
    //         }
    //     }
    // }


    // visitSpecialpower_value(ctx: Specialpower_valueContext): void {
    //     if (ctx.ID()) {
    //         const symbol = ctx.ID()!.symbol
    //         const ID_text = ctx.ID()!.getText()

    //         if (!list.specialPower.find(ID_text) && !list.customSpecialPower.find(ID_text)) {
    //             const severity = DiagnosticSeverity.Error
    //             const start = new Location(symbol.line, symbol.column)
    //             const msg = `SpecialPower ${ID_text} is not defined`
    //             this.addDiagnostic(severity, start, start, msg)
    //         }

    //     }
    // }

    // visitUpgrade_value(ctx: Upgrade_valueContext): void {
    //     // console.log(`Upgrade ${ctx.getText()}`)
    //     if (ctx.ID()) {
    //         const symbol = ctx.ID()!.symbol
    //         const ID_text = ctx.ID()!.getText()

    //         if (!list.upgrades.find(ID_text) && !list.customUpgrades.find(ID_text)) {
    //             const severity = DiagnosticSeverity.Error
    //             const start = new Location(symbol.line, symbol.column)
    //             const msg = `Upgrade ${ID_text} is not defined`
    //             this.addDiagnostic(severity, start, start, msg)
    //         }
    //     }
    // }

    // visitCursorname_value(ctx: Cursorname_valueContext): void {
    //     if (ctx.ID()) {
    //         const symbol = ctx.ID()!.symbol
    //         const ID_text = ctx.ID()!.getText()

    //         if (!list.CursorNames.includes(ID_text)) {
    //             const severity = DiagnosticSeverity.Error
    //             const start = new Location(symbol.line, symbol.column)
    //             const msg = `Cursor ${ID_text} does not exist`
    //             this.addDiagnostic(severity, start, start, msg)
    //         }
    //     }
    // }

    // visitDrawModule_conditionBlock(ctx: DrawModule_conditionBlockContext): void {
    //     for (const state of ctx.drawModule_conditionStateValue()) {
    //         if (state.ID()) {
    //             if (!list.customConditionStates.find(state.ID()!.getText())) {
    //                 const severity = DiagnosticSeverity.Error
    //                 const start = new Location(state.ID()!.symbol.line, state.ID()!.symbol.column)
    //                 const msg = `Custom condition state ${state.ID()!.getText()} is not defined`
    //                 this.addDiagnostic(severity, start, start, msg)
    //             }
    //         }
    //     }

    //     this.visitChildren(ctx)
    // }

    // visitDrawModule_transitionStateBlock(ctx: DrawModule_transitionStateBlockContext): void {
    //     for (const state of ctx.drawModule_conditionStateValue()) {
    //         if (state.ID()) {
    //             if (!list.customConditionStates.find(state.ID()!.getText())) {
    //                 const severity = DiagnosticSeverity.Error
    //                 const start = new Location(state.ID()!.symbol.line, state.ID()!.symbol.column)
    //                 const msg = `Custom condition state ${state.ID()!.getText()} is not defined. If this is a TransitionKey, please define it above this`
    //                 this.addDiagnostic(severity, start, start, msg)
    //             }
    //         }
    //     }
    //     this.visitChildren(ctx)
    // }

    // visitDrawModule_transitionKeyProperty(ctx: DrawModule_transitionKeyPropertyContext): void {

    //     if (ctx.transitionKey_value().ID()) {
    //         const ID_text = ctx.transitionKey_value().ID()!.getText()

    //         console.log(`Adding ${ID_text} to customConditionStates in context ${ctx.getText()}`)
    
    //         list.customConditionStates.remove(ID_text)
    //         list.customConditionStates.insert(ID_text)
    //     }
    // }

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

export function computeDiagnostics(parser: MapIniParser, precompileTransitionKeys: boolean): Diagnostic[] {

    let diagnostics: Diagnostic[] = []

    parser.removeErrorListeners()
    // parser.addErrorListener(new ErrorListener(diagnostics))

    const tree = parser.program()
    // console.log(`Tree: ${tree.getText()}`)

    const vistor = new DiagnosticVisitor(diagnostics, precompileTransitionKeys)
    const classVisitor = new ClassVisitor()

    classVisitor.visitProgram(tree)
    vistor.visitProgram(tree)

    return diagnostics
}