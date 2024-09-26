
import { Diagnostic, DiagnosticSeverity } from "vscode-languageserver";
import * as list from '../utils/lists'
import { Location } from "../utils/location";
import { TextDocument } from "vscode-languageserver-textdocument";
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
        const num = Number(ctx.INT().getText())

        if(num <= 0 || num >= 19) {
            const symbol = ctx.INT().symbol
            const INT_text = ctx.INT().getText()

            const severity = DiagnosticSeverity.Error
            const start = new Location(symbol.line, symbol.column)
            const msg = `CommandButton index ${INT_text} is not allowed. Range is 1 - 18`
            this.addDiagnostic(severity, start, start, msg)
        }

        const symbol = ctx.commandbutton_value().ID().symbol
        const CB_text = ctx.commandbutton_value().ID().getText()
        const CB_TEXT = ctx.commandbutton_value().ID().getText().toUpperCase()
        if(!list.commandButtons.find(CB_TEXT) && !list.customCommandButtons.find(CB_TEXT)) {
            const severity = DiagnosticSeverity.Error
            const start = new Location(symbol.line, symbol.column)
            const msg = `CommandButton ${CB_text} is not defined`
            this.addDiagnostic(severity, start, start, msg)
        }

    }

    // =====================================
    // ========== COMMAND BUTTON ===========
    // =====================================
    visitCb_command_value(ctx: Cb_command_valueContext): void {
        const symbol = ctx.ID()!.symbol
        const ID_text = ctx.ID()!.getText()
        const ID_TEXT = ID_text.toUpperCase()
        if (!list.CommandButtonCommandValues.includes(ID_TEXT) && !list.CommandButtonCommandValues.includes(ID_TEXT)) {
            const severity = DiagnosticSeverity.Error
            const start = new Location(symbol.line, symbol.column)
            const msg = `CommandButton Command ${ID_text} is not defined`
            this.addDiagnostic(severity, start, start, msg)
        }
    }

    visitCb_options_value(ctx: Cb_options_valueContext): void {
        const symbol = ctx.ID()!.symbol
        const ID_text = ctx.ID()!.getText()
        const ID_TEXT = ID_text.toUpperCase()
        if (!list.CommandButtonOptionValues.includes(ID_TEXT) && !list.CommandButtonOptionValues.includes(ID_TEXT)) {
            const severity = DiagnosticSeverity.Error
            const start = new Location(symbol.line, symbol.column)
            const msg = `CommandButton Option ${ID_text} is not defined`
            this.addDiagnostic(severity, start, start, msg)
        }
    }

    visitCb_buttonbordertype_value(ctx: Cb_buttonbordertype_valueContext): void {
        const symbol = ctx.ID()!.symbol
        const ID_text = ctx.ID()!.getText()
        const ID_TEXT = ID_text.toUpperCase()
        if (!list.CommandButtonBorderTypeValues.includes(ID_TEXT)) {
            const severity = DiagnosticSeverity.Error
            const start = new Location(symbol.line, symbol.column)
            const msg = `Border type ${ID_text} does not exist`
            this.addDiagnostic(severity, start, start, msg)
        }
    }


    // =====================================
    // ============= FX List ===============
    // =====================================


    // =====================================
    // =========== Locomotor ===============
    // =====================================
    visitSurface_value(ctx: Surface_valueContext): void {
        const symbol = ctx.ID()!.symbol
        const ID_text = ctx.ID()!.getText()
        const ID_TEXT = ID_text.toUpperCase()
        if (!list.LocomotorSurface.includes(ID_TEXT) && !list.LocomotorSurface.includes(ID_TEXT)) {
            const severity = DiagnosticSeverity.Error
            const start = new Location(symbol.line, symbol.column)
            const msg = `CommandButton Option ${ID_text} is not defined`
            this.addDiagnostic(severity, start, start, msg)
        }
    }

    visitZbehavior_value(ctx: Zbehavior_valueContext): void {
        const symbol = ctx.ID()!.symbol
        const ID_text = ctx.ID()!.getText()
        const ID_TEXT = ID_text.toUpperCase()
        if (!list.LocomotorZBehavior.includes(ID_TEXT) && !list.LocomotorZBehavior.includes(ID_TEXT)) {
            const severity = DiagnosticSeverity.Error
            const start = new Location(symbol.line, symbol.column)
            const msg = `CommandButton Option ${ID_text} is not defined`
            this.addDiagnostic(severity, start, start, msg)
        }
    }
    
    visitAppereance_value(ctx: Appereance_valueContext): void {
        const symbol = ctx.ID()!.symbol
        const ID_text = ctx.ID()!.getText()
        const ID_TEXT = ID_text.toUpperCase()
        if (!list.LocomotorAppearence.includes(ID_TEXT) && !list.LocomotorAppearence.includes(ID_TEXT)) {
            const severity = DiagnosticSeverity.Error
            const start = new Location(symbol.line, symbol.column)
            const msg = `CommandButton Option ${ID_text} is not defined`
            this.addDiagnostic(severity, start, start, msg)
        }
    }

    visitmovepriority_value(ctx: Movepriority_valueContext): void {
        const symbol = ctx.ID()!.symbol
        const ID_text = ctx.ID()!.getText()
        const ID_TEXT = ID_text.toUpperCase()
        if (!list.LocomotorMovePriority.includes(ID_TEXT) && !list.LocomotorMovePriority.includes(ID_TEXT)) {
            const severity = DiagnosticSeverity.Error
            const start = new Location(symbol.line, symbol.column)
            const msg = `CommandButton Option ${ID_text} is not defined`
            this.addDiagnostic(severity, start, start, msg)
        }
    }


    // =====================================
    // =========== CLASS VALUES ============
    // =====================================
    visitFaction_value(ctx: Faction_valueContext): void {
        const symbol = ctx.ID()!.symbol
        const ID_text = ctx.ID()!.getText()
        const ID_TEXT = ID_text.toUpperCase()
        if (!list.Faction.includes(ID_TEXT) && !list.Faction.includes(ID_TEXT)) {
            const severity = DiagnosticSeverity.Error
            const start = new Location(symbol.line, symbol.column)
            const msg = `Faction ${ID_text} does not exist`
            this.addDiagnostic(severity, start, start, msg)
        }
    }


    //TODO: Doesn't work, never gets called????
    //! Handled in visitCommandSetClassProperty()
    visitCommandbutton_value(ctx: Commandbutton_valueContext): void {
        const symbol = ctx.ID()!.symbol
        const ID_text = ctx.ID()!.getText()
        const ID_TEXT = ID_text.toUpperCase()
        if (!list.commandButtons.find(ID_TEXT) && !list.customCommandButtons.find(ID_TEXT)) {
            const severity = DiagnosticSeverity.Error
            const start = new Location(symbol.line, symbol.column)
            const msg = `Upgrade ${ID_text} is not defined`
            this.addDiagnostic(severity, start, start, msg)
        }
    }


    visitFxlist_value(ctx: Fxlist_valueContext): void {
        const symbol = ctx.ID()!.symbol
        const ID_text = ctx.ID()!.getText()
        const ID_TEXT = ID_text.toUpperCase()
        if (!list.fxLists.find(ID_TEXT) && !list.customFXLists.find(ID_TEXT)) {
            const severity = DiagnosticSeverity.Error
            const start = new Location(symbol.line, symbol.column)
            const msg = `FXList ${ID_text} is not defined`
            this.addDiagnostic(severity, start, start, msg)
        }
    }


    visitMappedimage_value(ctx: Mappedimage_valueContext): void {
        const symbol = ctx.ID()!.symbol
        const ID_text = ctx.ID()!.getText()
        const ID_TEXT = ID_text.toUpperCase()
        if (!list.mappedImages.find(ID_TEXT) && !list.customMappedImages.find(ID_TEXT)) {
            const severity = DiagnosticSeverity.Error
            const start = new Location(symbol.line, symbol.column)
            const msg = `Image ${ID_text} is not defined`
            this.addDiagnostic(severity, start, start, msg)
        }
    }


    visitObject_value(ctx: Object_valueContext): void {
        const symbol = ctx.ID()!.symbol
        const ID_text = ctx.ID()!.getText()
        const ID_TEXT = ID_text.toUpperCase()
        if (!list.objects.find(ID_TEXT) && !list.customObjects.find(ID_TEXT)) {
            const severity = DiagnosticSeverity.Error
            const start = new Location(symbol.line, symbol.column)
            const msg = `Object ${ID_text} is not defined`
            this.addDiagnostic(severity, start, start, msg)
        }
    }

    visitAudioevent_value(ctx: Audioevent_valueContext): void {
        const symbol = ctx.ID()!.symbol
        const ID_text = ctx.ID()!.getText()
        const ID_TEXT = ID_text.toUpperCase()
        if (!list.audioEvent.find(ID_TEXT) && !list.customAudioEvent.find(ID_TEXT)) {
            const severity = DiagnosticSeverity.Error
            const start = new Location(symbol.line, symbol.column)
            const msg = `AudioEvent ${ID_text} is not defined`
            this.addDiagnostic(severity, start, start, msg)
        }
    }

    
    visitScience_value(ctx: Science_valueContext): void {
        const symbol = ctx.ID()!.symbol
        const ID_text = ctx.ID()!.getText()
        const ID_TEXT = ID_text.toUpperCase()
        if (!list.science.find(ID_TEXT) && !list.customScience.find(ID_TEXT)) {
            const severity = DiagnosticSeverity.Error
            const start = new Location(symbol.line, symbol.column)
            const msg = `Science ${ID_text} is not defined`
            this.addDiagnostic(severity, start, start, msg)
        }
    }


    visitSpecialpower_value(ctx: Specialpower_valueContext): void {
        const symbol = ctx.ID()!.symbol
        const ID_text = ctx.ID()!.getText()
        const ID_TEXT = ID_text.toUpperCase()
        if (!list.specialPower.find(ID_TEXT) && !list.customSpecialPower.find(ID_TEXT)) {
            const severity = DiagnosticSeverity.Error
            const start = new Location(symbol.line, symbol.column)
            const msg = `SpecialPower ${ID_text} is not defined`
            this.addDiagnostic(severity, start, start, msg)
        
        }
    }
    
    visitUpgrade_value(ctx: Upgrade_valueContext): void {
        const symbol = ctx.ID()!.symbol
        const ID_text = ctx.ID()!.getText()
        const ID_TEXT = ID_text.toUpperCase()
        if (!list.upgrades.find(ID_TEXT) && !list.customUpgrades.find(ID_TEXT)) {
            const severity = DiagnosticSeverity.Error
            const start = new Location(symbol.line, symbol.column)
            const msg = `Upgrade ${ID_text} is not defined`
            this.addDiagnostic(severity, start, start, msg)
        }
    }

    visitCursorname_value(ctx: Cursorname_valueContext): void {
        const symbol = ctx.ID()!.symbol
        const ID_text = ctx.ID()!.getText()
        const ID_TEXT = ID_text.toUpperCase()
        if (!list.CursorNames.includes(ID_TEXT)) {
            const severity = DiagnosticSeverity.Error
            const start = new Location(symbol.line, symbol.column)
            const msg = `Cursor ${ID_text} does not exist`
            this.addDiagnostic(severity, start, start, msg)
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