// Generated from ./server/src/utils/antlr4ng/MapIni.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { MapIniListener } from "./MapIniListener.js";
import { MapIniVisitor } from "./MapIniVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class MapIniParser extends antlr.Parser {
    public static readonly T__0 = 1;
    public static readonly T__1 = 2;
    public static readonly T__2 = 3;
    public static readonly T__3 = 4;
    public static readonly T__4 = 5;
    public static readonly T__5 = 6;
    public static readonly T__6 = 7;
    public static readonly T__7 = 8;
    public static readonly T__8 = 9;
    public static readonly T__9 = 10;
    public static readonly T__10 = 11;
    public static readonly T__11 = 12;
    public static readonly T__12 = 13;
    public static readonly T__13 = 14;
    public static readonly T__14 = 15;
    public static readonly EQ = 16;
    public static readonly STRING = 17;
    public static readonly ID = 18;
    public static readonly NEWLINE = 19;
    public static readonly WS = 20;
    public static readonly COMMENT = 21;
    public static readonly RULE_program = 0;
    public static readonly RULE_class = 1;
    public static readonly RULE_mappedImageClass = 2;
    public static readonly RULE_objectClass = 3;
    public static readonly RULE_module_modifier = 4;
    public static readonly RULE_addModule = 5;
    public static readonly RULE_removeModule = 6;
    public static readonly RULE_module = 7;
    public static readonly RULE_drawModule = 8;
    public static readonly RULE_conditionState = 9;
    public static readonly RULE_aliasCondition = 10;
    public static readonly RULE_bodyModule = 11;
    public static readonly RULE_behaviorModule = 12;
    public static readonly RULE_clientModule = 13;
    public static readonly RULE_objectProperty = 14;
    public static readonly RULE_property = 15;
    public static readonly RULE_drawModule_type = 16;
    public static readonly RULE_conditionState_values = 17;
    public static readonly RULE_bodyModule_type = 18;
    public static readonly RULE_behaviorModule_type = 19;
    public static readonly RULE_clientModule_type = 20;
    public static readonly RULE_moduleTag_value = 21;
    public static readonly RULE_mappedImage_value = 22;
    public static readonly RULE_object_value = 23;
    public static readonly RULE_property_values = 24;
    public static readonly RULE_end = 25;

    public static readonly literalNames = [
        null, "'MappedImage'", "'Object'", "'AddModule'", "'RemoveModule'", 
        "'Draw'", "'DefaultConditionState'", "'ConditionState'", "'TransitionState'", 
        "'AliasConditionState'", "'Body'", "'Behavior'", "'Client'", "'End'", 
        "'end'", "'END'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, "EQ", "STRING", "ID", "NEWLINE", "WS", 
        "COMMENT"
    ];
    public static readonly ruleNames = [
        "program", "class", "mappedImageClass", "objectClass", "module_modifier", 
        "addModule", "removeModule", "module", "drawModule", "conditionState", 
        "aliasCondition", "bodyModule", "behaviorModule", "clientModule", 
        "objectProperty", "property", "drawModule_type", "conditionState_values", 
        "bodyModule_type", "behaviorModule_type", "clientModule_type", "moduleTag_value", 
        "mappedImage_value", "object_value", "property_values", "end",
    ];

    public get grammarFileName(): string { return "MapIni.g4"; }
    public get literalNames(): (string | null)[] { return MapIniParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return MapIniParser.symbolicNames; }
    public get ruleNames(): string[] { return MapIniParser.ruleNames; }
    public get serializedATN(): number[] { return MapIniParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, MapIniParser._ATN, MapIniParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public program(): ProgramContext {
        let localContext = new ProgramContext(this.context, this.state);
        this.enterRule(localContext, 0, MapIniParser.RULE_program);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 57;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1572870) !== 0)) {
                {
                this.state = 55;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.T__0:
                case MapIniParser.T__1:
                    {
                    this.state = 52;
                    this.class_();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 53;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                case MapIniParser.WS:
                    {
                    this.state = 54;
                    this.match(MapIniParser.WS);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 59;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 60;
            this.match(MapIniParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public class_(): ClassContext {
        let localContext = new ClassContext(this.context, this.state);
        this.enterRule(localContext, 2, MapIniParser.RULE_class);
        try {
            this.state = 64;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__0:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 62;
                this.mappedImageClass();
                }
                break;
            case MapIniParser.T__1:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 63;
                this.objectClass();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public mappedImageClass(): MappedImageClassContext {
        let localContext = new MappedImageClassContext(this.context, this.state);
        this.enterRule(localContext, 4, MapIniParser.RULE_mappedImageClass);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 66;
            this.match(MapIniParser.T__0);
            this.state = 67;
            this.match(MapIniParser.WS);
            this.state = 68;
            this.mappedImage_value();
            this.state = 69;
            this.match(MapIniParser.NEWLINE);
            this.state = 73;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 3, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 70;
                    this.property();
                    }
                    }
                }
                this.state = 75;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 3, this.context);
            }
            this.state = 76;
            this.end();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public objectClass(): ObjectClassContext {
        let localContext = new ObjectClassContext(this.context, this.state);
        this.enterRule(localContext, 6, MapIniParser.RULE_objectClass);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 78;
            this.match(MapIniParser.T__1);
            this.state = 79;
            this.match(MapIniParser.WS);
            this.state = 80;
            this.object_value();
            this.state = 81;
            this.match(MapIniParser.NEWLINE);
            this.state = 87;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    this.state = 85;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 4, this.context) ) {
                    case 1:
                        {
                        this.state = 82;
                        this.module_modifier();
                        }
                        break;
                    case 2:
                        {
                        this.state = 83;
                        this.objectProperty();
                        }
                        break;
                    case 3:
                        {
                        this.state = 84;
                        this.match(MapIniParser.NEWLINE);
                        }
                        break;
                    }
                    }
                }
                this.state = 89;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
            }
            this.state = 90;
            this.end();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public module_modifier(): Module_modifierContext {
        let localContext = new Module_modifierContext(this.context, this.state);
        this.enterRule(localContext, 8, MapIniParser.RULE_module_modifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 93;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 20) {
                {
                this.state = 92;
                this.match(MapIniParser.WS);
                }
            }

            this.state = 97;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__2:
                {
                this.state = 95;
                this.addModule();
                }
                break;
            case MapIniParser.T__3:
                {
                this.state = 96;
                this.removeModule();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public addModule(): AddModuleContext {
        let localContext = new AddModuleContext(this.context, this.state);
        this.enterRule(localContext, 10, MapIniParser.RULE_addModule);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 99;
            this.match(MapIniParser.T__2);
            this.state = 100;
            this.match(MapIniParser.NEWLINE);
            this.state = 106;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 9, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    this.state = 104;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 8, this.context) ) {
                    case 1:
                        {
                        this.state = 101;
                        this.module_();
                        }
                        break;
                    case 2:
                        {
                        this.state = 102;
                        this.property();
                        }
                        break;
                    case 3:
                        {
                        this.state = 103;
                        this.match(MapIniParser.NEWLINE);
                        }
                        break;
                    }
                    }
                }
                this.state = 108;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 9, this.context);
            }
            this.state = 109;
            this.end();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public removeModule(): RemoveModuleContext {
        let localContext = new RemoveModuleContext(this.context, this.state);
        this.enterRule(localContext, 12, MapIniParser.RULE_removeModule);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 111;
            this.match(MapIniParser.T__3);
            this.state = 112;
            this.match(MapIniParser.WS);
            this.state = 113;
            this.moduleTag_value();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public module_(): ModuleContext {
        let localContext = new ModuleContext(this.context, this.state);
        this.enterRule(localContext, 14, MapIniParser.RULE_module);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 116;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 20) {
                {
                this.state = 115;
                this.match(MapIniParser.WS);
                }
            }

            this.state = 122;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__4:
                {
                this.state = 118;
                this.drawModule();
                }
                break;
            case MapIniParser.T__9:
                {
                this.state = 119;
                this.bodyModule();
                }
                break;
            case MapIniParser.T__10:
                {
                this.state = 120;
                this.behaviorModule();
                }
                break;
            case MapIniParser.T__11:
                {
                this.state = 121;
                this.clientModule();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public drawModule(): DrawModuleContext {
        let localContext = new DrawModuleContext(this.context, this.state);
        this.enterRule(localContext, 16, MapIniParser.RULE_drawModule);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 124;
            this.match(MapIniParser.T__4);
            this.state = 125;
            this.match(MapIniParser.EQ);
            this.state = 126;
            this.drawModule_type();
            this.state = 127;
            this.match(MapIniParser.WS);
            this.state = 128;
            this.moduleTag_value();
            this.state = 129;
            this.match(MapIniParser.NEWLINE);
            this.state = 136;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 13, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    this.state = 134;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 12, this.context) ) {
                    case 1:
                        {
                        this.state = 130;
                        this.conditionState();
                        }
                        break;
                    case 2:
                        {
                        this.state = 131;
                        this.aliasCondition();
                        }
                        break;
                    case 3:
                        {
                        this.state = 132;
                        this.property();
                        }
                        break;
                    case 4:
                        {
                        this.state = 133;
                        this.match(MapIniParser.NEWLINE);
                        }
                        break;
                    }
                    }
                }
                this.state = 138;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 13, this.context);
            }
            this.state = 139;
            this.end();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public conditionState(): ConditionStateContext {
        let localContext = new ConditionStateContext(this.context, this.state);
        this.enterRule(localContext, 18, MapIniParser.RULE_conditionState);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 142;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 20) {
                {
                this.state = 141;
                this.match(MapIniParser.WS);
                }
            }

            this.state = 151;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__5:
                {
                this.state = 144;
                this.match(MapIniParser.T__5);
                }
                break;
            case MapIniParser.T__6:
                {
                {
                this.state = 145;
                this.match(MapIniParser.T__6);
                this.state = 146;
                this.match(MapIniParser.EQ);
                this.state = 147;
                this.conditionState_values();
                }
                }
                break;
            case MapIniParser.T__7:
                {
                {
                this.state = 148;
                this.match(MapIniParser.T__7);
                this.state = 149;
                this.match(MapIniParser.EQ);
                this.state = 150;
                this.conditionState_values();
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 153;
            this.match(MapIniParser.NEWLINE);
            this.state = 158;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 17, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    this.state = 156;
                    this.errorHandler.sync(this);
                    switch (this.tokenStream.LA(1)) {
                    case MapIniParser.ID:
                    case MapIniParser.WS:
                        {
                        this.state = 154;
                        this.property();
                        }
                        break;
                    case MapIniParser.NEWLINE:
                        {
                        this.state = 155;
                        this.match(MapIniParser.NEWLINE);
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    }
                }
                this.state = 160;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 17, this.context);
            }
            this.state = 161;
            this.end();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public aliasCondition(): AliasConditionContext {
        let localContext = new AliasConditionContext(this.context, this.state);
        this.enterRule(localContext, 20, MapIniParser.RULE_aliasCondition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 164;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 20) {
                {
                this.state = 163;
                this.match(MapIniParser.WS);
                }
            }

            this.state = 166;
            this.match(MapIniParser.T__8);
            this.state = 167;
            this.match(MapIniParser.EQ);
            this.state = 168;
            this.conditionState_values();
            this.state = 169;
            this.match(MapIniParser.NEWLINE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public bodyModule(): BodyModuleContext {
        let localContext = new BodyModuleContext(this.context, this.state);
        this.enterRule(localContext, 22, MapIniParser.RULE_bodyModule);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 171;
            this.match(MapIniParser.T__9);
            this.state = 172;
            this.match(MapIniParser.EQ);
            this.state = 173;
            this.bodyModule_type();
            this.state = 174;
            this.match(MapIniParser.WS);
            this.state = 175;
            this.moduleTag_value();
            this.state = 176;
            this.match(MapIniParser.NEWLINE);
            this.state = 181;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 20, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    this.state = 179;
                    this.errorHandler.sync(this);
                    switch (this.tokenStream.LA(1)) {
                    case MapIniParser.ID:
                    case MapIniParser.WS:
                        {
                        this.state = 177;
                        this.property();
                        }
                        break;
                    case MapIniParser.NEWLINE:
                        {
                        this.state = 178;
                        this.match(MapIniParser.NEWLINE);
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    }
                }
                this.state = 183;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 20, this.context);
            }
            this.state = 184;
            this.end();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public behaviorModule(): BehaviorModuleContext {
        let localContext = new BehaviorModuleContext(this.context, this.state);
        this.enterRule(localContext, 24, MapIniParser.RULE_behaviorModule);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 186;
            this.match(MapIniParser.T__10);
            this.state = 187;
            this.match(MapIniParser.EQ);
            this.state = 188;
            this.behaviorModule_type();
            this.state = 189;
            this.match(MapIniParser.WS);
            this.state = 190;
            this.moduleTag_value();
            this.state = 191;
            this.match(MapIniParser.NEWLINE);
            this.state = 196;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 22, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    this.state = 194;
                    this.errorHandler.sync(this);
                    switch (this.tokenStream.LA(1)) {
                    case MapIniParser.ID:
                    case MapIniParser.WS:
                        {
                        this.state = 192;
                        this.property();
                        }
                        break;
                    case MapIniParser.NEWLINE:
                        {
                        this.state = 193;
                        this.match(MapIniParser.NEWLINE);
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    }
                }
                this.state = 198;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 22, this.context);
            }
            this.state = 199;
            this.end();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public clientModule(): ClientModuleContext {
        let localContext = new ClientModuleContext(this.context, this.state);
        this.enterRule(localContext, 26, MapIniParser.RULE_clientModule);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 201;
            this.match(MapIniParser.T__11);
            this.state = 202;
            this.match(MapIniParser.EQ);
            this.state = 203;
            this.clientModule_type();
            this.state = 204;
            this.match(MapIniParser.WS);
            this.state = 205;
            this.moduleTag_value();
            this.state = 206;
            this.match(MapIniParser.NEWLINE);
            this.state = 211;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 24, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    this.state = 209;
                    this.errorHandler.sync(this);
                    switch (this.tokenStream.LA(1)) {
                    case MapIniParser.ID:
                    case MapIniParser.WS:
                        {
                        this.state = 207;
                        this.property();
                        }
                        break;
                    case MapIniParser.NEWLINE:
                        {
                        this.state = 208;
                        this.match(MapIniParser.NEWLINE);
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    }
                }
                this.state = 213;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 24, this.context);
            }
            this.state = 214;
            this.end();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public objectProperty(): ObjectPropertyContext {
        let localContext = new ObjectPropertyContext(this.context, this.state);
        this.enterRule(localContext, 28, MapIniParser.RULE_objectProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 216;
            this.property();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public property(): PropertyContext {
        let localContext = new PropertyContext(this.context, this.state);
        this.enterRule(localContext, 30, MapIniParser.RULE_property);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 219;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 20) {
                {
                this.state = 218;
                this.match(MapIniParser.WS);
                }
            }

            this.state = 221;
            this.match(MapIniParser.ID);
            this.state = 222;
            this.match(MapIniParser.EQ);
            this.state = 223;
            this.property_values();
            this.state = 224;
            this.match(MapIniParser.NEWLINE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public drawModule_type(): DrawModule_typeContext {
        let localContext = new DrawModule_typeContext(this.context, this.state);
        this.enterRule(localContext, 32, MapIniParser.RULE_drawModule_type);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 226;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public conditionState_values(): ConditionState_valuesContext {
        let localContext = new ConditionState_valuesContext(this.context, this.state);
        this.enterRule(localContext, 34, MapIniParser.RULE_conditionState_values);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 228;
            this.match(MapIniParser.ID);
            this.state = 233;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 20) {
                {
                {
                this.state = 229;
                this.match(MapIniParser.WS);
                this.state = 230;
                this.match(MapIniParser.ID);
                }
                }
                this.state = 235;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public bodyModule_type(): BodyModule_typeContext {
        let localContext = new BodyModule_typeContext(this.context, this.state);
        this.enterRule(localContext, 36, MapIniParser.RULE_bodyModule_type);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 236;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public behaviorModule_type(): BehaviorModule_typeContext {
        let localContext = new BehaviorModule_typeContext(this.context, this.state);
        this.enterRule(localContext, 38, MapIniParser.RULE_behaviorModule_type);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 238;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public clientModule_type(): ClientModule_typeContext {
        let localContext = new ClientModule_typeContext(this.context, this.state);
        this.enterRule(localContext, 40, MapIniParser.RULE_clientModule_type);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 240;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public moduleTag_value(): ModuleTag_valueContext {
        let localContext = new ModuleTag_valueContext(this.context, this.state);
        this.enterRule(localContext, 42, MapIniParser.RULE_moduleTag_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 242;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public mappedImage_value(): MappedImage_valueContext {
        let localContext = new MappedImage_valueContext(this.context, this.state);
        this.enterRule(localContext, 44, MapIniParser.RULE_mappedImage_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 244;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public object_value(): Object_valueContext {
        let localContext = new Object_valueContext(this.context, this.state);
        this.enterRule(localContext, 46, MapIniParser.RULE_object_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 246;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public property_values(): Property_valuesContext {
        let localContext = new Property_valuesContext(this.context, this.state);
        this.enterRule(localContext, 48, MapIniParser.RULE_property_values);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 248;
            this.match(MapIniParser.ID);
            this.state = 253;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 20) {
                {
                {
                this.state = 249;
                this.match(MapIniParser.WS);
                this.state = 250;
                this.match(MapIniParser.ID);
                }
                }
                this.state = 255;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public end(): EndContext {
        let localContext = new EndContext(this.context, this.state);
        this.enterRule(localContext, 50, MapIniParser.RULE_end);
        let _la: number;
        try {
            this.state = 262;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__12:
            case MapIniParser.WS:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 257;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 20) {
                    {
                    this.state = 256;
                    this.match(MapIniParser.WS);
                    }
                }

                this.state = 259;
                this.match(MapIniParser.T__12);
                }
                break;
            case MapIniParser.T__13:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 260;
                this.match(MapIniParser.T__13);
                }
                break;
            case MapIniParser.T__14:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 261;
                this.match(MapIniParser.T__14);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public static readonly _serializedATN: number[] = [
        4,1,21,265,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,1,0,1,0,1,
        0,5,0,56,8,0,10,0,12,0,59,9,0,1,0,1,0,1,1,1,1,3,1,65,8,1,1,2,1,2,
        1,2,1,2,1,2,5,2,72,8,2,10,2,12,2,75,9,2,1,2,1,2,1,3,1,3,1,3,1,3,
        1,3,1,3,1,3,5,3,86,8,3,10,3,12,3,89,9,3,1,3,1,3,1,4,3,4,94,8,4,1,
        4,1,4,3,4,98,8,4,1,5,1,5,1,5,1,5,1,5,5,5,105,8,5,10,5,12,5,108,9,
        5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,3,7,117,8,7,1,7,1,7,1,7,1,7,3,7,123,
        8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,135,8,8,10,8,12,
        8,138,9,8,1,8,1,8,1,9,3,9,143,8,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,
        9,152,8,9,1,9,1,9,1,9,5,9,157,8,9,10,9,12,9,160,9,9,1,9,1,9,1,10,
        3,10,165,8,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,
        1,11,1,11,1,11,5,11,180,8,11,10,11,12,11,183,9,11,1,11,1,11,1,12,
        1,12,1,12,1,12,1,12,1,12,1,12,1,12,5,12,195,8,12,10,12,12,12,198,
        9,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,5,13,210,
        8,13,10,13,12,13,213,9,13,1,13,1,13,1,14,1,14,1,15,3,15,220,8,15,
        1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,17,1,17,1,17,5,17,232,8,17,
        10,17,12,17,235,9,17,1,18,1,18,1,19,1,19,1,20,1,20,1,21,1,21,1,22,
        1,22,1,23,1,23,1,24,1,24,1,24,5,24,252,8,24,10,24,12,24,255,9,24,
        1,25,3,25,258,8,25,1,25,1,25,1,25,3,25,263,8,25,1,25,0,0,26,0,2,
        4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,
        50,0,0,277,0,57,1,0,0,0,2,64,1,0,0,0,4,66,1,0,0,0,6,78,1,0,0,0,8,
        93,1,0,0,0,10,99,1,0,0,0,12,111,1,0,0,0,14,116,1,0,0,0,16,124,1,
        0,0,0,18,142,1,0,0,0,20,164,1,0,0,0,22,171,1,0,0,0,24,186,1,0,0,
        0,26,201,1,0,0,0,28,216,1,0,0,0,30,219,1,0,0,0,32,226,1,0,0,0,34,
        228,1,0,0,0,36,236,1,0,0,0,38,238,1,0,0,0,40,240,1,0,0,0,42,242,
        1,0,0,0,44,244,1,0,0,0,46,246,1,0,0,0,48,248,1,0,0,0,50,262,1,0,
        0,0,52,56,3,2,1,0,53,56,5,19,0,0,54,56,5,20,0,0,55,52,1,0,0,0,55,
        53,1,0,0,0,55,54,1,0,0,0,56,59,1,0,0,0,57,55,1,0,0,0,57,58,1,0,0,
        0,58,60,1,0,0,0,59,57,1,0,0,0,60,61,5,0,0,1,61,1,1,0,0,0,62,65,3,
        4,2,0,63,65,3,6,3,0,64,62,1,0,0,0,64,63,1,0,0,0,65,3,1,0,0,0,66,
        67,5,1,0,0,67,68,5,20,0,0,68,69,3,44,22,0,69,73,5,19,0,0,70,72,3,
        30,15,0,71,70,1,0,0,0,72,75,1,0,0,0,73,71,1,0,0,0,73,74,1,0,0,0,
        74,76,1,0,0,0,75,73,1,0,0,0,76,77,3,50,25,0,77,5,1,0,0,0,78,79,5,
        2,0,0,79,80,5,20,0,0,80,81,3,46,23,0,81,87,5,19,0,0,82,86,3,8,4,
        0,83,86,3,28,14,0,84,86,5,19,0,0,85,82,1,0,0,0,85,83,1,0,0,0,85,
        84,1,0,0,0,86,89,1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,0,88,90,1,0,0,
        0,89,87,1,0,0,0,90,91,3,50,25,0,91,7,1,0,0,0,92,94,5,20,0,0,93,92,
        1,0,0,0,93,94,1,0,0,0,94,97,1,0,0,0,95,98,3,10,5,0,96,98,3,12,6,
        0,97,95,1,0,0,0,97,96,1,0,0,0,98,9,1,0,0,0,99,100,5,3,0,0,100,106,
        5,19,0,0,101,105,3,14,7,0,102,105,3,30,15,0,103,105,5,19,0,0,104,
        101,1,0,0,0,104,102,1,0,0,0,104,103,1,0,0,0,105,108,1,0,0,0,106,
        104,1,0,0,0,106,107,1,0,0,0,107,109,1,0,0,0,108,106,1,0,0,0,109,
        110,3,50,25,0,110,11,1,0,0,0,111,112,5,4,0,0,112,113,5,20,0,0,113,
        114,3,42,21,0,114,13,1,0,0,0,115,117,5,20,0,0,116,115,1,0,0,0,116,
        117,1,0,0,0,117,122,1,0,0,0,118,123,3,16,8,0,119,123,3,22,11,0,120,
        123,3,24,12,0,121,123,3,26,13,0,122,118,1,0,0,0,122,119,1,0,0,0,
        122,120,1,0,0,0,122,121,1,0,0,0,123,15,1,0,0,0,124,125,5,5,0,0,125,
        126,5,16,0,0,126,127,3,32,16,0,127,128,5,20,0,0,128,129,3,42,21,
        0,129,136,5,19,0,0,130,135,3,18,9,0,131,135,3,20,10,0,132,135,3,
        30,15,0,133,135,5,19,0,0,134,130,1,0,0,0,134,131,1,0,0,0,134,132,
        1,0,0,0,134,133,1,0,0,0,135,138,1,0,0,0,136,134,1,0,0,0,136,137,
        1,0,0,0,137,139,1,0,0,0,138,136,1,0,0,0,139,140,3,50,25,0,140,17,
        1,0,0,0,141,143,5,20,0,0,142,141,1,0,0,0,142,143,1,0,0,0,143,151,
        1,0,0,0,144,152,5,6,0,0,145,146,5,7,0,0,146,147,5,16,0,0,147,152,
        3,34,17,0,148,149,5,8,0,0,149,150,5,16,0,0,150,152,3,34,17,0,151,
        144,1,0,0,0,151,145,1,0,0,0,151,148,1,0,0,0,152,153,1,0,0,0,153,
        158,5,19,0,0,154,157,3,30,15,0,155,157,5,19,0,0,156,154,1,0,0,0,
        156,155,1,0,0,0,157,160,1,0,0,0,158,156,1,0,0,0,158,159,1,0,0,0,
        159,161,1,0,0,0,160,158,1,0,0,0,161,162,3,50,25,0,162,19,1,0,0,0,
        163,165,5,20,0,0,164,163,1,0,0,0,164,165,1,0,0,0,165,166,1,0,0,0,
        166,167,5,9,0,0,167,168,5,16,0,0,168,169,3,34,17,0,169,170,5,19,
        0,0,170,21,1,0,0,0,171,172,5,10,0,0,172,173,5,16,0,0,173,174,3,36,
        18,0,174,175,5,20,0,0,175,176,3,42,21,0,176,181,5,19,0,0,177,180,
        3,30,15,0,178,180,5,19,0,0,179,177,1,0,0,0,179,178,1,0,0,0,180,183,
        1,0,0,0,181,179,1,0,0,0,181,182,1,0,0,0,182,184,1,0,0,0,183,181,
        1,0,0,0,184,185,3,50,25,0,185,23,1,0,0,0,186,187,5,11,0,0,187,188,
        5,16,0,0,188,189,3,38,19,0,189,190,5,20,0,0,190,191,3,42,21,0,191,
        196,5,19,0,0,192,195,3,30,15,0,193,195,5,19,0,0,194,192,1,0,0,0,
        194,193,1,0,0,0,195,198,1,0,0,0,196,194,1,0,0,0,196,197,1,0,0,0,
        197,199,1,0,0,0,198,196,1,0,0,0,199,200,3,50,25,0,200,25,1,0,0,0,
        201,202,5,12,0,0,202,203,5,16,0,0,203,204,3,40,20,0,204,205,5,20,
        0,0,205,206,3,42,21,0,206,211,5,19,0,0,207,210,3,30,15,0,208,210,
        5,19,0,0,209,207,1,0,0,0,209,208,1,0,0,0,210,213,1,0,0,0,211,209,
        1,0,0,0,211,212,1,0,0,0,212,214,1,0,0,0,213,211,1,0,0,0,214,215,
        3,50,25,0,215,27,1,0,0,0,216,217,3,30,15,0,217,29,1,0,0,0,218,220,
        5,20,0,0,219,218,1,0,0,0,219,220,1,0,0,0,220,221,1,0,0,0,221,222,
        5,18,0,0,222,223,5,16,0,0,223,224,3,48,24,0,224,225,5,19,0,0,225,
        31,1,0,0,0,226,227,5,18,0,0,227,33,1,0,0,0,228,233,5,18,0,0,229,
        230,5,20,0,0,230,232,5,18,0,0,231,229,1,0,0,0,232,235,1,0,0,0,233,
        231,1,0,0,0,233,234,1,0,0,0,234,35,1,0,0,0,235,233,1,0,0,0,236,237,
        5,18,0,0,237,37,1,0,0,0,238,239,5,18,0,0,239,39,1,0,0,0,240,241,
        5,18,0,0,241,41,1,0,0,0,242,243,5,18,0,0,243,43,1,0,0,0,244,245,
        5,18,0,0,245,45,1,0,0,0,246,247,5,18,0,0,247,47,1,0,0,0,248,253,
        5,18,0,0,249,250,5,20,0,0,250,252,5,18,0,0,251,249,1,0,0,0,252,255,
        1,0,0,0,253,251,1,0,0,0,253,254,1,0,0,0,254,49,1,0,0,0,255,253,1,
        0,0,0,256,258,5,20,0,0,257,256,1,0,0,0,257,258,1,0,0,0,258,259,1,
        0,0,0,259,263,5,13,0,0,260,263,5,14,0,0,261,263,5,15,0,0,262,257,
        1,0,0,0,262,260,1,0,0,0,262,261,1,0,0,0,263,51,1,0,0,0,30,55,57,
        64,73,85,87,93,97,104,106,116,122,134,136,142,151,156,158,164,179,
        181,194,196,209,211,219,233,253,257,262
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!MapIniParser.__ATN) {
            MapIniParser.__ATN = new antlr.ATNDeserializer().deserialize(MapIniParser._serializedATN);
        }

        return MapIniParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(MapIniParser.literalNames, MapIniParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return MapIniParser.vocabulary;
    }

    private static readonly decisionsToDFA = MapIniParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ProgramContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EOF, 0)!;
    }
    public class_(): ClassContext[];
    public class_(i: number): ClassContext | null;
    public class_(i?: number): ClassContext[] | ClassContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ClassContext);
        }

        return this.getRuleContext(i, ClassContext);
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.NEWLINE);
    	} else {
    		return this.getToken(MapIniParser.NEWLINE, i);
    	}
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_program;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterProgram) {
             listener.enterProgram(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitProgram) {
             listener.exitProgram(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitProgram) {
            return visitor.visitProgram(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ClassContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public mappedImageClass(): MappedImageClassContext | null {
        return this.getRuleContext(0, MappedImageClassContext);
    }
    public objectClass(): ObjectClassContext | null {
        return this.getRuleContext(0, ObjectClassContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_class;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterClass) {
             listener.enterClass(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitClass) {
             listener.exitClass(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitClass) {
            return visitor.visitClass(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MappedImageClassContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode {
        return this.getToken(MapIniParser.WS, 0)!;
    }
    public mappedImage_value(): MappedImage_valueContext {
        return this.getRuleContext(0, MappedImage_valueContext)!;
    }
    public NEWLINE(): antlr.TerminalNode {
        return this.getToken(MapIniParser.NEWLINE, 0)!;
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public property(): PropertyContext[];
    public property(i: number): PropertyContext | null;
    public property(i?: number): PropertyContext[] | PropertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PropertyContext);
        }

        return this.getRuleContext(i, PropertyContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_mappedImageClass;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterMappedImageClass) {
             listener.enterMappedImageClass(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitMappedImageClass) {
             listener.exitMappedImageClass(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitMappedImageClass) {
            return visitor.visitMappedImageClass(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ObjectClassContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode {
        return this.getToken(MapIniParser.WS, 0)!;
    }
    public object_value(): Object_valueContext {
        return this.getRuleContext(0, Object_valueContext)!;
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.NEWLINE);
    	} else {
    		return this.getToken(MapIniParser.NEWLINE, i);
    	}
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public module_modifier(): Module_modifierContext[];
    public module_modifier(i: number): Module_modifierContext | null;
    public module_modifier(i?: number): Module_modifierContext[] | Module_modifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Module_modifierContext);
        }

        return this.getRuleContext(i, Module_modifierContext);
    }
    public objectProperty(): ObjectPropertyContext[];
    public objectProperty(i: number): ObjectPropertyContext | null;
    public objectProperty(i?: number): ObjectPropertyContext[] | ObjectPropertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ObjectPropertyContext);
        }

        return this.getRuleContext(i, ObjectPropertyContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_objectClass;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterObjectClass) {
             listener.enterObjectClass(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitObjectClass) {
             listener.exitObjectClass(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitObjectClass) {
            return visitor.visitObjectClass(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Module_modifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public addModule(): AddModuleContext | null {
        return this.getRuleContext(0, AddModuleContext);
    }
    public removeModule(): RemoveModuleContext | null {
        return this.getRuleContext(0, RemoveModuleContext);
    }
    public WS(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.WS, 0);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_module_modifier;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterModule_modifier) {
             listener.enterModule_modifier(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitModule_modifier) {
             listener.exitModule_modifier(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitModule_modifier) {
            return visitor.visitModule_modifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AddModuleContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.NEWLINE);
    	} else {
    		return this.getToken(MapIniParser.NEWLINE, i);
    	}
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public module_(): ModuleContext[];
    public module_(i: number): ModuleContext | null;
    public module_(i?: number): ModuleContext[] | ModuleContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ModuleContext);
        }

        return this.getRuleContext(i, ModuleContext);
    }
    public property(): PropertyContext[];
    public property(i: number): PropertyContext | null;
    public property(i?: number): PropertyContext[] | PropertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PropertyContext);
        }

        return this.getRuleContext(i, PropertyContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_addModule;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAddModule) {
             listener.enterAddModule(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAddModule) {
             listener.exitAddModule(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAddModule) {
            return visitor.visitAddModule(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RemoveModuleContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode {
        return this.getToken(MapIniParser.WS, 0)!;
    }
    public moduleTag_value(): ModuleTag_valueContext {
        return this.getRuleContext(0, ModuleTag_valueContext)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_removeModule;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterRemoveModule) {
             listener.enterRemoveModule(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitRemoveModule) {
             listener.exitRemoveModule(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitRemoveModule) {
            return visitor.visitRemoveModule(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ModuleContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public drawModule(): DrawModuleContext | null {
        return this.getRuleContext(0, DrawModuleContext);
    }
    public bodyModule(): BodyModuleContext | null {
        return this.getRuleContext(0, BodyModuleContext);
    }
    public behaviorModule(): BehaviorModuleContext | null {
        return this.getRuleContext(0, BehaviorModuleContext);
    }
    public clientModule(): ClientModuleContext | null {
        return this.getRuleContext(0, ClientModuleContext);
    }
    public WS(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.WS, 0);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_module;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterModule) {
             listener.enterModule(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitModule) {
             listener.exitModule(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitModule) {
            return visitor.visitModule(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DrawModuleContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public drawModule_type(): DrawModule_typeContext {
        return this.getRuleContext(0, DrawModule_typeContext)!;
    }
    public WS(): antlr.TerminalNode {
        return this.getToken(MapIniParser.WS, 0)!;
    }
    public moduleTag_value(): ModuleTag_valueContext {
        return this.getRuleContext(0, ModuleTag_valueContext)!;
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.NEWLINE);
    	} else {
    		return this.getToken(MapIniParser.NEWLINE, i);
    	}
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public conditionState(): ConditionStateContext[];
    public conditionState(i: number): ConditionStateContext | null;
    public conditionState(i?: number): ConditionStateContext[] | ConditionStateContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ConditionStateContext);
        }

        return this.getRuleContext(i, ConditionStateContext);
    }
    public aliasCondition(): AliasConditionContext[];
    public aliasCondition(i: number): AliasConditionContext | null;
    public aliasCondition(i?: number): AliasConditionContext[] | AliasConditionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AliasConditionContext);
        }

        return this.getRuleContext(i, AliasConditionContext);
    }
    public property(): PropertyContext[];
    public property(i: number): PropertyContext | null;
    public property(i?: number): PropertyContext[] | PropertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PropertyContext);
        }

        return this.getRuleContext(i, PropertyContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_drawModule;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterDrawModule) {
             listener.enterDrawModule(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitDrawModule) {
             listener.exitDrawModule(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitDrawModule) {
            return visitor.visitDrawModule(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ConditionStateContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.NEWLINE);
    	} else {
    		return this.getToken(MapIniParser.NEWLINE, i);
    	}
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public WS(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.WS, 0);
    }
    public property(): PropertyContext[];
    public property(i: number): PropertyContext | null;
    public property(i?: number): PropertyContext[] | PropertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PropertyContext);
        }

        return this.getRuleContext(i, PropertyContext);
    }
    public EQ(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.EQ, 0);
    }
    public conditionState_values(): ConditionState_valuesContext | null {
        return this.getRuleContext(0, ConditionState_valuesContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_conditionState;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterConditionState) {
             listener.enterConditionState(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitConditionState) {
             listener.exitConditionState(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitConditionState) {
            return visitor.visitConditionState(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AliasConditionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public conditionState_values(): ConditionState_valuesContext {
        return this.getRuleContext(0, ConditionState_valuesContext)!;
    }
    public NEWLINE(): antlr.TerminalNode {
        return this.getToken(MapIniParser.NEWLINE, 0)!;
    }
    public WS(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.WS, 0);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aliasCondition;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAliasCondition) {
             listener.enterAliasCondition(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAliasCondition) {
             listener.exitAliasCondition(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAliasCondition) {
            return visitor.visitAliasCondition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BodyModuleContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public bodyModule_type(): BodyModule_typeContext {
        return this.getRuleContext(0, BodyModule_typeContext)!;
    }
    public WS(): antlr.TerminalNode {
        return this.getToken(MapIniParser.WS, 0)!;
    }
    public moduleTag_value(): ModuleTag_valueContext {
        return this.getRuleContext(0, ModuleTag_valueContext)!;
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.NEWLINE);
    	} else {
    		return this.getToken(MapIniParser.NEWLINE, i);
    	}
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public property(): PropertyContext[];
    public property(i: number): PropertyContext | null;
    public property(i?: number): PropertyContext[] | PropertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PropertyContext);
        }

        return this.getRuleContext(i, PropertyContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_bodyModule;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterBodyModule) {
             listener.enterBodyModule(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitBodyModule) {
             listener.exitBodyModule(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitBodyModule) {
            return visitor.visitBodyModule(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BehaviorModuleContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public behaviorModule_type(): BehaviorModule_typeContext {
        return this.getRuleContext(0, BehaviorModule_typeContext)!;
    }
    public WS(): antlr.TerminalNode {
        return this.getToken(MapIniParser.WS, 0)!;
    }
    public moduleTag_value(): ModuleTag_valueContext {
        return this.getRuleContext(0, ModuleTag_valueContext)!;
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.NEWLINE);
    	} else {
    		return this.getToken(MapIniParser.NEWLINE, i);
    	}
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public property(): PropertyContext[];
    public property(i: number): PropertyContext | null;
    public property(i?: number): PropertyContext[] | PropertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PropertyContext);
        }

        return this.getRuleContext(i, PropertyContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_behaviorModule;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterBehaviorModule) {
             listener.enterBehaviorModule(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitBehaviorModule) {
             listener.exitBehaviorModule(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitBehaviorModule) {
            return visitor.visitBehaviorModule(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ClientModuleContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public clientModule_type(): ClientModule_typeContext {
        return this.getRuleContext(0, ClientModule_typeContext)!;
    }
    public WS(): antlr.TerminalNode {
        return this.getToken(MapIniParser.WS, 0)!;
    }
    public moduleTag_value(): ModuleTag_valueContext {
        return this.getRuleContext(0, ModuleTag_valueContext)!;
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.NEWLINE);
    	} else {
    		return this.getToken(MapIniParser.NEWLINE, i);
    	}
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public property(): PropertyContext[];
    public property(i: number): PropertyContext | null;
    public property(i?: number): PropertyContext[] | PropertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PropertyContext);
        }

        return this.getRuleContext(i, PropertyContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_clientModule;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterClientModule) {
             listener.enterClientModule(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitClientModule) {
             listener.exitClientModule(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitClientModule) {
            return visitor.visitClientModule(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ObjectPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public property(): PropertyContext {
        return this.getRuleContext(0, PropertyContext)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_objectProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterObjectProperty) {
             listener.enterObjectProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitObjectProperty) {
             listener.exitObjectProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitObjectProperty) {
            return visitor.visitObjectProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public property_values(): Property_valuesContext {
        return this.getRuleContext(0, Property_valuesContext)!;
    }
    public NEWLINE(): antlr.TerminalNode {
        return this.getToken(MapIniParser.NEWLINE, 0)!;
    }
    public WS(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.WS, 0);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterProperty) {
             listener.enterProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitProperty) {
             listener.exitProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitProperty) {
            return visitor.visitProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DrawModule_typeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_drawModule_type;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterDrawModule_type) {
             listener.enterDrawModule_type(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitDrawModule_type) {
             listener.exitDrawModule_type(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitDrawModule_type) {
            return visitor.visitDrawModule_type(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ConditionState_valuesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode[];
    public ID(i: number): antlr.TerminalNode | null;
    public ID(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.ID);
    	} else {
    		return this.getToken(MapIniParser.ID, i);
    	}
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_conditionState_values;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterConditionState_values) {
             listener.enterConditionState_values(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitConditionState_values) {
             listener.exitConditionState_values(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitConditionState_values) {
            return visitor.visitConditionState_values(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BodyModule_typeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_bodyModule_type;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterBodyModule_type) {
             listener.enterBodyModule_type(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitBodyModule_type) {
             listener.exitBodyModule_type(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitBodyModule_type) {
            return visitor.visitBodyModule_type(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BehaviorModule_typeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_behaviorModule_type;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterBehaviorModule_type) {
             listener.enterBehaviorModule_type(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitBehaviorModule_type) {
             listener.exitBehaviorModule_type(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitBehaviorModule_type) {
            return visitor.visitBehaviorModule_type(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ClientModule_typeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_clientModule_type;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterClientModule_type) {
             listener.enterClientModule_type(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitClientModule_type) {
             listener.exitClientModule_type(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitClientModule_type) {
            return visitor.visitClientModule_type(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ModuleTag_valueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_moduleTag_value;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterModuleTag_value) {
             listener.enterModuleTag_value(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitModuleTag_value) {
             listener.exitModuleTag_value(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitModuleTag_value) {
            return visitor.visitModuleTag_value(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MappedImage_valueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_mappedImage_value;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterMappedImage_value) {
             listener.enterMappedImage_value(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitMappedImage_value) {
             listener.exitMappedImage_value(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitMappedImage_value) {
            return visitor.visitMappedImage_value(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Object_valueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_object_value;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterObject_value) {
             listener.enterObject_value(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitObject_value) {
             listener.exitObject_value(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitObject_value) {
            return visitor.visitObject_value(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Property_valuesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode[];
    public ID(i: number): antlr.TerminalNode | null;
    public ID(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.ID);
    	} else {
    		return this.getToken(MapIniParser.ID, i);
    	}
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_property_values;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterProperty_values) {
             listener.enterProperty_values(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitProperty_values) {
             listener.exitProperty_values(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitProperty_values) {
            return visitor.visitProperty_values(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EndContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.WS, 0);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_end;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterEnd) {
             listener.enterEnd(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitEnd) {
             listener.exitEnd(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitEnd) {
            return visitor.visitEnd(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
