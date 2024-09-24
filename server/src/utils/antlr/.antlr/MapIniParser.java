// Generated from c:/Users/Mads/Sync/ZeroSyntax/ZeroSyntax-Server/server/src/utils/antlr/MapIni.g4 by ANTLR 4.13.1
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
		T__38=39, T__39=40, T__40=41, T__41=42, T__42=43, T__43=44, T__44=45, 
		T__45=46, T__46=47, T__47=48, T__48=49, T__49=50, T__50=51, T__51=52, 
		T__52=53, T__53=54, T__54=55, T__55=56, T__56=57, T__57=58, T__58=59, 
		T__59=60, T__60=61, T__61=62, T__62=63, T__63=64, T__64=65, T__65=66, 
		T__66=67, T__67=68, T__68=69, T__69=70, T__70=71, T__71=72, T__72=73, 
		T__73=74, T__74=75, T__75=76, T__76=77, T__77=78, T__78=79, T__79=80, 
		T__80=81, T__81=82, T__82=83, T__83=84, T__84=85, T__85=86, T__86=87, 
		T__87=88, T__88=89, T__89=90, T__90=91, T__91=92, T__92=93, T__93=94, 
		T__94=95, T__95=96, T__96=97, T__97=98, T__98=99, T__99=100, T__100=101, 
		T__101=102, T__102=103, T__103=104, T__104=105, T__105=106, T__106=107, 
		T__107=108, T__108=109, T__109=110, T__110=111, T__111=112, T__112=113, 
		T__113=114, T__114=115, T__115=116, T__116=117, T__117=118, T__118=119, 
		T__119=120, T__120=121, T__121=122, T__122=123, T__123=124, T__124=125, 
		T__125=126, T__126=127, T__127=128, T__128=129, T__129=130, T__130=131, 
		T__131=132, T__132=133, T__133=134, T__134=135, T__135=136, T__136=137, 
		T__137=138, T__138=139, T__139=140, T__140=141, T__141=142, T__142=143, 
		T__143=144, T__144=145, T__145=146, T__146=147, T__147=148, T__148=149, 
		T__149=150, T__150=151, T__151=152, T__152=153, T__153=154, T__154=155, 
		T__155=156, T__156=157, T__157=158, T__158=159, T__159=160, INT=161, FLOAT=162, 
		PROCENT=163, EQ=164, WEAPONSLOT=165, XCOORD=166, YCOORD=167, COORDLEFT=168, 
		COORDTOP=169, COORDRIGHT=170, COORDBOTTOM=171, A2D_ANIMATION_MODE=172, 
		ARMOR_TYPE=173, MANUAL=174, BOOLEAN=175, NVALUE=176, ID=177, SKIp=178, 
		COMMENT=179, WS=180;
	public static final int
		RULE_program = 0, RULE_classes = 1, RULE_aiDataClass = 2, RULE_aidataClassProperties_single = 3, 
		RULE_aidataClassproperties_BlockSkirmishBuildList = 4, RULE_skirmishBuildListBlock = 5, 
		RULE_skirmishBuildListBlock_structure_properties = 6, RULE_aidataClassProperties_blockSideinfo = 7, 
		RULE_sideinfoproperties = 8, RULE_sideinfo_skillset_blocks = 9, RULE_mappedImageClass = 10, 
		RULE_mappedImageClassProperties = 11, RULE_animation2DClass = 12, RULE_animation2DClassProperties = 13, 
		RULE_armorClass = 14, RULE_armorClassProperties = 15, RULE_commandButtonClass = 16, 
		RULE_commandButtonClassProperties = 17, RULE_commandSetClass = 18, RULE_commandSetClassProperty = 19, 
		RULE_end = 20, RULE_file = 21, RULE_cb_command_property = 22, RULE_cb_command_value = 23, 
		RULE_cb_options_property = 24, RULE_cb_options_value = 25, RULE_cb_buttonimage_property = 26, 
		RULE_cb_buttonbordertype_property = 27, RULE_cb_buttonbordertype_value = 28, 
		RULE_cb_textlabel_property = 29, RULE_cb_descriptionlabel_property = 30, 
		RULE_cb_conflictinglabel_property = 31, RULE_cb_cursorname_propery = 32, 
		RULE_cb_radius_cursorname_value = 33, RULE_cb_invalid_cursorname_propery = 34, 
		RULE_cb_unitspecificsound_property = 35, RULE_commandbutton_value = 36, 
		RULE_cursorname_value = 37, RULE_radius_cursorname_value = 38, RULE_invalid_cursorname_value = 39, 
		RULE_mappedimage_value = 40, RULE_object_property = 41, RULE_object_value = 42, 
		RULE_science_property = 43, RULE_science_value = 44, RULE_specialpower_property = 45, 
		RULE_specialpower_value = 46, RULE_audioevent_value = 47, RULE_upgrade_property = 48, 
		RULE_upgrade_value = 49, RULE_weaponslot_property = 50, RULE_faction = 51;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "classes", "aiDataClass", "aidataClassProperties_single", 
			"aidataClassproperties_BlockSkirmishBuildList", "skirmishBuildListBlock", 
			"skirmishBuildListBlock_structure_properties", "aidataClassProperties_blockSideinfo", 
			"sideinfoproperties", "sideinfo_skillset_blocks", "mappedImageClass", 
			"mappedImageClassProperties", "animation2DClass", "animation2DClassProperties", 
			"armorClass", "armorClassProperties", "commandButtonClass", "commandButtonClassProperties", 
			"commandSetClass", "commandSetClassProperty", "end", "file", "cb_command_property", 
			"cb_command_value", "cb_options_property", "cb_options_value", "cb_buttonimage_property", 
			"cb_buttonbordertype_property", "cb_buttonbordertype_value", "cb_textlabel_property", 
			"cb_descriptionlabel_property", "cb_conflictinglabel_property", "cb_cursorname_propery", 
			"cb_radius_cursorname_value", "cb_invalid_cursorname_propery", "cb_unitspecificsound_property", 
			"commandbutton_value", "cursorname_value", "radius_cursorname_value", 
			"invalid_cursorname_value", "mappedimage_value", "object_property", "object_value", 
			"science_property", "science_value", "specialpower_property", "specialpower_value", 
			"audioevent_value", "upgrade_property", "upgrade_value", "weaponslot_property", 
			"faction"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'AIData'", "'StructureSeconds'", "'TeamSeconds'", "'Wealthy'", 
			"'Poor'", "'StructuresWealthyRate'", "'StructuresPoorRate'", "'TeamsWealthyRate'", 
			"'TeamsPoorRate'", "'TeamResourcesToStart'", "'GuardInnerModifierAI'", 
			"'GuardOuterModifierAI'", "'GuardInnerModifierHuman'", "'GuardOuterModifierHuman'", 
			"'GuardChaseUnitsDuration'", "'GuardEnemyScanRate'", "'GuardEnemyReturnScanRate'", 
			"'AlertRangeModifier'", "'AggressiveRangeModifier'", "'AttackPriorityDistanceModifier'", 
			"'MaxRecruitRadius'", "'SkirmishBaseDefenseExtraDistance'", "'ForceIdleMSEC'", 
			"'ForceSkirmishAI'", "'RotateSkirmishBases'", "'AttackUsesLineOfSight'", 
			"'EnableRepulsors'", "'RepulsedDistance'", "'WallHeight'", "'AttackIgnoreInsignificantBuildings'", 
			"'SkirmishGroupFudgeDistance'", "'MinInfantryForGroup'", "'MinVehiclesForGroup'", 
			"'MinDistanceForGroup'", "'DistanceRequiresGroup'", "'InfantryPathfindDiameter'", 
			"'VehiclePathfindDiameter'", "'SupplyCenterSafeRadius'", "'RebuildDelayTimeSeconds'", 
			"'AIDozerBoredRadiusModifier'", "'AICrushesInfantry'", "'MaxRetaliationDistance'", 
			"'RetaliationFriendsRadius'", "'SkirmishBuildList'", "'Structure'", "'Location'", 
			"'Rebuilds'", "'Angle'", "'InitiallyBuilt'", "'AutomaticallyBuild'", 
			"'SideInfo'", "'ResourceGatherersEasy'", "'ResourceGatherersNormal'", 
			"'ResourceGatherersHard'", "'BaseDefenseStructure1'", "'SkillSet1'", 
			"'SkillSet2'", "'SkillSet3'", "'SkillSet4'", "'SkillSet5'", "'MappedImage'", 
			"'Texture'", "'TextureWidth'", "'TextureHeight'", "'Coords'", "'Status'", 
			"'ROTATED_90_CLOCKWISE'", "'Animation'", "'AnimationMode'", "'AnimationDelay'", 
			"'RandomizeStartFrame'", "'NumberImages'", "'Image'", "'Armor'", "'CommandButton'", 
			"'CommandSet'", "'end'", "'End'", "'END'", "'.'", "'tga'", "'dds'", "'Command'", 
			"'PLACE_BEACON'", "'SPECIAL_POWER'", "'SPECIAL_POWER_FROM_SHORTCUT'", 
			"'PURCHASE_SCIENCE'", "'FIRE_WEAPON'", "'OBJECT_UPGRADE'", "'SWITCH_WEAPON'", 
			"'SET_RALLY_POINT'", "'SELL'", "'TOGGLE_OVERCHARGE'", "'CANCEL_UPGRADE'", 
			"'PLAYER_UPGRADE'", "'EXIT_CONTAINER'", "'EVACUATE'", "'EXECUTE_RAILED_TRANSPORT'", 
			"'COMBATDROP'", "'GUARD'", "'GUARD_WITHOUT_PURSUIT'", "'GUARD_FLYING_UNITS_ONLY'", 
			"'ATTACK_MOVE'", "'STOP'", "'CONVERT_TO_CARBOMB'", "'SABOTAGE_BUILDING'", 
			"'HIJACK_VEHICLE'", "'HACK_INTERNET'", "'DOZER_CONSTRUCT_CANCEL'", "'DOZER_CONSTRUCT'", 
			"'UNIT_BUILD'", "'Options'", "'NEED_TARGET_POS'", "'NEED_SPECIAL_POWER_SCIENCE'", 
			"'CONTEXTMODE_COMMAND'", "'SCRIPT_ONLY'", "'CAN_USE_WAYPOINTS'", "'NEED_TARGET_NEUTRAL_OBJECT'", 
			"'NEED_TARGET_ENEMY_OBJECT'", "'OK_FOR_MULTI_SELECT'", "'NEED_UPGRADE'", 
			"'CHECK_LIKE'", "'OPTION_ONE'", "'OPTION_TWO'", "'OPTION_THREE'", "'NOT_QUEUEABLE'", 
			"'IGNORES_UNDERPOWERED'", "'MUST_BE_STOPPED'", "'USES_MINE_CLEARING_WEAPONSET'", 
			"'NEED_TARGET_ALLY_OBJECT'", "'ButtonImage'", "'ButtonBorderType'", "'ACTION'", 
			"'UPGRADE'", "'SYSTEM'", "'BUILD'", "'TextLabel'", "'DescriptLabel'", 
			"'ConflictingLabel'", "'CursorName'", "'RadiusCursorType'", "'InvalidCursorName'", 
			"'UnitSpecificSound'", "'Object'", "'Science'", "'SpecialPower'", "'Upgrade'", 
			"'WeaponSlot'", "'America'", "'China'", "'GLA'", "'AmericaAirForceGeneral'", 
			"'AmericaLaserGeneral'", "'AmericaSuperWeaponGeneral'", "'ChinaTankGeneral'", 
			"'ChinaInfantryGeneral'", "'ChinaNukeGeneral'", "'GLADemolitionGeneral'", 
			"'GLAStealthGeneral'", "'GLAToxinGeneral'", null, null, null, "'='"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, "INT", "FLOAT", "PROCENT", "EQ", "WEAPONSLOT", 
			"XCOORD", "YCOORD", "COORDLEFT", "COORDTOP", "COORDRIGHT", "COORDBOTTOM", 
			"A2D_ANIMATION_MODE", "ARMOR_TYPE", "MANUAL", "BOOLEAN", "NVALUE", "ID", 
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
			setState(107);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__0 || _la==T__60 || ((((_la - 68)) & ~0x3f) == 0 && ((1L << (_la - 68)) & 449L) != 0)) {
				{
				{
				setState(104);
				classes();
				}
				}
				setState(109);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(110);
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
		public MappedImageClassContext mappedImageClass() {
			return getRuleContext(MappedImageClassContext.class,0);
		}
		public AiDataClassContext aiDataClass() {
			return getRuleContext(AiDataClassContext.class,0);
		}
		public Animation2DClassContext animation2DClass() {
			return getRuleContext(Animation2DClassContext.class,0);
		}
		public ArmorClassContext armorClass() {
			return getRuleContext(ArmorClassContext.class,0);
		}
		public CommandButtonClassContext commandButtonClass() {
			return getRuleContext(CommandButtonClassContext.class,0);
		}
		public CommandSetClassContext commandSetClass() {
			return getRuleContext(CommandSetClassContext.class,0);
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
			setState(118);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__60:
				enterOuterAlt(_localctx, 1);
				{
				setState(112);
				mappedImageClass();
				}
				break;
			case T__0:
				enterOuterAlt(_localctx, 2);
				{
				setState(113);
				aiDataClass();
				}
				break;
			case T__67:
				enterOuterAlt(_localctx, 3);
				{
				setState(114);
				animation2DClass();
				}
				break;
			case T__73:
				enterOuterAlt(_localctx, 4);
				{
				setState(115);
				armorClass();
				}
				break;
			case T__74:
				enterOuterAlt(_localctx, 5);
				{
				setState(116);
				commandButtonClass();
				}
				break;
			case T__75:
				enterOuterAlt(_localctx, 6);
				{
				setState(117);
				commandSetClass();
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
	public static class AiDataClassContext extends ParserRuleContext {
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<AidataClassProperties_singleContext> aidataClassProperties_single() {
			return getRuleContexts(AidataClassProperties_singleContext.class);
		}
		public AidataClassProperties_singleContext aidataClassProperties_single(int i) {
			return getRuleContext(AidataClassProperties_singleContext.class,i);
		}
		public List<AidataClassProperties_blockSideinfoContext> aidataClassProperties_blockSideinfo() {
			return getRuleContexts(AidataClassProperties_blockSideinfoContext.class);
		}
		public AidataClassProperties_blockSideinfoContext aidataClassProperties_blockSideinfo(int i) {
			return getRuleContext(AidataClassProperties_blockSideinfoContext.class,i);
		}
		public List<AidataClassproperties_BlockSkirmishBuildListContext> aidataClassproperties_BlockSkirmishBuildList() {
			return getRuleContexts(AidataClassproperties_BlockSkirmishBuildListContext.class);
		}
		public AidataClassproperties_BlockSkirmishBuildListContext aidataClassproperties_BlockSkirmishBuildList(int i) {
			return getRuleContext(AidataClassproperties_BlockSkirmishBuildListContext.class,i);
		}
		public AiDataClassContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_aiDataClass; }
	}

	public final AiDataClassContext aiDataClass() throws RecognitionException {
		AiDataClassContext _localctx = new AiDataClassContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_aiDataClass);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(120);
			match(T__0);
			setState(126);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 2286984185774076L) != 0)) {
				{
				setState(124);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
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
				case T__20:
				case T__21:
				case T__22:
				case T__23:
				case T__24:
				case T__25:
				case T__26:
				case T__27:
				case T__28:
				case T__29:
				case T__30:
				case T__31:
				case T__32:
				case T__33:
				case T__34:
				case T__35:
				case T__36:
				case T__37:
				case T__38:
				case T__39:
				case T__40:
				case T__41:
				case T__42:
					{
					setState(121);
					aidataClassProperties_single();
					}
					break;
				case T__50:
					{
					setState(122);
					aidataClassProperties_blockSideinfo();
					}
					break;
				case T__43:
					{
					setState(123);
					aidataClassproperties_BlockSkirmishBuildList();
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
	public static class AidataClassProperties_singleContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode FLOAT() { return getToken(MapIniParser.FLOAT, 0); }
		public TerminalNode INT() { return getToken(MapIniParser.INT, 0); }
		public TerminalNode BOOLEAN() { return getToken(MapIniParser.BOOLEAN, 0); }
		public AidataClassProperties_singleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_aidataClassProperties_single; }
	}

	public final AidataClassProperties_singleContext aidataClassProperties_single() throws RecognitionException {
		AidataClassProperties_singleContext _localctx = new AidataClassProperties_singleContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_aidataClassProperties_single);
		try {
			setState(257);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__1:
				enterOuterAlt(_localctx, 1);
				{
				setState(131);
				match(T__1);
				setState(132);
				match(EQ);
				setState(133);
				match(FLOAT);
				}
				break;
			case T__2:
				enterOuterAlt(_localctx, 2);
				{
				setState(134);
				match(T__2);
				setState(135);
				match(EQ);
				setState(136);
				match(INT);
				}
				break;
			case T__3:
				enterOuterAlt(_localctx, 3);
				{
				setState(137);
				match(T__3);
				setState(138);
				match(EQ);
				setState(139);
				match(INT);
				}
				break;
			case T__4:
				enterOuterAlt(_localctx, 4);
				{
				setState(140);
				match(T__4);
				setState(141);
				match(EQ);
				setState(142);
				match(INT);
				}
				break;
			case T__5:
				enterOuterAlt(_localctx, 5);
				{
				setState(143);
				match(T__5);
				setState(144);
				match(EQ);
				setState(145);
				match(FLOAT);
				}
				break;
			case T__6:
				enterOuterAlt(_localctx, 6);
				{
				setState(146);
				match(T__6);
				setState(147);
				match(EQ);
				setState(148);
				match(FLOAT);
				}
				break;
			case T__7:
				enterOuterAlt(_localctx, 7);
				{
				setState(149);
				match(T__7);
				setState(150);
				match(EQ);
				setState(151);
				match(FLOAT);
				}
				break;
			case T__8:
				enterOuterAlt(_localctx, 8);
				{
				setState(152);
				match(T__8);
				setState(153);
				match(EQ);
				setState(154);
				match(FLOAT);
				}
				break;
			case T__9:
				enterOuterAlt(_localctx, 9);
				{
				setState(155);
				match(T__9);
				setState(156);
				match(EQ);
				setState(157);
				match(FLOAT);
				}
				break;
			case T__10:
				enterOuterAlt(_localctx, 10);
				{
				setState(158);
				match(T__10);
				setState(159);
				match(EQ);
				setState(160);
				match(FLOAT);
				}
				break;
			case T__11:
				enterOuterAlt(_localctx, 11);
				{
				setState(161);
				match(T__11);
				setState(162);
				match(EQ);
				setState(163);
				match(FLOAT);
				}
				break;
			case T__12:
				enterOuterAlt(_localctx, 12);
				{
				setState(164);
				match(T__12);
				setState(165);
				match(EQ);
				setState(166);
				match(FLOAT);
				}
				break;
			case T__13:
				enterOuterAlt(_localctx, 13);
				{
				setState(167);
				match(T__13);
				setState(168);
				match(EQ);
				setState(169);
				match(FLOAT);
				}
				break;
			case T__14:
				enterOuterAlt(_localctx, 14);
				{
				setState(170);
				match(T__14);
				setState(171);
				match(EQ);
				setState(172);
				match(INT);
				}
				break;
			case T__15:
				enterOuterAlt(_localctx, 15);
				{
				setState(173);
				match(T__15);
				setState(174);
				match(EQ);
				setState(175);
				match(INT);
				}
				break;
			case T__16:
				enterOuterAlt(_localctx, 16);
				{
				setState(176);
				match(T__16);
				setState(177);
				match(EQ);
				setState(178);
				match(INT);
				}
				break;
			case T__17:
				enterOuterAlt(_localctx, 17);
				{
				setState(179);
				match(T__17);
				setState(180);
				match(EQ);
				setState(181);
				match(FLOAT);
				}
				break;
			case T__18:
				enterOuterAlt(_localctx, 18);
				{
				setState(182);
				match(T__18);
				setState(183);
				match(EQ);
				setState(184);
				match(FLOAT);
				}
				break;
			case T__19:
				enterOuterAlt(_localctx, 19);
				{
				setState(185);
				match(T__19);
				setState(186);
				match(EQ);
				setState(187);
				match(FLOAT);
				}
				break;
			case T__20:
				enterOuterAlt(_localctx, 20);
				{
				setState(188);
				match(T__20);
				setState(189);
				match(EQ);
				setState(190);
				match(FLOAT);
				}
				break;
			case T__21:
				enterOuterAlt(_localctx, 21);
				{
				setState(191);
				match(T__21);
				setState(192);
				match(EQ);
				setState(193);
				match(FLOAT);
				}
				break;
			case T__22:
				enterOuterAlt(_localctx, 22);
				{
				setState(194);
				match(T__22);
				setState(195);
				match(EQ);
				setState(196);
				match(INT);
				}
				break;
			case T__23:
				enterOuterAlt(_localctx, 23);
				{
				setState(197);
				match(T__23);
				setState(198);
				match(EQ);
				setState(199);
				match(BOOLEAN);
				}
				break;
			case T__24:
				enterOuterAlt(_localctx, 24);
				{
				setState(200);
				match(T__24);
				setState(201);
				match(EQ);
				setState(202);
				match(BOOLEAN);
				}
				break;
			case T__25:
				enterOuterAlt(_localctx, 25);
				{
				setState(203);
				match(T__25);
				setState(204);
				match(EQ);
				setState(205);
				match(BOOLEAN);
				}
				break;
			case T__26:
				enterOuterAlt(_localctx, 26);
				{
				setState(206);
				match(T__26);
				setState(207);
				match(EQ);
				setState(208);
				match(BOOLEAN);
				}
				break;
			case T__27:
				enterOuterAlt(_localctx, 27);
				{
				setState(209);
				match(T__27);
				setState(210);
				match(EQ);
				setState(211);
				match(FLOAT);
				}
				break;
			case T__28:
				enterOuterAlt(_localctx, 28);
				{
				setState(212);
				match(T__28);
				setState(213);
				match(EQ);
				setState(214);
				match(INT);
				}
				break;
			case T__29:
				enterOuterAlt(_localctx, 29);
				{
				setState(215);
				match(T__29);
				setState(216);
				match(EQ);
				setState(217);
				match(BOOLEAN);
				}
				break;
			case T__30:
				enterOuterAlt(_localctx, 30);
				{
				setState(218);
				match(T__30);
				setState(219);
				match(EQ);
				setState(220);
				match(FLOAT);
				}
				break;
			case T__31:
				enterOuterAlt(_localctx, 31);
				{
				setState(221);
				match(T__31);
				setState(222);
				match(EQ);
				setState(223);
				match(INT);
				}
				break;
			case T__32:
				enterOuterAlt(_localctx, 32);
				{
				setState(224);
				match(T__32);
				setState(225);
				match(EQ);
				setState(226);
				match(INT);
				}
				break;
			case T__33:
				enterOuterAlt(_localctx, 33);
				{
				setState(227);
				match(T__33);
				setState(228);
				match(EQ);
				setState(229);
				match(FLOAT);
				}
				break;
			case T__34:
				enterOuterAlt(_localctx, 34);
				{
				setState(230);
				match(T__34);
				setState(231);
				match(EQ);
				setState(232);
				match(FLOAT);
				}
				break;
			case T__35:
				enterOuterAlt(_localctx, 35);
				{
				setState(233);
				match(T__35);
				setState(234);
				match(EQ);
				setState(235);
				match(INT);
				}
				break;
			case T__36:
				enterOuterAlt(_localctx, 36);
				{
				setState(236);
				match(T__36);
				setState(237);
				match(EQ);
				setState(238);
				match(INT);
				}
				break;
			case T__37:
				enterOuterAlt(_localctx, 37);
				{
				setState(239);
				match(T__37);
				setState(240);
				match(EQ);
				setState(241);
				match(FLOAT);
				}
				break;
			case T__38:
				enterOuterAlt(_localctx, 38);
				{
				setState(242);
				match(T__38);
				setState(243);
				match(EQ);
				setState(244);
				match(INT);
				}
				break;
			case T__39:
				enterOuterAlt(_localctx, 39);
				{
				setState(245);
				match(T__39);
				setState(246);
				match(EQ);
				setState(247);
				match(FLOAT);
				}
				break;
			case T__40:
				enterOuterAlt(_localctx, 40);
				{
				setState(248);
				match(T__40);
				setState(249);
				match(EQ);
				setState(250);
				match(BOOLEAN);
				}
				break;
			case T__41:
				enterOuterAlt(_localctx, 41);
				{
				setState(251);
				match(T__41);
				setState(252);
				match(EQ);
				setState(253);
				match(FLOAT);
				}
				break;
			case T__42:
				enterOuterAlt(_localctx, 42);
				{
				setState(254);
				match(T__42);
				setState(255);
				match(EQ);
				setState(256);
				match(FLOAT);
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
	public static class AidataClassproperties_BlockSkirmishBuildListContext extends ParserRuleContext {
		public FactionContext faction() {
			return getRuleContext(FactionContext.class,0);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<SkirmishBuildListBlockContext> skirmishBuildListBlock() {
			return getRuleContexts(SkirmishBuildListBlockContext.class);
		}
		public SkirmishBuildListBlockContext skirmishBuildListBlock(int i) {
			return getRuleContext(SkirmishBuildListBlockContext.class,i);
		}
		public AidataClassproperties_BlockSkirmishBuildListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_aidataClassproperties_BlockSkirmishBuildList; }
	}

	public final AidataClassproperties_BlockSkirmishBuildListContext aidataClassproperties_BlockSkirmishBuildList() throws RecognitionException {
		AidataClassproperties_BlockSkirmishBuildListContext _localctx = new AidataClassproperties_BlockSkirmishBuildListContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_aidataClassproperties_BlockSkirmishBuildList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(259);
			match(T__43);
			setState(260);
			faction();
			setState(264);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__44) {
				{
				{
				setState(261);
				skirmishBuildListBlock();
				}
				}
				setState(266);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(267);
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
	public static class SkirmishBuildListBlockContext extends ParserRuleContext {
		public Object_valueContext object_value() {
			return getRuleContext(Object_valueContext.class,0);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<SkirmishBuildListBlock_structure_propertiesContext> skirmishBuildListBlock_structure_properties() {
			return getRuleContexts(SkirmishBuildListBlock_structure_propertiesContext.class);
		}
		public SkirmishBuildListBlock_structure_propertiesContext skirmishBuildListBlock_structure_properties(int i) {
			return getRuleContext(SkirmishBuildListBlock_structure_propertiesContext.class,i);
		}
		public SkirmishBuildListBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_skirmishBuildListBlock; }
	}

	public final SkirmishBuildListBlockContext skirmishBuildListBlock() throws RecognitionException {
		SkirmishBuildListBlockContext _localctx = new SkirmishBuildListBlockContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_skirmishBuildListBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(269);
			match(T__44);
			setState(270);
			object_value();
			setState(274);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 2181431069507584L) != 0)) {
				{
				{
				setState(271);
				skirmishBuildListBlock_structure_properties();
				}
				}
				setState(276);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(277);
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
	public static class SkirmishBuildListBlock_structure_propertiesContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode XCOORD() { return getToken(MapIniParser.XCOORD, 0); }
		public TerminalNode YCOORD() { return getToken(MapIniParser.YCOORD, 0); }
		public TerminalNode INT() { return getToken(MapIniParser.INT, 0); }
		public TerminalNode FLOAT() { return getToken(MapIniParser.FLOAT, 0); }
		public TerminalNode BOOLEAN() { return getToken(MapIniParser.BOOLEAN, 0); }
		public SkirmishBuildListBlock_structure_propertiesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_skirmishBuildListBlock_structure_properties; }
	}

	public final SkirmishBuildListBlock_structure_propertiesContext skirmishBuildListBlock_structure_properties() throws RecognitionException {
		SkirmishBuildListBlock_structure_propertiesContext _localctx = new SkirmishBuildListBlock_structure_propertiesContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_skirmishBuildListBlock_structure_properties);
		try {
			setState(295);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__45:
				enterOuterAlt(_localctx, 1);
				{
				setState(279);
				match(T__45);
				setState(280);
				match(EQ);
				setState(281);
				match(XCOORD);
				setState(282);
				match(YCOORD);
				}
				break;
			case T__46:
				enterOuterAlt(_localctx, 2);
				{
				setState(283);
				match(T__46);
				setState(284);
				match(EQ);
				setState(285);
				match(INT);
				}
				break;
			case T__47:
				enterOuterAlt(_localctx, 3);
				{
				setState(286);
				match(T__47);
				setState(287);
				match(EQ);
				setState(288);
				match(FLOAT);
				}
				break;
			case T__48:
				enterOuterAlt(_localctx, 4);
				{
				setState(289);
				match(T__48);
				setState(290);
				match(EQ);
				setState(291);
				match(BOOLEAN);
				}
				break;
			case T__49:
				enterOuterAlt(_localctx, 5);
				{
				setState(292);
				match(T__49);
				setState(293);
				match(EQ);
				setState(294);
				match(BOOLEAN);
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
	public static class AidataClassProperties_blockSideinfoContext extends ParserRuleContext {
		public FactionContext faction() {
			return getRuleContext(FactionContext.class,0);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<SideinfopropertiesContext> sideinfoproperties() {
			return getRuleContexts(SideinfopropertiesContext.class);
		}
		public SideinfopropertiesContext sideinfoproperties(int i) {
			return getRuleContext(SideinfopropertiesContext.class,i);
		}
		public AidataClassProperties_blockSideinfoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_aidataClassProperties_blockSideinfo; }
	}

	public final AidataClassProperties_blockSideinfoContext aidataClassProperties_blockSideinfo() throws RecognitionException {
		AidataClassProperties_blockSideinfoContext _localctx = new AidataClassProperties_blockSideinfoContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_aidataClassProperties_blockSideinfo);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(297);
			match(T__50);
			setState(298);
			faction();
			setState(302);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 2301339409586323456L) != 0)) {
				{
				{
				setState(299);
				sideinfoproperties();
				}
				}
				setState(304);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(305);
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
	public static class SideinfopropertiesContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode INT() { return getToken(MapIniParser.INT, 0); }
		public Object_valueContext object_value() {
			return getRuleContext(Object_valueContext.class,0);
		}
		public Sideinfo_skillset_blocksContext sideinfo_skillset_blocks() {
			return getRuleContext(Sideinfo_skillset_blocksContext.class,0);
		}
		public SideinfopropertiesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sideinfoproperties; }
	}

	public final SideinfopropertiesContext sideinfoproperties() throws RecognitionException {
		SideinfopropertiesContext _localctx = new SideinfopropertiesContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_sideinfoproperties);
		try {
			setState(320);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__51:
				enterOuterAlt(_localctx, 1);
				{
				setState(307);
				match(T__51);
				setState(308);
				match(EQ);
				setState(309);
				match(INT);
				}
				break;
			case T__52:
				enterOuterAlt(_localctx, 2);
				{
				setState(310);
				match(T__52);
				setState(311);
				match(EQ);
				setState(312);
				match(INT);
				}
				break;
			case T__53:
				enterOuterAlt(_localctx, 3);
				{
				setState(313);
				match(T__53);
				setState(314);
				match(EQ);
				setState(315);
				match(INT);
				}
				break;
			case T__54:
				enterOuterAlt(_localctx, 4);
				{
				setState(316);
				match(T__54);
				setState(317);
				match(EQ);
				setState(318);
				object_value();
				}
				break;
			case T__55:
			case T__56:
			case T__57:
			case T__58:
			case T__59:
				enterOuterAlt(_localctx, 5);
				{
				setState(319);
				sideinfo_skillset_blocks();
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
	public static class Sideinfo_skillset_blocksContext extends ParserRuleContext {
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<Science_propertyContext> science_property() {
			return getRuleContexts(Science_propertyContext.class);
		}
		public Science_propertyContext science_property(int i) {
			return getRuleContext(Science_propertyContext.class,i);
		}
		public Sideinfo_skillset_blocksContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sideinfo_skillset_blocks; }
	}

	public final Sideinfo_skillset_blocksContext sideinfo_skillset_blocks() throws RecognitionException {
		Sideinfo_skillset_blocksContext _localctx = new Sideinfo_skillset_blocksContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_sideinfo_skillset_blocks);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(322);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 2233785415175766016L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(326);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__144) {
				{
				{
				setState(323);
				science_property();
				}
				}
				setState(328);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(329);
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
	public static class MappedImageClassContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<MappedImageClassPropertiesContext> mappedImageClassProperties() {
			return getRuleContexts(MappedImageClassPropertiesContext.class);
		}
		public MappedImageClassPropertiesContext mappedImageClassProperties(int i) {
			return getRuleContext(MappedImageClassPropertiesContext.class,i);
		}
		public MappedImageClassContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mappedImageClass; }
	}

	public final MappedImageClassContext mappedImageClass() throws RecognitionException {
		MappedImageClassContext _localctx = new MappedImageClassContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_mappedImageClass);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(331);
			match(T__60);
			setState(332);
			match(ID);
			setState(336);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 62)) & ~0x3f) == 0 && ((1L << (_la - 62)) & 31L) != 0)) {
				{
				{
				setState(333);
				mappedImageClassProperties();
				}
				}
				setState(338);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(339);
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
	public static class MappedImageClassPropertiesContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode NVALUE() { return getToken(MapIniParser.NVALUE, 0); }
		public FileContext file() {
			return getRuleContext(FileContext.class,0);
		}
		public TerminalNode INT() { return getToken(MapIniParser.INT, 0); }
		public TerminalNode COORDLEFT() { return getToken(MapIniParser.COORDLEFT, 0); }
		public TerminalNode COORDTOP() { return getToken(MapIniParser.COORDTOP, 0); }
		public TerminalNode COORDRIGHT() { return getToken(MapIniParser.COORDRIGHT, 0); }
		public TerminalNode COORDBOTTOM() { return getToken(MapIniParser.COORDBOTTOM, 0); }
		public MappedImageClassPropertiesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mappedImageClassProperties; }
	}

	public final MappedImageClassPropertiesContext mappedImageClassProperties() throws RecognitionException {
		MappedImageClassPropertiesContext _localctx = new MappedImageClassPropertiesContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_mappedImageClassProperties);
		int _la;
		try {
			setState(362);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__61:
				enterOuterAlt(_localctx, 1);
				{
				setState(341);
				match(T__61);
				setState(342);
				match(EQ);
				setState(345);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case NVALUE:
					{
					setState(343);
					match(NVALUE);
					}
					break;
				case ID:
					{
					setState(344);
					file();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case T__62:
				enterOuterAlt(_localctx, 2);
				{
				setState(347);
				match(T__62);
				setState(348);
				match(EQ);
				setState(349);
				match(INT);
				}
				break;
			case T__63:
				enterOuterAlt(_localctx, 3);
				{
				setState(350);
				match(T__63);
				setState(351);
				match(EQ);
				setState(352);
				match(INT);
				}
				break;
			case T__64:
				enterOuterAlt(_localctx, 4);
				{
				setState(353);
				match(T__64);
				setState(354);
				match(EQ);
				setState(355);
				match(COORDLEFT);
				setState(356);
				match(COORDTOP);
				setState(357);
				match(COORDRIGHT);
				setState(358);
				match(COORDBOTTOM);
				}
				break;
			case T__65:
				enterOuterAlt(_localctx, 5);
				{
				setState(359);
				match(T__65);
				setState(360);
				match(EQ);
				setState(361);
				_la = _input.LA(1);
				if ( !(_la==T__66 || _la==NVALUE) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
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
	public static class Animation2DClassContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<Animation2DClassPropertiesContext> animation2DClassProperties() {
			return getRuleContexts(Animation2DClassPropertiesContext.class);
		}
		public Animation2DClassPropertiesContext animation2DClassProperties(int i) {
			return getRuleContext(Animation2DClassPropertiesContext.class,i);
		}
		public Animation2DClassContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_animation2DClass; }
	}

	public final Animation2DClassContext animation2DClass() throws RecognitionException {
		Animation2DClassContext _localctx = new Animation2DClassContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_animation2DClass);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(364);
			match(T__67);
			setState(365);
			match(ID);
			setState(369);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 69)) & ~0x3f) == 0 && ((1L << (_la - 69)) & 31L) != 0)) {
				{
				{
				setState(366);
				animation2DClassProperties();
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
	public static class Animation2DClassPropertiesContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode A2D_ANIMATION_MODE() { return getToken(MapIniParser.A2D_ANIMATION_MODE, 0); }
		public TerminalNode INT() { return getToken(MapIniParser.INT, 0); }
		public TerminalNode BOOLEAN() { return getToken(MapIniParser.BOOLEAN, 0); }
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Animation2DClassPropertiesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_animation2DClassProperties; }
	}

	public final Animation2DClassPropertiesContext animation2DClassProperties() throws RecognitionException {
		Animation2DClassPropertiesContext _localctx = new Animation2DClassPropertiesContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_animation2DClassProperties);
		try {
			setState(389);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__68:
				enterOuterAlt(_localctx, 1);
				{
				setState(374);
				match(T__68);
				setState(375);
				match(EQ);
				setState(376);
				match(A2D_ANIMATION_MODE);
				}
				break;
			case T__69:
				enterOuterAlt(_localctx, 2);
				{
				setState(377);
				match(T__69);
				setState(378);
				match(EQ);
				setState(379);
				match(INT);
				}
				break;
			case T__70:
				enterOuterAlt(_localctx, 3);
				{
				setState(380);
				match(T__70);
				setState(381);
				match(EQ);
				setState(382);
				match(BOOLEAN);
				}
				break;
			case T__71:
				enterOuterAlt(_localctx, 4);
				{
				setState(383);
				match(T__71);
				setState(384);
				match(EQ);
				setState(385);
				match(INT);
				}
				break;
			case T__72:
				enterOuterAlt(_localctx, 5);
				{
				setState(386);
				match(T__72);
				setState(387);
				match(EQ);
				setState(388);
				match(ID);
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
	public static class ArmorClassContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<ArmorClassPropertiesContext> armorClassProperties() {
			return getRuleContexts(ArmorClassPropertiesContext.class);
		}
		public ArmorClassPropertiesContext armorClassProperties(int i) {
			return getRuleContext(ArmorClassPropertiesContext.class,i);
		}
		public ArmorClassContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_armorClass; }
	}

	public final ArmorClassContext armorClass() throws RecognitionException {
		ArmorClassContext _localctx = new ArmorClassContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_armorClass);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(391);
			match(T__73);
			setState(392);
			match(ID);
			setState(396);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__73) {
				{
				{
				setState(393);
				armorClassProperties();
				}
				}
				setState(398);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(399);
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
	public static class ArmorClassPropertiesContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode ARMOR_TYPE() { return getToken(MapIniParser.ARMOR_TYPE, 0); }
		public TerminalNode PROCENT() { return getToken(MapIniParser.PROCENT, 0); }
		public ArmorClassPropertiesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_armorClassProperties; }
	}

	public final ArmorClassPropertiesContext armorClassProperties() throws RecognitionException {
		ArmorClassPropertiesContext _localctx = new ArmorClassPropertiesContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_armorClassProperties);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(401);
			match(T__73);
			setState(402);
			match(EQ);
			setState(403);
			match(ARMOR_TYPE);
			setState(404);
			match(PROCENT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CommandButtonClassContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<CommandButtonClassPropertiesContext> commandButtonClassProperties() {
			return getRuleContexts(CommandButtonClassPropertiesContext.class);
		}
		public CommandButtonClassPropertiesContext commandButtonClassProperties(int i) {
			return getRuleContext(CommandButtonClassPropertiesContext.class,i);
		}
		public CommandButtonClassContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_commandButtonClass; }
	}

	public final CommandButtonClassContext commandButtonClass() throws RecognitionException {
		CommandButtonClassContext _localctx = new CommandButtonClassContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_commandButtonClass);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(406);
			match(T__74);
			setState(407);
			match(ID);
			setState(411);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 83)) & ~0x3f) == 0 && ((1L << (_la - 83)) & -17169973042479103L) != 0) || _la==T__146 || _la==T__147) {
				{
				{
				setState(408);
				commandButtonClassProperties();
				}
				}
				setState(413);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(414);
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
	public static class CommandButtonClassPropertiesContext extends ParserRuleContext {
		public Cb_command_propertyContext cb_command_property() {
			return getRuleContext(Cb_command_propertyContext.class,0);
		}
		public Cb_options_propertyContext cb_options_property() {
			return getRuleContext(Cb_options_propertyContext.class,0);
		}
		public Cb_buttonimage_propertyContext cb_buttonimage_property() {
			return getRuleContext(Cb_buttonimage_propertyContext.class,0);
		}
		public Cb_buttonbordertype_propertyContext cb_buttonbordertype_property() {
			return getRuleContext(Cb_buttonbordertype_propertyContext.class,0);
		}
		public Cb_textlabel_propertyContext cb_textlabel_property() {
			return getRuleContext(Cb_textlabel_propertyContext.class,0);
		}
		public Cb_descriptionlabel_propertyContext cb_descriptionlabel_property() {
			return getRuleContext(Cb_descriptionlabel_propertyContext.class,0);
		}
		public Cb_conflictinglabel_propertyContext cb_conflictinglabel_property() {
			return getRuleContext(Cb_conflictinglabel_propertyContext.class,0);
		}
		public Cb_cursorname_properyContext cb_cursorname_propery() {
			return getRuleContext(Cb_cursorname_properyContext.class,0);
		}
		public Cb_radius_cursorname_valueContext cb_radius_cursorname_value() {
			return getRuleContext(Cb_radius_cursorname_valueContext.class,0);
		}
		public Cb_invalid_cursorname_properyContext cb_invalid_cursorname_propery() {
			return getRuleContext(Cb_invalid_cursorname_properyContext.class,0);
		}
		public Cb_unitspecificsound_propertyContext cb_unitspecificsound_property() {
			return getRuleContext(Cb_unitspecificsound_propertyContext.class,0);
		}
		public Object_propertyContext object_property() {
			return getRuleContext(Object_propertyContext.class,0);
		}
		public Science_propertyContext science_property() {
			return getRuleContext(Science_propertyContext.class,0);
		}
		public Specialpower_propertyContext specialpower_property() {
			return getRuleContext(Specialpower_propertyContext.class,0);
		}
		public Upgrade_propertyContext upgrade_property() {
			return getRuleContext(Upgrade_propertyContext.class,0);
		}
		public Weaponslot_propertyContext weaponslot_property() {
			return getRuleContext(Weaponslot_propertyContext.class,0);
		}
		public CommandButtonClassPropertiesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_commandButtonClassProperties; }
	}

	public final CommandButtonClassPropertiesContext commandButtonClassProperties() throws RecognitionException {
		CommandButtonClassPropertiesContext _localctx = new CommandButtonClassPropertiesContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_commandButtonClassProperties);
		try {
			setState(432);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__82:
				enterOuterAlt(_localctx, 1);
				{
				setState(416);
				cb_command_property();
				}
				break;
			case T__111:
				enterOuterAlt(_localctx, 2);
				{
				setState(417);
				cb_options_property();
				}
				break;
			case T__130:
				enterOuterAlt(_localctx, 3);
				{
				setState(418);
				cb_buttonimage_property();
				}
				break;
			case T__131:
				enterOuterAlt(_localctx, 4);
				{
				setState(419);
				cb_buttonbordertype_property();
				}
				break;
			case T__136:
				enterOuterAlt(_localctx, 5);
				{
				setState(420);
				cb_textlabel_property();
				}
				break;
			case T__137:
				enterOuterAlt(_localctx, 6);
				{
				setState(421);
				cb_descriptionlabel_property();
				}
				break;
			case T__138:
				enterOuterAlt(_localctx, 7);
				{
				setState(422);
				cb_conflictinglabel_property();
				}
				break;
			case T__139:
				enterOuterAlt(_localctx, 8);
				{
				setState(423);
				cb_cursorname_propery();
				}
				break;
			case T__140:
				enterOuterAlt(_localctx, 9);
				{
				setState(424);
				cb_radius_cursorname_value();
				}
				break;
			case T__141:
				enterOuterAlt(_localctx, 10);
				{
				setState(425);
				cb_invalid_cursorname_propery();
				}
				break;
			case T__142:
				enterOuterAlt(_localctx, 11);
				{
				setState(426);
				cb_unitspecificsound_property();
				}
				break;
			case T__143:
				enterOuterAlt(_localctx, 12);
				{
				setState(427);
				object_property();
				}
				break;
			case T__144:
				enterOuterAlt(_localctx, 13);
				{
				setState(428);
				science_property();
				}
				break;
			case T__145:
				enterOuterAlt(_localctx, 14);
				{
				setState(429);
				specialpower_property();
				}
				break;
			case T__146:
				enterOuterAlt(_localctx, 15);
				{
				setState(430);
				upgrade_property();
				}
				break;
			case T__147:
				enterOuterAlt(_localctx, 16);
				{
				setState(431);
				weaponslot_property();
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
	public static class CommandSetClassContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<CommandSetClassPropertyContext> commandSetClassProperty() {
			return getRuleContexts(CommandSetClassPropertyContext.class);
		}
		public CommandSetClassPropertyContext commandSetClassProperty(int i) {
			return getRuleContext(CommandSetClassPropertyContext.class,i);
		}
		public CommandSetClassContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_commandSetClass; }
	}

	public final CommandSetClassContext commandSetClass() throws RecognitionException {
		CommandSetClassContext _localctx = new CommandSetClassContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_commandSetClass);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(434);
			match(T__75);
			setState(435);
			match(ID);
			setState(439);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==INT) {
				{
				{
				setState(436);
				commandSetClassProperty();
				}
				}
				setState(441);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(442);
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
	public static class CommandSetClassPropertyContext extends ParserRuleContext {
		public TerminalNode INT() { return getToken(MapIniParser.INT, 0); }
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Commandbutton_valueContext commandbutton_value() {
			return getRuleContext(Commandbutton_valueContext.class,0);
		}
		public CommandSetClassPropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_commandSetClassProperty; }
	}

	public final CommandSetClassPropertyContext commandSetClassProperty() throws RecognitionException {
		CommandSetClassPropertyContext _localctx = new CommandSetClassPropertyContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_commandSetClassProperty);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(444);
			match(INT);
			setState(445);
			match(EQ);
			setState(446);
			commandbutton_value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
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
		enterRule(_localctx, 40, RULE_end);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(448);
			_la = _input.LA(1);
			if ( !(((((_la - 77)) & ~0x3f) == 0 && ((1L << (_la - 77)) & 7L) != 0)) ) {
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
	public static class FileContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public FileContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_file; }
	}

	public final FileContext file() throws RecognitionException {
		FileContext _localctx = new FileContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_file);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(450);
			match(ID);
			setState(451);
			match(T__79);
			setState(452);
			_la = _input.LA(1);
			if ( !(_la==T__80 || _la==T__81) ) {
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
	public static class Cb_command_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Cb_command_valueContext cb_command_value() {
			return getRuleContext(Cb_command_valueContext.class,0);
		}
		public Cb_command_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cb_command_property; }
	}

	public final Cb_command_propertyContext cb_command_property() throws RecognitionException {
		Cb_command_propertyContext _localctx = new Cb_command_propertyContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_cb_command_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(454);
			match(T__82);
			setState(455);
			match(EQ);
			setState(456);
			cb_command_value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Cb_command_valueContext extends ParserRuleContext {
		public TerminalNode NVALUE() { return getToken(MapIniParser.NVALUE, 0); }
		public Cb_command_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cb_command_value; }
	}

	public final Cb_command_valueContext cb_command_value() throws RecognitionException {
		Cb_command_valueContext _localctx = new Cb_command_valueContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_cb_command_value);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(458);
			_la = _input.LA(1);
			if ( !(((((_la - 84)) & ~0x3f) == 0 && ((1L << (_la - 84)) & 268435455L) != 0) || _la==NVALUE) ) {
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
	public static class Cb_options_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public List<Cb_options_valueContext> cb_options_value() {
			return getRuleContexts(Cb_options_valueContext.class);
		}
		public Cb_options_valueContext cb_options_value(int i) {
			return getRuleContext(Cb_options_valueContext.class,i);
		}
		public Cb_options_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cb_options_property; }
	}

	public final Cb_options_propertyContext cb_options_property() throws RecognitionException {
		Cb_options_propertyContext _localctx = new Cb_options_propertyContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_cb_options_property);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(460);
			match(T__111);
			setState(461);
			match(EQ);
			setState(463); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(462);
				cb_options_value();
				}
				}
				setState(465); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( ((((_la - 113)) & ~0x3f) == 0 && ((1L << (_la - 113)) & -9223372036854513665L) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Cb_options_valueContext extends ParserRuleContext {
		public TerminalNode NVALUE() { return getToken(MapIniParser.NVALUE, 0); }
		public Cb_options_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cb_options_value; }
	}

	public final Cb_options_valueContext cb_options_value() throws RecognitionException {
		Cb_options_valueContext _localctx = new Cb_options_valueContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_cb_options_value);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(467);
			_la = _input.LA(1);
			if ( !(((((_la - 113)) & ~0x3f) == 0 && ((1L << (_la - 113)) & -9223372036854513665L) != 0)) ) {
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
	public static class Cb_buttonimage_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Mappedimage_valueContext mappedimage_value() {
			return getRuleContext(Mappedimage_valueContext.class,0);
		}
		public Cb_buttonimage_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cb_buttonimage_property; }
	}

	public final Cb_buttonimage_propertyContext cb_buttonimage_property() throws RecognitionException {
		Cb_buttonimage_propertyContext _localctx = new Cb_buttonimage_propertyContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_cb_buttonimage_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(469);
			match(T__130);
			setState(470);
			match(EQ);
			setState(471);
			mappedimage_value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Cb_buttonbordertype_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Cb_buttonbordertype_valueContext cb_buttonbordertype_value() {
			return getRuleContext(Cb_buttonbordertype_valueContext.class,0);
		}
		public Cb_buttonbordertype_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cb_buttonbordertype_property; }
	}

	public final Cb_buttonbordertype_propertyContext cb_buttonbordertype_property() throws RecognitionException {
		Cb_buttonbordertype_propertyContext _localctx = new Cb_buttonbordertype_propertyContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_cb_buttonbordertype_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(473);
			match(T__131);
			setState(474);
			match(EQ);
			setState(475);
			cb_buttonbordertype_value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Cb_buttonbordertype_valueContext extends ParserRuleContext {
		public TerminalNode NVALUE() { return getToken(MapIniParser.NVALUE, 0); }
		public Cb_buttonbordertype_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cb_buttonbordertype_value; }
	}

	public final Cb_buttonbordertype_valueContext cb_buttonbordertype_value() throws RecognitionException {
		Cb_buttonbordertype_valueContext _localctx = new Cb_buttonbordertype_valueContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_cb_buttonbordertype_value);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(477);
			_la = _input.LA(1);
			if ( !(((((_la - 133)) & ~0x3f) == 0 && ((1L << (_la - 133)) & 8796093022223L) != 0)) ) {
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
	public static class Cb_textlabel_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode NVALUE() { return getToken(MapIniParser.NVALUE, 0); }
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Cb_textlabel_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cb_textlabel_property; }
	}

	public final Cb_textlabel_propertyContext cb_textlabel_property() throws RecognitionException {
		Cb_textlabel_propertyContext _localctx = new Cb_textlabel_propertyContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_cb_textlabel_property);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(479);
			match(T__136);
			setState(480);
			match(EQ);
			setState(481);
			_la = _input.LA(1);
			if ( !(_la==NVALUE || _la==ID) ) {
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
	public static class Cb_descriptionlabel_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode NVALUE() { return getToken(MapIniParser.NVALUE, 0); }
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Cb_descriptionlabel_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cb_descriptionlabel_property; }
	}

	public final Cb_descriptionlabel_propertyContext cb_descriptionlabel_property() throws RecognitionException {
		Cb_descriptionlabel_propertyContext _localctx = new Cb_descriptionlabel_propertyContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_cb_descriptionlabel_property);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(483);
			match(T__137);
			setState(484);
			match(EQ);
			setState(485);
			_la = _input.LA(1);
			if ( !(_la==NVALUE || _la==ID) ) {
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
	public static class Cb_conflictinglabel_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode NVALUE() { return getToken(MapIniParser.NVALUE, 0); }
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Cb_conflictinglabel_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cb_conflictinglabel_property; }
	}

	public final Cb_conflictinglabel_propertyContext cb_conflictinglabel_property() throws RecognitionException {
		Cb_conflictinglabel_propertyContext _localctx = new Cb_conflictinglabel_propertyContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_cb_conflictinglabel_property);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(487);
			match(T__138);
			setState(488);
			match(EQ);
			setState(489);
			_la = _input.LA(1);
			if ( !(_la==NVALUE || _la==ID) ) {
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
	public static class Cb_cursorname_properyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Cursorname_valueContext cursorname_value() {
			return getRuleContext(Cursorname_valueContext.class,0);
		}
		public Cb_cursorname_properyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cb_cursorname_propery; }
	}

	public final Cb_cursorname_properyContext cb_cursorname_propery() throws RecognitionException {
		Cb_cursorname_properyContext _localctx = new Cb_cursorname_properyContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_cb_cursorname_propery);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(491);
			match(T__139);
			setState(492);
			match(EQ);
			setState(493);
			cursorname_value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Cb_radius_cursorname_valueContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Radius_cursorname_valueContext radius_cursorname_value() {
			return getRuleContext(Radius_cursorname_valueContext.class,0);
		}
		public Cb_radius_cursorname_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cb_radius_cursorname_value; }
	}

	public final Cb_radius_cursorname_valueContext cb_radius_cursorname_value() throws RecognitionException {
		Cb_radius_cursorname_valueContext _localctx = new Cb_radius_cursorname_valueContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_cb_radius_cursorname_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(495);
			match(T__140);
			setState(496);
			match(EQ);
			setState(497);
			radius_cursorname_value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Cb_invalid_cursorname_properyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Invalid_cursorname_valueContext invalid_cursorname_value() {
			return getRuleContext(Invalid_cursorname_valueContext.class,0);
		}
		public Cb_invalid_cursorname_properyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cb_invalid_cursorname_propery; }
	}

	public final Cb_invalid_cursorname_properyContext cb_invalid_cursorname_propery() throws RecognitionException {
		Cb_invalid_cursorname_properyContext _localctx = new Cb_invalid_cursorname_properyContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_cb_invalid_cursorname_propery);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(499);
			match(T__141);
			setState(500);
			match(EQ);
			setState(501);
			invalid_cursorname_value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Cb_unitspecificsound_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Audioevent_valueContext audioevent_value() {
			return getRuleContext(Audioevent_valueContext.class,0);
		}
		public Cb_unitspecificsound_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cb_unitspecificsound_property; }
	}

	public final Cb_unitspecificsound_propertyContext cb_unitspecificsound_property() throws RecognitionException {
		Cb_unitspecificsound_propertyContext _localctx = new Cb_unitspecificsound_propertyContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_cb_unitspecificsound_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(503);
			match(T__142);
			setState(504);
			match(EQ);
			setState(505);
			audioevent_value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Commandbutton_valueContext extends ParserRuleContext {
		public TerminalNode NVALUE() { return getToken(MapIniParser.NVALUE, 0); }
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Commandbutton_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_commandbutton_value; }
	}

	public final Commandbutton_valueContext commandbutton_value() throws RecognitionException {
		Commandbutton_valueContext _localctx = new Commandbutton_valueContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_commandbutton_value);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(507);
			_la = _input.LA(1);
			if ( !(_la==NVALUE || _la==ID) ) {
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
	public static class Cursorname_valueContext extends ParserRuleContext {
		public TerminalNode NVALUE() { return getToken(MapIniParser.NVALUE, 0); }
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Cursorname_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cursorname_value; }
	}

	public final Cursorname_valueContext cursorname_value() throws RecognitionException {
		Cursorname_valueContext _localctx = new Cursorname_valueContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_cursorname_value);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(509);
			_la = _input.LA(1);
			if ( !(_la==NVALUE || _la==ID) ) {
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
	public static class Radius_cursorname_valueContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Radius_cursorname_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_radius_cursorname_value; }
	}

	public final Radius_cursorname_valueContext radius_cursorname_value() throws RecognitionException {
		Radius_cursorname_valueContext _localctx = new Radius_cursorname_valueContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_radius_cursorname_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(511);
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
	public static class Invalid_cursorname_valueContext extends ParserRuleContext {
		public TerminalNode NVALUE() { return getToken(MapIniParser.NVALUE, 0); }
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Invalid_cursorname_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_invalid_cursorname_value; }
	}

	public final Invalid_cursorname_valueContext invalid_cursorname_value() throws RecognitionException {
		Invalid_cursorname_valueContext _localctx = new Invalid_cursorname_valueContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_invalid_cursorname_value);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(513);
			_la = _input.LA(1);
			if ( !(_la==NVALUE || _la==ID) ) {
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
	public static class Mappedimage_valueContext extends ParserRuleContext {
		public TerminalNode NVALUE() { return getToken(MapIniParser.NVALUE, 0); }
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Mappedimage_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mappedimage_value; }
	}

	public final Mappedimage_valueContext mappedimage_value() throws RecognitionException {
		Mappedimage_valueContext _localctx = new Mappedimage_valueContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_mappedimage_value);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(515);
			_la = _input.LA(1);
			if ( !(_la==NVALUE || _la==ID) ) {
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
	public static class Object_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Object_valueContext object_value() {
			return getRuleContext(Object_valueContext.class,0);
		}
		public Object_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_object_property; }
	}

	public final Object_propertyContext object_property() throws RecognitionException {
		Object_propertyContext _localctx = new Object_propertyContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_object_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(517);
			match(T__143);
			setState(518);
			match(EQ);
			setState(519);
			object_value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
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
		public TerminalNode NVALUE() { return getToken(MapIniParser.NVALUE, 0); }
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Object_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_object_value; }
	}

	public final Object_valueContext object_value() throws RecognitionException {
		Object_valueContext _localctx = new Object_valueContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_object_value);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(521);
			_la = _input.LA(1);
			if ( !(_la==NVALUE || _la==ID) ) {
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
	public static class Science_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public List<Science_valueContext> science_value() {
			return getRuleContexts(Science_valueContext.class);
		}
		public Science_valueContext science_value(int i) {
			return getRuleContext(Science_valueContext.class,i);
		}
		public Science_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_science_property; }
	}

	public final Science_propertyContext science_property() throws RecognitionException {
		Science_propertyContext _localctx = new Science_propertyContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_science_property);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(523);
			match(T__144);
			setState(524);
			match(EQ);
			setState(526); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(525);
				science_value();
				}
				}
				setState(528); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==NVALUE || _la==ID );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Science_valueContext extends ParserRuleContext {
		public TerminalNode NVALUE() { return getToken(MapIniParser.NVALUE, 0); }
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Science_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_science_value; }
	}

	public final Science_valueContext science_value() throws RecognitionException {
		Science_valueContext _localctx = new Science_valueContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_science_value);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(530);
			_la = _input.LA(1);
			if ( !(_la==NVALUE || _la==ID) ) {
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
	public static class Specialpower_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Specialpower_valueContext specialpower_value() {
			return getRuleContext(Specialpower_valueContext.class,0);
		}
		public Specialpower_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_specialpower_property; }
	}

	public final Specialpower_propertyContext specialpower_property() throws RecognitionException {
		Specialpower_propertyContext _localctx = new Specialpower_propertyContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_specialpower_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(532);
			match(T__145);
			setState(533);
			match(EQ);
			setState(534);
			specialpower_value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Specialpower_valueContext extends ParserRuleContext {
		public TerminalNode NVALUE() { return getToken(MapIniParser.NVALUE, 0); }
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Specialpower_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_specialpower_value; }
	}

	public final Specialpower_valueContext specialpower_value() throws RecognitionException {
		Specialpower_valueContext _localctx = new Specialpower_valueContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_specialpower_value);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(536);
			_la = _input.LA(1);
			if ( !(_la==NVALUE || _la==ID) ) {
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
	public static class Audioevent_valueContext extends ParserRuleContext {
		public TerminalNode NVALUE() { return getToken(MapIniParser.NVALUE, 0); }
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Audioevent_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_audioevent_value; }
	}

	public final Audioevent_valueContext audioevent_value() throws RecognitionException {
		Audioevent_valueContext _localctx = new Audioevent_valueContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_audioevent_value);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(538);
			_la = _input.LA(1);
			if ( !(_la==NVALUE || _la==ID) ) {
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
	public static class Upgrade_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Upgrade_valueContext upgrade_value() {
			return getRuleContext(Upgrade_valueContext.class,0);
		}
		public Upgrade_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_upgrade_property; }
	}

	public final Upgrade_propertyContext upgrade_property() throws RecognitionException {
		Upgrade_propertyContext _localctx = new Upgrade_propertyContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_upgrade_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(540);
			match(T__146);
			setState(541);
			match(EQ);
			setState(542);
			upgrade_value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Upgrade_valueContext extends ParserRuleContext {
		public TerminalNode NVALUE() { return getToken(MapIniParser.NVALUE, 0); }
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Upgrade_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_upgrade_value; }
	}

	public final Upgrade_valueContext upgrade_value() throws RecognitionException {
		Upgrade_valueContext _localctx = new Upgrade_valueContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_upgrade_value);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(544);
			_la = _input.LA(1);
			if ( !(_la==NVALUE || _la==ID) ) {
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
	public static class Weaponslot_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public List<TerminalNode> WEAPONSLOT() { return getTokens(MapIniParser.WEAPONSLOT); }
		public TerminalNode WEAPONSLOT(int i) {
			return getToken(MapIniParser.WEAPONSLOT, i);
		}
		public Weaponslot_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_weaponslot_property; }
	}

	public final Weaponslot_propertyContext weaponslot_property() throws RecognitionException {
		Weaponslot_propertyContext _localctx = new Weaponslot_propertyContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_weaponslot_property);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(546);
			match(T__147);
			setState(547);
			match(EQ);
			setState(549); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(548);
				match(WEAPONSLOT);
				}
				}
				setState(551); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==WEAPONSLOT );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FactionContext extends ParserRuleContext {
		public FactionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_faction; }
	}

	public final FactionContext faction() throws RecognitionException {
		FactionContext _localctx = new FactionContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_faction);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(553);
			_la = _input.LA(1);
			if ( !(((((_la - 149)) & ~0x3f) == 0 && ((1L << (_la - 149)) & 4095L) != 0)) ) {
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
		"\u0004\u0001\u00b4\u022c\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
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
		",\u0002-\u0007-\u0002.\u0007.\u0002/\u0007/\u00020\u00070\u00021\u0007"+
		"1\u00022\u00072\u00023\u00073\u0001\u0000\u0005\u0000j\b\u0000\n\u0000"+
		"\f\u0000m\t\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001w\b\u0001\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0005\u0002}\b\u0002\n\u0002"+
		"\f\u0002\u0080\t\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003\u0102\b\u0003"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0005\u0004\u0107\b\u0004\n\u0004"+
		"\f\u0004\u010a\t\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0005\u0005\u0111\b\u0005\n\u0005\f\u0005\u0114\t\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0003"+
		"\u0006\u0128\b\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0005\u0007\u012d"+
		"\b\u0007\n\u0007\f\u0007\u0130\t\u0007\u0001\u0007\u0001\u0007\u0001\b"+
		"\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0003\b\u0141\b\b\u0001\t\u0001\t\u0005\t\u0145"+
		"\b\t\n\t\f\t\u0148\t\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0005\n"+
		"\u014f\b\n\n\n\f\n\u0152\t\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0003\u000b\u015a\b\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0003\u000b\u016b\b\u000b\u0001\f\u0001\f\u0001\f\u0005\f\u0170"+
		"\b\f\n\f\f\f\u0173\t\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001\r"+
		"\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001"+
		"\r\u0001\r\u0001\r\u0003\r\u0186\b\r\u0001\u000e\u0001\u000e\u0001\u000e"+
		"\u0005\u000e\u018b\b\u000e\n\u000e\f\u000e\u018e\t\u000e\u0001\u000e\u0001"+
		"\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001"+
		"\u0010\u0001\u0010\u0001\u0010\u0005\u0010\u019a\b\u0010\n\u0010\f\u0010"+
		"\u019d\t\u0010\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0011"+
		"\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011"+
		"\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011"+
		"\u0001\u0011\u0003\u0011\u01b1\b\u0011\u0001\u0012\u0001\u0012\u0001\u0012"+
		"\u0005\u0012\u01b6\b\u0012\n\u0012\f\u0012\u01b9\t\u0012\u0001\u0012\u0001"+
		"\u0012\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0014\u0001"+
		"\u0014\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0016\u0001"+
		"\u0016\u0001\u0016\u0001\u0016\u0001\u0017\u0001\u0017\u0001\u0018\u0001"+
		"\u0018\u0001\u0018\u0004\u0018\u01d0\b\u0018\u000b\u0018\f\u0018\u01d1"+
		"\u0001\u0019\u0001\u0019\u0001\u001a\u0001\u001a\u0001\u001a\u0001\u001a"+
		"\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001c\u0001\u001c"+
		"\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001e\u0001\u001e"+
		"\u0001\u001e\u0001\u001e\u0001\u001f\u0001\u001f\u0001\u001f\u0001\u001f"+
		"\u0001 \u0001 \u0001 \u0001 \u0001!\u0001!\u0001!\u0001!\u0001\"\u0001"+
		"\"\u0001\"\u0001\"\u0001#\u0001#\u0001#\u0001#\u0001$\u0001$\u0001%\u0001"+
		"%\u0001&\u0001&\u0001\'\u0001\'\u0001(\u0001(\u0001)\u0001)\u0001)\u0001"+
		")\u0001*\u0001*\u0001+\u0001+\u0001+\u0004+\u020f\b+\u000b+\f+\u0210\u0001"+
		",\u0001,\u0001-\u0001-\u0001-\u0001-\u0001.\u0001.\u0001/\u0001/\u0001"+
		"0\u00010\u00010\u00010\u00011\u00011\u00012\u00012\u00012\u00042\u0226"+
		"\b2\u000b2\f2\u0227\u00013\u00013\u00013\u0000\u00004\u0000\u0002\u0004"+
		"\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \""+
		"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bdf\u0000\t\u0001\u00008<\u0002\u0000"+
		"CC\u00b0\u00b0\u0001\u0000MO\u0001\u0000QR\u0002\u0000To\u00b0\u00b0\u0002"+
		"\u0000q\u0082\u00b0\u00b0\u0002\u0000\u0085\u0088\u00b0\u00b0\u0001\u0000"+
		"\u00b0\u00b1\u0001\u0000\u0095\u00a0\u0255\u0000k\u0001\u0000\u0000\u0000"+
		"\u0002v\u0001\u0000\u0000\u0000\u0004x\u0001\u0000\u0000\u0000\u0006\u0101"+
		"\u0001\u0000\u0000\u0000\b\u0103\u0001\u0000\u0000\u0000\n\u010d\u0001"+
		"\u0000\u0000\u0000\f\u0127\u0001\u0000\u0000\u0000\u000e\u0129\u0001\u0000"+
		"\u0000\u0000\u0010\u0140\u0001\u0000\u0000\u0000\u0012\u0142\u0001\u0000"+
		"\u0000\u0000\u0014\u014b\u0001\u0000\u0000\u0000\u0016\u016a\u0001\u0000"+
		"\u0000\u0000\u0018\u016c\u0001\u0000\u0000\u0000\u001a\u0185\u0001\u0000"+
		"\u0000\u0000\u001c\u0187\u0001\u0000\u0000\u0000\u001e\u0191\u0001\u0000"+
		"\u0000\u0000 \u0196\u0001\u0000\u0000\u0000\"\u01b0\u0001\u0000\u0000"+
		"\u0000$\u01b2\u0001\u0000\u0000\u0000&\u01bc\u0001\u0000\u0000\u0000("+
		"\u01c0\u0001\u0000\u0000\u0000*\u01c2\u0001\u0000\u0000\u0000,\u01c6\u0001"+
		"\u0000\u0000\u0000.\u01ca\u0001\u0000\u0000\u00000\u01cc\u0001\u0000\u0000"+
		"\u00002\u01d3\u0001\u0000\u0000\u00004\u01d5\u0001\u0000\u0000\u00006"+
		"\u01d9\u0001\u0000\u0000\u00008\u01dd\u0001\u0000\u0000\u0000:\u01df\u0001"+
		"\u0000\u0000\u0000<\u01e3\u0001\u0000\u0000\u0000>\u01e7\u0001\u0000\u0000"+
		"\u0000@\u01eb\u0001\u0000\u0000\u0000B\u01ef\u0001\u0000\u0000\u0000D"+
		"\u01f3\u0001\u0000\u0000\u0000F\u01f7\u0001\u0000\u0000\u0000H\u01fb\u0001"+
		"\u0000\u0000\u0000J\u01fd\u0001\u0000\u0000\u0000L\u01ff\u0001\u0000\u0000"+
		"\u0000N\u0201\u0001\u0000\u0000\u0000P\u0203\u0001\u0000\u0000\u0000R"+
		"\u0205\u0001\u0000\u0000\u0000T\u0209\u0001\u0000\u0000\u0000V\u020b\u0001"+
		"\u0000\u0000\u0000X\u0212\u0001\u0000\u0000\u0000Z\u0214\u0001\u0000\u0000"+
		"\u0000\\\u0218\u0001\u0000\u0000\u0000^\u021a\u0001\u0000\u0000\u0000"+
		"`\u021c\u0001\u0000\u0000\u0000b\u0220\u0001\u0000\u0000\u0000d\u0222"+
		"\u0001\u0000\u0000\u0000f\u0229\u0001\u0000\u0000\u0000hj\u0003\u0002"+
		"\u0001\u0000ih\u0001\u0000\u0000\u0000jm\u0001\u0000\u0000\u0000ki\u0001"+
		"\u0000\u0000\u0000kl\u0001\u0000\u0000\u0000ln\u0001\u0000\u0000\u0000"+
		"mk\u0001\u0000\u0000\u0000no\u0005\u0000\u0000\u0001o\u0001\u0001\u0000"+
		"\u0000\u0000pw\u0003\u0014\n\u0000qw\u0003\u0004\u0002\u0000rw\u0003\u0018"+
		"\f\u0000sw\u0003\u001c\u000e\u0000tw\u0003 \u0010\u0000uw\u0003$\u0012"+
		"\u0000vp\u0001\u0000\u0000\u0000vq\u0001\u0000\u0000\u0000vr\u0001\u0000"+
		"\u0000\u0000vs\u0001\u0000\u0000\u0000vt\u0001\u0000\u0000\u0000vu\u0001"+
		"\u0000\u0000\u0000w\u0003\u0001\u0000\u0000\u0000x~\u0005\u0001\u0000"+
		"\u0000y}\u0003\u0006\u0003\u0000z}\u0003\u000e\u0007\u0000{}\u0003\b\u0004"+
		"\u0000|y\u0001\u0000\u0000\u0000|z\u0001\u0000\u0000\u0000|{\u0001\u0000"+
		"\u0000\u0000}\u0080\u0001\u0000\u0000\u0000~|\u0001\u0000\u0000\u0000"+
		"~\u007f\u0001\u0000\u0000\u0000\u007f\u0081\u0001\u0000\u0000\u0000\u0080"+
		"~\u0001\u0000\u0000\u0000\u0081\u0082\u0003(\u0014\u0000\u0082\u0005\u0001"+
		"\u0000\u0000\u0000\u0083\u0084\u0005\u0002\u0000\u0000\u0084\u0085\u0005"+
		"\u00a4\u0000\u0000\u0085\u0102\u0005\u00a2\u0000\u0000\u0086\u0087\u0005"+
		"\u0003\u0000\u0000\u0087\u0088\u0005\u00a4\u0000\u0000\u0088\u0102\u0005"+
		"\u00a1\u0000\u0000\u0089\u008a\u0005\u0004\u0000\u0000\u008a\u008b\u0005"+
		"\u00a4\u0000\u0000\u008b\u0102\u0005\u00a1\u0000\u0000\u008c\u008d\u0005"+
		"\u0005\u0000\u0000\u008d\u008e\u0005\u00a4\u0000\u0000\u008e\u0102\u0005"+
		"\u00a1\u0000\u0000\u008f\u0090\u0005\u0006\u0000\u0000\u0090\u0091\u0005"+
		"\u00a4\u0000\u0000\u0091\u0102\u0005\u00a2\u0000\u0000\u0092\u0093\u0005"+
		"\u0007\u0000\u0000\u0093\u0094\u0005\u00a4\u0000\u0000\u0094\u0102\u0005"+
		"\u00a2\u0000\u0000\u0095\u0096\u0005\b\u0000\u0000\u0096\u0097\u0005\u00a4"+
		"\u0000\u0000\u0097\u0102\u0005\u00a2\u0000\u0000\u0098\u0099\u0005\t\u0000"+
		"\u0000\u0099\u009a\u0005\u00a4\u0000\u0000\u009a\u0102\u0005\u00a2\u0000"+
		"\u0000\u009b\u009c\u0005\n\u0000\u0000\u009c\u009d\u0005\u00a4\u0000\u0000"+
		"\u009d\u0102\u0005\u00a2\u0000\u0000\u009e\u009f\u0005\u000b\u0000\u0000"+
		"\u009f\u00a0\u0005\u00a4\u0000\u0000\u00a0\u0102\u0005\u00a2\u0000\u0000"+
		"\u00a1\u00a2\u0005\f\u0000\u0000\u00a2\u00a3\u0005\u00a4\u0000\u0000\u00a3"+
		"\u0102\u0005\u00a2\u0000\u0000\u00a4\u00a5\u0005\r\u0000\u0000\u00a5\u00a6"+
		"\u0005\u00a4\u0000\u0000\u00a6\u0102\u0005\u00a2\u0000\u0000\u00a7\u00a8"+
		"\u0005\u000e\u0000\u0000\u00a8\u00a9\u0005\u00a4\u0000\u0000\u00a9\u0102"+
		"\u0005\u00a2\u0000\u0000\u00aa\u00ab\u0005\u000f\u0000\u0000\u00ab\u00ac"+
		"\u0005\u00a4\u0000\u0000\u00ac\u0102\u0005\u00a1\u0000\u0000\u00ad\u00ae"+
		"\u0005\u0010\u0000\u0000\u00ae\u00af\u0005\u00a4\u0000\u0000\u00af\u0102"+
		"\u0005\u00a1\u0000\u0000\u00b0\u00b1\u0005\u0011\u0000\u0000\u00b1\u00b2"+
		"\u0005\u00a4\u0000\u0000\u00b2\u0102\u0005\u00a1\u0000\u0000\u00b3\u00b4"+
		"\u0005\u0012\u0000\u0000\u00b4\u00b5\u0005\u00a4\u0000\u0000\u00b5\u0102"+
		"\u0005\u00a2\u0000\u0000\u00b6\u00b7\u0005\u0013\u0000\u0000\u00b7\u00b8"+
		"\u0005\u00a4\u0000\u0000\u00b8\u0102\u0005\u00a2\u0000\u0000\u00b9\u00ba"+
		"\u0005\u0014\u0000\u0000\u00ba\u00bb\u0005\u00a4\u0000\u0000\u00bb\u0102"+
		"\u0005\u00a2\u0000\u0000\u00bc\u00bd\u0005\u0015\u0000\u0000\u00bd\u00be"+
		"\u0005\u00a4\u0000\u0000\u00be\u0102\u0005\u00a2\u0000\u0000\u00bf\u00c0"+
		"\u0005\u0016\u0000\u0000\u00c0\u00c1\u0005\u00a4\u0000\u0000\u00c1\u0102"+
		"\u0005\u00a2\u0000\u0000\u00c2\u00c3\u0005\u0017\u0000\u0000\u00c3\u00c4"+
		"\u0005\u00a4\u0000\u0000\u00c4\u0102\u0005\u00a1\u0000\u0000\u00c5\u00c6"+
		"\u0005\u0018\u0000\u0000\u00c6\u00c7\u0005\u00a4\u0000\u0000\u00c7\u0102"+
		"\u0005\u00af\u0000\u0000\u00c8\u00c9\u0005\u0019\u0000\u0000\u00c9\u00ca"+
		"\u0005\u00a4\u0000\u0000\u00ca\u0102\u0005\u00af\u0000\u0000\u00cb\u00cc"+
		"\u0005\u001a\u0000\u0000\u00cc\u00cd\u0005\u00a4\u0000\u0000\u00cd\u0102"+
		"\u0005\u00af\u0000\u0000\u00ce\u00cf\u0005\u001b\u0000\u0000\u00cf\u00d0"+
		"\u0005\u00a4\u0000\u0000\u00d0\u0102\u0005\u00af\u0000\u0000\u00d1\u00d2"+
		"\u0005\u001c\u0000\u0000\u00d2\u00d3\u0005\u00a4\u0000\u0000\u00d3\u0102"+
		"\u0005\u00a2\u0000\u0000\u00d4\u00d5\u0005\u001d\u0000\u0000\u00d5\u00d6"+
		"\u0005\u00a4\u0000\u0000\u00d6\u0102\u0005\u00a1\u0000\u0000\u00d7\u00d8"+
		"\u0005\u001e\u0000\u0000\u00d8\u00d9\u0005\u00a4\u0000\u0000\u00d9\u0102"+
		"\u0005\u00af\u0000\u0000\u00da\u00db\u0005\u001f\u0000\u0000\u00db\u00dc"+
		"\u0005\u00a4\u0000\u0000\u00dc\u0102\u0005\u00a2\u0000\u0000\u00dd\u00de"+
		"\u0005 \u0000\u0000\u00de\u00df\u0005\u00a4\u0000\u0000\u00df\u0102\u0005"+
		"\u00a1\u0000\u0000\u00e0\u00e1\u0005!\u0000\u0000\u00e1\u00e2\u0005\u00a4"+
		"\u0000\u0000\u00e2\u0102\u0005\u00a1\u0000\u0000\u00e3\u00e4\u0005\"\u0000"+
		"\u0000\u00e4\u00e5\u0005\u00a4\u0000\u0000\u00e5\u0102\u0005\u00a2\u0000"+
		"\u0000\u00e6\u00e7\u0005#\u0000\u0000\u00e7\u00e8\u0005\u00a4\u0000\u0000"+
		"\u00e8\u0102\u0005\u00a2\u0000\u0000\u00e9\u00ea\u0005$\u0000\u0000\u00ea"+
		"\u00eb\u0005\u00a4\u0000\u0000\u00eb\u0102\u0005\u00a1\u0000\u0000\u00ec"+
		"\u00ed\u0005%\u0000\u0000\u00ed\u00ee\u0005\u00a4\u0000\u0000\u00ee\u0102"+
		"\u0005\u00a1\u0000\u0000\u00ef\u00f0\u0005&\u0000\u0000\u00f0\u00f1\u0005"+
		"\u00a4\u0000\u0000\u00f1\u0102\u0005\u00a2\u0000\u0000\u00f2\u00f3\u0005"+
		"\'\u0000\u0000\u00f3\u00f4\u0005\u00a4\u0000\u0000\u00f4\u0102\u0005\u00a1"+
		"\u0000\u0000\u00f5\u00f6\u0005(\u0000\u0000\u00f6\u00f7\u0005\u00a4\u0000"+
		"\u0000\u00f7\u0102\u0005\u00a2\u0000\u0000\u00f8\u00f9\u0005)\u0000\u0000"+
		"\u00f9\u00fa\u0005\u00a4\u0000\u0000\u00fa\u0102\u0005\u00af\u0000\u0000"+
		"\u00fb\u00fc\u0005*\u0000\u0000\u00fc\u00fd\u0005\u00a4\u0000\u0000\u00fd"+
		"\u0102\u0005\u00a2\u0000\u0000\u00fe\u00ff\u0005+\u0000\u0000\u00ff\u0100"+
		"\u0005\u00a4\u0000\u0000\u0100\u0102\u0005\u00a2\u0000\u0000\u0101\u0083"+
		"\u0001\u0000\u0000\u0000\u0101\u0086\u0001\u0000\u0000\u0000\u0101\u0089"+
		"\u0001\u0000\u0000\u0000\u0101\u008c\u0001\u0000\u0000\u0000\u0101\u008f"+
		"\u0001\u0000\u0000\u0000\u0101\u0092\u0001\u0000\u0000\u0000\u0101\u0095"+
		"\u0001\u0000\u0000\u0000\u0101\u0098\u0001\u0000\u0000\u0000\u0101\u009b"+
		"\u0001\u0000\u0000\u0000\u0101\u009e\u0001\u0000\u0000\u0000\u0101\u00a1"+
		"\u0001\u0000\u0000\u0000\u0101\u00a4\u0001\u0000\u0000\u0000\u0101\u00a7"+
		"\u0001\u0000\u0000\u0000\u0101\u00aa\u0001\u0000\u0000\u0000\u0101\u00ad"+
		"\u0001\u0000\u0000\u0000\u0101\u00b0\u0001\u0000\u0000\u0000\u0101\u00b3"+
		"\u0001\u0000\u0000\u0000\u0101\u00b6\u0001\u0000\u0000\u0000\u0101\u00b9"+
		"\u0001\u0000\u0000\u0000\u0101\u00bc\u0001\u0000\u0000\u0000\u0101\u00bf"+
		"\u0001\u0000\u0000\u0000\u0101\u00c2\u0001\u0000\u0000\u0000\u0101\u00c5"+
		"\u0001\u0000\u0000\u0000\u0101\u00c8\u0001\u0000\u0000\u0000\u0101\u00cb"+
		"\u0001\u0000\u0000\u0000\u0101\u00ce\u0001\u0000\u0000\u0000\u0101\u00d1"+
		"\u0001\u0000\u0000\u0000\u0101\u00d4\u0001\u0000\u0000\u0000\u0101\u00d7"+
		"\u0001\u0000\u0000\u0000\u0101\u00da\u0001\u0000\u0000\u0000\u0101\u00dd"+
		"\u0001\u0000\u0000\u0000\u0101\u00e0\u0001\u0000\u0000\u0000\u0101\u00e3"+
		"\u0001\u0000\u0000\u0000\u0101\u00e6\u0001\u0000\u0000\u0000\u0101\u00e9"+
		"\u0001\u0000\u0000\u0000\u0101\u00ec\u0001\u0000\u0000\u0000\u0101\u00ef"+
		"\u0001\u0000\u0000\u0000\u0101\u00f2\u0001\u0000\u0000\u0000\u0101\u00f5"+
		"\u0001\u0000\u0000\u0000\u0101\u00f8\u0001\u0000\u0000\u0000\u0101\u00fb"+
		"\u0001\u0000\u0000\u0000\u0101\u00fe\u0001\u0000\u0000\u0000\u0102\u0007"+
		"\u0001\u0000\u0000\u0000\u0103\u0104\u0005,\u0000\u0000\u0104\u0108\u0003"+
		"f3\u0000\u0105\u0107\u0003\n\u0005\u0000\u0106\u0105\u0001\u0000\u0000"+
		"\u0000\u0107\u010a\u0001\u0000\u0000\u0000\u0108\u0106\u0001\u0000\u0000"+
		"\u0000\u0108\u0109\u0001\u0000\u0000\u0000\u0109\u010b\u0001\u0000\u0000"+
		"\u0000\u010a\u0108\u0001\u0000\u0000\u0000\u010b\u010c\u0003(\u0014\u0000"+
		"\u010c\t\u0001\u0000\u0000\u0000\u010d\u010e\u0005-\u0000\u0000\u010e"+
		"\u0112\u0003T*\u0000\u010f\u0111\u0003\f\u0006\u0000\u0110\u010f\u0001"+
		"\u0000\u0000\u0000\u0111\u0114\u0001\u0000\u0000\u0000\u0112\u0110\u0001"+
		"\u0000\u0000\u0000\u0112\u0113\u0001\u0000\u0000\u0000\u0113\u0115\u0001"+
		"\u0000\u0000\u0000\u0114\u0112\u0001\u0000\u0000\u0000\u0115\u0116\u0003"+
		"(\u0014\u0000\u0116\u000b\u0001\u0000\u0000\u0000\u0117\u0118\u0005.\u0000"+
		"\u0000\u0118\u0119\u0005\u00a4\u0000\u0000\u0119\u011a\u0005\u00a6\u0000"+
		"\u0000\u011a\u0128\u0005\u00a7\u0000\u0000\u011b\u011c\u0005/\u0000\u0000"+
		"\u011c\u011d\u0005\u00a4\u0000\u0000\u011d\u0128\u0005\u00a1\u0000\u0000"+
		"\u011e\u011f\u00050\u0000\u0000\u011f\u0120\u0005\u00a4\u0000\u0000\u0120"+
		"\u0128\u0005\u00a2\u0000\u0000\u0121\u0122\u00051\u0000\u0000\u0122\u0123"+
		"\u0005\u00a4\u0000\u0000\u0123\u0128\u0005\u00af\u0000\u0000\u0124\u0125"+
		"\u00052\u0000\u0000\u0125\u0126\u0005\u00a4\u0000\u0000\u0126\u0128\u0005"+
		"\u00af\u0000\u0000\u0127\u0117\u0001\u0000\u0000\u0000\u0127\u011b\u0001"+
		"\u0000\u0000\u0000\u0127\u011e\u0001\u0000\u0000\u0000\u0127\u0121\u0001"+
		"\u0000\u0000\u0000\u0127\u0124\u0001\u0000\u0000\u0000\u0128\r\u0001\u0000"+
		"\u0000\u0000\u0129\u012a\u00053\u0000\u0000\u012a\u012e\u0003f3\u0000"+
		"\u012b\u012d\u0003\u0010\b\u0000\u012c\u012b\u0001\u0000\u0000\u0000\u012d"+
		"\u0130\u0001\u0000\u0000\u0000\u012e\u012c\u0001\u0000\u0000\u0000\u012e"+
		"\u012f\u0001\u0000\u0000\u0000\u012f\u0131\u0001\u0000\u0000\u0000\u0130"+
		"\u012e\u0001\u0000\u0000\u0000\u0131\u0132\u0003(\u0014\u0000\u0132\u000f"+
		"\u0001\u0000\u0000\u0000\u0133\u0134\u00054\u0000\u0000\u0134\u0135\u0005"+
		"\u00a4\u0000\u0000\u0135\u0141\u0005\u00a1\u0000\u0000\u0136\u0137\u0005"+
		"5\u0000\u0000\u0137\u0138\u0005\u00a4\u0000\u0000\u0138\u0141\u0005\u00a1"+
		"\u0000\u0000\u0139\u013a\u00056\u0000\u0000\u013a\u013b\u0005\u00a4\u0000"+
		"\u0000\u013b\u0141\u0005\u00a1\u0000\u0000\u013c\u013d\u00057\u0000\u0000"+
		"\u013d\u013e\u0005\u00a4\u0000\u0000\u013e\u0141\u0003T*\u0000\u013f\u0141"+
		"\u0003\u0012\t\u0000\u0140\u0133\u0001\u0000\u0000\u0000\u0140\u0136\u0001"+
		"\u0000\u0000\u0000\u0140\u0139\u0001\u0000\u0000\u0000\u0140\u013c\u0001"+
		"\u0000\u0000\u0000\u0140\u013f\u0001\u0000\u0000\u0000\u0141\u0011\u0001"+
		"\u0000\u0000\u0000\u0142\u0146\u0007\u0000\u0000\u0000\u0143\u0145\u0003"+
		"V+\u0000\u0144\u0143\u0001\u0000\u0000\u0000\u0145\u0148\u0001\u0000\u0000"+
		"\u0000\u0146\u0144\u0001\u0000\u0000\u0000\u0146\u0147\u0001\u0000\u0000"+
		"\u0000\u0147\u0149\u0001\u0000\u0000\u0000\u0148\u0146\u0001\u0000\u0000"+
		"\u0000\u0149\u014a\u0003(\u0014\u0000\u014a\u0013\u0001\u0000\u0000\u0000"+
		"\u014b\u014c\u0005=\u0000\u0000\u014c\u0150\u0005\u00b1\u0000\u0000\u014d"+
		"\u014f\u0003\u0016\u000b\u0000\u014e\u014d\u0001\u0000\u0000\u0000\u014f"+
		"\u0152\u0001\u0000\u0000\u0000\u0150\u014e\u0001\u0000\u0000\u0000\u0150"+
		"\u0151\u0001\u0000\u0000\u0000\u0151\u0153\u0001\u0000\u0000\u0000\u0152"+
		"\u0150\u0001\u0000\u0000\u0000\u0153\u0154\u0003(\u0014\u0000\u0154\u0015"+
		"\u0001\u0000\u0000\u0000\u0155\u0156\u0005>\u0000\u0000\u0156\u0159\u0005"+
		"\u00a4\u0000\u0000\u0157\u015a\u0005\u00b0\u0000\u0000\u0158\u015a\u0003"+
		"*\u0015\u0000\u0159\u0157\u0001\u0000\u0000\u0000\u0159\u0158\u0001\u0000"+
		"\u0000\u0000\u015a\u016b\u0001\u0000\u0000\u0000\u015b\u015c\u0005?\u0000"+
		"\u0000\u015c\u015d\u0005\u00a4\u0000\u0000\u015d\u016b\u0005\u00a1\u0000"+
		"\u0000\u015e\u015f\u0005@\u0000\u0000\u015f\u0160\u0005\u00a4\u0000\u0000"+
		"\u0160\u016b\u0005\u00a1\u0000\u0000\u0161\u0162\u0005A\u0000\u0000\u0162"+
		"\u0163\u0005\u00a4\u0000\u0000\u0163\u0164\u0005\u00a8\u0000\u0000\u0164"+
		"\u0165\u0005\u00a9\u0000\u0000\u0165\u0166\u0005\u00aa\u0000\u0000\u0166"+
		"\u016b\u0005\u00ab\u0000\u0000\u0167\u0168\u0005B\u0000\u0000\u0168\u0169"+
		"\u0005\u00a4\u0000\u0000\u0169\u016b\u0007\u0001\u0000\u0000\u016a\u0155"+
		"\u0001\u0000\u0000\u0000\u016a\u015b\u0001\u0000\u0000\u0000\u016a\u015e"+
		"\u0001\u0000\u0000\u0000\u016a\u0161\u0001\u0000\u0000\u0000\u016a\u0167"+
		"\u0001\u0000\u0000\u0000\u016b\u0017\u0001\u0000\u0000\u0000\u016c\u016d"+
		"\u0005D\u0000\u0000\u016d\u0171\u0005\u00b1\u0000\u0000\u016e\u0170\u0003"+
		"\u001a\r\u0000\u016f\u016e\u0001\u0000\u0000\u0000\u0170\u0173\u0001\u0000"+
		"\u0000\u0000\u0171\u016f\u0001\u0000\u0000\u0000\u0171\u0172\u0001\u0000"+
		"\u0000\u0000\u0172\u0174\u0001\u0000\u0000\u0000\u0173\u0171\u0001\u0000"+
		"\u0000\u0000\u0174\u0175\u0003(\u0014\u0000\u0175\u0019\u0001\u0000\u0000"+
		"\u0000\u0176\u0177\u0005E\u0000\u0000\u0177\u0178\u0005\u00a4\u0000\u0000"+
		"\u0178\u0186\u0005\u00ac\u0000\u0000\u0179\u017a\u0005F\u0000\u0000\u017a"+
		"\u017b\u0005\u00a4\u0000\u0000\u017b\u0186\u0005\u00a1\u0000\u0000\u017c"+
		"\u017d\u0005G\u0000\u0000\u017d\u017e\u0005\u00a4\u0000\u0000\u017e\u0186"+
		"\u0005\u00af\u0000\u0000\u017f\u0180\u0005H\u0000\u0000\u0180\u0181\u0005"+
		"\u00a4\u0000\u0000\u0181\u0186\u0005\u00a1\u0000\u0000\u0182\u0183\u0005"+
		"I\u0000\u0000\u0183\u0184\u0005\u00a4\u0000\u0000\u0184\u0186\u0005\u00b1"+
		"\u0000\u0000\u0185\u0176\u0001\u0000\u0000\u0000\u0185\u0179\u0001\u0000"+
		"\u0000\u0000\u0185\u017c\u0001\u0000\u0000\u0000\u0185\u017f\u0001\u0000"+
		"\u0000\u0000\u0185\u0182\u0001\u0000\u0000\u0000\u0186\u001b\u0001\u0000"+
		"\u0000\u0000\u0187\u0188\u0005J\u0000\u0000\u0188\u018c\u0005\u00b1\u0000"+
		"\u0000\u0189\u018b\u0003\u001e\u000f\u0000\u018a\u0189\u0001\u0000\u0000"+
		"\u0000\u018b\u018e\u0001\u0000\u0000\u0000\u018c\u018a\u0001\u0000\u0000"+
		"\u0000\u018c\u018d\u0001\u0000\u0000\u0000\u018d\u018f\u0001\u0000\u0000"+
		"\u0000\u018e\u018c\u0001\u0000\u0000\u0000\u018f\u0190\u0003(\u0014\u0000"+
		"\u0190\u001d\u0001\u0000\u0000\u0000\u0191\u0192\u0005J\u0000\u0000\u0192"+
		"\u0193\u0005\u00a4\u0000\u0000\u0193\u0194\u0005\u00ad\u0000\u0000\u0194"+
		"\u0195\u0005\u00a3\u0000\u0000\u0195\u001f\u0001\u0000\u0000\u0000\u0196"+
		"\u0197\u0005K\u0000\u0000\u0197\u019b\u0005\u00b1\u0000\u0000\u0198\u019a"+
		"\u0003\"\u0011\u0000\u0199\u0198\u0001\u0000\u0000\u0000\u019a\u019d\u0001"+
		"\u0000\u0000\u0000\u019b\u0199\u0001\u0000\u0000\u0000\u019b\u019c\u0001"+
		"\u0000\u0000\u0000\u019c\u019e\u0001\u0000\u0000\u0000\u019d\u019b\u0001"+
		"\u0000\u0000\u0000\u019e\u019f\u0003(\u0014\u0000\u019f!\u0001\u0000\u0000"+
		"\u0000\u01a0\u01b1\u0003,\u0016\u0000\u01a1\u01b1\u00030\u0018\u0000\u01a2"+
		"\u01b1\u00034\u001a\u0000\u01a3\u01b1\u00036\u001b\u0000\u01a4\u01b1\u0003"+
		":\u001d\u0000\u01a5\u01b1\u0003<\u001e\u0000\u01a6\u01b1\u0003>\u001f"+
		"\u0000\u01a7\u01b1\u0003@ \u0000\u01a8\u01b1\u0003B!\u0000\u01a9\u01b1"+
		"\u0003D\"\u0000\u01aa\u01b1\u0003F#\u0000\u01ab\u01b1\u0003R)\u0000\u01ac"+
		"\u01b1\u0003V+\u0000\u01ad\u01b1\u0003Z-\u0000\u01ae\u01b1\u0003`0\u0000"+
		"\u01af\u01b1\u0003d2\u0000\u01b0\u01a0\u0001\u0000\u0000\u0000\u01b0\u01a1"+
		"\u0001\u0000\u0000\u0000\u01b0\u01a2\u0001\u0000\u0000\u0000\u01b0\u01a3"+
		"\u0001\u0000\u0000\u0000\u01b0\u01a4\u0001\u0000\u0000\u0000\u01b0\u01a5"+
		"\u0001\u0000\u0000\u0000\u01b0\u01a6\u0001\u0000\u0000\u0000\u01b0\u01a7"+
		"\u0001\u0000\u0000\u0000\u01b0\u01a8\u0001\u0000\u0000\u0000\u01b0\u01a9"+
		"\u0001\u0000\u0000\u0000\u01b0\u01aa\u0001\u0000\u0000\u0000\u01b0\u01ab"+
		"\u0001\u0000\u0000\u0000\u01b0\u01ac\u0001\u0000\u0000\u0000\u01b0\u01ad"+
		"\u0001\u0000\u0000\u0000\u01b0\u01ae\u0001\u0000\u0000\u0000\u01b0\u01af"+
		"\u0001\u0000\u0000\u0000\u01b1#\u0001\u0000\u0000\u0000\u01b2\u01b3\u0005"+
		"L\u0000\u0000\u01b3\u01b7\u0005\u00b1\u0000\u0000\u01b4\u01b6\u0003&\u0013"+
		"\u0000\u01b5\u01b4\u0001\u0000\u0000\u0000\u01b6\u01b9\u0001\u0000\u0000"+
		"\u0000\u01b7\u01b5\u0001\u0000\u0000\u0000\u01b7\u01b8\u0001\u0000\u0000"+
		"\u0000\u01b8\u01ba\u0001\u0000\u0000\u0000\u01b9\u01b7\u0001\u0000\u0000"+
		"\u0000\u01ba\u01bb\u0003(\u0014\u0000\u01bb%\u0001\u0000\u0000\u0000\u01bc"+
		"\u01bd\u0005\u00a1\u0000\u0000\u01bd\u01be\u0005\u00a4\u0000\u0000\u01be"+
		"\u01bf\u0003H$\u0000\u01bf\'\u0001\u0000\u0000\u0000\u01c0\u01c1\u0007"+
		"\u0002\u0000\u0000\u01c1)\u0001\u0000\u0000\u0000\u01c2\u01c3\u0005\u00b1"+
		"\u0000\u0000\u01c3\u01c4\u0005P\u0000\u0000\u01c4\u01c5\u0007\u0003\u0000"+
		"\u0000\u01c5+\u0001\u0000\u0000\u0000\u01c6\u01c7\u0005S\u0000\u0000\u01c7"+
		"\u01c8\u0005\u00a4\u0000\u0000\u01c8\u01c9\u0003.\u0017\u0000\u01c9-\u0001"+
		"\u0000\u0000\u0000\u01ca\u01cb\u0007\u0004\u0000\u0000\u01cb/\u0001\u0000"+
		"\u0000\u0000\u01cc\u01cd\u0005p\u0000\u0000\u01cd\u01cf\u0005\u00a4\u0000"+
		"\u0000\u01ce\u01d0\u00032\u0019\u0000\u01cf\u01ce\u0001\u0000\u0000\u0000"+
		"\u01d0\u01d1\u0001\u0000\u0000\u0000\u01d1\u01cf\u0001\u0000\u0000\u0000"+
		"\u01d1\u01d2\u0001\u0000\u0000\u0000\u01d21\u0001\u0000\u0000\u0000\u01d3"+
		"\u01d4\u0007\u0005\u0000\u0000\u01d43\u0001\u0000\u0000\u0000\u01d5\u01d6"+
		"\u0005\u0083\u0000\u0000\u01d6\u01d7\u0005\u00a4\u0000\u0000\u01d7\u01d8"+
		"\u0003P(\u0000\u01d85\u0001\u0000\u0000\u0000\u01d9\u01da\u0005\u0084"+
		"\u0000\u0000\u01da\u01db\u0005\u00a4\u0000\u0000\u01db\u01dc\u00038\u001c"+
		"\u0000\u01dc7\u0001\u0000\u0000\u0000\u01dd\u01de\u0007\u0006\u0000\u0000"+
		"\u01de9\u0001\u0000\u0000\u0000\u01df\u01e0\u0005\u0089\u0000\u0000\u01e0"+
		"\u01e1\u0005\u00a4\u0000\u0000\u01e1\u01e2\u0007\u0007\u0000\u0000\u01e2"+
		";\u0001\u0000\u0000\u0000\u01e3\u01e4\u0005\u008a\u0000\u0000\u01e4\u01e5"+
		"\u0005\u00a4\u0000\u0000\u01e5\u01e6\u0007\u0007\u0000\u0000\u01e6=\u0001"+
		"\u0000\u0000\u0000\u01e7\u01e8\u0005\u008b\u0000\u0000\u01e8\u01e9\u0005"+
		"\u00a4\u0000\u0000\u01e9\u01ea\u0007\u0007\u0000\u0000\u01ea?\u0001\u0000"+
		"\u0000\u0000\u01eb\u01ec\u0005\u008c\u0000\u0000\u01ec\u01ed\u0005\u00a4"+
		"\u0000\u0000\u01ed\u01ee\u0003J%\u0000\u01eeA\u0001\u0000\u0000\u0000"+
		"\u01ef\u01f0\u0005\u008d\u0000\u0000\u01f0\u01f1\u0005\u00a4\u0000\u0000"+
		"\u01f1\u01f2\u0003L&\u0000\u01f2C\u0001\u0000\u0000\u0000\u01f3\u01f4"+
		"\u0005\u008e\u0000\u0000\u01f4\u01f5\u0005\u00a4\u0000\u0000\u01f5\u01f6"+
		"\u0003N\'\u0000\u01f6E\u0001\u0000\u0000\u0000\u01f7\u01f8\u0005\u008f"+
		"\u0000\u0000\u01f8\u01f9\u0005\u00a4\u0000\u0000\u01f9\u01fa\u0003^/\u0000"+
		"\u01faG\u0001\u0000\u0000\u0000\u01fb\u01fc\u0007\u0007\u0000\u0000\u01fc"+
		"I\u0001\u0000\u0000\u0000\u01fd\u01fe\u0007\u0007\u0000\u0000\u01feK\u0001"+
		"\u0000\u0000\u0000\u01ff\u0200\u0005\u00b1\u0000\u0000\u0200M\u0001\u0000"+
		"\u0000\u0000\u0201\u0202\u0007\u0007\u0000\u0000\u0202O\u0001\u0000\u0000"+
		"\u0000\u0203\u0204\u0007\u0007\u0000\u0000\u0204Q\u0001\u0000\u0000\u0000"+
		"\u0205\u0206\u0005\u0090\u0000\u0000\u0206\u0207\u0005\u00a4\u0000\u0000"+
		"\u0207\u0208\u0003T*\u0000\u0208S\u0001\u0000\u0000\u0000\u0209\u020a"+
		"\u0007\u0007\u0000\u0000\u020aU\u0001\u0000\u0000\u0000\u020b\u020c\u0005"+
		"\u0091\u0000\u0000\u020c\u020e\u0005\u00a4\u0000\u0000\u020d\u020f\u0003"+
		"X,\u0000\u020e\u020d\u0001\u0000\u0000\u0000\u020f\u0210\u0001\u0000\u0000"+
		"\u0000\u0210\u020e\u0001\u0000\u0000\u0000\u0210\u0211\u0001\u0000\u0000"+
		"\u0000\u0211W\u0001\u0000\u0000\u0000\u0212\u0213\u0007\u0007\u0000\u0000"+
		"\u0213Y\u0001\u0000\u0000\u0000\u0214\u0215\u0005\u0092\u0000\u0000\u0215"+
		"\u0216\u0005\u00a4\u0000\u0000\u0216\u0217\u0003\\.\u0000\u0217[\u0001"+
		"\u0000\u0000\u0000\u0218\u0219\u0007\u0007\u0000\u0000\u0219]\u0001\u0000"+
		"\u0000\u0000\u021a\u021b\u0007\u0007\u0000\u0000\u021b_\u0001\u0000\u0000"+
		"\u0000\u021c\u021d\u0005\u0093\u0000\u0000\u021d\u021e\u0005\u00a4\u0000"+
		"\u0000\u021e\u021f\u0003b1\u0000\u021fa\u0001\u0000\u0000\u0000\u0220"+
		"\u0221\u0007\u0007\u0000\u0000\u0221c\u0001\u0000\u0000\u0000\u0222\u0223"+
		"\u0005\u0094\u0000\u0000\u0223\u0225\u0005\u00a4\u0000\u0000\u0224\u0226"+
		"\u0005\u00a5\u0000\u0000\u0225\u0224\u0001\u0000\u0000\u0000\u0226\u0227"+
		"\u0001\u0000\u0000\u0000\u0227\u0225\u0001\u0000\u0000\u0000\u0227\u0228"+
		"\u0001\u0000\u0000\u0000\u0228e\u0001\u0000\u0000\u0000\u0229\u022a\u0007"+
		"\b\u0000\u0000\u022ag\u0001\u0000\u0000\u0000\u0017kv|~\u0101\u0108\u0112"+
		"\u0127\u012e\u0140\u0146\u0150\u0159\u016a\u0171\u0185\u018c\u019b\u01b0"+
		"\u01b7\u01d1\u0210\u0227";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}