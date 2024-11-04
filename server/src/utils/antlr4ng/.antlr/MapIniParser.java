// Generated from c:/Users/mads2/Desktop/ZeroSyntax-Server/server/src/utils/antlr4ng/MapIni.g4 by ANTLR 4.13.1
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
		T__17=18, T__18=19, T__19=20, EQ=21, STRING=22, ID=23, NEWLINE=24, WS=25, 
		COMMENT=26;
	public static final int
		RULE_program = 0, RULE_class = 1, RULE_mappedImageClass = 2, RULE_objectClass = 3, 
		RULE_module_modifier = 4, RULE_addModule = 5, RULE_removeModule = 6, RULE_module = 7, 
		RULE_objectSets = 8, RULE_objectWeaponSet = 9, RULE_objectWeaponSetProperty = 10, 
		RULE_objectArmorSet = 11, RULE_objectArmorSetProperty = 12, RULE_objectPrerequisite = 13, 
		RULE_objectPrerequisiteProperty = 14, RULE_objectUnitSpecificSounds = 15, 
		RULE_objectUnitSpecificSoundsProperty = 16, RULE_objectUnitSpecificFX = 17, 
		RULE_objectUnitSpecificFXProperty = 18, RULE_drawModule = 19, RULE_conditionState = 20, 
		RULE_defaultConditionStateBlock = 21, RULE_conditionStateBlock = 22, RULE_transitionStateBlock = 23, 
		RULE_aliasCondition = 24, RULE_bodyModule = 25, RULE_bodyModuleProperty = 26, 
		RULE_behaviorModule = 27, RULE_behaviorModuleProperty = 28, RULE_clientModule = 29, 
		RULE_clientModuleProperty = 30, RULE_objectProperty = 31, RULE_drawModuleProperty = 32, 
		RULE_conditionStateProperty = 33, RULE_property = 34, RULE_drawModule_type = 35, 
		RULE_conditionState_values = 36, RULE_bodyModule_type = 37, RULE_behaviorModule_type = 38, 
		RULE_clientModule_type = 39, RULE_moduleTag_value = 40, RULE_mappedImage_value = 41, 
		RULE_object_value = 42, RULE_locomotor_modifier = 43, RULE_property_value = 44, 
		RULE_property_values = 45, RULE_end = 46;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "class", "mappedImageClass", "objectClass", "module_modifier", 
			"addModule", "removeModule", "module", "objectSets", "objectWeaponSet", 
			"objectWeaponSetProperty", "objectArmorSet", "objectArmorSetProperty", 
			"objectPrerequisite", "objectPrerequisiteProperty", "objectUnitSpecificSounds", 
			"objectUnitSpecificSoundsProperty", "objectUnitSpecificFX", "objectUnitSpecificFXProperty", 
			"drawModule", "conditionState", "defaultConditionStateBlock", "conditionStateBlock", 
			"transitionStateBlock", "aliasCondition", "bodyModule", "bodyModuleProperty", 
			"behaviorModule", "behaviorModuleProperty", "clientModule", "clientModuleProperty", 
			"objectProperty", "drawModuleProperty", "conditionStateProperty", "property", 
			"drawModule_type", "conditionState_values", "bodyModule_type", "behaviorModule_type", 
			"clientModule_type", "moduleTag_value", "mappedImage_value", "object_value", 
			"locomotor_modifier", "property_value", "property_values", "end"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'MappedImage'", "'Object'", "'AddModule'", "'RemoveModule'", "'WeaponSet'", 
			"'ArmorSet'", "'Prerequisites'", "'UnitSpecificSounds'", "'UnitSpecificFX'", 
			"'Draw'", "'DefaultConditionState'", "'ConditionState'", "'TransitionState'", 
			"'AliasConditionState'", "'Body'", "'Behavior'", "'ClientUpdate'", "'End'", 
			"'end'", "'END'", "'='"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, "EQ", "STRING", 
			"ID", "NEWLINE", "WS", "COMMENT"
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
			setState(98);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 16777222L) != 0)) {
				{
				setState(96);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__0:
				case T__1:
					{
					setState(94);
					class_();
					}
					break;
				case NEWLINE:
					{
					setState(95);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(100);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(101);
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
			setState(105);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
				enterOuterAlt(_localctx, 1);
				{
				setState(103);
				mappedImageClass();
				}
				break;
			case T__1:
				enterOuterAlt(_localctx, 2);
				{
				setState(104);
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
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(107);
			match(T__0);
			setState(108);
			mappedImage_value();
			setState(109);
			match(NEWLINE);
			setState(113);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(110);
				property();
				}
				}
				setState(115);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(116);
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
		public List<ModuleContext> module() {
			return getRuleContexts(ModuleContext.class);
		}
		public ModuleContext module(int i) {
			return getRuleContext(ModuleContext.class,i);
		}
		public List<ObjectPropertyContext> objectProperty() {
			return getRuleContexts(ObjectPropertyContext.class);
		}
		public ObjectPropertyContext objectProperty(int i) {
			return getRuleContext(ObjectPropertyContext.class,i);
		}
		public List<ObjectSetsContext> objectSets() {
			return getRuleContexts(ObjectSetsContext.class);
		}
		public ObjectSetsContext objectSets(int i) {
			return getRuleContext(ObjectSetsContext.class,i);
		}
		public List<ObjectUnitSpecificSoundsContext> objectUnitSpecificSounds() {
			return getRuleContexts(ObjectUnitSpecificSoundsContext.class);
		}
		public ObjectUnitSpecificSoundsContext objectUnitSpecificSounds(int i) {
			return getRuleContext(ObjectUnitSpecificSoundsContext.class,i);
		}
		public List<ObjectUnitSpecificFXContext> objectUnitSpecificFX() {
			return getRuleContexts(ObjectUnitSpecificFXContext.class);
		}
		public ObjectUnitSpecificFXContext objectUnitSpecificFX(int i) {
			return getRuleContext(ObjectUnitSpecificFXContext.class,i);
		}
		public ObjectClassContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectClass; }
	}

	public final ObjectClassContext objectClass() throws RecognitionException {
		ObjectClassContext _localctx = new ObjectClassContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_objectClass);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(118);
			match(T__1);
			setState(119);
			object_value();
			setState(120);
			match(NEWLINE);
			setState(130);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 25397240L) != 0)) {
				{
				setState(128);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__2:
				case T__3:
					{
					setState(121);
					module_modifier();
					}
					break;
				case T__9:
				case T__14:
				case T__15:
				case T__16:
					{
					setState(122);
					module();
					}
					break;
				case ID:
					{
					setState(123);
					objectProperty();
					}
					break;
				case T__4:
				case T__5:
				case T__6:
					{
					setState(124);
					objectSets();
					}
					break;
				case T__7:
					{
					setState(125);
					objectUnitSpecificSounds();
					}
					break;
				case T__8:
					{
					setState(126);
					objectUnitSpecificFX();
					}
					break;
				case NEWLINE:
					{
					setState(127);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(132);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(133);
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
		public Module_modifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_module_modifier; }
	}

	public final Module_modifierContext module_modifier() throws RecognitionException {
		Module_modifierContext _localctx = new Module_modifierContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_module_modifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(137);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__2:
				{
				setState(135);
				addModule();
				}
				break;
			case T__3:
				{
				setState(136);
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
		public List<ObjectPropertyContext> objectProperty() {
			return getRuleContexts(ObjectPropertyContext.class);
		}
		public ObjectPropertyContext objectProperty(int i) {
			return getRuleContext(ObjectPropertyContext.class,i);
		}
		public AddModuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_addModule; }
	}

	public final AddModuleContext addModule() throws RecognitionException {
		AddModuleContext _localctx = new AddModuleContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_addModule);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(139);
			match(T__2);
			setState(140);
			match(NEWLINE);
			setState(146);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 25396224L) != 0)) {
				{
				setState(144);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__9:
				case T__14:
				case T__15:
				case T__16:
					{
					setState(141);
					module();
					}
					break;
				case ID:
					{
					setState(142);
					objectProperty();
					}
					break;
				case NEWLINE:
					{
					setState(143);
					match(NEWLINE);
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
	public static class RemoveModuleContext extends ParserRuleContext {
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
			setState(151);
			match(T__3);
			setState(152);
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
		public ModuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_module; }
	}

	public final ModuleContext module() throws RecognitionException {
		ModuleContext _localctx = new ModuleContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_module);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(158);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__9:
				{
				setState(154);
				drawModule();
				}
				break;
			case T__14:
				{
				setState(155);
				bodyModule();
				}
				break;
			case T__15:
				{
				setState(156);
				behaviorModule();
				}
				break;
			case T__16:
				{
				setState(157);
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
	public static class ObjectSetsContext extends ParserRuleContext {
		public ObjectWeaponSetContext objectWeaponSet() {
			return getRuleContext(ObjectWeaponSetContext.class,0);
		}
		public ObjectArmorSetContext objectArmorSet() {
			return getRuleContext(ObjectArmorSetContext.class,0);
		}
		public ObjectPrerequisiteContext objectPrerequisite() {
			return getRuleContext(ObjectPrerequisiteContext.class,0);
		}
		public ObjectSetsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectSets; }
	}

	public final ObjectSetsContext objectSets() throws RecognitionException {
		ObjectSetsContext _localctx = new ObjectSetsContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_objectSets);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(163);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__4:
				{
				setState(160);
				objectWeaponSet();
				}
				break;
			case T__5:
				{
				setState(161);
				objectArmorSet();
				}
				break;
			case T__6:
				{
				setState(162);
				objectPrerequisite();
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
	public static class ObjectWeaponSetContext extends ParserRuleContext {
		public List<TerminalNode> NEWLINE() { return getTokens(MapIniParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(MapIniParser.NEWLINE, i);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<ObjectWeaponSetPropertyContext> objectWeaponSetProperty() {
			return getRuleContexts(ObjectWeaponSetPropertyContext.class);
		}
		public ObjectWeaponSetPropertyContext objectWeaponSetProperty(int i) {
			return getRuleContext(ObjectWeaponSetPropertyContext.class,i);
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
			setState(165);
			match(T__4);
			setState(166);
			match(NEWLINE);
			setState(171);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID || _la==NEWLINE) {
				{
				setState(169);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case ID:
					{
					setState(167);
					objectWeaponSetProperty();
					}
					break;
				case NEWLINE:
					{
					setState(168);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(173);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(174);
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
	public static class ObjectWeaponSetPropertyContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Property_valuesContext property_values() {
			return getRuleContext(Property_valuesContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(MapIniParser.NEWLINE, 0); }
		public ObjectWeaponSetPropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectWeaponSetProperty; }
	}

	public final ObjectWeaponSetPropertyContext objectWeaponSetProperty() throws RecognitionException {
		ObjectWeaponSetPropertyContext _localctx = new ObjectWeaponSetPropertyContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_objectWeaponSetProperty);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(176);
			match(ID);
			setState(177);
			match(EQ);
			setState(178);
			property_values();
			setState(179);
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
	public static class ObjectArmorSetContext extends ParserRuleContext {
		public List<TerminalNode> NEWLINE() { return getTokens(MapIniParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(MapIniParser.NEWLINE, i);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<ObjectArmorSetPropertyContext> objectArmorSetProperty() {
			return getRuleContexts(ObjectArmorSetPropertyContext.class);
		}
		public ObjectArmorSetPropertyContext objectArmorSetProperty(int i) {
			return getRuleContext(ObjectArmorSetPropertyContext.class,i);
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
			setState(181);
			match(T__5);
			setState(182);
			match(NEWLINE);
			setState(187);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID || _la==NEWLINE) {
				{
				setState(185);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case ID:
					{
					setState(183);
					objectArmorSetProperty();
					}
					break;
				case NEWLINE:
					{
					setState(184);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
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
	public static class ObjectArmorSetPropertyContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Property_valuesContext property_values() {
			return getRuleContext(Property_valuesContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(MapIniParser.NEWLINE, 0); }
		public ObjectArmorSetPropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectArmorSetProperty; }
	}

	public final ObjectArmorSetPropertyContext objectArmorSetProperty() throws RecognitionException {
		ObjectArmorSetPropertyContext _localctx = new ObjectArmorSetPropertyContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_objectArmorSetProperty);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(192);
			match(ID);
			setState(193);
			match(EQ);
			setState(194);
			property_values();
			setState(195);
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
	public static class ObjectPrerequisiteContext extends ParserRuleContext {
		public List<TerminalNode> NEWLINE() { return getTokens(MapIniParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(MapIniParser.NEWLINE, i);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<ObjectPrerequisitePropertyContext> objectPrerequisiteProperty() {
			return getRuleContexts(ObjectPrerequisitePropertyContext.class);
		}
		public ObjectPrerequisitePropertyContext objectPrerequisiteProperty(int i) {
			return getRuleContext(ObjectPrerequisitePropertyContext.class,i);
		}
		public ObjectPrerequisiteContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectPrerequisite; }
	}

	public final ObjectPrerequisiteContext objectPrerequisite() throws RecognitionException {
		ObjectPrerequisiteContext _localctx = new ObjectPrerequisiteContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_objectPrerequisite);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(197);
			match(T__6);
			setState(198);
			match(NEWLINE);
			setState(203);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID || _la==NEWLINE) {
				{
				setState(201);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case ID:
					{
					setState(199);
					objectPrerequisiteProperty();
					}
					break;
				case NEWLINE:
					{
					setState(200);
					match(NEWLINE);
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
	public static class ObjectPrerequisitePropertyContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Property_valuesContext property_values() {
			return getRuleContext(Property_valuesContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(MapIniParser.NEWLINE, 0); }
		public ObjectPrerequisitePropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectPrerequisiteProperty; }
	}

	public final ObjectPrerequisitePropertyContext objectPrerequisiteProperty() throws RecognitionException {
		ObjectPrerequisitePropertyContext _localctx = new ObjectPrerequisitePropertyContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_objectPrerequisiteProperty);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(208);
			match(ID);
			setState(209);
			match(EQ);
			setState(210);
			property_values();
			setState(211);
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
	public static class ObjectUnitSpecificSoundsContext extends ParserRuleContext {
		public List<TerminalNode> NEWLINE() { return getTokens(MapIniParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(MapIniParser.NEWLINE, i);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<ObjectUnitSpecificSoundsPropertyContext> objectUnitSpecificSoundsProperty() {
			return getRuleContexts(ObjectUnitSpecificSoundsPropertyContext.class);
		}
		public ObjectUnitSpecificSoundsPropertyContext objectUnitSpecificSoundsProperty(int i) {
			return getRuleContext(ObjectUnitSpecificSoundsPropertyContext.class,i);
		}
		public ObjectUnitSpecificSoundsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectUnitSpecificSounds; }
	}

	public final ObjectUnitSpecificSoundsContext objectUnitSpecificSounds() throws RecognitionException {
		ObjectUnitSpecificSoundsContext _localctx = new ObjectUnitSpecificSoundsContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_objectUnitSpecificSounds);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(213);
			match(T__7);
			setState(214);
			match(NEWLINE);
			setState(219);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID || _la==NEWLINE) {
				{
				setState(217);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case ID:
					{
					setState(215);
					objectUnitSpecificSoundsProperty();
					}
					break;
				case NEWLINE:
					{
					setState(216);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(221);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(222);
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
	public static class ObjectUnitSpecificSoundsPropertyContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Property_valuesContext property_values() {
			return getRuleContext(Property_valuesContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(MapIniParser.NEWLINE, 0); }
		public ObjectUnitSpecificSoundsPropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectUnitSpecificSoundsProperty; }
	}

	public final ObjectUnitSpecificSoundsPropertyContext objectUnitSpecificSoundsProperty() throws RecognitionException {
		ObjectUnitSpecificSoundsPropertyContext _localctx = new ObjectUnitSpecificSoundsPropertyContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_objectUnitSpecificSoundsProperty);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(224);
			match(ID);
			setState(225);
			match(EQ);
			setState(226);
			property_values();
			setState(227);
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
	public static class ObjectUnitSpecificFXContext extends ParserRuleContext {
		public List<TerminalNode> NEWLINE() { return getTokens(MapIniParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(MapIniParser.NEWLINE, i);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<ObjectUnitSpecificFXPropertyContext> objectUnitSpecificFXProperty() {
			return getRuleContexts(ObjectUnitSpecificFXPropertyContext.class);
		}
		public ObjectUnitSpecificFXPropertyContext objectUnitSpecificFXProperty(int i) {
			return getRuleContext(ObjectUnitSpecificFXPropertyContext.class,i);
		}
		public ObjectUnitSpecificFXContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectUnitSpecificFX; }
	}

	public final ObjectUnitSpecificFXContext objectUnitSpecificFX() throws RecognitionException {
		ObjectUnitSpecificFXContext _localctx = new ObjectUnitSpecificFXContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_objectUnitSpecificFX);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(229);
			match(T__8);
			setState(230);
			match(NEWLINE);
			setState(235);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID || _la==NEWLINE) {
				{
				setState(233);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case ID:
					{
					setState(231);
					objectUnitSpecificFXProperty();
					}
					break;
				case NEWLINE:
					{
					setState(232);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(237);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(238);
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
	public static class ObjectUnitSpecificFXPropertyContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Property_valuesContext property_values() {
			return getRuleContext(Property_valuesContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(MapIniParser.NEWLINE, 0); }
		public ObjectUnitSpecificFXPropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectUnitSpecificFXProperty; }
	}

	public final ObjectUnitSpecificFXPropertyContext objectUnitSpecificFXProperty() throws RecognitionException {
		ObjectUnitSpecificFXPropertyContext _localctx = new ObjectUnitSpecificFXPropertyContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_objectUnitSpecificFXProperty);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(240);
			match(ID);
			setState(241);
			match(EQ);
			setState(242);
			property_values();
			setState(243);
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
	public static class DrawModuleContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public DrawModule_typeContext drawModule_type() {
			return getRuleContext(DrawModule_typeContext.class,0);
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
		public List<DrawModulePropertyContext> drawModuleProperty() {
			return getRuleContexts(DrawModulePropertyContext.class);
		}
		public DrawModulePropertyContext drawModuleProperty(int i) {
			return getRuleContext(DrawModulePropertyContext.class,i);
		}
		public DrawModuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_drawModule; }
	}

	public final DrawModuleContext drawModule() throws RecognitionException {
		DrawModuleContext _localctx = new DrawModuleContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_drawModule);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(245);
			match(T__9);
			setState(246);
			match(EQ);
			setState(247);
			drawModule_type();
			setState(248);
			moduleTag_value();
			setState(249);
			match(NEWLINE);
			setState(256);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 25196544L) != 0)) {
				{
				setState(254);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__10:
				case T__11:
				case T__12:
					{
					setState(250);
					conditionState();
					}
					break;
				case T__13:
					{
					setState(251);
					aliasCondition();
					}
					break;
				case ID:
					{
					setState(252);
					drawModuleProperty();
					}
					break;
				case NEWLINE:
					{
					setState(253);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(258);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(259);
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
		public DefaultConditionStateBlockContext defaultConditionStateBlock() {
			return getRuleContext(DefaultConditionStateBlockContext.class,0);
		}
		public ConditionStateBlockContext conditionStateBlock() {
			return getRuleContext(ConditionStateBlockContext.class,0);
		}
		public TransitionStateBlockContext transitionStateBlock() {
			return getRuleContext(TransitionStateBlockContext.class,0);
		}
		public ConditionStateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conditionState; }
	}

	public final ConditionStateContext conditionState() throws RecognitionException {
		ConditionStateContext _localctx = new ConditionStateContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_conditionState);
		try {
			setState(264);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__10:
				enterOuterAlt(_localctx, 1);
				{
				setState(261);
				defaultConditionStateBlock();
				}
				break;
			case T__11:
				enterOuterAlt(_localctx, 2);
				{
				setState(262);
				conditionStateBlock();
				}
				break;
			case T__12:
				enterOuterAlt(_localctx, 3);
				{
				setState(263);
				transitionStateBlock();
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
	public static class DefaultConditionStateBlockContext extends ParserRuleContext {
		public List<TerminalNode> NEWLINE() { return getTokens(MapIniParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(MapIniParser.NEWLINE, i);
		}
		public List<ConditionStatePropertyContext> conditionStateProperty() {
			return getRuleContexts(ConditionStatePropertyContext.class);
		}
		public ConditionStatePropertyContext conditionStateProperty(int i) {
			return getRuleContext(ConditionStatePropertyContext.class,i);
		}
		public DefaultConditionStateBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_defaultConditionStateBlock; }
	}

	public final DefaultConditionStateBlockContext defaultConditionStateBlock() throws RecognitionException {
		DefaultConditionStateBlockContext _localctx = new DefaultConditionStateBlockContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_defaultConditionStateBlock);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(266);
			match(T__10);
			setState(267);
			match(NEWLINE);
			setState(272);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,25,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					setState(270);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case ID:
						{
						setState(268);
						conditionStateProperty();
						}
						break;
					case NEWLINE:
						{
						setState(269);
						match(NEWLINE);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					} 
				}
				setState(274);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,25,_ctx);
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
	public static class ConditionStateBlockContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public ConditionState_valuesContext conditionState_values() {
			return getRuleContext(ConditionState_valuesContext.class,0);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(MapIniParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(MapIniParser.NEWLINE, i);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<ConditionStatePropertyContext> conditionStateProperty() {
			return getRuleContexts(ConditionStatePropertyContext.class);
		}
		public ConditionStatePropertyContext conditionStateProperty(int i) {
			return getRuleContext(ConditionStatePropertyContext.class,i);
		}
		public ConditionStateBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conditionStateBlock; }
	}

	public final ConditionStateBlockContext conditionStateBlock() throws RecognitionException {
		ConditionStateBlockContext _localctx = new ConditionStateBlockContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_conditionStateBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(275);
			match(T__11);
			setState(276);
			match(EQ);
			setState(277);
			conditionState_values();
			setState(278);
			match(NEWLINE);
			setState(283);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID || _la==NEWLINE) {
				{
				setState(281);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case ID:
					{
					setState(279);
					conditionStateProperty();
					}
					break;
				case NEWLINE:
					{
					setState(280);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(285);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(286);
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
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public ConditionState_valuesContext conditionState_values() {
			return getRuleContext(ConditionState_valuesContext.class,0);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(MapIniParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(MapIniParser.NEWLINE, i);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<ConditionStatePropertyContext> conditionStateProperty() {
			return getRuleContexts(ConditionStatePropertyContext.class);
		}
		public ConditionStatePropertyContext conditionStateProperty(int i) {
			return getRuleContext(ConditionStatePropertyContext.class,i);
		}
		public TransitionStateBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_transitionStateBlock; }
	}

	public final TransitionStateBlockContext transitionStateBlock() throws RecognitionException {
		TransitionStateBlockContext _localctx = new TransitionStateBlockContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_transitionStateBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(288);
			match(T__12);
			setState(289);
			match(EQ);
			setState(290);
			conditionState_values();
			setState(291);
			match(NEWLINE);
			setState(296);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID || _la==NEWLINE) {
				{
				setState(294);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case ID:
					{
					setState(292);
					conditionStateProperty();
					}
					break;
				case NEWLINE:
					{
					setState(293);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(298);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(299);
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
		public AliasConditionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_aliasCondition; }
	}

	public final AliasConditionContext aliasCondition() throws RecognitionException {
		AliasConditionContext _localctx = new AliasConditionContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_aliasCondition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(301);
			match(T__13);
			setState(302);
			match(EQ);
			setState(303);
			conditionState_values();
			setState(304);
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
		public List<BodyModulePropertyContext> bodyModuleProperty() {
			return getRuleContexts(BodyModulePropertyContext.class);
		}
		public BodyModulePropertyContext bodyModuleProperty(int i) {
			return getRuleContext(BodyModulePropertyContext.class,i);
		}
		public BodyModuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bodyModule; }
	}

	public final BodyModuleContext bodyModule() throws RecognitionException {
		BodyModuleContext _localctx = new BodyModuleContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_bodyModule);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(306);
			match(T__14);
			setState(307);
			match(EQ);
			setState(308);
			bodyModule_type();
			setState(309);
			moduleTag_value();
			setState(310);
			match(NEWLINE);
			setState(315);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID || _la==NEWLINE) {
				{
				setState(313);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case ID:
					{
					setState(311);
					bodyModuleProperty();
					}
					break;
				case NEWLINE:
					{
					setState(312);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(317);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(318);
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
	public static class BodyModulePropertyContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Property_valuesContext property_values() {
			return getRuleContext(Property_valuesContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(MapIniParser.NEWLINE, 0); }
		public BodyModulePropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bodyModuleProperty; }
	}

	public final BodyModulePropertyContext bodyModuleProperty() throws RecognitionException {
		BodyModulePropertyContext _localctx = new BodyModulePropertyContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_bodyModuleProperty);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(320);
			match(ID);
			setState(321);
			match(EQ);
			setState(322);
			property_values();
			setState(323);
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
	public static class BehaviorModuleContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public BehaviorModule_typeContext behaviorModule_type() {
			return getRuleContext(BehaviorModule_typeContext.class,0);
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
		public List<BehaviorModulePropertyContext> behaviorModuleProperty() {
			return getRuleContexts(BehaviorModulePropertyContext.class);
		}
		public BehaviorModulePropertyContext behaviorModuleProperty(int i) {
			return getRuleContext(BehaviorModulePropertyContext.class,i);
		}
		public BehaviorModuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_behaviorModule; }
	}

	public final BehaviorModuleContext behaviorModule() throws RecognitionException {
		BehaviorModuleContext _localctx = new BehaviorModuleContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_behaviorModule);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(325);
			match(T__15);
			setState(326);
			match(EQ);
			setState(327);
			behaviorModule_type();
			setState(328);
			moduleTag_value();
			setState(329);
			match(NEWLINE);
			setState(334);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID || _la==NEWLINE) {
				{
				setState(332);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case ID:
					{
					setState(330);
					behaviorModuleProperty();
					}
					break;
				case NEWLINE:
					{
					setState(331);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(336);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(337);
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
	public static class BehaviorModulePropertyContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Property_valuesContext property_values() {
			return getRuleContext(Property_valuesContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(MapIniParser.NEWLINE, 0); }
		public BehaviorModulePropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_behaviorModuleProperty; }
	}

	public final BehaviorModulePropertyContext behaviorModuleProperty() throws RecognitionException {
		BehaviorModulePropertyContext _localctx = new BehaviorModulePropertyContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_behaviorModuleProperty);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(339);
			match(ID);
			setState(340);
			match(EQ);
			setState(341);
			property_values();
			setState(342);
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
	public static class ClientModuleContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public ClientModule_typeContext clientModule_type() {
			return getRuleContext(ClientModule_typeContext.class,0);
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
		public List<ClientModulePropertyContext> clientModuleProperty() {
			return getRuleContexts(ClientModulePropertyContext.class);
		}
		public ClientModulePropertyContext clientModuleProperty(int i) {
			return getRuleContext(ClientModulePropertyContext.class,i);
		}
		public ClientModuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_clientModule; }
	}

	public final ClientModuleContext clientModule() throws RecognitionException {
		ClientModuleContext _localctx = new ClientModuleContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_clientModule);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(344);
			match(T__16);
			setState(345);
			match(EQ);
			setState(346);
			clientModule_type();
			setState(347);
			moduleTag_value();
			setState(348);
			match(NEWLINE);
			setState(353);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID || _la==NEWLINE) {
				{
				setState(351);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case ID:
					{
					setState(349);
					clientModuleProperty();
					}
					break;
				case NEWLINE:
					{
					setState(350);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(355);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(356);
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
	public static class ClientModulePropertyContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Property_valuesContext property_values() {
			return getRuleContext(Property_valuesContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(MapIniParser.NEWLINE, 0); }
		public ClientModulePropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_clientModuleProperty; }
	}

	public final ClientModulePropertyContext clientModuleProperty() throws RecognitionException {
		ClientModulePropertyContext _localctx = new ClientModulePropertyContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_clientModuleProperty);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(358);
			match(ID);
			setState(359);
			match(EQ);
			setState(360);
			property_values();
			setState(361);
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
	public static class ObjectPropertyContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Property_valuesContext property_values() {
			return getRuleContext(Property_valuesContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(MapIniParser.NEWLINE, 0); }
		public ObjectPropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectProperty; }
	}

	public final ObjectPropertyContext objectProperty() throws RecognitionException {
		ObjectPropertyContext _localctx = new ObjectPropertyContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_objectProperty);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(363);
			match(ID);
			setState(364);
			match(EQ);
			setState(365);
			property_values();
			setState(366);
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
	public static class DrawModulePropertyContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Property_valuesContext property_values() {
			return getRuleContext(Property_valuesContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(MapIniParser.NEWLINE, 0); }
		public DrawModulePropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_drawModuleProperty; }
	}

	public final DrawModulePropertyContext drawModuleProperty() throws RecognitionException {
		DrawModulePropertyContext _localctx = new DrawModulePropertyContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_drawModuleProperty);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(368);
			match(ID);
			setState(369);
			match(EQ);
			setState(370);
			property_values();
			setState(371);
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
	public static class ConditionStatePropertyContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Property_valuesContext property_values() {
			return getRuleContext(Property_valuesContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(MapIniParser.NEWLINE, 0); }
		public ConditionStatePropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conditionStateProperty; }
	}

	public final ConditionStatePropertyContext conditionStateProperty() throws RecognitionException {
		ConditionStatePropertyContext _localctx = new ConditionStatePropertyContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_conditionStateProperty);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(373);
			match(ID);
			setState(374);
			match(EQ);
			setState(375);
			property_values();
			setState(376);
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
	public static class PropertyContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
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
		enterRule(_localctx, 68, RULE_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(378);
			match(ID);
			setState(379);
			match(EQ);
			setState(380);
			property_values();
			setState(381);
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
		enterRule(_localctx, 70, RULE_drawModule_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(383);
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
		public ConditionState_valuesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conditionState_values; }
	}

	public final ConditionState_valuesContext conditionState_values() throws RecognitionException {
		ConditionState_valuesContext _localctx = new ConditionState_valuesContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_conditionState_values);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(385);
			match(ID);
			setState(389);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(386);
				match(ID);
				}
				}
				setState(391);
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
		enterRule(_localctx, 74, RULE_bodyModule_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(392);
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
		enterRule(_localctx, 76, RULE_behaviorModule_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(394);
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
		enterRule(_localctx, 78, RULE_clientModule_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(396);
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
		enterRule(_localctx, 80, RULE_moduleTag_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(398);
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
		enterRule(_localctx, 82, RULE_mappedImage_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(400);
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
		enterRule(_localctx, 84, RULE_object_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(402);
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
	public static class Locomotor_modifierContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Locomotor_modifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_locomotor_modifier; }
	}

	public final Locomotor_modifierContext locomotor_modifier() throws RecognitionException {
		Locomotor_modifierContext _localctx = new Locomotor_modifierContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_locomotor_modifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(404);
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
	public static class Property_valueContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Property_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_property_value; }
	}

	public final Property_valueContext property_value() throws RecognitionException {
		Property_valueContext _localctx = new Property_valueContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_property_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(406);
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
		public Property_valuesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_property_values; }
	}

	public final Property_valuesContext property_values() throws RecognitionException {
		Property_valuesContext _localctx = new Property_valuesContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_property_values);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(408);
			match(ID);
			setState(412);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(409);
				match(ID);
				}
				}
				setState(414);
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
		public EndContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_end; }
	}

	public final EndContext end() throws RecognitionException {
		EndContext _localctx = new EndContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_end);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(415);
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

	public static final String _serializedATN =
		"\u0004\u0001\u001a\u01a2\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007"+
		"\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007"+
		"\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007"+
		"\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002\u0018\u0007"+
		"\u0018\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a\u0002\u001b\u0007"+
		"\u001b\u0002\u001c\u0007\u001c\u0002\u001d\u0007\u001d\u0002\u001e\u0007"+
		"\u001e\u0002\u001f\u0007\u001f\u0002 \u0007 \u0002!\u0007!\u0002\"\u0007"+
		"\"\u0002#\u0007#\u0002$\u0007$\u0002%\u0007%\u0002&\u0007&\u0002\'\u0007"+
		"\'\u0002(\u0007(\u0002)\u0007)\u0002*\u0007*\u0002+\u0007+\u0002,\u0007"+
		",\u0002-\u0007-\u0002.\u0007.\u0001\u0000\u0001\u0000\u0005\u0000a\b\u0000"+
		"\n\u0000\f\u0000d\t\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001"+
		"\u0003\u0001j\b\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0005\u0002p\b\u0002\n\u0002\f\u0002s\t\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0005\u0003\u0081\b\u0003"+
		"\n\u0003\f\u0003\u0084\t\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001"+
		"\u0004\u0003\u0004\u008a\b\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0005\u0005\u0091\b\u0005\n\u0005\f\u0005\u0094\t\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0003\u0007\u009f\b\u0007\u0001\b"+
		"\u0001\b\u0001\b\u0003\b\u00a4\b\b\u0001\t\u0001\t\u0001\t\u0001\t\u0005"+
		"\t\u00aa\b\t\n\t\f\t\u00ad\t\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n"+
		"\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0005"+
		"\u000b\u00ba\b\u000b\n\u000b\f\u000b\u00bd\t\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001"+
		"\r\u0005\r\u00ca\b\r\n\r\f\r\u00cd\t\r\u0001\r\u0001\r\u0001\u000e\u0001"+
		"\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001"+
		"\u000f\u0001\u000f\u0005\u000f\u00da\b\u000f\n\u000f\f\u000f\u00dd\t\u000f"+
		"\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0005\u0011"+
		"\u00ea\b\u0011\n\u0011\f\u0011\u00ed\t\u0011\u0001\u0011\u0001\u0011\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0013\u0001"+
		"\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001"+
		"\u0013\u0001\u0013\u0005\u0013\u00ff\b\u0013\n\u0013\f\u0013\u0102\t\u0013"+
		"\u0001\u0013\u0001\u0013\u0001\u0014\u0001\u0014\u0001\u0014\u0003\u0014"+
		"\u0109\b\u0014\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0005\u0015"+
		"\u010f\b\u0015\n\u0015\f\u0015\u0112\t\u0015\u0001\u0016\u0001\u0016\u0001"+
		"\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0005\u0016\u011a\b\u0016\n"+
		"\u0016\f\u0016\u011d\t\u0016\u0001\u0016\u0001\u0016\u0001\u0017\u0001"+
		"\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0005\u0017\u0127"+
		"\b\u0017\n\u0017\f\u0017\u012a\t\u0017\u0001\u0017\u0001\u0017\u0001\u0018"+
		"\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0019\u0001\u0019"+
		"\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0005\u0019"+
		"\u013a\b\u0019\n\u0019\f\u0019\u013d\t\u0019\u0001\u0019\u0001\u0019\u0001"+
		"\u001a\u0001\u001a\u0001\u001a\u0001\u001a\u0001\u001a\u0001\u001b\u0001"+
		"\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0005"+
		"\u001b\u014d\b\u001b\n\u001b\f\u001b\u0150\t\u001b\u0001\u001b\u0001\u001b"+
		"\u0001\u001c\u0001\u001c\u0001\u001c\u0001\u001c\u0001\u001c\u0001\u001d"+
		"\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001d"+
		"\u0005\u001d\u0160\b\u001d\n\u001d\f\u001d\u0163\t\u001d\u0001\u001d\u0001"+
		"\u001d\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0001"+
		"\u001f\u0001\u001f\u0001\u001f\u0001\u001f\u0001\u001f\u0001 \u0001 \u0001"+
		" \u0001 \u0001 \u0001!\u0001!\u0001!\u0001!\u0001!\u0001\"\u0001\"\u0001"+
		"\"\u0001\"\u0001\"\u0001#\u0001#\u0001$\u0001$\u0005$\u0184\b$\n$\f$\u0187"+
		"\t$\u0001%\u0001%\u0001&\u0001&\u0001\'\u0001\'\u0001(\u0001(\u0001)\u0001"+
		")\u0001*\u0001*\u0001+\u0001+\u0001,\u0001,\u0001-\u0001-\u0005-\u019b"+
		"\b-\n-\f-\u019e\t-\u0001.\u0001.\u0001.\u0000\u0000/\u0000\u0002\u0004"+
		"\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \""+
		"$&(*,.02468:<>@BDFHJLNPRTVXZ\\\u0000\u0001\u0001\u0000\u0012\u0014\u01a4"+
		"\u0000b\u0001\u0000\u0000\u0000\u0002i\u0001\u0000\u0000\u0000\u0004k"+
		"\u0001\u0000\u0000\u0000\u0006v\u0001\u0000\u0000\u0000\b\u0089\u0001"+
		"\u0000\u0000\u0000\n\u008b\u0001\u0000\u0000\u0000\f\u0097\u0001\u0000"+
		"\u0000\u0000\u000e\u009e\u0001\u0000\u0000\u0000\u0010\u00a3\u0001\u0000"+
		"\u0000\u0000\u0012\u00a5\u0001\u0000\u0000\u0000\u0014\u00b0\u0001\u0000"+
		"\u0000\u0000\u0016\u00b5\u0001\u0000\u0000\u0000\u0018\u00c0\u0001\u0000"+
		"\u0000\u0000\u001a\u00c5\u0001\u0000\u0000\u0000\u001c\u00d0\u0001\u0000"+
		"\u0000\u0000\u001e\u00d5\u0001\u0000\u0000\u0000 \u00e0\u0001\u0000\u0000"+
		"\u0000\"\u00e5\u0001\u0000\u0000\u0000$\u00f0\u0001\u0000\u0000\u0000"+
		"&\u00f5\u0001\u0000\u0000\u0000(\u0108\u0001\u0000\u0000\u0000*\u010a"+
		"\u0001\u0000\u0000\u0000,\u0113\u0001\u0000\u0000\u0000.\u0120\u0001\u0000"+
		"\u0000\u00000\u012d\u0001\u0000\u0000\u00002\u0132\u0001\u0000\u0000\u0000"+
		"4\u0140\u0001\u0000\u0000\u00006\u0145\u0001\u0000\u0000\u00008\u0153"+
		"\u0001\u0000\u0000\u0000:\u0158\u0001\u0000\u0000\u0000<\u0166\u0001\u0000"+
		"\u0000\u0000>\u016b\u0001\u0000\u0000\u0000@\u0170\u0001\u0000\u0000\u0000"+
		"B\u0175\u0001\u0000\u0000\u0000D\u017a\u0001\u0000\u0000\u0000F\u017f"+
		"\u0001\u0000\u0000\u0000H\u0181\u0001\u0000\u0000\u0000J\u0188\u0001\u0000"+
		"\u0000\u0000L\u018a\u0001\u0000\u0000\u0000N\u018c\u0001\u0000\u0000\u0000"+
		"P\u018e\u0001\u0000\u0000\u0000R\u0190\u0001\u0000\u0000\u0000T\u0192"+
		"\u0001\u0000\u0000\u0000V\u0194\u0001\u0000\u0000\u0000X\u0196\u0001\u0000"+
		"\u0000\u0000Z\u0198\u0001\u0000\u0000\u0000\\\u019f\u0001\u0000\u0000"+
		"\u0000^a\u0003\u0002\u0001\u0000_a\u0005\u0018\u0000\u0000`^\u0001\u0000"+
		"\u0000\u0000`_\u0001\u0000\u0000\u0000ad\u0001\u0000\u0000\u0000b`\u0001"+
		"\u0000\u0000\u0000bc\u0001\u0000\u0000\u0000ce\u0001\u0000\u0000\u0000"+
		"db\u0001\u0000\u0000\u0000ef\u0005\u0000\u0000\u0001f\u0001\u0001\u0000"+
		"\u0000\u0000gj\u0003\u0004\u0002\u0000hj\u0003\u0006\u0003\u0000ig\u0001"+
		"\u0000\u0000\u0000ih\u0001\u0000\u0000\u0000j\u0003\u0001\u0000\u0000"+
		"\u0000kl\u0005\u0001\u0000\u0000lm\u0003R)\u0000mq\u0005\u0018\u0000\u0000"+
		"np\u0003D\"\u0000on\u0001\u0000\u0000\u0000ps\u0001\u0000\u0000\u0000"+
		"qo\u0001\u0000\u0000\u0000qr\u0001\u0000\u0000\u0000rt\u0001\u0000\u0000"+
		"\u0000sq\u0001\u0000\u0000\u0000tu\u0003\\.\u0000u\u0005\u0001\u0000\u0000"+
		"\u0000vw\u0005\u0002\u0000\u0000wx\u0003T*\u0000x\u0082\u0005\u0018\u0000"+
		"\u0000y\u0081\u0003\b\u0004\u0000z\u0081\u0003\u000e\u0007\u0000{\u0081"+
		"\u0003>\u001f\u0000|\u0081\u0003\u0010\b\u0000}\u0081\u0003\u001e\u000f"+
		"\u0000~\u0081\u0003\"\u0011\u0000\u007f\u0081\u0005\u0018\u0000\u0000"+
		"\u0080y\u0001\u0000\u0000\u0000\u0080z\u0001\u0000\u0000\u0000\u0080{"+
		"\u0001\u0000\u0000\u0000\u0080|\u0001\u0000\u0000\u0000\u0080}\u0001\u0000"+
		"\u0000\u0000\u0080~\u0001\u0000\u0000\u0000\u0080\u007f\u0001\u0000\u0000"+
		"\u0000\u0081\u0084\u0001\u0000\u0000\u0000\u0082\u0080\u0001\u0000\u0000"+
		"\u0000\u0082\u0083\u0001\u0000\u0000\u0000\u0083\u0085\u0001\u0000\u0000"+
		"\u0000\u0084\u0082\u0001\u0000\u0000\u0000\u0085\u0086\u0003\\.\u0000"+
		"\u0086\u0007\u0001\u0000\u0000\u0000\u0087\u008a\u0003\n\u0005\u0000\u0088"+
		"\u008a\u0003\f\u0006\u0000\u0089\u0087\u0001\u0000\u0000\u0000\u0089\u0088"+
		"\u0001\u0000\u0000\u0000\u008a\t\u0001\u0000\u0000\u0000\u008b\u008c\u0005"+
		"\u0003\u0000\u0000\u008c\u0092\u0005\u0018\u0000\u0000\u008d\u0091\u0003"+
		"\u000e\u0007\u0000\u008e\u0091\u0003>\u001f\u0000\u008f\u0091\u0005\u0018"+
		"\u0000\u0000\u0090\u008d\u0001\u0000\u0000\u0000\u0090\u008e\u0001\u0000"+
		"\u0000\u0000\u0090\u008f\u0001\u0000\u0000\u0000\u0091\u0094\u0001\u0000"+
		"\u0000\u0000\u0092\u0090\u0001\u0000\u0000\u0000\u0092\u0093\u0001\u0000"+
		"\u0000\u0000\u0093\u0095\u0001\u0000\u0000\u0000\u0094\u0092\u0001\u0000"+
		"\u0000\u0000\u0095\u0096\u0003\\.\u0000\u0096\u000b\u0001\u0000\u0000"+
		"\u0000\u0097\u0098\u0005\u0004\u0000\u0000\u0098\u0099\u0003P(\u0000\u0099"+
		"\r\u0001\u0000\u0000\u0000\u009a\u009f\u0003&\u0013\u0000\u009b\u009f"+
		"\u00032\u0019\u0000\u009c\u009f\u00036\u001b\u0000\u009d\u009f\u0003:"+
		"\u001d\u0000\u009e\u009a\u0001\u0000\u0000\u0000\u009e\u009b\u0001\u0000"+
		"\u0000\u0000\u009e\u009c\u0001\u0000\u0000\u0000\u009e\u009d\u0001\u0000"+
		"\u0000\u0000\u009f\u000f\u0001\u0000\u0000\u0000\u00a0\u00a4\u0003\u0012"+
		"\t\u0000\u00a1\u00a4\u0003\u0016\u000b\u0000\u00a2\u00a4\u0003\u001a\r"+
		"\u0000\u00a3\u00a0\u0001\u0000\u0000\u0000\u00a3\u00a1\u0001\u0000\u0000"+
		"\u0000\u00a3\u00a2\u0001\u0000\u0000\u0000\u00a4\u0011\u0001\u0000\u0000"+
		"\u0000\u00a5\u00a6\u0005\u0005\u0000\u0000\u00a6\u00ab\u0005\u0018\u0000"+
		"\u0000\u00a7\u00aa\u0003\u0014\n\u0000\u00a8\u00aa\u0005\u0018\u0000\u0000"+
		"\u00a9\u00a7\u0001\u0000\u0000\u0000\u00a9\u00a8\u0001\u0000\u0000\u0000"+
		"\u00aa\u00ad\u0001\u0000\u0000\u0000\u00ab\u00a9\u0001\u0000\u0000\u0000"+
		"\u00ab\u00ac\u0001\u0000\u0000\u0000\u00ac\u00ae\u0001\u0000\u0000\u0000"+
		"\u00ad\u00ab\u0001\u0000\u0000\u0000\u00ae\u00af\u0003\\.\u0000\u00af"+
		"\u0013\u0001\u0000\u0000\u0000\u00b0\u00b1\u0005\u0017\u0000\u0000\u00b1"+
		"\u00b2\u0005\u0015\u0000\u0000\u00b2\u00b3\u0003Z-\u0000\u00b3\u00b4\u0005"+
		"\u0018\u0000\u0000\u00b4\u0015\u0001\u0000\u0000\u0000\u00b5\u00b6\u0005"+
		"\u0006\u0000\u0000\u00b6\u00bb\u0005\u0018\u0000\u0000\u00b7\u00ba\u0003"+
		"\u0018\f\u0000\u00b8\u00ba\u0005\u0018\u0000\u0000\u00b9\u00b7\u0001\u0000"+
		"\u0000\u0000\u00b9\u00b8\u0001\u0000\u0000\u0000\u00ba\u00bd\u0001\u0000"+
		"\u0000\u0000\u00bb\u00b9\u0001\u0000\u0000\u0000\u00bb\u00bc\u0001\u0000"+
		"\u0000\u0000\u00bc\u00be\u0001\u0000\u0000\u0000\u00bd\u00bb\u0001\u0000"+
		"\u0000\u0000\u00be\u00bf\u0003\\.\u0000\u00bf\u0017\u0001\u0000\u0000"+
		"\u0000\u00c0\u00c1\u0005\u0017\u0000\u0000\u00c1\u00c2\u0005\u0015\u0000"+
		"\u0000\u00c2\u00c3\u0003Z-\u0000\u00c3\u00c4\u0005\u0018\u0000\u0000\u00c4"+
		"\u0019\u0001\u0000\u0000\u0000\u00c5\u00c6\u0005\u0007\u0000\u0000\u00c6"+
		"\u00cb\u0005\u0018\u0000\u0000\u00c7\u00ca\u0003\u001c\u000e\u0000\u00c8"+
		"\u00ca\u0005\u0018\u0000\u0000\u00c9\u00c7\u0001\u0000\u0000\u0000\u00c9"+
		"\u00c8\u0001\u0000\u0000\u0000\u00ca\u00cd\u0001\u0000\u0000\u0000\u00cb"+
		"\u00c9\u0001\u0000\u0000\u0000\u00cb\u00cc\u0001\u0000\u0000\u0000\u00cc"+
		"\u00ce\u0001\u0000\u0000\u0000\u00cd\u00cb\u0001\u0000\u0000\u0000\u00ce"+
		"\u00cf\u0003\\.\u0000\u00cf\u001b\u0001\u0000\u0000\u0000\u00d0\u00d1"+
		"\u0005\u0017\u0000\u0000\u00d1\u00d2\u0005\u0015\u0000\u0000\u00d2\u00d3"+
		"\u0003Z-\u0000\u00d3\u00d4\u0005\u0018\u0000\u0000\u00d4\u001d\u0001\u0000"+
		"\u0000\u0000\u00d5\u00d6\u0005\b\u0000\u0000\u00d6\u00db\u0005\u0018\u0000"+
		"\u0000\u00d7\u00da\u0003 \u0010\u0000\u00d8\u00da\u0005\u0018\u0000\u0000"+
		"\u00d9\u00d7\u0001\u0000\u0000\u0000\u00d9\u00d8\u0001\u0000\u0000\u0000"+
		"\u00da\u00dd\u0001\u0000\u0000\u0000\u00db\u00d9\u0001\u0000\u0000\u0000"+
		"\u00db\u00dc\u0001\u0000\u0000\u0000\u00dc\u00de\u0001\u0000\u0000\u0000"+
		"\u00dd\u00db\u0001\u0000\u0000\u0000\u00de\u00df\u0003\\.\u0000\u00df"+
		"\u001f\u0001\u0000\u0000\u0000\u00e0\u00e1\u0005\u0017\u0000\u0000\u00e1"+
		"\u00e2\u0005\u0015\u0000\u0000\u00e2\u00e3\u0003Z-\u0000\u00e3\u00e4\u0005"+
		"\u0018\u0000\u0000\u00e4!\u0001\u0000\u0000\u0000\u00e5\u00e6\u0005\t"+
		"\u0000\u0000\u00e6\u00eb\u0005\u0018\u0000\u0000\u00e7\u00ea\u0003$\u0012"+
		"\u0000\u00e8\u00ea\u0005\u0018\u0000\u0000\u00e9\u00e7\u0001\u0000\u0000"+
		"\u0000\u00e9\u00e8\u0001\u0000\u0000\u0000\u00ea\u00ed\u0001\u0000\u0000"+
		"\u0000\u00eb\u00e9\u0001\u0000\u0000\u0000\u00eb\u00ec\u0001\u0000\u0000"+
		"\u0000\u00ec\u00ee\u0001\u0000\u0000\u0000\u00ed\u00eb\u0001\u0000\u0000"+
		"\u0000\u00ee\u00ef\u0003\\.\u0000\u00ef#\u0001\u0000\u0000\u0000\u00f0"+
		"\u00f1\u0005\u0017\u0000\u0000\u00f1\u00f2\u0005\u0015\u0000\u0000\u00f2"+
		"\u00f3\u0003Z-\u0000\u00f3\u00f4\u0005\u0018\u0000\u0000\u00f4%\u0001"+
		"\u0000\u0000\u0000\u00f5\u00f6\u0005\n\u0000\u0000\u00f6\u00f7\u0005\u0015"+
		"\u0000\u0000\u00f7\u00f8\u0003F#\u0000\u00f8\u00f9\u0003P(\u0000\u00f9"+
		"\u0100\u0005\u0018\u0000\u0000\u00fa\u00ff\u0003(\u0014\u0000\u00fb\u00ff"+
		"\u00030\u0018\u0000\u00fc\u00ff\u0003@ \u0000\u00fd\u00ff\u0005\u0018"+
		"\u0000\u0000\u00fe\u00fa\u0001\u0000\u0000\u0000\u00fe\u00fb\u0001\u0000"+
		"\u0000\u0000\u00fe\u00fc\u0001\u0000\u0000\u0000\u00fe\u00fd\u0001\u0000"+
		"\u0000\u0000\u00ff\u0102\u0001\u0000\u0000\u0000\u0100\u00fe\u0001\u0000"+
		"\u0000\u0000\u0100\u0101\u0001\u0000\u0000\u0000\u0101\u0103\u0001\u0000"+
		"\u0000\u0000\u0102\u0100\u0001\u0000\u0000\u0000\u0103\u0104\u0003\\."+
		"\u0000\u0104\'\u0001\u0000\u0000\u0000\u0105\u0109\u0003*\u0015\u0000"+
		"\u0106\u0109\u0003,\u0016\u0000\u0107\u0109\u0003.\u0017\u0000\u0108\u0105"+
		"\u0001\u0000\u0000\u0000\u0108\u0106\u0001\u0000\u0000\u0000\u0108\u0107"+
		"\u0001\u0000\u0000\u0000\u0109)\u0001\u0000\u0000\u0000\u010a\u010b\u0005"+
		"\u000b\u0000\u0000\u010b\u0110\u0005\u0018\u0000\u0000\u010c\u010f\u0003"+
		"B!\u0000\u010d\u010f\u0005\u0018\u0000\u0000\u010e\u010c\u0001\u0000\u0000"+
		"\u0000\u010e\u010d\u0001\u0000\u0000\u0000\u010f\u0112\u0001\u0000\u0000"+
		"\u0000\u0110\u010e\u0001\u0000\u0000\u0000\u0110\u0111\u0001\u0000\u0000"+
		"\u0000\u0111+\u0001\u0000\u0000\u0000\u0112\u0110\u0001\u0000\u0000\u0000"+
		"\u0113\u0114\u0005\f\u0000\u0000\u0114\u0115\u0005\u0015\u0000\u0000\u0115"+
		"\u0116\u0003H$\u0000\u0116\u011b\u0005\u0018\u0000\u0000\u0117\u011a\u0003"+
		"B!\u0000\u0118\u011a\u0005\u0018\u0000\u0000\u0119\u0117\u0001\u0000\u0000"+
		"\u0000\u0119\u0118\u0001\u0000\u0000\u0000\u011a\u011d\u0001\u0000\u0000"+
		"\u0000\u011b\u0119\u0001\u0000\u0000\u0000\u011b\u011c\u0001\u0000\u0000"+
		"\u0000\u011c\u011e\u0001\u0000\u0000\u0000\u011d\u011b\u0001\u0000\u0000"+
		"\u0000\u011e\u011f\u0003\\.\u0000\u011f-\u0001\u0000\u0000\u0000\u0120"+
		"\u0121\u0005\r\u0000\u0000\u0121\u0122\u0005\u0015\u0000\u0000\u0122\u0123"+
		"\u0003H$\u0000\u0123\u0128\u0005\u0018\u0000\u0000\u0124\u0127\u0003B"+
		"!\u0000\u0125\u0127\u0005\u0018\u0000\u0000\u0126\u0124\u0001\u0000\u0000"+
		"\u0000\u0126\u0125\u0001\u0000\u0000\u0000\u0127\u012a\u0001\u0000\u0000"+
		"\u0000\u0128\u0126\u0001\u0000\u0000\u0000\u0128\u0129\u0001\u0000\u0000"+
		"\u0000\u0129\u012b\u0001\u0000\u0000\u0000\u012a\u0128\u0001\u0000\u0000"+
		"\u0000\u012b\u012c\u0003\\.\u0000\u012c/\u0001\u0000\u0000\u0000\u012d"+
		"\u012e\u0005\u000e\u0000\u0000\u012e\u012f\u0005\u0015\u0000\u0000\u012f"+
		"\u0130\u0003H$\u0000\u0130\u0131\u0005\u0018\u0000\u0000\u01311\u0001"+
		"\u0000\u0000\u0000\u0132\u0133\u0005\u000f\u0000\u0000\u0133\u0134\u0005"+
		"\u0015\u0000\u0000\u0134\u0135\u0003J%\u0000\u0135\u0136\u0003P(\u0000"+
		"\u0136\u013b\u0005\u0018\u0000\u0000\u0137\u013a\u00034\u001a\u0000\u0138"+
		"\u013a\u0005\u0018\u0000\u0000\u0139\u0137\u0001\u0000\u0000\u0000\u0139"+
		"\u0138\u0001\u0000\u0000\u0000\u013a\u013d\u0001\u0000\u0000\u0000\u013b"+
		"\u0139\u0001\u0000\u0000\u0000\u013b\u013c\u0001\u0000\u0000\u0000\u013c"+
		"\u013e\u0001\u0000\u0000\u0000\u013d\u013b\u0001\u0000\u0000\u0000\u013e"+
		"\u013f\u0003\\.\u0000\u013f3\u0001\u0000\u0000\u0000\u0140\u0141\u0005"+
		"\u0017\u0000\u0000\u0141\u0142\u0005\u0015\u0000\u0000\u0142\u0143\u0003"+
		"Z-\u0000\u0143\u0144\u0005\u0018\u0000\u0000\u01445\u0001\u0000\u0000"+
		"\u0000\u0145\u0146\u0005\u0010\u0000\u0000\u0146\u0147\u0005\u0015\u0000"+
		"\u0000\u0147\u0148\u0003L&\u0000\u0148\u0149\u0003P(\u0000\u0149\u014e"+
		"\u0005\u0018\u0000\u0000\u014a\u014d\u00038\u001c\u0000\u014b\u014d\u0005"+
		"\u0018\u0000\u0000\u014c\u014a\u0001\u0000\u0000\u0000\u014c\u014b\u0001"+
		"\u0000\u0000\u0000\u014d\u0150\u0001\u0000\u0000\u0000\u014e\u014c\u0001"+
		"\u0000\u0000\u0000\u014e\u014f\u0001\u0000\u0000\u0000\u014f\u0151\u0001"+
		"\u0000\u0000\u0000\u0150\u014e\u0001\u0000\u0000\u0000\u0151\u0152\u0003"+
		"\\.\u0000\u01527\u0001\u0000\u0000\u0000\u0153\u0154\u0005\u0017\u0000"+
		"\u0000\u0154\u0155\u0005\u0015\u0000\u0000\u0155\u0156\u0003Z-\u0000\u0156"+
		"\u0157\u0005\u0018\u0000\u0000\u01579\u0001\u0000\u0000\u0000\u0158\u0159"+
		"\u0005\u0011\u0000\u0000\u0159\u015a\u0005\u0015\u0000\u0000\u015a\u015b"+
		"\u0003N\'\u0000\u015b\u015c\u0003P(\u0000\u015c\u0161\u0005\u0018\u0000"+
		"\u0000\u015d\u0160\u0003<\u001e\u0000\u015e\u0160\u0005\u0018\u0000\u0000"+
		"\u015f\u015d\u0001\u0000\u0000\u0000\u015f\u015e\u0001\u0000\u0000\u0000"+
		"\u0160\u0163\u0001\u0000\u0000\u0000\u0161\u015f\u0001\u0000\u0000\u0000"+
		"\u0161\u0162\u0001\u0000\u0000\u0000\u0162\u0164\u0001\u0000\u0000\u0000"+
		"\u0163\u0161\u0001\u0000\u0000\u0000\u0164\u0165\u0003\\.\u0000\u0165"+
		";\u0001\u0000\u0000\u0000\u0166\u0167\u0005\u0017\u0000\u0000\u0167\u0168"+
		"\u0005\u0015\u0000\u0000\u0168\u0169\u0003Z-\u0000\u0169\u016a\u0005\u0018"+
		"\u0000\u0000\u016a=\u0001\u0000\u0000\u0000\u016b\u016c\u0005\u0017\u0000"+
		"\u0000\u016c\u016d\u0005\u0015\u0000\u0000\u016d\u016e\u0003Z-\u0000\u016e"+
		"\u016f\u0005\u0018\u0000\u0000\u016f?\u0001\u0000\u0000\u0000\u0170\u0171"+
		"\u0005\u0017\u0000\u0000\u0171\u0172\u0005\u0015\u0000\u0000\u0172\u0173"+
		"\u0003Z-\u0000\u0173\u0174\u0005\u0018\u0000\u0000\u0174A\u0001\u0000"+
		"\u0000\u0000\u0175\u0176\u0005\u0017\u0000\u0000\u0176\u0177\u0005\u0015"+
		"\u0000\u0000\u0177\u0178\u0003Z-\u0000\u0178\u0179\u0005\u0018\u0000\u0000"+
		"\u0179C\u0001\u0000\u0000\u0000\u017a\u017b\u0005\u0017\u0000\u0000\u017b"+
		"\u017c\u0005\u0015\u0000\u0000\u017c\u017d\u0003Z-\u0000\u017d\u017e\u0005"+
		"\u0018\u0000\u0000\u017eE\u0001\u0000\u0000\u0000\u017f\u0180\u0005\u0017"+
		"\u0000\u0000\u0180G\u0001\u0000\u0000\u0000\u0181\u0185\u0005\u0017\u0000"+
		"\u0000\u0182\u0184\u0005\u0017\u0000\u0000\u0183\u0182\u0001\u0000\u0000"+
		"\u0000\u0184\u0187\u0001\u0000\u0000\u0000\u0185\u0183\u0001\u0000\u0000"+
		"\u0000\u0185\u0186\u0001\u0000\u0000\u0000\u0186I\u0001\u0000\u0000\u0000"+
		"\u0187\u0185\u0001\u0000\u0000\u0000\u0188\u0189\u0005\u0017\u0000\u0000"+
		"\u0189K\u0001\u0000\u0000\u0000\u018a\u018b\u0005\u0017\u0000\u0000\u018b"+
		"M\u0001\u0000\u0000\u0000\u018c\u018d\u0005\u0017\u0000\u0000\u018dO\u0001"+
		"\u0000\u0000\u0000\u018e\u018f\u0005\u0017\u0000\u0000\u018fQ\u0001\u0000"+
		"\u0000\u0000\u0190\u0191\u0005\u0017\u0000\u0000\u0191S\u0001\u0000\u0000"+
		"\u0000\u0192\u0193\u0005\u0017\u0000\u0000\u0193U\u0001\u0000\u0000\u0000"+
		"\u0194\u0195\u0005\u0017\u0000\u0000\u0195W\u0001\u0000\u0000\u0000\u0196"+
		"\u0197\u0005\u0017\u0000\u0000\u0197Y\u0001\u0000\u0000\u0000\u0198\u019c"+
		"\u0005\u0017\u0000\u0000\u0199\u019b\u0005\u0017\u0000\u0000\u019a\u0199"+
		"\u0001\u0000\u0000\u0000\u019b\u019e\u0001\u0000\u0000\u0000\u019c\u019a"+
		"\u0001\u0000\u0000\u0000\u019c\u019d\u0001\u0000\u0000\u0000\u019d[\u0001"+
		"\u0000\u0000\u0000\u019e\u019c\u0001\u0000\u0000\u0000\u019f\u01a0\u0007"+
		"\u0000\u0000\u0000\u01a0]\u0001\u0000\u0000\u0000&`biq\u0080\u0082\u0089"+
		"\u0090\u0092\u009e\u00a3\u00a9\u00ab\u00b9\u00bb\u00c9\u00cb\u00d9\u00db"+
		"\u00e9\u00eb\u00fe\u0100\u0108\u010e\u0110\u0119\u011b\u0126\u0128\u0139"+
		"\u013b\u014c\u014e\u015f\u0161\u0185\u019c";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}