import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { MapIniVisitor } from "./antlr/MapIniVisitor";
import { Diagnostic, DiagnosticSeverity } from "vscode-languageserver";
import { SymbolTable } from "./symbols/SymbolTable";
import { ConditionStateBlockContext, ConditionStatePropertyContext, DefaultConditionStateBlockContext, DrawModuleBlockContext, DrawModulePropertyContext, EndContext, MapIniParser, ObjectContext, ObjectPropertyContext, ProgramContext, PropertyContext } from "./antlr/MapIniParser";
import { IniType } from "./symbols/Symbol";
import * as list from './lists'
import { Location } from "./location";
import { TextDocument } from "vscode-languageserver-textdocument";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import { MapIniLexer } from "./antlr/MapIniLexer";
import { CustomErrorListener } from "../AntlrListener";
import { start } from "repl";


export class DiagnosticVisitor extends AbstractParseTreeVisitor<void> implements MapIniVisitor<void> {
    protected defaultResult(): void {
    }
    
    symbolTable: SymbolTable
	diagnostics: Diagnostic[]

    constructor(symbolTable: SymbolTable, diagnostics: Diagnostic[]) {
        super()
        this.symbolTable = symbolTable
        this.diagnostics = diagnostics
    }

    visitProgram(ctx: ProgramContext): void {
        this.visitChildren(ctx)
    }

    visitEnd(ctx: EndContext): void {
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
            this.addDiagnostic(DiagnosticSeverity.Error, start, end!, msg, IniType.OBJECT)
        }
	}

    visitDrawModuleBlock(ctx: DrawModuleBlockContext): void {
        this.visitChildren(ctx)
    }

    visitDrawModuleProperty(ctx: DrawModulePropertyContext): void {
        const propertyName = ctx.ID().text
        if(!list.allowedSingleModelDrawProperties.includes(propertyName) && !list.allowedMultiModelDrawProperties.includes(propertyName)) {
            const start = new Location(ctx.start.line, ctx.start.charPositionInLine)
            const end = start.addColumns(propertyName.length)
            const msg = `Property ${propertyName} is not allowed in scope ${IniType.OBJECT}`
            this.addDiagnostic(DiagnosticSeverity.Error, start, end!, msg, IniType.OBJECT)
        }
    }

    visitConditionStateBlock(ctx: ConditionStateBlockContext): void {

        const conditions = ctx.ID()
        conditions.forEach(condition => {
            if(!list.allowedConditionStates.includes(condition.text.toLocaleUpperCase())) {
                const start = new Location(condition.symbol.line, condition.symbol.charPositionInLine)
                const end = start.addColumns(condition.text.length)
                const msg = `Property ${condition} is not allowed in scope ${IniType.CONDITIONSTATEBLOCK}`
                this.addDiagnostic(DiagnosticSeverity.Error, start, end!, msg, IniType.OBJECT)
            }
        })

        this.visitChildren(ctx)
    }

    visitDefaultConditionStateBlock(ctx: DefaultConditionStateBlockContext): void {
        this.visitChildren(ctx)
    }

    visitconditionStateProperty(ctx: ConditionStatePropertyContext): void {
        const propertyName = ctx.ID().text
        if(!list.allowedSingleConditionProperties.includes(propertyName) && !list.allowedMultiConditionProperties.includes(propertyName)) {
            const start = new Location(ctx.start.line, ctx.start.charPositionInLine)
            const end = start.addColumns(propertyName.length)
            const msg = `Property ${propertyName} is not allowed in scope ${IniType.OBJECT}`
            this.addDiagnostic(DiagnosticSeverity.Error, start, end!, msg, IniType.OBJECT)
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


export function computeDiagnostics(document: TextDocument, symbolTable: SymbolTable): Diagnostic[] {
    
    let diagnostics: Diagnostic[] = []

    const inputStream = CharStreams.fromString(document.getText());
	const lexer = new MapIniLexer(inputStream);
	const tokenStream = new CommonTokenStream(lexer);
	const parser = new MapIniParser(tokenStream);
    parser.removeErrorListeners();
    parser.addErrorListener(new CustomErrorListener(document, diagnostics));

	console.log('Diagnostics: Created antlr variables')

	const tree = parser.program()
	const vistor = new DiagnosticVisitor(symbolTable, diagnostics)

	vistor.visitProgram(tree)

	return diagnostics
}