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
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		EQ=25, STRING=26, ID=27, NEWLINE=28, WS=29, COMMENT=30;
	public static final int
		RULE_program = 0, RULE_class = 1, RULE_mappedImageClass = 2, RULE_objectClass = 3, 
		RULE_module_modifier = 4, RULE_addModule = 5, RULE_removeModule = 6, RULE_module = 7, 
		RULE_objectSets = 8, RULE_objectWeaponSet = 9, RULE_propertyCondition = 10, 
		RULE_objectWeaponSetWeapon = 11, RULE_weaponSlot_value = 12, RULE_objectArmorSet = 13, 
		RULE_objectArmorSetArmor = 14, RULE_objectPrerequisite = 15, RULE_objectPrerequisite_object = 16, 
		RULE_objectPrerequisite_science = 17, RULE_objectUnitSpecificSounds = 18, 
		RULE_objectUnitSpecificSoundsSound = 19, RULE_objectUnitSpecificFX = 20, 
		RULE_objectUnitSpecificFXFX = 21, RULE_drawModule = 22, RULE_conditionState = 23, 
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
			"propertyCondition", "objectWeaponSetWeapon", "weaponSlot_value", "objectArmorSet", 
			"objectArmorSetArmor", "objectPrerequisite", "objectPrerequisite_object", 
			"objectPrerequisite_science", "objectUnitSpecificSounds", "objectUnitSpecificSoundsSound", 
			"objectUnitSpecificFX", "objectUnitSpecificFXFX", "drawModule", "conditionState", 
			"aliasCondition", "bodyModule", "bodyModuleProperty", "behaviorModule", 
			"behaviorModuleProperty", "clientModule", "clientModuleProperty", "objectProperty", 
			"drawModuleProperty", "conditionStateProperty", "property", "drawModule_type", 
			"conditionState_values", "bodyModule_type", "behaviorModule_type", "clientModule_type", 
			"moduleTag_value", "mappedImage_value", "object_value", "locomotor_modifier", 
			"property_value", "property_values", "end"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'MappedImage'", "'Object'", "'AddModule'", "'RemoveModule'", "'WeaponSet'", 
			"'Condition'", "'Weapon'", "'ArmorSet'", "'Armor'", "'Prerequisites'", 
			"'Science'", "'UnitSpecificSounds'", "'UnitSpecificFX'", "'Draw'", "'DefaultConditionState'", 
			"'ConditionState'", "'TransitionState'", "'AliasConditionState'", "'Body'", 
			"'Behavior'", "'Client'", "'End'", "'end'", "'END'", "'='"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, "EQ", "STRING", "ID", "NEWLINE", "WS", "COMMENT"
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
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 268435462L) != 0)) {
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
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 406353208L) != 0)) {
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
				case T__13:
				case T__18:
				case T__19:
				case T__20:
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
				case T__7:
				case T__9:
					{
					setState(124);
					objectSets();
					}
					break;
				case T__11:
					{
					setState(125);
					objectUnitSpecificSounds();
					}
					break;
				case T__12:
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
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 406339584L) != 0)) {
				{
				setState(144);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__13:
				case T__18:
				case T__19:
				case T__20:
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
			case T__13:
				{
				setState(154);
				drawModule();
				}
				break;
			case T__18:
				{
				setState(155);
				bodyModule();
				}
				break;
			case T__19:
				{
				setState(156);
				behaviorModule();
				}
				break;
			case T__20:
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
			case T__7:
				{
				setState(161);
				objectArmorSet();
				}
				break;
			case T__9:
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
			setState(165);
			match(T__4);
			setState(166);
			match(NEWLINE);
			setState(172);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 268435648L) != 0)) {
				{
				setState(170);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__5:
					{
					setState(167);
					propertyCondition();
					}
					break;
				case T__6:
					{
					setState(168);
					objectWeaponSetWeapon();
					}
					break;
				case NEWLINE:
					{
					setState(169);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(174);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(175);
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
			setState(177);
			match(T__5);
			setState(178);
			match(EQ);
			setState(179);
			property_values();
			setState(180);
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
			setState(182);
			match(T__6);
			setState(183);
			match(EQ);
			setState(184);
			weaponSlot_value();
			setState(185);
			property_values();
			setState(186);
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
			setState(188);
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
			setState(190);
			match(T__7);
			setState(191);
			match(NEWLINE);
			setState(197);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 268436032L) != 0)) {
				{
				setState(195);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__5:
					{
					setState(192);
					propertyCondition();
					}
					break;
				case T__8:
					{
					setState(193);
					objectArmorSetArmor();
					}
					break;
				case NEWLINE:
					{
					setState(194);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(199);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(200);
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
			setState(202);
			match(T__8);
			setState(203);
			match(EQ);
			setState(204);
			property_values();
			setState(205);
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
			setState(207);
			match(T__9);
			setState(208);
			match(NEWLINE);
			setState(214);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 268437508L) != 0)) {
				{
				setState(212);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__1:
					{
					setState(209);
					objectPrerequisite_object();
					}
					break;
				case T__10:
					{
					setState(210);
					objectPrerequisite_science();
					}
					break;
				case NEWLINE:
					{
					setState(211);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(216);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(217);
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
			setState(219);
			match(T__1);
			setState(220);
			match(EQ);
			setState(221);
			property_values();
			setState(222);
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
			setState(224);
			match(T__10);
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
	public static class ObjectUnitSpecificSoundsContext extends ParserRuleContext {
		public List<TerminalNode> NEWLINE() { return getTokens(MapIniParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(MapIniParser.NEWLINE, i);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<ObjectUnitSpecificSoundsSoundContext> objectUnitSpecificSoundsSound() {
			return getRuleContexts(ObjectUnitSpecificSoundsSoundContext.class);
		}
		public ObjectUnitSpecificSoundsSoundContext objectUnitSpecificSoundsSound(int i) {
			return getRuleContext(ObjectUnitSpecificSoundsSoundContext.class,i);
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
			setState(229);
			match(T__11);
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
					objectUnitSpecificSoundsSound();
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
	public static class ObjectUnitSpecificSoundsSoundContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Property_valuesContext property_values() {
			return getRuleContext(Property_valuesContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(MapIniParser.NEWLINE, 0); }
		public ObjectUnitSpecificSoundsSoundContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectUnitSpecificSoundsSound; }
	}

	public final ObjectUnitSpecificSoundsSoundContext objectUnitSpecificSoundsSound() throws RecognitionException {
		ObjectUnitSpecificSoundsSoundContext _localctx = new ObjectUnitSpecificSoundsSoundContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_objectUnitSpecificSoundsSound);
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
	public static class ObjectUnitSpecificFXContext extends ParserRuleContext {
		public List<TerminalNode> NEWLINE() { return getTokens(MapIniParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(MapIniParser.NEWLINE, i);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<ObjectUnitSpecificFXFXContext> objectUnitSpecificFXFX() {
			return getRuleContexts(ObjectUnitSpecificFXFXContext.class);
		}
		public ObjectUnitSpecificFXFXContext objectUnitSpecificFXFX(int i) {
			return getRuleContext(ObjectUnitSpecificFXFXContext.class,i);
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
			setState(245);
			match(T__12);
			setState(246);
			match(NEWLINE);
			setState(251);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID || _la==NEWLINE) {
				{
				setState(249);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case ID:
					{
					setState(247);
					objectUnitSpecificFXFX();
					}
					break;
				case NEWLINE:
					{
					setState(248);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(253);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(254);
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
	public static class ObjectUnitSpecificFXFXContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Property_valuesContext property_values() {
			return getRuleContext(Property_valuesContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(MapIniParser.NEWLINE, 0); }
		public ObjectUnitSpecificFXFXContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectUnitSpecificFXFX; }
	}

	public final ObjectUnitSpecificFXFXContext objectUnitSpecificFXFX() throws RecognitionException {
		ObjectUnitSpecificFXFXContext _localctx = new ObjectUnitSpecificFXFXContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_objectUnitSpecificFXFX);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(256);
			match(ID);
			setState(257);
			match(EQ);
			setState(258);
			property_values();
			setState(259);
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
		enterRule(_localctx, 44, RULE_drawModule);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(261);
			match(T__13);
			setState(262);
			match(EQ);
			setState(263);
			drawModule_type();
			setState(264);
			moduleTag_value();
			setState(265);
			match(NEWLINE);
			setState(272);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 403144704L) != 0)) {
				{
				setState(270);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__14:
				case T__15:
				case T__16:
					{
					setState(266);
					conditionState();
					}
					break;
				case T__17:
					{
					setState(267);
					aliasCondition();
					}
					break;
				case ID:
					{
					setState(268);
					drawModuleProperty();
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
				setState(274);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(275);
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
		enterRule(_localctx, 46, RULE_conditionState);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(284);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__14:
				{
				setState(277);
				match(T__14);
				}
				break;
			case T__15:
				{
				{
				setState(278);
				match(T__15);
				setState(279);
				match(EQ);
				setState(280);
				conditionState_values();
				}
				}
				break;
			case T__16:
				{
				{
				setState(281);
				match(T__16);
				setState(282);
				match(EQ);
				setState(283);
				conditionState_values();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(286);
			match(NEWLINE);
			setState(291);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID || _la==NEWLINE) {
				{
				setState(289);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case ID:
					{
					setState(287);
					conditionStateProperty();
					}
					break;
				case NEWLINE:
					{
					setState(288);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(293);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(294);
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
			setState(296);
			match(T__17);
			setState(297);
			match(EQ);
			setState(298);
			conditionState_values();
			setState(299);
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
			setState(301);
			match(T__18);
			setState(302);
			match(EQ);
			setState(303);
			bodyModule_type();
			setState(304);
			moduleTag_value();
			setState(305);
			match(NEWLINE);
			setState(310);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID || _la==NEWLINE) {
				{
				setState(308);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case ID:
					{
					setState(306);
					bodyModuleProperty();
					}
					break;
				case NEWLINE:
					{
					setState(307);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(312);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(313);
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
			setState(315);
			match(ID);
			setState(316);
			match(EQ);
			setState(317);
			property_values();
			setState(318);
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
			setState(320);
			match(T__19);
			setState(321);
			match(EQ);
			setState(322);
			behaviorModule_type();
			setState(323);
			moduleTag_value();
			setState(324);
			match(NEWLINE);
			setState(329);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID || _la==NEWLINE) {
				{
				setState(327);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case ID:
					{
					setState(325);
					behaviorModuleProperty();
					}
					break;
				case NEWLINE:
					{
					setState(326);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(331);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(332);
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
			setState(334);
			match(ID);
			setState(335);
			match(EQ);
			setState(336);
			property_values();
			setState(337);
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
			setState(339);
			match(T__20);
			setState(340);
			match(EQ);
			setState(341);
			clientModule_type();
			setState(342);
			moduleTag_value();
			setState(343);
			match(NEWLINE);
			setState(348);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID || _la==NEWLINE) {
				{
				setState(346);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case ID:
					{
					setState(344);
					clientModuleProperty();
					}
					break;
				case NEWLINE:
					{
					setState(345);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(350);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(351);
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
			setState(353);
			match(ID);
			setState(354);
			match(EQ);
			setState(355);
			property_values();
			setState(356);
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
			setState(378);
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
			setState(380);
			match(ID);
			setState(384);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(381);
				match(ID);
				}
				}
				setState(386);
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
			setState(387);
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
			setState(389);
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
			setState(391);
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
			setState(393);
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
			setState(395);
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
			setState(397);
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
			setState(399);
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
			setState(401);
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
			setState(403);
			match(ID);
			setState(407);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(404);
				match(ID);
				}
				}
				setState(409);
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
			setState(410);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 29360128L) != 0)) ) {
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
		"\u0004\u0001\u001e\u019d\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
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
		"\u0001\b\u0001\b\u0003\b\u00a4\b\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001"+
		"\t\u0005\t\u00ab\b\t\n\t\f\t\u00ae\t\t\u0001\t\u0001\t\u0001\n\u0001\n"+
		"\u0001\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001"+
		"\r\u0001\r\u0005\r\u00c4\b\r\n\r\f\r\u00c7\t\r\u0001\r\u0001\r\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f"+
		"\u0001\u000f\u0001\u000f\u0001\u000f\u0005\u000f\u00d5\b\u000f\n\u000f"+
		"\f\u000f\u00d8\t\u000f\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0011"+
		"\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012"+
		"\u0005\u0012\u00ea\b\u0012\n\u0012\f\u0012\u00ed\t\u0012\u0001\u0012\u0001"+
		"\u0012\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001"+
		"\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0005\u0014\u00fa\b\u0014\n"+
		"\u0014\f\u0014\u00fd\t\u0014\u0001\u0014\u0001\u0014\u0001\u0015\u0001"+
		"\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0016\u0001\u0016\u0001"+
		"\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001"+
		"\u0016\u0005\u0016\u010f\b\u0016\n\u0016\f\u0016\u0112\t\u0016\u0001\u0016"+
		"\u0001\u0016\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017"+
		"\u0001\u0017\u0001\u0017\u0003\u0017\u011d\b\u0017\u0001\u0017\u0001\u0017"+
		"\u0001\u0017\u0005\u0017\u0122\b\u0017\n\u0017\f\u0017\u0125\t\u0017\u0001"+
		"\u0017\u0001\u0017\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0001"+
		"\u0018\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001"+
		"\u0019\u0001\u0019\u0005\u0019\u0135\b\u0019\n\u0019\f\u0019\u0138\t\u0019"+
		"\u0001\u0019\u0001\u0019\u0001\u001a\u0001\u001a\u0001\u001a\u0001\u001a"+
		"\u0001\u001a\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b"+
		"\u0001\u001b\u0001\u001b\u0005\u001b\u0148\b\u001b\n\u001b\f\u001b\u014b"+
		"\t\u001b\u0001\u001b\u0001\u001b\u0001\u001c\u0001\u001c\u0001\u001c\u0001"+
		"\u001c\u0001\u001c\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001d\u0001"+
		"\u001d\u0001\u001d\u0001\u001d\u0005\u001d\u015b\b\u001d\n\u001d\f\u001d"+
		"\u015e\t\u001d\u0001\u001d\u0001\u001d\u0001\u001e\u0001\u001e\u0001\u001e"+
		"\u0001\u001e\u0001\u001e\u0001\u001f\u0001\u001f\u0001\u001f\u0001\u001f"+
		"\u0001\u001f\u0001 \u0001 \u0001 \u0001 \u0001 \u0001!\u0001!\u0001!\u0001"+
		"!\u0001!\u0001\"\u0001\"\u0001\"\u0001\"\u0001\"\u0001#\u0001#\u0001$"+
		"\u0001$\u0005$\u017f\b$\n$\f$\u0182\t$\u0001%\u0001%\u0001&\u0001&\u0001"+
		"\'\u0001\'\u0001(\u0001(\u0001)\u0001)\u0001*\u0001*\u0001+\u0001+\u0001"+
		",\u0001,\u0001-\u0001-\u0005-\u0196\b-\n-\f-\u0199\t-\u0001.\u0001.\u0001"+
		".\u0000\u0000/\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016"+
		"\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\\u0000\u0001"+
		"\u0001\u0000\u0016\u0018\u019e\u0000b\u0001\u0000\u0000\u0000\u0002i\u0001"+
		"\u0000\u0000\u0000\u0004k\u0001\u0000\u0000\u0000\u0006v\u0001\u0000\u0000"+
		"\u0000\b\u0089\u0001\u0000\u0000\u0000\n\u008b\u0001\u0000\u0000\u0000"+
		"\f\u0097\u0001\u0000\u0000\u0000\u000e\u009e\u0001\u0000\u0000\u0000\u0010"+
		"\u00a3\u0001\u0000\u0000\u0000\u0012\u00a5\u0001\u0000\u0000\u0000\u0014"+
		"\u00b1\u0001\u0000\u0000\u0000\u0016\u00b6\u0001\u0000\u0000\u0000\u0018"+
		"\u00bc\u0001\u0000\u0000\u0000\u001a\u00be\u0001\u0000\u0000\u0000\u001c"+
		"\u00ca\u0001\u0000\u0000\u0000\u001e\u00cf\u0001\u0000\u0000\u0000 \u00db"+
		"\u0001\u0000\u0000\u0000\"\u00e0\u0001\u0000\u0000\u0000$\u00e5\u0001"+
		"\u0000\u0000\u0000&\u00f0\u0001\u0000\u0000\u0000(\u00f5\u0001\u0000\u0000"+
		"\u0000*\u0100\u0001\u0000\u0000\u0000,\u0105\u0001\u0000\u0000\u0000."+
		"\u011c\u0001\u0000\u0000\u00000\u0128\u0001\u0000\u0000\u00002\u012d\u0001"+
		"\u0000\u0000\u00004\u013b\u0001\u0000\u0000\u00006\u0140\u0001\u0000\u0000"+
		"\u00008\u014e\u0001\u0000\u0000\u0000:\u0153\u0001\u0000\u0000\u0000<"+
		"\u0161\u0001\u0000\u0000\u0000>\u0166\u0001\u0000\u0000\u0000@\u016b\u0001"+
		"\u0000\u0000\u0000B\u0170\u0001\u0000\u0000\u0000D\u0175\u0001\u0000\u0000"+
		"\u0000F\u017a\u0001\u0000\u0000\u0000H\u017c\u0001\u0000\u0000\u0000J"+
		"\u0183\u0001\u0000\u0000\u0000L\u0185\u0001\u0000\u0000\u0000N\u0187\u0001"+
		"\u0000\u0000\u0000P\u0189\u0001\u0000\u0000\u0000R\u018b\u0001\u0000\u0000"+
		"\u0000T\u018d\u0001\u0000\u0000\u0000V\u018f\u0001\u0000\u0000\u0000X"+
		"\u0191\u0001\u0000\u0000\u0000Z\u0193\u0001\u0000\u0000\u0000\\\u019a"+
		"\u0001\u0000\u0000\u0000^a\u0003\u0002\u0001\u0000_a\u0005\u001c\u0000"+
		"\u0000`^\u0001\u0000\u0000\u0000`_\u0001\u0000\u0000\u0000ad\u0001\u0000"+
		"\u0000\u0000b`\u0001\u0000\u0000\u0000bc\u0001\u0000\u0000\u0000ce\u0001"+
		"\u0000\u0000\u0000db\u0001\u0000\u0000\u0000ef\u0005\u0000\u0000\u0001"+
		"f\u0001\u0001\u0000\u0000\u0000gj\u0003\u0004\u0002\u0000hj\u0003\u0006"+
		"\u0003\u0000ig\u0001\u0000\u0000\u0000ih\u0001\u0000\u0000\u0000j\u0003"+
		"\u0001\u0000\u0000\u0000kl\u0005\u0001\u0000\u0000lm\u0003R)\u0000mq\u0005"+
		"\u001c\u0000\u0000np\u0003D\"\u0000on\u0001\u0000\u0000\u0000ps\u0001"+
		"\u0000\u0000\u0000qo\u0001\u0000\u0000\u0000qr\u0001\u0000\u0000\u0000"+
		"rt\u0001\u0000\u0000\u0000sq\u0001\u0000\u0000\u0000tu\u0003\\.\u0000"+
		"u\u0005\u0001\u0000\u0000\u0000vw\u0005\u0002\u0000\u0000wx\u0003T*\u0000"+
		"x\u0082\u0005\u001c\u0000\u0000y\u0081\u0003\b\u0004\u0000z\u0081\u0003"+
		"\u000e\u0007\u0000{\u0081\u0003>\u001f\u0000|\u0081\u0003\u0010\b\u0000"+
		"}\u0081\u0003$\u0012\u0000~\u0081\u0003(\u0014\u0000\u007f\u0081\u0005"+
		"\u001c\u0000\u0000\u0080y\u0001\u0000\u0000\u0000\u0080z\u0001\u0000\u0000"+
		"\u0000\u0080{\u0001\u0000\u0000\u0000\u0080|\u0001\u0000\u0000\u0000\u0080"+
		"}\u0001\u0000\u0000\u0000\u0080~\u0001\u0000\u0000\u0000\u0080\u007f\u0001"+
		"\u0000\u0000\u0000\u0081\u0084\u0001\u0000\u0000\u0000\u0082\u0080\u0001"+
		"\u0000\u0000\u0000\u0082\u0083\u0001\u0000\u0000\u0000\u0083\u0085\u0001"+
		"\u0000\u0000\u0000\u0084\u0082\u0001\u0000\u0000\u0000\u0085\u0086\u0003"+
		"\\.\u0000\u0086\u0007\u0001\u0000\u0000\u0000\u0087\u008a\u0003\n\u0005"+
		"\u0000\u0088\u008a\u0003\f\u0006\u0000\u0089\u0087\u0001\u0000\u0000\u0000"+
		"\u0089\u0088\u0001\u0000\u0000\u0000\u008a\t\u0001\u0000\u0000\u0000\u008b"+
		"\u008c\u0005\u0003\u0000\u0000\u008c\u0092\u0005\u001c\u0000\u0000\u008d"+
		"\u0091\u0003\u000e\u0007\u0000\u008e\u0091\u0003>\u001f\u0000\u008f\u0091"+
		"\u0005\u001c\u0000\u0000\u0090\u008d\u0001\u0000\u0000\u0000\u0090\u008e"+
		"\u0001\u0000\u0000\u0000\u0090\u008f\u0001\u0000\u0000\u0000\u0091\u0094"+
		"\u0001\u0000\u0000\u0000\u0092\u0090\u0001\u0000\u0000\u0000\u0092\u0093"+
		"\u0001\u0000\u0000\u0000\u0093\u0095\u0001\u0000\u0000\u0000\u0094\u0092"+
		"\u0001\u0000\u0000\u0000\u0095\u0096\u0003\\.\u0000\u0096\u000b\u0001"+
		"\u0000\u0000\u0000\u0097\u0098\u0005\u0004\u0000\u0000\u0098\u0099\u0003"+
		"P(\u0000\u0099\r\u0001\u0000\u0000\u0000\u009a\u009f\u0003,\u0016\u0000"+
		"\u009b\u009f\u00032\u0019\u0000\u009c\u009f\u00036\u001b\u0000\u009d\u009f"+
		"\u0003:\u001d\u0000\u009e\u009a\u0001\u0000\u0000\u0000\u009e\u009b\u0001"+
		"\u0000\u0000\u0000\u009e\u009c\u0001\u0000\u0000\u0000\u009e\u009d\u0001"+
		"\u0000\u0000\u0000\u009f\u000f\u0001\u0000\u0000\u0000\u00a0\u00a4\u0003"+
		"\u0012\t\u0000\u00a1\u00a4\u0003\u001a\r\u0000\u00a2\u00a4\u0003\u001e"+
		"\u000f\u0000\u00a3\u00a0\u0001\u0000\u0000\u0000\u00a3\u00a1\u0001\u0000"+
		"\u0000\u0000\u00a3\u00a2\u0001\u0000\u0000\u0000\u00a4\u0011\u0001\u0000"+
		"\u0000\u0000\u00a5\u00a6\u0005\u0005\u0000\u0000\u00a6\u00ac\u0005\u001c"+
		"\u0000\u0000\u00a7\u00ab\u0003\u0014\n\u0000\u00a8\u00ab\u0003\u0016\u000b"+
		"\u0000\u00a9\u00ab\u0005\u001c\u0000\u0000\u00aa\u00a7\u0001\u0000\u0000"+
		"\u0000\u00aa\u00a8\u0001\u0000\u0000\u0000\u00aa\u00a9\u0001\u0000\u0000"+
		"\u0000\u00ab\u00ae\u0001\u0000\u0000\u0000\u00ac\u00aa\u0001\u0000\u0000"+
		"\u0000\u00ac\u00ad\u0001\u0000\u0000\u0000\u00ad\u00af\u0001\u0000\u0000"+
		"\u0000\u00ae\u00ac\u0001\u0000\u0000\u0000\u00af\u00b0\u0003\\.\u0000"+
		"\u00b0\u0013\u0001\u0000\u0000\u0000\u00b1\u00b2\u0005\u0006\u0000\u0000"+
		"\u00b2\u00b3\u0005\u0019\u0000\u0000\u00b3\u00b4\u0003Z-\u0000\u00b4\u00b5"+
		"\u0005\u001c\u0000\u0000\u00b5\u0015\u0001\u0000\u0000\u0000\u00b6\u00b7"+
		"\u0005\u0007\u0000\u0000\u00b7\u00b8\u0005\u0019\u0000\u0000\u00b8\u00b9"+
		"\u0003\u0018\f\u0000\u00b9\u00ba\u0003Z-\u0000\u00ba\u00bb\u0005\u001c"+
		"\u0000\u0000\u00bb\u0017\u0001\u0000\u0000\u0000\u00bc\u00bd\u0005\u001b"+
		"\u0000\u0000\u00bd\u0019\u0001\u0000\u0000\u0000\u00be\u00bf\u0005\b\u0000"+
		"\u0000\u00bf\u00c5\u0005\u001c\u0000\u0000\u00c0\u00c4\u0003\u0014\n\u0000"+
		"\u00c1\u00c4\u0003\u001c\u000e\u0000\u00c2\u00c4\u0005\u001c\u0000\u0000"+
		"\u00c3\u00c0\u0001\u0000\u0000\u0000\u00c3\u00c1\u0001\u0000\u0000\u0000"+
		"\u00c3\u00c2\u0001\u0000\u0000\u0000\u00c4\u00c7\u0001\u0000\u0000\u0000"+
		"\u00c5\u00c3\u0001\u0000\u0000\u0000\u00c5\u00c6\u0001\u0000\u0000\u0000"+
		"\u00c6\u00c8\u0001\u0000\u0000\u0000\u00c7\u00c5\u0001\u0000\u0000\u0000"+
		"\u00c8\u00c9\u0003\\.\u0000\u00c9\u001b\u0001\u0000\u0000\u0000\u00ca"+
		"\u00cb\u0005\t\u0000\u0000\u00cb\u00cc\u0005\u0019\u0000\u0000\u00cc\u00cd"+
		"\u0003Z-\u0000\u00cd\u00ce\u0005\u001c\u0000\u0000\u00ce\u001d\u0001\u0000"+
		"\u0000\u0000\u00cf\u00d0\u0005\n\u0000\u0000\u00d0\u00d6\u0005\u001c\u0000"+
		"\u0000\u00d1\u00d5\u0003 \u0010\u0000\u00d2\u00d5\u0003\"\u0011\u0000"+
		"\u00d3\u00d5\u0005\u001c\u0000\u0000\u00d4\u00d1\u0001\u0000\u0000\u0000"+
		"\u00d4\u00d2\u0001\u0000\u0000\u0000\u00d4\u00d3\u0001\u0000\u0000\u0000"+
		"\u00d5\u00d8\u0001\u0000\u0000\u0000\u00d6\u00d4\u0001\u0000\u0000\u0000"+
		"\u00d6\u00d7\u0001\u0000\u0000\u0000\u00d7\u00d9\u0001\u0000\u0000\u0000"+
		"\u00d8\u00d6\u0001\u0000\u0000\u0000\u00d9\u00da\u0003\\.\u0000\u00da"+
		"\u001f\u0001\u0000\u0000\u0000\u00db\u00dc\u0005\u0002\u0000\u0000\u00dc"+
		"\u00dd\u0005\u0019\u0000\u0000\u00dd\u00de\u0003Z-\u0000\u00de\u00df\u0005"+
		"\u001c\u0000\u0000\u00df!\u0001\u0000\u0000\u0000\u00e0\u00e1\u0005\u000b"+
		"\u0000\u0000\u00e1\u00e2\u0005\u0019\u0000\u0000\u00e2\u00e3\u0003Z-\u0000"+
		"\u00e3\u00e4\u0005\u001c\u0000\u0000\u00e4#\u0001\u0000\u0000\u0000\u00e5"+
		"\u00e6\u0005\f\u0000\u0000\u00e6\u00eb\u0005\u001c\u0000\u0000\u00e7\u00ea"+
		"\u0003&\u0013\u0000\u00e8\u00ea\u0005\u001c\u0000\u0000\u00e9\u00e7\u0001"+
		"\u0000\u0000\u0000\u00e9\u00e8\u0001\u0000\u0000\u0000\u00ea\u00ed\u0001"+
		"\u0000\u0000\u0000\u00eb\u00e9\u0001\u0000\u0000\u0000\u00eb\u00ec\u0001"+
		"\u0000\u0000\u0000\u00ec\u00ee\u0001\u0000\u0000\u0000\u00ed\u00eb\u0001"+
		"\u0000\u0000\u0000\u00ee\u00ef\u0003\\.\u0000\u00ef%\u0001\u0000\u0000"+
		"\u0000\u00f0\u00f1\u0005\u001b\u0000\u0000\u00f1\u00f2\u0005\u0019\u0000"+
		"\u0000\u00f2\u00f3\u0003Z-\u0000\u00f3\u00f4\u0005\u001c\u0000\u0000\u00f4"+
		"\'\u0001\u0000\u0000\u0000\u00f5\u00f6\u0005\r\u0000\u0000\u00f6\u00fb"+
		"\u0005\u001c\u0000\u0000\u00f7\u00fa\u0003*\u0015\u0000\u00f8\u00fa\u0005"+
		"\u001c\u0000\u0000\u00f9\u00f7\u0001\u0000\u0000\u0000\u00f9\u00f8\u0001"+
		"\u0000\u0000\u0000\u00fa\u00fd\u0001\u0000\u0000\u0000\u00fb\u00f9\u0001"+
		"\u0000\u0000\u0000\u00fb\u00fc\u0001\u0000\u0000\u0000\u00fc\u00fe\u0001"+
		"\u0000\u0000\u0000\u00fd\u00fb\u0001\u0000\u0000\u0000\u00fe\u00ff\u0003"+
		"\\.\u0000\u00ff)\u0001\u0000\u0000\u0000\u0100\u0101\u0005\u001b\u0000"+
		"\u0000\u0101\u0102\u0005\u0019\u0000\u0000\u0102\u0103\u0003Z-\u0000\u0103"+
		"\u0104\u0005\u001c\u0000\u0000\u0104+\u0001\u0000\u0000\u0000\u0105\u0106"+
		"\u0005\u000e\u0000\u0000\u0106\u0107\u0005\u0019\u0000\u0000\u0107\u0108"+
		"\u0003F#\u0000\u0108\u0109\u0003P(\u0000\u0109\u0110\u0005\u001c\u0000"+
		"\u0000\u010a\u010f\u0003.\u0017\u0000\u010b\u010f\u00030\u0018\u0000\u010c"+
		"\u010f\u0003@ \u0000\u010d\u010f\u0005\u001c\u0000\u0000\u010e\u010a\u0001"+
		"\u0000\u0000\u0000\u010e\u010b\u0001\u0000\u0000\u0000\u010e\u010c\u0001"+
		"\u0000\u0000\u0000\u010e\u010d\u0001\u0000\u0000\u0000\u010f\u0112\u0001"+
		"\u0000\u0000\u0000\u0110\u010e\u0001\u0000\u0000\u0000\u0110\u0111\u0001"+
		"\u0000\u0000\u0000\u0111\u0113\u0001\u0000\u0000\u0000\u0112\u0110\u0001"+
		"\u0000\u0000\u0000\u0113\u0114\u0003\\.\u0000\u0114-\u0001\u0000\u0000"+
		"\u0000\u0115\u011d\u0005\u000f\u0000\u0000\u0116\u0117\u0005\u0010\u0000"+
		"\u0000\u0117\u0118\u0005\u0019\u0000\u0000\u0118\u011d\u0003H$\u0000\u0119"+
		"\u011a\u0005\u0011\u0000\u0000\u011a\u011b\u0005\u0019\u0000\u0000\u011b"+
		"\u011d\u0003H$\u0000\u011c\u0115\u0001\u0000\u0000\u0000\u011c\u0116\u0001"+
		"\u0000\u0000\u0000\u011c\u0119\u0001\u0000\u0000\u0000\u011d\u011e\u0001"+
		"\u0000\u0000\u0000\u011e\u0123\u0005\u001c\u0000\u0000\u011f\u0122\u0003"+
		"B!\u0000\u0120\u0122\u0005\u001c\u0000\u0000\u0121\u011f\u0001\u0000\u0000"+
		"\u0000\u0121\u0120\u0001\u0000\u0000\u0000\u0122\u0125\u0001\u0000\u0000"+
		"\u0000\u0123\u0121\u0001\u0000\u0000\u0000\u0123\u0124\u0001\u0000\u0000"+
		"\u0000\u0124\u0126\u0001\u0000\u0000\u0000\u0125\u0123\u0001\u0000\u0000"+
		"\u0000\u0126\u0127\u0003\\.\u0000\u0127/\u0001\u0000\u0000\u0000\u0128"+
		"\u0129\u0005\u0012\u0000\u0000\u0129\u012a\u0005\u0019\u0000\u0000\u012a"+
		"\u012b\u0003H$\u0000\u012b\u012c\u0005\u001c\u0000\u0000\u012c1\u0001"+
		"\u0000\u0000\u0000\u012d\u012e\u0005\u0013\u0000\u0000\u012e\u012f\u0005"+
		"\u0019\u0000\u0000\u012f\u0130\u0003J%\u0000\u0130\u0131\u0003P(\u0000"+
		"\u0131\u0136\u0005\u001c\u0000\u0000\u0132\u0135\u00034\u001a\u0000\u0133"+
		"\u0135\u0005\u001c\u0000\u0000\u0134\u0132\u0001\u0000\u0000\u0000\u0134"+
		"\u0133\u0001\u0000\u0000\u0000\u0135\u0138\u0001\u0000\u0000\u0000\u0136"+
		"\u0134\u0001\u0000\u0000\u0000\u0136\u0137\u0001\u0000\u0000\u0000\u0137"+
		"\u0139\u0001\u0000\u0000\u0000\u0138\u0136\u0001\u0000\u0000\u0000\u0139"+
		"\u013a\u0003\\.\u0000\u013a3\u0001\u0000\u0000\u0000\u013b\u013c\u0005"+
		"\u001b\u0000\u0000\u013c\u013d\u0005\u0019\u0000\u0000\u013d\u013e\u0003"+
		"Z-\u0000\u013e\u013f\u0005\u001c\u0000\u0000\u013f5\u0001\u0000\u0000"+
		"\u0000\u0140\u0141\u0005\u0014\u0000\u0000\u0141\u0142\u0005\u0019\u0000"+
		"\u0000\u0142\u0143\u0003L&\u0000\u0143\u0144\u0003P(\u0000\u0144\u0149"+
		"\u0005\u001c\u0000\u0000\u0145\u0148\u00038\u001c\u0000\u0146\u0148\u0005"+
		"\u001c\u0000\u0000\u0147\u0145\u0001\u0000\u0000\u0000\u0147\u0146\u0001"+
		"\u0000\u0000\u0000\u0148\u014b\u0001\u0000\u0000\u0000\u0149\u0147\u0001"+
		"\u0000\u0000\u0000\u0149\u014a\u0001\u0000\u0000\u0000\u014a\u014c\u0001"+
		"\u0000\u0000\u0000\u014b\u0149\u0001\u0000\u0000\u0000\u014c\u014d\u0003"+
		"\\.\u0000\u014d7\u0001\u0000\u0000\u0000\u014e\u014f\u0005\u001b\u0000"+
		"\u0000\u014f\u0150\u0005\u0019\u0000\u0000\u0150\u0151\u0003Z-\u0000\u0151"+
		"\u0152\u0005\u001c\u0000\u0000\u01529\u0001\u0000\u0000\u0000\u0153\u0154"+
		"\u0005\u0015\u0000\u0000\u0154\u0155\u0005\u0019\u0000\u0000\u0155\u0156"+
		"\u0003N\'\u0000\u0156\u0157\u0003P(\u0000\u0157\u015c\u0005\u001c\u0000"+
		"\u0000\u0158\u015b\u0003<\u001e\u0000\u0159\u015b\u0005\u001c\u0000\u0000"+
		"\u015a\u0158\u0001\u0000\u0000\u0000\u015a\u0159\u0001\u0000\u0000\u0000"+
		"\u015b\u015e\u0001\u0000\u0000\u0000\u015c\u015a\u0001\u0000\u0000\u0000"+
		"\u015c\u015d\u0001\u0000\u0000\u0000\u015d\u015f\u0001\u0000\u0000\u0000"+
		"\u015e\u015c\u0001\u0000\u0000\u0000\u015f\u0160\u0003\\.\u0000\u0160"+
		";\u0001\u0000\u0000\u0000\u0161\u0162\u0005\u001b\u0000\u0000\u0162\u0163"+
		"\u0005\u0019\u0000\u0000\u0163\u0164\u0003Z-\u0000\u0164\u0165\u0005\u001c"+
		"\u0000\u0000\u0165=\u0001\u0000\u0000\u0000\u0166\u0167\u0005\u001b\u0000"+
		"\u0000\u0167\u0168\u0005\u0019\u0000\u0000\u0168\u0169\u0003Z-\u0000\u0169"+
		"\u016a\u0005\u001c\u0000\u0000\u016a?\u0001\u0000\u0000\u0000\u016b\u016c"+
		"\u0005\u001b\u0000\u0000\u016c\u016d\u0005\u0019\u0000\u0000\u016d\u016e"+
		"\u0003Z-\u0000\u016e\u016f\u0005\u001c\u0000\u0000\u016fA\u0001\u0000"+
		"\u0000\u0000\u0170\u0171\u0005\u001b\u0000\u0000\u0171\u0172\u0005\u0019"+
		"\u0000\u0000\u0172\u0173\u0003Z-\u0000\u0173\u0174\u0005\u001c\u0000\u0000"+
		"\u0174C\u0001\u0000\u0000\u0000\u0175\u0176\u0005\u001b\u0000\u0000\u0176"+
		"\u0177\u0005\u0019\u0000\u0000\u0177\u0178\u0003Z-\u0000\u0178\u0179\u0005"+
		"\u001c\u0000\u0000\u0179E\u0001\u0000\u0000\u0000\u017a\u017b\u0005\u001b"+
		"\u0000\u0000\u017bG\u0001\u0000\u0000\u0000\u017c\u0180\u0005\u001b\u0000"+
		"\u0000\u017d\u017f\u0005\u001b\u0000\u0000\u017e\u017d\u0001\u0000\u0000"+
		"\u0000\u017f\u0182\u0001\u0000\u0000\u0000\u0180\u017e\u0001\u0000\u0000"+
		"\u0000\u0180\u0181\u0001\u0000\u0000\u0000\u0181I\u0001\u0000\u0000\u0000"+
		"\u0182\u0180\u0001\u0000\u0000\u0000\u0183\u0184\u0005\u001b\u0000\u0000"+
		"\u0184K\u0001\u0000\u0000\u0000\u0185\u0186\u0005\u001b\u0000\u0000\u0186"+
		"M\u0001\u0000\u0000\u0000\u0187\u0188\u0005\u001b\u0000\u0000\u0188O\u0001"+
		"\u0000\u0000\u0000\u0189\u018a\u0005\u001b\u0000\u0000\u018aQ\u0001\u0000"+
		"\u0000\u0000\u018b\u018c\u0005\u001b\u0000\u0000\u018cS\u0001\u0000\u0000"+
		"\u0000\u018d\u018e\u0005\u001b\u0000\u0000\u018eU\u0001\u0000\u0000\u0000"+
		"\u018f\u0190\u0005\u001b\u0000\u0000\u0190W\u0001\u0000\u0000\u0000\u0191"+
		"\u0192\u0005\u001b\u0000\u0000\u0192Y\u0001\u0000\u0000\u0000\u0193\u0197"+
		"\u0005\u001b\u0000\u0000\u0194\u0196\u0005\u001b\u0000\u0000\u0195\u0194"+
		"\u0001\u0000\u0000\u0000\u0196\u0199\u0001\u0000\u0000\u0000\u0197\u0195"+
		"\u0001\u0000\u0000\u0000\u0197\u0198\u0001\u0000\u0000\u0000\u0198[\u0001"+
		"\u0000\u0000\u0000\u0199\u0197\u0001\u0000\u0000\u0000\u019a\u019b\u0007"+
		"\u0000\u0000\u0000\u019b]\u0001\u0000\u0000\u0000\"`biq\u0080\u0082\u0089"+
		"\u0090\u0092\u009e\u00a3\u00aa\u00ac\u00c3\u00c5\u00d4\u00d6\u00e9\u00eb"+
		"\u00f9\u00fb\u010e\u0110\u011c\u0121\u0123\u0134\u0136\u0147\u0149\u015a"+
		"\u015c\u0180\u0197";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}