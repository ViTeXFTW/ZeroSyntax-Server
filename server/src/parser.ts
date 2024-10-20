import { TextDocument } from "vscode-languageserver-textdocument";
import { MapIniParser } from "./utils/antlr4ng/MapIniParser";
import { CharStream, CommonTokenStream } from "antlr4ng";
import { MapIniLexer } from "./utils/antlr4ng/MapIniLexer";
import { ErrorListener } from "./errorListener";



export class Parser {    

    private latestParser: MapIniParser | undefined;
    private inputStream: CharStream | undefined;
    private lexer: MapIniLexer | undefined;
    private tokenStream: CommonTokenStream | undefined;

    constructor() {}

    updateParser(document: TextDocument): MapIniParser {
        this.inputStream = CharStream.fromString(document.getText());
        this.lexer = new MapIniLexer(this.inputStream);
        this.tokenStream = new CommonTokenStream(this.lexer);
        this.latestParser = new MapIniParser(this.tokenStream);

        return this.latestParser
    }

    getParser(): MapIniParser | null {
        if (this.latestParser) {
            return this.latestParser
        } else {
            return null
        }
    }

    getInputStream(): CharStream | null {
        if(this.inputStream) {
            return this.inputStream
        } else {
            return null
        }
    }

    getTokenStream(): CommonTokenStream | null {
        if(this.tokenStream) {
            return this.tokenStream
        } else {
            return null
        }
    }

}