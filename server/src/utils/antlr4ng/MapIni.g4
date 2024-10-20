grammar MapIni;

// Parser Rules
program: (NEWLINE | WS | classes)* EOF;

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
	     | objectReskinClass
       | objectClass
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
aiDataClass: 'AIData' WS* NEWLINE ((WS? aiDataClass_properties NEWLINE) | (NEWLINE | WS))* end;

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
aiDataClass_sideInfo_baseDefenseStructure: 'BaseDefenseStructure1' ((WS? EQ WS?) | WS) object_value;

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
mappedImageClass: 'MappedImage' WS mappedimage_value WS* NEWLINE ((WS? mappedImageClassProperties NEWLINE) | (NEWLINE | WS))* end;

mappedImageClassProperties: mappedImageClass_textureProperty
                          | mappedImageClass_textureWidthProperty
                          | mappedImageClass_textureHeightProperty
                          | mappedImageClass_coordsProperty
                          | mappedImageClass_statusProperty
                          ;

mappedImageClass_textureProperty: 'Texture' ((WS? EQ WS?) | WS) file;
mappedImageClass_textureWidthProperty: 'TextureWidth' ((WS? EQ WS?) | WS) INT;
mappedImageClass_textureHeightProperty: 'TextureHeight' ((WS? EQ WS?) | WS) INT;
mappedImageClass_coordsProperty: 'Coords' ((WS? EQ WS?) | WS) COORDLEFT WS COORDTOP WS COORDRIGHT WS COORDBOTTOM;
mappedImageClass_statusProperty: 'Status' ((WS? EQ WS?) | WS) (None_value | 'ROTATED_90_CLOCKWISE');


// Animation2D Class
animation2DClass: 'Animation' WS animation2d_value WS* NEWLINE ((WS? animation2DClassProperties NEWLINE) | (NEWLINE | WS))* end;

animation2DClassProperties: animation2DClass_animationModeProperty
                          | animation2DClass_animationdelayProperty
                          | animation2DClass_randomizeStartFrameProperty
                          | animation2DClass_numberImagesProperty
                          | animation2DClass_imageProperty
                          ;

animation2DClass_animationModeProperty: 'AnimationMode' ((WS? EQ WS?) | WS) (None_value | 'ONCE' | 'ONCE_BACKWARDS' | 'LOOP' | 'LOOP_BACKWARDS' | 'PING_PONG' | 'PING_PONG_BACKWARDS');
animation2DClass_animationdelayProperty: 'AnimationDelay' ((WS? EQ WS?) | WS) INT;
animation2DClass_randomizeStartFrameProperty: 'RandomizeStartFrame' ((WS? EQ WS?) | WS) BOOLEAN;
animation2DClass_numberImagesProperty: 'NumberImages' ((WS? EQ WS?) | WS) INT;
animation2DClass_imageProperty: 'Image' ((WS? EQ WS?) | WS) mappedimage_value;

// Armor Class
armorClass: 'Armor' WS armor_value WS* NEWLINE ((WS? armorClassProperties WS? NEWLINE) | (NEWLINE | WS))* end;

armorClassProperties: armorClass_armorProperty;

armorClass_armorProperty: 'Armor' ((WS? EQ WS?) | WS) armorType_value WS PERCENT;

// CommandButton Class
commandButtonClass: 'CommandButton' WS commandbutton_value WS* NEWLINE ((WS? commandButtonClassProperties WS? NEWLINE) | (NEWLINE | WS))* end;

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
                            | cb_purchasedlabel_property
                            ;

cb_command_property: 'Command' ((WS? EQ WS?) | WS) (None_value | 'DOZER_CONSTRUCT' | 'DOZER_CONSTRUCT_CANCEL' | 'UNIT_BUILD' | 'CANCEL_UNIT_BUILD' | 'PLAYER_UPGRADE' | 'OBJECT_UPGRADE' | 'CANCEL_UPGRADE' | 'ATTACK_MOVE' | 'GUARD' | 'GUARD_WITHOUT_PURSUIT' | 'GUARD_FLYING_UNITS_ONLY' | 'STOP' | 'WAYPOINTS' | 'EXIT_CONTAINER' | 'EVACUATE' | 'EXECUTE_RAILED_TRANSPORT' | 'BEACON_DELETE' | 'SET_RALLY_POINT' | 'SELL' | 'FIRE_WEAPON' | 'SPECIAL_POWER' | 'PURCHASE_SCIENCE' | 'HACK_INTERNET' | 'TOGGLE_OVERCHARGE' | 'COMBATDROP' | 'SWITCH_WEAPON' | 'HIJACK_VEHICLE' | 'CONVERT_TO_CARBOMB' | 'SABOTAGE_BUILDING' | 'PLACE_BEACON' | 'SPECIAL_POWER_FROM_SHORTCUT' | 'SPECIAL_POWER_CONSTRUCT' | 'SPECIAL_POWER_CONSTRUCT_FROM_SHORTCUT' | 'SELECT_ALL_UNITS_OF_TYPE');
cb_options_property: 'Options' ((WS? EQ WS?) | WS) cb_options_value (WS cb_options_value)*;
cb_options_value: (None_value | 'NEED_TARGET_ENEMY_OBJECT' | 'NEED_TARGET_NEUTRAL_OBJECT' | 'NEED_TARGET_ALLY_OBJECT' | 'ALLOW_SHRUBBERY_TARGET' | 'NEED_TARGET_POS' | 'NEED_UPGRADE' | 'NEED_SPECIAL_POWER_SCIENCE' | 'OK_FOR_MULTI_SELECT' | 'CONTEXTMODE_COMMAND' | 'CHECK_LIKE' | 'ALLOW_MINE_TARGET' | 'ATTACK_OBJECTS_POSITION' | 'OPTION_ONE' | 'OPTION_TWO' | 'OPTION_THREE' | 'NOT_QUEUEABLE' | 'SINGLE_USE_COMMAND' | 'SCRIPT_ONLY' | 'IGNORES_UNDERPOWERED' | 'USES_MINE_CLEARING_WEAPONSET' | 'CAN_USE_WAYPOINTS' | 'MUST_BE_STOPPED');
cb_buttonimage_property: 'ButtonImage' ((WS? EQ WS?) | WS) mappedimage_value;
cb_buttonbordertype_property: 'ButtonBorderType' WS? EQ WS (None_value | 'BUILD' | 'UPGRADE' | 'ACTION' | 'SYSTEM' | 'COUNT');
cb_textlabel_property: 'TextLabel' ((WS? EQ WS?) | WS) ID;
cb_descriptionlabel_property: 'DescriptLabel' ((WS? EQ WS?) | WS) ID;
cb_conflictinglabel_property: 'ConflictingLabel' ((WS? EQ WS?) | WS) ID;
cb_cursorname_propery: 'CursorName' ((WS? EQ WS?) | WS) cursorname_value;
cb_radius_cursorname_value: 'RadiusCursorType' ((WS? EQ WS?) | WS) radius_cursorname_value;
cb_invalid_cursorname_propery: 'InvalidCursorName' ((WS? EQ WS?) | WS) invalid_cursorname_value;
cb_unitspecificsound_property: 'UnitSpecificSound' ((WS? EQ WS?) | WS) audioevent_value;
cb_maxshotsfire_property: 'MaxShotsToFire' ((WS? EQ WS?) | WS) INT;
cb_purchasedlabel_property: 'PurchasedLabel' ((WS? EQ WS?) | WS) ID;

// CommandSet Class
commandSetClass: 'CommandSet' WS commandSet_value WS* NEWLINE ((WS? commandSetClassProperty WS? NEWLINE) | (WS | NEWLINE))* end;

commandSetClassProperty: INT ((WS? EQ WS?) | WS) commandbutton_value;


// DamageFX Class
damageFXClass: 'DamageFX' WS damageFX_value WS* NEWLINE ((WS? damageFXClassProperties WS? NEWLINE) | (WS | NEWLINE))* end;

damageFXClassProperties: dfx_throttletime_property
                       | dfx_majorfx_property
                       | dfx_minorfx_property
                       | dfx_vetmajorfx_property
                       | dfx_amountformajorfx_property
                       | dfx_vetminorfx_property
                       ;

dfx_throttletime_property: 'ThrottleTime' ((WS? EQ WS?) | WS) armorType_value WS INT;
dfx_amountformajorfx_property: 'AmountForMajorFX' ((WS? EQ WS?) | WS) armorType_value WS (INT | FLOAT);
dfx_majorfx_property: 'MajorFX' ((WS? EQ WS?) | WS) armorType_value WS fxlist_value;
dfx_minorfx_property: 'MinorFX' ((WS? EQ WS?) | WS) armorType_value WS fxlist_value;
dfx_vetmajorfx_property: 'VeterancyMajorFX' ((WS? EQ WS?) | WS) VETERENCY WS armorType_value WS fxlist_value;
dfx_vetminorfx_property: 'VeterancyMinorFX' ((WS? EQ WS?) | WS) VETERENCY WS armorType_value WS fxlist_value;

// DrawGroupInfo Class
drawGroupInfoClass: 'DrawGroupInfo' WS* NEWLINE drawgroupinfoProperties* end;

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
fxListClass: 'FXList' WS fxlist_value WS* NEWLINE ((WS? fxlistblocks WS? NEWLINE) | (WS | NEWLINE))* end;

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
fxlist_ps_block: 'ParticleSystem' WS* NEWLINE
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

fxlist_ps_name_property: 'Name' ((WS? EQ WS?) | WS) particlesystem_value;
fxlist_ps_count_property: 'Count' ((WS? EQ WS?) | WS) rand_value;
fxlist_ps_offset_property: 'Offset' ((WS? EQ WS?) | WS) coord3D;
fxlist_ps_radius_property: 'Radius' ((WS? EQ WS?) | WS) rand_value;
fxlist_ps_height_property: 'Height' ((WS? EQ WS?) | WS) rand_value;
fxlist_ps_initialDelay_property: 'InitialDelay' ((WS? EQ WS?) | WS) rand_value;
fxlist_ps_rotateX_property: 'RotateX' ((WS? EQ WS?) | WS) INT;
fxlist_ps_rotatey_property: 'RotateY' ((WS? EQ WS?) | WS) INT;
fxlist_ps_rotateZ_property: 'RotateZ' ((WS? EQ WS?) | WS) INT;
fxlist_ps_orienttoobject_property: 'OrientToObject' ((WS? EQ WS?) | WS) BOOLEAN;
fxlist_ps_ricochet_property: 'Ricochet' ((WS? EQ WS?) | WS)? BOOLEAN;
fxlist_ps_usecallerradius_property: 'UseCallersRadius' ((WS? EQ WS?) | WS) BOOLEAN;
fxlist_ps_attachtoobject_property: 'AttachToObject' ((WS? EQ WS?) | WS) BOOLEAN;
fxlist_ps_creategroundheight_property: 'CreateAtGroundHeight' ((WS? EQ WS?) | WS) BOOLEAN;

// Sound
fxlist_sound_block: 'Sound' WS* NEWLINE ((WS? fxlist_sound_property WS? NEWLINE) | (WS | NEWLINE))* end;

fxlist_sound_property: 'Name' ((WS? EQ WS?) | WS) audioevent_value;

//Ray Effect
fxlist_rayeffect_block: 'RayEffect' WS* NEWLINE ((WS? (fxlist_rayeffect_object_propety
                      | fxlist_rayeffect_primaryoffset_property
                      | fxlist_rayeffect_secondaryoffset_proprety) NEWLINE) | (WS | NEWLINE))*
                      end;

fxlist_rayeffect_primaryoffset_property: 'PrimaryOffset' ((WS? EQ WS?) | WS) coord3D;
fxlist_rayeffect_secondaryoffset_proprety: 'SecondaryOffset' ((WS? EQ WS?) | WS) coord3D;
fxlist_rayeffect_object_propety: 'Name' ((WS? EQ WS?) | WS) object_value;

// Tracer
fxlist_tracer_block: 'Tracer' WS* NEWLINE ((WS? (fxlist_tracer_name_propety
                   | fxlist_tracer_bonename_property
                   | fxlist_tracer_speed_property
                   | fxlist_tracer_decayat_property
                   | fxlist_tracer_length_property
                   | fxlist_tracer_width_property
                   | fxlist_tracer_color_property
                   | fxlist_tracer_probability_property) NEWLINE) | (WS | NEWLINE))*
                   end;

fxlist_tracer_name_propety: 'TracerName' ((WS? EQ WS?) | WS) object_value;
fxlist_tracer_bonename_property: 'BoneName' ((WS? EQ WS?) | WS) ID;
fxlist_tracer_speed_property: 'Speed' ((WS? EQ WS?) | WS) (INT | FLOAT);
fxlist_tracer_decayat_property: 'DecayAt' ((WS? EQ WS?) | WS) (INT | FLOAT);
fxlist_tracer_length_property: 'Length' ((WS? EQ WS?) | WS) (INT | FLOAT);
fxlist_tracer_width_property: 'Width' ((WS? EQ WS?) | WS) (INT | FLOAT);
fxlist_tracer_color_property: 'Color' ((WS? EQ WS?) | WS) RGB;
fxlist_tracer_probability_property: 'Probability' ((WS? EQ WS?) | WS) (INT | FLOAT);

// Light Pulse
fxlist_lightpulse_block: 'LightPulse' WS* NEWLINE ((WS? (fxlist_lightpulse_color_property
                                      |fxlist_lightpulse_radius_property
                                      |fxlist_lightpulse_radiuspercentobjectsize_property
                                      |fxlist_lightpulse_increasetime_property
                                      |fxlist_lightpulse_decreasetime_property) NEWLINE) | (WS | NEWLINE))*
                          end;

fxlist_lightpulse_color_property: 'Color' ((WS? EQ WS?) | WS) RGB;
fxlist_lightpulse_radius_property: 'Radius' ((WS? EQ WS?) | WS) (INT | FLOAT);
fxlist_lightpulse_radiuspercentobjectsize_property: 'RadiusAsPercentOfObjectSize' ((WS? EQ WS?) | WS) PERCENT;
fxlist_lightpulse_increasetime_property: 'IncreaseTime' ((WS? EQ WS?) | WS) INT;
fxlist_lightpulse_decreasetime_property: 'DecreaseTime' ((WS? EQ WS?) | WS) INT;

// View Shake
fxlist_viewshake_block: 'ViewShake' WS* NEWLINE ((WS? fxlist_viewshake_type_property WS? NEWLINE) | (WS | NEWLINE))* end;

fxlist_viewshake_type_property: 'Type' ((WS? EQ WS?) | WS) fxlist_viewshake_type_value;
fxlist_viewshake_type_value: (None_value | 'NORMAL' | 'SUBTLE' | 'STRONG' | 'SEVERE' | 'CINE_EXTREME' | 'CINE_INSANE');

// Terrain Scorch
fxlist_terrainscorch_block: 'TerrainScorch' WS* NEWLINE ((WS? (fxlist_scorch_type_property | fxlist_scorch_radius_property) WS? NEWLINE) | (WS | NEWLINE))* end;

fxlist_scorch_type_property: 'Type' ((WS? EQ WS?) | WS) ID;
fxlist_scorch_radius_property: 'Radius' ((WS? EQ WS?) | WS) (INT | FLOAT);

// FXList At Bone
fxlist_fxlistatbone_block: 'FXListAtBonePos' WS* NEWLINE ((WS? (fxlist_atbonepos_fx_property | fxlist_atbonepos_bonename_property | fxlist_atbonepos_orienttoobject_property) WS? NEWLINE) | (WS | NEWLINE))* end;

fxlist_atbonepos_fx_property: FX ((WS? EQ WS?) | WS) fxlist_value;
fxlist_atbonepos_bonename_property: 'BoneName' ((WS? EQ WS?) | WS) (ID | STRING);
fxlist_atbonepos_orienttoobject_property: 'OrientToBone' ((WS? EQ WS?) | WS) BOOLEAN;


// IngameUI Class
inGameUIClass: 'InGameUI' WS* NEWLINE ((WS? (igui_properties | igui_blocks) WS? NEWLINE) | (WS | NEWLINE))* end;

igui_properties:  'MaxSelectionSize' ((WS? EQ WS?) | WS) INT
                | 'MessageColor1' ((WS? EQ WS?) | WS) RGB
                | 'MessageColor2' ((WS? EQ WS?) | WS) RGB
                | 'MessagePosition' ((WS? EQ WS?) | WS) XCOORD WS YCOORD
                | 'MessageFont' ((WS? EQ WS?) | WS) (ID | STRING)
                | 'MessagePointSize' ((WS? EQ WS?) | WS) INT
                | 'MessageBold' ((WS? EQ WS?) | WS) BOOLEAN
                | 'MessageDelayMS' ((WS? EQ WS?) | WS) INT
                | 'MilitaryCaptionColor' ((WS? EQ WS?) | WS) RGBA
                | 'MilitaryCaptionPosition' ((WS? EQ WS?) | WS) XCOORD WS YCOORD
                | 'MilitaryCaptionTitleFont' ((WS? EQ WS?) | WS) (ID | STRING)
                | 'MilitaryCaptionTitlePointSize' ((WS? EQ WS?) | WS) INT
                | 'MilitaryCaptionTitleBold' ((WS? EQ WS?) | WS) BOOLEAN
                | 'MilitaryCaptionFont' ((WS? EQ WS?) | WS) (ID | STRING)
                | 'MilitaryCaptionPointSize' ((WS? EQ WS?) | WS) INT
                | 'MilitaryCaptionBold' ((WS? EQ WS?) | WS) BOOLEAN
                | 'MilitaryCaptionRandomizeTyping' ((WS? EQ WS?) | WS) BOOLEAN
                | 'SuperweaponCountdownPosition' ((WS? EQ WS?) | WS) XCOORD WS YCOORD
                | 'SuperweaponCountdownFlashDuration' ((WS? EQ WS?) | WS) INT
                | 'SuperweaponCountdownFlashColor' ((WS? EQ WS?) | WS) RGB
                | 'SuperweaponCountdownNormalFont' ((WS? EQ WS?) | WS) (ID | STRING)
                | 'SuperweaponCountdownNormalPointSize' ((WS? EQ WS?) | WS) INT
                | 'SuperweaponCountdownNormalBold' ((WS? EQ WS?) | WS) BOOLEAN
                | 'SuperweaponCountdownReadyFont' ((WS? EQ WS?) | WS) (ID | STRING)
                | 'SuperweaponCountdownReadyPointSize' ((WS? EQ WS?) | WS) INT
                | 'SuperweaponCountdownReadyBold' ((WS? EQ WS?) | WS) BOOLEAN
                | 'NamedTimerCountdownPosition' ((WS? EQ WS?) | WS) XCOORD WS YCOORD
                | 'NamedTimerCountdownFlashDuration' ((WS? EQ WS?) | WS) INT
                | 'NamedTimerCountdownFlashColor' ((WS? EQ WS?) | WS) RGB
                | 'NamedTimerCountdownNormalFont' ((WS? EQ WS?) | WS) (ID | STRING)
                | 'NamedTimerCountdownNormalPointSize' ((WS? EQ WS?) | WS) INT
                | 'NamedTimerCountdownNormalBold' ((WS? EQ WS?) | WS) BOOLEAN
                | 'NamedTimerCountdownNormalColor' ((WS? EQ WS?) | WS) RGB
                | 'NamedTimerCountdownReadyFont' ((WS? EQ WS?) | WS) (ID | STRING)
                | 'NamedTimerCountdownReadyPointSize' ((WS? EQ WS?) | WS) INT
                | 'NamedTimerCountdownReadyBold' ((WS? EQ WS?) | WS) BOOLEAN
                | 'NamedTimerCountdownReadyColor' ((WS? EQ WS?) | WS) RGB
                | 'FloatingTextTimeOut' ((WS? EQ WS?) | WS) INT
                | 'FloatingTextMoveUpSpeed' ((WS? EQ WS?) | WS) INT
                | 'FloatingTextVanishRate' ((WS? EQ WS?) | WS) INT
                | 'DrawRMBScrollAnchor' ((WS? EQ WS?) | WS) BOOLEAN
                | 'MoveRMBScrollAnchor' ((WS? EQ WS?) | WS) BOOLEAN
                | 'PopupMessageColor' ((WS? EQ WS?) | WS) RGBA
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

ingui_block_properties: 'Texture' ((WS? EQ WS?) | WS) ID
                      | 'Style' ((WS? EQ WS?) | WS) shadow_value
                      | 'OpacityMin' ((WS? EQ WS?) | WS) PERCENT
                      | 'OpacityMax' ((WS? EQ WS?) | WS) PERCENT
                      | 'OpacityThrobTime' ((WS? EQ WS?) | WS) INT
                      | 'Color' ((WS? EQ WS?) | WS) RGBA
                      | 'OnlyVisibleToOwningPlayer' ((WS? EQ WS?) | WS) BOOLEAN
                      ;


// Locomotor Class
locomotorClass: 'Locomotor' WS locomotor_value WS* NEWLINE ((WS? locomotor_properties WS? NEWLINE) | (WS | NEWLINE))* end;

locomotor_properties: locomotor_surface_property
                    | locomotor_zbehavior_property
                    | locomotor_appereance_property
                    | locomotor_movepriority_property
                    | 'Speed' ((WS? EQ WS?) | WS) (INT | FLOAT)
                    | 'MinSpeed' ((WS? EQ WS?) | WS) (INT | FLOAT)
                    | 'SpeedDamaged' ((WS? EQ WS?) | WS) (INT | FLOAT)
                    | 'TurnRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                    | 'TurnRateDamaged' ((WS? EQ WS?) | WS) (INT | FLOAT)
                    | 'Acceleration' ((WS? EQ WS?) | WS) (INT | FLOAT)
                    | 'AccelerationDamaged' ((WS? EQ WS?) | WS) (INT | FLOAT)
                    | 'MaxThrustAngle' ((WS? EQ WS?) | WS) INT
                    | 'Braking' ((WS? EQ WS?) | WS) INT
                    | 'MinTurnSpeed' ((WS? EQ WS?) | WS) INT
                    | 'StickToGround' ((WS? EQ WS?) | WS) BOOLEAN
                    | 'WanderWidthFactor' ((WS? EQ WS?) | WS) (INT | FLOAT)
                    | 'WanderLengthFactor' ((WS? EQ WS?) | WS) (INT | FLOAT)
                    | 'WanderAboutPointRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                    | 'TurnPivotOffset' ((WS? EQ WS?) | WS) (INT | FLOAT)
                    | 'AccelerationPitchLimit' ((WS? EQ WS?) | WS) (INT | FLOAT)
                    | 'DecelerationPitchLimit' ((WS? EQ WS?) | WS) (INT | FLOAT)
                    | 'BounceAmount' ((WS? EQ WS?) | WS) INT
                    | 'PitchStiffness' ((WS? EQ WS?) | WS) (INT | FLOAT)
                    | 'RollStiffness' ((WS? EQ WS?) | WS) (INT | FLOAT)
                    | 'PitchDamping' ((WS? EQ WS?) | WS) (INT | FLOAT)
                    | 'RollDamping' ((WS? EQ WS?) | WS) (INT | FLOAT)
                    | 'ForwardAccelerationPitchFactor' ((WS? EQ WS?) | WS) (INT | FLOAT)
                    | 'LateralAccelerationRollFactor' ((WS? EQ WS?) | WS) (INT | FLOAT)
                    | 'ForwardVelocityPitchFactor' ((WS? EQ WS?) | WS) (INT | FLOAT)
                    | 'LateralVelocityRollFactor' ((WS? EQ WS?) | WS) (INT | FLOAT)
                    | 'Apply2DFrictionWhenAirborne' ((WS? EQ WS?) | WS) BOOLEAN
                    | 'AirborneTargetingHeight' ((WS? EQ WS?) | WS) INT
                    | 'LocomotorWorksWhenDead' ((WS? EQ WS?) | WS) BOOLEAN
                    | 'HasSuspension' ((WS? EQ WS?) | WS) BOOLEAN
                    | 'CanMoveBackwards' ((WS? EQ WS?) | WS) BOOLEAN
                    | 'MaximumWheelExtension' ((WS? EQ WS?) | WS) (INT | FLOAT)
                    | 'MaximumWheelCompression' ((WS? EQ WS?) | WS) (INT | FLOAT)
                    | 'FrontWheelTurnAngle' ((WS? EQ WS?) | WS) INT
                    | 'AllowAirborneMotiveForce' ((WS? EQ WS?) | WS) BOOLEAN
                    | 'PreferredHeight' ((WS? EQ WS?) | WS) (INT | FLOAT)
                    | 'PreferredHeightDamping' ((WS? EQ WS?) | WS) (INT | FLOAT)
                    | 'ThrustRoll' ((WS? EQ WS?) | WS) (INT | FLOAT)
                    | 'ThrustWobbleRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                    | 'ThrustMinWobble' ((WS? EQ WS?) | WS) (INT | FLOAT)
                    | 'ThrustMaxWobble' ((WS? EQ WS?) | WS) (INT | FLOAT)
                    | 'CloseEnoughDist3D' ((WS? EQ WS?) | WS) BOOLEAN
                    | 'Lift' ((WS? EQ WS?) | WS) INT
                    | 'LiftDamaged' ((WS? EQ WS?) | WS) INT
                    | 'UniformAxialDamping' ((WS? EQ WS?) | WS) (INT | FLOAT)
                    | 'CloseEnoughDist' ((WS? EQ WS?) | WS) (INT | FLOAT)
                    | 'CirclingRadius' ((WS? EQ WS?) | WS) INT
                    | 'PitchInDirectionOfZVelFactor' ((WS? EQ WS?) | WS) (INT | FLOAT)
                    | 'SlideIntoPlaceTime' ((WS? EQ WS?) | WS) INT
                    | 'SpeedLimitZ' ((WS? EQ WS?) | WS) INT
                    | 'Extra2DFriction' ((WS? EQ WS?) | WS) INT
                    | 'DownhillOnly' ((WS? EQ WS?) | WS) BOOLEAN
                    | 'RudderCorrectionDegree' ((WS? EQ WS?) | WS) (INT | FLOAT)
                    | 'RudderCorrectionRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                    | 'ElevatorCorrectionDegree' ((WS? EQ WS?) | WS) (INT | FLOAT)
                    | 'ElevatorCorrectionRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                    ;

locomotor_surface_property: 'Surfaces' ((WS? EQ WS?) | WS) surface_value (WS? surface_value)*;
locomotor_zbehavior_property: 'ZAxisBehavior' ((WS? EQ WS?) | WS) zbehavior_value;
locomotor_appereance_property: 'Appearance' ((WS? EQ WS?) | WS) appereance_value;
locomotor_movepriority_property: 'GroupMovementPriority' ((WS? EQ WS?) | WS) movepriority_value;

surface_value: (None_value | 'GROUND' | 'WATER' | 'AIR' | 'CLIFF' | 'RUBBLE');
zbehavior_value: (None_value | 'NO_Z_MOTIVE_FORCE' | 'SEA_LEVEL' | 'SURFACE_RELATIVE_HEIGHT' | 'ABSOLUTE_HEIGHT' | 'FIXED_SURFACE_RELATIVE_HEIGHT' | 'FIXED_ABSOLUTE_HEIGHT' | 'FIXED_RELATIVE_TO_GROUND_AND_BUILDINGS' | 'RELATIVE_TO_HIGHEST_LAYER');
appereance_value: (None_value | 'TWO_LEGS' | 'FOUR_WHEELS' | 'TREADS' | 'HOVER' | 'THRUST' | 'WINGS' | 'CLIMBER' | 'OTHER' | 'MOTORCYCLE');
movepriority_value: (None_value | 'MOVES_BACK' | 'MOVES_FRONT' | 'MOVES_MIDDLE');

objectReskinClass: 'ObjectReskin' WS object_value WS object_value ((WS? (objectClass_properties) WS? NEWLINE) | (WS | NEWLINE | objectClass_addModule | objectClass_modules))* end;

// Object Class
objectClass: 'Object' WS object_value WS* NEWLINE ((WS? (objectClass_properties) WS? NEWLINE) | (WS | NEWLINE | objectClass_addModule | objectClass_modules | objectClass_replaceModule))* end;

objectClass_properties: objectClass_sounds
                      | objectClass_sets
                      | 'DisplayName' ((WS? EQ WS?) | WS) ID
                      | 'MaxSimultaneousOfType' ((WS? EQ WS?) | WS) (INT | 'DeterminedBySuperweaponRestriction')
                      | 'MaxSimultaneousLinkKey'((WS? EQ WS?) | WS) ID
                      | 'RadarPriority' ((WS? EQ WS?) | WS) (None_value | 'NOT_ON_RADAR' | 'STRUCTURE' | 'UNIT' | 'BOMB' | 'NUM_PRIORITIES' | 'LOCAL_UNIT_ONLY')
                      | 'TransportSlotCount' ((WS? EQ WS?) | WS) INT
                      | 'FenceWidth' ((WS? EQ WS?) | WS) (INT | FLOAT)
                      | 'FenceXOffset' ((WS? EQ WS?) | WS) (INT | FLOAT)
                      | 'IsBridge' ((WS? EQ WS?) | WS) BOOLEAN
                      | 'VisionRange' ((WS? EQ WS?) | WS) (INT | FLOAT)
                      | 'ShroudClearingRange' ((WS? EQ WS?) | WS) (INT | FLOAT)
                      | 'ShroudRevealToAllRange' ((WS? EQ WS?) | WS) INT
                      | 'PlacementViewAngle' ((WS? EQ WS?) | WS) INT
                      | 'FactoryExitWidth' ((WS? EQ WS?) | WS) (INT | FLOAT)
                      | 'FactoryExtraBibWidth' ((WS? EQ WS?) | WS) (INT | FLOAT)
                      | 'SkillPointValue' ((WS? EQ WS?) | WS) INT
                      | 'ExperienceValue' ((WS? EQ WS?) | WS) INT WS INT WS INT WS INT
                      | 'ExperienceRequired' ((WS? EQ WS?) | WS) INT WS INT WS INT WS INT (WS INT)?
                      | 'IsTrainable' ((WS? EQ WS?) | WS) BOOLEAN
                      | 'EnterGuard' ((WS? EQ WS?) | WS) BOOLEAN
                      | 'HijackGuard' ((WS? EQ WS?) | WS) BOOLEAN
                      | 'Side' ((WS? EQ WS?) | WS) (faction_value | ID)
                      | 'EditorSorting' ((WS? EQ WS?) | WS) (None_value | ID | 'STRUCTURE' | 'VEHICLE' | 'INFANTRY' | 'SHRUBBERY' | 'MISC_MAN_MADE' | 'MISC_NATURAL' | 'DEBRIS' | 'SYSTEM' | 'AUDIO' | 'TEST' | 'FOR_REVIEW' | 'ROAD' | 'WAYPOINT')
                      | 'CrusherLevel' ((WS? EQ WS?) | WS) INT
                      | 'CrushableLevel' ((WS? EQ WS?) | WS) INT
                      | 'Buildable' ((WS? EQ WS?) | WS) BOOLEAN
                      | 'BuildCost' ((WS? EQ WS?) | WS) INT
                      | 'BuildTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                      | 'RefundValue' ((WS? EQ WS?) | WS) INT
                      | 'BuildCompletion' ((WS? EQ WS?) | WS) (None_value | 'INVALID' | 'APPEARS_AT_RALLY_POINT' | 'PLACED_BY_PLAYER')
                      | 'EnergyProduction' ((WS? EQ WS?) | WS) INT
                      | 'EnergyBonus' ((WS? EQ WS?) | WS) INT
                      | 'IsForbidden' ((WS? EQ WS?) | WS) BOOLEAN
                      | 'IsPrerequisite' ((WS? EQ WS?) | WS) BOOLEAN
                      | 'DisplayColor' ((WS? EQ WS?) | WS) RGB
                      | 'KindOf' ((WS? EQ WS?) | WS) kindof_value (WS kindof_value)*
                      | 'CommandSet' ((WS? EQ WS?) | WS) commandSet_value
                      | 'BuildVariations' ((WS? EQ WS?) | WS) object_value (WS object_value)*
                      | 'SelectPortrait' ((WS? EQ WS?) | WS) mappedimage_value
                      | 'ButtonImage' ((WS? EQ WS?) | WS) mappedimage_value
                      | 'UpgradeCameo1' ((WS? EQ WS?) | WS) upgrade_value
                      | 'UpgradeCameo2' ((WS? EQ WS?) | WS) upgrade_value
                      | 'UpgradeCameo3' ((WS? EQ WS?) | WS) upgrade_value
                      | 'UpgradeCameo4' ((WS? EQ WS?) | WS) upgrade_value
                      | 'UpgradeCameo5' ((WS? EQ WS?) | WS) upgrade_value
                      | 'Locomotor' ((WS? EQ WS?) | WS) locomotor_type WS locomotor_value (WS locomotor_value)*
                      | 'Scale' ((WS? EQ WS?) | WS) (INT | FLOAT)
                      | 'Geometry' ((WS? EQ WS?) | WS) geometry
                      | 'GeometryMajorRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                      | 'GeometryMinorRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                      | 'GeometryHeight' ((WS? EQ WS?) | WS) (INT | FLOAT)
                      | 'GeometryIsSmall' ((WS? EQ WS?) | WS) BOOLEAN
                      | 'Shadow' ((WS? EQ WS?) | WS) shadow_value
                      | 'ShadowSizeX' ((WS? EQ WS?) | WS) (INT | FLOAT)
                      | 'ShadowSizeY' ((WS? EQ WS?) | WS) (INT | FLOAT)
                      | 'ShadowOffsetX' ((WS? EQ WS?) | WS) (INT | FLOAT)
                      | 'ShadowOffsetY' ((WS? EQ WS?) | WS) (INT | FLOAT)
                      | 'ShadowTexture' ((WS? EQ WS?) | WS) ID
                      | 'OcclusionDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                      | 'InstanceScaleFuzziness' ((WS? EQ WS?) | WS) (INT | FLOAT)
                      ;

objectClass_sounds: 'VoiceSelect' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceGroupSelect' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceMove' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceAttack' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceEnter' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceFear' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceSelectElite' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceCreated' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceCreate' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceTaskUnable' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceTaskComplete' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceMeetEnemy' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceGarrison' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceDefect' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceAttackSpecial' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceAttackAir' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceGuard' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceBombard' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceNoBuild' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceRepair' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceDisarm' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceBuildResponse' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceLowFuel' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceRapidFire' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceFireRocketPods' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceMelee' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceEnterHostile' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceSubdue' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceClearBuilding' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceGetHealed' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoicePrimaryWeaponMode' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceSecondaryWeaponMode' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceSupply' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceCombatDrop' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceSnipePilot' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceMoveUpgraded' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceSalvage' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoicePoisonLocation' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceStealCashComplete' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceDisableVehicleComplete' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceCaptureBuildingComplete' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceFlameLocation' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceHackInternet' ((WS? EQ WS?) | WS) audioevent_value
                      | 'StartDive' ((WS? EQ WS?) | WS) audioevent_value
                      | 'Deploy' ((WS? EQ WS?) | WS) audioevent_value
                      | 'Undeploy' ((WS? EQ WS?) | WS) audioevent_value
                      | 'UnitPack' ((WS? EQ WS?) | WS) audioevent_value
                      | 'UnitUnpack' ((WS? EQ WS?) | WS) audioevent_value
                      | 'UnitCashPing' ((WS? EQ WS?) | WS) audioevent_value
                      | 'SoundMoveStart' ((WS? EQ WS?) | WS) audioevent_value
                      | 'SoundMoveStartDamaged' ((WS? EQ WS?) | WS) audioevent_value
                      | 'SoundMoveLoop' ((WS? EQ WS?) | WS) audioevent_value
                      | 'SoundMoveLoopDamaged' ((WS? EQ WS?) | WS) audioevent_value
                      | 'SoundAmbient' ((WS? EQ WS?) | WS) audioevent_value
                      | 'SoundAmbientDamaged' ((WS? EQ WS?) | WS) audioevent_value
                      | 'SoundAmbientReallyDamaged' ((WS? EQ WS?) | WS) audioevent_value
                      | 'SoundAmbientRubble' ((WS? EQ WS?) | WS) audioevent_value
                      | 'SoundStealthOn' ((WS? EQ WS?) | WS) audioevent_value
                      | 'SoundStealthOff' ((WS? EQ WS?) | WS) audioevent_value
                      | 'SoundCreated' ((WS? EQ WS?) | WS) audioevent_value
                      | 'SoundOnDamaged' ((WS? EQ WS?) | WS) audioevent_value
                      | 'SoundOnReallyDamaged' ((WS? EQ WS?) | WS) audioevent_value
                      | 'SoundEnter' ((WS? EQ WS?) | WS) audioevent_value
                      | 'SoundExit' ((WS? EQ WS?) | WS) audioevent_value
                      | 'SoundPromotedVeteran' ((WS? EQ WS?) | WS) audioevent_value
                      | 'SoundPromotedElite' ((WS? EQ WS?) | WS) audioevent_value
                      | 'SoundPromotedHero' ((WS? EQ WS?) | WS) audioevent_value
                      | 'SoundFallingFromPlane' ((WS? EQ WS?) | WS) audioevent_value
                      | 'SoundEject' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceEject' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceCrush' ((WS? EQ WS?) | WS) audioevent_value
                      | 'TruckLandingSound' ((WS? EQ WS?) | WS) audioevent_value
                      | 'TruckPowerslideSound' ((WS? EQ WS?) | WS) audioevent_value
                      | 'VoiceUnload' ((WS? EQ WS?) | WS) audioevent_value
                      | 'TurretMoveStart' ((WS? EQ WS?) | WS) (audioevent_value | 'TurretMoveStart')
                      | 'TurretMoveLoop' ((WS? EQ WS?) | WS) (audioevent_value | 'TurretMoveLoop')
                      | 'UnderConstruction' ((WS? EQ WS?) | WS) audioevent_value
                      | 'Afterburner' ((WS? EQ WS?) | WS) audioevent_value
                      | 'HowitzerFire' ((WS? EQ WS?) | WS) audioevent_value
                      | 'DisguiseStarted' ((WS? EQ WS?) | WS) audioevent_value
                      | 'DisguiseRevealedSuccess' ((WS? EQ WS?) | WS) audioevent_value
                      | 'DisguiseRevealedFailure' ((WS? EQ WS?) | WS) audioevent_value
                      | 'UnitBombPing' ((WS? EQ WS?) | WS) audioevent_value
                      | 'StickyBombCreated' ((WS? EQ WS?) | WS) audioevent_value
                      ;

objectClass_sets: objectClass_weaponSetBlock
                | objectClass_armorSetBlock
                | objectClass_prerequisiteSetBlock
                | objectClass_unitSpecificSoundsBlock
                | objectClass_unitSpecificFXBlock
                ;

objectClass_weaponSetBlock: 'WeaponSet' WS* NEWLINE ((WS? objectClass_weaponSetProperties WS? NEWLINE) | (WS | NEWLINE))* end;
objectClass_weaponSetProperties: 'Conditions' ((WS? EQ WS?) | WS) objectClass_setConditions (WS objectClass_setConditions)*
                               | weapon_property
                               | 'PreferredAgainst' ((WS? EQ WS?) | WS) WEAPONSLOT WS kindof_value (WS kindof_value)*
                               | 'AutoChooseSources' ((WS? EQ WS?) | WS) WEAPONSLOT WS autochoose_sources (WS autochoose_sources)*
                               | 'WeaponLockSharedAcrossSets' ((WS? EQ WS?) | WS) BOOLEAN
                               | 'ShareWeaponReloadTime' ((WS? EQ WS?) | WS) BOOLEAN
                               ;

objectClass_armorSetBlock: 'ArmorSet' WS* NEWLINE ((WS? objectClass_armorSetProperties WS? NEWLINE) | (WS | NEWLINE))* end;
objectClass_armorSetProperties: 'Conditions' ((WS? EQ WS?) | WS) objectClass_setConditions (WS objectClass_setConditions)*
                               | 'Armor' ((WS? EQ WS?) | WS) armor_value
                               | 'DamageFX' ((WS? EQ WS?) | WS) damageFX_value
                               ;

objectClass_setConditions: (None_value | 'PLAYER_UPGRADE' | 'MINE_CLEARING_DETAIL' | 'CRATEUPGRADE_ONE' | 'CRATEUPGRADE_TWO' | 'WEAPON_RIDER1' | 'WEAPON_RIDER2' | 'WEAPON_RIDER3' | 'WEAPON_RIDER4' | 'WEAPON_RIDER5' | 'WEAPON_RIDER6' | 'WEAPON_RIDER7' | 'WEAPON_RIDER8' | 'SECOND_LIFE' | 'CRATE_UPGRADE_ONE' | 'CRATE_UPGRADE_TWO');

objectClass_prerequisiteSetBlock: 'Prerequisites' WS* NEWLINE ((WS? objectClass_prerequisiteSetProperties WS? NEWLINE) | (WS | NEWLINE))* end;
objectClass_prerequisiteSetProperties: 'Object' ((WS? EQ WS?) | WS) object_value (WS object_value)*
                                     | 'Science' ((WS? EQ WS?) | WS) science_value (WS science_value)*
                                     ;

objectClass_unitSpecificSoundsBlock: 'UnitSpecificSounds' WS* NEWLINE ((WS? objectClass_sounds WS? NEWLINE) | (WS | NEWLINE))* end;

objectClass_unitSpecificFXBlock: 'UnitSpecificFX' WS* NEWLINE ((WS? objectClass_unitSpecificFXProperties WS? NEWLINE) | (WS | NEWLINE))* end;
objectClass_unitSpecificFXProperties: 'CombatDropKillFX' ((WS? EQ WS?) | WS) fxlist_value;

objectClass_removeModule: ('RemoveModule') WS moduleTag_value;

objectClass_addModule: ('AddModule' | 'addmodule' | 'Addmodule') WS* NEWLINE ((WS? (objectClass_modules | objectClass_properties) WS? NEWLINE) | (WS | NEWLINE))* end;

objectClass_replaceModule: ('ReplaceModule') WS moduleTag_value WS* NEWLINE ((WS? (objectClass_drawModules | objectClass_bodyModules | objectClass_behaviorModules | objectClass_clientModules) WS? NEWLINE) | (WS | NEWLINE))* end;

objectClass_modules: objectClass_drawModules
                   | objectClass_bodyModules
                   | objectClass_behaviorModules
                   | objectClass_clientModules
                   | objectClass_removeModule
                   ;

objectClass_drawModules: 'Draw' ((WS? EQ WS?) | WS) (w3dDebrisDrawModule | w3dDefaultDrawModule | w3dModelDrawModule | w3dLaserDrawModule | w3dDependencyDrawModule | w3dVehicleDrawModule | w3dProjectileStreamDrawModule | w3dScienceModelDrawModule | w3dSupplyDrawModule | w3dTreeDrawModule | w3dOverlordTankDrawModule) WS* end;

w3dDebrisDrawModule: ('W3DDebrisDraw' | 'W3DDefaultDraw' | 'W3DRopeDraw' | 'W3DPropDraw' | 'W3DTracerDraw') WS moduleTag_value NEWLINE (WS | NEWLINE)*;

w3dDefaultDrawModule: ('W3DDefaultDraw') WS moduleTag_value NEWLINE (WS | NEWLINE)*;

w3dModelDrawModule: ('W3DModelDraw') WS moduleTag_value NEWLINE ((WS? w3dModelDrawProperties WS? NEWLINE) | (WS | NEWLINE | drawModule_conditionBlock | drawModule_defaultconditionBlock | drawModule_transitionStateBlock))*;
w3dModelDrawProperties: 'TrackMarks' ((WS? EQ WS?) | WS) file
	              | 'Dust' ((WS? EQ WS?) | WS) particlesystem_value
	              | 'DirtSpray' ((WS? EQ WS?) | WS) particlesystem_value
	              | 'PowerslideSpray' ((WS? EQ WS?) | WS) particlesystem_value
	              | 'AliasConditionState' ((WS? EQ WS?) | WS) drawModule_conditionStateValue (WS drawModule_conditionStateValue)*
	              | 'IgnoreConditionStates' ((WS? EQ WS?) | WS) drawModule_conditionStateValue (WS drawModule_conditionStateValue)*
	              | 'AnimationRequirePower' ((WS? EQ WS?) | WS) BOOLEAN
	              | 'MinLODRequired' ((WS? EQ WS?) | WS) ('LOW' | 'MEDIUM' | 'HIGH')
	              | 'OkToChangeModelColor' ((WS? EQ WS?) | WS) BOOLEAN
	              | 'ReceivesDynamicLights' ((WS? EQ WS?) | WS) BOOLEAN
	              | 'ParticlesAttachedToAnimatedBones' ((WS? EQ WS?) | WS) BOOLEAN
	              | 'ProjectileBoneFeedbackEnabledSlots' ((WS? EQ WS?) | WS) WEAPONSLOT (WS WEAPONSLOT)*
	              | 'AttachToBoneInAnotherModule' ((WS? EQ WS?) | WS) (ID | STRING)
	              | 'InitialRecoilSpeed' ((WS? EQ WS?) | WS) INT
	              | 'MaxRecoilDistance' ((WS? EQ WS?) | WS) (INT | FLOAT)
	              | 'RecoilSettleSpeed' ((WS? EQ WS?) | WS) INT
	              | 'RecoilDamping' ((WS? EQ WS?) | WS) (INT | FLOAT)
	              | 'AnimationsRequirePower' ((WS? EQ WS?) | WS) BOOLEAN
                | 'ExtraPublicBone' ((WS? EQ WS?) | WS) (ID | STRING) (WS (ID | STRING))*
                ;

w3dLaserDrawModule: ('W3DLaserDraw') WS moduleTag_value NEWLINE ((WS? (w3dLaserDrawProperties) WS? NEWLINE) | (WS | NEWLINE | drawModule_conditionBlock | drawModule_defaultconditionBlock | drawModule_transitionStateBlock))*;
w3dLaserDrawProperties: 'NumBeams' ((WS? EQ WS?) | WS) INT
                      | 'InnerBeamWidth' ((WS? EQ WS?) | WS) (INT | FLOAT)
                      | 'OuterBeamWidth' ((WS? EQ WS?) | WS) (INT | FLOAT)
                      | 'InnerColor' ((WS? EQ WS?) | WS) RGBA
                      | 'OuterColor' ((WS? EQ WS?) | WS) RGBA
                      | 'MaxIntensityLifeTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                      | 'FadeLifeTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                      | 'Texture' ((WS? EQ WS?) | WS) file
                      | 'ScrollRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                      | 'Tile' ((WS? EQ WS?) | WS) BOOLEAN
                      | 'Segments' ((WS? EQ WS?) | WS) INT
                      | 'ArcHeight' ((WS? EQ WS?) | WS) (INT | FLOAT)
                      | 'SegmentOverlapRatio' ((WS? EQ WS?) | WS) (INT | FLOAT)
                      | 'TilingScalar' ((WS? EQ WS?) | WS) (INT | FLOAT)
                      ;

w3dDependencyDrawModule: ('W3DDependencyModelDraw') WS moduleTag_value NEWLINE ((WS? (w3dModelDrawProperties | w3dDependencyDrawProperties) WS? NEWLINE) | (WS | NEWLINE | drawModule_conditionBlock | drawModule_defaultconditionBlock | drawModule_transitionStateBlock))*;
w3dDependencyDrawProperties: 'AttachToBoneInContainer' ((WS? EQ WS?) | WS) (ID | STRING);

w3dVehicleDrawModule: ('W3DTruckDraw' | 'W3DPoliceCarDraw' | 'W3DTankDraw' | 'W3DTankTruckDraw') WS moduleTag_value NEWLINE ((WS? (w3dModelDrawProperties | w3dVehicleDrawProperties) WS? NEWLINE) | (WS | NEWLINE | drawModule_conditionBlock | drawModule_transitionStateBlock | drawModule_defaultconditionBlock))*;
w3dVehicleDrawProperties: 'RotationDamping' ((WS? EQ WS?) | WS) (INT | FLOAT)
                               | 'TrailerRotationMultiplier' ((WS? EQ WS?) | WS) (INT | FLOAT)
                               | 'TrailerBone' ((WS? EQ WS?) | WS) (ID | STRING)
                               | 'CabRotationMultiplier' ((WS? EQ WS?) | WS) (INT | FLOAT)
                               | 'CabBone' ((WS? EQ WS?) | WS) (ID | STRING)
                               | 'PowerslideRotationAddition' ((WS? EQ WS?) | WS) (INT | FLOAT)
                               | 'TireRotationMultiplier' ((WS? EQ WS?) | WS) (INT | FLOAT)
                               | 'MidRightMidTireBone' ((WS? EQ WS?) | WS) (ID | STRING)
                               | 'MidLeftMidTireBone' ((WS? EQ WS?) | WS) (ID | STRING)
                               | 'MidRightRearTireBone' ((WS? EQ WS?) | WS) (ID | STRING)
                               | 'MidLeftRearTireBone' ((WS? EQ WS?) | WS) (ID | STRING)
                               | 'MidRightFrontTireBone' ((WS? EQ WS?) | WS) (ID | STRING)
                               | 'MidLeftFrontTireBone' ((WS? EQ WS?) | WS) (ID | STRING)
                               | 'RightRearTireBone' ((WS? EQ WS?) | WS) (ID | STRING)
                               | 'LeftRearTireBone' ((WS? EQ WS?) | WS) (ID | STRING)
                               | 'RightFrontTireBone' ((WS? EQ WS?) | WS) (ID | STRING)
                               | 'LeftFrontTireBone' ((WS? EQ WS?) | WS) (ID | STRING)
                               | 'TreadDriveSpeedFraction' ((WS? EQ WS?) | WS) (INT | FLOAT)
                               | 'TreadPivotSpeedFraction' ((WS? EQ WS?) | WS) (INT | FLOAT)
                               | 'TreadAnimationRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                               | 'TreadDebrisLeft' ((WS? EQ WS?) | WS) ocl_value
                               | 'TreadDebrisRight' ((WS? EQ WS?) | WS) ocl_value
                               ;

w3dOverlordTankDrawModule: ('W3DOverlordTankDraw' | 'W3DOverlordTruckDraw' | 'W3DOverlordAircraftDraw') WS moduleTag_value NEWLINE ((WS? (w3dModelDrawProperties | w3dVehicleDrawProperties | w3dOverlordTankDrawProperties) WS? NEWLINE) | (WS | NEWLINE | drawModule_conditionBlock | drawModule_transitionStateBlock | drawModule_defaultconditionBlock))*;
w3dOverlordTankDrawProperties:  'ParticlesAttachedToAnimatedBones' ((WS? EQ WS?) | WS) BOOLEAN
                              ;

w3dProjectileStreamDrawModule: ('W3DProjectileStreamDraw') WS moduleTag_value NEWLINE ((WS? (w3dProjectileStreamDrawProperties) WS? NEWLINE) | (WS | NEWLINE | drawModule_conditionBlock | drawModule_transitionStateBlock | drawModule_defaultconditionBlock))*;
w3dProjectileStreamDrawProperties: 'Texture' ((WS? EQ WS?) | WS) file
                               | 'Width' ((WS? EQ WS?) | WS) (INT | FLOAT)
                               | 'TileFactor' ((WS? EQ WS?) | WS) (INT | FLOAT)
                               | 'ScrollRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                               | 'MaxSegments' ((WS? EQ WS?) | WS) INT
                               ;

w3dScienceModelDrawModule: ('W3DScienceModelDraw') WS moduleTag_value NEWLINE ((WS? (w3dModelDrawProperties | w3dScienceModelDrawProperties) WS? NEWLINE) | (WS | NEWLINE | drawModule_conditionBlock | drawModule_transitionStateBlock | drawModule_defaultconditionBlock))*;
w3dScienceModelDrawProperties: 'RequiredScience' ((WS? EQ WS?) | WS) science_value (WS science_value)*;

w3dSupplyDrawModule: ('W3DSupplyDraw') WS moduleTag_value NEWLINE ((WS? (w3dModelDrawProperties | w3dSupplyDrawProperties) WS? NEWLINE) | (WS | NEWLINE | drawModule_conditionBlock | drawModule_transitionStateBlock | drawModule_defaultconditionBlock))*;
w3dSupplyDrawProperties: 'SupplyBonePrefix' ((WS? EQ WS?) | WS) ID;

w3dTreeDrawModule: ('W3DTreeDraw') WS moduleTag_value NEWLINE ((WS? (w3dModelDrawProperties | w3dTreeDrawProperties) WS? NEWLINE) | (WS | NEWLINE | drawModule_conditionBlock | drawModule_transitionStateBlock | drawModule_defaultconditionBlock))*;
w3dTreeDrawProperties: 'ModelName' ((WS? EQ WS?) | WS) ID
                                | 'TextureName' ((WS? EQ WS?) | WS) file
                                | 'MoveOutwardTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                | 'MoveInwardTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                | 'MoveOutwardDistanceFactor' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                | 'DarkeningFactor' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                | 'ToppleFX' ((WS? EQ WS?) | WS) fxlist_value
                                | 'BounceFX' ((WS? EQ WS?) | WS) fxlist_value
                                | 'StumpName' ((WS? EQ WS?) | WS) ID
                                | 'KillWhenFinishedToppling' ((WS? EQ WS?) | WS) BOOLEAN
                                | 'DoTopple' ((WS? EQ WS?) | WS) BOOLEAN
                                | 'InitialVelocityPercent' ((WS? EQ WS?) | WS) PERCENT
                                | 'InitialAccelPercent' ((WS? EQ WS?) | WS) PERCENT
                                | 'BounceVelocityPercent' ((WS? EQ WS?) | WS) PERCENT
                                | 'MinimumToppleSpeed' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                | 'SinkDistance' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                | 'SinkTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                | 'DoShadow' ((WS? EQ WS?) | WS) BOOLEAN
                                ;



drawModule_conditionBlock: 'ConditionState' (((WS? EQ WS?) | WS) drawModule_conditionStateValue)? ((WS) | (WS drawModule_conditionStateValue))* NEWLINE ((WS? drawModule_conditionStateProperties WS? NEWLINE) | (WS | NEWLINE))* end;
drawModule_defaultconditionBlock: 'DefaultConditionState' NEWLINE ((WS? drawModule_conditionStateProperties WS? NEWLINE) | (WS | NEWLINE))* end;

drawModule_transitionStateBlock: 'TransitionState' ((WS? EQ WS?) | WS) drawModule_conditionStateValue ((WS) | (WS drawModule_conditionStateValue))* NEWLINE ((WS? drawModule_conditionStateProperties WS? NEWLINE) | (WS | NEWLINE))* end;

drawModule_conditionStateValue: (None_value | ID | 'USER_1' | 'USER_2' | 'JAMMED' | 'ATTACKING' | 'WEAPONSET_CRATEUPGRADE_ONE' | 'WEAPONSET_CRATEUPGRADE_TWO' | 'ARMORSET_CRATEUPGRADE_TWO' | 'ARMORSET_CRATEUPGRADE_ONE' | 'PREORDER' | 'STUNNED' | 'STUNNED_FLAILING' | 'EXPLODED_BOUNCING' | 'EXPLODED_FLAILING' | 'CAPTURED' | 'RAISING_FLAG' | 'CONTINUOUS_FIRE_SLOW' | 'CONTINUOUS_FIRE_FAST' | 'CONTINUOUS_FIRE_MEAN' | 'SPECIAL_CHEERING' | 'ARMED' | 'RAPELLING' | 'PARACHUTING' | 'CLIMBING' | 'SPLATTED' | 'BURNED' | 'AFLAME' | 'SMOLDERING' | 'POWER_PLANT_UPGRADING' | 'POWER_PLANT_UPGRADED' | 'OVER_WATER' | 'MOVING' | 'DEPLOYED' | 'UNPACKING' | 'PACKING' | 'JETEXHAUST' | 'JETAFTERBURNER' | 'LOADED' | 'CARRYING' | 'DOCKING_ENDING' | 'DOCKING_ACTIVE' | 'DOCKING_BEGINNING' | 'DOCKING' | 'PANICKING' | 'RADAR_UPGRADED' | 'RADAR_EXTENDED' | 'CONSTRUCTION_COMPLETE' | 'ACTIVELY_CONSTRUCTING' | 'ACTIVELY_BEING_CONSTRUCTED' | 'PARTIALLY_CONSTRUCTED' | 'AWAITING_CONSTRUCTION' | 'DYING' | 'PRONE' | 'FREEFALL' | 'POST_COLLAPSE' | 'TOPPLED' | 'TURRET_ROTATE' | 'RELOADING_A' | 'BETWEEN_FIRING_SHOTS_A' | 'FIRING_A' | 'PREATTACK_A' | 'USING_WEAPON_A' | 'RELOADING_B' | 'BETWEEN_FIRING_SHOTS_B' | 'FIRING_B' | 'PREATTACK_B' | 'USING_WEAPON_B' | 'RELOADING_C' | 'BETWEEN_FIRING_SHOTS_C' | 'FIRING_C' | 'PREATTACK_C' | 'USING_WEAPON_C' | 'DOOR_4_WAITING_TO_CLOSE' | 'DOOR_4_WAITING_OPEN' | 'DOOR_4_CLOSING' | 'DOOR_4_OPENING' | 'DOOR_3_WAITING_TO_CLOSE' | 'DOOR_3_WAITING_OPEN' | 'DOOR_3_CLOSING' | 'DOOR_3_OPENING' | 'DOOR_2_WAITING_TO_CLOSE' | 'DOOR_2_WAITING_OPEN' | 'DOOR_2_CLOSING' | 'DOOR_2_OPENING' | 'DOOR_1_WAITING_TO_CLOSE' | 'DOOR_1_WAITING_OPEN' | 'DOOR_1_CLOSING' | 'DOOR_1_OPENING' | 'WEAPONSET_PLAYER_UPGRADE' | 'WEAPONSET_HERO' | 'WEAPONSET_ELITE' | 'WEAPONSET_VETERAN' | 'ENEMYNEAR' | 'REALLYDAMAGED' | 'RUBBLE' | 'DAMAGED' | 'SNOW' | 'SOLD' | 'DISGUISED' | 'NIGHT' | 'RAPPELLING' | 'SPECIAL_DAMAGED' | 'BACKCRUSHED' | 'FRONTCRUSHED' | 'SECOND_LIFE' | 'RIDER1' | 'RIDER2' | 'RIDER3' | 'RIDER4' | 'RIDER5' | 'RIDER6' | 'RIDER7' | 'RIDER8' | 'PRISTINE' | 'RIGHT_TO_CENTER' | 'CENTER_TO_RIGHT' | 'LEFT_TO_CENTER' | 'CENTER_TO_LEFT' | 'DOWN_DEFAULT' | 'AWAITING_CONSTRUCTION' | 'PARTIALLY_CONSTRUCTED' | 'ACTIVELY_BEING_CONSTRUCTED' | 'UP_DAY' | 'UP_NIGHT' | 'UP_SNOW' | 'UP_SNOWNIGHT' | 'RADAR_EXTENDING' | 'GARRISONED');

drawModule_conditionStateProperties: 'Model' WS (EQ WS)? (None_value | ID)
                                   | 'WeaponHideShowBone' ((WS? EQ WS?) | WS) WEAPONSLOT WS (None_value | STRING | ID)
                                   | 'AnimationSpeedFactorRange' ((WS? EQ WS?) | WS) (INT | FLOAT) WS (INT | FLOAT)
                                   | 'AnimationMode' ((WS? EQ WS?) | WS) (None_value | MANUAL | 'ONCE' | 'ONCE_BACKWARDS' | 'LOOP' | 'LOOP_BACKWARDS' | 'PING_PONG' | 'LOOP_PINGPONG' | 'PING_PONG_BACKWARDS')
                                   | drawModule_transitionKeyProperty
                                   | 'Flags' ((WS? EQ WS?) | WS) condition_flags (WS condition_flags)*
                                   | 'WaitForStateToFinishIfPossible' ((WS? EQ WS?) | WS) (drawModule_conditionStateValue | 'TransitionFinishBeforeSwitch')
                                   | turret_property
                                   | 'TurretArtAngle' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                   | 'TurretPitch' ((WS? EQ WS?) | WS) ID
                                   | 'TurretArtPitch'  ((WS? EQ WS?) | WS) (INT | FLOAT)
                                   | alt_turret_property
                                   | 'AltTurretArtAngle' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                   | 'AltTurretPitch' ((WS? EQ WS?) | WS) ID
                                   | 'AltTurretArtPitch' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                   | 'ShowSubObject' ((WS? EQ WS?) | WS) (None_value | ID | BOX | TURRET | ALT_TURRET | STRING | armorType_value | damageType_value) (WS (None_value | ID | BOX | TURRET | ALT_TURRET | STRING | armorType_value | damageType_value))*
                                   | 'HideSubObject' ((WS? EQ WS?) | WS) (None_value | ID | BOX | TURRET | ALT_TURRET | STRING | armorType_value | damageType_value) (WS (None_value | ID | BOX | TURRET | ALT_TURRET | STRING | armorType_value | damageType_value))*
                                   | 'WeaponRecoilBone' ((WS? EQ WS?) | WS) WEAPONSLOT WS (None_value | ID | STRING | TURRET | ALT_TURRET)
                                   | 'WeaponFireFXBone' ((WS? EQ WS?) | WS) WEAPONSLOT WS (None_value | ID | STRING |  TURRET | ALT_TURRET)
                                   | 'WeaponMuzzleFlash' ((WS? EQ WS?) | WS) WEAPONSLOT WS (None_value | ID | TURRET | ALT_TURRET)
                                   | 'WeaponLaunchBone' ((WS? EQ WS?) | WS) WEAPONSLOT WS (None_value | ID | STRING | TURRET | ALT_TURRET)
                                   | 'Animation' ((WS? EQ WS?) | WS) (None_value | ID | TURRET | ALT_TURRET) ('.' (None_value | ID | TURRET | ALT_TURRET) (WS (INT | FLOAT))?)?
                                   | 'IdleAnimation' ((WS? EQ WS?) | WS) (None_value | ID) '.' (None_value | ID) (WS INT WS INT)?
                                   | 'ParticleSysBone' ((WS? EQ WS?) | WS) (None_value | ID | STRING | TURRET | ALT_TURRET) WS particlesystem_value
                                   ;

drawModule_transitionKeyProperty: 'TransitionKey' ((WS? EQ WS?) | WS) transitionKey_value;

objectClass_bodyModules: 'Body' ((WS? EQ WS?) | WS) (bodyModule_value | bodyModule_highlander) end;

bodyModule_value: ('ActiveBody' | 'ImmortalBody' | 'StructureBody' | 'UndeadBody' | 'InactiveBody') WS moduleTag_value ((WS? (bodyModule_properties) WS? NEWLINE) | (WS | NEWLINE))*;

bodyModule_properties: 'MaxHealth' ((WS? EQ WS?) | WS) (INT | FLOAT)
                     | 'InitialHealth' ((WS? EQ WS?) | WS) (INT | FLOAT)
					 | 'SecondLifeMaxHealth' ((WS? EQ WS?) | WS) (INT | FLOAT)
                     | 'SubdualDamageCap' ((WS? EQ WS?) | WS) (INT | FLOAT)
                     | 'SubdualDamageHealRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                     | 'SubdualDamageHealAmount' ((WS? EQ WS?) | WS) (INT | FLOAT)
                     ;

bodyModule_highlander: ('HighlanderBody' | 'HiveStructureBody') WS moduleTag_value NEWLINE ((WS? (bodyModule_properties | bodyModule_highlander_properties) WS? NEWLINE) | (WS | NEWLINE))*;
bodyModule_highlander_properties: 'PropagateDamageTypesToSlavesWhenExisting' ((WS? EQ WS?) | WS) damageType_value (WS damageType_value)*
                                | 'SwallowDamageTypesIfSlavesNotExisting' ((WS? EQ WS?) | WS) damageType_value (WS damageType_value)*
                                ;

objectClass_behaviorModules: 'Behavior' ((WS? EQ WS?) | WS) behaviorModule_value end;

behaviorModule_value: behaviorModule_animationSteeringUpdate
                    | behaviorModule_armorUpgradeUpdate
                    | behaviorModule_assultTroopAIUpdate
                    | behaviorModule_assistedTargetingUpdate
                    | behaviorModule_autoDepositUpdate
                    | behaviorModule_autoFindHealingUpdate
                    | behaviorModule_autoHealBehavior
                    | behaviorModule_baikonourLaunchPower
                    | behaviorModule_baseRegenerateUpdate
                    | behaviorModule_battleBusSlowDeathBehavior
                    | behaviorModule_battlePlanUpdate
					| behaviorModule_boneFXDamage
                    | behaviorModule_boneFXUpdate
                    | behaviorModule_bridgeBehavior
                    | behaviorModule_bridgeScaffoldBehavior
                    | behaviorModule_bridgeTowerBehavior
                    | behaviorModule_bunkerBusterBehavior
                    | behaviorModule_cashBountyPower
                    | behaviorModule_cashHackSpecialPower
                    | behaviorModule_checkpointUpdate
                    | behaviorModule_cleanupAreaPower
                    | behaviorModule_cleanupHazardUpdate
                    | behaviorModule_commandButtonHuntUpdate
                    | behaviorModule_commandSetUpgrade
                    | behaviorModule_convertToCarBombCrateCollide
                    | behaviorModule_costModifierUpgrade
                    | behaviorModule_countermeasuresBehavior
                    | behaviorModule_createCrateDie
                    | behaviorModule_createObjectDie
                    | behaviorModule_convertToHijackedVehicleCrateCollide
                    | behaviorModule_crushDie
                    | behaviorModule_damDie
                    | behaviorModule_defaultProductionExitUpdate
                    | behaviorModule_deletionUpdate
                    | behaviorModule_deliverPayloadAIUpdate
                    | behaviorModule_aiUpdateInterface
                    | behaviorModule_chinookAIUpdate
                    | behaviorModule_destroyDie
                    | behaviorModule_demoTrapUpdate
                    | behaviorModule_dumbProjectileBehavior
                    | behaviorModule_dynamicShroudClearingRangeUpdate
                    | behaviorModule_empUpdate
                    | behaviorModule_ejectPilotDie
                    | behaviorModule_enemyNearUpdate
                    | behaviorModule_experienceScalarUpgrade
                    | behaviorModule_fxListDie
                    | behaviorModule_fireWeaponCollide
                    | behaviorModule_fireOCLAfterWeaponCooldownUpdate
                    | behaviorModule_fireSpreadUpdate
                    | behaviorModule_fireWeaponPower
                    | behaviorModule_fireWeaponUpdate
                    | behaviorModule_fireWeaponWhenDamagedBehavior
                    | behaviorModule_fireWeaponWhenDeadBehavior
                    | behaviorModule_firestormDynamicGeometryInfoUpdate
                    | behaviorModule_flammableUpdate
                    | behaviorModule_flightDeckBehavior
                    | behaviorModule_floatUpdate
                    | behaviorModule_garrisonContain
                    | behaviorModule_generateMinefieldBehavior
                    | behaviorModule_grantScienceUpgrade
                    | behaviorModule_grantStealthBehavior
                    | behaviorModule_grantUpgradeCreate
                    | behaviorModule_hackInternetAIUpdate
                    | behaviorModule_healContain
                    | behaviorModule_heightDieUpdate
                    | behaviorModule_helicopterSlowDeathBehavior
                    | behaviorModule_helixContain
                    | behaviorModule_hijackerUpdate
                    | behaviorModule_hordeUpdate
                    | behaviorModule_instantDeathBehavior
                    | behaviorModule_internetHackContain
                    | behaviorModule_jetAIUpdate
                    | behaviorModule_jetSlowDeathBehavior
                    | behaviorModule_keepObjectDie
                    | behaviorModule_leafletDropBehavior
                    | behaviorModule_lifetimeUpdate
                    | behaviorModule_lockWeaponCreate
                    | behaviorModule_locomotorSetUpgrade
                    | behaviorModule_maxHealthUpgrade
                    | behaviorModule_minefieldBehavior
                    | behaviorModule_missileAIUpdate
                    | behaviorModule_missileLauncherBuildingUpdate
                    | behaviorModule_mobMemberSlavedUpdate
                    | behaviorModule_modelConditionUpgrade
                    | behaviorModule_moneyCrateCollide
                    | behaviorModule_neutronBlastBehavior
                    | behaviorModule_neutronMissileSlowDeathBehavior
                    | behaviorModule_neutronMissileUpdate
                    | behaviorModule_oclSpecialPower
                    | behaviorModule_oclUpdate
                    | behaviorModule_objectCreationUpgrade
                    | behaviorModule_overchargeBehavior
                    | behaviorModule_overlordContain
                    | behaviorModule_parachuteContain
                    | behaviorModule_parkingPlaceBehavior
                    | behaviorModule_particleUplinkCannonUpdate
                    | behaviorModule_passengersFireUpgrade
                    | behaviorModule_physicsBehavior
                    | behaviorModule_pilotFindVehicleUpdate
                    | behaviorModule_pointDefenseLaserUpdate
                    | behaviorModule_poisonedBehavior
                    | behaviorModule_powerPlantUpdate
                    | behaviorModule_powerPlantUpgrade
                    | behaviorModule_preorderCreate
                    | behaviorModule_productionUpdate
                    | behaviorModule_projectileStreamUpdate
                    | behaviorModule_propagandaTowerBehavior
                    | behaviorModule_queueProductionExitUpdate
                    | behaviorModule_radarUpdate
                    | behaviorModule_radarUpgrade
                    | behaviorModule_radiusDecalUpdate
                    | behaviorModule_railedTransportAIUpdate
                    | behaviorModule_railedTransportContain
                    | behaviorModule_railedTransportDockUpdate
                    | behaviorModule_railroadBehavior
                    | behaviorModule_rebuildHoleBehavior
                    | behaviorModule_rebuildHoleExposeDie
                    | behaviorModule_repairDockUpdate
                    | behaviorModule_replaceObjectUpgrade
                    | behaviorModule_riderChangeContain
                    | behaviorModule_sabotageCommandCenterCrateCollide
                    | behaviorModule_sabotageFakeBuildingCrateCollide
                    | behaviorModule_sabotageInternetCenterCrateCollide
                    | behaviorModule_sabotageMilitaryFactoryCrateCollide
                    | behaviorModule_sabotagePowerPlantCrateCollide
                    | behaviorModule_sabotageSuperweaponCrateCollide
                    | behaviorModule_sabotageSupplyCenterCrateCollide
                    | behaviorModule_salvageCrateCollide
                    | behaviorModule_slavedUpdate
                    | behaviorModule_slowDeathBehavior
                    | behaviorModule_smartBombTargetHomingUpdate
                    | behaviorModule_spawnBehavior
                    | behaviorModule_spawnPointProductionExitUpdate
                    | behaviorModule_specialAbility
                    | behaviorModule_specialAbilityUpdate
                    | behaviorModule_specialPowerCompletionDie
                    | behaviorModule_specialPowerCreate
                    | behaviorModule_spectreGunshipDeploymentUpdate
                    | behaviorModule_spectreGunshipUpdate
                    | behaviorModule_spyVisionSpecialPower
                    | behaviorModule_spyVisionUpdate
                    | behaviorModule_squishCollide
                    | behaviorModule_statusBitUpgrade
                    | behaviorModule_stealthDetectorUpdate
                    | behaviorModule_stealthUpdate
                    | behaviorModule_stealthUpgrade
                    | behaviorModule_stickyBombUpdate
                    | behaviorModule_structureCollapseUpdate
                    | behaviorModule_structureToppleUpdate
                    | behaviorModule_subObjectsUpgrade
                    | behaviorModule_supplyCenterCreate
                    | behaviorModule_supplyCenterDockUpdate
                    | behaviorModule_supplyCenterProductionExitUpdate
                    | behaviorModule_supplyTruckAIUpdate
                    | behaviorModule_supplyWarehouseCreate
                    | behaviorModule_supplyWarehouseCripplingBehavior
                    | behaviorModule_supplyWarehouseDockUpdate
                    | behaviorModule_techBuildingBehavior
                    | behaviorModule_tensileFormationUpdate
                    | behaviorModule_toppleUpdate
                    | behaviorModule_transitionDamageFX
                    | behaviorModule_transportAIUpdate
                    | behaviorModule_transportContain
                    | behaviorModule_tunnelContain
                    | behaviorModule_unitCrateCollide
                    | behaviorModule_unpauseSpecialPowerUpgrade
                    | behaviorModule_upgradeDie
                    | behaviorModule_veterancyCrateCollide
                    | behaviorModule_veterancyGainCreate
                    | behaviorModule_dozerAIUpdate
                    | behaviorModule_deployableAIUpdate
                    | behaviorModule_wanderAIUpdate
                    | behaviorModule_waveGuideUpdate
                    | behaviorModule_weaponBonusUpdate
                    | behaviorModule_weaponBonusUpgrade
                    | behaviorModule_weaponSetUpgrade
                    | behaviorModule_workerAIUpdate
                    ;

behaviorModule_animationSteeringUpdate: 'AnimationSteeringUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_animationSteeringUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_animationSteeringUpdate_properties: 'MinTransitionTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 ;

behaviorModule_armorUpgradeUpdate: 'ArmorUpgrade' WS moduleTag_value NEWLINE ((WS? behaviorModule_armorUpgradeUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_armorUpgradeUpdate_properties: 'TriggeredBy' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                            | 'ConflictsWith' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                            | 'RemovesUpgrade' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                            | 'FXListUpgrade' ((WS? EQ WS?) | WS) fxlist_value
                                            | 'RequiresAllTriggers' ((WS? EQ WS?) | WS) BOOLEAN
                                            ;

behaviorModule_assistedTargetingUpdate: 'AssistedTargetingUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_assistedTargetingUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_assistedTargetingUpdate_properties: 'AssistingClipSize' ((WS? EQ WS?) | WS) INT
                                                 | 'AssistingWeaponSlot' ((WS? EQ WS?) | WS) WEAPONSLOT
                                                 | 'LaserFromAssisted' ((WS? EQ WS?) | WS) object_value
                                                 | 'LaserToTarget' ((WS? EQ WS?) | WS) object_value
                                                 ;

behaviorModule_autoDepositUpdate: 'AutoDepositUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_autoDepositUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_autoDepositUpdate_properties: 'DepositTiming' ((WS? EQ WS?) | WS) INT
                                           | 'DepositAmount' ((WS? EQ WS?) | WS) INT
                                           | 'InitialCaptureBonus' ((WS? EQ WS?) | WS) INT
                                           | 'ActualMoney' ((WS? EQ WS?) | WS) BOOLEAN
                                           | 'UpgradedBoost' ((WS? EQ WS?) | WS) UPGRADEBOOST WS BOOST
                                           ;

behaviorModule_autoFindHealingUpdate: 'AutoFindHealingUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_autoFindHealingUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_autoFindHealingUpdate_properties: 'ScanRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                               | 'ScanRange' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                               | 'NeverHeal' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                               | 'AlwaysHeal' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                               ;

behaviorModule_autoHealBehavior: 'AutoHealBehavior' WS moduleTag_value NEWLINE ((WS? behaviorModule_autoHealBehavior_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_autoHealBehavior_properties: 'StartsActive' ((WS? EQ WS?) | WS) BOOLEAN
                                                | 'SingleBurst' ((WS? EQ WS?) | WS) BOOLEAN
                                                | 'HealingAmount' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                | 'HealingDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                | 'Radius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                | 'KindOf' ((WS? EQ WS?) | WS) kindof_value
                                                | 'ForbiddenKindOf' ((WS? EQ WS?) | WS) kindof_value
                                                | 'RadiusParticleSystemName' ((WS? EQ WS?) | WS) particlesystem_value
                                                | 'UnitHealPulseParticleSystemName' ((WS? EQ WS?) | WS) particlesystem_value
                                                | 'StartHealingDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                | 'AffectsWholePlayer' ((WS? EQ WS?) | WS) BOOLEAN
                                                | 'SkipSelfForHealing' ((WS? EQ WS?) | WS) BOOLEAN
                                                | 'TriggeredBy' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                                | 'ConflictsWith' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                                | 'RemovesUpgrades' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                                | 'FXListUpgrade' ((WS? EQ WS?) | WS) fxlist_value
                                                | 'RequiresAllTriggers' ((WS? EQ WS?) | WS) BOOLEAN
                                                ;

behaviorModule_baikonourLaunchPower: 'BaikonurLaunchPower' WS moduleTag_value NEWLINE ((WS? behaviorModule_baikonourLaunchPower_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_baikonourLaunchPower_properties: 'SpecialPowerTemplate' ((WS? EQ WS?) | WS) specialpower_value
                                              | 'UpdateModuleStartsAttack' ((WS? EQ WS?) | WS) BOOLEAN
                                              | 'StartsPaused' ((WS? EQ WS?) | WS) BOOLEAN
                                              | 'InitiateSound' ((WS? EQ WS?) | WS) audioevent_value
                                              | 'ScriptedSpecialPowerOnly' ((WS? EQ WS?) | WS) BOOLEAN
                                              | 'DetonationObject' ((WS? EQ WS?) | WS) object_value
                                              ;

behaviorModule_baseRegenerateUpdate: 'BaseRegenerateUpdate' WS moduleTag_value NEWLINE (WS | NEWLINE)*;

behaviorModule_battleBusSlowDeathBehavior: 'BattleBusSlowDeathBehavior' WS moduleTag_value NEWLINE ((WS? behaviorModule_battleBusSlowDeathBehavior_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_battleBusSlowDeathBehavior_properties: 'SinkRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                    | 'ProbabilityModifier' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                    | 'ModifierBonusPerOverkillPercent' ((WS? EQ WS?) | WS) PERCENT
                                                    | 'SinkDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                    | 'SinkDelayVariance' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                    | 'DestructionDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                    | 'DestructionDelayVariance' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                    | 'DestructionAltitude' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                    | FX ((WS? EQ WS?) | WS) TimePoint WS fxlist_value
                                                    | 'OCL' ((WS? EQ WS?) | WS) TimePoint WS ocl_value
                                                    | 'Weapon' ((WS? EQ WS?) | WS) TimePoint WS weapon_value
                                                    | 'FlingForce' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                    | 'FlingForceVariance' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                    | 'FlingPitch' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                    | 'FlingPitchVariance' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                    | behaviorModule_deathTypes
                                                    | 'VeterancyLevels' ((WS? EQ WS?) | WS) veterency_modifier (WS veterency_modifier)*
                                                    | 'ExemptStatus' ((WS? EQ WS?) | WS) status_value (WS status_value)* (WS status_value)*
                                                    | 'RequiredStatus' ((WS? EQ WS?) | WS) status_value
                                                    | 'FXStartUndeath' ((WS? EQ WS?) | WS) fxlist_value
                                                    | 'OCLStartUndeath' ((WS? EQ WS?) | WS) ocl_value
                                                    | 'FXHitGround' ((WS? EQ WS?) | WS) fxlist_value
                                                    | 'OCLHitGround' ((WS? EQ WS?) | WS) ocl_value
                                                    | 'ThrowForce' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                    | 'PercentDamageToPassengers' ((WS? EQ WS?) | WS) PERCENT
                                                    | 'EmptyHulkDestructionDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                    ;

behaviorModule_battlePlanUpdate: 'BattlePlanUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_battlePlanUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_battlePlanUpdate_properties: 'SpecialPowerTemplate' ((WS? EQ WS?) | WS) specialpower_value
                                          | 'BombardmentPlanAnimationTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'HoldTheLinePlanAnimationTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'SearchAndDestroyPlanAnimationTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'TransitionIdleTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'BombardmentPlanUnpackSoundName' ((WS? EQ WS?) | WS) audioevent_value
                                          | 'BombardmentPlanPackSoundName' ((WS? EQ WS?) | WS) audioevent_value
                                          | 'BombardmentMessageLabel' ((WS? EQ WS?) | WS) ID
                                          | 'BombardmentAnnouncementName' ((WS? EQ WS?) | WS) ID
                                          | 'SearchAndDestroyPlanUnpackSoundName' ((WS? EQ WS?) | WS) audioevent_value
                                          | 'SearchAndDestroyPlanIdleLoopSoundName' ((WS? EQ WS?) | WS) audioevent_value
                                          | 'SearchAndDestroyPlanPackSoundName' ((WS? EQ WS?) | WS) audioevent_value
                                          | 'SearchAndDestroyMessageLabel' ((WS? EQ WS?) | WS) ID
                                          | 'SearchAndDestroyAnnouncementName' ((WS? EQ WS?) | WS) ID
                                          | 'HoldTheLinePlanUnpackSoundName' ((WS? EQ WS?) | WS) audioevent_value
                                          | 'HoldTheLinePlanPackSoundName' ((WS? EQ WS?) | WS) audioevent_value
                                          | 'HoldTheLineMessageLabel' ((WS? EQ WS?) | WS) ID
                                          | 'HoldTheLineAnnouncementName' ((WS? EQ WS?) | WS) ID
                                          | 'ValidMemberKindOf' ((WS? EQ WS?) | WS) kindof_value (WS kindof_value)*
                                          | 'InvalidMemberKindOf' ((WS? EQ WS?) | WS) kindof_value (WS kindof_value)*
                                          | 'BattlePlanChangeParalyzeTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'HoldTheLinePlanArmorDamageScalar' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'SearchAndDestroyPlanSightRangeScalar' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'StrategyCenterSearchAndDestroySightRangeScalar' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'StrategyCenterSearchAndDestroyDetectsStealth' ((WS? EQ WS?) | WS) BOOLEAN
                                          | 'StrategyCenterHoldTheLineMaxHealthScalar' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'StrategyCenterHoldTheLineMaxHealthChangeType' ((WS? EQ WS?) | WS) ID
                                          | 'VisionObjectName' ((WS? EQ WS?) | WS) object_value
                                          ;

behaviorModule_boneFXDamage: ('BoneFXDamage') WS moduleTag_value NEWLINE (WS | NEWLINE)*;

behaviorModule_boneFXUpdate: ('BoneFXUpdate') WS moduleTag_value NEWLINE ((WS? behaviorModule_boneFXUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_boneFXUpdate_properties:   'DamageFXTypes' ((WS? EQ WS?) | WS) damageType_value (WS damageType_value)*
                                  | 'DamageOCLTypes' ((WS? EQ WS?) | WS) damageType_value (WS damageType_value)*
                                  | 'DamageParticleTypes' ((WS? EQ WS?) | WS) damageType_value (WS damageType_value)*
                                  | 'PristineFXList1' ((WS? EQ WS?) | WS) behaviorModule_fXList
                                  | 'PristineFXList2' ((WS? EQ WS?) | WS) behaviorModule_fXList
                                  | 'PristineFXList3' ((WS? EQ WS?) | WS) behaviorModule_fXList
                                  | 'PristineFXList4' ((WS? EQ WS?) | WS) behaviorModule_fXList
                                  | 'PristineFXList5' ((WS? EQ WS?) | WS) behaviorModule_fXList
                                  | 'PristineFXList6' ((WS? EQ WS?) | WS) behaviorModule_fXList
                                  | 'PristineFXList7' ((WS? EQ WS?) | WS) behaviorModule_fXList
                                  | 'PristineFXList8' ((WS? EQ WS?) | WS) behaviorModule_fXList
                                  | 'DamagedFXList1' ((WS? EQ WS?) | WS) behaviorModule_fXList
                                  | 'DamagedFXList2' ((WS? EQ WS?) | WS) behaviorModule_fXList
                                  | 'DamagedFXList3' ((WS? EQ WS?) | WS) behaviorModule_fXList
                                  | 'DamagedFXList4' ((WS? EQ WS?) | WS) behaviorModule_fXList
                                  | 'DamagedFXList5' ((WS? EQ WS?) | WS) behaviorModule_fXList
                                  | 'DamagedFXList6' ((WS? EQ WS?) | WS) behaviorModule_fXList
                                  | 'DamagedFXList7' ((WS? EQ WS?) | WS) behaviorModule_fXList
                                  | 'DamagedFXList8' ((WS? EQ WS?) | WS) behaviorModule_fXList
                                  | 'ReallyDamagedFXList1' ((WS? EQ WS?) | WS) behaviorModule_fXList
                                  | 'ReallyDamagedFXList2' ((WS? EQ WS?) | WS) behaviorModule_fXList
                                  | 'ReallyDamagedFXList3' ((WS? EQ WS?) | WS) behaviorModule_fXList
                                  | 'ReallyDamagedFXList4' ((WS? EQ WS?) | WS) behaviorModule_fXList
                                  | 'ReallyDamagedFXList5' ((WS? EQ WS?) | WS) behaviorModule_fXList
                                  | 'ReallyDamagedFXList6' ((WS? EQ WS?) | WS) behaviorModule_fXList
                                  | 'ReallyDamagedFXList7' ((WS? EQ WS?) | WS) behaviorModule_fXList
                                  | 'ReallyDamagedFXList8' ((WS? EQ WS?) | WS) behaviorModule_fXList
                                  | 'RubbleFXList1' ((WS? EQ WS?) | WS) behaviorModule_fXList
                                  | 'RubbleFXList2' ((WS? EQ WS?) | WS) behaviorModule_fXList
                                  | 'RubbleFXList3' ((WS? EQ WS?) | WS) behaviorModule_fXList
                                  | 'RubbleFXList4' ((WS? EQ WS?) | WS) behaviorModule_fXList
                                  | 'RubbleFXList5' ((WS? EQ WS?) | WS) behaviorModule_fXList
                                  | 'RubbleFXList6' ((WS? EQ WS?) | WS) behaviorModule_fXList
                                  | 'RubbleFXList7' ((WS? EQ WS?) | WS) behaviorModule_fXList
                                  | 'RubbleFXList8' ((WS? EQ WS?) | WS) behaviorModule_fXList
                                  | 'PristineOCL1' ((WS? EQ WS?) | WS) behaviorModule_ocl
                                  | 'PristineOCL2' ((WS? EQ WS?) | WS) behaviorModule_ocl
                                  | 'PristineOCL3' ((WS? EQ WS?) | WS) behaviorModule_ocl
                                  | 'PristineOCL4' ((WS? EQ WS?) | WS) behaviorModule_ocl
                                  | 'PristineOCL5' ((WS? EQ WS?) | WS) behaviorModule_ocl
                                  | 'PristineOCL6' ((WS? EQ WS?) | WS) behaviorModule_ocl
                                  | 'PristineOCL7' ((WS? EQ WS?) | WS) behaviorModule_ocl
                                  | 'PristineOCL8' ((WS? EQ WS?) | WS) behaviorModule_ocl
                                  | 'DamagedOCL1' ((WS? EQ WS?) | WS) behaviorModule_ocl
                                  | 'DamagedOCL2' ((WS? EQ WS?) | WS) behaviorModule_ocl
                                  | 'DamagedOCL3' ((WS? EQ WS?) | WS) behaviorModule_ocl
                                  | 'DamagedOCL4' ((WS? EQ WS?) | WS) behaviorModule_ocl
                                  | 'DamagedOCL5' ((WS? EQ WS?) | WS) behaviorModule_ocl
                                  | 'DamagedOCL6' ((WS? EQ WS?) | WS) behaviorModule_ocl
                                  | 'DamagedOCL7' ((WS? EQ WS?) | WS) behaviorModule_ocl
                                  | 'DamagedOCL8' ((WS? EQ WS?) | WS) behaviorModule_ocl
                                  | 'ReallyDamagedOCL1' ((WS? EQ WS?) | WS) behaviorModule_ocl
                                  | 'ReallyDamagedOCL2' ((WS? EQ WS?) | WS) behaviorModule_ocl
                                  | 'ReallyDamagedOCL3' ((WS? EQ WS?) | WS) behaviorModule_ocl
                                  | 'ReallyDamagedOCL4' ((WS? EQ WS?) | WS) behaviorModule_ocl
                                  | 'ReallyDamagedOCL5' ((WS? EQ WS?) | WS) behaviorModule_ocl
                                  | 'ReallyDamagedOCL6' ((WS? EQ WS?) | WS) behaviorModule_ocl
                                  | 'ReallyDamagedOCL7' ((WS? EQ WS?) | WS) behaviorModule_ocl
                                  | 'ReallyDamagedOCL8' ((WS? EQ WS?) | WS) behaviorModule_ocl
                                  | 'RubbleOCL1' ((WS? EQ WS?) | WS) behaviorModule_ocl
                                  | 'RubbleOCL2' ((WS? EQ WS?) | WS) behaviorModule_ocl
                                  | 'RubbleOCL3' ((WS? EQ WS?) | WS) behaviorModule_ocl
                                  | 'RubbleOCL4' ((WS? EQ WS?) | WS) behaviorModule_ocl
                                  | 'RubbleOCL5' ((WS? EQ WS?) | WS) behaviorModule_ocl
                                  | 'RubbleOCL6' ((WS? EQ WS?) | WS) behaviorModule_ocl
                                  | 'RubbleOCL7' ((WS? EQ WS?) | WS) behaviorModule_ocl
                                  | 'RubbleOCL8' ((WS? EQ WS?) | WS) behaviorModule_ocl
                                  | 'PristineParticleSystem1' ((WS? EQ WS?) | WS) behaviorModule_particleSystem
                                  | 'PristineParticleSystem2' ((WS? EQ WS?) | WS) behaviorModule_particleSystem
                                  | 'PristineParticleSystem3' ((WS? EQ WS?) | WS) behaviorModule_particleSystem
                                  | 'PristineParticleSystem4' ((WS? EQ WS?) | WS) behaviorModule_particleSystem
                                  | 'PristineParticleSystem5' ((WS? EQ WS?) | WS) behaviorModule_particleSystem
                                  | 'PristineParticleSystem6' ((WS? EQ WS?) | WS) behaviorModule_particleSystem
                                  | 'PristineParticleSystem7' ((WS? EQ WS?) | WS) behaviorModule_particleSystem
                                  | 'PristineParticleSystem8' ((WS? EQ WS?) | WS) behaviorModule_particleSystem
                                  | 'DamagedParticleSystem1' ((WS? EQ WS?) | WS) behaviorModule_particleSystem
                                  | 'DamagedParticleSystem2' ((WS? EQ WS?) | WS) behaviorModule_particleSystem
                                  | 'DamagedParticleSystem3' ((WS? EQ WS?) | WS) behaviorModule_particleSystem
                                  | 'DamagedParticleSystem4' ((WS? EQ WS?) | WS) behaviorModule_particleSystem
                                  | 'DamagedParticleSystem5' ((WS? EQ WS?) | WS) behaviorModule_particleSystem
                                  | 'DamagedParticleSystem6' ((WS? EQ WS?) | WS) behaviorModule_particleSystem
                                  | 'DamagedParticleSystem7' ((WS? EQ WS?) | WS) behaviorModule_particleSystem
                                  | 'DamagedParticleSystem8' ((WS? EQ WS?) | WS) behaviorModule_particleSystem
                                  | 'ReallyDamagedParticleSystem1' ((WS? EQ WS?) | WS) behaviorModule_particleSystem
                                  | 'ReallyDamagedParticleSystem2' ((WS? EQ WS?) | WS) behaviorModule_particleSystem
                                  | 'ReallyDamagedParticleSystem3' ((WS? EQ WS?) | WS) behaviorModule_particleSystem
                                  | 'ReallyDamagedParticleSystem4' ((WS? EQ WS?) | WS) behaviorModule_particleSystem
                                  | 'ReallyDamagedParticleSystem5' ((WS? EQ WS?) | WS) behaviorModule_particleSystem
                                  | 'ReallyDamagedParticleSystem6' ((WS? EQ WS?) | WS) behaviorModule_particleSystem
                                  | 'ReallyDamagedParticleSystem7' ((WS? EQ WS?) | WS) behaviorModule_particleSystem
                                  | 'ReallyDamagedParticleSystem8' ((WS? EQ WS?) | WS) behaviorModule_particleSystem
                                  | 'RubbleParticleSystem1' ((WS? EQ WS?) | WS) behaviorModule_particleSystem
                                  | 'RubbleParticleSystem2' ((WS? EQ WS?) | WS) behaviorModule_particleSystem
                                  | 'RubbleParticleSystem3' ((WS? EQ WS?) | WS) behaviorModule_particleSystem
                                  | 'RubbleParticleSystem4' ((WS? EQ WS?) | WS) behaviorModule_particleSystem
                                  | 'RubbleParticleSystem5' ((WS? EQ WS?) | WS) behaviorModule_particleSystem
                                  | 'RubbleParticleSystem6' ((WS? EQ WS?) | WS) behaviorModule_particleSystem
                                  | 'RubbleParticleSystem7' ((WS? EQ WS?) | WS) behaviorModule_particleSystem
                                  | 'RubbleParticleSystem8' ((WS? EQ WS?) | WS) behaviorModule_particleSystem
                                  ;

behaviorModule_fXList: BONE WS ONLYONCE WS INT WS INT WS FXLIST;
behaviorModule_ocl: BONE WS ONLYONCE WS INT WS INT WS OCL;
behaviorModule_particleSystem: BONE WS ONLYONCE WS INT WS INT WS PSYS;

ONLYONCE: 'OnlyOnce:' BOOLEAN;
OCL: 'OCL:' ID;

behaviorModule_bridgeBehavior: 'BridgeBehavior' WS moduleTag_value NEWLINE ((WS? behaviorModule_bridgeBehavior_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_bridgeBehavior_properties: 'LateralScaffoldSpeed' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'VerticalScaffoldSpeed' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'BridgeDieFX' ((WS? EQ WS?) | WS) FXLIST WS DELAY WS BONE
                                          | 'BridgeDieOCL' ((WS? EQ WS?) | WS) OCL WS DELAY WS BONE
                                          ;

DELAY: 'Delay:' WS? (INT | FLOAT);

behaviorModule_bridgeScaffoldBehavior: 'BridgeScaffoldBehavior' WS moduleTag_value NEWLINE ((WS? behaviorModule_bridgeScaffoldBehavior_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_bridgeScaffoldBehavior_properties: WS ; //TODO Research properties for this

behaviorModule_bridgeTowerBehavior: 'BridgeTowerBehavior' WS moduleTag_value NEWLINE ((WS? behaviorModule_bridgeTowerBehavior_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_bridgeTowerBehavior_properties: WS ; //TODO Research properties for this

behaviorModule_bunkerBusterBehavior: 'BunkerBusterBehavior' WS moduleTag_value NEWLINE ((WS? behaviorModule_bunkerBusterBehavior_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_bunkerBusterBehavior_properties: 'UpgradeRequired' ((WS? EQ WS?) | WS) upgrade_value
                                              | 'DetonationFX' ((WS? EQ WS?) | WS) fxlist_value
                                              | 'CrashThroughBunkerFX' ((WS? EQ WS?) | WS) fxlist_value
                                              | 'CrashThroughBunkerFXFrequency' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'SeismicEffectRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'SeismicEffectMagnitude' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'ShockwaveWeaponTemplate' ((WS? EQ WS?) | WS) weapon_value
                                              | 'OccupantDamageWeaponTemplate' ((WS? EQ WS?) | WS) weapon_value
                                              ;

behaviorModule_cashBountyPower: 'CashBountyPower' WS moduleTag_value NEWLINE ((WS? behaviorModule_cashBountyPower_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_cashBountyPower_properties: 'SpecialPowerTemplate' ((WS? EQ WS?) | WS) specialpower_value
                                           | 'UpdateModuleStartsAttack' ((WS? EQ WS?) | WS) BOOLEAN
                                           | 'StartsPaused' ((WS? EQ WS?) | WS) BOOLEAN
                                           | 'InitiateSound' ((WS? EQ WS?) | WS) audioevent_value
                                           | 'ScriptedSpecialPowerOnly' ((WS? EQ WS?) | WS) BOOLEAN
                                           | 'Bounty' ((WS? EQ WS?) | WS) PERCENT
                                           ;

behaviorModule_cashHackSpecialPower: 'CashHackSpecialPower' WS moduleTag_value NEWLINE ((WS? behaviorModule_cashHackSpecialPower_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_cashHackSpecialPower_properties: 'SpecialPowerTemplate' ((WS? EQ WS?) | WS) specialpower_value
                                              | 'UpdateModuleStartsAttack' ((WS? EQ WS?) | WS) BOOLEAN
                                              | 'StartsPaused' ((WS? EQ WS?) | WS) BOOLEAN
                                              | 'InitiateSound' ((WS? EQ WS?) | WS) audioevent_value
                                              | 'ScriptedSpecialPowerOnly' ((WS? EQ WS?) | WS) BOOLEAN
                                              | 'UpgradeMoneyAmount' ((WS? EQ WS?) | WS) science_value WS INT
                                              | 'MoneyAmount' ((WS? EQ WS?) | WS) INT
                                              ;

behaviorModule_checkpointUpdate: 'CheckpointUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_checkpointUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_checkpointUpdate_properties: 'ScanDelayTime' ((WS? EQ WS?) | WS) (INT | FLOAT);

behaviorModule_cleanupAreaPower: 'CleanupAreaPower' WS moduleTag_value NEWLINE ((WS? behaviorModule_cleanupAreaPower_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_cleanupAreaPower_properties: 'SpecialPowerTemplate' ((WS? EQ WS?) | WS) specialpower_value
                                           | 'UpdateModuleStartsAttack' ((WS? EQ WS?) | WS) BOOLEAN
                                           | 'StartsPaused' ((WS? EQ WS?) | WS) BOOLEAN
                                           | 'InitiateSound' ((WS? EQ WS?) | WS) audioevent_value
                                           | 'ScriptedSpecialPowerOnly' ((WS? EQ WS?) | WS) BOOLEAN
                                           | 'MaxMoveDistanceFromLocation' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                           ;

behaviorModule_cleanupHazardUpdate: 'CleanupHazardUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_cleanupHazardUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_cleanupHazardUpdate_properties: 'WeaponSlot' ((WS? EQ WS?) | WS) WEAPONSLOT
                                             | 'ScanRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ScanRange' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             ;

behaviorModule_commandButtonHuntUpdate: 'CommandButtonHuntUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_commandButtonHuntUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_commandButtonHuntUpdate_properties: 'ScanRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                  | 'ScanRange' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                  ;

behaviorModule_commandSetUpgrade: 'CommandSetUpgrade' WS moduleTag_value NEWLINE ((WS? behaviorModule_commandSetUpgrade_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_commandSetUpgrade_properties: 'TriggeredBy' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                             | 'ConflictsWith' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                             | 'RemovesUpgrades' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                             | 'FXListUpgrade' ((WS? EQ WS?) | WS) fxlist_value
                                             | 'RequiresAllTriggers' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'CommandSet' ((WS? EQ WS?) | WS) commandSet_value
                                             | 'CommandSetAlt' ((WS? EQ WS?) | WS) commandSet_value
                                             | 'TriggerAlt' ((WS? EQ WS?) | WS) upgrade_value
                                             ;

behaviorModule_convertToCarBombCrateCollide: 'ConvertToCarBombCrateCollide' WS moduleTag_value NEWLINE ((WS? behaviorModule_convertToCarBombCrateCollide_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_convertToCarBombCrateCollide_properties: 'RequiredKindOf' ((WS? EQ WS?) | WS) kindof_value
                                                      | 'ForbiddenKindOf' ((WS? EQ WS?) | WS) kindof_value
                                                      | 'ForbidOwnerPlayer' ((WS? EQ WS?) | WS) BOOLEAN
                                                      | 'BuildingPickup' ((WS? EQ WS?) | WS) BOOLEAN
                                                      | 'HumanOnly' ((WS? EQ WS?) | WS) BOOLEAN
                                                      | 'PickupScience' ((WS? EQ WS?) | WS) science_value
                                                      | 'ExecuteFX' ((WS? EQ WS?) | WS) fxlist_value
                                                      | 'ExecuteAnimation' ((WS? EQ WS?) | WS) animation2d_value
                                                      | 'ExecuteAnimationTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | 'ExecuteAnimationZRise' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | 'ExecuteAnimationFades' ((WS? EQ WS?) | WS) BOOLEAN
                                                      | 'FXList' ((WS? EQ WS?) | WS) fxlist_value
                                                      ;

behaviorModule_costModifierUpgrade: 'CostModifierUpgrade' WS moduleTag_value NEWLINE ((WS? behaviorModule_costModifierUpgrade_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_costModifierUpgrade_properties: 'TriggeredBy' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                             | 'ConflictsWith' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                             | 'RemovesUpgrades' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                             | 'FXListUpgrade' ((WS? EQ WS?) | WS) fxlist_value
                                             | 'RequiresAllTriggers' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'EffectKindOf' ((WS? EQ WS?) | WS) kindof_value
                                             | 'Percentage' ((WS? EQ WS?) | WS) PERCENT
                                             ;

behaviorModule_countermeasuresBehavior: 'CountermeasuresBehavior' WS moduleTag_value NEWLINE ((WS? behaviorModule_countermeasuresBehavior_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_countermeasuresBehavior_properties: 'FlareTemplateName' ((WS? EQ WS?) | WS) object_value
                                                 | 'FlareBoneBaseName' ((WS? EQ WS?) | WS) (ID | STRING)
                                                 | 'VolleySize' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'VolleyArcAngle' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'VolleyVelocityFactor' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'DelayBetweenVolleys' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'NumberOfVolleys' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'ReloadTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'EvasionRate' ((WS? EQ WS?) | WS) PERCENT
                                                 | 'MustReloadAtAirfield' ((WS? EQ WS?) | WS) BOOLEAN
                                                 | 'MissileDecoyDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'ReactionLaunchLatency' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'TriggeredBy' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                                 | 'ConflictsWith' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                                 | 'RemovesUpgrades' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                                 | 'FXListUpgrade' ((WS? EQ WS?) | WS) fxlist_value
                                                 | 'RequiresAllTriggers' ((WS? EQ WS?) | WS) BOOLEAN
                                                 ;

behaviorModule_createCrateDie: 'CreateCrateDie' WS moduleTag_value (WS 'SalvageData')? NEWLINE ((WS? behaviorModule_createCrateDie_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_createCrateDie_properties: behaviorModule_deathTypes
                                          | 'VeterancyLevels' ((WS? EQ WS?) | WS) veterency_modifier (WS veterency_modifier)*
                                          | 'ExemptStatus' ((WS? EQ WS?) | WS) status_value (WS status_value)* (WS status_value)*
                                          | 'RequiredStatus' ((WS? EQ WS?) | WS) status_value
                                          | 'CrateData' ((WS? EQ WS?) | WS) crate_value
                                          ;

behaviorModule_createObjectDie: 'CreateObjectDie' WS moduleTag_value NEWLINE ((WS? behaviorModule_createObjectDie_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_createObjectDie_properties: behaviorModule_deathTypes
                                          | 'VeterancyLevels' ((WS? EQ WS?) | WS) veterency_modifier (WS veterency_modifier)*
                                          | 'ExemptStatus' ((WS? EQ WS?) | WS) status_value (WS status_value)* (WS status_value)*
                                          | 'RequiredStatus' ((WS? EQ WS?) | WS) status_value
                                          | 'CreationList' ((WS? EQ WS?) | WS) ID
                                          | 'TransferPreviousHealth' ((WS? EQ WS?) | WS) BOOLEAN
                                          ;

behaviorModule_convertToHijackedVehicleCrateCollide: 'ConvertToHijackedVehicleCrateCollide' WS moduleTag_value NEWLINE ((WS? behaviorModule_convertToHijackedVehicleCrateCollide_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_convertToHijackedVehicleCrateCollide_properties: 'RequiredKindOf' ((WS? EQ WS?) | WS) kindof_value
                                                      | 'ForbiddenKindOf' ((WS? EQ WS?) | WS) kindof_value
                                                      | 'ForbidOwnerPlayer' ((WS? EQ WS?) | WS) BOOLEAN
                                                      | 'BuildingPickup' ((WS? EQ WS?) | WS) BOOLEAN
                                                      | 'HumanOnly' ((WS? EQ WS?) | WS) BOOLEAN
                                                      | 'PickupScience' ((WS? EQ WS?) | WS) science_value
                                                      | 'ExecuteFX' ((WS? EQ WS?) | WS) fxlist_value
                                                      | 'ExecuteAnimation' ((WS? EQ WS?) | WS) animation2d_value
                                                      | 'ExecuteAnimationTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | 'ExecuteAnimationZRise' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | 'ExecuteAnimationFades' ((WS? EQ WS?) | WS) BOOLEAN
                                                      | 'FXList' ((WS? EQ WS?) | WS) fxlist_value
                                                      ;

behaviorModule_crushDie: 'CrushDie' WS moduleTag_value NEWLINE ((WS? behaviorModule_crushDie_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_crushDie_properties: behaviorModule_deathTypes
                                    | 'VeterancyLevels' ((WS? EQ WS?) | WS) veterency_modifier (WS veterency_modifier)*
                                    | 'ExemptStatus' ((WS? EQ WS?) | WS) status_value (WS status_value)* (WS status_value)*
                                    | 'RequiredStatus' ((WS? EQ WS?) | WS) status_value
                                    | 'TotalCrushSound' ((WS? EQ WS?) | WS) audioevent_value
                                    | 'BackEndCrushSound' ((WS? EQ WS?) | WS) audioevent_value
                                    | 'FrontEndCrushSound' ((WS? EQ WS?) | WS) audioevent_value
                                    | 'TotalCrushSoundPercent' ((WS? EQ WS?) | WS) PERCENT
                                    | 'BackEndCrushSoundPercent' ((WS? EQ WS?) | WS) PERCENT
                                    | 'FrontEndCrushSoundPercent' ((WS? EQ WS?) | WS) PERCENT
                                    ;

behaviorModule_damDie: 'DamDie' WS moduleTag_value NEWLINE ((WS? behaviorModule_damDie_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_damDie_properties: behaviorModule_deathTypes
                                  | 'VeterancyLevels' ((WS? EQ WS?) | WS) veterency_modifier (WS veterency_modifier)*
                                  | 'ExemptStatus' ((WS? EQ WS?) | WS) status_value (WS status_value)* (WS status_value)*
                                  | 'RequiredStatus' ((WS? EQ WS?) | WS) status_value
                                  ;

behaviorModule_defaultProductionExitUpdate: 'DefaultProductionExitUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_defaultProductionExitUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_defaultProductionExitUpdate_properties: 'UnitCreatePoint' ((WS? EQ WS?) | WS) coord3D
                                                    | 'NaturalRallyPoint' ((WS? EQ WS?) | WS) coord3D
                                                    | 'UseSpawnRallyPoint' ((WS? EQ WS?) | WS) BOOLEAN
                                                    ;

behaviorModule_deletionUpdate: 'DeletionUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_deletionUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_deletionUpdate_properties: 'MinLifetime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'MaxLifetime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          ;

behaviorModule_demoTrapUpdate: 'DemoTrapUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_demoTrapUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_demoTrapUpdate_properties: 'DefaultProximityMode' ((WS? EQ WS?) | WS) BOOLEAN
                                         | 'DetonationWeaponSlot' ((WS? EQ WS?) | WS) WEAPONSLOT
                                         | 'ProximityModeWeaponSlot' ((WS? EQ WS?) | WS) WEAPONSLOT
                                         | 'ManualModeWeaponSlot' ((WS? EQ WS?) | WS) WEAPONSLOT
                                         | 'TriggerDetonationRange' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                         | 'IgnoreTargetTypes' ((WS? EQ WS?) | WS) kindof_value (WS kindof_value)*
                                         | 'ScanRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                         | 'AutoDetonationWithFriendsInvolved' ((WS? EQ WS?) | WS) BOOLEAN
                                         | 'DetonationWeapon' ((WS? EQ WS?) | WS) weapon_value
                                         | 'DetonateWhenKilled' ((WS? EQ WS?) | WS) BOOLEAN
                                         ;

behaviorModule_destroyDie: 'DestroyDie' WS moduleTag_value NEWLINE ((WS? behaviorModule_destroyDie_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_destroyDie_properties: behaviorModule_deathTypes
                                      | 'VeterancyLevels' ((WS? EQ WS?) | WS) veterency_modifier (WS veterency_modifier)*
                                      | 'ExemptStatus' ((WS? EQ WS?) | WS) status_value (WS status_value)*
                                      | 'RequiredStatus' ((WS? EQ WS?) | WS) status_value
                                      ;

behaviorModule_dumbProjectileBehavior: 'DumbProjectileBehavior' WS moduleTag_value NEWLINE ((WS? behaviorModule_dumbProjectileBehavior_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_dumbProjectileBehavior_properties: 'MaxLifespan' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'TumbleRandomly' ((WS? EQ WS?) | WS) BOOLEAN
                                                 | 'DetonateCallsKill' ((WS? EQ WS?) | WS) BOOLEAN
                                                 | 'OrientToFlightPath' ((WS? EQ WS?) | WS) BOOLEAN
                                                 | 'FirstHeight' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'SecondHeight' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'FirstPercentIndent' ((WS? EQ WS?) | WS) PERCENT
                                                 | 'SecondPercentIndent' ((WS? EQ WS?) | WS) PERCENT
                                                 | 'GarrisonHitKillRequiredKindOf' ((WS? EQ WS?) | WS) kindof_value
                                                 | 'GarrisonHitKillForbiddenKindOf' ((WS? EQ WS?) | WS) kindof_value
                                                 | 'GarrisonHitKillCount' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'GarrisonHitKillFX' ((WS? EQ WS?) | WS) fxlist_value
                                                 | 'FlightPathAdjustDistPerSecond' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 ;

behaviorModule_dynamicShroudClearingRangeUpdate: 'DynamicShroudClearingRangeUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_dynamicShroudClearingRangeUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_dynamicShroudClearingRangeUpdate_properties: behaviorModule_dynamicShroudClearingRangeUpdate_decal
                                                        | 'ChangeInterval' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'GrowInterval' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'ShrinkDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'ShrinkTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'GrowDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'GrowTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'FinalVision' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        ;

behaviorModule_dynamicShroudClearingRangeUpdate_decal: 'GridDecalTemplate' NEWLINE ((WS? behaviorModule_dynamicShroudClearingRangeUpdate_decal_properties WS? NEWLINE) | (WS | NEWLINE))* end;
behaviorModule_dynamicShroudClearingRangeUpdate_decal_properties: 'Texture' ((WS? EQ WS?) | WS) ID
                                                            | 'Style' ((WS? EQ WS?) | WS) shadow_value
                                                            | 'OpacityMin' ((WS? EQ WS?) | WS) PERCENT
                                                            | 'OpacityMax' ((WS? EQ WS?) | WS) PERCENT
                                                            | 'OpacityThrobTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                            | 'Color' ((WS? EQ WS?) | WS) RGBA
                                                            | 'OnlyVisibleToOwningPlayer' ((WS? EQ WS?) | WS) BOOLEAN
                                                            ;

behaviorModule_empUpdate: 'EMPUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_empUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_empUpdate_properties: 'Lifetime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                    | 'StartFadeTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                    | 'StartScale' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                    | 'DisabledDuration' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                    | 'TargetScaleMax' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                    | 'TargetScaleMin' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                    | 'StartColor' ((WS? EQ WS?) | WS) RGB
                                    | 'EndColor' ((WS? EQ WS?) | WS) RGB
                                    | 'DisableFXParticleSystem' ((WS? EQ WS?) | WS) particlesystem_value
                                    | 'SparksPerCubicFoot' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                    | 'EffectRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                    | 'DoesNotAffect' ((WS? EQ WS?) | WS) damageAffects_value (WS damageAffects_value)*
                                    | 'DoesNotAffectMyOwnBuildings' ((WS? EQ WS?) | WS) BOOLEAN
                                    | 'VictimRequiredKindOf' ((WS? EQ WS?) | WS) kindof_value (WS kindof_value)*
                                    | 'VictimForbiddenKindOf' ((WS? EQ WS?) | WS) kindof_value (WS kindof_value)*
                                    ;

behaviorModule_ejectPilotDie: 'EjectPilotDie' WS moduleTag_value NEWLINE ((WS? behaviorModule_ejectPilotDie_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_ejectPilotDie_properties: behaviorModule_deathTypes
                                         | 'VeterancyLevels' ((WS? EQ WS?) | WS) veterency_modifier (WS veterency_modifier)*
                                         | 'ExemptStatus' ((WS? EQ WS?) | WS) status_value (WS status_value)*
                                         | 'RequiredStatus' ((WS? EQ WS?) | WS) status_value
                                         | 'AirCreationList' ((WS? EQ WS?) | WS) ID
                                         | 'GroundCreationList' ((WS? EQ WS?) | WS) ID
                                         | 'InvulnerableTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                         ;

behaviorModule_enemyNearUpdate: 'EnemyNearUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_enemyNearUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_enemyNearUpdate_properties: 'ScanDelayTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                         ;

behaviorModule_experienceScalarUpgrade: 'ExperienceScalarUpgrade' WS moduleTag_value NEWLINE ((WS? behaviorModule_experienceScalarUpgrade_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_experienceScalarUpgrade_properties: 'TriggeredBy' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                                   | 'ConflictsWith' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                                   | 'RemovesUpgrades' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                                   | 'FXListUpgrade' ((WS? EQ WS?) | WS) fxlist_value
                                                   | 'RequiresAllTriggers' ((WS? EQ WS?) | WS) BOOLEAN
                                                   | 'AddXPScalar' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                   ;

behaviorModule_fxListDie: 'FXListDie' WS moduleTag_value NEWLINE ((WS? behaviorModule_fxListDie_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_fxListDie_properties: behaviorModule_deathTypes
                                      | 'VeterancyLevels' ((WS? EQ WS?) | WS) veterency_modifier (WS veterency_modifier)*
                                      | 'ExemptStatus' ((WS? EQ WS?) | WS) status_value (WS status_value)*
                                      | 'RequiredStatus' ((WS? EQ WS?) | WS) status_value
                                      | 'StartsActive' ((WS? EQ WS?) | WS) BOOLEAN
                                      | 'DeathFX' ((WS? EQ WS?) | WS) fxlist_value
                                      | 'OrientToObject' ((WS? EQ WS?) | WS) BOOLEAN
                                      | 'TriggeredBy' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                      | 'ConflictsWith' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                      | 'RemovesUpgrades' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                      | 'FXListUpgrade' ((WS? EQ WS?) | WS) fxlist_value
                                      | 'RequiresAllTriggers' ((WS? EQ WS?) | WS) BOOLEAN
                                      ;

behaviorModule_fireOCLAfterWeaponCooldownUpdate: 'FireOCLAfterWeaponCooldownUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_fireOCLAfterWeaponCooldownUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_fireOCLAfterWeaponCooldownUpdate_properties: 'WeaponSlot' ((WS? EQ WS?) | WS) WEAPONSLOT
                                                        | 'OCL' ((WS? EQ WS?) | WS) ocl_value
                                                        | 'MinShotsToCreateOCL' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'OCLLifetimePerSecond' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'OCLLifetimeMaxCap' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'TriggeredBy' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                                        | 'ConflictsWith' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                                        | 'RemovesUpgrades' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                                        | 'FXListUpgrade' ((WS? EQ WS?) | WS) fxlist_value
                                                        | 'RequiresAllTriggers' ((WS? EQ WS?) | WS) BOOLEAN
                                                        ;

behaviorModule_fireSpreadUpdate: 'FireSpreadUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_fireSpreadUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_fireSpreadUpdate_properties: 'OCLEmbers' ((WS? EQ WS?) | WS) ocl_value
                                           | 'MinSpreadDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                           | 'MaxSpreadDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                           | 'SpreadTryRange' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                           ;

behaviorModule_fireWeaponCollide: 'FireWeaponCollide' WS moduleTag_value NEWLINE ((WS? behaviorModule_fireWeaponCollide_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_fireWeaponCollide_properties: 'CollideWeapon' ((WS? EQ WS?) | WS) weapon_value
                                           | 'FireOnce' ((WS? EQ WS?) | WS) BOOLEAN
                                           | 'RequiredStatus' ((WS? EQ WS?) | WS) status_value
                                           | 'ForbiddenStatus' ((WS? EQ WS?) | WS) status_value
                                           ;

behaviorModule_fireWeaponPower: 'FireWeaponPower' WS moduleTag_value NEWLINE ((WS? behaviorModule_fireWeaponPower_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_fireWeaponPower_properties: 'SpecialPowerTemplate' ((WS? EQ WS?) | WS) specialpower_value
                                           | 'UpdateModuleStartsAttack' ((WS? EQ WS?) | WS) BOOLEAN
                                           | 'StartsPaused' ((WS? EQ WS?) | WS) BOOLEAN
                                           | 'InitiateSound' ((WS? EQ WS?) | WS) audioevent_value
                                           | 'ScriptedSpecialPowerOnly' ((WS? EQ WS?) | WS) BOOLEAN
                                           | 'MaxShotsToFire' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                           ;

behaviorModule_fireWeaponUpdate: 'FireWeaponUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_fireWeaponUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_fireWeaponUpdate_properties: 'Weapon' ((WS? EQ WS?) | WS) weapon_value
                                           | 'InitialDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                           | 'ExclusiveWeaponDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                           ;

behaviorModule_fireWeaponWhenDamagedBehavior: 'FireWeaponWhenDamagedBehavior' WS moduleTag_value NEWLINE ((WS? behaviorModule_fireWeaponWhenDamagedBehavior_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_fireWeaponWhenDamagedBehavior_properties: 'StartsActive' ((WS? EQ WS?) | WS) BOOLEAN
                                                        | 'ReactionWeaponPristine' ((WS? EQ WS?) | WS) weapon_value
                                                        | 'ReactionWeaponDamaged' ((WS? EQ WS?) | WS) weapon_value
                                                        | 'ReactionWeaponReallyDamaged' ((WS? EQ WS?) | WS) weapon_value
                                                        | 'ReactionWeaponRubble' ((WS? EQ WS?) | WS) weapon_value
                                                        | 'ContinuousWeaponPristine' ((WS? EQ WS?) | WS) weapon_value
                                                        | 'ContinuousWeaponDamaged' ((WS? EQ WS?) | WS) weapon_value
                                                        | 'ContinuousWeaponReallyDamaged' ((WS? EQ WS?) | WS) weapon_value
                                                        | 'ContinuousWeaponRubble' ((WS? EQ WS?) | WS) weapon_value
                                                        | 'TriggeredBy' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                                        | 'ConflictsWith' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                                        | 'RemovesUpgrades' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                                        | 'FXListUpgrade' ((WS? EQ WS?) | WS) fxlist_value
                                                        | 'RequiresAllTriggers' ((WS? EQ WS?) | WS) BOOLEAN
                                                        | 'DamageTypes' ((WS? EQ WS?) | WS) damageType_value (WS damageType_value)*
                                                        | 'DamageAmount' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        ;

behaviorModule_fireWeaponWhenDeadBehavior: 'FireWeaponWhenDeadBehavior' WS moduleTag_value NEWLINE ((WS? behaviorModule_fireWeaponWhenDeadBehavior_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_fireWeaponWhenDeadBehavior_properties: 'StartsActive' ((WS? EQ WS?) | WS) BOOLEAN
                                                    | 'DeathWeapon' ((WS? EQ WS?) | WS) weapon_value
                                                    | 'TriggeredBy' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                                    | 'ConflictsWith' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                                    | 'RemovesUpgrades' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                                    | 'FXListUpgrade' ((WS? EQ WS?) | WS) fxlist_value
                                                    | 'RequiresAllTriggers' ((WS? EQ WS?) | WS) BOOLEAN
                                                    | behaviorModule_deathTypes
                                                    | 'VeterancyLevels' ((WS? EQ WS?) | WS) veterency_modifier (WS veterency_modifier)*
                                                    | 'ExemptStatus' ((WS? EQ WS?) | WS) status_value (WS status_value)*
                                                    | 'RequiredStatus' ((WS? EQ WS?) | WS) status_value
                                                    ;

behaviorModule_firestormDynamicGeometryInfoUpdate: 'FirestormDynamicGeometryInfoUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_firestormDynamicGeometryInfoUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_firestormDynamicGeometryInfoUpdate_properties: 'InitialDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'InitialHeight' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'InitialMajorRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'InitialMinorRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'FinalHeight' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'FinalMajorRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'FinalMinorRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'TransitionTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'ReverseAtTransitionTime' ((WS? EQ WS?) | WS) BOOLEAN
                                                        | 'DelayBetweenDamageFrames' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'DamageAmount' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'MaxHeightForDamage' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'ParticleSystem1' ((WS? EQ WS?) | WS) particlesystem_value
                                                        | 'ParticleSystem2' ((WS? EQ WS?) | WS) particlesystem_value
                                                        | 'ParticleSystem3' ((WS? EQ WS?) | WS) particlesystem_value
                                                        | 'ParticleSystem4' ((WS? EQ WS?) | WS) particlesystem_value
                                                        | 'ParticleSystem5' ((WS? EQ WS?) | WS) particlesystem_value
                                                        | 'ParticleSystem6' ((WS? EQ WS?) | WS) particlesystem_value
                                                        | 'ParticleSystem7' ((WS? EQ WS?) | WS) particlesystem_value
                                                        | 'ParticleSystem8' ((WS? EQ WS?) | WS) particlesystem_value
                                                        | 'ParticleSystem9' ((WS? EQ WS?) | WS) particlesystem_value
                                                        | 'ParticleSystem10' ((WS? EQ WS?) | WS) particlesystem_value
                                                        | 'ParticleSystem11' ((WS? EQ WS?) | WS) particlesystem_value
                                                        | 'ParticleSystem12' ((WS? EQ WS?) | WS) particlesystem_value
                                                        | 'ParticleSystem13' ((WS? EQ WS?) | WS) particlesystem_value
                                                        | 'ParticleSystem14' ((WS? EQ WS?) | WS) particlesystem_value
                                                        | 'ParticleSystem15' ((WS? EQ WS?) | WS) particlesystem_value
                                                        | 'ParticleSystem16' ((WS? EQ WS?) | WS) particlesystem_value
                                                        | 'FXList' ((WS? EQ WS?) | WS) fxlist_value
                                                        | 'ParticleOffsetZ' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'ScorchSize' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        ;

behaviorModule_flammableUpdate: 'FlammableUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_flammableUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_flammableUpdate_properties: 'BurnedDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'AflameDuration' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'AflameDamageDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'AflameDamageAmount' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'BurningSoundName' ((WS? EQ WS?) | WS) audioevent_value
                                          | 'FlameDamageLimit' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'FlameDamageExpiration' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          ;

behaviorModule_flightDeckBehavior: 'FlightDeckBehavior' WS moduleTag_value NEWLINE ((WS? behaviorModule_flightDeckBehavior_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_flightDeckBehavior_properties: 'NumRunways' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                            | 'NumSpacesPerRunway' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                            | 'Runway1Spaces' ((WS? EQ WS?) | WS) ID (WS ID)*
                                            | 'Runway1Takeoff' ((WS? EQ WS?) | WS) ID (WS ID)*
                                            | 'Runway1Landing' ((WS? EQ WS?) | WS) ID (WS ID)*
                                            | 'Runway1Taxi' ((WS? EQ WS?) | WS) ID (WS ID)*
                                            | 'Runway1Creation' ((WS? EQ WS?) | WS) ID (WS ID)*
                                            | 'Runway1CatapultSystem' ((WS? EQ WS?) | WS) fxlist_value
                                            | 'Runway2Spaces' ((WS? EQ WS?) | WS) ID (WS ID)*
                                            | 'Runway2Takeoff' ((WS? EQ WS?) | WS) ID (WS ID)*
                                            | 'Runway2Landing' ((WS? EQ WS?) | WS) ID (WS ID)*
                                            | 'Runway2Taxi' ((WS? EQ WS?) | WS) ID (WS ID)*
                                            | 'Runway2Creation' ((WS? EQ WS?) | WS) ID (WS ID)*
                                            | 'Runway2CatapultSystem' ((WS? EQ WS?) | WS) fxlist_value
                                            | 'ApproachHeight' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                            | 'LandingDeckHeightOffset' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                            | 'HealAmountPerSecond' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                            | 'ParkingCleanupPeriod' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                            | 'HumanFollowPeriod' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                            | 'PayloadTemplate' ((WS? EQ WS?) | WS) object_value
                                            | 'ReplacementDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                            | 'DockAnimationDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                            | 'LaunchWaveDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                            | 'LaunchRampDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                            | 'LowerRampDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                            | 'CatapultFireDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                            ;

behaviorModule_floatUpdate: 'FloatUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_floatUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_floatUpdate_properties: 'Enabled' ((WS? EQ WS?) | WS) BOOLEAN
                                        ;

behaviorModule_garrisonContain: 'GarrisonContain' WS moduleTag_value NEWLINE ((WS? behaviorModule_garrisonContain_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_garrisonContain_properties: 'ContainMax' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                           | 'EnterSound' ((WS? EQ WS?) | WS) audioevent_value
                                           | 'ExitSound' ((WS? EQ WS?) | WS) audioevent_value
                                           | 'DamagePercentToUnits' ((WS? EQ WS?) | WS) PERCENT
                                           | 'BurnedDeathToUnits' ((WS? EQ WS?) | WS) BOOLEAN
                                           | behaviorModule_allowInsideKindOf
                                           | behaviorModule_forbidInsideKindOf
                                           | 'PassengersAllowedToFire' ((WS? EQ WS?) | WS) BOOLEAN
                                           | 'PassengersInTurret' ((WS? EQ WS?) | WS) BOOLEAN
                                           | 'NumberOfExitPaths' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                           | 'DoorOpenTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                           | 'WeaponBonusPassedToPassengers' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                           | 'AllowAlliesInside' ((WS? EQ WS?) | WS) BOOLEAN
                                           | 'AllowEnemiesInside' ((WS? EQ WS?) | WS) BOOLEAN
                                           | 'AllowNeutralInside' ((WS? EQ WS?) | WS) BOOLEAN
                                           | behaviorModule_deathTypes
                                           | 'VeterancyLevels' ((WS? EQ WS?) | WS) veterency_modifier (WS veterency_modifier)*
                                           | 'ExemptStatus' ((WS? EQ WS?) | WS) status_value (WS status_value)*
                                           | 'RequiredStatus' ((WS? EQ WS?) | WS) status_value
                                           | 'MobileGarrison' ((WS? EQ WS?) | WS) BOOLEAN
                                           | 'HealObjects' ((WS? EQ WS?) | WS) BOOLEAN
                                           | 'TimeForFullHeal' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                           | 'InitialRoster' ((WS? EQ WS?) | WS) ID
                                           | 'ImmuneToClearBuildingAttacks' ((WS? EQ WS?) | WS) BOOLEAN
                                           | 'IsEnclosingContainer' ((WS? EQ WS?) | WS) BOOLEAN
                                           ;

behaviorModule_generateMinefieldBehavior: 'GenerateMinefieldBehavior' WS moduleTag_value NEWLINE ((WS? behaviorModule_generateMinefieldBehavior_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_generateMinefieldBehavior_properties: 'MineName' ((WS? EQ WS?) | WS) object_value
                                                    | 'UpgradedMineName' ((WS? EQ WS?) | WS) object_value
                                                    | 'UpgradedTriggeredBy' ((WS? EQ WS?) | WS) upgrade_value
                                                    | 'GenerationFX' ((WS? EQ WS?) | WS) fxlist_value
                                                    | 'DistanceAroundObject' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                    | 'MinesPerSquareFoot' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                    | 'GenerateOnlyOnDeath' ((WS? EQ WS?) | WS) BOOLEAN
                                                    | 'BorderOnly' ((WS? EQ WS?) | WS) BOOLEAN
                                                    | 'SmartBorder' ((WS? EQ WS?) | WS) BOOLEAN
                                                    | 'SmartBorderSkipInterior' ((WS? EQ WS?) | WS) BOOLEAN
                                                    | 'AlwaysCircular' ((WS? EQ WS?) | WS) BOOLEAN
                                                    | 'Upgradable' ((WS? EQ WS?) | WS) BOOLEAN
                                                    | 'RandomJitter' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                    | 'SkipIfThisMuchUnderStructure' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                    | 'TriggeredBy' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                                    | 'ConflictsWith' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                                    | 'RemovesUpgrades' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                                    | 'FXListUpgrade' ((WS? EQ WS?) | WS) fxlist_value
                                                    | 'RequiresAllTriggers' ((WS? EQ WS?) | WS) BOOLEAN
                                                    ;

behaviorModule_grantScienceUpgrade: 'GrantScienceUpgrade' WS moduleTag_value NEWLINE ((WS? behaviorModule_grantScienceUpgrade_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_grantScienceUpgrade_properties: 'TriggeredBy' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                             | 'ConflictsWith' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                             | 'RemovesUpgrades' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                             | 'FXListUpgrade' ((WS? EQ WS?) | WS) fxlist_value
                                             | 'RequiresAllTriggers' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'GrantScience' ((WS? EQ WS?) | WS) science_value
                                             ;

behaviorModule_grantStealthBehavior: 'GrantStealthBehavior' WS moduleTag_value NEWLINE ((WS? behaviorModule_grantStealthBehavior_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_grantStealthBehavior_properties: 'StartRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'FinalRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'EndRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'RadiusPerSecond' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'Duration' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'FXList' ((WS? EQ WS?) | WS) fxlist_value
                                             ;

behaviorModule_grantUpgradeCreate: 'GrantUpgradeCreate' WS moduleTag_value NEWLINE ((WS? behaviorModule_grantUpgradeCreate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_grantUpgradeCreate_properties: 'UpgradeToGrant' ((WS? EQ WS?) | WS) upgrade_value
                                             | 'ExemptStatus' ((WS? EQ WS?) | WS) status_value (WS status_value)*
                                             ;

behaviorModule_healContain: 'HealContain' WS moduleTag_value NEWLINE ((WS? behaviorModule_healContain_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_healContain_properties: 'ContainMax' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                       | 'EnterSound' ((WS? EQ WS?) | WS) audioevent_value
                                       | 'ExitSound' ((WS? EQ WS?) | WS) audioevent_value
                                       | 'DamagePercentToUnits' ((WS? EQ WS?) | WS) PERCENT
                                       | 'BurnedDeathToUnits' ((WS? EQ WS?) | WS) BOOLEAN
                                       | behaviorModule_allowInsideKindOf
                                       | behaviorModule_forbidInsideKindOf
                                       | 'PassengersAllowedToFire' ((WS? EQ WS?) | WS) BOOLEAN
                                       | 'PassengersInTurret' ((WS? EQ WS?) | WS) BOOLEAN
                                       | 'NumberOfExitPaths' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                       | 'DoorOpenTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                       | 'WeaponBonusPassedToPassengers' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                       | 'AllowAlliesInside' ((WS? EQ WS?) | WS) BOOLEAN
                                       | 'AllowEnemiesInside' ((WS? EQ WS?) | WS) BOOLEAN
                                       | 'AllowNeutralInside' ((WS? EQ WS?) | WS) BOOLEAN
                                       | behaviorModule_deathTypes
                                       | 'VeterancyLevels' ((WS? EQ WS?) | WS) veterency_modifier (WS veterency_modifier)*
                                       | 'ExemptStatus' ((WS? EQ WS?) | WS) status_value (WS status_value)*
                                       | 'RequiredStatus' ((WS? EQ WS?) | WS) status_value
                                       | 'TimeForFullHeal' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                       ;

behaviorModule_heightDieUpdate: 'HeightDieUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_heightDieUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_heightDieUpdate_properties: 'TargetHeight' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                         | 'TargetHeightIncludesStructures' ((WS? EQ WS?) | WS) BOOLEAN
                                         | 'OnlyWhenMovingDown' ((WS? EQ WS?) | WS) BOOLEAN
                                         | 'DestroyAttachedParticlesAtHeight' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                         | 'SnapToGroundOnDeath' ((WS? EQ WS?) | WS) BOOLEAN
                                         | 'InitialDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                         ;

behaviorModule_helicopterSlowDeathBehavior: 'HelicopterSlowDeathBehavior' WS moduleTag_value NEWLINE ((WS? behaviorModule_helicopterSlowDeathBehavior_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_helicopterSlowDeathBehavior_properties: 'SinkRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | 'ProbabilityModifier' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | 'ModifierBonusPerOverkillPercent' ((WS? EQ WS?) | WS) PERCENT
                                                      | 'SinkDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | 'SinkDelayVariance' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | 'DestructionDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | 'DestructionDelayVariance' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | 'DestructionAltitude' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | FX ((WS? EQ WS?) | WS) TimePoint WS fxlist_value
                                                      | 'OCL' ((WS? EQ WS?) | WS) TimePoint WS ocl_value
                                                      | 'Weapon' ((WS? EQ WS?) | WS) TimePoint WS weapon_value
                                                      | 'FlingForce' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | 'FlingForceVariance' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | 'FlingPitch' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | 'FlingPitchVariance' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | behaviorModule_deathTypes
                                                      | 'VeterancyLevels' ((WS? EQ WS?) | WS) veterency_modifier (WS veterency_modifier)*
                                                      | 'ExemptStatus' ((WS? EQ WS?) | WS) status_value (WS status_value)*
                                                      | 'RequiredStatus' ((WS? EQ WS?) | WS) status_value
                                                      | 'SpiralOrbitTurnRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | 'SpiralOrbitForwardSpeed' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | 'SpiralOrbitForwardSpeedDamping' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | 'MinSelfSpin' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | 'MaxSelfSpin' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | 'SelfSpinUpdateDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | 'SelfSpinUpdateAmount' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | 'FallHowFast' ((WS? EQ WS?) | WS) PERCENT
                                                      | 'MinBladeFlyOffDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | 'MaxBladeFlyOffDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | 'AttachParticle' ((WS? EQ WS?) | WS) ID
                                                      | 'AttachParticleBone' ((WS? EQ WS?) | WS) (ID | STRING)
                                                      | 'AttachParticleLoc' ((WS? EQ WS?) | WS) coord3D
                                                      | 'BladeObjectName' ((WS? EQ WS?) | WS) object_value
                                                      | 'BladeBoneName' ((WS? EQ WS?) | WS) (ID | STRING)
                                                      | 'OCLEjectPilot' ((WS? EQ WS?) | WS) ocl_value
                                                      | 'FXBlade' ((WS? EQ WS?) | WS) fxlist_value
                                                      | 'OCLBlade' ((WS? EQ WS?) | WS) ocl_value
                                                      | 'FXHitGround' ((WS? EQ WS?) | WS) fxlist_value
                                                      | 'OCLHitGround' ((WS? EQ WS?) | WS) ocl_value
                                                      | 'FXFinalBlowUp' ((WS? EQ WS?) | WS) fxlist_value
                                                      | 'OCLFinalBlowUp' ((WS? EQ WS?) | WS) ocl_value
                                                      | 'DelayFromGroundToFinalDeath' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | 'FinalRubbleObject' ((WS? EQ WS?) | WS) object_value
                                                      | 'SoundDeathLoop' ((WS? EQ WS?) | WS) audioevent_value
                                                      | 'MaxBraking' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      ;

behaviorModule_helixContain: 'HelixContain' WS moduleTag_value NEWLINE ((WS? behaviorModule_helixContain_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_helixContain_properties: 'ContainMax' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                      | 'EnterSound' ((WS? EQ WS?) | WS) audioevent_value
                                      | 'ExitSound' ((WS? EQ WS?) | WS) audioevent_value
                                      | 'DamagePercentToUnits' ((WS? EQ WS?) | WS) PERCENT
                                      | 'BurnedDeathToUnits' ((WS? EQ WS?) | WS) BOOLEAN
                                      | behaviorModule_allowInsideKindOf
                                      | behaviorModule_forbidInsideKindOf
                                      | 'PassengersAllowedToFire' ((WS? EQ WS?) | WS) BOOLEAN
                                      | 'PassengersInTurret' ((WS? EQ WS?) | WS) BOOLEAN
                                      | 'NumberOfExitPaths' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                      | 'DoorOpenTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                      | 'WeaponBonusPassedToPassengers' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                      | 'AllowAlliesInside' ((WS? EQ WS?) | WS) BOOLEAN
                                      | 'AllowEnemiesInside' ((WS? EQ WS?) | WS) BOOLEAN
                                      | 'AllowNeutralInside' ((WS? EQ WS?) | WS) BOOLEAN
                                      | behaviorModule_deathTypes
                                      | 'VeterancyLevels' ((WS? EQ WS?) | WS) veterency_modifier (WS veterency_modifier)*
                                      | 'ExemptStatus' ((WS? EQ WS?) | WS) status_value (WS status_value)*
                                      | 'RequiredStatus' ((WS? EQ WS?) | WS) status_value
                                      | 'Slots' ((WS? EQ WS?) | WS) INT
                                      | 'ScatterNearbyOnExit' ((WS? EQ WS?) | WS) BOOLEAN
                                      | 'OrientLikeContainerOnExit' ((WS? EQ WS?) | WS) BOOLEAN
                                      | 'KeepContainerVelocityOnExit' ((WS? EQ WS?) | WS) BOOLEAN
                                      | 'GoAggressiveOnExit' ((WS? EQ WS?) | WS) BOOLEAN
                                      | 'ResetMoodCheckTimeOnExit' ((WS? EQ WS?) | WS) BOOLEAN
                                      | 'DestroyRidersWhoAreNotFreeToExit' ((WS? EQ WS?) | WS) BOOLEAN
                                      | 'ExitBone' ((WS? EQ WS?) | WS) (ID | STRING)
                                      | 'ExitPitchRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                      | 'InitialPayload' ((WS? EQ WS?) | WS) object_value WS INT
                                      | 'HealthRegen%PerSec' ((WS? EQ WS?) | WS) PERCENT
                                      | 'ExitDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                      | 'ArmedRidersUpgradeMyWeaponSet' ((WS? EQ WS?) | WS) BOOLEAN
                                      | 'DelayExitInAir' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                      | 'PayloadTemplateName' ((WS? EQ WS?) | WS) ID
                                      | 'ShouldDrawPips' ((WS? EQ WS?) | WS) BOOLEAN
                                      ;

behaviorModule_hijackerUpdate: 'HijackerUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_hijackerUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_hijackerUpdate_properties: 'AttachToTargetBone' ((WS? EQ WS?) | WS) BOOLEAN
                                         | 'ParachuteName' ((WS? EQ WS?) | WS) object_value
                                         ;

behaviorModule_hordeUpdate: 'HordeUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_hordeUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_hordeUpdate_properties: 'UpdateRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                      | 'KindOf' ((WS? EQ WS?) | WS) kindof_value
                                      | 'Count' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                      | 'Radius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                      | 'RubOffRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                      | 'AlliesOnly' ((WS? EQ WS?) | WS) BOOLEAN
                                      | 'ExactMatch' ((WS? EQ WS?) | WS) BOOLEAN
                                      | 'Action' ((WS? EQ WS?) | WS) weapon_weaponbonus_condition_value
                                      | 'FlagSubObjectNames' ((WS? EQ WS?) | WS) ID (WS? ID)*
                                      | 'AllowedNationalism' ((WS? EQ WS?) | WS) BOOLEAN
                                      ;

behaviorModule_instantDeathBehavior: 'InstantDeathBehavior' WS moduleTag_value NEWLINE ((WS? behaviorModule_instantDeathBehavior_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_instantDeathBehavior_properties: behaviorModule_deathTypes
                                              | 'VeterancyLevels' ((WS? EQ WS?) | WS) veterency_modifier (WS veterency_modifier)*
                                              | 'ExemptStatus' ((WS? EQ WS?) | WS) status_value (WS status_value)*
                                              | 'RequiredStatus' ((WS? EQ WS?) | WS) status_value
                                              | FX ((WS? EQ WS?) | WS) (TimePoint WS)? fxlist_value
                                              | 'OCL' ((WS? EQ WS?) | WS) (TimePoint WS)? ocl_value
                                              | 'Weapon' ((WS? EQ WS?) | WS) (TimePoint WS)? weapon_value
                                              ;

behaviorModule_internetHackContain: 'InternetHackContain' WS moduleTag_value NEWLINE ((WS? behaviorModule_internetHackContain_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_internetHackContain_properties: 'ContainMax' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'EnterSound' ((WS? EQ WS?) | WS) audioevent_value
                                              | 'ExitSound' ((WS? EQ WS?) | WS) audioevent_value
                                              | 'DamagePercentToUnits' ((WS? EQ WS?) | WS) PERCENT
                                              | 'BurnedDeathToUnits' ((WS? EQ WS?) | WS) BOOLEAN
                                              | behaviorModule_allowInsideKindOf
                                              | behaviorModule_forbidInsideKindOf
                                              | 'PassengersAllowedToFire' ((WS? EQ WS?) | WS) BOOLEAN
                                              | 'PassengersInTurret' ((WS? EQ WS?) | WS) BOOLEAN
                                              | 'NumberOfExitPaths' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'DoorOpenTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'WeaponBonusPassedToPassengers' ((WS? EQ WS?) | WS) BOOLEAN
                                              | 'AllowAlliesInside' ((WS? EQ WS?) | WS) BOOLEAN
                                              | 'AllowEnemiesInside' ((WS? EQ WS?) | WS) BOOLEAN
                                              | 'AllowNeutralInside' ((WS? EQ WS?) | WS) BOOLEAN
                                              | behaviorModule_deathTypes
                                              | 'VeterancyLevels' ((WS? EQ WS?) | WS) veterency_modifier (WS veterency_modifier)*
                                              | 'ExemptStatus' ((WS? EQ WS?) | WS) status_value (WS status_value)*
                                              | 'RequiredStatus' ((WS? EQ WS?) | WS) status_value
                                              | 'Slots' ((WS? EQ WS?) | WS) INT
                                              | 'ScatterNearbyOnExit' ((WS? EQ WS?) | WS) BOOLEAN
                                              | 'OrientLikeContainerOnExit' ((WS? EQ WS?) | WS) BOOLEAN
                                              | 'KeepContainerVelocityOnExit' ((WS? EQ WS?) | WS) BOOLEAN
                                              | 'GoAggressiveOnExit' ((WS? EQ WS?) | WS) BOOLEAN
                                              | 'ResetMoodCheckTimeOnExit' ((WS? EQ WS?) | WS) BOOLEAN
                                              | 'DestroyRidersWhoAreNotFreeToExit' ((WS? EQ WS?) | WS) BOOLEAN
                                              | 'ExitBone' ((WS? EQ WS?) | WS) (ID | STRING)
                                              | 'ExitPitchRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'InitialPayload' ((WS? EQ WS?) | WS) object_value WS INT
                                              | 'HealthRegen%PerSec' ((WS? EQ WS?) | WS) PERCENT
                                              | 'ExitDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'ArmedRidersUpgradeMyWeaponSet' ((WS? EQ WS?) | WS) BOOLEAN
                                              | 'DelayExitInAir' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              ;

behaviorModule_jetSlowDeathBehavior: 'JetSlowDeathBehavior' WS moduleTag_value NEWLINE ((WS? behaviorModule_jetSlowDeathBehavior_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_jetSlowDeathBehavior_properties: 'SinkRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'ProbabilityModifier' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'ModifierBonusPerOverkillPercent' ((WS? EQ WS?) | WS) PERCENT
                                              | 'SinkDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'SinkDelayVariance' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'DestructionDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'DestructionDelayVariance' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'DestructionAltitude' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | FX ((WS? EQ WS?) | WS) TimePoint WS fxlist_value
                                              | 'OCL' ((WS? EQ WS?) | WS) TimePoint WS ocl_value
                                              | 'Weapon' ((WS? EQ WS?) | WS) TimePoint WS weapon_value
                                              | 'FlingForce' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'FlingForceVariance' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'FlingPitch' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'FlingPitchVariance' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | behaviorModule_deathTypes
                                              | 'VeterancyLevels' ((WS? EQ WS?) | WS) veterency_modifier (WS veterency_modifier)*
                                              | 'ExemptStatus' ((WS? EQ WS?) | WS) status_value (WS status_value)*
                                              | 'RequiredStatus' ((WS? EQ WS?) | WS) status_value
                                              | 'FXOnGroundDeath' ((WS? EQ WS?) | WS) fxlist_value
                                              | 'OCLOnGroundDeath' ((WS? EQ WS?) | WS) ocl_value
                                              | 'FXInitialDeath' ((WS? EQ WS?) | WS) fxlist_value
                                              | 'OCLInitialDeath' ((WS? EQ WS?) | WS) ocl_value
                                              | 'DelaySecondaryFromInitialDeath' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'FXSecondary' ((WS? EQ WS?) | WS) fxlist_value
                                              | 'OCLSecondary' ((WS? EQ WS?) | WS) ocl_value
                                              | 'FXHitGround' ((WS? EQ WS?) | WS) fxlist_value
                                              | 'OCLHitGround' ((WS? EQ WS?) | WS) ocl_value
                                              | 'DelayFinalBlowUpFromHitGround' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'FXFinalBlowUp' ((WS? EQ WS?) | WS) fxlist_value
                                              | 'OCLFinalBlowUp' ((WS? EQ WS?) | WS) ocl_value
                                              | 'DeathLoopSound' ((WS? EQ WS?) | WS) audioevent_value
                                              | 'RollRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'RollRateDelta' ((WS? EQ WS?) | WS) PERCENT
                                              | 'PitchRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'FallHowFast' ((WS? EQ WS?) | WS) PERCENT
                                              ;

behaviorModule_keepObjectDie: 'KeepObjectDie' WS moduleTag_value NEWLINE ((WS? behaviorModule_keepObjectDie_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_keepObjectDie_properties: behaviorModule_deathTypes
                                         | 'VeterancyLevels' ((WS? EQ WS?) | WS) veterency_modifier (WS veterency_modifier)*
                                         | 'ExemptStatus' ((WS? EQ WS?) | WS) status_value (WS status_value)*
                                         | 'RequiredStatus' ((WS? EQ WS?) | WS) status_value
                                         ;

behaviorModule_leafletDropBehavior: 'LeafletDropBehavior' WS moduleTag_value NEWLINE ((WS? behaviorModule_leafletDropBehavior_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_leafletDropBehavior_properties: 'Delay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'DisabledDuration' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'AffectRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'LeafletFXParticleSystem' ((WS? EQ WS?) | WS) particlesystem_value
                                              ;

behaviorModule_lifetimeUpdate: 'LifetimeUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_lifetimeUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_lifetimeUpdate_properties: 'MinLifetime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                         | 'MaxLifetime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                         ;

behaviorModule_lockWeaponCreate: 'LockWeaponCreate' WS moduleTag_value NEWLINE ((WS? behaviorModule_lockWeaponCreate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_lockWeaponCreate_properties: 'SlotToLock' ((WS? EQ WS?) | WS) WEAPONSLOT;

behaviorModule_locomotorSetUpgrade: 'LocomotorSetUpgrade' WS moduleTag_value NEWLINE ((WS? behaviorModule_locomotorSetUpgrade_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_locomotorSetUpgrade_properties: 'TriggeredBy' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                             | 'ConflictsWith' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                             | 'RemovesUpgrades' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                             | 'FXListUpgrade' ((WS? EQ WS?) | WS) fxlist_value
                                             | 'RequiresAllTriggers' ((WS? EQ WS?) | WS) BOOLEAN
                                             ;

behaviorModule_maxHealthUpgrade: 'MaxHealthUpgrade' WS moduleTag_value NEWLINE ((WS? behaviorModule_maxHealthUpgrade_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_maxHealthUpgrade_properties: 'TriggeredBy' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                             | 'ConflictsWith' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                             | 'RemovesUpgrades' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                             | 'FXListUpgrade' ((WS? EQ WS?) | WS) fxlist_value
                                             | 'RequiresAllTriggers' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'AddMaxHealth' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ChangeType' ((WS? EQ WS?) | WS) ID
                                             ;

behaviorModule_minefieldBehavior: 'MinefieldBehavior' WS moduleTag_value NEWLINE ((WS? behaviorModule_minefieldBehavior_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_minefieldBehavior_properties: 'DetonationWeapon' ((WS? EQ WS?) | WS) weapon_value
                                             | 'DetonatedBy' ((WS? EQ WS?) | WS) damageAffects_value (WS damageAffects_value)*
                                             | 'StopsRegenAfterCreatorDies' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'Regenerates' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'WorkersDetonate' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'CreatorDeathCheckRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ScootFromStartingPointTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'NumVirtualMines' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'RepeatDetonateMoveThresh' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'DegenPercentPerSecondAfterCreatorDies' ((WS? EQ WS?) | WS) PERCENT
                                             | 'CreationList' ((WS? EQ WS?) | WS) ID
                                             ;

behaviorModule_missileLauncherBuildingUpdate: 'MissileLauncherBuildingUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_missileLauncherBuildingUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_missileLauncherBuildingUpdate_properties: 'SpecialPowerTemplate' ((WS? EQ WS?) | WS) specialpower_value
                                                        | 'DoorOpenTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'DoorWaitOpenTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'DoorCloseTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'DoorOpeningFX' ((WS? EQ WS?) | WS) fxlist_value
                                                        | 'DoorOpenFX' ((WS? EQ WS?) | WS) fxlist_value
                                                        | 'DoorWaitingToCloseFX' ((WS? EQ WS?) | WS) fxlist_value
                                                        | 'DoorOpenIdleAudio' ((WS? EQ WS?) | WS) audioevent_value
                                                        ;

behaviorModule_mobMemberSlavedUpdate: 'MobMemberSlavedUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_mobMemberSlavedUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_mobMemberSlavedUpdate_properties: 'MustCatchUpRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'CatchUpCrisisBailTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'NoNeedToCatchUpRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'Squirrelliness' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 ;

behaviorModule_modelConditionUpgrade: 'ModelConditionUpgrade' WS moduleTag_value NEWLINE ((WS? behaviorModule_modelConditionUpgrade_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_modelConditionUpgrade_properties: 'TriggeredBy' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                                 | 'ConflictsWith' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                                 | 'RemovesUpgrades' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                                 | 'FXListUpgrade' ((WS? EQ WS?) | WS) fxlist_value
                                                 | 'RequiresAllTriggers' ((WS? EQ WS?) | WS) BOOLEAN
                                                 | 'ConditionFlag' ((WS? EQ WS?) | WS) drawModule_conditionStateValue
                                                 ;

behaviorModule_moneyCrateCollide: 'MoneyCrateCollide' WS moduleTag_value NEWLINE ((WS? behaviorModule_moneyCrateCollide_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_moneyCrateCollide_properties: 'RequiredKindOf' ((WS? EQ WS?) | WS) kindof_value
                                             | 'ForbiddenKindOf' ((WS? EQ WS?) | WS) kindof_value
                                             | 'ForbidOwnerPlayer' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'BuildingPickup' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'HumanOnly' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'PickupScience' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'ExecuteFX' ((WS? EQ WS?) | WS) fxlist_value
                                             | 'ExecuteAnimation' ((WS? EQ WS?) | WS) ID
                                             | 'ExecuteAnimationTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ExecuteAnimationZRise' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ExecuteAnimationFades' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'MoneyProvided' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'UpgradedBoost' ((WS? EQ WS?) | WS) UPGRADEBOOST WS BOOST
                                             ;

UPGRADEBOOST: 'UpgradeType:'ID;
BOOST: 'Boost:' INT;

behaviorModule_neutronBlastBehavior: 'NeutronBlastBehavior' WS moduleTag_value NEWLINE ((WS? behaviorModule_neutronBlastBehavior_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_neutronBlastBehavior_properties: 'BlastRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'AffectAirborne' ((WS? EQ WS?) | WS) BOOLEAN
                                                 | 'AffectAllies' ((WS? EQ WS?) | WS) BOOLEAN
                                                 ;

behaviorModule_neutronMissileSlowDeathBehavior: 'NeutronMissileSlowDeathBehavior' WS moduleTag_value NEWLINE ((WS? behaviorModule_neutronMissileSlowDeathBehavior_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_neutronMissileSlowDeathBehavior_properties: 'SinkRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'ProbabilityModifier' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'ModifierBonusPerOverkillPercent' ((WS? EQ WS?) | WS) PERCENT
                                                        | 'SinkDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'SinkDelayVariance' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'DestructionDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'DestructionDelayVariance' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'DestructionAltitude' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | FX ((WS? EQ WS?) | WS) TimePoint WS fxlist_value
                                                        | 'OCL' ((WS? EQ WS?) | WS) TimePoint WS ocl_value
                                                        | 'Weapon' ((WS? EQ WS?) | WS) TimePoint WS weapon_value
                                                        | 'FlingForce' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'FlingForceVariance' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'FlingPitch' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'FlingPitchVariance' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | behaviorModule_deathTypes
                                                        | 'VeterancyLevels' ((WS? EQ WS?) | WS) veterency_modifier (WS veterency_modifier)*
                                                        | 'ExemptStatus' ((WS? EQ WS?) | WS) status_value (WS status_value)*
                                                        | 'RequiredStatus' ((WS? EQ WS?) | WS) status_value
                                                        | 'ScorchMarkSize' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'FXList' ((WS? EQ WS?) | WS) fxlist_value
                                                        | 'Blast1Enabled' ((WS? EQ WS?) | WS) BOOLEAN
                                                        | 'Blast1Delay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast1ScorchDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast1InnerRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast1OuterRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast1MaxDamage' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast1MinDamage' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast1ToppleSpeed' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast1PushForce' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast2Enabled' ((WS? EQ WS?) | WS) BOOLEAN
                                                        | 'Blast2Delay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast2ScorchDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast2InnerRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast2OuterRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast2MaxDamage' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast2MinDamage' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast2ToppleSpeed' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast2PushForce' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast3Enabled' ((WS? EQ WS?) | WS) BOOLEAN
                                                        | 'Blast3Delay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast3ScorchDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast3InnerRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast3OuterRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast3MaxDamage' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast3MinDamage' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast3ToppleSpeed' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast3PushForce' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast4Enabled' ((WS? EQ WS?) | WS) BOOLEAN
                                                        | 'Blast4Delay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast4ScorchDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast4InnerRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast4OuterRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast4MaxDamage' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast4MinDamage' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast4ToppleSpeed' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast4PushForce' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast5Enabled' ((WS? EQ WS?) | WS) BOOLEAN
                                                        | 'Blast5Delay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast5ScorchDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast5InnerRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast5OuterRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast5MaxDamage' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast5MinDamage' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast5ToppleSpeed' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast5PushForce' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast6Enabled' ((WS? EQ WS?) | WS) BOOLEAN
                                                        | 'Blast6Delay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast6ScorchDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast6InnerRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast6OuterRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast6MaxDamage' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast6MinDamage' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast6ToppleSpeed' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast6PushForce' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast7Enabled' ((WS? EQ WS?) | WS) BOOLEAN
                                                        | 'Blast7Delay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast7ScorchDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast7InnerRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast7OuterRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast7MaxDamage' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast7MinDamage' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast7ToppleSpeed' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast7PushForce' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast8Enabled' ((WS? EQ WS?) | WS) BOOLEAN
                                                        | 'Blast8Delay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast8ScorchDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast8InnerRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast8OuterRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast8MaxDamage' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast8MinDamage' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast8ToppleSpeed' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast8PushForce' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast9Enabled' ((WS? EQ WS?) | WS) BOOLEAN
                                                        | 'Blast9Delay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast9ScorchDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast9InnerRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast9OuterRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast9MaxDamage' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast9MinDamage' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast9ToppleSpeed' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        | 'Blast9PushForce' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                        ;

behaviorModule_neutronMissileUpdate: 'NeutronMissileUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_neutronMissileUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_neutronMissileUpdate_properties: 'DistanceToTravelBeforeTurning' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'MaxTurnRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'ForwardDamping' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'RelativeSpeed' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'TargetFromDirectlyAbove' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'LaunchFX' ((WS? EQ WS?) | WS) fxlist_value
                                                 | 'SpecialSpeedTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'SpecialSpeedHeight' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'SpecialAccelFactor' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'SpecialJitterDistance' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'IgnitionFX' ((WS? EQ WS?) | WS) fxlist_value
                                                 | 'DeliveryDecalRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | behaviorModule_neutronMissileUpdate_properties_decal
                                                 ;

behaviorModule_neutronMissileUpdate_properties_decal: 'DeliveryDecal' NEWLINE ((WS? behaviorModule_neutronMissileUpdate_properties_decal_properties WS? NEWLINE) | (WS | NEWLINE))* end;
behaviorModule_neutronMissileUpdate_properties_decal_properties: 'Texture' ((WS? EQ WS?) | WS) ID
                                                                 | 'Style' ((WS? EQ WS?) | WS) shadow_value
                                                                 | 'OpacityMin' ((WS? EQ WS?) | WS) PERCENT
                                                                 | 'OpacityMax' ((WS? EQ WS?) | WS) PERCENT
                                                                 | 'OpacityThrobTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                                 | 'Color' ((WS? EQ WS?) | WS) RGBA
                                                                 | 'OnlyVisibleToOwningPlayer' ((WS? EQ WS?) | WS) BOOLEAN
                                                                 ;

behaviorModule_oclSpecialPower: 'OCLSpecialPower' WS moduleTag_value NEWLINE ((WS? behaviorModule_oclSpecialPower_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_oclSpecialPower_properties: 'SpecialPowerTemplate' ((WS? EQ WS?) | WS) specialpower_value
                                            | 'UpdateModuleStartsAttack' ((WS? EQ WS?) | WS) BOOLEAN
                                            | 'StartsPaused' ((WS? EQ WS?) | WS) BOOLEAN
                                            | 'InitiateSound' ((WS? EQ WS?) | WS) audioevent_value
                                            | 'ScriptedSpecialPowerOnly' ((WS? EQ WS?) | WS) BOOLEAN
                                            | 'UpgradeOCL' ((WS? EQ WS?) | WS) ocl_value (WS ocl_value)*
                                            | 'OCL' ((WS? EQ WS?) | WS) ocl_value
                                            | 'CreateLocation' ((WS? EQ WS?) | WS) ocl_createLocation
                                            | 'ReferenceObject' ((WS? EQ WS?) | WS) object_value
                                            | 'OCLAdjustPositionToPassable' ((WS? EQ WS?) | WS) BOOLEAN
                                            ;

behaviorModule_oclUpdate: 'OCLUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_oclUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_oclUpdate_properties: 'OCL' ((WS? EQ WS?) | WS) ocl_value
                                     | 'FactionOCL' ((WS? EQ WS?) | WS) FACTION WS OCL
                                     | 'MinDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                     | 'MaxDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                     | 'CreateAtEdge' ((WS? EQ WS?) | WS) BOOLEAN
                                     | 'FactionTriggered' ((WS? EQ WS?) | WS) BOOLEAN
                                     ;

FACTION: 'Faction:' ID;

behaviorModule_objectCreationUpgrade: 'ObjectCreationUpgrade' WS moduleTag_value NEWLINE ((WS? behaviorModule_objectCreationUpgrade_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_objectCreationUpgrade_properties: 'TriggeredBy' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                                 | 'ConflictsWith' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                                 | 'RemovesUpgrades' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                                 | 'FXListUpgrade' ((WS? EQ WS?) | WS) fxlist_value
                                                 | 'RequiresAllTriggers' ((WS? EQ WS?) | WS) BOOLEAN
                                                 | 'UpgradeObject' ((WS? EQ WS?) | WS) ocl_value
                                                 ;

behaviorModule_overchargeBehavior: 'OverchargeBehavior' WS moduleTag_value NEWLINE ((WS? behaviorModule_overchargeBehavior_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_overchargeBehavior_properties: 'HealthPercentToDrainPerSecond' ((WS? EQ WS?) | WS) PERCENT
                                              | 'NotAllowedWhenHealthBelowPercent' ((WS? EQ WS?) | WS) PERCENT
                                              ;

behaviorModule_overlordContain: 'OverlordContain' WS moduleTag_value NEWLINE ((WS? behaviorModule_overlordContain_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_overlordContain_properties: 'ContainMax' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'EnterSound' ((WS? EQ WS?) | WS) audioevent_value
                                             | 'ExitSound' ((WS? EQ WS?) | WS) audioevent_value
                                             | 'DamagePercentToUnits' ((WS? EQ WS?) | WS) PERCENT
                                             | 'BurnedDeathToUnits' ((WS? EQ WS?) | WS) BOOLEAN
                                             | behaviorModule_allowInsideKindOf
                                             | behaviorModule_forbidInsideKindOf
                                             | 'PassengersAllowedToFire' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'PassengersInTurret' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'NumberOfExitPaths' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'DoorOpenTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'WeaponBonusPassedToPassengers' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'AllowAlliesInside' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'AllowEnemiesInside' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'AllowNeutralInside' ((WS? EQ WS?) | WS) BOOLEAN
                                             | behaviorModule_deathTypes
                                             | 'VeterancyLevels' ((WS? EQ WS?) | WS) veterency_modifier (WS veterency_modifier)*
                                             | 'ExemptStatus' ((WS? EQ WS?) | WS) status_value (WS status_value)*
                                             | 'RequiredStatus' ((WS? EQ WS?) | WS) status_value
                                             | 'Slots' ((WS? EQ WS?) | WS) INT
                                             | 'ScatterNearbyOnExit' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'OrientLikeContainerOnExit' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'KeepContainerVelocityOnExit' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'GoAggressiveOnExit' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'ResetMoodCheckTimeOnExit' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'DestroyRidersWhoAreNotFreeToExit' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'ExitBone' ((WS? EQ WS?) | WS) (ID | STRING)
                                             | 'ExitPitchRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'InitialPayload' ((WS? EQ WS?) | WS) object_value WS INT
                                             | 'HealthRegen%PerSec' ((WS? EQ WS?) | WS) PERCENT
                                             | 'ExitDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ArmedRidersUpgradeMyWeaponSet' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'DelayExitInAir' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'PayloadTemplateName' ((WS? EQ WS?) | WS) object_value
                                             | 'ExperienceSinkForRider' ((WS? EQ WS?) | WS) BOOLEAN
                                             ;

behaviorModule_parachuteContain: 'ParachuteContain' WS moduleTag_value NEWLINE ((WS? behaviorModule_parachuteContain_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_parachuteContain_properties: 'ContainMax' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'EnterSound' ((WS? EQ WS?) | WS) audioevent_value
                                             | 'ExitSound' ((WS? EQ WS?) | WS) audioevent_value
                                             | 'DamagePercentToUnits' ((WS? EQ WS?) | WS) PERCENT
                                             | 'BurnedDeathToUnits' ((WS? EQ WS?) | WS) BOOLEAN
                                             | behaviorModule_allowInsideKindOf
                                             | behaviorModule_forbidInsideKindOf
                                             | 'PassengersAllowedToFire' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'PassengersInTurret' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'NumberOfExitPaths' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'DoorOpenTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'WeaponBonusPassedToPassengers' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'AllowAlliesInside' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'AllowEnemiesInside' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'AllowNeutralInside' ((WS? EQ WS?) | WS) BOOLEAN
                                             | behaviorModule_deathTypes
                                             | 'VeterancyLevels' ((WS? EQ WS?) | WS) veterency_modifier (WS veterency_modifier)*
                                             | 'ExemptStatus' ((WS? EQ WS?) | WS) status_value (WS status_value)*
                                             | 'RequiredStatus' ((WS? EQ WS?) | WS) status_value
                                             | 'PitchRateMax' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'RollRateMax' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'LowAltitudeDamping' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ParachuteOpenDist' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'KillWhenLandingInWaterSlop' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'FreeFallDamagePercent' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ParachuteOpenSound' ((WS? EQ WS?) | WS) audioevent_value
                                             ;

behaviorModule_parkingPlaceBehavior: 'ParkingPlaceBehavior' WS moduleTag_value NEWLINE ((WS? behaviorModule_parkingPlaceBehavior_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_parkingPlaceBehavior_properties: 'NumRows' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'NumCols' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'ApproachHeight' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'LandingDeckHeightOffset' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'HasRunways' ((WS? EQ WS?) | WS) BOOLEAN
                                                 | 'ParkInHangars' ((WS? EQ WS?) | WS) BOOLEAN
                                                 | 'HealAmountPerSecond' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 ;

behaviorModule_particleUplinkCannonUpdate: 'ParticleUplinkCannonUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_particleUplinkCannonUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_particleUplinkCannonUpdate_properties: 'SpecialPowerTemplate' ((WS? EQ WS?) | WS) specialpower_value
                                                      | 'BeginChargeTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | 'RaiseAntennaTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | 'ReadyDelayTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | 'WidthGrowTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | 'BeamTravelTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | 'TotalFiringTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | 'RevealRange' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | 'OuterEffectBoneName' ((WS? EQ WS?) | WS) (ID | FX | STRING)
                                                      | 'OuterEffectNumBones' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | 'OuterNodesLightFlareParticleSystem' ((WS? EQ WS?) | WS) particlesystem_value
                                                      | 'OuterNodesMediumFlareParticleSystem' ((WS? EQ WS?) | WS) particlesystem_value
                                                      | 'OuterNodesIntenseFlareParticleSystem' ((WS? EQ WS?) | WS) particlesystem_value
                                                      | 'ConnectorBoneName' ((WS? EQ WS?) | WS) ID
                                                      | 'ConnectorMediumLaserName' ((WS? EQ WS?) | WS) particlesystem_value
                                                      | 'ConnectorIntenseLaserName' ((WS? EQ WS?) | WS) particlesystem_value
                                                      | 'ConnectorMediumFlare' ((WS? EQ WS?) | WS) particlesystem_value
                                                      | 'ConnectorIntenseFlare' ((WS? EQ WS?) | WS) particlesystem_value
                                                      | 'FireBoneName' ((WS? EQ WS?) | WS) (ID | STRING)
                                                      | 'LaserBaseLightFlareParticleSystemName' ((WS? EQ WS?) | WS) particlesystem_value
                                                      | 'LaserBaseMediumFlareParticleSystemName' ((WS? EQ WS?) | WS) particlesystem_value
                                                      | 'LaserBaseIntenseFlareParticleSystemName' ((WS? EQ WS?) | WS) particlesystem_value
                                                      | 'ParticleBeamLaserName' ((WS? EQ WS?) | WS) particlesystem_value
                                                      | 'SwathOfDeathDistance' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | 'SwathOfDeathAmplitude' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | 'TotalScorchMarks' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | 'ScorchMarkScalar' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | 'BeamLaunchFX' ((WS? EQ WS?) | WS) fxlist_value
                                                      | 'DelayBetweenLaunchFX' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | 'GroundHitFX' ((WS? EQ WS?) | WS) fxlist_value
                                                      | 'DamagePerSecond' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | 'TotalDamagePulses' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | 'DamageType' ((WS? EQ WS?) | WS) damageType_value
                                                      | 'DeathType' ((WS? EQ WS?) | WS) deathType_value (WS deathType_value)*
                                                      | 'DamageRadiusScalar' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | 'PoweringUpSoundLoop' ((WS? EQ WS?) | WS) audioevent_value
                                                      | 'UnpackToIdleSoundLoop' ((WS? EQ WS?) | WS) audioevent_value
                                                      | 'FiringToPackSoundLoop' ((WS? EQ WS?) | WS) audioevent_value
                                                      | 'GroundAnnihilationSoundLoop' ((WS? EQ WS?) | WS) audioevent_value
                                                      | 'DamagePulseRemnantObjectName' ((WS? EQ WS?) | WS) object_value
                                                      | 'ManualDrivingSpeed' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | 'ManualFastDrivingSpeed' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      | 'DoubleClickToFastDriveDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                      ;

behaviorModule_passengersFireUpgrade: 'PassengersFireUpgrade' WS moduleTag_value NEWLINE ((WS? behaviorModule_passengersFireUpgrade_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_passengersFireUpgrade_properties: 'TriggeredBy' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                                 | 'ConflictsWith' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                                 | 'RemovesUpgrades' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                                 | 'FXListUpgrade' ((WS? EQ WS?) | WS) fxlist_value
                                                 | 'RequiresAllTriggers' ((WS? EQ WS?) | WS) BOOLEAN
                                                 ;

behaviorModule_physicsBehavior: 'PhysicsBehavior' WS moduleTag_value NEWLINE ((WS? behaviorModule_physicsBehavior_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_physicsBehavior_properties: 'Mass' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'ShockResistance' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'ShockMaxYaw' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'ShockMaxPitch' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'ShockMaxRoll' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'ForwardFriction' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'LateralFriction' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'ZFriction' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'AerodynamicFriction' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'CenterOfMassOffset' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'AllowBouncing' ((WS? EQ WS?) | WS) BOOLEAN
                                          | 'AllowCollideForce' ((WS? EQ WS?) | WS) BOOLEAN
                                          | 'KillWhenRestingOnGround' ((WS? EQ WS?) | WS) BOOLEAN
                                          | 'MinFallHeightForDamage' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'FallHeightDamageFactor' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'PitchRollYawFactor' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'VehicleCrashesIntoBuildingWeaponTemplate' ((WS? EQ WS?) | WS) weapon_value
                                          | 'VehicleCrashesIntoNonBuildingWeaponTemplate' ((WS? EQ WS?) | WS) weapon_value
                                          ;

behaviorModule_pilotFindVehicleUpdate: 'PilotFindVehicleUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_pilotFindVehicleUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_pilotFindVehicleUpdate_properties: 'ScanRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'ScanRange' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'MinHealth' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 ;

behaviorModule_pointDefenseLaserUpdate: 'PointDefenseLaserUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_pointDefenseLaserUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_pointDefenseLaserUpdate_properties: 'WeaponTemplate' ((WS? EQ WS?) | WS) weapon_value
                                                 | 'PrimaryTargetTypes' ((WS? EQ WS?) | WS) kindof_value (WS kindof_value)*
                                                 | 'SecondaryTargetTypes' ((WS? EQ WS?) | WS) kindof_value (WS kindof_value)*
                                                 | 'ScanRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'ScanRange' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'PredictTargetVelocityFactor' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 ;

behaviorModule_poisonedBehavior: 'PoisonedBehavior' WS moduleTag_value NEWLINE ((WS? behaviorModule_poisonedBehavior_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_poisonedBehavior_properties: 'PoisonDamageInterval' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'PoisonDuration' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             ;

behaviorModule_powerPlantUpdate: 'PowerPlantUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_powerPlantUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_powerPlantUpdate_properties: 'RodsExtendTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             ;

behaviorModule_powerPlantUpgrade: 'PowerPlantUpgrade' WS moduleTag_value NEWLINE ((WS? behaviorModule_powerPlantUpgrade_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_powerPlantUpgrade_properties: 'TriggeredBy' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                             | 'ConflictsWith' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                             | 'RemovesUpgrades' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                             | 'FXListUpgrade' ((WS? EQ WS?) | WS) fxlist_value
                                             | 'RequiresAllTriggers' ((WS? EQ WS?) | WS) BOOLEAN
                                             ;

behaviorModule_preorderCreate: 'PreorderCreate' WS moduleTag_value NEWLINE (WS | NEWLINE)*;

behaviorModule_projectileStreamUpdate: 'ProjectileStreamUpdate' WS moduleTag_value NEWLINE (WS | NEWLINE)*;

behaviorModule_propagandaTowerBehavior: 'PropagandaTowerBehavior' WS moduleTag_value NEWLINE ((WS? behaviorModule_propagandaTowerBehavior_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_propagandaTowerBehavior_properties: 'Radius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'DelayBetweenUpdates' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'HealPercentEachSecond' ((WS? EQ WS?) | WS) PERCENT
                                                 | 'UpgradedHealPercentEachSecond' ((WS? EQ WS?) | WS) PERCENT
                                                 | 'PulseFX' ((WS? EQ WS?) | WS) fxlist_value
                                                 | 'UpgradeRequired' ((WS? EQ WS?) | WS) upgrade_value
                                                 | 'UpgradedPulseFX' ((WS? EQ WS?) | WS) fxlist_value
                                                 | 'AffectsSelf' ((WS? EQ WS?) | WS) BOOLEAN
                                                 ;

behaviorModule_productionUpdate: 'ProductionUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_productionUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_productionUpdate_properties: 'MaxQueueEntries' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'NumDoorAnimations' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'DoorOpeningTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'DoorWaitOpenTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'DoorCloseTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ConstructionCompleteDuration' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'QuantityModifier' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'DisabledTypesToProcess' ((WS? EQ WS?) | WS) ID (WS ID)*
                                             | 'QuantityModifier' ((WS? EQ WS?) | WS) object_value WS INT
                                             ;

behaviorModule_queueProductionExitUpdate: 'QueueProductionExitUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_queueProductionExitUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_queueProductionExitUpdate_properties: 'UnitCreatePoint' ((WS? EQ WS?) | WS) coord3D
                                                 | 'NaturalRallyPoint' ((WS? EQ WS?) | WS) coord3D
                                                 | 'ExitDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'AllowAirborneCreation' ((WS? EQ WS?) | WS) BOOLEAN
                                                 | 'InitialBurst' ((WS? EQ WS?) | WS) INT
                                                 ;

behaviorModule_radarUpdate: 'RadarUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_radarUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_radarUpdate_properties: 'RadarExtendTime' ((WS? EQ WS?) | WS) (INT | FLOAT) ;

behaviorModule_radarUpgrade: 'RadarUpgrade' WS moduleTag_value NEWLINE ((WS? behaviorModule_radarUpgrade_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_radarUpgrade_properties: 'TriggeredBy' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                         | 'ConflictsWith' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                         | 'RemovesUpgrades' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                         | 'FXListUpgrade' ((WS? EQ WS?) | WS) fxlist_value
                                         | 'RequiresAllTriggers' ((WS? EQ WS?) | WS) BOOLEAN
                                         | 'DisableProof' ((WS? EQ WS?) | WS) BOOLEAN
                                         ;

behaviorModule_radiusDecalUpdate: 'RadiusDecalUpdate' WS moduleTag_value NEWLINE (WS | NEWLINE)*;

behaviorModule_railedTransportContain: 'RailedTransportContain' WS moduleTag_value NEWLINE ((WS? behaviorModule_railedTransportContain_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_railedTransportContain_properties: 'ContainMax' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'EnterSound' ((WS? EQ WS?) | WS) audioevent_value
                                                 | 'ExitSound' ((WS? EQ WS?) | WS) audioevent_value
                                                 | 'DamagePercentToUnits' ((WS? EQ WS?) | WS) PERCENT
                                                 | 'BurnedDeathToUnits' ((WS? EQ WS?) | WS) BOOLEAN
                                                 | behaviorModule_allowInsideKindOf
                                                 | behaviorModule_forbidInsideKindOf
                                                 | 'PassengersAllowedToFire' ((WS? EQ WS?) | WS) BOOLEAN
                                                 | 'PassengersInTurret' ((WS? EQ WS?) | WS) BOOLEAN
                                                 | 'NumberOfExitPaths' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'DoorOpenTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'WeaponBonusPassedToPassengers' ((WS? EQ WS?) | WS) BOOLEAN
                                                 | 'AllowAlliesInside' ((WS? EQ WS?) | WS) BOOLEAN
                                                 | 'AllowEnemiesInside' ((WS? EQ WS?) | WS) BOOLEAN
                                                 | 'AllowNeutralInside' ((WS? EQ WS?) | WS) BOOLEAN
                                                 | behaviorModule_deathTypes
                                                 | 'VeterancyLevels' ((WS? EQ WS?) | WS) veterency_modifier (WS veterency_modifier)*
                                                 | 'ExemptStatus' ((WS? EQ WS?) | WS) status_value (WS status_value)*
                                                 | 'RequiredStatus' ((WS? EQ WS?) | WS) status_value
                                                 | 'Slots' ((WS? EQ WS?) | WS) INT
                                                 | 'ScatterNearbyOnExit' ((WS? EQ WS?) | WS) BOOLEAN
                                                 | 'OrientLikeContainerOnExit' ((WS? EQ WS?) | WS) BOOLEAN
                                                 | 'KeepContainerVelocityOnExit' ((WS? EQ WS?) | WS) BOOLEAN
                                                 | 'GoAggressiveOnExit' ((WS? EQ WS?) | WS) BOOLEAN
                                                 | 'ResetMoodCheckTimeOnExit' ((WS? EQ WS?) | WS) BOOLEAN
                                                 | 'DestroyRidersWhoAreNotFreeToExit' ((WS? EQ WS?) | WS) BOOLEAN
                                                 | 'ExitBone' ((WS? EQ WS?) | WS) (ID | STRING)
                                                 | 'ExitPitchRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'InitialPayload' ((WS? EQ WS?) | WS) object_value WS INT
                                                 | 'HealthRegen%PerSec' ((WS? EQ WS?) | WS) PERCENT
                                                 | 'ExitDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'ArmedRidersUpgradeMyWeaponSet' ((WS? EQ WS?) | WS) BOOLEAN
                                                 | 'DelayExitInAir' ((WS? EQ WS?) | WS) BOOLEAN
                                                 ;



behaviorModule_railedTransportDockUpdate: 'RailedTransportDockUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_railedTransportDockUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_railedTransportDockUpdate_properties: 'NumberApproachPositions' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                   | 'AllowsPassthrough' ((WS? EQ WS?) | WS) BOOLEAN
                                                   | 'PullInsideDuration' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                   | 'PushOutsideDuration' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                   | 'ToleranceDistance' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                   ;

behaviorModule_railroadBehavior: 'RailroadBehavior' WS moduleTag_value NEWLINE ((WS? behaviorModule_railroadBehavior_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_railroadBehavior_properties: 'Mass' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ShockResistance' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ShockMaxYaw' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ShockMaxPitch' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ShockMaxRoll' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ForwardFriction' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'LateralFriction' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ZFriction' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'AerodynamicFriction' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'CenterOfMassOffset' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'AllowBouncing' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'AllowCollideForce' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'KillWhenRestingOnGround' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'MinFallHeightForDamage' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'FallHeightDamageFactor' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'PitchRollYawFactor' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'VehicleCrashesIntoBuildingWeaponTemplate' ((WS? EQ WS?) | WS) weapon_value
                                             | 'VehicleCrashesIntoNonBuildingWeaponTemplate' ((WS? EQ WS?) | WS) weapon_value
                                             | 'PathPrefixName' ((WS? EQ WS?) | WS) ID
                                             | 'CrashFXTemplateName' ((WS? EQ WS?) | WS) fxlist_value
                                             | 'IsLocomotive' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'CarriageTemplateName' ((WS? EQ WS?) | WS) ID
                                             | 'BigMetalBounceSound' ((WS? EQ WS?) | WS) audioevent_value
                                             | 'SmallMetalBounceSound' ((WS? EQ WS?) | WS) audioevent_value
                                             | 'MeatyBounceSound' ((WS? EQ WS?) | WS) audioevent_value
                                             | 'RunningGarrisonSpeedMax' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'KillSpeedMin' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'SpeedMax' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'Acceleration' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'Braking' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'WaitAtStationTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'RunningSound' ((WS? EQ WS?) | WS) audioevent_value
                                             | 'ClicketyClackSound' ((WS? EQ WS?) | WS) audioevent_value
                                             | 'WhistleSound' ((WS? EQ WS?) | WS) audioevent_value
                                             | 'Friction' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             ;

behaviorModule_rebuildHoleBehavior: 'RebuildHoleBehavior' WS moduleTag_value NEWLINE ((WS? behaviorModule_rebuildHoleBehavior_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_rebuildHoleBehavior_properties: 'WorkerObjectName' ((WS? EQ WS?) | WS) object_value
                                             | 'WorkerRespawnDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'HoleHealthRegen%PerSecond' ((WS? EQ WS?) | WS) PERCENT
                                             ;

behaviorModule_rebuildHoleExposeDie: 'RebuildHoleExposeDie' WS moduleTag_value NEWLINE ((WS? behaviorModule_rebuildHoleExposeDie_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_rebuildHoleExposeDie_properties: behaviorModule_deathTypes
                                             | 'VeterancyLevels' ((WS? EQ WS?) | WS) veterency_modifier (WS veterency_modifier)*
                                             | 'ExemptStatus' ((WS? EQ WS?) | WS) status_value (WS status_value)*
                                             | 'RequiredStatus' ((WS? EQ WS?) | WS) status_value
                                             | 'HoleName' ((WS? EQ WS?) | WS) ID
                                             | 'HoleMaxHealth' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'TransferAttackers' ((WS? EQ WS?) | WS) BOOLEAN
                                             ;

behaviorModule_repairDockUpdate: 'RepairDockUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_repairDockUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_repairDockUpdate_properties: 'NumberApproachPositions' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'AllowsPassthrough' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'TimeForFullHeal' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             ;

behaviorModule_replaceObjectUpgrade: 'ReplaceObjectUpgrade' WS moduleTag_value NEWLINE ((WS? behaviorModule_replaceObjectUpgrade_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_replaceObjectUpgrade_properties: 'TriggeredBy' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                             | 'ConflictsWith' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                             | 'RemovesUpgrades' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                             | 'FXListUpgrade' ((WS? EQ WS?) | WS) fxlist_value
                                             | 'RequiresAllTriggers' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'ReplaceObject' ((WS? EQ WS?) | WS) object_value
                                             ;

behaviorModule_riderChangeContain: 'RiderChangeContain' WS moduleTag_value NEWLINE ((WS? behaviorModule_riderChangeContain_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_riderChangeContain_properties: 'ContainMax' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'EnterSound' ((WS? EQ WS?) | WS) audioevent_value
                                             | 'ExitSound' ((WS? EQ WS?) | WS) audioevent_value
                                             | 'DamagePercentToUnits' ((WS? EQ WS?) | WS) PERCENT
                                             | 'BurnedDeathToUnits' ((WS? EQ WS?) | WS) BOOLEAN
                                             | behaviorModule_allowInsideKindOf
                                             | behaviorModule_forbidInsideKindOf
                                             | 'PassengersAllowedToFire' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'PassengersInTurret' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'NumberOfExitPaths' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'DoorOpenTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'WeaponBonusPassedToPassengers' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'AllowAlliesInside' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'AllowEnemiesInside' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'AllowNeutralInside' ((WS? EQ WS?) | WS) BOOLEAN
                                             | behaviorModule_deathTypes
                                             | 'VeterancyLevels' ((WS? EQ WS?) | WS) veterency_modifier (WS veterency_modifier)*
                                             | 'ExemptStatus' ((WS? EQ WS?) | WS) status_value (WS status_value)*
                                             | 'RequiredStatus' ((WS? EQ WS?) | WS) status_value
                                             | 'Slots' ((WS? EQ WS?) | WS) INT
                                             | 'ScatterNearbyOnExit' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'OrientLikeContainerOnExit' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'KeepContainerVelocityOnExit' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'GoAggressiveOnExit' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'ResetMoodCheckTimeOnExit' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'DestroyRidersWhoAreNotFreeToExit' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'ExitBone' ((WS? EQ WS?) | WS) (ID | STRING)
                                             | 'ExitPitchRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'InitialPayload' ((WS? EQ WS?) | WS) object_value WS INT
                                             | 'HealthRegen%PerSec' ((WS? EQ WS?) | WS) PERCENT
                                             | 'ExitDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ArmedRidersUpgradeMyWeaponSet' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'DelayExitInAir' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'Rider1' ((WS? EQ WS?) | WS) object_value WS drawModule_conditionStateValue WS objectClass_setConditions WS status_value WS commandSet_value WS locomotor_type
                                             | 'Rider2' ((WS? EQ WS?) | WS) object_value WS drawModule_conditionStateValue WS objectClass_setConditions WS status_value WS commandSet_value WS locomotor_type
                                             | 'Rider3' ((WS? EQ WS?) | WS) object_value WS drawModule_conditionStateValue WS objectClass_setConditions WS status_value WS commandSet_value WS locomotor_type
                                             | 'Rider4' ((WS? EQ WS?) | WS) object_value WS drawModule_conditionStateValue WS objectClass_setConditions WS status_value WS commandSet_value WS locomotor_type
                                             | 'Rider5' ((WS? EQ WS?) | WS) object_value WS drawModule_conditionStateValue WS objectClass_setConditions WS status_value WS commandSet_value WS locomotor_type
                                             | 'Rider6' ((WS? EQ WS?) | WS) object_value WS drawModule_conditionStateValue WS objectClass_setConditions WS status_value WS commandSet_value WS locomotor_type
                                             | 'Rider7' ((WS? EQ WS?) | WS) object_value WS drawModule_conditionStateValue WS objectClass_setConditions WS status_value WS commandSet_value WS locomotor_type
                                             | 'Rider8' ((WS? EQ WS?) | WS) object_value WS drawModule_conditionStateValue WS objectClass_setConditions WS status_value WS commandSet_value WS locomotor_type
                                             | 'ScuttleDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ScuttleStatus' ((WS? EQ WS?) | WS) ID
                                             ;

behaviorModule_sabotageCommandCenterCrateCollide: 'SabotageCommandCenterCrateCollide' WS moduleTag_value NEWLINE ((WS? behaviorModule_sabotageCommandCenterCrateCollide_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_sabotageCommandCenterCrateCollide_properties: 'RequiredKindOf' ((WS? EQ WS?) | WS) kindof_value
                                             | 'ForbiddenKindOf' ((WS? EQ WS?) | WS) kindof_value
                                             | 'ForbidOwnerPlayer' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'BuildingPickup' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'HumanOnly' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'PickupScience' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'ExecuteFX' ((WS? EQ WS?) | WS) fxlist_value
                                             | 'ExecuteAnimation' ((WS? EQ WS?) | WS) ID
                                             | 'ExecuteAnimationTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ExecuteAnimationZRise' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ExecuteAnimationFades' ((WS? EQ WS?) | WS) BOOLEAN
                                             ;

behaviorModule_sabotageFakeBuildingCrateCollide: 'SabotageFakeBuildingCrateCollide' WS moduleTag_value NEWLINE ((WS? behaviorModule_sabotageFakeBuildingCrateCollide_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_sabotageFakeBuildingCrateCollide_properties: 'RequiredKindOf' ((WS? EQ WS?) | WS) kindof_value
                                             | 'ForbiddenKindOf' ((WS? EQ WS?) | WS) kindof_value
                                             | 'ForbidOwnerPlayer' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'BuildingPickup' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'HumanOnly' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'PickupScience' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'ExecuteFX' ((WS? EQ WS?) | WS) fxlist_value
                                             | 'ExecuteAnimation' ((WS? EQ WS?) | WS) ID
                                             | 'ExecuteAnimationTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ExecuteAnimationZRise' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ExecuteAnimationFades' ((WS? EQ WS?) | WS) BOOLEAN
                                             ;

behaviorModule_sabotageInternetCenterCrateCollide: 'SabotageInternetCenterCrateCollide' WS moduleTag_value NEWLINE ((WS? behaviorModule_sabotageInternetCenterCrateCollide_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_sabotageInternetCenterCrateCollide_properties: 'RequiredKindOf' ((WS? EQ WS?) | WS) kindof_value
                                             | 'ForbiddenKindOf' ((WS? EQ WS?) | WS) kindof_value
                                             | 'ForbidOwnerPlayer' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'BuildingPickup' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'HumanOnly' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'PickupScience' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'ExecuteFX' ((WS? EQ WS?) | WS) fxlist_value
                                             | 'ExecuteAnimation' ((WS? EQ WS?) | WS) ID
                                             | 'ExecuteAnimationTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ExecuteAnimationZRise' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ExecuteAnimationFades' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'SabotageDuration' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             ;

behaviorModule_sabotageMilitaryFactoryCrateCollide: 'SabotageMilitaryFactoryCrateCollide' WS moduleTag_value NEWLINE ((WS? behaviorModule_sabotageMilitaryFactoryCrateCollide_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_sabotageMilitaryFactoryCrateCollide_properties: 'RequiredKindOf' ((WS? EQ WS?) | WS) kindof_value
                                             | 'ForbiddenKindOf' ((WS? EQ WS?) | WS) kindof_value
                                             | 'ForbidOwnerPlayer' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'BuildingPickup' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'HumanOnly' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'PickupScience' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'ExecuteFX' ((WS? EQ WS?) | WS) fxlist_value
                                             | 'ExecuteAnimation' ((WS? EQ WS?) | WS) ID
                                             | 'ExecuteAnimationTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ExecuteAnimationZRise' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ExecuteAnimationFades' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'SabotageDuration' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             ;

behaviorModule_sabotagePowerPlantCrateCollide: 'SabotagePowerPlantCrateCollide' WS moduleTag_value NEWLINE ((WS? behaviorModule_sabotagePowerPlantCrateCollide_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_sabotagePowerPlantCrateCollide_properties: 'RequiredKindOf' ((WS? EQ WS?) | WS) kindof_value
                                             | 'ForbiddenKindOf' ((WS? EQ WS?) | WS) kindof_value
                                             | 'ForbidOwnerPlayer' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'BuildingPickup' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'HumanOnly' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'PickupScience' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'ExecuteFX' ((WS? EQ WS?) | WS) fxlist_value
                                             | 'ExecuteAnimation' ((WS? EQ WS?) | WS) ID
                                             | 'ExecuteAnimationTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ExecuteAnimationZRise' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ExecuteAnimationFades' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'SabotagePowerDuration' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             ;

behaviorModule_sabotageSuperweaponCrateCollide: 'SabotageSuperweaponCrateCollide' WS moduleTag_value NEWLINE ((WS? behaviorModule_sabotageSuperweaponCrateCollide_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_sabotageSuperweaponCrateCollide_properties: 'RequiredKindOf' ((WS? EQ WS?) | WS) kindof_value
                                             | 'ForbiddenKindOf' ((WS? EQ WS?) | WS) kindof_value
                                             | 'ForbidOwnerPlayer' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'BuildingPickup' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'HumanOnly' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'PickupScience' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'ExecuteFX' ((WS? EQ WS?) | WS) fxlist_value
                                             | 'ExecuteAnimation' ((WS? EQ WS?) | WS) ID
                                             | 'ExecuteAnimationTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ExecuteAnimationZRise' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ExecuteAnimationFades' ((WS? EQ WS?) | WS) BOOLEAN
                                             ;

behaviorModule_sabotageSupplyCenterCrateCollide: 'SabotageSupplyCenterCrateCollide' WS moduleTag_value NEWLINE ((WS? behaviorModule_sabotageSupplyCenterCrateCollide_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_sabotageSupplyCenterCrateCollide_properties: 'RequiredKindOf' ((WS? EQ WS?) | WS) kindof_value
                                             | 'ForbiddenKindOf' ((WS? EQ WS?) | WS) kindof_value
                                             | 'ForbidOwnerPlayer' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'BuildingPickup' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'HumanOnly' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'PickupScience' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'ExecuteFX' ((WS? EQ WS?) | WS) fxlist_value
                                             | 'ExecuteAnimation' ((WS? EQ WS?) | WS) ID
                                             | 'ExecuteAnimationTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ExecuteAnimationZRise' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ExecuteAnimationFades' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'StealCashAmount' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             ;

behaviorModule_salvageCrateCollide: 'SalvageCrateCollide' WS moduleTag_value NEWLINE ((WS? behaviorModule_salvageCrateCollide_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_salvageCrateCollide_properties: 'RequiredKindOf' ((WS? EQ WS?) | WS) kindof_value
                                             | 'ForbiddenKindOf' ((WS? EQ WS?) | WS) kindof_value
                                             | 'ForbidOwnerPlayer' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'BuildingPickup' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'HumanOnly' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'PickupScience' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'ExecuteFX' ((WS? EQ WS?) | WS) fxlist_value
                                             | 'ExecuteAnimation' ((WS? EQ WS?) | WS) ID
                                             | 'ExecuteAnimationTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ExecuteAnimationZRise' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ExecuteAnimationFades' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'WeaponChance' ((WS? EQ WS?) | WS) PERCENT
                                             | 'LevelChance' ((WS? EQ WS?) | WS) PERCENT
                                             | 'MoneyChance' ((WS? EQ WS?) | WS) PERCENT
                                             | 'MinMoney' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'MaxMoney' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             ;

behaviorModule_slavedUpdate: 'SlavedUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_slavedUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_slavedUpdate_properties: 'GuardMaxRange' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'GuardWanderRange' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'AttackRange' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'AttackWanderRange' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ScoutRange' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ScoutWanderRange' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'RepairRange' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'RepairMinAltitude' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'RepairMaxAltitude' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'DistToTargetToGrantRangeBonus' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'RepairRatePerSecond' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'RepairWhenBelowHealth%' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'RepairMinReadyTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'RepairMaxReadyTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'RepairMinWeldTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'RepairMaxWeldTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'RepairWeldingSys' ((WS? EQ WS?) | WS) particlesystem_value
                                             | 'RepairWeldingFXBone' ((WS? EQ WS?) | WS) (ID | STRING)
                                             | 'StayOnSameLayerAsMaster' ((WS? EQ WS?) | WS) BOOLEAN
                                             ;

behaviorModule_slowDeathBehavior: 'SlowDeathBehavior' WS moduleTag_value NEWLINE ((WS? behaviorModule_slowDeathBehavior_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_slowDeathBehavior_properties: 'SinkRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ProbabilityModifier' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ModifierBonusPerOverkillPercent' ((WS? EQ WS?) | WS) PERCENT
                                             | 'SinkDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'SinkDelayVariance' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'DestructionDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'DestructionDelayVariance' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'DestructionAltitude' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | FX ((WS? EQ WS?) | WS) TimePoint WS fxlist_value
                                             | 'OCL' ((WS? EQ WS?) | WS) TimePoint WS ocl_value
                                             | 'Weapon' ((WS? EQ WS?) | WS) TimePoint WS weapon_value
                                             | 'FlingForce' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'FlingForceVariance' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'FlingPitch' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'FlingPitchVariance' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | behaviorModule_deathTypes
                                             | 'VeterancyLevels' ((WS? EQ WS?) | WS) veterency_modifier (WS veterency_modifier)*
                                             | 'ExemptStatus' ((WS? EQ WS?) | WS) status_value (WS status_value)*
                                             | 'RequiredStatus' ((WS? EQ WS?) | WS) status_value
                                             ;

behaviorModule_smartBombTargetHomingUpdate: 'SmartBombTargetHomingUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_smartBombTargetHomingUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_smartBombTargetHomingUpdate_properties: 'CourseCorrectionScalar' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             ;

behaviorModule_spawnBehavior: 'SpawnBehavior' WS moduleTag_value NEWLINE ((WS? behaviorModule_spawnBehavior_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_spawnBehavior_properties: 'SpawnNumber' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'SpawnReplaceDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'OneShot' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'CanReclaimOrphans' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'AggregateHealth' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'ExitByBudding' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'SpawnTemplateName' ((WS? EQ WS?) | WS) ID
                                             | 'SpawnedRequireSpawner' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'PropagateDamageTypesToSlavesWhenExisting' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'InitialBurst' ((WS? EQ WS?) | WS) INT
                                             | 'SlavesHaveFreeWill' ((WS? EQ WS?) | WS) BOOLEAN
                                             | behaviorModule_deathTypes
                                             | 'VeterancyLevels' ((WS? EQ WS?) | WS) veterency_modifier (WS veterency_modifier)*
                                             | 'ExemptStatus' ((WS? EQ WS?) | WS) status_value (WS status_value)*
                                             | 'RequiredStatus' ((WS? EQ WS?) | WS) status_value
                                             ;

behaviorModule_spawnPointProductionExitUpdate: 'SpawnPointProductionExitUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_spawnPointProductionExitUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_spawnPointProductionExitUpdate_properties: 'SpawnPointBoneName' ((WS? EQ WS?) | WS) (ID | STRING)
                                             ;

behaviorModule_specialAbility: 'SpecialAbility' WS moduleTag_value NEWLINE ((WS? behaviorModule_specialAbility_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_specialAbility_properties: 'SpecialPowerTemplate' ((WS? EQ WS?) | WS) specialpower_value
                                             | 'UpdateModuleStartsAttack' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'StartsPaused' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'InitiateSound' ((WS? EQ WS?) | WS) audioevent_value
                                             | 'ScriptedSpecialPowerOnly' ((WS? EQ WS?) | WS) BOOLEAN
                                             ;

behaviorModule_specialAbilityUpdate: 'SpecialAbilityUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_specialAbilityUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_specialAbilityUpdate_properties: 'SpecialPowerTemplate' ((WS? EQ WS?) | WS) specialpower_value
                                             | 'StartAbilityRange' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'AbilityAbortRange' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'PreparationTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'PersistentPrepTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'PackTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'UnpackTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'PreTriggerUnstealthTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'SkipPackingWithNoTarget' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'PackUnpackVariationFactor' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'SpecialObject' ((WS? EQ WS?) | WS) object_value
                                             | 'SpecialObjectAttachToBone' ((WS? EQ WS?) | WS) (ID | STRING)
                                             | 'MaxSpecialObjects' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'SpecialObjectsPersistent' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'EffectDuration' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'EffectValue' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'UniqueSpecialObjectTargets' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'SpecialObjectsPersistWhenOwnerDies' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'AlwaysValidateSpecialObjects' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'FlipOwnerAfterPacking' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'FlipOwnerAfterUnpacking' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'FleeRangeAfterCompletion' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'DisableFXParticleSystem' ((WS? EQ WS?) | WS) particlesystem_value
                                             | 'DoCaptureFX' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'PackSound' ((WS? EQ WS?) | WS) audioevent_value
                                             | 'UnpackSound' ((WS? EQ WS?) | WS) audioevent_value
                                             | 'PrepSoundLoop' ((WS? EQ WS?) | WS) audioevent_value
                                             | 'TriggerSound' ((WS? EQ WS?) | WS) audioevent_value
                                             | 'LoseStealthOnTrigger' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'AwardXPForTriggering' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'SkillPointsForTriggering' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ApproachRequiresLOS' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'ApproachRequiresLOS' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'NeedToFaceTarget' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'PersistenceRequiresRecharge' ((WS? EQ WS?) | WS) BOOLEAN
                                             ;

behaviorModule_specialPowerCompletionDie: 'SpecialPowerCompletionDie' WS moduleTag_value NEWLINE ((WS? behaviorModule_specialPowerCompletionDie_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_specialPowerCompletionDie_properties: behaviorModule_deathTypes
                                             | 'VeterancyLevels' ((WS? EQ WS?) | WS) veterency_modifier (WS veterency_modifier)*
                                             | 'ExemptStatus' ((WS? EQ WS?) | WS) status_value (WS status_value)*
                                             | 'RequiredStatus' ((WS? EQ WS?) | WS) status_value
                                             | 'SpecialPowerTemplate' ((WS? EQ WS?) | WS) ID
                                             ;

behaviorModule_specialPowerCreate: 'SpecialPowerCreate' WS moduleTag_value NEWLINE (WS | NEWLINE)*;

behaviorModule_spectreGunshipDeploymentUpdate: 'SpectreGunshipDeploymentUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_spectreGunshipDeploymentUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_spectreGunshipDeploymentUpdate_properties: 'GunshipTemplateName' ((WS? EQ WS?) | WS) specialpower_value
                                             | 'RequiredScience' ((WS? EQ WS?) | WS) science_value (WS science_value)*
                                             | 'SpecialPowerTemplate' ((WS? EQ WS?) | WS) specialpower_value
                                             | 'AttackAreaRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'CreateLocation' ((WS? EQ WS?) | WS) ocl_createLocation
                                             ;

behaviorModule_spectreGunshipUpdate: 'SpectreGunshipUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_spectreGunshipUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_spectreGunshipUpdate_properties: 'SpecialPowerTemplate' ((WS? EQ WS?) | WS) specialpower_value
                                             | 'GattlingTemplateName' ((WS? EQ WS?) | WS) ID
                                             | 'HowitzerFiringRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'OrbitTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'HowitzerFollowLag' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'AttackAreaRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'StrafingIncrement' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'OrbitInsertionSlope' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'RandomOffsetForHowitzer' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'TargetingReticleRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'GunshipOrbitRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'HowitzerWeaponTemplate' ((WS? EQ WS?) | WS) weapon_value
                                             | 'GattlingStrafeFXParticleSystem' ((WS? EQ WS?) | WS) particlesystem_value
                                             | behaviorModule_spectreGunshipUpdate_attackareadecal
                                             | behaviorModule_spectreGunshipUpdate_targetingreticleDecal
                                             ;

behaviorModule_spectreGunshipUpdate_attackareadecal: 'AttackAreaDecal' NEWLINE ((WS? behaviorModule_spectreGunshipUpdate_attackareadecal_properties WS? NEWLINE) | (WS | NEWLINE))* end;
behaviorModule_spectreGunshipUpdate_attackareadecal_properties: 'Texture' ((WS? EQ WS?) | WS) ID
                                             | 'Style' ((WS? EQ WS?) | WS) shadow_value
                                             | 'OpacityMin' ((WS? EQ WS?) | WS) PERCENT
                                             | 'OpacityMax' ((WS? EQ WS?) | WS) PERCENT
                                             | 'OpacityThrobTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'Color' ((WS? EQ WS?) | WS) RGBA
                                             | 'OnlyVisibleToOwningPlayer' ((WS? EQ WS?) | WS) BOOLEAN
                                             ;

behaviorModule_spectreGunshipUpdate_targetingreticleDecal: 'TargetingReticleDecal' NEWLINE ((WS? behaviorModule_spectreGunshipUpdate_targetingreticleDecal_properties WS? NEWLINE) | (WS | NEWLINE))* end;
behaviorModule_spectreGunshipUpdate_targetingreticleDecal_properties: 'Texture' ((WS? EQ WS?) | WS) ID
                                             | 'Style' ((WS? EQ WS?) | WS) shadow_value
                                             | 'OpacityMin' ((WS? EQ WS?) | WS) PERCENT
                                             | 'OpacityMax' ((WS? EQ WS?) | WS) PERCENT
                                             | 'OpacityThrobTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'Color' ((WS? EQ WS?) | WS) RGBA
                                             | 'OnlyVisibleToOwningPlayer' ((WS? EQ WS?) | WS) BOOLEAN
                                             ;

behaviorModule_spyVisionSpecialPower: 'SpyVisionSpecialPower' WS moduleTag_value NEWLINE ((WS? behaviorModule_spyVisionSpecialPower_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_spyVisionSpecialPower_properties: 'SpecialPowerTemplate' ((WS? EQ WS?) | WS) specialpower_value
                                             | 'UpdateModuleStartsAttack' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'StartsPaused' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'InitiateSound' ((WS? EQ WS?) | WS) audioevent_value
                                             | 'ScriptedSpecialPowerOnly' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'BaseDuration' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'BonusDurationPerCaptured' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'MaxDuration' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             ;

behaviorModule_spyVisionUpdate: 'SpyVisionUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_spyVisionUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_spyVisionUpdate_properties: 'NeedsUpgrade' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'SelfPowered' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'SelfPoweredDuration' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'SelfPoweredInterval' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'SpyOnKindof' ((WS? EQ WS?) | WS) kindof_value
                                             | 'TriggeredBy' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                             | 'ConflictsWith' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                             ;

behaviorModule_squishCollide: 'SquishCollide' WS moduleTag_value NEWLINE (WS | NEWLINE)*;

behaviorModule_statusBitUpgrade: 'StatusBitsUpgrade' WS moduleTag_value NEWLINE ((WS? behaviorModule_statusBitUpgrade_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_statusBitUpgrade_properties: 'TriggeredBy' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                             | 'ConflictsWith' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                             | 'RemovesUpgrades' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                             | 'FXListUpgrade' ((WS? EQ WS?) | WS) fxlist_value
                                             | 'RequiresAllTriggers' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'StatusToSet' ((WS? EQ WS?) | WS) status_value
                                             | 'StatusToClear' ((WS? EQ WS?) | WS) status_value
                                             ;

behaviorModule_stealthDetectorUpdate: 'StealthDetectorUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_stealthDetectorUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_stealthDetectorUpdate_properties: 'DetectionRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'DetectionRange' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'InitiallyDisabled' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'PingSound' ((WS? EQ WS?) | WS) audioevent_value
                                             | 'LoudPingSound' ((WS? EQ WS?) | WS) audioevent_value
                                             | 'IRBeaconParticleSysName' ((WS? EQ WS?) | WS) particlesystem_value
                                             | 'IRParticleSysName' ((WS? EQ WS?) | WS) particlesystem_value
                                             | 'IRBrightParticleSysName' ((WS? EQ WS?) | WS) particlesystem_value
                                             | 'IRGridParticleSysName' ((WS? EQ WS?) | WS) particlesystem_value
                                             | 'IRParticleSysBone' ((WS? EQ WS?) | WS) (ID | STRING)
                                             | 'ExtraRequiredKindOf' ((WS? EQ WS?) | WS) kindof_value
                                             | 'ExtraForbiddenKindOf' ((WS? EQ WS?) | WS) kindof_value
                                             | 'CanDetectWhileGarrisoned' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'CanDetectWhileContained' ((WS? EQ WS?) | WS) BOOLEAN
                                             ;

behaviorModule_stealthUpdate: 'StealthUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_stealthUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_stealthUpdate_properties: 'StealthDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'MoveThresholdSpeed' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'StealthForbiddenConditions' ((WS? EQ WS?) | WS) object_condition_types (WS object_condition_types)*
                                             | 'HintDetectableConditions' ((WS? EQ WS?) | WS) status_value (WS status_value)*
                                             | 'RequiredStatus' ((WS? EQ WS?) | WS) status_value
                                             | 'ForbiddenStatus' ((WS? EQ WS?) | WS) status_value
                                             | 'FriendlyOpacityMin' ((WS? EQ WS?) | WS) PERCENT
                                             | 'FriendlyOpacityMax' ((WS? EQ WS?) | WS) PERCENT
                                             | 'PulseFrequency' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'DisguisesAsTeam' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'RevealDistanceFromTarget' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'OrderIdleEnemiesToAttackMeUponReveal' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'DisguiseFX' ((WS? EQ WS?) | WS) fxlist_value
                                             | 'DisguiseRevealFX' ((WS? EQ WS?) | WS) fxlist_value
                                             | 'DisguiseTransitionTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'DisguiseRevealTransitionTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'InnateStealth' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'UseRiderStealth' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'EnemyDetectionEvaEvent' ((WS? EQ WS?) | WS) ID
                                             | 'OwnDetectionEvaEvent' ((WS? EQ WS?) | WS) ID
                                             | 'BlackMarketCheckDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'GrantedBySpecialPower' ((WS? EQ WS?) | WS) ID
                                             ;

behaviorModule_stealthUpgrade: 'StealthUpgrade' WS moduleTag_value NEWLINE ((WS? behaviorModule_stealthUpgrade_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_stealthUpgrade_properties: 'TriggeredBy' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                             | 'ConflictsWith' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                             | 'RemovesUpgrades' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                             | 'FXListUpgrade' ((WS? EQ WS?) | WS) fxlist_value
                                             | 'RequiresAllTriggers' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'UpgradeObject' ((WS? EQ WS?) | WS) ocl_value
                                             ;

behaviorModule_stickyBombUpdate: 'StickyBombUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_stickyBombUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_stickyBombUpdate_properties: 'AttachToTargetBone' ((WS? EQ WS?) | WS) (ID | STRING)
                                             | 'OffsetZ' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'GeometryBasedDamageWeapon' ((WS? EQ WS?) | WS) ID
                                             | 'GeometryBasedDamageFX' ((WS? EQ WS?) | WS) fxlist_value
                                             ;

behaviorModule_structureCollapseUpdate: 'StructureCollapseUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_structureCollapseUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_structureCollapseUpdate_properties: 'MinCollapseDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'MaxCollapseDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'MinBurstDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'MaxBurstDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'CollapseDamping' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'MaxShudder' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'BigBurstFrequency' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'OCL' ((WS? EQ WS?) | WS) TimePoint WS ocl_value
                                             | 'FXList' ((WS? EQ WS?) | WS) TimePoint WS fxlist_value
                                             | behaviorModule_deathTypes
                                             | 'VeterancyLevels' ((WS? EQ WS?) | WS) veterency_modifier (WS veterency_modifier)*
                                             | 'ExemptStatus' ((WS? EQ WS?) | WS) status_value (WS status_value)*
                                             | 'RequiredStatus' ((WS? EQ WS?) | WS) status_value
                                             ;

behaviorModule_structureToppleUpdate: 'StructureToppleUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_structureToppleUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_structureToppleUpdate_properties: 'MinToppleDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'MaxToppleDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'MinToppleBurstDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'MaxToppleBurstDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'StructuralIntegrity' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'StructuralDecay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'DamageFXTypes' ((WS? EQ WS?) | WS) damageType_value (WS damageType_value)*
                                             | 'TopplingFX' ((WS? EQ WS?) | WS) fxlist_value
                                             | 'ToppleDelayFX' ((WS? EQ WS?) | WS) fxlist_value
                                             | 'ToppleStartFX' ((WS? EQ WS?) | WS) fxlist_value
                                             | 'ToppleDoneFX' ((WS? EQ WS?) | WS) fxlist_value
                                             | 'CrushingFX' ((WS? EQ WS?) | WS) fxlist_value
                                             | 'CrushingWeaponName' ((WS? EQ WS?) | WS) ID
                                             | 'OCL' ((WS? EQ WS?) | WS) ocl_value
                                             | 'AngleFX' ((WS? EQ WS?) | WS) (INT | FLOAT) WS fxlist_value
                                             | behaviorModule_deathTypes
                                             | 'VeterancyLevels' ((WS? EQ WS?) | WS) veterency_modifier (WS veterency_modifier)*
                                             | 'ExemptStatus' ((WS? EQ WS?) | WS) status_value (WS status_value)*
                                             | 'RequiredStatus' ((WS? EQ WS?) | WS) status_value
                                             ;

behaviorModule_subObjectsUpgrade: 'SubObjectsUpgrade' WS moduleTag_value NEWLINE ((WS? behaviorModule_subObjectsUpgrade_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_subObjectsUpgrade_properties: 'TriggeredBy' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                             | 'ConflictsWith' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                             | 'RemovesUpgrades' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                             | 'FXListUpgrade' ((WS? EQ WS?) | WS) fxlist_value
                                             | 'RequiresAllTriggers' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'ShowSubObjects' ((WS? EQ WS?) | WS) ID (WS ID)*
                                             | 'HideSubObjects' ((WS? EQ WS?) | WS) ID (WS ID)*
                                             ;

behaviorModule_supplyCenterCreate: 'SupplyCenterCreate' WS moduleTag_value NEWLINE (WS | NEWLINE)*;

behaviorModule_supplyCenterDockUpdate: 'SupplyCenterDockUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_supplyCenterDockUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_supplyCenterDockUpdate_properties: 'NumberApproachPositions' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'AllowsPassthrough' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'GrantTemporaryStealth' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             ;

behaviorModule_supplyCenterProductionExitUpdate: 'SupplyCenterProductionExitUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_supplyCenterProductionExitUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_supplyCenterProductionExitUpdate_properties: 'UnitCreatePoint' ((WS? EQ WS?) | WS) coord3D
                                             | 'NaturalRallyPoint' ((WS? EQ WS?) | WS) coord3D
                                             | 'GrantTemporaryStealth' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             ;

behaviorModule_supplyWarehouseCreate: 'SupplyWarehouseCreate' WS moduleTag_value NEWLINE (WS | NEWLINE)*;

behaviorModule_supplyWarehouseCripplingBehavior: 'SupplyWarehouseCripplingBehavior' WS moduleTag_value NEWLINE ((WS? behaviorModule_supplyWarehouseCripplingBehavior_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_supplyWarehouseCripplingBehavior_properties: 'SelfHealSupression' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'SelfHealDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'SelfHealAmount' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             ;

behaviorModule_supplyWarehouseDockUpdate: 'SupplyWarehouseDockUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_supplyWarehouseDockUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_supplyWarehouseDockUpdate_properties: 'NumberApproachPositions' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'AllowsPassthrough' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'StartingBoxes' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'DeleteWhenEmpty' ((WS? EQ WS?) | WS) BOOLEAN
                                             ;

behaviorModule_techBuildingBehavior: 'TechBuildingBehavior' WS moduleTag_value NEWLINE ((WS? behaviorModule_techBuildingBehavior_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_techBuildingBehavior_properties: 'PulseFX' ((WS? EQ WS?) | WS) fxlist_value
                                             | 'PulseFXRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             ;

behaviorModule_tensileFormationUpdate: 'TensileFormationUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_tensileFormationUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_tensileFormationUpdate_properties: 'Enabled' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'CrackSound' ((WS? EQ WS?) | WS) ID
                                             ;

behaviorModule_toppleUpdate: 'ToppleUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_toppleUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_toppleUpdate_properties: 'ToppleFX' ((WS? EQ WS?) | WS) fxlist_value
                                             | 'BounceFX' ((WS? EQ WS?) | WS) fxlist_value
                                             | 'StumpName' ((WS? EQ WS?) | WS) ID
                                             | 'KillWhenStartToppling' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'KillWhenFinishedToppling' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'KillStumpWhenToppled' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'ToppleLeftOrRightOnly' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'ReorientToppledRubble' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'InitialVelocityPercent' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'InitialAccelPercent' ((WS? EQ WS?) | WS) PERCENT
                                             | 'BounceVelocityPercent' ((WS? EQ WS?) | WS) PERCENT
                                             ;

behaviorModule_transitionDamageFX: 'TransitionDamageFX' WS moduleTag_value NEWLINE ((WS? behaviorModule_transitionDamageFX_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_transitionDamageFX_properties: 'DamageFXTypes' ((WS? EQ WS?) | WS) damageType_value (WS damageType_value)*
                                             | 'DamageOCLTypes' ((WS? EQ WS?) | WS) damageType_value (WS damageType_value)*
                                             | 'DamageParticleTypes' ((WS? EQ WS?) | WS) damageType_value (WS damageType_value)*
                                             | 'DamagedFXList1' ((WS? EQ WS?) | WS) behaviorModule_fxlistNValue
                                             | 'DamagedFXList2' ((WS? EQ WS?) | WS) behaviorModule_fxlistNValue
                                             | 'DamagedFXList3' ((WS? EQ WS?) | WS) behaviorModule_fxlistNValue
                                             | 'DamagedFXList4' ((WS? EQ WS?) | WS) behaviorModule_fxlistNValue
                                             | 'DamagedFXList5' ((WS? EQ WS?) | WS) behaviorModule_fxlistNValue
                                             | 'DamagedFXList6' ((WS? EQ WS?) | WS) behaviorModule_fxlistNValue
                                             | 'DamagedFXList7' ((WS? EQ WS?) | WS) behaviorModule_fxlistNValue
                                             | 'DamagedFXList8' ((WS? EQ WS?) | WS) behaviorModule_fxlistNValue
                                             | 'DamagedFXList9' ((WS? EQ WS?) | WS) behaviorModule_fxlistNValue
                                             | 'DamagedFXList10' ((WS? EQ WS?) | WS) behaviorModule_fxlistNValue
                                             | 'DamagedFXList11' ((WS? EQ WS?) | WS) behaviorModule_fxlistNValue
                                             | 'DamagedFXList12' ((WS? EQ WS?) | WS) behaviorModule_fxlistNValue
                                             | 'ReallyDamagedFXList1' ((WS? EQ WS?) | WS) behaviorModule_fxlistNValue
                                             | 'ReallyDamagedFXList2' ((WS? EQ WS?) | WS) behaviorModule_fxlistNValue
                                             | 'ReallyDamagedFXList3' ((WS? EQ WS?) | WS) behaviorModule_fxlistNValue
                                             | 'ReallyDamagedFXList4' ((WS? EQ WS?) | WS) behaviorModule_fxlistNValue
                                             | 'ReallyDamagedFXList5' ((WS? EQ WS?) | WS) behaviorModule_fxlistNValue
                                             | 'ReallyDamagedFXList6' ((WS? EQ WS?) | WS) behaviorModule_fxlistNValue
                                             | 'ReallyDamagedFXList7' ((WS? EQ WS?) | WS) behaviorModule_fxlistNValue
                                             | 'ReallyDamagedFXList8' ((WS? EQ WS?) | WS) behaviorModule_fxlistNValue
                                             | 'ReallyDamagedFXList9' ((WS? EQ WS?) | WS) behaviorModule_fxlistNValue
                                             | 'ReallyDamagedFXList10' ((WS? EQ WS?) | WS) behaviorModule_fxlistNValue
                                             | 'ReallyDamagedFXList11' ((WS? EQ WS?) | WS) behaviorModule_fxlistNValue
                                             | 'ReallyDamagedFXList12' ((WS? EQ WS?) | WS) behaviorModule_fxlistNValue
                                             | 'RubbleFXList1' ((WS? EQ WS?) | WS) behaviorModule_fxlistNValue
                                             | 'RubbleFXList2' ((WS? EQ WS?) | WS) behaviorModule_fxlistNValue
                                             | 'RubbleFXList3' ((WS? EQ WS?) | WS) behaviorModule_fxlistNValue
                                             | 'RubbleFXList4' ((WS? EQ WS?) | WS) behaviorModule_fxlistNValue
                                             | 'RubbleFXList5' ((WS? EQ WS?) | WS) behaviorModule_fxlistNValue
                                             | 'RubbleFXList6' ((WS? EQ WS?) | WS) behaviorModule_fxlistNValue
                                             | 'RubbleFXList7' ((WS? EQ WS?) | WS) behaviorModule_fxlistNValue
                                             | 'RubbleFXList8' ((WS? EQ WS?) | WS) behaviorModule_fxlistNValue
                                             | 'RubbleFXList9' ((WS? EQ WS?) | WS) behaviorModule_fxlistNValue
                                             | 'RubbleFXList10' ((WS? EQ WS?) | WS) behaviorModule_fxlistNValue
                                             | 'RubbleFXList11' ((WS? EQ WS?) | WS) behaviorModule_fxlistNValue
                                             | 'RubbleFXList12' ((WS? EQ WS?) | WS) behaviorModule_fxlistNValue
                                             | 'DamagedOCL1' ((WS? EQ WS?) | WS) ocl_value
                                             | 'DamagedOCL2' ((WS? EQ WS?) | WS) ocl_value
                                             | 'DamagedOCL3' ((WS? EQ WS?) | WS) ocl_value
                                             | 'DamagedOCL4' ((WS? EQ WS?) | WS) ocl_value
                                             | 'DamagedOCL5' ((WS? EQ WS?) | WS) ocl_value
                                             | 'DamagedOCL6' ((WS? EQ WS?) | WS) ocl_value
                                             | 'DamagedOCL7' ((WS? EQ WS?) | WS) ocl_value
                                             | 'DamagedOCL8' ((WS? EQ WS?) | WS) ocl_value
                                             | 'DamagedOCL9' ((WS? EQ WS?) | WS) ocl_value
                                             | 'DamagedOCL10' ((WS? EQ WS?) | WS) ocl_value
                                             | 'DamagedOCL11' ((WS? EQ WS?) | WS) ocl_value
                                             | 'DamagedOCL12' ((WS? EQ WS?) | WS) ocl_value
                                             | 'ReallyDamagedOCL1' ((WS? EQ WS?) | WS) ocl_value
                                             | 'ReallyDamagedOCL2' ((WS? EQ WS?) | WS) ocl_value
                                             | 'ReallyDamagedOCL3' ((WS? EQ WS?) | WS) ocl_value
                                             | 'ReallyDamagedOCL4' ((WS? EQ WS?) | WS) ocl_value
                                             | 'ReallyDamagedOCL5' ((WS? EQ WS?) | WS) ocl_value
                                             | 'ReallyDamagedOCL6' ((WS? EQ WS?) | WS) ocl_value
                                             | 'ReallyDamagedOCL7' ((WS? EQ WS?) | WS) ocl_value
                                             | 'ReallyDamagedOCL8' ((WS? EQ WS?) | WS) ocl_value
                                             | 'ReallyDamagedOCL9' ((WS? EQ WS?) | WS) ocl_value
                                             | 'ReallyDamagedOCL10' ((WS? EQ WS?) | WS) ocl_value
                                             | 'ReallyDamagedOCL11' ((WS? EQ WS?) | WS) ocl_value
                                             | 'ReallyDamagedOCL12' ((WS? EQ WS?) | WS) ocl_value
                                             | 'RubbleOCL1' ((WS? EQ WS?) | WS) ocl_value
                                             | 'RubbleOCL2' ((WS? EQ WS?) | WS) ocl_value
                                             | 'RubbleOCL3' ((WS? EQ WS?) | WS) ocl_value
                                             | 'RubbleOCL4' ((WS? EQ WS?) | WS) ocl_value
                                             | 'RubbleOCL5' ((WS? EQ WS?) | WS) ocl_value
                                             | 'RubbleOCL6' ((WS? EQ WS?) | WS) ocl_value
                                             | 'RubbleOCL7' ((WS? EQ WS?) | WS) ocl_value
                                             | 'RubbleOCL8' ((WS? EQ WS?) | WS) ocl_value
                                             | 'RubbleOCL9' ((WS? EQ WS?) | WS) ocl_value
                                             | 'RubbleOCL10' ((WS? EQ WS?) | WS) ocl_value
                                             | 'RubbleOCL11' ((WS? EQ WS?) | WS) ocl_value
                                             | 'RubbleOCL12' ((WS? EQ WS?) | WS) ocl_value
                                             | 'DamagedParticleSystem1' ((WS? EQ WS?) | WS) behaviorModule_particleSystemNValue
                                             | 'DamagedParticleSystem2' ((WS? EQ WS?) | WS) behaviorModule_particleSystemNValue
                                             | 'DamagedParticleSystem3' ((WS? EQ WS?) | WS) behaviorModule_particleSystemNValue
                                             | 'DamagedParticleSystem4' ((WS? EQ WS?) | WS) behaviorModule_particleSystemNValue
                                             | 'DamagedParticleSystem5' ((WS? EQ WS?) | WS) behaviorModule_particleSystemNValue
                                             | 'DamagedParticleSystem6' ((WS? EQ WS?) | WS) behaviorModule_particleSystemNValue
                                             | 'DamagedParticleSystem7' ((WS? EQ WS?) | WS) behaviorModule_particleSystemNValue
                                             | 'DamagedParticleSystem8' ((WS? EQ WS?) | WS) behaviorModule_particleSystemNValue
                                             | 'DamagedParticleSystem9' ((WS? EQ WS?) | WS) behaviorModule_particleSystemNValue
                                             | 'DamagedParticleSystem10' ((WS? EQ WS?) | WS) behaviorModule_particleSystemNValue
                                             | 'DamagedParticleSystem11' ((WS? EQ WS?) | WS) behaviorModule_particleSystemNValue
                                             | 'DamagedParticleSystem12' ((WS? EQ WS?) | WS) behaviorModule_particleSystemNValue
                                             | 'ReallyDamagedParticleSystem1' ((WS? EQ WS?) | WS) behaviorModule_particleSystemNValue
                                             | 'ReallyDamagedParticleSystem2' ((WS? EQ WS?) | WS) behaviorModule_particleSystemNValue
                                             | 'ReallyDamagedParticleSystem3' ((WS? EQ WS?) | WS) behaviorModule_particleSystemNValue
                                             | 'ReallyDamagedParticleSystem4' ((WS? EQ WS?) | WS) behaviorModule_particleSystemNValue
                                             | 'ReallyDamagedParticleSystem5' ((WS? EQ WS?) | WS) behaviorModule_particleSystemNValue
                                             | 'ReallyDamagedParticleSystem6' ((WS? EQ WS?) | WS) behaviorModule_particleSystemNValue
                                             | 'ReallyDamagedParticleSystem7' ((WS? EQ WS?) | WS) behaviorModule_particleSystemNValue
                                             | 'ReallyDamagedParticleSystem8' ((WS? EQ WS?) | WS) behaviorModule_particleSystemNValue
                                             | 'ReallyDamagedParticleSystem9' ((WS? EQ WS?) | WS) behaviorModule_particleSystemNValue
                                             | 'ReallyDamagedParticleSystem10' ((WS? EQ WS?) | WS) behaviorModule_particleSystemNValue
                                             | 'ReallyDamagedParticleSystem11' ((WS? EQ WS?) | WS) behaviorModule_particleSystemNValue
                                             | 'ReallyDamagedParticleSystem12' ((WS? EQ WS?) | WS) behaviorModule_particleSystemNValue
                                             | 'RubbleParticleSystem1' ((WS? EQ WS?) | WS) behaviorModule_particleSystemNValue
                                             | 'RubbleParticleSystem2' ((WS? EQ WS?) | WS) behaviorModule_particleSystemNValue
                                             | 'RubbleParticleSystem3' ((WS? EQ WS?) | WS) behaviorModule_particleSystemNValue
                                             | 'RubbleParticleSystem4' ((WS? EQ WS?) | WS) behaviorModule_particleSystemNValue
                                             | 'RubbleParticleSystem5' ((WS? EQ WS?) | WS) behaviorModule_particleSystemNValue
                                             | 'RubbleParticleSystem6' ((WS? EQ WS?) | WS) behaviorModule_particleSystemNValue
                                             | 'RubbleParticleSystem7' ((WS? EQ WS?) | WS) behaviorModule_particleSystemNValue
                                             | 'RubbleParticleSystem8' ((WS? EQ WS?) | WS) behaviorModule_particleSystemNValue
                                             | 'RubbleParticleSystem9' ((WS? EQ WS?) | WS) behaviorModule_particleSystemNValue
                                             | 'RubbleParticleSystem10' ((WS? EQ WS?) | WS) behaviorModule_particleSystemNValue
                                             | 'RubbleParticleSystem11' ((WS? EQ WS?) | WS) behaviorModule_particleSystemNValue
                                             | 'RubbleParticleSystem12' ((WS? EQ WS?) | WS) behaviorModule_particleSystemNValue
                                             ;

behaviorModule_transportContain: 'TransportContain' WS moduleTag_value NEWLINE ((WS? behaviorModule_transportContain_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_transportContain_properties: 'ContainMax' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'EnterSound' ((WS? EQ WS?) | WS) audioevent_value
                                             | 'ExitSound' ((WS? EQ WS?) | WS) audioevent_value
                                             | 'DamagePercentToUnits' ((WS? EQ WS?) | WS) PERCENT
                                             | 'BurnedDeathToUnits' ((WS? EQ WS?) | WS) BOOLEAN
                                             | behaviorModule_allowInsideKindOf
                                             | behaviorModule_forbidInsideKindOf
                                             | 'PassengersAllowedToFire' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'PassengersInTurret' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'NumberOfExitPaths' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'DoorOpenTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'WeaponBonusPassedToPassengers' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'AllowAlliesInside' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'AllowEnemiesInside' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'AllowNeutralInside' ((WS? EQ WS?) | WS) BOOLEAN
                                             | behaviorModule_deathTypes
                                             | 'VeterancyLevels' ((WS? EQ WS?) | WS) veterency_modifier (WS veterency_modifier)*
                                             | 'ExemptStatus' ((WS? EQ WS?) | WS) status_value (WS status_value)*
                                             | 'RequiredStatus' ((WS? EQ WS?) | WS) status_value
                                             | 'Slots' ((WS? EQ WS?) | WS) INT
                                             | 'ScatterNearbyOnExit' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'OrientLikeContainerOnExit' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'KeepContainerVelocityOnExit' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'GoAggressiveOnExit' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'ResetMoodCheckTimeOnExit' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'DestroyRidersWhoAreNotFreeToExit' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'ExitBone' ((WS? EQ WS?) | WS) (ID | STRING)
                                             | 'ExitPitchRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'InitialPayload' ((WS? EQ WS?) | WS) object_value WS INT
                                             | 'HealthRegen%PerSec' ((WS? EQ WS?) | WS) PERCENT
                                             | 'ExitDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ArmedRidersUpgradeMyWeaponSet' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'DelayExitInAir' ((WS? EQ WS?) | WS) BOOLEAN
                                             ;

behaviorModule_tunnelContain: 'TunnelContain' WS moduleTag_value NEWLINE ((WS? behaviorModule_tunnelContain_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_tunnelContain_properties: 'ContainMax' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'EnterSound' ((WS? EQ WS?) | WS) audioevent_value
                                             | 'ExitSound' ((WS? EQ WS?) | WS) audioevent_value
                                             | 'DamagePercentToUnits' ((WS? EQ WS?) | WS) PERCENT
                                             | 'BurnedDeathToUnits' ((WS? EQ WS?) | WS) BOOLEAN
                                             | behaviorModule_allowInsideKindOf
                                             | behaviorModule_forbidInsideKindOf
                                             | 'PassengersAllowedToFire' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'PassengersInTurret' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'NumberOfExitPaths' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'DoorOpenTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'WeaponBonusPassedToPassengers' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'AllowAlliesInside' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'AllowEnemiesInside' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'AllowNeutralInside' ((WS? EQ WS?) | WS) BOOLEAN
                                             | behaviorModule_deathTypes
                                             | 'VeterancyLevels' ((WS? EQ WS?) | WS) veterency_modifier (WS veterency_modifier)*
                                             | 'ExemptStatus' ((WS? EQ WS?) | WS) status_value (WS status_value)*
                                             | 'RequiredStatus' ((WS? EQ WS?) | WS) status_value
                                             | 'Slots' ((WS? EQ WS?) | WS) INT
                                             | 'TimeForFullHeal' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             ;

behaviorModule_unitCrateCollide: 'UnitCrateCollide' WS moduleTag_value NEWLINE ((WS? behaviorModule_unitCrateCollide_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_unitCrateCollide_properties: 'RequiredKindOf' ((WS? EQ WS?) | WS) kindof_value
                                             | 'ForbiddenKindOf' ((WS? EQ WS?) | WS) kindof_value
                                             | 'ForbidOwnerPlayer' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'BuildingPickup' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'HumanOnly' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'PickupScience' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'ExecuteFX' ((WS? EQ WS?) | WS) fxlist_value
                                             | 'ExecuteAnimation' ((WS? EQ WS?) | WS) ID
                                             | 'ExecuteAnimationTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ExecuteAnimationZRise' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ExecuteAnimationFades' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'UnitCount' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'UnitName' ((WS? EQ WS?) | WS) object_value
                                             ;

behaviorModule_unpauseSpecialPowerUpgrade: 'UnpauseSpecialPowerUpgrade' WS moduleTag_value NEWLINE ((WS? behaviorModule_unpauseSpecialPowerUpgrade_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_unpauseSpecialPowerUpgrade_properties: 'TriggeredBy' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                             | 'ConflictsWith' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                             | 'RemovesUpgrades' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                             | 'FXListUpgrade' ((WS? EQ WS?) | WS) fxlist_value
                                             | 'RequiresAllTriggers' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'SpecialPowerTemplate' ((WS? EQ WS?) | WS) specialpower_value
                                             ;

behaviorModule_upgradeDie: 'UpgradeDie' WS moduleTag_value NEWLINE ((WS? behaviorModule_upgradeDie_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_upgradeDie_properties: behaviorModule_deathTypes
                                             | 'VeterancyLevels' ((WS? EQ WS?) | WS) veterency_modifier (WS veterency_modifier)*
                                             | 'ExemptStatus' ((WS? EQ WS?) | WS) status_value (WS status_value)*
                                             | 'RequiredStatus' ((WS? EQ WS?) | WS) status_value
                                             | 'UpgradeToRemove' ((WS? EQ WS?) | WS) upgrade_value WS moduleTag_value
                                             ;

behaviorModule_veterancyCrateCollide: 'VeterancyCrateCollide' WS moduleTag_value NEWLINE ((WS? behaviorModule_veterancyCrateCollide_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_veterancyCrateCollide_properties: 'RequiredKindOf' ((WS? EQ WS?) | WS) kindof_value
                                             | 'ForbiddenKindOf' ((WS? EQ WS?) | WS) kindof_value
                                             | 'ForbidOwnerPlayer' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'BuildingPickup' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'HumanOnly' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'PickupScience' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'ExecuteFX' ((WS? EQ WS?) | WS) fxlist_value
                                             | 'ExecuteAnimation' ((WS? EQ WS?) | WS) ID
                                             | 'ExecuteAnimationTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ExecuteAnimationZRise' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ExecuteAnimationFades' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'EffectRange' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'AddsOwnerVeterancy' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'IsPilot' ((WS? EQ WS?) | WS) BOOLEAN
                                             ;

behaviorModule_veterancyGainCreate: 'VeterancyGainCreate' WS moduleTag_value NEWLINE ((WS? behaviorModule_veterancyGainCreate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_veterancyGainCreate_properties: 'StartingLevel' ((WS? EQ WS?) | WS) VETERENCY
                                             | 'ScienceRequired' ((WS? EQ WS?) | WS) science_value
                                             ;

behaviorModule_waveGuideUpdate: 'WaveGuideUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_waveGuideUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_waveGuideUpdate_properties: 'WaveDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'YSize' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'LinearWaveSpacing' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'WaveBendMagnitude' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'WaterVelocity' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'PreferredHeight' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ShorelineEffectDistance' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'DamageRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'DamageAmount' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ToppleForce' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'RandomSplashSound' ((WS? EQ WS?) | WS) audioevent_value
                                             | 'RandomSplashSoundFrequency' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'BridgeParticle' ((WS? EQ WS?) | WS) fxlist_value
                                             | 'BridgeParticleAngleFudge' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'LoopingSound' ((WS? EQ WS?) | WS) audioevent_value
                                             ;

behaviorModule_weaponBonusUpdate: 'WeaponBonusUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_weaponBonusUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_weaponBonusUpdate_properties: 'RequiredAffectKindOf' ((WS? EQ WS?) | WS) kindof_value
                                             | 'ForbiddenAffectKindOf' ((WS? EQ WS?) | WS) kindof_value
                                             | 'BonusDuration' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'BonusDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'BonusRange' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'BonusConditionType' ((WS? EQ WS?) | WS) ID
                                             ;

behaviorModule_weaponBonusUpgrade: 'WeaponBonusUpgrade' WS moduleTag_value NEWLINE ((WS? behaviorModule_weaponBonusUpgrade_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_weaponBonusUpgrade_properties: 'TriggeredBy' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)* (WS upgrade_value)*
                                            | 'FXListUpgrade' ((WS? EQ WS?) | WS) fxlist_value
                                            | 'ConflictsWith' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                            | 'RequiresAllTriggers' ((WS? EQ WS?) | WS) BOOLEAN
                                            ;

behaviorModule_weaponSetUpgrade: 'WeaponSetUpgrade' WS moduleTag_value NEWLINE ((WS? behaviorModule_weaponSetUpgrade_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_weaponSetUpgrade_properties: 'TriggeredBy' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                             | 'ConflictsWith' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                             | 'RemovesUpgrades' ((WS? EQ WS?) | WS) upgrade_value (WS upgrade_value)*
                                             | 'FXListUpgrade' ((WS? EQ WS?) | WS) fxlist_value
                                             | 'RequiresAllTriggers' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'UpgradeObject' ((WS? EQ WS?) | WS) ocl_value
                                             ;


// AI Update
behaviorModule_turretBlock: (TURRET | ALT_TURRET) NEWLINE ((WS? behaviorModule_turretBlock_properties WS? NEWLINE) | (WS | NEWLINE))* end;
behaviorModule_turretBlock_properties: 'TurretTurnRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                     | 'TurretPitchRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                     | 'NaturalTurretAngle' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                     | 'NaturalTurretPitch' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                     | 'FirePitch' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                     | 'MinPhysicalPitch' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                     | 'GroundUnitPitch' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                     | 'TurretFireAngleSweep' ((WS? EQ WS?) | WS) WEAPONSLOT WS (INT | FLOAT)
                                     | 'TurretSweepSpeedModifier' ((WS? EQ WS?) | WS) WEAPONSLOT WS (INT | FLOAT)
                                     | 'ControlledWeaponSlots' ((WS? EQ WS?) | WS) WEAPONSLOT (WS WEAPONSLOT)*
                                     | 'AllowsPitch' ((WS? EQ WS?) | WS) BOOLEAN
                                     | 'MinIdleScanAngle' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                     | 'MaxIdleScanAngle' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                     | 'MinIdleScanInterval' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                     | 'MaxIdleScanInterval' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                     | 'RecenterTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                     | 'InitiallyDisabled' ((WS? EQ WS?) | WS) BOOLEAN
                                     | 'FiresWhileTurning' ((WS? EQ WS?) | WS) BOOLEAN
                                     ;

behaviorModule_aiUpdate_properties: 'AutoAcquireEnemiesWhenIdle' ((WS? EQ WS?) | WS) BOOLEAN (WS ('NotWhileAttacking' | 'Attack_Buildings' | 'Stealthed' | 'NOTWHILEATTACKING' | 'ATTACK_BUILDINGS' | 'STEALTHED'))*
                                    | 'MoodAttackCheckRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                    | 'ForbidPlayerCommands' ((WS? EQ WS?) | WS) BOOLEAN
                                    | 'TurretsLinked' ((WS? EQ WS?) | WS) BOOLEAN
                                    ;

behaviorModule_aiUpdateInterface: 'AIUpdateInterface' WS moduleTag_value NEWLINE ((WS? behaviorModule_aiUpdateInterface_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_aiUpdateInterface_properties: behaviorModule_turretBlock
                                             | behaviorModule_aiUpdate_properties
                                             ;

behaviorModule_assultTroopAIUpdate: 'AssaultTransportAIUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_assultTroopAIUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_assultTroopAIUpdate_properties: behaviorModule_turretBlock
                                             | behaviorModule_aiUpdate_properties
                                             | 'MembersGetHealedAtLifeRatio' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ClearRangeRequiredToContinueAttackMove' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             ;

behaviorModule_chinookAIUpdate: 'ChinookAIUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_chinookAIUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_chinookAIUpdate_properties: behaviorModule_turretBlock
                                          | behaviorModule_aiUpdate_properties
                                          | 'MaxBoxes' ((WS? EQ WS?) | WS) INT
                                          | 'SupplyCenterActionDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'SupplyWarehouseActionDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'SupplyWarehouseScanDistance' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'SuppliesDepletedVoice' ((WS? EQ WS?) | WS) audioevent_value
                                          | 'RappelSpeed' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'RopeDropSpeed' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'RopeName' ((WS? EQ WS?) | WS) ID
                                          | 'RopeFinalHeight' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'RopeWidth' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'RopeWobbleLen' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'RopeWobbleAmplitude' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'RopeWobbleRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'RopeColor' ((WS? EQ WS?) | WS) RGB
                                          | 'NumRopes' ((WS? EQ WS?) | WS) INT
                                          | 'PerRopeDelayMin' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'PerRopeDelayMax' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'MinDropHeight' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'WaitForRopesToDrop' ((WS? EQ WS?) | WS) BOOLEAN
                                          | 'RotorWashParticleSystem' ((WS? EQ WS?) | WS) particlesystem_value
                                          | 'UpgradedSupplyBoost' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          ;

behaviorModule_deliverPayloadAIUpdate: 'DeliverPayloadAIUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_deliverPayloadAIUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_deliverPayloadAIUpdate_properties: behaviorModule_turretBlock
                                                 | behaviorModule_aiUpdate_properties
                                                 | 'DoorDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'PutInContainer' ((WS? EQ WS?) | WS) crate_value
                                                 | 'DeliveryDistance' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'MaxAttempts' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'DropDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'DropOffset' ((WS? EQ WS?) | WS) coord3D
                                                 | 'DropVariance' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'DeliveryDecal' ((WS? EQ WS?) | WS) fxlist_value
                                                 | 'DeliveryDecalRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 ;

behaviorModule_deployableAIUpdate: 'DeployStyleAIUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_deployableAIUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_deployableAIUpdate_properties: behaviorModule_turretBlock
                                             | behaviorModule_aiUpdate_properties
                                             | 'UnpackTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'PackTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'ResetTurretBeforePacking' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'TurretsFunctionOnlyWhenDeployed' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'TurretsMustCenterBeforePacking' ((WS? EQ WS?) | WS) BOOLEAN
                                             | 'ManualDeployAnimations' ((WS? EQ WS?) | WS) BOOLEAN
                                             ;

behaviorModule_dozerAIUpdate: 'DozerAIUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_dozerAIUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_dozerAIUpdate_properties: behaviorModule_turretBlock
                                         | behaviorModule_aiUpdate_properties
                                         | 'RepairHealthPercentPerSecond' ((WS? EQ WS?) | WS) PERCENT
                                         | 'BoredTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                         | 'BoredRange' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                         ;

behaviorModule_hackInternetAIUpdate: 'HackInternetAIUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_hackInternetAIUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_hackInternetAIUpdate_properties: behaviorModule_turretBlock
                                             | behaviorModule_aiUpdate_properties
                                             | 'UnpackTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'PackTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'PackUnpackVariationFactor' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'CashUpdateDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'CashUpdateDelayFast' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'RegularCashAmount' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'VeteranCashAmount' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'EliteCashAmount' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'HeroicCashAmount' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             | 'XpPerCashUpdate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                             ;

behaviorModule_jetAIUpdate: 'JetAIUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_jetAIUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_jetAIUpdate_properties: behaviorModule_turretBlock
                                         | behaviorModule_aiUpdate_properties
                                         | 'OutOfAmmoDamagePerSecond' ((WS? EQ WS?) | WS) PERCENT
                                         | 'NeedsRunway' ((WS? EQ WS?) | WS) BOOLEAN
                                         | 'KeepsParkingSpaceWhenAirborne' ((WS? EQ WS?) | WS) BOOLEAN
                                         | 'TakeoffDistForMaxLift' ((WS? EQ WS?) | WS) PERCENT
                                         | 'TakeoffPause' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                         | 'MinHeight' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                         | 'ParkingOffset' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                         | 'SneakyOffsetWhenAttacking' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                         | 'AttackLocomotorType' ((WS? EQ WS?) | WS) locomotor_type
                                         | 'AttackLocomotorPersistTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                         | 'AttackersMissPersistTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                         | 'ReturnForAmmoLocomotorType' ((WS? EQ WS?) | WS) locomotor_type
                                         | 'LockonTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                         | 'LockonCursor' ((WS? EQ WS?) | WS) cursorname_value
                                         | 'LockonInitialDist' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                         | 'LockonFreq' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                         | 'LockonAngleSpin' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                         | 'LockonBlinky' ((WS? EQ WS?) | WS) fxlist_value
                                         | 'ReturnToBaseIdleTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                         ;

behaviorModule_missileAIUpdate: 'MissileAIUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_missileAIUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_missileAIUpdate_properties: behaviorModule_turretBlock
                                          | behaviorModule_aiUpdate_properties
                                          | 'TryToFollowTarget' ((WS? EQ WS?) | WS) BOOLEAN
                                          | 'FuelLifetime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'IgnitionDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'InitialVelocity' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'DistanceToTravelBeforeTurning' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'DistanceToTargetBeforeDiving' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'DistanceToTargetForLock' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'IgnitionFX' ((WS? EQ WS?) | WS) fxlist_value
                                          | 'UseWeaponSpeed' ((WS? EQ WS?) | WS) BOOLEAN
                                          | 'DetonateOnNoFuel' ((WS? EQ WS?) | WS) BOOLEAN
                                          | 'DistanceScatterWhenJammed' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'GarrisonHitKillRequiredKindOf' ((WS? EQ WS?) | WS) kindof_value
                                          | 'GarrisonHitKillForbiddenKindOf' ((WS? EQ WS?) | WS) kindof_value
                                          | 'GarrisonHitKillCount' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          | 'GarrisonHitKillFX' ((WS? EQ WS?) | WS) fxlist_value
                                          | 'DetonateCallsKill' ((WS? EQ WS?) | WS) BOOLEAN
                                          | 'KillSelfDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                          ;

behaviorModule_railedTransportAIUpdate: 'RailedTransportAIUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_railedTransportAIUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_railedTransportAIUpdate_properties: behaviorModule_turretBlock
                                                 | behaviorModule_aiUpdate_properties
                                                 | 'PathPrefixName' ((WS? EQ WS?) | WS) ID
                                                 ;

behaviorModule_supplyTruckAIUpdate: 'SupplyTruckAIUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_supplyTruckAIUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_supplyTruckAIUpdate_properties: behaviorModule_turretBlock
                                              | behaviorModule_aiUpdate_properties
                                              | 'MaxBoxes' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'SupplyCenterActionDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'SupplyWarehouseActionDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'SupplyWarehouseScanDistance' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'SuppliesDepletedVoice' ((WS? EQ WS?) | WS) audioevent_value
                                              ;

behaviorModule_transportAIUpdate: 'TransportAIUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_transportAIUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_transportAIUpdate_properties: behaviorModule_turretBlock
                                             | behaviorModule_aiUpdate_properties
                                             ;

behaviorModule_wanderAIUpdate: 'WanderAIUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_wanderAIUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_wanderAIUpdate_properties: behaviorModule_turretBlock
                                         | behaviorModule_aiUpdate_properties
                                         ;

behaviorModule_workerAIUpdate: 'WorkerAIUpdate' WS moduleTag_value NEWLINE ((WS? behaviorModule_workerAIUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
behaviorModule_workerAIUpdate_properties: behaviorModule_turretBlock
                                         | behaviorModule_aiUpdate_properties
                                         | 'MaxBoxes' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                         | 'RepairHealthPercentPerSecond' ((WS? EQ WS?) | WS) PERCENT
                                         | 'BoredTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                         | 'BoredRange' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                         | 'SupplyCenterActionDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                         | 'SupplyWarehouseActionDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                         | 'SupplyWarehouseScanDistance' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                         | 'SuppliesDepletedVoice' ((WS? EQ WS?) | WS) audioevent_value
                                         | 'UpgradedSupplyBoost' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                         ;

// Behavior Module Generic Properties
behaviorModule_deathTypes: 'DeathTypes' ((WS? EQ WS?) | WS) deathType_value (WS deathType_value)*;
behaviorModule_allowInsideKindOf: 'AllowInsideKindOf' ((WS? EQ WS?) | WS) kindof_value (WS kindof_value)*;
behaviorModule_forbidInsideKindOf: 'ForbidInsideKindOf' ((WS? EQ WS?) | WS) kindof_value (WS kindof_value)*;

behaviorModule_fxlistNValue: LOC WS FXLIST;
behaviorModule_particleSystemNValue: BONE WS RANDOMBONE WS PSYS;

FXLIST: ('FXList:' | 'FX:') ID;
LOC: 'Loc:' WS? XCOORD WS YCOORD WS ZCOORD;
BONE: ('Bone:' | 'bone:') (ID | STRING);
RANDOMBONE: 'RandomBone:' BOOLEAN;
PSYS: ('PSys:' | 'Psys:') ID;

// Client Modules
objectClass_clientModules: 'ClientUpdate' ((WS? EQ WS?) | WS) (clientUpdate_modules) end;

clientUpdate_modules: clientModule_animatedSysBoneClientUpdate
                    | clientModule_beaconUpdate
                    | clientModule_laserUpdate
                    | clientModule_swayClientUpdate
                    ;

clientModule_animatedSysBoneClientUpdate: 'AnimatedParticleSysBoneClientUpdate' WS moduleTag_value NEWLINE ((WS? clientModule_animatedSysBoneClientUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
clientModule_animatedSysBoneClientUpdate_properties: WS ; //TODO Research properties for this

clientModule_beaconUpdate: 'BeaconClientUpdate' WS moduleTag_value NEWLINE ((WS? clientModule_beaconUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
clientModule_beaconUpdate_properties: 'RadarPulseFrequency' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                    | 'RadarPulseDuration' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                    ;

clientModule_laserUpdate: 'LaserUpdate' WS moduleTag_value NEWLINE ((WS? clientModule_laserUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
clientModule_laserUpdate_properties: 'MuzzleParticleSystem' ((WS? EQ WS?) | WS) particlesystem_value
                                   | 'TargetParticleSystem' ((WS? EQ WS?) | WS) particlesystem_value
                                   | 'PunchThroughScalar' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                   ;

clientModule_swayClientUpdate: 'SwayClientUpdate' WS moduleTag_value NEWLINE ((WS? clientModule_swayClientUpdate_properties WS? NEWLINE) | (WS | NEWLINE))*;
clientModule_swayClientUpdate_properties: WS ; //TODO Research properties for this

// Rank Class
rankClass: 'Rank' WS INT WS* NEWLINE ((WS? rank_properties WS? NEWLINE) | (WS | NEWLINE))* end;

rank_properties: 'RankName' ((WS? EQ WS?) | WS) ('INI:RankLevel1' | 'INI:RankLevel2' | 'INI:RankLevel3' | 'INI:RankLevel4' | 'INI:RankLevel5' | 'INI:RankLevel6' | 'INI:RankLevel7' | 'INI:RankLevel8')
               | 'SkillPointsNeeded' ((WS? EQ WS?) | WS) INT
               | 'SciencesGranted' ((WS? EQ WS?) | WS) science_value (WS? science_value)*
               | 'SciencePurchasePointsGranted' ((WS? EQ WS?) | WS) INT
               ;

// Sciecnce Class
scienceClass: 'Science' WS (ID | science_value) WS* NEWLINE ((WS? science_properties WS? NEWLINE) | (WS | NEWLINE))* end;

science_properties: 'PrerequisiteSciences' ((WS? EQ WS?) | WS) science_value (WS science_value)*
                  | 'SciencePurchasePointCost' ((WS? EQ WS?) | WS) INT
                  | 'IsGrantable' ((WS? EQ WS?) | WS) BOOLEAN
                  | 'DisplayName' ((WS? EQ WS?) | WS) ID
                  | 'Description' ((WS? EQ WS?) | WS) ID
                  ;

// SpecialPower Class
specialPowerClass: 'SpecialPower' WS (ID | specialpower_value) WS* NEWLINE ((WS? specialPower_properties WS? NEWLINE) | (WS | NEWLINE))* end;


specialPower_properties: 'Enum' ((WS? EQ WS?) | WS) ('SPECIAL_INVALID'|'SPECIAL_DAISY_CUTTER'||'SPECIAL_PARADROP_AMERICA'||'SPECIAL_CARPET_BOMB'||'SPECIAL_CLUSTER_MINES'||'SPECIAL_EMP_PULSE'||'SPECIAL_NAPALM_STRIKE'||'SPECIAL_CASH_HACK'||'SPECIAL_NEUTRON_MISSILE'||'SPECIAL_SPY_SATELLITE'||'SPECIAL_DEFECTOR'||'SPECIAL_TERROR_CELL'||'SPECIAL_AMBUSH'||'SPECIAL_BLACK_MARKET_NUKE'||'SPECIAL_ANTHRAX_BOMB'||'SPECIAL_SCUD_STORM'||'SPECIAL_DEMORALIZE_OBSOLETE'||'SPECIAL_CRATE_DROP'||'SPECIAL_A10_THUNDERBOLT_STRIKE'||'SPECIAL_DETONATE_DIRTY_NUKE'||'SPECIAL_ARTILLERY_BARRAGE'||'SPECIAL_MISSILE_DEFENDER_LASER_GUIDED_MISSILES'||'SPECIAL_REMOTE_CHARGES'||'SPECIAL_TIMED_CHARGES'||'SPECIAL_HELIX_NAPALM_BOMB'||'SPECIAL_HACKER_DISABLE_BUILDING'||'SPECIAL_TANKHUNTER_TNT_ATTACK'||'SPECIAL_BLACKLOTUS_CAPTURE_BUILDING'||'SPECIAL_BLACKLOTUS_DISABLE_VEHICLE_HACK'||'SPECIAL_BLACKLOTUS_STEAL_CASH_HACK'||'SPECIAL_INFANTRY_CAPTURE_BUILDING'||'SPECIAL_RADAR_VAN_SCAN'||'SPECIAL_SPY_DRONE'||'SPECIAL_DISGUISE_AS_VEHICLE'||'SPECIAL_BOOBY_TRAP'||'SPECIAL_REPAIR_VEHICLES'||'SPECIAL_PARTICLE_UPLINK_CANNON'||'SPECIAL_CASH_BOUNTY'||'SPECIAL_CHANGE_BATTLE_PLANS'||'SPECIAL_CIA_INTELLIGENCE'||'SPECIAL_CLEANUP_AREA'||'SPECIAL_LAUNCH_BAIKONUR_ROCKET'||'SPECIAL_SPECTRE_GUNSHIP'||'SPECIAL_GPS_SCRAMBLER'||'SPECIAL_FRENZY'||'SPECIAL_SNEAK_ATTACK'||'SPECIAL_CHINA_CARPET_BOMB'||'EARLY_SPECIAL_CHINA_CARPET_BOMB'||'SPECIAL_LEAFLET_DROP'||'EARLY_SPECIAL_LEAFLET_DROP'||'EARLY_SPECIAL_FRENZY'||'SPECIAL_COMMUNICATIONS_DOWNLOAD'||'EARLY_SPECIAL_REPAIR_VEHICLES'||'SPECIAL_TANK_PARADROP'||'SUPW_SPECIAL_PARTICLE_UPLINK_CANNON'||'AIRF_SPECIAL_DAISY_CUTTER'||'NUKE_SPECIAL_CLUSTER_MINES'||'NUKE_SPECIAL_NEUTRON_MISSILE'||'AIRF_SPECIAL_A10_THUNDERBOLT_STRIKE'||'AIRF_SPECIAL_SPECTRE_GUNSHIP'||'INFA_SPECIAL_PARADROP_AMERICA'||'SLTH_SPECIAL_GPS_SCRAMBLER'||'AIRF_SPECIAL_CARPET_BOMB'||'SUPR_SPECIAL_CRUISE_MISSILE'||'LAZR_SPECIAL_PARTICLE_UPLINK_CANNON'||'SUPW_SPECIAL_NEUTRON_MISSILE'||'SPECIAL_BATTLESHIP_BOMBARDMENT')
                       | 'ReloadTime' ((WS? EQ WS?) | WS) INT
                       | 'RequiredScience' ((WS? EQ WS?) | WS) science_value (WS science_value)*
                       | 'PublicTimer' ((WS? EQ WS?) | WS) BOOLEAN
                       | 'SharedSyncedTimer' ((WS? EQ WS?) | WS) BOOLEAN
                       | 'ViewObjectDuration' ((WS? EQ WS?) | WS) INT
                       | 'ViewObjectRange' ((WS? EQ WS?) | WS) INT
                       | 'RadiusCursorRadius' ((WS? EQ WS?) | WS) INT
                       | 'ShortcutPower' ((WS? EQ WS?) | WS) BOOLEAN
                       | 'AcademyClassify' ((WS? EQ WS?) | WS) academyclassifier_value
                       | 'InitiateSound' ((WS? EQ WS?) | WS) audioevent_value
                       | 'InitiateAtLocationSound' ((WS? EQ WS?) | WS) audioevent_value
                       | 'DetectionTime' ((WS? EQ WS?) | WS) INT
                       ;

// Sound Effect Class
soundEffectClasses: audioEventClass | dialogEventClass;

audioEventClass: 'AudioEvent' WS audioevent_value WS* NEWLINE ((WS? audioevent_properties WS? NEWLINE) | (WS | NEWLINE))* end;
dialogEventClass: 'DialogEvent' WS audioevent_value WS* NEWLINE ((WS? audioevent_properties WS? NEWLINE) | (WS | NEWLINE))* end;

audioevent_properties: 'Filename' ((WS? EQ WS?) | WS) file
                     | 'MinVolume' ((WS? EQ WS?) | WS) INT
                     | 'LoopCount' ((WS? EQ WS?) | WS) INT
                     | 'Priority' ((WS? EQ WS?) | WS) ('lowest' | 'LOWEST' | 'low' | 'LOW' | 'normal' | 'NORMAL' | 'high' | 'HIGH' | 'critical' | 'CRITICAL' | None_value) (WS ('lowest' | 'LOWEST' | 'low' | 'LOW' | 'normal' | 'NORMAL' | 'high' | 'HIGH' | 'critical' | 'CRITICAL' | None_value))*
                     | 'Control' ((WS? EQ WS?) | WS) ('loop' | 'random' | All_value | 'postdelay' | 'interrupt' | None_value | 'Loop' | 'Random' | 'PostDelay' | 'Interrupt') (WS ('loop' | 'random' | All_value | 'postdelay' | 'interrupt' | None_value | 'Loop' | 'Random' | 'PostDelay' | 'Interrupt'))*
                     | 'Sounds' ((WS? EQ WS?) | WS) ID (WS ID)*
                     | 'SoundsNight' ((WS? EQ WS?) | WS) ID (WS ID)*
                     | 'SoundsEvening' ((WS? EQ WS?) | WS) ID (WS ID)*
                     | 'SoundsMorning' ((WS? EQ WS?) | WS) ID (WS ID)*
                     | 'Attack' ((WS? EQ WS?) | WS) ID (WS ID)*
                     | 'Delay' ((WS? EQ WS?) | WS) INT WS INT
                     | 'Decay' ((WS? EQ WS?) | WS) ID (WS ID)*
                     | 'Volume' ((WS? EQ WS?) | WS) INT
                     | 'MinRange' ((WS? EQ WS?) | WS) INT
                     | 'MaxRange' ((WS? EQ WS?) | WS) INT
                     | 'Limit' ((WS? EQ WS?) | WS) INT
                     | 'Type' ((WS? EQ WS?) | WS) ('ui' | 'world' | 'shrouded' | 'global' | 'voice' | 'player' | 'allies' | 'enemies' | 'everyone' | None_value) (WS ('ui' | 'world' | 'shrouded' | 'global' | 'voice' | 'player' | 'allies' | 'enemies' | 'everyone' | None_value))*
                     | 'PitchShift' ((WS? EQ WS?) | WS) INT (WS INT)?
                     | 'VolumeShift' ((WS? EQ WS?) | WS) INT (WS INT)?
                     | 'LowPassCutoff' ((WS? EQ WS?) | WS) INT
                     ;

// ObjectCreationList Class
objectCreationListClass: 'ObjectCreationList' WS ocl_value WS* NEWLINE ((WS? objectCreationListClass_blocks WS? NEWLINE) | (WS | NEWLINE))* end;

objectCreationListClass_blocks: objectCreationListClass_createDebrisBlock
                              | objectCreationListClass_createObjectBlock
                              | objectCreationListClass_fireWeaponBlock
                              | objectCreationListClass_deliveryPayloadBlock
                              | objectCreationListClass_createDebrisBlock
                              | objectCreationListClass_applyRandomForceBlock
                              | objectCreationListClass_attackBlock
                              ;

objectCreationListClass_createDebrisBlock: 'CreateDebris' NEWLINE ((WS? objectCreationListClass_createDebrisProperties WS? NEWLINE) | (WS | NEWLINE))* end;

objectCreationListClass_createDebrisProperties: 'ModelNames' ((WS? EQ WS?) | WS) ID (WS ID)*
                                              | 'AnimationSet' ((WS? EQ WS?) | WS) ID '.' ID (WS ID '.' ID)*
                                              | 'FXFinal' ((WS? EQ WS?) | WS) fxlist_value
                                              | 'OkToChangeModelColor' ((WS? EQ WS?) | WS) BOOLEAN
                                              | 'IgnorePrimaryObstacle' ((WS? EQ WS?) | WS) BOOLEAN
                                              | 'Mass' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'ExtraBounciness' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'ExtraFriction' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'Count' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'Mass' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'Disposition' ((WS? EQ WS?) | WS) disposition_value (WS disposition_value)*
                                              | 'DispositionIntensity' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'SpinRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'Offset' ((WS? EQ WS?) | WS) coord3D
                                              | 'MinLifetime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'MaxLifetime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'MinForcePitch' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'MaxForcePitch' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'MinForceMagnitude' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'MaxForceMagnitude' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'YawRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'PitchRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'RollRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'ParticleSystem' ((WS? EQ WS?) | WS) particlesystem_value
                                              | 'BounceSound' ((WS? EQ WS?) | WS) audioevent_value
                                              | 'OrientInForceDirection' ((WS? EQ WS?) | WS) BOOLEAN
                                              ;

disposition_value: (None_value | 'SEND_IT_FLYING' | 'SEND_IT_OUT' | 'SEND_IT_UP' | 'LIKE_EXISTING' | 'INHERIT_VELOCITY' | 'ON_GROUND_ALIGNED' | 'RANDOM_FORCE' | 'FLOATING');

objectCreationListClass_createObjectBlock: 'CreateObject' WS* NEWLINE ((WS? objectCreationListClass_createObjectProperties WS? NEWLINE) | (WS | NEWLINE))* end;

objectCreationListClass_createObjectProperties: 'ObjectNames' ((WS? EQ WS?) | WS) object_value (WS object_value)*
                                              | 'Disposition' ((WS? EQ WS?) | WS) disposition_value (WS disposition_value)*
                                              | 'PreserveLayer' ((WS? EQ WS?) | WS) BOOLEAN
                                              | 'Offset' ((WS? EQ WS?) | WS) coord3D
                                              | 'DispositionIntensity' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'Count' ((WS? EQ WS?) | WS) INT
                                              | 'IgnorePrimaryObstacle' ((WS? EQ WS?) | WS) BOOLEAN
                                              | 'RequiresLivePlayer' ((WS? EQ WS?) | WS) BOOLEAN
                                              | 'MinForcePitch' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'MaxForcePitch' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'MinForceMagnitude' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'MaxForceMagnitude' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'MinLifetime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'MaxLifetime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'SpinRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'ExtraBounciness' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'ExtraFriction' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'ContainInsideSourceObject' ((WS? EQ WS?) | WS) BOOLEAN
                                              | 'InheritsVeterancy' ((WS? EQ WS?) | WS) BOOLEAN
                                              | 'InvulnerableTime' ((WS? EQ WS?) | WS) INT
                                              | 'PutInContainer' ((WS? EQ WS?) | WS) object_value
                                              | 'SpreadFormation' ((WS? EQ WS?) | WS) BOOLEAN
                                              | 'MinDistanceAFormation' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'MinDistanceBFormation' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'MaxDistanceFormation' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'FadeIn' ((WS? EQ WS?) | WS) BOOLEAN
                                              | 'FadeTime' ((WS? EQ WS?) | WS) INT
                                              | 'FadeSound' ((WS? EQ WS?) | WS) audioevent_value
                                              | 'DiesOnBadLand' ((WS? EQ WS?) | WS) BOOLEAN
                                              | 'SkipIfSignificantlyAirborne' ((WS? EQ WS?) | WS) BOOLEAN
                                              | 'RollRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'PitchRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              | 'YawRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                              ;

objectCreationListClass_applyRandomForceBlock: 'ApplyRandomForce' WS* NEWLINE ((WS? objectCreationListClass_applyRandomForceProperties WS? NEWLINE) | (WS | NEWLINE))* end;

objectCreationListClass_applyRandomForceProperties: 'MinForceMagnitude' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                  | 'MaxForceMagnitude' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                  | 'MinForcePitch' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                  | 'MaxForcePitch' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                  | 'SpinRate' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                  ;

objectCreationListClass_attackBlock: 'Attack' WS* NEWLINE ((WS? objectCreationListClass_attackProperties WS? NEWLINE) | (WS | NEWLINE))* end;

objectCreationListClass_attackProperties: objectCreationListClass_deliveryDecal
                                        | weaponslot_property
                                        | 'NumberOfShots' ((WS? EQ WS?) | WS) INT
                                        | 'DeliveryDecalRadius' ((WS? EQ WS?) | WS) INT
                                        ;

objectCreationListClass_fireWeaponBlock: 'FireWeapon' WS* NEWLINE ((WS? objectCreationListClass_fireWeaponProperties WS? NEWLINE) | (WS | NEWLINE))* end;

objectCreationListClass_fireWeaponProperties: 'Weapon' ((WS? EQ WS?) | WS) weapon_value ;

objectCreationListClass_deliveryPayloadBlock: 'DeliverPayload' WS* NEWLINE ((WS? objectCreationListClass_deliveryPayloadProperties WS? NEWLINE) | (WS | NEWLINE))* end;

objectCreationListClass_deliveryPayloadProperties: objectCreationListClass_deliveryDecal
                                                 | 'Transport' ((WS? EQ WS?) | WS) object_value
                                                 | 'StartAtPreferredHeight' ((WS? EQ WS?) | WS) BOOLEAN
                                                 | 'StartAtMaxSpeed' ((WS? EQ WS?) | WS) BOOLEAN
                                                 | 'MaxAttempts' ((WS? EQ WS?) | WS) INT
                                                 | 'DropOffset' ((WS? EQ WS?) | WS) coord3D
                                                 | 'Payload' ((WS? EQ WS?) | WS) object_value
                                                 | 'DeliveryDistance' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'DeliveryDecalRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'PreOpenDistance' ((WS? EQ WS?) | WS) INT
                                                 | 'FormationSize' ((WS? EQ WS?) | WS) INT
                                                 | 'FormationSpacing' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'VisibleItemsDroppedPerInterval' ((WS? EQ WS?) | WS) INT
                                                 | 'VisibleDropBoneBaseName' ((WS? EQ WS?) | WS) (ID | STRING)
                                                 | 'VisibleSubObjectBaseName' ((WS? EQ WS?) | WS) ID
                                                 | 'VisibleNumBones' ((WS? EQ WS?) | WS) INT
                                                 | 'VisiblePayloadTemplateName' ((WS? EQ WS?) | WS) object_value
                                                 | 'VisiblePayloadWeaponTemplate' ((WS? EQ WS?) | WS) weapon_value
                                                 | 'WeaponErrorRadius' ((WS? EQ WS?) | WS) INT
                                                 | 'DelayDeliveryMax' ((WS? EQ WS?) | WS) INT
                                                 | 'InheritTransportVelocity' ((WS? EQ WS?) | WS) BOOLEAN
                                                 | 'ExitPitchRate' ((WS? EQ WS?) | WS) INT
                                                 | 'SelfDestructObject' ((WS? EQ WS?) | WS) BOOLEAN
                                                 | 'DropDelay' ((WS? EQ WS?) | WS) INT
                                                 | 'Payload' ((WS? EQ WS?) | WS) object_value WS INT
                                                 | 'FireWeapon' ((WS? EQ WS?) | WS) BOOLEAN
                                                 | 'WeaponConvergenceFactor' ((WS? EQ WS?) | WS) (INT | FLOAT)
                                                 | 'DiveStartDistance' ((WS? EQ WS?) | WS) INT
                                                 | 'DiveEndDistance' ((WS? EQ WS?) | WS) INT
                                                 | 'StrafingWeaponSlot' ((WS? EQ WS?) | WS) WEAPONSLOT
                                                 | 'StrafeLength' ((WS? EQ WS?) | WS) INT
                                                 | 'StrafeWeaponFX' ((WS? EQ WS?) | WS) fxlist_value
                                                 | 'ParachuteDirectly' ((WS? EQ WS?) | WS) BOOLEAN
                                                 | 'PutInContainer' ((WS? EQ WS?) | WS) object_value
                                                 | 'DropVariance' ((WS? EQ WS?) | WS) coord3D
                                                 ;

objectCreationListClass_deliveryDecal: 'DeliveryDecal' WS* NEWLINE
                                       (WS? ('Texture' ((WS? EQ WS?) | WS) ID
                                     | 'Style' ((WS? EQ WS?) | WS) shadow_value
                                     | 'OpacityMin' ((WS? EQ WS?) | WS) PERCENT
                                     | 'OpacityMax' ((WS? EQ WS?) | WS) PERCENT
                                     | 'OpacityThrobTime' ((WS? EQ WS?) | WS) INT
                                     | 'Color' ((WS? EQ WS?) | WS) RGBA
                                     | 'OnlyVisibleToOwningPlayer' ((WS? EQ WS?) | WS) BOOLEAN) WS? NEWLINE)*
                                     end
                                     ;

// ParticleSystem Class
particleSystemClass: 'ParticleSystem' WS particlesystem_value WS* NEWLINE ((WS? particleSystemClass_properties WS? NEWLINE) | (WS | NEWLINE))* end;

particleSystemClass_properties: 'Priority' ((WS? EQ WS?) | WS) particleSystemClass_priorityValue
							  | 'IsOneShot' ((WS? EQ WS?) | WS) BOOLEAN
							  | 'Shader' ((WS? EQ WS?) | WS) particleSystemClass_shaderValue
							  | 'Type' ((WS? EQ WS?) | WS) particleSystemClass_typeValue
							  | 'ParticleName' ((WS? EQ WS?) | WS) file
							  | 'AngleZ' ((WS? EQ WS?) | WS) (INT | FLOAT) WS (INT | FLOAT)
							  | 'AngularRateZ' ((WS? EQ WS?) | WS) (INT | FLOAT) WS (INT | FLOAT)
							  | 'AngularDamping' ((WS? EQ WS?) | WS) (INT | FLOAT) WS (INT | FLOAT)
							  | 'VelocityDamping' ((WS? EQ WS?) | WS) (INT | FLOAT) WS (INT | FLOAT)
							  | 'Gravity' ((WS? EQ WS?) | WS) (INT | FLOAT)
							  | 'Lifetime' ((WS? EQ WS?) | WS) (INT | FLOAT) WS (INT | FLOAT)
							  | 'SystemLifetime' ((WS? EQ WS?) | WS) (INT | FLOAT)
							  | 'Size' ((WS? EQ WS?) | WS) (INT | FLOAT) WS (INT | FLOAT)
							  | 'StartSizeRate' ((WS? EQ WS?) | WS) (INT | FLOAT) WS (INT | FLOAT)
							  | 'SizeRate' ((WS? EQ WS?) | WS) (INT | FLOAT) WS (INT | FLOAT)
							  | 'SizeRateDamping' ((WS? EQ WS?) | WS) (INT | FLOAT) WS (INT | FLOAT)
							  | 'SlaveSystem' ((WS? EQ WS?) | WS) particlesystem_value
							  | 'SlavePosOffset' ((WS? EQ WS?) | WS) coord3D
							  | 'PerParticleAttachedSystem' ((WS? EQ WS?) | WS) particlesystem_value
							  | 'Alpha1' ((WS? EQ WS?) | WS) (INT | FLOAT) WS (INT | FLOAT) WS (INT | FLOAT)
							  | 'Alpha2' ((WS? EQ WS?) | WS) (INT | FLOAT) WS (INT | FLOAT) WS (INT | FLOAT)
							  | 'Alpha3' ((WS? EQ WS?) | WS) (INT | FLOAT) WS (INT | FLOAT) WS (INT | FLOAT)
							  | 'Alpha4' ((WS? EQ WS?) | WS) (INT | FLOAT) WS (INT | FLOAT) WS (INT | FLOAT)
							  | 'Alpha5' ((WS? EQ WS?) | WS) (INT | FLOAT) WS (INT | FLOAT) WS (INT | FLOAT)
							  | 'Alpha6' ((WS? EQ WS?) | WS) (INT | FLOAT) WS (INT | FLOAT) WS (INT | FLOAT)
							  | 'Alpha7' ((WS? EQ WS?) | WS) (INT | FLOAT) WS (INT | FLOAT) WS (INT | FLOAT)
							  | 'Alpha8' ((WS? EQ WS?) | WS) (INT | FLOAT) WS (INT | FLOAT) WS (INT | FLOAT)
							  | 'Color1' ((WS? EQ WS?) | WS) RGB WS (INT | FLOAT)
							  | 'Color2' ((WS? EQ WS?) | WS) RGB WS (INT | FLOAT)
							  | 'Color3' ((WS? EQ WS?) | WS) RGB WS (INT | FLOAT)
							  | 'Color4' ((WS? EQ WS?) | WS) RGB WS (INT | FLOAT)
							  | 'Color5' ((WS? EQ WS?) | WS) RGB WS (INT | FLOAT)
							  | 'Color6' ((WS? EQ WS?) | WS) RGB WS (INT | FLOAT)
							  | 'Color7' ((WS? EQ WS?) | WS) RGB WS (INT | FLOAT)
							  | 'Color8' ((WS? EQ WS?) | WS) RGB WS (INT | FLOAT)
							  | 'ColorScale' ((WS? EQ WS?) | WS) (INT | FLOAT) WS (INT | FLOAT)
							  | 'BurstDelay' ((WS? EQ WS?) | WS) (INT | FLOAT) WS (INT | FLOAT)
							  | 'BurstCount' ((WS? EQ WS?) | WS) (INT | FLOAT) WS (INT | FLOAT)
							  | 'InitialDelay' ((WS? EQ WS?) | WS) (INT | FLOAT) WS (INT | FLOAT)
							  | 'DriftVelocity' ((WS? EQ WS?) | WS) coord3D
							  | 'VelocityType' ((WS? EQ WS?) | WS) particleSystemClass_velocityTypeValue
							  | 'VelOutward' ((WS? EQ WS?) | WS) (INT | FLOAT) WS (INT | FLOAT)
							  | 'VelOutwardOther' ((WS? EQ WS?) | WS) (INT | FLOAT) WS (INT | FLOAT)
							  | 'VelOrthoX' ((WS? EQ WS?) | WS) (INT | FLOAT) WS (INT | FLOAT)
							  | 'VelOrthoY' ((WS? EQ WS?) | WS) (INT | FLOAT) WS (INT | FLOAT)
							  | 'VelOrthoZ' ((WS? EQ WS?) | WS) (INT | FLOAT) WS (INT | FLOAT)
							  | 'VolCylinderRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
							  | 'VolCylinderLength' ((WS? EQ WS?) | WS) (INT | FLOAT)
							  | 'VolLineStart' ((WS? EQ WS?) | WS) coord3D
							  | 'VolLineEnd' ((WS? EQ WS?) | WS) coord3D
							  | 'VelSpherical' ((WS? EQ WS?) | WS)(INT | FLOAT) WS (INT | FLOAT)
							  | 'VolumeType' ((WS? EQ WS?) | WS) particleSystemClass_volumeTypeValue
							  | 'VolSphereRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
							  | 'VelHemispherical' ((WS? EQ WS?) | WS) (INT | FLOAT) WS (INT | FLOAT)
							  | 'VelCylindricalRadial' ((WS? EQ WS?) | WS) (INT | FLOAT) WS (INT | FLOAT)
							  | 'VelCylindricalNormal' ((WS? EQ WS?) | WS) (INT | FLOAT) WS (INT | FLOAT)
							  | 'VolBoxHalfSize' ((WS? EQ WS?) | WS) coord3D
							  | 'IsHollow' ((WS? EQ WS?) | WS) BOOLEAN
							  | 'IsGroundAligned' ((WS? EQ WS?) | WS) BOOLEAN
							  | 'IsEmitAboveGroundOnly' ((WS? EQ WS?) | WS) BOOLEAN
							  | 'IsParticleUpTowardsEmitter' ((WS? EQ WS?) | WS) BOOLEAN
							  | 'WindMotion' ((WS? EQ WS?) | WS) particleSystemClass_windTypeValue
							  | 'WindAngleChangeMin' ((WS? EQ WS?) | WS) (INT | FLOAT)
							  | 'WindAngleChangeMax' ((WS? EQ WS?) | WS) (INT | FLOAT)
							  | 'WindPingPongStartAngleMin' ((WS? EQ WS?) | WS) (INT | FLOAT)
							  | 'WindPingPongStartAngleMax' ((WS? EQ WS?) | WS) (INT | FLOAT)
							  | 'WindPingPongEndAngleMin' ((WS? EQ WS?) | WS) (INT | FLOAT)
							  | 'WindPingPongEndAngleMax' ((WS? EQ WS?) | WS) (INT | FLOAT)
							  ;

particleSystemClass_priorityValue: (None_value | 'WEAPON_EXPLOSION' | 'SCORCHMARK' | 'DUST_TRAIL' | 'BUILDUP' | 'DEBRIS_TRAIL' | 'UNIT_DAMAGE_FX' | 'DEATH_EXPLOSION' | 'SEMI_CONSTANT' | Constant_value | 'WEAPON_TRAIL' | 'AREA_EFFECT' | 'CRITICAL' | 'ALWAYS_RENDER');
particleSystemClass_shaderValue: (None_value | 'ADDITIVE' | 'ALPHA' | 'ALPHA_TEST' | 'MULTIPLY');
particleSystemClass_typeValue: (None_value | 'PARTICLE' | 'DRAWABLE' | 'STREAK' | 'VOLUME_PARTICLE' | 'SMUDGE');
particleSystemClass_velocityTypeValue: (None_value | 'ORTHO' | 'SPHERICAL' | 'HEMISPHERICAL' | 'CYLINDRICAL' | 'OUTWARD');
particleSystemClass_volumeTypeValue: geometry;
particleSystemClass_windTypeValue: (None_value | 'Unused' | 'PingPong' | 'Circular');

// PlayerTemplate Class
playerTemplateClass: 'PlayerTemplate' WS factionEx_value WS* NEWLINE ((WS? playerTemplateClass_properties WS? NEWLINE) | (WS | NEWLINE))* end;

playerTemplateClass_properties: 'Side' ((WS? EQ WS?) | WS) faction_value
							  | 'BaseSide' ((WS? EQ WS?) | WS) ('USA' | 'China' | 'GLA')
							  | 'PlayableSide' ((WS? EQ WS?) | WS) BOOLEAN
							  | 'StartMoney' ((WS? EQ WS?) | WS) INT
							  | 'PreferredColor' ((WS? EQ WS?) | WS) RGB
							  | 'IsObserver' ((WS? EQ WS?) | WS) BOOLEAN
							  | 'IntrinsicSciences' ((WS? EQ WS?) | WS) science_value (WS science_value)*
							  | 'DisplayName' ((WS? EQ WS?) | WS) ID
							  | 'ScoreScreenMusic' ((WS? EQ WS?) | WS) ID
							  | 'ScoreScreenImage' ((WS? EQ WS?) | WS) mappedimage_value
							  | 'OldFaction' ((WS? EQ WS?) | WS) BOOLEAN
							  | 'LoadScreenImage' ((WS? EQ WS?) | WS) mappedimage_value
							  | 'LoadScreenMusic' ((WS? EQ WS?) | WS) ID
							  | 'BeaconName' ((WS? EQ WS?) | WS) object_value
							  | 'SideIconImage' ((WS? EQ WS?) | WS) mappedimage_value
							  | 'PurchaseScienceCommandSetRank1' ((WS? EQ WS?) | WS) commandSet_value
							  | 'PurchaseScienceCommandSetRank3' ((WS? EQ WS?) | WS) commandSet_value
							  | 'PurchaseScienceCommandSetRank8' ((WS? EQ WS?) | WS) commandSet_value
							  | 'SpecialPowerShortcutCommandSet' ((WS? EQ WS?) | WS) commandSet_value
							  | 'SpecialPowerShortcutWinName' ((WS? EQ WS?) | WS) file
							  | 'SpecialPowerShortcutButtonCount' ((WS? EQ WS?) | WS) INT
							  | 'StartingBuilding' ((WS? EQ WS?) | WS) object_value
							  | 'StartingUnit0' ((WS? EQ WS?) | WS) object_value
							  | 'StartingUnit1' ((WS? EQ WS?) | WS) object_value
							  | 'StartingUnit2' ((WS? EQ WS?) | WS) object_value
							  | 'StartingUnit3' ((WS? EQ WS?) | WS) object_value
							  | 'StartingUnit4' ((WS? EQ WS?) | WS) object_value
							  | 'StartingUnit5' ((WS? EQ WS?) | WS) object_value
							  | 'StartingUnit6' ((WS? EQ WS?) | WS) object_value
                | 'StartingUnit7' ((WS? EQ WS?) | WS) object_value
                | 'StartingUnit8' ((WS? EQ WS?) | WS) object_value
                | 'StartingUnit9' ((WS? EQ WS?) | WS) object_value
							  | 'FlagWaterMark' ((WS? EQ WS?) | WS) mappedimage_value
							  | 'EnabledImage' ((WS? EQ WS?) | WS) mappedimage_value
							  | 'SideIconImage' ((WS? EQ WS?) | WS) mappedimage_value
							  | 'GeneralImage' ((WS? EQ WS?) | WS) mappedimage_value
							  | 'ArmyTooltip' ((WS? EQ WS?) | WS) ID
							  | 'Features' ((WS? EQ WS?) | WS) ID
							  | 'MedallionRegular' ((WS? EQ WS?) | WS) mappedimage_value
							  | 'MedallionHilite' ((WS? EQ WS?) | WS) mappedimage_value
							  | 'MedallionHilite' ((WS? EQ WS?) | WS) mappedimage_value
							  | 'MedallionSelect' ((WS? EQ WS?) | WS) mappedimage_value
							  ;

// Upgrade Class
upgradeClass: 'Upgrade' WS upgrade_value WS* NEWLINE ((WS? upgrade_properties WS? NEWLINE) | (WS | NEWLINE))* end;

upgrade_properties: 'DisplayName' ((WS? EQ WS?) | WS) ID
                  | 'Type' ((WS? EQ WS?) | WS) ('PLAYER' | 'OBJECT' | None_value)
                  | 'UnitSpecificSound' ((WS? EQ WS?) | WS) audioevent_value
                  | 'BuildTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                  | 'BuildCost' ((WS? EQ WS?) | WS) INT
                  | 'ButtonImage' ((WS? EQ WS?) | WS) mappedimage_value
                  | 'ResearchSound' ((WS? EQ WS?) | WS) audioevent_value
                  | 'AcademyClassify' ((WS? EQ WS?) | WS) academyclassifier_value
                  ;

academyclassifier_value: ('ACT_NONE' | 'ACT_UPGRADE_RADAR' | 'ACT_SUPERPOWER' | None_value);

// Weapon Class
weaponClass: 'Weapon' WS weapon_value WS* NEWLINE ((WS? weapon_properties WS? NEWLINE) | (WS | NEWLINE))* end;

weapon_properties: weapon_damagetype_property
                 | weapon_deathtype_property
                 | weapon_damageaffects_property
                 | weapon_weaponbonus_property
                 | weapon_lasterbone_property
                 | 'PrimaryDamage' ((WS? EQ WS?) | WS) (INT | FLOAT)
                 | 'PrimaryDamageRadius' ((WS? EQ WS?) | WS)  (INT | FLOAT)
                 | 'SecondaryDamage' ((WS? EQ WS?) | WS)  (INT | FLOAT)
                 | 'SecondaryDamageRadius' ((WS? EQ WS?) | WS)  (INT | FLOAT)
                 | 'AttackRange' ((WS? EQ WS?) | WS)  (INT | FLOAT)
                 | 'ScatterRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                 | 'AcceptableAimDelta' ((WS? EQ WS?) | WS) (INT | FLOAT)
                 | 'LeechRangeWeapon' ((WS? EQ WS?) | WS) BOOLEAN
                 | 'AntiSmallMissile' ((WS? EQ WS?) | WS) BOOLEAN
                 | 'AntiBallisticMissile' ((WS? EQ WS?) | WS) BOOLEAN
                 | 'AntiProjectile' ((WS? EQ WS?) | WS) BOOLEAN
                 | 'WeaponSpeed' ((WS? EQ WS?) | WS) (INT | FLOAT)
                 | 'MinimumAttackRange' ((WS? EQ WS?) | WS) (INT | FLOAT)
                 | 'ProjectileExhaust' ((WS? EQ WS?) | WS) particlesystem_value
                 | 'VeterancyProjectileExhaust' ((WS? EQ WS?) | WS) VETERENCY WS particlesystem_value
                 | 'ProjectileObject' ((WS? EQ WS?) | WS) object_value
                 | 'DamageDealtAtSelfPosition' ((WS? EQ WS?) | WS) BOOLEAN
                 | 'DelayBetweenShots' ((WS? EQ WS?) | WS) ((INT | FLOAT) | (MIN WS MAX))
                 | 'ClipSize' ((WS? EQ WS?) | WS) INT
                 | 'ClipReloadTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                 | 'AutoReloadsClip' ((WS? EQ WS?) | WS) (BOOLEAN | 'RETURN_TO_BASE')
                 | 'FireFX' ((WS? EQ WS?) | WS) fxlist_value
                 | 'DamageStatusType' ((WS? EQ WS?) | WS) weapon_weaponbonus_condition_value
                 | 'VeterancyFireFX' ((WS? EQ WS?) | WS) VETERENCY WS fxlist_value
                 | 'ProjectileDetonationFX' ((WS? EQ WS?) | WS) fxlist_value
                 | 'FireSound' ((WS? EQ WS?) | WS) audioevent_value
                 | 'FireSoundLoopTime' ((WS? EQ WS?) | WS) INT
                 | 'ScatterRadiusVsInfantry' ((WS? EQ WS?) | WS) (INT | FLOAT)
                 | 'MinTargetPitch' ((WS? EQ WS?) | WS) INT
                 | 'MaxTargetPitch' ((WS? EQ WS?) | WS) INT
                 | 'WeaponRecoil' ((WS? EQ WS?) | WS) (INT | FLOAT)
                 | 'ProjectileCollidesWith' ((WS? EQ WS?) | WS) projectileColide_value (WS? projectileColide_value)*
                 | 'ShotsPerBarrel' ((WS? EQ WS?) | WS) INT
                 | 'AntiAirborneVehicle' ((WS? EQ WS?) | WS) BOOLEAN
                 | 'AntiAirborneInfantry' ((WS? EQ WS?) | WS) BOOLEAN
                 | 'AntiGround' ((WS? EQ WS?) | WS) BOOLEAN
                 | 'LaserName' ((WS? EQ WS?) | WS) ID
                 | 'PreAttackDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                 | 'PreAttackType' ((WS? EQ WS?) | WS) (None_value | 'PER_ATTACK' | 'PER_CLIP' | 'PER_SHOT')
                 | 'ContinuousFireOne' ((WS? EQ WS?) | WS) (INT | FLOAT)
                 | 'ContinuousFireTwo' ((WS? EQ WS?) | WS) (INT | FLOAT)
                 | 'ContinuousFireCoast' ((WS? EQ WS?) | WS) (INT | FLOAT)
                 | 'AutoReloadWhenIdle' ((WS? EQ WS?) | WS) (INT | FLOAT)
                 | 'ScatterTarget' ((WS? EQ WS?) | WS) XCOORD WS YCOORD
                 | 'ScatterTargetScalar' ((WS? EQ WS?) | WS) (INT | FLOAT)
                 | 'FireOCL' ((WS? EQ WS?) | WS) ocl_value
                 | 'ProjectileDetonationOCL' ((WS? EQ WS?) | WS) ocl_value
                 | 'ShowsAmmoPips' ((WS? EQ WS?) | WS) BOOLEAN
                 | 'ShockWaveAmount' ((WS? EQ WS?) | WS) (INT | FLOAT)
                 | 'ShockWaveRadius' ((WS? EQ WS?) | WS) (INT | FLOAT)
                 | 'ShockWaveTaperOff' ((WS? EQ WS?) | WS) (INT | FLOAT)
                 | 'RequestAssistRange' ((WS? EQ WS?) | WS) (INT | FLOAT)
                 | 'MissileCallsOnDie' ((WS? EQ WS?) | WS) BOOLEAN
                 | 'ProjectileStreamName' ((WS? EQ WS?) | WS) ID
                 | 'AllowAttackGarrisonedBldgs' ((WS? EQ WS?) | WS) BOOLEAN
                 | 'SuspendFXDelay' ((WS? EQ WS?) | WS) (INT | FLOAT)
                 | 'MinWeaponSpeed' ((WS? EQ WS?) | WS) (INT | FLOAT)
                 | 'ScaleWeaponSpeed' ((WS? EQ WS?) | WS) BOOLEAN
                 | 'HistoricBonusTime' ((WS? EQ WS?) | WS) (INT | FLOAT)
                 | 'CapableOfFollowingWaypoints' ((WS? EQ WS?) | WS) BOOLEAN
                 | 'HistoricBonusCount' ((WS? EQ WS?) | WS) INT
                 | 'HistoricBonusRadius' ((WS? EQ WS?) | WS) INT
                 | 'HistoricBonusWeapon' ((WS? EQ WS?) | WS) weapon_value
                 | 'AntiMine' ((WS? EQ WS?) | WS) BOOLEAN
                 | 'PlayFXWhenStealthed' ((WS? EQ WS?) | WS) BOOLEAN
                 | 'ContinueAttackRange' ((WS? EQ WS?) | WS) INT
                 ;

weapon_damagetype_property: 'DamageType' ((WS? EQ WS?) | WS) damageType_value;
weapon_deathtype_property: 'DeathType' ((WS? EQ WS?) | WS) deathType_value;
weapon_damageaffects_property: 'RadiusDamageAffects' ((WS? EQ WS?) | WS) damageAffects_value (WS damageAffects_value)*;
weapon_weaponbonus_property: 'WeaponBonus' ((WS? EQ WS?) | WS) weapon_weaponbonus_condition_value WS weapon_weaponbonus_bonus_value WS PERCENT;
weapon_lasterbone_property: 'LaserBoneName' ((WS? EQ WS?) | WS) (ID | STRING);

weapon_weaponbonus_condition_value: (None_value | 'GARRISONED' | 'HORDE' | 'CONTINUOUS_FIRE_MEAN' | 'CONTINUOUS_FIRE_FAST' | 'NATIONALISM' | 'PLAYER_UPGRADE' | 'DRONE_SPOTTING' | 'DEMORALIZED_OBSOLETE' | 'ENTHUSIASTIC' | VETERENCY | 'BATTLEPLAN_BOMBARDMENT' | 'BATTLEPLAN_HOLDTHELINE' | 'BATTLEPLAN_SEARCHANDDESTROY' | 'SUBLIMINAL' | 'SOLO_HUMAN_EASY' | 'SOLO_HUMAN_NORMAL' | 'SOLO_HUMAN_HARD' | 'SOLO_AI_EASY' | 'SOLO_AI_NORMAL' | 'SOLO_AI_HARD' | 'FAERIE_FIRE' | 'FANATICISM' | 'FRENZY_ONE' | 'FRENZY_TWO' | 'FRENZY_THREE');
weapon_weaponbonus_bonus_value: (None_value | 'DAMAGE' | 'RADIUS' | 'RANGE' | 'RATE_OF_FIRE' | 'PRE_ATTACK');
deathType_value: (PLUS | DASH)? (None_value | All_value | 'NORMAL' | 'CRUSHED' | 'BURNED' | 'EXPLODED' | 'POISONED' | 'TOPPLED' | 'FLOODED' | 'SUICIDED' | 'LASERED' | 'DETONATED' | 'SPLATTED' | 'POISONED_BETA' | 'EXTRA_2' | 'EXTRA_3' | 'EXTRA_4' | 'EXTRA_5' | 'EXTRA_6' | 'EXTRA_7' | 'EXTRA_8' | 'POISONED_GAMMA');
damageAffects_value: (None_value | 'ENEMIES' | 'NEUTRALS' | 'NEUTRAL' | 'ALLIES' | 'NOT_SIMILAR' | 'SELF' | 'SUICIDE' | 'NOT_AIRBORNE');
projectileColide_value: (None_value | 'ALLIES' | 'ENEMIES' | 'STRUCTURES' | 'SHRUBBERY' | 'PROJECTILES' | 'WALLS' | 'SMALL_MISSILES' | 'BALLISTIC_MISSILES' | 'CONTROLLED_STRUCTURES');

damageType_value: (PLUS | DASH)? (None_value | All_value | 'EXPLOSION' | 'WATER' | 'KILL_GARRISONED' | STATUS | 'CRUSH' | 'ARMOR_PIERCING' | 'SMALL_ARMS' | 'GATTLING' | 'RADIATION' | 'FLAME' | 'LASER' | 'SNIPER' | 'POISON' | 'HEALING' | 'UNRESISTABLE' | 'DEPLOY' | 'SURRENDER' | 'HACK' | 'KILL_PILOT' | 'PENALTY' | 'FALLING' | 'MELEE' | 'DISARM' | 'HAZARD_CLEANUP' | 'INFANTRY_MISSILE' | 'AURORA_BOMB' | 'LAND_MINE' | 'JET_MISSILES' | 'STEALTHJET_MISSILES' | 'MOLOTOV_COCKTAIL' | 'COMANCHE_VULCAN' | 'SUBDUAL_MISSILE' | 'SUBDUAL_VEHICLE' | 'SUBDUAL_BUILDING' | 'PARTICLE_BEAM' | 'MICROWAVE' | 'TOPPLING' | STATUS);
armorType_value: (None_value | 'NORMAL' | 'DEFAULT' | 'TOPPLING' | STATUS | 'PARTICLE_BEAM' | 'MICROWAVE' | 'EXPLOSION' | 'CRUSH' | 'ARMOR_PIERCING' | 'SMALL_ARMS' | 'GATTLING' | 'RADIATION' | 'FLAME' | 'LASER' | 'SNIPER' | 'POISON' | 'HEALING' | 'UNRESISTABLE' | 'WATER' | 'DEPLOY' | 'SURRENDER' | 'HACK' | 'KILL_PILOT' | 'PENALTY' | 'FALLING' | 'MELEE' | 'DISARM' | 'HAZARD_CLEANUP' | 'INFANTRY_MISSILE' | 'AURORA_BOMB' | 'LAND_MINE' | 'JET_MISSILES' | 'STEALTHJET_MISSILES' | 'MOLOTOV_COCKTAIL' | 'COMANCHE_VULCAN' | 'SUBDUAL_MISSILE' | 'SUBDUAL_VEHICLE' | 'SUBDUAL_BUILDING');

STATUS: 'STATUS';

// Weather Class
weatherClass: 'Weather' WS* NEWLINE ((WS? weather_properties WS? NEWLINE) | (WS | NEWLINE))* end;

weather_properties: 'SnowEnabled' ((WS? EQ WS?) | WS) BOOLEAN
                  | 'SnowTexture' ((WS? EQ WS?) | WS) file
                  | 'SnowBoxDimensions' ((WS? EQ WS?) | WS) INT
                  | 'SnowBoxDensity' ((WS? EQ WS?) | WS) (INT | FLOAT)
                  | 'SnowFrequencyScaleX' ((WS? EQ WS?) | WS) (INT | FLOAT)
                  | 'SnowFrequencyScaleY' ((WS? EQ WS?) | WS) (INT | FLOAT)
                  | 'SnowAmplitude' ((WS? EQ WS?) | WS) (INT | FLOAT)
                  | 'SnowVelocity' ((WS? EQ WS?) | WS) (INT | FLOAT)
                  | 'SnowPointSize' ((WS? EQ WS?) | WS) (INT | FLOAT)
                  | 'SnowMaxPointSize' ((WS? EQ WS?) | WS) (INT | FLOAT)
                  | 'SnowMinPointSize' ((WS? EQ WS?) | WS) (INT | FLOAT)
                  | 'SnowPointSprites' ((WS? EQ WS?) | WS) BOOLEAN
                  | 'SnowQuadSize' ((WS? EQ WS?) | WS) (INT | FLOAT)
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

armor_value: (ID | None_value);

animation2d_value: (ID | None_value);

crate_value: (ID | None_value);

commandbutton_value: (ID | None_value);

commandSet_value: (ID | None_value);

damageFX_value: (ID | None_value);

cursorname_value: (ID | None_value);
radius_cursorname_value: (ID | None_value);
invalid_cursorname_value: (ID | None_value);

mappedimage_value: (ID | None_value);

particlesystem_value: (ID | None_value);

fxlist_value: (ID | None_value);

locomotor_value: (ID | None_value);
locomotor_type: ('SET_NORMAL' | 'SET_PANIC' | 'SET_NORMAL_UPGRADED' | 'SET_SUPERSONIC' | 'SET_SLUGGISH' | 'SET_TAXIING' | 'SET_FREEFALL' | 'SET_WANDER');

object_property: 'Object' ((WS? EQ WS?) | WS) object_value;
object_value: (ID | None_value);

kindof_value: (None_value | 'IGNORE_DOCKING_BONES' | 'IGNORES_SELECT_ALL' | 'IGNORED_IN_GUI' | 'CONSERVATIVE_BUILDING' | 'DEMOTRAP' | 'EMP_HARDENED' | 'TECH_BASE_DEFENSE' | 'CANNOT_RETALIATE' | 'REJECT_UNMANNED ' | 'AIRCRAFT_CARRIER' | 'OPTIMIZED_TREE' | 'PROP' | 'BLAST_CRATER' | 'BOOBY_TRAP' | 'REVEALS_ENEMY_PATHS' | 'MONEY_HACKER' | 'CLIFF_JUMPER' | 'DONT_AUTO_CRUSH_INFANTRY' | 'HERO' | 'INERT' | 'DISGUISER' | 'REVEAL_TO_ALL' | 'SUPPLY_SOURCE' | 'CANNOT_BUILD_NEAR_SUPPLIES' | 'SPAWNS_ARE_THE_WEAPONS' | 'SHOW_PORTRAIT_WHEN_CONTROLLED' | 'HULK' | 'IMMUNE_TO_CAPTURE' | 'BOAT' | 'GARRISONABLE_UNTIL_DESTROYED' | 'PARACHUTE' | 'PARACHUTABLE' | 'SUPPLY_SOURCE_ON_PREVIEW' | 'CLICK_THROUGH' | 'BALLISTIC_MISSILE' | 'DRONE' | 'PRODUCED_AT_HELIPAD' | 'POWERED' | 'TECH_BUILDING' | 'AUTO_RALLYPOINT' | 'FORCEATTACKABLE' | 'LOW_OVERLAPPABLE' | 'AIRCRAFT_PATH_AROUND' | 'DEFENSIVE_WALL' | 'WALK_ON_TOP_OF_WALL' | 'ATTACK_NEEDS_LINE_OF_SIGHT' | 'ALWAYS_SELECTABLE' | 'PORTABLE_STRUCTURE' | 'CLEANUP_HAZARD' | 'MINE' | 'UNATTACKABLE' | 'ALWAYS_VISIBLE' | 'SMALL_MISSILE' | 'CLEARED_BY_BUILD' | 'CAPTURABLE' | 'CRATE' | 'MOB_NEXUS' | 'SCORE_DESTROY' | 'SCORE_CREATE' | 'SCORE' | 'REBUILD_HOLE' | 'MP_COUNT_FOR_VICTORY' | 'DRAWABLE_ONLY' | 'CASH_GENERATOR' | 'STEALTH_GARRISON' | 'HEAL_PAD' | 'REPAIR_PAD' | 'WAVE_EFFECT' | 'WAVEGUIDE' | 'NO_GARRISON' | 'NO_COLLIDE' | 'NO_HEAL_ICON' | 'NO_SELECT' | 'PRELOAD' | 'PROJECTILE' | 'BRIDGE_TOWER' | 'LANDMARK_BRIDGE' | 'BRIDGE' | 'TRANSPORT' | 'WEAPON_SALVAGER' | 'ARMOR_SALVAGER' | 'SALVAGER' | 'LINEBUILD' | 'COMMANDCENTER' | 'HARVESTER' | 'DOZER' | 'HUGE_VEHICLE' | 'AIRCRAFT' | 'VEHICLE' | 'INFANTRY' | 'STRUCTURE' | 'SHRUBBERY' | 'STICK_TO_TERRAIN_SLOPE' | 'IMMOBILE' | 'SELECTABLE' | 'OBSTACLE' | 'FS_STRATEGY_CENTER' | 'FS_SUPPLY_CENTER' | 'FS_BLACK_MARKET' | 'FS_SUPERWEAPON' | 'FS_SUPPLY_DROPZONE' | 'FS_AIRFIELD' | 'FS_WARFACTORY' | 'FS_BARRACKS' | 'FS_ADVANCED_TECH' | 'FS_TECHNOLOGY' | 'FS_BASE_DEFENSE' | 'FS_FACTORY' | 'FS_POWER' | 'FS_INTERNET_CENTER' | 'FS_FAKE' | 'CAN_BE_REPULSED' | 'CAN_RAPPEL' | 'CAN_ATTACK' | 'CAN_CAST_REFLECTIONS' | 'CAN_SEE_THROUGH_STRUCTURE');
status_value: (None_value | 'DESTROYED' | 'CAN_ATTACK' | 'UNDER_CONSTRUCTION' | 'UNSELECTABLE' | 'NO_COLLISIONS' | 'NO_ATTACK' | 'AIRBORNE_TARGET' | 'PARACHUTING' | 'REPULSOR' | 'HIJACKED' | 'AFLAME' | 'BURNED' | 'WET' | 'IS_FIRING_WEAPON' | 'IS_BRAKING' | 'STEALTHED' | 'DETECTED' | 'CAN_STEALTH' | 'SOLD' | 'UNDERGOING_REPAIR' | 'RECONSTRUCTING' | 'MASKED' | 'IS_ATTACKING' | 'USING_ABILITY' | 'IS_AIMING_WEAPON' | 'NO_ATTACK_FROM_AI' | 'IGNORING_STEALTH' | 'IS_CARBOMB' | 'DECK_HEIGHT_OFFSET' | 'STATUS_RIDER1' | 'STATUS_RIDER2' | 'STATUS_RIDER3' | 'STATUS_RIDER4' | 'STATUS_RIDER5' | 'STATUS_RIDER6' | 'STATUS_RIDER7' | 'STATUS_RIDER8' | 'FAERIE_FIRE' | 'KILLING_SELF' | 'REASSIGN_PARKING' | 'BOOBY_TRAPPED' | 'IMMOBILE' | 'DISGUISED' | 'DEPLOYED');

ocl_value: (ID | None_value);

science_property: 'Science' ((WS? EQ WS?) | WS) science_value (WS science_value)*;
science_value: (ID | None_value);

specialpower_property: 'SpecialPower' ((WS? EQ WS?) | WS) specialpower_value;
specialpower_value:  (ID | None_value);

audioevent_value: (ID | None_value);

upgrade_property: 'Upgrade' ((WS? EQ WS?) | WS) upgrade_value;
upgrade_value: (ID | None_value);

weapon_value: ID;
turret_property: TURRET ((WS? EQ WS?) | WS) (None_value | ID | TURRET | ALT_TURRET);
alt_turret_property: ALT_TURRET ((WS? EQ WS?) | WS) (None_value | ID | TURRET | ALT_TURRET);
transitionKey_value: (None_value | ID | drawModule_conditionStateValue | 'TransitionFinishBeforeSwitch');

// Special Generic Properties
weaponslot_property: 'WeaponSlot' ((WS? EQ WS?) | WS) WEAPONSLOT (WS WEAPONSLOT)*;
weapon_property: 'Weapon' ((WS? EQ WS?) | WS) WEAPONSLOT WS? weapon_value;
veterency_modifier: (All_value | ((PLUS | DASH)? VETERENCY));

// Generic
moduleTag_value: ID;

rand_value: INT (WS INT WS distribution_form)?;
coord3D: XCOORD WS YCOORD WS ZCOORD;

// Lexer Rules
autochoose_sources: (None_value | 'FROM_DOZER' | 'FROM_AI' | 'FROM_SCRIPT' | 'FROM_PLAYER' | 'DEFAULT_SWITCH_WEAPON');
object_condition_types: (None_value | 'USING_ABILITY' | 'RIDERS_ATTACKING' | 'TAKING_DAMAGE' | 'NO_BLACK_MARKET' | 'FIRING_TERTIARY' | 'FIRING_SECONDARY' | 'FIRING_PRIMARY' | 'MOVING' | 'ATTACKING');
geometry: None_value | 'POINT' | 'Point' | 'LINE' | 'Line' | BOX | 'SPHERE' | 'Sphere' | 'CYLINDER' | 'Cylinder';
shadow_value: (None_value | 'SHADOW_VOLUME' | 'SHADOW_DECAL' | 'SHADOW_PROJECTION' | 'SHADOW_DYNAMIC_PROJECTION' | 'SHADOW_DIRECTIONAL_PROJECTION' | 'SHADOW_ALPHA_DECAL' | 'SHADOW_ADDITIVE_DECAL');
condition_flags: None_value | 'RANDOMSTART' | 'START_FRAME_FIRST' | 'START_FRAME_LAST' | 'ADJUST_HEIGHT_BY_CONSTRUCTION_PERCENT' | 'PRISTINE_BONE_POS_IN_FINAL_FRAME' | 'MAINTAIN_FRAME_ACROSS_STATES' | 'MAINTAIN_FRAME_ACROSS_STATES2' | 'MAINTAIN_FRAME_ACROSS_STATES3' | 'MAINTAIN_FRAME_ACROSS_STATES4' | 'RESTART_ANIM_WHEN_COMPLETE';
ocl_createLocation: None_value | 'CREATE_AT_EDGE_FARTHEST_FROM_TARGET' | 'CREATE_AT_EDGE_FARTHEST_FROM_SOURCE' | 'CREATE_ABOVE_LOCATION' | 'USE_OWNER_OBJECT' | 'CREATE_AT_LOCATION' | 'CREATE_AT_EDGE_NEAR_TARGET' | 'CREATE_AT_EDGE_NEAR_SOURCE' | 'CREATE_OBJECT';
Constant_value: 'CONSTANT';
TimePoint: ('INITIAL' | 'MIDPOINT' | 'FINAL' | 'DELAY' | 'BURST');
FX: 'FX';
BOX: 'BOX' | 'Box';
Null_value: 'Null' | 'NULL';

// General
None_value: 'None' | 'NONE' | 'none';
All_value: 'All' | 'ALL' | 'all';
INT: DASH? [0-9]+;
FLOAT: DASH? [0-9]* '.' [0-9]+ 'f'?;
PERCENT: (INT | FLOAT) '%';
EQ: '=';
DASH: '-';
PLUS: '+';

// Weapon
WEAPONSLOT: 'PRIMARY' | 'SECONDARY' | 'TERTIARY';
TURRET: 'Turret';
ALT_TURRET: 'AltTurret';


// Veterency
VETERENCY: ('REGULAR' | 'VETERAN' | 'ELITE' | 'HEROIC');

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

distribution_form: Constant_value | 'UNIFORM' | 'GAUSSIAN' | 'TRIANGULAR' | 'LOW_BIAS' | 'HIGH_BIAS';


// General
MANUAL: 'Manual' | 'manual' | 'MANUAL';
BOOLEAN: 'Yes' | 'yes' | 'YES' | 'No' | 'no' | 'NO';
STRING: '"' ( ~[\\"\n\r] | '\\' [\\"] )* '"'  ;
ID: ([a-zA-Z_0-9][a-zA-Z_0-9%\-:]* | BOX);

NEWLINE: ([\r]?[\n]);

WS: [ \t]+;

// Skips
COMMENT: WS? (';' | '//') ~[\r\n]* -> skip; // skip comments

// Learned Things
// Explicit strings ('something') has to be above generic (like ID) and if a lexer rule (1) ueses another lexer rule (2) then (2) has to be above (1)
// If assignment equlas a lexer rule WS has to be mandetory. If it equals parserrule WS must be optional