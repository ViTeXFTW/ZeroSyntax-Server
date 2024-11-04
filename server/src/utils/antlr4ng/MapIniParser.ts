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
    public static readonly T__15 = 16;
    public static readonly T__16 = 17;
    public static readonly T__17 = 18;
    public static readonly T__18 = 19;
    public static readonly T__19 = 20;
    public static readonly EQ = 21;
    public static readonly STRING = 22;
    public static readonly ID = 23;
    public static readonly NEWLINE = 24;
    public static readonly WS = 25;
    public static readonly COMMENT = 26;
    public static readonly RULE_program = 0;
    public static readonly RULE_class = 1;
    public static readonly RULE_mappedImageClass = 2;
    public static readonly RULE_objectClass = 3;
    public static readonly RULE_module_modifier = 4;
    public static readonly RULE_addModule = 5;
    public static readonly RULE_removeModule = 6;
    public static readonly RULE_module = 7;
    public static readonly RULE_objectSets = 8;
    public static readonly RULE_objectWeaponSet = 9;
    public static readonly RULE_objectWeaponSetProperty = 10;
    public static readonly RULE_objectArmorSet = 11;
    public static readonly RULE_objectArmorSetProperty = 12;
    public static readonly RULE_objectPrerequisite = 13;
    public static readonly RULE_objectPrerequisiteProperty = 14;
    public static readonly RULE_objectUnitSpecificSounds = 15;
    public static readonly RULE_objectUnitSpecificSoundsProperty = 16;
    public static readonly RULE_objectUnitSpecificFX = 17;
    public static readonly RULE_objectUnitSpecificFXProperty = 18;
    public static readonly RULE_drawModule = 19;
    public static readonly RULE_conditionState = 20;
    public static readonly RULE_defaultConditionStateBlock = 21;
    public static readonly RULE_conditionStateBlock = 22;
    public static readonly RULE_transitionStateBlock = 23;
    public static readonly RULE_aliasCondition = 24;
    public static readonly RULE_bodyModule = 25;
    public static readonly RULE_bodyModuleProperty = 26;
    public static readonly RULE_behaviorModule = 27;
    public static readonly RULE_behaviorModuleProperty = 28;
    public static readonly RULE_clientModule = 29;
    public static readonly RULE_clientModuleProperty = 30;
    public static readonly RULE_objectProperty = 31;
    public static readonly RULE_drawModuleProperty = 32;
    public static readonly RULE_conditionStateProperty = 33;
    public static readonly RULE_property = 34;
    public static readonly RULE_drawModule_type = 35;
    public static readonly RULE_conditionState_values = 36;
    public static readonly RULE_bodyModule_type = 37;
    public static readonly RULE_behaviorModule_type = 38;
    public static readonly RULE_clientModule_type = 39;
    public static readonly RULE_moduleTag_value = 40;
    public static readonly RULE_mappedImage_value = 41;
    public static readonly RULE_object_value = 42;
    public static readonly RULE_locomotor_modifier = 43;
    public static readonly RULE_property_value = 44;
    public static readonly RULE_property_values = 45;
    public static readonly RULE_end = 46;

    public static readonly literalNames = [
        null, "'MappedImage'", "'Object'", "'AddModule'", "'RemoveModule'", 
        "'WeaponSet'", "'ArmorSet'", "'Prerequisites'", "'UnitSpecificSounds'", 
        "'UnitSpecificFX'", "'Draw'", "'DefaultConditionState'", "'ConditionState'", 
        "'TransitionState'", "'AliasConditionState'", "'Body'", "'Behavior'", 
        "'ClientUpdate'", "'End'", "'end'", "'END'", "'='"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, "EQ", 
        "STRING", "ID", "NEWLINE", "WS", "COMMENT"
    ];
    public static readonly ruleNames = [
        "program", "class", "mappedImageClass", "objectClass", "module_modifier", 
        "addModule", "removeModule", "module", "objectSets", "objectWeaponSet", 
        "objectWeaponSetProperty", "objectArmorSet", "objectArmorSetProperty", 
        "objectPrerequisite", "objectPrerequisiteProperty", "objectUnitSpecificSounds", 
        "objectUnitSpecificSoundsProperty", "objectUnitSpecificFX", "objectUnitSpecificFXProperty", 
        "drawModule", "conditionState", "defaultConditionStateBlock", "conditionStateBlock", 
        "transitionStateBlock", "aliasCondition", "bodyModule", "bodyModuleProperty", 
        "behaviorModule", "behaviorModuleProperty", "clientModule", "clientModuleProperty", 
        "objectProperty", "drawModuleProperty", "conditionStateProperty", 
        "property", "drawModule_type", "conditionState_values", "bodyModule_type", 
        "behaviorModule_type", "clientModule_type", "moduleTag_value", "mappedImage_value", 
        "object_value", "locomotor_modifier", "property_value", "property_values", 
        "end",
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
            this.state = 98;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 16777222) !== 0)) {
                {
                this.state = 96;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.T__0:
                case MapIniParser.T__1:
                    {
                    this.state = 94;
                    this.class_();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 95;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 100;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 101;
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
            this.state = 105;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__0:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 103;
                this.mappedImageClass();
                }
                break;
            case MapIniParser.T__1:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 104;
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
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 107;
            this.match(MapIniParser.T__0);
            this.state = 108;
            this.mappedImage_value();
            this.state = 109;
            this.match(MapIniParser.NEWLINE);
            this.state = 113;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 23) {
                {
                {
                this.state = 110;
                this.property();
                }
                }
                this.state = 115;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 116;
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
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 118;
            this.match(MapIniParser.T__1);
            this.state = 119;
            this.object_value();
            this.state = 120;
            this.match(MapIniParser.NEWLINE);
            this.state = 130;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 25397240) !== 0)) {
                {
                this.state = 128;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.T__2:
                case MapIniParser.T__3:
                    {
                    this.state = 121;
                    this.module_modifier();
                    }
                    break;
                case MapIniParser.T__9:
                case MapIniParser.T__14:
                case MapIniParser.T__15:
                case MapIniParser.T__16:
                    {
                    this.state = 122;
                    this.module_();
                    }
                    break;
                case MapIniParser.ID:
                    {
                    this.state = 123;
                    this.objectProperty();
                    }
                    break;
                case MapIniParser.T__4:
                case MapIniParser.T__5:
                case MapIniParser.T__6:
                    {
                    this.state = 124;
                    this.objectSets();
                    }
                    break;
                case MapIniParser.T__7:
                    {
                    this.state = 125;
                    this.objectUnitSpecificSounds();
                    }
                    break;
                case MapIniParser.T__8:
                    {
                    this.state = 126;
                    this.objectUnitSpecificFX();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 127;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 132;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 133;
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
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 137;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__2:
                {
                this.state = 135;
                this.addModule();
                }
                break;
            case MapIniParser.T__3:
                {
                this.state = 136;
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
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 139;
            this.match(MapIniParser.T__2);
            this.state = 140;
            this.match(MapIniParser.NEWLINE);
            this.state = 146;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 25396224) !== 0)) {
                {
                this.state = 144;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.T__9:
                case MapIniParser.T__14:
                case MapIniParser.T__15:
                case MapIniParser.T__16:
                    {
                    this.state = 141;
                    this.module_();
                    }
                    break;
                case MapIniParser.ID:
                    {
                    this.state = 142;
                    this.objectProperty();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 143;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 148;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 149;
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
            this.state = 151;
            this.match(MapIniParser.T__3);
            this.state = 152;
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
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 158;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__9:
                {
                this.state = 154;
                this.drawModule();
                }
                break;
            case MapIniParser.T__14:
                {
                this.state = 155;
                this.bodyModule();
                }
                break;
            case MapIniParser.T__15:
                {
                this.state = 156;
                this.behaviorModule();
                }
                break;
            case MapIniParser.T__16:
                {
                this.state = 157;
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
    public objectSets(): ObjectSetsContext {
        let localContext = new ObjectSetsContext(this.context, this.state);
        this.enterRule(localContext, 16, MapIniParser.RULE_objectSets);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 163;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__4:
                {
                this.state = 160;
                this.objectWeaponSet();
                }
                break;
            case MapIniParser.T__5:
                {
                this.state = 161;
                this.objectArmorSet();
                }
                break;
            case MapIniParser.T__6:
                {
                this.state = 162;
                this.objectPrerequisite();
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
    public objectWeaponSet(): ObjectWeaponSetContext {
        let localContext = new ObjectWeaponSetContext(this.context, this.state);
        this.enterRule(localContext, 18, MapIniParser.RULE_objectWeaponSet);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 165;
            this.match(MapIniParser.T__4);
            this.state = 166;
            this.match(MapIniParser.NEWLINE);
            this.state = 171;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 23 || _la === 24) {
                {
                this.state = 169;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.ID:
                    {
                    this.state = 167;
                    this.objectWeaponSetProperty();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 168;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 173;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 174;
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
    public objectWeaponSetProperty(): ObjectWeaponSetPropertyContext {
        let localContext = new ObjectWeaponSetPropertyContext(this.context, this.state);
        this.enterRule(localContext, 20, MapIniParser.RULE_objectWeaponSetProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 176;
            this.match(MapIniParser.ID);
            this.state = 177;
            this.match(MapIniParser.EQ);
            this.state = 178;
            this.property_values();
            this.state = 179;
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
    public objectArmorSet(): ObjectArmorSetContext {
        let localContext = new ObjectArmorSetContext(this.context, this.state);
        this.enterRule(localContext, 22, MapIniParser.RULE_objectArmorSet);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 181;
            this.match(MapIniParser.T__5);
            this.state = 182;
            this.match(MapIniParser.NEWLINE);
            this.state = 187;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 23 || _la === 24) {
                {
                this.state = 185;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.ID:
                    {
                    this.state = 183;
                    this.objectArmorSetProperty();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 184;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 189;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 190;
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
    public objectArmorSetProperty(): ObjectArmorSetPropertyContext {
        let localContext = new ObjectArmorSetPropertyContext(this.context, this.state);
        this.enterRule(localContext, 24, MapIniParser.RULE_objectArmorSetProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 192;
            this.match(MapIniParser.ID);
            this.state = 193;
            this.match(MapIniParser.EQ);
            this.state = 194;
            this.property_values();
            this.state = 195;
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
    public objectPrerequisite(): ObjectPrerequisiteContext {
        let localContext = new ObjectPrerequisiteContext(this.context, this.state);
        this.enterRule(localContext, 26, MapIniParser.RULE_objectPrerequisite);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 197;
            this.match(MapIniParser.T__6);
            this.state = 198;
            this.match(MapIniParser.NEWLINE);
            this.state = 203;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 23 || _la === 24) {
                {
                this.state = 201;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.ID:
                    {
                    this.state = 199;
                    this.objectPrerequisiteProperty();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 200;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 205;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 206;
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
    public objectPrerequisiteProperty(): ObjectPrerequisitePropertyContext {
        let localContext = new ObjectPrerequisitePropertyContext(this.context, this.state);
        this.enterRule(localContext, 28, MapIniParser.RULE_objectPrerequisiteProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 208;
            this.match(MapIniParser.ID);
            this.state = 209;
            this.match(MapIniParser.EQ);
            this.state = 210;
            this.property_values();
            this.state = 211;
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
    public objectUnitSpecificSounds(): ObjectUnitSpecificSoundsContext {
        let localContext = new ObjectUnitSpecificSoundsContext(this.context, this.state);
        this.enterRule(localContext, 30, MapIniParser.RULE_objectUnitSpecificSounds);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 213;
            this.match(MapIniParser.T__7);
            this.state = 214;
            this.match(MapIniParser.NEWLINE);
            this.state = 219;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 23 || _la === 24) {
                {
                this.state = 217;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.ID:
                    {
                    this.state = 215;
                    this.objectUnitSpecificSoundsProperty();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 216;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 221;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 222;
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
    public objectUnitSpecificSoundsProperty(): ObjectUnitSpecificSoundsPropertyContext {
        let localContext = new ObjectUnitSpecificSoundsPropertyContext(this.context, this.state);
        this.enterRule(localContext, 32, MapIniParser.RULE_objectUnitSpecificSoundsProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 224;
            this.match(MapIniParser.ID);
            this.state = 225;
            this.match(MapIniParser.EQ);
            this.state = 226;
            this.property_values();
            this.state = 227;
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
    public objectUnitSpecificFX(): ObjectUnitSpecificFXContext {
        let localContext = new ObjectUnitSpecificFXContext(this.context, this.state);
        this.enterRule(localContext, 34, MapIniParser.RULE_objectUnitSpecificFX);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 229;
            this.match(MapIniParser.T__8);
            this.state = 230;
            this.match(MapIniParser.NEWLINE);
            this.state = 235;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 23 || _la === 24) {
                {
                this.state = 233;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.ID:
                    {
                    this.state = 231;
                    this.objectUnitSpecificFXProperty();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 232;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 237;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 238;
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
    public objectUnitSpecificFXProperty(): ObjectUnitSpecificFXPropertyContext {
        let localContext = new ObjectUnitSpecificFXPropertyContext(this.context, this.state);
        this.enterRule(localContext, 36, MapIniParser.RULE_objectUnitSpecificFXProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 240;
            this.match(MapIniParser.ID);
            this.state = 241;
            this.match(MapIniParser.EQ);
            this.state = 242;
            this.property_values();
            this.state = 243;
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
    public drawModule(): DrawModuleContext {
        let localContext = new DrawModuleContext(this.context, this.state);
        this.enterRule(localContext, 38, MapIniParser.RULE_drawModule);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 245;
            this.match(MapIniParser.T__9);
            this.state = 246;
            this.match(MapIniParser.EQ);
            this.state = 247;
            this.drawModule_type();
            this.state = 248;
            this.moduleTag_value();
            this.state = 249;
            this.match(MapIniParser.NEWLINE);
            this.state = 256;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 25196544) !== 0)) {
                {
                this.state = 254;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.T__10:
                case MapIniParser.T__11:
                case MapIniParser.T__12:
                    {
                    this.state = 250;
                    this.conditionState();
                    }
                    break;
                case MapIniParser.T__13:
                    {
                    this.state = 251;
                    this.aliasCondition();
                    }
                    break;
                case MapIniParser.ID:
                    {
                    this.state = 252;
                    this.drawModuleProperty();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 253;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 258;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 259;
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
        this.enterRule(localContext, 40, MapIniParser.RULE_conditionState);
        try {
            this.state = 264;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__10:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 261;
                this.defaultConditionStateBlock();
                }
                break;
            case MapIniParser.T__11:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 262;
                this.conditionStateBlock();
                }
                break;
            case MapIniParser.T__12:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 263;
                this.transitionStateBlock();
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
    public defaultConditionStateBlock(): DefaultConditionStateBlockContext {
        let localContext = new DefaultConditionStateBlockContext(this.context, this.state);
        this.enterRule(localContext, 42, MapIniParser.RULE_defaultConditionStateBlock);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 266;
            this.match(MapIniParser.T__10);
            this.state = 267;
            this.match(MapIniParser.NEWLINE);
            this.state = 272;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 25, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    this.state = 270;
                    this.errorHandler.sync(this);
                    switch (this.tokenStream.LA(1)) {
                    case MapIniParser.ID:
                        {
                        this.state = 268;
                        this.conditionStateProperty();
                        }
                        break;
                    case MapIniParser.NEWLINE:
                        {
                        this.state = 269;
                        this.match(MapIniParser.NEWLINE);
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    }
                }
                this.state = 274;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 25, this.context);
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
    public conditionStateBlock(): ConditionStateBlockContext {
        let localContext = new ConditionStateBlockContext(this.context, this.state);
        this.enterRule(localContext, 44, MapIniParser.RULE_conditionStateBlock);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 275;
            this.match(MapIniParser.T__11);
            this.state = 276;
            this.match(MapIniParser.EQ);
            this.state = 277;
            this.conditionState_values();
            this.state = 278;
            this.match(MapIniParser.NEWLINE);
            this.state = 283;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 23 || _la === 24) {
                {
                this.state = 281;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.ID:
                    {
                    this.state = 279;
                    this.conditionStateProperty();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 280;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 285;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 286;
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
    public transitionStateBlock(): TransitionStateBlockContext {
        let localContext = new TransitionStateBlockContext(this.context, this.state);
        this.enterRule(localContext, 46, MapIniParser.RULE_transitionStateBlock);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 288;
            this.match(MapIniParser.T__12);
            this.state = 289;
            this.match(MapIniParser.EQ);
            this.state = 290;
            this.conditionState_values();
            this.state = 291;
            this.match(MapIniParser.NEWLINE);
            this.state = 296;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 23 || _la === 24) {
                {
                this.state = 294;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.ID:
                    {
                    this.state = 292;
                    this.conditionStateProperty();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 293;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 298;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 299;
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
        this.enterRule(localContext, 48, MapIniParser.RULE_aliasCondition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 301;
            this.match(MapIniParser.T__13);
            this.state = 302;
            this.match(MapIniParser.EQ);
            this.state = 303;
            this.conditionState_values();
            this.state = 304;
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
        this.enterRule(localContext, 50, MapIniParser.RULE_bodyModule);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 306;
            this.match(MapIniParser.T__14);
            this.state = 307;
            this.match(MapIniParser.EQ);
            this.state = 308;
            this.bodyModule_type();
            this.state = 309;
            this.moduleTag_value();
            this.state = 310;
            this.match(MapIniParser.NEWLINE);
            this.state = 315;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 23 || _la === 24) {
                {
                this.state = 313;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.ID:
                    {
                    this.state = 311;
                    this.bodyModuleProperty();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 312;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 317;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 318;
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
    public bodyModuleProperty(): BodyModulePropertyContext {
        let localContext = new BodyModulePropertyContext(this.context, this.state);
        this.enterRule(localContext, 52, MapIniParser.RULE_bodyModuleProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 320;
            this.match(MapIniParser.ID);
            this.state = 321;
            this.match(MapIniParser.EQ);
            this.state = 322;
            this.property_values();
            this.state = 323;
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
    public behaviorModule(): BehaviorModuleContext {
        let localContext = new BehaviorModuleContext(this.context, this.state);
        this.enterRule(localContext, 54, MapIniParser.RULE_behaviorModule);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 325;
            this.match(MapIniParser.T__15);
            this.state = 326;
            this.match(MapIniParser.EQ);
            this.state = 327;
            this.behaviorModule_type();
            this.state = 328;
            this.moduleTag_value();
            this.state = 329;
            this.match(MapIniParser.NEWLINE);
            this.state = 334;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 23 || _la === 24) {
                {
                this.state = 332;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.ID:
                    {
                    this.state = 330;
                    this.behaviorModuleProperty();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 331;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 336;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 337;
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
    public behaviorModuleProperty(): BehaviorModulePropertyContext {
        let localContext = new BehaviorModulePropertyContext(this.context, this.state);
        this.enterRule(localContext, 56, MapIniParser.RULE_behaviorModuleProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 339;
            this.match(MapIniParser.ID);
            this.state = 340;
            this.match(MapIniParser.EQ);
            this.state = 341;
            this.property_values();
            this.state = 342;
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
    public clientModule(): ClientModuleContext {
        let localContext = new ClientModuleContext(this.context, this.state);
        this.enterRule(localContext, 58, MapIniParser.RULE_clientModule);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 344;
            this.match(MapIniParser.T__16);
            this.state = 345;
            this.match(MapIniParser.EQ);
            this.state = 346;
            this.clientModule_type();
            this.state = 347;
            this.moduleTag_value();
            this.state = 348;
            this.match(MapIniParser.NEWLINE);
            this.state = 353;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 23 || _la === 24) {
                {
                this.state = 351;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.ID:
                    {
                    this.state = 349;
                    this.clientModuleProperty();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 350;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 355;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 356;
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
    public clientModuleProperty(): ClientModulePropertyContext {
        let localContext = new ClientModulePropertyContext(this.context, this.state);
        this.enterRule(localContext, 60, MapIniParser.RULE_clientModuleProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 358;
            this.match(MapIniParser.ID);
            this.state = 359;
            this.match(MapIniParser.EQ);
            this.state = 360;
            this.property_values();
            this.state = 361;
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
    public objectProperty(): ObjectPropertyContext {
        let localContext = new ObjectPropertyContext(this.context, this.state);
        this.enterRule(localContext, 62, MapIniParser.RULE_objectProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 363;
            this.match(MapIniParser.ID);
            this.state = 364;
            this.match(MapIniParser.EQ);
            this.state = 365;
            this.property_values();
            this.state = 366;
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
    public drawModuleProperty(): DrawModulePropertyContext {
        let localContext = new DrawModulePropertyContext(this.context, this.state);
        this.enterRule(localContext, 64, MapIniParser.RULE_drawModuleProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 368;
            this.match(MapIniParser.ID);
            this.state = 369;
            this.match(MapIniParser.EQ);
            this.state = 370;
            this.property_values();
            this.state = 371;
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
    public conditionStateProperty(): ConditionStatePropertyContext {
        let localContext = new ConditionStatePropertyContext(this.context, this.state);
        this.enterRule(localContext, 66, MapIniParser.RULE_conditionStateProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 373;
            this.match(MapIniParser.ID);
            this.state = 374;
            this.match(MapIniParser.EQ);
            this.state = 375;
            this.property_values();
            this.state = 376;
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
    public property(): PropertyContext {
        let localContext = new PropertyContext(this.context, this.state);
        this.enterRule(localContext, 68, MapIniParser.RULE_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 378;
            this.match(MapIniParser.ID);
            this.state = 379;
            this.match(MapIniParser.EQ);
            this.state = 380;
            this.property_values();
            this.state = 381;
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
        this.enterRule(localContext, 70, MapIniParser.RULE_drawModule_type);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 383;
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
        this.enterRule(localContext, 72, MapIniParser.RULE_conditionState_values);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 385;
            this.match(MapIniParser.ID);
            this.state = 389;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 23) {
                {
                {
                this.state = 386;
                this.match(MapIniParser.ID);
                }
                }
                this.state = 391;
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
        this.enterRule(localContext, 74, MapIniParser.RULE_bodyModule_type);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 392;
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
        this.enterRule(localContext, 76, MapIniParser.RULE_behaviorModule_type);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 394;
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
        this.enterRule(localContext, 78, MapIniParser.RULE_clientModule_type);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 396;
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
        this.enterRule(localContext, 80, MapIniParser.RULE_moduleTag_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 398;
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
        this.enterRule(localContext, 82, MapIniParser.RULE_mappedImage_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 400;
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
        this.enterRule(localContext, 84, MapIniParser.RULE_object_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 402;
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
    public locomotor_modifier(): Locomotor_modifierContext {
        let localContext = new Locomotor_modifierContext(this.context, this.state);
        this.enterRule(localContext, 86, MapIniParser.RULE_locomotor_modifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 404;
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
    public property_value(): Property_valueContext {
        let localContext = new Property_valueContext(this.context, this.state);
        this.enterRule(localContext, 88, MapIniParser.RULE_property_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 406;
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
        this.enterRule(localContext, 90, MapIniParser.RULE_property_values);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 408;
            this.match(MapIniParser.ID);
            this.state = 412;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 23) {
                {
                {
                this.state = 409;
                this.match(MapIniParser.ID);
                }
                }
                this.state = 414;
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
        this.enterRule(localContext, 92, MapIniParser.RULE_end);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 415;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1835008) !== 0))) {
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
        4,1,26,418,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,
        7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,
        2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,
        7,46,1,0,1,0,5,0,97,8,0,10,0,12,0,100,9,0,1,0,1,0,1,1,1,1,3,1,106,
        8,1,1,2,1,2,1,2,1,2,5,2,112,8,2,10,2,12,2,115,9,2,1,2,1,2,1,3,1,
        3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,129,8,3,10,3,12,3,132,9,3,
        1,3,1,3,1,4,1,4,3,4,138,8,4,1,5,1,5,1,5,1,5,1,5,5,5,145,8,5,10,5,
        12,5,148,9,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,7,1,7,3,7,159,8,7,1,8,
        1,8,1,8,3,8,164,8,8,1,9,1,9,1,9,1,9,5,9,170,8,9,10,9,12,9,173,9,
        9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,5,11,186,
        8,11,10,11,12,11,189,9,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,13,
        1,13,1,13,1,13,5,13,202,8,13,10,13,12,13,205,9,13,1,13,1,13,1,14,
        1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,5,15,218,8,15,10,15,12,15,
        221,9,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,
        5,17,234,8,17,10,17,12,17,237,9,17,1,17,1,17,1,18,1,18,1,18,1,18,
        1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,5,19,255,8,19,
        10,19,12,19,258,9,19,1,19,1,19,1,20,1,20,1,20,3,20,265,8,20,1,21,
        1,21,1,21,1,21,5,21,271,8,21,10,21,12,21,274,9,21,1,22,1,22,1,22,
        1,22,1,22,1,22,5,22,282,8,22,10,22,12,22,285,9,22,1,22,1,22,1,23,
        1,23,1,23,1,23,1,23,1,23,5,23,295,8,23,10,23,12,23,298,9,23,1,23,
        1,23,1,24,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,
        5,25,314,8,25,10,25,12,25,317,9,25,1,25,1,25,1,26,1,26,1,26,1,26,
        1,26,1,27,1,27,1,27,1,27,1,27,1,27,1,27,5,27,333,8,27,10,27,12,27,
        336,9,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,
        1,29,1,29,1,29,5,29,352,8,29,10,29,12,29,355,9,29,1,29,1,29,1,30,
        1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,1,32,1,32,1,32,1,32,
        1,32,1,33,1,33,1,33,1,33,1,33,1,34,1,34,1,34,1,34,1,34,1,35,1,35,
        1,36,1,36,5,36,388,8,36,10,36,12,36,391,9,36,1,37,1,37,1,38,1,38,
        1,39,1,39,1,40,1,40,1,41,1,41,1,42,1,42,1,43,1,43,1,44,1,44,1,45,
        1,45,5,45,411,8,45,10,45,12,45,414,9,45,1,46,1,46,1,46,0,0,47,0,
        2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,
        48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,
        92,0,1,1,0,18,20,420,0,98,1,0,0,0,2,105,1,0,0,0,4,107,1,0,0,0,6,
        118,1,0,0,0,8,137,1,0,0,0,10,139,1,0,0,0,12,151,1,0,0,0,14,158,1,
        0,0,0,16,163,1,0,0,0,18,165,1,0,0,0,20,176,1,0,0,0,22,181,1,0,0,
        0,24,192,1,0,0,0,26,197,1,0,0,0,28,208,1,0,0,0,30,213,1,0,0,0,32,
        224,1,0,0,0,34,229,1,0,0,0,36,240,1,0,0,0,38,245,1,0,0,0,40,264,
        1,0,0,0,42,266,1,0,0,0,44,275,1,0,0,0,46,288,1,0,0,0,48,301,1,0,
        0,0,50,306,1,0,0,0,52,320,1,0,0,0,54,325,1,0,0,0,56,339,1,0,0,0,
        58,344,1,0,0,0,60,358,1,0,0,0,62,363,1,0,0,0,64,368,1,0,0,0,66,373,
        1,0,0,0,68,378,1,0,0,0,70,383,1,0,0,0,72,385,1,0,0,0,74,392,1,0,
        0,0,76,394,1,0,0,0,78,396,1,0,0,0,80,398,1,0,0,0,82,400,1,0,0,0,
        84,402,1,0,0,0,86,404,1,0,0,0,88,406,1,0,0,0,90,408,1,0,0,0,92,415,
        1,0,0,0,94,97,3,2,1,0,95,97,5,24,0,0,96,94,1,0,0,0,96,95,1,0,0,0,
        97,100,1,0,0,0,98,96,1,0,0,0,98,99,1,0,0,0,99,101,1,0,0,0,100,98,
        1,0,0,0,101,102,5,0,0,1,102,1,1,0,0,0,103,106,3,4,2,0,104,106,3,
        6,3,0,105,103,1,0,0,0,105,104,1,0,0,0,106,3,1,0,0,0,107,108,5,1,
        0,0,108,109,3,82,41,0,109,113,5,24,0,0,110,112,3,68,34,0,111,110,
        1,0,0,0,112,115,1,0,0,0,113,111,1,0,0,0,113,114,1,0,0,0,114,116,
        1,0,0,0,115,113,1,0,0,0,116,117,3,92,46,0,117,5,1,0,0,0,118,119,
        5,2,0,0,119,120,3,84,42,0,120,130,5,24,0,0,121,129,3,8,4,0,122,129,
        3,14,7,0,123,129,3,62,31,0,124,129,3,16,8,0,125,129,3,30,15,0,126,
        129,3,34,17,0,127,129,5,24,0,0,128,121,1,0,0,0,128,122,1,0,0,0,128,
        123,1,0,0,0,128,124,1,0,0,0,128,125,1,0,0,0,128,126,1,0,0,0,128,
        127,1,0,0,0,129,132,1,0,0,0,130,128,1,0,0,0,130,131,1,0,0,0,131,
        133,1,0,0,0,132,130,1,0,0,0,133,134,3,92,46,0,134,7,1,0,0,0,135,
        138,3,10,5,0,136,138,3,12,6,0,137,135,1,0,0,0,137,136,1,0,0,0,138,
        9,1,0,0,0,139,140,5,3,0,0,140,146,5,24,0,0,141,145,3,14,7,0,142,
        145,3,62,31,0,143,145,5,24,0,0,144,141,1,0,0,0,144,142,1,0,0,0,144,
        143,1,0,0,0,145,148,1,0,0,0,146,144,1,0,0,0,146,147,1,0,0,0,147,
        149,1,0,0,0,148,146,1,0,0,0,149,150,3,92,46,0,150,11,1,0,0,0,151,
        152,5,4,0,0,152,153,3,80,40,0,153,13,1,0,0,0,154,159,3,38,19,0,155,
        159,3,50,25,0,156,159,3,54,27,0,157,159,3,58,29,0,158,154,1,0,0,
        0,158,155,1,0,0,0,158,156,1,0,0,0,158,157,1,0,0,0,159,15,1,0,0,0,
        160,164,3,18,9,0,161,164,3,22,11,0,162,164,3,26,13,0,163,160,1,0,
        0,0,163,161,1,0,0,0,163,162,1,0,0,0,164,17,1,0,0,0,165,166,5,5,0,
        0,166,171,5,24,0,0,167,170,3,20,10,0,168,170,5,24,0,0,169,167,1,
        0,0,0,169,168,1,0,0,0,170,173,1,0,0,0,171,169,1,0,0,0,171,172,1,
        0,0,0,172,174,1,0,0,0,173,171,1,0,0,0,174,175,3,92,46,0,175,19,1,
        0,0,0,176,177,5,23,0,0,177,178,5,21,0,0,178,179,3,90,45,0,179,180,
        5,24,0,0,180,21,1,0,0,0,181,182,5,6,0,0,182,187,5,24,0,0,183,186,
        3,24,12,0,184,186,5,24,0,0,185,183,1,0,0,0,185,184,1,0,0,0,186,189,
        1,0,0,0,187,185,1,0,0,0,187,188,1,0,0,0,188,190,1,0,0,0,189,187,
        1,0,0,0,190,191,3,92,46,0,191,23,1,0,0,0,192,193,5,23,0,0,193,194,
        5,21,0,0,194,195,3,90,45,0,195,196,5,24,0,0,196,25,1,0,0,0,197,198,
        5,7,0,0,198,203,5,24,0,0,199,202,3,28,14,0,200,202,5,24,0,0,201,
        199,1,0,0,0,201,200,1,0,0,0,202,205,1,0,0,0,203,201,1,0,0,0,203,
        204,1,0,0,0,204,206,1,0,0,0,205,203,1,0,0,0,206,207,3,92,46,0,207,
        27,1,0,0,0,208,209,5,23,0,0,209,210,5,21,0,0,210,211,3,90,45,0,211,
        212,5,24,0,0,212,29,1,0,0,0,213,214,5,8,0,0,214,219,5,24,0,0,215,
        218,3,32,16,0,216,218,5,24,0,0,217,215,1,0,0,0,217,216,1,0,0,0,218,
        221,1,0,0,0,219,217,1,0,0,0,219,220,1,0,0,0,220,222,1,0,0,0,221,
        219,1,0,0,0,222,223,3,92,46,0,223,31,1,0,0,0,224,225,5,23,0,0,225,
        226,5,21,0,0,226,227,3,90,45,0,227,228,5,24,0,0,228,33,1,0,0,0,229,
        230,5,9,0,0,230,235,5,24,0,0,231,234,3,36,18,0,232,234,5,24,0,0,
        233,231,1,0,0,0,233,232,1,0,0,0,234,237,1,0,0,0,235,233,1,0,0,0,
        235,236,1,0,0,0,236,238,1,0,0,0,237,235,1,0,0,0,238,239,3,92,46,
        0,239,35,1,0,0,0,240,241,5,23,0,0,241,242,5,21,0,0,242,243,3,90,
        45,0,243,244,5,24,0,0,244,37,1,0,0,0,245,246,5,10,0,0,246,247,5,
        21,0,0,247,248,3,70,35,0,248,249,3,80,40,0,249,256,5,24,0,0,250,
        255,3,40,20,0,251,255,3,48,24,0,252,255,3,64,32,0,253,255,5,24,0,
        0,254,250,1,0,0,0,254,251,1,0,0,0,254,252,1,0,0,0,254,253,1,0,0,
        0,255,258,1,0,0,0,256,254,1,0,0,0,256,257,1,0,0,0,257,259,1,0,0,
        0,258,256,1,0,0,0,259,260,3,92,46,0,260,39,1,0,0,0,261,265,3,42,
        21,0,262,265,3,44,22,0,263,265,3,46,23,0,264,261,1,0,0,0,264,262,
        1,0,0,0,264,263,1,0,0,0,265,41,1,0,0,0,266,267,5,11,0,0,267,272,
        5,24,0,0,268,271,3,66,33,0,269,271,5,24,0,0,270,268,1,0,0,0,270,
        269,1,0,0,0,271,274,1,0,0,0,272,270,1,0,0,0,272,273,1,0,0,0,273,
        43,1,0,0,0,274,272,1,0,0,0,275,276,5,12,0,0,276,277,5,21,0,0,277,
        278,3,72,36,0,278,283,5,24,0,0,279,282,3,66,33,0,280,282,5,24,0,
        0,281,279,1,0,0,0,281,280,1,0,0,0,282,285,1,0,0,0,283,281,1,0,0,
        0,283,284,1,0,0,0,284,286,1,0,0,0,285,283,1,0,0,0,286,287,3,92,46,
        0,287,45,1,0,0,0,288,289,5,13,0,0,289,290,5,21,0,0,290,291,3,72,
        36,0,291,296,5,24,0,0,292,295,3,66,33,0,293,295,5,24,0,0,294,292,
        1,0,0,0,294,293,1,0,0,0,295,298,1,0,0,0,296,294,1,0,0,0,296,297,
        1,0,0,0,297,299,1,0,0,0,298,296,1,0,0,0,299,300,3,92,46,0,300,47,
        1,0,0,0,301,302,5,14,0,0,302,303,5,21,0,0,303,304,3,72,36,0,304,
        305,5,24,0,0,305,49,1,0,0,0,306,307,5,15,0,0,307,308,5,21,0,0,308,
        309,3,74,37,0,309,310,3,80,40,0,310,315,5,24,0,0,311,314,3,52,26,
        0,312,314,5,24,0,0,313,311,1,0,0,0,313,312,1,0,0,0,314,317,1,0,0,
        0,315,313,1,0,0,0,315,316,1,0,0,0,316,318,1,0,0,0,317,315,1,0,0,
        0,318,319,3,92,46,0,319,51,1,0,0,0,320,321,5,23,0,0,321,322,5,21,
        0,0,322,323,3,90,45,0,323,324,5,24,0,0,324,53,1,0,0,0,325,326,5,
        16,0,0,326,327,5,21,0,0,327,328,3,76,38,0,328,329,3,80,40,0,329,
        334,5,24,0,0,330,333,3,56,28,0,331,333,5,24,0,0,332,330,1,0,0,0,
        332,331,1,0,0,0,333,336,1,0,0,0,334,332,1,0,0,0,334,335,1,0,0,0,
        335,337,1,0,0,0,336,334,1,0,0,0,337,338,3,92,46,0,338,55,1,0,0,0,
        339,340,5,23,0,0,340,341,5,21,0,0,341,342,3,90,45,0,342,343,5,24,
        0,0,343,57,1,0,0,0,344,345,5,17,0,0,345,346,5,21,0,0,346,347,3,78,
        39,0,347,348,3,80,40,0,348,353,5,24,0,0,349,352,3,60,30,0,350,352,
        5,24,0,0,351,349,1,0,0,0,351,350,1,0,0,0,352,355,1,0,0,0,353,351,
        1,0,0,0,353,354,1,0,0,0,354,356,1,0,0,0,355,353,1,0,0,0,356,357,
        3,92,46,0,357,59,1,0,0,0,358,359,5,23,0,0,359,360,5,21,0,0,360,361,
        3,90,45,0,361,362,5,24,0,0,362,61,1,0,0,0,363,364,5,23,0,0,364,365,
        5,21,0,0,365,366,3,90,45,0,366,367,5,24,0,0,367,63,1,0,0,0,368,369,
        5,23,0,0,369,370,5,21,0,0,370,371,3,90,45,0,371,372,5,24,0,0,372,
        65,1,0,0,0,373,374,5,23,0,0,374,375,5,21,0,0,375,376,3,90,45,0,376,
        377,5,24,0,0,377,67,1,0,0,0,378,379,5,23,0,0,379,380,5,21,0,0,380,
        381,3,90,45,0,381,382,5,24,0,0,382,69,1,0,0,0,383,384,5,23,0,0,384,
        71,1,0,0,0,385,389,5,23,0,0,386,388,5,23,0,0,387,386,1,0,0,0,388,
        391,1,0,0,0,389,387,1,0,0,0,389,390,1,0,0,0,390,73,1,0,0,0,391,389,
        1,0,0,0,392,393,5,23,0,0,393,75,1,0,0,0,394,395,5,23,0,0,395,77,
        1,0,0,0,396,397,5,23,0,0,397,79,1,0,0,0,398,399,5,23,0,0,399,81,
        1,0,0,0,400,401,5,23,0,0,401,83,1,0,0,0,402,403,5,23,0,0,403,85,
        1,0,0,0,404,405,5,23,0,0,405,87,1,0,0,0,406,407,5,23,0,0,407,89,
        1,0,0,0,408,412,5,23,0,0,409,411,5,23,0,0,410,409,1,0,0,0,411,414,
        1,0,0,0,412,410,1,0,0,0,412,413,1,0,0,0,413,91,1,0,0,0,414,412,1,
        0,0,0,415,416,7,0,0,0,416,93,1,0,0,0,38,96,98,105,113,128,130,137,
        144,146,158,163,169,171,185,187,201,203,217,219,233,235,254,256,
        264,270,272,281,283,294,296,313,315,332,334,351,353,389,412
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
    public module_(): ModuleContext[];
    public module_(i: number): ModuleContext | null;
    public module_(i?: number): ModuleContext[] | ModuleContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ModuleContext);
        }

        return this.getRuleContext(i, ModuleContext);
    }
    public objectProperty(): ObjectPropertyContext[];
    public objectProperty(i: number): ObjectPropertyContext | null;
    public objectProperty(i?: number): ObjectPropertyContext[] | ObjectPropertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ObjectPropertyContext);
        }

        return this.getRuleContext(i, ObjectPropertyContext);
    }
    public objectSets(): ObjectSetsContext[];
    public objectSets(i: number): ObjectSetsContext | null;
    public objectSets(i?: number): ObjectSetsContext[] | ObjectSetsContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ObjectSetsContext);
        }

        return this.getRuleContext(i, ObjectSetsContext);
    }
    public objectUnitSpecificSounds(): ObjectUnitSpecificSoundsContext[];
    public objectUnitSpecificSounds(i: number): ObjectUnitSpecificSoundsContext | null;
    public objectUnitSpecificSounds(i?: number): ObjectUnitSpecificSoundsContext[] | ObjectUnitSpecificSoundsContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ObjectUnitSpecificSoundsContext);
        }

        return this.getRuleContext(i, ObjectUnitSpecificSoundsContext);
    }
    public objectUnitSpecificFX(): ObjectUnitSpecificFXContext[];
    public objectUnitSpecificFX(i: number): ObjectUnitSpecificFXContext | null;
    public objectUnitSpecificFX(i?: number): ObjectUnitSpecificFXContext[] | ObjectUnitSpecificFXContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ObjectUnitSpecificFXContext);
        }

        return this.getRuleContext(i, ObjectUnitSpecificFXContext);
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
    public objectProperty(): ObjectPropertyContext[];
    public objectProperty(i: number): ObjectPropertyContext | null;
    public objectProperty(i?: number): ObjectPropertyContext[] | ObjectPropertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ObjectPropertyContext);
        }

        return this.getRuleContext(i, ObjectPropertyContext);
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


export class ObjectSetsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public objectWeaponSet(): ObjectWeaponSetContext | null {
        return this.getRuleContext(0, ObjectWeaponSetContext);
    }
    public objectArmorSet(): ObjectArmorSetContext | null {
        return this.getRuleContext(0, ObjectArmorSetContext);
    }
    public objectPrerequisite(): ObjectPrerequisiteContext | null {
        return this.getRuleContext(0, ObjectPrerequisiteContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_objectSets;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterObjectSets) {
             listener.enterObjectSets(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitObjectSets) {
             listener.exitObjectSets(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitObjectSets) {
            return visitor.visitObjectSets(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ObjectWeaponSetContext extends antlr.ParserRuleContext {
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
    public objectWeaponSetProperty(): ObjectWeaponSetPropertyContext[];
    public objectWeaponSetProperty(i: number): ObjectWeaponSetPropertyContext | null;
    public objectWeaponSetProperty(i?: number): ObjectWeaponSetPropertyContext[] | ObjectWeaponSetPropertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ObjectWeaponSetPropertyContext);
        }

        return this.getRuleContext(i, ObjectWeaponSetPropertyContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_objectWeaponSet;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterObjectWeaponSet) {
             listener.enterObjectWeaponSet(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitObjectWeaponSet) {
             listener.exitObjectWeaponSet(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitObjectWeaponSet) {
            return visitor.visitObjectWeaponSet(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ObjectWeaponSetPropertyContext extends antlr.ParserRuleContext {
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
    public override get ruleIndex(): number {
        return MapIniParser.RULE_objectWeaponSetProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterObjectWeaponSetProperty) {
             listener.enterObjectWeaponSetProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitObjectWeaponSetProperty) {
             listener.exitObjectWeaponSetProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitObjectWeaponSetProperty) {
            return visitor.visitObjectWeaponSetProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ObjectArmorSetContext extends antlr.ParserRuleContext {
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
    public objectArmorSetProperty(): ObjectArmorSetPropertyContext[];
    public objectArmorSetProperty(i: number): ObjectArmorSetPropertyContext | null;
    public objectArmorSetProperty(i?: number): ObjectArmorSetPropertyContext[] | ObjectArmorSetPropertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ObjectArmorSetPropertyContext);
        }

        return this.getRuleContext(i, ObjectArmorSetPropertyContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_objectArmorSet;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterObjectArmorSet) {
             listener.enterObjectArmorSet(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitObjectArmorSet) {
             listener.exitObjectArmorSet(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitObjectArmorSet) {
            return visitor.visitObjectArmorSet(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ObjectArmorSetPropertyContext extends antlr.ParserRuleContext {
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
    public override get ruleIndex(): number {
        return MapIniParser.RULE_objectArmorSetProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterObjectArmorSetProperty) {
             listener.enterObjectArmorSetProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitObjectArmorSetProperty) {
             listener.exitObjectArmorSetProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitObjectArmorSetProperty) {
            return visitor.visitObjectArmorSetProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ObjectPrerequisiteContext extends antlr.ParserRuleContext {
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
    public objectPrerequisiteProperty(): ObjectPrerequisitePropertyContext[];
    public objectPrerequisiteProperty(i: number): ObjectPrerequisitePropertyContext | null;
    public objectPrerequisiteProperty(i?: number): ObjectPrerequisitePropertyContext[] | ObjectPrerequisitePropertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ObjectPrerequisitePropertyContext);
        }

        return this.getRuleContext(i, ObjectPrerequisitePropertyContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_objectPrerequisite;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterObjectPrerequisite) {
             listener.enterObjectPrerequisite(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitObjectPrerequisite) {
             listener.exitObjectPrerequisite(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitObjectPrerequisite) {
            return visitor.visitObjectPrerequisite(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ObjectPrerequisitePropertyContext extends antlr.ParserRuleContext {
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
    public override get ruleIndex(): number {
        return MapIniParser.RULE_objectPrerequisiteProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterObjectPrerequisiteProperty) {
             listener.enterObjectPrerequisiteProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitObjectPrerequisiteProperty) {
             listener.exitObjectPrerequisiteProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitObjectPrerequisiteProperty) {
            return visitor.visitObjectPrerequisiteProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ObjectUnitSpecificSoundsContext extends antlr.ParserRuleContext {
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
    public objectUnitSpecificSoundsProperty(): ObjectUnitSpecificSoundsPropertyContext[];
    public objectUnitSpecificSoundsProperty(i: number): ObjectUnitSpecificSoundsPropertyContext | null;
    public objectUnitSpecificSoundsProperty(i?: number): ObjectUnitSpecificSoundsPropertyContext[] | ObjectUnitSpecificSoundsPropertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ObjectUnitSpecificSoundsPropertyContext);
        }

        return this.getRuleContext(i, ObjectUnitSpecificSoundsPropertyContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_objectUnitSpecificSounds;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterObjectUnitSpecificSounds) {
             listener.enterObjectUnitSpecificSounds(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitObjectUnitSpecificSounds) {
             listener.exitObjectUnitSpecificSounds(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitObjectUnitSpecificSounds) {
            return visitor.visitObjectUnitSpecificSounds(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ObjectUnitSpecificSoundsPropertyContext extends antlr.ParserRuleContext {
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
    public override get ruleIndex(): number {
        return MapIniParser.RULE_objectUnitSpecificSoundsProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterObjectUnitSpecificSoundsProperty) {
             listener.enterObjectUnitSpecificSoundsProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitObjectUnitSpecificSoundsProperty) {
             listener.exitObjectUnitSpecificSoundsProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitObjectUnitSpecificSoundsProperty) {
            return visitor.visitObjectUnitSpecificSoundsProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ObjectUnitSpecificFXContext extends antlr.ParserRuleContext {
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
    public objectUnitSpecificFXProperty(): ObjectUnitSpecificFXPropertyContext[];
    public objectUnitSpecificFXProperty(i: number): ObjectUnitSpecificFXPropertyContext | null;
    public objectUnitSpecificFXProperty(i?: number): ObjectUnitSpecificFXPropertyContext[] | ObjectUnitSpecificFXPropertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ObjectUnitSpecificFXPropertyContext);
        }

        return this.getRuleContext(i, ObjectUnitSpecificFXPropertyContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_objectUnitSpecificFX;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterObjectUnitSpecificFX) {
             listener.enterObjectUnitSpecificFX(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitObjectUnitSpecificFX) {
             listener.exitObjectUnitSpecificFX(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitObjectUnitSpecificFX) {
            return visitor.visitObjectUnitSpecificFX(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ObjectUnitSpecificFXPropertyContext extends antlr.ParserRuleContext {
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
    public override get ruleIndex(): number {
        return MapIniParser.RULE_objectUnitSpecificFXProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterObjectUnitSpecificFXProperty) {
             listener.enterObjectUnitSpecificFXProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitObjectUnitSpecificFXProperty) {
             listener.exitObjectUnitSpecificFXProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitObjectUnitSpecificFXProperty) {
            return visitor.visitObjectUnitSpecificFXProperty(this);
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
    public drawModuleProperty(): DrawModulePropertyContext[];
    public drawModuleProperty(i: number): DrawModulePropertyContext | null;
    public drawModuleProperty(i?: number): DrawModulePropertyContext[] | DrawModulePropertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(DrawModulePropertyContext);
        }

        return this.getRuleContext(i, DrawModulePropertyContext);
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
    public defaultConditionStateBlock(): DefaultConditionStateBlockContext | null {
        return this.getRuleContext(0, DefaultConditionStateBlockContext);
    }
    public conditionStateBlock(): ConditionStateBlockContext | null {
        return this.getRuleContext(0, ConditionStateBlockContext);
    }
    public transitionStateBlock(): TransitionStateBlockContext | null {
        return this.getRuleContext(0, TransitionStateBlockContext);
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


export class DefaultConditionStateBlockContext extends antlr.ParserRuleContext {
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
    public conditionStateProperty(): ConditionStatePropertyContext[];
    public conditionStateProperty(i: number): ConditionStatePropertyContext | null;
    public conditionStateProperty(i?: number): ConditionStatePropertyContext[] | ConditionStatePropertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ConditionStatePropertyContext);
        }

        return this.getRuleContext(i, ConditionStatePropertyContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_defaultConditionStateBlock;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterDefaultConditionStateBlock) {
             listener.enterDefaultConditionStateBlock(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitDefaultConditionStateBlock) {
             listener.exitDefaultConditionStateBlock(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitDefaultConditionStateBlock) {
            return visitor.visitDefaultConditionStateBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ConditionStateBlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public conditionState_values(): ConditionState_valuesContext {
        return this.getRuleContext(0, ConditionState_valuesContext)!;
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
    public conditionStateProperty(): ConditionStatePropertyContext[];
    public conditionStateProperty(i: number): ConditionStatePropertyContext | null;
    public conditionStateProperty(i?: number): ConditionStatePropertyContext[] | ConditionStatePropertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ConditionStatePropertyContext);
        }

        return this.getRuleContext(i, ConditionStatePropertyContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_conditionStateBlock;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterConditionStateBlock) {
             listener.enterConditionStateBlock(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitConditionStateBlock) {
             listener.exitConditionStateBlock(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitConditionStateBlock) {
            return visitor.visitConditionStateBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TransitionStateBlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public conditionState_values(): ConditionState_valuesContext {
        return this.getRuleContext(0, ConditionState_valuesContext)!;
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
    public conditionStateProperty(): ConditionStatePropertyContext[];
    public conditionStateProperty(i: number): ConditionStatePropertyContext | null;
    public conditionStateProperty(i?: number): ConditionStatePropertyContext[] | ConditionStatePropertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ConditionStatePropertyContext);
        }

        return this.getRuleContext(i, ConditionStatePropertyContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_transitionStateBlock;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterTransitionStateBlock) {
             listener.enterTransitionStateBlock(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitTransitionStateBlock) {
             listener.exitTransitionStateBlock(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitTransitionStateBlock) {
            return visitor.visitTransitionStateBlock(this);
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
    public bodyModuleProperty(): BodyModulePropertyContext[];
    public bodyModuleProperty(i: number): BodyModulePropertyContext | null;
    public bodyModuleProperty(i?: number): BodyModulePropertyContext[] | BodyModulePropertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BodyModulePropertyContext);
        }

        return this.getRuleContext(i, BodyModulePropertyContext);
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


export class BodyModulePropertyContext extends antlr.ParserRuleContext {
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
    public override get ruleIndex(): number {
        return MapIniParser.RULE_bodyModuleProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterBodyModuleProperty) {
             listener.enterBodyModuleProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitBodyModuleProperty) {
             listener.exitBodyModuleProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitBodyModuleProperty) {
            return visitor.visitBodyModuleProperty(this);
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
    public behaviorModuleProperty(): BehaviorModulePropertyContext[];
    public behaviorModuleProperty(i: number): BehaviorModulePropertyContext | null;
    public behaviorModuleProperty(i?: number): BehaviorModulePropertyContext[] | BehaviorModulePropertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BehaviorModulePropertyContext);
        }

        return this.getRuleContext(i, BehaviorModulePropertyContext);
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


export class BehaviorModulePropertyContext extends antlr.ParserRuleContext {
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
    public override get ruleIndex(): number {
        return MapIniParser.RULE_behaviorModuleProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterBehaviorModuleProperty) {
             listener.enterBehaviorModuleProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitBehaviorModuleProperty) {
             listener.exitBehaviorModuleProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitBehaviorModuleProperty) {
            return visitor.visitBehaviorModuleProperty(this);
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
    public clientModuleProperty(): ClientModulePropertyContext[];
    public clientModuleProperty(i: number): ClientModulePropertyContext | null;
    public clientModuleProperty(i?: number): ClientModulePropertyContext[] | ClientModulePropertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ClientModulePropertyContext);
        }

        return this.getRuleContext(i, ClientModulePropertyContext);
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


export class ClientModulePropertyContext extends antlr.ParserRuleContext {
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
    public override get ruleIndex(): number {
        return MapIniParser.RULE_clientModuleProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterClientModuleProperty) {
             listener.enterClientModuleProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitClientModuleProperty) {
             listener.exitClientModuleProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitClientModuleProperty) {
            return visitor.visitClientModuleProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ObjectPropertyContext extends antlr.ParserRuleContext {
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


export class DrawModulePropertyContext extends antlr.ParserRuleContext {
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
    public override get ruleIndex(): number {
        return MapIniParser.RULE_drawModuleProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterDrawModuleProperty) {
             listener.enterDrawModuleProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitDrawModuleProperty) {
             listener.exitDrawModuleProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitDrawModuleProperty) {
            return visitor.visitDrawModuleProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ConditionStatePropertyContext extends antlr.ParserRuleContext {
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
    public override get ruleIndex(): number {
        return MapIniParser.RULE_conditionStateProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterConditionStateProperty) {
             listener.enterConditionStateProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitConditionStateProperty) {
             listener.exitConditionStateProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitConditionStateProperty) {
            return visitor.visitConditionStateProperty(this);
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


export class Locomotor_modifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_locomotor_modifier;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterLocomotor_modifier) {
             listener.enterLocomotor_modifier(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitLocomotor_modifier) {
             listener.exitLocomotor_modifier(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitLocomotor_modifier) {
            return visitor.visitLocomotor_modifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Property_valueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_property_value;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterProperty_value) {
             listener.enterProperty_value(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitProperty_value) {
             listener.exitProperty_value(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitProperty_value) {
            return visitor.visitProperty_value(this);
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
