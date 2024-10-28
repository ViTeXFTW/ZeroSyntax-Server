// Generated from c:/Users/Mads/Sync/ZeroSyntax-Server/server/src/utils/antlr4ng/MapIni.g4 by ANTLR 4.13.1
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
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, EQ=16, STRING=17, 
		ID=18, NEWLINE=19, WS=20, COMMENT=21;
	public static final int
		RULE_program = 0, RULE_class = 1, RULE_mappedImageClass = 2, RULE_objectClass = 3, 
		RULE_module_modifier = 4, RULE_addModule = 5, RULE_removeModule = 6, RULE_module = 7, 
		RULE_drawModule = 8, RULE_conditionState = 9, RULE_aliasCondition = 10, 
		RULE_bodyModule = 11, RULE_behaviorModule = 12, RULE_clientModule = 13, 
		RULE_objectProperty = 14, RULE_property = 15, RULE_drawModule_type = 16, 
		RULE_conditionState_values = 17, RULE_bodyModule_type = 18, RULE_behaviorModule_type = 19, 
		RULE_clientModule_type = 20, RULE_moduleTag_value = 21, RULE_mappedImage_value = 22, 
		RULE_object_value = 23, RULE_property_values = 24, RULE_end = 25;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "class", "mappedImageClass", "objectClass", "module_modifier", 
			"addModule", "removeModule", "module", "drawModule", "conditionState", 
			"aliasCondition", "bodyModule", "behaviorModule", "clientModule", "objectProperty", 
			"property", "drawModule_type", "conditionState_values", "bodyModule_type", 
			"behaviorModule_type", "clientModule_type", "moduleTag_value", "mappedImage_value", 
			"object_value", "property_values", "end"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'MappedImage'", "'Object'", "'AddModule'", "'RemoveModule'", "'Draw'", 
			"'DefaultConditionState'", "'ConditionState'", "'TransitionState'", "'AliasConditionState'", 
			"'Body'", "'Behavior'", "'Client'", "'End'", "'end'", "'END'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, "EQ", "STRING", "ID", "NEWLINE", "WS", "COMMENT"
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
		public List<ClassContext> class_() {
			return getRuleContexts(ClassContext.class);
		}
		public ClassContext class_(int i) {
			return getRuleContext(ClassContext.class,i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(MapIniParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(MapIniParser.NEWLINE, i);
		}
		public List<TerminalNode> WS() { return getTokens(MapIniParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(MapIniParser.WS, i);
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
			setState(57);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1572870L) != 0)) {
				{
				setState(55);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__0:
				case T__1:
					{
					setState(52);
					class_();
					}
					break;
				case NEWLINE:
					{
					setState(53);
					match(NEWLINE);
					}
					break;
				case WS:
					{
					setState(54);
					match(WS);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(59);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(60);
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
	public static class ClassContext extends ParserRuleContext {
		public MappedImageClassContext mappedImageClass() {
			return getRuleContext(MappedImageClassContext.class,0);
		}
		public ObjectClassContext objectClass() {
			return getRuleContext(ObjectClassContext.class,0);
		}
		public ClassContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_class; }
	}

	public final ClassContext class_() throws RecognitionException {
		ClassContext _localctx = new ClassContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_class);
		try {
			setState(64);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
				enterOuterAlt(_localctx, 1);
				{
				setState(62);
				mappedImageClass();
				}
				break;
			case T__1:
				enterOuterAlt(_localctx, 2);
				{
				setState(63);
				objectClass();
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
	public static class MappedImageClassContext extends ParserRuleContext {
		public TerminalNode WS() { return getToken(MapIniParser.WS, 0); }
		public MappedImage_valueContext mappedImage_value() {
			return getRuleContext(MappedImage_valueContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(MapIniParser.NEWLINE, 0); }
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<PropertyContext> property() {
			return getRuleContexts(PropertyContext.class);
		}
		public PropertyContext property(int i) {
			return getRuleContext(PropertyContext.class,i);
		}
		public MappedImageClassContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mappedImageClass; }
	}

	public final MappedImageClassContext mappedImageClass() throws RecognitionException {
		MappedImageClassContext _localctx = new MappedImageClassContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_mappedImageClass);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(66);
			match(T__0);
			setState(67);
			match(WS);
			setState(68);
			mappedImage_value();
			setState(69);
			match(NEWLINE);
			setState(73);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(70);
					property();
					}
					} 
				}
				setState(75);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			}
			setState(76);
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
	public static class ObjectClassContext extends ParserRuleContext {
		public TerminalNode WS() { return getToken(MapIniParser.WS, 0); }
		public Object_valueContext object_value() {
			return getRuleContext(Object_valueContext.class,0);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(MapIniParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(MapIniParser.NEWLINE, i);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<Module_modifierContext> module_modifier() {
			return getRuleContexts(Module_modifierContext.class);
		}
		public Module_modifierContext module_modifier(int i) {
			return getRuleContext(Module_modifierContext.class,i);
		}
		public List<ObjectPropertyContext> objectProperty() {
			return getRuleContexts(ObjectPropertyContext.class);
		}
		public ObjectPropertyContext objectProperty(int i) {
			return getRuleContext(ObjectPropertyContext.class,i);
		}
		public ObjectClassContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectClass; }
	}

	public final ObjectClassContext objectClass() throws RecognitionException {
		ObjectClassContext _localctx = new ObjectClassContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_objectClass);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(78);
			match(T__1);
			setState(79);
			match(WS);
			setState(80);
			object_value();
			setState(81);
			match(NEWLINE);
			setState(87);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					setState(85);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
					case 1:
						{
						setState(82);
						module_modifier();
						}
						break;
					case 2:
						{
						setState(83);
						objectProperty();
						}
						break;
					case 3:
						{
						setState(84);
						match(NEWLINE);
						}
						break;
					}
					} 
				}
				setState(89);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
			}
			setState(90);
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
	public static class Module_modifierContext extends ParserRuleContext {
		public AddModuleContext addModule() {
			return getRuleContext(AddModuleContext.class,0);
		}
		public RemoveModuleContext removeModule() {
			return getRuleContext(RemoveModuleContext.class,0);
		}
		public TerminalNode WS() { return getToken(MapIniParser.WS, 0); }
		public Module_modifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_module_modifier; }
	}

	public final Module_modifierContext module_modifier() throws RecognitionException {
		Module_modifierContext _localctx = new Module_modifierContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_module_modifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(93);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(92);
				match(WS);
				}
			}

			setState(97);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__2:
				{
				setState(95);
				addModule();
				}
				break;
			case T__3:
				{
				setState(96);
				removeModule();
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
	public static class AddModuleContext extends ParserRuleContext {
		public List<TerminalNode> NEWLINE() { return getTokens(MapIniParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(MapIniParser.NEWLINE, i);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<ModuleContext> module() {
			return getRuleContexts(ModuleContext.class);
		}
		public ModuleContext module(int i) {
			return getRuleContext(ModuleContext.class,i);
		}
		public List<PropertyContext> property() {
			return getRuleContexts(PropertyContext.class);
		}
		public PropertyContext property(int i) {
			return getRuleContext(PropertyContext.class,i);
		}
		public AddModuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_addModule; }
	}

	public final AddModuleContext addModule() throws RecognitionException {
		AddModuleContext _localctx = new AddModuleContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_addModule);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(99);
			match(T__2);
			setState(100);
			match(NEWLINE);
			setState(106);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					setState(104);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
					case 1:
						{
						setState(101);
						module();
						}
						break;
					case 2:
						{
						setState(102);
						property();
						}
						break;
					case 3:
						{
						setState(103);
						match(NEWLINE);
						}
						break;
					}
					} 
				}
				setState(108);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			}
			setState(109);
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
	public static class RemoveModuleContext extends ParserRuleContext {
		public TerminalNode WS() { return getToken(MapIniParser.WS, 0); }
		public ModuleTag_valueContext moduleTag_value() {
			return getRuleContext(ModuleTag_valueContext.class,0);
		}
		public RemoveModuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_removeModule; }
	}

	public final RemoveModuleContext removeModule() throws RecognitionException {
		RemoveModuleContext _localctx = new RemoveModuleContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_removeModule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(111);
			match(T__3);
			setState(112);
			match(WS);
			setState(113);
			moduleTag_value();
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
	public static class ModuleContext extends ParserRuleContext {
		public DrawModuleContext drawModule() {
			return getRuleContext(DrawModuleContext.class,0);
		}
		public BodyModuleContext bodyModule() {
			return getRuleContext(BodyModuleContext.class,0);
		}
		public BehaviorModuleContext behaviorModule() {
			return getRuleContext(BehaviorModuleContext.class,0);
		}
		public ClientModuleContext clientModule() {
			return getRuleContext(ClientModuleContext.class,0);
		}
		public TerminalNode WS() { return getToken(MapIniParser.WS, 0); }
		public ModuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_module; }
	}

	public final ModuleContext module() throws RecognitionException {
		ModuleContext _localctx = new ModuleContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_module);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(116);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(115);
				match(WS);
				}
			}

			setState(122);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__4:
				{
				setState(118);
				drawModule();
				}
				break;
			case T__9:
				{
				setState(119);
				bodyModule();
				}
				break;
			case T__10:
				{
				setState(120);
				behaviorModule();
				}
				break;
			case T__11:
				{
				setState(121);
				clientModule();
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
	public static class DrawModuleContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public DrawModule_typeContext drawModule_type() {
			return getRuleContext(DrawModule_typeContext.class,0);
		}
		public TerminalNode WS() { return getToken(MapIniParser.WS, 0); }
		public ModuleTag_valueContext moduleTag_value() {
			return getRuleContext(ModuleTag_valueContext.class,0);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(MapIniParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(MapIniParser.NEWLINE, i);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<ConditionStateContext> conditionState() {
			return getRuleContexts(ConditionStateContext.class);
		}
		public ConditionStateContext conditionState(int i) {
			return getRuleContext(ConditionStateContext.class,i);
		}
		public List<AliasConditionContext> aliasCondition() {
			return getRuleContexts(AliasConditionContext.class);
		}
		public AliasConditionContext aliasCondition(int i) {
			return getRuleContext(AliasConditionContext.class,i);
		}
		public List<PropertyContext> property() {
			return getRuleContexts(PropertyContext.class);
		}
		public PropertyContext property(int i) {
			return getRuleContext(PropertyContext.class,i);
		}
		public DrawModuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_drawModule; }
	}

	public final DrawModuleContext drawModule() throws RecognitionException {
		DrawModuleContext _localctx = new DrawModuleContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_drawModule);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(124);
			match(T__4);
			setState(125);
			match(EQ);
			setState(126);
			drawModule_type();
			setState(127);
			match(WS);
			setState(128);
			moduleTag_value();
			setState(129);
			match(NEWLINE);
			setState(136);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					setState(134);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
					case 1:
						{
						setState(130);
						conditionState();
						}
						break;
					case 2:
						{
						setState(131);
						aliasCondition();
						}
						break;
					case 3:
						{
						setState(132);
						property();
						}
						break;
					case 4:
						{
						setState(133);
						match(NEWLINE);
						}
						break;
					}
					} 
				}
				setState(138);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
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
	public static class ConditionStateContext extends ParserRuleContext {
		public List<TerminalNode> NEWLINE() { return getTokens(MapIniParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(MapIniParser.NEWLINE, i);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public TerminalNode WS() { return getToken(MapIniParser.WS, 0); }
		public List<PropertyContext> property() {
			return getRuleContexts(PropertyContext.class);
		}
		public PropertyContext property(int i) {
			return getRuleContext(PropertyContext.class,i);
		}
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public ConditionState_valuesContext conditionState_values() {
			return getRuleContext(ConditionState_valuesContext.class,0);
		}
		public ConditionStateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conditionState; }
	}

	public final ConditionStateContext conditionState() throws RecognitionException {
		ConditionStateContext _localctx = new ConditionStateContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_conditionState);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(142);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(141);
				match(WS);
				}
			}

			setState(151);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__5:
				{
				setState(144);
				match(T__5);
				}
				break;
			case T__6:
				{
				{
				setState(145);
				match(T__6);
				setState(146);
				match(EQ);
				setState(147);
				conditionState_values();
				}
				}
				break;
			case T__7:
				{
				{
				setState(148);
				match(T__7);
				setState(149);
				match(EQ);
				setState(150);
				conditionState_values();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(153);
			match(NEWLINE);
			setState(158);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,17,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					setState(156);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case ID:
					case WS:
						{
						setState(154);
						property();
						}
						break;
					case NEWLINE:
						{
						setState(155);
						match(NEWLINE);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					} 
				}
				setState(160);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,17,_ctx);
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
	public static class AliasConditionContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public ConditionState_valuesContext conditionState_values() {
			return getRuleContext(ConditionState_valuesContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(MapIniParser.NEWLINE, 0); }
		public TerminalNode WS() { return getToken(MapIniParser.WS, 0); }
		public AliasConditionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_aliasCondition; }
	}

	public final AliasConditionContext aliasCondition() throws RecognitionException {
		AliasConditionContext _localctx = new AliasConditionContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_aliasCondition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(164);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(163);
				match(WS);
				}
			}

			setState(166);
			match(T__8);
			setState(167);
			match(EQ);
			setState(168);
			conditionState_values();
			setState(169);
			match(NEWLINE);
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
	public static class BodyModuleContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public BodyModule_typeContext bodyModule_type() {
			return getRuleContext(BodyModule_typeContext.class,0);
		}
		public TerminalNode WS() { return getToken(MapIniParser.WS, 0); }
		public ModuleTag_valueContext moduleTag_value() {
			return getRuleContext(ModuleTag_valueContext.class,0);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(MapIniParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(MapIniParser.NEWLINE, i);
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
		public BodyModuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bodyModule; }
	}

	public final BodyModuleContext bodyModule() throws RecognitionException {
		BodyModuleContext _localctx = new BodyModuleContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_bodyModule);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(171);
			match(T__9);
			setState(172);
			match(EQ);
			setState(173);
			bodyModule_type();
			setState(174);
			match(WS);
			setState(175);
			moduleTag_value();
			setState(176);
			match(NEWLINE);
			setState(181);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					setState(179);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case ID:
					case WS:
						{
						setState(177);
						property();
						}
						break;
					case NEWLINE:
						{
						setState(178);
						match(NEWLINE);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					} 
				}
				setState(183);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
			}
			setState(184);
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
	public static class BehaviorModuleContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public BehaviorModule_typeContext behaviorModule_type() {
			return getRuleContext(BehaviorModule_typeContext.class,0);
		}
		public TerminalNode WS() { return getToken(MapIniParser.WS, 0); }
		public ModuleTag_valueContext moduleTag_value() {
			return getRuleContext(ModuleTag_valueContext.class,0);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(MapIniParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(MapIniParser.NEWLINE, i);
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
		public BehaviorModuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_behaviorModule; }
	}

	public final BehaviorModuleContext behaviorModule() throws RecognitionException {
		BehaviorModuleContext _localctx = new BehaviorModuleContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_behaviorModule);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(186);
			match(T__10);
			setState(187);
			match(EQ);
			setState(188);
			behaviorModule_type();
			setState(189);
			match(WS);
			setState(190);
			moduleTag_value();
			setState(191);
			match(NEWLINE);
			setState(196);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,22,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					setState(194);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case ID:
					case WS:
						{
						setState(192);
						property();
						}
						break;
					case NEWLINE:
						{
						setState(193);
						match(NEWLINE);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					} 
				}
				setState(198);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,22,_ctx);
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
	public static class ClientModuleContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public ClientModule_typeContext clientModule_type() {
			return getRuleContext(ClientModule_typeContext.class,0);
		}
		public TerminalNode WS() { return getToken(MapIniParser.WS, 0); }
		public ModuleTag_valueContext moduleTag_value() {
			return getRuleContext(ModuleTag_valueContext.class,0);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(MapIniParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(MapIniParser.NEWLINE, i);
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
		public ClientModuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_clientModule; }
	}

	public final ClientModuleContext clientModule() throws RecognitionException {
		ClientModuleContext _localctx = new ClientModuleContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_clientModule);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(201);
			match(T__11);
			setState(202);
			match(EQ);
			setState(203);
			clientModule_type();
			setState(204);
			match(WS);
			setState(205);
			moduleTag_value();
			setState(206);
			match(NEWLINE);
			setState(211);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,24,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					setState(209);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case ID:
					case WS:
						{
						setState(207);
						property();
						}
						break;
					case NEWLINE:
						{
						setState(208);
						match(NEWLINE);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					} 
				}
				setState(213);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,24,_ctx);
			}
			setState(214);
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
		public PropertyContext property() {
			return getRuleContext(PropertyContext.class,0);
		}
		public ObjectPropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectProperty; }
	}

	public final ObjectPropertyContext objectProperty() throws RecognitionException {
		ObjectPropertyContext _localctx = new ObjectPropertyContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_objectProperty);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(216);
			property();
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
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Property_valuesContext property_values() {
			return getRuleContext(Property_valuesContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(MapIniParser.NEWLINE, 0); }
		public TerminalNode WS() { return getToken(MapIniParser.WS, 0); }
		public PropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_property; }
	}

	public final PropertyContext property() throws RecognitionException {
		PropertyContext _localctx = new PropertyContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_property);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(219);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(218);
				match(WS);
				}
			}

			setState(221);
			match(ID);
			setState(222);
			match(EQ);
			setState(223);
			property_values();
			setState(224);
			match(NEWLINE);
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
	public static class DrawModule_typeContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public DrawModule_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_drawModule_type; }
	}

	public final DrawModule_typeContext drawModule_type() throws RecognitionException {
		DrawModule_typeContext _localctx = new DrawModule_typeContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_drawModule_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(226);
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
	public static class ConditionState_valuesContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(MapIniParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(MapIniParser.ID, i);
		}
		public List<TerminalNode> WS() { return getTokens(MapIniParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(MapIniParser.WS, i);
		}
		public ConditionState_valuesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conditionState_values; }
	}

	public final ConditionState_valuesContext conditionState_values() throws RecognitionException {
		ConditionState_valuesContext _localctx = new ConditionState_valuesContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_conditionState_values);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(228);
			match(ID);
			setState(233);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WS) {
				{
				{
				setState(229);
				match(WS);
				setState(230);
				match(ID);
				}
				}
				setState(235);
				_errHandler.sync(this);
				_la = _input.LA(1);
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
	public static class BodyModule_typeContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public BodyModule_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bodyModule_type; }
	}

	public final BodyModule_typeContext bodyModule_type() throws RecognitionException {
		BodyModule_typeContext _localctx = new BodyModule_typeContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_bodyModule_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(236);
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
	public static class BehaviorModule_typeContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public BehaviorModule_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_behaviorModule_type; }
	}

	public final BehaviorModule_typeContext behaviorModule_type() throws RecognitionException {
		BehaviorModule_typeContext _localctx = new BehaviorModule_typeContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_behaviorModule_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(238);
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
	public static class ClientModule_typeContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public ClientModule_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_clientModule_type; }
	}

	public final ClientModule_typeContext clientModule_type() throws RecognitionException {
		ClientModule_typeContext _localctx = new ClientModule_typeContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_clientModule_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(240);
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
	public static class ModuleTag_valueContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public ModuleTag_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_moduleTag_value; }
	}

	public final ModuleTag_valueContext moduleTag_value() throws RecognitionException {
		ModuleTag_valueContext _localctx = new ModuleTag_valueContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_moduleTag_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(242);
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
	public static class MappedImage_valueContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public MappedImage_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mappedImage_value; }
	}

	public final MappedImage_valueContext mappedImage_value() throws RecognitionException {
		MappedImage_valueContext _localctx = new MappedImage_valueContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_mappedImage_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(244);
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
	public static class Object_valueContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Object_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_object_value; }
	}

	public final Object_valueContext object_value() throws RecognitionException {
		Object_valueContext _localctx = new Object_valueContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_object_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(246);
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
	public static class Property_valuesContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(MapIniParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(MapIniParser.ID, i);
		}
		public List<TerminalNode> WS() { return getTokens(MapIniParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(MapIniParser.WS, i);
		}
		public Property_valuesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_property_values; }
	}

	public final Property_valuesContext property_values() throws RecognitionException {
		Property_valuesContext _localctx = new Property_valuesContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_property_values);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(248);
			match(ID);
			setState(253);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WS) {
				{
				{
				setState(249);
				match(WS);
				setState(250);
				match(ID);
				}
				}
				setState(255);
				_errHandler.sync(this);
				_la = _input.LA(1);
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
	public static class EndContext extends ParserRuleContext {
		public TerminalNode WS() { return getToken(MapIniParser.WS, 0); }
		public EndContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_end; }
	}

	public final EndContext end() throws RecognitionException {
		EndContext _localctx = new EndContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_end);
		int _la;
		try {
			setState(262);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__12:
			case WS:
				enterOuterAlt(_localctx, 1);
				{
				setState(257);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==WS) {
					{
					setState(256);
					match(WS);
					}
				}

				setState(259);
				match(T__12);
				}
				break;
			case T__13:
				enterOuterAlt(_localctx, 2);
				{
				setState(260);
				match(T__13);
				}
				break;
			case T__14:
				enterOuterAlt(_localctx, 3);
				{
				setState(261);
				match(T__14);
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

	public static final String _serializedATN =
		"\u0004\u0001\u0015\u0109\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007"+
		"\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007"+
		"\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007"+
		"\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002\u0018\u0007"+
		"\u0018\u0002\u0019\u0007\u0019\u0001\u0000\u0001\u0000\u0001\u0000\u0005"+
		"\u00008\b\u0000\n\u0000\f\u0000;\t\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0001\u0001\u0001\u0003\u0001A\b\u0001\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0005\u0002H\b\u0002\n\u0002\f\u0002K\t"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0005\u0003V\b\u0003\n\u0003"+
		"\f\u0003Y\t\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0003\u0004^\b\u0004"+
		"\u0001\u0004\u0001\u0004\u0003\u0004b\b\u0004\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0005\u0005i\b\u0005\n\u0005\f\u0005"+
		"l\t\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0007\u0003\u0007u\b\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0003\u0007{\b\u0007\u0001\b\u0001\b\u0001\b"+
		"\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0005\b\u0087"+
		"\b\b\n\b\f\b\u008a\t\b\u0001\b\u0001\b\u0001\t\u0003\t\u008f\b\t\u0001"+
		"\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0003\t\u0098\b\t\u0001"+
		"\t\u0001\t\u0001\t\u0005\t\u009d\b\t\n\t\f\t\u00a0\t\t\u0001\t\u0001\t"+
		"\u0001\n\u0003\n\u00a5\b\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0005\u000b\u00b4\b\u000b\n\u000b\f\u000b\u00b7\t\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001"+
		"\f\u0001\f\u0001\f\u0005\f\u00c3\b\f\n\f\f\f\u00c6\t\f\u0001\f\u0001\f"+
		"\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0005"+
		"\r\u00d2\b\r\n\r\f\r\u00d5\t\r\u0001\r\u0001\r\u0001\u000e\u0001\u000e"+
		"\u0001\u000f\u0003\u000f\u00dc\b\u000f\u0001\u000f\u0001\u000f\u0001\u000f"+
		"\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011"+
		"\u0001\u0011\u0005\u0011\u00e8\b\u0011\n\u0011\f\u0011\u00eb\t\u0011\u0001"+
		"\u0012\u0001\u0012\u0001\u0013\u0001\u0013\u0001\u0014\u0001\u0014\u0001"+
		"\u0015\u0001\u0015\u0001\u0016\u0001\u0016\u0001\u0017\u0001\u0017\u0001"+
		"\u0018\u0001\u0018\u0001\u0018\u0005\u0018\u00fc\b\u0018\n\u0018\f\u0018"+
		"\u00ff\t\u0018\u0001\u0019\u0003\u0019\u0102\b\u0019\u0001\u0019\u0001"+
		"\u0019\u0001\u0019\u0003\u0019\u0107\b\u0019\u0001\u0019\u0000\u0000\u001a"+
		"\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a"+
		"\u001c\u001e \"$&(*,.02\u0000\u0000\u0115\u00009\u0001\u0000\u0000\u0000"+
		"\u0002@\u0001\u0000\u0000\u0000\u0004B\u0001\u0000\u0000\u0000\u0006N"+
		"\u0001\u0000\u0000\u0000\b]\u0001\u0000\u0000\u0000\nc\u0001\u0000\u0000"+
		"\u0000\fo\u0001\u0000\u0000\u0000\u000et\u0001\u0000\u0000\u0000\u0010"+
		"|\u0001\u0000\u0000\u0000\u0012\u008e\u0001\u0000\u0000\u0000\u0014\u00a4"+
		"\u0001\u0000\u0000\u0000\u0016\u00ab\u0001\u0000\u0000\u0000\u0018\u00ba"+
		"\u0001\u0000\u0000\u0000\u001a\u00c9\u0001\u0000\u0000\u0000\u001c\u00d8"+
		"\u0001\u0000\u0000\u0000\u001e\u00db\u0001\u0000\u0000\u0000 \u00e2\u0001"+
		"\u0000\u0000\u0000\"\u00e4\u0001\u0000\u0000\u0000$\u00ec\u0001\u0000"+
		"\u0000\u0000&\u00ee\u0001\u0000\u0000\u0000(\u00f0\u0001\u0000\u0000\u0000"+
		"*\u00f2\u0001\u0000\u0000\u0000,\u00f4\u0001\u0000\u0000\u0000.\u00f6"+
		"\u0001\u0000\u0000\u00000\u00f8\u0001\u0000\u0000\u00002\u0106\u0001\u0000"+
		"\u0000\u000048\u0003\u0002\u0001\u000058\u0005\u0013\u0000\u000068\u0005"+
		"\u0014\u0000\u000074\u0001\u0000\u0000\u000075\u0001\u0000\u0000\u0000"+
		"76\u0001\u0000\u0000\u00008;\u0001\u0000\u0000\u000097\u0001\u0000\u0000"+
		"\u00009:\u0001\u0000\u0000\u0000:<\u0001\u0000\u0000\u0000;9\u0001\u0000"+
		"\u0000\u0000<=\u0005\u0000\u0000\u0001=\u0001\u0001\u0000\u0000\u0000"+
		">A\u0003\u0004\u0002\u0000?A\u0003\u0006\u0003\u0000@>\u0001\u0000\u0000"+
		"\u0000@?\u0001\u0000\u0000\u0000A\u0003\u0001\u0000\u0000\u0000BC\u0005"+
		"\u0001\u0000\u0000CD\u0005\u0014\u0000\u0000DE\u0003,\u0016\u0000EI\u0005"+
		"\u0013\u0000\u0000FH\u0003\u001e\u000f\u0000GF\u0001\u0000\u0000\u0000"+
		"HK\u0001\u0000\u0000\u0000IG\u0001\u0000\u0000\u0000IJ\u0001\u0000\u0000"+
		"\u0000JL\u0001\u0000\u0000\u0000KI\u0001\u0000\u0000\u0000LM\u00032\u0019"+
		"\u0000M\u0005\u0001\u0000\u0000\u0000NO\u0005\u0002\u0000\u0000OP\u0005"+
		"\u0014\u0000\u0000PQ\u0003.\u0017\u0000QW\u0005\u0013\u0000\u0000RV\u0003"+
		"\b\u0004\u0000SV\u0003\u001c\u000e\u0000TV\u0005\u0013\u0000\u0000UR\u0001"+
		"\u0000\u0000\u0000US\u0001\u0000\u0000\u0000UT\u0001\u0000\u0000\u0000"+
		"VY\u0001\u0000\u0000\u0000WU\u0001\u0000\u0000\u0000WX\u0001\u0000\u0000"+
		"\u0000XZ\u0001\u0000\u0000\u0000YW\u0001\u0000\u0000\u0000Z[\u00032\u0019"+
		"\u0000[\u0007\u0001\u0000\u0000\u0000\\^\u0005\u0014\u0000\u0000]\\\u0001"+
		"\u0000\u0000\u0000]^\u0001\u0000\u0000\u0000^a\u0001\u0000\u0000\u0000"+
		"_b\u0003\n\u0005\u0000`b\u0003\f\u0006\u0000a_\u0001\u0000\u0000\u0000"+
		"a`\u0001\u0000\u0000\u0000b\t\u0001\u0000\u0000\u0000cd\u0005\u0003\u0000"+
		"\u0000dj\u0005\u0013\u0000\u0000ei\u0003\u000e\u0007\u0000fi\u0003\u001e"+
		"\u000f\u0000gi\u0005\u0013\u0000\u0000he\u0001\u0000\u0000\u0000hf\u0001"+
		"\u0000\u0000\u0000hg\u0001\u0000\u0000\u0000il\u0001\u0000\u0000\u0000"+
		"jh\u0001\u0000\u0000\u0000jk\u0001\u0000\u0000\u0000km\u0001\u0000\u0000"+
		"\u0000lj\u0001\u0000\u0000\u0000mn\u00032\u0019\u0000n\u000b\u0001\u0000"+
		"\u0000\u0000op\u0005\u0004\u0000\u0000pq\u0005\u0014\u0000\u0000qr\u0003"+
		"*\u0015\u0000r\r\u0001\u0000\u0000\u0000su\u0005\u0014\u0000\u0000ts\u0001"+
		"\u0000\u0000\u0000tu\u0001\u0000\u0000\u0000uz\u0001\u0000\u0000\u0000"+
		"v{\u0003\u0010\b\u0000w{\u0003\u0016\u000b\u0000x{\u0003\u0018\f\u0000"+
		"y{\u0003\u001a\r\u0000zv\u0001\u0000\u0000\u0000zw\u0001\u0000\u0000\u0000"+
		"zx\u0001\u0000\u0000\u0000zy\u0001\u0000\u0000\u0000{\u000f\u0001\u0000"+
		"\u0000\u0000|}\u0005\u0005\u0000\u0000}~\u0005\u0010\u0000\u0000~\u007f"+
		"\u0003 \u0010\u0000\u007f\u0080\u0005\u0014\u0000\u0000\u0080\u0081\u0003"+
		"*\u0015\u0000\u0081\u0088\u0005\u0013\u0000\u0000\u0082\u0087\u0003\u0012"+
		"\t\u0000\u0083\u0087\u0003\u0014\n\u0000\u0084\u0087\u0003\u001e\u000f"+
		"\u0000\u0085\u0087\u0005\u0013\u0000\u0000\u0086\u0082\u0001\u0000\u0000"+
		"\u0000\u0086\u0083\u0001\u0000\u0000\u0000\u0086\u0084\u0001\u0000\u0000"+
		"\u0000\u0086\u0085\u0001\u0000\u0000\u0000\u0087\u008a\u0001\u0000\u0000"+
		"\u0000\u0088\u0086\u0001\u0000\u0000\u0000\u0088\u0089\u0001\u0000\u0000"+
		"\u0000\u0089\u008b\u0001\u0000\u0000\u0000\u008a\u0088\u0001\u0000\u0000"+
		"\u0000\u008b\u008c\u00032\u0019\u0000\u008c\u0011\u0001\u0000\u0000\u0000"+
		"\u008d\u008f\u0005\u0014\u0000\u0000\u008e\u008d\u0001\u0000\u0000\u0000"+
		"\u008e\u008f\u0001\u0000\u0000\u0000\u008f\u0097\u0001\u0000\u0000\u0000"+
		"\u0090\u0098\u0005\u0006\u0000\u0000\u0091\u0092\u0005\u0007\u0000\u0000"+
		"\u0092\u0093\u0005\u0010\u0000\u0000\u0093\u0098\u0003\"\u0011\u0000\u0094"+
		"\u0095\u0005\b\u0000\u0000\u0095\u0096\u0005\u0010\u0000\u0000\u0096\u0098"+
		"\u0003\"\u0011\u0000\u0097\u0090\u0001\u0000\u0000\u0000\u0097\u0091\u0001"+
		"\u0000\u0000\u0000\u0097\u0094\u0001\u0000\u0000\u0000\u0098\u0099\u0001"+
		"\u0000\u0000\u0000\u0099\u009e\u0005\u0013\u0000\u0000\u009a\u009d\u0003"+
		"\u001e\u000f\u0000\u009b\u009d\u0005\u0013\u0000\u0000\u009c\u009a\u0001"+
		"\u0000\u0000\u0000\u009c\u009b\u0001\u0000\u0000\u0000\u009d\u00a0\u0001"+
		"\u0000\u0000\u0000\u009e\u009c\u0001\u0000\u0000\u0000\u009e\u009f\u0001"+
		"\u0000\u0000\u0000\u009f\u00a1\u0001\u0000\u0000\u0000\u00a0\u009e\u0001"+
		"\u0000\u0000\u0000\u00a1\u00a2\u00032\u0019\u0000\u00a2\u0013\u0001\u0000"+
		"\u0000\u0000\u00a3\u00a5\u0005\u0014\u0000\u0000\u00a4\u00a3\u0001\u0000"+
		"\u0000\u0000\u00a4\u00a5\u0001\u0000\u0000\u0000\u00a5\u00a6\u0001\u0000"+
		"\u0000\u0000\u00a6\u00a7\u0005\t\u0000\u0000\u00a7\u00a8\u0005\u0010\u0000"+
		"\u0000\u00a8\u00a9\u0003\"\u0011\u0000\u00a9\u00aa\u0005\u0013\u0000\u0000"+
		"\u00aa\u0015\u0001\u0000\u0000\u0000\u00ab\u00ac\u0005\n\u0000\u0000\u00ac"+
		"\u00ad\u0005\u0010\u0000\u0000\u00ad\u00ae\u0003$\u0012\u0000\u00ae\u00af"+
		"\u0005\u0014\u0000\u0000\u00af\u00b0\u0003*\u0015\u0000\u00b0\u00b5\u0005"+
		"\u0013\u0000\u0000\u00b1\u00b4\u0003\u001e\u000f\u0000\u00b2\u00b4\u0005"+
		"\u0013\u0000\u0000\u00b3\u00b1\u0001\u0000\u0000\u0000\u00b3\u00b2\u0001"+
		"\u0000\u0000\u0000\u00b4\u00b7\u0001\u0000\u0000\u0000\u00b5\u00b3\u0001"+
		"\u0000\u0000\u0000\u00b5\u00b6\u0001\u0000\u0000\u0000\u00b6\u00b8\u0001"+
		"\u0000\u0000\u0000\u00b7\u00b5\u0001\u0000\u0000\u0000\u00b8\u00b9\u0003"+
		"2\u0019\u0000\u00b9\u0017\u0001\u0000\u0000\u0000\u00ba\u00bb\u0005\u000b"+
		"\u0000\u0000\u00bb\u00bc\u0005\u0010\u0000\u0000\u00bc\u00bd\u0003&\u0013"+
		"\u0000\u00bd\u00be\u0005\u0014\u0000\u0000\u00be\u00bf\u0003*\u0015\u0000"+
		"\u00bf\u00c4\u0005\u0013\u0000\u0000\u00c0\u00c3\u0003\u001e\u000f\u0000"+
		"\u00c1\u00c3\u0005\u0013\u0000\u0000\u00c2\u00c0\u0001\u0000\u0000\u0000"+
		"\u00c2\u00c1\u0001\u0000\u0000\u0000\u00c3\u00c6\u0001\u0000\u0000\u0000"+
		"\u00c4\u00c2\u0001\u0000\u0000\u0000\u00c4\u00c5\u0001\u0000\u0000\u0000"+
		"\u00c5\u00c7\u0001\u0000\u0000\u0000\u00c6\u00c4\u0001\u0000\u0000\u0000"+
		"\u00c7\u00c8\u00032\u0019\u0000\u00c8\u0019\u0001\u0000\u0000\u0000\u00c9"+
		"\u00ca\u0005\f\u0000\u0000\u00ca\u00cb\u0005\u0010\u0000\u0000\u00cb\u00cc"+
		"\u0003(\u0014\u0000\u00cc\u00cd\u0005\u0014\u0000\u0000\u00cd\u00ce\u0003"+
		"*\u0015\u0000\u00ce\u00d3\u0005\u0013\u0000\u0000\u00cf\u00d2\u0003\u001e"+
		"\u000f\u0000\u00d0\u00d2\u0005\u0013\u0000\u0000\u00d1\u00cf\u0001\u0000"+
		"\u0000\u0000\u00d1\u00d0\u0001\u0000\u0000\u0000\u00d2\u00d5\u0001\u0000"+
		"\u0000\u0000\u00d3\u00d1\u0001\u0000\u0000\u0000\u00d3\u00d4\u0001\u0000"+
		"\u0000\u0000\u00d4\u00d6\u0001\u0000\u0000\u0000\u00d5\u00d3\u0001\u0000"+
		"\u0000\u0000\u00d6\u00d7\u00032\u0019\u0000\u00d7\u001b\u0001\u0000\u0000"+
		"\u0000\u00d8\u00d9\u0003\u001e\u000f\u0000\u00d9\u001d\u0001\u0000\u0000"+
		"\u0000\u00da\u00dc\u0005\u0014\u0000\u0000\u00db\u00da\u0001\u0000\u0000"+
		"\u0000\u00db\u00dc\u0001\u0000\u0000\u0000\u00dc\u00dd\u0001\u0000\u0000"+
		"\u0000\u00dd\u00de\u0005\u0012\u0000\u0000\u00de\u00df\u0005\u0010\u0000"+
		"\u0000\u00df\u00e0\u00030\u0018\u0000\u00e0\u00e1\u0005\u0013\u0000\u0000"+
		"\u00e1\u001f\u0001\u0000\u0000\u0000\u00e2\u00e3\u0005\u0012\u0000\u0000"+
		"\u00e3!\u0001\u0000\u0000\u0000\u00e4\u00e9\u0005\u0012\u0000\u0000\u00e5"+
		"\u00e6\u0005\u0014\u0000\u0000\u00e6\u00e8\u0005\u0012\u0000\u0000\u00e7"+
		"\u00e5\u0001\u0000\u0000\u0000\u00e8\u00eb\u0001\u0000\u0000\u0000\u00e9"+
		"\u00e7\u0001\u0000\u0000\u0000\u00e9\u00ea\u0001\u0000\u0000\u0000\u00ea"+
		"#\u0001\u0000\u0000\u0000\u00eb\u00e9\u0001\u0000\u0000\u0000\u00ec\u00ed"+
		"\u0005\u0012\u0000\u0000\u00ed%\u0001\u0000\u0000\u0000\u00ee\u00ef\u0005"+
		"\u0012\u0000\u0000\u00ef\'\u0001\u0000\u0000\u0000\u00f0\u00f1\u0005\u0012"+
		"\u0000\u0000\u00f1)\u0001\u0000\u0000\u0000\u00f2\u00f3\u0005\u0012\u0000"+
		"\u0000\u00f3+\u0001\u0000\u0000\u0000\u00f4\u00f5\u0005\u0012\u0000\u0000"+
		"\u00f5-\u0001\u0000\u0000\u0000\u00f6\u00f7\u0005\u0012\u0000\u0000\u00f7"+
		"/\u0001\u0000\u0000\u0000\u00f8\u00fd\u0005\u0012\u0000\u0000\u00f9\u00fa"+
		"\u0005\u0014\u0000\u0000\u00fa\u00fc\u0005\u0012\u0000\u0000\u00fb\u00f9"+
		"\u0001\u0000\u0000\u0000\u00fc\u00ff\u0001\u0000\u0000\u0000\u00fd\u00fb"+
		"\u0001\u0000\u0000\u0000\u00fd\u00fe\u0001\u0000\u0000\u0000\u00fe1\u0001"+
		"\u0000\u0000\u0000\u00ff\u00fd\u0001\u0000\u0000\u0000\u0100\u0102\u0005"+
		"\u0014\u0000\u0000\u0101\u0100\u0001\u0000\u0000\u0000\u0101\u0102\u0001"+
		"\u0000\u0000\u0000\u0102\u0103\u0001\u0000\u0000\u0000\u0103\u0107\u0005"+
		"\r\u0000\u0000\u0104\u0107\u0005\u000e\u0000\u0000\u0105\u0107\u0005\u000f"+
		"\u0000\u0000\u0106\u0101\u0001\u0000\u0000\u0000\u0106\u0104\u0001\u0000"+
		"\u0000\u0000\u0106\u0105\u0001\u0000\u0000\u0000\u01073\u0001\u0000\u0000"+
		"\u0000\u001e79@IUW]ahjtz\u0086\u0088\u008e\u0097\u009c\u009e\u00a4\u00b3"+
		"\u00b5\u00c2\u00c4\u00d1\u00d3\u00db\u00e9\u00fd\u0101\u0106";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}