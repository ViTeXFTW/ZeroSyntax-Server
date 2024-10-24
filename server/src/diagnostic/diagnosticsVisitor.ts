
import { Diagnostic, DiagnosticSeverity } from "vscode-languageserver";
import * as list from '../utils/lists'
import { Location } from "../utils/location";
import { MapIniVisitor } from "../utils/antlr4ng/MapIniVisitor";
import { Armor_valueContext, Commandbutton_valueContext, CommandSet_valueContext, CommandSetClassPropertyContext, Cursorname_valueContext, DamageFX_valueContext, DrawModule_conditionBlockContext, DrawModule_conditionStateValueContext, DrawModule_transitionKeyPropertyContext, DrawModule_transitionStateBlockContext, EndContext, Fxlist_valueContext, Locomotor_valueContext, MapIniParser, Mappedimage_valueContext, Object_valueContext, ObjectClass_drawModulesContext, ObjectClass_propertiesContext, ObjectClass_setsContext, ObjectClass_soundsContext, ObjectClassContext, Particlesystem_valueContext, ParticleSystemClassContext, ProgramContext, Science_valueContext, Specialpower_valueContext, TransitionKey_valueContext, Upgrade_valueContext } from "../utils/antlr4ng/MapIniParser";
import { AbstractParseTreeVisitor } from "antlr4ng";
import { ErrorListener } from "../errorListener";
import { ClassVisitor } from './classVisitor';


export class DiagnosticVisitor extends AbstractParseTreeVisitor<void> implements MapIniVisitor<void> {
    protected defaultResult(): void {
    }

    diagnostics: Diagnostic[]

    constructor(diagnostics: Diagnostic[]) {
        super()
        this.diagnostics = diagnostics
    }

    visitProgram(ctx: ProgramContext): void {
        // console.log(`Program: ${ctx.getText()}`)
        this.visitChildren(ctx)
    }

    visitEnd(ctx: EndContext): void {
        this.visitChildren(ctx)
        // Do nothing
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

    // =====================================
    // =========== COMMANDSET ==============
    // =====================================
    visitCommandSetClassProperty(ctx: CommandSetClassPropertyContext): void {

        if (ctx.INT()) {
            const num = Number(ctx.INT().getText())

            if (num <= 0 || num >= 19) {
                const symbol = ctx.INT().symbol
                const INT_text = ctx.INT().getText()

                const severity = DiagnosticSeverity.Error
                const start = new Location(symbol.line, symbol.column)
                const msg = `CommandButton index ${INT_text} is not allowed. Range is 1 - 18`
                this.addDiagnostic(severity, start, start, msg)
            }
        }

        if (ctx.commandbutton_value().ID()) {
            const symbol = ctx.commandbutton_value().ID()!.symbol
            const CB_text = ctx.commandbutton_value().ID()!.getText()

            if (!list.commandButtons.find(CB_text) && !list.customCommandButtons.find(CB_text)) {
                const severity = DiagnosticSeverity.Error
                const start = new Location(symbol.line, symbol.column)
                const msg = `CommandButton ${CB_text} is not defined`
                this.addDiagnostic(severity, start, start, msg)
            }
        }

    }

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

    visitObjectClass_drawModules(ctx: ObjectClass_drawModulesContext): void {
        console.log(list.customConditionStates)
        list.customConditionStates.clear()
        this.visitChildren(ctx)
    }


    // =====================================
    // =========== CLASS VALUES ============
    // =====================================

    visitArmor_value(ctx: Armor_valueContext): void {
        if (ctx.ID()) {
            const symbol = ctx.ID()!.symbol
            const ID_text = ctx.ID()!.getText()

            if (!list.definedArmor.find(ID_text) && !list.customArmor.find(ID_text)) {
                const severity = DiagnosticSeverity.Error
                const start = new Location(symbol.line, symbol.column)
                const msg = `Armor ${ID_text} is not defined`
                this.addDiagnostic(severity, start, start, msg)
            }
        }
    }

    visitCommandbutton_value(ctx: Commandbutton_valueContext): void {
        if (ctx.ID()) {
            const symbol = ctx.ID()!.symbol
            const ID_text = ctx.ID()!.getText()

            if (!list.commandButtons.find(ID_text) && !list.customCommandButtons.find(ID_text)) {
                const severity = DiagnosticSeverity.Error
                const start = new Location(symbol.line, symbol.column)
                const msg = `CommandButton ${ID_text} is not defined`
                this.addDiagnostic(severity, start, start, msg)
            }
        }
    }

    visitCommandSet_value(ctx: CommandSet_valueContext): void {
        if (ctx.ID()) {
            const symbol = ctx.ID()!.symbol
            const ID_text = ctx.ID()!.getText()

            if (!list.commandSets.find(ID_text) && !list.customCommandSets.find(ID_text)) {
                const severity = DiagnosticSeverity.Error
                const start = new Location(symbol.line, symbol.column)
                const msg = `CommandSet ${ID_text} is not defined`
                this.addDiagnostic(severity, start, start, msg)
            }
        }
    }

    visitDamagefx_value(ctx: DamageFX_valueContext): void {
        if (ctx.ID()) {
            const symbol = ctx.ID()!.symbol
            const ID_text = ctx.ID()!.getText()

            if (!list.definedDamageFX.find(ID_text) && !list.customDamageFX.find(ID_text)) {
                const severity = DiagnosticSeverity.Error
                const start = new Location(symbol.line, symbol.column)
                const msg = `DamageFX ${ID_text} is not defined`
                this.addDiagnostic(severity, start, start, msg)
            }
        }
    }

    visitFxlist_value(ctx: Fxlist_valueContext): void {
        if (ctx.ID()) {
            const symbol = ctx.ID()!.symbol
            const ID_text = ctx.ID()!.getText()

            if (!list.fxLists.find(ID_text) && !list.customFXLists.find(ID_text)) {
                const severity = DiagnosticSeverity.Error
                const start = new Location(symbol.line, symbol.column)
                const msg = `FXList ${ID_text} is not defined`
                this.addDiagnostic(severity, start, start, msg)
            }
        }
    }


    visitMappedimage_value(ctx: Mappedimage_valueContext): void {
        if (ctx.ID()) {
            const symbol = ctx.ID()!.symbol
            const ID_text = ctx.ID()!.getText()

            if (!list.mappedImages.find(ID_text) && !list.customMappedImages.find(ID_text)) {
                const severity = DiagnosticSeverity.Error
                const start = new Location(symbol.line, symbol.column)
                const msg = `Image ${ID_text} is not defined`
                this.addDiagnostic(severity, start, start, msg)
            }
        }
    }


    visitObject_value(ctx: Object_valueContext): void {
        // console.log(`Object: ${ctx.ID()?.getText()}`)
        if (ctx.ID()) {
            const symbol = ctx.ID()!.symbol
            const ID_text = ctx.ID()!.getText()

            if (!list.objects.find(ID_text) && !list.customObjects.find(ID_text)) {
                const severity = DiagnosticSeverity.Error
                const start = new Location(symbol.line, symbol.column)
                const msg = `Object ${ID_text} is not defined`
                this.addDiagnostic(severity, start, start, msg)
            }
        }
    }


    visitLocomotor_value(ctx: Locomotor_valueContext): void {
        if (ctx.ID()) {
            const symbol = ctx.ID()!.symbol
            const ID_text = ctx.ID()!.getText()

            if (!list.definedLocomotors.find(ID_text) && !list.customLocomotor.find(ID_text)) {
                const severity = DiagnosticSeverity.Error
                const start = new Location(symbol.line, symbol.column)
                const msg = `Locomotor ${ID_text} is not defined`
                this.addDiagnostic(severity, start, start, msg)
            }
        }
    }


    // visitAudioevent_value(ctx: Audioevent_valueContext): void {
    //     if (ctx.ID()) {
    //         const symbol = ctx.ID()!.symbol
    //         const ID_text = ctx.ID()!.getText()

    //         if (!list.audioEvent.find(ID_text) && !list.customAudioEvent.find(ID_text)) {
    //             const severity = DiagnosticSeverity.Error
    //             const start = new Location(symbol.line, symbol.column)
    //             const msg = `AudioEvent ${ID_text} is not defined`
    //             this.addDiagnostic(severity, start, start, msg)
    //         }
    //     }
    // }

    visitParticlesystem_value(ctx: Particlesystem_valueContext): void {
        if (ctx.ID()) {
            const symbol = ctx.ID()!.symbol
            const ID_text = ctx.ID()!.getText()

            if (!list.particleSystem.find(ID_text) && !list.customParticleSystem.find(ID_text)) {
                const severity = DiagnosticSeverity.Error
                const start = new Location(symbol.line, symbol.column)
                const msg = `ParticleSystem ${ID_text} is not defined`
                this.addDiagnostic(severity, start, start, msg)
            }
        }
    }


    visitScience_value(ctx: Science_valueContext): void {
        if (ctx.ID()) {
            const symbol = ctx.ID()!.symbol
            const ID_text = ctx.ID()!.getText()

            if (!list.science.find(ID_text) && !list.customScience.find(ID_text)) {
                const severity = DiagnosticSeverity.Error
                const start = new Location(symbol.line, symbol.column)
                const msg = `Science ${ID_text} is not defined`
                this.addDiagnostic(severity, start, start, msg)
            }
        }
    }


    visitSpecialpower_value(ctx: Specialpower_valueContext): void {
        if (ctx.ID()) {
            const symbol = ctx.ID()!.symbol
            const ID_text = ctx.ID()!.getText()

            if (!list.specialPower.find(ID_text) && !list.customSpecialPower.find(ID_text)) {
                const severity = DiagnosticSeverity.Error
                const start = new Location(symbol.line, symbol.column)
                const msg = `SpecialPower ${ID_text} is not defined`
                this.addDiagnostic(severity, start, start, msg)
            }

        }
    }

    visitUpgrade_value(ctx: Upgrade_valueContext): void {
        // console.log(`Upgrade ${ctx.getText()}`)
        if (ctx.ID()) {
            const symbol = ctx.ID()!.symbol
            const ID_text = ctx.ID()!.getText()

            if (!list.upgrades.find(ID_text) && !list.customUpgrades.find(ID_text)) {
                const severity = DiagnosticSeverity.Error
                const start = new Location(symbol.line, symbol.column)
                const msg = `Upgrade ${ID_text} is not defined`
                this.addDiagnostic(severity, start, start, msg)
            }
        }
    }

    visitCursorname_value(ctx: Cursorname_valueContext): void {
        if (ctx.ID()) {
            const symbol = ctx.ID()!.symbol
            const ID_text = ctx.ID()!.getText()

            if (!list.CursorNames.includes(ID_text)) {
                const severity = DiagnosticSeverity.Error
                const start = new Location(symbol.line, symbol.column)
                const msg = `Cursor ${ID_text} does not exist`
                this.addDiagnostic(severity, start, start, msg)
            }
        }
    }

    visitDrawModule_conditionBlock(ctx: DrawModule_conditionBlockContext): void {
        for (const state of ctx.drawModule_conditionStateValue()) {
            if (state.ID()) {
                if (!list.customConditionStates.find(state.ID()!.getText())) {
                    const severity = DiagnosticSeverity.Error
                    const start = new Location(state.ID()!.symbol.line, state.ID()!.symbol.column)
                    const msg = `Custom condition state ${state.ID()!.getText()} is not defined`
                    this.addDiagnostic(severity, start, start, msg)
                }
            }
        }
        this.visitChildren(ctx)
    }

    visitDrawModule_transitionStateBlock(ctx: DrawModule_transitionStateBlockContext): void {
        for (const state of ctx.drawModule_conditionStateValue()) {
            if (state.ID()) {
                if (!list.customConditionStates.find(state.ID()!.getText())) {
                    const severity = DiagnosticSeverity.Error
                    const start = new Location(state.ID()!.symbol.line, state.ID()!.symbol.column)
                    const msg = `Custom condition state ${state.ID()!.getText()} is not defined. If this is a TransitionKey, please define it above this`
                    this.addDiagnostic(severity, start, start, msg)
                }
            }
        }
        this.visitChildren(ctx)
    }

    visitDrawModule_transitionKeyProperty(ctx: DrawModule_transitionKeyPropertyContext): void {

        if (ctx.transitionKey_value().ID()) {
            const ID_text = ctx.transitionKey_value().ID()!.getText()

            console.log(`Adding ${ID_text} to customConditionStates in context ${ctx.getText()}`)
    
            list.customConditionStates.remove(ID_text)
            list.customConditionStates.insert(ID_text)
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

export function computeDiagnostics(parser: MapIniParser): Diagnostic[] {

    let diagnostics: Diagnostic[] = []

    parser.removeErrorListeners()
    parser.addErrorListener(new ErrorListener(diagnostics))

    const tree = parser.program()
    // console.log(`Tree: ${tree.getText()}`)

    const vistor = new DiagnosticVisitor(diagnostics)
    const classVisitor = new ClassVisitor()

    classVisitor.visitProgram(tree)
    vistor.visitProgram(tree)

    return diagnostics
}