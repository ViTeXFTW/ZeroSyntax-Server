// Generated from c:/Users/Mads/Sync/VSC/ZeroSyntax/ZeroSyntax-Server/server/src/utils/antlr/MapIni.g4 by ANTLR 4.13.1
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
		T__38=39, T__39=40, INT=41, INT256=42, FLOAT=43, BOOL=44, ID=45, SKIp=46, 
		COMMENT=47, WS=48;
	public static final int
		RULE_program = 0, RULE_classes = 1, RULE_objectReskin = 2, RULE_object = 3, 
		RULE_objectProperty = 4, RULE_moduleBlocks = 5, RULE_addModuleBlock = 6, 
		RULE_addModuleProperty = 7, RULE_objectKindOfProperty = 8, RULE_replaceModuleBlock = 9, 
		RULE_replaceModuleProperty = 10, RULE_modules = 11, RULE_objectBlocks = 12, 
		RULE_objectPrerequisites = 13, RULE_objectPrerequisitesobjectProperty = 14, 
		RULE_objectPrerequisitessciencePropety = 15, RULE_objectWeaponSet = 16, 
		RULE_objectWeaponSetPropety = 17, RULE_objectArmorSet = 18, RULE_objectArmorSetPropety = 19, 
		RULE_objectUnitSpecificSounds = 20, RULE_objectUnitSpecificSoundsPropety = 21, 
		RULE_objectUnitSpecificFX = 22, RULE_objectUnitSpecificFXPropety = 23, 
		RULE_clientModuleBlock = 24, RULE_behaviormoduleBlock = 25, RULE_behaviorDecals = 26, 
		RULE_behaviorTurret = 27, RULE_bodyModuleBlock = 28, RULE_drawModuleBlock = 29, 
		RULE_drawModuleProperty = 30, RULE_conditionStateBlocks = 31, RULE_conditionStateBlock = 32, 
		RULE_defaultConditionStateBlock = 33, RULE_conditionStateProperty = 34, 
		RULE_transitionKeyProperty = 35, RULE_transitionStateBlock = 36, RULE_transitionStateProperty = 37, 
		RULE_aliasConditionStateBlock = 38, RULE_ignoreConditionStateBlock = 39, 
		RULE_removeModuleBlock = 40, RULE_turretProperty = 41, RULE_property = 42, 
		RULE_tturretProperty = 43, RULE_altTurretProperty = 44, RULE_end = 45, 
		RULE_value = 46, RULE_ftype = 47, RULE_rgb = 48, RULE_procent = 49, RULE_intRang = 50, 
		RULE_floatRang = 51, RULE_quoutedID = 52;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "classes", "objectReskin", "object", "objectProperty", "moduleBlocks", 
			"addModuleBlock", "addModuleProperty", "objectKindOfProperty", "replaceModuleBlock", 
			"replaceModuleProperty", "modules", "objectBlocks", "objectPrerequisites", 
			"objectPrerequisitesobjectProperty", "objectPrerequisitessciencePropety", 
			"objectWeaponSet", "objectWeaponSetPropety", "objectArmorSet", "objectArmorSetPropety", 
			"objectUnitSpecificSounds", "objectUnitSpecificSoundsPropety", "objectUnitSpecificFX", 
			"objectUnitSpecificFXPropety", "clientModuleBlock", "behaviormoduleBlock", 
			"behaviorDecals", "behaviorTurret", "bodyModuleBlock", "drawModuleBlock", 
			"drawModuleProperty", "conditionStateBlocks", "conditionStateBlock", 
			"defaultConditionStateBlock", "conditionStateProperty", "transitionKeyProperty", 
			"transitionStateBlock", "transitionStateProperty", "aliasConditionStateBlock", 
			"ignoreConditionStateBlock", "removeModuleBlock", "turretProperty", "property", 
			"tturretProperty", "altTurretProperty", "end", "value", "ftype", "rgb", 
			"procent", "intRang", "floatRang", "quoutedID"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'ObjectReskin'", "'Object'", "'='", "'AddModule'", "'KindOf'", 
			"'kindof'", "'KINDOF'", "'ReplaceModule'", "'Prerequisites'", "'Science'", 
			"'WeaponSet'", "'ArmorSet'", "'UnitSpecificSounds'", "'UnitSpecificFX'", 
			"'ClientUpdate'", "'Behavior'", "'AttackAreaDecal'", "'TargetingReticleDecal'", 
			"'GridDecalTemplate'", "'Turret'", "'AltTurret'", "'Body'", "'Draw'", 
			"'ConditionState'", "'DefaultConditionState'", "'TransitionKey'", "'TransitionState'", 
			"'AliasConditionState'", "'IgnoreConditionStates'", "'RemoveModule'", 
			"'turret'", "'TURRET'", "'altturret'", "'ALTTURRET'", "'End'", "'end'", 
			"'END'", "'.'", "'%'", "'\"'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, "INT", "INT256", "FLOAT", "BOOL", "ID", 
			"SKIp", "COMMENT", "WS"
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
		public List<ClassesContext> classes() {
			return getRuleContexts(ClassesContext.class);
		}
		public ClassesContext classes(int i) {
			return getRuleContext(ClassesContext.class,i);
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
			setState(109);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__0 || _la==T__1) {
				{
				{
				setState(106);
				classes();
				}
				}
				setState(111);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(112);
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
	public static class ClassesContext extends ParserRuleContext {
		public ObjectContext object() {
			return getRuleContext(ObjectContext.class,0);
		}
		public ObjectReskinContext objectReskin() {
			return getRuleContext(ObjectReskinContext.class,0);
		}
		public ClassesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classes; }
	}

	public final ClassesContext classes() throws RecognitionException {
		ClassesContext _localctx = new ClassesContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_classes);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(116);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__1:
				{
				setState(114);
				object();
				}
				break;
			case T__0:
				{
				setState(115);
				objectReskin();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public static class ObjectReskinContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(MapIniParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(MapIniParser.ID, i);
		}
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
		public ObjectReskinContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectReskin; }
	}

	public final ObjectReskinContext objectReskin() throws RecognitionException {
		ObjectReskinContext _localctx = new ObjectReskinContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_objectReskin);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(118);
			match(T__0);
			setState(119);
			match(ID);
			setState(120);
			match(ID);
			setState(137);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				{
				setState(126);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 35184384801504L) != 0)) {
					{
					setState(124);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case T__8:
					case T__10:
					case T__11:
					case T__12:
					case T__13:
					case T__14:
					case T__15:
					case T__21:
					case T__22:
						{
						setState(121);
						modules();
						}
						break;
					case ID:
						{
						setState(122);
						objectProperty();
						}
						break;
					case T__4:
					case T__5:
					case T__6:
						{
						setState(123);
						objectKindOfProperty();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					setState(128);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case 2:
				{
				setState(134);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 35185445862384L) != 0)) {
					{
					setState(132);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case T__3:
					case T__7:
					case T__8:
					case T__10:
					case T__11:
					case T__12:
					case T__13:
					case T__29:
						{
						setState(129);
						moduleBlocks();
						}
						break;
					case ID:
						{
						setState(130);
						objectProperty();
						}
						break;
					case T__4:
					case T__5:
					case T__6:
						{
						setState(131);
						objectKindOfProperty();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					setState(136);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			}
			setState(139);
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
		enterRule(_localctx, 6, RULE_object);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(141);
			match(T__1);
			setState(142);
			match(ID);
			setState(159);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
			case 1:
				{
				setState(148);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 35184384801504L) != 0)) {
					{
					setState(146);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case T__8:
					case T__10:
					case T__11:
					case T__12:
					case T__13:
					case T__14:
					case T__15:
					case T__21:
					case T__22:
						{
						setState(143);
						modules();
						}
						break;
					case ID:
						{
						setState(144);
						objectProperty();
						}
						break;
					case T__4:
					case T__5:
					case T__6:
						{
						setState(145);
						objectKindOfProperty();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					setState(150);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case 2:
				{
				setState(156);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 35185445862384L) != 0)) {
					{
					setState(154);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case T__3:
					case T__7:
					case T__8:
					case T__10:
					case T__11:
					case T__12:
					case T__13:
					case T__29:
						{
						setState(151);
						moduleBlocks();
						}
						break;
					case ID:
						{
						setState(152);
						objectProperty();
						}
						break;
					case T__4:
					case T__5:
					case T__6:
						{
						setState(153);
						objectKindOfProperty();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					setState(158);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			}
			setState(161);
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
		enterRule(_localctx, 8, RULE_objectProperty);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(163);
			match(ID);
			setState(164);
			match(T__2);
			setState(166); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(165);
					value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(168); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
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
		enterRule(_localctx, 10, RULE_moduleBlocks);
		try {
			setState(174);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__3:
				enterOuterAlt(_localctx, 1);
				{
				setState(170);
				addModuleBlock();
				}
				break;
			case T__7:
				enterOuterAlt(_localctx, 2);
				{
				setState(171);
				replaceModuleBlock();
				}
				break;
			case T__29:
				enterOuterAlt(_localctx, 3);
				{
				setState(172);
				removeModuleBlock();
				}
				break;
			case T__8:
			case T__10:
			case T__11:
			case T__12:
			case T__13:
				enterOuterAlt(_localctx, 4);
				{
				setState(173);
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
		enterRule(_localctx, 12, RULE_addModuleBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(176);
			match(T__3);
			setState(182);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 35184384801504L) != 0)) {
				{
				setState(180);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__8:
				case T__10:
				case T__11:
				case T__12:
				case T__13:
				case T__14:
				case T__15:
				case T__21:
				case T__22:
					{
					setState(177);
					modules();
					}
					break;
				case ID:
					{
					setState(178);
					addModuleProperty();
					}
					break;
				case T__4:
				case T__5:
				case T__6:
					{
					setState(179);
					objectKindOfProperty();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(184);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(185);
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
		enterRule(_localctx, 14, RULE_addModuleProperty);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(187);
			match(ID);
			setState(188);
			match(T__2);
			setState(190); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(189);
					value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(192); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
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
		enterRule(_localctx, 16, RULE_objectKindOfProperty);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(194);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 224L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(195);
			match(T__2);
			setState(197); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(196);
					match(ID);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(199); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,17,_ctx);
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
		enterRule(_localctx, 18, RULE_replaceModuleBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(201);
			match(T__7);
			setState(202);
			match(ID);
			setState(207);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 35184384801280L) != 0)) {
				{
				setState(205);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__8:
				case T__10:
				case T__11:
				case T__12:
				case T__13:
				case T__14:
				case T__15:
				case T__21:
				case T__22:
					{
					setState(203);
					modules();
					}
					break;
				case ID:
					{
					setState(204);
					replaceModuleProperty();
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
		enterRule(_localctx, 20, RULE_replaceModuleProperty);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(212);
			match(ID);
			setState(213);
			match(T__2);
			setState(215); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(214);
					value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(217); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
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
		enterRule(_localctx, 22, RULE_modules);
		try {
			setState(224);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__22:
				enterOuterAlt(_localctx, 1);
				{
				setState(219);
				drawModuleBlock();
				}
				break;
			case T__21:
				enterOuterAlt(_localctx, 2);
				{
				setState(220);
				bodyModuleBlock();
				}
				break;
			case T__15:
				enterOuterAlt(_localctx, 3);
				{
				setState(221);
				behaviormoduleBlock();
				}
				break;
			case T__14:
				enterOuterAlt(_localctx, 4);
				{
				setState(222);
				clientModuleBlock();
				}
				break;
			case T__8:
			case T__10:
			case T__11:
			case T__12:
			case T__13:
				enterOuterAlt(_localctx, 5);
				{
				setState(223);
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
		enterRule(_localctx, 24, RULE_objectBlocks);
		try {
			setState(231);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__8:
				enterOuterAlt(_localctx, 1);
				{
				setState(226);
				objectPrerequisites();
				}
				break;
			case T__10:
				enterOuterAlt(_localctx, 2);
				{
				setState(227);
				objectWeaponSet();
				}
				break;
			case T__11:
				enterOuterAlt(_localctx, 3);
				{
				setState(228);
				objectArmorSet();
				}
				break;
			case T__12:
				enterOuterAlt(_localctx, 4);
				{
				setState(229);
				objectUnitSpecificSounds();
				}
				break;
			case T__13:
				enterOuterAlt(_localctx, 5);
				{
				setState(230);
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
		enterRule(_localctx, 26, RULE_objectPrerequisites);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(233);
			match(T__8);
			setState(238);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__1 || _la==T__9) {
				{
				setState(236);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__1:
					{
					setState(234);
					objectPrerequisitesobjectProperty();
					}
					break;
				case T__9:
					{
					setState(235);
					objectPrerequisitessciencePropety();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(240);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(241);
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
		enterRule(_localctx, 28, RULE_objectPrerequisitesobjectProperty);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(243);
			match(T__1);
			setState(244);
			match(T__2);
			setState(246); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(245);
				match(ID);
				}
				}
				setState(248); 
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
		enterRule(_localctx, 30, RULE_objectPrerequisitessciencePropety);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(250);
			match(T__9);
			setState(251);
			match(T__2);
			setState(253); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(252);
				match(ID);
				}
				}
				setState(255); 
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
		enterRule(_localctx, 32, RULE_objectWeaponSet);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(257);
			match(T__10);
			setState(261);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(258);
				objectWeaponSetPropety();
				}
				}
				setState(263);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(264);
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
		enterRule(_localctx, 34, RULE_objectWeaponSetPropety);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(266);
			match(ID);
			setState(267);
			match(T__2);
			setState(269); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(268);
					value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(271); 
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
		enterRule(_localctx, 36, RULE_objectArmorSet);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(273);
			match(T__11);
			setState(277);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(274);
				objectArmorSetPropety();
				}
				}
				setState(279);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(280);
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
		enterRule(_localctx, 38, RULE_objectArmorSetPropety);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(282);
			match(ID);
			setState(283);
			match(T__2);
			setState(285); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(284);
					value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(287); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,30,_ctx);
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
		enterRule(_localctx, 40, RULE_objectUnitSpecificSounds);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(289);
			match(T__12);
			setState(293);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(290);
				objectUnitSpecificSoundsPropety();
				}
				}
				setState(295);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(296);
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
		enterRule(_localctx, 42, RULE_objectUnitSpecificSoundsPropety);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(298);
			match(ID);
			setState(299);
			match(T__2);
			setState(301); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(300);
					value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(303); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,32,_ctx);
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
		enterRule(_localctx, 44, RULE_objectUnitSpecificFX);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(305);
			match(T__13);
			setState(309);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(306);
				objectUnitSpecificFXPropety();
				}
				}
				setState(311);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(312);
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
		enterRule(_localctx, 46, RULE_objectUnitSpecificFXPropety);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(314);
			match(ID);
			setState(315);
			match(T__2);
			setState(317); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(316);
					value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(319); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,34,_ctx);
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
		enterRule(_localctx, 48, RULE_clientModuleBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(321);
			match(T__14);
			setState(322);
			match(T__2);
			setState(323);
			match(ID);
			setState(324);
			match(ID);
			setState(328);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(325);
				property();
				}
				}
				setState(330);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(331);
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
		enterRule(_localctx, 50, RULE_behaviormoduleBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(333);
			match(T__15);
			setState(334);
			match(T__2);
			setState(335);
			match(ID);
			setState(336);
			match(ID);
			setState(343);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 35184376152288L) != 0)) {
				{
				setState(341);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case ID:
					{
					setState(337);
					property();
					}
					break;
				case T__19:
				case T__20:
					{
					setState(338);
					behaviorTurret();
					}
					break;
				case T__4:
				case T__5:
				case T__6:
					{
					setState(339);
					objectKindOfProperty();
					}
					break;
				case T__16:
				case T__17:
				case T__18:
					{
					setState(340);
					behaviorDecals();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(345);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(346);
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
		enterRule(_localctx, 52, RULE_behaviorDecals);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(348);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 917504L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(352);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(349);
				property();
				}
				}
				setState(354);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(355);
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
		enterRule(_localctx, 54, RULE_behaviorTurret);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(357);
			_la = _input.LA(1);
			if ( !(_la==T__19 || _la==T__20) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(361);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(358);
				property();
				}
				}
				setState(363);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(364);
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
		enterRule(_localctx, 56, RULE_bodyModuleBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(366);
			match(T__21);
			setState(367);
			match(T__2);
			setState(368);
			match(ID);
			setState(369);
			match(ID);
			setState(373);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(370);
				property();
				}
				}
				setState(375);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(376);
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
		enterRule(_localctx, 58, RULE_drawModuleBlock);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(378);
			match(T__22);
			setState(379);
			match(T__2);
			setState(380);
			match(ID);
			setState(381);
			match(ID);
			setState(390);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 35185361944576L) != 0)) {
				{
				setState(388);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__23:
				case T__24:
				case T__26:
				case T__27:
				case T__28:
					{
					setState(383); 
					_errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							setState(382);
							conditionStateBlocks();
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						setState(385); 
						_errHandler.sync(this);
						_alt = getInterpreter().adaptivePredict(_input,41,_ctx);
					} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
					}
					break;
				case ID:
					{
					setState(387);
					drawModuleProperty();
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
		enterRule(_localctx, 60, RULE_drawModuleProperty);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(395);
			match(ID);
			setState(396);
			match(T__2);
			setState(398); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(397);
					value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(400); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,44,_ctx);
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
		enterRule(_localctx, 62, RULE_conditionStateBlocks);
		try {
			setState(407);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__23:
				enterOuterAlt(_localctx, 1);
				{
				setState(402);
				conditionStateBlock();
				}
				break;
			case T__24:
				enterOuterAlt(_localctx, 2);
				{
				setState(403);
				defaultConditionStateBlock();
				}
				break;
			case T__26:
				enterOuterAlt(_localctx, 3);
				{
				setState(404);
				transitionStateBlock();
				}
				break;
			case T__27:
				enterOuterAlt(_localctx, 4);
				{
				setState(405);
				aliasConditionStateBlock();
				}
				break;
			case T__28:
				enterOuterAlt(_localctx, 5);
				{
				setState(406);
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
		public List<TerminalNode> ID() { return getTokens(MapIniParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(MapIniParser.ID, i);
		}
		public ConditionStateBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conditionStateBlock; }
	}

	public final ConditionStateBlockContext conditionStateBlock() throws RecognitionException {
		ConditionStateBlockContext _localctx = new ConditionStateBlockContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_conditionStateBlock);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(409);
			match(T__23);
			setState(416);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__2) {
				{
				setState(410);
				match(T__2);
				setState(412); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(411);
						match(ID);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(414); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,46,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				}
			}

			setState(423);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 35216654598144L) != 0)) {
				{
				setState(421);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case ID:
					{
					setState(418);
					conditionStateProperty();
					}
					break;
				case T__19:
				case T__20:
				case T__30:
				case T__31:
				case T__32:
				case T__33:
					{
					setState(419);
					turretProperty();
					}
					break;
				case T__25:
					{
					setState(420);
					transitionKeyProperty();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(425);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(426);
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
		enterRule(_localctx, 66, RULE_defaultConditionStateBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(428);
			match(T__24);
			setState(434);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 35216654598144L) != 0)) {
				{
				setState(432);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case ID:
					{
					setState(429);
					conditionStateProperty();
					}
					break;
				case T__19:
				case T__20:
				case T__30:
				case T__31:
				case T__32:
				case T__33:
					{
					setState(430);
					turretProperty();
					}
					break;
				case T__25:
					{
					setState(431);
					transitionKeyProperty();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(436);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(437);
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
		enterRule(_localctx, 68, RULE_conditionStateProperty);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(439);
			match(ID);
			setState(440);
			match(T__2);
			setState(442); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(441);
					value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(444); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,52,_ctx);
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
		enterRule(_localctx, 70, RULE_transitionKeyProperty);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(446);
			match(T__25);
			setState(447);
			match(T__2);
			setState(448);
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
		enterRule(_localctx, 72, RULE_transitionStateBlock);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(450);
			match(T__26);
			setState(451);
			match(T__2);
			setState(452);
			match(ID);
			setState(454); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(453);
					match(ID);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(456); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,53,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			setState(461);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(458);
				transitionStateProperty();
				}
				}
				setState(463);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(464);
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
		enterRule(_localctx, 74, RULE_transitionStateProperty);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(466);
			match(ID);
			setState(467);
			match(T__2);
			setState(469); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(468);
					value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(471); 
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
		enterRule(_localctx, 76, RULE_aliasConditionStateBlock);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(473);
			match(T__27);
			setState(474);
			match(T__2);
			setState(476); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(475);
					match(ID);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(478); 
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
		enterRule(_localctx, 78, RULE_ignoreConditionStateBlock);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(480);
			match(T__28);
			setState(481);
			match(T__2);
			setState(483); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(482);
					match(ID);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(485); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,57,_ctx);
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
		enterRule(_localctx, 80, RULE_removeModuleBlock);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(487);
			match(T__29);
			setState(488);
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
		enterRule(_localctx, 82, RULE_turretProperty);
		try {
			setState(492);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__19:
			case T__30:
			case T__31:
				enterOuterAlt(_localctx, 1);
				{
				setState(490);
				tturretProperty();
				}
				break;
			case T__20:
			case T__32:
			case T__33:
				enterOuterAlt(_localctx, 2);
				{
				setState(491);
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
		enterRule(_localctx, 84, RULE_property);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(494);
			match(ID);
			setState(502);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__2:
				{
				setState(495);
				match(T__2);
				}
				break;
			case T__19:
			case T__20:
			case T__30:
			case T__31:
			case T__32:
			case T__33:
			case T__39:
			case INT:
			case FLOAT:
			case BOOL:
			case ID:
			case WS:
				{
				setState(499);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==WS) {
					{
					{
					setState(496);
					match(WS);
					}
					}
					setState(501);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(505); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(504);
					value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(507); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,61,_ctx);
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
		enterRule(_localctx, 86, RULE_tturretProperty);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(509);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 6443499520L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(510);
			match(T__2);
			setState(512); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(511);
					value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(514); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,62,_ctx);
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
		enterRule(_localctx, 88, RULE_altTurretProperty);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(516);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 25771900928L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(517);
			match(T__2);
			setState(519); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(518);
					value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(521); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,63,_ctx);
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
		enterRule(_localctx, 90, RULE_end);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(523);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 240518168576L) != 0)) ) {
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
		enterRule(_localctx, 92, RULE_value);
		int _la;
		try {
			setState(534);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,64,_ctx) ) {
			case 1:
				_localctx = new StringContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(525);
				quoutedID();
				}
				break;
			case 2:
				_localctx = new FiletypeContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(526);
				ftype();
				}
				break;
			case 3:
				_localctx = new ProcentageContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(527);
				procent();
				}
				break;
			case 4:
				_localctx = new IdContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(528);
				match(ID);
				}
				break;
			case 5:
				_localctx = new IntContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(529);
				match(INT);
				}
				break;
			case 6:
				_localctx = new FloatContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(530);
				match(FLOAT);
				}
				break;
			case 7:
				_localctx = new BoolContext(_localctx);
				enterOuterAlt(_localctx, 7);
				{
				setState(531);
				match(BOOL);
				}
				break;
			case 8:
				_localctx = new TurretValueContext(_localctx);
				enterOuterAlt(_localctx, 8);
				{
				setState(532);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 6443499520L) != 0)) ) {
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
				setState(533);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 25771900928L) != 0)) ) {
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
		enterRule(_localctx, 94, RULE_ftype);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(536);
			match(ID);
			setState(537);
			match(T__37);
			setState(538);
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
		enterRule(_localctx, 96, RULE_rgb);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(540);
			match(INT256);
			setState(541);
			match(INT256);
			setState(542);
			match(INT256);
			setState(543);
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
		enterRule(_localctx, 98, RULE_procent);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(545);
			_la = _input.LA(1);
			if ( !(_la==INT || _la==FLOAT) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(546);
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
		enterRule(_localctx, 100, RULE_intRang);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(548);
			match(INT);
			setState(549);
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
		enterRule(_localctx, 102, RULE_floatRang);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(551);
			match(FLOAT);
			setState(552);
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
		enterRule(_localctx, 104, RULE_quoutedID);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(554);
			match(T__39);
			setState(558);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,65,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(555);
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
				setState(560);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,65,_ctx);
			}
			setState(561);
			match(T__39);
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
		"\u0004\u00010\u0234\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
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
		"2\u00072\u00023\u00073\u00024\u00074\u0001\u0000\u0005\u0000l\b\u0000"+
		"\n\u0000\f\u0000o\t\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001"+
		"\u0003\u0001u\b\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0005\u0002}\b\u0002\n\u0002\f\u0002\u0080\t"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0005\u0002\u0085\b\u0002\n"+
		"\u0002\f\u0002\u0088\t\u0002\u0003\u0002\u008a\b\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0005"+
		"\u0003\u0093\b\u0003\n\u0003\f\u0003\u0096\t\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0005\u0003\u009b\b\u0003\n\u0003\f\u0003\u009e\t\u0003\u0003"+
		"\u0003\u00a0\b\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0004\u0004\u00a7\b\u0004\u000b\u0004\f\u0004\u00a8\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0003\u0005\u00af\b\u0005\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0005\u0006\u00b5\b\u0006\n\u0006"+
		"\f\u0006\u00b8\t\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0004\u0007\u00bf\b\u0007\u000b\u0007\f\u0007\u00c0\u0001"+
		"\b\u0001\b\u0001\b\u0004\b\u00c6\b\b\u000b\b\f\b\u00c7\u0001\t\u0001\t"+
		"\u0001\t\u0001\t\u0005\t\u00ce\b\t\n\t\f\t\u00d1\t\t\u0001\t\u0001\t\u0001"+
		"\n\u0001\n\u0001\n\u0004\n\u00d8\b\n\u000b\n\f\n\u00d9\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0003\u000b\u00e1\b\u000b\u0001"+
		"\f\u0001\f\u0001\f\u0001\f\u0001\f\u0003\f\u00e8\b\f\u0001\r\u0001\r\u0001"+
		"\r\u0005\r\u00ed\b\r\n\r\f\r\u00f0\t\r\u0001\r\u0001\r\u0001\u000e\u0001"+
		"\u000e\u0001\u000e\u0004\u000e\u00f7\b\u000e\u000b\u000e\f\u000e\u00f8"+
		"\u0001\u000f\u0001\u000f\u0001\u000f\u0004\u000f\u00fe\b\u000f\u000b\u000f"+
		"\f\u000f\u00ff\u0001\u0010\u0001\u0010\u0005\u0010\u0104\b\u0010\n\u0010"+
		"\f\u0010\u0107\t\u0010\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011"+
		"\u0001\u0011\u0004\u0011\u010e\b\u0011\u000b\u0011\f\u0011\u010f\u0001"+
		"\u0012\u0001\u0012\u0005\u0012\u0114\b\u0012\n\u0012\f\u0012\u0117\t\u0012"+
		"\u0001\u0012\u0001\u0012\u0001\u0013\u0001\u0013\u0001\u0013\u0004\u0013"+
		"\u011e\b\u0013\u000b\u0013\f\u0013\u011f\u0001\u0014\u0001\u0014\u0005"+
		"\u0014\u0124\b\u0014\n\u0014\f\u0014\u0127\t\u0014\u0001\u0014\u0001\u0014"+
		"\u0001\u0015\u0001\u0015\u0001\u0015\u0004\u0015\u012e\b\u0015\u000b\u0015"+
		"\f\u0015\u012f\u0001\u0016\u0001\u0016\u0005\u0016\u0134\b\u0016\n\u0016"+
		"\f\u0016\u0137\t\u0016\u0001\u0016\u0001\u0016\u0001\u0017\u0001\u0017"+
		"\u0001\u0017\u0004\u0017\u013e\b\u0017\u000b\u0017\f\u0017\u013f\u0001"+
		"\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0005\u0018\u0147"+
		"\b\u0018\n\u0018\f\u0018\u014a\t\u0018\u0001\u0018\u0001\u0018\u0001\u0019"+
		"\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019"+
		"\u0001\u0019\u0005\u0019\u0156\b\u0019\n\u0019\f\u0019\u0159\t\u0019\u0001"+
		"\u0019\u0001\u0019\u0001\u001a\u0001\u001a\u0005\u001a\u015f\b\u001a\n"+
		"\u001a\f\u001a\u0162\t\u001a\u0001\u001a\u0001\u001a\u0001\u001b\u0001"+
		"\u001b\u0005\u001b\u0168\b\u001b\n\u001b\f\u001b\u016b\t\u001b\u0001\u001b"+
		"\u0001\u001b\u0001\u001c\u0001\u001c\u0001\u001c\u0001\u001c\u0001\u001c"+
		"\u0005\u001c\u0174\b\u001c\n\u001c\f\u001c\u0177\t\u001c\u0001\u001c\u0001"+
		"\u001c\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001d\u0004"+
		"\u001d\u0180\b\u001d\u000b\u001d\f\u001d\u0181\u0001\u001d\u0005\u001d"+
		"\u0185\b\u001d\n\u001d\f\u001d\u0188\t\u001d\u0001\u001d\u0001\u001d\u0001"+
		"\u001e\u0001\u001e\u0001\u001e\u0004\u001e\u018f\b\u001e\u000b\u001e\f"+
		"\u001e\u0190\u0001\u001f\u0001\u001f\u0001\u001f\u0001\u001f\u0001\u001f"+
		"\u0003\u001f\u0198\b\u001f\u0001 \u0001 \u0001 \u0004 \u019d\b \u000b"+
		" \f \u019e\u0003 \u01a1\b \u0001 \u0001 \u0001 \u0005 \u01a6\b \n \f "+
		"\u01a9\t \u0001 \u0001 \u0001!\u0001!\u0001!\u0001!\u0005!\u01b1\b!\n"+
		"!\f!\u01b4\t!\u0001!\u0001!\u0001\"\u0001\"\u0001\"\u0004\"\u01bb\b\""+
		"\u000b\"\f\"\u01bc\u0001#\u0001#\u0001#\u0001#\u0001$\u0001$\u0001$\u0001"+
		"$\u0004$\u01c7\b$\u000b$\f$\u01c8\u0001$\u0005$\u01cc\b$\n$\f$\u01cf\t"+
		"$\u0001$\u0001$\u0001%\u0001%\u0001%\u0004%\u01d6\b%\u000b%\f%\u01d7\u0001"+
		"&\u0001&\u0001&\u0004&\u01dd\b&\u000b&\f&\u01de\u0001\'\u0001\'\u0001"+
		"\'\u0004\'\u01e4\b\'\u000b\'\f\'\u01e5\u0001(\u0001(\u0001(\u0001)\u0001"+
		")\u0003)\u01ed\b)\u0001*\u0001*\u0001*\u0005*\u01f2\b*\n*\f*\u01f5\t*"+
		"\u0003*\u01f7\b*\u0001*\u0004*\u01fa\b*\u000b*\f*\u01fb\u0001+\u0001+"+
		"\u0001+\u0004+\u0201\b+\u000b+\f+\u0202\u0001,\u0001,\u0001,\u0004,\u0208"+
		"\b,\u000b,\f,\u0209\u0001-\u0001-\u0001.\u0001.\u0001.\u0001.\u0001.\u0001"+
		".\u0001.\u0001.\u0001.\u0003.\u0217\b.\u0001/\u0001/\u0001/\u0001/\u0001"+
		"0\u00010\u00010\u00010\u00010\u00011\u00011\u00011\u00012\u00012\u0001"+
		"2\u00013\u00013\u00013\u00014\u00014\u00054\u022d\b4\n4\f4\u0230\t4\u0001"+
		"4\u00014\u00014\u0000\u00005\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010"+
		"\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPR"+
		"TVXZ\\^`bdfh\u0000\b\u0001\u0000\u0005\u0007\u0001\u0000\u0011\u0013\u0001"+
		"\u0000\u0014\u0015\u0002\u0000\u0014\u0014\u001f \u0002\u0000\u0015\u0015"+
		"!\"\u0001\u0000#%\u0002\u0000))++\u0001\u000000\u025b\u0000m\u0001\u0000"+
		"\u0000\u0000\u0002t\u0001\u0000\u0000\u0000\u0004v\u0001\u0000\u0000\u0000"+
		"\u0006\u008d\u0001\u0000\u0000\u0000\b\u00a3\u0001\u0000\u0000\u0000\n"+
		"\u00ae\u0001\u0000\u0000\u0000\f\u00b0\u0001\u0000\u0000\u0000\u000e\u00bb"+
		"\u0001\u0000\u0000\u0000\u0010\u00c2\u0001\u0000\u0000\u0000\u0012\u00c9"+
		"\u0001\u0000\u0000\u0000\u0014\u00d4\u0001\u0000\u0000\u0000\u0016\u00e0"+
		"\u0001\u0000\u0000\u0000\u0018\u00e7\u0001\u0000\u0000\u0000\u001a\u00e9"+
		"\u0001\u0000\u0000\u0000\u001c\u00f3\u0001\u0000\u0000\u0000\u001e\u00fa"+
		"\u0001\u0000\u0000\u0000 \u0101\u0001\u0000\u0000\u0000\"\u010a\u0001"+
		"\u0000\u0000\u0000$\u0111\u0001\u0000\u0000\u0000&\u011a\u0001\u0000\u0000"+
		"\u0000(\u0121\u0001\u0000\u0000\u0000*\u012a\u0001\u0000\u0000\u0000,"+
		"\u0131\u0001\u0000\u0000\u0000.\u013a\u0001\u0000\u0000\u00000\u0141\u0001"+
		"\u0000\u0000\u00002\u014d\u0001\u0000\u0000\u00004\u015c\u0001\u0000\u0000"+
		"\u00006\u0165\u0001\u0000\u0000\u00008\u016e\u0001\u0000\u0000\u0000:"+
		"\u017a\u0001\u0000\u0000\u0000<\u018b\u0001\u0000\u0000\u0000>\u0197\u0001"+
		"\u0000\u0000\u0000@\u0199\u0001\u0000\u0000\u0000B\u01ac\u0001\u0000\u0000"+
		"\u0000D\u01b7\u0001\u0000\u0000\u0000F\u01be\u0001\u0000\u0000\u0000H"+
		"\u01c2\u0001\u0000\u0000\u0000J\u01d2\u0001\u0000\u0000\u0000L\u01d9\u0001"+
		"\u0000\u0000\u0000N\u01e0\u0001\u0000\u0000\u0000P\u01e7\u0001\u0000\u0000"+
		"\u0000R\u01ec\u0001\u0000\u0000\u0000T\u01ee\u0001\u0000\u0000\u0000V"+
		"\u01fd\u0001\u0000\u0000\u0000X\u0204\u0001\u0000\u0000\u0000Z\u020b\u0001"+
		"\u0000\u0000\u0000\\\u0216\u0001\u0000\u0000\u0000^\u0218\u0001\u0000"+
		"\u0000\u0000`\u021c\u0001\u0000\u0000\u0000b\u0221\u0001\u0000\u0000\u0000"+
		"d\u0224\u0001\u0000\u0000\u0000f\u0227\u0001\u0000\u0000\u0000h\u022a"+
		"\u0001\u0000\u0000\u0000jl\u0003\u0002\u0001\u0000kj\u0001\u0000\u0000"+
		"\u0000lo\u0001\u0000\u0000\u0000mk\u0001\u0000\u0000\u0000mn\u0001\u0000"+
		"\u0000\u0000np\u0001\u0000\u0000\u0000om\u0001\u0000\u0000\u0000pq\u0005"+
		"\u0000\u0000\u0001q\u0001\u0001\u0000\u0000\u0000ru\u0003\u0006\u0003"+
		"\u0000su\u0003\u0004\u0002\u0000tr\u0001\u0000\u0000\u0000ts\u0001\u0000"+
		"\u0000\u0000u\u0003\u0001\u0000\u0000\u0000vw\u0005\u0001\u0000\u0000"+
		"wx\u0005-\u0000\u0000x\u0089\u0005-\u0000\u0000y}\u0003\u0016\u000b\u0000"+
		"z}\u0003\b\u0004\u0000{}\u0003\u0010\b\u0000|y\u0001\u0000\u0000\u0000"+
		"|z\u0001\u0000\u0000\u0000|{\u0001\u0000\u0000\u0000}\u0080\u0001\u0000"+
		"\u0000\u0000~|\u0001\u0000\u0000\u0000~\u007f\u0001\u0000\u0000\u0000"+
		"\u007f\u008a\u0001\u0000\u0000\u0000\u0080~\u0001\u0000\u0000\u0000\u0081"+
		"\u0085\u0003\n\u0005\u0000\u0082\u0085\u0003\b\u0004\u0000\u0083\u0085"+
		"\u0003\u0010\b\u0000\u0084\u0081\u0001\u0000\u0000\u0000\u0084\u0082\u0001"+
		"\u0000\u0000\u0000\u0084\u0083\u0001\u0000\u0000\u0000\u0085\u0088\u0001"+
		"\u0000\u0000\u0000\u0086\u0084\u0001\u0000\u0000\u0000\u0086\u0087\u0001"+
		"\u0000\u0000\u0000\u0087\u008a\u0001\u0000\u0000\u0000\u0088\u0086\u0001"+
		"\u0000\u0000\u0000\u0089~\u0001\u0000\u0000\u0000\u0089\u0086\u0001\u0000"+
		"\u0000\u0000\u008a\u008b\u0001\u0000\u0000\u0000\u008b\u008c\u0003Z-\u0000"+
		"\u008c\u0005\u0001\u0000\u0000\u0000\u008d\u008e\u0005\u0002\u0000\u0000"+
		"\u008e\u009f\u0005-\u0000\u0000\u008f\u0093\u0003\u0016\u000b\u0000\u0090"+
		"\u0093\u0003\b\u0004\u0000\u0091\u0093\u0003\u0010\b\u0000\u0092\u008f"+
		"\u0001\u0000\u0000\u0000\u0092\u0090\u0001\u0000\u0000\u0000\u0092\u0091"+
		"\u0001\u0000\u0000\u0000\u0093\u0096\u0001\u0000\u0000\u0000\u0094\u0092"+
		"\u0001\u0000\u0000\u0000\u0094\u0095\u0001\u0000\u0000\u0000\u0095\u00a0"+
		"\u0001\u0000\u0000\u0000\u0096\u0094\u0001\u0000\u0000\u0000\u0097\u009b"+
		"\u0003\n\u0005\u0000\u0098\u009b\u0003\b\u0004\u0000\u0099\u009b\u0003"+
		"\u0010\b\u0000\u009a\u0097\u0001\u0000\u0000\u0000\u009a\u0098\u0001\u0000"+
		"\u0000\u0000\u009a\u0099\u0001\u0000\u0000\u0000\u009b\u009e\u0001\u0000"+
		"\u0000\u0000\u009c\u009a\u0001\u0000\u0000\u0000\u009c\u009d\u0001\u0000"+
		"\u0000\u0000\u009d\u00a0\u0001\u0000\u0000\u0000\u009e\u009c\u0001\u0000"+
		"\u0000\u0000\u009f\u0094\u0001\u0000\u0000\u0000\u009f\u009c\u0001\u0000"+
		"\u0000\u0000\u00a0\u00a1\u0001\u0000\u0000\u0000\u00a1\u00a2\u0003Z-\u0000"+
		"\u00a2\u0007\u0001\u0000\u0000\u0000\u00a3\u00a4\u0005-\u0000\u0000\u00a4"+
		"\u00a6\u0005\u0003\u0000\u0000\u00a5\u00a7\u0003\\.\u0000\u00a6\u00a5"+
		"\u0001\u0000\u0000\u0000\u00a7\u00a8\u0001\u0000\u0000\u0000\u00a8\u00a6"+
		"\u0001\u0000\u0000\u0000\u00a8\u00a9\u0001\u0000\u0000\u0000\u00a9\t\u0001"+
		"\u0000\u0000\u0000\u00aa\u00af\u0003\f\u0006\u0000\u00ab\u00af\u0003\u0012"+
		"\t\u0000\u00ac\u00af\u0003P(\u0000\u00ad\u00af\u0003\u0018\f\u0000\u00ae"+
		"\u00aa\u0001\u0000\u0000\u0000\u00ae\u00ab\u0001\u0000\u0000\u0000\u00ae"+
		"\u00ac\u0001\u0000\u0000\u0000\u00ae\u00ad\u0001\u0000\u0000\u0000\u00af"+
		"\u000b\u0001\u0000\u0000\u0000\u00b0\u00b6\u0005\u0004\u0000\u0000\u00b1"+
		"\u00b5\u0003\u0016\u000b\u0000\u00b2\u00b5\u0003\u000e\u0007\u0000\u00b3"+
		"\u00b5\u0003\u0010\b\u0000\u00b4\u00b1\u0001\u0000\u0000\u0000\u00b4\u00b2"+
		"\u0001\u0000\u0000\u0000\u00b4\u00b3\u0001\u0000\u0000\u0000\u00b5\u00b8"+
		"\u0001\u0000\u0000\u0000\u00b6\u00b4\u0001\u0000\u0000\u0000\u00b6\u00b7"+
		"\u0001\u0000\u0000\u0000\u00b7\u00b9\u0001\u0000\u0000\u0000\u00b8\u00b6"+
		"\u0001\u0000\u0000\u0000\u00b9\u00ba\u0003Z-\u0000\u00ba\r\u0001\u0000"+
		"\u0000\u0000\u00bb\u00bc\u0005-\u0000\u0000\u00bc\u00be\u0005\u0003\u0000"+
		"\u0000\u00bd\u00bf\u0003\\.\u0000\u00be\u00bd\u0001\u0000\u0000\u0000"+
		"\u00bf\u00c0\u0001\u0000\u0000\u0000\u00c0\u00be\u0001\u0000\u0000\u0000"+
		"\u00c0\u00c1\u0001\u0000\u0000\u0000\u00c1\u000f\u0001\u0000\u0000\u0000"+
		"\u00c2\u00c3\u0007\u0000\u0000\u0000\u00c3\u00c5\u0005\u0003\u0000\u0000"+
		"\u00c4\u00c6\u0005-\u0000\u0000\u00c5\u00c4\u0001\u0000\u0000\u0000\u00c6"+
		"\u00c7\u0001\u0000\u0000\u0000\u00c7\u00c5\u0001\u0000\u0000\u0000\u00c7"+
		"\u00c8\u0001\u0000\u0000\u0000\u00c8\u0011\u0001\u0000\u0000\u0000\u00c9"+
		"\u00ca\u0005\b\u0000\u0000\u00ca\u00cf\u0005-\u0000\u0000\u00cb\u00ce"+
		"\u0003\u0016\u000b\u0000\u00cc\u00ce\u0003\u0014\n\u0000\u00cd\u00cb\u0001"+
		"\u0000\u0000\u0000\u00cd\u00cc\u0001\u0000\u0000\u0000\u00ce\u00d1\u0001"+
		"\u0000\u0000\u0000\u00cf\u00cd\u0001\u0000\u0000\u0000\u00cf\u00d0\u0001"+
		"\u0000\u0000\u0000\u00d0\u00d2\u0001\u0000\u0000\u0000\u00d1\u00cf\u0001"+
		"\u0000\u0000\u0000\u00d2\u00d3\u0003Z-\u0000\u00d3\u0013\u0001\u0000\u0000"+
		"\u0000\u00d4\u00d5\u0005-\u0000\u0000\u00d5\u00d7\u0005\u0003\u0000\u0000"+
		"\u00d6\u00d8\u0003\\.\u0000\u00d7\u00d6\u0001\u0000\u0000\u0000\u00d8"+
		"\u00d9\u0001\u0000\u0000\u0000\u00d9\u00d7\u0001\u0000\u0000\u0000\u00d9"+
		"\u00da\u0001\u0000\u0000\u0000\u00da\u0015\u0001\u0000\u0000\u0000\u00db"+
		"\u00e1\u0003:\u001d\u0000\u00dc\u00e1\u00038\u001c\u0000\u00dd\u00e1\u0003"+
		"2\u0019\u0000\u00de\u00e1\u00030\u0018\u0000\u00df\u00e1\u0003\u0018\f"+
		"\u0000\u00e0\u00db\u0001\u0000\u0000\u0000\u00e0\u00dc\u0001\u0000\u0000"+
		"\u0000\u00e0\u00dd\u0001\u0000\u0000\u0000\u00e0\u00de\u0001\u0000\u0000"+
		"\u0000\u00e0\u00df\u0001\u0000\u0000\u0000\u00e1\u0017\u0001\u0000\u0000"+
		"\u0000\u00e2\u00e8\u0003\u001a\r\u0000\u00e3\u00e8\u0003 \u0010\u0000"+
		"\u00e4\u00e8\u0003$\u0012\u0000\u00e5\u00e8\u0003(\u0014\u0000\u00e6\u00e8"+
		"\u0003,\u0016\u0000\u00e7\u00e2\u0001\u0000\u0000\u0000\u00e7\u00e3\u0001"+
		"\u0000\u0000\u0000\u00e7\u00e4\u0001\u0000\u0000\u0000\u00e7\u00e5\u0001"+
		"\u0000\u0000\u0000\u00e7\u00e6\u0001\u0000\u0000\u0000\u00e8\u0019\u0001"+
		"\u0000\u0000\u0000\u00e9\u00ee\u0005\t\u0000\u0000\u00ea\u00ed\u0003\u001c"+
		"\u000e\u0000\u00eb\u00ed\u0003\u001e\u000f\u0000\u00ec\u00ea\u0001\u0000"+
		"\u0000\u0000\u00ec\u00eb\u0001\u0000\u0000\u0000\u00ed\u00f0\u0001\u0000"+
		"\u0000\u0000\u00ee\u00ec\u0001\u0000\u0000\u0000\u00ee\u00ef\u0001\u0000"+
		"\u0000\u0000\u00ef\u00f1\u0001\u0000\u0000\u0000\u00f0\u00ee\u0001\u0000"+
		"\u0000\u0000\u00f1\u00f2\u0003Z-\u0000\u00f2\u001b\u0001\u0000\u0000\u0000"+
		"\u00f3\u00f4\u0005\u0002\u0000\u0000\u00f4\u00f6\u0005\u0003\u0000\u0000"+
		"\u00f5\u00f7\u0005-\u0000\u0000\u00f6\u00f5\u0001\u0000\u0000\u0000\u00f7"+
		"\u00f8\u0001\u0000\u0000\u0000\u00f8\u00f6\u0001\u0000\u0000\u0000\u00f8"+
		"\u00f9\u0001\u0000\u0000\u0000\u00f9\u001d\u0001\u0000\u0000\u0000\u00fa"+
		"\u00fb\u0005\n\u0000\u0000\u00fb\u00fd\u0005\u0003\u0000\u0000\u00fc\u00fe"+
		"\u0005-\u0000\u0000\u00fd\u00fc\u0001\u0000\u0000\u0000\u00fe\u00ff\u0001"+
		"\u0000\u0000\u0000\u00ff\u00fd\u0001\u0000\u0000\u0000\u00ff\u0100\u0001"+
		"\u0000\u0000\u0000\u0100\u001f\u0001\u0000\u0000\u0000\u0101\u0105\u0005"+
		"\u000b\u0000\u0000\u0102\u0104\u0003\"\u0011\u0000\u0103\u0102\u0001\u0000"+
		"\u0000\u0000\u0104\u0107\u0001\u0000\u0000\u0000\u0105\u0103\u0001\u0000"+
		"\u0000\u0000\u0105\u0106\u0001\u0000\u0000\u0000\u0106\u0108\u0001\u0000"+
		"\u0000\u0000\u0107\u0105\u0001\u0000\u0000\u0000\u0108\u0109\u0003Z-\u0000"+
		"\u0109!\u0001\u0000\u0000\u0000\u010a\u010b\u0005-\u0000\u0000\u010b\u010d"+
		"\u0005\u0003\u0000\u0000\u010c\u010e\u0003\\.\u0000\u010d\u010c\u0001"+
		"\u0000\u0000\u0000\u010e\u010f\u0001\u0000\u0000\u0000\u010f\u010d\u0001"+
		"\u0000\u0000\u0000\u010f\u0110\u0001\u0000\u0000\u0000\u0110#\u0001\u0000"+
		"\u0000\u0000\u0111\u0115\u0005\f\u0000\u0000\u0112\u0114\u0003&\u0013"+
		"\u0000\u0113\u0112\u0001\u0000\u0000\u0000\u0114\u0117\u0001\u0000\u0000"+
		"\u0000\u0115\u0113\u0001\u0000\u0000\u0000\u0115\u0116\u0001\u0000\u0000"+
		"\u0000\u0116\u0118\u0001\u0000\u0000\u0000\u0117\u0115\u0001\u0000\u0000"+
		"\u0000\u0118\u0119\u0003Z-\u0000\u0119%\u0001\u0000\u0000\u0000\u011a"+
		"\u011b\u0005-\u0000\u0000\u011b\u011d\u0005\u0003\u0000\u0000\u011c\u011e"+
		"\u0003\\.\u0000\u011d\u011c\u0001\u0000\u0000\u0000\u011e\u011f\u0001"+
		"\u0000\u0000\u0000\u011f\u011d\u0001\u0000\u0000\u0000\u011f\u0120\u0001"+
		"\u0000\u0000\u0000\u0120\'\u0001\u0000\u0000\u0000\u0121\u0125\u0005\r"+
		"\u0000\u0000\u0122\u0124\u0003*\u0015\u0000\u0123\u0122\u0001\u0000\u0000"+
		"\u0000\u0124\u0127\u0001\u0000\u0000\u0000\u0125\u0123\u0001\u0000\u0000"+
		"\u0000\u0125\u0126\u0001\u0000\u0000\u0000\u0126\u0128\u0001\u0000\u0000"+
		"\u0000\u0127\u0125\u0001\u0000\u0000\u0000\u0128\u0129\u0003Z-\u0000\u0129"+
		")\u0001\u0000\u0000\u0000\u012a\u012b\u0005-\u0000\u0000\u012b\u012d\u0005"+
		"\u0003\u0000\u0000\u012c\u012e\u0003\\.\u0000\u012d\u012c\u0001\u0000"+
		"\u0000\u0000\u012e\u012f\u0001\u0000\u0000\u0000\u012f\u012d\u0001\u0000"+
		"\u0000\u0000\u012f\u0130\u0001\u0000\u0000\u0000\u0130+\u0001\u0000\u0000"+
		"\u0000\u0131\u0135\u0005\u000e\u0000\u0000\u0132\u0134\u0003.\u0017\u0000"+
		"\u0133\u0132\u0001\u0000\u0000\u0000\u0134\u0137\u0001\u0000\u0000\u0000"+
		"\u0135\u0133\u0001\u0000\u0000\u0000\u0135\u0136\u0001\u0000\u0000\u0000"+
		"\u0136\u0138\u0001\u0000\u0000\u0000\u0137\u0135\u0001\u0000\u0000\u0000"+
		"\u0138\u0139\u0003Z-\u0000\u0139-\u0001\u0000\u0000\u0000\u013a\u013b"+
		"\u0005-\u0000\u0000\u013b\u013d\u0005\u0003\u0000\u0000\u013c\u013e\u0003"+
		"\\.\u0000\u013d\u013c\u0001\u0000\u0000\u0000\u013e\u013f\u0001\u0000"+
		"\u0000\u0000\u013f\u013d\u0001\u0000\u0000\u0000\u013f\u0140\u0001\u0000"+
		"\u0000\u0000\u0140/\u0001\u0000\u0000\u0000\u0141\u0142\u0005\u000f\u0000"+
		"\u0000\u0142\u0143\u0005\u0003\u0000\u0000\u0143\u0144\u0005-\u0000\u0000"+
		"\u0144\u0148\u0005-\u0000\u0000\u0145\u0147\u0003T*\u0000\u0146\u0145"+
		"\u0001\u0000\u0000\u0000\u0147\u014a\u0001\u0000\u0000\u0000\u0148\u0146"+
		"\u0001\u0000\u0000\u0000\u0148\u0149\u0001\u0000\u0000\u0000\u0149\u014b"+
		"\u0001\u0000\u0000\u0000\u014a\u0148\u0001\u0000\u0000\u0000\u014b\u014c"+
		"\u0003Z-\u0000\u014c1\u0001\u0000\u0000\u0000\u014d\u014e\u0005\u0010"+
		"\u0000\u0000\u014e\u014f\u0005\u0003\u0000\u0000\u014f\u0150\u0005-\u0000"+
		"\u0000\u0150\u0157\u0005-\u0000\u0000\u0151\u0156\u0003T*\u0000\u0152"+
		"\u0156\u00036\u001b\u0000\u0153\u0156\u0003\u0010\b\u0000\u0154\u0156"+
		"\u00034\u001a\u0000\u0155\u0151\u0001\u0000\u0000\u0000\u0155\u0152\u0001"+
		"\u0000\u0000\u0000\u0155\u0153\u0001\u0000\u0000\u0000\u0155\u0154\u0001"+
		"\u0000\u0000\u0000\u0156\u0159\u0001\u0000\u0000\u0000\u0157\u0155\u0001"+
		"\u0000\u0000\u0000\u0157\u0158\u0001\u0000\u0000\u0000\u0158\u015a\u0001"+
		"\u0000\u0000\u0000\u0159\u0157\u0001\u0000\u0000\u0000\u015a\u015b\u0003"+
		"Z-\u0000\u015b3\u0001\u0000\u0000\u0000\u015c\u0160\u0007\u0001\u0000"+
		"\u0000\u015d\u015f\u0003T*\u0000\u015e\u015d\u0001\u0000\u0000\u0000\u015f"+
		"\u0162\u0001\u0000\u0000\u0000\u0160\u015e\u0001\u0000\u0000\u0000\u0160"+
		"\u0161\u0001\u0000\u0000\u0000\u0161\u0163\u0001\u0000\u0000\u0000\u0162"+
		"\u0160\u0001\u0000\u0000\u0000\u0163\u0164\u0003Z-\u0000\u01645\u0001"+
		"\u0000\u0000\u0000\u0165\u0169\u0007\u0002\u0000\u0000\u0166\u0168\u0003"+
		"T*\u0000\u0167\u0166\u0001\u0000\u0000\u0000\u0168\u016b\u0001\u0000\u0000"+
		"\u0000\u0169\u0167\u0001\u0000\u0000\u0000\u0169\u016a\u0001\u0000\u0000"+
		"\u0000\u016a\u016c\u0001\u0000\u0000\u0000\u016b\u0169\u0001\u0000\u0000"+
		"\u0000\u016c\u016d\u0003Z-\u0000\u016d7\u0001\u0000\u0000\u0000\u016e"+
		"\u016f\u0005\u0016\u0000\u0000\u016f\u0170\u0005\u0003\u0000\u0000\u0170"+
		"\u0171\u0005-\u0000\u0000\u0171\u0175\u0005-\u0000\u0000\u0172\u0174\u0003"+
		"T*\u0000\u0173\u0172\u0001\u0000\u0000\u0000\u0174\u0177\u0001\u0000\u0000"+
		"\u0000\u0175\u0173\u0001\u0000\u0000\u0000\u0175\u0176\u0001\u0000\u0000"+
		"\u0000\u0176\u0178\u0001\u0000\u0000\u0000\u0177\u0175\u0001\u0000\u0000"+
		"\u0000\u0178\u0179\u0003Z-\u0000\u01799\u0001\u0000\u0000\u0000\u017a"+
		"\u017b\u0005\u0017\u0000\u0000\u017b\u017c\u0005\u0003\u0000\u0000\u017c"+
		"\u017d\u0005-\u0000\u0000\u017d\u0186\u0005-\u0000\u0000\u017e\u0180\u0003"+
		">\u001f\u0000\u017f\u017e\u0001\u0000\u0000\u0000\u0180\u0181\u0001\u0000"+
		"\u0000\u0000\u0181\u017f\u0001\u0000\u0000\u0000\u0181\u0182\u0001\u0000"+
		"\u0000\u0000\u0182\u0185\u0001\u0000\u0000\u0000\u0183\u0185\u0003<\u001e"+
		"\u0000\u0184\u017f\u0001\u0000\u0000\u0000\u0184\u0183\u0001\u0000\u0000"+
		"\u0000\u0185\u0188\u0001\u0000\u0000\u0000\u0186\u0184\u0001\u0000\u0000"+
		"\u0000\u0186\u0187\u0001\u0000\u0000\u0000\u0187\u0189\u0001\u0000\u0000"+
		"\u0000\u0188\u0186\u0001\u0000\u0000\u0000\u0189\u018a\u0003Z-\u0000\u018a"+
		";\u0001\u0000\u0000\u0000\u018b\u018c\u0005-\u0000\u0000\u018c\u018e\u0005"+
		"\u0003\u0000\u0000\u018d\u018f\u0003\\.\u0000\u018e\u018d\u0001\u0000"+
		"\u0000\u0000\u018f\u0190\u0001\u0000\u0000\u0000\u0190\u018e\u0001\u0000"+
		"\u0000\u0000\u0190\u0191\u0001\u0000\u0000\u0000\u0191=\u0001\u0000\u0000"+
		"\u0000\u0192\u0198\u0003@ \u0000\u0193\u0198\u0003B!\u0000\u0194\u0198"+
		"\u0003H$\u0000\u0195\u0198\u0003L&\u0000\u0196\u0198\u0003N\'\u0000\u0197"+
		"\u0192\u0001\u0000\u0000\u0000\u0197\u0193\u0001\u0000\u0000\u0000\u0197"+
		"\u0194\u0001\u0000\u0000\u0000\u0197\u0195\u0001\u0000\u0000\u0000\u0197"+
		"\u0196\u0001\u0000\u0000\u0000\u0198?\u0001\u0000\u0000\u0000\u0199\u01a0"+
		"\u0005\u0018\u0000\u0000\u019a\u019c\u0005\u0003\u0000\u0000\u019b\u019d"+
		"\u0005-\u0000\u0000\u019c\u019b\u0001\u0000\u0000\u0000\u019d\u019e\u0001"+
		"\u0000\u0000\u0000\u019e\u019c\u0001\u0000\u0000\u0000\u019e\u019f\u0001"+
		"\u0000\u0000\u0000\u019f\u01a1\u0001\u0000\u0000\u0000\u01a0\u019a\u0001"+
		"\u0000\u0000\u0000\u01a0\u01a1\u0001\u0000\u0000\u0000\u01a1\u01a7\u0001"+
		"\u0000\u0000\u0000\u01a2\u01a6\u0003D\"\u0000\u01a3\u01a6\u0003R)\u0000"+
		"\u01a4\u01a6\u0003F#\u0000\u01a5\u01a2\u0001\u0000\u0000\u0000\u01a5\u01a3"+
		"\u0001\u0000\u0000\u0000\u01a5\u01a4\u0001\u0000\u0000\u0000\u01a6\u01a9"+
		"\u0001\u0000\u0000\u0000\u01a7\u01a5\u0001\u0000\u0000\u0000\u01a7\u01a8"+
		"\u0001\u0000\u0000\u0000\u01a8\u01aa\u0001\u0000\u0000\u0000\u01a9\u01a7"+
		"\u0001\u0000\u0000\u0000\u01aa\u01ab\u0003Z-\u0000\u01abA\u0001\u0000"+
		"\u0000\u0000\u01ac\u01b2\u0005\u0019\u0000\u0000\u01ad\u01b1\u0003D\""+
		"\u0000\u01ae\u01b1\u0003R)\u0000\u01af\u01b1\u0003F#\u0000\u01b0\u01ad"+
		"\u0001\u0000\u0000\u0000\u01b0\u01ae\u0001\u0000\u0000\u0000\u01b0\u01af"+
		"\u0001\u0000\u0000\u0000\u01b1\u01b4\u0001\u0000\u0000\u0000\u01b2\u01b0"+
		"\u0001\u0000\u0000\u0000\u01b2\u01b3\u0001\u0000\u0000\u0000\u01b3\u01b5"+
		"\u0001\u0000\u0000\u0000\u01b4\u01b2\u0001\u0000\u0000\u0000\u01b5\u01b6"+
		"\u0003Z-\u0000\u01b6C\u0001\u0000\u0000\u0000\u01b7\u01b8\u0005-\u0000"+
		"\u0000\u01b8\u01ba\u0005\u0003\u0000\u0000\u01b9\u01bb\u0003\\.\u0000"+
		"\u01ba\u01b9\u0001\u0000\u0000\u0000\u01bb\u01bc\u0001\u0000\u0000\u0000"+
		"\u01bc\u01ba\u0001\u0000\u0000\u0000\u01bc\u01bd\u0001\u0000\u0000\u0000"+
		"\u01bdE\u0001\u0000\u0000\u0000\u01be\u01bf\u0005\u001a\u0000\u0000\u01bf"+
		"\u01c0\u0005\u0003\u0000\u0000\u01c0\u01c1\u0005-\u0000\u0000\u01c1G\u0001"+
		"\u0000\u0000\u0000\u01c2\u01c3\u0005\u001b\u0000\u0000\u01c3\u01c4\u0005"+
		"\u0003\u0000\u0000\u01c4\u01c6\u0005-\u0000\u0000\u01c5\u01c7\u0005-\u0000"+
		"\u0000\u01c6\u01c5\u0001\u0000\u0000\u0000\u01c7\u01c8\u0001\u0000\u0000"+
		"\u0000\u01c8\u01c6\u0001\u0000\u0000\u0000\u01c8\u01c9\u0001\u0000\u0000"+
		"\u0000\u01c9\u01cd\u0001\u0000\u0000\u0000\u01ca\u01cc\u0003J%\u0000\u01cb"+
		"\u01ca\u0001\u0000\u0000\u0000\u01cc\u01cf\u0001\u0000\u0000\u0000\u01cd"+
		"\u01cb\u0001\u0000\u0000\u0000\u01cd\u01ce\u0001\u0000\u0000\u0000\u01ce"+
		"\u01d0\u0001\u0000\u0000\u0000\u01cf\u01cd\u0001\u0000\u0000\u0000\u01d0"+
		"\u01d1\u0003Z-\u0000\u01d1I\u0001\u0000\u0000\u0000\u01d2\u01d3\u0005"+
		"-\u0000\u0000\u01d3\u01d5\u0005\u0003\u0000\u0000\u01d4\u01d6\u0003\\"+
		".\u0000\u01d5\u01d4\u0001\u0000\u0000\u0000\u01d6\u01d7\u0001\u0000\u0000"+
		"\u0000\u01d7\u01d5\u0001\u0000\u0000\u0000\u01d7\u01d8\u0001\u0000\u0000"+
		"\u0000\u01d8K\u0001\u0000\u0000\u0000\u01d9\u01da\u0005\u001c\u0000\u0000"+
		"\u01da\u01dc\u0005\u0003\u0000\u0000\u01db\u01dd\u0005-\u0000\u0000\u01dc"+
		"\u01db\u0001\u0000\u0000\u0000\u01dd\u01de\u0001\u0000\u0000\u0000\u01de"+
		"\u01dc\u0001\u0000\u0000\u0000\u01de\u01df\u0001\u0000\u0000\u0000\u01df"+
		"M\u0001\u0000\u0000\u0000\u01e0\u01e1\u0005\u001d\u0000\u0000\u01e1\u01e3"+
		"\u0005\u0003\u0000\u0000\u01e2\u01e4\u0005-\u0000\u0000\u01e3\u01e2\u0001"+
		"\u0000\u0000\u0000\u01e4\u01e5\u0001\u0000\u0000\u0000\u01e5\u01e3\u0001"+
		"\u0000\u0000\u0000\u01e5\u01e6\u0001\u0000\u0000\u0000\u01e6O\u0001\u0000"+
		"\u0000\u0000\u01e7\u01e8\u0005\u001e\u0000\u0000\u01e8\u01e9\u0005-\u0000"+
		"\u0000\u01e9Q\u0001\u0000\u0000\u0000\u01ea\u01ed\u0003V+\u0000\u01eb"+
		"\u01ed\u0003X,\u0000\u01ec\u01ea\u0001\u0000\u0000\u0000\u01ec\u01eb\u0001"+
		"\u0000\u0000\u0000\u01edS\u0001\u0000\u0000\u0000\u01ee\u01f6\u0005-\u0000"+
		"\u0000\u01ef\u01f7\u0005\u0003\u0000\u0000\u01f0\u01f2\u00050\u0000\u0000"+
		"\u01f1\u01f0\u0001\u0000\u0000\u0000\u01f2\u01f5\u0001\u0000\u0000\u0000"+
		"\u01f3\u01f1\u0001\u0000\u0000\u0000\u01f3\u01f4\u0001\u0000\u0000\u0000"+
		"\u01f4\u01f7\u0001\u0000\u0000\u0000\u01f5\u01f3\u0001\u0000\u0000\u0000"+
		"\u01f6\u01ef\u0001\u0000\u0000\u0000\u01f6\u01f3\u0001\u0000\u0000\u0000"+
		"\u01f7\u01f9\u0001\u0000\u0000\u0000\u01f8\u01fa\u0003\\.\u0000\u01f9"+
		"\u01f8\u0001\u0000\u0000\u0000\u01fa\u01fb\u0001\u0000\u0000\u0000\u01fb"+
		"\u01f9\u0001\u0000\u0000\u0000\u01fb\u01fc\u0001\u0000\u0000\u0000\u01fc"+
		"U\u0001\u0000\u0000\u0000\u01fd\u01fe\u0007\u0003\u0000\u0000\u01fe\u0200"+
		"\u0005\u0003\u0000\u0000\u01ff\u0201\u0003\\.\u0000\u0200\u01ff\u0001"+
		"\u0000\u0000\u0000\u0201\u0202\u0001\u0000\u0000\u0000\u0202\u0200\u0001"+
		"\u0000\u0000\u0000\u0202\u0203\u0001\u0000\u0000\u0000\u0203W\u0001\u0000"+
		"\u0000\u0000\u0204\u0205\u0007\u0004\u0000\u0000\u0205\u0207\u0005\u0003"+
		"\u0000\u0000\u0206\u0208\u0003\\.\u0000\u0207\u0206\u0001\u0000\u0000"+
		"\u0000\u0208\u0209\u0001\u0000\u0000\u0000\u0209\u0207\u0001\u0000\u0000"+
		"\u0000\u0209\u020a\u0001\u0000\u0000\u0000\u020aY\u0001\u0000\u0000\u0000"+
		"\u020b\u020c\u0007\u0005\u0000\u0000\u020c[\u0001\u0000\u0000\u0000\u020d"+
		"\u0217\u0003h4\u0000\u020e\u0217\u0003^/\u0000\u020f\u0217\u0003b1\u0000"+
		"\u0210\u0217\u0005-\u0000\u0000\u0211\u0217\u0005)\u0000\u0000\u0212\u0217"+
		"\u0005+\u0000\u0000\u0213\u0217\u0005,\u0000\u0000\u0214\u0217\u0007\u0003"+
		"\u0000\u0000\u0215\u0217\u0007\u0004\u0000\u0000\u0216\u020d\u0001\u0000"+
		"\u0000\u0000\u0216\u020e\u0001\u0000\u0000\u0000\u0216\u020f\u0001\u0000"+
		"\u0000\u0000\u0216\u0210\u0001\u0000\u0000\u0000\u0216\u0211\u0001\u0000"+
		"\u0000\u0000\u0216\u0212\u0001\u0000\u0000\u0000\u0216\u0213\u0001\u0000"+
		"\u0000\u0000\u0216\u0214\u0001\u0000\u0000\u0000\u0216\u0215\u0001\u0000"+
		"\u0000\u0000\u0217]\u0001\u0000\u0000\u0000\u0218\u0219\u0005-\u0000\u0000"+
		"\u0219\u021a\u0005&\u0000\u0000\u021a\u021b\u0005-\u0000\u0000\u021b_"+
		"\u0001\u0000\u0000\u0000\u021c\u021d\u0005*\u0000\u0000\u021d\u021e\u0005"+
		"*\u0000\u0000\u021e\u021f\u0005*\u0000\u0000\u021f\u0220\u0005*\u0000"+
		"\u0000\u0220a\u0001\u0000\u0000\u0000\u0221\u0222\u0007\u0006\u0000\u0000"+
		"\u0222\u0223\u0005\'\u0000\u0000\u0223c\u0001\u0000\u0000\u0000\u0224"+
		"\u0225\u0005)\u0000\u0000\u0225\u0226\u0005)\u0000\u0000\u0226e\u0001"+
		"\u0000\u0000\u0000\u0227\u0228\u0005+\u0000\u0000\u0228\u0229\u0005+\u0000"+
		"\u0000\u0229g\u0001\u0000\u0000\u0000\u022a\u022e\u0005(\u0000\u0000\u022b"+
		"\u022d\b\u0007\u0000\u0000\u022c\u022b\u0001\u0000\u0000\u0000\u022d\u0230"+
		"\u0001\u0000\u0000\u0000\u022e\u022c\u0001\u0000\u0000\u0000\u022e\u022f"+
		"\u0001\u0000\u0000\u0000\u022f\u0231\u0001\u0000\u0000\u0000\u0230\u022e"+
		"\u0001\u0000\u0000\u0000\u0231\u0232\u0005(\u0000\u0000\u0232i\u0001\u0000"+
		"\u0000\u0000Bmt|~\u0084\u0086\u0089\u0092\u0094\u009a\u009c\u009f\u00a8"+
		"\u00ae\u00b4\u00b6\u00c0\u00c7\u00cd\u00cf\u00d9\u00e0\u00e7\u00ec\u00ee"+
		"\u00f8\u00ff\u0105\u010f\u0115\u011f\u0125\u012f\u0135\u013f\u0148\u0155"+
		"\u0157\u0160\u0169\u0175\u0181\u0184\u0186\u0190\u0197\u019e\u01a0\u01a5"+
		"\u01a7\u01b0\u01b2\u01bc\u01c8\u01cd\u01d7\u01de\u01e5\u01ec\u01f3\u01f6"+
		"\u01fb\u0202\u0209\u0216\u022e";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}