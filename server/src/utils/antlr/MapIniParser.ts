// Generated from ./server/src/utils/antlr/MapIni.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { MapIniListener } from "./MapIniListener";
import { MapIniVisitor } from "./MapIniVisitor";


export class MapIniParser extends Parser {
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
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly INT = 41;
	public static readonly INT256 = 42;
	public static readonly FLOAT = 43;
	public static readonly BOOL = 44;
	public static readonly ID = 45;
	public static readonly SKIp = 46;
	public static readonly COMMENT = 47;
	public static readonly WS = 48;
	public static readonly RULE_program = 0;
	public static readonly RULE_classes = 1;
	public static readonly RULE_objectReskin = 2;
	public static readonly RULE_object = 3;
	public static readonly RULE_objectProperty = 4;
	public static readonly RULE_moduleBlocks = 5;
	public static readonly RULE_addModuleBlock = 6;
	public static readonly RULE_addModuleProperty = 7;
	public static readonly RULE_objectKindOfProperty = 8;
	public static readonly RULE_replaceModuleBlock = 9;
	public static readonly RULE_replaceModuleProperty = 10;
	public static readonly RULE_modules = 11;
	public static readonly RULE_objectBlocks = 12;
	public static readonly RULE_objectPrerequisites = 13;
	public static readonly RULE_objectPrerequisitesobjectProperty = 14;
	public static readonly RULE_objectPrerequisitessciencePropety = 15;
	public static readonly RULE_objectWeaponSet = 16;
	public static readonly RULE_objectWeaponSetPropety = 17;
	public static readonly RULE_objectArmorSet = 18;
	public static readonly RULE_objectArmorSetPropety = 19;
	public static readonly RULE_objectUnitSpecificSounds = 20;
	public static readonly RULE_objectUnitSpecificSoundsPropety = 21;
	public static readonly RULE_objectUnitSpecificFX = 22;
	public static readonly RULE_objectUnitSpecificFXPropety = 23;
	public static readonly RULE_clientModuleBlock = 24;
	public static readonly RULE_behaviormoduleBlock = 25;
	public static readonly RULE_behaviorDecals = 26;
	public static readonly RULE_behaviorTurret = 27;
	public static readonly RULE_bodyModuleBlock = 28;
	public static readonly RULE_drawModuleBlock = 29;
	public static readonly RULE_drawModuleProperty = 30;
	public static readonly RULE_conditionStateBlocks = 31;
	public static readonly RULE_conditionStateBlock = 32;
	public static readonly RULE_defaultConditionStateBlock = 33;
	public static readonly RULE_conditionStateProperty = 34;
	public static readonly RULE_transitionKeyProperty = 35;
	public static readonly RULE_transitionStateBlock = 36;
	public static readonly RULE_transitionStateProperty = 37;
	public static readonly RULE_aliasConditionStateBlock = 38;
	public static readonly RULE_ignoreConditionStateBlock = 39;
	public static readonly RULE_removeModuleBlock = 40;
	public static readonly RULE_turretProperty = 41;
	public static readonly RULE_property = 42;
	public static readonly RULE_tturretProperty = 43;
	public static readonly RULE_altTurretProperty = 44;
	public static readonly RULE_end = 45;
	public static readonly RULE_value = 46;
	public static readonly RULE_ftype = 47;
	public static readonly RULE_rgb = 48;
	public static readonly RULE_procent = 49;
	public static readonly RULE_intRang = 50;
	public static readonly RULE_floatRang = 51;
	public static readonly RULE_quoutedID = 52;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "classes", "objectReskin", "object", "objectProperty", "moduleBlocks", 
		"addModuleBlock", "addModuleProperty", "objectKindOfProperty", "replaceModuleBlock", 
		"replaceModuleProperty", "modules", "objectBlocks", "objectPrerequisites", 
		"objectPrerequisitesobjectProperty", "objectPrerequisitessciencePropety", 
		"objectWeaponSet", "objectWeaponSetPropety", "objectArmorSet", "objectArmorSetPropety", 
		"objectUnitSpecificSounds", "objectUnitSpecificSoundsPropety", "objectUnitSpecificFX", 
		"objectUnitSpecificFXPropety", "clientModuleBlock", "behaviormoduleBlock", 
		"behaviorDecals", "behaviorTurret", "bodyModuleBlock", "drawModuleBlock", 
		"drawModuleProperty", "conditionStateBlocks", "conditionStateBlock", "defaultConditionStateBlock", 
		"conditionStateProperty", "transitionKeyProperty", "transitionStateBlock", 
		"transitionStateProperty", "aliasConditionStateBlock", "ignoreConditionStateBlock", 
		"removeModuleBlock", "turretProperty", "property", "tturretProperty", 
		"altTurretProperty", "end", "value", "ftype", "rgb", "procent", "intRang", 
		"floatRang", "quoutedID",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'ObjectReskin'", "'Object'", "'='", "'AddModule'", "'KindOf'", 
		"'kindof'", "'KINDOF'", "'ReplaceModule'", "'Prerequisites'", "'Science'", 
		"'WeaponSet'", "'ArmorSet'", "'UnitSpecificSounds'", "'UnitSpecificFX'", 
		"'ClientUpdate'", "'Behavior'", "'AttackAreaDecal'", "'TargetingReticleDecal'", 
		"'GridDecalTemplate'", "'Turret'", "'AltTurret'", "'Body'", "'Draw'", 
		"'ConditionState'", "'DefaultConditionState'", "'TransitionKey'", "'TransitionState'", 
		"'AliasConditionState'", "'IgnoreConditionStates'", "'RemoveModule'", 
		"'turret'", "'TURRET'", "'altturret'", "'ALTTURRET'", "'End'", "'end'", 
		"'END'", "'.'", "'%'", "'\"'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "INT", 
		"INT256", "FLOAT", "BOOL", "ID", "SKIp", "COMMENT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(MapIniParser._LITERAL_NAMES, MapIniParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return MapIniParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "MapIni.g4"; }

	// @Override
	public get ruleNames(): string[] { return MapIniParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return MapIniParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(MapIniParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, MapIniParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 109;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.T__0 || _la === MapIniParser.T__1) {
				{
				{
				this.state = 106;
				this.classes();
				}
				}
				this.state = 111;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 112;
			this.match(MapIniParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classes(): ClassesContext {
		let _localctx: ClassesContext = new ClassesContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, MapIniParser.RULE_classes);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 116;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapIniParser.T__1:
				{
				this.state = 114;
				this.object();
				}
				break;
			case MapIniParser.T__0:
				{
				this.state = 115;
				this.objectReskin();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectReskin(): ObjectReskinContext {
		let _localctx: ObjectReskinContext = new ObjectReskinContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, MapIniParser.RULE_objectReskin);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 118;
			this.match(MapIniParser.T__0);
			this.state = 119;
			this.match(MapIniParser.ID);
			this.state = 120;
			this.match(MapIniParser.ID);
			this.state = 137;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 126;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MapIniParser.T__4) | (1 << MapIniParser.T__5) | (1 << MapIniParser.T__6) | (1 << MapIniParser.T__8) | (1 << MapIniParser.T__10) | (1 << MapIniParser.T__11) | (1 << MapIniParser.T__12) | (1 << MapIniParser.T__13) | (1 << MapIniParser.T__14) | (1 << MapIniParser.T__15) | (1 << MapIniParser.T__21) | (1 << MapIniParser.T__22))) !== 0) || _la === MapIniParser.ID) {
					{
					this.state = 124;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case MapIniParser.T__8:
					case MapIniParser.T__10:
					case MapIniParser.T__11:
					case MapIniParser.T__12:
					case MapIniParser.T__13:
					case MapIniParser.T__14:
					case MapIniParser.T__15:
					case MapIniParser.T__21:
					case MapIniParser.T__22:
						{
						this.state = 121;
						this.modules();
						}
						break;
					case MapIniParser.ID:
						{
						this.state = 122;
						this.objectProperty();
						}
						break;
					case MapIniParser.T__4:
					case MapIniParser.T__5:
					case MapIniParser.T__6:
						{
						this.state = 123;
						this.objectKindOfProperty();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 128;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 2:
				{
				this.state = 134;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MapIniParser.T__3) | (1 << MapIniParser.T__4) | (1 << MapIniParser.T__5) | (1 << MapIniParser.T__6) | (1 << MapIniParser.T__7) | (1 << MapIniParser.T__8) | (1 << MapIniParser.T__10) | (1 << MapIniParser.T__11) | (1 << MapIniParser.T__12) | (1 << MapIniParser.T__13) | (1 << MapIniParser.T__29))) !== 0) || _la === MapIniParser.ID) {
					{
					this.state = 132;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case MapIniParser.T__3:
					case MapIniParser.T__7:
					case MapIniParser.T__8:
					case MapIniParser.T__10:
					case MapIniParser.T__11:
					case MapIniParser.T__12:
					case MapIniParser.T__13:
					case MapIniParser.T__29:
						{
						this.state = 129;
						this.moduleBlocks();
						}
						break;
					case MapIniParser.ID:
						{
						this.state = 130;
						this.objectProperty();
						}
						break;
					case MapIniParser.T__4:
					case MapIniParser.T__5:
					case MapIniParser.T__6:
						{
						this.state = 131;
						this.objectKindOfProperty();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 136;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
			this.state = 139;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public object(): ObjectContext {
		let _localctx: ObjectContext = new ObjectContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, MapIniParser.RULE_object);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 141;
			this.match(MapIniParser.T__1);
			this.state = 142;
			this.match(MapIniParser.ID);
			this.state = 159;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 148;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MapIniParser.T__4) | (1 << MapIniParser.T__5) | (1 << MapIniParser.T__6) | (1 << MapIniParser.T__8) | (1 << MapIniParser.T__10) | (1 << MapIniParser.T__11) | (1 << MapIniParser.T__12) | (1 << MapIniParser.T__13) | (1 << MapIniParser.T__14) | (1 << MapIniParser.T__15) | (1 << MapIniParser.T__21) | (1 << MapIniParser.T__22))) !== 0) || _la === MapIniParser.ID) {
					{
					this.state = 146;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case MapIniParser.T__8:
					case MapIniParser.T__10:
					case MapIniParser.T__11:
					case MapIniParser.T__12:
					case MapIniParser.T__13:
					case MapIniParser.T__14:
					case MapIniParser.T__15:
					case MapIniParser.T__21:
					case MapIniParser.T__22:
						{
						this.state = 143;
						this.modules();
						}
						break;
					case MapIniParser.ID:
						{
						this.state = 144;
						this.objectProperty();
						}
						break;
					case MapIniParser.T__4:
					case MapIniParser.T__5:
					case MapIniParser.T__6:
						{
						this.state = 145;
						this.objectKindOfProperty();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 150;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 2:
				{
				this.state = 156;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MapIniParser.T__3) | (1 << MapIniParser.T__4) | (1 << MapIniParser.T__5) | (1 << MapIniParser.T__6) | (1 << MapIniParser.T__7) | (1 << MapIniParser.T__8) | (1 << MapIniParser.T__10) | (1 << MapIniParser.T__11) | (1 << MapIniParser.T__12) | (1 << MapIniParser.T__13) | (1 << MapIniParser.T__29))) !== 0) || _la === MapIniParser.ID) {
					{
					this.state = 154;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case MapIniParser.T__3:
					case MapIniParser.T__7:
					case MapIniParser.T__8:
					case MapIniParser.T__10:
					case MapIniParser.T__11:
					case MapIniParser.T__12:
					case MapIniParser.T__13:
					case MapIniParser.T__29:
						{
						this.state = 151;
						this.moduleBlocks();
						}
						break;
					case MapIniParser.ID:
						{
						this.state = 152;
						this.objectProperty();
						}
						break;
					case MapIniParser.T__4:
					case MapIniParser.T__5:
					case MapIniParser.T__6:
						{
						this.state = 153;
						this.objectKindOfProperty();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 158;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
			this.state = 161;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectProperty(): ObjectPropertyContext {
		let _localctx: ObjectPropertyContext = new ObjectPropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, MapIniParser.RULE_objectProperty);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 163;
			this.match(MapIniParser.ID);
			this.state = 164;
			this.match(MapIniParser.T__2);
			this.state = 166;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 165;
					this.value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 168;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleBlocks(): ModuleBlocksContext {
		let _localctx: ModuleBlocksContext = new ModuleBlocksContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, MapIniParser.RULE_moduleBlocks);
		try {
			this.state = 174;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapIniParser.T__3:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 170;
				this.addModuleBlock();
				}
				break;
			case MapIniParser.T__7:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 171;
				this.replaceModuleBlock();
				}
				break;
			case MapIniParser.T__29:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 172;
				this.removeModuleBlock();
				}
				break;
			case MapIniParser.T__8:
			case MapIniParser.T__10:
			case MapIniParser.T__11:
			case MapIniParser.T__12:
			case MapIniParser.T__13:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 173;
				this.objectBlocks();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public addModuleBlock(): AddModuleBlockContext {
		let _localctx: AddModuleBlockContext = new AddModuleBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, MapIniParser.RULE_addModuleBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 176;
			this.match(MapIniParser.T__3);
			this.state = 182;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MapIniParser.T__4) | (1 << MapIniParser.T__5) | (1 << MapIniParser.T__6) | (1 << MapIniParser.T__8) | (1 << MapIniParser.T__10) | (1 << MapIniParser.T__11) | (1 << MapIniParser.T__12) | (1 << MapIniParser.T__13) | (1 << MapIniParser.T__14) | (1 << MapIniParser.T__15) | (1 << MapIniParser.T__21) | (1 << MapIniParser.T__22))) !== 0) || _la === MapIniParser.ID) {
				{
				this.state = 180;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case MapIniParser.T__8:
				case MapIniParser.T__10:
				case MapIniParser.T__11:
				case MapIniParser.T__12:
				case MapIniParser.T__13:
				case MapIniParser.T__14:
				case MapIniParser.T__15:
				case MapIniParser.T__21:
				case MapIniParser.T__22:
					{
					this.state = 177;
					this.modules();
					}
					break;
				case MapIniParser.ID:
					{
					this.state = 178;
					this.addModuleProperty();
					}
					break;
				case MapIniParser.T__4:
				case MapIniParser.T__5:
				case MapIniParser.T__6:
					{
					this.state = 179;
					this.objectKindOfProperty();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 184;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 185;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public addModuleProperty(): AddModulePropertyContext {
		let _localctx: AddModulePropertyContext = new AddModulePropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, MapIniParser.RULE_addModuleProperty);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 187;
			this.match(MapIniParser.ID);
			this.state = 188;
			this.match(MapIniParser.T__2);
			this.state = 190;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 189;
					this.value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 192;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectKindOfProperty(): ObjectKindOfPropertyContext {
		let _localctx: ObjectKindOfPropertyContext = new ObjectKindOfPropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, MapIniParser.RULE_objectKindOfProperty);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 194;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MapIniParser.T__4) | (1 << MapIniParser.T__5) | (1 << MapIniParser.T__6))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 195;
			this.match(MapIniParser.T__2);
			this.state = 197;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 196;
					this.match(MapIniParser.ID);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 199;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public replaceModuleBlock(): ReplaceModuleBlockContext {
		let _localctx: ReplaceModuleBlockContext = new ReplaceModuleBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, MapIniParser.RULE_replaceModuleBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 201;
			this.match(MapIniParser.T__7);
			this.state = 202;
			this.match(MapIniParser.ID);
			this.state = 207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MapIniParser.T__8) | (1 << MapIniParser.T__10) | (1 << MapIniParser.T__11) | (1 << MapIniParser.T__12) | (1 << MapIniParser.T__13) | (1 << MapIniParser.T__14) | (1 << MapIniParser.T__15) | (1 << MapIniParser.T__21) | (1 << MapIniParser.T__22))) !== 0) || _la === MapIniParser.ID) {
				{
				this.state = 205;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case MapIniParser.T__8:
				case MapIniParser.T__10:
				case MapIniParser.T__11:
				case MapIniParser.T__12:
				case MapIniParser.T__13:
				case MapIniParser.T__14:
				case MapIniParser.T__15:
				case MapIniParser.T__21:
				case MapIniParser.T__22:
					{
					this.state = 203;
					this.modules();
					}
					break;
				case MapIniParser.ID:
					{
					this.state = 204;
					this.replaceModuleProperty();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 209;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 210;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public replaceModuleProperty(): ReplaceModulePropertyContext {
		let _localctx: ReplaceModulePropertyContext = new ReplaceModulePropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, MapIniParser.RULE_replaceModuleProperty);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 212;
			this.match(MapIniParser.ID);
			this.state = 213;
			this.match(MapIniParser.T__2);
			this.state = 215;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 214;
					this.value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 217;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modules(): ModulesContext {
		let _localctx: ModulesContext = new ModulesContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, MapIniParser.RULE_modules);
		try {
			this.state = 224;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapIniParser.T__22:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 219;
				this.drawModuleBlock();
				}
				break;
			case MapIniParser.T__21:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 220;
				this.bodyModuleBlock();
				}
				break;
			case MapIniParser.T__15:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 221;
				this.behaviormoduleBlock();
				}
				break;
			case MapIniParser.T__14:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 222;
				this.clientModuleBlock();
				}
				break;
			case MapIniParser.T__8:
			case MapIniParser.T__10:
			case MapIniParser.T__11:
			case MapIniParser.T__12:
			case MapIniParser.T__13:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 223;
				this.objectBlocks();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectBlocks(): ObjectBlocksContext {
		let _localctx: ObjectBlocksContext = new ObjectBlocksContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, MapIniParser.RULE_objectBlocks);
		try {
			this.state = 231;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapIniParser.T__8:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 226;
				this.objectPrerequisites();
				}
				break;
			case MapIniParser.T__10:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 227;
				this.objectWeaponSet();
				}
				break;
			case MapIniParser.T__11:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 228;
				this.objectArmorSet();
				}
				break;
			case MapIniParser.T__12:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 229;
				this.objectUnitSpecificSounds();
				}
				break;
			case MapIniParser.T__13:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 230;
				this.objectUnitSpecificFX();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectPrerequisites(): ObjectPrerequisitesContext {
		let _localctx: ObjectPrerequisitesContext = new ObjectPrerequisitesContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, MapIniParser.RULE_objectPrerequisites);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 233;
			this.match(MapIniParser.T__8);
			this.state = 238;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.T__1 || _la === MapIniParser.T__9) {
				{
				this.state = 236;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case MapIniParser.T__1:
					{
					this.state = 234;
					this.objectPrerequisitesobjectProperty();
					}
					break;
				case MapIniParser.T__9:
					{
					this.state = 235;
					this.objectPrerequisitessciencePropety();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 240;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 241;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectPrerequisitesobjectProperty(): ObjectPrerequisitesobjectPropertyContext {
		let _localctx: ObjectPrerequisitesobjectPropertyContext = new ObjectPrerequisitesobjectPropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, MapIniParser.RULE_objectPrerequisitesobjectProperty);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 243;
			this.match(MapIniParser.T__1);
			this.state = 244;
			this.match(MapIniParser.T__2);
			this.state = 246;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 245;
				this.match(MapIniParser.ID);
				}
				}
				this.state = 248;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === MapIniParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectPrerequisitessciencePropety(): ObjectPrerequisitessciencePropetyContext {
		let _localctx: ObjectPrerequisitessciencePropetyContext = new ObjectPrerequisitessciencePropetyContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, MapIniParser.RULE_objectPrerequisitessciencePropety);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 250;
			this.match(MapIniParser.T__9);
			this.state = 251;
			this.match(MapIniParser.T__2);
			this.state = 253;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 252;
				this.match(MapIniParser.ID);
				}
				}
				this.state = 255;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === MapIniParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectWeaponSet(): ObjectWeaponSetContext {
		let _localctx: ObjectWeaponSetContext = new ObjectWeaponSetContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, MapIniParser.RULE_objectWeaponSet);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 257;
			this.match(MapIniParser.T__10);
			this.state = 261;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.ID) {
				{
				{
				this.state = 258;
				this.objectWeaponSetPropety();
				}
				}
				this.state = 263;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 264;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectWeaponSetPropety(): ObjectWeaponSetPropetyContext {
		let _localctx: ObjectWeaponSetPropetyContext = new ObjectWeaponSetPropetyContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, MapIniParser.RULE_objectWeaponSetPropety);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 266;
			this.match(MapIniParser.ID);
			this.state = 267;
			this.match(MapIniParser.T__2);
			this.state = 269;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 268;
					this.value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 271;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectArmorSet(): ObjectArmorSetContext {
		let _localctx: ObjectArmorSetContext = new ObjectArmorSetContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, MapIniParser.RULE_objectArmorSet);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 273;
			this.match(MapIniParser.T__11);
			this.state = 277;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.ID) {
				{
				{
				this.state = 274;
				this.objectArmorSetPropety();
				}
				}
				this.state = 279;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 280;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectArmorSetPropety(): ObjectArmorSetPropetyContext {
		let _localctx: ObjectArmorSetPropetyContext = new ObjectArmorSetPropetyContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, MapIniParser.RULE_objectArmorSetPropety);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 282;
			this.match(MapIniParser.ID);
			this.state = 283;
			this.match(MapIniParser.T__2);
			this.state = 285;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 284;
					this.value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 287;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectUnitSpecificSounds(): ObjectUnitSpecificSoundsContext {
		let _localctx: ObjectUnitSpecificSoundsContext = new ObjectUnitSpecificSoundsContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, MapIniParser.RULE_objectUnitSpecificSounds);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 289;
			this.match(MapIniParser.T__12);
			this.state = 293;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.ID) {
				{
				{
				this.state = 290;
				this.objectUnitSpecificSoundsPropety();
				}
				}
				this.state = 295;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 296;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectUnitSpecificSoundsPropety(): ObjectUnitSpecificSoundsPropetyContext {
		let _localctx: ObjectUnitSpecificSoundsPropetyContext = new ObjectUnitSpecificSoundsPropetyContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, MapIniParser.RULE_objectUnitSpecificSoundsPropety);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 298;
			this.match(MapIniParser.ID);
			this.state = 299;
			this.match(MapIniParser.T__2);
			this.state = 301;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 300;
					this.value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 303;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectUnitSpecificFX(): ObjectUnitSpecificFXContext {
		let _localctx: ObjectUnitSpecificFXContext = new ObjectUnitSpecificFXContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, MapIniParser.RULE_objectUnitSpecificFX);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 305;
			this.match(MapIniParser.T__13);
			this.state = 309;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.ID) {
				{
				{
				this.state = 306;
				this.objectUnitSpecificFXPropety();
				}
				}
				this.state = 311;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 312;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectUnitSpecificFXPropety(): ObjectUnitSpecificFXPropetyContext {
		let _localctx: ObjectUnitSpecificFXPropetyContext = new ObjectUnitSpecificFXPropetyContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, MapIniParser.RULE_objectUnitSpecificFXPropety);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 314;
			this.match(MapIniParser.ID);
			this.state = 315;
			this.match(MapIniParser.T__2);
			this.state = 317;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 316;
					this.value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 319;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public clientModuleBlock(): ClientModuleBlockContext {
		let _localctx: ClientModuleBlockContext = new ClientModuleBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, MapIniParser.RULE_clientModuleBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 321;
			this.match(MapIniParser.T__14);
			this.state = 322;
			this.match(MapIniParser.T__2);
			this.state = 323;
			this.match(MapIniParser.ID);
			this.state = 324;
			this.match(MapIniParser.ID);
			this.state = 328;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.ID) {
				{
				{
				this.state = 325;
				this.property();
				}
				}
				this.state = 330;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 331;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public behaviormoduleBlock(): BehaviormoduleBlockContext {
		let _localctx: BehaviormoduleBlockContext = new BehaviormoduleBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, MapIniParser.RULE_behaviormoduleBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 333;
			this.match(MapIniParser.T__15);
			this.state = 334;
			this.match(MapIniParser.T__2);
			this.state = 335;
			this.match(MapIniParser.ID);
			this.state = 336;
			this.match(MapIniParser.ID);
			this.state = 343;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MapIniParser.T__4) | (1 << MapIniParser.T__5) | (1 << MapIniParser.T__6) | (1 << MapIniParser.T__16) | (1 << MapIniParser.T__17) | (1 << MapIniParser.T__18) | (1 << MapIniParser.T__19) | (1 << MapIniParser.T__20))) !== 0) || _la === MapIniParser.ID) {
				{
				this.state = 341;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case MapIniParser.ID:
					{
					this.state = 337;
					this.property();
					}
					break;
				case MapIniParser.T__19:
				case MapIniParser.T__20:
					{
					this.state = 338;
					this.behaviorTurret();
					}
					break;
				case MapIniParser.T__4:
				case MapIniParser.T__5:
				case MapIniParser.T__6:
					{
					this.state = 339;
					this.objectKindOfProperty();
					}
					break;
				case MapIniParser.T__16:
				case MapIniParser.T__17:
				case MapIniParser.T__18:
					{
					this.state = 340;
					this.behaviorDecals();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 345;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 346;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public behaviorDecals(): BehaviorDecalsContext {
		let _localctx: BehaviorDecalsContext = new BehaviorDecalsContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, MapIniParser.RULE_behaviorDecals);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 348;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MapIniParser.T__16) | (1 << MapIniParser.T__17) | (1 << MapIniParser.T__18))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 352;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.ID) {
				{
				{
				this.state = 349;
				this.property();
				}
				}
				this.state = 354;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 355;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public behaviorTurret(): BehaviorTurretContext {
		let _localctx: BehaviorTurretContext = new BehaviorTurretContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, MapIniParser.RULE_behaviorTurret);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 357;
			_la = this._input.LA(1);
			if (!(_la === MapIniParser.T__19 || _la === MapIniParser.T__20)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 361;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.ID) {
				{
				{
				this.state = 358;
				this.property();
				}
				}
				this.state = 363;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 364;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bodyModuleBlock(): BodyModuleBlockContext {
		let _localctx: BodyModuleBlockContext = new BodyModuleBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, MapIniParser.RULE_bodyModuleBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 366;
			this.match(MapIniParser.T__21);
			this.state = 367;
			this.match(MapIniParser.T__2);
			this.state = 368;
			this.match(MapIniParser.ID);
			this.state = 369;
			this.match(MapIniParser.ID);
			this.state = 373;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.ID) {
				{
				{
				this.state = 370;
				this.property();
				}
				}
				this.state = 375;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 376;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public drawModuleBlock(): DrawModuleBlockContext {
		let _localctx: DrawModuleBlockContext = new DrawModuleBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, MapIniParser.RULE_drawModuleBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 378;
			this.match(MapIniParser.T__22);
			this.state = 379;
			this.match(MapIniParser.T__2);
			this.state = 380;
			this.match(MapIniParser.ID);
			this.state = 381;
			this.match(MapIniParser.ID);
			this.state = 390;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & ((1 << (MapIniParser.T__23 - 24)) | (1 << (MapIniParser.T__24 - 24)) | (1 << (MapIniParser.T__26 - 24)) | (1 << (MapIniParser.T__27 - 24)) | (1 << (MapIniParser.T__28 - 24)) | (1 << (MapIniParser.ID - 24)))) !== 0)) {
				{
				this.state = 388;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case MapIniParser.T__23:
				case MapIniParser.T__24:
				case MapIniParser.T__26:
				case MapIniParser.T__27:
				case MapIniParser.T__28:
					{
					this.state = 383;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 382;
							this.conditionStateBlocks();
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 385;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					break;
				case MapIniParser.ID:
					{
					this.state = 387;
					this.drawModuleProperty();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 392;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 393;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public drawModuleProperty(): DrawModulePropertyContext {
		let _localctx: DrawModulePropertyContext = new DrawModulePropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, MapIniParser.RULE_drawModuleProperty);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 395;
			this.match(MapIniParser.ID);
			this.state = 396;
			this.match(MapIniParser.T__2);
			this.state = 398;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 397;
					this.value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 400;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionStateBlocks(): ConditionStateBlocksContext {
		let _localctx: ConditionStateBlocksContext = new ConditionStateBlocksContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, MapIniParser.RULE_conditionStateBlocks);
		try {
			this.state = 407;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapIniParser.T__23:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 402;
				this.conditionStateBlock();
				}
				break;
			case MapIniParser.T__24:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 403;
				this.defaultConditionStateBlock();
				}
				break;
			case MapIniParser.T__26:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 404;
				this.transitionStateBlock();
				}
				break;
			case MapIniParser.T__27:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 405;
				this.aliasConditionStateBlock();
				}
				break;
			case MapIniParser.T__28:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 406;
				this.ignoreConditionStateBlock();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionStateBlock(): ConditionStateBlockContext {
		let _localctx: ConditionStateBlockContext = new ConditionStateBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, MapIniParser.RULE_conditionStateBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 409;
			this.match(MapIniParser.T__23);
			this.state = 416;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MapIniParser.T__2) {
				{
				this.state = 410;
				this.match(MapIniParser.T__2);
				this.state = 412;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 411;
						this.match(MapIniParser.ID);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 414;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
			}

			this.state = 423;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (MapIniParser.T__19 - 20)) | (1 << (MapIniParser.T__20 - 20)) | (1 << (MapIniParser.T__25 - 20)) | (1 << (MapIniParser.T__30 - 20)) | (1 << (MapIniParser.T__31 - 20)) | (1 << (MapIniParser.T__32 - 20)) | (1 << (MapIniParser.T__33 - 20)) | (1 << (MapIniParser.ID - 20)))) !== 0)) {
				{
				this.state = 421;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case MapIniParser.ID:
					{
					this.state = 418;
					this.conditionStateProperty();
					}
					break;
				case MapIniParser.T__19:
				case MapIniParser.T__20:
				case MapIniParser.T__30:
				case MapIniParser.T__31:
				case MapIniParser.T__32:
				case MapIniParser.T__33:
					{
					this.state = 419;
					this.turretProperty();
					}
					break;
				case MapIniParser.T__25:
					{
					this.state = 420;
					this.transitionKeyProperty();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 425;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 426;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defaultConditionStateBlock(): DefaultConditionStateBlockContext {
		let _localctx: DefaultConditionStateBlockContext = new DefaultConditionStateBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, MapIniParser.RULE_defaultConditionStateBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 428;
			this.match(MapIniParser.T__24);
			this.state = 434;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (MapIniParser.T__19 - 20)) | (1 << (MapIniParser.T__20 - 20)) | (1 << (MapIniParser.T__25 - 20)) | (1 << (MapIniParser.T__30 - 20)) | (1 << (MapIniParser.T__31 - 20)) | (1 << (MapIniParser.T__32 - 20)) | (1 << (MapIniParser.T__33 - 20)) | (1 << (MapIniParser.ID - 20)))) !== 0)) {
				{
				this.state = 432;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case MapIniParser.ID:
					{
					this.state = 429;
					this.conditionStateProperty();
					}
					break;
				case MapIniParser.T__19:
				case MapIniParser.T__20:
				case MapIniParser.T__30:
				case MapIniParser.T__31:
				case MapIniParser.T__32:
				case MapIniParser.T__33:
					{
					this.state = 430;
					this.turretProperty();
					}
					break;
				case MapIniParser.T__25:
					{
					this.state = 431;
					this.transitionKeyProperty();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 436;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 437;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionStateProperty(): ConditionStatePropertyContext {
		let _localctx: ConditionStatePropertyContext = new ConditionStatePropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, MapIniParser.RULE_conditionStateProperty);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 439;
			this.match(MapIniParser.ID);
			this.state = 440;
			this.match(MapIniParser.T__2);
			this.state = 442;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 441;
					this.value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 444;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public transitionKeyProperty(): TransitionKeyPropertyContext {
		let _localctx: TransitionKeyPropertyContext = new TransitionKeyPropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, MapIniParser.RULE_transitionKeyProperty);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 446;
			this.match(MapIniParser.T__25);
			this.state = 447;
			this.match(MapIniParser.T__2);
			this.state = 448;
			this.match(MapIniParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public transitionStateBlock(): TransitionStateBlockContext {
		let _localctx: TransitionStateBlockContext = new TransitionStateBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, MapIniParser.RULE_transitionStateBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 450;
			this.match(MapIniParser.T__26);
			this.state = 451;
			this.match(MapIniParser.T__2);
			this.state = 452;
			this.match(MapIniParser.ID);
			this.state = 454;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 453;
					this.match(MapIniParser.ID);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 456;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 461;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.ID) {
				{
				{
				this.state = 458;
				this.transitionStateProperty();
				}
				}
				this.state = 463;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 464;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public transitionStateProperty(): TransitionStatePropertyContext {
		let _localctx: TransitionStatePropertyContext = new TransitionStatePropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, MapIniParser.RULE_transitionStateProperty);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 466;
			this.match(MapIniParser.ID);
			this.state = 467;
			this.match(MapIniParser.T__2);
			this.state = 469;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 468;
					this.value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 471;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aliasConditionStateBlock(): AliasConditionStateBlockContext {
		let _localctx: AliasConditionStateBlockContext = new AliasConditionStateBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, MapIniParser.RULE_aliasConditionStateBlock);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 473;
			this.match(MapIniParser.T__27);
			this.state = 474;
			this.match(MapIniParser.T__2);
			this.state = 476;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 475;
					this.match(MapIniParser.ID);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 478;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ignoreConditionStateBlock(): IgnoreConditionStateBlockContext {
		let _localctx: IgnoreConditionStateBlockContext = new IgnoreConditionStateBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, MapIniParser.RULE_ignoreConditionStateBlock);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 480;
			this.match(MapIniParser.T__28);
			this.state = 481;
			this.match(MapIniParser.T__2);
			this.state = 483;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 482;
					this.match(MapIniParser.ID);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 485;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public removeModuleBlock(): RemoveModuleBlockContext {
		let _localctx: RemoveModuleBlockContext = new RemoveModuleBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, MapIniParser.RULE_removeModuleBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 487;
			this.match(MapIniParser.T__29);
			this.state = 488;
			this.match(MapIniParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public turretProperty(): TurretPropertyContext {
		let _localctx: TurretPropertyContext = new TurretPropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, MapIniParser.RULE_turretProperty);
		try {
			this.state = 492;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapIniParser.T__19:
			case MapIniParser.T__30:
			case MapIniParser.T__31:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 490;
				this.tturretProperty();
				}
				break;
			case MapIniParser.T__20:
			case MapIniParser.T__32:
			case MapIniParser.T__33:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 491;
				this.altTurretProperty();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public property(): PropertyContext {
		let _localctx: PropertyContext = new PropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, MapIniParser.RULE_property);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 494;
			this.match(MapIniParser.ID);
			this.state = 502;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapIniParser.T__2:
				{
				this.state = 495;
				this.match(MapIniParser.T__2);
				}
				break;
			case MapIniParser.T__19:
			case MapIniParser.T__20:
			case MapIniParser.T__30:
			case MapIniParser.T__31:
			case MapIniParser.T__32:
			case MapIniParser.T__33:
			case MapIniParser.T__39:
			case MapIniParser.INT:
			case MapIniParser.FLOAT:
			case MapIniParser.BOOL:
			case MapIniParser.ID:
			case MapIniParser.WS:
				{
				this.state = 499;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === MapIniParser.WS) {
					{
					{
					this.state = 496;
					this.match(MapIniParser.WS);
					}
					}
					this.state = 501;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 505;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 504;
					this.value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 507;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tturretProperty(): TturretPropertyContext {
		let _localctx: TturretPropertyContext = new TturretPropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, MapIniParser.RULE_tturretProperty);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 509;
			_la = this._input.LA(1);
			if (!(((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (MapIniParser.T__19 - 20)) | (1 << (MapIniParser.T__30 - 20)) | (1 << (MapIniParser.T__31 - 20)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 510;
			this.match(MapIniParser.T__2);
			this.state = 512;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 511;
					this.value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 514;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public altTurretProperty(): AltTurretPropertyContext {
		let _localctx: AltTurretPropertyContext = new AltTurretPropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, MapIniParser.RULE_altTurretProperty);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 516;
			_la = this._input.LA(1);
			if (!(((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (MapIniParser.T__20 - 21)) | (1 << (MapIniParser.T__32 - 21)) | (1 << (MapIniParser.T__33 - 21)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 517;
			this.match(MapIniParser.T__2);
			this.state = 519;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 518;
					this.value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 521;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public end(): EndContext {
		let _localctx: EndContext = new EndContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, MapIniParser.RULE_end);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 523;
			_la = this._input.LA(1);
			if (!(((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (MapIniParser.T__34 - 35)) | (1 << (MapIniParser.T__35 - 35)) | (1 << (MapIniParser.T__36 - 35)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, MapIniParser.RULE_value);
		let _la: number;
		try {
			this.state = 534;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
			case 1:
				_localctx = new StringContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 525;
				this.quoutedID();
				}
				break;

			case 2:
				_localctx = new FiletypeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 526;
				this.ftype();
				}
				break;

			case 3:
				_localctx = new ProcentageContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 527;
				this.procent();
				}
				break;

			case 4:
				_localctx = new IdContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 528;
				this.match(MapIniParser.ID);
				}
				break;

			case 5:
				_localctx = new IntContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 529;
				this.match(MapIniParser.INT);
				}
				break;

			case 6:
				_localctx = new FloatContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 530;
				this.match(MapIniParser.FLOAT);
				}
				break;

			case 7:
				_localctx = new BoolContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 531;
				this.match(MapIniParser.BOOL);
				}
				break;

			case 8:
				_localctx = new TurretValueContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 532;
				_la = this._input.LA(1);
				if (!(((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (MapIniParser.T__19 - 20)) | (1 << (MapIniParser.T__30 - 20)) | (1 << (MapIniParser.T__31 - 20)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 9:
				_localctx = new AltTurretValueContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 533;
				_la = this._input.LA(1);
				if (!(((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (MapIniParser.T__20 - 21)) | (1 << (MapIniParser.T__32 - 21)) | (1 << (MapIniParser.T__33 - 21)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ftype(): FtypeContext {
		let _localctx: FtypeContext = new FtypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, MapIniParser.RULE_ftype);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 536;
			this.match(MapIniParser.ID);
			this.state = 537;
			this.match(MapIniParser.T__37);
			this.state = 538;
			this.match(MapIniParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rgb(): RgbContext {
		let _localctx: RgbContext = new RgbContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, MapIniParser.RULE_rgb);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 540;
			this.match(MapIniParser.INT256);
			this.state = 541;
			this.match(MapIniParser.INT256);
			this.state = 542;
			this.match(MapIniParser.INT256);
			this.state = 543;
			this.match(MapIniParser.INT256);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public procent(): ProcentContext {
		let _localctx: ProcentContext = new ProcentContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, MapIniParser.RULE_procent);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 545;
			_la = this._input.LA(1);
			if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 546;
			this.match(MapIniParser.T__38);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public intRang(): IntRangContext {
		let _localctx: IntRangContext = new IntRangContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, MapIniParser.RULE_intRang);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 548;
			this.match(MapIniParser.INT);
			this.state = 549;
			this.match(MapIniParser.INT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public floatRang(): FloatRangContext {
		let _localctx: FloatRangContext = new FloatRangContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, MapIniParser.RULE_floatRang);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 551;
			this.match(MapIniParser.FLOAT);
			this.state = 552;
			this.match(MapIniParser.FLOAT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public quoutedID(): QuoutedIDContext {
		let _localctx: QuoutedIDContext = new QuoutedIDContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, MapIniParser.RULE_quoutedID);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 554;
			this.match(MapIniParser.T__39);
			this.state = 558;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 555;
					_la = this._input.LA(1);
					if (_la <= 0 || (_la === MapIniParser.WS)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					}
				}
				this.state = 560;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
			}
			this.state = 561;
			this.match(MapIniParser.T__39);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x032\u0236\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x03\x02\x07\x02n\n\x02\f\x02\x0E\x02q\v\x02\x03\x02" +
		"\x03\x02\x03\x03\x03\x03\x05\x03w\n\x03\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x07\x04\x7F\n\x04\f\x04\x0E\x04\x82\v\x04\x03\x04\x03" +
		"\x04\x03\x04\x07\x04\x87\n\x04\f\x04\x0E\x04\x8A\v\x04\x05\x04\x8C\n\x04" +
		"\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\x95\n" +
		"\x05\f\x05\x0E\x05\x98\v\x05\x03\x05\x03\x05\x03\x05\x07\x05\x9D\n\x05" +
		"\f\x05\x0E\x05\xA0\v\x05\x05\x05\xA2\n\x05\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x06\x06\x06\xA9\n\x06\r\x06\x0E\x06\xAA\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x05\x07\xB1\n\x07\x03\b\x03\b\x03\b\x03\b\x07\b\xB7\n\b\f\b\x0E" +
		"\b\xBA\v\b\x03\b\x03\b\x03\t\x03\t\x03\t\x06\t\xC1\n\t\r\t\x0E\t\xC2\x03" +
		"\n\x03\n\x03\n\x06\n\xC8\n\n\r\n\x0E\n\xC9\x03\v\x03\v\x03\v\x03\v\x07" +
		"\v\xD0\n\v\f\v\x0E\v\xD3\v\v\x03\v\x03\v\x03\f\x03\f\x03\f\x06\f\xDA\n" +
		"\f\r\f\x0E\f\xDB\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\xE3\n\r\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xEA\n\x0E\x03\x0F\x03\x0F\x03\x0F" +
		"\x07\x0F\xEF\n\x0F\f\x0F\x0E\x0F\xF2\v\x0F\x03\x0F\x03\x0F\x03\x10\x03" +
		"\x10\x03\x10\x06\x10\xF9\n\x10\r\x10\x0E\x10\xFA\x03\x11\x03\x11\x03\x11" +
		"\x06\x11\u0100\n\x11\r\x11\x0E\x11\u0101\x03\x12\x03\x12\x07\x12\u0106" +
		"\n\x12\f\x12\x0E\x12\u0109\v\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13" +
		"\x06\x13\u0110\n\x13\r\x13\x0E\x13\u0111\x03\x14\x03\x14\x07\x14\u0116" +
		"\n\x14\f\x14\x0E\x14\u0119\v\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15" +
		"\x06\x15\u0120\n\x15\r\x15\x0E\x15\u0121\x03\x16\x03\x16\x07\x16\u0126" +
		"\n\x16\f\x16\x0E\x16\u0129\v\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17" +
		"\x06\x17\u0130\n\x17\r\x17\x0E\x17\u0131\x03\x18\x03\x18\x07\x18\u0136" +
		"\n\x18\f\x18\x0E\x18\u0139\v\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19" +
		"\x06\x19\u0140\n\x19\r\x19\x0E\x19\u0141\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x07\x1A\u0149\n\x1A\f\x1A\x0E\x1A\u014C\v\x1A\x03\x1A\x03\x1A" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B" +
		"\u0158\n\x1B\f\x1B\x0E\x1B\u015B\v\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C" +
		"\x07\x1C\u0161\n\x1C\f\x1C\x0E\x1C\u0164\v\x1C\x03\x1C\x03\x1C\x03\x1D" +
		"\x03\x1D\x07\x1D\u016A\n\x1D\f\x1D\x0E\x1D\u016D\v\x1D\x03\x1D\x03\x1D" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u0176\n\x1E\f\x1E\x0E" +
		"\x1E\u0179\v\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x06\x1F\u0182\n\x1F\r\x1F\x0E\x1F\u0183\x03\x1F\x07\x1F\u0187\n\x1F\f" +
		"\x1F\x0E\x1F\u018A\v\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x06 \u0191\n " +
		"\r \x0E \u0192\x03!\x03!\x03!\x03!\x03!\x05!\u019A\n!\x03\"\x03\"\x03" +
		"\"\x06\"\u019F\n\"\r\"\x0E\"\u01A0\x05\"\u01A3\n\"\x03\"\x03\"\x03\"\x07" +
		"\"\u01A8\n\"\f\"\x0E\"\u01AB\v\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x07#" +
		"\u01B3\n#\f#\x0E#\u01B6\v#\x03#\x03#\x03$\x03$\x03$\x06$\u01BD\n$\r$\x0E" +
		"$\u01BE\x03%\x03%\x03%\x03%\x03&\x03&\x03&\x03&\x06&\u01C9\n&\r&\x0E&" +
		"\u01CA\x03&\x07&\u01CE\n&\f&\x0E&\u01D1\v&\x03&\x03&\x03\'\x03\'\x03\'" +
		"\x06\'\u01D8\n\'\r\'\x0E\'\u01D9\x03(\x03(\x03(\x06(\u01DF\n(\r(\x0E(" +
		"\u01E0\x03)\x03)\x03)\x06)\u01E6\n)\r)\x0E)\u01E7\x03*\x03*\x03*\x03+" +
		"\x03+\x05+\u01EF\n+\x03,\x03,\x03,\x07,\u01F4\n,\f,\x0E,\u01F7\v,\x05" +
		",\u01F9\n,\x03,\x06,\u01FC\n,\r,\x0E,\u01FD\x03-\x03-\x03-\x06-\u0203" +
		"\n-\r-\x0E-\u0204\x03.\x03.\x03.\x06.\u020A\n.\r.\x0E.\u020B\x03/\x03" +
		"/\x030\x030\x030\x030\x030\x030\x030\x030\x030\x050\u0219\n0\x031\x03" +
		"1\x031\x031\x032\x032\x032\x032\x032\x033\x033\x033\x034\x034\x034\x03" +
		"5\x035\x035\x036\x036\x076\u022F\n6\f6\x0E6\u0232\v6\x036\x036\x036\x02" +
		"\x02\x027\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
		"\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
		"^\x02`\x02b\x02d\x02f\x02h\x02j\x02\x02\n\x03\x02\x07\t\x03\x02\x13\x15" +
		"\x03\x02\x16\x17\x04\x02\x16\x16!\"\x04\x02\x17\x17#$\x03\x02%\'\x04\x02" +
		"++--\x03\x0222\x02\u025D\x02o\x03\x02\x02\x02\x04v\x03\x02\x02\x02\x06" +
		"x\x03\x02\x02\x02\b\x8F\x03\x02\x02\x02\n\xA5\x03\x02\x02\x02\f\xB0\x03" +
		"\x02\x02\x02\x0E\xB2\x03\x02\x02\x02\x10\xBD\x03\x02\x02\x02\x12\xC4\x03" +
		"\x02\x02\x02\x14\xCB\x03\x02\x02\x02\x16\xD6\x03\x02\x02\x02\x18\xE2\x03" +
		"\x02\x02\x02\x1A\xE9\x03\x02\x02\x02\x1C\xEB\x03\x02\x02\x02\x1E\xF5\x03" +
		"\x02\x02\x02 \xFC\x03\x02\x02\x02\"\u0103\x03\x02\x02\x02$\u010C\x03\x02" +
		"\x02\x02&\u0113\x03\x02\x02\x02(\u011C\x03\x02\x02\x02*\u0123\x03\x02" +
		"\x02\x02,\u012C\x03\x02\x02\x02.\u0133\x03\x02\x02\x020\u013C\x03\x02" +
		"\x02\x022\u0143\x03\x02\x02\x024\u014F\x03\x02\x02\x026\u015E\x03\x02" +
		"\x02\x028\u0167\x03\x02\x02\x02:\u0170\x03\x02\x02\x02<\u017C\x03\x02" +
		"\x02\x02>\u018D\x03\x02\x02\x02@\u0199\x03\x02\x02\x02B\u019B\x03\x02" +
		"\x02\x02D\u01AE\x03\x02\x02\x02F\u01B9\x03\x02\x02\x02H\u01C0\x03\x02" +
		"\x02\x02J\u01C4\x03\x02\x02\x02L\u01D4\x03\x02\x02\x02N\u01DB\x03\x02" +
		"\x02\x02P\u01E2\x03\x02\x02\x02R\u01E9\x03\x02\x02\x02T\u01EE\x03\x02" +
		"\x02\x02V\u01F0\x03\x02\x02\x02X\u01FF\x03\x02\x02\x02Z\u0206\x03\x02" +
		"\x02\x02\\\u020D\x03\x02\x02\x02^\u0218\x03\x02\x02\x02`\u021A\x03\x02" +
		"\x02\x02b\u021E\x03\x02\x02\x02d\u0223\x03\x02\x02\x02f\u0226\x03\x02" +
		"\x02\x02h\u0229\x03\x02\x02\x02j\u022C\x03\x02\x02\x02ln\x05\x04\x03\x02" +
		"ml\x03\x02\x02\x02nq\x03\x02\x02\x02om\x03\x02\x02\x02op\x03\x02\x02\x02" +
		"pr\x03\x02\x02\x02qo\x03\x02\x02\x02rs\x07\x02\x02\x03s\x03\x03\x02\x02" +
		"\x02tw\x05\b\x05\x02uw\x05\x06\x04\x02vt\x03\x02\x02\x02vu\x03\x02\x02" +
		"\x02w\x05\x03\x02\x02\x02xy\x07\x03\x02\x02yz\x07/\x02\x02z\x8B\x07/\x02" +
		"\x02{\x7F\x05\x18\r\x02|\x7F\x05\n\x06\x02}\x7F\x05\x12\n\x02~{\x03\x02" +
		"\x02\x02~|\x03\x02\x02\x02~}\x03\x02\x02\x02\x7F\x82\x03\x02\x02\x02\x80" +
		"~\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81\x8C\x03\x02\x02\x02\x82" +
		"\x80\x03\x02\x02\x02\x83\x87\x05\f\x07\x02\x84\x87\x05\n\x06\x02\x85\x87" +
		"\x05\x12\n\x02\x86\x83\x03\x02\x02\x02\x86\x84\x03\x02\x02\x02\x86\x85" +
		"\x03\x02\x02\x02\x87\x8A\x03\x02\x02\x02\x88\x86\x03\x02\x02\x02\x88\x89" +
		"\x03\x02\x02\x02\x89\x8C\x03\x02\x02\x02\x8A\x88\x03\x02\x02\x02\x8B\x80" +
		"\x03\x02\x02\x02\x8B\x88\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8E" +
		"\x05\\/\x02\x8E\x07\x03\x02\x02\x02\x8F\x90\x07\x04\x02\x02\x90\xA1\x07" +
		"/\x02\x02\x91\x95\x05\x18\r\x02\x92\x95\x05\n\x06\x02\x93\x95\x05\x12" +
		"\n\x02\x94\x91\x03\x02\x02\x02\x94\x92\x03\x02\x02\x02\x94\x93\x03\x02" +
		"\x02\x02\x95\x98\x03\x02\x02\x02\x96\x94\x03\x02\x02\x02\x96\x97\x03\x02" +
		"\x02\x02\x97\xA2\x03\x02\x02\x02\x98\x96\x03\x02\x02\x02\x99\x9D\x05\f" +
		"\x07\x02\x9A\x9D\x05\n\x06\x02\x9B\x9D\x05\x12\n\x02\x9C\x99\x03\x02\x02" +
		"\x02\x9C\x9A\x03\x02\x02\x02\x9C\x9B\x03\x02\x02\x02\x9D\xA0\x03\x02\x02" +
		"\x02\x9E\x9C\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\xA2\x03\x02\x02" +
		"\x02\xA0\x9E\x03\x02\x02\x02\xA1\x96\x03\x02\x02\x02\xA1\x9E\x03\x02\x02" +
		"\x02\xA2\xA3\x03\x02\x02\x02\xA3\xA4\x05\\/\x02\xA4\t\x03\x02\x02\x02" +
		"\xA5\xA6\x07/\x02\x02\xA6\xA8\x07\x05\x02\x02\xA7\xA9\x05^0\x02\xA8\xA7" +
		"\x03\x02\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA\xA8\x03\x02\x02\x02\xAA\xAB" +
		"\x03\x02\x02\x02\xAB\v\x03\x02\x02\x02\xAC\xB1\x05\x0E\b\x02\xAD\xB1\x05" +
		"\x14\v\x02\xAE\xB1\x05R*\x02\xAF\xB1\x05\x1A\x0E\x02\xB0\xAC\x03\x02\x02" +
		"\x02\xB0\xAD\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02\xB0\xAF\x03\x02\x02" +
		"\x02\xB1\r\x03\x02\x02\x02\xB2\xB8\x07\x06\x02\x02\xB3\xB7\x05\x18\r\x02" +
		"\xB4\xB7\x05\x10\t\x02\xB5\xB7\x05\x12\n\x02\xB6\xB3\x03\x02\x02\x02\xB6" +
		"\xB4\x03\x02\x02\x02\xB6\xB5\x03\x02\x02\x02\xB7\xBA\x03\x02\x02\x02\xB8" +
		"\xB6\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xBB\x03\x02\x02\x02\xBA" +
		"\xB8\x03\x02\x02\x02\xBB\xBC\x05\\/\x02\xBC\x0F\x03\x02\x02\x02\xBD\xBE" +
		"\x07/\x02\x02\xBE\xC0\x07\x05\x02\x02\xBF\xC1\x05^0\x02\xC0\xBF\x03\x02" +
		"\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC0\x03\x02\x02\x02\xC2\xC3\x03\x02" +
		"\x02\x02\xC3\x11\x03\x02\x02\x02\xC4\xC5\t\x02\x02\x02\xC5\xC7\x07\x05" +
		"\x02\x02\xC6\xC8\x07/\x02\x02\xC7\xC6\x03\x02\x02\x02\xC8\xC9\x03\x02" +
		"\x02\x02\xC9\xC7\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\x13\x03\x02" +
		"\x02\x02\xCB\xCC\x07\n\x02\x02\xCC\xD1\x07/\x02\x02\xCD\xD0\x05\x18\r" +
		"\x02\xCE\xD0\x05\x16\f\x02\xCF\xCD\x03\x02\x02\x02\xCF\xCE\x03\x02\x02" +
		"\x02\xD0\xD3\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD1\xD2\x03\x02\x02" +
		"\x02\xD2\xD4\x03\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD4\xD5\x05\\/\x02" +
		"\xD5\x15\x03\x02\x02\x02\xD6\xD7\x07/\x02\x02\xD7\xD9\x07\x05\x02\x02" +
		"\xD8\xDA\x05^0\x02\xD9\xD8\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB" +
		"\xD9\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\x17\x03\x02\x02\x02\xDD" +
		"\xE3\x05<\x1F\x02\xDE\xE3\x05:\x1E\x02\xDF\xE3\x054\x1B\x02\xE0\xE3\x05" +
		"2\x1A\x02\xE1\xE3\x05\x1A\x0E\x02\xE2\xDD\x03\x02\x02\x02\xE2\xDE\x03" +
		"\x02\x02\x02\xE2\xDF\x03\x02\x02\x02\xE2\xE0\x03\x02\x02\x02\xE2\xE1\x03" +
		"\x02\x02\x02\xE3\x19\x03\x02\x02\x02\xE4\xEA\x05\x1C\x0F\x02\xE5\xEA\x05" +
		"\"\x12\x02\xE6\xEA\x05&\x14\x02\xE7\xEA\x05*\x16\x02\xE8\xEA\x05.\x18" +
		"\x02\xE9\xE4\x03\x02\x02\x02\xE9\xE5\x03\x02\x02\x02\xE9\xE6\x03\x02\x02" +
		"\x02\xE9\xE7\x03\x02\x02\x02\xE9\xE8\x03\x02\x02\x02\xEA\x1B\x03\x02\x02" +
		"\x02\xEB\xF0\x07\v\x02\x02\xEC\xEF\x05\x1E\x10\x02\xED\xEF\x05 \x11\x02" +
		"\xEE\xEC\x03\x02\x02\x02\xEE\xED\x03\x02\x02\x02\xEF\xF2\x03\x02\x02\x02" +
		"\xF0\xEE\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF3\x03\x02\x02\x02" +
		"\xF2\xF0\x03\x02\x02\x02\xF3\xF4\x05\\/\x02\xF4\x1D\x03\x02\x02\x02\xF5" +
		"\xF6\x07\x04\x02\x02\xF6\xF8\x07\x05\x02\x02\xF7\xF9\x07/\x02\x02\xF8" +
		"\xF7\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA\xF8\x03\x02\x02\x02\xFA" +
		"\xFB\x03\x02\x02\x02\xFB\x1F\x03\x02\x02\x02\xFC\xFD\x07\f\x02\x02\xFD" +
		"\xFF\x07\x05\x02\x02\xFE\u0100\x07/\x02\x02\xFF\xFE\x03\x02\x02\x02\u0100" +
		"\u0101\x03\x02\x02\x02\u0101\xFF\x03\x02\x02\x02\u0101\u0102\x03\x02\x02" +
		"\x02\u0102!\x03\x02\x02\x02\u0103\u0107\x07\r\x02\x02\u0104\u0106\x05" +
		"$\x13\x02\u0105\u0104\x03\x02\x02\x02\u0106\u0109\x03\x02\x02\x02\u0107" +
		"\u0105\x03\x02\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108\u010A\x03\x02" +
		"\x02\x02\u0109\u0107\x03\x02\x02\x02\u010A\u010B\x05\\/\x02\u010B#\x03" +
		"\x02\x02\x02\u010C\u010D\x07/\x02\x02\u010D\u010F\x07\x05\x02\x02\u010E" +
		"\u0110\x05^0\x02\u010F\u010E\x03\x02\x02\x02\u0110\u0111\x03\x02\x02\x02" +
		"\u0111\u010F\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112%\x03\x02" +
		"\x02\x02\u0113\u0117\x07\x0E\x02\x02\u0114\u0116\x05(\x15\x02\u0115\u0114" +
		"\x03\x02\x02\x02\u0116\u0119\x03\x02\x02\x02\u0117\u0115\x03\x02\x02\x02" +
		"\u0117\u0118\x03\x02\x02\x02\u0118\u011A\x03\x02\x02\x02\u0119\u0117\x03" +
		"\x02\x02\x02\u011A\u011B\x05\\/\x02\u011B\'\x03\x02\x02\x02\u011C\u011D" +
		"\x07/\x02\x02\u011D\u011F\x07\x05\x02\x02\u011E\u0120\x05^0\x02\u011F" +
		"\u011E\x03\x02\x02\x02\u0120\u0121\x03\x02\x02\x02\u0121\u011F\x03\x02" +
		"\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122)\x03\x02\x02\x02\u0123\u0127" +
		"\x07\x0F\x02\x02\u0124\u0126\x05,\x17\x02\u0125\u0124\x03\x02\x02\x02" +
		"\u0126\u0129\x03\x02\x02\x02\u0127\u0125\x03\x02\x02\x02\u0127\u0128\x03" +
		"\x02\x02\x02\u0128\u012A\x03\x02\x02\x02\u0129\u0127\x03\x02\x02\x02\u012A" +
		"\u012B\x05\\/\x02\u012B+\x03\x02\x02\x02\u012C\u012D\x07/\x02\x02\u012D" +
		"\u012F\x07\x05\x02\x02\u012E\u0130\x05^0\x02\u012F\u012E\x03\x02\x02\x02" +
		"\u0130\u0131\x03\x02\x02\x02\u0131\u012F\x03\x02\x02\x02\u0131\u0132\x03" +
		"\x02\x02\x02\u0132-\x03\x02\x02\x02\u0133\u0137\x07\x10\x02\x02\u0134" +
		"\u0136\x050\x19\x02\u0135\u0134\x03\x02\x02\x02\u0136\u0139\x03\x02\x02" +
		"\x02\u0137\u0135\x03\x02\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138\u013A" +
		"\x03\x02\x02\x02\u0139\u0137\x03\x02\x02\x02\u013A\u013B\x05\\/\x02\u013B" +
		"/\x03\x02\x02\x02\u013C\u013D\x07/\x02\x02\u013D\u013F\x07\x05\x02\x02" +
		"\u013E\u0140\x05^0\x02\u013F\u013E\x03\x02\x02\x02\u0140\u0141\x03\x02" +
		"\x02\x02\u0141\u013F\x03\x02\x02\x02\u0141\u0142\x03\x02\x02\x02\u0142" +
		"1\x03\x02\x02\x02\u0143\u0144\x07\x11\x02\x02\u0144\u0145\x07\x05\x02" +
		"\x02\u0145\u0146\x07/\x02\x02\u0146\u014A\x07/\x02\x02\u0147\u0149\x05" +
		"V,\x02\u0148\u0147\x03\x02\x02\x02\u0149\u014C\x03\x02\x02\x02\u014A\u0148" +
		"\x03\x02\x02\x02\u014A\u014B\x03\x02\x02\x02\u014B\u014D\x03\x02\x02\x02" +
		"\u014C\u014A\x03\x02\x02\x02\u014D\u014E\x05\\/\x02\u014E3\x03\x02\x02" +
		"\x02\u014F\u0150\x07\x12\x02\x02\u0150\u0151\x07\x05\x02\x02\u0151\u0152" +
		"\x07/\x02\x02\u0152\u0159\x07/\x02\x02\u0153\u0158\x05V,\x02\u0154\u0158" +
		"\x058\x1D\x02\u0155\u0158\x05\x12\n\x02\u0156\u0158\x056\x1C\x02\u0157" +
		"\u0153\x03\x02\x02\x02\u0157\u0154\x03\x02\x02\x02\u0157\u0155\x03\x02" +
		"\x02\x02\u0157\u0156\x03\x02\x02\x02\u0158\u015B\x03\x02\x02\x02\u0159" +
		"\u0157\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A\u015C\x03\x02" +
		"\x02\x02\u015B\u0159\x03\x02\x02\x02\u015C\u015D\x05\\/\x02\u015D5\x03" +
		"\x02\x02\x02\u015E\u0162\t\x03\x02\x02\u015F\u0161\x05V,\x02\u0160\u015F" +
		"\x03\x02\x02\x02\u0161\u0164\x03\x02\x02\x02\u0162\u0160\x03\x02\x02\x02" +
		"\u0162\u0163\x03\x02\x02\x02\u0163\u0165\x03\x02\x02\x02\u0164\u0162\x03" +
		"\x02\x02\x02\u0165\u0166\x05\\/\x02\u01667\x03\x02\x02\x02\u0167\u016B" +
		"\t\x04\x02\x02\u0168\u016A\x05V,\x02\u0169\u0168\x03\x02\x02\x02\u016A" +
		"\u016D\x03\x02\x02\x02\u016B\u0169\x03\x02\x02\x02\u016B\u016C\x03\x02" +
		"\x02\x02\u016C\u016E\x03\x02\x02\x02\u016D\u016B\x03\x02\x02\x02\u016E" +
		"\u016F\x05\\/\x02\u016F9\x03\x02\x02\x02\u0170\u0171\x07\x18\x02\x02\u0171" +
		"\u0172\x07\x05\x02\x02\u0172\u0173\x07/\x02\x02\u0173\u0177\x07/\x02\x02" +
		"\u0174\u0176\x05V,\x02\u0175\u0174\x03\x02\x02\x02\u0176\u0179\x03\x02" +
		"\x02\x02\u0177\u0175\x03\x02\x02\x02\u0177\u0178\x03\x02\x02\x02\u0178" +
		"\u017A\x03\x02\x02\x02\u0179\u0177\x03\x02\x02\x02\u017A\u017B\x05\\/" +
		"\x02\u017B;\x03\x02\x02\x02\u017C\u017D\x07\x19\x02\x02\u017D\u017E\x07" +
		"\x05\x02\x02\u017E\u017F\x07/\x02\x02\u017F\u0188\x07/\x02\x02\u0180\u0182" +
		"\x05@!\x02\u0181\u0180\x03\x02\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183" +
		"\u0181\x03\x02\x02\x02\u0183\u0184\x03\x02\x02\x02\u0184\u0187\x03\x02" +
		"\x02\x02\u0185\u0187\x05> \x02\u0186\u0181\x03\x02\x02\x02\u0186\u0185" +
		"\x03\x02\x02\x02\u0187\u018A\x03\x02\x02\x02\u0188\u0186\x03\x02\x02\x02" +
		"\u0188\u0189\x03\x02\x02\x02\u0189\u018B\x03\x02\x02\x02\u018A\u0188\x03" +
		"\x02\x02\x02\u018B\u018C\x05\\/\x02\u018C=\x03\x02\x02\x02\u018D\u018E" +
		"\x07/\x02\x02\u018E\u0190\x07\x05\x02\x02\u018F\u0191\x05^0\x02\u0190" +
		"\u018F\x03\x02\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192\u0190\x03\x02" +
		"\x02\x02\u0192\u0193\x03\x02\x02\x02\u0193?\x03\x02\x02\x02\u0194\u019A" +
		"\x05B\"\x02\u0195\u019A\x05D#\x02\u0196\u019A\x05J&\x02\u0197\u019A\x05" +
		"N(\x02\u0198\u019A\x05P)\x02\u0199\u0194\x03\x02\x02\x02\u0199\u0195\x03" +
		"\x02\x02\x02\u0199\u0196\x03\x02\x02\x02\u0199\u0197\x03\x02\x02\x02\u0199" +
		"\u0198\x03\x02\x02\x02\u019AA\x03\x02\x02\x02\u019B\u01A2\x07\x1A\x02" +
		"\x02\u019C\u019E\x07\x05\x02\x02\u019D\u019F\x07/\x02\x02\u019E\u019D" +
		"\x03\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02\u01A0\u019E\x03\x02\x02\x02" +
		"\u01A0\u01A1\x03\x02\x02\x02\u01A1\u01A3\x03\x02\x02\x02\u01A2\u019C\x03" +
		"\x02\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3\u01A9\x03\x02\x02\x02\u01A4" +
		"\u01A8\x05F$\x02\u01A5\u01A8\x05T+\x02\u01A6\u01A8\x05H%\x02\u01A7\u01A4" +
		"\x03\x02\x02\x02\u01A7\u01A5\x03\x02\x02\x02\u01A7\u01A6\x03\x02\x02\x02" +
		"\u01A8\u01AB\x03\x02\x02\x02\u01A9\u01A7\x03\x02\x02\x02\u01A9\u01AA\x03" +
		"\x02\x02\x02\u01AA\u01AC\x03\x02\x02\x02\u01AB\u01A9\x03\x02\x02\x02\u01AC" +
		"\u01AD\x05\\/\x02\u01ADC\x03\x02\x02\x02\u01AE\u01B4\x07\x1B\x02\x02\u01AF" +
		"\u01B3\x05F$\x02\u01B0\u01B3\x05T+\x02\u01B1\u01B3\x05H%\x02\u01B2\u01AF" +
		"\x03\x02\x02\x02\u01B2\u01B0\x03\x02\x02\x02\u01B2\u01B1\x03\x02\x02\x02" +
		"\u01B3\u01B6\x03\x02\x02\x02\u01B4\u01B2\x03\x02\x02\x02\u01B4\u01B5\x03" +
		"\x02\x02\x02\u01B5\u01B7\x03\x02\x02\x02\u01B6\u01B4\x03\x02\x02\x02\u01B7" +
		"\u01B8\x05\\/\x02\u01B8E\x03\x02\x02\x02\u01B9\u01BA\x07/\x02\x02\u01BA" +
		"\u01BC\x07\x05\x02\x02\u01BB\u01BD\x05^0\x02\u01BC\u01BB\x03\x02\x02\x02" +
		"\u01BD\u01BE\x03\x02\x02\x02\u01BE\u01BC\x03\x02\x02\x02\u01BE\u01BF\x03" +
		"\x02\x02\x02\u01BFG\x03\x02\x02\x02\u01C0\u01C1\x07\x1C\x02\x02\u01C1" +
		"\u01C2\x07\x05\x02\x02\u01C2\u01C3\x07/\x02\x02\u01C3I\x03\x02\x02\x02" +
		"\u01C4\u01C5\x07\x1D\x02\x02\u01C5\u01C6\x07\x05\x02\x02\u01C6\u01C8\x07" +
		"/\x02\x02\u01C7\u01C9\x07/\x02\x02\u01C8\u01C7\x03\x02\x02\x02\u01C9\u01CA" +
		"\x03\x02\x02\x02\u01CA\u01C8\x03\x02\x02\x02\u01CA\u01CB\x03\x02\x02\x02" +
		"\u01CB\u01CF\x03\x02\x02\x02\u01CC\u01CE\x05L\'\x02\u01CD\u01CC\x03\x02" +
		"\x02\x02\u01CE\u01D1\x03\x02\x02\x02\u01CF\u01CD\x03\x02\x02\x02\u01CF" +
		"\u01D0\x03\x02\x02\x02\u01D0\u01D2\x03\x02\x02\x02\u01D1\u01CF\x03\x02" +
		"\x02\x02\u01D2\u01D3\x05\\/\x02\u01D3K\x03\x02\x02\x02\u01D4\u01D5\x07" +
		"/\x02\x02\u01D5\u01D7\x07\x05\x02\x02\u01D6\u01D8\x05^0\x02\u01D7\u01D6" +
		"\x03\x02\x02\x02\u01D8\u01D9\x03\x02\x02\x02\u01D9\u01D7\x03\x02\x02\x02" +
		"\u01D9\u01DA\x03\x02\x02\x02\u01DAM\x03\x02\x02\x02\u01DB\u01DC\x07\x1E" +
		"\x02\x02\u01DC\u01DE\x07\x05\x02\x02\u01DD\u01DF\x07/\x02\x02\u01DE\u01DD" +
		"\x03\x02\x02\x02\u01DF\u01E0\x03\x02\x02\x02\u01E0\u01DE\x03\x02\x02\x02" +
		"\u01E0\u01E1\x03\x02\x02\x02\u01E1O\x03\x02\x02\x02\u01E2\u01E3\x07\x1F" +
		"\x02\x02\u01E3\u01E5\x07\x05\x02\x02\u01E4\u01E6\x07/\x02\x02\u01E5\u01E4" +
		"\x03\x02\x02\x02\u01E6\u01E7\x03\x02\x02\x02\u01E7\u01E5\x03\x02\x02\x02" +
		"\u01E7\u01E8\x03\x02\x02\x02\u01E8Q\x03\x02\x02\x02\u01E9\u01EA\x07 \x02" +
		"\x02\u01EA\u01EB\x07/\x02\x02\u01EBS\x03\x02\x02\x02\u01EC\u01EF\x05X" +
		"-\x02\u01ED\u01EF\x05Z.\x02\u01EE\u01EC\x03\x02\x02\x02\u01EE\u01ED\x03" +
		"\x02\x02\x02\u01EFU\x03\x02\x02\x02\u01F0\u01F8\x07/\x02\x02\u01F1\u01F9" +
		"\x07\x05\x02\x02\u01F2\u01F4\x072\x02\x02\u01F3\u01F2\x03\x02\x02\x02" +
		"\u01F4\u01F7\x03\x02\x02\x02\u01F5\u01F3\x03\x02\x02\x02\u01F5\u01F6\x03" +
		"\x02\x02\x02\u01F6\u01F9\x03\x02\x02\x02\u01F7\u01F5\x03\x02\x02\x02\u01F8" +
		"\u01F1\x03\x02\x02\x02\u01F8\u01F5\x03\x02\x02\x02\u01F9\u01FB\x03\x02" +
		"\x02\x02\u01FA\u01FC\x05^0\x02\u01FB\u01FA\x03\x02\x02\x02\u01FC\u01FD" +
		"\x03\x02\x02\x02\u01FD\u01FB\x03\x02\x02\x02\u01FD\u01FE\x03\x02\x02\x02" +
		"\u01FEW\x03\x02\x02\x02\u01FF\u0200\t\x05\x02\x02\u0200\u0202\x07\x05" +
		"\x02\x02\u0201\u0203\x05^0\x02\u0202\u0201\x03\x02\x02\x02\u0203\u0204" +
		"\x03\x02\x02\x02\u0204\u0202\x03\x02\x02\x02\u0204\u0205\x03\x02\x02\x02" +
		"\u0205Y\x03\x02\x02\x02\u0206\u0207\t\x06\x02\x02\u0207\u0209\x07\x05" +
		"\x02\x02\u0208\u020A\x05^0\x02\u0209\u0208\x03\x02\x02\x02\u020A\u020B" +
		"\x03\x02\x02\x02\u020B\u0209\x03\x02\x02\x02\u020B\u020C\x03\x02\x02\x02" +
		"\u020C[\x03\x02\x02\x02\u020D\u020E\t\x07\x02\x02\u020E]\x03\x02\x02\x02" +
		"\u020F\u0219\x05j6\x02\u0210\u0219\x05`1\x02\u0211\u0219\x05d3\x02\u0212" +
		"\u0219\x07/\x02\x02\u0213\u0219\x07+\x02\x02\u0214\u0219\x07-\x02\x02" +
		"\u0215\u0219\x07.\x02\x02\u0216\u0219\t\x05\x02\x02\u0217\u0219\t\x06" +
		"\x02\x02\u0218\u020F\x03\x02\x02\x02\u0218\u0210\x03\x02\x02\x02\u0218" +
		"\u0211\x03\x02\x02\x02\u0218\u0212\x03\x02\x02\x02\u0218\u0213\x03\x02" +
		"\x02\x02\u0218\u0214\x03\x02\x02\x02\u0218\u0215\x03\x02\x02\x02\u0218" +
		"\u0216\x03\x02\x02\x02\u0218\u0217\x03\x02\x02\x02\u0219_\x03\x02\x02" +
		"\x02\u021A\u021B\x07/\x02\x02\u021B\u021C\x07(\x02\x02\u021C\u021D\x07" +
		"/\x02\x02\u021Da\x03\x02\x02\x02\u021E\u021F\x07,\x02\x02\u021F\u0220" +
		"\x07,\x02\x02\u0220\u0221\x07,\x02\x02\u0221\u0222\x07,\x02\x02\u0222" +
		"c\x03\x02\x02\x02\u0223\u0224\t\b\x02\x02\u0224\u0225\x07)\x02\x02\u0225" +
		"e\x03\x02\x02\x02\u0226\u0227\x07+\x02\x02\u0227\u0228\x07+\x02\x02\u0228" +
		"g\x03\x02\x02\x02\u0229\u022A\x07-\x02\x02\u022A\u022B\x07-\x02\x02\u022B" +
		"i\x03\x02\x02\x02\u022C\u0230\x07*\x02\x02\u022D\u022F\n\t\x02\x02\u022E" +
		"\u022D\x03\x02\x02\x02\u022F\u0232\x03\x02\x02\x02\u0230\u022E\x03\x02" +
		"\x02\x02\u0230\u0231\x03\x02\x02\x02\u0231\u0233\x03\x02\x02\x02\u0232" +
		"\u0230\x03\x02\x02\x02\u0233\u0234\x07";
	private static readonly _serializedATNSegment1: string =
		"*\x02\x02\u0234k\x03\x02\x02\x02Dov~\x80\x86\x88\x8B\x94\x96\x9C\x9E\xA1" +
		"\xAA\xB0\xB6\xB8\xC2\xC9\xCF\xD1\xDB\xE2\xE9\xEE\xF0\xFA\u0101\u0107\u0111" +
		"\u0117\u0121\u0127\u0131\u0137\u0141\u014A\u0157\u0159\u0162\u016B\u0177" +
		"\u0183\u0186\u0188\u0192\u0199\u01A0\u01A2\u01A7\u01A9\u01B2\u01B4\u01BE" +
		"\u01CA\u01CF\u01D9\u01E0\u01E7\u01EE\u01F5\u01F8\u01FD\u0204\u020B\u0218" +
		"\u0230";
	public static readonly _serializedATN: string = Utils.join(
		[
			MapIniParser._serializedATNSegment0,
			MapIniParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MapIniParser.__ATN) {
			MapIniParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MapIniParser._serializedATN));
		}

		return MapIniParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(MapIniParser.EOF, 0); }
	public classes(): ClassesContext[];
	public classes(i: number): ClassesContext;
	public classes(i?: number): ClassesContext | ClassesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassesContext);
		} else {
			return this.getRuleContext(i, ClassesContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_program; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassesContext extends ParserRuleContext {
	public object(): ObjectContext | undefined {
		return this.tryGetRuleContext(0, ObjectContext);
	}
	public objectReskin(): ObjectReskinContext | undefined {
		return this.tryGetRuleContext(0, ObjectReskinContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_classes; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterClasses) {
			listener.enterClasses(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitClasses) {
			listener.exitClasses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitClasses) {
			return visitor.visitClasses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectReskinContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapIniParser.ID);
		} else {
			return this.getToken(MapIniParser.ID, i);
		}
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public modules(): ModulesContext[];
	public modules(i: number): ModulesContext;
	public modules(i?: number): ModulesContext | ModulesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModulesContext);
		} else {
			return this.getRuleContext(i, ModulesContext);
		}
	}
	public objectProperty(): ObjectPropertyContext[];
	public objectProperty(i: number): ObjectPropertyContext;
	public objectProperty(i?: number): ObjectPropertyContext | ObjectPropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectPropertyContext);
		} else {
			return this.getRuleContext(i, ObjectPropertyContext);
		}
	}
	public objectKindOfProperty(): ObjectKindOfPropertyContext[];
	public objectKindOfProperty(i: number): ObjectKindOfPropertyContext;
	public objectKindOfProperty(i?: number): ObjectKindOfPropertyContext | ObjectKindOfPropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectKindOfPropertyContext);
		} else {
			return this.getRuleContext(i, ObjectKindOfPropertyContext);
		}
	}
	public moduleBlocks(): ModuleBlocksContext[];
	public moduleBlocks(i: number): ModuleBlocksContext;
	public moduleBlocks(i?: number): ModuleBlocksContext | ModuleBlocksContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModuleBlocksContext);
		} else {
			return this.getRuleContext(i, ModuleBlocksContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_objectReskin; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterObjectReskin) {
			listener.enterObjectReskin(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitObjectReskin) {
			listener.exitObjectReskin(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitObjectReskin) {
			return visitor.visitObjectReskin(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public modules(): ModulesContext[];
	public modules(i: number): ModulesContext;
	public modules(i?: number): ModulesContext | ModulesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModulesContext);
		} else {
			return this.getRuleContext(i, ModulesContext);
		}
	}
	public objectProperty(): ObjectPropertyContext[];
	public objectProperty(i: number): ObjectPropertyContext;
	public objectProperty(i?: number): ObjectPropertyContext | ObjectPropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectPropertyContext);
		} else {
			return this.getRuleContext(i, ObjectPropertyContext);
		}
	}
	public objectKindOfProperty(): ObjectKindOfPropertyContext[];
	public objectKindOfProperty(i: number): ObjectKindOfPropertyContext;
	public objectKindOfProperty(i?: number): ObjectKindOfPropertyContext | ObjectKindOfPropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectKindOfPropertyContext);
		} else {
			return this.getRuleContext(i, ObjectKindOfPropertyContext);
		}
	}
	public moduleBlocks(): ModuleBlocksContext[];
	public moduleBlocks(i: number): ModuleBlocksContext;
	public moduleBlocks(i?: number): ModuleBlocksContext | ModuleBlocksContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModuleBlocksContext);
		} else {
			return this.getRuleContext(i, ModuleBlocksContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_object; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterObject) {
			listener.enterObject(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitObject) {
			listener.exitObject(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitObject) {
			return visitor.visitObject(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectPropertyContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_objectProperty; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterObjectProperty) {
			listener.enterObjectProperty(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitObjectProperty) {
			listener.exitObjectProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitObjectProperty) {
			return visitor.visitObjectProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleBlocksContext extends ParserRuleContext {
	public addModuleBlock(): AddModuleBlockContext | undefined {
		return this.tryGetRuleContext(0, AddModuleBlockContext);
	}
	public replaceModuleBlock(): ReplaceModuleBlockContext | undefined {
		return this.tryGetRuleContext(0, ReplaceModuleBlockContext);
	}
	public removeModuleBlock(): RemoveModuleBlockContext | undefined {
		return this.tryGetRuleContext(0, RemoveModuleBlockContext);
	}
	public objectBlocks(): ObjectBlocksContext | undefined {
		return this.tryGetRuleContext(0, ObjectBlocksContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_moduleBlocks; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterModuleBlocks) {
			listener.enterModuleBlocks(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitModuleBlocks) {
			listener.exitModuleBlocks(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitModuleBlocks) {
			return visitor.visitModuleBlocks(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddModuleBlockContext extends ParserRuleContext {
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public modules(): ModulesContext[];
	public modules(i: number): ModulesContext;
	public modules(i?: number): ModulesContext | ModulesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModulesContext);
		} else {
			return this.getRuleContext(i, ModulesContext);
		}
	}
	public addModuleProperty(): AddModulePropertyContext[];
	public addModuleProperty(i: number): AddModulePropertyContext;
	public addModuleProperty(i?: number): AddModulePropertyContext | AddModulePropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AddModulePropertyContext);
		} else {
			return this.getRuleContext(i, AddModulePropertyContext);
		}
	}
	public objectKindOfProperty(): ObjectKindOfPropertyContext[];
	public objectKindOfProperty(i: number): ObjectKindOfPropertyContext;
	public objectKindOfProperty(i?: number): ObjectKindOfPropertyContext | ObjectKindOfPropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectKindOfPropertyContext);
		} else {
			return this.getRuleContext(i, ObjectKindOfPropertyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_addModuleBlock; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterAddModuleBlock) {
			listener.enterAddModuleBlock(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitAddModuleBlock) {
			listener.exitAddModuleBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitAddModuleBlock) {
			return visitor.visitAddModuleBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddModulePropertyContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_addModuleProperty; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterAddModuleProperty) {
			listener.enterAddModuleProperty(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitAddModuleProperty) {
			listener.exitAddModuleProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitAddModuleProperty) {
			return visitor.visitAddModuleProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectKindOfPropertyContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapIniParser.ID);
		} else {
			return this.getToken(MapIniParser.ID, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_objectKindOfProperty; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterObjectKindOfProperty) {
			listener.enterObjectKindOfProperty(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitObjectKindOfProperty) {
			listener.exitObjectKindOfProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitObjectKindOfProperty) {
			return visitor.visitObjectKindOfProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReplaceModuleBlockContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public modules(): ModulesContext[];
	public modules(i: number): ModulesContext;
	public modules(i?: number): ModulesContext | ModulesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModulesContext);
		} else {
			return this.getRuleContext(i, ModulesContext);
		}
	}
	public replaceModuleProperty(): ReplaceModulePropertyContext[];
	public replaceModuleProperty(i: number): ReplaceModulePropertyContext;
	public replaceModuleProperty(i?: number): ReplaceModulePropertyContext | ReplaceModulePropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ReplaceModulePropertyContext);
		} else {
			return this.getRuleContext(i, ReplaceModulePropertyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_replaceModuleBlock; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterReplaceModuleBlock) {
			listener.enterReplaceModuleBlock(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitReplaceModuleBlock) {
			listener.exitReplaceModuleBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitReplaceModuleBlock) {
			return visitor.visitReplaceModuleBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReplaceModulePropertyContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_replaceModuleProperty; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterReplaceModuleProperty) {
			listener.enterReplaceModuleProperty(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitReplaceModuleProperty) {
			listener.exitReplaceModuleProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitReplaceModuleProperty) {
			return visitor.visitReplaceModuleProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModulesContext extends ParserRuleContext {
	public drawModuleBlock(): DrawModuleBlockContext | undefined {
		return this.tryGetRuleContext(0, DrawModuleBlockContext);
	}
	public bodyModuleBlock(): BodyModuleBlockContext | undefined {
		return this.tryGetRuleContext(0, BodyModuleBlockContext);
	}
	public behaviormoduleBlock(): BehaviormoduleBlockContext | undefined {
		return this.tryGetRuleContext(0, BehaviormoduleBlockContext);
	}
	public clientModuleBlock(): ClientModuleBlockContext | undefined {
		return this.tryGetRuleContext(0, ClientModuleBlockContext);
	}
	public objectBlocks(): ObjectBlocksContext | undefined {
		return this.tryGetRuleContext(0, ObjectBlocksContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_modules; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterModules) {
			listener.enterModules(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitModules) {
			listener.exitModules(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitModules) {
			return visitor.visitModules(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectBlocksContext extends ParserRuleContext {
	public objectPrerequisites(): ObjectPrerequisitesContext | undefined {
		return this.tryGetRuleContext(0, ObjectPrerequisitesContext);
	}
	public objectWeaponSet(): ObjectWeaponSetContext | undefined {
		return this.tryGetRuleContext(0, ObjectWeaponSetContext);
	}
	public objectArmorSet(): ObjectArmorSetContext | undefined {
		return this.tryGetRuleContext(0, ObjectArmorSetContext);
	}
	public objectUnitSpecificSounds(): ObjectUnitSpecificSoundsContext | undefined {
		return this.tryGetRuleContext(0, ObjectUnitSpecificSoundsContext);
	}
	public objectUnitSpecificFX(): ObjectUnitSpecificFXContext | undefined {
		return this.tryGetRuleContext(0, ObjectUnitSpecificFXContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_objectBlocks; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterObjectBlocks) {
			listener.enterObjectBlocks(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitObjectBlocks) {
			listener.exitObjectBlocks(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitObjectBlocks) {
			return visitor.visitObjectBlocks(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectPrerequisitesContext extends ParserRuleContext {
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public objectPrerequisitesobjectProperty(): ObjectPrerequisitesobjectPropertyContext[];
	public objectPrerequisitesobjectProperty(i: number): ObjectPrerequisitesobjectPropertyContext;
	public objectPrerequisitesobjectProperty(i?: number): ObjectPrerequisitesobjectPropertyContext | ObjectPrerequisitesobjectPropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectPrerequisitesobjectPropertyContext);
		} else {
			return this.getRuleContext(i, ObjectPrerequisitesobjectPropertyContext);
		}
	}
	public objectPrerequisitessciencePropety(): ObjectPrerequisitessciencePropetyContext[];
	public objectPrerequisitessciencePropety(i: number): ObjectPrerequisitessciencePropetyContext;
	public objectPrerequisitessciencePropety(i?: number): ObjectPrerequisitessciencePropetyContext | ObjectPrerequisitessciencePropetyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectPrerequisitessciencePropetyContext);
		} else {
			return this.getRuleContext(i, ObjectPrerequisitessciencePropetyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_objectPrerequisites; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterObjectPrerequisites) {
			listener.enterObjectPrerequisites(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitObjectPrerequisites) {
			listener.exitObjectPrerequisites(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitObjectPrerequisites) {
			return visitor.visitObjectPrerequisites(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectPrerequisitesobjectPropertyContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapIniParser.ID);
		} else {
			return this.getToken(MapIniParser.ID, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_objectPrerequisitesobjectProperty; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterObjectPrerequisitesobjectProperty) {
			listener.enterObjectPrerequisitesobjectProperty(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitObjectPrerequisitesobjectProperty) {
			listener.exitObjectPrerequisitesobjectProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitObjectPrerequisitesobjectProperty) {
			return visitor.visitObjectPrerequisitesobjectProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectPrerequisitessciencePropetyContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapIniParser.ID);
		} else {
			return this.getToken(MapIniParser.ID, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_objectPrerequisitessciencePropety; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterObjectPrerequisitessciencePropety) {
			listener.enterObjectPrerequisitessciencePropety(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitObjectPrerequisitessciencePropety) {
			listener.exitObjectPrerequisitessciencePropety(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitObjectPrerequisitessciencePropety) {
			return visitor.visitObjectPrerequisitessciencePropety(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectWeaponSetContext extends ParserRuleContext {
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public objectWeaponSetPropety(): ObjectWeaponSetPropetyContext[];
	public objectWeaponSetPropety(i: number): ObjectWeaponSetPropetyContext;
	public objectWeaponSetPropety(i?: number): ObjectWeaponSetPropetyContext | ObjectWeaponSetPropetyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectWeaponSetPropetyContext);
		} else {
			return this.getRuleContext(i, ObjectWeaponSetPropetyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_objectWeaponSet; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterObjectWeaponSet) {
			listener.enterObjectWeaponSet(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitObjectWeaponSet) {
			listener.exitObjectWeaponSet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitObjectWeaponSet) {
			return visitor.visitObjectWeaponSet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectWeaponSetPropetyContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_objectWeaponSetPropety; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterObjectWeaponSetPropety) {
			listener.enterObjectWeaponSetPropety(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitObjectWeaponSetPropety) {
			listener.exitObjectWeaponSetPropety(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitObjectWeaponSetPropety) {
			return visitor.visitObjectWeaponSetPropety(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectArmorSetContext extends ParserRuleContext {
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public objectArmorSetPropety(): ObjectArmorSetPropetyContext[];
	public objectArmorSetPropety(i: number): ObjectArmorSetPropetyContext;
	public objectArmorSetPropety(i?: number): ObjectArmorSetPropetyContext | ObjectArmorSetPropetyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectArmorSetPropetyContext);
		} else {
			return this.getRuleContext(i, ObjectArmorSetPropetyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_objectArmorSet; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterObjectArmorSet) {
			listener.enterObjectArmorSet(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitObjectArmorSet) {
			listener.exitObjectArmorSet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitObjectArmorSet) {
			return visitor.visitObjectArmorSet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectArmorSetPropetyContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_objectArmorSetPropety; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterObjectArmorSetPropety) {
			listener.enterObjectArmorSetPropety(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitObjectArmorSetPropety) {
			listener.exitObjectArmorSetPropety(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitObjectArmorSetPropety) {
			return visitor.visitObjectArmorSetPropety(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectUnitSpecificSoundsContext extends ParserRuleContext {
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public objectUnitSpecificSoundsPropety(): ObjectUnitSpecificSoundsPropetyContext[];
	public objectUnitSpecificSoundsPropety(i: number): ObjectUnitSpecificSoundsPropetyContext;
	public objectUnitSpecificSoundsPropety(i?: number): ObjectUnitSpecificSoundsPropetyContext | ObjectUnitSpecificSoundsPropetyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectUnitSpecificSoundsPropetyContext);
		} else {
			return this.getRuleContext(i, ObjectUnitSpecificSoundsPropetyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_objectUnitSpecificSounds; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterObjectUnitSpecificSounds) {
			listener.enterObjectUnitSpecificSounds(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitObjectUnitSpecificSounds) {
			listener.exitObjectUnitSpecificSounds(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitObjectUnitSpecificSounds) {
			return visitor.visitObjectUnitSpecificSounds(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectUnitSpecificSoundsPropetyContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_objectUnitSpecificSoundsPropety; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterObjectUnitSpecificSoundsPropety) {
			listener.enterObjectUnitSpecificSoundsPropety(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitObjectUnitSpecificSoundsPropety) {
			listener.exitObjectUnitSpecificSoundsPropety(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitObjectUnitSpecificSoundsPropety) {
			return visitor.visitObjectUnitSpecificSoundsPropety(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectUnitSpecificFXContext extends ParserRuleContext {
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public objectUnitSpecificFXPropety(): ObjectUnitSpecificFXPropetyContext[];
	public objectUnitSpecificFXPropety(i: number): ObjectUnitSpecificFXPropetyContext;
	public objectUnitSpecificFXPropety(i?: number): ObjectUnitSpecificFXPropetyContext | ObjectUnitSpecificFXPropetyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectUnitSpecificFXPropetyContext);
		} else {
			return this.getRuleContext(i, ObjectUnitSpecificFXPropetyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_objectUnitSpecificFX; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterObjectUnitSpecificFX) {
			listener.enterObjectUnitSpecificFX(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitObjectUnitSpecificFX) {
			listener.exitObjectUnitSpecificFX(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitObjectUnitSpecificFX) {
			return visitor.visitObjectUnitSpecificFX(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectUnitSpecificFXPropetyContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_objectUnitSpecificFXPropety; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterObjectUnitSpecificFXPropety) {
			listener.enterObjectUnitSpecificFXPropety(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitObjectUnitSpecificFXPropety) {
			listener.exitObjectUnitSpecificFXPropety(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitObjectUnitSpecificFXPropety) {
			return visitor.visitObjectUnitSpecificFXPropety(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClientModuleBlockContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapIniParser.ID);
		} else {
			return this.getToken(MapIniParser.ID, i);
		}
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public property(): PropertyContext[];
	public property(i: number): PropertyContext;
	public property(i?: number): PropertyContext | PropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropertyContext);
		} else {
			return this.getRuleContext(i, PropertyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_clientModuleBlock; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterClientModuleBlock) {
			listener.enterClientModuleBlock(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitClientModuleBlock) {
			listener.exitClientModuleBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitClientModuleBlock) {
			return visitor.visitClientModuleBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BehaviormoduleBlockContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapIniParser.ID);
		} else {
			return this.getToken(MapIniParser.ID, i);
		}
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public property(): PropertyContext[];
	public property(i: number): PropertyContext;
	public property(i?: number): PropertyContext | PropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropertyContext);
		} else {
			return this.getRuleContext(i, PropertyContext);
		}
	}
	public behaviorTurret(): BehaviorTurretContext[];
	public behaviorTurret(i: number): BehaviorTurretContext;
	public behaviorTurret(i?: number): BehaviorTurretContext | BehaviorTurretContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BehaviorTurretContext);
		} else {
			return this.getRuleContext(i, BehaviorTurretContext);
		}
	}
	public objectKindOfProperty(): ObjectKindOfPropertyContext[];
	public objectKindOfProperty(i: number): ObjectKindOfPropertyContext;
	public objectKindOfProperty(i?: number): ObjectKindOfPropertyContext | ObjectKindOfPropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectKindOfPropertyContext);
		} else {
			return this.getRuleContext(i, ObjectKindOfPropertyContext);
		}
	}
	public behaviorDecals(): BehaviorDecalsContext[];
	public behaviorDecals(i: number): BehaviorDecalsContext;
	public behaviorDecals(i?: number): BehaviorDecalsContext | BehaviorDecalsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BehaviorDecalsContext);
		} else {
			return this.getRuleContext(i, BehaviorDecalsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_behaviormoduleBlock; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterBehaviormoduleBlock) {
			listener.enterBehaviormoduleBlock(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitBehaviormoduleBlock) {
			listener.exitBehaviormoduleBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitBehaviormoduleBlock) {
			return visitor.visitBehaviormoduleBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BehaviorDecalsContext extends ParserRuleContext {
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public property(): PropertyContext[];
	public property(i: number): PropertyContext;
	public property(i?: number): PropertyContext | PropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropertyContext);
		} else {
			return this.getRuleContext(i, PropertyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_behaviorDecals; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterBehaviorDecals) {
			listener.enterBehaviorDecals(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitBehaviorDecals) {
			listener.exitBehaviorDecals(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitBehaviorDecals) {
			return visitor.visitBehaviorDecals(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BehaviorTurretContext extends ParserRuleContext {
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public property(): PropertyContext[];
	public property(i: number): PropertyContext;
	public property(i?: number): PropertyContext | PropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropertyContext);
		} else {
			return this.getRuleContext(i, PropertyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_behaviorTurret; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterBehaviorTurret) {
			listener.enterBehaviorTurret(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitBehaviorTurret) {
			listener.exitBehaviorTurret(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitBehaviorTurret) {
			return visitor.visitBehaviorTurret(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BodyModuleBlockContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapIniParser.ID);
		} else {
			return this.getToken(MapIniParser.ID, i);
		}
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public property(): PropertyContext[];
	public property(i: number): PropertyContext;
	public property(i?: number): PropertyContext | PropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropertyContext);
		} else {
			return this.getRuleContext(i, PropertyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_bodyModuleBlock; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterBodyModuleBlock) {
			listener.enterBodyModuleBlock(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitBodyModuleBlock) {
			listener.exitBodyModuleBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitBodyModuleBlock) {
			return visitor.visitBodyModuleBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DrawModuleBlockContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapIniParser.ID);
		} else {
			return this.getToken(MapIniParser.ID, i);
		}
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public drawModuleProperty(): DrawModulePropertyContext[];
	public drawModuleProperty(i: number): DrawModulePropertyContext;
	public drawModuleProperty(i?: number): DrawModulePropertyContext | DrawModulePropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DrawModulePropertyContext);
		} else {
			return this.getRuleContext(i, DrawModulePropertyContext);
		}
	}
	public conditionStateBlocks(): ConditionStateBlocksContext[];
	public conditionStateBlocks(i: number): ConditionStateBlocksContext;
	public conditionStateBlocks(i?: number): ConditionStateBlocksContext | ConditionStateBlocksContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionStateBlocksContext);
		} else {
			return this.getRuleContext(i, ConditionStateBlocksContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_drawModuleBlock; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterDrawModuleBlock) {
			listener.enterDrawModuleBlock(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitDrawModuleBlock) {
			listener.exitDrawModuleBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitDrawModuleBlock) {
			return visitor.visitDrawModuleBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DrawModulePropertyContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_drawModuleProperty; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterDrawModuleProperty) {
			listener.enterDrawModuleProperty(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitDrawModuleProperty) {
			listener.exitDrawModuleProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitDrawModuleProperty) {
			return visitor.visitDrawModuleProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionStateBlocksContext extends ParserRuleContext {
	public conditionStateBlock(): ConditionStateBlockContext | undefined {
		return this.tryGetRuleContext(0, ConditionStateBlockContext);
	}
	public defaultConditionStateBlock(): DefaultConditionStateBlockContext | undefined {
		return this.tryGetRuleContext(0, DefaultConditionStateBlockContext);
	}
	public transitionStateBlock(): TransitionStateBlockContext | undefined {
		return this.tryGetRuleContext(0, TransitionStateBlockContext);
	}
	public aliasConditionStateBlock(): AliasConditionStateBlockContext | undefined {
		return this.tryGetRuleContext(0, AliasConditionStateBlockContext);
	}
	public ignoreConditionStateBlock(): IgnoreConditionStateBlockContext | undefined {
		return this.tryGetRuleContext(0, IgnoreConditionStateBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_conditionStateBlocks; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterConditionStateBlocks) {
			listener.enterConditionStateBlocks(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitConditionStateBlocks) {
			listener.exitConditionStateBlocks(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitConditionStateBlocks) {
			return visitor.visitConditionStateBlocks(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionStateBlockContext extends ParserRuleContext {
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public conditionStateProperty(): ConditionStatePropertyContext[];
	public conditionStateProperty(i: number): ConditionStatePropertyContext;
	public conditionStateProperty(i?: number): ConditionStatePropertyContext | ConditionStatePropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionStatePropertyContext);
		} else {
			return this.getRuleContext(i, ConditionStatePropertyContext);
		}
	}
	public turretProperty(): TurretPropertyContext[];
	public turretProperty(i: number): TurretPropertyContext;
	public turretProperty(i?: number): TurretPropertyContext | TurretPropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TurretPropertyContext);
		} else {
			return this.getRuleContext(i, TurretPropertyContext);
		}
	}
	public transitionKeyProperty(): TransitionKeyPropertyContext[];
	public transitionKeyProperty(i: number): TransitionKeyPropertyContext;
	public transitionKeyProperty(i?: number): TransitionKeyPropertyContext | TransitionKeyPropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TransitionKeyPropertyContext);
		} else {
			return this.getRuleContext(i, TransitionKeyPropertyContext);
		}
	}
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapIniParser.ID);
		} else {
			return this.getToken(MapIniParser.ID, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_conditionStateBlock; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterConditionStateBlock) {
			listener.enterConditionStateBlock(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitConditionStateBlock) {
			listener.exitConditionStateBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitConditionStateBlock) {
			return visitor.visitConditionStateBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefaultConditionStateBlockContext extends ParserRuleContext {
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public conditionStateProperty(): ConditionStatePropertyContext[];
	public conditionStateProperty(i: number): ConditionStatePropertyContext;
	public conditionStateProperty(i?: number): ConditionStatePropertyContext | ConditionStatePropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionStatePropertyContext);
		} else {
			return this.getRuleContext(i, ConditionStatePropertyContext);
		}
	}
	public turretProperty(): TurretPropertyContext[];
	public turretProperty(i: number): TurretPropertyContext;
	public turretProperty(i?: number): TurretPropertyContext | TurretPropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TurretPropertyContext);
		} else {
			return this.getRuleContext(i, TurretPropertyContext);
		}
	}
	public transitionKeyProperty(): TransitionKeyPropertyContext[];
	public transitionKeyProperty(i: number): TransitionKeyPropertyContext;
	public transitionKeyProperty(i?: number): TransitionKeyPropertyContext | TransitionKeyPropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TransitionKeyPropertyContext);
		} else {
			return this.getRuleContext(i, TransitionKeyPropertyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_defaultConditionStateBlock; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterDefaultConditionStateBlock) {
			listener.enterDefaultConditionStateBlock(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitDefaultConditionStateBlock) {
			listener.exitDefaultConditionStateBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitDefaultConditionStateBlock) {
			return visitor.visitDefaultConditionStateBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionStatePropertyContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_conditionStateProperty; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterConditionStateProperty) {
			listener.enterConditionStateProperty(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitConditionStateProperty) {
			listener.exitConditionStateProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitConditionStateProperty) {
			return visitor.visitConditionStateProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TransitionKeyPropertyContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_transitionKeyProperty; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterTransitionKeyProperty) {
			listener.enterTransitionKeyProperty(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitTransitionKeyProperty) {
			listener.exitTransitionKeyProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitTransitionKeyProperty) {
			return visitor.visitTransitionKeyProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TransitionStateBlockContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapIniParser.ID);
		} else {
			return this.getToken(MapIniParser.ID, i);
		}
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public transitionStateProperty(): TransitionStatePropertyContext[];
	public transitionStateProperty(i: number): TransitionStatePropertyContext;
	public transitionStateProperty(i?: number): TransitionStatePropertyContext | TransitionStatePropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TransitionStatePropertyContext);
		} else {
			return this.getRuleContext(i, TransitionStatePropertyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_transitionStateBlock; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterTransitionStateBlock) {
			listener.enterTransitionStateBlock(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitTransitionStateBlock) {
			listener.exitTransitionStateBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitTransitionStateBlock) {
			return visitor.visitTransitionStateBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TransitionStatePropertyContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_transitionStateProperty; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterTransitionStateProperty) {
			listener.enterTransitionStateProperty(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitTransitionStateProperty) {
			listener.exitTransitionStateProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitTransitionStateProperty) {
			return visitor.visitTransitionStateProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AliasConditionStateBlockContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapIniParser.ID);
		} else {
			return this.getToken(MapIniParser.ID, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_aliasConditionStateBlock; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterAliasConditionStateBlock) {
			listener.enterAliasConditionStateBlock(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitAliasConditionStateBlock) {
			listener.exitAliasConditionStateBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitAliasConditionStateBlock) {
			return visitor.visitAliasConditionStateBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IgnoreConditionStateBlockContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapIniParser.ID);
		} else {
			return this.getToken(MapIniParser.ID, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_ignoreConditionStateBlock; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterIgnoreConditionStateBlock) {
			listener.enterIgnoreConditionStateBlock(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitIgnoreConditionStateBlock) {
			listener.exitIgnoreConditionStateBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitIgnoreConditionStateBlock) {
			return visitor.visitIgnoreConditionStateBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RemoveModuleBlockContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_removeModuleBlock; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterRemoveModuleBlock) {
			listener.enterRemoveModuleBlock(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitRemoveModuleBlock) {
			listener.exitRemoveModuleBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitRemoveModuleBlock) {
			return visitor.visitRemoveModuleBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TurretPropertyContext extends ParserRuleContext {
	public tturretProperty(): TturretPropertyContext | undefined {
		return this.tryGetRuleContext(0, TturretPropertyContext);
	}
	public altTurretProperty(): AltTurretPropertyContext | undefined {
		return this.tryGetRuleContext(0, AltTurretPropertyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_turretProperty; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterTurretProperty) {
			listener.enterTurretProperty(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitTurretProperty) {
			listener.exitTurretProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitTurretProperty) {
			return visitor.visitTurretProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapIniParser.WS);
		} else {
			return this.getToken(MapIniParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterProperty) {
			listener.enterProperty(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitProperty) {
			listener.exitProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitProperty) {
			return visitor.visitProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TturretPropertyContext extends ParserRuleContext {
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_tturretProperty; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterTturretProperty) {
			listener.enterTturretProperty(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitTturretProperty) {
			listener.exitTturretProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitTturretProperty) {
			return visitor.visitTturretProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AltTurretPropertyContext extends ParserRuleContext {
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_altTurretProperty; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterAltTurretProperty) {
			listener.enterAltTurretProperty(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitAltTurretProperty) {
			listener.exitAltTurretProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitAltTurretProperty) {
			return visitor.visitAltTurretProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EndContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_end; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterEnd) {
			listener.enterEnd(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitEnd) {
			listener.exitEnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitEnd) {
			return visitor.visitEnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_value; }
	public copyFrom(ctx: ValueContext): void {
		super.copyFrom(ctx);
	}
}
export class StringContext extends ValueContext {
	public quoutedID(): QuoutedIDContext {
		return this.getRuleContext(0, QuoutedIDContext);
	}
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FiletypeContext extends ValueContext {
	public ftype(): FtypeContext {
		return this.getRuleContext(0, FtypeContext);
	}
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFiletype) {
			listener.enterFiletype(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFiletype) {
			listener.exitFiletype(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFiletype) {
			return visitor.visitFiletype(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ProcentageContext extends ValueContext {
	public procent(): ProcentContext {
		return this.getRuleContext(0, ProcentContext);
	}
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterProcentage) {
			listener.enterProcentage(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitProcentage) {
			listener.exitProcentage(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitProcentage) {
			return visitor.visitProcentage(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdContext extends ValueContext {
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterId) {
			listener.enterId(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitId) {
			listener.exitId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitId) {
			return visitor.visitId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntContext extends ValueContext {
	public INT(): TerminalNode { return this.getToken(MapIniParser.INT, 0); }
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterInt) {
			listener.enterInt(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitInt) {
			listener.exitInt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitInt) {
			return visitor.visitInt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FloatContext extends ValueContext {
	public FLOAT(): TerminalNode { return this.getToken(MapIniParser.FLOAT, 0); }
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFloat) {
			listener.enterFloat(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFloat) {
			listener.exitFloat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFloat) {
			return visitor.visitFloat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BoolContext extends ValueContext {
	public BOOL(): TerminalNode { return this.getToken(MapIniParser.BOOL, 0); }
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterBool) {
			listener.enterBool(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitBool) {
			listener.exitBool(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitBool) {
			return visitor.visitBool(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TurretValueContext extends ValueContext {
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterTurretValue) {
			listener.enterTurretValue(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitTurretValue) {
			listener.exitTurretValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitTurretValue) {
			return visitor.visitTurretValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AltTurretValueContext extends ValueContext {
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterAltTurretValue) {
			listener.enterAltTurretValue(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitAltTurretValue) {
			listener.exitAltTurretValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitAltTurretValue) {
			return visitor.visitAltTurretValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FtypeContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapIniParser.ID);
		} else {
			return this.getToken(MapIniParser.ID, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_ftype; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFtype) {
			listener.enterFtype(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFtype) {
			listener.exitFtype(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFtype) {
			return visitor.visitFtype(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RgbContext extends ParserRuleContext {
	public INT256(): TerminalNode[];
	public INT256(i: number): TerminalNode;
	public INT256(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapIniParser.INT256);
		} else {
			return this.getToken(MapIniParser.INT256, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_rgb; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterRgb) {
			listener.enterRgb(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitRgb) {
			listener.exitRgb(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitRgb) {
			return visitor.visitRgb(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProcentContext extends ParserRuleContext {
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.FLOAT, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_procent; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterProcent) {
			listener.enterProcent(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitProcent) {
			listener.exitProcent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitProcent) {
			return visitor.visitProcent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntRangContext extends ParserRuleContext {
	public INT(): TerminalNode[];
	public INT(i: number): TerminalNode;
	public INT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapIniParser.INT);
		} else {
			return this.getToken(MapIniParser.INT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_intRang; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterIntRang) {
			listener.enterIntRang(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitIntRang) {
			listener.exitIntRang(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitIntRang) {
			return visitor.visitIntRang(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FloatRangContext extends ParserRuleContext {
	public FLOAT(): TerminalNode[];
	public FLOAT(i: number): TerminalNode;
	public FLOAT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapIniParser.FLOAT);
		} else {
			return this.getToken(MapIniParser.FLOAT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_floatRang; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFloatRang) {
			listener.enterFloatRang(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFloatRang) {
			listener.exitFloatRang(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFloatRang) {
			return visitor.visitFloatRang(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuoutedIDContext extends ParserRuleContext {
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapIniParser.WS);
		} else {
			return this.getToken(MapIniParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_quoutedID; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterQuoutedID) {
			listener.enterQuoutedID(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitQuoutedID) {
			listener.exitQuoutedID(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitQuoutedID) {
			return visitor.visitQuoutedID(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


