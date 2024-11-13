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
    public static readonly CONDITIONSTATE = 4;
    public static readonly ADDMODULE = 5;
    public static readonly REMOVEMODULE = 6;
    public static readonly EQ = 7;
    public static readonly STRING = 8;
    public static readonly ID = 9;
    public static readonly NEWLINE = 10;
    public static readonly WS = 11;
    public static readonly COMMENT = 12;
    public static readonly RULE_program = 0;
    public static readonly RULE_class = 1;
    public static readonly RULE_simpleClass = 2;
    public static readonly RULE_complexClass = 3;
    public static readonly RULE_class_identifier = 4;
    public static readonly RULE_class_value = 5;
    public static readonly RULE_module_modifier = 6;
    public static readonly RULE_addModule = 7;
    public static readonly RULE_removeModule = 8;
    public static readonly RULE_objectModules = 9;
    public static readonly RULE_module_type = 10;
    public static readonly RULE_module_name = 11;
    public static readonly RULE_moduleTag_value = 12;
    public static readonly RULE_propertyBlock = 13;
    public static readonly RULE_conditionBlock = 14;
    public static readonly RULE_property = 15;
    public static readonly RULE_property_values = 16;
    public static readonly RULE_value = 17;
    public static readonly RULE_end = 18;

    public static readonly literalNames = [
        null, "'end'", "'End'", "'END'", null, null, null, "'='"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, "CONDITIONSTATE", "ADDMODULE", "REMOVEMODULE", 
        "EQ", "STRING", "ID", "NEWLINE", "WS", "COMMENT"
    ];
    public static readonly ruleNames = [
        "program", "class", "simpleClass", "complexClass", "class_identifier", 
        "class_value", "module_modifier", "addModule", "removeModule", "objectModules", 
        "module_type", "module_name", "moduleTag_value", "propertyBlock", 
        "conditionBlock", "property", "property_values", "value", "end",
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
            this.state = 42;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 9 || _la === 10) {
                {
                this.state = 40;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.ID:
                    {
                    this.state = 38;
                    this.class_();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 39;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 44;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 45;
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
            this.state = 49;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 2, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 47;
                this.simpleClass();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 48;
                this.complexClass();
                }
                break;
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
    public simpleClass(): SimpleClassContext {
        let localContext = new SimpleClassContext(this.context, this.state);
        this.enterRule(localContext, 4, MapIniParser.RULE_simpleClass);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 51;
            this.class_identifier();
            this.state = 52;
            this.class_value();
            this.state = 53;
            this.match(MapIniParser.NEWLINE);
            this.state = 58;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1792) !== 0)) {
                {
                this.state = 56;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.STRING:
                case MapIniParser.ID:
                    {
                    this.state = 54;
                    this.property();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 55;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 60;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 61;
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
    public complexClass(): ComplexClassContext {
        let localContext = new ComplexClassContext(this.context, this.state);
        this.enterRule(localContext, 6, MapIniParser.RULE_complexClass);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 63;
            this.class_identifier();
            this.state = 67;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 9) {
                {
                {
                this.state = 64;
                this.class_value();
                }
                }
                this.state = 69;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 70;
            this.match(MapIniParser.NEWLINE);
            this.state = 78;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1888) !== 0)) {
                {
                this.state = 76;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 6, this.context) ) {
                case 1:
                    {
                    this.state = 71;
                    this.module_modifier();
                    }
                    break;
                case 2:
                    {
                    this.state = 72;
                    this.objectModules();
                    }
                    break;
                case 3:
                    {
                    this.state = 73;
                    this.propertyBlock();
                    }
                    break;
                case 4:
                    {
                    this.state = 74;
                    this.property();
                    }
                    break;
                case 5:
                    {
                    this.state = 75;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                }
                }
                this.state = 80;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 81;
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
    public class_identifier(): Class_identifierContext {
        let localContext = new Class_identifierContext(this.context, this.state);
        this.enterRule(localContext, 8, MapIniParser.RULE_class_identifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 83;
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
    public class_value(): Class_valueContext {
        let localContext = new Class_valueContext(this.context, this.state);
        this.enterRule(localContext, 10, MapIniParser.RULE_class_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 85;
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
    public module_modifier(): Module_modifierContext {
        let localContext = new Module_modifierContext(this.context, this.state);
        this.enterRule(localContext, 12, MapIniParser.RULE_module_modifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 89;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.ADDMODULE:
                {
                this.state = 87;
                this.addModule();
                }
                break;
            case MapIniParser.REMOVEMODULE:
                {
                this.state = 88;
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
        this.enterRule(localContext, 14, MapIniParser.RULE_addModule);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 91;
            this.match(MapIniParser.ADDMODULE);
            this.state = 92;
            this.match(MapIniParser.NEWLINE);
            this.state = 98;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1792) !== 0)) {
                {
                this.state = 96;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 9, this.context) ) {
                case 1:
                    {
                    this.state = 93;
                    this.objectModules();
                    }
                    break;
                case 2:
                    {
                    this.state = 94;
                    this.property();
                    }
                    break;
                case 3:
                    {
                    this.state = 95;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                }
                }
                this.state = 100;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 101;
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
        this.enterRule(localContext, 16, MapIniParser.RULE_removeModule);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 103;
            this.match(MapIniParser.REMOVEMODULE);
            this.state = 104;
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
    public objectModules(): ObjectModulesContext {
        let localContext = new ObjectModulesContext(this.context, this.state);
        this.enterRule(localContext, 18, MapIniParser.RULE_objectModules);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 106;
            this.module_type();
            this.state = 107;
            this.match(MapIniParser.EQ);
            this.state = 108;
            this.module_name();
            this.state = 109;
            this.moduleTag_value();
            this.state = 110;
            this.match(MapIniParser.NEWLINE);
            this.state = 117;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1808) !== 0)) {
                {
                this.state = 115;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 11, this.context) ) {
                case 1:
                    {
                    this.state = 111;
                    this.property();
                    }
                    break;
                case 2:
                    {
                    this.state = 112;
                    this.propertyBlock();
                    }
                    break;
                case 3:
                    {
                    this.state = 113;
                    this.conditionBlock();
                    }
                    break;
                case 4:
                    {
                    this.state = 114;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                }
                }
                this.state = 119;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 120;
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
    public module_type(): Module_typeContext {
        let localContext = new Module_typeContext(this.context, this.state);
        this.enterRule(localContext, 20, MapIniParser.RULE_module_type);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 122;
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
    public module_name(): Module_nameContext {
        let localContext = new Module_nameContext(this.context, this.state);
        this.enterRule(localContext, 22, MapIniParser.RULE_module_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 124;
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
        this.enterRule(localContext, 24, MapIniParser.RULE_moduleTag_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 126;
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
    public propertyBlock(): PropertyBlockContext {
        let localContext = new PropertyBlockContext(this.context, this.state);
        this.enterRule(localContext, 26, MapIniParser.RULE_propertyBlock);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 128;
            this.match(MapIniParser.ID);
            this.state = 129;
            this.match(MapIniParser.NEWLINE);
            this.state = 134;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1792) !== 0)) {
                {
                this.state = 132;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.STRING:
                case MapIniParser.ID:
                    {
                    this.state = 130;
                    this.property();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 131;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 136;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 137;
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
    public conditionBlock(): ConditionBlockContext {
        let localContext = new ConditionBlockContext(this.context, this.state);
        this.enterRule(localContext, 28, MapIniParser.RULE_conditionBlock);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 139;
            this.match(MapIniParser.CONDITIONSTATE);
            this.state = 140;
            this.match(MapIniParser.EQ);
            this.state = 141;
            this.property_values();
            this.state = 142;
            this.match(MapIniParser.NEWLINE);
            this.state = 147;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1792) !== 0)) {
                {
                this.state = 145;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.STRING:
                case MapIniParser.ID:
                    {
                    this.state = 143;
                    this.property();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 144;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 149;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 150;
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
    public property(): PropertyContext {
        let localContext = new PropertyContext(this.context, this.state);
        this.enterRule(localContext, 30, MapIniParser.RULE_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 152;
            this.value();
            this.state = 153;
            this.match(MapIniParser.EQ);
            this.state = 154;
            this.property_values();
            this.state = 155;
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
    public property_values(): Property_valuesContext {
        let localContext = new Property_valuesContext(this.context, this.state);
        this.enterRule(localContext, 32, MapIniParser.RULE_property_values);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 158;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 157;
                this.value();
                }
                }
                this.state = 160;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 8 || _la === 9);
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
    public value(): ValueContext {
        let localContext = new ValueContext(this.context, this.state);
        this.enterRule(localContext, 34, MapIniParser.RULE_value);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 162;
            _la = this.tokenStream.LA(1);
            if(!(_la === 8 || _la === 9)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
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
        this.enterRule(localContext, 36, MapIniParser.RULE_end);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 164;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 14) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
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

    public static readonly _serializedATN: number[] = [
        4,1,12,167,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,1,0,1,0,5,0,41,
        8,0,10,0,12,0,44,9,0,1,0,1,0,1,1,1,1,3,1,50,8,1,1,2,1,2,1,2,1,2,
        1,2,5,2,57,8,2,10,2,12,2,60,9,2,1,2,1,2,1,3,1,3,5,3,66,8,3,10,3,
        12,3,69,9,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,77,8,3,10,3,12,3,80,9,3,
        1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,3,6,90,8,6,1,7,1,7,1,7,1,7,1,7,5,
        7,97,8,7,10,7,12,7,100,9,7,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,
        9,1,9,1,9,1,9,1,9,5,9,116,8,9,10,9,12,9,119,9,9,1,9,1,9,1,10,1,10,
        1,11,1,11,1,12,1,12,1,13,1,13,1,13,1,13,5,13,133,8,13,10,13,12,13,
        136,9,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,5,14,146,8,14,10,
        14,12,14,149,9,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,16,4,16,159,
        8,16,11,16,12,16,160,1,17,1,17,1,18,1,18,1,18,0,0,19,0,2,4,6,8,10,
        12,14,16,18,20,22,24,26,28,30,32,34,36,0,2,1,0,8,9,1,0,1,3,171,0,
        42,1,0,0,0,2,49,1,0,0,0,4,51,1,0,0,0,6,63,1,0,0,0,8,83,1,0,0,0,10,
        85,1,0,0,0,12,89,1,0,0,0,14,91,1,0,0,0,16,103,1,0,0,0,18,106,1,0,
        0,0,20,122,1,0,0,0,22,124,1,0,0,0,24,126,1,0,0,0,26,128,1,0,0,0,
        28,139,1,0,0,0,30,152,1,0,0,0,32,158,1,0,0,0,34,162,1,0,0,0,36,164,
        1,0,0,0,38,41,3,2,1,0,39,41,5,10,0,0,40,38,1,0,0,0,40,39,1,0,0,0,
        41,44,1,0,0,0,42,40,1,0,0,0,42,43,1,0,0,0,43,45,1,0,0,0,44,42,1,
        0,0,0,45,46,5,0,0,1,46,1,1,0,0,0,47,50,3,4,2,0,48,50,3,6,3,0,49,
        47,1,0,0,0,49,48,1,0,0,0,50,3,1,0,0,0,51,52,3,8,4,0,52,53,3,10,5,
        0,53,58,5,10,0,0,54,57,3,30,15,0,55,57,5,10,0,0,56,54,1,0,0,0,56,
        55,1,0,0,0,57,60,1,0,0,0,58,56,1,0,0,0,58,59,1,0,0,0,59,61,1,0,0,
        0,60,58,1,0,0,0,61,62,3,36,18,0,62,5,1,0,0,0,63,67,3,8,4,0,64,66,
        3,10,5,0,65,64,1,0,0,0,66,69,1,0,0,0,67,65,1,0,0,0,67,68,1,0,0,0,
        68,70,1,0,0,0,69,67,1,0,0,0,70,78,5,10,0,0,71,77,3,12,6,0,72,77,
        3,18,9,0,73,77,3,26,13,0,74,77,3,30,15,0,75,77,5,10,0,0,76,71,1,
        0,0,0,76,72,1,0,0,0,76,73,1,0,0,0,76,74,1,0,0,0,76,75,1,0,0,0,77,
        80,1,0,0,0,78,76,1,0,0,0,78,79,1,0,0,0,79,81,1,0,0,0,80,78,1,0,0,
        0,81,82,3,36,18,0,82,7,1,0,0,0,83,84,5,9,0,0,84,9,1,0,0,0,85,86,
        5,9,0,0,86,11,1,0,0,0,87,90,3,14,7,0,88,90,3,16,8,0,89,87,1,0,0,
        0,89,88,1,0,0,0,90,13,1,0,0,0,91,92,5,5,0,0,92,98,5,10,0,0,93,97,
        3,18,9,0,94,97,3,30,15,0,95,97,5,10,0,0,96,93,1,0,0,0,96,94,1,0,
        0,0,96,95,1,0,0,0,97,100,1,0,0,0,98,96,1,0,0,0,98,99,1,0,0,0,99,
        101,1,0,0,0,100,98,1,0,0,0,101,102,3,36,18,0,102,15,1,0,0,0,103,
        104,5,6,0,0,104,105,3,24,12,0,105,17,1,0,0,0,106,107,3,20,10,0,107,
        108,5,7,0,0,108,109,3,22,11,0,109,110,3,24,12,0,110,117,5,10,0,0,
        111,116,3,30,15,0,112,116,3,26,13,0,113,116,3,28,14,0,114,116,5,
        10,0,0,115,111,1,0,0,0,115,112,1,0,0,0,115,113,1,0,0,0,115,114,1,
        0,0,0,116,119,1,0,0,0,117,115,1,0,0,0,117,118,1,0,0,0,118,120,1,
        0,0,0,119,117,1,0,0,0,120,121,3,36,18,0,121,19,1,0,0,0,122,123,5,
        9,0,0,123,21,1,0,0,0,124,125,5,9,0,0,125,23,1,0,0,0,126,127,5,9,
        0,0,127,25,1,0,0,0,128,129,5,9,0,0,129,134,5,10,0,0,130,133,3,30,
        15,0,131,133,5,10,0,0,132,130,1,0,0,0,132,131,1,0,0,0,133,136,1,
        0,0,0,134,132,1,0,0,0,134,135,1,0,0,0,135,137,1,0,0,0,136,134,1,
        0,0,0,137,138,3,36,18,0,138,27,1,0,0,0,139,140,5,4,0,0,140,141,5,
        7,0,0,141,142,3,32,16,0,142,147,5,10,0,0,143,146,3,30,15,0,144,146,
        5,10,0,0,145,143,1,0,0,0,145,144,1,0,0,0,146,149,1,0,0,0,147,145,
        1,0,0,0,147,148,1,0,0,0,148,150,1,0,0,0,149,147,1,0,0,0,150,151,
        3,36,18,0,151,29,1,0,0,0,152,153,3,34,17,0,153,154,5,7,0,0,154,155,
        3,32,16,0,155,156,5,10,0,0,156,31,1,0,0,0,157,159,3,34,17,0,158,
        157,1,0,0,0,159,160,1,0,0,0,160,158,1,0,0,0,160,161,1,0,0,0,161,
        33,1,0,0,0,162,163,7,0,0,0,163,35,1,0,0,0,164,165,7,1,0,0,165,37,
        1,0,0,0,18,40,42,49,56,58,67,76,78,89,96,98,115,117,132,134,145,
        147,160
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
    public simpleClass(): SimpleClassContext | null {
        return this.getRuleContext(0, SimpleClassContext);
    }
    public complexClass(): ComplexClassContext | null {
        return this.getRuleContext(0, ComplexClassContext);
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


export class SimpleClassContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public class_identifier(): Class_identifierContext {
        return this.getRuleContext(0, Class_identifierContext)!;
    }
    public class_value(): Class_valueContext {
        return this.getRuleContext(0, Class_valueContext)!;
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
        return MapIniParser.RULE_simpleClass;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterSimpleClass) {
             listener.enterSimpleClass(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitSimpleClass) {
             listener.exitSimpleClass(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitSimpleClass) {
            return visitor.visitSimpleClass(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ComplexClassContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public class_identifier(): Class_identifierContext {
        return this.getRuleContext(0, Class_identifierContext)!;
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
    public class_value(): Class_valueContext[];
    public class_value(i: number): Class_valueContext | null;
    public class_value(i?: number): Class_valueContext[] | Class_valueContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Class_valueContext);
        }

        return this.getRuleContext(i, Class_valueContext);
    }
    public module_modifier(): Module_modifierContext[];
    public module_modifier(i: number): Module_modifierContext | null;
    public module_modifier(i?: number): Module_modifierContext[] | Module_modifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Module_modifierContext);
        }

        return this.getRuleContext(i, Module_modifierContext);
    }
    public objectModules(): ObjectModulesContext[];
    public objectModules(i: number): ObjectModulesContext | null;
    public objectModules(i?: number): ObjectModulesContext[] | ObjectModulesContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ObjectModulesContext);
        }

        return this.getRuleContext(i, ObjectModulesContext);
    }
    public propertyBlock(): PropertyBlockContext[];
    public propertyBlock(i: number): PropertyBlockContext | null;
    public propertyBlock(i?: number): PropertyBlockContext[] | PropertyBlockContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PropertyBlockContext);
        }

        return this.getRuleContext(i, PropertyBlockContext);
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
        return MapIniParser.RULE_complexClass;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterComplexClass) {
             listener.enterComplexClass(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitComplexClass) {
             listener.exitComplexClass(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitComplexClass) {
            return visitor.visitComplexClass(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Class_identifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_class_identifier;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterClass_identifier) {
             listener.enterClass_identifier(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitClass_identifier) {
             listener.exitClass_identifier(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitClass_identifier) {
            return visitor.visitClass_identifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Class_valueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_class_value;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterClass_value) {
             listener.enterClass_value(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitClass_value) {
             listener.exitClass_value(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitClass_value) {
            return visitor.visitClass_value(this);
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
    public ADDMODULE(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ADDMODULE, 0)!;
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
    public objectModules(): ObjectModulesContext[];
    public objectModules(i: number): ObjectModulesContext | null;
    public objectModules(i?: number): ObjectModulesContext[] | ObjectModulesContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ObjectModulesContext);
        }

        return this.getRuleContext(i, ObjectModulesContext);
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
    public REMOVEMODULE(): antlr.TerminalNode {
        return this.getToken(MapIniParser.REMOVEMODULE, 0)!;
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


export class ObjectModulesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public module_type(): Module_typeContext {
        return this.getRuleContext(0, Module_typeContext)!;
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public module_name(): Module_nameContext {
        return this.getRuleContext(0, Module_nameContext)!;
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
    public propertyBlock(): PropertyBlockContext[];
    public propertyBlock(i: number): PropertyBlockContext | null;
    public propertyBlock(i?: number): PropertyBlockContext[] | PropertyBlockContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PropertyBlockContext);
        }

        return this.getRuleContext(i, PropertyBlockContext);
    }
    public conditionBlock(): ConditionBlockContext[];
    public conditionBlock(i: number): ConditionBlockContext | null;
    public conditionBlock(i?: number): ConditionBlockContext[] | ConditionBlockContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ConditionBlockContext);
        }

        return this.getRuleContext(i, ConditionBlockContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_objectModules;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterObjectModules) {
             listener.enterObjectModules(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitObjectModules) {
             listener.exitObjectModules(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitObjectModules) {
            return visitor.visitObjectModules(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Module_typeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_module_type;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterModule_type) {
             listener.enterModule_type(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitModule_type) {
             listener.exitModule_type(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitModule_type) {
            return visitor.visitModule_type(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Module_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_module_name;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterModule_name) {
             listener.enterModule_name(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitModule_name) {
             listener.exitModule_name(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitModule_name) {
            return visitor.visitModule_name(this);
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


export class PropertyBlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
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
        return MapIniParser.RULE_propertyBlock;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterPropertyBlock) {
             listener.enterPropertyBlock(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitPropertyBlock) {
             listener.exitPropertyBlock(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitPropertyBlock) {
            return visitor.visitPropertyBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ConditionBlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CONDITIONSTATE(): antlr.TerminalNode {
        return this.getToken(MapIniParser.CONDITIONSTATE, 0)!;
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public property_values(): Property_valuesContext {
        return this.getRuleContext(0, Property_valuesContext)!;
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
        return MapIniParser.RULE_conditionBlock;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterConditionBlock) {
             listener.enterConditionBlock(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitConditionBlock) {
             listener.exitConditionBlock(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitConditionBlock) {
            return visitor.visitConditionBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public value(): ValueContext {
        return this.getRuleContext(0, ValueContext)!;
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


export class Property_valuesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public value(): ValueContext[];
    public value(i: number): ValueContext | null;
    public value(i?: number): ValueContext[] | ValueContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueContext);
        }

        return this.getRuleContext(i, ValueContext);
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


export class ValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.ID, 0);
    }
    public STRING(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.STRING, 0);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_value;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterValue) {
             listener.enterValue(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitValue) {
             listener.exitValue(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitValue) {
            return visitor.visitValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EndContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
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
