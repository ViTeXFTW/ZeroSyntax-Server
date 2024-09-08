import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { MapIniVisitor } from "./antlr/MapIniVisitor";
import { Diagnostic, DiagnosticSeverity } from "vscode-languageserver";
import { SymbolTable } from "./symbols/SymbolTable";
import { AddModuleBlockContext, AddModulePropertyContext, AliasConditionStateBlockContext, ConditionStateBlockContext, ConditionStatePropertyContext, DefaultConditionStateBlockContext, DrawModuleBlockContext, DrawModulePropertyContext, EndContext, MapIniParser, ObjectContext, ObjectPropertyContext, ProgramContext, PropertyContext, TransitionStateBlockContext, TransitionStatePropertyContext } from "./antlr/MapIniParser";
import { IniType } from "./symbols/Symbol";
import * as list from './lists'
import { Location } from "./location";
import { Range, TextDocument } from "vscode-languageserver-textdocument";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import { MapIniLexer } from "./antlr/MapIniLexer";
import { CustomErrorListener } from "../AntlrListener";


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

    visitObject(ctx: ObjectContext): void {
        this.visitChildren(ctx)
    }

    visitObjectProperty(ctx: ObjectPropertyContext): void {
        const propertyName = ctx.ID().text
        if(!list.allowedObjectProperties.includes(propertyName)) {
            const start = new Location(ctx.start.line, ctx.start.charPositionInLine)
            const end = start.addColumns(propertyName.length)
            const msg = `Property ${propertyName} is not allowed in scope ${IniType.OBJECT}`
            this.addDiagnostic(DiagnosticSeverity.Error, start, end!, msg, IniType.PROPERTY)
        }
        this.visitChildren(ctx)
	}

    visitAddModuleBlock(ctx: AddModuleBlockContext): void {
        this.visitChildren(ctx)
    }

    visitAddModuleProperty(ctx: AddModulePropertyContext): void {
        const propertyName = ctx.ID().text
        if(!list.allowedAddModuleProperties.includes(propertyName)) {
            const start = new Location(ctx.start.line, ctx.start.charPositionInLine)
            const end = start.addColumns(propertyName.length)
            const msg = `Property ${propertyName} is not allowed in scope ${IniType.ADDMODULE}`
            this.addDiagnostic(DiagnosticSeverity.Error, start, end!, msg, IniType.PROPERTY)
        }
        this.visitChildren(ctx)
    }

    visitDrawModuleBlock(ctx: DrawModuleBlockContext): void {
        const drawType = ctx.getChild(2).text
        this.visitChildren(ctx)
    }

    visitDrawModuleProperty(ctx: DrawModulePropertyContext): void {
        const propertyName = ctx.ID().text

        const drawModuleType = ctx.parent?.getChild(2).text.toLocaleLowerCase()
        switch( drawModuleType) {
            case list.allowedModelDraws.W3DPROPDRAW:
            case list.allowedModelDraws.W3DTRACERDRAW:
            case list.allowedModelDraws.W3DROPEDRAW:
            case list.allowedModelDraws.W3DDEBRISDRAW:
            case list.allowedModelDraws.W3DDEFAULTDRAW:
                const start = new Location(ctx.start.line, ctx.start.charPositionInLine)
                const end = start.addColumns(propertyName.length)
                const msg = `Property ${propertyName} is not allowed in scope ${IniType.DRAWMODULE}`
                this.addDiagnostic(DiagnosticSeverity.Error, start, end!, msg, IniType.PROPERTY)
                break

            case list.allowedModelDraws.W3DDEPENDENCYMODELDRAW:
                if(!list.allowedSingleModelDrawProperties.includes(propertyName) && !list.allowedMultiModelDrawProperties.includes(propertyName) && !list.allowedDependencyDrawProperties.includes(propertyName)) {
                    const start = new Location(ctx.start.line, ctx.start.charPositionInLine)
                    const end = start.addColumns(propertyName.length)
                    const msg = `Property ${propertyName} is not allowed in scope ${IniType.DRAWMODULE}`
                    this.addDiagnostic(DiagnosticSeverity.Error, start, end!, msg, IniType.PROPERTY)
                }
                break

            case list.allowedModelDraws.W3DPOLICECARDRAW:
            case list.allowedModelDraws.W3DMODELDRAW:
                if(!list.allowedSingleModelDrawProperties.includes(propertyName) && !list.allowedMultiModelDrawProperties.includes(propertyName)) {
                    const start = new Location(ctx.start.line, ctx.start.charPositionInLine)
                    const end = start.addColumns(propertyName.length)
                    const msg = `Property ${propertyName} is not allowed in scope ${IniType.DRAWMODULE}`
                    this.addDiagnostic(DiagnosticSeverity.Error, start, end!, msg, IniType.PROPERTY)
                }
                break

            case list.allowedModelDraws.W3DTRUCKDRAW:
                if(!list.allowedTruckDrawProperties.includes(propertyName)) {
                    const start = new Location(ctx.start.line, ctx.start.charPositionInLine)
                    const end = start.addColumns(propertyName.length)
                    const msg = `Property ${propertyName} is not allowed in scope ${IniType.DRAWMODULE}`
                    this.addDiagnostic(DiagnosticSeverity.Error, start, end!, msg, IniType.PROPERTY)
                }
                break

            case list.allowedModelDraws.W3DTANKDRAW:
                if(!list.allowedTankDrawProperties.includes(propertyName) && !list.allowedSingleModelDrawProperties.includes(propertyName) && !list.allowedMultiModelDrawProperties.includes(propertyName)) {
                    const start = new Location(ctx.start.line, ctx.start.charPositionInLine)
                    const end = start.addColumns(propertyName.length)
                    const msg = `Property ${propertyName} is not allowed in scope ${IniType.DRAWMODULE}`
                    this.addDiagnostic(DiagnosticSeverity.Error, start, end!, msg, IniType.PROPERTY)
                }
                break

            case list.allowedModelDraws.W3DOVERLORDAIRCRAFTDRAW:
                if(!list.allowedSingleModelDrawProperties.includes(propertyName) && !list.allowedMultiModelDrawProperties.includes(propertyName)) {
                    const start = new Location(ctx.start.line, ctx.start.charPositionInLine)
                    const end = start.addColumns(propertyName.length)
                    const msg = `Property ${propertyName} is not allowed in scope ${IniType.DRAWMODULE}`
                    this.addDiagnostic(DiagnosticSeverity.Error, start, end!, msg, IniType.PROPERTY)
                }
                break

            case list.allowedModelDraws.W3DOVERLORDTANKDRAW:
                if(!list.allowedTankDrawProperties.includes(propertyName) && !list.allowedSingleModelDrawProperties.includes(propertyName) && !list.allowedMultiModelDrawProperties.includes(propertyName)) {
                    const start = new Location(ctx.start.line, ctx.start.charPositionInLine)
                    const end = start.addColumns(propertyName.length)
                    const msg = `Property ${propertyName} is not allowed in scope ${IniType.DRAWMODULE}`
                    this.addDiagnostic(DiagnosticSeverity.Error, start, end!, msg, IniType.PROPERTY)
                }
                break

            case list.allowedModelDraws.W3DOVERLORDTRUCKDRAW:
                if(!list.allowedTruckDrawProperties.includes(propertyName) && !list.allowedMultiModelDrawProperties.includes(propertyName)) {
                    const start = new Location(ctx.start.line, ctx.start.charPositionInLine)
                    const end = start.addColumns(propertyName.length)
                    const msg = `Property ${propertyName} is not allowed in scope ${IniType.DRAWMODULE}`
                    this.addDiagnostic(DiagnosticSeverity.Error, start, end!, msg, IniType.PROPERTY)
                }
                break

            case list.allowedModelDraws.W3DLASERDRAW:
                if(!list.allowedLaserDrawProperties.includes(propertyName)) {
                    const start = new Location(ctx.start.line, ctx.start.charPositionInLine)
                    const end = start.addColumns(propertyName.length)
                    const msg = `Property ${propertyName} is not allowed in scope ${IniType.DRAWMODULE}`
                    this.addDiagnostic(DiagnosticSeverity.Error, start, end!, msg, IniType.PROPERTY)
                }
                break

            case list.allowedModelDraws.W3DPROJECTILESTREAMDRAW:
                if(!list.allowedProjectileStreamDrawProperties.includes(propertyName)) {
                    const start = new Location(ctx.start.line, ctx.start.charPositionInLine)
                    const end = start.addColumns(propertyName.length)
                    const msg = `Property ${propertyName} is not allowed in scope ${IniType.DRAWMODULE}`
                    this.addDiagnostic(DiagnosticSeverity.Error, start, end!, msg, IniType.PROPERTY)
                }
                break

            case list.allowedModelDraws.W3DSCIENCEMODELDRAW:
                if(!list.allowedScienceDrawProperties.includes(propertyName)) {
                    const start = new Location(ctx.start.line, ctx.start.charPositionInLine)
                    const end = start.addColumns(propertyName.length)
                    const msg = `Property ${propertyName} is not allowed in scope ${IniType.DRAWMODULE}`
                    this.addDiagnostic(DiagnosticSeverity.Error, start, end!, msg, IniType.PROPERTY)
                }
                break

            case list.allowedModelDraws.W3DSUPPLYDRAW:
                if(!list.allowedSupplyDrawProperties.includes(propertyName)) {
                    const start = new Location(ctx.start.line, ctx.start.charPositionInLine)
                    const end = start.addColumns(propertyName.length)
                    const msg = `Property ${propertyName} is not allowed in scope ${IniType.DRAWMODULE}`
                    this.addDiagnostic(DiagnosticSeverity.Error, start, end!, msg, IniType.PROPERTY)
                }
                break

            case list.allowedModelDraws.W3DTREEDRAW:
                if(!list.allowedTreeDrawProperties.includes(propertyName)) {
                    const start = new Location(ctx.start.line, ctx.start.charPositionInLine)
                    const end = start.addColumns(propertyName.length)
                    const msg = `Property ${propertyName} is not allowed in scope ${IniType.DRAWMODULE}`
                    this.addDiagnostic(DiagnosticSeverity.Error, start, end!, msg, IniType.PROPERTY)
                }
                break

            case list.allowedModelDraws.W3DTANKTRUCKDRAW:
                if(!list.allowedSingleModelDrawProperties.includes(propertyName) && !list.allowedMultiModelDrawProperties.includes(propertyName) && !list.allowedTruckDrawProperties.includes(propertyName) && !list.allowedTankDrawProperties.includes(propertyName)) {
                    const start = new Location(ctx.start.line, ctx.start.charPositionInLine)
                    const end = start.addColumns(propertyName.length)
                    const msg = `Property ${propertyName} is not allowed in scope ${IniType.DRAWMODULE}`
                    this.addDiagnostic(DiagnosticSeverity.Error, start, end!, msg, IniType.PROPERTY)
                }
                break

            default:
                break;
        }

        
        this.visitChildren(ctx)
    }

    visitConditionStateBlock(ctx: ConditionStateBlockContext): void {
        const states = ctx.ID()
        states.forEach(state => {
            if(!list.allowedConditionStates.includes(state.text.toUpperCase())) {
                const start = new Location(state.symbol.line, state.symbol.charPositionInLine)
                const end = start.addColumns(state.text.length)
                const msg = `Property ${state} is not allowed in scope ${IniType.CONDITIONSTATEBLOCK}`
                this.addDiagnostic(DiagnosticSeverity.Error, start, end!, msg, IniType.CONDITIONSTATE)
            }
        })

        this.visitChildren(ctx)
    }

    visitDefaultConditionStateBlock(ctx: DefaultConditionStateBlockContext): void {
        this.visitChildren(ctx)
    }

    visitConditionStateProperty(ctx: ConditionStatePropertyContext): void {
        const propertyName = ctx.ID().text
        if(!list.allowedSingleConditionProperties.includes(propertyName) && !list.allowedMultiConditionProperties.includes(propertyName)) {
            const start = new Location(ctx.start.line, ctx.start.charPositionInLine)
            const end = start.addColumns(propertyName.length)
            const msg = `Property ${propertyName} is not allowed in scope ${IniType.CONDITIONSTATEBLOCK}`
            this.addDiagnostic(DiagnosticSeverity.Error, start, end!, msg, IniType.PROPERTY)
        }
        this.visitChildren(ctx)
    }

    visitTransitionStateBlock(ctx: TransitionStateBlockContext): void {
        const states = ctx.ID()

        states.forEach(state => {
            if(!list.allowedConditionStates.includes(state.text.toUpperCase())) {
                const start = new Location(ctx.start.line, ctx.start.charPositionInLine)
                const end = start.addColumns(state.text.length)
                const msg = `Property ${state.text} is not allowed in scope ${IniType.CONDITIONSTATEBLOCK}`
                this.addDiagnostic(DiagnosticSeverity.Error, start, end!, msg, IniType.CONDITIONSTATE)
            }
        })
        this.visitChildren(ctx)
    }

    visitTransitionStateProperty(ctx: TransitionStatePropertyContext): void {
        const propertyName = ctx.ID().text
        if(!list.allowedSingleConditionProperties.includes(propertyName) && !list.allowedMultiConditionProperties.includes(propertyName)) {
            const start = new Location(ctx.start.line, ctx.start.charPositionInLine)
            const end = start.addColumns(propertyName.length)
            const msg = `Property ${propertyName} is not allowed in scope ${IniType.CONDITIONSTATEBLOCK}`
            this.addDiagnostic(DiagnosticSeverity.Error, start, end!, msg, IniType.PROPERTY)
        }
        this.visitChildren(ctx)
    }

    visitAliasConditionStateBlock(ctx: AliasConditionStateBlockContext): void {
        const states = ctx.ID()

        states.forEach(state => {
            if(!list.allowedConditionStates.includes(state.text.toUpperCase())) {
                const start = new Location(ctx.start.line, ctx.start.charPositionInLine)
                const end = start.addColumns(state.text.length)
                const msg = `Property ${state.text} is not allowed in scope ${IniType.CONDITIONSTATEBLOCK}`
                this.addDiagnostic(DiagnosticSeverity.Error, start, end!, msg, IniType.CONDITIONSTATE)
            }
        })
        this.visitChildren(ctx)
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

export async function computeDiagnostics(document: TextDocument): Promise<Diagnostic[]> {
    
    let diagnostics: Diagnostic[] = []

    const inputStream = CharStreams.fromString(document.getText());
	const lexer = new MapIniLexer(inputStream);
	const tokenStream = new CommonTokenStream(lexer);
	const parser = new MapIniParser(tokenStream);
    parser.removeErrorListeners()
    parser.addErrorListener(new CustomErrorListener(document, diagnostics))

	// console.log('Diagnostics: Created antlr variables')

	const tree = parser.program()
	const vistor = new DiagnosticVisitor(diagnostics)

	vistor.visitProgram(tree)

	return diagnostics
}