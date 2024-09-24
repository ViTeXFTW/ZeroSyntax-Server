// Generated from ./server/src/utils/antlr/MapIni.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { MapIniListener } from "./MapIniListener";
import { MapIniVisitor } from "./MapIniVisitor";


export class MapIniParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly T__55 = 56;
	public static readonly T__56 = 57;
	public static readonly T__57 = 58;
	public static readonly T__58 = 59;
	public static readonly T__59 = 60;
	public static readonly T__60 = 61;
	public static readonly T__61 = 62;
	public static readonly T__62 = 63;
	public static readonly T__63 = 64;
	public static readonly T__64 = 65;
	public static readonly T__65 = 66;
	public static readonly T__66 = 67;
	public static readonly T__67 = 68;
	public static readonly T__68 = 69;
	public static readonly T__69 = 70;
	public static readonly T__70 = 71;
	public static readonly T__71 = 72;
	public static readonly T__72 = 73;
	public static readonly T__73 = 74;
	public static readonly T__74 = 75;
	public static readonly T__75 = 76;
	public static readonly T__76 = 77;
	public static readonly T__77 = 78;
	public static readonly T__78 = 79;
	public static readonly T__79 = 80;
	public static readonly T__80 = 81;
	public static readonly T__81 = 82;
	public static readonly T__82 = 83;
	public static readonly T__83 = 84;
	public static readonly T__84 = 85;
	public static readonly T__85 = 86;
	public static readonly T__86 = 87;
	public static readonly T__87 = 88;
	public static readonly T__88 = 89;
	public static readonly T__89 = 90;
	public static readonly T__90 = 91;
	public static readonly T__91 = 92;
	public static readonly T__92 = 93;
	public static readonly T__93 = 94;
	public static readonly T__94 = 95;
	public static readonly T__95 = 96;
	public static readonly T__96 = 97;
	public static readonly T__97 = 98;
	public static readonly T__98 = 99;
	public static readonly T__99 = 100;
	public static readonly T__100 = 101;
	public static readonly T__101 = 102;
	public static readonly T__102 = 103;
	public static readonly T__103 = 104;
	public static readonly T__104 = 105;
	public static readonly T__105 = 106;
	public static readonly T__106 = 107;
	public static readonly T__107 = 108;
	public static readonly T__108 = 109;
	public static readonly T__109 = 110;
	public static readonly T__110 = 111;
	public static readonly T__111 = 112;
	public static readonly T__112 = 113;
	public static readonly T__113 = 114;
	public static readonly T__114 = 115;
	public static readonly T__115 = 116;
	public static readonly T__116 = 117;
	public static readonly T__117 = 118;
	public static readonly T__118 = 119;
	public static readonly T__119 = 120;
	public static readonly T__120 = 121;
	public static readonly T__121 = 122;
	public static readonly T__122 = 123;
	public static readonly T__123 = 124;
	public static readonly T__124 = 125;
	public static readonly T__125 = 126;
	public static readonly T__126 = 127;
	public static readonly T__127 = 128;
	public static readonly T__128 = 129;
	public static readonly T__129 = 130;
	public static readonly T__130 = 131;
	public static readonly T__131 = 132;
	public static readonly T__132 = 133;
	public static readonly T__133 = 134;
	public static readonly T__134 = 135;
	public static readonly T__135 = 136;
	public static readonly T__136 = 137;
	public static readonly T__137 = 138;
	public static readonly T__138 = 139;
	public static readonly T__139 = 140;
	public static readonly T__140 = 141;
	public static readonly T__141 = 142;
	public static readonly T__142 = 143;
	public static readonly T__143 = 144;
	public static readonly T__144 = 145;
	public static readonly T__145 = 146;
	public static readonly T__146 = 147;
	public static readonly T__147 = 148;
	public static readonly T__148 = 149;
	public static readonly T__149 = 150;
	public static readonly T__150 = 151;
	public static readonly T__151 = 152;
	public static readonly T__152 = 153;
	public static readonly T__153 = 154;
	public static readonly T__154 = 155;
	public static readonly T__155 = 156;
	public static readonly T__156 = 157;
	public static readonly T__157 = 158;
	public static readonly T__158 = 159;
	public static readonly T__159 = 160;
	public static readonly INT = 161;
	public static readonly FLOAT = 162;
	public static readonly PROCENT = 163;
	public static readonly EQ = 164;
	public static readonly WEAPONSLOT = 165;
	public static readonly XCOORD = 166;
	public static readonly YCOORD = 167;
	public static readonly COORDLEFT = 168;
	public static readonly COORDTOP = 169;
	public static readonly COORDRIGHT = 170;
	public static readonly COORDBOTTOM = 171;
	public static readonly A2D_ANIMATION_MODE = 172;
	public static readonly ARMOR_TYPE = 173;
	public static readonly MANUAL = 174;
	public static readonly BOOLEAN = 175;
	public static readonly NVALUE = 176;
	public static readonly ID = 177;
	public static readonly SKIp = 178;
	public static readonly COMMENT = 179;
	public static readonly WS = 180;
	public static readonly RULE_program = 0;
	public static readonly RULE_classes = 1;
	public static readonly RULE_aiDataClass = 2;
	public static readonly RULE_aidataClassProperties_single = 3;
	public static readonly RULE_aidataClassproperties_BlockSkirmishBuildList = 4;
	public static readonly RULE_skirmishBuildListBlock = 5;
	public static readonly RULE_skirmishBuildListBlock_structure_properties = 6;
	public static readonly RULE_aidataClassProperties_blockSideinfo = 7;
	public static readonly RULE_sideinfoproperties = 8;
	public static readonly RULE_sideinfo_skillset_blocks = 9;
	public static readonly RULE_mappedImageClass = 10;
	public static readonly RULE_mappedImageClassProperties = 11;
	public static readonly RULE_animation2DClass = 12;
	public static readonly RULE_animation2DClassProperties = 13;
	public static readonly RULE_armorClass = 14;
	public static readonly RULE_armorClassProperties = 15;
	public static readonly RULE_commandButtonClass = 16;
	public static readonly RULE_commandButtonClassProperties = 17;
	public static readonly RULE_commandSetClass = 18;
	public static readonly RULE_commandSetClassProperty = 19;
	public static readonly RULE_end = 20;
	public static readonly RULE_file = 21;
	public static readonly RULE_cb_command_property = 22;
	public static readonly RULE_cb_command_value = 23;
	public static readonly RULE_cb_options_property = 24;
	public static readonly RULE_cb_options_value = 25;
	public static readonly RULE_cb_buttonimage_property = 26;
	public static readonly RULE_cb_buttonbordertype_property = 27;
	public static readonly RULE_cb_buttonbordertype_value = 28;
	public static readonly RULE_cb_textlabel_property = 29;
	public static readonly RULE_cb_descriptionlabel_property = 30;
	public static readonly RULE_cb_conflictinglabel_property = 31;
	public static readonly RULE_cb_cursorname_propery = 32;
	public static readonly RULE_cb_radius_cursorname_value = 33;
	public static readonly RULE_cb_invalid_cursorname_propery = 34;
	public static readonly RULE_cb_unitspecificsound_property = 35;
	public static readonly RULE_commandbutton_value = 36;
	public static readonly RULE_cursorname_value = 37;
	public static readonly RULE_radius_cursorname_value = 38;
	public static readonly RULE_invalid_cursorname_value = 39;
	public static readonly RULE_mappedimage_value = 40;
	public static readonly RULE_object_property = 41;
	public static readonly RULE_object_value = 42;
	public static readonly RULE_science_property = 43;
	public static readonly RULE_science_value = 44;
	public static readonly RULE_specialpower_property = 45;
	public static readonly RULE_specialpower_value = 46;
	public static readonly RULE_audioevent_value = 47;
	public static readonly RULE_upgrade_property = 48;
	public static readonly RULE_upgrade_value = 49;
	public static readonly RULE_weaponslot_property = 50;
	public static readonly RULE_faction = 51;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "classes", "aiDataClass", "aidataClassProperties_single", "aidataClassproperties_BlockSkirmishBuildList", 
		"skirmishBuildListBlock", "skirmishBuildListBlock_structure_properties", 
		"aidataClassProperties_blockSideinfo", "sideinfoproperties", "sideinfo_skillset_blocks", 
		"mappedImageClass", "mappedImageClassProperties", "animation2DClass", 
		"animation2DClassProperties", "armorClass", "armorClassProperties", "commandButtonClass", 
		"commandButtonClassProperties", "commandSetClass", "commandSetClassProperty", 
		"end", "file", "cb_command_property", "cb_command_value", "cb_options_property", 
		"cb_options_value", "cb_buttonimage_property", "cb_buttonbordertype_property", 
		"cb_buttonbordertype_value", "cb_textlabel_property", "cb_descriptionlabel_property", 
		"cb_conflictinglabel_property", "cb_cursorname_propery", "cb_radius_cursorname_value", 
		"cb_invalid_cursorname_propery", "cb_unitspecificsound_property", "commandbutton_value", 
		"cursorname_value", "radius_cursorname_value", "invalid_cursorname_value", 
		"mappedimage_value", "object_property", "object_value", "science_property", 
		"science_value", "specialpower_property", "specialpower_value", "audioevent_value", 
		"upgrade_property", "upgrade_value", "weaponslot_property", "faction",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'AIData'", "'StructureSeconds'", "'TeamSeconds'", "'Wealthy'", 
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
		"'Rebuilds'", "'Angle'", "'InitiallyBuilt'", "'AutomaticallyBuild'", "'SideInfo'", 
		"'ResourceGatherersEasy'", "'ResourceGatherersNormal'", "'ResourceGatherersHard'", 
		"'BaseDefenseStructure1'", "'SkillSet1'", "'SkillSet2'", "'SkillSet3'", 
		"'SkillSet4'", "'SkillSet5'", "'MappedImage'", "'Texture'", "'TextureWidth'", 
		"'TextureHeight'", "'Coords'", "'Status'", "'ROTATED_90_CLOCKWISE'", "'Animation'", 
		"'AnimationMode'", "'AnimationDelay'", "'RandomizeStartFrame'", "'NumberImages'", 
		"'Image'", "'Armor'", "'CommandButton'", "'CommandSet'", "'end'", "'End'", 
		"'END'", "'.'", "'tga'", "'dds'", "'Command'", "'PLACE_BEACON'", "'SPECIAL_POWER'", 
		"'SPECIAL_POWER_FROM_SHORTCUT'", "'PURCHASE_SCIENCE'", "'FIRE_WEAPON'", 
		"'OBJECT_UPGRADE'", "'SWITCH_WEAPON'", "'SET_RALLY_POINT'", "'SELL'", 
		"'TOGGLE_OVERCHARGE'", "'CANCEL_UPGRADE'", "'PLAYER_UPGRADE'", "'EXIT_CONTAINER'", 
		"'EVACUATE'", "'EXECUTE_RAILED_TRANSPORT'", "'COMBATDROP'", "'GUARD'", 
		"'GUARD_WITHOUT_PURSUIT'", "'GUARD_FLYING_UNITS_ONLY'", "'ATTACK_MOVE'", 
		"'STOP'", "'CONVERT_TO_CARBOMB'", "'SABOTAGE_BUILDING'", "'HIJACK_VEHICLE'", 
		"'HACK_INTERNET'", "'DOZER_CONSTRUCT_CANCEL'", "'DOZER_CONSTRUCT'", "'UNIT_BUILD'", 
		"'Options'", "'NEED_TARGET_POS'", "'NEED_SPECIAL_POWER_SCIENCE'", "'CONTEXTMODE_COMMAND'", 
		"'SCRIPT_ONLY'", "'CAN_USE_WAYPOINTS'", "'NEED_TARGET_NEUTRAL_OBJECT'", 
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
		"'GLAStealthGeneral'", "'GLAToxinGeneral'", undefined, undefined, undefined, 
		"'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"INT", "FLOAT", "PROCENT", "EQ", "WEAPONSLOT", "XCOORD", "YCOORD", "COORDLEFT", 
		"COORDTOP", "COORDRIGHT", "COORDBOTTOM", "A2D_ANIMATION_MODE", "ARMOR_TYPE", 
		"MANUAL", "BOOLEAN", "NVALUE", "ID", "SKIp", "COMMENT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(MapIniParser._LITERAL_NAMES, MapIniParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return MapIniParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "MapIni.g4"; }

	// @Override
	public get ruleNames(): string[] { return MapIniParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return MapIniParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(MapIniParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, MapIniParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 107;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.T__0 || ((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & ((1 << (MapIniParser.T__60 - 61)) | (1 << (MapIniParser.T__67 - 61)) | (1 << (MapIniParser.T__73 - 61)) | (1 << (MapIniParser.T__74 - 61)) | (1 << (MapIniParser.T__75 - 61)))) !== 0)) {
				{
				{
				this.state = 104;
				this.classes();
				}
				}
				this.state = 109;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 110;
			this.match(MapIniParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classes(): ClassesContext {
		let _localctx: ClassesContext = new ClassesContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, MapIniParser.RULE_classes);
		try {
			this.state = 118;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapIniParser.T__60:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 112;
				this.mappedImageClass();
				}
				break;
			case MapIniParser.T__0:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 113;
				this.aiDataClass();
				}
				break;
			case MapIniParser.T__67:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 114;
				this.animation2DClass();
				}
				break;
			case MapIniParser.T__73:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 115;
				this.armorClass();
				}
				break;
			case MapIniParser.T__74:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 116;
				this.commandButtonClass();
				}
				break;
			case MapIniParser.T__75:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 117;
				this.commandSetClass();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aiDataClass(): AiDataClassContext {
		let _localctx: AiDataClassContext = new AiDataClassContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, MapIniParser.RULE_aiDataClass);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 120;
			this.match(MapIniParser.T__0);
			this.state = 126;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MapIniParser.T__1) | (1 << MapIniParser.T__2) | (1 << MapIniParser.T__3) | (1 << MapIniParser.T__4) | (1 << MapIniParser.T__5) | (1 << MapIniParser.T__6) | (1 << MapIniParser.T__7) | (1 << MapIniParser.T__8) | (1 << MapIniParser.T__9) | (1 << MapIniParser.T__10) | (1 << MapIniParser.T__11) | (1 << MapIniParser.T__12) | (1 << MapIniParser.T__13) | (1 << MapIniParser.T__14) | (1 << MapIniParser.T__15) | (1 << MapIniParser.T__16) | (1 << MapIniParser.T__17) | (1 << MapIniParser.T__18) | (1 << MapIniParser.T__19) | (1 << MapIniParser.T__20) | (1 << MapIniParser.T__21) | (1 << MapIniParser.T__22) | (1 << MapIniParser.T__23) | (1 << MapIniParser.T__24) | (1 << MapIniParser.T__25) | (1 << MapIniParser.T__26) | (1 << MapIniParser.T__27) | (1 << MapIniParser.T__28) | (1 << MapIniParser.T__29) | (1 << MapIniParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (MapIniParser.T__31 - 32)) | (1 << (MapIniParser.T__32 - 32)) | (1 << (MapIniParser.T__33 - 32)) | (1 << (MapIniParser.T__34 - 32)) | (1 << (MapIniParser.T__35 - 32)) | (1 << (MapIniParser.T__36 - 32)) | (1 << (MapIniParser.T__37 - 32)) | (1 << (MapIniParser.T__38 - 32)) | (1 << (MapIniParser.T__39 - 32)) | (1 << (MapIniParser.T__40 - 32)) | (1 << (MapIniParser.T__41 - 32)) | (1 << (MapIniParser.T__42 - 32)) | (1 << (MapIniParser.T__43 - 32)) | (1 << (MapIniParser.T__50 - 32)))) !== 0)) {
				{
				this.state = 124;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case MapIniParser.T__1:
				case MapIniParser.T__2:
				case MapIniParser.T__3:
				case MapIniParser.T__4:
				case MapIniParser.T__5:
				case MapIniParser.T__6:
				case MapIniParser.T__7:
				case MapIniParser.T__8:
				case MapIniParser.T__9:
				case MapIniParser.T__10:
				case MapIniParser.T__11:
				case MapIniParser.T__12:
				case MapIniParser.T__13:
				case MapIniParser.T__14:
				case MapIniParser.T__15:
				case MapIniParser.T__16:
				case MapIniParser.T__17:
				case MapIniParser.T__18:
				case MapIniParser.T__19:
				case MapIniParser.T__20:
				case MapIniParser.T__21:
				case MapIniParser.T__22:
				case MapIniParser.T__23:
				case MapIniParser.T__24:
				case MapIniParser.T__25:
				case MapIniParser.T__26:
				case MapIniParser.T__27:
				case MapIniParser.T__28:
				case MapIniParser.T__29:
				case MapIniParser.T__30:
				case MapIniParser.T__31:
				case MapIniParser.T__32:
				case MapIniParser.T__33:
				case MapIniParser.T__34:
				case MapIniParser.T__35:
				case MapIniParser.T__36:
				case MapIniParser.T__37:
				case MapIniParser.T__38:
				case MapIniParser.T__39:
				case MapIniParser.T__40:
				case MapIniParser.T__41:
				case MapIniParser.T__42:
					{
					this.state = 121;
					this.aidataClassProperties_single();
					}
					break;
				case MapIniParser.T__50:
					{
					this.state = 122;
					this.aidataClassProperties_blockSideinfo();
					}
					break;
				case MapIniParser.T__43:
					{
					this.state = 123;
					this.aidataClassproperties_BlockSkirmishBuildList();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 128;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 129;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aidataClassProperties_single(): AidataClassProperties_singleContext {
		let _localctx: AidataClassProperties_singleContext = new AidataClassProperties_singleContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, MapIniParser.RULE_aidataClassProperties_single);
		try {
			this.state = 257;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapIniParser.T__1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 131;
				this.match(MapIniParser.T__1);
				this.state = 132;
				this.match(MapIniParser.EQ);
				this.state = 133;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 134;
				this.match(MapIniParser.T__2);
				this.state = 135;
				this.match(MapIniParser.EQ);
				this.state = 136;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 137;
				this.match(MapIniParser.T__3);
				this.state = 138;
				this.match(MapIniParser.EQ);
				this.state = 139;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 140;
				this.match(MapIniParser.T__4);
				this.state = 141;
				this.match(MapIniParser.EQ);
				this.state = 142;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 143;
				this.match(MapIniParser.T__5);
				this.state = 144;
				this.match(MapIniParser.EQ);
				this.state = 145;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 146;
				this.match(MapIniParser.T__6);
				this.state = 147;
				this.match(MapIniParser.EQ);
				this.state = 148;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 149;
				this.match(MapIniParser.T__7);
				this.state = 150;
				this.match(MapIniParser.EQ);
				this.state = 151;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 152;
				this.match(MapIniParser.T__8);
				this.state = 153;
				this.match(MapIniParser.EQ);
				this.state = 154;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 155;
				this.match(MapIniParser.T__9);
				this.state = 156;
				this.match(MapIniParser.EQ);
				this.state = 157;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 158;
				this.match(MapIniParser.T__10);
				this.state = 159;
				this.match(MapIniParser.EQ);
				this.state = 160;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 161;
				this.match(MapIniParser.T__11);
				this.state = 162;
				this.match(MapIniParser.EQ);
				this.state = 163;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 164;
				this.match(MapIniParser.T__12);
				this.state = 165;
				this.match(MapIniParser.EQ);
				this.state = 166;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 167;
				this.match(MapIniParser.T__13);
				this.state = 168;
				this.match(MapIniParser.EQ);
				this.state = 169;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 170;
				this.match(MapIniParser.T__14);
				this.state = 171;
				this.match(MapIniParser.EQ);
				this.state = 172;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 173;
				this.match(MapIniParser.T__15);
				this.state = 174;
				this.match(MapIniParser.EQ);
				this.state = 175;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 176;
				this.match(MapIniParser.T__16);
				this.state = 177;
				this.match(MapIniParser.EQ);
				this.state = 178;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 179;
				this.match(MapIniParser.T__17);
				this.state = 180;
				this.match(MapIniParser.EQ);
				this.state = 181;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 182;
				this.match(MapIniParser.T__18);
				this.state = 183;
				this.match(MapIniParser.EQ);
				this.state = 184;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 185;
				this.match(MapIniParser.T__19);
				this.state = 186;
				this.match(MapIniParser.EQ);
				this.state = 187;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 188;
				this.match(MapIniParser.T__20);
				this.state = 189;
				this.match(MapIniParser.EQ);
				this.state = 190;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 191;
				this.match(MapIniParser.T__21);
				this.state = 192;
				this.match(MapIniParser.EQ);
				this.state = 193;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 194;
				this.match(MapIniParser.T__22);
				this.state = 195;
				this.match(MapIniParser.EQ);
				this.state = 196;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 197;
				this.match(MapIniParser.T__23);
				this.state = 198;
				this.match(MapIniParser.EQ);
				this.state = 199;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__24:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 200;
				this.match(MapIniParser.T__24);
				this.state = 201;
				this.match(MapIniParser.EQ);
				this.state = 202;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__25:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 203;
				this.match(MapIniParser.T__25);
				this.state = 204;
				this.match(MapIniParser.EQ);
				this.state = 205;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__26:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 206;
				this.match(MapIniParser.T__26);
				this.state = 207;
				this.match(MapIniParser.EQ);
				this.state = 208;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__27:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 209;
				this.match(MapIniParser.T__27);
				this.state = 210;
				this.match(MapIniParser.EQ);
				this.state = 211;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__28:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 212;
				this.match(MapIniParser.T__28);
				this.state = 213;
				this.match(MapIniParser.EQ);
				this.state = 214;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__29:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 215;
				this.match(MapIniParser.T__29);
				this.state = 216;
				this.match(MapIniParser.EQ);
				this.state = 217;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__30:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 218;
				this.match(MapIniParser.T__30);
				this.state = 219;
				this.match(MapIniParser.EQ);
				this.state = 220;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__31:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 221;
				this.match(MapIniParser.T__31);
				this.state = 222;
				this.match(MapIniParser.EQ);
				this.state = 223;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__32:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 224;
				this.match(MapIniParser.T__32);
				this.state = 225;
				this.match(MapIniParser.EQ);
				this.state = 226;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__33:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 227;
				this.match(MapIniParser.T__33);
				this.state = 228;
				this.match(MapIniParser.EQ);
				this.state = 229;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__34:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 230;
				this.match(MapIniParser.T__34);
				this.state = 231;
				this.match(MapIniParser.EQ);
				this.state = 232;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__35:
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 233;
				this.match(MapIniParser.T__35);
				this.state = 234;
				this.match(MapIniParser.EQ);
				this.state = 235;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__36:
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 236;
				this.match(MapIniParser.T__36);
				this.state = 237;
				this.match(MapIniParser.EQ);
				this.state = 238;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__37:
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 239;
				this.match(MapIniParser.T__37);
				this.state = 240;
				this.match(MapIniParser.EQ);
				this.state = 241;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__38:
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 242;
				this.match(MapIniParser.T__38);
				this.state = 243;
				this.match(MapIniParser.EQ);
				this.state = 244;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__39:
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 245;
				this.match(MapIniParser.T__39);
				this.state = 246;
				this.match(MapIniParser.EQ);
				this.state = 247;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__40:
				this.enterOuterAlt(_localctx, 40);
				{
				this.state = 248;
				this.match(MapIniParser.T__40);
				this.state = 249;
				this.match(MapIniParser.EQ);
				this.state = 250;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__41:
				this.enterOuterAlt(_localctx, 41);
				{
				this.state = 251;
				this.match(MapIniParser.T__41);
				this.state = 252;
				this.match(MapIniParser.EQ);
				this.state = 253;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__42:
				this.enterOuterAlt(_localctx, 42);
				{
				this.state = 254;
				this.match(MapIniParser.T__42);
				this.state = 255;
				this.match(MapIniParser.EQ);
				this.state = 256;
				this.match(MapIniParser.FLOAT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aidataClassproperties_BlockSkirmishBuildList(): AidataClassproperties_BlockSkirmishBuildListContext {
		let _localctx: AidataClassproperties_BlockSkirmishBuildListContext = new AidataClassproperties_BlockSkirmishBuildListContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, MapIniParser.RULE_aidataClassproperties_BlockSkirmishBuildList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 259;
			this.match(MapIniParser.T__43);
			this.state = 260;
			this.faction();
			this.state = 264;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.T__44) {
				{
				{
				this.state = 261;
				this.skirmishBuildListBlock();
				}
				}
				this.state = 266;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 267;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public skirmishBuildListBlock(): SkirmishBuildListBlockContext {
		let _localctx: SkirmishBuildListBlockContext = new SkirmishBuildListBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, MapIniParser.RULE_skirmishBuildListBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 269;
			this.match(MapIniParser.T__44);
			this.state = 270;
			this.object_value();
			this.state = 274;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (MapIniParser.T__45 - 46)) | (1 << (MapIniParser.T__46 - 46)) | (1 << (MapIniParser.T__47 - 46)) | (1 << (MapIniParser.T__48 - 46)) | (1 << (MapIniParser.T__49 - 46)))) !== 0)) {
				{
				{
				this.state = 271;
				this.skirmishBuildListBlock_structure_properties();
				}
				}
				this.state = 276;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 277;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public skirmishBuildListBlock_structure_properties(): SkirmishBuildListBlock_structure_propertiesContext {
		let _localctx: SkirmishBuildListBlock_structure_propertiesContext = new SkirmishBuildListBlock_structure_propertiesContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, MapIniParser.RULE_skirmishBuildListBlock_structure_properties);
		try {
			this.state = 295;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapIniParser.T__45:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 279;
				this.match(MapIniParser.T__45);
				this.state = 280;
				this.match(MapIniParser.EQ);
				this.state = 281;
				this.match(MapIniParser.XCOORD);
				this.state = 282;
				this.match(MapIniParser.YCOORD);
				}
				break;
			case MapIniParser.T__46:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 283;
				this.match(MapIniParser.T__46);
				this.state = 284;
				this.match(MapIniParser.EQ);
				this.state = 285;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__47:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 286;
				this.match(MapIniParser.T__47);
				this.state = 287;
				this.match(MapIniParser.EQ);
				this.state = 288;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__48:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 289;
				this.match(MapIniParser.T__48);
				this.state = 290;
				this.match(MapIniParser.EQ);
				this.state = 291;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__49:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 292;
				this.match(MapIniParser.T__49);
				this.state = 293;
				this.match(MapIniParser.EQ);
				this.state = 294;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aidataClassProperties_blockSideinfo(): AidataClassProperties_blockSideinfoContext {
		let _localctx: AidataClassProperties_blockSideinfoContext = new AidataClassProperties_blockSideinfoContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, MapIniParser.RULE_aidataClassProperties_blockSideinfo);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 297;
			this.match(MapIniParser.T__50);
			this.state = 298;
			this.faction();
			this.state = 302;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (MapIniParser.T__51 - 52)) | (1 << (MapIniParser.T__52 - 52)) | (1 << (MapIniParser.T__53 - 52)) | (1 << (MapIniParser.T__54 - 52)) | (1 << (MapIniParser.T__55 - 52)) | (1 << (MapIniParser.T__56 - 52)) | (1 << (MapIniParser.T__57 - 52)) | (1 << (MapIniParser.T__58 - 52)) | (1 << (MapIniParser.T__59 - 52)))) !== 0)) {
				{
				{
				this.state = 299;
				this.sideinfoproperties();
				}
				}
				this.state = 304;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 305;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sideinfoproperties(): SideinfopropertiesContext {
		let _localctx: SideinfopropertiesContext = new SideinfopropertiesContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, MapIniParser.RULE_sideinfoproperties);
		try {
			this.state = 320;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapIniParser.T__51:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 307;
				this.match(MapIniParser.T__51);
				this.state = 308;
				this.match(MapIniParser.EQ);
				this.state = 309;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__52:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 310;
				this.match(MapIniParser.T__52);
				this.state = 311;
				this.match(MapIniParser.EQ);
				this.state = 312;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__53:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 313;
				this.match(MapIniParser.T__53);
				this.state = 314;
				this.match(MapIniParser.EQ);
				this.state = 315;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__54:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 316;
				this.match(MapIniParser.T__54);
				this.state = 317;
				this.match(MapIniParser.EQ);
				this.state = 318;
				this.object_value();
				}
				break;
			case MapIniParser.T__55:
			case MapIniParser.T__56:
			case MapIniParser.T__57:
			case MapIniParser.T__58:
			case MapIniParser.T__59:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 319;
				this.sideinfo_skillset_blocks();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sideinfo_skillset_blocks(): Sideinfo_skillset_blocksContext {
		let _localctx: Sideinfo_skillset_blocksContext = new Sideinfo_skillset_blocksContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, MapIniParser.RULE_sideinfo_skillset_blocks);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 322;
			_la = this._input.LA(1);
			if (!(((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (MapIniParser.T__55 - 56)) | (1 << (MapIniParser.T__56 - 56)) | (1 << (MapIniParser.T__57 - 56)) | (1 << (MapIniParser.T__58 - 56)) | (1 << (MapIniParser.T__59 - 56)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 326;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.T__144) {
				{
				{
				this.state = 323;
				this.science_property();
				}
				}
				this.state = 328;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 329;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mappedImageClass(): MappedImageClassContext {
		let _localctx: MappedImageClassContext = new MappedImageClassContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, MapIniParser.RULE_mappedImageClass);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 331;
			this.match(MapIniParser.T__60);
			this.state = 332;
			this.match(MapIniParser.ID);
			this.state = 336;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (MapIniParser.T__61 - 62)) | (1 << (MapIniParser.T__62 - 62)) | (1 << (MapIniParser.T__63 - 62)) | (1 << (MapIniParser.T__64 - 62)) | (1 << (MapIniParser.T__65 - 62)))) !== 0)) {
				{
				{
				this.state = 333;
				this.mappedImageClassProperties();
				}
				}
				this.state = 338;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 339;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mappedImageClassProperties(): MappedImageClassPropertiesContext {
		let _localctx: MappedImageClassPropertiesContext = new MappedImageClassPropertiesContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, MapIniParser.RULE_mappedImageClassProperties);
		let _la: number;
		try {
			this.state = 362;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapIniParser.T__61:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 341;
				this.match(MapIniParser.T__61);
				this.state = 342;
				this.match(MapIniParser.EQ);
				this.state = 345;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case MapIniParser.NVALUE:
					{
					this.state = 343;
					this.match(MapIniParser.NVALUE);
					}
					break;
				case MapIniParser.ID:
					{
					this.state = 344;
					this.file();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case MapIniParser.T__62:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 347;
				this.match(MapIniParser.T__62);
				this.state = 348;
				this.match(MapIniParser.EQ);
				this.state = 349;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__63:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 350;
				this.match(MapIniParser.T__63);
				this.state = 351;
				this.match(MapIniParser.EQ);
				this.state = 352;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__64:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 353;
				this.match(MapIniParser.T__64);
				this.state = 354;
				this.match(MapIniParser.EQ);
				this.state = 355;
				this.match(MapIniParser.COORDLEFT);
				this.state = 356;
				this.match(MapIniParser.COORDTOP);
				this.state = 357;
				this.match(MapIniParser.COORDRIGHT);
				this.state = 358;
				this.match(MapIniParser.COORDBOTTOM);
				}
				break;
			case MapIniParser.T__65:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 359;
				this.match(MapIniParser.T__65);
				this.state = 360;
				this.match(MapIniParser.EQ);
				this.state = 361;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.T__66 || _la === MapIniParser.NVALUE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public animation2DClass(): Animation2DClassContext {
		let _localctx: Animation2DClassContext = new Animation2DClassContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, MapIniParser.RULE_animation2DClass);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 364;
			this.match(MapIniParser.T__67);
			this.state = 365;
			this.match(MapIniParser.ID);
			this.state = 369;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (MapIniParser.T__68 - 69)) | (1 << (MapIniParser.T__69 - 69)) | (1 << (MapIniParser.T__70 - 69)) | (1 << (MapIniParser.T__71 - 69)) | (1 << (MapIniParser.T__72 - 69)))) !== 0)) {
				{
				{
				this.state = 366;
				this.animation2DClassProperties();
				}
				}
				this.state = 371;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 372;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public animation2DClassProperties(): Animation2DClassPropertiesContext {
		let _localctx: Animation2DClassPropertiesContext = new Animation2DClassPropertiesContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, MapIniParser.RULE_animation2DClassProperties);
		try {
			this.state = 389;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapIniParser.T__68:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 374;
				this.match(MapIniParser.T__68);
				this.state = 375;
				this.match(MapIniParser.EQ);
				this.state = 376;
				this.match(MapIniParser.A2D_ANIMATION_MODE);
				}
				break;
			case MapIniParser.T__69:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 377;
				this.match(MapIniParser.T__69);
				this.state = 378;
				this.match(MapIniParser.EQ);
				this.state = 379;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__70:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 380;
				this.match(MapIniParser.T__70);
				this.state = 381;
				this.match(MapIniParser.EQ);
				this.state = 382;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__71:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 383;
				this.match(MapIniParser.T__71);
				this.state = 384;
				this.match(MapIniParser.EQ);
				this.state = 385;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__72:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 386;
				this.match(MapIniParser.T__72);
				this.state = 387;
				this.match(MapIniParser.EQ);
				this.state = 388;
				this.match(MapIniParser.ID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public armorClass(): ArmorClassContext {
		let _localctx: ArmorClassContext = new ArmorClassContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, MapIniParser.RULE_armorClass);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 391;
			this.match(MapIniParser.T__73);
			this.state = 392;
			this.match(MapIniParser.ID);
			this.state = 396;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.T__73) {
				{
				{
				this.state = 393;
				this.armorClassProperties();
				}
				}
				this.state = 398;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 399;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public armorClassProperties(): ArmorClassPropertiesContext {
		let _localctx: ArmorClassPropertiesContext = new ArmorClassPropertiesContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, MapIniParser.RULE_armorClassProperties);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 401;
			this.match(MapIniParser.T__73);
			this.state = 402;
			this.match(MapIniParser.EQ);
			this.state = 403;
			this.match(MapIniParser.ARMOR_TYPE);
			this.state = 404;
			this.match(MapIniParser.PROCENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public commandButtonClass(): CommandButtonClassContext {
		let _localctx: CommandButtonClassContext = new CommandButtonClassContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, MapIniParser.RULE_commandButtonClass);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 406;
			this.match(MapIniParser.T__74);
			this.state = 407;
			this.match(MapIniParser.ID);
			this.state = 411;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.T__82 || _la === MapIniParser.T__111 || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (MapIniParser.T__130 - 131)) | (1 << (MapIniParser.T__131 - 131)) | (1 << (MapIniParser.T__136 - 131)) | (1 << (MapIniParser.T__137 - 131)) | (1 << (MapIniParser.T__138 - 131)) | (1 << (MapIniParser.T__139 - 131)) | (1 << (MapIniParser.T__140 - 131)) | (1 << (MapIniParser.T__141 - 131)) | (1 << (MapIniParser.T__142 - 131)) | (1 << (MapIniParser.T__143 - 131)) | (1 << (MapIniParser.T__144 - 131)) | (1 << (MapIniParser.T__145 - 131)) | (1 << (MapIniParser.T__146 - 131)) | (1 << (MapIniParser.T__147 - 131)))) !== 0)) {
				{
				{
				this.state = 408;
				this.commandButtonClassProperties();
				}
				}
				this.state = 413;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 414;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public commandButtonClassProperties(): CommandButtonClassPropertiesContext {
		let _localctx: CommandButtonClassPropertiesContext = new CommandButtonClassPropertiesContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, MapIniParser.RULE_commandButtonClassProperties);
		try {
			this.state = 432;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapIniParser.T__82:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 416;
				this.cb_command_property();
				}
				break;
			case MapIniParser.T__111:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 417;
				this.cb_options_property();
				}
				break;
			case MapIniParser.T__130:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 418;
				this.cb_buttonimage_property();
				}
				break;
			case MapIniParser.T__131:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 419;
				this.cb_buttonbordertype_property();
				}
				break;
			case MapIniParser.T__136:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 420;
				this.cb_textlabel_property();
				}
				break;
			case MapIniParser.T__137:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 421;
				this.cb_descriptionlabel_property();
				}
				break;
			case MapIniParser.T__138:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 422;
				this.cb_conflictinglabel_property();
				}
				break;
			case MapIniParser.T__139:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 423;
				this.cb_cursorname_propery();
				}
				break;
			case MapIniParser.T__140:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 424;
				this.cb_radius_cursorname_value();
				}
				break;
			case MapIniParser.T__141:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 425;
				this.cb_invalid_cursorname_propery();
				}
				break;
			case MapIniParser.T__142:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 426;
				this.cb_unitspecificsound_property();
				}
				break;
			case MapIniParser.T__143:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 427;
				this.object_property();
				}
				break;
			case MapIniParser.T__144:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 428;
				this.science_property();
				}
				break;
			case MapIniParser.T__145:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 429;
				this.specialpower_property();
				}
				break;
			case MapIniParser.T__146:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 430;
				this.upgrade_property();
				}
				break;
			case MapIniParser.T__147:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 431;
				this.weaponslot_property();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public commandSetClass(): CommandSetClassContext {
		let _localctx: CommandSetClassContext = new CommandSetClassContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, MapIniParser.RULE_commandSetClass);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 434;
			this.match(MapIniParser.T__75);
			this.state = 435;
			this.match(MapIniParser.ID);
			this.state = 439;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.INT) {
				{
				{
				this.state = 436;
				this.commandSetClassProperty();
				}
				}
				this.state = 441;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 442;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public commandSetClassProperty(): CommandSetClassPropertyContext {
		let _localctx: CommandSetClassPropertyContext = new CommandSetClassPropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, MapIniParser.RULE_commandSetClassProperty);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 444;
			this.match(MapIniParser.INT);
			this.state = 445;
			this.match(MapIniParser.EQ);
			this.state = 446;
			this.commandbutton_value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public end(): EndContext {
		let _localctx: EndContext = new EndContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, MapIniParser.RULE_end);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 448;
			_la = this._input.LA(1);
			if (!(((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (MapIniParser.T__76 - 77)) | (1 << (MapIniParser.T__77 - 77)) | (1 << (MapIniParser.T__78 - 77)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public file(): FileContext {
		let _localctx: FileContext = new FileContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, MapIniParser.RULE_file);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 450;
			this.match(MapIniParser.ID);
			this.state = 451;
			this.match(MapIniParser.T__79);
			this.state = 452;
			_la = this._input.LA(1);
			if (!(_la === MapIniParser.T__80 || _la === MapIniParser.T__81)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cb_command_property(): Cb_command_propertyContext {
		let _localctx: Cb_command_propertyContext = new Cb_command_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, MapIniParser.RULE_cb_command_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 454;
			this.match(MapIniParser.T__82);
			this.state = 455;
			this.match(MapIniParser.EQ);
			this.state = 456;
			this.cb_command_value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cb_command_value(): Cb_command_valueContext {
		let _localctx: Cb_command_valueContext = new Cb_command_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, MapIniParser.RULE_cb_command_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 458;
			_la = this._input.LA(1);
			if (!(((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & ((1 << (MapIniParser.T__83 - 84)) | (1 << (MapIniParser.T__84 - 84)) | (1 << (MapIniParser.T__85 - 84)) | (1 << (MapIniParser.T__86 - 84)) | (1 << (MapIniParser.T__87 - 84)) | (1 << (MapIniParser.T__88 - 84)) | (1 << (MapIniParser.T__89 - 84)) | (1 << (MapIniParser.T__90 - 84)) | (1 << (MapIniParser.T__91 - 84)) | (1 << (MapIniParser.T__92 - 84)) | (1 << (MapIniParser.T__93 - 84)) | (1 << (MapIniParser.T__94 - 84)) | (1 << (MapIniParser.T__95 - 84)) | (1 << (MapIniParser.T__96 - 84)) | (1 << (MapIniParser.T__97 - 84)) | (1 << (MapIniParser.T__98 - 84)) | (1 << (MapIniParser.T__99 - 84)) | (1 << (MapIniParser.T__100 - 84)) | (1 << (MapIniParser.T__101 - 84)) | (1 << (MapIniParser.T__102 - 84)) | (1 << (MapIniParser.T__103 - 84)) | (1 << (MapIniParser.T__104 - 84)) | (1 << (MapIniParser.T__105 - 84)) | (1 << (MapIniParser.T__106 - 84)) | (1 << (MapIniParser.T__107 - 84)) | (1 << (MapIniParser.T__108 - 84)) | (1 << (MapIniParser.T__109 - 84)) | (1 << (MapIniParser.T__110 - 84)))) !== 0) || _la === MapIniParser.NVALUE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cb_options_property(): Cb_options_propertyContext {
		let _localctx: Cb_options_propertyContext = new Cb_options_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, MapIniParser.RULE_cb_options_property);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 460;
			this.match(MapIniParser.T__111);
			this.state = 461;
			this.match(MapIniParser.EQ);
			this.state = 463;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 462;
				this.cb_options_value();
				}
				}
				this.state = 465;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (MapIniParser.T__112 - 113)) | (1 << (MapIniParser.T__113 - 113)) | (1 << (MapIniParser.T__114 - 113)) | (1 << (MapIniParser.T__115 - 113)) | (1 << (MapIniParser.T__116 - 113)) | (1 << (MapIniParser.T__117 - 113)) | (1 << (MapIniParser.T__118 - 113)) | (1 << (MapIniParser.T__119 - 113)) | (1 << (MapIniParser.T__120 - 113)) | (1 << (MapIniParser.T__121 - 113)) | (1 << (MapIniParser.T__122 - 113)) | (1 << (MapIniParser.T__123 - 113)) | (1 << (MapIniParser.T__124 - 113)) | (1 << (MapIniParser.T__125 - 113)) | (1 << (MapIniParser.T__126 - 113)) | (1 << (MapIniParser.T__127 - 113)) | (1 << (MapIniParser.T__128 - 113)) | (1 << (MapIniParser.T__129 - 113)))) !== 0) || _la === MapIniParser.NVALUE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cb_options_value(): Cb_options_valueContext {
		let _localctx: Cb_options_valueContext = new Cb_options_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, MapIniParser.RULE_cb_options_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 467;
			_la = this._input.LA(1);
			if (!(((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (MapIniParser.T__112 - 113)) | (1 << (MapIniParser.T__113 - 113)) | (1 << (MapIniParser.T__114 - 113)) | (1 << (MapIniParser.T__115 - 113)) | (1 << (MapIniParser.T__116 - 113)) | (1 << (MapIniParser.T__117 - 113)) | (1 << (MapIniParser.T__118 - 113)) | (1 << (MapIniParser.T__119 - 113)) | (1 << (MapIniParser.T__120 - 113)) | (1 << (MapIniParser.T__121 - 113)) | (1 << (MapIniParser.T__122 - 113)) | (1 << (MapIniParser.T__123 - 113)) | (1 << (MapIniParser.T__124 - 113)) | (1 << (MapIniParser.T__125 - 113)) | (1 << (MapIniParser.T__126 - 113)) | (1 << (MapIniParser.T__127 - 113)) | (1 << (MapIniParser.T__128 - 113)) | (1 << (MapIniParser.T__129 - 113)))) !== 0) || _la === MapIniParser.NVALUE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cb_buttonimage_property(): Cb_buttonimage_propertyContext {
		let _localctx: Cb_buttonimage_propertyContext = new Cb_buttonimage_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, MapIniParser.RULE_cb_buttonimage_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 469;
			this.match(MapIniParser.T__130);
			this.state = 470;
			this.match(MapIniParser.EQ);
			this.state = 471;
			this.mappedimage_value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cb_buttonbordertype_property(): Cb_buttonbordertype_propertyContext {
		let _localctx: Cb_buttonbordertype_propertyContext = new Cb_buttonbordertype_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, MapIniParser.RULE_cb_buttonbordertype_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 473;
			this.match(MapIniParser.T__131);
			this.state = 474;
			this.match(MapIniParser.EQ);
			this.state = 475;
			this.cb_buttonbordertype_value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cb_buttonbordertype_value(): Cb_buttonbordertype_valueContext {
		let _localctx: Cb_buttonbordertype_valueContext = new Cb_buttonbordertype_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, MapIniParser.RULE_cb_buttonbordertype_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 477;
			_la = this._input.LA(1);
			if (!(((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (MapIniParser.T__132 - 133)) | (1 << (MapIniParser.T__133 - 133)) | (1 << (MapIniParser.T__134 - 133)) | (1 << (MapIniParser.T__135 - 133)))) !== 0) || _la === MapIniParser.NVALUE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cb_textlabel_property(): Cb_textlabel_propertyContext {
		let _localctx: Cb_textlabel_propertyContext = new Cb_textlabel_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, MapIniParser.RULE_cb_textlabel_property);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 479;
			this.match(MapIniParser.T__136);
			this.state = 480;
			this.match(MapIniParser.EQ);
			this.state = 481;
			_la = this._input.LA(1);
			if (!(_la === MapIniParser.NVALUE || _la === MapIniParser.ID)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cb_descriptionlabel_property(): Cb_descriptionlabel_propertyContext {
		let _localctx: Cb_descriptionlabel_propertyContext = new Cb_descriptionlabel_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, MapIniParser.RULE_cb_descriptionlabel_property);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 483;
			this.match(MapIniParser.T__137);
			this.state = 484;
			this.match(MapIniParser.EQ);
			this.state = 485;
			_la = this._input.LA(1);
			if (!(_la === MapIniParser.NVALUE || _la === MapIniParser.ID)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cb_conflictinglabel_property(): Cb_conflictinglabel_propertyContext {
		let _localctx: Cb_conflictinglabel_propertyContext = new Cb_conflictinglabel_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, MapIniParser.RULE_cb_conflictinglabel_property);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 487;
			this.match(MapIniParser.T__138);
			this.state = 488;
			this.match(MapIniParser.EQ);
			this.state = 489;
			_la = this._input.LA(1);
			if (!(_la === MapIniParser.NVALUE || _la === MapIniParser.ID)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cb_cursorname_propery(): Cb_cursorname_properyContext {
		let _localctx: Cb_cursorname_properyContext = new Cb_cursorname_properyContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, MapIniParser.RULE_cb_cursorname_propery);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 491;
			this.match(MapIniParser.T__139);
			this.state = 492;
			this.match(MapIniParser.EQ);
			this.state = 493;
			this.cursorname_value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cb_radius_cursorname_value(): Cb_radius_cursorname_valueContext {
		let _localctx: Cb_radius_cursorname_valueContext = new Cb_radius_cursorname_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, MapIniParser.RULE_cb_radius_cursorname_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 495;
			this.match(MapIniParser.T__140);
			this.state = 496;
			this.match(MapIniParser.EQ);
			this.state = 497;
			this.radius_cursorname_value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cb_invalid_cursorname_propery(): Cb_invalid_cursorname_properyContext {
		let _localctx: Cb_invalid_cursorname_properyContext = new Cb_invalid_cursorname_properyContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, MapIniParser.RULE_cb_invalid_cursorname_propery);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 499;
			this.match(MapIniParser.T__141);
			this.state = 500;
			this.match(MapIniParser.EQ);
			this.state = 501;
			this.invalid_cursorname_value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cb_unitspecificsound_property(): Cb_unitspecificsound_propertyContext {
		let _localctx: Cb_unitspecificsound_propertyContext = new Cb_unitspecificsound_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, MapIniParser.RULE_cb_unitspecificsound_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 503;
			this.match(MapIniParser.T__142);
			this.state = 504;
			this.match(MapIniParser.EQ);
			this.state = 505;
			this.audioevent_value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public commandbutton_value(): Commandbutton_valueContext {
		let _localctx: Commandbutton_valueContext = new Commandbutton_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, MapIniParser.RULE_commandbutton_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 507;
			_la = this._input.LA(1);
			if (!(_la === MapIniParser.NVALUE || _la === MapIniParser.ID)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cursorname_value(): Cursorname_valueContext {
		let _localctx: Cursorname_valueContext = new Cursorname_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, MapIniParser.RULE_cursorname_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 509;
			_la = this._input.LA(1);
			if (!(_la === MapIniParser.NVALUE || _la === MapIniParser.ID)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public radius_cursorname_value(): Radius_cursorname_valueContext {
		let _localctx: Radius_cursorname_valueContext = new Radius_cursorname_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, MapIniParser.RULE_radius_cursorname_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 511;
			this.match(MapIniParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public invalid_cursorname_value(): Invalid_cursorname_valueContext {
		let _localctx: Invalid_cursorname_valueContext = new Invalid_cursorname_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, MapIniParser.RULE_invalid_cursorname_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 513;
			_la = this._input.LA(1);
			if (!(_la === MapIniParser.NVALUE || _la === MapIniParser.ID)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mappedimage_value(): Mappedimage_valueContext {
		let _localctx: Mappedimage_valueContext = new Mappedimage_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, MapIniParser.RULE_mappedimage_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 515;
			_la = this._input.LA(1);
			if (!(_la === MapIniParser.NVALUE || _la === MapIniParser.ID)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public object_property(): Object_propertyContext {
		let _localctx: Object_propertyContext = new Object_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, MapIniParser.RULE_object_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 517;
			this.match(MapIniParser.T__143);
			this.state = 518;
			this.match(MapIniParser.EQ);
			this.state = 519;
			this.object_value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public object_value(): Object_valueContext {
		let _localctx: Object_valueContext = new Object_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, MapIniParser.RULE_object_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 521;
			_la = this._input.LA(1);
			if (!(_la === MapIniParser.NVALUE || _la === MapIniParser.ID)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public science_property(): Science_propertyContext {
		let _localctx: Science_propertyContext = new Science_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, MapIniParser.RULE_science_property);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 523;
			this.match(MapIniParser.T__144);
			this.state = 524;
			this.match(MapIniParser.EQ);
			this.state = 526;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 525;
				this.science_value();
				}
				}
				this.state = 528;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === MapIniParser.NVALUE || _la === MapIniParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public science_value(): Science_valueContext {
		let _localctx: Science_valueContext = new Science_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, MapIniParser.RULE_science_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 530;
			_la = this._input.LA(1);
			if (!(_la === MapIniParser.NVALUE || _la === MapIniParser.ID)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public specialpower_property(): Specialpower_propertyContext {
		let _localctx: Specialpower_propertyContext = new Specialpower_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, MapIniParser.RULE_specialpower_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 532;
			this.match(MapIniParser.T__145);
			this.state = 533;
			this.match(MapIniParser.EQ);
			this.state = 534;
			this.specialpower_value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public specialpower_value(): Specialpower_valueContext {
		let _localctx: Specialpower_valueContext = new Specialpower_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, MapIniParser.RULE_specialpower_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 536;
			_la = this._input.LA(1);
			if (!(_la === MapIniParser.NVALUE || _la === MapIniParser.ID)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public audioevent_value(): Audioevent_valueContext {
		let _localctx: Audioevent_valueContext = new Audioevent_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, MapIniParser.RULE_audioevent_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 538;
			_la = this._input.LA(1);
			if (!(_la === MapIniParser.NVALUE || _la === MapIniParser.ID)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public upgrade_property(): Upgrade_propertyContext {
		let _localctx: Upgrade_propertyContext = new Upgrade_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, MapIniParser.RULE_upgrade_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 540;
			this.match(MapIniParser.T__146);
			this.state = 541;
			this.match(MapIniParser.EQ);
			this.state = 542;
			this.upgrade_value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public upgrade_value(): Upgrade_valueContext {
		let _localctx: Upgrade_valueContext = new Upgrade_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, MapIniParser.RULE_upgrade_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 544;
			_la = this._input.LA(1);
			if (!(_la === MapIniParser.NVALUE || _la === MapIniParser.ID)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public weaponslot_property(): Weaponslot_propertyContext {
		let _localctx: Weaponslot_propertyContext = new Weaponslot_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, MapIniParser.RULE_weaponslot_property);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 546;
			this.match(MapIniParser.T__147);
			this.state = 547;
			this.match(MapIniParser.EQ);
			this.state = 549;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 548;
				this.match(MapIniParser.WEAPONSLOT);
				}
				}
				this.state = 551;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === MapIniParser.WEAPONSLOT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public faction(): FactionContext {
		let _localctx: FactionContext = new FactionContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, MapIniParser.RULE_faction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 553;
			_la = this._input.LA(1);
			if (!(((((_la - 149)) & ~0x1F) === 0 && ((1 << (_la - 149)) & ((1 << (MapIniParser.T__148 - 149)) | (1 << (MapIniParser.T__149 - 149)) | (1 << (MapIniParser.T__150 - 149)) | (1 << (MapIniParser.T__151 - 149)) | (1 << (MapIniParser.T__152 - 149)) | (1 << (MapIniParser.T__153 - 149)) | (1 << (MapIniParser.T__154 - 149)) | (1 << (MapIniParser.T__155 - 149)) | (1 << (MapIniParser.T__156 - 149)) | (1 << (MapIniParser.T__157 - 149)) | (1 << (MapIniParser.T__158 - 149)) | (1 << (MapIniParser.T__159 - 149)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xB6\u022E\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x03\x02\x07\x02l\n\x02\f\x02\x0E\x02o\v\x02\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03y\n\x03\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x07\x04\x7F\n\x04\f\x04\x0E\x04\x82\v\x04\x03" +
		"\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x05\x05\u0104\n\x05\x03\x06\x03\x06\x03\x06\x07\x06\u0109" +
		"\n\x06\f\x06\x0E\x06\u010C\v\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07" +
		"\x07\x07\u0113\n\x07\f\x07\x0E\x07\u0116\v\x07\x03\x07\x03\x07\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x05\b\u012A\n\b\x03\t\x03\t\x03\t\x07\t\u012F\n\t\f\t\x0E" +
		"\t\u0132\v\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0143\n\n\x03\v\x03\v\x07\v\u0147" +
		"\n\v\f\v\x0E\v\u014A\v\v\x03\v\x03\v\x03\f\x03\f\x03\f\x07\f\u0151\n\f" +
		"\f\f\x0E\f\u0154\v\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x05\r\u015C\n" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x05\r\u016D\n\r\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u0172" +
		"\n\x0E\f\x0E\x0E\x0E\u0175\v\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0188\n\x0F\x03\x10\x03\x10\x03\x10\x07" +
		"\x10\u018D\n\x10\f\x10\x0E\x10\u0190\v\x10\x03\x10\x03\x10\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x07\x12\u019C\n\x12" +
		"\f\x12\x0E\x12\u019F\v\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x05\x13\u01B3\n\x13\x03\x14\x03\x14\x03\x14" +
		"\x07\x14\u01B8\n\x14\f\x14\x0E\x14\u01BB\v\x14\x03\x14\x03\x14\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A" +
		"\x06\x1A\u01D2\n\x1A\r\x1A\x0E\x1A\u01D3\x03\x1B\x03\x1B\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03!\x03!\x03!\x03!\x03\"" +
		"\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03%\x03%\x03" +
		"%\x03%\x03&\x03&\x03\'\x03\'\x03(\x03(\x03)\x03)\x03*\x03*\x03+\x03+\x03" +
		"+\x03+\x03,\x03,\x03-\x03-\x03-\x06-\u0211\n-\r-\x0E-\u0212\x03.\x03." +
		"\x03/\x03/\x03/\x03/\x030\x030\x031\x031\x032\x032\x032\x032\x033\x03" +
		"3\x034\x034\x034\x064\u0228\n4\r4\x0E4\u0229\x035\x035\x035\x02\x02\x02" +
		"6\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
		"*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02" +
		"F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02" +
		"b\x02d\x02f\x02h\x02\x02\v\x03\x02:>\x04\x02EE\xB2\xB2\x03\x02OQ\x03\x02" +
		"ST\x04\x02Vq\xB2\xB2\x04\x02s\x84\xB2\xB2\x04\x02\x87\x8A\xB2\xB2\x03" +
		"\x02\xB2\xB3\x03\x02\x97\xA2\x02\u0257\x02m\x03\x02\x02\x02\x04x\x03\x02" +
		"\x02\x02\x06z\x03\x02\x02\x02\b\u0103\x03\x02\x02\x02\n\u0105\x03\x02" +
		"\x02\x02\f\u010F\x03\x02\x02\x02\x0E\u0129\x03\x02\x02\x02\x10\u012B\x03" +
		"\x02\x02\x02\x12\u0142\x03\x02\x02\x02\x14\u0144\x03\x02\x02\x02\x16\u014D" +
		"\x03\x02\x02\x02\x18\u016C\x03\x02\x02\x02\x1A\u016E\x03\x02\x02\x02\x1C" +
		"\u0187\x03\x02\x02\x02\x1E\u0189\x03\x02\x02\x02 \u0193\x03\x02\x02\x02" +
		"\"\u0198\x03\x02\x02\x02$\u01B2\x03\x02\x02\x02&\u01B4\x03\x02\x02\x02" +
		"(\u01BE\x03\x02\x02\x02*\u01C2\x03\x02\x02\x02,\u01C4\x03\x02\x02\x02" +
		".\u01C8\x03\x02\x02\x020\u01CC\x03\x02\x02\x022\u01CE\x03\x02\x02\x02" +
		"4\u01D5\x03\x02\x02\x026\u01D7\x03\x02\x02\x028\u01DB\x03\x02\x02\x02" +
		":\u01DF\x03\x02\x02\x02<\u01E1\x03\x02\x02\x02>\u01E5\x03\x02\x02\x02" +
		"@\u01E9\x03\x02\x02\x02B\u01ED\x03\x02\x02\x02D\u01F1\x03\x02\x02\x02" +
		"F\u01F5\x03\x02\x02\x02H\u01F9\x03\x02\x02\x02J\u01FD\x03\x02\x02\x02" +
		"L\u01FF\x03\x02\x02\x02N\u0201\x03\x02\x02\x02P\u0203\x03\x02\x02\x02" +
		"R\u0205\x03\x02\x02\x02T\u0207\x03\x02\x02\x02V\u020B\x03\x02\x02\x02" +
		"X\u020D\x03\x02\x02\x02Z\u0214\x03\x02\x02\x02\\\u0216\x03\x02\x02\x02" +
		"^\u021A\x03\x02\x02\x02`\u021C\x03\x02\x02\x02b\u021E\x03\x02\x02\x02" +
		"d\u0222\x03\x02\x02\x02f\u0224\x03\x02\x02\x02h\u022B\x03\x02\x02\x02" +
		"jl\x05\x04\x03\x02kj\x03\x02\x02\x02lo\x03\x02\x02\x02mk\x03\x02\x02\x02" +
		"mn\x03\x02\x02\x02np\x03\x02\x02\x02om\x03\x02\x02\x02pq\x07\x02\x02\x03" +
		"q\x03\x03\x02\x02\x02ry\x05\x16\f\x02sy\x05\x06\x04\x02ty\x05\x1A\x0E" +
		"\x02uy\x05\x1E\x10\x02vy\x05\"\x12\x02wy\x05&\x14\x02xr\x03\x02\x02\x02" +
		"xs\x03\x02\x02\x02xt\x03\x02\x02\x02xu\x03\x02\x02\x02xv\x03\x02\x02\x02" +
		"xw\x03\x02\x02\x02y\x05\x03\x02\x02\x02z\x80\x07\x03\x02\x02{\x7F\x05" +
		"\b\x05\x02|\x7F\x05\x10\t\x02}\x7F\x05\n\x06\x02~{\x03\x02\x02\x02~|\x03" +
		"\x02\x02\x02~}\x03\x02\x02\x02\x7F\x82\x03\x02\x02\x02\x80~\x03\x02\x02" +
		"\x02\x80\x81\x03\x02\x02\x02\x81\x83\x03\x02\x02\x02\x82\x80\x03\x02\x02" +
		"\x02\x83\x84\x05*\x16\x02\x84\x07\x03\x02\x02\x02\x85\x86\x07\x04\x02" +
		"\x02\x86\x87\x07\xA6\x02\x02\x87\u0104\x07\xA4\x02\x02\x88\x89\x07\x05" +
		"\x02\x02\x89\x8A\x07\xA6\x02\x02\x8A\u0104\x07\xA3\x02\x02\x8B\x8C\x07" +
		"\x06\x02\x02\x8C\x8D\x07\xA6\x02\x02\x8D\u0104\x07\xA3\x02\x02\x8E\x8F" +
		"\x07\x07\x02\x02\x8F\x90\x07\xA6\x02\x02\x90\u0104\x07\xA3\x02\x02\x91" +
		"\x92\x07\b\x02\x02\x92\x93\x07\xA6\x02\x02\x93\u0104\x07\xA4\x02\x02\x94" +
		"\x95\x07\t\x02\x02\x95\x96\x07\xA6\x02\x02\x96\u0104\x07\xA4\x02\x02\x97" +
		"\x98\x07\n\x02\x02\x98\x99\x07\xA6\x02\x02\x99\u0104\x07\xA4\x02\x02\x9A" +
		"\x9B\x07\v\x02\x02\x9B\x9C\x07\xA6\x02\x02\x9C\u0104\x07\xA4\x02\x02\x9D" +
		"\x9E\x07\f\x02\x02\x9E\x9F\x07\xA6\x02\x02\x9F\u0104\x07\xA4\x02\x02\xA0" +
		"\xA1\x07\r\x02\x02\xA1\xA2\x07\xA6\x02\x02\xA2\u0104\x07\xA4\x02\x02\xA3" +
		"\xA4\x07\x0E\x02\x02\xA4\xA5\x07\xA6\x02\x02\xA5\u0104\x07\xA4\x02\x02" +
		"\xA6\xA7\x07\x0F\x02\x02\xA7\xA8\x07\xA6\x02\x02\xA8\u0104\x07\xA4\x02" +
		"\x02\xA9\xAA\x07\x10\x02\x02\xAA\xAB\x07\xA6\x02\x02\xAB\u0104\x07\xA4" +
		"\x02\x02\xAC\xAD\x07\x11\x02\x02\xAD\xAE\x07\xA6\x02\x02\xAE\u0104\x07" +
		"\xA3\x02\x02\xAF\xB0\x07\x12\x02\x02\xB0\xB1\x07\xA6\x02\x02\xB1\u0104" +
		"\x07\xA3\x02\x02\xB2\xB3\x07\x13\x02\x02\xB3\xB4\x07\xA6\x02\x02\xB4\u0104" +
		"\x07\xA3\x02\x02\xB5\xB6\x07\x14\x02\x02\xB6\xB7\x07\xA6\x02\x02\xB7\u0104" +
		"\x07\xA4\x02\x02\xB8\xB9\x07\x15\x02\x02\xB9\xBA\x07\xA6\x02\x02\xBA\u0104" +
		"\x07\xA4\x02\x02\xBB\xBC\x07\x16\x02\x02\xBC\xBD\x07\xA6\x02\x02\xBD\u0104" +
		"\x07\xA4\x02\x02\xBE\xBF\x07\x17\x02\x02\xBF\xC0\x07\xA6\x02\x02\xC0\u0104" +
		"\x07\xA4\x02\x02\xC1\xC2\x07\x18\x02\x02\xC2\xC3\x07\xA6\x02\x02\xC3\u0104" +
		"\x07\xA4\x02\x02\xC4\xC5\x07\x19\x02\x02\xC5\xC6\x07\xA6\x02\x02\xC6\u0104" +
		"\x07\xA3\x02\x02\xC7\xC8\x07\x1A\x02\x02\xC8\xC9\x07\xA6\x02\x02\xC9\u0104" +
		"\x07\xB1\x02\x02\xCA\xCB\x07\x1B\x02\x02\xCB\xCC\x07\xA6\x02\x02\xCC\u0104" +
		"\x07\xB1\x02\x02\xCD\xCE\x07\x1C\x02\x02\xCE\xCF\x07\xA6\x02\x02\xCF\u0104" +
		"\x07\xB1\x02\x02\xD0\xD1\x07\x1D\x02\x02\xD1\xD2\x07\xA6\x02\x02\xD2\u0104" +
		"\x07\xB1\x02\x02\xD3\xD4\x07\x1E\x02\x02\xD4\xD5\x07\xA6\x02\x02\xD5\u0104" +
		"\x07\xA4\x02\x02\xD6\xD7\x07\x1F\x02\x02\xD7\xD8\x07\xA6\x02\x02\xD8\u0104" +
		"\x07\xA3\x02\x02\xD9\xDA\x07 \x02\x02\xDA\xDB\x07\xA6\x02\x02\xDB\u0104" +
		"\x07\xB1\x02\x02\xDC\xDD\x07!\x02\x02\xDD\xDE\x07\xA6\x02\x02\xDE\u0104" +
		"\x07\xA4\x02\x02\xDF\xE0\x07\"\x02\x02\xE0\xE1\x07\xA6\x02\x02\xE1\u0104" +
		"\x07\xA3\x02\x02\xE2\xE3\x07#\x02\x02\xE3\xE4\x07\xA6\x02\x02\xE4\u0104" +
		"\x07\xA3\x02\x02\xE5\xE6\x07$\x02\x02\xE6\xE7\x07\xA6\x02\x02\xE7\u0104" +
		"\x07\xA4\x02\x02\xE8\xE9\x07%\x02\x02\xE9\xEA\x07\xA6\x02\x02\xEA\u0104" +
		"\x07\xA4\x02\x02\xEB\xEC\x07&\x02\x02\xEC\xED\x07\xA6\x02\x02\xED\u0104" +
		"\x07\xA3\x02\x02\xEE\xEF\x07\'\x02\x02\xEF\xF0\x07\xA6\x02\x02\xF0\u0104" +
		"\x07\xA3\x02\x02\xF1\xF2\x07(\x02\x02\xF2\xF3\x07\xA6\x02\x02\xF3\u0104" +
		"\x07\xA4\x02\x02\xF4\xF5\x07)\x02\x02\xF5\xF6\x07\xA6\x02\x02\xF6\u0104" +
		"\x07\xA3\x02\x02\xF7\xF8\x07*\x02\x02\xF8\xF9\x07\xA6\x02\x02\xF9\u0104" +
		"\x07\xA4\x02\x02\xFA\xFB\x07+\x02\x02\xFB\xFC\x07\xA6\x02\x02\xFC\u0104" +
		"\x07\xB1\x02\x02\xFD\xFE\x07,\x02\x02\xFE\xFF\x07\xA6\x02\x02\xFF\u0104" +
		"\x07\xA4\x02\x02\u0100\u0101\x07-\x02\x02\u0101\u0102\x07\xA6\x02\x02" +
		"\u0102\u0104\x07\xA4\x02\x02\u0103\x85\x03\x02\x02\x02\u0103\x88\x03\x02" +
		"\x02\x02\u0103\x8B\x03\x02\x02\x02\u0103\x8E\x03\x02\x02\x02\u0103\x91" +
		"\x03\x02\x02\x02\u0103\x94\x03\x02\x02\x02\u0103\x97\x03\x02\x02\x02\u0103" +
		"\x9A\x03\x02\x02\x02\u0103\x9D\x03\x02\x02\x02\u0103\xA0\x03\x02\x02\x02" +
		"\u0103\xA3\x03\x02\x02\x02\u0103\xA6\x03\x02\x02\x02\u0103\xA9\x03\x02" +
		"\x02\x02\u0103\xAC\x03\x02\x02\x02\u0103\xAF\x03\x02\x02\x02\u0103\xB2" +
		"\x03\x02\x02\x02\u0103\xB5\x03\x02\x02\x02\u0103\xB8\x03\x02\x02\x02\u0103" +
		"\xBB\x03\x02\x02\x02\u0103\xBE\x03\x02\x02\x02\u0103\xC1\x03\x02\x02\x02" +
		"\u0103\xC4\x03\x02\x02\x02\u0103\xC7\x03\x02\x02\x02\u0103\xCA\x03\x02" +
		"\x02\x02\u0103\xCD\x03\x02\x02\x02\u0103\xD0\x03\x02\x02\x02\u0103\xD3" +
		"\x03\x02\x02\x02\u0103\xD6\x03\x02\x02\x02\u0103\xD9\x03\x02\x02\x02\u0103" +
		"\xDC\x03\x02\x02\x02\u0103\xDF\x03\x02\x02\x02\u0103\xE2\x03\x02\x02\x02" +
		"\u0103\xE5\x03\x02\x02\x02\u0103\xE8\x03\x02\x02\x02\u0103\xEB\x03\x02" +
		"\x02\x02\u0103\xEE\x03\x02\x02\x02\u0103\xF1\x03\x02\x02\x02\u0103\xF4" +
		"\x03\x02\x02\x02\u0103\xF7\x03\x02\x02\x02\u0103\xFA\x03\x02\x02\x02\u0103" +
		"\xFD\x03\x02\x02\x02\u0103\u0100\x03\x02\x02\x02\u0104\t\x03\x02\x02\x02" +
		"\u0105\u0106\x07.\x02\x02\u0106\u010A\x05h5\x02\u0107\u0109\x05\f\x07" +
		"\x02\u0108\u0107\x03\x02\x02\x02\u0109\u010C\x03\x02\x02\x02\u010A\u0108" +
		"\x03\x02\x02\x02\u010A\u010B\x03\x02\x02\x02\u010B\u010D\x03\x02\x02\x02" +
		"\u010C\u010A\x03\x02\x02\x02\u010D\u010E\x05*\x16\x02\u010E\v\x03\x02" +
		"\x02\x02\u010F\u0110\x07/\x02\x02\u0110\u0114\x05V,\x02\u0111\u0113\x05" +
		"\x0E\b\x02\u0112\u0111\x03\x02\x02\x02\u0113\u0116\x03\x02\x02\x02\u0114" +
		"\u0112\x03\x02\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115\u0117\x03\x02" +
		"\x02\x02\u0116\u0114\x03\x02\x02\x02\u0117\u0118\x05*\x16\x02\u0118\r" +
		"\x03\x02\x02\x02\u0119\u011A\x070\x02\x02\u011A\u011B\x07\xA6\x02\x02" +
		"\u011B\u011C\x07\xA8\x02\x02\u011C\u012A\x07\xA9\x02\x02\u011D\u011E\x07" +
		"1\x02\x02\u011E\u011F\x07\xA6\x02\x02\u011F\u012A\x07\xA3\x02\x02\u0120" +
		"\u0121\x072\x02\x02\u0121\u0122\x07\xA6\x02\x02\u0122\u012A\x07\xA4\x02" +
		"\x02\u0123\u0124\x073\x02\x02\u0124\u0125\x07\xA6\x02\x02\u0125\u012A" +
		"\x07\xB1\x02\x02\u0126\u0127\x074\x02\x02\u0127\u0128\x07\xA6\x02\x02" +
		"\u0128\u012A\x07\xB1\x02\x02\u0129\u0119\x03\x02\x02\x02\u0129\u011D\x03" +
		"\x02\x02\x02\u0129\u0120\x03\x02\x02\x02\u0129\u0123\x03\x02\x02\x02\u0129" +
		"\u0126\x03\x02\x02\x02\u012A\x0F\x03\x02\x02\x02\u012B\u012C\x075\x02" +
		"\x02\u012C\u0130\x05h5\x02\u012D\u012F\x05\x12\n\x02\u012E\u012D\x03\x02" +
		"\x02\x02\u012F\u0132\x03\x02\x02\x02\u0130\u012E\x03\x02\x02\x02\u0130" +
		"\u0131\x03\x02\x02\x02\u0131\u0133\x03\x02\x02\x02\u0132\u0130\x03\x02" +
		"\x02\x02\u0133\u0134\x05*\x16\x02\u0134\x11\x03\x02\x02\x02\u0135\u0136" +
		"\x076\x02\x02\u0136\u0137\x07\xA6\x02\x02\u0137\u0143\x07\xA3\x02\x02" +
		"\u0138\u0139\x077\x02\x02\u0139\u013A\x07\xA6\x02\x02\u013A\u0143\x07" +
		"\xA3\x02\x02\u013B\u013C\x078\x02\x02\u013C\u013D\x07\xA6\x02\x02\u013D" +
		"\u0143\x07\xA3\x02\x02\u013E\u013F\x079\x02\x02\u013F\u0140\x07\xA6\x02" +
		"\x02\u0140\u0143\x05V,\x02\u0141\u0143\x05\x14\v\x02\u0142\u0135\x03\x02" +
		"\x02\x02\u0142\u0138\x03\x02\x02\x02\u0142\u013B\x03\x02\x02\x02\u0142" +
		"\u013E\x03\x02\x02\x02\u0142\u0141\x03\x02\x02\x02\u0143\x13\x03\x02\x02" +
		"\x02\u0144\u0148\t\x02\x02\x02\u0145\u0147\x05X-\x02\u0146\u0145\x03\x02" +
		"\x02\x02\u0147\u014A\x03\x02\x02\x02\u0148\u0146\x03\x02\x02\x02\u0148" +
		"\u0149\x03\x02\x02\x02\u0149\u014B\x03\x02\x02\x02\u014A\u0148\x03\x02" +
		"\x02\x02\u014B\u014C\x05*\x16\x02\u014C\x15\x03\x02\x02\x02\u014D\u014E" +
		"\x07?\x02\x02\u014E\u0152\x07\xB3\x02\x02\u014F\u0151\x05\x18\r\x02\u0150" +
		"\u014F\x03\x02\x02\x02\u0151\u0154\x03\x02\x02\x02\u0152\u0150\x03\x02" +
		"\x02\x02\u0152\u0153\x03\x02\x02\x02\u0153\u0155\x03\x02\x02\x02\u0154" +
		"\u0152\x03\x02\x02\x02\u0155\u0156\x05*\x16\x02\u0156\x17\x03\x02\x02" +
		"\x02\u0157\u0158\x07@\x02\x02\u0158\u015B\x07\xA6\x02\x02\u0159\u015C" +
		"\x07\xB2\x02\x02\u015A\u015C\x05,\x17\x02\u015B\u0159\x03\x02\x02\x02" +
		"\u015B\u015A\x03\x02\x02\x02\u015C\u016D\x03\x02\x02\x02\u015D\u015E\x07" +
		"A\x02\x02\u015E\u015F\x07\xA6\x02\x02\u015F\u016D\x07\xA3\x02\x02\u0160" +
		"\u0161\x07B\x02\x02\u0161\u0162\x07\xA6\x02\x02\u0162\u016D\x07\xA3\x02" +
		"\x02\u0163\u0164\x07C\x02\x02\u0164\u0165\x07\xA6\x02\x02\u0165\u0166" +
		"\x07\xAA\x02\x02\u0166\u0167\x07\xAB\x02\x02\u0167\u0168\x07\xAC\x02\x02" +
		"\u0168\u016D\x07\xAD\x02\x02\u0169\u016A\x07D\x02\x02\u016A\u016B\x07" +
		"\xA6\x02\x02\u016B\u016D\t\x03\x02\x02\u016C\u0157\x03\x02\x02\x02\u016C" +
		"\u015D\x03\x02\x02\x02\u016C\u0160\x03\x02\x02\x02\u016C\u0163\x03\x02" +
		"\x02\x02\u016C\u0169\x03\x02\x02\x02\u016D\x19\x03\x02\x02\x02\u016E\u016F" +
		"\x07F\x02\x02\u016F\u0173\x07\xB3\x02\x02\u0170\u0172\x05\x1C\x0F\x02" +
		"\u0171\u0170\x03\x02\x02\x02\u0172\u0175\x03\x02\x02\x02\u0173\u0171\x03" +
		"\x02\x02\x02\u0173\u0174\x03\x02\x02\x02\u0174\u0176\x03\x02\x02\x02\u0175" +
		"\u0173\x03\x02\x02\x02\u0176\u0177\x05*\x16\x02\u0177\x1B\x03\x02\x02" +
		"\x02\u0178\u0179\x07G\x02\x02\u0179\u017A\x07\xA6\x02\x02\u017A\u0188" +
		"\x07\xAE\x02\x02\u017B\u017C\x07H\x02\x02\u017C\u017D\x07\xA6\x02\x02" +
		"\u017D\u0188\x07\xA3\x02\x02\u017E\u017F\x07I\x02\x02\u017F\u0180\x07" +
		"\xA6\x02\x02\u0180\u0188\x07\xB1\x02\x02\u0181\u0182\x07J\x02\x02\u0182" +
		"\u0183\x07\xA6\x02\x02\u0183\u0188\x07\xA3\x02\x02\u0184\u0185\x07K\x02" +
		"\x02\u0185\u0186\x07\xA6\x02\x02\u0186\u0188\x07\xB3\x02\x02\u0187\u0178" +
		"\x03\x02\x02\x02\u0187\u017B\x03\x02\x02\x02\u0187\u017E\x03\x02\x02\x02" +
		"\u0187\u0181\x03\x02\x02\x02\u0187\u0184\x03\x02\x02\x02\u0188\x1D\x03" +
		"\x02\x02\x02\u0189\u018A\x07L\x02\x02\u018A\u018E\x07\xB3\x02\x02\u018B" +
		"\u018D\x05 \x11\x02\u018C\u018B\x03\x02\x02\x02\u018D\u0190\x03\x02\x02" +
		"\x02\u018E\u018C\x03\x02\x02\x02\u018E\u018F\x03\x02\x02\x02\u018F\u0191" +
		"\x03\x02\x02\x02\u0190\u018E\x03\x02\x02\x02\u0191\u0192\x05*\x16\x02" +
		"\u0192\x1F\x03\x02\x02\x02\u0193\u0194\x07L\x02\x02\u0194\u0195\x07\xA6" +
		"\x02\x02\u0195\u0196\x07\xAF\x02\x02\u0196\u0197\x07\xA5\x02\x02\u0197" +
		"!\x03\x02\x02\x02\u0198\u0199\x07M\x02\x02\u0199\u019D\x07\xB3\x02\x02" +
		"\u019A\u019C\x05$\x13\x02\u019B\u019A\x03\x02\x02\x02\u019C\u019F\x03" +
		"\x02\x02\x02\u019D\u019B\x03\x02\x02\x02\u019D\u019E\x03\x02\x02\x02\u019E" +
		"\u01A0\x03\x02\x02\x02\u019F\u019D\x03\x02\x02\x02\u01A0\u01A1\x05*\x16" +
		"\x02\u01A1#\x03\x02\x02\x02\u01A2\u01B3\x05.\x18\x02\u01A3\u01B3\x052" +
		"\x1A\x02\u01A4\u01B3\x056\x1C\x02\u01A5\u01B3\x058\x1D\x02\u01A6\u01B3" +
		"\x05<\x1F\x02\u01A7\u01B3\x05> \x02\u01A8\u01B3\x05@!\x02\u01A9\u01B3" +
		"\x05B\"\x02\u01AA\u01B3\x05D#\x02\u01AB\u01B3\x05F$\x02\u01AC\u01B3\x05" +
		"H%\x02\u01AD\u01B3\x05T+\x02\u01AE\u01B3\x05X-\x02\u01AF\u01B3\x05\\/" +
		"\x02\u01B0\u01B3\x05b2\x02\u01B1\u01B3\x05f4\x02\u01B2\u01A2\x03\x02\x02" +
		"\x02\u01B2\u01A3\x03\x02\x02\x02\u01B2\u01A4\x03\x02\x02\x02\u01B2\u01A5" +
		"\x03\x02\x02\x02\u01B2\u01A6\x03\x02\x02\x02\u01B2\u01A7\x03\x02\x02\x02" +
		"\u01B2\u01A8\x03\x02\x02\x02\u01B2\u01A9\x03\x02\x02\x02\u01B2\u01AA\x03" +
		"\x02\x02\x02\u01B2\u01AB\x03\x02\x02\x02\u01B2\u01AC\x03\x02\x02\x02\u01B2" +
		"\u01AD\x03\x02\x02\x02\u01B2\u01AE\x03\x02\x02\x02\u01B2\u01AF\x03\x02" +
		"\x02\x02\u01B2\u01B0\x03\x02\x02\x02\u01B2\u01B1\x03\x02\x02\x02\u01B3" +
		"%\x03\x02\x02\x02\u01B4\u01B5\x07N\x02\x02\u01B5\u01B9\x07\xB3\x02\x02" +
		"\u01B6\u01B8\x05(\x15\x02\u01B7\u01B6\x03\x02\x02\x02\u01B8\u01BB\x03" +
		"\x02\x02\x02\u01B9\u01B7\x03\x02\x02\x02\u01B9\u01BA\x03\x02\x02\x02\u01BA" +
		"\u01BC\x03\x02\x02\x02\u01BB\u01B9\x03\x02\x02\x02\u01BC\u01BD\x05*\x16" +
		"\x02\u01BD\'\x03\x02\x02\x02\u01BE\u01BF\x07\xA3\x02\x02\u01BF\u01C0\x07" +
		"\xA6\x02\x02\u01C0\u01C1\x05J&\x02\u01C1)\x03\x02\x02\x02\u01C2\u01C3" +
		"\t\x04\x02\x02\u01C3+\x03\x02\x02\x02\u01C4\u01C5\x07\xB3\x02\x02\u01C5" +
		"\u01C6\x07R\x02\x02\u01C6\u01C7\t\x05\x02\x02\u01C7-\x03\x02\x02\x02\u01C8" +
		"\u01C9\x07U\x02\x02\u01C9\u01CA\x07\xA6\x02\x02\u01CA\u01CB\x050\x19\x02" +
		"\u01CB/\x03\x02\x02\x02\u01CC\u01CD\t\x06\x02\x02\u01CD1\x03\x02\x02\x02" +
		"\u01CE\u01CF\x07r\x02\x02\u01CF\u01D1\x07\xA6\x02\x02\u01D0\u01D2\x05" +
		"4\x1B\x02\u01D1\u01D0\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02\u01D3" +
		"\u01D1\x03\x02\x02\x02\u01D3\u01D4\x03\x02\x02\x02\u01D43\x03\x02\x02" +
		"\x02\u01D5\u01D6\t\x07\x02\x02\u01D65\x03\x02\x02\x02\u01D7\u01D8\x07" +
		"\x85\x02\x02\u01D8\u01D9\x07\xA6\x02\x02\u01D9\u01DA\x05R*\x02\u01DA7" +
		"\x03\x02\x02\x02\u01DB\u01DC\x07\x86\x02\x02\u01DC\u01DD\x07\xA6\x02\x02" +
		"\u01DD\u01DE\x05:\x1E\x02\u01DE9\x03\x02\x02\x02\u01DF\u01E0\t\b\x02\x02" +
		"\u01E0;\x03\x02\x02\x02\u01E1\u01E2\x07\x8B\x02\x02\u01E2\u01E3\x07\xA6" +
		"\x02\x02\u01E3\u01E4\t\t\x02\x02\u01E4=\x03\x02\x02\x02\u01E5\u01E6\x07" +
		"\x8C\x02\x02\u01E6\u01E7\x07\xA6\x02\x02\u01E7\u01E8\t\t\x02\x02\u01E8" +
		"?\x03\x02\x02\x02\u01E9\u01EA\x07\x8D\x02\x02\u01EA\u01EB\x07\xA6\x02" +
		"\x02\u01EB\u01EC\t\t\x02\x02\u01ECA\x03\x02\x02\x02\u01ED\u01EE\x07\x8E" +
		"\x02\x02\u01EE\u01EF\x07\xA6\x02\x02\u01EF\u01F0\x05L\'\x02\u01F0C\x03" +
		"\x02\x02\x02\u01F1\u01F2\x07\x8F\x02\x02\u01F2\u01F3\x07\xA6\x02\x02\u01F3" +
		"\u01F4\x05N(\x02\u01F4E\x03\x02\x02\x02\u01F5\u01F6\x07\x90\x02\x02\u01F6" +
		"\u01F7\x07\xA6\x02\x02\u01F7\u01F8\x05P)\x02\u01F8G\x03\x02\x02\x02\u01F9" +
		"\u01FA\x07\x91\x02\x02\u01FA\u01FB\x07\xA6\x02\x02\u01FB\u01FC\x05`1\x02" +
		"\u01FCI\x03\x02\x02\x02\u01FD\u01FE\t\t\x02\x02\u01FEK\x03\x02\x02\x02" +
		"\u01FF\u0200\t\t\x02\x02\u0200M\x03\x02\x02\x02\u0201\u0202\x07\xB3\x02" +
		"\x02\u0202O\x03\x02\x02\x02\u0203\u0204\t\t\x02\x02\u0204Q\x03\x02\x02" +
		"\x02\u0205\u0206\t\t\x02\x02\u0206S\x03\x02\x02\x02\u0207\u0208\x07\x92" +
		"\x02\x02\u0208\u0209\x07\xA6\x02\x02\u0209\u020A\x05V,\x02\u020AU\x03" +
		"\x02\x02\x02\u020B\u020C\t\t\x02\x02\u020CW\x03\x02\x02\x02\u020D\u020E" +
		"\x07\x93\x02\x02\u020E\u0210\x07\xA6\x02\x02\u020F\u0211\x05Z.\x02\u0210" +
		"\u020F\x03\x02\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212\u0210\x03\x02" +
		"\x02\x02\u0212\u0213\x03\x02\x02\x02\u0213Y\x03\x02\x02\x02\u0214\u0215" +
		"\t\t\x02\x02\u0215[\x03\x02\x02\x02\u0216\u0217\x07\x94\x02\x02\u0217" +
		"\u0218\x07\xA6\x02\x02\u0218\u0219\x05^0\x02\u0219]\x03\x02\x02\x02\u021A" +
		"\u021B\t\t\x02\x02\u021B_\x03\x02\x02\x02\u021C\u021D\t\t\x02\x02\u021D" +
		"a\x03\x02\x02\x02\u021E\u021F\x07\x95\x02\x02\u021F\u0220\x07\xA6\x02" +
		"\x02\u0220\u0221\x05d3\x02\u0221c\x03\x02\x02\x02\u0222\u0223\t\t\x02" +
		"\x02\u0223e\x03\x02\x02\x02\u0224\u0225\x07\x96\x02\x02\u0225\u0227\x07" +
		"\xA6\x02\x02\u0226\u0228\x07\xA7\x02\x02\u0227\u0226\x03\x02\x02\x02\u0228" +
		"\u0229\x03\x02\x02\x02\u0229\u0227\x03\x02\x02\x02\u0229\u022A\x03\x02" +
		"\x02\x02\u022Ag\x03\x02\x02\x02\u022B\u022C\t\n\x02\x02\u022Ci\x03\x02" +
		"\x02\x02\x19mx~\x80\u0103\u010A\u0114\u0129\u0130\u0142\u0148\u0152\u015B" +
		"\u016C\u0173\u0187\u018E\u019D\u01B2\u01B9\u01D3\u0212\u0229";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MapIniParser.__ATN) {
			MapIniParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MapIniParser._serializedATN));
		}

		return MapIniParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(MapIniParser.EOF, 0); }
	public classes(): ClassesContext[];
	public classes(i: number): ClassesContext;
	public classes(i?: number): ClassesContext | ClassesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassesContext);
		} else {
			return this.getRuleContext(i, ClassesContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_program; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassesContext extends ParserRuleContext {
	public mappedImageClass(): MappedImageClassContext | undefined {
		return this.tryGetRuleContext(0, MappedImageClassContext);
	}
	public aiDataClass(): AiDataClassContext | undefined {
		return this.tryGetRuleContext(0, AiDataClassContext);
	}
	public animation2DClass(): Animation2DClassContext | undefined {
		return this.tryGetRuleContext(0, Animation2DClassContext);
	}
	public armorClass(): ArmorClassContext | undefined {
		return this.tryGetRuleContext(0, ArmorClassContext);
	}
	public commandButtonClass(): CommandButtonClassContext | undefined {
		return this.tryGetRuleContext(0, CommandButtonClassContext);
	}
	public commandSetClass(): CommandSetClassContext | undefined {
		return this.tryGetRuleContext(0, CommandSetClassContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_classes; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterClasses) {
			listener.enterClasses(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitClasses) {
			listener.exitClasses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitClasses) {
			return visitor.visitClasses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AiDataClassContext extends ParserRuleContext {
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public aidataClassProperties_single(): AidataClassProperties_singleContext[];
	public aidataClassProperties_single(i: number): AidataClassProperties_singleContext;
	public aidataClassProperties_single(i?: number): AidataClassProperties_singleContext | AidataClassProperties_singleContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AidataClassProperties_singleContext);
		} else {
			return this.getRuleContext(i, AidataClassProperties_singleContext);
		}
	}
	public aidataClassProperties_blockSideinfo(): AidataClassProperties_blockSideinfoContext[];
	public aidataClassProperties_blockSideinfo(i: number): AidataClassProperties_blockSideinfoContext;
	public aidataClassProperties_blockSideinfo(i?: number): AidataClassProperties_blockSideinfoContext | AidataClassProperties_blockSideinfoContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AidataClassProperties_blockSideinfoContext);
		} else {
			return this.getRuleContext(i, AidataClassProperties_blockSideinfoContext);
		}
	}
	public aidataClassproperties_BlockSkirmishBuildList(): AidataClassproperties_BlockSkirmishBuildListContext[];
	public aidataClassproperties_BlockSkirmishBuildList(i: number): AidataClassproperties_BlockSkirmishBuildListContext;
	public aidataClassproperties_BlockSkirmishBuildList(i?: number): AidataClassproperties_BlockSkirmishBuildListContext | AidataClassproperties_BlockSkirmishBuildListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AidataClassproperties_BlockSkirmishBuildListContext);
		} else {
			return this.getRuleContext(i, AidataClassproperties_BlockSkirmishBuildListContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_aiDataClass; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterAiDataClass) {
			listener.enterAiDataClass(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitAiDataClass) {
			listener.exitAiDataClass(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitAiDataClass) {
			return visitor.visitAiDataClass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AidataClassProperties_singleContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.FLOAT, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.INT, 0); }
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.BOOLEAN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_aidataClassProperties_single; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterAidataClassProperties_single) {
			listener.enterAidataClassProperties_single(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitAidataClassProperties_single) {
			listener.exitAidataClassProperties_single(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitAidataClassProperties_single) {
			return visitor.visitAidataClassProperties_single(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AidataClassproperties_BlockSkirmishBuildListContext extends ParserRuleContext {
	public faction(): FactionContext {
		return this.getRuleContext(0, FactionContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public skirmishBuildListBlock(): SkirmishBuildListBlockContext[];
	public skirmishBuildListBlock(i: number): SkirmishBuildListBlockContext;
	public skirmishBuildListBlock(i?: number): SkirmishBuildListBlockContext | SkirmishBuildListBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SkirmishBuildListBlockContext);
		} else {
			return this.getRuleContext(i, SkirmishBuildListBlockContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_aidataClassproperties_BlockSkirmishBuildList; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterAidataClassproperties_BlockSkirmishBuildList) {
			listener.enterAidataClassproperties_BlockSkirmishBuildList(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitAidataClassproperties_BlockSkirmishBuildList) {
			listener.exitAidataClassproperties_BlockSkirmishBuildList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitAidataClassproperties_BlockSkirmishBuildList) {
			return visitor.visitAidataClassproperties_BlockSkirmishBuildList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SkirmishBuildListBlockContext extends ParserRuleContext {
	public object_value(): Object_valueContext {
		return this.getRuleContext(0, Object_valueContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public skirmishBuildListBlock_structure_properties(): SkirmishBuildListBlock_structure_propertiesContext[];
	public skirmishBuildListBlock_structure_properties(i: number): SkirmishBuildListBlock_structure_propertiesContext;
	public skirmishBuildListBlock_structure_properties(i?: number): SkirmishBuildListBlock_structure_propertiesContext | SkirmishBuildListBlock_structure_propertiesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SkirmishBuildListBlock_structure_propertiesContext);
		} else {
			return this.getRuleContext(i, SkirmishBuildListBlock_structure_propertiesContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_skirmishBuildListBlock; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterSkirmishBuildListBlock) {
			listener.enterSkirmishBuildListBlock(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitSkirmishBuildListBlock) {
			listener.exitSkirmishBuildListBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitSkirmishBuildListBlock) {
			return visitor.visitSkirmishBuildListBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SkirmishBuildListBlock_structure_propertiesContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public XCOORD(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.XCOORD, 0); }
	public YCOORD(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.YCOORD, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.INT, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.FLOAT, 0); }
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.BOOLEAN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_skirmishBuildListBlock_structure_properties; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterSkirmishBuildListBlock_structure_properties) {
			listener.enterSkirmishBuildListBlock_structure_properties(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitSkirmishBuildListBlock_structure_properties) {
			listener.exitSkirmishBuildListBlock_structure_properties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitSkirmishBuildListBlock_structure_properties) {
			return visitor.visitSkirmishBuildListBlock_structure_properties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AidataClassProperties_blockSideinfoContext extends ParserRuleContext {
	public faction(): FactionContext {
		return this.getRuleContext(0, FactionContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public sideinfoproperties(): SideinfopropertiesContext[];
	public sideinfoproperties(i: number): SideinfopropertiesContext;
	public sideinfoproperties(i?: number): SideinfopropertiesContext | SideinfopropertiesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SideinfopropertiesContext);
		} else {
			return this.getRuleContext(i, SideinfopropertiesContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_aidataClassProperties_blockSideinfo; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterAidataClassProperties_blockSideinfo) {
			listener.enterAidataClassProperties_blockSideinfo(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitAidataClassProperties_blockSideinfo) {
			listener.exitAidataClassProperties_blockSideinfo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitAidataClassProperties_blockSideinfo) {
			return visitor.visitAidataClassProperties_blockSideinfo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SideinfopropertiesContext extends ParserRuleContext {
	public EQ(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.EQ, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.INT, 0); }
	public object_value(): Object_valueContext | undefined {
		return this.tryGetRuleContext(0, Object_valueContext);
	}
	public sideinfo_skillset_blocks(): Sideinfo_skillset_blocksContext | undefined {
		return this.tryGetRuleContext(0, Sideinfo_skillset_blocksContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_sideinfoproperties; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterSideinfoproperties) {
			listener.enterSideinfoproperties(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitSideinfoproperties) {
			listener.exitSideinfoproperties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitSideinfoproperties) {
			return visitor.visitSideinfoproperties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Sideinfo_skillset_blocksContext extends ParserRuleContext {
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public science_property(): Science_propertyContext[];
	public science_property(i: number): Science_propertyContext;
	public science_property(i?: number): Science_propertyContext | Science_propertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Science_propertyContext);
		} else {
			return this.getRuleContext(i, Science_propertyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_sideinfo_skillset_blocks; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterSideinfo_skillset_blocks) {
			listener.enterSideinfo_skillset_blocks(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitSideinfo_skillset_blocks) {
			listener.exitSideinfo_skillset_blocks(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitSideinfo_skillset_blocks) {
			return visitor.visitSideinfo_skillset_blocks(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MappedImageClassContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public mappedImageClassProperties(): MappedImageClassPropertiesContext[];
	public mappedImageClassProperties(i: number): MappedImageClassPropertiesContext;
	public mappedImageClassProperties(i?: number): MappedImageClassPropertiesContext | MappedImageClassPropertiesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MappedImageClassPropertiesContext);
		} else {
			return this.getRuleContext(i, MappedImageClassPropertiesContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_mappedImageClass; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterMappedImageClass) {
			listener.enterMappedImageClass(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitMappedImageClass) {
			listener.exitMappedImageClass(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitMappedImageClass) {
			return visitor.visitMappedImageClass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MappedImageClassPropertiesContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public NVALUE(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.NVALUE, 0); }
	public file(): FileContext | undefined {
		return this.tryGetRuleContext(0, FileContext);
	}
	public INT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.INT, 0); }
	public COORDLEFT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.COORDLEFT, 0); }
	public COORDTOP(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.COORDTOP, 0); }
	public COORDRIGHT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.COORDRIGHT, 0); }
	public COORDBOTTOM(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.COORDBOTTOM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_mappedImageClassProperties; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterMappedImageClassProperties) {
			listener.enterMappedImageClassProperties(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitMappedImageClassProperties) {
			listener.exitMappedImageClassProperties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitMappedImageClassProperties) {
			return visitor.visitMappedImageClassProperties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Animation2DClassContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public animation2DClassProperties(): Animation2DClassPropertiesContext[];
	public animation2DClassProperties(i: number): Animation2DClassPropertiesContext;
	public animation2DClassProperties(i?: number): Animation2DClassPropertiesContext | Animation2DClassPropertiesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Animation2DClassPropertiesContext);
		} else {
			return this.getRuleContext(i, Animation2DClassPropertiesContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_animation2DClass; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterAnimation2DClass) {
			listener.enterAnimation2DClass(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitAnimation2DClass) {
			listener.exitAnimation2DClass(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitAnimation2DClass) {
			return visitor.visitAnimation2DClass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Animation2DClassPropertiesContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public A2D_ANIMATION_MODE(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.A2D_ANIMATION_MODE, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.INT, 0); }
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.BOOLEAN, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_animation2DClassProperties; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterAnimation2DClassProperties) {
			listener.enterAnimation2DClassProperties(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitAnimation2DClassProperties) {
			listener.exitAnimation2DClassProperties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitAnimation2DClassProperties) {
			return visitor.visitAnimation2DClassProperties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArmorClassContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public armorClassProperties(): ArmorClassPropertiesContext[];
	public armorClassProperties(i: number): ArmorClassPropertiesContext;
	public armorClassProperties(i?: number): ArmorClassPropertiesContext | ArmorClassPropertiesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArmorClassPropertiesContext);
		} else {
			return this.getRuleContext(i, ArmorClassPropertiesContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_armorClass; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterArmorClass) {
			listener.enterArmorClass(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitArmorClass) {
			listener.exitArmorClass(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitArmorClass) {
			return visitor.visitArmorClass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArmorClassPropertiesContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public ARMOR_TYPE(): TerminalNode { return this.getToken(MapIniParser.ARMOR_TYPE, 0); }
	public PROCENT(): TerminalNode { return this.getToken(MapIniParser.PROCENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_armorClassProperties; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterArmorClassProperties) {
			listener.enterArmorClassProperties(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitArmorClassProperties) {
			listener.exitArmorClassProperties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitArmorClassProperties) {
			return visitor.visitArmorClassProperties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommandButtonClassContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public commandButtonClassProperties(): CommandButtonClassPropertiesContext[];
	public commandButtonClassProperties(i: number): CommandButtonClassPropertiesContext;
	public commandButtonClassProperties(i?: number): CommandButtonClassPropertiesContext | CommandButtonClassPropertiesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommandButtonClassPropertiesContext);
		} else {
			return this.getRuleContext(i, CommandButtonClassPropertiesContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_commandButtonClass; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterCommandButtonClass) {
			listener.enterCommandButtonClass(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitCommandButtonClass) {
			listener.exitCommandButtonClass(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitCommandButtonClass) {
			return visitor.visitCommandButtonClass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommandButtonClassPropertiesContext extends ParserRuleContext {
	public cb_command_property(): Cb_command_propertyContext | undefined {
		return this.tryGetRuleContext(0, Cb_command_propertyContext);
	}
	public cb_options_property(): Cb_options_propertyContext | undefined {
		return this.tryGetRuleContext(0, Cb_options_propertyContext);
	}
	public cb_buttonimage_property(): Cb_buttonimage_propertyContext | undefined {
		return this.tryGetRuleContext(0, Cb_buttonimage_propertyContext);
	}
	public cb_buttonbordertype_property(): Cb_buttonbordertype_propertyContext | undefined {
		return this.tryGetRuleContext(0, Cb_buttonbordertype_propertyContext);
	}
	public cb_textlabel_property(): Cb_textlabel_propertyContext | undefined {
		return this.tryGetRuleContext(0, Cb_textlabel_propertyContext);
	}
	public cb_descriptionlabel_property(): Cb_descriptionlabel_propertyContext | undefined {
		return this.tryGetRuleContext(0, Cb_descriptionlabel_propertyContext);
	}
	public cb_conflictinglabel_property(): Cb_conflictinglabel_propertyContext | undefined {
		return this.tryGetRuleContext(0, Cb_conflictinglabel_propertyContext);
	}
	public cb_cursorname_propery(): Cb_cursorname_properyContext | undefined {
		return this.tryGetRuleContext(0, Cb_cursorname_properyContext);
	}
	public cb_radius_cursorname_value(): Cb_radius_cursorname_valueContext | undefined {
		return this.tryGetRuleContext(0, Cb_radius_cursorname_valueContext);
	}
	public cb_invalid_cursorname_propery(): Cb_invalid_cursorname_properyContext | undefined {
		return this.tryGetRuleContext(0, Cb_invalid_cursorname_properyContext);
	}
	public cb_unitspecificsound_property(): Cb_unitspecificsound_propertyContext | undefined {
		return this.tryGetRuleContext(0, Cb_unitspecificsound_propertyContext);
	}
	public object_property(): Object_propertyContext | undefined {
		return this.tryGetRuleContext(0, Object_propertyContext);
	}
	public science_property(): Science_propertyContext | undefined {
		return this.tryGetRuleContext(0, Science_propertyContext);
	}
	public specialpower_property(): Specialpower_propertyContext | undefined {
		return this.tryGetRuleContext(0, Specialpower_propertyContext);
	}
	public upgrade_property(): Upgrade_propertyContext | undefined {
		return this.tryGetRuleContext(0, Upgrade_propertyContext);
	}
	public weaponslot_property(): Weaponslot_propertyContext | undefined {
		return this.tryGetRuleContext(0, Weaponslot_propertyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_commandButtonClassProperties; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterCommandButtonClassProperties) {
			listener.enterCommandButtonClassProperties(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitCommandButtonClassProperties) {
			listener.exitCommandButtonClassProperties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitCommandButtonClassProperties) {
			return visitor.visitCommandButtonClassProperties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommandSetClassContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public commandSetClassProperty(): CommandSetClassPropertyContext[];
	public commandSetClassProperty(i: number): CommandSetClassPropertyContext;
	public commandSetClassProperty(i?: number): CommandSetClassPropertyContext | CommandSetClassPropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommandSetClassPropertyContext);
		} else {
			return this.getRuleContext(i, CommandSetClassPropertyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_commandSetClass; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterCommandSetClass) {
			listener.enterCommandSetClass(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitCommandSetClass) {
			listener.exitCommandSetClass(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitCommandSetClass) {
			return visitor.visitCommandSetClass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommandSetClassPropertyContext extends ParserRuleContext {
	public INT(): TerminalNode { return this.getToken(MapIniParser.INT, 0); }
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public commandbutton_value(): Commandbutton_valueContext {
		return this.getRuleContext(0, Commandbutton_valueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_commandSetClassProperty; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterCommandSetClassProperty) {
			listener.enterCommandSetClassProperty(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitCommandSetClassProperty) {
			listener.exitCommandSetClassProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitCommandSetClassProperty) {
			return visitor.visitCommandSetClassProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EndContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_end; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterEnd) {
			listener.enterEnd(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitEnd) {
			listener.exitEnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitEnd) {
			return visitor.visitEnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FileContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_file; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFile) {
			listener.enterFile(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFile) {
			listener.exitFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFile) {
			return visitor.visitFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cb_command_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public cb_command_value(): Cb_command_valueContext {
		return this.getRuleContext(0, Cb_command_valueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_cb_command_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterCb_command_property) {
			listener.enterCb_command_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitCb_command_property) {
			listener.exitCb_command_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitCb_command_property) {
			return visitor.visitCb_command_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cb_command_valueContext extends ParserRuleContext {
	public NVALUE(): TerminalNode { return this.getToken(MapIniParser.NVALUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_cb_command_value; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterCb_command_value) {
			listener.enterCb_command_value(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitCb_command_value) {
			listener.exitCb_command_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitCb_command_value) {
			return visitor.visitCb_command_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cb_options_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public cb_options_value(): Cb_options_valueContext[];
	public cb_options_value(i: number): Cb_options_valueContext;
	public cb_options_value(i?: number): Cb_options_valueContext | Cb_options_valueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Cb_options_valueContext);
		} else {
			return this.getRuleContext(i, Cb_options_valueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_cb_options_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterCb_options_property) {
			listener.enterCb_options_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitCb_options_property) {
			listener.exitCb_options_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitCb_options_property) {
			return visitor.visitCb_options_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cb_options_valueContext extends ParserRuleContext {
	public NVALUE(): TerminalNode { return this.getToken(MapIniParser.NVALUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_cb_options_value; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterCb_options_value) {
			listener.enterCb_options_value(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitCb_options_value) {
			listener.exitCb_options_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitCb_options_value) {
			return visitor.visitCb_options_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cb_buttonimage_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public mappedimage_value(): Mappedimage_valueContext {
		return this.getRuleContext(0, Mappedimage_valueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_cb_buttonimage_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterCb_buttonimage_property) {
			listener.enterCb_buttonimage_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitCb_buttonimage_property) {
			listener.exitCb_buttonimage_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitCb_buttonimage_property) {
			return visitor.visitCb_buttonimage_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cb_buttonbordertype_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public cb_buttonbordertype_value(): Cb_buttonbordertype_valueContext {
		return this.getRuleContext(0, Cb_buttonbordertype_valueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_cb_buttonbordertype_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterCb_buttonbordertype_property) {
			listener.enterCb_buttonbordertype_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitCb_buttonbordertype_property) {
			listener.exitCb_buttonbordertype_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitCb_buttonbordertype_property) {
			return visitor.visitCb_buttonbordertype_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cb_buttonbordertype_valueContext extends ParserRuleContext {
	public NVALUE(): TerminalNode { return this.getToken(MapIniParser.NVALUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_cb_buttonbordertype_value; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterCb_buttonbordertype_value) {
			listener.enterCb_buttonbordertype_value(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitCb_buttonbordertype_value) {
			listener.exitCb_buttonbordertype_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitCb_buttonbordertype_value) {
			return visitor.visitCb_buttonbordertype_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cb_textlabel_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public NVALUE(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.NVALUE, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_cb_textlabel_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterCb_textlabel_property) {
			listener.enterCb_textlabel_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitCb_textlabel_property) {
			listener.exitCb_textlabel_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitCb_textlabel_property) {
			return visitor.visitCb_textlabel_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cb_descriptionlabel_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public NVALUE(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.NVALUE, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_cb_descriptionlabel_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterCb_descriptionlabel_property) {
			listener.enterCb_descriptionlabel_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitCb_descriptionlabel_property) {
			listener.exitCb_descriptionlabel_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitCb_descriptionlabel_property) {
			return visitor.visitCb_descriptionlabel_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cb_conflictinglabel_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public NVALUE(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.NVALUE, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_cb_conflictinglabel_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterCb_conflictinglabel_property) {
			listener.enterCb_conflictinglabel_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitCb_conflictinglabel_property) {
			listener.exitCb_conflictinglabel_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitCb_conflictinglabel_property) {
			return visitor.visitCb_conflictinglabel_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cb_cursorname_properyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public cursorname_value(): Cursorname_valueContext {
		return this.getRuleContext(0, Cursorname_valueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_cb_cursorname_propery; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterCb_cursorname_propery) {
			listener.enterCb_cursorname_propery(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitCb_cursorname_propery) {
			listener.exitCb_cursorname_propery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitCb_cursorname_propery) {
			return visitor.visitCb_cursorname_propery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cb_radius_cursorname_valueContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public radius_cursorname_value(): Radius_cursorname_valueContext {
		return this.getRuleContext(0, Radius_cursorname_valueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_cb_radius_cursorname_value; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterCb_radius_cursorname_value) {
			listener.enterCb_radius_cursorname_value(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitCb_radius_cursorname_value) {
			listener.exitCb_radius_cursorname_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitCb_radius_cursorname_value) {
			return visitor.visitCb_radius_cursorname_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cb_invalid_cursorname_properyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public invalid_cursorname_value(): Invalid_cursorname_valueContext {
		return this.getRuleContext(0, Invalid_cursorname_valueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_cb_invalid_cursorname_propery; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterCb_invalid_cursorname_propery) {
			listener.enterCb_invalid_cursorname_propery(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitCb_invalid_cursorname_propery) {
			listener.exitCb_invalid_cursorname_propery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitCb_invalid_cursorname_propery) {
			return visitor.visitCb_invalid_cursorname_propery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cb_unitspecificsound_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public audioevent_value(): Audioevent_valueContext {
		return this.getRuleContext(0, Audioevent_valueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_cb_unitspecificsound_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterCb_unitspecificsound_property) {
			listener.enterCb_unitspecificsound_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitCb_unitspecificsound_property) {
			listener.exitCb_unitspecificsound_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitCb_unitspecificsound_property) {
			return visitor.visitCb_unitspecificsound_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Commandbutton_valueContext extends ParserRuleContext {
	public NVALUE(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.NVALUE, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_commandbutton_value; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterCommandbutton_value) {
			listener.enterCommandbutton_value(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitCommandbutton_value) {
			listener.exitCommandbutton_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitCommandbutton_value) {
			return visitor.visitCommandbutton_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cursorname_valueContext extends ParserRuleContext {
	public NVALUE(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.NVALUE, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_cursorname_value; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterCursorname_value) {
			listener.enterCursorname_value(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitCursorname_value) {
			listener.exitCursorname_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitCursorname_value) {
			return visitor.visitCursorname_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Radius_cursorname_valueContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_radius_cursorname_value; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterRadius_cursorname_value) {
			listener.enterRadius_cursorname_value(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitRadius_cursorname_value) {
			listener.exitRadius_cursorname_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitRadius_cursorname_value) {
			return visitor.visitRadius_cursorname_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Invalid_cursorname_valueContext extends ParserRuleContext {
	public NVALUE(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.NVALUE, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_invalid_cursorname_value; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterInvalid_cursorname_value) {
			listener.enterInvalid_cursorname_value(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitInvalid_cursorname_value) {
			listener.exitInvalid_cursorname_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitInvalid_cursorname_value) {
			return visitor.visitInvalid_cursorname_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mappedimage_valueContext extends ParserRuleContext {
	public NVALUE(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.NVALUE, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_mappedimage_value; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterMappedimage_value) {
			listener.enterMappedimage_value(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitMappedimage_value) {
			listener.exitMappedimage_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitMappedimage_value) {
			return visitor.visitMappedimage_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Object_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public object_value(): Object_valueContext {
		return this.getRuleContext(0, Object_valueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_object_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterObject_property) {
			listener.enterObject_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitObject_property) {
			listener.exitObject_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitObject_property) {
			return visitor.visitObject_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Object_valueContext extends ParserRuleContext {
	public NVALUE(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.NVALUE, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_object_value; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterObject_value) {
			listener.enterObject_value(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitObject_value) {
			listener.exitObject_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitObject_value) {
			return visitor.visitObject_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Science_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public science_value(): Science_valueContext[];
	public science_value(i: number): Science_valueContext;
	public science_value(i?: number): Science_valueContext | Science_valueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Science_valueContext);
		} else {
			return this.getRuleContext(i, Science_valueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_science_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterScience_property) {
			listener.enterScience_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitScience_property) {
			listener.exitScience_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitScience_property) {
			return visitor.visitScience_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Science_valueContext extends ParserRuleContext {
	public NVALUE(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.NVALUE, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_science_value; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterScience_value) {
			listener.enterScience_value(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitScience_value) {
			listener.exitScience_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitScience_value) {
			return visitor.visitScience_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Specialpower_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public specialpower_value(): Specialpower_valueContext {
		return this.getRuleContext(0, Specialpower_valueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_specialpower_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterSpecialpower_property) {
			listener.enterSpecialpower_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitSpecialpower_property) {
			listener.exitSpecialpower_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitSpecialpower_property) {
			return visitor.visitSpecialpower_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Specialpower_valueContext extends ParserRuleContext {
	public NVALUE(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.NVALUE, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_specialpower_value; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterSpecialpower_value) {
			listener.enterSpecialpower_value(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitSpecialpower_value) {
			listener.exitSpecialpower_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitSpecialpower_value) {
			return visitor.visitSpecialpower_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Audioevent_valueContext extends ParserRuleContext {
	public NVALUE(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.NVALUE, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_audioevent_value; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterAudioevent_value) {
			listener.enterAudioevent_value(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitAudioevent_value) {
			listener.exitAudioevent_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitAudioevent_value) {
			return visitor.visitAudioevent_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Upgrade_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public upgrade_value(): Upgrade_valueContext {
		return this.getRuleContext(0, Upgrade_valueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_upgrade_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterUpgrade_property) {
			listener.enterUpgrade_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitUpgrade_property) {
			listener.exitUpgrade_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitUpgrade_property) {
			return visitor.visitUpgrade_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Upgrade_valueContext extends ParserRuleContext {
	public NVALUE(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.NVALUE, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_upgrade_value; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterUpgrade_value) {
			listener.enterUpgrade_value(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitUpgrade_value) {
			listener.exitUpgrade_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitUpgrade_value) {
			return visitor.visitUpgrade_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Weaponslot_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public WEAPONSLOT(): TerminalNode[];
	public WEAPONSLOT(i: number): TerminalNode;
	public WEAPONSLOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapIniParser.WEAPONSLOT);
		} else {
			return this.getToken(MapIniParser.WEAPONSLOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_weaponslot_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterWeaponslot_property) {
			listener.enterWeaponslot_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitWeaponslot_property) {
			listener.exitWeaponslot_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitWeaponslot_property) {
			return visitor.visitWeaponslot_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FactionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_faction; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFaction) {
			listener.enterFaction(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFaction) {
			listener.exitFaction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFaction) {
			return visitor.visitFaction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


