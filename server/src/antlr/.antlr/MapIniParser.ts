// Generated from ./server/src/antlr/MapIni.g4 by ANTLR 4.9.0-SNAPSHOT


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
	public static readonly INT = 20;
	public static readonly INT256 = 21;
	public static readonly FLOAT = 22;
	public static readonly BOOL = 23;
	public static readonly ID = 24;
	public static readonly SKIp = 25;
	public static readonly COMMENT = 26;
	public static readonly RULE_program = 0;
	public static readonly RULE_object = 1;
	public static readonly RULE_moduleBlocks = 2;
	public static readonly RULE_addModuleBlock = 3;
	public static readonly RULE_replaceModuleBlock = 4;
	public static readonly RULE_modules = 5;
	public static readonly RULE_behaviormoduleBlock = 6;
	public static readonly RULE_bodyModuleBlock = 7;
	public static readonly RULE_drawModuleBlock = 8;
	public static readonly RULE_conditionStateBlocks = 9;
	public static readonly RULE_removeModuleBlock = 10;
	public static readonly RULE_property = 11;
	public static readonly RULE_end = 12;
	public static readonly RULE_value = 13;
	public static readonly RULE_ftype = 14;
	public static readonly RULE_rgb = 15;
	public static readonly RULE_procent = 16;
	public static readonly RULE_intRang = 17;
	public static readonly RULE_floatRang = 18;
	public static readonly RULE_quoutedID = 19;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "object", "moduleBlocks", "addModuleBlock", "replaceModuleBlock", 
		"modules", "behaviormoduleBlock", "bodyModuleBlock", "drawModuleBlock", 
		"conditionStateBlocks", "removeModuleBlock", "property", "end", "value", 
		"ftype", "rgb", "procent", "intRang", "floatRang", "quoutedID",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'Object'", "'AddModule'", "'ReplaceModule'", "'Behavior'", 
		"'='", "'Body'", "'Draw'", "'ConditionState'", "'DefaultConditionState'", 
		"'TransitionState'", "'AliasConditionState'", "'IgnoreConditionStates'", 
		"'RemoveModule'", "'End'", "'end'", "'END'", "'.'", "'%'", "'\"'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "INT", 
		"INT256", "FLOAT", "BOOL", "ID", "SKIp", "COMMENT",
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
			this.state = 43;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.T__0) {
				{
				{
				this.state = 40;
				this.object();
				}
				}
				this.state = 45;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 46;
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
			this.state = 48;
			this.match(MapIniParser.T__0);
			this.state = 49;
			this.match(MapIniParser.ID);
			this.state = 54;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MapIniParser.T__1) | (1 << MapIniParser.T__2) | (1 << MapIniParser.T__12) | (1 << MapIniParser.ID))) !== 0)) {
				{
				this.state = 52;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case MapIniParser.T__1:
				case MapIniParser.T__2:
				case MapIniParser.T__12:
					{
					this.state = 50;
					this.moduleBlocks();
					}
					break;
				case MapIniParser.ID:
					{
					this.state = 51;
					this.property();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 56;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 57;
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
			this.state = 62;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapIniParser.T__1:
				_localctx = new AddModuleContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 59;
				this.addModuleBlock();
				}
				break;
			case MapIniParser.T__2:
				_localctx = new ReplaceModuleContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 60;
				this.replaceModuleBlock();
				}
				break;
			case MapIniParser.T__12:
				_localctx = new RemoveModuleContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 61;
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
			this.state = 64;
			this.match(MapIniParser.T__1);
			this.state = 69;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MapIniParser.T__3) | (1 << MapIniParser.T__5) | (1 << MapIniParser.T__6) | (1 << MapIniParser.ID))) !== 0)) {
				{
				this.state = 67;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case MapIniParser.T__3:
				case MapIniParser.T__5:
				case MapIniParser.T__6:
					{
					this.state = 65;
					this.modules();
					}
					break;
				case MapIniParser.ID:
					{
					this.state = 66;
					this.property();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 71;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 72;
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
			this.state = 74;
			this.match(MapIniParser.T__2);
			this.state = 75;
			this.match(MapIniParser.ID);
			this.state = 80;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MapIniParser.T__3) | (1 << MapIniParser.T__5) | (1 << MapIniParser.T__6) | (1 << MapIniParser.ID))) !== 0)) {
				{
				this.state = 78;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case MapIniParser.T__3:
				case MapIniParser.T__5:
				case MapIniParser.T__6:
					{
					this.state = 76;
					this.modules();
					}
					break;
				case MapIniParser.ID:
					{
					this.state = 77;
					this.property();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 82;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 83;
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
			this.state = 88;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapIniParser.T__6:
				_localctx = new DrawModuleContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 85;
				this.drawModuleBlock();
				}
				break;
			case MapIniParser.T__5:
				_localctx = new BodyModuleContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 86;
				this.bodyModuleBlock();
				}
				break;
			case MapIniParser.T__3:
				_localctx = new BehaviorModuleContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 87;
				this.behaviormoduleBlock();
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
	public behaviormoduleBlock(): BehaviormoduleBlockContext {
		let _localctx: BehaviormoduleBlockContext = new BehaviormoduleBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, MapIniParser.RULE_behaviormoduleBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 90;
			this.match(MapIniParser.T__3);
			this.state = 91;
			this.match(MapIniParser.T__4);
			this.state = 92;
			this.match(MapIniParser.ID);
			this.state = 93;
			this.match(MapIniParser.ID);
			this.state = 97;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.ID) {
				{
				{
				this.state = 94;
				this.property();
				}
				}
				this.state = 99;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public bodyModuleBlock(): BodyModuleBlockContext {
		let _localctx: BodyModuleBlockContext = new BodyModuleBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, MapIniParser.RULE_bodyModuleBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this.match(MapIniParser.T__5);
			this.state = 103;
			this.match(MapIniParser.T__4);
			this.state = 104;
			this.match(MapIniParser.ID);
			this.state = 105;
			this.match(MapIniParser.ID);
			this.state = 109;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.ID) {
				{
				{
				this.state = 106;
				this.property();
				}
				}
				this.state = 111;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 112;
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
		this.enterRule(_localctx, 16, MapIniParser.RULE_drawModuleBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 114;
			this.match(MapIniParser.T__6);
			this.state = 115;
			this.match(MapIniParser.T__4);
			this.state = 116;
			this.match(MapIniParser.ID);
			this.state = 117;
			this.match(MapIniParser.ID);
			this.state = 126;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MapIniParser.T__7) | (1 << MapIniParser.T__8) | (1 << MapIniParser.T__9) | (1 << MapIniParser.T__10) | (1 << MapIniParser.T__11) | (1 << MapIniParser.ID))) !== 0)) {
				{
				this.state = 124;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case MapIniParser.T__7:
				case MapIniParser.T__8:
				case MapIniParser.T__9:
				case MapIniParser.T__10:
				case MapIniParser.T__11:
					{
					this.state = 119;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 118;
							this.conditionStateBlocks();
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 121;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					break;
				case MapIniParser.ID:
					{
					this.state = 123;
					this.property();
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
			this.state = 129;
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
		this.enterRule(_localctx, 18, MapIniParser.RULE_conditionStateBlocks);
		let _la: number;
		try {
			let _alt: number;
			this.state = 178;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapIniParser.T__7:
				_localctx = new ConditionStateContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 131;
				this.match(MapIniParser.T__7);
				this.state = 132;
				this.match(MapIniParser.T__4);
				this.state = 134;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 133;
						this.match(MapIniParser.ID);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 136;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === MapIniParser.ID) {
					{
					{
					this.state = 138;
					this.property();
					}
					}
					this.state = 143;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 144;
				this.end();
				}
				break;
			case MapIniParser.T__8:
				_localctx = new DefaultConditionStateContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 145;
				this.match(MapIniParser.T__8);
				this.state = 149;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === MapIniParser.ID) {
					{
					{
					this.state = 146;
					this.property();
					}
					}
					this.state = 151;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 152;
				this.end();
				}
				break;
			case MapIniParser.T__9:
				_localctx = new TransitionStateContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 153;
				this.match(MapIniParser.T__9);
				this.state = 154;
				this.match(MapIniParser.T__4);
				this.state = 155;
				this.match(MapIniParser.ID);
				this.state = 156;
				this.match(MapIniParser.ID);
				this.state = 160;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === MapIniParser.ID) {
					{
					{
					this.state = 157;
					this.property();
					}
					}
					this.state = 162;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 163;
				this.end();
				}
				break;
			case MapIniParser.T__10:
				_localctx = new AliasConditionStateContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 164;
				this.match(MapIniParser.T__10);
				this.state = 165;
				this.match(MapIniParser.T__4);
				this.state = 167;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 166;
						this.match(MapIniParser.ID);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 169;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case MapIniParser.T__11:
				_localctx = new IgnoreConditionStatesContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 171;
				this.match(MapIniParser.T__11);
				this.state = 172;
				this.match(MapIniParser.T__4);
				this.state = 174;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 173;
						this.match(MapIniParser.ID);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 176;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	public removeModuleBlock(): RemoveModuleBlockContext {
		let _localctx: RemoveModuleBlockContext = new RemoveModuleBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, MapIniParser.RULE_removeModuleBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 180;
			this.match(MapIniParser.T__12);
			this.state = 181;
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
		this.enterRule(_localctx, 22, MapIniParser.RULE_property);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 183;
			this.match(MapIniParser.ID);
			this.state = 184;
			this.match(MapIniParser.T__4);
			this.state = 186;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 185;
					this.value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 188;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
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
		this.enterRule(_localctx, 24, MapIniParser.RULE_end);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 190;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MapIniParser.T__13) | (1 << MapIniParser.T__14) | (1 << MapIniParser.T__15))) !== 0))) {
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
		this.enterRule(_localctx, 26, MapIniParser.RULE_value);
		try {
			this.state = 198;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				_localctx = new StringContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 192;
				this.quoutedID();
				}
				break;

			case 2:
				_localctx = new FiletypeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 193;
				this.ftype();
				}
				break;

			case 3:
				_localctx = new IdContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 194;
				this.match(MapIniParser.ID);
				}
				break;

			case 4:
				_localctx = new IntContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 195;
				this.match(MapIniParser.INT);
				}
				break;

			case 5:
				_localctx = new FloatContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 196;
				this.match(MapIniParser.FLOAT);
				}
				break;

			case 6:
				_localctx = new BoolContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 197;
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
		this.enterRule(_localctx, 28, MapIniParser.RULE_ftype);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 200;
			this.match(MapIniParser.ID);
			this.state = 201;
			this.match(MapIniParser.T__16);
			this.state = 202;
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
		this.enterRule(_localctx, 30, MapIniParser.RULE_rgb);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 204;
			this.match(MapIniParser.INT256);
			this.state = 205;
			this.match(MapIniParser.INT256);
			this.state = 206;
			this.match(MapIniParser.INT256);
			this.state = 207;
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
		this.enterRule(_localctx, 32, MapIniParser.RULE_procent);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 209;
			this.match(MapIniParser.INT);
			this.state = 210;
			this.match(MapIniParser.T__17);
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
		this.enterRule(_localctx, 34, MapIniParser.RULE_intRang);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 212;
			this.match(MapIniParser.INT);
			this.state = 213;
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
		this.enterRule(_localctx, 36, MapIniParser.RULE_floatRang);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 215;
			this.match(MapIniParser.FLOAT);
			this.state = 216;
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
		this.enterRule(_localctx, 38, MapIniParser.RULE_quoutedID);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 218;
			this.match(MapIniParser.T__18);
			this.state = 219;
			this.match(MapIniParser.ID);
			this.state = 220;
			this.match(MapIniParser.T__18);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1C\xE1\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x07\x02,\n\x02\f\x02\x0E" +
		"\x02/\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x07\x037\n" +
		"\x03\f\x03\x0E\x03:\v\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x05" +
		"\x04A\n\x04\x03\x05\x03\x05\x03\x05\x07\x05F\n\x05\f\x05\x0E\x05I\v\x05" +
		"\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06Q\n\x06\f\x06" +
		"\x0E\x06T\v\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x05\x07[\n\x07" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x07\bb\n\b\f\b\x0E\be\v\b\x03\b\x03\b\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x07\tn\n\t\f\t\x0E\tq\v\t\x03\t\x03\t\x03\n" +
		"\x03\n\x03\n\x03\n\x03\n\x06\nz\n\n\r\n\x0E\n{\x03\n\x07\n\x7F\n\n\f\n" +
		"\x0E\n\x82\v\n\x03\n\x03\n\x03\v\x03\v\x03\v\x06\v\x89\n\v\r\v\x0E\v\x8A" +
		"\x03\v\x07\v\x8E\n\v\f\v\x0E\v\x91\v\v\x03\v\x03\v\x03\v\x07\v\x96\n\v" +
		"\f\v\x0E\v\x99\v\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\xA1\n\v\f" +
		"\v\x0E\v\xA4\v\v\x03\v\x03\v\x03\v\x03\v\x06\v\xAA\n\v\r\v\x0E\v\xAB\x03" +
		"\v\x03\v\x03\v\x06\v\xB1\n\v\r\v\x0E\v\xB2\x05\v\xB5\n\v\x03\f\x03\f\x03" +
		"\f\x03\r\x03\r\x03\r\x06\r\xBD\n\r\r\r\x0E\r\xBE\x03\x0E\x03\x0E\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xC9\n\x0F\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03" +
		"\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x02\x02\x02\x16\x02\x02\x04\x02\x06\x02\b" +
		"\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02" +
		"\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02\x02\x03\x03\x02\x10\x12\x02" +
		"\xEC\x02-\x03\x02\x02\x02\x042\x03\x02\x02\x02\x06@\x03\x02\x02\x02\b" +
		"B\x03\x02\x02\x02\nL\x03\x02\x02\x02\fZ\x03\x02\x02\x02\x0E\\\x03\x02" +
		"\x02\x02\x10h\x03\x02\x02\x02\x12t\x03\x02\x02\x02\x14\xB4\x03\x02\x02" +
		"\x02\x16\xB6\x03\x02\x02\x02\x18\xB9\x03\x02\x02\x02\x1A\xC0\x03\x02\x02" +
		"\x02\x1C\xC8\x03\x02\x02\x02\x1E\xCA\x03\x02\x02\x02 \xCE\x03\x02\x02" +
		"\x02\"\xD3\x03\x02\x02\x02$\xD6\x03\x02\x02\x02&\xD9\x03\x02\x02\x02(" +
		"\xDC\x03\x02\x02\x02*,\x05\x04\x03\x02+*\x03\x02\x02\x02,/\x03\x02\x02" +
		"\x02-+\x03\x02\x02\x02-.\x03\x02\x02\x02.0\x03\x02\x02\x02/-\x03\x02\x02" +
		"\x0201\x07\x02\x02\x031\x03\x03\x02\x02\x0223\x07\x03\x02\x0238\x07\x1A" +
		"\x02\x0247\x05\x06\x04\x0257\x05\x18\r\x0264\x03\x02\x02\x0265\x03\x02" +
		"\x02\x027:\x03\x02\x02\x0286\x03\x02\x02\x0289\x03\x02\x02\x029;\x03\x02" +
		"\x02\x02:8\x03\x02\x02\x02;<\x05\x1A\x0E\x02<\x05\x03\x02\x02\x02=A\x05" +
		"\b\x05\x02>A\x05\n\x06\x02?A\x05\x16\f\x02@=\x03\x02\x02\x02@>\x03\x02" +
		"\x02\x02@?\x03\x02\x02\x02A\x07\x03\x02\x02\x02BG\x07\x04\x02\x02CF\x05" +
		"\f\x07\x02DF\x05\x18\r\x02EC\x03\x02\x02\x02ED\x03\x02\x02\x02FI\x03\x02" +
		"\x02\x02GE\x03\x02\x02\x02GH\x03\x02\x02\x02HJ\x03\x02\x02\x02IG\x03\x02" +
		"\x02\x02JK\x05\x1A\x0E\x02K\t\x03\x02\x02\x02LM\x07\x05\x02\x02MR\x07" +
		"\x1A\x02\x02NQ\x05\f\x07\x02OQ\x05\x18\r\x02PN\x03\x02\x02\x02PO\x03\x02" +
		"\x02\x02QT\x03\x02\x02\x02RP\x03\x02\x02\x02RS\x03\x02\x02\x02SU\x03\x02" +
		"\x02\x02TR\x03\x02\x02\x02UV\x05\x1A\x0E\x02V\v\x03\x02\x02\x02W[\x05" +
		"\x12\n\x02X[\x05\x10\t\x02Y[\x05\x0E\b\x02ZW\x03\x02\x02\x02ZX\x03\x02" +
		"\x02\x02ZY\x03\x02\x02\x02[\r\x03\x02\x02\x02\\]\x07\x06\x02\x02]^\x07" +
		"\x07\x02\x02^_\x07\x1A\x02\x02_c\x07\x1A\x02\x02`b\x05\x18\r\x02a`\x03" +
		"\x02\x02\x02be\x03\x02\x02\x02ca\x03\x02\x02\x02cd\x03\x02\x02\x02df\x03" +
		"\x02\x02\x02ec\x03\x02\x02\x02fg\x05\x1A\x0E\x02g\x0F\x03\x02\x02\x02" +
		"hi\x07\b\x02\x02ij\x07\x07\x02\x02jk\x07\x1A\x02\x02ko\x07\x1A\x02\x02" +
		"ln\x05\x18\r\x02ml\x03\x02\x02\x02nq\x03\x02\x02\x02om\x03\x02\x02\x02" +
		"op\x03\x02\x02\x02pr\x03\x02\x02\x02qo\x03\x02\x02\x02rs\x05\x1A\x0E\x02" +
		"s\x11\x03\x02\x02\x02tu\x07\t\x02\x02uv\x07\x07\x02\x02vw\x07\x1A\x02" +
		"\x02w\x80\x07\x1A\x02\x02xz\x05\x14\v\x02yx\x03\x02\x02\x02z{\x03\x02" +
		"\x02\x02{y\x03\x02\x02\x02{|\x03\x02\x02\x02|\x7F\x03\x02\x02\x02}\x7F" +
		"\x05\x18\r\x02~y\x03\x02\x02\x02~}\x03\x02\x02\x02\x7F\x82\x03\x02\x02" +
		"\x02\x80~\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81\x83\x03\x02\x02" +
		"\x02\x82\x80\x03\x02\x02\x02\x83\x84\x05\x1A\x0E\x02\x84\x13\x03\x02\x02" +
		"\x02\x85\x86\x07\n\x02\x02\x86\x88\x07\x07\x02\x02\x87\x89\x07\x1A\x02" +
		"\x02\x88\x87\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x88\x03\x02\x02" +
		"\x02\x8A\x8B\x03\x02\x02\x02\x8B\x8F\x03\x02\x02\x02\x8C\x8E\x05\x18\r" +
		"\x02\x8D\x8C\x03\x02\x02\x02\x8E\x91\x03\x02\x02\x02\x8F\x8D\x03\x02\x02" +
		"\x02\x8F\x90\x03\x02\x02\x02\x90\x92\x03\x02\x02\x02\x91\x8F\x03\x02\x02" +
		"\x02\x92\xB5\x05\x1A\x0E\x02\x93\x97\x07\v\x02\x02\x94\x96\x05\x18\r\x02" +
		"\x95\x94\x03\x02\x02\x02\x96\x99\x03\x02\x02\x02\x97\x95\x03\x02\x02\x02" +
		"\x97\x98\x03\x02\x02\x02\x98\x9A\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02" +
		"\x9A\xB5\x05\x1A\x0E\x02\x9B\x9C\x07\f\x02\x02\x9C\x9D\x07\x07\x02\x02" +
		"\x9D\x9E\x07\x1A\x02\x02\x9E\xA2\x07\x1A\x02\x02\x9F\xA1\x05\x18\r\x02" +
		"\xA0\x9F\x03\x02\x02\x02\xA1\xA4\x03\x02\x02\x02\xA2\xA0\x03\x02\x02\x02" +
		"\xA2\xA3\x03\x02\x02\x02\xA3\xA5\x03\x02\x02\x02\xA4\xA2\x03\x02\x02\x02" +
		"\xA5\xB5\x05\x1A\x0E\x02\xA6\xA7\x07\r\x02\x02\xA7\xA9\x07\x07\x02\x02" +
		"\xA8\xAA\x07\x1A\x02\x02\xA9\xA8\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02" +
		"\xAB\xA9\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xB5\x03\x02\x02\x02" +
		"\xAD\xAE\x07\x0E\x02\x02\xAE\xB0\x07\x07\x02\x02\xAF\xB1\x07\x1A\x02\x02" +
		"\xB0\xAF\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB0\x03\x02\x02\x02" +
		"\xB2\xB3\x03\x02\x02\x02\xB3\xB5\x03\x02\x02\x02\xB4\x85\x03\x02\x02\x02" +
		"\xB4\x93\x03\x02\x02\x02\xB4\x9B\x03\x02\x02\x02\xB4\xA6\x03\x02\x02\x02" +
		"\xB4\xAD\x03\x02\x02\x02\xB5\x15\x03\x02\x02\x02\xB6\xB7\x07\x0F\x02\x02" +
		"\xB7\xB8\x07\x1A\x02\x02\xB8\x17\x03\x02\x02\x02\xB9\xBA\x07\x1A\x02\x02" +
		"\xBA\xBC\x07\x07\x02\x02\xBB\xBD\x05\x1C\x0F\x02\xBC\xBB\x03\x02\x02\x02" +
		"\xBD\xBE\x03\x02\x02\x02\xBE\xBC\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02" +
		"\xBF\x19\x03\x02\x02\x02\xC0\xC1\t\x02\x02\x02\xC1\x1B\x03\x02\x02\x02" +
		"\xC2\xC9\x05(\x15\x02\xC3\xC9\x05\x1E\x10\x02\xC4\xC9\x07\x1A\x02\x02" +
		"\xC5\xC9\x07\x16\x02\x02\xC6\xC9\x07\x18\x02\x02\xC7\xC9\x07\x19\x02\x02" +
		"\xC8\xC2\x03\x02\x02\x02\xC8\xC3\x03\x02\x02\x02\xC8\xC4\x03\x02\x02\x02" +
		"\xC8\xC5\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC8\xC7\x03\x02\x02\x02" +
		"\xC9\x1D\x03\x02\x02\x02\xCA\xCB\x07\x1A\x02\x02\xCB\xCC\x07\x13\x02\x02" +
		"\xCC\xCD\x07\x1A\x02\x02\xCD\x1F\x03\x02\x02\x02\xCE\xCF\x07\x17\x02\x02" +
		"\xCF\xD0\x07\x17\x02\x02\xD0\xD1\x07\x17\x02\x02\xD1\xD2\x07\x17\x02\x02" +
		"\xD2!\x03\x02\x02\x02\xD3\xD4\x07\x16\x02\x02\xD4\xD5\x07\x14\x02\x02" +
		"\xD5#\x03\x02\x02\x02\xD6\xD7\x07\x16\x02\x02\xD7\xD8\x07\x16\x02\x02" +
		"\xD8%\x03\x02\x02\x02\xD9\xDA\x07\x18\x02\x02\xDA\xDB\x07\x18\x02\x02" +
		"\xDB\'\x03\x02\x02\x02\xDC\xDD\x07\x15\x02\x02\xDD\xDE\x07\x1A\x02\x02" +
		"\xDE\xDF\x07\x15\x02\x02\xDF)\x03\x02\x02\x02\x19-68@EGPRZco{~\x80\x8A" +
		"\x8F\x97\xA2\xAB\xB2\xB4\xBE\xC8";
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_moduleBlocks; }
	public copyFrom(ctx: ModuleBlocksContext): void {
		super.copyFrom(ctx);
	}
}
export class AddModuleContext extends ModuleBlocksContext {
	public addModuleBlock(): AddModuleBlockContext {
		return this.getRuleContext(0, AddModuleBlockContext);
	}
	constructor(ctx: ModuleBlocksContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterAddModule) {
			listener.enterAddModule(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitAddModule) {
			listener.exitAddModule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitAddModule) {
			return visitor.visitAddModule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ReplaceModuleContext extends ModuleBlocksContext {
	public replaceModuleBlock(): ReplaceModuleBlockContext {
		return this.getRuleContext(0, ReplaceModuleBlockContext);
	}
	constructor(ctx: ModuleBlocksContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterReplaceModule) {
			listener.enterReplaceModule(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitReplaceModule) {
			listener.exitReplaceModule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitReplaceModule) {
			return visitor.visitReplaceModule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RemoveModuleContext extends ModuleBlocksContext {
	public removeModuleBlock(): RemoveModuleBlockContext {
		return this.getRuleContext(0, RemoveModuleBlockContext);
	}
	constructor(ctx: ModuleBlocksContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterRemoveModule) {
			listener.enterRemoveModule(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitRemoveModule) {
			listener.exitRemoveModule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitRemoveModule) {
			return visitor.visitRemoveModule(this);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_modules; }
	public copyFrom(ctx: ModulesContext): void {
		super.copyFrom(ctx);
	}
}
export class DrawModuleContext extends ModulesContext {
	public drawModuleBlock(): DrawModuleBlockContext {
		return this.getRuleContext(0, DrawModuleBlockContext);
	}
	constructor(ctx: ModulesContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterDrawModule) {
			listener.enterDrawModule(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitDrawModule) {
			listener.exitDrawModule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitDrawModule) {
			return visitor.visitDrawModule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BodyModuleContext extends ModulesContext {
	public bodyModuleBlock(): BodyModuleBlockContext {
		return this.getRuleContext(0, BodyModuleBlockContext);
	}
	constructor(ctx: ModulesContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterBodyModule) {
			listener.enterBodyModule(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitBodyModule) {
			listener.exitBodyModule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitBodyModule) {
			return visitor.visitBodyModule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BehaviorModuleContext extends ModulesContext {
	public behaviormoduleBlock(): BehaviormoduleBlockContext {
		return this.getRuleContext(0, BehaviormoduleBlockContext);
	}
	constructor(ctx: ModulesContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterBehaviorModule) {
			listener.enterBehaviorModule(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitBehaviorModule) {
			listener.exitBehaviorModule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitBehaviorModule) {
			return visitor.visitBehaviorModule(this);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_conditionStateBlocks; }
	public copyFrom(ctx: ConditionStateBlocksContext): void {
		super.copyFrom(ctx);
	}
}
export class ConditionStateContext extends ConditionStateBlocksContext {
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
	constructor(ctx: ConditionStateBlocksContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterConditionState) {
			listener.enterConditionState(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitConditionState) {
			listener.exitConditionState(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitConditionState) {
			return visitor.visitConditionState(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DefaultConditionStateContext extends ConditionStateBlocksContext {
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
	constructor(ctx: ConditionStateBlocksContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterDefaultConditionState) {
			listener.enterDefaultConditionState(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitDefaultConditionState) {
			listener.exitDefaultConditionState(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitDefaultConditionState) {
			return visitor.visitDefaultConditionState(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TransitionStateContext extends ConditionStateBlocksContext {
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
	constructor(ctx: ConditionStateBlocksContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterTransitionState) {
			listener.enterTransitionState(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitTransitionState) {
			listener.exitTransitionState(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitTransitionState) {
			return visitor.visitTransitionState(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AliasConditionStateContext extends ConditionStateBlocksContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapIniParser.ID);
		} else {
			return this.getToken(MapIniParser.ID, i);
		}
	}
	constructor(ctx: ConditionStateBlocksContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterAliasConditionState) {
			listener.enterAliasConditionState(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitAliasConditionState) {
			listener.exitAliasConditionState(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitAliasConditionState) {
			return visitor.visitAliasConditionState(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IgnoreConditionStatesContext extends ConditionStateBlocksContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapIniParser.ID);
		} else {
			return this.getToken(MapIniParser.ID, i);
		}
	}
	constructor(ctx: ConditionStateBlocksContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterIgnoreConditionStates) {
			listener.enterIgnoreConditionStates(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitIgnoreConditionStates) {
			listener.exitIgnoreConditionStates(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitIgnoreConditionStates) {
			return visitor.visitIgnoreConditionStates(this);
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


