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
		T__0=1, T__1=2, T__2=3, CONDITIONSTATE=4, ADDMODULE=5, REMOVEMODULE=6, 
		EQ=7, STRING=8, ID=9, NEWLINE=10, WS=11, COMMENT=12;
	public static final int
		RULE_program = 0, RULE_class = 1, RULE_simpleClass = 2, RULE_complexClass = 3, 
		RULE_class_identifier = 4, RULE_class_value = 5, RULE_module_modifier = 6, 
		RULE_addModule = 7, RULE_removeModule = 8, RULE_objectModules = 9, RULE_module_type = 10, 
		RULE_module_name = 11, RULE_moduleTag_value = 12, RULE_propertyBlock = 13, 
		RULE_conditionBlock = 14, RULE_property = 15, RULE_property_values = 16, 
		RULE_value = 17, RULE_end = 18;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "class", "simpleClass", "complexClass", "class_identifier", 
			"class_value", "module_modifier", "addModule", "removeModule", "objectModules", 
			"module_type", "module_name", "moduleTag_value", "propertyBlock", "conditionBlock", 
			"property", "property_values", "value", "end"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'end'", "'End'", "'END'", null, null, null, "'='"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, "CONDITIONSTATE", "ADDMODULE", "REMOVEMODULE", 
			"EQ", "STRING", "ID", "NEWLINE", "WS", "COMMENT"
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
			setState(42);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID || _la==NEWLINE) {
				{
				setState(40);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case ID:
					{
					setState(38);
					class_();
					}
					break;
				case NEWLINE:
					{
					setState(39);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(44);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(45);
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
		public SimpleClassContext simpleClass() {
			return getRuleContext(SimpleClassContext.class,0);
		}
		public ComplexClassContext complexClass() {
			return getRuleContext(ComplexClassContext.class,0);
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
			setState(49);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(47);
				simpleClass();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(48);
				complexClass();
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
	public static class SimpleClassContext extends ParserRuleContext {
		public Class_identifierContext class_identifier() {
			return getRuleContext(Class_identifierContext.class,0);
		}
		public Class_valueContext class_value() {
			return getRuleContext(Class_valueContext.class,0);
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
		public SimpleClassContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_simpleClass; }
	}

	public final SimpleClassContext simpleClass() throws RecognitionException {
		SimpleClassContext _localctx = new SimpleClassContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_simpleClass);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(51);
			class_identifier();
			setState(52);
			class_value();
			setState(53);
			match(NEWLINE);
			setState(58);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1792L) != 0)) {
				{
				setState(56);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case STRING:
				case ID:
					{
					setState(54);
					property();
					}
					break;
				case NEWLINE:
					{
					setState(55);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(60);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(61);
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
	public static class ComplexClassContext extends ParserRuleContext {
		public Class_identifierContext class_identifier() {
			return getRuleContext(Class_identifierContext.class,0);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(MapIniParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(MapIniParser.NEWLINE, i);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<Class_valueContext> class_value() {
			return getRuleContexts(Class_valueContext.class);
		}
		public Class_valueContext class_value(int i) {
			return getRuleContext(Class_valueContext.class,i);
		}
		public List<Module_modifierContext> module_modifier() {
			return getRuleContexts(Module_modifierContext.class);
		}
		public Module_modifierContext module_modifier(int i) {
			return getRuleContext(Module_modifierContext.class,i);
		}
		public List<ObjectModulesContext> objectModules() {
			return getRuleContexts(ObjectModulesContext.class);
		}
		public ObjectModulesContext objectModules(int i) {
			return getRuleContext(ObjectModulesContext.class,i);
		}
		public List<PropertyBlockContext> propertyBlock() {
			return getRuleContexts(PropertyBlockContext.class);
		}
		public PropertyBlockContext propertyBlock(int i) {
			return getRuleContext(PropertyBlockContext.class,i);
		}
		public List<PropertyContext> property() {
			return getRuleContexts(PropertyContext.class);
		}
		public PropertyContext property(int i) {
			return getRuleContext(PropertyContext.class,i);
		}
		public ComplexClassContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_complexClass; }
	}

	public final ComplexClassContext complexClass() throws RecognitionException {
		ComplexClassContext _localctx = new ComplexClassContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_complexClass);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(63);
			class_identifier();
			setState(67);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(64);
				class_value();
				}
				}
				setState(69);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(70);
			match(NEWLINE);
			setState(78);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1888L) != 0)) {
				{
				setState(76);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
				case 1:
					{
					setState(71);
					module_modifier();
					}
					break;
				case 2:
					{
					setState(72);
					objectModules();
					}
					break;
				case 3:
					{
					setState(73);
					propertyBlock();
					}
					break;
				case 4:
					{
					setState(74);
					property();
					}
					break;
				case 5:
					{
					setState(75);
					match(NEWLINE);
					}
					break;
				}
				}
				setState(80);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(81);
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
	public static class Class_identifierContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Class_identifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_class_identifier; }
	}

	public final Class_identifierContext class_identifier() throws RecognitionException {
		Class_identifierContext _localctx = new Class_identifierContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_class_identifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(83);
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
	public static class Class_valueContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Class_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_class_value; }
	}

	public final Class_valueContext class_value() throws RecognitionException {
		Class_valueContext _localctx = new Class_valueContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_class_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(85);
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
	public static class Module_modifierContext extends ParserRuleContext {
		public AddModuleContext addModule() {
			return getRuleContext(AddModuleContext.class,0);
		}
		public RemoveModuleContext removeModule() {
			return getRuleContext(RemoveModuleContext.class,0);
		}
		public Module_modifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_module_modifier; }
	}

	public final Module_modifierContext module_modifier() throws RecognitionException {
		Module_modifierContext _localctx = new Module_modifierContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_module_modifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(89);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ADDMODULE:
				{
				setState(87);
				addModule();
				}
				break;
			case REMOVEMODULE:
				{
				setState(88);
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
		public TerminalNode ADDMODULE() { return getToken(MapIniParser.ADDMODULE, 0); }
		public List<TerminalNode> NEWLINE() { return getTokens(MapIniParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(MapIniParser.NEWLINE, i);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<ObjectModulesContext> objectModules() {
			return getRuleContexts(ObjectModulesContext.class);
		}
		public ObjectModulesContext objectModules(int i) {
			return getRuleContext(ObjectModulesContext.class,i);
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
		enterRule(_localctx, 14, RULE_addModule);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(91);
			match(ADDMODULE);
			setState(92);
			match(NEWLINE);
			setState(98);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1792L) != 0)) {
				{
				setState(96);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
				case 1:
					{
					setState(93);
					objectModules();
					}
					break;
				case 2:
					{
					setState(94);
					property();
					}
					break;
				case 3:
					{
					setState(95);
					match(NEWLINE);
					}
					break;
				}
				}
				setState(100);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(101);
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
		public TerminalNode REMOVEMODULE() { return getToken(MapIniParser.REMOVEMODULE, 0); }
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
		enterRule(_localctx, 16, RULE_removeModule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(103);
			match(REMOVEMODULE);
			setState(104);
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
	public static class ObjectModulesContext extends ParserRuleContext {
		public Module_typeContext module_type() {
			return getRuleContext(Module_typeContext.class,0);
		}
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Module_nameContext module_name() {
			return getRuleContext(Module_nameContext.class,0);
		}
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
		public List<PropertyBlockContext> propertyBlock() {
			return getRuleContexts(PropertyBlockContext.class);
		}
		public PropertyBlockContext propertyBlock(int i) {
			return getRuleContext(PropertyBlockContext.class,i);
		}
		public List<ConditionBlockContext> conditionBlock() {
			return getRuleContexts(ConditionBlockContext.class);
		}
		public ConditionBlockContext conditionBlock(int i) {
			return getRuleContext(ConditionBlockContext.class,i);
		}
		public ObjectModulesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectModules; }
	}

	public final ObjectModulesContext objectModules() throws RecognitionException {
		ObjectModulesContext _localctx = new ObjectModulesContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_objectModules);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(106);
			module_type();
			setState(107);
			match(EQ);
			setState(108);
			module_name();
			setState(109);
			moduleTag_value();
			setState(110);
			match(NEWLINE);
			setState(117);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1808L) != 0)) {
				{
				setState(115);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
				case 1:
					{
					setState(111);
					property();
					}
					break;
				case 2:
					{
					setState(112);
					propertyBlock();
					}
					break;
				case 3:
					{
					setState(113);
					conditionBlock();
					}
					break;
				case 4:
					{
					setState(114);
					match(NEWLINE);
					}
					break;
				}
				}
				setState(119);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(120);
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
	public static class Module_typeContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Module_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_module_type; }
	}

	public final Module_typeContext module_type() throws RecognitionException {
		Module_typeContext _localctx = new Module_typeContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_module_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(122);
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
	public static class Module_nameContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Module_nameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_module_name; }
	}

	public final Module_nameContext module_name() throws RecognitionException {
		Module_nameContext _localctx = new Module_nameContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_module_name);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(124);
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
		enterRule(_localctx, 24, RULE_moduleTag_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(126);
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
	public static class PropertyBlockContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
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
		public PropertyBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_propertyBlock; }
	}

	public final PropertyBlockContext propertyBlock() throws RecognitionException {
		PropertyBlockContext _localctx = new PropertyBlockContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_propertyBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(128);
			match(ID);
			setState(129);
			match(NEWLINE);
			setState(134);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1792L) != 0)) {
				{
				setState(132);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case STRING:
				case ID:
					{
					setState(130);
					property();
					}
					break;
				case NEWLINE:
					{
					setState(131);
					match(NEWLINE);
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
			setState(137);
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
	public static class ConditionBlockContext extends ParserRuleContext {
		public TerminalNode CONDITIONSTATE() { return getToken(MapIniParser.CONDITIONSTATE, 0); }
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Property_valuesContext property_values() {
			return getRuleContext(Property_valuesContext.class,0);
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
		public ConditionBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conditionBlock; }
	}

	public final ConditionBlockContext conditionBlock() throws RecognitionException {
		ConditionBlockContext _localctx = new ConditionBlockContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_conditionBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(139);
			match(CONDITIONSTATE);
			setState(140);
			match(EQ);
			setState(141);
			property_values();
			setState(142);
			match(NEWLINE);
			setState(147);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1792L) != 0)) {
				{
				setState(145);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case STRING:
				case ID:
					{
					setState(143);
					property();
					}
					break;
				case NEWLINE:
					{
					setState(144);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(149);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(150);
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
	public static class PropertyContext extends ParserRuleContext {
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Property_valuesContext property_values() {
			return getRuleContext(Property_valuesContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(MapIniParser.NEWLINE, 0); }
		public PropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_property; }
	}

	public final PropertyContext property() throws RecognitionException {
		PropertyContext _localctx = new PropertyContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(152);
			value();
			setState(153);
			match(EQ);
			setState(154);
			property_values();
			setState(155);
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
	public static class Property_valuesContext extends ParserRuleContext {
		public List<ValueContext> value() {
			return getRuleContexts(ValueContext.class);
		}
		public ValueContext value(int i) {
			return getRuleContext(ValueContext.class,i);
		}
		public Property_valuesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_property_values; }
	}

	public final Property_valuesContext property_values() throws RecognitionException {
		Property_valuesContext _localctx = new Property_valuesContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_property_values);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(158); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(157);
				value();
				}
				}
				setState(160); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==STRING || _la==ID );
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
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public TerminalNode STRING() { return getToken(MapIniParser.STRING, 0); }
		public ValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_value; }
	}

	public final ValueContext value() throws RecognitionException {
		ValueContext _localctx = new ValueContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_value);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(162);
			_la = _input.LA(1);
			if ( !(_la==STRING || _la==ID) ) {
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
	public static class EndContext extends ParserRuleContext {
		public EndContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_end; }
	}

	public final EndContext end() throws RecognitionException {
		EndContext _localctx = new EndContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_end);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(164);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 14L) != 0)) ) {
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

	public static final String _serializedATN =
		"\u0004\u0001\f\u00a7\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0001\u0000\u0001\u0000\u0005\u0000)\b\u0000\n\u0000\f\u0000,\t\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0003\u00012\b\u0001"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0005\u0002"+
		"9\b\u0002\n\u0002\f\u0002<\t\u0002\u0001\u0002\u0001\u0002\u0001\u0003"+
		"\u0001\u0003\u0005\u0003B\b\u0003\n\u0003\f\u0003E\t\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0005\u0003"+
		"M\b\u0003\n\u0003\f\u0003P\t\u0003\u0001\u0003\u0001\u0003\u0001\u0004"+
		"\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0003\u0006"+
		"Z\b\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0005\u0007a\b\u0007\n\u0007\f\u0007d\t\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0001\t\u0005\tt\b\t\n\t\f\tw\t\t\u0001\t\u0001\t\u0001"+
		"\n\u0001\n\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0001"+
		"\r\u0001\r\u0005\r\u0085\b\r\n\r\f\r\u0088\t\r\u0001\r\u0001\r\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0005\u000e"+
		"\u0092\b\u000e\n\u000e\f\u000e\u0095\t\u000e\u0001\u000e\u0001\u000e\u0001"+
		"\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u0010\u0004"+
		"\u0010\u009f\b\u0010\u000b\u0010\f\u0010\u00a0\u0001\u0011\u0001\u0011"+
		"\u0001\u0012\u0001\u0012\u0001\u0012\u0000\u0000\u0013\u0000\u0002\u0004"+
		"\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \""+
		"$\u0000\u0002\u0001\u0000\b\t\u0001\u0000\u0001\u0003\u00ab\u0000*\u0001"+
		"\u0000\u0000\u0000\u00021\u0001\u0000\u0000\u0000\u00043\u0001\u0000\u0000"+
		"\u0000\u0006?\u0001\u0000\u0000\u0000\bS\u0001\u0000\u0000\u0000\nU\u0001"+
		"\u0000\u0000\u0000\fY\u0001\u0000\u0000\u0000\u000e[\u0001\u0000\u0000"+
		"\u0000\u0010g\u0001\u0000\u0000\u0000\u0012j\u0001\u0000\u0000\u0000\u0014"+
		"z\u0001\u0000\u0000\u0000\u0016|\u0001\u0000\u0000\u0000\u0018~\u0001"+
		"\u0000\u0000\u0000\u001a\u0080\u0001\u0000\u0000\u0000\u001c\u008b\u0001"+
		"\u0000\u0000\u0000\u001e\u0098\u0001\u0000\u0000\u0000 \u009e\u0001\u0000"+
		"\u0000\u0000\"\u00a2\u0001\u0000\u0000\u0000$\u00a4\u0001\u0000\u0000"+
		"\u0000&)\u0003\u0002\u0001\u0000\')\u0005\n\u0000\u0000(&\u0001\u0000"+
		"\u0000\u0000(\'\u0001\u0000\u0000\u0000),\u0001\u0000\u0000\u0000*(\u0001"+
		"\u0000\u0000\u0000*+\u0001\u0000\u0000\u0000+-\u0001\u0000\u0000\u0000"+
		",*\u0001\u0000\u0000\u0000-.\u0005\u0000\u0000\u0001.\u0001\u0001\u0000"+
		"\u0000\u0000/2\u0003\u0004\u0002\u000002\u0003\u0006\u0003\u00001/\u0001"+
		"\u0000\u0000\u000010\u0001\u0000\u0000\u00002\u0003\u0001\u0000\u0000"+
		"\u000034\u0003\b\u0004\u000045\u0003\n\u0005\u00005:\u0005\n\u0000\u0000"+
		"69\u0003\u001e\u000f\u000079\u0005\n\u0000\u000086\u0001\u0000\u0000\u0000"+
		"87\u0001\u0000\u0000\u00009<\u0001\u0000\u0000\u0000:8\u0001\u0000\u0000"+
		"\u0000:;\u0001\u0000\u0000\u0000;=\u0001\u0000\u0000\u0000<:\u0001\u0000"+
		"\u0000\u0000=>\u0003$\u0012\u0000>\u0005\u0001\u0000\u0000\u0000?C\u0003"+
		"\b\u0004\u0000@B\u0003\n\u0005\u0000A@\u0001\u0000\u0000\u0000BE\u0001"+
		"\u0000\u0000\u0000CA\u0001\u0000\u0000\u0000CD\u0001\u0000\u0000\u0000"+
		"DF\u0001\u0000\u0000\u0000EC\u0001\u0000\u0000\u0000FN\u0005\n\u0000\u0000"+
		"GM\u0003\f\u0006\u0000HM\u0003\u0012\t\u0000IM\u0003\u001a\r\u0000JM\u0003"+
		"\u001e\u000f\u0000KM\u0005\n\u0000\u0000LG\u0001\u0000\u0000\u0000LH\u0001"+
		"\u0000\u0000\u0000LI\u0001\u0000\u0000\u0000LJ\u0001\u0000\u0000\u0000"+
		"LK\u0001\u0000\u0000\u0000MP\u0001\u0000\u0000\u0000NL\u0001\u0000\u0000"+
		"\u0000NO\u0001\u0000\u0000\u0000OQ\u0001\u0000\u0000\u0000PN\u0001\u0000"+
		"\u0000\u0000QR\u0003$\u0012\u0000R\u0007\u0001\u0000\u0000\u0000ST\u0005"+
		"\t\u0000\u0000T\t\u0001\u0000\u0000\u0000UV\u0005\t\u0000\u0000V\u000b"+
		"\u0001\u0000\u0000\u0000WZ\u0003\u000e\u0007\u0000XZ\u0003\u0010\b\u0000"+
		"YW\u0001\u0000\u0000\u0000YX\u0001\u0000\u0000\u0000Z\r\u0001\u0000\u0000"+
		"\u0000[\\\u0005\u0005\u0000\u0000\\b\u0005\n\u0000\u0000]a\u0003\u0012"+
		"\t\u0000^a\u0003\u001e\u000f\u0000_a\u0005\n\u0000\u0000`]\u0001\u0000"+
		"\u0000\u0000`^\u0001\u0000\u0000\u0000`_\u0001\u0000\u0000\u0000ad\u0001"+
		"\u0000\u0000\u0000b`\u0001\u0000\u0000\u0000bc\u0001\u0000\u0000\u0000"+
		"ce\u0001\u0000\u0000\u0000db\u0001\u0000\u0000\u0000ef\u0003$\u0012\u0000"+
		"f\u000f\u0001\u0000\u0000\u0000gh\u0005\u0006\u0000\u0000hi\u0003\u0018"+
		"\f\u0000i\u0011\u0001\u0000\u0000\u0000jk\u0003\u0014\n\u0000kl\u0005"+
		"\u0007\u0000\u0000lm\u0003\u0016\u000b\u0000mn\u0003\u0018\f\u0000nu\u0005"+
		"\n\u0000\u0000ot\u0003\u001e\u000f\u0000pt\u0003\u001a\r\u0000qt\u0003"+
		"\u001c\u000e\u0000rt\u0005\n\u0000\u0000so\u0001\u0000\u0000\u0000sp\u0001"+
		"\u0000\u0000\u0000sq\u0001\u0000\u0000\u0000sr\u0001\u0000\u0000\u0000"+
		"tw\u0001\u0000\u0000\u0000us\u0001\u0000\u0000\u0000uv\u0001\u0000\u0000"+
		"\u0000vx\u0001\u0000\u0000\u0000wu\u0001\u0000\u0000\u0000xy\u0003$\u0012"+
		"\u0000y\u0013\u0001\u0000\u0000\u0000z{\u0005\t\u0000\u0000{\u0015\u0001"+
		"\u0000\u0000\u0000|}\u0005\t\u0000\u0000}\u0017\u0001\u0000\u0000\u0000"+
		"~\u007f\u0005\t\u0000\u0000\u007f\u0019\u0001\u0000\u0000\u0000\u0080"+
		"\u0081\u0005\t\u0000\u0000\u0081\u0086\u0005\n\u0000\u0000\u0082\u0085"+
		"\u0003\u001e\u000f\u0000\u0083\u0085\u0005\n\u0000\u0000\u0084\u0082\u0001"+
		"\u0000\u0000\u0000\u0084\u0083\u0001\u0000\u0000\u0000\u0085\u0088\u0001"+
		"\u0000\u0000\u0000\u0086\u0084\u0001\u0000\u0000\u0000\u0086\u0087\u0001"+
		"\u0000\u0000\u0000\u0087\u0089\u0001\u0000\u0000\u0000\u0088\u0086\u0001"+
		"\u0000\u0000\u0000\u0089\u008a\u0003$\u0012\u0000\u008a\u001b\u0001\u0000"+
		"\u0000\u0000\u008b\u008c\u0005\u0004\u0000\u0000\u008c\u008d\u0005\u0007"+
		"\u0000\u0000\u008d\u008e\u0003 \u0010\u0000\u008e\u0093\u0005\n\u0000"+
		"\u0000\u008f\u0092\u0003\u001e\u000f\u0000\u0090\u0092\u0005\n\u0000\u0000"+
		"\u0091\u008f\u0001\u0000\u0000\u0000\u0091\u0090\u0001\u0000\u0000\u0000"+
		"\u0092\u0095\u0001\u0000\u0000\u0000\u0093\u0091\u0001\u0000\u0000\u0000"+
		"\u0093\u0094\u0001\u0000\u0000\u0000\u0094\u0096\u0001\u0000\u0000\u0000"+
		"\u0095\u0093\u0001\u0000\u0000\u0000\u0096\u0097\u0003$\u0012\u0000\u0097"+
		"\u001d\u0001\u0000\u0000\u0000\u0098\u0099\u0003\"\u0011\u0000\u0099\u009a"+
		"\u0005\u0007\u0000\u0000\u009a\u009b\u0003 \u0010\u0000\u009b\u009c\u0005"+
		"\n\u0000\u0000\u009c\u001f\u0001\u0000\u0000\u0000\u009d\u009f\u0003\""+
		"\u0011\u0000\u009e\u009d\u0001\u0000\u0000\u0000\u009f\u00a0\u0001\u0000"+
		"\u0000\u0000\u00a0\u009e\u0001\u0000\u0000\u0000\u00a0\u00a1\u0001\u0000"+
		"\u0000\u0000\u00a1!\u0001\u0000\u0000\u0000\u00a2\u00a3\u0007\u0000\u0000"+
		"\u0000\u00a3#\u0001\u0000\u0000\u0000\u00a4\u00a5\u0007\u0001\u0000\u0000"+
		"\u00a5%\u0001\u0000\u0000\u0000\u0012(*18:CLNY`bsu\u0084\u0086\u0091\u0093"+
		"\u00a0";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}