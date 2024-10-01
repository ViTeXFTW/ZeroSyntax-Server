
import { Diagnostic, DiagnosticSeverity } from "vscode-languageserver";
import * as list from '../utils/lists'
import { Location } from "../utils/location";
import { MapIniVisitor } from "../utils/antlr4ng/MapIniVisitor";
import { Appereance_valueContext, Audioevent_valueContext, Cb_buttonbordertype_valueContext, Cb_command_valueContext, Cb_options_valueContext, Commandbutton_valueContext, CommandSetClassPropertyContext, Cursorname_valueContext, EndContext, Faction_valueContext, Fxlist_valueContext, MapIniParser, Mappedimage_valueContext, Movepriority_valueContext, Object_valueContext, ProgramContext, Science_valueContext, Specialpower_valueContext, Surface_valueContext, Upgrade_valueContext, Zbehavior_valueContext } from "../utils/antlr4ng/MapIniParser";
import { AbstractParseTreeVisitor } from "antlr4ng";
import { ErrorListener } from "../errorListener";


export class DiagnosticVisitor extends AbstractParseTreeVisitor<void> implements MapIniVisitor<void> {
    protected defaultResult(): void {
    }

    diagnostics: Diagnostic[]

    constructor(diagnostics: Diagnostic[]) {
        super()
        this.diagnostics = diagnostics
    }

    visitProgram(ctx: ProgramContext): void {
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
            const symbol = ctx.commandbutton_value().ID().symbol
            const CB_text = ctx.commandbutton_value().ID().getText()
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
    visitCb_command_value(ctx: Cb_command_valueContext): void {
        if (ctx.ID()) {
            const symbol = ctx.ID()!.symbol
            const ID_text = ctx.ID()!.getText()
            if (!list.CommandButtonCommandValues.includes(ID_text) && !list.CommandButtonCommandValues.includes(ID_text)) {
                const severity = DiagnosticSeverity.Error
                const start = new Location(symbol.line, symbol.column)
                const msg = `CommandButton Command ${ID_text} is not defined`
                this.addDiagnostic(severity, start, start, msg)
            }
        }
    }

    visitCb_options_value(ctx: Cb_options_valueContext): void {
        if (ctx.ID()) {
            const symbol = ctx.ID()!.symbol
            const ID_text = ctx.ID()!.getText()

            if (!list.CommandButtonOptionValues.includes(ID_text) && !list.CommandButtonOptionValues.includes(ID_text)) {
                const severity = DiagnosticSeverity.Error
                const start = new Location(symbol.line, symbol.column)
                const msg = `CommandButton Option ${ID_text} is not defined`
                this.addDiagnostic(severity, start, start, msg)
            }
        }
    }

    visitCb_buttonbordertype_value(ctx: Cb_buttonbordertype_valueContext): void {
        if (ctx.ID()) {
            const symbol = ctx.ID()!.symbol
            const ID_text = ctx.ID()!.getText()

            if (!list.CommandButtonBorderTypeValues.includes(ID_text)) {
                const severity = DiagnosticSeverity.Error
                const start = new Location(symbol.line, symbol.column)
                const msg = `Border type ${ID_text} does not exist`
                this.addDiagnostic(severity, start, start, msg)
            }
        }
    }


    // =====================================
    // ============= FX List ===============
    // =====================================


    // =====================================
    // =========== Locomotor ===============
    // =====================================
    visitSurface_value(ctx: Surface_valueContext): void {
        if (ctx.ID()) {
            const symbol = ctx.ID()!.symbol
            const ID_text = ctx.ID()!.getText()

            if (!list.LocomotorSurface.includes(ID_text) && !list.LocomotorSurface.includes(ID_text)) {
                const severity = DiagnosticSeverity.Error
                const start = new Location(symbol.line, symbol.column)
                const msg = `CommandButton Option ${ID_text} is not defined`
                this.addDiagnostic(severity, start, start, msg)
            }
        }
    }

    visitZbehavior_value(ctx: Zbehavior_valueContext): void {
        if (ctx.ID()) {
            const symbol = ctx.ID()!.symbol
            const ID_text = ctx.ID()!.getText()

            if (!list.LocomotorZBehavior.includes(ID_text) && !list.LocomotorZBehavior.includes(ID_text)) {
                const severity = DiagnosticSeverity.Error
                const start = new Location(symbol.line, symbol.column)
                const msg = `CommandButton Option ${ID_text} is not defined`
                this.addDiagnostic(severity, start, start, msg)
            }
        }
    }

    visitAppereance_value(ctx: Appereance_valueContext): void {
        if (ctx.ID()) {
            const symbol = ctx.ID()!.symbol
            const ID_text = ctx.ID()!.getText()

            if (!list.LocomotorAppearence.includes(ID_text) && !list.LocomotorAppearence.includes(ID_text)) {
                const severity = DiagnosticSeverity.Error
                const start = new Location(symbol.line, symbol.column)
                const msg = `CommandButton Option ${ID_text} is not defined`
                this.addDiagnostic(severity, start, start, msg)
            }
        }
    }

    visitmovepriority_value(ctx: Movepriority_valueContext): void {
        if (ctx.ID()) {
            const symbol = ctx.ID()!.symbol
            const ID_text = ctx.ID()!.getText()

            if (!list.LocomotorMovePriority.includes(ID_text) && !list.LocomotorMovePriority.includes(ID_text)) {
                const severity = DiagnosticSeverity.Error
                const start = new Location(symbol.line, symbol.column)
                const msg = `CommandButton Option ${ID_text} is not defined`
                this.addDiagnostic(severity, start, start, msg)
            }
        }
    }


    // =====================================
    // =========== CLASS VALUES ============
    // =====================================
    visitFaction_value(ctx: Faction_valueContext): void {
        if (ctx.ID()) {
            const symbol = ctx.ID()!.symbol
            const ID_text = ctx.ID()!.getText()

            if (!list.Faction.includes(ID_text) && !list.Faction.includes(ID_text)) {
                const severity = DiagnosticSeverity.Error
                const start = new Location(symbol.line, symbol.column)
                const msg = `Faction ${ID_text} does not exist`
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

    visitAudioevent_value(ctx: Audioevent_valueContext): void {
        if (ctx.ID()) {
            const symbol = ctx.ID()!.symbol
            const ID_text = ctx.ID()!.getText()

            if (!list.audioEvent.find(ID_text) && !list.customAudioEvent.find(ID_text)) {
                const severity = DiagnosticSeverity.Error
                const start = new Location(symbol.line, symbol.column)
                const msg = `AudioEvent ${ID_text} is not defined`
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

export async function computeDiagnostics(parser: MapIniParser): Promise<Diagnostic[]> {

    let diagnostics: Diagnostic[] = []

    parser.removeErrorListeners()
    parser.addErrorListener(new ErrorListener(diagnostics))

    const tree = parser.program()
    const vistor = new DiagnosticVisitor(diagnostics)

    vistor.visitProgram(tree)

    return diagnostics
}