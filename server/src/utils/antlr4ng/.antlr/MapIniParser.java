// Generated from c:/Users/Mads/Sync/ZeroSyntax/ZeroSyntax-Server/server/src/utils/antlr4ng/MapIni.g4 by ANTLR 4.13.1
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
		T__155=156, T__156=157, T__157=158, T__158=159, T__159=160, T__160=161, 
		T__161=162, T__162=163, T__163=164, T__164=165, T__165=166, T__166=167, 
		T__167=168, T__168=169, T__169=170, T__170=171, T__171=172, T__172=173, 
		T__173=174, T__174=175, T__175=176, T__176=177, T__177=178, T__178=179, 
		T__179=180, T__180=181, T__181=182, T__182=183, T__183=184, T__184=185, 
		T__185=186, T__186=187, T__187=188, T__188=189, T__189=190, T__190=191, 
		T__191=192, T__192=193, T__193=194, T__194=195, T__195=196, T__196=197, 
		T__197=198, T__198=199, T__199=200, T__200=201, T__201=202, T__202=203, 
		T__203=204, T__204=205, T__205=206, T__206=207, T__207=208, T__208=209, 
		T__209=210, T__210=211, T__211=212, T__212=213, T__213=214, T__214=215, 
		T__215=216, T__216=217, T__217=218, T__218=219, T__219=220, T__220=221, 
		T__221=222, T__222=223, T__223=224, T__224=225, T__225=226, T__226=227, 
		T__227=228, T__228=229, T__229=230, T__230=231, T__231=232, T__232=233, 
		T__233=234, T__234=235, T__235=236, T__236=237, T__237=238, T__238=239, 
		T__239=240, T__240=241, T__241=242, T__242=243, T__243=244, T__244=245, 
		T__245=246, T__246=247, T__247=248, T__248=249, T__249=250, T__250=251, 
		T__251=252, T__252=253, T__253=254, T__254=255, T__255=256, T__256=257, 
		T__257=258, T__258=259, T__259=260, T__260=261, T__261=262, T__262=263, 
		T__263=264, T__264=265, T__265=266, T__266=267, T__267=268, T__268=269, 
		T__269=270, T__270=271, T__271=272, T__272=273, T__273=274, T__274=275, 
		T__275=276, T__276=277, T__277=278, T__278=279, T__279=280, T__280=281, 
		T__281=282, T__282=283, T__283=284, T__284=285, T__285=286, T__286=287, 
		T__287=288, T__288=289, T__289=290, T__290=291, T__291=292, T__292=293, 
		T__293=294, T__294=295, T__295=296, T__296=297, T__297=298, T__298=299, 
		T__299=300, T__300=301, T__301=302, T__302=303, T__303=304, T__304=305, 
		T__305=306, T__306=307, T__307=308, T__308=309, T__309=310, T__310=311, 
		T__311=312, T__312=313, T__313=314, T__314=315, T__315=316, T__316=317, 
		T__317=318, T__318=319, T__319=320, T__320=321, T__321=322, T__322=323, 
		T__323=324, T__324=325, T__325=326, T__326=327, T__327=328, T__328=329, 
		T__329=330, T__330=331, T__331=332, T__332=333, T__333=334, T__334=335, 
		T__335=336, T__336=337, T__337=338, T__338=339, T__339=340, T__340=341, 
		T__341=342, T__342=343, T__343=344, T__344=345, T__345=346, T__346=347, 
		INT=348, FLOAT=349, PROCENT=350, EQ=351, WEAPONSLOT=352, VETERENCY=353, 
		XCOORD=354, YCOORD=355, ZCOORD=356, COORDLEFT=357, COORDTOP=358, COORDRIGHT=359, 
		COORDBOTTOM=360, R=361, G=362, B=363, A=364, DISTRIBUTION_FORM=365, MANUAL=366, 
		BOOLEAN=367, STRING=368, ID=369, NL=370, SKIp=371, COMMENT=372, WS=373;
	public static final int
		RULE_program = 0, RULE_classes = 1, RULE_aiDataClass = 2, RULE_aidataClassProperties_single = 3, 
		RULE_aidataClassproperties_BlockSkirmishBuildList = 4, RULE_skirmishBuildListBlock = 5, 
		RULE_skirmishBuildListBlock_structure_properties = 6, RULE_aidataClassProperties_blockSideinfo = 7, 
		RULE_sideinfoproperties = 8, RULE_sideinfo_skillset_blocks = 9, RULE_mappedImageClass = 10, 
		RULE_mappedImageClassProperties = 11, RULE_animation2DClass = 12, RULE_animation2DClassProperties = 13, 
		RULE_armorClass = 14, RULE_armorClassProperties = 15, RULE_commandButtonClass = 16, 
		RULE_commandButtonClassProperties = 17, RULE_commandSetClass = 18, RULE_commandSetClassProperty = 19, 
		RULE_damageFXClass = 20, RULE_damageFXClassProperties = 21, RULE_drawGroupInfoClass = 22, 
		RULE_drawgroupinfoProperties = 23, RULE_fxListClass = 24, RULE_fxlistblocks = 25, 
		RULE_fxlist_ps_block = 26, RULE_fxlist_sound_block = 27, RULE_fxlist_rayeffect_block = 28, 
		RULE_fxlist_tracer_block = 29, RULE_fxlist_lightpulse_block = 30, RULE_fxlist_viewshake_block = 31, 
		RULE_fxlist_terrainscorch_block = 32, RULE_fxlist_fxlistatbone_block = 33, 
		RULE_inGameUIClass = 34, RULE_igui_blocks = 35, RULE_ingui_block_properties = 36, 
		RULE_locomotorClass = 37, RULE_locomotor_properties = 38, RULE_locomotor_surface_property = 39, 
		RULE_locomotor_zbehavior_property = 40, RULE_locomotor_appereance_property = 41, 
		RULE_locomotor_movepriority_property = 42, RULE_surface_value = 43, RULE_zbehavior_value = 44, 
		RULE_appereance_value = 45, RULE_movepriority_value = 46, RULE_weaponClass = 47, 
		RULE_weapon_properties = 48, RULE_weapon_damagetype_property = 49, RULE_weapon_deathtype_property = 50, 
		RULE_weapon_damageaffects_property = 51, RULE_weapon_weaponbonus_property = 52, 
		RULE_weapon_lasterbone_property = 53, RULE_weapon_weaponbonus_condition_value = 54, 
		RULE_weapon_weaponbonus_bonus_value = 55, RULE_damageType_value = 56, 
		RULE_deathType_value = 57, RULE_damageAffects_value = 58, RULE_weatherClass = 59, 
		RULE_weather_properties = 60, RULE_end = 61, RULE_file = 62, RULE_cb_command_property = 63, 
		RULE_cb_command_value = 64, RULE_cb_options_property = 65, RULE_cb_options_value = 66, 
		RULE_cb_buttonimage_property = 67, RULE_cb_buttonbordertype_property = 68, 
		RULE_cb_buttonbordertype_value = 69, RULE_cb_textlabel_property = 70, 
		RULE_cb_descriptionlabel_property = 71, RULE_cb_conflictinglabel_property = 72, 
		RULE_cb_cursorname_propery = 73, RULE_cb_radius_cursorname_value = 74, 
		RULE_cb_invalid_cursorname_propery = 75, RULE_cb_unitspecificsound_property = 76, 
		RULE_cb_maxshotsfire_property = 77, RULE_dfx_throttletime_property = 78, 
		RULE_dfx_amountformajorfx_property = 79, RULE_dfx_majorfx_property = 80, 
		RULE_dfx_minorfx_property = 81, RULE_dfx_vetmajorfx_property = 82, RULE_dfx_vetminorfx_property = 83, 
		RULE_dgi_useplayercolor_property = 84, RULE_dgi_colorfortext_property = 85, 
		RULE_dgi_colordropshadow_property = 86, RULE_dgi_dropshadowoffsetX_property = 87, 
		RULE_dgi_dropshadowoffsetY_property = 88, RULE_dgi_fontname_property = 89, 
		RULE_dgi_fontsize_property = 90, RULE_dgi_fontisbold_property = 91, RULE_dgi_drawposXperc_property = 92, 
		RULE_dgi_drawposYperc_property = 93, RULE_fxlist_ps_name_property = 94, 
		RULE_fxlist_ps_count_property = 95, RULE_fxlist_ps_offset_property = 96, 
		RULE_fxlist_ps_radius_property = 97, RULE_fxlist_ps_height_property = 98, 
		RULE_fxlist_ps_initialDelay_property = 99, RULE_fxlist_ps_rotateX_property = 100, 
		RULE_fxlist_ps_rotatey_property = 101, RULE_fxlist_ps_rotateZ_property = 102, 
		RULE_fxlist_ps_orienttoobject_property = 103, RULE_fxlist_ps_ricochet_property = 104, 
		RULE_fxlist_ps_usecallerradius_property = 105, RULE_fxlist_ps_attachtoobject_property = 106, 
		RULE_fxlist_ps_creategroundheight_property = 107, RULE_fxlist_sound_property = 108, 
		RULE_fxlist_rayeffect_primaryoffset_property = 109, RULE_fxlist_rayeffect_secondaryoffset_proprety = 110, 
		RULE_fxlist_tracer_name_propety = 111, RULE_fxlist_tracer_bonename_property = 112, 
		RULE_fxlist_tracer_speed_property = 113, RULE_fxlist_tracer_decayat_property = 114, 
		RULE_fxlist_tracer_length_property = 115, RULE_fxlist_tracer_width_property = 116, 
		RULE_fxlist_tracer_color_property = 117, RULE_fxlist_tracer_probability_property = 118, 
		RULE_fxlist_lightpulse_color_property = 119, RULE_fxlist_lightpulse_radius_property = 120, 
		RULE_fxlist_lightpulse_radiuspercentobjectsize_property = 121, RULE_fxlist_lightpulse_increasetime_property = 122, 
		RULE_fxlist_lightpulse_decreasetime_property = 123, RULE_fxlist_viewshake_type_property = 124, 
		RULE_fxlist_scorch_type_property = 125, RULE_fxlist_scorch_radius_property = 126, 
		RULE_fxlist_atbonepos_fx_property = 127, RULE_fxlist_atbonepos_bonename_property = 128, 
		RULE_fxlist_atbonepos_orienttoobject_property = 129, RULE_fxlist_name_object_propety = 130, 
		RULE_igui_properties = 131, RULE_faction_value = 132, RULE_commandbutton_value = 133, 
		RULE_cursorname_value = 134, RULE_radius_cursorname_value = 135, RULE_invalid_cursorname_value = 136, 
		RULE_mappedimage_value = 137, RULE_particlesystem_value = 138, RULE_fxlist_value = 139, 
		RULE_object_property = 140, RULE_object_value = 141, RULE_science_property = 142, 
		RULE_science_value = 143, RULE_specialpower_property = 144, RULE_specialpower_value = 145, 
		RULE_audioevent_value = 146, RULE_upgrade_property = 147, RULE_upgrade_value = 148, 
		RULE_weaponslot_property = 149, RULE_rand_value = 150, RULE_coord3D = 151;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "classes", "aiDataClass", "aidataClassProperties_single", 
			"aidataClassproperties_BlockSkirmishBuildList", "skirmishBuildListBlock", 
			"skirmishBuildListBlock_structure_properties", "aidataClassProperties_blockSideinfo", 
			"sideinfoproperties", "sideinfo_skillset_blocks", "mappedImageClass", 
			"mappedImageClassProperties", "animation2DClass", "animation2DClassProperties", 
			"armorClass", "armorClassProperties", "commandButtonClass", "commandButtonClassProperties", 
			"commandSetClass", "commandSetClassProperty", "damageFXClass", "damageFXClassProperties", 
			"drawGroupInfoClass", "drawgroupinfoProperties", "fxListClass", "fxlistblocks", 
			"fxlist_ps_block", "fxlist_sound_block", "fxlist_rayeffect_block", "fxlist_tracer_block", 
			"fxlist_lightpulse_block", "fxlist_viewshake_block", "fxlist_terrainscorch_block", 
			"fxlist_fxlistatbone_block", "inGameUIClass", "igui_blocks", "ingui_block_properties", 
			"locomotorClass", "locomotor_properties", "locomotor_surface_property", 
			"locomotor_zbehavior_property", "locomotor_appereance_property", "locomotor_movepriority_property", 
			"surface_value", "zbehavior_value", "appereance_value", "movepriority_value", 
			"weaponClass", "weapon_properties", "weapon_damagetype_property", "weapon_deathtype_property", 
			"weapon_damageaffects_property", "weapon_weaponbonus_property", "weapon_lasterbone_property", 
			"weapon_weaponbonus_condition_value", "weapon_weaponbonus_bonus_value", 
			"damageType_value", "deathType_value", "damageAffects_value", "weatherClass", 
			"weather_properties", "end", "file", "cb_command_property", "cb_command_value", 
			"cb_options_property", "cb_options_value", "cb_buttonimage_property", 
			"cb_buttonbordertype_property", "cb_buttonbordertype_value", "cb_textlabel_property", 
			"cb_descriptionlabel_property", "cb_conflictinglabel_property", "cb_cursorname_propery", 
			"cb_radius_cursorname_value", "cb_invalid_cursorname_propery", "cb_unitspecificsound_property", 
			"cb_maxshotsfire_property", "dfx_throttletime_property", "dfx_amountformajorfx_property", 
			"dfx_majorfx_property", "dfx_minorfx_property", "dfx_vetmajorfx_property", 
			"dfx_vetminorfx_property", "dgi_useplayercolor_property", "dgi_colorfortext_property", 
			"dgi_colordropshadow_property", "dgi_dropshadowoffsetX_property", "dgi_dropshadowoffsetY_property", 
			"dgi_fontname_property", "dgi_fontsize_property", "dgi_fontisbold_property", 
			"dgi_drawposXperc_property", "dgi_drawposYperc_property", "fxlist_ps_name_property", 
			"fxlist_ps_count_property", "fxlist_ps_offset_property", "fxlist_ps_radius_property", 
			"fxlist_ps_height_property", "fxlist_ps_initialDelay_property", "fxlist_ps_rotateX_property", 
			"fxlist_ps_rotatey_property", "fxlist_ps_rotateZ_property", "fxlist_ps_orienttoobject_property", 
			"fxlist_ps_ricochet_property", "fxlist_ps_usecallerradius_property", 
			"fxlist_ps_attachtoobject_property", "fxlist_ps_creategroundheight_property", 
			"fxlist_sound_property", "fxlist_rayeffect_primaryoffset_property", "fxlist_rayeffect_secondaryoffset_proprety", 
			"fxlist_tracer_name_propety", "fxlist_tracer_bonename_property", "fxlist_tracer_speed_property", 
			"fxlist_tracer_decayat_property", "fxlist_tracer_length_property", "fxlist_tracer_width_property", 
			"fxlist_tracer_color_property", "fxlist_tracer_probability_property", 
			"fxlist_lightpulse_color_property", "fxlist_lightpulse_radius_property", 
			"fxlist_lightpulse_radiuspercentobjectsize_property", "fxlist_lightpulse_increasetime_property", 
			"fxlist_lightpulse_decreasetime_property", "fxlist_viewshake_type_property", 
			"fxlist_scorch_type_property", "fxlist_scorch_radius_property", "fxlist_atbonepos_fx_property", 
			"fxlist_atbonepos_bonename_property", "fxlist_atbonepos_orienttoobject_property", 
			"fxlist_name_object_propety", "igui_properties", "faction_value", "commandbutton_value", 
			"cursorname_value", "radius_cursorname_value", "invalid_cursorname_value", 
			"mappedimage_value", "particlesystem_value", "fxlist_value", "object_property", 
			"object_value", "science_property", "science_value", "specialpower_property", 
			"specialpower_value", "audioevent_value", "upgrade_property", "upgrade_value", 
			"weaponslot_property", "rand_value", "coord3D"
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
			"'CommandSet'", "'DamageFX'", "'DrawGroupInfo'", "'FXList'", "'ParticleSystem'", 
			"'Sound'", "'RayEffect'", "'Tracer'", "'LightPulse'", "'ViewShake'", 
			"'TerrainScorch'", "'FXListAtBonePos'", "'InGameUI'", "'SpyDroneRadiusCursor'", 
			"'AttackScatterAreaRadiusCursor'", "'SuperweaponScatterAreaRadiusCursor'", 
			"'AttackDamageAreaRadiusCursor'", "'AttackContinueAreaRadiusCursor'", 
			"'GuardAreaRadiusCursor'", "'EmergencyRepairRadiusCursor'", "'FrenzyRadiusCursor'", 
			"'FriendlySpecialPowerRadiusCursor'", "'OffensiveSpecialPowerRadiusCursor'", 
			"'ParticleCannonRadiusCursor'", "'A10StrikeRadiusCursor'", "'CarpetBombRadiusCursor'", 
			"'DaisyCutterRadiusCursor'", "'ParadropRadiusCursor'", "'SpySatelliteRadiusCursor'", 
			"'SpectreGunshipRadiusCursor'", "'HelixNapalmBombRadiusCursor'", "'NuclearMissileRadiusCursor'", 
			"'EMPPulseRadiusCursor'", "'ArtilleryRadiusCursor'", "'NapalmStrikeRadiusCursor'", 
			"'ClusterMinesRadiusCursor'", "'ScudStormRadiusCursor'", "'AnthraxBombRadiusCursor'", 
			"'AmbushRadiusCursor'", "'RadarRadiusCursor'", "'ClearMinesRadiusCursor'", 
			"'AmbulanceRadiusCursor'", "'Style'", "'OpacityMin'", "'OpacityMax'", 
			"'OpacityThrobTime'", "'Color'", "'OnlyVisibleToOwningPlayer'", "'Locomotor'", 
			"'Speed'", "'MinSpeed'", "'SpeedDamaged'", "'TurnRate'", "'TurnRateDamaged'", 
			"'Acceleration'", "'AccelerationDamaged'", "'MaxThrustAngle'", "'Braking'", 
			"'MinTurnSpeed'", "'StickToGround'", "'WanderWidthFactor'", "'WanderLengthFactor'", 
			"'WanderAboutPointRadius'", "'TurnPivotOffset'", "'AccelerationPitchLimit'", 
			"'DecelerationPitchLimit'", "'BounceAmount'", "'PitchStiffness'", "'RollStiffness'", 
			"'PitchDamping'", "'RollDamping'", "'ForwardAccelerationPitchFactor'", 
			"'LateralAccelerationRollFactor'", "'ForwardVelocityPitchFactor'", "'LateralVelocityRollFactor'", 
			"'Apply2DFrictionWhenAirborne'", "'AirborneTargetingHeight'", "'LocomotorWorksWhenDead'", 
			"'HasSuspension'", "'CanMoveBackwards'", "'MaximumWheelExtension'", "'MaximumWheelCompression'", 
			"'FrontWheelTurnAngle'", "'AllowAirborneMotiveForce'", "'PreferredHeight'", 
			"'PreferredHeightDamping'", "'ThrustRoll'", "'ThrustWobbleRate'", "'ThrustMinWobble'", 
			"'ThrustMaxWobble'", "'CloseEnoughDist3D'", "'Lift'", "'LiftDamaged'", 
			"'UniformAxialDamping'", "'CloseEnoughDist'", "'CirclingRadius'", "'PitchInDirectionOfZVelFactor'", 
			"'SlideIntoPlaceTime'", "'SpeedLimitZ'", "'Extra2DFriction'", "'DownhillOnly'", 
			"'RudderCorrectionDegree'", "'RudderCorrectionRate'", "'ElevatorCorrectionDegree'", 
			"'ElevatorCorrectionRate'", "'Surfaces'", "'ZAxisBehavior'", "'Appearance'", 
			"'GroupMovementPriority'", "'Weapon'", "'PrimaryDamage'", "'PrimaryDamageRadius'", 
			"'SecondaryDamage'", "'SecondaryDamageRadius'", "'AttackRange'", "'ScatterRadius'", 
			"'AcceptableAimDelta'", "'AntiSmallMissile'", "'AntiProjectile'", "'WeaponSpeed'", 
			"'MinimumAttackRange'", "'ProjectileExhaust'", "'VeterancyProjectileExhaust'", 
			"'ProjectileObject'", "'DamageDealtAtSelfPosition'", "'DelayBetweenShots'", 
			"'ClipSize'", "'ClipReloadTime'", "'AutoReloadsClip'", "'FireFX'", "'VeterancyFireFX'", 
			"'ProjectileDetonationFX'", "'FireSound'", "'ScatterRadiusVsInfantry'", 
			"'MinTargetPitch'", "'MaxTargetPitch'", "'WeaponRecoil'", "'ProjectileCollidesWith'", 
			"'ShotsPerBarrel'", "'AntiAirborneVehicle'", "'AntiAirborneInfantry'", 
			"'AntiGround'", "'LaserName'", "'DamageType'", "'DeathType'", "'RadiusDamageAffects'", 
			"'WeaponBonus'", "'LaserBoneName'", "'Weather'", "'SnowEnabled'", "'SnowTexture'", 
			"'SnowBoxDimensions'", "'SnowBoxDensity'", "'SnowFrequencyScaleX'", "'SnowFrequencyScaleY'", 
			"'SnowAmplitude'", "'SnowVelocity'", "'SnowPointSize'", "'SnowMaxPointSize'", 
			"'SnowMinPointSize'", "'SnowPointSprites'", "'SnowQuadSize'", "'end'", 
			"'End'", "'END'", "'.'", "'tga'", "'dds'", "'Command'", "'Options'", 
			"'ButtonImage'", "'ButtonBorderType'", "'TextLabel'", "'DescriptLabel'", 
			"'ConflictingLabel'", "'CursorName'", "'RadiusCursorType'", "'InvalidCursorName'", 
			"'UnitSpecificSound'", "'MaxShotsToFire'", "'ThrottleTime'", "'AmountForMajorFX'", 
			"'MajorFX'", "'MinorFX'", "'VeterancyMajorFX'", "'VeterancyMinorFX'", 
			"'UsePlayerColor'", "'ColorForText'", "'ColorForTextDropShadow'", "'DropShadowOffsetX'", 
			"'DropShadowOffsetY'", "'FontName'", "'FontSize'", "'FontIsBold'", "'DrawPositionXPercent'", 
			"'DrawPositionYPixel'", "'Name'", "'Count'", "'Offset'", "'Radius'", 
			"'Height'", "'InitialDelay'", "'RotateX'", "'RotateY'", "'RotateZ'", 
			"'OrientToObject'", "'Ricochet'", "'UseCallersRadius'", "'AttachToObject'", 
			"'CreateAtGroundHeight'", "'PrimaryOffset'", "'SecondaryOffset'", "'TracerName'", 
			"'BoneName'", "'DecayAt'", "'Length'", "'Width'", "'Probability'", "'RadiusAsPercentOfObjectSize'", 
			"'IncreaseTime'", "'DecreaseTime'", "'Type'", "'FX'", "'OrientToBone'", 
			"'MaxSelectionSize'", "'MessageColor1'", "'MessageColor2'", "'MessagePosition'", 
			"'MessageFont'", "'MessagePointSize'", "'MessageBold'", "'MessageDelayMS'", 
			"'MilitaryCaptionColor'", "'MilitaryCaptionPosition'", "'MilitaryCaptionTitleFont'", 
			"'MilitaryCaptionTitlePointSize'", "'MilitaryCaptionTitleBold'", "'MilitaryCaptionFont'", 
			"'MilitaryCaptionPointSize'", "'MilitaryCaptionBold'", "'MilitaryCaptionRandomizeTyping'", 
			"'SuperweaponCountdownPosition'", "'SuperweaponCountdownFlashDuration'", 
			"'SuperweaponCountdownFlashColor'", "'SuperweaponCountdownNormalFont'", 
			"'SuperweaponCountdownNormalPointSize'", "'SuperweaponCountdownNormalBold'", 
			"'SuperweaponCountdownReadyFont'", "'SuperweaponCountdownReadyPointSize'", 
			"'SuperweaponCountdownReadyBold'", "'NamedTimerCountdownPosition'", "'NamedTimerCountdownFlashDuration'", 
			"'NamedTimerCountdownFlashColor'", "'NamedTimerCountdownNormalFont'", 
			"'NamedTimerCountdownNormalPointSize'", "'NamedTimerCountdownNormalBold'", 
			"'NamedTimerCountdownNormalColor'", "'NamedTimerCountdownReadyFont'", 
			"'NamedTimerCountdownReadyPointSize'", "'NamedTimerCountdownReadyBold'", 
			"'NamedTimerCountdownReadyColor'", "'FloatingTextTimeOut'", "'FloatingTextMoveUpSpeed'", 
			"'FloatingTextVanishRate'", "'DrawRMBScrollAnchor'", "'MoveRMBScrollAnchor'", 
			"'PopupMessageColor'", "'Object'", "'Science'", "'SpecialPower'", "'Upgrade'", 
			"'WeaponSlot'", null, null, null, "'='"
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
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			"INT", "FLOAT", "PROCENT", "EQ", "WEAPONSLOT", "VETERENCY", "XCOORD", 
			"YCOORD", "ZCOORD", "COORDLEFT", "COORDTOP", "COORDRIGHT", "COORDBOTTOM", 
			"R", "G", "B", "A", "DISTRIBUTION_FORM", "MANUAL", "BOOLEAN", "STRING", 
			"ID", "NL", "SKIp", "COMMENT", "WS"
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
			setState(307);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__0 || _la==T__60 || ((((_la - 68)) & ~0x3f) == 0 && ((1L << (_la - 68)) & 72057594038980545L) != 0) || _la==T__184 || _la==T__223) {
				{
				{
				setState(304);
				classes();
				}
				}
				setState(309);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(310);
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
		public DamageFXClassContext damageFXClass() {
			return getRuleContext(DamageFXClassContext.class,0);
		}
		public DrawGroupInfoClassContext drawGroupInfoClass() {
			return getRuleContext(DrawGroupInfoClassContext.class,0);
		}
		public FxListClassContext fxListClass() {
			return getRuleContext(FxListClassContext.class,0);
		}
		public InGameUIClassContext inGameUIClass() {
			return getRuleContext(InGameUIClassContext.class,0);
		}
		public LocomotorClassContext locomotorClass() {
			return getRuleContext(LocomotorClassContext.class,0);
		}
		public WeaponClassContext weaponClass() {
			return getRuleContext(WeaponClassContext.class,0);
		}
		public WeatherClassContext weatherClass() {
			return getRuleContext(WeatherClassContext.class,0);
		}
		public List<TerminalNode> NL() { return getTokens(MapIniParser.NL); }
		public TerminalNode NL(int i) {
			return getToken(MapIniParser.NL, i);
		}
		public ClassesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classes; }
	}

	public final ClassesContext classes() throws RecognitionException {
		ClassesContext _localctx = new ClassesContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_classes);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(325);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__60:
				{
				setState(312);
				mappedImageClass();
				}
				break;
			case T__0:
				{
				setState(313);
				aiDataClass();
				}
				break;
			case T__67:
				{
				setState(314);
				animation2DClass();
				}
				break;
			case T__73:
				{
				setState(315);
				armorClass();
				}
				break;
			case T__74:
				{
				setState(316);
				commandButtonClass();
				}
				break;
			case T__75:
				{
				setState(317);
				commandSetClass();
				}
				break;
			case T__76:
				{
				setState(318);
				damageFXClass();
				}
				break;
			case T__77:
				{
				setState(319);
				drawGroupInfoClass();
				}
				break;
			case T__78:
				{
				setState(320);
				fxListClass();
				}
				break;
			case T__87:
				{
				setState(321);
				inGameUIClass();
				}
				break;
			case T__123:
				{
				setState(322);
				locomotorClass();
				}
				break;
			case T__184:
				{
				setState(323);
				weaponClass();
				}
				break;
			case T__223:
				{
				setState(324);
				weatherClass();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(330);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==NL) {
				{
				{
				setState(327);
				match(NL);
				}
				}
				setState(332);
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
	public static class AiDataClassContext extends ParserRuleContext {
		public TerminalNode NL() { return getToken(MapIniParser.NL, 0); }
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
			setState(333);
			match(T__0);
			setState(334);
			match(NL);
			setState(340);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 2286984185774076L) != 0)) {
				{
				setState(338);
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
					setState(335);
					aidataClassProperties_single();
					}
					break;
				case T__50:
					{
					setState(336);
					aidataClassProperties_blockSideinfo();
					}
					break;
				case T__43:
					{
					setState(337);
					aidataClassproperties_BlockSkirmishBuildList();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(342);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(343);
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
			setState(471);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__1:
				enterOuterAlt(_localctx, 1);
				{
				setState(345);
				match(T__1);
				setState(346);
				match(EQ);
				setState(347);
				match(FLOAT);
				}
				break;
			case T__2:
				enterOuterAlt(_localctx, 2);
				{
				setState(348);
				match(T__2);
				setState(349);
				match(EQ);
				setState(350);
				match(INT);
				}
				break;
			case T__3:
				enterOuterAlt(_localctx, 3);
				{
				setState(351);
				match(T__3);
				setState(352);
				match(EQ);
				setState(353);
				match(INT);
				}
				break;
			case T__4:
				enterOuterAlt(_localctx, 4);
				{
				setState(354);
				match(T__4);
				setState(355);
				match(EQ);
				setState(356);
				match(INT);
				}
				break;
			case T__5:
				enterOuterAlt(_localctx, 5);
				{
				setState(357);
				match(T__5);
				setState(358);
				match(EQ);
				setState(359);
				match(FLOAT);
				}
				break;
			case T__6:
				enterOuterAlt(_localctx, 6);
				{
				setState(360);
				match(T__6);
				setState(361);
				match(EQ);
				setState(362);
				match(FLOAT);
				}
				break;
			case T__7:
				enterOuterAlt(_localctx, 7);
				{
				setState(363);
				match(T__7);
				setState(364);
				match(EQ);
				setState(365);
				match(FLOAT);
				}
				break;
			case T__8:
				enterOuterAlt(_localctx, 8);
				{
				setState(366);
				match(T__8);
				setState(367);
				match(EQ);
				setState(368);
				match(FLOAT);
				}
				break;
			case T__9:
				enterOuterAlt(_localctx, 9);
				{
				setState(369);
				match(T__9);
				setState(370);
				match(EQ);
				setState(371);
				match(FLOAT);
				}
				break;
			case T__10:
				enterOuterAlt(_localctx, 10);
				{
				setState(372);
				match(T__10);
				setState(373);
				match(EQ);
				setState(374);
				match(FLOAT);
				}
				break;
			case T__11:
				enterOuterAlt(_localctx, 11);
				{
				setState(375);
				match(T__11);
				setState(376);
				match(EQ);
				setState(377);
				match(FLOAT);
				}
				break;
			case T__12:
				enterOuterAlt(_localctx, 12);
				{
				setState(378);
				match(T__12);
				setState(379);
				match(EQ);
				setState(380);
				match(FLOAT);
				}
				break;
			case T__13:
				enterOuterAlt(_localctx, 13);
				{
				setState(381);
				match(T__13);
				setState(382);
				match(EQ);
				setState(383);
				match(FLOAT);
				}
				break;
			case T__14:
				enterOuterAlt(_localctx, 14);
				{
				setState(384);
				match(T__14);
				setState(385);
				match(EQ);
				setState(386);
				match(INT);
				}
				break;
			case T__15:
				enterOuterAlt(_localctx, 15);
				{
				setState(387);
				match(T__15);
				setState(388);
				match(EQ);
				setState(389);
				match(INT);
				}
				break;
			case T__16:
				enterOuterAlt(_localctx, 16);
				{
				setState(390);
				match(T__16);
				setState(391);
				match(EQ);
				setState(392);
				match(INT);
				}
				break;
			case T__17:
				enterOuterAlt(_localctx, 17);
				{
				setState(393);
				match(T__17);
				setState(394);
				match(EQ);
				setState(395);
				match(FLOAT);
				}
				break;
			case T__18:
				enterOuterAlt(_localctx, 18);
				{
				setState(396);
				match(T__18);
				setState(397);
				match(EQ);
				setState(398);
				match(FLOAT);
				}
				break;
			case T__19:
				enterOuterAlt(_localctx, 19);
				{
				setState(399);
				match(T__19);
				setState(400);
				match(EQ);
				setState(401);
				match(FLOAT);
				}
				break;
			case T__20:
				enterOuterAlt(_localctx, 20);
				{
				setState(402);
				match(T__20);
				setState(403);
				match(EQ);
				setState(404);
				match(FLOAT);
				}
				break;
			case T__21:
				enterOuterAlt(_localctx, 21);
				{
				setState(405);
				match(T__21);
				setState(406);
				match(EQ);
				setState(407);
				match(FLOAT);
				}
				break;
			case T__22:
				enterOuterAlt(_localctx, 22);
				{
				setState(408);
				match(T__22);
				setState(409);
				match(EQ);
				setState(410);
				match(INT);
				}
				break;
			case T__23:
				enterOuterAlt(_localctx, 23);
				{
				setState(411);
				match(T__23);
				setState(412);
				match(EQ);
				setState(413);
				match(BOOLEAN);
				}
				break;
			case T__24:
				enterOuterAlt(_localctx, 24);
				{
				setState(414);
				match(T__24);
				setState(415);
				match(EQ);
				setState(416);
				match(BOOLEAN);
				}
				break;
			case T__25:
				enterOuterAlt(_localctx, 25);
				{
				setState(417);
				match(T__25);
				setState(418);
				match(EQ);
				setState(419);
				match(BOOLEAN);
				}
				break;
			case T__26:
				enterOuterAlt(_localctx, 26);
				{
				setState(420);
				match(T__26);
				setState(421);
				match(EQ);
				setState(422);
				match(BOOLEAN);
				}
				break;
			case T__27:
				enterOuterAlt(_localctx, 27);
				{
				setState(423);
				match(T__27);
				setState(424);
				match(EQ);
				setState(425);
				match(FLOAT);
				}
				break;
			case T__28:
				enterOuterAlt(_localctx, 28);
				{
				setState(426);
				match(T__28);
				setState(427);
				match(EQ);
				setState(428);
				match(INT);
				}
				break;
			case T__29:
				enterOuterAlt(_localctx, 29);
				{
				setState(429);
				match(T__29);
				setState(430);
				match(EQ);
				setState(431);
				match(BOOLEAN);
				}
				break;
			case T__30:
				enterOuterAlt(_localctx, 30);
				{
				setState(432);
				match(T__30);
				setState(433);
				match(EQ);
				setState(434);
				match(FLOAT);
				}
				break;
			case T__31:
				enterOuterAlt(_localctx, 31);
				{
				setState(435);
				match(T__31);
				setState(436);
				match(EQ);
				setState(437);
				match(INT);
				}
				break;
			case T__32:
				enterOuterAlt(_localctx, 32);
				{
				setState(438);
				match(T__32);
				setState(439);
				match(EQ);
				setState(440);
				match(INT);
				}
				break;
			case T__33:
				enterOuterAlt(_localctx, 33);
				{
				setState(441);
				match(T__33);
				setState(442);
				match(EQ);
				setState(443);
				match(FLOAT);
				}
				break;
			case T__34:
				enterOuterAlt(_localctx, 34);
				{
				setState(444);
				match(T__34);
				setState(445);
				match(EQ);
				setState(446);
				match(FLOAT);
				}
				break;
			case T__35:
				enterOuterAlt(_localctx, 35);
				{
				setState(447);
				match(T__35);
				setState(448);
				match(EQ);
				setState(449);
				match(INT);
				}
				break;
			case T__36:
				enterOuterAlt(_localctx, 36);
				{
				setState(450);
				match(T__36);
				setState(451);
				match(EQ);
				setState(452);
				match(INT);
				}
				break;
			case T__37:
				enterOuterAlt(_localctx, 37);
				{
				setState(453);
				match(T__37);
				setState(454);
				match(EQ);
				setState(455);
				match(FLOAT);
				}
				break;
			case T__38:
				enterOuterAlt(_localctx, 38);
				{
				setState(456);
				match(T__38);
				setState(457);
				match(EQ);
				setState(458);
				match(INT);
				}
				break;
			case T__39:
				enterOuterAlt(_localctx, 39);
				{
				setState(459);
				match(T__39);
				setState(460);
				match(EQ);
				setState(461);
				match(FLOAT);
				}
				break;
			case T__40:
				enterOuterAlt(_localctx, 40);
				{
				setState(462);
				match(T__40);
				setState(463);
				match(EQ);
				setState(464);
				match(BOOLEAN);
				}
				break;
			case T__41:
				enterOuterAlt(_localctx, 41);
				{
				setState(465);
				match(T__41);
				setState(466);
				match(EQ);
				setState(467);
				match(FLOAT);
				}
				break;
			case T__42:
				enterOuterAlt(_localctx, 42);
				{
				setState(468);
				match(T__42);
				setState(469);
				match(EQ);
				setState(470);
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
		public Faction_valueContext faction_value() {
			return getRuleContext(Faction_valueContext.class,0);
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
			setState(473);
			match(T__43);
			setState(474);
			faction_value();
			setState(478);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__44) {
				{
				{
				setState(475);
				skirmishBuildListBlock();
				}
				}
				setState(480);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(481);
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
			setState(483);
			match(T__44);
			setState(484);
			object_value();
			setState(488);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 2181431069507584L) != 0)) {
				{
				{
				setState(485);
				skirmishBuildListBlock_structure_properties();
				}
				}
				setState(490);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(491);
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
			setState(509);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__45:
				enterOuterAlt(_localctx, 1);
				{
				setState(493);
				match(T__45);
				setState(494);
				match(EQ);
				setState(495);
				match(XCOORD);
				setState(496);
				match(YCOORD);
				}
				break;
			case T__46:
				enterOuterAlt(_localctx, 2);
				{
				setState(497);
				match(T__46);
				setState(498);
				match(EQ);
				setState(499);
				match(INT);
				}
				break;
			case T__47:
				enterOuterAlt(_localctx, 3);
				{
				setState(500);
				match(T__47);
				setState(501);
				match(EQ);
				setState(502);
				match(FLOAT);
				}
				break;
			case T__48:
				enterOuterAlt(_localctx, 4);
				{
				setState(503);
				match(T__48);
				setState(504);
				match(EQ);
				setState(505);
				match(BOOLEAN);
				}
				break;
			case T__49:
				enterOuterAlt(_localctx, 5);
				{
				setState(506);
				match(T__49);
				setState(507);
				match(EQ);
				setState(508);
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
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
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
			setState(511);
			match(T__50);
			setState(512);
			match(ID);
			setState(516);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 2301339409586323456L) != 0)) {
				{
				{
				setState(513);
				sideinfoproperties();
				}
				}
				setState(518);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(519);
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
			setState(534);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__51:
				enterOuterAlt(_localctx, 1);
				{
				setState(521);
				match(T__51);
				setState(522);
				match(EQ);
				setState(523);
				match(INT);
				}
				break;
			case T__52:
				enterOuterAlt(_localctx, 2);
				{
				setState(524);
				match(T__52);
				setState(525);
				match(EQ);
				setState(526);
				match(INT);
				}
				break;
			case T__53:
				enterOuterAlt(_localctx, 3);
				{
				setState(527);
				match(T__53);
				setState(528);
				match(EQ);
				setState(529);
				match(INT);
				}
				break;
			case T__54:
				enterOuterAlt(_localctx, 4);
				{
				setState(530);
				match(T__54);
				setState(531);
				match(EQ);
				setState(532);
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
				setState(533);
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
			setState(536);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 2233785415175766016L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(540);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__343) {
				{
				{
				setState(537);
				science_property();
				}
				}
				setState(542);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(543);
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
			setState(545);
			match(T__60);
			setState(546);
			match(ID);
			setState(550);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 62)) & ~0x3f) == 0 && ((1L << (_la - 62)) & 31L) != 0)) {
				{
				{
				setState(547);
				mappedImageClassProperties();
				}
				}
				setState(552);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(553);
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
		public FileContext file() {
			return getRuleContext(FileContext.class,0);
		}
		public TerminalNode INT() { return getToken(MapIniParser.INT, 0); }
		public TerminalNode COORDLEFT() { return getToken(MapIniParser.COORDLEFT, 0); }
		public TerminalNode COORDTOP() { return getToken(MapIniParser.COORDTOP, 0); }
		public TerminalNode COORDRIGHT() { return getToken(MapIniParser.COORDRIGHT, 0); }
		public TerminalNode COORDBOTTOM() { return getToken(MapIniParser.COORDBOTTOM, 0); }
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
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
			setState(573);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__61:
				enterOuterAlt(_localctx, 1);
				{
				setState(555);
				match(T__61);
				setState(556);
				match(EQ);
				setState(557);
				file();
				}
				break;
			case T__62:
				enterOuterAlt(_localctx, 2);
				{
				setState(558);
				match(T__62);
				setState(559);
				match(EQ);
				setState(560);
				match(INT);
				}
				break;
			case T__63:
				enterOuterAlt(_localctx, 3);
				{
				setState(561);
				match(T__63);
				setState(562);
				match(EQ);
				setState(563);
				match(INT);
				}
				break;
			case T__64:
				enterOuterAlt(_localctx, 4);
				{
				setState(564);
				match(T__64);
				setState(565);
				match(EQ);
				setState(566);
				match(COORDLEFT);
				setState(567);
				match(COORDTOP);
				setState(568);
				match(COORDRIGHT);
				setState(569);
				match(COORDBOTTOM);
				}
				break;
			case T__65:
				enterOuterAlt(_localctx, 5);
				{
				setState(570);
				match(T__65);
				setState(571);
				match(EQ);
				setState(572);
				_la = _input.LA(1);
				if ( !(_la==T__66 || _la==ID) ) {
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
			setState(575);
			match(T__67);
			setState(576);
			match(ID);
			setState(580);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 69)) & ~0x3f) == 0 && ((1L << (_la - 69)) & 31L) != 0)) {
				{
				{
				setState(577);
				animation2DClassProperties();
				}
				}
				setState(582);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(583);
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
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public TerminalNode INT() { return getToken(MapIniParser.INT, 0); }
		public TerminalNode BOOLEAN() { return getToken(MapIniParser.BOOLEAN, 0); }
		public Animation2DClassPropertiesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_animation2DClassProperties; }
	}

	public final Animation2DClassPropertiesContext animation2DClassProperties() throws RecognitionException {
		Animation2DClassPropertiesContext _localctx = new Animation2DClassPropertiesContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_animation2DClassProperties);
		try {
			setState(600);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__68:
				enterOuterAlt(_localctx, 1);
				{
				setState(585);
				match(T__68);
				setState(586);
				match(EQ);
				setState(587);
				match(ID);
				}
				break;
			case T__69:
				enterOuterAlt(_localctx, 2);
				{
				setState(588);
				match(T__69);
				setState(589);
				match(EQ);
				setState(590);
				match(INT);
				}
				break;
			case T__70:
				enterOuterAlt(_localctx, 3);
				{
				setState(591);
				match(T__70);
				setState(592);
				match(EQ);
				setState(593);
				match(BOOLEAN);
				}
				break;
			case T__71:
				enterOuterAlt(_localctx, 4);
				{
				setState(594);
				match(T__71);
				setState(595);
				match(EQ);
				setState(596);
				match(INT);
				}
				break;
			case T__72:
				enterOuterAlt(_localctx, 5);
				{
				setState(597);
				match(T__72);
				setState(598);
				match(EQ);
				setState(599);
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
			setState(602);
			match(T__73);
			setState(603);
			match(ID);
			setState(607);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__73) {
				{
				{
				setState(604);
				armorClassProperties();
				}
				}
				setState(609);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(610);
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
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
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
			setState(612);
			match(T__73);
			setState(613);
			match(EQ);
			setState(614);
			match(ID);
			setState(615);
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
		public List<TerminalNode> NL() { return getTokens(MapIniParser.NL); }
		public TerminalNode NL(int i) {
			return getToken(MapIniParser.NL, i);
		}
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
			setState(617);
			match(T__74);
			setState(618);
			match(ID);
			setState(619);
			match(NL);
			setState(625);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 244)) & ~0x3f) == 0 && ((1L << (_la - 244)) & 4095L) != 0) || ((((_la - 343)) & ~0x3f) == 0 && ((1L << (_la - 343)) & 31L) != 0)) {
				{
				{
				setState(620);
				commandButtonClassProperties();
				setState(621);
				match(NL);
				}
				}
				setState(627);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(628);
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
		public Cb_maxshotsfire_propertyContext cb_maxshotsfire_property() {
			return getRuleContext(Cb_maxshotsfire_propertyContext.class,0);
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
			setState(647);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__243:
				enterOuterAlt(_localctx, 1);
				{
				setState(630);
				cb_command_property();
				}
				break;
			case T__244:
				enterOuterAlt(_localctx, 2);
				{
				setState(631);
				cb_options_property();
				}
				break;
			case T__245:
				enterOuterAlt(_localctx, 3);
				{
				setState(632);
				cb_buttonimage_property();
				}
				break;
			case T__246:
				enterOuterAlt(_localctx, 4);
				{
				setState(633);
				cb_buttonbordertype_property();
				}
				break;
			case T__247:
				enterOuterAlt(_localctx, 5);
				{
				setState(634);
				cb_textlabel_property();
				}
				break;
			case T__248:
				enterOuterAlt(_localctx, 6);
				{
				setState(635);
				cb_descriptionlabel_property();
				}
				break;
			case T__249:
				enterOuterAlt(_localctx, 7);
				{
				setState(636);
				cb_conflictinglabel_property();
				}
				break;
			case T__250:
				enterOuterAlt(_localctx, 8);
				{
				setState(637);
				cb_cursorname_propery();
				}
				break;
			case T__251:
				enterOuterAlt(_localctx, 9);
				{
				setState(638);
				cb_radius_cursorname_value();
				}
				break;
			case T__252:
				enterOuterAlt(_localctx, 10);
				{
				setState(639);
				cb_invalid_cursorname_propery();
				}
				break;
			case T__253:
				enterOuterAlt(_localctx, 11);
				{
				setState(640);
				cb_unitspecificsound_property();
				}
				break;
			case T__254:
				enterOuterAlt(_localctx, 12);
				{
				setState(641);
				cb_maxshotsfire_property();
				}
				break;
			case T__342:
				enterOuterAlt(_localctx, 13);
				{
				setState(642);
				object_property();
				}
				break;
			case T__343:
				enterOuterAlt(_localctx, 14);
				{
				setState(643);
				science_property();
				}
				break;
			case T__344:
				enterOuterAlt(_localctx, 15);
				{
				setState(644);
				specialpower_property();
				}
				break;
			case T__345:
				enterOuterAlt(_localctx, 16);
				{
				setState(645);
				upgrade_property();
				}
				break;
			case T__346:
				enterOuterAlt(_localctx, 17);
				{
				setState(646);
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
			setState(649);
			match(T__75);
			setState(650);
			match(ID);
			setState(654);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==INT) {
				{
				{
				setState(651);
				commandSetClassProperty();
				}
				}
				setState(656);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(657);
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
			setState(659);
			match(INT);
			setState(660);
			match(EQ);
			setState(661);
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
	public static class DamageFXClassContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<DamageFXClassPropertiesContext> damageFXClassProperties() {
			return getRuleContexts(DamageFXClassPropertiesContext.class);
		}
		public DamageFXClassPropertiesContext damageFXClassProperties(int i) {
			return getRuleContext(DamageFXClassPropertiesContext.class,i);
		}
		public DamageFXClassContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_damageFXClass; }
	}

	public final DamageFXClassContext damageFXClass() throws RecognitionException {
		DamageFXClassContext _localctx = new DamageFXClassContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_damageFXClass);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(663);
			match(T__76);
			setState(664);
			match(ID);
			setState(668);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 256)) & ~0x3f) == 0 && ((1L << (_la - 256)) & 63L) != 0)) {
				{
				{
				setState(665);
				damageFXClassProperties();
				}
				}
				setState(670);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(671);
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
	public static class DamageFXClassPropertiesContext extends ParserRuleContext {
		public Dfx_throttletime_propertyContext dfx_throttletime_property() {
			return getRuleContext(Dfx_throttletime_propertyContext.class,0);
		}
		public Dfx_majorfx_propertyContext dfx_majorfx_property() {
			return getRuleContext(Dfx_majorfx_propertyContext.class,0);
		}
		public Dfx_minorfx_propertyContext dfx_minorfx_property() {
			return getRuleContext(Dfx_minorfx_propertyContext.class,0);
		}
		public Dfx_vetmajorfx_propertyContext dfx_vetmajorfx_property() {
			return getRuleContext(Dfx_vetmajorfx_propertyContext.class,0);
		}
		public Dfx_amountformajorfx_propertyContext dfx_amountformajorfx_property() {
			return getRuleContext(Dfx_amountformajorfx_propertyContext.class,0);
		}
		public Dfx_vetminorfx_propertyContext dfx_vetminorfx_property() {
			return getRuleContext(Dfx_vetminorfx_propertyContext.class,0);
		}
		public DamageFXClassPropertiesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_damageFXClassProperties; }
	}

	public final DamageFXClassPropertiesContext damageFXClassProperties() throws RecognitionException {
		DamageFXClassPropertiesContext _localctx = new DamageFXClassPropertiesContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_damageFXClassProperties);
		try {
			setState(679);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__255:
				enterOuterAlt(_localctx, 1);
				{
				setState(673);
				dfx_throttletime_property();
				}
				break;
			case T__257:
				enterOuterAlt(_localctx, 2);
				{
				setState(674);
				dfx_majorfx_property();
				}
				break;
			case T__258:
				enterOuterAlt(_localctx, 3);
				{
				setState(675);
				dfx_minorfx_property();
				}
				break;
			case T__259:
				enterOuterAlt(_localctx, 4);
				{
				setState(676);
				dfx_vetmajorfx_property();
				}
				break;
			case T__256:
				enterOuterAlt(_localctx, 5);
				{
				setState(677);
				dfx_amountformajorfx_property();
				}
				break;
			case T__260:
				enterOuterAlt(_localctx, 6);
				{
				setState(678);
				dfx_vetminorfx_property();
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
	public static class DrawGroupInfoClassContext extends ParserRuleContext {
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<DrawgroupinfoPropertiesContext> drawgroupinfoProperties() {
			return getRuleContexts(DrawgroupinfoPropertiesContext.class);
		}
		public DrawgroupinfoPropertiesContext drawgroupinfoProperties(int i) {
			return getRuleContext(DrawgroupinfoPropertiesContext.class,i);
		}
		public DrawGroupInfoClassContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_drawGroupInfoClass; }
	}

	public final DrawGroupInfoClassContext drawGroupInfoClass() throws RecognitionException {
		DrawGroupInfoClassContext _localctx = new DrawGroupInfoClassContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_drawGroupInfoClass);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(681);
			match(T__77);
			setState(685);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 262)) & ~0x3f) == 0 && ((1L << (_la - 262)) & 1023L) != 0)) {
				{
				{
				setState(682);
				drawgroupinfoProperties();
				}
				}
				setState(687);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(688);
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
	public static class DrawgroupinfoPropertiesContext extends ParserRuleContext {
		public Dgi_useplayercolor_propertyContext dgi_useplayercolor_property() {
			return getRuleContext(Dgi_useplayercolor_propertyContext.class,0);
		}
		public Dgi_colorfortext_propertyContext dgi_colorfortext_property() {
			return getRuleContext(Dgi_colorfortext_propertyContext.class,0);
		}
		public Dgi_colordropshadow_propertyContext dgi_colordropshadow_property() {
			return getRuleContext(Dgi_colordropshadow_propertyContext.class,0);
		}
		public Dgi_dropshadowoffsetX_propertyContext dgi_dropshadowoffsetX_property() {
			return getRuleContext(Dgi_dropshadowoffsetX_propertyContext.class,0);
		}
		public Dgi_dropshadowoffsetY_propertyContext dgi_dropshadowoffsetY_property() {
			return getRuleContext(Dgi_dropshadowoffsetY_propertyContext.class,0);
		}
		public Dgi_fontname_propertyContext dgi_fontname_property() {
			return getRuleContext(Dgi_fontname_propertyContext.class,0);
		}
		public Dgi_fontsize_propertyContext dgi_fontsize_property() {
			return getRuleContext(Dgi_fontsize_propertyContext.class,0);
		}
		public Dgi_fontisbold_propertyContext dgi_fontisbold_property() {
			return getRuleContext(Dgi_fontisbold_propertyContext.class,0);
		}
		public Dgi_drawposXperc_propertyContext dgi_drawposXperc_property() {
			return getRuleContext(Dgi_drawposXperc_propertyContext.class,0);
		}
		public Dgi_drawposYperc_propertyContext dgi_drawposYperc_property() {
			return getRuleContext(Dgi_drawposYperc_propertyContext.class,0);
		}
		public DrawgroupinfoPropertiesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_drawgroupinfoProperties; }
	}

	public final DrawgroupinfoPropertiesContext drawgroupinfoProperties() throws RecognitionException {
		DrawgroupinfoPropertiesContext _localctx = new DrawgroupinfoPropertiesContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_drawgroupinfoProperties);
		try {
			setState(700);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__261:
				enterOuterAlt(_localctx, 1);
				{
				setState(690);
				dgi_useplayercolor_property();
				}
				break;
			case T__262:
				enterOuterAlt(_localctx, 2);
				{
				setState(691);
				dgi_colorfortext_property();
				}
				break;
			case T__263:
				enterOuterAlt(_localctx, 3);
				{
				setState(692);
				dgi_colordropshadow_property();
				}
				break;
			case T__264:
				enterOuterAlt(_localctx, 4);
				{
				setState(693);
				dgi_dropshadowoffsetX_property();
				}
				break;
			case T__265:
				enterOuterAlt(_localctx, 5);
				{
				setState(694);
				dgi_dropshadowoffsetY_property();
				}
				break;
			case T__266:
				enterOuterAlt(_localctx, 6);
				{
				setState(695);
				dgi_fontname_property();
				}
				break;
			case T__267:
				enterOuterAlt(_localctx, 7);
				{
				setState(696);
				dgi_fontsize_property();
				}
				break;
			case T__268:
				enterOuterAlt(_localctx, 8);
				{
				setState(697);
				dgi_fontisbold_property();
				}
				break;
			case T__269:
				enterOuterAlt(_localctx, 9);
				{
				setState(698);
				dgi_drawposXperc_property();
				}
				break;
			case T__270:
				enterOuterAlt(_localctx, 10);
				{
				setState(699);
				dgi_drawposYperc_property();
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
	public static class FxListClassContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<FxlistblocksContext> fxlistblocks() {
			return getRuleContexts(FxlistblocksContext.class);
		}
		public FxlistblocksContext fxlistblocks(int i) {
			return getRuleContext(FxlistblocksContext.class,i);
		}
		public FxListClassContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxListClass; }
	}

	public final FxListClassContext fxListClass() throws RecognitionException {
		FxListClassContext _localctx = new FxListClassContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_fxListClass);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(702);
			match(T__78);
			setState(703);
			match(ID);
			setState(707);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 80)) & ~0x3f) == 0 && ((1L << (_la - 80)) & 255L) != 0)) {
				{
				{
				setState(704);
				fxlistblocks();
				}
				}
				setState(709);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(710);
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
	public static class FxlistblocksContext extends ParserRuleContext {
		public Fxlist_ps_blockContext fxlist_ps_block() {
			return getRuleContext(Fxlist_ps_blockContext.class,0);
		}
		public Fxlist_sound_blockContext fxlist_sound_block() {
			return getRuleContext(Fxlist_sound_blockContext.class,0);
		}
		public Fxlist_rayeffect_blockContext fxlist_rayeffect_block() {
			return getRuleContext(Fxlist_rayeffect_blockContext.class,0);
		}
		public Fxlist_tracer_blockContext fxlist_tracer_block() {
			return getRuleContext(Fxlist_tracer_blockContext.class,0);
		}
		public Fxlist_lightpulse_blockContext fxlist_lightpulse_block() {
			return getRuleContext(Fxlist_lightpulse_blockContext.class,0);
		}
		public Fxlist_viewshake_blockContext fxlist_viewshake_block() {
			return getRuleContext(Fxlist_viewshake_blockContext.class,0);
		}
		public Fxlist_terrainscorch_blockContext fxlist_terrainscorch_block() {
			return getRuleContext(Fxlist_terrainscorch_blockContext.class,0);
		}
		public Fxlist_fxlistatbone_blockContext fxlist_fxlistatbone_block() {
			return getRuleContext(Fxlist_fxlistatbone_blockContext.class,0);
		}
		public FxlistblocksContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlistblocks; }
	}

	public final FxlistblocksContext fxlistblocks() throws RecognitionException {
		FxlistblocksContext _localctx = new FxlistblocksContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_fxlistblocks);
		try {
			setState(720);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__79:
				enterOuterAlt(_localctx, 1);
				{
				setState(712);
				fxlist_ps_block();
				}
				break;
			case T__80:
				enterOuterAlt(_localctx, 2);
				{
				setState(713);
				fxlist_sound_block();
				}
				break;
			case T__81:
				enterOuterAlt(_localctx, 3);
				{
				setState(714);
				fxlist_rayeffect_block();
				}
				break;
			case T__82:
				enterOuterAlt(_localctx, 4);
				{
				setState(715);
				fxlist_tracer_block();
				}
				break;
			case T__83:
				enterOuterAlt(_localctx, 5);
				{
				setState(716);
				fxlist_lightpulse_block();
				}
				break;
			case T__84:
				enterOuterAlt(_localctx, 6);
				{
				setState(717);
				fxlist_viewshake_block();
				}
				break;
			case T__85:
				enterOuterAlt(_localctx, 7);
				{
				setState(718);
				fxlist_terrainscorch_block();
				}
				break;
			case T__86:
				enterOuterAlt(_localctx, 8);
				{
				setState(719);
				fxlist_fxlistatbone_block();
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
	public static class Fxlist_ps_blockContext extends ParserRuleContext {
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<Fxlist_ps_name_propertyContext> fxlist_ps_name_property() {
			return getRuleContexts(Fxlist_ps_name_propertyContext.class);
		}
		public Fxlist_ps_name_propertyContext fxlist_ps_name_property(int i) {
			return getRuleContext(Fxlist_ps_name_propertyContext.class,i);
		}
		public List<Fxlist_ps_count_propertyContext> fxlist_ps_count_property() {
			return getRuleContexts(Fxlist_ps_count_propertyContext.class);
		}
		public Fxlist_ps_count_propertyContext fxlist_ps_count_property(int i) {
			return getRuleContext(Fxlist_ps_count_propertyContext.class,i);
		}
		public List<Fxlist_ps_offset_propertyContext> fxlist_ps_offset_property() {
			return getRuleContexts(Fxlist_ps_offset_propertyContext.class);
		}
		public Fxlist_ps_offset_propertyContext fxlist_ps_offset_property(int i) {
			return getRuleContext(Fxlist_ps_offset_propertyContext.class,i);
		}
		public List<Fxlist_ps_height_propertyContext> fxlist_ps_height_property() {
			return getRuleContexts(Fxlist_ps_height_propertyContext.class);
		}
		public Fxlist_ps_height_propertyContext fxlist_ps_height_property(int i) {
			return getRuleContext(Fxlist_ps_height_propertyContext.class,i);
		}
		public List<Fxlist_ps_radius_propertyContext> fxlist_ps_radius_property() {
			return getRuleContexts(Fxlist_ps_radius_propertyContext.class);
		}
		public Fxlist_ps_radius_propertyContext fxlist_ps_radius_property(int i) {
			return getRuleContext(Fxlist_ps_radius_propertyContext.class,i);
		}
		public List<Fxlist_ps_initialDelay_propertyContext> fxlist_ps_initialDelay_property() {
			return getRuleContexts(Fxlist_ps_initialDelay_propertyContext.class);
		}
		public Fxlist_ps_initialDelay_propertyContext fxlist_ps_initialDelay_property(int i) {
			return getRuleContext(Fxlist_ps_initialDelay_propertyContext.class,i);
		}
		public List<Fxlist_ps_rotateX_propertyContext> fxlist_ps_rotateX_property() {
			return getRuleContexts(Fxlist_ps_rotateX_propertyContext.class);
		}
		public Fxlist_ps_rotateX_propertyContext fxlist_ps_rotateX_property(int i) {
			return getRuleContext(Fxlist_ps_rotateX_propertyContext.class,i);
		}
		public List<Fxlist_ps_rotatey_propertyContext> fxlist_ps_rotatey_property() {
			return getRuleContexts(Fxlist_ps_rotatey_propertyContext.class);
		}
		public Fxlist_ps_rotatey_propertyContext fxlist_ps_rotatey_property(int i) {
			return getRuleContext(Fxlist_ps_rotatey_propertyContext.class,i);
		}
		public List<Fxlist_ps_rotateZ_propertyContext> fxlist_ps_rotateZ_property() {
			return getRuleContexts(Fxlist_ps_rotateZ_propertyContext.class);
		}
		public Fxlist_ps_rotateZ_propertyContext fxlist_ps_rotateZ_property(int i) {
			return getRuleContext(Fxlist_ps_rotateZ_propertyContext.class,i);
		}
		public List<Fxlist_ps_orienttoobject_propertyContext> fxlist_ps_orienttoobject_property() {
			return getRuleContexts(Fxlist_ps_orienttoobject_propertyContext.class);
		}
		public Fxlist_ps_orienttoobject_propertyContext fxlist_ps_orienttoobject_property(int i) {
			return getRuleContext(Fxlist_ps_orienttoobject_propertyContext.class,i);
		}
		public List<Fxlist_ps_usecallerradius_propertyContext> fxlist_ps_usecallerradius_property() {
			return getRuleContexts(Fxlist_ps_usecallerradius_propertyContext.class);
		}
		public Fxlist_ps_usecallerradius_propertyContext fxlist_ps_usecallerradius_property(int i) {
			return getRuleContext(Fxlist_ps_usecallerradius_propertyContext.class,i);
		}
		public List<Fxlist_ps_ricochet_propertyContext> fxlist_ps_ricochet_property() {
			return getRuleContexts(Fxlist_ps_ricochet_propertyContext.class);
		}
		public Fxlist_ps_ricochet_propertyContext fxlist_ps_ricochet_property(int i) {
			return getRuleContext(Fxlist_ps_ricochet_propertyContext.class,i);
		}
		public List<Fxlist_ps_attachtoobject_propertyContext> fxlist_ps_attachtoobject_property() {
			return getRuleContexts(Fxlist_ps_attachtoobject_propertyContext.class);
		}
		public Fxlist_ps_attachtoobject_propertyContext fxlist_ps_attachtoobject_property(int i) {
			return getRuleContext(Fxlist_ps_attachtoobject_propertyContext.class,i);
		}
		public List<Fxlist_ps_creategroundheight_propertyContext> fxlist_ps_creategroundheight_property() {
			return getRuleContexts(Fxlist_ps_creategroundheight_propertyContext.class);
		}
		public Fxlist_ps_creategroundheight_propertyContext fxlist_ps_creategroundheight_property(int i) {
			return getRuleContext(Fxlist_ps_creategroundheight_propertyContext.class,i);
		}
		public Fxlist_ps_blockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_ps_block; }
	}

	public final Fxlist_ps_blockContext fxlist_ps_block() throws RecognitionException {
		Fxlist_ps_blockContext _localctx = new Fxlist_ps_blockContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_fxlist_ps_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(722);
			match(T__79);
			setState(739);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 272)) & ~0x3f) == 0 && ((1L << (_la - 272)) & 16383L) != 0)) {
				{
				setState(737);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__271:
					{
					setState(723);
					fxlist_ps_name_property();
					}
					break;
				case T__272:
					{
					setState(724);
					fxlist_ps_count_property();
					}
					break;
				case T__273:
					{
					setState(725);
					fxlist_ps_offset_property();
					}
					break;
				case T__275:
					{
					setState(726);
					fxlist_ps_height_property();
					}
					break;
				case T__274:
					{
					setState(727);
					fxlist_ps_radius_property();
					}
					break;
				case T__276:
					{
					setState(728);
					fxlist_ps_initialDelay_property();
					}
					break;
				case T__277:
					{
					setState(729);
					fxlist_ps_rotateX_property();
					}
					break;
				case T__278:
					{
					setState(730);
					fxlist_ps_rotatey_property();
					}
					break;
				case T__279:
					{
					setState(731);
					fxlist_ps_rotateZ_property();
					}
					break;
				case T__280:
					{
					setState(732);
					fxlist_ps_orienttoobject_property();
					}
					break;
				case T__282:
					{
					setState(733);
					fxlist_ps_usecallerradius_property();
					}
					break;
				case T__281:
					{
					setState(734);
					fxlist_ps_ricochet_property();
					}
					break;
				case T__283:
					{
					setState(735);
					fxlist_ps_attachtoobject_property();
					}
					break;
				case T__284:
					{
					setState(736);
					fxlist_ps_creategroundheight_property();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(741);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(742);
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
	public static class Fxlist_sound_blockContext extends ParserRuleContext {
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<Fxlist_sound_propertyContext> fxlist_sound_property() {
			return getRuleContexts(Fxlist_sound_propertyContext.class);
		}
		public Fxlist_sound_propertyContext fxlist_sound_property(int i) {
			return getRuleContext(Fxlist_sound_propertyContext.class,i);
		}
		public Fxlist_sound_blockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_sound_block; }
	}

	public final Fxlist_sound_blockContext fxlist_sound_block() throws RecognitionException {
		Fxlist_sound_blockContext _localctx = new Fxlist_sound_blockContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_fxlist_sound_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(744);
			match(T__80);
			setState(748);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__271) {
				{
				{
				setState(745);
				fxlist_sound_property();
				}
				}
				setState(750);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(751);
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
	public static class Fxlist_rayeffect_blockContext extends ParserRuleContext {
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<Fxlist_name_object_propetyContext> fxlist_name_object_propety() {
			return getRuleContexts(Fxlist_name_object_propetyContext.class);
		}
		public Fxlist_name_object_propetyContext fxlist_name_object_propety(int i) {
			return getRuleContext(Fxlist_name_object_propetyContext.class,i);
		}
		public List<Fxlist_rayeffect_primaryoffset_propertyContext> fxlist_rayeffect_primaryoffset_property() {
			return getRuleContexts(Fxlist_rayeffect_primaryoffset_propertyContext.class);
		}
		public Fxlist_rayeffect_primaryoffset_propertyContext fxlist_rayeffect_primaryoffset_property(int i) {
			return getRuleContext(Fxlist_rayeffect_primaryoffset_propertyContext.class,i);
		}
		public List<Fxlist_rayeffect_secondaryoffset_propretyContext> fxlist_rayeffect_secondaryoffset_proprety() {
			return getRuleContexts(Fxlist_rayeffect_secondaryoffset_propretyContext.class);
		}
		public Fxlist_rayeffect_secondaryoffset_propretyContext fxlist_rayeffect_secondaryoffset_proprety(int i) {
			return getRuleContext(Fxlist_rayeffect_secondaryoffset_propretyContext.class,i);
		}
		public Fxlist_rayeffect_blockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_rayeffect_block; }
	}

	public final Fxlist_rayeffect_blockContext fxlist_rayeffect_block() throws RecognitionException {
		Fxlist_rayeffect_blockContext _localctx = new Fxlist_rayeffect_blockContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_fxlist_rayeffect_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(753);
			match(T__81);
			setState(759);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 272)) & ~0x3f) == 0 && ((1L << (_la - 272)) & 49153L) != 0)) {
				{
				setState(757);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__271:
					{
					setState(754);
					fxlist_name_object_propety();
					}
					break;
				case T__285:
					{
					setState(755);
					fxlist_rayeffect_primaryoffset_property();
					}
					break;
				case T__286:
					{
					setState(756);
					fxlist_rayeffect_secondaryoffset_proprety();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(761);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(762);
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
	public static class Fxlist_tracer_blockContext extends ParserRuleContext {
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<Fxlist_tracer_name_propetyContext> fxlist_tracer_name_propety() {
			return getRuleContexts(Fxlist_tracer_name_propetyContext.class);
		}
		public Fxlist_tracer_name_propetyContext fxlist_tracer_name_propety(int i) {
			return getRuleContext(Fxlist_tracer_name_propetyContext.class,i);
		}
		public List<Fxlist_tracer_bonename_propertyContext> fxlist_tracer_bonename_property() {
			return getRuleContexts(Fxlist_tracer_bonename_propertyContext.class);
		}
		public Fxlist_tracer_bonename_propertyContext fxlist_tracer_bonename_property(int i) {
			return getRuleContext(Fxlist_tracer_bonename_propertyContext.class,i);
		}
		public List<Fxlist_tracer_speed_propertyContext> fxlist_tracer_speed_property() {
			return getRuleContexts(Fxlist_tracer_speed_propertyContext.class);
		}
		public Fxlist_tracer_speed_propertyContext fxlist_tracer_speed_property(int i) {
			return getRuleContext(Fxlist_tracer_speed_propertyContext.class,i);
		}
		public List<Fxlist_tracer_decayat_propertyContext> fxlist_tracer_decayat_property() {
			return getRuleContexts(Fxlist_tracer_decayat_propertyContext.class);
		}
		public Fxlist_tracer_decayat_propertyContext fxlist_tracer_decayat_property(int i) {
			return getRuleContext(Fxlist_tracer_decayat_propertyContext.class,i);
		}
		public List<Fxlist_tracer_length_propertyContext> fxlist_tracer_length_property() {
			return getRuleContexts(Fxlist_tracer_length_propertyContext.class);
		}
		public Fxlist_tracer_length_propertyContext fxlist_tracer_length_property(int i) {
			return getRuleContext(Fxlist_tracer_length_propertyContext.class,i);
		}
		public List<Fxlist_tracer_width_propertyContext> fxlist_tracer_width_property() {
			return getRuleContexts(Fxlist_tracer_width_propertyContext.class);
		}
		public Fxlist_tracer_width_propertyContext fxlist_tracer_width_property(int i) {
			return getRuleContext(Fxlist_tracer_width_propertyContext.class,i);
		}
		public List<Fxlist_tracer_color_propertyContext> fxlist_tracer_color_property() {
			return getRuleContexts(Fxlist_tracer_color_propertyContext.class);
		}
		public Fxlist_tracer_color_propertyContext fxlist_tracer_color_property(int i) {
			return getRuleContext(Fxlist_tracer_color_propertyContext.class,i);
		}
		public List<Fxlist_tracer_probability_propertyContext> fxlist_tracer_probability_property() {
			return getRuleContexts(Fxlist_tracer_probability_propertyContext.class);
		}
		public Fxlist_tracer_probability_propertyContext fxlist_tracer_probability_property(int i) {
			return getRuleContext(Fxlist_tracer_probability_propertyContext.class,i);
		}
		public Fxlist_tracer_blockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_tracer_block; }
	}

	public final Fxlist_tracer_blockContext fxlist_tracer_block() throws RecognitionException {
		Fxlist_tracer_blockContext _localctx = new Fxlist_tracer_blockContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_fxlist_tracer_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(764);
			match(T__82);
			setState(775);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__121 || _la==T__124 || ((((_la - 288)) & ~0x3f) == 0 && ((1L << (_la - 288)) & 63L) != 0)) {
				{
				setState(773);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__287:
					{
					setState(765);
					fxlist_tracer_name_propety();
					}
					break;
				case T__288:
					{
					setState(766);
					fxlist_tracer_bonename_property();
					}
					break;
				case T__124:
					{
					setState(767);
					fxlist_tracer_speed_property();
					}
					break;
				case T__289:
					{
					setState(768);
					fxlist_tracer_decayat_property();
					}
					break;
				case T__290:
					{
					setState(769);
					fxlist_tracer_length_property();
					}
					break;
				case T__291:
					{
					setState(770);
					fxlist_tracer_width_property();
					}
					break;
				case T__121:
					{
					setState(771);
					fxlist_tracer_color_property();
					}
					break;
				case T__292:
					{
					setState(772);
					fxlist_tracer_probability_property();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(777);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(778);
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
	public static class Fxlist_lightpulse_blockContext extends ParserRuleContext {
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<Fxlist_lightpulse_color_propertyContext> fxlist_lightpulse_color_property() {
			return getRuleContexts(Fxlist_lightpulse_color_propertyContext.class);
		}
		public Fxlist_lightpulse_color_propertyContext fxlist_lightpulse_color_property(int i) {
			return getRuleContext(Fxlist_lightpulse_color_propertyContext.class,i);
		}
		public List<Fxlist_lightpulse_radius_propertyContext> fxlist_lightpulse_radius_property() {
			return getRuleContexts(Fxlist_lightpulse_radius_propertyContext.class);
		}
		public Fxlist_lightpulse_radius_propertyContext fxlist_lightpulse_radius_property(int i) {
			return getRuleContext(Fxlist_lightpulse_radius_propertyContext.class,i);
		}
		public List<Fxlist_lightpulse_radiuspercentobjectsize_propertyContext> fxlist_lightpulse_radiuspercentobjectsize_property() {
			return getRuleContexts(Fxlist_lightpulse_radiuspercentobjectsize_propertyContext.class);
		}
		public Fxlist_lightpulse_radiuspercentobjectsize_propertyContext fxlist_lightpulse_radiuspercentobjectsize_property(int i) {
			return getRuleContext(Fxlist_lightpulse_radiuspercentobjectsize_propertyContext.class,i);
		}
		public List<Fxlist_lightpulse_increasetime_propertyContext> fxlist_lightpulse_increasetime_property() {
			return getRuleContexts(Fxlist_lightpulse_increasetime_propertyContext.class);
		}
		public Fxlist_lightpulse_increasetime_propertyContext fxlist_lightpulse_increasetime_property(int i) {
			return getRuleContext(Fxlist_lightpulse_increasetime_propertyContext.class,i);
		}
		public List<Fxlist_lightpulse_decreasetime_propertyContext> fxlist_lightpulse_decreasetime_property() {
			return getRuleContexts(Fxlist_lightpulse_decreasetime_propertyContext.class);
		}
		public Fxlist_lightpulse_decreasetime_propertyContext fxlist_lightpulse_decreasetime_property(int i) {
			return getRuleContext(Fxlist_lightpulse_decreasetime_propertyContext.class,i);
		}
		public Fxlist_lightpulse_blockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_lightpulse_block; }
	}

	public final Fxlist_lightpulse_blockContext fxlist_lightpulse_block() throws RecognitionException {
		Fxlist_lightpulse_blockContext _localctx = new Fxlist_lightpulse_blockContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_fxlist_lightpulse_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(780);
			match(T__83);
			setState(788);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__121 || ((((_la - 275)) & ~0x3f) == 0 && ((1L << (_la - 275)) & 3670017L) != 0)) {
				{
				setState(786);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__121:
					{
					setState(781);
					fxlist_lightpulse_color_property();
					}
					break;
				case T__274:
					{
					setState(782);
					fxlist_lightpulse_radius_property();
					}
					break;
				case T__293:
					{
					setState(783);
					fxlist_lightpulse_radiuspercentobjectsize_property();
					}
					break;
				case T__294:
					{
					setState(784);
					fxlist_lightpulse_increasetime_property();
					}
					break;
				case T__295:
					{
					setState(785);
					fxlist_lightpulse_decreasetime_property();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(790);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(791);
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
	public static class Fxlist_viewshake_blockContext extends ParserRuleContext {
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<Fxlist_viewshake_type_propertyContext> fxlist_viewshake_type_property() {
			return getRuleContexts(Fxlist_viewshake_type_propertyContext.class);
		}
		public Fxlist_viewshake_type_propertyContext fxlist_viewshake_type_property(int i) {
			return getRuleContext(Fxlist_viewshake_type_propertyContext.class,i);
		}
		public Fxlist_viewshake_blockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_viewshake_block; }
	}

	public final Fxlist_viewshake_blockContext fxlist_viewshake_block() throws RecognitionException {
		Fxlist_viewshake_blockContext _localctx = new Fxlist_viewshake_blockContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_fxlist_viewshake_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(793);
			match(T__84);
			setState(797);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__296) {
				{
				{
				setState(794);
				fxlist_viewshake_type_property();
				}
				}
				setState(799);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(800);
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
	public static class Fxlist_terrainscorch_blockContext extends ParserRuleContext {
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<Fxlist_scorch_type_propertyContext> fxlist_scorch_type_property() {
			return getRuleContexts(Fxlist_scorch_type_propertyContext.class);
		}
		public Fxlist_scorch_type_propertyContext fxlist_scorch_type_property(int i) {
			return getRuleContext(Fxlist_scorch_type_propertyContext.class,i);
		}
		public List<Fxlist_scorch_radius_propertyContext> fxlist_scorch_radius_property() {
			return getRuleContexts(Fxlist_scorch_radius_propertyContext.class);
		}
		public Fxlist_scorch_radius_propertyContext fxlist_scorch_radius_property(int i) {
			return getRuleContext(Fxlist_scorch_radius_propertyContext.class,i);
		}
		public Fxlist_terrainscorch_blockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_terrainscorch_block; }
	}

	public final Fxlist_terrainscorch_blockContext fxlist_terrainscorch_block() throws RecognitionException {
		Fxlist_terrainscorch_blockContext _localctx = new Fxlist_terrainscorch_blockContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_fxlist_terrainscorch_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(802);
			match(T__85);
			setState(807);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__274 || _la==T__296) {
				{
				setState(805);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__296:
					{
					setState(803);
					fxlist_scorch_type_property();
					}
					break;
				case T__274:
					{
					setState(804);
					fxlist_scorch_radius_property();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(809);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(810);
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
	public static class Fxlist_fxlistatbone_blockContext extends ParserRuleContext {
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<Fxlist_atbonepos_fx_propertyContext> fxlist_atbonepos_fx_property() {
			return getRuleContexts(Fxlist_atbonepos_fx_propertyContext.class);
		}
		public Fxlist_atbonepos_fx_propertyContext fxlist_atbonepos_fx_property(int i) {
			return getRuleContext(Fxlist_atbonepos_fx_propertyContext.class,i);
		}
		public List<Fxlist_atbonepos_bonename_propertyContext> fxlist_atbonepos_bonename_property() {
			return getRuleContexts(Fxlist_atbonepos_bonename_propertyContext.class);
		}
		public Fxlist_atbonepos_bonename_propertyContext fxlist_atbonepos_bonename_property(int i) {
			return getRuleContext(Fxlist_atbonepos_bonename_propertyContext.class,i);
		}
		public List<Fxlist_atbonepos_orienttoobject_propertyContext> fxlist_atbonepos_orienttoobject_property() {
			return getRuleContexts(Fxlist_atbonepos_orienttoobject_propertyContext.class);
		}
		public Fxlist_atbonepos_orienttoobject_propertyContext fxlist_atbonepos_orienttoobject_property(int i) {
			return getRuleContext(Fxlist_atbonepos_orienttoobject_propertyContext.class,i);
		}
		public Fxlist_fxlistatbone_blockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_fxlistatbone_block; }
	}

	public final Fxlist_fxlistatbone_blockContext fxlist_fxlistatbone_block() throws RecognitionException {
		Fxlist_fxlistatbone_blockContext _localctx = new Fxlist_fxlistatbone_blockContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_fxlist_fxlistatbone_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(812);
			match(T__86);
			setState(818);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 289)) & ~0x3f) == 0 && ((1L << (_la - 289)) & 1537L) != 0)) {
				{
				setState(816);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__297:
					{
					setState(813);
					fxlist_atbonepos_fx_property();
					}
					break;
				case T__288:
					{
					setState(814);
					fxlist_atbonepos_bonename_property();
					}
					break;
				case T__298:
					{
					setState(815);
					fxlist_atbonepos_orienttoobject_property();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(820);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(821);
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
	public static class InGameUIClassContext extends ParserRuleContext {
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<Igui_propertiesContext> igui_properties() {
			return getRuleContexts(Igui_propertiesContext.class);
		}
		public Igui_propertiesContext igui_properties(int i) {
			return getRuleContext(Igui_propertiesContext.class,i);
		}
		public List<Igui_blocksContext> igui_blocks() {
			return getRuleContexts(Igui_blocksContext.class);
		}
		public Igui_blocksContext igui_blocks(int i) {
			return getRuleContext(Igui_blocksContext.class,i);
		}
		public InGameUIClassContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_inGameUIClass; }
	}

	public final InGameUIClassContext inGameUIClass() throws RecognitionException {
		InGameUIClassContext _localctx = new InGameUIClassContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_inGameUIClass);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(823);
			match(T__87);
			setState(828);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 89)) & ~0x3f) == 0 && ((1L << (_la - 89)) & 536870911L) != 0) || ((((_la - 300)) & ~0x3f) == 0 && ((1L << (_la - 300)) & 8796093022207L) != 0)) {
				{
				setState(826);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__299:
				case T__300:
				case T__301:
				case T__302:
				case T__303:
				case T__304:
				case T__305:
				case T__306:
				case T__307:
				case T__308:
				case T__309:
				case T__310:
				case T__311:
				case T__312:
				case T__313:
				case T__314:
				case T__315:
				case T__316:
				case T__317:
				case T__318:
				case T__319:
				case T__320:
				case T__321:
				case T__322:
				case T__323:
				case T__324:
				case T__325:
				case T__326:
				case T__327:
				case T__328:
				case T__329:
				case T__330:
				case T__331:
				case T__332:
				case T__333:
				case T__334:
				case T__335:
				case T__336:
				case T__337:
				case T__338:
				case T__339:
				case T__340:
				case T__341:
					{
					setState(824);
					igui_properties();
					}
					break;
				case T__88:
				case T__89:
				case T__90:
				case T__91:
				case T__92:
				case T__93:
				case T__94:
				case T__95:
				case T__96:
				case T__97:
				case T__98:
				case T__99:
				case T__100:
				case T__101:
				case T__102:
				case T__103:
				case T__104:
				case T__105:
				case T__106:
				case T__107:
				case T__108:
				case T__109:
				case T__110:
				case T__111:
				case T__112:
				case T__113:
				case T__114:
				case T__115:
				case T__116:
					{
					setState(825);
					igui_blocks();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(830);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(831);
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
	public static class Igui_blocksContext extends ParserRuleContext {
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<Ingui_block_propertiesContext> ingui_block_properties() {
			return getRuleContexts(Ingui_block_propertiesContext.class);
		}
		public Ingui_block_propertiesContext ingui_block_properties(int i) {
			return getRuleContext(Ingui_block_propertiesContext.class,i);
		}
		public Igui_blocksContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_igui_blocks; }
	}

	public final Igui_blocksContext igui_blocks() throws RecognitionException {
		Igui_blocksContext _localctx = new Igui_blocksContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_igui_blocks);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(833);
			_la = _input.LA(1);
			if ( !(((((_la - 89)) & ~0x3f) == 0 && ((1L << (_la - 89)) & 536870911L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(837);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 62)) & ~0x3f) == 0 && ((1L << (_la - 62)) & 4539628424389459969L) != 0)) {
				{
				{
				setState(834);
				ingui_block_properties();
				}
				}
				setState(839);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(840);
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
	public static class Ingui_block_propertiesContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public TerminalNode PROCENT() { return getToken(MapIniParser.PROCENT, 0); }
		public TerminalNode INT() { return getToken(MapIniParser.INT, 0); }
		public TerminalNode R() { return getToken(MapIniParser.R, 0); }
		public TerminalNode G() { return getToken(MapIniParser.G, 0); }
		public TerminalNode B() { return getToken(MapIniParser.B, 0); }
		public TerminalNode A() { return getToken(MapIniParser.A, 0); }
		public TerminalNode BOOLEAN() { return getToken(MapIniParser.BOOLEAN, 0); }
		public Ingui_block_propertiesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ingui_block_properties; }
	}

	public final Ingui_block_propertiesContext ingui_block_properties() throws RecognitionException {
		Ingui_block_propertiesContext _localctx = new Ingui_block_propertiesContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_ingui_block_properties);
		try {
			setState(866);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__61:
				enterOuterAlt(_localctx, 1);
				{
				setState(842);
				match(T__61);
				setState(843);
				match(EQ);
				setState(844);
				match(ID);
				}
				break;
			case T__117:
				enterOuterAlt(_localctx, 2);
				{
				setState(845);
				match(T__117);
				setState(846);
				match(EQ);
				setState(847);
				match(ID);
				}
				break;
			case T__118:
				enterOuterAlt(_localctx, 3);
				{
				setState(848);
				match(T__118);
				setState(849);
				match(EQ);
				setState(850);
				match(PROCENT);
				}
				break;
			case T__119:
				enterOuterAlt(_localctx, 4);
				{
				setState(851);
				match(T__119);
				setState(852);
				match(EQ);
				setState(853);
				match(PROCENT);
				}
				break;
			case T__120:
				enterOuterAlt(_localctx, 5);
				{
				setState(854);
				match(T__120);
				setState(855);
				match(EQ);
				setState(856);
				match(INT);
				}
				break;
			case T__121:
				enterOuterAlt(_localctx, 6);
				{
				setState(857);
				match(T__121);
				setState(858);
				match(EQ);
				setState(859);
				match(R);
				setState(860);
				match(G);
				setState(861);
				match(B);
				setState(862);
				match(A);
				}
				break;
			case T__122:
				enterOuterAlt(_localctx, 7);
				{
				setState(863);
				match(T__122);
				setState(864);
				match(EQ);
				setState(865);
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
	public static class LocomotorClassContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<Locomotor_propertiesContext> locomotor_properties() {
			return getRuleContexts(Locomotor_propertiesContext.class);
		}
		public Locomotor_propertiesContext locomotor_properties(int i) {
			return getRuleContext(Locomotor_propertiesContext.class,i);
		}
		public LocomotorClassContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_locomotorClass; }
	}

	public final LocomotorClassContext locomotorClass() throws RecognitionException {
		LocomotorClassContext _localctx = new LocomotorClassContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_locomotorClass);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(868);
			match(T__123);
			setState(869);
			match(ID);
			setState(873);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 125)) & ~0x3f) == 0 && ((1L << (_la - 125)) & 1152921504606846975L) != 0)) {
				{
				{
				setState(870);
				locomotor_properties();
				}
				}
				setState(875);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(876);
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
	public static class Locomotor_propertiesContext extends ParserRuleContext {
		public Locomotor_surface_propertyContext locomotor_surface_property() {
			return getRuleContext(Locomotor_surface_propertyContext.class,0);
		}
		public Locomotor_zbehavior_propertyContext locomotor_zbehavior_property() {
			return getRuleContext(Locomotor_zbehavior_propertyContext.class,0);
		}
		public Locomotor_appereance_propertyContext locomotor_appereance_property() {
			return getRuleContext(Locomotor_appereance_propertyContext.class,0);
		}
		public Locomotor_movepriority_propertyContext locomotor_movepriority_property() {
			return getRuleContext(Locomotor_movepriority_propertyContext.class,0);
		}
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode INT() { return getToken(MapIniParser.INT, 0); }
		public TerminalNode FLOAT() { return getToken(MapIniParser.FLOAT, 0); }
		public TerminalNode BOOLEAN() { return getToken(MapIniParser.BOOLEAN, 0); }
		public Locomotor_propertiesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_locomotor_properties; }
	}

	public final Locomotor_propertiesContext locomotor_properties() throws RecognitionException {
		Locomotor_propertiesContext _localctx = new Locomotor_propertiesContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_locomotor_properties);
		int _la;
		try {
			setState(1050);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__180:
				enterOuterAlt(_localctx, 1);
				{
				setState(878);
				locomotor_surface_property();
				}
				break;
			case T__181:
				enterOuterAlt(_localctx, 2);
				{
				setState(879);
				locomotor_zbehavior_property();
				}
				break;
			case T__182:
				enterOuterAlt(_localctx, 3);
				{
				setState(880);
				locomotor_appereance_property();
				}
				break;
			case T__183:
				enterOuterAlt(_localctx, 4);
				{
				setState(881);
				locomotor_movepriority_property();
				}
				break;
			case T__124:
				enterOuterAlt(_localctx, 5);
				{
				setState(882);
				match(T__124);
				setState(883);
				match(EQ);
				setState(884);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__125:
				enterOuterAlt(_localctx, 6);
				{
				setState(885);
				match(T__125);
				setState(886);
				match(EQ);
				setState(887);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__126:
				enterOuterAlt(_localctx, 7);
				{
				setState(888);
				match(T__126);
				setState(889);
				match(EQ);
				setState(890);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__127:
				enterOuterAlt(_localctx, 8);
				{
				setState(891);
				match(T__127);
				setState(892);
				match(EQ);
				setState(893);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__128:
				enterOuterAlt(_localctx, 9);
				{
				setState(894);
				match(T__128);
				setState(895);
				match(EQ);
				setState(896);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__129:
				enterOuterAlt(_localctx, 10);
				{
				setState(897);
				match(T__129);
				setState(898);
				match(EQ);
				setState(899);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__130:
				enterOuterAlt(_localctx, 11);
				{
				setState(900);
				match(T__130);
				setState(901);
				match(EQ);
				setState(902);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__131:
				enterOuterAlt(_localctx, 12);
				{
				setState(903);
				match(T__131);
				setState(904);
				match(EQ);
				setState(905);
				match(INT);
				}
				break;
			case T__132:
				enterOuterAlt(_localctx, 13);
				{
				setState(906);
				match(T__132);
				setState(907);
				match(EQ);
				setState(908);
				match(INT);
				}
				break;
			case T__133:
				enterOuterAlt(_localctx, 14);
				{
				setState(909);
				match(T__133);
				setState(910);
				match(EQ);
				setState(911);
				match(INT);
				}
				break;
			case T__134:
				enterOuterAlt(_localctx, 15);
				{
				setState(912);
				match(T__134);
				setState(913);
				match(EQ);
				setState(914);
				match(BOOLEAN);
				}
				break;
			case T__135:
				enterOuterAlt(_localctx, 16);
				{
				setState(915);
				match(T__135);
				setState(916);
				match(EQ);
				setState(917);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__136:
				enterOuterAlt(_localctx, 17);
				{
				setState(918);
				match(T__136);
				setState(919);
				match(EQ);
				setState(920);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__137:
				enterOuterAlt(_localctx, 18);
				{
				setState(921);
				match(T__137);
				setState(922);
				match(EQ);
				setState(923);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__138:
				enterOuterAlt(_localctx, 19);
				{
				setState(924);
				match(T__138);
				setState(925);
				match(EQ);
				setState(926);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__139:
				enterOuterAlt(_localctx, 20);
				{
				setState(927);
				match(T__139);
				setState(928);
				match(EQ);
				setState(929);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__140:
				enterOuterAlt(_localctx, 21);
				{
				setState(930);
				match(T__140);
				setState(931);
				match(EQ);
				setState(932);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__141:
				enterOuterAlt(_localctx, 22);
				{
				setState(933);
				match(T__141);
				setState(934);
				match(EQ);
				setState(935);
				match(INT);
				}
				break;
			case T__142:
				enterOuterAlt(_localctx, 23);
				{
				setState(936);
				match(T__142);
				setState(937);
				match(EQ);
				setState(938);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__143:
				enterOuterAlt(_localctx, 24);
				{
				setState(939);
				match(T__143);
				setState(940);
				match(EQ);
				setState(941);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__144:
				enterOuterAlt(_localctx, 25);
				{
				setState(942);
				match(T__144);
				setState(943);
				match(EQ);
				setState(944);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__145:
				enterOuterAlt(_localctx, 26);
				{
				setState(945);
				match(T__145);
				setState(946);
				match(EQ);
				setState(947);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__146:
				enterOuterAlt(_localctx, 27);
				{
				setState(948);
				match(T__146);
				setState(949);
				match(EQ);
				setState(950);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__147:
				enterOuterAlt(_localctx, 28);
				{
				setState(951);
				match(T__147);
				setState(952);
				match(EQ);
				setState(953);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__148:
				enterOuterAlt(_localctx, 29);
				{
				setState(954);
				match(T__148);
				setState(955);
				match(EQ);
				setState(956);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__149:
				enterOuterAlt(_localctx, 30);
				{
				setState(957);
				match(T__149);
				setState(958);
				match(EQ);
				setState(959);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__150:
				enterOuterAlt(_localctx, 31);
				{
				setState(960);
				match(T__150);
				setState(961);
				match(EQ);
				setState(962);
				match(BOOLEAN);
				}
				break;
			case T__151:
				enterOuterAlt(_localctx, 32);
				{
				setState(963);
				match(T__151);
				setState(964);
				match(EQ);
				setState(965);
				match(INT);
				}
				break;
			case T__152:
				enterOuterAlt(_localctx, 33);
				{
				setState(966);
				match(T__152);
				setState(967);
				match(EQ);
				setState(968);
				match(BOOLEAN);
				}
				break;
			case T__153:
				enterOuterAlt(_localctx, 34);
				{
				setState(969);
				match(T__153);
				setState(970);
				match(EQ);
				setState(971);
				match(BOOLEAN);
				}
				break;
			case T__154:
				enterOuterAlt(_localctx, 35);
				{
				setState(972);
				match(T__154);
				setState(973);
				match(EQ);
				setState(974);
				match(BOOLEAN);
				}
				break;
			case T__155:
				enterOuterAlt(_localctx, 36);
				{
				setState(975);
				match(T__155);
				setState(976);
				match(EQ);
				setState(977);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__156:
				enterOuterAlt(_localctx, 37);
				{
				setState(978);
				match(T__156);
				setState(979);
				match(EQ);
				setState(980);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__157:
				enterOuterAlt(_localctx, 38);
				{
				setState(981);
				match(T__157);
				setState(982);
				match(EQ);
				setState(983);
				match(INT);
				}
				break;
			case T__158:
				enterOuterAlt(_localctx, 39);
				{
				setState(984);
				match(T__158);
				setState(985);
				match(EQ);
				setState(986);
				match(BOOLEAN);
				}
				break;
			case T__159:
				enterOuterAlt(_localctx, 40);
				{
				setState(987);
				match(T__159);
				setState(988);
				match(EQ);
				setState(989);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__160:
				enterOuterAlt(_localctx, 41);
				{
				setState(990);
				match(T__160);
				setState(991);
				match(EQ);
				setState(992);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__161:
				enterOuterAlt(_localctx, 42);
				{
				setState(993);
				match(T__161);
				setState(994);
				match(EQ);
				setState(995);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__162:
				enterOuterAlt(_localctx, 43);
				{
				setState(996);
				match(T__162);
				setState(997);
				match(EQ);
				setState(998);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__163:
				enterOuterAlt(_localctx, 44);
				{
				setState(999);
				match(T__163);
				setState(1000);
				match(EQ);
				setState(1001);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__164:
				enterOuterAlt(_localctx, 45);
				{
				setState(1002);
				match(T__164);
				setState(1003);
				match(EQ);
				setState(1004);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__165:
				enterOuterAlt(_localctx, 46);
				{
				setState(1005);
				match(T__165);
				setState(1006);
				match(EQ);
				setState(1007);
				match(BOOLEAN);
				}
				break;
			case T__166:
				enterOuterAlt(_localctx, 47);
				{
				setState(1008);
				match(T__166);
				setState(1009);
				match(EQ);
				setState(1010);
				match(INT);
				}
				break;
			case T__167:
				enterOuterAlt(_localctx, 48);
				{
				setState(1011);
				match(T__167);
				setState(1012);
				match(EQ);
				setState(1013);
				match(INT);
				}
				break;
			case T__168:
				enterOuterAlt(_localctx, 49);
				{
				setState(1014);
				match(T__168);
				setState(1015);
				match(EQ);
				setState(1016);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__169:
				enterOuterAlt(_localctx, 50);
				{
				setState(1017);
				match(T__169);
				setState(1018);
				match(EQ);
				setState(1019);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__170:
				enterOuterAlt(_localctx, 51);
				{
				setState(1020);
				match(T__170);
				setState(1021);
				match(EQ);
				setState(1022);
				match(INT);
				}
				break;
			case T__171:
				enterOuterAlt(_localctx, 52);
				{
				setState(1023);
				match(T__171);
				setState(1024);
				match(EQ);
				setState(1025);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__172:
				enterOuterAlt(_localctx, 53);
				{
				setState(1026);
				match(T__172);
				setState(1027);
				match(EQ);
				setState(1028);
				match(INT);
				}
				break;
			case T__173:
				enterOuterAlt(_localctx, 54);
				{
				setState(1029);
				match(T__173);
				setState(1030);
				match(EQ);
				setState(1031);
				match(INT);
				}
				break;
			case T__174:
				enterOuterAlt(_localctx, 55);
				{
				setState(1032);
				match(T__174);
				setState(1033);
				match(EQ);
				setState(1034);
				match(INT);
				}
				break;
			case T__175:
				enterOuterAlt(_localctx, 56);
				{
				setState(1035);
				match(T__175);
				setState(1036);
				match(EQ);
				setState(1037);
				match(BOOLEAN);
				}
				break;
			case T__176:
				enterOuterAlt(_localctx, 57);
				{
				setState(1038);
				match(T__176);
				setState(1039);
				match(EQ);
				setState(1040);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__177:
				enterOuterAlt(_localctx, 58);
				{
				setState(1041);
				match(T__177);
				setState(1042);
				match(EQ);
				setState(1043);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__178:
				enterOuterAlt(_localctx, 59);
				{
				setState(1044);
				match(T__178);
				setState(1045);
				match(EQ);
				setState(1046);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__179:
				enterOuterAlt(_localctx, 60);
				{
				setState(1047);
				match(T__179);
				setState(1048);
				match(EQ);
				setState(1049);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
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
	public static class Locomotor_surface_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public List<Surface_valueContext> surface_value() {
			return getRuleContexts(Surface_valueContext.class);
		}
		public Surface_valueContext surface_value(int i) {
			return getRuleContext(Surface_valueContext.class,i);
		}
		public Locomotor_surface_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_locomotor_surface_property; }
	}

	public final Locomotor_surface_propertyContext locomotor_surface_property() throws RecognitionException {
		Locomotor_surface_propertyContext _localctx = new Locomotor_surface_propertyContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_locomotor_surface_property);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1052);
			match(T__180);
			setState(1053);
			match(EQ);
			setState(1055); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(1054);
				surface_value();
				}
				}
				setState(1057); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==ID );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Locomotor_zbehavior_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Zbehavior_valueContext zbehavior_value() {
			return getRuleContext(Zbehavior_valueContext.class,0);
		}
		public Locomotor_zbehavior_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_locomotor_zbehavior_property; }
	}

	public final Locomotor_zbehavior_propertyContext locomotor_zbehavior_property() throws RecognitionException {
		Locomotor_zbehavior_propertyContext _localctx = new Locomotor_zbehavior_propertyContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_locomotor_zbehavior_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1059);
			match(T__181);
			setState(1060);
			match(EQ);
			setState(1061);
			zbehavior_value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Locomotor_appereance_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Appereance_valueContext appereance_value() {
			return getRuleContext(Appereance_valueContext.class,0);
		}
		public Locomotor_appereance_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_locomotor_appereance_property; }
	}

	public final Locomotor_appereance_propertyContext locomotor_appereance_property() throws RecognitionException {
		Locomotor_appereance_propertyContext _localctx = new Locomotor_appereance_propertyContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_locomotor_appereance_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1063);
			match(T__182);
			setState(1064);
			match(EQ);
			setState(1065);
			appereance_value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Locomotor_movepriority_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Movepriority_valueContext movepriority_value() {
			return getRuleContext(Movepriority_valueContext.class,0);
		}
		public Locomotor_movepriority_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_locomotor_movepriority_property; }
	}

	public final Locomotor_movepriority_propertyContext locomotor_movepriority_property() throws RecognitionException {
		Locomotor_movepriority_propertyContext _localctx = new Locomotor_movepriority_propertyContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_locomotor_movepriority_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1067);
			match(T__183);
			setState(1068);
			match(EQ);
			setState(1069);
			movepriority_value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Surface_valueContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Surface_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_surface_value; }
	}

	public final Surface_valueContext surface_value() throws RecognitionException {
		Surface_valueContext _localctx = new Surface_valueContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_surface_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1071);
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
	public static class Zbehavior_valueContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Zbehavior_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_zbehavior_value; }
	}

	public final Zbehavior_valueContext zbehavior_value() throws RecognitionException {
		Zbehavior_valueContext _localctx = new Zbehavior_valueContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_zbehavior_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1073);
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
	public static class Appereance_valueContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Appereance_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_appereance_value; }
	}

	public final Appereance_valueContext appereance_value() throws RecognitionException {
		Appereance_valueContext _localctx = new Appereance_valueContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_appereance_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1075);
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
	public static class Movepriority_valueContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Movepriority_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_movepriority_value; }
	}

	public final Movepriority_valueContext movepriority_value() throws RecognitionException {
		Movepriority_valueContext _localctx = new Movepriority_valueContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_movepriority_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1077);
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
	public static class WeaponClassContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<Weapon_propertiesContext> weapon_properties() {
			return getRuleContexts(Weapon_propertiesContext.class);
		}
		public Weapon_propertiesContext weapon_properties(int i) {
			return getRuleContext(Weapon_propertiesContext.class,i);
		}
		public WeaponClassContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_weaponClass; }
	}

	public final WeaponClassContext weaponClass() throws RecognitionException {
		WeaponClassContext _localctx = new WeaponClassContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_weaponClass);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1079);
			match(T__184);
			setState(1080);
			match(ID);
			setState(1084);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 186)) & ~0x3f) == 0 && ((1L << (_la - 186)) & 274877906943L) != 0)) {
				{
				{
				setState(1081);
				weapon_properties();
				}
				}
				setState(1086);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1087);
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
	public static class Weapon_propertiesContext extends ParserRuleContext {
		public Weapon_damagetype_propertyContext weapon_damagetype_property() {
			return getRuleContext(Weapon_damagetype_propertyContext.class,0);
		}
		public Weapon_deathtype_propertyContext weapon_deathtype_property() {
			return getRuleContext(Weapon_deathtype_propertyContext.class,0);
		}
		public Weapon_damageaffects_propertyContext weapon_damageaffects_property() {
			return getRuleContext(Weapon_damageaffects_propertyContext.class,0);
		}
		public Weapon_weaponbonus_propertyContext weapon_weaponbonus_property() {
			return getRuleContext(Weapon_weaponbonus_propertyContext.class,0);
		}
		public Weapon_lasterbone_propertyContext weapon_lasterbone_property() {
			return getRuleContext(Weapon_lasterbone_propertyContext.class,0);
		}
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode INT() { return getToken(MapIniParser.INT, 0); }
		public TerminalNode FLOAT() { return getToken(MapIniParser.FLOAT, 0); }
		public TerminalNode BOOLEAN() { return getToken(MapIniParser.BOOLEAN, 0); }
		public Particlesystem_valueContext particlesystem_value() {
			return getRuleContext(Particlesystem_valueContext.class,0);
		}
		public TerminalNode VETERENCY() { return getToken(MapIniParser.VETERENCY, 0); }
		public Object_valueContext object_value() {
			return getRuleContext(Object_valueContext.class,0);
		}
		public Fxlist_valueContext fxlist_value() {
			return getRuleContext(Fxlist_valueContext.class,0);
		}
		public Audioevent_valueContext audioevent_value() {
			return getRuleContext(Audioevent_valueContext.class,0);
		}
		public List<TerminalNode> ID() { return getTokens(MapIniParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(MapIniParser.ID, i);
		}
		public Weapon_propertiesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_weapon_properties; }
	}

	public final Weapon_propertiesContext weapon_properties() throws RecognitionException {
		Weapon_propertiesContext _localctx = new Weapon_propertiesContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_weapon_properties);
		int _la;
		try {
			setState(1199);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__218:
				enterOuterAlt(_localctx, 1);
				{
				setState(1089);
				weapon_damagetype_property();
				}
				break;
			case T__219:
				enterOuterAlt(_localctx, 2);
				{
				setState(1090);
				weapon_deathtype_property();
				}
				break;
			case T__220:
				enterOuterAlt(_localctx, 3);
				{
				setState(1091);
				weapon_damageaffects_property();
				}
				break;
			case T__221:
				enterOuterAlt(_localctx, 4);
				{
				setState(1092);
				weapon_weaponbonus_property();
				}
				break;
			case T__222:
				enterOuterAlt(_localctx, 5);
				{
				setState(1093);
				weapon_lasterbone_property();
				}
				break;
			case T__185:
				enterOuterAlt(_localctx, 6);
				{
				setState(1094);
				match(T__185);
				setState(1095);
				match(EQ);
				setState(1096);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__186:
				enterOuterAlt(_localctx, 7);
				{
				setState(1097);
				match(T__186);
				setState(1098);
				match(EQ);
				setState(1099);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__187:
				enterOuterAlt(_localctx, 8);
				{
				setState(1100);
				match(T__187);
				setState(1101);
				match(EQ);
				setState(1102);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__188:
				enterOuterAlt(_localctx, 9);
				{
				setState(1103);
				match(T__188);
				setState(1104);
				match(EQ);
				setState(1105);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__189:
				enterOuterAlt(_localctx, 10);
				{
				setState(1106);
				match(T__189);
				setState(1107);
				match(EQ);
				setState(1108);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__190:
				enterOuterAlt(_localctx, 11);
				{
				setState(1109);
				match(T__190);
				setState(1110);
				match(EQ);
				setState(1111);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__191:
				enterOuterAlt(_localctx, 12);
				{
				setState(1112);
				match(T__191);
				setState(1113);
				match(EQ);
				setState(1114);
				match(INT);
				}
				break;
			case T__192:
				enterOuterAlt(_localctx, 13);
				{
				setState(1115);
				match(T__192);
				setState(1116);
				match(EQ);
				setState(1117);
				match(BOOLEAN);
				}
				break;
			case T__193:
				enterOuterAlt(_localctx, 14);
				{
				setState(1118);
				match(T__193);
				setState(1119);
				match(EQ);
				setState(1120);
				match(BOOLEAN);
				}
				break;
			case T__194:
				enterOuterAlt(_localctx, 15);
				{
				setState(1121);
				match(T__194);
				setState(1122);
				match(EQ);
				setState(1123);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__195:
				enterOuterAlt(_localctx, 16);
				{
				setState(1124);
				match(T__195);
				setState(1125);
				match(EQ);
				setState(1126);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__196:
				enterOuterAlt(_localctx, 17);
				{
				setState(1127);
				match(T__196);
				setState(1128);
				match(EQ);
				setState(1129);
				particlesystem_value();
				}
				break;
			case T__197:
				enterOuterAlt(_localctx, 18);
				{
				setState(1130);
				match(T__197);
				setState(1131);
				match(EQ);
				setState(1132);
				match(VETERENCY);
				setState(1133);
				particlesystem_value();
				}
				break;
			case T__198:
				enterOuterAlt(_localctx, 19);
				{
				setState(1134);
				match(T__198);
				setState(1135);
				match(EQ);
				setState(1136);
				object_value();
				}
				break;
			case T__199:
				enterOuterAlt(_localctx, 20);
				{
				setState(1137);
				match(T__199);
				setState(1138);
				match(EQ);
				setState(1139);
				match(BOOLEAN);
				}
				break;
			case T__200:
				enterOuterAlt(_localctx, 21);
				{
				setState(1140);
				match(T__200);
				setState(1141);
				match(EQ);
				setState(1142);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__201:
				enterOuterAlt(_localctx, 22);
				{
				setState(1143);
				match(T__201);
				setState(1144);
				match(EQ);
				setState(1145);
				match(INT);
				}
				break;
			case T__202:
				enterOuterAlt(_localctx, 23);
				{
				setState(1146);
				match(T__202);
				setState(1147);
				match(EQ);
				setState(1148);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__203:
				enterOuterAlt(_localctx, 24);
				{
				setState(1149);
				match(T__203);
				setState(1150);
				match(EQ);
				setState(1151);
				match(BOOLEAN);
				}
				break;
			case T__204:
				enterOuterAlt(_localctx, 25);
				{
				setState(1152);
				match(T__204);
				setState(1153);
				match(EQ);
				setState(1154);
				fxlist_value();
				}
				break;
			case T__205:
				enterOuterAlt(_localctx, 26);
				{
				setState(1155);
				match(T__205);
				setState(1156);
				match(EQ);
				setState(1157);
				match(VETERENCY);
				setState(1158);
				fxlist_value();
				}
				break;
			case T__206:
				enterOuterAlt(_localctx, 27);
				{
				setState(1159);
				match(T__206);
				setState(1160);
				match(EQ);
				setState(1161);
				fxlist_value();
				}
				break;
			case T__207:
				enterOuterAlt(_localctx, 28);
				{
				setState(1162);
				match(T__207);
				setState(1163);
				match(EQ);
				setState(1164);
				audioevent_value();
				}
				break;
			case T__208:
				enterOuterAlt(_localctx, 29);
				{
				setState(1165);
				match(T__208);
				setState(1166);
				match(EQ);
				setState(1167);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__209:
				enterOuterAlt(_localctx, 30);
				{
				setState(1168);
				match(T__209);
				setState(1169);
				match(EQ);
				setState(1170);
				match(INT);
				}
				break;
			case T__210:
				enterOuterAlt(_localctx, 31);
				{
				setState(1171);
				match(T__210);
				setState(1172);
				match(EQ);
				setState(1173);
				match(INT);
				}
				break;
			case T__211:
				enterOuterAlt(_localctx, 32);
				{
				setState(1174);
				match(T__211);
				setState(1175);
				match(EQ);
				setState(1176);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__212:
				enterOuterAlt(_localctx, 33);
				{
				setState(1177);
				match(T__212);
				setState(1178);
				match(EQ);
				setState(1180); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(1179);
					match(ID);
					}
					}
					setState(1182); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==ID );
				}
				break;
			case T__213:
				enterOuterAlt(_localctx, 34);
				{
				setState(1184);
				match(T__213);
				setState(1185);
				match(EQ);
				setState(1186);
				match(INT);
				}
				break;
			case T__214:
				enterOuterAlt(_localctx, 35);
				{
				setState(1187);
				match(T__214);
				setState(1188);
				match(EQ);
				setState(1189);
				match(BOOLEAN);
				}
				break;
			case T__215:
				enterOuterAlt(_localctx, 36);
				{
				setState(1190);
				match(T__215);
				setState(1191);
				match(EQ);
				setState(1192);
				match(BOOLEAN);
				}
				break;
			case T__216:
				enterOuterAlt(_localctx, 37);
				{
				setState(1193);
				match(T__216);
				setState(1194);
				match(EQ);
				setState(1195);
				match(BOOLEAN);
				}
				break;
			case T__217:
				enterOuterAlt(_localctx, 38);
				{
				setState(1196);
				match(T__217);
				setState(1197);
				match(EQ);
				setState(1198);
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
	public static class Weapon_damagetype_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public DamageType_valueContext damageType_value() {
			return getRuleContext(DamageType_valueContext.class,0);
		}
		public Weapon_damagetype_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_weapon_damagetype_property; }
	}

	public final Weapon_damagetype_propertyContext weapon_damagetype_property() throws RecognitionException {
		Weapon_damagetype_propertyContext _localctx = new Weapon_damagetype_propertyContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_weapon_damagetype_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1201);
			match(T__218);
			setState(1202);
			match(EQ);
			setState(1203);
			damageType_value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Weapon_deathtype_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public DeathType_valueContext deathType_value() {
			return getRuleContext(DeathType_valueContext.class,0);
		}
		public Weapon_deathtype_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_weapon_deathtype_property; }
	}

	public final Weapon_deathtype_propertyContext weapon_deathtype_property() throws RecognitionException {
		Weapon_deathtype_propertyContext _localctx = new Weapon_deathtype_propertyContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_weapon_deathtype_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1205);
			match(T__219);
			setState(1206);
			match(EQ);
			setState(1207);
			deathType_value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Weapon_damageaffects_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public List<DamageAffects_valueContext> damageAffects_value() {
			return getRuleContexts(DamageAffects_valueContext.class);
		}
		public DamageAffects_valueContext damageAffects_value(int i) {
			return getRuleContext(DamageAffects_valueContext.class,i);
		}
		public Weapon_damageaffects_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_weapon_damageaffects_property; }
	}

	public final Weapon_damageaffects_propertyContext weapon_damageaffects_property() throws RecognitionException {
		Weapon_damageaffects_propertyContext _localctx = new Weapon_damageaffects_propertyContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_weapon_damageaffects_property);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1209);
			match(T__220);
			setState(1210);
			match(EQ);
			setState(1212); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(1211);
				damageAffects_value();
				}
				}
				setState(1214); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==ID );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Weapon_weaponbonus_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Weapon_weaponbonus_condition_valueContext weapon_weaponbonus_condition_value() {
			return getRuleContext(Weapon_weaponbonus_condition_valueContext.class,0);
		}
		public Weapon_weaponbonus_bonus_valueContext weapon_weaponbonus_bonus_value() {
			return getRuleContext(Weapon_weaponbonus_bonus_valueContext.class,0);
		}
		public TerminalNode PROCENT() { return getToken(MapIniParser.PROCENT, 0); }
		public Weapon_weaponbonus_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_weapon_weaponbonus_property; }
	}

	public final Weapon_weaponbonus_propertyContext weapon_weaponbonus_property() throws RecognitionException {
		Weapon_weaponbonus_propertyContext _localctx = new Weapon_weaponbonus_propertyContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_weapon_weaponbonus_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1216);
			match(T__221);
			setState(1217);
			match(EQ);
			setState(1218);
			weapon_weaponbonus_condition_value();
			setState(1219);
			weapon_weaponbonus_bonus_value();
			setState(1220);
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
	public static class Weapon_lasterbone_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public DamageType_valueContext damageType_value() {
			return getRuleContext(DamageType_valueContext.class,0);
		}
		public Weapon_lasterbone_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_weapon_lasterbone_property; }
	}

	public final Weapon_lasterbone_propertyContext weapon_lasterbone_property() throws RecognitionException {
		Weapon_lasterbone_propertyContext _localctx = new Weapon_lasterbone_propertyContext(_ctx, getState());
		enterRule(_localctx, 106, RULE_weapon_lasterbone_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1222);
			match(T__222);
			setState(1223);
			match(EQ);
			setState(1224);
			damageType_value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Weapon_weaponbonus_condition_valueContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Weapon_weaponbonus_condition_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_weapon_weaponbonus_condition_value; }
	}

	public final Weapon_weaponbonus_condition_valueContext weapon_weaponbonus_condition_value() throws RecognitionException {
		Weapon_weaponbonus_condition_valueContext _localctx = new Weapon_weaponbonus_condition_valueContext(_ctx, getState());
		enterRule(_localctx, 108, RULE_weapon_weaponbonus_condition_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1226);
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
	public static class Weapon_weaponbonus_bonus_valueContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Weapon_weaponbonus_bonus_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_weapon_weaponbonus_bonus_value; }
	}

	public final Weapon_weaponbonus_bonus_valueContext weapon_weaponbonus_bonus_value() throws RecognitionException {
		Weapon_weaponbonus_bonus_valueContext _localctx = new Weapon_weaponbonus_bonus_valueContext(_ctx, getState());
		enterRule(_localctx, 110, RULE_weapon_weaponbonus_bonus_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1228);
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
	public static class DamageType_valueContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public DamageType_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_damageType_value; }
	}

	public final DamageType_valueContext damageType_value() throws RecognitionException {
		DamageType_valueContext _localctx = new DamageType_valueContext(_ctx, getState());
		enterRule(_localctx, 112, RULE_damageType_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1230);
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
	public static class DeathType_valueContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public DeathType_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_deathType_value; }
	}

	public final DeathType_valueContext deathType_value() throws RecognitionException {
		DeathType_valueContext _localctx = new DeathType_valueContext(_ctx, getState());
		enterRule(_localctx, 114, RULE_deathType_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1232);
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
	public static class DamageAffects_valueContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public DamageAffects_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_damageAffects_value; }
	}

	public final DamageAffects_valueContext damageAffects_value() throws RecognitionException {
		DamageAffects_valueContext _localctx = new DamageAffects_valueContext(_ctx, getState());
		enterRule(_localctx, 116, RULE_damageAffects_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1234);
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
	public static class WeatherClassContext extends ParserRuleContext {
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<Weather_propertiesContext> weather_properties() {
			return getRuleContexts(Weather_propertiesContext.class);
		}
		public Weather_propertiesContext weather_properties(int i) {
			return getRuleContext(Weather_propertiesContext.class,i);
		}
		public WeatherClassContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_weatherClass; }
	}

	public final WeatherClassContext weatherClass() throws RecognitionException {
		WeatherClassContext _localctx = new WeatherClassContext(_ctx, getState());
		enterRule(_localctx, 118, RULE_weatherClass);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1236);
			match(T__223);
			setState(1240);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 225)) & ~0x3f) == 0 && ((1L << (_la - 225)) & 8191L) != 0)) {
				{
				{
				setState(1237);
				weather_properties();
				}
				}
				setState(1242);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1243);
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
	public static class Weather_propertiesContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode BOOLEAN() { return getToken(MapIniParser.BOOLEAN, 0); }
		public FileContext file() {
			return getRuleContext(FileContext.class,0);
		}
		public TerminalNode INT() { return getToken(MapIniParser.INT, 0); }
		public TerminalNode FLOAT() { return getToken(MapIniParser.FLOAT, 0); }
		public Weather_propertiesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_weather_properties; }
	}

	public final Weather_propertiesContext weather_properties() throws RecognitionException {
		Weather_propertiesContext _localctx = new Weather_propertiesContext(_ctx, getState());
		enterRule(_localctx, 120, RULE_weather_properties);
		int _la;
		try {
			setState(1284);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__224:
				enterOuterAlt(_localctx, 1);
				{
				setState(1245);
				match(T__224);
				setState(1246);
				match(EQ);
				setState(1247);
				match(BOOLEAN);
				}
				break;
			case T__225:
				enterOuterAlt(_localctx, 2);
				{
				setState(1248);
				match(T__225);
				setState(1249);
				match(EQ);
				setState(1250);
				file();
				}
				break;
			case T__226:
				enterOuterAlt(_localctx, 3);
				{
				setState(1251);
				match(T__226);
				setState(1252);
				match(EQ);
				setState(1253);
				match(INT);
				}
				break;
			case T__227:
				enterOuterAlt(_localctx, 4);
				{
				setState(1254);
				match(T__227);
				setState(1255);
				match(EQ);
				setState(1256);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__228:
				enterOuterAlt(_localctx, 5);
				{
				setState(1257);
				match(T__228);
				setState(1258);
				match(EQ);
				setState(1259);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__229:
				enterOuterAlt(_localctx, 6);
				{
				setState(1260);
				match(T__229);
				setState(1261);
				match(EQ);
				setState(1262);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__230:
				enterOuterAlt(_localctx, 7);
				{
				setState(1263);
				match(T__230);
				setState(1264);
				match(EQ);
				setState(1265);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__231:
				enterOuterAlt(_localctx, 8);
				{
				setState(1266);
				match(T__231);
				setState(1267);
				match(EQ);
				setState(1268);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__232:
				enterOuterAlt(_localctx, 9);
				{
				setState(1269);
				match(T__232);
				setState(1270);
				match(EQ);
				setState(1271);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__233:
				enterOuterAlt(_localctx, 10);
				{
				setState(1272);
				match(T__233);
				setState(1273);
				match(EQ);
				setState(1274);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__234:
				enterOuterAlt(_localctx, 11);
				{
				setState(1275);
				match(T__234);
				setState(1276);
				match(EQ);
				setState(1277);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case T__235:
				enterOuterAlt(_localctx, 12);
				{
				setState(1278);
				match(T__235);
				setState(1279);
				match(EQ);
				setState(1280);
				match(BOOLEAN);
				}
				break;
			case T__236:
				enterOuterAlt(_localctx, 13);
				{
				setState(1281);
				match(T__236);
				setState(1282);
				match(EQ);
				setState(1283);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
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
	public static class EndContext extends ParserRuleContext {
		public EndContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_end; }
	}

	public final EndContext end() throws RecognitionException {
		EndContext _localctx = new EndContext(_ctx, getState());
		enterRule(_localctx, 122, RULE_end);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1286);
			_la = _input.LA(1);
			if ( !(((((_la - 238)) & ~0x3f) == 0 && ((1L << (_la - 238)) & 7L) != 0)) ) {
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
		enterRule(_localctx, 124, RULE_file);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1288);
			match(ID);
			setState(1289);
			match(T__240);
			setState(1290);
			_la = _input.LA(1);
			if ( !(_la==T__241 || _la==T__242) ) {
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
		enterRule(_localctx, 126, RULE_cb_command_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1292);
			match(T__243);
			setState(1293);
			match(EQ);
			setState(1294);
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
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Cb_command_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cb_command_value; }
	}

	public final Cb_command_valueContext cb_command_value() throws RecognitionException {
		Cb_command_valueContext _localctx = new Cb_command_valueContext(_ctx, getState());
		enterRule(_localctx, 128, RULE_cb_command_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1296);
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
		enterRule(_localctx, 130, RULE_cb_options_property);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1298);
			match(T__244);
			setState(1299);
			match(EQ);
			setState(1301); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(1300);
				cb_options_value();
				}
				}
				setState(1303); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==ID );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
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
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Cb_options_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cb_options_value; }
	}

	public final Cb_options_valueContext cb_options_value() throws RecognitionException {
		Cb_options_valueContext _localctx = new Cb_options_valueContext(_ctx, getState());
		enterRule(_localctx, 132, RULE_cb_options_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1305);
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
		enterRule(_localctx, 134, RULE_cb_buttonimage_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1307);
			match(T__245);
			setState(1308);
			match(EQ);
			setState(1309);
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
		enterRule(_localctx, 136, RULE_cb_buttonbordertype_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1311);
			match(T__246);
			setState(1312);
			match(EQ);
			setState(1313);
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
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Cb_buttonbordertype_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cb_buttonbordertype_value; }
	}

	public final Cb_buttonbordertype_valueContext cb_buttonbordertype_value() throws RecognitionException {
		Cb_buttonbordertype_valueContext _localctx = new Cb_buttonbordertype_valueContext(_ctx, getState());
		enterRule(_localctx, 138, RULE_cb_buttonbordertype_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1315);
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
	public static class Cb_textlabel_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Cb_textlabel_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cb_textlabel_property; }
	}

	public final Cb_textlabel_propertyContext cb_textlabel_property() throws RecognitionException {
		Cb_textlabel_propertyContext _localctx = new Cb_textlabel_propertyContext(_ctx, getState());
		enterRule(_localctx, 140, RULE_cb_textlabel_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1317);
			match(T__247);
			setState(1318);
			match(EQ);
			setState(1319);
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
	public static class Cb_descriptionlabel_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Cb_descriptionlabel_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cb_descriptionlabel_property; }
	}

	public final Cb_descriptionlabel_propertyContext cb_descriptionlabel_property() throws RecognitionException {
		Cb_descriptionlabel_propertyContext _localctx = new Cb_descriptionlabel_propertyContext(_ctx, getState());
		enterRule(_localctx, 142, RULE_cb_descriptionlabel_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1321);
			match(T__248);
			setState(1322);
			match(EQ);
			setState(1323);
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
	public static class Cb_conflictinglabel_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Cb_conflictinglabel_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cb_conflictinglabel_property; }
	}

	public final Cb_conflictinglabel_propertyContext cb_conflictinglabel_property() throws RecognitionException {
		Cb_conflictinglabel_propertyContext _localctx = new Cb_conflictinglabel_propertyContext(_ctx, getState());
		enterRule(_localctx, 144, RULE_cb_conflictinglabel_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1325);
			match(T__249);
			setState(1326);
			match(EQ);
			setState(1327);
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
		enterRule(_localctx, 146, RULE_cb_cursorname_propery);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1329);
			match(T__250);
			setState(1330);
			match(EQ);
			setState(1331);
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
		enterRule(_localctx, 148, RULE_cb_radius_cursorname_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1333);
			match(T__251);
			setState(1334);
			match(EQ);
			setState(1335);
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
		enterRule(_localctx, 150, RULE_cb_invalid_cursorname_propery);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1337);
			match(T__252);
			setState(1338);
			match(EQ);
			setState(1339);
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
		enterRule(_localctx, 152, RULE_cb_unitspecificsound_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1341);
			match(T__253);
			setState(1342);
			match(EQ);
			setState(1343);
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
	public static class Cb_maxshotsfire_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode INT() { return getToken(MapIniParser.INT, 0); }
		public Cb_maxshotsfire_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cb_maxshotsfire_property; }
	}

	public final Cb_maxshotsfire_propertyContext cb_maxshotsfire_property() throws RecognitionException {
		Cb_maxshotsfire_propertyContext _localctx = new Cb_maxshotsfire_propertyContext(_ctx, getState());
		enterRule(_localctx, 154, RULE_cb_maxshotsfire_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1345);
			match(T__254);
			setState(1346);
			match(EQ);
			setState(1347);
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
	public static class Dfx_throttletime_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public DamageType_valueContext damageType_value() {
			return getRuleContext(DamageType_valueContext.class,0);
		}
		public TerminalNode INT() { return getToken(MapIniParser.INT, 0); }
		public Dfx_throttletime_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dfx_throttletime_property; }
	}

	public final Dfx_throttletime_propertyContext dfx_throttletime_property() throws RecognitionException {
		Dfx_throttletime_propertyContext _localctx = new Dfx_throttletime_propertyContext(_ctx, getState());
		enterRule(_localctx, 156, RULE_dfx_throttletime_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1349);
			match(T__255);
			setState(1350);
			match(EQ);
			setState(1351);
			damageType_value();
			setState(1352);
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
	public static class Dfx_amountformajorfx_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public DamageType_valueContext damageType_value() {
			return getRuleContext(DamageType_valueContext.class,0);
		}
		public TerminalNode FLOAT() { return getToken(MapIniParser.FLOAT, 0); }
		public Dfx_amountformajorfx_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dfx_amountformajorfx_property; }
	}

	public final Dfx_amountformajorfx_propertyContext dfx_amountformajorfx_property() throws RecognitionException {
		Dfx_amountformajorfx_propertyContext _localctx = new Dfx_amountformajorfx_propertyContext(_ctx, getState());
		enterRule(_localctx, 158, RULE_dfx_amountformajorfx_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1354);
			match(T__256);
			setState(1355);
			match(EQ);
			setState(1356);
			damageType_value();
			setState(1357);
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
	public static class Dfx_majorfx_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public DamageType_valueContext damageType_value() {
			return getRuleContext(DamageType_valueContext.class,0);
		}
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Dfx_majorfx_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dfx_majorfx_property; }
	}

	public final Dfx_majorfx_propertyContext dfx_majorfx_property() throws RecognitionException {
		Dfx_majorfx_propertyContext _localctx = new Dfx_majorfx_propertyContext(_ctx, getState());
		enterRule(_localctx, 160, RULE_dfx_majorfx_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1359);
			match(T__257);
			setState(1360);
			match(EQ);
			setState(1361);
			damageType_value();
			setState(1362);
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
	public static class Dfx_minorfx_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public DamageType_valueContext damageType_value() {
			return getRuleContext(DamageType_valueContext.class,0);
		}
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Dfx_minorfx_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dfx_minorfx_property; }
	}

	public final Dfx_minorfx_propertyContext dfx_minorfx_property() throws RecognitionException {
		Dfx_minorfx_propertyContext _localctx = new Dfx_minorfx_propertyContext(_ctx, getState());
		enterRule(_localctx, 162, RULE_dfx_minorfx_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1364);
			match(T__258);
			setState(1365);
			match(EQ);
			setState(1366);
			damageType_value();
			setState(1367);
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
	public static class Dfx_vetmajorfx_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode VETERENCY() { return getToken(MapIniParser.VETERENCY, 0); }
		public DamageType_valueContext damageType_value() {
			return getRuleContext(DamageType_valueContext.class,0);
		}
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Dfx_vetmajorfx_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dfx_vetmajorfx_property; }
	}

	public final Dfx_vetmajorfx_propertyContext dfx_vetmajorfx_property() throws RecognitionException {
		Dfx_vetmajorfx_propertyContext _localctx = new Dfx_vetmajorfx_propertyContext(_ctx, getState());
		enterRule(_localctx, 164, RULE_dfx_vetmajorfx_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1369);
			match(T__259);
			setState(1370);
			match(EQ);
			setState(1371);
			match(VETERENCY);
			setState(1372);
			damageType_value();
			setState(1373);
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
	public static class Dfx_vetminorfx_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode VETERENCY() { return getToken(MapIniParser.VETERENCY, 0); }
		public DamageType_valueContext damageType_value() {
			return getRuleContext(DamageType_valueContext.class,0);
		}
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Dfx_vetminorfx_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dfx_vetminorfx_property; }
	}

	public final Dfx_vetminorfx_propertyContext dfx_vetminorfx_property() throws RecognitionException {
		Dfx_vetminorfx_propertyContext _localctx = new Dfx_vetminorfx_propertyContext(_ctx, getState());
		enterRule(_localctx, 166, RULE_dfx_vetminorfx_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1375);
			match(T__260);
			setState(1376);
			match(EQ);
			setState(1377);
			match(VETERENCY);
			setState(1378);
			damageType_value();
			setState(1379);
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
	public static class Dgi_useplayercolor_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode BOOLEAN() { return getToken(MapIniParser.BOOLEAN, 0); }
		public Dgi_useplayercolor_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dgi_useplayercolor_property; }
	}

	public final Dgi_useplayercolor_propertyContext dgi_useplayercolor_property() throws RecognitionException {
		Dgi_useplayercolor_propertyContext _localctx = new Dgi_useplayercolor_propertyContext(_ctx, getState());
		enterRule(_localctx, 168, RULE_dgi_useplayercolor_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1381);
			match(T__261);
			setState(1382);
			match(EQ);
			setState(1383);
			match(BOOLEAN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Dgi_colorfortext_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode R() { return getToken(MapIniParser.R, 0); }
		public TerminalNode G() { return getToken(MapIniParser.G, 0); }
		public TerminalNode B() { return getToken(MapIniParser.B, 0); }
		public TerminalNode A() { return getToken(MapIniParser.A, 0); }
		public Dgi_colorfortext_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dgi_colorfortext_property; }
	}

	public final Dgi_colorfortext_propertyContext dgi_colorfortext_property() throws RecognitionException {
		Dgi_colorfortext_propertyContext _localctx = new Dgi_colorfortext_propertyContext(_ctx, getState());
		enterRule(_localctx, 170, RULE_dgi_colorfortext_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1385);
			match(T__262);
			setState(1386);
			match(EQ);
			setState(1387);
			match(R);
			setState(1388);
			match(G);
			setState(1389);
			match(B);
			setState(1390);
			match(A);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Dgi_colordropshadow_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode R() { return getToken(MapIniParser.R, 0); }
		public TerminalNode G() { return getToken(MapIniParser.G, 0); }
		public TerminalNode B() { return getToken(MapIniParser.B, 0); }
		public TerminalNode A() { return getToken(MapIniParser.A, 0); }
		public Dgi_colordropshadow_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dgi_colordropshadow_property; }
	}

	public final Dgi_colordropshadow_propertyContext dgi_colordropshadow_property() throws RecognitionException {
		Dgi_colordropshadow_propertyContext _localctx = new Dgi_colordropshadow_propertyContext(_ctx, getState());
		enterRule(_localctx, 172, RULE_dgi_colordropshadow_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1392);
			match(T__263);
			setState(1393);
			match(EQ);
			setState(1394);
			match(R);
			setState(1395);
			match(G);
			setState(1396);
			match(B);
			setState(1397);
			match(A);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Dgi_dropshadowoffsetX_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode INT() { return getToken(MapIniParser.INT, 0); }
		public Dgi_dropshadowoffsetX_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dgi_dropshadowoffsetX_property; }
	}

	public final Dgi_dropshadowoffsetX_propertyContext dgi_dropshadowoffsetX_property() throws RecognitionException {
		Dgi_dropshadowoffsetX_propertyContext _localctx = new Dgi_dropshadowoffsetX_propertyContext(_ctx, getState());
		enterRule(_localctx, 174, RULE_dgi_dropshadowoffsetX_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1399);
			match(T__264);
			setState(1400);
			match(EQ);
			setState(1401);
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
	public static class Dgi_dropshadowoffsetY_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode INT() { return getToken(MapIniParser.INT, 0); }
		public Dgi_dropshadowoffsetY_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dgi_dropshadowoffsetY_property; }
	}

	public final Dgi_dropshadowoffsetY_propertyContext dgi_dropshadowoffsetY_property() throws RecognitionException {
		Dgi_dropshadowoffsetY_propertyContext _localctx = new Dgi_dropshadowoffsetY_propertyContext(_ctx, getState());
		enterRule(_localctx, 176, RULE_dgi_dropshadowoffsetY_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1403);
			match(T__265);
			setState(1404);
			match(EQ);
			setState(1405);
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
	public static class Dgi_fontname_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public List<TerminalNode> ID() { return getTokens(MapIniParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(MapIniParser.ID, i);
		}
		public Dgi_fontname_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dgi_fontname_property; }
	}

	public final Dgi_fontname_propertyContext dgi_fontname_property() throws RecognitionException {
		Dgi_fontname_propertyContext _localctx = new Dgi_fontname_propertyContext(_ctx, getState());
		enterRule(_localctx, 178, RULE_dgi_fontname_property);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1407);
			match(T__266);
			setState(1408);
			match(EQ);
			setState(1410); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(1409);
				match(ID);
				}
				}
				setState(1412); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==ID );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Dgi_fontsize_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode INT() { return getToken(MapIniParser.INT, 0); }
		public Dgi_fontsize_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dgi_fontsize_property; }
	}

	public final Dgi_fontsize_propertyContext dgi_fontsize_property() throws RecognitionException {
		Dgi_fontsize_propertyContext _localctx = new Dgi_fontsize_propertyContext(_ctx, getState());
		enterRule(_localctx, 180, RULE_dgi_fontsize_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1414);
			match(T__267);
			setState(1415);
			match(EQ);
			setState(1416);
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
	public static class Dgi_fontisbold_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode BOOLEAN() { return getToken(MapIniParser.BOOLEAN, 0); }
		public Dgi_fontisbold_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dgi_fontisbold_property; }
	}

	public final Dgi_fontisbold_propertyContext dgi_fontisbold_property() throws RecognitionException {
		Dgi_fontisbold_propertyContext _localctx = new Dgi_fontisbold_propertyContext(_ctx, getState());
		enterRule(_localctx, 182, RULE_dgi_fontisbold_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1418);
			match(T__268);
			setState(1419);
			match(EQ);
			setState(1420);
			match(BOOLEAN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Dgi_drawposXperc_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode PROCENT() { return getToken(MapIniParser.PROCENT, 0); }
		public Dgi_drawposXperc_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dgi_drawposXperc_property; }
	}

	public final Dgi_drawposXperc_propertyContext dgi_drawposXperc_property() throws RecognitionException {
		Dgi_drawposXperc_propertyContext _localctx = new Dgi_drawposXperc_propertyContext(_ctx, getState());
		enterRule(_localctx, 184, RULE_dgi_drawposXperc_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1422);
			match(T__269);
			setState(1423);
			match(EQ);
			setState(1424);
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
	public static class Dgi_drawposYperc_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode INT() { return getToken(MapIniParser.INT, 0); }
		public Dgi_drawposYperc_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dgi_drawposYperc_property; }
	}

	public final Dgi_drawposYperc_propertyContext dgi_drawposYperc_property() throws RecognitionException {
		Dgi_drawposYperc_propertyContext _localctx = new Dgi_drawposYperc_propertyContext(_ctx, getState());
		enterRule(_localctx, 186, RULE_dgi_drawposYperc_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1426);
			match(T__270);
			setState(1427);
			match(EQ);
			setState(1428);
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
	public static class Fxlist_ps_name_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Particlesystem_valueContext particlesystem_value() {
			return getRuleContext(Particlesystem_valueContext.class,0);
		}
		public Fxlist_ps_name_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_ps_name_property; }
	}

	public final Fxlist_ps_name_propertyContext fxlist_ps_name_property() throws RecognitionException {
		Fxlist_ps_name_propertyContext _localctx = new Fxlist_ps_name_propertyContext(_ctx, getState());
		enterRule(_localctx, 188, RULE_fxlist_ps_name_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1430);
			match(T__271);
			setState(1431);
			match(EQ);
			setState(1432);
			particlesystem_value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Fxlist_ps_count_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode INT() { return getToken(MapIniParser.INT, 0); }
		public Rand_valueContext rand_value() {
			return getRuleContext(Rand_valueContext.class,0);
		}
		public Fxlist_ps_count_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_ps_count_property; }
	}

	public final Fxlist_ps_count_propertyContext fxlist_ps_count_property() throws RecognitionException {
		Fxlist_ps_count_propertyContext _localctx = new Fxlist_ps_count_propertyContext(_ctx, getState());
		enterRule(_localctx, 190, RULE_fxlist_ps_count_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1434);
			match(T__272);
			setState(1435);
			match(EQ);
			setState(1438);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,55,_ctx) ) {
			case 1:
				{
				setState(1436);
				match(INT);
				}
				break;
			case 2:
				{
				setState(1437);
				rand_value();
				}
				break;
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
	public static class Fxlist_ps_offset_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Coord3DContext coord3D() {
			return getRuleContext(Coord3DContext.class,0);
		}
		public Fxlist_ps_offset_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_ps_offset_property; }
	}

	public final Fxlist_ps_offset_propertyContext fxlist_ps_offset_property() throws RecognitionException {
		Fxlist_ps_offset_propertyContext _localctx = new Fxlist_ps_offset_propertyContext(_ctx, getState());
		enterRule(_localctx, 192, RULE_fxlist_ps_offset_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1440);
			match(T__273);
			setState(1441);
			match(EQ);
			setState(1442);
			coord3D();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Fxlist_ps_radius_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Rand_valueContext rand_value() {
			return getRuleContext(Rand_valueContext.class,0);
		}
		public TerminalNode INT() { return getToken(MapIniParser.INT, 0); }
		public TerminalNode FLOAT() { return getToken(MapIniParser.FLOAT, 0); }
		public Fxlist_ps_radius_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_ps_radius_property; }
	}

	public final Fxlist_ps_radius_propertyContext fxlist_ps_radius_property() throws RecognitionException {
		Fxlist_ps_radius_propertyContext _localctx = new Fxlist_ps_radius_propertyContext(_ctx, getState());
		enterRule(_localctx, 194, RULE_fxlist_ps_radius_property);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1444);
			match(T__274);
			setState(1445);
			match(EQ);
			setState(1448);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,56,_ctx) ) {
			case 1:
				{
				setState(1446);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case 2:
				{
				setState(1447);
				rand_value();
				}
				break;
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
	public static class Fxlist_ps_height_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Rand_valueContext rand_value() {
			return getRuleContext(Rand_valueContext.class,0);
		}
		public TerminalNode INT() { return getToken(MapIniParser.INT, 0); }
		public TerminalNode FLOAT() { return getToken(MapIniParser.FLOAT, 0); }
		public Fxlist_ps_height_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_ps_height_property; }
	}

	public final Fxlist_ps_height_propertyContext fxlist_ps_height_property() throws RecognitionException {
		Fxlist_ps_height_propertyContext _localctx = new Fxlist_ps_height_propertyContext(_ctx, getState());
		enterRule(_localctx, 196, RULE_fxlist_ps_height_property);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1450);
			match(T__275);
			setState(1451);
			match(EQ);
			setState(1454);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,57,_ctx) ) {
			case 1:
				{
				setState(1452);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case 2:
				{
				setState(1453);
				rand_value();
				}
				break;
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
	public static class Fxlist_ps_initialDelay_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Rand_valueContext rand_value() {
			return getRuleContext(Rand_valueContext.class,0);
		}
		public Fxlist_ps_initialDelay_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_ps_initialDelay_property; }
	}

	public final Fxlist_ps_initialDelay_propertyContext fxlist_ps_initialDelay_property() throws RecognitionException {
		Fxlist_ps_initialDelay_propertyContext _localctx = new Fxlist_ps_initialDelay_propertyContext(_ctx, getState());
		enterRule(_localctx, 198, RULE_fxlist_ps_initialDelay_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1456);
			match(T__276);
			setState(1457);
			match(EQ);
			setState(1458);
			rand_value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Fxlist_ps_rotateX_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode INT() { return getToken(MapIniParser.INT, 0); }
		public Fxlist_ps_rotateX_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_ps_rotateX_property; }
	}

	public final Fxlist_ps_rotateX_propertyContext fxlist_ps_rotateX_property() throws RecognitionException {
		Fxlist_ps_rotateX_propertyContext _localctx = new Fxlist_ps_rotateX_propertyContext(_ctx, getState());
		enterRule(_localctx, 200, RULE_fxlist_ps_rotateX_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1460);
			match(T__277);
			setState(1461);
			match(EQ);
			setState(1462);
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
	public static class Fxlist_ps_rotatey_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode INT() { return getToken(MapIniParser.INT, 0); }
		public Fxlist_ps_rotatey_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_ps_rotatey_property; }
	}

	public final Fxlist_ps_rotatey_propertyContext fxlist_ps_rotatey_property() throws RecognitionException {
		Fxlist_ps_rotatey_propertyContext _localctx = new Fxlist_ps_rotatey_propertyContext(_ctx, getState());
		enterRule(_localctx, 202, RULE_fxlist_ps_rotatey_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1464);
			match(T__278);
			setState(1465);
			match(EQ);
			setState(1466);
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
	public static class Fxlist_ps_rotateZ_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode INT() { return getToken(MapIniParser.INT, 0); }
		public Fxlist_ps_rotateZ_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_ps_rotateZ_property; }
	}

	public final Fxlist_ps_rotateZ_propertyContext fxlist_ps_rotateZ_property() throws RecognitionException {
		Fxlist_ps_rotateZ_propertyContext _localctx = new Fxlist_ps_rotateZ_propertyContext(_ctx, getState());
		enterRule(_localctx, 204, RULE_fxlist_ps_rotateZ_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1468);
			match(T__279);
			setState(1469);
			match(EQ);
			setState(1470);
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
	public static class Fxlist_ps_orienttoobject_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode BOOLEAN() { return getToken(MapIniParser.BOOLEAN, 0); }
		public Fxlist_ps_orienttoobject_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_ps_orienttoobject_property; }
	}

	public final Fxlist_ps_orienttoobject_propertyContext fxlist_ps_orienttoobject_property() throws RecognitionException {
		Fxlist_ps_orienttoobject_propertyContext _localctx = new Fxlist_ps_orienttoobject_propertyContext(_ctx, getState());
		enterRule(_localctx, 206, RULE_fxlist_ps_orienttoobject_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1472);
			match(T__280);
			setState(1473);
			match(EQ);
			setState(1474);
			match(BOOLEAN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Fxlist_ps_ricochet_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode BOOLEAN() { return getToken(MapIniParser.BOOLEAN, 0); }
		public Fxlist_ps_ricochet_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_ps_ricochet_property; }
	}

	public final Fxlist_ps_ricochet_propertyContext fxlist_ps_ricochet_property() throws RecognitionException {
		Fxlist_ps_ricochet_propertyContext _localctx = new Fxlist_ps_ricochet_propertyContext(_ctx, getState());
		enterRule(_localctx, 208, RULE_fxlist_ps_ricochet_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1476);
			match(T__281);
			setState(1477);
			match(EQ);
			setState(1478);
			match(BOOLEAN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Fxlist_ps_usecallerradius_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode BOOLEAN() { return getToken(MapIniParser.BOOLEAN, 0); }
		public Fxlist_ps_usecallerradius_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_ps_usecallerradius_property; }
	}

	public final Fxlist_ps_usecallerradius_propertyContext fxlist_ps_usecallerradius_property() throws RecognitionException {
		Fxlist_ps_usecallerradius_propertyContext _localctx = new Fxlist_ps_usecallerradius_propertyContext(_ctx, getState());
		enterRule(_localctx, 210, RULE_fxlist_ps_usecallerradius_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1480);
			match(T__282);
			setState(1481);
			match(EQ);
			setState(1482);
			match(BOOLEAN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Fxlist_ps_attachtoobject_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode BOOLEAN() { return getToken(MapIniParser.BOOLEAN, 0); }
		public Fxlist_ps_attachtoobject_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_ps_attachtoobject_property; }
	}

	public final Fxlist_ps_attachtoobject_propertyContext fxlist_ps_attachtoobject_property() throws RecognitionException {
		Fxlist_ps_attachtoobject_propertyContext _localctx = new Fxlist_ps_attachtoobject_propertyContext(_ctx, getState());
		enterRule(_localctx, 212, RULE_fxlist_ps_attachtoobject_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1484);
			match(T__283);
			setState(1485);
			match(EQ);
			setState(1486);
			match(BOOLEAN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Fxlist_ps_creategroundheight_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode BOOLEAN() { return getToken(MapIniParser.BOOLEAN, 0); }
		public Fxlist_ps_creategroundheight_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_ps_creategroundheight_property; }
	}

	public final Fxlist_ps_creategroundheight_propertyContext fxlist_ps_creategroundheight_property() throws RecognitionException {
		Fxlist_ps_creategroundheight_propertyContext _localctx = new Fxlist_ps_creategroundheight_propertyContext(_ctx, getState());
		enterRule(_localctx, 214, RULE_fxlist_ps_creategroundheight_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1488);
			match(T__284);
			setState(1489);
			match(EQ);
			setState(1490);
			match(BOOLEAN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Fxlist_sound_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Audioevent_valueContext audioevent_value() {
			return getRuleContext(Audioevent_valueContext.class,0);
		}
		public Fxlist_sound_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_sound_property; }
	}

	public final Fxlist_sound_propertyContext fxlist_sound_property() throws RecognitionException {
		Fxlist_sound_propertyContext _localctx = new Fxlist_sound_propertyContext(_ctx, getState());
		enterRule(_localctx, 216, RULE_fxlist_sound_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1492);
			match(T__271);
			setState(1493);
			match(EQ);
			setState(1494);
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
	public static class Fxlist_rayeffect_primaryoffset_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Coord3DContext coord3D() {
			return getRuleContext(Coord3DContext.class,0);
		}
		public Fxlist_rayeffect_primaryoffset_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_rayeffect_primaryoffset_property; }
	}

	public final Fxlist_rayeffect_primaryoffset_propertyContext fxlist_rayeffect_primaryoffset_property() throws RecognitionException {
		Fxlist_rayeffect_primaryoffset_propertyContext _localctx = new Fxlist_rayeffect_primaryoffset_propertyContext(_ctx, getState());
		enterRule(_localctx, 218, RULE_fxlist_rayeffect_primaryoffset_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1496);
			match(T__285);
			setState(1497);
			match(EQ);
			setState(1498);
			coord3D();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Fxlist_rayeffect_secondaryoffset_propretyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Coord3DContext coord3D() {
			return getRuleContext(Coord3DContext.class,0);
		}
		public Fxlist_rayeffect_secondaryoffset_propretyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_rayeffect_secondaryoffset_proprety; }
	}

	public final Fxlist_rayeffect_secondaryoffset_propretyContext fxlist_rayeffect_secondaryoffset_proprety() throws RecognitionException {
		Fxlist_rayeffect_secondaryoffset_propretyContext _localctx = new Fxlist_rayeffect_secondaryoffset_propretyContext(_ctx, getState());
		enterRule(_localctx, 220, RULE_fxlist_rayeffect_secondaryoffset_proprety);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1500);
			match(T__286);
			setState(1501);
			match(EQ);
			setState(1502);
			coord3D();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Fxlist_tracer_name_propetyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Object_valueContext object_value() {
			return getRuleContext(Object_valueContext.class,0);
		}
		public Fxlist_tracer_name_propetyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_tracer_name_propety; }
	}

	public final Fxlist_tracer_name_propetyContext fxlist_tracer_name_propety() throws RecognitionException {
		Fxlist_tracer_name_propetyContext _localctx = new Fxlist_tracer_name_propetyContext(_ctx, getState());
		enterRule(_localctx, 222, RULE_fxlist_tracer_name_propety);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1504);
			match(T__287);
			setState(1505);
			match(EQ);
			setState(1506);
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
	public static class Fxlist_tracer_bonename_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Fxlist_tracer_bonename_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_tracer_bonename_property; }
	}

	public final Fxlist_tracer_bonename_propertyContext fxlist_tracer_bonename_property() throws RecognitionException {
		Fxlist_tracer_bonename_propertyContext _localctx = new Fxlist_tracer_bonename_propertyContext(_ctx, getState());
		enterRule(_localctx, 224, RULE_fxlist_tracer_bonename_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1508);
			match(T__288);
			setState(1509);
			match(EQ);
			setState(1510);
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
	public static class Fxlist_tracer_speed_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode INT() { return getToken(MapIniParser.INT, 0); }
		public TerminalNode FLOAT() { return getToken(MapIniParser.FLOAT, 0); }
		public Fxlist_tracer_speed_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_tracer_speed_property; }
	}

	public final Fxlist_tracer_speed_propertyContext fxlist_tracer_speed_property() throws RecognitionException {
		Fxlist_tracer_speed_propertyContext _localctx = new Fxlist_tracer_speed_propertyContext(_ctx, getState());
		enterRule(_localctx, 226, RULE_fxlist_tracer_speed_property);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1512);
			match(T__124);
			setState(1513);
			match(EQ);
			setState(1514);
			_la = _input.LA(1);
			if ( !(_la==INT || _la==FLOAT) ) {
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
	public static class Fxlist_tracer_decayat_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode INT() { return getToken(MapIniParser.INT, 0); }
		public TerminalNode FLOAT() { return getToken(MapIniParser.FLOAT, 0); }
		public Fxlist_tracer_decayat_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_tracer_decayat_property; }
	}

	public final Fxlist_tracer_decayat_propertyContext fxlist_tracer_decayat_property() throws RecognitionException {
		Fxlist_tracer_decayat_propertyContext _localctx = new Fxlist_tracer_decayat_propertyContext(_ctx, getState());
		enterRule(_localctx, 228, RULE_fxlist_tracer_decayat_property);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1516);
			match(T__289);
			setState(1517);
			match(EQ);
			setState(1518);
			_la = _input.LA(1);
			if ( !(_la==INT || _la==FLOAT) ) {
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
	public static class Fxlist_tracer_length_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode INT() { return getToken(MapIniParser.INT, 0); }
		public TerminalNode FLOAT() { return getToken(MapIniParser.FLOAT, 0); }
		public Fxlist_tracer_length_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_tracer_length_property; }
	}

	public final Fxlist_tracer_length_propertyContext fxlist_tracer_length_property() throws RecognitionException {
		Fxlist_tracer_length_propertyContext _localctx = new Fxlist_tracer_length_propertyContext(_ctx, getState());
		enterRule(_localctx, 230, RULE_fxlist_tracer_length_property);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1520);
			match(T__290);
			setState(1521);
			match(EQ);
			setState(1522);
			_la = _input.LA(1);
			if ( !(_la==INT || _la==FLOAT) ) {
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
	public static class Fxlist_tracer_width_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode INT() { return getToken(MapIniParser.INT, 0); }
		public TerminalNode FLOAT() { return getToken(MapIniParser.FLOAT, 0); }
		public Fxlist_tracer_width_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_tracer_width_property; }
	}

	public final Fxlist_tracer_width_propertyContext fxlist_tracer_width_property() throws RecognitionException {
		Fxlist_tracer_width_propertyContext _localctx = new Fxlist_tracer_width_propertyContext(_ctx, getState());
		enterRule(_localctx, 232, RULE_fxlist_tracer_width_property);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1524);
			match(T__291);
			setState(1525);
			match(EQ);
			setState(1526);
			_la = _input.LA(1);
			if ( !(_la==INT || _la==FLOAT) ) {
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
	public static class Fxlist_tracer_color_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode R() { return getToken(MapIniParser.R, 0); }
		public TerminalNode G() { return getToken(MapIniParser.G, 0); }
		public TerminalNode B() { return getToken(MapIniParser.B, 0); }
		public Fxlist_tracer_color_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_tracer_color_property; }
	}

	public final Fxlist_tracer_color_propertyContext fxlist_tracer_color_property() throws RecognitionException {
		Fxlist_tracer_color_propertyContext _localctx = new Fxlist_tracer_color_propertyContext(_ctx, getState());
		enterRule(_localctx, 234, RULE_fxlist_tracer_color_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1528);
			match(T__121);
			setState(1529);
			match(EQ);
			setState(1530);
			match(R);
			setState(1531);
			match(G);
			setState(1532);
			match(B);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Fxlist_tracer_probability_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode INT() { return getToken(MapIniParser.INT, 0); }
		public TerminalNode FLOAT() { return getToken(MapIniParser.FLOAT, 0); }
		public Fxlist_tracer_probability_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_tracer_probability_property; }
	}

	public final Fxlist_tracer_probability_propertyContext fxlist_tracer_probability_property() throws RecognitionException {
		Fxlist_tracer_probability_propertyContext _localctx = new Fxlist_tracer_probability_propertyContext(_ctx, getState());
		enterRule(_localctx, 236, RULE_fxlist_tracer_probability_property);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1534);
			match(T__292);
			setState(1535);
			match(EQ);
			setState(1536);
			_la = _input.LA(1);
			if ( !(_la==INT || _la==FLOAT) ) {
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
	public static class Fxlist_lightpulse_color_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode R() { return getToken(MapIniParser.R, 0); }
		public TerminalNode G() { return getToken(MapIniParser.G, 0); }
		public TerminalNode B() { return getToken(MapIniParser.B, 0); }
		public Fxlist_lightpulse_color_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_lightpulse_color_property; }
	}

	public final Fxlist_lightpulse_color_propertyContext fxlist_lightpulse_color_property() throws RecognitionException {
		Fxlist_lightpulse_color_propertyContext _localctx = new Fxlist_lightpulse_color_propertyContext(_ctx, getState());
		enterRule(_localctx, 238, RULE_fxlist_lightpulse_color_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1538);
			match(T__121);
			setState(1539);
			match(EQ);
			setState(1540);
			match(R);
			setState(1541);
			match(G);
			setState(1542);
			match(B);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Fxlist_lightpulse_radius_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode INT() { return getToken(MapIniParser.INT, 0); }
		public TerminalNode FLOAT() { return getToken(MapIniParser.FLOAT, 0); }
		public Fxlist_lightpulse_radius_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_lightpulse_radius_property; }
	}

	public final Fxlist_lightpulse_radius_propertyContext fxlist_lightpulse_radius_property() throws RecognitionException {
		Fxlist_lightpulse_radius_propertyContext _localctx = new Fxlist_lightpulse_radius_propertyContext(_ctx, getState());
		enterRule(_localctx, 240, RULE_fxlist_lightpulse_radius_property);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1544);
			match(T__274);
			setState(1545);
			match(EQ);
			setState(1546);
			_la = _input.LA(1);
			if ( !(_la==INT || _la==FLOAT) ) {
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
	public static class Fxlist_lightpulse_radiuspercentobjectsize_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode PROCENT() { return getToken(MapIniParser.PROCENT, 0); }
		public Fxlist_lightpulse_radiuspercentobjectsize_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_lightpulse_radiuspercentobjectsize_property; }
	}

	public final Fxlist_lightpulse_radiuspercentobjectsize_propertyContext fxlist_lightpulse_radiuspercentobjectsize_property() throws RecognitionException {
		Fxlist_lightpulse_radiuspercentobjectsize_propertyContext _localctx = new Fxlist_lightpulse_radiuspercentobjectsize_propertyContext(_ctx, getState());
		enterRule(_localctx, 242, RULE_fxlist_lightpulse_radiuspercentobjectsize_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1548);
			match(T__293);
			setState(1549);
			match(EQ);
			setState(1550);
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
	public static class Fxlist_lightpulse_increasetime_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode INT() { return getToken(MapIniParser.INT, 0); }
		public Fxlist_lightpulse_increasetime_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_lightpulse_increasetime_property; }
	}

	public final Fxlist_lightpulse_increasetime_propertyContext fxlist_lightpulse_increasetime_property() throws RecognitionException {
		Fxlist_lightpulse_increasetime_propertyContext _localctx = new Fxlist_lightpulse_increasetime_propertyContext(_ctx, getState());
		enterRule(_localctx, 244, RULE_fxlist_lightpulse_increasetime_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1552);
			match(T__294);
			setState(1553);
			match(EQ);
			setState(1554);
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
	public static class Fxlist_lightpulse_decreasetime_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode INT() { return getToken(MapIniParser.INT, 0); }
		public Fxlist_lightpulse_decreasetime_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_lightpulse_decreasetime_property; }
	}

	public final Fxlist_lightpulse_decreasetime_propertyContext fxlist_lightpulse_decreasetime_property() throws RecognitionException {
		Fxlist_lightpulse_decreasetime_propertyContext _localctx = new Fxlist_lightpulse_decreasetime_propertyContext(_ctx, getState());
		enterRule(_localctx, 246, RULE_fxlist_lightpulse_decreasetime_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1556);
			match(T__295);
			setState(1557);
			match(EQ);
			setState(1558);
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
	public static class Fxlist_viewshake_type_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Fxlist_viewshake_type_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_viewshake_type_property; }
	}

	public final Fxlist_viewshake_type_propertyContext fxlist_viewshake_type_property() throws RecognitionException {
		Fxlist_viewshake_type_propertyContext _localctx = new Fxlist_viewshake_type_propertyContext(_ctx, getState());
		enterRule(_localctx, 248, RULE_fxlist_viewshake_type_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1560);
			match(T__296);
			setState(1561);
			match(EQ);
			setState(1562);
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
	public static class Fxlist_scorch_type_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Fxlist_scorch_type_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_scorch_type_property; }
	}

	public final Fxlist_scorch_type_propertyContext fxlist_scorch_type_property() throws RecognitionException {
		Fxlist_scorch_type_propertyContext _localctx = new Fxlist_scorch_type_propertyContext(_ctx, getState());
		enterRule(_localctx, 250, RULE_fxlist_scorch_type_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1564);
			match(T__296);
			setState(1565);
			match(EQ);
			setState(1566);
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
	public static class Fxlist_scorch_radius_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode INT() { return getToken(MapIniParser.INT, 0); }
		public TerminalNode FLOAT() { return getToken(MapIniParser.FLOAT, 0); }
		public Fxlist_scorch_radius_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_scorch_radius_property; }
	}

	public final Fxlist_scorch_radius_propertyContext fxlist_scorch_radius_property() throws RecognitionException {
		Fxlist_scorch_radius_propertyContext _localctx = new Fxlist_scorch_radius_propertyContext(_ctx, getState());
		enterRule(_localctx, 252, RULE_fxlist_scorch_radius_property);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1568);
			match(T__274);
			setState(1569);
			match(EQ);
			setState(1570);
			_la = _input.LA(1);
			if ( !(_la==INT || _la==FLOAT) ) {
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
	public static class Fxlist_atbonepos_fx_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Fxlist_valueContext fxlist_value() {
			return getRuleContext(Fxlist_valueContext.class,0);
		}
		public Fxlist_atbonepos_fx_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_atbonepos_fx_property; }
	}

	public final Fxlist_atbonepos_fx_propertyContext fxlist_atbonepos_fx_property() throws RecognitionException {
		Fxlist_atbonepos_fx_propertyContext _localctx = new Fxlist_atbonepos_fx_propertyContext(_ctx, getState());
		enterRule(_localctx, 254, RULE_fxlist_atbonepos_fx_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1572);
			match(T__297);
			setState(1573);
			match(EQ);
			setState(1574);
			fxlist_value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Fxlist_atbonepos_bonename_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Fxlist_atbonepos_bonename_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_atbonepos_bonename_property; }
	}

	public final Fxlist_atbonepos_bonename_propertyContext fxlist_atbonepos_bonename_property() throws RecognitionException {
		Fxlist_atbonepos_bonename_propertyContext _localctx = new Fxlist_atbonepos_bonename_propertyContext(_ctx, getState());
		enterRule(_localctx, 256, RULE_fxlist_atbonepos_bonename_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1576);
			match(T__288);
			setState(1577);
			match(EQ);
			setState(1578);
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
	public static class Fxlist_atbonepos_orienttoobject_propertyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode BOOLEAN() { return getToken(MapIniParser.BOOLEAN, 0); }
		public Fxlist_atbonepos_orienttoobject_propertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_atbonepos_orienttoobject_property; }
	}

	public final Fxlist_atbonepos_orienttoobject_propertyContext fxlist_atbonepos_orienttoobject_property() throws RecognitionException {
		Fxlist_atbonepos_orienttoobject_propertyContext _localctx = new Fxlist_atbonepos_orienttoobject_propertyContext(_ctx, getState());
		enterRule(_localctx, 258, RULE_fxlist_atbonepos_orienttoobject_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1580);
			match(T__298);
			setState(1581);
			match(EQ);
			setState(1582);
			match(BOOLEAN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Fxlist_name_object_propetyContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public Object_valueContext object_value() {
			return getRuleContext(Object_valueContext.class,0);
		}
		public Fxlist_name_object_propetyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_name_object_propety; }
	}

	public final Fxlist_name_object_propetyContext fxlist_name_object_propety() throws RecognitionException {
		Fxlist_name_object_propetyContext _localctx = new Fxlist_name_object_propetyContext(_ctx, getState());
		enterRule(_localctx, 260, RULE_fxlist_name_object_propety);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1584);
			match(T__271);
			setState(1585);
			match(EQ);
			setState(1586);
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
	public static class Igui_propertiesContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(MapIniParser.EQ, 0); }
		public TerminalNode INT() { return getToken(MapIniParser.INT, 0); }
		public TerminalNode R() { return getToken(MapIniParser.R, 0); }
		public TerminalNode G() { return getToken(MapIniParser.G, 0); }
		public TerminalNode B() { return getToken(MapIniParser.B, 0); }
		public TerminalNode XCOORD() { return getToken(MapIniParser.XCOORD, 0); }
		public TerminalNode YCOORD() { return getToken(MapIniParser.YCOORD, 0); }
		public List<TerminalNode> ID() { return getTokens(MapIniParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(MapIniParser.ID, i);
		}
		public TerminalNode BOOLEAN() { return getToken(MapIniParser.BOOLEAN, 0); }
		public TerminalNode A() { return getToken(MapIniParser.A, 0); }
		public Igui_propertiesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_igui_properties; }
	}

	public final Igui_propertiesContext igui_properties() throws RecognitionException {
		Igui_propertiesContext _localctx = new Igui_propertiesContext(_ctx, getState());
		enterRule(_localctx, 262, RULE_igui_properties);
		int _la;
		try {
			setState(1747);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__299:
				enterOuterAlt(_localctx, 1);
				{
				setState(1588);
				match(T__299);
				setState(1589);
				match(EQ);
				setState(1590);
				match(INT);
				}
				break;
			case T__300:
				enterOuterAlt(_localctx, 2);
				{
				setState(1591);
				match(T__300);
				setState(1592);
				match(EQ);
				setState(1593);
				match(R);
				setState(1594);
				match(G);
				setState(1595);
				match(B);
				}
				break;
			case T__301:
				enterOuterAlt(_localctx, 3);
				{
				setState(1596);
				match(T__301);
				setState(1597);
				match(EQ);
				setState(1598);
				match(R);
				setState(1599);
				match(G);
				setState(1600);
				match(B);
				}
				break;
			case T__302:
				enterOuterAlt(_localctx, 4);
				{
				setState(1601);
				match(T__302);
				setState(1602);
				match(EQ);
				setState(1603);
				match(XCOORD);
				setState(1604);
				match(YCOORD);
				}
				break;
			case T__303:
				enterOuterAlt(_localctx, 5);
				{
				setState(1605);
				match(T__303);
				setState(1606);
				match(EQ);
				setState(1607);
				match(ID);
				}
				break;
			case T__304:
				enterOuterAlt(_localctx, 6);
				{
				setState(1608);
				match(T__304);
				setState(1609);
				match(EQ);
				setState(1610);
				match(INT);
				}
				break;
			case T__305:
				enterOuterAlt(_localctx, 7);
				{
				setState(1611);
				match(T__305);
				setState(1612);
				match(EQ);
				setState(1613);
				match(BOOLEAN);
				}
				break;
			case T__306:
				enterOuterAlt(_localctx, 8);
				{
				setState(1614);
				match(T__306);
				setState(1615);
				match(EQ);
				setState(1616);
				match(INT);
				}
				break;
			case T__307:
				enterOuterAlt(_localctx, 9);
				{
				setState(1617);
				match(T__307);
				setState(1618);
				match(EQ);
				setState(1619);
				match(R);
				setState(1620);
				match(G);
				setState(1621);
				match(B);
				setState(1622);
				match(A);
				}
				break;
			case T__308:
				enterOuterAlt(_localctx, 10);
				{
				setState(1623);
				match(T__308);
				setState(1624);
				match(EQ);
				setState(1625);
				match(XCOORD);
				setState(1626);
				match(YCOORD);
				}
				break;
			case T__309:
				enterOuterAlt(_localctx, 11);
				{
				setState(1627);
				match(T__309);
				setState(1628);
				match(EQ);
				setState(1630); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(1629);
					match(ID);
					}
					}
					setState(1632); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==ID );
				}
				break;
			case T__310:
				enterOuterAlt(_localctx, 12);
				{
				setState(1634);
				match(T__310);
				setState(1635);
				match(EQ);
				setState(1636);
				match(INT);
				}
				break;
			case T__311:
				enterOuterAlt(_localctx, 13);
				{
				setState(1637);
				match(T__311);
				setState(1638);
				match(EQ);
				setState(1639);
				match(BOOLEAN);
				}
				break;
			case T__312:
				enterOuterAlt(_localctx, 14);
				{
				setState(1640);
				match(T__312);
				setState(1641);
				match(EQ);
				setState(1643); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(1642);
					match(ID);
					}
					}
					setState(1645); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==ID );
				}
				break;
			case T__313:
				enterOuterAlt(_localctx, 15);
				{
				setState(1647);
				match(T__313);
				setState(1648);
				match(EQ);
				setState(1649);
				match(INT);
				}
				break;
			case T__314:
				enterOuterAlt(_localctx, 16);
				{
				setState(1650);
				match(T__314);
				setState(1651);
				match(EQ);
				setState(1652);
				match(BOOLEAN);
				}
				break;
			case T__315:
				enterOuterAlt(_localctx, 17);
				{
				setState(1653);
				match(T__315);
				setState(1654);
				match(EQ);
				setState(1655);
				match(BOOLEAN);
				}
				break;
			case T__316:
				enterOuterAlt(_localctx, 18);
				{
				setState(1656);
				match(T__316);
				setState(1657);
				match(EQ);
				setState(1658);
				match(XCOORD);
				setState(1659);
				match(YCOORD);
				}
				break;
			case T__317:
				enterOuterAlt(_localctx, 19);
				{
				setState(1660);
				match(T__317);
				setState(1661);
				match(EQ);
				setState(1662);
				match(INT);
				}
				break;
			case T__318:
				enterOuterAlt(_localctx, 20);
				{
				setState(1663);
				match(T__318);
				setState(1664);
				match(EQ);
				setState(1665);
				match(R);
				setState(1666);
				match(G);
				setState(1667);
				match(B);
				}
				break;
			case T__319:
				enterOuterAlt(_localctx, 21);
				{
				setState(1668);
				match(T__319);
				setState(1669);
				match(EQ);
				setState(1670);
				match(ID);
				}
				break;
			case T__320:
				enterOuterAlt(_localctx, 22);
				{
				setState(1671);
				match(T__320);
				setState(1672);
				match(EQ);
				setState(1673);
				match(INT);
				}
				break;
			case T__321:
				enterOuterAlt(_localctx, 23);
				{
				setState(1674);
				match(T__321);
				setState(1675);
				match(EQ);
				setState(1676);
				match(BOOLEAN);
				}
				break;
			case T__322:
				enterOuterAlt(_localctx, 24);
				{
				setState(1677);
				match(T__322);
				setState(1678);
				match(EQ);
				setState(1679);
				match(ID);
				}
				break;
			case T__323:
				enterOuterAlt(_localctx, 25);
				{
				setState(1680);
				match(T__323);
				setState(1681);
				match(EQ);
				setState(1682);
				match(INT);
				}
				break;
			case T__324:
				enterOuterAlt(_localctx, 26);
				{
				setState(1683);
				match(T__324);
				setState(1684);
				match(EQ);
				setState(1685);
				match(BOOLEAN);
				}
				break;
			case T__325:
				enterOuterAlt(_localctx, 27);
				{
				setState(1686);
				match(T__325);
				setState(1687);
				match(EQ);
				setState(1688);
				match(XCOORD);
				setState(1689);
				match(YCOORD);
				}
				break;
			case T__326:
				enterOuterAlt(_localctx, 28);
				{
				setState(1690);
				match(T__326);
				setState(1691);
				match(EQ);
				setState(1692);
				match(INT);
				}
				break;
			case T__327:
				enterOuterAlt(_localctx, 29);
				{
				setState(1693);
				match(T__327);
				setState(1694);
				match(EQ);
				setState(1695);
				match(R);
				setState(1696);
				match(G);
				setState(1697);
				match(B);
				}
				break;
			case T__328:
				enterOuterAlt(_localctx, 30);
				{
				setState(1698);
				match(T__328);
				setState(1699);
				match(EQ);
				setState(1700);
				match(ID);
				}
				break;
			case T__329:
				enterOuterAlt(_localctx, 31);
				{
				setState(1701);
				match(T__329);
				setState(1702);
				match(EQ);
				setState(1703);
				match(INT);
				}
				break;
			case T__330:
				enterOuterAlt(_localctx, 32);
				{
				setState(1704);
				match(T__330);
				setState(1705);
				match(EQ);
				setState(1706);
				match(BOOLEAN);
				}
				break;
			case T__331:
				enterOuterAlt(_localctx, 33);
				{
				setState(1707);
				match(T__331);
				setState(1708);
				match(EQ);
				setState(1709);
				match(R);
				setState(1710);
				match(G);
				setState(1711);
				match(B);
				}
				break;
			case T__332:
				enterOuterAlt(_localctx, 34);
				{
				setState(1712);
				match(T__332);
				setState(1713);
				match(EQ);
				setState(1714);
				match(ID);
				}
				break;
			case T__333:
				enterOuterAlt(_localctx, 35);
				{
				setState(1715);
				match(T__333);
				setState(1716);
				match(EQ);
				setState(1717);
				match(INT);
				}
				break;
			case T__334:
				enterOuterAlt(_localctx, 36);
				{
				setState(1718);
				match(T__334);
				setState(1719);
				match(EQ);
				setState(1720);
				match(BOOLEAN);
				}
				break;
			case T__335:
				enterOuterAlt(_localctx, 37);
				{
				setState(1721);
				match(T__335);
				setState(1722);
				match(EQ);
				setState(1723);
				match(R);
				setState(1724);
				match(G);
				setState(1725);
				match(B);
				}
				break;
			case T__336:
				enterOuterAlt(_localctx, 38);
				{
				setState(1726);
				match(T__336);
				setState(1727);
				match(EQ);
				setState(1728);
				match(INT);
				}
				break;
			case T__337:
				enterOuterAlt(_localctx, 39);
				{
				setState(1729);
				match(T__337);
				setState(1730);
				match(EQ);
				setState(1731);
				match(INT);
				}
				break;
			case T__338:
				enterOuterAlt(_localctx, 40);
				{
				setState(1732);
				match(T__338);
				setState(1733);
				match(EQ);
				setState(1734);
				match(INT);
				}
				break;
			case T__339:
				enterOuterAlt(_localctx, 41);
				{
				setState(1735);
				match(T__339);
				setState(1736);
				match(EQ);
				setState(1737);
				match(BOOLEAN);
				}
				break;
			case T__340:
				enterOuterAlt(_localctx, 42);
				{
				setState(1738);
				match(T__340);
				setState(1739);
				match(EQ);
				setState(1740);
				match(BOOLEAN);
				}
				break;
			case T__341:
				enterOuterAlt(_localctx, 43);
				{
				setState(1741);
				match(T__341);
				setState(1742);
				match(EQ);
				setState(1743);
				match(R);
				setState(1744);
				match(G);
				setState(1745);
				match(B);
				setState(1746);
				match(A);
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
	public static class Faction_valueContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Faction_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_faction_value; }
	}

	public final Faction_valueContext faction_value() throws RecognitionException {
		Faction_valueContext _localctx = new Faction_valueContext(_ctx, getState());
		enterRule(_localctx, 264, RULE_faction_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1749);
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
	public static class Commandbutton_valueContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Commandbutton_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_commandbutton_value; }
	}

	public final Commandbutton_valueContext commandbutton_value() throws RecognitionException {
		Commandbutton_valueContext _localctx = new Commandbutton_valueContext(_ctx, getState());
		enterRule(_localctx, 266, RULE_commandbutton_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1751);
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
	public static class Cursorname_valueContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Cursorname_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cursorname_value; }
	}

	public final Cursorname_valueContext cursorname_value() throws RecognitionException {
		Cursorname_valueContext _localctx = new Cursorname_valueContext(_ctx, getState());
		enterRule(_localctx, 268, RULE_cursorname_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1753);
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
	public static class Radius_cursorname_valueContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Radius_cursorname_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_radius_cursorname_value; }
	}

	public final Radius_cursorname_valueContext radius_cursorname_value() throws RecognitionException {
		Radius_cursorname_valueContext _localctx = new Radius_cursorname_valueContext(_ctx, getState());
		enterRule(_localctx, 270, RULE_radius_cursorname_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1755);
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
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Invalid_cursorname_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_invalid_cursorname_value; }
	}

	public final Invalid_cursorname_valueContext invalid_cursorname_value() throws RecognitionException {
		Invalid_cursorname_valueContext _localctx = new Invalid_cursorname_valueContext(_ctx, getState());
		enterRule(_localctx, 272, RULE_invalid_cursorname_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1757);
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
	public static class Mappedimage_valueContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Mappedimage_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mappedimage_value; }
	}

	public final Mappedimage_valueContext mappedimage_value() throws RecognitionException {
		Mappedimage_valueContext _localctx = new Mappedimage_valueContext(_ctx, getState());
		enterRule(_localctx, 274, RULE_mappedimage_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1759);
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
	public static class Particlesystem_valueContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Particlesystem_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_particlesystem_value; }
	}

	public final Particlesystem_valueContext particlesystem_value() throws RecognitionException {
		Particlesystem_valueContext _localctx = new Particlesystem_valueContext(_ctx, getState());
		enterRule(_localctx, 276, RULE_particlesystem_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1761);
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
	public static class Fxlist_valueContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Fxlist_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fxlist_value; }
	}

	public final Fxlist_valueContext fxlist_value() throws RecognitionException {
		Fxlist_valueContext _localctx = new Fxlist_valueContext(_ctx, getState());
		enterRule(_localctx, 278, RULE_fxlist_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1763);
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
		enterRule(_localctx, 280, RULE_object_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1765);
			match(T__342);
			setState(1766);
			match(EQ);
			setState(1767);
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
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Object_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_object_value; }
	}

	public final Object_valueContext object_value() throws RecognitionException {
		Object_valueContext _localctx = new Object_valueContext(_ctx, getState());
		enterRule(_localctx, 282, RULE_object_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1769);
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
		enterRule(_localctx, 284, RULE_science_property);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1771);
			match(T__343);
			setState(1772);
			match(EQ);
			setState(1774); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(1773);
				science_value();
				}
				}
				setState(1776); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==ID );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
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
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Science_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_science_value; }
	}

	public final Science_valueContext science_value() throws RecognitionException {
		Science_valueContext _localctx = new Science_valueContext(_ctx, getState());
		enterRule(_localctx, 286, RULE_science_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1778);
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
		enterRule(_localctx, 288, RULE_specialpower_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1780);
			match(T__344);
			setState(1781);
			match(EQ);
			setState(1782);
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
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Specialpower_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_specialpower_value; }
	}

	public final Specialpower_valueContext specialpower_value() throws RecognitionException {
		Specialpower_valueContext _localctx = new Specialpower_valueContext(_ctx, getState());
		enterRule(_localctx, 290, RULE_specialpower_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1784);
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
	public static class Audioevent_valueContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Audioevent_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_audioevent_value; }
	}

	public final Audioevent_valueContext audioevent_value() throws RecognitionException {
		Audioevent_valueContext _localctx = new Audioevent_valueContext(_ctx, getState());
		enterRule(_localctx, 292, RULE_audioevent_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1786);
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
		enterRule(_localctx, 294, RULE_upgrade_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1788);
			match(T__345);
			setState(1789);
			match(EQ);
			setState(1790);
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
		public TerminalNode ID() { return getToken(MapIniParser.ID, 0); }
		public Upgrade_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_upgrade_value; }
	}

	public final Upgrade_valueContext upgrade_value() throws RecognitionException {
		Upgrade_valueContext _localctx = new Upgrade_valueContext(_ctx, getState());
		enterRule(_localctx, 296, RULE_upgrade_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1792);
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
		enterRule(_localctx, 298, RULE_weaponslot_property);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1794);
			match(T__346);
			setState(1795);
			match(EQ);
			setState(1797); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(1796);
				match(WEAPONSLOT);
				}
				}
				setState(1799); 
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
	public static class Rand_valueContext extends ParserRuleContext {
		public List<TerminalNode> INT() { return getTokens(MapIniParser.INT); }
		public TerminalNode INT(int i) {
			return getToken(MapIniParser.INT, i);
		}
		public TerminalNode DISTRIBUTION_FORM() { return getToken(MapIniParser.DISTRIBUTION_FORM, 0); }
		public Rand_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rand_value; }
	}

	public final Rand_valueContext rand_value() throws RecognitionException {
		Rand_valueContext _localctx = new Rand_valueContext(_ctx, getState());
		enterRule(_localctx, 300, RULE_rand_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1801);
			match(INT);
			setState(1802);
			match(INT);
			setState(1803);
			match(DISTRIBUTION_FORM);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Coord3DContext extends ParserRuleContext {
		public TerminalNode XCOORD() { return getToken(MapIniParser.XCOORD, 0); }
		public TerminalNode YCOORD() { return getToken(MapIniParser.YCOORD, 0); }
		public TerminalNode ZCOORD() { return getToken(MapIniParser.ZCOORD, 0); }
		public Coord3DContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_coord3D; }
	}

	public final Coord3DContext coord3D() throws RecognitionException {
		Coord3DContext _localctx = new Coord3DContext(_ctx, getState());
		enterRule(_localctx, 302, RULE_coord3D);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1805);
			match(XCOORD);
			setState(1806);
			match(YCOORD);
			setState(1807);
			match(ZCOORD);
			}
		}
		catch (RecognitionException re) {
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
		"\u0004\u0001\u0175\u0712\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
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
		"1\u00022\u00072\u00023\u00073\u00024\u00074\u00025\u00075\u00026\u0007"+
		"6\u00027\u00077\u00028\u00078\u00029\u00079\u0002:\u0007:\u0002;\u0007"+
		";\u0002<\u0007<\u0002=\u0007=\u0002>\u0007>\u0002?\u0007?\u0002@\u0007"+
		"@\u0002A\u0007A\u0002B\u0007B\u0002C\u0007C\u0002D\u0007D\u0002E\u0007"+
		"E\u0002F\u0007F\u0002G\u0007G\u0002H\u0007H\u0002I\u0007I\u0002J\u0007"+
		"J\u0002K\u0007K\u0002L\u0007L\u0002M\u0007M\u0002N\u0007N\u0002O\u0007"+
		"O\u0002P\u0007P\u0002Q\u0007Q\u0002R\u0007R\u0002S\u0007S\u0002T\u0007"+
		"T\u0002U\u0007U\u0002V\u0007V\u0002W\u0007W\u0002X\u0007X\u0002Y\u0007"+
		"Y\u0002Z\u0007Z\u0002[\u0007[\u0002\\\u0007\\\u0002]\u0007]\u0002^\u0007"+
		"^\u0002_\u0007_\u0002`\u0007`\u0002a\u0007a\u0002b\u0007b\u0002c\u0007"+
		"c\u0002d\u0007d\u0002e\u0007e\u0002f\u0007f\u0002g\u0007g\u0002h\u0007"+
		"h\u0002i\u0007i\u0002j\u0007j\u0002k\u0007k\u0002l\u0007l\u0002m\u0007"+
		"m\u0002n\u0007n\u0002o\u0007o\u0002p\u0007p\u0002q\u0007q\u0002r\u0007"+
		"r\u0002s\u0007s\u0002t\u0007t\u0002u\u0007u\u0002v\u0007v\u0002w\u0007"+
		"w\u0002x\u0007x\u0002y\u0007y\u0002z\u0007z\u0002{\u0007{\u0002|\u0007"+
		"|\u0002}\u0007}\u0002~\u0007~\u0002\u007f\u0007\u007f\u0002\u0080\u0007"+
		"\u0080\u0002\u0081\u0007\u0081\u0002\u0082\u0007\u0082\u0002\u0083\u0007"+
		"\u0083\u0002\u0084\u0007\u0084\u0002\u0085\u0007\u0085\u0002\u0086\u0007"+
		"\u0086\u0002\u0087\u0007\u0087\u0002\u0088\u0007\u0088\u0002\u0089\u0007"+
		"\u0089\u0002\u008a\u0007\u008a\u0002\u008b\u0007\u008b\u0002\u008c\u0007"+
		"\u008c\u0002\u008d\u0007\u008d\u0002\u008e\u0007\u008e\u0002\u008f\u0007"+
		"\u008f\u0002\u0090\u0007\u0090\u0002\u0091\u0007\u0091\u0002\u0092\u0007"+
		"\u0092\u0002\u0093\u0007\u0093\u0002\u0094\u0007\u0094\u0002\u0095\u0007"+
		"\u0095\u0002\u0096\u0007\u0096\u0002\u0097\u0007\u0097\u0001\u0000\u0005"+
		"\u0000\u0132\b\u0000\n\u0000\f\u0000\u0135\t\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0003\u0001\u0146\b\u0001\u0001\u0001\u0005\u0001\u0149\b"+
		"\u0001\n\u0001\f\u0001\u014c\t\u0001\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0005\u0002\u0153\b\u0002\n\u0002\f\u0002\u0156"+
		"\t\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0003\u0003\u01d8\b\u0003\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0005\u0004\u01dd\b\u0004\n\u0004\f\u0004\u01e0\t\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0005\u0005"+
		"\u01e7\b\u0005\n\u0005\f\u0005\u01ea\t\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0003\u0006\u01fe\b\u0006\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0005\u0007\u0203\b\u0007\n\u0007\f\u0007"+
		"\u0206\t\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\b"+
		"\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001"+
		"\b\u0003\b\u0217\b\b\u0001\t\u0001\t\u0005\t\u021b\b\t\n\t\f\t\u021e\t"+
		"\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0005\n\u0225\b\n\n\n\f\n\u0228"+
		"\t\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0003\u000b\u023e\b\u000b\u0001\f\u0001\f\u0001\f\u0005"+
		"\f\u0243\b\f\n\f\f\f\u0246\t\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r"+
		"\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001"+
		"\r\u0001\r\u0001\r\u0001\r\u0003\r\u0259\b\r\u0001\u000e\u0001\u000e\u0001"+
		"\u000e\u0005\u000e\u025e\b\u000e\n\u000e\f\u000e\u0261\t\u000e\u0001\u000e"+
		"\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0005\u0010\u0270\b\u0010\n\u0010\f\u0010\u0273\t\u0010\u0001\u0010\u0001"+
		"\u0010\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001"+
		"\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001"+
		"\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0003"+
		"\u0011\u0288\b\u0011\u0001\u0012\u0001\u0012\u0001\u0012\u0005\u0012\u028d"+
		"\b\u0012\n\u0012\f\u0012\u0290\t\u0012\u0001\u0012\u0001\u0012\u0001\u0013"+
		"\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0014\u0001\u0014\u0001\u0014"+
		"\u0005\u0014\u029b\b\u0014\n\u0014\f\u0014\u029e\t\u0014\u0001\u0014\u0001"+
		"\u0014\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001"+
		"\u0015\u0003\u0015\u02a8\b\u0015\u0001\u0016\u0001\u0016\u0005\u0016\u02ac"+
		"\b\u0016\n\u0016\f\u0016\u02af\t\u0016\u0001\u0016\u0001\u0016\u0001\u0017"+
		"\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017"+
		"\u0001\u0017\u0001\u0017\u0001\u0017\u0003\u0017\u02bd\b\u0017\u0001\u0018"+
		"\u0001\u0018\u0001\u0018\u0005\u0018\u02c2\b\u0018\n\u0018\f\u0018\u02c5"+
		"\t\u0018\u0001\u0018\u0001\u0018\u0001\u0019\u0001\u0019\u0001\u0019\u0001"+
		"\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0003\u0019\u02d1"+
		"\b\u0019\u0001\u001a\u0001\u001a\u0001\u001a\u0001\u001a\u0001\u001a\u0001"+
		"\u001a\u0001\u001a\u0001\u001a\u0001\u001a\u0001\u001a\u0001\u001a\u0001"+
		"\u001a\u0001\u001a\u0001\u001a\u0001\u001a\u0005\u001a\u02e2\b\u001a\n"+
		"\u001a\f\u001a\u02e5\t\u001a\u0001\u001a\u0001\u001a\u0001\u001b\u0001"+
		"\u001b\u0005\u001b\u02eb\b\u001b\n\u001b\f\u001b\u02ee\t\u001b\u0001\u001b"+
		"\u0001\u001b\u0001\u001c\u0001\u001c\u0001\u001c\u0001\u001c\u0005\u001c"+
		"\u02f6\b\u001c\n\u001c\f\u001c\u02f9\t\u001c\u0001\u001c\u0001\u001c\u0001"+
		"\u001d\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001d\u0001"+
		"\u001d\u0001\u001d\u0001\u001d\u0005\u001d\u0306\b\u001d\n\u001d\f\u001d"+
		"\u0309\t\u001d\u0001\u001d\u0001\u001d\u0001\u001e\u0001\u001e\u0001\u001e"+
		"\u0001\u001e\u0001\u001e\u0001\u001e\u0005\u001e\u0313\b\u001e\n\u001e"+
		"\f\u001e\u0316\t\u001e\u0001\u001e\u0001\u001e\u0001\u001f\u0001\u001f"+
		"\u0005\u001f\u031c\b\u001f\n\u001f\f\u001f\u031f\t\u001f\u0001\u001f\u0001"+
		"\u001f\u0001 \u0001 \u0001 \u0005 \u0326\b \n \f \u0329\t \u0001 \u0001"+
		" \u0001!\u0001!\u0001!\u0001!\u0005!\u0331\b!\n!\f!\u0334\t!\u0001!\u0001"+
		"!\u0001\"\u0001\"\u0001\"\u0005\"\u033b\b\"\n\"\f\"\u033e\t\"\u0001\""+
		"\u0001\"\u0001#\u0001#\u0005#\u0344\b#\n#\f#\u0347\t#\u0001#\u0001#\u0001"+
		"$\u0001$\u0001$\u0001$\u0001$\u0001$\u0001$\u0001$\u0001$\u0001$\u0001"+
		"$\u0001$\u0001$\u0001$\u0001$\u0001$\u0001$\u0001$\u0001$\u0001$\u0001"+
		"$\u0001$\u0001$\u0001$\u0003$\u0363\b$\u0001%\u0001%\u0001%\u0005%\u0368"+
		"\b%\n%\f%\u036b\t%\u0001%\u0001%\u0001&\u0001&\u0001&\u0001&\u0001&\u0001"+
		"&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001"+
		"&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001"+
		"&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001"+
		"&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001"+
		"&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001"+
		"&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001"+
		"&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001"+
		"&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001"+
		"&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001"+
		"&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001"+
		"&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001"+
		"&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001"+
		"&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001"+
		"&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001"+
		"&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001"+
		"&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001"+
		"&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0003&\u041b\b&\u0001\'\u0001"+
		"\'\u0001\'\u0004\'\u0420\b\'\u000b\'\f\'\u0421\u0001(\u0001(\u0001(\u0001"+
		"(\u0001)\u0001)\u0001)\u0001)\u0001*\u0001*\u0001*\u0001*\u0001+\u0001"+
		"+\u0001,\u0001,\u0001-\u0001-\u0001.\u0001.\u0001/\u0001/\u0001/\u0005"+
		"/\u043b\b/\n/\f/\u043e\t/\u0001/\u0001/\u00010\u00010\u00010\u00010\u0001"+
		"0\u00010\u00010\u00010\u00010\u00010\u00010\u00010\u00010\u00010\u0001"+
		"0\u00010\u00010\u00010\u00010\u00010\u00010\u00010\u00010\u00010\u0001"+
		"0\u00010\u00010\u00010\u00010\u00010\u00010\u00010\u00010\u00010\u0001"+
		"0\u00010\u00010\u00010\u00010\u00010\u00010\u00010\u00010\u00010\u0001"+
		"0\u00010\u00010\u00010\u00010\u00010\u00010\u00010\u00010\u00010\u0001"+
		"0\u00010\u00010\u00010\u00010\u00010\u00010\u00010\u00010\u00010\u0001"+
		"0\u00010\u00010\u00010\u00010\u00010\u00010\u00010\u00010\u00010\u0001"+
		"0\u00010\u00010\u00010\u00010\u00010\u00010\u00010\u00010\u00010\u0001"+
		"0\u00010\u00010\u00010\u00010\u00010\u00010\u00040\u049d\b0\u000b0\f0"+
		"\u049e\u00010\u00010\u00010\u00010\u00010\u00010\u00010\u00010\u00010"+
		"\u00010\u00010\u00010\u00010\u00010\u00010\u00030\u04b0\b0\u00011\u0001"+
		"1\u00011\u00011\u00012\u00012\u00012\u00012\u00013\u00013\u00013\u0004"+
		"3\u04bd\b3\u000b3\f3\u04be\u00014\u00014\u00014\u00014\u00014\u00014\u0001"+
		"5\u00015\u00015\u00015\u00016\u00016\u00017\u00017\u00018\u00018\u0001"+
		"9\u00019\u0001:\u0001:\u0001;\u0001;\u0005;\u04d7\b;\n;\f;\u04da\t;\u0001"+
		";\u0001;\u0001<\u0001<\u0001<\u0001<\u0001<\u0001<\u0001<\u0001<\u0001"+
		"<\u0001<\u0001<\u0001<\u0001<\u0001<\u0001<\u0001<\u0001<\u0001<\u0001"+
		"<\u0001<\u0001<\u0001<\u0001<\u0001<\u0001<\u0001<\u0001<\u0001<\u0001"+
		"<\u0001<\u0001<\u0001<\u0001<\u0001<\u0001<\u0001<\u0001<\u0001<\u0001"+
		"<\u0003<\u0505\b<\u0001=\u0001=\u0001>\u0001>\u0001>\u0001>\u0001?\u0001"+
		"?\u0001?\u0001?\u0001@\u0001@\u0001A\u0001A\u0001A\u0004A\u0516\bA\u000b"+
		"A\fA\u0517\u0001B\u0001B\u0001C\u0001C\u0001C\u0001C\u0001D\u0001D\u0001"+
		"D\u0001D\u0001E\u0001E\u0001F\u0001F\u0001F\u0001F\u0001G\u0001G\u0001"+
		"G\u0001G\u0001H\u0001H\u0001H\u0001H\u0001I\u0001I\u0001I\u0001I\u0001"+
		"J\u0001J\u0001J\u0001J\u0001K\u0001K\u0001K\u0001K\u0001L\u0001L\u0001"+
		"L\u0001L\u0001M\u0001M\u0001M\u0001M\u0001N\u0001N\u0001N\u0001N\u0001"+
		"N\u0001O\u0001O\u0001O\u0001O\u0001O\u0001P\u0001P\u0001P\u0001P\u0001"+
		"P\u0001Q\u0001Q\u0001Q\u0001Q\u0001Q\u0001R\u0001R\u0001R\u0001R\u0001"+
		"R\u0001R\u0001S\u0001S\u0001S\u0001S\u0001S\u0001S\u0001T\u0001T\u0001"+
		"T\u0001T\u0001U\u0001U\u0001U\u0001U\u0001U\u0001U\u0001U\u0001V\u0001"+
		"V\u0001V\u0001V\u0001V\u0001V\u0001V\u0001W\u0001W\u0001W\u0001W\u0001"+
		"X\u0001X\u0001X\u0001X\u0001Y\u0001Y\u0001Y\u0004Y\u0583\bY\u000bY\fY"+
		"\u0584\u0001Z\u0001Z\u0001Z\u0001Z\u0001[\u0001[\u0001[\u0001[\u0001\\"+
		"\u0001\\\u0001\\\u0001\\\u0001]\u0001]\u0001]\u0001]\u0001^\u0001^\u0001"+
		"^\u0001^\u0001_\u0001_\u0001_\u0001_\u0003_\u059f\b_\u0001`\u0001`\u0001"+
		"`\u0001`\u0001a\u0001a\u0001a\u0001a\u0003a\u05a9\ba\u0001b\u0001b\u0001"+
		"b\u0001b\u0003b\u05af\bb\u0001c\u0001c\u0001c\u0001c\u0001d\u0001d\u0001"+
		"d\u0001d\u0001e\u0001e\u0001e\u0001e\u0001f\u0001f\u0001f\u0001f\u0001"+
		"g\u0001g\u0001g\u0001g\u0001h\u0001h\u0001h\u0001h\u0001i\u0001i\u0001"+
		"i\u0001i\u0001j\u0001j\u0001j\u0001j\u0001k\u0001k\u0001k\u0001k\u0001"+
		"l\u0001l\u0001l\u0001l\u0001m\u0001m\u0001m\u0001m\u0001n\u0001n\u0001"+
		"n\u0001n\u0001o\u0001o\u0001o\u0001o\u0001p\u0001p\u0001p\u0001p\u0001"+
		"q\u0001q\u0001q\u0001q\u0001r\u0001r\u0001r\u0001r\u0001s\u0001s\u0001"+
		"s\u0001s\u0001t\u0001t\u0001t\u0001t\u0001u\u0001u\u0001u\u0001u\u0001"+
		"u\u0001u\u0001v\u0001v\u0001v\u0001v\u0001w\u0001w\u0001w\u0001w\u0001"+
		"w\u0001w\u0001x\u0001x\u0001x\u0001x\u0001y\u0001y\u0001y\u0001y\u0001"+
		"z\u0001z\u0001z\u0001z\u0001{\u0001{\u0001{\u0001{\u0001|\u0001|\u0001"+
		"|\u0001|\u0001}\u0001}\u0001}\u0001}\u0001~\u0001~\u0001~\u0001~\u0001"+
		"\u007f\u0001\u007f\u0001\u007f\u0001\u007f\u0001\u0080\u0001\u0080\u0001"+
		"\u0080\u0001\u0080\u0001\u0081\u0001\u0081\u0001\u0081\u0001\u0081\u0001"+
		"\u0082\u0001\u0082\u0001\u0082\u0001\u0082\u0001\u0083\u0001\u0083\u0001"+
		"\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001"+
		"\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001"+
		"\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001"+
		"\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001"+
		"\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001"+
		"\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001"+
		"\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0004\u0083\u065f\b\u0083\u000b"+
		"\u0083\f\u0083\u0660\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001"+
		"\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0004\u0083\u066c"+
		"\b\u0083\u000b\u0083\f\u0083\u066d\u0001\u0083\u0001\u0083\u0001\u0083"+
		"\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083"+
		"\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083"+
		"\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083"+
		"\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083"+
		"\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083"+
		"\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083"+
		"\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083"+
		"\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083"+
		"\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083"+
		"\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083"+
		"\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083"+
		"\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083"+
		"\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083"+
		"\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083"+
		"\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083"+
		"\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083\u0001\u0083"+
		"\u0001\u0083\u0003\u0083\u06d4\b\u0083\u0001\u0084\u0001\u0084\u0001\u0085"+
		"\u0001\u0085\u0001\u0086\u0001\u0086\u0001\u0087\u0001\u0087\u0001\u0088"+
		"\u0001\u0088\u0001\u0089\u0001\u0089\u0001\u008a\u0001\u008a\u0001\u008b"+
		"\u0001\u008b\u0001\u008c\u0001\u008c\u0001\u008c\u0001\u008c\u0001\u008d"+
		"\u0001\u008d\u0001\u008e\u0001\u008e\u0001\u008e\u0004\u008e\u06ef\b\u008e"+
		"\u000b\u008e\f\u008e\u06f0\u0001\u008f\u0001\u008f\u0001\u0090\u0001\u0090"+
		"\u0001\u0090\u0001\u0090\u0001\u0091\u0001\u0091\u0001\u0092\u0001\u0092"+
		"\u0001\u0093\u0001\u0093\u0001\u0093\u0001\u0093\u0001\u0094\u0001\u0094"+
		"\u0001\u0095\u0001\u0095\u0001\u0095\u0004\u0095\u0706\b\u0095\u000b\u0095"+
		"\f\u0095\u0707\u0001\u0096\u0001\u0096\u0001\u0096\u0001\u0096\u0001\u0097"+
		"\u0001\u0097\u0001\u0097\u0001\u0097\u0001\u0097\u0000\u0000\u0098\u0000"+
		"\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c"+
		"\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|~\u0080\u0082\u0084"+
		"\u0086\u0088\u008a\u008c\u008e\u0090\u0092\u0094\u0096\u0098\u009a\u009c"+
		"\u009e\u00a0\u00a2\u00a4\u00a6\u00a8\u00aa\u00ac\u00ae\u00b0\u00b2\u00b4"+
		"\u00b6\u00b8\u00ba\u00bc\u00be\u00c0\u00c2\u00c4\u00c6\u00c8\u00ca\u00cc"+
		"\u00ce\u00d0\u00d2\u00d4\u00d6\u00d8\u00da\u00dc\u00de\u00e0\u00e2\u00e4"+
		"\u00e6\u00e8\u00ea\u00ec\u00ee\u00f0\u00f2\u00f4\u00f6\u00f8\u00fa\u00fc"+
		"\u00fe\u0100\u0102\u0104\u0106\u0108\u010a\u010c\u010e\u0110\u0112\u0114"+
		"\u0116\u0118\u011a\u011c\u011e\u0120\u0122\u0124\u0126\u0128\u012a\u012c"+
		"\u012e\u0000\u0006\u0001\u00008<\u0002\u0000CC\u0171\u0171\u0001\u0000"+
		"Yu\u0001\u0000\u015c\u015d\u0001\u0000\u00ee\u00f0\u0001\u0000\u00f2\u00f3"+
		"\u07c7\u0000\u0133\u0001\u0000\u0000\u0000\u0002\u0145\u0001\u0000\u0000"+
		"\u0000\u0004\u014d\u0001\u0000\u0000\u0000\u0006\u01d7\u0001\u0000\u0000"+
		"\u0000\b\u01d9\u0001\u0000\u0000\u0000\n\u01e3\u0001\u0000\u0000\u0000"+
		"\f\u01fd\u0001\u0000\u0000\u0000\u000e\u01ff\u0001\u0000\u0000\u0000\u0010"+
		"\u0216\u0001\u0000\u0000\u0000\u0012\u0218\u0001\u0000\u0000\u0000\u0014"+
		"\u0221\u0001\u0000\u0000\u0000\u0016\u023d\u0001\u0000\u0000\u0000\u0018"+
		"\u023f\u0001\u0000\u0000\u0000\u001a\u0258\u0001\u0000\u0000\u0000\u001c"+
		"\u025a\u0001\u0000\u0000\u0000\u001e\u0264\u0001\u0000\u0000\u0000 \u0269"+
		"\u0001\u0000\u0000\u0000\"\u0287\u0001\u0000\u0000\u0000$\u0289\u0001"+
		"\u0000\u0000\u0000&\u0293\u0001\u0000\u0000\u0000(\u0297\u0001\u0000\u0000"+
		"\u0000*\u02a7\u0001\u0000\u0000\u0000,\u02a9\u0001\u0000\u0000\u0000."+
		"\u02bc\u0001\u0000\u0000\u00000\u02be\u0001\u0000\u0000\u00002\u02d0\u0001"+
		"\u0000\u0000\u00004\u02d2\u0001\u0000\u0000\u00006\u02e8\u0001\u0000\u0000"+
		"\u00008\u02f1\u0001\u0000\u0000\u0000:\u02fc\u0001\u0000\u0000\u0000<"+
		"\u030c\u0001\u0000\u0000\u0000>\u0319\u0001\u0000\u0000\u0000@\u0322\u0001"+
		"\u0000\u0000\u0000B\u032c\u0001\u0000\u0000\u0000D\u0337\u0001\u0000\u0000"+
		"\u0000F\u0341\u0001\u0000\u0000\u0000H\u0362\u0001\u0000\u0000\u0000J"+
		"\u0364\u0001\u0000\u0000\u0000L\u041a\u0001\u0000\u0000\u0000N\u041c\u0001"+
		"\u0000\u0000\u0000P\u0423\u0001\u0000\u0000\u0000R\u0427\u0001\u0000\u0000"+
		"\u0000T\u042b\u0001\u0000\u0000\u0000V\u042f\u0001\u0000\u0000\u0000X"+
		"\u0431\u0001\u0000\u0000\u0000Z\u0433\u0001\u0000\u0000\u0000\\\u0435"+
		"\u0001\u0000\u0000\u0000^\u0437\u0001\u0000\u0000\u0000`\u04af\u0001\u0000"+
		"\u0000\u0000b\u04b1\u0001\u0000\u0000\u0000d\u04b5\u0001\u0000\u0000\u0000"+
		"f\u04b9\u0001\u0000\u0000\u0000h\u04c0\u0001\u0000\u0000\u0000j\u04c6"+
		"\u0001\u0000\u0000\u0000l\u04ca\u0001\u0000\u0000\u0000n\u04cc\u0001\u0000"+
		"\u0000\u0000p\u04ce\u0001\u0000\u0000\u0000r\u04d0\u0001\u0000\u0000\u0000"+
		"t\u04d2\u0001\u0000\u0000\u0000v\u04d4\u0001\u0000\u0000\u0000x\u0504"+
		"\u0001\u0000\u0000\u0000z\u0506\u0001\u0000\u0000\u0000|\u0508\u0001\u0000"+
		"\u0000\u0000~\u050c\u0001\u0000\u0000\u0000\u0080\u0510\u0001\u0000\u0000"+
		"\u0000\u0082\u0512\u0001\u0000\u0000\u0000\u0084\u0519\u0001\u0000\u0000"+
		"\u0000\u0086\u051b\u0001\u0000\u0000\u0000\u0088\u051f\u0001\u0000\u0000"+
		"\u0000\u008a\u0523\u0001\u0000\u0000\u0000\u008c\u0525\u0001\u0000\u0000"+
		"\u0000\u008e\u0529\u0001\u0000\u0000\u0000\u0090\u052d\u0001\u0000\u0000"+
		"\u0000\u0092\u0531\u0001\u0000\u0000\u0000\u0094\u0535\u0001\u0000\u0000"+
		"\u0000\u0096\u0539\u0001\u0000\u0000\u0000\u0098\u053d\u0001\u0000\u0000"+
		"\u0000\u009a\u0541\u0001\u0000\u0000\u0000\u009c\u0545\u0001\u0000\u0000"+
		"\u0000\u009e\u054a\u0001\u0000\u0000\u0000\u00a0\u054f\u0001\u0000\u0000"+
		"\u0000\u00a2\u0554\u0001\u0000\u0000\u0000\u00a4\u0559\u0001\u0000\u0000"+
		"\u0000\u00a6\u055f\u0001\u0000\u0000\u0000\u00a8\u0565\u0001\u0000\u0000"+
		"\u0000\u00aa\u0569\u0001\u0000\u0000\u0000\u00ac\u0570\u0001\u0000\u0000"+
		"\u0000\u00ae\u0577\u0001\u0000\u0000\u0000\u00b0\u057b\u0001\u0000\u0000"+
		"\u0000\u00b2\u057f\u0001\u0000\u0000\u0000\u00b4\u0586\u0001\u0000\u0000"+
		"\u0000\u00b6\u058a\u0001\u0000\u0000\u0000\u00b8\u058e\u0001\u0000\u0000"+
		"\u0000\u00ba\u0592\u0001\u0000\u0000\u0000\u00bc\u0596\u0001\u0000\u0000"+
		"\u0000\u00be\u059a\u0001\u0000\u0000\u0000\u00c0\u05a0\u0001\u0000\u0000"+
		"\u0000\u00c2\u05a4\u0001\u0000\u0000\u0000\u00c4\u05aa\u0001\u0000\u0000"+
		"\u0000\u00c6\u05b0\u0001\u0000\u0000\u0000\u00c8\u05b4\u0001\u0000\u0000"+
		"\u0000\u00ca\u05b8\u0001\u0000\u0000\u0000\u00cc\u05bc\u0001\u0000\u0000"+
		"\u0000\u00ce\u05c0\u0001\u0000\u0000\u0000\u00d0\u05c4\u0001\u0000\u0000"+
		"\u0000\u00d2\u05c8\u0001\u0000\u0000\u0000\u00d4\u05cc\u0001\u0000\u0000"+
		"\u0000\u00d6\u05d0\u0001\u0000\u0000\u0000\u00d8\u05d4\u0001\u0000\u0000"+
		"\u0000\u00da\u05d8\u0001\u0000\u0000\u0000\u00dc\u05dc\u0001\u0000\u0000"+
		"\u0000\u00de\u05e0\u0001\u0000\u0000\u0000\u00e0\u05e4\u0001\u0000\u0000"+
		"\u0000\u00e2\u05e8\u0001\u0000\u0000\u0000\u00e4\u05ec\u0001\u0000\u0000"+
		"\u0000\u00e6\u05f0\u0001\u0000\u0000\u0000\u00e8\u05f4\u0001\u0000\u0000"+
		"\u0000\u00ea\u05f8\u0001\u0000\u0000\u0000\u00ec\u05fe\u0001\u0000\u0000"+
		"\u0000\u00ee\u0602\u0001\u0000\u0000\u0000\u00f0\u0608\u0001\u0000\u0000"+
		"\u0000\u00f2\u060c\u0001\u0000\u0000\u0000\u00f4\u0610\u0001\u0000\u0000"+
		"\u0000\u00f6\u0614\u0001\u0000\u0000\u0000\u00f8\u0618\u0001\u0000\u0000"+
		"\u0000\u00fa\u061c\u0001\u0000\u0000\u0000\u00fc\u0620\u0001\u0000\u0000"+
		"\u0000\u00fe\u0624\u0001\u0000\u0000\u0000\u0100\u0628\u0001\u0000\u0000"+
		"\u0000\u0102\u062c\u0001\u0000\u0000\u0000\u0104\u0630\u0001\u0000\u0000"+
		"\u0000\u0106\u06d3\u0001\u0000\u0000\u0000\u0108\u06d5\u0001\u0000\u0000"+
		"\u0000\u010a\u06d7\u0001\u0000\u0000\u0000\u010c\u06d9\u0001\u0000\u0000"+
		"\u0000\u010e\u06db\u0001\u0000\u0000\u0000\u0110\u06dd\u0001\u0000\u0000"+
		"\u0000\u0112\u06df\u0001\u0000\u0000\u0000\u0114\u06e1\u0001\u0000\u0000"+
		"\u0000\u0116\u06e3\u0001\u0000\u0000\u0000\u0118\u06e5\u0001\u0000\u0000"+
		"\u0000\u011a\u06e9\u0001\u0000\u0000\u0000\u011c\u06eb\u0001\u0000\u0000"+
		"\u0000\u011e\u06f2\u0001\u0000\u0000\u0000\u0120\u06f4\u0001\u0000\u0000"+
		"\u0000\u0122\u06f8\u0001\u0000\u0000\u0000\u0124\u06fa\u0001\u0000\u0000"+
		"\u0000\u0126\u06fc\u0001\u0000\u0000\u0000\u0128\u0700\u0001\u0000\u0000"+
		"\u0000\u012a\u0702\u0001\u0000\u0000\u0000\u012c\u0709\u0001\u0000\u0000"+
		"\u0000\u012e\u070d\u0001\u0000\u0000\u0000\u0130\u0132\u0003\u0002\u0001"+
		"\u0000\u0131\u0130\u0001\u0000\u0000\u0000\u0132\u0135\u0001\u0000\u0000"+
		"\u0000\u0133\u0131\u0001\u0000\u0000\u0000\u0133\u0134\u0001\u0000\u0000"+
		"\u0000\u0134\u0136\u0001\u0000\u0000\u0000\u0135\u0133\u0001\u0000\u0000"+
		"\u0000\u0136\u0137\u0005\u0000\u0000\u0001\u0137\u0001\u0001\u0000\u0000"+
		"\u0000\u0138\u0146\u0003\u0014\n\u0000\u0139\u0146\u0003\u0004\u0002\u0000"+
		"\u013a\u0146\u0003\u0018\f\u0000\u013b\u0146\u0003\u001c\u000e\u0000\u013c"+
		"\u0146\u0003 \u0010\u0000\u013d\u0146\u0003$\u0012\u0000\u013e\u0146\u0003"+
		"(\u0014\u0000\u013f\u0146\u0003,\u0016\u0000\u0140\u0146\u00030\u0018"+
		"\u0000\u0141\u0146\u0003D\"\u0000\u0142\u0146\u0003J%\u0000\u0143\u0146"+
		"\u0003^/\u0000\u0144\u0146\u0003v;\u0000\u0145\u0138\u0001\u0000\u0000"+
		"\u0000\u0145\u0139\u0001\u0000\u0000\u0000\u0145\u013a\u0001\u0000\u0000"+
		"\u0000\u0145\u013b\u0001\u0000\u0000\u0000\u0145\u013c\u0001\u0000\u0000"+
		"\u0000\u0145\u013d\u0001\u0000\u0000\u0000\u0145\u013e\u0001\u0000\u0000"+
		"\u0000\u0145\u013f\u0001\u0000\u0000\u0000\u0145\u0140\u0001\u0000\u0000"+
		"\u0000\u0145\u0141\u0001\u0000\u0000\u0000\u0145\u0142\u0001\u0000\u0000"+
		"\u0000\u0145\u0143\u0001\u0000\u0000\u0000\u0145\u0144\u0001\u0000\u0000"+
		"\u0000\u0146\u014a\u0001\u0000\u0000\u0000\u0147\u0149\u0005\u0172\u0000"+
		"\u0000\u0148\u0147\u0001\u0000\u0000\u0000\u0149\u014c\u0001\u0000\u0000"+
		"\u0000\u014a\u0148\u0001\u0000\u0000\u0000\u014a\u014b\u0001\u0000\u0000"+
		"\u0000\u014b\u0003\u0001\u0000\u0000\u0000\u014c\u014a\u0001\u0000\u0000"+
		"\u0000\u014d\u014e\u0005\u0001\u0000\u0000\u014e\u0154\u0005\u0172\u0000"+
		"\u0000\u014f\u0153\u0003\u0006\u0003\u0000\u0150\u0153\u0003\u000e\u0007"+
		"\u0000\u0151\u0153\u0003\b\u0004\u0000\u0152\u014f\u0001\u0000\u0000\u0000"+
		"\u0152\u0150\u0001\u0000\u0000\u0000\u0152\u0151\u0001\u0000\u0000\u0000"+
		"\u0153\u0156\u0001\u0000\u0000\u0000\u0154\u0152\u0001\u0000\u0000\u0000"+
		"\u0154\u0155\u0001\u0000\u0000\u0000\u0155\u0157\u0001\u0000\u0000\u0000"+
		"\u0156\u0154\u0001\u0000\u0000\u0000\u0157\u0158\u0003z=\u0000\u0158\u0005"+
		"\u0001\u0000\u0000\u0000\u0159\u015a\u0005\u0002\u0000\u0000\u015a\u015b"+
		"\u0005\u015f\u0000\u0000\u015b\u01d8\u0005\u015d\u0000\u0000\u015c\u015d"+
		"\u0005\u0003\u0000\u0000\u015d\u015e\u0005\u015f\u0000\u0000\u015e\u01d8"+
		"\u0005\u015c\u0000\u0000\u015f\u0160\u0005\u0004\u0000\u0000\u0160\u0161"+
		"\u0005\u015f\u0000\u0000\u0161\u01d8\u0005\u015c\u0000\u0000\u0162\u0163"+
		"\u0005\u0005\u0000\u0000\u0163\u0164\u0005\u015f\u0000\u0000\u0164\u01d8"+
		"\u0005\u015c\u0000\u0000\u0165\u0166\u0005\u0006\u0000\u0000\u0166\u0167"+
		"\u0005\u015f\u0000\u0000\u0167\u01d8\u0005\u015d\u0000\u0000\u0168\u0169"+
		"\u0005\u0007\u0000\u0000\u0169\u016a\u0005\u015f\u0000\u0000\u016a\u01d8"+
		"\u0005\u015d\u0000\u0000\u016b\u016c\u0005\b\u0000\u0000\u016c\u016d\u0005"+
		"\u015f\u0000\u0000\u016d\u01d8\u0005\u015d\u0000\u0000\u016e\u016f\u0005"+
		"\t\u0000\u0000\u016f\u0170\u0005\u015f\u0000\u0000\u0170\u01d8\u0005\u015d"+
		"\u0000\u0000\u0171\u0172\u0005\n\u0000\u0000\u0172\u0173\u0005\u015f\u0000"+
		"\u0000\u0173\u01d8\u0005\u015d\u0000\u0000\u0174\u0175\u0005\u000b\u0000"+
		"\u0000\u0175\u0176\u0005\u015f\u0000\u0000\u0176\u01d8\u0005\u015d\u0000"+
		"\u0000\u0177\u0178\u0005\f\u0000\u0000\u0178\u0179\u0005\u015f\u0000\u0000"+
		"\u0179\u01d8\u0005\u015d\u0000\u0000\u017a\u017b\u0005\r\u0000\u0000\u017b"+
		"\u017c\u0005\u015f\u0000\u0000\u017c\u01d8\u0005\u015d\u0000\u0000\u017d"+
		"\u017e\u0005\u000e\u0000\u0000\u017e\u017f\u0005\u015f\u0000\u0000\u017f"+
		"\u01d8\u0005\u015d\u0000\u0000\u0180\u0181\u0005\u000f\u0000\u0000\u0181"+
		"\u0182\u0005\u015f\u0000\u0000\u0182\u01d8\u0005\u015c\u0000\u0000\u0183"+
		"\u0184\u0005\u0010\u0000\u0000\u0184\u0185\u0005\u015f\u0000\u0000\u0185"+
		"\u01d8\u0005\u015c\u0000\u0000\u0186\u0187\u0005\u0011\u0000\u0000\u0187"+
		"\u0188\u0005\u015f\u0000\u0000\u0188\u01d8\u0005\u015c\u0000\u0000\u0189"+
		"\u018a\u0005\u0012\u0000\u0000\u018a\u018b\u0005\u015f\u0000\u0000\u018b"+
		"\u01d8\u0005\u015d\u0000\u0000\u018c\u018d\u0005\u0013\u0000\u0000\u018d"+
		"\u018e\u0005\u015f\u0000\u0000\u018e\u01d8\u0005\u015d\u0000\u0000\u018f"+
		"\u0190\u0005\u0014\u0000\u0000\u0190\u0191\u0005\u015f\u0000\u0000\u0191"+
		"\u01d8\u0005\u015d\u0000\u0000\u0192\u0193\u0005\u0015\u0000\u0000\u0193"+
		"\u0194\u0005\u015f\u0000\u0000\u0194\u01d8\u0005\u015d\u0000\u0000\u0195"+
		"\u0196\u0005\u0016\u0000\u0000\u0196\u0197\u0005\u015f\u0000\u0000\u0197"+
		"\u01d8\u0005\u015d\u0000\u0000\u0198\u0199\u0005\u0017\u0000\u0000\u0199"+
		"\u019a\u0005\u015f\u0000\u0000\u019a\u01d8\u0005\u015c\u0000\u0000\u019b"+
		"\u019c\u0005\u0018\u0000\u0000\u019c\u019d\u0005\u015f\u0000\u0000\u019d"+
		"\u01d8\u0005\u016f\u0000\u0000\u019e\u019f\u0005\u0019\u0000\u0000\u019f"+
		"\u01a0\u0005\u015f\u0000\u0000\u01a0\u01d8\u0005\u016f\u0000\u0000\u01a1"+
		"\u01a2\u0005\u001a\u0000\u0000\u01a2\u01a3\u0005\u015f\u0000\u0000\u01a3"+
		"\u01d8\u0005\u016f\u0000\u0000\u01a4\u01a5\u0005\u001b\u0000\u0000\u01a5"+
		"\u01a6\u0005\u015f\u0000\u0000\u01a6\u01d8\u0005\u016f\u0000\u0000\u01a7"+
		"\u01a8\u0005\u001c\u0000\u0000\u01a8\u01a9\u0005\u015f\u0000\u0000\u01a9"+
		"\u01d8\u0005\u015d\u0000\u0000\u01aa\u01ab\u0005\u001d\u0000\u0000\u01ab"+
		"\u01ac\u0005\u015f\u0000\u0000\u01ac\u01d8\u0005\u015c\u0000\u0000\u01ad"+
		"\u01ae\u0005\u001e\u0000\u0000\u01ae\u01af\u0005\u015f\u0000\u0000\u01af"+
		"\u01d8\u0005\u016f\u0000\u0000\u01b0\u01b1\u0005\u001f\u0000\u0000\u01b1"+
		"\u01b2\u0005\u015f\u0000\u0000\u01b2\u01d8\u0005\u015d\u0000\u0000\u01b3"+
		"\u01b4\u0005 \u0000\u0000\u01b4\u01b5\u0005\u015f\u0000\u0000\u01b5\u01d8"+
		"\u0005\u015c\u0000\u0000\u01b6\u01b7\u0005!\u0000\u0000\u01b7\u01b8\u0005"+
		"\u015f\u0000\u0000\u01b8\u01d8\u0005\u015c\u0000\u0000\u01b9\u01ba\u0005"+
		"\"\u0000\u0000\u01ba\u01bb\u0005\u015f\u0000\u0000\u01bb\u01d8\u0005\u015d"+
		"\u0000\u0000\u01bc\u01bd\u0005#\u0000\u0000\u01bd\u01be\u0005\u015f\u0000"+
		"\u0000\u01be\u01d8\u0005\u015d\u0000\u0000\u01bf\u01c0\u0005$\u0000\u0000"+
		"\u01c0\u01c1\u0005\u015f\u0000\u0000\u01c1\u01d8\u0005\u015c\u0000\u0000"+
		"\u01c2\u01c3\u0005%\u0000\u0000\u01c3\u01c4\u0005\u015f\u0000\u0000\u01c4"+
		"\u01d8\u0005\u015c\u0000\u0000\u01c5\u01c6\u0005&\u0000\u0000\u01c6\u01c7"+
		"\u0005\u015f\u0000\u0000\u01c7\u01d8\u0005\u015d\u0000\u0000\u01c8\u01c9"+
		"\u0005\'\u0000\u0000\u01c9\u01ca\u0005\u015f\u0000\u0000\u01ca\u01d8\u0005"+
		"\u015c\u0000\u0000\u01cb\u01cc\u0005(\u0000\u0000\u01cc\u01cd\u0005\u015f"+
		"\u0000\u0000\u01cd\u01d8\u0005\u015d\u0000\u0000\u01ce\u01cf\u0005)\u0000"+
		"\u0000\u01cf\u01d0\u0005\u015f\u0000\u0000\u01d0\u01d8\u0005\u016f\u0000"+
		"\u0000\u01d1\u01d2\u0005*\u0000\u0000\u01d2\u01d3\u0005\u015f\u0000\u0000"+
		"\u01d3\u01d8\u0005\u015d\u0000\u0000\u01d4\u01d5\u0005+\u0000\u0000\u01d5"+
		"\u01d6\u0005\u015f\u0000\u0000\u01d6\u01d8\u0005\u015d\u0000\u0000\u01d7"+
		"\u0159\u0001\u0000\u0000\u0000\u01d7\u015c\u0001\u0000\u0000\u0000\u01d7"+
		"\u015f\u0001\u0000\u0000\u0000\u01d7\u0162\u0001\u0000\u0000\u0000\u01d7"+
		"\u0165\u0001\u0000\u0000\u0000\u01d7\u0168\u0001\u0000\u0000\u0000\u01d7"+
		"\u016b\u0001\u0000\u0000\u0000\u01d7\u016e\u0001\u0000\u0000\u0000\u01d7"+
		"\u0171\u0001\u0000\u0000\u0000\u01d7\u0174\u0001\u0000\u0000\u0000\u01d7"+
		"\u0177\u0001\u0000\u0000\u0000\u01d7\u017a\u0001\u0000\u0000\u0000\u01d7"+
		"\u017d\u0001\u0000\u0000\u0000\u01d7\u0180\u0001\u0000\u0000\u0000\u01d7"+
		"\u0183\u0001\u0000\u0000\u0000\u01d7\u0186\u0001\u0000\u0000\u0000\u01d7"+
		"\u0189\u0001\u0000\u0000\u0000\u01d7\u018c\u0001\u0000\u0000\u0000\u01d7"+
		"\u018f\u0001\u0000\u0000\u0000\u01d7\u0192\u0001\u0000\u0000\u0000\u01d7"+
		"\u0195\u0001\u0000\u0000\u0000\u01d7\u0198\u0001\u0000\u0000\u0000\u01d7"+
		"\u019b\u0001\u0000\u0000\u0000\u01d7\u019e\u0001\u0000\u0000\u0000\u01d7"+
		"\u01a1\u0001\u0000\u0000\u0000\u01d7\u01a4\u0001\u0000\u0000\u0000\u01d7"+
		"\u01a7\u0001\u0000\u0000\u0000\u01d7\u01aa\u0001\u0000\u0000\u0000\u01d7"+
		"\u01ad\u0001\u0000\u0000\u0000\u01d7\u01b0\u0001\u0000\u0000\u0000\u01d7"+
		"\u01b3\u0001\u0000\u0000\u0000\u01d7\u01b6\u0001\u0000\u0000\u0000\u01d7"+
		"\u01b9\u0001\u0000\u0000\u0000\u01d7\u01bc\u0001\u0000\u0000\u0000\u01d7"+
		"\u01bf\u0001\u0000\u0000\u0000\u01d7\u01c2\u0001\u0000\u0000\u0000\u01d7"+
		"\u01c5\u0001\u0000\u0000\u0000\u01d7\u01c8\u0001\u0000\u0000\u0000\u01d7"+
		"\u01cb\u0001\u0000\u0000\u0000\u01d7\u01ce\u0001\u0000\u0000\u0000\u01d7"+
		"\u01d1\u0001\u0000\u0000\u0000\u01d7\u01d4\u0001\u0000\u0000\u0000\u01d8"+
		"\u0007\u0001\u0000\u0000\u0000\u01d9\u01da\u0005,\u0000\u0000\u01da\u01de"+
		"\u0003\u0108\u0084\u0000\u01db\u01dd\u0003\n\u0005\u0000\u01dc\u01db\u0001"+
		"\u0000\u0000\u0000\u01dd\u01e0\u0001\u0000\u0000\u0000\u01de\u01dc\u0001"+
		"\u0000\u0000\u0000\u01de\u01df\u0001\u0000\u0000\u0000\u01df\u01e1\u0001"+
		"\u0000\u0000\u0000\u01e0\u01de\u0001\u0000\u0000\u0000\u01e1\u01e2\u0003"+
		"z=\u0000\u01e2\t\u0001\u0000\u0000\u0000\u01e3\u01e4\u0005-\u0000\u0000"+
		"\u01e4\u01e8\u0003\u011a\u008d\u0000\u01e5\u01e7\u0003\f\u0006\u0000\u01e6"+
		"\u01e5\u0001\u0000\u0000\u0000\u01e7\u01ea\u0001\u0000\u0000\u0000\u01e8"+
		"\u01e6\u0001\u0000\u0000\u0000\u01e8\u01e9\u0001\u0000\u0000\u0000\u01e9"+
		"\u01eb\u0001\u0000\u0000\u0000\u01ea\u01e8\u0001\u0000\u0000\u0000\u01eb"+
		"\u01ec\u0003z=\u0000\u01ec\u000b\u0001\u0000\u0000\u0000\u01ed\u01ee\u0005"+
		".\u0000\u0000\u01ee\u01ef\u0005\u015f\u0000\u0000\u01ef\u01f0\u0005\u0162"+
		"\u0000\u0000\u01f0\u01fe\u0005\u0163\u0000\u0000\u01f1\u01f2\u0005/\u0000"+
		"\u0000\u01f2\u01f3\u0005\u015f\u0000\u0000\u01f3\u01fe\u0005\u015c\u0000"+
		"\u0000\u01f4\u01f5\u00050\u0000\u0000\u01f5\u01f6\u0005\u015f\u0000\u0000"+
		"\u01f6\u01fe\u0005\u015d\u0000\u0000\u01f7\u01f8\u00051\u0000\u0000\u01f8"+
		"\u01f9\u0005\u015f\u0000\u0000\u01f9\u01fe\u0005\u016f\u0000\u0000\u01fa"+
		"\u01fb\u00052\u0000\u0000\u01fb\u01fc\u0005\u015f\u0000\u0000\u01fc\u01fe"+
		"\u0005\u016f\u0000\u0000\u01fd\u01ed\u0001\u0000\u0000\u0000\u01fd\u01f1"+
		"\u0001\u0000\u0000\u0000\u01fd\u01f4\u0001\u0000\u0000\u0000\u01fd\u01f7"+
		"\u0001\u0000\u0000\u0000\u01fd\u01fa\u0001\u0000\u0000\u0000\u01fe\r\u0001"+
		"\u0000\u0000\u0000\u01ff\u0200\u00053\u0000\u0000\u0200\u0204\u0005\u0171"+
		"\u0000\u0000\u0201\u0203\u0003\u0010\b\u0000\u0202\u0201\u0001\u0000\u0000"+
		"\u0000\u0203\u0206\u0001\u0000\u0000\u0000\u0204\u0202\u0001\u0000\u0000"+
		"\u0000\u0204\u0205\u0001\u0000\u0000\u0000\u0205\u0207\u0001\u0000\u0000"+
		"\u0000\u0206\u0204\u0001\u0000\u0000\u0000\u0207\u0208\u0003z=\u0000\u0208"+
		"\u000f\u0001\u0000\u0000\u0000\u0209\u020a\u00054\u0000\u0000\u020a\u020b"+
		"\u0005\u015f\u0000\u0000\u020b\u0217\u0005\u015c\u0000\u0000\u020c\u020d"+
		"\u00055\u0000\u0000\u020d\u020e\u0005\u015f\u0000\u0000\u020e\u0217\u0005"+
		"\u015c\u0000\u0000\u020f\u0210\u00056\u0000\u0000\u0210\u0211\u0005\u015f"+
		"\u0000\u0000\u0211\u0217\u0005\u015c\u0000\u0000\u0212\u0213\u00057\u0000"+
		"\u0000\u0213\u0214\u0005\u015f\u0000\u0000\u0214\u0217\u0003\u011a\u008d"+
		"\u0000\u0215\u0217\u0003\u0012\t\u0000\u0216\u0209\u0001\u0000\u0000\u0000"+
		"\u0216\u020c\u0001\u0000\u0000\u0000\u0216\u020f\u0001\u0000\u0000\u0000"+
		"\u0216\u0212\u0001\u0000\u0000\u0000\u0216\u0215\u0001\u0000\u0000\u0000"+
		"\u0217\u0011\u0001\u0000\u0000\u0000\u0218\u021c\u0007\u0000\u0000\u0000"+
		"\u0219\u021b\u0003\u011c\u008e\u0000\u021a\u0219\u0001\u0000\u0000\u0000"+
		"\u021b\u021e\u0001\u0000\u0000\u0000\u021c\u021a\u0001\u0000\u0000\u0000"+
		"\u021c\u021d\u0001\u0000\u0000\u0000\u021d\u021f\u0001\u0000\u0000\u0000"+
		"\u021e\u021c\u0001\u0000\u0000\u0000\u021f\u0220\u0003z=\u0000\u0220\u0013"+
		"\u0001\u0000\u0000\u0000\u0221\u0222\u0005=\u0000\u0000\u0222\u0226\u0005"+
		"\u0171\u0000\u0000\u0223\u0225\u0003\u0016\u000b\u0000\u0224\u0223\u0001"+
		"\u0000\u0000\u0000\u0225\u0228\u0001\u0000\u0000\u0000\u0226\u0224\u0001"+
		"\u0000\u0000\u0000\u0226\u0227\u0001\u0000\u0000\u0000\u0227\u0229\u0001"+
		"\u0000\u0000\u0000\u0228\u0226\u0001\u0000\u0000\u0000\u0229\u022a\u0003"+
		"z=\u0000\u022a\u0015\u0001\u0000\u0000\u0000\u022b\u022c\u0005>\u0000"+
		"\u0000\u022c\u022d\u0005\u015f\u0000\u0000\u022d\u023e\u0003|>\u0000\u022e"+
		"\u022f\u0005?\u0000\u0000\u022f\u0230\u0005\u015f\u0000\u0000\u0230\u023e"+
		"\u0005\u015c\u0000\u0000\u0231\u0232\u0005@\u0000\u0000\u0232\u0233\u0005"+
		"\u015f\u0000\u0000\u0233\u023e\u0005\u015c\u0000\u0000\u0234\u0235\u0005"+
		"A\u0000\u0000\u0235\u0236\u0005\u015f\u0000\u0000\u0236\u0237\u0005\u0165"+
		"\u0000\u0000\u0237\u0238\u0005\u0166\u0000\u0000\u0238\u0239\u0005\u0167"+
		"\u0000\u0000\u0239\u023e\u0005\u0168\u0000\u0000\u023a\u023b\u0005B\u0000"+
		"\u0000\u023b\u023c\u0005\u015f\u0000\u0000\u023c\u023e\u0007\u0001\u0000"+
		"\u0000\u023d\u022b\u0001\u0000\u0000\u0000\u023d\u022e\u0001\u0000\u0000"+
		"\u0000\u023d\u0231\u0001\u0000\u0000\u0000\u023d\u0234\u0001\u0000\u0000"+
		"\u0000\u023d\u023a\u0001\u0000\u0000\u0000\u023e\u0017\u0001\u0000\u0000"+
		"\u0000\u023f\u0240\u0005D\u0000\u0000\u0240\u0244\u0005\u0171\u0000\u0000"+
		"\u0241\u0243\u0003\u001a\r\u0000\u0242\u0241\u0001\u0000\u0000\u0000\u0243"+
		"\u0246\u0001\u0000\u0000\u0000\u0244\u0242\u0001\u0000\u0000\u0000\u0244"+
		"\u0245\u0001\u0000\u0000\u0000\u0245\u0247\u0001\u0000\u0000\u0000\u0246"+
		"\u0244\u0001\u0000\u0000\u0000\u0247\u0248\u0003z=\u0000\u0248\u0019\u0001"+
		"\u0000\u0000\u0000\u0249\u024a\u0005E\u0000\u0000\u024a\u024b\u0005\u015f"+
		"\u0000\u0000\u024b\u0259\u0005\u0171\u0000\u0000\u024c\u024d\u0005F\u0000"+
		"\u0000\u024d\u024e\u0005\u015f\u0000\u0000\u024e\u0259\u0005\u015c\u0000"+
		"\u0000\u024f\u0250\u0005G\u0000\u0000\u0250\u0251\u0005\u015f\u0000\u0000"+
		"\u0251\u0259\u0005\u016f\u0000\u0000\u0252\u0253\u0005H\u0000\u0000\u0253"+
		"\u0254\u0005\u015f\u0000\u0000\u0254\u0259\u0005\u015c\u0000\u0000\u0255"+
		"\u0256\u0005I\u0000\u0000\u0256\u0257\u0005\u015f\u0000\u0000\u0257\u0259"+
		"\u0005\u0171\u0000\u0000\u0258\u0249\u0001\u0000\u0000\u0000\u0258\u024c"+
		"\u0001\u0000\u0000\u0000\u0258\u024f\u0001\u0000\u0000\u0000\u0258\u0252"+
		"\u0001\u0000\u0000\u0000\u0258\u0255\u0001\u0000\u0000\u0000\u0259\u001b"+
		"\u0001\u0000\u0000\u0000\u025a\u025b\u0005J\u0000\u0000\u025b\u025f\u0005"+
		"\u0171\u0000\u0000\u025c\u025e\u0003\u001e\u000f\u0000\u025d\u025c\u0001"+
		"\u0000\u0000\u0000\u025e\u0261\u0001\u0000\u0000\u0000\u025f\u025d\u0001"+
		"\u0000\u0000\u0000\u025f\u0260\u0001\u0000\u0000\u0000\u0260\u0262\u0001"+
		"\u0000\u0000\u0000\u0261\u025f\u0001\u0000\u0000\u0000\u0262\u0263\u0003"+
		"z=\u0000\u0263\u001d\u0001\u0000\u0000\u0000\u0264\u0265\u0005J\u0000"+
		"\u0000\u0265\u0266\u0005\u015f\u0000\u0000\u0266\u0267\u0005\u0171\u0000"+
		"\u0000\u0267\u0268\u0005\u015e\u0000\u0000\u0268\u001f\u0001\u0000\u0000"+
		"\u0000\u0269\u026a\u0005K\u0000\u0000\u026a\u026b\u0005\u0171\u0000\u0000"+
		"\u026b\u0271\u0005\u0172\u0000\u0000\u026c\u026d\u0003\"\u0011\u0000\u026d"+
		"\u026e\u0005\u0172\u0000\u0000\u026e\u0270\u0001\u0000\u0000\u0000\u026f"+
		"\u026c\u0001\u0000\u0000\u0000\u0270\u0273\u0001\u0000\u0000\u0000\u0271"+
		"\u026f\u0001\u0000\u0000\u0000\u0271\u0272\u0001\u0000\u0000\u0000\u0272"+
		"\u0274\u0001\u0000\u0000\u0000\u0273\u0271\u0001\u0000\u0000\u0000\u0274"+
		"\u0275\u0003z=\u0000\u0275!\u0001\u0000\u0000\u0000\u0276\u0288\u0003"+
		"~?\u0000\u0277\u0288\u0003\u0082A\u0000\u0278\u0288\u0003\u0086C\u0000"+
		"\u0279\u0288\u0003\u0088D\u0000\u027a\u0288\u0003\u008cF\u0000\u027b\u0288"+
		"\u0003\u008eG\u0000\u027c\u0288\u0003\u0090H\u0000\u027d\u0288\u0003\u0092"+
		"I\u0000\u027e\u0288\u0003\u0094J\u0000\u027f\u0288\u0003\u0096K\u0000"+
		"\u0280\u0288\u0003\u0098L\u0000\u0281\u0288\u0003\u009aM\u0000\u0282\u0288"+
		"\u0003\u0118\u008c\u0000\u0283\u0288\u0003\u011c\u008e\u0000\u0284\u0288"+
		"\u0003\u0120\u0090\u0000\u0285\u0288\u0003\u0126\u0093\u0000\u0286\u0288"+
		"\u0003\u012a\u0095\u0000\u0287\u0276\u0001\u0000\u0000\u0000\u0287\u0277"+
		"\u0001\u0000\u0000\u0000\u0287\u0278\u0001\u0000\u0000\u0000\u0287\u0279"+
		"\u0001\u0000\u0000\u0000\u0287\u027a\u0001\u0000\u0000\u0000\u0287\u027b"+
		"\u0001\u0000\u0000\u0000\u0287\u027c\u0001\u0000\u0000\u0000\u0287\u027d"+
		"\u0001\u0000\u0000\u0000\u0287\u027e\u0001\u0000\u0000\u0000\u0287\u027f"+
		"\u0001\u0000\u0000\u0000\u0287\u0280\u0001\u0000\u0000\u0000\u0287\u0281"+
		"\u0001\u0000\u0000\u0000\u0287\u0282\u0001\u0000\u0000\u0000\u0287\u0283"+
		"\u0001\u0000\u0000\u0000\u0287\u0284\u0001\u0000\u0000\u0000\u0287\u0285"+
		"\u0001\u0000\u0000\u0000\u0287\u0286\u0001\u0000\u0000\u0000\u0288#\u0001"+
		"\u0000\u0000\u0000\u0289\u028a\u0005L\u0000\u0000\u028a\u028e\u0005\u0171"+
		"\u0000\u0000\u028b\u028d\u0003&\u0013\u0000\u028c\u028b\u0001\u0000\u0000"+
		"\u0000\u028d\u0290\u0001\u0000\u0000\u0000\u028e\u028c\u0001\u0000\u0000"+
		"\u0000\u028e\u028f\u0001\u0000\u0000\u0000\u028f\u0291\u0001\u0000\u0000"+
		"\u0000\u0290\u028e\u0001\u0000\u0000\u0000\u0291\u0292\u0003z=\u0000\u0292"+
		"%\u0001\u0000\u0000\u0000\u0293\u0294\u0005\u015c\u0000\u0000\u0294\u0295"+
		"\u0005\u015f\u0000\u0000\u0295\u0296\u0003\u010a\u0085\u0000\u0296\'\u0001"+
		"\u0000\u0000\u0000\u0297\u0298\u0005M\u0000\u0000\u0298\u029c\u0005\u0171"+
		"\u0000\u0000\u0299\u029b\u0003*\u0015\u0000\u029a\u0299\u0001\u0000\u0000"+
		"\u0000\u029b\u029e\u0001\u0000\u0000\u0000\u029c\u029a\u0001\u0000\u0000"+
		"\u0000\u029c\u029d\u0001\u0000\u0000\u0000\u029d\u029f\u0001\u0000\u0000"+
		"\u0000\u029e\u029c\u0001\u0000\u0000\u0000\u029f\u02a0\u0003z=\u0000\u02a0"+
		")\u0001\u0000\u0000\u0000\u02a1\u02a8\u0003\u009cN\u0000\u02a2\u02a8\u0003"+
		"\u00a0P\u0000\u02a3\u02a8\u0003\u00a2Q\u0000\u02a4\u02a8\u0003\u00a4R"+
		"\u0000\u02a5\u02a8\u0003\u009eO\u0000\u02a6\u02a8\u0003\u00a6S\u0000\u02a7"+
		"\u02a1\u0001\u0000\u0000\u0000\u02a7\u02a2\u0001\u0000\u0000\u0000\u02a7"+
		"\u02a3\u0001\u0000\u0000\u0000\u02a7\u02a4\u0001\u0000\u0000\u0000\u02a7"+
		"\u02a5\u0001\u0000\u0000\u0000\u02a7\u02a6\u0001\u0000\u0000\u0000\u02a8"+
		"+\u0001\u0000\u0000\u0000\u02a9\u02ad\u0005N\u0000\u0000\u02aa\u02ac\u0003"+
		".\u0017\u0000\u02ab\u02aa\u0001\u0000\u0000\u0000\u02ac\u02af\u0001\u0000"+
		"\u0000\u0000\u02ad\u02ab\u0001\u0000\u0000\u0000\u02ad\u02ae\u0001\u0000"+
		"\u0000\u0000\u02ae\u02b0\u0001\u0000\u0000\u0000\u02af\u02ad\u0001\u0000"+
		"\u0000\u0000\u02b0\u02b1\u0003z=\u0000\u02b1-\u0001\u0000\u0000\u0000"+
		"\u02b2\u02bd\u0003\u00a8T\u0000\u02b3\u02bd\u0003\u00aaU\u0000\u02b4\u02bd"+
		"\u0003\u00acV\u0000\u02b5\u02bd\u0003\u00aeW\u0000\u02b6\u02bd\u0003\u00b0"+
		"X\u0000\u02b7\u02bd\u0003\u00b2Y\u0000\u02b8\u02bd\u0003\u00b4Z\u0000"+
		"\u02b9\u02bd\u0003\u00b6[\u0000\u02ba\u02bd\u0003\u00b8\\\u0000\u02bb"+
		"\u02bd\u0003\u00ba]\u0000\u02bc\u02b2\u0001\u0000\u0000\u0000\u02bc\u02b3"+
		"\u0001\u0000\u0000\u0000\u02bc\u02b4\u0001\u0000\u0000\u0000\u02bc\u02b5"+
		"\u0001\u0000\u0000\u0000\u02bc\u02b6\u0001\u0000\u0000\u0000\u02bc\u02b7"+
		"\u0001\u0000\u0000\u0000\u02bc\u02b8\u0001\u0000\u0000\u0000\u02bc\u02b9"+
		"\u0001\u0000\u0000\u0000\u02bc\u02ba\u0001\u0000\u0000\u0000\u02bc\u02bb"+
		"\u0001\u0000\u0000\u0000\u02bd/\u0001\u0000\u0000\u0000\u02be\u02bf\u0005"+
		"O\u0000\u0000\u02bf\u02c3\u0005\u0171\u0000\u0000\u02c0\u02c2\u00032\u0019"+
		"\u0000\u02c1\u02c0\u0001\u0000\u0000\u0000\u02c2\u02c5\u0001\u0000\u0000"+
		"\u0000\u02c3\u02c1\u0001\u0000\u0000\u0000\u02c3\u02c4\u0001\u0000\u0000"+
		"\u0000\u02c4\u02c6\u0001\u0000\u0000\u0000\u02c5\u02c3\u0001\u0000\u0000"+
		"\u0000\u02c6\u02c7\u0003z=\u0000\u02c71\u0001\u0000\u0000\u0000\u02c8"+
		"\u02d1\u00034\u001a\u0000\u02c9\u02d1\u00036\u001b\u0000\u02ca\u02d1\u0003"+
		"8\u001c\u0000\u02cb\u02d1\u0003:\u001d\u0000\u02cc\u02d1\u0003<\u001e"+
		"\u0000\u02cd\u02d1\u0003>\u001f\u0000\u02ce\u02d1\u0003@ \u0000\u02cf"+
		"\u02d1\u0003B!\u0000\u02d0\u02c8\u0001\u0000\u0000\u0000\u02d0\u02c9\u0001"+
		"\u0000\u0000\u0000\u02d0\u02ca\u0001\u0000\u0000\u0000\u02d0\u02cb\u0001"+
		"\u0000\u0000\u0000\u02d0\u02cc\u0001\u0000\u0000\u0000\u02d0\u02cd\u0001"+
		"\u0000\u0000\u0000\u02d0\u02ce\u0001\u0000\u0000\u0000\u02d0\u02cf\u0001"+
		"\u0000\u0000\u0000\u02d13\u0001\u0000\u0000\u0000\u02d2\u02e3\u0005P\u0000"+
		"\u0000\u02d3\u02e2\u0003\u00bc^\u0000\u02d4\u02e2\u0003\u00be_\u0000\u02d5"+
		"\u02e2\u0003\u00c0`\u0000\u02d6\u02e2\u0003\u00c4b\u0000\u02d7\u02e2\u0003"+
		"\u00c2a\u0000\u02d8\u02e2\u0003\u00c6c\u0000\u02d9\u02e2\u0003\u00c8d"+
		"\u0000\u02da\u02e2\u0003\u00cae\u0000\u02db\u02e2\u0003\u00ccf\u0000\u02dc"+
		"\u02e2\u0003\u00ceg\u0000\u02dd\u02e2\u0003\u00d2i\u0000\u02de\u02e2\u0003"+
		"\u00d0h\u0000\u02df\u02e2\u0003\u00d4j\u0000\u02e0\u02e2\u0003\u00d6k"+
		"\u0000\u02e1\u02d3\u0001\u0000\u0000\u0000\u02e1\u02d4\u0001\u0000\u0000"+
		"\u0000\u02e1\u02d5\u0001\u0000\u0000\u0000\u02e1\u02d6\u0001\u0000\u0000"+
		"\u0000\u02e1\u02d7\u0001\u0000\u0000\u0000\u02e1\u02d8\u0001\u0000\u0000"+
		"\u0000\u02e1\u02d9\u0001\u0000\u0000\u0000\u02e1\u02da\u0001\u0000\u0000"+
		"\u0000\u02e1\u02db\u0001\u0000\u0000\u0000\u02e1\u02dc\u0001\u0000\u0000"+
		"\u0000\u02e1\u02dd\u0001\u0000\u0000\u0000\u02e1\u02de\u0001\u0000\u0000"+
		"\u0000\u02e1\u02df\u0001\u0000\u0000\u0000\u02e1\u02e0\u0001\u0000\u0000"+
		"\u0000\u02e2\u02e5\u0001\u0000\u0000\u0000\u02e3\u02e1\u0001\u0000\u0000"+
		"\u0000\u02e3\u02e4\u0001\u0000\u0000\u0000\u02e4\u02e6\u0001\u0000\u0000"+
		"\u0000\u02e5\u02e3\u0001\u0000\u0000\u0000\u02e6\u02e7\u0003z=\u0000\u02e7"+
		"5\u0001\u0000\u0000\u0000\u02e8\u02ec\u0005Q\u0000\u0000\u02e9\u02eb\u0003"+
		"\u00d8l\u0000\u02ea\u02e9\u0001\u0000\u0000\u0000\u02eb\u02ee\u0001\u0000"+
		"\u0000\u0000\u02ec\u02ea\u0001\u0000\u0000\u0000\u02ec\u02ed\u0001\u0000"+
		"\u0000\u0000\u02ed\u02ef\u0001\u0000\u0000\u0000\u02ee\u02ec\u0001\u0000"+
		"\u0000\u0000\u02ef\u02f0\u0003z=\u0000\u02f07\u0001\u0000\u0000\u0000"+
		"\u02f1\u02f7\u0005R\u0000\u0000\u02f2\u02f6\u0003\u0104\u0082\u0000\u02f3"+
		"\u02f6\u0003\u00dam\u0000\u02f4\u02f6\u0003\u00dcn\u0000\u02f5\u02f2\u0001"+
		"\u0000\u0000\u0000\u02f5\u02f3\u0001\u0000\u0000\u0000\u02f5\u02f4\u0001"+
		"\u0000\u0000\u0000\u02f6\u02f9\u0001\u0000\u0000\u0000\u02f7\u02f5\u0001"+
		"\u0000\u0000\u0000\u02f7\u02f8\u0001\u0000\u0000\u0000\u02f8\u02fa\u0001"+
		"\u0000\u0000\u0000\u02f9\u02f7\u0001\u0000\u0000\u0000\u02fa\u02fb\u0003"+
		"z=\u0000\u02fb9\u0001\u0000\u0000\u0000\u02fc\u0307\u0005S\u0000\u0000"+
		"\u02fd\u0306\u0003\u00deo\u0000\u02fe\u0306\u0003\u00e0p\u0000\u02ff\u0306"+
		"\u0003\u00e2q\u0000\u0300\u0306\u0003\u00e4r\u0000\u0301\u0306\u0003\u00e6"+
		"s\u0000\u0302\u0306\u0003\u00e8t\u0000\u0303\u0306\u0003\u00eau\u0000"+
		"\u0304\u0306\u0003\u00ecv\u0000\u0305\u02fd\u0001\u0000\u0000\u0000\u0305"+
		"\u02fe\u0001\u0000\u0000\u0000\u0305\u02ff\u0001\u0000\u0000\u0000\u0305"+
		"\u0300\u0001\u0000\u0000\u0000\u0305\u0301\u0001\u0000\u0000\u0000\u0305"+
		"\u0302\u0001\u0000\u0000\u0000\u0305\u0303\u0001\u0000\u0000\u0000\u0305"+
		"\u0304\u0001\u0000\u0000\u0000\u0306\u0309\u0001\u0000\u0000\u0000\u0307"+
		"\u0305\u0001\u0000\u0000\u0000\u0307\u0308\u0001\u0000\u0000\u0000\u0308"+
		"\u030a\u0001\u0000\u0000\u0000\u0309\u0307\u0001\u0000\u0000\u0000\u030a"+
		"\u030b\u0003z=\u0000\u030b;\u0001\u0000\u0000\u0000\u030c\u0314\u0005"+
		"T\u0000\u0000\u030d\u0313\u0003\u00eew\u0000\u030e\u0313\u0003\u00f0x"+
		"\u0000\u030f\u0313\u0003\u00f2y\u0000\u0310\u0313\u0003\u00f4z\u0000\u0311"+
		"\u0313\u0003\u00f6{\u0000\u0312\u030d\u0001\u0000\u0000\u0000\u0312\u030e"+
		"\u0001\u0000\u0000\u0000\u0312\u030f\u0001\u0000\u0000\u0000\u0312\u0310"+
		"\u0001\u0000\u0000\u0000\u0312\u0311\u0001\u0000\u0000\u0000\u0313\u0316"+
		"\u0001\u0000\u0000\u0000\u0314\u0312\u0001\u0000\u0000\u0000\u0314\u0315"+
		"\u0001\u0000\u0000\u0000\u0315\u0317\u0001\u0000\u0000\u0000\u0316\u0314"+
		"\u0001\u0000\u0000\u0000\u0317\u0318\u0003z=\u0000\u0318=\u0001\u0000"+
		"\u0000\u0000\u0319\u031d\u0005U\u0000\u0000\u031a\u031c\u0003\u00f8|\u0000"+
		"\u031b\u031a\u0001\u0000\u0000\u0000\u031c\u031f\u0001\u0000\u0000\u0000"+
		"\u031d\u031b\u0001\u0000\u0000\u0000\u031d\u031e\u0001\u0000\u0000\u0000"+
		"\u031e\u0320\u0001\u0000\u0000\u0000\u031f\u031d\u0001\u0000\u0000\u0000"+
		"\u0320\u0321\u0003z=\u0000\u0321?\u0001\u0000\u0000\u0000\u0322\u0327"+
		"\u0005V\u0000\u0000\u0323\u0326\u0003\u00fa}\u0000\u0324\u0326\u0003\u00fc"+
		"~\u0000\u0325\u0323\u0001\u0000\u0000\u0000\u0325\u0324\u0001\u0000\u0000"+
		"\u0000\u0326\u0329\u0001\u0000\u0000\u0000\u0327\u0325\u0001\u0000\u0000"+
		"\u0000\u0327\u0328\u0001\u0000\u0000\u0000\u0328\u032a\u0001\u0000\u0000"+
		"\u0000\u0329\u0327\u0001\u0000\u0000\u0000\u032a\u032b\u0003z=\u0000\u032b"+
		"A\u0001\u0000\u0000\u0000\u032c\u0332\u0005W\u0000\u0000\u032d\u0331\u0003"+
		"\u00fe\u007f\u0000\u032e\u0331\u0003\u0100\u0080\u0000\u032f\u0331\u0003"+
		"\u0102\u0081\u0000\u0330\u032d\u0001\u0000\u0000\u0000\u0330\u032e\u0001"+
		"\u0000\u0000\u0000\u0330\u032f\u0001\u0000\u0000\u0000\u0331\u0334\u0001"+
		"\u0000\u0000\u0000\u0332\u0330\u0001\u0000\u0000\u0000\u0332\u0333\u0001"+
		"\u0000\u0000\u0000\u0333\u0335\u0001\u0000\u0000\u0000\u0334\u0332\u0001"+
		"\u0000\u0000\u0000\u0335\u0336\u0003z=\u0000\u0336C\u0001\u0000\u0000"+
		"\u0000\u0337\u033c\u0005X\u0000\u0000\u0338\u033b\u0003\u0106\u0083\u0000"+
		"\u0339\u033b\u0003F#\u0000\u033a\u0338\u0001\u0000\u0000\u0000\u033a\u0339"+
		"\u0001\u0000\u0000\u0000\u033b\u033e\u0001\u0000\u0000\u0000\u033c\u033a"+
		"\u0001\u0000\u0000\u0000\u033c\u033d\u0001\u0000\u0000\u0000\u033d\u033f"+
		"\u0001\u0000\u0000\u0000\u033e\u033c\u0001\u0000\u0000\u0000\u033f\u0340"+
		"\u0003z=\u0000\u0340E\u0001\u0000\u0000\u0000\u0341\u0345\u0007\u0002"+
		"\u0000\u0000\u0342\u0344\u0003H$\u0000\u0343\u0342\u0001\u0000\u0000\u0000"+
		"\u0344\u0347\u0001\u0000\u0000\u0000\u0345\u0343\u0001\u0000\u0000\u0000"+
		"\u0345\u0346\u0001\u0000\u0000\u0000\u0346\u0348\u0001\u0000\u0000\u0000"+
		"\u0347\u0345\u0001\u0000\u0000\u0000\u0348\u0349\u0003z=\u0000\u0349G"+
		"\u0001\u0000\u0000\u0000\u034a\u034b\u0005>\u0000\u0000\u034b\u034c\u0005"+
		"\u015f\u0000\u0000\u034c\u0363\u0005\u0171\u0000\u0000\u034d\u034e\u0005"+
		"v\u0000\u0000\u034e\u034f\u0005\u015f\u0000\u0000\u034f\u0363\u0005\u0171"+
		"\u0000\u0000\u0350\u0351\u0005w\u0000\u0000\u0351\u0352\u0005\u015f\u0000"+
		"\u0000\u0352\u0363\u0005\u015e\u0000\u0000\u0353\u0354\u0005x\u0000\u0000"+
		"\u0354\u0355\u0005\u015f\u0000\u0000\u0355\u0363\u0005\u015e\u0000\u0000"+
		"\u0356\u0357\u0005y\u0000\u0000\u0357\u0358\u0005\u015f\u0000\u0000\u0358"+
		"\u0363\u0005\u015c\u0000\u0000\u0359\u035a\u0005z\u0000\u0000\u035a\u035b"+
		"\u0005\u015f\u0000\u0000\u035b\u035c\u0005\u0169\u0000\u0000\u035c\u035d"+
		"\u0005\u016a\u0000\u0000\u035d\u035e\u0005\u016b\u0000\u0000\u035e\u0363"+
		"\u0005\u016c\u0000\u0000\u035f\u0360\u0005{\u0000\u0000\u0360\u0361\u0005"+
		"\u015f\u0000\u0000\u0361\u0363\u0005\u016f\u0000\u0000\u0362\u034a\u0001"+
		"\u0000\u0000\u0000\u0362\u034d\u0001\u0000\u0000\u0000\u0362\u0350\u0001"+
		"\u0000\u0000\u0000\u0362\u0353\u0001\u0000\u0000\u0000\u0362\u0356\u0001"+
		"\u0000\u0000\u0000\u0362\u0359\u0001\u0000\u0000\u0000\u0362\u035f\u0001"+
		"\u0000\u0000\u0000\u0363I\u0001\u0000\u0000\u0000\u0364\u0365\u0005|\u0000"+
		"\u0000\u0365\u0369\u0005\u0171\u0000\u0000\u0366\u0368\u0003L&\u0000\u0367"+
		"\u0366\u0001\u0000\u0000\u0000\u0368\u036b\u0001\u0000\u0000\u0000\u0369"+
		"\u0367\u0001\u0000\u0000\u0000\u0369\u036a\u0001\u0000\u0000\u0000\u036a"+
		"\u036c\u0001\u0000\u0000\u0000\u036b\u0369\u0001\u0000\u0000\u0000\u036c"+
		"\u036d\u0003z=\u0000\u036dK\u0001\u0000\u0000\u0000\u036e\u041b\u0003"+
		"N\'\u0000\u036f\u041b\u0003P(\u0000\u0370\u041b\u0003R)\u0000\u0371\u041b"+
		"\u0003T*\u0000\u0372\u0373\u0005}\u0000\u0000\u0373\u0374\u0005\u015f"+
		"\u0000\u0000\u0374\u041b\u0007\u0003\u0000\u0000\u0375\u0376\u0005~\u0000"+
		"\u0000\u0376\u0377\u0005\u015f\u0000\u0000\u0377\u041b\u0007\u0003\u0000"+
		"\u0000\u0378\u0379\u0005\u007f\u0000\u0000\u0379\u037a\u0005\u015f\u0000"+
		"\u0000\u037a\u041b\u0007\u0003\u0000\u0000\u037b\u037c\u0005\u0080\u0000"+
		"\u0000\u037c\u037d\u0005\u015f\u0000\u0000\u037d\u041b\u0007\u0003\u0000"+
		"\u0000\u037e\u037f\u0005\u0081\u0000\u0000\u037f\u0380\u0005\u015f\u0000"+
		"\u0000\u0380\u041b\u0007\u0003\u0000\u0000\u0381\u0382\u0005\u0082\u0000"+
		"\u0000\u0382\u0383\u0005\u015f\u0000\u0000\u0383\u041b\u0007\u0003\u0000"+
		"\u0000\u0384\u0385\u0005\u0083\u0000\u0000\u0385\u0386\u0005\u015f\u0000"+
		"\u0000\u0386\u041b\u0007\u0003\u0000\u0000\u0387\u0388\u0005\u0084\u0000"+
		"\u0000\u0388\u0389\u0005\u015f\u0000\u0000\u0389\u041b\u0005\u015c\u0000"+
		"\u0000\u038a\u038b\u0005\u0085\u0000\u0000\u038b\u038c\u0005\u015f\u0000"+
		"\u0000\u038c\u041b\u0005\u015c\u0000\u0000\u038d\u038e\u0005\u0086\u0000"+
		"\u0000\u038e\u038f\u0005\u015f\u0000\u0000\u038f\u041b\u0005\u015c\u0000"+
		"\u0000\u0390\u0391\u0005\u0087\u0000\u0000\u0391\u0392\u0005\u015f\u0000"+
		"\u0000\u0392\u041b\u0005\u016f\u0000\u0000\u0393\u0394\u0005\u0088\u0000"+
		"\u0000\u0394\u0395\u0005\u015f\u0000\u0000\u0395\u041b\u0007\u0003\u0000"+
		"\u0000\u0396\u0397\u0005\u0089\u0000\u0000\u0397\u0398\u0005\u015f\u0000"+
		"\u0000\u0398\u041b\u0007\u0003\u0000\u0000\u0399\u039a\u0005\u008a\u0000"+
		"\u0000\u039a\u039b\u0005\u015f\u0000\u0000\u039b\u041b\u0007\u0003\u0000"+
		"\u0000\u039c\u039d\u0005\u008b\u0000\u0000\u039d\u039e\u0005\u015f\u0000"+
		"\u0000\u039e\u041b\u0007\u0003\u0000\u0000\u039f\u03a0\u0005\u008c\u0000"+
		"\u0000\u03a0\u03a1\u0005\u015f\u0000\u0000\u03a1\u041b\u0007\u0003\u0000"+
		"\u0000\u03a2\u03a3\u0005\u008d\u0000\u0000\u03a3\u03a4\u0005\u015f\u0000"+
		"\u0000\u03a4\u041b\u0007\u0003\u0000\u0000\u03a5\u03a6\u0005\u008e\u0000"+
		"\u0000\u03a6\u03a7\u0005\u015f\u0000\u0000\u03a7\u041b\u0005\u015c\u0000"+
		"\u0000\u03a8\u03a9\u0005\u008f\u0000\u0000\u03a9\u03aa\u0005\u015f\u0000"+
		"\u0000\u03aa\u041b\u0007\u0003\u0000\u0000\u03ab\u03ac\u0005\u0090\u0000"+
		"\u0000\u03ac\u03ad\u0005\u015f\u0000\u0000\u03ad\u041b\u0007\u0003\u0000"+
		"\u0000\u03ae\u03af\u0005\u0091\u0000\u0000\u03af\u03b0\u0005\u015f\u0000"+
		"\u0000\u03b0\u041b\u0007\u0003\u0000\u0000\u03b1\u03b2\u0005\u0092\u0000"+
		"\u0000\u03b2\u03b3\u0005\u015f\u0000\u0000\u03b3\u041b\u0007\u0003\u0000"+
		"\u0000\u03b4\u03b5\u0005\u0093\u0000\u0000\u03b5\u03b6\u0005\u015f\u0000"+
		"\u0000\u03b6\u041b\u0007\u0003\u0000\u0000\u03b7\u03b8\u0005\u0094\u0000"+
		"\u0000\u03b8\u03b9\u0005\u015f\u0000\u0000\u03b9\u041b\u0007\u0003\u0000"+
		"\u0000\u03ba\u03bb\u0005\u0095\u0000\u0000\u03bb\u03bc\u0005\u015f\u0000"+
		"\u0000\u03bc\u041b\u0007\u0003\u0000\u0000\u03bd\u03be\u0005\u0096\u0000"+
		"\u0000\u03be\u03bf\u0005\u015f\u0000\u0000\u03bf\u041b\u0007\u0003\u0000"+
		"\u0000\u03c0\u03c1\u0005\u0097\u0000\u0000\u03c1\u03c2\u0005\u015f\u0000"+
		"\u0000\u03c2\u041b\u0005\u016f\u0000\u0000\u03c3\u03c4\u0005\u0098\u0000"+
		"\u0000\u03c4\u03c5\u0005\u015f\u0000\u0000\u03c5\u041b\u0005\u015c\u0000"+
		"\u0000\u03c6\u03c7\u0005\u0099\u0000\u0000\u03c7\u03c8\u0005\u015f\u0000"+
		"\u0000\u03c8\u041b\u0005\u016f\u0000\u0000\u03c9\u03ca\u0005\u009a\u0000"+
		"\u0000\u03ca\u03cb\u0005\u015f\u0000\u0000\u03cb\u041b\u0005\u016f\u0000"+
		"\u0000\u03cc\u03cd\u0005\u009b\u0000\u0000\u03cd\u03ce\u0005\u015f\u0000"+
		"\u0000\u03ce\u041b\u0005\u016f\u0000\u0000\u03cf\u03d0\u0005\u009c\u0000"+
		"\u0000\u03d0\u03d1\u0005\u015f\u0000\u0000\u03d1\u041b\u0007\u0003\u0000"+
		"\u0000\u03d2\u03d3\u0005\u009d\u0000\u0000\u03d3\u03d4\u0005\u015f\u0000"+
		"\u0000\u03d4\u041b\u0007\u0003\u0000\u0000\u03d5\u03d6\u0005\u009e\u0000"+
		"\u0000\u03d6\u03d7\u0005\u015f\u0000\u0000\u03d7\u041b\u0005\u015c\u0000"+
		"\u0000\u03d8\u03d9\u0005\u009f\u0000\u0000\u03d9\u03da\u0005\u015f\u0000"+
		"\u0000\u03da\u041b\u0005\u016f\u0000\u0000\u03db\u03dc\u0005\u00a0\u0000"+
		"\u0000\u03dc\u03dd\u0005\u015f\u0000\u0000\u03dd\u041b\u0007\u0003\u0000"+
		"\u0000\u03de\u03df\u0005\u00a1\u0000\u0000\u03df\u03e0\u0005\u015f\u0000"+
		"\u0000\u03e0\u041b\u0007\u0003\u0000\u0000\u03e1\u03e2\u0005\u00a2\u0000"+
		"\u0000\u03e2\u03e3\u0005\u015f\u0000\u0000\u03e3\u041b\u0007\u0003\u0000"+
		"\u0000\u03e4\u03e5\u0005\u00a3\u0000\u0000\u03e5\u03e6\u0005\u015f\u0000"+
		"\u0000\u03e6\u041b\u0007\u0003\u0000\u0000\u03e7\u03e8\u0005\u00a4\u0000"+
		"\u0000\u03e8\u03e9\u0005\u015f\u0000\u0000\u03e9\u041b\u0007\u0003\u0000"+
		"\u0000\u03ea\u03eb\u0005\u00a5\u0000\u0000\u03eb\u03ec\u0005\u015f\u0000"+
		"\u0000\u03ec\u041b\u0007\u0003\u0000\u0000\u03ed\u03ee\u0005\u00a6\u0000"+
		"\u0000\u03ee\u03ef\u0005\u015f\u0000\u0000\u03ef\u041b\u0005\u016f\u0000"+
		"\u0000\u03f0\u03f1\u0005\u00a7\u0000\u0000\u03f1\u03f2\u0005\u015f\u0000"+
		"\u0000\u03f2\u041b\u0005\u015c\u0000\u0000\u03f3\u03f4\u0005\u00a8\u0000"+
		"\u0000\u03f4\u03f5\u0005\u015f\u0000\u0000\u03f5\u041b\u0005\u015c\u0000"+
		"\u0000\u03f6\u03f7\u0005\u00a9\u0000\u0000\u03f7\u03f8\u0005\u015f\u0000"+
		"\u0000\u03f8\u041b\u0007\u0003\u0000\u0000\u03f9\u03fa\u0005\u00aa\u0000"+
		"\u0000\u03fa\u03fb\u0005\u015f\u0000\u0000\u03fb\u041b\u0007\u0003\u0000"+
		"\u0000\u03fc\u03fd\u0005\u00ab\u0000\u0000\u03fd\u03fe\u0005\u015f\u0000"+
		"\u0000\u03fe\u041b\u0005\u015c\u0000\u0000\u03ff\u0400\u0005\u00ac\u0000"+
		"\u0000\u0400\u0401\u0005\u015f\u0000\u0000\u0401\u041b\u0007\u0003\u0000"+
		"\u0000\u0402\u0403\u0005\u00ad\u0000\u0000\u0403\u0404\u0005\u015f\u0000"+
		"\u0000\u0404\u041b\u0005\u015c\u0000\u0000\u0405\u0406\u0005\u00ae\u0000"+
		"\u0000\u0406\u0407\u0005\u015f\u0000\u0000\u0407\u041b\u0005\u015c\u0000"+
		"\u0000\u0408\u0409\u0005\u00af\u0000\u0000\u0409\u040a\u0005\u015f\u0000"+
		"\u0000\u040a\u041b\u0005\u015c\u0000\u0000\u040b\u040c\u0005\u00b0\u0000"+
		"\u0000\u040c\u040d\u0005\u015f\u0000\u0000\u040d\u041b\u0005\u016f\u0000"+
		"\u0000\u040e\u040f\u0005\u00b1\u0000\u0000\u040f\u0410\u0005\u015f\u0000"+
		"\u0000\u0410\u041b\u0007\u0003\u0000\u0000\u0411\u0412\u0005\u00b2\u0000"+
		"\u0000\u0412\u0413\u0005\u015f\u0000\u0000\u0413\u041b\u0007\u0003\u0000"+
		"\u0000\u0414\u0415\u0005\u00b3\u0000\u0000\u0415\u0416\u0005\u015f\u0000"+
		"\u0000\u0416\u041b\u0007\u0003\u0000\u0000\u0417\u0418\u0005\u00b4\u0000"+
		"\u0000\u0418\u0419\u0005\u015f\u0000\u0000\u0419\u041b\u0007\u0003\u0000"+
		"\u0000\u041a\u036e\u0001\u0000\u0000\u0000\u041a\u036f\u0001\u0000\u0000"+
		"\u0000\u041a\u0370\u0001\u0000\u0000\u0000\u041a\u0371\u0001\u0000\u0000"+
		"\u0000\u041a\u0372\u0001\u0000\u0000\u0000\u041a\u0375\u0001\u0000\u0000"+
		"\u0000\u041a\u0378\u0001\u0000\u0000\u0000\u041a\u037b\u0001\u0000\u0000"+
		"\u0000\u041a\u037e\u0001\u0000\u0000\u0000\u041a\u0381\u0001\u0000\u0000"+
		"\u0000\u041a\u0384\u0001\u0000\u0000\u0000\u041a\u0387\u0001\u0000\u0000"+
		"\u0000\u041a\u038a\u0001\u0000\u0000\u0000\u041a\u038d\u0001\u0000\u0000"+
		"\u0000\u041a\u0390\u0001\u0000\u0000\u0000\u041a\u0393\u0001\u0000\u0000"+
		"\u0000\u041a\u0396\u0001\u0000\u0000\u0000\u041a\u0399\u0001\u0000\u0000"+
		"\u0000\u041a\u039c\u0001\u0000\u0000\u0000\u041a\u039f\u0001\u0000\u0000"+
		"\u0000\u041a\u03a2\u0001\u0000\u0000\u0000\u041a\u03a5\u0001\u0000\u0000"+
		"\u0000\u041a\u03a8\u0001\u0000\u0000\u0000\u041a\u03ab\u0001\u0000\u0000"+
		"\u0000\u041a\u03ae\u0001\u0000\u0000\u0000\u041a\u03b1\u0001\u0000\u0000"+
		"\u0000\u041a\u03b4\u0001\u0000\u0000\u0000\u041a\u03b7\u0001\u0000\u0000"+
		"\u0000\u041a\u03ba\u0001\u0000\u0000\u0000\u041a\u03bd\u0001\u0000\u0000"+
		"\u0000\u041a\u03c0\u0001\u0000\u0000\u0000\u041a\u03c3\u0001\u0000\u0000"+
		"\u0000\u041a\u03c6\u0001\u0000\u0000\u0000\u041a\u03c9\u0001\u0000\u0000"+
		"\u0000\u041a\u03cc\u0001\u0000\u0000\u0000\u041a\u03cf\u0001\u0000\u0000"+
		"\u0000\u041a\u03d2\u0001\u0000\u0000\u0000\u041a\u03d5\u0001\u0000\u0000"+
		"\u0000\u041a\u03d8\u0001\u0000\u0000\u0000\u041a\u03db\u0001\u0000\u0000"+
		"\u0000\u041a\u03de\u0001\u0000\u0000\u0000\u041a\u03e1\u0001\u0000\u0000"+
		"\u0000\u041a\u03e4\u0001\u0000\u0000\u0000\u041a\u03e7\u0001\u0000\u0000"+
		"\u0000\u041a\u03ea\u0001\u0000\u0000\u0000\u041a\u03ed\u0001\u0000\u0000"+
		"\u0000\u041a\u03f0\u0001\u0000\u0000\u0000\u041a\u03f3\u0001\u0000\u0000"+
		"\u0000\u041a\u03f6\u0001\u0000\u0000\u0000\u041a\u03f9\u0001\u0000\u0000"+
		"\u0000\u041a\u03fc\u0001\u0000\u0000\u0000\u041a\u03ff\u0001\u0000\u0000"+
		"\u0000\u041a\u0402\u0001\u0000\u0000\u0000\u041a\u0405\u0001\u0000\u0000"+
		"\u0000\u041a\u0408\u0001\u0000\u0000\u0000\u041a\u040b\u0001\u0000\u0000"+
		"\u0000\u041a\u040e\u0001\u0000\u0000\u0000\u041a\u0411\u0001\u0000\u0000"+
		"\u0000\u041a\u0414\u0001\u0000\u0000\u0000\u041a\u0417\u0001\u0000\u0000"+
		"\u0000\u041bM\u0001\u0000\u0000\u0000\u041c\u041d\u0005\u00b5\u0000\u0000"+
		"\u041d\u041f\u0005\u015f\u0000\u0000\u041e\u0420\u0003V+\u0000\u041f\u041e"+
		"\u0001\u0000\u0000\u0000\u0420\u0421\u0001\u0000\u0000\u0000\u0421\u041f"+
		"\u0001\u0000\u0000\u0000\u0421\u0422\u0001\u0000\u0000\u0000\u0422O\u0001"+
		"\u0000\u0000\u0000\u0423\u0424\u0005\u00b6\u0000\u0000\u0424\u0425\u0005"+
		"\u015f\u0000\u0000\u0425\u0426\u0003X,\u0000\u0426Q\u0001\u0000\u0000"+
		"\u0000\u0427\u0428\u0005\u00b7\u0000\u0000\u0428\u0429\u0005\u015f\u0000"+
		"\u0000\u0429\u042a\u0003Z-\u0000\u042aS\u0001\u0000\u0000\u0000\u042b"+
		"\u042c\u0005\u00b8\u0000\u0000\u042c\u042d\u0005\u015f\u0000\u0000\u042d"+
		"\u042e\u0003\\.\u0000\u042eU\u0001\u0000\u0000\u0000\u042f\u0430\u0005"+
		"\u0171\u0000\u0000\u0430W\u0001\u0000\u0000\u0000\u0431\u0432\u0005\u0171"+
		"\u0000\u0000\u0432Y\u0001\u0000\u0000\u0000\u0433\u0434\u0005\u0171\u0000"+
		"\u0000\u0434[\u0001\u0000\u0000\u0000\u0435\u0436\u0005\u0171\u0000\u0000"+
		"\u0436]\u0001\u0000\u0000\u0000\u0437\u0438\u0005\u00b9\u0000\u0000\u0438"+
		"\u043c\u0005\u0171\u0000\u0000\u0439\u043b\u0003`0\u0000\u043a\u0439\u0001"+
		"\u0000\u0000\u0000\u043b\u043e\u0001\u0000\u0000\u0000\u043c\u043a\u0001"+
		"\u0000\u0000\u0000\u043c\u043d\u0001\u0000\u0000\u0000\u043d\u043f\u0001"+
		"\u0000\u0000\u0000\u043e\u043c\u0001\u0000\u0000\u0000\u043f\u0440\u0003"+
		"z=\u0000\u0440_\u0001\u0000\u0000\u0000\u0441\u04b0\u0003b1\u0000\u0442"+
		"\u04b0\u0003d2\u0000\u0443\u04b0\u0003f3\u0000\u0444\u04b0\u0003h4\u0000"+
		"\u0445\u04b0\u0003j5\u0000\u0446\u0447\u0005\u00ba\u0000\u0000\u0447\u0448"+
		"\u0005\u015f\u0000\u0000\u0448\u04b0\u0007\u0003\u0000\u0000\u0449\u044a"+
		"\u0005\u00bb\u0000\u0000\u044a\u044b\u0005\u015f\u0000\u0000\u044b\u04b0"+
		"\u0007\u0003\u0000\u0000\u044c\u044d\u0005\u00bc\u0000\u0000\u044d\u044e"+
		"\u0005\u015f\u0000\u0000\u044e\u04b0\u0007\u0003\u0000\u0000\u044f\u0450"+
		"\u0005\u00bd\u0000\u0000\u0450\u0451\u0005\u015f\u0000\u0000\u0451\u04b0"+
		"\u0007\u0003\u0000\u0000\u0452\u0453\u0005\u00be\u0000\u0000\u0453\u0454"+
		"\u0005\u015f\u0000\u0000\u0454\u04b0\u0007\u0003\u0000\u0000\u0455\u0456"+
		"\u0005\u00bf\u0000\u0000\u0456\u0457\u0005\u015f\u0000\u0000\u0457\u04b0"+
		"\u0007\u0003\u0000\u0000\u0458\u0459\u0005\u00c0\u0000\u0000\u0459\u045a"+
		"\u0005\u015f\u0000\u0000\u045a\u04b0\u0005\u015c\u0000\u0000\u045b\u045c"+
		"\u0005\u00c1\u0000\u0000\u045c\u045d\u0005\u015f\u0000\u0000\u045d\u04b0"+
		"\u0005\u016f\u0000\u0000\u045e\u045f\u0005\u00c2\u0000\u0000\u045f\u0460"+
		"\u0005\u015f\u0000\u0000\u0460\u04b0\u0005\u016f\u0000\u0000\u0461\u0462"+
		"\u0005\u00c3\u0000\u0000\u0462\u0463\u0005\u015f\u0000\u0000\u0463\u04b0"+
		"\u0007\u0003\u0000\u0000\u0464\u0465\u0005\u00c4\u0000\u0000\u0465\u0466"+
		"\u0005\u015f\u0000\u0000\u0466\u04b0\u0007\u0003\u0000\u0000\u0467\u0468"+
		"\u0005\u00c5\u0000\u0000\u0468\u0469\u0005\u015f\u0000\u0000\u0469\u04b0"+
		"\u0003\u0114\u008a\u0000\u046a\u046b\u0005\u00c6\u0000\u0000\u046b\u046c"+
		"\u0005\u015f\u0000\u0000\u046c\u046d\u0005\u0161\u0000\u0000\u046d\u04b0"+
		"\u0003\u0114\u008a\u0000\u046e\u046f\u0005\u00c7\u0000\u0000\u046f\u0470"+
		"\u0005\u015f\u0000\u0000\u0470\u04b0\u0003\u011a\u008d\u0000\u0471\u0472"+
		"\u0005\u00c8\u0000\u0000\u0472\u0473\u0005\u015f\u0000\u0000\u0473\u04b0"+
		"\u0005\u016f\u0000\u0000\u0474\u0475\u0005\u00c9\u0000\u0000\u0475\u0476"+
		"\u0005\u015f\u0000\u0000\u0476\u04b0\u0007\u0003\u0000\u0000\u0477\u0478"+
		"\u0005\u00ca\u0000\u0000\u0478\u0479\u0005\u015f\u0000\u0000\u0479\u04b0"+
		"\u0005\u015c\u0000\u0000\u047a\u047b\u0005\u00cb\u0000\u0000\u047b\u047c"+
		"\u0005\u015f\u0000\u0000\u047c\u04b0\u0007\u0003\u0000\u0000\u047d\u047e"+
		"\u0005\u00cc\u0000\u0000\u047e\u047f\u0005\u015f\u0000\u0000\u047f\u04b0"+
		"\u0005\u016f\u0000\u0000\u0480\u0481\u0005\u00cd\u0000\u0000\u0481\u0482"+
		"\u0005\u015f\u0000\u0000\u0482\u04b0\u0003\u0116\u008b\u0000\u0483\u0484"+
		"\u0005\u00ce\u0000\u0000\u0484\u0485\u0005\u015f\u0000\u0000\u0485\u0486"+
		"\u0005\u0161\u0000\u0000\u0486\u04b0\u0003\u0116\u008b\u0000\u0487\u0488"+
		"\u0005\u00cf\u0000\u0000\u0488\u0489\u0005\u015f\u0000\u0000\u0489\u04b0"+
		"\u0003\u0116\u008b\u0000\u048a\u048b\u0005\u00d0\u0000\u0000\u048b\u048c"+
		"\u0005\u015f\u0000\u0000\u048c\u04b0\u0003\u0124\u0092\u0000\u048d\u048e"+
		"\u0005\u00d1\u0000\u0000\u048e\u048f\u0005\u015f\u0000\u0000\u048f\u04b0"+
		"\u0007\u0003\u0000\u0000\u0490\u0491\u0005\u00d2\u0000\u0000\u0491\u0492"+
		"\u0005\u015f\u0000\u0000\u0492\u04b0\u0005\u015c\u0000\u0000\u0493\u0494"+
		"\u0005\u00d3\u0000\u0000\u0494\u0495\u0005\u015f\u0000\u0000\u0495\u04b0"+
		"\u0005\u015c\u0000\u0000\u0496\u0497\u0005\u00d4\u0000\u0000\u0497\u0498"+
		"\u0005\u015f\u0000\u0000\u0498\u04b0\u0007\u0003\u0000\u0000\u0499\u049a"+
		"\u0005\u00d5\u0000\u0000\u049a\u049c\u0005\u015f\u0000\u0000\u049b\u049d"+
		"\u0005\u0171\u0000\u0000\u049c\u049b\u0001\u0000\u0000\u0000\u049d\u049e"+
		"\u0001\u0000\u0000\u0000\u049e\u049c\u0001\u0000\u0000\u0000\u049e\u049f"+
		"\u0001\u0000\u0000\u0000\u049f\u04b0\u0001\u0000\u0000\u0000\u04a0\u04a1"+
		"\u0005\u00d6\u0000\u0000\u04a1\u04a2\u0005\u015f\u0000\u0000\u04a2\u04b0"+
		"\u0005\u015c\u0000\u0000\u04a3\u04a4\u0005\u00d7\u0000\u0000\u04a4\u04a5"+
		"\u0005\u015f\u0000\u0000\u04a5\u04b0\u0005\u016f\u0000\u0000\u04a6\u04a7"+
		"\u0005\u00d8\u0000\u0000\u04a7\u04a8\u0005\u015f\u0000\u0000\u04a8\u04b0"+
		"\u0005\u016f\u0000\u0000\u04a9\u04aa\u0005\u00d9\u0000\u0000\u04aa\u04ab"+
		"\u0005\u015f\u0000\u0000\u04ab\u04b0\u0005\u016f\u0000\u0000\u04ac\u04ad"+
		"\u0005\u00da\u0000\u0000\u04ad\u04ae\u0005\u015f\u0000\u0000\u04ae\u04b0"+
		"\u0005\u0171\u0000\u0000\u04af\u0441\u0001\u0000\u0000\u0000\u04af\u0442"+
		"\u0001\u0000\u0000\u0000\u04af\u0443\u0001\u0000\u0000\u0000\u04af\u0444"+
		"\u0001\u0000\u0000\u0000\u04af\u0445\u0001\u0000\u0000\u0000\u04af\u0446"+
		"\u0001\u0000\u0000\u0000\u04af\u0449\u0001\u0000\u0000\u0000\u04af\u044c"+
		"\u0001\u0000\u0000\u0000\u04af\u044f\u0001\u0000\u0000\u0000\u04af\u0452"+
		"\u0001\u0000\u0000\u0000\u04af\u0455\u0001\u0000\u0000\u0000\u04af\u0458"+
		"\u0001\u0000\u0000\u0000\u04af\u045b\u0001\u0000\u0000\u0000\u04af\u045e"+
		"\u0001\u0000\u0000\u0000\u04af\u0461\u0001\u0000\u0000\u0000\u04af\u0464"+
		"\u0001\u0000\u0000\u0000\u04af\u0467\u0001\u0000\u0000\u0000\u04af\u046a"+
		"\u0001\u0000\u0000\u0000\u04af\u046e\u0001\u0000\u0000\u0000\u04af\u0471"+
		"\u0001\u0000\u0000\u0000\u04af\u0474\u0001\u0000\u0000\u0000\u04af\u0477"+
		"\u0001\u0000\u0000\u0000\u04af\u047a\u0001\u0000\u0000\u0000\u04af\u047d"+
		"\u0001\u0000\u0000\u0000\u04af\u0480\u0001\u0000\u0000\u0000\u04af\u0483"+
		"\u0001\u0000\u0000\u0000\u04af\u0487\u0001\u0000\u0000\u0000\u04af\u048a"+
		"\u0001\u0000\u0000\u0000\u04af\u048d\u0001\u0000\u0000\u0000\u04af\u0490"+
		"\u0001\u0000\u0000\u0000\u04af\u0493\u0001\u0000\u0000\u0000\u04af\u0496"+
		"\u0001\u0000\u0000\u0000\u04af\u0499\u0001\u0000\u0000\u0000\u04af\u04a0"+
		"\u0001\u0000\u0000\u0000\u04af\u04a3\u0001\u0000\u0000\u0000\u04af\u04a6"+
		"\u0001\u0000\u0000\u0000\u04af\u04a9\u0001\u0000\u0000\u0000\u04af\u04ac"+
		"\u0001\u0000\u0000\u0000\u04b0a\u0001\u0000\u0000\u0000\u04b1\u04b2\u0005"+
		"\u00db\u0000\u0000\u04b2\u04b3\u0005\u015f\u0000\u0000\u04b3\u04b4\u0003"+
		"p8\u0000\u04b4c\u0001\u0000\u0000\u0000\u04b5\u04b6\u0005\u00dc\u0000"+
		"\u0000\u04b6\u04b7\u0005\u015f\u0000\u0000\u04b7\u04b8\u0003r9\u0000\u04b8"+
		"e\u0001\u0000\u0000\u0000\u04b9\u04ba\u0005\u00dd\u0000\u0000\u04ba\u04bc"+
		"\u0005\u015f\u0000\u0000\u04bb\u04bd\u0003t:\u0000\u04bc\u04bb\u0001\u0000"+
		"\u0000\u0000\u04bd\u04be\u0001\u0000\u0000\u0000\u04be\u04bc\u0001\u0000"+
		"\u0000\u0000\u04be\u04bf\u0001\u0000\u0000\u0000\u04bfg\u0001\u0000\u0000"+
		"\u0000\u04c0\u04c1\u0005\u00de\u0000\u0000\u04c1\u04c2\u0005\u015f\u0000"+
		"\u0000\u04c2\u04c3\u0003l6\u0000\u04c3\u04c4\u0003n7\u0000\u04c4\u04c5"+
		"\u0005\u015e\u0000\u0000\u04c5i\u0001\u0000\u0000\u0000\u04c6\u04c7\u0005"+
		"\u00df\u0000\u0000\u04c7\u04c8\u0005\u015f\u0000\u0000\u04c8\u04c9\u0003"+
		"p8\u0000\u04c9k\u0001\u0000\u0000\u0000\u04ca\u04cb\u0005\u0171\u0000"+
		"\u0000\u04cbm\u0001\u0000\u0000\u0000\u04cc\u04cd\u0005\u0171\u0000\u0000"+
		"\u04cdo\u0001\u0000\u0000\u0000\u04ce\u04cf\u0005\u0171\u0000\u0000\u04cf"+
		"q\u0001\u0000\u0000\u0000\u04d0\u04d1\u0005\u0171\u0000\u0000\u04d1s\u0001"+
		"\u0000\u0000\u0000\u04d2\u04d3\u0005\u0171\u0000\u0000\u04d3u\u0001\u0000"+
		"\u0000\u0000\u04d4\u04d8\u0005\u00e0\u0000\u0000\u04d5\u04d7\u0003x<\u0000"+
		"\u04d6\u04d5\u0001\u0000\u0000\u0000\u04d7\u04da\u0001\u0000\u0000\u0000"+
		"\u04d8\u04d6\u0001\u0000\u0000\u0000\u04d8\u04d9\u0001\u0000\u0000\u0000"+
		"\u04d9\u04db\u0001\u0000\u0000\u0000\u04da\u04d8\u0001\u0000\u0000\u0000"+
		"\u04db\u04dc\u0003z=\u0000\u04dcw\u0001\u0000\u0000\u0000\u04dd\u04de"+
		"\u0005\u00e1\u0000\u0000\u04de\u04df\u0005\u015f\u0000\u0000\u04df\u0505"+
		"\u0005\u016f\u0000\u0000\u04e0\u04e1\u0005\u00e2\u0000\u0000\u04e1\u04e2"+
		"\u0005\u015f\u0000\u0000\u04e2\u0505\u0003|>\u0000\u04e3\u04e4\u0005\u00e3"+
		"\u0000\u0000\u04e4\u04e5\u0005\u015f\u0000\u0000\u04e5\u0505\u0005\u015c"+
		"\u0000\u0000\u04e6\u04e7\u0005\u00e4\u0000\u0000\u04e7\u04e8\u0005\u015f"+
		"\u0000\u0000\u04e8\u0505\u0007\u0003\u0000\u0000\u04e9\u04ea\u0005\u00e5"+
		"\u0000\u0000\u04ea\u04eb\u0005\u015f\u0000\u0000\u04eb\u0505\u0007\u0003"+
		"\u0000\u0000\u04ec\u04ed\u0005\u00e6\u0000\u0000\u04ed\u04ee\u0005\u015f"+
		"\u0000\u0000\u04ee\u0505\u0007\u0003\u0000\u0000\u04ef\u04f0\u0005\u00e7"+
		"\u0000\u0000\u04f0\u04f1\u0005\u015f\u0000\u0000\u04f1\u0505\u0007\u0003"+
		"\u0000\u0000\u04f2\u04f3\u0005\u00e8\u0000\u0000\u04f3\u04f4\u0005\u015f"+
		"\u0000\u0000\u04f4\u0505\u0007\u0003\u0000\u0000\u04f5\u04f6\u0005\u00e9"+
		"\u0000\u0000\u04f6\u04f7\u0005\u015f\u0000\u0000\u04f7\u0505\u0007\u0003"+
		"\u0000\u0000\u04f8\u04f9\u0005\u00ea\u0000\u0000\u04f9\u04fa\u0005\u015f"+
		"\u0000\u0000\u04fa\u0505\u0007\u0003\u0000\u0000\u04fb\u04fc\u0005\u00eb"+
		"\u0000\u0000\u04fc\u04fd\u0005\u015f\u0000\u0000\u04fd\u0505\u0007\u0003"+
		"\u0000\u0000\u04fe\u04ff\u0005\u00ec\u0000\u0000\u04ff\u0500\u0005\u015f"+
		"\u0000\u0000\u0500\u0505\u0005\u016f\u0000\u0000\u0501\u0502\u0005\u00ed"+
		"\u0000\u0000\u0502\u0503\u0005\u015f\u0000\u0000\u0503\u0505\u0007\u0003"+
		"\u0000\u0000\u0504\u04dd\u0001\u0000\u0000\u0000\u0504\u04e0\u0001\u0000"+
		"\u0000\u0000\u0504\u04e3\u0001\u0000\u0000\u0000\u0504\u04e6\u0001\u0000"+
		"\u0000\u0000\u0504\u04e9\u0001\u0000\u0000\u0000\u0504\u04ec\u0001\u0000"+
		"\u0000\u0000\u0504\u04ef\u0001\u0000\u0000\u0000\u0504\u04f2\u0001\u0000"+
		"\u0000\u0000\u0504\u04f5\u0001\u0000\u0000\u0000\u0504\u04f8\u0001\u0000"+
		"\u0000\u0000\u0504\u04fb\u0001\u0000\u0000\u0000\u0504\u04fe\u0001\u0000"+
		"\u0000\u0000\u0504\u0501\u0001\u0000\u0000\u0000\u0505y\u0001\u0000\u0000"+
		"\u0000\u0506\u0507\u0007\u0004\u0000\u0000\u0507{\u0001\u0000\u0000\u0000"+
		"\u0508\u0509\u0005\u0171\u0000\u0000\u0509\u050a\u0005\u00f1\u0000\u0000"+
		"\u050a\u050b\u0007\u0005\u0000\u0000\u050b}\u0001\u0000\u0000\u0000\u050c"+
		"\u050d\u0005\u00f4\u0000\u0000\u050d\u050e\u0005\u015f\u0000\u0000\u050e"+
		"\u050f\u0003\u0080@\u0000\u050f\u007f\u0001\u0000\u0000\u0000\u0510\u0511"+
		"\u0005\u0171\u0000\u0000\u0511\u0081\u0001\u0000\u0000\u0000\u0512\u0513"+
		"\u0005\u00f5\u0000\u0000\u0513\u0515\u0005\u015f\u0000\u0000\u0514\u0516"+
		"\u0003\u0084B\u0000\u0515\u0514\u0001\u0000\u0000\u0000\u0516\u0517\u0001"+
		"\u0000\u0000\u0000\u0517\u0515\u0001\u0000\u0000\u0000\u0517\u0518\u0001"+
		"\u0000\u0000\u0000\u0518\u0083\u0001\u0000\u0000\u0000\u0519\u051a\u0005"+
		"\u0171\u0000\u0000\u051a\u0085\u0001\u0000\u0000\u0000\u051b\u051c\u0005"+
		"\u00f6\u0000\u0000\u051c\u051d\u0005\u015f\u0000\u0000\u051d\u051e\u0003"+
		"\u0112\u0089\u0000\u051e\u0087\u0001\u0000\u0000\u0000\u051f\u0520\u0005"+
		"\u00f7\u0000\u0000\u0520\u0521\u0005\u015f\u0000\u0000\u0521\u0522\u0003"+
		"\u008aE\u0000\u0522\u0089\u0001\u0000\u0000\u0000\u0523\u0524\u0005\u0171"+
		"\u0000\u0000\u0524\u008b\u0001\u0000\u0000\u0000\u0525\u0526\u0005\u00f8"+
		"\u0000\u0000\u0526\u0527\u0005\u015f\u0000\u0000\u0527\u0528\u0005\u0171"+
		"\u0000\u0000\u0528\u008d\u0001\u0000\u0000\u0000\u0529\u052a\u0005\u00f9"+
		"\u0000\u0000\u052a\u052b\u0005\u015f\u0000\u0000\u052b\u052c\u0005\u0171"+
		"\u0000\u0000\u052c\u008f\u0001\u0000\u0000\u0000\u052d\u052e\u0005\u00fa"+
		"\u0000\u0000\u052e\u052f\u0005\u015f\u0000\u0000\u052f\u0530\u0005\u0171"+
		"\u0000\u0000\u0530\u0091\u0001\u0000\u0000\u0000\u0531\u0532\u0005\u00fb"+
		"\u0000\u0000\u0532\u0533\u0005\u015f\u0000\u0000\u0533\u0534\u0003\u010c"+
		"\u0086\u0000\u0534\u0093\u0001\u0000\u0000\u0000\u0535\u0536\u0005\u00fc"+
		"\u0000\u0000\u0536\u0537\u0005\u015f\u0000\u0000\u0537\u0538\u0003\u010e"+
		"\u0087\u0000\u0538\u0095\u0001\u0000\u0000\u0000\u0539\u053a\u0005\u00fd"+
		"\u0000\u0000\u053a\u053b\u0005\u015f\u0000\u0000\u053b\u053c\u0003\u0110"+
		"\u0088\u0000\u053c\u0097\u0001\u0000\u0000\u0000\u053d\u053e\u0005\u00fe"+
		"\u0000\u0000\u053e\u053f\u0005\u015f\u0000\u0000\u053f\u0540\u0003\u0124"+
		"\u0092\u0000\u0540\u0099\u0001\u0000\u0000\u0000\u0541\u0542\u0005\u00ff"+
		"\u0000\u0000\u0542\u0543\u0005\u015f\u0000\u0000\u0543\u0544\u0005\u015c"+
		"\u0000\u0000\u0544\u009b\u0001\u0000\u0000\u0000\u0545\u0546\u0005\u0100"+
		"\u0000\u0000\u0546\u0547\u0005\u015f\u0000\u0000\u0547\u0548\u0003p8\u0000"+
		"\u0548\u0549\u0005\u015c\u0000\u0000\u0549\u009d\u0001\u0000\u0000\u0000"+
		"\u054a\u054b\u0005\u0101\u0000\u0000\u054b\u054c\u0005\u015f\u0000\u0000"+
		"\u054c\u054d\u0003p8\u0000\u054d\u054e\u0005\u015d\u0000\u0000\u054e\u009f"+
		"\u0001\u0000\u0000\u0000\u054f\u0550\u0005\u0102\u0000\u0000\u0550\u0551"+
		"\u0005\u015f\u0000\u0000\u0551\u0552\u0003p8\u0000\u0552\u0553\u0005\u0171"+
		"\u0000\u0000\u0553\u00a1\u0001\u0000\u0000\u0000\u0554\u0555\u0005\u0103"+
		"\u0000\u0000\u0555\u0556\u0005\u015f\u0000\u0000\u0556\u0557\u0003p8\u0000"+
		"\u0557\u0558\u0005\u0171\u0000\u0000\u0558\u00a3\u0001\u0000\u0000\u0000"+
		"\u0559\u055a\u0005\u0104\u0000\u0000\u055a\u055b\u0005\u015f\u0000\u0000"+
		"\u055b\u055c\u0005\u0161\u0000\u0000\u055c\u055d\u0003p8\u0000\u055d\u055e"+
		"\u0005\u0171\u0000\u0000\u055e\u00a5\u0001\u0000\u0000\u0000\u055f\u0560"+
		"\u0005\u0105\u0000\u0000\u0560\u0561\u0005\u015f\u0000\u0000\u0561\u0562"+
		"\u0005\u0161\u0000\u0000\u0562\u0563\u0003p8\u0000\u0563\u0564\u0005\u0171"+
		"\u0000\u0000\u0564\u00a7\u0001\u0000\u0000\u0000\u0565\u0566\u0005\u0106"+
		"\u0000\u0000\u0566\u0567\u0005\u015f\u0000\u0000\u0567\u0568\u0005\u016f"+
		"\u0000\u0000\u0568\u00a9\u0001\u0000\u0000\u0000\u0569\u056a\u0005\u0107"+
		"\u0000\u0000\u056a\u056b\u0005\u015f\u0000\u0000\u056b\u056c\u0005\u0169"+
		"\u0000\u0000\u056c\u056d\u0005\u016a\u0000\u0000\u056d\u056e\u0005\u016b"+
		"\u0000\u0000\u056e\u056f\u0005\u016c\u0000\u0000\u056f\u00ab\u0001\u0000"+
		"\u0000\u0000\u0570\u0571\u0005\u0108\u0000\u0000\u0571\u0572\u0005\u015f"+
		"\u0000\u0000\u0572\u0573\u0005\u0169\u0000\u0000\u0573\u0574\u0005\u016a"+
		"\u0000\u0000\u0574\u0575\u0005\u016b\u0000\u0000\u0575\u0576\u0005\u016c"+
		"\u0000\u0000\u0576\u00ad\u0001\u0000\u0000\u0000\u0577\u0578\u0005\u0109"+
		"\u0000\u0000\u0578\u0579\u0005\u015f\u0000\u0000\u0579\u057a\u0005\u015c"+
		"\u0000\u0000\u057a\u00af\u0001\u0000\u0000\u0000\u057b\u057c\u0005\u010a"+
		"\u0000\u0000\u057c\u057d\u0005\u015f\u0000\u0000\u057d\u057e\u0005\u015c"+
		"\u0000\u0000\u057e\u00b1\u0001\u0000\u0000\u0000\u057f\u0580\u0005\u010b"+
		"\u0000\u0000\u0580\u0582\u0005\u015f\u0000\u0000\u0581\u0583\u0005\u0171"+
		"\u0000\u0000\u0582\u0581\u0001\u0000\u0000\u0000\u0583\u0584\u0001\u0000"+
		"\u0000\u0000\u0584\u0582\u0001\u0000\u0000\u0000\u0584\u0585\u0001\u0000"+
		"\u0000\u0000\u0585\u00b3\u0001\u0000\u0000\u0000\u0586\u0587\u0005\u010c"+
		"\u0000\u0000\u0587\u0588\u0005\u015f\u0000\u0000\u0588\u0589\u0005\u015c"+
		"\u0000\u0000\u0589\u00b5\u0001\u0000\u0000\u0000\u058a\u058b\u0005\u010d"+
		"\u0000\u0000\u058b\u058c\u0005\u015f\u0000\u0000\u058c\u058d\u0005\u016f"+
		"\u0000\u0000\u058d\u00b7\u0001\u0000\u0000\u0000\u058e\u058f\u0005\u010e"+
		"\u0000\u0000\u058f\u0590\u0005\u015f\u0000\u0000\u0590\u0591\u0005\u015e"+
		"\u0000\u0000\u0591\u00b9\u0001\u0000\u0000\u0000\u0592\u0593\u0005\u010f"+
		"\u0000\u0000\u0593\u0594\u0005\u015f\u0000\u0000\u0594\u0595\u0005\u015c"+
		"\u0000\u0000\u0595\u00bb\u0001\u0000\u0000\u0000\u0596\u0597\u0005\u0110"+
		"\u0000\u0000\u0597\u0598\u0005\u015f\u0000\u0000\u0598\u0599\u0003\u0114"+
		"\u008a\u0000\u0599\u00bd\u0001\u0000\u0000\u0000\u059a\u059b\u0005\u0111"+
		"\u0000\u0000\u059b\u059e\u0005\u015f\u0000\u0000\u059c\u059f\u0005\u015c"+
		"\u0000\u0000\u059d\u059f\u0003\u012c\u0096\u0000\u059e\u059c\u0001\u0000"+
		"\u0000\u0000\u059e\u059d\u0001\u0000\u0000\u0000\u059f\u00bf\u0001\u0000"+
		"\u0000\u0000\u05a0\u05a1\u0005\u0112\u0000\u0000\u05a1\u05a2\u0005\u015f"+
		"\u0000\u0000\u05a2\u05a3\u0003\u012e\u0097\u0000\u05a3\u00c1\u0001\u0000"+
		"\u0000\u0000\u05a4\u05a5\u0005\u0113\u0000\u0000\u05a5\u05a8\u0005\u015f"+
		"\u0000\u0000\u05a6\u05a9\u0007\u0003\u0000\u0000\u05a7\u05a9\u0003\u012c"+
		"\u0096\u0000\u05a8\u05a6\u0001\u0000\u0000\u0000\u05a8\u05a7\u0001\u0000"+
		"\u0000\u0000\u05a9\u00c3\u0001\u0000\u0000\u0000\u05aa\u05ab\u0005\u0114"+
		"\u0000\u0000\u05ab\u05ae\u0005\u015f\u0000\u0000\u05ac\u05af\u0007\u0003"+
		"\u0000\u0000\u05ad\u05af\u0003\u012c\u0096\u0000\u05ae\u05ac\u0001\u0000"+
		"\u0000\u0000\u05ae\u05ad\u0001\u0000\u0000\u0000\u05af\u00c5\u0001\u0000"+
		"\u0000\u0000\u05b0\u05b1\u0005\u0115\u0000\u0000\u05b1\u05b2\u0005\u015f"+
		"\u0000\u0000\u05b2\u05b3\u0003\u012c\u0096\u0000\u05b3\u00c7\u0001\u0000"+
		"\u0000\u0000\u05b4\u05b5\u0005\u0116\u0000\u0000\u05b5\u05b6\u0005\u015f"+
		"\u0000\u0000\u05b6\u05b7\u0005\u015c\u0000\u0000\u05b7\u00c9\u0001\u0000"+
		"\u0000\u0000\u05b8\u05b9\u0005\u0117\u0000\u0000\u05b9\u05ba\u0005\u015f"+
		"\u0000\u0000\u05ba\u05bb\u0005\u015c\u0000\u0000\u05bb\u00cb\u0001\u0000"+
		"\u0000\u0000\u05bc\u05bd\u0005\u0118\u0000\u0000\u05bd\u05be\u0005\u015f"+
		"\u0000\u0000\u05be\u05bf\u0005\u015c\u0000\u0000\u05bf\u00cd\u0001\u0000"+
		"\u0000\u0000\u05c0\u05c1\u0005\u0119\u0000\u0000\u05c1\u05c2\u0005\u015f"+
		"\u0000\u0000\u05c2\u05c3\u0005\u016f\u0000\u0000\u05c3\u00cf\u0001\u0000"+
		"\u0000\u0000\u05c4\u05c5\u0005\u011a\u0000\u0000\u05c5\u05c6\u0005\u015f"+
		"\u0000\u0000\u05c6\u05c7\u0005\u016f\u0000\u0000\u05c7\u00d1\u0001\u0000"+
		"\u0000\u0000\u05c8\u05c9\u0005\u011b\u0000\u0000\u05c9\u05ca\u0005\u015f"+
		"\u0000\u0000\u05ca\u05cb\u0005\u016f\u0000\u0000\u05cb\u00d3\u0001\u0000"+
		"\u0000\u0000\u05cc\u05cd\u0005\u011c\u0000\u0000\u05cd\u05ce\u0005\u015f"+
		"\u0000\u0000\u05ce\u05cf\u0005\u016f\u0000\u0000\u05cf\u00d5\u0001\u0000"+
		"\u0000\u0000\u05d0\u05d1\u0005\u011d\u0000\u0000\u05d1\u05d2\u0005\u015f"+
		"\u0000\u0000\u05d2\u05d3\u0005\u016f\u0000\u0000\u05d3\u00d7\u0001\u0000"+
		"\u0000\u0000\u05d4\u05d5\u0005\u0110\u0000\u0000\u05d5\u05d6\u0005\u015f"+
		"\u0000\u0000\u05d6\u05d7\u0003\u0124\u0092\u0000\u05d7\u00d9\u0001\u0000"+
		"\u0000\u0000\u05d8\u05d9\u0005\u011e\u0000\u0000\u05d9\u05da\u0005\u015f"+
		"\u0000\u0000\u05da\u05db\u0003\u012e\u0097\u0000\u05db\u00db\u0001\u0000"+
		"\u0000\u0000\u05dc\u05dd\u0005\u011f\u0000\u0000\u05dd\u05de\u0005\u015f"+
		"\u0000\u0000\u05de\u05df\u0003\u012e\u0097\u0000\u05df\u00dd\u0001\u0000"+
		"\u0000\u0000\u05e0\u05e1\u0005\u0120\u0000\u0000\u05e1\u05e2\u0005\u015f"+
		"\u0000\u0000\u05e2\u05e3\u0003\u011a\u008d\u0000\u05e3\u00df\u0001\u0000"+
		"\u0000\u0000\u05e4\u05e5\u0005\u0121\u0000\u0000\u05e5\u05e6\u0005\u015f"+
		"\u0000\u0000\u05e6\u05e7\u0005\u0171\u0000\u0000\u05e7\u00e1\u0001\u0000"+
		"\u0000\u0000\u05e8\u05e9\u0005}\u0000\u0000\u05e9\u05ea\u0005\u015f\u0000"+
		"\u0000\u05ea\u05eb\u0007\u0003\u0000\u0000\u05eb\u00e3\u0001\u0000\u0000"+
		"\u0000\u05ec\u05ed\u0005\u0122\u0000\u0000\u05ed\u05ee\u0005\u015f\u0000"+
		"\u0000\u05ee\u05ef\u0007\u0003\u0000\u0000\u05ef\u00e5\u0001\u0000\u0000"+
		"\u0000\u05f0\u05f1\u0005\u0123\u0000\u0000\u05f1\u05f2\u0005\u015f\u0000"+
		"\u0000\u05f2\u05f3\u0007\u0003\u0000\u0000\u05f3\u00e7\u0001\u0000\u0000"+
		"\u0000\u05f4\u05f5\u0005\u0124\u0000\u0000\u05f5\u05f6\u0005\u015f\u0000"+
		"\u0000\u05f6\u05f7\u0007\u0003\u0000\u0000\u05f7\u00e9\u0001\u0000\u0000"+
		"\u0000\u05f8\u05f9\u0005z\u0000\u0000\u05f9\u05fa\u0005\u015f\u0000\u0000"+
		"\u05fa\u05fb\u0005\u0169\u0000\u0000\u05fb\u05fc\u0005\u016a\u0000\u0000"+
		"\u05fc\u05fd\u0005\u016b\u0000\u0000\u05fd\u00eb\u0001\u0000\u0000\u0000"+
		"\u05fe\u05ff\u0005\u0125\u0000\u0000\u05ff\u0600\u0005\u015f\u0000\u0000"+
		"\u0600\u0601\u0007\u0003\u0000\u0000\u0601\u00ed\u0001\u0000\u0000\u0000"+
		"\u0602\u0603\u0005z\u0000\u0000\u0603\u0604\u0005\u015f\u0000\u0000\u0604"+
		"\u0605\u0005\u0169\u0000\u0000\u0605\u0606\u0005\u016a\u0000\u0000\u0606"+
		"\u0607\u0005\u016b\u0000\u0000\u0607\u00ef\u0001\u0000\u0000\u0000\u0608"+
		"\u0609\u0005\u0113\u0000\u0000\u0609\u060a\u0005\u015f\u0000\u0000\u060a"+
		"\u060b\u0007\u0003\u0000\u0000\u060b\u00f1\u0001\u0000\u0000\u0000\u060c"+
		"\u060d\u0005\u0126\u0000\u0000\u060d\u060e\u0005\u015f\u0000\u0000\u060e"+
		"\u060f\u0005\u015e\u0000\u0000\u060f\u00f3\u0001\u0000\u0000\u0000\u0610"+
		"\u0611\u0005\u0127\u0000\u0000\u0611\u0612\u0005\u015f\u0000\u0000\u0612"+
		"\u0613\u0005\u015c\u0000\u0000\u0613\u00f5\u0001\u0000\u0000\u0000\u0614"+
		"\u0615\u0005\u0128\u0000\u0000\u0615\u0616\u0005\u015f\u0000\u0000\u0616"+
		"\u0617\u0005\u015c\u0000\u0000\u0617\u00f7\u0001\u0000\u0000\u0000\u0618"+
		"\u0619\u0005\u0129\u0000\u0000\u0619\u061a\u0005\u015f\u0000\u0000\u061a"+
		"\u061b\u0005\u0171\u0000\u0000\u061b\u00f9\u0001\u0000\u0000\u0000\u061c"+
		"\u061d\u0005\u0129\u0000\u0000\u061d\u061e\u0005\u015f\u0000\u0000\u061e"+
		"\u061f\u0005\u0171\u0000\u0000\u061f\u00fb\u0001\u0000\u0000\u0000\u0620"+
		"\u0621\u0005\u0113\u0000\u0000\u0621\u0622\u0005\u015f\u0000\u0000\u0622"+
		"\u0623\u0007\u0003\u0000\u0000\u0623\u00fd\u0001\u0000\u0000\u0000\u0624"+
		"\u0625\u0005\u012a\u0000\u0000\u0625\u0626\u0005\u015f\u0000\u0000\u0626"+
		"\u0627\u0003\u0116\u008b\u0000\u0627\u00ff\u0001\u0000\u0000\u0000\u0628"+
		"\u0629\u0005\u0121\u0000\u0000\u0629\u062a\u0005\u015f\u0000\u0000\u062a"+
		"\u062b\u0005\u0171\u0000\u0000\u062b\u0101\u0001\u0000\u0000\u0000\u062c"+
		"\u062d\u0005\u012b\u0000\u0000\u062d\u062e\u0005\u015f\u0000\u0000\u062e"+
		"\u062f\u0005\u016f\u0000\u0000\u062f\u0103\u0001\u0000\u0000\u0000\u0630"+
		"\u0631\u0005\u0110\u0000\u0000\u0631\u0632\u0005\u015f\u0000\u0000\u0632"+
		"\u0633\u0003\u011a\u008d\u0000\u0633\u0105\u0001\u0000\u0000\u0000\u0634"+
		"\u0635\u0005\u012c\u0000\u0000\u0635\u0636\u0005\u015f\u0000\u0000\u0636"+
		"\u06d4\u0005\u015c\u0000\u0000\u0637\u0638\u0005\u012d\u0000\u0000\u0638"+
		"\u0639\u0005\u015f\u0000\u0000\u0639\u063a\u0005\u0169\u0000\u0000\u063a"+
		"\u063b\u0005\u016a\u0000\u0000\u063b\u06d4\u0005\u016b\u0000\u0000\u063c"+
		"\u063d\u0005\u012e\u0000\u0000\u063d\u063e\u0005\u015f\u0000\u0000\u063e"+
		"\u063f\u0005\u0169\u0000\u0000\u063f\u0640\u0005\u016a\u0000\u0000\u0640"+
		"\u06d4\u0005\u016b\u0000\u0000\u0641\u0642\u0005\u012f\u0000\u0000\u0642"+
		"\u0643\u0005\u015f\u0000\u0000\u0643\u0644\u0005\u0162\u0000\u0000\u0644"+
		"\u06d4\u0005\u0163\u0000\u0000\u0645\u0646\u0005\u0130\u0000\u0000\u0646"+
		"\u0647\u0005\u015f\u0000\u0000\u0647\u06d4\u0005\u0171\u0000\u0000\u0648"+
		"\u0649\u0005\u0131\u0000\u0000\u0649\u064a\u0005\u015f\u0000\u0000\u064a"+
		"\u06d4\u0005\u015c\u0000\u0000\u064b\u064c\u0005\u0132\u0000\u0000\u064c"+
		"\u064d\u0005\u015f\u0000\u0000\u064d\u06d4\u0005\u016f\u0000\u0000\u064e"+
		"\u064f\u0005\u0133\u0000\u0000\u064f\u0650\u0005\u015f\u0000\u0000\u0650"+
		"\u06d4\u0005\u015c\u0000\u0000\u0651\u0652\u0005\u0134\u0000\u0000\u0652"+
		"\u0653\u0005\u015f\u0000\u0000\u0653\u0654\u0005\u0169\u0000\u0000\u0654"+
		"\u0655\u0005\u016a\u0000\u0000\u0655\u0656\u0005\u016b\u0000\u0000\u0656"+
		"\u06d4\u0005\u016c\u0000\u0000\u0657\u0658\u0005\u0135\u0000\u0000\u0658"+
		"\u0659\u0005\u015f\u0000\u0000\u0659\u065a\u0005\u0162\u0000\u0000\u065a"+
		"\u06d4\u0005\u0163\u0000\u0000\u065b\u065c\u0005\u0136\u0000\u0000\u065c"+
		"\u065e\u0005\u015f\u0000\u0000\u065d\u065f\u0005\u0171\u0000\u0000\u065e"+
		"\u065d\u0001\u0000\u0000\u0000\u065f\u0660\u0001\u0000\u0000\u0000\u0660"+
		"\u065e\u0001\u0000\u0000\u0000\u0660\u0661\u0001\u0000\u0000\u0000\u0661"+
		"\u06d4\u0001\u0000\u0000\u0000\u0662\u0663\u0005\u0137\u0000\u0000\u0663"+
		"\u0664\u0005\u015f\u0000\u0000\u0664\u06d4\u0005\u015c\u0000\u0000\u0665"+
		"\u0666\u0005\u0138\u0000\u0000\u0666\u0667\u0005\u015f\u0000\u0000\u0667"+
		"\u06d4\u0005\u016f\u0000\u0000\u0668\u0669\u0005\u0139\u0000\u0000\u0669"+
		"\u066b\u0005\u015f\u0000\u0000\u066a\u066c\u0005\u0171\u0000\u0000\u066b"+
		"\u066a\u0001\u0000\u0000\u0000\u066c\u066d\u0001\u0000\u0000\u0000\u066d"+
		"\u066b\u0001\u0000\u0000\u0000\u066d\u066e\u0001\u0000\u0000\u0000\u066e"+
		"\u06d4\u0001\u0000\u0000\u0000\u066f\u0670\u0005\u013a\u0000\u0000\u0670"+
		"\u0671\u0005\u015f\u0000\u0000\u0671\u06d4\u0005\u015c\u0000\u0000\u0672"+
		"\u0673\u0005\u013b\u0000\u0000\u0673\u0674\u0005\u015f\u0000\u0000\u0674"+
		"\u06d4\u0005\u016f\u0000\u0000\u0675\u0676\u0005\u013c\u0000\u0000\u0676"+
		"\u0677\u0005\u015f\u0000\u0000\u0677\u06d4\u0005\u016f\u0000\u0000\u0678"+
		"\u0679\u0005\u013d\u0000\u0000\u0679\u067a\u0005\u015f\u0000\u0000\u067a"+
		"\u067b\u0005\u0162\u0000\u0000\u067b\u06d4\u0005\u0163\u0000\u0000\u067c"+
		"\u067d\u0005\u013e\u0000\u0000\u067d\u067e\u0005\u015f\u0000\u0000\u067e"+
		"\u06d4\u0005\u015c\u0000\u0000\u067f\u0680\u0005\u013f\u0000\u0000\u0680"+
		"\u0681\u0005\u015f\u0000\u0000\u0681\u0682\u0005\u0169\u0000\u0000\u0682"+
		"\u0683\u0005\u016a\u0000\u0000\u0683\u06d4\u0005\u016b\u0000\u0000\u0684"+
		"\u0685\u0005\u0140\u0000\u0000\u0685\u0686\u0005\u015f\u0000\u0000\u0686"+
		"\u06d4\u0005\u0171\u0000\u0000\u0687\u0688\u0005\u0141\u0000\u0000\u0688"+
		"\u0689\u0005\u015f\u0000\u0000\u0689\u06d4\u0005\u015c\u0000\u0000\u068a"+
		"\u068b\u0005\u0142\u0000\u0000\u068b\u068c\u0005\u015f\u0000\u0000\u068c"+
		"\u06d4\u0005\u016f\u0000\u0000\u068d\u068e\u0005\u0143\u0000\u0000\u068e"+
		"\u068f\u0005\u015f\u0000\u0000\u068f\u06d4\u0005\u0171\u0000\u0000\u0690"+
		"\u0691\u0005\u0144\u0000\u0000\u0691\u0692\u0005\u015f\u0000\u0000\u0692"+
		"\u06d4\u0005\u015c\u0000\u0000\u0693\u0694\u0005\u0145\u0000\u0000\u0694"+
		"\u0695\u0005\u015f\u0000\u0000\u0695\u06d4\u0005\u016f\u0000\u0000\u0696"+
		"\u0697\u0005\u0146\u0000\u0000\u0697\u0698\u0005\u015f\u0000\u0000\u0698"+
		"\u0699\u0005\u0162\u0000\u0000\u0699\u06d4\u0005\u0163\u0000\u0000\u069a"+
		"\u069b\u0005\u0147\u0000\u0000\u069b\u069c\u0005\u015f\u0000\u0000\u069c"+
		"\u06d4\u0005\u015c\u0000\u0000\u069d\u069e\u0005\u0148\u0000\u0000\u069e"+
		"\u069f\u0005\u015f\u0000\u0000\u069f\u06a0\u0005\u0169\u0000\u0000\u06a0"+
		"\u06a1\u0005\u016a\u0000\u0000\u06a1\u06d4\u0005\u016b\u0000\u0000\u06a2"+
		"\u06a3\u0005\u0149\u0000\u0000\u06a3\u06a4\u0005\u015f\u0000\u0000\u06a4"+
		"\u06d4\u0005\u0171\u0000\u0000\u06a5\u06a6\u0005\u014a\u0000\u0000\u06a6"+
		"\u06a7\u0005\u015f\u0000\u0000\u06a7\u06d4\u0005\u015c\u0000\u0000\u06a8"+
		"\u06a9\u0005\u014b\u0000\u0000\u06a9\u06aa\u0005\u015f\u0000\u0000\u06aa"+
		"\u06d4\u0005\u016f\u0000\u0000\u06ab\u06ac\u0005\u014c\u0000\u0000\u06ac"+
		"\u06ad\u0005\u015f\u0000\u0000\u06ad\u06ae\u0005\u0169\u0000\u0000\u06ae"+
		"\u06af\u0005\u016a\u0000\u0000\u06af\u06d4\u0005\u016b\u0000\u0000\u06b0"+
		"\u06b1\u0005\u014d\u0000\u0000\u06b1\u06b2\u0005\u015f\u0000\u0000\u06b2"+
		"\u06d4\u0005\u0171\u0000\u0000\u06b3\u06b4\u0005\u014e\u0000\u0000\u06b4"+
		"\u06b5\u0005\u015f\u0000\u0000\u06b5\u06d4\u0005\u015c\u0000\u0000\u06b6"+
		"\u06b7\u0005\u014f\u0000\u0000\u06b7\u06b8\u0005\u015f\u0000\u0000\u06b8"+
		"\u06d4\u0005\u016f\u0000\u0000\u06b9\u06ba\u0005\u0150\u0000\u0000\u06ba"+
		"\u06bb\u0005\u015f\u0000\u0000\u06bb\u06bc\u0005\u0169\u0000\u0000\u06bc"+
		"\u06bd\u0005\u016a\u0000\u0000\u06bd\u06d4\u0005\u016b\u0000\u0000\u06be"+
		"\u06bf\u0005\u0151\u0000\u0000\u06bf\u06c0\u0005\u015f\u0000\u0000\u06c0"+
		"\u06d4\u0005\u015c\u0000\u0000\u06c1\u06c2\u0005\u0152\u0000\u0000\u06c2"+
		"\u06c3\u0005\u015f\u0000\u0000\u06c3\u06d4\u0005\u015c\u0000\u0000\u06c4"+
		"\u06c5\u0005\u0153\u0000\u0000\u06c5\u06c6\u0005\u015f\u0000\u0000\u06c6"+
		"\u06d4\u0005\u015c\u0000\u0000\u06c7\u06c8\u0005\u0154\u0000\u0000\u06c8"+
		"\u06c9\u0005\u015f\u0000\u0000\u06c9\u06d4\u0005\u016f\u0000\u0000\u06ca"+
		"\u06cb\u0005\u0155\u0000\u0000\u06cb\u06cc\u0005\u015f\u0000\u0000\u06cc"+
		"\u06d4\u0005\u016f\u0000\u0000\u06cd\u06ce\u0005\u0156\u0000\u0000\u06ce"+
		"\u06cf\u0005\u015f\u0000\u0000\u06cf\u06d0\u0005\u0169\u0000\u0000\u06d0"+
		"\u06d1\u0005\u016a\u0000\u0000\u06d1\u06d2\u0005\u016b\u0000\u0000\u06d2"+
		"\u06d4\u0005\u016c\u0000\u0000\u06d3\u0634\u0001\u0000\u0000\u0000\u06d3"+
		"\u0637\u0001\u0000\u0000\u0000\u06d3\u063c\u0001\u0000\u0000\u0000\u06d3"+
		"\u0641\u0001\u0000\u0000\u0000\u06d3\u0645\u0001\u0000\u0000\u0000\u06d3"+
		"\u0648\u0001\u0000\u0000\u0000\u06d3\u064b\u0001\u0000\u0000\u0000\u06d3"+
		"\u064e\u0001\u0000\u0000\u0000\u06d3\u0651\u0001\u0000\u0000\u0000\u06d3"+
		"\u0657\u0001\u0000\u0000\u0000\u06d3\u065b\u0001\u0000\u0000\u0000\u06d3"+
		"\u0662\u0001\u0000\u0000\u0000\u06d3\u0665\u0001\u0000\u0000\u0000\u06d3"+
		"\u0668\u0001\u0000\u0000\u0000\u06d3\u066f\u0001\u0000\u0000\u0000\u06d3"+
		"\u0672\u0001\u0000\u0000\u0000\u06d3\u0675\u0001\u0000\u0000\u0000\u06d3"+
		"\u0678\u0001\u0000\u0000\u0000\u06d3\u067c\u0001\u0000\u0000\u0000\u06d3"+
		"\u067f\u0001\u0000\u0000\u0000\u06d3\u0684\u0001\u0000\u0000\u0000\u06d3"+
		"\u0687\u0001\u0000\u0000\u0000\u06d3\u068a\u0001\u0000\u0000\u0000\u06d3"+
		"\u068d\u0001\u0000\u0000\u0000\u06d3\u0690\u0001\u0000\u0000\u0000\u06d3"+
		"\u0693\u0001\u0000\u0000\u0000\u06d3\u0696\u0001\u0000\u0000\u0000\u06d3"+
		"\u069a\u0001\u0000\u0000\u0000\u06d3\u069d\u0001\u0000\u0000\u0000\u06d3"+
		"\u06a2\u0001\u0000\u0000\u0000\u06d3\u06a5\u0001\u0000\u0000\u0000\u06d3"+
		"\u06a8\u0001\u0000\u0000\u0000\u06d3\u06ab\u0001\u0000\u0000\u0000\u06d3"+
		"\u06b0\u0001\u0000\u0000\u0000\u06d3\u06b3\u0001\u0000\u0000\u0000\u06d3"+
		"\u06b6\u0001\u0000\u0000\u0000\u06d3\u06b9\u0001\u0000\u0000\u0000\u06d3"+
		"\u06be\u0001\u0000\u0000\u0000\u06d3\u06c1\u0001\u0000\u0000\u0000\u06d3"+
		"\u06c4\u0001\u0000\u0000\u0000\u06d3\u06c7\u0001\u0000\u0000\u0000\u06d3"+
		"\u06ca\u0001\u0000\u0000\u0000\u06d3\u06cd\u0001\u0000\u0000\u0000\u06d4"+
		"\u0107\u0001\u0000\u0000\u0000\u06d5\u06d6\u0005\u0171\u0000\u0000\u06d6"+
		"\u0109\u0001\u0000\u0000\u0000\u06d7\u06d8\u0005\u0171\u0000\u0000\u06d8"+
		"\u010b\u0001\u0000\u0000\u0000\u06d9\u06da\u0005\u0171\u0000\u0000\u06da"+
		"\u010d\u0001\u0000\u0000\u0000\u06db\u06dc\u0005\u0171\u0000\u0000\u06dc"+
		"\u010f\u0001\u0000\u0000\u0000\u06dd\u06de\u0005\u0171\u0000\u0000\u06de"+
		"\u0111\u0001\u0000\u0000\u0000\u06df\u06e0\u0005\u0171\u0000\u0000\u06e0"+
		"\u0113\u0001\u0000\u0000\u0000\u06e1\u06e2\u0005\u0171\u0000\u0000\u06e2"+
		"\u0115\u0001\u0000\u0000\u0000\u06e3\u06e4\u0005\u0171\u0000\u0000\u06e4"+
		"\u0117\u0001\u0000\u0000\u0000\u06e5\u06e6\u0005\u0157\u0000\u0000\u06e6"+
		"\u06e7\u0005\u015f\u0000\u0000\u06e7\u06e8\u0003\u011a\u008d\u0000\u06e8"+
		"\u0119\u0001\u0000\u0000\u0000\u06e9\u06ea\u0005\u0171\u0000\u0000\u06ea"+
		"\u011b\u0001\u0000\u0000\u0000\u06eb\u06ec\u0005\u0158\u0000\u0000\u06ec"+
		"\u06ee\u0005\u015f\u0000\u0000\u06ed\u06ef\u0003\u011e\u008f\u0000\u06ee"+
		"\u06ed\u0001\u0000\u0000\u0000\u06ef\u06f0\u0001\u0000\u0000\u0000\u06f0"+
		"\u06ee\u0001\u0000\u0000\u0000\u06f0\u06f1\u0001\u0000\u0000\u0000\u06f1"+
		"\u011d\u0001\u0000\u0000\u0000\u06f2\u06f3\u0005\u0171\u0000\u0000\u06f3"+
		"\u011f\u0001\u0000\u0000\u0000\u06f4\u06f5\u0005\u0159\u0000\u0000\u06f5"+
		"\u06f6\u0005\u015f\u0000\u0000\u06f6\u06f7\u0003\u0122\u0091\u0000\u06f7"+
		"\u0121\u0001\u0000\u0000\u0000\u06f8\u06f9\u0005\u0171\u0000\u0000\u06f9"+
		"\u0123\u0001\u0000\u0000\u0000\u06fa\u06fb\u0005\u0171\u0000\u0000\u06fb"+
		"\u0125\u0001\u0000\u0000\u0000\u06fc\u06fd\u0005\u015a\u0000\u0000\u06fd"+
		"\u06fe\u0005\u015f\u0000\u0000\u06fe\u06ff\u0003\u0128\u0094\u0000\u06ff"+
		"\u0127\u0001\u0000\u0000\u0000\u0700\u0701\u0005\u0171\u0000\u0000\u0701"+
		"\u0129\u0001\u0000\u0000\u0000\u0702\u0703\u0005\u015b\u0000\u0000\u0703"+
		"\u0705\u0005\u015f\u0000\u0000\u0704\u0706\u0005\u0160\u0000\u0000\u0705"+
		"\u0704\u0001\u0000\u0000\u0000\u0706\u0707\u0001\u0000\u0000\u0000\u0707"+
		"\u0705\u0001\u0000\u0000\u0000\u0707\u0708\u0001\u0000\u0000\u0000\u0708"+
		"\u012b\u0001\u0000\u0000\u0000\u0709\u070a\u0005\u015c\u0000\u0000\u070a"+
		"\u070b\u0005\u015c\u0000\u0000\u070b\u070c\u0005\u016d\u0000\u0000\u070c"+
		"\u012d\u0001\u0000\u0000\u0000\u070d\u070e\u0005\u0162\u0000\u0000\u070e"+
		"\u070f\u0005\u0163\u0000\u0000\u070f\u0710\u0005\u0164\u0000\u0000\u0710"+
		"\u012f\u0001\u0000\u0000\u0000?\u0133\u0145\u014a\u0152\u0154\u01d7\u01de"+
		"\u01e8\u01fd\u0204\u0216\u021c\u0226\u023d\u0244\u0258\u025f\u0271\u0287"+
		"\u028e\u029c\u02a7\u02ad\u02bc\u02c3\u02d0\u02e1\u02e3\u02ec\u02f5\u02f7"+
		"\u0305\u0307\u0312\u0314\u031d\u0325\u0327\u0330\u0332\u033a\u033c\u0345"+
		"\u0362\u0369\u041a\u0421\u043c\u049e\u04af\u04be\u04d8\u0504\u0517\u0584"+
		"\u059e\u05a8\u05ae\u0660\u066d\u06d3\u06f0\u0707";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}