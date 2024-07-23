// Generated from c:/Users/Mads/Desktop/ZeroSyntax/ZeroSyntax-Server/server/src/antlr/MapIni.g4 by ANTLR 4.13.1
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
		T__17=18, T__18=19, INT=20, INT256=21, FLOAT=22, BOOL=23, ID=24, SKIp=25, 
		COMMENT=26;
	public static final int
		RULE_program = 0, RULE_object = 1, RULE_moduleBlocks = 2, RULE_addModuleBlock = 3, 
		RULE_replaceModuleBlock = 4, RULE_modules = 5, RULE_behaviormoduleBlock = 6, 
		RULE_bodyModuleBlock = 7, RULE_drawModuleBlock = 8, RULE_conditionStateBlocks = 9, 
		RULE_removeModuleBlock = 10, RULE_property = 11, RULE_end = 12, RULE_value = 13, 
		RULE_ftype = 14, RULE_rgb = 15, RULE_procent = 16, RULE_intRang = 17, 
		RULE_floatRang = 18, RULE_quoutedID = 19;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "object", "moduleBlocks", "addModuleBlock", "replaceModuleBlock", 
			"modules", "behaviormoduleBlock", "bodyModuleBlock", "drawModuleBlock", 
			"conditionStateBlocks", "removeModuleBlock", "property", "end", "value", 
			"ftype", "rgb", "procent", "intRang", "floatRang", "quoutedID"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'Object'", "'AddModule'", "'ReplaceModule'", "'Behavior'", "'='", 
			"'Body'", "'Draw'", "'ConditionState'", "'DefaultConditionState'", "'TransitionState'", 
			"'AliasConditionState'", "'IgnoreConditionStates'", "'RemoveModule'", 
			"'End'", "'end'", "'END'", "'.'", "'%'", "'\"'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
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
			setState(43);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__0) {
				{
				{
				setState(40);
				object();
				}
				}
				setState(45);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(46);
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
			setState(48);
			match(T__0);
			setState(49);
			match(ID);
			setState(54);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 16785420L) != 0)) {
				{
				setState(52);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__1:
				case T__2:
				case T__12:
					{
					setState(50);
					moduleBlocks();
					}
					break;
				case ID:
					{
					setState(51);
					property();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(56);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(57);
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
		public ModuleBlocksContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_moduleBlocks; }
	 
		public ModuleBlocksContext() { }
		public void copyFrom(ModuleBlocksContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ReplaceModuleContext extends ModuleBlocksContext {
		public ReplaceModuleBlockContext replaceModuleBlock() {
			return getRuleContext(ReplaceModuleBlockContext.class,0);
		}
		public ReplaceModuleContext(ModuleBlocksContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class RemoveModuleContext extends ModuleBlocksContext {
		public RemoveModuleBlockContext removeModuleBlock() {
			return getRuleContext(RemoveModuleBlockContext.class,0);
		}
		public RemoveModuleContext(ModuleBlocksContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class AddModuleContext extends ModuleBlocksContext {
		public AddModuleBlockContext addModuleBlock() {
			return getRuleContext(AddModuleBlockContext.class,0);
		}
		public AddModuleContext(ModuleBlocksContext ctx) { copyFrom(ctx); }
	}

	public final ModuleBlocksContext moduleBlocks() throws RecognitionException {
		ModuleBlocksContext _localctx = new ModuleBlocksContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_moduleBlocks);
		try {
			setState(62);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__1:
				_localctx = new AddModuleContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(59);
				addModuleBlock();
				}
				break;
			case T__2:
				_localctx = new ReplaceModuleContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(60);
				replaceModuleBlock();
				}
				break;
			case T__12:
				_localctx = new RemoveModuleContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(61);
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
			setState(64);
			match(T__1);
			setState(69);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 16777424L) != 0)) {
				{
				setState(67);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__3:
				case T__5:
				case T__6:
					{
					setState(65);
					modules();
					}
					break;
				case ID:
					{
					setState(66);
					property();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(71);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(72);
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
			setState(74);
			match(T__2);
			setState(75);
			match(ID);
			setState(80);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 16777424L) != 0)) {
				{
				setState(78);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__3:
				case T__5:
				case T__6:
					{
					setState(76);
					modules();
					}
					break;
				case ID:
					{
					setState(77);
					property();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(82);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(83);
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
		public ModulesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_modules; }
	 
		public ModulesContext() { }
		public void copyFrom(ModulesContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DrawModuleContext extends ModulesContext {
		public DrawModuleBlockContext drawModuleBlock() {
			return getRuleContext(DrawModuleBlockContext.class,0);
		}
		public DrawModuleContext(ModulesContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class BehaviorModuleContext extends ModulesContext {
		public BehaviormoduleBlockContext behaviormoduleBlock() {
			return getRuleContext(BehaviormoduleBlockContext.class,0);
		}
		public BehaviorModuleContext(ModulesContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class BodyModuleContext extends ModulesContext {
		public BodyModuleBlockContext bodyModuleBlock() {
			return getRuleContext(BodyModuleBlockContext.class,0);
		}
		public BodyModuleContext(ModulesContext ctx) { copyFrom(ctx); }
	}

	public final ModulesContext modules() throws RecognitionException {
		ModulesContext _localctx = new ModulesContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_modules);
		try {
			setState(88);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__6:
				_localctx = new DrawModuleContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(85);
				drawModuleBlock();
				}
				break;
			case T__5:
				_localctx = new BodyModuleContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(86);
				bodyModuleBlock();
				}
				break;
			case T__3:
				_localctx = new BehaviorModuleContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(87);
				behaviormoduleBlock();
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
		enterRule(_localctx, 12, RULE_behaviormoduleBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(90);
			match(T__3);
			setState(91);
			match(T__4);
			setState(92);
			match(ID);
			setState(93);
			match(ID);
			setState(97);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(94);
				property();
				}
				}
				setState(99);
				_errHandler.sync(this);
				_la = _input.LA(1);
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
		enterRule(_localctx, 14, RULE_bodyModuleBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(102);
			match(T__5);
			setState(103);
			match(T__4);
			setState(104);
			match(ID);
			setState(105);
			match(ID);
			setState(109);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(106);
				property();
				}
				}
				setState(111);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(112);
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
		enterRule(_localctx, 16, RULE_drawModuleBlock);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(114);
			match(T__6);
			setState(115);
			match(T__4);
			setState(116);
			match(ID);
			setState(117);
			match(ID);
			setState(126);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 16785152L) != 0)) {
				{
				setState(124);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__7:
				case T__8:
				case T__9:
				case T__10:
				case T__11:
					{
					setState(119); 
					_errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							setState(118);
							conditionStateBlocks();
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						setState(121); 
						_errHandler.sync(this);
						_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
					} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
					}
					break;
				case ID:
					{
					setState(123);
					property();
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
			setState(129);
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
		public ConditionStateBlocksContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conditionStateBlocks; }
	 
		public ConditionStateBlocksContext() { }
		public void copyFrom(ConditionStateBlocksContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ConditionStateContext extends ConditionStateBlocksContext {
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
		public ConditionStateContext(ConditionStateBlocksContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class AliasConditionStateContext extends ConditionStateBlocksContext {
		public List<TerminalNode> ID() { return getTokens(MapIniParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(MapIniParser.ID, i);
		}
		public AliasConditionStateContext(ConditionStateBlocksContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DefaultConditionStateContext extends ConditionStateBlocksContext {
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<PropertyContext> property() {
			return getRuleContexts(PropertyContext.class);
		}
		public PropertyContext property(int i) {
			return getRuleContext(PropertyContext.class,i);
		}
		public DefaultConditionStateContext(ConditionStateBlocksContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class TransitionStateContext extends ConditionStateBlocksContext {
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
		public TransitionStateContext(ConditionStateBlocksContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IgnoreConditionStatesContext extends ConditionStateBlocksContext {
		public List<TerminalNode> ID() { return getTokens(MapIniParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(MapIniParser.ID, i);
		}
		public IgnoreConditionStatesContext(ConditionStateBlocksContext ctx) { copyFrom(ctx); }
	}

	public final ConditionStateBlocksContext conditionStateBlocks() throws RecognitionException {
		ConditionStateBlocksContext _localctx = new ConditionStateBlocksContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_conditionStateBlocks);
		int _la;
		try {
			int _alt;
			setState(178);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__7:
				_localctx = new ConditionStateContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(131);
				match(T__7);
				setState(132);
				match(T__4);
				setState(134); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(133);
						match(ID);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(136); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				setState(141);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==ID) {
					{
					{
					setState(138);
					property();
					}
					}
					setState(143);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(144);
				end();
				}
				break;
			case T__8:
				_localctx = new DefaultConditionStateContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(145);
				match(T__8);
				setState(149);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==ID) {
					{
					{
					setState(146);
					property();
					}
					}
					setState(151);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(152);
				end();
				}
				break;
			case T__9:
				_localctx = new TransitionStateContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(153);
				match(T__9);
				setState(154);
				match(T__4);
				setState(155);
				match(ID);
				setState(156);
				match(ID);
				setState(160);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==ID) {
					{
					{
					setState(157);
					property();
					}
					}
					setState(162);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(163);
				end();
				}
				break;
			case T__10:
				_localctx = new AliasConditionStateContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(164);
				match(T__10);
				setState(165);
				match(T__4);
				setState(167); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(166);
						match(ID);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(169); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				}
				break;
			case T__11:
				_localctx = new IgnoreConditionStatesContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(171);
				match(T__11);
				setState(172);
				match(T__4);
				setState(174); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(173);
						match(ID);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(176); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,19,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
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
	public static class RemoveModuleBlockContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public RemoveModuleBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_removeModuleBlock; }
	}

	public final RemoveModuleBlockContext removeModuleBlock() throws RecognitionException {
		RemoveModuleBlockContext _localctx = new RemoveModuleBlockContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_removeModuleBlock);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(180);
			match(T__12);
			setState(181);
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
		enterRule(_localctx, 22, RULE_property);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(183);
			match(ID);
			setState(184);
			match(T__4);
			setState(186); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(185);
					value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(188); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,21,_ctx);
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
		enterRule(_localctx, 24, RULE_end);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(190);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 114688L) != 0)) ) {
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
		enterRule(_localctx, 26, RULE_value);
		try {
			setState(198);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,22,_ctx) ) {
			case 1:
				_localctx = new StringContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(192);
				quoutedID();
				}
				break;
			case 2:
				_localctx = new FiletypeContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(193);
				ftype();
				}
				break;
			case 3:
				_localctx = new IdContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(194);
				match(ID);
				}
				break;
			case 4:
				_localctx = new IntContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(195);
				match(INT);
				}
				break;
			case 5:
				_localctx = new FloatContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(196);
				match(FLOAT);
				}
				break;
			case 6:
				_localctx = new BoolContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(197);
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
		enterRule(_localctx, 28, RULE_ftype);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(200);
			match(ID);
			setState(201);
			match(T__16);
			setState(202);
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
		enterRule(_localctx, 30, RULE_rgb);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(204);
			match(INT256);
			setState(205);
			match(INT256);
			setState(206);
			match(INT256);
			setState(207);
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
		enterRule(_localctx, 32, RULE_procent);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(209);
			match(INT);
			setState(210);
			match(T__17);
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
		enterRule(_localctx, 34, RULE_intRang);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(212);
			match(INT);
			setState(213);
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
		enterRule(_localctx, 36, RULE_floatRang);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(215);
			match(FLOAT);
			setState(216);
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
		enterRule(_localctx, 38, RULE_quoutedID);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(218);
			match(T__18);
			setState(219);
			match(ID);
			setState(220);
			match(T__18);
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
		"\u0004\u0001\u001a\u00df\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007"+
		"\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007"+
		"\u0012\u0002\u0013\u0007\u0013\u0001\u0000\u0005\u0000*\b\u0000\n\u0000"+
		"\f\u0000-\t\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0005\u00015\b\u0001\n\u0001\f\u00018\t\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u0002?\b"+
		"\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0005\u0003D\b\u0003\n\u0003"+
		"\f\u0003G\t\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0005\u0004O\b\u0004\n\u0004\f\u0004R\t\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0003\u0005Y\b"+
		"\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0005"+
		"\u0006`\b\u0006\n\u0006\f\u0006c\t\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0005\u0007l\b"+
		"\u0007\n\u0007\f\u0007o\t\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0004\bx\b\b\u000b\b\f\by\u0001\b\u0005\b}"+
		"\b\b\n\b\f\b\u0080\t\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0004\t"+
		"\u0087\b\t\u000b\t\f\t\u0088\u0001\t\u0005\t\u008c\b\t\n\t\f\t\u008f\t"+
		"\t\u0001\t\u0001\t\u0001\t\u0005\t\u0094\b\t\n\t\f\t\u0097\t\t\u0001\t"+
		"\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0005\t\u009f\b\t\n\t\f\t\u00a2"+
		"\t\t\u0001\t\u0001\t\u0001\t\u0001\t\u0004\t\u00a8\b\t\u000b\t\f\t\u00a9"+
		"\u0001\t\u0001\t\u0001\t\u0004\t\u00af\b\t\u000b\t\f\t\u00b0\u0003\t\u00b3"+
		"\b\t\u0001\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0004"+
		"\u000b\u00bb\b\u000b\u000b\u000b\f\u000b\u00bc\u0001\f\u0001\f\u0001\r"+
		"\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0003\r\u00c7\b\r\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u000f"+
		"\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0011"+
		"\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0013"+
		"\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0000\u0000\u0014\u0000"+
		"\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c"+
		"\u001e \"$&\u0000\u0001\u0001\u0000\u000e\u0010\u00ea\u0000+\u0001\u0000"+
		"\u0000\u0000\u00020\u0001\u0000\u0000\u0000\u0004>\u0001\u0000\u0000\u0000"+
		"\u0006@\u0001\u0000\u0000\u0000\bJ\u0001\u0000\u0000\u0000\nX\u0001\u0000"+
		"\u0000\u0000\fZ\u0001\u0000\u0000\u0000\u000ef\u0001\u0000\u0000\u0000"+
		"\u0010r\u0001\u0000\u0000\u0000\u0012\u00b2\u0001\u0000\u0000\u0000\u0014"+
		"\u00b4\u0001\u0000\u0000\u0000\u0016\u00b7\u0001\u0000\u0000\u0000\u0018"+
		"\u00be\u0001\u0000\u0000\u0000\u001a\u00c6\u0001\u0000\u0000\u0000\u001c"+
		"\u00c8\u0001\u0000\u0000\u0000\u001e\u00cc\u0001\u0000\u0000\u0000 \u00d1"+
		"\u0001\u0000\u0000\u0000\"\u00d4\u0001\u0000\u0000\u0000$\u00d7\u0001"+
		"\u0000\u0000\u0000&\u00da\u0001\u0000\u0000\u0000(*\u0003\u0002\u0001"+
		"\u0000)(\u0001\u0000\u0000\u0000*-\u0001\u0000\u0000\u0000+)\u0001\u0000"+
		"\u0000\u0000+,\u0001\u0000\u0000\u0000,.\u0001\u0000\u0000\u0000-+\u0001"+
		"\u0000\u0000\u0000./\u0005\u0000\u0000\u0001/\u0001\u0001\u0000\u0000"+
		"\u000001\u0005\u0001\u0000\u000016\u0005\u0018\u0000\u000025\u0003\u0004"+
		"\u0002\u000035\u0003\u0016\u000b\u000042\u0001\u0000\u0000\u000043\u0001"+
		"\u0000\u0000\u000058\u0001\u0000\u0000\u000064\u0001\u0000\u0000\u0000"+
		"67\u0001\u0000\u0000\u000079\u0001\u0000\u0000\u000086\u0001\u0000\u0000"+
		"\u00009:\u0003\u0018\f\u0000:\u0003\u0001\u0000\u0000\u0000;?\u0003\u0006"+
		"\u0003\u0000<?\u0003\b\u0004\u0000=?\u0003\u0014\n\u0000>;\u0001\u0000"+
		"\u0000\u0000><\u0001\u0000\u0000\u0000>=\u0001\u0000\u0000\u0000?\u0005"+
		"\u0001\u0000\u0000\u0000@E\u0005\u0002\u0000\u0000AD\u0003\n\u0005\u0000"+
		"BD\u0003\u0016\u000b\u0000CA\u0001\u0000\u0000\u0000CB\u0001\u0000\u0000"+
		"\u0000DG\u0001\u0000\u0000\u0000EC\u0001\u0000\u0000\u0000EF\u0001\u0000"+
		"\u0000\u0000FH\u0001\u0000\u0000\u0000GE\u0001\u0000\u0000\u0000HI\u0003"+
		"\u0018\f\u0000I\u0007\u0001\u0000\u0000\u0000JK\u0005\u0003\u0000\u0000"+
		"KP\u0005\u0018\u0000\u0000LO\u0003\n\u0005\u0000MO\u0003\u0016\u000b\u0000"+
		"NL\u0001\u0000\u0000\u0000NM\u0001\u0000\u0000\u0000OR\u0001\u0000\u0000"+
		"\u0000PN\u0001\u0000\u0000\u0000PQ\u0001\u0000\u0000\u0000QS\u0001\u0000"+
		"\u0000\u0000RP\u0001\u0000\u0000\u0000ST\u0003\u0018\f\u0000T\t\u0001"+
		"\u0000\u0000\u0000UY\u0003\u0010\b\u0000VY\u0003\u000e\u0007\u0000WY\u0003"+
		"\f\u0006\u0000XU\u0001\u0000\u0000\u0000XV\u0001\u0000\u0000\u0000XW\u0001"+
		"\u0000\u0000\u0000Y\u000b\u0001\u0000\u0000\u0000Z[\u0005\u0004\u0000"+
		"\u0000[\\\u0005\u0005\u0000\u0000\\]\u0005\u0018\u0000\u0000]a\u0005\u0018"+
		"\u0000\u0000^`\u0003\u0016\u000b\u0000_^\u0001\u0000\u0000\u0000`c\u0001"+
		"\u0000\u0000\u0000a_\u0001\u0000\u0000\u0000ab\u0001\u0000\u0000\u0000"+
		"bd\u0001\u0000\u0000\u0000ca\u0001\u0000\u0000\u0000de\u0003\u0018\f\u0000"+
		"e\r\u0001\u0000\u0000\u0000fg\u0005\u0006\u0000\u0000gh\u0005\u0005\u0000"+
		"\u0000hi\u0005\u0018\u0000\u0000im\u0005\u0018\u0000\u0000jl\u0003\u0016"+
		"\u000b\u0000kj\u0001\u0000\u0000\u0000lo\u0001\u0000\u0000\u0000mk\u0001"+
		"\u0000\u0000\u0000mn\u0001\u0000\u0000\u0000np\u0001\u0000\u0000\u0000"+
		"om\u0001\u0000\u0000\u0000pq\u0003\u0018\f\u0000q\u000f\u0001\u0000\u0000"+
		"\u0000rs\u0005\u0007\u0000\u0000st\u0005\u0005\u0000\u0000tu\u0005\u0018"+
		"\u0000\u0000u~\u0005\u0018\u0000\u0000vx\u0003\u0012\t\u0000wv\u0001\u0000"+
		"\u0000\u0000xy\u0001\u0000\u0000\u0000yw\u0001\u0000\u0000\u0000yz\u0001"+
		"\u0000\u0000\u0000z}\u0001\u0000\u0000\u0000{}\u0003\u0016\u000b\u0000"+
		"|w\u0001\u0000\u0000\u0000|{\u0001\u0000\u0000\u0000}\u0080\u0001\u0000"+
		"\u0000\u0000~|\u0001\u0000\u0000\u0000~\u007f\u0001\u0000\u0000\u0000"+
		"\u007f\u0081\u0001\u0000\u0000\u0000\u0080~\u0001\u0000\u0000\u0000\u0081"+
		"\u0082\u0003\u0018\f\u0000\u0082\u0011\u0001\u0000\u0000\u0000\u0083\u0084"+
		"\u0005\b\u0000\u0000\u0084\u0086\u0005\u0005\u0000\u0000\u0085\u0087\u0005"+
		"\u0018\u0000\u0000\u0086\u0085\u0001\u0000\u0000\u0000\u0087\u0088\u0001"+
		"\u0000\u0000\u0000\u0088\u0086\u0001\u0000\u0000\u0000\u0088\u0089\u0001"+
		"\u0000\u0000\u0000\u0089\u008d\u0001\u0000\u0000\u0000\u008a\u008c\u0003"+
		"\u0016\u000b\u0000\u008b\u008a\u0001\u0000\u0000\u0000\u008c\u008f\u0001"+
		"\u0000\u0000\u0000\u008d\u008b\u0001\u0000\u0000\u0000\u008d\u008e\u0001"+
		"\u0000\u0000\u0000\u008e\u0090\u0001\u0000\u0000\u0000\u008f\u008d\u0001"+
		"\u0000\u0000\u0000\u0090\u00b3\u0003\u0018\f\u0000\u0091\u0095\u0005\t"+
		"\u0000\u0000\u0092\u0094\u0003\u0016\u000b\u0000\u0093\u0092\u0001\u0000"+
		"\u0000\u0000\u0094\u0097\u0001\u0000\u0000\u0000\u0095\u0093\u0001\u0000"+
		"\u0000\u0000\u0095\u0096\u0001\u0000\u0000\u0000\u0096\u0098\u0001\u0000"+
		"\u0000\u0000\u0097\u0095\u0001\u0000\u0000\u0000\u0098\u00b3\u0003\u0018"+
		"\f\u0000\u0099\u009a\u0005\n\u0000\u0000\u009a\u009b\u0005\u0005\u0000"+
		"\u0000\u009b\u009c\u0005\u0018\u0000\u0000\u009c\u00a0\u0005\u0018\u0000"+
		"\u0000\u009d\u009f\u0003\u0016\u000b\u0000\u009e\u009d\u0001\u0000\u0000"+
		"\u0000\u009f\u00a2\u0001\u0000\u0000\u0000\u00a0\u009e\u0001\u0000\u0000"+
		"\u0000\u00a0\u00a1\u0001\u0000\u0000\u0000\u00a1\u00a3\u0001\u0000\u0000"+
		"\u0000\u00a2\u00a0\u0001\u0000\u0000\u0000\u00a3\u00b3\u0003\u0018\f\u0000"+
		"\u00a4\u00a5\u0005\u000b\u0000\u0000\u00a5\u00a7\u0005\u0005\u0000\u0000"+
		"\u00a6\u00a8\u0005\u0018\u0000\u0000\u00a7\u00a6\u0001\u0000\u0000\u0000"+
		"\u00a8\u00a9\u0001\u0000\u0000\u0000\u00a9\u00a7\u0001\u0000\u0000\u0000"+
		"\u00a9\u00aa\u0001\u0000\u0000\u0000\u00aa\u00b3\u0001\u0000\u0000\u0000"+
		"\u00ab\u00ac\u0005\f\u0000\u0000\u00ac\u00ae\u0005\u0005\u0000\u0000\u00ad"+
		"\u00af\u0005\u0018\u0000\u0000\u00ae\u00ad\u0001\u0000\u0000\u0000\u00af"+
		"\u00b0\u0001\u0000\u0000\u0000\u00b0\u00ae\u0001\u0000\u0000\u0000\u00b0"+
		"\u00b1\u0001\u0000\u0000\u0000\u00b1\u00b3\u0001\u0000\u0000\u0000\u00b2"+
		"\u0083\u0001\u0000\u0000\u0000\u00b2\u0091\u0001\u0000\u0000\u0000\u00b2"+
		"\u0099\u0001\u0000\u0000\u0000\u00b2\u00a4\u0001\u0000\u0000\u0000\u00b2"+
		"\u00ab\u0001\u0000\u0000\u0000\u00b3\u0013\u0001\u0000\u0000\u0000\u00b4"+
		"\u00b5\u0005\r\u0000\u0000\u00b5\u00b6\u0005\u0018\u0000\u0000\u00b6\u0015"+
		"\u0001\u0000\u0000\u0000\u00b7\u00b8\u0005\u0018\u0000\u0000\u00b8\u00ba"+
		"\u0005\u0005\u0000\u0000\u00b9\u00bb\u0003\u001a\r\u0000\u00ba\u00b9\u0001"+
		"\u0000\u0000\u0000\u00bb\u00bc\u0001\u0000\u0000\u0000\u00bc\u00ba\u0001"+
		"\u0000\u0000\u0000\u00bc\u00bd\u0001\u0000\u0000\u0000\u00bd\u0017\u0001"+
		"\u0000\u0000\u0000\u00be\u00bf\u0007\u0000\u0000\u0000\u00bf\u0019\u0001"+
		"\u0000\u0000\u0000\u00c0\u00c7\u0003&\u0013\u0000\u00c1\u00c7\u0003\u001c"+
		"\u000e\u0000\u00c2\u00c7\u0005\u0018\u0000\u0000\u00c3\u00c7\u0005\u0014"+
		"\u0000\u0000\u00c4\u00c7\u0005\u0016\u0000\u0000\u00c5\u00c7\u0005\u0017"+
		"\u0000\u0000\u00c6\u00c0\u0001\u0000\u0000\u0000\u00c6\u00c1\u0001\u0000"+
		"\u0000\u0000\u00c6\u00c2\u0001\u0000\u0000\u0000\u00c6\u00c3\u0001\u0000"+
		"\u0000\u0000\u00c6\u00c4\u0001\u0000\u0000\u0000\u00c6\u00c5\u0001\u0000"+
		"\u0000\u0000\u00c7\u001b\u0001\u0000\u0000\u0000\u00c8\u00c9\u0005\u0018"+
		"\u0000\u0000\u00c9\u00ca\u0005\u0011\u0000\u0000\u00ca\u00cb\u0005\u0018"+
		"\u0000\u0000\u00cb\u001d\u0001\u0000\u0000\u0000\u00cc\u00cd\u0005\u0015"+
		"\u0000\u0000\u00cd\u00ce\u0005\u0015\u0000\u0000\u00ce\u00cf\u0005\u0015"+
		"\u0000\u0000\u00cf\u00d0\u0005\u0015\u0000\u0000\u00d0\u001f\u0001\u0000"+
		"\u0000\u0000\u00d1\u00d2\u0005\u0014\u0000\u0000\u00d2\u00d3\u0005\u0012"+
		"\u0000\u0000\u00d3!\u0001\u0000\u0000\u0000\u00d4\u00d5\u0005\u0014\u0000"+
		"\u0000\u00d5\u00d6\u0005\u0014\u0000\u0000\u00d6#\u0001\u0000\u0000\u0000"+
		"\u00d7\u00d8\u0005\u0016\u0000\u0000\u00d8\u00d9\u0005\u0016\u0000\u0000"+
		"\u00d9%\u0001\u0000\u0000\u0000\u00da\u00db\u0005\u0013\u0000\u0000\u00db"+
		"\u00dc\u0005\u0018\u0000\u0000\u00dc\u00dd\u0005\u0013\u0000\u0000\u00dd"+
		"\'\u0001\u0000\u0000\u0000\u0017+46>CENPXamy|~\u0088\u008d\u0095\u00a0"+
		"\u00a9\u00b0\u00b2\u00bc\u00c6";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}