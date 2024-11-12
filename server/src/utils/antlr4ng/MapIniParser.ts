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
    public static readonly T__22 = 23;
    public static readonly T__23 = 24;
    public static readonly T__24 = 25;
    public static readonly T__25 = 26;
    public static readonly T__26 = 27;
    public static readonly T__27 = 28;
    public static readonly T__28 = 29;
    public static readonly T__29 = 30;
    public static readonly T__30 = 31;
    public static readonly T__31 = 32;
    public static readonly T__32 = 33;
    public static readonly T__33 = 34;
    public static readonly T__34 = 35;
    public static readonly T__35 = 36;
    public static readonly T__36 = 37;
    public static readonly T__37 = 38;
    public static readonly TURRET = 39;
    public static readonly EQ = 40;
    public static readonly STRING = 41;
    public static readonly ID = 42;
    public static readonly NEWLINE = 43;
    public static readonly WS = 44;
    public static readonly COMMENT = 45;
    public static readonly RULE_program = 0;
    public static readonly RULE_class = 1;
    public static readonly RULE_simpleClass = 2;
    public static readonly RULE_class_identifier = 3;
    public static readonly RULE_class_value = 4;
    public static readonly RULE_objectReskinClass = 5;
    public static readonly RULE_objectReskin_identifier = 6;
    public static readonly RULE_objectClass = 7;
    public static readonly RULE_object_identifier = 8;
    public static readonly RULE_module_modifier = 9;
    public static readonly RULE_addModule = 10;
    public static readonly RULE_removeModule = 11;
    public static readonly RULE_module = 12;
    public static readonly RULE_objectSets = 13;
    public static readonly RULE_objectWeaponSet = 14;
    public static readonly RULE_objectWeaponSetProperty = 15;
    public static readonly RULE_objectArmorSet = 16;
    public static readonly RULE_objectArmorSetProperty = 17;
    public static readonly RULE_objectPrerequisite = 18;
    public static readonly RULE_objectPrerequisiteProperty = 19;
    public static readonly RULE_objectUnitSpecificSounds = 20;
    public static readonly RULE_objectUnitSpecificSoundsProperty = 21;
    public static readonly RULE_objectUnitSpecificFX = 22;
    public static readonly RULE_objectUnitSpecificFXProperty = 23;
    public static readonly RULE_drawModule = 24;
    public static readonly RULE_conditionState = 25;
    public static readonly RULE_defaultConditionStateBlock = 26;
    public static readonly RULE_conditionStateBlock = 27;
    public static readonly RULE_transitionStateBlock = 28;
    public static readonly RULE_aliasCondition = 29;
    public static readonly RULE_bodyModule = 30;
    public static readonly RULE_bodyModuleProperty = 31;
    public static readonly RULE_behaviorModule = 32;
    public static readonly RULE_behaviorModuleProperty = 33;
    public static readonly RULE_turretBlock = 34;
    public static readonly RULE_turretProperty = 35;
    public static readonly RULE_clientModule = 36;
    public static readonly RULE_clientModuleProperty = 37;
    public static readonly RULE_objectProperty = 38;
    public static readonly RULE_drawModuleProperty = 39;
    public static readonly RULE_conditionStateProperty = 40;
    public static readonly RULE_property = 41;
    public static readonly RULE_drawModule_type = 42;
    public static readonly RULE_conditionState_values = 43;
    public static readonly RULE_bodyModule_type = 44;
    public static readonly RULE_behaviorModule_type = 45;
    public static readonly RULE_clientModule_type = 46;
    public static readonly RULE_moduleTag_value = 47;
    public static readonly RULE_mappedImage_value = 48;
    public static readonly RULE_object_value = 49;
    public static readonly RULE_locomotor_modifier = 50;
    public static readonly RULE_property_values = 51;
    public static readonly RULE_property_value = 52;
    public static readonly RULE_end = 53;

    public static readonly literalNames = [
        null, "'Animation'", "'Armor'", "'AudioEvent'", "'CommandButton'", 
        "'CommandSet'", "'DamageFX'", "'DialogEvent'", "'FXList'", "'InGameUI'", 
        "'Locomotor'", "'ParticleSystem'", "'Rank'", "'Science'", "'SpecialPower'", 
        "'Upgrade'", "'WaterTransparency'", "'Weapon'", "'Weather'", "'ObjectReskin'", 
        "'Object'", "'AddModule'", "'RemoveModule'", "'WeaponSet'", "'ArmorSet'", 
        "'Prerequisites'", "'UnitSpecificSounds'", "'UnitSpecificFX'", "'Draw'", 
        "'DefaultConditionState'", "'ConditionState'", "'TransitionState'", 
        "'AliasConditionState'", "'Body'", "'Behavior'", "'ClientUpdate'", 
        "'End'", "'end'", "'END'", null, "'='"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, "TURRET", "EQ", "STRING", "ID", 
        "NEWLINE", "WS", "COMMENT"
    ];
    public static readonly ruleNames = [
        "program", "class", "simpleClass", "class_identifier", "class_value", 
        "objectReskinClass", "objectReskin_identifier", "objectClass", "object_identifier", 
        "module_modifier", "addModule", "removeModule", "module", "objectSets", 
        "objectWeaponSet", "objectWeaponSetProperty", "objectArmorSet", 
        "objectArmorSetProperty", "objectPrerequisite", "objectPrerequisiteProperty", 
        "objectUnitSpecificSounds", "objectUnitSpecificSoundsProperty", 
        "objectUnitSpecificFX", "objectUnitSpecificFXProperty", "drawModule", 
        "conditionState", "defaultConditionStateBlock", "conditionStateBlock", 
        "transitionStateBlock", "aliasCondition", "bodyModule", "bodyModuleProperty", 
        "behaviorModule", "behaviorModuleProperty", "turretBlock", "turretProperty", 
        "clientModule", "clientModuleProperty", "objectProperty", "drawModuleProperty", 
        "conditionStateProperty", "property", "drawModule_type", "conditionState_values", 
        "bodyModule_type", "behaviorModule_type", "clientModule_type", "moduleTag_value", 
        "mappedImage_value", "object_value", "locomotor_modifier", "property_values", 
        "property_value", "end",
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
            this.state = 112;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2097150) !== 0) || _la === 43) {
                {
                this.state = 110;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.T__0:
                case MapIniParser.T__1:
                case MapIniParser.T__2:
                case MapIniParser.T__3:
                case MapIniParser.T__4:
                case MapIniParser.T__5:
                case MapIniParser.T__6:
                case MapIniParser.T__7:
                case MapIniParser.T__8:
                case MapIniParser.T__9:
                case MapIniParser.T__10:
                case MapIniParser.T__11:
                case MapIniParser.T__12:
                case MapIniParser.T__13:
                case MapIniParser.T__14:
                case MapIniParser.T__15:
                case MapIniParser.T__16:
                case MapIniParser.T__17:
                case MapIniParser.T__18:
                case MapIniParser.T__19:
                    {
                    this.state = 108;
                    this.class_();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 109;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 114;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 115;
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
            this.state = 120;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__0:
            case MapIniParser.T__1:
            case MapIniParser.T__2:
            case MapIniParser.T__3:
            case MapIniParser.T__4:
            case MapIniParser.T__5:
            case MapIniParser.T__6:
            case MapIniParser.T__7:
            case MapIniParser.T__8:
            case MapIniParser.T__9:
            case MapIniParser.T__10:
            case MapIniParser.T__11:
            case MapIniParser.T__12:
            case MapIniParser.T__13:
            case MapIniParser.T__14:
            case MapIniParser.T__15:
            case MapIniParser.T__16:
            case MapIniParser.T__17:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 117;
                this.simpleClass();
                }
                break;
            case MapIniParser.T__19:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 118;
                this.objectClass();
                }
                break;
            case MapIniParser.T__18:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 119;
                this.objectReskinClass();
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
    public simpleClass(): SimpleClassContext {
        let localContext = new SimpleClassContext(this.context, this.state);
        this.enterRule(localContext, 4, MapIniParser.RULE_simpleClass);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 122;
            this.class_identifier();
            this.state = 123;
            this.class_value();
            this.state = 124;
            this.match(MapIniParser.NEWLINE);
            this.state = 129;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 524286) !== 0) || _la === 42 || _la === 43) {
                {
                this.state = 127;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.T__0:
                case MapIniParser.T__1:
                case MapIniParser.T__2:
                case MapIniParser.T__3:
                case MapIniParser.T__4:
                case MapIniParser.T__5:
                case MapIniParser.T__6:
                case MapIniParser.T__7:
                case MapIniParser.T__8:
                case MapIniParser.T__9:
                case MapIniParser.T__10:
                case MapIniParser.T__11:
                case MapIniParser.T__12:
                case MapIniParser.T__13:
                case MapIniParser.T__14:
                case MapIniParser.T__15:
                case MapIniParser.T__16:
                case MapIniParser.T__17:
                case MapIniParser.ID:
                    {
                    this.state = 125;
                    this.property();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 126;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 131;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 132;
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
        this.enterRule(localContext, 6, MapIniParser.RULE_class_identifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 134;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 524286) !== 0))) {
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
    public class_value(): Class_valueContext {
        let localContext = new Class_valueContext(this.context, this.state);
        this.enterRule(localContext, 8, MapIniParser.RULE_class_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 136;
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
    public objectReskinClass(): ObjectReskinClassContext {
        let localContext = new ObjectReskinClassContext(this.context, this.state);
        this.enterRule(localContext, 10, MapIniParser.RULE_objectReskinClass);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 138;
            this.objectReskin_identifier();
            this.state = 139;
            this.object_value();
            this.state = 140;
            this.object_value();
            this.state = 141;
            this.match(MapIniParser.NEWLINE);
            this.state = 151;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 535298046) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1543) !== 0)) {
                {
                this.state = 149;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.T__20:
                case MapIniParser.T__21:
                    {
                    this.state = 142;
                    this.module_modifier();
                    }
                    break;
                case MapIniParser.T__27:
                case MapIniParser.T__32:
                case MapIniParser.T__33:
                case MapIniParser.T__34:
                    {
                    this.state = 143;
                    this.module_();
                    }
                    break;
                case MapIniParser.T__0:
                case MapIniParser.T__1:
                case MapIniParser.T__2:
                case MapIniParser.T__3:
                case MapIniParser.T__4:
                case MapIniParser.T__5:
                case MapIniParser.T__6:
                case MapIniParser.T__7:
                case MapIniParser.T__8:
                case MapIniParser.T__9:
                case MapIniParser.T__10:
                case MapIniParser.T__11:
                case MapIniParser.T__12:
                case MapIniParser.T__13:
                case MapIniParser.T__14:
                case MapIniParser.T__15:
                case MapIniParser.T__16:
                case MapIniParser.T__17:
                case MapIniParser.ID:
                    {
                    this.state = 144;
                    this.objectProperty();
                    }
                    break;
                case MapIniParser.T__22:
                case MapIniParser.T__23:
                case MapIniParser.T__24:
                    {
                    this.state = 145;
                    this.objectSets();
                    }
                    break;
                case MapIniParser.T__25:
                    {
                    this.state = 146;
                    this.objectUnitSpecificSounds();
                    }
                    break;
                case MapIniParser.T__26:
                    {
                    this.state = 147;
                    this.objectUnitSpecificFX();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 148;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 153;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 154;
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
    public objectReskin_identifier(): ObjectReskin_identifierContext {
        let localContext = new ObjectReskin_identifierContext(this.context, this.state);
        this.enterRule(localContext, 12, MapIniParser.RULE_objectReskin_identifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 156;
            this.match(MapIniParser.T__18);
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
        this.enterRule(localContext, 14, MapIniParser.RULE_objectClass);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 158;
            this.object_identifier();
            this.state = 159;
            this.object_value();
            this.state = 160;
            this.match(MapIniParser.NEWLINE);
            this.state = 170;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 535298046) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1543) !== 0)) {
                {
                this.state = 168;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.T__20:
                case MapIniParser.T__21:
                    {
                    this.state = 161;
                    this.module_modifier();
                    }
                    break;
                case MapIniParser.T__27:
                case MapIniParser.T__32:
                case MapIniParser.T__33:
                case MapIniParser.T__34:
                    {
                    this.state = 162;
                    this.module_();
                    }
                    break;
                case MapIniParser.T__0:
                case MapIniParser.T__1:
                case MapIniParser.T__2:
                case MapIniParser.T__3:
                case MapIniParser.T__4:
                case MapIniParser.T__5:
                case MapIniParser.T__6:
                case MapIniParser.T__7:
                case MapIniParser.T__8:
                case MapIniParser.T__9:
                case MapIniParser.T__10:
                case MapIniParser.T__11:
                case MapIniParser.T__12:
                case MapIniParser.T__13:
                case MapIniParser.T__14:
                case MapIniParser.T__15:
                case MapIniParser.T__16:
                case MapIniParser.T__17:
                case MapIniParser.ID:
                    {
                    this.state = 163;
                    this.objectProperty();
                    }
                    break;
                case MapIniParser.T__22:
                case MapIniParser.T__23:
                case MapIniParser.T__24:
                    {
                    this.state = 164;
                    this.objectSets();
                    }
                    break;
                case MapIniParser.T__25:
                    {
                    this.state = 165;
                    this.objectUnitSpecificSounds();
                    }
                    break;
                case MapIniParser.T__26:
                    {
                    this.state = 166;
                    this.objectUnitSpecificFX();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 167;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 172;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 173;
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
    public object_identifier(): Object_identifierContext {
        let localContext = new Object_identifierContext(this.context, this.state);
        this.enterRule(localContext, 16, MapIniParser.RULE_object_identifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 175;
            this.match(MapIniParser.T__19);
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
        this.enterRule(localContext, 18, MapIniParser.RULE_module_modifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 179;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__20:
                {
                this.state = 177;
                this.addModule();
                }
                break;
            case MapIniParser.T__21:
                {
                this.state = 178;
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
        this.enterRule(localContext, 20, MapIniParser.RULE_addModule);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 181;
            this.match(MapIniParser.T__20);
            this.state = 182;
            this.match(MapIniParser.NEWLINE);
            this.state = 188;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 268959742) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1543) !== 0)) {
                {
                this.state = 186;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.T__27:
                case MapIniParser.T__32:
                case MapIniParser.T__33:
                case MapIniParser.T__34:
                    {
                    this.state = 183;
                    this.module_();
                    }
                    break;
                case MapIniParser.T__0:
                case MapIniParser.T__1:
                case MapIniParser.T__2:
                case MapIniParser.T__3:
                case MapIniParser.T__4:
                case MapIniParser.T__5:
                case MapIniParser.T__6:
                case MapIniParser.T__7:
                case MapIniParser.T__8:
                case MapIniParser.T__9:
                case MapIniParser.T__10:
                case MapIniParser.T__11:
                case MapIniParser.T__12:
                case MapIniParser.T__13:
                case MapIniParser.T__14:
                case MapIniParser.T__15:
                case MapIniParser.T__16:
                case MapIniParser.T__17:
                case MapIniParser.ID:
                    {
                    this.state = 184;
                    this.objectProperty();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 185;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 190;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 191;
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
        this.enterRule(localContext, 22, MapIniParser.RULE_removeModule);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 193;
            this.match(MapIniParser.T__21);
            this.state = 194;
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
        this.enterRule(localContext, 24, MapIniParser.RULE_module);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 200;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__27:
                {
                this.state = 196;
                this.drawModule();
                }
                break;
            case MapIniParser.T__32:
                {
                this.state = 197;
                this.bodyModule();
                }
                break;
            case MapIniParser.T__33:
                {
                this.state = 198;
                this.behaviorModule();
                }
                break;
            case MapIniParser.T__34:
                {
                this.state = 199;
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
        this.enterRule(localContext, 26, MapIniParser.RULE_objectSets);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 205;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__22:
                {
                this.state = 202;
                this.objectWeaponSet();
                }
                break;
            case MapIniParser.T__23:
                {
                this.state = 203;
                this.objectArmorSet();
                }
                break;
            case MapIniParser.T__24:
                {
                this.state = 204;
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
        this.enterRule(localContext, 28, MapIniParser.RULE_objectWeaponSet);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 207;
            this.match(MapIniParser.T__22);
            this.state = 208;
            this.match(MapIniParser.NEWLINE);
            this.state = 213;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 524286) !== 0) || _la === 42 || _la === 43) {
                {
                this.state = 211;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.T__0:
                case MapIniParser.T__1:
                case MapIniParser.T__2:
                case MapIniParser.T__3:
                case MapIniParser.T__4:
                case MapIniParser.T__5:
                case MapIniParser.T__6:
                case MapIniParser.T__7:
                case MapIniParser.T__8:
                case MapIniParser.T__9:
                case MapIniParser.T__10:
                case MapIniParser.T__11:
                case MapIniParser.T__12:
                case MapIniParser.T__13:
                case MapIniParser.T__14:
                case MapIniParser.T__15:
                case MapIniParser.T__16:
                case MapIniParser.T__17:
                case MapIniParser.ID:
                    {
                    this.state = 209;
                    this.objectWeaponSetProperty();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 210;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 215;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 216;
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
        this.enterRule(localContext, 30, MapIniParser.RULE_objectWeaponSetProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 220;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.ID:
                {
                this.state = 218;
                this.match(MapIniParser.ID);
                }
                break;
            case MapIniParser.T__0:
            case MapIniParser.T__1:
            case MapIniParser.T__2:
            case MapIniParser.T__3:
            case MapIniParser.T__4:
            case MapIniParser.T__5:
            case MapIniParser.T__6:
            case MapIniParser.T__7:
            case MapIniParser.T__8:
            case MapIniParser.T__9:
            case MapIniParser.T__10:
            case MapIniParser.T__11:
            case MapIniParser.T__12:
            case MapIniParser.T__13:
            case MapIniParser.T__14:
            case MapIniParser.T__15:
            case MapIniParser.T__16:
            case MapIniParser.T__17:
                {
                this.state = 219;
                this.class_identifier();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
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
    public objectArmorSet(): ObjectArmorSetContext {
        let localContext = new ObjectArmorSetContext(this.context, this.state);
        this.enterRule(localContext, 32, MapIniParser.RULE_objectArmorSet);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 226;
            this.match(MapIniParser.T__23);
            this.state = 227;
            this.match(MapIniParser.NEWLINE);
            this.state = 232;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 524286) !== 0) || _la === 42 || _la === 43) {
                {
                this.state = 230;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.T__0:
                case MapIniParser.T__1:
                case MapIniParser.T__2:
                case MapIniParser.T__3:
                case MapIniParser.T__4:
                case MapIniParser.T__5:
                case MapIniParser.T__6:
                case MapIniParser.T__7:
                case MapIniParser.T__8:
                case MapIniParser.T__9:
                case MapIniParser.T__10:
                case MapIniParser.T__11:
                case MapIniParser.T__12:
                case MapIniParser.T__13:
                case MapIniParser.T__14:
                case MapIniParser.T__15:
                case MapIniParser.T__16:
                case MapIniParser.T__17:
                case MapIniParser.ID:
                    {
                    this.state = 228;
                    this.objectArmorSetProperty();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 229;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 234;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 235;
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
        this.enterRule(localContext, 34, MapIniParser.RULE_objectArmorSetProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 239;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.ID:
                {
                this.state = 237;
                this.match(MapIniParser.ID);
                }
                break;
            case MapIniParser.T__0:
            case MapIniParser.T__1:
            case MapIniParser.T__2:
            case MapIniParser.T__3:
            case MapIniParser.T__4:
            case MapIniParser.T__5:
            case MapIniParser.T__6:
            case MapIniParser.T__7:
            case MapIniParser.T__8:
            case MapIniParser.T__9:
            case MapIniParser.T__10:
            case MapIniParser.T__11:
            case MapIniParser.T__12:
            case MapIniParser.T__13:
            case MapIniParser.T__14:
            case MapIniParser.T__15:
            case MapIniParser.T__16:
            case MapIniParser.T__17:
                {
                this.state = 238;
                this.class_identifier();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
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
    public objectPrerequisite(): ObjectPrerequisiteContext {
        let localContext = new ObjectPrerequisiteContext(this.context, this.state);
        this.enterRule(localContext, 36, MapIniParser.RULE_objectPrerequisite);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 245;
            this.match(MapIniParser.T__24);
            this.state = 246;
            this.match(MapIniParser.NEWLINE);
            this.state = 251;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1572862) !== 0) || _la === 42 || _la === 43) {
                {
                this.state = 249;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.T__0:
                case MapIniParser.T__1:
                case MapIniParser.T__2:
                case MapIniParser.T__3:
                case MapIniParser.T__4:
                case MapIniParser.T__5:
                case MapIniParser.T__6:
                case MapIniParser.T__7:
                case MapIniParser.T__8:
                case MapIniParser.T__9:
                case MapIniParser.T__10:
                case MapIniParser.T__11:
                case MapIniParser.T__12:
                case MapIniParser.T__13:
                case MapIniParser.T__14:
                case MapIniParser.T__15:
                case MapIniParser.T__16:
                case MapIniParser.T__17:
                case MapIniParser.T__19:
                case MapIniParser.ID:
                    {
                    this.state = 247;
                    this.objectPrerequisiteProperty();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 248;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 253;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 254;
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
        this.enterRule(localContext, 38, MapIniParser.RULE_objectPrerequisiteProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 259;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.ID:
                {
                this.state = 256;
                this.match(MapIniParser.ID);
                }
                break;
            case MapIniParser.T__0:
            case MapIniParser.T__1:
            case MapIniParser.T__2:
            case MapIniParser.T__3:
            case MapIniParser.T__4:
            case MapIniParser.T__5:
            case MapIniParser.T__6:
            case MapIniParser.T__7:
            case MapIniParser.T__8:
            case MapIniParser.T__9:
            case MapIniParser.T__10:
            case MapIniParser.T__11:
            case MapIniParser.T__12:
            case MapIniParser.T__13:
            case MapIniParser.T__14:
            case MapIniParser.T__15:
            case MapIniParser.T__16:
            case MapIniParser.T__17:
                {
                this.state = 257;
                this.class_identifier();
                }
                break;
            case MapIniParser.T__19:
                {
                this.state = 258;
                this.object_identifier();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 261;
            this.match(MapIniParser.EQ);
            this.state = 262;
            this.property_values();
            this.state = 263;
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
        this.enterRule(localContext, 40, MapIniParser.RULE_objectUnitSpecificSounds);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 265;
            this.match(MapIniParser.T__25);
            this.state = 266;
            this.match(MapIniParser.NEWLINE);
            this.state = 271;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 42 || _la === 43) {
                {
                this.state = 269;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.ID:
                    {
                    this.state = 267;
                    this.objectUnitSpecificSoundsProperty();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 268;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 273;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 274;
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
        this.enterRule(localContext, 42, MapIniParser.RULE_objectUnitSpecificSoundsProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 276;
            this.match(MapIniParser.ID);
            this.state = 277;
            this.match(MapIniParser.EQ);
            this.state = 278;
            this.property_values();
            this.state = 279;
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
        this.enterRule(localContext, 44, MapIniParser.RULE_objectUnitSpecificFX);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 281;
            this.match(MapIniParser.T__26);
            this.state = 282;
            this.match(MapIniParser.NEWLINE);
            this.state = 287;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 42 || _la === 43) {
                {
                this.state = 285;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.ID:
                    {
                    this.state = 283;
                    this.objectUnitSpecificFXProperty();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 284;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 289;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 290;
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
        this.enterRule(localContext, 46, MapIniParser.RULE_objectUnitSpecificFXProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 292;
            this.match(MapIniParser.ID);
            this.state = 293;
            this.match(MapIniParser.EQ);
            this.state = 294;
            this.property_values();
            this.state = 295;
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
        this.enterRule(localContext, 48, MapIniParser.RULE_drawModule);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 297;
            this.match(MapIniParser.T__27);
            this.state = 298;
            this.match(MapIniParser.EQ);
            this.state = 299;
            this.drawModule_type();
            this.state = 300;
            this.moduleTag_value();
            this.state = 301;
            this.match(MapIniParser.NEWLINE);
            this.state = 308;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & 24591) !== 0)) {
                {
                this.state = 306;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.T__28:
                case MapIniParser.T__29:
                case MapIniParser.T__30:
                    {
                    this.state = 302;
                    this.conditionState();
                    }
                    break;
                case MapIniParser.T__31:
                    {
                    this.state = 303;
                    this.aliasCondition();
                    }
                    break;
                case MapIniParser.ID:
                    {
                    this.state = 304;
                    this.drawModuleProperty();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 305;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 310;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 311;
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
        this.enterRule(localContext, 50, MapIniParser.RULE_conditionState);
        try {
            this.state = 316;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__28:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 313;
                this.defaultConditionStateBlock();
                }
                break;
            case MapIniParser.T__29:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 314;
                this.conditionStateBlock();
                }
                break;
            case MapIniParser.T__30:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 315;
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
        this.enterRule(localContext, 52, MapIniParser.RULE_defaultConditionStateBlock);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 318;
            this.match(MapIniParser.T__28);
            this.state = 319;
            this.match(MapIniParser.NEWLINE);
            this.state = 324;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 524286) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 25) !== 0)) {
                {
                this.state = 322;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.T__0:
                case MapIniParser.T__1:
                case MapIniParser.T__2:
                case MapIniParser.T__3:
                case MapIniParser.T__4:
                case MapIniParser.T__5:
                case MapIniParser.T__6:
                case MapIniParser.T__7:
                case MapIniParser.T__8:
                case MapIniParser.T__9:
                case MapIniParser.T__10:
                case MapIniParser.T__11:
                case MapIniParser.T__12:
                case MapIniParser.T__13:
                case MapIniParser.T__14:
                case MapIniParser.T__15:
                case MapIniParser.T__16:
                case MapIniParser.T__17:
                case MapIniParser.TURRET:
                case MapIniParser.ID:
                    {
                    this.state = 320;
                    this.conditionStateProperty();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 321;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 326;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 327;
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
    public conditionStateBlock(): ConditionStateBlockContext {
        let localContext = new ConditionStateBlockContext(this.context, this.state);
        this.enterRule(localContext, 54, MapIniParser.RULE_conditionStateBlock);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 329;
            this.match(MapIniParser.T__29);
            this.state = 330;
            this.match(MapIniParser.EQ);
            this.state = 331;
            this.conditionState_values();
            this.state = 332;
            this.match(MapIniParser.NEWLINE);
            this.state = 337;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 524286) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 25) !== 0)) {
                {
                this.state = 335;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.T__0:
                case MapIniParser.T__1:
                case MapIniParser.T__2:
                case MapIniParser.T__3:
                case MapIniParser.T__4:
                case MapIniParser.T__5:
                case MapIniParser.T__6:
                case MapIniParser.T__7:
                case MapIniParser.T__8:
                case MapIniParser.T__9:
                case MapIniParser.T__10:
                case MapIniParser.T__11:
                case MapIniParser.T__12:
                case MapIniParser.T__13:
                case MapIniParser.T__14:
                case MapIniParser.T__15:
                case MapIniParser.T__16:
                case MapIniParser.T__17:
                case MapIniParser.TURRET:
                case MapIniParser.ID:
                    {
                    this.state = 333;
                    this.conditionStateProperty();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 334;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 339;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 340;
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
        this.enterRule(localContext, 56, MapIniParser.RULE_transitionStateBlock);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 342;
            this.match(MapIniParser.T__30);
            this.state = 343;
            this.match(MapIniParser.EQ);
            this.state = 344;
            this.conditionState_values();
            this.state = 345;
            this.match(MapIniParser.NEWLINE);
            this.state = 350;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 524286) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 25) !== 0)) {
                {
                this.state = 348;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.T__0:
                case MapIniParser.T__1:
                case MapIniParser.T__2:
                case MapIniParser.T__3:
                case MapIniParser.T__4:
                case MapIniParser.T__5:
                case MapIniParser.T__6:
                case MapIniParser.T__7:
                case MapIniParser.T__8:
                case MapIniParser.T__9:
                case MapIniParser.T__10:
                case MapIniParser.T__11:
                case MapIniParser.T__12:
                case MapIniParser.T__13:
                case MapIniParser.T__14:
                case MapIniParser.T__15:
                case MapIniParser.T__16:
                case MapIniParser.T__17:
                case MapIniParser.TURRET:
                case MapIniParser.ID:
                    {
                    this.state = 346;
                    this.conditionStateProperty();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 347;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 352;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 353;
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
        this.enterRule(localContext, 58, MapIniParser.RULE_aliasCondition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 355;
            this.match(MapIniParser.T__31);
            this.state = 356;
            this.match(MapIniParser.EQ);
            this.state = 357;
            this.conditionState_values();
            this.state = 358;
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
        this.enterRule(localContext, 60, MapIniParser.RULE_bodyModule);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 360;
            this.match(MapIniParser.T__32);
            this.state = 361;
            this.match(MapIniParser.EQ);
            this.state = 362;
            this.bodyModule_type();
            this.state = 363;
            this.moduleTag_value();
            this.state = 364;
            this.match(MapIniParser.NEWLINE);
            this.state = 369;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 42 || _la === 43) {
                {
                this.state = 367;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.ID:
                    {
                    this.state = 365;
                    this.bodyModuleProperty();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 366;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 371;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 372;
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
        this.enterRule(localContext, 62, MapIniParser.RULE_bodyModuleProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 374;
            this.match(MapIniParser.ID);
            this.state = 375;
            this.match(MapIniParser.EQ);
            this.state = 376;
            this.property_values();
            this.state = 377;
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
        this.enterRule(localContext, 64, MapIniParser.RULE_behaviorModule);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 379;
            this.match(MapIniParser.T__33);
            this.state = 380;
            this.match(MapIniParser.EQ);
            this.state = 381;
            this.behaviorModule_type();
            this.state = 382;
            this.moduleTag_value();
            this.state = 383;
            this.match(MapIniParser.NEWLINE);
            this.state = 389;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 524286) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 25) !== 0)) {
                {
                this.state = 387;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.T__0:
                case MapIniParser.T__1:
                case MapIniParser.T__2:
                case MapIniParser.T__3:
                case MapIniParser.T__4:
                case MapIniParser.T__5:
                case MapIniParser.T__6:
                case MapIniParser.T__7:
                case MapIniParser.T__8:
                case MapIniParser.T__9:
                case MapIniParser.T__10:
                case MapIniParser.T__11:
                case MapIniParser.T__12:
                case MapIniParser.T__13:
                case MapIniParser.T__14:
                case MapIniParser.T__15:
                case MapIniParser.T__16:
                case MapIniParser.T__17:
                case MapIniParser.ID:
                    {
                    this.state = 384;
                    this.behaviorModuleProperty();
                    }
                    break;
                case MapIniParser.TURRET:
                    {
                    this.state = 385;
                    this.turretBlock();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 386;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 391;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 392;
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
        this.enterRule(localContext, 66, MapIniParser.RULE_behaviorModuleProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 396;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.ID:
                {
                this.state = 394;
                this.match(MapIniParser.ID);
                }
                break;
            case MapIniParser.T__0:
            case MapIniParser.T__1:
            case MapIniParser.T__2:
            case MapIniParser.T__3:
            case MapIniParser.T__4:
            case MapIniParser.T__5:
            case MapIniParser.T__6:
            case MapIniParser.T__7:
            case MapIniParser.T__8:
            case MapIniParser.T__9:
            case MapIniParser.T__10:
            case MapIniParser.T__11:
            case MapIniParser.T__12:
            case MapIniParser.T__13:
            case MapIniParser.T__14:
            case MapIniParser.T__15:
            case MapIniParser.T__16:
            case MapIniParser.T__17:
                {
                this.state = 395;
                this.class_identifier();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 398;
            this.match(MapIniParser.EQ);
            this.state = 399;
            this.property_values();
            this.state = 400;
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
    public turretBlock(): TurretBlockContext {
        let localContext = new TurretBlockContext(this.context, this.state);
        this.enterRule(localContext, 68, MapIniParser.RULE_turretBlock);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 402;
            this.match(MapIniParser.TURRET);
            this.state = 403;
            this.match(MapIniParser.NEWLINE);
            this.state = 408;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1572862) !== 0) || _la === 42 || _la === 43) {
                {
                this.state = 406;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.T__0:
                case MapIniParser.T__1:
                case MapIniParser.T__2:
                case MapIniParser.T__3:
                case MapIniParser.T__4:
                case MapIniParser.T__5:
                case MapIniParser.T__6:
                case MapIniParser.T__7:
                case MapIniParser.T__8:
                case MapIniParser.T__9:
                case MapIniParser.T__10:
                case MapIniParser.T__11:
                case MapIniParser.T__12:
                case MapIniParser.T__13:
                case MapIniParser.T__14:
                case MapIniParser.T__15:
                case MapIniParser.T__16:
                case MapIniParser.T__17:
                case MapIniParser.T__19:
                case MapIniParser.ID:
                    {
                    this.state = 404;
                    this.turretProperty();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 405;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 410;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 411;
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
    public turretProperty(): TurretPropertyContext {
        let localContext = new TurretPropertyContext(this.context, this.state);
        this.enterRule(localContext, 70, MapIniParser.RULE_turretProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 416;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.ID:
                {
                this.state = 413;
                this.match(MapIniParser.ID);
                }
                break;
            case MapIniParser.T__0:
            case MapIniParser.T__1:
            case MapIniParser.T__2:
            case MapIniParser.T__3:
            case MapIniParser.T__4:
            case MapIniParser.T__5:
            case MapIniParser.T__6:
            case MapIniParser.T__7:
            case MapIniParser.T__8:
            case MapIniParser.T__9:
            case MapIniParser.T__10:
            case MapIniParser.T__11:
            case MapIniParser.T__12:
            case MapIniParser.T__13:
            case MapIniParser.T__14:
            case MapIniParser.T__15:
            case MapIniParser.T__16:
            case MapIniParser.T__17:
                {
                this.state = 414;
                this.class_identifier();
                }
                break;
            case MapIniParser.T__19:
                {
                this.state = 415;
                this.object_identifier();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 418;
            this.match(MapIniParser.EQ);
            this.state = 419;
            this.property_values();
            this.state = 420;
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
        this.enterRule(localContext, 72, MapIniParser.RULE_clientModule);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 422;
            this.match(MapIniParser.T__34);
            this.state = 423;
            this.match(MapIniParser.EQ);
            this.state = 424;
            this.clientModule_type();
            this.state = 425;
            this.moduleTag_value();
            this.state = 426;
            this.match(MapIniParser.NEWLINE);
            this.state = 431;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 42 || _la === 43) {
                {
                this.state = 429;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.ID:
                    {
                    this.state = 427;
                    this.clientModuleProperty();
                    }
                    break;
                case MapIniParser.NEWLINE:
                    {
                    this.state = 428;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 433;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 434;
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
        this.enterRule(localContext, 74, MapIniParser.RULE_clientModuleProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 436;
            this.match(MapIniParser.ID);
            this.state = 437;
            this.match(MapIniParser.EQ);
            this.state = 438;
            this.property_values();
            this.state = 439;
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
        this.enterRule(localContext, 76, MapIniParser.RULE_objectProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 443;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.ID:
                {
                this.state = 441;
                this.match(MapIniParser.ID);
                }
                break;
            case MapIniParser.T__0:
            case MapIniParser.T__1:
            case MapIniParser.T__2:
            case MapIniParser.T__3:
            case MapIniParser.T__4:
            case MapIniParser.T__5:
            case MapIniParser.T__6:
            case MapIniParser.T__7:
            case MapIniParser.T__8:
            case MapIniParser.T__9:
            case MapIniParser.T__10:
            case MapIniParser.T__11:
            case MapIniParser.T__12:
            case MapIniParser.T__13:
            case MapIniParser.T__14:
            case MapIniParser.T__15:
            case MapIniParser.T__16:
            case MapIniParser.T__17:
                {
                this.state = 442;
                this.class_identifier();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 445;
            this.match(MapIniParser.EQ);
            this.state = 446;
            this.property_values();
            this.state = 447;
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
        this.enterRule(localContext, 78, MapIniParser.RULE_drawModuleProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 449;
            this.match(MapIniParser.ID);
            this.state = 450;
            this.match(MapIniParser.EQ);
            this.state = 451;
            this.property_values();
            this.state = 452;
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
        this.enterRule(localContext, 80, MapIniParser.RULE_conditionStateProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 457;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.ID:
                {
                this.state = 454;
                this.match(MapIniParser.ID);
                }
                break;
            case MapIniParser.T__0:
            case MapIniParser.T__1:
            case MapIniParser.T__2:
            case MapIniParser.T__3:
            case MapIniParser.T__4:
            case MapIniParser.T__5:
            case MapIniParser.T__6:
            case MapIniParser.T__7:
            case MapIniParser.T__8:
            case MapIniParser.T__9:
            case MapIniParser.T__10:
            case MapIniParser.T__11:
            case MapIniParser.T__12:
            case MapIniParser.T__13:
            case MapIniParser.T__14:
            case MapIniParser.T__15:
            case MapIniParser.T__16:
            case MapIniParser.T__17:
                {
                this.state = 455;
                this.class_identifier();
                }
                break;
            case MapIniParser.TURRET:
                {
                this.state = 456;
                this.match(MapIniParser.TURRET);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 459;
            this.match(MapIniParser.EQ);
            this.state = 460;
            this.property_values();
            this.state = 461;
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
        this.enterRule(localContext, 82, MapIniParser.RULE_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 463;
            this.property_value();
            this.state = 464;
            this.match(MapIniParser.EQ);
            this.state = 465;
            this.property_values();
            this.state = 466;
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
        this.enterRule(localContext, 84, MapIniParser.RULE_drawModule_type);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 468;
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
        this.enterRule(localContext, 86, MapIniParser.RULE_conditionState_values);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 470;
            this.match(MapIniParser.ID);
            this.state = 474;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 42) {
                {
                {
                this.state = 471;
                this.match(MapIniParser.ID);
                }
                }
                this.state = 476;
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
        this.enterRule(localContext, 88, MapIniParser.RULE_bodyModule_type);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 477;
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
        this.enterRule(localContext, 90, MapIniParser.RULE_behaviorModule_type);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 479;
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
        this.enterRule(localContext, 92, MapIniParser.RULE_clientModule_type);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 481;
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
        this.enterRule(localContext, 94, MapIniParser.RULE_moduleTag_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 483;
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
        this.enterRule(localContext, 96, MapIniParser.RULE_mappedImage_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 485;
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
        this.enterRule(localContext, 98, MapIniParser.RULE_object_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 487;
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
        this.enterRule(localContext, 100, MapIniParser.RULE_locomotor_modifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 489;
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
        this.enterRule(localContext, 102, MapIniParser.RULE_property_values);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 491;
            this.property_value();
            this.state = 495;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 524286) !== 0) || _la === 42) {
                {
                {
                this.state = 492;
                this.property_value();
                }
                }
                this.state = 497;
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
    public property_value(): Property_valueContext {
        let localContext = new Property_valueContext(this.context, this.state);
        this.enterRule(localContext, 104, MapIniParser.RULE_property_value);
        try {
            this.state = 501;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 50, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 498;
                this.match(MapIniParser.ID);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 499;
                this.class_identifier();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 500;
                this.object_value();
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
    public end(): EndContext {
        let localContext = new EndContext(this.context, this.state);
        this.enterRule(localContext, 106, MapIniParser.RULE_end);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 503;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 7) !== 0))) {
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
        4,1,45,506,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,
        7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,
        2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,
        7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,
        2,53,7,53,1,0,1,0,5,0,111,8,0,10,0,12,0,114,9,0,1,0,1,0,1,1,1,1,
        1,1,3,1,121,8,1,1,2,1,2,1,2,1,2,1,2,5,2,128,8,2,10,2,12,2,131,9,
        2,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,
        5,1,5,5,5,150,8,5,10,5,12,5,153,9,5,1,5,1,5,1,6,1,6,1,7,1,7,1,7,
        1,7,1,7,1,7,1,7,1,7,1,7,1,7,5,7,169,8,7,10,7,12,7,172,9,7,1,7,1,
        7,1,8,1,8,1,9,1,9,3,9,180,8,9,1,10,1,10,1,10,1,10,1,10,5,10,187,
        8,10,10,10,12,10,190,9,10,1,10,1,10,1,11,1,11,1,11,1,12,1,12,1,12,
        1,12,3,12,201,8,12,1,13,1,13,1,13,3,13,206,8,13,1,14,1,14,1,14,1,
        14,5,14,212,8,14,10,14,12,14,215,9,14,1,14,1,14,1,15,1,15,3,15,221,
        8,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,5,16,231,8,16,10,16,
        12,16,234,9,16,1,16,1,16,1,17,1,17,3,17,240,8,17,1,17,1,17,1,17,
        1,17,1,18,1,18,1,18,1,18,5,18,250,8,18,10,18,12,18,253,9,18,1,18,
        1,18,1,19,1,19,1,19,3,19,260,8,19,1,19,1,19,1,19,1,19,1,20,1,20,
        1,20,1,20,5,20,270,8,20,10,20,12,20,273,9,20,1,20,1,20,1,21,1,21,
        1,21,1,21,1,21,1,22,1,22,1,22,1,22,5,22,286,8,22,10,22,12,22,289,
        9,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,
        1,24,1,24,1,24,1,24,5,24,307,8,24,10,24,12,24,310,9,24,1,24,1,24,
        1,25,1,25,1,25,3,25,317,8,25,1,26,1,26,1,26,1,26,5,26,323,8,26,10,
        26,12,26,326,9,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,27,5,27,336,
        8,27,10,27,12,27,339,9,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,28,
        5,28,349,8,28,10,28,12,28,352,9,28,1,28,1,28,1,29,1,29,1,29,1,29,
        1,29,1,30,1,30,1,30,1,30,1,30,1,30,1,30,5,30,368,8,30,10,30,12,30,
        371,9,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,1,32,1,32,1,32,1,32,
        1,32,1,32,1,32,1,32,5,32,388,8,32,10,32,12,32,391,9,32,1,32,1,32,
        1,33,1,33,3,33,397,8,33,1,33,1,33,1,33,1,33,1,34,1,34,1,34,1,34,
        5,34,407,8,34,10,34,12,34,410,9,34,1,34,1,34,1,35,1,35,1,35,3,35,
        417,8,35,1,35,1,35,1,35,1,35,1,36,1,36,1,36,1,36,1,36,1,36,1,36,
        5,36,430,8,36,10,36,12,36,433,9,36,1,36,1,36,1,37,1,37,1,37,1,37,
        1,37,1,38,1,38,3,38,444,8,38,1,38,1,38,1,38,1,38,1,39,1,39,1,39,
        1,39,1,39,1,40,1,40,1,40,3,40,458,8,40,1,40,1,40,1,40,1,40,1,41,
        1,41,1,41,1,41,1,41,1,42,1,42,1,43,1,43,5,43,473,8,43,10,43,12,43,
        476,9,43,1,44,1,44,1,45,1,45,1,46,1,46,1,47,1,47,1,48,1,48,1,49,
        1,49,1,50,1,50,1,51,1,51,5,51,494,8,51,10,51,12,51,497,9,51,1,52,
        1,52,1,52,3,52,502,8,52,1,53,1,53,1,53,0,0,54,0,2,4,6,8,10,12,14,
        16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,
        60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,
        102,104,106,0,2,1,0,1,18,1,0,36,38,525,0,112,1,0,0,0,2,120,1,0,0,
        0,4,122,1,0,0,0,6,134,1,0,0,0,8,136,1,0,0,0,10,138,1,0,0,0,12,156,
        1,0,0,0,14,158,1,0,0,0,16,175,1,0,0,0,18,179,1,0,0,0,20,181,1,0,
        0,0,22,193,1,0,0,0,24,200,1,0,0,0,26,205,1,0,0,0,28,207,1,0,0,0,
        30,220,1,0,0,0,32,226,1,0,0,0,34,239,1,0,0,0,36,245,1,0,0,0,38,259,
        1,0,0,0,40,265,1,0,0,0,42,276,1,0,0,0,44,281,1,0,0,0,46,292,1,0,
        0,0,48,297,1,0,0,0,50,316,1,0,0,0,52,318,1,0,0,0,54,329,1,0,0,0,
        56,342,1,0,0,0,58,355,1,0,0,0,60,360,1,0,0,0,62,374,1,0,0,0,64,379,
        1,0,0,0,66,396,1,0,0,0,68,402,1,0,0,0,70,416,1,0,0,0,72,422,1,0,
        0,0,74,436,1,0,0,0,76,443,1,0,0,0,78,449,1,0,0,0,80,457,1,0,0,0,
        82,463,1,0,0,0,84,468,1,0,0,0,86,470,1,0,0,0,88,477,1,0,0,0,90,479,
        1,0,0,0,92,481,1,0,0,0,94,483,1,0,0,0,96,485,1,0,0,0,98,487,1,0,
        0,0,100,489,1,0,0,0,102,491,1,0,0,0,104,501,1,0,0,0,106,503,1,0,
        0,0,108,111,3,2,1,0,109,111,5,43,0,0,110,108,1,0,0,0,110,109,1,0,
        0,0,111,114,1,0,0,0,112,110,1,0,0,0,112,113,1,0,0,0,113,115,1,0,
        0,0,114,112,1,0,0,0,115,116,5,0,0,1,116,1,1,0,0,0,117,121,3,4,2,
        0,118,121,3,14,7,0,119,121,3,10,5,0,120,117,1,0,0,0,120,118,1,0,
        0,0,120,119,1,0,0,0,121,3,1,0,0,0,122,123,3,6,3,0,123,124,3,8,4,
        0,124,129,5,43,0,0,125,128,3,82,41,0,126,128,5,43,0,0,127,125,1,
        0,0,0,127,126,1,0,0,0,128,131,1,0,0,0,129,127,1,0,0,0,129,130,1,
        0,0,0,130,132,1,0,0,0,131,129,1,0,0,0,132,133,3,106,53,0,133,5,1,
        0,0,0,134,135,7,0,0,0,135,7,1,0,0,0,136,137,5,42,0,0,137,9,1,0,0,
        0,138,139,3,12,6,0,139,140,3,98,49,0,140,141,3,98,49,0,141,151,5,
        43,0,0,142,150,3,18,9,0,143,150,3,24,12,0,144,150,3,76,38,0,145,
        150,3,26,13,0,146,150,3,40,20,0,147,150,3,44,22,0,148,150,5,43,0,
        0,149,142,1,0,0,0,149,143,1,0,0,0,149,144,1,0,0,0,149,145,1,0,0,
        0,149,146,1,0,0,0,149,147,1,0,0,0,149,148,1,0,0,0,150,153,1,0,0,
        0,151,149,1,0,0,0,151,152,1,0,0,0,152,154,1,0,0,0,153,151,1,0,0,
        0,154,155,3,106,53,0,155,11,1,0,0,0,156,157,5,19,0,0,157,13,1,0,
        0,0,158,159,3,16,8,0,159,160,3,98,49,0,160,170,5,43,0,0,161,169,
        3,18,9,0,162,169,3,24,12,0,163,169,3,76,38,0,164,169,3,26,13,0,165,
        169,3,40,20,0,166,169,3,44,22,0,167,169,5,43,0,0,168,161,1,0,0,0,
        168,162,1,0,0,0,168,163,1,0,0,0,168,164,1,0,0,0,168,165,1,0,0,0,
        168,166,1,0,0,0,168,167,1,0,0,0,169,172,1,0,0,0,170,168,1,0,0,0,
        170,171,1,0,0,0,171,173,1,0,0,0,172,170,1,0,0,0,173,174,3,106,53,
        0,174,15,1,0,0,0,175,176,5,20,0,0,176,17,1,0,0,0,177,180,3,20,10,
        0,178,180,3,22,11,0,179,177,1,0,0,0,179,178,1,0,0,0,180,19,1,0,0,
        0,181,182,5,21,0,0,182,188,5,43,0,0,183,187,3,24,12,0,184,187,3,
        76,38,0,185,187,5,43,0,0,186,183,1,0,0,0,186,184,1,0,0,0,186,185,
        1,0,0,0,187,190,1,0,0,0,188,186,1,0,0,0,188,189,1,0,0,0,189,191,
        1,0,0,0,190,188,1,0,0,0,191,192,3,106,53,0,192,21,1,0,0,0,193,194,
        5,22,0,0,194,195,3,94,47,0,195,23,1,0,0,0,196,201,3,48,24,0,197,
        201,3,60,30,0,198,201,3,64,32,0,199,201,3,72,36,0,200,196,1,0,0,
        0,200,197,1,0,0,0,200,198,1,0,0,0,200,199,1,0,0,0,201,25,1,0,0,0,
        202,206,3,28,14,0,203,206,3,32,16,0,204,206,3,36,18,0,205,202,1,
        0,0,0,205,203,1,0,0,0,205,204,1,0,0,0,206,27,1,0,0,0,207,208,5,23,
        0,0,208,213,5,43,0,0,209,212,3,30,15,0,210,212,5,43,0,0,211,209,
        1,0,0,0,211,210,1,0,0,0,212,215,1,0,0,0,213,211,1,0,0,0,213,214,
        1,0,0,0,214,216,1,0,0,0,215,213,1,0,0,0,216,217,3,106,53,0,217,29,
        1,0,0,0,218,221,5,42,0,0,219,221,3,6,3,0,220,218,1,0,0,0,220,219,
        1,0,0,0,221,222,1,0,0,0,222,223,5,40,0,0,223,224,3,102,51,0,224,
        225,5,43,0,0,225,31,1,0,0,0,226,227,5,24,0,0,227,232,5,43,0,0,228,
        231,3,34,17,0,229,231,5,43,0,0,230,228,1,0,0,0,230,229,1,0,0,0,231,
        234,1,0,0,0,232,230,1,0,0,0,232,233,1,0,0,0,233,235,1,0,0,0,234,
        232,1,0,0,0,235,236,3,106,53,0,236,33,1,0,0,0,237,240,5,42,0,0,238,
        240,3,6,3,0,239,237,1,0,0,0,239,238,1,0,0,0,240,241,1,0,0,0,241,
        242,5,40,0,0,242,243,3,102,51,0,243,244,5,43,0,0,244,35,1,0,0,0,
        245,246,5,25,0,0,246,251,5,43,0,0,247,250,3,38,19,0,248,250,5,43,
        0,0,249,247,1,0,0,0,249,248,1,0,0,0,250,253,1,0,0,0,251,249,1,0,
        0,0,251,252,1,0,0,0,252,254,1,0,0,0,253,251,1,0,0,0,254,255,3,106,
        53,0,255,37,1,0,0,0,256,260,5,42,0,0,257,260,3,6,3,0,258,260,3,16,
        8,0,259,256,1,0,0,0,259,257,1,0,0,0,259,258,1,0,0,0,260,261,1,0,
        0,0,261,262,5,40,0,0,262,263,3,102,51,0,263,264,5,43,0,0,264,39,
        1,0,0,0,265,266,5,26,0,0,266,271,5,43,0,0,267,270,3,42,21,0,268,
        270,5,43,0,0,269,267,1,0,0,0,269,268,1,0,0,0,270,273,1,0,0,0,271,
        269,1,0,0,0,271,272,1,0,0,0,272,274,1,0,0,0,273,271,1,0,0,0,274,
        275,3,106,53,0,275,41,1,0,0,0,276,277,5,42,0,0,277,278,5,40,0,0,
        278,279,3,102,51,0,279,280,5,43,0,0,280,43,1,0,0,0,281,282,5,27,
        0,0,282,287,5,43,0,0,283,286,3,46,23,0,284,286,5,43,0,0,285,283,
        1,0,0,0,285,284,1,0,0,0,286,289,1,0,0,0,287,285,1,0,0,0,287,288,
        1,0,0,0,288,290,1,0,0,0,289,287,1,0,0,0,290,291,3,106,53,0,291,45,
        1,0,0,0,292,293,5,42,0,0,293,294,5,40,0,0,294,295,3,102,51,0,295,
        296,5,43,0,0,296,47,1,0,0,0,297,298,5,28,0,0,298,299,5,40,0,0,299,
        300,3,84,42,0,300,301,3,94,47,0,301,308,5,43,0,0,302,307,3,50,25,
        0,303,307,3,58,29,0,304,307,3,78,39,0,305,307,5,43,0,0,306,302,1,
        0,0,0,306,303,1,0,0,0,306,304,1,0,0,0,306,305,1,0,0,0,307,310,1,
        0,0,0,308,306,1,0,0,0,308,309,1,0,0,0,309,311,1,0,0,0,310,308,1,
        0,0,0,311,312,3,106,53,0,312,49,1,0,0,0,313,317,3,52,26,0,314,317,
        3,54,27,0,315,317,3,56,28,0,316,313,1,0,0,0,316,314,1,0,0,0,316,
        315,1,0,0,0,317,51,1,0,0,0,318,319,5,29,0,0,319,324,5,43,0,0,320,
        323,3,80,40,0,321,323,5,43,0,0,322,320,1,0,0,0,322,321,1,0,0,0,323,
        326,1,0,0,0,324,322,1,0,0,0,324,325,1,0,0,0,325,327,1,0,0,0,326,
        324,1,0,0,0,327,328,3,106,53,0,328,53,1,0,0,0,329,330,5,30,0,0,330,
        331,5,40,0,0,331,332,3,86,43,0,332,337,5,43,0,0,333,336,3,80,40,
        0,334,336,5,43,0,0,335,333,1,0,0,0,335,334,1,0,0,0,336,339,1,0,0,
        0,337,335,1,0,0,0,337,338,1,0,0,0,338,340,1,0,0,0,339,337,1,0,0,
        0,340,341,3,106,53,0,341,55,1,0,0,0,342,343,5,31,0,0,343,344,5,40,
        0,0,344,345,3,86,43,0,345,350,5,43,0,0,346,349,3,80,40,0,347,349,
        5,43,0,0,348,346,1,0,0,0,348,347,1,0,0,0,349,352,1,0,0,0,350,348,
        1,0,0,0,350,351,1,0,0,0,351,353,1,0,0,0,352,350,1,0,0,0,353,354,
        3,106,53,0,354,57,1,0,0,0,355,356,5,32,0,0,356,357,5,40,0,0,357,
        358,3,86,43,0,358,359,5,43,0,0,359,59,1,0,0,0,360,361,5,33,0,0,361,
        362,5,40,0,0,362,363,3,88,44,0,363,364,3,94,47,0,364,369,5,43,0,
        0,365,368,3,62,31,0,366,368,5,43,0,0,367,365,1,0,0,0,367,366,1,0,
        0,0,368,371,1,0,0,0,369,367,1,0,0,0,369,370,1,0,0,0,370,372,1,0,
        0,0,371,369,1,0,0,0,372,373,3,106,53,0,373,61,1,0,0,0,374,375,5,
        42,0,0,375,376,5,40,0,0,376,377,3,102,51,0,377,378,5,43,0,0,378,
        63,1,0,0,0,379,380,5,34,0,0,380,381,5,40,0,0,381,382,3,90,45,0,382,
        383,3,94,47,0,383,389,5,43,0,0,384,388,3,66,33,0,385,388,3,68,34,
        0,386,388,5,43,0,0,387,384,1,0,0,0,387,385,1,0,0,0,387,386,1,0,0,
        0,388,391,1,0,0,0,389,387,1,0,0,0,389,390,1,0,0,0,390,392,1,0,0,
        0,391,389,1,0,0,0,392,393,3,106,53,0,393,65,1,0,0,0,394,397,5,42,
        0,0,395,397,3,6,3,0,396,394,1,0,0,0,396,395,1,0,0,0,397,398,1,0,
        0,0,398,399,5,40,0,0,399,400,3,102,51,0,400,401,5,43,0,0,401,67,
        1,0,0,0,402,403,5,39,0,0,403,408,5,43,0,0,404,407,3,70,35,0,405,
        407,5,43,0,0,406,404,1,0,0,0,406,405,1,0,0,0,407,410,1,0,0,0,408,
        406,1,0,0,0,408,409,1,0,0,0,409,411,1,0,0,0,410,408,1,0,0,0,411,
        412,3,106,53,0,412,69,1,0,0,0,413,417,5,42,0,0,414,417,3,6,3,0,415,
        417,3,16,8,0,416,413,1,0,0,0,416,414,1,0,0,0,416,415,1,0,0,0,417,
        418,1,0,0,0,418,419,5,40,0,0,419,420,3,102,51,0,420,421,5,43,0,0,
        421,71,1,0,0,0,422,423,5,35,0,0,423,424,5,40,0,0,424,425,3,92,46,
        0,425,426,3,94,47,0,426,431,5,43,0,0,427,430,3,74,37,0,428,430,5,
        43,0,0,429,427,1,0,0,0,429,428,1,0,0,0,430,433,1,0,0,0,431,429,1,
        0,0,0,431,432,1,0,0,0,432,434,1,0,0,0,433,431,1,0,0,0,434,435,3,
        106,53,0,435,73,1,0,0,0,436,437,5,42,0,0,437,438,5,40,0,0,438,439,
        3,102,51,0,439,440,5,43,0,0,440,75,1,0,0,0,441,444,5,42,0,0,442,
        444,3,6,3,0,443,441,1,0,0,0,443,442,1,0,0,0,444,445,1,0,0,0,445,
        446,5,40,0,0,446,447,3,102,51,0,447,448,5,43,0,0,448,77,1,0,0,0,
        449,450,5,42,0,0,450,451,5,40,0,0,451,452,3,102,51,0,452,453,5,43,
        0,0,453,79,1,0,0,0,454,458,5,42,0,0,455,458,3,6,3,0,456,458,5,39,
        0,0,457,454,1,0,0,0,457,455,1,0,0,0,457,456,1,0,0,0,458,459,1,0,
        0,0,459,460,5,40,0,0,460,461,3,102,51,0,461,462,5,43,0,0,462,81,
        1,0,0,0,463,464,3,104,52,0,464,465,5,40,0,0,465,466,3,102,51,0,466,
        467,5,43,0,0,467,83,1,0,0,0,468,469,5,42,0,0,469,85,1,0,0,0,470,
        474,5,42,0,0,471,473,5,42,0,0,472,471,1,0,0,0,473,476,1,0,0,0,474,
        472,1,0,0,0,474,475,1,0,0,0,475,87,1,0,0,0,476,474,1,0,0,0,477,478,
        5,42,0,0,478,89,1,0,0,0,479,480,5,42,0,0,480,91,1,0,0,0,481,482,
        5,42,0,0,482,93,1,0,0,0,483,484,5,42,0,0,484,95,1,0,0,0,485,486,
        5,42,0,0,486,97,1,0,0,0,487,488,5,42,0,0,488,99,1,0,0,0,489,490,
        5,42,0,0,490,101,1,0,0,0,491,495,3,104,52,0,492,494,3,104,52,0,493,
        492,1,0,0,0,494,497,1,0,0,0,495,493,1,0,0,0,495,496,1,0,0,0,496,
        103,1,0,0,0,497,495,1,0,0,0,498,502,5,42,0,0,499,502,3,6,3,0,500,
        502,3,98,49,0,501,498,1,0,0,0,501,499,1,0,0,0,501,500,1,0,0,0,502,
        105,1,0,0,0,503,504,7,1,0,0,504,107,1,0,0,0,51,110,112,120,127,129,
        149,151,168,170,179,186,188,200,205,211,213,220,230,232,239,249,
        251,259,269,271,285,287,306,308,316,322,324,335,337,348,350,367,
        369,387,389,396,406,408,416,429,431,443,457,474,495,501
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
    public objectClass(): ObjectClassContext | null {
        return this.getRuleContext(0, ObjectClassContext);
    }
    public objectReskinClass(): ObjectReskinClassContext | null {
        return this.getRuleContext(0, ObjectReskinClassContext);
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


export class Class_identifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
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


export class ObjectReskinClassContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public objectReskin_identifier(): ObjectReskin_identifierContext {
        return this.getRuleContext(0, ObjectReskin_identifierContext)!;
    }
    public object_value(): Object_valueContext[];
    public object_value(i: number): Object_valueContext | null;
    public object_value(i?: number): Object_valueContext[] | Object_valueContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Object_valueContext);
        }

        return this.getRuleContext(i, Object_valueContext);
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
        return MapIniParser.RULE_objectReskinClass;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterObjectReskinClass) {
             listener.enterObjectReskinClass(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitObjectReskinClass) {
             listener.exitObjectReskinClass(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitObjectReskinClass) {
            return visitor.visitObjectReskinClass(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ObjectReskin_identifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_objectReskin_identifier;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterObjectReskin_identifier) {
             listener.enterObjectReskin_identifier(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitObjectReskin_identifier) {
             listener.exitObjectReskin_identifier(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitObjectReskin_identifier) {
            return visitor.visitObjectReskin_identifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ObjectClassContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public object_identifier(): Object_identifierContext {
        return this.getRuleContext(0, Object_identifierContext)!;
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


export class Object_identifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_object_identifier;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterObject_identifier) {
             listener.enterObject_identifier(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitObject_identifier) {
             listener.exitObject_identifier(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitObject_identifier) {
            return visitor.visitObject_identifier(this);
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
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public property_values(): Property_valuesContext {
        return this.getRuleContext(0, Property_valuesContext)!;
    }
    public NEWLINE(): antlr.TerminalNode {
        return this.getToken(MapIniParser.NEWLINE, 0)!;
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.ID, 0);
    }
    public class_identifier(): Class_identifierContext | null {
        return this.getRuleContext(0, Class_identifierContext);
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
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public property_values(): Property_valuesContext {
        return this.getRuleContext(0, Property_valuesContext)!;
    }
    public NEWLINE(): antlr.TerminalNode {
        return this.getToken(MapIniParser.NEWLINE, 0)!;
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.ID, 0);
    }
    public class_identifier(): Class_identifierContext | null {
        return this.getRuleContext(0, Class_identifierContext);
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
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public property_values(): Property_valuesContext {
        return this.getRuleContext(0, Property_valuesContext)!;
    }
    public NEWLINE(): antlr.TerminalNode {
        return this.getToken(MapIniParser.NEWLINE, 0)!;
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.ID, 0);
    }
    public class_identifier(): Class_identifierContext | null {
        return this.getRuleContext(0, Class_identifierContext);
    }
    public object_identifier(): Object_identifierContext | null {
        return this.getRuleContext(0, Object_identifierContext);
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
    public turretBlock(): TurretBlockContext[];
    public turretBlock(i: number): TurretBlockContext | null;
    public turretBlock(i?: number): TurretBlockContext[] | TurretBlockContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TurretBlockContext);
        }

        return this.getRuleContext(i, TurretBlockContext);
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
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public property_values(): Property_valuesContext {
        return this.getRuleContext(0, Property_valuesContext)!;
    }
    public NEWLINE(): antlr.TerminalNode {
        return this.getToken(MapIniParser.NEWLINE, 0)!;
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.ID, 0);
    }
    public class_identifier(): Class_identifierContext | null {
        return this.getRuleContext(0, Class_identifierContext);
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


export class TurretBlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TURRET(): antlr.TerminalNode {
        return this.getToken(MapIniParser.TURRET, 0)!;
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
    public turretProperty(): TurretPropertyContext[];
    public turretProperty(i: number): TurretPropertyContext | null;
    public turretProperty(i?: number): TurretPropertyContext[] | TurretPropertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TurretPropertyContext);
        }

        return this.getRuleContext(i, TurretPropertyContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_turretBlock;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterTurretBlock) {
             listener.enterTurretBlock(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitTurretBlock) {
             listener.exitTurretBlock(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitTurretBlock) {
            return visitor.visitTurretBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TurretPropertyContext extends antlr.ParserRuleContext {
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
    public ID(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.ID, 0);
    }
    public class_identifier(): Class_identifierContext | null {
        return this.getRuleContext(0, Class_identifierContext);
    }
    public object_identifier(): Object_identifierContext | null {
        return this.getRuleContext(0, Object_identifierContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_turretProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterTurretProperty) {
             listener.enterTurretProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitTurretProperty) {
             listener.exitTurretProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitTurretProperty) {
            return visitor.visitTurretProperty(this);
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
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public property_values(): Property_valuesContext {
        return this.getRuleContext(0, Property_valuesContext)!;
    }
    public NEWLINE(): antlr.TerminalNode {
        return this.getToken(MapIniParser.NEWLINE, 0)!;
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.ID, 0);
    }
    public class_identifier(): Class_identifierContext | null {
        return this.getRuleContext(0, Class_identifierContext);
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
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public property_values(): Property_valuesContext {
        return this.getRuleContext(0, Property_valuesContext)!;
    }
    public NEWLINE(): antlr.TerminalNode {
        return this.getToken(MapIniParser.NEWLINE, 0)!;
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.ID, 0);
    }
    public class_identifier(): Class_identifierContext | null {
        return this.getRuleContext(0, Class_identifierContext);
    }
    public TURRET(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.TURRET, 0);
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
    public property_value(): Property_valueContext {
        return this.getRuleContext(0, Property_valueContext)!;
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


export class Property_valuesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public property_value(): Property_valueContext[];
    public property_value(i: number): Property_valueContext | null;
    public property_value(i?: number): Property_valueContext[] | Property_valueContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Property_valueContext);
        }

        return this.getRuleContext(i, Property_valueContext);
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


export class Property_valueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.ID, 0);
    }
    public class_identifier(): Class_identifierContext | null {
        return this.getRuleContext(0, Class_identifierContext);
    }
    public object_value(): Object_valueContext | null {
        return this.getRuleContext(0, Object_valueContext);
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
