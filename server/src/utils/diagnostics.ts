import { TextDocument } from 'vscode-languageserver-textdocument';
import { CustomErrorListener, TreeListener } from '../AntlrListener';
import { Diagnostic } from 'vscode-languageserver';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { MapIniLexer } from './antlr/MapIniLexer';
import { MapIniParser } from './antlr/MapIniParser';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';


export async function computeDiagnostics(listener: TreeListener, textDocument: TextDocument): Promise<Diagnostic[]> {
	try {

		const inputStream = CharStreams.fromString(textDocument.getText());
		const lexer = new MapIniLexer(inputStream);
		const tokenStream = new CommonTokenStream(lexer);
		const parser = new MapIniParser(tokenStream);
		parser.removeErrorListeners();
		parser.addErrorListener(new CustomErrorListener(textDocument, listener));

		const walker = new ParseTreeWalker();
		const root = parser.program();
		walker.walk(listener, root);

		return listener.getDiagnostics();
	} catch (error) {
		// Handle any parsing errors here
		console.error(`Error computing diagnostics: ${error}`);
		return [];
	}
}