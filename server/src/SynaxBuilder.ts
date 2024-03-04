import { Connection, Diagnostic, DiagnosticSeverity } from "vscode-languageserver";
import { GZHSyntaxListener } from "./antlr/GZHSyntaxListener";
import { FileContext, PropertyContext } from "./antlr/GZHSyntaxParser";
import { ANTLRErrorListener, RecognitionException, Recognizer, Token } from "antlr4ts";
import { TextDocument } from "vscode-languageserver-textdocument";
import { connect } from "http2";

export class SyntaxBuilder implements GZHSyntaxListener {

    private _diagnostics: Diagnostic[];
    private _connection: Connection;

    constructor(connection: Connection) {
        this._diagnostics = [];
        this._connection = connection;
    }

    public build(text: string): Diagnostic[] {
        return this._diagnostics;
    }

    public getDiagnostics(): Diagnostic[] {
        return this._diagnostics;
    }

    public addDiagnostic(diagnostic: Diagnostic) {
        this._diagnostics.push(diagnostic);
    }

    public clearDiagnostics() {
        this._diagnostics = [];
    }

    enterEveryRule(ctx: any): void {
        //console.log("enterEveryRule");
    }

    exitEveryRule(ctx: any): void {
        //console.log("exitEveryRule");
    }

    enterProperty(ctx: PropertyContext) {
        let propertyName = ctx.ID().text;
    
        const propertyValue = ctx.value();
        let seenValues: Set<any> = new Set();
    
        if (propertyValue) {
            propertyValue.forEach((value) => {
                let valueText = value.text;
                if((valueText.startsWith("\"") && valueText.endsWith("\"")) || (valueText.startsWith("'") && valueText.endsWith("'"))) {
                    valueText = valueText.substring(1, valueText.length - 1);
                }
    
                if (seenValues.has(valueText)) {
                    this.addDiagnostic({
                        severity: DiagnosticSeverity.Warning,
                        range: {
                            start: { line: value.start.line - 1, character: value.start.charPositionInLine },
                            end: { line: value.stop!.line - 1, character: value.stop!.charPositionInLine }
                        },
                        message: `Duplicate value '${valueText}'`,
                        source: 'ZeroSyntax-Server'
                    });
                } else {
                    seenValues.add(valueText);
                }
            });
        }
    }
}

export class CustomErrorListener implements ANTLRErrorListener<Token> {
    textDocument: TextDocument;
    treeListener: SyntaxBuilder;

    constructor(textDocument: TextDocument, treeListener: SyntaxBuilder) {
        this.textDocument = textDocument;
        this.treeListener = treeListener;
    }

    syntaxError(
        recognizer: Recognizer<Token, any>,
        offendingSymbol: Token | undefined,
        line: number,
        charPositionInLine: number,
        msg: string,
        e: RecognitionException | undefined
    ): void {

        let message = msg;

        // Create diagnostic for the error
        const severity = DiagnosticSeverity.Error;
        const startchar = charPositionInLine;
        const endchar = charPositionInLine + offendingSymbol!.text!.length;

        const diagnostic: Diagnostic = {
            severity,
            range: {
                start: { line: line - 1, character: startchar },
                end: { line: line - 1, character: endchar }
            },
            message,
            source: 'ZHParser'
        };

        // Push the diagnostic to the array
        this.treeListener.addDiagnostic(diagnostic);
    }

}