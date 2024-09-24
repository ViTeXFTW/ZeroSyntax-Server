grammar MapIni;

// Parser Rules
program: classes* EOF;

classes: mappedImageClass
       | aiDataClass
       | animation2DClass
       | armorClass
       | commandButtonClass
       | commandSetClass
//       | damageFXClass
//       | drawGroupInfoClass
//       | evaEventClass
//       | fxListClass
//       | inGameUIClass
//       | locomotorClass
//       | objectClass
//       | objectCreationListClass
//       | particleSystemClass
//       | playerTemplateClass
//       | rankClass
//       | scienceClass
//       | soundEffectClasses
//       | specialPowerClass
//       | upgradeClass
//       | weaponClass
//       | weatherClass
       ;

// AIData Class
aiDataClass: 'AIData' (aidataClassProperties_single | aidataClassProperties_blockSideinfo | aidataClassproperties_BlockSkirmishBuildList)* end;

aidataClassProperties_single: 'StructureSeconds' EQ FLOAT
                             | 'TeamSeconds' EQ INT
                             | 'Wealthy' EQ INT
                             | 'Poor' EQ INT
                             | 'StructuresWealthyRate' EQ FLOAT
                             | 'StructuresPoorRate' EQ FLOAT
                             | 'TeamsWealthyRate' EQ FLOAT
                             | 'TeamsPoorRate' EQ FLOAT
                             | 'TeamResourcesToStart' EQ FLOAT
                             | 'GuardInnerModifierAI' EQ FLOAT
                             | 'GuardOuterModifierAI' EQ FLOAT
                             | 'GuardInnerModifierHuman' EQ FLOAT
                             | 'GuardOuterModifierHuman' EQ FLOAT
                             | 'GuardChaseUnitsDuration' EQ INT
                             | 'GuardEnemyScanRate' EQ INT
                             | 'GuardEnemyReturnScanRate' EQ INT
                             | 'AlertRangeModifier' EQ FLOAT
                             | 'AggressiveRangeModifier' EQ FLOAT
                             | 'AttackPriorityDistanceModifier' EQ FLOAT
                             | 'MaxRecruitRadius' EQ FLOAT
                             | 'SkirmishBaseDefenseExtraDistance' EQ FLOAT
                             | 'ForceIdleMSEC' EQ INT
                             | 'ForceSkirmishAI' EQ BOOLEAN
                             | 'RotateSkirmishBases' EQ BOOLEAN
                             | 'AttackUsesLineOfSight' EQ BOOLEAN
                             | 'EnableRepulsors' EQ BOOLEAN
                             | 'RepulsedDistance' EQ FLOAT
                             | 'WallHeight' EQ INT
                             | 'AttackIgnoreInsignificantBuildings' EQ BOOLEAN
                             | 'SkirmishGroupFudgeDistance' EQ FLOAT
                             | 'MinInfantryForGroup' EQ INT
                             | 'MinVehiclesForGroup' EQ INT
                             | 'MinDistanceForGroup' EQ FLOAT
                             | 'DistanceRequiresGroup' EQ FLOAT
                             | 'InfantryPathfindDiameter' EQ INT
                             | 'VehiclePathfindDiameter' EQ INT
                             | 'SupplyCenterSafeRadius' EQ FLOAT
                             | 'RebuildDelayTimeSeconds' EQ INT
                             | 'AIDozerBoredRadiusModifier' EQ FLOAT
                             | 'AICrushesInfantry' EQ BOOLEAN
                             | 'MaxRetaliationDistance' EQ FLOAT
                             | 'RetaliationFriendsRadius' EQ FLOAT
                             ;

aidataClassproperties_BlockSkirmishBuildList: 'SkirmishBuildList' faction skirmishBuildListBlock* end;

skirmishBuildListBlock: 'Structure' object_value skirmishBuildListBlock_structure_properties* end;

skirmishBuildListBlock_structure_properties: 'Location' EQ XCOORD YCOORD
                                           | 'Rebuilds' EQ INT
                                           | 'Angle' EQ FLOAT
                                           | 'InitiallyBuilt' EQ BOOLEAN
                                           | 'AutomaticallyBuild' EQ BOOLEAN
                                           ;

aidataClassProperties_blockSideinfo: 'SideInfo' faction sideinfoproperties* end;

sideinfoproperties: 'ResourceGatherersEasy' EQ INT
                  | 'ResourceGatherersNormal' EQ INT
                  | 'ResourceGatherersHard' EQ INT
                  | 'BaseDefenseStructure1' EQ object_value
                  | sideinfo_skillset_blocks
                  ;

sideinfo_skillset_blocks: ('SkillSet1' | 'SkillSet2' | 'SkillSet3' | 'SkillSet4' | 'SkillSet5') science_property* end;

// MappedImage Class
mappedImageClass: 'MappedImage' ID mappedImageClassProperties* end;

mappedImageClassProperties: 'Texture' EQ (NVALUE | file)
                          | 'TextureWidth' EQ INT
                          | 'TextureHeight' EQ INT
                          | 'Coords' EQ COORDLEFT COORDTOP COORDRIGHT COORDBOTTOM
                          | 'Status' EQ (NVALUE | 'ROTATED_90_CLOCKWISE')
                          ;

// Animation2D Class
animation2DClass: 'Animation' ID animation2DClassProperties* end;

animation2DClassProperties: 'AnimationMode' EQ A2D_ANIMATION_MODE
                          | 'AnimationDelay' EQ INT
                          | 'RandomizeStartFrame' EQ BOOLEAN
                          | 'NumberImages' EQ INT
                          | 'Image' EQ ID
                          ;

// Armor Class
armorClass: 'Armor' ID armorClassProperties* end;

armorClassProperties: 'Armor' EQ ARMOR_TYPE PROCENT;

// CommandButton Class
commandButtonClass: 'CommandButton' ID commandButtonClassProperties* end;

commandButtonClassProperties: cb_command_property
                            | cb_options_property
                            | cb_buttonimage_property
                            | cb_buttonbordertype_property
                            | cb_textlabel_property
                            | cb_descriptionlabel_property
                            | cb_conflictinglabel_property
                            | cb_cursorname_propery
                            | cb_radius_cursorname_value
                            | cb_invalid_cursorname_propery
                            | cb_unitspecificsound_property
                            | object_property
                            | science_property
                            | specialpower_property
                            | upgrade_property
                            | weaponslot_property
                            ;

// CommandSet Class
commandSetClass: 'CommandSet' ID commandSetClassProperty* end;

commandSetClassProperty: INT EQ commandbutton_value;


end: 'end' | 'End' | 'END';

file: ID '.' ('tga' | 'dds');

// MappedImage


// Animation2D


// Armor Class


// CommandButton Class
cb_command_property: 'Command' EQ cb_command_value;
cb_command_value: NVALUE | 'PLACE_BEACON' | 'SPECIAL_POWER' | 'SPECIAL_POWER_FROM_SHORTCUT' | 'PURCHASE_SCIENCE' | 'FIRE_WEAPON' | 'OBJECT_UPGRADE' | 'SWITCH_WEAPON' | 'SET_RALLY_POINT' | 'SELL' | 'TOGGLE_OVERCHARGE' | 'CANCEL_UPGRADE' | 'PLAYER_UPGRADE' | 'EXIT_CONTAINER' | 'EVACUATE' | 'EXECUTE_RAILED_TRANSPORT' | 'COMBATDROP' | 'GUARD' | 'GUARD_WITHOUT_PURSUIT' | 'GUARD_FLYING_UNITS_ONLY' | 'ATTACK_MOVE' | 'STOP' | 'CONVERT_TO_CARBOMB' | 'SABOTAGE_BUILDING' | 'HIJACK_VEHICLE'| 'HACK_INTERNET' | 'DOZER_CONSTRUCT_CANCEL'| 'DOZER_CONSTRUCT' | 'UNIT_BUILD';

cb_options_property: 'Options' EQ cb_options_value+;
cb_options_value: NVALUE | 'NEED_TARGET_POS' | 'NEED_SPECIAL_POWER_SCIENCE' | 'CONTEXTMODE_COMMAND' | 'SCRIPT_ONLY' | 'CAN_USE_WAYPOINTS' | 'NEED_TARGET_NEUTRAL_OBJECT' | 'NEED_TARGET_ENEMY_OBJECT' | 'OK_FOR_MULTI_SELECT' | 'NEED_UPGRADE' | 'CHECK_LIKE' | 'OPTION_ONE' | 'OPTION_TWO' | 'OPTION_THREE' | 'NOT_QUEUEABLE' | 'IGNORES_UNDERPOWERED' | 'MUST_BE_STOPPED' | 'USES_MINE_CLEARING_WEAPONSET' | 'NEED_TARGET_ALLY_OBJECT';

cb_buttonimage_property: 'ButtonImage' EQ mappedimage_value;

cb_buttonbordertype_property: 'ButtonBorderType' EQ cb_buttonbordertype_value;
cb_buttonbordertype_value: NVALUE | 'ACTION' | 'UPGRADE' | 'SYSTEM' | 'BUILD';

cb_textlabel_property: 'TextLabel' EQ (NVALUE | ID);
cb_descriptionlabel_property: 'DescriptLabel' EQ (NVALUE | ID);
cb_conflictinglabel_property: 'ConflictingLabel' EQ (NVALUE | ID);

cb_cursorname_propery: 'CursorName' EQ cursorname_value;
cb_radius_cursorname_value: 'RadiusCursorType' EQ radius_cursorname_value;
cb_invalid_cursorname_propery: 'InvalidCursorName' EQ invalid_cursorname_value;

cb_unitspecificsound_property: 'UnitSpecificSound' EQ audioevent_value;

// CommandSet Class

// Properties that take Classes as a value:
commandbutton_value: NVALUE | ID;

cursorname_value: (NVALUE | ID);
radius_cursorname_value: ID;
invalid_cursorname_value: (NVALUE | ID);

mappedimage_value: NVALUE | ID;

object_property: 'Object' EQ object_value;
object_value: NVALUE | ID;

science_property: 'Science' EQ science_value+;
science_value: NVALUE | ID;

specialpower_property: 'SpecialPower' EQ specialpower_value;
specialpower_value: NVALUE | ID;

audioevent_value: NVALUE | ID;

upgrade_property: 'Upgrade' EQ upgrade_value;
upgrade_value: NVALUE | ID;


// Special Generic Properties
weaponslot_property: 'WeaponSlot' EQ WEAPONSLOT+;
faction: 'America' | 'China' | 'GLA' | 'AmericaAirForceGeneral' | 'AmericaLaserGeneral' | 'AmericaSuperWeaponGeneral' | 'ChinaTankGeneral' | 'ChinaInfantryGeneral' | 'ChinaNukeGeneral' | 'GLADemolitionGeneral' | 'GLAStealthGeneral' | 'GLAToxinGeneral';


// Lexer Rules

// General
INT: '-'? [0-9]+;
FLOAT: '-'? [0-9]* '.' [0-9]+;
PROCENT: (INT | FLOAT) '%';
EQ: '=';

// Weapon
WEAPONSLOT: 'PRIMARY' | 'SECONDARY' | 'TERTIARY';

// AIData Class
XCOORD: 'X:'FLOAT;
YCOORD: 'Y:'FLOAT;

// MappedImage Class
COORDLEFT: 'Left:'INT;
COORDTOP: 'Top:'INT;
COORDRIGHT: 'Right:'INT;
COORDBOTTOM: 'Bottom:'INT;

// Animation2D Class
A2D_ANIMATION_MODE: 'ONCE' | 'ONCE_BACKWARDS' | 'LOOP_BACKWARDS' | 'LOOP_PINGPONG' | 'LOOP';

// Armor Class
ARMOR_TYPE: 'DEFAULT' | 'EXPLOSION' | 'CRUSH' | 'ARMOR_PIERCING' | 'SMALL_ARMS' | 'GATTLING' | 'RADIATION' | 'FLAME' | 'LASER' | 'SNIPER' | 'POISON' | 'HEALING' | 'UNRESISTABLE' | 'WATER' | 'DEPLOY' | 'SURRENDER' | 'HACK' | 'KILL_PILOT' | 'PENALTY' | 'FALLING' | 'MELEE' | 'DISARM' | 'HAZARD_CLEANUP' | 'INFANTRY_MISSILE' | 'AURORA_BOMB' | 'LAND_MINE' | 'JET_MISSILES' | 'STEALTHJET_MISSILES' | 'MOLOTOV_COCKTAIL' | 'COMANCHE_VULCAN' | 'SUBDUAL_MISSILE' | 'SUBDUAL_VEHICLE' | 'SUBDUAL_BUILDING' | 'PARTICLE_BEAM' | 'MICROWAVE' | 'TOPPLING' ;

// CommandButton Class


// General
MANUAL: 'Manual' | 'manual' | 'MANUAL';
BOOLEAN: 'Yes' | 'yes' | 'YES' | 'No' | 'no' | 'NO';
NVALUE: 'None' | 'none' | 'NONE';
ID: [a-zA-Z_0-9][a-zA-Z_0-9%:]*;


// Skips
SKIp: [ \t\r\n]+ -> skip; // skip whitespaces
COMMENT: (';' | '//') ~[\r\n]* -> skip; // skip comments
WS: [ \t]+;

// Learned Things
// Explicit strings ('something') has to be above generic (like ID) and if a lexer rule (1) ueses another lexer rule (2) then (2) has to be above (1)