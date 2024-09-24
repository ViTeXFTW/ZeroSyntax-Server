import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { MapIniVisitor } from "./antlr/MapIniVisitor";
import { Diagnostic, DiagnosticSeverity } from "vscode-languageserver";
import { EndContext, MapIniParser, MappedImageClassContext, ProgramContext } from "./antlr/MapIniParser";
import { IniType } from "./symbols/Symbol";
import { Location } from "./location";
import { TextDocument } from "vscode-languageserver-textdocument";
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

    visitmappedImageClass(ctx: MappedImageClassContext): void {
        
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