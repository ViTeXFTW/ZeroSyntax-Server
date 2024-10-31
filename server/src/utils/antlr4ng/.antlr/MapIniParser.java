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
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, EQ=23, STRING=24, ID=25, 
		NEWLINE=26, WS=27, COMMENT=28;
	public static final int
		RULE_program = 0, RULE_class = 1, RULE_mappedImageClass = 2, RULE_objectClass = 3, 
		RULE_module_modifier = 4, RULE_addModule = 5, RULE_removeModule = 6, RULE_module = 7, 
		RULE_objectSets = 8, RULE_objectWeaponSet = 9, RULE_propertyCondition = 10, 
		RULE_objectWeaponSetWeapon = 11, RULE_weaponSlot_value = 12, RULE_objectArmorSet = 13, 
		RULE_objectArmorSetArmor = 14, RULE_objectPrerequisite = 15, RULE_objectPrerequisite_object = 16, 
		RULE_objectPrerequisite_science = 17, RULE_drawModule = 18, RULE_conditionState = 19, 
		RULE_aliasCondition = 20, RULE_bodyModule = 21, RULE_behaviorModule = 22, 
		RULE_clientModule = 23, RULE_objectProperty = 24, RULE_drawModuleProperty = 25, 
		RULE_conditionStateProperty = 26, RULE_property = 27, RULE_drawModule_type = 28, 
		RULE_conditionState_values = 29, RULE_bodyModule_type = 30, RULE_behaviorModule_type = 31, 
		RULE_clientModule_type = 32, RULE_moduleTag_value = 33, RULE_mappedImage_value = 34, 
		RULE_object_value = 35, RULE_locomotor_modifier = 36, RULE_property_value = 37, 
		RULE_property_values = 38, RULE_end = 39;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "class", "mappedImageClass", "objectClass", "module_modifier", 
			"addModule", "removeModule", "module", "objectSets", "objectWeaponSet", 
			"propertyCondition", "objectWeaponSetWeapon", "weaponSlot_value", "objectArmorSet", 
			"objectArmorSetArmor", "objectPrerequisite", "objectPrerequisite_object", 
			"objectPrerequisite_science", "drawModule", "conditionState", "aliasCondition", 
			"bodyModule", "behaviorModule", "clientModule", "objectProperty", "drawModuleProperty", 
			"conditionStateProperty", "property", "drawModule_type", "conditionState_values", 
			"bodyModule_type", "behaviorModule_type", "clientModule_type", "moduleTag_value", 
			"mappedImage_value", "object_value", "locomotor_modifier", "property_value", 
			"property_values", "end"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'MappedImage'", "'Object'", "'AddModule'", "'RemoveModule'", "'WeaponSet'", 
			"'Condition'", "'Weapon'", "'ArmorSet'", "'Armor'", "'Prerequisites'", 
			"'Science'", "'Draw'", "'DefaultConditionState'", "'ConditionState'", 
			"'TransitionState'", "'AliasConditionState'", "'Body'", "'Behavior'", 
			"'Client'", "'End'", "'end'", "'END'", "'='"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, "EQ", 
			"STRING", "ID", "NEWLINE", "WS", "COMMENT"
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
			setState(84);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 67108870L) != 0)) {
				{
				setState(82);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__0:
				case T__1:
					{
					setState(80);
					class_();
					}
					break;
				case NEWLINE:
					{
					setState(81);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(86);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(87);
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
			setState(91);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
				enterOuterAlt(_localctx, 1);
				{
				setState(89);
				mappedImageClass();
				}
				break;
			case T__1:
				enterOuterAlt(_localctx, 2);
				{
				setState(90);
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
			setState(93);
			match(T__0);
			setState(94);
			mappedImage_value();
			setState(95);
			match(NEWLINE);
			setState(99);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(96);
				property();
				}
				}
				setState(101);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(102);
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
			setState(104);
			match(T__1);
			setState(105);
			object_value();
			setState(106);
			match(NEWLINE);
			setState(114);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 101586232L) != 0)) {
				{
				setState(112);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__2:
				case T__3:
					{
					setState(107);
					module_modifier();
					}
					break;
				case T__11:
				case T__16:
				case T__17:
				case T__18:
					{
					setState(108);
					module();
					}
					break;
				case ID:
					{
					setState(109);
					objectProperty();
					}
					break;
				case T__4:
				case T__7:
				case T__9:
					{
					setState(110);
					objectSets();
					}
					break;
				case NEWLINE:
					{
					setState(111);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(116);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(117);
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
			setState(121);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__2:
				{
				setState(119);
				addModule();
				}
				break;
			case T__3:
				{
				setState(120);
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
			setState(123);
			match(T__2);
			setState(124);
			match(NEWLINE);
			setState(130);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 101584896L) != 0)) {
				{
				setState(128);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__11:
				case T__16:
				case T__17:
				case T__18:
					{
					setState(125);
					module();
					}
					break;
				case ID:
					{
					setState(126);
					objectProperty();
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
			setState(135);
			match(T__3);
			setState(136);
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
			setState(142);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__11:
				{
				setState(138);
				drawModule();
				}
				break;
			case T__16:
				{
				setState(139);
				bodyModule();
				}
				break;
			case T__17:
				{
				setState(140);
				behaviorModule();
				}
				break;
			case T__18:
				{
				setState(141);
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
			setState(147);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__4:
				{
				setState(144);
				objectWeaponSet();
				}
				break;
			case T__7:
				{
				setState(145);
				objectArmorSet();
				}
				break;
			case T__9:
				{
				setState(146);
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
		public List<PropertyConditionContext> propertyCondition() {
			return getRuleContexts(PropertyConditionContext.class);
		}
		public PropertyConditionContext propertyCondition(int i) {
			return getRuleContext(PropertyConditionContext.class,i);
		}
		public List<ObjectWeaponSetWeaponContext> objectWeaponSetWeapon() {
			return getRuleContexts(ObjectWeaponSetWeaponContext.class);
		}
		public ObjectWeaponSetWeaponContext objectWeaponSetWeapon(int i) {
			return getRuleContext(ObjectWeaponSetWeaponContext.class,i);
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
			setState(149);
			match(T__4);
			setState(150);
			match(NEWLINE);
			setState(156);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 67109056L) != 0)) {
				{
				setState(154);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__5:
					{
					setState(151);
					propertyCondition();
					}
					break;
				case T__6:
					{
					setState(152);
					objectWeaponSetWeapon();
					}
					break;
				case NEWLINE:
					{
					setState(153);
					match(NEWLINE);
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
			setState(159);
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
	public static class PropertyConditionContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Property_valuesContext property_values() {
			return getRuleContext(Property_valuesContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(MapIniParser.NEWLINE, 0); }
		public PropertyConditionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_propertyCondition; }
	}

	public final PropertyConditionContext propertyCondition() throws RecognitionException {
		PropertyConditionContext _localctx = new PropertyConditionContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_propertyCondition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(161);
			match(T__5);
			setState(162);
			match(EQ);
			setState(163);
			property_values();
			setState(164);
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
	public static class ObjectWeaponSetWeaponContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public WeaponSlot_valueContext weaponSlot_value() {
			return getRuleContext(WeaponSlot_valueContext.class,0);
		}
		public Property_valuesContext property_values() {
			return getRuleContext(Property_valuesContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(MapIniParser.NEWLINE, 0); }
		public ObjectWeaponSetWeaponContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectWeaponSetWeapon; }
	}

	public final ObjectWeaponSetWeaponContext objectWeaponSetWeapon() throws RecognitionException {
		ObjectWeaponSetWeaponContext _localctx = new ObjectWeaponSetWeaponContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_objectWeaponSetWeapon);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(166);
			match(T__6);
			setState(167);
			match(EQ);
			setState(168);
			weaponSlot_value();
			setState(169);
			property_values();
			setState(170);
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
	public static class WeaponSlot_valueContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public WeaponSlot_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_weaponSlot_value; }
	}

	public final WeaponSlot_valueContext weaponSlot_value() throws RecognitionException {
		WeaponSlot_valueContext _localctx = new WeaponSlot_valueContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_weaponSlot_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(172);
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
	public static class ObjectArmorSetContext extends ParserRuleContext {
		public List<TerminalNode> NEWLINE() { return getTokens(MapIniParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(MapIniParser.NEWLINE, i);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<PropertyConditionContext> propertyCondition() {
			return getRuleContexts(PropertyConditionContext.class);
		}
		public PropertyConditionContext propertyCondition(int i) {
			return getRuleContext(PropertyConditionContext.class,i);
		}
		public List<ObjectArmorSetArmorContext> objectArmorSetArmor() {
			return getRuleContexts(ObjectArmorSetArmorContext.class);
		}
		public ObjectArmorSetArmorContext objectArmorSetArmor(int i) {
			return getRuleContext(ObjectArmorSetArmorContext.class,i);
		}
		public ObjectArmorSetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectArmorSet; }
	}

	public final ObjectArmorSetContext objectArmorSet() throws RecognitionException {
		ObjectArmorSetContext _localctx = new ObjectArmorSetContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_objectArmorSet);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(174);
			match(T__7);
			setState(175);
			match(NEWLINE);
			setState(181);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 67109440L) != 0)) {
				{
				setState(179);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__5:
					{
					setState(176);
					propertyCondition();
					}
					break;
				case T__8:
					{
					setState(177);
					objectArmorSetArmor();
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
				setState(183);
				_errHandler.sync(this);
				_la = _input.LA(1);
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
	public static class ObjectArmorSetArmorContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Property_valuesContext property_values() {
			return getRuleContext(Property_valuesContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(MapIniParser.NEWLINE, 0); }
		public ObjectArmorSetArmorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectArmorSetArmor; }
	}

	public final ObjectArmorSetArmorContext objectArmorSetArmor() throws RecognitionException {
		ObjectArmorSetArmorContext _localctx = new ObjectArmorSetArmorContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_objectArmorSetArmor);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(186);
			match(T__8);
			setState(187);
			match(EQ);
			setState(188);
			property_values();
			setState(189);
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
		public List<ObjectPrerequisite_objectContext> objectPrerequisite_object() {
			return getRuleContexts(ObjectPrerequisite_objectContext.class);
		}
		public ObjectPrerequisite_objectContext objectPrerequisite_object(int i) {
			return getRuleContext(ObjectPrerequisite_objectContext.class,i);
		}
		public List<ObjectPrerequisite_scienceContext> objectPrerequisite_science() {
			return getRuleContexts(ObjectPrerequisite_scienceContext.class);
		}
		public ObjectPrerequisite_scienceContext objectPrerequisite_science(int i) {
			return getRuleContext(ObjectPrerequisite_scienceContext.class,i);
		}
		public ObjectPrerequisiteContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectPrerequisite; }
	}

	public final ObjectPrerequisiteContext objectPrerequisite() throws RecognitionException {
		ObjectPrerequisiteContext _localctx = new ObjectPrerequisiteContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_objectPrerequisite);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(191);
			match(T__9);
			setState(192);
			match(NEWLINE);
			setState(198);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 67110916L) != 0)) {
				{
				setState(196);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__1:
					{
					setState(193);
					objectPrerequisite_object();
					}
					break;
				case T__10:
					{
					setState(194);
					objectPrerequisite_science();
					}
					break;
				case NEWLINE:
					{
					setState(195);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(200);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(201);
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
	public static class ObjectPrerequisite_objectContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Property_valuesContext property_values() {
			return getRuleContext(Property_valuesContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(MapIniParser.NEWLINE, 0); }
		public ObjectPrerequisite_objectContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectPrerequisite_object; }
	}

	public final ObjectPrerequisite_objectContext objectPrerequisite_object() throws RecognitionException {
		ObjectPrerequisite_objectContext _localctx = new ObjectPrerequisite_objectContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_objectPrerequisite_object);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(203);
			match(T__1);
			setState(204);
			match(EQ);
			setState(205);
			property_values();
			setState(206);
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
	public static class ObjectPrerequisite_scienceContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Property_valuesContext property_values() {
			return getRuleContext(Property_valuesContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(MapIniParser.NEWLINE, 0); }
		public ObjectPrerequisite_scienceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectPrerequisite_science; }
	}

	public final ObjectPrerequisite_scienceContext objectPrerequisite_science() throws RecognitionException {
		ObjectPrerequisite_scienceContext _localctx = new ObjectPrerequisite_scienceContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_objectPrerequisite_science);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(208);
			match(T__10);
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
		enterRule(_localctx, 36, RULE_drawModule);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(213);
			match(T__11);
			setState(214);
			match(EQ);
			setState(215);
			drawModule_type();
			setState(216);
			moduleTag_value();
			setState(217);
			match(NEWLINE);
			setState(224);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 100786176L) != 0)) {
				{
				setState(222);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__12:
				case T__13:
				case T__14:
					{
					setState(218);
					conditionState();
					}
					break;
				case T__15:
					{
					setState(219);
					aliasCondition();
					}
					break;
				case ID:
					{
					setState(220);
					drawModuleProperty();
					}
					break;
				case NEWLINE:
					{
					setState(221);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(226);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(227);
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
		public List<ConditionStatePropertyContext> conditionStateProperty() {
			return getRuleContexts(ConditionStatePropertyContext.class);
		}
		public ConditionStatePropertyContext conditionStateProperty(int i) {
			return getRuleContext(ConditionStatePropertyContext.class,i);
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
		enterRule(_localctx, 38, RULE_conditionState);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(236);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__12:
				{
				setState(229);
				match(T__12);
				}
				break;
			case T__13:
				{
				{
				setState(230);
				match(T__13);
				setState(231);
				match(EQ);
				setState(232);
				conditionState_values();
				}
				}
				break;
			case T__14:
				{
				{
				setState(233);
				match(T__14);
				setState(234);
				match(EQ);
				setState(235);
				conditionState_values();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(238);
			match(NEWLINE);
			setState(243);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID || _la==NEWLINE) {
				{
				setState(241);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case ID:
					{
					setState(239);
					conditionStateProperty();
					}
					break;
				case NEWLINE:
					{
					setState(240);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(245);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(246);
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
		enterRule(_localctx, 40, RULE_aliasCondition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(248);
			match(T__15);
			setState(249);
			match(EQ);
			setState(250);
			conditionState_values();
			setState(251);
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
		enterRule(_localctx, 42, RULE_bodyModule);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(253);
			match(T__16);
			setState(254);
			match(EQ);
			setState(255);
			bodyModule_type();
			setState(256);
			moduleTag_value();
			setState(257);
			match(NEWLINE);
			setState(262);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID || _la==NEWLINE) {
				{
				setState(260);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case ID:
					{
					setState(258);
					property();
					}
					break;
				case NEWLINE:
					{
					setState(259);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
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
		enterRule(_localctx, 44, RULE_behaviorModule);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(267);
			match(T__17);
			setState(268);
			match(EQ);
			setState(269);
			behaviorModule_type();
			setState(270);
			moduleTag_value();
			setState(271);
			match(NEWLINE);
			setState(276);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID || _la==NEWLINE) {
				{
				setState(274);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case ID:
					{
					setState(272);
					property();
					}
					break;
				case NEWLINE:
					{
					setState(273);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(278);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(279);
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
		enterRule(_localctx, 46, RULE_clientModule);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(281);
			match(T__18);
			setState(282);
			match(EQ);
			setState(283);
			clientModule_type();
			setState(284);
			moduleTag_value();
			setState(285);
			match(NEWLINE);
			setState(290);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID || _la==NEWLINE) {
				{
				setState(288);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case ID:
					{
					setState(286);
					property();
					}
					break;
				case NEWLINE:
					{
					setState(287);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(292);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(293);
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
		enterRule(_localctx, 48, RULE_objectProperty);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(295);
			match(ID);
			setState(296);
			match(EQ);
			setState(297);
			property_values();
			setState(298);
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
		enterRule(_localctx, 50, RULE_drawModuleProperty);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(300);
			match(ID);
			setState(301);
			match(EQ);
			setState(302);
			property_values();
			setState(303);
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
		enterRule(_localctx, 52, RULE_conditionStateProperty);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(305);
			match(ID);
			setState(306);
			match(EQ);
			setState(307);
			property_values();
			setState(308);
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
		enterRule(_localctx, 54, RULE_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(310);
			match(ID);
			setState(311);
			match(EQ);
			setState(312);
			property_values();
			setState(313);
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
		enterRule(_localctx, 56, RULE_drawModule_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(315);
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
		enterRule(_localctx, 58, RULE_conditionState_values);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(317);
			match(ID);
			setState(321);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(318);
				match(ID);
				}
				}
				setState(323);
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
		enterRule(_localctx, 60, RULE_bodyModule_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(324);
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
		enterRule(_localctx, 62, RULE_behaviorModule_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(326);
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
		enterRule(_localctx, 64, RULE_clientModule_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(328);
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
		enterRule(_localctx, 66, RULE_moduleTag_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(330);
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
		enterRule(_localctx, 68, RULE_mappedImage_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(332);
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
		enterRule(_localctx, 70, RULE_object_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(334);
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
		enterRule(_localctx, 72, RULE_locomotor_modifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(336);
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
		enterRule(_localctx, 74, RULE_property_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(338);
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
		enterRule(_localctx, 76, RULE_property_values);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(340);
			match(ID);
			setState(344);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(341);
				match(ID);
				}
				}
				setState(346);
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
		enterRule(_localctx, 78, RULE_end);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(347);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 7340032L) != 0)) ) {
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
		"\u0004\u0001\u001c\u015e\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
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
		"\'\u0001\u0000\u0001\u0000\u0005\u0000S\b\u0000\n\u0000\f\u0000V\t\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0003\u0001\\\b\u0001"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0005\u0002b\b\u0002"+
		"\n\u0002\f\u0002e\t\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0005\u0003q\b\u0003\n\u0003\f\u0003t\t\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0004\u0001\u0004\u0003\u0004z\b\u0004\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0005\u0005\u0081\b\u0005\n\u0005"+
		"\f\u0005\u0084\t\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0003\u0007"+
		"\u008f\b\u0007\u0001\b\u0001\b\u0001\b\u0003\b\u0094\b\b\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0001\t\u0005\t\u009b\b\t\n\t\f\t\u009e\t\t\u0001\t"+
		"\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001"+
		"\r\u0001\r\u0001\r\u0001\r\u0001\r\u0005\r\u00b4\b\r\n\r\f\r\u00b7\t\r"+
		"\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001"+
		"\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0005"+
		"\u000f\u00c5\b\u000f\n\u000f\f\u000f\u00c8\t\u000f\u0001\u000f\u0001\u000f"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0011"+
		"\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012"+
		"\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012"+
		"\u0001\u0012\u0005\u0012\u00df\b\u0012\n\u0012\f\u0012\u00e2\t\u0012\u0001"+
		"\u0012\u0001\u0012\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001"+
		"\u0013\u0001\u0013\u0001\u0013\u0003\u0013\u00ed\b\u0013\u0001\u0013\u0001"+
		"\u0013\u0001\u0013\u0005\u0013\u00f2\b\u0013\n\u0013\f\u0013\u00f5\t\u0013"+
		"\u0001\u0013\u0001\u0013\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0014"+
		"\u0001\u0014\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015"+
		"\u0001\u0015\u0001\u0015\u0005\u0015\u0105\b\u0015\n\u0015\f\u0015\u0108"+
		"\t\u0015\u0001\u0015\u0001\u0015\u0001\u0016\u0001\u0016\u0001\u0016\u0001"+
		"\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0005\u0016\u0113\b\u0016\n"+
		"\u0016\f\u0016\u0116\t\u0016\u0001\u0016\u0001\u0016\u0001\u0017\u0001"+
		"\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0005"+
		"\u0017\u0121\b\u0017\n\u0017\f\u0017\u0124\t\u0017\u0001\u0017\u0001\u0017"+
		"\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0019"+
		"\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u001a\u0001\u001a"+
		"\u0001\u001a\u0001\u001a\u0001\u001a\u0001\u001b\u0001\u001b\u0001\u001b"+
		"\u0001\u001b\u0001\u001b\u0001\u001c\u0001\u001c\u0001\u001d\u0001\u001d"+
		"\u0005\u001d\u0140\b\u001d\n\u001d\f\u001d\u0143\t\u001d\u0001\u001e\u0001"+
		"\u001e\u0001\u001f\u0001\u001f\u0001 \u0001 \u0001!\u0001!\u0001\"\u0001"+
		"\"\u0001#\u0001#\u0001$\u0001$\u0001%\u0001%\u0001&\u0001&\u0005&\u0157"+
		"\b&\n&\f&\u015a\t&\u0001\'\u0001\'\u0001\'\u0000\u0000(\u0000\u0002\u0004"+
		"\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \""+
		"$&(*,.02468:<>@BDFHJLN\u0000\u0001\u0001\u0000\u0014\u0016\u0160\u0000"+
		"T\u0001\u0000\u0000\u0000\u0002[\u0001\u0000\u0000\u0000\u0004]\u0001"+
		"\u0000\u0000\u0000\u0006h\u0001\u0000\u0000\u0000\by\u0001\u0000\u0000"+
		"\u0000\n{\u0001\u0000\u0000\u0000\f\u0087\u0001\u0000\u0000\u0000\u000e"+
		"\u008e\u0001\u0000\u0000\u0000\u0010\u0093\u0001\u0000\u0000\u0000\u0012"+
		"\u0095\u0001\u0000\u0000\u0000\u0014\u00a1\u0001\u0000\u0000\u0000\u0016"+
		"\u00a6\u0001\u0000\u0000\u0000\u0018\u00ac\u0001\u0000\u0000\u0000\u001a"+
		"\u00ae\u0001\u0000\u0000\u0000\u001c\u00ba\u0001\u0000\u0000\u0000\u001e"+
		"\u00bf\u0001\u0000\u0000\u0000 \u00cb\u0001\u0000\u0000\u0000\"\u00d0"+
		"\u0001\u0000\u0000\u0000$\u00d5\u0001\u0000\u0000\u0000&\u00ec\u0001\u0000"+
		"\u0000\u0000(\u00f8\u0001\u0000\u0000\u0000*\u00fd\u0001\u0000\u0000\u0000"+
		",\u010b\u0001\u0000\u0000\u0000.\u0119\u0001\u0000\u0000\u00000\u0127"+
		"\u0001\u0000\u0000\u00002\u012c\u0001\u0000\u0000\u00004\u0131\u0001\u0000"+
		"\u0000\u00006\u0136\u0001\u0000\u0000\u00008\u013b\u0001\u0000\u0000\u0000"+
		":\u013d\u0001\u0000\u0000\u0000<\u0144\u0001\u0000\u0000\u0000>\u0146"+
		"\u0001\u0000\u0000\u0000@\u0148\u0001\u0000\u0000\u0000B\u014a\u0001\u0000"+
		"\u0000\u0000D\u014c\u0001\u0000\u0000\u0000F\u014e\u0001\u0000\u0000\u0000"+
		"H\u0150\u0001\u0000\u0000\u0000J\u0152\u0001\u0000\u0000\u0000L\u0154"+
		"\u0001\u0000\u0000\u0000N\u015b\u0001\u0000\u0000\u0000PS\u0003\u0002"+
		"\u0001\u0000QS\u0005\u001a\u0000\u0000RP\u0001\u0000\u0000\u0000RQ\u0001"+
		"\u0000\u0000\u0000SV\u0001\u0000\u0000\u0000TR\u0001\u0000\u0000\u0000"+
		"TU\u0001\u0000\u0000\u0000UW\u0001\u0000\u0000\u0000VT\u0001\u0000\u0000"+
		"\u0000WX\u0005\u0000\u0000\u0001X\u0001\u0001\u0000\u0000\u0000Y\\\u0003"+
		"\u0004\u0002\u0000Z\\\u0003\u0006\u0003\u0000[Y\u0001\u0000\u0000\u0000"+
		"[Z\u0001\u0000\u0000\u0000\\\u0003\u0001\u0000\u0000\u0000]^\u0005\u0001"+
		"\u0000\u0000^_\u0003D\"\u0000_c\u0005\u001a\u0000\u0000`b\u00036\u001b"+
		"\u0000a`\u0001\u0000\u0000\u0000be\u0001\u0000\u0000\u0000ca\u0001\u0000"+
		"\u0000\u0000cd\u0001\u0000\u0000\u0000df\u0001\u0000\u0000\u0000ec\u0001"+
		"\u0000\u0000\u0000fg\u0003N\'\u0000g\u0005\u0001\u0000\u0000\u0000hi\u0005"+
		"\u0002\u0000\u0000ij\u0003F#\u0000jr\u0005\u001a\u0000\u0000kq\u0003\b"+
		"\u0004\u0000lq\u0003\u000e\u0007\u0000mq\u00030\u0018\u0000nq\u0003\u0010"+
		"\b\u0000oq\u0005\u001a\u0000\u0000pk\u0001\u0000\u0000\u0000pl\u0001\u0000"+
		"\u0000\u0000pm\u0001\u0000\u0000\u0000pn\u0001\u0000\u0000\u0000po\u0001"+
		"\u0000\u0000\u0000qt\u0001\u0000\u0000\u0000rp\u0001\u0000\u0000\u0000"+
		"rs\u0001\u0000\u0000\u0000su\u0001\u0000\u0000\u0000tr\u0001\u0000\u0000"+
		"\u0000uv\u0003N\'\u0000v\u0007\u0001\u0000\u0000\u0000wz\u0003\n\u0005"+
		"\u0000xz\u0003\f\u0006\u0000yw\u0001\u0000\u0000\u0000yx\u0001\u0000\u0000"+
		"\u0000z\t\u0001\u0000\u0000\u0000{|\u0005\u0003\u0000\u0000|\u0082\u0005"+
		"\u001a\u0000\u0000}\u0081\u0003\u000e\u0007\u0000~\u0081\u00030\u0018"+
		"\u0000\u007f\u0081\u0005\u001a\u0000\u0000\u0080}\u0001\u0000\u0000\u0000"+
		"\u0080~\u0001\u0000\u0000\u0000\u0080\u007f\u0001\u0000\u0000\u0000\u0081"+
		"\u0084\u0001\u0000\u0000\u0000\u0082\u0080\u0001\u0000\u0000\u0000\u0082"+
		"\u0083\u0001\u0000\u0000\u0000\u0083\u0085\u0001\u0000\u0000\u0000\u0084"+
		"\u0082\u0001\u0000\u0000\u0000\u0085\u0086\u0003N\'\u0000\u0086\u000b"+
		"\u0001\u0000\u0000\u0000\u0087\u0088\u0005\u0004\u0000\u0000\u0088\u0089"+
		"\u0003B!\u0000\u0089\r\u0001\u0000\u0000\u0000\u008a\u008f\u0003$\u0012"+
		"\u0000\u008b\u008f\u0003*\u0015\u0000\u008c\u008f\u0003,\u0016\u0000\u008d"+
		"\u008f\u0003.\u0017\u0000\u008e\u008a\u0001\u0000\u0000\u0000\u008e\u008b"+
		"\u0001\u0000\u0000\u0000\u008e\u008c\u0001\u0000\u0000\u0000\u008e\u008d"+
		"\u0001\u0000\u0000\u0000\u008f\u000f\u0001\u0000\u0000\u0000\u0090\u0094"+
		"\u0003\u0012\t\u0000\u0091\u0094\u0003\u001a\r\u0000\u0092\u0094\u0003"+
		"\u001e\u000f\u0000\u0093\u0090\u0001\u0000\u0000\u0000\u0093\u0091\u0001"+
		"\u0000\u0000\u0000\u0093\u0092\u0001\u0000\u0000\u0000\u0094\u0011\u0001"+
		"\u0000\u0000\u0000\u0095\u0096\u0005\u0005\u0000\u0000\u0096\u009c\u0005"+
		"\u001a\u0000\u0000\u0097\u009b\u0003\u0014\n\u0000\u0098\u009b\u0003\u0016"+
		"\u000b\u0000\u0099\u009b\u0005\u001a\u0000\u0000\u009a\u0097\u0001\u0000"+
		"\u0000\u0000\u009a\u0098\u0001\u0000\u0000\u0000\u009a\u0099\u0001\u0000"+
		"\u0000\u0000\u009b\u009e\u0001\u0000\u0000\u0000\u009c\u009a\u0001\u0000"+
		"\u0000\u0000\u009c\u009d\u0001\u0000\u0000\u0000\u009d\u009f\u0001\u0000"+
		"\u0000\u0000\u009e\u009c\u0001\u0000\u0000\u0000\u009f\u00a0\u0003N\'"+
		"\u0000\u00a0\u0013\u0001\u0000\u0000\u0000\u00a1\u00a2\u0005\u0006\u0000"+
		"\u0000\u00a2\u00a3\u0005\u0017\u0000\u0000\u00a3\u00a4\u0003L&\u0000\u00a4"+
		"\u00a5\u0005\u001a\u0000\u0000\u00a5\u0015\u0001\u0000\u0000\u0000\u00a6"+
		"\u00a7\u0005\u0007\u0000\u0000\u00a7\u00a8\u0005\u0017\u0000\u0000\u00a8"+
		"\u00a9\u0003\u0018\f\u0000\u00a9\u00aa\u0003L&\u0000\u00aa\u00ab\u0005"+
		"\u001a\u0000\u0000\u00ab\u0017\u0001\u0000\u0000\u0000\u00ac\u00ad\u0005"+
		"\u0019\u0000\u0000\u00ad\u0019\u0001\u0000\u0000\u0000\u00ae\u00af\u0005"+
		"\b\u0000\u0000\u00af\u00b5\u0005\u001a\u0000\u0000\u00b0\u00b4\u0003\u0014"+
		"\n\u0000\u00b1\u00b4\u0003\u001c\u000e\u0000\u00b2\u00b4\u0005\u001a\u0000"+
		"\u0000\u00b3\u00b0\u0001\u0000\u0000\u0000\u00b3\u00b1\u0001\u0000\u0000"+
		"\u0000\u00b3\u00b2\u0001\u0000\u0000\u0000\u00b4\u00b7\u0001\u0000\u0000"+
		"\u0000\u00b5\u00b3\u0001\u0000\u0000\u0000\u00b5\u00b6\u0001\u0000\u0000"+
		"\u0000\u00b6\u00b8\u0001\u0000\u0000\u0000\u00b7\u00b5\u0001\u0000\u0000"+
		"\u0000\u00b8\u00b9\u0003N\'\u0000\u00b9\u001b\u0001\u0000\u0000\u0000"+
		"\u00ba\u00bb\u0005\t\u0000\u0000\u00bb\u00bc\u0005\u0017\u0000\u0000\u00bc"+
		"\u00bd\u0003L&\u0000\u00bd\u00be\u0005\u001a\u0000\u0000\u00be\u001d\u0001"+
		"\u0000\u0000\u0000\u00bf\u00c0\u0005\n\u0000\u0000\u00c0\u00c6\u0005\u001a"+
		"\u0000\u0000\u00c1\u00c5\u0003 \u0010\u0000\u00c2\u00c5\u0003\"\u0011"+
		"\u0000\u00c3\u00c5\u0005\u001a\u0000\u0000\u00c4\u00c1\u0001\u0000\u0000"+
		"\u0000\u00c4\u00c2\u0001\u0000\u0000\u0000\u00c4\u00c3\u0001\u0000\u0000"+
		"\u0000\u00c5\u00c8\u0001\u0000\u0000\u0000\u00c6\u00c4\u0001\u0000\u0000"+
		"\u0000\u00c6\u00c7\u0001\u0000\u0000\u0000\u00c7\u00c9\u0001\u0000\u0000"+
		"\u0000\u00c8\u00c6\u0001\u0000\u0000\u0000\u00c9\u00ca\u0003N\'\u0000"+
		"\u00ca\u001f\u0001\u0000\u0000\u0000\u00cb\u00cc\u0005\u0002\u0000\u0000"+
		"\u00cc\u00cd\u0005\u0017\u0000\u0000\u00cd\u00ce\u0003L&\u0000\u00ce\u00cf"+
		"\u0005\u001a\u0000\u0000\u00cf!\u0001\u0000\u0000\u0000\u00d0\u00d1\u0005"+
		"\u000b\u0000\u0000\u00d1\u00d2\u0005\u0017\u0000\u0000\u00d2\u00d3\u0003"+
		"L&\u0000\u00d3\u00d4\u0005\u001a\u0000\u0000\u00d4#\u0001\u0000\u0000"+
		"\u0000\u00d5\u00d6\u0005\f\u0000\u0000\u00d6\u00d7\u0005\u0017\u0000\u0000"+
		"\u00d7\u00d8\u00038\u001c\u0000\u00d8\u00d9\u0003B!\u0000\u00d9\u00e0"+
		"\u0005\u001a\u0000\u0000\u00da\u00df\u0003&\u0013\u0000\u00db\u00df\u0003"+
		"(\u0014\u0000\u00dc\u00df\u00032\u0019\u0000\u00dd\u00df\u0005\u001a\u0000"+
		"\u0000\u00de\u00da\u0001\u0000\u0000\u0000\u00de\u00db\u0001\u0000\u0000"+
		"\u0000\u00de\u00dc\u0001\u0000\u0000\u0000\u00de\u00dd\u0001\u0000\u0000"+
		"\u0000\u00df\u00e2\u0001\u0000\u0000\u0000\u00e0\u00de\u0001\u0000\u0000"+
		"\u0000\u00e0\u00e1\u0001\u0000\u0000\u0000\u00e1\u00e3\u0001\u0000\u0000"+
		"\u0000\u00e2\u00e0\u0001\u0000\u0000\u0000\u00e3\u00e4\u0003N\'\u0000"+
		"\u00e4%\u0001\u0000\u0000\u0000\u00e5\u00ed\u0005\r\u0000\u0000\u00e6"+
		"\u00e7\u0005\u000e\u0000\u0000\u00e7\u00e8\u0005\u0017\u0000\u0000\u00e8"+
		"\u00ed\u0003:\u001d\u0000\u00e9\u00ea\u0005\u000f\u0000\u0000\u00ea\u00eb"+
		"\u0005\u0017\u0000\u0000\u00eb\u00ed\u0003:\u001d\u0000\u00ec\u00e5\u0001"+
		"\u0000\u0000\u0000\u00ec\u00e6\u0001\u0000\u0000\u0000\u00ec\u00e9\u0001"+
		"\u0000\u0000\u0000\u00ed\u00ee\u0001\u0000\u0000\u0000\u00ee\u00f3\u0005"+
		"\u001a\u0000\u0000\u00ef\u00f2\u00034\u001a\u0000\u00f0\u00f2\u0005\u001a"+
		"\u0000\u0000\u00f1\u00ef\u0001\u0000\u0000\u0000\u00f1\u00f0\u0001\u0000"+
		"\u0000\u0000\u00f2\u00f5\u0001\u0000\u0000\u0000\u00f3\u00f1\u0001\u0000"+
		"\u0000\u0000\u00f3\u00f4\u0001\u0000\u0000\u0000\u00f4\u00f6\u0001\u0000"+
		"\u0000\u0000\u00f5\u00f3\u0001\u0000\u0000\u0000\u00f6\u00f7\u0003N\'"+
		"\u0000\u00f7\'\u0001\u0000\u0000\u0000\u00f8\u00f9\u0005\u0010\u0000\u0000"+
		"\u00f9\u00fa\u0005\u0017\u0000\u0000\u00fa\u00fb\u0003:\u001d\u0000\u00fb"+
		"\u00fc\u0005\u001a\u0000\u0000\u00fc)\u0001\u0000\u0000\u0000\u00fd\u00fe"+
		"\u0005\u0011\u0000\u0000\u00fe\u00ff\u0005\u0017\u0000\u0000\u00ff\u0100"+
		"\u0003<\u001e\u0000\u0100\u0101\u0003B!\u0000\u0101\u0106\u0005\u001a"+
		"\u0000\u0000\u0102\u0105\u00036\u001b\u0000\u0103\u0105\u0005\u001a\u0000"+
		"\u0000\u0104\u0102\u0001\u0000\u0000\u0000\u0104\u0103\u0001\u0000\u0000"+
		"\u0000\u0105\u0108\u0001\u0000\u0000\u0000\u0106\u0104\u0001\u0000\u0000"+
		"\u0000\u0106\u0107\u0001\u0000\u0000\u0000\u0107\u0109\u0001\u0000\u0000"+
		"\u0000\u0108\u0106\u0001\u0000\u0000\u0000\u0109\u010a\u0003N\'\u0000"+
		"\u010a+\u0001\u0000\u0000\u0000\u010b\u010c\u0005\u0012\u0000\u0000\u010c"+
		"\u010d\u0005\u0017\u0000\u0000\u010d\u010e\u0003>\u001f\u0000\u010e\u010f"+
		"\u0003B!\u0000\u010f\u0114\u0005\u001a\u0000\u0000\u0110\u0113\u00036"+
		"\u001b\u0000\u0111\u0113\u0005\u001a\u0000\u0000\u0112\u0110\u0001\u0000"+
		"\u0000\u0000\u0112\u0111\u0001\u0000\u0000\u0000\u0113\u0116\u0001\u0000"+
		"\u0000\u0000\u0114\u0112\u0001\u0000\u0000\u0000\u0114\u0115\u0001\u0000"+
		"\u0000\u0000\u0115\u0117\u0001\u0000\u0000\u0000\u0116\u0114\u0001\u0000"+
		"\u0000\u0000\u0117\u0118\u0003N\'\u0000\u0118-\u0001\u0000\u0000\u0000"+
		"\u0119\u011a\u0005\u0013\u0000\u0000\u011a\u011b\u0005\u0017\u0000\u0000"+
		"\u011b\u011c\u0003@ \u0000\u011c\u011d\u0003B!\u0000\u011d\u0122\u0005"+
		"\u001a\u0000\u0000\u011e\u0121\u00036\u001b\u0000\u011f\u0121\u0005\u001a"+
		"\u0000\u0000\u0120\u011e\u0001\u0000\u0000\u0000\u0120\u011f\u0001\u0000"+
		"\u0000\u0000\u0121\u0124\u0001\u0000\u0000\u0000\u0122\u0120\u0001\u0000"+
		"\u0000\u0000\u0122\u0123\u0001\u0000\u0000\u0000\u0123\u0125\u0001\u0000"+
		"\u0000\u0000\u0124\u0122\u0001\u0000\u0000\u0000\u0125\u0126\u0003N\'"+
		"\u0000\u0126/\u0001\u0000\u0000\u0000\u0127\u0128\u0005\u0019\u0000\u0000"+
		"\u0128\u0129\u0005\u0017\u0000\u0000\u0129\u012a\u0003L&\u0000\u012a\u012b"+
		"\u0005\u001a\u0000\u0000\u012b1\u0001\u0000\u0000\u0000\u012c\u012d\u0005"+
		"\u0019\u0000\u0000\u012d\u012e\u0005\u0017\u0000\u0000\u012e\u012f\u0003"+
		"L&\u0000\u012f\u0130\u0005\u001a\u0000\u0000\u01303\u0001\u0000\u0000"+
		"\u0000\u0131\u0132\u0005\u0019\u0000\u0000\u0132\u0133\u0005\u0017\u0000"+
		"\u0000\u0133\u0134\u0003L&\u0000\u0134\u0135\u0005\u001a\u0000\u0000\u0135"+
		"5\u0001\u0000\u0000\u0000\u0136\u0137\u0005\u0019\u0000\u0000\u0137\u0138"+
		"\u0005\u0017\u0000\u0000\u0138\u0139\u0003L&\u0000\u0139\u013a\u0005\u001a"+
		"\u0000\u0000\u013a7\u0001\u0000\u0000\u0000\u013b\u013c\u0005\u0019\u0000"+
		"\u0000\u013c9\u0001\u0000\u0000\u0000\u013d\u0141\u0005\u0019\u0000\u0000"+
		"\u013e\u0140\u0005\u0019\u0000\u0000\u013f\u013e\u0001\u0000\u0000\u0000"+
		"\u0140\u0143\u0001\u0000\u0000\u0000\u0141\u013f\u0001\u0000\u0000\u0000"+
		"\u0141\u0142\u0001\u0000\u0000\u0000\u0142;\u0001\u0000\u0000\u0000\u0143"+
		"\u0141\u0001\u0000\u0000\u0000\u0144\u0145\u0005\u0019\u0000\u0000\u0145"+
		"=\u0001\u0000\u0000\u0000\u0146\u0147\u0005\u0019\u0000\u0000\u0147?\u0001"+
		"\u0000\u0000\u0000\u0148\u0149\u0005\u0019\u0000\u0000\u0149A\u0001\u0000"+
		"\u0000\u0000\u014a\u014b\u0005\u0019\u0000\u0000\u014bC\u0001\u0000\u0000"+
		"\u0000\u014c\u014d\u0005\u0019\u0000\u0000\u014dE\u0001\u0000\u0000\u0000"+
		"\u014e\u014f\u0005\u0019\u0000\u0000\u014fG\u0001\u0000\u0000\u0000\u0150"+
		"\u0151\u0005\u0019\u0000\u0000\u0151I\u0001\u0000\u0000\u0000\u0152\u0153"+
		"\u0005\u0019\u0000\u0000\u0153K\u0001\u0000\u0000\u0000\u0154\u0158\u0005"+
		"\u0019\u0000\u0000\u0155\u0157\u0005\u0019\u0000\u0000\u0156\u0155\u0001"+
		"\u0000\u0000\u0000\u0157\u015a\u0001\u0000\u0000\u0000\u0158\u0156\u0001"+
		"\u0000\u0000\u0000\u0158\u0159\u0001\u0000\u0000\u0000\u0159M\u0001\u0000"+
		"\u0000\u0000\u015a\u0158\u0001\u0000\u0000\u0000\u015b\u015c\u0007\u0000"+
		"\u0000\u0000\u015cO\u0001\u0000\u0000\u0000\u001eRT[cpry\u0080\u0082\u008e"+
		"\u0093\u009a\u009c\u00b3\u00b5\u00c4\u00c6\u00de\u00e0\u00ec\u00f1\u00f3"+
		"\u0104\u0106\u0112\u0114\u0120\u0122\u0141\u0158";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}