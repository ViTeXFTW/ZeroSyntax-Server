import { ANTLRErrorListener, ATNConfigSet, ATNSimulator, BitSet, DFA, Parser, RecognitionException, Recognizer, Token } from "antlr4ng";
import { Diagnostic, DiagnosticSeverity } from "vscode-languageserver";



export class ErrorListener implements ANTLRErrorListener {
    
    diagnostics: Diagnostic[];

    constructor(diagnostics: Diagnostic[]) {
        this.diagnostics = diagnostics;
    }

    syntaxError<S extends Token, T extends ATNSimulator>(
        recognizer: Recognizer<T>,
        offendingSymbol: S | null,
        line: number,
        charPositionInLine: number,
        msg: string,
        e: RecognitionException | null
      ): void {
        const message = msg;
    
        // Create diagnostic for the error
        const severity = DiagnosticSeverity.Error;
        const startchar = charPositionInLine;
    
        // Handle possible null offendingSymbol
        const offendingTextLength = offendingSymbol?.text?.length ?? 1;
        const endchar = charPositionInLine + offendingTextLength;
    
        const diagnostic: Diagnostic = {
          severity,
          range: {
            start: { line: line - 1, character: startchar },
            end: { line: line - 1, character: endchar },
          },
          message,
          source: 'ZHParser-ErrorListener',
        };
    
        this.diagnostics.push(diagnostic);
      }
    
      reportAmbiguity(
        recognizer: Parser,
        dfa: DFA,
        startIndex: number,
        stopIndex: number,
        exact: boolean,
        ambigAlts: BitSet | undefined,
        configs: ATNConfigSet
      ): void {
        // Optional: Implement if needed, otherwise leave empty
      }
    
      reportAttemptingFullContext(
        recognizer: Parser,
        dfa: DFA,
        startIndex: number,
        stopIndex: number,
        conflictingAlts: BitSet | undefined,
        configs: ATNConfigSet
      ): void {
        // Optional: Implement if needed, otherwise leave empty
      }
    
      reportContextSensitivity<T extends ATNSimulator>(
        recognizer: Recognizer<T>,
        dfa: DFA,
        startIndex: number,
        stopIndex: number,
        prediction: number,
        configs: any
      ): void {
        // Optional: Implement if needed, otherwise leave empty
      }

} 
