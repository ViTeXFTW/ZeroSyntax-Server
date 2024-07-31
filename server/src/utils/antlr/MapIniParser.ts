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
	public static readonly INT = 32;
	public static readonly INT256 = 33;
	public static readonly FLOAT = 34;
	public static readonly BOOL = 35;
	public static readonly ID = 36;
	public static readonly SKIp = 37;
	public static readonly COMMENT = 38;
	public static readonly RULE_program = 0;
	public static readonly RULE_object = 1;
	public static readonly RULE_moduleBlocks = 2;
	public static readonly RULE_addModuleBlock = 3;
	public static readonly RULE_replaceModuleBlock = 4;
	public static readonly RULE_modules = 5;
	public static readonly RULE_objectBlocks = 6;
	public static readonly RULE_objectPrerequisites = 7;
	public static readonly RULE_objectProperty = 8;
	public static readonly RULE_sciencePropety = 9;
	public static readonly RULE_objectWeaponSet = 10;
	public static readonly RULE_objectArmorSet = 11;
	public static readonly RULE_objectUnitSpecificSounds = 12;
	public static readonly RULE_objectUnitSpecificFX = 13;
	public static readonly RULE_behaviormoduleBlock = 14;
	public static readonly RULE_behaviorTurret = 15;
	public static readonly RULE_bodyModuleBlock = 16;
	public static readonly RULE_drawModuleBlock = 17;
	public static readonly RULE_conditionStateBlocks = 18;
	public static readonly RULE_conditionStateBlock = 19;
	public static readonly RULE_defaultConditionStateBlock = 20;
	public static readonly RULE_transitionStateBlock = 21;
	public static readonly RULE_aliasConditionStateBlock = 22;
	public static readonly RULE_ignoreConditionStateBlock = 23;
	public static readonly RULE_removeModuleBlock = 24;
	public static readonly RULE_property = 25;
	public static readonly RULE_genericProperty = 26;
	public static readonly RULE_turretProperty = 27;
	public static readonly RULE_altTurretProperty = 28;
	public static readonly RULE_end = 29;
	public static readonly RULE_value = 30;
	public static readonly RULE_ftype = 31;
	public static readonly RULE_rgb = 32;
	public static readonly RULE_procent = 33;
	public static readonly RULE_intRang = 34;
	public static readonly RULE_floatRang = 35;
	public static readonly RULE_quoutedID = 36;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "object", "moduleBlocks", "addModuleBlock", "replaceModuleBlock", 
		"modules", "objectBlocks", "objectPrerequisites", "objectProperty", "sciencePropety", 
		"objectWeaponSet", "objectArmorSet", "objectUnitSpecificSounds", "objectUnitSpecificFX", 
		"behaviormoduleBlock", "behaviorTurret", "bodyModuleBlock", "drawModuleBlock", 
		"conditionStateBlocks", "conditionStateBlock", "defaultConditionStateBlock", 
		"transitionStateBlock", "aliasConditionStateBlock", "ignoreConditionStateBlock", 
		"removeModuleBlock", "property", "genericProperty", "turretProperty", 
		"altTurretProperty", "end", "value", "ftype", "rgb", "procent", "intRang", 
		"floatRang", "quoutedID",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'Object'", "'AddModule'", "'ReplaceModule'", "'Prerequisites'", 
		"'='", "'Science'", "'WeaponSet'", "'ArmorSet'", "'UnitSpecificSounds'", 
		"'UnitSpecificFX'", "'Behavior'", "'Turret'", "'AltTurret'", "'Body'", 
		"'Draw'", "'ConditionState'", "'DefaultConditionState'", "'TransitionState'", 
		"'AliasConditionState'", "'IgnoreConditionStates'", "'RemoveModule'", 
		"'turret'", "'TURRET'", "'altturret'", "'ALTTURRET'", "'End'", "'end'", 
		"'END'", "'.'", "'%'", "'\"'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "INT", "INT256", "FLOAT", 
		"BOOL", "ID", "SKIp", "COMMENT",
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
			this.state = 77;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.T__0) {
				{
				{
				this.state = 74;
				this.object();
				}
				}
				this.state = 79;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 80;
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
	public object(): ObjectContext {
		let _localctx: ObjectContext = new ObjectContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, MapIniParser.RULE_object);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 82;
			this.match(MapIniParser.T__0);
			this.state = 83;
			this.match(MapIniParser.ID);
			this.state = 98;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 88;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MapIniParser.T__3) | (1 << MapIniParser.T__6) | (1 << MapIniParser.T__7) | (1 << MapIniParser.T__8) | (1 << MapIniParser.T__9) | (1 << MapIniParser.T__10) | (1 << MapIniParser.T__11) | (1 << MapIniParser.T__12) | (1 << MapIniParser.T__13) | (1 << MapIniParser.T__14) | (1 << MapIniParser.T__21) | (1 << MapIniParser.T__22) | (1 << MapIniParser.T__23) | (1 << MapIniParser.T__24))) !== 0) || _la === MapIniParser.ID) {
					{
					this.state = 86;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case MapIniParser.T__3:
					case MapIniParser.T__6:
					case MapIniParser.T__7:
					case MapIniParser.T__8:
					case MapIniParser.T__9:
					case MapIniParser.T__10:
					case MapIniParser.T__13:
					case MapIniParser.T__14:
						{
						this.state = 84;
						this.modules();
						}
						break;
					case MapIniParser.T__11:
					case MapIniParser.T__12:
					case MapIniParser.T__21:
					case MapIniParser.T__22:
					case MapIniParser.T__23:
					case MapIniParser.T__24:
					case MapIniParser.ID:
						{
						this.state = 85;
						this.property();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 90;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 2:
				{
				this.state = 95;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MapIniParser.T__1) | (1 << MapIniParser.T__2) | (1 << MapIniParser.T__11) | (1 << MapIniParser.T__12) | (1 << MapIniParser.T__20) | (1 << MapIniParser.T__21) | (1 << MapIniParser.T__22) | (1 << MapIniParser.T__23) | (1 << MapIniParser.T__24))) !== 0) || _la === MapIniParser.ID) {
					{
					this.state = 93;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case MapIniParser.T__1:
					case MapIniParser.T__2:
					case MapIniParser.T__20:
						{
						this.state = 91;
						this.moduleBlocks();
						}
						break;
					case MapIniParser.T__11:
					case MapIniParser.T__12:
					case MapIniParser.T__21:
					case MapIniParser.T__22:
					case MapIniParser.T__23:
					case MapIniParser.T__24:
					case MapIniParser.ID:
						{
						this.state = 92;
						this.property();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 97;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
			this.state = 100;
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
	public moduleBlocks(): ModuleBlocksContext {
		let _localctx: ModuleBlocksContext = new ModuleBlocksContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, MapIniParser.RULE_moduleBlocks);
		try {
			this.state = 105;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapIniParser.T__1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 102;
				this.addModuleBlock();
				}
				break;
			case MapIniParser.T__2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 103;
				this.replaceModuleBlock();
				}
				break;
			case MapIniParser.T__20:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 104;
				this.removeModuleBlock();
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
		this.enterRule(_localctx, 6, MapIniParser.RULE_addModuleBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 107;
			this.match(MapIniParser.T__1);
			this.state = 112;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MapIniParser.T__3) | (1 << MapIniParser.T__6) | (1 << MapIniParser.T__7) | (1 << MapIniParser.T__8) | (1 << MapIniParser.T__9) | (1 << MapIniParser.T__10) | (1 << MapIniParser.T__11) | (1 << MapIniParser.T__12) | (1 << MapIniParser.T__13) | (1 << MapIniParser.T__14) | (1 << MapIniParser.T__21) | (1 << MapIniParser.T__22) | (1 << MapIniParser.T__23) | (1 << MapIniParser.T__24))) !== 0) || _la === MapIniParser.ID) {
				{
				this.state = 110;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case MapIniParser.T__3:
				case MapIniParser.T__6:
				case MapIniParser.T__7:
				case MapIniParser.T__8:
				case MapIniParser.T__9:
				case MapIniParser.T__10:
				case MapIniParser.T__13:
				case MapIniParser.T__14:
					{
					this.state = 108;
					this.modules();
					}
					break;
				case MapIniParser.T__11:
				case MapIniParser.T__12:
				case MapIniParser.T__21:
				case MapIniParser.T__22:
				case MapIniParser.T__23:
				case MapIniParser.T__24:
				case MapIniParser.ID:
					{
					this.state = 109;
					this.property();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 114;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 115;
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
	public replaceModuleBlock(): ReplaceModuleBlockContext {
		let _localctx: ReplaceModuleBlockContext = new ReplaceModuleBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, MapIniParser.RULE_replaceModuleBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 117;
			this.match(MapIniParser.T__2);
			this.state = 118;
			this.match(MapIniParser.ID);
			this.state = 123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MapIniParser.T__3) | (1 << MapIniParser.T__6) | (1 << MapIniParser.T__7) | (1 << MapIniParser.T__8) | (1 << MapIniParser.T__9) | (1 << MapIniParser.T__10) | (1 << MapIniParser.T__11) | (1 << MapIniParser.T__12) | (1 << MapIniParser.T__13) | (1 << MapIniParser.T__14) | (1 << MapIniParser.T__21) | (1 << MapIniParser.T__22) | (1 << MapIniParser.T__23) | (1 << MapIniParser.T__24))) !== 0) || _la === MapIniParser.ID) {
				{
				this.state = 121;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case MapIniParser.T__3:
				case MapIniParser.T__6:
				case MapIniParser.T__7:
				case MapIniParser.T__8:
				case MapIniParser.T__9:
				case MapIniParser.T__10:
				case MapIniParser.T__13:
				case MapIniParser.T__14:
					{
					this.state = 119;
					this.modules();
					}
					break;
				case MapIniParser.T__11:
				case MapIniParser.T__12:
				case MapIniParser.T__21:
				case MapIniParser.T__22:
				case MapIniParser.T__23:
				case MapIniParser.T__24:
				case MapIniParser.ID:
					{
					this.state = 120;
					this.property();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 125;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 126;
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
	public modules(): ModulesContext {
		let _localctx: ModulesContext = new ModulesContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, MapIniParser.RULE_modules);
		try {
			this.state = 132;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapIniParser.T__14:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 128;
				this.drawModuleBlock();
				}
				break;
			case MapIniParser.T__13:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 129;
				this.bodyModuleBlock();
				}
				break;
			case MapIniParser.T__10:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 130;
				this.behaviormoduleBlock();
				}
				break;
			case MapIniParser.T__3:
			case MapIniParser.T__6:
			case MapIniParser.T__7:
			case MapIniParser.T__8:
			case MapIniParser.T__9:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 131;
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
		this.enterRule(_localctx, 12, MapIniParser.RULE_objectBlocks);
		try {
			this.state = 139;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapIniParser.T__3:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 134;
				this.objectPrerequisites();
				}
				break;
			case MapIniParser.T__6:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 135;
				this.objectWeaponSet();
				}
				break;
			case MapIniParser.T__7:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 136;
				this.objectArmorSet();
				}
				break;
			case MapIniParser.T__8:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 137;
				this.objectUnitSpecificSounds();
				}
				break;
			case MapIniParser.T__9:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 138;
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
		this.enterRule(_localctx, 14, MapIniParser.RULE_objectPrerequisites);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 141;
			this.match(MapIniParser.T__3);
			this.state = 146;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.T__0 || _la === MapIniParser.T__5) {
				{
				this.state = 144;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case MapIniParser.T__0:
					{
					this.state = 142;
					this.objectProperty();
					}
					break;
				case MapIniParser.T__5:
					{
					this.state = 143;
					this.sciencePropety();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 148;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 149;
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
		this.enterRule(_localctx, 16, MapIniParser.RULE_objectProperty);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 151;
			this.match(MapIniParser.T__0);
			this.state = 152;
			this.match(MapIniParser.T__4);
			this.state = 154;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 153;
				this.match(MapIniParser.ID);
				}
				}
				this.state = 156;
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
	public sciencePropety(): SciencePropetyContext {
		let _localctx: SciencePropetyContext = new SciencePropetyContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, MapIniParser.RULE_sciencePropety);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			this.match(MapIniParser.T__5);
			this.state = 159;
			this.match(MapIniParser.T__4);
			this.state = 161;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 160;
				this.match(MapIniParser.ID);
				}
				}
				this.state = 163;
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
		this.enterRule(_localctx, 20, MapIniParser.RULE_objectWeaponSet);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 165;
			this.match(MapIniParser.T__6);
			this.state = 169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 12)) & ~0x1F) === 0 && ((1 << (_la - 12)) & ((1 << (MapIniParser.T__11 - 12)) | (1 << (MapIniParser.T__12 - 12)) | (1 << (MapIniParser.T__21 - 12)) | (1 << (MapIniParser.T__22 - 12)) | (1 << (MapIniParser.T__23 - 12)) | (1 << (MapIniParser.T__24 - 12)) | (1 << (MapIniParser.ID - 12)))) !== 0)) {
				{
				{
				this.state = 166;
				this.property();
				}
				}
				this.state = 171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 172;
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
	public objectArmorSet(): ObjectArmorSetContext {
		let _localctx: ObjectArmorSetContext = new ObjectArmorSetContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, MapIniParser.RULE_objectArmorSet);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 174;
			this.match(MapIniParser.T__7);
			this.state = 178;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 12)) & ~0x1F) === 0 && ((1 << (_la - 12)) & ((1 << (MapIniParser.T__11 - 12)) | (1 << (MapIniParser.T__12 - 12)) | (1 << (MapIniParser.T__21 - 12)) | (1 << (MapIniParser.T__22 - 12)) | (1 << (MapIniParser.T__23 - 12)) | (1 << (MapIniParser.T__24 - 12)) | (1 << (MapIniParser.ID - 12)))) !== 0)) {
				{
				{
				this.state = 175;
				this.property();
				}
				}
				this.state = 180;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 181;
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
	public objectUnitSpecificSounds(): ObjectUnitSpecificSoundsContext {
		let _localctx: ObjectUnitSpecificSoundsContext = new ObjectUnitSpecificSoundsContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, MapIniParser.RULE_objectUnitSpecificSounds);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 183;
			this.match(MapIniParser.T__8);
			this.state = 187;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 12)) & ~0x1F) === 0 && ((1 << (_la - 12)) & ((1 << (MapIniParser.T__11 - 12)) | (1 << (MapIniParser.T__12 - 12)) | (1 << (MapIniParser.T__21 - 12)) | (1 << (MapIniParser.T__22 - 12)) | (1 << (MapIniParser.T__23 - 12)) | (1 << (MapIniParser.T__24 - 12)) | (1 << (MapIniParser.ID - 12)))) !== 0)) {
				{
				{
				this.state = 184;
				this.property();
				}
				}
				this.state = 189;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 190;
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
	public objectUnitSpecificFX(): ObjectUnitSpecificFXContext {
		let _localctx: ObjectUnitSpecificFXContext = new ObjectUnitSpecificFXContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, MapIniParser.RULE_objectUnitSpecificFX);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 192;
			this.match(MapIniParser.T__9);
			this.state = 196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 12)) & ~0x1F) === 0 && ((1 << (_la - 12)) & ((1 << (MapIniParser.T__11 - 12)) | (1 << (MapIniParser.T__12 - 12)) | (1 << (MapIniParser.T__21 - 12)) | (1 << (MapIniParser.T__22 - 12)) | (1 << (MapIniParser.T__23 - 12)) | (1 << (MapIniParser.T__24 - 12)) | (1 << (MapIniParser.ID - 12)))) !== 0)) {
				{
				{
				this.state = 193;
				this.property();
				}
				}
				this.state = 198;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 199;
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
		this.enterRule(_localctx, 28, MapIniParser.RULE_behaviormoduleBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 201;
			this.match(MapIniParser.T__10);
			this.state = 202;
			this.match(MapIniParser.T__4);
			this.state = 203;
			this.match(MapIniParser.ID);
			this.state = 204;
			this.match(MapIniParser.ID);
			this.state = 209;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 12)) & ~0x1F) === 0 && ((1 << (_la - 12)) & ((1 << (MapIniParser.T__11 - 12)) | (1 << (MapIniParser.T__12 - 12)) | (1 << (MapIniParser.T__21 - 12)) | (1 << (MapIniParser.T__22 - 12)) | (1 << (MapIniParser.T__23 - 12)) | (1 << (MapIniParser.T__24 - 12)) | (1 << (MapIniParser.ID - 12)))) !== 0)) {
				{
				this.state = 207;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
				case 1:
					{
					this.state = 205;
					this.property();
					}
					break;

				case 2:
					{
					this.state = 206;
					this.behaviorTurret();
					}
					break;
				}
				}
				this.state = 211;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 212;
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
		this.enterRule(_localctx, 30, MapIniParser.RULE_behaviorTurret);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 214;
			_la = this._input.LA(1);
			if (!(_la === MapIniParser.T__11 || _la === MapIniParser.T__12)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 218;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.ID) {
				{
				{
				this.state = 215;
				this.genericProperty();
				}
				}
				this.state = 220;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 221;
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
		this.enterRule(_localctx, 32, MapIniParser.RULE_bodyModuleBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 223;
			this.match(MapIniParser.T__13);
			this.state = 224;
			this.match(MapIniParser.T__4);
			this.state = 225;
			this.match(MapIniParser.ID);
			this.state = 226;
			this.match(MapIniParser.ID);
			this.state = 230;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 12)) & ~0x1F) === 0 && ((1 << (_la - 12)) & ((1 << (MapIniParser.T__11 - 12)) | (1 << (MapIniParser.T__12 - 12)) | (1 << (MapIniParser.T__21 - 12)) | (1 << (MapIniParser.T__22 - 12)) | (1 << (MapIniParser.T__23 - 12)) | (1 << (MapIniParser.T__24 - 12)) | (1 << (MapIniParser.ID - 12)))) !== 0)) {
				{
				{
				this.state = 227;
				this.property();
				}
				}
				this.state = 232;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 233;
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
		this.enterRule(_localctx, 34, MapIniParser.RULE_drawModuleBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 235;
			this.match(MapIniParser.T__14);
			this.state = 236;
			this.match(MapIniParser.T__4);
			this.state = 237;
			this.match(MapIniParser.ID);
			this.state = 238;
			this.match(MapIniParser.ID);
			this.state = 247;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 12)) & ~0x1F) === 0 && ((1 << (_la - 12)) & ((1 << (MapIniParser.T__11 - 12)) | (1 << (MapIniParser.T__12 - 12)) | (1 << (MapIniParser.T__15 - 12)) | (1 << (MapIniParser.T__16 - 12)) | (1 << (MapIniParser.T__17 - 12)) | (1 << (MapIniParser.T__18 - 12)) | (1 << (MapIniParser.T__19 - 12)) | (1 << (MapIniParser.T__21 - 12)) | (1 << (MapIniParser.T__22 - 12)) | (1 << (MapIniParser.T__23 - 12)) | (1 << (MapIniParser.T__24 - 12)) | (1 << (MapIniParser.ID - 12)))) !== 0)) {
				{
				this.state = 245;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case MapIniParser.T__15:
				case MapIniParser.T__16:
				case MapIniParser.T__17:
				case MapIniParser.T__18:
				case MapIniParser.T__19:
					{
					this.state = 240;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 239;
							this.conditionStateBlocks();
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 242;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					break;
				case MapIniParser.T__11:
				case MapIniParser.T__12:
				case MapIniParser.T__21:
				case MapIniParser.T__22:
				case MapIniParser.T__23:
				case MapIniParser.T__24:
				case MapIniParser.ID:
					{
					this.state = 244;
					this.property();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 249;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 250;
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
	public conditionStateBlocks(): ConditionStateBlocksContext {
		let _localctx: ConditionStateBlocksContext = new ConditionStateBlocksContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, MapIniParser.RULE_conditionStateBlocks);
		try {
			this.state = 257;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapIniParser.T__15:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 252;
				this.conditionStateBlock();
				}
				break;
			case MapIniParser.T__16:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 253;
				this.defaultConditionStateBlock();
				}
				break;
			case MapIniParser.T__17:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 254;
				this.transitionStateBlock();
				}
				break;
			case MapIniParser.T__18:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 255;
				this.aliasConditionStateBlock();
				}
				break;
			case MapIniParser.T__19:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 256;
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
		this.enterRule(_localctx, 38, MapIniParser.RULE_conditionStateBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 259;
			this.match(MapIniParser.T__15);
			this.state = 260;
			this.match(MapIniParser.T__4);
			this.state = 262;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 261;
					this.match(MapIniParser.ID);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 264;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 269;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 12)) & ~0x1F) === 0 && ((1 << (_la - 12)) & ((1 << (MapIniParser.T__11 - 12)) | (1 << (MapIniParser.T__12 - 12)) | (1 << (MapIniParser.T__21 - 12)) | (1 << (MapIniParser.T__22 - 12)) | (1 << (MapIniParser.T__23 - 12)) | (1 << (MapIniParser.T__24 - 12)) | (1 << (MapIniParser.ID - 12)))) !== 0)) {
				{
				{
				this.state = 266;
				this.property();
				}
				}
				this.state = 271;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 272;
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
		this.enterRule(_localctx, 40, MapIniParser.RULE_defaultConditionStateBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 274;
			this.match(MapIniParser.T__16);
			this.state = 278;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 12)) & ~0x1F) === 0 && ((1 << (_la - 12)) & ((1 << (MapIniParser.T__11 - 12)) | (1 << (MapIniParser.T__12 - 12)) | (1 << (MapIniParser.T__21 - 12)) | (1 << (MapIniParser.T__22 - 12)) | (1 << (MapIniParser.T__23 - 12)) | (1 << (MapIniParser.T__24 - 12)) | (1 << (MapIniParser.ID - 12)))) !== 0)) {
				{
				{
				this.state = 275;
				this.property();
				}
				}
				this.state = 280;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 281;
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
	public transitionStateBlock(): TransitionStateBlockContext {
		let _localctx: TransitionStateBlockContext = new TransitionStateBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, MapIniParser.RULE_transitionStateBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 283;
			this.match(MapIniParser.T__17);
			this.state = 284;
			this.match(MapIniParser.T__4);
			this.state = 285;
			this.match(MapIniParser.ID);
			this.state = 287;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 286;
					this.match(MapIniParser.ID);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 289;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 294;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 12)) & ~0x1F) === 0 && ((1 << (_la - 12)) & ((1 << (MapIniParser.T__11 - 12)) | (1 << (MapIniParser.T__12 - 12)) | (1 << (MapIniParser.T__21 - 12)) | (1 << (MapIniParser.T__22 - 12)) | (1 << (MapIniParser.T__23 - 12)) | (1 << (MapIniParser.T__24 - 12)) | (1 << (MapIniParser.ID - 12)))) !== 0)) {
				{
				{
				this.state = 291;
				this.property();
				}
				}
				this.state = 296;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 297;
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
	public aliasConditionStateBlock(): AliasConditionStateBlockContext {
		let _localctx: AliasConditionStateBlockContext = new AliasConditionStateBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, MapIniParser.RULE_aliasConditionStateBlock);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 299;
			this.match(MapIniParser.T__18);
			this.state = 300;
			this.match(MapIniParser.T__4);
			this.state = 302;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 301;
					this.match(MapIniParser.ID);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 304;
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
	public ignoreConditionStateBlock(): IgnoreConditionStateBlockContext {
		let _localctx: IgnoreConditionStateBlockContext = new IgnoreConditionStateBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, MapIniParser.RULE_ignoreConditionStateBlock);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 306;
			this.match(MapIniParser.T__19);
			this.state = 307;
			this.match(MapIniParser.T__4);
			this.state = 309;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 308;
					this.match(MapIniParser.ID);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 311;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
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
		this.enterRule(_localctx, 48, MapIniParser.RULE_removeModuleBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 313;
			this.match(MapIniParser.T__20);
			this.state = 314;
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
	public property(): PropertyContext {
		let _localctx: PropertyContext = new PropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, MapIniParser.RULE_property);
		try {
			this.state = 319;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapIniParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 316;
				this.genericProperty();
				}
				break;
			case MapIniParser.T__11:
			case MapIniParser.T__21:
			case MapIniParser.T__22:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 317;
				this.turretProperty();
				}
				break;
			case MapIniParser.T__12:
			case MapIniParser.T__23:
			case MapIniParser.T__24:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 318;
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
	public genericProperty(): GenericPropertyContext {
		let _localctx: GenericPropertyContext = new GenericPropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, MapIniParser.RULE_genericProperty);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 321;
			this.match(MapIniParser.ID);
			this.state = 322;
			this.match(MapIniParser.T__4);
			this.state = 324;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 323;
					this.value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 326;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
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
	public turretProperty(): TurretPropertyContext {
		let _localctx: TurretPropertyContext = new TurretPropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, MapIniParser.RULE_turretProperty);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 328;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MapIniParser.T__11) | (1 << MapIniParser.T__21) | (1 << MapIniParser.T__22))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 329;
			this.match(MapIniParser.T__4);
			this.state = 331;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 330;
					this.value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 333;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
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
		this.enterRule(_localctx, 56, MapIniParser.RULE_altTurretProperty);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 335;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MapIniParser.T__12) | (1 << MapIniParser.T__23) | (1 << MapIniParser.T__24))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 336;
			this.match(MapIniParser.T__4);
			this.state = 338;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 337;
					this.value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 340;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
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
		this.enterRule(_localctx, 58, MapIniParser.RULE_end);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 342;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MapIniParser.T__25) | (1 << MapIniParser.T__26) | (1 << MapIniParser.T__27))) !== 0))) {
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
		this.enterRule(_localctx, 60, MapIniParser.RULE_value);
		let _la: number;
		try {
			this.state = 353;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				_localctx = new StringContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 344;
				this.quoutedID();
				}
				break;

			case 2:
				_localctx = new FiletypeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 345;
				this.ftype();
				}
				break;

			case 3:
				_localctx = new ProcentageContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 346;
				this.procent();
				}
				break;

			case 4:
				_localctx = new IdContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 347;
				this.match(MapIniParser.ID);
				}
				break;

			case 5:
				_localctx = new IntContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 348;
				this.match(MapIniParser.INT);
				}
				break;

			case 6:
				_localctx = new FloatContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 349;
				this.match(MapIniParser.FLOAT);
				}
				break;

			case 7:
				_localctx = new BoolContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 350;
				this.match(MapIniParser.BOOL);
				}
				break;

			case 8:
				_localctx = new TurretValueContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 351;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MapIniParser.T__11) | (1 << MapIniParser.T__21) | (1 << MapIniParser.T__22))) !== 0))) {
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
				this.state = 352;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MapIniParser.T__12) | (1 << MapIniParser.T__23) | (1 << MapIniParser.T__24))) !== 0))) {
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
		this.enterRule(_localctx, 62, MapIniParser.RULE_ftype);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 355;
			this.match(MapIniParser.ID);
			this.state = 356;
			this.match(MapIniParser.T__28);
			this.state = 357;
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
		this.enterRule(_localctx, 64, MapIniParser.RULE_rgb);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 359;
			this.match(MapIniParser.INT256);
			this.state = 360;
			this.match(MapIniParser.INT256);
			this.state = 361;
			this.match(MapIniParser.INT256);
			this.state = 362;
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
		this.enterRule(_localctx, 66, MapIniParser.RULE_procent);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 364;
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
			this.state = 365;
			this.match(MapIniParser.T__29);
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
		this.enterRule(_localctx, 68, MapIniParser.RULE_intRang);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 367;
			this.match(MapIniParser.INT);
			this.state = 368;
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
		this.enterRule(_localctx, 70, MapIniParser.RULE_floatRang);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 370;
			this.match(MapIniParser.FLOAT);
			this.state = 371;
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
		this.enterRule(_localctx, 72, MapIniParser.RULE_quoutedID);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 373;
			this.match(MapIniParser.T__30);
			this.state = 374;
			this.match(MapIniParser.ID);
			this.state = 375;
			this.match(MapIniParser.T__30);
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03(\u017C\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x03\x02\x07\x02N\n\x02\f\x02\x0E\x02Q\v\x02" +
		"\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03Y\n\x03\f\x03" +
		"\x0E\x03\\\v\x03\x03\x03\x03\x03\x07\x03`\n\x03\f\x03\x0E\x03c\v\x03\x05" +
		"\x03e\n\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x05\x04l\n\x04\x03" +
		"\x05\x03\x05\x03\x05\x07\x05q\n\x05\f\x05\x0E\x05t\v\x05\x03\x05\x03\x05" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06|\n\x06\f\x06\x0E\x06\x7F\v\x06" +
		"\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\x87\n\x07\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x05\b\x8E\n\b\x03\t\x03\t\x03\t\x07\t\x93\n" +
		"\t\f\t\x0E\t\x96\v\t\x03\t\x03\t\x03\n\x03\n\x03\n\x06\n\x9D\n\n\r\n\x0E" +
		"\n\x9E\x03\v\x03\v\x03\v\x06\v\xA4\n\v\r\v\x0E\v\xA5\x03\f\x03\f\x07\f" +
		"\xAA\n\f\f\f\x0E\f\xAD\v\f\x03\f\x03\f\x03\r\x03\r\x07\r\xB3\n\r\f\r\x0E" +
		"\r\xB6\v\r\x03\r\x03\r\x03\x0E\x03\x0E\x07\x0E\xBC\n\x0E\f\x0E\x0E\x0E" +
		"\xBF\v\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x07\x0F\xC5\n\x0F\f\x0F\x0E" +
		"\x0F\xC8\v\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x07\x10\xD2\n\x10\f\x10\x0E\x10\xD5\v\x10\x03\x10\x03\x10\x03" +
		"\x11\x03\x11\x07\x11\xDB\n\x11\f\x11\x0E\x11\xDE\v\x11\x03\x11\x03\x11" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\xE7\n\x12\f\x12\x0E\x12" +
		"\xEA\v\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x06" +
		"\x13\xF3\n\x13\r\x13\x0E\x13\xF4\x03\x13\x07\x13\xF8\n\x13\f\x13\x0E\x13" +
		"\xFB\v\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05" +
		"\x14\u0104\n\x14\x03\x15\x03\x15\x03\x15\x06\x15\u0109\n\x15\r\x15\x0E" +
		"\x15\u010A\x03\x15\x07\x15\u010E\n\x15\f\x15\x0E\x15\u0111\v\x15\x03\x15" +
		"\x03\x15\x03\x16\x03\x16\x07\x16\u0117\n\x16\f\x16\x0E\x16\u011A\v\x16" +
		"\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x06\x17\u0122\n\x17\r" +
		"\x17\x0E\x17\u0123\x03\x17\x07\x17\u0127\n\x17\f\x17\x0E\x17\u012A\v\x17" +
		"\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x06\x18\u0131\n\x18\r\x18\x0E" +
		"\x18\u0132\x03\x19\x03\x19\x03\x19\x06\x19\u0138\n\x19\r\x19\x0E\x19\u0139" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0142\n\x1B\x03" +
		"\x1C\x03\x1C\x03\x1C\x06\x1C\u0147\n\x1C\r\x1C\x0E\x1C\u0148\x03\x1D\x03" +
		"\x1D\x03\x1D\x06\x1D\u014E\n\x1D\r\x1D\x0E\x1D\u014F\x03\x1E\x03\x1E\x03" +
		"\x1E\x06\x1E\u0155\n\x1E\r\x1E\x0E\x1E\u0156\x03\x1F\x03\x1F\x03 \x03" +
		" \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x05 \u0164\n \x03!\x03!\x03!\x03" +
		"!\x03\"\x03\"\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03$\x03$\x03$\x03%\x03" +
		"%\x03%\x03&\x03&\x03&\x03&\x03&\x02\x02\x02\'\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A" +
		"\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x02" +
		"4\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02\x02\x07\x03" +
		"\x02\x0E\x0F\x04\x02\x0E\x0E\x18\x19\x04\x02\x0F\x0F\x1A\x1B\x03\x02\x1C" +
		"\x1E\x04\x02\"\"$$\x02\u0190\x02O\x03\x02\x02\x02\x04T\x03\x02\x02\x02" +
		"\x06k\x03\x02\x02\x02\bm\x03\x02\x02\x02\nw\x03\x02\x02\x02\f\x86\x03" +
		"\x02\x02\x02\x0E\x8D\x03\x02\x02\x02\x10\x8F\x03\x02\x02\x02\x12\x99\x03" +
		"\x02\x02\x02\x14\xA0\x03\x02\x02\x02\x16\xA7\x03\x02\x02\x02\x18\xB0\x03" +
		"\x02\x02\x02\x1A\xB9\x03\x02\x02\x02\x1C\xC2\x03\x02\x02\x02\x1E\xCB\x03" +
		"\x02\x02\x02 \xD8\x03\x02\x02\x02\"\xE1\x03\x02\x02\x02$\xED\x03\x02\x02" +
		"\x02&\u0103\x03\x02\x02\x02(\u0105\x03\x02\x02\x02*\u0114\x03\x02\x02" +
		"\x02,\u011D\x03\x02\x02\x02.\u012D\x03\x02\x02\x020\u0134\x03\x02\x02" +
		"\x022\u013B\x03\x02\x02\x024\u0141\x03\x02\x02\x026\u0143\x03\x02\x02" +
		"\x028\u014A\x03\x02\x02\x02:\u0151\x03\x02\x02\x02<\u0158\x03\x02\x02" +
		"\x02>\u0163\x03\x02\x02\x02@\u0165\x03\x02\x02\x02B\u0169\x03\x02\x02" +
		"\x02D\u016E\x03\x02\x02\x02F\u0171\x03\x02\x02\x02H\u0174\x03\x02\x02" +
		"\x02J\u0177\x03\x02\x02\x02LN\x05\x04\x03\x02ML\x03\x02\x02\x02NQ\x03" +
		"\x02\x02\x02OM\x03\x02\x02\x02OP\x03\x02\x02\x02PR\x03\x02\x02\x02QO\x03" +
		"\x02\x02\x02RS\x07\x02\x02\x03S\x03\x03\x02\x02\x02TU\x07\x03\x02\x02" +
		"Ud\x07&\x02\x02VY\x05\f\x07\x02WY\x054\x1B\x02XV\x03\x02\x02\x02XW\x03" +
		"\x02\x02\x02Y\\\x03\x02\x02\x02ZX\x03\x02\x02\x02Z[\x03\x02\x02\x02[e" +
		"\x03\x02\x02\x02\\Z\x03\x02\x02\x02]`\x05\x06\x04\x02^`\x054\x1B\x02_" +
		"]\x03\x02\x02\x02_^\x03\x02\x02\x02`c\x03\x02\x02\x02a_\x03\x02\x02\x02" +
		"ab\x03\x02\x02\x02be\x03\x02\x02\x02ca\x03\x02\x02\x02dZ\x03\x02\x02\x02" +
		"da\x03\x02\x02\x02ef\x03\x02\x02\x02fg\x05<\x1F\x02g\x05\x03\x02\x02\x02" +
		"hl\x05\b\x05\x02il\x05\n\x06\x02jl\x052\x1A\x02kh\x03\x02\x02\x02ki\x03" +
		"\x02\x02\x02kj\x03\x02\x02\x02l\x07\x03\x02\x02\x02mr\x07\x04\x02\x02" +
		"nq\x05\f\x07\x02oq\x054\x1B\x02pn\x03\x02\x02\x02po\x03\x02\x02\x02qt" +
		"\x03\x02\x02\x02rp\x03\x02\x02\x02rs\x03\x02\x02\x02su\x03\x02\x02\x02" +
		"tr\x03\x02\x02\x02uv\x05<\x1F\x02v\t\x03\x02\x02\x02wx\x07\x05\x02\x02" +
		"x}\x07&\x02\x02y|\x05\f\x07\x02z|\x054\x1B\x02{y\x03\x02\x02\x02{z\x03" +
		"\x02\x02\x02|\x7F\x03\x02\x02\x02}{\x03\x02\x02\x02}~\x03\x02\x02\x02" +
		"~\x80\x03\x02\x02\x02\x7F}\x03\x02\x02\x02\x80\x81\x05<\x1F\x02\x81\v" +
		"\x03\x02\x02\x02\x82\x87\x05$\x13\x02\x83\x87\x05\"\x12\x02\x84\x87\x05" +
		"\x1E\x10\x02\x85\x87\x05\x0E\b\x02\x86\x82\x03\x02\x02\x02\x86\x83\x03" +
		"\x02\x02\x02\x86\x84\x03\x02\x02\x02\x86\x85\x03\x02\x02\x02\x87\r\x03" +
		"\x02\x02\x02\x88\x8E\x05\x10\t\x02\x89\x8E\x05\x16\f\x02\x8A\x8E\x05\x18" +
		"\r\x02\x8B\x8E\x05\x1A\x0E\x02\x8C\x8E\x05\x1C\x0F\x02\x8D\x88\x03\x02" +
		"\x02\x02\x8D\x89\x03\x02\x02\x02\x8D\x8A\x03\x02\x02\x02\x8D\x8B\x03\x02" +
		"\x02\x02\x8D\x8C\x03\x02\x02\x02\x8E\x0F\x03\x02\x02\x02\x8F\x94\x07\x06" +
		"\x02\x02\x90\x93\x05\x12\n\x02\x91\x93\x05\x14\v\x02\x92\x90\x03\x02\x02" +
		"\x02\x92\x91\x03\x02\x02\x02\x93\x96\x03\x02\x02\x02\x94\x92\x03\x02\x02" +
		"\x02\x94\x95\x03\x02\x02\x02\x95\x97\x03\x02\x02\x02\x96\x94\x03\x02\x02" +
		"\x02\x97\x98\x05<\x1F\x02\x98\x11\x03\x02\x02\x02\x99\x9A\x07\x03\x02" +
		"\x02\x9A\x9C\x07\x07\x02\x02\x9B\x9D\x07&\x02\x02\x9C\x9B\x03\x02\x02" +
		"\x02\x9D\x9E\x03\x02\x02\x02\x9E\x9C\x03\x02\x02\x02\x9E\x9F\x03\x02\x02" +
		"\x02\x9F\x13\x03\x02\x02\x02\xA0\xA1\x07\b\x02\x02\xA1\xA3\x07\x07\x02" +
		"\x02\xA2\xA4\x07&\x02\x02\xA3\xA2\x03\x02\x02\x02\xA4\xA5\x03\x02\x02" +
		"\x02\xA5\xA3\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\x15\x03\x02\x02" +
		"\x02\xA7\xAB\x07\t\x02\x02\xA8\xAA\x054\x1B\x02\xA9\xA8\x03\x02\x02\x02" +
		"\xAA\xAD\x03\x02\x02\x02\xAB\xA9\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02" +
		"\xAC\xAE\x03\x02\x02\x02\xAD\xAB\x03\x02\x02\x02\xAE\xAF\x05<\x1F\x02" +
		"\xAF\x17\x03\x02\x02\x02\xB0\xB4\x07\n\x02\x02\xB1\xB3\x054\x1B\x02\xB2" +
		"\xB1\x03\x02\x02\x02\xB3\xB6\x03\x02\x02\x02\xB4\xB2\x03\x02\x02\x02\xB4" +
		"\xB5\x03\x02\x02\x02\xB5\xB7\x03\x02\x02\x02\xB6\xB4\x03\x02\x02\x02\xB7" +
		"\xB8\x05<\x1F\x02\xB8\x19\x03\x02\x02\x02\xB9\xBD\x07\v\x02\x02\xBA\xBC" +
		"\x054\x1B\x02\xBB\xBA\x03\x02\x02\x02\xBC\xBF\x03\x02\x02\x02\xBD\xBB" +
		"\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xC0\x03\x02\x02\x02\xBF\xBD" +
		"\x03\x02\x02\x02\xC0\xC1\x05<\x1F\x02\xC1\x1B\x03\x02\x02\x02\xC2\xC6" +
		"\x07\f\x02\x02\xC3\xC5\x054\x1B\x02\xC4\xC3\x03\x02\x02\x02\xC5\xC8\x03" +
		"\x02\x02\x02\xC6\xC4\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\xC9\x03" +
		"\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC9\xCA\x05<\x1F\x02\xCA\x1D\x03" +
		"\x02\x02\x02\xCB\xCC\x07\r\x02\x02\xCC\xCD\x07\x07\x02\x02\xCD\xCE\x07" +
		"&\x02\x02\xCE\xD3\x07&\x02\x02\xCF\xD2\x054\x1B\x02\xD0\xD2\x05 \x11\x02" +
		"\xD1\xCF\x03\x02\x02\x02\xD1\xD0\x03\x02\x02\x02\xD2\xD5\x03\x02\x02\x02" +
		"\xD3\xD1\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4\xD6\x03\x02\x02\x02" +
		"\xD5\xD3\x03\x02\x02\x02\xD6\xD7\x05<\x1F\x02\xD7\x1F\x03\x02\x02\x02" +
		"\xD8\xDC\t\x02\x02\x02\xD9\xDB\x056\x1C\x02\xDA\xD9\x03\x02\x02\x02\xDB" +
		"\xDE\x03\x02\x02\x02\xDC\xDA\x03\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD" +
		"\xDF\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDF\xE0\x05<\x1F\x02\xE0" +
		"!\x03\x02\x02\x02\xE1\xE2\x07\x10\x02\x02\xE2\xE3\x07\x07\x02\x02\xE3" +
		"\xE4\x07&\x02\x02\xE4\xE8\x07&\x02\x02\xE5\xE7\x054\x1B\x02\xE6\xE5\x03" +
		"\x02\x02\x02\xE7\xEA\x03\x02\x02\x02\xE8\xE6\x03\x02\x02\x02\xE8\xE9\x03" +
		"\x02\x02\x02\xE9\xEB\x03\x02\x02\x02\xEA\xE8\x03\x02\x02\x02\xEB\xEC\x05" +
		"<\x1F\x02\xEC#\x03\x02\x02\x02\xED\xEE\x07\x11\x02\x02\xEE\xEF\x07\x07" +
		"\x02\x02\xEF\xF0\x07&\x02\x02\xF0\xF9\x07&\x02\x02\xF1\xF3\x05&\x14\x02" +
		"\xF2\xF1\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF2\x03\x02\x02\x02" +
		"\xF4\xF5\x03\x02\x02\x02\xF5\xF8\x03\x02\x02\x02\xF6\xF8\x054\x1B\x02" +
		"\xF7\xF2\x03\x02\x02\x02\xF7\xF6\x03\x02\x02\x02\xF8\xFB\x03\x02\x02\x02" +
		"\xF9\xF7\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA\xFC\x03\x02\x02\x02" +
		"\xFB\xF9\x03\x02\x02\x02\xFC\xFD\x05<\x1F\x02\xFD%\x03\x02\x02\x02\xFE" +
		"\u0104\x05(\x15\x02\xFF\u0104\x05*\x16\x02\u0100\u0104\x05,\x17\x02\u0101" +
		"\u0104\x05.\x18\x02\u0102\u0104\x050\x19\x02\u0103\xFE\x03\x02\x02\x02" +
		"\u0103\xFF\x03\x02\x02\x02\u0103\u0100\x03\x02\x02\x02\u0103\u0101\x03" +
		"\x02\x02\x02\u0103\u0102\x03\x02\x02\x02\u0104\'\x03\x02\x02\x02\u0105" +
		"\u0106\x07\x12\x02\x02\u0106\u0108\x07\x07\x02\x02\u0107\u0109\x07&\x02" +
		"\x02\u0108\u0107\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A\u0108" +
		"\x03\x02\x02\x02\u010A\u010B\x03\x02\x02\x02\u010B\u010F\x03\x02\x02\x02" +
		"\u010C\u010E\x054\x1B\x02\u010D\u010C\x03\x02\x02\x02\u010E\u0111\x03" +
		"\x02\x02\x02\u010F\u010D\x03\x02\x02\x02\u010F\u0110\x03\x02\x02\x02\u0110" +
		"\u0112\x03\x02\x02\x02\u0111\u010F\x03\x02\x02\x02\u0112\u0113\x05<\x1F" +
		"\x02\u0113)\x03\x02\x02\x02\u0114\u0118\x07\x13\x02\x02\u0115\u0117\x05" +
		"4\x1B\x02\u0116\u0115\x03\x02\x02\x02\u0117\u011A\x03\x02\x02\x02\u0118" +
		"\u0116\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119\u011B\x03\x02" +
		"\x02\x02\u011A\u0118\x03\x02\x02\x02\u011B\u011C\x05<\x1F\x02\u011C+\x03" +
		"\x02\x02\x02\u011D\u011E\x07\x14\x02\x02\u011E\u011F\x07\x07\x02\x02\u011F" +
		"\u0121\x07&\x02\x02\u0120\u0122\x07&\x02\x02\u0121\u0120\x03\x02\x02\x02" +
		"\u0122\u0123\x03\x02\x02\x02\u0123\u0121\x03\x02\x02\x02\u0123\u0124\x03" +
		"\x02\x02\x02\u0124\u0128\x03\x02\x02\x02\u0125\u0127\x054\x1B\x02\u0126" +
		"\u0125\x03\x02\x02\x02\u0127\u012A\x03\x02\x02\x02\u0128\u0126\x03\x02" +
		"\x02\x02\u0128\u0129\x03\x02\x02\x02\u0129\u012B\x03\x02\x02\x02\u012A" +
		"\u0128\x03\x02\x02\x02\u012B\u012C\x05<\x1F\x02\u012C-\x03\x02\x02\x02" +
		"\u012D\u012E\x07\x15\x02\x02\u012E\u0130\x07\x07\x02\x02\u012F\u0131\x07" +
		"&\x02\x02\u0130\u012F\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132" +
		"\u0130\x03\x02\x02\x02\u0132\u0133\x03\x02\x02\x02\u0133/\x03\x02\x02" +
		"\x02\u0134\u0135\x07\x16\x02\x02\u0135\u0137\x07\x07\x02\x02\u0136\u0138" +
		"\x07&\x02\x02\u0137\u0136\x03\x02\x02\x02\u0138\u0139\x03\x02\x02\x02" +
		"\u0139\u0137\x03\x02\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A1\x03\x02" +
		"\x02\x02\u013B\u013C\x07\x17\x02\x02\u013C\u013D\x07&\x02\x02\u013D3\x03" +
		"\x02\x02\x02\u013E\u0142\x056\x1C\x02\u013F\u0142\x058\x1D\x02\u0140\u0142" +
		"\x05:\x1E\x02\u0141\u013E\x03\x02\x02\x02\u0141\u013F\x03\x02\x02\x02" +
		"\u0141\u0140\x03\x02\x02\x02\u01425\x03\x02\x02\x02\u0143\u0144\x07&\x02" +
		"\x02\u0144\u0146\x07\x07\x02\x02\u0145\u0147\x05> \x02\u0146\u0145\x03" +
		"\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148\u0146\x03\x02\x02\x02\u0148" +
		"\u0149\x03\x02\x02\x02\u01497\x03\x02\x02\x02\u014A\u014B\t\x03\x02\x02" +
		"\u014B\u014D\x07\x07\x02\x02\u014C\u014E\x05> \x02\u014D\u014C\x03\x02" +
		"\x02\x02\u014E\u014F\x03\x02\x02\x02\u014F\u014D\x03\x02\x02\x02\u014F" +
		"\u0150\x03\x02\x02\x02\u01509\x03\x02\x02\x02\u0151\u0152\t\x04\x02\x02" +
		"\u0152\u0154\x07\x07\x02\x02\u0153\u0155\x05> \x02\u0154\u0153\x03\x02" +
		"\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156\u0154\x03\x02\x02\x02\u0156" +
		"\u0157\x03\x02\x02\x02\u0157;\x03\x02\x02\x02\u0158\u0159\t\x05\x02\x02" +
		"\u0159=\x03\x02\x02\x02\u015A\u0164\x05J&\x02\u015B\u0164\x05@!\x02\u015C" +
		"\u0164\x05D#\x02\u015D\u0164\x07&\x02\x02\u015E\u0164\x07\"\x02\x02\u015F" +
		"\u0164\x07$\x02\x02\u0160\u0164\x07%\x02\x02\u0161\u0164\t\x03\x02\x02" +
		"\u0162\u0164\t\x04\x02\x02\u0163\u015A\x03\x02\x02\x02\u0163\u015B\x03" +
		"\x02\x02\x02\u0163\u015C\x03\x02\x02\x02\u0163\u015D\x03\x02\x02\x02\u0163" +
		"\u015E\x03\x02\x02\x02\u0163\u015F\x03\x02\x02\x02\u0163\u0160\x03\x02" +
		"\x02\x02\u0163\u0161\x03\x02\x02\x02\u0163\u0162\x03\x02\x02\x02\u0164" +
		"?\x03\x02\x02\x02\u0165\u0166\x07&\x02\x02\u0166\u0167\x07\x1F\x02\x02" +
		"\u0167\u0168\x07&\x02\x02\u0168A\x03\x02\x02\x02\u0169\u016A\x07#\x02" +
		"\x02\u016A\u016B\x07#\x02\x02\u016B\u016C\x07#\x02\x02\u016C\u016D\x07" +
		"#\x02\x02\u016DC\x03\x02\x02\x02\u016E\u016F\t\x06\x02\x02\u016F\u0170" +
		"\x07 \x02\x02\u0170E\x03\x02\x02\x02\u0171\u0172\x07\"\x02\x02\u0172\u0173" +
		"\x07\"\x02\x02\u0173G\x03\x02\x02\x02\u0174\u0175\x07$\x02\x02\u0175\u0176" +
		"\x07$\x02\x02\u0176I\x03\x02\x02\x02\u0177\u0178\x07!\x02\x02\u0178\u0179" +
		"\x07&\x02\x02\u0179\u017A\x07!\x02\x02\u017AK\x03\x02\x02\x02+OXZ_adk" +
		"pr{}\x86\x8D\x92\x94\x9E\xA5\xAB\xB4\xBD\xC6\xD1\xD3\xDC\xE8\xF4\xF7\xF9" +
		"\u0103\u010A\u010F\u0118\u0123\u0128\u0132\u0139\u0141\u0148\u014F\u0156" +
		"\u0163";
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
	public object(): ObjectContext[];
	public object(i: number): ObjectContext;
	public object(i?: number): ObjectContext | ObjectContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectContext);
		} else {
			return this.getRuleContext(i, ObjectContext);
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
	public property(): PropertyContext[];
	public property(i: number): PropertyContext;
	public property(i?: number): PropertyContext | PropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropertyContext);
		} else {
			return this.getRuleContext(i, PropertyContext);
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
	public objectProperty(): ObjectPropertyContext[];
	public objectProperty(i: number): ObjectPropertyContext;
	public objectProperty(i?: number): ObjectPropertyContext | ObjectPropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectPropertyContext);
		} else {
			return this.getRuleContext(i, ObjectPropertyContext);
		}
	}
	public sciencePropety(): SciencePropetyContext[];
	public sciencePropety(i: number): SciencePropetyContext;
	public sciencePropety(i?: number): SciencePropetyContext | SciencePropetyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SciencePropetyContext);
		} else {
			return this.getRuleContext(i, SciencePropetyContext);
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


export class ObjectPropertyContext extends ParserRuleContext {
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


export class SciencePropetyContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return MapIniParser.RULE_sciencePropety; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterSciencePropety) {
			listener.enterSciencePropety(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitSciencePropety) {
			listener.exitSciencePropety(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitSciencePropety) {
			return visitor.visitSciencePropety(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectWeaponSetContext extends ParserRuleContext {
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


export class ObjectArmorSetContext extends ParserRuleContext {
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


export class ObjectUnitSpecificSoundsContext extends ParserRuleContext {
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


export class ObjectUnitSpecificFXContext extends ParserRuleContext {
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


export class BehaviorTurretContext extends ParserRuleContext {
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public genericProperty(): GenericPropertyContext[];
	public genericProperty(i: number): GenericPropertyContext;
	public genericProperty(i?: number): GenericPropertyContext | GenericPropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GenericPropertyContext);
		} else {
			return this.getRuleContext(i, GenericPropertyContext);
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
	public property(): PropertyContext[];
	public property(i: number): PropertyContext;
	public property(i?: number): PropertyContext | PropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropertyContext);
		} else {
			return this.getRuleContext(i, PropertyContext);
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
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapIniParser.ID);
		} else {
			return this.getToken(MapIniParser.ID, i);
		}
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


export class PropertyContext extends ParserRuleContext {
	public genericProperty(): GenericPropertyContext | undefined {
		return this.tryGetRuleContext(0, GenericPropertyContext);
	}
	public turretProperty(): TurretPropertyContext | undefined {
		return this.tryGetRuleContext(0, TurretPropertyContext);
	}
	public altTurretProperty(): AltTurretPropertyContext | undefined {
		return this.tryGetRuleContext(0, AltTurretPropertyContext);
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


export class GenericPropertyContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return MapIniParser.RULE_genericProperty; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterGenericProperty) {
			listener.enterGenericProperty(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitGenericProperty) {
			listener.exitGenericProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitGenericProperty) {
			return visitor.visitGenericProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TurretPropertyContext extends ParserRuleContext {
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
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
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


