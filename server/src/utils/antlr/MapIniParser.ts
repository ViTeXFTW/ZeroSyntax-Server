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
	public static readonly INT = 24;
	public static readonly INT256 = 25;
	public static readonly FLOAT = 26;
	public static readonly BOOL = 27;
	public static readonly ID = 28;
	public static readonly SKIp = 29;
	public static readonly COMMENT = 30;
	public static readonly RULE_program = 0;
	public static readonly RULE_object = 1;
	public static readonly RULE_moduleBlocks = 2;
	public static readonly RULE_addModuleBlock = 3;
	public static readonly RULE_replaceModuleBlock = 4;
	public static readonly RULE_modules = 5;
	public static readonly RULE_objectBlocks = 6;
	public static readonly RULE_objectPrerequisites = 7;
	public static readonly RULE_objectProperty = 8;
	public static readonly RULE_objectWeaponSet = 9;
	public static readonly RULE_objectArmorSet = 10;
	public static readonly RULE_objectUnitSpecificSounds = 11;
	public static readonly RULE_behaviormoduleBlock = 12;
	public static readonly RULE_bodyModuleBlock = 13;
	public static readonly RULE_drawModuleBlock = 14;
	public static readonly RULE_conditionStateBlocks = 15;
	public static readonly RULE_conditionStateBlock = 16;
	public static readonly RULE_defaultConditionStateBlock = 17;
	public static readonly RULE_transitionStateBlock = 18;
	public static readonly RULE_aliasConditionStateBlock = 19;
	public static readonly RULE_ignoreConditionStateBlock = 20;
	public static readonly RULE_removeModuleBlock = 21;
	public static readonly RULE_property = 22;
	public static readonly RULE_end = 23;
	public static readonly RULE_value = 24;
	public static readonly RULE_ftype = 25;
	public static readonly RULE_rgb = 26;
	public static readonly RULE_procent = 27;
	public static readonly RULE_intRang = 28;
	public static readonly RULE_floatRang = 29;
	public static readonly RULE_quoutedID = 30;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "object", "moduleBlocks", "addModuleBlock", "replaceModuleBlock", 
		"modules", "objectBlocks", "objectPrerequisites", "objectProperty", "objectWeaponSet", 
		"objectArmorSet", "objectUnitSpecificSounds", "behaviormoduleBlock", "bodyModuleBlock", 
		"drawModuleBlock", "conditionStateBlocks", "conditionStateBlock", "defaultConditionStateBlock", 
		"transitionStateBlock", "aliasConditionStateBlock", "ignoreConditionStateBlock", 
		"removeModuleBlock", "property", "end", "value", "ftype", "rgb", "procent", 
		"intRang", "floatRang", "quoutedID",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'Object'", "'AddModule'", "'ReplaceModule'", "'Prerequisites'", 
		"'='", "'WeaponSet'", "'ArmorSet'", "'UnitSpecificSounds'", "'Behavior'", 
		"'Body'", "'Draw'", "'ConditionState'", "'DefaultConditionState'", "'TransitionState'", 
		"'AliasConditionState'", "'IgnoreConditionStates'", "'RemoveModule'", 
		"'End'", "'end'", "'END'", "'.'", "'%'", "'\"'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "INT", "INT256", "FLOAT", "BOOL", "ID", 
		"SKIp", "COMMENT",
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
			this.state = 65;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.T__0) {
				{
				{
				this.state = 62;
				this.object();
				}
				}
				this.state = 67;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 68;
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
			this.state = 70;
			this.match(MapIniParser.T__0);
			this.state = 71;
			this.match(MapIniParser.ID);
			this.state = 86;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 76;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MapIniParser.T__1) | (1 << MapIniParser.T__2) | (1 << MapIniParser.T__16) | (1 << MapIniParser.ID))) !== 0)) {
					{
					this.state = 74;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case MapIniParser.T__1:
					case MapIniParser.T__2:
					case MapIniParser.T__16:
						{
						this.state = 72;
						this.moduleBlocks();
						}
						break;
					case MapIniParser.ID:
						{
						this.state = 73;
						this.property();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 78;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 2:
				{
				this.state = 83;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MapIniParser.T__3) | (1 << MapIniParser.T__5) | (1 << MapIniParser.T__6) | (1 << MapIniParser.T__7) | (1 << MapIniParser.T__8) | (1 << MapIniParser.T__9) | (1 << MapIniParser.T__10) | (1 << MapIniParser.ID))) !== 0)) {
					{
					this.state = 81;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case MapIniParser.T__3:
					case MapIniParser.T__5:
					case MapIniParser.T__6:
					case MapIniParser.T__7:
					case MapIniParser.T__8:
					case MapIniParser.T__9:
					case MapIniParser.T__10:
						{
						this.state = 79;
						this.modules();
						}
						break;
					case MapIniParser.ID:
						{
						this.state = 80;
						this.property();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 85;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
			this.state = 88;
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
			this.state = 93;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapIniParser.T__1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 90;
				this.addModuleBlock();
				}
				break;
			case MapIniParser.T__2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 91;
				this.replaceModuleBlock();
				}
				break;
			case MapIniParser.T__16:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 92;
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
			this.state = 95;
			this.match(MapIniParser.T__1);
			this.state = 100;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MapIniParser.T__3) | (1 << MapIniParser.T__5) | (1 << MapIniParser.T__6) | (1 << MapIniParser.T__7) | (1 << MapIniParser.T__8) | (1 << MapIniParser.T__9) | (1 << MapIniParser.T__10) | (1 << MapIniParser.ID))) !== 0)) {
				{
				this.state = 98;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case MapIniParser.T__3:
				case MapIniParser.T__5:
				case MapIniParser.T__6:
				case MapIniParser.T__7:
				case MapIniParser.T__8:
				case MapIniParser.T__9:
				case MapIniParser.T__10:
					{
					this.state = 96;
					this.modules();
					}
					break;
				case MapIniParser.ID:
					{
					this.state = 97;
					this.property();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 102;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 103;
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
			this.state = 105;
			this.match(MapIniParser.T__2);
			this.state = 106;
			this.match(MapIniParser.ID);
			this.state = 111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MapIniParser.T__3) | (1 << MapIniParser.T__5) | (1 << MapIniParser.T__6) | (1 << MapIniParser.T__7) | (1 << MapIniParser.T__8) | (1 << MapIniParser.T__9) | (1 << MapIniParser.T__10) | (1 << MapIniParser.ID))) !== 0)) {
				{
				this.state = 109;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case MapIniParser.T__3:
				case MapIniParser.T__5:
				case MapIniParser.T__6:
				case MapIniParser.T__7:
				case MapIniParser.T__8:
				case MapIniParser.T__9:
				case MapIniParser.T__10:
					{
					this.state = 107;
					this.modules();
					}
					break;
				case MapIniParser.ID:
					{
					this.state = 108;
					this.property();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 114;
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
			this.state = 120;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapIniParser.T__10:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 116;
				this.drawModuleBlock();
				}
				break;
			case MapIniParser.T__9:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 117;
				this.bodyModuleBlock();
				}
				break;
			case MapIniParser.T__8:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 118;
				this.behaviormoduleBlock();
				}
				break;
			case MapIniParser.T__3:
			case MapIniParser.T__5:
			case MapIniParser.T__6:
			case MapIniParser.T__7:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 119;
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
			this.state = 126;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapIniParser.T__3:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 122;
				this.objectPrerequisites();
				}
				break;
			case MapIniParser.T__5:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 123;
				this.objectWeaponSet();
				}
				break;
			case MapIniParser.T__6:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 124;
				this.objectArmorSet();
				}
				break;
			case MapIniParser.T__7:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 125;
				this.objectUnitSpecificSounds();
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
			this.state = 128;
			this.match(MapIniParser.T__3);
			this.state = 130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 129;
				this.objectProperty();
				}
				}
				this.state = 132;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === MapIniParser.T__0);
			this.state = 134;
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
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 136;
			this.match(MapIniParser.T__0);
			this.state = 137;
			this.match(MapIniParser.T__4);
			this.state = 138;
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
	public objectWeaponSet(): ObjectWeaponSetContext {
		let _localctx: ObjectWeaponSetContext = new ObjectWeaponSetContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, MapIniParser.RULE_objectWeaponSet);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 140;
			this.match(MapIniParser.T__5);
			this.state = 144;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.ID) {
				{
				{
				this.state = 141;
				this.property();
				}
				}
				this.state = 146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 147;
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
		this.enterRule(_localctx, 20, MapIniParser.RULE_objectArmorSet);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 149;
			this.match(MapIniParser.T__6);
			this.state = 153;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.ID) {
				{
				{
				this.state = 150;
				this.property();
				}
				}
				this.state = 155;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 156;
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
		this.enterRule(_localctx, 22, MapIniParser.RULE_objectUnitSpecificSounds);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			this.match(MapIniParser.T__7);
			this.state = 162;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.ID) {
				{
				{
				this.state = 159;
				this.property();
				}
				}
				this.state = 164;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 165;
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
		this.enterRule(_localctx, 24, MapIniParser.RULE_behaviormoduleBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 167;
			this.match(MapIniParser.T__8);
			this.state = 168;
			this.match(MapIniParser.T__4);
			this.state = 169;
			this.match(MapIniParser.ID);
			this.state = 170;
			this.match(MapIniParser.ID);
			this.state = 174;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.ID) {
				{
				{
				this.state = 171;
				this.property();
				}
				}
				this.state = 176;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 177;
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
		this.enterRule(_localctx, 26, MapIniParser.RULE_bodyModuleBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 179;
			this.match(MapIniParser.T__9);
			this.state = 180;
			this.match(MapIniParser.T__4);
			this.state = 181;
			this.match(MapIniParser.ID);
			this.state = 182;
			this.match(MapIniParser.ID);
			this.state = 186;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.ID) {
				{
				{
				this.state = 183;
				this.property();
				}
				}
				this.state = 188;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 189;
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
		this.enterRule(_localctx, 28, MapIniParser.RULE_drawModuleBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 191;
			this.match(MapIniParser.T__10);
			this.state = 192;
			this.match(MapIniParser.T__4);
			this.state = 193;
			this.match(MapIniParser.ID);
			this.state = 194;
			this.match(MapIniParser.ID);
			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MapIniParser.T__11) | (1 << MapIniParser.T__12) | (1 << MapIniParser.T__13) | (1 << MapIniParser.T__14) | (1 << MapIniParser.T__15) | (1 << MapIniParser.ID))) !== 0)) {
				{
				this.state = 201;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case MapIniParser.T__11:
				case MapIniParser.T__12:
				case MapIniParser.T__13:
				case MapIniParser.T__14:
				case MapIniParser.T__15:
					{
					this.state = 196;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 195;
							this.conditionStateBlocks();
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 198;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					break;
				case MapIniParser.ID:
					{
					this.state = 200;
					this.property();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 205;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 206;
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
		this.enterRule(_localctx, 30, MapIniParser.RULE_conditionStateBlocks);
		try {
			this.state = 213;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapIniParser.T__11:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 208;
				this.conditionStateBlock();
				}
				break;
			case MapIniParser.T__12:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 209;
				this.defaultConditionStateBlock();
				}
				break;
			case MapIniParser.T__13:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 210;
				this.transitionStateBlock();
				}
				break;
			case MapIniParser.T__14:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 211;
				this.aliasConditionStateBlock();
				}
				break;
			case MapIniParser.T__15:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 212;
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
		this.enterRule(_localctx, 32, MapIniParser.RULE_conditionStateBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 215;
			this.match(MapIniParser.T__11);
			this.state = 216;
			this.match(MapIniParser.T__4);
			this.state = 218;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 217;
					this.match(MapIniParser.ID);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 220;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.ID) {
				{
				{
				this.state = 222;
				this.property();
				}
				}
				this.state = 227;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 228;
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
		this.enterRule(_localctx, 34, MapIniParser.RULE_defaultConditionStateBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 230;
			this.match(MapIniParser.T__12);
			this.state = 234;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.ID) {
				{
				{
				this.state = 231;
				this.property();
				}
				}
				this.state = 236;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 237;
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
		this.enterRule(_localctx, 36, MapIniParser.RULE_transitionStateBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 239;
			this.match(MapIniParser.T__13);
			this.state = 240;
			this.match(MapIniParser.T__4);
			this.state = 241;
			this.match(MapIniParser.ID);
			this.state = 242;
			this.match(MapIniParser.ID);
			this.state = 246;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.ID) {
				{
				{
				this.state = 243;
				this.property();
				}
				}
				this.state = 248;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 249;
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
		this.enterRule(_localctx, 38, MapIniParser.RULE_aliasConditionStateBlock);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 251;
			this.match(MapIniParser.T__14);
			this.state = 252;
			this.match(MapIniParser.T__4);
			this.state = 254;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 253;
					this.match(MapIniParser.ID);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 256;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
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
		this.enterRule(_localctx, 40, MapIniParser.RULE_ignoreConditionStateBlock);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 258;
			this.match(MapIniParser.T__15);
			this.state = 259;
			this.match(MapIniParser.T__4);
			this.state = 261;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 260;
					this.match(MapIniParser.ID);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 263;
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
	public removeModuleBlock(): RemoveModuleBlockContext {
		let _localctx: RemoveModuleBlockContext = new RemoveModuleBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, MapIniParser.RULE_removeModuleBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 265;
			this.match(MapIniParser.T__16);
			this.state = 266;
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
		this.enterRule(_localctx, 44, MapIniParser.RULE_property);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 268;
			this.match(MapIniParser.ID);
			this.state = 269;
			this.match(MapIniParser.T__4);
			this.state = 271;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 270;
					this.value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 273;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
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
		this.enterRule(_localctx, 46, MapIniParser.RULE_end);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 275;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MapIniParser.T__17) | (1 << MapIniParser.T__18) | (1 << MapIniParser.T__19))) !== 0))) {
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
		this.enterRule(_localctx, 48, MapIniParser.RULE_value);
		try {
			this.state = 283;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				_localctx = new StringContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 277;
				this.quoutedID();
				}
				break;

			case 2:
				_localctx = new FiletypeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 278;
				this.ftype();
				}
				break;

			case 3:
				_localctx = new IdContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 279;
				this.match(MapIniParser.ID);
				}
				break;

			case 4:
				_localctx = new IntContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 280;
				this.match(MapIniParser.INT);
				}
				break;

			case 5:
				_localctx = new FloatContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 281;
				this.match(MapIniParser.FLOAT);
				}
				break;

			case 6:
				_localctx = new BoolContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 282;
				this.match(MapIniParser.BOOL);
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
		this.enterRule(_localctx, 50, MapIniParser.RULE_ftype);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 285;
			this.match(MapIniParser.ID);
			this.state = 286;
			this.match(MapIniParser.T__20);
			this.state = 287;
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
		this.enterRule(_localctx, 52, MapIniParser.RULE_rgb);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 289;
			this.match(MapIniParser.INT256);
			this.state = 290;
			this.match(MapIniParser.INT256);
			this.state = 291;
			this.match(MapIniParser.INT256);
			this.state = 292;
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
		this.enterRule(_localctx, 54, MapIniParser.RULE_procent);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 294;
			this.match(MapIniParser.INT);
			this.state = 295;
			this.match(MapIniParser.T__21);
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
		this.enterRule(_localctx, 56, MapIniParser.RULE_intRang);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 297;
			this.match(MapIniParser.INT);
			this.state = 298;
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
		this.enterRule(_localctx, 58, MapIniParser.RULE_floatRang);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 300;
			this.match(MapIniParser.FLOAT);
			this.state = 301;
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
		this.enterRule(_localctx, 60, MapIniParser.RULE_quoutedID);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 303;
			this.match(MapIniParser.T__22);
			this.state = 304;
			this.match(MapIniParser.ID);
			this.state = 305;
			this.match(MapIniParser.T__22);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03 \u0136\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x03\x02\x07\x02B\n\x02" +
		"\f\x02\x0E\x02E\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x07\x03M\n\x03\f\x03\x0E\x03P\v\x03\x03\x03\x03\x03\x07\x03T\n\x03\f" +
		"\x03\x0E\x03W\v\x03\x05\x03Y\n\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03" +
		"\x04\x05\x04`\n\x04\x03\x05\x03\x05\x03\x05\x07\x05e\n\x05\f\x05\x0E\x05" +
		"h\v\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06p\n\x06" +
		"\f\x06\x0E\x06s\v\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x05\x07{\n\x07\x03\b\x03\b\x03\b\x03\b\x05\b\x81\n\b\x03\t\x03\t\x06" +
		"\t\x85\n\t\r\t\x0E\t\x86\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03" +
		"\v\x07\v\x91\n\v\f\v\x0E\v\x94\v\v\x03\v\x03\v\x03\f\x03\f\x07\f\x9A\n" +
		"\f\f\f\x0E\f\x9D\v\f\x03\f\x03\f\x03\r\x03\r\x07\r\xA3\n\r\f\r\x0E\r\xA6" +
		"\v\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xAF\n" +
		"\x0E\f\x0E\x0E\x0E\xB2\v\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x07\x0F\xBB\n\x0F\f\x0F\x0E\x0F\xBE\v\x0F\x03\x0F\x03\x0F" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x06\x10\xC7\n\x10\r\x10\x0E\x10" +
		"\xC8\x03\x10\x07\x10\xCC\n\x10\f\x10\x0E\x10\xCF\v\x10\x03\x10\x03\x10" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\xD8\n\x11\x03\x12\x03" +
		"\x12\x03\x12\x06\x12\xDD\n\x12\r\x12\x0E\x12\xDE\x03\x12\x07\x12\xE2\n" +
		"\x12\f\x12\x0E\x12\xE5\v\x12\x03\x12\x03\x12\x03\x13\x03\x13\x07\x13\xEB" +
		"\n\x13\f\x13\x0E\x13\xEE\v\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x07\x14\xF7\n\x14\f\x14\x0E\x14\xFA\v\x14\x03\x14\x03" +
		"\x14\x03\x15\x03\x15\x03\x15\x06\x15\u0101\n\x15\r\x15\x0E\x15\u0102\x03" +
		"\x16\x03\x16\x03\x16\x06\x16\u0108\n\x16\r\x16\x0E\x16\u0109\x03\x17\x03" +
		"\x17\x03\x17\x03\x18\x03\x18\x03\x18\x06\x18\u0112\n\x18\r\x18\x0E\x18" +
		"\u0113\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x05\x1A\u011E\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03 \x02\x02\x02!\x02\x02\x04" +
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
		"\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02." +
		"\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02\x02\x03\x03\x02\x14\x16\x02" +
		"\u0141\x02C\x03\x02\x02\x02\x04H\x03\x02\x02\x02\x06_\x03\x02\x02\x02" +
		"\ba\x03\x02\x02\x02\nk\x03\x02\x02\x02\fz\x03\x02\x02\x02\x0E\x80\x03" +
		"\x02\x02\x02\x10\x82\x03\x02\x02\x02\x12\x8A\x03\x02\x02\x02\x14\x8E\x03" +
		"\x02\x02\x02\x16\x97\x03\x02\x02\x02\x18\xA0\x03\x02\x02\x02\x1A\xA9\x03" +
		"\x02\x02\x02\x1C\xB5\x03\x02\x02\x02\x1E\xC1\x03\x02\x02\x02 \xD7\x03" +
		"\x02\x02\x02\"\xD9\x03\x02\x02\x02$\xE8\x03\x02\x02\x02&\xF1\x03\x02\x02" +
		"\x02(\xFD\x03\x02\x02\x02*\u0104\x03\x02\x02\x02,\u010B\x03\x02\x02\x02" +
		".\u010E\x03\x02\x02\x020\u0115\x03\x02\x02\x022\u011D\x03\x02\x02\x02" +
		"4\u011F\x03\x02\x02\x026\u0123\x03\x02\x02\x028\u0128\x03\x02\x02\x02" +
		":\u012B\x03\x02\x02\x02<\u012E\x03\x02\x02\x02>\u0131\x03\x02\x02\x02" +
		"@B\x05\x04\x03\x02A@\x03\x02\x02\x02BE\x03\x02\x02\x02CA\x03\x02\x02\x02" +
		"CD\x03\x02\x02\x02DF\x03\x02\x02\x02EC\x03\x02\x02\x02FG\x07\x02\x02\x03" +
		"G\x03\x03\x02\x02\x02HI\x07\x03\x02\x02IX\x07\x1E\x02\x02JM\x05\x06\x04" +
		"\x02KM\x05.\x18\x02LJ\x03\x02\x02\x02LK\x03\x02\x02\x02MP\x03\x02\x02" +
		"\x02NL\x03\x02\x02\x02NO\x03\x02\x02\x02OY\x03\x02\x02\x02PN\x03\x02\x02" +
		"\x02QT\x05\f\x07\x02RT\x05.\x18\x02SQ\x03\x02\x02\x02SR\x03\x02\x02\x02" +
		"TW\x03\x02\x02\x02US\x03\x02\x02\x02UV\x03\x02\x02\x02VY\x03\x02\x02\x02" +
		"WU\x03\x02\x02\x02XN\x03\x02\x02\x02XU\x03\x02\x02\x02YZ\x03\x02\x02\x02" +
		"Z[\x050\x19\x02[\x05\x03\x02\x02\x02\\`\x05\b\x05\x02]`\x05\n\x06\x02" +
		"^`\x05,\x17\x02_\\\x03\x02\x02\x02_]\x03\x02\x02\x02_^\x03\x02\x02\x02" +
		"`\x07\x03\x02\x02\x02af\x07\x04\x02\x02be\x05\f\x07\x02ce\x05.\x18\x02" +
		"db\x03\x02\x02\x02dc\x03\x02\x02\x02eh\x03\x02\x02\x02fd\x03\x02\x02\x02" +
		"fg\x03\x02\x02\x02gi\x03\x02\x02\x02hf\x03\x02\x02\x02ij\x050\x19\x02" +
		"j\t\x03\x02\x02\x02kl\x07\x05\x02\x02lq\x07\x1E\x02\x02mp\x05\f\x07\x02" +
		"np\x05.\x18\x02om\x03\x02\x02\x02on\x03\x02\x02\x02ps\x03\x02\x02\x02" +
		"qo\x03\x02\x02\x02qr\x03\x02\x02\x02rt\x03\x02\x02\x02sq\x03\x02\x02\x02" +
		"tu\x050\x19\x02u\v\x03\x02\x02\x02v{\x05\x1E\x10\x02w{\x05\x1C\x0F\x02" +
		"x{\x05\x1A\x0E\x02y{\x05\x0E\b\x02zv\x03\x02\x02\x02zw\x03\x02\x02\x02" +
		"zx\x03\x02\x02\x02zy\x03\x02\x02\x02{\r\x03\x02\x02\x02|\x81\x05\x10\t" +
		"\x02}\x81\x05\x14\v\x02~\x81\x05\x16\f\x02\x7F\x81\x05\x18\r\x02\x80|" +
		"\x03\x02\x02\x02\x80}\x03\x02\x02\x02\x80~\x03\x02\x02\x02\x80\x7F\x03" +
		"\x02\x02\x02\x81\x0F\x03\x02\x02\x02\x82\x84\x07\x06\x02\x02\x83\x85\x05" +
		"\x12\n\x02\x84\x83\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86\x84\x03" +
		"\x02\x02\x02\x86\x87\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x89\x05" +
		"0\x19\x02\x89\x11\x03\x02\x02\x02\x8A\x8B\x07\x03\x02\x02\x8B\x8C\x07" +
		"\x07\x02\x02\x8C\x8D\x07\x1E\x02\x02\x8D\x13\x03\x02\x02\x02\x8E\x92\x07" +
		"\b\x02\x02\x8F\x91\x05.\x18\x02\x90\x8F\x03\x02\x02\x02\x91\x94\x03\x02" +
		"\x02\x02\x92\x90\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x95\x03\x02" +
		"\x02\x02\x94\x92\x03\x02\x02\x02\x95\x96\x050\x19\x02\x96\x15\x03\x02" +
		"\x02\x02\x97\x9B\x07\t\x02\x02\x98\x9A\x05.\x18\x02\x99\x98\x03\x02\x02" +
		"\x02\x9A\x9D\x03\x02\x02\x02\x9B\x99\x03\x02\x02\x02\x9B\x9C\x03\x02\x02" +
		"\x02\x9C\x9E\x03\x02\x02\x02\x9D\x9B\x03\x02\x02\x02\x9E\x9F\x050\x19" +
		"\x02\x9F\x17\x03\x02\x02\x02\xA0\xA4\x07\n\x02\x02\xA1\xA3\x05.\x18\x02" +
		"\xA2\xA1\x03\x02\x02\x02\xA3\xA6\x03\x02\x02\x02\xA4\xA2\x03\x02\x02\x02" +
		"\xA4\xA5\x03\x02\x02\x02\xA5\xA7\x03\x02\x02\x02\xA6\xA4\x03\x02\x02\x02" +
		"\xA7\xA8\x050\x19\x02\xA8\x19\x03\x02\x02\x02\xA9\xAA\x07\v\x02\x02\xAA" +
		"\xAB\x07\x07\x02\x02\xAB\xAC\x07\x1E\x02\x02\xAC\xB0\x07\x1E\x02\x02\xAD" +
		"\xAF\x05.\x18\x02\xAE\xAD\x03\x02\x02\x02\xAF\xB2\x03\x02\x02\x02\xB0" +
		"\xAE\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\xB3\x03\x02\x02\x02\xB2" +
		"\xB0\x03\x02\x02\x02\xB3\xB4\x050\x19\x02\xB4\x1B\x03\x02\x02\x02\xB5" +
		"\xB6\x07\f\x02\x02\xB6\xB7\x07\x07\x02\x02\xB7\xB8\x07\x1E\x02\x02\xB8" +
		"\xBC\x07\x1E\x02\x02\xB9\xBB\x05.\x18\x02\xBA\xB9\x03\x02\x02\x02\xBB" +
		"\xBE\x03\x02\x02\x02\xBC\xBA\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD" +
		"\xBF\x03\x02\x02\x02\xBE\xBC\x03\x02\x02\x02\xBF\xC0\x050\x19\x02\xC0" +
		"\x1D\x03\x02\x02\x02\xC1\xC2\x07\r\x02\x02\xC2\xC3\x07\x07\x02\x02\xC3" +
		"\xC4\x07\x1E\x02\x02\xC4\xCD\x07\x1E\x02\x02\xC5\xC7\x05 \x11\x02\xC6" +
		"\xC5\x03\x02\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC8" +
		"\xC9\x03\x02\x02\x02\xC9\xCC\x03\x02\x02\x02\xCA\xCC\x05.\x18\x02\xCB" +
		"\xC6\x03\x02\x02\x02\xCB\xCA\x03\x02\x02\x02\xCC\xCF\x03\x02\x02\x02\xCD" +
		"\xCB\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xD0\x03\x02\x02\x02\xCF" +
		"\xCD\x03\x02\x02\x02\xD0\xD1\x050\x19\x02\xD1\x1F\x03\x02\x02\x02\xD2" +
		"\xD8\x05\"\x12\x02\xD3\xD8\x05$\x13\x02\xD4\xD8\x05&\x14\x02\xD5\xD8\x05" +
		"(\x15\x02\xD6\xD8\x05*\x16\x02\xD7\xD2\x03\x02\x02\x02\xD7\xD3\x03\x02" +
		"\x02\x02\xD7\xD4\x03\x02\x02\x02\xD7\xD5\x03\x02\x02\x02\xD7\xD6\x03\x02" +
		"\x02\x02\xD8!\x03\x02\x02\x02\xD9\xDA\x07\x0E\x02\x02\xDA\xDC\x07\x07" +
		"\x02\x02\xDB\xDD\x07\x1E\x02\x02\xDC\xDB\x03\x02\x02\x02\xDD\xDE\x03\x02" +
		"\x02\x02\xDE\xDC\x03\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\xE3\x03\x02" +
		"\x02\x02\xE0\xE2\x05.\x18\x02\xE1\xE0\x03\x02\x02\x02\xE2\xE5\x03\x02" +
		"\x02\x02\xE3\xE1\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE6\x03\x02" +
		"\x02\x02\xE5\xE3\x03\x02\x02\x02\xE6\xE7\x050\x19\x02\xE7#\x03\x02\x02" +
		"\x02\xE8\xEC\x07\x0F\x02\x02\xE9\xEB\x05.\x18\x02\xEA\xE9\x03\x02\x02" +
		"\x02\xEB\xEE\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xEC\xED\x03\x02\x02" +
		"\x02\xED\xEF\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEF\xF0\x050\x19" +
		"\x02\xF0%\x03\x02\x02\x02\xF1\xF2\x07\x10\x02\x02\xF2\xF3\x07\x07\x02" +
		"\x02\xF3\xF4\x07\x1E\x02\x02\xF4\xF8\x07\x1E\x02\x02\xF5\xF7\x05.\x18" +
		"\x02\xF6\xF5\x03\x02\x02\x02\xF7\xFA\x03\x02\x02\x02\xF8\xF6\x03\x02\x02" +
		"\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFB\x03\x02\x02\x02\xFA\xF8\x03\x02\x02" +
		"\x02\xFB\xFC\x050\x19\x02\xFC\'\x03\x02\x02\x02\xFD\xFE\x07\x11\x02\x02" +
		"\xFE\u0100\x07\x07\x02\x02\xFF\u0101\x07\x1E\x02\x02\u0100\xFF\x03\x02" +
		"\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102\u0100\x03\x02\x02\x02\u0102" +
		"\u0103\x03\x02\x02\x02\u0103)\x03\x02\x02\x02\u0104\u0105\x07\x12\x02" +
		"\x02\u0105\u0107\x07\x07\x02\x02\u0106\u0108\x07\x1E\x02\x02\u0107\u0106" +
		"\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\u0107\x03\x02\x02\x02" +
		"\u0109\u010A\x03\x02\x02\x02\u010A+\x03\x02\x02\x02\u010B\u010C\x07\x13" +
		"\x02\x02\u010C\u010D\x07\x1E\x02\x02\u010D-\x03\x02\x02\x02\u010E\u010F" +
		"\x07\x1E\x02\x02\u010F\u0111\x07\x07\x02\x02\u0110\u0112\x052\x1A\x02" +
		"\u0111\u0110\x03\x02\x02\x02\u0112\u0113\x03\x02\x02\x02\u0113\u0111\x03" +
		"\x02\x02\x02\u0113\u0114\x03\x02\x02\x02\u0114/\x03\x02\x02\x02\u0115" +
		"\u0116\t\x02\x02\x02\u01161\x03\x02\x02\x02\u0117\u011E\x05> \x02\u0118" +
		"\u011E\x054\x1B\x02\u0119\u011E\x07\x1E\x02\x02\u011A\u011E\x07\x1A\x02" +
		"\x02\u011B\u011E\x07\x1C\x02\x02\u011C\u011E\x07\x1D\x02\x02\u011D\u0117" +
		"\x03\x02\x02\x02\u011D\u0118\x03\x02\x02\x02\u011D\u0119\x03\x02\x02\x02" +
		"\u011D\u011A\x03\x02\x02\x02\u011D\u011B\x03\x02\x02\x02\u011D\u011C\x03" +
		"\x02\x02\x02\u011E3\x03\x02\x02\x02\u011F\u0120\x07\x1E\x02\x02\u0120" +
		"\u0121\x07\x17\x02\x02\u0121\u0122\x07\x1E\x02\x02\u01225\x03\x02\x02" +
		"\x02\u0123\u0124\x07\x1B\x02\x02\u0124\u0125\x07\x1B\x02\x02\u0125\u0126" +
		"\x07\x1B\x02\x02\u0126\u0127\x07\x1B\x02\x02\u01277\x03\x02\x02\x02\u0128" +
		"\u0129\x07\x1A\x02\x02\u0129\u012A\x07\x18\x02\x02\u012A9\x03\x02\x02" +
		"\x02\u012B\u012C\x07\x1A\x02\x02\u012C\u012D\x07\x1A\x02\x02\u012D;\x03" +
		"\x02\x02\x02\u012E\u012F\x07\x1C\x02\x02\u012F\u0130\x07\x1C\x02\x02\u0130" +
		"=\x03\x02\x02\x02\u0131\u0132\x07\x19\x02\x02\u0132\u0133\x07\x1E\x02" +
		"\x02\u0133\u0134\x07\x19\x02\x02\u0134?\x03\x02\x02\x02!CLNSUX_dfoqz\x80" +
		"\x86\x92\x9B\xA4\xB0\xBC\xC8\xCB\xCD\xD7\xDE\xE3\xEC\xF8\u0102\u0109\u0113" +
		"\u011D";
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
	public moduleBlocks(): ModuleBlocksContext[];
	public moduleBlocks(i: number): ModuleBlocksContext;
	public moduleBlocks(i?: number): ModuleBlocksContext | ModuleBlocksContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModuleBlocksContext);
		} else {
			return this.getRuleContext(i, ModuleBlocksContext);
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
	public modules(): ModulesContext[];
	public modules(i: number): ModulesContext;
	public modules(i?: number): ModulesContext | ModulesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModulesContext);
		} else {
			return this.getRuleContext(i, ModulesContext);
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
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
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
	public INT(): TerminalNode { return this.getToken(MapIniParser.INT, 0); }
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


