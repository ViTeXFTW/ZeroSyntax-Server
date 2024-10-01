// Generated from ./server/src/utils/antlr4ng/MapIni.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { MapIniListener } from "./MapIniListener.js";
import { MapIniVisitor } from "./MapIniVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class MapIniParser extends antlr.Parser {
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
    public static readonly T__160 = 161;
    public static readonly T__161 = 162;
    public static readonly T__162 = 163;
    public static readonly T__163 = 164;
    public static readonly T__164 = 165;
    public static readonly T__165 = 166;
    public static readonly T__166 = 167;
    public static readonly T__167 = 168;
    public static readonly T__168 = 169;
    public static readonly T__169 = 170;
    public static readonly T__170 = 171;
    public static readonly T__171 = 172;
    public static readonly T__172 = 173;
    public static readonly T__173 = 174;
    public static readonly T__174 = 175;
    public static readonly T__175 = 176;
    public static readonly T__176 = 177;
    public static readonly T__177 = 178;
    public static readonly T__178 = 179;
    public static readonly T__179 = 180;
    public static readonly T__180 = 181;
    public static readonly T__181 = 182;
    public static readonly T__182 = 183;
    public static readonly T__183 = 184;
    public static readonly T__184 = 185;
    public static readonly T__185 = 186;
    public static readonly T__186 = 187;
    public static readonly T__187 = 188;
    public static readonly T__188 = 189;
    public static readonly T__189 = 190;
    public static readonly T__190 = 191;
    public static readonly T__191 = 192;
    public static readonly T__192 = 193;
    public static readonly T__193 = 194;
    public static readonly T__194 = 195;
    public static readonly T__195 = 196;
    public static readonly T__196 = 197;
    public static readonly T__197 = 198;
    public static readonly T__198 = 199;
    public static readonly T__199 = 200;
    public static readonly T__200 = 201;
    public static readonly T__201 = 202;
    public static readonly T__202 = 203;
    public static readonly T__203 = 204;
    public static readonly T__204 = 205;
    public static readonly T__205 = 206;
    public static readonly T__206 = 207;
    public static readonly T__207 = 208;
    public static readonly T__208 = 209;
    public static readonly T__209 = 210;
    public static readonly T__210 = 211;
    public static readonly T__211 = 212;
    public static readonly T__212 = 213;
    public static readonly T__213 = 214;
    public static readonly T__214 = 215;
    public static readonly T__215 = 216;
    public static readonly T__216 = 217;
    public static readonly T__217 = 218;
    public static readonly T__218 = 219;
    public static readonly T__219 = 220;
    public static readonly T__220 = 221;
    public static readonly T__221 = 222;
    public static readonly T__222 = 223;
    public static readonly T__223 = 224;
    public static readonly T__224 = 225;
    public static readonly T__225 = 226;
    public static readonly T__226 = 227;
    public static readonly T__227 = 228;
    public static readonly T__228 = 229;
    public static readonly T__229 = 230;
    public static readonly T__230 = 231;
    public static readonly T__231 = 232;
    public static readonly T__232 = 233;
    public static readonly T__233 = 234;
    public static readonly T__234 = 235;
    public static readonly T__235 = 236;
    public static readonly T__236 = 237;
    public static readonly T__237 = 238;
    public static readonly T__238 = 239;
    public static readonly T__239 = 240;
    public static readonly T__240 = 241;
    public static readonly T__241 = 242;
    public static readonly T__242 = 243;
    public static readonly T__243 = 244;
    public static readonly T__244 = 245;
    public static readonly T__245 = 246;
    public static readonly T__246 = 247;
    public static readonly T__247 = 248;
    public static readonly T__248 = 249;
    public static readonly T__249 = 250;
    public static readonly T__250 = 251;
    public static readonly T__251 = 252;
    public static readonly T__252 = 253;
    public static readonly T__253 = 254;
    public static readonly T__254 = 255;
    public static readonly T__255 = 256;
    public static readonly T__256 = 257;
    public static readonly T__257 = 258;
    public static readonly T__258 = 259;
    public static readonly T__259 = 260;
    public static readonly T__260 = 261;
    public static readonly T__261 = 262;
    public static readonly T__262 = 263;
    public static readonly T__263 = 264;
    public static readonly T__264 = 265;
    public static readonly T__265 = 266;
    public static readonly T__266 = 267;
    public static readonly T__267 = 268;
    public static readonly T__268 = 269;
    public static readonly T__269 = 270;
    public static readonly T__270 = 271;
    public static readonly T__271 = 272;
    public static readonly T__272 = 273;
    public static readonly T__273 = 274;
    public static readonly T__274 = 275;
    public static readonly T__275 = 276;
    public static readonly T__276 = 277;
    public static readonly T__277 = 278;
    public static readonly T__278 = 279;
    public static readonly T__279 = 280;
    public static readonly T__280 = 281;
    public static readonly T__281 = 282;
    public static readonly T__282 = 283;
    public static readonly T__283 = 284;
    public static readonly T__284 = 285;
    public static readonly T__285 = 286;
    public static readonly T__286 = 287;
    public static readonly T__287 = 288;
    public static readonly T__288 = 289;
    public static readonly T__289 = 290;
    public static readonly T__290 = 291;
    public static readonly T__291 = 292;
    public static readonly T__292 = 293;
    public static readonly T__293 = 294;
    public static readonly T__294 = 295;
    public static readonly T__295 = 296;
    public static readonly T__296 = 297;
    public static readonly T__297 = 298;
    public static readonly T__298 = 299;
    public static readonly T__299 = 300;
    public static readonly T__300 = 301;
    public static readonly T__301 = 302;
    public static readonly T__302 = 303;
    public static readonly T__303 = 304;
    public static readonly T__304 = 305;
    public static readonly T__305 = 306;
    public static readonly T__306 = 307;
    public static readonly T__307 = 308;
    public static readonly T__308 = 309;
    public static readonly T__309 = 310;
    public static readonly T__310 = 311;
    public static readonly T__311 = 312;
    public static readonly T__312 = 313;
    public static readonly T__313 = 314;
    public static readonly T__314 = 315;
    public static readonly T__315 = 316;
    public static readonly T__316 = 317;
    public static readonly T__317 = 318;
    public static readonly T__318 = 319;
    public static readonly T__319 = 320;
    public static readonly T__320 = 321;
    public static readonly T__321 = 322;
    public static readonly T__322 = 323;
    public static readonly T__323 = 324;
    public static readonly T__324 = 325;
    public static readonly T__325 = 326;
    public static readonly T__326 = 327;
    public static readonly T__327 = 328;
    public static readonly T__328 = 329;
    public static readonly T__329 = 330;
    public static readonly T__330 = 331;
    public static readonly T__331 = 332;
    public static readonly T__332 = 333;
    public static readonly T__333 = 334;
    public static readonly T__334 = 335;
    public static readonly T__335 = 336;
    public static readonly T__336 = 337;
    public static readonly T__337 = 338;
    public static readonly T__338 = 339;
    public static readonly T__339 = 340;
    public static readonly T__340 = 341;
    public static readonly T__341 = 342;
    public static readonly T__342 = 343;
    public static readonly T__343 = 344;
    public static readonly T__344 = 345;
    public static readonly T__345 = 346;
    public static readonly T__346 = 347;
    public static readonly INT = 348;
    public static readonly FLOAT = 349;
    public static readonly PROCENT = 350;
    public static readonly EQ = 351;
    public static readonly WEAPONSLOT = 352;
    public static readonly VETERENCY = 353;
    public static readonly XCOORD = 354;
    public static readonly YCOORD = 355;
    public static readonly ZCOORD = 356;
    public static readonly COORDLEFT = 357;
    public static readonly COORDTOP = 358;
    public static readonly COORDRIGHT = 359;
    public static readonly COORDBOTTOM = 360;
    public static readonly R = 361;
    public static readonly G = 362;
    public static readonly B = 363;
    public static readonly A = 364;
    public static readonly DISTRIBUTION_FORM = 365;
    public static readonly MANUAL = 366;
    public static readonly BOOLEAN = 367;
    public static readonly STRING = 368;
    public static readonly ID = 369;
    public static readonly NL = 370;
    public static readonly SKIp = 371;
    public static readonly COMMENT = 372;
    public static readonly WS = 373;
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
    public static readonly RULE_damageFXClass = 20;
    public static readonly RULE_damageFXClassProperties = 21;
    public static readonly RULE_drawGroupInfoClass = 22;
    public static readonly RULE_drawgroupinfoProperties = 23;
    public static readonly RULE_fxListClass = 24;
    public static readonly RULE_fxlistblocks = 25;
    public static readonly RULE_fxlist_ps_block = 26;
    public static readonly RULE_fxlist_sound_block = 27;
    public static readonly RULE_fxlist_rayeffect_block = 28;
    public static readonly RULE_fxlist_tracer_block = 29;
    public static readonly RULE_fxlist_lightpulse_block = 30;
    public static readonly RULE_fxlist_viewshake_block = 31;
    public static readonly RULE_fxlist_terrainscorch_block = 32;
    public static readonly RULE_fxlist_fxlistatbone_block = 33;
    public static readonly RULE_inGameUIClass = 34;
    public static readonly RULE_igui_blocks = 35;
    public static readonly RULE_ingui_block_properties = 36;
    public static readonly RULE_locomotorClass = 37;
    public static readonly RULE_locomotor_properties = 38;
    public static readonly RULE_locomotor_surface_property = 39;
    public static readonly RULE_locomotor_zbehavior_property = 40;
    public static readonly RULE_locomotor_appereance_property = 41;
    public static readonly RULE_locomotor_movepriority_property = 42;
    public static readonly RULE_surface_value = 43;
    public static readonly RULE_zbehavior_value = 44;
    public static readonly RULE_appereance_value = 45;
    public static readonly RULE_movepriority_value = 46;
    public static readonly RULE_weaponClass = 47;
    public static readonly RULE_weapon_properties = 48;
    public static readonly RULE_weapon_damagetype_property = 49;
    public static readonly RULE_weapon_deathtype_property = 50;
    public static readonly RULE_weapon_damageaffects_property = 51;
    public static readonly RULE_weapon_weaponbonus_property = 52;
    public static readonly RULE_weapon_lasterbone_property = 53;
    public static readonly RULE_weapon_weaponbonus_condition_value = 54;
    public static readonly RULE_weapon_weaponbonus_bonus_value = 55;
    public static readonly RULE_damageType_value = 56;
    public static readonly RULE_deathType_value = 57;
    public static readonly RULE_damageAffects_value = 58;
    public static readonly RULE_weatherClass = 59;
    public static readonly RULE_weather_properties = 60;
    public static readonly RULE_end = 61;
    public static readonly RULE_file = 62;
    public static readonly RULE_cb_command_property = 63;
    public static readonly RULE_cb_command_value = 64;
    public static readonly RULE_cb_options_property = 65;
    public static readonly RULE_cb_options_value = 66;
    public static readonly RULE_cb_buttonimage_property = 67;
    public static readonly RULE_cb_buttonbordertype_property = 68;
    public static readonly RULE_cb_buttonbordertype_value = 69;
    public static readonly RULE_cb_textlabel_property = 70;
    public static readonly RULE_cb_descriptionlabel_property = 71;
    public static readonly RULE_cb_conflictinglabel_property = 72;
    public static readonly RULE_cb_cursorname_propery = 73;
    public static readonly RULE_cb_radius_cursorname_value = 74;
    public static readonly RULE_cb_invalid_cursorname_propery = 75;
    public static readonly RULE_cb_unitspecificsound_property = 76;
    public static readonly RULE_cb_maxshotsfire_property = 77;
    public static readonly RULE_dfx_throttletime_property = 78;
    public static readonly RULE_dfx_amountformajorfx_property = 79;
    public static readonly RULE_dfx_majorfx_property = 80;
    public static readonly RULE_dfx_minorfx_property = 81;
    public static readonly RULE_dfx_vetmajorfx_property = 82;
    public static readonly RULE_dfx_vetminorfx_property = 83;
    public static readonly RULE_dgi_useplayercolor_property = 84;
    public static readonly RULE_dgi_colorfortext_property = 85;
    public static readonly RULE_dgi_colordropshadow_property = 86;
    public static readonly RULE_dgi_dropshadowoffsetX_property = 87;
    public static readonly RULE_dgi_dropshadowoffsetY_property = 88;
    public static readonly RULE_dgi_fontname_property = 89;
    public static readonly RULE_dgi_fontsize_property = 90;
    public static readonly RULE_dgi_fontisbold_property = 91;
    public static readonly RULE_dgi_drawposXperc_property = 92;
    public static readonly RULE_dgi_drawposYperc_property = 93;
    public static readonly RULE_fxlist_ps_name_property = 94;
    public static readonly RULE_fxlist_ps_count_property = 95;
    public static readonly RULE_fxlist_ps_offset_property = 96;
    public static readonly RULE_fxlist_ps_radius_property = 97;
    public static readonly RULE_fxlist_ps_height_property = 98;
    public static readonly RULE_fxlist_ps_initialDelay_property = 99;
    public static readonly RULE_fxlist_ps_rotateX_property = 100;
    public static readonly RULE_fxlist_ps_rotatey_property = 101;
    public static readonly RULE_fxlist_ps_rotateZ_property = 102;
    public static readonly RULE_fxlist_ps_orienttoobject_property = 103;
    public static readonly RULE_fxlist_ps_ricochet_property = 104;
    public static readonly RULE_fxlist_ps_usecallerradius_property = 105;
    public static readonly RULE_fxlist_ps_attachtoobject_property = 106;
    public static readonly RULE_fxlist_ps_creategroundheight_property = 107;
    public static readonly RULE_fxlist_sound_property = 108;
    public static readonly RULE_fxlist_rayeffect_primaryoffset_property = 109;
    public static readonly RULE_fxlist_rayeffect_secondaryoffset_proprety = 110;
    public static readonly RULE_fxlist_tracer_name_propety = 111;
    public static readonly RULE_fxlist_tracer_bonename_property = 112;
    public static readonly RULE_fxlist_tracer_speed_property = 113;
    public static readonly RULE_fxlist_tracer_decayat_property = 114;
    public static readonly RULE_fxlist_tracer_length_property = 115;
    public static readonly RULE_fxlist_tracer_width_property = 116;
    public static readonly RULE_fxlist_tracer_color_property = 117;
    public static readonly RULE_fxlist_tracer_probability_property = 118;
    public static readonly RULE_fxlist_lightpulse_color_property = 119;
    public static readonly RULE_fxlist_lightpulse_radius_property = 120;
    public static readonly RULE_fxlist_lightpulse_radiuspercentobjectsize_property = 121;
    public static readonly RULE_fxlist_lightpulse_increasetime_property = 122;
    public static readonly RULE_fxlist_lightpulse_decreasetime_property = 123;
    public static readonly RULE_fxlist_viewshake_type_property = 124;
    public static readonly RULE_fxlist_scorch_type_property = 125;
    public static readonly RULE_fxlist_scorch_radius_property = 126;
    public static readonly RULE_fxlist_atbonepos_fx_property = 127;
    public static readonly RULE_fxlist_atbonepos_bonename_property = 128;
    public static readonly RULE_fxlist_atbonepos_orienttoobject_property = 129;
    public static readonly RULE_fxlist_name_object_propety = 130;
    public static readonly RULE_igui_properties = 131;
    public static readonly RULE_faction_value = 132;
    public static readonly RULE_commandbutton_value = 133;
    public static readonly RULE_cursorname_value = 134;
    public static readonly RULE_radius_cursorname_value = 135;
    public static readonly RULE_invalid_cursorname_value = 136;
    public static readonly RULE_mappedimage_value = 137;
    public static readonly RULE_particlesystem_value = 138;
    public static readonly RULE_fxlist_value = 139;
    public static readonly RULE_object_property = 140;
    public static readonly RULE_object_value = 141;
    public static readonly RULE_science_property = 142;
    public static readonly RULE_science_value = 143;
    public static readonly RULE_specialpower_property = 144;
    public static readonly RULE_specialpower_value = 145;
    public static readonly RULE_audioevent_value = 146;
    public static readonly RULE_upgrade_property = 147;
    public static readonly RULE_upgrade_value = 148;
    public static readonly RULE_weaponslot_property = 149;
    public static readonly RULE_rand_value = 150;
    public static readonly RULE_coord3D = 151;

    public static readonly literalNames = [
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
        "'RetaliationFriendsRadius'", "'SkirmishBuildList'", "'Structure'", 
        "'Location'", "'Rebuilds'", "'Angle'", "'InitiallyBuilt'", "'AutomaticallyBuild'", 
        "'SideInfo'", "'ResourceGatherersEasy'", "'ResourceGatherersNormal'", 
        "'ResourceGatherersHard'", "'BaseDefenseStructure1'", "'SkillSet1'", 
        "'SkillSet2'", "'SkillSet3'", "'SkillSet4'", "'SkillSet5'", "'MappedImage'", 
        "'Texture'", "'TextureWidth'", "'TextureHeight'", "'Coords'", "'Status'", 
        "'ROTATED_90_CLOCKWISE'", "'Animation'", "'AnimationMode'", "'AnimationDelay'", 
        "'RandomizeStartFrame'", "'NumberImages'", "'Image'", "'Armor'", 
        "'CommandButton'", "'CommandSet'", "'DamageFX'", "'DrawGroupInfo'", 
        "'FXList'", "'ParticleSystem'", "'Sound'", "'RayEffect'", "'Tracer'", 
        "'LightPulse'", "'ViewShake'", "'TerrainScorch'", "'FXListAtBonePos'", 
        "'InGameUI'", "'SpyDroneRadiusCursor'", "'AttackScatterAreaRadiusCursor'", 
        "'SuperweaponScatterAreaRadiusCursor'", "'AttackDamageAreaRadiusCursor'", 
        "'AttackContinueAreaRadiusCursor'", "'GuardAreaRadiusCursor'", "'EmergencyRepairRadiusCursor'", 
        "'FrenzyRadiusCursor'", "'FriendlySpecialPowerRadiusCursor'", "'OffensiveSpecialPowerRadiusCursor'", 
        "'ParticleCannonRadiusCursor'", "'A10StrikeRadiusCursor'", "'CarpetBombRadiusCursor'", 
        "'DaisyCutterRadiusCursor'", "'ParadropRadiusCursor'", "'SpySatelliteRadiusCursor'", 
        "'SpectreGunshipRadiusCursor'", "'HelixNapalmBombRadiusCursor'", 
        "'NuclearMissileRadiusCursor'", "'EMPPulseRadiusCursor'", "'ArtilleryRadiusCursor'", 
        "'NapalmStrikeRadiusCursor'", "'ClusterMinesRadiusCursor'", "'ScudStormRadiusCursor'", 
        "'AnthraxBombRadiusCursor'", "'AmbushRadiusCursor'", "'RadarRadiusCursor'", 
        "'ClearMinesRadiusCursor'", "'AmbulanceRadiusCursor'", "'Style'", 
        "'OpacityMin'", "'OpacityMax'", "'OpacityThrobTime'", "'Color'", 
        "'OnlyVisibleToOwningPlayer'", "'Locomotor'", "'Speed'", "'MinSpeed'", 
        "'SpeedDamaged'", "'TurnRate'", "'TurnRateDamaged'", "'Acceleration'", 
        "'AccelerationDamaged'", "'MaxThrustAngle'", "'Braking'", "'MinTurnSpeed'", 
        "'StickToGround'", "'WanderWidthFactor'", "'WanderLengthFactor'", 
        "'WanderAboutPointRadius'", "'TurnPivotOffset'", "'AccelerationPitchLimit'", 
        "'DecelerationPitchLimit'", "'BounceAmount'", "'PitchStiffness'", 
        "'RollStiffness'", "'PitchDamping'", "'RollDamping'", "'ForwardAccelerationPitchFactor'", 
        "'LateralAccelerationRollFactor'", "'ForwardVelocityPitchFactor'", 
        "'LateralVelocityRollFactor'", "'Apply2DFrictionWhenAirborne'", 
        "'AirborneTargetingHeight'", "'LocomotorWorksWhenDead'", "'HasSuspension'", 
        "'CanMoveBackwards'", "'MaximumWheelExtension'", "'MaximumWheelCompression'", 
        "'FrontWheelTurnAngle'", "'AllowAirborneMotiveForce'", "'PreferredHeight'", 
        "'PreferredHeightDamping'", "'ThrustRoll'", "'ThrustWobbleRate'", 
        "'ThrustMinWobble'", "'ThrustMaxWobble'", "'CloseEnoughDist3D'", 
        "'Lift'", "'LiftDamaged'", "'UniformAxialDamping'", "'CloseEnoughDist'", 
        "'CirclingRadius'", "'PitchInDirectionOfZVelFactor'", "'SlideIntoPlaceTime'", 
        "'SpeedLimitZ'", "'Extra2DFriction'", "'DownhillOnly'", "'RudderCorrectionDegree'", 
        "'RudderCorrectionRate'", "'ElevatorCorrectionDegree'", "'ElevatorCorrectionRate'", 
        "'Surfaces'", "'ZAxisBehavior'", "'Appearance'", "'GroupMovementPriority'", 
        "'Weapon'", "'PrimaryDamage'", "'PrimaryDamageRadius'", "'SecondaryDamage'", 
        "'SecondaryDamageRadius'", "'AttackRange'", "'ScatterRadius'", "'AcceptableAimDelta'", 
        "'AntiSmallMissile'", "'AntiProjectile'", "'WeaponSpeed'", "'MinimumAttackRange'", 
        "'ProjectileExhaust'", "'VeterancyProjectileExhaust'", "'ProjectileObject'", 
        "'DamageDealtAtSelfPosition'", "'DelayBetweenShots'", "'ClipSize'", 
        "'ClipReloadTime'", "'AutoReloadsClip'", "'FireFX'", "'VeterancyFireFX'", 
        "'ProjectileDetonationFX'", "'FireSound'", "'ScatterRadiusVsInfantry'", 
        "'MinTargetPitch'", "'MaxTargetPitch'", "'WeaponRecoil'", "'ProjectileCollidesWith'", 
        "'ShotsPerBarrel'", "'AntiAirborneVehicle'", "'AntiAirborneInfantry'", 
        "'AntiGround'", "'LaserName'", "'DamageType'", "'DeathType'", "'RadiusDamageAffects'", 
        "'WeaponBonus'", "'LaserBoneName'", "'Weather'", "'SnowEnabled'", 
        "'SnowTexture'", "'SnowBoxDimensions'", "'SnowBoxDensity'", "'SnowFrequencyScaleX'", 
        "'SnowFrequencyScaleY'", "'SnowAmplitude'", "'SnowVelocity'", "'SnowPointSize'", 
        "'SnowMaxPointSize'", "'SnowMinPointSize'", "'SnowPointSprites'", 
        "'SnowQuadSize'", "'end'", "'End'", "'END'", "'.'", "'tga'", "'dds'", 
        "'Command'", "'Options'", "'ButtonImage'", "'ButtonBorderType'", 
        "'TextLabel'", "'DescriptLabel'", "'ConflictingLabel'", "'CursorName'", 
        "'RadiusCursorType'", "'InvalidCursorName'", "'UnitSpecificSound'", 
        "'MaxShotsToFire'", "'ThrottleTime'", "'AmountForMajorFX'", "'MajorFX'", 
        "'MinorFX'", "'VeterancyMajorFX'", "'VeterancyMinorFX'", "'UsePlayerColor'", 
        "'ColorForText'", "'ColorForTextDropShadow'", "'DropShadowOffsetX'", 
        "'DropShadowOffsetY'", "'FontName'", "'FontSize'", "'FontIsBold'", 
        "'DrawPositionXPercent'", "'DrawPositionYPixel'", "'Name'", "'Count'", 
        "'Offset'", "'Radius'", "'Height'", "'InitialDelay'", "'RotateX'", 
        "'RotateY'", "'RotateZ'", "'OrientToObject'", "'Ricochet'", "'UseCallersRadius'", 
        "'AttachToObject'", "'CreateAtGroundHeight'", "'PrimaryOffset'", 
        "'SecondaryOffset'", "'TracerName'", "'BoneName'", "'DecayAt'", 
        "'Length'", "'Width'", "'Probability'", "'RadiusAsPercentOfObjectSize'", 
        "'IncreaseTime'", "'DecreaseTime'", "'Type'", "'FX'", "'OrientToBone'", 
        "'MaxSelectionSize'", "'MessageColor1'", "'MessageColor2'", "'MessagePosition'", 
        "'MessageFont'", "'MessagePointSize'", "'MessageBold'", "'MessageDelayMS'", 
        "'MilitaryCaptionColor'", "'MilitaryCaptionPosition'", "'MilitaryCaptionTitleFont'", 
        "'MilitaryCaptionTitlePointSize'", "'MilitaryCaptionTitleBold'", 
        "'MilitaryCaptionFont'", "'MilitaryCaptionPointSize'", "'MilitaryCaptionBold'", 
        "'MilitaryCaptionRandomizeTyping'", "'SuperweaponCountdownPosition'", 
        "'SuperweaponCountdownFlashDuration'", "'SuperweaponCountdownFlashColor'", 
        "'SuperweaponCountdownNormalFont'", "'SuperweaponCountdownNormalPointSize'", 
        "'SuperweaponCountdownNormalBold'", "'SuperweaponCountdownReadyFont'", 
        "'SuperweaponCountdownReadyPointSize'", "'SuperweaponCountdownReadyBold'", 
        "'NamedTimerCountdownPosition'", "'NamedTimerCountdownFlashDuration'", 
        "'NamedTimerCountdownFlashColor'", "'NamedTimerCountdownNormalFont'", 
        "'NamedTimerCountdownNormalPointSize'", "'NamedTimerCountdownNormalBold'", 
        "'NamedTimerCountdownNormalColor'", "'NamedTimerCountdownReadyFont'", 
        "'NamedTimerCountdownReadyPointSize'", "'NamedTimerCountdownReadyBold'", 
        "'NamedTimerCountdownReadyColor'", "'FloatingTextTimeOut'", "'FloatingTextMoveUpSpeed'", 
        "'FloatingTextVanishRate'", "'DrawRMBScrollAnchor'", "'MoveRMBScrollAnchor'", 
        "'PopupMessageColor'", "'Object'", "'Science'", "'SpecialPower'", 
        "'Upgrade'", "'WeaponSlot'", null, null, null, "'='"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, "INT", "FLOAT", "PROCENT", 
        "EQ", "WEAPONSLOT", "VETERENCY", "XCOORD", "YCOORD", "ZCOORD", "COORDLEFT", 
        "COORDTOP", "COORDRIGHT", "COORDBOTTOM", "R", "G", "B", "A", "DISTRIBUTION_FORM", 
        "MANUAL", "BOOLEAN", "STRING", "ID", "NL", "SKIp", "COMMENT", "WS"
    ];
    public static readonly ruleNames = [
        "program", "classes", "aiDataClass", "aidataClassProperties_single", 
        "aidataClassproperties_BlockSkirmishBuildList", "skirmishBuildListBlock", 
        "skirmishBuildListBlock_structure_properties", "aidataClassProperties_blockSideinfo", 
        "sideinfoproperties", "sideinfo_skillset_blocks", "mappedImageClass", 
        "mappedImageClassProperties", "animation2DClass", "animation2DClassProperties", 
        "armorClass", "armorClassProperties", "commandButtonClass", "commandButtonClassProperties", 
        "commandSetClass", "commandSetClassProperty", "damageFXClass", "damageFXClassProperties", 
        "drawGroupInfoClass", "drawgroupinfoProperties", "fxListClass", 
        "fxlistblocks", "fxlist_ps_block", "fxlist_sound_block", "fxlist_rayeffect_block", 
        "fxlist_tracer_block", "fxlist_lightpulse_block", "fxlist_viewshake_block", 
        "fxlist_terrainscorch_block", "fxlist_fxlistatbone_block", "inGameUIClass", 
        "igui_blocks", "ingui_block_properties", "locomotorClass", "locomotor_properties", 
        "locomotor_surface_property", "locomotor_zbehavior_property", "locomotor_appereance_property", 
        "locomotor_movepriority_property", "surface_value", "zbehavior_value", 
        "appereance_value", "movepriority_value", "weaponClass", "weapon_properties", 
        "weapon_damagetype_property", "weapon_deathtype_property", "weapon_damageaffects_property", 
        "weapon_weaponbonus_property", "weapon_lasterbone_property", "weapon_weaponbonus_condition_value", 
        "weapon_weaponbonus_bonus_value", "damageType_value", "deathType_value", 
        "damageAffects_value", "weatherClass", "weather_properties", "end", 
        "file", "cb_command_property", "cb_command_value", "cb_options_property", 
        "cb_options_value", "cb_buttonimage_property", "cb_buttonbordertype_property", 
        "cb_buttonbordertype_value", "cb_textlabel_property", "cb_descriptionlabel_property", 
        "cb_conflictinglabel_property", "cb_cursorname_propery", "cb_radius_cursorname_value", 
        "cb_invalid_cursorname_propery", "cb_unitspecificsound_property", 
        "cb_maxshotsfire_property", "dfx_throttletime_property", "dfx_amountformajorfx_property", 
        "dfx_majorfx_property", "dfx_minorfx_property", "dfx_vetmajorfx_property", 
        "dfx_vetminorfx_property", "dgi_useplayercolor_property", "dgi_colorfortext_property", 
        "dgi_colordropshadow_property", "dgi_dropshadowoffsetX_property", 
        "dgi_dropshadowoffsetY_property", "dgi_fontname_property", "dgi_fontsize_property", 
        "dgi_fontisbold_property", "dgi_drawposXperc_property", "dgi_drawposYperc_property", 
        "fxlist_ps_name_property", "fxlist_ps_count_property", "fxlist_ps_offset_property", 
        "fxlist_ps_radius_property", "fxlist_ps_height_property", "fxlist_ps_initialDelay_property", 
        "fxlist_ps_rotateX_property", "fxlist_ps_rotatey_property", "fxlist_ps_rotateZ_property", 
        "fxlist_ps_orienttoobject_property", "fxlist_ps_ricochet_property", 
        "fxlist_ps_usecallerradius_property", "fxlist_ps_attachtoobject_property", 
        "fxlist_ps_creategroundheight_property", "fxlist_sound_property", 
        "fxlist_rayeffect_primaryoffset_property", "fxlist_rayeffect_secondaryoffset_proprety", 
        "fxlist_tracer_name_propety", "fxlist_tracer_bonename_property", 
        "fxlist_tracer_speed_property", "fxlist_tracer_decayat_property", 
        "fxlist_tracer_length_property", "fxlist_tracer_width_property", 
        "fxlist_tracer_color_property", "fxlist_tracer_probability_property", 
        "fxlist_lightpulse_color_property", "fxlist_lightpulse_radius_property", 
        "fxlist_lightpulse_radiuspercentobjectsize_property", "fxlist_lightpulse_increasetime_property", 
        "fxlist_lightpulse_decreasetime_property", "fxlist_viewshake_type_property", 
        "fxlist_scorch_type_property", "fxlist_scorch_radius_property", 
        "fxlist_atbonepos_fx_property", "fxlist_atbonepos_bonename_property", 
        "fxlist_atbonepos_orienttoobject_property", "fxlist_name_object_propety", 
        "igui_properties", "faction_value", "commandbutton_value", "cursorname_value", 
        "radius_cursorname_value", "invalid_cursorname_value", "mappedimage_value", 
        "particlesystem_value", "fxlist_value", "object_property", "object_value", 
        "science_property", "science_value", "specialpower_property", "specialpower_value", 
        "audioevent_value", "upgrade_property", "upgrade_value", "weaponslot_property", 
        "rand_value", "coord3D",
    ];

    public get grammarFileName(): string { return "MapIni.g4"; }
    public get literalNames(): (string | null)[] { return MapIniParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return MapIniParser.symbolicNames; }
    public get ruleNames(): string[] { return MapIniParser.ruleNames; }
    public get serializedATN(): number[] { return MapIniParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, MapIniParser._ATN, MapIniParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public program(): ProgramContext {
        let localContext = new ProgramContext(this.context, this.state);
        this.enterRule(localContext, 0, MapIniParser.RULE_program);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 307;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 1 || ((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & 134733953) !== 0) || _la === 124 || _la === 185 || _la === 224) {
                {
                {
                this.state = 304;
                this.classes();
                }
                }
                this.state = 309;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 310;
            this.match(MapIniParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public classes(): ClassesContext {
        let localContext = new ClassesContext(this.context, this.state);
        this.enterRule(localContext, 2, MapIniParser.RULE_classes);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 325;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__60:
                {
                this.state = 312;
                this.mappedImageClass();
                }
                break;
            case MapIniParser.T__0:
                {
                this.state = 313;
                this.aiDataClass();
                }
                break;
            case MapIniParser.T__67:
                {
                this.state = 314;
                this.animation2DClass();
                }
                break;
            case MapIniParser.T__73:
                {
                this.state = 315;
                this.armorClass();
                }
                break;
            case MapIniParser.T__74:
                {
                this.state = 316;
                this.commandButtonClass();
                }
                break;
            case MapIniParser.T__75:
                {
                this.state = 317;
                this.commandSetClass();
                }
                break;
            case MapIniParser.T__76:
                {
                this.state = 318;
                this.damageFXClass();
                }
                break;
            case MapIniParser.T__77:
                {
                this.state = 319;
                this.drawGroupInfoClass();
                }
                break;
            case MapIniParser.T__78:
                {
                this.state = 320;
                this.fxListClass();
                }
                break;
            case MapIniParser.T__87:
                {
                this.state = 321;
                this.inGameUIClass();
                }
                break;
            case MapIniParser.T__123:
                {
                this.state = 322;
                this.locomotorClass();
                }
                break;
            case MapIniParser.T__184:
                {
                this.state = 323;
                this.weaponClass();
                }
                break;
            case MapIniParser.T__223:
                {
                this.state = 324;
                this.weatherClass();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 330;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 370) {
                {
                {
                this.state = 327;
                this.match(MapIniParser.NL);
                }
                }
                this.state = 332;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public aiDataClass(): AiDataClassContext {
        let localContext = new AiDataClassContext(this.context, this.state);
        this.enterRule(localContext, 4, MapIniParser.RULE_aiDataClass);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 333;
            this.match(MapIniParser.T__0);
            this.state = 334;
            this.match(MapIniParser.NL);
            this.state = 340;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967292) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 532479) !== 0)) {
                {
                this.state = 338;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
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
                    this.state = 335;
                    this.aidataClassProperties_single();
                    }
                    break;
                case MapIniParser.T__50:
                    {
                    this.state = 336;
                    this.aidataClassProperties_blockSideinfo();
                    }
                    break;
                case MapIniParser.T__43:
                    {
                    this.state = 337;
                    this.aidataClassproperties_BlockSkirmishBuildList();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 342;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 343;
            this.end();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public aidataClassProperties_single(): AidataClassProperties_singleContext {
        let localContext = new AidataClassProperties_singleContext(this.context, this.state);
        this.enterRule(localContext, 6, MapIniParser.RULE_aidataClassProperties_single);
        try {
            this.state = 471;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 345;
                this.match(MapIniParser.T__1);
                this.state = 346;
                this.match(MapIniParser.EQ);
                this.state = 347;
                this.match(MapIniParser.FLOAT);
                }
                break;
            case MapIniParser.T__2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 348;
                this.match(MapIniParser.T__2);
                this.state = 349;
                this.match(MapIniParser.EQ);
                this.state = 350;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 351;
                this.match(MapIniParser.T__3);
                this.state = 352;
                this.match(MapIniParser.EQ);
                this.state = 353;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 354;
                this.match(MapIniParser.T__4);
                this.state = 355;
                this.match(MapIniParser.EQ);
                this.state = 356;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 357;
                this.match(MapIniParser.T__5);
                this.state = 358;
                this.match(MapIniParser.EQ);
                this.state = 359;
                this.match(MapIniParser.FLOAT);
                }
                break;
            case MapIniParser.T__6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 360;
                this.match(MapIniParser.T__6);
                this.state = 361;
                this.match(MapIniParser.EQ);
                this.state = 362;
                this.match(MapIniParser.FLOAT);
                }
                break;
            case MapIniParser.T__7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 363;
                this.match(MapIniParser.T__7);
                this.state = 364;
                this.match(MapIniParser.EQ);
                this.state = 365;
                this.match(MapIniParser.FLOAT);
                }
                break;
            case MapIniParser.T__8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 366;
                this.match(MapIniParser.T__8);
                this.state = 367;
                this.match(MapIniParser.EQ);
                this.state = 368;
                this.match(MapIniParser.FLOAT);
                }
                break;
            case MapIniParser.T__9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 369;
                this.match(MapIniParser.T__9);
                this.state = 370;
                this.match(MapIniParser.EQ);
                this.state = 371;
                this.match(MapIniParser.FLOAT);
                }
                break;
            case MapIniParser.T__10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 372;
                this.match(MapIniParser.T__10);
                this.state = 373;
                this.match(MapIniParser.EQ);
                this.state = 374;
                this.match(MapIniParser.FLOAT);
                }
                break;
            case MapIniParser.T__11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 375;
                this.match(MapIniParser.T__11);
                this.state = 376;
                this.match(MapIniParser.EQ);
                this.state = 377;
                this.match(MapIniParser.FLOAT);
                }
                break;
            case MapIniParser.T__12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 378;
                this.match(MapIniParser.T__12);
                this.state = 379;
                this.match(MapIniParser.EQ);
                this.state = 380;
                this.match(MapIniParser.FLOAT);
                }
                break;
            case MapIniParser.T__13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 381;
                this.match(MapIniParser.T__13);
                this.state = 382;
                this.match(MapIniParser.EQ);
                this.state = 383;
                this.match(MapIniParser.FLOAT);
                }
                break;
            case MapIniParser.T__14:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 384;
                this.match(MapIniParser.T__14);
                this.state = 385;
                this.match(MapIniParser.EQ);
                this.state = 386;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__15:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 387;
                this.match(MapIniParser.T__15);
                this.state = 388;
                this.match(MapIniParser.EQ);
                this.state = 389;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__16:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 390;
                this.match(MapIniParser.T__16);
                this.state = 391;
                this.match(MapIniParser.EQ);
                this.state = 392;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__17:
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 393;
                this.match(MapIniParser.T__17);
                this.state = 394;
                this.match(MapIniParser.EQ);
                this.state = 395;
                this.match(MapIniParser.FLOAT);
                }
                break;
            case MapIniParser.T__18:
                this.enterOuterAlt(localContext, 18);
                {
                this.state = 396;
                this.match(MapIniParser.T__18);
                this.state = 397;
                this.match(MapIniParser.EQ);
                this.state = 398;
                this.match(MapIniParser.FLOAT);
                }
                break;
            case MapIniParser.T__19:
                this.enterOuterAlt(localContext, 19);
                {
                this.state = 399;
                this.match(MapIniParser.T__19);
                this.state = 400;
                this.match(MapIniParser.EQ);
                this.state = 401;
                this.match(MapIniParser.FLOAT);
                }
                break;
            case MapIniParser.T__20:
                this.enterOuterAlt(localContext, 20);
                {
                this.state = 402;
                this.match(MapIniParser.T__20);
                this.state = 403;
                this.match(MapIniParser.EQ);
                this.state = 404;
                this.match(MapIniParser.FLOAT);
                }
                break;
            case MapIniParser.T__21:
                this.enterOuterAlt(localContext, 21);
                {
                this.state = 405;
                this.match(MapIniParser.T__21);
                this.state = 406;
                this.match(MapIniParser.EQ);
                this.state = 407;
                this.match(MapIniParser.FLOAT);
                }
                break;
            case MapIniParser.T__22:
                this.enterOuterAlt(localContext, 22);
                {
                this.state = 408;
                this.match(MapIniParser.T__22);
                this.state = 409;
                this.match(MapIniParser.EQ);
                this.state = 410;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__23:
                this.enterOuterAlt(localContext, 23);
                {
                this.state = 411;
                this.match(MapIniParser.T__23);
                this.state = 412;
                this.match(MapIniParser.EQ);
                this.state = 413;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__24:
                this.enterOuterAlt(localContext, 24);
                {
                this.state = 414;
                this.match(MapIniParser.T__24);
                this.state = 415;
                this.match(MapIniParser.EQ);
                this.state = 416;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__25:
                this.enterOuterAlt(localContext, 25);
                {
                this.state = 417;
                this.match(MapIniParser.T__25);
                this.state = 418;
                this.match(MapIniParser.EQ);
                this.state = 419;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__26:
                this.enterOuterAlt(localContext, 26);
                {
                this.state = 420;
                this.match(MapIniParser.T__26);
                this.state = 421;
                this.match(MapIniParser.EQ);
                this.state = 422;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__27:
                this.enterOuterAlt(localContext, 27);
                {
                this.state = 423;
                this.match(MapIniParser.T__27);
                this.state = 424;
                this.match(MapIniParser.EQ);
                this.state = 425;
                this.match(MapIniParser.FLOAT);
                }
                break;
            case MapIniParser.T__28:
                this.enterOuterAlt(localContext, 28);
                {
                this.state = 426;
                this.match(MapIniParser.T__28);
                this.state = 427;
                this.match(MapIniParser.EQ);
                this.state = 428;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__29:
                this.enterOuterAlt(localContext, 29);
                {
                this.state = 429;
                this.match(MapIniParser.T__29);
                this.state = 430;
                this.match(MapIniParser.EQ);
                this.state = 431;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__30:
                this.enterOuterAlt(localContext, 30);
                {
                this.state = 432;
                this.match(MapIniParser.T__30);
                this.state = 433;
                this.match(MapIniParser.EQ);
                this.state = 434;
                this.match(MapIniParser.FLOAT);
                }
                break;
            case MapIniParser.T__31:
                this.enterOuterAlt(localContext, 31);
                {
                this.state = 435;
                this.match(MapIniParser.T__31);
                this.state = 436;
                this.match(MapIniParser.EQ);
                this.state = 437;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__32:
                this.enterOuterAlt(localContext, 32);
                {
                this.state = 438;
                this.match(MapIniParser.T__32);
                this.state = 439;
                this.match(MapIniParser.EQ);
                this.state = 440;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__33:
                this.enterOuterAlt(localContext, 33);
                {
                this.state = 441;
                this.match(MapIniParser.T__33);
                this.state = 442;
                this.match(MapIniParser.EQ);
                this.state = 443;
                this.match(MapIniParser.FLOAT);
                }
                break;
            case MapIniParser.T__34:
                this.enterOuterAlt(localContext, 34);
                {
                this.state = 444;
                this.match(MapIniParser.T__34);
                this.state = 445;
                this.match(MapIniParser.EQ);
                this.state = 446;
                this.match(MapIniParser.FLOAT);
                }
                break;
            case MapIniParser.T__35:
                this.enterOuterAlt(localContext, 35);
                {
                this.state = 447;
                this.match(MapIniParser.T__35);
                this.state = 448;
                this.match(MapIniParser.EQ);
                this.state = 449;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__36:
                this.enterOuterAlt(localContext, 36);
                {
                this.state = 450;
                this.match(MapIniParser.T__36);
                this.state = 451;
                this.match(MapIniParser.EQ);
                this.state = 452;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__37:
                this.enterOuterAlt(localContext, 37);
                {
                this.state = 453;
                this.match(MapIniParser.T__37);
                this.state = 454;
                this.match(MapIniParser.EQ);
                this.state = 455;
                this.match(MapIniParser.FLOAT);
                }
                break;
            case MapIniParser.T__38:
                this.enterOuterAlt(localContext, 38);
                {
                this.state = 456;
                this.match(MapIniParser.T__38);
                this.state = 457;
                this.match(MapIniParser.EQ);
                this.state = 458;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__39:
                this.enterOuterAlt(localContext, 39);
                {
                this.state = 459;
                this.match(MapIniParser.T__39);
                this.state = 460;
                this.match(MapIniParser.EQ);
                this.state = 461;
                this.match(MapIniParser.FLOAT);
                }
                break;
            case MapIniParser.T__40:
                this.enterOuterAlt(localContext, 40);
                {
                this.state = 462;
                this.match(MapIniParser.T__40);
                this.state = 463;
                this.match(MapIniParser.EQ);
                this.state = 464;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__41:
                this.enterOuterAlt(localContext, 41);
                {
                this.state = 465;
                this.match(MapIniParser.T__41);
                this.state = 466;
                this.match(MapIniParser.EQ);
                this.state = 467;
                this.match(MapIniParser.FLOAT);
                }
                break;
            case MapIniParser.T__42:
                this.enterOuterAlt(localContext, 42);
                {
                this.state = 468;
                this.match(MapIniParser.T__42);
                this.state = 469;
                this.match(MapIniParser.EQ);
                this.state = 470;
                this.match(MapIniParser.FLOAT);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public aidataClassproperties_BlockSkirmishBuildList(): AidataClassproperties_BlockSkirmishBuildListContext {
        let localContext = new AidataClassproperties_BlockSkirmishBuildListContext(this.context, this.state);
        this.enterRule(localContext, 8, MapIniParser.RULE_aidataClassproperties_BlockSkirmishBuildList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 473;
            this.match(MapIniParser.T__43);
            this.state = 474;
            this.faction_value();
            this.state = 478;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 45) {
                {
                {
                this.state = 475;
                this.skirmishBuildListBlock();
                }
                }
                this.state = 480;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 481;
            this.end();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public skirmishBuildListBlock(): SkirmishBuildListBlockContext {
        let localContext = new SkirmishBuildListBlockContext(this.context, this.state);
        this.enterRule(localContext, 10, MapIniParser.RULE_skirmishBuildListBlock);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 483;
            this.match(MapIniParser.T__44);
            this.state = 484;
            this.object_value();
            this.state = 488;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 31) !== 0)) {
                {
                {
                this.state = 485;
                this.skirmishBuildListBlock_structure_properties();
                }
                }
                this.state = 490;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 491;
            this.end();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public skirmishBuildListBlock_structure_properties(): SkirmishBuildListBlock_structure_propertiesContext {
        let localContext = new SkirmishBuildListBlock_structure_propertiesContext(this.context, this.state);
        this.enterRule(localContext, 12, MapIniParser.RULE_skirmishBuildListBlock_structure_properties);
        try {
            this.state = 509;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__45:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 493;
                this.match(MapIniParser.T__45);
                this.state = 494;
                this.match(MapIniParser.EQ);
                this.state = 495;
                this.match(MapIniParser.XCOORD);
                this.state = 496;
                this.match(MapIniParser.YCOORD);
                }
                break;
            case MapIniParser.T__46:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 497;
                this.match(MapIniParser.T__46);
                this.state = 498;
                this.match(MapIniParser.EQ);
                this.state = 499;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__47:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 500;
                this.match(MapIniParser.T__47);
                this.state = 501;
                this.match(MapIniParser.EQ);
                this.state = 502;
                this.match(MapIniParser.FLOAT);
                }
                break;
            case MapIniParser.T__48:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 503;
                this.match(MapIniParser.T__48);
                this.state = 504;
                this.match(MapIniParser.EQ);
                this.state = 505;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__49:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 506;
                this.match(MapIniParser.T__49);
                this.state = 507;
                this.match(MapIniParser.EQ);
                this.state = 508;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public aidataClassProperties_blockSideinfo(): AidataClassProperties_blockSideinfoContext {
        let localContext = new AidataClassProperties_blockSideinfoContext(this.context, this.state);
        this.enterRule(localContext, 14, MapIniParser.RULE_aidataClassProperties_blockSideinfo);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 511;
            this.match(MapIniParser.T__50);
            this.state = 512;
            this.match(MapIniParser.ID);
            this.state = 516;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & 511) !== 0)) {
                {
                {
                this.state = 513;
                this.sideinfoproperties();
                }
                }
                this.state = 518;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 519;
            this.end();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sideinfoproperties(): SideinfopropertiesContext {
        let localContext = new SideinfopropertiesContext(this.context, this.state);
        this.enterRule(localContext, 16, MapIniParser.RULE_sideinfoproperties);
        try {
            this.state = 534;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__51:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 521;
                this.match(MapIniParser.T__51);
                this.state = 522;
                this.match(MapIniParser.EQ);
                this.state = 523;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__52:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 524;
                this.match(MapIniParser.T__52);
                this.state = 525;
                this.match(MapIniParser.EQ);
                this.state = 526;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__53:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 527;
                this.match(MapIniParser.T__53);
                this.state = 528;
                this.match(MapIniParser.EQ);
                this.state = 529;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__54:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 530;
                this.match(MapIniParser.T__54);
                this.state = 531;
                this.match(MapIniParser.EQ);
                this.state = 532;
                this.object_value();
                }
                break;
            case MapIniParser.T__55:
            case MapIniParser.T__56:
            case MapIniParser.T__57:
            case MapIniParser.T__58:
            case MapIniParser.T__59:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 533;
                this.sideinfo_skillset_blocks();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sideinfo_skillset_blocks(): Sideinfo_skillset_blocksContext {
        let localContext = new Sideinfo_skillset_blocksContext(this.context, this.state);
        this.enterRule(localContext, 18, MapIniParser.RULE_sideinfo_skillset_blocks);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 536;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 31) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 540;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 344) {
                {
                {
                this.state = 537;
                this.science_property();
                }
                }
                this.state = 542;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 543;
            this.end();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public mappedImageClass(): MappedImageClassContext {
        let localContext = new MappedImageClassContext(this.context, this.state);
        this.enterRule(localContext, 20, MapIniParser.RULE_mappedImageClass);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 545;
            this.match(MapIniParser.T__60);
            this.state = 546;
            this.match(MapIniParser.ID);
            this.state = 550;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & 31) !== 0)) {
                {
                {
                this.state = 547;
                this.mappedImageClassProperties();
                }
                }
                this.state = 552;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 553;
            this.end();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public mappedImageClassProperties(): MappedImageClassPropertiesContext {
        let localContext = new MappedImageClassPropertiesContext(this.context, this.state);
        this.enterRule(localContext, 22, MapIniParser.RULE_mappedImageClassProperties);
        let _la: number;
        try {
            this.state = 573;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__61:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 555;
                this.match(MapIniParser.T__61);
                this.state = 556;
                this.match(MapIniParser.EQ);
                this.state = 557;
                this.file();
                }
                break;
            case MapIniParser.T__62:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 558;
                this.match(MapIniParser.T__62);
                this.state = 559;
                this.match(MapIniParser.EQ);
                this.state = 560;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__63:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 561;
                this.match(MapIniParser.T__63);
                this.state = 562;
                this.match(MapIniParser.EQ);
                this.state = 563;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__64:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 564;
                this.match(MapIniParser.T__64);
                this.state = 565;
                this.match(MapIniParser.EQ);
                this.state = 566;
                this.match(MapIniParser.COORDLEFT);
                this.state = 567;
                this.match(MapIniParser.COORDTOP);
                this.state = 568;
                this.match(MapIniParser.COORDRIGHT);
                this.state = 569;
                this.match(MapIniParser.COORDBOTTOM);
                }
                break;
            case MapIniParser.T__65:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 570;
                this.match(MapIniParser.T__65);
                this.state = 571;
                this.match(MapIniParser.EQ);
                this.state = 572;
                _la = this.tokenStream.LA(1);
                if(!(_la === 67 || _la === 369)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public animation2DClass(): Animation2DClassContext {
        let localContext = new Animation2DClassContext(this.context, this.state);
        this.enterRule(localContext, 24, MapIniParser.RULE_animation2DClass);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 575;
            this.match(MapIniParser.T__67);
            this.state = 576;
            this.match(MapIniParser.ID);
            this.state = 580;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 31) !== 0)) {
                {
                {
                this.state = 577;
                this.animation2DClassProperties();
                }
                }
                this.state = 582;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 583;
            this.end();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public animation2DClassProperties(): Animation2DClassPropertiesContext {
        let localContext = new Animation2DClassPropertiesContext(this.context, this.state);
        this.enterRule(localContext, 26, MapIniParser.RULE_animation2DClassProperties);
        try {
            this.state = 600;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__68:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 585;
                this.match(MapIniParser.T__68);
                this.state = 586;
                this.match(MapIniParser.EQ);
                this.state = 587;
                this.match(MapIniParser.ID);
                }
                break;
            case MapIniParser.T__69:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 588;
                this.match(MapIniParser.T__69);
                this.state = 589;
                this.match(MapIniParser.EQ);
                this.state = 590;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__70:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 591;
                this.match(MapIniParser.T__70);
                this.state = 592;
                this.match(MapIniParser.EQ);
                this.state = 593;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__71:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 594;
                this.match(MapIniParser.T__71);
                this.state = 595;
                this.match(MapIniParser.EQ);
                this.state = 596;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__72:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 597;
                this.match(MapIniParser.T__72);
                this.state = 598;
                this.match(MapIniParser.EQ);
                this.state = 599;
                this.match(MapIniParser.ID);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public armorClass(): ArmorClassContext {
        let localContext = new ArmorClassContext(this.context, this.state);
        this.enterRule(localContext, 28, MapIniParser.RULE_armorClass);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 602;
            this.match(MapIniParser.T__73);
            this.state = 603;
            this.match(MapIniParser.ID);
            this.state = 607;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 74) {
                {
                {
                this.state = 604;
                this.armorClassProperties();
                }
                }
                this.state = 609;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 610;
            this.end();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public armorClassProperties(): ArmorClassPropertiesContext {
        let localContext = new ArmorClassPropertiesContext(this.context, this.state);
        this.enterRule(localContext, 30, MapIniParser.RULE_armorClassProperties);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 612;
            this.match(MapIniParser.T__73);
            this.state = 613;
            this.match(MapIniParser.EQ);
            this.state = 614;
            this.match(MapIniParser.ID);
            this.state = 615;
            this.match(MapIniParser.PROCENT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public commandButtonClass(): CommandButtonClassContext {
        let localContext = new CommandButtonClassContext(this.context, this.state);
        this.enterRule(localContext, 32, MapIniParser.RULE_commandButtonClass);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 617;
            this.match(MapIniParser.T__74);
            this.state = 618;
            this.match(MapIniParser.ID);
            this.state = 619;
            this.match(MapIniParser.NL);
            this.state = 625;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 244)) & ~0x1F) === 0 && ((1 << (_la - 244)) & 4095) !== 0) || ((((_la - 343)) & ~0x1F) === 0 && ((1 << (_la - 343)) & 31) !== 0)) {
                {
                {
                this.state = 620;
                this.commandButtonClassProperties();
                this.state = 621;
                this.match(MapIniParser.NL);
                }
                }
                this.state = 627;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 628;
            this.end();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public commandButtonClassProperties(): CommandButtonClassPropertiesContext {
        let localContext = new CommandButtonClassPropertiesContext(this.context, this.state);
        this.enterRule(localContext, 34, MapIniParser.RULE_commandButtonClassProperties);
        try {
            this.state = 647;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__243:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 630;
                this.cb_command_property();
                }
                break;
            case MapIniParser.T__244:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 631;
                this.cb_options_property();
                }
                break;
            case MapIniParser.T__245:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 632;
                this.cb_buttonimage_property();
                }
                break;
            case MapIniParser.T__246:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 633;
                this.cb_buttonbordertype_property();
                }
                break;
            case MapIniParser.T__247:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 634;
                this.cb_textlabel_property();
                }
                break;
            case MapIniParser.T__248:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 635;
                this.cb_descriptionlabel_property();
                }
                break;
            case MapIniParser.T__249:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 636;
                this.cb_conflictinglabel_property();
                }
                break;
            case MapIniParser.T__250:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 637;
                this.cb_cursorname_propery();
                }
                break;
            case MapIniParser.T__251:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 638;
                this.cb_radius_cursorname_value();
                }
                break;
            case MapIniParser.T__252:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 639;
                this.cb_invalid_cursorname_propery();
                }
                break;
            case MapIniParser.T__253:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 640;
                this.cb_unitspecificsound_property();
                }
                break;
            case MapIniParser.T__254:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 641;
                this.cb_maxshotsfire_property();
                }
                break;
            case MapIniParser.T__342:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 642;
                this.object_property();
                }
                break;
            case MapIniParser.T__343:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 643;
                this.science_property();
                }
                break;
            case MapIniParser.T__344:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 644;
                this.specialpower_property();
                }
                break;
            case MapIniParser.T__345:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 645;
                this.upgrade_property();
                }
                break;
            case MapIniParser.T__346:
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 646;
                this.weaponslot_property();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public commandSetClass(): CommandSetClassContext {
        let localContext = new CommandSetClassContext(this.context, this.state);
        this.enterRule(localContext, 36, MapIniParser.RULE_commandSetClass);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 649;
            this.match(MapIniParser.T__75);
            this.state = 650;
            this.match(MapIniParser.ID);
            this.state = 654;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 348) {
                {
                {
                this.state = 651;
                this.commandSetClassProperty();
                }
                }
                this.state = 656;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 657;
            this.end();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public commandSetClassProperty(): CommandSetClassPropertyContext {
        let localContext = new CommandSetClassPropertyContext(this.context, this.state);
        this.enterRule(localContext, 38, MapIniParser.RULE_commandSetClassProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 659;
            this.match(MapIniParser.INT);
            this.state = 660;
            this.match(MapIniParser.EQ);
            this.state = 661;
            this.commandbutton_value();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public damageFXClass(): DamageFXClassContext {
        let localContext = new DamageFXClassContext(this.context, this.state);
        this.enterRule(localContext, 40, MapIniParser.RULE_damageFXClass);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 663;
            this.match(MapIniParser.T__76);
            this.state = 664;
            this.match(MapIniParser.ID);
            this.state = 668;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 256)) & ~0x1F) === 0 && ((1 << (_la - 256)) & 63) !== 0)) {
                {
                {
                this.state = 665;
                this.damageFXClassProperties();
                }
                }
                this.state = 670;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 671;
            this.end();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public damageFXClassProperties(): DamageFXClassPropertiesContext {
        let localContext = new DamageFXClassPropertiesContext(this.context, this.state);
        this.enterRule(localContext, 42, MapIniParser.RULE_damageFXClassProperties);
        try {
            this.state = 679;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__255:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 673;
                this.dfx_throttletime_property();
                }
                break;
            case MapIniParser.T__257:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 674;
                this.dfx_majorfx_property();
                }
                break;
            case MapIniParser.T__258:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 675;
                this.dfx_minorfx_property();
                }
                break;
            case MapIniParser.T__259:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 676;
                this.dfx_vetmajorfx_property();
                }
                break;
            case MapIniParser.T__256:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 677;
                this.dfx_amountformajorfx_property();
                }
                break;
            case MapIniParser.T__260:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 678;
                this.dfx_vetminorfx_property();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public drawGroupInfoClass(): DrawGroupInfoClassContext {
        let localContext = new DrawGroupInfoClassContext(this.context, this.state);
        this.enterRule(localContext, 44, MapIniParser.RULE_drawGroupInfoClass);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 681;
            this.match(MapIniParser.T__77);
            this.state = 685;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 262)) & ~0x1F) === 0 && ((1 << (_la - 262)) & 1023) !== 0)) {
                {
                {
                this.state = 682;
                this.drawgroupinfoProperties();
                }
                }
                this.state = 687;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 688;
            this.end();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public drawgroupinfoProperties(): DrawgroupinfoPropertiesContext {
        let localContext = new DrawgroupinfoPropertiesContext(this.context, this.state);
        this.enterRule(localContext, 46, MapIniParser.RULE_drawgroupinfoProperties);
        try {
            this.state = 700;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__261:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 690;
                this.dgi_useplayercolor_property();
                }
                break;
            case MapIniParser.T__262:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 691;
                this.dgi_colorfortext_property();
                }
                break;
            case MapIniParser.T__263:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 692;
                this.dgi_colordropshadow_property();
                }
                break;
            case MapIniParser.T__264:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 693;
                this.dgi_dropshadowoffsetX_property();
                }
                break;
            case MapIniParser.T__265:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 694;
                this.dgi_dropshadowoffsetY_property();
                }
                break;
            case MapIniParser.T__266:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 695;
                this.dgi_fontname_property();
                }
                break;
            case MapIniParser.T__267:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 696;
                this.dgi_fontsize_property();
                }
                break;
            case MapIniParser.T__268:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 697;
                this.dgi_fontisbold_property();
                }
                break;
            case MapIniParser.T__269:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 698;
                this.dgi_drawposXperc_property();
                }
                break;
            case MapIniParser.T__270:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 699;
                this.dgi_drawposYperc_property();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxListClass(): FxListClassContext {
        let localContext = new FxListClassContext(this.context, this.state);
        this.enterRule(localContext, 48, MapIniParser.RULE_fxListClass);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 702;
            this.match(MapIniParser.T__78);
            this.state = 703;
            this.match(MapIniParser.ID);
            this.state = 707;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 255) !== 0)) {
                {
                {
                this.state = 704;
                this.fxlistblocks();
                }
                }
                this.state = 709;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 710;
            this.end();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlistblocks(): FxlistblocksContext {
        let localContext = new FxlistblocksContext(this.context, this.state);
        this.enterRule(localContext, 50, MapIniParser.RULE_fxlistblocks);
        try {
            this.state = 720;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__79:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 712;
                this.fxlist_ps_block();
                }
                break;
            case MapIniParser.T__80:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 713;
                this.fxlist_sound_block();
                }
                break;
            case MapIniParser.T__81:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 714;
                this.fxlist_rayeffect_block();
                }
                break;
            case MapIniParser.T__82:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 715;
                this.fxlist_tracer_block();
                }
                break;
            case MapIniParser.T__83:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 716;
                this.fxlist_lightpulse_block();
                }
                break;
            case MapIniParser.T__84:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 717;
                this.fxlist_viewshake_block();
                }
                break;
            case MapIniParser.T__85:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 718;
                this.fxlist_terrainscorch_block();
                }
                break;
            case MapIniParser.T__86:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 719;
                this.fxlist_fxlistatbone_block();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_ps_block(): Fxlist_ps_blockContext {
        let localContext = new Fxlist_ps_blockContext(this.context, this.state);
        this.enterRule(localContext, 52, MapIniParser.RULE_fxlist_ps_block);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 722;
            this.match(MapIniParser.T__79);
            this.state = 739;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 272)) & ~0x1F) === 0 && ((1 << (_la - 272)) & 16383) !== 0)) {
                {
                this.state = 737;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.T__271:
                    {
                    this.state = 723;
                    this.fxlist_ps_name_property();
                    }
                    break;
                case MapIniParser.T__272:
                    {
                    this.state = 724;
                    this.fxlist_ps_count_property();
                    }
                    break;
                case MapIniParser.T__273:
                    {
                    this.state = 725;
                    this.fxlist_ps_offset_property();
                    }
                    break;
                case MapIniParser.T__275:
                    {
                    this.state = 726;
                    this.fxlist_ps_height_property();
                    }
                    break;
                case MapIniParser.T__274:
                    {
                    this.state = 727;
                    this.fxlist_ps_radius_property();
                    }
                    break;
                case MapIniParser.T__276:
                    {
                    this.state = 728;
                    this.fxlist_ps_initialDelay_property();
                    }
                    break;
                case MapIniParser.T__277:
                    {
                    this.state = 729;
                    this.fxlist_ps_rotateX_property();
                    }
                    break;
                case MapIniParser.T__278:
                    {
                    this.state = 730;
                    this.fxlist_ps_rotatey_property();
                    }
                    break;
                case MapIniParser.T__279:
                    {
                    this.state = 731;
                    this.fxlist_ps_rotateZ_property();
                    }
                    break;
                case MapIniParser.T__280:
                    {
                    this.state = 732;
                    this.fxlist_ps_orienttoobject_property();
                    }
                    break;
                case MapIniParser.T__282:
                    {
                    this.state = 733;
                    this.fxlist_ps_usecallerradius_property();
                    }
                    break;
                case MapIniParser.T__281:
                    {
                    this.state = 734;
                    this.fxlist_ps_ricochet_property();
                    }
                    break;
                case MapIniParser.T__283:
                    {
                    this.state = 735;
                    this.fxlist_ps_attachtoobject_property();
                    }
                    break;
                case MapIniParser.T__284:
                    {
                    this.state = 736;
                    this.fxlist_ps_creategroundheight_property();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 741;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 742;
            this.end();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_sound_block(): Fxlist_sound_blockContext {
        let localContext = new Fxlist_sound_blockContext(this.context, this.state);
        this.enterRule(localContext, 54, MapIniParser.RULE_fxlist_sound_block);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 744;
            this.match(MapIniParser.T__80);
            this.state = 748;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 272) {
                {
                {
                this.state = 745;
                this.fxlist_sound_property();
                }
                }
                this.state = 750;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 751;
            this.end();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_rayeffect_block(): Fxlist_rayeffect_blockContext {
        let localContext = new Fxlist_rayeffect_blockContext(this.context, this.state);
        this.enterRule(localContext, 56, MapIniParser.RULE_fxlist_rayeffect_block);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 753;
            this.match(MapIniParser.T__81);
            this.state = 759;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 272)) & ~0x1F) === 0 && ((1 << (_la - 272)) & 49153) !== 0)) {
                {
                this.state = 757;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.T__271:
                    {
                    this.state = 754;
                    this.fxlist_name_object_propety();
                    }
                    break;
                case MapIniParser.T__285:
                    {
                    this.state = 755;
                    this.fxlist_rayeffect_primaryoffset_property();
                    }
                    break;
                case MapIniParser.T__286:
                    {
                    this.state = 756;
                    this.fxlist_rayeffect_secondaryoffset_proprety();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 761;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 762;
            this.end();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_tracer_block(): Fxlist_tracer_blockContext {
        let localContext = new Fxlist_tracer_blockContext(this.context, this.state);
        this.enterRule(localContext, 58, MapIniParser.RULE_fxlist_tracer_block);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 764;
            this.match(MapIniParser.T__82);
            this.state = 775;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 122 || _la === 125 || ((((_la - 288)) & ~0x1F) === 0 && ((1 << (_la - 288)) & 63) !== 0)) {
                {
                this.state = 773;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.T__287:
                    {
                    this.state = 765;
                    this.fxlist_tracer_name_propety();
                    }
                    break;
                case MapIniParser.T__288:
                    {
                    this.state = 766;
                    this.fxlist_tracer_bonename_property();
                    }
                    break;
                case MapIniParser.T__124:
                    {
                    this.state = 767;
                    this.fxlist_tracer_speed_property();
                    }
                    break;
                case MapIniParser.T__289:
                    {
                    this.state = 768;
                    this.fxlist_tracer_decayat_property();
                    }
                    break;
                case MapIniParser.T__290:
                    {
                    this.state = 769;
                    this.fxlist_tracer_length_property();
                    }
                    break;
                case MapIniParser.T__291:
                    {
                    this.state = 770;
                    this.fxlist_tracer_width_property();
                    }
                    break;
                case MapIniParser.T__121:
                    {
                    this.state = 771;
                    this.fxlist_tracer_color_property();
                    }
                    break;
                case MapIniParser.T__292:
                    {
                    this.state = 772;
                    this.fxlist_tracer_probability_property();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 777;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 778;
            this.end();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_lightpulse_block(): Fxlist_lightpulse_blockContext {
        let localContext = new Fxlist_lightpulse_blockContext(this.context, this.state);
        this.enterRule(localContext, 60, MapIniParser.RULE_fxlist_lightpulse_block);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 780;
            this.match(MapIniParser.T__83);
            this.state = 788;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 122 || ((((_la - 275)) & ~0x1F) === 0 && ((1 << (_la - 275)) & 3670017) !== 0)) {
                {
                this.state = 786;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.T__121:
                    {
                    this.state = 781;
                    this.fxlist_lightpulse_color_property();
                    }
                    break;
                case MapIniParser.T__274:
                    {
                    this.state = 782;
                    this.fxlist_lightpulse_radius_property();
                    }
                    break;
                case MapIniParser.T__293:
                    {
                    this.state = 783;
                    this.fxlist_lightpulse_radiuspercentobjectsize_property();
                    }
                    break;
                case MapIniParser.T__294:
                    {
                    this.state = 784;
                    this.fxlist_lightpulse_increasetime_property();
                    }
                    break;
                case MapIniParser.T__295:
                    {
                    this.state = 785;
                    this.fxlist_lightpulse_decreasetime_property();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 790;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 791;
            this.end();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_viewshake_block(): Fxlist_viewshake_blockContext {
        let localContext = new Fxlist_viewshake_blockContext(this.context, this.state);
        this.enterRule(localContext, 62, MapIniParser.RULE_fxlist_viewshake_block);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 793;
            this.match(MapIniParser.T__84);
            this.state = 797;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 297) {
                {
                {
                this.state = 794;
                this.fxlist_viewshake_type_property();
                }
                }
                this.state = 799;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 800;
            this.end();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_terrainscorch_block(): Fxlist_terrainscorch_blockContext {
        let localContext = new Fxlist_terrainscorch_blockContext(this.context, this.state);
        this.enterRule(localContext, 64, MapIniParser.RULE_fxlist_terrainscorch_block);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 802;
            this.match(MapIniParser.T__85);
            this.state = 807;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 275 || _la === 297) {
                {
                this.state = 805;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.T__296:
                    {
                    this.state = 803;
                    this.fxlist_scorch_type_property();
                    }
                    break;
                case MapIniParser.T__274:
                    {
                    this.state = 804;
                    this.fxlist_scorch_radius_property();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 809;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 810;
            this.end();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_fxlistatbone_block(): Fxlist_fxlistatbone_blockContext {
        let localContext = new Fxlist_fxlistatbone_blockContext(this.context, this.state);
        this.enterRule(localContext, 66, MapIniParser.RULE_fxlist_fxlistatbone_block);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 812;
            this.match(MapIniParser.T__86);
            this.state = 818;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 289)) & ~0x1F) === 0 && ((1 << (_la - 289)) & 1537) !== 0)) {
                {
                this.state = 816;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.T__297:
                    {
                    this.state = 813;
                    this.fxlist_atbonepos_fx_property();
                    }
                    break;
                case MapIniParser.T__288:
                    {
                    this.state = 814;
                    this.fxlist_atbonepos_bonename_property();
                    }
                    break;
                case MapIniParser.T__298:
                    {
                    this.state = 815;
                    this.fxlist_atbonepos_orienttoobject_property();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 820;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 821;
            this.end();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public inGameUIClass(): InGameUIClassContext {
        let localContext = new InGameUIClassContext(this.context, this.state);
        this.enterRule(localContext, 68, MapIniParser.RULE_inGameUIClass);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 823;
            this.match(MapIniParser.T__87);
            this.state = 828;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 536870911) !== 0) || ((((_la - 300)) & ~0x1F) === 0 && ((1 << (_la - 300)) & 4294967295) !== 0) || ((((_la - 332)) & ~0x1F) === 0 && ((1 << (_la - 332)) & 2047) !== 0)) {
                {
                this.state = 826;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.T__299:
                case MapIniParser.T__300:
                case MapIniParser.T__301:
                case MapIniParser.T__302:
                case MapIniParser.T__303:
                case MapIniParser.T__304:
                case MapIniParser.T__305:
                case MapIniParser.T__306:
                case MapIniParser.T__307:
                case MapIniParser.T__308:
                case MapIniParser.T__309:
                case MapIniParser.T__310:
                case MapIniParser.T__311:
                case MapIniParser.T__312:
                case MapIniParser.T__313:
                case MapIniParser.T__314:
                case MapIniParser.T__315:
                case MapIniParser.T__316:
                case MapIniParser.T__317:
                case MapIniParser.T__318:
                case MapIniParser.T__319:
                case MapIniParser.T__320:
                case MapIniParser.T__321:
                case MapIniParser.T__322:
                case MapIniParser.T__323:
                case MapIniParser.T__324:
                case MapIniParser.T__325:
                case MapIniParser.T__326:
                case MapIniParser.T__327:
                case MapIniParser.T__328:
                case MapIniParser.T__329:
                case MapIniParser.T__330:
                case MapIniParser.T__331:
                case MapIniParser.T__332:
                case MapIniParser.T__333:
                case MapIniParser.T__334:
                case MapIniParser.T__335:
                case MapIniParser.T__336:
                case MapIniParser.T__337:
                case MapIniParser.T__338:
                case MapIniParser.T__339:
                case MapIniParser.T__340:
                case MapIniParser.T__341:
                    {
                    this.state = 824;
                    this.igui_properties();
                    }
                    break;
                case MapIniParser.T__88:
                case MapIniParser.T__89:
                case MapIniParser.T__90:
                case MapIniParser.T__91:
                case MapIniParser.T__92:
                case MapIniParser.T__93:
                case MapIniParser.T__94:
                case MapIniParser.T__95:
                case MapIniParser.T__96:
                case MapIniParser.T__97:
                case MapIniParser.T__98:
                case MapIniParser.T__99:
                case MapIniParser.T__100:
                case MapIniParser.T__101:
                case MapIniParser.T__102:
                case MapIniParser.T__103:
                case MapIniParser.T__104:
                case MapIniParser.T__105:
                case MapIniParser.T__106:
                case MapIniParser.T__107:
                case MapIniParser.T__108:
                case MapIniParser.T__109:
                case MapIniParser.T__110:
                case MapIniParser.T__111:
                case MapIniParser.T__112:
                case MapIniParser.T__113:
                case MapIniParser.T__114:
                case MapIniParser.T__115:
                case MapIniParser.T__116:
                    {
                    this.state = 825;
                    this.igui_blocks();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 830;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 831;
            this.end();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public igui_blocks(): Igui_blocksContext {
        let localContext = new Igui_blocksContext(this.context, this.state);
        this.enterRule(localContext, 70, MapIniParser.RULE_igui_blocks);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 833;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 536870911) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 837;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 62 || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 63) !== 0)) {
                {
                {
                this.state = 834;
                this.ingui_block_properties();
                }
                }
                this.state = 839;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 840;
            this.end();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ingui_block_properties(): Ingui_block_propertiesContext {
        let localContext = new Ingui_block_propertiesContext(this.context, this.state);
        this.enterRule(localContext, 72, MapIniParser.RULE_ingui_block_properties);
        try {
            this.state = 866;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__61:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 842;
                this.match(MapIniParser.T__61);
                this.state = 843;
                this.match(MapIniParser.EQ);
                this.state = 844;
                this.match(MapIniParser.ID);
                }
                break;
            case MapIniParser.T__117:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 845;
                this.match(MapIniParser.T__117);
                this.state = 846;
                this.match(MapIniParser.EQ);
                this.state = 847;
                this.match(MapIniParser.ID);
                }
                break;
            case MapIniParser.T__118:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 848;
                this.match(MapIniParser.T__118);
                this.state = 849;
                this.match(MapIniParser.EQ);
                this.state = 850;
                this.match(MapIniParser.PROCENT);
                }
                break;
            case MapIniParser.T__119:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 851;
                this.match(MapIniParser.T__119);
                this.state = 852;
                this.match(MapIniParser.EQ);
                this.state = 853;
                this.match(MapIniParser.PROCENT);
                }
                break;
            case MapIniParser.T__120:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 854;
                this.match(MapIniParser.T__120);
                this.state = 855;
                this.match(MapIniParser.EQ);
                this.state = 856;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__121:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 857;
                this.match(MapIniParser.T__121);
                this.state = 858;
                this.match(MapIniParser.EQ);
                this.state = 859;
                this.match(MapIniParser.R);
                this.state = 860;
                this.match(MapIniParser.G);
                this.state = 861;
                this.match(MapIniParser.B);
                this.state = 862;
                this.match(MapIniParser.A);
                }
                break;
            case MapIniParser.T__122:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 863;
                this.match(MapIniParser.T__122);
                this.state = 864;
                this.match(MapIniParser.EQ);
                this.state = 865;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public locomotorClass(): LocomotorClassContext {
        let localContext = new LocomotorClassContext(this.context, this.state);
        this.enterRule(localContext, 74, MapIniParser.RULE_locomotorClass);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 868;
            this.match(MapIniParser.T__123);
            this.state = 869;
            this.match(MapIniParser.ID);
            this.state = 873;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 125)) & ~0x1F) === 0 && ((1 << (_la - 125)) & 4294967295) !== 0) || ((((_la - 157)) & ~0x1F) === 0 && ((1 << (_la - 157)) & 268435455) !== 0)) {
                {
                {
                this.state = 870;
                this.locomotor_properties();
                }
                }
                this.state = 875;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 876;
            this.end();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public locomotor_properties(): Locomotor_propertiesContext {
        let localContext = new Locomotor_propertiesContext(this.context, this.state);
        this.enterRule(localContext, 76, MapIniParser.RULE_locomotor_properties);
        let _la: number;
        try {
            this.state = 1050;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__180:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 878;
                this.locomotor_surface_property();
                }
                break;
            case MapIniParser.T__181:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 879;
                this.locomotor_zbehavior_property();
                }
                break;
            case MapIniParser.T__182:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 880;
                this.locomotor_appereance_property();
                }
                break;
            case MapIniParser.T__183:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 881;
                this.locomotor_movepriority_property();
                }
                break;
            case MapIniParser.T__124:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 882;
                this.match(MapIniParser.T__124);
                this.state = 883;
                this.match(MapIniParser.EQ);
                this.state = 884;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__125:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 885;
                this.match(MapIniParser.T__125);
                this.state = 886;
                this.match(MapIniParser.EQ);
                this.state = 887;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__126:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 888;
                this.match(MapIniParser.T__126);
                this.state = 889;
                this.match(MapIniParser.EQ);
                this.state = 890;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__127:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 891;
                this.match(MapIniParser.T__127);
                this.state = 892;
                this.match(MapIniParser.EQ);
                this.state = 893;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__128:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 894;
                this.match(MapIniParser.T__128);
                this.state = 895;
                this.match(MapIniParser.EQ);
                this.state = 896;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__129:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 897;
                this.match(MapIniParser.T__129);
                this.state = 898;
                this.match(MapIniParser.EQ);
                this.state = 899;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__130:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 900;
                this.match(MapIniParser.T__130);
                this.state = 901;
                this.match(MapIniParser.EQ);
                this.state = 902;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__131:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 903;
                this.match(MapIniParser.T__131);
                this.state = 904;
                this.match(MapIniParser.EQ);
                this.state = 905;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__132:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 906;
                this.match(MapIniParser.T__132);
                this.state = 907;
                this.match(MapIniParser.EQ);
                this.state = 908;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__133:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 909;
                this.match(MapIniParser.T__133);
                this.state = 910;
                this.match(MapIniParser.EQ);
                this.state = 911;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__134:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 912;
                this.match(MapIniParser.T__134);
                this.state = 913;
                this.match(MapIniParser.EQ);
                this.state = 914;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__135:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 915;
                this.match(MapIniParser.T__135);
                this.state = 916;
                this.match(MapIniParser.EQ);
                this.state = 917;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__136:
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 918;
                this.match(MapIniParser.T__136);
                this.state = 919;
                this.match(MapIniParser.EQ);
                this.state = 920;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__137:
                this.enterOuterAlt(localContext, 18);
                {
                this.state = 921;
                this.match(MapIniParser.T__137);
                this.state = 922;
                this.match(MapIniParser.EQ);
                this.state = 923;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__138:
                this.enterOuterAlt(localContext, 19);
                {
                this.state = 924;
                this.match(MapIniParser.T__138);
                this.state = 925;
                this.match(MapIniParser.EQ);
                this.state = 926;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__139:
                this.enterOuterAlt(localContext, 20);
                {
                this.state = 927;
                this.match(MapIniParser.T__139);
                this.state = 928;
                this.match(MapIniParser.EQ);
                this.state = 929;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__140:
                this.enterOuterAlt(localContext, 21);
                {
                this.state = 930;
                this.match(MapIniParser.T__140);
                this.state = 931;
                this.match(MapIniParser.EQ);
                this.state = 932;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__141:
                this.enterOuterAlt(localContext, 22);
                {
                this.state = 933;
                this.match(MapIniParser.T__141);
                this.state = 934;
                this.match(MapIniParser.EQ);
                this.state = 935;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__142:
                this.enterOuterAlt(localContext, 23);
                {
                this.state = 936;
                this.match(MapIniParser.T__142);
                this.state = 937;
                this.match(MapIniParser.EQ);
                this.state = 938;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__143:
                this.enterOuterAlt(localContext, 24);
                {
                this.state = 939;
                this.match(MapIniParser.T__143);
                this.state = 940;
                this.match(MapIniParser.EQ);
                this.state = 941;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__144:
                this.enterOuterAlt(localContext, 25);
                {
                this.state = 942;
                this.match(MapIniParser.T__144);
                this.state = 943;
                this.match(MapIniParser.EQ);
                this.state = 944;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__145:
                this.enterOuterAlt(localContext, 26);
                {
                this.state = 945;
                this.match(MapIniParser.T__145);
                this.state = 946;
                this.match(MapIniParser.EQ);
                this.state = 947;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__146:
                this.enterOuterAlt(localContext, 27);
                {
                this.state = 948;
                this.match(MapIniParser.T__146);
                this.state = 949;
                this.match(MapIniParser.EQ);
                this.state = 950;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__147:
                this.enterOuterAlt(localContext, 28);
                {
                this.state = 951;
                this.match(MapIniParser.T__147);
                this.state = 952;
                this.match(MapIniParser.EQ);
                this.state = 953;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__148:
                this.enterOuterAlt(localContext, 29);
                {
                this.state = 954;
                this.match(MapIniParser.T__148);
                this.state = 955;
                this.match(MapIniParser.EQ);
                this.state = 956;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__149:
                this.enterOuterAlt(localContext, 30);
                {
                this.state = 957;
                this.match(MapIniParser.T__149);
                this.state = 958;
                this.match(MapIniParser.EQ);
                this.state = 959;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__150:
                this.enterOuterAlt(localContext, 31);
                {
                this.state = 960;
                this.match(MapIniParser.T__150);
                this.state = 961;
                this.match(MapIniParser.EQ);
                this.state = 962;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__151:
                this.enterOuterAlt(localContext, 32);
                {
                this.state = 963;
                this.match(MapIniParser.T__151);
                this.state = 964;
                this.match(MapIniParser.EQ);
                this.state = 965;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__152:
                this.enterOuterAlt(localContext, 33);
                {
                this.state = 966;
                this.match(MapIniParser.T__152);
                this.state = 967;
                this.match(MapIniParser.EQ);
                this.state = 968;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__153:
                this.enterOuterAlt(localContext, 34);
                {
                this.state = 969;
                this.match(MapIniParser.T__153);
                this.state = 970;
                this.match(MapIniParser.EQ);
                this.state = 971;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__154:
                this.enterOuterAlt(localContext, 35);
                {
                this.state = 972;
                this.match(MapIniParser.T__154);
                this.state = 973;
                this.match(MapIniParser.EQ);
                this.state = 974;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__155:
                this.enterOuterAlt(localContext, 36);
                {
                this.state = 975;
                this.match(MapIniParser.T__155);
                this.state = 976;
                this.match(MapIniParser.EQ);
                this.state = 977;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__156:
                this.enterOuterAlt(localContext, 37);
                {
                this.state = 978;
                this.match(MapIniParser.T__156);
                this.state = 979;
                this.match(MapIniParser.EQ);
                this.state = 980;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__157:
                this.enterOuterAlt(localContext, 38);
                {
                this.state = 981;
                this.match(MapIniParser.T__157);
                this.state = 982;
                this.match(MapIniParser.EQ);
                this.state = 983;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__158:
                this.enterOuterAlt(localContext, 39);
                {
                this.state = 984;
                this.match(MapIniParser.T__158);
                this.state = 985;
                this.match(MapIniParser.EQ);
                this.state = 986;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__159:
                this.enterOuterAlt(localContext, 40);
                {
                this.state = 987;
                this.match(MapIniParser.T__159);
                this.state = 988;
                this.match(MapIniParser.EQ);
                this.state = 989;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__160:
                this.enterOuterAlt(localContext, 41);
                {
                this.state = 990;
                this.match(MapIniParser.T__160);
                this.state = 991;
                this.match(MapIniParser.EQ);
                this.state = 992;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__161:
                this.enterOuterAlt(localContext, 42);
                {
                this.state = 993;
                this.match(MapIniParser.T__161);
                this.state = 994;
                this.match(MapIniParser.EQ);
                this.state = 995;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__162:
                this.enterOuterAlt(localContext, 43);
                {
                this.state = 996;
                this.match(MapIniParser.T__162);
                this.state = 997;
                this.match(MapIniParser.EQ);
                this.state = 998;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__163:
                this.enterOuterAlt(localContext, 44);
                {
                this.state = 999;
                this.match(MapIniParser.T__163);
                this.state = 1000;
                this.match(MapIniParser.EQ);
                this.state = 1001;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__164:
                this.enterOuterAlt(localContext, 45);
                {
                this.state = 1002;
                this.match(MapIniParser.T__164);
                this.state = 1003;
                this.match(MapIniParser.EQ);
                this.state = 1004;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__165:
                this.enterOuterAlt(localContext, 46);
                {
                this.state = 1005;
                this.match(MapIniParser.T__165);
                this.state = 1006;
                this.match(MapIniParser.EQ);
                this.state = 1007;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__166:
                this.enterOuterAlt(localContext, 47);
                {
                this.state = 1008;
                this.match(MapIniParser.T__166);
                this.state = 1009;
                this.match(MapIniParser.EQ);
                this.state = 1010;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__167:
                this.enterOuterAlt(localContext, 48);
                {
                this.state = 1011;
                this.match(MapIniParser.T__167);
                this.state = 1012;
                this.match(MapIniParser.EQ);
                this.state = 1013;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__168:
                this.enterOuterAlt(localContext, 49);
                {
                this.state = 1014;
                this.match(MapIniParser.T__168);
                this.state = 1015;
                this.match(MapIniParser.EQ);
                this.state = 1016;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__169:
                this.enterOuterAlt(localContext, 50);
                {
                this.state = 1017;
                this.match(MapIniParser.T__169);
                this.state = 1018;
                this.match(MapIniParser.EQ);
                this.state = 1019;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__170:
                this.enterOuterAlt(localContext, 51);
                {
                this.state = 1020;
                this.match(MapIniParser.T__170);
                this.state = 1021;
                this.match(MapIniParser.EQ);
                this.state = 1022;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__171:
                this.enterOuterAlt(localContext, 52);
                {
                this.state = 1023;
                this.match(MapIniParser.T__171);
                this.state = 1024;
                this.match(MapIniParser.EQ);
                this.state = 1025;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__172:
                this.enterOuterAlt(localContext, 53);
                {
                this.state = 1026;
                this.match(MapIniParser.T__172);
                this.state = 1027;
                this.match(MapIniParser.EQ);
                this.state = 1028;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__173:
                this.enterOuterAlt(localContext, 54);
                {
                this.state = 1029;
                this.match(MapIniParser.T__173);
                this.state = 1030;
                this.match(MapIniParser.EQ);
                this.state = 1031;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__174:
                this.enterOuterAlt(localContext, 55);
                {
                this.state = 1032;
                this.match(MapIniParser.T__174);
                this.state = 1033;
                this.match(MapIniParser.EQ);
                this.state = 1034;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__175:
                this.enterOuterAlt(localContext, 56);
                {
                this.state = 1035;
                this.match(MapIniParser.T__175);
                this.state = 1036;
                this.match(MapIniParser.EQ);
                this.state = 1037;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__176:
                this.enterOuterAlt(localContext, 57);
                {
                this.state = 1038;
                this.match(MapIniParser.T__176);
                this.state = 1039;
                this.match(MapIniParser.EQ);
                this.state = 1040;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__177:
                this.enterOuterAlt(localContext, 58);
                {
                this.state = 1041;
                this.match(MapIniParser.T__177);
                this.state = 1042;
                this.match(MapIniParser.EQ);
                this.state = 1043;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__178:
                this.enterOuterAlt(localContext, 59);
                {
                this.state = 1044;
                this.match(MapIniParser.T__178);
                this.state = 1045;
                this.match(MapIniParser.EQ);
                this.state = 1046;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__179:
                this.enterOuterAlt(localContext, 60);
                {
                this.state = 1047;
                this.match(MapIniParser.T__179);
                this.state = 1048;
                this.match(MapIniParser.EQ);
                this.state = 1049;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public locomotor_surface_property(): Locomotor_surface_propertyContext {
        let localContext = new Locomotor_surface_propertyContext(this.context, this.state);
        this.enterRule(localContext, 78, MapIniParser.RULE_locomotor_surface_property);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1052;
            this.match(MapIniParser.T__180);
            this.state = 1053;
            this.match(MapIniParser.EQ);
            this.state = 1055;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 1054;
                this.surface_value();
                }
                }
                this.state = 1057;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 369);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public locomotor_zbehavior_property(): Locomotor_zbehavior_propertyContext {
        let localContext = new Locomotor_zbehavior_propertyContext(this.context, this.state);
        this.enterRule(localContext, 80, MapIniParser.RULE_locomotor_zbehavior_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1059;
            this.match(MapIniParser.T__181);
            this.state = 1060;
            this.match(MapIniParser.EQ);
            this.state = 1061;
            this.zbehavior_value();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public locomotor_appereance_property(): Locomotor_appereance_propertyContext {
        let localContext = new Locomotor_appereance_propertyContext(this.context, this.state);
        this.enterRule(localContext, 82, MapIniParser.RULE_locomotor_appereance_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1063;
            this.match(MapIniParser.T__182);
            this.state = 1064;
            this.match(MapIniParser.EQ);
            this.state = 1065;
            this.appereance_value();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public locomotor_movepriority_property(): Locomotor_movepriority_propertyContext {
        let localContext = new Locomotor_movepriority_propertyContext(this.context, this.state);
        this.enterRule(localContext, 84, MapIniParser.RULE_locomotor_movepriority_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1067;
            this.match(MapIniParser.T__183);
            this.state = 1068;
            this.match(MapIniParser.EQ);
            this.state = 1069;
            this.movepriority_value();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public surface_value(): Surface_valueContext {
        let localContext = new Surface_valueContext(this.context, this.state);
        this.enterRule(localContext, 86, MapIniParser.RULE_surface_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1071;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public zbehavior_value(): Zbehavior_valueContext {
        let localContext = new Zbehavior_valueContext(this.context, this.state);
        this.enterRule(localContext, 88, MapIniParser.RULE_zbehavior_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1073;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public appereance_value(): Appereance_valueContext {
        let localContext = new Appereance_valueContext(this.context, this.state);
        this.enterRule(localContext, 90, MapIniParser.RULE_appereance_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1075;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public movepriority_value(): Movepriority_valueContext {
        let localContext = new Movepriority_valueContext(this.context, this.state);
        this.enterRule(localContext, 92, MapIniParser.RULE_movepriority_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1077;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public weaponClass(): WeaponClassContext {
        let localContext = new WeaponClassContext(this.context, this.state);
        this.enterRule(localContext, 94, MapIniParser.RULE_weaponClass);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1079;
            this.match(MapIniParser.T__184);
            this.state = 1080;
            this.match(MapIniParser.ID);
            this.state = 1084;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 186)) & ~0x1F) === 0 && ((1 << (_la - 186)) & 4294967295) !== 0) || ((((_la - 218)) & ~0x1F) === 0 && ((1 << (_la - 218)) & 63) !== 0)) {
                {
                {
                this.state = 1081;
                this.weapon_properties();
                }
                }
                this.state = 1086;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1087;
            this.end();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public weapon_properties(): Weapon_propertiesContext {
        let localContext = new Weapon_propertiesContext(this.context, this.state);
        this.enterRule(localContext, 96, MapIniParser.RULE_weapon_properties);
        let _la: number;
        try {
            this.state = 1199;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__218:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1089;
                this.weapon_damagetype_property();
                }
                break;
            case MapIniParser.T__219:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1090;
                this.weapon_deathtype_property();
                }
                break;
            case MapIniParser.T__220:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1091;
                this.weapon_damageaffects_property();
                }
                break;
            case MapIniParser.T__221:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1092;
                this.weapon_weaponbonus_property();
                }
                break;
            case MapIniParser.T__222:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1093;
                this.weapon_lasterbone_property();
                }
                break;
            case MapIniParser.T__185:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1094;
                this.match(MapIniParser.T__185);
                this.state = 1095;
                this.match(MapIniParser.EQ);
                this.state = 1096;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__186:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1097;
                this.match(MapIniParser.T__186);
                this.state = 1098;
                this.match(MapIniParser.EQ);
                this.state = 1099;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__187:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1100;
                this.match(MapIniParser.T__187);
                this.state = 1101;
                this.match(MapIniParser.EQ);
                this.state = 1102;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__188:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1103;
                this.match(MapIniParser.T__188);
                this.state = 1104;
                this.match(MapIniParser.EQ);
                this.state = 1105;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__189:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 1106;
                this.match(MapIniParser.T__189);
                this.state = 1107;
                this.match(MapIniParser.EQ);
                this.state = 1108;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__190:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 1109;
                this.match(MapIniParser.T__190);
                this.state = 1110;
                this.match(MapIniParser.EQ);
                this.state = 1111;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__191:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 1112;
                this.match(MapIniParser.T__191);
                this.state = 1113;
                this.match(MapIniParser.EQ);
                this.state = 1114;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__192:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 1115;
                this.match(MapIniParser.T__192);
                this.state = 1116;
                this.match(MapIniParser.EQ);
                this.state = 1117;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__193:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 1118;
                this.match(MapIniParser.T__193);
                this.state = 1119;
                this.match(MapIniParser.EQ);
                this.state = 1120;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__194:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 1121;
                this.match(MapIniParser.T__194);
                this.state = 1122;
                this.match(MapIniParser.EQ);
                this.state = 1123;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__195:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 1124;
                this.match(MapIniParser.T__195);
                this.state = 1125;
                this.match(MapIniParser.EQ);
                this.state = 1126;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__196:
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 1127;
                this.match(MapIniParser.T__196);
                this.state = 1128;
                this.match(MapIniParser.EQ);
                this.state = 1129;
                this.particlesystem_value();
                }
                break;
            case MapIniParser.T__197:
                this.enterOuterAlt(localContext, 18);
                {
                this.state = 1130;
                this.match(MapIniParser.T__197);
                this.state = 1131;
                this.match(MapIniParser.EQ);
                this.state = 1132;
                this.match(MapIniParser.VETERENCY);
                this.state = 1133;
                this.particlesystem_value();
                }
                break;
            case MapIniParser.T__198:
                this.enterOuterAlt(localContext, 19);
                {
                this.state = 1134;
                this.match(MapIniParser.T__198);
                this.state = 1135;
                this.match(MapIniParser.EQ);
                this.state = 1136;
                this.object_value();
                }
                break;
            case MapIniParser.T__199:
                this.enterOuterAlt(localContext, 20);
                {
                this.state = 1137;
                this.match(MapIniParser.T__199);
                this.state = 1138;
                this.match(MapIniParser.EQ);
                this.state = 1139;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__200:
                this.enterOuterAlt(localContext, 21);
                {
                this.state = 1140;
                this.match(MapIniParser.T__200);
                this.state = 1141;
                this.match(MapIniParser.EQ);
                this.state = 1142;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__201:
                this.enterOuterAlt(localContext, 22);
                {
                this.state = 1143;
                this.match(MapIniParser.T__201);
                this.state = 1144;
                this.match(MapIniParser.EQ);
                this.state = 1145;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__202:
                this.enterOuterAlt(localContext, 23);
                {
                this.state = 1146;
                this.match(MapIniParser.T__202);
                this.state = 1147;
                this.match(MapIniParser.EQ);
                this.state = 1148;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__203:
                this.enterOuterAlt(localContext, 24);
                {
                this.state = 1149;
                this.match(MapIniParser.T__203);
                this.state = 1150;
                this.match(MapIniParser.EQ);
                this.state = 1151;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__204:
                this.enterOuterAlt(localContext, 25);
                {
                this.state = 1152;
                this.match(MapIniParser.T__204);
                this.state = 1153;
                this.match(MapIniParser.EQ);
                this.state = 1154;
                this.fxlist_value();
                }
                break;
            case MapIniParser.T__205:
                this.enterOuterAlt(localContext, 26);
                {
                this.state = 1155;
                this.match(MapIniParser.T__205);
                this.state = 1156;
                this.match(MapIniParser.EQ);
                this.state = 1157;
                this.match(MapIniParser.VETERENCY);
                this.state = 1158;
                this.fxlist_value();
                }
                break;
            case MapIniParser.T__206:
                this.enterOuterAlt(localContext, 27);
                {
                this.state = 1159;
                this.match(MapIniParser.T__206);
                this.state = 1160;
                this.match(MapIniParser.EQ);
                this.state = 1161;
                this.fxlist_value();
                }
                break;
            case MapIniParser.T__207:
                this.enterOuterAlt(localContext, 28);
                {
                this.state = 1162;
                this.match(MapIniParser.T__207);
                this.state = 1163;
                this.match(MapIniParser.EQ);
                this.state = 1164;
                this.audioevent_value();
                }
                break;
            case MapIniParser.T__208:
                this.enterOuterAlt(localContext, 29);
                {
                this.state = 1165;
                this.match(MapIniParser.T__208);
                this.state = 1166;
                this.match(MapIniParser.EQ);
                this.state = 1167;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__209:
                this.enterOuterAlt(localContext, 30);
                {
                this.state = 1168;
                this.match(MapIniParser.T__209);
                this.state = 1169;
                this.match(MapIniParser.EQ);
                this.state = 1170;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__210:
                this.enterOuterAlt(localContext, 31);
                {
                this.state = 1171;
                this.match(MapIniParser.T__210);
                this.state = 1172;
                this.match(MapIniParser.EQ);
                this.state = 1173;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__211:
                this.enterOuterAlt(localContext, 32);
                {
                this.state = 1174;
                this.match(MapIniParser.T__211);
                this.state = 1175;
                this.match(MapIniParser.EQ);
                this.state = 1176;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__212:
                this.enterOuterAlt(localContext, 33);
                {
                this.state = 1177;
                this.match(MapIniParser.T__212);
                this.state = 1178;
                this.match(MapIniParser.EQ);
                this.state = 1180;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 1179;
                    this.match(MapIniParser.ID);
                    }
                    }
                    this.state = 1182;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 369);
                }
                break;
            case MapIniParser.T__213:
                this.enterOuterAlt(localContext, 34);
                {
                this.state = 1184;
                this.match(MapIniParser.T__213);
                this.state = 1185;
                this.match(MapIniParser.EQ);
                this.state = 1186;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__214:
                this.enterOuterAlt(localContext, 35);
                {
                this.state = 1187;
                this.match(MapIniParser.T__214);
                this.state = 1188;
                this.match(MapIniParser.EQ);
                this.state = 1189;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__215:
                this.enterOuterAlt(localContext, 36);
                {
                this.state = 1190;
                this.match(MapIniParser.T__215);
                this.state = 1191;
                this.match(MapIniParser.EQ);
                this.state = 1192;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__216:
                this.enterOuterAlt(localContext, 37);
                {
                this.state = 1193;
                this.match(MapIniParser.T__216);
                this.state = 1194;
                this.match(MapIniParser.EQ);
                this.state = 1195;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__217:
                this.enterOuterAlt(localContext, 38);
                {
                this.state = 1196;
                this.match(MapIniParser.T__217);
                this.state = 1197;
                this.match(MapIniParser.EQ);
                this.state = 1198;
                this.match(MapIniParser.ID);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public weapon_damagetype_property(): Weapon_damagetype_propertyContext {
        let localContext = new Weapon_damagetype_propertyContext(this.context, this.state);
        this.enterRule(localContext, 98, MapIniParser.RULE_weapon_damagetype_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1201;
            this.match(MapIniParser.T__218);
            this.state = 1202;
            this.match(MapIniParser.EQ);
            this.state = 1203;
            this.damageType_value();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public weapon_deathtype_property(): Weapon_deathtype_propertyContext {
        let localContext = new Weapon_deathtype_propertyContext(this.context, this.state);
        this.enterRule(localContext, 100, MapIniParser.RULE_weapon_deathtype_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1205;
            this.match(MapIniParser.T__219);
            this.state = 1206;
            this.match(MapIniParser.EQ);
            this.state = 1207;
            this.deathType_value();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public weapon_damageaffects_property(): Weapon_damageaffects_propertyContext {
        let localContext = new Weapon_damageaffects_propertyContext(this.context, this.state);
        this.enterRule(localContext, 102, MapIniParser.RULE_weapon_damageaffects_property);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1209;
            this.match(MapIniParser.T__220);
            this.state = 1210;
            this.match(MapIniParser.EQ);
            this.state = 1212;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 1211;
                this.damageAffects_value();
                }
                }
                this.state = 1214;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 369);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public weapon_weaponbonus_property(): Weapon_weaponbonus_propertyContext {
        let localContext = new Weapon_weaponbonus_propertyContext(this.context, this.state);
        this.enterRule(localContext, 104, MapIniParser.RULE_weapon_weaponbonus_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1216;
            this.match(MapIniParser.T__221);
            this.state = 1217;
            this.match(MapIniParser.EQ);
            this.state = 1218;
            this.weapon_weaponbonus_condition_value();
            this.state = 1219;
            this.weapon_weaponbonus_bonus_value();
            this.state = 1220;
            this.match(MapIniParser.PROCENT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public weapon_lasterbone_property(): Weapon_lasterbone_propertyContext {
        let localContext = new Weapon_lasterbone_propertyContext(this.context, this.state);
        this.enterRule(localContext, 106, MapIniParser.RULE_weapon_lasterbone_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1222;
            this.match(MapIniParser.T__222);
            this.state = 1223;
            this.match(MapIniParser.EQ);
            this.state = 1224;
            this.damageType_value();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public weapon_weaponbonus_condition_value(): Weapon_weaponbonus_condition_valueContext {
        let localContext = new Weapon_weaponbonus_condition_valueContext(this.context, this.state);
        this.enterRule(localContext, 108, MapIniParser.RULE_weapon_weaponbonus_condition_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1226;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public weapon_weaponbonus_bonus_value(): Weapon_weaponbonus_bonus_valueContext {
        let localContext = new Weapon_weaponbonus_bonus_valueContext(this.context, this.state);
        this.enterRule(localContext, 110, MapIniParser.RULE_weapon_weaponbonus_bonus_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1228;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public damageType_value(): DamageType_valueContext {
        let localContext = new DamageType_valueContext(this.context, this.state);
        this.enterRule(localContext, 112, MapIniParser.RULE_damageType_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1230;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public deathType_value(): DeathType_valueContext {
        let localContext = new DeathType_valueContext(this.context, this.state);
        this.enterRule(localContext, 114, MapIniParser.RULE_deathType_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1232;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public damageAffects_value(): DamageAffects_valueContext {
        let localContext = new DamageAffects_valueContext(this.context, this.state);
        this.enterRule(localContext, 116, MapIniParser.RULE_damageAffects_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1234;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public weatherClass(): WeatherClassContext {
        let localContext = new WeatherClassContext(this.context, this.state);
        this.enterRule(localContext, 118, MapIniParser.RULE_weatherClass);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1236;
            this.match(MapIniParser.T__223);
            this.state = 1240;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & 8191) !== 0)) {
                {
                {
                this.state = 1237;
                this.weather_properties();
                }
                }
                this.state = 1242;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1243;
            this.end();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public weather_properties(): Weather_propertiesContext {
        let localContext = new Weather_propertiesContext(this.context, this.state);
        this.enterRule(localContext, 120, MapIniParser.RULE_weather_properties);
        let _la: number;
        try {
            this.state = 1284;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__224:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1245;
                this.match(MapIniParser.T__224);
                this.state = 1246;
                this.match(MapIniParser.EQ);
                this.state = 1247;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__225:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1248;
                this.match(MapIniParser.T__225);
                this.state = 1249;
                this.match(MapIniParser.EQ);
                this.state = 1250;
                this.file();
                }
                break;
            case MapIniParser.T__226:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1251;
                this.match(MapIniParser.T__226);
                this.state = 1252;
                this.match(MapIniParser.EQ);
                this.state = 1253;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__227:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1254;
                this.match(MapIniParser.T__227);
                this.state = 1255;
                this.match(MapIniParser.EQ);
                this.state = 1256;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__228:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1257;
                this.match(MapIniParser.T__228);
                this.state = 1258;
                this.match(MapIniParser.EQ);
                this.state = 1259;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__229:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1260;
                this.match(MapIniParser.T__229);
                this.state = 1261;
                this.match(MapIniParser.EQ);
                this.state = 1262;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__230:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1263;
                this.match(MapIniParser.T__230);
                this.state = 1264;
                this.match(MapIniParser.EQ);
                this.state = 1265;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__231:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1266;
                this.match(MapIniParser.T__231);
                this.state = 1267;
                this.match(MapIniParser.EQ);
                this.state = 1268;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__232:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1269;
                this.match(MapIniParser.T__232);
                this.state = 1270;
                this.match(MapIniParser.EQ);
                this.state = 1271;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__233:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 1272;
                this.match(MapIniParser.T__233);
                this.state = 1273;
                this.match(MapIniParser.EQ);
                this.state = 1274;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__234:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 1275;
                this.match(MapIniParser.T__234);
                this.state = 1276;
                this.match(MapIniParser.EQ);
                this.state = 1277;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__235:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 1278;
                this.match(MapIniParser.T__235);
                this.state = 1279;
                this.match(MapIniParser.EQ);
                this.state = 1280;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__236:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 1281;
                this.match(MapIniParser.T__236);
                this.state = 1282;
                this.match(MapIniParser.EQ);
                this.state = 1283;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public end(): EndContext {
        let localContext = new EndContext(this.context, this.state);
        this.enterRule(localContext, 122, MapIniParser.RULE_end);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1286;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 238)) & ~0x1F) === 0 && ((1 << (_la - 238)) & 7) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public file(): FileContext {
        let localContext = new FileContext(this.context, this.state);
        this.enterRule(localContext, 124, MapIniParser.RULE_file);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1288;
            this.match(MapIniParser.ID);
            this.state = 1289;
            this.match(MapIniParser.T__240);
            this.state = 1290;
            _la = this.tokenStream.LA(1);
            if(!(_la === 242 || _la === 243)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public cb_command_property(): Cb_command_propertyContext {
        let localContext = new Cb_command_propertyContext(this.context, this.state);
        this.enterRule(localContext, 126, MapIniParser.RULE_cb_command_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1292;
            this.match(MapIniParser.T__243);
            this.state = 1293;
            this.match(MapIniParser.EQ);
            this.state = 1294;
            this.cb_command_value();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public cb_command_value(): Cb_command_valueContext {
        let localContext = new Cb_command_valueContext(this.context, this.state);
        this.enterRule(localContext, 128, MapIniParser.RULE_cb_command_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1296;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public cb_options_property(): Cb_options_propertyContext {
        let localContext = new Cb_options_propertyContext(this.context, this.state);
        this.enterRule(localContext, 130, MapIniParser.RULE_cb_options_property);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1298;
            this.match(MapIniParser.T__244);
            this.state = 1299;
            this.match(MapIniParser.EQ);
            this.state = 1301;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 1300;
                this.cb_options_value();
                }
                }
                this.state = 1303;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 369);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public cb_options_value(): Cb_options_valueContext {
        let localContext = new Cb_options_valueContext(this.context, this.state);
        this.enterRule(localContext, 132, MapIniParser.RULE_cb_options_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1305;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public cb_buttonimage_property(): Cb_buttonimage_propertyContext {
        let localContext = new Cb_buttonimage_propertyContext(this.context, this.state);
        this.enterRule(localContext, 134, MapIniParser.RULE_cb_buttonimage_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1307;
            this.match(MapIniParser.T__245);
            this.state = 1308;
            this.match(MapIniParser.EQ);
            this.state = 1309;
            this.mappedimage_value();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public cb_buttonbordertype_property(): Cb_buttonbordertype_propertyContext {
        let localContext = new Cb_buttonbordertype_propertyContext(this.context, this.state);
        this.enterRule(localContext, 136, MapIniParser.RULE_cb_buttonbordertype_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1311;
            this.match(MapIniParser.T__246);
            this.state = 1312;
            this.match(MapIniParser.EQ);
            this.state = 1313;
            this.cb_buttonbordertype_value();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public cb_buttonbordertype_value(): Cb_buttonbordertype_valueContext {
        let localContext = new Cb_buttonbordertype_valueContext(this.context, this.state);
        this.enterRule(localContext, 138, MapIniParser.RULE_cb_buttonbordertype_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1315;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public cb_textlabel_property(): Cb_textlabel_propertyContext {
        let localContext = new Cb_textlabel_propertyContext(this.context, this.state);
        this.enterRule(localContext, 140, MapIniParser.RULE_cb_textlabel_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1317;
            this.match(MapIniParser.T__247);
            this.state = 1318;
            this.match(MapIniParser.EQ);
            this.state = 1319;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public cb_descriptionlabel_property(): Cb_descriptionlabel_propertyContext {
        let localContext = new Cb_descriptionlabel_propertyContext(this.context, this.state);
        this.enterRule(localContext, 142, MapIniParser.RULE_cb_descriptionlabel_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1321;
            this.match(MapIniParser.T__248);
            this.state = 1322;
            this.match(MapIniParser.EQ);
            this.state = 1323;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public cb_conflictinglabel_property(): Cb_conflictinglabel_propertyContext {
        let localContext = new Cb_conflictinglabel_propertyContext(this.context, this.state);
        this.enterRule(localContext, 144, MapIniParser.RULE_cb_conflictinglabel_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1325;
            this.match(MapIniParser.T__249);
            this.state = 1326;
            this.match(MapIniParser.EQ);
            this.state = 1327;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public cb_cursorname_propery(): Cb_cursorname_properyContext {
        let localContext = new Cb_cursorname_properyContext(this.context, this.state);
        this.enterRule(localContext, 146, MapIniParser.RULE_cb_cursorname_propery);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1329;
            this.match(MapIniParser.T__250);
            this.state = 1330;
            this.match(MapIniParser.EQ);
            this.state = 1331;
            this.cursorname_value();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public cb_radius_cursorname_value(): Cb_radius_cursorname_valueContext {
        let localContext = new Cb_radius_cursorname_valueContext(this.context, this.state);
        this.enterRule(localContext, 148, MapIniParser.RULE_cb_radius_cursorname_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1333;
            this.match(MapIniParser.T__251);
            this.state = 1334;
            this.match(MapIniParser.EQ);
            this.state = 1335;
            this.radius_cursorname_value();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public cb_invalid_cursorname_propery(): Cb_invalid_cursorname_properyContext {
        let localContext = new Cb_invalid_cursorname_properyContext(this.context, this.state);
        this.enterRule(localContext, 150, MapIniParser.RULE_cb_invalid_cursorname_propery);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1337;
            this.match(MapIniParser.T__252);
            this.state = 1338;
            this.match(MapIniParser.EQ);
            this.state = 1339;
            this.invalid_cursorname_value();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public cb_unitspecificsound_property(): Cb_unitspecificsound_propertyContext {
        let localContext = new Cb_unitspecificsound_propertyContext(this.context, this.state);
        this.enterRule(localContext, 152, MapIniParser.RULE_cb_unitspecificsound_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1341;
            this.match(MapIniParser.T__253);
            this.state = 1342;
            this.match(MapIniParser.EQ);
            this.state = 1343;
            this.audioevent_value();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public cb_maxshotsfire_property(): Cb_maxshotsfire_propertyContext {
        let localContext = new Cb_maxshotsfire_propertyContext(this.context, this.state);
        this.enterRule(localContext, 154, MapIniParser.RULE_cb_maxshotsfire_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1345;
            this.match(MapIniParser.T__254);
            this.state = 1346;
            this.match(MapIniParser.EQ);
            this.state = 1347;
            this.match(MapIniParser.INT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dfx_throttletime_property(): Dfx_throttletime_propertyContext {
        let localContext = new Dfx_throttletime_propertyContext(this.context, this.state);
        this.enterRule(localContext, 156, MapIniParser.RULE_dfx_throttletime_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1349;
            this.match(MapIniParser.T__255);
            this.state = 1350;
            this.match(MapIniParser.EQ);
            this.state = 1351;
            this.damageType_value();
            this.state = 1352;
            this.match(MapIniParser.INT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dfx_amountformajorfx_property(): Dfx_amountformajorfx_propertyContext {
        let localContext = new Dfx_amountformajorfx_propertyContext(this.context, this.state);
        this.enterRule(localContext, 158, MapIniParser.RULE_dfx_amountformajorfx_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1354;
            this.match(MapIniParser.T__256);
            this.state = 1355;
            this.match(MapIniParser.EQ);
            this.state = 1356;
            this.damageType_value();
            this.state = 1357;
            this.match(MapIniParser.FLOAT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dfx_majorfx_property(): Dfx_majorfx_propertyContext {
        let localContext = new Dfx_majorfx_propertyContext(this.context, this.state);
        this.enterRule(localContext, 160, MapIniParser.RULE_dfx_majorfx_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1359;
            this.match(MapIniParser.T__257);
            this.state = 1360;
            this.match(MapIniParser.EQ);
            this.state = 1361;
            this.damageType_value();
            this.state = 1362;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dfx_minorfx_property(): Dfx_minorfx_propertyContext {
        let localContext = new Dfx_minorfx_propertyContext(this.context, this.state);
        this.enterRule(localContext, 162, MapIniParser.RULE_dfx_minorfx_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1364;
            this.match(MapIniParser.T__258);
            this.state = 1365;
            this.match(MapIniParser.EQ);
            this.state = 1366;
            this.damageType_value();
            this.state = 1367;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dfx_vetmajorfx_property(): Dfx_vetmajorfx_propertyContext {
        let localContext = new Dfx_vetmajorfx_propertyContext(this.context, this.state);
        this.enterRule(localContext, 164, MapIniParser.RULE_dfx_vetmajorfx_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1369;
            this.match(MapIniParser.T__259);
            this.state = 1370;
            this.match(MapIniParser.EQ);
            this.state = 1371;
            this.match(MapIniParser.VETERENCY);
            this.state = 1372;
            this.damageType_value();
            this.state = 1373;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dfx_vetminorfx_property(): Dfx_vetminorfx_propertyContext {
        let localContext = new Dfx_vetminorfx_propertyContext(this.context, this.state);
        this.enterRule(localContext, 166, MapIniParser.RULE_dfx_vetminorfx_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1375;
            this.match(MapIniParser.T__260);
            this.state = 1376;
            this.match(MapIniParser.EQ);
            this.state = 1377;
            this.match(MapIniParser.VETERENCY);
            this.state = 1378;
            this.damageType_value();
            this.state = 1379;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dgi_useplayercolor_property(): Dgi_useplayercolor_propertyContext {
        let localContext = new Dgi_useplayercolor_propertyContext(this.context, this.state);
        this.enterRule(localContext, 168, MapIniParser.RULE_dgi_useplayercolor_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1381;
            this.match(MapIniParser.T__261);
            this.state = 1382;
            this.match(MapIniParser.EQ);
            this.state = 1383;
            this.match(MapIniParser.BOOLEAN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dgi_colorfortext_property(): Dgi_colorfortext_propertyContext {
        let localContext = new Dgi_colorfortext_propertyContext(this.context, this.state);
        this.enterRule(localContext, 170, MapIniParser.RULE_dgi_colorfortext_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1385;
            this.match(MapIniParser.T__262);
            this.state = 1386;
            this.match(MapIniParser.EQ);
            this.state = 1387;
            this.match(MapIniParser.R);
            this.state = 1388;
            this.match(MapIniParser.G);
            this.state = 1389;
            this.match(MapIniParser.B);
            this.state = 1390;
            this.match(MapIniParser.A);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dgi_colordropshadow_property(): Dgi_colordropshadow_propertyContext {
        let localContext = new Dgi_colordropshadow_propertyContext(this.context, this.state);
        this.enterRule(localContext, 172, MapIniParser.RULE_dgi_colordropshadow_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1392;
            this.match(MapIniParser.T__263);
            this.state = 1393;
            this.match(MapIniParser.EQ);
            this.state = 1394;
            this.match(MapIniParser.R);
            this.state = 1395;
            this.match(MapIniParser.G);
            this.state = 1396;
            this.match(MapIniParser.B);
            this.state = 1397;
            this.match(MapIniParser.A);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dgi_dropshadowoffsetX_property(): Dgi_dropshadowoffsetX_propertyContext {
        let localContext = new Dgi_dropshadowoffsetX_propertyContext(this.context, this.state);
        this.enterRule(localContext, 174, MapIniParser.RULE_dgi_dropshadowoffsetX_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1399;
            this.match(MapIniParser.T__264);
            this.state = 1400;
            this.match(MapIniParser.EQ);
            this.state = 1401;
            this.match(MapIniParser.INT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dgi_dropshadowoffsetY_property(): Dgi_dropshadowoffsetY_propertyContext {
        let localContext = new Dgi_dropshadowoffsetY_propertyContext(this.context, this.state);
        this.enterRule(localContext, 176, MapIniParser.RULE_dgi_dropshadowoffsetY_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1403;
            this.match(MapIniParser.T__265);
            this.state = 1404;
            this.match(MapIniParser.EQ);
            this.state = 1405;
            this.match(MapIniParser.INT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dgi_fontname_property(): Dgi_fontname_propertyContext {
        let localContext = new Dgi_fontname_propertyContext(this.context, this.state);
        this.enterRule(localContext, 178, MapIniParser.RULE_dgi_fontname_property);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1407;
            this.match(MapIniParser.T__266);
            this.state = 1408;
            this.match(MapIniParser.EQ);
            this.state = 1410;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 1409;
                this.match(MapIniParser.ID);
                }
                }
                this.state = 1412;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 369);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dgi_fontsize_property(): Dgi_fontsize_propertyContext {
        let localContext = new Dgi_fontsize_propertyContext(this.context, this.state);
        this.enterRule(localContext, 180, MapIniParser.RULE_dgi_fontsize_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1414;
            this.match(MapIniParser.T__267);
            this.state = 1415;
            this.match(MapIniParser.EQ);
            this.state = 1416;
            this.match(MapIniParser.INT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dgi_fontisbold_property(): Dgi_fontisbold_propertyContext {
        let localContext = new Dgi_fontisbold_propertyContext(this.context, this.state);
        this.enterRule(localContext, 182, MapIniParser.RULE_dgi_fontisbold_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1418;
            this.match(MapIniParser.T__268);
            this.state = 1419;
            this.match(MapIniParser.EQ);
            this.state = 1420;
            this.match(MapIniParser.BOOLEAN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dgi_drawposXperc_property(): Dgi_drawposXperc_propertyContext {
        let localContext = new Dgi_drawposXperc_propertyContext(this.context, this.state);
        this.enterRule(localContext, 184, MapIniParser.RULE_dgi_drawposXperc_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1422;
            this.match(MapIniParser.T__269);
            this.state = 1423;
            this.match(MapIniParser.EQ);
            this.state = 1424;
            this.match(MapIniParser.PROCENT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dgi_drawposYperc_property(): Dgi_drawposYperc_propertyContext {
        let localContext = new Dgi_drawposYperc_propertyContext(this.context, this.state);
        this.enterRule(localContext, 186, MapIniParser.RULE_dgi_drawposYperc_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1426;
            this.match(MapIniParser.T__270);
            this.state = 1427;
            this.match(MapIniParser.EQ);
            this.state = 1428;
            this.match(MapIniParser.INT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_ps_name_property(): Fxlist_ps_name_propertyContext {
        let localContext = new Fxlist_ps_name_propertyContext(this.context, this.state);
        this.enterRule(localContext, 188, MapIniParser.RULE_fxlist_ps_name_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1430;
            this.match(MapIniParser.T__271);
            this.state = 1431;
            this.match(MapIniParser.EQ);
            this.state = 1432;
            this.particlesystem_value();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_ps_count_property(): Fxlist_ps_count_propertyContext {
        let localContext = new Fxlist_ps_count_propertyContext(this.context, this.state);
        this.enterRule(localContext, 190, MapIniParser.RULE_fxlist_ps_count_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1434;
            this.match(MapIniParser.T__272);
            this.state = 1435;
            this.match(MapIniParser.EQ);
            this.state = 1438;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 55, this.context) ) {
            case 1:
                {
                this.state = 1436;
                this.match(MapIniParser.INT);
                }
                break;
            case 2:
                {
                this.state = 1437;
                this.rand_value();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_ps_offset_property(): Fxlist_ps_offset_propertyContext {
        let localContext = new Fxlist_ps_offset_propertyContext(this.context, this.state);
        this.enterRule(localContext, 192, MapIniParser.RULE_fxlist_ps_offset_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1440;
            this.match(MapIniParser.T__273);
            this.state = 1441;
            this.match(MapIniParser.EQ);
            this.state = 1442;
            this.coord3D();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_ps_radius_property(): Fxlist_ps_radius_propertyContext {
        let localContext = new Fxlist_ps_radius_propertyContext(this.context, this.state);
        this.enterRule(localContext, 194, MapIniParser.RULE_fxlist_ps_radius_property);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1444;
            this.match(MapIniParser.T__274);
            this.state = 1445;
            this.match(MapIniParser.EQ);
            this.state = 1448;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 56, this.context) ) {
            case 1:
                {
                this.state = 1446;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case 2:
                {
                this.state = 1447;
                this.rand_value();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_ps_height_property(): Fxlist_ps_height_propertyContext {
        let localContext = new Fxlist_ps_height_propertyContext(this.context, this.state);
        this.enterRule(localContext, 196, MapIniParser.RULE_fxlist_ps_height_property);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1450;
            this.match(MapIniParser.T__275);
            this.state = 1451;
            this.match(MapIniParser.EQ);
            this.state = 1454;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 57, this.context) ) {
            case 1:
                {
                this.state = 1452;
                _la = this.tokenStream.LA(1);
                if(!(_la === 348 || _la === 349)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case 2:
                {
                this.state = 1453;
                this.rand_value();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_ps_initialDelay_property(): Fxlist_ps_initialDelay_propertyContext {
        let localContext = new Fxlist_ps_initialDelay_propertyContext(this.context, this.state);
        this.enterRule(localContext, 198, MapIniParser.RULE_fxlist_ps_initialDelay_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1456;
            this.match(MapIniParser.T__276);
            this.state = 1457;
            this.match(MapIniParser.EQ);
            this.state = 1458;
            this.rand_value();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_ps_rotateX_property(): Fxlist_ps_rotateX_propertyContext {
        let localContext = new Fxlist_ps_rotateX_propertyContext(this.context, this.state);
        this.enterRule(localContext, 200, MapIniParser.RULE_fxlist_ps_rotateX_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1460;
            this.match(MapIniParser.T__277);
            this.state = 1461;
            this.match(MapIniParser.EQ);
            this.state = 1462;
            this.match(MapIniParser.INT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_ps_rotatey_property(): Fxlist_ps_rotatey_propertyContext {
        let localContext = new Fxlist_ps_rotatey_propertyContext(this.context, this.state);
        this.enterRule(localContext, 202, MapIniParser.RULE_fxlist_ps_rotatey_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1464;
            this.match(MapIniParser.T__278);
            this.state = 1465;
            this.match(MapIniParser.EQ);
            this.state = 1466;
            this.match(MapIniParser.INT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_ps_rotateZ_property(): Fxlist_ps_rotateZ_propertyContext {
        let localContext = new Fxlist_ps_rotateZ_propertyContext(this.context, this.state);
        this.enterRule(localContext, 204, MapIniParser.RULE_fxlist_ps_rotateZ_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1468;
            this.match(MapIniParser.T__279);
            this.state = 1469;
            this.match(MapIniParser.EQ);
            this.state = 1470;
            this.match(MapIniParser.INT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_ps_orienttoobject_property(): Fxlist_ps_orienttoobject_propertyContext {
        let localContext = new Fxlist_ps_orienttoobject_propertyContext(this.context, this.state);
        this.enterRule(localContext, 206, MapIniParser.RULE_fxlist_ps_orienttoobject_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1472;
            this.match(MapIniParser.T__280);
            this.state = 1473;
            this.match(MapIniParser.EQ);
            this.state = 1474;
            this.match(MapIniParser.BOOLEAN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_ps_ricochet_property(): Fxlist_ps_ricochet_propertyContext {
        let localContext = new Fxlist_ps_ricochet_propertyContext(this.context, this.state);
        this.enterRule(localContext, 208, MapIniParser.RULE_fxlist_ps_ricochet_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1476;
            this.match(MapIniParser.T__281);
            this.state = 1477;
            this.match(MapIniParser.EQ);
            this.state = 1478;
            this.match(MapIniParser.BOOLEAN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_ps_usecallerradius_property(): Fxlist_ps_usecallerradius_propertyContext {
        let localContext = new Fxlist_ps_usecallerradius_propertyContext(this.context, this.state);
        this.enterRule(localContext, 210, MapIniParser.RULE_fxlist_ps_usecallerradius_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1480;
            this.match(MapIniParser.T__282);
            this.state = 1481;
            this.match(MapIniParser.EQ);
            this.state = 1482;
            this.match(MapIniParser.BOOLEAN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_ps_attachtoobject_property(): Fxlist_ps_attachtoobject_propertyContext {
        let localContext = new Fxlist_ps_attachtoobject_propertyContext(this.context, this.state);
        this.enterRule(localContext, 212, MapIniParser.RULE_fxlist_ps_attachtoobject_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1484;
            this.match(MapIniParser.T__283);
            this.state = 1485;
            this.match(MapIniParser.EQ);
            this.state = 1486;
            this.match(MapIniParser.BOOLEAN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_ps_creategroundheight_property(): Fxlist_ps_creategroundheight_propertyContext {
        let localContext = new Fxlist_ps_creategroundheight_propertyContext(this.context, this.state);
        this.enterRule(localContext, 214, MapIniParser.RULE_fxlist_ps_creategroundheight_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1488;
            this.match(MapIniParser.T__284);
            this.state = 1489;
            this.match(MapIniParser.EQ);
            this.state = 1490;
            this.match(MapIniParser.BOOLEAN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_sound_property(): Fxlist_sound_propertyContext {
        let localContext = new Fxlist_sound_propertyContext(this.context, this.state);
        this.enterRule(localContext, 216, MapIniParser.RULE_fxlist_sound_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1492;
            this.match(MapIniParser.T__271);
            this.state = 1493;
            this.match(MapIniParser.EQ);
            this.state = 1494;
            this.audioevent_value();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_rayeffect_primaryoffset_property(): Fxlist_rayeffect_primaryoffset_propertyContext {
        let localContext = new Fxlist_rayeffect_primaryoffset_propertyContext(this.context, this.state);
        this.enterRule(localContext, 218, MapIniParser.RULE_fxlist_rayeffect_primaryoffset_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1496;
            this.match(MapIniParser.T__285);
            this.state = 1497;
            this.match(MapIniParser.EQ);
            this.state = 1498;
            this.coord3D();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_rayeffect_secondaryoffset_proprety(): Fxlist_rayeffect_secondaryoffset_propretyContext {
        let localContext = new Fxlist_rayeffect_secondaryoffset_propretyContext(this.context, this.state);
        this.enterRule(localContext, 220, MapIniParser.RULE_fxlist_rayeffect_secondaryoffset_proprety);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1500;
            this.match(MapIniParser.T__286);
            this.state = 1501;
            this.match(MapIniParser.EQ);
            this.state = 1502;
            this.coord3D();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_tracer_name_propety(): Fxlist_tracer_name_propetyContext {
        let localContext = new Fxlist_tracer_name_propetyContext(this.context, this.state);
        this.enterRule(localContext, 222, MapIniParser.RULE_fxlist_tracer_name_propety);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1504;
            this.match(MapIniParser.T__287);
            this.state = 1505;
            this.match(MapIniParser.EQ);
            this.state = 1506;
            this.object_value();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_tracer_bonename_property(): Fxlist_tracer_bonename_propertyContext {
        let localContext = new Fxlist_tracer_bonename_propertyContext(this.context, this.state);
        this.enterRule(localContext, 224, MapIniParser.RULE_fxlist_tracer_bonename_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1508;
            this.match(MapIniParser.T__288);
            this.state = 1509;
            this.match(MapIniParser.EQ);
            this.state = 1510;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_tracer_speed_property(): Fxlist_tracer_speed_propertyContext {
        let localContext = new Fxlist_tracer_speed_propertyContext(this.context, this.state);
        this.enterRule(localContext, 226, MapIniParser.RULE_fxlist_tracer_speed_property);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1512;
            this.match(MapIniParser.T__124);
            this.state = 1513;
            this.match(MapIniParser.EQ);
            this.state = 1514;
            _la = this.tokenStream.LA(1);
            if(!(_la === 348 || _la === 349)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_tracer_decayat_property(): Fxlist_tracer_decayat_propertyContext {
        let localContext = new Fxlist_tracer_decayat_propertyContext(this.context, this.state);
        this.enterRule(localContext, 228, MapIniParser.RULE_fxlist_tracer_decayat_property);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1516;
            this.match(MapIniParser.T__289);
            this.state = 1517;
            this.match(MapIniParser.EQ);
            this.state = 1518;
            _la = this.tokenStream.LA(1);
            if(!(_la === 348 || _la === 349)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_tracer_length_property(): Fxlist_tracer_length_propertyContext {
        let localContext = new Fxlist_tracer_length_propertyContext(this.context, this.state);
        this.enterRule(localContext, 230, MapIniParser.RULE_fxlist_tracer_length_property);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1520;
            this.match(MapIniParser.T__290);
            this.state = 1521;
            this.match(MapIniParser.EQ);
            this.state = 1522;
            _la = this.tokenStream.LA(1);
            if(!(_la === 348 || _la === 349)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_tracer_width_property(): Fxlist_tracer_width_propertyContext {
        let localContext = new Fxlist_tracer_width_propertyContext(this.context, this.state);
        this.enterRule(localContext, 232, MapIniParser.RULE_fxlist_tracer_width_property);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1524;
            this.match(MapIniParser.T__291);
            this.state = 1525;
            this.match(MapIniParser.EQ);
            this.state = 1526;
            _la = this.tokenStream.LA(1);
            if(!(_la === 348 || _la === 349)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_tracer_color_property(): Fxlist_tracer_color_propertyContext {
        let localContext = new Fxlist_tracer_color_propertyContext(this.context, this.state);
        this.enterRule(localContext, 234, MapIniParser.RULE_fxlist_tracer_color_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1528;
            this.match(MapIniParser.T__121);
            this.state = 1529;
            this.match(MapIniParser.EQ);
            this.state = 1530;
            this.match(MapIniParser.R);
            this.state = 1531;
            this.match(MapIniParser.G);
            this.state = 1532;
            this.match(MapIniParser.B);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_tracer_probability_property(): Fxlist_tracer_probability_propertyContext {
        let localContext = new Fxlist_tracer_probability_propertyContext(this.context, this.state);
        this.enterRule(localContext, 236, MapIniParser.RULE_fxlist_tracer_probability_property);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1534;
            this.match(MapIniParser.T__292);
            this.state = 1535;
            this.match(MapIniParser.EQ);
            this.state = 1536;
            _la = this.tokenStream.LA(1);
            if(!(_la === 348 || _la === 349)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_lightpulse_color_property(): Fxlist_lightpulse_color_propertyContext {
        let localContext = new Fxlist_lightpulse_color_propertyContext(this.context, this.state);
        this.enterRule(localContext, 238, MapIniParser.RULE_fxlist_lightpulse_color_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1538;
            this.match(MapIniParser.T__121);
            this.state = 1539;
            this.match(MapIniParser.EQ);
            this.state = 1540;
            this.match(MapIniParser.R);
            this.state = 1541;
            this.match(MapIniParser.G);
            this.state = 1542;
            this.match(MapIniParser.B);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_lightpulse_radius_property(): Fxlist_lightpulse_radius_propertyContext {
        let localContext = new Fxlist_lightpulse_radius_propertyContext(this.context, this.state);
        this.enterRule(localContext, 240, MapIniParser.RULE_fxlist_lightpulse_radius_property);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1544;
            this.match(MapIniParser.T__274);
            this.state = 1545;
            this.match(MapIniParser.EQ);
            this.state = 1546;
            _la = this.tokenStream.LA(1);
            if(!(_la === 348 || _la === 349)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_lightpulse_radiuspercentobjectsize_property(): Fxlist_lightpulse_radiuspercentobjectsize_propertyContext {
        let localContext = new Fxlist_lightpulse_radiuspercentobjectsize_propertyContext(this.context, this.state);
        this.enterRule(localContext, 242, MapIniParser.RULE_fxlist_lightpulse_radiuspercentobjectsize_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1548;
            this.match(MapIniParser.T__293);
            this.state = 1549;
            this.match(MapIniParser.EQ);
            this.state = 1550;
            this.match(MapIniParser.PROCENT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_lightpulse_increasetime_property(): Fxlist_lightpulse_increasetime_propertyContext {
        let localContext = new Fxlist_lightpulse_increasetime_propertyContext(this.context, this.state);
        this.enterRule(localContext, 244, MapIniParser.RULE_fxlist_lightpulse_increasetime_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1552;
            this.match(MapIniParser.T__294);
            this.state = 1553;
            this.match(MapIniParser.EQ);
            this.state = 1554;
            this.match(MapIniParser.INT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_lightpulse_decreasetime_property(): Fxlist_lightpulse_decreasetime_propertyContext {
        let localContext = new Fxlist_lightpulse_decreasetime_propertyContext(this.context, this.state);
        this.enterRule(localContext, 246, MapIniParser.RULE_fxlist_lightpulse_decreasetime_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1556;
            this.match(MapIniParser.T__295);
            this.state = 1557;
            this.match(MapIniParser.EQ);
            this.state = 1558;
            this.match(MapIniParser.INT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_viewshake_type_property(): Fxlist_viewshake_type_propertyContext {
        let localContext = new Fxlist_viewshake_type_propertyContext(this.context, this.state);
        this.enterRule(localContext, 248, MapIniParser.RULE_fxlist_viewshake_type_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1560;
            this.match(MapIniParser.T__296);
            this.state = 1561;
            this.match(MapIniParser.EQ);
            this.state = 1562;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_scorch_type_property(): Fxlist_scorch_type_propertyContext {
        let localContext = new Fxlist_scorch_type_propertyContext(this.context, this.state);
        this.enterRule(localContext, 250, MapIniParser.RULE_fxlist_scorch_type_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1564;
            this.match(MapIniParser.T__296);
            this.state = 1565;
            this.match(MapIniParser.EQ);
            this.state = 1566;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_scorch_radius_property(): Fxlist_scorch_radius_propertyContext {
        let localContext = new Fxlist_scorch_radius_propertyContext(this.context, this.state);
        this.enterRule(localContext, 252, MapIniParser.RULE_fxlist_scorch_radius_property);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1568;
            this.match(MapIniParser.T__274);
            this.state = 1569;
            this.match(MapIniParser.EQ);
            this.state = 1570;
            _la = this.tokenStream.LA(1);
            if(!(_la === 348 || _la === 349)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_atbonepos_fx_property(): Fxlist_atbonepos_fx_propertyContext {
        let localContext = new Fxlist_atbonepos_fx_propertyContext(this.context, this.state);
        this.enterRule(localContext, 254, MapIniParser.RULE_fxlist_atbonepos_fx_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1572;
            this.match(MapIniParser.T__297);
            this.state = 1573;
            this.match(MapIniParser.EQ);
            this.state = 1574;
            this.fxlist_value();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_atbonepos_bonename_property(): Fxlist_atbonepos_bonename_propertyContext {
        let localContext = new Fxlist_atbonepos_bonename_propertyContext(this.context, this.state);
        this.enterRule(localContext, 256, MapIniParser.RULE_fxlist_atbonepos_bonename_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1576;
            this.match(MapIniParser.T__288);
            this.state = 1577;
            this.match(MapIniParser.EQ);
            this.state = 1578;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_atbonepos_orienttoobject_property(): Fxlist_atbonepos_orienttoobject_propertyContext {
        let localContext = new Fxlist_atbonepos_orienttoobject_propertyContext(this.context, this.state);
        this.enterRule(localContext, 258, MapIniParser.RULE_fxlist_atbonepos_orienttoobject_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1580;
            this.match(MapIniParser.T__298);
            this.state = 1581;
            this.match(MapIniParser.EQ);
            this.state = 1582;
            this.match(MapIniParser.BOOLEAN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_name_object_propety(): Fxlist_name_object_propetyContext {
        let localContext = new Fxlist_name_object_propetyContext(this.context, this.state);
        this.enterRule(localContext, 260, MapIniParser.RULE_fxlist_name_object_propety);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1584;
            this.match(MapIniParser.T__271);
            this.state = 1585;
            this.match(MapIniParser.EQ);
            this.state = 1586;
            this.object_value();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public igui_properties(): Igui_propertiesContext {
        let localContext = new Igui_propertiesContext(this.context, this.state);
        this.enterRule(localContext, 262, MapIniParser.RULE_igui_properties);
        let _la: number;
        try {
            this.state = 1747;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__299:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1588;
                this.match(MapIniParser.T__299);
                this.state = 1589;
                this.match(MapIniParser.EQ);
                this.state = 1590;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__300:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1591;
                this.match(MapIniParser.T__300);
                this.state = 1592;
                this.match(MapIniParser.EQ);
                this.state = 1593;
                this.match(MapIniParser.R);
                this.state = 1594;
                this.match(MapIniParser.G);
                this.state = 1595;
                this.match(MapIniParser.B);
                }
                break;
            case MapIniParser.T__301:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1596;
                this.match(MapIniParser.T__301);
                this.state = 1597;
                this.match(MapIniParser.EQ);
                this.state = 1598;
                this.match(MapIniParser.R);
                this.state = 1599;
                this.match(MapIniParser.G);
                this.state = 1600;
                this.match(MapIniParser.B);
                }
                break;
            case MapIniParser.T__302:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1601;
                this.match(MapIniParser.T__302);
                this.state = 1602;
                this.match(MapIniParser.EQ);
                this.state = 1603;
                this.match(MapIniParser.XCOORD);
                this.state = 1604;
                this.match(MapIniParser.YCOORD);
                }
                break;
            case MapIniParser.T__303:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1605;
                this.match(MapIniParser.T__303);
                this.state = 1606;
                this.match(MapIniParser.EQ);
                this.state = 1607;
                this.match(MapIniParser.ID);
                }
                break;
            case MapIniParser.T__304:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1608;
                this.match(MapIniParser.T__304);
                this.state = 1609;
                this.match(MapIniParser.EQ);
                this.state = 1610;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__305:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1611;
                this.match(MapIniParser.T__305);
                this.state = 1612;
                this.match(MapIniParser.EQ);
                this.state = 1613;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__306:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1614;
                this.match(MapIniParser.T__306);
                this.state = 1615;
                this.match(MapIniParser.EQ);
                this.state = 1616;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__307:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1617;
                this.match(MapIniParser.T__307);
                this.state = 1618;
                this.match(MapIniParser.EQ);
                this.state = 1619;
                this.match(MapIniParser.R);
                this.state = 1620;
                this.match(MapIniParser.G);
                this.state = 1621;
                this.match(MapIniParser.B);
                this.state = 1622;
                this.match(MapIniParser.A);
                }
                break;
            case MapIniParser.T__308:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 1623;
                this.match(MapIniParser.T__308);
                this.state = 1624;
                this.match(MapIniParser.EQ);
                this.state = 1625;
                this.match(MapIniParser.XCOORD);
                this.state = 1626;
                this.match(MapIniParser.YCOORD);
                }
                break;
            case MapIniParser.T__309:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 1627;
                this.match(MapIniParser.T__309);
                this.state = 1628;
                this.match(MapIniParser.EQ);
                this.state = 1630;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 1629;
                    this.match(MapIniParser.ID);
                    }
                    }
                    this.state = 1632;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 369);
                }
                break;
            case MapIniParser.T__310:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 1634;
                this.match(MapIniParser.T__310);
                this.state = 1635;
                this.match(MapIniParser.EQ);
                this.state = 1636;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__311:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 1637;
                this.match(MapIniParser.T__311);
                this.state = 1638;
                this.match(MapIniParser.EQ);
                this.state = 1639;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__312:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 1640;
                this.match(MapIniParser.T__312);
                this.state = 1641;
                this.match(MapIniParser.EQ);
                this.state = 1643;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 1642;
                    this.match(MapIniParser.ID);
                    }
                    }
                    this.state = 1645;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 369);
                }
                break;
            case MapIniParser.T__313:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 1647;
                this.match(MapIniParser.T__313);
                this.state = 1648;
                this.match(MapIniParser.EQ);
                this.state = 1649;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__314:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 1650;
                this.match(MapIniParser.T__314);
                this.state = 1651;
                this.match(MapIniParser.EQ);
                this.state = 1652;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__315:
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 1653;
                this.match(MapIniParser.T__315);
                this.state = 1654;
                this.match(MapIniParser.EQ);
                this.state = 1655;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__316:
                this.enterOuterAlt(localContext, 18);
                {
                this.state = 1656;
                this.match(MapIniParser.T__316);
                this.state = 1657;
                this.match(MapIniParser.EQ);
                this.state = 1658;
                this.match(MapIniParser.XCOORD);
                this.state = 1659;
                this.match(MapIniParser.YCOORD);
                }
                break;
            case MapIniParser.T__317:
                this.enterOuterAlt(localContext, 19);
                {
                this.state = 1660;
                this.match(MapIniParser.T__317);
                this.state = 1661;
                this.match(MapIniParser.EQ);
                this.state = 1662;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__318:
                this.enterOuterAlt(localContext, 20);
                {
                this.state = 1663;
                this.match(MapIniParser.T__318);
                this.state = 1664;
                this.match(MapIniParser.EQ);
                this.state = 1665;
                this.match(MapIniParser.R);
                this.state = 1666;
                this.match(MapIniParser.G);
                this.state = 1667;
                this.match(MapIniParser.B);
                }
                break;
            case MapIniParser.T__319:
                this.enterOuterAlt(localContext, 21);
                {
                this.state = 1668;
                this.match(MapIniParser.T__319);
                this.state = 1669;
                this.match(MapIniParser.EQ);
                this.state = 1670;
                this.match(MapIniParser.ID);
                }
                break;
            case MapIniParser.T__320:
                this.enterOuterAlt(localContext, 22);
                {
                this.state = 1671;
                this.match(MapIniParser.T__320);
                this.state = 1672;
                this.match(MapIniParser.EQ);
                this.state = 1673;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__321:
                this.enterOuterAlt(localContext, 23);
                {
                this.state = 1674;
                this.match(MapIniParser.T__321);
                this.state = 1675;
                this.match(MapIniParser.EQ);
                this.state = 1676;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__322:
                this.enterOuterAlt(localContext, 24);
                {
                this.state = 1677;
                this.match(MapIniParser.T__322);
                this.state = 1678;
                this.match(MapIniParser.EQ);
                this.state = 1679;
                this.match(MapIniParser.ID);
                }
                break;
            case MapIniParser.T__323:
                this.enterOuterAlt(localContext, 25);
                {
                this.state = 1680;
                this.match(MapIniParser.T__323);
                this.state = 1681;
                this.match(MapIniParser.EQ);
                this.state = 1682;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__324:
                this.enterOuterAlt(localContext, 26);
                {
                this.state = 1683;
                this.match(MapIniParser.T__324);
                this.state = 1684;
                this.match(MapIniParser.EQ);
                this.state = 1685;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__325:
                this.enterOuterAlt(localContext, 27);
                {
                this.state = 1686;
                this.match(MapIniParser.T__325);
                this.state = 1687;
                this.match(MapIniParser.EQ);
                this.state = 1688;
                this.match(MapIniParser.XCOORD);
                this.state = 1689;
                this.match(MapIniParser.YCOORD);
                }
                break;
            case MapIniParser.T__326:
                this.enterOuterAlt(localContext, 28);
                {
                this.state = 1690;
                this.match(MapIniParser.T__326);
                this.state = 1691;
                this.match(MapIniParser.EQ);
                this.state = 1692;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__327:
                this.enterOuterAlt(localContext, 29);
                {
                this.state = 1693;
                this.match(MapIniParser.T__327);
                this.state = 1694;
                this.match(MapIniParser.EQ);
                this.state = 1695;
                this.match(MapIniParser.R);
                this.state = 1696;
                this.match(MapIniParser.G);
                this.state = 1697;
                this.match(MapIniParser.B);
                }
                break;
            case MapIniParser.T__328:
                this.enterOuterAlt(localContext, 30);
                {
                this.state = 1698;
                this.match(MapIniParser.T__328);
                this.state = 1699;
                this.match(MapIniParser.EQ);
                this.state = 1700;
                this.match(MapIniParser.ID);
                }
                break;
            case MapIniParser.T__329:
                this.enterOuterAlt(localContext, 31);
                {
                this.state = 1701;
                this.match(MapIniParser.T__329);
                this.state = 1702;
                this.match(MapIniParser.EQ);
                this.state = 1703;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__330:
                this.enterOuterAlt(localContext, 32);
                {
                this.state = 1704;
                this.match(MapIniParser.T__330);
                this.state = 1705;
                this.match(MapIniParser.EQ);
                this.state = 1706;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__331:
                this.enterOuterAlt(localContext, 33);
                {
                this.state = 1707;
                this.match(MapIniParser.T__331);
                this.state = 1708;
                this.match(MapIniParser.EQ);
                this.state = 1709;
                this.match(MapIniParser.R);
                this.state = 1710;
                this.match(MapIniParser.G);
                this.state = 1711;
                this.match(MapIniParser.B);
                }
                break;
            case MapIniParser.T__332:
                this.enterOuterAlt(localContext, 34);
                {
                this.state = 1712;
                this.match(MapIniParser.T__332);
                this.state = 1713;
                this.match(MapIniParser.EQ);
                this.state = 1714;
                this.match(MapIniParser.ID);
                }
                break;
            case MapIniParser.T__333:
                this.enterOuterAlt(localContext, 35);
                {
                this.state = 1715;
                this.match(MapIniParser.T__333);
                this.state = 1716;
                this.match(MapIniParser.EQ);
                this.state = 1717;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__334:
                this.enterOuterAlt(localContext, 36);
                {
                this.state = 1718;
                this.match(MapIniParser.T__334);
                this.state = 1719;
                this.match(MapIniParser.EQ);
                this.state = 1720;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__335:
                this.enterOuterAlt(localContext, 37);
                {
                this.state = 1721;
                this.match(MapIniParser.T__335);
                this.state = 1722;
                this.match(MapIniParser.EQ);
                this.state = 1723;
                this.match(MapIniParser.R);
                this.state = 1724;
                this.match(MapIniParser.G);
                this.state = 1725;
                this.match(MapIniParser.B);
                }
                break;
            case MapIniParser.T__336:
                this.enterOuterAlt(localContext, 38);
                {
                this.state = 1726;
                this.match(MapIniParser.T__336);
                this.state = 1727;
                this.match(MapIniParser.EQ);
                this.state = 1728;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__337:
                this.enterOuterAlt(localContext, 39);
                {
                this.state = 1729;
                this.match(MapIniParser.T__337);
                this.state = 1730;
                this.match(MapIniParser.EQ);
                this.state = 1731;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__338:
                this.enterOuterAlt(localContext, 40);
                {
                this.state = 1732;
                this.match(MapIniParser.T__338);
                this.state = 1733;
                this.match(MapIniParser.EQ);
                this.state = 1734;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__339:
                this.enterOuterAlt(localContext, 41);
                {
                this.state = 1735;
                this.match(MapIniParser.T__339);
                this.state = 1736;
                this.match(MapIniParser.EQ);
                this.state = 1737;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__340:
                this.enterOuterAlt(localContext, 42);
                {
                this.state = 1738;
                this.match(MapIniParser.T__340);
                this.state = 1739;
                this.match(MapIniParser.EQ);
                this.state = 1740;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__341:
                this.enterOuterAlt(localContext, 43);
                {
                this.state = 1741;
                this.match(MapIniParser.T__341);
                this.state = 1742;
                this.match(MapIniParser.EQ);
                this.state = 1743;
                this.match(MapIniParser.R);
                this.state = 1744;
                this.match(MapIniParser.G);
                this.state = 1745;
                this.match(MapIniParser.B);
                this.state = 1746;
                this.match(MapIniParser.A);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public faction_value(): Faction_valueContext {
        let localContext = new Faction_valueContext(this.context, this.state);
        this.enterRule(localContext, 264, MapIniParser.RULE_faction_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1749;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public commandbutton_value(): Commandbutton_valueContext {
        let localContext = new Commandbutton_valueContext(this.context, this.state);
        this.enterRule(localContext, 266, MapIniParser.RULE_commandbutton_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1751;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public cursorname_value(): Cursorname_valueContext {
        let localContext = new Cursorname_valueContext(this.context, this.state);
        this.enterRule(localContext, 268, MapIniParser.RULE_cursorname_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1753;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public radius_cursorname_value(): Radius_cursorname_valueContext {
        let localContext = new Radius_cursorname_valueContext(this.context, this.state);
        this.enterRule(localContext, 270, MapIniParser.RULE_radius_cursorname_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1755;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public invalid_cursorname_value(): Invalid_cursorname_valueContext {
        let localContext = new Invalid_cursorname_valueContext(this.context, this.state);
        this.enterRule(localContext, 272, MapIniParser.RULE_invalid_cursorname_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1757;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public mappedimage_value(): Mappedimage_valueContext {
        let localContext = new Mappedimage_valueContext(this.context, this.state);
        this.enterRule(localContext, 274, MapIniParser.RULE_mappedimage_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1759;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public particlesystem_value(): Particlesystem_valueContext {
        let localContext = new Particlesystem_valueContext(this.context, this.state);
        this.enterRule(localContext, 276, MapIniParser.RULE_particlesystem_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1761;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fxlist_value(): Fxlist_valueContext {
        let localContext = new Fxlist_valueContext(this.context, this.state);
        this.enterRule(localContext, 278, MapIniParser.RULE_fxlist_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1763;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public object_property(): Object_propertyContext {
        let localContext = new Object_propertyContext(this.context, this.state);
        this.enterRule(localContext, 280, MapIniParser.RULE_object_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1765;
            this.match(MapIniParser.T__342);
            this.state = 1766;
            this.match(MapIniParser.EQ);
            this.state = 1767;
            this.object_value();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public object_value(): Object_valueContext {
        let localContext = new Object_valueContext(this.context, this.state);
        this.enterRule(localContext, 282, MapIniParser.RULE_object_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1769;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public science_property(): Science_propertyContext {
        let localContext = new Science_propertyContext(this.context, this.state);
        this.enterRule(localContext, 284, MapIniParser.RULE_science_property);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1771;
            this.match(MapIniParser.T__343);
            this.state = 1772;
            this.match(MapIniParser.EQ);
            this.state = 1774;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 1773;
                this.science_value();
                }
                }
                this.state = 1776;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 369);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public science_value(): Science_valueContext {
        let localContext = new Science_valueContext(this.context, this.state);
        this.enterRule(localContext, 286, MapIniParser.RULE_science_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1778;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public specialpower_property(): Specialpower_propertyContext {
        let localContext = new Specialpower_propertyContext(this.context, this.state);
        this.enterRule(localContext, 288, MapIniParser.RULE_specialpower_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1780;
            this.match(MapIniParser.T__344);
            this.state = 1781;
            this.match(MapIniParser.EQ);
            this.state = 1782;
            this.specialpower_value();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public specialpower_value(): Specialpower_valueContext {
        let localContext = new Specialpower_valueContext(this.context, this.state);
        this.enterRule(localContext, 290, MapIniParser.RULE_specialpower_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1784;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public audioevent_value(): Audioevent_valueContext {
        let localContext = new Audioevent_valueContext(this.context, this.state);
        this.enterRule(localContext, 292, MapIniParser.RULE_audioevent_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1786;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public upgrade_property(): Upgrade_propertyContext {
        let localContext = new Upgrade_propertyContext(this.context, this.state);
        this.enterRule(localContext, 294, MapIniParser.RULE_upgrade_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1788;
            this.match(MapIniParser.T__345);
            this.state = 1789;
            this.match(MapIniParser.EQ);
            this.state = 1790;
            this.upgrade_value();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public upgrade_value(): Upgrade_valueContext {
        let localContext = new Upgrade_valueContext(this.context, this.state);
        this.enterRule(localContext, 296, MapIniParser.RULE_upgrade_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1792;
            this.match(MapIniParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public weaponslot_property(): Weaponslot_propertyContext {
        let localContext = new Weaponslot_propertyContext(this.context, this.state);
        this.enterRule(localContext, 298, MapIniParser.RULE_weaponslot_property);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1794;
            this.match(MapIniParser.T__346);
            this.state = 1795;
            this.match(MapIniParser.EQ);
            this.state = 1797;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 1796;
                this.match(MapIniParser.WEAPONSLOT);
                }
                }
                this.state = 1799;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 352);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public rand_value(): Rand_valueContext {
        let localContext = new Rand_valueContext(this.context, this.state);
        this.enterRule(localContext, 300, MapIniParser.RULE_rand_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1801;
            this.match(MapIniParser.INT);
            this.state = 1802;
            this.match(MapIniParser.INT);
            this.state = 1803;
            this.match(MapIniParser.DISTRIBUTION_FORM);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public coord3D(): Coord3DContext {
        let localContext = new Coord3DContext(this.context, this.state);
        this.enterRule(localContext, 302, MapIniParser.RULE_coord3D);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1805;
            this.match(MapIniParser.XCOORD);
            this.state = 1806;
            this.match(MapIniParser.YCOORD);
            this.state = 1807;
            this.match(MapIniParser.ZCOORD);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public static readonly _serializedATN: number[] = [
        4,1,373,1810,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
        52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,
        59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,
        65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,
        72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,77,7,77,2,78,7,
        78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,83,2,84,7,84,2,
        85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,89,2,90,7,90,2,91,7,
        91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,2,97,7,97,2,
        98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,7,103,
        2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,2,109,
        7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,7,114,
        2,115,7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,2,120,
        7,120,2,121,7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,7,125,
        2,126,7,126,2,127,7,127,2,128,7,128,2,129,7,129,2,130,7,130,2,131,
        7,131,2,132,7,132,2,133,7,133,2,134,7,134,2,135,7,135,2,136,7,136,
        2,137,7,137,2,138,7,138,2,139,7,139,2,140,7,140,2,141,7,141,2,142,
        7,142,2,143,7,143,2,144,7,144,2,145,7,145,2,146,7,146,2,147,7,147,
        2,148,7,148,2,149,7,149,2,150,7,150,2,151,7,151,1,0,5,0,306,8,0,
        10,0,12,0,309,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,1,1,1,3,1,326,8,1,1,1,5,1,329,8,1,10,1,12,1,332,9,1,1,2,
        1,2,1,2,1,2,1,2,5,2,339,8,2,10,2,12,2,342,9,2,1,2,1,2,1,3,1,3,1,
        3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
        3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
        3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
        3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
        3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
        3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
        3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
        3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,472,8,3,1,4,1,
        4,1,4,5,4,477,8,4,10,4,12,4,480,9,4,1,4,1,4,1,5,1,5,1,5,5,5,487,
        8,5,10,5,12,5,490,9,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,
        6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,510,8,6,1,7,1,7,1,7,5,7,515,8,
        7,10,7,12,7,518,9,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,
        1,8,1,8,1,8,1,8,3,8,535,8,8,1,9,1,9,5,9,539,8,9,10,9,12,9,542,9,
        9,1,9,1,9,1,10,1,10,1,10,5,10,549,8,10,10,10,12,10,552,9,10,1,10,
        1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,
        1,11,1,11,1,11,1,11,1,11,1,11,3,11,574,8,11,1,12,1,12,1,12,5,12,
        579,8,12,10,12,12,12,582,9,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,
        1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,601,8,13,
        1,14,1,14,1,14,5,14,606,8,14,10,14,12,14,609,9,14,1,14,1,14,1,15,
        1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,5,16,624,8,16,
        10,16,12,16,627,9,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,
        1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,3,17,648,8,17,
        1,18,1,18,1,18,5,18,653,8,18,10,18,12,18,656,9,18,1,18,1,18,1,19,
        1,19,1,19,1,19,1,20,1,20,1,20,5,20,667,8,20,10,20,12,20,670,9,20,
        1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,21,3,21,680,8,21,1,22,1,22,
        5,22,684,8,22,10,22,12,22,687,9,22,1,22,1,22,1,23,1,23,1,23,1,23,
        1,23,1,23,1,23,1,23,1,23,1,23,3,23,701,8,23,1,24,1,24,1,24,5,24,
        706,8,24,10,24,12,24,709,9,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,
        1,25,1,25,1,25,3,25,721,8,25,1,26,1,26,1,26,1,26,1,26,1,26,1,26,
        1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,5,26,738,8,26,10,26,12,26,
        741,9,26,1,26,1,26,1,27,1,27,5,27,747,8,27,10,27,12,27,750,9,27,
        1,27,1,27,1,28,1,28,1,28,1,28,5,28,758,8,28,10,28,12,28,761,9,28,
        1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,5,29,774,
        8,29,10,29,12,29,777,9,29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,30,
        5,30,787,8,30,10,30,12,30,790,9,30,1,30,1,30,1,31,1,31,5,31,796,
        8,31,10,31,12,31,799,9,31,1,31,1,31,1,32,1,32,1,32,5,32,806,8,32,
        10,32,12,32,809,9,32,1,32,1,32,1,33,1,33,1,33,1,33,5,33,817,8,33,
        10,33,12,33,820,9,33,1,33,1,33,1,34,1,34,1,34,5,34,827,8,34,10,34,
        12,34,830,9,34,1,34,1,34,1,35,1,35,5,35,836,8,35,10,35,12,35,839,
        9,35,1,35,1,35,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,
        1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,
        1,36,3,36,867,8,36,1,37,1,37,1,37,5,37,872,8,37,10,37,12,37,875,
        9,37,1,37,1,37,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,
        1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,
        1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,
        1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,
        1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,
        1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,
        1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,
        1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,
        1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,
        1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,
        1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,
        1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,
        1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,
        1,38,1,38,1,38,1,38,1,38,1,38,3,38,1051,8,38,1,39,1,39,1,39,4,39,
        1056,8,39,11,39,12,39,1057,1,40,1,40,1,40,1,40,1,41,1,41,1,41,1,
        41,1,42,1,42,1,42,1,42,1,43,1,43,1,44,1,44,1,45,1,45,1,46,1,46,1,
        47,1,47,1,47,5,47,1083,8,47,10,47,12,47,1086,9,47,1,47,1,47,1,48,
        1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,
        1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,
        1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,
        1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,
        1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,
        1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,
        1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,4,48,
        1181,8,48,11,48,12,48,1182,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,
        48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,3,48,1200,8,48,1,49,1,49,1,
        49,1,49,1,50,1,50,1,50,1,50,1,51,1,51,1,51,4,51,1213,8,51,11,51,
        12,51,1214,1,52,1,52,1,52,1,52,1,52,1,52,1,53,1,53,1,53,1,53,1,54,
        1,54,1,55,1,55,1,56,1,56,1,57,1,57,1,58,1,58,1,59,1,59,5,59,1239,
        8,59,10,59,12,59,1242,9,59,1,59,1,59,1,60,1,60,1,60,1,60,1,60,1,
        60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,
        60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,
        60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,3,60,1285,8,60,1,61,1,61,1,
        62,1,62,1,62,1,62,1,63,1,63,1,63,1,63,1,64,1,64,1,65,1,65,1,65,4,
        65,1302,8,65,11,65,12,65,1303,1,66,1,66,1,67,1,67,1,67,1,67,1,68,
        1,68,1,68,1,68,1,69,1,69,1,70,1,70,1,70,1,70,1,71,1,71,1,71,1,71,
        1,72,1,72,1,72,1,72,1,73,1,73,1,73,1,73,1,74,1,74,1,74,1,74,1,75,
        1,75,1,75,1,75,1,76,1,76,1,76,1,76,1,77,1,77,1,77,1,77,1,78,1,78,
        1,78,1,78,1,78,1,79,1,79,1,79,1,79,1,79,1,80,1,80,1,80,1,80,1,80,
        1,81,1,81,1,81,1,81,1,81,1,82,1,82,1,82,1,82,1,82,1,82,1,83,1,83,
        1,83,1,83,1,83,1,83,1,84,1,84,1,84,1,84,1,85,1,85,1,85,1,85,1,85,
        1,85,1,85,1,86,1,86,1,86,1,86,1,86,1,86,1,86,1,87,1,87,1,87,1,87,
        1,88,1,88,1,88,1,88,1,89,1,89,1,89,4,89,1411,8,89,11,89,12,89,1412,
        1,90,1,90,1,90,1,90,1,91,1,91,1,91,1,91,1,92,1,92,1,92,1,92,1,93,
        1,93,1,93,1,93,1,94,1,94,1,94,1,94,1,95,1,95,1,95,1,95,3,95,1439,
        8,95,1,96,1,96,1,96,1,96,1,97,1,97,1,97,1,97,3,97,1449,8,97,1,98,
        1,98,1,98,1,98,3,98,1455,8,98,1,99,1,99,1,99,1,99,1,100,1,100,1,
        100,1,100,1,101,1,101,1,101,1,101,1,102,1,102,1,102,1,102,1,103,
        1,103,1,103,1,103,1,104,1,104,1,104,1,104,1,105,1,105,1,105,1,105,
        1,106,1,106,1,106,1,106,1,107,1,107,1,107,1,107,1,108,1,108,1,108,
        1,108,1,109,1,109,1,109,1,109,1,110,1,110,1,110,1,110,1,111,1,111,
        1,111,1,111,1,112,1,112,1,112,1,112,1,113,1,113,1,113,1,113,1,114,
        1,114,1,114,1,114,1,115,1,115,1,115,1,115,1,116,1,116,1,116,1,116,
        1,117,1,117,1,117,1,117,1,117,1,117,1,118,1,118,1,118,1,118,1,119,
        1,119,1,119,1,119,1,119,1,119,1,120,1,120,1,120,1,120,1,121,1,121,
        1,121,1,121,1,122,1,122,1,122,1,122,1,123,1,123,1,123,1,123,1,124,
        1,124,1,124,1,124,1,125,1,125,1,125,1,125,1,126,1,126,1,126,1,126,
        1,127,1,127,1,127,1,127,1,128,1,128,1,128,1,128,1,129,1,129,1,129,
        1,129,1,130,1,130,1,130,1,130,1,131,1,131,1,131,1,131,1,131,1,131,
        1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,
        1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,
        1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,
        1,131,1,131,1,131,4,131,1631,8,131,11,131,12,131,1632,1,131,1,131,
        1,131,1,131,1,131,1,131,1,131,1,131,1,131,4,131,1644,8,131,11,131,
        12,131,1645,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,
        1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,
        1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,
        1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,
        1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,
        1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,
        1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,
        1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,
        1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,
        1,131,1,131,1,131,3,131,1748,8,131,1,132,1,132,1,133,1,133,1,134,
        1,134,1,135,1,135,1,136,1,136,1,137,1,137,1,138,1,138,1,139,1,139,
        1,140,1,140,1,140,1,140,1,141,1,141,1,142,1,142,1,142,4,142,1775,
        8,142,11,142,12,142,1776,1,143,1,143,1,144,1,144,1,144,1,144,1,145,
        1,145,1,146,1,146,1,147,1,147,1,147,1,147,1,148,1,148,1,149,1,149,
        1,149,4,149,1798,8,149,11,149,12,149,1799,1,150,1,150,1,150,1,150,
        1,151,1,151,1,151,1,151,1,151,0,0,152,0,2,4,6,8,10,12,14,16,18,20,
        22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,
        66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,
        108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,
        140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,
        172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,
        204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,
        236,238,240,242,244,246,248,250,252,254,256,258,260,262,264,266,
        268,270,272,274,276,278,280,282,284,286,288,290,292,294,296,298,
        300,302,0,6,1,0,56,60,2,0,67,67,369,369,1,0,89,117,1,0,348,349,1,
        0,238,240,1,0,242,243,1991,0,307,1,0,0,0,2,325,1,0,0,0,4,333,1,0,
        0,0,6,471,1,0,0,0,8,473,1,0,0,0,10,483,1,0,0,0,12,509,1,0,0,0,14,
        511,1,0,0,0,16,534,1,0,0,0,18,536,1,0,0,0,20,545,1,0,0,0,22,573,
        1,0,0,0,24,575,1,0,0,0,26,600,1,0,0,0,28,602,1,0,0,0,30,612,1,0,
        0,0,32,617,1,0,0,0,34,647,1,0,0,0,36,649,1,0,0,0,38,659,1,0,0,0,
        40,663,1,0,0,0,42,679,1,0,0,0,44,681,1,0,0,0,46,700,1,0,0,0,48,702,
        1,0,0,0,50,720,1,0,0,0,52,722,1,0,0,0,54,744,1,0,0,0,56,753,1,0,
        0,0,58,764,1,0,0,0,60,780,1,0,0,0,62,793,1,0,0,0,64,802,1,0,0,0,
        66,812,1,0,0,0,68,823,1,0,0,0,70,833,1,0,0,0,72,866,1,0,0,0,74,868,
        1,0,0,0,76,1050,1,0,0,0,78,1052,1,0,0,0,80,1059,1,0,0,0,82,1063,
        1,0,0,0,84,1067,1,0,0,0,86,1071,1,0,0,0,88,1073,1,0,0,0,90,1075,
        1,0,0,0,92,1077,1,0,0,0,94,1079,1,0,0,0,96,1199,1,0,0,0,98,1201,
        1,0,0,0,100,1205,1,0,0,0,102,1209,1,0,0,0,104,1216,1,0,0,0,106,1222,
        1,0,0,0,108,1226,1,0,0,0,110,1228,1,0,0,0,112,1230,1,0,0,0,114,1232,
        1,0,0,0,116,1234,1,0,0,0,118,1236,1,0,0,0,120,1284,1,0,0,0,122,1286,
        1,0,0,0,124,1288,1,0,0,0,126,1292,1,0,0,0,128,1296,1,0,0,0,130,1298,
        1,0,0,0,132,1305,1,0,0,0,134,1307,1,0,0,0,136,1311,1,0,0,0,138,1315,
        1,0,0,0,140,1317,1,0,0,0,142,1321,1,0,0,0,144,1325,1,0,0,0,146,1329,
        1,0,0,0,148,1333,1,0,0,0,150,1337,1,0,0,0,152,1341,1,0,0,0,154,1345,
        1,0,0,0,156,1349,1,0,0,0,158,1354,1,0,0,0,160,1359,1,0,0,0,162,1364,
        1,0,0,0,164,1369,1,0,0,0,166,1375,1,0,0,0,168,1381,1,0,0,0,170,1385,
        1,0,0,0,172,1392,1,0,0,0,174,1399,1,0,0,0,176,1403,1,0,0,0,178,1407,
        1,0,0,0,180,1414,1,0,0,0,182,1418,1,0,0,0,184,1422,1,0,0,0,186,1426,
        1,0,0,0,188,1430,1,0,0,0,190,1434,1,0,0,0,192,1440,1,0,0,0,194,1444,
        1,0,0,0,196,1450,1,0,0,0,198,1456,1,0,0,0,200,1460,1,0,0,0,202,1464,
        1,0,0,0,204,1468,1,0,0,0,206,1472,1,0,0,0,208,1476,1,0,0,0,210,1480,
        1,0,0,0,212,1484,1,0,0,0,214,1488,1,0,0,0,216,1492,1,0,0,0,218,1496,
        1,0,0,0,220,1500,1,0,0,0,222,1504,1,0,0,0,224,1508,1,0,0,0,226,1512,
        1,0,0,0,228,1516,1,0,0,0,230,1520,1,0,0,0,232,1524,1,0,0,0,234,1528,
        1,0,0,0,236,1534,1,0,0,0,238,1538,1,0,0,0,240,1544,1,0,0,0,242,1548,
        1,0,0,0,244,1552,1,0,0,0,246,1556,1,0,0,0,248,1560,1,0,0,0,250,1564,
        1,0,0,0,252,1568,1,0,0,0,254,1572,1,0,0,0,256,1576,1,0,0,0,258,1580,
        1,0,0,0,260,1584,1,0,0,0,262,1747,1,0,0,0,264,1749,1,0,0,0,266,1751,
        1,0,0,0,268,1753,1,0,0,0,270,1755,1,0,0,0,272,1757,1,0,0,0,274,1759,
        1,0,0,0,276,1761,1,0,0,0,278,1763,1,0,0,0,280,1765,1,0,0,0,282,1769,
        1,0,0,0,284,1771,1,0,0,0,286,1778,1,0,0,0,288,1780,1,0,0,0,290,1784,
        1,0,0,0,292,1786,1,0,0,0,294,1788,1,0,0,0,296,1792,1,0,0,0,298,1794,
        1,0,0,0,300,1801,1,0,0,0,302,1805,1,0,0,0,304,306,3,2,1,0,305,304,
        1,0,0,0,306,309,1,0,0,0,307,305,1,0,0,0,307,308,1,0,0,0,308,310,
        1,0,0,0,309,307,1,0,0,0,310,311,5,0,0,1,311,1,1,0,0,0,312,326,3,
        20,10,0,313,326,3,4,2,0,314,326,3,24,12,0,315,326,3,28,14,0,316,
        326,3,32,16,0,317,326,3,36,18,0,318,326,3,40,20,0,319,326,3,44,22,
        0,320,326,3,48,24,0,321,326,3,68,34,0,322,326,3,74,37,0,323,326,
        3,94,47,0,324,326,3,118,59,0,325,312,1,0,0,0,325,313,1,0,0,0,325,
        314,1,0,0,0,325,315,1,0,0,0,325,316,1,0,0,0,325,317,1,0,0,0,325,
        318,1,0,0,0,325,319,1,0,0,0,325,320,1,0,0,0,325,321,1,0,0,0,325,
        322,1,0,0,0,325,323,1,0,0,0,325,324,1,0,0,0,326,330,1,0,0,0,327,
        329,5,370,0,0,328,327,1,0,0,0,329,332,1,0,0,0,330,328,1,0,0,0,330,
        331,1,0,0,0,331,3,1,0,0,0,332,330,1,0,0,0,333,334,5,1,0,0,334,340,
        5,370,0,0,335,339,3,6,3,0,336,339,3,14,7,0,337,339,3,8,4,0,338,335,
        1,0,0,0,338,336,1,0,0,0,338,337,1,0,0,0,339,342,1,0,0,0,340,338,
        1,0,0,0,340,341,1,0,0,0,341,343,1,0,0,0,342,340,1,0,0,0,343,344,
        3,122,61,0,344,5,1,0,0,0,345,346,5,2,0,0,346,347,5,351,0,0,347,472,
        5,349,0,0,348,349,5,3,0,0,349,350,5,351,0,0,350,472,5,348,0,0,351,
        352,5,4,0,0,352,353,5,351,0,0,353,472,5,348,0,0,354,355,5,5,0,0,
        355,356,5,351,0,0,356,472,5,348,0,0,357,358,5,6,0,0,358,359,5,351,
        0,0,359,472,5,349,0,0,360,361,5,7,0,0,361,362,5,351,0,0,362,472,
        5,349,0,0,363,364,5,8,0,0,364,365,5,351,0,0,365,472,5,349,0,0,366,
        367,5,9,0,0,367,368,5,351,0,0,368,472,5,349,0,0,369,370,5,10,0,0,
        370,371,5,351,0,0,371,472,5,349,0,0,372,373,5,11,0,0,373,374,5,351,
        0,0,374,472,5,349,0,0,375,376,5,12,0,0,376,377,5,351,0,0,377,472,
        5,349,0,0,378,379,5,13,0,0,379,380,5,351,0,0,380,472,5,349,0,0,381,
        382,5,14,0,0,382,383,5,351,0,0,383,472,5,349,0,0,384,385,5,15,0,
        0,385,386,5,351,0,0,386,472,5,348,0,0,387,388,5,16,0,0,388,389,5,
        351,0,0,389,472,5,348,0,0,390,391,5,17,0,0,391,392,5,351,0,0,392,
        472,5,348,0,0,393,394,5,18,0,0,394,395,5,351,0,0,395,472,5,349,0,
        0,396,397,5,19,0,0,397,398,5,351,0,0,398,472,5,349,0,0,399,400,5,
        20,0,0,400,401,5,351,0,0,401,472,5,349,0,0,402,403,5,21,0,0,403,
        404,5,351,0,0,404,472,5,349,0,0,405,406,5,22,0,0,406,407,5,351,0,
        0,407,472,5,349,0,0,408,409,5,23,0,0,409,410,5,351,0,0,410,472,5,
        348,0,0,411,412,5,24,0,0,412,413,5,351,0,0,413,472,5,367,0,0,414,
        415,5,25,0,0,415,416,5,351,0,0,416,472,5,367,0,0,417,418,5,26,0,
        0,418,419,5,351,0,0,419,472,5,367,0,0,420,421,5,27,0,0,421,422,5,
        351,0,0,422,472,5,367,0,0,423,424,5,28,0,0,424,425,5,351,0,0,425,
        472,5,349,0,0,426,427,5,29,0,0,427,428,5,351,0,0,428,472,5,348,0,
        0,429,430,5,30,0,0,430,431,5,351,0,0,431,472,5,367,0,0,432,433,5,
        31,0,0,433,434,5,351,0,0,434,472,5,349,0,0,435,436,5,32,0,0,436,
        437,5,351,0,0,437,472,5,348,0,0,438,439,5,33,0,0,439,440,5,351,0,
        0,440,472,5,348,0,0,441,442,5,34,0,0,442,443,5,351,0,0,443,472,5,
        349,0,0,444,445,5,35,0,0,445,446,5,351,0,0,446,472,5,349,0,0,447,
        448,5,36,0,0,448,449,5,351,0,0,449,472,5,348,0,0,450,451,5,37,0,
        0,451,452,5,351,0,0,452,472,5,348,0,0,453,454,5,38,0,0,454,455,5,
        351,0,0,455,472,5,349,0,0,456,457,5,39,0,0,457,458,5,351,0,0,458,
        472,5,348,0,0,459,460,5,40,0,0,460,461,5,351,0,0,461,472,5,349,0,
        0,462,463,5,41,0,0,463,464,5,351,0,0,464,472,5,367,0,0,465,466,5,
        42,0,0,466,467,5,351,0,0,467,472,5,349,0,0,468,469,5,43,0,0,469,
        470,5,351,0,0,470,472,5,349,0,0,471,345,1,0,0,0,471,348,1,0,0,0,
        471,351,1,0,0,0,471,354,1,0,0,0,471,357,1,0,0,0,471,360,1,0,0,0,
        471,363,1,0,0,0,471,366,1,0,0,0,471,369,1,0,0,0,471,372,1,0,0,0,
        471,375,1,0,0,0,471,378,1,0,0,0,471,381,1,0,0,0,471,384,1,0,0,0,
        471,387,1,0,0,0,471,390,1,0,0,0,471,393,1,0,0,0,471,396,1,0,0,0,
        471,399,1,0,0,0,471,402,1,0,0,0,471,405,1,0,0,0,471,408,1,0,0,0,
        471,411,1,0,0,0,471,414,1,0,0,0,471,417,1,0,0,0,471,420,1,0,0,0,
        471,423,1,0,0,0,471,426,1,0,0,0,471,429,1,0,0,0,471,432,1,0,0,0,
        471,435,1,0,0,0,471,438,1,0,0,0,471,441,1,0,0,0,471,444,1,0,0,0,
        471,447,1,0,0,0,471,450,1,0,0,0,471,453,1,0,0,0,471,456,1,0,0,0,
        471,459,1,0,0,0,471,462,1,0,0,0,471,465,1,0,0,0,471,468,1,0,0,0,
        472,7,1,0,0,0,473,474,5,44,0,0,474,478,3,264,132,0,475,477,3,10,
        5,0,476,475,1,0,0,0,477,480,1,0,0,0,478,476,1,0,0,0,478,479,1,0,
        0,0,479,481,1,0,0,0,480,478,1,0,0,0,481,482,3,122,61,0,482,9,1,0,
        0,0,483,484,5,45,0,0,484,488,3,282,141,0,485,487,3,12,6,0,486,485,
        1,0,0,0,487,490,1,0,0,0,488,486,1,0,0,0,488,489,1,0,0,0,489,491,
        1,0,0,0,490,488,1,0,0,0,491,492,3,122,61,0,492,11,1,0,0,0,493,494,
        5,46,0,0,494,495,5,351,0,0,495,496,5,354,0,0,496,510,5,355,0,0,497,
        498,5,47,0,0,498,499,5,351,0,0,499,510,5,348,0,0,500,501,5,48,0,
        0,501,502,5,351,0,0,502,510,5,349,0,0,503,504,5,49,0,0,504,505,5,
        351,0,0,505,510,5,367,0,0,506,507,5,50,0,0,507,508,5,351,0,0,508,
        510,5,367,0,0,509,493,1,0,0,0,509,497,1,0,0,0,509,500,1,0,0,0,509,
        503,1,0,0,0,509,506,1,0,0,0,510,13,1,0,0,0,511,512,5,51,0,0,512,
        516,5,369,0,0,513,515,3,16,8,0,514,513,1,0,0,0,515,518,1,0,0,0,516,
        514,1,0,0,0,516,517,1,0,0,0,517,519,1,0,0,0,518,516,1,0,0,0,519,
        520,3,122,61,0,520,15,1,0,0,0,521,522,5,52,0,0,522,523,5,351,0,0,
        523,535,5,348,0,0,524,525,5,53,0,0,525,526,5,351,0,0,526,535,5,348,
        0,0,527,528,5,54,0,0,528,529,5,351,0,0,529,535,5,348,0,0,530,531,
        5,55,0,0,531,532,5,351,0,0,532,535,3,282,141,0,533,535,3,18,9,0,
        534,521,1,0,0,0,534,524,1,0,0,0,534,527,1,0,0,0,534,530,1,0,0,0,
        534,533,1,0,0,0,535,17,1,0,0,0,536,540,7,0,0,0,537,539,3,284,142,
        0,538,537,1,0,0,0,539,542,1,0,0,0,540,538,1,0,0,0,540,541,1,0,0,
        0,541,543,1,0,0,0,542,540,1,0,0,0,543,544,3,122,61,0,544,19,1,0,
        0,0,545,546,5,61,0,0,546,550,5,369,0,0,547,549,3,22,11,0,548,547,
        1,0,0,0,549,552,1,0,0,0,550,548,1,0,0,0,550,551,1,0,0,0,551,553,
        1,0,0,0,552,550,1,0,0,0,553,554,3,122,61,0,554,21,1,0,0,0,555,556,
        5,62,0,0,556,557,5,351,0,0,557,574,3,124,62,0,558,559,5,63,0,0,559,
        560,5,351,0,0,560,574,5,348,0,0,561,562,5,64,0,0,562,563,5,351,0,
        0,563,574,5,348,0,0,564,565,5,65,0,0,565,566,5,351,0,0,566,567,5,
        357,0,0,567,568,5,358,0,0,568,569,5,359,0,0,569,574,5,360,0,0,570,
        571,5,66,0,0,571,572,5,351,0,0,572,574,7,1,0,0,573,555,1,0,0,0,573,
        558,1,0,0,0,573,561,1,0,0,0,573,564,1,0,0,0,573,570,1,0,0,0,574,
        23,1,0,0,0,575,576,5,68,0,0,576,580,5,369,0,0,577,579,3,26,13,0,
        578,577,1,0,0,0,579,582,1,0,0,0,580,578,1,0,0,0,580,581,1,0,0,0,
        581,583,1,0,0,0,582,580,1,0,0,0,583,584,3,122,61,0,584,25,1,0,0,
        0,585,586,5,69,0,0,586,587,5,351,0,0,587,601,5,369,0,0,588,589,5,
        70,0,0,589,590,5,351,0,0,590,601,5,348,0,0,591,592,5,71,0,0,592,
        593,5,351,0,0,593,601,5,367,0,0,594,595,5,72,0,0,595,596,5,351,0,
        0,596,601,5,348,0,0,597,598,5,73,0,0,598,599,5,351,0,0,599,601,5,
        369,0,0,600,585,1,0,0,0,600,588,1,0,0,0,600,591,1,0,0,0,600,594,
        1,0,0,0,600,597,1,0,0,0,601,27,1,0,0,0,602,603,5,74,0,0,603,607,
        5,369,0,0,604,606,3,30,15,0,605,604,1,0,0,0,606,609,1,0,0,0,607,
        605,1,0,0,0,607,608,1,0,0,0,608,610,1,0,0,0,609,607,1,0,0,0,610,
        611,3,122,61,0,611,29,1,0,0,0,612,613,5,74,0,0,613,614,5,351,0,0,
        614,615,5,369,0,0,615,616,5,350,0,0,616,31,1,0,0,0,617,618,5,75,
        0,0,618,619,5,369,0,0,619,625,5,370,0,0,620,621,3,34,17,0,621,622,
        5,370,0,0,622,624,1,0,0,0,623,620,1,0,0,0,624,627,1,0,0,0,625,623,
        1,0,0,0,625,626,1,0,0,0,626,628,1,0,0,0,627,625,1,0,0,0,628,629,
        3,122,61,0,629,33,1,0,0,0,630,648,3,126,63,0,631,648,3,130,65,0,
        632,648,3,134,67,0,633,648,3,136,68,0,634,648,3,140,70,0,635,648,
        3,142,71,0,636,648,3,144,72,0,637,648,3,146,73,0,638,648,3,148,74,
        0,639,648,3,150,75,0,640,648,3,152,76,0,641,648,3,154,77,0,642,648,
        3,280,140,0,643,648,3,284,142,0,644,648,3,288,144,0,645,648,3,294,
        147,0,646,648,3,298,149,0,647,630,1,0,0,0,647,631,1,0,0,0,647,632,
        1,0,0,0,647,633,1,0,0,0,647,634,1,0,0,0,647,635,1,0,0,0,647,636,
        1,0,0,0,647,637,1,0,0,0,647,638,1,0,0,0,647,639,1,0,0,0,647,640,
        1,0,0,0,647,641,1,0,0,0,647,642,1,0,0,0,647,643,1,0,0,0,647,644,
        1,0,0,0,647,645,1,0,0,0,647,646,1,0,0,0,648,35,1,0,0,0,649,650,5,
        76,0,0,650,654,5,369,0,0,651,653,3,38,19,0,652,651,1,0,0,0,653,656,
        1,0,0,0,654,652,1,0,0,0,654,655,1,0,0,0,655,657,1,0,0,0,656,654,
        1,0,0,0,657,658,3,122,61,0,658,37,1,0,0,0,659,660,5,348,0,0,660,
        661,5,351,0,0,661,662,3,266,133,0,662,39,1,0,0,0,663,664,5,77,0,
        0,664,668,5,369,0,0,665,667,3,42,21,0,666,665,1,0,0,0,667,670,1,
        0,0,0,668,666,1,0,0,0,668,669,1,0,0,0,669,671,1,0,0,0,670,668,1,
        0,0,0,671,672,3,122,61,0,672,41,1,0,0,0,673,680,3,156,78,0,674,680,
        3,160,80,0,675,680,3,162,81,0,676,680,3,164,82,0,677,680,3,158,79,
        0,678,680,3,166,83,0,679,673,1,0,0,0,679,674,1,0,0,0,679,675,1,0,
        0,0,679,676,1,0,0,0,679,677,1,0,0,0,679,678,1,0,0,0,680,43,1,0,0,
        0,681,685,5,78,0,0,682,684,3,46,23,0,683,682,1,0,0,0,684,687,1,0,
        0,0,685,683,1,0,0,0,685,686,1,0,0,0,686,688,1,0,0,0,687,685,1,0,
        0,0,688,689,3,122,61,0,689,45,1,0,0,0,690,701,3,168,84,0,691,701,
        3,170,85,0,692,701,3,172,86,0,693,701,3,174,87,0,694,701,3,176,88,
        0,695,701,3,178,89,0,696,701,3,180,90,0,697,701,3,182,91,0,698,701,
        3,184,92,0,699,701,3,186,93,0,700,690,1,0,0,0,700,691,1,0,0,0,700,
        692,1,0,0,0,700,693,1,0,0,0,700,694,1,0,0,0,700,695,1,0,0,0,700,
        696,1,0,0,0,700,697,1,0,0,0,700,698,1,0,0,0,700,699,1,0,0,0,701,
        47,1,0,0,0,702,703,5,79,0,0,703,707,5,369,0,0,704,706,3,50,25,0,
        705,704,1,0,0,0,706,709,1,0,0,0,707,705,1,0,0,0,707,708,1,0,0,0,
        708,710,1,0,0,0,709,707,1,0,0,0,710,711,3,122,61,0,711,49,1,0,0,
        0,712,721,3,52,26,0,713,721,3,54,27,0,714,721,3,56,28,0,715,721,
        3,58,29,0,716,721,3,60,30,0,717,721,3,62,31,0,718,721,3,64,32,0,
        719,721,3,66,33,0,720,712,1,0,0,0,720,713,1,0,0,0,720,714,1,0,0,
        0,720,715,1,0,0,0,720,716,1,0,0,0,720,717,1,0,0,0,720,718,1,0,0,
        0,720,719,1,0,0,0,721,51,1,0,0,0,722,739,5,80,0,0,723,738,3,188,
        94,0,724,738,3,190,95,0,725,738,3,192,96,0,726,738,3,196,98,0,727,
        738,3,194,97,0,728,738,3,198,99,0,729,738,3,200,100,0,730,738,3,
        202,101,0,731,738,3,204,102,0,732,738,3,206,103,0,733,738,3,210,
        105,0,734,738,3,208,104,0,735,738,3,212,106,0,736,738,3,214,107,
        0,737,723,1,0,0,0,737,724,1,0,0,0,737,725,1,0,0,0,737,726,1,0,0,
        0,737,727,1,0,0,0,737,728,1,0,0,0,737,729,1,0,0,0,737,730,1,0,0,
        0,737,731,1,0,0,0,737,732,1,0,0,0,737,733,1,0,0,0,737,734,1,0,0,
        0,737,735,1,0,0,0,737,736,1,0,0,0,738,741,1,0,0,0,739,737,1,0,0,
        0,739,740,1,0,0,0,740,742,1,0,0,0,741,739,1,0,0,0,742,743,3,122,
        61,0,743,53,1,0,0,0,744,748,5,81,0,0,745,747,3,216,108,0,746,745,
        1,0,0,0,747,750,1,0,0,0,748,746,1,0,0,0,748,749,1,0,0,0,749,751,
        1,0,0,0,750,748,1,0,0,0,751,752,3,122,61,0,752,55,1,0,0,0,753,759,
        5,82,0,0,754,758,3,260,130,0,755,758,3,218,109,0,756,758,3,220,110,
        0,757,754,1,0,0,0,757,755,1,0,0,0,757,756,1,0,0,0,758,761,1,0,0,
        0,759,757,1,0,0,0,759,760,1,0,0,0,760,762,1,0,0,0,761,759,1,0,0,
        0,762,763,3,122,61,0,763,57,1,0,0,0,764,775,5,83,0,0,765,774,3,222,
        111,0,766,774,3,224,112,0,767,774,3,226,113,0,768,774,3,228,114,
        0,769,774,3,230,115,0,770,774,3,232,116,0,771,774,3,234,117,0,772,
        774,3,236,118,0,773,765,1,0,0,0,773,766,1,0,0,0,773,767,1,0,0,0,
        773,768,1,0,0,0,773,769,1,0,0,0,773,770,1,0,0,0,773,771,1,0,0,0,
        773,772,1,0,0,0,774,777,1,0,0,0,775,773,1,0,0,0,775,776,1,0,0,0,
        776,778,1,0,0,0,777,775,1,0,0,0,778,779,3,122,61,0,779,59,1,0,0,
        0,780,788,5,84,0,0,781,787,3,238,119,0,782,787,3,240,120,0,783,787,
        3,242,121,0,784,787,3,244,122,0,785,787,3,246,123,0,786,781,1,0,
        0,0,786,782,1,0,0,0,786,783,1,0,0,0,786,784,1,0,0,0,786,785,1,0,
        0,0,787,790,1,0,0,0,788,786,1,0,0,0,788,789,1,0,0,0,789,791,1,0,
        0,0,790,788,1,0,0,0,791,792,3,122,61,0,792,61,1,0,0,0,793,797,5,
        85,0,0,794,796,3,248,124,0,795,794,1,0,0,0,796,799,1,0,0,0,797,795,
        1,0,0,0,797,798,1,0,0,0,798,800,1,0,0,0,799,797,1,0,0,0,800,801,
        3,122,61,0,801,63,1,0,0,0,802,807,5,86,0,0,803,806,3,250,125,0,804,
        806,3,252,126,0,805,803,1,0,0,0,805,804,1,0,0,0,806,809,1,0,0,0,
        807,805,1,0,0,0,807,808,1,0,0,0,808,810,1,0,0,0,809,807,1,0,0,0,
        810,811,3,122,61,0,811,65,1,0,0,0,812,818,5,87,0,0,813,817,3,254,
        127,0,814,817,3,256,128,0,815,817,3,258,129,0,816,813,1,0,0,0,816,
        814,1,0,0,0,816,815,1,0,0,0,817,820,1,0,0,0,818,816,1,0,0,0,818,
        819,1,0,0,0,819,821,1,0,0,0,820,818,1,0,0,0,821,822,3,122,61,0,822,
        67,1,0,0,0,823,828,5,88,0,0,824,827,3,262,131,0,825,827,3,70,35,
        0,826,824,1,0,0,0,826,825,1,0,0,0,827,830,1,0,0,0,828,826,1,0,0,
        0,828,829,1,0,0,0,829,831,1,0,0,0,830,828,1,0,0,0,831,832,3,122,
        61,0,832,69,1,0,0,0,833,837,7,2,0,0,834,836,3,72,36,0,835,834,1,
        0,0,0,836,839,1,0,0,0,837,835,1,0,0,0,837,838,1,0,0,0,838,840,1,
        0,0,0,839,837,1,0,0,0,840,841,3,122,61,0,841,71,1,0,0,0,842,843,
        5,62,0,0,843,844,5,351,0,0,844,867,5,369,0,0,845,846,5,118,0,0,846,
        847,5,351,0,0,847,867,5,369,0,0,848,849,5,119,0,0,849,850,5,351,
        0,0,850,867,5,350,0,0,851,852,5,120,0,0,852,853,5,351,0,0,853,867,
        5,350,0,0,854,855,5,121,0,0,855,856,5,351,0,0,856,867,5,348,0,0,
        857,858,5,122,0,0,858,859,5,351,0,0,859,860,5,361,0,0,860,861,5,
        362,0,0,861,862,5,363,0,0,862,867,5,364,0,0,863,864,5,123,0,0,864,
        865,5,351,0,0,865,867,5,367,0,0,866,842,1,0,0,0,866,845,1,0,0,0,
        866,848,1,0,0,0,866,851,1,0,0,0,866,854,1,0,0,0,866,857,1,0,0,0,
        866,863,1,0,0,0,867,73,1,0,0,0,868,869,5,124,0,0,869,873,5,369,0,
        0,870,872,3,76,38,0,871,870,1,0,0,0,872,875,1,0,0,0,873,871,1,0,
        0,0,873,874,1,0,0,0,874,876,1,0,0,0,875,873,1,0,0,0,876,877,3,122,
        61,0,877,75,1,0,0,0,878,1051,3,78,39,0,879,1051,3,80,40,0,880,1051,
        3,82,41,0,881,1051,3,84,42,0,882,883,5,125,0,0,883,884,5,351,0,0,
        884,1051,7,3,0,0,885,886,5,126,0,0,886,887,5,351,0,0,887,1051,7,
        3,0,0,888,889,5,127,0,0,889,890,5,351,0,0,890,1051,7,3,0,0,891,892,
        5,128,0,0,892,893,5,351,0,0,893,1051,7,3,0,0,894,895,5,129,0,0,895,
        896,5,351,0,0,896,1051,7,3,0,0,897,898,5,130,0,0,898,899,5,351,0,
        0,899,1051,7,3,0,0,900,901,5,131,0,0,901,902,5,351,0,0,902,1051,
        7,3,0,0,903,904,5,132,0,0,904,905,5,351,0,0,905,1051,5,348,0,0,906,
        907,5,133,0,0,907,908,5,351,0,0,908,1051,5,348,0,0,909,910,5,134,
        0,0,910,911,5,351,0,0,911,1051,5,348,0,0,912,913,5,135,0,0,913,914,
        5,351,0,0,914,1051,5,367,0,0,915,916,5,136,0,0,916,917,5,351,0,0,
        917,1051,7,3,0,0,918,919,5,137,0,0,919,920,5,351,0,0,920,1051,7,
        3,0,0,921,922,5,138,0,0,922,923,5,351,0,0,923,1051,7,3,0,0,924,925,
        5,139,0,0,925,926,5,351,0,0,926,1051,7,3,0,0,927,928,5,140,0,0,928,
        929,5,351,0,0,929,1051,7,3,0,0,930,931,5,141,0,0,931,932,5,351,0,
        0,932,1051,7,3,0,0,933,934,5,142,0,0,934,935,5,351,0,0,935,1051,
        5,348,0,0,936,937,5,143,0,0,937,938,5,351,0,0,938,1051,7,3,0,0,939,
        940,5,144,0,0,940,941,5,351,0,0,941,1051,7,3,0,0,942,943,5,145,0,
        0,943,944,5,351,0,0,944,1051,7,3,0,0,945,946,5,146,0,0,946,947,5,
        351,0,0,947,1051,7,3,0,0,948,949,5,147,0,0,949,950,5,351,0,0,950,
        1051,7,3,0,0,951,952,5,148,0,0,952,953,5,351,0,0,953,1051,7,3,0,
        0,954,955,5,149,0,0,955,956,5,351,0,0,956,1051,7,3,0,0,957,958,5,
        150,0,0,958,959,5,351,0,0,959,1051,7,3,0,0,960,961,5,151,0,0,961,
        962,5,351,0,0,962,1051,5,367,0,0,963,964,5,152,0,0,964,965,5,351,
        0,0,965,1051,5,348,0,0,966,967,5,153,0,0,967,968,5,351,0,0,968,1051,
        5,367,0,0,969,970,5,154,0,0,970,971,5,351,0,0,971,1051,5,367,0,0,
        972,973,5,155,0,0,973,974,5,351,0,0,974,1051,5,367,0,0,975,976,5,
        156,0,0,976,977,5,351,0,0,977,1051,7,3,0,0,978,979,5,157,0,0,979,
        980,5,351,0,0,980,1051,7,3,0,0,981,982,5,158,0,0,982,983,5,351,0,
        0,983,1051,5,348,0,0,984,985,5,159,0,0,985,986,5,351,0,0,986,1051,
        5,367,0,0,987,988,5,160,0,0,988,989,5,351,0,0,989,1051,7,3,0,0,990,
        991,5,161,0,0,991,992,5,351,0,0,992,1051,7,3,0,0,993,994,5,162,0,
        0,994,995,5,351,0,0,995,1051,7,3,0,0,996,997,5,163,0,0,997,998,5,
        351,0,0,998,1051,7,3,0,0,999,1000,5,164,0,0,1000,1001,5,351,0,0,
        1001,1051,7,3,0,0,1002,1003,5,165,0,0,1003,1004,5,351,0,0,1004,1051,
        7,3,0,0,1005,1006,5,166,0,0,1006,1007,5,351,0,0,1007,1051,5,367,
        0,0,1008,1009,5,167,0,0,1009,1010,5,351,0,0,1010,1051,5,348,0,0,
        1011,1012,5,168,0,0,1012,1013,5,351,0,0,1013,1051,5,348,0,0,1014,
        1015,5,169,0,0,1015,1016,5,351,0,0,1016,1051,7,3,0,0,1017,1018,5,
        170,0,0,1018,1019,5,351,0,0,1019,1051,7,3,0,0,1020,1021,5,171,0,
        0,1021,1022,5,351,0,0,1022,1051,5,348,0,0,1023,1024,5,172,0,0,1024,
        1025,5,351,0,0,1025,1051,7,3,0,0,1026,1027,5,173,0,0,1027,1028,5,
        351,0,0,1028,1051,5,348,0,0,1029,1030,5,174,0,0,1030,1031,5,351,
        0,0,1031,1051,5,348,0,0,1032,1033,5,175,0,0,1033,1034,5,351,0,0,
        1034,1051,5,348,0,0,1035,1036,5,176,0,0,1036,1037,5,351,0,0,1037,
        1051,5,367,0,0,1038,1039,5,177,0,0,1039,1040,5,351,0,0,1040,1051,
        7,3,0,0,1041,1042,5,178,0,0,1042,1043,5,351,0,0,1043,1051,7,3,0,
        0,1044,1045,5,179,0,0,1045,1046,5,351,0,0,1046,1051,7,3,0,0,1047,
        1048,5,180,0,0,1048,1049,5,351,0,0,1049,1051,7,3,0,0,1050,878,1,
        0,0,0,1050,879,1,0,0,0,1050,880,1,0,0,0,1050,881,1,0,0,0,1050,882,
        1,0,0,0,1050,885,1,0,0,0,1050,888,1,0,0,0,1050,891,1,0,0,0,1050,
        894,1,0,0,0,1050,897,1,0,0,0,1050,900,1,0,0,0,1050,903,1,0,0,0,1050,
        906,1,0,0,0,1050,909,1,0,0,0,1050,912,1,0,0,0,1050,915,1,0,0,0,1050,
        918,1,0,0,0,1050,921,1,0,0,0,1050,924,1,0,0,0,1050,927,1,0,0,0,1050,
        930,1,0,0,0,1050,933,1,0,0,0,1050,936,1,0,0,0,1050,939,1,0,0,0,1050,
        942,1,0,0,0,1050,945,1,0,0,0,1050,948,1,0,0,0,1050,951,1,0,0,0,1050,
        954,1,0,0,0,1050,957,1,0,0,0,1050,960,1,0,0,0,1050,963,1,0,0,0,1050,
        966,1,0,0,0,1050,969,1,0,0,0,1050,972,1,0,0,0,1050,975,1,0,0,0,1050,
        978,1,0,0,0,1050,981,1,0,0,0,1050,984,1,0,0,0,1050,987,1,0,0,0,1050,
        990,1,0,0,0,1050,993,1,0,0,0,1050,996,1,0,0,0,1050,999,1,0,0,0,1050,
        1002,1,0,0,0,1050,1005,1,0,0,0,1050,1008,1,0,0,0,1050,1011,1,0,0,
        0,1050,1014,1,0,0,0,1050,1017,1,0,0,0,1050,1020,1,0,0,0,1050,1023,
        1,0,0,0,1050,1026,1,0,0,0,1050,1029,1,0,0,0,1050,1032,1,0,0,0,1050,
        1035,1,0,0,0,1050,1038,1,0,0,0,1050,1041,1,0,0,0,1050,1044,1,0,0,
        0,1050,1047,1,0,0,0,1051,77,1,0,0,0,1052,1053,5,181,0,0,1053,1055,
        5,351,0,0,1054,1056,3,86,43,0,1055,1054,1,0,0,0,1056,1057,1,0,0,
        0,1057,1055,1,0,0,0,1057,1058,1,0,0,0,1058,79,1,0,0,0,1059,1060,
        5,182,0,0,1060,1061,5,351,0,0,1061,1062,3,88,44,0,1062,81,1,0,0,
        0,1063,1064,5,183,0,0,1064,1065,5,351,0,0,1065,1066,3,90,45,0,1066,
        83,1,0,0,0,1067,1068,5,184,0,0,1068,1069,5,351,0,0,1069,1070,3,92,
        46,0,1070,85,1,0,0,0,1071,1072,5,369,0,0,1072,87,1,0,0,0,1073,1074,
        5,369,0,0,1074,89,1,0,0,0,1075,1076,5,369,0,0,1076,91,1,0,0,0,1077,
        1078,5,369,0,0,1078,93,1,0,0,0,1079,1080,5,185,0,0,1080,1084,5,369,
        0,0,1081,1083,3,96,48,0,1082,1081,1,0,0,0,1083,1086,1,0,0,0,1084,
        1082,1,0,0,0,1084,1085,1,0,0,0,1085,1087,1,0,0,0,1086,1084,1,0,0,
        0,1087,1088,3,122,61,0,1088,95,1,0,0,0,1089,1200,3,98,49,0,1090,
        1200,3,100,50,0,1091,1200,3,102,51,0,1092,1200,3,104,52,0,1093,1200,
        3,106,53,0,1094,1095,5,186,0,0,1095,1096,5,351,0,0,1096,1200,7,3,
        0,0,1097,1098,5,187,0,0,1098,1099,5,351,0,0,1099,1200,7,3,0,0,1100,
        1101,5,188,0,0,1101,1102,5,351,0,0,1102,1200,7,3,0,0,1103,1104,5,
        189,0,0,1104,1105,5,351,0,0,1105,1200,7,3,0,0,1106,1107,5,190,0,
        0,1107,1108,5,351,0,0,1108,1200,7,3,0,0,1109,1110,5,191,0,0,1110,
        1111,5,351,0,0,1111,1200,7,3,0,0,1112,1113,5,192,0,0,1113,1114,5,
        351,0,0,1114,1200,5,348,0,0,1115,1116,5,193,0,0,1116,1117,5,351,
        0,0,1117,1200,5,367,0,0,1118,1119,5,194,0,0,1119,1120,5,351,0,0,
        1120,1200,5,367,0,0,1121,1122,5,195,0,0,1122,1123,5,351,0,0,1123,
        1200,7,3,0,0,1124,1125,5,196,0,0,1125,1126,5,351,0,0,1126,1200,7,
        3,0,0,1127,1128,5,197,0,0,1128,1129,5,351,0,0,1129,1200,3,276,138,
        0,1130,1131,5,198,0,0,1131,1132,5,351,0,0,1132,1133,5,353,0,0,1133,
        1200,3,276,138,0,1134,1135,5,199,0,0,1135,1136,5,351,0,0,1136,1200,
        3,282,141,0,1137,1138,5,200,0,0,1138,1139,5,351,0,0,1139,1200,5,
        367,0,0,1140,1141,5,201,0,0,1141,1142,5,351,0,0,1142,1200,7,3,0,
        0,1143,1144,5,202,0,0,1144,1145,5,351,0,0,1145,1200,5,348,0,0,1146,
        1147,5,203,0,0,1147,1148,5,351,0,0,1148,1200,7,3,0,0,1149,1150,5,
        204,0,0,1150,1151,5,351,0,0,1151,1200,5,367,0,0,1152,1153,5,205,
        0,0,1153,1154,5,351,0,0,1154,1200,3,278,139,0,1155,1156,5,206,0,
        0,1156,1157,5,351,0,0,1157,1158,5,353,0,0,1158,1200,3,278,139,0,
        1159,1160,5,207,0,0,1160,1161,5,351,0,0,1161,1200,3,278,139,0,1162,
        1163,5,208,0,0,1163,1164,5,351,0,0,1164,1200,3,292,146,0,1165,1166,
        5,209,0,0,1166,1167,5,351,0,0,1167,1200,7,3,0,0,1168,1169,5,210,
        0,0,1169,1170,5,351,0,0,1170,1200,5,348,0,0,1171,1172,5,211,0,0,
        1172,1173,5,351,0,0,1173,1200,5,348,0,0,1174,1175,5,212,0,0,1175,
        1176,5,351,0,0,1176,1200,7,3,0,0,1177,1178,5,213,0,0,1178,1180,5,
        351,0,0,1179,1181,5,369,0,0,1180,1179,1,0,0,0,1181,1182,1,0,0,0,
        1182,1180,1,0,0,0,1182,1183,1,0,0,0,1183,1200,1,0,0,0,1184,1185,
        5,214,0,0,1185,1186,5,351,0,0,1186,1200,5,348,0,0,1187,1188,5,215,
        0,0,1188,1189,5,351,0,0,1189,1200,5,367,0,0,1190,1191,5,216,0,0,
        1191,1192,5,351,0,0,1192,1200,5,367,0,0,1193,1194,5,217,0,0,1194,
        1195,5,351,0,0,1195,1200,5,367,0,0,1196,1197,5,218,0,0,1197,1198,
        5,351,0,0,1198,1200,5,369,0,0,1199,1089,1,0,0,0,1199,1090,1,0,0,
        0,1199,1091,1,0,0,0,1199,1092,1,0,0,0,1199,1093,1,0,0,0,1199,1094,
        1,0,0,0,1199,1097,1,0,0,0,1199,1100,1,0,0,0,1199,1103,1,0,0,0,1199,
        1106,1,0,0,0,1199,1109,1,0,0,0,1199,1112,1,0,0,0,1199,1115,1,0,0,
        0,1199,1118,1,0,0,0,1199,1121,1,0,0,0,1199,1124,1,0,0,0,1199,1127,
        1,0,0,0,1199,1130,1,0,0,0,1199,1134,1,0,0,0,1199,1137,1,0,0,0,1199,
        1140,1,0,0,0,1199,1143,1,0,0,0,1199,1146,1,0,0,0,1199,1149,1,0,0,
        0,1199,1152,1,0,0,0,1199,1155,1,0,0,0,1199,1159,1,0,0,0,1199,1162,
        1,0,0,0,1199,1165,1,0,0,0,1199,1168,1,0,0,0,1199,1171,1,0,0,0,1199,
        1174,1,0,0,0,1199,1177,1,0,0,0,1199,1184,1,0,0,0,1199,1187,1,0,0,
        0,1199,1190,1,0,0,0,1199,1193,1,0,0,0,1199,1196,1,0,0,0,1200,97,
        1,0,0,0,1201,1202,5,219,0,0,1202,1203,5,351,0,0,1203,1204,3,112,
        56,0,1204,99,1,0,0,0,1205,1206,5,220,0,0,1206,1207,5,351,0,0,1207,
        1208,3,114,57,0,1208,101,1,0,0,0,1209,1210,5,221,0,0,1210,1212,5,
        351,0,0,1211,1213,3,116,58,0,1212,1211,1,0,0,0,1213,1214,1,0,0,0,
        1214,1212,1,0,0,0,1214,1215,1,0,0,0,1215,103,1,0,0,0,1216,1217,5,
        222,0,0,1217,1218,5,351,0,0,1218,1219,3,108,54,0,1219,1220,3,110,
        55,0,1220,1221,5,350,0,0,1221,105,1,0,0,0,1222,1223,5,223,0,0,1223,
        1224,5,351,0,0,1224,1225,3,112,56,0,1225,107,1,0,0,0,1226,1227,5,
        369,0,0,1227,109,1,0,0,0,1228,1229,5,369,0,0,1229,111,1,0,0,0,1230,
        1231,5,369,0,0,1231,113,1,0,0,0,1232,1233,5,369,0,0,1233,115,1,0,
        0,0,1234,1235,5,369,0,0,1235,117,1,0,0,0,1236,1240,5,224,0,0,1237,
        1239,3,120,60,0,1238,1237,1,0,0,0,1239,1242,1,0,0,0,1240,1238,1,
        0,0,0,1240,1241,1,0,0,0,1241,1243,1,0,0,0,1242,1240,1,0,0,0,1243,
        1244,3,122,61,0,1244,119,1,0,0,0,1245,1246,5,225,0,0,1246,1247,5,
        351,0,0,1247,1285,5,367,0,0,1248,1249,5,226,0,0,1249,1250,5,351,
        0,0,1250,1285,3,124,62,0,1251,1252,5,227,0,0,1252,1253,5,351,0,0,
        1253,1285,5,348,0,0,1254,1255,5,228,0,0,1255,1256,5,351,0,0,1256,
        1285,7,3,0,0,1257,1258,5,229,0,0,1258,1259,5,351,0,0,1259,1285,7,
        3,0,0,1260,1261,5,230,0,0,1261,1262,5,351,0,0,1262,1285,7,3,0,0,
        1263,1264,5,231,0,0,1264,1265,5,351,0,0,1265,1285,7,3,0,0,1266,1267,
        5,232,0,0,1267,1268,5,351,0,0,1268,1285,7,3,0,0,1269,1270,5,233,
        0,0,1270,1271,5,351,0,0,1271,1285,7,3,0,0,1272,1273,5,234,0,0,1273,
        1274,5,351,0,0,1274,1285,7,3,0,0,1275,1276,5,235,0,0,1276,1277,5,
        351,0,0,1277,1285,7,3,0,0,1278,1279,5,236,0,0,1279,1280,5,351,0,
        0,1280,1285,5,367,0,0,1281,1282,5,237,0,0,1282,1283,5,351,0,0,1283,
        1285,7,3,0,0,1284,1245,1,0,0,0,1284,1248,1,0,0,0,1284,1251,1,0,0,
        0,1284,1254,1,0,0,0,1284,1257,1,0,0,0,1284,1260,1,0,0,0,1284,1263,
        1,0,0,0,1284,1266,1,0,0,0,1284,1269,1,0,0,0,1284,1272,1,0,0,0,1284,
        1275,1,0,0,0,1284,1278,1,0,0,0,1284,1281,1,0,0,0,1285,121,1,0,0,
        0,1286,1287,7,4,0,0,1287,123,1,0,0,0,1288,1289,5,369,0,0,1289,1290,
        5,241,0,0,1290,1291,7,5,0,0,1291,125,1,0,0,0,1292,1293,5,244,0,0,
        1293,1294,5,351,0,0,1294,1295,3,128,64,0,1295,127,1,0,0,0,1296,1297,
        5,369,0,0,1297,129,1,0,0,0,1298,1299,5,245,0,0,1299,1301,5,351,0,
        0,1300,1302,3,132,66,0,1301,1300,1,0,0,0,1302,1303,1,0,0,0,1303,
        1301,1,0,0,0,1303,1304,1,0,0,0,1304,131,1,0,0,0,1305,1306,5,369,
        0,0,1306,133,1,0,0,0,1307,1308,5,246,0,0,1308,1309,5,351,0,0,1309,
        1310,3,274,137,0,1310,135,1,0,0,0,1311,1312,5,247,0,0,1312,1313,
        5,351,0,0,1313,1314,3,138,69,0,1314,137,1,0,0,0,1315,1316,5,369,
        0,0,1316,139,1,0,0,0,1317,1318,5,248,0,0,1318,1319,5,351,0,0,1319,
        1320,5,369,0,0,1320,141,1,0,0,0,1321,1322,5,249,0,0,1322,1323,5,
        351,0,0,1323,1324,5,369,0,0,1324,143,1,0,0,0,1325,1326,5,250,0,0,
        1326,1327,5,351,0,0,1327,1328,5,369,0,0,1328,145,1,0,0,0,1329,1330,
        5,251,0,0,1330,1331,5,351,0,0,1331,1332,3,268,134,0,1332,147,1,0,
        0,0,1333,1334,5,252,0,0,1334,1335,5,351,0,0,1335,1336,3,270,135,
        0,1336,149,1,0,0,0,1337,1338,5,253,0,0,1338,1339,5,351,0,0,1339,
        1340,3,272,136,0,1340,151,1,0,0,0,1341,1342,5,254,0,0,1342,1343,
        5,351,0,0,1343,1344,3,292,146,0,1344,153,1,0,0,0,1345,1346,5,255,
        0,0,1346,1347,5,351,0,0,1347,1348,5,348,0,0,1348,155,1,0,0,0,1349,
        1350,5,256,0,0,1350,1351,5,351,0,0,1351,1352,3,112,56,0,1352,1353,
        5,348,0,0,1353,157,1,0,0,0,1354,1355,5,257,0,0,1355,1356,5,351,0,
        0,1356,1357,3,112,56,0,1357,1358,5,349,0,0,1358,159,1,0,0,0,1359,
        1360,5,258,0,0,1360,1361,5,351,0,0,1361,1362,3,112,56,0,1362,1363,
        5,369,0,0,1363,161,1,0,0,0,1364,1365,5,259,0,0,1365,1366,5,351,0,
        0,1366,1367,3,112,56,0,1367,1368,5,369,0,0,1368,163,1,0,0,0,1369,
        1370,5,260,0,0,1370,1371,5,351,0,0,1371,1372,5,353,0,0,1372,1373,
        3,112,56,0,1373,1374,5,369,0,0,1374,165,1,0,0,0,1375,1376,5,261,
        0,0,1376,1377,5,351,0,0,1377,1378,5,353,0,0,1378,1379,3,112,56,0,
        1379,1380,5,369,0,0,1380,167,1,0,0,0,1381,1382,5,262,0,0,1382,1383,
        5,351,0,0,1383,1384,5,367,0,0,1384,169,1,0,0,0,1385,1386,5,263,0,
        0,1386,1387,5,351,0,0,1387,1388,5,361,0,0,1388,1389,5,362,0,0,1389,
        1390,5,363,0,0,1390,1391,5,364,0,0,1391,171,1,0,0,0,1392,1393,5,
        264,0,0,1393,1394,5,351,0,0,1394,1395,5,361,0,0,1395,1396,5,362,
        0,0,1396,1397,5,363,0,0,1397,1398,5,364,0,0,1398,173,1,0,0,0,1399,
        1400,5,265,0,0,1400,1401,5,351,0,0,1401,1402,5,348,0,0,1402,175,
        1,0,0,0,1403,1404,5,266,0,0,1404,1405,5,351,0,0,1405,1406,5,348,
        0,0,1406,177,1,0,0,0,1407,1408,5,267,0,0,1408,1410,5,351,0,0,1409,
        1411,5,369,0,0,1410,1409,1,0,0,0,1411,1412,1,0,0,0,1412,1410,1,0,
        0,0,1412,1413,1,0,0,0,1413,179,1,0,0,0,1414,1415,5,268,0,0,1415,
        1416,5,351,0,0,1416,1417,5,348,0,0,1417,181,1,0,0,0,1418,1419,5,
        269,0,0,1419,1420,5,351,0,0,1420,1421,5,367,0,0,1421,183,1,0,0,0,
        1422,1423,5,270,0,0,1423,1424,5,351,0,0,1424,1425,5,350,0,0,1425,
        185,1,0,0,0,1426,1427,5,271,0,0,1427,1428,5,351,0,0,1428,1429,5,
        348,0,0,1429,187,1,0,0,0,1430,1431,5,272,0,0,1431,1432,5,351,0,0,
        1432,1433,3,276,138,0,1433,189,1,0,0,0,1434,1435,5,273,0,0,1435,
        1438,5,351,0,0,1436,1439,5,348,0,0,1437,1439,3,300,150,0,1438,1436,
        1,0,0,0,1438,1437,1,0,0,0,1439,191,1,0,0,0,1440,1441,5,274,0,0,1441,
        1442,5,351,0,0,1442,1443,3,302,151,0,1443,193,1,0,0,0,1444,1445,
        5,275,0,0,1445,1448,5,351,0,0,1446,1449,7,3,0,0,1447,1449,3,300,
        150,0,1448,1446,1,0,0,0,1448,1447,1,0,0,0,1449,195,1,0,0,0,1450,
        1451,5,276,0,0,1451,1454,5,351,0,0,1452,1455,7,3,0,0,1453,1455,3,
        300,150,0,1454,1452,1,0,0,0,1454,1453,1,0,0,0,1455,197,1,0,0,0,1456,
        1457,5,277,0,0,1457,1458,5,351,0,0,1458,1459,3,300,150,0,1459,199,
        1,0,0,0,1460,1461,5,278,0,0,1461,1462,5,351,0,0,1462,1463,5,348,
        0,0,1463,201,1,0,0,0,1464,1465,5,279,0,0,1465,1466,5,351,0,0,1466,
        1467,5,348,0,0,1467,203,1,0,0,0,1468,1469,5,280,0,0,1469,1470,5,
        351,0,0,1470,1471,5,348,0,0,1471,205,1,0,0,0,1472,1473,5,281,0,0,
        1473,1474,5,351,0,0,1474,1475,5,367,0,0,1475,207,1,0,0,0,1476,1477,
        5,282,0,0,1477,1478,5,351,0,0,1478,1479,5,367,0,0,1479,209,1,0,0,
        0,1480,1481,5,283,0,0,1481,1482,5,351,0,0,1482,1483,5,367,0,0,1483,
        211,1,0,0,0,1484,1485,5,284,0,0,1485,1486,5,351,0,0,1486,1487,5,
        367,0,0,1487,213,1,0,0,0,1488,1489,5,285,0,0,1489,1490,5,351,0,0,
        1490,1491,5,367,0,0,1491,215,1,0,0,0,1492,1493,5,272,0,0,1493,1494,
        5,351,0,0,1494,1495,3,292,146,0,1495,217,1,0,0,0,1496,1497,5,286,
        0,0,1497,1498,5,351,0,0,1498,1499,3,302,151,0,1499,219,1,0,0,0,1500,
        1501,5,287,0,0,1501,1502,5,351,0,0,1502,1503,3,302,151,0,1503,221,
        1,0,0,0,1504,1505,5,288,0,0,1505,1506,5,351,0,0,1506,1507,3,282,
        141,0,1507,223,1,0,0,0,1508,1509,5,289,0,0,1509,1510,5,351,0,0,1510,
        1511,5,369,0,0,1511,225,1,0,0,0,1512,1513,5,125,0,0,1513,1514,5,
        351,0,0,1514,1515,7,3,0,0,1515,227,1,0,0,0,1516,1517,5,290,0,0,1517,
        1518,5,351,0,0,1518,1519,7,3,0,0,1519,229,1,0,0,0,1520,1521,5,291,
        0,0,1521,1522,5,351,0,0,1522,1523,7,3,0,0,1523,231,1,0,0,0,1524,
        1525,5,292,0,0,1525,1526,5,351,0,0,1526,1527,7,3,0,0,1527,233,1,
        0,0,0,1528,1529,5,122,0,0,1529,1530,5,351,0,0,1530,1531,5,361,0,
        0,1531,1532,5,362,0,0,1532,1533,5,363,0,0,1533,235,1,0,0,0,1534,
        1535,5,293,0,0,1535,1536,5,351,0,0,1536,1537,7,3,0,0,1537,237,1,
        0,0,0,1538,1539,5,122,0,0,1539,1540,5,351,0,0,1540,1541,5,361,0,
        0,1541,1542,5,362,0,0,1542,1543,5,363,0,0,1543,239,1,0,0,0,1544,
        1545,5,275,0,0,1545,1546,5,351,0,0,1546,1547,7,3,0,0,1547,241,1,
        0,0,0,1548,1549,5,294,0,0,1549,1550,5,351,0,0,1550,1551,5,350,0,
        0,1551,243,1,0,0,0,1552,1553,5,295,0,0,1553,1554,5,351,0,0,1554,
        1555,5,348,0,0,1555,245,1,0,0,0,1556,1557,5,296,0,0,1557,1558,5,
        351,0,0,1558,1559,5,348,0,0,1559,247,1,0,0,0,1560,1561,5,297,0,0,
        1561,1562,5,351,0,0,1562,1563,5,369,0,0,1563,249,1,0,0,0,1564,1565,
        5,297,0,0,1565,1566,5,351,0,0,1566,1567,5,369,0,0,1567,251,1,0,0,
        0,1568,1569,5,275,0,0,1569,1570,5,351,0,0,1570,1571,7,3,0,0,1571,
        253,1,0,0,0,1572,1573,5,298,0,0,1573,1574,5,351,0,0,1574,1575,3,
        278,139,0,1575,255,1,0,0,0,1576,1577,5,289,0,0,1577,1578,5,351,0,
        0,1578,1579,5,369,0,0,1579,257,1,0,0,0,1580,1581,5,299,0,0,1581,
        1582,5,351,0,0,1582,1583,5,367,0,0,1583,259,1,0,0,0,1584,1585,5,
        272,0,0,1585,1586,5,351,0,0,1586,1587,3,282,141,0,1587,261,1,0,0,
        0,1588,1589,5,300,0,0,1589,1590,5,351,0,0,1590,1748,5,348,0,0,1591,
        1592,5,301,0,0,1592,1593,5,351,0,0,1593,1594,5,361,0,0,1594,1595,
        5,362,0,0,1595,1748,5,363,0,0,1596,1597,5,302,0,0,1597,1598,5,351,
        0,0,1598,1599,5,361,0,0,1599,1600,5,362,0,0,1600,1748,5,363,0,0,
        1601,1602,5,303,0,0,1602,1603,5,351,0,0,1603,1604,5,354,0,0,1604,
        1748,5,355,0,0,1605,1606,5,304,0,0,1606,1607,5,351,0,0,1607,1748,
        5,369,0,0,1608,1609,5,305,0,0,1609,1610,5,351,0,0,1610,1748,5,348,
        0,0,1611,1612,5,306,0,0,1612,1613,5,351,0,0,1613,1748,5,367,0,0,
        1614,1615,5,307,0,0,1615,1616,5,351,0,0,1616,1748,5,348,0,0,1617,
        1618,5,308,0,0,1618,1619,5,351,0,0,1619,1620,5,361,0,0,1620,1621,
        5,362,0,0,1621,1622,5,363,0,0,1622,1748,5,364,0,0,1623,1624,5,309,
        0,0,1624,1625,5,351,0,0,1625,1626,5,354,0,0,1626,1748,5,355,0,0,
        1627,1628,5,310,0,0,1628,1630,5,351,0,0,1629,1631,5,369,0,0,1630,
        1629,1,0,0,0,1631,1632,1,0,0,0,1632,1630,1,0,0,0,1632,1633,1,0,0,
        0,1633,1748,1,0,0,0,1634,1635,5,311,0,0,1635,1636,5,351,0,0,1636,
        1748,5,348,0,0,1637,1638,5,312,0,0,1638,1639,5,351,0,0,1639,1748,
        5,367,0,0,1640,1641,5,313,0,0,1641,1643,5,351,0,0,1642,1644,5,369,
        0,0,1643,1642,1,0,0,0,1644,1645,1,0,0,0,1645,1643,1,0,0,0,1645,1646,
        1,0,0,0,1646,1748,1,0,0,0,1647,1648,5,314,0,0,1648,1649,5,351,0,
        0,1649,1748,5,348,0,0,1650,1651,5,315,0,0,1651,1652,5,351,0,0,1652,
        1748,5,367,0,0,1653,1654,5,316,0,0,1654,1655,5,351,0,0,1655,1748,
        5,367,0,0,1656,1657,5,317,0,0,1657,1658,5,351,0,0,1658,1659,5,354,
        0,0,1659,1748,5,355,0,0,1660,1661,5,318,0,0,1661,1662,5,351,0,0,
        1662,1748,5,348,0,0,1663,1664,5,319,0,0,1664,1665,5,351,0,0,1665,
        1666,5,361,0,0,1666,1667,5,362,0,0,1667,1748,5,363,0,0,1668,1669,
        5,320,0,0,1669,1670,5,351,0,0,1670,1748,5,369,0,0,1671,1672,5,321,
        0,0,1672,1673,5,351,0,0,1673,1748,5,348,0,0,1674,1675,5,322,0,0,
        1675,1676,5,351,0,0,1676,1748,5,367,0,0,1677,1678,5,323,0,0,1678,
        1679,5,351,0,0,1679,1748,5,369,0,0,1680,1681,5,324,0,0,1681,1682,
        5,351,0,0,1682,1748,5,348,0,0,1683,1684,5,325,0,0,1684,1685,5,351,
        0,0,1685,1748,5,367,0,0,1686,1687,5,326,0,0,1687,1688,5,351,0,0,
        1688,1689,5,354,0,0,1689,1748,5,355,0,0,1690,1691,5,327,0,0,1691,
        1692,5,351,0,0,1692,1748,5,348,0,0,1693,1694,5,328,0,0,1694,1695,
        5,351,0,0,1695,1696,5,361,0,0,1696,1697,5,362,0,0,1697,1748,5,363,
        0,0,1698,1699,5,329,0,0,1699,1700,5,351,0,0,1700,1748,5,369,0,0,
        1701,1702,5,330,0,0,1702,1703,5,351,0,0,1703,1748,5,348,0,0,1704,
        1705,5,331,0,0,1705,1706,5,351,0,0,1706,1748,5,367,0,0,1707,1708,
        5,332,0,0,1708,1709,5,351,0,0,1709,1710,5,361,0,0,1710,1711,5,362,
        0,0,1711,1748,5,363,0,0,1712,1713,5,333,0,0,1713,1714,5,351,0,0,
        1714,1748,5,369,0,0,1715,1716,5,334,0,0,1716,1717,5,351,0,0,1717,
        1748,5,348,0,0,1718,1719,5,335,0,0,1719,1720,5,351,0,0,1720,1748,
        5,367,0,0,1721,1722,5,336,0,0,1722,1723,5,351,0,0,1723,1724,5,361,
        0,0,1724,1725,5,362,0,0,1725,1748,5,363,0,0,1726,1727,5,337,0,0,
        1727,1728,5,351,0,0,1728,1748,5,348,0,0,1729,1730,5,338,0,0,1730,
        1731,5,351,0,0,1731,1748,5,348,0,0,1732,1733,5,339,0,0,1733,1734,
        5,351,0,0,1734,1748,5,348,0,0,1735,1736,5,340,0,0,1736,1737,5,351,
        0,0,1737,1748,5,367,0,0,1738,1739,5,341,0,0,1739,1740,5,351,0,0,
        1740,1748,5,367,0,0,1741,1742,5,342,0,0,1742,1743,5,351,0,0,1743,
        1744,5,361,0,0,1744,1745,5,362,0,0,1745,1746,5,363,0,0,1746,1748,
        5,364,0,0,1747,1588,1,0,0,0,1747,1591,1,0,0,0,1747,1596,1,0,0,0,
        1747,1601,1,0,0,0,1747,1605,1,0,0,0,1747,1608,1,0,0,0,1747,1611,
        1,0,0,0,1747,1614,1,0,0,0,1747,1617,1,0,0,0,1747,1623,1,0,0,0,1747,
        1627,1,0,0,0,1747,1634,1,0,0,0,1747,1637,1,0,0,0,1747,1640,1,0,0,
        0,1747,1647,1,0,0,0,1747,1650,1,0,0,0,1747,1653,1,0,0,0,1747,1656,
        1,0,0,0,1747,1660,1,0,0,0,1747,1663,1,0,0,0,1747,1668,1,0,0,0,1747,
        1671,1,0,0,0,1747,1674,1,0,0,0,1747,1677,1,0,0,0,1747,1680,1,0,0,
        0,1747,1683,1,0,0,0,1747,1686,1,0,0,0,1747,1690,1,0,0,0,1747,1693,
        1,0,0,0,1747,1698,1,0,0,0,1747,1701,1,0,0,0,1747,1704,1,0,0,0,1747,
        1707,1,0,0,0,1747,1712,1,0,0,0,1747,1715,1,0,0,0,1747,1718,1,0,0,
        0,1747,1721,1,0,0,0,1747,1726,1,0,0,0,1747,1729,1,0,0,0,1747,1732,
        1,0,0,0,1747,1735,1,0,0,0,1747,1738,1,0,0,0,1747,1741,1,0,0,0,1748,
        263,1,0,0,0,1749,1750,5,369,0,0,1750,265,1,0,0,0,1751,1752,5,369,
        0,0,1752,267,1,0,0,0,1753,1754,5,369,0,0,1754,269,1,0,0,0,1755,1756,
        5,369,0,0,1756,271,1,0,0,0,1757,1758,5,369,0,0,1758,273,1,0,0,0,
        1759,1760,5,369,0,0,1760,275,1,0,0,0,1761,1762,5,369,0,0,1762,277,
        1,0,0,0,1763,1764,5,369,0,0,1764,279,1,0,0,0,1765,1766,5,343,0,0,
        1766,1767,5,351,0,0,1767,1768,3,282,141,0,1768,281,1,0,0,0,1769,
        1770,5,369,0,0,1770,283,1,0,0,0,1771,1772,5,344,0,0,1772,1774,5,
        351,0,0,1773,1775,3,286,143,0,1774,1773,1,0,0,0,1775,1776,1,0,0,
        0,1776,1774,1,0,0,0,1776,1777,1,0,0,0,1777,285,1,0,0,0,1778,1779,
        5,369,0,0,1779,287,1,0,0,0,1780,1781,5,345,0,0,1781,1782,5,351,0,
        0,1782,1783,3,290,145,0,1783,289,1,0,0,0,1784,1785,5,369,0,0,1785,
        291,1,0,0,0,1786,1787,5,369,0,0,1787,293,1,0,0,0,1788,1789,5,346,
        0,0,1789,1790,5,351,0,0,1790,1791,3,296,148,0,1791,295,1,0,0,0,1792,
        1793,5,369,0,0,1793,297,1,0,0,0,1794,1795,5,347,0,0,1795,1797,5,
        351,0,0,1796,1798,5,352,0,0,1797,1796,1,0,0,0,1798,1799,1,0,0,0,
        1799,1797,1,0,0,0,1799,1800,1,0,0,0,1800,299,1,0,0,0,1801,1802,5,
        348,0,0,1802,1803,5,348,0,0,1803,1804,5,365,0,0,1804,301,1,0,0,0,
        1805,1806,5,354,0,0,1806,1807,5,355,0,0,1807,1808,5,356,0,0,1808,
        303,1,0,0,0,63,307,325,330,338,340,471,478,488,509,516,534,540,550,
        573,580,600,607,625,647,654,668,679,685,700,707,720,737,739,748,
        757,759,773,775,786,788,797,805,807,816,818,826,828,837,866,873,
        1050,1057,1084,1182,1199,1214,1240,1284,1303,1412,1438,1448,1454,
        1632,1645,1747,1776,1799
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!MapIniParser.__ATN) {
            MapIniParser.__ATN = new antlr.ATNDeserializer().deserialize(MapIniParser._serializedATN);
        }

        return MapIniParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(MapIniParser.literalNames, MapIniParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return MapIniParser.vocabulary;
    }

    private static readonly decisionsToDFA = MapIniParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ProgramContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EOF, 0)!;
    }
    public classes(): ClassesContext[];
    public classes(i: number): ClassesContext | null;
    public classes(i?: number): ClassesContext[] | ClassesContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ClassesContext);
        }

        return this.getRuleContext(i, ClassesContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_program;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterProgram) {
             listener.enterProgram(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitProgram) {
             listener.exitProgram(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitProgram) {
            return visitor.visitProgram(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ClassesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public mappedImageClass(): MappedImageClassContext | null {
        return this.getRuleContext(0, MappedImageClassContext);
    }
    public aiDataClass(): AiDataClassContext | null {
        return this.getRuleContext(0, AiDataClassContext);
    }
    public animation2DClass(): Animation2DClassContext | null {
        return this.getRuleContext(0, Animation2DClassContext);
    }
    public armorClass(): ArmorClassContext | null {
        return this.getRuleContext(0, ArmorClassContext);
    }
    public commandButtonClass(): CommandButtonClassContext | null {
        return this.getRuleContext(0, CommandButtonClassContext);
    }
    public commandSetClass(): CommandSetClassContext | null {
        return this.getRuleContext(0, CommandSetClassContext);
    }
    public damageFXClass(): DamageFXClassContext | null {
        return this.getRuleContext(0, DamageFXClassContext);
    }
    public drawGroupInfoClass(): DrawGroupInfoClassContext | null {
        return this.getRuleContext(0, DrawGroupInfoClassContext);
    }
    public fxListClass(): FxListClassContext | null {
        return this.getRuleContext(0, FxListClassContext);
    }
    public inGameUIClass(): InGameUIClassContext | null {
        return this.getRuleContext(0, InGameUIClassContext);
    }
    public locomotorClass(): LocomotorClassContext | null {
        return this.getRuleContext(0, LocomotorClassContext);
    }
    public weaponClass(): WeaponClassContext | null {
        return this.getRuleContext(0, WeaponClassContext);
    }
    public weatherClass(): WeatherClassContext | null {
        return this.getRuleContext(0, WeatherClassContext);
    }
    public NL(): antlr.TerminalNode[];
    public NL(i: number): antlr.TerminalNode | null;
    public NL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.NL);
    	} else {
    		return this.getToken(MapIniParser.NL, i);
    	}
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_classes;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterClasses) {
             listener.enterClasses(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitClasses) {
             listener.exitClasses(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitClasses) {
            return visitor.visitClasses(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClassContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NL(): antlr.TerminalNode {
        return this.getToken(MapIniParser.NL, 0)!;
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public aidataClassProperties_single(): AidataClassProperties_singleContext[];
    public aidataClassProperties_single(i: number): AidataClassProperties_singleContext | null;
    public aidataClassProperties_single(i?: number): AidataClassProperties_singleContext[] | AidataClassProperties_singleContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AidataClassProperties_singleContext);
        }

        return this.getRuleContext(i, AidataClassProperties_singleContext);
    }
    public aidataClassProperties_blockSideinfo(): AidataClassProperties_blockSideinfoContext[];
    public aidataClassProperties_blockSideinfo(i: number): AidataClassProperties_blockSideinfoContext | null;
    public aidataClassProperties_blockSideinfo(i?: number): AidataClassProperties_blockSideinfoContext[] | AidataClassProperties_blockSideinfoContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AidataClassProperties_blockSideinfoContext);
        }

        return this.getRuleContext(i, AidataClassProperties_blockSideinfoContext);
    }
    public aidataClassproperties_BlockSkirmishBuildList(): AidataClassproperties_BlockSkirmishBuildListContext[];
    public aidataClassproperties_BlockSkirmishBuildList(i: number): AidataClassproperties_BlockSkirmishBuildListContext | null;
    public aidataClassproperties_BlockSkirmishBuildList(i?: number): AidataClassproperties_BlockSkirmishBuildListContext[] | AidataClassproperties_BlockSkirmishBuildListContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AidataClassproperties_BlockSkirmishBuildListContext);
        }

        return this.getRuleContext(i, AidataClassproperties_BlockSkirmishBuildListContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass) {
             listener.enterAiDataClass(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass) {
             listener.exitAiDataClass(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass) {
            return visitor.visitAiDataClass(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AidataClassProperties_singleContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public FLOAT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.FLOAT, 0);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.INT, 0);
    }
    public BOOLEAN(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.BOOLEAN, 0);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aidataClassProperties_single;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAidataClassProperties_single) {
             listener.enterAidataClassProperties_single(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAidataClassProperties_single) {
             listener.exitAidataClassProperties_single(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAidataClassProperties_single) {
            return visitor.visitAidataClassProperties_single(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AidataClassproperties_BlockSkirmishBuildListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public faction_value(): Faction_valueContext {
        return this.getRuleContext(0, Faction_valueContext)!;
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public skirmishBuildListBlock(): SkirmishBuildListBlockContext[];
    public skirmishBuildListBlock(i: number): SkirmishBuildListBlockContext | null;
    public skirmishBuildListBlock(i?: number): SkirmishBuildListBlockContext[] | SkirmishBuildListBlockContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SkirmishBuildListBlockContext);
        }

        return this.getRuleContext(i, SkirmishBuildListBlockContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aidataClassproperties_BlockSkirmishBuildList;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAidataClassproperties_BlockSkirmishBuildList) {
             listener.enterAidataClassproperties_BlockSkirmishBuildList(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAidataClassproperties_BlockSkirmishBuildList) {
             listener.exitAidataClassproperties_BlockSkirmishBuildList(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAidataClassproperties_BlockSkirmishBuildList) {
            return visitor.visitAidataClassproperties_BlockSkirmishBuildList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SkirmishBuildListBlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public object_value(): Object_valueContext {
        return this.getRuleContext(0, Object_valueContext)!;
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public skirmishBuildListBlock_structure_properties(): SkirmishBuildListBlock_structure_propertiesContext[];
    public skirmishBuildListBlock_structure_properties(i: number): SkirmishBuildListBlock_structure_propertiesContext | null;
    public skirmishBuildListBlock_structure_properties(i?: number): SkirmishBuildListBlock_structure_propertiesContext[] | SkirmishBuildListBlock_structure_propertiesContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SkirmishBuildListBlock_structure_propertiesContext);
        }

        return this.getRuleContext(i, SkirmishBuildListBlock_structure_propertiesContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_skirmishBuildListBlock;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterSkirmishBuildListBlock) {
             listener.enterSkirmishBuildListBlock(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitSkirmishBuildListBlock) {
             listener.exitSkirmishBuildListBlock(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitSkirmishBuildListBlock) {
            return visitor.visitSkirmishBuildListBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SkirmishBuildListBlock_structure_propertiesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public XCOORD(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.XCOORD, 0);
    }
    public YCOORD(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.YCOORD, 0);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.INT, 0);
    }
    public FLOAT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.FLOAT, 0);
    }
    public BOOLEAN(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.BOOLEAN, 0);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_skirmishBuildListBlock_structure_properties;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterSkirmishBuildListBlock_structure_properties) {
             listener.enterSkirmishBuildListBlock_structure_properties(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitSkirmishBuildListBlock_structure_properties) {
             listener.exitSkirmishBuildListBlock_structure_properties(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitSkirmishBuildListBlock_structure_properties) {
            return visitor.visitSkirmishBuildListBlock_structure_properties(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AidataClassProperties_blockSideinfoContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public sideinfoproperties(): SideinfopropertiesContext[];
    public sideinfoproperties(i: number): SideinfopropertiesContext | null;
    public sideinfoproperties(i?: number): SideinfopropertiesContext[] | SideinfopropertiesContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SideinfopropertiesContext);
        }

        return this.getRuleContext(i, SideinfopropertiesContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aidataClassProperties_blockSideinfo;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAidataClassProperties_blockSideinfo) {
             listener.enterAidataClassProperties_blockSideinfo(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAidataClassProperties_blockSideinfo) {
             listener.exitAidataClassProperties_blockSideinfo(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAidataClassProperties_blockSideinfo) {
            return visitor.visitAidataClassProperties_blockSideinfo(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SideinfopropertiesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.EQ, 0);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.INT, 0);
    }
    public object_value(): Object_valueContext | null {
        return this.getRuleContext(0, Object_valueContext);
    }
    public sideinfo_skillset_blocks(): Sideinfo_skillset_blocksContext | null {
        return this.getRuleContext(0, Sideinfo_skillset_blocksContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_sideinfoproperties;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterSideinfoproperties) {
             listener.enterSideinfoproperties(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitSideinfoproperties) {
             listener.exitSideinfoproperties(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitSideinfoproperties) {
            return visitor.visitSideinfoproperties(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Sideinfo_skillset_blocksContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public science_property(): Science_propertyContext[];
    public science_property(i: number): Science_propertyContext | null;
    public science_property(i?: number): Science_propertyContext[] | Science_propertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Science_propertyContext);
        }

        return this.getRuleContext(i, Science_propertyContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_sideinfo_skillset_blocks;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterSideinfo_skillset_blocks) {
             listener.enterSideinfo_skillset_blocks(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitSideinfo_skillset_blocks) {
             listener.exitSideinfo_skillset_blocks(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitSideinfo_skillset_blocks) {
            return visitor.visitSideinfo_skillset_blocks(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MappedImageClassContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public mappedImageClassProperties(): MappedImageClassPropertiesContext[];
    public mappedImageClassProperties(i: number): MappedImageClassPropertiesContext | null;
    public mappedImageClassProperties(i?: number): MappedImageClassPropertiesContext[] | MappedImageClassPropertiesContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MappedImageClassPropertiesContext);
        }

        return this.getRuleContext(i, MappedImageClassPropertiesContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_mappedImageClass;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterMappedImageClass) {
             listener.enterMappedImageClass(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitMappedImageClass) {
             listener.exitMappedImageClass(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitMappedImageClass) {
            return visitor.visitMappedImageClass(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MappedImageClassPropertiesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public file(): FileContext | null {
        return this.getRuleContext(0, FileContext);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.INT, 0);
    }
    public COORDLEFT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.COORDLEFT, 0);
    }
    public COORDTOP(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.COORDTOP, 0);
    }
    public COORDRIGHT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.COORDRIGHT, 0);
    }
    public COORDBOTTOM(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.COORDBOTTOM, 0);
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.ID, 0);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_mappedImageClassProperties;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterMappedImageClassProperties) {
             listener.enterMappedImageClassProperties(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitMappedImageClassProperties) {
             listener.exitMappedImageClassProperties(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitMappedImageClassProperties) {
            return visitor.visitMappedImageClassProperties(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Animation2DClassContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public animation2DClassProperties(): Animation2DClassPropertiesContext[];
    public animation2DClassProperties(i: number): Animation2DClassPropertiesContext | null;
    public animation2DClassProperties(i?: number): Animation2DClassPropertiesContext[] | Animation2DClassPropertiesContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Animation2DClassPropertiesContext);
        }

        return this.getRuleContext(i, Animation2DClassPropertiesContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_animation2DClass;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAnimation2DClass) {
             listener.enterAnimation2DClass(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAnimation2DClass) {
             listener.exitAnimation2DClass(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAnimation2DClass) {
            return visitor.visitAnimation2DClass(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Animation2DClassPropertiesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.ID, 0);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.INT, 0);
    }
    public BOOLEAN(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.BOOLEAN, 0);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_animation2DClassProperties;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAnimation2DClassProperties) {
             listener.enterAnimation2DClassProperties(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAnimation2DClassProperties) {
             listener.exitAnimation2DClassProperties(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAnimation2DClassProperties) {
            return visitor.visitAnimation2DClassProperties(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArmorClassContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public armorClassProperties(): ArmorClassPropertiesContext[];
    public armorClassProperties(i: number): ArmorClassPropertiesContext | null;
    public armorClassProperties(i?: number): ArmorClassPropertiesContext[] | ArmorClassPropertiesContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ArmorClassPropertiesContext);
        }

        return this.getRuleContext(i, ArmorClassPropertiesContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_armorClass;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterArmorClass) {
             listener.enterArmorClass(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitArmorClass) {
             listener.exitArmorClass(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitArmorClass) {
            return visitor.visitArmorClass(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArmorClassPropertiesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public PROCENT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.PROCENT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_armorClassProperties;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterArmorClassProperties) {
             listener.enterArmorClassProperties(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitArmorClassProperties) {
             listener.exitArmorClassProperties(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitArmorClassProperties) {
            return visitor.visitArmorClassProperties(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CommandButtonClassContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public NL(): antlr.TerminalNode[];
    public NL(i: number): antlr.TerminalNode | null;
    public NL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.NL);
    	} else {
    		return this.getToken(MapIniParser.NL, i);
    	}
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public commandButtonClassProperties(): CommandButtonClassPropertiesContext[];
    public commandButtonClassProperties(i: number): CommandButtonClassPropertiesContext | null;
    public commandButtonClassProperties(i?: number): CommandButtonClassPropertiesContext[] | CommandButtonClassPropertiesContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CommandButtonClassPropertiesContext);
        }

        return this.getRuleContext(i, CommandButtonClassPropertiesContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_commandButtonClass;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterCommandButtonClass) {
             listener.enterCommandButtonClass(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitCommandButtonClass) {
             listener.exitCommandButtonClass(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitCommandButtonClass) {
            return visitor.visitCommandButtonClass(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CommandButtonClassPropertiesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public cb_command_property(): Cb_command_propertyContext | null {
        return this.getRuleContext(0, Cb_command_propertyContext);
    }
    public cb_options_property(): Cb_options_propertyContext | null {
        return this.getRuleContext(0, Cb_options_propertyContext);
    }
    public cb_buttonimage_property(): Cb_buttonimage_propertyContext | null {
        return this.getRuleContext(0, Cb_buttonimage_propertyContext);
    }
    public cb_buttonbordertype_property(): Cb_buttonbordertype_propertyContext | null {
        return this.getRuleContext(0, Cb_buttonbordertype_propertyContext);
    }
    public cb_textlabel_property(): Cb_textlabel_propertyContext | null {
        return this.getRuleContext(0, Cb_textlabel_propertyContext);
    }
    public cb_descriptionlabel_property(): Cb_descriptionlabel_propertyContext | null {
        return this.getRuleContext(0, Cb_descriptionlabel_propertyContext);
    }
    public cb_conflictinglabel_property(): Cb_conflictinglabel_propertyContext | null {
        return this.getRuleContext(0, Cb_conflictinglabel_propertyContext);
    }
    public cb_cursorname_propery(): Cb_cursorname_properyContext | null {
        return this.getRuleContext(0, Cb_cursorname_properyContext);
    }
    public cb_radius_cursorname_value(): Cb_radius_cursorname_valueContext | null {
        return this.getRuleContext(0, Cb_radius_cursorname_valueContext);
    }
    public cb_invalid_cursorname_propery(): Cb_invalid_cursorname_properyContext | null {
        return this.getRuleContext(0, Cb_invalid_cursorname_properyContext);
    }
    public cb_unitspecificsound_property(): Cb_unitspecificsound_propertyContext | null {
        return this.getRuleContext(0, Cb_unitspecificsound_propertyContext);
    }
    public cb_maxshotsfire_property(): Cb_maxshotsfire_propertyContext | null {
        return this.getRuleContext(0, Cb_maxshotsfire_propertyContext);
    }
    public object_property(): Object_propertyContext | null {
        return this.getRuleContext(0, Object_propertyContext);
    }
    public science_property(): Science_propertyContext | null {
        return this.getRuleContext(0, Science_propertyContext);
    }
    public specialpower_property(): Specialpower_propertyContext | null {
        return this.getRuleContext(0, Specialpower_propertyContext);
    }
    public upgrade_property(): Upgrade_propertyContext | null {
        return this.getRuleContext(0, Upgrade_propertyContext);
    }
    public weaponslot_property(): Weaponslot_propertyContext | null {
        return this.getRuleContext(0, Weaponslot_propertyContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_commandButtonClassProperties;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterCommandButtonClassProperties) {
             listener.enterCommandButtonClassProperties(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitCommandButtonClassProperties) {
             listener.exitCommandButtonClassProperties(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitCommandButtonClassProperties) {
            return visitor.visitCommandButtonClassProperties(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CommandSetClassContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public commandSetClassProperty(): CommandSetClassPropertyContext[];
    public commandSetClassProperty(i: number): CommandSetClassPropertyContext | null;
    public commandSetClassProperty(i?: number): CommandSetClassPropertyContext[] | CommandSetClassPropertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CommandSetClassPropertyContext);
        }

        return this.getRuleContext(i, CommandSetClassPropertyContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_commandSetClass;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterCommandSetClass) {
             listener.enterCommandSetClass(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitCommandSetClass) {
             listener.exitCommandSetClass(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitCommandSetClass) {
            return visitor.visitCommandSetClass(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CommandSetClassPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.INT, 0)!;
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public commandbutton_value(): Commandbutton_valueContext {
        return this.getRuleContext(0, Commandbutton_valueContext)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_commandSetClassProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterCommandSetClassProperty) {
             listener.enterCommandSetClassProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitCommandSetClassProperty) {
             listener.exitCommandSetClassProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitCommandSetClassProperty) {
            return visitor.visitCommandSetClassProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DamageFXClassContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public damageFXClassProperties(): DamageFXClassPropertiesContext[];
    public damageFXClassProperties(i: number): DamageFXClassPropertiesContext | null;
    public damageFXClassProperties(i?: number): DamageFXClassPropertiesContext[] | DamageFXClassPropertiesContext | null {
        if (i === undefined) {
            return this.getRuleContexts(DamageFXClassPropertiesContext);
        }

        return this.getRuleContext(i, DamageFXClassPropertiesContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_damageFXClass;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterDamageFXClass) {
             listener.enterDamageFXClass(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitDamageFXClass) {
             listener.exitDamageFXClass(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitDamageFXClass) {
            return visitor.visitDamageFXClass(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DamageFXClassPropertiesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public dfx_throttletime_property(): Dfx_throttletime_propertyContext | null {
        return this.getRuleContext(0, Dfx_throttletime_propertyContext);
    }
    public dfx_majorfx_property(): Dfx_majorfx_propertyContext | null {
        return this.getRuleContext(0, Dfx_majorfx_propertyContext);
    }
    public dfx_minorfx_property(): Dfx_minorfx_propertyContext | null {
        return this.getRuleContext(0, Dfx_minorfx_propertyContext);
    }
    public dfx_vetmajorfx_property(): Dfx_vetmajorfx_propertyContext | null {
        return this.getRuleContext(0, Dfx_vetmajorfx_propertyContext);
    }
    public dfx_amountformajorfx_property(): Dfx_amountformajorfx_propertyContext | null {
        return this.getRuleContext(0, Dfx_amountformajorfx_propertyContext);
    }
    public dfx_vetminorfx_property(): Dfx_vetminorfx_propertyContext | null {
        return this.getRuleContext(0, Dfx_vetminorfx_propertyContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_damageFXClassProperties;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterDamageFXClassProperties) {
             listener.enterDamageFXClassProperties(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitDamageFXClassProperties) {
             listener.exitDamageFXClassProperties(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitDamageFXClassProperties) {
            return visitor.visitDamageFXClassProperties(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DrawGroupInfoClassContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public drawgroupinfoProperties(): DrawgroupinfoPropertiesContext[];
    public drawgroupinfoProperties(i: number): DrawgroupinfoPropertiesContext | null;
    public drawgroupinfoProperties(i?: number): DrawgroupinfoPropertiesContext[] | DrawgroupinfoPropertiesContext | null {
        if (i === undefined) {
            return this.getRuleContexts(DrawgroupinfoPropertiesContext);
        }

        return this.getRuleContext(i, DrawgroupinfoPropertiesContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_drawGroupInfoClass;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterDrawGroupInfoClass) {
             listener.enterDrawGroupInfoClass(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitDrawGroupInfoClass) {
             listener.exitDrawGroupInfoClass(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitDrawGroupInfoClass) {
            return visitor.visitDrawGroupInfoClass(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DrawgroupinfoPropertiesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public dgi_useplayercolor_property(): Dgi_useplayercolor_propertyContext | null {
        return this.getRuleContext(0, Dgi_useplayercolor_propertyContext);
    }
    public dgi_colorfortext_property(): Dgi_colorfortext_propertyContext | null {
        return this.getRuleContext(0, Dgi_colorfortext_propertyContext);
    }
    public dgi_colordropshadow_property(): Dgi_colordropshadow_propertyContext | null {
        return this.getRuleContext(0, Dgi_colordropshadow_propertyContext);
    }
    public dgi_dropshadowoffsetX_property(): Dgi_dropshadowoffsetX_propertyContext | null {
        return this.getRuleContext(0, Dgi_dropshadowoffsetX_propertyContext);
    }
    public dgi_dropshadowoffsetY_property(): Dgi_dropshadowoffsetY_propertyContext | null {
        return this.getRuleContext(0, Dgi_dropshadowoffsetY_propertyContext);
    }
    public dgi_fontname_property(): Dgi_fontname_propertyContext | null {
        return this.getRuleContext(0, Dgi_fontname_propertyContext);
    }
    public dgi_fontsize_property(): Dgi_fontsize_propertyContext | null {
        return this.getRuleContext(0, Dgi_fontsize_propertyContext);
    }
    public dgi_fontisbold_property(): Dgi_fontisbold_propertyContext | null {
        return this.getRuleContext(0, Dgi_fontisbold_propertyContext);
    }
    public dgi_drawposXperc_property(): Dgi_drawposXperc_propertyContext | null {
        return this.getRuleContext(0, Dgi_drawposXperc_propertyContext);
    }
    public dgi_drawposYperc_property(): Dgi_drawposYperc_propertyContext | null {
        return this.getRuleContext(0, Dgi_drawposYperc_propertyContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_drawgroupinfoProperties;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterDrawgroupinfoProperties) {
             listener.enterDrawgroupinfoProperties(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitDrawgroupinfoProperties) {
             listener.exitDrawgroupinfoProperties(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitDrawgroupinfoProperties) {
            return visitor.visitDrawgroupinfoProperties(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FxListClassContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public fxlistblocks(): FxlistblocksContext[];
    public fxlistblocks(i: number): FxlistblocksContext | null;
    public fxlistblocks(i?: number): FxlistblocksContext[] | FxlistblocksContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FxlistblocksContext);
        }

        return this.getRuleContext(i, FxlistblocksContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxListClass;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxListClass) {
             listener.enterFxListClass(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxListClass) {
             listener.exitFxListClass(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxListClass) {
            return visitor.visitFxListClass(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FxlistblocksContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public fxlist_ps_block(): Fxlist_ps_blockContext | null {
        return this.getRuleContext(0, Fxlist_ps_blockContext);
    }
    public fxlist_sound_block(): Fxlist_sound_blockContext | null {
        return this.getRuleContext(0, Fxlist_sound_blockContext);
    }
    public fxlist_rayeffect_block(): Fxlist_rayeffect_blockContext | null {
        return this.getRuleContext(0, Fxlist_rayeffect_blockContext);
    }
    public fxlist_tracer_block(): Fxlist_tracer_blockContext | null {
        return this.getRuleContext(0, Fxlist_tracer_blockContext);
    }
    public fxlist_lightpulse_block(): Fxlist_lightpulse_blockContext | null {
        return this.getRuleContext(0, Fxlist_lightpulse_blockContext);
    }
    public fxlist_viewshake_block(): Fxlist_viewshake_blockContext | null {
        return this.getRuleContext(0, Fxlist_viewshake_blockContext);
    }
    public fxlist_terrainscorch_block(): Fxlist_terrainscorch_blockContext | null {
        return this.getRuleContext(0, Fxlist_terrainscorch_blockContext);
    }
    public fxlist_fxlistatbone_block(): Fxlist_fxlistatbone_blockContext | null {
        return this.getRuleContext(0, Fxlist_fxlistatbone_blockContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlistblocks;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlistblocks) {
             listener.enterFxlistblocks(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlistblocks) {
             listener.exitFxlistblocks(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlistblocks) {
            return visitor.visitFxlistblocks(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_ps_blockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public fxlist_ps_name_property(): Fxlist_ps_name_propertyContext[];
    public fxlist_ps_name_property(i: number): Fxlist_ps_name_propertyContext | null;
    public fxlist_ps_name_property(i?: number): Fxlist_ps_name_propertyContext[] | Fxlist_ps_name_propertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Fxlist_ps_name_propertyContext);
        }

        return this.getRuleContext(i, Fxlist_ps_name_propertyContext);
    }
    public fxlist_ps_count_property(): Fxlist_ps_count_propertyContext[];
    public fxlist_ps_count_property(i: number): Fxlist_ps_count_propertyContext | null;
    public fxlist_ps_count_property(i?: number): Fxlist_ps_count_propertyContext[] | Fxlist_ps_count_propertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Fxlist_ps_count_propertyContext);
        }

        return this.getRuleContext(i, Fxlist_ps_count_propertyContext);
    }
    public fxlist_ps_offset_property(): Fxlist_ps_offset_propertyContext[];
    public fxlist_ps_offset_property(i: number): Fxlist_ps_offset_propertyContext | null;
    public fxlist_ps_offset_property(i?: number): Fxlist_ps_offset_propertyContext[] | Fxlist_ps_offset_propertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Fxlist_ps_offset_propertyContext);
        }

        return this.getRuleContext(i, Fxlist_ps_offset_propertyContext);
    }
    public fxlist_ps_height_property(): Fxlist_ps_height_propertyContext[];
    public fxlist_ps_height_property(i: number): Fxlist_ps_height_propertyContext | null;
    public fxlist_ps_height_property(i?: number): Fxlist_ps_height_propertyContext[] | Fxlist_ps_height_propertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Fxlist_ps_height_propertyContext);
        }

        return this.getRuleContext(i, Fxlist_ps_height_propertyContext);
    }
    public fxlist_ps_radius_property(): Fxlist_ps_radius_propertyContext[];
    public fxlist_ps_radius_property(i: number): Fxlist_ps_radius_propertyContext | null;
    public fxlist_ps_radius_property(i?: number): Fxlist_ps_radius_propertyContext[] | Fxlist_ps_radius_propertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Fxlist_ps_radius_propertyContext);
        }

        return this.getRuleContext(i, Fxlist_ps_radius_propertyContext);
    }
    public fxlist_ps_initialDelay_property(): Fxlist_ps_initialDelay_propertyContext[];
    public fxlist_ps_initialDelay_property(i: number): Fxlist_ps_initialDelay_propertyContext | null;
    public fxlist_ps_initialDelay_property(i?: number): Fxlist_ps_initialDelay_propertyContext[] | Fxlist_ps_initialDelay_propertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Fxlist_ps_initialDelay_propertyContext);
        }

        return this.getRuleContext(i, Fxlist_ps_initialDelay_propertyContext);
    }
    public fxlist_ps_rotateX_property(): Fxlist_ps_rotateX_propertyContext[];
    public fxlist_ps_rotateX_property(i: number): Fxlist_ps_rotateX_propertyContext | null;
    public fxlist_ps_rotateX_property(i?: number): Fxlist_ps_rotateX_propertyContext[] | Fxlist_ps_rotateX_propertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Fxlist_ps_rotateX_propertyContext);
        }

        return this.getRuleContext(i, Fxlist_ps_rotateX_propertyContext);
    }
    public fxlist_ps_rotatey_property(): Fxlist_ps_rotatey_propertyContext[];
    public fxlist_ps_rotatey_property(i: number): Fxlist_ps_rotatey_propertyContext | null;
    public fxlist_ps_rotatey_property(i?: number): Fxlist_ps_rotatey_propertyContext[] | Fxlist_ps_rotatey_propertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Fxlist_ps_rotatey_propertyContext);
        }

        return this.getRuleContext(i, Fxlist_ps_rotatey_propertyContext);
    }
    public fxlist_ps_rotateZ_property(): Fxlist_ps_rotateZ_propertyContext[];
    public fxlist_ps_rotateZ_property(i: number): Fxlist_ps_rotateZ_propertyContext | null;
    public fxlist_ps_rotateZ_property(i?: number): Fxlist_ps_rotateZ_propertyContext[] | Fxlist_ps_rotateZ_propertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Fxlist_ps_rotateZ_propertyContext);
        }

        return this.getRuleContext(i, Fxlist_ps_rotateZ_propertyContext);
    }
    public fxlist_ps_orienttoobject_property(): Fxlist_ps_orienttoobject_propertyContext[];
    public fxlist_ps_orienttoobject_property(i: number): Fxlist_ps_orienttoobject_propertyContext | null;
    public fxlist_ps_orienttoobject_property(i?: number): Fxlist_ps_orienttoobject_propertyContext[] | Fxlist_ps_orienttoobject_propertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Fxlist_ps_orienttoobject_propertyContext);
        }

        return this.getRuleContext(i, Fxlist_ps_orienttoobject_propertyContext);
    }
    public fxlist_ps_usecallerradius_property(): Fxlist_ps_usecallerradius_propertyContext[];
    public fxlist_ps_usecallerradius_property(i: number): Fxlist_ps_usecallerradius_propertyContext | null;
    public fxlist_ps_usecallerradius_property(i?: number): Fxlist_ps_usecallerradius_propertyContext[] | Fxlist_ps_usecallerradius_propertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Fxlist_ps_usecallerradius_propertyContext);
        }

        return this.getRuleContext(i, Fxlist_ps_usecallerradius_propertyContext);
    }
    public fxlist_ps_ricochet_property(): Fxlist_ps_ricochet_propertyContext[];
    public fxlist_ps_ricochet_property(i: number): Fxlist_ps_ricochet_propertyContext | null;
    public fxlist_ps_ricochet_property(i?: number): Fxlist_ps_ricochet_propertyContext[] | Fxlist_ps_ricochet_propertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Fxlist_ps_ricochet_propertyContext);
        }

        return this.getRuleContext(i, Fxlist_ps_ricochet_propertyContext);
    }
    public fxlist_ps_attachtoobject_property(): Fxlist_ps_attachtoobject_propertyContext[];
    public fxlist_ps_attachtoobject_property(i: number): Fxlist_ps_attachtoobject_propertyContext | null;
    public fxlist_ps_attachtoobject_property(i?: number): Fxlist_ps_attachtoobject_propertyContext[] | Fxlist_ps_attachtoobject_propertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Fxlist_ps_attachtoobject_propertyContext);
        }

        return this.getRuleContext(i, Fxlist_ps_attachtoobject_propertyContext);
    }
    public fxlist_ps_creategroundheight_property(): Fxlist_ps_creategroundheight_propertyContext[];
    public fxlist_ps_creategroundheight_property(i: number): Fxlist_ps_creategroundheight_propertyContext | null;
    public fxlist_ps_creategroundheight_property(i?: number): Fxlist_ps_creategroundheight_propertyContext[] | Fxlist_ps_creategroundheight_propertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Fxlist_ps_creategroundheight_propertyContext);
        }

        return this.getRuleContext(i, Fxlist_ps_creategroundheight_propertyContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_ps_block;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_ps_block) {
             listener.enterFxlist_ps_block(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_ps_block) {
             listener.exitFxlist_ps_block(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_ps_block) {
            return visitor.visitFxlist_ps_block(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_sound_blockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public fxlist_sound_property(): Fxlist_sound_propertyContext[];
    public fxlist_sound_property(i: number): Fxlist_sound_propertyContext | null;
    public fxlist_sound_property(i?: number): Fxlist_sound_propertyContext[] | Fxlist_sound_propertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Fxlist_sound_propertyContext);
        }

        return this.getRuleContext(i, Fxlist_sound_propertyContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_sound_block;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_sound_block) {
             listener.enterFxlist_sound_block(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_sound_block) {
             listener.exitFxlist_sound_block(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_sound_block) {
            return visitor.visitFxlist_sound_block(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_rayeffect_blockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public fxlist_name_object_propety(): Fxlist_name_object_propetyContext[];
    public fxlist_name_object_propety(i: number): Fxlist_name_object_propetyContext | null;
    public fxlist_name_object_propety(i?: number): Fxlist_name_object_propetyContext[] | Fxlist_name_object_propetyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Fxlist_name_object_propetyContext);
        }

        return this.getRuleContext(i, Fxlist_name_object_propetyContext);
    }
    public fxlist_rayeffect_primaryoffset_property(): Fxlist_rayeffect_primaryoffset_propertyContext[];
    public fxlist_rayeffect_primaryoffset_property(i: number): Fxlist_rayeffect_primaryoffset_propertyContext | null;
    public fxlist_rayeffect_primaryoffset_property(i?: number): Fxlist_rayeffect_primaryoffset_propertyContext[] | Fxlist_rayeffect_primaryoffset_propertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Fxlist_rayeffect_primaryoffset_propertyContext);
        }

        return this.getRuleContext(i, Fxlist_rayeffect_primaryoffset_propertyContext);
    }
    public fxlist_rayeffect_secondaryoffset_proprety(): Fxlist_rayeffect_secondaryoffset_propretyContext[];
    public fxlist_rayeffect_secondaryoffset_proprety(i: number): Fxlist_rayeffect_secondaryoffset_propretyContext | null;
    public fxlist_rayeffect_secondaryoffset_proprety(i?: number): Fxlist_rayeffect_secondaryoffset_propretyContext[] | Fxlist_rayeffect_secondaryoffset_propretyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Fxlist_rayeffect_secondaryoffset_propretyContext);
        }

        return this.getRuleContext(i, Fxlist_rayeffect_secondaryoffset_propretyContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_rayeffect_block;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_rayeffect_block) {
             listener.enterFxlist_rayeffect_block(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_rayeffect_block) {
             listener.exitFxlist_rayeffect_block(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_rayeffect_block) {
            return visitor.visitFxlist_rayeffect_block(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_tracer_blockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public fxlist_tracer_name_propety(): Fxlist_tracer_name_propetyContext[];
    public fxlist_tracer_name_propety(i: number): Fxlist_tracer_name_propetyContext | null;
    public fxlist_tracer_name_propety(i?: number): Fxlist_tracer_name_propetyContext[] | Fxlist_tracer_name_propetyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Fxlist_tracer_name_propetyContext);
        }

        return this.getRuleContext(i, Fxlist_tracer_name_propetyContext);
    }
    public fxlist_tracer_bonename_property(): Fxlist_tracer_bonename_propertyContext[];
    public fxlist_tracer_bonename_property(i: number): Fxlist_tracer_bonename_propertyContext | null;
    public fxlist_tracer_bonename_property(i?: number): Fxlist_tracer_bonename_propertyContext[] | Fxlist_tracer_bonename_propertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Fxlist_tracer_bonename_propertyContext);
        }

        return this.getRuleContext(i, Fxlist_tracer_bonename_propertyContext);
    }
    public fxlist_tracer_speed_property(): Fxlist_tracer_speed_propertyContext[];
    public fxlist_tracer_speed_property(i: number): Fxlist_tracer_speed_propertyContext | null;
    public fxlist_tracer_speed_property(i?: number): Fxlist_tracer_speed_propertyContext[] | Fxlist_tracer_speed_propertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Fxlist_tracer_speed_propertyContext);
        }

        return this.getRuleContext(i, Fxlist_tracer_speed_propertyContext);
    }
    public fxlist_tracer_decayat_property(): Fxlist_tracer_decayat_propertyContext[];
    public fxlist_tracer_decayat_property(i: number): Fxlist_tracer_decayat_propertyContext | null;
    public fxlist_tracer_decayat_property(i?: number): Fxlist_tracer_decayat_propertyContext[] | Fxlist_tracer_decayat_propertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Fxlist_tracer_decayat_propertyContext);
        }

        return this.getRuleContext(i, Fxlist_tracer_decayat_propertyContext);
    }
    public fxlist_tracer_length_property(): Fxlist_tracer_length_propertyContext[];
    public fxlist_tracer_length_property(i: number): Fxlist_tracer_length_propertyContext | null;
    public fxlist_tracer_length_property(i?: number): Fxlist_tracer_length_propertyContext[] | Fxlist_tracer_length_propertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Fxlist_tracer_length_propertyContext);
        }

        return this.getRuleContext(i, Fxlist_tracer_length_propertyContext);
    }
    public fxlist_tracer_width_property(): Fxlist_tracer_width_propertyContext[];
    public fxlist_tracer_width_property(i: number): Fxlist_tracer_width_propertyContext | null;
    public fxlist_tracer_width_property(i?: number): Fxlist_tracer_width_propertyContext[] | Fxlist_tracer_width_propertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Fxlist_tracer_width_propertyContext);
        }

        return this.getRuleContext(i, Fxlist_tracer_width_propertyContext);
    }
    public fxlist_tracer_color_property(): Fxlist_tracer_color_propertyContext[];
    public fxlist_tracer_color_property(i: number): Fxlist_tracer_color_propertyContext | null;
    public fxlist_tracer_color_property(i?: number): Fxlist_tracer_color_propertyContext[] | Fxlist_tracer_color_propertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Fxlist_tracer_color_propertyContext);
        }

        return this.getRuleContext(i, Fxlist_tracer_color_propertyContext);
    }
    public fxlist_tracer_probability_property(): Fxlist_tracer_probability_propertyContext[];
    public fxlist_tracer_probability_property(i: number): Fxlist_tracer_probability_propertyContext | null;
    public fxlist_tracer_probability_property(i?: number): Fxlist_tracer_probability_propertyContext[] | Fxlist_tracer_probability_propertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Fxlist_tracer_probability_propertyContext);
        }

        return this.getRuleContext(i, Fxlist_tracer_probability_propertyContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_tracer_block;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_tracer_block) {
             listener.enterFxlist_tracer_block(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_tracer_block) {
             listener.exitFxlist_tracer_block(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_tracer_block) {
            return visitor.visitFxlist_tracer_block(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_lightpulse_blockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public fxlist_lightpulse_color_property(): Fxlist_lightpulse_color_propertyContext[];
    public fxlist_lightpulse_color_property(i: number): Fxlist_lightpulse_color_propertyContext | null;
    public fxlist_lightpulse_color_property(i?: number): Fxlist_lightpulse_color_propertyContext[] | Fxlist_lightpulse_color_propertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Fxlist_lightpulse_color_propertyContext);
        }

        return this.getRuleContext(i, Fxlist_lightpulse_color_propertyContext);
    }
    public fxlist_lightpulse_radius_property(): Fxlist_lightpulse_radius_propertyContext[];
    public fxlist_lightpulse_radius_property(i: number): Fxlist_lightpulse_radius_propertyContext | null;
    public fxlist_lightpulse_radius_property(i?: number): Fxlist_lightpulse_radius_propertyContext[] | Fxlist_lightpulse_radius_propertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Fxlist_lightpulse_radius_propertyContext);
        }

        return this.getRuleContext(i, Fxlist_lightpulse_radius_propertyContext);
    }
    public fxlist_lightpulse_radiuspercentobjectsize_property(): Fxlist_lightpulse_radiuspercentobjectsize_propertyContext[];
    public fxlist_lightpulse_radiuspercentobjectsize_property(i: number): Fxlist_lightpulse_radiuspercentobjectsize_propertyContext | null;
    public fxlist_lightpulse_radiuspercentobjectsize_property(i?: number): Fxlist_lightpulse_radiuspercentobjectsize_propertyContext[] | Fxlist_lightpulse_radiuspercentobjectsize_propertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Fxlist_lightpulse_radiuspercentobjectsize_propertyContext);
        }

        return this.getRuleContext(i, Fxlist_lightpulse_radiuspercentobjectsize_propertyContext);
    }
    public fxlist_lightpulse_increasetime_property(): Fxlist_lightpulse_increasetime_propertyContext[];
    public fxlist_lightpulse_increasetime_property(i: number): Fxlist_lightpulse_increasetime_propertyContext | null;
    public fxlist_lightpulse_increasetime_property(i?: number): Fxlist_lightpulse_increasetime_propertyContext[] | Fxlist_lightpulse_increasetime_propertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Fxlist_lightpulse_increasetime_propertyContext);
        }

        return this.getRuleContext(i, Fxlist_lightpulse_increasetime_propertyContext);
    }
    public fxlist_lightpulse_decreasetime_property(): Fxlist_lightpulse_decreasetime_propertyContext[];
    public fxlist_lightpulse_decreasetime_property(i: number): Fxlist_lightpulse_decreasetime_propertyContext | null;
    public fxlist_lightpulse_decreasetime_property(i?: number): Fxlist_lightpulse_decreasetime_propertyContext[] | Fxlist_lightpulse_decreasetime_propertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Fxlist_lightpulse_decreasetime_propertyContext);
        }

        return this.getRuleContext(i, Fxlist_lightpulse_decreasetime_propertyContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_lightpulse_block;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_lightpulse_block) {
             listener.enterFxlist_lightpulse_block(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_lightpulse_block) {
             listener.exitFxlist_lightpulse_block(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_lightpulse_block) {
            return visitor.visitFxlist_lightpulse_block(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_viewshake_blockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public fxlist_viewshake_type_property(): Fxlist_viewshake_type_propertyContext[];
    public fxlist_viewshake_type_property(i: number): Fxlist_viewshake_type_propertyContext | null;
    public fxlist_viewshake_type_property(i?: number): Fxlist_viewshake_type_propertyContext[] | Fxlist_viewshake_type_propertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Fxlist_viewshake_type_propertyContext);
        }

        return this.getRuleContext(i, Fxlist_viewshake_type_propertyContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_viewshake_block;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_viewshake_block) {
             listener.enterFxlist_viewshake_block(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_viewshake_block) {
             listener.exitFxlist_viewshake_block(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_viewshake_block) {
            return visitor.visitFxlist_viewshake_block(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_terrainscorch_blockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public fxlist_scorch_type_property(): Fxlist_scorch_type_propertyContext[];
    public fxlist_scorch_type_property(i: number): Fxlist_scorch_type_propertyContext | null;
    public fxlist_scorch_type_property(i?: number): Fxlist_scorch_type_propertyContext[] | Fxlist_scorch_type_propertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Fxlist_scorch_type_propertyContext);
        }

        return this.getRuleContext(i, Fxlist_scorch_type_propertyContext);
    }
    public fxlist_scorch_radius_property(): Fxlist_scorch_radius_propertyContext[];
    public fxlist_scorch_radius_property(i: number): Fxlist_scorch_radius_propertyContext | null;
    public fxlist_scorch_radius_property(i?: number): Fxlist_scorch_radius_propertyContext[] | Fxlist_scorch_radius_propertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Fxlist_scorch_radius_propertyContext);
        }

        return this.getRuleContext(i, Fxlist_scorch_radius_propertyContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_terrainscorch_block;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_terrainscorch_block) {
             listener.enterFxlist_terrainscorch_block(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_terrainscorch_block) {
             listener.exitFxlist_terrainscorch_block(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_terrainscorch_block) {
            return visitor.visitFxlist_terrainscorch_block(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_fxlistatbone_blockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public fxlist_atbonepos_fx_property(): Fxlist_atbonepos_fx_propertyContext[];
    public fxlist_atbonepos_fx_property(i: number): Fxlist_atbonepos_fx_propertyContext | null;
    public fxlist_atbonepos_fx_property(i?: number): Fxlist_atbonepos_fx_propertyContext[] | Fxlist_atbonepos_fx_propertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Fxlist_atbonepos_fx_propertyContext);
        }

        return this.getRuleContext(i, Fxlist_atbonepos_fx_propertyContext);
    }
    public fxlist_atbonepos_bonename_property(): Fxlist_atbonepos_bonename_propertyContext[];
    public fxlist_atbonepos_bonename_property(i: number): Fxlist_atbonepos_bonename_propertyContext | null;
    public fxlist_atbonepos_bonename_property(i?: number): Fxlist_atbonepos_bonename_propertyContext[] | Fxlist_atbonepos_bonename_propertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Fxlist_atbonepos_bonename_propertyContext);
        }

        return this.getRuleContext(i, Fxlist_atbonepos_bonename_propertyContext);
    }
    public fxlist_atbonepos_orienttoobject_property(): Fxlist_atbonepos_orienttoobject_propertyContext[];
    public fxlist_atbonepos_orienttoobject_property(i: number): Fxlist_atbonepos_orienttoobject_propertyContext | null;
    public fxlist_atbonepos_orienttoobject_property(i?: number): Fxlist_atbonepos_orienttoobject_propertyContext[] | Fxlist_atbonepos_orienttoobject_propertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Fxlist_atbonepos_orienttoobject_propertyContext);
        }

        return this.getRuleContext(i, Fxlist_atbonepos_orienttoobject_propertyContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_fxlistatbone_block;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_fxlistatbone_block) {
             listener.enterFxlist_fxlistatbone_block(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_fxlistatbone_block) {
             listener.exitFxlist_fxlistatbone_block(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_fxlistatbone_block) {
            return visitor.visitFxlist_fxlistatbone_block(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InGameUIClassContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public igui_properties(): Igui_propertiesContext[];
    public igui_properties(i: number): Igui_propertiesContext | null;
    public igui_properties(i?: number): Igui_propertiesContext[] | Igui_propertiesContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Igui_propertiesContext);
        }

        return this.getRuleContext(i, Igui_propertiesContext);
    }
    public igui_blocks(): Igui_blocksContext[];
    public igui_blocks(i: number): Igui_blocksContext | null;
    public igui_blocks(i?: number): Igui_blocksContext[] | Igui_blocksContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Igui_blocksContext);
        }

        return this.getRuleContext(i, Igui_blocksContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_inGameUIClass;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterInGameUIClass) {
             listener.enterInGameUIClass(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitInGameUIClass) {
             listener.exitInGameUIClass(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitInGameUIClass) {
            return visitor.visitInGameUIClass(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Igui_blocksContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public ingui_block_properties(): Ingui_block_propertiesContext[];
    public ingui_block_properties(i: number): Ingui_block_propertiesContext | null;
    public ingui_block_properties(i?: number): Ingui_block_propertiesContext[] | Ingui_block_propertiesContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Ingui_block_propertiesContext);
        }

        return this.getRuleContext(i, Ingui_block_propertiesContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_igui_blocks;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterIgui_blocks) {
             listener.enterIgui_blocks(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitIgui_blocks) {
             listener.exitIgui_blocks(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitIgui_blocks) {
            return visitor.visitIgui_blocks(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Ingui_block_propertiesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.ID, 0);
    }
    public PROCENT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.PROCENT, 0);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.INT, 0);
    }
    public R(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.R, 0);
    }
    public G(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.G, 0);
    }
    public B(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.B, 0);
    }
    public A(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.A, 0);
    }
    public BOOLEAN(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.BOOLEAN, 0);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_ingui_block_properties;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterIngui_block_properties) {
             listener.enterIngui_block_properties(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitIngui_block_properties) {
             listener.exitIngui_block_properties(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitIngui_block_properties) {
            return visitor.visitIngui_block_properties(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LocomotorClassContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public locomotor_properties(): Locomotor_propertiesContext[];
    public locomotor_properties(i: number): Locomotor_propertiesContext | null;
    public locomotor_properties(i?: number): Locomotor_propertiesContext[] | Locomotor_propertiesContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Locomotor_propertiesContext);
        }

        return this.getRuleContext(i, Locomotor_propertiesContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_locomotorClass;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterLocomotorClass) {
             listener.enterLocomotorClass(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitLocomotorClass) {
             listener.exitLocomotorClass(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitLocomotorClass) {
            return visitor.visitLocomotorClass(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Locomotor_propertiesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public locomotor_surface_property(): Locomotor_surface_propertyContext | null {
        return this.getRuleContext(0, Locomotor_surface_propertyContext);
    }
    public locomotor_zbehavior_property(): Locomotor_zbehavior_propertyContext | null {
        return this.getRuleContext(0, Locomotor_zbehavior_propertyContext);
    }
    public locomotor_appereance_property(): Locomotor_appereance_propertyContext | null {
        return this.getRuleContext(0, Locomotor_appereance_propertyContext);
    }
    public locomotor_movepriority_property(): Locomotor_movepriority_propertyContext | null {
        return this.getRuleContext(0, Locomotor_movepriority_propertyContext);
    }
    public EQ(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.EQ, 0);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.INT, 0);
    }
    public FLOAT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.FLOAT, 0);
    }
    public BOOLEAN(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.BOOLEAN, 0);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_locomotor_properties;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterLocomotor_properties) {
             listener.enterLocomotor_properties(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitLocomotor_properties) {
             listener.exitLocomotor_properties(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitLocomotor_properties) {
            return visitor.visitLocomotor_properties(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Locomotor_surface_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public surface_value(): Surface_valueContext[];
    public surface_value(i: number): Surface_valueContext | null;
    public surface_value(i?: number): Surface_valueContext[] | Surface_valueContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Surface_valueContext);
        }

        return this.getRuleContext(i, Surface_valueContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_locomotor_surface_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterLocomotor_surface_property) {
             listener.enterLocomotor_surface_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitLocomotor_surface_property) {
             listener.exitLocomotor_surface_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitLocomotor_surface_property) {
            return visitor.visitLocomotor_surface_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Locomotor_zbehavior_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public zbehavior_value(): Zbehavior_valueContext {
        return this.getRuleContext(0, Zbehavior_valueContext)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_locomotor_zbehavior_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterLocomotor_zbehavior_property) {
             listener.enterLocomotor_zbehavior_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitLocomotor_zbehavior_property) {
             listener.exitLocomotor_zbehavior_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitLocomotor_zbehavior_property) {
            return visitor.visitLocomotor_zbehavior_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Locomotor_appereance_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public appereance_value(): Appereance_valueContext {
        return this.getRuleContext(0, Appereance_valueContext)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_locomotor_appereance_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterLocomotor_appereance_property) {
             listener.enterLocomotor_appereance_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitLocomotor_appereance_property) {
             listener.exitLocomotor_appereance_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitLocomotor_appereance_property) {
            return visitor.visitLocomotor_appereance_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Locomotor_movepriority_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public movepriority_value(): Movepriority_valueContext {
        return this.getRuleContext(0, Movepriority_valueContext)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_locomotor_movepriority_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterLocomotor_movepriority_property) {
             listener.enterLocomotor_movepriority_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitLocomotor_movepriority_property) {
             listener.exitLocomotor_movepriority_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitLocomotor_movepriority_property) {
            return visitor.visitLocomotor_movepriority_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Surface_valueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_surface_value;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterSurface_value) {
             listener.enterSurface_value(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitSurface_value) {
             listener.exitSurface_value(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitSurface_value) {
            return visitor.visitSurface_value(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Zbehavior_valueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_zbehavior_value;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterZbehavior_value) {
             listener.enterZbehavior_value(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitZbehavior_value) {
             listener.exitZbehavior_value(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitZbehavior_value) {
            return visitor.visitZbehavior_value(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Appereance_valueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_appereance_value;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAppereance_value) {
             listener.enterAppereance_value(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAppereance_value) {
             listener.exitAppereance_value(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAppereance_value) {
            return visitor.visitAppereance_value(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Movepriority_valueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_movepriority_value;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterMovepriority_value) {
             listener.enterMovepriority_value(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitMovepriority_value) {
             listener.exitMovepriority_value(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitMovepriority_value) {
            return visitor.visitMovepriority_value(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WeaponClassContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public weapon_properties(): Weapon_propertiesContext[];
    public weapon_properties(i: number): Weapon_propertiesContext | null;
    public weapon_properties(i?: number): Weapon_propertiesContext[] | Weapon_propertiesContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Weapon_propertiesContext);
        }

        return this.getRuleContext(i, Weapon_propertiesContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_weaponClass;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterWeaponClass) {
             listener.enterWeaponClass(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitWeaponClass) {
             listener.exitWeaponClass(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitWeaponClass) {
            return visitor.visitWeaponClass(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Weapon_propertiesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public weapon_damagetype_property(): Weapon_damagetype_propertyContext | null {
        return this.getRuleContext(0, Weapon_damagetype_propertyContext);
    }
    public weapon_deathtype_property(): Weapon_deathtype_propertyContext | null {
        return this.getRuleContext(0, Weapon_deathtype_propertyContext);
    }
    public weapon_damageaffects_property(): Weapon_damageaffects_propertyContext | null {
        return this.getRuleContext(0, Weapon_damageaffects_propertyContext);
    }
    public weapon_weaponbonus_property(): Weapon_weaponbonus_propertyContext | null {
        return this.getRuleContext(0, Weapon_weaponbonus_propertyContext);
    }
    public weapon_lasterbone_property(): Weapon_lasterbone_propertyContext | null {
        return this.getRuleContext(0, Weapon_lasterbone_propertyContext);
    }
    public EQ(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.EQ, 0);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.INT, 0);
    }
    public FLOAT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.FLOAT, 0);
    }
    public BOOLEAN(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.BOOLEAN, 0);
    }
    public particlesystem_value(): Particlesystem_valueContext | null {
        return this.getRuleContext(0, Particlesystem_valueContext);
    }
    public VETERENCY(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.VETERENCY, 0);
    }
    public object_value(): Object_valueContext | null {
        return this.getRuleContext(0, Object_valueContext);
    }
    public fxlist_value(): Fxlist_valueContext | null {
        return this.getRuleContext(0, Fxlist_valueContext);
    }
    public audioevent_value(): Audioevent_valueContext | null {
        return this.getRuleContext(0, Audioevent_valueContext);
    }
    public ID(): antlr.TerminalNode[];
    public ID(i: number): antlr.TerminalNode | null;
    public ID(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.ID);
    	} else {
    		return this.getToken(MapIniParser.ID, i);
    	}
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_weapon_properties;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterWeapon_properties) {
             listener.enterWeapon_properties(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitWeapon_properties) {
             listener.exitWeapon_properties(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitWeapon_properties) {
            return visitor.visitWeapon_properties(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Weapon_damagetype_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public damageType_value(): DamageType_valueContext {
        return this.getRuleContext(0, DamageType_valueContext)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_weapon_damagetype_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterWeapon_damagetype_property) {
             listener.enterWeapon_damagetype_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitWeapon_damagetype_property) {
             listener.exitWeapon_damagetype_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitWeapon_damagetype_property) {
            return visitor.visitWeapon_damagetype_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Weapon_deathtype_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public deathType_value(): DeathType_valueContext {
        return this.getRuleContext(0, DeathType_valueContext)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_weapon_deathtype_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterWeapon_deathtype_property) {
             listener.enterWeapon_deathtype_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitWeapon_deathtype_property) {
             listener.exitWeapon_deathtype_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitWeapon_deathtype_property) {
            return visitor.visitWeapon_deathtype_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Weapon_damageaffects_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public damageAffects_value(): DamageAffects_valueContext[];
    public damageAffects_value(i: number): DamageAffects_valueContext | null;
    public damageAffects_value(i?: number): DamageAffects_valueContext[] | DamageAffects_valueContext | null {
        if (i === undefined) {
            return this.getRuleContexts(DamageAffects_valueContext);
        }

        return this.getRuleContext(i, DamageAffects_valueContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_weapon_damageaffects_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterWeapon_damageaffects_property) {
             listener.enterWeapon_damageaffects_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitWeapon_damageaffects_property) {
             listener.exitWeapon_damageaffects_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitWeapon_damageaffects_property) {
            return visitor.visitWeapon_damageaffects_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Weapon_weaponbonus_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public weapon_weaponbonus_condition_value(): Weapon_weaponbonus_condition_valueContext {
        return this.getRuleContext(0, Weapon_weaponbonus_condition_valueContext)!;
    }
    public weapon_weaponbonus_bonus_value(): Weapon_weaponbonus_bonus_valueContext {
        return this.getRuleContext(0, Weapon_weaponbonus_bonus_valueContext)!;
    }
    public PROCENT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.PROCENT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_weapon_weaponbonus_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterWeapon_weaponbonus_property) {
             listener.enterWeapon_weaponbonus_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitWeapon_weaponbonus_property) {
             listener.exitWeapon_weaponbonus_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitWeapon_weaponbonus_property) {
            return visitor.visitWeapon_weaponbonus_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Weapon_lasterbone_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public damageType_value(): DamageType_valueContext {
        return this.getRuleContext(0, DamageType_valueContext)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_weapon_lasterbone_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterWeapon_lasterbone_property) {
             listener.enterWeapon_lasterbone_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitWeapon_lasterbone_property) {
             listener.exitWeapon_lasterbone_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitWeapon_lasterbone_property) {
            return visitor.visitWeapon_lasterbone_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Weapon_weaponbonus_condition_valueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_weapon_weaponbonus_condition_value;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterWeapon_weaponbonus_condition_value) {
             listener.enterWeapon_weaponbonus_condition_value(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitWeapon_weaponbonus_condition_value) {
             listener.exitWeapon_weaponbonus_condition_value(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitWeapon_weaponbonus_condition_value) {
            return visitor.visitWeapon_weaponbonus_condition_value(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Weapon_weaponbonus_bonus_valueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_weapon_weaponbonus_bonus_value;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterWeapon_weaponbonus_bonus_value) {
             listener.enterWeapon_weaponbonus_bonus_value(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitWeapon_weaponbonus_bonus_value) {
             listener.exitWeapon_weaponbonus_bonus_value(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitWeapon_weaponbonus_bonus_value) {
            return visitor.visitWeapon_weaponbonus_bonus_value(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DamageType_valueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_damageType_value;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterDamageType_value) {
             listener.enterDamageType_value(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitDamageType_value) {
             listener.exitDamageType_value(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitDamageType_value) {
            return visitor.visitDamageType_value(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DeathType_valueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_deathType_value;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterDeathType_value) {
             listener.enterDeathType_value(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitDeathType_value) {
             listener.exitDeathType_value(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitDeathType_value) {
            return visitor.visitDeathType_value(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DamageAffects_valueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_damageAffects_value;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterDamageAffects_value) {
             listener.enterDamageAffects_value(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitDamageAffects_value) {
             listener.exitDamageAffects_value(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitDamageAffects_value) {
            return visitor.visitDamageAffects_value(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WeatherClassContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public weather_properties(): Weather_propertiesContext[];
    public weather_properties(i: number): Weather_propertiesContext | null;
    public weather_properties(i?: number): Weather_propertiesContext[] | Weather_propertiesContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Weather_propertiesContext);
        }

        return this.getRuleContext(i, Weather_propertiesContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_weatherClass;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterWeatherClass) {
             listener.enterWeatherClass(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitWeatherClass) {
             listener.exitWeatherClass(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitWeatherClass) {
            return visitor.visitWeatherClass(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Weather_propertiesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public BOOLEAN(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.BOOLEAN, 0);
    }
    public file(): FileContext | null {
        return this.getRuleContext(0, FileContext);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.INT, 0);
    }
    public FLOAT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.FLOAT, 0);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_weather_properties;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterWeather_properties) {
             listener.enterWeather_properties(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitWeather_properties) {
             listener.exitWeather_properties(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitWeather_properties) {
            return visitor.visitWeather_properties(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EndContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_end;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterEnd) {
             listener.enterEnd(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitEnd) {
             listener.exitEnd(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitEnd) {
            return visitor.visitEnd(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FileContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_file;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFile) {
             listener.enterFile(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFile) {
             listener.exitFile(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFile) {
            return visitor.visitFile(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Cb_command_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public cb_command_value(): Cb_command_valueContext {
        return this.getRuleContext(0, Cb_command_valueContext)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_cb_command_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterCb_command_property) {
             listener.enterCb_command_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitCb_command_property) {
             listener.exitCb_command_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitCb_command_property) {
            return visitor.visitCb_command_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Cb_command_valueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_cb_command_value;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterCb_command_value) {
             listener.enterCb_command_value(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitCb_command_value) {
             listener.exitCb_command_value(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitCb_command_value) {
            return visitor.visitCb_command_value(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Cb_options_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public cb_options_value(): Cb_options_valueContext[];
    public cb_options_value(i: number): Cb_options_valueContext | null;
    public cb_options_value(i?: number): Cb_options_valueContext[] | Cb_options_valueContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Cb_options_valueContext);
        }

        return this.getRuleContext(i, Cb_options_valueContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_cb_options_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterCb_options_property) {
             listener.enterCb_options_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitCb_options_property) {
             listener.exitCb_options_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitCb_options_property) {
            return visitor.visitCb_options_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Cb_options_valueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_cb_options_value;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterCb_options_value) {
             listener.enterCb_options_value(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitCb_options_value) {
             listener.exitCb_options_value(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitCb_options_value) {
            return visitor.visitCb_options_value(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Cb_buttonimage_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public mappedimage_value(): Mappedimage_valueContext {
        return this.getRuleContext(0, Mappedimage_valueContext)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_cb_buttonimage_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterCb_buttonimage_property) {
             listener.enterCb_buttonimage_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitCb_buttonimage_property) {
             listener.exitCb_buttonimage_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitCb_buttonimage_property) {
            return visitor.visitCb_buttonimage_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Cb_buttonbordertype_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public cb_buttonbordertype_value(): Cb_buttonbordertype_valueContext {
        return this.getRuleContext(0, Cb_buttonbordertype_valueContext)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_cb_buttonbordertype_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterCb_buttonbordertype_property) {
             listener.enterCb_buttonbordertype_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitCb_buttonbordertype_property) {
             listener.exitCb_buttonbordertype_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitCb_buttonbordertype_property) {
            return visitor.visitCb_buttonbordertype_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Cb_buttonbordertype_valueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_cb_buttonbordertype_value;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterCb_buttonbordertype_value) {
             listener.enterCb_buttonbordertype_value(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitCb_buttonbordertype_value) {
             listener.exitCb_buttonbordertype_value(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitCb_buttonbordertype_value) {
            return visitor.visitCb_buttonbordertype_value(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Cb_textlabel_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_cb_textlabel_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterCb_textlabel_property) {
             listener.enterCb_textlabel_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitCb_textlabel_property) {
             listener.exitCb_textlabel_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitCb_textlabel_property) {
            return visitor.visitCb_textlabel_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Cb_descriptionlabel_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_cb_descriptionlabel_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterCb_descriptionlabel_property) {
             listener.enterCb_descriptionlabel_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitCb_descriptionlabel_property) {
             listener.exitCb_descriptionlabel_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitCb_descriptionlabel_property) {
            return visitor.visitCb_descriptionlabel_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Cb_conflictinglabel_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_cb_conflictinglabel_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterCb_conflictinglabel_property) {
             listener.enterCb_conflictinglabel_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitCb_conflictinglabel_property) {
             listener.exitCb_conflictinglabel_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitCb_conflictinglabel_property) {
            return visitor.visitCb_conflictinglabel_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Cb_cursorname_properyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public cursorname_value(): Cursorname_valueContext {
        return this.getRuleContext(0, Cursorname_valueContext)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_cb_cursorname_propery;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterCb_cursorname_propery) {
             listener.enterCb_cursorname_propery(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitCb_cursorname_propery) {
             listener.exitCb_cursorname_propery(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitCb_cursorname_propery) {
            return visitor.visitCb_cursorname_propery(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Cb_radius_cursorname_valueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public radius_cursorname_value(): Radius_cursorname_valueContext {
        return this.getRuleContext(0, Radius_cursorname_valueContext)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_cb_radius_cursorname_value;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterCb_radius_cursorname_value) {
             listener.enterCb_radius_cursorname_value(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitCb_radius_cursorname_value) {
             listener.exitCb_radius_cursorname_value(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitCb_radius_cursorname_value) {
            return visitor.visitCb_radius_cursorname_value(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Cb_invalid_cursorname_properyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public invalid_cursorname_value(): Invalid_cursorname_valueContext {
        return this.getRuleContext(0, Invalid_cursorname_valueContext)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_cb_invalid_cursorname_propery;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterCb_invalid_cursorname_propery) {
             listener.enterCb_invalid_cursorname_propery(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitCb_invalid_cursorname_propery) {
             listener.exitCb_invalid_cursorname_propery(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitCb_invalid_cursorname_propery) {
            return visitor.visitCb_invalid_cursorname_propery(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Cb_unitspecificsound_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public audioevent_value(): Audioevent_valueContext {
        return this.getRuleContext(0, Audioevent_valueContext)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_cb_unitspecificsound_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterCb_unitspecificsound_property) {
             listener.enterCb_unitspecificsound_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitCb_unitspecificsound_property) {
             listener.exitCb_unitspecificsound_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitCb_unitspecificsound_property) {
            return visitor.visitCb_unitspecificsound_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Cb_maxshotsfire_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public INT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.INT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_cb_maxshotsfire_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterCb_maxshotsfire_property) {
             listener.enterCb_maxshotsfire_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitCb_maxshotsfire_property) {
             listener.exitCb_maxshotsfire_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitCb_maxshotsfire_property) {
            return visitor.visitCb_maxshotsfire_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Dfx_throttletime_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public damageType_value(): DamageType_valueContext {
        return this.getRuleContext(0, DamageType_valueContext)!;
    }
    public INT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.INT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_dfx_throttletime_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterDfx_throttletime_property) {
             listener.enterDfx_throttletime_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitDfx_throttletime_property) {
             listener.exitDfx_throttletime_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitDfx_throttletime_property) {
            return visitor.visitDfx_throttletime_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Dfx_amountformajorfx_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public damageType_value(): DamageType_valueContext {
        return this.getRuleContext(0, DamageType_valueContext)!;
    }
    public FLOAT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.FLOAT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_dfx_amountformajorfx_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterDfx_amountformajorfx_property) {
             listener.enterDfx_amountformajorfx_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitDfx_amountformajorfx_property) {
             listener.exitDfx_amountformajorfx_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitDfx_amountformajorfx_property) {
            return visitor.visitDfx_amountformajorfx_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Dfx_majorfx_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public damageType_value(): DamageType_valueContext {
        return this.getRuleContext(0, DamageType_valueContext)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_dfx_majorfx_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterDfx_majorfx_property) {
             listener.enterDfx_majorfx_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitDfx_majorfx_property) {
             listener.exitDfx_majorfx_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitDfx_majorfx_property) {
            return visitor.visitDfx_majorfx_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Dfx_minorfx_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public damageType_value(): DamageType_valueContext {
        return this.getRuleContext(0, DamageType_valueContext)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_dfx_minorfx_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterDfx_minorfx_property) {
             listener.enterDfx_minorfx_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitDfx_minorfx_property) {
             listener.exitDfx_minorfx_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitDfx_minorfx_property) {
            return visitor.visitDfx_minorfx_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Dfx_vetmajorfx_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public VETERENCY(): antlr.TerminalNode {
        return this.getToken(MapIniParser.VETERENCY, 0)!;
    }
    public damageType_value(): DamageType_valueContext {
        return this.getRuleContext(0, DamageType_valueContext)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_dfx_vetmajorfx_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterDfx_vetmajorfx_property) {
             listener.enterDfx_vetmajorfx_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitDfx_vetmajorfx_property) {
             listener.exitDfx_vetmajorfx_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitDfx_vetmajorfx_property) {
            return visitor.visitDfx_vetmajorfx_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Dfx_vetminorfx_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public VETERENCY(): antlr.TerminalNode {
        return this.getToken(MapIniParser.VETERENCY, 0)!;
    }
    public damageType_value(): DamageType_valueContext {
        return this.getRuleContext(0, DamageType_valueContext)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_dfx_vetminorfx_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterDfx_vetminorfx_property) {
             listener.enterDfx_vetminorfx_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitDfx_vetminorfx_property) {
             listener.exitDfx_vetminorfx_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitDfx_vetminorfx_property) {
            return visitor.visitDfx_vetminorfx_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Dgi_useplayercolor_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public BOOLEAN(): antlr.TerminalNode {
        return this.getToken(MapIniParser.BOOLEAN, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_dgi_useplayercolor_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterDgi_useplayercolor_property) {
             listener.enterDgi_useplayercolor_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitDgi_useplayercolor_property) {
             listener.exitDgi_useplayercolor_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitDgi_useplayercolor_property) {
            return visitor.visitDgi_useplayercolor_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Dgi_colorfortext_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public R(): antlr.TerminalNode {
        return this.getToken(MapIniParser.R, 0)!;
    }
    public G(): antlr.TerminalNode {
        return this.getToken(MapIniParser.G, 0)!;
    }
    public B(): antlr.TerminalNode {
        return this.getToken(MapIniParser.B, 0)!;
    }
    public A(): antlr.TerminalNode {
        return this.getToken(MapIniParser.A, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_dgi_colorfortext_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterDgi_colorfortext_property) {
             listener.enterDgi_colorfortext_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitDgi_colorfortext_property) {
             listener.exitDgi_colorfortext_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitDgi_colorfortext_property) {
            return visitor.visitDgi_colorfortext_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Dgi_colordropshadow_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public R(): antlr.TerminalNode {
        return this.getToken(MapIniParser.R, 0)!;
    }
    public G(): antlr.TerminalNode {
        return this.getToken(MapIniParser.G, 0)!;
    }
    public B(): antlr.TerminalNode {
        return this.getToken(MapIniParser.B, 0)!;
    }
    public A(): antlr.TerminalNode {
        return this.getToken(MapIniParser.A, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_dgi_colordropshadow_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterDgi_colordropshadow_property) {
             listener.enterDgi_colordropshadow_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitDgi_colordropshadow_property) {
             listener.exitDgi_colordropshadow_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitDgi_colordropshadow_property) {
            return visitor.visitDgi_colordropshadow_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Dgi_dropshadowoffsetX_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public INT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.INT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_dgi_dropshadowoffsetX_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterDgi_dropshadowoffsetX_property) {
             listener.enterDgi_dropshadowoffsetX_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitDgi_dropshadowoffsetX_property) {
             listener.exitDgi_dropshadowoffsetX_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitDgi_dropshadowoffsetX_property) {
            return visitor.visitDgi_dropshadowoffsetX_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Dgi_dropshadowoffsetY_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public INT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.INT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_dgi_dropshadowoffsetY_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterDgi_dropshadowoffsetY_property) {
             listener.enterDgi_dropshadowoffsetY_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitDgi_dropshadowoffsetY_property) {
             listener.exitDgi_dropshadowoffsetY_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitDgi_dropshadowoffsetY_property) {
            return visitor.visitDgi_dropshadowoffsetY_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Dgi_fontname_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public ID(): antlr.TerminalNode[];
    public ID(i: number): antlr.TerminalNode | null;
    public ID(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.ID);
    	} else {
    		return this.getToken(MapIniParser.ID, i);
    	}
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_dgi_fontname_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterDgi_fontname_property) {
             listener.enterDgi_fontname_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitDgi_fontname_property) {
             listener.exitDgi_fontname_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitDgi_fontname_property) {
            return visitor.visitDgi_fontname_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Dgi_fontsize_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public INT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.INT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_dgi_fontsize_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterDgi_fontsize_property) {
             listener.enterDgi_fontsize_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitDgi_fontsize_property) {
             listener.exitDgi_fontsize_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitDgi_fontsize_property) {
            return visitor.visitDgi_fontsize_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Dgi_fontisbold_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public BOOLEAN(): antlr.TerminalNode {
        return this.getToken(MapIniParser.BOOLEAN, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_dgi_fontisbold_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterDgi_fontisbold_property) {
             listener.enterDgi_fontisbold_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitDgi_fontisbold_property) {
             listener.exitDgi_fontisbold_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitDgi_fontisbold_property) {
            return visitor.visitDgi_fontisbold_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Dgi_drawposXperc_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public PROCENT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.PROCENT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_dgi_drawposXperc_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterDgi_drawposXperc_property) {
             listener.enterDgi_drawposXperc_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitDgi_drawposXperc_property) {
             listener.exitDgi_drawposXperc_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitDgi_drawposXperc_property) {
            return visitor.visitDgi_drawposXperc_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Dgi_drawposYperc_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public INT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.INT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_dgi_drawposYperc_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterDgi_drawposYperc_property) {
             listener.enterDgi_drawposYperc_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitDgi_drawposYperc_property) {
             listener.exitDgi_drawposYperc_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitDgi_drawposYperc_property) {
            return visitor.visitDgi_drawposYperc_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_ps_name_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public particlesystem_value(): Particlesystem_valueContext {
        return this.getRuleContext(0, Particlesystem_valueContext)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_ps_name_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_ps_name_property) {
             listener.enterFxlist_ps_name_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_ps_name_property) {
             listener.exitFxlist_ps_name_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_ps_name_property) {
            return visitor.visitFxlist_ps_name_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_ps_count_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.INT, 0);
    }
    public rand_value(): Rand_valueContext | null {
        return this.getRuleContext(0, Rand_valueContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_ps_count_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_ps_count_property) {
             listener.enterFxlist_ps_count_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_ps_count_property) {
             listener.exitFxlist_ps_count_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_ps_count_property) {
            return visitor.visitFxlist_ps_count_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_ps_offset_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public coord3D(): Coord3DContext {
        return this.getRuleContext(0, Coord3DContext)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_ps_offset_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_ps_offset_property) {
             listener.enterFxlist_ps_offset_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_ps_offset_property) {
             listener.exitFxlist_ps_offset_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_ps_offset_property) {
            return visitor.visitFxlist_ps_offset_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_ps_radius_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public rand_value(): Rand_valueContext | null {
        return this.getRuleContext(0, Rand_valueContext);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.INT, 0);
    }
    public FLOAT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.FLOAT, 0);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_ps_radius_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_ps_radius_property) {
             listener.enterFxlist_ps_radius_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_ps_radius_property) {
             listener.exitFxlist_ps_radius_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_ps_radius_property) {
            return visitor.visitFxlist_ps_radius_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_ps_height_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public rand_value(): Rand_valueContext | null {
        return this.getRuleContext(0, Rand_valueContext);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.INT, 0);
    }
    public FLOAT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.FLOAT, 0);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_ps_height_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_ps_height_property) {
             listener.enterFxlist_ps_height_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_ps_height_property) {
             listener.exitFxlist_ps_height_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_ps_height_property) {
            return visitor.visitFxlist_ps_height_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_ps_initialDelay_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public rand_value(): Rand_valueContext {
        return this.getRuleContext(0, Rand_valueContext)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_ps_initialDelay_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_ps_initialDelay_property) {
             listener.enterFxlist_ps_initialDelay_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_ps_initialDelay_property) {
             listener.exitFxlist_ps_initialDelay_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_ps_initialDelay_property) {
            return visitor.visitFxlist_ps_initialDelay_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_ps_rotateX_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public INT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.INT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_ps_rotateX_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_ps_rotateX_property) {
             listener.enterFxlist_ps_rotateX_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_ps_rotateX_property) {
             listener.exitFxlist_ps_rotateX_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_ps_rotateX_property) {
            return visitor.visitFxlist_ps_rotateX_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_ps_rotatey_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public INT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.INT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_ps_rotatey_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_ps_rotatey_property) {
             listener.enterFxlist_ps_rotatey_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_ps_rotatey_property) {
             listener.exitFxlist_ps_rotatey_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_ps_rotatey_property) {
            return visitor.visitFxlist_ps_rotatey_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_ps_rotateZ_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public INT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.INT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_ps_rotateZ_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_ps_rotateZ_property) {
             listener.enterFxlist_ps_rotateZ_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_ps_rotateZ_property) {
             listener.exitFxlist_ps_rotateZ_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_ps_rotateZ_property) {
            return visitor.visitFxlist_ps_rotateZ_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_ps_orienttoobject_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public BOOLEAN(): antlr.TerminalNode {
        return this.getToken(MapIniParser.BOOLEAN, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_ps_orienttoobject_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_ps_orienttoobject_property) {
             listener.enterFxlist_ps_orienttoobject_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_ps_orienttoobject_property) {
             listener.exitFxlist_ps_orienttoobject_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_ps_orienttoobject_property) {
            return visitor.visitFxlist_ps_orienttoobject_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_ps_ricochet_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public BOOLEAN(): antlr.TerminalNode {
        return this.getToken(MapIniParser.BOOLEAN, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_ps_ricochet_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_ps_ricochet_property) {
             listener.enterFxlist_ps_ricochet_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_ps_ricochet_property) {
             listener.exitFxlist_ps_ricochet_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_ps_ricochet_property) {
            return visitor.visitFxlist_ps_ricochet_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_ps_usecallerradius_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public BOOLEAN(): antlr.TerminalNode {
        return this.getToken(MapIniParser.BOOLEAN, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_ps_usecallerradius_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_ps_usecallerradius_property) {
             listener.enterFxlist_ps_usecallerradius_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_ps_usecallerradius_property) {
             listener.exitFxlist_ps_usecallerradius_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_ps_usecallerradius_property) {
            return visitor.visitFxlist_ps_usecallerradius_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_ps_attachtoobject_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public BOOLEAN(): antlr.TerminalNode {
        return this.getToken(MapIniParser.BOOLEAN, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_ps_attachtoobject_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_ps_attachtoobject_property) {
             listener.enterFxlist_ps_attachtoobject_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_ps_attachtoobject_property) {
             listener.exitFxlist_ps_attachtoobject_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_ps_attachtoobject_property) {
            return visitor.visitFxlist_ps_attachtoobject_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_ps_creategroundheight_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public BOOLEAN(): antlr.TerminalNode {
        return this.getToken(MapIniParser.BOOLEAN, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_ps_creategroundheight_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_ps_creategroundheight_property) {
             listener.enterFxlist_ps_creategroundheight_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_ps_creategroundheight_property) {
             listener.exitFxlist_ps_creategroundheight_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_ps_creategroundheight_property) {
            return visitor.visitFxlist_ps_creategroundheight_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_sound_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public audioevent_value(): Audioevent_valueContext {
        return this.getRuleContext(0, Audioevent_valueContext)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_sound_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_sound_property) {
             listener.enterFxlist_sound_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_sound_property) {
             listener.exitFxlist_sound_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_sound_property) {
            return visitor.visitFxlist_sound_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_rayeffect_primaryoffset_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public coord3D(): Coord3DContext {
        return this.getRuleContext(0, Coord3DContext)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_rayeffect_primaryoffset_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_rayeffect_primaryoffset_property) {
             listener.enterFxlist_rayeffect_primaryoffset_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_rayeffect_primaryoffset_property) {
             listener.exitFxlist_rayeffect_primaryoffset_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_rayeffect_primaryoffset_property) {
            return visitor.visitFxlist_rayeffect_primaryoffset_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_rayeffect_secondaryoffset_propretyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public coord3D(): Coord3DContext {
        return this.getRuleContext(0, Coord3DContext)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_rayeffect_secondaryoffset_proprety;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_rayeffect_secondaryoffset_proprety) {
             listener.enterFxlist_rayeffect_secondaryoffset_proprety(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_rayeffect_secondaryoffset_proprety) {
             listener.exitFxlist_rayeffect_secondaryoffset_proprety(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_rayeffect_secondaryoffset_proprety) {
            return visitor.visitFxlist_rayeffect_secondaryoffset_proprety(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_tracer_name_propetyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public object_value(): Object_valueContext {
        return this.getRuleContext(0, Object_valueContext)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_tracer_name_propety;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_tracer_name_propety) {
             listener.enterFxlist_tracer_name_propety(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_tracer_name_propety) {
             listener.exitFxlist_tracer_name_propety(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_tracer_name_propety) {
            return visitor.visitFxlist_tracer_name_propety(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_tracer_bonename_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_tracer_bonename_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_tracer_bonename_property) {
             listener.enterFxlist_tracer_bonename_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_tracer_bonename_property) {
             listener.exitFxlist_tracer_bonename_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_tracer_bonename_property) {
            return visitor.visitFxlist_tracer_bonename_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_tracer_speed_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.INT, 0);
    }
    public FLOAT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.FLOAT, 0);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_tracer_speed_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_tracer_speed_property) {
             listener.enterFxlist_tracer_speed_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_tracer_speed_property) {
             listener.exitFxlist_tracer_speed_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_tracer_speed_property) {
            return visitor.visitFxlist_tracer_speed_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_tracer_decayat_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.INT, 0);
    }
    public FLOAT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.FLOAT, 0);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_tracer_decayat_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_tracer_decayat_property) {
             listener.enterFxlist_tracer_decayat_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_tracer_decayat_property) {
             listener.exitFxlist_tracer_decayat_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_tracer_decayat_property) {
            return visitor.visitFxlist_tracer_decayat_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_tracer_length_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.INT, 0);
    }
    public FLOAT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.FLOAT, 0);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_tracer_length_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_tracer_length_property) {
             listener.enterFxlist_tracer_length_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_tracer_length_property) {
             listener.exitFxlist_tracer_length_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_tracer_length_property) {
            return visitor.visitFxlist_tracer_length_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_tracer_width_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.INT, 0);
    }
    public FLOAT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.FLOAT, 0);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_tracer_width_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_tracer_width_property) {
             listener.enterFxlist_tracer_width_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_tracer_width_property) {
             listener.exitFxlist_tracer_width_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_tracer_width_property) {
            return visitor.visitFxlist_tracer_width_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_tracer_color_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public R(): antlr.TerminalNode {
        return this.getToken(MapIniParser.R, 0)!;
    }
    public G(): antlr.TerminalNode {
        return this.getToken(MapIniParser.G, 0)!;
    }
    public B(): antlr.TerminalNode {
        return this.getToken(MapIniParser.B, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_tracer_color_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_tracer_color_property) {
             listener.enterFxlist_tracer_color_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_tracer_color_property) {
             listener.exitFxlist_tracer_color_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_tracer_color_property) {
            return visitor.visitFxlist_tracer_color_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_tracer_probability_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.INT, 0);
    }
    public FLOAT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.FLOAT, 0);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_tracer_probability_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_tracer_probability_property) {
             listener.enterFxlist_tracer_probability_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_tracer_probability_property) {
             listener.exitFxlist_tracer_probability_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_tracer_probability_property) {
            return visitor.visitFxlist_tracer_probability_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_lightpulse_color_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public R(): antlr.TerminalNode {
        return this.getToken(MapIniParser.R, 0)!;
    }
    public G(): antlr.TerminalNode {
        return this.getToken(MapIniParser.G, 0)!;
    }
    public B(): antlr.TerminalNode {
        return this.getToken(MapIniParser.B, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_lightpulse_color_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_lightpulse_color_property) {
             listener.enterFxlist_lightpulse_color_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_lightpulse_color_property) {
             listener.exitFxlist_lightpulse_color_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_lightpulse_color_property) {
            return visitor.visitFxlist_lightpulse_color_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_lightpulse_radius_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.INT, 0);
    }
    public FLOAT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.FLOAT, 0);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_lightpulse_radius_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_lightpulse_radius_property) {
             listener.enterFxlist_lightpulse_radius_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_lightpulse_radius_property) {
             listener.exitFxlist_lightpulse_radius_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_lightpulse_radius_property) {
            return visitor.visitFxlist_lightpulse_radius_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_lightpulse_radiuspercentobjectsize_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public PROCENT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.PROCENT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_lightpulse_radiuspercentobjectsize_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_lightpulse_radiuspercentobjectsize_property) {
             listener.enterFxlist_lightpulse_radiuspercentobjectsize_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_lightpulse_radiuspercentobjectsize_property) {
             listener.exitFxlist_lightpulse_radiuspercentobjectsize_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_lightpulse_radiuspercentobjectsize_property) {
            return visitor.visitFxlist_lightpulse_radiuspercentobjectsize_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_lightpulse_increasetime_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public INT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.INT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_lightpulse_increasetime_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_lightpulse_increasetime_property) {
             listener.enterFxlist_lightpulse_increasetime_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_lightpulse_increasetime_property) {
             listener.exitFxlist_lightpulse_increasetime_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_lightpulse_increasetime_property) {
            return visitor.visitFxlist_lightpulse_increasetime_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_lightpulse_decreasetime_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public INT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.INT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_lightpulse_decreasetime_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_lightpulse_decreasetime_property) {
             listener.enterFxlist_lightpulse_decreasetime_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_lightpulse_decreasetime_property) {
             listener.exitFxlist_lightpulse_decreasetime_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_lightpulse_decreasetime_property) {
            return visitor.visitFxlist_lightpulse_decreasetime_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_viewshake_type_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_viewshake_type_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_viewshake_type_property) {
             listener.enterFxlist_viewshake_type_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_viewshake_type_property) {
             listener.exitFxlist_viewshake_type_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_viewshake_type_property) {
            return visitor.visitFxlist_viewshake_type_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_scorch_type_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_scorch_type_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_scorch_type_property) {
             listener.enterFxlist_scorch_type_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_scorch_type_property) {
             listener.exitFxlist_scorch_type_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_scorch_type_property) {
            return visitor.visitFxlist_scorch_type_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_scorch_radius_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.INT, 0);
    }
    public FLOAT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.FLOAT, 0);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_scorch_radius_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_scorch_radius_property) {
             listener.enterFxlist_scorch_radius_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_scorch_radius_property) {
             listener.exitFxlist_scorch_radius_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_scorch_radius_property) {
            return visitor.visitFxlist_scorch_radius_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_atbonepos_fx_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public fxlist_value(): Fxlist_valueContext {
        return this.getRuleContext(0, Fxlist_valueContext)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_atbonepos_fx_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_atbonepos_fx_property) {
             listener.enterFxlist_atbonepos_fx_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_atbonepos_fx_property) {
             listener.exitFxlist_atbonepos_fx_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_atbonepos_fx_property) {
            return visitor.visitFxlist_atbonepos_fx_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_atbonepos_bonename_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_atbonepos_bonename_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_atbonepos_bonename_property) {
             listener.enterFxlist_atbonepos_bonename_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_atbonepos_bonename_property) {
             listener.exitFxlist_atbonepos_bonename_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_atbonepos_bonename_property) {
            return visitor.visitFxlist_atbonepos_bonename_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_atbonepos_orienttoobject_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public BOOLEAN(): antlr.TerminalNode {
        return this.getToken(MapIniParser.BOOLEAN, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_atbonepos_orienttoobject_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_atbonepos_orienttoobject_property) {
             listener.enterFxlist_atbonepos_orienttoobject_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_atbonepos_orienttoobject_property) {
             listener.exitFxlist_atbonepos_orienttoobject_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_atbonepos_orienttoobject_property) {
            return visitor.visitFxlist_atbonepos_orienttoobject_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_name_object_propetyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public object_value(): Object_valueContext {
        return this.getRuleContext(0, Object_valueContext)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_name_object_propety;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_name_object_propety) {
             listener.enterFxlist_name_object_propety(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_name_object_propety) {
             listener.exitFxlist_name_object_propety(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_name_object_propety) {
            return visitor.visitFxlist_name_object_propety(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Igui_propertiesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.INT, 0);
    }
    public R(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.R, 0);
    }
    public G(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.G, 0);
    }
    public B(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.B, 0);
    }
    public XCOORD(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.XCOORD, 0);
    }
    public YCOORD(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.YCOORD, 0);
    }
    public ID(): antlr.TerminalNode[];
    public ID(i: number): antlr.TerminalNode | null;
    public ID(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.ID);
    	} else {
    		return this.getToken(MapIniParser.ID, i);
    	}
    }
    public BOOLEAN(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.BOOLEAN, 0);
    }
    public A(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.A, 0);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_igui_properties;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterIgui_properties) {
             listener.enterIgui_properties(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitIgui_properties) {
             listener.exitIgui_properties(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitIgui_properties) {
            return visitor.visitIgui_properties(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Faction_valueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_faction_value;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFaction_value) {
             listener.enterFaction_value(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFaction_value) {
             listener.exitFaction_value(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFaction_value) {
            return visitor.visitFaction_value(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Commandbutton_valueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_commandbutton_value;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterCommandbutton_value) {
             listener.enterCommandbutton_value(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitCommandbutton_value) {
             listener.exitCommandbutton_value(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitCommandbutton_value) {
            return visitor.visitCommandbutton_value(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Cursorname_valueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_cursorname_value;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterCursorname_value) {
             listener.enterCursorname_value(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitCursorname_value) {
             listener.exitCursorname_value(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitCursorname_value) {
            return visitor.visitCursorname_value(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Radius_cursorname_valueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_radius_cursorname_value;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterRadius_cursorname_value) {
             listener.enterRadius_cursorname_value(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitRadius_cursorname_value) {
             listener.exitRadius_cursorname_value(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitRadius_cursorname_value) {
            return visitor.visitRadius_cursorname_value(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Invalid_cursorname_valueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_invalid_cursorname_value;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterInvalid_cursorname_value) {
             listener.enterInvalid_cursorname_value(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitInvalid_cursorname_value) {
             listener.exitInvalid_cursorname_value(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitInvalid_cursorname_value) {
            return visitor.visitInvalid_cursorname_value(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Mappedimage_valueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_mappedimage_value;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterMappedimage_value) {
             listener.enterMappedimage_value(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitMappedimage_value) {
             listener.exitMappedimage_value(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitMappedimage_value) {
            return visitor.visitMappedimage_value(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Particlesystem_valueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_particlesystem_value;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterParticlesystem_value) {
             listener.enterParticlesystem_value(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitParticlesystem_value) {
             listener.exitParticlesystem_value(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitParticlesystem_value) {
            return visitor.visitParticlesystem_value(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Fxlist_valueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_fxlist_value;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterFxlist_value) {
             listener.enterFxlist_value(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitFxlist_value) {
             listener.exitFxlist_value(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitFxlist_value) {
            return visitor.visitFxlist_value(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Object_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public object_value(): Object_valueContext {
        return this.getRuleContext(0, Object_valueContext)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_object_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterObject_property) {
             listener.enterObject_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitObject_property) {
             listener.exitObject_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitObject_property) {
            return visitor.visitObject_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Object_valueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_object_value;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterObject_value) {
             listener.enterObject_value(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitObject_value) {
             listener.exitObject_value(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitObject_value) {
            return visitor.visitObject_value(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Science_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public science_value(): Science_valueContext[];
    public science_value(i: number): Science_valueContext | null;
    public science_value(i?: number): Science_valueContext[] | Science_valueContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Science_valueContext);
        }

        return this.getRuleContext(i, Science_valueContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_science_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterScience_property) {
             listener.enterScience_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitScience_property) {
             listener.exitScience_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitScience_property) {
            return visitor.visitScience_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Science_valueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_science_value;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterScience_value) {
             listener.enterScience_value(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitScience_value) {
             listener.exitScience_value(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitScience_value) {
            return visitor.visitScience_value(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Specialpower_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public specialpower_value(): Specialpower_valueContext {
        return this.getRuleContext(0, Specialpower_valueContext)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_specialpower_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterSpecialpower_property) {
             listener.enterSpecialpower_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitSpecialpower_property) {
             listener.exitSpecialpower_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitSpecialpower_property) {
            return visitor.visitSpecialpower_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Specialpower_valueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_specialpower_value;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterSpecialpower_value) {
             listener.enterSpecialpower_value(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitSpecialpower_value) {
             listener.exitSpecialpower_value(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitSpecialpower_value) {
            return visitor.visitSpecialpower_value(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Audioevent_valueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_audioevent_value;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAudioevent_value) {
             listener.enterAudioevent_value(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAudioevent_value) {
             listener.exitAudioevent_value(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAudioevent_value) {
            return visitor.visitAudioevent_value(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Upgrade_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public upgrade_value(): Upgrade_valueContext {
        return this.getRuleContext(0, Upgrade_valueContext)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_upgrade_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterUpgrade_property) {
             listener.enterUpgrade_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitUpgrade_property) {
             listener.exitUpgrade_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitUpgrade_property) {
            return visitor.visitUpgrade_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Upgrade_valueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_upgrade_value;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterUpgrade_value) {
             listener.enterUpgrade_value(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitUpgrade_value) {
             listener.exitUpgrade_value(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitUpgrade_value) {
            return visitor.visitUpgrade_value(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Weaponslot_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public WEAPONSLOT(): antlr.TerminalNode[];
    public WEAPONSLOT(i: number): antlr.TerminalNode | null;
    public WEAPONSLOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WEAPONSLOT);
    	} else {
    		return this.getToken(MapIniParser.WEAPONSLOT, i);
    	}
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_weaponslot_property;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterWeaponslot_property) {
             listener.enterWeaponslot_property(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitWeaponslot_property) {
             listener.exitWeaponslot_property(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitWeaponslot_property) {
            return visitor.visitWeaponslot_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Rand_valueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INT(): antlr.TerminalNode[];
    public INT(i: number): antlr.TerminalNode | null;
    public INT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.INT);
    	} else {
    		return this.getToken(MapIniParser.INT, i);
    	}
    }
    public DISTRIBUTION_FORM(): antlr.TerminalNode {
        return this.getToken(MapIniParser.DISTRIBUTION_FORM, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_rand_value;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterRand_value) {
             listener.enterRand_value(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitRand_value) {
             listener.exitRand_value(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitRand_value) {
            return visitor.visitRand_value(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Coord3DContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public XCOORD(): antlr.TerminalNode {
        return this.getToken(MapIniParser.XCOORD, 0)!;
    }
    public YCOORD(): antlr.TerminalNode {
        return this.getToken(MapIniParser.YCOORD, 0)!;
    }
    public ZCOORD(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ZCOORD, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_coord3D;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterCoord3D) {
             listener.enterCoord3D(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitCoord3D) {
             listener.exitCoord3D(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitCoord3D) {
            return visitor.visitCoord3D(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
