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
    public static readonly T__347 = 348;
    public static readonly T__348 = 349;
    public static readonly T__349 = 350;
    public static readonly T__350 = 351;
    public static readonly T__351 = 352;
    public static readonly T__352 = 353;
    public static readonly T__353 = 354;
    public static readonly T__354 = 355;
    public static readonly T__355 = 356;
    public static readonly T__356 = 357;
    public static readonly T__357 = 358;
    public static readonly T__358 = 359;
    public static readonly T__359 = 360;
    public static readonly T__360 = 361;
    public static readonly T__361 = 362;
    public static readonly T__362 = 363;
    public static readonly T__363 = 364;
    public static readonly T__364 = 365;
    public static readonly T__365 = 366;
    public static readonly T__366 = 367;
    public static readonly T__367 = 368;
    public static readonly T__368 = 369;
    public static readonly T__369 = 370;
    public static readonly T__370 = 371;
    public static readonly T__371 = 372;
    public static readonly T__372 = 373;
    public static readonly T__373 = 374;
    public static readonly T__374 = 375;
    public static readonly T__375 = 376;
    public static readonly T__376 = 377;
    public static readonly T__377 = 378;
    public static readonly T__378 = 379;
    public static readonly T__379 = 380;
    public static readonly T__380 = 381;
    public static readonly T__381 = 382;
    public static readonly T__382 = 383;
    public static readonly T__383 = 384;
    public static readonly T__384 = 385;
    public static readonly T__385 = 386;
    public static readonly T__386 = 387;
    public static readonly T__387 = 388;
    public static readonly T__388 = 389;
    public static readonly T__389 = 390;
    public static readonly T__390 = 391;
    public static readonly T__391 = 392;
    public static readonly T__392 = 393;
    public static readonly T__393 = 394;
    public static readonly T__394 = 395;
    public static readonly T__395 = 396;
    public static readonly T__396 = 397;
    public static readonly T__397 = 398;
    public static readonly T__398 = 399;
    public static readonly T__399 = 400;
    public static readonly T__400 = 401;
    public static readonly T__401 = 402;
    public static readonly T__402 = 403;
    public static readonly T__403 = 404;
    public static readonly T__404 = 405;
    public static readonly T__405 = 406;
    public static readonly T__406 = 407;
    public static readonly T__407 = 408;
    public static readonly T__408 = 409;
    public static readonly T__409 = 410;
    public static readonly T__410 = 411;
    public static readonly T__411 = 412;
    public static readonly T__412 = 413;
    public static readonly T__413 = 414;
    public static readonly T__414 = 415;
    public static readonly T__415 = 416;
    public static readonly T__416 = 417;
    public static readonly T__417 = 418;
    public static readonly T__418 = 419;
    public static readonly T__419 = 420;
    public static readonly T__420 = 421;
    public static readonly T__421 = 422;
    public static readonly T__422 = 423;
    public static readonly T__423 = 424;
    public static readonly T__424 = 425;
    public static readonly T__425 = 426;
    public static readonly T__426 = 427;
    public static readonly T__427 = 428;
    public static readonly T__428 = 429;
    public static readonly T__429 = 430;
    public static readonly T__430 = 431;
    public static readonly T__431 = 432;
    public static readonly T__432 = 433;
    public static readonly T__433 = 434;
    public static readonly T__434 = 435;
    public static readonly T__435 = 436;
    public static readonly T__436 = 437;
    public static readonly T__437 = 438;
    public static readonly T__438 = 439;
    public static readonly T__439 = 440;
    public static readonly T__440 = 441;
    public static readonly T__441 = 442;
    public static readonly T__442 = 443;
    public static readonly T__443 = 444;
    public static readonly T__444 = 445;
    public static readonly T__445 = 446;
    public static readonly T__446 = 447;
    public static readonly T__447 = 448;
    public static readonly T__448 = 449;
    public static readonly T__449 = 450;
    public static readonly T__450 = 451;
    public static readonly T__451 = 452;
    public static readonly T__452 = 453;
    public static readonly T__453 = 454;
    public static readonly T__454 = 455;
    public static readonly T__455 = 456;
    public static readonly T__456 = 457;
    public static readonly T__457 = 458;
    public static readonly T__458 = 459;
    public static readonly T__459 = 460;
    public static readonly T__460 = 461;
    public static readonly T__461 = 462;
    public static readonly T__462 = 463;
    public static readonly T__463 = 464;
    public static readonly T__464 = 465;
    public static readonly T__465 = 466;
    public static readonly T__466 = 467;
    public static readonly T__467 = 468;
    public static readonly T__468 = 469;
    public static readonly T__469 = 470;
    public static readonly T__470 = 471;
    public static readonly T__471 = 472;
    public static readonly T__472 = 473;
    public static readonly T__473 = 474;
    public static readonly T__474 = 475;
    public static readonly T__475 = 476;
    public static readonly T__476 = 477;
    public static readonly T__477 = 478;
    public static readonly T__478 = 479;
    public static readonly T__479 = 480;
    public static readonly T__480 = 481;
    public static readonly T__481 = 482;
    public static readonly T__482 = 483;
    public static readonly T__483 = 484;
    public static readonly T__484 = 485;
    public static readonly T__485 = 486;
    public static readonly T__486 = 487;
    public static readonly T__487 = 488;
    public static readonly T__488 = 489;
    public static readonly T__489 = 490;
    public static readonly T__490 = 491;
    public static readonly T__491 = 492;
    public static readonly T__492 = 493;
    public static readonly T__493 = 494;
    public static readonly T__494 = 495;
    public static readonly T__495 = 496;
    public static readonly T__496 = 497;
    public static readonly T__497 = 498;
    public static readonly T__498 = 499;
    public static readonly T__499 = 500;
    public static readonly T__500 = 501;
    public static readonly T__501 = 502;
    public static readonly T__502 = 503;
    public static readonly T__503 = 504;
    public static readonly T__504 = 505;
    public static readonly T__505 = 506;
    public static readonly T__506 = 507;
    public static readonly T__507 = 508;
    public static readonly T__508 = 509;
    public static readonly T__509 = 510;
    public static readonly T__510 = 511;
    public static readonly NONE = 512;
    public static readonly INT = 513;
    public static readonly FLOAT = 514;
    public static readonly PROCENT = 515;
    public static readonly EQ = 516;
    public static readonly WEAPONSLOT = 517;
    public static readonly VETERENCY = 518;
    public static readonly XCOORD = 519;
    public static readonly YCOORD = 520;
    public static readonly ZCOORD = 521;
    public static readonly COORDLEFT = 522;
    public static readonly COORDTOP = 523;
    public static readonly COORDRIGHT = 524;
    public static readonly COORDBOTTOM = 525;
    public static readonly R = 526;
    public static readonly G = 527;
    public static readonly B = 528;
    public static readonly A = 529;
    public static readonly DISTRIBUTION_FORM = 530;
    public static readonly MANUAL = 531;
    public static readonly BOOLEAN = 532;
    public static readonly STRING = 533;
    public static readonly ID = 534;
    public static readonly NEWLINE = 535;
    public static readonly WS = 536;
    public static readonly COMMENT = 537;
    public static readonly RULE_program = 0;
    public static readonly RULE_classes = 1;
    public static readonly RULE_aiDataClass = 2;
    public static readonly RULE_aiDataClass_properties = 3;
    public static readonly RULE_aiDataClass_structureProperty = 4;
    public static readonly RULE_aiDataClass_teamProperty = 5;
    public static readonly RULE_aiDataClass_wealthProperty = 6;
    public static readonly RULE_aiDataClass_poorProperty = 7;
    public static readonly RULE_aiDataClass_structureWealthyProperty = 8;
    public static readonly RULE_aiDataClass_structurePoorProperty = 9;
    public static readonly RULE_aiDataClass_teamWealthProperty = 10;
    public static readonly RULE_aiDataClass_teamPoorProperty = 11;
    public static readonly RULE_aiDataClass_teamResourcesProperty = 12;
    public static readonly RULE_aiDataClass_guardInnerAIProperty = 13;
    public static readonly RULE_aiDataClass_guardOuterAIProperty = 14;
    public static readonly RULE_aiDataClass_guardInnerHumanProperty = 15;
    public static readonly RULE_aiDataClass_guardOuterHumanProperty = 16;
    public static readonly RULE_aiDataClass_guardChaseUnitsProperty = 17;
    public static readonly RULE_aiDataClass_guardEnemyScanProperty = 18;
    public static readonly RULE_aiDataClass_guardEnemyReturnScanProperty = 19;
    public static readonly RULE_aiDataClass_alertRangeModifierProperty = 20;
    public static readonly RULE_aiDataClass_aggressiveRangeModifierProperty = 21;
    public static readonly RULE_aiDataClass_attackProrityDistanceModifierProperty = 22;
    public static readonly RULE_aiDataClass_maxRecruitRadiusProperty = 23;
    public static readonly RULE_aiDataClass_skirmishBaseDefenseExtraDistanceProperty = 24;
    public static readonly RULE_aiDataClass_forceIdleMSECProperty = 25;
    public static readonly RULE_aiDataClass_forceSkirmishAIProperty = 26;
    public static readonly RULE_aiDataClass_rotateSkirmishBaseProperty = 27;
    public static readonly RULE_aiDataClass_attackUsesLineOfSightProperty = 28;
    public static readonly RULE_aiDataClass_enableRepulsorProperty = 29;
    public static readonly RULE_aiDataClass_repulsedDistanceProperty = 30;
    public static readonly RULE_aiDataClass_wallHeighProperty = 31;
    public static readonly RULE_aiDataClass_attackIgnoreInsignificantBuildingsProperty = 32;
    public static readonly RULE_aiDataClass_skirmishGroupFudgeDistanceProperty = 33;
    public static readonly RULE_aiDataClass_minInfantryGroupProperty = 34;
    public static readonly RULE_aiDataClass_minVehicleGroupProperty = 35;
    public static readonly RULE_aiDataClass_minDistanceGroupProperty = 36;
    public static readonly RULE_aiDataClass_distanceRequiresGroupProperty = 37;
    public static readonly RULE_aiDataClass_infantryPathfindDiameterProperty = 38;
    public static readonly RULE_aiDataClass_vehiclePathfindDiameterProperty = 39;
    public static readonly RULE_aiDataClass_supplycenterSaveDistanceProperty = 40;
    public static readonly RULE_aiDataClass_rebuildDelayTimeSecProperty = 41;
    public static readonly RULE_aiDataClass_aiDozerBoredRadiusProperty = 42;
    public static readonly RULE_aiDataClass_aiCrushesInfantryProperty = 43;
    public static readonly RULE_aiDataClass_maxRetaliationDistanceProperty = 44;
    public static readonly RULE_aiDataClass_retailationFriendsRadiusProperty = 45;
    public static readonly RULE_aiDataClass_sideInfo = 46;
    public static readonly RULE_aiDataClass_sideInfoProperties = 47;
    public static readonly RULE_aiDataClass_sideInfo_resourceGatheresEasy = 48;
    public static readonly RULE_aiDataClass_sideInfo_resourceGatheresMedium = 49;
    public static readonly RULE_aiDataClass_sideInfo_resourceGatheresHard = 50;
    public static readonly RULE_aiDataClass_sideInfo_baseDefenseStructure = 51;
    public static readonly RULE_aiDataClass_sideInfo_skillSet = 52;
    public static readonly RULE_aiDataClass_skirmishBuildList = 53;
    public static readonly RULE_aiDataClass_skirmishBuildList_structure = 54;
    public static readonly RULE_aiDataClass_skirmishBuildList_structure_properties = 55;
    public static readonly RULE_aiDataClass_skirmishBuildList_structure_locationProperty = 56;
    public static readonly RULE_aiDataClass_skirmishBuildList_structure_rebuildsProperty = 57;
    public static readonly RULE_aiDataClass_skirmishBuildList_structure_angleProperty = 58;
    public static readonly RULE_aiDataClass_skirmishBuildList_structure_initiallyBuildProperty = 59;
    public static readonly RULE_aiDataClass_skirmishBuildList_structure_automaticallyBuildProperty = 60;
    public static readonly RULE_mappedImageClass = 61;
    public static readonly RULE_mappedImageClassProperties = 62;
    public static readonly RULE_mappedImageClass_textureProperty = 63;
    public static readonly RULE_mappedImageClass_textureWidthProperty = 64;
    public static readonly RULE_mappedImageClass_textureHeightProperty = 65;
    public static readonly RULE_mappedImageClass_coordsProperty = 66;
    public static readonly RULE_mappedImageClass_statusProperty = 67;
    public static readonly RULE_animation2DClass = 68;
    public static readonly RULE_animation2DClassProperties = 69;
    public static readonly RULE_armorClass = 70;
    public static readonly RULE_armorClassProperties = 71;
    public static readonly RULE_commandButtonClass = 72;
    public static readonly RULE_commandButtonClassProperties = 73;
    public static readonly RULE_commandSetClass = 74;
    public static readonly RULE_commandSetClassProperty = 75;
    public static readonly RULE_damageFXClass = 76;
    public static readonly RULE_damageFXClassProperties = 77;
    public static readonly RULE_drawGroupInfoClass = 78;
    public static readonly RULE_drawgroupinfoProperties = 79;
    public static readonly RULE_fxListClass = 80;
    public static readonly RULE_fxlistblocks = 81;
    public static readonly RULE_fxlist_ps_block = 82;
    public static readonly RULE_fxlist_sound_block = 83;
    public static readonly RULE_fxlist_rayeffect_block = 84;
    public static readonly RULE_fxlist_tracer_block = 85;
    public static readonly RULE_fxlist_lightpulse_block = 86;
    public static readonly RULE_fxlist_viewshake_block = 87;
    public static readonly RULE_fxlist_terrainscorch_block = 88;
    public static readonly RULE_fxlist_fxlistatbone_block = 89;
    public static readonly RULE_inGameUIClass = 90;
    public static readonly RULE_igui_blocks = 91;
    public static readonly RULE_ingui_block_properties = 92;
    public static readonly RULE_locomotorClass = 93;
    public static readonly RULE_locomotor_properties = 94;
    public static readonly RULE_locomotor_surface_property = 95;
    public static readonly RULE_locomotor_zbehavior_property = 96;
    public static readonly RULE_locomotor_appereance_property = 97;
    public static readonly RULE_locomotor_movepriority_property = 98;
    public static readonly RULE_surface_value = 99;
    public static readonly RULE_zbehavior_value = 100;
    public static readonly RULE_appereance_value = 101;
    public static readonly RULE_movepriority_value = 102;
    public static readonly RULE_rankClass = 103;
    public static readonly RULE_rank_properties = 104;
    public static readonly RULE_scienceClass = 105;
    public static readonly RULE_science_properties = 106;
    public static readonly RULE_specialPowerClass = 107;
    public static readonly RULE_specialPower_properties = 108;
    public static readonly RULE_soundEffectClasses = 109;
    public static readonly RULE_audioEventClass = 110;
    public static readonly RULE_dialogEventClass = 111;
    public static readonly RULE_audioevent_properties = 112;
    public static readonly RULE_upgradeClass = 113;
    public static readonly RULE_upgrade_properties = 114;
    public static readonly RULE_academyclassifier_value = 115;
    public static readonly RULE_weaponClass = 116;
    public static readonly RULE_weapon_properties = 117;
    public static readonly RULE_weapon_damagetype_property = 118;
    public static readonly RULE_weapon_deathtype_property = 119;
    public static readonly RULE_weapon_damageaffects_property = 120;
    public static readonly RULE_weapon_weaponbonus_property = 121;
    public static readonly RULE_weapon_lasterbone_property = 122;
    public static readonly RULE_weapon_weaponbonus_condition_value = 123;
    public static readonly RULE_weapon_weaponbonus_bonus_value = 124;
    public static readonly RULE_damageType_value = 125;
    public static readonly RULE_deathType_value = 126;
    public static readonly RULE_damageAffects_value = 127;
    public static readonly RULE_weatherClass = 128;
    public static readonly RULE_weather_properties = 129;
    public static readonly RULE_end = 130;
    public static readonly RULE_file = 131;
    public static readonly RULE_cb_command_property = 132;
    public static readonly RULE_cb_command_value = 133;
    public static readonly RULE_cb_options_property = 134;
    public static readonly RULE_cb_options_value = 135;
    public static readonly RULE_cb_buttonimage_property = 136;
    public static readonly RULE_cb_buttonbordertype_property = 137;
    public static readonly RULE_cb_buttonbordertype_value = 138;
    public static readonly RULE_cb_textlabel_property = 139;
    public static readonly RULE_cb_descriptionlabel_property = 140;
    public static readonly RULE_cb_conflictinglabel_property = 141;
    public static readonly RULE_cb_cursorname_propery = 142;
    public static readonly RULE_cb_radius_cursorname_value = 143;
    public static readonly RULE_cb_invalid_cursorname_propery = 144;
    public static readonly RULE_cb_unitspecificsound_property = 145;
    public static readonly RULE_cb_maxshotsfire_property = 146;
    public static readonly RULE_dfx_throttletime_property = 147;
    public static readonly RULE_dfx_amountformajorfx_property = 148;
    public static readonly RULE_dfx_majorfx_property = 149;
    public static readonly RULE_dfx_minorfx_property = 150;
    public static readonly RULE_dfx_vetmajorfx_property = 151;
    public static readonly RULE_dfx_vetminorfx_property = 152;
    public static readonly RULE_dgi_useplayercolor_property = 153;
    public static readonly RULE_dgi_colorfortext_property = 154;
    public static readonly RULE_dgi_colordropshadow_property = 155;
    public static readonly RULE_dgi_dropshadowoffsetX_property = 156;
    public static readonly RULE_dgi_dropshadowoffsetY_property = 157;
    public static readonly RULE_dgi_fontname_property = 158;
    public static readonly RULE_dgi_fontsize_property = 159;
    public static readonly RULE_dgi_fontisbold_property = 160;
    public static readonly RULE_dgi_drawposXperc_property = 161;
    public static readonly RULE_dgi_drawposYperc_property = 162;
    public static readonly RULE_fxlist_ps_name_property = 163;
    public static readonly RULE_fxlist_ps_count_property = 164;
    public static readonly RULE_fxlist_ps_offset_property = 165;
    public static readonly RULE_fxlist_ps_radius_property = 166;
    public static readonly RULE_fxlist_ps_height_property = 167;
    public static readonly RULE_fxlist_ps_initialDelay_property = 168;
    public static readonly RULE_fxlist_ps_rotateX_property = 169;
    public static readonly RULE_fxlist_ps_rotatey_property = 170;
    public static readonly RULE_fxlist_ps_rotateZ_property = 171;
    public static readonly RULE_fxlist_ps_orienttoobject_property = 172;
    public static readonly RULE_fxlist_ps_ricochet_property = 173;
    public static readonly RULE_fxlist_ps_usecallerradius_property = 174;
    public static readonly RULE_fxlist_ps_attachtoobject_property = 175;
    public static readonly RULE_fxlist_ps_creategroundheight_property = 176;
    public static readonly RULE_fxlist_sound_property = 177;
    public static readonly RULE_fxlist_rayeffect_primaryoffset_property = 178;
    public static readonly RULE_fxlist_rayeffect_secondaryoffset_proprety = 179;
    public static readonly RULE_fxlist_tracer_name_propety = 180;
    public static readonly RULE_fxlist_tracer_bonename_property = 181;
    public static readonly RULE_fxlist_tracer_speed_property = 182;
    public static readonly RULE_fxlist_tracer_decayat_property = 183;
    public static readonly RULE_fxlist_tracer_length_property = 184;
    public static readonly RULE_fxlist_tracer_width_property = 185;
    public static readonly RULE_fxlist_tracer_color_property = 186;
    public static readonly RULE_fxlist_tracer_probability_property = 187;
    public static readonly RULE_fxlist_lightpulse_color_property = 188;
    public static readonly RULE_fxlist_lightpulse_radius_property = 189;
    public static readonly RULE_fxlist_lightpulse_radiuspercentobjectsize_property = 190;
    public static readonly RULE_fxlist_lightpulse_increasetime_property = 191;
    public static readonly RULE_fxlist_lightpulse_decreasetime_property = 192;
    public static readonly RULE_fxlist_viewshake_type_property = 193;
    public static readonly RULE_fxlist_scorch_type_property = 194;
    public static readonly RULE_fxlist_scorch_radius_property = 195;
    public static readonly RULE_fxlist_atbonepos_fx_property = 196;
    public static readonly RULE_fxlist_atbonepos_bonename_property = 197;
    public static readonly RULE_fxlist_atbonepos_orienttoobject_property = 198;
    public static readonly RULE_fxlist_name_object_propety = 199;
    public static readonly RULE_igui_properties = 200;
    public static readonly RULE_faction_value = 201;
    public static readonly RULE_commandbutton_value = 202;
    public static readonly RULE_cursorname_value = 203;
    public static readonly RULE_radius_cursorname_value = 204;
    public static readonly RULE_invalid_cursorname_value = 205;
    public static readonly RULE_mappedimage_value = 206;
    public static readonly RULE_particlesystem_value = 207;
    public static readonly RULE_fxlist_value = 208;
    public static readonly RULE_object_property = 209;
    public static readonly RULE_object_value = 210;
    public static readonly RULE_science_property = 211;
    public static readonly RULE_science_value = 212;
    public static readonly RULE_specialpower_property = 213;
    public static readonly RULE_specialpower_value = 214;
    public static readonly RULE_audioevent_value = 215;
    public static readonly RULE_upgrade_property = 216;
    public static readonly RULE_upgrade_value = 217;
    public static readonly RULE_weaponslot_property = 218;
    public static readonly RULE_rand_value = 219;
    public static readonly RULE_coord3D = 220;

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
        "'RetaliationFriendsRadius'", "'SideInfo'", "'ResourceGatherersEasy'", 
        "'ResourceGatherersNormal'", "'ResourceGatherersHard'", "'BaseDefenseStructure1'", 
        "'SkillSet1'", "'SkillSet2'", "'SkillSet3'", "'SkillSet4'", "'SkillSet5'", 
        "'SkirmishBuildList'", "'Structure'", "'Location'", "'Rebuilds'", 
        "'Angle'", "'InitiallyBuilt'", "'AutomaticallyBuild'", "'MappedImage'", 
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
        "'Rank'", "'RankName'", "'INI:RankLevel1'", "'INI:RankLevel2'", 
        "'INI:RankLevel3'", "'INI:RankLevel4'", "'INI:RankLevel5'", "'INI:RankLevel6'", 
        "'INI:RankLevel7'", "'INI:RankLevel8'", "'SkillPointsNeeded'", "'SciencesGranted'", 
        "'SciencePurchasePointsGranted'", "'Science'", "'PrerequisiteSciences'", 
        "'SciencePurchasePointCost'", "'IsGrantable'", "'DisplayName'", 
        "'Description'", "'SpecialPower'", "'Enum'", "'SPECIAL_INVALID'", 
        "'SPECIAL_DAISY_CUTTER'", "'SPECIAL_PARADROP_AMERICA'", "'SPECIAL_CARPET_BOMB'", 
        "'SPECIAL_CLUSTER_MINES'", "'SPECIAL_EMP_PULSE'", "'SPECIAL_NAPALM_STRIKE'", 
        "'SPECIAL_CASH_HACK'", "'SPECIAL_NEUTRON_MISSILE'", "'SPECIAL_SPY_SATELLITE'", 
        "'SPECIAL_DEFECTOR'", "'SPECIAL_TERROR_CELL'", "'SPECIAL_AMBUSH'", 
        "'SPECIAL_BLACK_MARKET_NUKE'", "'SPECIAL_ANTHRAX_BOMB'", "'SPECIAL_SCUD_STORM'", 
        "'SPECIAL_DEMORALIZE_OBSOLETE'", "'SPECIAL_CRATE_DROP'", "'SPECIAL_A10_THUNDERBOLT_STRIKE'", 
        "'SPECIAL_DETONATE_DIRTY_NUKE'", "'SPECIAL_ARTILLERY_BARRAGE'", 
        "'SPECIAL_MISSILE_DEFENDER_LASER_GUIDED_MISSILES'", "'SPECIAL_REMOTE_CHARGES'", 
        "'SPECIAL_TIMED_CHARGES'", "'SPECIAL_HELIX_NAPALM_BOMB'", "'SPECIAL_HACKER_DISABLE_BUILDING'", 
        "'SPECIAL_TANKHUNTER_TNT_ATTACK'", "'SPECIAL_BLACKLOTUS_CAPTURE_BUILDING'", 
        "'SPECIAL_BLACKLOTUS_DISABLE_VEHICLE_HACK'", "'SPECIAL_BLACKLOTUS_STEAL_CASH_HACK'", 
        "'SPECIAL_INFANTRY_CAPTURE_BUILDING'", "'SPECIAL_RADAR_VAN_SCAN'", 
        "'SPECIAL_SPY_DRONE'", "'SPECIAL_DISGUISE_AS_VEHICLE'", "'SPECIAL_BOOBY_TRAP'", 
        "'SPECIAL_REPAIR_VEHICLES'", "'SPECIAL_PARTICLE_UPLINK_CANNON'", 
        "'SPECIAL_CASH_BOUNTY'", "'SPECIAL_CHANGE_BATTLE_PLANS'", "'SPECIAL_CIA_INTELLIGENCE'", 
        "'SPECIAL_CLEANUP_AREA'", "'SPECIAL_LAUNCH_BAIKONUR_ROCKET'", "'SPECIAL_SPECTRE_GUNSHIP'", 
        "'SPECIAL_GPS_SCRAMBLER'", "'SPECIAL_FRENZY'", "'SPECIAL_SNEAK_ATTACK'", 
        "'SPECIAL_CHINA_CARPET_BOMB'", "'EARLY_SPECIAL_CHINA_CARPET_BOMB'", 
        "'SPECIAL_LEAFLET_DROP'", "'EARLY_SPECIAL_LEAFLET_DROP'", "'EARLY_SPECIAL_FRENZY'", 
        "'SPECIAL_COMMUNICATIONS_DOWNLOAD'", "'EARLY_SPECIAL_REPAIR_VEHICLES'", 
        "'SPECIAL_TANK_PARADROP'", "'SUPW_SPECIAL_PARTICLE_UPLINK_CANNON'", 
        "'AIRF_SPECIAL_DAISY_CUTTER'", "'NUKE_SPECIAL_CLUSTER_MINES'", "'NUKE_SPECIAL_NEUTRON_MISSILE'", 
        "'AIRF_SPECIAL_A10_THUNDERBOLT_STRIKE'", "'AIRF_SPECIAL_SPECTRE_GUNSHIP'", 
        "'INFA_SPECIAL_PARADROP_AMERICA'", "'SLTH_SPECIAL_GPS_SCRAMBLER'", 
        "'AIRF_SPECIAL_CARPET_BOMB'", "'SUPR_SPECIAL_CRUISE_MISSILE'", "'LAZR_SPECIAL_PARTICLE_UPLINK_CANNON'", 
        "'SUPW_SPECIAL_NEUTRON_MISSILE'", "'SPECIAL_BATTLESHIP_BOMBARDMENT'", 
        "'ReloadTime'", "'RequiredScience'", "'PublicTimer'", "'SharedSyncedTimer'", 
        "'ViewObjectDuration'", "'ViewObjectRange'", "'RadiusCursorRadius'", 
        "'ShortcutPower'", "'AcademyClassify'", "'InitiateSound'", "'InitiateAtLocationSound'", 
        "'DetectionTime'", "'AudioEvent'", "'DialogEvent'", "'Filename'", 
        "'MinVolume'", "'LoopCount'", "'Control'", "'Priority'", "'lowest'", 
        "'LOWEST'", "'low'", "'LOW'", "'normal'", "'NORMAL'", "'high'", 
        "'HIGH'", "'critical'", "'CRITICAL'", "'loop'", "'random'", "'all'", 
        "'postdelay'", "'interrupt'", "'Sounds'", "'SoundsNight'", "'SoundsEvening'", 
        "'SoundsMorning'", "'Attack'", "'Delay'", "'Decay'", "'Volume'", 
        "'MinRange'", "'MaxRange'", "'Limit'", "'Type'", "'ui'", "'world'", 
        "'shrouded'", "'global'", "'voice'", "'player'", "'allies'", "'enemies'", 
        "'everyone'", "'PitchShift'", "'VolumeShift'", "'LowPassCutoff'", 
        "'Upgrade'", "'PLAYER'", "'OBJECT'", "'UnitSpecificSound'", "'BuildTime'", 
        "'BuildCost'", "'ButtonImage'", "'ResearchSound'", "'ACT_NONE'", 
        "'ACT_UPGRADE_RADAR'", "'ACT_SUPERPOWER'", "'Weapon'", "'PrimaryDamage'", 
        "'PrimaryDamageRadius'", "'SecondaryDamage'", "'SecondaryDamageRadius'", 
        "'AttackRange'", "'ScatterRadius'", "'AcceptableAimDelta'", "'AntiSmallMissile'", 
        "'AntiProjectile'", "'WeaponSpeed'", "'MinimumAttackRange'", "'ProjectileExhaust'", 
        "'VeterancyProjectileExhaust'", "'ProjectileObject'", "'DamageDealtAtSelfPosition'", 
        "'DelayBetweenShots'", "'ClipSize'", "'ClipReloadTime'", "'AutoReloadsClip'", 
        "'FireFX'", "'VeterancyFireFX'", "'ProjectileDetonationFX'", "'FireSound'", 
        "'ScatterRadiusVsInfantry'", "'MinTargetPitch'", "'MaxTargetPitch'", 
        "'WeaponRecoil'", "'ProjectileCollidesWith'", "'ShotsPerBarrel'", 
        "'AntiAirborneVehicle'", "'AntiAirborneInfantry'", "'AntiGround'", 
        "'LaserName'", "'DamageType'", "'DeathType'", "'RadiusDamageAffects'", 
        "'WeaponBonus'", "'LaserBoneName'", "'Weather'", "'SnowEnabled'", 
        "'SnowTexture'", "'SnowBoxDimensions'", "'SnowBoxDensity'", "'SnowFrequencyScaleX'", 
        "'SnowFrequencyScaleY'", "'SnowAmplitude'", "'SnowVelocity'", "'SnowPointSize'", 
        "'SnowMaxPointSize'", "'SnowMinPointSize'", "'SnowPointSprites'", 
        "'SnowQuadSize'", "'end'", "'End'", "'END'", "'.'", "'tga'", "'dds'", 
        "'wav'", "'Command'", "'Options'", "'ButtonBorderType'", "'TextLabel'", 
        "'DescriptLabel'", "'ConflictingLabel'", "'CursorName'", "'RadiusCursorType'", 
        "'InvalidCursorName'", "'MaxShotsToFire'", "'ThrottleTime'", "'AmountForMajorFX'", 
        "'MajorFX'", "'MinorFX'", "'VeterancyMajorFX'", "'VeterancyMinorFX'", 
        "'UsePlayerColor'", "'ColorForText'", "'ColorForTextDropShadow'", 
        "'DropShadowOffsetX'", "'DropShadowOffsetY'", "'FontName'", "'FontSize'", 
        "'FontIsBold'", "'DrawPositionXPercent'", "'DrawPositionYPixel'", 
        "'Name'", "'Count'", "'Offset'", "'Radius'", "'Height'", "'InitialDelay'", 
        "'RotateX'", "'RotateY'", "'RotateZ'", "'OrientToObject'", "'Ricochet'", 
        "'UseCallersRadius'", "'AttachToObject'", "'CreateAtGroundHeight'", 
        "'PrimaryOffset'", "'SecondaryOffset'", "'TracerName'", "'BoneName'", 
        "'DecayAt'", "'Length'", "'Width'", "'Probability'", "'RadiusAsPercentOfObjectSize'", 
        "'IncreaseTime'", "'DecreaseTime'", "'FX'", "'OrientToBone'", "'MaxSelectionSize'", 
        "'MessageColor1'", "'MessageColor2'", "'MessagePosition'", "'MessageFont'", 
        "'MessagePointSize'", "'MessageBold'", "'MessageDelayMS'", "'MilitaryCaptionColor'", 
        "'MilitaryCaptionPosition'", "'MilitaryCaptionTitleFont'", "'MilitaryCaptionTitlePointSize'", 
        "'MilitaryCaptionTitleBold'", "'MilitaryCaptionFont'", "'MilitaryCaptionPointSize'", 
        "'MilitaryCaptionBold'", "'MilitaryCaptionRandomizeTyping'", "'SuperweaponCountdownPosition'", 
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
        "'PopupMessageColor'", "'America'", "'China'", "'GLA'", "'AmericaAirForceGeneral'", 
        "'AmericaLaserGeneral'", "'AmericaSuperWeaponGeneral'", "'ChinaTankGeneral'", 
        "'ChinaNukeGeneral'", "'ChinaInfantryGeneral'", "'GLADemolitionGeneral'", 
        "'GLAStealthGeneral'", "'GLAToxinGeneral'", "'Object'", "'WeaponSlot'", 
        null, null, null, null, "'='"
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
        null, null, null, null, null, null, "NONE", "INT", "FLOAT", "PROCENT", 
        "EQ", "WEAPONSLOT", "VETERENCY", "XCOORD", "YCOORD", "ZCOORD", "COORDLEFT", 
        "COORDTOP", "COORDRIGHT", "COORDBOTTOM", "R", "G", "B", "A", "DISTRIBUTION_FORM", 
        "MANUAL", "BOOLEAN", "STRING", "ID", "NEWLINE", "WS", "COMMENT"
    ];
    public static readonly ruleNames = [
        "program", "classes", "aiDataClass", "aiDataClass_properties", "aiDataClass_structureProperty", 
        "aiDataClass_teamProperty", "aiDataClass_wealthProperty", "aiDataClass_poorProperty", 
        "aiDataClass_structureWealthyProperty", "aiDataClass_structurePoorProperty", 
        "aiDataClass_teamWealthProperty", "aiDataClass_teamPoorProperty", 
        "aiDataClass_teamResourcesProperty", "aiDataClass_guardInnerAIProperty", 
        "aiDataClass_guardOuterAIProperty", "aiDataClass_guardInnerHumanProperty", 
        "aiDataClass_guardOuterHumanProperty", "aiDataClass_guardChaseUnitsProperty", 
        "aiDataClass_guardEnemyScanProperty", "aiDataClass_guardEnemyReturnScanProperty", 
        "aiDataClass_alertRangeModifierProperty", "aiDataClass_aggressiveRangeModifierProperty", 
        "aiDataClass_attackProrityDistanceModifierProperty", "aiDataClass_maxRecruitRadiusProperty", 
        "aiDataClass_skirmishBaseDefenseExtraDistanceProperty", "aiDataClass_forceIdleMSECProperty", 
        "aiDataClass_forceSkirmishAIProperty", "aiDataClass_rotateSkirmishBaseProperty", 
        "aiDataClass_attackUsesLineOfSightProperty", "aiDataClass_enableRepulsorProperty", 
        "aiDataClass_repulsedDistanceProperty", "aiDataClass_wallHeighProperty", 
        "aiDataClass_attackIgnoreInsignificantBuildingsProperty", "aiDataClass_skirmishGroupFudgeDistanceProperty", 
        "aiDataClass_minInfantryGroupProperty", "aiDataClass_minVehicleGroupProperty", 
        "aiDataClass_minDistanceGroupProperty", "aiDataClass_distanceRequiresGroupProperty", 
        "aiDataClass_infantryPathfindDiameterProperty", "aiDataClass_vehiclePathfindDiameterProperty", 
        "aiDataClass_supplycenterSaveDistanceProperty", "aiDataClass_rebuildDelayTimeSecProperty", 
        "aiDataClass_aiDozerBoredRadiusProperty", "aiDataClass_aiCrushesInfantryProperty", 
        "aiDataClass_maxRetaliationDistanceProperty", "aiDataClass_retailationFriendsRadiusProperty", 
        "aiDataClass_sideInfo", "aiDataClass_sideInfoProperties", "aiDataClass_sideInfo_resourceGatheresEasy", 
        "aiDataClass_sideInfo_resourceGatheresMedium", "aiDataClass_sideInfo_resourceGatheresHard", 
        "aiDataClass_sideInfo_baseDefenseStructure", "aiDataClass_sideInfo_skillSet", 
        "aiDataClass_skirmishBuildList", "aiDataClass_skirmishBuildList_structure", 
        "aiDataClass_skirmishBuildList_structure_properties", "aiDataClass_skirmishBuildList_structure_locationProperty", 
        "aiDataClass_skirmishBuildList_structure_rebuildsProperty", "aiDataClass_skirmishBuildList_structure_angleProperty", 
        "aiDataClass_skirmishBuildList_structure_initiallyBuildProperty", 
        "aiDataClass_skirmishBuildList_structure_automaticallyBuildProperty", 
        "mappedImageClass", "mappedImageClassProperties", "mappedImageClass_textureProperty", 
        "mappedImageClass_textureWidthProperty", "mappedImageClass_textureHeightProperty", 
        "mappedImageClass_coordsProperty", "mappedImageClass_statusProperty", 
        "animation2DClass", "animation2DClassProperties", "armorClass", 
        "armorClassProperties", "commandButtonClass", "commandButtonClassProperties", 
        "commandSetClass", "commandSetClassProperty", "damageFXClass", "damageFXClassProperties", 
        "drawGroupInfoClass", "drawgroupinfoProperties", "fxListClass", 
        "fxlistblocks", "fxlist_ps_block", "fxlist_sound_block", "fxlist_rayeffect_block", 
        "fxlist_tracer_block", "fxlist_lightpulse_block", "fxlist_viewshake_block", 
        "fxlist_terrainscorch_block", "fxlist_fxlistatbone_block", "inGameUIClass", 
        "igui_blocks", "ingui_block_properties", "locomotorClass", "locomotor_properties", 
        "locomotor_surface_property", "locomotor_zbehavior_property", "locomotor_appereance_property", 
        "locomotor_movepriority_property", "surface_value", "zbehavior_value", 
        "appereance_value", "movepriority_value", "rankClass", "rank_properties", 
        "scienceClass", "science_properties", "specialPowerClass", "specialPower_properties", 
        "soundEffectClasses", "audioEventClass", "dialogEventClass", "audioevent_properties", 
        "upgradeClass", "upgrade_properties", "academyclassifier_value", 
        "weaponClass", "weapon_properties", "weapon_damagetype_property", 
        "weapon_deathtype_property", "weapon_damageaffects_property", "weapon_weaponbonus_property", 
        "weapon_lasterbone_property", "weapon_weaponbonus_condition_value", 
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
            this.state = 446;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 1 || ((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & 134733953) !== 0) || _la === 124 || ((((_la - 185)) & ~0x1F) === 0 && ((1 << (_la - 185)) & 532481) !== 0) || _la === 285 || _la === 286 || _la === 331 || _la === 342 || _la === 381 || _la === 535) {
                {
                this.state = 444;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.NEWLINE:
                    {
                    this.state = 442;
                    this.match(MapIniParser.NEWLINE);
                    }
                    break;
                case MapIniParser.T__0:
                case MapIniParser.T__60:
                case MapIniParser.T__67:
                case MapIniParser.T__73:
                case MapIniParser.T__74:
                case MapIniParser.T__75:
                case MapIniParser.T__76:
                case MapIniParser.T__77:
                case MapIniParser.T__78:
                case MapIniParser.T__87:
                case MapIniParser.T__123:
                case MapIniParser.T__184:
                case MapIniParser.T__197:
                case MapIniParser.T__203:
                case MapIniParser.T__284:
                case MapIniParser.T__285:
                case MapIniParser.T__330:
                case MapIniParser.T__341:
                case MapIniParser.T__380:
                    {
                    this.state = 443;
                    this.classes();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 448;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 449;
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
        try {
            this.state = 469;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__60:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 451;
                this.mappedImageClass();
                }
                break;
            case MapIniParser.T__0:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 452;
                this.aiDataClass();
                }
                break;
            case MapIniParser.T__67:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 453;
                this.animation2DClass();
                }
                break;
            case MapIniParser.T__73:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 454;
                this.armorClass();
                }
                break;
            case MapIniParser.T__74:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 455;
                this.commandButtonClass();
                }
                break;
            case MapIniParser.T__75:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 456;
                this.commandSetClass();
                }
                break;
            case MapIniParser.T__76:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 457;
                this.damageFXClass();
                }
                break;
            case MapIniParser.T__77:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 458;
                this.drawGroupInfoClass();
                }
                break;
            case MapIniParser.T__78:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 459;
                this.fxListClass();
                }
                break;
            case MapIniParser.T__87:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 460;
                this.inGameUIClass();
                }
                break;
            case MapIniParser.T__123:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 461;
                this.locomotorClass();
                }
                break;
            case MapIniParser.T__184:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 462;
                this.rankClass();
                }
                break;
            case MapIniParser.T__197:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 463;
                this.scienceClass();
                }
                break;
            case MapIniParser.T__284:
            case MapIniParser.T__285:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 464;
                this.soundEffectClasses();
                }
                break;
            case MapIniParser.T__203:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 465;
                this.specialPowerClass();
                }
                break;
            case MapIniParser.T__330:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 466;
                this.upgradeClass();
                }
                break;
            case MapIniParser.T__341:
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 467;
                this.weaponClass();
                }
                break;
            case MapIniParser.T__380:
                this.enterOuterAlt(localContext, 18);
                {
                this.state = 468;
                this.weatherClass();
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
    public aiDataClass(): AiDataClassContext {
        let localContext = new AiDataClassContext(this.context, this.state);
        this.enterRule(localContext, 4, MapIniParser.RULE_aiDataClass);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 471;
            this.match(MapIniParser.T__0);
            this.state = 472;
            this.match(MapIniParser.NEWLINE);
            this.state = 482;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    this.state = 480;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 4, this.context) ) {
                    case 1:
                        {
                        {
                        this.state = 474;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 536) {
                            {
                            this.state = 473;
                            this.match(MapIniParser.WS);
                            }
                        }

                        this.state = 476;
                        this.aiDataClass_properties();
                        this.state = 477;
                        this.match(MapIniParser.NEWLINE);
                        }
                        }
                        break;
                    case 2:
                        {
                        this.state = 479;
                        this.match(MapIniParser.NEWLINE);
                        }
                        break;
                    }
                    }
                }
                this.state = 484;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
            }
            this.state = 485;
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
    public aiDataClass_properties(): AiDataClass_propertiesContext {
        let localContext = new AiDataClass_propertiesContext(this.context, this.state);
        this.enterRule(localContext, 6, MapIniParser.RULE_aiDataClass_properties);
        let _la: number;
        try {
            this.state = 541;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 8, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 487;
                this.aiDataClass_structureProperty();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 488;
                this.aiDataClass_teamProperty();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 489;
                this.aiDataClass_wealthProperty();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 490;
                this.aiDataClass_poorProperty();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 491;
                this.aiDataClass_structureWealthyProperty();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 492;
                this.aiDataClass_structurePoorProperty();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 493;
                this.aiDataClass_teamWealthProperty();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 494;
                this.aiDataClass_teamPoorProperty();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 495;
                this.aiDataClass_teamResourcesProperty();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 496;
                this.aiDataClass_guardInnerAIProperty();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 497;
                this.aiDataClass_guardOuterAIProperty();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 498;
                this.aiDataClass_guardInnerHumanProperty();
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 499;
                this.aiDataClass_guardOuterHumanProperty();
                }
                break;
            case 14:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 500;
                this.aiDataClass_guardChaseUnitsProperty();
                }
                break;
            case 15:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 501;
                this.aiDataClass_guardEnemyScanProperty();
                }
                break;
            case 16:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 502;
                this.aiDataClass_guardEnemyReturnScanProperty();
                }
                break;
            case 17:
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 503;
                this.aiDataClass_alertRangeModifierProperty();
                }
                break;
            case 18:
                this.enterOuterAlt(localContext, 18);
                {
                this.state = 504;
                this.aiDataClass_aggressiveRangeModifierProperty();
                }
                break;
            case 19:
                this.enterOuterAlt(localContext, 19);
                {
                this.state = 505;
                this.aiDataClass_attackProrityDistanceModifierProperty();
                }
                break;
            case 20:
                this.enterOuterAlt(localContext, 20);
                {
                this.state = 506;
                this.aiDataClass_maxRecruitRadiusProperty();
                }
                break;
            case 21:
                this.enterOuterAlt(localContext, 21);
                {
                this.state = 507;
                this.aiDataClass_skirmishBaseDefenseExtraDistanceProperty();
                }
                break;
            case 22:
                this.enterOuterAlt(localContext, 22);
                {
                this.state = 508;
                this.aiDataClass_forceIdleMSECProperty();
                }
                break;
            case 23:
                this.enterOuterAlt(localContext, 23);
                {
                this.state = 509;
                this.aiDataClass_forceSkirmishAIProperty();
                }
                break;
            case 24:
                this.enterOuterAlt(localContext, 24);
                {
                this.state = 510;
                this.aiDataClass_rotateSkirmishBaseProperty();
                }
                break;
            case 25:
                this.enterOuterAlt(localContext, 25);
                {
                this.state = 511;
                this.aiDataClass_attackUsesLineOfSightProperty();
                }
                break;
            case 26:
                this.enterOuterAlt(localContext, 26);
                {
                this.state = 512;
                this.aiDataClass_enableRepulsorProperty();
                }
                break;
            case 27:
                this.enterOuterAlt(localContext, 27);
                {
                this.state = 513;
                this.aiDataClass_repulsedDistanceProperty();
                }
                break;
            case 28:
                this.enterOuterAlt(localContext, 28);
                {
                this.state = 514;
                this.aiDataClass_wallHeighProperty();
                }
                break;
            case 29:
                this.enterOuterAlt(localContext, 29);
                {
                this.state = 515;
                this.aiDataClass_attackIgnoreInsignificantBuildingsProperty();
                }
                break;
            case 30:
                this.enterOuterAlt(localContext, 30);
                {
                this.state = 516;
                this.aiDataClass_skirmishGroupFudgeDistanceProperty();
                }
                break;
            case 31:
                this.enterOuterAlt(localContext, 31);
                {
                this.state = 517;
                this.aiDataClass_minInfantryGroupProperty();
                }
                break;
            case 32:
                this.enterOuterAlt(localContext, 32);
                {
                this.state = 518;
                this.aiDataClass_minVehicleGroupProperty();
                }
                break;
            case 33:
                this.enterOuterAlt(localContext, 33);
                {
                this.state = 519;
                this.aiDataClass_minDistanceGroupProperty();
                }
                break;
            case 34:
                this.enterOuterAlt(localContext, 34);
                {
                this.state = 520;
                this.aiDataClass_distanceRequiresGroupProperty();
                }
                break;
            case 35:
                this.enterOuterAlt(localContext, 35);
                {
                this.state = 521;
                this.aiDataClass_infantryPathfindDiameterProperty();
                }
                break;
            case 36:
                this.enterOuterAlt(localContext, 36);
                {
                this.state = 522;
                this.aiDataClass_vehiclePathfindDiameterProperty();
                }
                break;
            case 37:
                this.enterOuterAlt(localContext, 37);
                {
                this.state = 523;
                this.aiDataClass_supplycenterSaveDistanceProperty();
                }
                break;
            case 38:
                this.enterOuterAlt(localContext, 38);
                {
                this.state = 524;
                this.aiDataClass_rebuildDelayTimeSecProperty();
                }
                break;
            case 39:
                this.enterOuterAlt(localContext, 39);
                {
                this.state = 525;
                this.aiDataClass_aiDozerBoredRadiusProperty();
                }
                break;
            case 40:
                this.enterOuterAlt(localContext, 40);
                {
                this.state = 526;
                this.aiDataClass_aiCrushesInfantryProperty();
                }
                break;
            case 41:
                this.enterOuterAlt(localContext, 41);
                {
                this.state = 527;
                this.aiDataClass_maxRetaliationDistanceProperty();
                }
                break;
            case 42:
                this.enterOuterAlt(localContext, 42);
                {
                this.state = 528;
                this.aiDataClass_retailationFriendsRadiusProperty();
                }
                break;
            case 43:
                this.enterOuterAlt(localContext, 43);
                {
                this.state = 532;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 44) {
                    {
                    {
                    this.state = 529;
                    this.aiDataClass_sideInfo();
                    }
                    }
                    this.state = 534;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
                break;
            case 44:
                this.enterOuterAlt(localContext, 44);
                {
                this.state = 538;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 54) {
                    {
                    {
                    this.state = 535;
                    this.aiDataClass_skirmishBuildList();
                    }
                    }
                    this.state = 540;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
                break;
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
    public aiDataClass_structureProperty(): AiDataClass_structurePropertyContext {
        let localContext = new AiDataClass_structurePropertyContext(this.context, this.state);
        this.enterRule(localContext, 8, MapIniParser.RULE_aiDataClass_structureProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 543;
            this.match(MapIniParser.T__1);
            this.state = 544;
            this.match(MapIniParser.WS);
            this.state = 545;
            this.match(MapIniParser.EQ);
            this.state = 546;
            this.match(MapIniParser.WS);
            this.state = 547;
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
    public aiDataClass_teamProperty(): AiDataClass_teamPropertyContext {
        let localContext = new AiDataClass_teamPropertyContext(this.context, this.state);
        this.enterRule(localContext, 10, MapIniParser.RULE_aiDataClass_teamProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 549;
            this.match(MapIniParser.T__2);
            this.state = 550;
            this.match(MapIniParser.WS);
            this.state = 551;
            this.match(MapIniParser.EQ);
            this.state = 552;
            this.match(MapIniParser.WS);
            this.state = 553;
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
    public aiDataClass_wealthProperty(): AiDataClass_wealthPropertyContext {
        let localContext = new AiDataClass_wealthPropertyContext(this.context, this.state);
        this.enterRule(localContext, 12, MapIniParser.RULE_aiDataClass_wealthProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 555;
            this.match(MapIniParser.T__3);
            this.state = 556;
            this.match(MapIniParser.WS);
            this.state = 557;
            this.match(MapIniParser.EQ);
            this.state = 558;
            this.match(MapIniParser.WS);
            this.state = 559;
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
    public aiDataClass_poorProperty(): AiDataClass_poorPropertyContext {
        let localContext = new AiDataClass_poorPropertyContext(this.context, this.state);
        this.enterRule(localContext, 14, MapIniParser.RULE_aiDataClass_poorProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 561;
            this.match(MapIniParser.T__4);
            this.state = 562;
            this.match(MapIniParser.WS);
            this.state = 563;
            this.match(MapIniParser.EQ);
            this.state = 564;
            this.match(MapIniParser.WS);
            this.state = 565;
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
    public aiDataClass_structureWealthyProperty(): AiDataClass_structureWealthyPropertyContext {
        let localContext = new AiDataClass_structureWealthyPropertyContext(this.context, this.state);
        this.enterRule(localContext, 16, MapIniParser.RULE_aiDataClass_structureWealthyProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 567;
            this.match(MapIniParser.T__5);
            this.state = 568;
            this.match(MapIniParser.WS);
            this.state = 569;
            this.match(MapIniParser.EQ);
            this.state = 570;
            this.match(MapIniParser.WS);
            this.state = 571;
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
    public aiDataClass_structurePoorProperty(): AiDataClass_structurePoorPropertyContext {
        let localContext = new AiDataClass_structurePoorPropertyContext(this.context, this.state);
        this.enterRule(localContext, 18, MapIniParser.RULE_aiDataClass_structurePoorProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 573;
            this.match(MapIniParser.T__6);
            this.state = 574;
            this.match(MapIniParser.WS);
            this.state = 575;
            this.match(MapIniParser.EQ);
            this.state = 576;
            this.match(MapIniParser.WS);
            this.state = 577;
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
    public aiDataClass_teamWealthProperty(): AiDataClass_teamWealthPropertyContext {
        let localContext = new AiDataClass_teamWealthPropertyContext(this.context, this.state);
        this.enterRule(localContext, 20, MapIniParser.RULE_aiDataClass_teamWealthProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 579;
            this.match(MapIniParser.T__7);
            this.state = 580;
            this.match(MapIniParser.WS);
            this.state = 581;
            this.match(MapIniParser.EQ);
            this.state = 582;
            this.match(MapIniParser.WS);
            this.state = 583;
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
    public aiDataClass_teamPoorProperty(): AiDataClass_teamPoorPropertyContext {
        let localContext = new AiDataClass_teamPoorPropertyContext(this.context, this.state);
        this.enterRule(localContext, 22, MapIniParser.RULE_aiDataClass_teamPoorProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 585;
            this.match(MapIniParser.T__8);
            this.state = 586;
            this.match(MapIniParser.WS);
            this.state = 587;
            this.match(MapIniParser.EQ);
            this.state = 588;
            this.match(MapIniParser.WS);
            this.state = 589;
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
    public aiDataClass_teamResourcesProperty(): AiDataClass_teamResourcesPropertyContext {
        let localContext = new AiDataClass_teamResourcesPropertyContext(this.context, this.state);
        this.enterRule(localContext, 24, MapIniParser.RULE_aiDataClass_teamResourcesProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 591;
            this.match(MapIniParser.T__9);
            this.state = 592;
            this.match(MapIniParser.WS);
            this.state = 593;
            this.match(MapIniParser.EQ);
            this.state = 594;
            this.match(MapIniParser.WS);
            this.state = 595;
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
    public aiDataClass_guardInnerAIProperty(): AiDataClass_guardInnerAIPropertyContext {
        let localContext = new AiDataClass_guardInnerAIPropertyContext(this.context, this.state);
        this.enterRule(localContext, 26, MapIniParser.RULE_aiDataClass_guardInnerAIProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 597;
            this.match(MapIniParser.T__10);
            this.state = 598;
            this.match(MapIniParser.WS);
            this.state = 599;
            this.match(MapIniParser.EQ);
            this.state = 600;
            this.match(MapIniParser.WS);
            this.state = 601;
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
    public aiDataClass_guardOuterAIProperty(): AiDataClass_guardOuterAIPropertyContext {
        let localContext = new AiDataClass_guardOuterAIPropertyContext(this.context, this.state);
        this.enterRule(localContext, 28, MapIniParser.RULE_aiDataClass_guardOuterAIProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 603;
            this.match(MapIniParser.T__11);
            this.state = 604;
            this.match(MapIniParser.WS);
            this.state = 605;
            this.match(MapIniParser.EQ);
            this.state = 606;
            this.match(MapIniParser.WS);
            this.state = 607;
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
    public aiDataClass_guardInnerHumanProperty(): AiDataClass_guardInnerHumanPropertyContext {
        let localContext = new AiDataClass_guardInnerHumanPropertyContext(this.context, this.state);
        this.enterRule(localContext, 30, MapIniParser.RULE_aiDataClass_guardInnerHumanProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 609;
            this.match(MapIniParser.T__12);
            this.state = 610;
            this.match(MapIniParser.WS);
            this.state = 611;
            this.match(MapIniParser.EQ);
            this.state = 612;
            this.match(MapIniParser.WS);
            this.state = 613;
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
    public aiDataClass_guardOuterHumanProperty(): AiDataClass_guardOuterHumanPropertyContext {
        let localContext = new AiDataClass_guardOuterHumanPropertyContext(this.context, this.state);
        this.enterRule(localContext, 32, MapIniParser.RULE_aiDataClass_guardOuterHumanProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 615;
            this.match(MapIniParser.T__13);
            this.state = 616;
            this.match(MapIniParser.WS);
            this.state = 617;
            this.match(MapIniParser.EQ);
            this.state = 618;
            this.match(MapIniParser.WS);
            this.state = 619;
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
    public aiDataClass_guardChaseUnitsProperty(): AiDataClass_guardChaseUnitsPropertyContext {
        let localContext = new AiDataClass_guardChaseUnitsPropertyContext(this.context, this.state);
        this.enterRule(localContext, 34, MapIniParser.RULE_aiDataClass_guardChaseUnitsProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 621;
            this.match(MapIniParser.T__14);
            this.state = 622;
            this.match(MapIniParser.WS);
            this.state = 623;
            this.match(MapIniParser.EQ);
            this.state = 624;
            this.match(MapIniParser.WS);
            this.state = 625;
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
    public aiDataClass_guardEnemyScanProperty(): AiDataClass_guardEnemyScanPropertyContext {
        let localContext = new AiDataClass_guardEnemyScanPropertyContext(this.context, this.state);
        this.enterRule(localContext, 36, MapIniParser.RULE_aiDataClass_guardEnemyScanProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 627;
            this.match(MapIniParser.T__15);
            this.state = 628;
            this.match(MapIniParser.WS);
            this.state = 629;
            this.match(MapIniParser.EQ);
            this.state = 630;
            this.match(MapIniParser.WS);
            this.state = 631;
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
    public aiDataClass_guardEnemyReturnScanProperty(): AiDataClass_guardEnemyReturnScanPropertyContext {
        let localContext = new AiDataClass_guardEnemyReturnScanPropertyContext(this.context, this.state);
        this.enterRule(localContext, 38, MapIniParser.RULE_aiDataClass_guardEnemyReturnScanProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 633;
            this.match(MapIniParser.T__16);
            this.state = 634;
            this.match(MapIniParser.WS);
            this.state = 635;
            this.match(MapIniParser.EQ);
            this.state = 636;
            this.match(MapIniParser.WS);
            this.state = 637;
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
    public aiDataClass_alertRangeModifierProperty(): AiDataClass_alertRangeModifierPropertyContext {
        let localContext = new AiDataClass_alertRangeModifierPropertyContext(this.context, this.state);
        this.enterRule(localContext, 40, MapIniParser.RULE_aiDataClass_alertRangeModifierProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 639;
            this.match(MapIniParser.T__17);
            this.state = 640;
            this.match(MapIniParser.WS);
            this.state = 641;
            this.match(MapIniParser.EQ);
            this.state = 642;
            this.match(MapIniParser.WS);
            this.state = 643;
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
    public aiDataClass_aggressiveRangeModifierProperty(): AiDataClass_aggressiveRangeModifierPropertyContext {
        let localContext = new AiDataClass_aggressiveRangeModifierPropertyContext(this.context, this.state);
        this.enterRule(localContext, 42, MapIniParser.RULE_aiDataClass_aggressiveRangeModifierProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 645;
            this.match(MapIniParser.T__18);
            this.state = 646;
            this.match(MapIniParser.WS);
            this.state = 647;
            this.match(MapIniParser.EQ);
            this.state = 648;
            this.match(MapIniParser.WS);
            this.state = 649;
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
    public aiDataClass_attackProrityDistanceModifierProperty(): AiDataClass_attackProrityDistanceModifierPropertyContext {
        let localContext = new AiDataClass_attackProrityDistanceModifierPropertyContext(this.context, this.state);
        this.enterRule(localContext, 44, MapIniParser.RULE_aiDataClass_attackProrityDistanceModifierProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 651;
            this.match(MapIniParser.T__19);
            this.state = 652;
            this.match(MapIniParser.WS);
            this.state = 653;
            this.match(MapIniParser.EQ);
            this.state = 654;
            this.match(MapIniParser.WS);
            this.state = 655;
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
    public aiDataClass_maxRecruitRadiusProperty(): AiDataClass_maxRecruitRadiusPropertyContext {
        let localContext = new AiDataClass_maxRecruitRadiusPropertyContext(this.context, this.state);
        this.enterRule(localContext, 46, MapIniParser.RULE_aiDataClass_maxRecruitRadiusProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 657;
            this.match(MapIniParser.T__20);
            this.state = 658;
            this.match(MapIniParser.WS);
            this.state = 659;
            this.match(MapIniParser.EQ);
            this.state = 660;
            this.match(MapIniParser.WS);
            this.state = 661;
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
    public aiDataClass_skirmishBaseDefenseExtraDistanceProperty(): AiDataClass_skirmishBaseDefenseExtraDistancePropertyContext {
        let localContext = new AiDataClass_skirmishBaseDefenseExtraDistancePropertyContext(this.context, this.state);
        this.enterRule(localContext, 48, MapIniParser.RULE_aiDataClass_skirmishBaseDefenseExtraDistanceProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 663;
            this.match(MapIniParser.T__21);
            this.state = 664;
            this.match(MapIniParser.WS);
            this.state = 665;
            this.match(MapIniParser.EQ);
            this.state = 666;
            this.match(MapIniParser.WS);
            this.state = 667;
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
    public aiDataClass_forceIdleMSECProperty(): AiDataClass_forceIdleMSECPropertyContext {
        let localContext = new AiDataClass_forceIdleMSECPropertyContext(this.context, this.state);
        this.enterRule(localContext, 50, MapIniParser.RULE_aiDataClass_forceIdleMSECProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 669;
            this.match(MapIniParser.T__22);
            this.state = 670;
            this.match(MapIniParser.WS);
            this.state = 671;
            this.match(MapIniParser.EQ);
            this.state = 672;
            this.match(MapIniParser.WS);
            this.state = 673;
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
    public aiDataClass_forceSkirmishAIProperty(): AiDataClass_forceSkirmishAIPropertyContext {
        let localContext = new AiDataClass_forceSkirmishAIPropertyContext(this.context, this.state);
        this.enterRule(localContext, 52, MapIniParser.RULE_aiDataClass_forceSkirmishAIProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 675;
            this.match(MapIniParser.T__23);
            this.state = 676;
            this.match(MapIniParser.WS);
            this.state = 677;
            this.match(MapIniParser.EQ);
            this.state = 678;
            this.match(MapIniParser.WS);
            this.state = 679;
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
    public aiDataClass_rotateSkirmishBaseProperty(): AiDataClass_rotateSkirmishBasePropertyContext {
        let localContext = new AiDataClass_rotateSkirmishBasePropertyContext(this.context, this.state);
        this.enterRule(localContext, 54, MapIniParser.RULE_aiDataClass_rotateSkirmishBaseProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 681;
            this.match(MapIniParser.T__24);
            this.state = 682;
            this.match(MapIniParser.WS);
            this.state = 683;
            this.match(MapIniParser.EQ);
            this.state = 684;
            this.match(MapIniParser.WS);
            this.state = 685;
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
    public aiDataClass_attackUsesLineOfSightProperty(): AiDataClass_attackUsesLineOfSightPropertyContext {
        let localContext = new AiDataClass_attackUsesLineOfSightPropertyContext(this.context, this.state);
        this.enterRule(localContext, 56, MapIniParser.RULE_aiDataClass_attackUsesLineOfSightProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 687;
            this.match(MapIniParser.T__25);
            this.state = 688;
            this.match(MapIniParser.WS);
            this.state = 689;
            this.match(MapIniParser.EQ);
            this.state = 690;
            this.match(MapIniParser.WS);
            this.state = 691;
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
    public aiDataClass_enableRepulsorProperty(): AiDataClass_enableRepulsorPropertyContext {
        let localContext = new AiDataClass_enableRepulsorPropertyContext(this.context, this.state);
        this.enterRule(localContext, 58, MapIniParser.RULE_aiDataClass_enableRepulsorProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 693;
            this.match(MapIniParser.T__26);
            this.state = 694;
            this.match(MapIniParser.WS);
            this.state = 695;
            this.match(MapIniParser.EQ);
            this.state = 696;
            this.match(MapIniParser.WS);
            this.state = 697;
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
    public aiDataClass_repulsedDistanceProperty(): AiDataClass_repulsedDistancePropertyContext {
        let localContext = new AiDataClass_repulsedDistancePropertyContext(this.context, this.state);
        this.enterRule(localContext, 60, MapIniParser.RULE_aiDataClass_repulsedDistanceProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 699;
            this.match(MapIniParser.T__27);
            this.state = 700;
            this.match(MapIniParser.WS);
            this.state = 701;
            this.match(MapIniParser.EQ);
            this.state = 702;
            this.match(MapIniParser.WS);
            this.state = 703;
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
    public aiDataClass_wallHeighProperty(): AiDataClass_wallHeighPropertyContext {
        let localContext = new AiDataClass_wallHeighPropertyContext(this.context, this.state);
        this.enterRule(localContext, 62, MapIniParser.RULE_aiDataClass_wallHeighProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 705;
            this.match(MapIniParser.T__28);
            this.state = 706;
            this.match(MapIniParser.WS);
            this.state = 707;
            this.match(MapIniParser.EQ);
            this.state = 708;
            this.match(MapIniParser.WS);
            this.state = 709;
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
    public aiDataClass_attackIgnoreInsignificantBuildingsProperty(): AiDataClass_attackIgnoreInsignificantBuildingsPropertyContext {
        let localContext = new AiDataClass_attackIgnoreInsignificantBuildingsPropertyContext(this.context, this.state);
        this.enterRule(localContext, 64, MapIniParser.RULE_aiDataClass_attackIgnoreInsignificantBuildingsProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 711;
            this.match(MapIniParser.T__29);
            this.state = 712;
            this.match(MapIniParser.WS);
            this.state = 713;
            this.match(MapIniParser.EQ);
            this.state = 714;
            this.match(MapIniParser.WS);
            this.state = 715;
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
    public aiDataClass_skirmishGroupFudgeDistanceProperty(): AiDataClass_skirmishGroupFudgeDistancePropertyContext {
        let localContext = new AiDataClass_skirmishGroupFudgeDistancePropertyContext(this.context, this.state);
        this.enterRule(localContext, 66, MapIniParser.RULE_aiDataClass_skirmishGroupFudgeDistanceProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 717;
            this.match(MapIniParser.T__30);
            this.state = 718;
            this.match(MapIniParser.WS);
            this.state = 719;
            this.match(MapIniParser.EQ);
            this.state = 720;
            this.match(MapIniParser.WS);
            this.state = 721;
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
    public aiDataClass_minInfantryGroupProperty(): AiDataClass_minInfantryGroupPropertyContext {
        let localContext = new AiDataClass_minInfantryGroupPropertyContext(this.context, this.state);
        this.enterRule(localContext, 68, MapIniParser.RULE_aiDataClass_minInfantryGroupProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 723;
            this.match(MapIniParser.T__31);
            this.state = 724;
            this.match(MapIniParser.WS);
            this.state = 725;
            this.match(MapIniParser.EQ);
            this.state = 726;
            this.match(MapIniParser.WS);
            this.state = 727;
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
    public aiDataClass_minVehicleGroupProperty(): AiDataClass_minVehicleGroupPropertyContext {
        let localContext = new AiDataClass_minVehicleGroupPropertyContext(this.context, this.state);
        this.enterRule(localContext, 70, MapIniParser.RULE_aiDataClass_minVehicleGroupProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 729;
            this.match(MapIniParser.T__32);
            this.state = 730;
            this.match(MapIniParser.WS);
            this.state = 731;
            this.match(MapIniParser.EQ);
            this.state = 732;
            this.match(MapIniParser.WS);
            this.state = 733;
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
    public aiDataClass_minDistanceGroupProperty(): AiDataClass_minDistanceGroupPropertyContext {
        let localContext = new AiDataClass_minDistanceGroupPropertyContext(this.context, this.state);
        this.enterRule(localContext, 72, MapIniParser.RULE_aiDataClass_minDistanceGroupProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 735;
            this.match(MapIniParser.T__33);
            this.state = 736;
            this.match(MapIniParser.WS);
            this.state = 737;
            this.match(MapIniParser.EQ);
            this.state = 738;
            this.match(MapIniParser.WS);
            this.state = 739;
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
    public aiDataClass_distanceRequiresGroupProperty(): AiDataClass_distanceRequiresGroupPropertyContext {
        let localContext = new AiDataClass_distanceRequiresGroupPropertyContext(this.context, this.state);
        this.enterRule(localContext, 74, MapIniParser.RULE_aiDataClass_distanceRequiresGroupProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 741;
            this.match(MapIniParser.T__34);
            this.state = 742;
            this.match(MapIniParser.WS);
            this.state = 743;
            this.match(MapIniParser.EQ);
            this.state = 744;
            this.match(MapIniParser.WS);
            this.state = 745;
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
    public aiDataClass_infantryPathfindDiameterProperty(): AiDataClass_infantryPathfindDiameterPropertyContext {
        let localContext = new AiDataClass_infantryPathfindDiameterPropertyContext(this.context, this.state);
        this.enterRule(localContext, 76, MapIniParser.RULE_aiDataClass_infantryPathfindDiameterProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 747;
            this.match(MapIniParser.T__35);
            this.state = 748;
            this.match(MapIniParser.WS);
            this.state = 749;
            this.match(MapIniParser.EQ);
            this.state = 750;
            this.match(MapIniParser.WS);
            this.state = 751;
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
    public aiDataClass_vehiclePathfindDiameterProperty(): AiDataClass_vehiclePathfindDiameterPropertyContext {
        let localContext = new AiDataClass_vehiclePathfindDiameterPropertyContext(this.context, this.state);
        this.enterRule(localContext, 78, MapIniParser.RULE_aiDataClass_vehiclePathfindDiameterProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 753;
            this.match(MapIniParser.T__36);
            this.state = 754;
            this.match(MapIniParser.WS);
            this.state = 755;
            this.match(MapIniParser.EQ);
            this.state = 756;
            this.match(MapIniParser.WS);
            this.state = 757;
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
    public aiDataClass_supplycenterSaveDistanceProperty(): AiDataClass_supplycenterSaveDistancePropertyContext {
        let localContext = new AiDataClass_supplycenterSaveDistancePropertyContext(this.context, this.state);
        this.enterRule(localContext, 80, MapIniParser.RULE_aiDataClass_supplycenterSaveDistanceProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 759;
            this.match(MapIniParser.T__37);
            this.state = 760;
            this.match(MapIniParser.WS);
            this.state = 761;
            this.match(MapIniParser.EQ);
            this.state = 762;
            this.match(MapIniParser.WS);
            this.state = 763;
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
    public aiDataClass_rebuildDelayTimeSecProperty(): AiDataClass_rebuildDelayTimeSecPropertyContext {
        let localContext = new AiDataClass_rebuildDelayTimeSecPropertyContext(this.context, this.state);
        this.enterRule(localContext, 82, MapIniParser.RULE_aiDataClass_rebuildDelayTimeSecProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 765;
            this.match(MapIniParser.T__38);
            this.state = 766;
            this.match(MapIniParser.WS);
            this.state = 767;
            this.match(MapIniParser.EQ);
            this.state = 768;
            this.match(MapIniParser.WS);
            this.state = 769;
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
    public aiDataClass_aiDozerBoredRadiusProperty(): AiDataClass_aiDozerBoredRadiusPropertyContext {
        let localContext = new AiDataClass_aiDozerBoredRadiusPropertyContext(this.context, this.state);
        this.enterRule(localContext, 84, MapIniParser.RULE_aiDataClass_aiDozerBoredRadiusProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 771;
            this.match(MapIniParser.T__39);
            this.state = 772;
            this.match(MapIniParser.WS);
            this.state = 773;
            this.match(MapIniParser.EQ);
            this.state = 774;
            this.match(MapIniParser.WS);
            this.state = 775;
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
    public aiDataClass_aiCrushesInfantryProperty(): AiDataClass_aiCrushesInfantryPropertyContext {
        let localContext = new AiDataClass_aiCrushesInfantryPropertyContext(this.context, this.state);
        this.enterRule(localContext, 86, MapIniParser.RULE_aiDataClass_aiCrushesInfantryProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 777;
            this.match(MapIniParser.T__40);
            this.state = 778;
            this.match(MapIniParser.WS);
            this.state = 779;
            this.match(MapIniParser.EQ);
            this.state = 780;
            this.match(MapIniParser.WS);
            this.state = 781;
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
    public aiDataClass_maxRetaliationDistanceProperty(): AiDataClass_maxRetaliationDistancePropertyContext {
        let localContext = new AiDataClass_maxRetaliationDistancePropertyContext(this.context, this.state);
        this.enterRule(localContext, 88, MapIniParser.RULE_aiDataClass_maxRetaliationDistanceProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 783;
            this.match(MapIniParser.T__41);
            this.state = 784;
            this.match(MapIniParser.WS);
            this.state = 785;
            this.match(MapIniParser.EQ);
            this.state = 786;
            this.match(MapIniParser.WS);
            this.state = 787;
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
    public aiDataClass_retailationFriendsRadiusProperty(): AiDataClass_retailationFriendsRadiusPropertyContext {
        let localContext = new AiDataClass_retailationFriendsRadiusPropertyContext(this.context, this.state);
        this.enterRule(localContext, 90, MapIniParser.RULE_aiDataClass_retailationFriendsRadiusProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 789;
            this.match(MapIniParser.T__42);
            this.state = 790;
            this.match(MapIniParser.WS);
            this.state = 791;
            this.match(MapIniParser.EQ);
            this.state = 792;
            this.match(MapIniParser.WS);
            this.state = 793;
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
    public aiDataClass_sideInfo(): AiDataClass_sideInfoContext {
        let localContext = new AiDataClass_sideInfoContext(this.context, this.state);
        this.enterRule(localContext, 92, MapIniParser.RULE_aiDataClass_sideInfo);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 795;
            this.match(MapIniParser.T__43);
            this.state = 796;
            this.match(MapIniParser.WS);
            this.state = 797;
            this.faction_value();
            this.state = 798;
            this.match(MapIniParser.NEWLINE);
            this.state = 811;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 12, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    this.state = 809;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 11, this.context) ) {
                    case 1:
                        {
                        {
                        this.state = 800;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 536) {
                            {
                            this.state = 799;
                            this.match(MapIniParser.WS);
                            }
                        }

                        {
                        this.state = 802;
                        this.aiDataClass_sideInfoProperties();
                        }
                        this.state = 803;
                        this.match(MapIniParser.NEWLINE);
                        }
                        }
                        break;
                    case 2:
                        {
                        {
                        this.state = 806;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 536) {
                            {
                            this.state = 805;
                            this.match(MapIniParser.WS);
                            }
                        }

                        this.state = 808;
                        this.match(MapIniParser.NEWLINE);
                        }
                        }
                        break;
                    }
                    }
                }
                this.state = 813;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 12, this.context);
            }
            this.state = 814;
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
    public aiDataClass_sideInfoProperties(): AiDataClass_sideInfoPropertiesContext {
        let localContext = new AiDataClass_sideInfoPropertiesContext(this.context, this.state);
        this.enterRule(localContext, 94, MapIniParser.RULE_aiDataClass_sideInfoProperties);
        try {
            this.state = 821;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__44:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 816;
                this.aiDataClass_sideInfo_resourceGatheresEasy();
                }
                break;
            case MapIniParser.T__45:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 817;
                this.aiDataClass_sideInfo_resourceGatheresMedium();
                }
                break;
            case MapIniParser.T__46:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 818;
                this.aiDataClass_sideInfo_resourceGatheresHard();
                }
                break;
            case MapIniParser.T__47:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 819;
                this.aiDataClass_sideInfo_baseDefenseStructure();
                }
                break;
            case MapIniParser.T__48:
            case MapIniParser.T__49:
            case MapIniParser.T__50:
            case MapIniParser.T__51:
            case MapIniParser.T__52:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 820;
                this.aiDataClass_sideInfo_skillSet();
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
    public aiDataClass_sideInfo_resourceGatheresEasy(): AiDataClass_sideInfo_resourceGatheresEasyContext {
        let localContext = new AiDataClass_sideInfo_resourceGatheresEasyContext(this.context, this.state);
        this.enterRule(localContext, 96, MapIniParser.RULE_aiDataClass_sideInfo_resourceGatheresEasy);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 823;
            this.match(MapIniParser.T__44);
            this.state = 824;
            this.match(MapIniParser.WS);
            this.state = 825;
            this.match(MapIniParser.EQ);
            this.state = 826;
            this.match(MapIniParser.WS);
            this.state = 827;
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
    public aiDataClass_sideInfo_resourceGatheresMedium(): AiDataClass_sideInfo_resourceGatheresMediumContext {
        let localContext = new AiDataClass_sideInfo_resourceGatheresMediumContext(this.context, this.state);
        this.enterRule(localContext, 98, MapIniParser.RULE_aiDataClass_sideInfo_resourceGatheresMedium);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 829;
            this.match(MapIniParser.T__45);
            this.state = 830;
            this.match(MapIniParser.WS);
            this.state = 831;
            this.match(MapIniParser.EQ);
            this.state = 832;
            this.match(MapIniParser.WS);
            this.state = 833;
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
    public aiDataClass_sideInfo_resourceGatheresHard(): AiDataClass_sideInfo_resourceGatheresHardContext {
        let localContext = new AiDataClass_sideInfo_resourceGatheresHardContext(this.context, this.state);
        this.enterRule(localContext, 100, MapIniParser.RULE_aiDataClass_sideInfo_resourceGatheresHard);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 835;
            this.match(MapIniParser.T__46);
            this.state = 836;
            this.match(MapIniParser.WS);
            this.state = 837;
            this.match(MapIniParser.EQ);
            this.state = 838;
            this.match(MapIniParser.WS);
            this.state = 839;
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
    public aiDataClass_sideInfo_baseDefenseStructure(): AiDataClass_sideInfo_baseDefenseStructureContext {
        let localContext = new AiDataClass_sideInfo_baseDefenseStructureContext(this.context, this.state);
        this.enterRule(localContext, 102, MapIniParser.RULE_aiDataClass_sideInfo_baseDefenseStructure);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 841;
            this.match(MapIniParser.T__47);
            this.state = 842;
            this.match(MapIniParser.WS);
            this.state = 843;
            this.match(MapIniParser.EQ);
            this.state = 844;
            this.match(MapIniParser.WS);
            this.state = 845;
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
    public aiDataClass_sideInfo_skillSet(): AiDataClass_sideInfo_skillSetContext {
        let localContext = new AiDataClass_sideInfo_skillSetContext(this.context, this.state);
        this.enterRule(localContext, 104, MapIniParser.RULE_aiDataClass_sideInfo_skillSet);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 847;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 31) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 848;
            this.match(MapIniParser.NEWLINE);
            this.state = 858;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 16, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    this.state = 856;
                    this.errorHandler.sync(this);
                    switch (this.tokenStream.LA(1)) {
                    case MapIniParser.T__197:
                    case MapIniParser.WS:
                        {
                        {
                        this.state = 850;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 536) {
                            {
                            this.state = 849;
                            this.match(MapIniParser.WS);
                            }
                        }

                        this.state = 852;
                        this.science_property();
                        this.state = 853;
                        this.match(MapIniParser.NEWLINE);
                        }
                        }
                        break;
                    case MapIniParser.NEWLINE:
                        {
                        this.state = 855;
                        this.match(MapIniParser.NEWLINE);
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    }
                }
                this.state = 860;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 16, this.context);
            }
            this.state = 861;
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
    public aiDataClass_skirmishBuildList(): AiDataClass_skirmishBuildListContext {
        let localContext = new AiDataClass_skirmishBuildListContext(this.context, this.state);
        this.enterRule(localContext, 106, MapIniParser.RULE_aiDataClass_skirmishBuildList);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 863;
            this.match(MapIniParser.T__53);
            this.state = 864;
            this.match(MapIniParser.WS);
            this.state = 865;
            this.faction_value();
            this.state = 866;
            this.match(MapIniParser.NEWLINE);
            this.state = 876;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 19, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    this.state = 874;
                    this.errorHandler.sync(this);
                    switch (this.tokenStream.LA(1)) {
                    case MapIniParser.T__54:
                    case MapIniParser.WS:
                        {
                        {
                        this.state = 868;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 536) {
                            {
                            this.state = 867;
                            this.match(MapIniParser.WS);
                            }
                        }

                        this.state = 870;
                        this.aiDataClass_skirmishBuildList_structure();
                        this.state = 871;
                        this.match(MapIniParser.NEWLINE);
                        }
                        }
                        break;
                    case MapIniParser.NEWLINE:
                        {
                        this.state = 873;
                        this.match(MapIniParser.NEWLINE);
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    }
                }
                this.state = 878;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 19, this.context);
            }
            this.state = 879;
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
    public aiDataClass_skirmishBuildList_structure(): AiDataClass_skirmishBuildList_structureContext {
        let localContext = new AiDataClass_skirmishBuildList_structureContext(this.context, this.state);
        this.enterRule(localContext, 108, MapIniParser.RULE_aiDataClass_skirmishBuildList_structure);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 881;
            this.match(MapIniParser.T__54);
            this.state = 882;
            this.match(MapIniParser.WS);
            this.state = 883;
            this.object_value();
            this.state = 884;
            this.match(MapIniParser.NEWLINE);
            this.state = 892;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 22, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    this.state = 890;
                    this.errorHandler.sync(this);
                    switch (this.tokenStream.LA(1)) {
                    case MapIniParser.T__55:
                    case MapIniParser.T__56:
                    case MapIniParser.T__57:
                    case MapIniParser.T__58:
                    case MapIniParser.T__59:
                    case MapIniParser.WS:
                        {
                        {
                        this.state = 886;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 536) {
                            {
                            this.state = 885;
                            this.match(MapIniParser.WS);
                            }
                        }

                        this.state = 888;
                        this.aiDataClass_skirmishBuildList_structure_properties();
                        }
                        }
                        break;
                    case MapIniParser.NEWLINE:
                        {
                        this.state = 889;
                        this.match(MapIniParser.NEWLINE);
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    }
                }
                this.state = 894;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 22, this.context);
            }
            this.state = 895;
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
    public aiDataClass_skirmishBuildList_structure_properties(): AiDataClass_skirmishBuildList_structure_propertiesContext {
        let localContext = new AiDataClass_skirmishBuildList_structure_propertiesContext(this.context, this.state);
        this.enterRule(localContext, 110, MapIniParser.RULE_aiDataClass_skirmishBuildList_structure_properties);
        try {
            this.state = 902;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__55:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 897;
                this.aiDataClass_skirmishBuildList_structure_locationProperty();
                }
                break;
            case MapIniParser.T__56:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 898;
                this.aiDataClass_skirmishBuildList_structure_rebuildsProperty();
                }
                break;
            case MapIniParser.T__57:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 899;
                this.aiDataClass_skirmishBuildList_structure_angleProperty();
                }
                break;
            case MapIniParser.T__58:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 900;
                this.aiDataClass_skirmishBuildList_structure_initiallyBuildProperty();
                }
                break;
            case MapIniParser.T__59:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 901;
                this.aiDataClass_skirmishBuildList_structure_automaticallyBuildProperty();
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
    public aiDataClass_skirmishBuildList_structure_locationProperty(): AiDataClass_skirmishBuildList_structure_locationPropertyContext {
        let localContext = new AiDataClass_skirmishBuildList_structure_locationPropertyContext(this.context, this.state);
        this.enterRule(localContext, 112, MapIniParser.RULE_aiDataClass_skirmishBuildList_structure_locationProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 904;
            this.match(MapIniParser.T__55);
            this.state = 905;
            this.match(MapIniParser.WS);
            this.state = 906;
            this.match(MapIniParser.EQ);
            this.state = 907;
            this.match(MapIniParser.WS);
            this.state = 908;
            this.match(MapIniParser.XCOORD);
            this.state = 909;
            this.match(MapIniParser.WS);
            this.state = 910;
            this.match(MapIniParser.YCOORD);
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
    public aiDataClass_skirmishBuildList_structure_rebuildsProperty(): AiDataClass_skirmishBuildList_structure_rebuildsPropertyContext {
        let localContext = new AiDataClass_skirmishBuildList_structure_rebuildsPropertyContext(this.context, this.state);
        this.enterRule(localContext, 114, MapIniParser.RULE_aiDataClass_skirmishBuildList_structure_rebuildsProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 912;
            this.match(MapIniParser.T__56);
            this.state = 913;
            this.match(MapIniParser.WS);
            this.state = 914;
            this.match(MapIniParser.EQ);
            this.state = 915;
            this.match(MapIniParser.WS);
            this.state = 916;
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
    public aiDataClass_skirmishBuildList_structure_angleProperty(): AiDataClass_skirmishBuildList_structure_anglePropertyContext {
        let localContext = new AiDataClass_skirmishBuildList_structure_anglePropertyContext(this.context, this.state);
        this.enterRule(localContext, 116, MapIniParser.RULE_aiDataClass_skirmishBuildList_structure_angleProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 918;
            this.match(MapIniParser.T__57);
            this.state = 919;
            this.match(MapIniParser.WS);
            this.state = 920;
            this.match(MapIniParser.EQ);
            this.state = 921;
            this.match(MapIniParser.WS);
            this.state = 922;
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
    public aiDataClass_skirmishBuildList_structure_initiallyBuildProperty(): AiDataClass_skirmishBuildList_structure_initiallyBuildPropertyContext {
        let localContext = new AiDataClass_skirmishBuildList_structure_initiallyBuildPropertyContext(this.context, this.state);
        this.enterRule(localContext, 118, MapIniParser.RULE_aiDataClass_skirmishBuildList_structure_initiallyBuildProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 924;
            this.match(MapIniParser.T__58);
            this.state = 925;
            this.match(MapIniParser.WS);
            this.state = 926;
            this.match(MapIniParser.EQ);
            this.state = 927;
            this.match(MapIniParser.WS);
            this.state = 928;
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
    public aiDataClass_skirmishBuildList_structure_automaticallyBuildProperty(): AiDataClass_skirmishBuildList_structure_automaticallyBuildPropertyContext {
        let localContext = new AiDataClass_skirmishBuildList_structure_automaticallyBuildPropertyContext(this.context, this.state);
        this.enterRule(localContext, 120, MapIniParser.RULE_aiDataClass_skirmishBuildList_structure_automaticallyBuildProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 930;
            this.match(MapIniParser.T__59);
            this.state = 931;
            this.match(MapIniParser.WS);
            this.state = 932;
            this.match(MapIniParser.EQ);
            this.state = 933;
            this.match(MapIniParser.WS);
            this.state = 934;
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
    public mappedImageClass(): MappedImageClassContext {
        let localContext = new MappedImageClassContext(this.context, this.state);
        this.enterRule(localContext, 122, MapIniParser.RULE_mappedImageClass);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 936;
            this.match(MapIniParser.T__60);
            this.state = 937;
            this.match(MapIniParser.WS);
            this.state = 938;
            this.match(MapIniParser.ID);
            this.state = 939;
            this.match(MapIniParser.NEWLINE);
            this.state = 947;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    this.state = 947;
                    this.errorHandler.sync(this);
                    switch (this.tokenStream.LA(1)) {
                    case MapIniParser.T__61:
                    case MapIniParser.T__62:
                    case MapIniParser.T__63:
                    case MapIniParser.T__64:
                    case MapIniParser.T__65:
                    case MapIniParser.WS:
                        {
                        {
                        this.state = 941;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 536) {
                            {
                            this.state = 940;
                            this.match(MapIniParser.WS);
                            }
                        }

                        this.state = 943;
                        this.mappedImageClassProperties();
                        this.state = 944;
                        this.match(MapIniParser.NEWLINE);
                        }
                        }
                        break;
                    case MapIniParser.NEWLINE:
                        {
                        this.state = 946;
                        this.match(MapIniParser.NEWLINE);
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 949;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 26, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            this.state = 951;
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
        this.enterRule(localContext, 124, MapIniParser.RULE_mappedImageClassProperties);
        try {
            this.state = 958;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__61:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 953;
                this.mappedImageClass_textureProperty();
                }
                break;
            case MapIniParser.T__62:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 954;
                this.mappedImageClass_textureWidthProperty();
                }
                break;
            case MapIniParser.T__63:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 955;
                this.mappedImageClass_textureHeightProperty();
                }
                break;
            case MapIniParser.T__64:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 956;
                this.mappedImageClass_coordsProperty();
                }
                break;
            case MapIniParser.T__65:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 957;
                this.mappedImageClass_statusProperty();
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
    public mappedImageClass_textureProperty(): MappedImageClass_texturePropertyContext {
        let localContext = new MappedImageClass_texturePropertyContext(this.context, this.state);
        this.enterRule(localContext, 126, MapIniParser.RULE_mappedImageClass_textureProperty);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 960;
            this.match(MapIniParser.T__61);
            this.state = 962;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 536) {
                {
                this.state = 961;
                this.match(MapIniParser.WS);
                }
            }

            this.state = 964;
            this.match(MapIniParser.EQ);
            this.state = 966;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 536) {
                {
                this.state = 965;
                this.match(MapIniParser.WS);
                }
            }

            this.state = 968;
            this.file();
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
    public mappedImageClass_textureWidthProperty(): MappedImageClass_textureWidthPropertyContext {
        let localContext = new MappedImageClass_textureWidthPropertyContext(this.context, this.state);
        this.enterRule(localContext, 128, MapIniParser.RULE_mappedImageClass_textureWidthProperty);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 970;
            this.match(MapIniParser.T__62);
            this.state = 972;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 536) {
                {
                this.state = 971;
                this.match(MapIniParser.WS);
                }
            }

            this.state = 974;
            this.match(MapIniParser.EQ);
            this.state = 976;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 536) {
                {
                this.state = 975;
                this.match(MapIniParser.WS);
                }
            }

            this.state = 978;
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
    public mappedImageClass_textureHeightProperty(): MappedImageClass_textureHeightPropertyContext {
        let localContext = new MappedImageClass_textureHeightPropertyContext(this.context, this.state);
        this.enterRule(localContext, 130, MapIniParser.RULE_mappedImageClass_textureHeightProperty);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 980;
            this.match(MapIniParser.T__63);
            this.state = 982;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 536) {
                {
                this.state = 981;
                this.match(MapIniParser.WS);
                }
            }

            this.state = 984;
            this.match(MapIniParser.EQ);
            this.state = 986;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 536) {
                {
                this.state = 985;
                this.match(MapIniParser.WS);
                }
            }

            this.state = 988;
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
    public mappedImageClass_coordsProperty(): MappedImageClass_coordsPropertyContext {
        let localContext = new MappedImageClass_coordsPropertyContext(this.context, this.state);
        this.enterRule(localContext, 132, MapIniParser.RULE_mappedImageClass_coordsProperty);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 990;
            this.match(MapIniParser.T__64);
            this.state = 992;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 536) {
                {
                this.state = 991;
                this.match(MapIniParser.WS);
                }
            }

            this.state = 994;
            this.match(MapIniParser.EQ);
            this.state = 996;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 536) {
                {
                this.state = 995;
                this.match(MapIniParser.WS);
                }
            }

            this.state = 998;
            this.match(MapIniParser.COORDLEFT);
            this.state = 999;
            this.match(MapIniParser.WS);
            this.state = 1000;
            this.match(MapIniParser.COORDTOP);
            this.state = 1001;
            this.match(MapIniParser.WS);
            this.state = 1002;
            this.match(MapIniParser.COORDRIGHT);
            this.state = 1003;
            this.match(MapIniParser.WS);
            this.state = 1004;
            this.match(MapIniParser.COORDBOTTOM);
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
    public mappedImageClass_statusProperty(): MappedImageClass_statusPropertyContext {
        let localContext = new MappedImageClass_statusPropertyContext(this.context, this.state);
        this.enterRule(localContext, 134, MapIniParser.RULE_mappedImageClass_statusProperty);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1006;
            this.match(MapIniParser.T__65);
            this.state = 1008;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 536) {
                {
                this.state = 1007;
                this.match(MapIniParser.WS);
                }
            }

            this.state = 1010;
            this.match(MapIniParser.EQ);
            this.state = 1012;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 536) {
                {
                this.state = 1011;
                this.match(MapIniParser.WS);
                }
            }

            this.state = 1014;
            _la = this.tokenStream.LA(1);
            if(!(_la === 67 || _la === 512)) {
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
    public animation2DClass(): Animation2DClassContext {
        let localContext = new Animation2DClassContext(this.context, this.state);
        this.enterRule(localContext, 136, MapIniParser.RULE_animation2DClass);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1016;
            this.match(MapIniParser.T__67);
            this.state = 1017;
            this.match(MapIniParser.ID);
            this.state = 1021;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 31) !== 0)) {
                {
                {
                this.state = 1018;
                this.animation2DClassProperties();
                }
                }
                this.state = 1023;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1024;
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
        this.enterRule(localContext, 138, MapIniParser.RULE_animation2DClassProperties);
        try {
            this.state = 1041;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__68:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1026;
                this.match(MapIniParser.T__68);
                this.state = 1027;
                this.match(MapIniParser.EQ);
                this.state = 1028;
                this.match(MapIniParser.ID);
                }
                break;
            case MapIniParser.T__69:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1029;
                this.match(MapIniParser.T__69);
                this.state = 1030;
                this.match(MapIniParser.EQ);
                this.state = 1031;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__70:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1032;
                this.match(MapIniParser.T__70);
                this.state = 1033;
                this.match(MapIniParser.EQ);
                this.state = 1034;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__71:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1035;
                this.match(MapIniParser.T__71);
                this.state = 1036;
                this.match(MapIniParser.EQ);
                this.state = 1037;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__72:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1038;
                this.match(MapIniParser.T__72);
                this.state = 1039;
                this.match(MapIniParser.EQ);
                this.state = 1040;
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
        this.enterRule(localContext, 140, MapIniParser.RULE_armorClass);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1043;
            this.match(MapIniParser.T__73);
            this.state = 1044;
            this.match(MapIniParser.ID);
            this.state = 1048;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 74) {
                {
                {
                this.state = 1045;
                this.armorClassProperties();
                }
                }
                this.state = 1050;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1051;
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
        this.enterRule(localContext, 142, MapIniParser.RULE_armorClassProperties);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1053;
            this.match(MapIniParser.T__73);
            this.state = 1054;
            this.match(MapIniParser.EQ);
            this.state = 1055;
            this.match(MapIniParser.ID);
            this.state = 1056;
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
        this.enterRule(localContext, 144, MapIniParser.RULE_commandButtonClass);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1058;
            this.match(MapIniParser.T__74);
            this.state = 1059;
            this.match(MapIniParser.ID);
            this.state = 1063;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 198 || _la === 204 || ((((_la - 331)) & ~0x1F) === 0 && ((1 << (_la - 331)) & 73) !== 0) || ((((_la - 402)) & ~0x1F) === 0 && ((1 << (_la - 402)) & 1023) !== 0) || _la === 510 || _la === 511) {
                {
                {
                this.state = 1060;
                this.commandButtonClassProperties();
                }
                }
                this.state = 1065;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1066;
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
        this.enterRule(localContext, 146, MapIniParser.RULE_commandButtonClassProperties);
        try {
            this.state = 1085;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__401:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1068;
                this.cb_command_property();
                }
                break;
            case MapIniParser.T__402:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1069;
                this.cb_options_property();
                }
                break;
            case MapIniParser.T__336:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1070;
                this.cb_buttonimage_property();
                }
                break;
            case MapIniParser.T__403:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1071;
                this.cb_buttonbordertype_property();
                }
                break;
            case MapIniParser.T__404:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1072;
                this.cb_textlabel_property();
                }
                break;
            case MapIniParser.T__405:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1073;
                this.cb_descriptionlabel_property();
                }
                break;
            case MapIniParser.T__406:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1074;
                this.cb_conflictinglabel_property();
                }
                break;
            case MapIniParser.T__407:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1075;
                this.cb_cursorname_propery();
                }
                break;
            case MapIniParser.T__408:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1076;
                this.cb_radius_cursorname_value();
                }
                break;
            case MapIniParser.T__409:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 1077;
                this.cb_invalid_cursorname_propery();
                }
                break;
            case MapIniParser.T__333:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 1078;
                this.cb_unitspecificsound_property();
                }
                break;
            case MapIniParser.T__410:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 1079;
                this.cb_maxshotsfire_property();
                }
                break;
            case MapIniParser.T__509:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 1080;
                this.object_property();
                }
                break;
            case MapIniParser.T__197:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 1081;
                this.science_property();
                }
                break;
            case MapIniParser.T__203:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 1082;
                this.specialpower_property();
                }
                break;
            case MapIniParser.T__330:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 1083;
                this.upgrade_property();
                }
                break;
            case MapIniParser.T__510:
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 1084;
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
        this.enterRule(localContext, 148, MapIniParser.RULE_commandSetClass);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1087;
            this.match(MapIniParser.T__75);
            this.state = 1088;
            this.match(MapIniParser.ID);
            this.state = 1092;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 513) {
                {
                {
                this.state = 1089;
                this.commandSetClassProperty();
                }
                }
                this.state = 1094;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1095;
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
        this.enterRule(localContext, 150, MapIniParser.RULE_commandSetClassProperty);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1097;
            this.match(MapIniParser.INT);
            this.state = 1098;
            this.match(MapIniParser.EQ);
            this.state = 1099;
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
        this.enterRule(localContext, 152, MapIniParser.RULE_damageFXClass);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1101;
            this.match(MapIniParser.T__76);
            this.state = 1102;
            this.match(MapIniParser.ID);
            this.state = 1106;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 412)) & ~0x1F) === 0 && ((1 << (_la - 412)) & 63) !== 0)) {
                {
                {
                this.state = 1103;
                this.damageFXClassProperties();
                }
                }
                this.state = 1108;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1109;
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
        this.enterRule(localContext, 154, MapIniParser.RULE_damageFXClassProperties);
        try {
            this.state = 1117;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__411:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1111;
                this.dfx_throttletime_property();
                }
                break;
            case MapIniParser.T__413:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1112;
                this.dfx_majorfx_property();
                }
                break;
            case MapIniParser.T__414:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1113;
                this.dfx_minorfx_property();
                }
                break;
            case MapIniParser.T__415:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1114;
                this.dfx_vetmajorfx_property();
                }
                break;
            case MapIniParser.T__412:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1115;
                this.dfx_amountformajorfx_property();
                }
                break;
            case MapIniParser.T__416:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1116;
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
        this.enterRule(localContext, 156, MapIniParser.RULE_drawGroupInfoClass);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1119;
            this.match(MapIniParser.T__77);
            this.state = 1123;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 418)) & ~0x1F) === 0 && ((1 << (_la - 418)) & 1023) !== 0)) {
                {
                {
                this.state = 1120;
                this.drawgroupinfoProperties();
                }
                }
                this.state = 1125;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1126;
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
        this.enterRule(localContext, 158, MapIniParser.RULE_drawgroupinfoProperties);
        try {
            this.state = 1138;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__417:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1128;
                this.dgi_useplayercolor_property();
                }
                break;
            case MapIniParser.T__418:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1129;
                this.dgi_colorfortext_property();
                }
                break;
            case MapIniParser.T__419:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1130;
                this.dgi_colordropshadow_property();
                }
                break;
            case MapIniParser.T__420:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1131;
                this.dgi_dropshadowoffsetX_property();
                }
                break;
            case MapIniParser.T__421:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1132;
                this.dgi_dropshadowoffsetY_property();
                }
                break;
            case MapIniParser.T__422:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1133;
                this.dgi_fontname_property();
                }
                break;
            case MapIniParser.T__423:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1134;
                this.dgi_fontsize_property();
                }
                break;
            case MapIniParser.T__424:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1135;
                this.dgi_fontisbold_property();
                }
                break;
            case MapIniParser.T__425:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1136;
                this.dgi_drawposXperc_property();
                }
                break;
            case MapIniParser.T__426:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 1137;
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
        this.enterRule(localContext, 160, MapIniParser.RULE_fxListClass);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1140;
            this.match(MapIniParser.T__78);
            this.state = 1141;
            this.match(MapIniParser.ID);
            this.state = 1145;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 255) !== 0)) {
                {
                {
                this.state = 1142;
                this.fxlistblocks();
                }
                }
                this.state = 1147;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1148;
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
        this.enterRule(localContext, 162, MapIniParser.RULE_fxlistblocks);
        try {
            this.state = 1158;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__79:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1150;
                this.fxlist_ps_block();
                }
                break;
            case MapIniParser.T__80:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1151;
                this.fxlist_sound_block();
                }
                break;
            case MapIniParser.T__81:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1152;
                this.fxlist_rayeffect_block();
                }
                break;
            case MapIniParser.T__82:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1153;
                this.fxlist_tracer_block();
                }
                break;
            case MapIniParser.T__83:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1154;
                this.fxlist_lightpulse_block();
                }
                break;
            case MapIniParser.T__84:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1155;
                this.fxlist_viewshake_block();
                }
                break;
            case MapIniParser.T__85:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1156;
                this.fxlist_terrainscorch_block();
                }
                break;
            case MapIniParser.T__86:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1157;
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
        this.enterRule(localContext, 164, MapIniParser.RULE_fxlist_ps_block);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1160;
            this.match(MapIniParser.T__79);
            this.state = 1177;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 428)) & ~0x1F) === 0 && ((1 << (_la - 428)) & 16383) !== 0)) {
                {
                this.state = 1175;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.T__427:
                    {
                    this.state = 1161;
                    this.fxlist_ps_name_property();
                    }
                    break;
                case MapIniParser.T__428:
                    {
                    this.state = 1162;
                    this.fxlist_ps_count_property();
                    }
                    break;
                case MapIniParser.T__429:
                    {
                    this.state = 1163;
                    this.fxlist_ps_offset_property();
                    }
                    break;
                case MapIniParser.T__431:
                    {
                    this.state = 1164;
                    this.fxlist_ps_height_property();
                    }
                    break;
                case MapIniParser.T__430:
                    {
                    this.state = 1165;
                    this.fxlist_ps_radius_property();
                    }
                    break;
                case MapIniParser.T__432:
                    {
                    this.state = 1166;
                    this.fxlist_ps_initialDelay_property();
                    }
                    break;
                case MapIniParser.T__433:
                    {
                    this.state = 1167;
                    this.fxlist_ps_rotateX_property();
                    }
                    break;
                case MapIniParser.T__434:
                    {
                    this.state = 1168;
                    this.fxlist_ps_rotatey_property();
                    }
                    break;
                case MapIniParser.T__435:
                    {
                    this.state = 1169;
                    this.fxlist_ps_rotateZ_property();
                    }
                    break;
                case MapIniParser.T__436:
                    {
                    this.state = 1170;
                    this.fxlist_ps_orienttoobject_property();
                    }
                    break;
                case MapIniParser.T__438:
                    {
                    this.state = 1171;
                    this.fxlist_ps_usecallerradius_property();
                    }
                    break;
                case MapIniParser.T__437:
                    {
                    this.state = 1172;
                    this.fxlist_ps_ricochet_property();
                    }
                    break;
                case MapIniParser.T__439:
                    {
                    this.state = 1173;
                    this.fxlist_ps_attachtoobject_property();
                    }
                    break;
                case MapIniParser.T__440:
                    {
                    this.state = 1174;
                    this.fxlist_ps_creategroundheight_property();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 1179;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1180;
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
        this.enterRule(localContext, 166, MapIniParser.RULE_fxlist_sound_block);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1182;
            this.match(MapIniParser.T__80);
            this.state = 1186;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 428) {
                {
                {
                this.state = 1183;
                this.fxlist_sound_property();
                }
                }
                this.state = 1188;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1189;
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
        this.enterRule(localContext, 168, MapIniParser.RULE_fxlist_rayeffect_block);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1191;
            this.match(MapIniParser.T__81);
            this.state = 1197;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 428)) & ~0x1F) === 0 && ((1 << (_la - 428)) & 49153) !== 0)) {
                {
                this.state = 1195;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.T__427:
                    {
                    this.state = 1192;
                    this.fxlist_name_object_propety();
                    }
                    break;
                case MapIniParser.T__441:
                    {
                    this.state = 1193;
                    this.fxlist_rayeffect_primaryoffset_property();
                    }
                    break;
                case MapIniParser.T__442:
                    {
                    this.state = 1194;
                    this.fxlist_rayeffect_secondaryoffset_proprety();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 1199;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1200;
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
        this.enterRule(localContext, 170, MapIniParser.RULE_fxlist_tracer_block);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1202;
            this.match(MapIniParser.T__82);
            this.state = 1213;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 122 || _la === 125 || ((((_la - 444)) & ~0x1F) === 0 && ((1 << (_la - 444)) & 63) !== 0)) {
                {
                this.state = 1211;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.T__443:
                    {
                    this.state = 1203;
                    this.fxlist_tracer_name_propety();
                    }
                    break;
                case MapIniParser.T__444:
                    {
                    this.state = 1204;
                    this.fxlist_tracer_bonename_property();
                    }
                    break;
                case MapIniParser.T__124:
                    {
                    this.state = 1205;
                    this.fxlist_tracer_speed_property();
                    }
                    break;
                case MapIniParser.T__445:
                    {
                    this.state = 1206;
                    this.fxlist_tracer_decayat_property();
                    }
                    break;
                case MapIniParser.T__446:
                    {
                    this.state = 1207;
                    this.fxlist_tracer_length_property();
                    }
                    break;
                case MapIniParser.T__447:
                    {
                    this.state = 1208;
                    this.fxlist_tracer_width_property();
                    }
                    break;
                case MapIniParser.T__121:
                    {
                    this.state = 1209;
                    this.fxlist_tracer_color_property();
                    }
                    break;
                case MapIniParser.T__448:
                    {
                    this.state = 1210;
                    this.fxlist_tracer_probability_property();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 1215;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1216;
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
        this.enterRule(localContext, 172, MapIniParser.RULE_fxlist_lightpulse_block);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1218;
            this.match(MapIniParser.T__83);
            this.state = 1226;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 122 || ((((_la - 431)) & ~0x1F) === 0 && ((1 << (_la - 431)) & 3670017) !== 0)) {
                {
                this.state = 1224;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.T__121:
                    {
                    this.state = 1219;
                    this.fxlist_lightpulse_color_property();
                    }
                    break;
                case MapIniParser.T__430:
                    {
                    this.state = 1220;
                    this.fxlist_lightpulse_radius_property();
                    }
                    break;
                case MapIniParser.T__449:
                    {
                    this.state = 1221;
                    this.fxlist_lightpulse_radiuspercentobjectsize_property();
                    }
                    break;
                case MapIniParser.T__450:
                    {
                    this.state = 1222;
                    this.fxlist_lightpulse_increasetime_property();
                    }
                    break;
                case MapIniParser.T__451:
                    {
                    this.state = 1223;
                    this.fxlist_lightpulse_decreasetime_property();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 1228;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1229;
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
        this.enterRule(localContext, 174, MapIniParser.RULE_fxlist_viewshake_block);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1231;
            this.match(MapIniParser.T__84);
            this.state = 1235;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 318) {
                {
                {
                this.state = 1232;
                this.fxlist_viewshake_type_property();
                }
                }
                this.state = 1237;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1238;
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
        this.enterRule(localContext, 176, MapIniParser.RULE_fxlist_terrainscorch_block);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1240;
            this.match(MapIniParser.T__85);
            this.state = 1245;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 318 || _la === 431) {
                {
                this.state = 1243;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.T__317:
                    {
                    this.state = 1241;
                    this.fxlist_scorch_type_property();
                    }
                    break;
                case MapIniParser.T__430:
                    {
                    this.state = 1242;
                    this.fxlist_scorch_radius_property();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 1247;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1248;
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
        this.enterRule(localContext, 178, MapIniParser.RULE_fxlist_fxlistatbone_block);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1250;
            this.match(MapIniParser.T__86);
            this.state = 1256;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 445)) & ~0x1F) === 0 && ((1 << (_la - 445)) & 769) !== 0)) {
                {
                this.state = 1254;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.T__452:
                    {
                    this.state = 1251;
                    this.fxlist_atbonepos_fx_property();
                    }
                    break;
                case MapIniParser.T__444:
                    {
                    this.state = 1252;
                    this.fxlist_atbonepos_bonename_property();
                    }
                    break;
                case MapIniParser.T__453:
                    {
                    this.state = 1253;
                    this.fxlist_atbonepos_orienttoobject_property();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 1258;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1259;
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
        this.enterRule(localContext, 180, MapIniParser.RULE_inGameUIClass);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1261;
            this.match(MapIniParser.T__87);
            this.state = 1266;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 536870911) !== 0) || ((((_la - 455)) & ~0x1F) === 0 && ((1 << (_la - 455)) & 4294967295) !== 0) || ((((_la - 487)) & ~0x1F) === 0 && ((1 << (_la - 487)) & 2047) !== 0)) {
                {
                this.state = 1264;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case MapIniParser.T__454:
                case MapIniParser.T__455:
                case MapIniParser.T__456:
                case MapIniParser.T__457:
                case MapIniParser.T__458:
                case MapIniParser.T__459:
                case MapIniParser.T__460:
                case MapIniParser.T__461:
                case MapIniParser.T__462:
                case MapIniParser.T__463:
                case MapIniParser.T__464:
                case MapIniParser.T__465:
                case MapIniParser.T__466:
                case MapIniParser.T__467:
                case MapIniParser.T__468:
                case MapIniParser.T__469:
                case MapIniParser.T__470:
                case MapIniParser.T__471:
                case MapIniParser.T__472:
                case MapIniParser.T__473:
                case MapIniParser.T__474:
                case MapIniParser.T__475:
                case MapIniParser.T__476:
                case MapIniParser.T__477:
                case MapIniParser.T__478:
                case MapIniParser.T__479:
                case MapIniParser.T__480:
                case MapIniParser.T__481:
                case MapIniParser.T__482:
                case MapIniParser.T__483:
                case MapIniParser.T__484:
                case MapIniParser.T__485:
                case MapIniParser.T__486:
                case MapIniParser.T__487:
                case MapIniParser.T__488:
                case MapIniParser.T__489:
                case MapIniParser.T__490:
                case MapIniParser.T__491:
                case MapIniParser.T__492:
                case MapIniParser.T__493:
                case MapIniParser.T__494:
                case MapIniParser.T__495:
                case MapIniParser.T__496:
                    {
                    this.state = 1262;
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
                    this.state = 1263;
                    this.igui_blocks();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 1268;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1269;
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
        this.enterRule(localContext, 182, MapIniParser.RULE_igui_blocks);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1271;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 536870911) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1275;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 62 || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 63) !== 0)) {
                {
                {
                this.state = 1272;
                this.ingui_block_properties();
                }
                }
                this.state = 1277;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1278;
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
        this.enterRule(localContext, 184, MapIniParser.RULE_ingui_block_properties);
        try {
            this.state = 1304;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__61:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1280;
                this.match(MapIniParser.T__61);
                this.state = 1281;
                this.match(MapIniParser.EQ);
                this.state = 1282;
                this.match(MapIniParser.ID);
                }
                break;
            case MapIniParser.T__117:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1283;
                this.match(MapIniParser.T__117);
                this.state = 1284;
                this.match(MapIniParser.EQ);
                this.state = 1285;
                this.match(MapIniParser.ID);
                }
                break;
            case MapIniParser.T__118:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1286;
                this.match(MapIniParser.T__118);
                this.state = 1287;
                this.match(MapIniParser.EQ);
                this.state = 1288;
                this.match(MapIniParser.PROCENT);
                }
                break;
            case MapIniParser.T__119:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1289;
                this.match(MapIniParser.T__119);
                this.state = 1290;
                this.match(MapIniParser.EQ);
                this.state = 1291;
                this.match(MapIniParser.PROCENT);
                }
                break;
            case MapIniParser.T__120:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1292;
                this.match(MapIniParser.T__120);
                this.state = 1293;
                this.match(MapIniParser.EQ);
                this.state = 1294;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__121:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1295;
                this.match(MapIniParser.T__121);
                this.state = 1296;
                this.match(MapIniParser.EQ);
                this.state = 1297;
                this.match(MapIniParser.R);
                this.state = 1298;
                this.match(MapIniParser.G);
                this.state = 1299;
                this.match(MapIniParser.B);
                this.state = 1300;
                this.match(MapIniParser.A);
                }
                break;
            case MapIniParser.T__122:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1301;
                this.match(MapIniParser.T__122);
                this.state = 1302;
                this.match(MapIniParser.EQ);
                this.state = 1303;
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
        this.enterRule(localContext, 186, MapIniParser.RULE_locomotorClass);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1306;
            this.match(MapIniParser.T__123);
            this.state = 1307;
            this.match(MapIniParser.ID);
            this.state = 1311;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 125)) & ~0x1F) === 0 && ((1 << (_la - 125)) & 4294967295) !== 0) || ((((_la - 157)) & ~0x1F) === 0 && ((1 << (_la - 157)) & 268435455) !== 0)) {
                {
                {
                this.state = 1308;
                this.locomotor_properties();
                }
                }
                this.state = 1313;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1314;
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
        this.enterRule(localContext, 188, MapIniParser.RULE_locomotor_properties);
        let _la: number;
        try {
            this.state = 1488;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__180:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1316;
                this.locomotor_surface_property();
                }
                break;
            case MapIniParser.T__181:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1317;
                this.locomotor_zbehavior_property();
                }
                break;
            case MapIniParser.T__182:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1318;
                this.locomotor_appereance_property();
                }
                break;
            case MapIniParser.T__183:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1319;
                this.locomotor_movepriority_property();
                }
                break;
            case MapIniParser.T__124:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1320;
                this.match(MapIniParser.T__124);
                this.state = 1321;
                this.match(MapIniParser.EQ);
                this.state = 1322;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
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
                this.state = 1323;
                this.match(MapIniParser.T__125);
                this.state = 1324;
                this.match(MapIniParser.EQ);
                this.state = 1325;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
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
                this.state = 1326;
                this.match(MapIniParser.T__126);
                this.state = 1327;
                this.match(MapIniParser.EQ);
                this.state = 1328;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
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
                this.state = 1329;
                this.match(MapIniParser.T__127);
                this.state = 1330;
                this.match(MapIniParser.EQ);
                this.state = 1331;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
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
                this.state = 1332;
                this.match(MapIniParser.T__128);
                this.state = 1333;
                this.match(MapIniParser.EQ);
                this.state = 1334;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
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
                this.state = 1335;
                this.match(MapIniParser.T__129);
                this.state = 1336;
                this.match(MapIniParser.EQ);
                this.state = 1337;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
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
                this.state = 1338;
                this.match(MapIniParser.T__130);
                this.state = 1339;
                this.match(MapIniParser.EQ);
                this.state = 1340;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
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
                this.state = 1341;
                this.match(MapIniParser.T__131);
                this.state = 1342;
                this.match(MapIniParser.EQ);
                this.state = 1343;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__132:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 1344;
                this.match(MapIniParser.T__132);
                this.state = 1345;
                this.match(MapIniParser.EQ);
                this.state = 1346;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__133:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 1347;
                this.match(MapIniParser.T__133);
                this.state = 1348;
                this.match(MapIniParser.EQ);
                this.state = 1349;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__134:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 1350;
                this.match(MapIniParser.T__134);
                this.state = 1351;
                this.match(MapIniParser.EQ);
                this.state = 1352;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__135:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 1353;
                this.match(MapIniParser.T__135);
                this.state = 1354;
                this.match(MapIniParser.EQ);
                this.state = 1355;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
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
                this.state = 1356;
                this.match(MapIniParser.T__136);
                this.state = 1357;
                this.match(MapIniParser.EQ);
                this.state = 1358;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
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
                this.state = 1359;
                this.match(MapIniParser.T__137);
                this.state = 1360;
                this.match(MapIniParser.EQ);
                this.state = 1361;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
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
                this.state = 1362;
                this.match(MapIniParser.T__138);
                this.state = 1363;
                this.match(MapIniParser.EQ);
                this.state = 1364;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
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
                this.state = 1365;
                this.match(MapIniParser.T__139);
                this.state = 1366;
                this.match(MapIniParser.EQ);
                this.state = 1367;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
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
                this.state = 1368;
                this.match(MapIniParser.T__140);
                this.state = 1369;
                this.match(MapIniParser.EQ);
                this.state = 1370;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
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
                this.state = 1371;
                this.match(MapIniParser.T__141);
                this.state = 1372;
                this.match(MapIniParser.EQ);
                this.state = 1373;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__142:
                this.enterOuterAlt(localContext, 23);
                {
                this.state = 1374;
                this.match(MapIniParser.T__142);
                this.state = 1375;
                this.match(MapIniParser.EQ);
                this.state = 1376;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
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
                this.state = 1377;
                this.match(MapIniParser.T__143);
                this.state = 1378;
                this.match(MapIniParser.EQ);
                this.state = 1379;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
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
                this.state = 1380;
                this.match(MapIniParser.T__144);
                this.state = 1381;
                this.match(MapIniParser.EQ);
                this.state = 1382;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
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
                this.state = 1383;
                this.match(MapIniParser.T__145);
                this.state = 1384;
                this.match(MapIniParser.EQ);
                this.state = 1385;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
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
                this.state = 1386;
                this.match(MapIniParser.T__146);
                this.state = 1387;
                this.match(MapIniParser.EQ);
                this.state = 1388;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
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
                this.state = 1389;
                this.match(MapIniParser.T__147);
                this.state = 1390;
                this.match(MapIniParser.EQ);
                this.state = 1391;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
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
                this.state = 1392;
                this.match(MapIniParser.T__148);
                this.state = 1393;
                this.match(MapIniParser.EQ);
                this.state = 1394;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
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
                this.state = 1395;
                this.match(MapIniParser.T__149);
                this.state = 1396;
                this.match(MapIniParser.EQ);
                this.state = 1397;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
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
                this.state = 1398;
                this.match(MapIniParser.T__150);
                this.state = 1399;
                this.match(MapIniParser.EQ);
                this.state = 1400;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__151:
                this.enterOuterAlt(localContext, 32);
                {
                this.state = 1401;
                this.match(MapIniParser.T__151);
                this.state = 1402;
                this.match(MapIniParser.EQ);
                this.state = 1403;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__152:
                this.enterOuterAlt(localContext, 33);
                {
                this.state = 1404;
                this.match(MapIniParser.T__152);
                this.state = 1405;
                this.match(MapIniParser.EQ);
                this.state = 1406;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__153:
                this.enterOuterAlt(localContext, 34);
                {
                this.state = 1407;
                this.match(MapIniParser.T__153);
                this.state = 1408;
                this.match(MapIniParser.EQ);
                this.state = 1409;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__154:
                this.enterOuterAlt(localContext, 35);
                {
                this.state = 1410;
                this.match(MapIniParser.T__154);
                this.state = 1411;
                this.match(MapIniParser.EQ);
                this.state = 1412;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__155:
                this.enterOuterAlt(localContext, 36);
                {
                this.state = 1413;
                this.match(MapIniParser.T__155);
                this.state = 1414;
                this.match(MapIniParser.EQ);
                this.state = 1415;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
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
                this.state = 1416;
                this.match(MapIniParser.T__156);
                this.state = 1417;
                this.match(MapIniParser.EQ);
                this.state = 1418;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
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
                this.state = 1419;
                this.match(MapIniParser.T__157);
                this.state = 1420;
                this.match(MapIniParser.EQ);
                this.state = 1421;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__158:
                this.enterOuterAlt(localContext, 39);
                {
                this.state = 1422;
                this.match(MapIniParser.T__158);
                this.state = 1423;
                this.match(MapIniParser.EQ);
                this.state = 1424;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__159:
                this.enterOuterAlt(localContext, 40);
                {
                this.state = 1425;
                this.match(MapIniParser.T__159);
                this.state = 1426;
                this.match(MapIniParser.EQ);
                this.state = 1427;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
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
                this.state = 1428;
                this.match(MapIniParser.T__160);
                this.state = 1429;
                this.match(MapIniParser.EQ);
                this.state = 1430;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
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
                this.state = 1431;
                this.match(MapIniParser.T__161);
                this.state = 1432;
                this.match(MapIniParser.EQ);
                this.state = 1433;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
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
                this.state = 1434;
                this.match(MapIniParser.T__162);
                this.state = 1435;
                this.match(MapIniParser.EQ);
                this.state = 1436;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
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
                this.state = 1437;
                this.match(MapIniParser.T__163);
                this.state = 1438;
                this.match(MapIniParser.EQ);
                this.state = 1439;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
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
                this.state = 1440;
                this.match(MapIniParser.T__164);
                this.state = 1441;
                this.match(MapIniParser.EQ);
                this.state = 1442;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
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
                this.state = 1443;
                this.match(MapIniParser.T__165);
                this.state = 1444;
                this.match(MapIniParser.EQ);
                this.state = 1445;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__166:
                this.enterOuterAlt(localContext, 47);
                {
                this.state = 1446;
                this.match(MapIniParser.T__166);
                this.state = 1447;
                this.match(MapIniParser.EQ);
                this.state = 1448;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__167:
                this.enterOuterAlt(localContext, 48);
                {
                this.state = 1449;
                this.match(MapIniParser.T__167);
                this.state = 1450;
                this.match(MapIniParser.EQ);
                this.state = 1451;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__168:
                this.enterOuterAlt(localContext, 49);
                {
                this.state = 1452;
                this.match(MapIniParser.T__168);
                this.state = 1453;
                this.match(MapIniParser.EQ);
                this.state = 1454;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
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
                this.state = 1455;
                this.match(MapIniParser.T__169);
                this.state = 1456;
                this.match(MapIniParser.EQ);
                this.state = 1457;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
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
                this.state = 1458;
                this.match(MapIniParser.T__170);
                this.state = 1459;
                this.match(MapIniParser.EQ);
                this.state = 1460;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__171:
                this.enterOuterAlt(localContext, 52);
                {
                this.state = 1461;
                this.match(MapIniParser.T__171);
                this.state = 1462;
                this.match(MapIniParser.EQ);
                this.state = 1463;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
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
                this.state = 1464;
                this.match(MapIniParser.T__172);
                this.state = 1465;
                this.match(MapIniParser.EQ);
                this.state = 1466;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__173:
                this.enterOuterAlt(localContext, 54);
                {
                this.state = 1467;
                this.match(MapIniParser.T__173);
                this.state = 1468;
                this.match(MapIniParser.EQ);
                this.state = 1469;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__174:
                this.enterOuterAlt(localContext, 55);
                {
                this.state = 1470;
                this.match(MapIniParser.T__174);
                this.state = 1471;
                this.match(MapIniParser.EQ);
                this.state = 1472;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__175:
                this.enterOuterAlt(localContext, 56);
                {
                this.state = 1473;
                this.match(MapIniParser.T__175);
                this.state = 1474;
                this.match(MapIniParser.EQ);
                this.state = 1475;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__176:
                this.enterOuterAlt(localContext, 57);
                {
                this.state = 1476;
                this.match(MapIniParser.T__176);
                this.state = 1477;
                this.match(MapIniParser.EQ);
                this.state = 1478;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
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
                this.state = 1479;
                this.match(MapIniParser.T__177);
                this.state = 1480;
                this.match(MapIniParser.EQ);
                this.state = 1481;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
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
                this.state = 1482;
                this.match(MapIniParser.T__178);
                this.state = 1483;
                this.match(MapIniParser.EQ);
                this.state = 1484;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
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
                this.state = 1485;
                this.match(MapIniParser.T__179);
                this.state = 1486;
                this.match(MapIniParser.EQ);
                this.state = 1487;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
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
        this.enterRule(localContext, 190, MapIniParser.RULE_locomotor_surface_property);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1490;
            this.match(MapIniParser.T__180);
            this.state = 1491;
            this.match(MapIniParser.EQ);
            this.state = 1493;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 1492;
                this.surface_value();
                }
                }
                this.state = 1495;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 534);
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
        this.enterRule(localContext, 192, MapIniParser.RULE_locomotor_zbehavior_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1497;
            this.match(MapIniParser.T__181);
            this.state = 1498;
            this.match(MapIniParser.EQ);
            this.state = 1499;
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
        this.enterRule(localContext, 194, MapIniParser.RULE_locomotor_appereance_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1501;
            this.match(MapIniParser.T__182);
            this.state = 1502;
            this.match(MapIniParser.EQ);
            this.state = 1503;
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
        this.enterRule(localContext, 196, MapIniParser.RULE_locomotor_movepriority_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1505;
            this.match(MapIniParser.T__183);
            this.state = 1506;
            this.match(MapIniParser.EQ);
            this.state = 1507;
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
        this.enterRule(localContext, 198, MapIniParser.RULE_surface_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1509;
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
        this.enterRule(localContext, 200, MapIniParser.RULE_zbehavior_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1511;
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
        this.enterRule(localContext, 202, MapIniParser.RULE_appereance_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1513;
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
        this.enterRule(localContext, 204, MapIniParser.RULE_movepriority_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1515;
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
    public rankClass(): RankClassContext {
        let localContext = new RankClassContext(this.context, this.state);
        this.enterRule(localContext, 206, MapIniParser.RULE_rankClass);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1517;
            this.match(MapIniParser.T__184);
            this.state = 1518;
            this.match(MapIniParser.INT);
            this.state = 1522;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 186)) & ~0x1F) === 0 && ((1 << (_la - 186)) & 3585) !== 0)) {
                {
                {
                this.state = 1519;
                this.rank_properties();
                }
                }
                this.state = 1524;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1525;
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
    public rank_properties(): Rank_propertiesContext {
        let localContext = new Rank_propertiesContext(this.context, this.state);
        this.enterRule(localContext, 208, MapIniParser.RULE_rank_properties);
        let _la: number;
        try {
            this.state = 1543;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__185:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1527;
                this.match(MapIniParser.T__185);
                this.state = 1528;
                this.match(MapIniParser.EQ);
                this.state = 1529;
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 187)) & ~0x1F) === 0 && ((1 << (_la - 187)) & 255) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__194:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1530;
                this.match(MapIniParser.T__194);
                this.state = 1531;
                this.match(MapIniParser.EQ);
                this.state = 1532;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__195:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1533;
                this.match(MapIniParser.T__195);
                this.state = 1534;
                this.match(MapIniParser.EQ);
                this.state = 1536;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 1535;
                    this.science_value();
                    }
                    }
                    this.state = 1538;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 512 || _la === 534);
                }
                break;
            case MapIniParser.T__196:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1540;
                this.match(MapIniParser.T__196);
                this.state = 1541;
                this.match(MapIniParser.EQ);
                this.state = 1542;
                this.match(MapIniParser.INT);
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
    public scienceClass(): ScienceClassContext {
        let localContext = new ScienceClassContext(this.context, this.state);
        this.enterRule(localContext, 210, MapIniParser.RULE_scienceClass);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1545;
            this.match(MapIniParser.T__197);
            this.state = 1546;
            this.match(MapIniParser.ID);
            this.state = 1550;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 199)) & ~0x1F) === 0 && ((1 << (_la - 199)) & 31) !== 0)) {
                {
                {
                this.state = 1547;
                this.science_properties();
                }
                }
                this.state = 1552;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1553;
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
    public science_properties(): Science_propertiesContext {
        let localContext = new Science_propertiesContext(this.context, this.state);
        this.enterRule(localContext, 212, MapIniParser.RULE_science_properties);
        let _la: number;
        try {
            this.state = 1574;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__198:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1555;
                this.match(MapIniParser.T__198);
                this.state = 1556;
                this.match(MapIniParser.EQ);
                this.state = 1558;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 1557;
                    this.science_value();
                    }
                    }
                    this.state = 1560;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 512 || _la === 534);
                }
                break;
            case MapIniParser.T__199:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1562;
                this.match(MapIniParser.T__199);
                this.state = 1563;
                this.match(MapIniParser.EQ);
                this.state = 1564;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__200:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1565;
                this.match(MapIniParser.T__200);
                this.state = 1566;
                this.match(MapIniParser.EQ);
                this.state = 1567;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__201:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1568;
                this.match(MapIniParser.T__201);
                this.state = 1569;
                this.match(MapIniParser.EQ);
                this.state = 1570;
                this.match(MapIniParser.ID);
                }
                break;
            case MapIniParser.T__202:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1571;
                this.match(MapIniParser.T__202);
                this.state = 1572;
                this.match(MapIniParser.EQ);
                this.state = 1573;
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
    public specialPowerClass(): SpecialPowerClassContext {
        let localContext = new SpecialPowerClassContext(this.context, this.state);
        this.enterRule(localContext, 214, MapIniParser.RULE_specialPowerClass);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1576;
            this.match(MapIniParser.T__203);
            this.state = 1577;
            this.match(MapIniParser.ID);
            this.state = 1581;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 205 || ((((_la - 273)) & ~0x1F) === 0 && ((1 << (_la - 273)) & 4095) !== 0)) {
                {
                {
                this.state = 1578;
                this.specialPower_properties();
                }
                }
                this.state = 1583;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1584;
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
    public specialPower_properties(): SpecialPower_propertiesContext {
        let localContext = new SpecialPower_propertiesContext(this.context, this.state);
        this.enterRule(localContext, 216, MapIniParser.RULE_specialPower_properties);
        try {
            this.state = 1758;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__204:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1586;
                this.match(MapIniParser.T__204);
                this.state = 1587;
                this.match(MapIniParser.EQ);
                this.state = 1720;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 78, this.context) ) {
                case 1:
                    {
                    this.state = 1588;
                    this.match(MapIniParser.T__205);
                    }
                    break;
                case 2:
                    {
                    this.state = 1589;
                    this.match(MapIniParser.T__206);
                    }
                    break;
                case 3:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 4:
                    {
                    this.state = 1591;
                    this.match(MapIniParser.T__207);
                    }
                    break;
                case 5:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 6:
                    {
                    this.state = 1593;
                    this.match(MapIniParser.T__208);
                    }
                    break;
                case 7:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 8:
                    {
                    this.state = 1595;
                    this.match(MapIniParser.T__209);
                    }
                    break;
                case 9:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 10:
                    {
                    this.state = 1597;
                    this.match(MapIniParser.T__210);
                    }
                    break;
                case 11:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 12:
                    {
                    this.state = 1599;
                    this.match(MapIniParser.T__211);
                    }
                    break;
                case 13:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 14:
                    {
                    this.state = 1601;
                    this.match(MapIniParser.T__212);
                    }
                    break;
                case 15:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 16:
                    {
                    this.state = 1603;
                    this.match(MapIniParser.T__213);
                    }
                    break;
                case 17:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 18:
                    {
                    this.state = 1605;
                    this.match(MapIniParser.T__214);
                    }
                    break;
                case 19:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 20:
                    {
                    this.state = 1607;
                    this.match(MapIniParser.T__215);
                    }
                    break;
                case 21:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 22:
                    {
                    this.state = 1609;
                    this.match(MapIniParser.T__216);
                    }
                    break;
                case 23:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 24:
                    {
                    this.state = 1611;
                    this.match(MapIniParser.T__217);
                    }
                    break;
                case 25:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 26:
                    {
                    this.state = 1613;
                    this.match(MapIniParser.T__218);
                    }
                    break;
                case 27:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 28:
                    {
                    this.state = 1615;
                    this.match(MapIniParser.T__219);
                    }
                    break;
                case 29:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 30:
                    {
                    this.state = 1617;
                    this.match(MapIniParser.T__220);
                    }
                    break;
                case 31:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 32:
                    {
                    this.state = 1619;
                    this.match(MapIniParser.T__221);
                    }
                    break;
                case 33:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 34:
                    {
                    this.state = 1621;
                    this.match(MapIniParser.T__222);
                    }
                    break;
                case 35:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 36:
                    {
                    this.state = 1623;
                    this.match(MapIniParser.T__223);
                    }
                    break;
                case 37:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 38:
                    {
                    this.state = 1625;
                    this.match(MapIniParser.T__224);
                    }
                    break;
                case 39:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 40:
                    {
                    this.state = 1627;
                    this.match(MapIniParser.T__225);
                    }
                    break;
                case 41:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 42:
                    {
                    this.state = 1629;
                    this.match(MapIniParser.T__226);
                    }
                    break;
                case 43:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 44:
                    {
                    this.state = 1631;
                    this.match(MapIniParser.T__227);
                    }
                    break;
                case 45:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 46:
                    {
                    this.state = 1633;
                    this.match(MapIniParser.T__228);
                    }
                    break;
                case 47:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 48:
                    {
                    this.state = 1635;
                    this.match(MapIniParser.T__229);
                    }
                    break;
                case 49:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 50:
                    {
                    this.state = 1637;
                    this.match(MapIniParser.T__230);
                    }
                    break;
                case 51:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 52:
                    {
                    this.state = 1639;
                    this.match(MapIniParser.T__231);
                    }
                    break;
                case 53:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 54:
                    {
                    this.state = 1641;
                    this.match(MapIniParser.T__232);
                    }
                    break;
                case 55:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 56:
                    {
                    this.state = 1643;
                    this.match(MapIniParser.T__233);
                    }
                    break;
                case 57:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 58:
                    {
                    this.state = 1645;
                    this.match(MapIniParser.T__234);
                    }
                    break;
                case 59:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 60:
                    {
                    this.state = 1647;
                    this.match(MapIniParser.T__235);
                    }
                    break;
                case 61:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 62:
                    {
                    this.state = 1649;
                    this.match(MapIniParser.T__236);
                    }
                    break;
                case 63:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 64:
                    {
                    this.state = 1651;
                    this.match(MapIniParser.T__237);
                    }
                    break;
                case 65:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 66:
                    {
                    this.state = 1653;
                    this.match(MapIniParser.T__238);
                    }
                    break;
                case 67:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 68:
                    {
                    this.state = 1655;
                    this.match(MapIniParser.T__239);
                    }
                    break;
                case 69:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 70:
                    {
                    this.state = 1657;
                    this.match(MapIniParser.T__240);
                    }
                    break;
                case 71:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 72:
                    {
                    this.state = 1659;
                    this.match(MapIniParser.T__241);
                    }
                    break;
                case 73:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 74:
                    {
                    this.state = 1661;
                    this.match(MapIniParser.T__242);
                    }
                    break;
                case 75:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 76:
                    {
                    this.state = 1663;
                    this.match(MapIniParser.T__243);
                    }
                    break;
                case 77:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 78:
                    {
                    this.state = 1665;
                    this.match(MapIniParser.T__244);
                    }
                    break;
                case 79:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 80:
                    {
                    this.state = 1667;
                    this.match(MapIniParser.T__245);
                    }
                    break;
                case 81:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 82:
                    {
                    this.state = 1669;
                    this.match(MapIniParser.T__246);
                    }
                    break;
                case 83:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 84:
                    {
                    this.state = 1671;
                    this.match(MapIniParser.T__247);
                    }
                    break;
                case 85:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 86:
                    {
                    this.state = 1673;
                    this.match(MapIniParser.T__248);
                    }
                    break;
                case 87:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 88:
                    {
                    this.state = 1675;
                    this.match(MapIniParser.T__249);
                    }
                    break;
                case 89:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 90:
                    {
                    this.state = 1677;
                    this.match(MapIniParser.T__250);
                    }
                    break;
                case 91:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 92:
                    {
                    this.state = 1679;
                    this.match(MapIniParser.T__251);
                    }
                    break;
                case 93:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 94:
                    {
                    this.state = 1681;
                    this.match(MapIniParser.T__252);
                    }
                    break;
                case 95:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 96:
                    {
                    this.state = 1683;
                    this.match(MapIniParser.T__253);
                    }
                    break;
                case 97:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 98:
                    {
                    this.state = 1685;
                    this.match(MapIniParser.T__254);
                    }
                    break;
                case 99:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 100:
                    {
                    this.state = 1687;
                    this.match(MapIniParser.T__255);
                    }
                    break;
                case 101:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 102:
                    {
                    this.state = 1689;
                    this.match(MapIniParser.T__256);
                    }
                    break;
                case 103:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 104:
                    {
                    this.state = 1691;
                    this.match(MapIniParser.T__257);
                    }
                    break;
                case 105:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 106:
                    {
                    this.state = 1693;
                    this.match(MapIniParser.T__258);
                    }
                    break;
                case 107:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 108:
                    {
                    this.state = 1695;
                    this.match(MapIniParser.T__259);
                    }
                    break;
                case 109:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 110:
                    {
                    this.state = 1697;
                    this.match(MapIniParser.T__260);
                    }
                    break;
                case 111:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 112:
                    {
                    this.state = 1699;
                    this.match(MapIniParser.T__261);
                    }
                    break;
                case 113:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 114:
                    {
                    this.state = 1701;
                    this.match(MapIniParser.T__262);
                    }
                    break;
                case 115:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 116:
                    {
                    this.state = 1703;
                    this.match(MapIniParser.T__263);
                    }
                    break;
                case 117:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 118:
                    {
                    this.state = 1705;
                    this.match(MapIniParser.T__264);
                    }
                    break;
                case 119:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 120:
                    {
                    this.state = 1707;
                    this.match(MapIniParser.T__265);
                    }
                    break;
                case 121:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 122:
                    {
                    this.state = 1709;
                    this.match(MapIniParser.T__266);
                    }
                    break;
                case 123:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 124:
                    {
                    this.state = 1711;
                    this.match(MapIniParser.T__267);
                    }
                    break;
                case 125:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 126:
                    {
                    this.state = 1713;
                    this.match(MapIniParser.T__268);
                    }
                    break;
                case 127:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 128:
                    {
                    this.state = 1715;
                    this.match(MapIniParser.T__269);
                    }
                    break;
                case 129:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 130:
                    {
                    this.state = 1717;
                    this.match(MapIniParser.T__270);
                    }
                    break;
                case 131:
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case 132:
                    {
                    this.state = 1719;
                    this.match(MapIniParser.T__271);
                    }
                    break;
                }
                }
                break;
            case MapIniParser.T__272:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1722;
                this.match(MapIniParser.T__272);
                this.state = 1723;
                this.match(MapIniParser.EQ);
                this.state = 1724;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__273:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1725;
                this.match(MapIniParser.T__273);
                this.state = 1726;
                this.match(MapIniParser.EQ);
                this.state = 1727;
                this.science_value();
                }
                break;
            case MapIniParser.T__274:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1728;
                this.match(MapIniParser.T__274);
                this.state = 1729;
                this.match(MapIniParser.EQ);
                this.state = 1730;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__275:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1731;
                this.match(MapIniParser.T__275);
                this.state = 1732;
                this.match(MapIniParser.EQ);
                this.state = 1733;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__276:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1734;
                this.match(MapIniParser.T__276);
                this.state = 1735;
                this.match(MapIniParser.EQ);
                this.state = 1736;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__277:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1737;
                this.match(MapIniParser.T__277);
                this.state = 1738;
                this.match(MapIniParser.EQ);
                this.state = 1739;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__278:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1740;
                this.match(MapIniParser.T__278);
                this.state = 1741;
                this.match(MapIniParser.EQ);
                this.state = 1742;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__279:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1743;
                this.match(MapIniParser.T__279);
                this.state = 1744;
                this.match(MapIniParser.EQ);
                this.state = 1745;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__280:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 1746;
                this.match(MapIniParser.T__280);
                this.state = 1747;
                this.match(MapIniParser.EQ);
                this.state = 1748;
                this.academyclassifier_value();
                }
                break;
            case MapIniParser.T__281:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 1749;
                this.match(MapIniParser.T__281);
                this.state = 1750;
                this.match(MapIniParser.EQ);
                this.state = 1751;
                this.audioevent_value();
                }
                break;
            case MapIniParser.T__282:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 1752;
                this.match(MapIniParser.T__282);
                this.state = 1753;
                this.match(MapIniParser.EQ);
                this.state = 1754;
                this.audioevent_value();
                }
                break;
            case MapIniParser.T__283:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 1755;
                this.match(MapIniParser.T__283);
                this.state = 1756;
                this.match(MapIniParser.EQ);
                this.state = 1757;
                this.match(MapIniParser.INT);
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
    public soundEffectClasses(): SoundEffectClassesContext {
        let localContext = new SoundEffectClassesContext(this.context, this.state);
        this.enterRule(localContext, 218, MapIniParser.RULE_soundEffectClasses);
        try {
            this.state = 1762;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__284:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1760;
                this.audioEventClass();
                }
                break;
            case MapIniParser.T__285:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1761;
                this.dialogEventClass();
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
    public audioEventClass(): AudioEventClassContext {
        let localContext = new AudioEventClassContext(this.context, this.state);
        this.enterRule(localContext, 220, MapIniParser.RULE_audioEventClass);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1764;
            this.match(MapIniParser.T__284);
            this.state = 1765;
            this.match(MapIniParser.ID);
            this.state = 1769;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 287)) & ~0x1F) === 0 && ((1 << (_la - 287)) & 4293918751) !== 0) || ((((_la - 328)) & ~0x1F) === 0 && ((1 << (_la - 328)) & 7) !== 0)) {
                {
                {
                this.state = 1766;
                this.audioevent_properties();
                }
                }
                this.state = 1771;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1772;
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
    public dialogEventClass(): DialogEventClassContext {
        let localContext = new DialogEventClassContext(this.context, this.state);
        this.enterRule(localContext, 222, MapIniParser.RULE_dialogEventClass);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1774;
            this.match(MapIniParser.T__285);
            this.state = 1775;
            this.match(MapIniParser.ID);
            this.state = 1779;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 287)) & ~0x1F) === 0 && ((1 << (_la - 287)) & 4293918751) !== 0) || ((((_la - 328)) & ~0x1F) === 0 && ((1 << (_la - 328)) & 7) !== 0)) {
                {
                {
                this.state = 1776;
                this.audioevent_properties();
                }
                }
                this.state = 1781;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1782;
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
    public audioevent_properties(): Audioevent_propertiesContext {
        let localContext = new Audioevent_propertiesContext(this.context, this.state);
        this.enterRule(localContext, 224, MapIniParser.RULE_audioevent_properties);
        let _la: number;
        try {
            this.state = 1877;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 90, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1784;
                this.match(MapIniParser.T__286);
                this.state = 1785;
                this.match(MapIniParser.EQ);
                this.state = 1786;
                this.file();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1787;
                this.match(MapIniParser.T__287);
                this.state = 1788;
                this.match(MapIniParser.EQ);
                this.state = 1789;
                this.match(MapIniParser.INT);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1790;
                this.match(MapIniParser.T__288);
                this.state = 1791;
                this.match(MapIniParser.EQ);
                this.state = 1792;
                this.match(MapIniParser.INT);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1793;
                this.match(MapIniParser.T__289);
                this.state = 1794;
                this.match(MapIniParser.EQ);
                this.state = 1795;
                this.match(MapIniParser.ID);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1796;
                this.match(MapIniParser.T__290);
                this.state = 1797;
                this.match(MapIniParser.EQ);
                this.state = 1799;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 1798;
                    _la = this.tokenStream.LA(1);
                    if(!(((((_la - 292)) & ~0x1F) === 0 && ((1 << (_la - 292)) & 1023) !== 0) || _la === 512)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                    }
                    this.state = 1801;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (((((_la - 292)) & ~0x1F) === 0 && ((1 << (_la - 292)) & 1023) !== 0) || _la === 512);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1803;
                this.match(MapIniParser.T__289);
                this.state = 1804;
                this.match(MapIniParser.EQ);
                this.state = 1806;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 1805;
                    _la = this.tokenStream.LA(1);
                    if(!(((((_la - 302)) & ~0x1F) === 0 && ((1 << (_la - 302)) & 31) !== 0) || _la === 512)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                    }
                    this.state = 1808;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (((((_la - 302)) & ~0x1F) === 0 && ((1 << (_la - 302)) & 31) !== 0) || _la === 512);
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1810;
                this.match(MapIniParser.T__306);
                this.state = 1811;
                this.match(MapIniParser.EQ);
                this.state = 1813;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 1812;
                    this.match(MapIniParser.ID);
                    }
                    }
                    this.state = 1815;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 534);
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1817;
                this.match(MapIniParser.T__307);
                this.state = 1818;
                this.match(MapIniParser.EQ);
                this.state = 1820;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 1819;
                    this.match(MapIniParser.ID);
                    }
                    }
                    this.state = 1822;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 534);
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1824;
                this.match(MapIniParser.T__308);
                this.state = 1825;
                this.match(MapIniParser.EQ);
                this.state = 1827;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 1826;
                    this.match(MapIniParser.ID);
                    }
                    }
                    this.state = 1829;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 534);
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 1831;
                this.match(MapIniParser.T__309);
                this.state = 1832;
                this.match(MapIniParser.EQ);
                this.state = 1834;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 1833;
                    this.match(MapIniParser.ID);
                    }
                    }
                    this.state = 1836;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 534);
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 1838;
                this.match(MapIniParser.T__310);
                this.state = 1839;
                this.match(MapIniParser.EQ);
                this.state = 1840;
                this.match(MapIniParser.ID);
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 1841;
                this.match(MapIniParser.T__311);
                this.state = 1842;
                this.match(MapIniParser.EQ);
                this.state = 1843;
                this.match(MapIniParser.INT);
                this.state = 1844;
                this.match(MapIniParser.INT);
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 1845;
                this.match(MapIniParser.T__312);
                this.state = 1846;
                this.match(MapIniParser.EQ);
                this.state = 1847;
                this.match(MapIniParser.ID);
                }
                break;
            case 14:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 1848;
                this.match(MapIniParser.T__313);
                this.state = 1849;
                this.match(MapIniParser.EQ);
                this.state = 1850;
                this.match(MapIniParser.INT);
                }
                break;
            case 15:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 1851;
                this.match(MapIniParser.T__314);
                this.state = 1852;
                this.match(MapIniParser.EQ);
                this.state = 1853;
                this.match(MapIniParser.INT);
                }
                break;
            case 16:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 1854;
                this.match(MapIniParser.T__315);
                this.state = 1855;
                this.match(MapIniParser.EQ);
                this.state = 1856;
                this.match(MapIniParser.INT);
                }
                break;
            case 17:
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 1857;
                this.match(MapIniParser.T__316);
                this.state = 1858;
                this.match(MapIniParser.EQ);
                this.state = 1859;
                this.match(MapIniParser.INT);
                }
                break;
            case 18:
                this.enterOuterAlt(localContext, 18);
                {
                this.state = 1860;
                this.match(MapIniParser.T__317);
                this.state = 1861;
                this.match(MapIniParser.EQ);
                this.state = 1863;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 1862;
                    _la = this.tokenStream.LA(1);
                    if(!(((((_la - 319)) & ~0x1F) === 0 && ((1 << (_la - 319)) & 511) !== 0) || _la === 512)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                    }
                    this.state = 1865;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (((((_la - 319)) & ~0x1F) === 0 && ((1 << (_la - 319)) & 511) !== 0) || _la === 512);
                }
                break;
            case 19:
                this.enterOuterAlt(localContext, 19);
                {
                this.state = 1867;
                this.match(MapIniParser.T__327);
                this.state = 1868;
                this.match(MapIniParser.EQ);
                this.state = 1869;
                this.match(MapIniParser.INT);
                this.state = 1870;
                this.match(MapIniParser.INT);
                }
                break;
            case 20:
                this.enterOuterAlt(localContext, 20);
                {
                this.state = 1871;
                this.match(MapIniParser.T__328);
                this.state = 1872;
                this.match(MapIniParser.EQ);
                this.state = 1873;
                this.match(MapIniParser.INT);
                }
                break;
            case 21:
                this.enterOuterAlt(localContext, 21);
                {
                this.state = 1874;
                this.match(MapIniParser.T__329);
                this.state = 1875;
                this.match(MapIniParser.EQ);
                this.state = 1876;
                this.match(MapIniParser.INT);
                }
                break;
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
    public upgradeClass(): UpgradeClassContext {
        let localContext = new UpgradeClassContext(this.context, this.state);
        this.enterRule(localContext, 226, MapIniParser.RULE_upgradeClass);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1879;
            this.match(MapIniParser.T__330);
            this.state = 1880;
            this.match(MapIniParser.ID);
            this.state = 1884;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 202 || _la === 281 || ((((_la - 318)) & ~0x1F) === 0 && ((1 << (_la - 318)) & 2031617) !== 0)) {
                {
                {
                this.state = 1881;
                this.upgrade_properties();
                }
                }
                this.state = 1886;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1887;
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
    public upgrade_properties(): Upgrade_propertiesContext {
        let localContext = new Upgrade_propertiesContext(this.context, this.state);
        this.enterRule(localContext, 228, MapIniParser.RULE_upgrade_properties);
        let _la: number;
        try {
            this.state = 1913;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__201:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1889;
                this.match(MapIniParser.T__201);
                this.state = 1890;
                this.match(MapIniParser.EQ);
                this.state = 1891;
                this.match(MapIniParser.ID);
                }
                break;
            case MapIniParser.T__317:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1892;
                this.match(MapIniParser.T__317);
                this.state = 1893;
                this.match(MapIniParser.EQ);
                this.state = 1894;
                _la = this.tokenStream.LA(1);
                if(!(_la === 332 || _la === 333 || _la === 512)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__333:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1895;
                this.match(MapIniParser.T__333);
                this.state = 1896;
                this.match(MapIniParser.EQ);
                this.state = 1897;
                this.audioevent_value();
                }
                break;
            case MapIniParser.T__334:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1898;
                this.match(MapIniParser.T__334);
                this.state = 1899;
                this.match(MapIniParser.EQ);
                this.state = 1900;
                this.match(MapIniParser.FLOAT);
                }
                break;
            case MapIniParser.T__335:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1901;
                this.match(MapIniParser.T__335);
                this.state = 1902;
                this.match(MapIniParser.EQ);
                this.state = 1903;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__336:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1904;
                this.match(MapIniParser.T__336);
                this.state = 1905;
                this.match(MapIniParser.EQ);
                this.state = 1906;
                this.mappedimage_value();
                }
                break;
            case MapIniParser.T__337:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1907;
                this.match(MapIniParser.T__337);
                this.state = 1908;
                this.match(MapIniParser.EQ);
                this.state = 1909;
                this.audioevent_value();
                }
                break;
            case MapIniParser.T__280:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1910;
                this.match(MapIniParser.T__280);
                this.state = 1911;
                this.match(MapIniParser.EQ);
                this.state = 1912;
                this.academyclassifier_value();
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
    public academyclassifier_value(): Academyclassifier_valueContext {
        let localContext = new Academyclassifier_valueContext(this.context, this.state);
        this.enterRule(localContext, 230, MapIniParser.RULE_academyclassifier_value);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1915;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 339)) & ~0x1F) === 0 && ((1 << (_la - 339)) & 7) !== 0) || _la === 512)) {
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
    public weaponClass(): WeaponClassContext {
        let localContext = new WeaponClassContext(this.context, this.state);
        this.enterRule(localContext, 232, MapIniParser.RULE_weaponClass);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1917;
            this.match(MapIniParser.T__341);
            this.state = 1918;
            this.match(MapIniParser.ID);
            this.state = 1922;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 343)) & ~0x1F) === 0 && ((1 << (_la - 343)) & 4294967295) !== 0) || ((((_la - 375)) & ~0x1F) === 0 && ((1 << (_la - 375)) & 63) !== 0)) {
                {
                {
                this.state = 1919;
                this.weapon_properties();
                }
                }
                this.state = 1924;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1925;
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
        this.enterRule(localContext, 234, MapIniParser.RULE_weapon_properties);
        let _la: number;
        try {
            this.state = 2037;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__375:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1927;
                this.weapon_damagetype_property();
                }
                break;
            case MapIniParser.T__376:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1928;
                this.weapon_deathtype_property();
                }
                break;
            case MapIniParser.T__377:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1929;
                this.weapon_damageaffects_property();
                }
                break;
            case MapIniParser.T__378:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1930;
                this.weapon_weaponbonus_property();
                }
                break;
            case MapIniParser.T__379:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1931;
                this.weapon_lasterbone_property();
                }
                break;
            case MapIniParser.T__342:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1932;
                this.match(MapIniParser.T__342);
                this.state = 1933;
                this.match(MapIniParser.EQ);
                this.state = 1934;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__343:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1935;
                this.match(MapIniParser.T__343);
                this.state = 1936;
                this.match(MapIniParser.EQ);
                this.state = 1937;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__344:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1938;
                this.match(MapIniParser.T__344);
                this.state = 1939;
                this.match(MapIniParser.EQ);
                this.state = 1940;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__345:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1941;
                this.match(MapIniParser.T__345);
                this.state = 1942;
                this.match(MapIniParser.EQ);
                this.state = 1943;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__346:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 1944;
                this.match(MapIniParser.T__346);
                this.state = 1945;
                this.match(MapIniParser.EQ);
                this.state = 1946;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__347:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 1947;
                this.match(MapIniParser.T__347);
                this.state = 1948;
                this.match(MapIniParser.EQ);
                this.state = 1949;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__348:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 1950;
                this.match(MapIniParser.T__348);
                this.state = 1951;
                this.match(MapIniParser.EQ);
                this.state = 1952;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__349:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 1953;
                this.match(MapIniParser.T__349);
                this.state = 1954;
                this.match(MapIniParser.EQ);
                this.state = 1955;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__350:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 1956;
                this.match(MapIniParser.T__350);
                this.state = 1957;
                this.match(MapIniParser.EQ);
                this.state = 1958;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__351:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 1959;
                this.match(MapIniParser.T__351);
                this.state = 1960;
                this.match(MapIniParser.EQ);
                this.state = 1961;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__352:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 1962;
                this.match(MapIniParser.T__352);
                this.state = 1963;
                this.match(MapIniParser.EQ);
                this.state = 1964;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__353:
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 1965;
                this.match(MapIniParser.T__353);
                this.state = 1966;
                this.match(MapIniParser.EQ);
                this.state = 1967;
                this.particlesystem_value();
                }
                break;
            case MapIniParser.T__354:
                this.enterOuterAlt(localContext, 18);
                {
                this.state = 1968;
                this.match(MapIniParser.T__354);
                this.state = 1969;
                this.match(MapIniParser.EQ);
                this.state = 1970;
                this.match(MapIniParser.VETERENCY);
                this.state = 1971;
                this.particlesystem_value();
                }
                break;
            case MapIniParser.T__355:
                this.enterOuterAlt(localContext, 19);
                {
                this.state = 1972;
                this.match(MapIniParser.T__355);
                this.state = 1973;
                this.match(MapIniParser.EQ);
                this.state = 1974;
                this.object_value();
                }
                break;
            case MapIniParser.T__356:
                this.enterOuterAlt(localContext, 20);
                {
                this.state = 1975;
                this.match(MapIniParser.T__356);
                this.state = 1976;
                this.match(MapIniParser.EQ);
                this.state = 1977;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__357:
                this.enterOuterAlt(localContext, 21);
                {
                this.state = 1978;
                this.match(MapIniParser.T__357);
                this.state = 1979;
                this.match(MapIniParser.EQ);
                this.state = 1980;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__358:
                this.enterOuterAlt(localContext, 22);
                {
                this.state = 1981;
                this.match(MapIniParser.T__358);
                this.state = 1982;
                this.match(MapIniParser.EQ);
                this.state = 1983;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__359:
                this.enterOuterAlt(localContext, 23);
                {
                this.state = 1984;
                this.match(MapIniParser.T__359);
                this.state = 1985;
                this.match(MapIniParser.EQ);
                this.state = 1986;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__360:
                this.enterOuterAlt(localContext, 24);
                {
                this.state = 1987;
                this.match(MapIniParser.T__360);
                this.state = 1988;
                this.match(MapIniParser.EQ);
                this.state = 1989;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__361:
                this.enterOuterAlt(localContext, 25);
                {
                this.state = 1990;
                this.match(MapIniParser.T__361);
                this.state = 1991;
                this.match(MapIniParser.EQ);
                this.state = 1992;
                this.fxlist_value();
                }
                break;
            case MapIniParser.T__362:
                this.enterOuterAlt(localContext, 26);
                {
                this.state = 1993;
                this.match(MapIniParser.T__362);
                this.state = 1994;
                this.match(MapIniParser.EQ);
                this.state = 1995;
                this.match(MapIniParser.VETERENCY);
                this.state = 1996;
                this.fxlist_value();
                }
                break;
            case MapIniParser.T__363:
                this.enterOuterAlt(localContext, 27);
                {
                this.state = 1997;
                this.match(MapIniParser.T__363);
                this.state = 1998;
                this.match(MapIniParser.EQ);
                this.state = 1999;
                this.fxlist_value();
                }
                break;
            case MapIniParser.T__364:
                this.enterOuterAlt(localContext, 28);
                {
                this.state = 2000;
                this.match(MapIniParser.T__364);
                this.state = 2001;
                this.match(MapIniParser.EQ);
                this.state = 2002;
                this.audioevent_value();
                }
                break;
            case MapIniParser.T__365:
                this.enterOuterAlt(localContext, 29);
                {
                this.state = 2003;
                this.match(MapIniParser.T__365);
                this.state = 2004;
                this.match(MapIniParser.EQ);
                this.state = 2005;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__366:
                this.enterOuterAlt(localContext, 30);
                {
                this.state = 2006;
                this.match(MapIniParser.T__366);
                this.state = 2007;
                this.match(MapIniParser.EQ);
                this.state = 2008;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__367:
                this.enterOuterAlt(localContext, 31);
                {
                this.state = 2009;
                this.match(MapIniParser.T__367);
                this.state = 2010;
                this.match(MapIniParser.EQ);
                this.state = 2011;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__368:
                this.enterOuterAlt(localContext, 32);
                {
                this.state = 2012;
                this.match(MapIniParser.T__368);
                this.state = 2013;
                this.match(MapIniParser.EQ);
                this.state = 2014;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__369:
                this.enterOuterAlt(localContext, 33);
                {
                this.state = 2015;
                this.match(MapIniParser.T__369);
                this.state = 2016;
                this.match(MapIniParser.EQ);
                this.state = 2018;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 2017;
                    this.match(MapIniParser.ID);
                    }
                    }
                    this.state = 2020;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 534);
                }
                break;
            case MapIniParser.T__370:
                this.enterOuterAlt(localContext, 34);
                {
                this.state = 2022;
                this.match(MapIniParser.T__370);
                this.state = 2023;
                this.match(MapIniParser.EQ);
                this.state = 2024;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__371:
                this.enterOuterAlt(localContext, 35);
                {
                this.state = 2025;
                this.match(MapIniParser.T__371);
                this.state = 2026;
                this.match(MapIniParser.EQ);
                this.state = 2027;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__372:
                this.enterOuterAlt(localContext, 36);
                {
                this.state = 2028;
                this.match(MapIniParser.T__372);
                this.state = 2029;
                this.match(MapIniParser.EQ);
                this.state = 2030;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__373:
                this.enterOuterAlt(localContext, 37);
                {
                this.state = 2031;
                this.match(MapIniParser.T__373);
                this.state = 2032;
                this.match(MapIniParser.EQ);
                this.state = 2033;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__374:
                this.enterOuterAlt(localContext, 38);
                {
                this.state = 2034;
                this.match(MapIniParser.T__374);
                this.state = 2035;
                this.match(MapIniParser.EQ);
                this.state = 2036;
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
        this.enterRule(localContext, 236, MapIniParser.RULE_weapon_damagetype_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2039;
            this.match(MapIniParser.T__375);
            this.state = 2040;
            this.match(MapIniParser.EQ);
            this.state = 2041;
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
        this.enterRule(localContext, 238, MapIniParser.RULE_weapon_deathtype_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2043;
            this.match(MapIniParser.T__376);
            this.state = 2044;
            this.match(MapIniParser.EQ);
            this.state = 2045;
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
        this.enterRule(localContext, 240, MapIniParser.RULE_weapon_damageaffects_property);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2047;
            this.match(MapIniParser.T__377);
            this.state = 2048;
            this.match(MapIniParser.EQ);
            this.state = 2050;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 2049;
                this.damageAffects_value();
                }
                }
                this.state = 2052;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 534);
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
        this.enterRule(localContext, 242, MapIniParser.RULE_weapon_weaponbonus_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2054;
            this.match(MapIniParser.T__378);
            this.state = 2055;
            this.match(MapIniParser.EQ);
            this.state = 2056;
            this.weapon_weaponbonus_condition_value();
            this.state = 2057;
            this.weapon_weaponbonus_bonus_value();
            this.state = 2058;
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
        this.enterRule(localContext, 244, MapIniParser.RULE_weapon_lasterbone_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2060;
            this.match(MapIniParser.T__379);
            this.state = 2061;
            this.match(MapIniParser.EQ);
            this.state = 2062;
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
        this.enterRule(localContext, 246, MapIniParser.RULE_weapon_weaponbonus_condition_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2064;
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
        this.enterRule(localContext, 248, MapIniParser.RULE_weapon_weaponbonus_bonus_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2066;
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
        this.enterRule(localContext, 250, MapIniParser.RULE_damageType_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2068;
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
        this.enterRule(localContext, 252, MapIniParser.RULE_deathType_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2070;
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
        this.enterRule(localContext, 254, MapIniParser.RULE_damageAffects_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2072;
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
        this.enterRule(localContext, 256, MapIniParser.RULE_weatherClass);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2074;
            this.match(MapIniParser.T__380);
            this.state = 2078;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 382)) & ~0x1F) === 0 && ((1 << (_la - 382)) & 8191) !== 0)) {
                {
                {
                this.state = 2075;
                this.weather_properties();
                }
                }
                this.state = 2080;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 2081;
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
        this.enterRule(localContext, 258, MapIniParser.RULE_weather_properties);
        let _la: number;
        try {
            this.state = 2122;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__381:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2083;
                this.match(MapIniParser.T__381);
                this.state = 2084;
                this.match(MapIniParser.EQ);
                this.state = 2085;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__382:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2086;
                this.match(MapIniParser.T__382);
                this.state = 2087;
                this.match(MapIniParser.EQ);
                this.state = 2088;
                this.file();
                }
                break;
            case MapIniParser.T__383:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2089;
                this.match(MapIniParser.T__383);
                this.state = 2090;
                this.match(MapIniParser.EQ);
                this.state = 2091;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__384:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2092;
                this.match(MapIniParser.T__384);
                this.state = 2093;
                this.match(MapIniParser.EQ);
                this.state = 2094;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__385:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2095;
                this.match(MapIniParser.T__385);
                this.state = 2096;
                this.match(MapIniParser.EQ);
                this.state = 2097;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__386:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 2098;
                this.match(MapIniParser.T__386);
                this.state = 2099;
                this.match(MapIniParser.EQ);
                this.state = 2100;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__387:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 2101;
                this.match(MapIniParser.T__387);
                this.state = 2102;
                this.match(MapIniParser.EQ);
                this.state = 2103;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__388:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 2104;
                this.match(MapIniParser.T__388);
                this.state = 2105;
                this.match(MapIniParser.EQ);
                this.state = 2106;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__389:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 2107;
                this.match(MapIniParser.T__389);
                this.state = 2108;
                this.match(MapIniParser.EQ);
                this.state = 2109;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__390:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 2110;
                this.match(MapIniParser.T__390);
                this.state = 2111;
                this.match(MapIniParser.EQ);
                this.state = 2112;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__391:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 2113;
                this.match(MapIniParser.T__391);
                this.state = 2114;
                this.match(MapIniParser.EQ);
                this.state = 2115;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case MapIniParser.T__392:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 2116;
                this.match(MapIniParser.T__392);
                this.state = 2117;
                this.match(MapIniParser.EQ);
                this.state = 2118;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__393:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 2119;
                this.match(MapIniParser.T__393);
                this.state = 2120;
                this.match(MapIniParser.EQ);
                this.state = 2121;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
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
        this.enterRule(localContext, 260, MapIniParser.RULE_end);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2125;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 536) {
                {
                this.state = 2124;
                this.match(MapIniParser.WS);
                }
            }

            this.state = 2127;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 395)) & ~0x1F) === 0 && ((1 << (_la - 395)) & 7) !== 0))) {
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
        this.enterRule(localContext, 262, MapIniParser.RULE_file);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2129;
            this.match(MapIniParser.ID);
            this.state = 2130;
            this.match(MapIniParser.T__397);
            this.state = 2131;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 399)) & ~0x1F) === 0 && ((1 << (_la - 399)) & 7) !== 0))) {
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
        this.enterRule(localContext, 264, MapIniParser.RULE_cb_command_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2133;
            this.match(MapIniParser.T__401);
            this.state = 2134;
            this.match(MapIniParser.EQ);
            this.state = 2135;
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
        this.enterRule(localContext, 266, MapIniParser.RULE_cb_command_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2137;
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
        this.enterRule(localContext, 268, MapIniParser.RULE_cb_options_property);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2139;
            this.match(MapIniParser.T__402);
            this.state = 2140;
            this.match(MapIniParser.EQ);
            this.state = 2142;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 2141;
                this.cb_options_value();
                }
                }
                this.state = 2144;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 534);
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
        this.enterRule(localContext, 270, MapIniParser.RULE_cb_options_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2146;
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
        this.enterRule(localContext, 272, MapIniParser.RULE_cb_buttonimage_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2148;
            this.match(MapIniParser.T__336);
            this.state = 2149;
            this.match(MapIniParser.EQ);
            this.state = 2150;
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
        this.enterRule(localContext, 274, MapIniParser.RULE_cb_buttonbordertype_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2152;
            this.match(MapIniParser.T__403);
            this.state = 2153;
            this.match(MapIniParser.EQ);
            this.state = 2154;
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
        this.enterRule(localContext, 276, MapIniParser.RULE_cb_buttonbordertype_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2156;
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
        this.enterRule(localContext, 278, MapIniParser.RULE_cb_textlabel_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2158;
            this.match(MapIniParser.T__404);
            this.state = 2159;
            this.match(MapIniParser.EQ);
            this.state = 2160;
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
        this.enterRule(localContext, 280, MapIniParser.RULE_cb_descriptionlabel_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2162;
            this.match(MapIniParser.T__405);
            this.state = 2163;
            this.match(MapIniParser.EQ);
            this.state = 2164;
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
        this.enterRule(localContext, 282, MapIniParser.RULE_cb_conflictinglabel_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2166;
            this.match(MapIniParser.T__406);
            this.state = 2167;
            this.match(MapIniParser.EQ);
            this.state = 2168;
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
        this.enterRule(localContext, 284, MapIniParser.RULE_cb_cursorname_propery);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2170;
            this.match(MapIniParser.T__407);
            this.state = 2171;
            this.match(MapIniParser.EQ);
            this.state = 2172;
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
        this.enterRule(localContext, 286, MapIniParser.RULE_cb_radius_cursorname_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2174;
            this.match(MapIniParser.T__408);
            this.state = 2175;
            this.match(MapIniParser.EQ);
            this.state = 2176;
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
        this.enterRule(localContext, 288, MapIniParser.RULE_cb_invalid_cursorname_propery);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2178;
            this.match(MapIniParser.T__409);
            this.state = 2179;
            this.match(MapIniParser.EQ);
            this.state = 2180;
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
        this.enterRule(localContext, 290, MapIniParser.RULE_cb_unitspecificsound_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2182;
            this.match(MapIniParser.T__333);
            this.state = 2183;
            this.match(MapIniParser.EQ);
            this.state = 2184;
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
        this.enterRule(localContext, 292, MapIniParser.RULE_cb_maxshotsfire_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2186;
            this.match(MapIniParser.T__410);
            this.state = 2187;
            this.match(MapIniParser.EQ);
            this.state = 2188;
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
        this.enterRule(localContext, 294, MapIniParser.RULE_dfx_throttletime_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2190;
            this.match(MapIniParser.T__411);
            this.state = 2191;
            this.match(MapIniParser.EQ);
            this.state = 2192;
            this.damageType_value();
            this.state = 2193;
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
        this.enterRule(localContext, 296, MapIniParser.RULE_dfx_amountformajorfx_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2195;
            this.match(MapIniParser.T__412);
            this.state = 2196;
            this.match(MapIniParser.EQ);
            this.state = 2197;
            this.damageType_value();
            this.state = 2198;
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
        this.enterRule(localContext, 298, MapIniParser.RULE_dfx_majorfx_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2200;
            this.match(MapIniParser.T__413);
            this.state = 2201;
            this.match(MapIniParser.EQ);
            this.state = 2202;
            this.damageType_value();
            this.state = 2203;
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
        this.enterRule(localContext, 300, MapIniParser.RULE_dfx_minorfx_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2205;
            this.match(MapIniParser.T__414);
            this.state = 2206;
            this.match(MapIniParser.EQ);
            this.state = 2207;
            this.damageType_value();
            this.state = 2208;
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
        this.enterRule(localContext, 302, MapIniParser.RULE_dfx_vetmajorfx_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2210;
            this.match(MapIniParser.T__415);
            this.state = 2211;
            this.match(MapIniParser.EQ);
            this.state = 2212;
            this.match(MapIniParser.VETERENCY);
            this.state = 2213;
            this.damageType_value();
            this.state = 2214;
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
        this.enterRule(localContext, 304, MapIniParser.RULE_dfx_vetminorfx_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2216;
            this.match(MapIniParser.T__416);
            this.state = 2217;
            this.match(MapIniParser.EQ);
            this.state = 2218;
            this.match(MapIniParser.VETERENCY);
            this.state = 2219;
            this.damageType_value();
            this.state = 2220;
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
        this.enterRule(localContext, 306, MapIniParser.RULE_dgi_useplayercolor_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2222;
            this.match(MapIniParser.T__417);
            this.state = 2223;
            this.match(MapIniParser.EQ);
            this.state = 2224;
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
        this.enterRule(localContext, 308, MapIniParser.RULE_dgi_colorfortext_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2226;
            this.match(MapIniParser.T__418);
            this.state = 2227;
            this.match(MapIniParser.EQ);
            this.state = 2228;
            this.match(MapIniParser.R);
            this.state = 2229;
            this.match(MapIniParser.G);
            this.state = 2230;
            this.match(MapIniParser.B);
            this.state = 2231;
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
        this.enterRule(localContext, 310, MapIniParser.RULE_dgi_colordropshadow_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2233;
            this.match(MapIniParser.T__419);
            this.state = 2234;
            this.match(MapIniParser.EQ);
            this.state = 2235;
            this.match(MapIniParser.R);
            this.state = 2236;
            this.match(MapIniParser.G);
            this.state = 2237;
            this.match(MapIniParser.B);
            this.state = 2238;
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
        this.enterRule(localContext, 312, MapIniParser.RULE_dgi_dropshadowoffsetX_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2240;
            this.match(MapIniParser.T__420);
            this.state = 2241;
            this.match(MapIniParser.EQ);
            this.state = 2242;
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
        this.enterRule(localContext, 314, MapIniParser.RULE_dgi_dropshadowoffsetY_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2244;
            this.match(MapIniParser.T__421);
            this.state = 2245;
            this.match(MapIniParser.EQ);
            this.state = 2246;
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
        this.enterRule(localContext, 316, MapIniParser.RULE_dgi_fontname_property);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2248;
            this.match(MapIniParser.T__422);
            this.state = 2249;
            this.match(MapIniParser.EQ);
            this.state = 2251;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 2250;
                this.match(MapIniParser.ID);
                }
                }
                this.state = 2253;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 534);
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
        this.enterRule(localContext, 318, MapIniParser.RULE_dgi_fontsize_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2255;
            this.match(MapIniParser.T__423);
            this.state = 2256;
            this.match(MapIniParser.EQ);
            this.state = 2257;
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
        this.enterRule(localContext, 320, MapIniParser.RULE_dgi_fontisbold_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2259;
            this.match(MapIniParser.T__424);
            this.state = 2260;
            this.match(MapIniParser.EQ);
            this.state = 2261;
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
        this.enterRule(localContext, 322, MapIniParser.RULE_dgi_drawposXperc_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2263;
            this.match(MapIniParser.T__425);
            this.state = 2264;
            this.match(MapIniParser.EQ);
            this.state = 2265;
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
        this.enterRule(localContext, 324, MapIniParser.RULE_dgi_drawposYperc_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2267;
            this.match(MapIniParser.T__426);
            this.state = 2268;
            this.match(MapIniParser.EQ);
            this.state = 2269;
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
        this.enterRule(localContext, 326, MapIniParser.RULE_fxlist_ps_name_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2271;
            this.match(MapIniParser.T__427);
            this.state = 2272;
            this.match(MapIniParser.EQ);
            this.state = 2273;
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
        this.enterRule(localContext, 328, MapIniParser.RULE_fxlist_ps_count_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2275;
            this.match(MapIniParser.T__428);
            this.state = 2276;
            this.match(MapIniParser.EQ);
            this.state = 2279;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 102, this.context) ) {
            case 1:
                {
                this.state = 2277;
                this.match(MapIniParser.INT);
                }
                break;
            case 2:
                {
                this.state = 2278;
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
        this.enterRule(localContext, 330, MapIniParser.RULE_fxlist_ps_offset_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2281;
            this.match(MapIniParser.T__429);
            this.state = 2282;
            this.match(MapIniParser.EQ);
            this.state = 2283;
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
        this.enterRule(localContext, 332, MapIniParser.RULE_fxlist_ps_radius_property);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2285;
            this.match(MapIniParser.T__430);
            this.state = 2286;
            this.match(MapIniParser.EQ);
            this.state = 2289;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 103, this.context) ) {
            case 1:
                {
                this.state = 2287;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
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
                this.state = 2288;
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
        this.enterRule(localContext, 334, MapIniParser.RULE_fxlist_ps_height_property);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2291;
            this.match(MapIniParser.T__431);
            this.state = 2292;
            this.match(MapIniParser.EQ);
            this.state = 2295;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 104, this.context) ) {
            case 1:
                {
                this.state = 2293;
                _la = this.tokenStream.LA(1);
                if(!(_la === 513 || _la === 514)) {
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
                this.state = 2294;
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
        this.enterRule(localContext, 336, MapIniParser.RULE_fxlist_ps_initialDelay_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2297;
            this.match(MapIniParser.T__432);
            this.state = 2298;
            this.match(MapIniParser.EQ);
            this.state = 2299;
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
        this.enterRule(localContext, 338, MapIniParser.RULE_fxlist_ps_rotateX_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2301;
            this.match(MapIniParser.T__433);
            this.state = 2302;
            this.match(MapIniParser.EQ);
            this.state = 2303;
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
        this.enterRule(localContext, 340, MapIniParser.RULE_fxlist_ps_rotatey_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2305;
            this.match(MapIniParser.T__434);
            this.state = 2306;
            this.match(MapIniParser.EQ);
            this.state = 2307;
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
        this.enterRule(localContext, 342, MapIniParser.RULE_fxlist_ps_rotateZ_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2309;
            this.match(MapIniParser.T__435);
            this.state = 2310;
            this.match(MapIniParser.EQ);
            this.state = 2311;
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
        this.enterRule(localContext, 344, MapIniParser.RULE_fxlist_ps_orienttoobject_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2313;
            this.match(MapIniParser.T__436);
            this.state = 2314;
            this.match(MapIniParser.EQ);
            this.state = 2315;
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
        this.enterRule(localContext, 346, MapIniParser.RULE_fxlist_ps_ricochet_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2317;
            this.match(MapIniParser.T__437);
            this.state = 2318;
            this.match(MapIniParser.EQ);
            this.state = 2319;
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
        this.enterRule(localContext, 348, MapIniParser.RULE_fxlist_ps_usecallerradius_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2321;
            this.match(MapIniParser.T__438);
            this.state = 2322;
            this.match(MapIniParser.EQ);
            this.state = 2323;
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
        this.enterRule(localContext, 350, MapIniParser.RULE_fxlist_ps_attachtoobject_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2325;
            this.match(MapIniParser.T__439);
            this.state = 2326;
            this.match(MapIniParser.EQ);
            this.state = 2327;
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
        this.enterRule(localContext, 352, MapIniParser.RULE_fxlist_ps_creategroundheight_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2329;
            this.match(MapIniParser.T__440);
            this.state = 2330;
            this.match(MapIniParser.EQ);
            this.state = 2331;
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
        this.enterRule(localContext, 354, MapIniParser.RULE_fxlist_sound_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2333;
            this.match(MapIniParser.T__427);
            this.state = 2334;
            this.match(MapIniParser.EQ);
            this.state = 2335;
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
        this.enterRule(localContext, 356, MapIniParser.RULE_fxlist_rayeffect_primaryoffset_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2337;
            this.match(MapIniParser.T__441);
            this.state = 2338;
            this.match(MapIniParser.EQ);
            this.state = 2339;
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
        this.enterRule(localContext, 358, MapIniParser.RULE_fxlist_rayeffect_secondaryoffset_proprety);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2341;
            this.match(MapIniParser.T__442);
            this.state = 2342;
            this.match(MapIniParser.EQ);
            this.state = 2343;
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
        this.enterRule(localContext, 360, MapIniParser.RULE_fxlist_tracer_name_propety);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2345;
            this.match(MapIniParser.T__443);
            this.state = 2346;
            this.match(MapIniParser.EQ);
            this.state = 2347;
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
        this.enterRule(localContext, 362, MapIniParser.RULE_fxlist_tracer_bonename_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2349;
            this.match(MapIniParser.T__444);
            this.state = 2350;
            this.match(MapIniParser.EQ);
            this.state = 2351;
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
        this.enterRule(localContext, 364, MapIniParser.RULE_fxlist_tracer_speed_property);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2353;
            this.match(MapIniParser.T__124);
            this.state = 2354;
            this.match(MapIniParser.EQ);
            this.state = 2355;
            _la = this.tokenStream.LA(1);
            if(!(_la === 513 || _la === 514)) {
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
        this.enterRule(localContext, 366, MapIniParser.RULE_fxlist_tracer_decayat_property);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2357;
            this.match(MapIniParser.T__445);
            this.state = 2358;
            this.match(MapIniParser.EQ);
            this.state = 2359;
            _la = this.tokenStream.LA(1);
            if(!(_la === 513 || _la === 514)) {
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
        this.enterRule(localContext, 368, MapIniParser.RULE_fxlist_tracer_length_property);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2361;
            this.match(MapIniParser.T__446);
            this.state = 2362;
            this.match(MapIniParser.EQ);
            this.state = 2363;
            _la = this.tokenStream.LA(1);
            if(!(_la === 513 || _la === 514)) {
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
        this.enterRule(localContext, 370, MapIniParser.RULE_fxlist_tracer_width_property);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2365;
            this.match(MapIniParser.T__447);
            this.state = 2366;
            this.match(MapIniParser.EQ);
            this.state = 2367;
            _la = this.tokenStream.LA(1);
            if(!(_la === 513 || _la === 514)) {
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
        this.enterRule(localContext, 372, MapIniParser.RULE_fxlist_tracer_color_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2369;
            this.match(MapIniParser.T__121);
            this.state = 2370;
            this.match(MapIniParser.EQ);
            this.state = 2371;
            this.match(MapIniParser.R);
            this.state = 2372;
            this.match(MapIniParser.G);
            this.state = 2373;
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
        this.enterRule(localContext, 374, MapIniParser.RULE_fxlist_tracer_probability_property);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2375;
            this.match(MapIniParser.T__448);
            this.state = 2376;
            this.match(MapIniParser.EQ);
            this.state = 2377;
            _la = this.tokenStream.LA(1);
            if(!(_la === 513 || _la === 514)) {
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
        this.enterRule(localContext, 376, MapIniParser.RULE_fxlist_lightpulse_color_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2379;
            this.match(MapIniParser.T__121);
            this.state = 2380;
            this.match(MapIniParser.EQ);
            this.state = 2381;
            this.match(MapIniParser.R);
            this.state = 2382;
            this.match(MapIniParser.G);
            this.state = 2383;
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
        this.enterRule(localContext, 378, MapIniParser.RULE_fxlist_lightpulse_radius_property);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2385;
            this.match(MapIniParser.T__430);
            this.state = 2386;
            this.match(MapIniParser.EQ);
            this.state = 2387;
            _la = this.tokenStream.LA(1);
            if(!(_la === 513 || _la === 514)) {
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
        this.enterRule(localContext, 380, MapIniParser.RULE_fxlist_lightpulse_radiuspercentobjectsize_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2389;
            this.match(MapIniParser.T__449);
            this.state = 2390;
            this.match(MapIniParser.EQ);
            this.state = 2391;
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
        this.enterRule(localContext, 382, MapIniParser.RULE_fxlist_lightpulse_increasetime_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2393;
            this.match(MapIniParser.T__450);
            this.state = 2394;
            this.match(MapIniParser.EQ);
            this.state = 2395;
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
        this.enterRule(localContext, 384, MapIniParser.RULE_fxlist_lightpulse_decreasetime_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2397;
            this.match(MapIniParser.T__451);
            this.state = 2398;
            this.match(MapIniParser.EQ);
            this.state = 2399;
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
        this.enterRule(localContext, 386, MapIniParser.RULE_fxlist_viewshake_type_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2401;
            this.match(MapIniParser.T__317);
            this.state = 2402;
            this.match(MapIniParser.EQ);
            this.state = 2403;
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
        this.enterRule(localContext, 388, MapIniParser.RULE_fxlist_scorch_type_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2405;
            this.match(MapIniParser.T__317);
            this.state = 2406;
            this.match(MapIniParser.EQ);
            this.state = 2407;
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
        this.enterRule(localContext, 390, MapIniParser.RULE_fxlist_scorch_radius_property);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2409;
            this.match(MapIniParser.T__430);
            this.state = 2410;
            this.match(MapIniParser.EQ);
            this.state = 2411;
            _la = this.tokenStream.LA(1);
            if(!(_la === 513 || _la === 514)) {
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
        this.enterRule(localContext, 392, MapIniParser.RULE_fxlist_atbonepos_fx_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2413;
            this.match(MapIniParser.T__452);
            this.state = 2414;
            this.match(MapIniParser.EQ);
            this.state = 2415;
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
        this.enterRule(localContext, 394, MapIniParser.RULE_fxlist_atbonepos_bonename_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2417;
            this.match(MapIniParser.T__444);
            this.state = 2418;
            this.match(MapIniParser.EQ);
            this.state = 2419;
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
        this.enterRule(localContext, 396, MapIniParser.RULE_fxlist_atbonepos_orienttoobject_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2421;
            this.match(MapIniParser.T__453);
            this.state = 2422;
            this.match(MapIniParser.EQ);
            this.state = 2423;
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
        this.enterRule(localContext, 398, MapIniParser.RULE_fxlist_name_object_propety);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2425;
            this.match(MapIniParser.T__427);
            this.state = 2426;
            this.match(MapIniParser.EQ);
            this.state = 2427;
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
        this.enterRule(localContext, 400, MapIniParser.RULE_igui_properties);
        let _la: number;
        try {
            this.state = 2588;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case MapIniParser.T__454:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2429;
                this.match(MapIniParser.T__454);
                this.state = 2430;
                this.match(MapIniParser.EQ);
                this.state = 2431;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__455:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2432;
                this.match(MapIniParser.T__455);
                this.state = 2433;
                this.match(MapIniParser.EQ);
                this.state = 2434;
                this.match(MapIniParser.R);
                this.state = 2435;
                this.match(MapIniParser.G);
                this.state = 2436;
                this.match(MapIniParser.B);
                }
                break;
            case MapIniParser.T__456:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2437;
                this.match(MapIniParser.T__456);
                this.state = 2438;
                this.match(MapIniParser.EQ);
                this.state = 2439;
                this.match(MapIniParser.R);
                this.state = 2440;
                this.match(MapIniParser.G);
                this.state = 2441;
                this.match(MapIniParser.B);
                }
                break;
            case MapIniParser.T__457:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2442;
                this.match(MapIniParser.T__457);
                this.state = 2443;
                this.match(MapIniParser.EQ);
                this.state = 2444;
                this.match(MapIniParser.XCOORD);
                this.state = 2445;
                this.match(MapIniParser.YCOORD);
                }
                break;
            case MapIniParser.T__458:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2446;
                this.match(MapIniParser.T__458);
                this.state = 2447;
                this.match(MapIniParser.EQ);
                this.state = 2448;
                this.match(MapIniParser.ID);
                }
                break;
            case MapIniParser.T__459:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 2449;
                this.match(MapIniParser.T__459);
                this.state = 2450;
                this.match(MapIniParser.EQ);
                this.state = 2451;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__460:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 2452;
                this.match(MapIniParser.T__460);
                this.state = 2453;
                this.match(MapIniParser.EQ);
                this.state = 2454;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__461:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 2455;
                this.match(MapIniParser.T__461);
                this.state = 2456;
                this.match(MapIniParser.EQ);
                this.state = 2457;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__462:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 2458;
                this.match(MapIniParser.T__462);
                this.state = 2459;
                this.match(MapIniParser.EQ);
                this.state = 2460;
                this.match(MapIniParser.R);
                this.state = 2461;
                this.match(MapIniParser.G);
                this.state = 2462;
                this.match(MapIniParser.B);
                this.state = 2463;
                this.match(MapIniParser.A);
                }
                break;
            case MapIniParser.T__463:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 2464;
                this.match(MapIniParser.T__463);
                this.state = 2465;
                this.match(MapIniParser.EQ);
                this.state = 2466;
                this.match(MapIniParser.XCOORD);
                this.state = 2467;
                this.match(MapIniParser.YCOORD);
                }
                break;
            case MapIniParser.T__464:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 2468;
                this.match(MapIniParser.T__464);
                this.state = 2469;
                this.match(MapIniParser.EQ);
                this.state = 2471;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 2470;
                    this.match(MapIniParser.ID);
                    }
                    }
                    this.state = 2473;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 534);
                }
                break;
            case MapIniParser.T__465:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 2475;
                this.match(MapIniParser.T__465);
                this.state = 2476;
                this.match(MapIniParser.EQ);
                this.state = 2477;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__466:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 2478;
                this.match(MapIniParser.T__466);
                this.state = 2479;
                this.match(MapIniParser.EQ);
                this.state = 2480;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__467:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 2481;
                this.match(MapIniParser.T__467);
                this.state = 2482;
                this.match(MapIniParser.EQ);
                this.state = 2484;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 2483;
                    this.match(MapIniParser.ID);
                    }
                    }
                    this.state = 2486;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 534);
                }
                break;
            case MapIniParser.T__468:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 2488;
                this.match(MapIniParser.T__468);
                this.state = 2489;
                this.match(MapIniParser.EQ);
                this.state = 2490;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__469:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 2491;
                this.match(MapIniParser.T__469);
                this.state = 2492;
                this.match(MapIniParser.EQ);
                this.state = 2493;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__470:
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 2494;
                this.match(MapIniParser.T__470);
                this.state = 2495;
                this.match(MapIniParser.EQ);
                this.state = 2496;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__471:
                this.enterOuterAlt(localContext, 18);
                {
                this.state = 2497;
                this.match(MapIniParser.T__471);
                this.state = 2498;
                this.match(MapIniParser.EQ);
                this.state = 2499;
                this.match(MapIniParser.XCOORD);
                this.state = 2500;
                this.match(MapIniParser.YCOORD);
                }
                break;
            case MapIniParser.T__472:
                this.enterOuterAlt(localContext, 19);
                {
                this.state = 2501;
                this.match(MapIniParser.T__472);
                this.state = 2502;
                this.match(MapIniParser.EQ);
                this.state = 2503;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__473:
                this.enterOuterAlt(localContext, 20);
                {
                this.state = 2504;
                this.match(MapIniParser.T__473);
                this.state = 2505;
                this.match(MapIniParser.EQ);
                this.state = 2506;
                this.match(MapIniParser.R);
                this.state = 2507;
                this.match(MapIniParser.G);
                this.state = 2508;
                this.match(MapIniParser.B);
                }
                break;
            case MapIniParser.T__474:
                this.enterOuterAlt(localContext, 21);
                {
                this.state = 2509;
                this.match(MapIniParser.T__474);
                this.state = 2510;
                this.match(MapIniParser.EQ);
                this.state = 2511;
                this.match(MapIniParser.ID);
                }
                break;
            case MapIniParser.T__475:
                this.enterOuterAlt(localContext, 22);
                {
                this.state = 2512;
                this.match(MapIniParser.T__475);
                this.state = 2513;
                this.match(MapIniParser.EQ);
                this.state = 2514;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__476:
                this.enterOuterAlt(localContext, 23);
                {
                this.state = 2515;
                this.match(MapIniParser.T__476);
                this.state = 2516;
                this.match(MapIniParser.EQ);
                this.state = 2517;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__477:
                this.enterOuterAlt(localContext, 24);
                {
                this.state = 2518;
                this.match(MapIniParser.T__477);
                this.state = 2519;
                this.match(MapIniParser.EQ);
                this.state = 2520;
                this.match(MapIniParser.ID);
                }
                break;
            case MapIniParser.T__478:
                this.enterOuterAlt(localContext, 25);
                {
                this.state = 2521;
                this.match(MapIniParser.T__478);
                this.state = 2522;
                this.match(MapIniParser.EQ);
                this.state = 2523;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__479:
                this.enterOuterAlt(localContext, 26);
                {
                this.state = 2524;
                this.match(MapIniParser.T__479);
                this.state = 2525;
                this.match(MapIniParser.EQ);
                this.state = 2526;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__480:
                this.enterOuterAlt(localContext, 27);
                {
                this.state = 2527;
                this.match(MapIniParser.T__480);
                this.state = 2528;
                this.match(MapIniParser.EQ);
                this.state = 2529;
                this.match(MapIniParser.XCOORD);
                this.state = 2530;
                this.match(MapIniParser.YCOORD);
                }
                break;
            case MapIniParser.T__481:
                this.enterOuterAlt(localContext, 28);
                {
                this.state = 2531;
                this.match(MapIniParser.T__481);
                this.state = 2532;
                this.match(MapIniParser.EQ);
                this.state = 2533;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__482:
                this.enterOuterAlt(localContext, 29);
                {
                this.state = 2534;
                this.match(MapIniParser.T__482);
                this.state = 2535;
                this.match(MapIniParser.EQ);
                this.state = 2536;
                this.match(MapIniParser.R);
                this.state = 2537;
                this.match(MapIniParser.G);
                this.state = 2538;
                this.match(MapIniParser.B);
                }
                break;
            case MapIniParser.T__483:
                this.enterOuterAlt(localContext, 30);
                {
                this.state = 2539;
                this.match(MapIniParser.T__483);
                this.state = 2540;
                this.match(MapIniParser.EQ);
                this.state = 2541;
                this.match(MapIniParser.ID);
                }
                break;
            case MapIniParser.T__484:
                this.enterOuterAlt(localContext, 31);
                {
                this.state = 2542;
                this.match(MapIniParser.T__484);
                this.state = 2543;
                this.match(MapIniParser.EQ);
                this.state = 2544;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__485:
                this.enterOuterAlt(localContext, 32);
                {
                this.state = 2545;
                this.match(MapIniParser.T__485);
                this.state = 2546;
                this.match(MapIniParser.EQ);
                this.state = 2547;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__486:
                this.enterOuterAlt(localContext, 33);
                {
                this.state = 2548;
                this.match(MapIniParser.T__486);
                this.state = 2549;
                this.match(MapIniParser.EQ);
                this.state = 2550;
                this.match(MapIniParser.R);
                this.state = 2551;
                this.match(MapIniParser.G);
                this.state = 2552;
                this.match(MapIniParser.B);
                }
                break;
            case MapIniParser.T__487:
                this.enterOuterAlt(localContext, 34);
                {
                this.state = 2553;
                this.match(MapIniParser.T__487);
                this.state = 2554;
                this.match(MapIniParser.EQ);
                this.state = 2555;
                this.match(MapIniParser.ID);
                }
                break;
            case MapIniParser.T__488:
                this.enterOuterAlt(localContext, 35);
                {
                this.state = 2556;
                this.match(MapIniParser.T__488);
                this.state = 2557;
                this.match(MapIniParser.EQ);
                this.state = 2558;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__489:
                this.enterOuterAlt(localContext, 36);
                {
                this.state = 2559;
                this.match(MapIniParser.T__489);
                this.state = 2560;
                this.match(MapIniParser.EQ);
                this.state = 2561;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__490:
                this.enterOuterAlt(localContext, 37);
                {
                this.state = 2562;
                this.match(MapIniParser.T__490);
                this.state = 2563;
                this.match(MapIniParser.EQ);
                this.state = 2564;
                this.match(MapIniParser.R);
                this.state = 2565;
                this.match(MapIniParser.G);
                this.state = 2566;
                this.match(MapIniParser.B);
                }
                break;
            case MapIniParser.T__491:
                this.enterOuterAlt(localContext, 38);
                {
                this.state = 2567;
                this.match(MapIniParser.T__491);
                this.state = 2568;
                this.match(MapIniParser.EQ);
                this.state = 2569;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__492:
                this.enterOuterAlt(localContext, 39);
                {
                this.state = 2570;
                this.match(MapIniParser.T__492);
                this.state = 2571;
                this.match(MapIniParser.EQ);
                this.state = 2572;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__493:
                this.enterOuterAlt(localContext, 40);
                {
                this.state = 2573;
                this.match(MapIniParser.T__493);
                this.state = 2574;
                this.match(MapIniParser.EQ);
                this.state = 2575;
                this.match(MapIniParser.INT);
                }
                break;
            case MapIniParser.T__494:
                this.enterOuterAlt(localContext, 41);
                {
                this.state = 2576;
                this.match(MapIniParser.T__494);
                this.state = 2577;
                this.match(MapIniParser.EQ);
                this.state = 2578;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__495:
                this.enterOuterAlt(localContext, 42);
                {
                this.state = 2579;
                this.match(MapIniParser.T__495);
                this.state = 2580;
                this.match(MapIniParser.EQ);
                this.state = 2581;
                this.match(MapIniParser.BOOLEAN);
                }
                break;
            case MapIniParser.T__496:
                this.enterOuterAlt(localContext, 43);
                {
                this.state = 2582;
                this.match(MapIniParser.T__496);
                this.state = 2583;
                this.match(MapIniParser.EQ);
                this.state = 2584;
                this.match(MapIniParser.R);
                this.state = 2585;
                this.match(MapIniParser.G);
                this.state = 2586;
                this.match(MapIniParser.B);
                this.state = 2587;
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
        this.enterRule(localContext, 402, MapIniParser.RULE_faction_value);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2590;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 498)) & ~0x1F) === 0 && ((1 << (_la - 498)) & 4095) !== 0))) {
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
    public commandbutton_value(): Commandbutton_valueContext {
        let localContext = new Commandbutton_valueContext(this.context, this.state);
        this.enterRule(localContext, 404, MapIniParser.RULE_commandbutton_value);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2592;
            _la = this.tokenStream.LA(1);
            if(!(_la === 512 || _la === 534)) {
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
    public cursorname_value(): Cursorname_valueContext {
        let localContext = new Cursorname_valueContext(this.context, this.state);
        this.enterRule(localContext, 406, MapIniParser.RULE_cursorname_value);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2594;
            _la = this.tokenStream.LA(1);
            if(!(_la === 512 || _la === 534)) {
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
    public radius_cursorname_value(): Radius_cursorname_valueContext {
        let localContext = new Radius_cursorname_valueContext(this.context, this.state);
        this.enterRule(localContext, 408, MapIniParser.RULE_radius_cursorname_value);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2596;
            _la = this.tokenStream.LA(1);
            if(!(_la === 512 || _la === 534)) {
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
    public invalid_cursorname_value(): Invalid_cursorname_valueContext {
        let localContext = new Invalid_cursorname_valueContext(this.context, this.state);
        this.enterRule(localContext, 410, MapIniParser.RULE_invalid_cursorname_value);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2598;
            _la = this.tokenStream.LA(1);
            if(!(_la === 512 || _la === 534)) {
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
    public mappedimage_value(): Mappedimage_valueContext {
        let localContext = new Mappedimage_valueContext(this.context, this.state);
        this.enterRule(localContext, 412, MapIniParser.RULE_mappedimage_value);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2600;
            _la = this.tokenStream.LA(1);
            if(!(_la === 512 || _la === 534)) {
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
    public particlesystem_value(): Particlesystem_valueContext {
        let localContext = new Particlesystem_valueContext(this.context, this.state);
        this.enterRule(localContext, 414, MapIniParser.RULE_particlesystem_value);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2602;
            _la = this.tokenStream.LA(1);
            if(!(_la === 512 || _la === 534)) {
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
    public fxlist_value(): Fxlist_valueContext {
        let localContext = new Fxlist_valueContext(this.context, this.state);
        this.enterRule(localContext, 416, MapIniParser.RULE_fxlist_value);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2604;
            _la = this.tokenStream.LA(1);
            if(!(_la === 512 || _la === 534)) {
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
    public object_property(): Object_propertyContext {
        let localContext = new Object_propertyContext(this.context, this.state);
        this.enterRule(localContext, 418, MapIniParser.RULE_object_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2606;
            this.match(MapIniParser.T__509);
            this.state = 2607;
            this.match(MapIniParser.EQ);
            this.state = 2608;
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
        this.enterRule(localContext, 420, MapIniParser.RULE_object_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2610;
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
        this.enterRule(localContext, 422, MapIniParser.RULE_science_property);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2612;
            this.match(MapIniParser.T__197);
            this.state = 2613;
            this.match(MapIniParser.WS);
            this.state = 2614;
            this.match(MapIniParser.EQ);
            this.state = 2615;
            this.match(MapIniParser.WS);
            this.state = 2617;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 2616;
                this.science_value();
                }
                }
                this.state = 2619;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 512 || _la === 534);
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
        this.enterRule(localContext, 424, MapIniParser.RULE_science_value);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2621;
            _la = this.tokenStream.LA(1);
            if(!(_la === 512 || _la === 534)) {
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
    public specialpower_property(): Specialpower_propertyContext {
        let localContext = new Specialpower_propertyContext(this.context, this.state);
        this.enterRule(localContext, 426, MapIniParser.RULE_specialpower_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2623;
            this.match(MapIniParser.T__203);
            this.state = 2624;
            this.match(MapIniParser.EQ);
            this.state = 2625;
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
        this.enterRule(localContext, 428, MapIniParser.RULE_specialpower_value);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2627;
            _la = this.tokenStream.LA(1);
            if(!(_la === 512 || _la === 534)) {
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
    public audioevent_value(): Audioevent_valueContext {
        let localContext = new Audioevent_valueContext(this.context, this.state);
        this.enterRule(localContext, 430, MapIniParser.RULE_audioevent_value);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2629;
            _la = this.tokenStream.LA(1);
            if(!(_la === 512 || _la === 534)) {
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
    public upgrade_property(): Upgrade_propertyContext {
        let localContext = new Upgrade_propertyContext(this.context, this.state);
        this.enterRule(localContext, 432, MapIniParser.RULE_upgrade_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2631;
            this.match(MapIniParser.T__330);
            this.state = 2632;
            this.match(MapIniParser.EQ);
            this.state = 2633;
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
        this.enterRule(localContext, 434, MapIniParser.RULE_upgrade_value);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2635;
            _la = this.tokenStream.LA(1);
            if(!(_la === 512 || _la === 534)) {
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
    public weaponslot_property(): Weaponslot_propertyContext {
        let localContext = new Weaponslot_propertyContext(this.context, this.state);
        this.enterRule(localContext, 436, MapIniParser.RULE_weaponslot_property);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2637;
            this.match(MapIniParser.T__510);
            this.state = 2638;
            this.match(MapIniParser.EQ);
            this.state = 2640;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 2639;
                this.match(MapIniParser.WEAPONSLOT);
                }
                }
                this.state = 2642;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 517);
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
        this.enterRule(localContext, 438, MapIniParser.RULE_rand_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2644;
            this.match(MapIniParser.INT);
            this.state = 2645;
            this.match(MapIniParser.INT);
            this.state = 2646;
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
        this.enterRule(localContext, 440, MapIniParser.RULE_coord3D);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2648;
            this.match(MapIniParser.XCOORD);
            this.state = 2649;
            this.match(MapIniParser.YCOORD);
            this.state = 2650;
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
        4,1,537,2653,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
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
        2,148,7,148,2,149,7,149,2,150,7,150,2,151,7,151,2,152,7,152,2,153,
        7,153,2,154,7,154,2,155,7,155,2,156,7,156,2,157,7,157,2,158,7,158,
        2,159,7,159,2,160,7,160,2,161,7,161,2,162,7,162,2,163,7,163,2,164,
        7,164,2,165,7,165,2,166,7,166,2,167,7,167,2,168,7,168,2,169,7,169,
        2,170,7,170,2,171,7,171,2,172,7,172,2,173,7,173,2,174,7,174,2,175,
        7,175,2,176,7,176,2,177,7,177,2,178,7,178,2,179,7,179,2,180,7,180,
        2,181,7,181,2,182,7,182,2,183,7,183,2,184,7,184,2,185,7,185,2,186,
        7,186,2,187,7,187,2,188,7,188,2,189,7,189,2,190,7,190,2,191,7,191,
        2,192,7,192,2,193,7,193,2,194,7,194,2,195,7,195,2,196,7,196,2,197,
        7,197,2,198,7,198,2,199,7,199,2,200,7,200,2,201,7,201,2,202,7,202,
        2,203,7,203,2,204,7,204,2,205,7,205,2,206,7,206,2,207,7,207,2,208,
        7,208,2,209,7,209,2,210,7,210,2,211,7,211,2,212,7,212,2,213,7,213,
        2,214,7,214,2,215,7,215,2,216,7,216,2,217,7,217,2,218,7,218,2,219,
        7,219,2,220,7,220,1,0,1,0,5,0,445,8,0,10,0,12,0,448,9,0,1,0,1,0,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,3,1,470,8,1,1,2,1,2,1,2,3,2,475,8,2,1,2,1,2,1,2,1,2,5,2,
        481,8,2,10,2,12,2,484,9,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
        3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
        3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
        3,1,3,1,3,1,3,5,3,531,8,3,10,3,12,3,534,9,3,1,3,5,3,537,8,3,10,3,
        12,3,540,9,3,3,3,542,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,
        1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,
        1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,
        1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,
        1,13,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,15,
        1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,17,1,17,
        1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,
        1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,20,1,21,1,21,1,21,1,21,
        1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,
        1,23,1,24,1,24,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,
        1,26,1,26,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,27,1,28,
        1,28,1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,29,1,30,1,30,
        1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,1,31,1,32,1,32,1,32,
        1,32,1,32,1,32,1,33,1,33,1,33,1,33,1,33,1,33,1,34,1,34,1,34,1,34,
        1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,35,1,36,1,36,1,36,1,36,1,36,
        1,36,1,37,1,37,1,37,1,37,1,37,1,37,1,38,1,38,1,38,1,38,1,38,1,38,
        1,39,1,39,1,39,1,39,1,39,1,39,1,40,1,40,1,40,1,40,1,40,1,40,1,41,
        1,41,1,41,1,41,1,41,1,41,1,42,1,42,1,42,1,42,1,42,1,42,1,43,1,43,
        1,43,1,43,1,43,1,43,1,44,1,44,1,44,1,44,1,44,1,44,1,45,1,45,1,45,
        1,45,1,45,1,45,1,46,1,46,1,46,1,46,1,46,3,46,801,8,46,1,46,1,46,
        1,46,1,46,3,46,807,8,46,1,46,5,46,810,8,46,10,46,12,46,813,9,46,
        1,46,1,46,1,47,1,47,1,47,1,47,1,47,3,47,822,8,47,1,48,1,48,1,48,
        1,48,1,48,1,48,1,49,1,49,1,49,1,49,1,49,1,49,1,50,1,50,1,50,1,50,
        1,50,1,50,1,51,1,51,1,51,1,51,1,51,1,51,1,52,1,52,1,52,3,52,851,
        8,52,1,52,1,52,1,52,1,52,5,52,857,8,52,10,52,12,52,860,9,52,1,52,
        1,52,1,53,1,53,1,53,1,53,1,53,3,53,869,8,53,1,53,1,53,1,53,1,53,
        5,53,875,8,53,10,53,12,53,878,9,53,1,53,1,53,1,54,1,54,1,54,1,54,
        1,54,3,54,887,8,54,1,54,1,54,5,54,891,8,54,10,54,12,54,894,9,54,
        1,54,1,54,1,55,1,55,1,55,1,55,1,55,3,55,903,8,55,1,56,1,56,1,56,
        1,56,1,56,1,56,1,56,1,56,1,57,1,57,1,57,1,57,1,57,1,57,1,58,1,58,
        1,58,1,58,1,58,1,58,1,59,1,59,1,59,1,59,1,59,1,59,1,60,1,60,1,60,
        1,60,1,60,1,60,1,61,1,61,1,61,1,61,1,61,3,61,942,8,61,1,61,1,61,
        1,61,1,61,4,61,948,8,61,11,61,12,61,949,1,61,1,61,1,62,1,62,1,62,
        1,62,1,62,3,62,959,8,62,1,63,1,63,3,63,963,8,63,1,63,1,63,3,63,967,
        8,63,1,63,1,63,1,64,1,64,3,64,973,8,64,1,64,1,64,3,64,977,8,64,1,
        64,1,64,1,65,1,65,3,65,983,8,65,1,65,1,65,3,65,987,8,65,1,65,1,65,
        1,66,1,66,3,66,993,8,66,1,66,1,66,3,66,997,8,66,1,66,1,66,1,66,1,
        66,1,66,1,66,1,66,1,66,1,67,1,67,3,67,1009,8,67,1,67,1,67,3,67,1013,
        8,67,1,67,1,67,1,68,1,68,1,68,5,68,1020,8,68,10,68,12,68,1023,9,
        68,1,68,1,68,1,69,1,69,1,69,1,69,1,69,1,69,1,69,1,69,1,69,1,69,1,
        69,1,69,1,69,1,69,1,69,3,69,1042,8,69,1,70,1,70,1,70,5,70,1047,8,
        70,10,70,12,70,1050,9,70,1,70,1,70,1,71,1,71,1,71,1,71,1,71,1,72,
        1,72,1,72,5,72,1062,8,72,10,72,12,72,1065,9,72,1,72,1,72,1,73,1,
        73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,
        73,1,73,1,73,3,73,1086,8,73,1,74,1,74,1,74,5,74,1091,8,74,10,74,
        12,74,1094,9,74,1,74,1,74,1,75,1,75,1,75,1,75,1,76,1,76,1,76,5,76,
        1105,8,76,10,76,12,76,1108,9,76,1,76,1,76,1,77,1,77,1,77,1,77,1,
        77,1,77,3,77,1118,8,77,1,78,1,78,5,78,1122,8,78,10,78,12,78,1125,
        9,78,1,78,1,78,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,79,
        3,79,1139,8,79,1,80,1,80,1,80,5,80,1144,8,80,10,80,12,80,1147,9,
        80,1,80,1,80,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,3,81,1159,8,
        81,1,82,1,82,1,82,1,82,1,82,1,82,1,82,1,82,1,82,1,82,1,82,1,82,1,
        82,1,82,1,82,5,82,1176,8,82,10,82,12,82,1179,9,82,1,82,1,82,1,83,
        1,83,5,83,1185,8,83,10,83,12,83,1188,9,83,1,83,1,83,1,84,1,84,1,
        84,1,84,5,84,1196,8,84,10,84,12,84,1199,9,84,1,84,1,84,1,85,1,85,
        1,85,1,85,1,85,1,85,1,85,1,85,1,85,5,85,1212,8,85,10,85,12,85,1215,
        9,85,1,85,1,85,1,86,1,86,1,86,1,86,1,86,1,86,5,86,1225,8,86,10,86,
        12,86,1228,9,86,1,86,1,86,1,87,1,87,5,87,1234,8,87,10,87,12,87,1237,
        9,87,1,87,1,87,1,88,1,88,1,88,5,88,1244,8,88,10,88,12,88,1247,9,
        88,1,88,1,88,1,89,1,89,1,89,1,89,5,89,1255,8,89,10,89,12,89,1258,
        9,89,1,89,1,89,1,90,1,90,1,90,5,90,1265,8,90,10,90,12,90,1268,9,
        90,1,90,1,90,1,91,1,91,5,91,1274,8,91,10,91,12,91,1277,9,91,1,91,
        1,91,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,
        1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,3,92,
        1305,8,92,1,93,1,93,1,93,5,93,1310,8,93,10,93,12,93,1313,9,93,1,
        93,1,93,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,
        94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,
        94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,
        94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,
        94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,
        94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,
        94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,
        94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,
        94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,
        94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,
        94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,
        94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,
        94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,
        94,1,94,1,94,1,94,1,94,3,94,1489,8,94,1,95,1,95,1,95,4,95,1494,8,
        95,11,95,12,95,1495,1,96,1,96,1,96,1,96,1,97,1,97,1,97,1,97,1,98,
        1,98,1,98,1,98,1,99,1,99,1,100,1,100,1,101,1,101,1,102,1,102,1,103,
        1,103,1,103,5,103,1521,8,103,10,103,12,103,1524,9,103,1,103,1,103,
        1,104,1,104,1,104,1,104,1,104,1,104,1,104,1,104,1,104,4,104,1537,
        8,104,11,104,12,104,1538,1,104,1,104,1,104,3,104,1544,8,104,1,105,
        1,105,1,105,5,105,1549,8,105,10,105,12,105,1552,9,105,1,105,1,105,
        1,106,1,106,1,106,4,106,1559,8,106,11,106,12,106,1560,1,106,1,106,
        1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,3,106,
        1575,8,106,1,107,1,107,1,107,5,107,1580,8,107,10,107,12,107,1583,
        9,107,1,107,1,107,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,
        1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,
        1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,
        1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,
        1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,
        1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,
        1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,
        1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,
        1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,
        1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,
        1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,
        1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,
        1,108,1,108,1,108,1,108,1,108,3,108,1721,8,108,1,108,1,108,1,108,
        1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,
        1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,
        1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,
        3,108,1759,8,108,1,109,1,109,3,109,1763,8,109,1,110,1,110,1,110,
        5,110,1768,8,110,10,110,12,110,1771,9,110,1,110,1,110,1,111,1,111,
        1,111,5,111,1778,8,111,10,111,12,111,1781,9,111,1,111,1,111,1,112,
        1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,
        1,112,1,112,1,112,4,112,1800,8,112,11,112,12,112,1801,1,112,1,112,
        1,112,4,112,1807,8,112,11,112,12,112,1808,1,112,1,112,1,112,4,112,
        1814,8,112,11,112,12,112,1815,1,112,1,112,1,112,4,112,1821,8,112,
        11,112,12,112,1822,1,112,1,112,1,112,4,112,1828,8,112,11,112,12,
        112,1829,1,112,1,112,1,112,4,112,1835,8,112,11,112,12,112,1836,1,
        112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,
        1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,
        1,112,1,112,1,112,4,112,1864,8,112,11,112,12,112,1865,1,112,1,112,
        1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,3,112,1878,8,112,
        1,113,1,113,1,113,5,113,1883,8,113,10,113,12,113,1886,9,113,1,113,
        1,113,1,114,1,114,1,114,1,114,1,114,1,114,1,114,1,114,1,114,1,114,
        1,114,1,114,1,114,1,114,1,114,1,114,1,114,1,114,1,114,1,114,1,114,
        1,114,1,114,1,114,3,114,1914,8,114,1,115,1,115,1,116,1,116,1,116,
        5,116,1921,8,116,10,116,12,116,1924,9,116,1,116,1,116,1,117,1,117,
        1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,
        1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,
        1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,
        1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,
        1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,
        1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,
        1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,
        1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,
        1,117,4,117,2019,8,117,11,117,12,117,2020,1,117,1,117,1,117,1,117,
        1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,117,
        3,117,2038,8,117,1,118,1,118,1,118,1,118,1,119,1,119,1,119,1,119,
        1,120,1,120,1,120,4,120,2051,8,120,11,120,12,120,2052,1,121,1,121,
        1,121,1,121,1,121,1,121,1,122,1,122,1,122,1,122,1,123,1,123,1,124,
        1,124,1,125,1,125,1,126,1,126,1,127,1,127,1,128,1,128,5,128,2077,
        8,128,10,128,12,128,2080,9,128,1,128,1,128,1,129,1,129,1,129,1,129,
        1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,129,
        1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,129,
        1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,129,
        1,129,1,129,3,129,2123,8,129,1,130,3,130,2126,8,130,1,130,1,130,
        1,131,1,131,1,131,1,131,1,132,1,132,1,132,1,132,1,133,1,133,1,134,
        1,134,1,134,4,134,2143,8,134,11,134,12,134,2144,1,135,1,135,1,136,
        1,136,1,136,1,136,1,137,1,137,1,137,1,137,1,138,1,138,1,139,1,139,
        1,139,1,139,1,140,1,140,1,140,1,140,1,141,1,141,1,141,1,141,1,142,
        1,142,1,142,1,142,1,143,1,143,1,143,1,143,1,144,1,144,1,144,1,144,
        1,145,1,145,1,145,1,145,1,146,1,146,1,146,1,146,1,147,1,147,1,147,
        1,147,1,147,1,148,1,148,1,148,1,148,1,148,1,149,1,149,1,149,1,149,
        1,149,1,150,1,150,1,150,1,150,1,150,1,151,1,151,1,151,1,151,1,151,
        1,151,1,152,1,152,1,152,1,152,1,152,1,152,1,153,1,153,1,153,1,153,
        1,154,1,154,1,154,1,154,1,154,1,154,1,154,1,155,1,155,1,155,1,155,
        1,155,1,155,1,155,1,156,1,156,1,156,1,156,1,157,1,157,1,157,1,157,
        1,158,1,158,1,158,4,158,2252,8,158,11,158,12,158,2253,1,159,1,159,
        1,159,1,159,1,160,1,160,1,160,1,160,1,161,1,161,1,161,1,161,1,162,
        1,162,1,162,1,162,1,163,1,163,1,163,1,163,1,164,1,164,1,164,1,164,
        3,164,2280,8,164,1,165,1,165,1,165,1,165,1,166,1,166,1,166,1,166,
        3,166,2290,8,166,1,167,1,167,1,167,1,167,3,167,2296,8,167,1,168,
        1,168,1,168,1,168,1,169,1,169,1,169,1,169,1,170,1,170,1,170,1,170,
        1,171,1,171,1,171,1,171,1,172,1,172,1,172,1,172,1,173,1,173,1,173,
        1,173,1,174,1,174,1,174,1,174,1,175,1,175,1,175,1,175,1,176,1,176,
        1,176,1,176,1,177,1,177,1,177,1,177,1,178,1,178,1,178,1,178,1,179,
        1,179,1,179,1,179,1,180,1,180,1,180,1,180,1,181,1,181,1,181,1,181,
        1,182,1,182,1,182,1,182,1,183,1,183,1,183,1,183,1,184,1,184,1,184,
        1,184,1,185,1,185,1,185,1,185,1,186,1,186,1,186,1,186,1,186,1,186,
        1,187,1,187,1,187,1,187,1,188,1,188,1,188,1,188,1,188,1,188,1,189,
        1,189,1,189,1,189,1,190,1,190,1,190,1,190,1,191,1,191,1,191,1,191,
        1,192,1,192,1,192,1,192,1,193,1,193,1,193,1,193,1,194,1,194,1,194,
        1,194,1,195,1,195,1,195,1,195,1,196,1,196,1,196,1,196,1,197,1,197,
        1,197,1,197,1,198,1,198,1,198,1,198,1,199,1,199,1,199,1,199,1,200,
        1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,
        1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,
        1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,
        1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,4,200,2472,8,200,
        11,200,12,200,2473,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,
        1,200,4,200,2485,8,200,11,200,12,200,2486,1,200,1,200,1,200,1,200,
        1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,
        1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,
        1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,
        1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,
        1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,
        1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,
        1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,
        1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,
        1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,3,200,2589,8,200,
        1,201,1,201,1,202,1,202,1,203,1,203,1,204,1,204,1,205,1,205,1,206,
        1,206,1,207,1,207,1,208,1,208,1,209,1,209,1,209,1,209,1,210,1,210,
        1,211,1,211,1,211,1,211,1,211,4,211,2618,8,211,11,211,12,211,2619,
        1,212,1,212,1,213,1,213,1,213,1,213,1,214,1,214,1,215,1,215,1,216,
        1,216,1,216,1,216,1,217,1,217,1,218,1,218,1,218,4,218,2641,8,218,
        11,218,12,218,2642,1,219,1,219,1,219,1,219,1,220,1,220,1,220,1,220,
        1,220,0,0,221,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,
        38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,
        82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,
        120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,
        152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,
        184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,
        216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,
        248,250,252,254,256,258,260,262,264,266,268,270,272,274,276,278,
        280,282,284,286,288,290,292,294,296,298,300,302,304,306,308,310,
        312,314,316,318,320,322,324,326,328,330,332,334,336,338,340,342,
        344,346,348,350,352,354,356,358,360,362,364,366,368,370,372,374,
        376,378,380,382,384,386,388,390,392,394,396,398,400,402,404,406,
        408,410,412,414,416,418,420,422,424,426,428,430,432,434,436,438,
        440,0,14,1,0,49,53,2,0,67,67,512,512,1,0,89,117,1,0,513,514,1,0,
        187,194,2,0,292,301,512,512,2,0,302,306,512,512,2,0,319,327,512,
        512,2,0,332,333,512,512,2,0,339,341,512,512,1,0,395,397,1,0,399,
        401,1,0,498,509,2,0,512,512,534,534,2989,0,446,1,0,0,0,2,469,1,0,
        0,0,4,471,1,0,0,0,6,541,1,0,0,0,8,543,1,0,0,0,10,549,1,0,0,0,12,
        555,1,0,0,0,14,561,1,0,0,0,16,567,1,0,0,0,18,573,1,0,0,0,20,579,
        1,0,0,0,22,585,1,0,0,0,24,591,1,0,0,0,26,597,1,0,0,0,28,603,1,0,
        0,0,30,609,1,0,0,0,32,615,1,0,0,0,34,621,1,0,0,0,36,627,1,0,0,0,
        38,633,1,0,0,0,40,639,1,0,0,0,42,645,1,0,0,0,44,651,1,0,0,0,46,657,
        1,0,0,0,48,663,1,0,0,0,50,669,1,0,0,0,52,675,1,0,0,0,54,681,1,0,
        0,0,56,687,1,0,0,0,58,693,1,0,0,0,60,699,1,0,0,0,62,705,1,0,0,0,
        64,711,1,0,0,0,66,717,1,0,0,0,68,723,1,0,0,0,70,729,1,0,0,0,72,735,
        1,0,0,0,74,741,1,0,0,0,76,747,1,0,0,0,78,753,1,0,0,0,80,759,1,0,
        0,0,82,765,1,0,0,0,84,771,1,0,0,0,86,777,1,0,0,0,88,783,1,0,0,0,
        90,789,1,0,0,0,92,795,1,0,0,0,94,821,1,0,0,0,96,823,1,0,0,0,98,829,
        1,0,0,0,100,835,1,0,0,0,102,841,1,0,0,0,104,847,1,0,0,0,106,863,
        1,0,0,0,108,881,1,0,0,0,110,902,1,0,0,0,112,904,1,0,0,0,114,912,
        1,0,0,0,116,918,1,0,0,0,118,924,1,0,0,0,120,930,1,0,0,0,122,936,
        1,0,0,0,124,958,1,0,0,0,126,960,1,0,0,0,128,970,1,0,0,0,130,980,
        1,0,0,0,132,990,1,0,0,0,134,1006,1,0,0,0,136,1016,1,0,0,0,138,1041,
        1,0,0,0,140,1043,1,0,0,0,142,1053,1,0,0,0,144,1058,1,0,0,0,146,1085,
        1,0,0,0,148,1087,1,0,0,0,150,1097,1,0,0,0,152,1101,1,0,0,0,154,1117,
        1,0,0,0,156,1119,1,0,0,0,158,1138,1,0,0,0,160,1140,1,0,0,0,162,1158,
        1,0,0,0,164,1160,1,0,0,0,166,1182,1,0,0,0,168,1191,1,0,0,0,170,1202,
        1,0,0,0,172,1218,1,0,0,0,174,1231,1,0,0,0,176,1240,1,0,0,0,178,1250,
        1,0,0,0,180,1261,1,0,0,0,182,1271,1,0,0,0,184,1304,1,0,0,0,186,1306,
        1,0,0,0,188,1488,1,0,0,0,190,1490,1,0,0,0,192,1497,1,0,0,0,194,1501,
        1,0,0,0,196,1505,1,0,0,0,198,1509,1,0,0,0,200,1511,1,0,0,0,202,1513,
        1,0,0,0,204,1515,1,0,0,0,206,1517,1,0,0,0,208,1543,1,0,0,0,210,1545,
        1,0,0,0,212,1574,1,0,0,0,214,1576,1,0,0,0,216,1758,1,0,0,0,218,1762,
        1,0,0,0,220,1764,1,0,0,0,222,1774,1,0,0,0,224,1877,1,0,0,0,226,1879,
        1,0,0,0,228,1913,1,0,0,0,230,1915,1,0,0,0,232,1917,1,0,0,0,234,2037,
        1,0,0,0,236,2039,1,0,0,0,238,2043,1,0,0,0,240,2047,1,0,0,0,242,2054,
        1,0,0,0,244,2060,1,0,0,0,246,2064,1,0,0,0,248,2066,1,0,0,0,250,2068,
        1,0,0,0,252,2070,1,0,0,0,254,2072,1,0,0,0,256,2074,1,0,0,0,258,2122,
        1,0,0,0,260,2125,1,0,0,0,262,2129,1,0,0,0,264,2133,1,0,0,0,266,2137,
        1,0,0,0,268,2139,1,0,0,0,270,2146,1,0,0,0,272,2148,1,0,0,0,274,2152,
        1,0,0,0,276,2156,1,0,0,0,278,2158,1,0,0,0,280,2162,1,0,0,0,282,2166,
        1,0,0,0,284,2170,1,0,0,0,286,2174,1,0,0,0,288,2178,1,0,0,0,290,2182,
        1,0,0,0,292,2186,1,0,0,0,294,2190,1,0,0,0,296,2195,1,0,0,0,298,2200,
        1,0,0,0,300,2205,1,0,0,0,302,2210,1,0,0,0,304,2216,1,0,0,0,306,2222,
        1,0,0,0,308,2226,1,0,0,0,310,2233,1,0,0,0,312,2240,1,0,0,0,314,2244,
        1,0,0,0,316,2248,1,0,0,0,318,2255,1,0,0,0,320,2259,1,0,0,0,322,2263,
        1,0,0,0,324,2267,1,0,0,0,326,2271,1,0,0,0,328,2275,1,0,0,0,330,2281,
        1,0,0,0,332,2285,1,0,0,0,334,2291,1,0,0,0,336,2297,1,0,0,0,338,2301,
        1,0,0,0,340,2305,1,0,0,0,342,2309,1,0,0,0,344,2313,1,0,0,0,346,2317,
        1,0,0,0,348,2321,1,0,0,0,350,2325,1,0,0,0,352,2329,1,0,0,0,354,2333,
        1,0,0,0,356,2337,1,0,0,0,358,2341,1,0,0,0,360,2345,1,0,0,0,362,2349,
        1,0,0,0,364,2353,1,0,0,0,366,2357,1,0,0,0,368,2361,1,0,0,0,370,2365,
        1,0,0,0,372,2369,1,0,0,0,374,2375,1,0,0,0,376,2379,1,0,0,0,378,2385,
        1,0,0,0,380,2389,1,0,0,0,382,2393,1,0,0,0,384,2397,1,0,0,0,386,2401,
        1,0,0,0,388,2405,1,0,0,0,390,2409,1,0,0,0,392,2413,1,0,0,0,394,2417,
        1,0,0,0,396,2421,1,0,0,0,398,2425,1,0,0,0,400,2588,1,0,0,0,402,2590,
        1,0,0,0,404,2592,1,0,0,0,406,2594,1,0,0,0,408,2596,1,0,0,0,410,2598,
        1,0,0,0,412,2600,1,0,0,0,414,2602,1,0,0,0,416,2604,1,0,0,0,418,2606,
        1,0,0,0,420,2610,1,0,0,0,422,2612,1,0,0,0,424,2621,1,0,0,0,426,2623,
        1,0,0,0,428,2627,1,0,0,0,430,2629,1,0,0,0,432,2631,1,0,0,0,434,2635,
        1,0,0,0,436,2637,1,0,0,0,438,2644,1,0,0,0,440,2648,1,0,0,0,442,445,
        5,535,0,0,443,445,3,2,1,0,444,442,1,0,0,0,444,443,1,0,0,0,445,448,
        1,0,0,0,446,444,1,0,0,0,446,447,1,0,0,0,447,449,1,0,0,0,448,446,
        1,0,0,0,449,450,5,0,0,1,450,1,1,0,0,0,451,470,3,122,61,0,452,470,
        3,4,2,0,453,470,3,136,68,0,454,470,3,140,70,0,455,470,3,144,72,0,
        456,470,3,148,74,0,457,470,3,152,76,0,458,470,3,156,78,0,459,470,
        3,160,80,0,460,470,3,180,90,0,461,470,3,186,93,0,462,470,3,206,103,
        0,463,470,3,210,105,0,464,470,3,218,109,0,465,470,3,214,107,0,466,
        470,3,226,113,0,467,470,3,232,116,0,468,470,3,256,128,0,469,451,
        1,0,0,0,469,452,1,0,0,0,469,453,1,0,0,0,469,454,1,0,0,0,469,455,
        1,0,0,0,469,456,1,0,0,0,469,457,1,0,0,0,469,458,1,0,0,0,469,459,
        1,0,0,0,469,460,1,0,0,0,469,461,1,0,0,0,469,462,1,0,0,0,469,463,
        1,0,0,0,469,464,1,0,0,0,469,465,1,0,0,0,469,466,1,0,0,0,469,467,
        1,0,0,0,469,468,1,0,0,0,470,3,1,0,0,0,471,472,5,1,0,0,472,482,5,
        535,0,0,473,475,5,536,0,0,474,473,1,0,0,0,474,475,1,0,0,0,475,476,
        1,0,0,0,476,477,3,6,3,0,477,478,5,535,0,0,478,481,1,0,0,0,479,481,
        5,535,0,0,480,474,1,0,0,0,480,479,1,0,0,0,481,484,1,0,0,0,482,480,
        1,0,0,0,482,483,1,0,0,0,483,485,1,0,0,0,484,482,1,0,0,0,485,486,
        3,260,130,0,486,5,1,0,0,0,487,542,3,8,4,0,488,542,3,10,5,0,489,542,
        3,12,6,0,490,542,3,14,7,0,491,542,3,16,8,0,492,542,3,18,9,0,493,
        542,3,20,10,0,494,542,3,22,11,0,495,542,3,24,12,0,496,542,3,26,13,
        0,497,542,3,28,14,0,498,542,3,30,15,0,499,542,3,32,16,0,500,542,
        3,34,17,0,501,542,3,36,18,0,502,542,3,38,19,0,503,542,3,40,20,0,
        504,542,3,42,21,0,505,542,3,44,22,0,506,542,3,46,23,0,507,542,3,
        48,24,0,508,542,3,50,25,0,509,542,3,52,26,0,510,542,3,54,27,0,511,
        542,3,56,28,0,512,542,3,58,29,0,513,542,3,60,30,0,514,542,3,62,31,
        0,515,542,3,64,32,0,516,542,3,66,33,0,517,542,3,68,34,0,518,542,
        3,70,35,0,519,542,3,72,36,0,520,542,3,74,37,0,521,542,3,76,38,0,
        522,542,3,78,39,0,523,542,3,80,40,0,524,542,3,82,41,0,525,542,3,
        84,42,0,526,542,3,86,43,0,527,542,3,88,44,0,528,542,3,90,45,0,529,
        531,3,92,46,0,530,529,1,0,0,0,531,534,1,0,0,0,532,530,1,0,0,0,532,
        533,1,0,0,0,533,542,1,0,0,0,534,532,1,0,0,0,535,537,3,106,53,0,536,
        535,1,0,0,0,537,540,1,0,0,0,538,536,1,0,0,0,538,539,1,0,0,0,539,
        542,1,0,0,0,540,538,1,0,0,0,541,487,1,0,0,0,541,488,1,0,0,0,541,
        489,1,0,0,0,541,490,1,0,0,0,541,491,1,0,0,0,541,492,1,0,0,0,541,
        493,1,0,0,0,541,494,1,0,0,0,541,495,1,0,0,0,541,496,1,0,0,0,541,
        497,1,0,0,0,541,498,1,0,0,0,541,499,1,0,0,0,541,500,1,0,0,0,541,
        501,1,0,0,0,541,502,1,0,0,0,541,503,1,0,0,0,541,504,1,0,0,0,541,
        505,1,0,0,0,541,506,1,0,0,0,541,507,1,0,0,0,541,508,1,0,0,0,541,
        509,1,0,0,0,541,510,1,0,0,0,541,511,1,0,0,0,541,512,1,0,0,0,541,
        513,1,0,0,0,541,514,1,0,0,0,541,515,1,0,0,0,541,516,1,0,0,0,541,
        517,1,0,0,0,541,518,1,0,0,0,541,519,1,0,0,0,541,520,1,0,0,0,541,
        521,1,0,0,0,541,522,1,0,0,0,541,523,1,0,0,0,541,524,1,0,0,0,541,
        525,1,0,0,0,541,526,1,0,0,0,541,527,1,0,0,0,541,528,1,0,0,0,541,
        532,1,0,0,0,541,538,1,0,0,0,542,7,1,0,0,0,543,544,5,2,0,0,544,545,
        5,536,0,0,545,546,5,516,0,0,546,547,5,536,0,0,547,548,5,514,0,0,
        548,9,1,0,0,0,549,550,5,3,0,0,550,551,5,536,0,0,551,552,5,516,0,
        0,552,553,5,536,0,0,553,554,5,513,0,0,554,11,1,0,0,0,555,556,5,4,
        0,0,556,557,5,536,0,0,557,558,5,516,0,0,558,559,5,536,0,0,559,560,
        5,513,0,0,560,13,1,0,0,0,561,562,5,5,0,0,562,563,5,536,0,0,563,564,
        5,516,0,0,564,565,5,536,0,0,565,566,5,513,0,0,566,15,1,0,0,0,567,
        568,5,6,0,0,568,569,5,536,0,0,569,570,5,516,0,0,570,571,5,536,0,
        0,571,572,5,514,0,0,572,17,1,0,0,0,573,574,5,7,0,0,574,575,5,536,
        0,0,575,576,5,516,0,0,576,577,5,536,0,0,577,578,5,514,0,0,578,19,
        1,0,0,0,579,580,5,8,0,0,580,581,5,536,0,0,581,582,5,516,0,0,582,
        583,5,536,0,0,583,584,5,514,0,0,584,21,1,0,0,0,585,586,5,9,0,0,586,
        587,5,536,0,0,587,588,5,516,0,0,588,589,5,536,0,0,589,590,5,514,
        0,0,590,23,1,0,0,0,591,592,5,10,0,0,592,593,5,536,0,0,593,594,5,
        516,0,0,594,595,5,536,0,0,595,596,5,514,0,0,596,25,1,0,0,0,597,598,
        5,11,0,0,598,599,5,536,0,0,599,600,5,516,0,0,600,601,5,536,0,0,601,
        602,5,514,0,0,602,27,1,0,0,0,603,604,5,12,0,0,604,605,5,536,0,0,
        605,606,5,516,0,0,606,607,5,536,0,0,607,608,5,514,0,0,608,29,1,0,
        0,0,609,610,5,13,0,0,610,611,5,536,0,0,611,612,5,516,0,0,612,613,
        5,536,0,0,613,614,5,514,0,0,614,31,1,0,0,0,615,616,5,14,0,0,616,
        617,5,536,0,0,617,618,5,516,0,0,618,619,5,536,0,0,619,620,5,514,
        0,0,620,33,1,0,0,0,621,622,5,15,0,0,622,623,5,536,0,0,623,624,5,
        516,0,0,624,625,5,536,0,0,625,626,5,513,0,0,626,35,1,0,0,0,627,628,
        5,16,0,0,628,629,5,536,0,0,629,630,5,516,0,0,630,631,5,536,0,0,631,
        632,5,513,0,0,632,37,1,0,0,0,633,634,5,17,0,0,634,635,5,536,0,0,
        635,636,5,516,0,0,636,637,5,536,0,0,637,638,5,513,0,0,638,39,1,0,
        0,0,639,640,5,18,0,0,640,641,5,536,0,0,641,642,5,516,0,0,642,643,
        5,536,0,0,643,644,5,514,0,0,644,41,1,0,0,0,645,646,5,19,0,0,646,
        647,5,536,0,0,647,648,5,516,0,0,648,649,5,536,0,0,649,650,5,514,
        0,0,650,43,1,0,0,0,651,652,5,20,0,0,652,653,5,536,0,0,653,654,5,
        516,0,0,654,655,5,536,0,0,655,656,5,514,0,0,656,45,1,0,0,0,657,658,
        5,21,0,0,658,659,5,536,0,0,659,660,5,516,0,0,660,661,5,536,0,0,661,
        662,5,514,0,0,662,47,1,0,0,0,663,664,5,22,0,0,664,665,5,536,0,0,
        665,666,5,516,0,0,666,667,5,536,0,0,667,668,5,514,0,0,668,49,1,0,
        0,0,669,670,5,23,0,0,670,671,5,536,0,0,671,672,5,516,0,0,672,673,
        5,536,0,0,673,674,5,513,0,0,674,51,1,0,0,0,675,676,5,24,0,0,676,
        677,5,536,0,0,677,678,5,516,0,0,678,679,5,536,0,0,679,680,5,532,
        0,0,680,53,1,0,0,0,681,682,5,25,0,0,682,683,5,536,0,0,683,684,5,
        516,0,0,684,685,5,536,0,0,685,686,5,532,0,0,686,55,1,0,0,0,687,688,
        5,26,0,0,688,689,5,536,0,0,689,690,5,516,0,0,690,691,5,536,0,0,691,
        692,5,532,0,0,692,57,1,0,0,0,693,694,5,27,0,0,694,695,5,536,0,0,
        695,696,5,516,0,0,696,697,5,536,0,0,697,698,5,532,0,0,698,59,1,0,
        0,0,699,700,5,28,0,0,700,701,5,536,0,0,701,702,5,516,0,0,702,703,
        5,536,0,0,703,704,5,514,0,0,704,61,1,0,0,0,705,706,5,29,0,0,706,
        707,5,536,0,0,707,708,5,516,0,0,708,709,5,536,0,0,709,710,5,513,
        0,0,710,63,1,0,0,0,711,712,5,30,0,0,712,713,5,536,0,0,713,714,5,
        516,0,0,714,715,5,536,0,0,715,716,5,532,0,0,716,65,1,0,0,0,717,718,
        5,31,0,0,718,719,5,536,0,0,719,720,5,516,0,0,720,721,5,536,0,0,721,
        722,5,514,0,0,722,67,1,0,0,0,723,724,5,32,0,0,724,725,5,536,0,0,
        725,726,5,516,0,0,726,727,5,536,0,0,727,728,5,513,0,0,728,69,1,0,
        0,0,729,730,5,33,0,0,730,731,5,536,0,0,731,732,5,516,0,0,732,733,
        5,536,0,0,733,734,5,513,0,0,734,71,1,0,0,0,735,736,5,34,0,0,736,
        737,5,536,0,0,737,738,5,516,0,0,738,739,5,536,0,0,739,740,5,514,
        0,0,740,73,1,0,0,0,741,742,5,35,0,0,742,743,5,536,0,0,743,744,5,
        516,0,0,744,745,5,536,0,0,745,746,5,514,0,0,746,75,1,0,0,0,747,748,
        5,36,0,0,748,749,5,536,0,0,749,750,5,516,0,0,750,751,5,536,0,0,751,
        752,5,513,0,0,752,77,1,0,0,0,753,754,5,37,0,0,754,755,5,536,0,0,
        755,756,5,516,0,0,756,757,5,536,0,0,757,758,5,513,0,0,758,79,1,0,
        0,0,759,760,5,38,0,0,760,761,5,536,0,0,761,762,5,516,0,0,762,763,
        5,536,0,0,763,764,5,514,0,0,764,81,1,0,0,0,765,766,5,39,0,0,766,
        767,5,536,0,0,767,768,5,516,0,0,768,769,5,536,0,0,769,770,5,513,
        0,0,770,83,1,0,0,0,771,772,5,40,0,0,772,773,5,536,0,0,773,774,5,
        516,0,0,774,775,5,536,0,0,775,776,5,514,0,0,776,85,1,0,0,0,777,778,
        5,41,0,0,778,779,5,536,0,0,779,780,5,516,0,0,780,781,5,536,0,0,781,
        782,5,532,0,0,782,87,1,0,0,0,783,784,5,42,0,0,784,785,5,536,0,0,
        785,786,5,516,0,0,786,787,5,536,0,0,787,788,5,514,0,0,788,89,1,0,
        0,0,789,790,5,43,0,0,790,791,5,536,0,0,791,792,5,516,0,0,792,793,
        5,536,0,0,793,794,5,514,0,0,794,91,1,0,0,0,795,796,5,44,0,0,796,
        797,5,536,0,0,797,798,3,402,201,0,798,811,5,535,0,0,799,801,5,536,
        0,0,800,799,1,0,0,0,800,801,1,0,0,0,801,802,1,0,0,0,802,803,3,94,
        47,0,803,804,5,535,0,0,804,810,1,0,0,0,805,807,5,536,0,0,806,805,
        1,0,0,0,806,807,1,0,0,0,807,808,1,0,0,0,808,810,5,535,0,0,809,800,
        1,0,0,0,809,806,1,0,0,0,810,813,1,0,0,0,811,809,1,0,0,0,811,812,
        1,0,0,0,812,814,1,0,0,0,813,811,1,0,0,0,814,815,3,260,130,0,815,
        93,1,0,0,0,816,822,3,96,48,0,817,822,3,98,49,0,818,822,3,100,50,
        0,819,822,3,102,51,0,820,822,3,104,52,0,821,816,1,0,0,0,821,817,
        1,0,0,0,821,818,1,0,0,0,821,819,1,0,0,0,821,820,1,0,0,0,822,95,1,
        0,0,0,823,824,5,45,0,0,824,825,5,536,0,0,825,826,5,516,0,0,826,827,
        5,536,0,0,827,828,5,513,0,0,828,97,1,0,0,0,829,830,5,46,0,0,830,
        831,5,536,0,0,831,832,5,516,0,0,832,833,5,536,0,0,833,834,5,513,
        0,0,834,99,1,0,0,0,835,836,5,47,0,0,836,837,5,536,0,0,837,838,5,
        516,0,0,838,839,5,536,0,0,839,840,5,513,0,0,840,101,1,0,0,0,841,
        842,5,48,0,0,842,843,5,536,0,0,843,844,5,516,0,0,844,845,5,536,0,
        0,845,846,3,420,210,0,846,103,1,0,0,0,847,848,7,0,0,0,848,858,5,
        535,0,0,849,851,5,536,0,0,850,849,1,0,0,0,850,851,1,0,0,0,851,852,
        1,0,0,0,852,853,3,422,211,0,853,854,5,535,0,0,854,857,1,0,0,0,855,
        857,5,535,0,0,856,850,1,0,0,0,856,855,1,0,0,0,857,860,1,0,0,0,858,
        856,1,0,0,0,858,859,1,0,0,0,859,861,1,0,0,0,860,858,1,0,0,0,861,
        862,3,260,130,0,862,105,1,0,0,0,863,864,5,54,0,0,864,865,5,536,0,
        0,865,866,3,402,201,0,866,876,5,535,0,0,867,869,5,536,0,0,868,867,
        1,0,0,0,868,869,1,0,0,0,869,870,1,0,0,0,870,871,3,108,54,0,871,872,
        5,535,0,0,872,875,1,0,0,0,873,875,5,535,0,0,874,868,1,0,0,0,874,
        873,1,0,0,0,875,878,1,0,0,0,876,874,1,0,0,0,876,877,1,0,0,0,877,
        879,1,0,0,0,878,876,1,0,0,0,879,880,3,260,130,0,880,107,1,0,0,0,
        881,882,5,55,0,0,882,883,5,536,0,0,883,884,3,420,210,0,884,892,5,
        535,0,0,885,887,5,536,0,0,886,885,1,0,0,0,886,887,1,0,0,0,887,888,
        1,0,0,0,888,891,3,110,55,0,889,891,5,535,0,0,890,886,1,0,0,0,890,
        889,1,0,0,0,891,894,1,0,0,0,892,890,1,0,0,0,892,893,1,0,0,0,893,
        895,1,0,0,0,894,892,1,0,0,0,895,896,3,260,130,0,896,109,1,0,0,0,
        897,903,3,112,56,0,898,903,3,114,57,0,899,903,3,116,58,0,900,903,
        3,118,59,0,901,903,3,120,60,0,902,897,1,0,0,0,902,898,1,0,0,0,902,
        899,1,0,0,0,902,900,1,0,0,0,902,901,1,0,0,0,903,111,1,0,0,0,904,
        905,5,56,0,0,905,906,5,536,0,0,906,907,5,516,0,0,907,908,5,536,0,
        0,908,909,5,519,0,0,909,910,5,536,0,0,910,911,5,520,0,0,911,113,
        1,0,0,0,912,913,5,57,0,0,913,914,5,536,0,0,914,915,5,516,0,0,915,
        916,5,536,0,0,916,917,5,513,0,0,917,115,1,0,0,0,918,919,5,58,0,0,
        919,920,5,536,0,0,920,921,5,516,0,0,921,922,5,536,0,0,922,923,5,
        514,0,0,923,117,1,0,0,0,924,925,5,59,0,0,925,926,5,536,0,0,926,927,
        5,516,0,0,927,928,5,536,0,0,928,929,5,532,0,0,929,119,1,0,0,0,930,
        931,5,60,0,0,931,932,5,536,0,0,932,933,5,516,0,0,933,934,5,536,0,
        0,934,935,5,532,0,0,935,121,1,0,0,0,936,937,5,61,0,0,937,938,5,536,
        0,0,938,939,5,534,0,0,939,947,5,535,0,0,940,942,5,536,0,0,941,940,
        1,0,0,0,941,942,1,0,0,0,942,943,1,0,0,0,943,944,3,124,62,0,944,945,
        5,535,0,0,945,948,1,0,0,0,946,948,5,535,0,0,947,941,1,0,0,0,947,
        946,1,0,0,0,948,949,1,0,0,0,949,947,1,0,0,0,949,950,1,0,0,0,950,
        951,1,0,0,0,951,952,3,260,130,0,952,123,1,0,0,0,953,959,3,126,63,
        0,954,959,3,128,64,0,955,959,3,130,65,0,956,959,3,132,66,0,957,959,
        3,134,67,0,958,953,1,0,0,0,958,954,1,0,0,0,958,955,1,0,0,0,958,956,
        1,0,0,0,958,957,1,0,0,0,959,125,1,0,0,0,960,962,5,62,0,0,961,963,
        5,536,0,0,962,961,1,0,0,0,962,963,1,0,0,0,963,964,1,0,0,0,964,966,
        5,516,0,0,965,967,5,536,0,0,966,965,1,0,0,0,966,967,1,0,0,0,967,
        968,1,0,0,0,968,969,3,262,131,0,969,127,1,0,0,0,970,972,5,63,0,0,
        971,973,5,536,0,0,972,971,1,0,0,0,972,973,1,0,0,0,973,974,1,0,0,
        0,974,976,5,516,0,0,975,977,5,536,0,0,976,975,1,0,0,0,976,977,1,
        0,0,0,977,978,1,0,0,0,978,979,5,513,0,0,979,129,1,0,0,0,980,982,
        5,64,0,0,981,983,5,536,0,0,982,981,1,0,0,0,982,983,1,0,0,0,983,984,
        1,0,0,0,984,986,5,516,0,0,985,987,5,536,0,0,986,985,1,0,0,0,986,
        987,1,0,0,0,987,988,1,0,0,0,988,989,5,513,0,0,989,131,1,0,0,0,990,
        992,5,65,0,0,991,993,5,536,0,0,992,991,1,0,0,0,992,993,1,0,0,0,993,
        994,1,0,0,0,994,996,5,516,0,0,995,997,5,536,0,0,996,995,1,0,0,0,
        996,997,1,0,0,0,997,998,1,0,0,0,998,999,5,522,0,0,999,1000,5,536,
        0,0,1000,1001,5,523,0,0,1001,1002,5,536,0,0,1002,1003,5,524,0,0,
        1003,1004,5,536,0,0,1004,1005,5,525,0,0,1005,133,1,0,0,0,1006,1008,
        5,66,0,0,1007,1009,5,536,0,0,1008,1007,1,0,0,0,1008,1009,1,0,0,0,
        1009,1010,1,0,0,0,1010,1012,5,516,0,0,1011,1013,5,536,0,0,1012,1011,
        1,0,0,0,1012,1013,1,0,0,0,1013,1014,1,0,0,0,1014,1015,7,1,0,0,1015,
        135,1,0,0,0,1016,1017,5,68,0,0,1017,1021,5,534,0,0,1018,1020,3,138,
        69,0,1019,1018,1,0,0,0,1020,1023,1,0,0,0,1021,1019,1,0,0,0,1021,
        1022,1,0,0,0,1022,1024,1,0,0,0,1023,1021,1,0,0,0,1024,1025,3,260,
        130,0,1025,137,1,0,0,0,1026,1027,5,69,0,0,1027,1028,5,516,0,0,1028,
        1042,5,534,0,0,1029,1030,5,70,0,0,1030,1031,5,516,0,0,1031,1042,
        5,513,0,0,1032,1033,5,71,0,0,1033,1034,5,516,0,0,1034,1042,5,532,
        0,0,1035,1036,5,72,0,0,1036,1037,5,516,0,0,1037,1042,5,513,0,0,1038,
        1039,5,73,0,0,1039,1040,5,516,0,0,1040,1042,5,534,0,0,1041,1026,
        1,0,0,0,1041,1029,1,0,0,0,1041,1032,1,0,0,0,1041,1035,1,0,0,0,1041,
        1038,1,0,0,0,1042,139,1,0,0,0,1043,1044,5,74,0,0,1044,1048,5,534,
        0,0,1045,1047,3,142,71,0,1046,1045,1,0,0,0,1047,1050,1,0,0,0,1048,
        1046,1,0,0,0,1048,1049,1,0,0,0,1049,1051,1,0,0,0,1050,1048,1,0,0,
        0,1051,1052,3,260,130,0,1052,141,1,0,0,0,1053,1054,5,74,0,0,1054,
        1055,5,516,0,0,1055,1056,5,534,0,0,1056,1057,5,515,0,0,1057,143,
        1,0,0,0,1058,1059,5,75,0,0,1059,1063,5,534,0,0,1060,1062,3,146,73,
        0,1061,1060,1,0,0,0,1062,1065,1,0,0,0,1063,1061,1,0,0,0,1063,1064,
        1,0,0,0,1064,1066,1,0,0,0,1065,1063,1,0,0,0,1066,1067,3,260,130,
        0,1067,145,1,0,0,0,1068,1086,3,264,132,0,1069,1086,3,268,134,0,1070,
        1086,3,272,136,0,1071,1086,3,274,137,0,1072,1086,3,278,139,0,1073,
        1086,3,280,140,0,1074,1086,3,282,141,0,1075,1086,3,284,142,0,1076,
        1086,3,286,143,0,1077,1086,3,288,144,0,1078,1086,3,290,145,0,1079,
        1086,3,292,146,0,1080,1086,3,418,209,0,1081,1086,3,422,211,0,1082,
        1086,3,426,213,0,1083,1086,3,432,216,0,1084,1086,3,436,218,0,1085,
        1068,1,0,0,0,1085,1069,1,0,0,0,1085,1070,1,0,0,0,1085,1071,1,0,0,
        0,1085,1072,1,0,0,0,1085,1073,1,0,0,0,1085,1074,1,0,0,0,1085,1075,
        1,0,0,0,1085,1076,1,0,0,0,1085,1077,1,0,0,0,1085,1078,1,0,0,0,1085,
        1079,1,0,0,0,1085,1080,1,0,0,0,1085,1081,1,0,0,0,1085,1082,1,0,0,
        0,1085,1083,1,0,0,0,1085,1084,1,0,0,0,1086,147,1,0,0,0,1087,1088,
        5,76,0,0,1088,1092,5,534,0,0,1089,1091,3,150,75,0,1090,1089,1,0,
        0,0,1091,1094,1,0,0,0,1092,1090,1,0,0,0,1092,1093,1,0,0,0,1093,1095,
        1,0,0,0,1094,1092,1,0,0,0,1095,1096,3,260,130,0,1096,149,1,0,0,0,
        1097,1098,5,513,0,0,1098,1099,5,516,0,0,1099,1100,3,404,202,0,1100,
        151,1,0,0,0,1101,1102,5,77,0,0,1102,1106,5,534,0,0,1103,1105,3,154,
        77,0,1104,1103,1,0,0,0,1105,1108,1,0,0,0,1106,1104,1,0,0,0,1106,
        1107,1,0,0,0,1107,1109,1,0,0,0,1108,1106,1,0,0,0,1109,1110,3,260,
        130,0,1110,153,1,0,0,0,1111,1118,3,294,147,0,1112,1118,3,298,149,
        0,1113,1118,3,300,150,0,1114,1118,3,302,151,0,1115,1118,3,296,148,
        0,1116,1118,3,304,152,0,1117,1111,1,0,0,0,1117,1112,1,0,0,0,1117,
        1113,1,0,0,0,1117,1114,1,0,0,0,1117,1115,1,0,0,0,1117,1116,1,0,0,
        0,1118,155,1,0,0,0,1119,1123,5,78,0,0,1120,1122,3,158,79,0,1121,
        1120,1,0,0,0,1122,1125,1,0,0,0,1123,1121,1,0,0,0,1123,1124,1,0,0,
        0,1124,1126,1,0,0,0,1125,1123,1,0,0,0,1126,1127,3,260,130,0,1127,
        157,1,0,0,0,1128,1139,3,306,153,0,1129,1139,3,308,154,0,1130,1139,
        3,310,155,0,1131,1139,3,312,156,0,1132,1139,3,314,157,0,1133,1139,
        3,316,158,0,1134,1139,3,318,159,0,1135,1139,3,320,160,0,1136,1139,
        3,322,161,0,1137,1139,3,324,162,0,1138,1128,1,0,0,0,1138,1129,1,
        0,0,0,1138,1130,1,0,0,0,1138,1131,1,0,0,0,1138,1132,1,0,0,0,1138,
        1133,1,0,0,0,1138,1134,1,0,0,0,1138,1135,1,0,0,0,1138,1136,1,0,0,
        0,1138,1137,1,0,0,0,1139,159,1,0,0,0,1140,1141,5,79,0,0,1141,1145,
        5,534,0,0,1142,1144,3,162,81,0,1143,1142,1,0,0,0,1144,1147,1,0,0,
        0,1145,1143,1,0,0,0,1145,1146,1,0,0,0,1146,1148,1,0,0,0,1147,1145,
        1,0,0,0,1148,1149,3,260,130,0,1149,161,1,0,0,0,1150,1159,3,164,82,
        0,1151,1159,3,166,83,0,1152,1159,3,168,84,0,1153,1159,3,170,85,0,
        1154,1159,3,172,86,0,1155,1159,3,174,87,0,1156,1159,3,176,88,0,1157,
        1159,3,178,89,0,1158,1150,1,0,0,0,1158,1151,1,0,0,0,1158,1152,1,
        0,0,0,1158,1153,1,0,0,0,1158,1154,1,0,0,0,1158,1155,1,0,0,0,1158,
        1156,1,0,0,0,1158,1157,1,0,0,0,1159,163,1,0,0,0,1160,1177,5,80,0,
        0,1161,1176,3,326,163,0,1162,1176,3,328,164,0,1163,1176,3,330,165,
        0,1164,1176,3,334,167,0,1165,1176,3,332,166,0,1166,1176,3,336,168,
        0,1167,1176,3,338,169,0,1168,1176,3,340,170,0,1169,1176,3,342,171,
        0,1170,1176,3,344,172,0,1171,1176,3,348,174,0,1172,1176,3,346,173,
        0,1173,1176,3,350,175,0,1174,1176,3,352,176,0,1175,1161,1,0,0,0,
        1175,1162,1,0,0,0,1175,1163,1,0,0,0,1175,1164,1,0,0,0,1175,1165,
        1,0,0,0,1175,1166,1,0,0,0,1175,1167,1,0,0,0,1175,1168,1,0,0,0,1175,
        1169,1,0,0,0,1175,1170,1,0,0,0,1175,1171,1,0,0,0,1175,1172,1,0,0,
        0,1175,1173,1,0,0,0,1175,1174,1,0,0,0,1176,1179,1,0,0,0,1177,1175,
        1,0,0,0,1177,1178,1,0,0,0,1178,1180,1,0,0,0,1179,1177,1,0,0,0,1180,
        1181,3,260,130,0,1181,165,1,0,0,0,1182,1186,5,81,0,0,1183,1185,3,
        354,177,0,1184,1183,1,0,0,0,1185,1188,1,0,0,0,1186,1184,1,0,0,0,
        1186,1187,1,0,0,0,1187,1189,1,0,0,0,1188,1186,1,0,0,0,1189,1190,
        3,260,130,0,1190,167,1,0,0,0,1191,1197,5,82,0,0,1192,1196,3,398,
        199,0,1193,1196,3,356,178,0,1194,1196,3,358,179,0,1195,1192,1,0,
        0,0,1195,1193,1,0,0,0,1195,1194,1,0,0,0,1196,1199,1,0,0,0,1197,1195,
        1,0,0,0,1197,1198,1,0,0,0,1198,1200,1,0,0,0,1199,1197,1,0,0,0,1200,
        1201,3,260,130,0,1201,169,1,0,0,0,1202,1213,5,83,0,0,1203,1212,3,
        360,180,0,1204,1212,3,362,181,0,1205,1212,3,364,182,0,1206,1212,
        3,366,183,0,1207,1212,3,368,184,0,1208,1212,3,370,185,0,1209,1212,
        3,372,186,0,1210,1212,3,374,187,0,1211,1203,1,0,0,0,1211,1204,1,
        0,0,0,1211,1205,1,0,0,0,1211,1206,1,0,0,0,1211,1207,1,0,0,0,1211,
        1208,1,0,0,0,1211,1209,1,0,0,0,1211,1210,1,0,0,0,1212,1215,1,0,0,
        0,1213,1211,1,0,0,0,1213,1214,1,0,0,0,1214,1216,1,0,0,0,1215,1213,
        1,0,0,0,1216,1217,3,260,130,0,1217,171,1,0,0,0,1218,1226,5,84,0,
        0,1219,1225,3,376,188,0,1220,1225,3,378,189,0,1221,1225,3,380,190,
        0,1222,1225,3,382,191,0,1223,1225,3,384,192,0,1224,1219,1,0,0,0,
        1224,1220,1,0,0,0,1224,1221,1,0,0,0,1224,1222,1,0,0,0,1224,1223,
        1,0,0,0,1225,1228,1,0,0,0,1226,1224,1,0,0,0,1226,1227,1,0,0,0,1227,
        1229,1,0,0,0,1228,1226,1,0,0,0,1229,1230,3,260,130,0,1230,173,1,
        0,0,0,1231,1235,5,85,0,0,1232,1234,3,386,193,0,1233,1232,1,0,0,0,
        1234,1237,1,0,0,0,1235,1233,1,0,0,0,1235,1236,1,0,0,0,1236,1238,
        1,0,0,0,1237,1235,1,0,0,0,1238,1239,3,260,130,0,1239,175,1,0,0,0,
        1240,1245,5,86,0,0,1241,1244,3,388,194,0,1242,1244,3,390,195,0,1243,
        1241,1,0,0,0,1243,1242,1,0,0,0,1244,1247,1,0,0,0,1245,1243,1,0,0,
        0,1245,1246,1,0,0,0,1246,1248,1,0,0,0,1247,1245,1,0,0,0,1248,1249,
        3,260,130,0,1249,177,1,0,0,0,1250,1256,5,87,0,0,1251,1255,3,392,
        196,0,1252,1255,3,394,197,0,1253,1255,3,396,198,0,1254,1251,1,0,
        0,0,1254,1252,1,0,0,0,1254,1253,1,0,0,0,1255,1258,1,0,0,0,1256,1254,
        1,0,0,0,1256,1257,1,0,0,0,1257,1259,1,0,0,0,1258,1256,1,0,0,0,1259,
        1260,3,260,130,0,1260,179,1,0,0,0,1261,1266,5,88,0,0,1262,1265,3,
        400,200,0,1263,1265,3,182,91,0,1264,1262,1,0,0,0,1264,1263,1,0,0,
        0,1265,1268,1,0,0,0,1266,1264,1,0,0,0,1266,1267,1,0,0,0,1267,1269,
        1,0,0,0,1268,1266,1,0,0,0,1269,1270,3,260,130,0,1270,181,1,0,0,0,
        1271,1275,7,2,0,0,1272,1274,3,184,92,0,1273,1272,1,0,0,0,1274,1277,
        1,0,0,0,1275,1273,1,0,0,0,1275,1276,1,0,0,0,1276,1278,1,0,0,0,1277,
        1275,1,0,0,0,1278,1279,3,260,130,0,1279,183,1,0,0,0,1280,1281,5,
        62,0,0,1281,1282,5,516,0,0,1282,1305,5,534,0,0,1283,1284,5,118,0,
        0,1284,1285,5,516,0,0,1285,1305,5,534,0,0,1286,1287,5,119,0,0,1287,
        1288,5,516,0,0,1288,1305,5,515,0,0,1289,1290,5,120,0,0,1290,1291,
        5,516,0,0,1291,1305,5,515,0,0,1292,1293,5,121,0,0,1293,1294,5,516,
        0,0,1294,1305,5,513,0,0,1295,1296,5,122,0,0,1296,1297,5,516,0,0,
        1297,1298,5,526,0,0,1298,1299,5,527,0,0,1299,1300,5,528,0,0,1300,
        1305,5,529,0,0,1301,1302,5,123,0,0,1302,1303,5,516,0,0,1303,1305,
        5,532,0,0,1304,1280,1,0,0,0,1304,1283,1,0,0,0,1304,1286,1,0,0,0,
        1304,1289,1,0,0,0,1304,1292,1,0,0,0,1304,1295,1,0,0,0,1304,1301,
        1,0,0,0,1305,185,1,0,0,0,1306,1307,5,124,0,0,1307,1311,5,534,0,0,
        1308,1310,3,188,94,0,1309,1308,1,0,0,0,1310,1313,1,0,0,0,1311,1309,
        1,0,0,0,1311,1312,1,0,0,0,1312,1314,1,0,0,0,1313,1311,1,0,0,0,1314,
        1315,3,260,130,0,1315,187,1,0,0,0,1316,1489,3,190,95,0,1317,1489,
        3,192,96,0,1318,1489,3,194,97,0,1319,1489,3,196,98,0,1320,1321,5,
        125,0,0,1321,1322,5,516,0,0,1322,1489,7,3,0,0,1323,1324,5,126,0,
        0,1324,1325,5,516,0,0,1325,1489,7,3,0,0,1326,1327,5,127,0,0,1327,
        1328,5,516,0,0,1328,1489,7,3,0,0,1329,1330,5,128,0,0,1330,1331,5,
        516,0,0,1331,1489,7,3,0,0,1332,1333,5,129,0,0,1333,1334,5,516,0,
        0,1334,1489,7,3,0,0,1335,1336,5,130,0,0,1336,1337,5,516,0,0,1337,
        1489,7,3,0,0,1338,1339,5,131,0,0,1339,1340,5,516,0,0,1340,1489,7,
        3,0,0,1341,1342,5,132,0,0,1342,1343,5,516,0,0,1343,1489,5,513,0,
        0,1344,1345,5,133,0,0,1345,1346,5,516,0,0,1346,1489,5,513,0,0,1347,
        1348,5,134,0,0,1348,1349,5,516,0,0,1349,1489,5,513,0,0,1350,1351,
        5,135,0,0,1351,1352,5,516,0,0,1352,1489,5,532,0,0,1353,1354,5,136,
        0,0,1354,1355,5,516,0,0,1355,1489,7,3,0,0,1356,1357,5,137,0,0,1357,
        1358,5,516,0,0,1358,1489,7,3,0,0,1359,1360,5,138,0,0,1360,1361,5,
        516,0,0,1361,1489,7,3,0,0,1362,1363,5,139,0,0,1363,1364,5,516,0,
        0,1364,1489,7,3,0,0,1365,1366,5,140,0,0,1366,1367,5,516,0,0,1367,
        1489,7,3,0,0,1368,1369,5,141,0,0,1369,1370,5,516,0,0,1370,1489,7,
        3,0,0,1371,1372,5,142,0,0,1372,1373,5,516,0,0,1373,1489,5,513,0,
        0,1374,1375,5,143,0,0,1375,1376,5,516,0,0,1376,1489,7,3,0,0,1377,
        1378,5,144,0,0,1378,1379,5,516,0,0,1379,1489,7,3,0,0,1380,1381,5,
        145,0,0,1381,1382,5,516,0,0,1382,1489,7,3,0,0,1383,1384,5,146,0,
        0,1384,1385,5,516,0,0,1385,1489,7,3,0,0,1386,1387,5,147,0,0,1387,
        1388,5,516,0,0,1388,1489,7,3,0,0,1389,1390,5,148,0,0,1390,1391,5,
        516,0,0,1391,1489,7,3,0,0,1392,1393,5,149,0,0,1393,1394,5,516,0,
        0,1394,1489,7,3,0,0,1395,1396,5,150,0,0,1396,1397,5,516,0,0,1397,
        1489,7,3,0,0,1398,1399,5,151,0,0,1399,1400,5,516,0,0,1400,1489,5,
        532,0,0,1401,1402,5,152,0,0,1402,1403,5,516,0,0,1403,1489,5,513,
        0,0,1404,1405,5,153,0,0,1405,1406,5,516,0,0,1406,1489,5,532,0,0,
        1407,1408,5,154,0,0,1408,1409,5,516,0,0,1409,1489,5,532,0,0,1410,
        1411,5,155,0,0,1411,1412,5,516,0,0,1412,1489,5,532,0,0,1413,1414,
        5,156,0,0,1414,1415,5,516,0,0,1415,1489,7,3,0,0,1416,1417,5,157,
        0,0,1417,1418,5,516,0,0,1418,1489,7,3,0,0,1419,1420,5,158,0,0,1420,
        1421,5,516,0,0,1421,1489,5,513,0,0,1422,1423,5,159,0,0,1423,1424,
        5,516,0,0,1424,1489,5,532,0,0,1425,1426,5,160,0,0,1426,1427,5,516,
        0,0,1427,1489,7,3,0,0,1428,1429,5,161,0,0,1429,1430,5,516,0,0,1430,
        1489,7,3,0,0,1431,1432,5,162,0,0,1432,1433,5,516,0,0,1433,1489,7,
        3,0,0,1434,1435,5,163,0,0,1435,1436,5,516,0,0,1436,1489,7,3,0,0,
        1437,1438,5,164,0,0,1438,1439,5,516,0,0,1439,1489,7,3,0,0,1440,1441,
        5,165,0,0,1441,1442,5,516,0,0,1442,1489,7,3,0,0,1443,1444,5,166,
        0,0,1444,1445,5,516,0,0,1445,1489,5,532,0,0,1446,1447,5,167,0,0,
        1447,1448,5,516,0,0,1448,1489,5,513,0,0,1449,1450,5,168,0,0,1450,
        1451,5,516,0,0,1451,1489,5,513,0,0,1452,1453,5,169,0,0,1453,1454,
        5,516,0,0,1454,1489,7,3,0,0,1455,1456,5,170,0,0,1456,1457,5,516,
        0,0,1457,1489,7,3,0,0,1458,1459,5,171,0,0,1459,1460,5,516,0,0,1460,
        1489,5,513,0,0,1461,1462,5,172,0,0,1462,1463,5,516,0,0,1463,1489,
        7,3,0,0,1464,1465,5,173,0,0,1465,1466,5,516,0,0,1466,1489,5,513,
        0,0,1467,1468,5,174,0,0,1468,1469,5,516,0,0,1469,1489,5,513,0,0,
        1470,1471,5,175,0,0,1471,1472,5,516,0,0,1472,1489,5,513,0,0,1473,
        1474,5,176,0,0,1474,1475,5,516,0,0,1475,1489,5,532,0,0,1476,1477,
        5,177,0,0,1477,1478,5,516,0,0,1478,1489,7,3,0,0,1479,1480,5,178,
        0,0,1480,1481,5,516,0,0,1481,1489,7,3,0,0,1482,1483,5,179,0,0,1483,
        1484,5,516,0,0,1484,1489,7,3,0,0,1485,1486,5,180,0,0,1486,1487,5,
        516,0,0,1487,1489,7,3,0,0,1488,1316,1,0,0,0,1488,1317,1,0,0,0,1488,
        1318,1,0,0,0,1488,1319,1,0,0,0,1488,1320,1,0,0,0,1488,1323,1,0,0,
        0,1488,1326,1,0,0,0,1488,1329,1,0,0,0,1488,1332,1,0,0,0,1488,1335,
        1,0,0,0,1488,1338,1,0,0,0,1488,1341,1,0,0,0,1488,1344,1,0,0,0,1488,
        1347,1,0,0,0,1488,1350,1,0,0,0,1488,1353,1,0,0,0,1488,1356,1,0,0,
        0,1488,1359,1,0,0,0,1488,1362,1,0,0,0,1488,1365,1,0,0,0,1488,1368,
        1,0,0,0,1488,1371,1,0,0,0,1488,1374,1,0,0,0,1488,1377,1,0,0,0,1488,
        1380,1,0,0,0,1488,1383,1,0,0,0,1488,1386,1,0,0,0,1488,1389,1,0,0,
        0,1488,1392,1,0,0,0,1488,1395,1,0,0,0,1488,1398,1,0,0,0,1488,1401,
        1,0,0,0,1488,1404,1,0,0,0,1488,1407,1,0,0,0,1488,1410,1,0,0,0,1488,
        1413,1,0,0,0,1488,1416,1,0,0,0,1488,1419,1,0,0,0,1488,1422,1,0,0,
        0,1488,1425,1,0,0,0,1488,1428,1,0,0,0,1488,1431,1,0,0,0,1488,1434,
        1,0,0,0,1488,1437,1,0,0,0,1488,1440,1,0,0,0,1488,1443,1,0,0,0,1488,
        1446,1,0,0,0,1488,1449,1,0,0,0,1488,1452,1,0,0,0,1488,1455,1,0,0,
        0,1488,1458,1,0,0,0,1488,1461,1,0,0,0,1488,1464,1,0,0,0,1488,1467,
        1,0,0,0,1488,1470,1,0,0,0,1488,1473,1,0,0,0,1488,1476,1,0,0,0,1488,
        1479,1,0,0,0,1488,1482,1,0,0,0,1488,1485,1,0,0,0,1489,189,1,0,0,
        0,1490,1491,5,181,0,0,1491,1493,5,516,0,0,1492,1494,3,198,99,0,1493,
        1492,1,0,0,0,1494,1495,1,0,0,0,1495,1493,1,0,0,0,1495,1496,1,0,0,
        0,1496,191,1,0,0,0,1497,1498,5,182,0,0,1498,1499,5,516,0,0,1499,
        1500,3,200,100,0,1500,193,1,0,0,0,1501,1502,5,183,0,0,1502,1503,
        5,516,0,0,1503,1504,3,202,101,0,1504,195,1,0,0,0,1505,1506,5,184,
        0,0,1506,1507,5,516,0,0,1507,1508,3,204,102,0,1508,197,1,0,0,0,1509,
        1510,5,534,0,0,1510,199,1,0,0,0,1511,1512,5,534,0,0,1512,201,1,0,
        0,0,1513,1514,5,534,0,0,1514,203,1,0,0,0,1515,1516,5,534,0,0,1516,
        205,1,0,0,0,1517,1518,5,185,0,0,1518,1522,5,513,0,0,1519,1521,3,
        208,104,0,1520,1519,1,0,0,0,1521,1524,1,0,0,0,1522,1520,1,0,0,0,
        1522,1523,1,0,0,0,1523,1525,1,0,0,0,1524,1522,1,0,0,0,1525,1526,
        3,260,130,0,1526,207,1,0,0,0,1527,1528,5,186,0,0,1528,1529,5,516,
        0,0,1529,1544,7,4,0,0,1530,1531,5,195,0,0,1531,1532,5,516,0,0,1532,
        1544,5,513,0,0,1533,1534,5,196,0,0,1534,1536,5,516,0,0,1535,1537,
        3,424,212,0,1536,1535,1,0,0,0,1537,1538,1,0,0,0,1538,1536,1,0,0,
        0,1538,1539,1,0,0,0,1539,1544,1,0,0,0,1540,1541,5,197,0,0,1541,1542,
        5,516,0,0,1542,1544,5,513,0,0,1543,1527,1,0,0,0,1543,1530,1,0,0,
        0,1543,1533,1,0,0,0,1543,1540,1,0,0,0,1544,209,1,0,0,0,1545,1546,
        5,198,0,0,1546,1550,5,534,0,0,1547,1549,3,212,106,0,1548,1547,1,
        0,0,0,1549,1552,1,0,0,0,1550,1548,1,0,0,0,1550,1551,1,0,0,0,1551,
        1553,1,0,0,0,1552,1550,1,0,0,0,1553,1554,3,260,130,0,1554,211,1,
        0,0,0,1555,1556,5,199,0,0,1556,1558,5,516,0,0,1557,1559,3,424,212,
        0,1558,1557,1,0,0,0,1559,1560,1,0,0,0,1560,1558,1,0,0,0,1560,1561,
        1,0,0,0,1561,1575,1,0,0,0,1562,1563,5,200,0,0,1563,1564,5,516,0,
        0,1564,1575,5,513,0,0,1565,1566,5,201,0,0,1566,1567,5,516,0,0,1567,
        1575,5,532,0,0,1568,1569,5,202,0,0,1569,1570,5,516,0,0,1570,1575,
        5,534,0,0,1571,1572,5,203,0,0,1572,1573,5,516,0,0,1573,1575,5,534,
        0,0,1574,1555,1,0,0,0,1574,1562,1,0,0,0,1574,1565,1,0,0,0,1574,1568,
        1,0,0,0,1574,1571,1,0,0,0,1575,213,1,0,0,0,1576,1577,5,204,0,0,1577,
        1581,5,534,0,0,1578,1580,3,216,108,0,1579,1578,1,0,0,0,1580,1583,
        1,0,0,0,1581,1579,1,0,0,0,1581,1582,1,0,0,0,1582,1584,1,0,0,0,1583,
        1581,1,0,0,0,1584,1585,3,260,130,0,1585,215,1,0,0,0,1586,1587,5,
        205,0,0,1587,1720,5,516,0,0,1588,1721,5,206,0,0,1589,1721,5,207,
        0,0,1590,1721,1,0,0,0,1591,1721,5,208,0,0,1592,1721,1,0,0,0,1593,
        1721,5,209,0,0,1594,1721,1,0,0,0,1595,1721,5,210,0,0,1596,1721,1,
        0,0,0,1597,1721,5,211,0,0,1598,1721,1,0,0,0,1599,1721,5,212,0,0,
        1600,1721,1,0,0,0,1601,1721,5,213,0,0,1602,1721,1,0,0,0,1603,1721,
        5,214,0,0,1604,1721,1,0,0,0,1605,1721,5,215,0,0,1606,1721,1,0,0,
        0,1607,1721,5,216,0,0,1608,1721,1,0,0,0,1609,1721,5,217,0,0,1610,
        1721,1,0,0,0,1611,1721,5,218,0,0,1612,1721,1,0,0,0,1613,1721,5,219,
        0,0,1614,1721,1,0,0,0,1615,1721,5,220,0,0,1616,1721,1,0,0,0,1617,
        1721,5,221,0,0,1618,1721,1,0,0,0,1619,1721,5,222,0,0,1620,1721,1,
        0,0,0,1621,1721,5,223,0,0,1622,1721,1,0,0,0,1623,1721,5,224,0,0,
        1624,1721,1,0,0,0,1625,1721,5,225,0,0,1626,1721,1,0,0,0,1627,1721,
        5,226,0,0,1628,1721,1,0,0,0,1629,1721,5,227,0,0,1630,1721,1,0,0,
        0,1631,1721,5,228,0,0,1632,1721,1,0,0,0,1633,1721,5,229,0,0,1634,
        1721,1,0,0,0,1635,1721,5,230,0,0,1636,1721,1,0,0,0,1637,1721,5,231,
        0,0,1638,1721,1,0,0,0,1639,1721,5,232,0,0,1640,1721,1,0,0,0,1641,
        1721,5,233,0,0,1642,1721,1,0,0,0,1643,1721,5,234,0,0,1644,1721,1,
        0,0,0,1645,1721,5,235,0,0,1646,1721,1,0,0,0,1647,1721,5,236,0,0,
        1648,1721,1,0,0,0,1649,1721,5,237,0,0,1650,1721,1,0,0,0,1651,1721,
        5,238,0,0,1652,1721,1,0,0,0,1653,1721,5,239,0,0,1654,1721,1,0,0,
        0,1655,1721,5,240,0,0,1656,1721,1,0,0,0,1657,1721,5,241,0,0,1658,
        1721,1,0,0,0,1659,1721,5,242,0,0,1660,1721,1,0,0,0,1661,1721,5,243,
        0,0,1662,1721,1,0,0,0,1663,1721,5,244,0,0,1664,1721,1,0,0,0,1665,
        1721,5,245,0,0,1666,1721,1,0,0,0,1667,1721,5,246,0,0,1668,1721,1,
        0,0,0,1669,1721,5,247,0,0,1670,1721,1,0,0,0,1671,1721,5,248,0,0,
        1672,1721,1,0,0,0,1673,1721,5,249,0,0,1674,1721,1,0,0,0,1675,1721,
        5,250,0,0,1676,1721,1,0,0,0,1677,1721,5,251,0,0,1678,1721,1,0,0,
        0,1679,1721,5,252,0,0,1680,1721,1,0,0,0,1681,1721,5,253,0,0,1682,
        1721,1,0,0,0,1683,1721,5,254,0,0,1684,1721,1,0,0,0,1685,1721,5,255,
        0,0,1686,1721,1,0,0,0,1687,1721,5,256,0,0,1688,1721,1,0,0,0,1689,
        1721,5,257,0,0,1690,1721,1,0,0,0,1691,1721,5,258,0,0,1692,1721,1,
        0,0,0,1693,1721,5,259,0,0,1694,1721,1,0,0,0,1695,1721,5,260,0,0,
        1696,1721,1,0,0,0,1697,1721,5,261,0,0,1698,1721,1,0,0,0,1699,1721,
        5,262,0,0,1700,1721,1,0,0,0,1701,1721,5,263,0,0,1702,1721,1,0,0,
        0,1703,1721,5,264,0,0,1704,1721,1,0,0,0,1705,1721,5,265,0,0,1706,
        1721,1,0,0,0,1707,1721,5,266,0,0,1708,1721,1,0,0,0,1709,1721,5,267,
        0,0,1710,1721,1,0,0,0,1711,1721,5,268,0,0,1712,1721,1,0,0,0,1713,
        1721,5,269,0,0,1714,1721,1,0,0,0,1715,1721,5,270,0,0,1716,1721,1,
        0,0,0,1717,1721,5,271,0,0,1718,1721,1,0,0,0,1719,1721,5,272,0,0,
        1720,1588,1,0,0,0,1720,1589,1,0,0,0,1720,1590,1,0,0,0,1720,1591,
        1,0,0,0,1720,1592,1,0,0,0,1720,1593,1,0,0,0,1720,1594,1,0,0,0,1720,
        1595,1,0,0,0,1720,1596,1,0,0,0,1720,1597,1,0,0,0,1720,1598,1,0,0,
        0,1720,1599,1,0,0,0,1720,1600,1,0,0,0,1720,1601,1,0,0,0,1720,1602,
        1,0,0,0,1720,1603,1,0,0,0,1720,1604,1,0,0,0,1720,1605,1,0,0,0,1720,
        1606,1,0,0,0,1720,1607,1,0,0,0,1720,1608,1,0,0,0,1720,1609,1,0,0,
        0,1720,1610,1,0,0,0,1720,1611,1,0,0,0,1720,1612,1,0,0,0,1720,1613,
        1,0,0,0,1720,1614,1,0,0,0,1720,1615,1,0,0,0,1720,1616,1,0,0,0,1720,
        1617,1,0,0,0,1720,1618,1,0,0,0,1720,1619,1,0,0,0,1720,1620,1,0,0,
        0,1720,1621,1,0,0,0,1720,1622,1,0,0,0,1720,1623,1,0,0,0,1720,1624,
        1,0,0,0,1720,1625,1,0,0,0,1720,1626,1,0,0,0,1720,1627,1,0,0,0,1720,
        1628,1,0,0,0,1720,1629,1,0,0,0,1720,1630,1,0,0,0,1720,1631,1,0,0,
        0,1720,1632,1,0,0,0,1720,1633,1,0,0,0,1720,1634,1,0,0,0,1720,1635,
        1,0,0,0,1720,1636,1,0,0,0,1720,1637,1,0,0,0,1720,1638,1,0,0,0,1720,
        1639,1,0,0,0,1720,1640,1,0,0,0,1720,1641,1,0,0,0,1720,1642,1,0,0,
        0,1720,1643,1,0,0,0,1720,1644,1,0,0,0,1720,1645,1,0,0,0,1720,1646,
        1,0,0,0,1720,1647,1,0,0,0,1720,1648,1,0,0,0,1720,1649,1,0,0,0,1720,
        1650,1,0,0,0,1720,1651,1,0,0,0,1720,1652,1,0,0,0,1720,1653,1,0,0,
        0,1720,1654,1,0,0,0,1720,1655,1,0,0,0,1720,1656,1,0,0,0,1720,1657,
        1,0,0,0,1720,1658,1,0,0,0,1720,1659,1,0,0,0,1720,1660,1,0,0,0,1720,
        1661,1,0,0,0,1720,1662,1,0,0,0,1720,1663,1,0,0,0,1720,1664,1,0,0,
        0,1720,1665,1,0,0,0,1720,1666,1,0,0,0,1720,1667,1,0,0,0,1720,1668,
        1,0,0,0,1720,1669,1,0,0,0,1720,1670,1,0,0,0,1720,1671,1,0,0,0,1720,
        1672,1,0,0,0,1720,1673,1,0,0,0,1720,1674,1,0,0,0,1720,1675,1,0,0,
        0,1720,1676,1,0,0,0,1720,1677,1,0,0,0,1720,1678,1,0,0,0,1720,1679,
        1,0,0,0,1720,1680,1,0,0,0,1720,1681,1,0,0,0,1720,1682,1,0,0,0,1720,
        1683,1,0,0,0,1720,1684,1,0,0,0,1720,1685,1,0,0,0,1720,1686,1,0,0,
        0,1720,1687,1,0,0,0,1720,1688,1,0,0,0,1720,1689,1,0,0,0,1720,1690,
        1,0,0,0,1720,1691,1,0,0,0,1720,1692,1,0,0,0,1720,1693,1,0,0,0,1720,
        1694,1,0,0,0,1720,1695,1,0,0,0,1720,1696,1,0,0,0,1720,1697,1,0,0,
        0,1720,1698,1,0,0,0,1720,1699,1,0,0,0,1720,1700,1,0,0,0,1720,1701,
        1,0,0,0,1720,1702,1,0,0,0,1720,1703,1,0,0,0,1720,1704,1,0,0,0,1720,
        1705,1,0,0,0,1720,1706,1,0,0,0,1720,1707,1,0,0,0,1720,1708,1,0,0,
        0,1720,1709,1,0,0,0,1720,1710,1,0,0,0,1720,1711,1,0,0,0,1720,1712,
        1,0,0,0,1720,1713,1,0,0,0,1720,1714,1,0,0,0,1720,1715,1,0,0,0,1720,
        1716,1,0,0,0,1720,1717,1,0,0,0,1720,1718,1,0,0,0,1720,1719,1,0,0,
        0,1721,1759,1,0,0,0,1722,1723,5,273,0,0,1723,1724,5,516,0,0,1724,
        1759,5,513,0,0,1725,1726,5,274,0,0,1726,1727,5,516,0,0,1727,1759,
        3,424,212,0,1728,1729,5,275,0,0,1729,1730,5,516,0,0,1730,1759,5,
        532,0,0,1731,1732,5,276,0,0,1732,1733,5,516,0,0,1733,1759,5,532,
        0,0,1734,1735,5,277,0,0,1735,1736,5,516,0,0,1736,1759,5,513,0,0,
        1737,1738,5,278,0,0,1738,1739,5,516,0,0,1739,1759,5,513,0,0,1740,
        1741,5,279,0,0,1741,1742,5,516,0,0,1742,1759,5,513,0,0,1743,1744,
        5,280,0,0,1744,1745,5,516,0,0,1745,1759,5,532,0,0,1746,1747,5,281,
        0,0,1747,1748,5,516,0,0,1748,1759,3,230,115,0,1749,1750,5,282,0,
        0,1750,1751,5,516,0,0,1751,1759,3,430,215,0,1752,1753,5,283,0,0,
        1753,1754,5,516,0,0,1754,1759,3,430,215,0,1755,1756,5,284,0,0,1756,
        1757,5,516,0,0,1757,1759,5,513,0,0,1758,1586,1,0,0,0,1758,1722,1,
        0,0,0,1758,1725,1,0,0,0,1758,1728,1,0,0,0,1758,1731,1,0,0,0,1758,
        1734,1,0,0,0,1758,1737,1,0,0,0,1758,1740,1,0,0,0,1758,1743,1,0,0,
        0,1758,1746,1,0,0,0,1758,1749,1,0,0,0,1758,1752,1,0,0,0,1758,1755,
        1,0,0,0,1759,217,1,0,0,0,1760,1763,3,220,110,0,1761,1763,3,222,111,
        0,1762,1760,1,0,0,0,1762,1761,1,0,0,0,1763,219,1,0,0,0,1764,1765,
        5,285,0,0,1765,1769,5,534,0,0,1766,1768,3,224,112,0,1767,1766,1,
        0,0,0,1768,1771,1,0,0,0,1769,1767,1,0,0,0,1769,1770,1,0,0,0,1770,
        1772,1,0,0,0,1771,1769,1,0,0,0,1772,1773,3,260,130,0,1773,221,1,
        0,0,0,1774,1775,5,286,0,0,1775,1779,5,534,0,0,1776,1778,3,224,112,
        0,1777,1776,1,0,0,0,1778,1781,1,0,0,0,1779,1777,1,0,0,0,1779,1780,
        1,0,0,0,1780,1782,1,0,0,0,1781,1779,1,0,0,0,1782,1783,3,260,130,
        0,1783,223,1,0,0,0,1784,1785,5,287,0,0,1785,1786,5,516,0,0,1786,
        1878,3,262,131,0,1787,1788,5,288,0,0,1788,1789,5,516,0,0,1789,1878,
        5,513,0,0,1790,1791,5,289,0,0,1791,1792,5,516,0,0,1792,1878,5,513,
        0,0,1793,1794,5,290,0,0,1794,1795,5,516,0,0,1795,1878,5,534,0,0,
        1796,1797,5,291,0,0,1797,1799,5,516,0,0,1798,1800,7,5,0,0,1799,1798,
        1,0,0,0,1800,1801,1,0,0,0,1801,1799,1,0,0,0,1801,1802,1,0,0,0,1802,
        1878,1,0,0,0,1803,1804,5,290,0,0,1804,1806,5,516,0,0,1805,1807,7,
        6,0,0,1806,1805,1,0,0,0,1807,1808,1,0,0,0,1808,1806,1,0,0,0,1808,
        1809,1,0,0,0,1809,1878,1,0,0,0,1810,1811,5,307,0,0,1811,1813,5,516,
        0,0,1812,1814,5,534,0,0,1813,1812,1,0,0,0,1814,1815,1,0,0,0,1815,
        1813,1,0,0,0,1815,1816,1,0,0,0,1816,1878,1,0,0,0,1817,1818,5,308,
        0,0,1818,1820,5,516,0,0,1819,1821,5,534,0,0,1820,1819,1,0,0,0,1821,
        1822,1,0,0,0,1822,1820,1,0,0,0,1822,1823,1,0,0,0,1823,1878,1,0,0,
        0,1824,1825,5,309,0,0,1825,1827,5,516,0,0,1826,1828,5,534,0,0,1827,
        1826,1,0,0,0,1828,1829,1,0,0,0,1829,1827,1,0,0,0,1829,1830,1,0,0,
        0,1830,1878,1,0,0,0,1831,1832,5,310,0,0,1832,1834,5,516,0,0,1833,
        1835,5,534,0,0,1834,1833,1,0,0,0,1835,1836,1,0,0,0,1836,1834,1,0,
        0,0,1836,1837,1,0,0,0,1837,1878,1,0,0,0,1838,1839,5,311,0,0,1839,
        1840,5,516,0,0,1840,1878,5,534,0,0,1841,1842,5,312,0,0,1842,1843,
        5,516,0,0,1843,1844,5,513,0,0,1844,1878,5,513,0,0,1845,1846,5,313,
        0,0,1846,1847,5,516,0,0,1847,1878,5,534,0,0,1848,1849,5,314,0,0,
        1849,1850,5,516,0,0,1850,1878,5,513,0,0,1851,1852,5,315,0,0,1852,
        1853,5,516,0,0,1853,1878,5,513,0,0,1854,1855,5,316,0,0,1855,1856,
        5,516,0,0,1856,1878,5,513,0,0,1857,1858,5,317,0,0,1858,1859,5,516,
        0,0,1859,1878,5,513,0,0,1860,1861,5,318,0,0,1861,1863,5,516,0,0,
        1862,1864,7,7,0,0,1863,1862,1,0,0,0,1864,1865,1,0,0,0,1865,1863,
        1,0,0,0,1865,1866,1,0,0,0,1866,1878,1,0,0,0,1867,1868,5,328,0,0,
        1868,1869,5,516,0,0,1869,1870,5,513,0,0,1870,1878,5,513,0,0,1871,
        1872,5,329,0,0,1872,1873,5,516,0,0,1873,1878,5,513,0,0,1874,1875,
        5,330,0,0,1875,1876,5,516,0,0,1876,1878,5,513,0,0,1877,1784,1,0,
        0,0,1877,1787,1,0,0,0,1877,1790,1,0,0,0,1877,1793,1,0,0,0,1877,1796,
        1,0,0,0,1877,1803,1,0,0,0,1877,1810,1,0,0,0,1877,1817,1,0,0,0,1877,
        1824,1,0,0,0,1877,1831,1,0,0,0,1877,1838,1,0,0,0,1877,1841,1,0,0,
        0,1877,1845,1,0,0,0,1877,1848,1,0,0,0,1877,1851,1,0,0,0,1877,1854,
        1,0,0,0,1877,1857,1,0,0,0,1877,1860,1,0,0,0,1877,1867,1,0,0,0,1877,
        1871,1,0,0,0,1877,1874,1,0,0,0,1878,225,1,0,0,0,1879,1880,5,331,
        0,0,1880,1884,5,534,0,0,1881,1883,3,228,114,0,1882,1881,1,0,0,0,
        1883,1886,1,0,0,0,1884,1882,1,0,0,0,1884,1885,1,0,0,0,1885,1887,
        1,0,0,0,1886,1884,1,0,0,0,1887,1888,3,260,130,0,1888,227,1,0,0,0,
        1889,1890,5,202,0,0,1890,1891,5,516,0,0,1891,1914,5,534,0,0,1892,
        1893,5,318,0,0,1893,1894,5,516,0,0,1894,1914,7,8,0,0,1895,1896,5,
        334,0,0,1896,1897,5,516,0,0,1897,1914,3,430,215,0,1898,1899,5,335,
        0,0,1899,1900,5,516,0,0,1900,1914,5,514,0,0,1901,1902,5,336,0,0,
        1902,1903,5,516,0,0,1903,1914,5,513,0,0,1904,1905,5,337,0,0,1905,
        1906,5,516,0,0,1906,1914,3,412,206,0,1907,1908,5,338,0,0,1908,1909,
        5,516,0,0,1909,1914,3,430,215,0,1910,1911,5,281,0,0,1911,1912,5,
        516,0,0,1912,1914,3,230,115,0,1913,1889,1,0,0,0,1913,1892,1,0,0,
        0,1913,1895,1,0,0,0,1913,1898,1,0,0,0,1913,1901,1,0,0,0,1913,1904,
        1,0,0,0,1913,1907,1,0,0,0,1913,1910,1,0,0,0,1914,229,1,0,0,0,1915,
        1916,7,9,0,0,1916,231,1,0,0,0,1917,1918,5,342,0,0,1918,1922,5,534,
        0,0,1919,1921,3,234,117,0,1920,1919,1,0,0,0,1921,1924,1,0,0,0,1922,
        1920,1,0,0,0,1922,1923,1,0,0,0,1923,1925,1,0,0,0,1924,1922,1,0,0,
        0,1925,1926,3,260,130,0,1926,233,1,0,0,0,1927,2038,3,236,118,0,1928,
        2038,3,238,119,0,1929,2038,3,240,120,0,1930,2038,3,242,121,0,1931,
        2038,3,244,122,0,1932,1933,5,343,0,0,1933,1934,5,516,0,0,1934,2038,
        7,3,0,0,1935,1936,5,344,0,0,1936,1937,5,516,0,0,1937,2038,7,3,0,
        0,1938,1939,5,345,0,0,1939,1940,5,516,0,0,1940,2038,7,3,0,0,1941,
        1942,5,346,0,0,1942,1943,5,516,0,0,1943,2038,7,3,0,0,1944,1945,5,
        347,0,0,1945,1946,5,516,0,0,1946,2038,7,3,0,0,1947,1948,5,348,0,
        0,1948,1949,5,516,0,0,1949,2038,7,3,0,0,1950,1951,5,349,0,0,1951,
        1952,5,516,0,0,1952,2038,5,513,0,0,1953,1954,5,350,0,0,1954,1955,
        5,516,0,0,1955,2038,5,532,0,0,1956,1957,5,351,0,0,1957,1958,5,516,
        0,0,1958,2038,5,532,0,0,1959,1960,5,352,0,0,1960,1961,5,516,0,0,
        1961,2038,7,3,0,0,1962,1963,5,353,0,0,1963,1964,5,516,0,0,1964,2038,
        7,3,0,0,1965,1966,5,354,0,0,1966,1967,5,516,0,0,1967,2038,3,414,
        207,0,1968,1969,5,355,0,0,1969,1970,5,516,0,0,1970,1971,5,518,0,
        0,1971,2038,3,414,207,0,1972,1973,5,356,0,0,1973,1974,5,516,0,0,
        1974,2038,3,420,210,0,1975,1976,5,357,0,0,1976,1977,5,516,0,0,1977,
        2038,5,532,0,0,1978,1979,5,358,0,0,1979,1980,5,516,0,0,1980,2038,
        7,3,0,0,1981,1982,5,359,0,0,1982,1983,5,516,0,0,1983,2038,5,513,
        0,0,1984,1985,5,360,0,0,1985,1986,5,516,0,0,1986,2038,7,3,0,0,1987,
        1988,5,361,0,0,1988,1989,5,516,0,0,1989,2038,5,532,0,0,1990,1991,
        5,362,0,0,1991,1992,5,516,0,0,1992,2038,3,416,208,0,1993,1994,5,
        363,0,0,1994,1995,5,516,0,0,1995,1996,5,518,0,0,1996,2038,3,416,
        208,0,1997,1998,5,364,0,0,1998,1999,5,516,0,0,1999,2038,3,416,208,
        0,2000,2001,5,365,0,0,2001,2002,5,516,0,0,2002,2038,3,430,215,0,
        2003,2004,5,366,0,0,2004,2005,5,516,0,0,2005,2038,7,3,0,0,2006,2007,
        5,367,0,0,2007,2008,5,516,0,0,2008,2038,5,513,0,0,2009,2010,5,368,
        0,0,2010,2011,5,516,0,0,2011,2038,5,513,0,0,2012,2013,5,369,0,0,
        2013,2014,5,516,0,0,2014,2038,7,3,0,0,2015,2016,5,370,0,0,2016,2018,
        5,516,0,0,2017,2019,5,534,0,0,2018,2017,1,0,0,0,2019,2020,1,0,0,
        0,2020,2018,1,0,0,0,2020,2021,1,0,0,0,2021,2038,1,0,0,0,2022,2023,
        5,371,0,0,2023,2024,5,516,0,0,2024,2038,5,513,0,0,2025,2026,5,372,
        0,0,2026,2027,5,516,0,0,2027,2038,5,532,0,0,2028,2029,5,373,0,0,
        2029,2030,5,516,0,0,2030,2038,5,532,0,0,2031,2032,5,374,0,0,2032,
        2033,5,516,0,0,2033,2038,5,532,0,0,2034,2035,5,375,0,0,2035,2036,
        5,516,0,0,2036,2038,5,534,0,0,2037,1927,1,0,0,0,2037,1928,1,0,0,
        0,2037,1929,1,0,0,0,2037,1930,1,0,0,0,2037,1931,1,0,0,0,2037,1932,
        1,0,0,0,2037,1935,1,0,0,0,2037,1938,1,0,0,0,2037,1941,1,0,0,0,2037,
        1944,1,0,0,0,2037,1947,1,0,0,0,2037,1950,1,0,0,0,2037,1953,1,0,0,
        0,2037,1956,1,0,0,0,2037,1959,1,0,0,0,2037,1962,1,0,0,0,2037,1965,
        1,0,0,0,2037,1968,1,0,0,0,2037,1972,1,0,0,0,2037,1975,1,0,0,0,2037,
        1978,1,0,0,0,2037,1981,1,0,0,0,2037,1984,1,0,0,0,2037,1987,1,0,0,
        0,2037,1990,1,0,0,0,2037,1993,1,0,0,0,2037,1997,1,0,0,0,2037,2000,
        1,0,0,0,2037,2003,1,0,0,0,2037,2006,1,0,0,0,2037,2009,1,0,0,0,2037,
        2012,1,0,0,0,2037,2015,1,0,0,0,2037,2022,1,0,0,0,2037,2025,1,0,0,
        0,2037,2028,1,0,0,0,2037,2031,1,0,0,0,2037,2034,1,0,0,0,2038,235,
        1,0,0,0,2039,2040,5,376,0,0,2040,2041,5,516,0,0,2041,2042,3,250,
        125,0,2042,237,1,0,0,0,2043,2044,5,377,0,0,2044,2045,5,516,0,0,2045,
        2046,3,252,126,0,2046,239,1,0,0,0,2047,2048,5,378,0,0,2048,2050,
        5,516,0,0,2049,2051,3,254,127,0,2050,2049,1,0,0,0,2051,2052,1,0,
        0,0,2052,2050,1,0,0,0,2052,2053,1,0,0,0,2053,241,1,0,0,0,2054,2055,
        5,379,0,0,2055,2056,5,516,0,0,2056,2057,3,246,123,0,2057,2058,3,
        248,124,0,2058,2059,5,515,0,0,2059,243,1,0,0,0,2060,2061,5,380,0,
        0,2061,2062,5,516,0,0,2062,2063,3,250,125,0,2063,245,1,0,0,0,2064,
        2065,5,534,0,0,2065,247,1,0,0,0,2066,2067,5,534,0,0,2067,249,1,0,
        0,0,2068,2069,5,534,0,0,2069,251,1,0,0,0,2070,2071,5,534,0,0,2071,
        253,1,0,0,0,2072,2073,5,534,0,0,2073,255,1,0,0,0,2074,2078,5,381,
        0,0,2075,2077,3,258,129,0,2076,2075,1,0,0,0,2077,2080,1,0,0,0,2078,
        2076,1,0,0,0,2078,2079,1,0,0,0,2079,2081,1,0,0,0,2080,2078,1,0,0,
        0,2081,2082,3,260,130,0,2082,257,1,0,0,0,2083,2084,5,382,0,0,2084,
        2085,5,516,0,0,2085,2123,5,532,0,0,2086,2087,5,383,0,0,2087,2088,
        5,516,0,0,2088,2123,3,262,131,0,2089,2090,5,384,0,0,2090,2091,5,
        516,0,0,2091,2123,5,513,0,0,2092,2093,5,385,0,0,2093,2094,5,516,
        0,0,2094,2123,7,3,0,0,2095,2096,5,386,0,0,2096,2097,5,516,0,0,2097,
        2123,7,3,0,0,2098,2099,5,387,0,0,2099,2100,5,516,0,0,2100,2123,7,
        3,0,0,2101,2102,5,388,0,0,2102,2103,5,516,0,0,2103,2123,7,3,0,0,
        2104,2105,5,389,0,0,2105,2106,5,516,0,0,2106,2123,7,3,0,0,2107,2108,
        5,390,0,0,2108,2109,5,516,0,0,2109,2123,7,3,0,0,2110,2111,5,391,
        0,0,2111,2112,5,516,0,0,2112,2123,7,3,0,0,2113,2114,5,392,0,0,2114,
        2115,5,516,0,0,2115,2123,7,3,0,0,2116,2117,5,393,0,0,2117,2118,5,
        516,0,0,2118,2123,5,532,0,0,2119,2120,5,394,0,0,2120,2121,5,516,
        0,0,2121,2123,7,3,0,0,2122,2083,1,0,0,0,2122,2086,1,0,0,0,2122,2089,
        1,0,0,0,2122,2092,1,0,0,0,2122,2095,1,0,0,0,2122,2098,1,0,0,0,2122,
        2101,1,0,0,0,2122,2104,1,0,0,0,2122,2107,1,0,0,0,2122,2110,1,0,0,
        0,2122,2113,1,0,0,0,2122,2116,1,0,0,0,2122,2119,1,0,0,0,2123,259,
        1,0,0,0,2124,2126,5,536,0,0,2125,2124,1,0,0,0,2125,2126,1,0,0,0,
        2126,2127,1,0,0,0,2127,2128,7,10,0,0,2128,261,1,0,0,0,2129,2130,
        5,534,0,0,2130,2131,5,398,0,0,2131,2132,7,11,0,0,2132,263,1,0,0,
        0,2133,2134,5,402,0,0,2134,2135,5,516,0,0,2135,2136,3,266,133,0,
        2136,265,1,0,0,0,2137,2138,5,534,0,0,2138,267,1,0,0,0,2139,2140,
        5,403,0,0,2140,2142,5,516,0,0,2141,2143,3,270,135,0,2142,2141,1,
        0,0,0,2143,2144,1,0,0,0,2144,2142,1,0,0,0,2144,2145,1,0,0,0,2145,
        269,1,0,0,0,2146,2147,5,534,0,0,2147,271,1,0,0,0,2148,2149,5,337,
        0,0,2149,2150,5,516,0,0,2150,2151,3,412,206,0,2151,273,1,0,0,0,2152,
        2153,5,404,0,0,2153,2154,5,516,0,0,2154,2155,3,276,138,0,2155,275,
        1,0,0,0,2156,2157,5,534,0,0,2157,277,1,0,0,0,2158,2159,5,405,0,0,
        2159,2160,5,516,0,0,2160,2161,5,534,0,0,2161,279,1,0,0,0,2162,2163,
        5,406,0,0,2163,2164,5,516,0,0,2164,2165,5,534,0,0,2165,281,1,0,0,
        0,2166,2167,5,407,0,0,2167,2168,5,516,0,0,2168,2169,5,534,0,0,2169,
        283,1,0,0,0,2170,2171,5,408,0,0,2171,2172,5,516,0,0,2172,2173,3,
        406,203,0,2173,285,1,0,0,0,2174,2175,5,409,0,0,2175,2176,5,516,0,
        0,2176,2177,3,408,204,0,2177,287,1,0,0,0,2178,2179,5,410,0,0,2179,
        2180,5,516,0,0,2180,2181,3,410,205,0,2181,289,1,0,0,0,2182,2183,
        5,334,0,0,2183,2184,5,516,0,0,2184,2185,3,430,215,0,2185,291,1,0,
        0,0,2186,2187,5,411,0,0,2187,2188,5,516,0,0,2188,2189,5,513,0,0,
        2189,293,1,0,0,0,2190,2191,5,412,0,0,2191,2192,5,516,0,0,2192,2193,
        3,250,125,0,2193,2194,5,513,0,0,2194,295,1,0,0,0,2195,2196,5,413,
        0,0,2196,2197,5,516,0,0,2197,2198,3,250,125,0,2198,2199,5,514,0,
        0,2199,297,1,0,0,0,2200,2201,5,414,0,0,2201,2202,5,516,0,0,2202,
        2203,3,250,125,0,2203,2204,5,534,0,0,2204,299,1,0,0,0,2205,2206,
        5,415,0,0,2206,2207,5,516,0,0,2207,2208,3,250,125,0,2208,2209,5,
        534,0,0,2209,301,1,0,0,0,2210,2211,5,416,0,0,2211,2212,5,516,0,0,
        2212,2213,5,518,0,0,2213,2214,3,250,125,0,2214,2215,5,534,0,0,2215,
        303,1,0,0,0,2216,2217,5,417,0,0,2217,2218,5,516,0,0,2218,2219,5,
        518,0,0,2219,2220,3,250,125,0,2220,2221,5,534,0,0,2221,305,1,0,0,
        0,2222,2223,5,418,0,0,2223,2224,5,516,0,0,2224,2225,5,532,0,0,2225,
        307,1,0,0,0,2226,2227,5,419,0,0,2227,2228,5,516,0,0,2228,2229,5,
        526,0,0,2229,2230,5,527,0,0,2230,2231,5,528,0,0,2231,2232,5,529,
        0,0,2232,309,1,0,0,0,2233,2234,5,420,0,0,2234,2235,5,516,0,0,2235,
        2236,5,526,0,0,2236,2237,5,527,0,0,2237,2238,5,528,0,0,2238,2239,
        5,529,0,0,2239,311,1,0,0,0,2240,2241,5,421,0,0,2241,2242,5,516,0,
        0,2242,2243,5,513,0,0,2243,313,1,0,0,0,2244,2245,5,422,0,0,2245,
        2246,5,516,0,0,2246,2247,5,513,0,0,2247,315,1,0,0,0,2248,2249,5,
        423,0,0,2249,2251,5,516,0,0,2250,2252,5,534,0,0,2251,2250,1,0,0,
        0,2252,2253,1,0,0,0,2253,2251,1,0,0,0,2253,2254,1,0,0,0,2254,317,
        1,0,0,0,2255,2256,5,424,0,0,2256,2257,5,516,0,0,2257,2258,5,513,
        0,0,2258,319,1,0,0,0,2259,2260,5,425,0,0,2260,2261,5,516,0,0,2261,
        2262,5,532,0,0,2262,321,1,0,0,0,2263,2264,5,426,0,0,2264,2265,5,
        516,0,0,2265,2266,5,515,0,0,2266,323,1,0,0,0,2267,2268,5,427,0,0,
        2268,2269,5,516,0,0,2269,2270,5,513,0,0,2270,325,1,0,0,0,2271,2272,
        5,428,0,0,2272,2273,5,516,0,0,2273,2274,3,414,207,0,2274,327,1,0,
        0,0,2275,2276,5,429,0,0,2276,2279,5,516,0,0,2277,2280,5,513,0,0,
        2278,2280,3,438,219,0,2279,2277,1,0,0,0,2279,2278,1,0,0,0,2280,329,
        1,0,0,0,2281,2282,5,430,0,0,2282,2283,5,516,0,0,2283,2284,3,440,
        220,0,2284,331,1,0,0,0,2285,2286,5,431,0,0,2286,2289,5,516,0,0,2287,
        2290,7,3,0,0,2288,2290,3,438,219,0,2289,2287,1,0,0,0,2289,2288,1,
        0,0,0,2290,333,1,0,0,0,2291,2292,5,432,0,0,2292,2295,5,516,0,0,2293,
        2296,7,3,0,0,2294,2296,3,438,219,0,2295,2293,1,0,0,0,2295,2294,1,
        0,0,0,2296,335,1,0,0,0,2297,2298,5,433,0,0,2298,2299,5,516,0,0,2299,
        2300,3,438,219,0,2300,337,1,0,0,0,2301,2302,5,434,0,0,2302,2303,
        5,516,0,0,2303,2304,5,513,0,0,2304,339,1,0,0,0,2305,2306,5,435,0,
        0,2306,2307,5,516,0,0,2307,2308,5,513,0,0,2308,341,1,0,0,0,2309,
        2310,5,436,0,0,2310,2311,5,516,0,0,2311,2312,5,513,0,0,2312,343,
        1,0,0,0,2313,2314,5,437,0,0,2314,2315,5,516,0,0,2315,2316,5,532,
        0,0,2316,345,1,0,0,0,2317,2318,5,438,0,0,2318,2319,5,516,0,0,2319,
        2320,5,532,0,0,2320,347,1,0,0,0,2321,2322,5,439,0,0,2322,2323,5,
        516,0,0,2323,2324,5,532,0,0,2324,349,1,0,0,0,2325,2326,5,440,0,0,
        2326,2327,5,516,0,0,2327,2328,5,532,0,0,2328,351,1,0,0,0,2329,2330,
        5,441,0,0,2330,2331,5,516,0,0,2331,2332,5,532,0,0,2332,353,1,0,0,
        0,2333,2334,5,428,0,0,2334,2335,5,516,0,0,2335,2336,3,430,215,0,
        2336,355,1,0,0,0,2337,2338,5,442,0,0,2338,2339,5,516,0,0,2339,2340,
        3,440,220,0,2340,357,1,0,0,0,2341,2342,5,443,0,0,2342,2343,5,516,
        0,0,2343,2344,3,440,220,0,2344,359,1,0,0,0,2345,2346,5,444,0,0,2346,
        2347,5,516,0,0,2347,2348,3,420,210,0,2348,361,1,0,0,0,2349,2350,
        5,445,0,0,2350,2351,5,516,0,0,2351,2352,5,534,0,0,2352,363,1,0,0,
        0,2353,2354,5,125,0,0,2354,2355,5,516,0,0,2355,2356,7,3,0,0,2356,
        365,1,0,0,0,2357,2358,5,446,0,0,2358,2359,5,516,0,0,2359,2360,7,
        3,0,0,2360,367,1,0,0,0,2361,2362,5,447,0,0,2362,2363,5,516,0,0,2363,
        2364,7,3,0,0,2364,369,1,0,0,0,2365,2366,5,448,0,0,2366,2367,5,516,
        0,0,2367,2368,7,3,0,0,2368,371,1,0,0,0,2369,2370,5,122,0,0,2370,
        2371,5,516,0,0,2371,2372,5,526,0,0,2372,2373,5,527,0,0,2373,2374,
        5,528,0,0,2374,373,1,0,0,0,2375,2376,5,449,0,0,2376,2377,5,516,0,
        0,2377,2378,7,3,0,0,2378,375,1,0,0,0,2379,2380,5,122,0,0,2380,2381,
        5,516,0,0,2381,2382,5,526,0,0,2382,2383,5,527,0,0,2383,2384,5,528,
        0,0,2384,377,1,0,0,0,2385,2386,5,431,0,0,2386,2387,5,516,0,0,2387,
        2388,7,3,0,0,2388,379,1,0,0,0,2389,2390,5,450,0,0,2390,2391,5,516,
        0,0,2391,2392,5,515,0,0,2392,381,1,0,0,0,2393,2394,5,451,0,0,2394,
        2395,5,516,0,0,2395,2396,5,513,0,0,2396,383,1,0,0,0,2397,2398,5,
        452,0,0,2398,2399,5,516,0,0,2399,2400,5,513,0,0,2400,385,1,0,0,0,
        2401,2402,5,318,0,0,2402,2403,5,516,0,0,2403,2404,5,534,0,0,2404,
        387,1,0,0,0,2405,2406,5,318,0,0,2406,2407,5,516,0,0,2407,2408,5,
        534,0,0,2408,389,1,0,0,0,2409,2410,5,431,0,0,2410,2411,5,516,0,0,
        2411,2412,7,3,0,0,2412,391,1,0,0,0,2413,2414,5,453,0,0,2414,2415,
        5,516,0,0,2415,2416,3,416,208,0,2416,393,1,0,0,0,2417,2418,5,445,
        0,0,2418,2419,5,516,0,0,2419,2420,5,534,0,0,2420,395,1,0,0,0,2421,
        2422,5,454,0,0,2422,2423,5,516,0,0,2423,2424,5,532,0,0,2424,397,
        1,0,0,0,2425,2426,5,428,0,0,2426,2427,5,516,0,0,2427,2428,3,420,
        210,0,2428,399,1,0,0,0,2429,2430,5,455,0,0,2430,2431,5,516,0,0,2431,
        2589,5,513,0,0,2432,2433,5,456,0,0,2433,2434,5,516,0,0,2434,2435,
        5,526,0,0,2435,2436,5,527,0,0,2436,2589,5,528,0,0,2437,2438,5,457,
        0,0,2438,2439,5,516,0,0,2439,2440,5,526,0,0,2440,2441,5,527,0,0,
        2441,2589,5,528,0,0,2442,2443,5,458,0,0,2443,2444,5,516,0,0,2444,
        2445,5,519,0,0,2445,2589,5,520,0,0,2446,2447,5,459,0,0,2447,2448,
        5,516,0,0,2448,2589,5,534,0,0,2449,2450,5,460,0,0,2450,2451,5,516,
        0,0,2451,2589,5,513,0,0,2452,2453,5,461,0,0,2453,2454,5,516,0,0,
        2454,2589,5,532,0,0,2455,2456,5,462,0,0,2456,2457,5,516,0,0,2457,
        2589,5,513,0,0,2458,2459,5,463,0,0,2459,2460,5,516,0,0,2460,2461,
        5,526,0,0,2461,2462,5,527,0,0,2462,2463,5,528,0,0,2463,2589,5,529,
        0,0,2464,2465,5,464,0,0,2465,2466,5,516,0,0,2466,2467,5,519,0,0,
        2467,2589,5,520,0,0,2468,2469,5,465,0,0,2469,2471,5,516,0,0,2470,
        2472,5,534,0,0,2471,2470,1,0,0,0,2472,2473,1,0,0,0,2473,2471,1,0,
        0,0,2473,2474,1,0,0,0,2474,2589,1,0,0,0,2475,2476,5,466,0,0,2476,
        2477,5,516,0,0,2477,2589,5,513,0,0,2478,2479,5,467,0,0,2479,2480,
        5,516,0,0,2480,2589,5,532,0,0,2481,2482,5,468,0,0,2482,2484,5,516,
        0,0,2483,2485,5,534,0,0,2484,2483,1,0,0,0,2485,2486,1,0,0,0,2486,
        2484,1,0,0,0,2486,2487,1,0,0,0,2487,2589,1,0,0,0,2488,2489,5,469,
        0,0,2489,2490,5,516,0,0,2490,2589,5,513,0,0,2491,2492,5,470,0,0,
        2492,2493,5,516,0,0,2493,2589,5,532,0,0,2494,2495,5,471,0,0,2495,
        2496,5,516,0,0,2496,2589,5,532,0,0,2497,2498,5,472,0,0,2498,2499,
        5,516,0,0,2499,2500,5,519,0,0,2500,2589,5,520,0,0,2501,2502,5,473,
        0,0,2502,2503,5,516,0,0,2503,2589,5,513,0,0,2504,2505,5,474,0,0,
        2505,2506,5,516,0,0,2506,2507,5,526,0,0,2507,2508,5,527,0,0,2508,
        2589,5,528,0,0,2509,2510,5,475,0,0,2510,2511,5,516,0,0,2511,2589,
        5,534,0,0,2512,2513,5,476,0,0,2513,2514,5,516,0,0,2514,2589,5,513,
        0,0,2515,2516,5,477,0,0,2516,2517,5,516,0,0,2517,2589,5,532,0,0,
        2518,2519,5,478,0,0,2519,2520,5,516,0,0,2520,2589,5,534,0,0,2521,
        2522,5,479,0,0,2522,2523,5,516,0,0,2523,2589,5,513,0,0,2524,2525,
        5,480,0,0,2525,2526,5,516,0,0,2526,2589,5,532,0,0,2527,2528,5,481,
        0,0,2528,2529,5,516,0,0,2529,2530,5,519,0,0,2530,2589,5,520,0,0,
        2531,2532,5,482,0,0,2532,2533,5,516,0,0,2533,2589,5,513,0,0,2534,
        2535,5,483,0,0,2535,2536,5,516,0,0,2536,2537,5,526,0,0,2537,2538,
        5,527,0,0,2538,2589,5,528,0,0,2539,2540,5,484,0,0,2540,2541,5,516,
        0,0,2541,2589,5,534,0,0,2542,2543,5,485,0,0,2543,2544,5,516,0,0,
        2544,2589,5,513,0,0,2545,2546,5,486,0,0,2546,2547,5,516,0,0,2547,
        2589,5,532,0,0,2548,2549,5,487,0,0,2549,2550,5,516,0,0,2550,2551,
        5,526,0,0,2551,2552,5,527,0,0,2552,2589,5,528,0,0,2553,2554,5,488,
        0,0,2554,2555,5,516,0,0,2555,2589,5,534,0,0,2556,2557,5,489,0,0,
        2557,2558,5,516,0,0,2558,2589,5,513,0,0,2559,2560,5,490,0,0,2560,
        2561,5,516,0,0,2561,2589,5,532,0,0,2562,2563,5,491,0,0,2563,2564,
        5,516,0,0,2564,2565,5,526,0,0,2565,2566,5,527,0,0,2566,2589,5,528,
        0,0,2567,2568,5,492,0,0,2568,2569,5,516,0,0,2569,2589,5,513,0,0,
        2570,2571,5,493,0,0,2571,2572,5,516,0,0,2572,2589,5,513,0,0,2573,
        2574,5,494,0,0,2574,2575,5,516,0,0,2575,2589,5,513,0,0,2576,2577,
        5,495,0,0,2577,2578,5,516,0,0,2578,2589,5,532,0,0,2579,2580,5,496,
        0,0,2580,2581,5,516,0,0,2581,2589,5,532,0,0,2582,2583,5,497,0,0,
        2583,2584,5,516,0,0,2584,2585,5,526,0,0,2585,2586,5,527,0,0,2586,
        2587,5,528,0,0,2587,2589,5,529,0,0,2588,2429,1,0,0,0,2588,2432,1,
        0,0,0,2588,2437,1,0,0,0,2588,2442,1,0,0,0,2588,2446,1,0,0,0,2588,
        2449,1,0,0,0,2588,2452,1,0,0,0,2588,2455,1,0,0,0,2588,2458,1,0,0,
        0,2588,2464,1,0,0,0,2588,2468,1,0,0,0,2588,2475,1,0,0,0,2588,2478,
        1,0,0,0,2588,2481,1,0,0,0,2588,2488,1,0,0,0,2588,2491,1,0,0,0,2588,
        2494,1,0,0,0,2588,2497,1,0,0,0,2588,2501,1,0,0,0,2588,2504,1,0,0,
        0,2588,2509,1,0,0,0,2588,2512,1,0,0,0,2588,2515,1,0,0,0,2588,2518,
        1,0,0,0,2588,2521,1,0,0,0,2588,2524,1,0,0,0,2588,2527,1,0,0,0,2588,
        2531,1,0,0,0,2588,2534,1,0,0,0,2588,2539,1,0,0,0,2588,2542,1,0,0,
        0,2588,2545,1,0,0,0,2588,2548,1,0,0,0,2588,2553,1,0,0,0,2588,2556,
        1,0,0,0,2588,2559,1,0,0,0,2588,2562,1,0,0,0,2588,2567,1,0,0,0,2588,
        2570,1,0,0,0,2588,2573,1,0,0,0,2588,2576,1,0,0,0,2588,2579,1,0,0,
        0,2588,2582,1,0,0,0,2589,401,1,0,0,0,2590,2591,7,12,0,0,2591,403,
        1,0,0,0,2592,2593,7,13,0,0,2593,405,1,0,0,0,2594,2595,7,13,0,0,2595,
        407,1,0,0,0,2596,2597,7,13,0,0,2597,409,1,0,0,0,2598,2599,7,13,0,
        0,2599,411,1,0,0,0,2600,2601,7,13,0,0,2601,413,1,0,0,0,2602,2603,
        7,13,0,0,2603,415,1,0,0,0,2604,2605,7,13,0,0,2605,417,1,0,0,0,2606,
        2607,5,510,0,0,2607,2608,5,516,0,0,2608,2609,3,420,210,0,2609,419,
        1,0,0,0,2610,2611,5,534,0,0,2611,421,1,0,0,0,2612,2613,5,198,0,0,
        2613,2614,5,536,0,0,2614,2615,5,516,0,0,2615,2617,5,536,0,0,2616,
        2618,3,424,212,0,2617,2616,1,0,0,0,2618,2619,1,0,0,0,2619,2617,1,
        0,0,0,2619,2620,1,0,0,0,2620,423,1,0,0,0,2621,2622,7,13,0,0,2622,
        425,1,0,0,0,2623,2624,5,204,0,0,2624,2625,5,516,0,0,2625,2626,3,
        428,214,0,2626,427,1,0,0,0,2627,2628,7,13,0,0,2628,429,1,0,0,0,2629,
        2630,7,13,0,0,2630,431,1,0,0,0,2631,2632,5,331,0,0,2632,2633,5,516,
        0,0,2633,2634,3,434,217,0,2634,433,1,0,0,0,2635,2636,7,13,0,0,2636,
        435,1,0,0,0,2637,2638,5,511,0,0,2638,2640,5,516,0,0,2639,2641,5,
        517,0,0,2640,2639,1,0,0,0,2641,2642,1,0,0,0,2642,2640,1,0,0,0,2642,
        2643,1,0,0,0,2643,437,1,0,0,0,2644,2645,5,513,0,0,2645,2646,5,513,
        0,0,2646,2647,5,530,0,0,2647,439,1,0,0,0,2648,2649,5,519,0,0,2649,
        2650,5,520,0,0,2650,2651,5,521,0,0,2651,441,1,0,0,0,110,444,446,
        469,474,480,482,532,538,541,800,806,809,811,821,850,856,858,868,
        874,876,886,890,892,902,941,947,949,958,962,966,972,976,982,986,
        992,996,1008,1012,1021,1041,1048,1063,1085,1092,1106,1117,1123,1138,
        1145,1158,1175,1177,1186,1195,1197,1211,1213,1224,1226,1235,1243,
        1245,1254,1256,1264,1266,1275,1304,1311,1488,1495,1522,1538,1543,
        1550,1560,1574,1581,1720,1758,1762,1769,1779,1801,1808,1815,1822,
        1829,1836,1865,1877,1884,1913,1922,2020,2037,2052,2078,2122,2125,
        2144,2253,2279,2289,2295,2473,2486,2588,2619,2642
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
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.NEWLINE);
    	} else {
    		return this.getToken(MapIniParser.NEWLINE, i);
    	}
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
    public rankClass(): RankClassContext | null {
        return this.getRuleContext(0, RankClassContext);
    }
    public scienceClass(): ScienceClassContext | null {
        return this.getRuleContext(0, ScienceClassContext);
    }
    public soundEffectClasses(): SoundEffectClassesContext | null {
        return this.getRuleContext(0, SoundEffectClassesContext);
    }
    public specialPowerClass(): SpecialPowerClassContext | null {
        return this.getRuleContext(0, SpecialPowerClassContext);
    }
    public upgradeClass(): UpgradeClassContext | null {
        return this.getRuleContext(0, UpgradeClassContext);
    }
    public weaponClass(): WeaponClassContext | null {
        return this.getRuleContext(0, WeaponClassContext);
    }
    public weatherClass(): WeatherClassContext | null {
        return this.getRuleContext(0, WeatherClassContext);
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
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.NEWLINE);
    	} else {
    		return this.getToken(MapIniParser.NEWLINE, i);
    	}
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public aiDataClass_properties(): AiDataClass_propertiesContext[];
    public aiDataClass_properties(i: number): AiDataClass_propertiesContext | null;
    public aiDataClass_properties(i?: number): AiDataClass_propertiesContext[] | AiDataClass_propertiesContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AiDataClass_propertiesContext);
        }

        return this.getRuleContext(i, AiDataClass_propertiesContext);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
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


export class AiDataClass_propertiesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public aiDataClass_structureProperty(): AiDataClass_structurePropertyContext | null {
        return this.getRuleContext(0, AiDataClass_structurePropertyContext);
    }
    public aiDataClass_teamProperty(): AiDataClass_teamPropertyContext | null {
        return this.getRuleContext(0, AiDataClass_teamPropertyContext);
    }
    public aiDataClass_wealthProperty(): AiDataClass_wealthPropertyContext | null {
        return this.getRuleContext(0, AiDataClass_wealthPropertyContext);
    }
    public aiDataClass_poorProperty(): AiDataClass_poorPropertyContext | null {
        return this.getRuleContext(0, AiDataClass_poorPropertyContext);
    }
    public aiDataClass_structureWealthyProperty(): AiDataClass_structureWealthyPropertyContext | null {
        return this.getRuleContext(0, AiDataClass_structureWealthyPropertyContext);
    }
    public aiDataClass_structurePoorProperty(): AiDataClass_structurePoorPropertyContext | null {
        return this.getRuleContext(0, AiDataClass_structurePoorPropertyContext);
    }
    public aiDataClass_teamWealthProperty(): AiDataClass_teamWealthPropertyContext | null {
        return this.getRuleContext(0, AiDataClass_teamWealthPropertyContext);
    }
    public aiDataClass_teamPoorProperty(): AiDataClass_teamPoorPropertyContext | null {
        return this.getRuleContext(0, AiDataClass_teamPoorPropertyContext);
    }
    public aiDataClass_teamResourcesProperty(): AiDataClass_teamResourcesPropertyContext | null {
        return this.getRuleContext(0, AiDataClass_teamResourcesPropertyContext);
    }
    public aiDataClass_guardInnerAIProperty(): AiDataClass_guardInnerAIPropertyContext | null {
        return this.getRuleContext(0, AiDataClass_guardInnerAIPropertyContext);
    }
    public aiDataClass_guardOuterAIProperty(): AiDataClass_guardOuterAIPropertyContext | null {
        return this.getRuleContext(0, AiDataClass_guardOuterAIPropertyContext);
    }
    public aiDataClass_guardInnerHumanProperty(): AiDataClass_guardInnerHumanPropertyContext | null {
        return this.getRuleContext(0, AiDataClass_guardInnerHumanPropertyContext);
    }
    public aiDataClass_guardOuterHumanProperty(): AiDataClass_guardOuterHumanPropertyContext | null {
        return this.getRuleContext(0, AiDataClass_guardOuterHumanPropertyContext);
    }
    public aiDataClass_guardChaseUnitsProperty(): AiDataClass_guardChaseUnitsPropertyContext | null {
        return this.getRuleContext(0, AiDataClass_guardChaseUnitsPropertyContext);
    }
    public aiDataClass_guardEnemyScanProperty(): AiDataClass_guardEnemyScanPropertyContext | null {
        return this.getRuleContext(0, AiDataClass_guardEnemyScanPropertyContext);
    }
    public aiDataClass_guardEnemyReturnScanProperty(): AiDataClass_guardEnemyReturnScanPropertyContext | null {
        return this.getRuleContext(0, AiDataClass_guardEnemyReturnScanPropertyContext);
    }
    public aiDataClass_alertRangeModifierProperty(): AiDataClass_alertRangeModifierPropertyContext | null {
        return this.getRuleContext(0, AiDataClass_alertRangeModifierPropertyContext);
    }
    public aiDataClass_aggressiveRangeModifierProperty(): AiDataClass_aggressiveRangeModifierPropertyContext | null {
        return this.getRuleContext(0, AiDataClass_aggressiveRangeModifierPropertyContext);
    }
    public aiDataClass_attackProrityDistanceModifierProperty(): AiDataClass_attackProrityDistanceModifierPropertyContext | null {
        return this.getRuleContext(0, AiDataClass_attackProrityDistanceModifierPropertyContext);
    }
    public aiDataClass_maxRecruitRadiusProperty(): AiDataClass_maxRecruitRadiusPropertyContext | null {
        return this.getRuleContext(0, AiDataClass_maxRecruitRadiusPropertyContext);
    }
    public aiDataClass_skirmishBaseDefenseExtraDistanceProperty(): AiDataClass_skirmishBaseDefenseExtraDistancePropertyContext | null {
        return this.getRuleContext(0, AiDataClass_skirmishBaseDefenseExtraDistancePropertyContext);
    }
    public aiDataClass_forceIdleMSECProperty(): AiDataClass_forceIdleMSECPropertyContext | null {
        return this.getRuleContext(0, AiDataClass_forceIdleMSECPropertyContext);
    }
    public aiDataClass_forceSkirmishAIProperty(): AiDataClass_forceSkirmishAIPropertyContext | null {
        return this.getRuleContext(0, AiDataClass_forceSkirmishAIPropertyContext);
    }
    public aiDataClass_rotateSkirmishBaseProperty(): AiDataClass_rotateSkirmishBasePropertyContext | null {
        return this.getRuleContext(0, AiDataClass_rotateSkirmishBasePropertyContext);
    }
    public aiDataClass_attackUsesLineOfSightProperty(): AiDataClass_attackUsesLineOfSightPropertyContext | null {
        return this.getRuleContext(0, AiDataClass_attackUsesLineOfSightPropertyContext);
    }
    public aiDataClass_enableRepulsorProperty(): AiDataClass_enableRepulsorPropertyContext | null {
        return this.getRuleContext(0, AiDataClass_enableRepulsorPropertyContext);
    }
    public aiDataClass_repulsedDistanceProperty(): AiDataClass_repulsedDistancePropertyContext | null {
        return this.getRuleContext(0, AiDataClass_repulsedDistancePropertyContext);
    }
    public aiDataClass_wallHeighProperty(): AiDataClass_wallHeighPropertyContext | null {
        return this.getRuleContext(0, AiDataClass_wallHeighPropertyContext);
    }
    public aiDataClass_attackIgnoreInsignificantBuildingsProperty(): AiDataClass_attackIgnoreInsignificantBuildingsPropertyContext | null {
        return this.getRuleContext(0, AiDataClass_attackIgnoreInsignificantBuildingsPropertyContext);
    }
    public aiDataClass_skirmishGroupFudgeDistanceProperty(): AiDataClass_skirmishGroupFudgeDistancePropertyContext | null {
        return this.getRuleContext(0, AiDataClass_skirmishGroupFudgeDistancePropertyContext);
    }
    public aiDataClass_minInfantryGroupProperty(): AiDataClass_minInfantryGroupPropertyContext | null {
        return this.getRuleContext(0, AiDataClass_minInfantryGroupPropertyContext);
    }
    public aiDataClass_minVehicleGroupProperty(): AiDataClass_minVehicleGroupPropertyContext | null {
        return this.getRuleContext(0, AiDataClass_minVehicleGroupPropertyContext);
    }
    public aiDataClass_minDistanceGroupProperty(): AiDataClass_minDistanceGroupPropertyContext | null {
        return this.getRuleContext(0, AiDataClass_minDistanceGroupPropertyContext);
    }
    public aiDataClass_distanceRequiresGroupProperty(): AiDataClass_distanceRequiresGroupPropertyContext | null {
        return this.getRuleContext(0, AiDataClass_distanceRequiresGroupPropertyContext);
    }
    public aiDataClass_infantryPathfindDiameterProperty(): AiDataClass_infantryPathfindDiameterPropertyContext | null {
        return this.getRuleContext(0, AiDataClass_infantryPathfindDiameterPropertyContext);
    }
    public aiDataClass_vehiclePathfindDiameterProperty(): AiDataClass_vehiclePathfindDiameterPropertyContext | null {
        return this.getRuleContext(0, AiDataClass_vehiclePathfindDiameterPropertyContext);
    }
    public aiDataClass_supplycenterSaveDistanceProperty(): AiDataClass_supplycenterSaveDistancePropertyContext | null {
        return this.getRuleContext(0, AiDataClass_supplycenterSaveDistancePropertyContext);
    }
    public aiDataClass_rebuildDelayTimeSecProperty(): AiDataClass_rebuildDelayTimeSecPropertyContext | null {
        return this.getRuleContext(0, AiDataClass_rebuildDelayTimeSecPropertyContext);
    }
    public aiDataClass_aiDozerBoredRadiusProperty(): AiDataClass_aiDozerBoredRadiusPropertyContext | null {
        return this.getRuleContext(0, AiDataClass_aiDozerBoredRadiusPropertyContext);
    }
    public aiDataClass_aiCrushesInfantryProperty(): AiDataClass_aiCrushesInfantryPropertyContext | null {
        return this.getRuleContext(0, AiDataClass_aiCrushesInfantryPropertyContext);
    }
    public aiDataClass_maxRetaliationDistanceProperty(): AiDataClass_maxRetaliationDistancePropertyContext | null {
        return this.getRuleContext(0, AiDataClass_maxRetaliationDistancePropertyContext);
    }
    public aiDataClass_retailationFriendsRadiusProperty(): AiDataClass_retailationFriendsRadiusPropertyContext | null {
        return this.getRuleContext(0, AiDataClass_retailationFriendsRadiusPropertyContext);
    }
    public aiDataClass_sideInfo(): AiDataClass_sideInfoContext[];
    public aiDataClass_sideInfo(i: number): AiDataClass_sideInfoContext | null;
    public aiDataClass_sideInfo(i?: number): AiDataClass_sideInfoContext[] | AiDataClass_sideInfoContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AiDataClass_sideInfoContext);
        }

        return this.getRuleContext(i, AiDataClass_sideInfoContext);
    }
    public aiDataClass_skirmishBuildList(): AiDataClass_skirmishBuildListContext[];
    public aiDataClass_skirmishBuildList(i: number): AiDataClass_skirmishBuildListContext | null;
    public aiDataClass_skirmishBuildList(i?: number): AiDataClass_skirmishBuildListContext[] | AiDataClass_skirmishBuildListContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AiDataClass_skirmishBuildListContext);
        }

        return this.getRuleContext(i, AiDataClass_skirmishBuildListContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_properties;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_properties) {
             listener.enterAiDataClass_properties(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_properties) {
             listener.exitAiDataClass_properties(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_properties) {
            return visitor.visitAiDataClass_properties(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_structurePropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public FLOAT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.FLOAT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_structureProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_structureProperty) {
             listener.enterAiDataClass_structureProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_structureProperty) {
             listener.exitAiDataClass_structureProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_structureProperty) {
            return visitor.visitAiDataClass_structureProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_teamPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public INT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.INT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_teamProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_teamProperty) {
             listener.enterAiDataClass_teamProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_teamProperty) {
             listener.exitAiDataClass_teamProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_teamProperty) {
            return visitor.visitAiDataClass_teamProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_wealthPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public INT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.INT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_wealthProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_wealthProperty) {
             listener.enterAiDataClass_wealthProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_wealthProperty) {
             listener.exitAiDataClass_wealthProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_wealthProperty) {
            return visitor.visitAiDataClass_wealthProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_poorPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public INT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.INT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_poorProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_poorProperty) {
             listener.enterAiDataClass_poorProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_poorProperty) {
             listener.exitAiDataClass_poorProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_poorProperty) {
            return visitor.visitAiDataClass_poorProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_structureWealthyPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public FLOAT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.FLOAT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_structureWealthyProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_structureWealthyProperty) {
             listener.enterAiDataClass_structureWealthyProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_structureWealthyProperty) {
             listener.exitAiDataClass_structureWealthyProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_structureWealthyProperty) {
            return visitor.visitAiDataClass_structureWealthyProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_structurePoorPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public FLOAT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.FLOAT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_structurePoorProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_structurePoorProperty) {
             listener.enterAiDataClass_structurePoorProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_structurePoorProperty) {
             listener.exitAiDataClass_structurePoorProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_structurePoorProperty) {
            return visitor.visitAiDataClass_structurePoorProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_teamWealthPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public FLOAT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.FLOAT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_teamWealthProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_teamWealthProperty) {
             listener.enterAiDataClass_teamWealthProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_teamWealthProperty) {
             listener.exitAiDataClass_teamWealthProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_teamWealthProperty) {
            return visitor.visitAiDataClass_teamWealthProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_teamPoorPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public FLOAT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.FLOAT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_teamPoorProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_teamPoorProperty) {
             listener.enterAiDataClass_teamPoorProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_teamPoorProperty) {
             listener.exitAiDataClass_teamPoorProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_teamPoorProperty) {
            return visitor.visitAiDataClass_teamPoorProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_teamResourcesPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public FLOAT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.FLOAT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_teamResourcesProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_teamResourcesProperty) {
             listener.enterAiDataClass_teamResourcesProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_teamResourcesProperty) {
             listener.exitAiDataClass_teamResourcesProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_teamResourcesProperty) {
            return visitor.visitAiDataClass_teamResourcesProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_guardInnerAIPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public FLOAT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.FLOAT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_guardInnerAIProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_guardInnerAIProperty) {
             listener.enterAiDataClass_guardInnerAIProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_guardInnerAIProperty) {
             listener.exitAiDataClass_guardInnerAIProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_guardInnerAIProperty) {
            return visitor.visitAiDataClass_guardInnerAIProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_guardOuterAIPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public FLOAT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.FLOAT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_guardOuterAIProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_guardOuterAIProperty) {
             listener.enterAiDataClass_guardOuterAIProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_guardOuterAIProperty) {
             listener.exitAiDataClass_guardOuterAIProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_guardOuterAIProperty) {
            return visitor.visitAiDataClass_guardOuterAIProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_guardInnerHumanPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public FLOAT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.FLOAT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_guardInnerHumanProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_guardInnerHumanProperty) {
             listener.enterAiDataClass_guardInnerHumanProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_guardInnerHumanProperty) {
             listener.exitAiDataClass_guardInnerHumanProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_guardInnerHumanProperty) {
            return visitor.visitAiDataClass_guardInnerHumanProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_guardOuterHumanPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public FLOAT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.FLOAT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_guardOuterHumanProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_guardOuterHumanProperty) {
             listener.enterAiDataClass_guardOuterHumanProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_guardOuterHumanProperty) {
             listener.exitAiDataClass_guardOuterHumanProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_guardOuterHumanProperty) {
            return visitor.visitAiDataClass_guardOuterHumanProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_guardChaseUnitsPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public INT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.INT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_guardChaseUnitsProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_guardChaseUnitsProperty) {
             listener.enterAiDataClass_guardChaseUnitsProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_guardChaseUnitsProperty) {
             listener.exitAiDataClass_guardChaseUnitsProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_guardChaseUnitsProperty) {
            return visitor.visitAiDataClass_guardChaseUnitsProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_guardEnemyScanPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public INT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.INT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_guardEnemyScanProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_guardEnemyScanProperty) {
             listener.enterAiDataClass_guardEnemyScanProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_guardEnemyScanProperty) {
             listener.exitAiDataClass_guardEnemyScanProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_guardEnemyScanProperty) {
            return visitor.visitAiDataClass_guardEnemyScanProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_guardEnemyReturnScanPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public INT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.INT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_guardEnemyReturnScanProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_guardEnemyReturnScanProperty) {
             listener.enterAiDataClass_guardEnemyReturnScanProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_guardEnemyReturnScanProperty) {
             listener.exitAiDataClass_guardEnemyReturnScanProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_guardEnemyReturnScanProperty) {
            return visitor.visitAiDataClass_guardEnemyReturnScanProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_alertRangeModifierPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public FLOAT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.FLOAT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_alertRangeModifierProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_alertRangeModifierProperty) {
             listener.enterAiDataClass_alertRangeModifierProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_alertRangeModifierProperty) {
             listener.exitAiDataClass_alertRangeModifierProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_alertRangeModifierProperty) {
            return visitor.visitAiDataClass_alertRangeModifierProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_aggressiveRangeModifierPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public FLOAT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.FLOAT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_aggressiveRangeModifierProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_aggressiveRangeModifierProperty) {
             listener.enterAiDataClass_aggressiveRangeModifierProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_aggressiveRangeModifierProperty) {
             listener.exitAiDataClass_aggressiveRangeModifierProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_aggressiveRangeModifierProperty) {
            return visitor.visitAiDataClass_aggressiveRangeModifierProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_attackProrityDistanceModifierPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public FLOAT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.FLOAT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_attackProrityDistanceModifierProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_attackProrityDistanceModifierProperty) {
             listener.enterAiDataClass_attackProrityDistanceModifierProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_attackProrityDistanceModifierProperty) {
             listener.exitAiDataClass_attackProrityDistanceModifierProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_attackProrityDistanceModifierProperty) {
            return visitor.visitAiDataClass_attackProrityDistanceModifierProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_maxRecruitRadiusPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public FLOAT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.FLOAT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_maxRecruitRadiusProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_maxRecruitRadiusProperty) {
             listener.enterAiDataClass_maxRecruitRadiusProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_maxRecruitRadiusProperty) {
             listener.exitAiDataClass_maxRecruitRadiusProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_maxRecruitRadiusProperty) {
            return visitor.visitAiDataClass_maxRecruitRadiusProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_skirmishBaseDefenseExtraDistancePropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public FLOAT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.FLOAT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_skirmishBaseDefenseExtraDistanceProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_skirmishBaseDefenseExtraDistanceProperty) {
             listener.enterAiDataClass_skirmishBaseDefenseExtraDistanceProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_skirmishBaseDefenseExtraDistanceProperty) {
             listener.exitAiDataClass_skirmishBaseDefenseExtraDistanceProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_skirmishBaseDefenseExtraDistanceProperty) {
            return visitor.visitAiDataClass_skirmishBaseDefenseExtraDistanceProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_forceIdleMSECPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public INT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.INT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_forceIdleMSECProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_forceIdleMSECProperty) {
             listener.enterAiDataClass_forceIdleMSECProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_forceIdleMSECProperty) {
             listener.exitAiDataClass_forceIdleMSECProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_forceIdleMSECProperty) {
            return visitor.visitAiDataClass_forceIdleMSECProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_forceSkirmishAIPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public BOOLEAN(): antlr.TerminalNode {
        return this.getToken(MapIniParser.BOOLEAN, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_forceSkirmishAIProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_forceSkirmishAIProperty) {
             listener.enterAiDataClass_forceSkirmishAIProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_forceSkirmishAIProperty) {
             listener.exitAiDataClass_forceSkirmishAIProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_forceSkirmishAIProperty) {
            return visitor.visitAiDataClass_forceSkirmishAIProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_rotateSkirmishBasePropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public BOOLEAN(): antlr.TerminalNode {
        return this.getToken(MapIniParser.BOOLEAN, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_rotateSkirmishBaseProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_rotateSkirmishBaseProperty) {
             listener.enterAiDataClass_rotateSkirmishBaseProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_rotateSkirmishBaseProperty) {
             listener.exitAiDataClass_rotateSkirmishBaseProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_rotateSkirmishBaseProperty) {
            return visitor.visitAiDataClass_rotateSkirmishBaseProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_attackUsesLineOfSightPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public BOOLEAN(): antlr.TerminalNode {
        return this.getToken(MapIniParser.BOOLEAN, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_attackUsesLineOfSightProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_attackUsesLineOfSightProperty) {
             listener.enterAiDataClass_attackUsesLineOfSightProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_attackUsesLineOfSightProperty) {
             listener.exitAiDataClass_attackUsesLineOfSightProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_attackUsesLineOfSightProperty) {
            return visitor.visitAiDataClass_attackUsesLineOfSightProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_enableRepulsorPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public BOOLEAN(): antlr.TerminalNode {
        return this.getToken(MapIniParser.BOOLEAN, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_enableRepulsorProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_enableRepulsorProperty) {
             listener.enterAiDataClass_enableRepulsorProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_enableRepulsorProperty) {
             listener.exitAiDataClass_enableRepulsorProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_enableRepulsorProperty) {
            return visitor.visitAiDataClass_enableRepulsorProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_repulsedDistancePropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public FLOAT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.FLOAT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_repulsedDistanceProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_repulsedDistanceProperty) {
             listener.enterAiDataClass_repulsedDistanceProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_repulsedDistanceProperty) {
             listener.exitAiDataClass_repulsedDistanceProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_repulsedDistanceProperty) {
            return visitor.visitAiDataClass_repulsedDistanceProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_wallHeighPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public INT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.INT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_wallHeighProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_wallHeighProperty) {
             listener.enterAiDataClass_wallHeighProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_wallHeighProperty) {
             listener.exitAiDataClass_wallHeighProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_wallHeighProperty) {
            return visitor.visitAiDataClass_wallHeighProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_attackIgnoreInsignificantBuildingsPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public BOOLEAN(): antlr.TerminalNode {
        return this.getToken(MapIniParser.BOOLEAN, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_attackIgnoreInsignificantBuildingsProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_attackIgnoreInsignificantBuildingsProperty) {
             listener.enterAiDataClass_attackIgnoreInsignificantBuildingsProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_attackIgnoreInsignificantBuildingsProperty) {
             listener.exitAiDataClass_attackIgnoreInsignificantBuildingsProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_attackIgnoreInsignificantBuildingsProperty) {
            return visitor.visitAiDataClass_attackIgnoreInsignificantBuildingsProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_skirmishGroupFudgeDistancePropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public FLOAT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.FLOAT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_skirmishGroupFudgeDistanceProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_skirmishGroupFudgeDistanceProperty) {
             listener.enterAiDataClass_skirmishGroupFudgeDistanceProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_skirmishGroupFudgeDistanceProperty) {
             listener.exitAiDataClass_skirmishGroupFudgeDistanceProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_skirmishGroupFudgeDistanceProperty) {
            return visitor.visitAiDataClass_skirmishGroupFudgeDistanceProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_minInfantryGroupPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public INT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.INT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_minInfantryGroupProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_minInfantryGroupProperty) {
             listener.enterAiDataClass_minInfantryGroupProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_minInfantryGroupProperty) {
             listener.exitAiDataClass_minInfantryGroupProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_minInfantryGroupProperty) {
            return visitor.visitAiDataClass_minInfantryGroupProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_minVehicleGroupPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public INT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.INT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_minVehicleGroupProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_minVehicleGroupProperty) {
             listener.enterAiDataClass_minVehicleGroupProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_minVehicleGroupProperty) {
             listener.exitAiDataClass_minVehicleGroupProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_minVehicleGroupProperty) {
            return visitor.visitAiDataClass_minVehicleGroupProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_minDistanceGroupPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public FLOAT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.FLOAT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_minDistanceGroupProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_minDistanceGroupProperty) {
             listener.enterAiDataClass_minDistanceGroupProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_minDistanceGroupProperty) {
             listener.exitAiDataClass_minDistanceGroupProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_minDistanceGroupProperty) {
            return visitor.visitAiDataClass_minDistanceGroupProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_distanceRequiresGroupPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public FLOAT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.FLOAT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_distanceRequiresGroupProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_distanceRequiresGroupProperty) {
             listener.enterAiDataClass_distanceRequiresGroupProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_distanceRequiresGroupProperty) {
             listener.exitAiDataClass_distanceRequiresGroupProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_distanceRequiresGroupProperty) {
            return visitor.visitAiDataClass_distanceRequiresGroupProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_infantryPathfindDiameterPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public INT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.INT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_infantryPathfindDiameterProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_infantryPathfindDiameterProperty) {
             listener.enterAiDataClass_infantryPathfindDiameterProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_infantryPathfindDiameterProperty) {
             listener.exitAiDataClass_infantryPathfindDiameterProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_infantryPathfindDiameterProperty) {
            return visitor.visitAiDataClass_infantryPathfindDiameterProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_vehiclePathfindDiameterPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public INT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.INT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_vehiclePathfindDiameterProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_vehiclePathfindDiameterProperty) {
             listener.enterAiDataClass_vehiclePathfindDiameterProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_vehiclePathfindDiameterProperty) {
             listener.exitAiDataClass_vehiclePathfindDiameterProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_vehiclePathfindDiameterProperty) {
            return visitor.visitAiDataClass_vehiclePathfindDiameterProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_supplycenterSaveDistancePropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public FLOAT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.FLOAT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_supplycenterSaveDistanceProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_supplycenterSaveDistanceProperty) {
             listener.enterAiDataClass_supplycenterSaveDistanceProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_supplycenterSaveDistanceProperty) {
             listener.exitAiDataClass_supplycenterSaveDistanceProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_supplycenterSaveDistanceProperty) {
            return visitor.visitAiDataClass_supplycenterSaveDistanceProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_rebuildDelayTimeSecPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public INT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.INT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_rebuildDelayTimeSecProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_rebuildDelayTimeSecProperty) {
             listener.enterAiDataClass_rebuildDelayTimeSecProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_rebuildDelayTimeSecProperty) {
             listener.exitAiDataClass_rebuildDelayTimeSecProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_rebuildDelayTimeSecProperty) {
            return visitor.visitAiDataClass_rebuildDelayTimeSecProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_aiDozerBoredRadiusPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public FLOAT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.FLOAT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_aiDozerBoredRadiusProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_aiDozerBoredRadiusProperty) {
             listener.enterAiDataClass_aiDozerBoredRadiusProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_aiDozerBoredRadiusProperty) {
             listener.exitAiDataClass_aiDozerBoredRadiusProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_aiDozerBoredRadiusProperty) {
            return visitor.visitAiDataClass_aiDozerBoredRadiusProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_aiCrushesInfantryPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public BOOLEAN(): antlr.TerminalNode {
        return this.getToken(MapIniParser.BOOLEAN, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_aiCrushesInfantryProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_aiCrushesInfantryProperty) {
             listener.enterAiDataClass_aiCrushesInfantryProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_aiCrushesInfantryProperty) {
             listener.exitAiDataClass_aiCrushesInfantryProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_aiCrushesInfantryProperty) {
            return visitor.visitAiDataClass_aiCrushesInfantryProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_maxRetaliationDistancePropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public FLOAT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.FLOAT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_maxRetaliationDistanceProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_maxRetaliationDistanceProperty) {
             listener.enterAiDataClass_maxRetaliationDistanceProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_maxRetaliationDistanceProperty) {
             listener.exitAiDataClass_maxRetaliationDistanceProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_maxRetaliationDistanceProperty) {
            return visitor.visitAiDataClass_maxRetaliationDistanceProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_retailationFriendsRadiusPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public FLOAT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.FLOAT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_retailationFriendsRadiusProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_retailationFriendsRadiusProperty) {
             listener.enterAiDataClass_retailationFriendsRadiusProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_retailationFriendsRadiusProperty) {
             listener.exitAiDataClass_retailationFriendsRadiusProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_retailationFriendsRadiusProperty) {
            return visitor.visitAiDataClass_retailationFriendsRadiusProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_sideInfoContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public faction_value(): Faction_valueContext {
        return this.getRuleContext(0, Faction_valueContext)!;
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.NEWLINE);
    	} else {
    		return this.getToken(MapIniParser.NEWLINE, i);
    	}
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public aiDataClass_sideInfoProperties(): AiDataClass_sideInfoPropertiesContext[];
    public aiDataClass_sideInfoProperties(i: number): AiDataClass_sideInfoPropertiesContext | null;
    public aiDataClass_sideInfoProperties(i?: number): AiDataClass_sideInfoPropertiesContext[] | AiDataClass_sideInfoPropertiesContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AiDataClass_sideInfoPropertiesContext);
        }

        return this.getRuleContext(i, AiDataClass_sideInfoPropertiesContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_sideInfo;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_sideInfo) {
             listener.enterAiDataClass_sideInfo(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_sideInfo) {
             listener.exitAiDataClass_sideInfo(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_sideInfo) {
            return visitor.visitAiDataClass_sideInfo(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_sideInfoPropertiesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public aiDataClass_sideInfo_resourceGatheresEasy(): AiDataClass_sideInfo_resourceGatheresEasyContext | null {
        return this.getRuleContext(0, AiDataClass_sideInfo_resourceGatheresEasyContext);
    }
    public aiDataClass_sideInfo_resourceGatheresMedium(): AiDataClass_sideInfo_resourceGatheresMediumContext | null {
        return this.getRuleContext(0, AiDataClass_sideInfo_resourceGatheresMediumContext);
    }
    public aiDataClass_sideInfo_resourceGatheresHard(): AiDataClass_sideInfo_resourceGatheresHardContext | null {
        return this.getRuleContext(0, AiDataClass_sideInfo_resourceGatheresHardContext);
    }
    public aiDataClass_sideInfo_baseDefenseStructure(): AiDataClass_sideInfo_baseDefenseStructureContext | null {
        return this.getRuleContext(0, AiDataClass_sideInfo_baseDefenseStructureContext);
    }
    public aiDataClass_sideInfo_skillSet(): AiDataClass_sideInfo_skillSetContext | null {
        return this.getRuleContext(0, AiDataClass_sideInfo_skillSetContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_sideInfoProperties;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_sideInfoProperties) {
             listener.enterAiDataClass_sideInfoProperties(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_sideInfoProperties) {
             listener.exitAiDataClass_sideInfoProperties(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_sideInfoProperties) {
            return visitor.visitAiDataClass_sideInfoProperties(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_sideInfo_resourceGatheresEasyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public INT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.INT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_sideInfo_resourceGatheresEasy;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_sideInfo_resourceGatheresEasy) {
             listener.enterAiDataClass_sideInfo_resourceGatheresEasy(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_sideInfo_resourceGatheresEasy) {
             listener.exitAiDataClass_sideInfo_resourceGatheresEasy(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_sideInfo_resourceGatheresEasy) {
            return visitor.visitAiDataClass_sideInfo_resourceGatheresEasy(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_sideInfo_resourceGatheresMediumContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public INT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.INT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_sideInfo_resourceGatheresMedium;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_sideInfo_resourceGatheresMedium) {
             listener.enterAiDataClass_sideInfo_resourceGatheresMedium(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_sideInfo_resourceGatheresMedium) {
             listener.exitAiDataClass_sideInfo_resourceGatheresMedium(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_sideInfo_resourceGatheresMedium) {
            return visitor.visitAiDataClass_sideInfo_resourceGatheresMedium(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_sideInfo_resourceGatheresHardContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public INT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.INT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_sideInfo_resourceGatheresHard;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_sideInfo_resourceGatheresHard) {
             listener.enterAiDataClass_sideInfo_resourceGatheresHard(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_sideInfo_resourceGatheresHard) {
             listener.exitAiDataClass_sideInfo_resourceGatheresHard(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_sideInfo_resourceGatheresHard) {
            return visitor.visitAiDataClass_sideInfo_resourceGatheresHard(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_sideInfo_baseDefenseStructureContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public object_value(): Object_valueContext {
        return this.getRuleContext(0, Object_valueContext)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_sideInfo_baseDefenseStructure;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_sideInfo_baseDefenseStructure) {
             listener.enterAiDataClass_sideInfo_baseDefenseStructure(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_sideInfo_baseDefenseStructure) {
             listener.exitAiDataClass_sideInfo_baseDefenseStructure(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_sideInfo_baseDefenseStructure) {
            return visitor.visitAiDataClass_sideInfo_baseDefenseStructure(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_sideInfo_skillSetContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.NEWLINE);
    	} else {
    		return this.getToken(MapIniParser.NEWLINE, i);
    	}
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
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_sideInfo_skillSet;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_sideInfo_skillSet) {
             listener.enterAiDataClass_sideInfo_skillSet(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_sideInfo_skillSet) {
             listener.exitAiDataClass_sideInfo_skillSet(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_sideInfo_skillSet) {
            return visitor.visitAiDataClass_sideInfo_skillSet(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_skirmishBuildListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public faction_value(): Faction_valueContext {
        return this.getRuleContext(0, Faction_valueContext)!;
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.NEWLINE);
    	} else {
    		return this.getToken(MapIniParser.NEWLINE, i);
    	}
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public aiDataClass_skirmishBuildList_structure(): AiDataClass_skirmishBuildList_structureContext[];
    public aiDataClass_skirmishBuildList_structure(i: number): AiDataClass_skirmishBuildList_structureContext | null;
    public aiDataClass_skirmishBuildList_structure(i?: number): AiDataClass_skirmishBuildList_structureContext[] | AiDataClass_skirmishBuildList_structureContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AiDataClass_skirmishBuildList_structureContext);
        }

        return this.getRuleContext(i, AiDataClass_skirmishBuildList_structureContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_skirmishBuildList;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_skirmishBuildList) {
             listener.enterAiDataClass_skirmishBuildList(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_skirmishBuildList) {
             listener.exitAiDataClass_skirmishBuildList(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_skirmishBuildList) {
            return visitor.visitAiDataClass_skirmishBuildList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_skirmishBuildList_structureContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public object_value(): Object_valueContext {
        return this.getRuleContext(0, Object_valueContext)!;
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.NEWLINE);
    	} else {
    		return this.getToken(MapIniParser.NEWLINE, i);
    	}
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public aiDataClass_skirmishBuildList_structure_properties(): AiDataClass_skirmishBuildList_structure_propertiesContext[];
    public aiDataClass_skirmishBuildList_structure_properties(i: number): AiDataClass_skirmishBuildList_structure_propertiesContext | null;
    public aiDataClass_skirmishBuildList_structure_properties(i?: number): AiDataClass_skirmishBuildList_structure_propertiesContext[] | AiDataClass_skirmishBuildList_structure_propertiesContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AiDataClass_skirmishBuildList_structure_propertiesContext);
        }

        return this.getRuleContext(i, AiDataClass_skirmishBuildList_structure_propertiesContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_skirmishBuildList_structure;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_skirmishBuildList_structure) {
             listener.enterAiDataClass_skirmishBuildList_structure(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_skirmishBuildList_structure) {
             listener.exitAiDataClass_skirmishBuildList_structure(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_skirmishBuildList_structure) {
            return visitor.visitAiDataClass_skirmishBuildList_structure(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_skirmishBuildList_structure_propertiesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public aiDataClass_skirmishBuildList_structure_locationProperty(): AiDataClass_skirmishBuildList_structure_locationPropertyContext | null {
        return this.getRuleContext(0, AiDataClass_skirmishBuildList_structure_locationPropertyContext);
    }
    public aiDataClass_skirmishBuildList_structure_rebuildsProperty(): AiDataClass_skirmishBuildList_structure_rebuildsPropertyContext | null {
        return this.getRuleContext(0, AiDataClass_skirmishBuildList_structure_rebuildsPropertyContext);
    }
    public aiDataClass_skirmishBuildList_structure_angleProperty(): AiDataClass_skirmishBuildList_structure_anglePropertyContext | null {
        return this.getRuleContext(0, AiDataClass_skirmishBuildList_structure_anglePropertyContext);
    }
    public aiDataClass_skirmishBuildList_structure_initiallyBuildProperty(): AiDataClass_skirmishBuildList_structure_initiallyBuildPropertyContext | null {
        return this.getRuleContext(0, AiDataClass_skirmishBuildList_structure_initiallyBuildPropertyContext);
    }
    public aiDataClass_skirmishBuildList_structure_automaticallyBuildProperty(): AiDataClass_skirmishBuildList_structure_automaticallyBuildPropertyContext | null {
        return this.getRuleContext(0, AiDataClass_skirmishBuildList_structure_automaticallyBuildPropertyContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_skirmishBuildList_structure_properties;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_skirmishBuildList_structure_properties) {
             listener.enterAiDataClass_skirmishBuildList_structure_properties(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_skirmishBuildList_structure_properties) {
             listener.exitAiDataClass_skirmishBuildList_structure_properties(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_skirmishBuildList_structure_properties) {
            return visitor.visitAiDataClass_skirmishBuildList_structure_properties(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_skirmishBuildList_structure_locationPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public XCOORD(): antlr.TerminalNode {
        return this.getToken(MapIniParser.XCOORD, 0)!;
    }
    public YCOORD(): antlr.TerminalNode {
        return this.getToken(MapIniParser.YCOORD, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_skirmishBuildList_structure_locationProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_skirmishBuildList_structure_locationProperty) {
             listener.enterAiDataClass_skirmishBuildList_structure_locationProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_skirmishBuildList_structure_locationProperty) {
             listener.exitAiDataClass_skirmishBuildList_structure_locationProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_skirmishBuildList_structure_locationProperty) {
            return visitor.visitAiDataClass_skirmishBuildList_structure_locationProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_skirmishBuildList_structure_rebuildsPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public INT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.INT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_skirmishBuildList_structure_rebuildsProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_skirmishBuildList_structure_rebuildsProperty) {
             listener.enterAiDataClass_skirmishBuildList_structure_rebuildsProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_skirmishBuildList_structure_rebuildsProperty) {
             listener.exitAiDataClass_skirmishBuildList_structure_rebuildsProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_skirmishBuildList_structure_rebuildsProperty) {
            return visitor.visitAiDataClass_skirmishBuildList_structure_rebuildsProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_skirmishBuildList_structure_anglePropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public FLOAT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.FLOAT, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_skirmishBuildList_structure_angleProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_skirmishBuildList_structure_angleProperty) {
             listener.enterAiDataClass_skirmishBuildList_structure_angleProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_skirmishBuildList_structure_angleProperty) {
             listener.exitAiDataClass_skirmishBuildList_structure_angleProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_skirmishBuildList_structure_angleProperty) {
            return visitor.visitAiDataClass_skirmishBuildList_structure_angleProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_skirmishBuildList_structure_initiallyBuildPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public BOOLEAN(): antlr.TerminalNode {
        return this.getToken(MapIniParser.BOOLEAN, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_skirmishBuildList_structure_initiallyBuildProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_skirmishBuildList_structure_initiallyBuildProperty) {
             listener.enterAiDataClass_skirmishBuildList_structure_initiallyBuildProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_skirmishBuildList_structure_initiallyBuildProperty) {
             listener.exitAiDataClass_skirmishBuildList_structure_initiallyBuildProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_skirmishBuildList_structure_initiallyBuildProperty) {
            return visitor.visitAiDataClass_skirmishBuildList_structure_initiallyBuildProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AiDataClass_skirmishBuildList_structure_automaticallyBuildPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public BOOLEAN(): antlr.TerminalNode {
        return this.getToken(MapIniParser.BOOLEAN, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_aiDataClass_skirmishBuildList_structure_automaticallyBuildProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAiDataClass_skirmishBuildList_structure_automaticallyBuildProperty) {
             listener.enterAiDataClass_skirmishBuildList_structure_automaticallyBuildProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAiDataClass_skirmishBuildList_structure_automaticallyBuildProperty) {
             listener.exitAiDataClass_skirmishBuildList_structure_automaticallyBuildProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAiDataClass_skirmishBuildList_structure_automaticallyBuildProperty) {
            return visitor.visitAiDataClass_skirmishBuildList_structure_automaticallyBuildProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MappedImageClassContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.NEWLINE);
    	} else {
    		return this.getToken(MapIniParser.NEWLINE, i);
    	}
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
    public mappedImageClass_textureProperty(): MappedImageClass_texturePropertyContext | null {
        return this.getRuleContext(0, MappedImageClass_texturePropertyContext);
    }
    public mappedImageClass_textureWidthProperty(): MappedImageClass_textureWidthPropertyContext | null {
        return this.getRuleContext(0, MappedImageClass_textureWidthPropertyContext);
    }
    public mappedImageClass_textureHeightProperty(): MappedImageClass_textureHeightPropertyContext | null {
        return this.getRuleContext(0, MappedImageClass_textureHeightPropertyContext);
    }
    public mappedImageClass_coordsProperty(): MappedImageClass_coordsPropertyContext | null {
        return this.getRuleContext(0, MappedImageClass_coordsPropertyContext);
    }
    public mappedImageClass_statusProperty(): MappedImageClass_statusPropertyContext | null {
        return this.getRuleContext(0, MappedImageClass_statusPropertyContext);
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


export class MappedImageClass_texturePropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public file(): FileContext {
        return this.getRuleContext(0, FileContext)!;
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_mappedImageClass_textureProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterMappedImageClass_textureProperty) {
             listener.enterMappedImageClass_textureProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitMappedImageClass_textureProperty) {
             listener.exitMappedImageClass_textureProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitMappedImageClass_textureProperty) {
            return visitor.visitMappedImageClass_textureProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MappedImageClass_textureWidthPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public INT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.INT, 0)!;
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_mappedImageClass_textureWidthProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterMappedImageClass_textureWidthProperty) {
             listener.enterMappedImageClass_textureWidthProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitMappedImageClass_textureWidthProperty) {
             listener.exitMappedImageClass_textureWidthProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitMappedImageClass_textureWidthProperty) {
            return visitor.visitMappedImageClass_textureWidthProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MappedImageClass_textureHeightPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public INT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.INT, 0)!;
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_mappedImageClass_textureHeightProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterMappedImageClass_textureHeightProperty) {
             listener.enterMappedImageClass_textureHeightProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitMappedImageClass_textureHeightProperty) {
             listener.exitMappedImageClass_textureHeightProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitMappedImageClass_textureHeightProperty) {
            return visitor.visitMappedImageClass_textureHeightProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MappedImageClass_coordsPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public COORDLEFT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.COORDLEFT, 0)!;
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public COORDTOP(): antlr.TerminalNode {
        return this.getToken(MapIniParser.COORDTOP, 0)!;
    }
    public COORDRIGHT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.COORDRIGHT, 0)!;
    }
    public COORDBOTTOM(): antlr.TerminalNode {
        return this.getToken(MapIniParser.COORDBOTTOM, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_mappedImageClass_coordsProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterMappedImageClass_coordsProperty) {
             listener.enterMappedImageClass_coordsProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitMappedImageClass_coordsProperty) {
             listener.exitMappedImageClass_coordsProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitMappedImageClass_coordsProperty) {
            return visitor.visitMappedImageClass_coordsProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MappedImageClass_statusPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public NONE(): antlr.TerminalNode {
        return this.getToken(MapIniParser.NONE, 0)!;
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_mappedImageClass_statusProperty;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterMappedImageClass_statusProperty) {
             listener.enterMappedImageClass_statusProperty(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitMappedImageClass_statusProperty) {
             listener.exitMappedImageClass_statusProperty(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitMappedImageClass_statusProperty) {
            return visitor.visitMappedImageClass_statusProperty(this);
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


export class RankClassContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INT(): antlr.TerminalNode {
        return this.getToken(MapIniParser.INT, 0)!;
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public rank_properties(): Rank_propertiesContext[];
    public rank_properties(i: number): Rank_propertiesContext | null;
    public rank_properties(i?: number): Rank_propertiesContext[] | Rank_propertiesContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Rank_propertiesContext);
        }

        return this.getRuleContext(i, Rank_propertiesContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_rankClass;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterRankClass) {
             listener.enterRankClass(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitRankClass) {
             listener.exitRankClass(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitRankClass) {
            return visitor.visitRankClass(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Rank_propertiesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.INT, 0);
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
        return MapIniParser.RULE_rank_properties;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterRank_properties) {
             listener.enterRank_properties(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitRank_properties) {
             listener.exitRank_properties(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitRank_properties) {
            return visitor.visitRank_properties(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ScienceClassContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public science_properties(): Science_propertiesContext[];
    public science_properties(i: number): Science_propertiesContext | null;
    public science_properties(i?: number): Science_propertiesContext[] | Science_propertiesContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Science_propertiesContext);
        }

        return this.getRuleContext(i, Science_propertiesContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_scienceClass;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterScienceClass) {
             listener.enterScienceClass(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitScienceClass) {
             listener.exitScienceClass(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitScienceClass) {
            return visitor.visitScienceClass(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Science_propertiesContext extends antlr.ParserRuleContext {
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
    public INT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.INT, 0);
    }
    public BOOLEAN(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.BOOLEAN, 0);
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.ID, 0);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_science_properties;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterScience_properties) {
             listener.enterScience_properties(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitScience_properties) {
             listener.exitScience_properties(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitScience_properties) {
            return visitor.visitScience_properties(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SpecialPowerClassContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public specialPower_properties(): SpecialPower_propertiesContext[];
    public specialPower_properties(i: number): SpecialPower_propertiesContext | null;
    public specialPower_properties(i?: number): SpecialPower_propertiesContext[] | SpecialPower_propertiesContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SpecialPower_propertiesContext);
        }

        return this.getRuleContext(i, SpecialPower_propertiesContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_specialPowerClass;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterSpecialPowerClass) {
             listener.enterSpecialPowerClass(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitSpecialPowerClass) {
             listener.exitSpecialPowerClass(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitSpecialPowerClass) {
            return visitor.visitSpecialPowerClass(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SpecialPower_propertiesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.INT, 0);
    }
    public science_value(): Science_valueContext | null {
        return this.getRuleContext(0, Science_valueContext);
    }
    public BOOLEAN(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.BOOLEAN, 0);
    }
    public academyclassifier_value(): Academyclassifier_valueContext | null {
        return this.getRuleContext(0, Academyclassifier_valueContext);
    }
    public audioevent_value(): Audioevent_valueContext | null {
        return this.getRuleContext(0, Audioevent_valueContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_specialPower_properties;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterSpecialPower_properties) {
             listener.enterSpecialPower_properties(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitSpecialPower_properties) {
             listener.exitSpecialPower_properties(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitSpecialPower_properties) {
            return visitor.visitSpecialPower_properties(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SoundEffectClassesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public audioEventClass(): AudioEventClassContext | null {
        return this.getRuleContext(0, AudioEventClassContext);
    }
    public dialogEventClass(): DialogEventClassContext | null {
        return this.getRuleContext(0, DialogEventClassContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_soundEffectClasses;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterSoundEffectClasses) {
             listener.enterSoundEffectClasses(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitSoundEffectClasses) {
             listener.exitSoundEffectClasses(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitSoundEffectClasses) {
            return visitor.visitSoundEffectClasses(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AudioEventClassContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public audioevent_properties(): Audioevent_propertiesContext[];
    public audioevent_properties(i: number): Audioevent_propertiesContext | null;
    public audioevent_properties(i?: number): Audioevent_propertiesContext[] | Audioevent_propertiesContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Audioevent_propertiesContext);
        }

        return this.getRuleContext(i, Audioevent_propertiesContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_audioEventClass;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAudioEventClass) {
             listener.enterAudioEventClass(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAudioEventClass) {
             listener.exitAudioEventClass(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAudioEventClass) {
            return visitor.visitAudioEventClass(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DialogEventClassContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public audioevent_properties(): Audioevent_propertiesContext[];
    public audioevent_properties(i: number): Audioevent_propertiesContext | null;
    public audioevent_properties(i?: number): Audioevent_propertiesContext[] | Audioevent_propertiesContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Audioevent_propertiesContext);
        }

        return this.getRuleContext(i, Audioevent_propertiesContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_dialogEventClass;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterDialogEventClass) {
             listener.enterDialogEventClass(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitDialogEventClass) {
             listener.exitDialogEventClass(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitDialogEventClass) {
            return visitor.visitDialogEventClass(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Audioevent_propertiesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public file(): FileContext | null {
        return this.getRuleContext(0, FileContext);
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
    public ID(): antlr.TerminalNode[];
    public ID(i: number): antlr.TerminalNode | null;
    public ID(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.ID);
    	} else {
    		return this.getToken(MapIniParser.ID, i);
    	}
    }
    public NONE(): antlr.TerminalNode[];
    public NONE(i: number): antlr.TerminalNode | null;
    public NONE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.NONE);
    	} else {
    		return this.getToken(MapIniParser.NONE, i);
    	}
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_audioevent_properties;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAudioevent_properties) {
             listener.enterAudioevent_properties(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAudioevent_properties) {
             listener.exitAudioevent_properties(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAudioevent_properties) {
            return visitor.visitAudioevent_properties(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UpgradeClassContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MapIniParser.ID, 0)!;
    }
    public end(): EndContext {
        return this.getRuleContext(0, EndContext)!;
    }
    public upgrade_properties(): Upgrade_propertiesContext[];
    public upgrade_properties(i: number): Upgrade_propertiesContext | null;
    public upgrade_properties(i?: number): Upgrade_propertiesContext[] | Upgrade_propertiesContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Upgrade_propertiesContext);
        }

        return this.getRuleContext(i, Upgrade_propertiesContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_upgradeClass;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterUpgradeClass) {
             listener.enterUpgradeClass(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitUpgradeClass) {
             listener.exitUpgradeClass(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitUpgradeClass) {
            return visitor.visitUpgradeClass(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Upgrade_propertiesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(MapIniParser.EQ, 0)!;
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.ID, 0);
    }
    public NONE(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.NONE, 0);
    }
    public audioevent_value(): Audioevent_valueContext | null {
        return this.getRuleContext(0, Audioevent_valueContext);
    }
    public FLOAT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.FLOAT, 0);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.INT, 0);
    }
    public mappedimage_value(): Mappedimage_valueContext | null {
        return this.getRuleContext(0, Mappedimage_valueContext);
    }
    public academyclassifier_value(): Academyclassifier_valueContext | null {
        return this.getRuleContext(0, Academyclassifier_valueContext);
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_upgrade_properties;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterUpgrade_properties) {
             listener.enterUpgrade_properties(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitUpgrade_properties) {
             listener.exitUpgrade_properties(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitUpgrade_properties) {
            return visitor.visitUpgrade_properties(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Academyclassifier_valueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NONE(): antlr.TerminalNode {
        return this.getToken(MapIniParser.NONE, 0)!;
    }
    public override get ruleIndex(): number {
        return MapIniParser.RULE_academyclassifier_value;
    }
    public override enterRule(listener: MapIniListener): void {
        if(listener.enterAcademyclassifier_value) {
             listener.enterAcademyclassifier_value(this);
        }
    }
    public override exitRule(listener: MapIniListener): void {
        if(listener.exitAcademyclassifier_value) {
             listener.exitAcademyclassifier_value(this);
        }
    }
    public override accept<Result>(visitor: MapIniVisitor<Result>): Result | null {
        if (visitor.visitAcademyclassifier_value) {
            return visitor.visitAcademyclassifier_value(this);
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
    public WS(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.WS, 0);
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
    public ID(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.ID, 0);
    }
    public NONE(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.NONE, 0);
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
    public ID(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.ID, 0);
    }
    public NONE(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.NONE, 0);
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
    public ID(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.ID, 0);
    }
    public NONE(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.NONE, 0);
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
    public ID(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.ID, 0);
    }
    public NONE(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.NONE, 0);
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
    public ID(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.ID, 0);
    }
    public NONE(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.NONE, 0);
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
    public ID(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.ID, 0);
    }
    public NONE(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.NONE, 0);
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
    public ID(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.ID, 0);
    }
    public NONE(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.NONE, 0);
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
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MapIniParser.WS);
    	} else {
    		return this.getToken(MapIniParser.WS, i);
    	}
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
    public ID(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.ID, 0);
    }
    public NONE(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.NONE, 0);
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
    public ID(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.ID, 0);
    }
    public NONE(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.NONE, 0);
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
    public ID(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.ID, 0);
    }
    public NONE(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.NONE, 0);
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
    public ID(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.ID, 0);
    }
    public NONE(): antlr.TerminalNode | null {
        return this.getToken(MapIniParser.NONE, 0);
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
