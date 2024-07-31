// Generated from c:/Users/mads2/Sync/ZeroSyntax/ZeroSyntax-Server/server/src/utils/antlr/MapIni.g4 by ANTLR 4.13.1
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
		INT=32, INT256=33, FLOAT=34, BOOL=35, ID=36, SKIp=37, COMMENT=38;
	public static final int
		RULE_program = 0, RULE_object = 1, RULE_moduleBlocks = 2, RULE_addModuleBlock = 3, 
		RULE_replaceModuleBlock = 4, RULE_modules = 5, RULE_objectBlocks = 6, 
		RULE_objectPrerequisites = 7, RULE_objectProperty = 8, RULE_sciencePropety = 9, 
		RULE_objectWeaponSet = 10, RULE_objectArmorSet = 11, RULE_objectUnitSpecificSounds = 12, 
		RULE_objectUnitSpecificFX = 13, RULE_behaviormoduleBlock = 14, RULE_behaviorTurret = 15, 
		RULE_bodyModuleBlock = 16, RULE_drawModuleBlock = 17, RULE_conditionStateBlocks = 18, 
		RULE_conditionStateBlock = 19, RULE_defaultConditionStateBlock = 20, RULE_transitionStateBlock = 21, 
		RULE_aliasConditionStateBlock = 22, RULE_ignoreConditionStateBlock = 23, 
		RULE_removeModuleBlock = 24, RULE_property = 25, RULE_genericProperty = 26, 
		RULE_turretProperty = 27, RULE_altTurretProperty = 28, RULE_end = 29, 
		RULE_value = 30, RULE_ftype = 31, RULE_rgb = 32, RULE_procent = 33, RULE_intRang = 34, 
		RULE_floatRang = 35, RULE_quoutedID = 36;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "object", "moduleBlocks", "addModuleBlock", "replaceModuleBlock", 
			"modules", "objectBlocks", "objectPrerequisites", "objectProperty", "sciencePropety", 
			"objectWeaponSet", "objectArmorSet", "objectUnitSpecificSounds", "objectUnitSpecificFX", 
			"behaviormoduleBlock", "behaviorTurret", "bodyModuleBlock", "drawModuleBlock", 
			"conditionStateBlocks", "conditionStateBlock", "defaultConditionStateBlock", 
			"transitionStateBlock", "aliasConditionStateBlock", "ignoreConditionStateBlock", 
			"removeModuleBlock", "property", "genericProperty", "turretProperty", 
			"altTurretProperty", "end", "value", "ftype", "rgb", "procent", "intRang", 
			"floatRang", "quoutedID"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'Object'", "'AddModule'", "'ReplaceModule'", "'Prerequisites'", 
			"'='", "'Science'", "'WeaponSet'", "'ArmorSet'", "'UnitSpecificSounds'", 
			"'UnitSpecificFX'", "'Behavior'", "'Turret'", "'AltTurret'", "'Body'", 
			"'Draw'", "'ConditionState'", "'DefaultConditionState'", "'TransitionState'", 
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
			null, null, null, null, null, null, null, null, "INT", "INT256", "FLOAT", 
			"BOOL", "ID", "SKIp", "COMMENT"
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
			setState(77);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__0) {
				{
				{
				setState(74);
				object();
				}
				}
				setState(79);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(80);
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
		public List<PropertyContext> property() {
			return getRuleContexts(PropertyContext.class);
		}
		public PropertyContext property(int i) {
			return getRuleContext(PropertyContext.class,i);
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
			setState(82);
			match(T__0);
			setState(83);
			match(ID);
			setState(98);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				{
				setState(88);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 68782456720L) != 0)) {
					{
					setState(86);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case T__3:
					case T__6:
					case T__7:
					case T__8:
					case T__9:
					case T__10:
					case T__13:
					case T__14:
						{
						setState(84);
						modules();
						}
						break;
					case T__11:
					case T__12:
					case T__21:
					case T__22:
					case T__23:
					case T__24:
					case ID:
						{
						setState(85);
						property();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					setState(90);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case 2:
				{
				setState(95);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 68784500748L) != 0)) {
					{
					setState(93);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case T__1:
					case T__2:
					case T__20:
						{
						setState(91);
						moduleBlocks();
						}
						break;
					case T__11:
					case T__12:
					case T__21:
					case T__22:
					case T__23:
					case T__24:
					case ID:
						{
						setState(92);
						property();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					setState(97);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			}
			setState(100);
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
		public ModuleBlocksContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_moduleBlocks; }
	}

	public final ModuleBlocksContext moduleBlocks() throws RecognitionException {
		ModuleBlocksContext _localctx = new ModuleBlocksContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_moduleBlocks);
		try {
			setState(105);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__1:
				enterOuterAlt(_localctx, 1);
				{
				setState(102);
				addModuleBlock();
				}
				break;
			case T__2:
				enterOuterAlt(_localctx, 2);
				{
				setState(103);
				replaceModuleBlock();
				}
				break;
			case T__20:
				enterOuterAlt(_localctx, 3);
				{
				setState(104);
				removeModuleBlock();
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
		public List<PropertyContext> property() {
			return getRuleContexts(PropertyContext.class);
		}
		public PropertyContext property(int i) {
			return getRuleContext(PropertyContext.class,i);
		}
		public AddModuleBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_addModuleBlock; }
	}

	public final AddModuleBlockContext addModuleBlock() throws RecognitionException {
		AddModuleBlockContext _localctx = new AddModuleBlockContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_addModuleBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(107);
			match(T__1);
			setState(112);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 68782456720L) != 0)) {
				{
				setState(110);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__3:
				case T__6:
				case T__7:
				case T__8:
				case T__9:
				case T__10:
				case T__13:
				case T__14:
					{
					setState(108);
					modules();
					}
					break;
				case T__11:
				case T__12:
				case T__21:
				case T__22:
				case T__23:
				case T__24:
				case ID:
					{
					setState(109);
					property();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(114);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(115);
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
		public List<PropertyContext> property() {
			return getRuleContexts(PropertyContext.class);
		}
		public PropertyContext property(int i) {
			return getRuleContext(PropertyContext.class,i);
		}
		public ReplaceModuleBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_replaceModuleBlock; }
	}

	public final ReplaceModuleBlockContext replaceModuleBlock() throws RecognitionException {
		ReplaceModuleBlockContext _localctx = new ReplaceModuleBlockContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_replaceModuleBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(117);
			match(T__2);
			setState(118);
			match(ID);
			setState(123);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 68782456720L) != 0)) {
				{
				setState(121);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__3:
				case T__6:
				case T__7:
				case T__8:
				case T__9:
				case T__10:
				case T__13:
				case T__14:
					{
					setState(119);
					modules();
					}
					break;
				case T__11:
				case T__12:
				case T__21:
				case T__22:
				case T__23:
				case T__24:
				case ID:
					{
					setState(120);
					property();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(125);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(126);
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
		enterRule(_localctx, 10, RULE_modules);
		try {
			setState(132);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__14:
				enterOuterAlt(_localctx, 1);
				{
				setState(128);
				drawModuleBlock();
				}
				break;
			case T__13:
				enterOuterAlt(_localctx, 2);
				{
				setState(129);
				bodyModuleBlock();
				}
				break;
			case T__10:
				enterOuterAlt(_localctx, 3);
				{
				setState(130);
				behaviormoduleBlock();
				}
				break;
			case T__3:
			case T__6:
			case T__7:
			case T__8:
			case T__9:
				enterOuterAlt(_localctx, 4);
				{
				setState(131);
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
		enterRule(_localctx, 12, RULE_objectBlocks);
		try {
			setState(139);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__3:
				enterOuterAlt(_localctx, 1);
				{
				setState(134);
				objectPrerequisites();
				}
				break;
			case T__6:
				enterOuterAlt(_localctx, 2);
				{
				setState(135);
				objectWeaponSet();
				}
				break;
			case T__7:
				enterOuterAlt(_localctx, 3);
				{
				setState(136);
				objectArmorSet();
				}
				break;
			case T__8:
				enterOuterAlt(_localctx, 4);
				{
				setState(137);
				objectUnitSpecificSounds();
				}
				break;
			case T__9:
				enterOuterAlt(_localctx, 5);
				{
				setState(138);
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
		public List<ObjectPropertyContext> objectProperty() {
			return getRuleContexts(ObjectPropertyContext.class);
		}
		public ObjectPropertyContext objectProperty(int i) {
			return getRuleContext(ObjectPropertyContext.class,i);
		}
		public List<SciencePropetyContext> sciencePropety() {
			return getRuleContexts(SciencePropetyContext.class);
		}
		public SciencePropetyContext sciencePropety(int i) {
			return getRuleContext(SciencePropetyContext.class,i);
		}
		public ObjectPrerequisitesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectPrerequisites; }
	}

	public final ObjectPrerequisitesContext objectPrerequisites() throws RecognitionException {
		ObjectPrerequisitesContext _localctx = new ObjectPrerequisitesContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_objectPrerequisites);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(141);
			match(T__3);
			setState(146);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__0 || _la==T__5) {
				{
				setState(144);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__0:
					{
					setState(142);
					objectProperty();
					}
					break;
				case T__5:
					{
					setState(143);
					sciencePropety();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(148);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(149);
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
		public List<TerminalNode> ID() { return getTokens(MapIniParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(MapIniParser.ID, i);
		}
		public ObjectPropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectProperty; }
	}

	public final ObjectPropertyContext objectProperty() throws RecognitionException {
		ObjectPropertyContext _localctx = new ObjectPropertyContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_objectProperty);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(151);
			match(T__0);
			setState(152);
			match(T__4);
			setState(154); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(153);
				match(ID);
				}
				}
				setState(156); 
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
	public static class SciencePropetyContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(MapIniParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(MapIniParser.ID, i);
		}
		public SciencePropetyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sciencePropety; }
	}

	public final SciencePropetyContext sciencePropety() throws RecognitionException {
		SciencePropetyContext _localctx = new SciencePropetyContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_sciencePropety);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(158);
			match(T__5);
			setState(159);
			match(T__4);
			setState(161); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(160);
				match(ID);
				}
				}
				setState(163); 
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
		public List<PropertyContext> property() {
			return getRuleContexts(PropertyContext.class);
		}
		public PropertyContext property(int i) {
			return getRuleContext(PropertyContext.class,i);
		}
		public ObjectWeaponSetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectWeaponSet; }
	}

	public final ObjectWeaponSetContext objectWeaponSet() throws RecognitionException {
		ObjectWeaponSetContext _localctx = new ObjectWeaponSetContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_objectWeaponSet);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(165);
			match(T__6);
			setState(169);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 68782403584L) != 0)) {
				{
				{
				setState(166);
				property();
				}
				}
				setState(171);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(172);
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
	public static class ObjectArmorSetContext extends ParserRuleContext {
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<PropertyContext> property() {
			return getRuleContexts(PropertyContext.class);
		}
		public PropertyContext property(int i) {
			return getRuleContext(PropertyContext.class,i);
		}
		public ObjectArmorSetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectArmorSet; }
	}

	public final ObjectArmorSetContext objectArmorSet() throws RecognitionException {
		ObjectArmorSetContext _localctx = new ObjectArmorSetContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_objectArmorSet);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(174);
			match(T__7);
			setState(178);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 68782403584L) != 0)) {
				{
				{
				setState(175);
				property();
				}
				}
				setState(180);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(181);
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
	public static class ObjectUnitSpecificSoundsContext extends ParserRuleContext {
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<PropertyContext> property() {
			return getRuleContexts(PropertyContext.class);
		}
		public PropertyContext property(int i) {
			return getRuleContext(PropertyContext.class,i);
		}
		public ObjectUnitSpecificSoundsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectUnitSpecificSounds; }
	}

	public final ObjectUnitSpecificSoundsContext objectUnitSpecificSounds() throws RecognitionException {
		ObjectUnitSpecificSoundsContext _localctx = new ObjectUnitSpecificSoundsContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_objectUnitSpecificSounds);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(183);
			match(T__8);
			setState(187);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 68782403584L) != 0)) {
				{
				{
				setState(184);
				property();
				}
				}
				setState(189);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(190);
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
	public static class ObjectUnitSpecificFXContext extends ParserRuleContext {
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<PropertyContext> property() {
			return getRuleContexts(PropertyContext.class);
		}
		public PropertyContext property(int i) {
			return getRuleContext(PropertyContext.class,i);
		}
		public ObjectUnitSpecificFXContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectUnitSpecificFX; }
	}

	public final ObjectUnitSpecificFXContext objectUnitSpecificFX() throws RecognitionException {
		ObjectUnitSpecificFXContext _localctx = new ObjectUnitSpecificFXContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_objectUnitSpecificFX);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(192);
			match(T__9);
			setState(196);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 68782403584L) != 0)) {
				{
				{
				setState(193);
				property();
				}
				}
				setState(198);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(199);
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
		public BehaviormoduleBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_behaviormoduleBlock; }
	}

	public final BehaviormoduleBlockContext behaviormoduleBlock() throws RecognitionException {
		BehaviormoduleBlockContext _localctx = new BehaviormoduleBlockContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_behaviormoduleBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(201);
			match(T__10);
			setState(202);
			match(T__4);
			setState(203);
			match(ID);
			setState(204);
			match(ID);
			setState(209);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 68782403584L) != 0)) {
				{
				setState(207);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,21,_ctx) ) {
				case 1:
					{
					setState(205);
					property();
					}
					break;
				case 2:
					{
					setState(206);
					behaviorTurret();
					}
					break;
				}
				}
				setState(211);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(212);
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
		public List<GenericPropertyContext> genericProperty() {
			return getRuleContexts(GenericPropertyContext.class);
		}
		public GenericPropertyContext genericProperty(int i) {
			return getRuleContext(GenericPropertyContext.class,i);
		}
		public BehaviorTurretContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_behaviorTurret; }
	}

	public final BehaviorTurretContext behaviorTurret() throws RecognitionException {
		BehaviorTurretContext _localctx = new BehaviorTurretContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_behaviorTurret);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(214);
			_la = _input.LA(1);
			if ( !(_la==T__11 || _la==T__12) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(218);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(215);
				genericProperty();
				}
				}
				setState(220);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(221);
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
		enterRule(_localctx, 32, RULE_bodyModuleBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(223);
			match(T__13);
			setState(224);
			match(T__4);
			setState(225);
			match(ID);
			setState(226);
			match(ID);
			setState(230);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 68782403584L) != 0)) {
				{
				{
				setState(227);
				property();
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
	public static class DrawModuleBlockContext extends ParserRuleContext {
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
		enterRule(_localctx, 34, RULE_drawModuleBlock);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(235);
			match(T__14);
			setState(236);
			match(T__4);
			setState(237);
			match(ID);
			setState(238);
			match(ID);
			setState(247);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 68784435200L) != 0)) {
				{
				setState(245);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__15:
				case T__16:
				case T__17:
				case T__18:
				case T__19:
					{
					setState(240); 
					_errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							setState(239);
							conditionStateBlocks();
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						setState(242); 
						_errHandler.sync(this);
						_alt = getInterpreter().adaptivePredict(_input,25,_ctx);
					} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
					}
					break;
				case T__11:
				case T__12:
				case T__21:
				case T__22:
				case T__23:
				case T__24:
				case ID:
					{
					setState(244);
					property();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(249);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(250);
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
		enterRule(_localctx, 36, RULE_conditionStateBlocks);
		try {
			setState(257);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__15:
				enterOuterAlt(_localctx, 1);
				{
				setState(252);
				conditionStateBlock();
				}
				break;
			case T__16:
				enterOuterAlt(_localctx, 2);
				{
				setState(253);
				defaultConditionStateBlock();
				}
				break;
			case T__17:
				enterOuterAlt(_localctx, 3);
				{
				setState(254);
				transitionStateBlock();
				}
				break;
			case T__18:
				enterOuterAlt(_localctx, 4);
				{
				setState(255);
				aliasConditionStateBlock();
				}
				break;
			case T__19:
				enterOuterAlt(_localctx, 5);
				{
				setState(256);
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
		public List<PropertyContext> property() {
			return getRuleContexts(PropertyContext.class);
		}
		public PropertyContext property(int i) {
			return getRuleContext(PropertyContext.class,i);
		}
		public ConditionStateBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conditionStateBlock; }
	}

	public final ConditionStateBlockContext conditionStateBlock() throws RecognitionException {
		ConditionStateBlockContext _localctx = new ConditionStateBlockContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_conditionStateBlock);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(259);
			match(T__15);
			setState(260);
			match(T__4);
			setState(262); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(261);
					match(ID);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(264); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,29,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			setState(269);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 68782403584L) != 0)) {
				{
				{
				setState(266);
				property();
				}
				}
				setState(271);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(272);
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
		public List<PropertyContext> property() {
			return getRuleContexts(PropertyContext.class);
		}
		public PropertyContext property(int i) {
			return getRuleContext(PropertyContext.class,i);
		}
		public DefaultConditionStateBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_defaultConditionStateBlock; }
	}

	public final DefaultConditionStateBlockContext defaultConditionStateBlock() throws RecognitionException {
		DefaultConditionStateBlockContext _localctx = new DefaultConditionStateBlockContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_defaultConditionStateBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(274);
			match(T__16);
			setState(278);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 68782403584L) != 0)) {
				{
				{
				setState(275);
				property();
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
	public static class TransitionStateBlockContext extends ParserRuleContext {
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
		public TransitionStateBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_transitionStateBlock; }
	}

	public final TransitionStateBlockContext transitionStateBlock() throws RecognitionException {
		TransitionStateBlockContext _localctx = new TransitionStateBlockContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_transitionStateBlock);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(283);
			match(T__17);
			setState(284);
			match(T__4);
			setState(285);
			match(ID);
			setState(287); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(286);
					match(ID);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(289); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,32,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			setState(294);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 68782403584L) != 0)) {
				{
				{
				setState(291);
				property();
				}
				}
				setState(296);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(297);
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
		enterRule(_localctx, 44, RULE_aliasConditionStateBlock);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(299);
			match(T__18);
			setState(300);
			match(T__4);
			setState(302); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(301);
					match(ID);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(304); 
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
		enterRule(_localctx, 46, RULE_ignoreConditionStateBlock);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(306);
			match(T__19);
			setState(307);
			match(T__4);
			setState(309); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(308);
					match(ID);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(311); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,35,_ctx);
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
		enterRule(_localctx, 48, RULE_removeModuleBlock);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(313);
			match(T__20);
			setState(314);
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
	public static class PropertyContext extends ParserRuleContext {
		public GenericPropertyContext genericProperty() {
			return getRuleContext(GenericPropertyContext.class,0);
		}
		public TurretPropertyContext turretProperty() {
			return getRuleContext(TurretPropertyContext.class,0);
		}
		public AltTurretPropertyContext altTurretProperty() {
			return getRuleContext(AltTurretPropertyContext.class,0);
		}
		public PropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_property; }
	}

	public final PropertyContext property() throws RecognitionException {
		PropertyContext _localctx = new PropertyContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_property);
		try {
			setState(319);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(316);
				genericProperty();
				}
				break;
			case T__11:
			case T__21:
			case T__22:
				enterOuterAlt(_localctx, 2);
				{
				setState(317);
				turretProperty();
				}
				break;
			case T__12:
			case T__23:
			case T__24:
				enterOuterAlt(_localctx, 3);
				{
				setState(318);
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
	public static class GenericPropertyContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public List<ValueContext> value() {
			return getRuleContexts(ValueContext.class);
		}
		public ValueContext value(int i) {
			return getRuleContext(ValueContext.class,i);
		}
		public GenericPropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_genericProperty; }
	}

	public final GenericPropertyContext genericProperty() throws RecognitionException {
		GenericPropertyContext _localctx = new GenericPropertyContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_genericProperty);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(321);
			match(ID);
			setState(322);
			match(T__4);
			setState(324); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(323);
					value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(326); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,37,_ctx);
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
	public static class TurretPropertyContext extends ParserRuleContext {
		public List<ValueContext> value() {
			return getRuleContexts(ValueContext.class);
		}
		public ValueContext value(int i) {
			return getRuleContext(ValueContext.class,i);
		}
		public TurretPropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_turretProperty; }
	}

	public final TurretPropertyContext turretProperty() throws RecognitionException {
		TurretPropertyContext _localctx = new TurretPropertyContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_turretProperty);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(328);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 12587008L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(329);
			match(T__4);
			setState(331); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(330);
					value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(333); 
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
		enterRule(_localctx, 56, RULE_altTurretProperty);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(335);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 50339840L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(336);
			match(T__4);
			setState(338); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(337);
					value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(340); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,39,_ctx);
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
		enterRule(_localctx, 58, RULE_end);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(342);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 469762048L) != 0)) ) {
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
		enterRule(_localctx, 60, RULE_value);
		int _la;
		try {
			setState(353);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,40,_ctx) ) {
			case 1:
				_localctx = new StringContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(344);
				quoutedID();
				}
				break;
			case 2:
				_localctx = new FiletypeContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(345);
				ftype();
				}
				break;
			case 3:
				_localctx = new ProcentageContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(346);
				procent();
				}
				break;
			case 4:
				_localctx = new IdContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(347);
				match(ID);
				}
				break;
			case 5:
				_localctx = new IntContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(348);
				match(INT);
				}
				break;
			case 6:
				_localctx = new FloatContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(349);
				match(FLOAT);
				}
				break;
			case 7:
				_localctx = new BoolContext(_localctx);
				enterOuterAlt(_localctx, 7);
				{
				setState(350);
				match(BOOL);
				}
				break;
			case 8:
				_localctx = new TurretValueContext(_localctx);
				enterOuterAlt(_localctx, 8);
				{
				setState(351);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 12587008L) != 0)) ) {
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
				setState(352);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 50339840L) != 0)) ) {
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
		enterRule(_localctx, 62, RULE_ftype);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(355);
			match(ID);
			setState(356);
			match(T__28);
			setState(357);
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
		enterRule(_localctx, 64, RULE_rgb);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(359);
			match(INT256);
			setState(360);
			match(INT256);
			setState(361);
			match(INT256);
			setState(362);
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
		enterRule(_localctx, 66, RULE_procent);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(364);
			_la = _input.LA(1);
			if ( !(_la==INT || _la==FLOAT) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(365);
			match(T__29);
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
		enterRule(_localctx, 68, RULE_intRang);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(367);
			match(INT);
			setState(368);
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
		enterRule(_localctx, 70, RULE_floatRang);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(370);
			match(FLOAT);
			setState(371);
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
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public QuoutedIDContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_quoutedID; }
	}

	public final QuoutedIDContext quoutedID() throws RecognitionException {
		QuoutedIDContext _localctx = new QuoutedIDContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_quoutedID);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(373);
			match(T__30);
			setState(374);
			match(ID);
			setState(375);
			match(T__30);
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
		"\u0004\u0001&\u017a\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
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
		"#\u0007#\u0002$\u0007$\u0001\u0000\u0005\u0000L\b\u0000\n\u0000\f\u0000"+
		"O\t\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0005\u0001W\b\u0001\n\u0001\f\u0001Z\t\u0001\u0001\u0001"+
		"\u0001\u0001\u0005\u0001^\b\u0001\n\u0001\f\u0001a\t\u0001\u0003\u0001"+
		"c\b\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0003\u0002j\b\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0005\u0003"+
		"o\b\u0003\n\u0003\f\u0003r\t\u0003\u0001\u0003\u0001\u0003\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0005\u0004z\b\u0004\n\u0004\f\u0004"+
		"}\t\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0003\u0005\u0085\b\u0005\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0003\u0006\u008c\b\u0006\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0005\u0007\u0091\b\u0007\n\u0007\f\u0007\u0094\t\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0004\b\u009b\b\b\u000b\b\f"+
		"\b\u009c\u0001\t\u0001\t\u0001\t\u0004\t\u00a2\b\t\u000b\t\f\t\u00a3\u0001"+
		"\n\u0001\n\u0005\n\u00a8\b\n\n\n\f\n\u00ab\t\n\u0001\n\u0001\n\u0001\u000b"+
		"\u0001\u000b\u0005\u000b\u00b1\b\u000b\n\u000b\f\u000b\u00b4\t\u000b\u0001"+
		"\u000b\u0001\u000b\u0001\f\u0001\f\u0005\f\u00ba\b\f\n\f\f\f\u00bd\t\f"+
		"\u0001\f\u0001\f\u0001\r\u0001\r\u0005\r\u00c3\b\r\n\r\f\r\u00c6\t\r\u0001"+
		"\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e"+
		"\u0001\u000e\u0005\u000e\u00d0\b\u000e\n\u000e\f\u000e\u00d3\t\u000e\u0001"+
		"\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0005\u000f\u00d9\b\u000f\n"+
		"\u000f\f\u000f\u00dc\t\u000f\u0001\u000f\u0001\u000f\u0001\u0010\u0001"+
		"\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0005\u0010\u00e5\b\u0010\n"+
		"\u0010\f\u0010\u00e8\t\u0010\u0001\u0010\u0001\u0010\u0001\u0011\u0001"+
		"\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0004\u0011\u00f1\b\u0011\u000b"+
		"\u0011\f\u0011\u00f2\u0001\u0011\u0005\u0011\u00f6\b\u0011\n\u0011\f\u0011"+
		"\u00f9\t\u0011\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012\u0001\u0012"+
		"\u0001\u0012\u0001\u0012\u0003\u0012\u0102\b\u0012\u0001\u0013\u0001\u0013"+
		"\u0001\u0013\u0004\u0013\u0107\b\u0013\u000b\u0013\f\u0013\u0108\u0001"+
		"\u0013\u0005\u0013\u010c\b\u0013\n\u0013\f\u0013\u010f\t\u0013\u0001\u0013"+
		"\u0001\u0013\u0001\u0014\u0001\u0014\u0005\u0014\u0115\b\u0014\n\u0014"+
		"\f\u0014\u0118\t\u0014\u0001\u0014\u0001\u0014\u0001\u0015\u0001\u0015"+
		"\u0001\u0015\u0001\u0015\u0004\u0015\u0120\b\u0015\u000b\u0015\f\u0015"+
		"\u0121\u0001\u0015\u0005\u0015\u0125\b\u0015\n\u0015\f\u0015\u0128\t\u0015"+
		"\u0001\u0015\u0001\u0015\u0001\u0016\u0001\u0016\u0001\u0016\u0004\u0016"+
		"\u012f\b\u0016\u000b\u0016\f\u0016\u0130\u0001\u0017\u0001\u0017\u0001"+
		"\u0017\u0004\u0017\u0136\b\u0017\u000b\u0017\f\u0017\u0137\u0001\u0018"+
		"\u0001\u0018\u0001\u0018\u0001\u0019\u0001\u0019\u0001\u0019\u0003\u0019"+
		"\u0140\b\u0019\u0001\u001a\u0001\u001a\u0001\u001a\u0004\u001a\u0145\b"+
		"\u001a\u000b\u001a\f\u001a\u0146\u0001\u001b\u0001\u001b\u0001\u001b\u0004"+
		"\u001b\u014c\b\u001b\u000b\u001b\f\u001b\u014d\u0001\u001c\u0001\u001c"+
		"\u0001\u001c\u0004\u001c\u0153\b\u001c\u000b\u001c\f\u001c\u0154\u0001"+
		"\u001d\u0001\u001d\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0001"+
		"\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0003\u001e\u0162"+
		"\b\u001e\u0001\u001f\u0001\u001f\u0001\u001f\u0001\u001f\u0001 \u0001"+
		" \u0001 \u0001 \u0001 \u0001!\u0001!\u0001!\u0001\"\u0001\"\u0001\"\u0001"+
		"#\u0001#\u0001#\u0001$\u0001$\u0001$\u0001$\u0001$\u0000\u0000%\u0000"+
		"\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c"+
		"\u001e \"$&(*,.02468:<>@BDFH\u0000\u0005\u0001\u0000\f\r\u0002\u0000\f"+
		"\f\u0016\u0017\u0002\u0000\r\r\u0018\u0019\u0001\u0000\u001a\u001c\u0002"+
		"\u0000  \"\"\u018e\u0000M\u0001\u0000\u0000\u0000\u0002R\u0001\u0000\u0000"+
		"\u0000\u0004i\u0001\u0000\u0000\u0000\u0006k\u0001\u0000\u0000\u0000\b"+
		"u\u0001\u0000\u0000\u0000\n\u0084\u0001\u0000\u0000\u0000\f\u008b\u0001"+
		"\u0000\u0000\u0000\u000e\u008d\u0001\u0000\u0000\u0000\u0010\u0097\u0001"+
		"\u0000\u0000\u0000\u0012\u009e\u0001\u0000\u0000\u0000\u0014\u00a5\u0001"+
		"\u0000\u0000\u0000\u0016\u00ae\u0001\u0000\u0000\u0000\u0018\u00b7\u0001"+
		"\u0000\u0000\u0000\u001a\u00c0\u0001\u0000\u0000\u0000\u001c\u00c9\u0001"+
		"\u0000\u0000\u0000\u001e\u00d6\u0001\u0000\u0000\u0000 \u00df\u0001\u0000"+
		"\u0000\u0000\"\u00eb\u0001\u0000\u0000\u0000$\u0101\u0001\u0000\u0000"+
		"\u0000&\u0103\u0001\u0000\u0000\u0000(\u0112\u0001\u0000\u0000\u0000*"+
		"\u011b\u0001\u0000\u0000\u0000,\u012b\u0001\u0000\u0000\u0000.\u0132\u0001"+
		"\u0000\u0000\u00000\u0139\u0001\u0000\u0000\u00002\u013f\u0001\u0000\u0000"+
		"\u00004\u0141\u0001\u0000\u0000\u00006\u0148\u0001\u0000\u0000\u00008"+
		"\u014f\u0001\u0000\u0000\u0000:\u0156\u0001\u0000\u0000\u0000<\u0161\u0001"+
		"\u0000\u0000\u0000>\u0163\u0001\u0000\u0000\u0000@\u0167\u0001\u0000\u0000"+
		"\u0000B\u016c\u0001\u0000\u0000\u0000D\u016f\u0001\u0000\u0000\u0000F"+
		"\u0172\u0001\u0000\u0000\u0000H\u0175\u0001\u0000\u0000\u0000JL\u0003"+
		"\u0002\u0001\u0000KJ\u0001\u0000\u0000\u0000LO\u0001\u0000\u0000\u0000"+
		"MK\u0001\u0000\u0000\u0000MN\u0001\u0000\u0000\u0000NP\u0001\u0000\u0000"+
		"\u0000OM\u0001\u0000\u0000\u0000PQ\u0005\u0000\u0000\u0001Q\u0001\u0001"+
		"\u0000\u0000\u0000RS\u0005\u0001\u0000\u0000Sb\u0005$\u0000\u0000TW\u0003"+
		"\n\u0005\u0000UW\u00032\u0019\u0000VT\u0001\u0000\u0000\u0000VU\u0001"+
		"\u0000\u0000\u0000WZ\u0001\u0000\u0000\u0000XV\u0001\u0000\u0000\u0000"+
		"XY\u0001\u0000\u0000\u0000Yc\u0001\u0000\u0000\u0000ZX\u0001\u0000\u0000"+
		"\u0000[^\u0003\u0004\u0002\u0000\\^\u00032\u0019\u0000][\u0001\u0000\u0000"+
		"\u0000]\\\u0001\u0000\u0000\u0000^a\u0001\u0000\u0000\u0000_]\u0001\u0000"+
		"\u0000\u0000_`\u0001\u0000\u0000\u0000`c\u0001\u0000\u0000\u0000a_\u0001"+
		"\u0000\u0000\u0000bX\u0001\u0000\u0000\u0000b_\u0001\u0000\u0000\u0000"+
		"cd\u0001\u0000\u0000\u0000de\u0003:\u001d\u0000e\u0003\u0001\u0000\u0000"+
		"\u0000fj\u0003\u0006\u0003\u0000gj\u0003\b\u0004\u0000hj\u00030\u0018"+
		"\u0000if\u0001\u0000\u0000\u0000ig\u0001\u0000\u0000\u0000ih\u0001\u0000"+
		"\u0000\u0000j\u0005\u0001\u0000\u0000\u0000kp\u0005\u0002\u0000\u0000"+
		"lo\u0003\n\u0005\u0000mo\u00032\u0019\u0000nl\u0001\u0000\u0000\u0000"+
		"nm\u0001\u0000\u0000\u0000or\u0001\u0000\u0000\u0000pn\u0001\u0000\u0000"+
		"\u0000pq\u0001\u0000\u0000\u0000qs\u0001\u0000\u0000\u0000rp\u0001\u0000"+
		"\u0000\u0000st\u0003:\u001d\u0000t\u0007\u0001\u0000\u0000\u0000uv\u0005"+
		"\u0003\u0000\u0000v{\u0005$\u0000\u0000wz\u0003\n\u0005\u0000xz\u0003"+
		"2\u0019\u0000yw\u0001\u0000\u0000\u0000yx\u0001\u0000\u0000\u0000z}\u0001"+
		"\u0000\u0000\u0000{y\u0001\u0000\u0000\u0000{|\u0001\u0000\u0000\u0000"+
		"|~\u0001\u0000\u0000\u0000}{\u0001\u0000\u0000\u0000~\u007f\u0003:\u001d"+
		"\u0000\u007f\t\u0001\u0000\u0000\u0000\u0080\u0085\u0003\"\u0011\u0000"+
		"\u0081\u0085\u0003 \u0010\u0000\u0082\u0085\u0003\u001c\u000e\u0000\u0083"+
		"\u0085\u0003\f\u0006\u0000\u0084\u0080\u0001\u0000\u0000\u0000\u0084\u0081"+
		"\u0001\u0000\u0000\u0000\u0084\u0082\u0001\u0000\u0000\u0000\u0084\u0083"+
		"\u0001\u0000\u0000\u0000\u0085\u000b\u0001\u0000\u0000\u0000\u0086\u008c"+
		"\u0003\u000e\u0007\u0000\u0087\u008c\u0003\u0014\n\u0000\u0088\u008c\u0003"+
		"\u0016\u000b\u0000\u0089\u008c\u0003\u0018\f\u0000\u008a\u008c\u0003\u001a"+
		"\r\u0000\u008b\u0086\u0001\u0000\u0000\u0000\u008b\u0087\u0001\u0000\u0000"+
		"\u0000\u008b\u0088\u0001\u0000\u0000\u0000\u008b\u0089\u0001\u0000\u0000"+
		"\u0000\u008b\u008a\u0001\u0000\u0000\u0000\u008c\r\u0001\u0000\u0000\u0000"+
		"\u008d\u0092\u0005\u0004\u0000\u0000\u008e\u0091\u0003\u0010\b\u0000\u008f"+
		"\u0091\u0003\u0012\t\u0000\u0090\u008e\u0001\u0000\u0000\u0000\u0090\u008f"+
		"\u0001\u0000\u0000\u0000\u0091\u0094\u0001\u0000\u0000\u0000\u0092\u0090"+
		"\u0001\u0000\u0000\u0000\u0092\u0093\u0001\u0000\u0000\u0000\u0093\u0095"+
		"\u0001\u0000\u0000\u0000\u0094\u0092\u0001\u0000\u0000\u0000\u0095\u0096"+
		"\u0003:\u001d\u0000\u0096\u000f\u0001\u0000\u0000\u0000\u0097\u0098\u0005"+
		"\u0001\u0000\u0000\u0098\u009a\u0005\u0005\u0000\u0000\u0099\u009b\u0005"+
		"$\u0000\u0000\u009a\u0099\u0001\u0000\u0000\u0000\u009b\u009c\u0001\u0000"+
		"\u0000\u0000\u009c\u009a\u0001\u0000\u0000\u0000\u009c\u009d\u0001\u0000"+
		"\u0000\u0000\u009d\u0011\u0001\u0000\u0000\u0000\u009e\u009f\u0005\u0006"+
		"\u0000\u0000\u009f\u00a1\u0005\u0005\u0000\u0000\u00a0\u00a2\u0005$\u0000"+
		"\u0000\u00a1\u00a0\u0001\u0000\u0000\u0000\u00a2\u00a3\u0001\u0000\u0000"+
		"\u0000\u00a3\u00a1\u0001\u0000\u0000\u0000\u00a3\u00a4\u0001\u0000\u0000"+
		"\u0000\u00a4\u0013\u0001\u0000\u0000\u0000\u00a5\u00a9\u0005\u0007\u0000"+
		"\u0000\u00a6\u00a8\u00032\u0019\u0000\u00a7\u00a6\u0001\u0000\u0000\u0000"+
		"\u00a8\u00ab\u0001\u0000\u0000\u0000\u00a9\u00a7\u0001\u0000\u0000\u0000"+
		"\u00a9\u00aa\u0001\u0000\u0000\u0000\u00aa\u00ac\u0001\u0000\u0000\u0000"+
		"\u00ab\u00a9\u0001\u0000\u0000\u0000\u00ac\u00ad\u0003:\u001d\u0000\u00ad"+
		"\u0015\u0001\u0000\u0000\u0000\u00ae\u00b2\u0005\b\u0000\u0000\u00af\u00b1"+
		"\u00032\u0019\u0000\u00b0\u00af\u0001\u0000\u0000\u0000\u00b1\u00b4\u0001"+
		"\u0000\u0000\u0000\u00b2\u00b0\u0001\u0000\u0000\u0000\u00b2\u00b3\u0001"+
		"\u0000\u0000\u0000\u00b3\u00b5\u0001\u0000\u0000\u0000\u00b4\u00b2\u0001"+
		"\u0000\u0000\u0000\u00b5\u00b6\u0003:\u001d\u0000\u00b6\u0017\u0001\u0000"+
		"\u0000\u0000\u00b7\u00bb\u0005\t\u0000\u0000\u00b8\u00ba\u00032\u0019"+
		"\u0000\u00b9\u00b8\u0001\u0000\u0000\u0000\u00ba\u00bd\u0001\u0000\u0000"+
		"\u0000\u00bb\u00b9\u0001\u0000\u0000\u0000\u00bb\u00bc\u0001\u0000\u0000"+
		"\u0000\u00bc\u00be\u0001\u0000\u0000\u0000\u00bd\u00bb\u0001\u0000\u0000"+
		"\u0000\u00be\u00bf\u0003:\u001d\u0000\u00bf\u0019\u0001\u0000\u0000\u0000"+
		"\u00c0\u00c4\u0005\n\u0000\u0000\u00c1\u00c3\u00032\u0019\u0000\u00c2"+
		"\u00c1\u0001\u0000\u0000\u0000\u00c3\u00c6\u0001\u0000\u0000\u0000\u00c4"+
		"\u00c2\u0001\u0000\u0000\u0000\u00c4\u00c5\u0001\u0000\u0000\u0000\u00c5"+
		"\u00c7\u0001\u0000\u0000\u0000\u00c6\u00c4\u0001\u0000\u0000\u0000\u00c7"+
		"\u00c8\u0003:\u001d\u0000\u00c8\u001b\u0001\u0000\u0000\u0000\u00c9\u00ca"+
		"\u0005\u000b\u0000\u0000\u00ca\u00cb\u0005\u0005\u0000\u0000\u00cb\u00cc"+
		"\u0005$\u0000\u0000\u00cc\u00d1\u0005$\u0000\u0000\u00cd\u00d0\u00032"+
		"\u0019\u0000\u00ce\u00d0\u0003\u001e\u000f\u0000\u00cf\u00cd\u0001\u0000"+
		"\u0000\u0000\u00cf\u00ce\u0001\u0000\u0000\u0000\u00d0\u00d3\u0001\u0000"+
		"\u0000\u0000\u00d1\u00cf\u0001\u0000\u0000\u0000\u00d1\u00d2\u0001\u0000"+
		"\u0000\u0000\u00d2\u00d4\u0001\u0000\u0000\u0000\u00d3\u00d1\u0001\u0000"+
		"\u0000\u0000\u00d4\u00d5\u0003:\u001d\u0000\u00d5\u001d\u0001\u0000\u0000"+
		"\u0000\u00d6\u00da\u0007\u0000\u0000\u0000\u00d7\u00d9\u00034\u001a\u0000"+
		"\u00d8\u00d7\u0001\u0000\u0000\u0000\u00d9\u00dc\u0001\u0000\u0000\u0000"+
		"\u00da\u00d8\u0001\u0000\u0000\u0000\u00da\u00db\u0001\u0000\u0000\u0000"+
		"\u00db\u00dd\u0001\u0000\u0000\u0000\u00dc\u00da\u0001\u0000\u0000\u0000"+
		"\u00dd\u00de\u0003:\u001d\u0000\u00de\u001f\u0001\u0000\u0000\u0000\u00df"+
		"\u00e0\u0005\u000e\u0000\u0000\u00e0\u00e1\u0005\u0005\u0000\u0000\u00e1"+
		"\u00e2\u0005$\u0000\u0000\u00e2\u00e6\u0005$\u0000\u0000\u00e3\u00e5\u0003"+
		"2\u0019\u0000\u00e4\u00e3\u0001\u0000\u0000\u0000\u00e5\u00e8\u0001\u0000"+
		"\u0000\u0000\u00e6\u00e4\u0001\u0000\u0000\u0000\u00e6\u00e7\u0001\u0000"+
		"\u0000\u0000\u00e7\u00e9\u0001\u0000\u0000\u0000\u00e8\u00e6\u0001\u0000"+
		"\u0000\u0000\u00e9\u00ea\u0003:\u001d\u0000\u00ea!\u0001\u0000\u0000\u0000"+
		"\u00eb\u00ec\u0005\u000f\u0000\u0000\u00ec\u00ed\u0005\u0005\u0000\u0000"+
		"\u00ed\u00ee\u0005$\u0000\u0000\u00ee\u00f7\u0005$\u0000\u0000\u00ef\u00f1"+
		"\u0003$\u0012\u0000\u00f0\u00ef\u0001\u0000\u0000\u0000\u00f1\u00f2\u0001"+
		"\u0000\u0000\u0000\u00f2\u00f0\u0001\u0000\u0000\u0000\u00f2\u00f3\u0001"+
		"\u0000\u0000\u0000\u00f3\u00f6\u0001\u0000\u0000\u0000\u00f4\u00f6\u0003"+
		"2\u0019\u0000\u00f5\u00f0\u0001\u0000\u0000\u0000\u00f5\u00f4\u0001\u0000"+
		"\u0000\u0000\u00f6\u00f9\u0001\u0000\u0000\u0000\u00f7\u00f5\u0001\u0000"+
		"\u0000\u0000\u00f7\u00f8\u0001\u0000\u0000\u0000\u00f8\u00fa\u0001\u0000"+
		"\u0000\u0000\u00f9\u00f7\u0001\u0000\u0000\u0000\u00fa\u00fb\u0003:\u001d"+
		"\u0000\u00fb#\u0001\u0000\u0000\u0000\u00fc\u0102\u0003&\u0013\u0000\u00fd"+
		"\u0102\u0003(\u0014\u0000\u00fe\u0102\u0003*\u0015\u0000\u00ff\u0102\u0003"+
		",\u0016\u0000\u0100\u0102\u0003.\u0017\u0000\u0101\u00fc\u0001\u0000\u0000"+
		"\u0000\u0101\u00fd\u0001\u0000\u0000\u0000\u0101\u00fe\u0001\u0000\u0000"+
		"\u0000\u0101\u00ff\u0001\u0000\u0000\u0000\u0101\u0100\u0001\u0000\u0000"+
		"\u0000\u0102%\u0001\u0000\u0000\u0000\u0103\u0104\u0005\u0010\u0000\u0000"+
		"\u0104\u0106\u0005\u0005\u0000\u0000\u0105\u0107\u0005$\u0000\u0000\u0106"+
		"\u0105\u0001\u0000\u0000\u0000\u0107\u0108\u0001\u0000\u0000\u0000\u0108"+
		"\u0106\u0001\u0000\u0000\u0000\u0108\u0109\u0001\u0000\u0000\u0000\u0109"+
		"\u010d\u0001\u0000\u0000\u0000\u010a\u010c\u00032\u0019\u0000\u010b\u010a"+
		"\u0001\u0000\u0000\u0000\u010c\u010f\u0001\u0000\u0000\u0000\u010d\u010b"+
		"\u0001\u0000\u0000\u0000\u010d\u010e\u0001\u0000\u0000\u0000\u010e\u0110"+
		"\u0001\u0000\u0000\u0000\u010f\u010d\u0001\u0000\u0000\u0000\u0110\u0111"+
		"\u0003:\u001d\u0000\u0111\'\u0001\u0000\u0000\u0000\u0112\u0116\u0005"+
		"\u0011\u0000\u0000\u0113\u0115\u00032\u0019\u0000\u0114\u0113\u0001\u0000"+
		"\u0000\u0000\u0115\u0118\u0001\u0000\u0000\u0000\u0116\u0114\u0001\u0000"+
		"\u0000\u0000\u0116\u0117\u0001\u0000\u0000\u0000\u0117\u0119\u0001\u0000"+
		"\u0000\u0000\u0118\u0116\u0001\u0000\u0000\u0000\u0119\u011a\u0003:\u001d"+
		"\u0000\u011a)\u0001\u0000\u0000\u0000\u011b\u011c\u0005\u0012\u0000\u0000"+
		"\u011c\u011d\u0005\u0005\u0000\u0000\u011d\u011f\u0005$\u0000\u0000\u011e"+
		"\u0120\u0005$\u0000\u0000\u011f\u011e\u0001\u0000\u0000\u0000\u0120\u0121"+
		"\u0001\u0000\u0000\u0000\u0121\u011f\u0001\u0000\u0000\u0000\u0121\u0122"+
		"\u0001\u0000\u0000\u0000\u0122\u0126\u0001\u0000\u0000\u0000\u0123\u0125"+
		"\u00032\u0019\u0000\u0124\u0123\u0001\u0000\u0000\u0000\u0125\u0128\u0001"+
		"\u0000\u0000\u0000\u0126\u0124\u0001\u0000\u0000\u0000\u0126\u0127\u0001"+
		"\u0000\u0000\u0000\u0127\u0129\u0001\u0000\u0000\u0000\u0128\u0126\u0001"+
		"\u0000\u0000\u0000\u0129\u012a\u0003:\u001d\u0000\u012a+\u0001\u0000\u0000"+
		"\u0000\u012b\u012c\u0005\u0013\u0000\u0000\u012c\u012e\u0005\u0005\u0000"+
		"\u0000\u012d\u012f\u0005$\u0000\u0000\u012e\u012d\u0001\u0000\u0000\u0000"+
		"\u012f\u0130\u0001\u0000\u0000\u0000\u0130\u012e\u0001\u0000\u0000\u0000"+
		"\u0130\u0131\u0001\u0000\u0000\u0000\u0131-\u0001\u0000\u0000\u0000\u0132"+
		"\u0133\u0005\u0014\u0000\u0000\u0133\u0135\u0005\u0005\u0000\u0000\u0134"+
		"\u0136\u0005$\u0000\u0000\u0135\u0134\u0001\u0000\u0000\u0000\u0136\u0137"+
		"\u0001\u0000\u0000\u0000\u0137\u0135\u0001\u0000\u0000\u0000\u0137\u0138"+
		"\u0001\u0000\u0000\u0000\u0138/\u0001\u0000\u0000\u0000\u0139\u013a\u0005"+
		"\u0015\u0000\u0000\u013a\u013b\u0005$\u0000\u0000\u013b1\u0001\u0000\u0000"+
		"\u0000\u013c\u0140\u00034\u001a\u0000\u013d\u0140\u00036\u001b\u0000\u013e"+
		"\u0140\u00038\u001c\u0000\u013f\u013c\u0001\u0000\u0000\u0000\u013f\u013d"+
		"\u0001\u0000\u0000\u0000\u013f\u013e\u0001\u0000\u0000\u0000\u01403\u0001"+
		"\u0000\u0000\u0000\u0141\u0142\u0005$\u0000\u0000\u0142\u0144\u0005\u0005"+
		"\u0000\u0000\u0143\u0145\u0003<\u001e\u0000\u0144\u0143\u0001\u0000\u0000"+
		"\u0000\u0145\u0146\u0001\u0000\u0000\u0000\u0146\u0144\u0001\u0000\u0000"+
		"\u0000\u0146\u0147\u0001\u0000\u0000\u0000\u01475\u0001\u0000\u0000\u0000"+
		"\u0148\u0149\u0007\u0001\u0000\u0000\u0149\u014b\u0005\u0005\u0000\u0000"+
		"\u014a\u014c\u0003<\u001e\u0000\u014b\u014a\u0001\u0000\u0000\u0000\u014c"+
		"\u014d\u0001\u0000\u0000\u0000\u014d\u014b\u0001\u0000\u0000\u0000\u014d"+
		"\u014e\u0001\u0000\u0000\u0000\u014e7\u0001\u0000\u0000\u0000\u014f\u0150"+
		"\u0007\u0002\u0000\u0000\u0150\u0152\u0005\u0005\u0000\u0000\u0151\u0153"+
		"\u0003<\u001e\u0000\u0152\u0151\u0001\u0000\u0000\u0000\u0153\u0154\u0001"+
		"\u0000\u0000\u0000\u0154\u0152\u0001\u0000\u0000\u0000\u0154\u0155\u0001"+
		"\u0000\u0000\u0000\u01559\u0001\u0000\u0000\u0000\u0156\u0157\u0007\u0003"+
		"\u0000\u0000\u0157;\u0001\u0000\u0000\u0000\u0158\u0162\u0003H$\u0000"+
		"\u0159\u0162\u0003>\u001f\u0000\u015a\u0162\u0003B!\u0000\u015b\u0162"+
		"\u0005$\u0000\u0000\u015c\u0162\u0005 \u0000\u0000\u015d\u0162\u0005\""+
		"\u0000\u0000\u015e\u0162\u0005#\u0000\u0000\u015f\u0162\u0007\u0001\u0000"+
		"\u0000\u0160\u0162\u0007\u0002\u0000\u0000\u0161\u0158\u0001\u0000\u0000"+
		"\u0000\u0161\u0159\u0001\u0000\u0000\u0000\u0161\u015a\u0001\u0000\u0000"+
		"\u0000\u0161\u015b\u0001\u0000\u0000\u0000\u0161\u015c\u0001\u0000\u0000"+
		"\u0000\u0161\u015d\u0001\u0000\u0000\u0000\u0161\u015e\u0001\u0000\u0000"+
		"\u0000\u0161\u015f\u0001\u0000\u0000\u0000\u0161\u0160\u0001\u0000\u0000"+
		"\u0000\u0162=\u0001\u0000\u0000\u0000\u0163\u0164\u0005$\u0000\u0000\u0164"+
		"\u0165\u0005\u001d\u0000\u0000\u0165\u0166\u0005$\u0000\u0000\u0166?\u0001"+
		"\u0000\u0000\u0000\u0167\u0168\u0005!\u0000\u0000\u0168\u0169\u0005!\u0000"+
		"\u0000\u0169\u016a\u0005!\u0000\u0000\u016a\u016b\u0005!\u0000\u0000\u016b"+
		"A\u0001\u0000\u0000\u0000\u016c\u016d\u0007\u0004\u0000\u0000\u016d\u016e"+
		"\u0005\u001e\u0000\u0000\u016eC\u0001\u0000\u0000\u0000\u016f\u0170\u0005"+
		" \u0000\u0000\u0170\u0171\u0005 \u0000\u0000\u0171E\u0001\u0000\u0000"+
		"\u0000\u0172\u0173\u0005\"\u0000\u0000\u0173\u0174\u0005\"\u0000\u0000"+
		"\u0174G\u0001\u0000\u0000\u0000\u0175\u0176\u0005\u001f\u0000\u0000\u0176"+
		"\u0177\u0005$\u0000\u0000\u0177\u0178\u0005\u001f\u0000\u0000\u0178I\u0001"+
		"\u0000\u0000\u0000)MVX]_binpy{\u0084\u008b\u0090\u0092\u009c\u00a3\u00a9"+
		"\u00b2\u00bb\u00c4\u00cf\u00d1\u00da\u00e6\u00f2\u00f5\u00f7\u0101\u0108"+
		"\u010d\u0116\u0121\u0126\u0130\u0137\u013f\u0146\u014d\u0154\u0161";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}