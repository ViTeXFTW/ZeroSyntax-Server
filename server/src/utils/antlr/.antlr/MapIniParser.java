// Generated from c:/Users/Mads/Desktop/ZeroSyntax/ZeroSyntax-Server/server/src/utils/antlr/MapIni.g4 by ANTLR 4.13.1
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
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, INT=24, INT256=25, 
		FLOAT=26, BOOL=27, ID=28, SKIp=29, COMMENT=30;
	public static final int
		RULE_program = 0, RULE_object = 1, RULE_moduleBlocks = 2, RULE_addModuleBlock = 3, 
		RULE_replaceModuleBlock = 4, RULE_modules = 5, RULE_objectBlocks = 6, 
		RULE_objectPrerequisites = 7, RULE_objectProperty = 8, RULE_objectWeaponSet = 9, 
		RULE_objectArmorSet = 10, RULE_objectUnitSpecificSounds = 11, RULE_behaviormoduleBlock = 12, 
		RULE_bodyModuleBlock = 13, RULE_drawModuleBlock = 14, RULE_conditionStateBlocks = 15, 
		RULE_conditionStateBlock = 16, RULE_defaultConditionStateBlock = 17, RULE_transitionStateBlock = 18, 
		RULE_aliasConditionStateBlock = 19, RULE_ignoreConditionStateBlock = 20, 
		RULE_removeModuleBlock = 21, RULE_property = 22, RULE_end = 23, RULE_value = 24, 
		RULE_ftype = 25, RULE_rgb = 26, RULE_procent = 27, RULE_intRang = 28, 
		RULE_floatRang = 29, RULE_quoutedID = 30;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "object", "moduleBlocks", "addModuleBlock", "replaceModuleBlock", 
			"modules", "objectBlocks", "objectPrerequisites", "objectProperty", "objectWeaponSet", 
			"objectArmorSet", "objectUnitSpecificSounds", "behaviormoduleBlock", 
			"bodyModuleBlock", "drawModuleBlock", "conditionStateBlocks", "conditionStateBlock", 
			"defaultConditionStateBlock", "transitionStateBlock", "aliasConditionStateBlock", 
			"ignoreConditionStateBlock", "removeModuleBlock", "property", "end", 
			"value", "ftype", "rgb", "procent", "intRang", "floatRang", "quoutedID"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'Object'", "'AddModule'", "'ReplaceModule'", "'Prerequisites'", 
			"'='", "'WeaponSet'", "'ArmorSet'", "'UnitSpecificSounds'", "'Behavior'", 
			"'Body'", "'Draw'", "'ConditionState'", "'DefaultConditionState'", "'TransitionState'", 
			"'AliasConditionState'", "'IgnoreConditionStates'", "'RemoveModule'", 
			"'End'", "'end'", "'END'", "'.'", "'%'", "'\"'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			"INT", "INT256", "FLOAT", "BOOL", "ID", "SKIp", "COMMENT"
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
			setState(65);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__0) {
				{
				{
				setState(62);
				object();
				}
				}
				setState(67);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(68);
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
		public List<ModuleBlocksContext> moduleBlocks() {
			return getRuleContexts(ModuleBlocksContext.class);
		}
		public ModuleBlocksContext moduleBlocks(int i) {
			return getRuleContext(ModuleBlocksContext.class,i);
		}
		public List<PropertyContext> property() {
			return getRuleContexts(PropertyContext.class);
		}
		public PropertyContext property(int i) {
			return getRuleContext(PropertyContext.class,i);
		}
		public List<ModulesContext> modules() {
			return getRuleContexts(ModulesContext.class);
		}
		public ModulesContext modules(int i) {
			return getRuleContext(ModulesContext.class,i);
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
			setState(70);
			match(T__0);
			setState(71);
			match(ID);
			setState(86);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				{
				setState(76);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 268566540L) != 0)) {
					{
					setState(74);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case T__1:
					case T__2:
					case T__16:
						{
						setState(72);
						moduleBlocks();
						}
						break;
					case ID:
						{
						setState(73);
						property();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					setState(78);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case 2:
				{
				setState(83);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 268439504L) != 0)) {
					{
					setState(81);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case T__3:
					case T__5:
					case T__6:
					case T__7:
					case T__8:
					case T__9:
					case T__10:
						{
						setState(79);
						modules();
						}
						break;
					case ID:
						{
						setState(80);
						property();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					setState(85);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			}
			setState(88);
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
			setState(93);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__1:
				enterOuterAlt(_localctx, 1);
				{
				setState(90);
				addModuleBlock();
				}
				break;
			case T__2:
				enterOuterAlt(_localctx, 2);
				{
				setState(91);
				replaceModuleBlock();
				}
				break;
			case T__16:
				enterOuterAlt(_localctx, 3);
				{
				setState(92);
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
			setState(95);
			match(T__1);
			setState(100);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 268439504L) != 0)) {
				{
				setState(98);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__3:
				case T__5:
				case T__6:
				case T__7:
				case T__8:
				case T__9:
				case T__10:
					{
					setState(96);
					modules();
					}
					break;
				case ID:
					{
					setState(97);
					property();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(102);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(103);
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
			setState(105);
			match(T__2);
			setState(106);
			match(ID);
			setState(111);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 268439504L) != 0)) {
				{
				setState(109);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__3:
				case T__5:
				case T__6:
				case T__7:
				case T__8:
				case T__9:
				case T__10:
					{
					setState(107);
					modules();
					}
					break;
				case ID:
					{
					setState(108);
					property();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(113);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(114);
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
			setState(120);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__10:
				enterOuterAlt(_localctx, 1);
				{
				setState(116);
				drawModuleBlock();
				}
				break;
			case T__9:
				enterOuterAlt(_localctx, 2);
				{
				setState(117);
				bodyModuleBlock();
				}
				break;
			case T__8:
				enterOuterAlt(_localctx, 3);
				{
				setState(118);
				behaviormoduleBlock();
				}
				break;
			case T__3:
			case T__5:
			case T__6:
			case T__7:
				enterOuterAlt(_localctx, 4);
				{
				setState(119);
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
		public ObjectBlocksContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectBlocks; }
	}

	public final ObjectBlocksContext objectBlocks() throws RecognitionException {
		ObjectBlocksContext _localctx = new ObjectBlocksContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_objectBlocks);
		try {
			setState(126);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__3:
				enterOuterAlt(_localctx, 1);
				{
				setState(122);
				objectPrerequisites();
				}
				break;
			case T__5:
				enterOuterAlt(_localctx, 2);
				{
				setState(123);
				objectWeaponSet();
				}
				break;
			case T__6:
				enterOuterAlt(_localctx, 3);
				{
				setState(124);
				objectArmorSet();
				}
				break;
			case T__7:
				enterOuterAlt(_localctx, 4);
				{
				setState(125);
				objectUnitSpecificSounds();
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
			setState(128);
			match(T__3);
			setState(130); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(129);
				objectProperty();
				}
				}
				setState(132); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==T__0 );
			setState(134);
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
		public ObjectPropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectProperty; }
	}

	public final ObjectPropertyContext objectProperty() throws RecognitionException {
		ObjectPropertyContext _localctx = new ObjectPropertyContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_objectProperty);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(136);
			match(T__0);
			setState(137);
			match(T__4);
			setState(138);
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
		enterRule(_localctx, 18, RULE_objectWeaponSet);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(140);
			match(T__5);
			setState(144);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(141);
				property();
				}
				}
				setState(146);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(147);
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
		enterRule(_localctx, 20, RULE_objectArmorSet);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(149);
			match(T__6);
			setState(153);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(150);
				property();
				}
				}
				setState(155);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(156);
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
		enterRule(_localctx, 22, RULE_objectUnitSpecificSounds);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(158);
			match(T__7);
			setState(162);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(159);
				property();
				}
				}
				setState(164);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(165);
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
		public BehaviormoduleBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_behaviormoduleBlock; }
	}

	public final BehaviormoduleBlockContext behaviormoduleBlock() throws RecognitionException {
		BehaviormoduleBlockContext _localctx = new BehaviormoduleBlockContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_behaviormoduleBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(167);
			match(T__8);
			setState(168);
			match(T__4);
			setState(169);
			match(ID);
			setState(170);
			match(ID);
			setState(174);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(171);
				property();
				}
				}
				setState(176);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(177);
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
		enterRule(_localctx, 26, RULE_bodyModuleBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(179);
			match(T__9);
			setState(180);
			match(T__4);
			setState(181);
			match(ID);
			setState(182);
			match(ID);
			setState(186);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(183);
				property();
				}
				}
				setState(188);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(189);
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
		enterRule(_localctx, 28, RULE_drawModuleBlock);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(191);
			match(T__10);
			setState(192);
			match(T__4);
			setState(193);
			match(ID);
			setState(194);
			match(ID);
			setState(203);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 268562432L) != 0)) {
				{
				setState(201);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__11:
				case T__12:
				case T__13:
				case T__14:
				case T__15:
					{
					setState(196); 
					_errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							setState(195);
							conditionStateBlocks();
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						setState(198); 
						_errHandler.sync(this);
						_alt = getInterpreter().adaptivePredict(_input,19,_ctx);
					} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
					}
					break;
				case ID:
					{
					setState(200);
					property();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(205);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(206);
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
		enterRule(_localctx, 30, RULE_conditionStateBlocks);
		try {
			setState(213);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__11:
				enterOuterAlt(_localctx, 1);
				{
				setState(208);
				conditionStateBlock();
				}
				break;
			case T__12:
				enterOuterAlt(_localctx, 2);
				{
				setState(209);
				defaultConditionStateBlock();
				}
				break;
			case T__13:
				enterOuterAlt(_localctx, 3);
				{
				setState(210);
				transitionStateBlock();
				}
				break;
			case T__14:
				enterOuterAlt(_localctx, 4);
				{
				setState(211);
				aliasConditionStateBlock();
				}
				break;
			case T__15:
				enterOuterAlt(_localctx, 5);
				{
				setState(212);
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
		enterRule(_localctx, 32, RULE_conditionStateBlock);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(215);
			match(T__11);
			setState(216);
			match(T__4);
			setState(218); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(217);
					match(ID);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(220); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,23,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			setState(225);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(222);
				property();
				}
				}
				setState(227);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(228);
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
		enterRule(_localctx, 34, RULE_defaultConditionStateBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(230);
			match(T__12);
			setState(234);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(231);
				property();
				}
				}
				setState(236);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(237);
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
		enterRule(_localctx, 36, RULE_transitionStateBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(239);
			match(T__13);
			setState(240);
			match(T__4);
			setState(241);
			match(ID);
			setState(242);
			match(ID);
			setState(246);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(243);
				property();
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
		enterRule(_localctx, 38, RULE_aliasConditionStateBlock);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(251);
			match(T__14);
			setState(252);
			match(T__4);
			setState(254); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(253);
					match(ID);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(256); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,27,_ctx);
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
		enterRule(_localctx, 40, RULE_ignoreConditionStateBlock);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(258);
			match(T__15);
			setState(259);
			match(T__4);
			setState(261); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(260);
					match(ID);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(263); 
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
	public static class RemoveModuleBlockContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public RemoveModuleBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_removeModuleBlock; }
	}

	public final RemoveModuleBlockContext removeModuleBlock() throws RecognitionException {
		RemoveModuleBlockContext _localctx = new RemoveModuleBlockContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_removeModuleBlock);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(265);
			match(T__16);
			setState(266);
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
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public List<ValueContext> value() {
			return getRuleContexts(ValueContext.class);
		}
		public ValueContext value(int i) {
			return getRuleContext(ValueContext.class,i);
		}
		public PropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_property; }
	}

	public final PropertyContext property() throws RecognitionException {
		PropertyContext _localctx = new PropertyContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_property);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(268);
			match(ID);
			setState(269);
			match(T__4);
			setState(271); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(270);
					value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(273); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,29,_ctx);
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
		enterRule(_localctx, 46, RULE_end);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(275);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 1835008L) != 0)) ) {
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
	public static class IntContext extends ValueContext {
		public TerminalNode INT() { return getToken(MapIniParser.INT, 0); }
		public IntContext(ValueContext ctx) { copyFrom(ctx); }
	}

	public final ValueContext value() throws RecognitionException {
		ValueContext _localctx = new ValueContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_value);
		try {
			setState(283);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,30,_ctx) ) {
			case 1:
				_localctx = new StringContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(277);
				quoutedID();
				}
				break;
			case 2:
				_localctx = new FiletypeContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(278);
				ftype();
				}
				break;
			case 3:
				_localctx = new IdContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(279);
				match(ID);
				}
				break;
			case 4:
				_localctx = new IntContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(280);
				match(INT);
				}
				break;
			case 5:
				_localctx = new FloatContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(281);
				match(FLOAT);
				}
				break;
			case 6:
				_localctx = new BoolContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(282);
				match(BOOL);
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
		enterRule(_localctx, 50, RULE_ftype);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(285);
			match(ID);
			setState(286);
			match(T__20);
			setState(287);
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
		enterRule(_localctx, 52, RULE_rgb);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(289);
			match(INT256);
			setState(290);
			match(INT256);
			setState(291);
			match(INT256);
			setState(292);
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
		public TerminalNode INT() { return getToken(MapIniParser.INT, 0); }
		public ProcentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_procent; }
	}

	public final ProcentContext procent() throws RecognitionException {
		ProcentContext _localctx = new ProcentContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_procent);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(294);
			match(INT);
			setState(295);
			match(T__21);
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
		enterRule(_localctx, 56, RULE_intRang);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(297);
			match(INT);
			setState(298);
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
		enterRule(_localctx, 58, RULE_floatRang);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(300);
			match(FLOAT);
			setState(301);
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
		enterRule(_localctx, 60, RULE_quoutedID);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(303);
			match(T__22);
			setState(304);
			match(ID);
			setState(305);
			match(T__22);
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
		"\u0004\u0001\u001e\u0134\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007"+
		"\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007"+
		"\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007"+
		"\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002\u0018\u0007"+
		"\u0018\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a\u0002\u001b\u0007"+
		"\u001b\u0002\u001c\u0007\u001c\u0002\u001d\u0007\u001d\u0002\u001e\u0007"+
		"\u001e\u0001\u0000\u0005\u0000@\b\u0000\n\u0000\f\u0000C\t\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0005"+
		"\u0001K\b\u0001\n\u0001\f\u0001N\t\u0001\u0001\u0001\u0001\u0001\u0005"+
		"\u0001R\b\u0001\n\u0001\f\u0001U\t\u0001\u0003\u0001W\b\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u0002^\b\u0002"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0005\u0003c\b\u0003\n\u0003\f\u0003"+
		"f\t\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0005\u0004n\b\u0004\n\u0004\f\u0004q\t\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0003\u0005"+
		"y\b\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0003\u0006"+
		"\u007f\b\u0006\u0001\u0007\u0001\u0007\u0004\u0007\u0083\b\u0007\u000b"+
		"\u0007\f\u0007\u0084\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001"+
		"\b\u0001\t\u0001\t\u0005\t\u008f\b\t\n\t\f\t\u0092\t\t\u0001\t\u0001\t"+
		"\u0001\n\u0001\n\u0005\n\u0098\b\n\n\n\f\n\u009b\t\n\u0001\n\u0001\n\u0001"+
		"\u000b\u0001\u000b\u0005\u000b\u00a1\b\u000b\n\u000b\f\u000b\u00a4\t\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0005"+
		"\f\u00ad\b\f\n\f\f\f\u00b0\t\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r"+
		"\u0001\r\u0001\r\u0005\r\u00b9\b\r\n\r\f\r\u00bc\t\r\u0001\r\u0001\r\u0001"+
		"\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0004\u000e\u00c5"+
		"\b\u000e\u000b\u000e\f\u000e\u00c6\u0001\u000e\u0005\u000e\u00ca\b\u000e"+
		"\n\u000e\f\u000e\u00cd\t\u000e\u0001\u000e\u0001\u000e\u0001\u000f\u0001"+
		"\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0003\u000f\u00d6\b\u000f\u0001"+
		"\u0010\u0001\u0010\u0001\u0010\u0004\u0010\u00db\b\u0010\u000b\u0010\f"+
		"\u0010\u00dc\u0001\u0010\u0005\u0010\u00e0\b\u0010\n\u0010\f\u0010\u00e3"+
		"\t\u0010\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0005\u0011\u00e9"+
		"\b\u0011\n\u0011\f\u0011\u00ec\t\u0011\u0001\u0011\u0001\u0011\u0001\u0012"+
		"\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0005\u0012\u00f5\b\u0012"+
		"\n\u0012\f\u0012\u00f8\t\u0012\u0001\u0012\u0001\u0012\u0001\u0013\u0001"+
		"\u0013\u0001\u0013\u0004\u0013\u00ff\b\u0013\u000b\u0013\f\u0013\u0100"+
		"\u0001\u0014\u0001\u0014\u0001\u0014\u0004\u0014\u0106\b\u0014\u000b\u0014"+
		"\f\u0014\u0107\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0016\u0001\u0016"+
		"\u0001\u0016\u0004\u0016\u0110\b\u0016\u000b\u0016\f\u0016\u0111\u0001"+
		"\u0017\u0001\u0017\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0001"+
		"\u0018\u0001\u0018\u0003\u0018\u011c\b\u0018\u0001\u0019\u0001\u0019\u0001"+
		"\u0019\u0001\u0019\u0001\u001a\u0001\u001a\u0001\u001a\u0001\u001a\u0001"+
		"\u001a\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001c\u0001\u001c\u0001"+
		"\u001c\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001e\u0001\u001e\u0001"+
		"\u001e\u0001\u001e\u0001\u001e\u0000\u0000\u001f\u0000\u0002\u0004\u0006"+
		"\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,."+
		"02468:<\u0000\u0001\u0001\u0000\u0012\u0014\u013f\u0000A\u0001\u0000\u0000"+
		"\u0000\u0002F\u0001\u0000\u0000\u0000\u0004]\u0001\u0000\u0000\u0000\u0006"+
		"_\u0001\u0000\u0000\u0000\bi\u0001\u0000\u0000\u0000\nx\u0001\u0000\u0000"+
		"\u0000\f~\u0001\u0000\u0000\u0000\u000e\u0080\u0001\u0000\u0000\u0000"+
		"\u0010\u0088\u0001\u0000\u0000\u0000\u0012\u008c\u0001\u0000\u0000\u0000"+
		"\u0014\u0095\u0001\u0000\u0000\u0000\u0016\u009e\u0001\u0000\u0000\u0000"+
		"\u0018\u00a7\u0001\u0000\u0000\u0000\u001a\u00b3\u0001\u0000\u0000\u0000"+
		"\u001c\u00bf\u0001\u0000\u0000\u0000\u001e\u00d5\u0001\u0000\u0000\u0000"+
		" \u00d7\u0001\u0000\u0000\u0000\"\u00e6\u0001\u0000\u0000\u0000$\u00ef"+
		"\u0001\u0000\u0000\u0000&\u00fb\u0001\u0000\u0000\u0000(\u0102\u0001\u0000"+
		"\u0000\u0000*\u0109\u0001\u0000\u0000\u0000,\u010c\u0001\u0000\u0000\u0000"+
		".\u0113\u0001\u0000\u0000\u00000\u011b\u0001\u0000\u0000\u00002\u011d"+
		"\u0001\u0000\u0000\u00004\u0121\u0001\u0000\u0000\u00006\u0126\u0001\u0000"+
		"\u0000\u00008\u0129\u0001\u0000\u0000\u0000:\u012c\u0001\u0000\u0000\u0000"+
		"<\u012f\u0001\u0000\u0000\u0000>@\u0003\u0002\u0001\u0000?>\u0001\u0000"+
		"\u0000\u0000@C\u0001\u0000\u0000\u0000A?\u0001\u0000\u0000\u0000AB\u0001"+
		"\u0000\u0000\u0000BD\u0001\u0000\u0000\u0000CA\u0001\u0000\u0000\u0000"+
		"DE\u0005\u0000\u0000\u0001E\u0001\u0001\u0000\u0000\u0000FG\u0005\u0001"+
		"\u0000\u0000GV\u0005\u001c\u0000\u0000HK\u0003\u0004\u0002\u0000IK\u0003"+
		",\u0016\u0000JH\u0001\u0000\u0000\u0000JI\u0001\u0000\u0000\u0000KN\u0001"+
		"\u0000\u0000\u0000LJ\u0001\u0000\u0000\u0000LM\u0001\u0000\u0000\u0000"+
		"MW\u0001\u0000\u0000\u0000NL\u0001\u0000\u0000\u0000OR\u0003\n\u0005\u0000"+
		"PR\u0003,\u0016\u0000QO\u0001\u0000\u0000\u0000QP\u0001\u0000\u0000\u0000"+
		"RU\u0001\u0000\u0000\u0000SQ\u0001\u0000\u0000\u0000ST\u0001\u0000\u0000"+
		"\u0000TW\u0001\u0000\u0000\u0000US\u0001\u0000\u0000\u0000VL\u0001\u0000"+
		"\u0000\u0000VS\u0001\u0000\u0000\u0000WX\u0001\u0000\u0000\u0000XY\u0003"+
		".\u0017\u0000Y\u0003\u0001\u0000\u0000\u0000Z^\u0003\u0006\u0003\u0000"+
		"[^\u0003\b\u0004\u0000\\^\u0003*\u0015\u0000]Z\u0001\u0000\u0000\u0000"+
		"][\u0001\u0000\u0000\u0000]\\\u0001\u0000\u0000\u0000^\u0005\u0001\u0000"+
		"\u0000\u0000_d\u0005\u0002\u0000\u0000`c\u0003\n\u0005\u0000ac\u0003,"+
		"\u0016\u0000b`\u0001\u0000\u0000\u0000ba\u0001\u0000\u0000\u0000cf\u0001"+
		"\u0000\u0000\u0000db\u0001\u0000\u0000\u0000de\u0001\u0000\u0000\u0000"+
		"eg\u0001\u0000\u0000\u0000fd\u0001\u0000\u0000\u0000gh\u0003.\u0017\u0000"+
		"h\u0007\u0001\u0000\u0000\u0000ij\u0005\u0003\u0000\u0000jo\u0005\u001c"+
		"\u0000\u0000kn\u0003\n\u0005\u0000ln\u0003,\u0016\u0000mk\u0001\u0000"+
		"\u0000\u0000ml\u0001\u0000\u0000\u0000nq\u0001\u0000\u0000\u0000om\u0001"+
		"\u0000\u0000\u0000op\u0001\u0000\u0000\u0000pr\u0001\u0000\u0000\u0000"+
		"qo\u0001\u0000\u0000\u0000rs\u0003.\u0017\u0000s\t\u0001\u0000\u0000\u0000"+
		"ty\u0003\u001c\u000e\u0000uy\u0003\u001a\r\u0000vy\u0003\u0018\f\u0000"+
		"wy\u0003\f\u0006\u0000xt\u0001\u0000\u0000\u0000xu\u0001\u0000\u0000\u0000"+
		"xv\u0001\u0000\u0000\u0000xw\u0001\u0000\u0000\u0000y\u000b\u0001\u0000"+
		"\u0000\u0000z\u007f\u0003\u000e\u0007\u0000{\u007f\u0003\u0012\t\u0000"+
		"|\u007f\u0003\u0014\n\u0000}\u007f\u0003\u0016\u000b\u0000~z\u0001\u0000"+
		"\u0000\u0000~{\u0001\u0000\u0000\u0000~|\u0001\u0000\u0000\u0000~}\u0001"+
		"\u0000\u0000\u0000\u007f\r\u0001\u0000\u0000\u0000\u0080\u0082\u0005\u0004"+
		"\u0000\u0000\u0081\u0083\u0003\u0010\b\u0000\u0082\u0081\u0001\u0000\u0000"+
		"\u0000\u0083\u0084\u0001\u0000\u0000\u0000\u0084\u0082\u0001\u0000\u0000"+
		"\u0000\u0084\u0085\u0001\u0000\u0000\u0000\u0085\u0086\u0001\u0000\u0000"+
		"\u0000\u0086\u0087\u0003.\u0017\u0000\u0087\u000f\u0001\u0000\u0000\u0000"+
		"\u0088\u0089\u0005\u0001\u0000\u0000\u0089\u008a\u0005\u0005\u0000\u0000"+
		"\u008a\u008b\u0005\u001c\u0000\u0000\u008b\u0011\u0001\u0000\u0000\u0000"+
		"\u008c\u0090\u0005\u0006\u0000\u0000\u008d\u008f\u0003,\u0016\u0000\u008e"+
		"\u008d\u0001\u0000\u0000\u0000\u008f\u0092\u0001\u0000\u0000\u0000\u0090"+
		"\u008e\u0001\u0000\u0000\u0000\u0090\u0091\u0001\u0000\u0000\u0000\u0091"+
		"\u0093\u0001\u0000\u0000\u0000\u0092\u0090\u0001\u0000\u0000\u0000\u0093"+
		"\u0094\u0003.\u0017\u0000\u0094\u0013\u0001\u0000\u0000\u0000\u0095\u0099"+
		"\u0005\u0007\u0000\u0000\u0096\u0098\u0003,\u0016\u0000\u0097\u0096\u0001"+
		"\u0000\u0000\u0000\u0098\u009b\u0001\u0000\u0000\u0000\u0099\u0097\u0001"+
		"\u0000\u0000\u0000\u0099\u009a\u0001\u0000\u0000\u0000\u009a\u009c\u0001"+
		"\u0000\u0000\u0000\u009b\u0099\u0001\u0000\u0000\u0000\u009c\u009d\u0003"+
		".\u0017\u0000\u009d\u0015\u0001\u0000\u0000\u0000\u009e\u00a2\u0005\b"+
		"\u0000\u0000\u009f\u00a1\u0003,\u0016\u0000\u00a0\u009f\u0001\u0000\u0000"+
		"\u0000\u00a1\u00a4\u0001\u0000\u0000\u0000\u00a2\u00a0\u0001\u0000\u0000"+
		"\u0000\u00a2\u00a3\u0001\u0000\u0000\u0000\u00a3\u00a5\u0001\u0000\u0000"+
		"\u0000\u00a4\u00a2\u0001\u0000\u0000\u0000\u00a5\u00a6\u0003.\u0017\u0000"+
		"\u00a6\u0017\u0001\u0000\u0000\u0000\u00a7\u00a8\u0005\t\u0000\u0000\u00a8"+
		"\u00a9\u0005\u0005\u0000\u0000\u00a9\u00aa\u0005\u001c\u0000\u0000\u00aa"+
		"\u00ae\u0005\u001c\u0000\u0000\u00ab\u00ad\u0003,\u0016\u0000\u00ac\u00ab"+
		"\u0001\u0000\u0000\u0000\u00ad\u00b0\u0001\u0000\u0000\u0000\u00ae\u00ac"+
		"\u0001\u0000\u0000\u0000\u00ae\u00af\u0001\u0000\u0000\u0000\u00af\u00b1"+
		"\u0001\u0000\u0000\u0000\u00b0\u00ae\u0001\u0000\u0000\u0000\u00b1\u00b2"+
		"\u0003.\u0017\u0000\u00b2\u0019\u0001\u0000\u0000\u0000\u00b3\u00b4\u0005"+
		"\n\u0000\u0000\u00b4\u00b5\u0005\u0005\u0000\u0000\u00b5\u00b6\u0005\u001c"+
		"\u0000\u0000\u00b6\u00ba\u0005\u001c\u0000\u0000\u00b7\u00b9\u0003,\u0016"+
		"\u0000\u00b8\u00b7\u0001\u0000\u0000\u0000\u00b9\u00bc\u0001\u0000\u0000"+
		"\u0000\u00ba\u00b8\u0001\u0000\u0000\u0000\u00ba\u00bb\u0001\u0000\u0000"+
		"\u0000\u00bb\u00bd\u0001\u0000\u0000\u0000\u00bc\u00ba\u0001\u0000\u0000"+
		"\u0000\u00bd\u00be\u0003.\u0017\u0000\u00be\u001b\u0001\u0000\u0000\u0000"+
		"\u00bf\u00c0\u0005\u000b\u0000\u0000\u00c0\u00c1\u0005\u0005\u0000\u0000"+
		"\u00c1\u00c2\u0005\u001c\u0000\u0000\u00c2\u00cb\u0005\u001c\u0000\u0000"+
		"\u00c3\u00c5\u0003\u001e\u000f\u0000\u00c4\u00c3\u0001\u0000\u0000\u0000"+
		"\u00c5\u00c6\u0001\u0000\u0000\u0000\u00c6\u00c4\u0001\u0000\u0000\u0000"+
		"\u00c6\u00c7\u0001\u0000\u0000\u0000\u00c7\u00ca\u0001\u0000\u0000\u0000"+
		"\u00c8\u00ca\u0003,\u0016\u0000\u00c9\u00c4\u0001\u0000\u0000\u0000\u00c9"+
		"\u00c8\u0001\u0000\u0000\u0000\u00ca\u00cd\u0001\u0000\u0000\u0000\u00cb"+
		"\u00c9\u0001\u0000\u0000\u0000\u00cb\u00cc\u0001\u0000\u0000\u0000\u00cc"+
		"\u00ce\u0001\u0000\u0000\u0000\u00cd\u00cb\u0001\u0000\u0000\u0000\u00ce"+
		"\u00cf\u0003.\u0017\u0000\u00cf\u001d\u0001\u0000\u0000\u0000\u00d0\u00d6"+
		"\u0003 \u0010\u0000\u00d1\u00d6\u0003\"\u0011\u0000\u00d2\u00d6\u0003"+
		"$\u0012\u0000\u00d3\u00d6\u0003&\u0013\u0000\u00d4\u00d6\u0003(\u0014"+
		"\u0000\u00d5\u00d0\u0001\u0000\u0000\u0000\u00d5\u00d1\u0001\u0000\u0000"+
		"\u0000\u00d5\u00d2\u0001\u0000\u0000\u0000\u00d5\u00d3\u0001\u0000\u0000"+
		"\u0000\u00d5\u00d4\u0001\u0000\u0000\u0000\u00d6\u001f\u0001\u0000\u0000"+
		"\u0000\u00d7\u00d8\u0005\f\u0000\u0000\u00d8\u00da\u0005\u0005\u0000\u0000"+
		"\u00d9\u00db\u0005\u001c\u0000\u0000\u00da\u00d9\u0001\u0000\u0000\u0000"+
		"\u00db\u00dc\u0001\u0000\u0000\u0000\u00dc\u00da\u0001\u0000\u0000\u0000"+
		"\u00dc\u00dd\u0001\u0000\u0000\u0000\u00dd\u00e1\u0001\u0000\u0000\u0000"+
		"\u00de\u00e0\u0003,\u0016\u0000\u00df\u00de\u0001\u0000\u0000\u0000\u00e0"+
		"\u00e3\u0001\u0000\u0000\u0000\u00e1\u00df\u0001\u0000\u0000\u0000\u00e1"+
		"\u00e2\u0001\u0000\u0000\u0000\u00e2\u00e4\u0001\u0000\u0000\u0000\u00e3"+
		"\u00e1\u0001\u0000\u0000\u0000\u00e4\u00e5\u0003.\u0017\u0000\u00e5!\u0001"+
		"\u0000\u0000\u0000\u00e6\u00ea\u0005\r\u0000\u0000\u00e7\u00e9\u0003,"+
		"\u0016\u0000\u00e8\u00e7\u0001\u0000\u0000\u0000\u00e9\u00ec\u0001\u0000"+
		"\u0000\u0000\u00ea\u00e8\u0001\u0000\u0000\u0000\u00ea\u00eb\u0001\u0000"+
		"\u0000\u0000\u00eb\u00ed\u0001\u0000\u0000\u0000\u00ec\u00ea\u0001\u0000"+
		"\u0000\u0000\u00ed\u00ee\u0003.\u0017\u0000\u00ee#\u0001\u0000\u0000\u0000"+
		"\u00ef\u00f0\u0005\u000e\u0000\u0000\u00f0\u00f1\u0005\u0005\u0000\u0000"+
		"\u00f1\u00f2\u0005\u001c\u0000\u0000\u00f2\u00f6\u0005\u001c\u0000\u0000"+
		"\u00f3\u00f5\u0003,\u0016\u0000\u00f4\u00f3\u0001\u0000\u0000\u0000\u00f5"+
		"\u00f8\u0001\u0000\u0000\u0000\u00f6\u00f4\u0001\u0000\u0000\u0000\u00f6"+
		"\u00f7\u0001\u0000\u0000\u0000\u00f7\u00f9\u0001\u0000\u0000\u0000\u00f8"+
		"\u00f6\u0001\u0000\u0000\u0000\u00f9\u00fa\u0003.\u0017\u0000\u00fa%\u0001"+
		"\u0000\u0000\u0000\u00fb\u00fc\u0005\u000f\u0000\u0000\u00fc\u00fe\u0005"+
		"\u0005\u0000\u0000\u00fd\u00ff\u0005\u001c\u0000\u0000\u00fe\u00fd\u0001"+
		"\u0000\u0000\u0000\u00ff\u0100\u0001\u0000\u0000\u0000\u0100\u00fe\u0001"+
		"\u0000\u0000\u0000\u0100\u0101\u0001\u0000\u0000\u0000\u0101\'\u0001\u0000"+
		"\u0000\u0000\u0102\u0103\u0005\u0010\u0000\u0000\u0103\u0105\u0005\u0005"+
		"\u0000\u0000\u0104\u0106\u0005\u001c\u0000\u0000\u0105\u0104\u0001\u0000"+
		"\u0000\u0000\u0106\u0107\u0001\u0000\u0000\u0000\u0107\u0105\u0001\u0000"+
		"\u0000\u0000\u0107\u0108\u0001\u0000\u0000\u0000\u0108)\u0001\u0000\u0000"+
		"\u0000\u0109\u010a\u0005\u0011\u0000\u0000\u010a\u010b\u0005\u001c\u0000"+
		"\u0000\u010b+\u0001\u0000\u0000\u0000\u010c\u010d\u0005\u001c\u0000\u0000"+
		"\u010d\u010f\u0005\u0005\u0000\u0000\u010e\u0110\u00030\u0018\u0000\u010f"+
		"\u010e\u0001\u0000\u0000\u0000\u0110\u0111\u0001\u0000\u0000\u0000\u0111"+
		"\u010f\u0001\u0000\u0000\u0000\u0111\u0112\u0001\u0000\u0000\u0000\u0112"+
		"-\u0001\u0000\u0000\u0000\u0113\u0114\u0007\u0000\u0000\u0000\u0114/\u0001"+
		"\u0000\u0000\u0000\u0115\u011c\u0003<\u001e\u0000\u0116\u011c\u00032\u0019"+
		"\u0000\u0117\u011c\u0005\u001c\u0000\u0000\u0118\u011c\u0005\u0018\u0000"+
		"\u0000\u0119\u011c\u0005\u001a\u0000\u0000\u011a\u011c\u0005\u001b\u0000"+
		"\u0000\u011b\u0115\u0001\u0000\u0000\u0000\u011b\u0116\u0001\u0000\u0000"+
		"\u0000\u011b\u0117\u0001\u0000\u0000\u0000\u011b\u0118\u0001\u0000\u0000"+
		"\u0000\u011b\u0119\u0001\u0000\u0000\u0000\u011b\u011a\u0001\u0000\u0000"+
		"\u0000\u011c1\u0001\u0000\u0000\u0000\u011d\u011e\u0005\u001c\u0000\u0000"+
		"\u011e\u011f\u0005\u0015\u0000\u0000\u011f\u0120\u0005\u001c\u0000\u0000"+
		"\u01203\u0001\u0000\u0000\u0000\u0121\u0122\u0005\u0019\u0000\u0000\u0122"+
		"\u0123\u0005\u0019\u0000\u0000\u0123\u0124\u0005\u0019\u0000\u0000\u0124"+
		"\u0125\u0005\u0019\u0000\u0000\u01255\u0001\u0000\u0000\u0000\u0126\u0127"+
		"\u0005\u0018\u0000\u0000\u0127\u0128\u0005\u0016\u0000\u0000\u01287\u0001"+
		"\u0000\u0000\u0000\u0129\u012a\u0005\u0018\u0000\u0000\u012a\u012b\u0005"+
		"\u0018\u0000\u0000\u012b9\u0001\u0000\u0000\u0000\u012c\u012d\u0005\u001a"+
		"\u0000\u0000\u012d\u012e\u0005\u001a\u0000\u0000\u012e;\u0001\u0000\u0000"+
		"\u0000\u012f\u0130\u0005\u0017\u0000\u0000\u0130\u0131\u0005\u001c\u0000"+
		"\u0000\u0131\u0132\u0005\u0017\u0000\u0000\u0132=\u0001\u0000\u0000\u0000"+
		"\u001fAJLQSV]bdmox~\u0084\u0090\u0099\u00a2\u00ae\u00ba\u00c6\u00c9\u00cb"+
		"\u00d5\u00dc\u00e1\u00ea\u00f6\u0100\u0107\u0111\u011b";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}