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
    public static readonly T__20 = 21;
    public static readonly T__21 = 22;
    public static readonly EQ = 23;
    public static readonly STRING = 24;
    public static readonly ID = 25;
    public static readonly NEWLINE = 26;
    public static readonly WS = 27;
    public static readonly COMMENT = 28;
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
    public static readonly RULE_propertyCondition = 10;
    public static readonly RULE_objectWeaponSetWeapon = 11;
    public static readonly RULE_weaponSlot_value = 12;
    public static readonly RULE_objectArmorSet = 13;
    public static readonly RULE_objectArmorSetArmor = 14;
    public static readonly RULE_objectPrerequisite = 15;
    public static readonly RULE_objectPrerequisite_object = 16;
    public static readonly RULE_objectPrerequisite_science = 17;
    public static readonly RULE_drawModule = 18;
    public static readonly RULE_conditionState = 19;
    public static readonly RULE_aliasCondition = 20;
    public static readonly RULE_bodyModule = 21;
    public static readonly RULE_behaviorModule = 22;
    public static readonly RULE_clientModule = 23;
    public static readonly RULE_objectProperty = 24;
    public static readonly RULE_drawModuleProperty = 25;
    public static readonly RULE_conditionStateProperty = 26;
    public static readonly RULE_property = 27;
    public static readonly RULE_drawModule_type = 28;
    public static readonly RULE_conditionState_values = 29;
    public static readonly RULE_bodyModule_type = 30;
    public static readonly RULE_behaviorModule_type = 31;
    public static readonly RULE_clientModule_type = 32;
    public static readonly RULE_moduleTag_value = 33;
    public static readonly RULE_mappedImage_value = 34;
    public static readonly RULE_object_value = 35;
    public static readonly RULE_locomotor_modifier = 36;
    public static readonly RULE_property_value = 37;
    public static readonly RULE_property_values = 38;
    public static readonly RULE_end = 39;

    public static readonly literalNames = [
        null, "'MappedImage'", "'Object'", "'AddModule'", "'RemoveModule'", 
        "'WeaponSet'", "'Condition'", "'Weapon'", "'ArmorSet'", "'Armor'", 
        "'Prerequisites'", "'Science'", "'Draw'", "'DefaultConditionState'", 
        "'ConditionState'", "'TransitionState'", "'AliasConditionState'", 
        "'Body'", "'Behavior'", "'Client'", "'End'", "'end'", "'END'", "'='"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, "EQ", "STRING", "ID", "NEWLINE", "WS", "COMMENT"
    ];
    public static readonly ruleNames = [
        "program", "class", "mappedImageClass", "objectClass", "module_modifier", 
        "addModule", "removeModule", "module", "objectSets", "objectWeaponSet", 
        "propertyCondition", "objectWeaponSetWeapon", "weaponSlot_value", 
        "objectArmorSet", "objectArmorSetArmor", "objectPrerequisite", "objectPrerequisite_object", 
        "objectPrerequisite_science", "drawModule", "conditionState", "aliasCondition", 
        "bodyModule", "behaviorModule", "clientModule", "objectProperty", 
        "drawModuleProperty", "conditionStateProperty", "property", "drawModule_type", 
        "conditionState_values", "bodyModule_type", "behaviorModule_type", 
        "clientModule_type", "moduleTag_value", "mappedImage_value", "object_value", 
        "locomotor_modifier", "property_value", "property_values", "end",
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
            this.state = 84;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67108870) !== 0)) {
                {
                this.state = 82;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.T__0:
                case MapIniParser.T__1:
                    {
                    this.state = 80;
                    this.class_();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 81;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 86;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 87;
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
            this.state = 91;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__0:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 89;
                this.mappedImageClass();
                }
                break;
            case MapIniParser.T__1:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 90;
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
            this.state = 93;
            this.match(MapIniParser.T__0);
            this.state = 94;
            this.mappedImage_value();
            this.state = 95;
            this.match(MapIniParser.NEWLINE);
            this.state = 99;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 25) {
                {
                {
                this.state = 96;
                this.property();
                }
                }
                this.state = 101;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 102;
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
            this.state = 104;
            this.match(MapIniParser.T__1);
            this.state = 105;
            this.object_value();
            this.state = 106;
            this.match(MapIniParser.NEWLINE);
            this.state = 114;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 101586232) !== 0)) {
                {
                this.state = 112;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.T__2:
                case MapIniParser.T__3:
                    {
                    this.state = 107;
                    this.module_modifier();
                    }
                    break;
                case MapIniParser.T__11:
                case MapIniParser.T__16:
                case MapIniParser.T__17:
                case MapIniParser.T__18:
                    {
                    this.state = 108;
                    this.module_();
                    }
                    break;
                case MapIniParser.ID:
                    {
                    this.state = 109;
                    this.objectProperty();
                    }
                    break;
                case MapIniParser.T__4:
                case MapIniParser.T__7:
                case MapIniParser.T__9:
                    {
                    this.state = 110;
                    this.objectSets();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 111;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 116;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 117;
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
            this.state = 121;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__2:
                {
                this.state = 119;
                this.addModule();
                }
                break;
            case MapIniParser.T__3:
                {
                this.state = 120;
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
            this.state = 123;
            this.match(MapIniParser.T__2);
            this.state = 124;
            this.match(MapIniParser.NEWLINE);
            this.state = 130;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 101584896) !== 0)) {
                {
                this.state = 128;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.T__11:
                case MapIniParser.T__16:
                case MapIniParser.T__17:
                case MapIniParser.T__18:
                    {
                    this.state = 125;
                    this.module_();
                    }
                    break;
                case MapIniParser.ID:
                    {
                    this.state = 126;
                    this.objectProperty();
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
    public removeModule(): RemoveModuleContext {
        let localContext = new RemoveModuleContext(this.context, this.state);
        this.enterRule(localContext, 12, MapIniParser.RULE_removeModule);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 135;
            this.match(MapIniParser.T__3);
            this.state = 136;
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
            this.state = 142;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__11:
                {
                this.state = 138;
                this.drawModule();
                }
                break;
            case MapIniParser.T__16:
                {
                this.state = 139;
                this.bodyModule();
                }
                break;
            case MapIniParser.T__17:
                {
                this.state = 140;
                this.behaviorModule();
                }
                break;
            case MapIniParser.T__18:
                {
                this.state = 141;
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
            this.state = 147;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__4:
                {
                this.state = 144;
                this.objectWeaponSet();
                }
                break;
            case MapIniParser.T__7:
                {
                this.state = 145;
                this.objectArmorSet();
                }
                break;
            case MapIniParser.T__9:
                {
                this.state = 146;
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
            this.state = 149;
            this.match(MapIniParser.T__4);
            this.state = 150;
            this.match(MapIniParser.NEWLINE);
            this.state = 156;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109056) !== 0)) {
                {
                this.state = 154;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.T__5:
                    {
                    this.state = 151;
                    this.propertyCondition();
                    }
                    break;
                case MapIniParser.T__6:
                    {
                    this.state = 152;
                    this.objectWeaponSetWeapon();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 153;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 158;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 159;
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
    public propertyCondition(): PropertyConditionContext {
        let localContext = new PropertyConditionContext(this.context, this.state);
        this.enterRule(localContext, 20, MapIniParser.RULE_propertyCondition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 161;
            this.match(MapIniParser.T__5);
            this.state = 162;
            this.match(MapIniParser.EQ);
            this.state = 163;
            this.property_values();
            this.state = 164;
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
    public objectWeaponSetWeapon(): ObjectWeaponSetWeaponContext {
        let localContext = new ObjectWeaponSetWeaponContext(this.context, this.state);
        this.enterRule(localContext, 22, MapIniParser.RULE_objectWeaponSetWeapon);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 166;
            this.match(MapIniParser.T__6);
            this.state = 167;
            this.match(MapIniParser.EQ);
            this.state = 168;
            this.weaponSlot_value();
            this.state = 169;
            this.property_values();
            this.state = 170;
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
    public weaponSlot_value(): WeaponSlot_valueContext {
        let localContext = new WeaponSlot_valueContext(this.context, this.state);
        this.enterRule(localContext, 24, MapIniParser.RULE_weaponSlot_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 172;
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
    public objectArmorSet(): ObjectArmorSetContext {
        let localContext = new ObjectArmorSetContext(this.context, this.state);
        this.enterRule(localContext, 26, MapIniParser.RULE_objectArmorSet);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 174;
            this.match(MapIniParser.T__7);
            this.state = 175;
            this.match(MapIniParser.NEWLINE);
            this.state = 181;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67109440) !== 0)) {
                {
                this.state = 179;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.T__5:
                    {
                    this.state = 176;
                    this.propertyCondition();
                    }
                    break;
                case MapIniParser.T__8:
                    {
                    this.state = 177;
                    this.objectArmorSetArmor();
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
                this.state = 183;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
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
    public objectArmorSetArmor(): ObjectArmorSetArmorContext {
        let localContext = new ObjectArmorSetArmorContext(this.context, this.state);
        this.enterRule(localContext, 28, MapIniParser.RULE_objectArmorSetArmor);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 186;
            this.match(MapIniParser.T__8);
            this.state = 187;
            this.match(MapIniParser.EQ);
            this.state = 188;
            this.property_values();
            this.state = 189;
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
        this.enterRule(localContext, 30, MapIniParser.RULE_objectPrerequisite);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 191;
            this.match(MapIniParser.T__9);
            this.state = 192;
            this.match(MapIniParser.NEWLINE);
            this.state = 198;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67110916) !== 0)) {
                {
                this.state = 196;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.T__1:
                    {
                    this.state = 193;
                    this.objectPrerequisite_object();
                    }
                    break;
                case MapIniParser.T__10:
                    {
                    this.state = 194;
                    this.objectPrerequisite_science();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 195;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 200;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 201;
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
    public objectPrerequisite_object(): ObjectPrerequisite_objectContext {
        let localContext = new ObjectPrerequisite_objectContext(this.context, this.state);
        this.enterRule(localContext, 32, MapIniParser.RULE_objectPrerequisite_object);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 203;
            this.match(MapIniParser.T__1);
            this.state = 204;
            this.match(MapIniParser.EQ);
            this.state = 205;
            this.property_values();
            this.state = 206;
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
    public objectPrerequisite_science(): ObjectPrerequisite_scienceContext {
        let localContext = new ObjectPrerequisite_scienceContext(this.context, this.state);
        this.enterRule(localContext, 34, MapIniParser.RULE_objectPrerequisite_science);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 208;
            this.match(MapIniParser.T__10);
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
    public drawModule(): DrawModuleContext {
        let localContext = new DrawModuleContext(this.context, this.state);
        this.enterRule(localContext, 36, MapIniParser.RULE_drawModule);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 213;
            this.match(MapIniParser.T__11);
            this.state = 214;
            this.match(MapIniParser.EQ);
            this.state = 215;
            this.drawModule_type();
            this.state = 216;
            this.moduleTag_value();
            this.state = 217;
            this.match(MapIniParser.NEWLINE);
            this.state = 224;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 100786176) !== 0)) {
                {
                this.state = 222;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.T__12:
                case MapIniParser.T__13:
                case MapIniParser.T__14:
                    {
                    this.state = 218;
                    this.conditionState();
                    }
                    break;
                case MapIniParser.T__15:
                    {
                    this.state = 219;
                    this.aliasCondition();
                    }
                    break;
                case MapIniParser.ID:
                    {
                    this.state = 220;
                    this.drawModuleProperty();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 221;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 226;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 227;
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
        this.enterRule(localContext, 38, MapIniParser.RULE_conditionState);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 236;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__12:
                {
                this.state = 229;
                this.match(MapIniParser.T__12);
                }
                break;
            case MapIniParser.T__13:
                {
                {
                this.state = 230;
                this.match(MapIniParser.T__13);
                this.state = 231;
                this.match(MapIniParser.EQ);
                this.state = 232;
                this.conditionState_values();
                }
                }
                break;
            case MapIniParser.T__14:
                {
                {
                this.state = 233;
                this.match(MapIniParser.T__14);
                this.state = 234;
                this.match(MapIniParser.EQ);
                this.state = 235;
                this.conditionState_values();
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 238;
            this.match(MapIniParser.NEWLINE);
            this.state = 243;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 25 || _la === 26) {
                {
                this.state = 241;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.ID:
                    {
                    this.state = 239;
                    this.conditionStateProperty();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 240;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 245;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 246;
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
        this.enterRule(localContext, 40, MapIniParser.RULE_aliasCondition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 248;
            this.match(MapIniParser.T__15);
            this.state = 249;
            this.match(MapIniParser.EQ);
            this.state = 250;
            this.conditionState_values();
            this.state = 251;
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
        this.enterRule(localContext, 42, MapIniParser.RULE_bodyModule);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 253;
            this.match(MapIniParser.T__16);
            this.state = 254;
            this.match(MapIniParser.EQ);
            this.state = 255;
            this.bodyModule_type();
            this.state = 256;
            this.moduleTag_value();
            this.state = 257;
            this.match(MapIniParser.NEWLINE);
            this.state = 262;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 25 || _la === 26) {
                {
                this.state = 260;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.ID:
                    {
                    this.state = 258;
                    this.property();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 259;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 264;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 265;
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
        this.enterRule(localContext, 44, MapIniParser.RULE_behaviorModule);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 267;
            this.match(MapIniParser.T__17);
            this.state = 268;
            this.match(MapIniParser.EQ);
            this.state = 269;
            this.behaviorModule_type();
            this.state = 270;
            this.moduleTag_value();
            this.state = 271;
            this.match(MapIniParser.NEWLINE);
            this.state = 276;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 25 || _la === 26) {
                {
                this.state = 274;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.ID:
                    {
                    this.state = 272;
                    this.property();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 273;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 278;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 279;
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
        this.enterRule(localContext, 46, MapIniParser.RULE_clientModule);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 281;
            this.match(MapIniParser.T__18);
            this.state = 282;
            this.match(MapIniParser.EQ);
            this.state = 283;
            this.clientModule_type();
            this.state = 284;
            this.moduleTag_value();
            this.state = 285;
            this.match(MapIniParser.NEWLINE);
            this.state = 290;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 25 || _la === 26) {
                {
                this.state = 288;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.ID:
                    {
                    this.state = 286;
                    this.property();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 287;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 292;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 293;
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
        this.enterRule(localContext, 48, MapIniParser.RULE_objectProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 295;
            this.match(MapIniParser.ID);
            this.state = 296;
            this.match(MapIniParser.EQ);
            this.state = 297;
            this.property_values();
            this.state = 298;
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
        this.enterRule(localContext, 50, MapIniParser.RULE_drawModuleProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 300;
            this.match(MapIniParser.ID);
            this.state = 301;
            this.match(MapIniParser.EQ);
            this.state = 302;
            this.property_values();
            this.state = 303;
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
        this.enterRule(localContext, 52, MapIniParser.RULE_conditionStateProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 305;
            this.match(MapIniParser.ID);
            this.state = 306;
            this.match(MapIniParser.EQ);
            this.state = 307;
            this.property_values();
            this.state = 308;
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
        this.enterRule(localContext, 54, MapIniParser.RULE_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 310;
            this.match(MapIniParser.ID);
            this.state = 311;
            this.match(MapIniParser.EQ);
            this.state = 312;
            this.property_values();
            this.state = 313;
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
        this.enterRule(localContext, 56, MapIniParser.RULE_drawModule_type);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 315;
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
        this.enterRule(localContext, 58, MapIniParser.RULE_conditionState_values);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 317;
            this.match(MapIniParser.ID);
            this.state = 321;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 25) {
                {
                {
                this.state = 318;
                this.match(MapIniParser.ID);
                }
                }
                this.state = 323;
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
        this.enterRule(localContext, 60, MapIniParser.RULE_bodyModule_type);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 324;
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
        this.enterRule(localContext, 62, MapIniParser.RULE_behaviorModule_type);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 326;
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
        this.enterRule(localContext, 64, MapIniParser.RULE_clientModule_type);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 328;
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
        this.enterRule(localContext, 66, MapIniParser.RULE_moduleTag_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 330;
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
        this.enterRule(localContext, 68, MapIniParser.RULE_mappedImage_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 332;
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
        this.enterRule(localContext, 70, MapIniParser.RULE_object_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 334;
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
        this.enterRule(localContext, 72, MapIniParser.RULE_locomotor_modifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 336;
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
        this.enterRule(localContext, 74, MapIniParser.RULE_property_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 338;
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
        this.enterRule(localContext, 76, MapIniParser.RULE_property_values);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 340;
            this.match(MapIniParser.ID);
            this.state = 344;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 25) {
                {
                {
                this.state = 341;
                this.match(MapIniParser.ID);
                }
                }
                this.state = 346;
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
        this.enterRule(localContext, 78, MapIniParser.RULE_end);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 347;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 7340032) !== 0))) {
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
        4,1,28,350,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,
        7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,
        1,0,1,0,5,0,83,8,0,10,0,12,0,86,9,0,1,0,1,0,1,1,1,1,3,1,92,8,1,1,
        2,1,2,1,2,1,2,5,2,98,8,2,10,2,12,2,101,9,2,1,2,1,2,1,3,1,3,1,3,1,
        3,1,3,1,3,1,3,1,3,5,3,113,8,3,10,3,12,3,116,9,3,1,3,1,3,1,4,1,4,
        3,4,122,8,4,1,5,1,5,1,5,1,5,1,5,5,5,129,8,5,10,5,12,5,132,9,5,1,
        5,1,5,1,6,1,6,1,6,1,7,1,7,1,7,1,7,3,7,143,8,7,1,8,1,8,1,8,3,8,148,
        8,8,1,9,1,9,1,9,1,9,1,9,5,9,155,8,9,10,9,12,9,158,9,9,1,9,1,9,1,
        10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,
        13,1,13,1,13,1,13,1,13,5,13,180,8,13,10,13,12,13,183,9,13,1,13,1,
        13,1,14,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,5,15,197,8,
        15,10,15,12,15,200,9,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,17,
        1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
        5,18,223,8,18,10,18,12,18,226,9,18,1,18,1,18,1,19,1,19,1,19,1,19,
        1,19,1,19,1,19,3,19,237,8,19,1,19,1,19,1,19,5,19,242,8,19,10,19,
        12,19,245,9,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,21,1,21,1,21,
        1,21,1,21,1,21,1,21,5,21,261,8,21,10,21,12,21,264,9,21,1,21,1,21,
        1,22,1,22,1,22,1,22,1,22,1,22,1,22,5,22,275,8,22,10,22,12,22,278,
        9,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,1,23,1,23,5,23,289,8,23,
        10,23,12,23,292,9,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,25,1,25,
        1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,
        1,28,1,28,1,29,1,29,5,29,320,8,29,10,29,12,29,323,9,29,1,30,1,30,
        1,31,1,31,1,32,1,32,1,33,1,33,1,34,1,34,1,35,1,35,1,36,1,36,1,37,
        1,37,1,38,1,38,5,38,343,8,38,10,38,12,38,346,9,38,1,39,1,39,1,39,
        0,0,40,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,
        42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,0,1,1,0,
        20,22,352,0,84,1,0,0,0,2,91,1,0,0,0,4,93,1,0,0,0,6,104,1,0,0,0,8,
        121,1,0,0,0,10,123,1,0,0,0,12,135,1,0,0,0,14,142,1,0,0,0,16,147,
        1,0,0,0,18,149,1,0,0,0,20,161,1,0,0,0,22,166,1,0,0,0,24,172,1,0,
        0,0,26,174,1,0,0,0,28,186,1,0,0,0,30,191,1,0,0,0,32,203,1,0,0,0,
        34,208,1,0,0,0,36,213,1,0,0,0,38,236,1,0,0,0,40,248,1,0,0,0,42,253,
        1,0,0,0,44,267,1,0,0,0,46,281,1,0,0,0,48,295,1,0,0,0,50,300,1,0,
        0,0,52,305,1,0,0,0,54,310,1,0,0,0,56,315,1,0,0,0,58,317,1,0,0,0,
        60,324,1,0,0,0,62,326,1,0,0,0,64,328,1,0,0,0,66,330,1,0,0,0,68,332,
        1,0,0,0,70,334,1,0,0,0,72,336,1,0,0,0,74,338,1,0,0,0,76,340,1,0,
        0,0,78,347,1,0,0,0,80,83,3,2,1,0,81,83,5,26,0,0,82,80,1,0,0,0,82,
        81,1,0,0,0,83,86,1,0,0,0,84,82,1,0,0,0,84,85,1,0,0,0,85,87,1,0,0,
        0,86,84,1,0,0,0,87,88,5,0,0,1,88,1,1,0,0,0,89,92,3,4,2,0,90,92,3,
        6,3,0,91,89,1,0,0,0,91,90,1,0,0,0,92,3,1,0,0,0,93,94,5,1,0,0,94,
        95,3,68,34,0,95,99,5,26,0,0,96,98,3,54,27,0,97,96,1,0,0,0,98,101,
        1,0,0,0,99,97,1,0,0,0,99,100,1,0,0,0,100,102,1,0,0,0,101,99,1,0,
        0,0,102,103,3,78,39,0,103,5,1,0,0,0,104,105,5,2,0,0,105,106,3,70,
        35,0,106,114,5,26,0,0,107,113,3,8,4,0,108,113,3,14,7,0,109,113,3,
        48,24,0,110,113,3,16,8,0,111,113,5,26,0,0,112,107,1,0,0,0,112,108,
        1,0,0,0,112,109,1,0,0,0,112,110,1,0,0,0,112,111,1,0,0,0,113,116,
        1,0,0,0,114,112,1,0,0,0,114,115,1,0,0,0,115,117,1,0,0,0,116,114,
        1,0,0,0,117,118,3,78,39,0,118,7,1,0,0,0,119,122,3,10,5,0,120,122,
        3,12,6,0,121,119,1,0,0,0,121,120,1,0,0,0,122,9,1,0,0,0,123,124,5,
        3,0,0,124,130,5,26,0,0,125,129,3,14,7,0,126,129,3,48,24,0,127,129,
        5,26,0,0,128,125,1,0,0,0,128,126,1,0,0,0,128,127,1,0,0,0,129,132,
        1,0,0,0,130,128,1,0,0,0,130,131,1,0,0,0,131,133,1,0,0,0,132,130,
        1,0,0,0,133,134,3,78,39,0,134,11,1,0,0,0,135,136,5,4,0,0,136,137,
        3,66,33,0,137,13,1,0,0,0,138,143,3,36,18,0,139,143,3,42,21,0,140,
        143,3,44,22,0,141,143,3,46,23,0,142,138,1,0,0,0,142,139,1,0,0,0,
        142,140,1,0,0,0,142,141,1,0,0,0,143,15,1,0,0,0,144,148,3,18,9,0,
        145,148,3,26,13,0,146,148,3,30,15,0,147,144,1,0,0,0,147,145,1,0,
        0,0,147,146,1,0,0,0,148,17,1,0,0,0,149,150,5,5,0,0,150,156,5,26,
        0,0,151,155,3,20,10,0,152,155,3,22,11,0,153,155,5,26,0,0,154,151,
        1,0,0,0,154,152,1,0,0,0,154,153,1,0,0,0,155,158,1,0,0,0,156,154,
        1,0,0,0,156,157,1,0,0,0,157,159,1,0,0,0,158,156,1,0,0,0,159,160,
        3,78,39,0,160,19,1,0,0,0,161,162,5,6,0,0,162,163,5,23,0,0,163,164,
        3,76,38,0,164,165,5,26,0,0,165,21,1,0,0,0,166,167,5,7,0,0,167,168,
        5,23,0,0,168,169,3,24,12,0,169,170,3,76,38,0,170,171,5,26,0,0,171,
        23,1,0,0,0,172,173,5,25,0,0,173,25,1,0,0,0,174,175,5,8,0,0,175,181,
        5,26,0,0,176,180,3,20,10,0,177,180,3,28,14,0,178,180,5,26,0,0,179,
        176,1,0,0,0,179,177,1,0,0,0,179,178,1,0,0,0,180,183,1,0,0,0,181,
        179,1,0,0,0,181,182,1,0,0,0,182,184,1,0,0,0,183,181,1,0,0,0,184,
        185,3,78,39,0,185,27,1,0,0,0,186,187,5,9,0,0,187,188,5,23,0,0,188,
        189,3,76,38,0,189,190,5,26,0,0,190,29,1,0,0,0,191,192,5,10,0,0,192,
        198,5,26,0,0,193,197,3,32,16,0,194,197,3,34,17,0,195,197,5,26,0,
        0,196,193,1,0,0,0,196,194,1,0,0,0,196,195,1,0,0,0,197,200,1,0,0,
        0,198,196,1,0,0,0,198,199,1,0,0,0,199,201,1,0,0,0,200,198,1,0,0,
        0,201,202,3,78,39,0,202,31,1,0,0,0,203,204,5,2,0,0,204,205,5,23,
        0,0,205,206,3,76,38,0,206,207,5,26,0,0,207,33,1,0,0,0,208,209,5,
        11,0,0,209,210,5,23,0,0,210,211,3,76,38,0,211,212,5,26,0,0,212,35,
        1,0,0,0,213,214,5,12,0,0,214,215,5,23,0,0,215,216,3,56,28,0,216,
        217,3,66,33,0,217,224,5,26,0,0,218,223,3,38,19,0,219,223,3,40,20,
        0,220,223,3,50,25,0,221,223,5,26,0,0,222,218,1,0,0,0,222,219,1,0,
        0,0,222,220,1,0,0,0,222,221,1,0,0,0,223,226,1,0,0,0,224,222,1,0,
        0,0,224,225,1,0,0,0,225,227,1,0,0,0,226,224,1,0,0,0,227,228,3,78,
        39,0,228,37,1,0,0,0,229,237,5,13,0,0,230,231,5,14,0,0,231,232,5,
        23,0,0,232,237,3,58,29,0,233,234,5,15,0,0,234,235,5,23,0,0,235,237,
        3,58,29,0,236,229,1,0,0,0,236,230,1,0,0,0,236,233,1,0,0,0,237,238,
        1,0,0,0,238,243,5,26,0,0,239,242,3,52,26,0,240,242,5,26,0,0,241,
        239,1,0,0,0,241,240,1,0,0,0,242,245,1,0,0,0,243,241,1,0,0,0,243,
        244,1,0,0,0,244,246,1,0,0,0,245,243,1,0,0,0,246,247,3,78,39,0,247,
        39,1,0,0,0,248,249,5,16,0,0,249,250,5,23,0,0,250,251,3,58,29,0,251,
        252,5,26,0,0,252,41,1,0,0,0,253,254,5,17,0,0,254,255,5,23,0,0,255,
        256,3,60,30,0,256,257,3,66,33,0,257,262,5,26,0,0,258,261,3,54,27,
        0,259,261,5,26,0,0,260,258,1,0,0,0,260,259,1,0,0,0,261,264,1,0,0,
        0,262,260,1,0,0,0,262,263,1,0,0,0,263,265,1,0,0,0,264,262,1,0,0,
        0,265,266,3,78,39,0,266,43,1,0,0,0,267,268,5,18,0,0,268,269,5,23,
        0,0,269,270,3,62,31,0,270,271,3,66,33,0,271,276,5,26,0,0,272,275,
        3,54,27,0,273,275,5,26,0,0,274,272,1,0,0,0,274,273,1,0,0,0,275,278,
        1,0,0,0,276,274,1,0,0,0,276,277,1,0,0,0,277,279,1,0,0,0,278,276,
        1,0,0,0,279,280,3,78,39,0,280,45,1,0,0,0,281,282,5,19,0,0,282,283,
        5,23,0,0,283,284,3,64,32,0,284,285,3,66,33,0,285,290,5,26,0,0,286,
        289,3,54,27,0,287,289,5,26,0,0,288,286,1,0,0,0,288,287,1,0,0,0,289,
        292,1,0,0,0,290,288,1,0,0,0,290,291,1,0,0,0,291,293,1,0,0,0,292,
        290,1,0,0,0,293,294,3,78,39,0,294,47,1,0,0,0,295,296,5,25,0,0,296,
        297,5,23,0,0,297,298,3,76,38,0,298,299,5,26,0,0,299,49,1,0,0,0,300,
        301,5,25,0,0,301,302,5,23,0,0,302,303,3,76,38,0,303,304,5,26,0,0,
        304,51,1,0,0,0,305,306,5,25,0,0,306,307,5,23,0,0,307,308,3,76,38,
        0,308,309,5,26,0,0,309,53,1,0,0,0,310,311,5,25,0,0,311,312,5,23,
        0,0,312,313,3,76,38,0,313,314,5,26,0,0,314,55,1,0,0,0,315,316,5,
        25,0,0,316,57,1,0,0,0,317,321,5,25,0,0,318,320,5,25,0,0,319,318,
        1,0,0,0,320,323,1,0,0,0,321,319,1,0,0,0,321,322,1,0,0,0,322,59,1,
        0,0,0,323,321,1,0,0,0,324,325,5,25,0,0,325,61,1,0,0,0,326,327,5,
        25,0,0,327,63,1,0,0,0,328,329,5,25,0,0,329,65,1,0,0,0,330,331,5,
        25,0,0,331,67,1,0,0,0,332,333,5,25,0,0,333,69,1,0,0,0,334,335,5,
        25,0,0,335,71,1,0,0,0,336,337,5,25,0,0,337,73,1,0,0,0,338,339,5,
        25,0,0,339,75,1,0,0,0,340,344,5,25,0,0,341,343,5,25,0,0,342,341,
        1,0,0,0,343,346,1,0,0,0,344,342,1,0,0,0,344,345,1,0,0,0,345,77,1,
        0,0,0,346,344,1,0,0,0,347,348,7,0,0,0,348,79,1,0,0,0,30,82,84,91,
        99,112,114,121,128,130,142,147,154,156,179,181,196,198,222,224,236,
        241,243,260,262,274,276,288,290,321,344
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
    public propertyCondition(): PropertyConditionContext[];
    public propertyCondition(i: number): PropertyConditionContext | null;
    public propertyCondition(i?: number): PropertyConditionContext[] | PropertyConditionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PropertyConditionContext);
        }

        return this.getRuleContext(i, PropertyConditionContext);
    }
    public objectWeaponSetWeapon(): ObjectWeaponSetWeaponContext[];
    public objectWeaponSetWeapon(i: number): ObjectWeaponSetWeaponContext | null;
    public objectWeaponSetWeapon(i?: number): ObjectWeaponSetWeaponContext[] | ObjectWeaponSetWeaponContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ObjectWeaponSetWeaponContext);
        }

        return this.getRuleContext(i, ObjectWeaponSetWeaponContext);
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


export class PropertyConditionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
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
        return MapIniParser.RULE_propertyCondition;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterPropertyCondition) {
             listener.enterPropertyCondition(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitPropertyCondition) {
             listener.exitPropertyCondition(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitPropertyCondition) {
            return visitor.visitPropertyCondition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ObjectWeaponSetWeaponContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public weaponSlot_value(): WeaponSlot_valueContext {
        return this.getRuleContext(0, WeaponSlot_valueContext)!;
    }
    public property_values(): Property_valuesContext {
        return this.getRuleContext(0, Property_valuesContext)!;
    }
    public NEWLINE(): antlr.TerminalNode {
        return this.getToken(MapIniParser.NEWLINE, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_objectWeaponSetWeapon;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterObjectWeaponSetWeapon) {
             listener.enterObjectWeaponSetWeapon(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitObjectWeaponSetWeapon) {
             listener.exitObjectWeaponSetWeapon(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitObjectWeaponSetWeapon) {
            return visitor.visitObjectWeaponSetWeapon(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WeaponSlot_valueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_weaponSlot_value;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterWeaponSlot_value) {
             listener.enterWeaponSlot_value(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitWeaponSlot_value) {
             listener.exitWeaponSlot_value(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitWeaponSlot_value) {
            return visitor.visitWeaponSlot_value(this);
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
    public propertyCondition(): PropertyConditionContext[];
    public propertyCondition(i: number): PropertyConditionContext | null;
    public propertyCondition(i?: number): PropertyConditionContext[] | PropertyConditionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PropertyConditionContext);
        }

        return this.getRuleContext(i, PropertyConditionContext);
    }
    public objectArmorSetArmor(): ObjectArmorSetArmorContext[];
    public objectArmorSetArmor(i: number): ObjectArmorSetArmorContext | null;
    public objectArmorSetArmor(i?: number): ObjectArmorSetArmorContext[] | ObjectArmorSetArmorContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ObjectArmorSetArmorContext);
        }

        return this.getRuleContext(i, ObjectArmorSetArmorContext);
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


export class ObjectArmorSetArmorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
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
        return MapIniParser.RULE_objectArmorSetArmor;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterObjectArmorSetArmor) {
             listener.enterObjectArmorSetArmor(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitObjectArmorSetArmor) {
             listener.exitObjectArmorSetArmor(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitObjectArmorSetArmor) {
            return visitor.visitObjectArmorSetArmor(this);
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
    public objectPrerequisite_object(): ObjectPrerequisite_objectContext[];
    public objectPrerequisite_object(i: number): ObjectPrerequisite_objectContext | null;
    public objectPrerequisite_object(i?: number): ObjectPrerequisite_objectContext[] | ObjectPrerequisite_objectContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ObjectPrerequisite_objectContext);
        }

        return this.getRuleContext(i, ObjectPrerequisite_objectContext);
    }
    public objectPrerequisite_science(): ObjectPrerequisite_scienceContext[];
    public objectPrerequisite_science(i: number): ObjectPrerequisite_scienceContext | null;
    public objectPrerequisite_science(i?: number): ObjectPrerequisite_scienceContext[] | ObjectPrerequisite_scienceContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ObjectPrerequisite_scienceContext);
        }

        return this.getRuleContext(i, ObjectPrerequisite_scienceContext);
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


export class ObjectPrerequisite_objectContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
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
        return MapIniParser.RULE_objectPrerequisite_object;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterObjectPrerequisite_object) {
             listener.enterObjectPrerequisite_object(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitObjectPrerequisite_object) {
             listener.exitObjectPrerequisite_object(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitObjectPrerequisite_object) {
            return visitor.visitObjectPrerequisite_object(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ObjectPrerequisite_scienceContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
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
        return MapIniParser.RULE_objectPrerequisite_science;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterObjectPrerequisite_science) {
             listener.enterObjectPrerequisite_science(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitObjectPrerequisite_science) {
             listener.exitObjectPrerequisite_science(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitObjectPrerequisite_science) {
            return visitor.visitObjectPrerequisite_science(this);
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
