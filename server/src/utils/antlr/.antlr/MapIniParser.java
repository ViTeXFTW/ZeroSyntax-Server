// Generated from g:/My Drive/ZeroSyntax/ZeroSyntax-Server/server/src/utils/antlr/MapIni.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class MapIniParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, T__29=30, T__30=31, 
		T__31=32, T__32=33, T__33=34, T__34=35, T__35=36, T__36=37, T__37=38, 
		T__38=39, INT=40, INT256=41, FLOAT=42, BOOL=43, ID=44, SKIp=45, COMMENT=46, 
		WS=47;
	public static final int
		RULE_program = 0, RULE_object = 1, RULE_objectProperty = 2, RULE_moduleBlocks = 3, 
		RULE_addModuleBlock = 4, RULE_addModuleProperty = 5, RULE_objectKindOfProperty = 6, 
		RULE_replaceModuleBlock = 7, RULE_replaceModuleProperty = 8, RULE_modules = 9, 
		RULE_objectBlocks = 10, RULE_objectPrerequisites = 11, RULE_objectPrerequisitesobjectProperty = 12, 
		RULE_objectPrerequisitessciencePropety = 13, RULE_objectWeaponSet = 14, 
		RULE_objectWeaponSetPropety = 15, RULE_objectArmorSet = 16, RULE_objectArmorSetPropety = 17, 
		RULE_objectUnitSpecificSounds = 18, RULE_objectUnitSpecificSoundsPropety = 19, 
		RULE_objectUnitSpecificFX = 20, RULE_objectUnitSpecificFXPropety = 21, 
		RULE_clientModuleBlock = 22, RULE_behaviormoduleBlock = 23, RULE_behaviorDecals = 24, 
		RULE_behaviorTurret = 25, RULE_bodyModuleBlock = 26, RULE_drawModuleBlock = 27, 
		RULE_drawModuleProperty = 28, RULE_conditionStateBlocks = 29, RULE_conditionStateBlock = 30, 
		RULE_defaultConditionStateBlock = 31, RULE_conditionStateProperty = 32, 
		RULE_transitionKeyProperty = 33, RULE_transitionStateBlock = 34, RULE_transitionStateProperty = 35, 
		RULE_aliasConditionStateBlock = 36, RULE_ignoreConditionStateBlock = 37, 
		RULE_removeModuleBlock = 38, RULE_turretProperty = 39, RULE_property = 40, 
		RULE_tturretProperty = 41, RULE_altTurretProperty = 42, RULE_end = 43, 
		RULE_value = 44, RULE_ftype = 45, RULE_rgb = 46, RULE_procent = 47, RULE_intRang = 48, 
		RULE_floatRang = 49, RULE_quoutedID = 50;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "object", "objectProperty", "moduleBlocks", "addModuleBlock", 
			"addModuleProperty", "objectKindOfProperty", "replaceModuleBlock", "replaceModuleProperty", 
			"modules", "objectBlocks", "objectPrerequisites", "objectPrerequisitesobjectProperty", 
			"objectPrerequisitessciencePropety", "objectWeaponSet", "objectWeaponSetPropety", 
			"objectArmorSet", "objectArmorSetPropety", "objectUnitSpecificSounds", 
			"objectUnitSpecificSoundsPropety", "objectUnitSpecificFX", "objectUnitSpecificFXPropety", 
			"clientModuleBlock", "behaviormoduleBlock", "behaviorDecals", "behaviorTurret", 
			"bodyModuleBlock", "drawModuleBlock", "drawModuleProperty", "conditionStateBlocks", 
			"conditionStateBlock", "defaultConditionStateBlock", "conditionStateProperty", 
			"transitionKeyProperty", "transitionStateBlock", "transitionStateProperty", 
			"aliasConditionStateBlock", "ignoreConditionStateBlock", "removeModuleBlock", 
			"turretProperty", "property", "tturretProperty", "altTurretProperty", 
			"end", "value", "ftype", "rgb", "procent", "intRang", "floatRang", "quoutedID"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'Object'", "'='", "'AddModule'", "'KindOf'", "'kindof'", "'KINDOF'", 
			"'ReplaceModule'", "'Prerequisites'", "'Science'", "'WeaponSet'", "'ArmorSet'", 
			"'UnitSpecificSounds'", "'UnitSpecificFX'", "'ClientUpdate'", "'Behavior'", 
			"'AttackAreaDecal'", "'TargetingReticleDecal'", "'GridDecalTemplate'", 
			"'Turret'", "'AltTurret'", "'Body'", "'Draw'", "'ConditionState'", "'DefaultConditionState'", 
			"'TransitionKey'", "'TransitionState'", "'AliasConditionState'", "'IgnoreConditionStates'", 
			"'RemoveModule'", "'turret'", "'TURRET'", "'altturret'", "'ALTTURRET'", 
			"'End'", "'end'", "'END'", "'.'", "'%'", "'\"'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, "INT", "INT256", "FLOAT", "BOOL", "ID", "SKIp", 
			"COMMENT", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "MapIni.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public MapIniParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(MapIniParser.EOF, 0); }
		public List<ObjectContext> object() {
			return getRuleContexts(ObjectContext.class);
		}
		public ObjectContext object(int i) {
			return getRuleContext(ObjectContext.class,i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(105);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__0) {
				{
				{
				setState(102);
				object();
				}
				}
				setState(107);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(108);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ObjectContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<ModulesContext> modules() {
			return getRuleContexts(ModulesContext.class);
		}
		public ModulesContext modules(int i) {
			return getRuleContext(ModulesContext.class,i);
		}
		public List<ObjectPropertyContext> objectProperty() {
			return getRuleContexts(ObjectPropertyContext.class);
		}
		public ObjectPropertyContext objectProperty(int i) {
			return getRuleContext(ObjectPropertyContext.class,i);
		}
		public List<ObjectKindOfPropertyContext> objectKindOfProperty() {
			return getRuleContexts(ObjectKindOfPropertyContext.class);
		}
		public ObjectKindOfPropertyContext objectKindOfProperty(int i) {
			return getRuleContext(ObjectKindOfPropertyContext.class,i);
		}
		public List<ModuleBlocksContext> moduleBlocks() {
			return getRuleContexts(ModuleBlocksContext.class);
		}
		public ModuleBlocksContext moduleBlocks(int i) {
			return getRuleContext(ModuleBlocksContext.class,i);
		}
		public ObjectContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_object; }
	}

	public final ObjectContext object() throws RecognitionException {
		ObjectContext _localctx = new ObjectContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_object);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(110);
			match(T__0);
			setState(111);
			match(ID);
			setState(128);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				{
				setState(117);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 17592192400752L) != 0)) {
					{
					setState(115);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case T__7:
					case T__9:
					case T__10:
					case T__11:
					case T__12:
					case T__13:
					case T__14:
					case T__20:
					case T__21:
						{
						setState(112);
						modules();
						}
						break;
					case ID:
						{
						setState(113);
						objectProperty();
						}
						break;
					case T__3:
					case T__4:
					case T__5:
						{
						setState(114);
						objectKindOfProperty();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					setState(119);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case 2:
				{
				setState(125);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 17592722931192L) != 0)) {
					{
					setState(123);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case T__2:
					case T__6:
					case T__7:
					case T__9:
					case T__10:
					case T__11:
					case T__12:
					case T__28:
						{
						setState(120);
						moduleBlocks();
						}
						break;
					case ID:
						{
						setState(121);
						objectProperty();
						}
						break;
					case T__3:
					case T__4:
					case T__5:
						{
						setState(122);
						objectKindOfProperty();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					setState(127);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			}
			setState(130);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ObjectPropertyContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public List<ValueContext> value() {
			return getRuleContexts(ValueContext.class);
		}
		public ValueContext value(int i) {
			return getRuleContext(ValueContext.class,i);
		}
		public ObjectPropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectProperty; }
	}

	public final ObjectPropertyContext objectProperty() throws RecognitionException {
		ObjectPropertyContext _localctx = new ObjectPropertyContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_objectProperty);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(132);
			match(ID);
			setState(133);
			match(T__1);
			setState(135); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(134);
					value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(137); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,6,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ModuleBlocksContext extends ParserRuleContext {
		public AddModuleBlockContext addModuleBlock() {
			return getRuleContext(AddModuleBlockContext.class,0);
		}
		public ReplaceModuleBlockContext replaceModuleBlock() {
			return getRuleContext(ReplaceModuleBlockContext.class,0);
		}
		public RemoveModuleBlockContext removeModuleBlock() {
			return getRuleContext(RemoveModuleBlockContext.class,0);
		}
		public ObjectBlocksContext objectBlocks() {
			return getRuleContext(ObjectBlocksContext.class,0);
		}
		public ModuleBlocksContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_moduleBlocks; }
	}

	public final ModuleBlocksContext moduleBlocks() throws RecognitionException {
		ModuleBlocksContext _localctx = new ModuleBlocksContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_moduleBlocks);
		try {
			setState(143);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__2:
				enterOuterAlt(_localctx, 1);
				{
				setState(139);
				addModuleBlock();
				}
				break;
			case T__6:
				enterOuterAlt(_localctx, 2);
				{
				setState(140);
				replaceModuleBlock();
				}
				break;
			case T__28:
				enterOuterAlt(_localctx, 3);
				{
				setState(141);
				removeModuleBlock();
				}
				break;
			case T__7:
			case T__9:
			case T__10:
			case T__11:
			case T__12:
				enterOuterAlt(_localctx, 4);
				{
				setState(142);
				objectBlocks();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AddModuleBlockContext extends ParserRuleContext {
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<ModulesContext> modules() {
			return getRuleContexts(ModulesContext.class);
		}
		public ModulesContext modules(int i) {
			return getRuleContext(ModulesContext.class,i);
		}
		public List<AddModulePropertyContext> addModuleProperty() {
			return getRuleContexts(AddModulePropertyContext.class);
		}
		public AddModulePropertyContext addModuleProperty(int i) {
			return getRuleContext(AddModulePropertyContext.class,i);
		}
		public List<ObjectKindOfPropertyContext> objectKindOfProperty() {
			return getRuleContexts(ObjectKindOfPropertyContext.class);
		}
		public ObjectKindOfPropertyContext objectKindOfProperty(int i) {
			return getRuleContext(ObjectKindOfPropertyContext.class,i);
		}
		public AddModuleBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_addModuleBlock; }
	}

	public final AddModuleBlockContext addModuleBlock() throws RecognitionException {
		AddModuleBlockContext _localctx = new AddModuleBlockContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_addModuleBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(145);
			match(T__2);
			setState(151);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 17592192400752L) != 0)) {
				{
				setState(149);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__7:
				case T__9:
				case T__10:
				case T__11:
				case T__12:
				case T__13:
				case T__14:
				case T__20:
				case T__21:
					{
					setState(146);
					modules();
					}
					break;
				case ID:
					{
					setState(147);
					addModuleProperty();
					}
					break;
				case T__3:
				case T__4:
				case T__5:
					{
					setState(148);
					objectKindOfProperty();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(153);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(154);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AddModulePropertyContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public List<ValueContext> value() {
			return getRuleContexts(ValueContext.class);
		}
		public ValueContext value(int i) {
			return getRuleContext(ValueContext.class,i);
		}
		public AddModulePropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_addModuleProperty; }
	}

	public final AddModulePropertyContext addModuleProperty() throws RecognitionException {
		AddModulePropertyContext _localctx = new AddModulePropertyContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_addModuleProperty);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(156);
			match(ID);
			setState(157);
			match(T__1);
			setState(159); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(158);
					value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(161); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ObjectKindOfPropertyContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(MapIniParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(MapIniParser.ID, i);
		}
		public ObjectKindOfPropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectKindOfProperty; }
	}

	public final ObjectKindOfPropertyContext objectKindOfProperty() throws RecognitionException {
		ObjectKindOfPropertyContext _localctx = new ObjectKindOfPropertyContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_objectKindOfProperty);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(163);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 112L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(164);
			match(T__1);
			setState(166); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(165);
					match(ID);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(168); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ReplaceModuleBlockContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<ModulesContext> modules() {
			return getRuleContexts(ModulesContext.class);
		}
		public ModulesContext modules(int i) {
			return getRuleContext(ModulesContext.class,i);
		}
		public List<ReplaceModulePropertyContext> replaceModuleProperty() {
			return getRuleContexts(ReplaceModulePropertyContext.class);
		}
		public ReplaceModulePropertyContext replaceModuleProperty(int i) {
			return getRuleContext(ReplaceModulePropertyContext.class,i);
		}
		public ReplaceModuleBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_replaceModuleBlock; }
	}

	public final ReplaceModuleBlockContext replaceModuleBlock() throws RecognitionException {
		ReplaceModuleBlockContext _localctx = new ReplaceModuleBlockContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_replaceModuleBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(170);
			match(T__6);
			setState(171);
			match(ID);
			setState(176);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 17592192400640L) != 0)) {
				{
				setState(174);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__7:
				case T__9:
				case T__10:
				case T__11:
				case T__12:
				case T__13:
				case T__14:
				case T__20:
				case T__21:
					{
					setState(172);
					modules();
					}
					break;
				case ID:
					{
					setState(173);
					replaceModuleProperty();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(178);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(179);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ReplaceModulePropertyContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public List<ValueContext> value() {
			return getRuleContexts(ValueContext.class);
		}
		public ValueContext value(int i) {
			return getRuleContext(ValueContext.class,i);
		}
		public ReplaceModulePropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_replaceModuleProperty; }
	}

	public final ReplaceModulePropertyContext replaceModuleProperty() throws RecognitionException {
		ReplaceModulePropertyContext _localctx = new ReplaceModulePropertyContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_replaceModuleProperty);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(181);
			match(ID);
			setState(182);
			match(T__1);
			setState(184); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(183);
					value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(186); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ModulesContext extends ParserRuleContext {
		public DrawModuleBlockContext drawModuleBlock() {
			return getRuleContext(DrawModuleBlockContext.class,0);
		}
		public BodyModuleBlockContext bodyModuleBlock() {
			return getRuleContext(BodyModuleBlockContext.class,0);
		}
		public BehaviormoduleBlockContext behaviormoduleBlock() {
			return getRuleContext(BehaviormoduleBlockContext.class,0);
		}
		public ClientModuleBlockContext clientModuleBlock() {
			return getRuleContext(ClientModuleBlockContext.class,0);
		}
		public ObjectBlocksContext objectBlocks() {
			return getRuleContext(ObjectBlocksContext.class,0);
		}
		public ModulesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_modules; }
	}

	public final ModulesContext modules() throws RecognitionException {
		ModulesContext _localctx = new ModulesContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_modules);
		try {
			setState(193);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__21:
				enterOuterAlt(_localctx, 1);
				{
				setState(188);
				drawModuleBlock();
				}
				break;
			case T__20:
				enterOuterAlt(_localctx, 2);
				{
				setState(189);
				bodyModuleBlock();
				}
				break;
			case T__14:
				enterOuterAlt(_localctx, 3);
				{
				setState(190);
				behaviormoduleBlock();
				}
				break;
			case T__13:
				enterOuterAlt(_localctx, 4);
				{
				setState(191);
				clientModuleBlock();
				}
				break;
			case T__7:
			case T__9:
			case T__10:
			case T__11:
			case T__12:
				enterOuterAlt(_localctx, 5);
				{
				setState(192);
				objectBlocks();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ObjectBlocksContext extends ParserRuleContext {
		public ObjectPrerequisitesContext objectPrerequisites() {
			return getRuleContext(ObjectPrerequisitesContext.class,0);
		}
		public ObjectWeaponSetContext objectWeaponSet() {
			return getRuleContext(ObjectWeaponSetContext.class,0);
		}
		public ObjectArmorSetContext objectArmorSet() {
			return getRuleContext(ObjectArmorSetContext.class,0);
		}
		public ObjectUnitSpecificSoundsContext objectUnitSpecificSounds() {
			return getRuleContext(ObjectUnitSpecificSoundsContext.class,0);
		}
		public ObjectUnitSpecificFXContext objectUnitSpecificFX() {
			return getRuleContext(ObjectUnitSpecificFXContext.class,0);
		}
		public ObjectBlocksContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectBlocks; }
	}

	public final ObjectBlocksContext objectBlocks() throws RecognitionException {
		ObjectBlocksContext _localctx = new ObjectBlocksContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_objectBlocks);
		try {
			setState(200);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__7:
				enterOuterAlt(_localctx, 1);
				{
				setState(195);
				objectPrerequisites();
				}
				break;
			case T__9:
				enterOuterAlt(_localctx, 2);
				{
				setState(196);
				objectWeaponSet();
				}
				break;
			case T__10:
				enterOuterAlt(_localctx, 3);
				{
				setState(197);
				objectArmorSet();
				}
				break;
			case T__11:
				enterOuterAlt(_localctx, 4);
				{
				setState(198);
				objectUnitSpecificSounds();
				}
				break;
			case T__12:
				enterOuterAlt(_localctx, 5);
				{
				setState(199);
				objectUnitSpecificFX();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ObjectPrerequisitesContext extends ParserRuleContext {
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<ObjectPrerequisitesobjectPropertyContext> objectPrerequisitesobjectProperty() {
			return getRuleContexts(ObjectPrerequisitesobjectPropertyContext.class);
		}
		public ObjectPrerequisitesobjectPropertyContext objectPrerequisitesobjectProperty(int i) {
			return getRuleContext(ObjectPrerequisitesobjectPropertyContext.class,i);
		}
		public List<ObjectPrerequisitessciencePropetyContext> objectPrerequisitessciencePropety() {
			return getRuleContexts(ObjectPrerequisitessciencePropetyContext.class);
		}
		public ObjectPrerequisitessciencePropetyContext objectPrerequisitessciencePropety(int i) {
			return getRuleContext(ObjectPrerequisitessciencePropetyContext.class,i);
		}
		public ObjectPrerequisitesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectPrerequisites; }
	}

	public final ObjectPrerequisitesContext objectPrerequisites() throws RecognitionException {
		ObjectPrerequisitesContext _localctx = new ObjectPrerequisitesContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_objectPrerequisites);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(202);
			match(T__7);
			setState(207);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__0 || _la==T__8) {
				{
				setState(205);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__0:
					{
					setState(203);
					objectPrerequisitesobjectProperty();
					}
					break;
				case T__8:
					{
					setState(204);
					objectPrerequisitessciencePropety();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(209);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(210);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ObjectPrerequisitesobjectPropertyContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(MapIniParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(MapIniParser.ID, i);
		}
		public ObjectPrerequisitesobjectPropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectPrerequisitesobjectProperty; }
	}

	public final ObjectPrerequisitesobjectPropertyContext objectPrerequisitesobjectProperty() throws RecognitionException {
		ObjectPrerequisitesobjectPropertyContext _localctx = new ObjectPrerequisitesobjectPropertyContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_objectPrerequisitesobjectProperty);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(212);
			match(T__0);
			setState(213);
			match(T__1);
			setState(215); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(214);
				match(ID);
				}
				}
				setState(217); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==ID );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ObjectPrerequisitessciencePropetyContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(MapIniParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(MapIniParser.ID, i);
		}
		public ObjectPrerequisitessciencePropetyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectPrerequisitessciencePropety; }
	}

	public final ObjectPrerequisitessciencePropetyContext objectPrerequisitessciencePropety() throws RecognitionException {
		ObjectPrerequisitessciencePropetyContext _localctx = new ObjectPrerequisitessciencePropetyContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_objectPrerequisitessciencePropety);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(219);
			match(T__8);
			setState(220);
			match(T__1);
			setState(222); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(221);
				match(ID);
				}
				}
				setState(224); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==ID );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ObjectWeaponSetContext extends ParserRuleContext {
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<ObjectWeaponSetPropetyContext> objectWeaponSetPropety() {
			return getRuleContexts(ObjectWeaponSetPropetyContext.class);
		}
		public ObjectWeaponSetPropetyContext objectWeaponSetPropety(int i) {
			return getRuleContext(ObjectWeaponSetPropetyContext.class,i);
		}
		public ObjectWeaponSetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectWeaponSet; }
	}

	public final ObjectWeaponSetContext objectWeaponSet() throws RecognitionException {
		ObjectWeaponSetContext _localctx = new ObjectWeaponSetContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_objectWeaponSet);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(226);
			match(T__9);
			setState(230);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(227);
				objectWeaponSetPropety();
				}
				}
				setState(232);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(233);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ObjectWeaponSetPropetyContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public List<ValueContext> value() {
			return getRuleContexts(ValueContext.class);
		}
		public ValueContext value(int i) {
			return getRuleContext(ValueContext.class,i);
		}
		public ObjectWeaponSetPropetyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectWeaponSetPropety; }
	}

	public final ObjectWeaponSetPropetyContext objectWeaponSetPropety() throws RecognitionException {
		ObjectWeaponSetPropetyContext _localctx = new ObjectWeaponSetPropetyContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_objectWeaponSetPropety);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(235);
			match(ID);
			setState(236);
			match(T__1);
			setState(238); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(237);
					value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(240); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,22,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ObjectArmorSetContext extends ParserRuleContext {
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<ObjectArmorSetPropetyContext> objectArmorSetPropety() {
			return getRuleContexts(ObjectArmorSetPropetyContext.class);
		}
		public ObjectArmorSetPropetyContext objectArmorSetPropety(int i) {
			return getRuleContext(ObjectArmorSetPropetyContext.class,i);
		}
		public ObjectArmorSetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectArmorSet; }
	}

	public final ObjectArmorSetContext objectArmorSet() throws RecognitionException {
		ObjectArmorSetContext _localctx = new ObjectArmorSetContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_objectArmorSet);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(242);
			match(T__10);
			setState(246);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(243);
				objectArmorSetPropety();
				}
				}
				setState(248);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(249);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ObjectArmorSetPropetyContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public List<ValueContext> value() {
			return getRuleContexts(ValueContext.class);
		}
		public ValueContext value(int i) {
			return getRuleContext(ValueContext.class,i);
		}
		public ObjectArmorSetPropetyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectArmorSetPropety; }
	}

	public final ObjectArmorSetPropetyContext objectArmorSetPropety() throws RecognitionException {
		ObjectArmorSetPropetyContext _localctx = new ObjectArmorSetPropetyContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_objectArmorSetPropety);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(251);
			match(ID);
			setState(252);
			match(T__1);
			setState(254); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(253);
					value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(256); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,24,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ObjectUnitSpecificSoundsContext extends ParserRuleContext {
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<ObjectUnitSpecificSoundsPropetyContext> objectUnitSpecificSoundsPropety() {
			return getRuleContexts(ObjectUnitSpecificSoundsPropetyContext.class);
		}
		public ObjectUnitSpecificSoundsPropetyContext objectUnitSpecificSoundsPropety(int i) {
			return getRuleContext(ObjectUnitSpecificSoundsPropetyContext.class,i);
		}
		public ObjectUnitSpecificSoundsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectUnitSpecificSounds; }
	}

	public final ObjectUnitSpecificSoundsContext objectUnitSpecificSounds() throws RecognitionException {
		ObjectUnitSpecificSoundsContext _localctx = new ObjectUnitSpecificSoundsContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_objectUnitSpecificSounds);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(258);
			match(T__11);
			setState(262);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(259);
				objectUnitSpecificSoundsPropety();
				}
				}
				setState(264);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(265);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ObjectUnitSpecificSoundsPropetyContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public List<ValueContext> value() {
			return getRuleContexts(ValueContext.class);
		}
		public ValueContext value(int i) {
			return getRuleContext(ValueContext.class,i);
		}
		public ObjectUnitSpecificSoundsPropetyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectUnitSpecificSoundsPropety; }
	}

	public final ObjectUnitSpecificSoundsPropetyContext objectUnitSpecificSoundsPropety() throws RecognitionException {
		ObjectUnitSpecificSoundsPropetyContext _localctx = new ObjectUnitSpecificSoundsPropetyContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_objectUnitSpecificSoundsPropety);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(267);
			match(ID);
			setState(268);
			match(T__1);
			setState(270); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(269);
					value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(272); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,26,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ObjectUnitSpecificFXContext extends ParserRuleContext {
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<ObjectUnitSpecificFXPropetyContext> objectUnitSpecificFXPropety() {
			return getRuleContexts(ObjectUnitSpecificFXPropetyContext.class);
		}
		public ObjectUnitSpecificFXPropetyContext objectUnitSpecificFXPropety(int i) {
			return getRuleContext(ObjectUnitSpecificFXPropetyContext.class,i);
		}
		public ObjectUnitSpecificFXContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectUnitSpecificFX; }
	}

	public final ObjectUnitSpecificFXContext objectUnitSpecificFX() throws RecognitionException {
		ObjectUnitSpecificFXContext _localctx = new ObjectUnitSpecificFXContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_objectUnitSpecificFX);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(274);
			match(T__12);
			setState(278);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(275);
				objectUnitSpecificFXPropety();
				}
				}
				setState(280);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(281);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ObjectUnitSpecificFXPropetyContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public List<ValueContext> value() {
			return getRuleContexts(ValueContext.class);
		}
		public ValueContext value(int i) {
			return getRuleContext(ValueContext.class,i);
		}
		public ObjectUnitSpecificFXPropetyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectUnitSpecificFXPropety; }
	}

	public final ObjectUnitSpecificFXPropetyContext objectUnitSpecificFXPropety() throws RecognitionException {
		ObjectUnitSpecificFXPropetyContext _localctx = new ObjectUnitSpecificFXPropetyContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_objectUnitSpecificFXPropety);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(283);
			match(ID);
			setState(284);
			match(T__1);
			setState(286); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(285);
					value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(288); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,28,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ClientModuleBlockContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(MapIniParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(MapIniParser.ID, i);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<PropertyContext> property() {
			return getRuleContexts(PropertyContext.class);
		}
		public PropertyContext property(int i) {
			return getRuleContext(PropertyContext.class,i);
		}
		public ClientModuleBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_clientModuleBlock; }
	}

	public final ClientModuleBlockContext clientModuleBlock() throws RecognitionException {
		ClientModuleBlockContext _localctx = new ClientModuleBlockContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_clientModuleBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(290);
			match(T__13);
			setState(291);
			match(T__1);
			setState(292);
			match(ID);
			setState(293);
			match(ID);
			setState(297);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(294);
				property();
				}
				}
				setState(299);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(300);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BehaviormoduleBlockContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(MapIniParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(MapIniParser.ID, i);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<PropertyContext> property() {
			return getRuleContexts(PropertyContext.class);
		}
		public PropertyContext property(int i) {
			return getRuleContext(PropertyContext.class,i);
		}
		public List<BehaviorTurretContext> behaviorTurret() {
			return getRuleContexts(BehaviorTurretContext.class);
		}
		public BehaviorTurretContext behaviorTurret(int i) {
			return getRuleContext(BehaviorTurretContext.class,i);
		}
		public List<ObjectKindOfPropertyContext> objectKindOfProperty() {
			return getRuleContexts(ObjectKindOfPropertyContext.class);
		}
		public ObjectKindOfPropertyContext objectKindOfProperty(int i) {
			return getRuleContext(ObjectKindOfPropertyContext.class,i);
		}
		public List<BehaviorDecalsContext> behaviorDecals() {
			return getRuleContexts(BehaviorDecalsContext.class);
		}
		public BehaviorDecalsContext behaviorDecals(int i) {
			return getRuleContext(BehaviorDecalsContext.class,i);
		}
		public BehaviormoduleBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_behaviormoduleBlock; }
	}

	public final BehaviormoduleBlockContext behaviormoduleBlock() throws RecognitionException {
		BehaviormoduleBlockContext _localctx = new BehaviormoduleBlockContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_behaviormoduleBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(302);
			match(T__14);
			setState(303);
			match(T__1);
			setState(304);
			match(ID);
			setState(305);
			match(ID);
			setState(312);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 17592188076144L) != 0)) {
				{
				setState(310);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case ID:
					{
					setState(306);
					property();
					}
					break;
				case T__18:
				case T__19:
					{
					setState(307);
					behaviorTurret();
					}
					break;
				case T__3:
				case T__4:
				case T__5:
					{
					setState(308);
					objectKindOfProperty();
					}
					break;
				case T__15:
				case T__16:
				case T__17:
					{
					setState(309);
					behaviorDecals();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(314);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(315);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BehaviorDecalsContext extends ParserRuleContext {
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<PropertyContext> property() {
			return getRuleContexts(PropertyContext.class);
		}
		public PropertyContext property(int i) {
			return getRuleContext(PropertyContext.class,i);
		}
		public BehaviorDecalsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_behaviorDecals; }
	}

	public final BehaviorDecalsContext behaviorDecals() throws RecognitionException {
		BehaviorDecalsContext _localctx = new BehaviorDecalsContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_behaviorDecals);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(317);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 458752L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(321);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(318);
				property();
				}
				}
				setState(323);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(324);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BehaviorTurretContext extends ParserRuleContext {
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<PropertyContext> property() {
			return getRuleContexts(PropertyContext.class);
		}
		public PropertyContext property(int i) {
			return getRuleContext(PropertyContext.class,i);
		}
		public BehaviorTurretContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_behaviorTurret; }
	}

	public final BehaviorTurretContext behaviorTurret() throws RecognitionException {
		BehaviorTurretContext _localctx = new BehaviorTurretContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_behaviorTurret);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(326);
			_la = _input.LA(1);
			if ( !(_la==T__18 || _la==T__19) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(330);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(327);
				property();
				}
				}
				setState(332);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(333);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BodyModuleBlockContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(MapIniParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(MapIniParser.ID, i);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<PropertyContext> property() {
			return getRuleContexts(PropertyContext.class);
		}
		public PropertyContext property(int i) {
			return getRuleContext(PropertyContext.class,i);
		}
		public BodyModuleBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bodyModuleBlock; }
	}

	public final BodyModuleBlockContext bodyModuleBlock() throws RecognitionException {
		BodyModuleBlockContext _localctx = new BodyModuleBlockContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_bodyModuleBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(335);
			match(T__20);
			setState(336);
			match(T__1);
			setState(337);
			match(ID);
			setState(338);
			match(ID);
			setState(342);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(339);
				property();
				}
				}
				setState(344);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(345);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DrawModuleBlockContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(MapIniParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(MapIniParser.ID, i);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<DrawModulePropertyContext> drawModuleProperty() {
			return getRuleContexts(DrawModulePropertyContext.class);
		}
		public DrawModulePropertyContext drawModuleProperty(int i) {
			return getRuleContext(DrawModulePropertyContext.class,i);
		}
		public List<ConditionStateBlocksContext> conditionStateBlocks() {
			return getRuleContexts(ConditionStateBlocksContext.class);
		}
		public ConditionStateBlocksContext conditionStateBlocks(int i) {
			return getRuleContext(ConditionStateBlocksContext.class,i);
		}
		public DrawModuleBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_drawModuleBlock; }
	}

	public final DrawModuleBlockContext drawModuleBlock() throws RecognitionException {
		DrawModuleBlockContext _localctx = new DrawModuleBlockContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_drawModuleBlock);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(347);
			match(T__21);
			setState(348);
			match(T__1);
			setState(349);
			match(ID);
			setState(350);
			match(ID);
			setState(359);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 17592680972288L) != 0)) {
				{
				setState(357);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__22:
				case T__23:
				case T__25:
				case T__26:
				case T__27:
					{
					setState(352); 
					_errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							setState(351);
							conditionStateBlocks();
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						setState(354); 
						_errHandler.sync(this);
						_alt = getInterpreter().adaptivePredict(_input,35,_ctx);
					} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
					}
					break;
				case ID:
					{
					setState(356);
					drawModuleProperty();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(361);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(362);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DrawModulePropertyContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public List<ValueContext> value() {
			return getRuleContexts(ValueContext.class);
		}
		public ValueContext value(int i) {
			return getRuleContext(ValueContext.class,i);
		}
		public DrawModulePropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_drawModuleProperty; }
	}

	public final DrawModulePropertyContext drawModuleProperty() throws RecognitionException {
		DrawModulePropertyContext _localctx = new DrawModulePropertyContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_drawModuleProperty);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(364);
			match(ID);
			setState(365);
			match(T__1);
			setState(367); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(366);
					value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(369); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,38,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ConditionStateBlocksContext extends ParserRuleContext {
		public ConditionStateBlockContext conditionStateBlock() {
			return getRuleContext(ConditionStateBlockContext.class,0);
		}
		public DefaultConditionStateBlockContext defaultConditionStateBlock() {
			return getRuleContext(DefaultConditionStateBlockContext.class,0);
		}
		public TransitionStateBlockContext transitionStateBlock() {
			return getRuleContext(TransitionStateBlockContext.class,0);
		}
		public AliasConditionStateBlockContext aliasConditionStateBlock() {
			return getRuleContext(AliasConditionStateBlockContext.class,0);
		}
		public IgnoreConditionStateBlockContext ignoreConditionStateBlock() {
			return getRuleContext(IgnoreConditionStateBlockContext.class,0);
		}
		public ConditionStateBlocksContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conditionStateBlocks; }
	}

	public final ConditionStateBlocksContext conditionStateBlocks() throws RecognitionException {
		ConditionStateBlocksContext _localctx = new ConditionStateBlocksContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_conditionStateBlocks);
		try {
			setState(376);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__22:
				enterOuterAlt(_localctx, 1);
				{
				setState(371);
				conditionStateBlock();
				}
				break;
			case T__23:
				enterOuterAlt(_localctx, 2);
				{
				setState(372);
				defaultConditionStateBlock();
				}
				break;
			case T__25:
				enterOuterAlt(_localctx, 3);
				{
				setState(373);
				transitionStateBlock();
				}
				break;
			case T__26:
				enterOuterAlt(_localctx, 4);
				{
				setState(374);
				aliasConditionStateBlock();
				}
				break;
			case T__27:
				enterOuterAlt(_localctx, 5);
				{
				setState(375);
				ignoreConditionStateBlock();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ConditionStateBlockContext extends ParserRuleContext {
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<TerminalNode> ID() { return getTokens(MapIniParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(MapIniParser.ID, i);
		}
		public List<ConditionStatePropertyContext> conditionStateProperty() {
			return getRuleContexts(ConditionStatePropertyContext.class);
		}
		public ConditionStatePropertyContext conditionStateProperty(int i) {
			return getRuleContext(ConditionStatePropertyContext.class,i);
		}
		public List<TurretPropertyContext> turretProperty() {
			return getRuleContexts(TurretPropertyContext.class);
		}
		public TurretPropertyContext turretProperty(int i) {
			return getRuleContext(TurretPropertyContext.class,i);
		}
		public List<TransitionKeyPropertyContext> transitionKeyProperty() {
			return getRuleContexts(TransitionKeyPropertyContext.class);
		}
		public TransitionKeyPropertyContext transitionKeyProperty(int i) {
			return getRuleContext(TransitionKeyPropertyContext.class,i);
		}
		public ConditionStateBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conditionStateBlock; }
	}

	public final ConditionStateBlockContext conditionStateBlock() throws RecognitionException {
		ConditionStateBlockContext _localctx = new ConditionStateBlockContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_conditionStateBlock);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(378);
			match(T__22);
			setState(379);
			match(T__1);
			setState(381); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(380);
					match(ID);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(383); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,40,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			setState(390);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 17608327299072L) != 0)) {
				{
				setState(388);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case ID:
					{
					setState(385);
					conditionStateProperty();
					}
					break;
				case T__18:
				case T__19:
				case T__29:
				case T__30:
				case T__31:
				case T__32:
					{
					setState(386);
					turretProperty();
					}
					break;
				case T__24:
					{
					setState(387);
					transitionKeyProperty();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(392);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(393);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DefaultConditionStateBlockContext extends ParserRuleContext {
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<ConditionStatePropertyContext> conditionStateProperty() {
			return getRuleContexts(ConditionStatePropertyContext.class);
		}
		public ConditionStatePropertyContext conditionStateProperty(int i) {
			return getRuleContext(ConditionStatePropertyContext.class,i);
		}
		public List<TurretPropertyContext> turretProperty() {
			return getRuleContexts(TurretPropertyContext.class);
		}
		public TurretPropertyContext turretProperty(int i) {
			return getRuleContext(TurretPropertyContext.class,i);
		}
		public List<TransitionKeyPropertyContext> transitionKeyProperty() {
			return getRuleContexts(TransitionKeyPropertyContext.class);
		}
		public TransitionKeyPropertyContext transitionKeyProperty(int i) {
			return getRuleContext(TransitionKeyPropertyContext.class,i);
		}
		public DefaultConditionStateBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_defaultConditionStateBlock; }
	}

	public final DefaultConditionStateBlockContext defaultConditionStateBlock() throws RecognitionException {
		DefaultConditionStateBlockContext _localctx = new DefaultConditionStateBlockContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_defaultConditionStateBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(395);
			match(T__23);
			setState(401);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 17608327299072L) != 0)) {
				{
				setState(399);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case ID:
					{
					setState(396);
					conditionStateProperty();
					}
					break;
				case T__18:
				case T__19:
				case T__29:
				case T__30:
				case T__31:
				case T__32:
					{
					setState(397);
					turretProperty();
					}
					break;
				case T__24:
					{
					setState(398);
					transitionKeyProperty();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(403);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(404);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ConditionStatePropertyContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public List<ValueContext> value() {
			return getRuleContexts(ValueContext.class);
		}
		public ValueContext value(int i) {
			return getRuleContext(ValueContext.class,i);
		}
		public ConditionStatePropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conditionStateProperty; }
	}

	public final ConditionStatePropertyContext conditionStateProperty() throws RecognitionException {
		ConditionStatePropertyContext _localctx = new ConditionStatePropertyContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_conditionStateProperty);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(406);
			match(ID);
			setState(407);
			match(T__1);
			setState(409); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(408);
					value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(411); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,45,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TransitionKeyPropertyContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public TransitionKeyPropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_transitionKeyProperty; }
	}

	public final TransitionKeyPropertyContext transitionKeyProperty() throws RecognitionException {
		TransitionKeyPropertyContext _localctx = new TransitionKeyPropertyContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_transitionKeyProperty);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(413);
			match(T__24);
			setState(414);
			match(T__1);
			setState(415);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TransitionStateBlockContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(MapIniParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(MapIniParser.ID, i);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<TransitionStatePropertyContext> transitionStateProperty() {
			return getRuleContexts(TransitionStatePropertyContext.class);
		}
		public TransitionStatePropertyContext transitionStateProperty(int i) {
			return getRuleContext(TransitionStatePropertyContext.class,i);
		}
		public TransitionStateBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_transitionStateBlock; }
	}

	public final TransitionStateBlockContext transitionStateBlock() throws RecognitionException {
		TransitionStateBlockContext _localctx = new TransitionStateBlockContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_transitionStateBlock);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(417);
			match(T__25);
			setState(418);
			match(T__1);
			setState(419);
			match(ID);
			setState(421); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(420);
					match(ID);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(423); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,46,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			setState(428);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(425);
				transitionStateProperty();
				}
				}
				setState(430);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(431);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TransitionStatePropertyContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public List<ValueContext> value() {
			return getRuleContexts(ValueContext.class);
		}
		public ValueContext value(int i) {
			return getRuleContext(ValueContext.class,i);
		}
		public TransitionStatePropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_transitionStateProperty; }
	}

	public final TransitionStatePropertyContext transitionStateProperty() throws RecognitionException {
		TransitionStatePropertyContext _localctx = new TransitionStatePropertyContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_transitionStateProperty);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(433);
			match(ID);
			setState(434);
			match(T__1);
			setState(436); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(435);
					value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(438); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,48,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AliasConditionStateBlockContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(MapIniParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(MapIniParser.ID, i);
		}
		public AliasConditionStateBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_aliasConditionStateBlock; }
	}

	public final AliasConditionStateBlockContext aliasConditionStateBlock() throws RecognitionException {
		AliasConditionStateBlockContext _localctx = new AliasConditionStateBlockContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_aliasConditionStateBlock);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(440);
			match(T__26);
			setState(441);
			match(T__1);
			setState(443); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(442);
					match(ID);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(445); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,49,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IgnoreConditionStateBlockContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(MapIniParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(MapIniParser.ID, i);
		}
		public IgnoreConditionStateBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ignoreConditionStateBlock; }
	}

	public final IgnoreConditionStateBlockContext ignoreConditionStateBlock() throws RecognitionException {
		IgnoreConditionStateBlockContext _localctx = new IgnoreConditionStateBlockContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_ignoreConditionStateBlock);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(447);
			match(T__27);
			setState(448);
			match(T__1);
			setState(450); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(449);
					match(ID);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(452); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,50,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class RemoveModuleBlockContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public RemoveModuleBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_removeModuleBlock; }
	}

	public final RemoveModuleBlockContext removeModuleBlock() throws RecognitionException {
		RemoveModuleBlockContext _localctx = new RemoveModuleBlockContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_removeModuleBlock);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(454);
			match(T__28);
			setState(455);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TurretPropertyContext extends ParserRuleContext {
		public TturretPropertyContext tturretProperty() {
			return getRuleContext(TturretPropertyContext.class,0);
		}
		public AltTurretPropertyContext altTurretProperty() {
			return getRuleContext(AltTurretPropertyContext.class,0);
		}
		public TurretPropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_turretProperty; }
	}

	public final TurretPropertyContext turretProperty() throws RecognitionException {
		TurretPropertyContext _localctx = new TurretPropertyContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_turretProperty);
		try {
			setState(459);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__18:
			case T__29:
			case T__30:
				enterOuterAlt(_localctx, 1);
				{
				setState(457);
				tturretProperty();
				}
				break;
			case T__19:
			case T__31:
			case T__32:
				enterOuterAlt(_localctx, 2);
				{
				setState(458);
				altTurretProperty();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PropertyContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public List<ValueContext> value() {
			return getRuleContexts(ValueContext.class);
		}
		public ValueContext value(int i) {
			return getRuleContext(ValueContext.class,i);
		}
		public List<TerminalNode> WS() { return getTokens(MapIniParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(MapIniParser.WS, i);
		}
		public PropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_property; }
	}

	public final PropertyContext property() throws RecognitionException {
		PropertyContext _localctx = new PropertyContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_property);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(461);
			match(ID);
			setState(469);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__1:
				{
				setState(462);
				match(T__1);
				}
				break;
			case T__18:
			case T__19:
			case T__29:
			case T__30:
			case T__31:
			case T__32:
			case T__38:
			case INT:
			case FLOAT:
			case BOOL:
			case ID:
			case WS:
				{
				setState(466);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==WS) {
					{
					{
					setState(463);
					match(WS);
					}
					}
					setState(468);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(472); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(471);
					value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(474); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,54,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TturretPropertyContext extends ParserRuleContext {
		public List<ValueContext> value() {
			return getRuleContexts(ValueContext.class);
		}
		public ValueContext value(int i) {
			return getRuleContext(ValueContext.class,i);
		}
		public TturretPropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tturretProperty; }
	}

	public final TturretPropertyContext tturretProperty() throws RecognitionException {
		TturretPropertyContext _localctx = new TturretPropertyContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_tturretProperty);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(476);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 3221749760L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(477);
			match(T__1);
			setState(479); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(478);
					value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(481); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,55,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AltTurretPropertyContext extends ParserRuleContext {
		public List<ValueContext> value() {
			return getRuleContexts(ValueContext.class);
		}
		public ValueContext value(int i) {
			return getRuleContext(ValueContext.class,i);
		}
		public AltTurretPropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_altTurretProperty; }
	}

	public final AltTurretPropertyContext altTurretProperty() throws RecognitionException {
		AltTurretPropertyContext _localctx = new AltTurretPropertyContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_altTurretProperty);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(483);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 12885950464L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(484);
			match(T__1);
			setState(486); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(485);
					value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(488); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,56,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EndContext extends ParserRuleContext {
		public EndContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_end; }
	}

	public final EndContext end() throws RecognitionException {
		EndContext _localctx = new EndContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_end);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(490);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 120259084288L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ValueContext extends ParserRuleContext {
		public ValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_value; }
	 
		public ValueContext() { }
		public void copyFrom(ValueContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class FiletypeContext extends ValueContext {
		public FtypeContext ftype() {
			return getRuleContext(FtypeContext.class,0);
		}
		public FiletypeContext(ValueContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class TurretValueContext extends ValueContext {
		public TurretValueContext(ValueContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class AltTurretValueContext extends ValueContext {
		public AltTurretValueContext(ValueContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class StringContext extends ValueContext {
		public QuoutedIDContext quoutedID() {
			return getRuleContext(QuoutedIDContext.class,0);
		}
		public StringContext(ValueContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class BoolContext extends ValueContext {
		public TerminalNode BOOL() { return getToken(MapIniParser.BOOL, 0); }
		public BoolContext(ValueContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IdContext extends ValueContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public IdContext(ValueContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class FloatContext extends ValueContext {
		public TerminalNode FLOAT() { return getToken(MapIniParser.FLOAT, 0); }
		public FloatContext(ValueContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ProcentageContext extends ValueContext {
		public ProcentContext procent() {
			return getRuleContext(ProcentContext.class,0);
		}
		public ProcentageContext(ValueContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IntContext extends ValueContext {
		public TerminalNode INT() { return getToken(MapIniParser.INT, 0); }
		public IntContext(ValueContext ctx) { copyFrom(ctx); }
	}

	public final ValueContext value() throws RecognitionException {
		ValueContext _localctx = new ValueContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_value);
		int _la;
		try {
			setState(501);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,57,_ctx) ) {
			case 1:
				_localctx = new StringContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(492);
				quoutedID();
				}
				break;
			case 2:
				_localctx = new FiletypeContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(493);
				ftype();
				}
				break;
			case 3:
				_localctx = new ProcentageContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(494);
				procent();
				}
				break;
			case 4:
				_localctx = new IdContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(495);
				match(ID);
				}
				break;
			case 5:
				_localctx = new IntContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(496);
				match(INT);
				}
				break;
			case 6:
				_localctx = new FloatContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(497);
				match(FLOAT);
				}
				break;
			case 7:
				_localctx = new BoolContext(_localctx);
				enterOuterAlt(_localctx, 7);
				{
				setState(498);
				match(BOOL);
				}
				break;
			case 8:
				_localctx = new TurretValueContext(_localctx);
				enterOuterAlt(_localctx, 8);
				{
				setState(499);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 3221749760L) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case 9:
				_localctx = new AltTurretValueContext(_localctx);
				enterOuterAlt(_localctx, 9);
				{
				setState(500);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 12885950464L) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FtypeContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(MapIniParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(MapIniParser.ID, i);
		}
		public FtypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ftype; }
	}

	public final FtypeContext ftype() throws RecognitionException {
		FtypeContext _localctx = new FtypeContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_ftype);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(503);
			match(ID);
			setState(504);
			match(T__36);
			setState(505);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class RgbContext extends ParserRuleContext {
		public List<TerminalNode> INT256() { return getTokens(MapIniParser.INT256); }
		public TerminalNode INT256(int i) {
			return getToken(MapIniParser.INT256, i);
		}
		public RgbContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rgb; }
	}

	public final RgbContext rgb() throws RecognitionException {
		RgbContext _localctx = new RgbContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_rgb);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(507);
			match(INT256);
			setState(508);
			match(INT256);
			setState(509);
			match(INT256);
			setState(510);
			match(INT256);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProcentContext extends ParserRuleContext {
		public TerminalNode FLOAT() { return getToken(MapIniParser.FLOAT, 0); }
		public TerminalNode INT() { return getToken(MapIniParser.INT, 0); }
		public ProcentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_procent; }
	}

	public final ProcentContext procent() throws RecognitionException {
		ProcentContext _localctx = new ProcentContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_procent);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(512);
			_la = _input.LA(1);
			if ( !(_la==INT || _la==FLOAT) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(513);
			match(T__37);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IntRangContext extends ParserRuleContext {
		public List<TerminalNode> INT() { return getTokens(MapIniParser.INT); }
		public TerminalNode INT(int i) {
			return getToken(MapIniParser.INT, i);
		}
		public IntRangContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_intRang; }
	}

	public final IntRangContext intRang() throws RecognitionException {
		IntRangContext _localctx = new IntRangContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_intRang);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(515);
			match(INT);
			setState(516);
			match(INT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FloatRangContext extends ParserRuleContext {
		public List<TerminalNode> FLOAT() { return getTokens(MapIniParser.FLOAT); }
		public TerminalNode FLOAT(int i) {
			return getToken(MapIniParser.FLOAT, i);
		}
		public FloatRangContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_floatRang; }
	}

	public final FloatRangContext floatRang() throws RecognitionException {
		FloatRangContext _localctx = new FloatRangContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_floatRang);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(518);
			match(FLOAT);
			setState(519);
			match(FLOAT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class QuoutedIDContext extends ParserRuleContext {
		public List<TerminalNode> WS() { return getTokens(MapIniParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(MapIniParser.WS, i);
		}
		public QuoutedIDContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_quoutedID; }
	}

	public final QuoutedIDContext quoutedID() throws RecognitionException {
		QuoutedIDContext _localctx = new QuoutedIDContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_quoutedID);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(521);
			match(T__38);
			setState(525);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,58,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(522);
					_la = _input.LA(1);
					if ( _la <= 0 || (_la==WS) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
					} 
				}
				setState(527);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,58,_ctx);
			}
			setState(528);
			match(T__38);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001/\u0213\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007\u0015"+
		"\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002\u0018\u0007\u0018"+
		"\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a\u0002\u001b\u0007\u001b"+
		"\u0002\u001c\u0007\u001c\u0002\u001d\u0007\u001d\u0002\u001e\u0007\u001e"+
		"\u0002\u001f\u0007\u001f\u0002 \u0007 \u0002!\u0007!\u0002\"\u0007\"\u0002"+
		"#\u0007#\u0002$\u0007$\u0002%\u0007%\u0002&\u0007&\u0002\'\u0007\'\u0002"+
		"(\u0007(\u0002)\u0007)\u0002*\u0007*\u0002+\u0007+\u0002,\u0007,\u0002"+
		"-\u0007-\u0002.\u0007.\u0002/\u0007/\u00020\u00070\u00021\u00071\u0002"+
		"2\u00072\u0001\u0000\u0005\u0000h\b\u0000\n\u0000\f\u0000k\t\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0005\u0001t\b\u0001\n\u0001\f\u0001w\t\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0005\u0001|\b\u0001\n\u0001\f\u0001\u007f\t\u0001"+
		"\u0003\u0001\u0081\b\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0004\u0002\u0088\b\u0002\u000b\u0002\f\u0002\u0089\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003\u0090\b\u0003\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0005\u0004\u0096\b\u0004\n"+
		"\u0004\f\u0004\u0099\t\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0004\u0005\u00a0\b\u0005\u000b\u0005\f\u0005\u00a1"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0004\u0006\u00a7\b\u0006\u000b\u0006"+
		"\f\u0006\u00a8\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0005\u0007"+
		"\u00af\b\u0007\n\u0007\f\u0007\u00b2\t\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\b\u0001\b\u0001\b\u0004\b\u00b9\b\b\u000b\b\f\b\u00ba\u0001\t\u0001\t"+
		"\u0001\t\u0001\t\u0001\t\u0003\t\u00c2\b\t\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\n\u0003\n\u00c9\b\n\u0001\u000b\u0001\u000b\u0001\u000b\u0005"+
		"\u000b\u00ce\b\u000b\n\u000b\f\u000b\u00d1\t\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\f\u0001\f\u0001\f\u0004\f\u00d8\b\f\u000b\f\f\f\u00d9\u0001\r\u0001"+
		"\r\u0001\r\u0004\r\u00df\b\r\u000b\r\f\r\u00e0\u0001\u000e\u0001\u000e"+
		"\u0005\u000e\u00e5\b\u000e\n\u000e\f\u000e\u00e8\t\u000e\u0001\u000e\u0001"+
		"\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0004\u000f\u00ef\b\u000f\u000b"+
		"\u000f\f\u000f\u00f0\u0001\u0010\u0001\u0010\u0005\u0010\u00f5\b\u0010"+
		"\n\u0010\f\u0010\u00f8\t\u0010\u0001\u0010\u0001\u0010\u0001\u0011\u0001"+
		"\u0011\u0001\u0011\u0004\u0011\u00ff\b\u0011\u000b\u0011\f\u0011\u0100"+
		"\u0001\u0012\u0001\u0012\u0005\u0012\u0105\b\u0012\n\u0012\f\u0012\u0108"+
		"\t\u0012\u0001\u0012\u0001\u0012\u0001\u0013\u0001\u0013\u0001\u0013\u0004"+
		"\u0013\u010f\b\u0013\u000b\u0013\f\u0013\u0110\u0001\u0014\u0001\u0014"+
		"\u0005\u0014\u0115\b\u0014\n\u0014\f\u0014\u0118\t\u0014\u0001\u0014\u0001"+
		"\u0014\u0001\u0015\u0001\u0015\u0001\u0015\u0004\u0015\u011f\b\u0015\u000b"+
		"\u0015\f\u0015\u0120\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001"+
		"\u0016\u0005\u0016\u0128\b\u0016\n\u0016\f\u0016\u012b\t\u0016\u0001\u0016"+
		"\u0001\u0016\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017"+
		"\u0001\u0017\u0001\u0017\u0001\u0017\u0005\u0017\u0137\b\u0017\n\u0017"+
		"\f\u0017\u013a\t\u0017\u0001\u0017\u0001\u0017\u0001\u0018\u0001\u0018"+
		"\u0005\u0018\u0140\b\u0018\n\u0018\f\u0018\u0143\t\u0018\u0001\u0018\u0001"+
		"\u0018\u0001\u0019\u0001\u0019\u0005\u0019\u0149\b\u0019\n\u0019\f\u0019"+
		"\u014c\t\u0019\u0001\u0019\u0001\u0019\u0001\u001a\u0001\u001a\u0001\u001a"+
		"\u0001\u001a\u0001\u001a\u0005\u001a\u0155\b\u001a\n\u001a\f\u001a\u0158"+
		"\t\u001a\u0001\u001a\u0001\u001a\u0001\u001b\u0001\u001b\u0001\u001b\u0001"+
		"\u001b\u0001\u001b\u0004\u001b\u0161\b\u001b\u000b\u001b\f\u001b\u0162"+
		"\u0001\u001b\u0005\u001b\u0166\b\u001b\n\u001b\f\u001b\u0169\t\u001b\u0001"+
		"\u001b\u0001\u001b\u0001\u001c\u0001\u001c\u0001\u001c\u0004\u001c\u0170"+
		"\b\u001c\u000b\u001c\f\u001c\u0171\u0001\u001d\u0001\u001d\u0001\u001d"+
		"\u0001\u001d\u0001\u001d\u0003\u001d\u0179\b\u001d\u0001\u001e\u0001\u001e"+
		"\u0001\u001e\u0004\u001e\u017e\b\u001e\u000b\u001e\f\u001e\u017f\u0001"+
		"\u001e\u0001\u001e\u0001\u001e\u0005\u001e\u0185\b\u001e\n\u001e\f\u001e"+
		"\u0188\t\u001e\u0001\u001e\u0001\u001e\u0001\u001f\u0001\u001f\u0001\u001f"+
		"\u0001\u001f\u0005\u001f\u0190\b\u001f\n\u001f\f\u001f\u0193\t\u001f\u0001"+
		"\u001f\u0001\u001f\u0001 \u0001 \u0001 \u0004 \u019a\b \u000b \f \u019b"+
		"\u0001!\u0001!\u0001!\u0001!\u0001\"\u0001\"\u0001\"\u0001\"\u0004\"\u01a6"+
		"\b\"\u000b\"\f\"\u01a7\u0001\"\u0005\"\u01ab\b\"\n\"\f\"\u01ae\t\"\u0001"+
		"\"\u0001\"\u0001#\u0001#\u0001#\u0004#\u01b5\b#\u000b#\f#\u01b6\u0001"+
		"$\u0001$\u0001$\u0004$\u01bc\b$\u000b$\f$\u01bd\u0001%\u0001%\u0001%\u0004"+
		"%\u01c3\b%\u000b%\f%\u01c4\u0001&\u0001&\u0001&\u0001\'\u0001\'\u0003"+
		"\'\u01cc\b\'\u0001(\u0001(\u0001(\u0005(\u01d1\b(\n(\f(\u01d4\t(\u0003"+
		"(\u01d6\b(\u0001(\u0004(\u01d9\b(\u000b(\f(\u01da\u0001)\u0001)\u0001"+
		")\u0004)\u01e0\b)\u000b)\f)\u01e1\u0001*\u0001*\u0001*\u0004*\u01e7\b"+
		"*\u000b*\f*\u01e8\u0001+\u0001+\u0001,\u0001,\u0001,\u0001,\u0001,\u0001"+
		",\u0001,\u0001,\u0001,\u0003,\u01f6\b,\u0001-\u0001-\u0001-\u0001-\u0001"+
		".\u0001.\u0001.\u0001.\u0001.\u0001/\u0001/\u0001/\u00010\u00010\u0001"+
		"0\u00011\u00011\u00011\u00012\u00012\u00052\u020c\b2\n2\f2\u020f\t2\u0001"+
		"2\u00012\u00012\u0000\u00003\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010"+
		"\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPR"+
		"TVXZ\\^`bd\u0000\b\u0001\u0000\u0004\u0006\u0001\u0000\u0010\u0012\u0001"+
		"\u0000\u0013\u0014\u0002\u0000\u0013\u0013\u001e\u001f\u0002\u0000\u0014"+
		"\u0014 !\u0001\u0000\"$\u0002\u0000((**\u0001\u0000//\u0233\u0000i\u0001"+
		"\u0000\u0000\u0000\u0002n\u0001\u0000\u0000\u0000\u0004\u0084\u0001\u0000"+
		"\u0000\u0000\u0006\u008f\u0001\u0000\u0000\u0000\b\u0091\u0001\u0000\u0000"+
		"\u0000\n\u009c\u0001\u0000\u0000\u0000\f\u00a3\u0001\u0000\u0000\u0000"+
		"\u000e\u00aa\u0001\u0000\u0000\u0000\u0010\u00b5\u0001\u0000\u0000\u0000"+
		"\u0012\u00c1\u0001\u0000\u0000\u0000\u0014\u00c8\u0001\u0000\u0000\u0000"+
		"\u0016\u00ca\u0001\u0000\u0000\u0000\u0018\u00d4\u0001\u0000\u0000\u0000"+
		"\u001a\u00db\u0001\u0000\u0000\u0000\u001c\u00e2\u0001\u0000\u0000\u0000"+
		"\u001e\u00eb\u0001\u0000\u0000\u0000 \u00f2\u0001\u0000\u0000\u0000\""+
		"\u00fb\u0001\u0000\u0000\u0000$\u0102\u0001\u0000\u0000\u0000&\u010b\u0001"+
		"\u0000\u0000\u0000(\u0112\u0001\u0000\u0000\u0000*\u011b\u0001\u0000\u0000"+
		"\u0000,\u0122\u0001\u0000\u0000\u0000.\u012e\u0001\u0000\u0000\u00000"+
		"\u013d\u0001\u0000\u0000\u00002\u0146\u0001\u0000\u0000\u00004\u014f\u0001"+
		"\u0000\u0000\u00006\u015b\u0001\u0000\u0000\u00008\u016c\u0001\u0000\u0000"+
		"\u0000:\u0178\u0001\u0000\u0000\u0000<\u017a\u0001\u0000\u0000\u0000>"+
		"\u018b\u0001\u0000\u0000\u0000@\u0196\u0001\u0000\u0000\u0000B\u019d\u0001"+
		"\u0000\u0000\u0000D\u01a1\u0001\u0000\u0000\u0000F\u01b1\u0001\u0000\u0000"+
		"\u0000H\u01b8\u0001\u0000\u0000\u0000J\u01bf\u0001\u0000\u0000\u0000L"+
		"\u01c6\u0001\u0000\u0000\u0000N\u01cb\u0001\u0000\u0000\u0000P\u01cd\u0001"+
		"\u0000\u0000\u0000R\u01dc\u0001\u0000\u0000\u0000T\u01e3\u0001\u0000\u0000"+
		"\u0000V\u01ea\u0001\u0000\u0000\u0000X\u01f5\u0001\u0000\u0000\u0000Z"+
		"\u01f7\u0001\u0000\u0000\u0000\\\u01fb\u0001\u0000\u0000\u0000^\u0200"+
		"\u0001\u0000\u0000\u0000`\u0203\u0001\u0000\u0000\u0000b\u0206\u0001\u0000"+
		"\u0000\u0000d\u0209\u0001\u0000\u0000\u0000fh\u0003\u0002\u0001\u0000"+
		"gf\u0001\u0000\u0000\u0000hk\u0001\u0000\u0000\u0000ig\u0001\u0000\u0000"+
		"\u0000ij\u0001\u0000\u0000\u0000jl\u0001\u0000\u0000\u0000ki\u0001\u0000"+
		"\u0000\u0000lm\u0005\u0000\u0000\u0001m\u0001\u0001\u0000\u0000\u0000"+
		"no\u0005\u0001\u0000\u0000o\u0080\u0005,\u0000\u0000pt\u0003\u0012\t\u0000"+
		"qt\u0003\u0004\u0002\u0000rt\u0003\f\u0006\u0000sp\u0001\u0000\u0000\u0000"+
		"sq\u0001\u0000\u0000\u0000sr\u0001\u0000\u0000\u0000tw\u0001\u0000\u0000"+
		"\u0000us\u0001\u0000\u0000\u0000uv\u0001\u0000\u0000\u0000v\u0081\u0001"+
		"\u0000\u0000\u0000wu\u0001\u0000\u0000\u0000x|\u0003\u0006\u0003\u0000"+
		"y|\u0003\u0004\u0002\u0000z|\u0003\f\u0006\u0000{x\u0001\u0000\u0000\u0000"+
		"{y\u0001\u0000\u0000\u0000{z\u0001\u0000\u0000\u0000|\u007f\u0001\u0000"+
		"\u0000\u0000}{\u0001\u0000\u0000\u0000}~\u0001\u0000\u0000\u0000~\u0081"+
		"\u0001\u0000\u0000\u0000\u007f}\u0001\u0000\u0000\u0000\u0080u\u0001\u0000"+
		"\u0000\u0000\u0080}\u0001\u0000\u0000\u0000\u0081\u0082\u0001\u0000\u0000"+
		"\u0000\u0082\u0083\u0003V+\u0000\u0083\u0003\u0001\u0000\u0000\u0000\u0084"+
		"\u0085\u0005,\u0000\u0000\u0085\u0087\u0005\u0002\u0000\u0000\u0086\u0088"+
		"\u0003X,\u0000\u0087\u0086\u0001\u0000\u0000\u0000\u0088\u0089\u0001\u0000"+
		"\u0000\u0000\u0089\u0087\u0001\u0000\u0000\u0000\u0089\u008a\u0001\u0000"+
		"\u0000\u0000\u008a\u0005\u0001\u0000\u0000\u0000\u008b\u0090\u0003\b\u0004"+
		"\u0000\u008c\u0090\u0003\u000e\u0007\u0000\u008d\u0090\u0003L&\u0000\u008e"+
		"\u0090\u0003\u0014\n\u0000\u008f\u008b\u0001\u0000\u0000\u0000\u008f\u008c"+
		"\u0001\u0000\u0000\u0000\u008f\u008d\u0001\u0000\u0000\u0000\u008f\u008e"+
		"\u0001\u0000\u0000\u0000\u0090\u0007\u0001\u0000\u0000\u0000\u0091\u0097"+
		"\u0005\u0003\u0000\u0000\u0092\u0096\u0003\u0012\t\u0000\u0093\u0096\u0003"+
		"\n\u0005\u0000\u0094\u0096\u0003\f\u0006\u0000\u0095\u0092\u0001\u0000"+
		"\u0000\u0000\u0095\u0093\u0001\u0000\u0000\u0000\u0095\u0094\u0001\u0000"+
		"\u0000\u0000\u0096\u0099\u0001\u0000\u0000\u0000\u0097\u0095\u0001\u0000"+
		"\u0000\u0000\u0097\u0098\u0001\u0000\u0000\u0000\u0098\u009a\u0001\u0000"+
		"\u0000\u0000\u0099\u0097\u0001\u0000\u0000\u0000\u009a\u009b\u0003V+\u0000"+
		"\u009b\t\u0001\u0000\u0000\u0000\u009c\u009d\u0005,\u0000\u0000\u009d"+
		"\u009f\u0005\u0002\u0000\u0000\u009e\u00a0\u0003X,\u0000\u009f\u009e\u0001"+
		"\u0000\u0000\u0000\u00a0\u00a1\u0001\u0000\u0000\u0000\u00a1\u009f\u0001"+
		"\u0000\u0000\u0000\u00a1\u00a2\u0001\u0000\u0000\u0000\u00a2\u000b\u0001"+
		"\u0000\u0000\u0000\u00a3\u00a4\u0007\u0000\u0000\u0000\u00a4\u00a6\u0005"+
		"\u0002\u0000\u0000\u00a5\u00a7\u0005,\u0000\u0000\u00a6\u00a5\u0001\u0000"+
		"\u0000\u0000\u00a7\u00a8\u0001\u0000\u0000\u0000\u00a8\u00a6\u0001\u0000"+
		"\u0000\u0000\u00a8\u00a9\u0001\u0000\u0000\u0000\u00a9\r\u0001\u0000\u0000"+
		"\u0000\u00aa\u00ab\u0005\u0007\u0000\u0000\u00ab\u00b0\u0005,\u0000\u0000"+
		"\u00ac\u00af\u0003\u0012\t\u0000\u00ad\u00af\u0003\u0010\b\u0000\u00ae"+
		"\u00ac\u0001\u0000\u0000\u0000\u00ae\u00ad\u0001\u0000\u0000\u0000\u00af"+
		"\u00b2\u0001\u0000\u0000\u0000\u00b0\u00ae\u0001\u0000\u0000\u0000\u00b0"+
		"\u00b1\u0001\u0000\u0000\u0000\u00b1\u00b3\u0001\u0000\u0000\u0000\u00b2"+
		"\u00b0\u0001\u0000\u0000\u0000\u00b3\u00b4\u0003V+\u0000\u00b4\u000f\u0001"+
		"\u0000\u0000\u0000\u00b5\u00b6\u0005,\u0000\u0000\u00b6\u00b8\u0005\u0002"+
		"\u0000\u0000\u00b7\u00b9\u0003X,\u0000\u00b8\u00b7\u0001\u0000\u0000\u0000"+
		"\u00b9\u00ba\u0001\u0000\u0000\u0000\u00ba\u00b8\u0001\u0000\u0000\u0000"+
		"\u00ba\u00bb\u0001\u0000\u0000\u0000\u00bb\u0011\u0001\u0000\u0000\u0000"+
		"\u00bc\u00c2\u00036\u001b\u0000\u00bd\u00c2\u00034\u001a\u0000\u00be\u00c2"+
		"\u0003.\u0017\u0000\u00bf\u00c2\u0003,\u0016\u0000\u00c0\u00c2\u0003\u0014"+
		"\n\u0000\u00c1\u00bc\u0001\u0000\u0000\u0000\u00c1\u00bd\u0001\u0000\u0000"+
		"\u0000\u00c1\u00be\u0001\u0000\u0000\u0000\u00c1\u00bf\u0001\u0000\u0000"+
		"\u0000\u00c1\u00c0\u0001\u0000\u0000\u0000\u00c2\u0013\u0001\u0000\u0000"+
		"\u0000\u00c3\u00c9\u0003\u0016\u000b\u0000\u00c4\u00c9\u0003\u001c\u000e"+
		"\u0000\u00c5\u00c9\u0003 \u0010\u0000\u00c6\u00c9\u0003$\u0012\u0000\u00c7"+
		"\u00c9\u0003(\u0014\u0000\u00c8\u00c3\u0001\u0000\u0000\u0000\u00c8\u00c4"+
		"\u0001\u0000\u0000\u0000\u00c8\u00c5\u0001\u0000\u0000\u0000\u00c8\u00c6"+
		"\u0001\u0000\u0000\u0000\u00c8\u00c7\u0001\u0000\u0000\u0000\u00c9\u0015"+
		"\u0001\u0000\u0000\u0000\u00ca\u00cf\u0005\b\u0000\u0000\u00cb\u00ce\u0003"+
		"\u0018\f\u0000\u00cc\u00ce\u0003\u001a\r\u0000\u00cd\u00cb\u0001\u0000"+
		"\u0000\u0000\u00cd\u00cc\u0001\u0000\u0000\u0000\u00ce\u00d1\u0001\u0000"+
		"\u0000\u0000\u00cf\u00cd\u0001\u0000\u0000\u0000\u00cf\u00d0\u0001\u0000"+
		"\u0000\u0000\u00d0\u00d2\u0001\u0000\u0000\u0000\u00d1\u00cf\u0001\u0000"+
		"\u0000\u0000\u00d2\u00d3\u0003V+\u0000\u00d3\u0017\u0001\u0000\u0000\u0000"+
		"\u00d4\u00d5\u0005\u0001\u0000\u0000\u00d5\u00d7\u0005\u0002\u0000\u0000"+
		"\u00d6\u00d8\u0005,\u0000\u0000\u00d7\u00d6\u0001\u0000\u0000\u0000\u00d8"+
		"\u00d9\u0001\u0000\u0000\u0000\u00d9\u00d7\u0001\u0000\u0000\u0000\u00d9"+
		"\u00da\u0001\u0000\u0000\u0000\u00da\u0019\u0001\u0000\u0000\u0000\u00db"+
		"\u00dc\u0005\t\u0000\u0000\u00dc\u00de\u0005\u0002\u0000\u0000\u00dd\u00df"+
		"\u0005,\u0000\u0000\u00de\u00dd\u0001\u0000\u0000\u0000\u00df\u00e0\u0001"+
		"\u0000\u0000\u0000\u00e0\u00de\u0001\u0000\u0000\u0000\u00e0\u00e1\u0001"+
		"\u0000\u0000\u0000\u00e1\u001b\u0001\u0000\u0000\u0000\u00e2\u00e6\u0005"+
		"\n\u0000\u0000\u00e3\u00e5\u0003\u001e\u000f\u0000\u00e4\u00e3\u0001\u0000"+
		"\u0000\u0000\u00e5\u00e8\u0001\u0000\u0000\u0000\u00e6\u00e4\u0001\u0000"+
		"\u0000\u0000\u00e6\u00e7\u0001\u0000\u0000\u0000\u00e7\u00e9\u0001\u0000"+
		"\u0000\u0000\u00e8\u00e6\u0001\u0000\u0000\u0000\u00e9\u00ea\u0003V+\u0000"+
		"\u00ea\u001d\u0001\u0000\u0000\u0000\u00eb\u00ec\u0005,\u0000\u0000\u00ec"+
		"\u00ee\u0005\u0002\u0000\u0000\u00ed\u00ef\u0003X,\u0000\u00ee\u00ed\u0001"+
		"\u0000\u0000\u0000\u00ef\u00f0\u0001\u0000\u0000\u0000\u00f0\u00ee\u0001"+
		"\u0000\u0000\u0000\u00f0\u00f1\u0001\u0000\u0000\u0000\u00f1\u001f\u0001"+
		"\u0000\u0000\u0000\u00f2\u00f6\u0005\u000b\u0000\u0000\u00f3\u00f5\u0003"+
		"\"\u0011\u0000\u00f4\u00f3\u0001\u0000\u0000\u0000\u00f5\u00f8\u0001\u0000"+
		"\u0000\u0000\u00f6\u00f4\u0001\u0000\u0000\u0000\u00f6\u00f7\u0001\u0000"+
		"\u0000\u0000\u00f7\u00f9\u0001\u0000\u0000\u0000\u00f8\u00f6\u0001\u0000"+
		"\u0000\u0000\u00f9\u00fa\u0003V+\u0000\u00fa!\u0001\u0000\u0000\u0000"+
		"\u00fb\u00fc\u0005,\u0000\u0000\u00fc\u00fe\u0005\u0002\u0000\u0000\u00fd"+
		"\u00ff\u0003X,\u0000\u00fe\u00fd\u0001\u0000\u0000\u0000\u00ff\u0100\u0001"+
		"\u0000\u0000\u0000\u0100\u00fe\u0001\u0000\u0000\u0000\u0100\u0101\u0001"+
		"\u0000\u0000\u0000\u0101#\u0001\u0000\u0000\u0000\u0102\u0106\u0005\f"+
		"\u0000\u0000\u0103\u0105\u0003&\u0013\u0000\u0104\u0103\u0001\u0000\u0000"+
		"\u0000\u0105\u0108\u0001\u0000\u0000\u0000\u0106\u0104\u0001\u0000\u0000"+
		"\u0000\u0106\u0107\u0001\u0000\u0000\u0000\u0107\u0109\u0001\u0000\u0000"+
		"\u0000\u0108\u0106\u0001\u0000\u0000\u0000\u0109\u010a\u0003V+\u0000\u010a"+
		"%\u0001\u0000\u0000\u0000\u010b\u010c\u0005,\u0000\u0000\u010c\u010e\u0005"+
		"\u0002\u0000\u0000\u010d\u010f\u0003X,\u0000\u010e\u010d\u0001\u0000\u0000"+
		"\u0000\u010f\u0110\u0001\u0000\u0000\u0000\u0110\u010e\u0001\u0000\u0000"+
		"\u0000\u0110\u0111\u0001\u0000\u0000\u0000\u0111\'\u0001\u0000\u0000\u0000"+
		"\u0112\u0116\u0005\r\u0000\u0000\u0113\u0115\u0003*\u0015\u0000\u0114"+
		"\u0113\u0001\u0000\u0000\u0000\u0115\u0118\u0001\u0000\u0000\u0000\u0116"+
		"\u0114\u0001\u0000\u0000\u0000\u0116\u0117\u0001\u0000\u0000\u0000\u0117"+
		"\u0119\u0001\u0000\u0000\u0000\u0118\u0116\u0001\u0000\u0000\u0000\u0119"+
		"\u011a\u0003V+\u0000\u011a)\u0001\u0000\u0000\u0000\u011b\u011c\u0005"+
		",\u0000\u0000\u011c\u011e\u0005\u0002\u0000\u0000\u011d\u011f\u0003X,"+
		"\u0000\u011e\u011d\u0001\u0000\u0000\u0000\u011f\u0120\u0001\u0000\u0000"+
		"\u0000\u0120\u011e\u0001\u0000\u0000\u0000\u0120\u0121\u0001\u0000\u0000"+
		"\u0000\u0121+\u0001\u0000\u0000\u0000\u0122\u0123\u0005\u000e\u0000\u0000"+
		"\u0123\u0124\u0005\u0002\u0000\u0000\u0124\u0125\u0005,\u0000\u0000\u0125"+
		"\u0129\u0005,\u0000\u0000\u0126\u0128\u0003P(\u0000\u0127\u0126\u0001"+
		"\u0000\u0000\u0000\u0128\u012b\u0001\u0000\u0000\u0000\u0129\u0127\u0001"+
		"\u0000\u0000\u0000\u0129\u012a\u0001\u0000\u0000\u0000\u012a\u012c\u0001"+
		"\u0000\u0000\u0000\u012b\u0129\u0001\u0000\u0000\u0000\u012c\u012d\u0003"+
		"V+\u0000\u012d-\u0001\u0000\u0000\u0000\u012e\u012f\u0005\u000f\u0000"+
		"\u0000\u012f\u0130\u0005\u0002\u0000\u0000\u0130\u0131\u0005,\u0000\u0000"+
		"\u0131\u0138\u0005,\u0000\u0000\u0132\u0137\u0003P(\u0000\u0133\u0137"+
		"\u00032\u0019\u0000\u0134\u0137\u0003\f\u0006\u0000\u0135\u0137\u0003"+
		"0\u0018\u0000\u0136\u0132\u0001\u0000\u0000\u0000\u0136\u0133\u0001\u0000"+
		"\u0000\u0000\u0136\u0134\u0001\u0000\u0000\u0000\u0136\u0135\u0001\u0000"+
		"\u0000\u0000\u0137\u013a\u0001\u0000\u0000\u0000\u0138\u0136\u0001\u0000"+
		"\u0000\u0000\u0138\u0139\u0001\u0000\u0000\u0000\u0139\u013b\u0001\u0000"+
		"\u0000\u0000\u013a\u0138\u0001\u0000\u0000\u0000\u013b\u013c\u0003V+\u0000"+
		"\u013c/\u0001\u0000\u0000\u0000\u013d\u0141\u0007\u0001\u0000\u0000\u013e"+
		"\u0140\u0003P(\u0000\u013f\u013e\u0001\u0000\u0000\u0000\u0140\u0143\u0001"+
		"\u0000\u0000\u0000\u0141\u013f\u0001\u0000\u0000\u0000\u0141\u0142\u0001"+
		"\u0000\u0000\u0000\u0142\u0144\u0001\u0000\u0000\u0000\u0143\u0141\u0001"+
		"\u0000\u0000\u0000\u0144\u0145\u0003V+\u0000\u01451\u0001\u0000\u0000"+
		"\u0000\u0146\u014a\u0007\u0002\u0000\u0000\u0147\u0149\u0003P(\u0000\u0148"+
		"\u0147\u0001\u0000\u0000\u0000\u0149\u014c\u0001\u0000\u0000\u0000\u014a"+
		"\u0148\u0001\u0000\u0000\u0000\u014a\u014b\u0001\u0000\u0000\u0000\u014b"+
		"\u014d\u0001\u0000\u0000\u0000\u014c\u014a\u0001\u0000\u0000\u0000\u014d"+
		"\u014e\u0003V+\u0000\u014e3\u0001\u0000\u0000\u0000\u014f\u0150\u0005"+
		"\u0015\u0000\u0000\u0150\u0151\u0005\u0002\u0000\u0000\u0151\u0152\u0005"+
		",\u0000\u0000\u0152\u0156\u0005,\u0000\u0000\u0153\u0155\u0003P(\u0000"+
		"\u0154\u0153\u0001\u0000\u0000\u0000\u0155\u0158\u0001\u0000\u0000\u0000"+
		"\u0156\u0154\u0001\u0000\u0000\u0000\u0156\u0157\u0001\u0000\u0000\u0000"+
		"\u0157\u0159\u0001\u0000\u0000\u0000\u0158\u0156\u0001\u0000\u0000\u0000"+
		"\u0159\u015a\u0003V+\u0000\u015a5\u0001\u0000\u0000\u0000\u015b\u015c"+
		"\u0005\u0016\u0000\u0000\u015c\u015d\u0005\u0002\u0000\u0000\u015d\u015e"+
		"\u0005,\u0000\u0000\u015e\u0167\u0005,\u0000\u0000\u015f\u0161\u0003:"+
		"\u001d\u0000\u0160\u015f\u0001\u0000\u0000\u0000\u0161\u0162\u0001\u0000"+
		"\u0000\u0000\u0162\u0160\u0001\u0000\u0000\u0000\u0162\u0163\u0001\u0000"+
		"\u0000\u0000\u0163\u0166\u0001\u0000\u0000\u0000\u0164\u0166\u00038\u001c"+
		"\u0000\u0165\u0160\u0001\u0000\u0000\u0000\u0165\u0164\u0001\u0000\u0000"+
		"\u0000\u0166\u0169\u0001\u0000\u0000\u0000\u0167\u0165\u0001\u0000\u0000"+
		"\u0000\u0167\u0168\u0001\u0000\u0000\u0000\u0168\u016a\u0001\u0000\u0000"+
		"\u0000\u0169\u0167\u0001\u0000\u0000\u0000\u016a\u016b\u0003V+\u0000\u016b"+
		"7\u0001\u0000\u0000\u0000\u016c\u016d\u0005,\u0000\u0000\u016d\u016f\u0005"+
		"\u0002\u0000\u0000\u016e\u0170\u0003X,\u0000\u016f\u016e\u0001\u0000\u0000"+
		"\u0000\u0170\u0171\u0001\u0000\u0000\u0000\u0171\u016f\u0001\u0000\u0000"+
		"\u0000\u0171\u0172\u0001\u0000\u0000\u0000\u01729\u0001\u0000\u0000\u0000"+
		"\u0173\u0179\u0003<\u001e\u0000\u0174\u0179\u0003>\u001f\u0000\u0175\u0179"+
		"\u0003D\"\u0000\u0176\u0179\u0003H$\u0000\u0177\u0179\u0003J%\u0000\u0178"+
		"\u0173\u0001\u0000\u0000\u0000\u0178\u0174\u0001\u0000\u0000\u0000\u0178"+
		"\u0175\u0001\u0000\u0000\u0000\u0178\u0176\u0001\u0000\u0000\u0000\u0178"+
		"\u0177\u0001\u0000\u0000\u0000\u0179;\u0001\u0000\u0000\u0000\u017a\u017b"+
		"\u0005\u0017\u0000\u0000\u017b\u017d\u0005\u0002\u0000\u0000\u017c\u017e"+
		"\u0005,\u0000\u0000\u017d\u017c\u0001\u0000\u0000\u0000\u017e\u017f\u0001"+
		"\u0000\u0000\u0000\u017f\u017d\u0001\u0000\u0000\u0000\u017f\u0180\u0001"+
		"\u0000\u0000\u0000\u0180\u0186\u0001\u0000\u0000\u0000\u0181\u0185\u0003"+
		"@ \u0000\u0182\u0185\u0003N\'\u0000\u0183\u0185\u0003B!\u0000\u0184\u0181"+
		"\u0001\u0000\u0000\u0000\u0184\u0182\u0001\u0000\u0000\u0000\u0184\u0183"+
		"\u0001\u0000\u0000\u0000\u0185\u0188\u0001\u0000\u0000\u0000\u0186\u0184"+
		"\u0001\u0000\u0000\u0000\u0186\u0187\u0001\u0000\u0000\u0000\u0187\u0189"+
		"\u0001\u0000\u0000\u0000\u0188\u0186\u0001\u0000\u0000\u0000\u0189\u018a"+
		"\u0003V+\u0000\u018a=\u0001\u0000\u0000\u0000\u018b\u0191\u0005\u0018"+
		"\u0000\u0000\u018c\u0190\u0003@ \u0000\u018d\u0190\u0003N\'\u0000\u018e"+
		"\u0190\u0003B!\u0000\u018f\u018c\u0001\u0000\u0000\u0000\u018f\u018d\u0001"+
		"\u0000\u0000\u0000\u018f\u018e\u0001\u0000\u0000\u0000\u0190\u0193\u0001"+
		"\u0000\u0000\u0000\u0191\u018f\u0001\u0000\u0000\u0000\u0191\u0192\u0001"+
		"\u0000\u0000\u0000\u0192\u0194\u0001\u0000\u0000\u0000\u0193\u0191\u0001"+
		"\u0000\u0000\u0000\u0194\u0195\u0003V+\u0000\u0195?\u0001\u0000\u0000"+
		"\u0000\u0196\u0197\u0005,\u0000\u0000\u0197\u0199\u0005\u0002\u0000\u0000"+
		"\u0198\u019a\u0003X,\u0000\u0199\u0198\u0001\u0000\u0000\u0000\u019a\u019b"+
		"\u0001\u0000\u0000\u0000\u019b\u0199\u0001\u0000\u0000\u0000\u019b\u019c"+
		"\u0001\u0000\u0000\u0000\u019cA\u0001\u0000\u0000\u0000\u019d\u019e\u0005"+
		"\u0019\u0000\u0000\u019e\u019f\u0005\u0002\u0000\u0000\u019f\u01a0\u0005"+
		",\u0000\u0000\u01a0C\u0001\u0000\u0000\u0000\u01a1\u01a2\u0005\u001a\u0000"+
		"\u0000\u01a2\u01a3\u0005\u0002\u0000\u0000\u01a3\u01a5\u0005,\u0000\u0000"+
		"\u01a4\u01a6\u0005,\u0000\u0000\u01a5\u01a4\u0001\u0000\u0000\u0000\u01a6"+
		"\u01a7\u0001\u0000\u0000\u0000\u01a7\u01a5\u0001\u0000\u0000\u0000\u01a7"+
		"\u01a8\u0001\u0000\u0000\u0000\u01a8\u01ac\u0001\u0000\u0000\u0000\u01a9"+
		"\u01ab\u0003F#\u0000\u01aa\u01a9\u0001\u0000\u0000\u0000\u01ab\u01ae\u0001"+
		"\u0000\u0000\u0000\u01ac\u01aa\u0001\u0000\u0000\u0000\u01ac\u01ad\u0001"+
		"\u0000\u0000\u0000\u01ad\u01af\u0001\u0000\u0000\u0000\u01ae\u01ac\u0001"+
		"\u0000\u0000\u0000\u01af\u01b0\u0003V+\u0000\u01b0E\u0001\u0000\u0000"+
		"\u0000\u01b1\u01b2\u0005,\u0000\u0000\u01b2\u01b4\u0005\u0002\u0000\u0000"+
		"\u01b3\u01b5\u0003X,\u0000\u01b4\u01b3\u0001\u0000\u0000\u0000\u01b5\u01b6"+
		"\u0001\u0000\u0000\u0000\u01b6\u01b4\u0001\u0000\u0000\u0000\u01b6\u01b7"+
		"\u0001\u0000\u0000\u0000\u01b7G\u0001\u0000\u0000\u0000\u01b8\u01b9\u0005"+
		"\u001b\u0000\u0000\u01b9\u01bb\u0005\u0002\u0000\u0000\u01ba\u01bc\u0005"+
		",\u0000\u0000\u01bb\u01ba\u0001\u0000\u0000\u0000\u01bc\u01bd\u0001\u0000"+
		"\u0000\u0000\u01bd\u01bb\u0001\u0000\u0000\u0000\u01bd\u01be\u0001\u0000"+
		"\u0000\u0000\u01beI\u0001\u0000\u0000\u0000\u01bf\u01c0\u0005\u001c\u0000"+
		"\u0000\u01c0\u01c2\u0005\u0002\u0000\u0000\u01c1\u01c3\u0005,\u0000\u0000"+
		"\u01c2\u01c1\u0001\u0000\u0000\u0000\u01c3\u01c4\u0001\u0000\u0000\u0000"+
		"\u01c4\u01c2\u0001\u0000\u0000\u0000\u01c4\u01c5\u0001\u0000\u0000\u0000"+
		"\u01c5K\u0001\u0000\u0000\u0000\u01c6\u01c7\u0005\u001d\u0000\u0000\u01c7"+
		"\u01c8\u0005,\u0000\u0000\u01c8M\u0001\u0000\u0000\u0000\u01c9\u01cc\u0003"+
		"R)\u0000\u01ca\u01cc\u0003T*\u0000\u01cb\u01c9\u0001\u0000\u0000\u0000"+
		"\u01cb\u01ca\u0001\u0000\u0000\u0000\u01ccO\u0001\u0000\u0000\u0000\u01cd"+
		"\u01d5\u0005,\u0000\u0000\u01ce\u01d6\u0005\u0002\u0000\u0000\u01cf\u01d1"+
		"\u0005/\u0000\u0000\u01d0\u01cf\u0001\u0000\u0000\u0000\u01d1\u01d4\u0001"+
		"\u0000\u0000\u0000\u01d2\u01d0\u0001\u0000\u0000\u0000\u01d2\u01d3\u0001"+
		"\u0000\u0000\u0000\u01d3\u01d6\u0001\u0000\u0000\u0000\u01d4\u01d2\u0001"+
		"\u0000\u0000\u0000\u01d5\u01ce\u0001\u0000\u0000\u0000\u01d5\u01d2\u0001"+
		"\u0000\u0000\u0000\u01d6\u01d8\u0001\u0000\u0000\u0000\u01d7\u01d9\u0003"+
		"X,\u0000\u01d8\u01d7\u0001\u0000\u0000\u0000\u01d9\u01da\u0001\u0000\u0000"+
		"\u0000\u01da\u01d8\u0001\u0000\u0000\u0000\u01da\u01db\u0001\u0000\u0000"+
		"\u0000\u01dbQ\u0001\u0000\u0000\u0000\u01dc\u01dd\u0007\u0003\u0000\u0000"+
		"\u01dd\u01df\u0005\u0002\u0000\u0000\u01de\u01e0\u0003X,\u0000\u01df\u01de"+
		"\u0001\u0000\u0000\u0000\u01e0\u01e1\u0001\u0000\u0000\u0000\u01e1\u01df"+
		"\u0001\u0000\u0000\u0000\u01e1\u01e2\u0001\u0000\u0000\u0000\u01e2S\u0001"+
		"\u0000\u0000\u0000\u01e3\u01e4\u0007\u0004\u0000\u0000\u01e4\u01e6\u0005"+
		"\u0002\u0000\u0000\u01e5\u01e7\u0003X,\u0000\u01e6\u01e5\u0001\u0000\u0000"+
		"\u0000\u01e7\u01e8\u0001\u0000\u0000\u0000\u01e8\u01e6\u0001\u0000\u0000"+
		"\u0000\u01e8\u01e9\u0001\u0000\u0000\u0000\u01e9U\u0001\u0000\u0000\u0000"+
		"\u01ea\u01eb\u0007\u0005\u0000\u0000\u01ebW\u0001\u0000\u0000\u0000\u01ec"+
		"\u01f6\u0003d2\u0000\u01ed\u01f6\u0003Z-\u0000\u01ee\u01f6\u0003^/\u0000"+
		"\u01ef\u01f6\u0005,\u0000\u0000\u01f0\u01f6\u0005(\u0000\u0000\u01f1\u01f6"+
		"\u0005*\u0000\u0000\u01f2\u01f6\u0005+\u0000\u0000\u01f3\u01f6\u0007\u0003"+
		"\u0000\u0000\u01f4\u01f6\u0007\u0004\u0000\u0000\u01f5\u01ec\u0001\u0000"+
		"\u0000\u0000\u01f5\u01ed\u0001\u0000\u0000\u0000\u01f5\u01ee\u0001\u0000"+
		"\u0000\u0000\u01f5\u01ef\u0001\u0000\u0000\u0000\u01f5\u01f0\u0001\u0000"+
		"\u0000\u0000\u01f5\u01f1\u0001\u0000\u0000\u0000\u01f5\u01f2\u0001\u0000"+
		"\u0000\u0000\u01f5\u01f3\u0001\u0000\u0000\u0000\u01f5\u01f4\u0001\u0000"+
		"\u0000\u0000\u01f6Y\u0001\u0000\u0000\u0000\u01f7\u01f8\u0005,\u0000\u0000"+
		"\u01f8\u01f9\u0005%\u0000\u0000\u01f9\u01fa\u0005,\u0000\u0000\u01fa["+
		"\u0001\u0000\u0000\u0000\u01fb\u01fc\u0005)\u0000\u0000\u01fc\u01fd\u0005"+
		")\u0000\u0000\u01fd\u01fe\u0005)\u0000\u0000\u01fe\u01ff\u0005)\u0000"+
		"\u0000\u01ff]\u0001\u0000\u0000\u0000\u0200\u0201\u0007\u0006\u0000\u0000"+
		"\u0201\u0202\u0005&\u0000\u0000\u0202_\u0001\u0000\u0000\u0000\u0203\u0204"+
		"\u0005(\u0000\u0000\u0204\u0205\u0005(\u0000\u0000\u0205a\u0001\u0000"+
		"\u0000\u0000\u0206\u0207\u0005*\u0000\u0000\u0207\u0208\u0005*\u0000\u0000"+
		"\u0208c\u0001\u0000\u0000\u0000\u0209\u020d\u0005\'\u0000\u0000\u020a"+
		"\u020c\b\u0007\u0000\u0000\u020b\u020a\u0001\u0000\u0000\u0000\u020c\u020f"+
		"\u0001\u0000\u0000\u0000\u020d\u020b\u0001\u0000\u0000\u0000\u020d\u020e"+
		"\u0001\u0000\u0000\u0000\u020e\u0210\u0001\u0000\u0000\u0000\u020f\u020d"+
		"\u0001\u0000\u0000\u0000\u0210\u0211\u0005\'\u0000\u0000\u0211e\u0001"+
		"\u0000\u0000\u0000;isu{}\u0080\u0089\u008f\u0095\u0097\u00a1\u00a8\u00ae"+
		"\u00b0\u00ba\u00c1\u00c8\u00cd\u00cf\u00d9\u00e0\u00e6\u00f0\u00f6\u0100"+
		"\u0106\u0110\u0116\u0120\u0129\u0136\u0138\u0141\u014a\u0156\u0162\u0165"+
		"\u0167\u0171\u0178\u017f\u0184\u0186\u018f\u0191\u019b\u01a7\u01ac\u01b6"+
		"\u01bd\u01c4\u01cb\u01d2\u01d5\u01da\u01e1\u01e8\u01f5\u020d";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}