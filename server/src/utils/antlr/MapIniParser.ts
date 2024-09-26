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
	public static readonly SKIp = 370;
	public static readonly COMMENT = 371;
	public static readonly WS = 372;
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
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "classes", "aiDataClass", "aidataClassProperties_single", "aidataClassproperties_BlockSkirmishBuildList", 
		"skirmishBuildListBlock", "skirmishBuildListBlock_structure_properties", 
		"aidataClassProperties_blockSideinfo", "sideinfoproperties", "sideinfo_skillset_blocks", 
		"mappedImageClass", "mappedImageClassProperties", "animation2DClass", 
		"animation2DClassProperties", "armorClass", "armorClassProperties", "commandButtonClass", 
		"commandButtonClassProperties", "commandSetClass", "commandSetClassProperty", 
		"damageFXClass", "damageFXClassProperties", "drawGroupInfoClass", "drawgroupinfoProperties", 
		"fxListClass", "fxlistblocks", "fxlist_ps_block", "fxlist_sound_block", 
		"fxlist_rayeffect_block", "fxlist_tracer_block", "fxlist_lightpulse_block", 
		"fxlist_viewshake_block", "fxlist_terrainscorch_block", "fxlist_fxlistatbone_block", 
		"inGameUIClass", "igui_blocks", "ingui_block_properties", "locomotorClass", 
		"locomotor_properties", "locomotor_surface_property", "locomotor_zbehavior_property", 
		"locomotor_appereance_property", "locomotor_movepriority_property", "surface_value", 
		"zbehavior_value", "appereance_value", "movepriority_value", "weaponClass", 
		"weapon_properties", "weapon_damagetype_property", "weapon_deathtype_property", 
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
		"fxlist_ps_ricochet_property", "fxlist_ps_usecallerradius_property", "fxlist_ps_attachtoobject_property", 
		"fxlist_ps_creategroundheight_property", "fxlist_sound_property", "fxlist_rayeffect_primaryoffset_property", 
		"fxlist_rayeffect_secondaryoffset_proprety", "fxlist_tracer_name_propety", 
		"fxlist_tracer_bonename_property", "fxlist_tracer_speed_property", "fxlist_tracer_decayat_property", 
		"fxlist_tracer_length_property", "fxlist_tracer_width_property", "fxlist_tracer_color_property", 
		"fxlist_tracer_probability_property", "fxlist_lightpulse_color_property", 
		"fxlist_lightpulse_radius_property", "fxlist_lightpulse_radiuspercentobjectsize_property", 
		"fxlist_lightpulse_increasetime_property", "fxlist_lightpulse_decreasetime_property", 
		"fxlist_viewshake_type_property", "fxlist_scorch_type_property", "fxlist_scorch_radius_property", 
		"fxlist_atbonepos_fx_property", "fxlist_atbonepos_bonename_property", 
		"fxlist_atbonepos_orienttoobject_property", "fxlist_name_object_propety", 
		"igui_properties", "faction_value", "commandbutton_value", "cursorname_value", 
		"radius_cursorname_value", "invalid_cursorname_value", "mappedimage_value", 
		"particlesystem_value", "fxlist_value", "object_property", "object_value", 
		"science_property", "science_value", "specialpower_property", "specialpower_value", 
		"audioevent_value", "upgrade_property", "upgrade_value", "weaponslot_property", 
		"rand_value", "coord3D",
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
		"'Image'", "'Armor'", "'CommandButton'", "'CommandSet'", "'DamageFX'", 
		"'DrawGroupInfo'", "'FXList'", "'ParticleSystem'", "'Sound'", "'RayEffect'", 
		"'Tracer'", "'LightPulse'", "'ViewShake'", "'TerrainScorch'", "'FXListAtBonePos'", 
		"'InGameUI'", "'SpyDroneRadiusCursor'", "'AttackScatterAreaRadiusCursor'", 
		"'SuperweaponScatterAreaRadiusCursor'", "'AttackDamageAreaRadiusCursor'", 
		"'AttackContinueAreaRadiusCursor'", "'GuardAreaRadiusCursor'", "'EmergencyRepairRadiusCursor'", 
		"'FrenzyRadiusCursor'", "'FriendlySpecialPowerRadiusCursor'", "'OffensiveSpecialPowerRadiusCursor'", 
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
		"'End'", "'END'", "'.'", "'tga'", "'dds'", "'Command'", "'Options'", "'ButtonImage'", 
		"'ButtonBorderType'", "'TextLabel'", "'DescriptLabel'", "'ConflictingLabel'", 
		"'CursorName'", "'RadiusCursorType'", "'InvalidCursorName'", "'UnitSpecificSound'", 
		"'MaxShotsToFire'", "'ThrottleTime'", "'AmountForMajorFX'", "'MajorFX'", 
		"'MinorFX'", "'VeterancyMajorFX'", "'VeterancyMinorFX'", "'UsePlayerColor'", 
		"'ColorForText'", "'ColorForTextDropShadow'", "'DropShadowOffsetX'", "'DropShadowOffsetY'", 
		"'FontName'", "'FontSize'", "'FontIsBold'", "'DrawPositionXPercent'", 
		"'DrawPositionYPixel'", "'Name'", "'Count'", "'Offset'", "'Radius'", "'Height'", 
		"'InitialDelay'", "'RotateX'", "'RotateY'", "'RotateZ'", "'OrientToObject'", 
		"'Ricochet'", "'UseCallersRadius'", "'AttachToObject'", "'CreateAtGroundHeight'", 
		"'PrimaryOffset'", "'SecondaryOffset'", "'TracerName'", "'BoneName'", 
		"'DecayAt'", "'Length'", "'Width'", "'Probability'", "'RadiusAsPercentOfObjectSize'", 
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
		"'WeaponSlot'", undefined, undefined, undefined, "'='",
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
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "INT", "FLOAT", 
		"PROCENT", "EQ", "WEAPONSLOT", "VETERENCY", "XCOORD", "YCOORD", "ZCOORD", 
		"COORDLEFT", "COORDTOP", "COORDRIGHT", "COORDBOTTOM", "R", "G", "B", "A", 
		"DISTRIBUTION_FORM", "MANUAL", "BOOLEAN", "STRING", "ID", "SKIp", "COMMENT", 
		"WS",
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
			this.state = 307;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.T__0 || ((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & ((1 << (MapIniParser.T__60 - 61)) | (1 << (MapIniParser.T__67 - 61)) | (1 << (MapIniParser.T__73 - 61)) | (1 << (MapIniParser.T__74 - 61)) | (1 << (MapIniParser.T__75 - 61)) | (1 << (MapIniParser.T__76 - 61)) | (1 << (MapIniParser.T__77 - 61)) | (1 << (MapIniParser.T__78 - 61)) | (1 << (MapIniParser.T__87 - 61)))) !== 0) || _la === MapIniParser.T__123 || _la === MapIniParser.T__184 || _la === MapIniParser.T__223) {
				{
				{
				this.state = 304;
				this.classes();
				}
				}
				this.state = 309;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 310;
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
			this.state = 325;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapIniParser.T__60:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 312;
				this.mappedImageClass();
				}
				break;
			case MapIniParser.T__0:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 313;
				this.aiDataClass();
				}
				break;
			case MapIniParser.T__67:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 314;
				this.animation2DClass();
				}
				break;
			case MapIniParser.T__73:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 315;
				this.armorClass();
				}
				break;
			case MapIniParser.T__74:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 316;
				this.commandButtonClass();
				}
				break;
			case MapIniParser.T__75:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 317;
				this.commandSetClass();
				}
				break;
			case MapIniParser.T__76:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 318;
				this.damageFXClass();
				}
				break;
			case MapIniParser.T__77:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 319;
				this.drawGroupInfoClass();
				}
				break;
			case MapIniParser.T__78:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 320;
				this.fxListClass();
				}
				break;
			case MapIniParser.T__87:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 321;
				this.inGameUIClass();
				}
				break;
			case MapIniParser.T__123:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 322;
				this.locomotorClass();
				}
				break;
			case MapIniParser.T__184:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 323;
				this.weaponClass();
				}
				break;
			case MapIniParser.T__223:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 324;
				this.weatherClass();
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
			this.state = 327;
			this.match(MapIniParser.T__0);
			this.state = 333;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MapIniParser.T__1) | (1 << MapIniParser.T__2) | (1 << MapIniParser.T__3) | (1 << MapIniParser.T__4) | (1 << MapIniParser.T__5) | (1 << MapIniParser.T__6) | (1 << MapIniParser.T__7) | (1 << MapIniParser.T__8) | (1 << MapIniParser.T__9) | (1 << MapIniParser.T__10) | (1 << MapIniParser.T__11) | (1 << MapIniParser.T__12) | (1 << MapIniParser.T__13) | (1 << MapIniParser.T__14) | (1 << MapIniParser.T__15) | (1 << MapIniParser.T__16) | (1 << MapIniParser.T__17) | (1 << MapIniParser.T__18) | (1 << MapIniParser.T__19) | (1 << MapIniParser.T__20) | (1 << MapIniParser.T__21) | (1 << MapIniParser.T__22) | (1 << MapIniParser.T__23) | (1 << MapIniParser.T__24) | (1 << MapIniParser.T__25) | (1 << MapIniParser.T__26) | (1 << MapIniParser.T__27) | (1 << MapIniParser.T__28) | (1 << MapIniParser.T__29) | (1 << MapIniParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (MapIniParser.T__31 - 32)) | (1 << (MapIniParser.T__32 - 32)) | (1 << (MapIniParser.T__33 - 32)) | (1 << (MapIniParser.T__34 - 32)) | (1 << (MapIniParser.T__35 - 32)) | (1 << (MapIniParser.T__36 - 32)) | (1 << (MapIniParser.T__37 - 32)) | (1 << (MapIniParser.T__38 - 32)) | (1 << (MapIniParser.T__39 - 32)) | (1 << (MapIniParser.T__40 - 32)) | (1 << (MapIniParser.T__41 - 32)) | (1 << (MapIniParser.T__42 - 32)) | (1 << (MapIniParser.T__43 - 32)) | (1 << (MapIniParser.T__50 - 32)))) !== 0)) {
				{
				this.state = 331;
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
					this.state = 328;
					this.aidataClassProperties_single();
					}
					break;
				case MapIniParser.T__50:
					{
					this.state = 329;
					this.aidataClassProperties_blockSideinfo();
					}
					break;
				case MapIniParser.T__43:
					{
					this.state = 330;
					this.aidataClassproperties_BlockSkirmishBuildList();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 335;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 336;
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
			this.state = 464;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapIniParser.T__1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 338;
				this.match(MapIniParser.T__1);
				this.state = 339;
				this.match(MapIniParser.EQ);
				this.state = 340;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 341;
				this.match(MapIniParser.T__2);
				this.state = 342;
				this.match(MapIniParser.EQ);
				this.state = 343;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 344;
				this.match(MapIniParser.T__3);
				this.state = 345;
				this.match(MapIniParser.EQ);
				this.state = 346;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 347;
				this.match(MapIniParser.T__4);
				this.state = 348;
				this.match(MapIniParser.EQ);
				this.state = 349;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 350;
				this.match(MapIniParser.T__5);
				this.state = 351;
				this.match(MapIniParser.EQ);
				this.state = 352;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 353;
				this.match(MapIniParser.T__6);
				this.state = 354;
				this.match(MapIniParser.EQ);
				this.state = 355;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 356;
				this.match(MapIniParser.T__7);
				this.state = 357;
				this.match(MapIniParser.EQ);
				this.state = 358;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 359;
				this.match(MapIniParser.T__8);
				this.state = 360;
				this.match(MapIniParser.EQ);
				this.state = 361;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 362;
				this.match(MapIniParser.T__9);
				this.state = 363;
				this.match(MapIniParser.EQ);
				this.state = 364;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 365;
				this.match(MapIniParser.T__10);
				this.state = 366;
				this.match(MapIniParser.EQ);
				this.state = 367;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 368;
				this.match(MapIniParser.T__11);
				this.state = 369;
				this.match(MapIniParser.EQ);
				this.state = 370;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 371;
				this.match(MapIniParser.T__12);
				this.state = 372;
				this.match(MapIniParser.EQ);
				this.state = 373;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 374;
				this.match(MapIniParser.T__13);
				this.state = 375;
				this.match(MapIniParser.EQ);
				this.state = 376;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 377;
				this.match(MapIniParser.T__14);
				this.state = 378;
				this.match(MapIniParser.EQ);
				this.state = 379;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 380;
				this.match(MapIniParser.T__15);
				this.state = 381;
				this.match(MapIniParser.EQ);
				this.state = 382;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 383;
				this.match(MapIniParser.T__16);
				this.state = 384;
				this.match(MapIniParser.EQ);
				this.state = 385;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 386;
				this.match(MapIniParser.T__17);
				this.state = 387;
				this.match(MapIniParser.EQ);
				this.state = 388;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 389;
				this.match(MapIniParser.T__18);
				this.state = 390;
				this.match(MapIniParser.EQ);
				this.state = 391;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 392;
				this.match(MapIniParser.T__19);
				this.state = 393;
				this.match(MapIniParser.EQ);
				this.state = 394;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 395;
				this.match(MapIniParser.T__20);
				this.state = 396;
				this.match(MapIniParser.EQ);
				this.state = 397;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 398;
				this.match(MapIniParser.T__21);
				this.state = 399;
				this.match(MapIniParser.EQ);
				this.state = 400;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 401;
				this.match(MapIniParser.T__22);
				this.state = 402;
				this.match(MapIniParser.EQ);
				this.state = 403;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 404;
				this.match(MapIniParser.T__23);
				this.state = 405;
				this.match(MapIniParser.EQ);
				this.state = 406;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__24:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 407;
				this.match(MapIniParser.T__24);
				this.state = 408;
				this.match(MapIniParser.EQ);
				this.state = 409;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__25:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 410;
				this.match(MapIniParser.T__25);
				this.state = 411;
				this.match(MapIniParser.EQ);
				this.state = 412;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__26:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 413;
				this.match(MapIniParser.T__26);
				this.state = 414;
				this.match(MapIniParser.EQ);
				this.state = 415;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__27:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 416;
				this.match(MapIniParser.T__27);
				this.state = 417;
				this.match(MapIniParser.EQ);
				this.state = 418;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__28:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 419;
				this.match(MapIniParser.T__28);
				this.state = 420;
				this.match(MapIniParser.EQ);
				this.state = 421;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__29:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 422;
				this.match(MapIniParser.T__29);
				this.state = 423;
				this.match(MapIniParser.EQ);
				this.state = 424;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__30:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 425;
				this.match(MapIniParser.T__30);
				this.state = 426;
				this.match(MapIniParser.EQ);
				this.state = 427;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__31:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 428;
				this.match(MapIniParser.T__31);
				this.state = 429;
				this.match(MapIniParser.EQ);
				this.state = 430;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__32:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 431;
				this.match(MapIniParser.T__32);
				this.state = 432;
				this.match(MapIniParser.EQ);
				this.state = 433;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__33:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 434;
				this.match(MapIniParser.T__33);
				this.state = 435;
				this.match(MapIniParser.EQ);
				this.state = 436;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__34:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 437;
				this.match(MapIniParser.T__34);
				this.state = 438;
				this.match(MapIniParser.EQ);
				this.state = 439;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__35:
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 440;
				this.match(MapIniParser.T__35);
				this.state = 441;
				this.match(MapIniParser.EQ);
				this.state = 442;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__36:
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 443;
				this.match(MapIniParser.T__36);
				this.state = 444;
				this.match(MapIniParser.EQ);
				this.state = 445;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__37:
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 446;
				this.match(MapIniParser.T__37);
				this.state = 447;
				this.match(MapIniParser.EQ);
				this.state = 448;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__38:
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 449;
				this.match(MapIniParser.T__38);
				this.state = 450;
				this.match(MapIniParser.EQ);
				this.state = 451;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__39:
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 452;
				this.match(MapIniParser.T__39);
				this.state = 453;
				this.match(MapIniParser.EQ);
				this.state = 454;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__40:
				this.enterOuterAlt(_localctx, 40);
				{
				this.state = 455;
				this.match(MapIniParser.T__40);
				this.state = 456;
				this.match(MapIniParser.EQ);
				this.state = 457;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__41:
				this.enterOuterAlt(_localctx, 41);
				{
				this.state = 458;
				this.match(MapIniParser.T__41);
				this.state = 459;
				this.match(MapIniParser.EQ);
				this.state = 460;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__42:
				this.enterOuterAlt(_localctx, 42);
				{
				this.state = 461;
				this.match(MapIniParser.T__42);
				this.state = 462;
				this.match(MapIniParser.EQ);
				this.state = 463;
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
			this.state = 466;
			this.match(MapIniParser.T__43);
			this.state = 467;
			this.faction_value();
			this.state = 471;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.T__44) {
				{
				{
				this.state = 468;
				this.skirmishBuildListBlock();
				}
				}
				this.state = 473;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 474;
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
			this.state = 476;
			this.match(MapIniParser.T__44);
			this.state = 477;
			this.object_value();
			this.state = 481;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (MapIniParser.T__45 - 46)) | (1 << (MapIniParser.T__46 - 46)) | (1 << (MapIniParser.T__47 - 46)) | (1 << (MapIniParser.T__48 - 46)) | (1 << (MapIniParser.T__49 - 46)))) !== 0)) {
				{
				{
				this.state = 478;
				this.skirmishBuildListBlock_structure_properties();
				}
				}
				this.state = 483;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 484;
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
			this.state = 502;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapIniParser.T__45:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 486;
				this.match(MapIniParser.T__45);
				this.state = 487;
				this.match(MapIniParser.EQ);
				this.state = 488;
				this.match(MapIniParser.XCOORD);
				this.state = 489;
				this.match(MapIniParser.YCOORD);
				}
				break;
			case MapIniParser.T__46:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 490;
				this.match(MapIniParser.T__46);
				this.state = 491;
				this.match(MapIniParser.EQ);
				this.state = 492;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__47:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 493;
				this.match(MapIniParser.T__47);
				this.state = 494;
				this.match(MapIniParser.EQ);
				this.state = 495;
				this.match(MapIniParser.FLOAT);
				}
				break;
			case MapIniParser.T__48:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 496;
				this.match(MapIniParser.T__48);
				this.state = 497;
				this.match(MapIniParser.EQ);
				this.state = 498;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__49:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 499;
				this.match(MapIniParser.T__49);
				this.state = 500;
				this.match(MapIniParser.EQ);
				this.state = 501;
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
			this.state = 504;
			this.match(MapIniParser.T__50);
			this.state = 505;
			this.match(MapIniParser.ID);
			this.state = 509;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (MapIniParser.T__51 - 52)) | (1 << (MapIniParser.T__52 - 52)) | (1 << (MapIniParser.T__53 - 52)) | (1 << (MapIniParser.T__54 - 52)) | (1 << (MapIniParser.T__55 - 52)) | (1 << (MapIniParser.T__56 - 52)) | (1 << (MapIniParser.T__57 - 52)) | (1 << (MapIniParser.T__58 - 52)) | (1 << (MapIniParser.T__59 - 52)))) !== 0)) {
				{
				{
				this.state = 506;
				this.sideinfoproperties();
				}
				}
				this.state = 511;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 512;
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
			this.state = 527;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapIniParser.T__51:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 514;
				this.match(MapIniParser.T__51);
				this.state = 515;
				this.match(MapIniParser.EQ);
				this.state = 516;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__52:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 517;
				this.match(MapIniParser.T__52);
				this.state = 518;
				this.match(MapIniParser.EQ);
				this.state = 519;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__53:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 520;
				this.match(MapIniParser.T__53);
				this.state = 521;
				this.match(MapIniParser.EQ);
				this.state = 522;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__54:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 523;
				this.match(MapIniParser.T__54);
				this.state = 524;
				this.match(MapIniParser.EQ);
				this.state = 525;
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
				this.state = 526;
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
			this.state = 529;
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
			this.state = 533;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.T__343) {
				{
				{
				this.state = 530;
				this.science_property();
				}
				}
				this.state = 535;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 536;
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
			this.state = 538;
			this.match(MapIniParser.T__60);
			this.state = 539;
			this.match(MapIniParser.ID);
			this.state = 543;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (MapIniParser.T__61 - 62)) | (1 << (MapIniParser.T__62 - 62)) | (1 << (MapIniParser.T__63 - 62)) | (1 << (MapIniParser.T__64 - 62)) | (1 << (MapIniParser.T__65 - 62)))) !== 0)) {
				{
				{
				this.state = 540;
				this.mappedImageClassProperties();
				}
				}
				this.state = 545;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 546;
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
			this.state = 566;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapIniParser.T__61:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 548;
				this.match(MapIniParser.T__61);
				this.state = 549;
				this.match(MapIniParser.EQ);
				this.state = 550;
				this.file();
				}
				break;
			case MapIniParser.T__62:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 551;
				this.match(MapIniParser.T__62);
				this.state = 552;
				this.match(MapIniParser.EQ);
				this.state = 553;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__63:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 554;
				this.match(MapIniParser.T__63);
				this.state = 555;
				this.match(MapIniParser.EQ);
				this.state = 556;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__64:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 557;
				this.match(MapIniParser.T__64);
				this.state = 558;
				this.match(MapIniParser.EQ);
				this.state = 559;
				this.match(MapIniParser.COORDLEFT);
				this.state = 560;
				this.match(MapIniParser.COORDTOP);
				this.state = 561;
				this.match(MapIniParser.COORDRIGHT);
				this.state = 562;
				this.match(MapIniParser.COORDBOTTOM);
				}
				break;
			case MapIniParser.T__65:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 563;
				this.match(MapIniParser.T__65);
				this.state = 564;
				this.match(MapIniParser.EQ);
				this.state = 565;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.T__66 || _la === MapIniParser.ID)) {
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
			this.state = 568;
			this.match(MapIniParser.T__67);
			this.state = 569;
			this.match(MapIniParser.ID);
			this.state = 573;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (MapIniParser.T__68 - 69)) | (1 << (MapIniParser.T__69 - 69)) | (1 << (MapIniParser.T__70 - 69)) | (1 << (MapIniParser.T__71 - 69)) | (1 << (MapIniParser.T__72 - 69)))) !== 0)) {
				{
				{
				this.state = 570;
				this.animation2DClassProperties();
				}
				}
				this.state = 575;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 576;
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
			this.state = 593;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapIniParser.T__68:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 578;
				this.match(MapIniParser.T__68);
				this.state = 579;
				this.match(MapIniParser.EQ);
				this.state = 580;
				this.match(MapIniParser.ID);
				}
				break;
			case MapIniParser.T__69:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 581;
				this.match(MapIniParser.T__69);
				this.state = 582;
				this.match(MapIniParser.EQ);
				this.state = 583;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__70:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 584;
				this.match(MapIniParser.T__70);
				this.state = 585;
				this.match(MapIniParser.EQ);
				this.state = 586;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__71:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 587;
				this.match(MapIniParser.T__71);
				this.state = 588;
				this.match(MapIniParser.EQ);
				this.state = 589;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__72:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 590;
				this.match(MapIniParser.T__72);
				this.state = 591;
				this.match(MapIniParser.EQ);
				this.state = 592;
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
			this.state = 595;
			this.match(MapIniParser.T__73);
			this.state = 596;
			this.match(MapIniParser.ID);
			this.state = 600;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.T__73) {
				{
				{
				this.state = 597;
				this.armorClassProperties();
				}
				}
				this.state = 602;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 603;
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
			this.state = 605;
			this.match(MapIniParser.T__73);
			this.state = 606;
			this.match(MapIniParser.EQ);
			this.state = 607;
			this.match(MapIniParser.ID);
			this.state = 608;
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
			this.state = 610;
			this.match(MapIniParser.T__74);
			this.state = 611;
			this.match(MapIniParser.ID);
			this.state = 615;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 244)) & ~0x1F) === 0 && ((1 << (_la - 244)) & ((1 << (MapIniParser.T__243 - 244)) | (1 << (MapIniParser.T__244 - 244)) | (1 << (MapIniParser.T__245 - 244)) | (1 << (MapIniParser.T__246 - 244)) | (1 << (MapIniParser.T__247 - 244)) | (1 << (MapIniParser.T__248 - 244)) | (1 << (MapIniParser.T__249 - 244)) | (1 << (MapIniParser.T__250 - 244)) | (1 << (MapIniParser.T__251 - 244)) | (1 << (MapIniParser.T__252 - 244)) | (1 << (MapIniParser.T__253 - 244)) | (1 << (MapIniParser.T__254 - 244)))) !== 0) || ((((_la - 343)) & ~0x1F) === 0 && ((1 << (_la - 343)) & ((1 << (MapIniParser.T__342 - 343)) | (1 << (MapIniParser.T__343 - 343)) | (1 << (MapIniParser.T__344 - 343)) | (1 << (MapIniParser.T__345 - 343)) | (1 << (MapIniParser.T__346 - 343)))) !== 0)) {
				{
				{
				this.state = 612;
				this.commandButtonClassProperties();
				}
				}
				this.state = 617;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 618;
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
			this.state = 637;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapIniParser.T__243:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 620;
				this.cb_command_property();
				}
				break;
			case MapIniParser.T__244:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 621;
				this.cb_options_property();
				}
				break;
			case MapIniParser.T__245:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 622;
				this.cb_buttonimage_property();
				}
				break;
			case MapIniParser.T__246:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 623;
				this.cb_buttonbordertype_property();
				}
				break;
			case MapIniParser.T__247:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 624;
				this.cb_textlabel_property();
				}
				break;
			case MapIniParser.T__248:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 625;
				this.cb_descriptionlabel_property();
				}
				break;
			case MapIniParser.T__249:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 626;
				this.cb_conflictinglabel_property();
				}
				break;
			case MapIniParser.T__250:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 627;
				this.cb_cursorname_propery();
				}
				break;
			case MapIniParser.T__251:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 628;
				this.cb_radius_cursorname_value();
				}
				break;
			case MapIniParser.T__252:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 629;
				this.cb_invalid_cursorname_propery();
				}
				break;
			case MapIniParser.T__253:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 630;
				this.cb_unitspecificsound_property();
				}
				break;
			case MapIniParser.T__254:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 631;
				this.cb_maxshotsfire_property();
				}
				break;
			case MapIniParser.T__342:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 632;
				this.object_property();
				}
				break;
			case MapIniParser.T__343:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 633;
				this.science_property();
				}
				break;
			case MapIniParser.T__344:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 634;
				this.specialpower_property();
				}
				break;
			case MapIniParser.T__345:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 635;
				this.upgrade_property();
				}
				break;
			case MapIniParser.T__346:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 636;
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
			this.state = 639;
			this.match(MapIniParser.T__75);
			this.state = 640;
			this.match(MapIniParser.ID);
			this.state = 644;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.INT) {
				{
				{
				this.state = 641;
				this.commandSetClassProperty();
				}
				}
				this.state = 646;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 647;
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
			this.state = 649;
			this.match(MapIniParser.INT);
			this.state = 650;
			this.match(MapIniParser.EQ);
			this.state = 651;
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
	public damageFXClass(): DamageFXClassContext {
		let _localctx: DamageFXClassContext = new DamageFXClassContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, MapIniParser.RULE_damageFXClass);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 653;
			this.match(MapIniParser.T__76);
			this.state = 654;
			this.match(MapIniParser.ID);
			this.state = 658;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 256)) & ~0x1F) === 0 && ((1 << (_la - 256)) & ((1 << (MapIniParser.T__255 - 256)) | (1 << (MapIniParser.T__256 - 256)) | (1 << (MapIniParser.T__257 - 256)) | (1 << (MapIniParser.T__258 - 256)) | (1 << (MapIniParser.T__259 - 256)) | (1 << (MapIniParser.T__260 - 256)))) !== 0)) {
				{
				{
				this.state = 655;
				this.damageFXClassProperties();
				}
				}
				this.state = 660;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 661;
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
	public damageFXClassProperties(): DamageFXClassPropertiesContext {
		let _localctx: DamageFXClassPropertiesContext = new DamageFXClassPropertiesContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, MapIniParser.RULE_damageFXClassProperties);
		try {
			this.state = 669;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapIniParser.T__255:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 663;
				this.dfx_throttletime_property();
				}
				break;
			case MapIniParser.T__257:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 664;
				this.dfx_majorfx_property();
				}
				break;
			case MapIniParser.T__258:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 665;
				this.dfx_minorfx_property();
				}
				break;
			case MapIniParser.T__259:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 666;
				this.dfx_vetmajorfx_property();
				}
				break;
			case MapIniParser.T__256:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 667;
				this.dfx_amountformajorfx_property();
				}
				break;
			case MapIniParser.T__260:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 668;
				this.dfx_vetminorfx_property();
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
	public drawGroupInfoClass(): DrawGroupInfoClassContext {
		let _localctx: DrawGroupInfoClassContext = new DrawGroupInfoClassContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, MapIniParser.RULE_drawGroupInfoClass);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 671;
			this.match(MapIniParser.T__77);
			this.state = 675;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 262)) & ~0x1F) === 0 && ((1 << (_la - 262)) & ((1 << (MapIniParser.T__261 - 262)) | (1 << (MapIniParser.T__262 - 262)) | (1 << (MapIniParser.T__263 - 262)) | (1 << (MapIniParser.T__264 - 262)) | (1 << (MapIniParser.T__265 - 262)) | (1 << (MapIniParser.T__266 - 262)) | (1 << (MapIniParser.T__267 - 262)) | (1 << (MapIniParser.T__268 - 262)) | (1 << (MapIniParser.T__269 - 262)) | (1 << (MapIniParser.T__270 - 262)))) !== 0)) {
				{
				{
				this.state = 672;
				this.drawgroupinfoProperties();
				}
				}
				this.state = 677;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 678;
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
	public drawgroupinfoProperties(): DrawgroupinfoPropertiesContext {
		let _localctx: DrawgroupinfoPropertiesContext = new DrawgroupinfoPropertiesContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, MapIniParser.RULE_drawgroupinfoProperties);
		try {
			this.state = 690;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapIniParser.T__261:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 680;
				this.dgi_useplayercolor_property();
				}
				break;
			case MapIniParser.T__262:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 681;
				this.dgi_colorfortext_property();
				}
				break;
			case MapIniParser.T__263:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 682;
				this.dgi_colordropshadow_property();
				}
				break;
			case MapIniParser.T__264:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 683;
				this.dgi_dropshadowoffsetX_property();
				}
				break;
			case MapIniParser.T__265:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 684;
				this.dgi_dropshadowoffsetY_property();
				}
				break;
			case MapIniParser.T__266:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 685;
				this.dgi_fontname_property();
				}
				break;
			case MapIniParser.T__267:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 686;
				this.dgi_fontsize_property();
				}
				break;
			case MapIniParser.T__268:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 687;
				this.dgi_fontisbold_property();
				}
				break;
			case MapIniParser.T__269:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 688;
				this.dgi_drawposXperc_property();
				}
				break;
			case MapIniParser.T__270:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 689;
				this.dgi_drawposYperc_property();
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
	public fxListClass(): FxListClassContext {
		let _localctx: FxListClassContext = new FxListClassContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, MapIniParser.RULE_fxListClass);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 692;
			this.match(MapIniParser.T__78);
			this.state = 693;
			this.match(MapIniParser.ID);
			this.state = 697;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & ((1 << (MapIniParser.T__79 - 80)) | (1 << (MapIniParser.T__80 - 80)) | (1 << (MapIniParser.T__81 - 80)) | (1 << (MapIniParser.T__82 - 80)) | (1 << (MapIniParser.T__83 - 80)) | (1 << (MapIniParser.T__84 - 80)) | (1 << (MapIniParser.T__85 - 80)) | (1 << (MapIniParser.T__86 - 80)))) !== 0)) {
				{
				{
				this.state = 694;
				this.fxlistblocks();
				}
				}
				this.state = 699;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 700;
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
	public fxlistblocks(): FxlistblocksContext {
		let _localctx: FxlistblocksContext = new FxlistblocksContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, MapIniParser.RULE_fxlistblocks);
		try {
			this.state = 710;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapIniParser.T__79:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 702;
				this.fxlist_ps_block();
				}
				break;
			case MapIniParser.T__80:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 703;
				this.fxlist_sound_block();
				}
				break;
			case MapIniParser.T__81:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 704;
				this.fxlist_rayeffect_block();
				}
				break;
			case MapIniParser.T__82:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 705;
				this.fxlist_tracer_block();
				}
				break;
			case MapIniParser.T__83:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 706;
				this.fxlist_lightpulse_block();
				}
				break;
			case MapIniParser.T__84:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 707;
				this.fxlist_viewshake_block();
				}
				break;
			case MapIniParser.T__85:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 708;
				this.fxlist_terrainscorch_block();
				}
				break;
			case MapIniParser.T__86:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 709;
				this.fxlist_fxlistatbone_block();
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
	public fxlist_ps_block(): Fxlist_ps_blockContext {
		let _localctx: Fxlist_ps_blockContext = new Fxlist_ps_blockContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, MapIniParser.RULE_fxlist_ps_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 712;
			this.match(MapIniParser.T__79);
			this.state = 729;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 272)) & ~0x1F) === 0 && ((1 << (_la - 272)) & ((1 << (MapIniParser.T__271 - 272)) | (1 << (MapIniParser.T__272 - 272)) | (1 << (MapIniParser.T__273 - 272)) | (1 << (MapIniParser.T__274 - 272)) | (1 << (MapIniParser.T__275 - 272)) | (1 << (MapIniParser.T__276 - 272)) | (1 << (MapIniParser.T__277 - 272)) | (1 << (MapIniParser.T__278 - 272)) | (1 << (MapIniParser.T__279 - 272)) | (1 << (MapIniParser.T__280 - 272)) | (1 << (MapIniParser.T__281 - 272)) | (1 << (MapIniParser.T__282 - 272)) | (1 << (MapIniParser.T__283 - 272)) | (1 << (MapIniParser.T__284 - 272)))) !== 0)) {
				{
				this.state = 727;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case MapIniParser.T__271:
					{
					this.state = 713;
					this.fxlist_ps_name_property();
					}
					break;
				case MapIniParser.T__272:
					{
					this.state = 714;
					this.fxlist_ps_count_property();
					}
					break;
				case MapIniParser.T__273:
					{
					this.state = 715;
					this.fxlist_ps_offset_property();
					}
					break;
				case MapIniParser.T__275:
					{
					this.state = 716;
					this.fxlist_ps_height_property();
					}
					break;
				case MapIniParser.T__274:
					{
					this.state = 717;
					this.fxlist_ps_radius_property();
					}
					break;
				case MapIniParser.T__276:
					{
					this.state = 718;
					this.fxlist_ps_initialDelay_property();
					}
					break;
				case MapIniParser.T__277:
					{
					this.state = 719;
					this.fxlist_ps_rotateX_property();
					}
					break;
				case MapIniParser.T__278:
					{
					this.state = 720;
					this.fxlist_ps_rotatey_property();
					}
					break;
				case MapIniParser.T__279:
					{
					this.state = 721;
					this.fxlist_ps_rotateZ_property();
					}
					break;
				case MapIniParser.T__280:
					{
					this.state = 722;
					this.fxlist_ps_orienttoobject_property();
					}
					break;
				case MapIniParser.T__282:
					{
					this.state = 723;
					this.fxlist_ps_usecallerradius_property();
					}
					break;
				case MapIniParser.T__281:
					{
					this.state = 724;
					this.fxlist_ps_ricochet_property();
					}
					break;
				case MapIniParser.T__283:
					{
					this.state = 725;
					this.fxlist_ps_attachtoobject_property();
					}
					break;
				case MapIniParser.T__284:
					{
					this.state = 726;
					this.fxlist_ps_creategroundheight_property();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 731;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 732;
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
	public fxlist_sound_block(): Fxlist_sound_blockContext {
		let _localctx: Fxlist_sound_blockContext = new Fxlist_sound_blockContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, MapIniParser.RULE_fxlist_sound_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 734;
			this.match(MapIniParser.T__80);
			this.state = 738;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.T__271) {
				{
				{
				this.state = 735;
				this.fxlist_sound_property();
				}
				}
				this.state = 740;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 741;
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
	public fxlist_rayeffect_block(): Fxlist_rayeffect_blockContext {
		let _localctx: Fxlist_rayeffect_blockContext = new Fxlist_rayeffect_blockContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, MapIniParser.RULE_fxlist_rayeffect_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 743;
			this.match(MapIniParser.T__81);
			this.state = 749;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 272)) & ~0x1F) === 0 && ((1 << (_la - 272)) & ((1 << (MapIniParser.T__271 - 272)) | (1 << (MapIniParser.T__285 - 272)) | (1 << (MapIniParser.T__286 - 272)))) !== 0)) {
				{
				this.state = 747;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case MapIniParser.T__271:
					{
					this.state = 744;
					this.fxlist_name_object_propety();
					}
					break;
				case MapIniParser.T__285:
					{
					this.state = 745;
					this.fxlist_rayeffect_primaryoffset_property();
					}
					break;
				case MapIniParser.T__286:
					{
					this.state = 746;
					this.fxlist_rayeffect_secondaryoffset_proprety();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 751;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 752;
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
	public fxlist_tracer_block(): Fxlist_tracer_blockContext {
		let _localctx: Fxlist_tracer_blockContext = new Fxlist_tracer_blockContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, MapIniParser.RULE_fxlist_tracer_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 754;
			this.match(MapIniParser.T__82);
			this.state = 765;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.T__121 || _la === MapIniParser.T__124 || ((((_la - 288)) & ~0x1F) === 0 && ((1 << (_la - 288)) & ((1 << (MapIniParser.T__287 - 288)) | (1 << (MapIniParser.T__288 - 288)) | (1 << (MapIniParser.T__289 - 288)) | (1 << (MapIniParser.T__290 - 288)) | (1 << (MapIniParser.T__291 - 288)) | (1 << (MapIniParser.T__292 - 288)))) !== 0)) {
				{
				this.state = 763;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case MapIniParser.T__287:
					{
					this.state = 755;
					this.fxlist_tracer_name_propety();
					}
					break;
				case MapIniParser.T__288:
					{
					this.state = 756;
					this.fxlist_tracer_bonename_property();
					}
					break;
				case MapIniParser.T__124:
					{
					this.state = 757;
					this.fxlist_tracer_speed_property();
					}
					break;
				case MapIniParser.T__289:
					{
					this.state = 758;
					this.fxlist_tracer_decayat_property();
					}
					break;
				case MapIniParser.T__290:
					{
					this.state = 759;
					this.fxlist_tracer_length_property();
					}
					break;
				case MapIniParser.T__291:
					{
					this.state = 760;
					this.fxlist_tracer_width_property();
					}
					break;
				case MapIniParser.T__121:
					{
					this.state = 761;
					this.fxlist_tracer_color_property();
					}
					break;
				case MapIniParser.T__292:
					{
					this.state = 762;
					this.fxlist_tracer_probability_property();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 767;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 768;
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
	public fxlist_lightpulse_block(): Fxlist_lightpulse_blockContext {
		let _localctx: Fxlist_lightpulse_blockContext = new Fxlist_lightpulse_blockContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, MapIniParser.RULE_fxlist_lightpulse_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 770;
			this.match(MapIniParser.T__83);
			this.state = 778;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.T__121 || ((((_la - 275)) & ~0x1F) === 0 && ((1 << (_la - 275)) & ((1 << (MapIniParser.T__274 - 275)) | (1 << (MapIniParser.T__293 - 275)) | (1 << (MapIniParser.T__294 - 275)) | (1 << (MapIniParser.T__295 - 275)))) !== 0)) {
				{
				this.state = 776;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case MapIniParser.T__121:
					{
					this.state = 771;
					this.fxlist_lightpulse_color_property();
					}
					break;
				case MapIniParser.T__274:
					{
					this.state = 772;
					this.fxlist_lightpulse_radius_property();
					}
					break;
				case MapIniParser.T__293:
					{
					this.state = 773;
					this.fxlist_lightpulse_radiuspercentobjectsize_property();
					}
					break;
				case MapIniParser.T__294:
					{
					this.state = 774;
					this.fxlist_lightpulse_increasetime_property();
					}
					break;
				case MapIniParser.T__295:
					{
					this.state = 775;
					this.fxlist_lightpulse_decreasetime_property();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 780;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 781;
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
	public fxlist_viewshake_block(): Fxlist_viewshake_blockContext {
		let _localctx: Fxlist_viewshake_blockContext = new Fxlist_viewshake_blockContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, MapIniParser.RULE_fxlist_viewshake_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 783;
			this.match(MapIniParser.T__84);
			this.state = 787;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.T__296) {
				{
				{
				this.state = 784;
				this.fxlist_viewshake_type_property();
				}
				}
				this.state = 789;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 790;
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
	public fxlist_terrainscorch_block(): Fxlist_terrainscorch_blockContext {
		let _localctx: Fxlist_terrainscorch_blockContext = new Fxlist_terrainscorch_blockContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, MapIniParser.RULE_fxlist_terrainscorch_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 792;
			this.match(MapIniParser.T__85);
			this.state = 797;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.T__274 || _la === MapIniParser.T__296) {
				{
				this.state = 795;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case MapIniParser.T__296:
					{
					this.state = 793;
					this.fxlist_scorch_type_property();
					}
					break;
				case MapIniParser.T__274:
					{
					this.state = 794;
					this.fxlist_scorch_radius_property();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 799;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 800;
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
	public fxlist_fxlistatbone_block(): Fxlist_fxlistatbone_blockContext {
		let _localctx: Fxlist_fxlistatbone_blockContext = new Fxlist_fxlistatbone_blockContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, MapIniParser.RULE_fxlist_fxlistatbone_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 802;
			this.match(MapIniParser.T__86);
			this.state = 808;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 289)) & ~0x1F) === 0 && ((1 << (_la - 289)) & ((1 << (MapIniParser.T__288 - 289)) | (1 << (MapIniParser.T__297 - 289)) | (1 << (MapIniParser.T__298 - 289)))) !== 0)) {
				{
				this.state = 806;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case MapIniParser.T__297:
					{
					this.state = 803;
					this.fxlist_atbonepos_fx_property();
					}
					break;
				case MapIniParser.T__288:
					{
					this.state = 804;
					this.fxlist_atbonepos_bonename_property();
					}
					break;
				case MapIniParser.T__298:
					{
					this.state = 805;
					this.fxlist_atbonepos_orienttoobject_property();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 810;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 811;
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
	public inGameUIClass(): InGameUIClassContext {
		let _localctx: InGameUIClassContext = new InGameUIClassContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, MapIniParser.RULE_inGameUIClass);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 813;
			this.match(MapIniParser.T__87);
			this.state = 818;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (MapIniParser.T__88 - 89)) | (1 << (MapIniParser.T__89 - 89)) | (1 << (MapIniParser.T__90 - 89)) | (1 << (MapIniParser.T__91 - 89)) | (1 << (MapIniParser.T__92 - 89)) | (1 << (MapIniParser.T__93 - 89)) | (1 << (MapIniParser.T__94 - 89)) | (1 << (MapIniParser.T__95 - 89)) | (1 << (MapIniParser.T__96 - 89)) | (1 << (MapIniParser.T__97 - 89)) | (1 << (MapIniParser.T__98 - 89)) | (1 << (MapIniParser.T__99 - 89)) | (1 << (MapIniParser.T__100 - 89)) | (1 << (MapIniParser.T__101 - 89)) | (1 << (MapIniParser.T__102 - 89)) | (1 << (MapIniParser.T__103 - 89)) | (1 << (MapIniParser.T__104 - 89)) | (1 << (MapIniParser.T__105 - 89)) | (1 << (MapIniParser.T__106 - 89)) | (1 << (MapIniParser.T__107 - 89)) | (1 << (MapIniParser.T__108 - 89)) | (1 << (MapIniParser.T__109 - 89)) | (1 << (MapIniParser.T__110 - 89)) | (1 << (MapIniParser.T__111 - 89)) | (1 << (MapIniParser.T__112 - 89)) | (1 << (MapIniParser.T__113 - 89)) | (1 << (MapIniParser.T__114 - 89)) | (1 << (MapIniParser.T__115 - 89)) | (1 << (MapIniParser.T__116 - 89)))) !== 0) || ((((_la - 300)) & ~0x1F) === 0 && ((1 << (_la - 300)) & ((1 << (MapIniParser.T__299 - 300)) | (1 << (MapIniParser.T__300 - 300)) | (1 << (MapIniParser.T__301 - 300)) | (1 << (MapIniParser.T__302 - 300)) | (1 << (MapIniParser.T__303 - 300)) | (1 << (MapIniParser.T__304 - 300)) | (1 << (MapIniParser.T__305 - 300)) | (1 << (MapIniParser.T__306 - 300)) | (1 << (MapIniParser.T__307 - 300)) | (1 << (MapIniParser.T__308 - 300)) | (1 << (MapIniParser.T__309 - 300)) | (1 << (MapIniParser.T__310 - 300)) | (1 << (MapIniParser.T__311 - 300)) | (1 << (MapIniParser.T__312 - 300)) | (1 << (MapIniParser.T__313 - 300)) | (1 << (MapIniParser.T__314 - 300)) | (1 << (MapIniParser.T__315 - 300)) | (1 << (MapIniParser.T__316 - 300)) | (1 << (MapIniParser.T__317 - 300)) | (1 << (MapIniParser.T__318 - 300)) | (1 << (MapIniParser.T__319 - 300)) | (1 << (MapIniParser.T__320 - 300)) | (1 << (MapIniParser.T__321 - 300)) | (1 << (MapIniParser.T__322 - 300)) | (1 << (MapIniParser.T__323 - 300)) | (1 << (MapIniParser.T__324 - 300)) | (1 << (MapIniParser.T__325 - 300)) | (1 << (MapIniParser.T__326 - 300)) | (1 << (MapIniParser.T__327 - 300)) | (1 << (MapIniParser.T__328 - 300)) | (1 << (MapIniParser.T__329 - 300)) | (1 << (MapIniParser.T__330 - 300)))) !== 0) || ((((_la - 332)) & ~0x1F) === 0 && ((1 << (_la - 332)) & ((1 << (MapIniParser.T__331 - 332)) | (1 << (MapIniParser.T__332 - 332)) | (1 << (MapIniParser.T__333 - 332)) | (1 << (MapIniParser.T__334 - 332)) | (1 << (MapIniParser.T__335 - 332)) | (1 << (MapIniParser.T__336 - 332)) | (1 << (MapIniParser.T__337 - 332)) | (1 << (MapIniParser.T__338 - 332)) | (1 << (MapIniParser.T__339 - 332)) | (1 << (MapIniParser.T__340 - 332)) | (1 << (MapIniParser.T__341 - 332)))) !== 0)) {
				{
				this.state = 816;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
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
					this.state = 814;
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
					this.state = 815;
					this.igui_blocks();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 820;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 821;
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
	public igui_blocks(): Igui_blocksContext {
		let _localctx: Igui_blocksContext = new Igui_blocksContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, MapIniParser.RULE_igui_blocks);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 823;
			_la = this._input.LA(1);
			if (!(((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (MapIniParser.T__88 - 89)) | (1 << (MapIniParser.T__89 - 89)) | (1 << (MapIniParser.T__90 - 89)) | (1 << (MapIniParser.T__91 - 89)) | (1 << (MapIniParser.T__92 - 89)) | (1 << (MapIniParser.T__93 - 89)) | (1 << (MapIniParser.T__94 - 89)) | (1 << (MapIniParser.T__95 - 89)) | (1 << (MapIniParser.T__96 - 89)) | (1 << (MapIniParser.T__97 - 89)) | (1 << (MapIniParser.T__98 - 89)) | (1 << (MapIniParser.T__99 - 89)) | (1 << (MapIniParser.T__100 - 89)) | (1 << (MapIniParser.T__101 - 89)) | (1 << (MapIniParser.T__102 - 89)) | (1 << (MapIniParser.T__103 - 89)) | (1 << (MapIniParser.T__104 - 89)) | (1 << (MapIniParser.T__105 - 89)) | (1 << (MapIniParser.T__106 - 89)) | (1 << (MapIniParser.T__107 - 89)) | (1 << (MapIniParser.T__108 - 89)) | (1 << (MapIniParser.T__109 - 89)) | (1 << (MapIniParser.T__110 - 89)) | (1 << (MapIniParser.T__111 - 89)) | (1 << (MapIniParser.T__112 - 89)) | (1 << (MapIniParser.T__113 - 89)) | (1 << (MapIniParser.T__114 - 89)) | (1 << (MapIniParser.T__115 - 89)) | (1 << (MapIniParser.T__116 - 89)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 827;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapIniParser.T__61 || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & ((1 << (MapIniParser.T__117 - 118)) | (1 << (MapIniParser.T__118 - 118)) | (1 << (MapIniParser.T__119 - 118)) | (1 << (MapIniParser.T__120 - 118)) | (1 << (MapIniParser.T__121 - 118)) | (1 << (MapIniParser.T__122 - 118)))) !== 0)) {
				{
				{
				this.state = 824;
				this.ingui_block_properties();
				}
				}
				this.state = 829;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 830;
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
	public ingui_block_properties(): Ingui_block_propertiesContext {
		let _localctx: Ingui_block_propertiesContext = new Ingui_block_propertiesContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, MapIniParser.RULE_ingui_block_properties);
		try {
			this.state = 856;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapIniParser.T__61:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 832;
				this.match(MapIniParser.T__61);
				this.state = 833;
				this.match(MapIniParser.EQ);
				this.state = 834;
				this.match(MapIniParser.ID);
				}
				break;
			case MapIniParser.T__117:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 835;
				this.match(MapIniParser.T__117);
				this.state = 836;
				this.match(MapIniParser.EQ);
				this.state = 837;
				this.match(MapIniParser.ID);
				}
				break;
			case MapIniParser.T__118:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 838;
				this.match(MapIniParser.T__118);
				this.state = 839;
				this.match(MapIniParser.EQ);
				this.state = 840;
				this.match(MapIniParser.PROCENT);
				}
				break;
			case MapIniParser.T__119:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 841;
				this.match(MapIniParser.T__119);
				this.state = 842;
				this.match(MapIniParser.EQ);
				this.state = 843;
				this.match(MapIniParser.PROCENT);
				}
				break;
			case MapIniParser.T__120:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 844;
				this.match(MapIniParser.T__120);
				this.state = 845;
				this.match(MapIniParser.EQ);
				this.state = 846;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__121:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 847;
				this.match(MapIniParser.T__121);
				this.state = 848;
				this.match(MapIniParser.EQ);
				this.state = 849;
				this.match(MapIniParser.R);
				this.state = 850;
				this.match(MapIniParser.G);
				this.state = 851;
				this.match(MapIniParser.B);
				this.state = 852;
				this.match(MapIniParser.A);
				}
				break;
			case MapIniParser.T__122:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 853;
				this.match(MapIniParser.T__122);
				this.state = 854;
				this.match(MapIniParser.EQ);
				this.state = 855;
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
	public locomotorClass(): LocomotorClassContext {
		let _localctx: LocomotorClassContext = new LocomotorClassContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, MapIniParser.RULE_locomotorClass);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 858;
			this.match(MapIniParser.T__123);
			this.state = 859;
			this.match(MapIniParser.ID);
			this.state = 863;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 125)) & ~0x1F) === 0 && ((1 << (_la - 125)) & ((1 << (MapIniParser.T__124 - 125)) | (1 << (MapIniParser.T__125 - 125)) | (1 << (MapIniParser.T__126 - 125)) | (1 << (MapIniParser.T__127 - 125)) | (1 << (MapIniParser.T__128 - 125)) | (1 << (MapIniParser.T__129 - 125)) | (1 << (MapIniParser.T__130 - 125)) | (1 << (MapIniParser.T__131 - 125)) | (1 << (MapIniParser.T__132 - 125)) | (1 << (MapIniParser.T__133 - 125)) | (1 << (MapIniParser.T__134 - 125)) | (1 << (MapIniParser.T__135 - 125)) | (1 << (MapIniParser.T__136 - 125)) | (1 << (MapIniParser.T__137 - 125)) | (1 << (MapIniParser.T__138 - 125)) | (1 << (MapIniParser.T__139 - 125)) | (1 << (MapIniParser.T__140 - 125)) | (1 << (MapIniParser.T__141 - 125)) | (1 << (MapIniParser.T__142 - 125)) | (1 << (MapIniParser.T__143 - 125)) | (1 << (MapIniParser.T__144 - 125)) | (1 << (MapIniParser.T__145 - 125)) | (1 << (MapIniParser.T__146 - 125)) | (1 << (MapIniParser.T__147 - 125)) | (1 << (MapIniParser.T__148 - 125)) | (1 << (MapIniParser.T__149 - 125)) | (1 << (MapIniParser.T__150 - 125)) | (1 << (MapIniParser.T__151 - 125)) | (1 << (MapIniParser.T__152 - 125)) | (1 << (MapIniParser.T__153 - 125)) | (1 << (MapIniParser.T__154 - 125)) | (1 << (MapIniParser.T__155 - 125)))) !== 0) || ((((_la - 157)) & ~0x1F) === 0 && ((1 << (_la - 157)) & ((1 << (MapIniParser.T__156 - 157)) | (1 << (MapIniParser.T__157 - 157)) | (1 << (MapIniParser.T__158 - 157)) | (1 << (MapIniParser.T__159 - 157)) | (1 << (MapIniParser.T__160 - 157)) | (1 << (MapIniParser.T__161 - 157)) | (1 << (MapIniParser.T__162 - 157)) | (1 << (MapIniParser.T__163 - 157)) | (1 << (MapIniParser.T__164 - 157)) | (1 << (MapIniParser.T__165 - 157)) | (1 << (MapIniParser.T__166 - 157)) | (1 << (MapIniParser.T__167 - 157)) | (1 << (MapIniParser.T__168 - 157)) | (1 << (MapIniParser.T__169 - 157)) | (1 << (MapIniParser.T__170 - 157)) | (1 << (MapIniParser.T__171 - 157)) | (1 << (MapIniParser.T__172 - 157)) | (1 << (MapIniParser.T__173 - 157)) | (1 << (MapIniParser.T__174 - 157)) | (1 << (MapIniParser.T__175 - 157)) | (1 << (MapIniParser.T__176 - 157)) | (1 << (MapIniParser.T__177 - 157)) | (1 << (MapIniParser.T__178 - 157)) | (1 << (MapIniParser.T__179 - 157)) | (1 << (MapIniParser.T__180 - 157)) | (1 << (MapIniParser.T__181 - 157)) | (1 << (MapIniParser.T__182 - 157)) | (1 << (MapIniParser.T__183 - 157)))) !== 0)) {
				{
				{
				this.state = 860;
				this.locomotor_properties();
				}
				}
				this.state = 865;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 866;
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
	public locomotor_properties(): Locomotor_propertiesContext {
		let _localctx: Locomotor_propertiesContext = new Locomotor_propertiesContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, MapIniParser.RULE_locomotor_properties);
		let _la: number;
		try {
			this.state = 1040;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapIniParser.T__180:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 868;
				this.locomotor_surface_property();
				}
				break;
			case MapIniParser.T__181:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 869;
				this.locomotor_zbehavior_property();
				}
				break;
			case MapIniParser.T__182:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 870;
				this.locomotor_appereance_property();
				}
				break;
			case MapIniParser.T__183:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 871;
				this.locomotor_movepriority_property();
				}
				break;
			case MapIniParser.T__124:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 872;
				this.match(MapIniParser.T__124);
				this.state = 873;
				this.match(MapIniParser.EQ);
				this.state = 874;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__125:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 875;
				this.match(MapIniParser.T__125);
				this.state = 876;
				this.match(MapIniParser.EQ);
				this.state = 877;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__126:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 878;
				this.match(MapIniParser.T__126);
				this.state = 879;
				this.match(MapIniParser.EQ);
				this.state = 880;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__127:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 881;
				this.match(MapIniParser.T__127);
				this.state = 882;
				this.match(MapIniParser.EQ);
				this.state = 883;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__128:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 884;
				this.match(MapIniParser.T__128);
				this.state = 885;
				this.match(MapIniParser.EQ);
				this.state = 886;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__129:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 887;
				this.match(MapIniParser.T__129);
				this.state = 888;
				this.match(MapIniParser.EQ);
				this.state = 889;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__130:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 890;
				this.match(MapIniParser.T__130);
				this.state = 891;
				this.match(MapIniParser.EQ);
				this.state = 892;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__131:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 893;
				this.match(MapIniParser.T__131);
				this.state = 894;
				this.match(MapIniParser.EQ);
				this.state = 895;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__132:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 896;
				this.match(MapIniParser.T__132);
				this.state = 897;
				this.match(MapIniParser.EQ);
				this.state = 898;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__133:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 899;
				this.match(MapIniParser.T__133);
				this.state = 900;
				this.match(MapIniParser.EQ);
				this.state = 901;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__134:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 902;
				this.match(MapIniParser.T__134);
				this.state = 903;
				this.match(MapIniParser.EQ);
				this.state = 904;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__135:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 905;
				this.match(MapIniParser.T__135);
				this.state = 906;
				this.match(MapIniParser.EQ);
				this.state = 907;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__136:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 908;
				this.match(MapIniParser.T__136);
				this.state = 909;
				this.match(MapIniParser.EQ);
				this.state = 910;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__137:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 911;
				this.match(MapIniParser.T__137);
				this.state = 912;
				this.match(MapIniParser.EQ);
				this.state = 913;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__138:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 914;
				this.match(MapIniParser.T__138);
				this.state = 915;
				this.match(MapIniParser.EQ);
				this.state = 916;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__139:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 917;
				this.match(MapIniParser.T__139);
				this.state = 918;
				this.match(MapIniParser.EQ);
				this.state = 919;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__140:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 920;
				this.match(MapIniParser.T__140);
				this.state = 921;
				this.match(MapIniParser.EQ);
				this.state = 922;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__141:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 923;
				this.match(MapIniParser.T__141);
				this.state = 924;
				this.match(MapIniParser.EQ);
				this.state = 925;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__142:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 926;
				this.match(MapIniParser.T__142);
				this.state = 927;
				this.match(MapIniParser.EQ);
				this.state = 928;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__143:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 929;
				this.match(MapIniParser.T__143);
				this.state = 930;
				this.match(MapIniParser.EQ);
				this.state = 931;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__144:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 932;
				this.match(MapIniParser.T__144);
				this.state = 933;
				this.match(MapIniParser.EQ);
				this.state = 934;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__145:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 935;
				this.match(MapIniParser.T__145);
				this.state = 936;
				this.match(MapIniParser.EQ);
				this.state = 937;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__146:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 938;
				this.match(MapIniParser.T__146);
				this.state = 939;
				this.match(MapIniParser.EQ);
				this.state = 940;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__147:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 941;
				this.match(MapIniParser.T__147);
				this.state = 942;
				this.match(MapIniParser.EQ);
				this.state = 943;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__148:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 944;
				this.match(MapIniParser.T__148);
				this.state = 945;
				this.match(MapIniParser.EQ);
				this.state = 946;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__149:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 947;
				this.match(MapIniParser.T__149);
				this.state = 948;
				this.match(MapIniParser.EQ);
				this.state = 949;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__150:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 950;
				this.match(MapIniParser.T__150);
				this.state = 951;
				this.match(MapIniParser.EQ);
				this.state = 952;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__151:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 953;
				this.match(MapIniParser.T__151);
				this.state = 954;
				this.match(MapIniParser.EQ);
				this.state = 955;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__152:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 956;
				this.match(MapIniParser.T__152);
				this.state = 957;
				this.match(MapIniParser.EQ);
				this.state = 958;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__153:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 959;
				this.match(MapIniParser.T__153);
				this.state = 960;
				this.match(MapIniParser.EQ);
				this.state = 961;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__154:
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 962;
				this.match(MapIniParser.T__154);
				this.state = 963;
				this.match(MapIniParser.EQ);
				this.state = 964;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__155:
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 965;
				this.match(MapIniParser.T__155);
				this.state = 966;
				this.match(MapIniParser.EQ);
				this.state = 967;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__156:
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 968;
				this.match(MapIniParser.T__156);
				this.state = 969;
				this.match(MapIniParser.EQ);
				this.state = 970;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__157:
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 971;
				this.match(MapIniParser.T__157);
				this.state = 972;
				this.match(MapIniParser.EQ);
				this.state = 973;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__158:
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 974;
				this.match(MapIniParser.T__158);
				this.state = 975;
				this.match(MapIniParser.EQ);
				this.state = 976;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__159:
				this.enterOuterAlt(_localctx, 40);
				{
				this.state = 977;
				this.match(MapIniParser.T__159);
				this.state = 978;
				this.match(MapIniParser.EQ);
				this.state = 979;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__160:
				this.enterOuterAlt(_localctx, 41);
				{
				this.state = 980;
				this.match(MapIniParser.T__160);
				this.state = 981;
				this.match(MapIniParser.EQ);
				this.state = 982;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__161:
				this.enterOuterAlt(_localctx, 42);
				{
				this.state = 983;
				this.match(MapIniParser.T__161);
				this.state = 984;
				this.match(MapIniParser.EQ);
				this.state = 985;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__162:
				this.enterOuterAlt(_localctx, 43);
				{
				this.state = 986;
				this.match(MapIniParser.T__162);
				this.state = 987;
				this.match(MapIniParser.EQ);
				this.state = 988;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__163:
				this.enterOuterAlt(_localctx, 44);
				{
				this.state = 989;
				this.match(MapIniParser.T__163);
				this.state = 990;
				this.match(MapIniParser.EQ);
				this.state = 991;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__164:
				this.enterOuterAlt(_localctx, 45);
				{
				this.state = 992;
				this.match(MapIniParser.T__164);
				this.state = 993;
				this.match(MapIniParser.EQ);
				this.state = 994;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__165:
				this.enterOuterAlt(_localctx, 46);
				{
				this.state = 995;
				this.match(MapIniParser.T__165);
				this.state = 996;
				this.match(MapIniParser.EQ);
				this.state = 997;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__166:
				this.enterOuterAlt(_localctx, 47);
				{
				this.state = 998;
				this.match(MapIniParser.T__166);
				this.state = 999;
				this.match(MapIniParser.EQ);
				this.state = 1000;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__167:
				this.enterOuterAlt(_localctx, 48);
				{
				this.state = 1001;
				this.match(MapIniParser.T__167);
				this.state = 1002;
				this.match(MapIniParser.EQ);
				this.state = 1003;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__168:
				this.enterOuterAlt(_localctx, 49);
				{
				this.state = 1004;
				this.match(MapIniParser.T__168);
				this.state = 1005;
				this.match(MapIniParser.EQ);
				this.state = 1006;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__169:
				this.enterOuterAlt(_localctx, 50);
				{
				this.state = 1007;
				this.match(MapIniParser.T__169);
				this.state = 1008;
				this.match(MapIniParser.EQ);
				this.state = 1009;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__170:
				this.enterOuterAlt(_localctx, 51);
				{
				this.state = 1010;
				this.match(MapIniParser.T__170);
				this.state = 1011;
				this.match(MapIniParser.EQ);
				this.state = 1012;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__171:
				this.enterOuterAlt(_localctx, 52);
				{
				this.state = 1013;
				this.match(MapIniParser.T__171);
				this.state = 1014;
				this.match(MapIniParser.EQ);
				this.state = 1015;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__172:
				this.enterOuterAlt(_localctx, 53);
				{
				this.state = 1016;
				this.match(MapIniParser.T__172);
				this.state = 1017;
				this.match(MapIniParser.EQ);
				this.state = 1018;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__173:
				this.enterOuterAlt(_localctx, 54);
				{
				this.state = 1019;
				this.match(MapIniParser.T__173);
				this.state = 1020;
				this.match(MapIniParser.EQ);
				this.state = 1021;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__174:
				this.enterOuterAlt(_localctx, 55);
				{
				this.state = 1022;
				this.match(MapIniParser.T__174);
				this.state = 1023;
				this.match(MapIniParser.EQ);
				this.state = 1024;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__175:
				this.enterOuterAlt(_localctx, 56);
				{
				this.state = 1025;
				this.match(MapIniParser.T__175);
				this.state = 1026;
				this.match(MapIniParser.EQ);
				this.state = 1027;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__176:
				this.enterOuterAlt(_localctx, 57);
				{
				this.state = 1028;
				this.match(MapIniParser.T__176);
				this.state = 1029;
				this.match(MapIniParser.EQ);
				this.state = 1030;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__177:
				this.enterOuterAlt(_localctx, 58);
				{
				this.state = 1031;
				this.match(MapIniParser.T__177);
				this.state = 1032;
				this.match(MapIniParser.EQ);
				this.state = 1033;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__178:
				this.enterOuterAlt(_localctx, 59);
				{
				this.state = 1034;
				this.match(MapIniParser.T__178);
				this.state = 1035;
				this.match(MapIniParser.EQ);
				this.state = 1036;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__179:
				this.enterOuterAlt(_localctx, 60);
				{
				this.state = 1037;
				this.match(MapIniParser.T__179);
				this.state = 1038;
				this.match(MapIniParser.EQ);
				this.state = 1039;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
	public locomotor_surface_property(): Locomotor_surface_propertyContext {
		let _localctx: Locomotor_surface_propertyContext = new Locomotor_surface_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, MapIniParser.RULE_locomotor_surface_property);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1042;
			this.match(MapIniParser.T__180);
			this.state = 1043;
			this.match(MapIniParser.EQ);
			this.state = 1045;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1044;
				this.surface_value();
				}
				}
				this.state = 1047;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === MapIniParser.ID);
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
	public locomotor_zbehavior_property(): Locomotor_zbehavior_propertyContext {
		let _localctx: Locomotor_zbehavior_propertyContext = new Locomotor_zbehavior_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, MapIniParser.RULE_locomotor_zbehavior_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1049;
			this.match(MapIniParser.T__181);
			this.state = 1050;
			this.match(MapIniParser.EQ);
			this.state = 1051;
			this.zbehavior_value();
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
	public locomotor_appereance_property(): Locomotor_appereance_propertyContext {
		let _localctx: Locomotor_appereance_propertyContext = new Locomotor_appereance_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, MapIniParser.RULE_locomotor_appereance_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1053;
			this.match(MapIniParser.T__182);
			this.state = 1054;
			this.match(MapIniParser.EQ);
			this.state = 1055;
			this.appereance_value();
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
	public locomotor_movepriority_property(): Locomotor_movepriority_propertyContext {
		let _localctx: Locomotor_movepriority_propertyContext = new Locomotor_movepriority_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, MapIniParser.RULE_locomotor_movepriority_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1057;
			this.match(MapIniParser.T__183);
			this.state = 1058;
			this.match(MapIniParser.EQ);
			this.state = 1059;
			this.movepriority_value();
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
	public surface_value(): Surface_valueContext {
		let _localctx: Surface_valueContext = new Surface_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, MapIniParser.RULE_surface_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1061;
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
	public zbehavior_value(): Zbehavior_valueContext {
		let _localctx: Zbehavior_valueContext = new Zbehavior_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, MapIniParser.RULE_zbehavior_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1063;
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
	public appereance_value(): Appereance_valueContext {
		let _localctx: Appereance_valueContext = new Appereance_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, MapIniParser.RULE_appereance_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1065;
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
	public movepriority_value(): Movepriority_valueContext {
		let _localctx: Movepriority_valueContext = new Movepriority_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, MapIniParser.RULE_movepriority_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1067;
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
	public weaponClass(): WeaponClassContext {
		let _localctx: WeaponClassContext = new WeaponClassContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, MapIniParser.RULE_weaponClass);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1069;
			this.match(MapIniParser.T__184);
			this.state = 1070;
			this.match(MapIniParser.ID);
			this.state = 1074;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 186)) & ~0x1F) === 0 && ((1 << (_la - 186)) & ((1 << (MapIniParser.T__185 - 186)) | (1 << (MapIniParser.T__186 - 186)) | (1 << (MapIniParser.T__187 - 186)) | (1 << (MapIniParser.T__188 - 186)) | (1 << (MapIniParser.T__189 - 186)) | (1 << (MapIniParser.T__190 - 186)) | (1 << (MapIniParser.T__191 - 186)) | (1 << (MapIniParser.T__192 - 186)) | (1 << (MapIniParser.T__193 - 186)) | (1 << (MapIniParser.T__194 - 186)) | (1 << (MapIniParser.T__195 - 186)) | (1 << (MapIniParser.T__196 - 186)) | (1 << (MapIniParser.T__197 - 186)) | (1 << (MapIniParser.T__198 - 186)) | (1 << (MapIniParser.T__199 - 186)) | (1 << (MapIniParser.T__200 - 186)) | (1 << (MapIniParser.T__201 - 186)) | (1 << (MapIniParser.T__202 - 186)) | (1 << (MapIniParser.T__203 - 186)) | (1 << (MapIniParser.T__204 - 186)) | (1 << (MapIniParser.T__205 - 186)) | (1 << (MapIniParser.T__206 - 186)) | (1 << (MapIniParser.T__207 - 186)) | (1 << (MapIniParser.T__208 - 186)) | (1 << (MapIniParser.T__209 - 186)) | (1 << (MapIniParser.T__210 - 186)) | (1 << (MapIniParser.T__211 - 186)) | (1 << (MapIniParser.T__212 - 186)) | (1 << (MapIniParser.T__213 - 186)) | (1 << (MapIniParser.T__214 - 186)) | (1 << (MapIniParser.T__215 - 186)) | (1 << (MapIniParser.T__216 - 186)))) !== 0) || ((((_la - 218)) & ~0x1F) === 0 && ((1 << (_la - 218)) & ((1 << (MapIniParser.T__217 - 218)) | (1 << (MapIniParser.T__218 - 218)) | (1 << (MapIniParser.T__219 - 218)) | (1 << (MapIniParser.T__220 - 218)) | (1 << (MapIniParser.T__221 - 218)) | (1 << (MapIniParser.T__222 - 218)))) !== 0)) {
				{
				{
				this.state = 1071;
				this.weapon_properties();
				}
				}
				this.state = 1076;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1077;
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
	public weapon_properties(): Weapon_propertiesContext {
		let _localctx: Weapon_propertiesContext = new Weapon_propertiesContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, MapIniParser.RULE_weapon_properties);
		let _la: number;
		try {
			this.state = 1189;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapIniParser.T__218:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1079;
				this.weapon_damagetype_property();
				}
				break;
			case MapIniParser.T__219:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1080;
				this.weapon_deathtype_property();
				}
				break;
			case MapIniParser.T__220:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1081;
				this.weapon_damageaffects_property();
				}
				break;
			case MapIniParser.T__221:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1082;
				this.weapon_weaponbonus_property();
				}
				break;
			case MapIniParser.T__222:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1083;
				this.weapon_lasterbone_property();
				}
				break;
			case MapIniParser.T__185:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1084;
				this.match(MapIniParser.T__185);
				this.state = 1085;
				this.match(MapIniParser.EQ);
				this.state = 1086;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__186:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1087;
				this.match(MapIniParser.T__186);
				this.state = 1088;
				this.match(MapIniParser.EQ);
				this.state = 1089;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__187:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1090;
				this.match(MapIniParser.T__187);
				this.state = 1091;
				this.match(MapIniParser.EQ);
				this.state = 1092;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__188:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1093;
				this.match(MapIniParser.T__188);
				this.state = 1094;
				this.match(MapIniParser.EQ);
				this.state = 1095;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__189:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1096;
				this.match(MapIniParser.T__189);
				this.state = 1097;
				this.match(MapIniParser.EQ);
				this.state = 1098;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__190:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1099;
				this.match(MapIniParser.T__190);
				this.state = 1100;
				this.match(MapIniParser.EQ);
				this.state = 1101;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__191:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1102;
				this.match(MapIniParser.T__191);
				this.state = 1103;
				this.match(MapIniParser.EQ);
				this.state = 1104;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__192:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1105;
				this.match(MapIniParser.T__192);
				this.state = 1106;
				this.match(MapIniParser.EQ);
				this.state = 1107;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__193:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1108;
				this.match(MapIniParser.T__193);
				this.state = 1109;
				this.match(MapIniParser.EQ);
				this.state = 1110;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__194:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1111;
				this.match(MapIniParser.T__194);
				this.state = 1112;
				this.match(MapIniParser.EQ);
				this.state = 1113;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__195:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1114;
				this.match(MapIniParser.T__195);
				this.state = 1115;
				this.match(MapIniParser.EQ);
				this.state = 1116;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__196:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1117;
				this.match(MapIniParser.T__196);
				this.state = 1118;
				this.match(MapIniParser.EQ);
				this.state = 1119;
				this.particlesystem_value();
				}
				break;
			case MapIniParser.T__197:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 1120;
				this.match(MapIniParser.T__197);
				this.state = 1121;
				this.match(MapIniParser.EQ);
				this.state = 1122;
				this.match(MapIniParser.VETERENCY);
				this.state = 1123;
				this.particlesystem_value();
				}
				break;
			case MapIniParser.T__198:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 1124;
				this.match(MapIniParser.T__198);
				this.state = 1125;
				this.match(MapIniParser.EQ);
				this.state = 1126;
				this.object_value();
				}
				break;
			case MapIniParser.T__199:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 1127;
				this.match(MapIniParser.T__199);
				this.state = 1128;
				this.match(MapIniParser.EQ);
				this.state = 1129;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__200:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 1130;
				this.match(MapIniParser.T__200);
				this.state = 1131;
				this.match(MapIniParser.EQ);
				this.state = 1132;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__201:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 1133;
				this.match(MapIniParser.T__201);
				this.state = 1134;
				this.match(MapIniParser.EQ);
				this.state = 1135;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__202:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 1136;
				this.match(MapIniParser.T__202);
				this.state = 1137;
				this.match(MapIniParser.EQ);
				this.state = 1138;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__203:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 1139;
				this.match(MapIniParser.T__203);
				this.state = 1140;
				this.match(MapIniParser.EQ);
				this.state = 1141;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__204:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 1142;
				this.match(MapIniParser.T__204);
				this.state = 1143;
				this.match(MapIniParser.EQ);
				this.state = 1144;
				this.fxlist_value();
				}
				break;
			case MapIniParser.T__205:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 1145;
				this.match(MapIniParser.T__205);
				this.state = 1146;
				this.match(MapIniParser.EQ);
				this.state = 1147;
				this.match(MapIniParser.VETERENCY);
				this.state = 1148;
				this.fxlist_value();
				}
				break;
			case MapIniParser.T__206:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 1149;
				this.match(MapIniParser.T__206);
				this.state = 1150;
				this.match(MapIniParser.EQ);
				this.state = 1151;
				this.fxlist_value();
				}
				break;
			case MapIniParser.T__207:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 1152;
				this.match(MapIniParser.T__207);
				this.state = 1153;
				this.match(MapIniParser.EQ);
				this.state = 1154;
				this.audioevent_value();
				}
				break;
			case MapIniParser.T__208:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 1155;
				this.match(MapIniParser.T__208);
				this.state = 1156;
				this.match(MapIniParser.EQ);
				this.state = 1157;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__209:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 1158;
				this.match(MapIniParser.T__209);
				this.state = 1159;
				this.match(MapIniParser.EQ);
				this.state = 1160;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__210:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 1161;
				this.match(MapIniParser.T__210);
				this.state = 1162;
				this.match(MapIniParser.EQ);
				this.state = 1163;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__211:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 1164;
				this.match(MapIniParser.T__211);
				this.state = 1165;
				this.match(MapIniParser.EQ);
				this.state = 1166;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__212:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 1167;
				this.match(MapIniParser.T__212);
				this.state = 1168;
				this.match(MapIniParser.EQ);
				this.state = 1170;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1169;
					this.match(MapIniParser.ID);
					}
					}
					this.state = 1172;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === MapIniParser.ID);
				}
				break;
			case MapIniParser.T__213:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 1174;
				this.match(MapIniParser.T__213);
				this.state = 1175;
				this.match(MapIniParser.EQ);
				this.state = 1176;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__214:
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 1177;
				this.match(MapIniParser.T__214);
				this.state = 1178;
				this.match(MapIniParser.EQ);
				this.state = 1179;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__215:
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 1180;
				this.match(MapIniParser.T__215);
				this.state = 1181;
				this.match(MapIniParser.EQ);
				this.state = 1182;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__216:
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 1183;
				this.match(MapIniParser.T__216);
				this.state = 1184;
				this.match(MapIniParser.EQ);
				this.state = 1185;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__217:
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 1186;
				this.match(MapIniParser.T__217);
				this.state = 1187;
				this.match(MapIniParser.EQ);
				this.state = 1188;
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
	public weapon_damagetype_property(): Weapon_damagetype_propertyContext {
		let _localctx: Weapon_damagetype_propertyContext = new Weapon_damagetype_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, MapIniParser.RULE_weapon_damagetype_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1191;
			this.match(MapIniParser.T__218);
			this.state = 1192;
			this.match(MapIniParser.EQ);
			this.state = 1193;
			this.damageType_value();
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
	public weapon_deathtype_property(): Weapon_deathtype_propertyContext {
		let _localctx: Weapon_deathtype_propertyContext = new Weapon_deathtype_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, MapIniParser.RULE_weapon_deathtype_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1195;
			this.match(MapIniParser.T__219);
			this.state = 1196;
			this.match(MapIniParser.EQ);
			this.state = 1197;
			this.deathType_value();
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
	public weapon_damageaffects_property(): Weapon_damageaffects_propertyContext {
		let _localctx: Weapon_damageaffects_propertyContext = new Weapon_damageaffects_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, MapIniParser.RULE_weapon_damageaffects_property);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1199;
			this.match(MapIniParser.T__220);
			this.state = 1200;
			this.match(MapIniParser.EQ);
			this.state = 1202;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1201;
				this.damageAffects_value();
				}
				}
				this.state = 1204;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === MapIniParser.ID);
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
	public weapon_weaponbonus_property(): Weapon_weaponbonus_propertyContext {
		let _localctx: Weapon_weaponbonus_propertyContext = new Weapon_weaponbonus_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, MapIniParser.RULE_weapon_weaponbonus_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1206;
			this.match(MapIniParser.T__221);
			this.state = 1207;
			this.match(MapIniParser.EQ);
			this.state = 1208;
			this.weapon_weaponbonus_condition_value();
			this.state = 1209;
			this.weapon_weaponbonus_bonus_value();
			this.state = 1210;
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
	public weapon_lasterbone_property(): Weapon_lasterbone_propertyContext {
		let _localctx: Weapon_lasterbone_propertyContext = new Weapon_lasterbone_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, MapIniParser.RULE_weapon_lasterbone_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1212;
			this.match(MapIniParser.T__222);
			this.state = 1213;
			this.match(MapIniParser.EQ);
			this.state = 1214;
			this.damageType_value();
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
	public weapon_weaponbonus_condition_value(): Weapon_weaponbonus_condition_valueContext {
		let _localctx: Weapon_weaponbonus_condition_valueContext = new Weapon_weaponbonus_condition_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, MapIniParser.RULE_weapon_weaponbonus_condition_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1216;
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
	public weapon_weaponbonus_bonus_value(): Weapon_weaponbonus_bonus_valueContext {
		let _localctx: Weapon_weaponbonus_bonus_valueContext = new Weapon_weaponbonus_bonus_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, MapIniParser.RULE_weapon_weaponbonus_bonus_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1218;
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
	public damageType_value(): DamageType_valueContext {
		let _localctx: DamageType_valueContext = new DamageType_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, MapIniParser.RULE_damageType_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1220;
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
	public deathType_value(): DeathType_valueContext {
		let _localctx: DeathType_valueContext = new DeathType_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, MapIniParser.RULE_deathType_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1222;
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
	public damageAffects_value(): DamageAffects_valueContext {
		let _localctx: DamageAffects_valueContext = new DamageAffects_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, MapIniParser.RULE_damageAffects_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1224;
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
	public weatherClass(): WeatherClassContext {
		let _localctx: WeatherClassContext = new WeatherClassContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, MapIniParser.RULE_weatherClass);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1226;
			this.match(MapIniParser.T__223);
			this.state = 1230;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & ((1 << (MapIniParser.T__224 - 225)) | (1 << (MapIniParser.T__225 - 225)) | (1 << (MapIniParser.T__226 - 225)) | (1 << (MapIniParser.T__227 - 225)) | (1 << (MapIniParser.T__228 - 225)) | (1 << (MapIniParser.T__229 - 225)) | (1 << (MapIniParser.T__230 - 225)) | (1 << (MapIniParser.T__231 - 225)) | (1 << (MapIniParser.T__232 - 225)) | (1 << (MapIniParser.T__233 - 225)) | (1 << (MapIniParser.T__234 - 225)) | (1 << (MapIniParser.T__235 - 225)) | (1 << (MapIniParser.T__236 - 225)))) !== 0)) {
				{
				{
				this.state = 1227;
				this.weather_properties();
				}
				}
				this.state = 1232;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1233;
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
	public weather_properties(): Weather_propertiesContext {
		let _localctx: Weather_propertiesContext = new Weather_propertiesContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, MapIniParser.RULE_weather_properties);
		let _la: number;
		try {
			this.state = 1274;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapIniParser.T__224:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1235;
				this.match(MapIniParser.T__224);
				this.state = 1236;
				this.match(MapIniParser.EQ);
				this.state = 1237;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__225:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1238;
				this.match(MapIniParser.T__225);
				this.state = 1239;
				this.match(MapIniParser.EQ);
				this.state = 1240;
				this.file();
				}
				break;
			case MapIniParser.T__226:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1241;
				this.match(MapIniParser.T__226);
				this.state = 1242;
				this.match(MapIniParser.EQ);
				this.state = 1243;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__227:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1244;
				this.match(MapIniParser.T__227);
				this.state = 1245;
				this.match(MapIniParser.EQ);
				this.state = 1246;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__228:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1247;
				this.match(MapIniParser.T__228);
				this.state = 1248;
				this.match(MapIniParser.EQ);
				this.state = 1249;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__229:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1250;
				this.match(MapIniParser.T__229);
				this.state = 1251;
				this.match(MapIniParser.EQ);
				this.state = 1252;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__230:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1253;
				this.match(MapIniParser.T__230);
				this.state = 1254;
				this.match(MapIniParser.EQ);
				this.state = 1255;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__231:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1256;
				this.match(MapIniParser.T__231);
				this.state = 1257;
				this.match(MapIniParser.EQ);
				this.state = 1258;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__232:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1259;
				this.match(MapIniParser.T__232);
				this.state = 1260;
				this.match(MapIniParser.EQ);
				this.state = 1261;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__233:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1262;
				this.match(MapIniParser.T__233);
				this.state = 1263;
				this.match(MapIniParser.EQ);
				this.state = 1264;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__234:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1265;
				this.match(MapIniParser.T__234);
				this.state = 1266;
				this.match(MapIniParser.EQ);
				this.state = 1267;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
			case MapIniParser.T__235:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1268;
				this.match(MapIniParser.T__235);
				this.state = 1269;
				this.match(MapIniParser.EQ);
				this.state = 1270;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__236:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1271;
				this.match(MapIniParser.T__236);
				this.state = 1272;
				this.match(MapIniParser.EQ);
				this.state = 1273;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
	public end(): EndContext {
		let _localctx: EndContext = new EndContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, MapIniParser.RULE_end);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1276;
			_la = this._input.LA(1);
			if (!(((((_la - 238)) & ~0x1F) === 0 && ((1 << (_la - 238)) & ((1 << (MapIniParser.T__237 - 238)) | (1 << (MapIniParser.T__238 - 238)) | (1 << (MapIniParser.T__239 - 238)))) !== 0))) {
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
		this.enterRule(_localctx, 124, MapIniParser.RULE_file);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1278;
			this.match(MapIniParser.ID);
			this.state = 1279;
			this.match(MapIniParser.T__240);
			this.state = 1280;
			_la = this._input.LA(1);
			if (!(_la === MapIniParser.T__241 || _la === MapIniParser.T__242)) {
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
		this.enterRule(_localctx, 126, MapIniParser.RULE_cb_command_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1282;
			this.match(MapIniParser.T__243);
			this.state = 1283;
			this.match(MapIniParser.EQ);
			this.state = 1284;
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
		this.enterRule(_localctx, 128, MapIniParser.RULE_cb_command_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1286;
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
	public cb_options_property(): Cb_options_propertyContext {
		let _localctx: Cb_options_propertyContext = new Cb_options_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, MapIniParser.RULE_cb_options_property);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1288;
			this.match(MapIniParser.T__244);
			this.state = 1289;
			this.match(MapIniParser.EQ);
			this.state = 1291;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1290;
				this.cb_options_value();
				}
				}
				this.state = 1293;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === MapIniParser.ID);
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
		this.enterRule(_localctx, 132, MapIniParser.RULE_cb_options_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1295;
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
	public cb_buttonimage_property(): Cb_buttonimage_propertyContext {
		let _localctx: Cb_buttonimage_propertyContext = new Cb_buttonimage_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, MapIniParser.RULE_cb_buttonimage_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1297;
			this.match(MapIniParser.T__245);
			this.state = 1298;
			this.match(MapIniParser.EQ);
			this.state = 1299;
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
		this.enterRule(_localctx, 136, MapIniParser.RULE_cb_buttonbordertype_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1301;
			this.match(MapIniParser.T__246);
			this.state = 1302;
			this.match(MapIniParser.EQ);
			this.state = 1303;
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
		this.enterRule(_localctx, 138, MapIniParser.RULE_cb_buttonbordertype_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1305;
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
	public cb_textlabel_property(): Cb_textlabel_propertyContext {
		let _localctx: Cb_textlabel_propertyContext = new Cb_textlabel_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, MapIniParser.RULE_cb_textlabel_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1307;
			this.match(MapIniParser.T__247);
			this.state = 1308;
			this.match(MapIniParser.EQ);
			this.state = 1309;
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
	public cb_descriptionlabel_property(): Cb_descriptionlabel_propertyContext {
		let _localctx: Cb_descriptionlabel_propertyContext = new Cb_descriptionlabel_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, MapIniParser.RULE_cb_descriptionlabel_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1311;
			this.match(MapIniParser.T__248);
			this.state = 1312;
			this.match(MapIniParser.EQ);
			this.state = 1313;
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
	public cb_conflictinglabel_property(): Cb_conflictinglabel_propertyContext {
		let _localctx: Cb_conflictinglabel_propertyContext = new Cb_conflictinglabel_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, MapIniParser.RULE_cb_conflictinglabel_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1315;
			this.match(MapIniParser.T__249);
			this.state = 1316;
			this.match(MapIniParser.EQ);
			this.state = 1317;
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
	public cb_cursorname_propery(): Cb_cursorname_properyContext {
		let _localctx: Cb_cursorname_properyContext = new Cb_cursorname_properyContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, MapIniParser.RULE_cb_cursorname_propery);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1319;
			this.match(MapIniParser.T__250);
			this.state = 1320;
			this.match(MapIniParser.EQ);
			this.state = 1321;
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
		this.enterRule(_localctx, 148, MapIniParser.RULE_cb_radius_cursorname_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1323;
			this.match(MapIniParser.T__251);
			this.state = 1324;
			this.match(MapIniParser.EQ);
			this.state = 1325;
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
		this.enterRule(_localctx, 150, MapIniParser.RULE_cb_invalid_cursorname_propery);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1327;
			this.match(MapIniParser.T__252);
			this.state = 1328;
			this.match(MapIniParser.EQ);
			this.state = 1329;
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
	public cb_unitspecificsound_property(): Cb_unitspecificsound_propertyContext {
		let _localctx: Cb_unitspecificsound_propertyContext = new Cb_unitspecificsound_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, MapIniParser.RULE_cb_unitspecificsound_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1331;
			this.match(MapIniParser.T__253);
			this.state = 1332;
			this.match(MapIniParser.EQ);
			this.state = 1333;
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
	public cb_maxshotsfire_property(): Cb_maxshotsfire_propertyContext {
		let _localctx: Cb_maxshotsfire_propertyContext = new Cb_maxshotsfire_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, MapIniParser.RULE_cb_maxshotsfire_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1335;
			this.match(MapIniParser.T__254);
			this.state = 1336;
			this.match(MapIniParser.EQ);
			this.state = 1337;
			this.match(MapIniParser.INT);
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
	public dfx_throttletime_property(): Dfx_throttletime_propertyContext {
		let _localctx: Dfx_throttletime_propertyContext = new Dfx_throttletime_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, MapIniParser.RULE_dfx_throttletime_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1339;
			this.match(MapIniParser.T__255);
			this.state = 1340;
			this.match(MapIniParser.EQ);
			this.state = 1341;
			this.damageType_value();
			this.state = 1342;
			this.match(MapIniParser.INT);
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
	public dfx_amountformajorfx_property(): Dfx_amountformajorfx_propertyContext {
		let _localctx: Dfx_amountformajorfx_propertyContext = new Dfx_amountformajorfx_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, MapIniParser.RULE_dfx_amountformajorfx_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1344;
			this.match(MapIniParser.T__256);
			this.state = 1345;
			this.match(MapIniParser.EQ);
			this.state = 1346;
			this.damageType_value();
			this.state = 1347;
			this.match(MapIniParser.FLOAT);
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
	public dfx_majorfx_property(): Dfx_majorfx_propertyContext {
		let _localctx: Dfx_majorfx_propertyContext = new Dfx_majorfx_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, MapIniParser.RULE_dfx_majorfx_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1349;
			this.match(MapIniParser.T__257);
			this.state = 1350;
			this.match(MapIniParser.EQ);
			this.state = 1351;
			this.damageType_value();
			this.state = 1352;
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
	public dfx_minorfx_property(): Dfx_minorfx_propertyContext {
		let _localctx: Dfx_minorfx_propertyContext = new Dfx_minorfx_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, MapIniParser.RULE_dfx_minorfx_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1354;
			this.match(MapIniParser.T__258);
			this.state = 1355;
			this.match(MapIniParser.EQ);
			this.state = 1356;
			this.damageType_value();
			this.state = 1357;
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
	public dfx_vetmajorfx_property(): Dfx_vetmajorfx_propertyContext {
		let _localctx: Dfx_vetmajorfx_propertyContext = new Dfx_vetmajorfx_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, MapIniParser.RULE_dfx_vetmajorfx_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1359;
			this.match(MapIniParser.T__259);
			this.state = 1360;
			this.match(MapIniParser.EQ);
			this.state = 1361;
			this.match(MapIniParser.VETERENCY);
			this.state = 1362;
			this.damageType_value();
			this.state = 1363;
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
	public dfx_vetminorfx_property(): Dfx_vetminorfx_propertyContext {
		let _localctx: Dfx_vetminorfx_propertyContext = new Dfx_vetminorfx_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, MapIniParser.RULE_dfx_vetminorfx_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1365;
			this.match(MapIniParser.T__260);
			this.state = 1366;
			this.match(MapIniParser.EQ);
			this.state = 1367;
			this.match(MapIniParser.VETERENCY);
			this.state = 1368;
			this.damageType_value();
			this.state = 1369;
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
	public dgi_useplayercolor_property(): Dgi_useplayercolor_propertyContext {
		let _localctx: Dgi_useplayercolor_propertyContext = new Dgi_useplayercolor_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, MapIniParser.RULE_dgi_useplayercolor_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1371;
			this.match(MapIniParser.T__261);
			this.state = 1372;
			this.match(MapIniParser.EQ);
			this.state = 1373;
			this.match(MapIniParser.BOOLEAN);
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
	public dgi_colorfortext_property(): Dgi_colorfortext_propertyContext {
		let _localctx: Dgi_colorfortext_propertyContext = new Dgi_colorfortext_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, MapIniParser.RULE_dgi_colorfortext_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1375;
			this.match(MapIniParser.T__262);
			this.state = 1376;
			this.match(MapIniParser.EQ);
			this.state = 1377;
			this.match(MapIniParser.R);
			this.state = 1378;
			this.match(MapIniParser.G);
			this.state = 1379;
			this.match(MapIniParser.B);
			this.state = 1380;
			this.match(MapIniParser.A);
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
	public dgi_colordropshadow_property(): Dgi_colordropshadow_propertyContext {
		let _localctx: Dgi_colordropshadow_propertyContext = new Dgi_colordropshadow_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, MapIniParser.RULE_dgi_colordropshadow_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1382;
			this.match(MapIniParser.T__263);
			this.state = 1383;
			this.match(MapIniParser.EQ);
			this.state = 1384;
			this.match(MapIniParser.R);
			this.state = 1385;
			this.match(MapIniParser.G);
			this.state = 1386;
			this.match(MapIniParser.B);
			this.state = 1387;
			this.match(MapIniParser.A);
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
	public dgi_dropshadowoffsetX_property(): Dgi_dropshadowoffsetX_propertyContext {
		let _localctx: Dgi_dropshadowoffsetX_propertyContext = new Dgi_dropshadowoffsetX_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, MapIniParser.RULE_dgi_dropshadowoffsetX_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1389;
			this.match(MapIniParser.T__264);
			this.state = 1390;
			this.match(MapIniParser.EQ);
			this.state = 1391;
			this.match(MapIniParser.INT);
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
	public dgi_dropshadowoffsetY_property(): Dgi_dropshadowoffsetY_propertyContext {
		let _localctx: Dgi_dropshadowoffsetY_propertyContext = new Dgi_dropshadowoffsetY_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, MapIniParser.RULE_dgi_dropshadowoffsetY_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1393;
			this.match(MapIniParser.T__265);
			this.state = 1394;
			this.match(MapIniParser.EQ);
			this.state = 1395;
			this.match(MapIniParser.INT);
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
	public dgi_fontname_property(): Dgi_fontname_propertyContext {
		let _localctx: Dgi_fontname_propertyContext = new Dgi_fontname_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, MapIniParser.RULE_dgi_fontname_property);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1397;
			this.match(MapIniParser.T__266);
			this.state = 1398;
			this.match(MapIniParser.EQ);
			this.state = 1400;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1399;
				this.match(MapIniParser.ID);
				}
				}
				this.state = 1402;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === MapIniParser.ID);
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
	public dgi_fontsize_property(): Dgi_fontsize_propertyContext {
		let _localctx: Dgi_fontsize_propertyContext = new Dgi_fontsize_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, MapIniParser.RULE_dgi_fontsize_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1404;
			this.match(MapIniParser.T__267);
			this.state = 1405;
			this.match(MapIniParser.EQ);
			this.state = 1406;
			this.match(MapIniParser.INT);
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
	public dgi_fontisbold_property(): Dgi_fontisbold_propertyContext {
		let _localctx: Dgi_fontisbold_propertyContext = new Dgi_fontisbold_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, MapIniParser.RULE_dgi_fontisbold_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1408;
			this.match(MapIniParser.T__268);
			this.state = 1409;
			this.match(MapIniParser.EQ);
			this.state = 1410;
			this.match(MapIniParser.BOOLEAN);
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
	public dgi_drawposXperc_property(): Dgi_drawposXperc_propertyContext {
		let _localctx: Dgi_drawposXperc_propertyContext = new Dgi_drawposXperc_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, MapIniParser.RULE_dgi_drawposXperc_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1412;
			this.match(MapIniParser.T__269);
			this.state = 1413;
			this.match(MapIniParser.EQ);
			this.state = 1414;
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
	public dgi_drawposYperc_property(): Dgi_drawposYperc_propertyContext {
		let _localctx: Dgi_drawposYperc_propertyContext = new Dgi_drawposYperc_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, MapIniParser.RULE_dgi_drawposYperc_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1416;
			this.match(MapIniParser.T__270);
			this.state = 1417;
			this.match(MapIniParser.EQ);
			this.state = 1418;
			this.match(MapIniParser.INT);
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
	public fxlist_ps_name_property(): Fxlist_ps_name_propertyContext {
		let _localctx: Fxlist_ps_name_propertyContext = new Fxlist_ps_name_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, MapIniParser.RULE_fxlist_ps_name_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1420;
			this.match(MapIniParser.T__271);
			this.state = 1421;
			this.match(MapIniParser.EQ);
			this.state = 1422;
			this.particlesystem_value();
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
	public fxlist_ps_count_property(): Fxlist_ps_count_propertyContext {
		let _localctx: Fxlist_ps_count_propertyContext = new Fxlist_ps_count_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, MapIniParser.RULE_fxlist_ps_count_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1424;
			this.match(MapIniParser.T__272);
			this.state = 1425;
			this.match(MapIniParser.EQ);
			this.state = 1428;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				{
				this.state = 1426;
				this.match(MapIniParser.INT);
				}
				break;

			case 2:
				{
				this.state = 1427;
				this.rand_value();
				}
				break;
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
	public fxlist_ps_offset_property(): Fxlist_ps_offset_propertyContext {
		let _localctx: Fxlist_ps_offset_propertyContext = new Fxlist_ps_offset_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, MapIniParser.RULE_fxlist_ps_offset_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1430;
			this.match(MapIniParser.T__273);
			this.state = 1431;
			this.match(MapIniParser.EQ);
			this.state = 1432;
			this.coord3D();
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
	public fxlist_ps_radius_property(): Fxlist_ps_radius_propertyContext {
		let _localctx: Fxlist_ps_radius_propertyContext = new Fxlist_ps_radius_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, MapIniParser.RULE_fxlist_ps_radius_property);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1434;
			this.match(MapIniParser.T__274);
			this.state = 1435;
			this.match(MapIniParser.EQ);
			this.state = 1438;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				{
				this.state = 1436;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
	public fxlist_ps_height_property(): Fxlist_ps_height_propertyContext {
		let _localctx: Fxlist_ps_height_propertyContext = new Fxlist_ps_height_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, MapIniParser.RULE_fxlist_ps_height_property);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1440;
			this.match(MapIniParser.T__275);
			this.state = 1441;
			this.match(MapIniParser.EQ);
			this.state = 1444;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				{
				this.state = 1442;
				_la = this._input.LA(1);
				if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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

			case 2:
				{
				this.state = 1443;
				this.rand_value();
				}
				break;
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
	public fxlist_ps_initialDelay_property(): Fxlist_ps_initialDelay_propertyContext {
		let _localctx: Fxlist_ps_initialDelay_propertyContext = new Fxlist_ps_initialDelay_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, MapIniParser.RULE_fxlist_ps_initialDelay_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1446;
			this.match(MapIniParser.T__276);
			this.state = 1447;
			this.match(MapIniParser.EQ);
			this.state = 1448;
			this.rand_value();
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
	public fxlist_ps_rotateX_property(): Fxlist_ps_rotateX_propertyContext {
		let _localctx: Fxlist_ps_rotateX_propertyContext = new Fxlist_ps_rotateX_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, MapIniParser.RULE_fxlist_ps_rotateX_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1450;
			this.match(MapIniParser.T__277);
			this.state = 1451;
			this.match(MapIniParser.EQ);
			this.state = 1452;
			this.match(MapIniParser.INT);
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
	public fxlist_ps_rotatey_property(): Fxlist_ps_rotatey_propertyContext {
		let _localctx: Fxlist_ps_rotatey_propertyContext = new Fxlist_ps_rotatey_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, MapIniParser.RULE_fxlist_ps_rotatey_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1454;
			this.match(MapIniParser.T__278);
			this.state = 1455;
			this.match(MapIniParser.EQ);
			this.state = 1456;
			this.match(MapIniParser.INT);
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
	public fxlist_ps_rotateZ_property(): Fxlist_ps_rotateZ_propertyContext {
		let _localctx: Fxlist_ps_rotateZ_propertyContext = new Fxlist_ps_rotateZ_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, MapIniParser.RULE_fxlist_ps_rotateZ_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1458;
			this.match(MapIniParser.T__279);
			this.state = 1459;
			this.match(MapIniParser.EQ);
			this.state = 1460;
			this.match(MapIniParser.INT);
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
	public fxlist_ps_orienttoobject_property(): Fxlist_ps_orienttoobject_propertyContext {
		let _localctx: Fxlist_ps_orienttoobject_propertyContext = new Fxlist_ps_orienttoobject_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, MapIniParser.RULE_fxlist_ps_orienttoobject_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1462;
			this.match(MapIniParser.T__280);
			this.state = 1463;
			this.match(MapIniParser.EQ);
			this.state = 1464;
			this.match(MapIniParser.BOOLEAN);
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
	public fxlist_ps_ricochet_property(): Fxlist_ps_ricochet_propertyContext {
		let _localctx: Fxlist_ps_ricochet_propertyContext = new Fxlist_ps_ricochet_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, MapIniParser.RULE_fxlist_ps_ricochet_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1466;
			this.match(MapIniParser.T__281);
			this.state = 1467;
			this.match(MapIniParser.EQ);
			this.state = 1468;
			this.match(MapIniParser.BOOLEAN);
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
	public fxlist_ps_usecallerradius_property(): Fxlist_ps_usecallerradius_propertyContext {
		let _localctx: Fxlist_ps_usecallerradius_propertyContext = new Fxlist_ps_usecallerradius_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, MapIniParser.RULE_fxlist_ps_usecallerradius_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1470;
			this.match(MapIniParser.T__282);
			this.state = 1471;
			this.match(MapIniParser.EQ);
			this.state = 1472;
			this.match(MapIniParser.BOOLEAN);
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
	public fxlist_ps_attachtoobject_property(): Fxlist_ps_attachtoobject_propertyContext {
		let _localctx: Fxlist_ps_attachtoobject_propertyContext = new Fxlist_ps_attachtoobject_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, MapIniParser.RULE_fxlist_ps_attachtoobject_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1474;
			this.match(MapIniParser.T__283);
			this.state = 1475;
			this.match(MapIniParser.EQ);
			this.state = 1476;
			this.match(MapIniParser.BOOLEAN);
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
	public fxlist_ps_creategroundheight_property(): Fxlist_ps_creategroundheight_propertyContext {
		let _localctx: Fxlist_ps_creategroundheight_propertyContext = new Fxlist_ps_creategroundheight_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, MapIniParser.RULE_fxlist_ps_creategroundheight_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1478;
			this.match(MapIniParser.T__284);
			this.state = 1479;
			this.match(MapIniParser.EQ);
			this.state = 1480;
			this.match(MapIniParser.BOOLEAN);
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
	public fxlist_sound_property(): Fxlist_sound_propertyContext {
		let _localctx: Fxlist_sound_propertyContext = new Fxlist_sound_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, MapIniParser.RULE_fxlist_sound_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1482;
			this.match(MapIniParser.T__271);
			this.state = 1483;
			this.match(MapIniParser.EQ);
			this.state = 1484;
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
	public fxlist_rayeffect_primaryoffset_property(): Fxlist_rayeffect_primaryoffset_propertyContext {
		let _localctx: Fxlist_rayeffect_primaryoffset_propertyContext = new Fxlist_rayeffect_primaryoffset_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, MapIniParser.RULE_fxlist_rayeffect_primaryoffset_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1486;
			this.match(MapIniParser.T__285);
			this.state = 1487;
			this.match(MapIniParser.EQ);
			this.state = 1488;
			this.coord3D();
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
	public fxlist_rayeffect_secondaryoffset_proprety(): Fxlist_rayeffect_secondaryoffset_propretyContext {
		let _localctx: Fxlist_rayeffect_secondaryoffset_propretyContext = new Fxlist_rayeffect_secondaryoffset_propretyContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, MapIniParser.RULE_fxlist_rayeffect_secondaryoffset_proprety);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1490;
			this.match(MapIniParser.T__286);
			this.state = 1491;
			this.match(MapIniParser.EQ);
			this.state = 1492;
			this.coord3D();
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
	public fxlist_tracer_name_propety(): Fxlist_tracer_name_propetyContext {
		let _localctx: Fxlist_tracer_name_propetyContext = new Fxlist_tracer_name_propetyContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, MapIniParser.RULE_fxlist_tracer_name_propety);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1494;
			this.match(MapIniParser.T__287);
			this.state = 1495;
			this.match(MapIniParser.EQ);
			this.state = 1496;
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
	public fxlist_tracer_bonename_property(): Fxlist_tracer_bonename_propertyContext {
		let _localctx: Fxlist_tracer_bonename_propertyContext = new Fxlist_tracer_bonename_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, MapIniParser.RULE_fxlist_tracer_bonename_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1498;
			this.match(MapIniParser.T__288);
			this.state = 1499;
			this.match(MapIniParser.EQ);
			this.state = 1500;
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
	public fxlist_tracer_speed_property(): Fxlist_tracer_speed_propertyContext {
		let _localctx: Fxlist_tracer_speed_propertyContext = new Fxlist_tracer_speed_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, MapIniParser.RULE_fxlist_tracer_speed_property);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1502;
			this.match(MapIniParser.T__124);
			this.state = 1503;
			this.match(MapIniParser.EQ);
			this.state = 1504;
			_la = this._input.LA(1);
			if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
	public fxlist_tracer_decayat_property(): Fxlist_tracer_decayat_propertyContext {
		let _localctx: Fxlist_tracer_decayat_propertyContext = new Fxlist_tracer_decayat_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, MapIniParser.RULE_fxlist_tracer_decayat_property);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1506;
			this.match(MapIniParser.T__289);
			this.state = 1507;
			this.match(MapIniParser.EQ);
			this.state = 1508;
			_la = this._input.LA(1);
			if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
	public fxlist_tracer_length_property(): Fxlist_tracer_length_propertyContext {
		let _localctx: Fxlist_tracer_length_propertyContext = new Fxlist_tracer_length_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, MapIniParser.RULE_fxlist_tracer_length_property);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1510;
			this.match(MapIniParser.T__290);
			this.state = 1511;
			this.match(MapIniParser.EQ);
			this.state = 1512;
			_la = this._input.LA(1);
			if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
	public fxlist_tracer_width_property(): Fxlist_tracer_width_propertyContext {
		let _localctx: Fxlist_tracer_width_propertyContext = new Fxlist_tracer_width_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, MapIniParser.RULE_fxlist_tracer_width_property);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1514;
			this.match(MapIniParser.T__291);
			this.state = 1515;
			this.match(MapIniParser.EQ);
			this.state = 1516;
			_la = this._input.LA(1);
			if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
	public fxlist_tracer_color_property(): Fxlist_tracer_color_propertyContext {
		let _localctx: Fxlist_tracer_color_propertyContext = new Fxlist_tracer_color_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, MapIniParser.RULE_fxlist_tracer_color_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1518;
			this.match(MapIniParser.T__121);
			this.state = 1519;
			this.match(MapIniParser.EQ);
			this.state = 1520;
			this.match(MapIniParser.R);
			this.state = 1521;
			this.match(MapIniParser.G);
			this.state = 1522;
			this.match(MapIniParser.B);
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
	public fxlist_tracer_probability_property(): Fxlist_tracer_probability_propertyContext {
		let _localctx: Fxlist_tracer_probability_propertyContext = new Fxlist_tracer_probability_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, MapIniParser.RULE_fxlist_tracer_probability_property);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1524;
			this.match(MapIniParser.T__292);
			this.state = 1525;
			this.match(MapIniParser.EQ);
			this.state = 1526;
			_la = this._input.LA(1);
			if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
	public fxlist_lightpulse_color_property(): Fxlist_lightpulse_color_propertyContext {
		let _localctx: Fxlist_lightpulse_color_propertyContext = new Fxlist_lightpulse_color_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, MapIniParser.RULE_fxlist_lightpulse_color_property);
		try {
			this.enterOuterAlt(_localctx, 1);
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
	public fxlist_lightpulse_radius_property(): Fxlist_lightpulse_radius_propertyContext {
		let _localctx: Fxlist_lightpulse_radius_propertyContext = new Fxlist_lightpulse_radius_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, MapIniParser.RULE_fxlist_lightpulse_radius_property);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1534;
			this.match(MapIniParser.T__274);
			this.state = 1535;
			this.match(MapIniParser.EQ);
			this.state = 1536;
			_la = this._input.LA(1);
			if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
	public fxlist_lightpulse_radiuspercentobjectsize_property(): Fxlist_lightpulse_radiuspercentobjectsize_propertyContext {
		let _localctx: Fxlist_lightpulse_radiuspercentobjectsize_propertyContext = new Fxlist_lightpulse_radiuspercentobjectsize_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, MapIniParser.RULE_fxlist_lightpulse_radiuspercentobjectsize_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1538;
			this.match(MapIniParser.T__293);
			this.state = 1539;
			this.match(MapIniParser.EQ);
			this.state = 1540;
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
	public fxlist_lightpulse_increasetime_property(): Fxlist_lightpulse_increasetime_propertyContext {
		let _localctx: Fxlist_lightpulse_increasetime_propertyContext = new Fxlist_lightpulse_increasetime_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, MapIniParser.RULE_fxlist_lightpulse_increasetime_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1542;
			this.match(MapIniParser.T__294);
			this.state = 1543;
			this.match(MapIniParser.EQ);
			this.state = 1544;
			this.match(MapIniParser.INT);
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
	public fxlist_lightpulse_decreasetime_property(): Fxlist_lightpulse_decreasetime_propertyContext {
		let _localctx: Fxlist_lightpulse_decreasetime_propertyContext = new Fxlist_lightpulse_decreasetime_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, MapIniParser.RULE_fxlist_lightpulse_decreasetime_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1546;
			this.match(MapIniParser.T__295);
			this.state = 1547;
			this.match(MapIniParser.EQ);
			this.state = 1548;
			this.match(MapIniParser.INT);
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
	public fxlist_viewshake_type_property(): Fxlist_viewshake_type_propertyContext {
		let _localctx: Fxlist_viewshake_type_propertyContext = new Fxlist_viewshake_type_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, MapIniParser.RULE_fxlist_viewshake_type_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1550;
			this.match(MapIniParser.T__296);
			this.state = 1551;
			this.match(MapIniParser.EQ);
			this.state = 1552;
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
	public fxlist_scorch_type_property(): Fxlist_scorch_type_propertyContext {
		let _localctx: Fxlist_scorch_type_propertyContext = new Fxlist_scorch_type_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, MapIniParser.RULE_fxlist_scorch_type_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1554;
			this.match(MapIniParser.T__296);
			this.state = 1555;
			this.match(MapIniParser.EQ);
			this.state = 1556;
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
	public fxlist_scorch_radius_property(): Fxlist_scorch_radius_propertyContext {
		let _localctx: Fxlist_scorch_radius_propertyContext = new Fxlist_scorch_radius_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, MapIniParser.RULE_fxlist_scorch_radius_property);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1558;
			this.match(MapIniParser.T__274);
			this.state = 1559;
			this.match(MapIniParser.EQ);
			this.state = 1560;
			_la = this._input.LA(1);
			if (!(_la === MapIniParser.INT || _la === MapIniParser.FLOAT)) {
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
	public fxlist_atbonepos_fx_property(): Fxlist_atbonepos_fx_propertyContext {
		let _localctx: Fxlist_atbonepos_fx_propertyContext = new Fxlist_atbonepos_fx_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, MapIniParser.RULE_fxlist_atbonepos_fx_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1562;
			this.match(MapIniParser.T__297);
			this.state = 1563;
			this.match(MapIniParser.EQ);
			this.state = 1564;
			this.fxlist_value();
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
	public fxlist_atbonepos_bonename_property(): Fxlist_atbonepos_bonename_propertyContext {
		let _localctx: Fxlist_atbonepos_bonename_propertyContext = new Fxlist_atbonepos_bonename_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, MapIniParser.RULE_fxlist_atbonepos_bonename_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1566;
			this.match(MapIniParser.T__288);
			this.state = 1567;
			this.match(MapIniParser.EQ);
			this.state = 1568;
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
	public fxlist_atbonepos_orienttoobject_property(): Fxlist_atbonepos_orienttoobject_propertyContext {
		let _localctx: Fxlist_atbonepos_orienttoobject_propertyContext = new Fxlist_atbonepos_orienttoobject_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, MapIniParser.RULE_fxlist_atbonepos_orienttoobject_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1570;
			this.match(MapIniParser.T__298);
			this.state = 1571;
			this.match(MapIniParser.EQ);
			this.state = 1572;
			this.match(MapIniParser.BOOLEAN);
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
	public fxlist_name_object_propety(): Fxlist_name_object_propetyContext {
		let _localctx: Fxlist_name_object_propetyContext = new Fxlist_name_object_propetyContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, MapIniParser.RULE_fxlist_name_object_propety);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1574;
			this.match(MapIniParser.T__271);
			this.state = 1575;
			this.match(MapIniParser.EQ);
			this.state = 1576;
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
	public igui_properties(): Igui_propertiesContext {
		let _localctx: Igui_propertiesContext = new Igui_propertiesContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, MapIniParser.RULE_igui_properties);
		let _la: number;
		try {
			this.state = 1737;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapIniParser.T__299:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1578;
				this.match(MapIniParser.T__299);
				this.state = 1579;
				this.match(MapIniParser.EQ);
				this.state = 1580;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__300:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1581;
				this.match(MapIniParser.T__300);
				this.state = 1582;
				this.match(MapIniParser.EQ);
				this.state = 1583;
				this.match(MapIniParser.R);
				this.state = 1584;
				this.match(MapIniParser.G);
				this.state = 1585;
				this.match(MapIniParser.B);
				}
				break;
			case MapIniParser.T__301:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1586;
				this.match(MapIniParser.T__301);
				this.state = 1587;
				this.match(MapIniParser.EQ);
				this.state = 1588;
				this.match(MapIniParser.R);
				this.state = 1589;
				this.match(MapIniParser.G);
				this.state = 1590;
				this.match(MapIniParser.B);
				}
				break;
			case MapIniParser.T__302:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1591;
				this.match(MapIniParser.T__302);
				this.state = 1592;
				this.match(MapIniParser.EQ);
				this.state = 1593;
				this.match(MapIniParser.XCOORD);
				this.state = 1594;
				this.match(MapIniParser.YCOORD);
				}
				break;
			case MapIniParser.T__303:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1595;
				this.match(MapIniParser.T__303);
				this.state = 1596;
				this.match(MapIniParser.EQ);
				this.state = 1597;
				this.match(MapIniParser.ID);
				}
				break;
			case MapIniParser.T__304:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1598;
				this.match(MapIniParser.T__304);
				this.state = 1599;
				this.match(MapIniParser.EQ);
				this.state = 1600;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__305:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1601;
				this.match(MapIniParser.T__305);
				this.state = 1602;
				this.match(MapIniParser.EQ);
				this.state = 1603;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__306:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1604;
				this.match(MapIniParser.T__306);
				this.state = 1605;
				this.match(MapIniParser.EQ);
				this.state = 1606;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__307:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1607;
				this.match(MapIniParser.T__307);
				this.state = 1608;
				this.match(MapIniParser.EQ);
				this.state = 1609;
				this.match(MapIniParser.R);
				this.state = 1610;
				this.match(MapIniParser.G);
				this.state = 1611;
				this.match(MapIniParser.B);
				this.state = 1612;
				this.match(MapIniParser.A);
				}
				break;
			case MapIniParser.T__308:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1613;
				this.match(MapIniParser.T__308);
				this.state = 1614;
				this.match(MapIniParser.EQ);
				this.state = 1615;
				this.match(MapIniParser.XCOORD);
				this.state = 1616;
				this.match(MapIniParser.YCOORD);
				}
				break;
			case MapIniParser.T__309:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1617;
				this.match(MapIniParser.T__309);
				this.state = 1618;
				this.match(MapIniParser.EQ);
				this.state = 1620;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1619;
					this.match(MapIniParser.ID);
					}
					}
					this.state = 1622;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === MapIniParser.ID);
				}
				break;
			case MapIniParser.T__310:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1624;
				this.match(MapIniParser.T__310);
				this.state = 1625;
				this.match(MapIniParser.EQ);
				this.state = 1626;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__311:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1627;
				this.match(MapIniParser.T__311);
				this.state = 1628;
				this.match(MapIniParser.EQ);
				this.state = 1629;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__312:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1630;
				this.match(MapIniParser.T__312);
				this.state = 1631;
				this.match(MapIniParser.EQ);
				this.state = 1633;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1632;
					this.match(MapIniParser.ID);
					}
					}
					this.state = 1635;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === MapIniParser.ID);
				}
				break;
			case MapIniParser.T__313:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1637;
				this.match(MapIniParser.T__313);
				this.state = 1638;
				this.match(MapIniParser.EQ);
				this.state = 1639;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__314:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1640;
				this.match(MapIniParser.T__314);
				this.state = 1641;
				this.match(MapIniParser.EQ);
				this.state = 1642;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__315:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1643;
				this.match(MapIniParser.T__315);
				this.state = 1644;
				this.match(MapIniParser.EQ);
				this.state = 1645;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__316:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 1646;
				this.match(MapIniParser.T__316);
				this.state = 1647;
				this.match(MapIniParser.EQ);
				this.state = 1648;
				this.match(MapIniParser.XCOORD);
				this.state = 1649;
				this.match(MapIniParser.YCOORD);
				}
				break;
			case MapIniParser.T__317:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 1650;
				this.match(MapIniParser.T__317);
				this.state = 1651;
				this.match(MapIniParser.EQ);
				this.state = 1652;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__318:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 1653;
				this.match(MapIniParser.T__318);
				this.state = 1654;
				this.match(MapIniParser.EQ);
				this.state = 1655;
				this.match(MapIniParser.R);
				this.state = 1656;
				this.match(MapIniParser.G);
				this.state = 1657;
				this.match(MapIniParser.B);
				}
				break;
			case MapIniParser.T__319:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 1658;
				this.match(MapIniParser.T__319);
				this.state = 1659;
				this.match(MapIniParser.EQ);
				this.state = 1660;
				this.match(MapIniParser.ID);
				}
				break;
			case MapIniParser.T__320:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 1661;
				this.match(MapIniParser.T__320);
				this.state = 1662;
				this.match(MapIniParser.EQ);
				this.state = 1663;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__321:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 1664;
				this.match(MapIniParser.T__321);
				this.state = 1665;
				this.match(MapIniParser.EQ);
				this.state = 1666;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__322:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 1667;
				this.match(MapIniParser.T__322);
				this.state = 1668;
				this.match(MapIniParser.EQ);
				this.state = 1669;
				this.match(MapIniParser.ID);
				}
				break;
			case MapIniParser.T__323:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 1670;
				this.match(MapIniParser.T__323);
				this.state = 1671;
				this.match(MapIniParser.EQ);
				this.state = 1672;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__324:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 1673;
				this.match(MapIniParser.T__324);
				this.state = 1674;
				this.match(MapIniParser.EQ);
				this.state = 1675;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__325:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 1676;
				this.match(MapIniParser.T__325);
				this.state = 1677;
				this.match(MapIniParser.EQ);
				this.state = 1678;
				this.match(MapIniParser.XCOORD);
				this.state = 1679;
				this.match(MapIniParser.YCOORD);
				}
				break;
			case MapIniParser.T__326:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 1680;
				this.match(MapIniParser.T__326);
				this.state = 1681;
				this.match(MapIniParser.EQ);
				this.state = 1682;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__327:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 1683;
				this.match(MapIniParser.T__327);
				this.state = 1684;
				this.match(MapIniParser.EQ);
				this.state = 1685;
				this.match(MapIniParser.R);
				this.state = 1686;
				this.match(MapIniParser.G);
				this.state = 1687;
				this.match(MapIniParser.B);
				}
				break;
			case MapIniParser.T__328:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 1688;
				this.match(MapIniParser.T__328);
				this.state = 1689;
				this.match(MapIniParser.EQ);
				this.state = 1690;
				this.match(MapIniParser.ID);
				}
				break;
			case MapIniParser.T__329:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 1691;
				this.match(MapIniParser.T__329);
				this.state = 1692;
				this.match(MapIniParser.EQ);
				this.state = 1693;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__330:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 1694;
				this.match(MapIniParser.T__330);
				this.state = 1695;
				this.match(MapIniParser.EQ);
				this.state = 1696;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__331:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 1697;
				this.match(MapIniParser.T__331);
				this.state = 1698;
				this.match(MapIniParser.EQ);
				this.state = 1699;
				this.match(MapIniParser.R);
				this.state = 1700;
				this.match(MapIniParser.G);
				this.state = 1701;
				this.match(MapIniParser.B);
				}
				break;
			case MapIniParser.T__332:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 1702;
				this.match(MapIniParser.T__332);
				this.state = 1703;
				this.match(MapIniParser.EQ);
				this.state = 1704;
				this.match(MapIniParser.ID);
				}
				break;
			case MapIniParser.T__333:
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 1705;
				this.match(MapIniParser.T__333);
				this.state = 1706;
				this.match(MapIniParser.EQ);
				this.state = 1707;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__334:
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 1708;
				this.match(MapIniParser.T__334);
				this.state = 1709;
				this.match(MapIniParser.EQ);
				this.state = 1710;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__335:
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 1711;
				this.match(MapIniParser.T__335);
				this.state = 1712;
				this.match(MapIniParser.EQ);
				this.state = 1713;
				this.match(MapIniParser.R);
				this.state = 1714;
				this.match(MapIniParser.G);
				this.state = 1715;
				this.match(MapIniParser.B);
				}
				break;
			case MapIniParser.T__336:
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 1716;
				this.match(MapIniParser.T__336);
				this.state = 1717;
				this.match(MapIniParser.EQ);
				this.state = 1718;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__337:
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 1719;
				this.match(MapIniParser.T__337);
				this.state = 1720;
				this.match(MapIniParser.EQ);
				this.state = 1721;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__338:
				this.enterOuterAlt(_localctx, 40);
				{
				this.state = 1722;
				this.match(MapIniParser.T__338);
				this.state = 1723;
				this.match(MapIniParser.EQ);
				this.state = 1724;
				this.match(MapIniParser.INT);
				}
				break;
			case MapIniParser.T__339:
				this.enterOuterAlt(_localctx, 41);
				{
				this.state = 1725;
				this.match(MapIniParser.T__339);
				this.state = 1726;
				this.match(MapIniParser.EQ);
				this.state = 1727;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__340:
				this.enterOuterAlt(_localctx, 42);
				{
				this.state = 1728;
				this.match(MapIniParser.T__340);
				this.state = 1729;
				this.match(MapIniParser.EQ);
				this.state = 1730;
				this.match(MapIniParser.BOOLEAN);
				}
				break;
			case MapIniParser.T__341:
				this.enterOuterAlt(_localctx, 43);
				{
				this.state = 1731;
				this.match(MapIniParser.T__341);
				this.state = 1732;
				this.match(MapIniParser.EQ);
				this.state = 1733;
				this.match(MapIniParser.R);
				this.state = 1734;
				this.match(MapIniParser.G);
				this.state = 1735;
				this.match(MapIniParser.B);
				this.state = 1736;
				this.match(MapIniParser.A);
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
	public faction_value(): Faction_valueContext {
		let _localctx: Faction_valueContext = new Faction_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, MapIniParser.RULE_faction_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1739;
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
	public commandbutton_value(): Commandbutton_valueContext {
		let _localctx: Commandbutton_valueContext = new Commandbutton_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, MapIniParser.RULE_commandbutton_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1741;
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
	public cursorname_value(): Cursorname_valueContext {
		let _localctx: Cursorname_valueContext = new Cursorname_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, MapIniParser.RULE_cursorname_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1743;
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
	public radius_cursorname_value(): Radius_cursorname_valueContext {
		let _localctx: Radius_cursorname_valueContext = new Radius_cursorname_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, MapIniParser.RULE_radius_cursorname_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1745;
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
		this.enterRule(_localctx, 272, MapIniParser.RULE_invalid_cursorname_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1747;
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
	public mappedimage_value(): Mappedimage_valueContext {
		let _localctx: Mappedimage_valueContext = new Mappedimage_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, MapIniParser.RULE_mappedimage_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1749;
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
	public particlesystem_value(): Particlesystem_valueContext {
		let _localctx: Particlesystem_valueContext = new Particlesystem_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, MapIniParser.RULE_particlesystem_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1751;
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
	public fxlist_value(): Fxlist_valueContext {
		let _localctx: Fxlist_valueContext = new Fxlist_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, MapIniParser.RULE_fxlist_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1753;
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
	public object_property(): Object_propertyContext {
		let _localctx: Object_propertyContext = new Object_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, MapIniParser.RULE_object_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1755;
			this.match(MapIniParser.T__342);
			this.state = 1756;
			this.match(MapIniParser.EQ);
			this.state = 1757;
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
		this.enterRule(_localctx, 282, MapIniParser.RULE_object_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1759;
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
	public science_property(): Science_propertyContext {
		let _localctx: Science_propertyContext = new Science_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 284, MapIniParser.RULE_science_property);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1761;
			this.match(MapIniParser.T__343);
			this.state = 1762;
			this.match(MapIniParser.EQ);
			this.state = 1764;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1763;
				this.science_value();
				}
				}
				this.state = 1766;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === MapIniParser.ID);
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
		this.enterRule(_localctx, 286, MapIniParser.RULE_science_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1768;
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
	public specialpower_property(): Specialpower_propertyContext {
		let _localctx: Specialpower_propertyContext = new Specialpower_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, MapIniParser.RULE_specialpower_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1770;
			this.match(MapIniParser.T__344);
			this.state = 1771;
			this.match(MapIniParser.EQ);
			this.state = 1772;
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
		this.enterRule(_localctx, 290, MapIniParser.RULE_specialpower_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1774;
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
	public audioevent_value(): Audioevent_valueContext {
		let _localctx: Audioevent_valueContext = new Audioevent_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 292, MapIniParser.RULE_audioevent_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1776;
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
	public upgrade_property(): Upgrade_propertyContext {
		let _localctx: Upgrade_propertyContext = new Upgrade_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 294, MapIniParser.RULE_upgrade_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1778;
			this.match(MapIniParser.T__345);
			this.state = 1779;
			this.match(MapIniParser.EQ);
			this.state = 1780;
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
		this.enterRule(_localctx, 296, MapIniParser.RULE_upgrade_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1782;
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
	public weaponslot_property(): Weaponslot_propertyContext {
		let _localctx: Weaponslot_propertyContext = new Weaponslot_propertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 298, MapIniParser.RULE_weaponslot_property);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1784;
			this.match(MapIniParser.T__346);
			this.state = 1785;
			this.match(MapIniParser.EQ);
			this.state = 1787;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1786;
				this.match(MapIniParser.WEAPONSLOT);
				}
				}
				this.state = 1789;
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
	public rand_value(): Rand_valueContext {
		let _localctx: Rand_valueContext = new Rand_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 300, MapIniParser.RULE_rand_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1791;
			this.match(MapIniParser.INT);
			this.state = 1792;
			this.match(MapIniParser.INT);
			this.state = 1793;
			this.match(MapIniParser.DISTRIBUTION_FORM);
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
	public coord3D(): Coord3DContext {
		let _localctx: Coord3DContext = new Coord3DContext(this._ctx, this.state);
		this.enterRule(_localctx, 302, MapIniParser.RULE_coord3D);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1795;
			this.match(MapIniParser.XCOORD);
			this.state = 1796;
			this.match(MapIniParser.YCOORD);
			this.state = 1797;
			this.match(MapIniParser.ZCOORD);
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

	private static readonly _serializedATNSegments: number = 4;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\u0176\u070A\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
		"\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B" +
		"\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90" +
		"\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95" +
		"\x04\x96\t\x96\x04\x97\t\x97\x04\x98\t\x98\x04\x99\t\x99\x03\x02\x07\x02" +
		"\u0134\n\x02\f\x02\x0E\x02\u0137\v\x02\x03\x02\x03\x02\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x05\x03\u0148\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x07" +
		"\x04\u014E\n\x04\f\x04\x0E\x04\u0151\v\x04\x03\x04\x03\x04\x03\x05\x03" +
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
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u01D3" +
		"\n\x05\x03\x06\x03\x06\x03\x06\x07\x06\u01D8\n\x06\f\x06\x0E\x06\u01DB" +
		"\v\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x07\x07\u01E2\n\x07\f\x07" +
		"\x0E\x07\u01E5\v\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\u01F9" +
		"\n\b\x03\t\x03\t\x03\t\x07\t\u01FE\n\t\f\t\x0E\t\u0201\v\t\x03\t\x03\t" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x05\n\u0212\n\n\x03\v\x03\v\x07\v\u0216\n\v\f\v\x0E\v\u0219\v" +
		"\v\x03\v\x03\v\x03\f\x03\f\x03\f\x07\f\u0220\n\f\f\f\x0E\f\u0223\v\f\x03" +
		"\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u0239\n\r\x03\x0E\x03" +
		"\x0E\x03\x0E\x07\x0E\u023E\n\x0E\f\x0E\x0E\x0E\u0241\v\x0E\x03\x0E\x03" +
		"\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0254\n\x0F" +
		"\x03\x10\x03\x10\x03\x10\x07\x10\u0259\n\x10\f\x10\x0E\x10\u025C\v\x10" +
		"\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12" +
		"\x03\x12\x07\x12\u0268\n\x12\f\x12\x0E\x12\u026B\v\x12\x03\x12\x03\x12" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13" +
		"\u0280\n\x13\x03\x14\x03\x14\x03\x14\x07\x14\u0285\n\x14\f\x14\x0E\x14" +
		"\u0288\v\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03" +
		"\x16\x03\x16\x07\x16\u0293\n\x16\f\x16\x0E\x16\u0296\v\x16\x03\x16\x03" +
		"\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u02A0\n\x17" +
		"\x03\x18\x03\x18\x07\x18\u02A4\n\x18\f\x18\x0E\x18\u02A7\v\x18\x03\x18" +
		"\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x05\x19\u02B5\n\x19\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u02BA" +
		"\n\x1A\f\x1A\x0E\x1A\u02BD\v\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u02C9\n\x1B\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u02DA\n\x1C\f\x1C\x0E\x1C" +
		"\u02DD\v\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x07\x1D\u02E3\n\x1D\f\x1D" +
		"\x0E\x1D\u02E6\v\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07" +
		"\x1E\u02EE\n\x1E\f\x1E\x0E\x1E\u02F1\v\x1E\x03\x1E\x03\x1E\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u02FE" +
		"\n\x1F\f\x1F\x0E\x1F\u0301\v\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03" +
		" \x03 \x07 \u030B\n \f \x0E \u030E\v \x03 \x03 \x03!\x03!\x07!\u0314\n" +
		"!\f!\x0E!\u0317\v!\x03!\x03!\x03\"\x03\"\x03\"\x07\"\u031E\n\"\f\"\x0E" +
		"\"\u0321\v\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x07#\u0329\n#\f#\x0E#\u032C" +
		"\v#\x03#\x03#\x03$\x03$\x03$\x07$\u0333\n$\f$\x0E$\u0336\v$\x03$\x03$" +
		"\x03%\x03%\x07%\u033C\n%\f%\x0E%\u033F\v%\x03%\x03%\x03&\x03&\x03&\x03" +
		"&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03" +
		"&\x03&\x03&\x03&\x03&\x03&\x03&\x05&\u035B\n&\x03\'\x03\'\x03\'\x07\'" +
		"\u0360\n\'\f\'\x0E\'\u0363\v\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03" +
		"(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03" +
		"(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03" +
		"(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03" +
		"(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03" +
		"(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03" +
		"(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03" +
		"(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03" +
		"(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03" +
		"(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03" +
		"(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03" +
		"(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03" +
		"(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x05(\u0413" +
		"\n(\x03)\x03)\x03)\x06)\u0418\n)\r)\x0E)\u0419\x03*\x03*\x03*\x03*\x03" +
		"+\x03+\x03+\x03+\x03,\x03,\x03,\x03,\x03-\x03-\x03.\x03.\x03/\x03/\x03" +
		"0\x030\x031\x031\x031\x071\u0433\n1\f1\x0E1\u0436\v1\x031\x031\x032\x03" +
		"2\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x03" +
		"2\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x03" +
		"2\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x03" +
		"2\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x03" +
		"2\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x03" +
		"2\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x03" +
		"2\x032\x032\x032\x032\x032\x062\u0495\n2\r2\x0E2\u0496\x032\x032\x032" +
		"\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x052\u04A8" +
		"\n2\x033\x033\x033\x033\x034\x034\x034\x034\x035\x035\x035\x065\u04B5" +
		"\n5\r5\x0E5\u04B6\x036\x036\x036\x036\x036\x036\x037\x037\x037\x037\x03" +
		"8\x038\x039\x039\x03:\x03:\x03;\x03;\x03<\x03<\x03=\x03=\x07=\u04CF\n" +
		"=\f=\x0E=\u04D2\v=\x03=\x03=\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03" +
		">\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03" +
		">\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03" +
		">\x03>\x03>\x05>\u04FD\n>\x03?\x03?\x03@\x03@\x03@\x03@\x03A\x03A\x03" +
		"A\x03A\x03B\x03B\x03C\x03C\x03C\x06C\u050E\nC\rC\x0EC\u050F\x03D\x03D" +
		"\x03E\x03E\x03E\x03E\x03F\x03F\x03F\x03F\x03G\x03G\x03H\x03H\x03H\x03" +
		"H\x03I\x03I\x03I\x03I\x03J\x03J\x03J\x03J\x03K\x03K\x03K\x03K\x03L\x03" +
		"L\x03L\x03L\x03M\x03M\x03M\x03M\x03N\x03N\x03N\x03N\x03O\x03O\x03O\x03" +
		"O\x03P\x03P\x03P\x03P\x03P\x03Q\x03Q\x03Q\x03Q\x03Q\x03R\x03R\x03R\x03" +
		"R\x03R\x03S\x03S\x03S\x03S\x03S\x03T\x03T\x03T\x03T\x03T\x03T\x03U\x03" +
		"U\x03U\x03U\x03U\x03U\x03V\x03V\x03V\x03V\x03W\x03W\x03W\x03W\x03W\x03" +
		"W\x03W\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03Y\x03Y\x03Y\x03Y\x03Z\x03" +
		"Z\x03Z\x03Z\x03[\x03[\x03[\x06[\u057B\n[\r[\x0E[\u057C\x03\\\x03\\\x03" +
		"\\\x03\\\x03]\x03]\x03]\x03]\x03^\x03^\x03^\x03^\x03_\x03_\x03_\x03_\x03" +
		"`\x03`\x03`\x03`\x03a\x03a\x03a\x03a\x05a\u0597\na\x03b\x03b\x03b\x03" +
		"b\x03c\x03c\x03c\x03c\x05c\u05A1\nc\x03d\x03d\x03d\x03d\x05d\u05A7\nd" +
		"\x03e\x03e\x03e\x03e\x03f\x03f\x03f\x03f\x03g\x03g\x03g\x03g\x03h\x03" +
		"h\x03h\x03h\x03i\x03i\x03i\x03i\x03j\x03j\x03j\x03j\x03k\x03k\x03k\x03" +
		"k\x03l\x03l\x03l\x03l\x03m\x03m\x03m\x03m\x03n\x03n\x03n\x03n\x03o\x03" +
		"o\x03o\x03o\x03p\x03p\x03p\x03p\x03q\x03q\x03q\x03q\x03r\x03r\x03r\x03" +
		"r\x03s\x03s\x03s\x03s\x03t\x03t\x03t\x03t\x03u\x03u\x03u\x03u\x03v\x03" +
		"v\x03v\x03v\x03w\x03w\x03w\x03w\x03w\x03w\x03x\x03x\x03x\x03x\x03y\x03" +
		"y\x03y\x03y\x03y\x03y\x03z\x03z\x03z\x03z\x03{\x03{\x03{\x03{\x03|\x03" +
		"|\x03|\x03|\x03}\x03}\x03}\x03}\x03~\x03~\x03~\x03~\x03\x7F\x03\x7F\x03" +
		"\x7F\x03\x7F\x03\x80\x03\x80\x03\x80\x03\x80\x03\x81\x03\x81\x03\x81\x03" +
		"\x81\x03\x82\x03\x82\x03\x82\x03\x82\x03\x83\x03\x83\x03\x83\x03\x83\x03" +
		"\x84\x03\x84\x03\x84\x03\x84\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03" +
		"\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03" +
		"\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03" +
		"\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03" +
		"\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03" +
		"\x85\x06\x85\u0657\n\x85\r\x85\x0E\x85\u0658\x03\x85\x03\x85\x03\x85\x03" +
		"\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x06\x85\u0664\n\x85\r\x85" +
		"\x0E\x85\u0665\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85" +
		"\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85" +
		"\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85" +
		"\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85" +
		"\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85" +
		"\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85" +
		"\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85" +
		"\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85" +
		"\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85" +
		"\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85" +
		"\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85" +
		"\x03\x85\x03\x85\x03\x85\x05\x85\u06CC\n\x85\x03\x86\x03\x86\x03\x87\x03" +
		"\x87\x03\x88\x03\x88\x03\x89\x03\x89\x03\x8A\x03\x8A\x03\x8B\x03\x8B\x03" +
		"\x8C\x03\x8C\x03\x8D\x03\x8D\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8F\x03" +
		"\x8F\x03\x90\x03\x90\x03\x90\x06\x90\u06E7\n\x90\r\x90\x0E\x90\u06E8\x03" +
		"\x91\x03\x91\x03\x92\x03\x92\x03\x92\x03\x92\x03\x93\x03\x93\x03\x94\x03" +
		"\x94\x03\x95\x03\x95\x03\x95\x03\x95\x03\x96\x03\x96\x03\x97\x03\x97\x03" +
		"\x97\x06\x97\u06FE\n\x97\r\x97\x0E\x97\u06FF\x03\x98\x03\x98\x03\x98\x03" +
		"\x98\x03\x99\x03\x99\x03\x99\x03\x99\x03\x99\x02\x02\x02\x9A\x02\x02\x04" +
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
		"\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02." +
		"\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02" +
		"J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02" +
		"f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80" +
		"\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92" +
		"\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4" +
		"\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6" +
		"\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8" +
		"\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA" +
		"\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC" +
		"\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE" +
		"\x02\u0100\x02\u0102\x02\u0104\x02\u0106\x02\u0108\x02\u010A\x02\u010C" +
		"\x02\u010E\x02\u0110\x02\u0112\x02\u0114\x02\u0116\x02\u0118\x02\u011A" +
		"\x02\u011C\x02\u011E\x02\u0120\x02\u0122\x02\u0124\x02\u0126\x02\u0128" +
		"\x02\u012A\x02\u012C\x02\u012E\x02\u0130\x02\x02\b\x03\x02:>\x04\x02E" +
		"E\u0173\u0173\x03\x02[w\x03\x02\u015E\u015F\x03\x02\xF0\xF2\x03\x02\xF4" +
		"\xF5\x02\u07BE\x02\u0135\x03\x02\x02\x02\x04\u0147\x03\x02\x02\x02\x06" +
		"\u0149\x03\x02\x02\x02\b\u01D2\x03\x02\x02\x02\n\u01D4\x03\x02\x02\x02" +
		"\f\u01DE\x03\x02\x02\x02\x0E\u01F8\x03\x02\x02\x02\x10\u01FA\x03\x02\x02" +
		"\x02\x12\u0211\x03\x02\x02\x02\x14\u0213\x03\x02\x02\x02\x16\u021C\x03" +
		"\x02\x02\x02\x18\u0238\x03\x02\x02\x02\x1A\u023A\x03\x02\x02\x02\x1C\u0253" +
		"\x03\x02\x02\x02\x1E\u0255\x03\x02\x02\x02 \u025F\x03\x02\x02\x02\"\u0264" +
		"\x03\x02\x02\x02$\u027F\x03\x02\x02\x02&\u0281\x03\x02\x02\x02(\u028B" +
		"\x03\x02\x02\x02*\u028F\x03\x02\x02\x02,\u029F\x03\x02\x02\x02.\u02A1" +
		"\x03\x02\x02\x020\u02B4\x03\x02\x02\x022\u02B6\x03\x02\x02\x024\u02C8" +
		"\x03\x02\x02\x026\u02CA\x03\x02\x02\x028\u02E0\x03\x02\x02\x02:\u02E9" +
		"\x03\x02\x02\x02<\u02F4\x03\x02\x02\x02>\u0304\x03\x02\x02\x02@\u0311" +
		"\x03\x02\x02\x02B\u031A\x03\x02\x02\x02D\u0324\x03\x02\x02\x02F\u032F" +
		"\x03\x02\x02\x02H\u0339\x03\x02\x02\x02J\u035A\x03\x02\x02\x02L\u035C" +
		"\x03\x02\x02\x02N\u0412\x03\x02\x02\x02P\u0414\x03\x02\x02\x02R\u041B" +
		"\x03\x02\x02\x02T\u041F\x03\x02\x02\x02V\u0423\x03\x02\x02\x02X\u0427" +
		"\x03\x02\x02\x02Z\u0429\x03\x02\x02\x02\\\u042B\x03\x02\x02\x02^\u042D" +
		"\x03\x02\x02\x02`\u042F\x03\x02\x02\x02b\u04A7\x03\x02\x02\x02d\u04A9" +
		"\x03\x02\x02\x02f\u04AD\x03\x02\x02\x02h\u04B1\x03\x02\x02\x02j\u04B8" +
		"\x03\x02\x02\x02l\u04BE\x03\x02\x02\x02n\u04C2\x03\x02\x02\x02p\u04C4" +
		"\x03\x02\x02\x02r\u04C6\x03\x02\x02\x02t\u04C8\x03\x02\x02\x02v\u04CA" +
		"\x03\x02\x02\x02x\u04CC\x03\x02\x02\x02z\u04FC\x03\x02\x02\x02|\u04FE" +
		"\x03\x02\x02\x02~\u0500\x03\x02\x02\x02\x80\u0504\x03\x02\x02\x02\x82" +
		"\u0508\x03\x02\x02\x02\x84\u050A\x03\x02\x02\x02\x86\u0511\x03\x02\x02" +
		"\x02\x88\u0513\x03\x02\x02\x02\x8A\u0517\x03\x02\x02\x02\x8C\u051B\x03" +
		"\x02\x02\x02\x8E\u051D\x03\x02\x02\x02\x90\u0521\x03\x02\x02\x02\x92\u0525" +
		"\x03\x02\x02\x02\x94\u0529\x03\x02\x02\x02\x96\u052D\x03\x02\x02\x02\x98" +
		"\u0531\x03\x02\x02\x02\x9A\u0535\x03\x02\x02\x02\x9C\u0539\x03\x02\x02" +
		"\x02\x9E\u053D\x03\x02\x02\x02\xA0\u0542\x03\x02\x02\x02\xA2\u0547\x03" +
		"\x02\x02\x02\xA4\u054C\x03\x02\x02\x02\xA6\u0551\x03\x02\x02\x02\xA8\u0557" +
		"\x03\x02\x02\x02\xAA\u055D\x03\x02\x02\x02\xAC\u0561\x03\x02\x02\x02\xAE" +
		"\u0568\x03\x02\x02\x02\xB0\u056F\x03\x02\x02\x02\xB2\u0573\x03\x02\x02" +
		"\x02\xB4\u0577\x03\x02\x02\x02\xB6\u057E\x03\x02\x02\x02\xB8\u0582\x03" +
		"\x02\x02\x02\xBA\u0586\x03\x02\x02\x02\xBC\u058A\x03\x02\x02\x02\xBE\u058E" +
		"\x03\x02\x02\x02\xC0\u0592\x03\x02\x02\x02\xC2\u0598\x03\x02\x02\x02\xC4" +
		"\u059C\x03\x02\x02\x02\xC6\u05A2\x03\x02\x02\x02\xC8\u05A8\x03\x02\x02" +
		"\x02\xCA\u05AC\x03\x02\x02\x02\xCC\u05B0\x03\x02\x02\x02\xCE\u05B4\x03" +
		"\x02\x02\x02\xD0\u05B8\x03\x02\x02\x02\xD2\u05BC\x03\x02\x02\x02\xD4\u05C0" +
		"\x03\x02\x02\x02\xD6\u05C4\x03\x02\x02\x02\xD8\u05C8\x03\x02\x02\x02\xDA" +
		"\u05CC\x03\x02\x02\x02\xDC\u05D0\x03\x02\x02\x02\xDE\u05D4\x03\x02\x02" +
		"\x02\xE0\u05D8\x03\x02\x02\x02\xE2\u05DC\x03\x02\x02\x02\xE4\u05E0\x03" +
		"\x02\x02\x02\xE6\u05E4\x03\x02\x02\x02\xE8\u05E8\x03\x02\x02\x02\xEA\u05EC" +
		"\x03\x02\x02\x02\xEC\u05F0\x03\x02\x02\x02\xEE\u05F6\x03\x02\x02\x02\xF0" +
		"\u05FA\x03\x02\x02\x02\xF2\u0600\x03\x02\x02\x02\xF4\u0604\x03\x02\x02" +
		"\x02\xF6\u0608\x03\x02\x02\x02\xF8\u060C\x03\x02\x02\x02\xFA\u0610\x03" +
		"\x02\x02\x02\xFC\u0614\x03\x02\x02\x02\xFE\u0618\x03\x02\x02\x02\u0100" +
		"\u061C\x03\x02\x02\x02\u0102\u0620\x03\x02\x02\x02\u0104\u0624\x03\x02" +
		"\x02\x02\u0106\u0628\x03\x02\x02\x02\u0108\u06CB\x03\x02\x02\x02\u010A" +
		"\u06CD\x03\x02\x02\x02\u010C\u06CF\x03\x02\x02\x02\u010E\u06D1\x03\x02" +
		"\x02\x02\u0110\u06D3\x03\x02\x02\x02\u0112\u06D5\x03\x02\x02\x02\u0114" +
		"\u06D7\x03\x02\x02\x02\u0116\u06D9\x03\x02\x02\x02\u0118\u06DB\x03\x02" +
		"\x02\x02\u011A\u06DD\x03\x02\x02\x02\u011C\u06E1\x03\x02\x02\x02\u011E" +
		"\u06E3\x03\x02\x02\x02\u0120\u06EA\x03\x02\x02\x02\u0122\u06EC\x03\x02" +
		"\x02\x02\u0124\u06F0\x03\x02\x02\x02\u0126\u06F2\x03\x02\x02\x02\u0128" +
		"\u06F4\x03\x02\x02\x02\u012A\u06F8\x03\x02\x02\x02\u012C\u06FA\x03\x02" +
		"\x02\x02\u012E\u0701\x03\x02\x02\x02\u0130\u0705\x03\x02\x02\x02\u0132" +
		"\u0134\x05\x04\x03\x02\u0133\u0132\x03\x02\x02\x02\u0134\u0137\x03\x02" +
		"\x02\x02\u0135\u0133\x03\x02\x02\x02\u0135\u0136\x03\x02\x02\x02\u0136" +
		"\u0138\x03\x02\x02\x02\u0137\u0135\x03\x02\x02\x02\u0138\u0139\x07\x02" +
		"\x02\x03";
	private static readonly _serializedATNSegment1: string =
		"\u0139\x03\x03\x02\x02\x02\u013A\u0148\x05\x16\f\x02\u013B\u0148\x05\x06" +
		"\x04\x02\u013C\u0148\x05\x1A\x0E\x02\u013D\u0148\x05\x1E\x10\x02\u013E" +
		"\u0148\x05\"\x12\x02\u013F\u0148\x05&\x14\x02\u0140\u0148\x05*\x16\x02" +
		"\u0141\u0148\x05.\x18\x02\u0142\u0148\x052\x1A\x02\u0143\u0148\x05F$\x02" +
		"\u0144\u0148\x05L\'\x02\u0145\u0148\x05`1\x02\u0146\u0148\x05x=\x02\u0147" +
		"\u013A\x03\x02\x02\x02\u0147\u013B\x03\x02\x02\x02\u0147\u013C\x03\x02" +
		"\x02\x02\u0147\u013D\x03\x02\x02\x02\u0147\u013E\x03\x02\x02\x02\u0147" +
		"\u013F\x03\x02\x02\x02\u0147\u0140\x03\x02\x02\x02\u0147\u0141\x03\x02" +
		"\x02\x02\u0147\u0142\x03\x02\x02\x02\u0147\u0143\x03\x02\x02\x02\u0147" +
		"\u0144\x03\x02\x02\x02\u0147\u0145\x03\x02\x02\x02\u0147\u0146\x03\x02" +
		"\x02\x02\u0148\x05\x03\x02\x02\x02\u0149\u014F\x07\x03\x02\x02\u014A\u014E" +
		"\x05\b\x05\x02\u014B\u014E\x05\x10\t\x02\u014C\u014E\x05\n\x06\x02\u014D" +
		"\u014A\x03\x02\x02\x02\u014D\u014B\x03\x02\x02\x02\u014D\u014C\x03\x02" +
		"\x02\x02\u014E\u0151\x03\x02\x02\x02\u014F\u014D\x03\x02\x02\x02\u014F" +
		"\u0150\x03\x02\x02\x02\u0150\u0152\x03\x02\x02\x02\u0151\u014F\x03\x02" +
		"\x02\x02\u0152\u0153\x05|?\x02\u0153\x07\x03\x02\x02\x02\u0154\u0155\x07" +
		"\x04\x02\x02\u0155\u0156\x07\u0161\x02\x02\u0156\u01D3\x07\u015F\x02\x02" +
		"\u0157\u0158\x07\x05\x02\x02\u0158\u0159\x07\u0161\x02\x02\u0159\u01D3" +
		"\x07\u015E\x02\x02\u015A\u015B\x07\x06\x02\x02\u015B\u015C\x07\u0161\x02" +
		"\x02\u015C\u01D3\x07\u015E\x02\x02\u015D\u015E\x07\x07\x02\x02\u015E\u015F" +
		"\x07\u0161\x02\x02\u015F\u01D3\x07\u015E\x02\x02\u0160\u0161\x07\b\x02" +
		"\x02\u0161\u0162\x07\u0161\x02\x02\u0162\u01D3\x07\u015F\x02\x02\u0163" +
		"\u0164\x07\t\x02\x02\u0164\u0165\x07\u0161\x02\x02\u0165\u01D3\x07\u015F" +
		"\x02\x02\u0166\u0167\x07\n\x02\x02\u0167\u0168\x07\u0161\x02\x02\u0168" +
		"\u01D3\x07\u015F\x02\x02\u0169\u016A\x07\v\x02\x02\u016A\u016B\x07\u0161" +
		"\x02\x02\u016B\u01D3\x07\u015F\x02\x02\u016C\u016D\x07\f\x02\x02\u016D" +
		"\u016E\x07\u0161\x02\x02\u016E\u01D3\x07\u015F\x02\x02\u016F\u0170\x07" +
		"\r\x02\x02\u0170\u0171\x07\u0161\x02\x02\u0171\u01D3\x07\u015F\x02\x02" +
		"\u0172\u0173\x07\x0E\x02\x02\u0173\u0174\x07\u0161\x02\x02\u0174\u01D3" +
		"\x07\u015F\x02\x02\u0175\u0176\x07\x0F\x02\x02\u0176\u0177\x07\u0161\x02" +
		"\x02\u0177\u01D3\x07\u015F\x02\x02\u0178\u0179\x07\x10\x02\x02\u0179\u017A" +
		"\x07\u0161\x02\x02\u017A\u01D3\x07\u015F\x02\x02\u017B\u017C\x07\x11\x02" +
		"\x02\u017C\u017D\x07\u0161\x02\x02\u017D\u01D3\x07\u015E\x02\x02\u017E" +
		"\u017F\x07\x12\x02\x02\u017F\u0180\x07\u0161\x02\x02\u0180\u01D3\x07\u015E" +
		"\x02\x02\u0181\u0182\x07\x13\x02\x02\u0182\u0183\x07\u0161\x02\x02\u0183" +
		"\u01D3\x07\u015E\x02\x02\u0184\u0185\x07\x14\x02\x02\u0185\u0186\x07\u0161" +
		"\x02\x02\u0186\u01D3\x07\u015F\x02\x02\u0187\u0188\x07\x15\x02\x02\u0188" +
		"\u0189\x07\u0161\x02\x02\u0189\u01D3\x07\u015F\x02\x02\u018A\u018B\x07" +
		"\x16\x02\x02\u018B\u018C\x07\u0161\x02\x02\u018C\u01D3\x07\u015F\x02\x02" +
		"\u018D\u018E\x07\x17\x02\x02\u018E\u018F\x07\u0161\x02\x02\u018F\u01D3" +
		"\x07\u015F\x02\x02\u0190\u0191\x07\x18\x02\x02\u0191\u0192\x07\u0161\x02" +
		"\x02\u0192\u01D3\x07\u015F\x02\x02\u0193\u0194\x07\x19\x02\x02\u0194\u0195" +
		"\x07\u0161\x02\x02\u0195\u01D3\x07\u015E\x02\x02\u0196\u0197\x07\x1A\x02" +
		"\x02\u0197\u0198\x07\u0161\x02\x02\u0198\u01D3\x07\u0171\x02\x02\u0199" +
		"\u019A\x07\x1B\x02\x02\u019A\u019B\x07\u0161\x02\x02\u019B\u01D3\x07\u0171" +
		"\x02\x02\u019C\u019D\x07\x1C\x02\x02\u019D\u019E\x07\u0161\x02\x02\u019E" +
		"\u01D3\x07\u0171\x02\x02\u019F\u01A0\x07\x1D\x02\x02\u01A0\u01A1\x07\u0161" +
		"\x02\x02\u01A1\u01D3\x07\u0171\x02\x02\u01A2\u01A3\x07\x1E\x02\x02\u01A3" +
		"\u01A4\x07\u0161\x02\x02\u01A4\u01D3\x07\u015F\x02\x02\u01A5\u01A6\x07" +
		"\x1F\x02\x02\u01A6\u01A7\x07\u0161\x02\x02\u01A7\u01D3\x07\u015E\x02\x02" +
		"\u01A8\u01A9\x07 \x02\x02\u01A9\u01AA\x07\u0161\x02\x02\u01AA\u01D3\x07" +
		"\u0171\x02\x02\u01AB\u01AC\x07!\x02\x02\u01AC\u01AD\x07\u0161\x02\x02" +
		"\u01AD\u01D3\x07\u015F\x02\x02\u01AE\u01AF\x07\"\x02\x02\u01AF\u01B0\x07" +
		"\u0161\x02\x02\u01B0\u01D3\x07\u015E\x02\x02\u01B1\u01B2\x07#\x02\x02" +
		"\u01B2\u01B3\x07\u0161\x02\x02\u01B3\u01D3\x07\u015E\x02\x02\u01B4\u01B5" +
		"\x07$\x02\x02\u01B5\u01B6\x07\u0161\x02\x02\u01B6\u01D3\x07\u015F\x02" +
		"\x02\u01B7\u01B8\x07%\x02\x02\u01B8\u01B9\x07\u0161\x02\x02\u01B9\u01D3" +
		"\x07\u015F\x02\x02\u01BA\u01BB\x07&\x02\x02\u01BB\u01BC\x07\u0161\x02" +
		"\x02\u01BC\u01D3\x07\u015E\x02\x02\u01BD\u01BE\x07\'\x02\x02\u01BE\u01BF" +
		"\x07\u0161\x02\x02\u01BF\u01D3\x07\u015E\x02\x02\u01C0\u01C1\x07(\x02" +
		"\x02\u01C1\u01C2\x07\u0161\x02\x02\u01C2\u01D3\x07\u015F\x02\x02\u01C3" +
		"\u01C4\x07)\x02\x02\u01C4\u01C5\x07\u0161\x02\x02\u01C5\u01D3\x07\u015E" +
		"\x02\x02\u01C6\u01C7\x07*\x02\x02\u01C7\u01C8\x07\u0161\x02\x02\u01C8" +
		"\u01D3\x07\u015F\x02\x02\u01C9\u01CA\x07+\x02\x02\u01CA\u01CB\x07\u0161" +
		"\x02\x02\u01CB\u01D3\x07\u0171\x02\x02\u01CC\u01CD\x07,\x02\x02\u01CD" +
		"\u01CE\x07\u0161\x02\x02\u01CE\u01D3\x07\u015F\x02\x02\u01CF\u01D0\x07" +
		"-\x02\x02\u01D0\u01D1\x07\u0161\x02\x02\u01D1\u01D3\x07\u015F\x02\x02" +
		"\u01D2\u0154\x03\x02\x02\x02\u01D2\u0157\x03\x02\x02\x02\u01D2\u015A\x03" +
		"\x02\x02\x02\u01D2\u015D\x03\x02\x02\x02\u01D2\u0160\x03\x02\x02\x02\u01D2" +
		"\u0163\x03\x02\x02\x02\u01D2\u0166\x03\x02\x02\x02\u01D2\u0169\x03\x02" +
		"\x02\x02\u01D2\u016C\x03\x02\x02\x02\u01D2\u016F\x03\x02\x02\x02\u01D2" +
		"\u0172\x03\x02\x02\x02\u01D2\u0175\x03\x02\x02\x02\u01D2\u0178\x03\x02" +
		"\x02\x02\u01D2\u017B\x03\x02\x02\x02\u01D2\u017E\x03\x02\x02\x02\u01D2" +
		"\u0181\x03\x02\x02\x02\u01D2\u0184\x03\x02\x02\x02\u01D2\u0187\x03\x02" +
		"\x02\x02\u01D2\u018A\x03\x02\x02\x02\u01D2\u018D\x03\x02\x02\x02\u01D2" +
		"\u0190\x03\x02\x02\x02\u01D2\u0193\x03\x02\x02\x02\u01D2\u0196\x03\x02" +
		"\x02\x02\u01D2\u0199\x03\x02\x02\x02\u01D2\u019C\x03\x02\x02\x02\u01D2" +
		"\u019F\x03\x02\x02\x02\u01D2\u01A2\x03\x02\x02\x02\u01D2\u01A5\x03\x02" +
		"\x02\x02\u01D2\u01A8\x03\x02\x02\x02\u01D2\u01AB\x03\x02\x02\x02\u01D2" +
		"\u01AE\x03\x02\x02\x02\u01D2\u01B1\x03\x02\x02\x02\u01D2\u01B4\x03\x02" +
		"\x02\x02\u01D2\u01B7\x03\x02\x02\x02\u01D2\u01BA\x03\x02\x02\x02\u01D2" +
		"\u01BD\x03\x02\x02\x02\u01D2\u01C0\x03\x02\x02\x02\u01D2\u01C3\x03\x02" +
		"\x02\x02\u01D2\u01C6\x03\x02\x02\x02\u01D2\u01C9\x03\x02\x02\x02\u01D2" +
		"\u01CC\x03\x02\x02\x02\u01D2\u01CF\x03\x02\x02\x02\u01D3\t\x03\x02\x02" +
		"\x02\u01D4\u01D5\x07.\x02\x02\u01D5\u01D9\x05\u010A\x86\x02\u01D6\u01D8" +
		"\x05\f\x07\x02\u01D7\u01D6\x03\x02\x02\x02\u01D8\u01DB\x03\x02\x02\x02" +
		"\u01D9\u01D7\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02\x02\u01DA\u01DC\x03" +
		"\x02\x02\x02\u01DB\u01D9\x03\x02\x02\x02\u01DC\u01DD\x05|?\x02\u01DD\v" +
		"\x03\x02\x02\x02\u01DE\u01DF\x07/\x02\x02\u01DF\u01E3\x05\u011C\x8F\x02" +
		"\u01E0\u01E2\x05\x0E\b\x02\u01E1\u01E0\x03\x02\x02\x02\u01E2\u01E5\x03" +
		"\x02\x02\x02\u01E3\u01E1\x03\x02\x02\x02\u01E3\u01E4\x03\x02\x02\x02\u01E4" +
		"\u01E6\x03\x02\x02\x02\u01E5\u01E3\x03\x02\x02\x02\u01E6\u01E7\x05|?\x02" +
		"\u01E7\r\x03\x02\x02\x02\u01E8\u01E9\x070\x02\x02\u01E9\u01EA\x07\u0161" +
		"\x02\x02\u01EA\u01EB\x07\u0164\x02\x02\u01EB\u01F9\x07\u0165\x02\x02\u01EC" +
		"\u01ED\x071\x02\x02\u01ED\u01EE\x07\u0161\x02\x02\u01EE\u01F9\x07\u015E" +
		"\x02\x02\u01EF\u01F0\x072\x02\x02\u01F0\u01F1\x07\u0161\x02\x02\u01F1" +
		"\u01F9\x07\u015F\x02\x02\u01F2\u01F3\x073\x02\x02\u01F3\u01F4\x07\u0161" +
		"\x02\x02\u01F4\u01F9\x07\u0171\x02\x02\u01F5\u01F6\x074\x02\x02\u01F6" +
		"\u01F7\x07\u0161\x02\x02\u01F7\u01F9\x07\u0171\x02\x02\u01F8\u01E8\x03" +
		"\x02\x02\x02\u01F8\u01EC\x03\x02\x02\x02\u01F8\u01EF\x03\x02\x02\x02\u01F8" +
		"\u01F2\x03\x02\x02\x02\u01F8\u01F5\x03\x02\x02\x02\u01F9\x0F\x03\x02\x02" +
		"\x02\u01FA\u01FB\x075\x02\x02\u01FB\u01FF\x07\u0173\x02\x02\u01FC\u01FE" +
		"\x05\x12\n\x02\u01FD\u01FC\x03\x02\x02\x02\u01FE\u0201\x03\x02\x02\x02" +
		"\u01FF\u01FD\x03\x02\x02\x02\u01FF\u0200\x03\x02\x02\x02\u0200\u0202\x03" +
		"\x02\x02\x02\u0201\u01FF\x03\x02\x02\x02\u0202\u0203\x05|?\x02\u0203\x11" +
		"\x03\x02\x02\x02\u0204\u0205\x076\x02\x02\u0205\u0206\x07\u0161\x02\x02" +
		"\u0206\u0212\x07\u015E\x02\x02\u0207\u0208\x077\x02\x02\u0208\u0209\x07" +
		"\u0161\x02\x02\u0209\u0212\x07\u015E\x02\x02\u020A\u020B\x078\x02\x02" +
		"\u020B\u020C\x07\u0161\x02\x02\u020C\u0212\x07\u015E\x02\x02\u020D\u020E" +
		"\x079\x02\x02\u020E\u020F\x07\u0161\x02\x02\u020F\u0212\x05\u011C\x8F" +
		"\x02\u0210\u0212\x05\x14\v\x02\u0211\u0204\x03\x02\x02\x02\u0211\u0207" +
		"\x03\x02\x02\x02\u0211\u020A\x03\x02\x02\x02\u0211\u020D\x03\x02\x02\x02" +
		"\u0211\u0210\x03\x02\x02\x02\u0212\x13\x03\x02\x02\x02\u0213\u0217\t\x02" +
		"\x02\x02\u0214\u0216\x05\u011E\x90\x02\u0215\u0214\x03\x02\x02\x02\u0216" +
		"\u0219\x03\x02\x02\x02\u0217\u0215\x03\x02\x02\x02\u0217\u0218\x03\x02" +
		"\x02\x02\u0218\u021A\x03\x02\x02\x02\u0219\u0217\x03\x02\x02\x02\u021A" +
		"\u021B\x05|?\x02\u021B\x15\x03\x02\x02\x02\u021C\u021D\x07?\x02\x02\u021D" +
		"\u0221\x07\u0173\x02\x02\u021E\u0220\x05\x18\r\x02\u021F\u021E\x03\x02" +
		"\x02\x02\u0220\u0223\x03\x02\x02\x02\u0221\u021F\x03\x02\x02\x02\u0221" +
		"\u0222\x03\x02\x02\x02\u0222\u0224\x03\x02\x02\x02\u0223\u0221\x03\x02" +
		"\x02\x02\u0224\u0225\x05|?\x02\u0225\x17\x03\x02\x02\x02\u0226\u0227\x07" +
		"@\x02\x02\u0227\u0228\x07\u0161\x02\x02\u0228\u0239\x05~@\x02\u0229\u022A" +
		"\x07A\x02\x02\u022A\u022B\x07\u0161\x02\x02\u022B\u0239\x07\u015E\x02" +
		"\x02\u022C\u022D\x07B\x02\x02\u022D\u022E\x07\u0161\x02\x02\u022E\u0239" +
		"\x07\u015E\x02\x02\u022F\u0230\x07C\x02\x02\u0230\u0231\x07\u0161\x02" +
		"\x02\u0231\u0232\x07\u0167\x02\x02\u0232\u0233\x07\u0168\x02\x02\u0233" +
		"\u0234\x07\u0169\x02\x02\u0234\u0239\x07\u016A\x02\x02\u0235\u0236\x07" +
		"D\x02\x02\u0236\u0237\x07\u0161\x02\x02\u0237\u0239\t\x03\x02\x02\u0238" +
		"\u0226\x03\x02\x02\x02\u0238\u0229\x03\x02\x02\x02\u0238\u022C\x03\x02" +
		"\x02\x02\u0238\u022F\x03\x02\x02\x02\u0238\u0235\x03\x02\x02\x02\u0239" +
		"\x19\x03\x02\x02\x02\u023A\u023B\x07F\x02\x02\u023B\u023F\x07\u0173\x02" +
		"\x02\u023C\u023E\x05\x1C\x0F\x02\u023D\u023C\x03\x02\x02\x02\u023E\u0241" +
		"\x03\x02\x02\x02\u023F\u023D\x03\x02\x02\x02\u023F\u0240\x03\x02\x02\x02" +
		"\u0240\u0242\x03\x02\x02\x02\u0241\u023F\x03\x02\x02\x02\u0242\u0243\x05" +
		"|?\x02\u0243\x1B\x03\x02\x02\x02\u0244\u0245\x07G\x02\x02\u0245\u0246" +
		"\x07\u0161\x02\x02\u0246\u0254\x07\u0173\x02\x02\u0247\u0248\x07H\x02" +
		"\x02\u0248\u0249\x07\u0161\x02\x02\u0249\u0254\x07\u015E\x02\x02\u024A" +
		"\u024B\x07I\x02\x02\u024B\u024C\x07\u0161\x02\x02\u024C\u0254\x07\u0171" +
		"\x02\x02\u024D\u024E\x07J\x02\x02\u024E\u024F\x07\u0161\x02\x02\u024F" +
		"\u0254\x07\u015E\x02\x02\u0250\u0251\x07K\x02\x02\u0251\u0252\x07\u0161" +
		"\x02\x02\u0252\u0254\x07\u0173\x02\x02\u0253\u0244\x03\x02\x02\x02\u0253" +
		"\u0247\x03\x02\x02\x02\u0253\u024A\x03\x02\x02\x02\u0253\u024D\x03\x02" +
		"\x02\x02\u0253\u0250\x03\x02\x02\x02\u0254\x1D\x03\x02\x02\x02\u0255\u0256" +
		"\x07L\x02\x02\u0256\u025A\x07\u0173\x02\x02\u0257\u0259\x05 \x11\x02\u0258" +
		"\u0257\x03\x02\x02\x02\u0259\u025C\x03\x02\x02\x02\u025A\u0258\x03\x02" +
		"\x02\x02\u025A\u025B\x03\x02\x02\x02\u025B\u025D\x03\x02\x02\x02\u025C" +
		"\u025A\x03\x02\x02\x02\u025D\u025E\x05|?\x02\u025E\x1F\x03\x02\x02\x02" +
		"\u025F\u0260\x07L\x02\x02\u0260\u0261\x07\u0161\x02\x02\u0261\u0262\x07" +
		"\u0173\x02\x02\u0262\u0263\x07\u0160\x02\x02\u0263!\x03\x02\x02\x02\u0264" +
		"\u0265\x07M\x02\x02\u0265\u0269\x07\u0173\x02\x02\u0266\u0268\x05$\x13" +
		"\x02\u0267\u0266\x03\x02\x02\x02\u0268\u026B\x03\x02\x02\x02\u0269\u0267" +
		"\x03\x02\x02\x02\u0269\u026A\x03\x02\x02\x02\u026A\u026C\x03\x02\x02\x02" +
		"\u026B\u0269\x03\x02\x02\x02\u026C\u026D\x05|?\x02\u026D#\x03\x02\x02" +
		"\x02\u026E\u0280\x05\x80A\x02\u026F\u0280\x05\x84C\x02\u0270\u0280\x05" +
		"\x88E\x02\u0271\u0280\x05\x8AF\x02\u0272\u0280\x05\x8EH\x02\u0273\u0280" +
		"\x05\x90I\x02\u0274\u0280\x05\x92J\x02\u0275\u0280\x05\x94K\x02\u0276" +
		"\u0280\x05\x96L\x02\u0277\u0280\x05\x98M\x02\u0278\u0280\x05\x9AN\x02" +
		"\u0279\u0280\x05\x9CO\x02\u027A\u0280\x05\u011A\x8E\x02\u027B\u0280\x05" +
		"\u011E\x90\x02\u027C\u0280\x05\u0122\x92\x02\u027D\u0280\x05\u0128\x95" +
		"\x02\u027E\u0280\x05\u012C\x97\x02\u027F\u026E\x03\x02\x02\x02\u027F\u026F" +
		"\x03\x02\x02\x02\u027F\u0270\x03\x02\x02\x02\u027F\u0271\x03\x02\x02\x02" +
		"\u027F\u0272\x03\x02\x02\x02\u027F\u0273\x03\x02\x02\x02\u027F\u0274\x03" +
		"\x02\x02\x02\u027F\u0275\x03\x02\x02\x02\u027F\u0276\x03\x02\x02\x02\u027F" +
		"\u0277\x03\x02\x02\x02\u027F\u0278\x03\x02\x02\x02\u027F\u0279\x03\x02" +
		"\x02\x02\u027F\u027A\x03\x02\x02\x02\u027F\u027B\x03\x02\x02\x02\u027F" +
		"\u027C\x03\x02\x02\x02\u027F\u027D\x03\x02\x02\x02\u027F\u027E\x03\x02" +
		"\x02\x02\u0280%\x03\x02\x02\x02\u0281\u0282\x07N\x02\x02\u0282\u0286\x07" +
		"\u0173\x02\x02\u0283\u0285\x05(\x15\x02\u0284\u0283\x03\x02\x02\x02\u0285" +
		"\u0288\x03\x02\x02\x02\u0286\u0284\x03\x02\x02\x02\u0286\u0287\x03\x02" +
		"\x02\x02\u0287\u0289\x03\x02\x02\x02\u0288\u0286\x03\x02\x02\x02\u0289" +
		"\u028A\x05|?\x02\u028A\'\x03\x02\x02\x02\u028B\u028C\x07\u015E\x02\x02" +
		"\u028C\u028D\x07\u0161\x02\x02\u028D\u028E\x05\u010C\x87\x02\u028E)\x03" +
		"\x02\x02\x02\u028F\u0290\x07O\x02\x02\u0290\u0294\x07\u0173\x02\x02\u0291" +
		"\u0293\x05,\x17\x02\u0292\u0291\x03\x02\x02\x02\u0293\u0296\x03\x02\x02" +
		"\x02\u0294\u0292\x03\x02\x02\x02\u0294\u0295\x03\x02\x02\x02\u0295\u0297" +
		"\x03\x02\x02\x02\u0296\u0294\x03\x02\x02\x02\u0297\u0298\x05|?\x02\u0298" +
		"+\x03\x02\x02\x02\u0299\u02A0\x05\x9EP\x02\u029A\u02A0\x05\xA2R\x02\u029B" +
		"\u02A0\x05\xA4S\x02\u029C\u02A0\x05\xA6T\x02\u029D\u02A0\x05\xA0Q\x02" +
		"\u029E\u02A0\x05\xA8U\x02\u029F\u0299\x03\x02\x02\x02\u029F\u029A\x03" +
		"\x02\x02\x02\u029F\u029B\x03\x02\x02\x02\u029F\u029C\x03\x02\x02\x02\u029F" +
		"\u029D\x03\x02\x02\x02\u029F\u029E\x03\x02\x02\x02\u02A0-\x03\x02\x02" +
		"\x02\u02A1\u02A5\x07P\x02\x02\u02A2\u02A4\x050\x19\x02\u02A3\u02A2\x03" +
		"\x02\x02\x02\u02A4\u02A7\x03\x02\x02\x02\u02A5\u02A3\x03\x02\x02\x02\u02A5" +
		"\u02A6\x03\x02\x02\x02\u02A6\u02A8\x03\x02\x02\x02\u02A7\u02A5\x03\x02" +
		"\x02\x02\u02A8\u02A9\x05|?\x02\u02A9/\x03\x02\x02\x02\u02AA\u02B5\x05" +
		"\xAAV\x02\u02AB\u02B5\x05\xACW\x02\u02AC\u02B5\x05\xAEX\x02\u02AD\u02B5" +
		"\x05\xB0Y\x02\u02AE\u02B5\x05\xB2Z\x02\u02AF\u02B5\x05\xB4[\x02\u02B0" +
		"\u02B5\x05\xB6\\\x02\u02B1\u02B5\x05\xB8]\x02\u02B2\u02B5\x05\xBA^\x02" +
		"\u02B3\u02B5\x05\xBC_\x02\u02B4\u02AA\x03\x02\x02\x02\u02B4\u02AB\x03" +
		"\x02\x02\x02\u02B4\u02AC\x03\x02\x02\x02\u02B4\u02AD\x03\x02\x02\x02\u02B4" +
		"\u02AE\x03\x02\x02\x02\u02B4\u02AF\x03\x02\x02\x02\u02B4\u02B0\x03\x02" +
		"\x02\x02\u02B4\u02B1\x03\x02\x02\x02\u02B4\u02B2\x03\x02\x02\x02\u02B4" +
		"\u02B3\x03\x02\x02\x02\u02B51\x03\x02\x02\x02\u02B6\u02B7\x07Q\x02\x02" +
		"\u02B7\u02BB\x07\u0173\x02\x02\u02B8\u02BA\x054\x1B\x02\u02B9\u02B8\x03" +
		"\x02\x02\x02\u02BA\u02BD\x03\x02\x02\x02\u02BB\u02B9\x03\x02\x02\x02\u02BB" +
		"\u02BC\x03\x02\x02\x02\u02BC\u02BE\x03\x02\x02\x02\u02BD\u02BB\x03\x02" +
		"\x02\x02\u02BE\u02BF\x05|?\x02\u02BF3\x03\x02\x02\x02\u02C0\u02C9\x05" +
		"6\x1C\x02\u02C1\u02C9\x058\x1D\x02\u02C2\u02C9\x05:\x1E\x02\u02C3\u02C9" +
		"\x05<\x1F\x02\u02C4\u02C9\x05> \x02\u02C5\u02C9\x05@!\x02\u02C6\u02C9" +
		"\x05B\"\x02\u02C7\u02C9\x05D#\x02\u02C8\u02C0\x03\x02\x02\x02\u02C8\u02C1" +
		"\x03\x02\x02\x02\u02C8\u02C2\x03\x02\x02\x02\u02C8\u02C3\x03\x02\x02\x02" +
		"\u02C8\u02C4\x03\x02\x02\x02\u02C8\u02C5\x03\x02\x02\x02\u02C8\u02C6\x03" +
		"\x02\x02\x02\u02C8\u02C7\x03\x02\x02\x02\u02C95\x03\x02\x02\x02\u02CA" +
		"\u02DB\x07R\x02\x02\u02CB\u02DA\x05\xBE`\x02\u02CC\u02DA\x05\xC0a\x02" +
		"\u02CD\u02DA\x05\xC2b\x02\u02CE\u02DA\x05\xC6d\x02\u02CF\u02DA\x05\xC4" +
		"c\x02\u02D0\u02DA\x05\xC8e\x02\u02D1\u02DA\x05\xCAf\x02\u02D2\u02DA\x05" +
		"\xCCg\x02\u02D3\u02DA\x05\xCEh\x02\u02D4\u02DA\x05\xD0i\x02\u02D5\u02DA" +
		"\x05\xD4k\x02\u02D6\u02DA\x05\xD2j\x02\u02D7\u02DA\x05\xD6l\x02\u02D8" +
		"\u02DA\x05\xD8m\x02\u02D9\u02CB\x03\x02\x02\x02\u02D9\u02CC\x03\x02\x02" +
		"\x02\u02D9\u02CD\x03\x02\x02\x02\u02D9\u02CE\x03\x02\x02\x02\u02D9\u02CF" +
		"\x03\x02\x02\x02\u02D9\u02D0\x03\x02\x02\x02\u02D9\u02D1\x03\x02\x02\x02" +
		"\u02D9\u02D2\x03\x02\x02\x02\u02D9\u02D3\x03\x02\x02\x02\u02D9\u02D4\x03" +
		"\x02\x02\x02\u02D9\u02D5\x03\x02\x02\x02\u02D9\u02D6\x03\x02\x02\x02\u02D9" +
		"\u02D7\x03\x02\x02\x02\u02D9\u02D8\x03\x02\x02\x02\u02DA\u02DD\x03\x02" +
		"\x02\x02\u02DB\u02D9\x03\x02\x02\x02\u02DB\u02DC\x03\x02\x02\x02\u02DC" +
		"\u02DE\x03\x02\x02\x02\u02DD\u02DB\x03\x02\x02\x02\u02DE\u02DF\x05|?\x02" +
		"\u02DF7\x03\x02\x02\x02\u02E0\u02E4\x07S\x02\x02\u02E1\u02E3\x05\xDAn" +
		"\x02\u02E2\u02E1\x03\x02\x02\x02\u02E3\u02E6\x03\x02\x02\x02\u02E4\u02E2" +
		"\x03\x02\x02\x02\u02E4\u02E5\x03\x02\x02\x02\u02E5\u02E7\x03\x02\x02\x02" +
		"\u02E6\u02E4\x03\x02\x02\x02\u02E7\u02E8\x05|?\x02\u02E89\x03\x02\x02" +
		"\x02\u02E9\u02EF\x07T\x02\x02\u02EA\u02EE\x05\u0106\x84\x02\u02EB\u02EE" +
		"\x05\xDCo\x02\u02EC\u02EE\x05\xDEp\x02\u02ED\u02EA\x03\x02\x02\x02\u02ED" +
		"\u02EB\x03\x02\x02\x02\u02ED\u02EC\x03\x02\x02\x02\u02EE\u02F1\x03\x02" +
		"\x02\x02\u02EF\u02ED\x03\x02\x02\x02\u02EF\u02F0\x03\x02\x02\x02\u02F0" +
		"\u02F2\x03\x02\x02\x02\u02F1\u02EF\x03\x02\x02\x02\u02F2\u02F3\x05|?\x02" +
		"\u02F3;\x03\x02\x02\x02\u02F4\u02FF\x07U\x02\x02\u02F5\u02FE\x05\xE0q" +
		"\x02\u02F6\u02FE\x05\xE2r\x02\u02F7\u02FE\x05\xE4s\x02\u02F8\u02FE\x05" +
		"\xE6t\x02\u02F9\u02FE\x05\xE8u\x02\u02FA\u02FE\x05\xEAv\x02\u02FB\u02FE" +
		"\x05\xECw\x02\u02FC\u02FE\x05\xEEx\x02\u02FD\u02F5\x03\x02\x02\x02\u02FD" +
		"\u02F6\x03\x02\x02\x02\u02FD\u02F7\x03\x02\x02\x02\u02FD\u02F8\x03\x02" +
		"\x02\x02\u02FD\u02F9\x03\x02\x02\x02\u02FD\u02FA\x03\x02\x02\x02\u02FD" +
		"\u02FB\x03\x02\x02\x02\u02FD\u02FC\x03\x02\x02\x02\u02FE\u0301\x03\x02" +
		"\x02\x02\u02FF\u02FD\x03\x02\x02\x02\u02FF\u0300\x03\x02\x02\x02\u0300" +
		"\u0302\x03\x02\x02\x02\u0301\u02FF\x03\x02\x02\x02\u0302\u0303\x05|?\x02" +
		"\u0303=\x03\x02\x02\x02\u0304\u030C\x07V\x02\x02\u0305\u030B\x05\xF0y" +
		"\x02\u0306\u030B\x05\xF2z\x02\u0307\u030B\x05\xF4{\x02\u0308\u030B\x05" +
		"\xF6|\x02\u0309\u030B\x05\xF8}\x02\u030A\u0305\x03\x02\x02\x02\u030A\u0306" +
		"\x03\x02\x02\x02\u030A\u0307\x03\x02\x02\x02\u030A\u0308\x03\x02\x02\x02" +
		"\u030A\u0309\x03\x02\x02\x02\u030B\u030E\x03\x02\x02\x02\u030C\u030A\x03" +
		"\x02\x02\x02\u030C\u030D\x03\x02\x02\x02\u030D\u030F\x03\x02\x02\x02\u030E" +
		"\u030C\x03\x02\x02\x02\u030F\u0310\x05|?\x02\u0310?\x03\x02\x02\x02\u0311" +
		"\u0315\x07W\x02\x02\u0312\u0314\x05\xFA~\x02\u0313\u0312\x03\x02\x02\x02" +
		"\u0314\u0317\x03\x02\x02\x02\u0315\u0313\x03\x02\x02\x02\u0315\u0316\x03" +
		"\x02\x02\x02\u0316\u0318\x03\x02\x02\x02\u0317\u0315\x03\x02\x02\x02\u0318" +
		"\u0319\x05|?\x02\u0319A\x03\x02\x02\x02\u031A\u031F\x07X\x02\x02\u031B" +
		"\u031E\x05\xFC\x7F\x02\u031C\u031E\x05\xFE\x80\x02\u031D\u031B\x03\x02" +
		"\x02\x02\u031D\u031C\x03\x02\x02\x02\u031E\u0321\x03\x02\x02\x02\u031F" +
		"\u031D\x03\x02\x02\x02\u031F\u0320\x03\x02\x02\x02\u0320\u0322\x03\x02" +
		"\x02\x02\u0321\u031F\x03\x02\x02\x02\u0322\u0323\x05|?\x02\u0323C\x03" +
		"\x02\x02\x02\u0324\u032A\x07Y\x02\x02\u0325\u0329\x05\u0100\x81\x02\u0326" +
		"\u0329\x05\u0102\x82\x02\u0327\u0329\x05\u0104\x83\x02\u0328\u0325\x03" +
		"\x02\x02\x02\u0328\u0326\x03\x02\x02\x02\u0328\u0327\x03\x02\x02\x02\u0329" +
		"\u032C\x03\x02\x02\x02\u032A\u0328\x03\x02\x02\x02\u032A\u032B\x03\x02" +
		"\x02\x02\u032B\u032D\x03\x02\x02\x02\u032C\u032A\x03\x02\x02\x02\u032D" +
		"\u032E\x05|?\x02\u032EE\x03\x02\x02\x02\u032F\u0334\x07Z\x02\x02\u0330" +
		"\u0333\x05\u0108\x85\x02\u0331\u0333\x05H%\x02\u0332\u0330\x03\x02\x02" +
		"\x02\u0332\u0331\x03\x02\x02\x02\u0333\u0336\x03\x02\x02\x02\u0334\u0332" +
		"\x03\x02\x02\x02\u0334\u0335\x03\x02\x02\x02\u0335\u0337\x03\x02\x02\x02" +
		"\u0336\u0334\x03\x02\x02\x02\u0337\u0338\x05|?\x02\u0338G\x03\x02\x02" +
		"\x02\u0339\u033D\t\x04\x02\x02\u033A\u033C\x05J&\x02\u033B\u033A\x03\x02" +
		"\x02\x02\u033C\u033F\x03\x02\x02\x02\u033D\u033B\x03\x02\x02\x02\u033D" +
		"\u033E\x03\x02\x02\x02\u033E\u0340\x03\x02\x02\x02\u033F\u033D\x03\x02" +
		"\x02\x02\u0340\u0341\x05|?\x02\u0341I\x03\x02\x02\x02\u0342\u0343\x07" +
		"@\x02\x02\u0343\u0344\x07\u0161\x02\x02\u0344\u035B\x07\u0173\x02\x02" +
		"\u0345\u0346\x07x\x02\x02\u0346\u0347\x07\u0161\x02\x02\u0347\u035B\x07" +
		"\u0173\x02\x02\u0348\u0349\x07y\x02\x02\u0349\u034A\x07\u0161\x02\x02" +
		"\u034A\u035B\x07\u0160\x02\x02\u034B\u034C\x07z\x02\x02\u034C\u034D\x07" +
		"\u0161\x02\x02\u034D\u035B\x07\u0160\x02\x02\u034E\u034F\x07{\x02\x02" +
		"\u034F\u0350\x07\u0161\x02\x02\u0350\u035B\x07\u015E\x02\x02\u0351\u0352" +
		"\x07|\x02\x02\u0352\u0353\x07\u0161\x02\x02\u0353\u0354\x07\u016B\x02" +
		"\x02\u0354\u0355\x07\u016C\x02\x02\u0355\u0356\x07\u016D\x02\x02\u0356" +
		"\u035B\x07\u016E\x02\x02\u0357\u0358\x07}\x02\x02\u0358\u0359\x07\u0161" +
		"\x02\x02\u0359\u035B\x07\u0171\x02\x02\u035A\u0342\x03\x02\x02\x02\u035A" +
		"\u0345\x03\x02\x02\x02\u035A\u0348\x03\x02\x02\x02\u035A\u034B\x03\x02" +
		"\x02\x02\u035A\u034E\x03\x02\x02\x02\u035A\u0351\x03\x02\x02\x02\u035A" +
		"\u0357\x03\x02\x02\x02\u035BK\x03\x02\x02\x02\u035C\u035D\x07~\x02\x02" +
		"\u035D\u0361\x07\u0173\x02\x02\u035E\u0360\x05N(\x02\u035F\u035E\x03\x02" +
		"\x02\x02\u0360\u0363\x03\x02\x02\x02\u0361\u035F\x03\x02\x02\x02\u0361" +
		"\u0362\x03\x02\x02\x02\u0362\u0364\x03\x02\x02\x02\u0363\u0361\x03\x02" +
		"\x02\x02\u0364\u0365\x05|?\x02\u0365M\x03\x02\x02\x02\u0366\u0413\x05" +
		"P)\x02\u0367\u0413\x05R*\x02\u0368\u0413\x05T+\x02\u0369\u0413\x05V,\x02" +
		"\u036A\u036B\x07\x7F\x02\x02\u036B\u036C\x07\u0161\x02\x02\u036C\u0413" +
		"\t\x05\x02\x02\u036D\u036E\x07\x80\x02\x02\u036E\u036F\x07\u0161\x02\x02" +
		"\u036F\u0413\t\x05\x02\x02\u0370\u0371\x07\x81\x02\x02\u0371\u0372\x07" +
		"\u0161\x02\x02\u0372\u0413\t\x05\x02\x02\u0373\u0374\x07\x82\x02\x02\u0374" +
		"\u0375\x07\u0161\x02\x02\u0375\u0413\t\x05\x02\x02\u0376\u0377\x07\x83" +
		"\x02\x02\u0377\u0378\x07\u0161\x02\x02\u0378\u0413\t\x05\x02\x02\u0379" +
		"\u037A\x07\x84\x02\x02\u037A\u037B\x07\u0161\x02\x02\u037B\u0413\t\x05" +
		"\x02\x02\u037C\u037D\x07\x85\x02\x02\u037D\u037E\x07\u0161\x02\x02\u037E" +
		"\u0413\t\x05\x02\x02\u037F\u0380\x07\x86\x02\x02\u0380\u0381\x07\u0161" +
		"\x02\x02\u0381\u0413\x07\u015E\x02\x02\u0382\u0383\x07\x87\x02\x02\u0383" +
		"\u0384\x07\u0161\x02\x02\u0384\u0413\x07\u015E\x02\x02\u0385\u0386\x07" +
		"\x88\x02\x02\u0386\u0387\x07\u0161\x02\x02\u0387\u0413\x07\u015E\x02\x02" +
		"\u0388\u0389\x07\x89\x02\x02\u0389\u038A\x07\u0161\x02\x02\u038A\u0413" +
		"\x07\u0171\x02\x02\u038B\u038C\x07\x8A\x02\x02\u038C\u038D\x07\u0161\x02" +
		"\x02\u038D\u0413\t\x05\x02\x02\u038E\u038F\x07\x8B\x02\x02\u038F\u0390" +
		"\x07\u0161\x02\x02\u0390\u0413\t\x05\x02\x02\u0391\u0392\x07\x8C\x02\x02" +
		"\u0392\u0393\x07\u0161\x02\x02\u0393\u0413\t\x05\x02\x02\u0394\u0395\x07" +
		"\x8D\x02\x02\u0395\u0396\x07\u0161\x02\x02\u0396\u0413\t\x05\x02\x02\u0397" +
		"\u0398\x07\x8E\x02\x02\u0398\u0399\x07\u0161\x02\x02\u0399\u0413\t\x05" +
		"\x02\x02\u039A\u039B\x07\x8F\x02\x02\u039B\u039C\x07\u0161\x02\x02\u039C" +
		"\u0413\t\x05\x02\x02\u039D\u039E\x07\x90\x02\x02\u039E\u039F\x07\u0161" +
		"\x02\x02\u039F\u0413\x07\u015E\x02\x02\u03A0\u03A1\x07\x91\x02\x02\u03A1" +
		"\u03A2\x07\u0161\x02\x02\u03A2\u0413\t\x05\x02\x02\u03A3\u03A4\x07\x92" +
		"\x02\x02\u03A4\u03A5\x07\u0161\x02\x02\u03A5\u0413\t\x05\x02\x02\u03A6" +
		"\u03A7\x07\x93\x02\x02\u03A7\u03A8\x07\u0161\x02\x02\u03A8\u0413\t\x05" +
		"\x02\x02\u03A9\u03AA\x07\x94\x02\x02\u03AA\u03AB\x07\u0161\x02\x02\u03AB" +
		"\u0413\t\x05\x02\x02\u03AC\u03AD\x07\x95\x02\x02\u03AD\u03AE\x07\u0161" +
		"\x02\x02\u03AE\u0413\t\x05\x02\x02\u03AF\u03B0\x07\x96\x02\x02\u03B0\u03B1" +
		"\x07\u0161\x02\x02\u03B1\u0413\t\x05\x02\x02\u03B2\u03B3\x07\x97\x02\x02" +
		"\u03B3\u03B4\x07\u0161\x02\x02\u03B4\u0413\t\x05\x02\x02\u03B5\u03B6\x07" +
		"\x98\x02\x02\u03B6\u03B7\x07\u0161\x02\x02\u03B7\u0413\t\x05\x02\x02\u03B8" +
		"\u03B9\x07\x99\x02\x02\u03B9\u03BA\x07\u0161\x02\x02\u03BA\u0413\x07\u0171" +
		"\x02\x02\u03BB\u03BC\x07\x9A\x02\x02\u03BC\u03BD\x07\u0161\x02\x02\u03BD" +
		"\u0413\x07\u015E\x02\x02\u03BE\u03BF\x07\x9B\x02\x02\u03BF\u03C0\x07\u0161" +
		"\x02\x02\u03C0\u0413\x07\u0171\x02\x02\u03C1\u03C2\x07\x9C\x02\x02\u03C2" +
		"\u03C3\x07\u0161\x02\x02\u03C3\u0413\x07\u0171\x02\x02\u03C4\u03C5\x07" +
		"\x9D\x02\x02\u03C5\u03C6\x07\u0161\x02\x02\u03C6\u0413\x07\u0171\x02\x02" +
		"\u03C7\u03C8\x07\x9E\x02\x02\u03C8\u03C9\x07\u0161\x02\x02\u03C9\u0413" +
		"\t\x05\x02\x02\u03CA\u03CB\x07\x9F\x02\x02\u03CB\u03CC\x07\u0161\x02\x02" +
		"\u03CC\u0413\t\x05\x02\x02\u03CD\u03CE\x07\xA0\x02\x02\u03CE\u03CF\x07" +
		"\u0161\x02\x02\u03CF\u0413\x07\u015E\x02\x02\u03D0\u03D1\x07\xA1\x02\x02" +
		"\u03D1\u03D2\x07\u0161\x02\x02\u03D2\u0413";
	private static readonly _serializedATNSegment2: string =
		"\x07\u0171\x02\x02\u03D3\u03D4\x07\xA2\x02\x02\u03D4\u03D5\x07\u0161\x02" +
		"\x02\u03D5\u0413\t\x05\x02\x02\u03D6\u03D7\x07\xA3\x02\x02\u03D7\u03D8" +
		"\x07\u0161\x02\x02\u03D8\u0413\t\x05\x02\x02\u03D9\u03DA\x07\xA4\x02\x02" +
		"\u03DA\u03DB\x07\u0161\x02\x02\u03DB\u0413\t\x05\x02\x02\u03DC\u03DD\x07" +
		"\xA5\x02\x02\u03DD\u03DE\x07\u0161\x02\x02\u03DE\u0413\t\x05\x02\x02\u03DF" +
		"\u03E0\x07\xA6\x02\x02\u03E0\u03E1\x07\u0161\x02\x02\u03E1\u0413\t\x05" +
		"\x02\x02\u03E2\u03E3\x07\xA7\x02\x02\u03E3\u03E4\x07\u0161\x02\x02\u03E4" +
		"\u0413\t\x05\x02\x02\u03E5\u03E6\x07\xA8\x02\x02\u03E6\u03E7\x07\u0161" +
		"\x02\x02\u03E7\u0413\x07\u0171\x02\x02\u03E8\u03E9\x07\xA9\x02\x02\u03E9" +
		"\u03EA\x07\u0161\x02\x02\u03EA\u0413\x07\u015E\x02\x02\u03EB\u03EC\x07" +
		"\xAA\x02\x02\u03EC\u03ED\x07\u0161\x02\x02\u03ED\u0413\x07\u015E\x02\x02" +
		"\u03EE\u03EF\x07\xAB\x02\x02\u03EF\u03F0\x07\u0161\x02\x02\u03F0\u0413" +
		"\t\x05\x02\x02\u03F1\u03F2\x07\xAC\x02\x02\u03F2\u03F3\x07\u0161\x02\x02" +
		"\u03F3\u0413\t\x05\x02\x02\u03F4\u03F5\x07\xAD\x02\x02\u03F5\u03F6\x07" +
		"\u0161\x02\x02\u03F6\u0413\x07\u015E\x02\x02\u03F7\u03F8\x07\xAE\x02\x02" +
		"\u03F8\u03F9\x07\u0161\x02\x02\u03F9\u0413\t\x05\x02\x02\u03FA\u03FB\x07" +
		"\xAF\x02\x02\u03FB\u03FC\x07\u0161\x02\x02\u03FC\u0413\x07\u015E\x02\x02" +
		"\u03FD\u03FE\x07\xB0\x02\x02\u03FE\u03FF\x07\u0161\x02\x02\u03FF\u0413" +
		"\x07\u015E\x02\x02\u0400\u0401\x07\xB1\x02\x02\u0401\u0402\x07\u0161\x02" +
		"\x02\u0402\u0413\x07\u015E\x02\x02\u0403\u0404\x07\xB2\x02\x02\u0404\u0405" +
		"\x07\u0161\x02\x02\u0405\u0413\x07\u0171\x02\x02\u0406\u0407\x07\xB3\x02" +
		"\x02\u0407\u0408\x07\u0161\x02\x02\u0408\u0413\t\x05\x02\x02\u0409\u040A" +
		"\x07\xB4\x02\x02\u040A\u040B\x07\u0161\x02\x02\u040B\u0413\t\x05\x02\x02" +
		"\u040C\u040D\x07\xB5\x02\x02\u040D\u040E\x07\u0161\x02\x02\u040E\u0413" +
		"\t\x05\x02\x02\u040F\u0410\x07\xB6\x02\x02\u0410\u0411\x07\u0161\x02\x02" +
		"\u0411\u0413\t\x05\x02\x02\u0412\u0366\x03\x02\x02\x02\u0412\u0367\x03" +
		"\x02\x02\x02\u0412\u0368\x03\x02\x02\x02\u0412\u0369\x03\x02\x02\x02\u0412" +
		"\u036A\x03\x02\x02\x02\u0412\u036D\x03\x02\x02\x02\u0412\u0370\x03\x02" +
		"\x02\x02\u0412\u0373\x03\x02\x02\x02\u0412\u0376\x03\x02\x02\x02\u0412" +
		"\u0379\x03\x02\x02\x02\u0412\u037C\x03\x02\x02\x02\u0412\u037F\x03\x02" +
		"\x02\x02\u0412\u0382\x03\x02\x02\x02\u0412\u0385\x03\x02\x02\x02\u0412" +
		"\u0388\x03\x02\x02\x02\u0412\u038B\x03\x02\x02\x02\u0412\u038E\x03\x02" +
		"\x02\x02\u0412\u0391\x03\x02\x02\x02\u0412\u0394\x03\x02\x02\x02\u0412" +
		"\u0397\x03\x02\x02\x02\u0412\u039A\x03\x02\x02\x02\u0412\u039D\x03\x02" +
		"\x02\x02\u0412\u03A0\x03\x02\x02\x02\u0412\u03A3\x03\x02\x02\x02\u0412" +
		"\u03A6\x03\x02\x02\x02\u0412\u03A9\x03\x02\x02\x02\u0412\u03AC\x03\x02" +
		"\x02\x02\u0412\u03AF\x03\x02\x02\x02\u0412\u03B2\x03\x02\x02\x02\u0412" +
		"\u03B5\x03\x02\x02\x02\u0412\u03B8\x03\x02\x02\x02\u0412\u03BB\x03\x02" +
		"\x02\x02\u0412\u03BE\x03\x02\x02\x02\u0412\u03C1\x03\x02\x02\x02\u0412" +
		"\u03C4\x03\x02\x02\x02\u0412\u03C7\x03\x02\x02\x02\u0412\u03CA\x03\x02" +
		"\x02\x02\u0412\u03CD\x03\x02\x02\x02\u0412\u03D0\x03\x02\x02\x02\u0412" +
		"\u03D3\x03\x02\x02\x02\u0412\u03D6\x03\x02\x02\x02\u0412\u03D9\x03\x02" +
		"\x02\x02\u0412\u03DC\x03\x02\x02\x02\u0412\u03DF\x03\x02\x02\x02\u0412" +
		"\u03E2\x03\x02\x02\x02\u0412\u03E5\x03\x02\x02\x02\u0412\u03E8\x03\x02" +
		"\x02\x02\u0412\u03EB\x03\x02\x02\x02\u0412\u03EE\x03\x02\x02\x02\u0412" +
		"\u03F1\x03\x02\x02\x02\u0412\u03F4\x03\x02\x02\x02\u0412\u03F7\x03\x02" +
		"\x02\x02\u0412\u03FA\x03\x02\x02\x02\u0412\u03FD\x03\x02\x02\x02\u0412" +
		"\u0400\x03\x02\x02\x02\u0412\u0403\x03\x02\x02\x02\u0412\u0406\x03\x02" +
		"\x02\x02\u0412\u0409\x03\x02\x02\x02\u0412\u040C\x03\x02\x02\x02\u0412" +
		"\u040F\x03\x02\x02\x02\u0413O\x03\x02\x02\x02\u0414\u0415\x07\xB7\x02" +
		"\x02\u0415\u0417\x07\u0161\x02\x02\u0416\u0418\x05X-\x02\u0417\u0416\x03" +
		"\x02\x02\x02\u0418\u0419\x03\x02\x02\x02\u0419\u0417\x03\x02\x02\x02\u0419" +
		"\u041A\x03\x02\x02\x02\u041AQ\x03\x02\x02\x02\u041B\u041C\x07\xB8\x02" +
		"\x02\u041C\u041D\x07\u0161\x02\x02\u041D\u041E\x05Z.\x02\u041ES\x03\x02" +
		"\x02\x02\u041F\u0420\x07\xB9\x02\x02\u0420\u0421\x07\u0161\x02\x02\u0421" +
		"\u0422\x05\\/\x02\u0422U\x03\x02\x02\x02\u0423\u0424\x07\xBA\x02\x02\u0424" +
		"\u0425\x07\u0161\x02\x02\u0425\u0426\x05^0\x02\u0426W\x03\x02\x02\x02" +
		"\u0427\u0428\x07\u0173\x02\x02\u0428Y\x03\x02\x02\x02\u0429\u042A\x07" +
		"\u0173\x02\x02\u042A[\x03\x02\x02\x02\u042B\u042C\x07\u0173\x02\x02\u042C" +
		"]\x03\x02\x02\x02\u042D\u042E\x07\u0173\x02\x02\u042E_\x03\x02\x02\x02" +
		"\u042F\u0430\x07\xBB\x02\x02\u0430\u0434\x07\u0173\x02\x02\u0431\u0433" +
		"\x05b2\x02\u0432\u0431\x03\x02\x02\x02\u0433\u0436\x03\x02\x02\x02\u0434" +
		"\u0432\x03\x02\x02\x02\u0434\u0435\x03\x02\x02\x02\u0435\u0437\x03\x02" +
		"\x02\x02\u0436\u0434\x03\x02\x02\x02\u0437\u0438\x05|?\x02\u0438a\x03" +
		"\x02\x02\x02\u0439\u04A8\x05d3\x02\u043A\u04A8\x05f4\x02\u043B\u04A8\x05" +
		"h5\x02\u043C\u04A8\x05j6\x02\u043D\u04A8\x05l7\x02\u043E\u043F\x07\xBC" +
		"\x02\x02\u043F\u0440\x07\u0161\x02\x02\u0440\u04A8\t\x05\x02\x02\u0441" +
		"\u0442\x07\xBD\x02\x02\u0442\u0443\x07\u0161\x02\x02\u0443\u04A8\t\x05" +
		"\x02\x02\u0444\u0445\x07\xBE\x02\x02\u0445\u0446\x07\u0161\x02\x02\u0446" +
		"\u04A8\t\x05\x02\x02\u0447\u0448\x07\xBF\x02\x02\u0448\u0449\x07\u0161" +
		"\x02\x02\u0449\u04A8\t\x05\x02\x02\u044A\u044B\x07\xC0\x02\x02\u044B\u044C" +
		"\x07\u0161\x02\x02\u044C\u04A8\t\x05\x02\x02\u044D\u044E\x07\xC1\x02\x02" +
		"\u044E\u044F\x07\u0161\x02\x02\u044F\u04A8\t\x05\x02\x02\u0450\u0451\x07" +
		"\xC2\x02\x02\u0451\u0452\x07\u0161\x02\x02\u0452\u04A8\x07\u015E\x02\x02" +
		"\u0453\u0454\x07\xC3\x02\x02\u0454\u0455\x07\u0161\x02\x02\u0455\u04A8" +
		"\x07\u0171\x02\x02\u0456\u0457\x07\xC4\x02\x02\u0457\u0458\x07\u0161\x02" +
		"\x02\u0458\u04A8\x07\u0171\x02\x02\u0459\u045A\x07\xC5\x02\x02\u045A\u045B" +
		"\x07\u0161\x02\x02\u045B\u04A8\t\x05\x02\x02\u045C\u045D\x07\xC6\x02\x02" +
		"\u045D\u045E\x07\u0161\x02\x02\u045E\u04A8\t\x05\x02\x02\u045F\u0460\x07" +
		"\xC7\x02\x02\u0460\u0461\x07\u0161\x02\x02\u0461\u04A8\x05\u0116\x8C\x02" +
		"\u0462\u0463\x07\xC8\x02\x02\u0463\u0464\x07\u0161\x02\x02\u0464\u0465" +
		"\x07\u0163\x02\x02\u0465\u04A8\x05\u0116\x8C\x02\u0466\u0467\x07\xC9\x02" +
		"\x02\u0467\u0468\x07\u0161\x02\x02\u0468\u04A8\x05\u011C\x8F\x02\u0469" +
		"\u046A\x07\xCA\x02\x02\u046A\u046B\x07\u0161\x02\x02\u046B\u04A8\x07\u0171" +
		"\x02\x02\u046C\u046D\x07\xCB\x02\x02\u046D\u046E\x07\u0161\x02\x02\u046E" +
		"\u04A8\t\x05\x02\x02\u046F\u0470\x07\xCC\x02\x02\u0470\u0471\x07\u0161" +
		"\x02\x02\u0471\u04A8\x07\u015E\x02\x02\u0472\u0473\x07\xCD\x02\x02\u0473" +
		"\u0474\x07\u0161\x02\x02\u0474\u04A8\t\x05\x02\x02\u0475\u0476\x07\xCE" +
		"\x02\x02\u0476\u0477\x07\u0161\x02\x02\u0477\u04A8\x07\u0171\x02\x02\u0478" +
		"\u0479\x07\xCF\x02\x02\u0479\u047A\x07\u0161\x02\x02\u047A\u04A8\x05\u0118" +
		"\x8D\x02\u047B\u047C\x07\xD0\x02\x02\u047C\u047D\x07\u0161\x02\x02\u047D" +
		"\u047E\x07\u0163\x02\x02\u047E\u04A8\x05\u0118\x8D\x02\u047F\u0480\x07" +
		"\xD1\x02\x02\u0480\u0481\x07\u0161\x02\x02\u0481\u04A8\x05\u0118\x8D\x02" +
		"\u0482\u0483\x07\xD2\x02\x02\u0483\u0484\x07\u0161\x02\x02\u0484\u04A8" +
		"\x05\u0126\x94\x02\u0485\u0486\x07\xD3\x02\x02\u0486\u0487\x07\u0161\x02" +
		"\x02\u0487\u04A8\t\x05\x02\x02\u0488\u0489\x07\xD4\x02\x02\u0489\u048A" +
		"\x07\u0161\x02\x02\u048A\u04A8\x07\u015E\x02\x02\u048B\u048C\x07\xD5\x02" +
		"\x02\u048C\u048D\x07\u0161\x02\x02\u048D\u04A8\x07\u015E\x02\x02\u048E" +
		"\u048F\x07\xD6\x02\x02\u048F\u0490\x07\u0161\x02\x02\u0490\u04A8\t\x05" +
		"\x02\x02\u0491\u0492\x07\xD7\x02\x02\u0492\u0494\x07\u0161\x02\x02\u0493" +
		"\u0495\x07\u0173\x02\x02\u0494\u0493\x03\x02\x02\x02\u0495\u0496\x03\x02" +
		"\x02\x02\u0496\u0494\x03\x02\x02\x02\u0496\u0497\x03\x02\x02\x02\u0497" +
		"\u04A8\x03\x02\x02\x02\u0498\u0499\x07\xD8\x02\x02\u0499\u049A\x07\u0161" +
		"\x02\x02\u049A\u04A8\x07\u015E\x02\x02\u049B\u049C\x07\xD9\x02\x02\u049C" +
		"\u049D\x07\u0161\x02\x02\u049D\u04A8\x07\u0171\x02\x02\u049E\u049F\x07" +
		"\xDA\x02\x02\u049F\u04A0\x07\u0161\x02\x02\u04A0\u04A8\x07\u0171\x02\x02" +
		"\u04A1\u04A2\x07\xDB\x02\x02\u04A2\u04A3\x07\u0161\x02\x02\u04A3\u04A8" +
		"\x07\u0171\x02\x02\u04A4\u04A5\x07\xDC\x02\x02\u04A5\u04A6\x07\u0161\x02" +
		"\x02\u04A6\u04A8\x07\u0173\x02\x02\u04A7\u0439\x03\x02\x02\x02\u04A7\u043A" +
		"\x03\x02\x02\x02\u04A7\u043B\x03\x02\x02\x02\u04A7\u043C\x03\x02\x02\x02" +
		"\u04A7\u043D\x03\x02\x02\x02\u04A7\u043E\x03\x02\x02\x02\u04A7\u0441\x03" +
		"\x02\x02\x02\u04A7\u0444\x03\x02\x02\x02\u04A7\u0447\x03\x02\x02\x02\u04A7" +
		"\u044A\x03\x02\x02\x02\u04A7\u044D\x03\x02\x02\x02\u04A7\u0450\x03\x02" +
		"\x02\x02\u04A7\u0453\x03\x02\x02\x02\u04A7\u0456\x03\x02\x02\x02\u04A7" +
		"\u0459\x03\x02\x02\x02\u04A7\u045C\x03\x02\x02\x02\u04A7\u045F\x03\x02" +
		"\x02\x02\u04A7\u0462\x03\x02\x02\x02\u04A7\u0466\x03\x02\x02\x02\u04A7" +
		"\u0469\x03\x02\x02\x02\u04A7\u046C\x03\x02\x02\x02\u04A7\u046F\x03\x02" +
		"\x02\x02\u04A7\u0472\x03\x02\x02\x02\u04A7\u0475\x03\x02\x02\x02\u04A7" +
		"\u0478\x03\x02\x02\x02\u04A7\u047B\x03\x02\x02\x02\u04A7\u047F\x03\x02" +
		"\x02\x02\u04A7\u0482\x03\x02\x02\x02\u04A7\u0485\x03\x02\x02\x02\u04A7" +
		"\u0488\x03\x02\x02\x02\u04A7\u048B\x03\x02\x02\x02\u04A7\u048E\x03\x02" +
		"\x02\x02\u04A7\u0491\x03\x02\x02\x02\u04A7\u0498\x03\x02\x02\x02\u04A7" +
		"\u049B\x03\x02\x02\x02\u04A7\u049E\x03\x02\x02\x02\u04A7\u04A1\x03\x02" +
		"\x02\x02\u04A7\u04A4\x03\x02\x02\x02\u04A8c\x03\x02\x02\x02\u04A9\u04AA" +
		"\x07\xDD\x02\x02\u04AA\u04AB\x07\u0161\x02\x02\u04AB\u04AC\x05r:\x02\u04AC" +
		"e\x03\x02\x02\x02\u04AD\u04AE\x07\xDE\x02\x02\u04AE\u04AF\x07\u0161\x02" +
		"\x02\u04AF\u04B0\x05t;\x02\u04B0g\x03\x02\x02\x02\u04B1\u04B2\x07\xDF" +
		"\x02\x02\u04B2\u04B4\x07\u0161\x02\x02\u04B3\u04B5\x05v<\x02\u04B4\u04B3" +
		"\x03\x02\x02\x02\u04B5\u04B6\x03\x02\x02\x02\u04B6\u04B4\x03\x02\x02\x02" +
		"\u04B6\u04B7\x03\x02\x02\x02\u04B7i\x03\x02\x02\x02\u04B8\u04B9\x07\xE0" +
		"\x02\x02\u04B9\u04BA\x07\u0161\x02\x02\u04BA\u04BB\x05n8\x02\u04BB\u04BC" +
		"\x05p9\x02\u04BC\u04BD\x07\u0160\x02\x02\u04BDk\x03\x02\x02\x02\u04BE" +
		"\u04BF\x07\xE1\x02\x02\u04BF\u04C0\x07\u0161\x02\x02\u04C0\u04C1\x05r" +
		":\x02\u04C1m\x03\x02\x02\x02\u04C2\u04C3\x07\u0173\x02\x02\u04C3o\x03" +
		"\x02\x02\x02\u04C4\u04C5\x07\u0173\x02\x02\u04C5q\x03\x02\x02\x02\u04C6" +
		"\u04C7\x07\u0173\x02\x02\u04C7s\x03\x02\x02\x02\u04C8\u04C9\x07\u0173" +
		"\x02\x02\u04C9u\x03\x02\x02\x02\u04CA\u04CB\x07\u0173\x02\x02\u04CBw\x03" +
		"\x02\x02\x02\u04CC\u04D0\x07\xE2\x02\x02\u04CD\u04CF\x05z>\x02\u04CE\u04CD" +
		"\x03\x02\x02\x02\u04CF\u04D2\x03\x02\x02\x02\u04D0\u04CE\x03\x02\x02\x02" +
		"\u04D0\u04D1\x03\x02\x02\x02\u04D1\u04D3\x03\x02\x02\x02\u04D2\u04D0\x03" +
		"\x02\x02\x02\u04D3\u04D4\x05|?\x02\u04D4y\x03\x02\x02\x02\u04D5\u04D6" +
		"\x07\xE3\x02\x02\u04D6\u04D7\x07\u0161\x02\x02\u04D7\u04FD\x07\u0171\x02" +
		"\x02\u04D8\u04D9\x07\xE4\x02\x02\u04D9\u04DA\x07\u0161\x02\x02\u04DA\u04FD" +
		"\x05~@\x02\u04DB\u04DC\x07\xE5\x02\x02\u04DC\u04DD\x07\u0161\x02\x02\u04DD" +
		"\u04FD\x07\u015E\x02\x02\u04DE\u04DF\x07\xE6\x02\x02\u04DF\u04E0\x07\u0161" +
		"\x02\x02\u04E0\u04FD\t\x05\x02\x02\u04E1\u04E2\x07\xE7\x02\x02\u04E2\u04E3" +
		"\x07\u0161\x02\x02\u04E3\u04FD\t\x05\x02\x02\u04E4\u04E5\x07\xE8\x02\x02" +
		"\u04E5\u04E6\x07\u0161\x02\x02\u04E6\u04FD\t\x05\x02\x02\u04E7\u04E8\x07" +
		"\xE9\x02\x02\u04E8\u04E9\x07\u0161\x02\x02\u04E9\u04FD\t\x05\x02\x02\u04EA" +
		"\u04EB\x07\xEA\x02\x02\u04EB\u04EC\x07\u0161\x02\x02\u04EC\u04FD\t\x05" +
		"\x02\x02\u04ED\u04EE\x07\xEB\x02\x02\u04EE\u04EF\x07\u0161\x02\x02\u04EF" +
		"\u04FD\t\x05\x02\x02\u04F0\u04F1\x07\xEC\x02\x02\u04F1\u04F2\x07\u0161" +
		"\x02\x02\u04F2\u04FD\t\x05\x02\x02\u04F3\u04F4\x07\xED\x02\x02\u04F4\u04F5" +
		"\x07\u0161\x02\x02\u04F5\u04FD\t\x05\x02\x02\u04F6\u04F7\x07\xEE\x02\x02" +
		"\u04F7\u04F8\x07\u0161\x02\x02\u04F8\u04FD\x07\u0171\x02\x02\u04F9\u04FA" +
		"\x07\xEF\x02\x02\u04FA\u04FB\x07\u0161\x02\x02\u04FB\u04FD\t\x05\x02\x02" +
		"\u04FC\u04D5\x03\x02\x02\x02\u04FC\u04D8\x03\x02\x02\x02\u04FC\u04DB\x03" +
		"\x02\x02\x02\u04FC\u04DE\x03\x02\x02\x02\u04FC\u04E1\x03\x02\x02\x02\u04FC" +
		"\u04E4\x03\x02\x02\x02\u04FC\u04E7\x03\x02\x02\x02\u04FC\u04EA\x03\x02" +
		"\x02\x02\u04FC\u04ED\x03\x02\x02\x02\u04FC\u04F0\x03\x02\x02\x02\u04FC" +
		"\u04F3\x03\x02\x02\x02\u04FC\u04F6\x03\x02\x02\x02\u04FC\u04F9\x03\x02" +
		"\x02\x02\u04FD{\x03\x02\x02\x02\u04FE\u04FF\t\x06\x02\x02\u04FF}\x03\x02" +
		"\x02\x02\u0500\u0501\x07\u0173\x02\x02\u0501\u0502\x07\xF3\x02\x02\u0502" +
		"\u0503\t\x07\x02\x02\u0503\x7F\x03\x02\x02\x02\u0504\u0505\x07\xF6\x02" +
		"\x02\u0505\u0506\x07\u0161\x02\x02\u0506\u0507\x05\x82B\x02\u0507\x81" +
		"\x03\x02\x02\x02\u0508\u0509\x07\u0173\x02\x02\u0509\x83\x03\x02\x02\x02" +
		"\u050A\u050B\x07\xF7\x02\x02\u050B\u050D\x07\u0161\x02\x02\u050C\u050E" +
		"\x05\x86D\x02\u050D\u050C\x03\x02\x02\x02\u050E\u050F\x03\x02\x02\x02" +
		"\u050F\u050D\x03\x02\x02\x02\u050F\u0510\x03\x02\x02\x02\u0510\x85\x03" +
		"\x02\x02\x02\u0511\u0512\x07\u0173\x02\x02\u0512\x87\x03\x02\x02\x02\u0513" +
		"\u0514\x07\xF8\x02\x02\u0514\u0515\x07\u0161\x02\x02\u0515\u0516\x05\u0114" +
		"\x8B\x02\u0516\x89\x03\x02\x02\x02\u0517\u0518\x07\xF9\x02\x02\u0518\u0519" +
		"\x07\u0161\x02\x02\u0519\u051A\x05\x8CG\x02\u051A\x8B\x03\x02\x02\x02" +
		"\u051B\u051C\x07\u0173\x02\x02\u051C\x8D\x03\x02\x02\x02\u051D\u051E\x07" +
		"\xFA\x02\x02\u051E\u051F\x07\u0161\x02\x02\u051F\u0520\x07\u0173\x02\x02" +
		"\u0520\x8F\x03\x02\x02\x02\u0521\u0522\x07\xFB\x02\x02\u0522\u0523\x07" +
		"\u0161\x02\x02\u0523\u0524\x07\u0173\x02\x02\u0524\x91\x03\x02\x02\x02" +
		"\u0525\u0526\x07\xFC\x02\x02\u0526\u0527\x07\u0161\x02\x02\u0527\u0528" +
		"\x07\u0173\x02\x02\u0528\x93\x03\x02\x02\x02\u0529\u052A\x07\xFD\x02\x02" +
		"\u052A\u052B\x07\u0161\x02\x02\u052B\u052C\x05\u010E\x88\x02\u052C\x95" +
		"\x03\x02\x02\x02\u052D\u052E\x07\xFE\x02\x02\u052E\u052F\x07\u0161\x02" +
		"\x02\u052F\u0530\x05\u0110\x89\x02\u0530\x97\x03\x02\x02\x02\u0531\u0532" +
		"\x07\xFF\x02\x02\u0532\u0533\x07\u0161\x02\x02\u0533\u0534\x05\u010E\x88" +
		"\x02\u0534\x99\x03\x02\x02\x02\u0535\u0536\x07\u0100\x02\x02\u0536\u0537" +
		"\x07\u0161\x02\x02\u0537\u0538\x05\u0126\x94\x02\u0538\x9B\x03\x02\x02" +
		"\x02\u0539\u053A\x07\u0101\x02\x02\u053A\u053B\x07\u0161\x02\x02\u053B" +
		"\u053C\x07\u015E\x02\x02\u053C\x9D\x03\x02\x02\x02\u053D\u053E\x07\u0102" +
		"\x02\x02\u053E\u053F\x07\u0161\x02\x02\u053F\u0540\x05r:\x02\u0540\u0541" +
		"\x07\u015E\x02\x02\u0541\x9F\x03\x02\x02\x02\u0542\u0543\x07\u0103\x02" +
		"\x02\u0543\u0544\x07\u0161\x02\x02\u0544\u0545\x05r:\x02\u0545\u0546\x07" +
		"\u015F\x02\x02\u0546\xA1\x03\x02\x02\x02\u0547\u0548\x07\u0104\x02\x02" +
		"\u0548\u0549\x07\u0161\x02\x02\u0549\u054A\x05r:\x02\u054A\u054B\x07\u0173" +
		"\x02\x02\u054B\xA3\x03\x02\x02\x02\u054C\u054D\x07\u0105\x02\x02\u054D" +
		"\u054E\x07\u0161\x02\x02\u054E\u054F\x05r:\x02\u054F\u0550\x07\u0173\x02" +
		"\x02\u0550\xA5\x03\x02\x02\x02\u0551\u0552\x07\u0106\x02\x02\u0552\u0553" +
		"\x07\u0161\x02\x02\u0553\u0554\x07\u0163\x02\x02\u0554\u0555\x05r:\x02" +
		"\u0555\u0556\x07\u0173\x02\x02\u0556\xA7\x03\x02\x02\x02\u0557\u0558\x07" +
		"\u0107\x02\x02\u0558\u0559\x07\u0161\x02\x02\u0559\u055A\x07\u0163\x02" +
		"\x02\u055A\u055B\x05r:\x02\u055B\u055C\x07\u0173\x02\x02\u055C\xA9\x03" +
		"\x02\x02\x02\u055D\u055E\x07\u0108\x02\x02\u055E\u055F\x07\u0161\x02\x02" +
		"\u055F\u0560\x07\u0171\x02\x02\u0560\xAB\x03\x02\x02\x02\u0561\u0562\x07" +
		"\u0109\x02\x02\u0562\u0563\x07\u0161\x02\x02\u0563\u0564\x07\u016B\x02" +
		"\x02\u0564\u0565\x07\u016C\x02\x02\u0565\u0566\x07\u016D\x02\x02\u0566" +
		"\u0567\x07\u016E\x02\x02\u0567\xAD\x03\x02\x02\x02\u0568\u0569\x07\u010A" +
		"\x02\x02\u0569\u056A\x07\u0161\x02\x02\u056A\u056B\x07\u016B\x02\x02\u056B" +
		"\u056C\x07\u016C\x02\x02\u056C\u056D\x07\u016D\x02\x02\u056D\u056E\x07" +
		"\u016E\x02\x02\u056E\xAF\x03\x02\x02\x02\u056F\u0570\x07\u010B\x02\x02" +
		"\u0570\u0571\x07\u0161\x02\x02\u0571\u0572\x07\u015E\x02\x02\u0572\xB1" +
		"\x03\x02\x02\x02\u0573\u0574\x07\u010C\x02\x02\u0574\u0575\x07\u0161\x02" +
		"\x02\u0575\u0576\x07\u015E\x02\x02\u0576\xB3\x03\x02\x02\x02\u0577\u0578" +
		"\x07\u010D\x02\x02\u0578\u057A\x07\u0161\x02\x02\u0579\u057B\x07\u0173" +
		"\x02\x02\u057A\u0579\x03\x02\x02\x02\u057B\u057C\x03\x02\x02\x02\u057C" +
		"\u057A\x03\x02\x02\x02\u057C\u057D\x03\x02\x02\x02\u057D\xB5\x03\x02\x02" +
		"\x02\u057E\u057F\x07\u010E\x02\x02\u057F\u0580\x07\u0161\x02\x02\u0580" +
		"\u0581\x07\u015E\x02\x02\u0581\xB7\x03\x02\x02\x02\u0582\u0583\x07\u010F" +
		"\x02\x02\u0583\u0584\x07\u0161\x02\x02\u0584\u0585\x07\u0171\x02\x02\u0585" +
		"\xB9\x03\x02\x02\x02\u0586\u0587\x07\u0110\x02\x02\u0587\u0588\x07\u0161" +
		"\x02\x02\u0588\u0589\x07\u0160\x02\x02\u0589\xBB\x03\x02\x02\x02\u058A" +
		"\u058B\x07\u0111\x02\x02\u058B\u058C\x07\u0161\x02\x02\u058C\u058D\x07" +
		"\u015E\x02\x02\u058D\xBD\x03\x02\x02\x02\u058E\u058F\x07\u0112\x02\x02" +
		"\u058F\u0590\x07\u0161\x02\x02\u0590\u0591\x05\u0116\x8C\x02\u0591\xBF" +
		"\x03\x02\x02\x02\u0592\u0593\x07\u0113\x02\x02\u0593\u0596\x07\u0161\x02" +
		"\x02\u0594\u0597\x07\u015E\x02\x02\u0595\u0597\x05\u012E\x98\x02\u0596" +
		"\u0594\x03\x02\x02\x02\u0596\u0595\x03\x02\x02\x02\u0597\xC1\x03\x02\x02" +
		"\x02\u0598\u0599\x07\u0114\x02\x02\u0599\u059A\x07\u0161\x02\x02\u059A" +
		"\u059B\x05\u0130\x99\x02\u059B\xC3\x03\x02\x02\x02\u059C\u059D\x07\u0115" +
		"\x02\x02\u059D\u05A0\x07\u0161\x02\x02\u059E\u05A1\t\x05\x02\x02\u059F" +
		"\u05A1\x05\u012E\x98\x02\u05A0\u059E\x03\x02\x02\x02\u05A0\u059F\x03\x02" +
		"\x02\x02\u05A1\xC5\x03\x02\x02\x02\u05A2\u05A3\x07\u0116\x02\x02\u05A3" +
		"\u05A6\x07\u0161\x02\x02\u05A4\u05A7\t\x05\x02\x02\u05A5\u05A7\x05\u012E" +
		"\x98\x02\u05A6\u05A4\x03\x02\x02\x02\u05A6\u05A5\x03\x02\x02\x02\u05A7" +
		"\xC7\x03\x02\x02\x02\u05A8\u05A9\x07\u0117\x02\x02\u05A9\u05AA\x07\u0161" +
		"\x02\x02\u05AA\u05AB\x05\u012E\x98\x02\u05AB\xC9\x03\x02\x02\x02\u05AC" +
		"\u05AD\x07\u0118\x02\x02\u05AD\u05AE\x07\u0161\x02\x02\u05AE\u05AF\x07" +
		"\u015E\x02\x02\u05AF\xCB\x03\x02\x02\x02\u05B0\u05B1\x07\u0119\x02\x02" +
		"\u05B1\u05B2\x07\u0161\x02\x02\u05B2\u05B3\x07\u015E\x02\x02\u05B3\xCD" +
		"\x03\x02\x02\x02\u05B4\u05B5\x07\u011A\x02\x02\u05B5\u05B6\x07\u0161\x02" +
		"\x02\u05B6\u05B7\x07\u015E\x02\x02\u05B7\xCF\x03\x02\x02\x02\u05B8\u05B9" +
		"\x07\u011B\x02\x02\u05B9\u05BA\x07\u0161\x02\x02\u05BA\u05BB\x07\u0171" +
		"\x02\x02\u05BB\xD1\x03\x02\x02\x02\u05BC\u05BD\x07\u011C\x02\x02\u05BD" +
		"\u05BE\x07\u0161\x02\x02\u05BE\u05BF\x07\u0171\x02\x02\u05BF\xD3\x03\x02" +
		"\x02\x02\u05C0\u05C1\x07\u011D\x02\x02\u05C1\u05C2\x07\u0161\x02\x02\u05C2" +
		"\u05C3\x07\u0171\x02\x02\u05C3\xD5\x03\x02\x02\x02\u05C4\u05C5\x07\u011E" +
		"\x02\x02\u05C5\u05C6\x07\u0161\x02\x02\u05C6\u05C7\x07\u0171\x02\x02\u05C7" +
		"\xD7\x03\x02\x02\x02\u05C8\u05C9\x07\u011F\x02\x02\u05C9\u05CA\x07\u0161" +
		"\x02\x02\u05CA\u05CB\x07\u0171\x02\x02\u05CB\xD9\x03\x02\x02\x02\u05CC" +
		"\u05CD\x07\u0112\x02\x02\u05CD\u05CE\x07\u0161\x02\x02\u05CE\u05CF\x05" +
		"\u0126\x94\x02\u05CF\xDB\x03\x02\x02\x02\u05D0\u05D1\x07\u0120\x02\x02" +
		"\u05D1\u05D2\x07\u0161\x02\x02\u05D2\u05D3\x05\u0130\x99\x02\u05D3\xDD" +
		"\x03\x02\x02\x02\u05D4\u05D5\x07\u0121\x02\x02\u05D5\u05D6\x07\u0161\x02" +
		"\x02\u05D6\u05D7\x05\u0130\x99\x02\u05D7\xDF\x03\x02\x02\x02\u05D8\u05D9" +
		"\x07\u0122\x02\x02\u05D9\u05DA\x07\u0161\x02\x02\u05DA\u05DB\x05\u011C" +
		"\x8F\x02\u05DB\xE1\x03\x02\x02\x02\u05DC\u05DD\x07\u0123\x02\x02\u05DD" +
		"\u05DE\x07\u0161\x02\x02\u05DE\u05DF\x07\u0173\x02\x02\u05DF\xE3\x03\x02" +
		"\x02\x02\u05E0\u05E1\x07\x7F\x02\x02\u05E1\u05E2\x07\u0161\x02\x02\u05E2" +
		"\u05E3\t\x05\x02\x02\u05E3\xE5\x03\x02\x02\x02\u05E4\u05E5\x07\u0124\x02" +
		"\x02\u05E5\u05E6\x07\u0161\x02\x02\u05E6\u05E7\t\x05\x02\x02\u05E7\xE7" +
		"\x03\x02\x02\x02\u05E8\u05E9\x07\u0125\x02\x02\u05E9\u05EA\x07\u0161\x02" +
		"\x02\u05EA\u05EB\t\x05\x02\x02\u05EB\xE9\x03\x02\x02\x02\u05EC\u05ED\x07" +
		"\u0126\x02\x02\u05ED\u05EE\x07\u0161\x02\x02\u05EE\u05EF\t\x05\x02\x02" +
		"\u05EF\xEB\x03\x02\x02\x02\u05F0\u05F1\x07|\x02\x02\u05F1\u05F2\x07\u0161" +
		"\x02\x02\u05F2\u05F3\x07\u016B\x02\x02\u05F3\u05F4\x07\u016C\x02\x02\u05F4" +
		"\u05F5\x07\u016D\x02\x02\u05F5\xED\x03\x02\x02\x02\u05F6\u05F7\x07\u0127" +
		"\x02\x02\u05F7\u05F8\x07\u0161\x02\x02\u05F8\u05F9\t\x05\x02\x02\u05F9" +
		"\xEF\x03\x02\x02\x02\u05FA\u05FB\x07|\x02\x02\u05FB\u05FC\x07\u0161\x02" +
		"\x02\u05FC\u05FD\x07\u016B\x02\x02\u05FD\u05FE\x07\u016C\x02\x02\u05FE" +
		"\u05FF\x07\u016D\x02\x02\u05FF\xF1\x03\x02\x02\x02\u0600\u0601\x07\u0115" +
		"\x02\x02\u0601\u0602\x07\u0161\x02\x02\u0602\u0603\t\x05\x02\x02\u0603" +
		"\xF3\x03\x02\x02\x02\u0604\u0605\x07\u0128\x02\x02\u0605\u0606\x07\u0161" +
		"\x02\x02\u0606\u0607\x07\u0160\x02\x02\u0607\xF5\x03\x02\x02\x02\u0608" +
		"\u0609\x07\u0129\x02\x02\u0609\u060A\x07\u0161\x02\x02\u060A\u060B\x07" +
		"\u015E\x02\x02\u060B\xF7\x03\x02\x02\x02\u060C\u060D\x07\u012A\x02\x02" +
		"\u060D\u060E\x07\u0161\x02\x02\u060E\u060F\x07\u015E\x02\x02\u060F\xF9" +
		"\x03\x02\x02\x02\u0610\u0611\x07\u012B\x02\x02\u0611\u0612\x07\u0161\x02" +
		"\x02\u0612\u0613\x07\u0173\x02\x02\u0613\xFB\x03\x02\x02\x02\u0614\u0615" +
		"\x07\u012B\x02\x02\u0615\u0616\x07\u0161\x02\x02\u0616\u0617\x07\u0173" +
		"\x02\x02\u0617\xFD\x03\x02\x02\x02\u0618\u0619\x07\u0115\x02\x02\u0619" +
		"\u061A\x07\u0161\x02\x02\u061A\u061B\t\x05\x02\x02\u061B\xFF\x03\x02\x02" +
		"\x02\u061C\u061D\x07\u012C\x02\x02\u061D\u061E\x07\u0161\x02\x02\u061E" +
		"\u061F\x05\u0118\x8D\x02\u061F\u0101\x03\x02\x02\x02\u0620\u0621\x07\u0123" +
		"\x02\x02\u0621\u0622\x07\u0161\x02\x02\u0622\u0623\x07\u0173\x02\x02\u0623" +
		"\u0103\x03\x02\x02\x02\u0624\u0625\x07\u012D\x02\x02\u0625\u0626\x07\u0161" +
		"\x02\x02\u0626\u0627\x07\u0171\x02\x02\u0627\u0105\x03\x02\x02\x02\u0628" +
		"\u0629\x07\u0112\x02\x02\u0629\u062A\x07\u0161\x02\x02\u062A\u062B\x05" +
		"\u011C\x8F\x02\u062B\u0107\x03\x02\x02\x02\u062C\u062D\x07\u012E\x02\x02" +
		"\u062D\u062E\x07\u0161\x02\x02\u062E\u06CC\x07\u015E\x02\x02\u062F\u0630" +
		"\x07\u012F\x02\x02\u0630\u0631\x07\u0161\x02\x02\u0631\u0632\x07\u016B" +
		"\x02\x02\u0632\u0633\x07\u016C\x02\x02\u0633\u06CC\x07\u016D\x02\x02\u0634" +
		"\u0635\x07\u0130\x02\x02\u0635\u0636\x07\u0161\x02\x02\u0636\u0637\x07" +
		"\u016B\x02\x02\u0637\u0638\x07\u016C\x02\x02\u0638\u06CC\x07\u016D\x02" +
		"\x02\u0639\u063A\x07\u0131\x02\x02\u063A\u063B\x07\u0161\x02\x02\u063B" +
		"\u063C\x07\u0164\x02\x02\u063C\u06CC\x07\u0165\x02\x02\u063D\u063E\x07" +
		"\u0132\x02\x02\u063E\u063F\x07\u0161\x02\x02\u063F\u06CC\x07\u0173\x02" +
		"\x02\u0640\u0641\x07\u0133\x02\x02\u0641\u0642\x07\u0161\x02\x02\u0642" +
		"\u06CC\x07\u015E\x02\x02\u0643\u0644\x07\u0134\x02\x02\u0644\u0645\x07" +
		"\u0161\x02\x02\u0645\u06CC\x07\u0171\x02\x02\u0646\u0647\x07\u0135\x02" +
		"\x02\u0647\u0648\x07\u0161\x02\x02\u0648\u06CC\x07\u015E\x02\x02\u0649" +
		"\u064A\x07\u0136\x02\x02\u064A\u064B\x07\u0161\x02\x02\u064B\u064C\x07" +
		"\u016B\x02\x02\u064C\u064D\x07\u016C\x02\x02\u064D\u064E\x07\u016D\x02" +
		"\x02\u064E\u06CC\x07\u016E\x02\x02\u064F\u0650\x07\u0137\x02\x02\u0650" +
		"\u0651\x07\u0161\x02\x02\u0651\u0652\x07\u0164\x02\x02\u0652\u06CC\x07" +
		"\u0165\x02\x02\u0653\u0654\x07\u0138\x02\x02\u0654\u0656\x07\u0161\x02" +
		"\x02\u0655\u0657\x07\u0173\x02\x02\u0656\u0655\x03\x02\x02\x02\u0657\u0658" +
		"\x03\x02\x02\x02\u0658\u0656\x03\x02\x02\x02\u0658\u0659\x03\x02\x02\x02" +
		"\u0659\u06CC\x03\x02\x02\x02\u065A\u065B\x07\u0139\x02\x02\u065B\u065C" +
		"\x07\u0161\x02\x02\u065C\u06CC\x07\u015E\x02\x02\u065D\u065E\x07\u013A" +
		"\x02\x02\u065E\u065F\x07\u0161\x02\x02\u065F\u06CC\x07\u0171\x02\x02\u0660" +
		"\u0661\x07\u013B\x02\x02\u0661\u0663\x07\u0161\x02\x02\u0662\u0664\x07" +
		"\u0173\x02\x02\u0663\u0662\x03\x02\x02\x02\u0664\u0665\x03\x02\x02\x02" +
		"\u0665\u0663\x03\x02\x02\x02\u0665\u0666\x03\x02\x02\x02\u0666\u06CC\x03" +
		"\x02\x02\x02\u0667\u0668\x07\u013C\x02\x02\u0668\u0669\x07\u0161\x02\x02" +
		"\u0669\u06CC\x07\u015E\x02\x02\u066A\u066B\x07\u013D\x02\x02\u066B\u066C" +
		"\x07\u0161\x02\x02\u066C\u06CC\x07\u0171\x02\x02\u066D\u066E\x07\u013E" +
		"\x02\x02\u066E\u066F\x07\u0161\x02\x02\u066F\u06CC\x07\u0171\x02\x02\u0670" +
		"\u0671\x07\u013F\x02\x02\u0671\u0672\x07\u0161\x02\x02\u0672\u0673\x07" +
		"\u0164\x02\x02\u0673\u06CC\x07\u0165\x02\x02\u0674\u0675\x07\u0140\x02" +
		"\x02\u0675\u0676\x07\u0161\x02\x02\u0676\u06CC\x07\u015E\x02\x02\u0677" +
		"\u0678\x07\u0141\x02\x02\u0678\u0679\x07\u0161\x02\x02\u0679\u067A\x07" +
		"\u016B\x02\x02\u067A\u067B\x07\u016C\x02\x02\u067B\u06CC\x07\u016D\x02" +
		"\x02\u067C\u067D\x07\u0142\x02\x02\u067D\u067E\x07\u0161\x02\x02\u067E" +
		"\u06CC\x07\u0173\x02\x02\u067F\u0680\x07\u0143\x02\x02\u0680\u0681\x07" +
		"\u0161\x02\x02\u0681\u06CC\x07\u015E\x02\x02\u0682\u0683\x07\u0144\x02" +
		"\x02\u0683\u0684\x07\u0161\x02\x02\u0684\u06CC\x07\u0171\x02\x02\u0685" +
		"\u0686\x07\u0145\x02\x02\u0686\u0687\x07\u0161\x02\x02\u0687\u06CC\x07" +
		"\u0173\x02\x02\u0688\u0689\x07\u0146\x02\x02\u0689\u068A\x07\u0161\x02" +
		"\x02\u068A\u06CC\x07\u015E\x02\x02\u068B\u068C\x07\u0147\x02\x02\u068C" +
		"\u068D\x07\u0161\x02\x02\u068D\u06CC\x07\u0171\x02\x02\u068E\u068F\x07" +
		"\u0148\x02\x02\u068F\u0690\x07\u0161\x02\x02\u0690\u0691\x07\u0164\x02" +
		"\x02\u0691\u06CC\x07\u0165\x02\x02\u0692\u0693\x07\u0149\x02\x02\u0693" +
		"\u0694\x07\u0161\x02\x02\u0694\u06CC\x07\u015E\x02\x02\u0695\u0696\x07" +
		"\u014A\x02\x02\u0696\u0697\x07\u0161\x02\x02\u0697\u0698\x07\u016B\x02" +
		"\x02\u0698\u0699\x07\u016C\x02\x02\u0699\u06CC\x07\u016D\x02\x02\u069A" +
		"\u069B\x07\u014B\x02\x02\u069B\u069C\x07\u0161";
	private static readonly _serializedATNSegment3: string =
		"\x02\x02\u069C\u06CC\x07\u0173\x02\x02\u069D\u069E\x07\u014C\x02\x02\u069E" +
		"\u069F\x07\u0161\x02\x02\u069F\u06CC\x07\u015E\x02\x02\u06A0\u06A1\x07" +
		"\u014D\x02\x02\u06A1\u06A2\x07\u0161\x02\x02\u06A2\u06CC\x07\u0171\x02" +
		"\x02\u06A3\u06A4\x07\u014E\x02\x02\u06A4\u06A5\x07\u0161\x02\x02\u06A5" +
		"\u06A6\x07\u016B\x02\x02\u06A6\u06A7\x07\u016C\x02\x02\u06A7\u06CC\x07" +
		"\u016D\x02\x02\u06A8\u06A9\x07\u014F\x02\x02\u06A9\u06AA\x07\u0161\x02" +
		"\x02\u06AA\u06CC\x07\u0173\x02\x02\u06AB\u06AC\x07\u0150\x02\x02\u06AC" +
		"\u06AD\x07\u0161\x02\x02\u06AD\u06CC\x07\u015E\x02\x02\u06AE\u06AF\x07" +
		"\u0151\x02\x02\u06AF\u06B0\x07\u0161\x02\x02\u06B0\u06CC\x07\u0171\x02" +
		"\x02\u06B1\u06B2\x07\u0152\x02\x02\u06B2\u06B3\x07\u0161\x02\x02\u06B3" +
		"\u06B4\x07\u016B\x02\x02\u06B4\u06B5\x07\u016C\x02\x02\u06B5\u06CC\x07" +
		"\u016D\x02\x02\u06B6\u06B7\x07\u0153\x02\x02\u06B7\u06B8\x07\u0161\x02" +
		"\x02\u06B8\u06CC\x07\u015E\x02\x02\u06B9\u06BA\x07\u0154\x02\x02\u06BA" +
		"\u06BB\x07\u0161\x02\x02\u06BB\u06CC\x07\u015E\x02\x02\u06BC\u06BD\x07" +
		"\u0155\x02\x02\u06BD\u06BE\x07\u0161\x02\x02\u06BE\u06CC\x07\u015E\x02" +
		"\x02\u06BF\u06C0\x07\u0156\x02\x02\u06C0\u06C1\x07\u0161\x02\x02\u06C1" +
		"\u06CC\x07\u0171\x02\x02\u06C2\u06C3\x07\u0157\x02\x02\u06C3\u06C4\x07" +
		"\u0161\x02\x02\u06C4\u06CC\x07\u0171\x02\x02\u06C5\u06C6\x07\u0158\x02" +
		"\x02\u06C6\u06C7\x07\u0161\x02\x02\u06C7\u06C8\x07\u016B\x02\x02\u06C8" +
		"\u06C9\x07\u016C\x02\x02\u06C9\u06CA\x07\u016D\x02\x02\u06CA\u06CC\x07" +
		"\u016E\x02\x02\u06CB\u062C\x03\x02\x02\x02\u06CB\u062F\x03\x02\x02\x02" +
		"\u06CB\u0634\x03\x02\x02\x02\u06CB\u0639\x03\x02\x02\x02\u06CB\u063D\x03" +
		"\x02\x02\x02\u06CB\u0640\x03\x02\x02\x02\u06CB\u0643\x03\x02\x02\x02\u06CB" +
		"\u0646\x03\x02\x02\x02\u06CB\u0649\x03\x02\x02\x02\u06CB\u064F\x03\x02" +
		"\x02\x02\u06CB\u0653\x03\x02\x02\x02\u06CB\u065A\x03\x02\x02\x02\u06CB" +
		"\u065D\x03\x02\x02\x02\u06CB\u0660\x03\x02\x02\x02\u06CB\u0667\x03\x02" +
		"\x02\x02\u06CB\u066A\x03\x02\x02\x02\u06CB\u066D\x03\x02\x02\x02\u06CB" +
		"\u0670\x03\x02\x02\x02\u06CB\u0674\x03\x02\x02\x02\u06CB\u0677\x03\x02" +
		"\x02\x02\u06CB\u067C\x03\x02\x02\x02\u06CB\u067F\x03\x02\x02\x02\u06CB" +
		"\u0682\x03\x02\x02\x02\u06CB\u0685\x03\x02\x02\x02\u06CB\u0688\x03\x02" +
		"\x02\x02\u06CB\u068B\x03\x02\x02\x02\u06CB\u068E\x03\x02\x02\x02\u06CB" +
		"\u0692\x03\x02\x02\x02\u06CB\u0695\x03\x02\x02\x02\u06CB\u069A\x03\x02" +
		"\x02\x02\u06CB\u069D\x03\x02\x02\x02\u06CB\u06A0\x03\x02\x02\x02\u06CB" +
		"\u06A3\x03\x02\x02\x02\u06CB\u06A8\x03\x02\x02\x02\u06CB\u06AB\x03\x02" +
		"\x02\x02\u06CB\u06AE\x03\x02\x02\x02\u06CB\u06B1\x03\x02\x02\x02\u06CB" +
		"\u06B6\x03\x02\x02\x02\u06CB\u06B9\x03\x02\x02\x02\u06CB\u06BC\x03\x02" +
		"\x02\x02\u06CB\u06BF\x03\x02\x02\x02\u06CB\u06C2\x03\x02\x02\x02\u06CB" +
		"\u06C5\x03\x02\x02\x02\u06CC\u0109\x03\x02\x02\x02\u06CD\u06CE\x07\u0173" +
		"\x02\x02\u06CE\u010B\x03\x02\x02\x02\u06CF\u06D0\x07\u0173\x02\x02\u06D0" +
		"\u010D\x03\x02\x02\x02\u06D1\u06D2\x07\u0173\x02\x02\u06D2\u010F\x03\x02" +
		"\x02\x02\u06D3\u06D4\x07\u0173\x02\x02\u06D4\u0111\x03\x02\x02\x02\u06D5" +
		"\u06D6\x07\u0173\x02\x02\u06D6\u0113\x03\x02\x02\x02\u06D7\u06D8\x07\u0173" +
		"\x02\x02\u06D8\u0115\x03\x02\x02\x02\u06D9\u06DA\x07\u0173\x02\x02\u06DA" +
		"\u0117\x03\x02\x02\x02\u06DB\u06DC\x07\u0173\x02\x02\u06DC\u0119\x03\x02" +
		"\x02\x02\u06DD\u06DE\x07\u0159\x02\x02\u06DE\u06DF\x07\u0161\x02\x02\u06DF" +
		"\u06E0\x05\u011C\x8F\x02\u06E0\u011B\x03\x02\x02\x02\u06E1\u06E2\x07\u0173" +
		"\x02\x02\u06E2\u011D\x03\x02\x02\x02\u06E3\u06E4\x07\u015A\x02\x02\u06E4" +
		"\u06E6\x07\u0161\x02\x02\u06E5\u06E7\x05\u0120\x91\x02\u06E6\u06E5\x03" +
		"\x02\x02\x02\u06E7\u06E8\x03\x02\x02\x02\u06E8\u06E6\x03\x02\x02\x02\u06E8" +
		"\u06E9\x03\x02\x02\x02\u06E9\u011F\x03\x02\x02\x02\u06EA\u06EB\x07\u0173" +
		"\x02\x02\u06EB\u0121\x03\x02\x02\x02\u06EC\u06ED\x07\u015B\x02\x02\u06ED" +
		"\u06EE\x07\u0161\x02\x02\u06EE\u06EF\x05\u0124\x93\x02\u06EF\u0123\x03" +
		"\x02\x02\x02\u06F0\u06F1\x07\u0173\x02\x02\u06F1\u0125\x03\x02\x02\x02" +
		"\u06F2\u06F3\x07\u0173\x02\x02\u06F3\u0127\x03\x02\x02\x02\u06F4\u06F5" +
		"\x07\u015C\x02\x02\u06F5\u06F6\x07\u0161\x02\x02\u06F6\u06F7\x05\u012A" +
		"\x96\x02\u06F7\u0129\x03\x02\x02\x02\u06F8\u06F9\x07\u0173\x02\x02\u06F9" +
		"\u012B\x03\x02\x02\x02\u06FA\u06FB\x07\u015D\x02\x02\u06FB\u06FD\x07\u0161" +
		"\x02\x02\u06FC\u06FE\x07\u0162\x02\x02\u06FD\u06FC\x03\x02\x02\x02\u06FE" +
		"\u06FF\x03\x02\x02\x02\u06FF\u06FD\x03\x02\x02\x02\u06FF\u0700\x03\x02" +
		"\x02\x02\u0700\u012D\x03\x02\x02\x02\u0701\u0702\x07\u015E\x02\x02\u0702" +
		"\u0703\x07\u015E\x02\x02\u0703\u0704\x07\u016F\x02\x02\u0704\u012F\x03" +
		"\x02\x02\x02\u0705\u0706\x07\u0164\x02\x02\u0706\u0707\x07\u0165\x02\x02" +
		"\u0707\u0708\x07\u0166\x02\x02\u0708\u0131\x03\x02\x02\x02@\u0135\u0147" +
		"\u014D\u014F\u01D2\u01D9\u01E3\u01F8\u01FF\u0211\u0217\u0221\u0238\u023F" +
		"\u0253\u025A\u0269\u027F\u0286\u0294\u029F\u02A5\u02B4\u02BB\u02C8\u02D9" +
		"\u02DB\u02E4\u02ED\u02EF\u02FD\u02FF\u030A\u030C\u0315\u031D\u031F\u0328" +
		"\u032A\u0332\u0334\u033D\u035A\u0361\u0412\u0419\u0434\u0496\u04A7\u04B6" +
		"\u04D0\u04FC\u050F\u057C\u0596\u05A0\u05A6\u0658\u0665\u06CB\u06E8\u06FF";
	public static readonly _serializedATN: string = Utils.join(
		[
			MapIniParser._serializedATNSegment0,
			MapIniParser._serializedATNSegment1,
			MapIniParser._serializedATNSegment2,
			MapIniParser._serializedATNSegment3,
		],
		"",
	);
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
	public damageFXClass(): DamageFXClassContext | undefined {
		return this.tryGetRuleContext(0, DamageFXClassContext);
	}
	public drawGroupInfoClass(): DrawGroupInfoClassContext | undefined {
		return this.tryGetRuleContext(0, DrawGroupInfoClassContext);
	}
	public fxListClass(): FxListClassContext | undefined {
		return this.tryGetRuleContext(0, FxListClassContext);
	}
	public inGameUIClass(): InGameUIClassContext | undefined {
		return this.tryGetRuleContext(0, InGameUIClassContext);
	}
	public locomotorClass(): LocomotorClassContext | undefined {
		return this.tryGetRuleContext(0, LocomotorClassContext);
	}
	public weaponClass(): WeaponClassContext | undefined {
		return this.tryGetRuleContext(0, WeaponClassContext);
	}
	public weatherClass(): WeatherClassContext | undefined {
		return this.tryGetRuleContext(0, WeatherClassContext);
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
	public faction_value(): Faction_valueContext {
		return this.getRuleContext(0, Faction_valueContext);
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
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
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
	public file(): FileContext | undefined {
		return this.tryGetRuleContext(0, FileContext);
	}
	public INT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.INT, 0); }
	public COORDLEFT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.COORDLEFT, 0); }
	public COORDTOP(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.COORDTOP, 0); }
	public COORDRIGHT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.COORDRIGHT, 0); }
	public COORDBOTTOM(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.COORDBOTTOM, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.ID, 0); }
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
	public ID(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.ID, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.INT, 0); }
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.BOOLEAN, 0); }
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
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
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
	public cb_maxshotsfire_property(): Cb_maxshotsfire_propertyContext | undefined {
		return this.tryGetRuleContext(0, Cb_maxshotsfire_propertyContext);
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


export class DamageFXClassContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public damageFXClassProperties(): DamageFXClassPropertiesContext[];
	public damageFXClassProperties(i: number): DamageFXClassPropertiesContext;
	public damageFXClassProperties(i?: number): DamageFXClassPropertiesContext | DamageFXClassPropertiesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DamageFXClassPropertiesContext);
		} else {
			return this.getRuleContext(i, DamageFXClassPropertiesContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_damageFXClass; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterDamageFXClass) {
			listener.enterDamageFXClass(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitDamageFXClass) {
			listener.exitDamageFXClass(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitDamageFXClass) {
			return visitor.visitDamageFXClass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DamageFXClassPropertiesContext extends ParserRuleContext {
	public dfx_throttletime_property(): Dfx_throttletime_propertyContext | undefined {
		return this.tryGetRuleContext(0, Dfx_throttletime_propertyContext);
	}
	public dfx_majorfx_property(): Dfx_majorfx_propertyContext | undefined {
		return this.tryGetRuleContext(0, Dfx_majorfx_propertyContext);
	}
	public dfx_minorfx_property(): Dfx_minorfx_propertyContext | undefined {
		return this.tryGetRuleContext(0, Dfx_minorfx_propertyContext);
	}
	public dfx_vetmajorfx_property(): Dfx_vetmajorfx_propertyContext | undefined {
		return this.tryGetRuleContext(0, Dfx_vetmajorfx_propertyContext);
	}
	public dfx_amountformajorfx_property(): Dfx_amountformajorfx_propertyContext | undefined {
		return this.tryGetRuleContext(0, Dfx_amountformajorfx_propertyContext);
	}
	public dfx_vetminorfx_property(): Dfx_vetminorfx_propertyContext | undefined {
		return this.tryGetRuleContext(0, Dfx_vetminorfx_propertyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_damageFXClassProperties; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterDamageFXClassProperties) {
			listener.enterDamageFXClassProperties(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitDamageFXClassProperties) {
			listener.exitDamageFXClassProperties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitDamageFXClassProperties) {
			return visitor.visitDamageFXClassProperties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DrawGroupInfoClassContext extends ParserRuleContext {
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public drawgroupinfoProperties(): DrawgroupinfoPropertiesContext[];
	public drawgroupinfoProperties(i: number): DrawgroupinfoPropertiesContext;
	public drawgroupinfoProperties(i?: number): DrawgroupinfoPropertiesContext | DrawgroupinfoPropertiesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DrawgroupinfoPropertiesContext);
		} else {
			return this.getRuleContext(i, DrawgroupinfoPropertiesContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_drawGroupInfoClass; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterDrawGroupInfoClass) {
			listener.enterDrawGroupInfoClass(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitDrawGroupInfoClass) {
			listener.exitDrawGroupInfoClass(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitDrawGroupInfoClass) {
			return visitor.visitDrawGroupInfoClass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DrawgroupinfoPropertiesContext extends ParserRuleContext {
	public dgi_useplayercolor_property(): Dgi_useplayercolor_propertyContext | undefined {
		return this.tryGetRuleContext(0, Dgi_useplayercolor_propertyContext);
	}
	public dgi_colorfortext_property(): Dgi_colorfortext_propertyContext | undefined {
		return this.tryGetRuleContext(0, Dgi_colorfortext_propertyContext);
	}
	public dgi_colordropshadow_property(): Dgi_colordropshadow_propertyContext | undefined {
		return this.tryGetRuleContext(0, Dgi_colordropshadow_propertyContext);
	}
	public dgi_dropshadowoffsetX_property(): Dgi_dropshadowoffsetX_propertyContext | undefined {
		return this.tryGetRuleContext(0, Dgi_dropshadowoffsetX_propertyContext);
	}
	public dgi_dropshadowoffsetY_property(): Dgi_dropshadowoffsetY_propertyContext | undefined {
		return this.tryGetRuleContext(0, Dgi_dropshadowoffsetY_propertyContext);
	}
	public dgi_fontname_property(): Dgi_fontname_propertyContext | undefined {
		return this.tryGetRuleContext(0, Dgi_fontname_propertyContext);
	}
	public dgi_fontsize_property(): Dgi_fontsize_propertyContext | undefined {
		return this.tryGetRuleContext(0, Dgi_fontsize_propertyContext);
	}
	public dgi_fontisbold_property(): Dgi_fontisbold_propertyContext | undefined {
		return this.tryGetRuleContext(0, Dgi_fontisbold_propertyContext);
	}
	public dgi_drawposXperc_property(): Dgi_drawposXperc_propertyContext | undefined {
		return this.tryGetRuleContext(0, Dgi_drawposXperc_propertyContext);
	}
	public dgi_drawposYperc_property(): Dgi_drawposYperc_propertyContext | undefined {
		return this.tryGetRuleContext(0, Dgi_drawposYperc_propertyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_drawgroupinfoProperties; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterDrawgroupinfoProperties) {
			listener.enterDrawgroupinfoProperties(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitDrawgroupinfoProperties) {
			listener.exitDrawgroupinfoProperties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitDrawgroupinfoProperties) {
			return visitor.visitDrawgroupinfoProperties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FxListClassContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public fxlistblocks(): FxlistblocksContext[];
	public fxlistblocks(i: number): FxlistblocksContext;
	public fxlistblocks(i?: number): FxlistblocksContext | FxlistblocksContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FxlistblocksContext);
		} else {
			return this.getRuleContext(i, FxlistblocksContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxListClass; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxListClass) {
			listener.enterFxListClass(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxListClass) {
			listener.exitFxListClass(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxListClass) {
			return visitor.visitFxListClass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FxlistblocksContext extends ParserRuleContext {
	public fxlist_ps_block(): Fxlist_ps_blockContext | undefined {
		return this.tryGetRuleContext(0, Fxlist_ps_blockContext);
	}
	public fxlist_sound_block(): Fxlist_sound_blockContext | undefined {
		return this.tryGetRuleContext(0, Fxlist_sound_blockContext);
	}
	public fxlist_rayeffect_block(): Fxlist_rayeffect_blockContext | undefined {
		return this.tryGetRuleContext(0, Fxlist_rayeffect_blockContext);
	}
	public fxlist_tracer_block(): Fxlist_tracer_blockContext | undefined {
		return this.tryGetRuleContext(0, Fxlist_tracer_blockContext);
	}
	public fxlist_lightpulse_block(): Fxlist_lightpulse_blockContext | undefined {
		return this.tryGetRuleContext(0, Fxlist_lightpulse_blockContext);
	}
	public fxlist_viewshake_block(): Fxlist_viewshake_blockContext | undefined {
		return this.tryGetRuleContext(0, Fxlist_viewshake_blockContext);
	}
	public fxlist_terrainscorch_block(): Fxlist_terrainscorch_blockContext | undefined {
		return this.tryGetRuleContext(0, Fxlist_terrainscorch_blockContext);
	}
	public fxlist_fxlistatbone_block(): Fxlist_fxlistatbone_blockContext | undefined {
		return this.tryGetRuleContext(0, Fxlist_fxlistatbone_blockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlistblocks; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlistblocks) {
			listener.enterFxlistblocks(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlistblocks) {
			listener.exitFxlistblocks(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlistblocks) {
			return visitor.visitFxlistblocks(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_ps_blockContext extends ParserRuleContext {
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public fxlist_ps_name_property(): Fxlist_ps_name_propertyContext[];
	public fxlist_ps_name_property(i: number): Fxlist_ps_name_propertyContext;
	public fxlist_ps_name_property(i?: number): Fxlist_ps_name_propertyContext | Fxlist_ps_name_propertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fxlist_ps_name_propertyContext);
		} else {
			return this.getRuleContext(i, Fxlist_ps_name_propertyContext);
		}
	}
	public fxlist_ps_count_property(): Fxlist_ps_count_propertyContext[];
	public fxlist_ps_count_property(i: number): Fxlist_ps_count_propertyContext;
	public fxlist_ps_count_property(i?: number): Fxlist_ps_count_propertyContext | Fxlist_ps_count_propertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fxlist_ps_count_propertyContext);
		} else {
			return this.getRuleContext(i, Fxlist_ps_count_propertyContext);
		}
	}
	public fxlist_ps_offset_property(): Fxlist_ps_offset_propertyContext[];
	public fxlist_ps_offset_property(i: number): Fxlist_ps_offset_propertyContext;
	public fxlist_ps_offset_property(i?: number): Fxlist_ps_offset_propertyContext | Fxlist_ps_offset_propertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fxlist_ps_offset_propertyContext);
		} else {
			return this.getRuleContext(i, Fxlist_ps_offset_propertyContext);
		}
	}
	public fxlist_ps_height_property(): Fxlist_ps_height_propertyContext[];
	public fxlist_ps_height_property(i: number): Fxlist_ps_height_propertyContext;
	public fxlist_ps_height_property(i?: number): Fxlist_ps_height_propertyContext | Fxlist_ps_height_propertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fxlist_ps_height_propertyContext);
		} else {
			return this.getRuleContext(i, Fxlist_ps_height_propertyContext);
		}
	}
	public fxlist_ps_radius_property(): Fxlist_ps_radius_propertyContext[];
	public fxlist_ps_radius_property(i: number): Fxlist_ps_radius_propertyContext;
	public fxlist_ps_radius_property(i?: number): Fxlist_ps_radius_propertyContext | Fxlist_ps_radius_propertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fxlist_ps_radius_propertyContext);
		} else {
			return this.getRuleContext(i, Fxlist_ps_radius_propertyContext);
		}
	}
	public fxlist_ps_initialDelay_property(): Fxlist_ps_initialDelay_propertyContext[];
	public fxlist_ps_initialDelay_property(i: number): Fxlist_ps_initialDelay_propertyContext;
	public fxlist_ps_initialDelay_property(i?: number): Fxlist_ps_initialDelay_propertyContext | Fxlist_ps_initialDelay_propertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fxlist_ps_initialDelay_propertyContext);
		} else {
			return this.getRuleContext(i, Fxlist_ps_initialDelay_propertyContext);
		}
	}
	public fxlist_ps_rotateX_property(): Fxlist_ps_rotateX_propertyContext[];
	public fxlist_ps_rotateX_property(i: number): Fxlist_ps_rotateX_propertyContext;
	public fxlist_ps_rotateX_property(i?: number): Fxlist_ps_rotateX_propertyContext | Fxlist_ps_rotateX_propertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fxlist_ps_rotateX_propertyContext);
		} else {
			return this.getRuleContext(i, Fxlist_ps_rotateX_propertyContext);
		}
	}
	public fxlist_ps_rotatey_property(): Fxlist_ps_rotatey_propertyContext[];
	public fxlist_ps_rotatey_property(i: number): Fxlist_ps_rotatey_propertyContext;
	public fxlist_ps_rotatey_property(i?: number): Fxlist_ps_rotatey_propertyContext | Fxlist_ps_rotatey_propertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fxlist_ps_rotatey_propertyContext);
		} else {
			return this.getRuleContext(i, Fxlist_ps_rotatey_propertyContext);
		}
	}
	public fxlist_ps_rotateZ_property(): Fxlist_ps_rotateZ_propertyContext[];
	public fxlist_ps_rotateZ_property(i: number): Fxlist_ps_rotateZ_propertyContext;
	public fxlist_ps_rotateZ_property(i?: number): Fxlist_ps_rotateZ_propertyContext | Fxlist_ps_rotateZ_propertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fxlist_ps_rotateZ_propertyContext);
		} else {
			return this.getRuleContext(i, Fxlist_ps_rotateZ_propertyContext);
		}
	}
	public fxlist_ps_orienttoobject_property(): Fxlist_ps_orienttoobject_propertyContext[];
	public fxlist_ps_orienttoobject_property(i: number): Fxlist_ps_orienttoobject_propertyContext;
	public fxlist_ps_orienttoobject_property(i?: number): Fxlist_ps_orienttoobject_propertyContext | Fxlist_ps_orienttoobject_propertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fxlist_ps_orienttoobject_propertyContext);
		} else {
			return this.getRuleContext(i, Fxlist_ps_orienttoobject_propertyContext);
		}
	}
	public fxlist_ps_usecallerradius_property(): Fxlist_ps_usecallerradius_propertyContext[];
	public fxlist_ps_usecallerradius_property(i: number): Fxlist_ps_usecallerradius_propertyContext;
	public fxlist_ps_usecallerradius_property(i?: number): Fxlist_ps_usecallerradius_propertyContext | Fxlist_ps_usecallerradius_propertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fxlist_ps_usecallerradius_propertyContext);
		} else {
			return this.getRuleContext(i, Fxlist_ps_usecallerradius_propertyContext);
		}
	}
	public fxlist_ps_ricochet_property(): Fxlist_ps_ricochet_propertyContext[];
	public fxlist_ps_ricochet_property(i: number): Fxlist_ps_ricochet_propertyContext;
	public fxlist_ps_ricochet_property(i?: number): Fxlist_ps_ricochet_propertyContext | Fxlist_ps_ricochet_propertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fxlist_ps_ricochet_propertyContext);
		} else {
			return this.getRuleContext(i, Fxlist_ps_ricochet_propertyContext);
		}
	}
	public fxlist_ps_attachtoobject_property(): Fxlist_ps_attachtoobject_propertyContext[];
	public fxlist_ps_attachtoobject_property(i: number): Fxlist_ps_attachtoobject_propertyContext;
	public fxlist_ps_attachtoobject_property(i?: number): Fxlist_ps_attachtoobject_propertyContext | Fxlist_ps_attachtoobject_propertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fxlist_ps_attachtoobject_propertyContext);
		} else {
			return this.getRuleContext(i, Fxlist_ps_attachtoobject_propertyContext);
		}
	}
	public fxlist_ps_creategroundheight_property(): Fxlist_ps_creategroundheight_propertyContext[];
	public fxlist_ps_creategroundheight_property(i: number): Fxlist_ps_creategroundheight_propertyContext;
	public fxlist_ps_creategroundheight_property(i?: number): Fxlist_ps_creategroundheight_propertyContext | Fxlist_ps_creategroundheight_propertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fxlist_ps_creategroundheight_propertyContext);
		} else {
			return this.getRuleContext(i, Fxlist_ps_creategroundheight_propertyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_ps_block; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_ps_block) {
			listener.enterFxlist_ps_block(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_ps_block) {
			listener.exitFxlist_ps_block(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_ps_block) {
			return visitor.visitFxlist_ps_block(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_sound_blockContext extends ParserRuleContext {
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public fxlist_sound_property(): Fxlist_sound_propertyContext[];
	public fxlist_sound_property(i: number): Fxlist_sound_propertyContext;
	public fxlist_sound_property(i?: number): Fxlist_sound_propertyContext | Fxlist_sound_propertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fxlist_sound_propertyContext);
		} else {
			return this.getRuleContext(i, Fxlist_sound_propertyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_sound_block; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_sound_block) {
			listener.enterFxlist_sound_block(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_sound_block) {
			listener.exitFxlist_sound_block(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_sound_block) {
			return visitor.visitFxlist_sound_block(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_rayeffect_blockContext extends ParserRuleContext {
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public fxlist_name_object_propety(): Fxlist_name_object_propetyContext[];
	public fxlist_name_object_propety(i: number): Fxlist_name_object_propetyContext;
	public fxlist_name_object_propety(i?: number): Fxlist_name_object_propetyContext | Fxlist_name_object_propetyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fxlist_name_object_propetyContext);
		} else {
			return this.getRuleContext(i, Fxlist_name_object_propetyContext);
		}
	}
	public fxlist_rayeffect_primaryoffset_property(): Fxlist_rayeffect_primaryoffset_propertyContext[];
	public fxlist_rayeffect_primaryoffset_property(i: number): Fxlist_rayeffect_primaryoffset_propertyContext;
	public fxlist_rayeffect_primaryoffset_property(i?: number): Fxlist_rayeffect_primaryoffset_propertyContext | Fxlist_rayeffect_primaryoffset_propertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fxlist_rayeffect_primaryoffset_propertyContext);
		} else {
			return this.getRuleContext(i, Fxlist_rayeffect_primaryoffset_propertyContext);
		}
	}
	public fxlist_rayeffect_secondaryoffset_proprety(): Fxlist_rayeffect_secondaryoffset_propretyContext[];
	public fxlist_rayeffect_secondaryoffset_proprety(i: number): Fxlist_rayeffect_secondaryoffset_propretyContext;
	public fxlist_rayeffect_secondaryoffset_proprety(i?: number): Fxlist_rayeffect_secondaryoffset_propretyContext | Fxlist_rayeffect_secondaryoffset_propretyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fxlist_rayeffect_secondaryoffset_propretyContext);
		} else {
			return this.getRuleContext(i, Fxlist_rayeffect_secondaryoffset_propretyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_rayeffect_block; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_rayeffect_block) {
			listener.enterFxlist_rayeffect_block(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_rayeffect_block) {
			listener.exitFxlist_rayeffect_block(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_rayeffect_block) {
			return visitor.visitFxlist_rayeffect_block(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_tracer_blockContext extends ParserRuleContext {
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public fxlist_tracer_name_propety(): Fxlist_tracer_name_propetyContext[];
	public fxlist_tracer_name_propety(i: number): Fxlist_tracer_name_propetyContext;
	public fxlist_tracer_name_propety(i?: number): Fxlist_tracer_name_propetyContext | Fxlist_tracer_name_propetyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fxlist_tracer_name_propetyContext);
		} else {
			return this.getRuleContext(i, Fxlist_tracer_name_propetyContext);
		}
	}
	public fxlist_tracer_bonename_property(): Fxlist_tracer_bonename_propertyContext[];
	public fxlist_tracer_bonename_property(i: number): Fxlist_tracer_bonename_propertyContext;
	public fxlist_tracer_bonename_property(i?: number): Fxlist_tracer_bonename_propertyContext | Fxlist_tracer_bonename_propertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fxlist_tracer_bonename_propertyContext);
		} else {
			return this.getRuleContext(i, Fxlist_tracer_bonename_propertyContext);
		}
	}
	public fxlist_tracer_speed_property(): Fxlist_tracer_speed_propertyContext[];
	public fxlist_tracer_speed_property(i: number): Fxlist_tracer_speed_propertyContext;
	public fxlist_tracer_speed_property(i?: number): Fxlist_tracer_speed_propertyContext | Fxlist_tracer_speed_propertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fxlist_tracer_speed_propertyContext);
		} else {
			return this.getRuleContext(i, Fxlist_tracer_speed_propertyContext);
		}
	}
	public fxlist_tracer_decayat_property(): Fxlist_tracer_decayat_propertyContext[];
	public fxlist_tracer_decayat_property(i: number): Fxlist_tracer_decayat_propertyContext;
	public fxlist_tracer_decayat_property(i?: number): Fxlist_tracer_decayat_propertyContext | Fxlist_tracer_decayat_propertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fxlist_tracer_decayat_propertyContext);
		} else {
			return this.getRuleContext(i, Fxlist_tracer_decayat_propertyContext);
		}
	}
	public fxlist_tracer_length_property(): Fxlist_tracer_length_propertyContext[];
	public fxlist_tracer_length_property(i: number): Fxlist_tracer_length_propertyContext;
	public fxlist_tracer_length_property(i?: number): Fxlist_tracer_length_propertyContext | Fxlist_tracer_length_propertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fxlist_tracer_length_propertyContext);
		} else {
			return this.getRuleContext(i, Fxlist_tracer_length_propertyContext);
		}
	}
	public fxlist_tracer_width_property(): Fxlist_tracer_width_propertyContext[];
	public fxlist_tracer_width_property(i: number): Fxlist_tracer_width_propertyContext;
	public fxlist_tracer_width_property(i?: number): Fxlist_tracer_width_propertyContext | Fxlist_tracer_width_propertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fxlist_tracer_width_propertyContext);
		} else {
			return this.getRuleContext(i, Fxlist_tracer_width_propertyContext);
		}
	}
	public fxlist_tracer_color_property(): Fxlist_tracer_color_propertyContext[];
	public fxlist_tracer_color_property(i: number): Fxlist_tracer_color_propertyContext;
	public fxlist_tracer_color_property(i?: number): Fxlist_tracer_color_propertyContext | Fxlist_tracer_color_propertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fxlist_tracer_color_propertyContext);
		} else {
			return this.getRuleContext(i, Fxlist_tracer_color_propertyContext);
		}
	}
	public fxlist_tracer_probability_property(): Fxlist_tracer_probability_propertyContext[];
	public fxlist_tracer_probability_property(i: number): Fxlist_tracer_probability_propertyContext;
	public fxlist_tracer_probability_property(i?: number): Fxlist_tracer_probability_propertyContext | Fxlist_tracer_probability_propertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fxlist_tracer_probability_propertyContext);
		} else {
			return this.getRuleContext(i, Fxlist_tracer_probability_propertyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_tracer_block; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_tracer_block) {
			listener.enterFxlist_tracer_block(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_tracer_block) {
			listener.exitFxlist_tracer_block(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_tracer_block) {
			return visitor.visitFxlist_tracer_block(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_lightpulse_blockContext extends ParserRuleContext {
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public fxlist_lightpulse_color_property(): Fxlist_lightpulse_color_propertyContext[];
	public fxlist_lightpulse_color_property(i: number): Fxlist_lightpulse_color_propertyContext;
	public fxlist_lightpulse_color_property(i?: number): Fxlist_lightpulse_color_propertyContext | Fxlist_lightpulse_color_propertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fxlist_lightpulse_color_propertyContext);
		} else {
			return this.getRuleContext(i, Fxlist_lightpulse_color_propertyContext);
		}
	}
	public fxlist_lightpulse_radius_property(): Fxlist_lightpulse_radius_propertyContext[];
	public fxlist_lightpulse_radius_property(i: number): Fxlist_lightpulse_radius_propertyContext;
	public fxlist_lightpulse_radius_property(i?: number): Fxlist_lightpulse_radius_propertyContext | Fxlist_lightpulse_radius_propertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fxlist_lightpulse_radius_propertyContext);
		} else {
			return this.getRuleContext(i, Fxlist_lightpulse_radius_propertyContext);
		}
	}
	public fxlist_lightpulse_radiuspercentobjectsize_property(): Fxlist_lightpulse_radiuspercentobjectsize_propertyContext[];
	public fxlist_lightpulse_radiuspercentobjectsize_property(i: number): Fxlist_lightpulse_radiuspercentobjectsize_propertyContext;
	public fxlist_lightpulse_radiuspercentobjectsize_property(i?: number): Fxlist_lightpulse_radiuspercentobjectsize_propertyContext | Fxlist_lightpulse_radiuspercentobjectsize_propertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fxlist_lightpulse_radiuspercentobjectsize_propertyContext);
		} else {
			return this.getRuleContext(i, Fxlist_lightpulse_radiuspercentobjectsize_propertyContext);
		}
	}
	public fxlist_lightpulse_increasetime_property(): Fxlist_lightpulse_increasetime_propertyContext[];
	public fxlist_lightpulse_increasetime_property(i: number): Fxlist_lightpulse_increasetime_propertyContext;
	public fxlist_lightpulse_increasetime_property(i?: number): Fxlist_lightpulse_increasetime_propertyContext | Fxlist_lightpulse_increasetime_propertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fxlist_lightpulse_increasetime_propertyContext);
		} else {
			return this.getRuleContext(i, Fxlist_lightpulse_increasetime_propertyContext);
		}
	}
	public fxlist_lightpulse_decreasetime_property(): Fxlist_lightpulse_decreasetime_propertyContext[];
	public fxlist_lightpulse_decreasetime_property(i: number): Fxlist_lightpulse_decreasetime_propertyContext;
	public fxlist_lightpulse_decreasetime_property(i?: number): Fxlist_lightpulse_decreasetime_propertyContext | Fxlist_lightpulse_decreasetime_propertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fxlist_lightpulse_decreasetime_propertyContext);
		} else {
			return this.getRuleContext(i, Fxlist_lightpulse_decreasetime_propertyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_lightpulse_block; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_lightpulse_block) {
			listener.enterFxlist_lightpulse_block(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_lightpulse_block) {
			listener.exitFxlist_lightpulse_block(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_lightpulse_block) {
			return visitor.visitFxlist_lightpulse_block(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_viewshake_blockContext extends ParserRuleContext {
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public fxlist_viewshake_type_property(): Fxlist_viewshake_type_propertyContext[];
	public fxlist_viewshake_type_property(i: number): Fxlist_viewshake_type_propertyContext;
	public fxlist_viewshake_type_property(i?: number): Fxlist_viewshake_type_propertyContext | Fxlist_viewshake_type_propertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fxlist_viewshake_type_propertyContext);
		} else {
			return this.getRuleContext(i, Fxlist_viewshake_type_propertyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_viewshake_block; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_viewshake_block) {
			listener.enterFxlist_viewshake_block(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_viewshake_block) {
			listener.exitFxlist_viewshake_block(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_viewshake_block) {
			return visitor.visitFxlist_viewshake_block(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_terrainscorch_blockContext extends ParserRuleContext {
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public fxlist_scorch_type_property(): Fxlist_scorch_type_propertyContext[];
	public fxlist_scorch_type_property(i: number): Fxlist_scorch_type_propertyContext;
	public fxlist_scorch_type_property(i?: number): Fxlist_scorch_type_propertyContext | Fxlist_scorch_type_propertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fxlist_scorch_type_propertyContext);
		} else {
			return this.getRuleContext(i, Fxlist_scorch_type_propertyContext);
		}
	}
	public fxlist_scorch_radius_property(): Fxlist_scorch_radius_propertyContext[];
	public fxlist_scorch_radius_property(i: number): Fxlist_scorch_radius_propertyContext;
	public fxlist_scorch_radius_property(i?: number): Fxlist_scorch_radius_propertyContext | Fxlist_scorch_radius_propertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fxlist_scorch_radius_propertyContext);
		} else {
			return this.getRuleContext(i, Fxlist_scorch_radius_propertyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_terrainscorch_block; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_terrainscorch_block) {
			listener.enterFxlist_terrainscorch_block(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_terrainscorch_block) {
			listener.exitFxlist_terrainscorch_block(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_terrainscorch_block) {
			return visitor.visitFxlist_terrainscorch_block(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_fxlistatbone_blockContext extends ParserRuleContext {
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public fxlist_atbonepos_fx_property(): Fxlist_atbonepos_fx_propertyContext[];
	public fxlist_atbonepos_fx_property(i: number): Fxlist_atbonepos_fx_propertyContext;
	public fxlist_atbonepos_fx_property(i?: number): Fxlist_atbonepos_fx_propertyContext | Fxlist_atbonepos_fx_propertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fxlist_atbonepos_fx_propertyContext);
		} else {
			return this.getRuleContext(i, Fxlist_atbonepos_fx_propertyContext);
		}
	}
	public fxlist_atbonepos_bonename_property(): Fxlist_atbonepos_bonename_propertyContext[];
	public fxlist_atbonepos_bonename_property(i: number): Fxlist_atbonepos_bonename_propertyContext;
	public fxlist_atbonepos_bonename_property(i?: number): Fxlist_atbonepos_bonename_propertyContext | Fxlist_atbonepos_bonename_propertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fxlist_atbonepos_bonename_propertyContext);
		} else {
			return this.getRuleContext(i, Fxlist_atbonepos_bonename_propertyContext);
		}
	}
	public fxlist_atbonepos_orienttoobject_property(): Fxlist_atbonepos_orienttoobject_propertyContext[];
	public fxlist_atbonepos_orienttoobject_property(i: number): Fxlist_atbonepos_orienttoobject_propertyContext;
	public fxlist_atbonepos_orienttoobject_property(i?: number): Fxlist_atbonepos_orienttoobject_propertyContext | Fxlist_atbonepos_orienttoobject_propertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fxlist_atbonepos_orienttoobject_propertyContext);
		} else {
			return this.getRuleContext(i, Fxlist_atbonepos_orienttoobject_propertyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_fxlistatbone_block; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_fxlistatbone_block) {
			listener.enterFxlist_fxlistatbone_block(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_fxlistatbone_block) {
			listener.exitFxlist_fxlistatbone_block(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_fxlistatbone_block) {
			return visitor.visitFxlist_fxlistatbone_block(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InGameUIClassContext extends ParserRuleContext {
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public igui_properties(): Igui_propertiesContext[];
	public igui_properties(i: number): Igui_propertiesContext;
	public igui_properties(i?: number): Igui_propertiesContext | Igui_propertiesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Igui_propertiesContext);
		} else {
			return this.getRuleContext(i, Igui_propertiesContext);
		}
	}
	public igui_blocks(): Igui_blocksContext[];
	public igui_blocks(i: number): Igui_blocksContext;
	public igui_blocks(i?: number): Igui_blocksContext | Igui_blocksContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Igui_blocksContext);
		} else {
			return this.getRuleContext(i, Igui_blocksContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_inGameUIClass; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterInGameUIClass) {
			listener.enterInGameUIClass(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitInGameUIClass) {
			listener.exitInGameUIClass(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitInGameUIClass) {
			return visitor.visitInGameUIClass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Igui_blocksContext extends ParserRuleContext {
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public ingui_block_properties(): Ingui_block_propertiesContext[];
	public ingui_block_properties(i: number): Ingui_block_propertiesContext;
	public ingui_block_properties(i?: number): Ingui_block_propertiesContext | Ingui_block_propertiesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Ingui_block_propertiesContext);
		} else {
			return this.getRuleContext(i, Ingui_block_propertiesContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_igui_blocks; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterIgui_blocks) {
			listener.enterIgui_blocks(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitIgui_blocks) {
			listener.exitIgui_blocks(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitIgui_blocks) {
			return visitor.visitIgui_blocks(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Ingui_block_propertiesContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.ID, 0); }
	public PROCENT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.PROCENT, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.INT, 0); }
	public R(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.R, 0); }
	public G(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.G, 0); }
	public B(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.B, 0); }
	public A(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.A, 0); }
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.BOOLEAN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_ingui_block_properties; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterIngui_block_properties) {
			listener.enterIngui_block_properties(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitIngui_block_properties) {
			listener.exitIngui_block_properties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitIngui_block_properties) {
			return visitor.visitIngui_block_properties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocomotorClassContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public locomotor_properties(): Locomotor_propertiesContext[];
	public locomotor_properties(i: number): Locomotor_propertiesContext;
	public locomotor_properties(i?: number): Locomotor_propertiesContext | Locomotor_propertiesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Locomotor_propertiesContext);
		} else {
			return this.getRuleContext(i, Locomotor_propertiesContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_locomotorClass; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterLocomotorClass) {
			listener.enterLocomotorClass(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitLocomotorClass) {
			listener.exitLocomotorClass(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitLocomotorClass) {
			return visitor.visitLocomotorClass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Locomotor_propertiesContext extends ParserRuleContext {
	public locomotor_surface_property(): Locomotor_surface_propertyContext | undefined {
		return this.tryGetRuleContext(0, Locomotor_surface_propertyContext);
	}
	public locomotor_zbehavior_property(): Locomotor_zbehavior_propertyContext | undefined {
		return this.tryGetRuleContext(0, Locomotor_zbehavior_propertyContext);
	}
	public locomotor_appereance_property(): Locomotor_appereance_propertyContext | undefined {
		return this.tryGetRuleContext(0, Locomotor_appereance_propertyContext);
	}
	public locomotor_movepriority_property(): Locomotor_movepriority_propertyContext | undefined {
		return this.tryGetRuleContext(0, Locomotor_movepriority_propertyContext);
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.EQ, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.INT, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.FLOAT, 0); }
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.BOOLEAN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_locomotor_properties; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterLocomotor_properties) {
			listener.enterLocomotor_properties(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitLocomotor_properties) {
			listener.exitLocomotor_properties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitLocomotor_properties) {
			return visitor.visitLocomotor_properties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Locomotor_surface_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public surface_value(): Surface_valueContext[];
	public surface_value(i: number): Surface_valueContext;
	public surface_value(i?: number): Surface_valueContext | Surface_valueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Surface_valueContext);
		} else {
			return this.getRuleContext(i, Surface_valueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_locomotor_surface_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterLocomotor_surface_property) {
			listener.enterLocomotor_surface_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitLocomotor_surface_property) {
			listener.exitLocomotor_surface_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitLocomotor_surface_property) {
			return visitor.visitLocomotor_surface_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Locomotor_zbehavior_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public zbehavior_value(): Zbehavior_valueContext {
		return this.getRuleContext(0, Zbehavior_valueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_locomotor_zbehavior_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterLocomotor_zbehavior_property) {
			listener.enterLocomotor_zbehavior_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitLocomotor_zbehavior_property) {
			listener.exitLocomotor_zbehavior_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitLocomotor_zbehavior_property) {
			return visitor.visitLocomotor_zbehavior_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Locomotor_appereance_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public appereance_value(): Appereance_valueContext {
		return this.getRuleContext(0, Appereance_valueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_locomotor_appereance_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterLocomotor_appereance_property) {
			listener.enterLocomotor_appereance_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitLocomotor_appereance_property) {
			listener.exitLocomotor_appereance_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitLocomotor_appereance_property) {
			return visitor.visitLocomotor_appereance_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Locomotor_movepriority_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public movepriority_value(): Movepriority_valueContext {
		return this.getRuleContext(0, Movepriority_valueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_locomotor_movepriority_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterLocomotor_movepriority_property) {
			listener.enterLocomotor_movepriority_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitLocomotor_movepriority_property) {
			listener.exitLocomotor_movepriority_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitLocomotor_movepriority_property) {
			return visitor.visitLocomotor_movepriority_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Surface_valueContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_surface_value; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterSurface_value) {
			listener.enterSurface_value(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitSurface_value) {
			listener.exitSurface_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitSurface_value) {
			return visitor.visitSurface_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Zbehavior_valueContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_zbehavior_value; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterZbehavior_value) {
			listener.enterZbehavior_value(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitZbehavior_value) {
			listener.exitZbehavior_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitZbehavior_value) {
			return visitor.visitZbehavior_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Appereance_valueContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_appereance_value; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterAppereance_value) {
			listener.enterAppereance_value(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitAppereance_value) {
			listener.exitAppereance_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitAppereance_value) {
			return visitor.visitAppereance_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Movepriority_valueContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_movepriority_value; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterMovepriority_value) {
			listener.enterMovepriority_value(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitMovepriority_value) {
			listener.exitMovepriority_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitMovepriority_value) {
			return visitor.visitMovepriority_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WeaponClassContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public weapon_properties(): Weapon_propertiesContext[];
	public weapon_properties(i: number): Weapon_propertiesContext;
	public weapon_properties(i?: number): Weapon_propertiesContext | Weapon_propertiesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Weapon_propertiesContext);
		} else {
			return this.getRuleContext(i, Weapon_propertiesContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_weaponClass; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterWeaponClass) {
			listener.enterWeaponClass(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitWeaponClass) {
			listener.exitWeaponClass(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitWeaponClass) {
			return visitor.visitWeaponClass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Weapon_propertiesContext extends ParserRuleContext {
	public weapon_damagetype_property(): Weapon_damagetype_propertyContext | undefined {
		return this.tryGetRuleContext(0, Weapon_damagetype_propertyContext);
	}
	public weapon_deathtype_property(): Weapon_deathtype_propertyContext | undefined {
		return this.tryGetRuleContext(0, Weapon_deathtype_propertyContext);
	}
	public weapon_damageaffects_property(): Weapon_damageaffects_propertyContext | undefined {
		return this.tryGetRuleContext(0, Weapon_damageaffects_propertyContext);
	}
	public weapon_weaponbonus_property(): Weapon_weaponbonus_propertyContext | undefined {
		return this.tryGetRuleContext(0, Weapon_weaponbonus_propertyContext);
	}
	public weapon_lasterbone_property(): Weapon_lasterbone_propertyContext | undefined {
		return this.tryGetRuleContext(0, Weapon_lasterbone_propertyContext);
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.EQ, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.INT, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.FLOAT, 0); }
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.BOOLEAN, 0); }
	public particlesystem_value(): Particlesystem_valueContext | undefined {
		return this.tryGetRuleContext(0, Particlesystem_valueContext);
	}
	public VETERENCY(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.VETERENCY, 0); }
	public object_value(): Object_valueContext | undefined {
		return this.tryGetRuleContext(0, Object_valueContext);
	}
	public fxlist_value(): Fxlist_valueContext | undefined {
		return this.tryGetRuleContext(0, Fxlist_valueContext);
	}
	public audioevent_value(): Audioevent_valueContext | undefined {
		return this.tryGetRuleContext(0, Audioevent_valueContext);
	}
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapIniParser.ID);
		} else {
			return this.getToken(MapIniParser.ID, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_weapon_properties; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterWeapon_properties) {
			listener.enterWeapon_properties(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitWeapon_properties) {
			listener.exitWeapon_properties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitWeapon_properties) {
			return visitor.visitWeapon_properties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Weapon_damagetype_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public damageType_value(): DamageType_valueContext {
		return this.getRuleContext(0, DamageType_valueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_weapon_damagetype_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterWeapon_damagetype_property) {
			listener.enterWeapon_damagetype_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitWeapon_damagetype_property) {
			listener.exitWeapon_damagetype_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitWeapon_damagetype_property) {
			return visitor.visitWeapon_damagetype_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Weapon_deathtype_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public deathType_value(): DeathType_valueContext {
		return this.getRuleContext(0, DeathType_valueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_weapon_deathtype_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterWeapon_deathtype_property) {
			listener.enterWeapon_deathtype_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitWeapon_deathtype_property) {
			listener.exitWeapon_deathtype_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitWeapon_deathtype_property) {
			return visitor.visitWeapon_deathtype_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Weapon_damageaffects_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public damageAffects_value(): DamageAffects_valueContext[];
	public damageAffects_value(i: number): DamageAffects_valueContext;
	public damageAffects_value(i?: number): DamageAffects_valueContext | DamageAffects_valueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DamageAffects_valueContext);
		} else {
			return this.getRuleContext(i, DamageAffects_valueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_weapon_damageaffects_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterWeapon_damageaffects_property) {
			listener.enterWeapon_damageaffects_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitWeapon_damageaffects_property) {
			listener.exitWeapon_damageaffects_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitWeapon_damageaffects_property) {
			return visitor.visitWeapon_damageaffects_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Weapon_weaponbonus_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public weapon_weaponbonus_condition_value(): Weapon_weaponbonus_condition_valueContext {
		return this.getRuleContext(0, Weapon_weaponbonus_condition_valueContext);
	}
	public weapon_weaponbonus_bonus_value(): Weapon_weaponbonus_bonus_valueContext {
		return this.getRuleContext(0, Weapon_weaponbonus_bonus_valueContext);
	}
	public PROCENT(): TerminalNode { return this.getToken(MapIniParser.PROCENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_weapon_weaponbonus_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterWeapon_weaponbonus_property) {
			listener.enterWeapon_weaponbonus_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitWeapon_weaponbonus_property) {
			listener.exitWeapon_weaponbonus_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitWeapon_weaponbonus_property) {
			return visitor.visitWeapon_weaponbonus_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Weapon_lasterbone_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public damageType_value(): DamageType_valueContext {
		return this.getRuleContext(0, DamageType_valueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_weapon_lasterbone_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterWeapon_lasterbone_property) {
			listener.enterWeapon_lasterbone_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitWeapon_lasterbone_property) {
			listener.exitWeapon_lasterbone_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitWeapon_lasterbone_property) {
			return visitor.visitWeapon_lasterbone_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Weapon_weaponbonus_condition_valueContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_weapon_weaponbonus_condition_value; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterWeapon_weaponbonus_condition_value) {
			listener.enterWeapon_weaponbonus_condition_value(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitWeapon_weaponbonus_condition_value) {
			listener.exitWeapon_weaponbonus_condition_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitWeapon_weaponbonus_condition_value) {
			return visitor.visitWeapon_weaponbonus_condition_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Weapon_weaponbonus_bonus_valueContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_weapon_weaponbonus_bonus_value; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterWeapon_weaponbonus_bonus_value) {
			listener.enterWeapon_weaponbonus_bonus_value(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitWeapon_weaponbonus_bonus_value) {
			listener.exitWeapon_weaponbonus_bonus_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitWeapon_weaponbonus_bonus_value) {
			return visitor.visitWeapon_weaponbonus_bonus_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DamageType_valueContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_damageType_value; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterDamageType_value) {
			listener.enterDamageType_value(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitDamageType_value) {
			listener.exitDamageType_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitDamageType_value) {
			return visitor.visitDamageType_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeathType_valueContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_deathType_value; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterDeathType_value) {
			listener.enterDeathType_value(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitDeathType_value) {
			listener.exitDeathType_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitDeathType_value) {
			return visitor.visitDeathType_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DamageAffects_valueContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_damageAffects_value; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterDamageAffects_value) {
			listener.enterDamageAffects_value(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitDamageAffects_value) {
			listener.exitDamageAffects_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitDamageAffects_value) {
			return visitor.visitDamageAffects_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WeatherClassContext extends ParserRuleContext {
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public weather_properties(): Weather_propertiesContext[];
	public weather_properties(i: number): Weather_propertiesContext;
	public weather_properties(i?: number): Weather_propertiesContext | Weather_propertiesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Weather_propertiesContext);
		} else {
			return this.getRuleContext(i, Weather_propertiesContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_weatherClass; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterWeatherClass) {
			listener.enterWeatherClass(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitWeatherClass) {
			listener.exitWeatherClass(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitWeatherClass) {
			return visitor.visitWeatherClass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Weather_propertiesContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.BOOLEAN, 0); }
	public file(): FileContext | undefined {
		return this.tryGetRuleContext(0, FileContext);
	}
	public INT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.INT, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.FLOAT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_weather_properties; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterWeather_properties) {
			listener.enterWeather_properties(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitWeather_properties) {
			listener.exitWeather_properties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitWeather_properties) {
			return visitor.visitWeather_properties(this);
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
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
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
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
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
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
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
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
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
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
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
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
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
	public cursorname_value(): Cursorname_valueContext {
		return this.getRuleContext(0, Cursorname_valueContext);
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


export class Cb_maxshotsfire_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public INT(): TerminalNode { return this.getToken(MapIniParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_cb_maxshotsfire_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterCb_maxshotsfire_property) {
			listener.enterCb_maxshotsfire_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitCb_maxshotsfire_property) {
			listener.exitCb_maxshotsfire_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitCb_maxshotsfire_property) {
			return visitor.visitCb_maxshotsfire_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dfx_throttletime_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public damageType_value(): DamageType_valueContext {
		return this.getRuleContext(0, DamageType_valueContext);
	}
	public INT(): TerminalNode { return this.getToken(MapIniParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_dfx_throttletime_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterDfx_throttletime_property) {
			listener.enterDfx_throttletime_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitDfx_throttletime_property) {
			listener.exitDfx_throttletime_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitDfx_throttletime_property) {
			return visitor.visitDfx_throttletime_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dfx_amountformajorfx_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public damageType_value(): DamageType_valueContext {
		return this.getRuleContext(0, DamageType_valueContext);
	}
	public FLOAT(): TerminalNode { return this.getToken(MapIniParser.FLOAT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_dfx_amountformajorfx_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterDfx_amountformajorfx_property) {
			listener.enterDfx_amountformajorfx_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitDfx_amountformajorfx_property) {
			listener.exitDfx_amountformajorfx_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitDfx_amountformajorfx_property) {
			return visitor.visitDfx_amountformajorfx_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dfx_majorfx_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public damageType_value(): DamageType_valueContext {
		return this.getRuleContext(0, DamageType_valueContext);
	}
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_dfx_majorfx_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterDfx_majorfx_property) {
			listener.enterDfx_majorfx_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitDfx_majorfx_property) {
			listener.exitDfx_majorfx_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitDfx_majorfx_property) {
			return visitor.visitDfx_majorfx_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dfx_minorfx_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public damageType_value(): DamageType_valueContext {
		return this.getRuleContext(0, DamageType_valueContext);
	}
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_dfx_minorfx_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterDfx_minorfx_property) {
			listener.enterDfx_minorfx_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitDfx_minorfx_property) {
			listener.exitDfx_minorfx_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitDfx_minorfx_property) {
			return visitor.visitDfx_minorfx_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dfx_vetmajorfx_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public VETERENCY(): TerminalNode { return this.getToken(MapIniParser.VETERENCY, 0); }
	public damageType_value(): DamageType_valueContext {
		return this.getRuleContext(0, DamageType_valueContext);
	}
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_dfx_vetmajorfx_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterDfx_vetmajorfx_property) {
			listener.enterDfx_vetmajorfx_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitDfx_vetmajorfx_property) {
			listener.exitDfx_vetmajorfx_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitDfx_vetmajorfx_property) {
			return visitor.visitDfx_vetmajorfx_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dfx_vetminorfx_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public VETERENCY(): TerminalNode { return this.getToken(MapIniParser.VETERENCY, 0); }
	public damageType_value(): DamageType_valueContext {
		return this.getRuleContext(0, DamageType_valueContext);
	}
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_dfx_vetminorfx_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterDfx_vetminorfx_property) {
			listener.enterDfx_vetminorfx_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitDfx_vetminorfx_property) {
			listener.exitDfx_vetminorfx_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitDfx_vetminorfx_property) {
			return visitor.visitDfx_vetminorfx_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dgi_useplayercolor_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public BOOLEAN(): TerminalNode { return this.getToken(MapIniParser.BOOLEAN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_dgi_useplayercolor_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterDgi_useplayercolor_property) {
			listener.enterDgi_useplayercolor_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitDgi_useplayercolor_property) {
			listener.exitDgi_useplayercolor_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitDgi_useplayercolor_property) {
			return visitor.visitDgi_useplayercolor_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dgi_colorfortext_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public R(): TerminalNode { return this.getToken(MapIniParser.R, 0); }
	public G(): TerminalNode { return this.getToken(MapIniParser.G, 0); }
	public B(): TerminalNode { return this.getToken(MapIniParser.B, 0); }
	public A(): TerminalNode { return this.getToken(MapIniParser.A, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_dgi_colorfortext_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterDgi_colorfortext_property) {
			listener.enterDgi_colorfortext_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitDgi_colorfortext_property) {
			listener.exitDgi_colorfortext_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitDgi_colorfortext_property) {
			return visitor.visitDgi_colorfortext_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dgi_colordropshadow_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public R(): TerminalNode { return this.getToken(MapIniParser.R, 0); }
	public G(): TerminalNode { return this.getToken(MapIniParser.G, 0); }
	public B(): TerminalNode { return this.getToken(MapIniParser.B, 0); }
	public A(): TerminalNode { return this.getToken(MapIniParser.A, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_dgi_colordropshadow_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterDgi_colordropshadow_property) {
			listener.enterDgi_colordropshadow_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitDgi_colordropshadow_property) {
			listener.exitDgi_colordropshadow_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitDgi_colordropshadow_property) {
			return visitor.visitDgi_colordropshadow_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dgi_dropshadowoffsetX_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public INT(): TerminalNode { return this.getToken(MapIniParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_dgi_dropshadowoffsetX_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterDgi_dropshadowoffsetX_property) {
			listener.enterDgi_dropshadowoffsetX_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitDgi_dropshadowoffsetX_property) {
			listener.exitDgi_dropshadowoffsetX_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitDgi_dropshadowoffsetX_property) {
			return visitor.visitDgi_dropshadowoffsetX_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dgi_dropshadowoffsetY_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public INT(): TerminalNode { return this.getToken(MapIniParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_dgi_dropshadowoffsetY_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterDgi_dropshadowoffsetY_property) {
			listener.enterDgi_dropshadowoffsetY_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitDgi_dropshadowoffsetY_property) {
			listener.exitDgi_dropshadowoffsetY_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitDgi_dropshadowoffsetY_property) {
			return visitor.visitDgi_dropshadowoffsetY_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dgi_fontname_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapIniParser.ID);
		} else {
			return this.getToken(MapIniParser.ID, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_dgi_fontname_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterDgi_fontname_property) {
			listener.enterDgi_fontname_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitDgi_fontname_property) {
			listener.exitDgi_fontname_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitDgi_fontname_property) {
			return visitor.visitDgi_fontname_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dgi_fontsize_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public INT(): TerminalNode { return this.getToken(MapIniParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_dgi_fontsize_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterDgi_fontsize_property) {
			listener.enterDgi_fontsize_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitDgi_fontsize_property) {
			listener.exitDgi_fontsize_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitDgi_fontsize_property) {
			return visitor.visitDgi_fontsize_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dgi_fontisbold_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public BOOLEAN(): TerminalNode { return this.getToken(MapIniParser.BOOLEAN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_dgi_fontisbold_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterDgi_fontisbold_property) {
			listener.enterDgi_fontisbold_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitDgi_fontisbold_property) {
			listener.exitDgi_fontisbold_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitDgi_fontisbold_property) {
			return visitor.visitDgi_fontisbold_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dgi_drawposXperc_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public PROCENT(): TerminalNode { return this.getToken(MapIniParser.PROCENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_dgi_drawposXperc_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterDgi_drawposXperc_property) {
			listener.enterDgi_drawposXperc_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitDgi_drawposXperc_property) {
			listener.exitDgi_drawposXperc_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitDgi_drawposXperc_property) {
			return visitor.visitDgi_drawposXperc_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dgi_drawposYperc_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public INT(): TerminalNode { return this.getToken(MapIniParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_dgi_drawposYperc_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterDgi_drawposYperc_property) {
			listener.enterDgi_drawposYperc_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitDgi_drawposYperc_property) {
			listener.exitDgi_drawposYperc_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitDgi_drawposYperc_property) {
			return visitor.visitDgi_drawposYperc_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_ps_name_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public particlesystem_value(): Particlesystem_valueContext {
		return this.getRuleContext(0, Particlesystem_valueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_ps_name_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_ps_name_property) {
			listener.enterFxlist_ps_name_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_ps_name_property) {
			listener.exitFxlist_ps_name_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_ps_name_property) {
			return visitor.visitFxlist_ps_name_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_ps_count_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.INT, 0); }
	public rand_value(): Rand_valueContext | undefined {
		return this.tryGetRuleContext(0, Rand_valueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_ps_count_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_ps_count_property) {
			listener.enterFxlist_ps_count_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_ps_count_property) {
			listener.exitFxlist_ps_count_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_ps_count_property) {
			return visitor.visitFxlist_ps_count_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_ps_offset_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public coord3D(): Coord3DContext {
		return this.getRuleContext(0, Coord3DContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_ps_offset_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_ps_offset_property) {
			listener.enterFxlist_ps_offset_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_ps_offset_property) {
			listener.exitFxlist_ps_offset_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_ps_offset_property) {
			return visitor.visitFxlist_ps_offset_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_ps_radius_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public rand_value(): Rand_valueContext | undefined {
		return this.tryGetRuleContext(0, Rand_valueContext);
	}
	public INT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.INT, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.FLOAT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_ps_radius_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_ps_radius_property) {
			listener.enterFxlist_ps_radius_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_ps_radius_property) {
			listener.exitFxlist_ps_radius_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_ps_radius_property) {
			return visitor.visitFxlist_ps_radius_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_ps_height_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public rand_value(): Rand_valueContext | undefined {
		return this.tryGetRuleContext(0, Rand_valueContext);
	}
	public INT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.INT, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.FLOAT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_ps_height_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_ps_height_property) {
			listener.enterFxlist_ps_height_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_ps_height_property) {
			listener.exitFxlist_ps_height_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_ps_height_property) {
			return visitor.visitFxlist_ps_height_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_ps_initialDelay_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public rand_value(): Rand_valueContext {
		return this.getRuleContext(0, Rand_valueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_ps_initialDelay_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_ps_initialDelay_property) {
			listener.enterFxlist_ps_initialDelay_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_ps_initialDelay_property) {
			listener.exitFxlist_ps_initialDelay_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_ps_initialDelay_property) {
			return visitor.visitFxlist_ps_initialDelay_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_ps_rotateX_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public INT(): TerminalNode { return this.getToken(MapIniParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_ps_rotateX_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_ps_rotateX_property) {
			listener.enterFxlist_ps_rotateX_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_ps_rotateX_property) {
			listener.exitFxlist_ps_rotateX_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_ps_rotateX_property) {
			return visitor.visitFxlist_ps_rotateX_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_ps_rotatey_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public INT(): TerminalNode { return this.getToken(MapIniParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_ps_rotatey_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_ps_rotatey_property) {
			listener.enterFxlist_ps_rotatey_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_ps_rotatey_property) {
			listener.exitFxlist_ps_rotatey_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_ps_rotatey_property) {
			return visitor.visitFxlist_ps_rotatey_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_ps_rotateZ_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public INT(): TerminalNode { return this.getToken(MapIniParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_ps_rotateZ_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_ps_rotateZ_property) {
			listener.enterFxlist_ps_rotateZ_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_ps_rotateZ_property) {
			listener.exitFxlist_ps_rotateZ_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_ps_rotateZ_property) {
			return visitor.visitFxlist_ps_rotateZ_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_ps_orienttoobject_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public BOOLEAN(): TerminalNode { return this.getToken(MapIniParser.BOOLEAN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_ps_orienttoobject_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_ps_orienttoobject_property) {
			listener.enterFxlist_ps_orienttoobject_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_ps_orienttoobject_property) {
			listener.exitFxlist_ps_orienttoobject_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_ps_orienttoobject_property) {
			return visitor.visitFxlist_ps_orienttoobject_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_ps_ricochet_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public BOOLEAN(): TerminalNode { return this.getToken(MapIniParser.BOOLEAN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_ps_ricochet_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_ps_ricochet_property) {
			listener.enterFxlist_ps_ricochet_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_ps_ricochet_property) {
			listener.exitFxlist_ps_ricochet_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_ps_ricochet_property) {
			return visitor.visitFxlist_ps_ricochet_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_ps_usecallerradius_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public BOOLEAN(): TerminalNode { return this.getToken(MapIniParser.BOOLEAN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_ps_usecallerradius_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_ps_usecallerradius_property) {
			listener.enterFxlist_ps_usecallerradius_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_ps_usecallerradius_property) {
			listener.exitFxlist_ps_usecallerradius_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_ps_usecallerradius_property) {
			return visitor.visitFxlist_ps_usecallerradius_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_ps_attachtoobject_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public BOOLEAN(): TerminalNode { return this.getToken(MapIniParser.BOOLEAN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_ps_attachtoobject_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_ps_attachtoobject_property) {
			listener.enterFxlist_ps_attachtoobject_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_ps_attachtoobject_property) {
			listener.exitFxlist_ps_attachtoobject_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_ps_attachtoobject_property) {
			return visitor.visitFxlist_ps_attachtoobject_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_ps_creategroundheight_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public BOOLEAN(): TerminalNode { return this.getToken(MapIniParser.BOOLEAN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_ps_creategroundheight_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_ps_creategroundheight_property) {
			listener.enterFxlist_ps_creategroundheight_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_ps_creategroundheight_property) {
			listener.exitFxlist_ps_creategroundheight_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_ps_creategroundheight_property) {
			return visitor.visitFxlist_ps_creategroundheight_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_sound_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public audioevent_value(): Audioevent_valueContext {
		return this.getRuleContext(0, Audioevent_valueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_sound_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_sound_property) {
			listener.enterFxlist_sound_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_sound_property) {
			listener.exitFxlist_sound_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_sound_property) {
			return visitor.visitFxlist_sound_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_rayeffect_primaryoffset_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public coord3D(): Coord3DContext {
		return this.getRuleContext(0, Coord3DContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_rayeffect_primaryoffset_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_rayeffect_primaryoffset_property) {
			listener.enterFxlist_rayeffect_primaryoffset_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_rayeffect_primaryoffset_property) {
			listener.exitFxlist_rayeffect_primaryoffset_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_rayeffect_primaryoffset_property) {
			return visitor.visitFxlist_rayeffect_primaryoffset_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_rayeffect_secondaryoffset_propretyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public coord3D(): Coord3DContext {
		return this.getRuleContext(0, Coord3DContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_rayeffect_secondaryoffset_proprety; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_rayeffect_secondaryoffset_proprety) {
			listener.enterFxlist_rayeffect_secondaryoffset_proprety(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_rayeffect_secondaryoffset_proprety) {
			listener.exitFxlist_rayeffect_secondaryoffset_proprety(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_rayeffect_secondaryoffset_proprety) {
			return visitor.visitFxlist_rayeffect_secondaryoffset_proprety(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_tracer_name_propetyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public object_value(): Object_valueContext {
		return this.getRuleContext(0, Object_valueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_tracer_name_propety; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_tracer_name_propety) {
			listener.enterFxlist_tracer_name_propety(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_tracer_name_propety) {
			listener.exitFxlist_tracer_name_propety(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_tracer_name_propety) {
			return visitor.visitFxlist_tracer_name_propety(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_tracer_bonename_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_tracer_bonename_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_tracer_bonename_property) {
			listener.enterFxlist_tracer_bonename_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_tracer_bonename_property) {
			listener.exitFxlist_tracer_bonename_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_tracer_bonename_property) {
			return visitor.visitFxlist_tracer_bonename_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_tracer_speed_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.INT, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.FLOAT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_tracer_speed_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_tracer_speed_property) {
			listener.enterFxlist_tracer_speed_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_tracer_speed_property) {
			listener.exitFxlist_tracer_speed_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_tracer_speed_property) {
			return visitor.visitFxlist_tracer_speed_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_tracer_decayat_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.INT, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.FLOAT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_tracer_decayat_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_tracer_decayat_property) {
			listener.enterFxlist_tracer_decayat_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_tracer_decayat_property) {
			listener.exitFxlist_tracer_decayat_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_tracer_decayat_property) {
			return visitor.visitFxlist_tracer_decayat_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_tracer_length_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.INT, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.FLOAT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_tracer_length_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_tracer_length_property) {
			listener.enterFxlist_tracer_length_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_tracer_length_property) {
			listener.exitFxlist_tracer_length_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_tracer_length_property) {
			return visitor.visitFxlist_tracer_length_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_tracer_width_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.INT, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.FLOAT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_tracer_width_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_tracer_width_property) {
			listener.enterFxlist_tracer_width_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_tracer_width_property) {
			listener.exitFxlist_tracer_width_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_tracer_width_property) {
			return visitor.visitFxlist_tracer_width_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_tracer_color_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public R(): TerminalNode { return this.getToken(MapIniParser.R, 0); }
	public G(): TerminalNode { return this.getToken(MapIniParser.G, 0); }
	public B(): TerminalNode { return this.getToken(MapIniParser.B, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_tracer_color_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_tracer_color_property) {
			listener.enterFxlist_tracer_color_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_tracer_color_property) {
			listener.exitFxlist_tracer_color_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_tracer_color_property) {
			return visitor.visitFxlist_tracer_color_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_tracer_probability_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.INT, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.FLOAT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_tracer_probability_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_tracer_probability_property) {
			listener.enterFxlist_tracer_probability_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_tracer_probability_property) {
			listener.exitFxlist_tracer_probability_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_tracer_probability_property) {
			return visitor.visitFxlist_tracer_probability_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_lightpulse_color_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public R(): TerminalNode { return this.getToken(MapIniParser.R, 0); }
	public G(): TerminalNode { return this.getToken(MapIniParser.G, 0); }
	public B(): TerminalNode { return this.getToken(MapIniParser.B, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_lightpulse_color_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_lightpulse_color_property) {
			listener.enterFxlist_lightpulse_color_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_lightpulse_color_property) {
			listener.exitFxlist_lightpulse_color_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_lightpulse_color_property) {
			return visitor.visitFxlist_lightpulse_color_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_lightpulse_radius_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.INT, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.FLOAT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_lightpulse_radius_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_lightpulse_radius_property) {
			listener.enterFxlist_lightpulse_radius_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_lightpulse_radius_property) {
			listener.exitFxlist_lightpulse_radius_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_lightpulse_radius_property) {
			return visitor.visitFxlist_lightpulse_radius_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_lightpulse_radiuspercentobjectsize_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public PROCENT(): TerminalNode { return this.getToken(MapIniParser.PROCENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_lightpulse_radiuspercentobjectsize_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_lightpulse_radiuspercentobjectsize_property) {
			listener.enterFxlist_lightpulse_radiuspercentobjectsize_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_lightpulse_radiuspercentobjectsize_property) {
			listener.exitFxlist_lightpulse_radiuspercentobjectsize_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_lightpulse_radiuspercentobjectsize_property) {
			return visitor.visitFxlist_lightpulse_radiuspercentobjectsize_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_lightpulse_increasetime_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public INT(): TerminalNode { return this.getToken(MapIniParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_lightpulse_increasetime_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_lightpulse_increasetime_property) {
			listener.enterFxlist_lightpulse_increasetime_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_lightpulse_increasetime_property) {
			listener.exitFxlist_lightpulse_increasetime_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_lightpulse_increasetime_property) {
			return visitor.visitFxlist_lightpulse_increasetime_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_lightpulse_decreasetime_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public INT(): TerminalNode { return this.getToken(MapIniParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_lightpulse_decreasetime_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_lightpulse_decreasetime_property) {
			listener.enterFxlist_lightpulse_decreasetime_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_lightpulse_decreasetime_property) {
			listener.exitFxlist_lightpulse_decreasetime_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_lightpulse_decreasetime_property) {
			return visitor.visitFxlist_lightpulse_decreasetime_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_viewshake_type_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_viewshake_type_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_viewshake_type_property) {
			listener.enterFxlist_viewshake_type_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_viewshake_type_property) {
			listener.exitFxlist_viewshake_type_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_viewshake_type_property) {
			return visitor.visitFxlist_viewshake_type_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_scorch_type_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_scorch_type_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_scorch_type_property) {
			listener.enterFxlist_scorch_type_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_scorch_type_property) {
			listener.exitFxlist_scorch_type_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_scorch_type_property) {
			return visitor.visitFxlist_scorch_type_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_scorch_radius_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.INT, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.FLOAT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_scorch_radius_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_scorch_radius_property) {
			listener.enterFxlist_scorch_radius_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_scorch_radius_property) {
			listener.exitFxlist_scorch_radius_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_scorch_radius_property) {
			return visitor.visitFxlist_scorch_radius_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_atbonepos_fx_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public fxlist_value(): Fxlist_valueContext {
		return this.getRuleContext(0, Fxlist_valueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_atbonepos_fx_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_atbonepos_fx_property) {
			listener.enterFxlist_atbonepos_fx_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_atbonepos_fx_property) {
			listener.exitFxlist_atbonepos_fx_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_atbonepos_fx_property) {
			return visitor.visitFxlist_atbonepos_fx_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_atbonepos_bonename_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_atbonepos_bonename_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_atbonepos_bonename_property) {
			listener.enterFxlist_atbonepos_bonename_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_atbonepos_bonename_property) {
			listener.exitFxlist_atbonepos_bonename_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_atbonepos_bonename_property) {
			return visitor.visitFxlist_atbonepos_bonename_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_atbonepos_orienttoobject_propertyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public BOOLEAN(): TerminalNode { return this.getToken(MapIniParser.BOOLEAN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_atbonepos_orienttoobject_property; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_atbonepos_orienttoobject_property) {
			listener.enterFxlist_atbonepos_orienttoobject_property(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_atbonepos_orienttoobject_property) {
			listener.exitFxlist_atbonepos_orienttoobject_property(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_atbonepos_orienttoobject_property) {
			return visitor.visitFxlist_atbonepos_orienttoobject_property(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_name_object_propetyContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public object_value(): Object_valueContext {
		return this.getRuleContext(0, Object_valueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_name_object_propety; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_name_object_propety) {
			listener.enterFxlist_name_object_propety(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_name_object_propety) {
			listener.exitFxlist_name_object_propety(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_name_object_propety) {
			return visitor.visitFxlist_name_object_propety(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Igui_propertiesContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(MapIniParser.EQ, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.INT, 0); }
	public R(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.R, 0); }
	public G(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.G, 0); }
	public B(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.B, 0); }
	public XCOORD(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.XCOORD, 0); }
	public YCOORD(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.YCOORD, 0); }
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapIniParser.ID);
		} else {
			return this.getToken(MapIniParser.ID, i);
		}
	}
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.BOOLEAN, 0); }
	public A(): TerminalNode | undefined { return this.tryGetToken(MapIniParser.A, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_igui_properties; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterIgui_properties) {
			listener.enterIgui_properties(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitIgui_properties) {
			listener.exitIgui_properties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitIgui_properties) {
			return visitor.visitIgui_properties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Faction_valueContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_faction_value; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFaction_value) {
			listener.enterFaction_value(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFaction_value) {
			listener.exitFaction_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFaction_value) {
			return visitor.visitFaction_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Commandbutton_valueContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
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
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
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
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
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
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
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


export class Particlesystem_valueContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_particlesystem_value; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterParticlesystem_value) {
			listener.enterParticlesystem_value(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitParticlesystem_value) {
			listener.exitParticlesystem_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitParticlesystem_value) {
			return visitor.visitParticlesystem_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fxlist_valueContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_fxlist_value; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterFxlist_value) {
			listener.enterFxlist_value(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitFxlist_value) {
			listener.exitFxlist_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitFxlist_value) {
			return visitor.visitFxlist_value(this);
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
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
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
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
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
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
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
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
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
	public ID(): TerminalNode { return this.getToken(MapIniParser.ID, 0); }
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


export class Rand_valueContext extends ParserRuleContext {
	public INT(): TerminalNode[];
	public INT(i: number): TerminalNode;
	public INT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapIniParser.INT);
		} else {
			return this.getToken(MapIniParser.INT, i);
		}
	}
	public DISTRIBUTION_FORM(): TerminalNode { return this.getToken(MapIniParser.DISTRIBUTION_FORM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_rand_value; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterRand_value) {
			listener.enterRand_value(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitRand_value) {
			listener.exitRand_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitRand_value) {
			return visitor.visitRand_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Coord3DContext extends ParserRuleContext {
	public XCOORD(): TerminalNode { return this.getToken(MapIniParser.XCOORD, 0); }
	public YCOORD(): TerminalNode { return this.getToken(MapIniParser.YCOORD, 0); }
	public ZCOORD(): TerminalNode { return this.getToken(MapIniParser.ZCOORD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapIniParser.RULE_coord3D; }
	// @Override
	public enterRule(listener: MapIniListener): void {
		if (listener.enterCoord3D) {
			listener.enterCoord3D(this);
		}
	}
	// @Override
	public exitRule(listener: MapIniListener): void {
		if (listener.exitCoord3D) {
			listener.exitCoord3D(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapIniVisitor<Result>): Result {
		if (visitor.visitCoord3D) {
			return visitor.visitCoord3D(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


