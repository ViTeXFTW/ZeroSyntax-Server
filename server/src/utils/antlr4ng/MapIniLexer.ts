// Generated from ./server/src/utils/antlr4ng/MapIni.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class MapIniLexer extends antlr.Lexer {
    public static readonly T__0 = 1;
    public static readonly T__1 = 2;
    public static readonly T__2 = 3;
    public static readonly CONDITIONSTATE = 4;
    public static readonly ADDMODULE = 5;
    public static readonly REMOVEMODULE = 6;
    public static readonly EQ = 7;
    public static readonly STRING = 8;
    public static readonly ID = 9;
    public static readonly NEWLINE = 10;
    public static readonly WS = 11;
    public static readonly COMMENT = 12;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "'end'", "'End'", "'END'", null, null, null, "'='"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, "CONDITIONSTATE", "ADDMODULE", "REMOVEMODULE", 
        "EQ", "STRING", "ID", "NEWLINE", "WS", "COMMENT"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "T__0", "T__1", "T__2", "CONDITIONSTATE", "ADDMODULE", "REMOVEMODULE", 
        "EQ", "STRING", "ID", "NEWLINE", "WS", "COMMENT",
    ];


    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, MapIniLexer._ATN, MapIniLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "MapIni.g4"; }

    public get literalNames(): (string | null)[] { return MapIniLexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return MapIniLexer.symbolicNames; }
    public get ruleNames(): string[] { return MapIniLexer.ruleNames; }

    public get serializedATN(): number[] { return MapIniLexer._serializedATN; }

    public get channelNames(): string[] { return MapIniLexer.channelNames; }

    public get modeNames(): string[] { return MapIniLexer.modeNames; }

    public static readonly _serializedATN: number[] = [
        4,0,12,161,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,
        2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,0,1,0,
        1,0,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
        1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
        1,3,1,3,1,3,1,3,1,3,1,3,3,3,67,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,
        4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,
        4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,105,8,4,1,
        5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,7,1,
        7,1,7,1,7,5,7,126,8,7,10,7,12,7,129,9,7,1,7,1,7,1,8,1,8,5,8,135,
        8,8,10,8,12,8,138,9,8,1,9,3,9,141,8,9,1,9,1,9,1,10,1,10,1,10,1,10,
        1,11,1,11,1,11,3,11,152,8,11,1,11,5,11,155,8,11,10,11,12,11,158,
        9,11,1,11,1,11,0,0,12,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,
        10,21,11,23,12,1,0,8,4,0,10,10,13,13,34,34,92,92,2,0,34,34,92,92,
        6,0,43,43,45,46,48,57,65,90,95,95,97,122,7,0,37,37,45,46,48,58,65,
        90,92,92,95,95,97,122,1,0,13,13,1,0,10,10,2,0,9,9,32,32,2,0,10,10,
        13,13,170,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,
        0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,
        0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,1,25,1,0,0,0,3,29,1,0,0,0,5,33,1,
        0,0,0,7,66,1,0,0,0,9,104,1,0,0,0,11,106,1,0,0,0,13,119,1,0,0,0,15,
        121,1,0,0,0,17,132,1,0,0,0,19,140,1,0,0,0,21,144,1,0,0,0,23,151,
        1,0,0,0,25,26,5,101,0,0,26,27,5,110,0,0,27,28,5,100,0,0,28,2,1,0,
        0,0,29,30,5,69,0,0,30,31,5,110,0,0,31,32,5,100,0,0,32,4,1,0,0,0,
        33,34,5,69,0,0,34,35,5,78,0,0,35,36,5,68,0,0,36,6,1,0,0,0,37,38,
        5,67,0,0,38,39,5,111,0,0,39,40,5,110,0,0,40,41,5,100,0,0,41,42,5,
        105,0,0,42,43,5,116,0,0,43,44,5,105,0,0,44,45,5,111,0,0,45,46,5,
        110,0,0,46,47,5,83,0,0,47,48,5,116,0,0,48,49,5,97,0,0,49,50,5,116,
        0,0,50,67,5,101,0,0,51,52,5,84,0,0,52,53,5,114,0,0,53,54,5,97,0,
        0,54,55,5,110,0,0,55,56,5,115,0,0,56,57,5,105,0,0,57,58,5,116,0,
        0,58,59,5,105,0,0,59,60,5,111,0,0,60,61,5,110,0,0,61,62,5,83,0,0,
        62,63,5,116,0,0,63,64,5,97,0,0,64,65,5,116,0,0,65,67,5,101,0,0,66,
        37,1,0,0,0,66,51,1,0,0,0,67,8,1,0,0,0,68,69,5,65,0,0,69,70,5,100,
        0,0,70,71,5,100,0,0,71,72,5,77,0,0,72,73,5,111,0,0,73,74,5,100,0,
        0,74,75,5,117,0,0,75,76,5,108,0,0,76,105,5,101,0,0,77,78,5,97,0,
        0,78,79,5,100,0,0,79,80,5,100,0,0,80,81,5,109,0,0,81,82,5,111,0,
        0,82,83,5,100,0,0,83,84,5,117,0,0,84,85,5,108,0,0,85,105,5,101,0,
        0,86,87,5,65,0,0,87,88,5,68,0,0,88,89,5,68,0,0,89,90,5,77,0,0,90,
        91,5,79,0,0,91,92,5,68,0,0,92,93,5,85,0,0,93,94,5,76,0,0,94,105,
        5,69,0,0,95,96,5,65,0,0,96,97,5,100,0,0,97,98,5,100,0,0,98,99,5,
        109,0,0,99,100,5,111,0,0,100,101,5,100,0,0,101,102,5,117,0,0,102,
        103,5,108,0,0,103,105,5,101,0,0,104,68,1,0,0,0,104,77,1,0,0,0,104,
        86,1,0,0,0,104,95,1,0,0,0,105,10,1,0,0,0,106,107,5,82,0,0,107,108,
        5,101,0,0,108,109,5,109,0,0,109,110,5,111,0,0,110,111,5,118,0,0,
        111,112,5,101,0,0,112,113,5,77,0,0,113,114,5,111,0,0,114,115,5,100,
        0,0,115,116,5,117,0,0,116,117,5,108,0,0,117,118,5,101,0,0,118,12,
        1,0,0,0,119,120,5,61,0,0,120,14,1,0,0,0,121,127,5,34,0,0,122,126,
        8,0,0,0,123,124,5,92,0,0,124,126,7,1,0,0,125,122,1,0,0,0,125,123,
        1,0,0,0,126,129,1,0,0,0,127,125,1,0,0,0,127,128,1,0,0,0,128,130,
        1,0,0,0,129,127,1,0,0,0,130,131,5,34,0,0,131,16,1,0,0,0,132,136,
        7,2,0,0,133,135,7,3,0,0,134,133,1,0,0,0,135,138,1,0,0,0,136,134,
        1,0,0,0,136,137,1,0,0,0,137,18,1,0,0,0,138,136,1,0,0,0,139,141,7,
        4,0,0,140,139,1,0,0,0,140,141,1,0,0,0,141,142,1,0,0,0,142,143,7,
        5,0,0,143,20,1,0,0,0,144,145,7,6,0,0,145,146,1,0,0,0,146,147,6,10,
        0,0,147,22,1,0,0,0,148,152,5,59,0,0,149,150,5,47,0,0,150,152,5,47,
        0,0,151,148,1,0,0,0,151,149,1,0,0,0,152,156,1,0,0,0,153,155,8,7,
        0,0,154,153,1,0,0,0,155,158,1,0,0,0,156,154,1,0,0,0,156,157,1,0,
        0,0,157,159,1,0,0,0,158,156,1,0,0,0,159,160,6,11,0,0,160,24,1,0,
        0,0,9,0,66,104,125,127,136,140,151,156,1,6,0,0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!MapIniLexer.__ATN) {
            MapIniLexer.__ATN = new antlr.ATNDeserializer().deserialize(MapIniLexer._serializedATN);
        }

        return MapIniLexer.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(MapIniLexer.literalNames, MapIniLexer.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return MapIniLexer.vocabulary;
    }

    private static readonly decisionsToDFA = MapIniLexer._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}