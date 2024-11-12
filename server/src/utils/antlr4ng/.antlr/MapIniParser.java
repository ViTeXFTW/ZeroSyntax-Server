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
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, T__29=30, T__30=31, 
		T__31=32, T__32=33, T__33=34, T__34=35, T__35=36, T__36=37, T__37=38, 
		TURRET=39, EQ=40, STRING=41, ID=42, NEWLINE=43, WS=44, COMMENT=45;
	public static final int
		RULE_program = 0, RULE_class = 1, RULE_simpleClass = 2, RULE_class_identifier = 3, 
		RULE_class_value = 4, RULE_objectReskinClass = 5, RULE_objectReskin_identifier = 6, 
		RULE_objectClass = 7, RULE_object_identifier = 8, RULE_module_modifier = 9, 
		RULE_addModule = 10, RULE_removeModule = 11, RULE_module = 12, RULE_objectSets = 13, 
		RULE_objectWeaponSet = 14, RULE_objectWeaponSetProperty = 15, RULE_objectArmorSet = 16, 
		RULE_objectArmorSetProperty = 17, RULE_objectPrerequisite = 18, RULE_objectPrerequisiteProperty = 19, 
		RULE_objectUnitSpecificSounds = 20, RULE_objectUnitSpecificSoundsProperty = 21, 
		RULE_objectUnitSpecificFX = 22, RULE_objectUnitSpecificFXProperty = 23, 
		RULE_drawModule = 24, RULE_conditionState = 25, RULE_defaultConditionStateBlock = 26, 
		RULE_conditionStateBlock = 27, RULE_transitionStateBlock = 28, RULE_aliasCondition = 29, 
		RULE_bodyModule = 30, RULE_bodyModuleProperty = 31, RULE_behaviorModule = 32, 
		RULE_behaviorModuleProperty = 33, RULE_turretBlock = 34, RULE_turretProperty = 35, 
		RULE_clientModule = 36, RULE_clientModuleProperty = 37, RULE_objectProperty = 38, 
		RULE_drawModuleProperty = 39, RULE_conditionStateProperty = 40, RULE_property = 41, 
		RULE_drawModule_type = 42, RULE_conditionState_values = 43, RULE_bodyModule_type = 44, 
		RULE_behaviorModule_type = 45, RULE_clientModule_type = 46, RULE_moduleTag_value = 47, 
		RULE_mappedImage_value = 48, RULE_object_value = 49, RULE_locomotor_modifier = 50, 
		RULE_property_values = 51, RULE_property_value = 52, RULE_end = 53;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "class", "simpleClass", "class_identifier", "class_value", 
			"objectReskinClass", "objectReskin_identifier", "objectClass", "object_identifier", 
			"module_modifier", "addModule", "removeModule", "module", "objectSets", 
			"objectWeaponSet", "objectWeaponSetProperty", "objectArmorSet", "objectArmorSetProperty", 
			"objectPrerequisite", "objectPrerequisiteProperty", "objectUnitSpecificSounds", 
			"objectUnitSpecificSoundsProperty", "objectUnitSpecificFX", "objectUnitSpecificFXProperty", 
			"drawModule", "conditionState", "defaultConditionStateBlock", "conditionStateBlock", 
			"transitionStateBlock", "aliasCondition", "bodyModule", "bodyModuleProperty", 
			"behaviorModule", "behaviorModuleProperty", "turretBlock", "turretProperty", 
			"clientModule", "clientModuleProperty", "objectProperty", "drawModuleProperty", 
			"conditionStateProperty", "property", "drawModule_type", "conditionState_values", 
			"bodyModule_type", "behaviorModule_type", "clientModule_type", "moduleTag_value", 
			"mappedImage_value", "object_value", "locomotor_modifier", "property_values", 
			"property_value", "end"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'Animation'", "'Armor'", "'AudioEvent'", "'CommandButton'", "'CommandSet'", 
			"'DamageFX'", "'DialogEvent'", "'FXList'", "'InGameUI'", "'Locomotor'", 
			"'ParticleSystem'", "'Rank'", "'Science'", "'SpecialPower'", "'Upgrade'", 
			"'WaterTransparency'", "'Weapon'", "'Weather'", "'ObjectReskin'", "'Object'", 
			"'AddModule'", "'RemoveModule'", "'WeaponSet'", "'ArmorSet'", "'Prerequisites'", 
			"'UnitSpecificSounds'", "'UnitSpecificFX'", "'Draw'", "'DefaultConditionState'", 
			"'ConditionState'", "'TransitionState'", "'AliasConditionState'", "'Body'", 
			"'Behavior'", "'ClientUpdate'", "'End'", "'end'", "'END'", null, "'='"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, "TURRET", "EQ", "STRING", "ID", "NEWLINE", "WS", "COMMENT"
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
			setState(112);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 8796095119358L) != 0)) {
				{
				setState(110);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__0:
				case T__1:
				case T__2:
				case T__3:
				case T__4:
				case T__5:
				case T__6:
				case T__7:
				case T__8:
				case T__9:
				case T__10:
				case T__11:
				case T__12:
				case T__13:
				case T__14:
				case T__15:
				case T__16:
				case T__17:
				case T__18:
				case T__19:
					{
					setState(108);
					class_();
					}
					break;
				case NEWLINE:
					{
					setState(109);
					match(NEWLINE);
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
		public ObjectClassContext objectClass() {
			return getRuleContext(ObjectClassContext.class,0);
		}
		public ObjectReskinClassContext objectReskinClass() {
			return getRuleContext(ObjectReskinClassContext.class,0);
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
			setState(120);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
			case T__1:
			case T__2:
			case T__3:
			case T__4:
			case T__5:
			case T__6:
			case T__7:
			case T__8:
			case T__9:
			case T__10:
			case T__11:
			case T__12:
			case T__13:
			case T__14:
			case T__15:
			case T__16:
			case T__17:
				enterOuterAlt(_localctx, 1);
				{
				setState(117);
				simpleClass();
				}
				break;
			case T__19:
				enterOuterAlt(_localctx, 2);
				{
				setState(118);
				objectClass();
				}
				break;
			case T__18:
				enterOuterAlt(_localctx, 3);
				{
				setState(119);
				objectReskinClass();
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
			setState(122);
			class_identifier();
			setState(123);
			class_value();
			setState(124);
			match(NEWLINE);
			setState(129);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 13194140057598L) != 0)) {
				{
				setState(127);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__0:
				case T__1:
				case T__2:
				case T__3:
				case T__4:
				case T__5:
				case T__6:
				case T__7:
				case T__8:
				case T__9:
				case T__10:
				case T__11:
				case T__12:
				case T__13:
				case T__14:
				case T__15:
				case T__16:
				case T__17:
				case ID:
					{
					setState(125);
					property();
					}
					break;
				case NEWLINE:
					{
					setState(126);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(131);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(132);
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
		public Class_identifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_class_identifier; }
	}

	public final Class_identifierContext class_identifier() throws RecognitionException {
		Class_identifierContext _localctx = new Class_identifierContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_class_identifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(134);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 524286L) != 0)) ) {
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
	public static class Class_valueContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Class_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_class_value; }
	}

	public final Class_valueContext class_value() throws RecognitionException {
		Class_valueContext _localctx = new Class_valueContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_class_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(136);
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
	public static class ObjectReskinClassContext extends ParserRuleContext {
		public ObjectReskin_identifierContext objectReskin_identifier() {
			return getRuleContext(ObjectReskin_identifierContext.class,0);
		}
		public List<Object_valueContext> object_value() {
			return getRuleContexts(Object_valueContext.class);
		}
		public Object_valueContext object_value(int i) {
			return getRuleContext(Object_valueContext.class,i);
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
		public ObjectReskinClassContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectReskinClass; }
	}

	public final ObjectReskinClassContext objectReskinClass() throws RecognitionException {
		ObjectReskinClassContext _localctx = new ObjectReskinClassContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_objectReskinClass);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(138);
			objectReskin_identifier();
			setState(139);
			object_value();
			setState(140);
			object_value();
			setState(141);
			match(NEWLINE);
			setState(151);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 13254804373502L) != 0)) {
				{
				setState(149);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__20:
				case T__21:
					{
					setState(142);
					module_modifier();
					}
					break;
				case T__27:
				case T__32:
				case T__33:
				case T__34:
					{
					setState(143);
					module();
					}
					break;
				case T__0:
				case T__1:
				case T__2:
				case T__3:
				case T__4:
				case T__5:
				case T__6:
				case T__7:
				case T__8:
				case T__9:
				case T__10:
				case T__11:
				case T__12:
				case T__13:
				case T__14:
				case T__15:
				case T__16:
				case T__17:
				case ID:
					{
					setState(144);
					objectProperty();
					}
					break;
				case T__22:
				case T__23:
				case T__24:
					{
					setState(145);
					objectSets();
					}
					break;
				case T__25:
					{
					setState(146);
					objectUnitSpecificSounds();
					}
					break;
				case T__26:
					{
					setState(147);
					objectUnitSpecificFX();
					}
					break;
				case NEWLINE:
					{
					setState(148);
					match(NEWLINE);
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
	public static class ObjectReskin_identifierContext extends ParserRuleContext {
		public ObjectReskin_identifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectReskin_identifier; }
	}

	public final ObjectReskin_identifierContext objectReskin_identifier() throws RecognitionException {
		ObjectReskin_identifierContext _localctx = new ObjectReskin_identifierContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_objectReskin_identifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(156);
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

	@SuppressWarnings("CheckReturnValue")
	public static class ObjectClassContext extends ParserRuleContext {
		public Object_identifierContext object_identifier() {
			return getRuleContext(Object_identifierContext.class,0);
		}
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
		enterRule(_localctx, 14, RULE_objectClass);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(158);
			object_identifier();
			setState(159);
			object_value();
			setState(160);
			match(NEWLINE);
			setState(170);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 13254804373502L) != 0)) {
				{
				setState(168);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__20:
				case T__21:
					{
					setState(161);
					module_modifier();
					}
					break;
				case T__27:
				case T__32:
				case T__33:
				case T__34:
					{
					setState(162);
					module();
					}
					break;
				case T__0:
				case T__1:
				case T__2:
				case T__3:
				case T__4:
				case T__5:
				case T__6:
				case T__7:
				case T__8:
				case T__9:
				case T__10:
				case T__11:
				case T__12:
				case T__13:
				case T__14:
				case T__15:
				case T__16:
				case T__17:
				case ID:
					{
					setState(163);
					objectProperty();
					}
					break;
				case T__22:
				case T__23:
				case T__24:
					{
					setState(164);
					objectSets();
					}
					break;
				case T__25:
					{
					setState(165);
					objectUnitSpecificSounds();
					}
					break;
				case T__26:
					{
					setState(166);
					objectUnitSpecificFX();
					}
					break;
				case NEWLINE:
					{
					setState(167);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(172);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(173);
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
	public static class Object_identifierContext extends ParserRuleContext {
		public Object_identifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_object_identifier; }
	}

	public final Object_identifierContext object_identifier() throws RecognitionException {
		Object_identifierContext _localctx = new Object_identifierContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_object_identifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(175);
			match(T__19);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
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
		enterRule(_localctx, 18, RULE_module_modifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(179);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__20:
				{
				setState(177);
				addModule();
				}
				break;
			case T__21:
				{
				setState(178);
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
		enterRule(_localctx, 20, RULE_addModule);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(181);
			match(T__20);
			setState(182);
			match(NEWLINE);
			setState(188);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 13254538035198L) != 0)) {
				{
				setState(186);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__27:
				case T__32:
				case T__33:
				case T__34:
					{
					setState(183);
					module();
					}
					break;
				case T__0:
				case T__1:
				case T__2:
				case T__3:
				case T__4:
				case T__5:
				case T__6:
				case T__7:
				case T__8:
				case T__9:
				case T__10:
				case T__11:
				case T__12:
				case T__13:
				case T__14:
				case T__15:
				case T__16:
				case T__17:
				case ID:
					{
					setState(184);
					objectProperty();
					}
					break;
				case NEWLINE:
					{
					setState(185);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(190);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(191);
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
		enterRule(_localctx, 22, RULE_removeModule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(193);
			match(T__21);
			setState(194);
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
		enterRule(_localctx, 24, RULE_module);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(200);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__27:
				{
				setState(196);
				drawModule();
				}
				break;
			case T__32:
				{
				setState(197);
				bodyModule();
				}
				break;
			case T__33:
				{
				setState(198);
				behaviorModule();
				}
				break;
			case T__34:
				{
				setState(199);
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
		enterRule(_localctx, 26, RULE_objectSets);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(205);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__22:
				{
				setState(202);
				objectWeaponSet();
				}
				break;
			case T__23:
				{
				setState(203);
				objectArmorSet();
				}
				break;
			case T__24:
				{
				setState(204);
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
		enterRule(_localctx, 28, RULE_objectWeaponSet);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(207);
			match(T__22);
			setState(208);
			match(NEWLINE);
			setState(213);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 13194140057598L) != 0)) {
				{
				setState(211);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__0:
				case T__1:
				case T__2:
				case T__3:
				case T__4:
				case T__5:
				case T__6:
				case T__7:
				case T__8:
				case T__9:
				case T__10:
				case T__11:
				case T__12:
				case T__13:
				case T__14:
				case T__15:
				case T__16:
				case T__17:
				case ID:
					{
					setState(209);
					objectWeaponSetProperty();
					}
					break;
				case NEWLINE:
					{
					setState(210);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(215);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(216);
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
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Property_valuesContext property_values() {
			return getRuleContext(Property_valuesContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(MapIniParser.NEWLINE, 0); }
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Class_identifierContext class_identifier() {
			return getRuleContext(Class_identifierContext.class,0);
		}
		public ObjectWeaponSetPropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectWeaponSetProperty; }
	}

	public final ObjectWeaponSetPropertyContext objectWeaponSetProperty() throws RecognitionException {
		ObjectWeaponSetPropertyContext _localctx = new ObjectWeaponSetPropertyContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_objectWeaponSetProperty);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(220);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				{
				setState(218);
				match(ID);
				}
				break;
			case T__0:
			case T__1:
			case T__2:
			case T__3:
			case T__4:
			case T__5:
			case T__6:
			case T__7:
			case T__8:
			case T__9:
			case T__10:
			case T__11:
			case T__12:
			case T__13:
			case T__14:
			case T__15:
			case T__16:
			case T__17:
				{
				setState(219);
				class_identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
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
		enterRule(_localctx, 32, RULE_objectArmorSet);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(226);
			match(T__23);
			setState(227);
			match(NEWLINE);
			setState(232);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 13194140057598L) != 0)) {
				{
				setState(230);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__0:
				case T__1:
				case T__2:
				case T__3:
				case T__4:
				case T__5:
				case T__6:
				case T__7:
				case T__8:
				case T__9:
				case T__10:
				case T__11:
				case T__12:
				case T__13:
				case T__14:
				case T__15:
				case T__16:
				case T__17:
				case ID:
					{
					setState(228);
					objectArmorSetProperty();
					}
					break;
				case NEWLINE:
					{
					setState(229);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(234);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(235);
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
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Property_valuesContext property_values() {
			return getRuleContext(Property_valuesContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(MapIniParser.NEWLINE, 0); }
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Class_identifierContext class_identifier() {
			return getRuleContext(Class_identifierContext.class,0);
		}
		public ObjectArmorSetPropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectArmorSetProperty; }
	}

	public final ObjectArmorSetPropertyContext objectArmorSetProperty() throws RecognitionException {
		ObjectArmorSetPropertyContext _localctx = new ObjectArmorSetPropertyContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_objectArmorSetProperty);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(239);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				{
				setState(237);
				match(ID);
				}
				break;
			case T__0:
			case T__1:
			case T__2:
			case T__3:
			case T__4:
			case T__5:
			case T__6:
			case T__7:
			case T__8:
			case T__9:
			case T__10:
			case T__11:
			case T__12:
			case T__13:
			case T__14:
			case T__15:
			case T__16:
			case T__17:
				{
				setState(238);
				class_identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
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
		enterRule(_localctx, 36, RULE_objectPrerequisite);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(245);
			match(T__24);
			setState(246);
			match(NEWLINE);
			setState(251);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 13194141106174L) != 0)) {
				{
				setState(249);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__0:
				case T__1:
				case T__2:
				case T__3:
				case T__4:
				case T__5:
				case T__6:
				case T__7:
				case T__8:
				case T__9:
				case T__10:
				case T__11:
				case T__12:
				case T__13:
				case T__14:
				case T__15:
				case T__16:
				case T__17:
				case T__19:
				case ID:
					{
					setState(247);
					objectPrerequisiteProperty();
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
	public static class ObjectPrerequisitePropertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Property_valuesContext property_values() {
			return getRuleContext(Property_valuesContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(MapIniParser.NEWLINE, 0); }
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Class_identifierContext class_identifier() {
			return getRuleContext(Class_identifierContext.class,0);
		}
		public Object_identifierContext object_identifier() {
			return getRuleContext(Object_identifierContext.class,0);
		}
		public ObjectPrerequisitePropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectPrerequisiteProperty; }
	}

	public final ObjectPrerequisitePropertyContext objectPrerequisiteProperty() throws RecognitionException {
		ObjectPrerequisitePropertyContext _localctx = new ObjectPrerequisitePropertyContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_objectPrerequisiteProperty);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(259);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				{
				setState(256);
				match(ID);
				}
				break;
			case T__0:
			case T__1:
			case T__2:
			case T__3:
			case T__4:
			case T__5:
			case T__6:
			case T__7:
			case T__8:
			case T__9:
			case T__10:
			case T__11:
			case T__12:
			case T__13:
			case T__14:
			case T__15:
			case T__16:
			case T__17:
				{
				setState(257);
				class_identifier();
				}
				break;
			case T__19:
				{
				setState(258);
				object_identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(261);
			match(EQ);
			setState(262);
			property_values();
			setState(263);
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
		enterRule(_localctx, 40, RULE_objectUnitSpecificSounds);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(265);
			match(T__25);
			setState(266);
			match(NEWLINE);
			setState(271);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID || _la==NEWLINE) {
				{
				setState(269);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case ID:
					{
					setState(267);
					objectUnitSpecificSoundsProperty();
					}
					break;
				case NEWLINE:
					{
					setState(268);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(273);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(274);
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
		enterRule(_localctx, 42, RULE_objectUnitSpecificSoundsProperty);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(276);
			match(ID);
			setState(277);
			match(EQ);
			setState(278);
			property_values();
			setState(279);
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
		enterRule(_localctx, 44, RULE_objectUnitSpecificFX);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(281);
			match(T__26);
			setState(282);
			match(NEWLINE);
			setState(287);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID || _la==NEWLINE) {
				{
				setState(285);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case ID:
					{
					setState(283);
					objectUnitSpecificFXProperty();
					}
					break;
				case NEWLINE:
					{
					setState(284);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(289);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(290);
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
		enterRule(_localctx, 46, RULE_objectUnitSpecificFXProperty);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(292);
			match(ID);
			setState(293);
			match(EQ);
			setState(294);
			property_values();
			setState(295);
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
		enterRule(_localctx, 48, RULE_drawModule);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(297);
			match(T__27);
			setState(298);
			match(EQ);
			setState(299);
			drawModule_type();
			setState(300);
			moduleTag_value();
			setState(301);
			match(NEWLINE);
			setState(308);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 13202192596992L) != 0)) {
				{
				setState(306);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__28:
				case T__29:
				case T__30:
					{
					setState(302);
					conditionState();
					}
					break;
				case T__31:
					{
					setState(303);
					aliasCondition();
					}
					break;
				case ID:
					{
					setState(304);
					drawModuleProperty();
					}
					break;
				case NEWLINE:
					{
					setState(305);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(310);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(311);
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
		enterRule(_localctx, 50, RULE_conditionState);
		try {
			setState(316);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__28:
				enterOuterAlt(_localctx, 1);
				{
				setState(313);
				defaultConditionStateBlock();
				}
				break;
			case T__29:
				enterOuterAlt(_localctx, 2);
				{
				setState(314);
				conditionStateBlock();
				}
				break;
			case T__30:
				enterOuterAlt(_localctx, 3);
				{
				setState(315);
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
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
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
		enterRule(_localctx, 52, RULE_defaultConditionStateBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(318);
			match(T__28);
			setState(319);
			match(NEWLINE);
			setState(324);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 13743895871486L) != 0)) {
				{
				setState(322);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__0:
				case T__1:
				case T__2:
				case T__3:
				case T__4:
				case T__5:
				case T__6:
				case T__7:
				case T__8:
				case T__9:
				case T__10:
				case T__11:
				case T__12:
				case T__13:
				case T__14:
				case T__15:
				case T__16:
				case T__17:
				case TURRET:
				case ID:
					{
					setState(320);
					conditionStateProperty();
					}
					break;
				case NEWLINE:
					{
					setState(321);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(326);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(327);
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
		enterRule(_localctx, 54, RULE_conditionStateBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(329);
			match(T__29);
			setState(330);
			match(EQ);
			setState(331);
			conditionState_values();
			setState(332);
			match(NEWLINE);
			setState(337);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 13743895871486L) != 0)) {
				{
				setState(335);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__0:
				case T__1:
				case T__2:
				case T__3:
				case T__4:
				case T__5:
				case T__6:
				case T__7:
				case T__8:
				case T__9:
				case T__10:
				case T__11:
				case T__12:
				case T__13:
				case T__14:
				case T__15:
				case T__16:
				case T__17:
				case TURRET:
				case ID:
					{
					setState(333);
					conditionStateProperty();
					}
					break;
				case NEWLINE:
					{
					setState(334);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(339);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(340);
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
		enterRule(_localctx, 56, RULE_transitionStateBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(342);
			match(T__30);
			setState(343);
			match(EQ);
			setState(344);
			conditionState_values();
			setState(345);
			match(NEWLINE);
			setState(350);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 13743895871486L) != 0)) {
				{
				setState(348);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__0:
				case T__1:
				case T__2:
				case T__3:
				case T__4:
				case T__5:
				case T__6:
				case T__7:
				case T__8:
				case T__9:
				case T__10:
				case T__11:
				case T__12:
				case T__13:
				case T__14:
				case T__15:
				case T__16:
				case T__17:
				case TURRET:
				case ID:
					{
					setState(346);
					conditionStateProperty();
					}
					break;
				case NEWLINE:
					{
					setState(347);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(352);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(353);
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
		enterRule(_localctx, 58, RULE_aliasCondition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(355);
			match(T__31);
			setState(356);
			match(EQ);
			setState(357);
			conditionState_values();
			setState(358);
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
		enterRule(_localctx, 60, RULE_bodyModule);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(360);
			match(T__32);
			setState(361);
			match(EQ);
			setState(362);
			bodyModule_type();
			setState(363);
			moduleTag_value();
			setState(364);
			match(NEWLINE);
			setState(369);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID || _la==NEWLINE) {
				{
				setState(367);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case ID:
					{
					setState(365);
					bodyModuleProperty();
					}
					break;
				case NEWLINE:
					{
					setState(366);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(371);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(372);
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
		enterRule(_localctx, 62, RULE_bodyModuleProperty);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(374);
			match(ID);
			setState(375);
			match(EQ);
			setState(376);
			property_values();
			setState(377);
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
		public List<TurretBlockContext> turretBlock() {
			return getRuleContexts(TurretBlockContext.class);
		}
		public TurretBlockContext turretBlock(int i) {
			return getRuleContext(TurretBlockContext.class,i);
		}
		public BehaviorModuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_behaviorModule; }
	}

	public final BehaviorModuleContext behaviorModule() throws RecognitionException {
		BehaviorModuleContext _localctx = new BehaviorModuleContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_behaviorModule);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(379);
			match(T__33);
			setState(380);
			match(EQ);
			setState(381);
			behaviorModule_type();
			setState(382);
			moduleTag_value();
			setState(383);
			match(NEWLINE);
			setState(389);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 13743895871486L) != 0)) {
				{
				setState(387);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__0:
				case T__1:
				case T__2:
				case T__3:
				case T__4:
				case T__5:
				case T__6:
				case T__7:
				case T__8:
				case T__9:
				case T__10:
				case T__11:
				case T__12:
				case T__13:
				case T__14:
				case T__15:
				case T__16:
				case T__17:
				case ID:
					{
					setState(384);
					behaviorModuleProperty();
					}
					break;
				case TURRET:
					{
					setState(385);
					turretBlock();
					}
					break;
				case NEWLINE:
					{
					setState(386);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(391);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(392);
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
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Property_valuesContext property_values() {
			return getRuleContext(Property_valuesContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(MapIniParser.NEWLINE, 0); }
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Class_identifierContext class_identifier() {
			return getRuleContext(Class_identifierContext.class,0);
		}
		public BehaviorModulePropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_behaviorModuleProperty; }
	}

	public final BehaviorModulePropertyContext behaviorModuleProperty() throws RecognitionException {
		BehaviorModulePropertyContext _localctx = new BehaviorModulePropertyContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_behaviorModuleProperty);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(396);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				{
				setState(394);
				match(ID);
				}
				break;
			case T__0:
			case T__1:
			case T__2:
			case T__3:
			case T__4:
			case T__5:
			case T__6:
			case T__7:
			case T__8:
			case T__9:
			case T__10:
			case T__11:
			case T__12:
			case T__13:
			case T__14:
			case T__15:
			case T__16:
			case T__17:
				{
				setState(395);
				class_identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(398);
			match(EQ);
			setState(399);
			property_values();
			setState(400);
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
	public static class TurretBlockContext extends ParserRuleContext {
		public TerminalNode TURRET() { return getToken(MapIniParser.TURRET, 0); }
		public List<TerminalNode> NEWLINE() { return getTokens(MapIniParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(MapIniParser.NEWLINE, i);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<TurretPropertyContext> turretProperty() {
			return getRuleContexts(TurretPropertyContext.class);
		}
		public TurretPropertyContext turretProperty(int i) {
			return getRuleContext(TurretPropertyContext.class,i);
		}
		public TurretBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_turretBlock; }
	}

	public final TurretBlockContext turretBlock() throws RecognitionException {
		TurretBlockContext _localctx = new TurretBlockContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_turretBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(402);
			match(TURRET);
			setState(403);
			match(NEWLINE);
			setState(408);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 13194141106174L) != 0)) {
				{
				setState(406);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__0:
				case T__1:
				case T__2:
				case T__3:
				case T__4:
				case T__5:
				case T__6:
				case T__7:
				case T__8:
				case T__9:
				case T__10:
				case T__11:
				case T__12:
				case T__13:
				case T__14:
				case T__15:
				case T__16:
				case T__17:
				case T__19:
				case ID:
					{
					setState(404);
					turretProperty();
					}
					break;
				case NEWLINE:
					{
					setState(405);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(410);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(411);
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
	public static class TurretPropertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Property_valuesContext property_values() {
			return getRuleContext(Property_valuesContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(MapIniParser.NEWLINE, 0); }
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Class_identifierContext class_identifier() {
			return getRuleContext(Class_identifierContext.class,0);
		}
		public Object_identifierContext object_identifier() {
			return getRuleContext(Object_identifierContext.class,0);
		}
		public TurretPropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_turretProperty; }
	}

	public final TurretPropertyContext turretProperty() throws RecognitionException {
		TurretPropertyContext _localctx = new TurretPropertyContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_turretProperty);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(416);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				{
				setState(413);
				match(ID);
				}
				break;
			case T__0:
			case T__1:
			case T__2:
			case T__3:
			case T__4:
			case T__5:
			case T__6:
			case T__7:
			case T__8:
			case T__9:
			case T__10:
			case T__11:
			case T__12:
			case T__13:
			case T__14:
			case T__15:
			case T__16:
			case T__17:
				{
				setState(414);
				class_identifier();
				}
				break;
			case T__19:
				{
				setState(415);
				object_identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(418);
			match(EQ);
			setState(419);
			property_values();
			setState(420);
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
		enterRule(_localctx, 72, RULE_clientModule);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(422);
			match(T__34);
			setState(423);
			match(EQ);
			setState(424);
			clientModule_type();
			setState(425);
			moduleTag_value();
			setState(426);
			match(NEWLINE);
			setState(431);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID || _la==NEWLINE) {
				{
				setState(429);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case ID:
					{
					setState(427);
					clientModuleProperty();
					}
					break;
				case NEWLINE:
					{
					setState(428);
					match(NEWLINE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(433);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(434);
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
		enterRule(_localctx, 74, RULE_clientModuleProperty);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(436);
			match(ID);
			setState(437);
			match(EQ);
			setState(438);
			property_values();
			setState(439);
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
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Property_valuesContext property_values() {
			return getRuleContext(Property_valuesContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(MapIniParser.NEWLINE, 0); }
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Class_identifierContext class_identifier() {
			return getRuleContext(Class_identifierContext.class,0);
		}
		public ObjectPropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectProperty; }
	}

	public final ObjectPropertyContext objectProperty() throws RecognitionException {
		ObjectPropertyContext _localctx = new ObjectPropertyContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_objectProperty);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(443);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				{
				setState(441);
				match(ID);
				}
				break;
			case T__0:
			case T__1:
			case T__2:
			case T__3:
			case T__4:
			case T__5:
			case T__6:
			case T__7:
			case T__8:
			case T__9:
			case T__10:
			case T__11:
			case T__12:
			case T__13:
			case T__14:
			case T__15:
			case T__16:
			case T__17:
				{
				setState(442);
				class_identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(445);
			match(EQ);
			setState(446);
			property_values();
			setState(447);
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
		enterRule(_localctx, 78, RULE_drawModuleProperty);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(449);
			match(ID);
			setState(450);
			match(EQ);
			setState(451);
			property_values();
			setState(452);
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
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Property_valuesContext property_values() {
			return getRuleContext(Property_valuesContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(MapIniParser.NEWLINE, 0); }
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Class_identifierContext class_identifier() {
			return getRuleContext(Class_identifierContext.class,0);
		}
		public TerminalNode TURRET() { return getToken(MapIniParser.TURRET, 0); }
		public ConditionStatePropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conditionStateProperty; }
	}

	public final ConditionStatePropertyContext conditionStateProperty() throws RecognitionException {
		ConditionStatePropertyContext _localctx = new ConditionStatePropertyContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_conditionStateProperty);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(457);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				{
				setState(454);
				match(ID);
				}
				break;
			case T__0:
			case T__1:
			case T__2:
			case T__3:
			case T__4:
			case T__5:
			case T__6:
			case T__7:
			case T__8:
			case T__9:
			case T__10:
			case T__11:
			case T__12:
			case T__13:
			case T__14:
			case T__15:
			case T__16:
			case T__17:
				{
				setState(455);
				class_identifier();
				}
				break;
			case TURRET:
				{
				setState(456);
				match(TURRET);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(459);
			match(EQ);
			setState(460);
			property_values();
			setState(461);
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
		public Property_valueContext property_value() {
			return getRuleContext(Property_valueContext.class,0);
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
		enterRule(_localctx, 82, RULE_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(463);
			property_value();
			setState(464);
			match(EQ);
			setState(465);
			property_values();
			setState(466);
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
		enterRule(_localctx, 84, RULE_drawModule_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(468);
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
		enterRule(_localctx, 86, RULE_conditionState_values);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(470);
			match(ID);
			setState(474);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(471);
				match(ID);
				}
				}
				setState(476);
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
		enterRule(_localctx, 88, RULE_bodyModule_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(477);
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
		enterRule(_localctx, 90, RULE_behaviorModule_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(479);
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
		enterRule(_localctx, 92, RULE_clientModule_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(481);
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
		enterRule(_localctx, 94, RULE_moduleTag_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(483);
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
		enterRule(_localctx, 96, RULE_mappedImage_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(485);
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
		enterRule(_localctx, 98, RULE_object_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(487);
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
		enterRule(_localctx, 100, RULE_locomotor_modifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(489);
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
		public List<Property_valueContext> property_value() {
			return getRuleContexts(Property_valueContext.class);
		}
		public Property_valueContext property_value(int i) {
			return getRuleContext(Property_valueContext.class,i);
		}
		public Property_valuesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_property_values; }
	}

	public final Property_valuesContext property_values() throws RecognitionException {
		Property_valuesContext _localctx = new Property_valuesContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_property_values);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(491);
			property_value();
			setState(495);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4398047035390L) != 0)) {
				{
				{
				setState(492);
				property_value();
				}
				}
				setState(497);
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
	public static class Property_valueContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Class_identifierContext class_identifier() {
			return getRuleContext(Class_identifierContext.class,0);
		}
		public Object_valueContext object_value() {
			return getRuleContext(Object_valueContext.class,0);
		}
		public Property_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_property_value; }
	}

	public final Property_valueContext property_value() throws RecognitionException {
		Property_valueContext _localctx = new Property_valueContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_property_value);
		try {
			setState(501);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,50,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(498);
				match(ID);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(499);
				class_identifier();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(500);
				object_value();
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
	public static class EndContext extends ParserRuleContext {
		public EndContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_end; }
	}

	public final EndContext end() throws RecognitionException {
		EndContext _localctx = new EndContext(_ctx, getState());
		enterRule(_localctx, 106, RULE_end);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(503);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 481036337152L) != 0)) ) {
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
		"\u0004\u0001-\u01fa\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
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
		"2\u00072\u00023\u00073\u00024\u00074\u00025\u00075\u0001\u0000\u0001\u0000"+
		"\u0005\u0000o\b\u0000\n\u0000\f\u0000r\t\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001y\b\u0001\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0005\u0002\u0080\b\u0002"+
		"\n\u0002\f\u0002\u0083\t\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001"+
		"\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0005\u0005\u0096\b\u0005\n\u0005\f\u0005\u0099\t\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0005\u0007\u00a9\b\u0007\n\u0007\f\u0007\u00ac"+
		"\t\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0003"+
		"\t\u00b4\b\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0005\n\u00bb\b\n"+
		"\n\n\f\n\u00be\t\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\f\u0001\f\u0001\f\u0001\f\u0003\f\u00c9\b\f\u0001\r\u0001\r\u0001"+
		"\r\u0003\r\u00ce\b\r\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0005"+
		"\u000e\u00d4\b\u000e\n\u000e\f\u000e\u00d7\t\u000e\u0001\u000e\u0001\u000e"+
		"\u0001\u000f\u0001\u000f\u0003\u000f\u00dd\b\u000f\u0001\u000f\u0001\u000f"+
		"\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0005\u0010\u00e7\b\u0010\n\u0010\f\u0010\u00ea\t\u0010\u0001\u0010\u0001"+
		"\u0010\u0001\u0011\u0001\u0011\u0003\u0011\u00f0\b\u0011\u0001\u0011\u0001"+
		"\u0011\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012\u0001\u0012\u0001"+
		"\u0012\u0005\u0012\u00fa\b\u0012\n\u0012\f\u0012\u00fd\t\u0012\u0001\u0012"+
		"\u0001\u0012\u0001\u0013\u0001\u0013\u0001\u0013\u0003\u0013\u0104\b\u0013"+
		"\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0014\u0001\u0014"+
		"\u0001\u0014\u0001\u0014\u0005\u0014\u010e\b\u0014\n\u0014\f\u0014\u0111"+
		"\t\u0014\u0001\u0014\u0001\u0014\u0001\u0015\u0001\u0015\u0001\u0015\u0001"+
		"\u0015\u0001\u0015\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0005"+
		"\u0016\u011e\b\u0016\n\u0016\f\u0016\u0121\t\u0016\u0001\u0016\u0001\u0016"+
		"\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0018"+
		"\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018"+
		"\u0001\u0018\u0001\u0018\u0005\u0018\u0133\b\u0018\n\u0018\f\u0018\u0136"+
		"\t\u0018\u0001\u0018\u0001\u0018\u0001\u0019\u0001\u0019\u0001\u0019\u0003"+
		"\u0019\u013d\b\u0019\u0001\u001a\u0001\u001a\u0001\u001a\u0001\u001a\u0005"+
		"\u001a\u0143\b\u001a\n\u001a\f\u001a\u0146\t\u001a\u0001\u001a\u0001\u001a"+
		"\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b"+
		"\u0005\u001b\u0150\b\u001b\n\u001b\f\u001b\u0153\t\u001b\u0001\u001b\u0001"+
		"\u001b\u0001\u001c\u0001\u001c\u0001\u001c\u0001\u001c\u0001\u001c\u0001"+
		"\u001c\u0005\u001c\u015d\b\u001c\n\u001c\f\u001c\u0160\t\u001c\u0001\u001c"+
		"\u0001\u001c\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001d"+
		"\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001e"+
		"\u0001\u001e\u0005\u001e\u0170\b\u001e\n\u001e\f\u001e\u0173\t\u001e\u0001"+
		"\u001e\u0001\u001e\u0001\u001f\u0001\u001f\u0001\u001f\u0001\u001f\u0001"+
		"\u001f\u0001 \u0001 \u0001 \u0001 \u0001 \u0001 \u0001 \u0001 \u0005 "+
		"\u0184\b \n \f \u0187\t \u0001 \u0001 \u0001!\u0001!\u0003!\u018d\b!\u0001"+
		"!\u0001!\u0001!\u0001!\u0001\"\u0001\"\u0001\"\u0001\"\u0005\"\u0197\b"+
		"\"\n\"\f\"\u019a\t\"\u0001\"\u0001\"\u0001#\u0001#\u0001#\u0003#\u01a1"+
		"\b#\u0001#\u0001#\u0001#\u0001#\u0001$\u0001$\u0001$\u0001$\u0001$\u0001"+
		"$\u0001$\u0005$\u01ae\b$\n$\f$\u01b1\t$\u0001$\u0001$\u0001%\u0001%\u0001"+
		"%\u0001%\u0001%\u0001&\u0001&\u0003&\u01bc\b&\u0001&\u0001&\u0001&\u0001"+
		"&\u0001\'\u0001\'\u0001\'\u0001\'\u0001\'\u0001(\u0001(\u0001(\u0003("+
		"\u01ca\b(\u0001(\u0001(\u0001(\u0001(\u0001)\u0001)\u0001)\u0001)\u0001"+
		")\u0001*\u0001*\u0001+\u0001+\u0005+\u01d9\b+\n+\f+\u01dc\t+\u0001,\u0001"+
		",\u0001-\u0001-\u0001.\u0001.\u0001/\u0001/\u00010\u00010\u00011\u0001"+
		"1\u00012\u00012\u00013\u00013\u00053\u01ee\b3\n3\f3\u01f1\t3\u00014\u0001"+
		"4\u00014\u00034\u01f6\b4\u00015\u00015\u00015\u0000\u00006\u0000\u0002"+
		"\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e"+
		" \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bdfhj\u0000\u0002\u0001\u0000\u0001"+
		"\u0012\u0001\u0000$&\u020d\u0000p\u0001\u0000\u0000\u0000\u0002x\u0001"+
		"\u0000\u0000\u0000\u0004z\u0001\u0000\u0000\u0000\u0006\u0086\u0001\u0000"+
		"\u0000\u0000\b\u0088\u0001\u0000\u0000\u0000\n\u008a\u0001\u0000\u0000"+
		"\u0000\f\u009c\u0001\u0000\u0000\u0000\u000e\u009e\u0001\u0000\u0000\u0000"+
		"\u0010\u00af\u0001\u0000\u0000\u0000\u0012\u00b3\u0001\u0000\u0000\u0000"+
		"\u0014\u00b5\u0001\u0000\u0000\u0000\u0016\u00c1\u0001\u0000\u0000\u0000"+
		"\u0018\u00c8\u0001\u0000\u0000\u0000\u001a\u00cd\u0001\u0000\u0000\u0000"+
		"\u001c\u00cf\u0001\u0000\u0000\u0000\u001e\u00dc\u0001\u0000\u0000\u0000"+
		" \u00e2\u0001\u0000\u0000\u0000\"\u00ef\u0001\u0000\u0000\u0000$\u00f5"+
		"\u0001\u0000\u0000\u0000&\u0103\u0001\u0000\u0000\u0000(\u0109\u0001\u0000"+
		"\u0000\u0000*\u0114\u0001\u0000\u0000\u0000,\u0119\u0001\u0000\u0000\u0000"+
		".\u0124\u0001\u0000\u0000\u00000\u0129\u0001\u0000\u0000\u00002\u013c"+
		"\u0001\u0000\u0000\u00004\u013e\u0001\u0000\u0000\u00006\u0149\u0001\u0000"+
		"\u0000\u00008\u0156\u0001\u0000\u0000\u0000:\u0163\u0001\u0000\u0000\u0000"+
		"<\u0168\u0001\u0000\u0000\u0000>\u0176\u0001\u0000\u0000\u0000@\u017b"+
		"\u0001\u0000\u0000\u0000B\u018c\u0001\u0000\u0000\u0000D\u0192\u0001\u0000"+
		"\u0000\u0000F\u01a0\u0001\u0000\u0000\u0000H\u01a6\u0001\u0000\u0000\u0000"+
		"J\u01b4\u0001\u0000\u0000\u0000L\u01bb\u0001\u0000\u0000\u0000N\u01c1"+
		"\u0001\u0000\u0000\u0000P\u01c9\u0001\u0000\u0000\u0000R\u01cf\u0001\u0000"+
		"\u0000\u0000T\u01d4\u0001\u0000\u0000\u0000V\u01d6\u0001\u0000\u0000\u0000"+
		"X\u01dd\u0001\u0000\u0000\u0000Z\u01df\u0001\u0000\u0000\u0000\\\u01e1"+
		"\u0001\u0000\u0000\u0000^\u01e3\u0001\u0000\u0000\u0000`\u01e5\u0001\u0000"+
		"\u0000\u0000b\u01e7\u0001\u0000\u0000\u0000d\u01e9\u0001\u0000\u0000\u0000"+
		"f\u01eb\u0001\u0000\u0000\u0000h\u01f5\u0001\u0000\u0000\u0000j\u01f7"+
		"\u0001\u0000\u0000\u0000lo\u0003\u0002\u0001\u0000mo\u0005+\u0000\u0000"+
		"nl\u0001\u0000\u0000\u0000nm\u0001\u0000\u0000\u0000or\u0001\u0000\u0000"+
		"\u0000pn\u0001\u0000\u0000\u0000pq\u0001\u0000\u0000\u0000qs\u0001\u0000"+
		"\u0000\u0000rp\u0001\u0000\u0000\u0000st\u0005\u0000\u0000\u0001t\u0001"+
		"\u0001\u0000\u0000\u0000uy\u0003\u0004\u0002\u0000vy\u0003\u000e\u0007"+
		"\u0000wy\u0003\n\u0005\u0000xu\u0001\u0000\u0000\u0000xv\u0001\u0000\u0000"+
		"\u0000xw\u0001\u0000\u0000\u0000y\u0003\u0001\u0000\u0000\u0000z{\u0003"+
		"\u0006\u0003\u0000{|\u0003\b\u0004\u0000|\u0081\u0005+\u0000\u0000}\u0080"+
		"\u0003R)\u0000~\u0080\u0005+\u0000\u0000\u007f}\u0001\u0000\u0000\u0000"+
		"\u007f~\u0001\u0000\u0000\u0000\u0080\u0083\u0001\u0000\u0000\u0000\u0081"+
		"\u007f\u0001\u0000\u0000\u0000\u0081\u0082\u0001\u0000\u0000\u0000\u0082"+
		"\u0084\u0001\u0000\u0000\u0000\u0083\u0081\u0001\u0000\u0000\u0000\u0084"+
		"\u0085\u0003j5\u0000\u0085\u0005\u0001\u0000\u0000\u0000\u0086\u0087\u0007"+
		"\u0000\u0000\u0000\u0087\u0007\u0001\u0000\u0000\u0000\u0088\u0089\u0005"+
		"*\u0000\u0000\u0089\t\u0001\u0000\u0000\u0000\u008a\u008b\u0003\f\u0006"+
		"\u0000\u008b\u008c\u0003b1\u0000\u008c\u008d\u0003b1\u0000\u008d\u0097"+
		"\u0005+\u0000\u0000\u008e\u0096\u0003\u0012\t\u0000\u008f\u0096\u0003"+
		"\u0018\f\u0000\u0090\u0096\u0003L&\u0000\u0091\u0096\u0003\u001a\r\u0000"+
		"\u0092\u0096\u0003(\u0014\u0000\u0093\u0096\u0003,\u0016\u0000\u0094\u0096"+
		"\u0005+\u0000\u0000\u0095\u008e\u0001\u0000\u0000\u0000\u0095\u008f\u0001"+
		"\u0000\u0000\u0000\u0095\u0090\u0001\u0000\u0000\u0000\u0095\u0091\u0001"+
		"\u0000\u0000\u0000\u0095\u0092\u0001\u0000\u0000\u0000\u0095\u0093\u0001"+
		"\u0000\u0000\u0000\u0095\u0094\u0001\u0000\u0000\u0000\u0096\u0099\u0001"+
		"\u0000\u0000\u0000\u0097\u0095\u0001\u0000\u0000\u0000\u0097\u0098\u0001"+
		"\u0000\u0000\u0000\u0098\u009a\u0001\u0000\u0000\u0000\u0099\u0097\u0001"+
		"\u0000\u0000\u0000\u009a\u009b\u0003j5\u0000\u009b\u000b\u0001\u0000\u0000"+
		"\u0000\u009c\u009d\u0005\u0013\u0000\u0000\u009d\r\u0001\u0000\u0000\u0000"+
		"\u009e\u009f\u0003\u0010\b\u0000\u009f\u00a0\u0003b1\u0000\u00a0\u00aa"+
		"\u0005+\u0000\u0000\u00a1\u00a9\u0003\u0012\t\u0000\u00a2\u00a9\u0003"+
		"\u0018\f\u0000\u00a3\u00a9\u0003L&\u0000\u00a4\u00a9\u0003\u001a\r\u0000"+
		"\u00a5\u00a9\u0003(\u0014\u0000\u00a6\u00a9\u0003,\u0016\u0000\u00a7\u00a9"+
		"\u0005+\u0000\u0000\u00a8\u00a1\u0001\u0000\u0000\u0000\u00a8\u00a2\u0001"+
		"\u0000\u0000\u0000\u00a8\u00a3\u0001\u0000\u0000\u0000\u00a8\u00a4\u0001"+
		"\u0000\u0000\u0000\u00a8\u00a5\u0001\u0000\u0000\u0000\u00a8\u00a6\u0001"+
		"\u0000\u0000\u0000\u00a8\u00a7\u0001\u0000\u0000\u0000\u00a9\u00ac\u0001"+
		"\u0000\u0000\u0000\u00aa\u00a8\u0001\u0000\u0000\u0000\u00aa\u00ab\u0001"+
		"\u0000\u0000\u0000\u00ab\u00ad\u0001\u0000\u0000\u0000\u00ac\u00aa\u0001"+
		"\u0000\u0000\u0000\u00ad\u00ae\u0003j5\u0000\u00ae\u000f\u0001\u0000\u0000"+
		"\u0000\u00af\u00b0\u0005\u0014\u0000\u0000\u00b0\u0011\u0001\u0000\u0000"+
		"\u0000\u00b1\u00b4\u0003\u0014\n\u0000\u00b2\u00b4\u0003\u0016\u000b\u0000"+
		"\u00b3\u00b1\u0001\u0000\u0000\u0000\u00b3\u00b2\u0001\u0000\u0000\u0000"+
		"\u00b4\u0013\u0001\u0000\u0000\u0000\u00b5\u00b6\u0005\u0015\u0000\u0000"+
		"\u00b6\u00bc\u0005+\u0000\u0000\u00b7\u00bb\u0003\u0018\f\u0000\u00b8"+
		"\u00bb\u0003L&\u0000\u00b9\u00bb\u0005+\u0000\u0000\u00ba\u00b7\u0001"+
		"\u0000\u0000\u0000\u00ba\u00b8\u0001\u0000\u0000\u0000\u00ba\u00b9\u0001"+
		"\u0000\u0000\u0000\u00bb\u00be\u0001\u0000\u0000\u0000\u00bc\u00ba\u0001"+
		"\u0000\u0000\u0000\u00bc\u00bd\u0001\u0000\u0000\u0000\u00bd\u00bf\u0001"+
		"\u0000\u0000\u0000\u00be\u00bc\u0001\u0000\u0000\u0000\u00bf\u00c0\u0003"+
		"j5\u0000\u00c0\u0015\u0001\u0000\u0000\u0000\u00c1\u00c2\u0005\u0016\u0000"+
		"\u0000\u00c2\u00c3\u0003^/\u0000\u00c3\u0017\u0001\u0000\u0000\u0000\u00c4"+
		"\u00c9\u00030\u0018\u0000\u00c5\u00c9\u0003<\u001e\u0000\u00c6\u00c9\u0003"+
		"@ \u0000\u00c7\u00c9\u0003H$\u0000\u00c8\u00c4\u0001\u0000\u0000\u0000"+
		"\u00c8\u00c5\u0001\u0000\u0000\u0000\u00c8\u00c6\u0001\u0000\u0000\u0000"+
		"\u00c8\u00c7\u0001\u0000\u0000\u0000\u00c9\u0019\u0001\u0000\u0000\u0000"+
		"\u00ca\u00ce\u0003\u001c\u000e\u0000\u00cb\u00ce\u0003 \u0010\u0000\u00cc"+
		"\u00ce\u0003$\u0012\u0000\u00cd\u00ca\u0001\u0000\u0000\u0000\u00cd\u00cb"+
		"\u0001\u0000\u0000\u0000\u00cd\u00cc\u0001\u0000\u0000\u0000\u00ce\u001b"+
		"\u0001\u0000\u0000\u0000\u00cf\u00d0\u0005\u0017\u0000\u0000\u00d0\u00d5"+
		"\u0005+\u0000\u0000\u00d1\u00d4\u0003\u001e\u000f\u0000\u00d2\u00d4\u0005"+
		"+\u0000\u0000\u00d3\u00d1\u0001\u0000\u0000\u0000\u00d3\u00d2\u0001\u0000"+
		"\u0000\u0000\u00d4\u00d7\u0001\u0000\u0000\u0000\u00d5\u00d3\u0001\u0000"+
		"\u0000\u0000\u00d5\u00d6\u0001\u0000\u0000\u0000\u00d6\u00d8\u0001\u0000"+
		"\u0000\u0000\u00d7\u00d5\u0001\u0000\u0000\u0000\u00d8\u00d9\u0003j5\u0000"+
		"\u00d9\u001d\u0001\u0000\u0000\u0000\u00da\u00dd\u0005*\u0000\u0000\u00db"+
		"\u00dd\u0003\u0006\u0003\u0000\u00dc\u00da\u0001\u0000\u0000\u0000\u00dc"+
		"\u00db\u0001\u0000\u0000\u0000\u00dd\u00de\u0001\u0000\u0000\u0000\u00de"+
		"\u00df\u0005(\u0000\u0000\u00df\u00e0\u0003f3\u0000\u00e0\u00e1\u0005"+
		"+\u0000\u0000\u00e1\u001f\u0001\u0000\u0000\u0000\u00e2\u00e3\u0005\u0018"+
		"\u0000\u0000\u00e3\u00e8\u0005+\u0000\u0000\u00e4\u00e7\u0003\"\u0011"+
		"\u0000\u00e5\u00e7\u0005+\u0000\u0000\u00e6\u00e4\u0001\u0000\u0000\u0000"+
		"\u00e6\u00e5\u0001\u0000\u0000\u0000\u00e7\u00ea\u0001\u0000\u0000\u0000"+
		"\u00e8\u00e6\u0001\u0000\u0000\u0000\u00e8\u00e9\u0001\u0000\u0000\u0000"+
		"\u00e9\u00eb\u0001\u0000\u0000\u0000\u00ea\u00e8\u0001\u0000\u0000\u0000"+
		"\u00eb\u00ec\u0003j5\u0000\u00ec!\u0001\u0000\u0000\u0000\u00ed\u00f0"+
		"\u0005*\u0000\u0000\u00ee\u00f0\u0003\u0006\u0003\u0000\u00ef\u00ed\u0001"+
		"\u0000\u0000\u0000\u00ef\u00ee\u0001\u0000\u0000\u0000\u00f0\u00f1\u0001"+
		"\u0000\u0000\u0000\u00f1\u00f2\u0005(\u0000\u0000\u00f2\u00f3\u0003f3"+
		"\u0000\u00f3\u00f4\u0005+\u0000\u0000\u00f4#\u0001\u0000\u0000\u0000\u00f5"+
		"\u00f6\u0005\u0019\u0000\u0000\u00f6\u00fb\u0005+\u0000\u0000\u00f7\u00fa"+
		"\u0003&\u0013\u0000\u00f8\u00fa\u0005+\u0000\u0000\u00f9\u00f7\u0001\u0000"+
		"\u0000\u0000\u00f9\u00f8\u0001\u0000\u0000\u0000\u00fa\u00fd\u0001\u0000"+
		"\u0000\u0000\u00fb\u00f9\u0001\u0000\u0000\u0000\u00fb\u00fc\u0001\u0000"+
		"\u0000\u0000\u00fc\u00fe\u0001\u0000\u0000\u0000\u00fd\u00fb\u0001\u0000"+
		"\u0000\u0000\u00fe\u00ff\u0003j5\u0000\u00ff%\u0001\u0000\u0000\u0000"+
		"\u0100\u0104\u0005*\u0000\u0000\u0101\u0104\u0003\u0006\u0003\u0000\u0102"+
		"\u0104\u0003\u0010\b\u0000\u0103\u0100\u0001\u0000\u0000\u0000\u0103\u0101"+
		"\u0001\u0000\u0000\u0000\u0103\u0102\u0001\u0000\u0000\u0000\u0104\u0105"+
		"\u0001\u0000\u0000\u0000\u0105\u0106\u0005(\u0000\u0000\u0106\u0107\u0003"+
		"f3\u0000\u0107\u0108\u0005+\u0000\u0000\u0108\'\u0001\u0000\u0000\u0000"+
		"\u0109\u010a\u0005\u001a\u0000\u0000\u010a\u010f\u0005+\u0000\u0000\u010b"+
		"\u010e\u0003*\u0015\u0000\u010c\u010e\u0005+\u0000\u0000\u010d\u010b\u0001"+
		"\u0000\u0000\u0000\u010d\u010c\u0001\u0000\u0000\u0000\u010e\u0111\u0001"+
		"\u0000\u0000\u0000\u010f\u010d\u0001\u0000\u0000\u0000\u010f\u0110\u0001"+
		"\u0000\u0000\u0000\u0110\u0112\u0001\u0000\u0000\u0000\u0111\u010f\u0001"+
		"\u0000\u0000\u0000\u0112\u0113\u0003j5\u0000\u0113)\u0001\u0000\u0000"+
		"\u0000\u0114\u0115\u0005*\u0000\u0000\u0115\u0116\u0005(\u0000\u0000\u0116"+
		"\u0117\u0003f3\u0000\u0117\u0118\u0005+\u0000\u0000\u0118+\u0001\u0000"+
		"\u0000\u0000\u0119\u011a\u0005\u001b\u0000\u0000\u011a\u011f\u0005+\u0000"+
		"\u0000\u011b\u011e\u0003.\u0017\u0000\u011c\u011e\u0005+\u0000\u0000\u011d"+
		"\u011b\u0001\u0000\u0000\u0000\u011d\u011c\u0001\u0000\u0000\u0000\u011e"+
		"\u0121\u0001\u0000\u0000\u0000\u011f\u011d\u0001\u0000\u0000\u0000\u011f"+
		"\u0120\u0001\u0000\u0000\u0000\u0120\u0122\u0001\u0000\u0000\u0000\u0121"+
		"\u011f\u0001\u0000\u0000\u0000\u0122\u0123\u0003j5\u0000\u0123-\u0001"+
		"\u0000\u0000\u0000\u0124\u0125\u0005*\u0000\u0000\u0125\u0126\u0005(\u0000"+
		"\u0000\u0126\u0127\u0003f3\u0000\u0127\u0128\u0005+\u0000\u0000\u0128"+
		"/\u0001\u0000\u0000\u0000\u0129\u012a\u0005\u001c\u0000\u0000\u012a\u012b"+
		"\u0005(\u0000\u0000\u012b\u012c\u0003T*\u0000\u012c\u012d\u0003^/\u0000"+
		"\u012d\u0134\u0005+\u0000\u0000\u012e\u0133\u00032\u0019\u0000\u012f\u0133"+
		"\u0003:\u001d\u0000\u0130\u0133\u0003N\'\u0000\u0131\u0133\u0005+\u0000"+
		"\u0000\u0132\u012e\u0001\u0000\u0000\u0000\u0132\u012f\u0001\u0000\u0000"+
		"\u0000\u0132\u0130\u0001\u0000\u0000\u0000\u0132\u0131\u0001\u0000\u0000"+
		"\u0000\u0133\u0136\u0001\u0000\u0000\u0000\u0134\u0132\u0001\u0000\u0000"+
		"\u0000\u0134\u0135\u0001\u0000\u0000\u0000\u0135\u0137\u0001\u0000\u0000"+
		"\u0000\u0136\u0134\u0001\u0000\u0000\u0000\u0137\u0138\u0003j5\u0000\u0138"+
		"1\u0001\u0000\u0000\u0000\u0139\u013d\u00034\u001a\u0000\u013a\u013d\u0003"+
		"6\u001b\u0000\u013b\u013d\u00038\u001c\u0000\u013c\u0139\u0001\u0000\u0000"+
		"\u0000\u013c\u013a\u0001\u0000\u0000\u0000\u013c\u013b\u0001\u0000\u0000"+
		"\u0000\u013d3\u0001\u0000\u0000\u0000\u013e\u013f\u0005\u001d\u0000\u0000"+
		"\u013f\u0144\u0005+\u0000\u0000\u0140\u0143\u0003P(\u0000\u0141\u0143"+
		"\u0005+\u0000\u0000\u0142\u0140\u0001\u0000\u0000\u0000\u0142\u0141\u0001"+
		"\u0000\u0000\u0000\u0143\u0146\u0001\u0000\u0000\u0000\u0144\u0142\u0001"+
		"\u0000\u0000\u0000\u0144\u0145\u0001\u0000\u0000\u0000\u0145\u0147\u0001"+
		"\u0000\u0000\u0000\u0146\u0144\u0001\u0000\u0000\u0000\u0147\u0148\u0003"+
		"j5\u0000\u01485\u0001\u0000\u0000\u0000\u0149\u014a\u0005\u001e\u0000"+
		"\u0000\u014a\u014b\u0005(\u0000\u0000\u014b\u014c\u0003V+\u0000\u014c"+
		"\u0151\u0005+\u0000\u0000\u014d\u0150\u0003P(\u0000\u014e\u0150\u0005"+
		"+\u0000\u0000\u014f\u014d\u0001\u0000\u0000\u0000\u014f\u014e\u0001\u0000"+
		"\u0000\u0000\u0150\u0153\u0001\u0000\u0000\u0000\u0151\u014f\u0001\u0000"+
		"\u0000\u0000\u0151\u0152\u0001\u0000\u0000\u0000\u0152\u0154\u0001\u0000"+
		"\u0000\u0000\u0153\u0151\u0001\u0000\u0000\u0000\u0154\u0155\u0003j5\u0000"+
		"\u01557\u0001\u0000\u0000\u0000\u0156\u0157\u0005\u001f\u0000\u0000\u0157"+
		"\u0158\u0005(\u0000\u0000\u0158\u0159\u0003V+\u0000\u0159\u015e\u0005"+
		"+\u0000\u0000\u015a\u015d\u0003P(\u0000\u015b\u015d\u0005+\u0000\u0000"+
		"\u015c\u015a\u0001\u0000\u0000\u0000\u015c\u015b\u0001\u0000\u0000\u0000"+
		"\u015d\u0160\u0001\u0000\u0000\u0000\u015e\u015c\u0001\u0000\u0000\u0000"+
		"\u015e\u015f\u0001\u0000\u0000\u0000\u015f\u0161\u0001\u0000\u0000\u0000"+
		"\u0160\u015e\u0001\u0000\u0000\u0000\u0161\u0162\u0003j5\u0000\u01629"+
		"\u0001\u0000\u0000\u0000\u0163\u0164\u0005 \u0000\u0000\u0164\u0165\u0005"+
		"(\u0000\u0000\u0165\u0166\u0003V+\u0000\u0166\u0167\u0005+\u0000\u0000"+
		"\u0167;\u0001\u0000\u0000\u0000\u0168\u0169\u0005!\u0000\u0000\u0169\u016a"+
		"\u0005(\u0000\u0000\u016a\u016b\u0003X,\u0000\u016b\u016c\u0003^/\u0000"+
		"\u016c\u0171\u0005+\u0000\u0000\u016d\u0170\u0003>\u001f\u0000\u016e\u0170"+
		"\u0005+\u0000\u0000\u016f\u016d\u0001\u0000\u0000\u0000\u016f\u016e\u0001"+
		"\u0000\u0000\u0000\u0170\u0173\u0001\u0000\u0000\u0000\u0171\u016f\u0001"+
		"\u0000\u0000\u0000\u0171\u0172\u0001\u0000\u0000\u0000\u0172\u0174\u0001"+
		"\u0000\u0000\u0000\u0173\u0171\u0001\u0000\u0000\u0000\u0174\u0175\u0003"+
		"j5\u0000\u0175=\u0001\u0000\u0000\u0000\u0176\u0177\u0005*\u0000\u0000"+
		"\u0177\u0178\u0005(\u0000\u0000\u0178\u0179\u0003f3\u0000\u0179\u017a"+
		"\u0005+\u0000\u0000\u017a?\u0001\u0000\u0000\u0000\u017b\u017c\u0005\""+
		"\u0000\u0000\u017c\u017d\u0005(\u0000\u0000\u017d\u017e\u0003Z-\u0000"+
		"\u017e\u017f\u0003^/\u0000\u017f\u0185\u0005+\u0000\u0000\u0180\u0184"+
		"\u0003B!\u0000\u0181\u0184\u0003D\"\u0000\u0182\u0184\u0005+\u0000\u0000"+
		"\u0183\u0180\u0001\u0000\u0000\u0000\u0183\u0181\u0001\u0000\u0000\u0000"+
		"\u0183\u0182\u0001\u0000\u0000\u0000\u0184\u0187\u0001\u0000\u0000\u0000"+
		"\u0185\u0183\u0001\u0000\u0000\u0000\u0185\u0186\u0001\u0000\u0000\u0000"+
		"\u0186\u0188\u0001\u0000\u0000\u0000\u0187\u0185\u0001\u0000\u0000\u0000"+
		"\u0188\u0189\u0003j5\u0000\u0189A\u0001\u0000\u0000\u0000\u018a\u018d"+
		"\u0005*\u0000\u0000\u018b\u018d\u0003\u0006\u0003\u0000\u018c\u018a\u0001"+
		"\u0000\u0000\u0000\u018c\u018b\u0001\u0000\u0000\u0000\u018d\u018e\u0001"+
		"\u0000\u0000\u0000\u018e\u018f\u0005(\u0000\u0000\u018f\u0190\u0003f3"+
		"\u0000\u0190\u0191\u0005+\u0000\u0000\u0191C\u0001\u0000\u0000\u0000\u0192"+
		"\u0193\u0005\'\u0000\u0000\u0193\u0198\u0005+\u0000\u0000\u0194\u0197"+
		"\u0003F#\u0000\u0195\u0197\u0005+\u0000\u0000\u0196\u0194\u0001\u0000"+
		"\u0000\u0000\u0196\u0195\u0001\u0000\u0000\u0000\u0197\u019a\u0001\u0000"+
		"\u0000\u0000\u0198\u0196\u0001\u0000\u0000\u0000\u0198\u0199\u0001\u0000"+
		"\u0000\u0000\u0199\u019b\u0001\u0000\u0000\u0000\u019a\u0198\u0001\u0000"+
		"\u0000\u0000\u019b\u019c\u0003j5\u0000\u019cE\u0001\u0000\u0000\u0000"+
		"\u019d\u01a1\u0005*\u0000\u0000\u019e\u01a1\u0003\u0006\u0003\u0000\u019f"+
		"\u01a1\u0003\u0010\b\u0000\u01a0\u019d\u0001\u0000\u0000\u0000\u01a0\u019e"+
		"\u0001\u0000\u0000\u0000\u01a0\u019f\u0001\u0000\u0000\u0000\u01a1\u01a2"+
		"\u0001\u0000\u0000\u0000\u01a2\u01a3\u0005(\u0000\u0000\u01a3\u01a4\u0003"+
		"f3\u0000\u01a4\u01a5\u0005+\u0000\u0000\u01a5G\u0001\u0000\u0000\u0000"+
		"\u01a6\u01a7\u0005#\u0000\u0000\u01a7\u01a8\u0005(\u0000\u0000\u01a8\u01a9"+
		"\u0003\\.\u0000\u01a9\u01aa\u0003^/\u0000\u01aa\u01af\u0005+\u0000\u0000"+
		"\u01ab\u01ae\u0003J%\u0000\u01ac\u01ae\u0005+\u0000\u0000\u01ad\u01ab"+
		"\u0001\u0000\u0000\u0000\u01ad\u01ac\u0001\u0000\u0000\u0000\u01ae\u01b1"+
		"\u0001\u0000\u0000\u0000\u01af\u01ad\u0001\u0000\u0000\u0000\u01af\u01b0"+
		"\u0001\u0000\u0000\u0000\u01b0\u01b2\u0001\u0000\u0000\u0000\u01b1\u01af"+
		"\u0001\u0000\u0000\u0000\u01b2\u01b3\u0003j5\u0000\u01b3I\u0001\u0000"+
		"\u0000\u0000\u01b4\u01b5\u0005*\u0000\u0000\u01b5\u01b6\u0005(\u0000\u0000"+
		"\u01b6\u01b7\u0003f3\u0000\u01b7\u01b8\u0005+\u0000\u0000\u01b8K\u0001"+
		"\u0000\u0000\u0000\u01b9\u01bc\u0005*\u0000\u0000\u01ba\u01bc\u0003\u0006"+
		"\u0003\u0000\u01bb\u01b9\u0001\u0000\u0000\u0000\u01bb\u01ba\u0001\u0000"+
		"\u0000\u0000\u01bc\u01bd\u0001\u0000\u0000\u0000\u01bd\u01be\u0005(\u0000"+
		"\u0000\u01be\u01bf\u0003f3\u0000\u01bf\u01c0\u0005+\u0000\u0000\u01c0"+
		"M\u0001\u0000\u0000\u0000\u01c1\u01c2\u0005*\u0000\u0000\u01c2\u01c3\u0005"+
		"(\u0000\u0000\u01c3\u01c4\u0003f3\u0000\u01c4\u01c5\u0005+\u0000\u0000"+
		"\u01c5O\u0001\u0000\u0000\u0000\u01c6\u01ca\u0005*\u0000\u0000\u01c7\u01ca"+
		"\u0003\u0006\u0003\u0000\u01c8\u01ca\u0005\'\u0000\u0000\u01c9\u01c6\u0001"+
		"\u0000\u0000\u0000\u01c9\u01c7\u0001\u0000\u0000\u0000\u01c9\u01c8\u0001"+
		"\u0000\u0000\u0000\u01ca\u01cb\u0001\u0000\u0000\u0000\u01cb\u01cc\u0005"+
		"(\u0000\u0000\u01cc\u01cd\u0003f3\u0000\u01cd\u01ce\u0005+\u0000\u0000"+
		"\u01ceQ\u0001\u0000\u0000\u0000\u01cf\u01d0\u0003h4\u0000\u01d0\u01d1"+
		"\u0005(\u0000\u0000\u01d1\u01d2\u0003f3\u0000\u01d2\u01d3\u0005+\u0000"+
		"\u0000\u01d3S\u0001\u0000\u0000\u0000\u01d4\u01d5\u0005*\u0000\u0000\u01d5"+
		"U\u0001\u0000\u0000\u0000\u01d6\u01da\u0005*\u0000\u0000\u01d7\u01d9\u0005"+
		"*\u0000\u0000\u01d8\u01d7\u0001\u0000\u0000\u0000\u01d9\u01dc\u0001\u0000"+
		"\u0000\u0000\u01da\u01d8\u0001\u0000\u0000\u0000\u01da\u01db\u0001\u0000"+
		"\u0000\u0000\u01dbW\u0001\u0000\u0000\u0000\u01dc\u01da\u0001\u0000\u0000"+
		"\u0000\u01dd\u01de\u0005*\u0000\u0000\u01deY\u0001\u0000\u0000\u0000\u01df"+
		"\u01e0\u0005*\u0000\u0000\u01e0[\u0001\u0000\u0000\u0000\u01e1\u01e2\u0005"+
		"*\u0000\u0000\u01e2]\u0001\u0000\u0000\u0000\u01e3\u01e4\u0005*\u0000"+
		"\u0000\u01e4_\u0001\u0000\u0000\u0000\u01e5\u01e6\u0005*\u0000\u0000\u01e6"+
		"a\u0001\u0000\u0000\u0000\u01e7\u01e8\u0005*\u0000\u0000\u01e8c\u0001"+
		"\u0000\u0000\u0000\u01e9\u01ea\u0005*\u0000\u0000\u01eae\u0001\u0000\u0000"+
		"\u0000\u01eb\u01ef\u0003h4\u0000\u01ec\u01ee\u0003h4\u0000\u01ed\u01ec"+
		"\u0001\u0000\u0000\u0000\u01ee\u01f1\u0001\u0000\u0000\u0000\u01ef\u01ed"+
		"\u0001\u0000\u0000\u0000\u01ef\u01f0\u0001\u0000\u0000\u0000\u01f0g\u0001"+
		"\u0000\u0000\u0000\u01f1\u01ef\u0001\u0000\u0000\u0000\u01f2\u01f6\u0005"+
		"*\u0000\u0000\u01f3\u01f6\u0003\u0006\u0003\u0000\u01f4\u01f6\u0003b1"+
		"\u0000\u01f5\u01f2\u0001\u0000\u0000\u0000\u01f5\u01f3\u0001\u0000\u0000"+
		"\u0000\u01f5\u01f4\u0001\u0000\u0000\u0000\u01f6i\u0001\u0000\u0000\u0000"+
		"\u01f7\u01f8\u0007\u0001\u0000\u0000\u01f8k\u0001\u0000\u0000\u00003n"+
		"px\u007f\u0081\u0095\u0097\u00a8\u00aa\u00b3\u00ba\u00bc\u00c8\u00cd\u00d3"+
		"\u00d5\u00dc\u00e6\u00e8\u00ef\u00f9\u00fb\u0103\u010d\u010f\u011d\u011f"+
		"\u0132\u0134\u013c\u0142\u0144\u014f\u0151\u015c\u015e\u016f\u0171\u0183"+
		"\u0185\u018c\u0196\u0198\u01a0\u01ad\u01af\u01bb\u01c9\u01da\u01ef\u01f5";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}