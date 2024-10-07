grammar MapIni;

// Parser Rules
program: (NEWLINE | classes)* EOF;

classes: mappedImageClass
       | aiDataClass
       | animation2DClass
       | armorClass
       | commandButtonClass
       | commandSetClass
       | damageFXClass
    //    | drawGroupInfoClass
       | fxListClass
       | inGameUIClass
       | locomotorClass
       | objectClass
//       | objectReskinClass
       | objectCreationListClass
       | particleSystemClass
       | playerTemplateClass
       | rankClass
       | scienceClass
       | soundEffectClasses
       | specialPowerClass
       | upgradeClass
       | weaponClass
       | weatherClass
       ;

// AIData Class
aiDataClass: 'AIData' NEWLINE ((WS? aiDataClass_properties NEWLINE) | (NEWLINE | WS))* end;

aiDataClass_properties: aiDataClass_structureProperty
                      | aiDataClass_teamProperty
                      | aiDataClass_wealthProperty
                      | aiDataClass_poorProperty
                      | aiDataClass_structureWealthyProperty
                      | aiDataClass_structurePoorProperty
                      | aiDataClass_teamWealthProperty
                      | aiDataClass_teamPoorProperty
                      | aiDataClass_teamResourcesProperty
                      | aiDataClass_guardInnerAIProperty
                      | aiDataClass_guardOuterAIProperty
                      | aiDataClass_guardInnerHumanProperty
                      | aiDataClass_guardOuterHumanProperty
                      | aiDataClass_guardChaseUnitsProperty
                      | aiDataClass_guardEnemyScanProperty
                      | aiDataClass_guardEnemyReturnScanProperty
                      | aiDataClass_alertRangeModifierProperty
                      | aiDataClass_aggressiveRangeModifierProperty
                      | aiDataClass_attackProrityDistanceModifierProperty
                      | aiDataClass_maxRecruitRadiusProperty
                      | aiDataClass_skirmishBaseDefenseExtraDistanceProperty
                      | aiDataClass_forceIdleMSECProperty
                      | aiDataClass_forceSkirmishAIProperty
                      | aiDataClass_rotateSkirmishBaseProperty
                      | aiDataClass_attackUsesLineOfSightProperty
                      | aiDataClass_enableRepulsorProperty
                      | aiDataClass_repulsedDistanceProperty
                      | aiDataClass_wallHeighProperty
                      | aiDataClass_attackIgnoreInsignificantBuildingsProperty
                      | aiDataClass_skirmishGroupFudgeDistanceProperty
                      | aiDataClass_minInfantryGroupProperty
                      | aiDataClass_minVehicleGroupProperty
                      | aiDataClass_minDistanceGroupProperty
                      | aiDataClass_distanceRequiresGroupProperty
                      | aiDataClass_infantryPathfindDiameterProperty
                      | aiDataClass_vehiclePathfindDiameterProperty
                      | aiDataClass_supplycenterSaveDistanceProperty
                      | aiDataClass_rebuildDelayTimeSecProperty
                      | aiDataClass_aiDozerBoredRadiusProperty
                      | aiDataClass_aiCrushesInfantryProperty
                      | aiDataClass_maxRetaliationDistanceProperty
                      | aiDataClass_retailationFriendsRadiusProperty
                      | aiDataClass_sideInfo*
                      | aiDataClass_skirmishBuildList*
                      ;

aiDataClass_structureProperty: 'StructureSeconds' WS? EQ WS FLOAT;
aiDataClass_teamProperty: 'TeamSeconds' WS? EQ WS INT;
aiDataClass_wealthProperty: 'Wealthy' WS? EQ WS INT;
aiDataClass_poorProperty: 'Poor' WS? EQ WS INT;
aiDataClass_structureWealthyProperty: 'StructuresWealthyRate' WS? EQ WS FLOAT;
aiDataClass_structurePoorProperty: 'StructuresPoorRate' WS? EQ WS FLOAT;
aiDataClass_teamWealthProperty: 'TeamsWealthyRate' WS? EQ WS FLOAT;
aiDataClass_teamPoorProperty: 'TeamsPoorRate' WS? EQ WS FLOAT;
aiDataClass_teamResourcesProperty: 'TeamResourcesToStart' WS? EQ WS FLOAT;
aiDataClass_guardInnerAIProperty: 'GuardInnerModifierAI' WS? EQ WS FLOAT;
aiDataClass_guardOuterAIProperty: 'GuardOuterModifierAI' WS? EQ WS FLOAT;
aiDataClass_guardInnerHumanProperty: 'GuardInnerModifierHuman' WS? EQ WS FLOAT;
aiDataClass_guardOuterHumanProperty: 'GuardOuterModifierHuman' WS? EQ WS FLOAT;
aiDataClass_guardChaseUnitsProperty: 'GuardChaseUnitsDuration' WS? EQ WS INT;
aiDataClass_guardEnemyScanProperty: 'GuardEnemyScanRate' WS? EQ WS INT;
aiDataClass_guardEnemyReturnScanProperty: 'GuardEnemyReturnScanRate' WS? EQ WS INT;
aiDataClass_alertRangeModifierProperty: 'AlertRangeModifier' WS? EQ WS FLOAT;
aiDataClass_aggressiveRangeModifierProperty: 'AggressiveRangeModifier' WS? EQ WS FLOAT;
aiDataClass_attackProrityDistanceModifierProperty: 'AttackPriorityDistanceModifier' WS? EQ WS FLOAT;
aiDataClass_maxRecruitRadiusProperty: 'MaxRecruitRadius' WS? EQ WS FLOAT;
aiDataClass_skirmishBaseDefenseExtraDistanceProperty: 'SkirmishBaseDefenseExtraDistance' WS? EQ WS FLOAT;
aiDataClass_forceIdleMSECProperty: 'ForceIdleMSEC' WS? EQ WS INT;
aiDataClass_forceSkirmishAIProperty: 'ForceSkirmishAI' WS? EQ WS BOOLEAN;
aiDataClass_rotateSkirmishBaseProperty: 'RotateSkirmishBases' WS? EQ WS BOOLEAN;
aiDataClass_attackUsesLineOfSightProperty: 'AttackUsesLineOfSight' WS? EQ WS BOOLEAN;
aiDataClass_enableRepulsorProperty: 'EnableRepulsors' WS? EQ WS BOOLEAN;
aiDataClass_repulsedDistanceProperty: 'RepulsedDistance' WS? EQ WS FLOAT;
aiDataClass_wallHeighProperty: 'WallHeight' WS? EQ WS INT;
aiDataClass_attackIgnoreInsignificantBuildingsProperty: 'AttackIgnoreInsignificantBuildings' WS? EQ WS BOOLEAN;
aiDataClass_skirmishGroupFudgeDistanceProperty: 'SkirmishGroupFudgeDistance' WS? EQ WS FLOAT;
aiDataClass_minInfantryGroupProperty: 'MinInfantryForGroup' WS? EQ WS INT;
aiDataClass_minVehicleGroupProperty: 'MinVehiclesForGroup' WS? EQ WS INT;
aiDataClass_minDistanceGroupProperty: 'MinDistanceForGroup' WS? EQ WS FLOAT;
aiDataClass_distanceRequiresGroupProperty: 'DistanceRequiresGroup' WS? EQ WS FLOAT;
aiDataClass_infantryPathfindDiameterProperty: 'InfantryPathfindDiameter' WS? EQ WS INT;
aiDataClass_vehiclePathfindDiameterProperty: 'VehiclePathfindDiameter' WS? EQ WS INT;
aiDataClass_supplycenterSaveDistanceProperty: 'SupplyCenterSafeRadius' WS? EQ WS FLOAT;
aiDataClass_rebuildDelayTimeSecProperty: 'RebuildDelayTimeSeconds' WS? EQ WS INT;
aiDataClass_aiDozerBoredRadiusProperty: 'AIDozerBoredRadiusModifier' WS? EQ WS FLOAT;
aiDataClass_aiCrushesInfantryProperty: 'AICrushesInfantry' WS? EQ WS BOOLEAN;
aiDataClass_maxRetaliationDistanceProperty: 'MaxRetaliationDistance' WS? EQ WS FLOAT;
aiDataClass_retailationFriendsRadiusProperty: 'RetaliationFriendsRadius' WS? EQ WS FLOAT;

aiDataClass_sideInfo: 'SideInfo' WS faction_value NEWLINE ((WS? (aiDataClass_sideInfoProperties) (NEWLINE | WS)) | (WS? NEWLINE))* end;

aiDataClass_sideInfoProperties: aiDataClass_sideInfo_resourceGatheresEasy
                              | aiDataClass_sideInfo_resourceGatheresMedium
                              | aiDataClass_sideInfo_resourceGatheresHard
                              | aiDataClass_sideInfo_baseDefenseStructure
                              | aiDataClass_sideInfo_skillSet
                              ;

aiDataClass_sideInfo_resourceGatheresEasy: 'ResourceGatherersEasy' WS? EQ WS INT;
aiDataClass_sideInfo_resourceGatheresMedium: 'ResourceGatherersNormal' WS? EQ WS INT;
aiDataClass_sideInfo_resourceGatheresHard: 'ResourceGatherersHard' WS? EQ WS INT;
aiDataClass_sideInfo_baseDefenseStructure: 'BaseDefenseStructure1' WS? EQ WS? object_value;

aiDataClass_sideInfo_skillSet: ('SkillSet1' | 'SkillSet2' | 'SkillSet3' | 'SkillSet4' | 'SkillSet5') NEWLINE ((WS? science_property NEWLINE) | (NEWLINE | WS))* end;

aiDataClass_skirmishBuildList: 'SkirmishBuildList' WS faction_value NEWLINE ((WS? aiDataClass_skirmishBuildList_structure NEWLINE) | (NEWLINE | WS))* end;

aiDataClass_skirmishBuildList_structure: 'Structure' WS object_value NEWLINE ((WS? aiDataClass_skirmishBuildList_structure_properties) | (NEWLINE | WS))* end;

aiDataClass_skirmishBuildList_structure_properties: aiDataClass_skirmishBuildList_structure_locationProperty
                                                  | aiDataClass_skirmishBuildList_structure_rebuildsProperty
                                                  | aiDataClass_skirmishBuildList_structure_angleProperty
                                                  | aiDataClass_skirmishBuildList_structure_initiallyBuildProperty
                                                  | aiDataClass_skirmishBuildList_structure_automaticallyBuildProperty
                                                  ;

aiDataClass_skirmishBuildList_structure_locationProperty: 'Location' WS? EQ WS XCOORD WS YCOORD;
aiDataClass_skirmishBuildList_structure_rebuildsProperty: 'Rebuilds' WS? EQ WS INT;
aiDataClass_skirmishBuildList_structure_angleProperty: 'Angle' WS? EQ WS FLOAT;
aiDataClass_skirmishBuildList_structure_initiallyBuildProperty: 'InitiallyBuilt' WS? EQ WS BOOLEAN;
aiDataClass_skirmishBuildList_structure_automaticallyBuildProperty: 'AutomaticallyBuild' WS? EQ WS BOOLEAN;

// MappedImage Class
mappedImageClass: 'MappedImage' WS ID NEWLINE ((WS? mappedImageClassProperties NEWLINE) | (NEWLINE | WS))* end;

mappedImageClassProperties: mappedImageClass_textureProperty
                          | mappedImageClass_textureWidthProperty
                          | mappedImageClass_textureHeightProperty
                          | mappedImageClass_coordsProperty
                          | mappedImageClass_statusProperty
                          ;

mappedImageClass_textureProperty: 'Texture' WS? EQ WS? file;
mappedImageClass_textureWidthProperty: 'TextureWidth' WS? EQ WS INT;
mappedImageClass_textureHeightProperty: 'TextureHeight' WS? EQ WS INT;
mappedImageClass_coordsProperty: 'Coords' WS? EQ WS COORDLEFT WS COORDTOP WS COORDRIGHT WS COORDBOTTOM;
mappedImageClass_statusProperty: 'Status' WS? EQ WS (NONE | 'ROTATED_90_CLOCKWISE');


// Animation2D Class
animation2DClass: 'Animation' WS ID NEWLINE ((WS? animation2DClassProperties NEWLINE) | (NEWLINE | WS))* end;

animation2DClassProperties: animation2DClass_animationModeProperty
                          | animation2DClass_animationdelayProperty
                          | animation2DClass_randomizeStartFrameProperty
                          | animation2DClass_numberImagesProperty
                          | animation2DClass_imageProperty
                          ;

animation2DClass_animationModeProperty: 'AnimationMode' WS? EQ WS (NONE | 'ONCE' | 'ONCE_BACKWARDS' | 'LOOP' | 'LOOP_BACKWARDS' | 'PING_PONG' | 'PING_PONG_BACKWARDS');
animation2DClass_animationdelayProperty: 'AnimationDelay' WS? EQ WS INT;
animation2DClass_randomizeStartFrameProperty: 'RandomizeStartFrame' WS? EQ WS BOOLEAN;
animation2DClass_numberImagesProperty: 'NumberImages' WS? EQ WS INT;
animation2DClass_imageProperty: 'Image' WS? EQ WS? mappedimage_value;

// Armor Class
armorClass: 'Armor' WS ID ((WS? armorClassProperties WS? NEWLINE) | (NEWLINE | WS))* end;

armorClassProperties: armorClass_armorProperty;

armorClass_armorProperty: 'Armor' WS? EQ WS? armorType_value WS PERCENT;

// CommandButton Class
commandButtonClass: 'CommandButton' WS ID NEWLINE ((WS? commandButtonClassProperties WS? NEWLINE) | (NEWLINE | WS))* end;

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
                            | cb_maxshotsfire_property
                            | object_property
                            | science_property
                            | specialpower_property
                            | upgrade_property
                            | weaponslot_property
                            ;

cb_command_property: 'Command' WS? EQ WS (NONE | 'DOZER_CONSTRUCT' | 'DOZER_CONSTRUCT_CANCEL' | 'UNIT_BUILD' | 'CANCEL_UNIT_BUILD' | 'PLAYER_UPGRADE' | 'OBJECT_UPGRADE' | 'CANCEL_UPGRADE' | 'ATTACK_MOVE' | 'GUARD' | 'GUARD_WITHOUT_PURSUIT' | 'GUARD_FLYING_UNITS_ONLY' | 'STOP' | 'WAYPOINTS' | 'EXIT_CONTAINER' | 'EVACUATE' | 'EXECUTE_RAILED_TRANSPORT' | 'BEACON_DELETE' | 'SET_RALLY_POINT' | 'SELL' | 'FIRE_WEAPON' | 'SPECIAL_POWER' | 'PURCHASE_SCIENCE' | 'HACK_INTERNET' | 'TOGGLE_OVERCHARGE' | 'COMBATDROP' | 'SWITCH_WEAPON' | 'HIJACK_VEHICLE' | 'CONVERT_TO_CARBOMB' | 'SABOTAGE_BUILDING' | 'PLACE_BEACON' | 'SPECIAL_POWER_FROM_SHORTCUT' | 'SPECIAL_POWER_CONSTRUCT' | 'SPECIAL_POWER_CONSTRUCT_FROM_SHORTCUT' | 'SELECT_ALL_UNITS_OF_TYPE');
cb_options_property: 'Options' WS? EQ WS? cb_options_value (WS cb_options_value)*;
cb_options_value: (NONE | 'NEED_TARGET_ENEMY_OBJECT' | 'NEED_TARGET_NEUTRAL_OBJECT' | 'NEED_TARGET_ALLY_OBJECT' | 'ALLOW_SHRUBBERY_TARGET' | 'NEED_TARGET_POS' | 'NEED_UPGRADE' | 'NEED_SPECIAL_POWER_SCIENCE' | 'OK_FOR_MULTI_SELECT' | 'CONTEXTMODE_COMMAND' | 'CHECK_LIKE' | 'ALLOW_MINE_TARGET' | 'ATTACK_OBJECTS_POSITION' | 'OPTION_ONE' | 'OPTION_TWO' | 'OPTION_THREE' | 'NOT_QUEUEABLE' | 'SINGLE_USE_COMMAND' | 'SCRIPT_ONLY' | 'IGNORES_UNDERPOWERED' | 'USES_MINE_CLEARING_WEAPONSET' | 'CAN_USE_WAYPOINTS' | 'MUST_BE_STOPPED');
cb_buttonimage_property: 'ButtonImage' WS? EQ WS? mappedimage_value;
cb_buttonbordertype_property: 'ButtonBorderType' WS? EQ WS (NONE | 'BUILD' | 'UPGRADE' | 'ACTION' | 'SYSTEM' | 'COUNT');
cb_textlabel_property: 'TextLabel' WS? EQ WS ID;
cb_descriptionlabel_property: 'DescriptLabel' WS? EQ WS ID;
cb_conflictinglabel_property: 'ConflictingLabel' WS? EQ WS ID;
cb_cursorname_propery: 'CursorName' WS? EQ WS? cursorname_value;
cb_radius_cursorname_value: 'RadiusCursorType' WS? EQ WS? radius_cursorname_value;
cb_invalid_cursorname_propery: 'InvalidCursorName' WS? EQ WS? invalid_cursorname_value;
cb_unitspecificsound_property: 'UnitSpecificSound' WS? EQ WS? audioevent_value;
cb_maxshotsfire_property: 'MaxShotsToFire' WS? EQ WS INT;

// CommandSet Class
commandSetClass: 'CommandSet' WS ID NEWLINE ((WS? commandSetClassProperty WS? NEWLINE) | (WS | NEWLINE))* end;

commandSetClassProperty: INT WS? EQ WS? commandbutton_value;


// DamageFX Class
damageFXClass: 'DamageFX' WS ID NEWLINE ((WS? damageFXClassProperties WS? NEWLINE) | (WS | NEWLINE))* end;

damageFXClassProperties: dfx_throttletime_property
                       | dfx_majorfx_property
                       | dfx_minorfx_property
                       | dfx_vetmajorfx_property
                       | dfx_amountformajorfx_property
                       | dfx_vetminorfx_property
                       ;

dfx_throttletime_property: 'ThrottleTime' WS? EQ WS? armorType_value WS INT;
dfx_amountformajorfx_property: 'AmountForMajorFX' WS? EQ WS? armorType_value WS FLOAT;
dfx_majorfx_property: 'MajorFX' WS? EQ WS? armorType_value WS fxlist_value;
dfx_minorfx_property: 'MinorFX' WS? EQ WS? armorType_value WS fxlist_value;
dfx_vetmajorfx_property: 'VeterancyMajorFX' WS? EQ WS? VETERENCY WS armorType_value WS fxlist_value;
dfx_vetminorfx_property: 'VeterancyMinorFX' WS? EQ WS? VETERENCY WS armorType_value WS fxlist_value;

// DrawGroupInfo Class
drawGroupInfoClass: 'DrawGroupInfo' drawgroupinfoProperties* end;

drawgroupinfoProperties: dgi_useplayercolor_property
                       | dgi_colorfortext_property
                       | dgi_colordropshadow_property
                       | dgi_dropshadowoffsetX_property
                       | dgi_dropshadowoffsetY_property
                       | dgi_fontname_property
                       | dgi_fontsize_property
                       | dgi_fontisbold_property
                       | dgi_drawposXperc_property
                       | dgi_drawposYperc_property
                       ;

// FXList Class
fxListClass: 'FXList' WS ID NEWLINE ((WS? fxlistblocks WS? NEWLINE) | (WS | NEWLINE))* end;

fxlistblocks: fxlist_ps_block
            | fxlist_sound_block
            | fxlist_rayeffect_block
            | fxlist_tracer_block
            | fxlist_lightpulse_block
            | fxlist_viewshake_block
            | fxlist_terrainscorch_block
            | fxlist_fxlistatbone_block
            ;

// Particle System
fxlist_ps_block: 'ParticleSystem' NEWLINE
                ((WS? (fxlist_ps_name_property
                | fxlist_ps_count_property
                | fxlist_ps_offset_property
                | fxlist_ps_height_property
                | fxlist_ps_radius_property
                | fxlist_ps_initialDelay_property
                | fxlist_ps_rotateX_property
                | fxlist_ps_rotatey_property
                | fxlist_ps_rotateZ_property
                | fxlist_ps_orienttoobject_property
                | fxlist_ps_usecallerradius_property
                | fxlist_ps_ricochet_property
                | fxlist_ps_attachtoobject_property
                | fxlist_ps_creategroundheight_property) NEWLINE) | (WS | NEWLINE))*
                end;

fxlist_ps_name_property: 'Name' WS EQ WS? particlesystem_value;
fxlist_ps_count_property: 'Count' WS EQ WS? rand_value;
fxlist_ps_offset_property: 'Offset' WS EQ WS? coord3D;
fxlist_ps_radius_property: 'Radius' WS EQ WS? rand_value;
fxlist_ps_height_property: 'Height' WS EQ WS? rand_value;
fxlist_ps_initialDelay_property: 'InitialDelay' WS EQ WS? rand_value;
fxlist_ps_rotateX_property: 'RotateX' WS EQ WS? INT;
fxlist_ps_rotatey_property: 'RotateY' WS EQ WS? INT;
fxlist_ps_rotateZ_property: 'RotateZ' WS EQ WS? INT;
fxlist_ps_orienttoobject_property: 'OrientToObject' WS EQ WS? BOOLEAN;
fxlist_ps_ricochet_property: 'Ricochet' WS EQ WS?? BOOLEAN;
fxlist_ps_usecallerradius_property: 'UseCallersRadius' WS EQ WS? BOOLEAN;
fxlist_ps_attachtoobject_property: 'AttachToObject' WS EQ WS? BOOLEAN;
fxlist_ps_creategroundheight_property: 'CreateAtGroundHeight' WS EQ WS? BOOLEAN;

// Sound
fxlist_sound_block: 'Sound' NEWLINE ((WS? fxlist_sound_property WS? NEWLINE) | (WS | NEWLINE))* end;

fxlist_sound_property: 'Name' WS EQ WS audioevent_value;

//Ray Effect
fxlist_rayeffect_block: 'RayEffect' NEWLINE ((WS? (fxlist_rayeffect_object_propety
                      | fxlist_rayeffect_primaryoffset_property
                      | fxlist_rayeffect_secondaryoffset_proprety) NEWLINE) | (WS | NEWLINE))*
                      end;
                      
fxlist_rayeffect_primaryoffset_property: 'PrimaryOffset' WS EQ WS? coord3D;
fxlist_rayeffect_secondaryoffset_proprety: 'SecondaryOffset' WS EQ WS? coord3D;
fxlist_rayeffect_object_propety: 'Name' WS EQ WS? object_value;

// Tracer
fxlist_tracer_block: 'Tracer' NEWLINE ((WS? (fxlist_tracer_name_propety
                   | fxlist_tracer_bonename_property
                   | fxlist_tracer_speed_property
                   | fxlist_tracer_decayat_property
                   | fxlist_tracer_length_property
                   | fxlist_tracer_width_property
                   | fxlist_tracer_color_property
                   | fxlist_tracer_probability_property) NEWLINE) | (WS | NEWLINE))*
                   end;
                   
fxlist_tracer_name_propety: 'TracerName' WS EQ WS? object_value;
fxlist_tracer_bonename_property: 'BoneName' WS EQ WS? ID;
fxlist_tracer_speed_property: 'Speed' WS EQ WS? (INT | FLOAT);
fxlist_tracer_decayat_property: 'DecayAt' WS EQ WS? (INT | FLOAT);
fxlist_tracer_length_property: 'Length' WS EQ WS? (INT | FLOAT);
fxlist_tracer_width_property: 'Width' WS EQ WS? (INT | FLOAT);
fxlist_tracer_color_property: 'Color' WS EQ WS? RGB;
fxlist_tracer_probability_property: 'Probability' WS EQ WS? (INT | FLOAT);

// Light Pulse
fxlist_lightpulse_block: 'LightPulse' NEWLINE ((WS? (fxlist_lightpulse_color_property
                                      |fxlist_lightpulse_radius_property
                                      |fxlist_lightpulse_radiuspercentobjectsize_property
                                      |fxlist_lightpulse_increasetime_property
                                      |fxlist_lightpulse_decreasetime_property) NEWLINE) | (WS | NEWLINE))*
                          end;
                          
fxlist_lightpulse_color_property: 'Color' WS EQ WS? RGB;
fxlist_lightpulse_radius_property: 'Radius' WS EQ WS? (INT | FLOAT);
fxlist_lightpulse_radiuspercentobjectsize_property: 'RadiusAsPercentOfObjectSize' WS EQ WS? PERCENT;
fxlist_lightpulse_increasetime_property: 'IncreaseTime' WS EQ WS? INT;
fxlist_lightpulse_decreasetime_property: 'DecreaseTime' WS EQ WS? INT;

// View Shake
fxlist_viewshake_block: 'ViewShake' NEWLINE ((WS? fxlist_viewshake_type_property WS? NEWLINE) | (WS | NEWLINE))* end;

fxlist_viewshake_type_property: 'Type' WS EQ WS? fxlist_viewshake_type_value;
fxlist_viewshake_type_value: (NONE | 'NORMAL' | 'SUBTLE' | 'STRONG' | 'SEVERE' | 'CINE_EXTREME' | 'CINE_INSANE');

// Terrain Scorch
fxlist_terrainscorch_block: 'TerrainScorch' NEWLINE ((WS? (fxlist_scorch_type_property | fxlist_scorch_radius_property) WS? NEWLINE) | (WS | NEWLINE))* end;

fxlist_scorch_type_property: 'Type' WS EQ WS? ID;
fxlist_scorch_radius_property: 'Radius' WS EQ WS? (INT | FLOAT);

// FXList At Bone
fxlist_fxlistatbone_block: 'FXListAtBonePos' NEWLINE ((WS? (fxlist_atbonepos_fx_property | fxlist_atbonepos_bonename_property | fxlist_atbonepos_orienttoobject_property) WS? NEWLINE) | (WS | NEWLINE))* end;

fxlist_atbonepos_fx_property: 'FX' WS EQ WS? fxlist_value;
fxlist_atbonepos_bonename_property: 'BoneName' WS EQ WS? ID;
fxlist_atbonepos_orienttoobject_property: 'OrientToBone' WS EQ WS? BOOLEAN;


// IngameUI Class
inGameUIClass: 'InGameUI' NEWLINE ((WS? (igui_properties | igui_blocks) WS? NEWLINE) | (WS | NEWLINE))* end;

igui_properties:  'MaxSelectionSize' WS EQ WS? INT
                | 'MessageColor1' WS EQ WS? RGB
                | 'MessageColor2' WS EQ WS? RGB
                | 'MessagePosition' WS EQ WS? XCOORD WS YCOORD
                | 'MessageFont' WS EQ WS? (ID | STRING)
                | 'MessagePointSize' WS EQ WS? INT
                | 'MessageBold' WS EQ WS? BOOLEAN
                | 'MessageDelayMS' WS EQ WS? INT
                | 'MilitaryCaptionColor' WS EQ WS? RGBA
                | 'MilitaryCaptionPosition' WS EQ WS? XCOORD WS YCOORD
                | 'MilitaryCaptionTitleFont' WS EQ WS? (ID | STRING)
                | 'MilitaryCaptionTitlePointSize' WS EQ WS? INT
                | 'MilitaryCaptionTitleBold' WS EQ WS? BOOLEAN
                | 'MilitaryCaptionFont' WS EQ WS? (ID | STRING)
                | 'MilitaryCaptionPointSize' WS EQ WS? INT
                | 'MilitaryCaptionBold' WS EQ WS? BOOLEAN
                | 'MilitaryCaptionRandomizeTyping' WS EQ WS? BOOLEAN
                | 'SuperweaponCountdownPosition' WS EQ WS? XCOORD WS YCOORD
                | 'SuperweaponCountdownFlashDuration' WS EQ WS? INT
                | 'SuperweaponCountdownFlashColor' WS EQ WS? RGB
                | 'SuperweaponCountdownNormalFont' WS EQ WS? (ID | STRING)
                | 'SuperweaponCountdownNormalPointSize' WS EQ WS? INT
                | 'SuperweaponCountdownNormalBold' WS EQ WS? BOOLEAN
                | 'SuperweaponCountdownReadyFont' WS EQ WS? (ID | STRING)
                | 'SuperweaponCountdownReadyPointSize' WS EQ WS? INT
                | 'SuperweaponCountdownReadyBold' WS EQ WS? BOOLEAN
                | 'NamedTimerCountdownPosition' WS EQ WS? XCOORD WS YCOORD
                | 'NamedTimerCountdownFlashDuration' WS EQ WS? INT
                | 'NamedTimerCountdownFlashColor' WS EQ WS? RGB
                | 'NamedTimerCountdownNormalFont' WS EQ WS? (ID | STRING)
                | 'NamedTimerCountdownNormalPointSize' WS EQ WS? INT
                | 'NamedTimerCountdownNormalBold' WS EQ WS? BOOLEAN
                | 'NamedTimerCountdownNormalColor' WS EQ WS? RGB
                | 'NamedTimerCountdownReadyFont' WS EQ WS? (ID | STRING)
                | 'NamedTimerCountdownReadyPointSize' WS EQ WS? INT
                | 'NamedTimerCountdownReadyBold' WS EQ WS? BOOLEAN
                | 'NamedTimerCountdownReadyColor' WS EQ WS? RGB
                | 'FloatingTextTimeOut' WS EQ WS? INT
                | 'FloatingTextMoveUpSpeed' WS EQ WS? INT
                | 'FloatingTextVanishRate' WS EQ WS? INT
                | 'DrawRMBScrollAnchor' WS EQ WS? BOOLEAN
                | 'MoveRMBScrollAnchor' WS EQ WS? BOOLEAN
                | 'PopupMessageColor' WS EQ WS? RGBA
                ;

igui_blocks: ('SpyDroneRadiusCursor'
           | 'AttackScatterAreaRadiusCursor'
           | 'SuperweaponScatterAreaRadiusCursor'
           | 'AttackDamageAreaRadiusCursor'
           | 'AttackContinueAreaRadiusCursor'
           | 'GuardAreaRadiusCursor'
           | 'EmergencyRepairRadiusCursor'
           | 'FrenzyRadiusCursor'
           | 'FriendlySpecialPowerRadiusCursor'
           | 'OffensiveSpecialPowerRadiusCursor'
           | 'ParticleCannonRadiusCursor'
           | 'A10StrikeRadiusCursor'
           | 'CarpetBombRadiusCursor'
           | 'DaisyCutterRadiusCursor'
           | 'ParadropRadiusCursor'
           | 'SpySatelliteRadiusCursor'
           | 'SpectreGunshipRadiusCursor'
           | 'HelixNapalmBombRadiusCursor'
           | 'NuclearMissileRadiusCursor'
           | 'EMPPulseRadiusCursor'
           | 'ArtilleryRadiusCursor'
           | 'NapalmStrikeRadiusCursor'
           | 'ClusterMinesRadiusCursor'
           | 'ScudStormRadiusCursor'
           | 'AnthraxBombRadiusCursor'
           | 'AmbushRadiusCursor'
           | 'RadarRadiusCursor'
           | 'ClearMinesRadiusCursor'
           | 'AmbulanceRadiusCursor') ((WS? ingui_block_properties WS? NEWLINE) | (WS | NEWLINE))* end
           ;

ingui_block_properties: 'Texture' WS EQ WS? ID
                      | 'Style' WS EQ WS? ID
                      | 'OpacityMin' WS EQ WS? PERCENT
                      | 'OpacityMax' WS EQ WS? PERCENT
                      | 'OpacityThrobTime' WS EQ WS? INT
                      | 'Color' WS EQ WS? RGBA
                      | 'OnlyVisibleToOwningPlayer' WS EQ WS? BOOLEAN
                      ;


// Locomotor Class
locomotorClass: 'Locomotor' WS ID NEWLINE ((WS? locomotor_properties WS? NEWLINE) | (WS | NEWLINE))* end;

locomotor_properties: locomotor_surface_property
                    | locomotor_zbehavior_property
                    | locomotor_appereance_property
                    | locomotor_movepriority_property
                    | 'Speed' WS EQ WS? (INT | FLOAT)
                    | 'MinSpeed' WS EQ WS? (INT | FLOAT)
                    | 'SpeedDamaged' WS EQ WS? (INT | FLOAT)
                    | 'TurnRate' WS EQ WS? (INT | FLOAT)
                    | 'TurnRateDamaged' WS EQ WS? (INT | FLOAT)
                    | 'Acceleration' WS EQ WS? (INT | FLOAT)
                    | 'AccelerationDamaged' WS EQ WS? (INT | FLOAT)
                    | 'MaxThrustAngle' WS EQ WS? INT
                    | 'Braking' WS EQ WS? INT
                    | 'MinTurnSpeed' WS EQ WS? INT
                    | 'StickToGround' WS EQ WS? BOOLEAN
                    | 'WanderWidthFactor' WS EQ WS? (INT | FLOAT)
                    | 'WanderLengthFactor' WS EQ WS? (INT | FLOAT)
                    | 'WanderAboutPointRadius' WS EQ WS? (INT | FLOAT)
                    | 'TurnPivotOffset' WS EQ WS? (INT | FLOAT)
                    | 'AccelerationPitchLimit' WS EQ WS? (INT | FLOAT)
                    | 'DecelerationPitchLimit' WS EQ WS? (INT | FLOAT)
                    | 'BounceAmount' WS EQ WS? INT
                    | 'PitchStiffness' WS EQ WS? (INT | FLOAT)
                    | 'RollStiffness' WS EQ WS? (INT | FLOAT)
                    | 'PitchDamping' WS EQ WS? (INT | FLOAT)
                    | 'RollDamping' WS EQ WS? (INT | FLOAT)
                    | 'ForwardAccelerationPitchFactor' WS EQ WS? (INT | FLOAT)
                    | 'LateralAccelerationRollFactor' WS EQ WS? (INT | FLOAT)
                    | 'ForwardVelocityPitchFactor' WS EQ WS? (INT | FLOAT)
                    | 'LateralVelocityRollFactor' WS EQ WS? (INT | FLOAT)
                    | 'Apply2DFrictionWhenAirborne' WS EQ WS? BOOLEAN
                    | 'AirborneTargetingHeight' WS EQ WS? INT
                    | 'LocomotorWorksWhenDead' WS EQ WS? BOOLEAN
                    | 'HasSuspension' WS EQ WS? BOOLEAN
                    | 'CanMoveBackwards' WS EQ WS? BOOLEAN
                    | 'MaximumWheelExtension' WS EQ WS? (INT | FLOAT)
                    | 'MaximumWheelCompression' WS EQ WS? (INT | FLOAT)
                    | 'FrontWheelTurnAngle' WS EQ WS? INT
                    | 'AllowAirborneMotiveForce' WS EQ WS? BOOLEAN
                    | 'PreferredHeight' WS EQ WS? (INT | FLOAT)
                    | 'PreferredHeightDamping' WS EQ WS? (INT | FLOAT)
                    | 'ThrustRoll' WS EQ WS? (INT | FLOAT)
                    | 'ThrustWobbleRate' WS EQ WS? (INT | FLOAT)
                    | 'ThrustMinWobble' WS EQ WS? (INT | FLOAT)
                    | 'ThrustMaxWobble' WS EQ WS? (INT | FLOAT)
                    | 'CloseEnoughDist3D' WS EQ WS? BOOLEAN
                    | 'Lift' WS EQ WS? INT
                    | 'LiftDamaged' WS EQ WS? INT
                    | 'UniformAxialDamping' WS EQ WS? (INT | FLOAT)
                    | 'CloseEnoughDist' WS EQ WS? (INT | FLOAT)
                    | 'CirclingRadius' WS EQ WS? INT
                    | 'PitchInDirectionOfZVelFactor' WS EQ WS? (INT | FLOAT)
                    | 'SlideIntoPlaceTime' WS EQ WS? INT
                    | 'SpeedLimitZ' WS EQ WS? INT
                    | 'Extra2DFriction' WS EQ WS? INT
                    | 'DownhillOnly' WS EQ WS? BOOLEAN
                    | 'RudderCorrectionDegree' WS EQ WS? (INT | FLOAT)
                    | 'RudderCorrectionRate' WS EQ WS? (INT | FLOAT)
                    | 'ElevatorCorrectionDegree' WS EQ WS? (INT | FLOAT)
                    | 'ElevatorCorrectionRate' WS? EQ WS? (INT | FLOAT)
                    ;

locomotor_surface_property: 'Surfaces' WS? EQ WS? surface_value (WS? surface_value)*;
locomotor_zbehavior_property: 'ZAxisBehavior' WS EQ WS? zbehavior_value;
locomotor_appereance_property: 'Appearance' WS EQ WS? appereance_value;
locomotor_movepriority_property: 'GroupMovementPriority' WS EQ WS? movepriority_value;

surface_value: (NONE | 'GROUND' | 'WATER' | 'AIR' | 'CLIFF' | 'RUBBLE');
zbehavior_value: (NONE | 'NO_Z_MOTIVE_FORCE' | 'SEA_LEVEL' | 'SURFACE_RELATIVE_HEIGHT' | 'ABSOLUTE_HEIGHT' | 'FIXED_SURFACE_RELATIVE_HEIGHT' | 'FIXED_ABSOLUTE_HEIGHT' | 'FIXED_RELATIVE_TO_GROUND_AND_BUILDINGS' | 'RELATIVE_TO_HIGHEST_LAYER');
appereance_value: (NONE | 'TWO_LEGS' | 'FOUR_WHEELS' | 'TREADS' | 'HOVER' | 'THRUST' | 'WINGS' | 'CLIMBER' | 'OTHER' | 'MOTORCYCLE');
movepriority_value: (NONE | 'MOVES_BACK' | 'MOVES_FRONT' | 'MOVES_MIDDLE');

// Object Class
objectClass: 'Object' WS ID NEWLINE ((WS? objectClass_properties WS? NEWLINE) | (WS | NEWLINE | objectClass_addModule | objectClass_drawModules))* end;

objectClass_properties: 'DisplayName' WS EQ WS? ID
                      | 'RadarPriority' WS EQ WS? (NONE | 'NOT_ON_RADAR' | 'STRUCTURE' | 'UNIT' | 'BOMB' | 'NUM_PRIORITIES')
                      | 'TransportSlotCount' WS EQ WS? INT
                      | 'FenceWidth' WS EQ WS? INT
                      | 'FenceXOffset' WS EQ WS? INT
                      | 'IsBridge' WS EQ WS? BOOLEAN
                      | 'VisionRange' WS EQ WS? INT
                      | 'ShroudClearingRange' WS EQ WS? INT
                      | 'ShroudRevealToAllRange' WS EQ WS? INT
                      | 'PlacementViewAngle' WS EQ WS? INT
                      | 'FactoryExitWidth' WS EQ WS? (INT | FLOAT)
                      | 'FactoryExtraBibWidth' WS EQ WS? (INT | FLOAT)
                      | 'SkillPointValue' WS EQ WS? INT
                      | 'ExperienceValue' WS EQ WS? INT WS INT WS INT WS INT
                      | 'ExperienceRequired' WS EQ WS? INT WS INT WS INT WS INT
                      | 'IsTrainable' WS EQ WS? BOOLEAN
                      | 'EnterGuard' WS EQ WS? BOOLEAN
                      | 'HijackGuard' WS EQ WS? BOOLEAN
                      | 'Side' WS EQ WS? faction_value
                      | 'EditorSorting' WS EQ WS? (NONE | 'STRUCTURE' | 'VEHICLE' | 'INFANTRY' | 'SHRUBBERY' | 'MISC_MAN_MADE' | 'MISC_NATURAL' | 'DEBRIS' | 'SYSTEM' | 'AUDIO' | 'TEST' | 'FOR_REVIEW' | 'ROAD' | 'WAYPOINT')
                      | 'Buildable' WS EQ WS? BOOLEAN
                      | 'BuildCost' WS EQ WS? INT
                      | 'BuildTime' WS EQ WS? INT
                      | 'RefundValue' WS EQ WS? INT
                      | 'BuildCompletion' WS EQ WS? (NONE | 'INVALID' | 'APPEARS_AT_RALLY_POINT' | 'PLACED_BY_PLAYER')
                      | 'EnergyProduction' WS EQ WS? INT
                      | 'EnergyBonus' WS EQ WS? INT
                      | 'IsForbidden' WS EQ WS? BOOLEAN
                      | 'IsPrerequisite' WS EQ WS? BOOLEAN
                      | 'DisplayColor' WS EQ WS? RGB
                      | 'KindOf' WS EQ WS? kindof_value (WS kindof_value)*
                      | 'CommandSet' WS EQ WS? commandSet_value
                      | 'BuildVariations' WS EQ WS? object_value (WS object_value)*
                      | 'SelectPortrait' WS EQ WS? mappedimage_value
                      | 'ButtonImage' WS EQ WS? mappedimage_value
                      | 'UpgradeCameo1' WS EQ WS? upgrade_value
                      | 'UpgradeCameo2' WS EQ WS? upgrade_value
                      | 'UpgradeCameo3' WS EQ WS? upgrade_value
                      | 'UpgradeCameo4' WS EQ WS? upgrade_value
                      | 'UpgradeCameo5' WS EQ WS? upgrade_value
                      | 'VoiceSelect' WS EQ WS? audioevent_value
                      | 'VoiceGroupSelect' WS EQ WS? audioevent_value
                      | 'VoiceMove' WS EQ WS? audioevent_value
                      | 'VoiceAttack' WS EQ WS? audioevent_value
                      | 'VoiceEnter' WS EQ WS? audioevent_value
                      | 'VoiceFear' WS EQ WS? audioevent_value
                      | 'VoiceSelectElite' WS EQ WS? audioevent_value
                      | 'VoiceCreated' WS EQ WS? audioevent_value
                      | 'VoiceTaskUnable' WS EQ WS? audioevent_value
                      | 'VoiceTaskComplete' WS EQ WS? audioevent_value
                      | 'VoiceMeetEnemy' WS EQ WS? audioevent_value
                      | 'VoiceGarrison' WS EQ WS? audioevent_value
                      | 'VoiceDefect' WS EQ WS? audioevent_value
                      | 'VoiceAttackSpecial' WS EQ WS? audioevent_value
                      | 'VoiceAttackAir' WS EQ WS? audioevent_value
                      | 'VoiceGuard' WS EQ WS? audioevent_value
                      | 'SoundMoveStart' WS EQ WS? audioevent_value
                      | 'SoundMoveStartDamaged' WS EQ WS? audioevent_value
                      | 'SoundMoveLoop' WS EQ WS? audioevent_value
                      | 'SoundMoveLoopDamaged' WS EQ WS? audioevent_value
                      | 'SoundAmbient' WS EQ WS? audioevent_value
                      | 'SoundAmbientDamaged' WS EQ WS? audioevent_value
                      | 'SoundAmbientReallyDamaged' WS EQ WS? audioevent_value
                      | 'SoundAmbientRubble' WS EQ WS? audioevent_value
                      | 'SoundStealthOn' WS EQ WS? audioevent_value
                      | 'SoundStealthOff' WS EQ WS? audioevent_value
                      | 'SoundCreated' WS EQ WS? audioevent_value
                      | 'SoundOnDamaged' WS EQ WS? audioevent_value
                      | 'SoundOnReallyDamaged' WS EQ WS? audioevent_value
                      | 'SoundEnter' WS EQ WS? audioevent_value
                      | 'SoundExit' WS EQ WS? audioevent_value
                      | 'SoundPromotedVeteran' WS EQ WS? audioevent_value
                      | 'SoundPromotedElite' WS EQ WS? audioevent_value
                      | 'SoundPromotedHero' WS EQ WS? audioevent_value
                      | 'SoundFallingFromPlane' WS EQ WS? audioevent_value
                      | 'Scale' WS EQ WS? (INT | FLOAT)
                      | 'Geometry' WS EQ WS? (NONE | 'BOX')
                      | 'GeometryMajorRadius' WS EQ WS? (INT | FLOAT)
                      | 'GeometryMinorRadius' WS EQ WS? (INT | FLOAT)
                      | 'GeometryHeight' WS EQ WS? (INT | FLOAT)
                      | 'GeometryIsSmall' WS EQ WS? BOOLEAN
                      | 'Shadow' WS EQ WS? (NONE | 'VOLUME' | 'PROJECTION' | 'DYNAMIC_PROJECTION' | 'DIRECTIONAL_PROJECTION' | 'ALPHA_DECAL' | 'ADDITIVE_DECAL')
                      | 'ShadowSizeX' WS EQ WS? (INT | FLOAT)
                      | 'ShadowSizeY' WS EQ WS? (INT | FLOAT)
                      | 'ShadowOffsetX' WS EQ WS? (INT | FLOAT)
                      | 'ShadowOffsetY' WS EQ WS? (INT | FLOAT)
                      | 'ShadowTexture' WS EQ WS? ID
                      | 'OcclusionDelay' WS EQ WS? (INT | FLOAT)
                      ;

objectClass_addModule: ('AddModule' | 'addmodule' | 'Addmodule') NEWLINE ((WS? objectClass_modules WS? NEWLINE) | (WS | NEWLINE))* end;

objectClass_modules: objectClass_drawModules
              //      | objectClass_bodyModules
              //      | objectClass_behaviorModules
              //      | objectClass_clientModules
                   ;

objectClass_drawModules: 'Draw' WS? EQ WS? (drawModule_typeBlock1Value | drawModule_typeBlock2Value | drawModule_typeBlock3Value | drawModule_typeBlock4Value | drawModule_typeBlock5Value) end;

drawModule_typeBlock1Value: drawModule_type1Value WS ID NEWLINE (WS | NEWLINE)*;
drawModule_type1Value: ('W3DDebrisDraw' | 'W3DDefaultDraw' | 'W3DRopeDraw' | 'W3DPropDraw' | 'W3DTracerDraw');

drawModule_typeBlock2Value: drawModule_type2Value WS ID NEWLINE ((WS? drawModule_typeBlock2properties WS? NEWLINE) | (WS | NEWLINE | drawModule_conditionBlock | drawModule_defaultconditionBlock))*;
drawModule_type2Value: ('W3DModelDraw');
drawModule_typeBlock2properties: 'TrackMarks' WS EQ WS? file
	              | 'Dust' WS EQ WS? particlesystem_value
	              | 'DirtSpray' WS EQ WS? particlesystem_value
	              | 'PowerslideSpray' WS EQ WS? particlesystem_value
	              | 'AliasConditionState' WS EQ WS? drawModule_conditionStateValue (WS drawModule_conditionStateValue)*
	              | 'IgnoreConditionStates' WS EQ WS? drawModule_conditionStateValue (WS drawModule_conditionStateValue)*
	              | 'AnimationRequirePower' WS EQ WS? BOOLEAN
	              | 'MinLODRequired' WS EQ WS? BOOLEAN
	              | 'OkToChangeModelColor' WS EQ WS? BOOLEAN
	              | 'ReceivesDynamicLights' WS EQ WS? BOOLEAN
	              | 'ParticlesAttachedToAnimatedBones' WS EQ WS? BOOLEAN
	              | 'ProjectileBoneFeedbackEnabledSlots' WS EQ WS? WEAPONSLOT
	              | 'AttachToBoneInAnotherModule' WS EQ WS? ID
	              | 'InitialRecoilSpeed' WS EQ WS? INT
	              | 'MaxRecoilDistance' WS EQ WS? INT
	              | 'RecoilSettleSpeed' WS EQ WS? INT
	              | 'RecoilDamping' WS EQ WS? INT
	              | 'AnimationsRequirePower' WS EQ WS? BOOLEAN
                     | 'ExtraPublicBone' WS EQ WS? ID (WS ID)*
                     ;

drawModule_typeBlock3Value: drawModule_type3Value WS ID NEWLINE ((WS? (drawModule_typeBlock2properties | drawModule_typeBlock3properties) WS? NEWLINE) | (WS | NEWLINE | drawModule_conditionBlock | drawModule_defaultconditionBlock))*;
drawModule_type3Value: ('W3DDependencyDraw');
drawModule_typeBlock3properties: 'AttachToBoneInContainer' WS EQ WS? ID;

drawModule_typeBlock4Value: drawModule_type4Value WS ID NEWLINE ((WS? (drawModule_typeBlock2properties | drawModule_typeBlock4properties) WS? NEWLINE) | (WS | NEWLINE | drawModule_conditionBlock | drawModule_defaultconditionBlock))*;
drawModule_type4Value: ('W3DTruckDraw' | 'W3DPoliceCarDraw');
drawModule_typeBlock4properties: 'RotationDamping' WS EQ WS? (INT | FLOAT)
                               | 'TrailerRotationMultiplier' WS EQ WS? (INT | FLOAT)
                               | 'TrailerBone' WS EQ WS? ID
                               | 'CabRotationMultiplier' WS EQ WS? (INT | FLOAT)
                               | 'CabBone' WS EQ WS? ID
                               | 'PowerslideRotationAddition' WS EQ WS? (INT | FLOAT)
                               | 'TireRotationMultiplier' WS EQ WS? (INT | FLOAT)
                               | 'MidRightMidTireBone' WS EQ WS? ID
                               | 'MidLeftMidTireBone' WS EQ WS? ID
                               | 'MidRightRearTireBone' WS EQ WS? ID
                               | 'MidLeftRearTireBone' WS EQ WS? ID
                               | 'MidRightFrontTireBone' WS EQ WS? ID
                               | 'MidLeftFrontTireBone' WS EQ WS? ID
                               | 'RightRearTireBone' WS EQ WS? ID
                               | 'LeftRearTireBone' WS EQ WS? ID
                               | 'RightFrontTireBone' WS EQ WS? ID
                               | 'LeftFrontTireBone' WS EQ WS? ID
                               ;

drawModule_typeBlock5Value: drawModule_type5Value WS ID NEWLINE ((WS? (drawModule_typeBlock2properties | drawModule_typeBlock5properties) WS? NEWLINE) | (WS | NEWLINE | drawModule_conditionBlock | drawModule_defaultconditionBlock))*;
drawModule_type5Value: ('W3DTankDraw');
drawModule_typeBlock5properties: 'TreadDriveSpeedFraction' WS EQ WS? (INT | FLOAT)
                               | 'TreadPivotSpeedFraction' WS EQ WS? (INT | FLOAT)
                               | 'TreadAnimationRate' WS EQ WS? (INT | FLOAT)
                               | 'TreadDebrisLeft' WS EQ WS? ocl_value
                               | 'TreadDebrisRight' WS EQ WS? ocl_value
                               ;

drawModule_conditionBlock: 'ConditionState' WS EQ WS? drawModule_conditionStateValue (WS drawModule_conditionStateValue)* NEWLINE ((WS? drawModule_conditionStateProperties WS? NEWLINE) | (WS | NEWLINE))* end;
drawModule_defaultconditionBlock: 'DefaultConditionState' NEWLINE ((WS? drawModule_conditionStateProperties WS? NEWLINE) | (WS | NEWLINE))* end;

drawModule_conditionStateValue: ('NONE' | 'USER_1' | 'USER_2' | 'JAMMED' | 'ATTACKING' | 'WEAPONSET_CRATEUPGRADE_ONE' | 'WEAPONSET_CRATEUPGRADE_TWO' | 'ARMORSET_CRATEUPGRADE_TWO' | 'ARMORSET_CRATEUPGRADE_ONE' | 'PREORDER' | 'STUNNED' | 'STUNNED_FLAILING' | 'EXPLODED_BOUNCING' | 'EXPLODED_FLAILING' | 'CAPTURED' | 'RAISING_FLAG' | 'CONTINUOUS_FIRE_SLOW' | 'CONTINUOUS_FIRE_FAST' | 'CONTINUOUS_FIRE_MEAN' | 'SPECIAL_CHEERING' | 'ARMED' | 'RAPELLING' | 'PARACHUTING' | 'CLIMBING' | 'SPLATTED' | 'BURNED' | 'AFLAME' | 'SMOLDERING' | 'POWER_PLANT_UPGRADING' | 'POWER_PLANT_UPGRADED' | 'OVER_WATER' | 'MOVING' | 'DEPLOYED' | 'UNPACKING' | 'PACKING' | 'JETEXHAUST' | 'JETAFTERBURNER' | 'LOADED' | 'CARRYING' | 'DOCKING_ENDING' | 'DOCKING_ACTIVE' | 'DOCKING_BEGINNING' | 'DOCKING' | 'PANICKING' | 'RADAR_UPGRADED' | 'RADAR_EXTENDED' | 'CONSTRUCTION_COMPLETE' | 'ACTIVELY_CONSTRUCTING' | 'ACTIVELY_BEING_CONSTRUCTED' | 'PARTIALLY_CONSTRUCTED' | 'AWAITING_CONSTRUCTION' | 'DYING' | 'PRONE' | 'FREEFALL' | 'POST_COLLAPSE' | 'TOPPLED' | 'TURRET_ROTATE' | 'RELOADING_A' | 'BETWEEN_FIRING_SHOTS_A' | 'FIRING_A' | 'PREATTACK_A' | 'USING_WEAPON_A' | 'RELOADING_B' | 'BETWEEN_FIRING_SHOTS_B' | 'FIRING_B' | 'PREATTACK_B' | 'USING_WEAPON_B' | 'RELOADING_C' | 'BETWEEN_FIRING_SHOTS_C' | 'FIRING_C' | 'PREATTACK_C' | 'USING_WEAPON_C' | 'DOOR_4_WAITING_TO_CLOSE' | 'DOOR_4_WAITING_OPEN' | 'DOOR_4_CLOSING' | 'DOOR_4_OPENING' | 'DOOR_3_WAITING_TO_CLOSE' | 'DOOR_3_WAITING_OPEN' | 'DOOR_3_CLOSING' | 'DOOR_3_OPENING' | 'DOOR_2_WAITING_TO_CLOSE' | 'DOOR_2_WAITING_OPEN' | 'DOOR_2_CLOSING' | 'DOOR_2_OPENING' | 'DOOR_1_WAITING_TO_CLOSE' | 'DOOR_1_WAITING_OPEN' | 'DOOR_1_CLOSING' | 'DOOR_1_OPENING' | 'WEAPONSET_PLAYER_UPGRADE' | 'WEAPONSET_HERO' | 'WEAPONSET_ELITE' | 'WEAPONSET_VETERAN' | 'ENEMYNEAR' | 'REALLYDAMAGED' | 'RUBBLE' | 'DAMAGED' | 'SNOW' | 'SOLD' | 'DISGUISED' | 'NIGHT' | 'RAPPELLING' | 'SPECIAL_DAMAGED' | 'BACKCRUSHED' | 'FRONTCRUSHED' | 'SECOND_LIFE' | 'RIDER1' | 'RIDER2' | 'RIDER3' | 'RIDER4' | 'RIDER5' | 'RIDER6' | 'RIDER7' | 'RIDER8' | 'PRISTINE' | 'RIGHT_TO_CENTER' | 'CENTER_TO_RIGHT' | 'LEFT_TO_CENTER' | 'CENTER_TO_LEFT' | 'DOWN_DEFAULT' | 'AWAITING_CONSTRUCTION' | 'PARTIALLY_CONSTRUCTED' | 'ACTIVELY_BEING_CONSTRUCTED' | 'UP_DAY' | 'UP_NIGHT' | 'UP_SNOW' | 'UP_SNOWNIGHT' | 'RADAR_EXTENDING' | 'GARRISONED');

drawModule_conditionStateProperties: 'Model' WS EQ WS? (NONE | ID)
                                   | 'WeaponHideShowBone' WS EQ WS? WEAPONSLOT (NONE | ID)
                                   | 'AnimationSpeedFactorRange' WS EQ WS? (INT | FLOAT) WS (INT | FLOAT)
                                   | 'AnimationMode' WS EQ WS? (NONE | MANUAL | 'ONCE' | 'ONCE_BACKWARDS' | 'LOOP' | 'LOOP_BACKWARDS' | 'PING_PONG' | 'PING_PONG_BACKWARDS')
                                   | 'TransitionKey' WS EQ WS? (NONE | ID)
                                   | 'Flags' WS EQ WS? ('START_FRAME_FIRST' | 'START_FRAME_LAST' | 'ADJUST_HEIGHT_BY_CONSTRUCTION_PERCENT')
                                   | 'WaitForStateToFinishIfPossible' WS EQ WS? 'TransitionFinishBeforeSwitch'
                                   | 'Turret' WS EQ WS? (NONE | ID)
                                   | 'TurretArtAngle' WS EQ WS? INT
                                   | 'TurretPitch' WS EQ WS? INT
                                   | 'TurretArtPitch'  WS EQ WS? INT
                                   | 'AltTurret' WS EQ WS? (NONE | ID)
                                   | 'AltTurretArtAngle' WS EQ WS? INT
                                   | 'AltTurretPitch' WS EQ WS? INT
                                   | 'AltTurretArtPitch' WS EQ WS? INT
                                   | 'ShowSubObject' WS EQ WS? (NONE | ID)
                                   | 'HideSubObject' WS EQ WS? (NONE | ID)
                                   | 'WeaponRecoilBone' WS EQ WS? WEAPONSLOT (NONE | ID)
                                   | 'WeaponFireFXBone' WS EQ WS? WEAPONSLOT (NONE | ID)
                                   | 'WeaponMuzzleFlash' WS EQ WS? WEAPONSLOT (NONE | ID)
                                   | 'WeaponLaunchBone' WS EQ WS? WEAPONSLOT (NONE | ID)
                                   | 'Animation' WS EQ WS? (NONE | ID) '.' (NONE | ID)
                                   | 'IdleAnimation' WS EQ WS? (NONE | ID) '.' (NONE | ID) (WS INT WS INT)?
                                   | 'ParticleSysBone' WS EQ WS? particlesystem_value WS (NONE | ID)
                                   ;

// Rank Class
rankClass: 'Rank' WS INT NEWLINE ((WS? rank_properties WS? NEWLINE) | (WS | NEWLINE))* end;

rank_properties: 'RankName' WS? EQ WS? ('INI:RankLevel1' | 'INI:RankLevel2' | 'INI:RankLevel3' | 'INI:RankLevel4' | 'INI:RankLevel5' | 'INI:RankLevel6' | 'INI:RankLevel7' | 'INI:RankLevel8')
               | 'SkillPointsNeeded' WS? EQ WS? INT
               | 'SciencesGranted' WS? EQ WS? science_value (WS? science_value)*
               | 'SciencePurchasePointsGranted' WS? EQ WS? INT
               ;

// Sciecnce Class
scienceClass: 'Science' WS ID NEWLINE ((WS? science_properties WS? NEWLINE) | (WS | NEWLINE))* end;

science_properties: 'PrerequisiteSciences' WS? EQ WS? science_value (WS science_value)*
                  | 'SciencePurchasePointCost' WS EQ WS? INT
                  | 'IsGrantable' WS EQ WS? BOOLEAN
                  | 'DisplayName' WS EQ WS? ID
                  | 'Description' WS EQ WS? ID
                  ;

// SpecialPower Class
specialPowerClass: 'SpecialPower' WS ID NEWLINE ((WS? specialPower_properties WS? NEWLINE) | (WS | NEWLINE))* end;


specialPower_properties: 'Enum' WS EQ WS? ('SPECIAL_INVALID'|'SPECIAL_DAISY_CUTTER'||'SPECIAL_PARADROP_AMERICA'||'SPECIAL_CARPET_BOMB'||'SPECIAL_CLUSTER_MINES'||'SPECIAL_EMP_PULSE'||'SPECIAL_NAPALM_STRIKE'||'SPECIAL_CASH_HACK'||'SPECIAL_NEUTRON_MISSILE'||'SPECIAL_SPY_SATELLITE'||'SPECIAL_DEFECTOR'||'SPECIAL_TERROR_CELL'||'SPECIAL_AMBUSH'||'SPECIAL_BLACK_MARKET_NUKE'||'SPECIAL_ANTHRAX_BOMB'||'SPECIAL_SCUD_STORM'||'SPECIAL_DEMORALIZE_OBSOLETE'||'SPECIAL_CRATE_DROP'||'SPECIAL_A10_THUNDERBOLT_STRIKE'||'SPECIAL_DETONATE_DIRTY_NUKE'||'SPECIAL_ARTILLERY_BARRAGE'||'SPECIAL_MISSILE_DEFENDER_LASER_GUIDED_MISSILES'||'SPECIAL_REMOTE_CHARGES'||'SPECIAL_TIMED_CHARGES'||'SPECIAL_HELIX_NAPALM_BOMB'||'SPECIAL_HACKER_DISABLE_BUILDING'||'SPECIAL_TANKHUNTER_TNT_ATTACK'||'SPECIAL_BLACKLOTUS_CAPTURE_BUILDING'||'SPECIAL_BLACKLOTUS_DISABLE_VEHICLE_HACK'||'SPECIAL_BLACKLOTUS_STEAL_CASH_HACK'||'SPECIAL_INFANTRY_CAPTURE_BUILDING'||'SPECIAL_RADAR_VAN_SCAN'||'SPECIAL_SPY_DRONE'||'SPECIAL_DISGUISE_AS_VEHICLE'||'SPECIAL_BOOBY_TRAP'||'SPECIAL_REPAIR_VEHICLES'||'SPECIAL_PARTICLE_UPLINK_CANNON'||'SPECIAL_CASH_BOUNTY'||'SPECIAL_CHANGE_BATTLE_PLANS'||'SPECIAL_CIA_INTELLIGENCE'||'SPECIAL_CLEANUP_AREA'||'SPECIAL_LAUNCH_BAIKONUR_ROCKET'||'SPECIAL_SPECTRE_GUNSHIP'||'SPECIAL_GPS_SCRAMBLER'||'SPECIAL_FRENZY'||'SPECIAL_SNEAK_ATTACK'||'SPECIAL_CHINA_CARPET_BOMB'||'EARLY_SPECIAL_CHINA_CARPET_BOMB'||'SPECIAL_LEAFLET_DROP'||'EARLY_SPECIAL_LEAFLET_DROP'||'EARLY_SPECIAL_FRENZY'||'SPECIAL_COMMUNICATIONS_DOWNLOAD'||'EARLY_SPECIAL_REPAIR_VEHICLES'||'SPECIAL_TANK_PARADROP'||'SUPW_SPECIAL_PARTICLE_UPLINK_CANNON'||'AIRF_SPECIAL_DAISY_CUTTER'||'NUKE_SPECIAL_CLUSTER_MINES'||'NUKE_SPECIAL_NEUTRON_MISSILE'||'AIRF_SPECIAL_A10_THUNDERBOLT_STRIKE'||'AIRF_SPECIAL_SPECTRE_GUNSHIP'||'INFA_SPECIAL_PARADROP_AMERICA'||'SLTH_SPECIAL_GPS_SCRAMBLER'||'AIRF_SPECIAL_CARPET_BOMB'||'SUPR_SPECIAL_CRUISE_MISSILE'||'LAZR_SPECIAL_PARTICLE_UPLINK_CANNON'||'SUPW_SPECIAL_NEUTRON_MISSILE'||'SPECIAL_BATTLESHIP_BOMBARDMENT')
                       | 'ReloadTime' WS EQ WS? INT
                       | 'RequiredScience' WS EQ WS? science_value
                       | 'PublicTimer' WS EQ WS? BOOLEAN
                       | 'SharedSyncedTimer' WS EQ WS? BOOLEAN
                       | 'ViewObjectDuration' WS EQ WS? INT
                       | 'ViewObjectRange' WS EQ WS? INT
                       | 'RadiusCursorRadius' WS EQ WS? INT
                       | 'ShortcutPower' WS EQ WS? BOOLEAN
                       | 'AcademyClassify' WS EQ WS? academyclassifier_value
                       | 'InitiateSound' WS EQ WS? audioevent_value
                       | 'InitiateAtLocationSound' WS EQ WS? audioevent_value
                       | 'DetectionTime' WS EQ WS? INT
                       ;

// Sound Effect Class
soundEffectClasses: audioEventClass | dialogEventClass;

audioEventClass: 'AudioEvent' WS ID NEWLINE ((WS? audioevent_properties WS? NEWLINE) | (WS | NEWLINE))* end;
dialogEventClass: 'DialogEvent' WS ID NEWLINE ((WS? audioevent_properties WS? NEWLINE) | (WS | NEWLINE))* end;

audioevent_properties: 'Filename' WS? EQ WS? file
                     | 'MinVolume' WS? EQ WS? INT
                     | 'LoopCount' WS? EQ WS? INT
                     | 'Control' WS? EQ WS? ID
                     | 'Priority' WS? EQ WS? ('lowest' | 'LOWEST' | 'low' | 'LOW' | 'normal' | 'NORMAL' | 'high' | 'HIGH' | 'critical' | 'CRITICAL' | NONE) (WS ('lowest' | 'LOWEST' | 'low' | 'LOW' | 'normal' | 'NORMAL' | 'high' | 'HIGH' | 'critical' | 'CRITICAL' | NONE))*
                     | 'Control' WS? EQ WS? ('loop' | 'random' | 'all' | 'postdelay' | 'interrupt' | NONE) (WS ('loop' | 'random' | 'all' | 'postdelay' | 'interrupt' | NONE))*
                     | 'Sounds' WS? EQ WS? ID (WS ID)*
                     | 'SoundsNight' WS? EQ WS? ID (WS ID)*
                     | 'SoundsEvening' WS? EQ WS? ID (WS ID)*
                     | 'SoundsMorning' WS? EQ WS? ID (WS ID)*
                     | 'Attack' WS? EQ WS? ID (WS ID)*
                     | 'Delay' WS? EQ WS? INT WS INT
                     | 'Decay' WS? EQ WS? ID (WS ID)*
                     | 'Volume' WS? EQ WS? INT
                     | 'MinRange' WS? EQ WS? INT
                     | 'MaxRange' WS? EQ WS? INT
                     | 'Limit' WS? EQ WS? INT
                     | 'Type' WS? EQ WS? ('ui' | 'world' | 'shrouded' | 'global' | 'voice' | 'player' | 'allies' | 'enemies' | 'everyone' | NONE) (WS ('ui' | 'world' | 'shrouded' | 'global' | 'voice' | 'player' | 'allies' | 'enemies' | 'everyone' | NONE))*
                     | 'PitchShift' WS? EQ WS? INT WS INT
                     | 'VolumeShift' WS? EQ WS? INT
                     | 'LowPassCutoff' WS? EQ WS? INT
                     ;

// ObjectCreationList Class
objectCreationListClass: 'ObjectCreationList' WS ID NEWLINE ((WS? objectCreationListClass_blocks WS? NEWLINE) | (WS | NEWLINE))* end;

objectCreationListClass_blocks: objectCreationListClass_createDebrisBlock
                              | objectCreationListClass_createObjectBlock
                              | objectCreationListClass_fireWeaponBlock
                              | objectCreationListClass_deliveryPayloadBlock
                              | objectCreationListClass_createDebrisBlock
                              | objectCreationListClass_applyRandomForceBlock
                              | objectCreationListClass_attackBlock
                              ;

objectCreationListClass_createDebrisBlock: 'CreateDebris' NEWLINE ((WS? objectCreationListClass_createDebrisProperties WS? NEWLINE) | (WS | NEWLINE))* end;

objectCreationListClass_createDebrisProperties: 'ModelNames' WS EQ WS? ID (WS ID)*
                                              | 'AnimationSet' WS EQ WS? ID '.' ID (WS ID '.' ID)*
                                              | 'FXFinal' WS EQ WS? fxlist_value
                                              | 'OkToChangeModelColor' WS EQ WS? BOOLEAN
                                              | 'IgnorePrimaryObstacle' WS EQ WS? BOOLEAN
                                              | 'Mass' WS EQ WS? (INT | FLOAT)
                                              | 'ExtraBounciness' WS EQ WS? (INT | FLOAT)
                                              | 'ExtraFriction' WS EQ WS? (INT | FLOAT)
                                              | 'Count' WS EQ WS? (INT | FLOAT)
                                              | 'Mass' WS EQ WS? (INT | FLOAT)
                                              | 'Disposition' WS EQ WS? disposition_value (WS disposition_value)*
                                              | 'DispositionIntensity' WS EQ WS? (INT | FLOAT)
                                              | 'SpinRate' WS EQ WS? (INT | FLOAT)
                                              | 'Offset' WS EQ WS? coord3D
                                              | 'MinLifetime' WS EQ WS? (INT | FLOAT)
                                              | 'MaxLifetime' WS EQ WS? (INT | FLOAT)
                                              | 'MinForcePitch' WS EQ WS? (INT | FLOAT)
                                              | 'MaxForcePitch' WS EQ WS? (INT | FLOAT)
                                              | 'MinForceMagnitude' WS EQ WS? (INT | FLOAT)
                                              | 'MaxForceMagnitude' WS EQ WS? (INT | FLOAT)
                                              | 'YawRate' WS EQ WS? (INT | FLOAT)
                                              | 'PitchRate' WS EQ WS? (INT | FLOAT)
                                              | 'RollRate' WS EQ WS? (INT | FLOAT)
                                              | 'ParticleSystem' WS EQ WS? particlesystem_value
                                              | 'BounceSound' WS EQ WS? audioevent_value
                                              | 'OrientInForceDirection' WS EQ WS? BOOLEAN
                                              ;

disposition_value: (NONE | 'SEND_IT_FLYING' | 'SEND_IT_OUT' | 'SEND_IT_UP' | 'LIKE_EXISTING' | 'INHERIT_VELOCITY' | 'ON_GROUND_ALIGNED' | 'RANDOM_FORCE' | 'FLOATING');

objectCreationListClass_createObjectBlock: 'CreateObject' NEWLINE ((WS? objectCreationListClass_createObjectProperties WS? NEWLINE) | (WS | NEWLINE))* end;

objectCreationListClass_createObjectProperties: 'ObjectNames' WS EQ WS? object_value (WS object_value)*
                                              | 'Disposition' WS EQ WS? disposition_value (WS disposition_value)*
                                              | 'PreserveLayer' WS EQ WS? BOOLEAN
                                              | 'Offset' WS EQ WS? coord3D
                                              | 'DispositionIntensity' WS EQ WS? (INT | FLOAT)
                                              | 'Count' WS EQ WS? INT
                                              | 'IgnorePrimaryObstacle' WS EQ WS? BOOLEAN
                                              | 'RequiresLivePlayer' WS EQ WS? BOOLEAN
                                              | 'MinForcePitch' WS EQ WS? (INT | FLOAT)
                                              | 'MaxForcePitch' WS EQ WS? (INT | FLOAT)
                                              | 'MinForceMagnitude' WS EQ WS? (INT | FLOAT)
                                              | 'MaxForceMagnitude' WS EQ WS? (INT | FLOAT)
                                              | 'MinLifetime' WS EQ WS? (INT | FLOAT)
                                              | 'MaxLifetime' WS EQ WS? (INT | FLOAT)
                                              | 'SpinRate' WS EQ WS? (INT | FLOAT)
                                              | 'ExtraBounciness' WS EQ WS? (INT | FLOAT)
                                              | 'ExtraFriction' WS EQ WS? (INT | FLOAT)
                                              | 'ContainInsideSourceObject' WS EQ WS? BOOLEAN
                                              | 'InheritsVeterancy' WS EQ WS? BOOLEAN
                                              | 'InvulnerableTime' WS EQ WS? INT
                                              | 'PutInContainer' WS EQ WS? object_value
                                              | 'SpreadFormation' WS EQ WS? BOOLEAN
                                              | 'MinDistanceAFormation' WS EQ WS? (INT | FLOAT)
                                              | 'MinDistanceBFormation' WS EQ WS? (INT | FLOAT)
                                              | 'MaxDistanceFormation' WS EQ WS? (INT | FLOAT)
                                              | 'FadeIn' WS EQ WS? BOOLEAN
                                              | 'FadeTime' WS EQ WS? INT
                                              | 'FadeSound' WS EQ WS? audioevent_value
                                              | 'DiesOnBadLand' WS EQ WS? BOOLEAN
                                              | 'SkipIfSignificantlyAirborne' WS EQ WS? BOOLEAN
                                              | 'RollRate' WS EQ WS? (INT | FLOAT)
                                              | 'PitchRate' WS EQ WS? (INT | FLOAT)
                                              | 'YawRate' WS EQ WS? (INT | FLOAT)
                                              ;

objectCreationListClass_applyRandomForceBlock: 'ApplyRandomForce' NEWLINE ((WS? objectCreationListClass_applyRandomForceProperties WS? NEWLINE) | (WS | NEWLINE))* end;

objectCreationListClass_applyRandomForceProperties: 'MinForceMagnitude' WS EQ WS? (INT | FLOAT)
                                                  | 'MaxForceMagnitude' WS EQ WS? (INT | FLOAT)
                                                  | 'MinForcePitch' WS EQ WS? (INT | FLOAT)
                                                  | 'MaxForcePitch' WS EQ WS? (INT | FLOAT)
                                                  | 'SpinRate' WS EQ WS? (INT | FLOAT)
                                                  ;

objectCreationListClass_attackBlock: 'Attack' NEWLINE ((WS? objectCreationListClass_attackProperties WS? NEWLINE) | (WS | NEWLINE))* end;

objectCreationListClass_attackProperties: objectCreationListClass_deliveryDecal
                                        | weaponslot_property
                                        | 'NumberOfShots' WS EQ WS? INT
                                        | 'DeliveryDecalRadius' WS EQ WS? INT
                                        ;

objectCreationListClass_fireWeaponBlock: 'FireWeapon' NEWLINE ((WS? objectCreationListClass_fireWeaponProperties WS? NEWLINE) | (WS | NEWLINE))* end;

objectCreationListClass_fireWeaponProperties: 'Weapon' WS EQ WS? weapon_value ;

objectCreationListClass_deliveryPayloadBlock: 'DeliverPayload' NEWLINE ((WS? objectCreationListClass_deliveryPayloadProperties WS? NEWLINE) | (WS | NEWLINE))* end;

objectCreationListClass_deliveryPayloadProperties: objectCreationListClass_deliveryDecal
                                                 | 'Transport' WS EQ WS? object_value
                                                 | 'StartAtPreferredHeight' WS EQ WS? BOOLEAN
                                                 | 'StartAtMaxSpeed' WS EQ WS? BOOLEAN
                                                 | 'MaxAttempts' WS EQ WS? INT
                                                 | 'DropOffset' WS EQ WS? coord3D
                                                 | 'Payload' WS EQ WS? object_value
                                                 | 'DeliveryDistance' WS EQ WS? (INT | FLOAT)
                                                 | 'DeliveryDecalRadius' WS EQ WS? (INT | FLOAT)
                                                 | 'PreOpenDistance' WS EQ WS? INT
                                                 | 'FormationSize' WS EQ WS? INT
                                                 | 'FormationSpacing' WS EQ WS? (INT | FLOAT)
                                                 | 'VisibleItemsDroppedPerInterval' WS EQ WS? INT
                                                 | 'VisibleDropBoneBaseName' WS EQ WS? ID
                                                 | 'VisibleSubObjectBaseName' WS EQ WS? ID
                                                 | 'VisibleNumBones' WS EQ WS? INT
                                                 | 'VisiblePayloadTemplateName' WS EQ WS? object_value
                                                 | 'VisiblePayloadWeaponTemplate' WS EQ WS? weapon_value
                                                 | 'WeaponErrorRadius' WS EQ WS? INT
                                                 | 'DelayDeliveryMax' WS EQ WS? INT
                                                 | 'InheritTransportVelocity' WS EQ WS? BOOLEAN
                                                 | 'ExitPitchRate' WS EQ WS? INT
                                                 | 'SelfDestructObject' WS EQ WS? BOOLEAN
                                                 | 'DropDelay' WS EQ WS? INT
                                                 | 'Payload' WS EQ WS? object_value WS INT
                                                 | 'FireWeapon' WS EQ WS? BOOLEAN
                                                 | 'WeaponConvergenceFactor' WS EQ WS? (INT | FLOAT)
                                                 | 'DiveStartDistance' WS EQ WS? INT
                                                 | 'DiveEndDistance' WS EQ WS? INT
                                                 | 'StrafingWeaponSlot' WS EQ WS? WEAPONSLOT
                                                 | 'StrafeLength' WS EQ WS? INT
                                                 | 'StrafeWeaponFX' WS EQ WS? fxlist_value
                                                 | 'ParachuteDirectly' WS EQ WS? BOOLEAN
                                                 | 'PutInContainer' WS EQ WS? object_value
                                                 | 'DropVariance' WS EQ WS? coord3D
                                                 ;

objectCreationListClass_deliveryDecal: 'DeliveryDecal' NEWLINE
                                       (WS? ('Texture' WS EQ WS? ID
                                     | 'Style' WS EQ WS? ID
                                     | 'OpacityMin' WS EQ WS? PERCENT
                                     | 'OpacityMax' WS EQ WS? PERCENT
                                     | 'OpacityThrobTime' WS EQ WS? INT
                                     | 'Color' WS EQ WS? RGBA
                                     | 'OnlyVisibleToOwningPlayer' WS EQ WS? BOOLEAN) WS? NEWLINE)*
                                     end
                                     ;

// ParticleSystem Class
particleSystemClass: 'ParticleSystem' WS ID NEWLINE ((WS? particleSystemClass_properties WS? NEWLINE) | (WS | NEWLINE))* end;

particleSystemClass_properties: 'Priority' WS EQ WS? particleSystemClass_priorityValue
							  | 'IsOneShot' WS EQ WS? BOOLEAN
							  | 'Shader' WS EQ WS? particleSystemClass_shaderValue
							  | 'Type' WS EQ WS? particleSystemClass_typeValue
							  | 'ParticleName' WS? EQ WS? file
							  | 'AngleZ' WS EQ WS? (INT | FLOAT) WS (INT | FLOAT)
							  | 'AngularRateZ' WS EQ WS? (INT | FLOAT) WS (INT | FLOAT)
							  | 'AngularDamping' WS EQ WS? (INT | FLOAT) WS (INT | FLOAT)
							  | 'VelocityDamping' WS EQ WS? (INT | FLOAT) WS (INT | FLOAT)
							  | 'Gravity' WS EQ WS? (INT | FLOAT)
							  | 'Lifetime' WS EQ WS? (INT | FLOAT) WS (INT | FLOAT)
							  | 'SystemLifetime' WS EQ WS? (INT | FLOAT)
							  | 'Size' WS EQ WS? (INT | FLOAT) WS (INT | FLOAT)
							  | 'StartSizeRate' WS EQ WS? (INT | FLOAT) WS (INT | FLOAT)
							  | 'SizeRate' WS EQ WS? (INT | FLOAT) WS (INT | FLOAT)
							  | 'SizeRateDamping' WS EQ WS? (INT | FLOAT) WS (INT | FLOAT)
							  | 'SlaveSystem' WS EQ WS? particlesystem_value
							  | 'SlavePosOffset' WS EQ WS? coord3D
							  | 'PerParticleAttachedSystem' WS EQ WS? particlesystem_value
							  | 'Alpha1' WS EQ WS? (INT | FLOAT) WS (INT | FLOAT) WS (INT | FLOAT)
							  | 'Alpha2' WS EQ WS? (INT | FLOAT) WS (INT | FLOAT) WS (INT | FLOAT)
							  | 'Alpha3' WS EQ WS? (INT | FLOAT) WS (INT | FLOAT) WS (INT | FLOAT)
							  | 'Alpha4' WS EQ WS? (INT | FLOAT) WS (INT | FLOAT) WS (INT | FLOAT)
							  | 'Alpha5' WS EQ WS? (INT | FLOAT) WS (INT | FLOAT) WS (INT | FLOAT)
							  | 'Alpha6' WS EQ WS? (INT | FLOAT) WS (INT | FLOAT) WS (INT | FLOAT)
							  | 'Alpha7' WS EQ WS? (INT | FLOAT) WS (INT | FLOAT) WS (INT | FLOAT)
							  | 'Alpha8' WS EQ WS? (INT | FLOAT) WS (INT | FLOAT) WS (INT | FLOAT)
							  | 'Color1' WS EQ WS? RGB WS (INT | FLOAT)
							  | 'Color2' WS EQ WS? RGB WS (INT | FLOAT)
							  | 'Color3' WS EQ WS? RGB WS (INT | FLOAT)
							  | 'Color4' WS EQ WS? RGB WS (INT | FLOAT)
							  | 'Color5' WS EQ WS? RGB WS (INT | FLOAT)
							  | 'Color6' WS EQ WS? RGB WS (INT | FLOAT)
							  | 'Color7' WS EQ WS? RGB WS (INT | FLOAT)
							  | 'Color8' WS EQ WS? RGB WS (INT | FLOAT)
							  | 'ColorScale' WS EQ WS? (INT | FLOAT) WS (INT | FLOAT)
							  | 'BurstDelay' WS EQ WS? (INT | FLOAT) WS (INT | FLOAT)
							  | 'BurstCount' WS EQ WS? (INT | FLOAT) WS (INT | FLOAT)
							  | 'InitialDelay' WS EQ WS? (INT | FLOAT) WS (INT | FLOAT)
							  | 'DriftVelocity' WS EQ WS? coord3D
							  | 'VelocityType' WS EQ WS? particleSystemClass_velocityTypeValue
							  | 'VelOutward' WS EQ WS? (INT | FLOAT) WS (INT | FLOAT)
							  | 'VelOutwardOther' WS EQ WS? (INT | FLOAT) WS (INT | FLOAT)
							  | 'VelOrthoX' WS EQ WS? (INT | FLOAT) WS (INT | FLOAT)
							  | 'VelOrthoY' WS EQ WS? (INT | FLOAT) WS (INT | FLOAT)
							  | 'VelOrthoZ' WS EQ WS? (INT | FLOAT) WS (INT | FLOAT)
							  | 'VolCylinderRadius' WS EQ WS? (INT | FLOAT)
							  | 'VolCylinderLength' WS EQ WS? (INT | FLOAT)
							  | 'VolLineStart' WS EQ WS? coord3D
							  | 'VolLineEnd' WS EQ WS? coord3D
							  | 'VelSpherical' WS EQ WS?(INT | FLOAT) WS (INT | FLOAT)
							  | 'VolumeType' WS EQ WS? particleSystemClass_volumeTypeValue
							  | 'VolSphereRadius' WS EQ WS? (INT | FLOAT)
							  | 'VelHemispherical' WS EQ WS (INT | FLOAT) WS (INT | FLOAT)
							  | 'VelCylindricalRadial' WS EQ WS? (INT | FLOAT) WS (INT | FLOAT)
							  | 'VelCylindricalNormal' WS EQ WS? (INT | FLOAT) WS (INT | FLOAT)
							  | 'VolBoxHalfSize' WS EQ WS? coord3D
							  | 'IsHollow' WS EQ WS? BOOLEAN
							  | 'IsGroundAligned' WS EQ WS? BOOLEAN
							  | 'IsEmitAboveGroundOnly' WS EQ WS? BOOLEAN
							  | 'IsParticleUpTowardsEmitter' WS EQ WS? BOOLEAN
							  | 'WindMotion' WS EQ WS? particleSystemClass_windTypeValue
							  | 'WindAngleChangeMin' WS EQ WS? (INT | FLOAT)
							  | 'WindAngleChangeMax' WS EQ WS? (INT | FLOAT)
							  | 'WindPingPongStartAngleMin' WS EQ WS? (INT | FLOAT)
							  | 'WindPingPongStartAngleMax' WS EQ WS? (INT | FLOAT)
							  | 'WindPingPongEndAngleMin' WS EQ WS? (INT | FLOAT)
							  | 'WindPingPongEndAngleMax' WS EQ WS? (INT | FLOAT)
							  ;

particleSystemClass_priorityValue: (NONE | 'WEAPON_EXPLOSION' | 'SCORCHMARK' | 'DUST_TRAIL' | 'BUILDUP' | 'DEBRIS_TRAIL' | 'UNIT_DAMAGE_FX' | 'DEATH_EXPLOSION' | 'SEMI_CONSTANT' | 'CONSTANT' | 'WEAPON_TRAIL' | 'AREA_EFFECT' | 'CRITICAL' | 'ALWAYS_RENDER');
particleSystemClass_shaderValue: (NONE | 'ADDITIVE' | 'ALPHA' | 'ALPHA_TEST' | 'MULTIPLY');
particleSystemClass_typeValue: (NONE | 'PARTICLE' | 'DRAWABLE' | 'STREAK' | 'VOLUME_PARTICLE' | 'SMUDGE');
particleSystemClass_velocityTypeValue: (NONE | 'ORTHO' | 'SPHERICAL' | 'HEMISPHERICAL' | 'CYLINDRICAL' | 'OUTWARD');
particleSystemClass_volumeTypeValue: (NONE | 'POINT' | 'LINE' | 'BOX' | 'SPHERE' | 'CYLINDER');
particleSystemClass_windTypeValue: (NONE | 'Unused' | 'PingPong' | 'Circular');

// PlayerTemplate Class
playerTemplateClass: 'PlayerTemplate' WS factionEx_value NEWLINE ((WS? playerTemplateClass_properties WS? NEWLINE) | (WS | NEWLINE))* end;

playerTemplateClass_properties: 'Side' WS EQ WS? faction_value
							  | 'BaseSide' WS EQ WS? ('USA' | 'China' | 'GLA')
							  | 'PlayableSide' WS EQ WS? BOOLEAN
							  | 'StartMoney' WS EQ WS? INT
							  | 'PreferredColor' WS EQ WS? RGB
							  | 'IsObserver' WS EQ WS? BOOLEAN
							  | 'IntrinsicSciences' WS EQ WS? science_value (WS science_value)*
							  | 'DisplayName' WS EQ WS? ID
							  | 'ScoreScreenMusic' WS EQ WS? ID
							  | 'ScoreScreenImage' WS EQ WS? mappedimage_value
							  | 'OldFaction' WS EQ WS? BOOLEAN
							  | 'LoadScreenImage' WS EQ WS? mappedimage_value
							  | 'LoadScreenMusic' WS EQ WS? ID
							  | 'BeaconName' WS EQ WS? object_value
							  | 'SideIconImage' WS EQ WS? mappedimage_value
							  | 'PurchaseScienceCommandSetRank1' WS EQ WS? commandSet_value
							  | 'PurchaseScienceCommandSetRank3' WS EQ WS? commandSet_value
							  | 'PurchaseScienceCommandSetRank8' WS EQ WS? commandSet_value
							  | 'SpecialPowerShortcutCommandSet' WS EQ WS? commandSet_value
							  | 'SpecialPowerShortcutWinName' WS EQ WS? file
							  | 'SpecialPowerShortcutButtonCount' WS EQ WS? INT
							  | 'StartingBuilding' WS EQ WS? object_value
							  | 'StartingUnit0' WS EQ WS? object_value
							  | 'FlagWaterMark' WS EQ WS? mappedimage_value
							  | 'EnabledImage' WS EQ WS? mappedimage_value
							  | 'SideIconImage' WS EQ WS? mappedimage_value
							  | 'GeneralImage' WS EQ WS? mappedimage_value
							  | 'ArmyTooltip' WS EQ WS? ID
							  | 'Features' WS EQ WS? ID
							  | 'MedallionRegular' WS EQ WS? mappedimage_value
							  | 'MedallionHilite' WS EQ WS? mappedimage_value
							  | 'MedallionHilite' WS EQ WS? mappedimage_value
							  | 'MedallionSelect' WS EQ WS? mappedimage_value
							  ;

// Upgrade Class
upgradeClass: 'Upgrade' WS ID NEWLINE ((WS? upgrade_properties WS? NEWLINE) | (WS | NEWLINE))* end;

upgrade_properties: 'DisplayName' WS EQ WS? ID
                  | 'Type' WS EQ WS? ('PLAYER' | 'OBJECT' | NONE)
                  | 'UnitSpecificSound' WS EQ WS? audioevent_value
                  | 'BuildTime' WS EQ WS? FLOAT
                  | 'BuildCost' WS EQ WS? INT
                  | 'ButtonImage' WS EQ WS? mappedimage_value
                  | 'ResearchSound' WS EQ WS? audioevent_value
                  | 'AcademyClassify' WS EQ WS? academyclassifier_value
                  ;

academyclassifier_value: ('ACT_NONE' | 'ACT_UPGRADE_RADAR' | 'ACT_SUPERPOWER' | NONE);

// Weapon Class
weaponClass: 'Weapon' WS ID NEWLINE ((WS? weapon_properties WS? NEWLINE) | (WS | NEWLINE))* end;

weapon_properties: weapon_damagetype_property
                 | weapon_deathtype_property
                 | weapon_damageaffects_property
                 | weapon_weaponbonus_property
                 | weapon_lasterbone_property
                 | 'PrimaryDamage' WS EQ WS? (INT | FLOAT)
                 | 'PrimaryDamageRadius' WS EQ WS?  (INT | FLOAT)
                 | 'SecondaryDamage' WS EQ WS?  (INT | FLOAT)
                 | 'SecondaryDamageRadius' WS EQ WS?  (INT | FLOAT)
                 | 'AttackRange' WS EQ WS?  (INT | FLOAT)
                 | 'ScatterRadius' WS EQ WS? (INT | FLOAT)
                 | 'AcceptableAimDelta' WS EQ WS? (INT | FLOAT)
                 | 'LeechRangeWeapon' WS EQ WS? BOOLEAN
                 | 'AntiSmallMissile' WS EQ WS? BOOLEAN
                 | 'AntiBallisticMissile' WS EQ WS? BOOLEAN
                 | 'AntiProjectile' WS EQ WS? BOOLEAN
                 | 'WeaponSpeed' WS EQ WS? (INT | FLOAT)
                 | 'MinimumAttackRange' WS EQ WS? (INT | FLOAT)
                 | 'ProjectileExhaust' WS EQ WS? particlesystem_value
                 | 'VeterancyProjectileExhaust' WS EQ WS? VETERENCY WS particlesystem_value
                 | 'ProjectileObject' WS EQ WS? object_value
                 | 'DamageDealtAtSelfPosition' WS EQ WS? BOOLEAN
                 | 'DelayBetweenShots' WS EQ WS? ((INT | FLOAT) | (MIN WS MAX))
                 | 'ClipSize' WS EQ WS? INT
                 | 'ClipReloadTime' WS EQ WS? (INT | FLOAT)
                 | 'AutoReloadsClip' WS EQ WS? (BOOLEAN | 'RETURN_TO_BASE')
                 | 'FireFX' WS EQ WS? fxlist_value
                 | 'DamageStatusType' WS EQ WS? weapon_weaponbonus_condition_value 
                 | 'VeterancyFireFX' WS EQ WS? VETERENCY WS fxlist_value
                 | 'ProjectileDetonationFX' WS EQ WS? fxlist_value
                 | 'FireSound' WS EQ WS? audioevent_value
                 | 'FireSoundLoopTime' WS EQ WS? INT
                 | 'ScatterRadiusVsInfantry' WS EQ WS? (INT | FLOAT)
                 | 'MinTargetPitch' WS EQ WS? INT
                 | 'MaxTargetPitch' WS EQ WS? INT
                 | 'WeaponRecoil' WS EQ WS? (INT | FLOAT)
                 | 'ProjectileCollidesWith' WS EQ WS? projectileColide_value (WS? projectileColide_value)*
                 | 'ShotsPerBarrel' WS EQ WS? INT
                 | 'AntiAirborneVehicle' WS EQ WS? BOOLEAN
                 | 'AntiAirborneInfantry' WS EQ WS? BOOLEAN
                 | 'AntiGround' WS EQ WS? BOOLEAN
                 | 'LaserName' WS EQ WS? ID
                 | 'PreAttackDelay' WS EQ WS? (INT | FLOAT)
                 | 'PreAttackType' WS EQ WS? (NONE | 'PER_ATTACK' | 'PER_CLIP' | 'PER_SHOT')
                 | 'ContinuousFireOne' WS EQ WS? (INT | FLOAT)
                 | 'ContinuousFireTwo' WS EQ WS? (INT | FLOAT)
                 | 'ContinuousFireCoast' WS EQ WS? (INT | FLOAT)
                 | 'AutoReloadWhenIdle' WS EQ WS? (INT | FLOAT)
                 | 'ScatterTarget' WS EQ WS? XCOORD WS YCOORD
                 | 'ScatterTargetScalar' WS EQ WS? (INT | FLOAT)
                 | 'FireOCL' WS EQ WS? ocl_value
                 | 'ProjectileDetonationOCL' WS EQ WS? ocl_value
                 | 'ShowsAmmoPips' WS EQ WS? BOOLEAN
                 | 'ShockWaveAmount' WS EQ WS? (INT | FLOAT)
                 | 'ShockWaveRadius' WS EQ WS? (INT | FLOAT)
                 | 'ShockWaveTaperOff' WS EQ WS? (INT | FLOAT)
                 | 'RequestAssistRange' WS EQ WS? (INT | FLOAT)
                 | 'MissileCallsOnDie' WS EQ WS? BOOLEAN
                 | 'ProjectileStreamName' WS EQ WS? ID
                 | 'AllowAttackGarrisonedBldgs' WS EQ WS? BOOLEAN
                 | 'SuspendFXDelay' WS EQ WS? (INT | FLOAT)
                 | 'MinWeaponSpeed' WS EQ WS? (INT | FLOAT)
                 | 'ScaleWeaponSpeed' WS EQ WS? BOOLEAN
                 | 'HistoricBonusTime' WS EQ WS? (INT | FLOAT)
                 | 'CapableOfFollowingWaypoints' WS EQ WS? BOOLEAN
                 | 'HistoricBonusCount' WS EQ WS? INT
                 | 'HistoricBonusRadius' WS EQ WS? INT
                 | 'HistoricBonusWeapon' WS EQ WS? weapon_value
                 | 'AntiMine' WS EQ WS? BOOLEAN
                 | 'PlayFXWhenStealthed' WS EQ WS? BOOLEAN
                 | 'ContinueAttackRange' WS EQ WS? INT
                 ;

weapon_damagetype_property: 'DamageType' WS EQ WS? damageType_value;
weapon_deathtype_property: 'DeathType' WS EQ WS? deathType_value;
weapon_damageaffects_property: 'RadiusDamageAffects' WS EQ WS? damageAffects_value (WS damageAffects_value)*;
weapon_weaponbonus_property: 'WeaponBonus' WS EQ WS? weapon_weaponbonus_condition_value WS weapon_weaponbonus_bonus_value WS PERCENT;
weapon_lasterbone_property: 'LaserBoneName' WS EQ WS? ID;

weapon_weaponbonus_condition_value: (NONE | 'GARRISONED' | 'HORDE' | 'CONTINUOUS_FIRE_MEAN' | 'CONTINUOUS_FIRE_FAST' | 'NATIONALISM' | 'PLAYER_UPGRADE' | 'DRONE_SPOTTING' | 'DEMORALIZED_OBSOLETE' | 'ENTHUSIASTIC' | VETERENCY | 'BATTLEPLAN_BOMBARDMENT' | 'BATTLEPLAN_HOLDTHELINE' | 'BATTLEPLAN_SEARCHANDDESTROY' | 'SUBLIMINAL' | 'SOLO_HUMAN_EASY' | 'SOLO_HUMAN_NORMAL' | 'SOLO_HUMAN_HARD' | 'SOLO_AI_EASY' | 'SOLO_AI_NORMAL' | 'SOLO_AI_HARD' | 'FAERIE_FIRE' | 'FANATICISM' | 'FRENZY_ONE' | 'FRENZY_TWO' | 'FRENZY_THREE');
weapon_weaponbonus_bonus_value: (NONE | 'DAMAGE' | 'RADIUS' | 'RANGE' | 'RATE_OF_FIRE' | 'PRE_ATTACK');
deathType_value: (NONE | 'NORMAL' | 'CRUSHED' | 'BURNED' | 'EXPLODED' | 'POISONED' | 'TOPPLED' | 'FLOODED' | 'SUICIDED' | 'LASERED' | 'DETONATED' | 'SPLATTED' | 'POISONED_BETA' | 'EXTRA_2' | 'EXTRA_3' | 'EXTRA_4' | 'EXTRA_5' | 'EXTRA_6' | 'EXTRA_7' | 'EXTRA_8' | 'POISONED_GAMMA');
damageAffects_value: (NONE | 'ENEMIES' | 'NEUTRALS' | 'ALLIES' | 'NOT_SIMILAR' | 'SELF' | 'SUICIDE' | 'NOT_AIRBORNE');
projectileColide_value: (NONE | 'ALLIES' | 'ENEMIES' | 'STRUCTURES' | 'SHRUBBERY' | 'PROJECTILES' | 'WALLS' | 'SMALL_MISSILES' | 'BALLISTIC_MISSILES' | 'CONTROLLED_STRUCTURES');

damageType_value: (NONE | 'EXPLOSION' | 'KILL_GARRISONED' | 'STATUS' | 'CRUSH' | 'ARMOR_PIERCING' | 'SMALL_ARMS' | 'GATTLING' | 'RADIATION' | 'FLAME' | 'LASER' | 'SNIPER' | 'POISON' | 'HEALING' | 'UNRESISTABLE' | 'DEPLOY' | 'SURRENDER' | 'HACK' | 'KILL_PILOT' | 'PENALTY' | 'FALLING' | 'MELEE' | 'DISARM' | 'HAZARD_CLEANUP' | 'INFANTRY_MISSILE' | 'AURORA_BOMB' | 'LAND_MINE' | 'JET_MISSILES' | 'STEALTHJET_MISSILES' | 'MOLOTOV_COCKTAIL' | 'COMANCHE_VULCAN' | 'SUBDUAL_MISSILE' | 'SUBDUAL_VEHICLE' | 'SUBDUAL_BUILDING' | 'PARTICLE_BEAM' | 'MICROWAVE' | 'TOPPLING' | 'STATUS');
armorType_value: (NONE | 'NORMAL' | 'DEFAULT' | 'PARTICLE_BEAM' | 'MICROWAVE' | 'EXPLOSION' | 'CRUSH' | 'ARMOR_PIERCING' | 'SMALL_ARMS' | 'GATTLING' | 'RADIATION' | 'FLAME' | 'LASER' | 'SNIPER' | 'POISON' | 'HEALING' | 'UNRESISTABLE' | 'WATER' | 'DEPLOY' | 'SURRENDER' | 'HACK' | 'KILL_PILOT' | 'PENALTY' | 'FALLING' | 'MELEE' | 'DISARM' | 'HAZARD_CLEANUP' | 'INFANTRY_MISSILE' | 'AURORA_BOMB' | 'LAND_MINE' | 'JET_MISSILES' | 'STEALTHJET_MISSILES' | 'MOLOTOV_COCKTAIL' | 'COMANCHE_VULCAN' | 'SUBDUAL_MISSILE' | 'SUBDUAL_VEHICLE' | 'SUBDUAL_BUILDING');

// Weather Class
weatherClass: 'Weather' NEWLINE ((WS? weather_properties WS? NEWLINE) | (WS | NEWLINE))* end;

weather_properties: 'SnowEnabled' WS EQ WS? BOOLEAN
                  | 'SnowTexture' WS EQ WS? file
                  | 'SnowBoxDimensions' WS EQ WS? INT
                  | 'SnowBoxDensity' WS EQ WS? (INT | FLOAT)
                  | 'SnowFrequencyScaleX' WS EQ WS? (INT | FLOAT)
                  | 'SnowFrequencyScaleY' WS EQ WS? (INT | FLOAT)
                  | 'SnowAmplitude' WS EQ WS? (INT | FLOAT)
                  | 'SnowVelocity' WS EQ WS? (INT | FLOAT)
                  | 'SnowPointSize' WS EQ WS? (INT | FLOAT)
                  | 'SnowMaxPointSize' WS EQ WS? (INT | FLOAT)
                  | 'SnowMinPointSize' WS EQ WS? (INT | FLOAT)
                  | 'SnowPointSprites' WS EQ WS? BOOLEAN
                  | 'SnowQuadSize' WS EQ WS? (INT | FLOAT)
                  ;


end: WS? ('end' | 'End' | 'END');

file: ID '.' ('tga' | 'dds' | 'wav' | 'wnd');


// DrawGroupInfo Class
dgi_useplayercolor_property: 'UsePlayerColor' EQ BOOLEAN;
dgi_colorfortext_property: 'ColorForText' EQ R G B A;
dgi_colordropshadow_property: 'ColorForTextDropShadow' EQ R G B A;
dgi_dropshadowoffsetX_property: 'DropShadowOffsetX' EQ INT;
dgi_dropshadowoffsetY_property: 'DropShadowOffsetY' EQ INT;
dgi_fontname_property: 'FontName' EQ ID+;
dgi_fontsize_property: 'FontSize' EQ INT;
dgi_fontisbold_property: 'FontIsBold' EQ BOOLEAN;
dgi_drawposXperc_property: 'DrawPositionXPercent' EQ PERCENT;
dgi_drawposYperc_property: 'DrawPositionYPixel' EQ INT;


// Locomotor Class


// Properties that take Classes as a value:
faction_value: ('Civilian' | 'Observer' | 'Boss' | 'America' | 'China' | 'GLA' | 'AmericaAirForceGeneral' | 'AmericaLaserGeneral' | 'AmericaSuperWeaponGeneral' | 'ChinaTankGeneral' | 'ChinaNukeGeneral' | 'ChinaInfantryGeneral' | 'GLADemolitionGeneral' | 'GLAStealthGeneral' | 'GLAToxinGeneral');
factionEx_value: ('FactionCivilian' | 'FactionObserver' | 'FactionAmerica' | 'FactionChina' | 'FactionGLA' | 'FactionAmericaSuperWeaponGeneral' | 'FactionAmericaLaserGeneral' | 'FactionAmericaAirForceGeneral' | 'FactionChinaTankGeneral' | 'FactionChinaInfantryGeneral' | 'FactionChinaNukeGeneral' | 'FactionGLAToxinGeneral' | 'FactionGLADemolitionGeneral' | 'FactionGLAStealthGeneral' | 'FactionBossGeneral');

commandbutton_value: (ID | NONE);

commandSet_value: (ID | NONE);

cursorname_value: (ID | NONE);
radius_cursorname_value: (ID | NONE);
invalid_cursorname_value: (ID | NONE);

mappedimage_value: (ID | NONE);

particlesystem_value: (ID | NONE);

fxlist_value: (ID | NONE);

object_property: 'Object' WS? EQ WS? object_value;
object_value: (ID | NONE);

kindof_value: (NONE | 'IGNORE_DOCKING_BONES' | 'IGNORES_SELECT_ALL' | 'IGNORED_IN_GUI' | 'CONSERVATIVE_BUILDING' | 'DEMOTRAP' | 'EMP_HARDENED' | 'TECH_BASE_DEFENSE' | 'CANNOT_RETALIATE' | 'REJECT_UNMANNED ' | 'AIRCRAFT_CARRIER' | 'OPTIMIZED_TREE' | 'PROP' | 'BLAST_CRATER' | 'BOOBY_TRAP' | 'REVEALS_ENEMY_PATHS' | 'MONEY_HACKER' | 'CLIFF_JUMPER' | 'DONT_AUTO_CRUSH_INFANTRY' | 'HERO' | 'INERT' | 'DISGUISER' | 'REVEAL_TO_ALL' | 'SUPPLY_SOURCE' | 'CANNOT_BUILD_NEAR_SUPPLIES' | 'SPAWNS_ARE_THE_WEAPONS' | 'SHOW_PORTRAIT_WHEN_CONTROLLED' | 'HULK' | 'IMMUNE_TO_CAPTURE' | 'BOAT' | 'GARRISONABLE_UNTIL_DESTROYED' | 'PARACHUTE' | 'PARACHUTABLE' | 'SUPPLY_SOURCE_ON_PREVIEW' | 'CLICK_THROUGH' | 'BALLISTIC_MISSILE' | 'DRONE' | 'PRODUCED_AT_HELIPAD ' | 'POWERED' | 'TECH_BUILDING' | 'AUTO_RALLYPOINT' | 'FORCEATTACKABLE' | 'LOW_OVERLAPPABLE' | 'AIRCRAFT_PATH_AROUND' | 'DEFENSIVE_WALL' | 'WALK_ON_TOP_OF_WALL' | 'ATTACK_NEEDS_LINE_OF_SIGHT' | 'ALWAYS_SELECTABLE' | 'PORTABLE_STRUCTURE' | 'CLEANUP_HAZARD' | 'MINE' | 'UNATTACKABLE' | 'ALWAYS_VISIBLE' | 'SMALL_MISSILE' | 'CLEARED_BY_BUILD' | 'CAPTURABLE' | 'CRATE' | 'MOB_NEXUS' | 'SCORE_DESTROY' | 'SCORE_CREATE' | 'SCORE' | 'REBUILD_HOLE' | 'MP_COUNT_FOR_VICTORY' | 'DRAWABLE_ONLY' | 'CASH_GENERATOR' | 'STEALTH_GARRISON' | 'HEAL_PAD' | 'REPAIR_PAD' | 'WAVE_EFFECT' | 'WAVEGUIDE' | 'NO_GARRISON' | 'NO_COLLIDE' | 'NO_HEAL_ICON' | 'NO_SELECT' | 'PRELOAD' | 'PROJECTILE' | 'BRIDGE_TOWER' | 'LANDMARK_BRIDGE' | 'BRIDGE' | 'TRANSPORT' | 'WEAPON_SALVAGER' | 'ARMOR_SALVAGER' | 'SALVAGER' | 'LINEBUILD' | 'COMMANDCENTER' | 'HARVESTER' | 'DOZER' | 'HUGE_VEHICLE' | 'AIRCRAFT' | 'VEHICLE' | 'INFANTRY' | 'STRUCTURE' | 'SHRUBBERY' | 'STICK_TO_TERRAIN_SLOPE' | 'IMMOBILE' | 'SELECTABLE' | 'OBSTACLE' | 'FS_STRATEGY_CENTER' | 'FS_SUPPLY_CENTER' | 'FS_BLACK_MARKET' | 'FS_SUPERWEAPON' | 'FS_SUPPLY_DROPZONE' | 'FS_AIRFIELD ' | 'FS_WARFACTORY' | 'FS_BARRACKS' | 'FS_ADVANCED_TECH' | 'FS_TECHNOLOGY' | 'FS_BASE_DEFENSE' | 'FS_FACTORY' | 'FS_POWER' | 'FS_INTERNET_CENTER' | 'FS_FAKE' | 'CAN_BE_REPULSED' | 'CAN_RAPPEL' | 'CAN_ATTACK' | 'CAN_CAST_REFLECTIONS' | 'CAN_SEE_THROUGH_STRUCTURE');

ocl_value: (ID | NONE);

science_property: 'Science' WS? EQ WS? science_value (WS science_value)*;
science_value: (ID | NONE);

specialpower_property: 'SpecialPower' WS? EQ WS? specialpower_value;
specialpower_value:  (ID | NONE);

audioevent_value: (ID | NONE);

upgrade_property: 'Upgrade' WS? EQ WS? upgrade_value;
upgrade_value: (ID | NONE);

weapon_value: ID;

// Special Generic Properties
weaponslot_property: 'WeaponSlot' WS? EQ WS? WEAPONSLOT (WS WEAPONSLOT)*;

// Generic
rand_value: INT (WS INT WS DISTRIBUTION_FORM)?;
coord3D: XCOORD WS YCOORD WS ZCOORD;

// Lexer Rules

// General
NONE: 'None' | 'NONE';
INT: '-'? [0-9]+;
FLOAT: '-'? [0-9]* '.' [0-9]+;
PERCENT: (INT | FLOAT) '%';
EQ: '=';

// Weapon
WEAPONSLOT: 'PRIMARY' | 'SECONDARY' | 'TERTIARY';

// Veterency
VETERENCY: 'VETERAN' | 'ELITE' | 'HEROIC';

// AIData Class
XCOORD: [Xx]':'WS?(INT | FLOAT);
YCOORD: [Yy]':'WS?(INT | FLOAT);
ZCOORD: [Zz]':'WS?(INT | FLOAT);

// MappedImage Class
COORDLEFT: 'Left:'INT;
COORDTOP: 'Top:'INT;
COORDRIGHT: 'Right:'INT;
COORDBOTTOM: 'Bottom:'INT;

RGBA: R WS G WS B WS A;
RGB: R WS G WS B;

MIN: 'Min:'(INT | FLOAT);
MAX: 'Max:'(INT | FLOAT);

// DrawGroupInfo Class
R: 'R:'INT;
G: 'G:'INT;
B: 'B:'INT;
A: 'A:'INT;

DISTRIBUTION_FORM: 'CONSTANT' | 'UNIFORM' | 'GAUSSIAN' | 'TRIANGULAR' | 'LOW_BIAS' | 'HIGH_BIAS';


// General
MANUAL: 'Manual' | 'manual' | 'MANUAL';
BOOLEAN: 'Yes' | 'yes' | 'YES' | 'No' | 'no' | 'NO';
STRING: '"' ( ~[\\"\n\r] | '\\' [\\"] )* '"'  ;
ID: [a-zA-Z_0-9][a-zA-Z_0-9%:]*;

NEWLINE: ([\r]?[\n]);

WS: [ \t]+;

// Skips
COMMENT: WS? (';' | '//') ~[\r\n]* -> skip; // skip comments

// Learned Things
// Explicit strings ('something') has to be above generic (like ID) and if a lexer rule (1) ueses another lexer rule (2) then (2) has to be above (1)
// If assignment equlas a lexer rule WS has to be mandetory. If it equals parserrule WS must be optional