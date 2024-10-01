grammar MapIni;

// Parser Rules
program: classes* EOF;

classes: (mappedImageClass
       | aiDataClass
       | animation2DClass
       | armorClass
       | commandButtonClass
       | commandSetClass
       | damageFXClass
       | drawGroupInfoClass
       | fxListClass
       | inGameUIClass
       | locomotorClass
//       | objectClass
//       | objectCreationListClass
//       | particleSystemClass
//       | playerTemplateClass
//       | rankClass
//       | scienceClass
//       | soundEffectClasses
//       | specialPowerClass
//       | upgradeClass
       | weaponClass
       | weatherClass) NL*
       ;

// AIData Class
aiDataClass: 'AIData' NL (aidataClassProperties_single | aidataClassProperties_blockSideinfo | aidataClassproperties_BlockSkirmishBuildList)* end;

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

aidataClassproperties_BlockSkirmishBuildList: 'SkirmishBuildList' faction_value skirmishBuildListBlock* end;

skirmishBuildListBlock: 'Structure' object_value skirmishBuildListBlock_structure_properties* end;

skirmishBuildListBlock_structure_properties: 'Location' EQ XCOORD YCOORD
                                           | 'Rebuilds' EQ INT
                                           | 'Angle' EQ FLOAT
                                           | 'InitiallyBuilt' EQ BOOLEAN
                                           | 'AutomaticallyBuild' EQ BOOLEAN
                                           ;

aidataClassProperties_blockSideinfo: 'SideInfo' ID sideinfoproperties* end;

sideinfoproperties: 'ResourceGatherersEasy' EQ INT
                  | 'ResourceGatherersNormal' EQ INT
                  | 'ResourceGatherersHard' EQ INT
                  | 'BaseDefenseStructure1' EQ object_value
                  | sideinfo_skillset_blocks
                  ;

sideinfo_skillset_blocks: ('SkillSet1' | 'SkillSet2' | 'SkillSet3' | 'SkillSet4' | 'SkillSet5') science_property* end;

// MappedImage Class
mappedImageClass: 'MappedImage' ID mappedImageClassProperties* end;

mappedImageClassProperties: 'Texture' EQ file
                          | 'TextureWidth' EQ INT
                          | 'TextureHeight' EQ INT
                          | 'Coords' EQ COORDLEFT COORDTOP COORDRIGHT COORDBOTTOM
                          | 'Status' EQ (ID | 'ROTATED_90_CLOCKWISE')
                          ;

// Animation2D Class
animation2DClass: 'Animation' ID animation2DClassProperties* end;

animation2DClassProperties: 'AnimationMode' EQ ID
                          | 'AnimationDelay' EQ INT
                          | 'RandomizeStartFrame' EQ BOOLEAN
                          | 'NumberImages' EQ INT
                          | 'Image' EQ ID
                          ;

// Armor Class
armorClass: 'Armor' ID armorClassProperties* end;

armorClassProperties: 'Armor' EQ ID PROCENT;

// CommandButton Class
commandButtonClass: 'CommandButton' ID NL (commandButtonClassProperties NL)* end;

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

// CommandSet Class
commandSetClass: 'CommandSet' ID commandSetClassProperty* end;

commandSetClassProperty: INT EQ commandbutton_value;


// DamageFX Class
damageFXClass: 'DamageFX' ID damageFXClassProperties* end;

damageFXClassProperties: dfx_throttletime_property
                       | dfx_majorfx_property
                       | dfx_minorfx_property
                       | dfx_vetmajorfx_property
                       | dfx_amountformajorfx_property
                       | dfx_vetminorfx_property
                       ;

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
fxListClass: 'FXList' ID fxlistblocks* end;

fxlistblocks: fxlist_ps_block
            | fxlist_sound_block
            | fxlist_rayeffect_block
            | fxlist_tracer_block
            | fxlist_lightpulse_block
            | fxlist_viewshake_block
            | fxlist_terrainscorch_block
            | fxlist_fxlistatbone_block
            ;

fxlist_ps_block: 'ParticleSystem' (fxlist_ps_name_property
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
                                  | fxlist_ps_creategroundheight_property)*
                 end;

fxlist_sound_block: 'Sound' fxlist_sound_property* end;

fxlist_rayeffect_block: 'RayEffect' (fxlist_name_object_propety
                      | fxlist_rayeffect_primaryoffset_property
                      | fxlist_rayeffect_secondaryoffset_proprety)*
                      end;

fxlist_tracer_block: 'Tracer' (fxlist_tracer_name_propety
                   | fxlist_tracer_bonename_property
                   | fxlist_tracer_speed_property
                   | fxlist_tracer_decayat_property
                   | fxlist_tracer_length_property
                   | fxlist_tracer_width_property
                   | fxlist_tracer_color_property
                   | fxlist_tracer_probability_property)*
                   end;

fxlist_lightpulse_block: 'LightPulse' (fxlist_lightpulse_color_property
                                      |fxlist_lightpulse_radius_property
                                      |fxlist_lightpulse_radiuspercentobjectsize_property
                                      |fxlist_lightpulse_increasetime_property
                                      |fxlist_lightpulse_decreasetime_property)*
                          end;

fxlist_viewshake_block: 'ViewShake' fxlist_viewshake_type_property* end;
fxlist_terrainscorch_block: 'TerrainScorch' (fxlist_scorch_type_property | fxlist_scorch_radius_property)* end;
fxlist_fxlistatbone_block: 'FXListAtBonePos' (fxlist_atbonepos_fx_property | fxlist_atbonepos_bonename_property | fxlist_atbonepos_orienttoobject_property)* end;

// IngameUI Class
inGameUIClass: 'InGameUI' (igui_properties
                        | igui_blocks)*
                        end;

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
           | 'AmbulanceRadiusCursor') ingui_block_properties* end
           ;

ingui_block_properties: 'Texture' EQ ID
                      | 'Style' EQ ID
                      | 'OpacityMin' EQ PROCENT
                      | 'OpacityMax' EQ PROCENT
                      | 'OpacityThrobTime' EQ INT
                      | 'Color' EQ R G B A
                      | 'OnlyVisibleToOwningPlayer' EQ BOOLEAN
                      ;


// Locomotor Class
locomotorClass: 'Locomotor' ID locomotor_properties* end;

locomotor_properties: locomotor_surface_property
                    | locomotor_zbehavior_property
                    | locomotor_appereance_property
                    | locomotor_movepriority_property
                    | 'Speed' EQ (INT | FLOAT)
                    | 'MinSpeed' EQ (INT | FLOAT)
                    | 'SpeedDamaged' EQ (INT | FLOAT)
                    | 'TurnRate' EQ (INT | FLOAT)
                    | 'TurnRateDamaged' EQ (INT | FLOAT)
                    | 'Acceleration' EQ (INT | FLOAT)
                    | 'AccelerationDamaged' EQ (INT | FLOAT)
                    | 'MaxThrustAngle' EQ INT
                    | 'Braking' EQ INT
                    | 'MinTurnSpeed' EQ INT
                    | 'StickToGround' EQ BOOLEAN
                    | 'WanderWidthFactor' EQ (INT | FLOAT)
                    | 'WanderLengthFactor' EQ (INT | FLOAT)
                    | 'WanderAboutPointRadius' EQ (INT | FLOAT)
                    | 'TurnPivotOffset' EQ (INT | FLOAT)
                    | 'AccelerationPitchLimit' EQ (INT | FLOAT)
                    | 'DecelerationPitchLimit' EQ (INT | FLOAT)
                    | 'BounceAmount' EQ INT
                    | 'PitchStiffness' EQ (INT | FLOAT)
                    | 'RollStiffness' EQ (INT | FLOAT)
                    | 'PitchDamping' EQ (INT | FLOAT)
                    | 'RollDamping' EQ (INT | FLOAT)
                    | 'ForwardAccelerationPitchFactor' EQ (INT | FLOAT)
                    | 'LateralAccelerationRollFactor' EQ (INT | FLOAT)
                    | 'ForwardVelocityPitchFactor' EQ (INT | FLOAT)
                    | 'LateralVelocityRollFactor' EQ (INT | FLOAT)
                    | 'Apply2DFrictionWhenAirborne' EQ BOOLEAN
                    | 'AirborneTargetingHeight' EQ INT
                    | 'LocomotorWorksWhenDead' EQ BOOLEAN
                    | 'HasSuspension' EQ BOOLEAN
                    | 'CanMoveBackwards' EQ BOOLEAN
                    | 'MaximumWheelExtension' EQ (INT | FLOAT)
                    | 'MaximumWheelCompression' EQ (INT | FLOAT)
                    | 'FrontWheelTurnAngle' EQ INT
                    | 'AllowAirborneMotiveForce' EQ BOOLEAN
                    | 'PreferredHeight' EQ (INT | FLOAT)
                    | 'PreferredHeightDamping' EQ (INT | FLOAT)
                    | 'ThrustRoll' EQ (INT | FLOAT)
                    | 'ThrustWobbleRate' EQ (INT | FLOAT)
                    | 'ThrustMinWobble' EQ (INT | FLOAT)
                    | 'ThrustMaxWobble' EQ (INT | FLOAT)
                    | 'CloseEnoughDist3D' EQ BOOLEAN
                    | 'Lift' EQ INT
                    | 'LiftDamaged' EQ INT
                    | 'UniformAxialDamping' EQ (INT | FLOAT)
                    | 'CloseEnoughDist' EQ (INT | FLOAT)
                    | 'CirclingRadius' EQ INT
                    | 'PitchInDirectionOfZVelFactor' EQ (INT | FLOAT)
                    | 'SlideIntoPlaceTime' EQ INT
                    | 'SpeedLimitZ' EQ INT
                    | 'Extra2DFriction' EQ INT
                    | 'DownhillOnly' EQ BOOLEAN
                    | 'RudderCorrectionDegree' EQ (INT | FLOAT)
                    | 'RudderCorrectionRate' EQ (INT | FLOAT)
                    | 'ElevatorCorrectionDegree' EQ (INT | FLOAT)
                    | 'ElevatorCorrectionRate' EQ (INT | FLOAT)
                    ;

locomotor_surface_property: 'Surfaces' EQ surface_value+;
locomotor_zbehavior_property: 'ZAxisBehavior' EQ zbehavior_value;
locomotor_appereance_property: 'Appearance' EQ appereance_value;
locomotor_movepriority_property: 'GroupMovementPriority' EQ movepriority_value;

surface_value: ID;
zbehavior_value: ID;
appereance_value: ID;
movepriority_value: ID;

// Weapon Class
weaponClass: 'Weapon' ID weapon_properties* end;

weapon_properties: weapon_damagetype_property
                 | weapon_deathtype_property
                 | weapon_damageaffects_property
                 | weapon_weaponbonus_property
                 | weapon_lasterbone_property
                 | 'PrimaryDamage' EQ (INT | FLOAT)
                 | 'PrimaryDamageRadius' EQ  (INT | FLOAT)
                 | 'SecondaryDamage' EQ  (INT | FLOAT)
                 | 'SecondaryDamageRadius' EQ  (INT | FLOAT)
                 | 'AttackRange' EQ  (INT | FLOAT)
                 | 'ScatterRadius' EQ (INT | FLOAT)
                 | 'AcceptableAimDelta' EQ INT
                 | 'AntiSmallMissile' EQ BOOLEAN
                 | 'AntiProjectile' EQ BOOLEAN
                 | 'WeaponSpeed' EQ (INT | FLOAT)
                 | 'MinimumAttackRange' EQ (INT | FLOAT)
                 | 'ProjectileExhaust' EQ particlesystem_value
                 | 'VeterancyProjectileExhaust' EQ VETERENCY particlesystem_value
                 | 'ProjectileObject' EQ object_value
                 | 'DamageDealtAtSelfPosition' EQ BOOLEAN
                 | 'DelayBetweenShots' EQ (INT | FLOAT)
                 | 'ClipSize' EQ INT
                 | 'ClipReloadTime' EQ (INT | FLOAT)
                 | 'AutoReloadsClip' EQ BOOLEAN
                 | 'FireFX' EQ fxlist_value
                 | 'VeterancyFireFX' EQ VETERENCY fxlist_value
                 | 'ProjectileDetonationFX' EQ fxlist_value
                 | 'FireSound' EQ audioevent_value
                 | 'ScatterRadiusVsInfantry' EQ (INT | FLOAT)
                 | 'MinTargetPitch' EQ INT
                 | 'MaxTargetPitch' EQ INT
                 | 'WeaponRecoil' EQ (INT | FLOAT)
                 | 'ProjectileCollidesWith' EQ ID+
                 | 'ShotsPerBarrel' EQ INT
                 | 'AntiAirborneVehicle' EQ BOOLEAN
                 | 'AntiAirborneInfantry' EQ BOOLEAN
                 | 'AntiGround' EQ BOOLEAN
                 | 'LaserName' EQ ID
                 ;

weapon_damagetype_property: 'DamageType' EQ damageType_value;
weapon_deathtype_property: 'DeathType' EQ deathType_value;
weapon_damageaffects_property: 'RadiusDamageAffects' EQ damageAffects_value+;
weapon_weaponbonus_property: 'WeaponBonus' EQ weapon_weaponbonus_condition_value weapon_weaponbonus_bonus_value PROCENT;
weapon_lasterbone_property: 'LaserBoneName' EQ damageType_value;

weapon_weaponbonus_condition_value: ID;
weapon_weaponbonus_bonus_value: ID;
damageType_value: ID;
deathType_value: ID;
damageAffects_value: ID;

// Weather Class
weatherClass: 'Weather' weather_properties* end;

weather_properties: 'SnowEnabled' EQ BOOLEAN
                  | 'SnowTexture' EQ file
                  | 'SnowBoxDimensions' EQ INT
                  | 'SnowBoxDensity' EQ (INT | FLOAT)
                  | 'SnowFrequencyScaleX' EQ (INT | FLOAT)
                  | 'SnowFrequencyScaleY' EQ (INT | FLOAT)
                  | 'SnowAmplitude' EQ (INT | FLOAT)
                  | 'SnowVelocity' EQ (INT | FLOAT)
                  | 'SnowPointSize' EQ (INT | FLOAT)
                  | 'SnowMaxPointSize' EQ (INT | FLOAT)
                  | 'SnowMinPointSize' EQ (INT | FLOAT)
                  | 'SnowPointSprites' EQ BOOLEAN
                  | 'SnowQuadSize' EQ (INT | FLOAT)
                  ;


end: 'end' | 'End' | 'END';

file: ID '.' ('tga' | 'dds');


// MappedImage


// Animation2D


// Armor Class


// CommandButton Class
cb_command_property: 'Command' EQ cb_command_value;
cb_command_value: ID;

cb_options_property: 'Options' EQ cb_options_value+;
cb_options_value: ID;

cb_buttonimage_property: 'ButtonImage' EQ mappedimage_value;

cb_buttonbordertype_property: 'ButtonBorderType' EQ cb_buttonbordertype_value;
cb_buttonbordertype_value: ID;

cb_textlabel_property: 'TextLabel' EQ ID;
cb_descriptionlabel_property: 'DescriptLabel' EQ ID;
cb_conflictinglabel_property: 'ConflictingLabel' EQ ID;

cb_cursorname_propery: 'CursorName' EQ cursorname_value;
cb_radius_cursorname_value: 'RadiusCursorType' EQ radius_cursorname_value;
cb_invalid_cursorname_propery: 'InvalidCursorName' EQ invalid_cursorname_value;

cb_unitspecificsound_property: 'UnitSpecificSound' EQ audioevent_value;

cb_maxshotsfire_property: 'MaxShotsToFire' EQ INT;

// CommandSet Class


// DamageFX Class
dfx_throttletime_property: 'ThrottleTime' EQ damageType_value INT;
dfx_amountformajorfx_property: 'AmountForMajorFX' EQ damageType_value FLOAT;
dfx_majorfx_property: 'MajorFX' EQ damageType_value ID;
dfx_minorfx_property: 'MinorFX' EQ damageType_value ID;
dfx_vetmajorfx_property: 'VeterancyMajorFX' EQ VETERENCY damageType_value ID;
dfx_vetminorfx_property: 'VeterancyMinorFX' EQ VETERENCY damageType_value ID;


// DrawGroupInfo Class
dgi_useplayercolor_property: 'UsePlayerColor' EQ BOOLEAN;
dgi_colorfortext_property: 'ColorForText' EQ R G B A;
dgi_colordropshadow_property: 'ColorForTextDropShadow' EQ R G B A;
dgi_dropshadowoffsetX_property: 'DropShadowOffsetX' EQ INT;
dgi_dropshadowoffsetY_property: 'DropShadowOffsetY' EQ INT;
dgi_fontname_property: 'FontName' EQ ID+;
dgi_fontsize_property: 'FontSize' EQ INT;
dgi_fontisbold_property: 'FontIsBold' EQ BOOLEAN;
dgi_drawposXperc_property: 'DrawPositionXPercent' EQ PROCENT;
dgi_drawposYperc_property: 'DrawPositionYPixel' EQ INT;


// FXList Class

    // ParticleSystem
fxlist_ps_name_property: 'Name' EQ particlesystem_value;
fxlist_ps_count_property: 'Count' EQ (INT | rand_value);
fxlist_ps_offset_property: 'Offset' EQ coord3D;
fxlist_ps_radius_property: 'Radius' EQ ((INT | FLOAT) | rand_value);
fxlist_ps_height_property: 'Height' EQ ((INT | FLOAT) | rand_value);
fxlist_ps_initialDelay_property: 'InitialDelay' EQ rand_value;
fxlist_ps_rotateX_property: 'RotateX' EQ INT;
fxlist_ps_rotatey_property: 'RotateY' EQ INT;
fxlist_ps_rotateZ_property: 'RotateZ' EQ INT;
fxlist_ps_orienttoobject_property: 'OrientToObject' EQ BOOLEAN;
fxlist_ps_ricochet_property: 'Ricochet' EQ BOOLEAN;
fxlist_ps_usecallerradius_property: 'UseCallersRadius' EQ BOOLEAN;
fxlist_ps_attachtoobject_property: 'AttachToObject' EQ BOOLEAN;
fxlist_ps_creategroundheight_property: 'CreateAtGroundHeight' EQ BOOLEAN;


    // Sound
fxlist_sound_property: 'Name' EQ audioevent_value;

    // RayEffect
fxlist_rayeffect_primaryoffset_property: 'PrimaryOffset' EQ coord3D;
fxlist_rayeffect_secondaryoffset_proprety: 'SecondaryOffset' EQ coord3D;

    // Tracer
fxlist_tracer_name_propety: 'TracerName' EQ object_value;
fxlist_tracer_bonename_property: 'BoneName' EQ ID;
fxlist_tracer_speed_property: 'Speed' EQ (INT | FLOAT);
fxlist_tracer_decayat_property: 'DecayAt' EQ (INT | FLOAT);
fxlist_tracer_length_property: 'Length' EQ (INT | FLOAT);
fxlist_tracer_width_property: 'Width' EQ (INT | FLOAT);
fxlist_tracer_color_property: 'Color' EQ R G B;
fxlist_tracer_probability_property: 'Probability' EQ (INT | FLOAT);

    // LightPulse
fxlist_lightpulse_color_property: 'Color' EQ R G B;
fxlist_lightpulse_radius_property: 'Radius' EQ (INT | FLOAT);
fxlist_lightpulse_radiuspercentobjectsize_property: 'RadiusAsPercentOfObjectSize' EQ PROCENT;
fxlist_lightpulse_increasetime_property: 'IncreaseTime' EQ INT;
fxlist_lightpulse_decreasetime_property: 'DecreaseTime' EQ INT;

    // ViewShake
fxlist_viewshake_type_property: 'Type' EQ ID;

    // Terrain Scorch
fxlist_scorch_type_property: 'Type' EQ ID;
fxlist_scorch_radius_property: 'Radius' EQ (INT | FLOAT);

fxlist_atbonepos_fx_property: 'FX' EQ fxlist_value;
fxlist_atbonepos_bonename_property: 'BoneName' EQ ID;
fxlist_atbonepos_orienttoobject_property: 'OrientToBone' EQ BOOLEAN;

fxlist_name_object_propety: 'Name' EQ object_value;


// IngameUi Class

igui_properties: 'MaxSelectionSize' EQ INT
                | 'MessageColor1' EQ R G B
                | 'MessageColor2' EQ R G B
                | 'MessagePosition' EQ XCOORD YCOORD
                | 'MessageFont' EQ ID
                | 'MessagePointSize' EQ INT
                | 'MessageBold' EQ BOOLEAN
                | 'MessageDelayMS' EQ INT
                | 'MilitaryCaptionColor' EQ R G B A
                | 'MilitaryCaptionPosition' EQ XCOORD YCOORD
                | 'MilitaryCaptionTitleFont' EQ ID+
                | 'MilitaryCaptionTitlePointSize' EQ INT
                | 'MilitaryCaptionTitleBold' EQ BOOLEAN
                | 'MilitaryCaptionFont' EQ ID+
                | 'MilitaryCaptionPointSize' EQ INT
                | 'MilitaryCaptionBold' EQ BOOLEAN
                | 'MilitaryCaptionRandomizeTyping' EQ BOOLEAN
                | 'SuperweaponCountdownPosition' EQ XCOORD YCOORD
                | 'SuperweaponCountdownFlashDuration' EQ INT
                | 'SuperweaponCountdownFlashColor' EQ R G B
                | 'SuperweaponCountdownNormalFont' EQ ID
                | 'SuperweaponCountdownNormalPointSize' EQ INT
                | 'SuperweaponCountdownNormalBold' EQ BOOLEAN
                | 'SuperweaponCountdownReadyFont' EQ ID
                | 'SuperweaponCountdownReadyPointSize' EQ INT
                | 'SuperweaponCountdownReadyBold' EQ BOOLEAN
                | 'NamedTimerCountdownPosition' EQ XCOORD YCOORD
                | 'NamedTimerCountdownFlashDuration' EQ INT
                | 'NamedTimerCountdownFlashColor' EQ R G B
                | 'NamedTimerCountdownNormalFont' EQ ID
                | 'NamedTimerCountdownNormalPointSize' EQ INT
                | 'NamedTimerCountdownNormalBold' EQ BOOLEAN
                | 'NamedTimerCountdownNormalColor' EQ R G B
                | 'NamedTimerCountdownReadyFont' EQ ID
                | 'NamedTimerCountdownReadyPointSize' EQ INT
                | 'NamedTimerCountdownReadyBold' EQ BOOLEAN
                | 'NamedTimerCountdownReadyColor' EQ R G B
                | 'FloatingTextTimeOut' EQ INT
                | 'FloatingTextMoveUpSpeed' EQ INT
                | 'FloatingTextVanishRate' EQ INT
                | 'DrawRMBScrollAnchor' EQ BOOLEAN
                | 'MoveRMBScrollAnchor' EQ BOOLEAN
                | 'PopupMessageColor' EQ R G B A
                ;

// Locomotor Class


// Properties that take Classes as a value:
faction_value: ID;

commandbutton_value: ID;

cursorname_value: ID;
radius_cursorname_value: ID;
invalid_cursorname_value: ID;

mappedimage_value: ID;

particlesystem_value: ID;

fxlist_value: ID;

object_property: 'Object' EQ object_value;
object_value: ID;

science_property: 'Science' EQ science_value+;
science_value: ID;

specialpower_property: 'SpecialPower' EQ specialpower_value;
specialpower_value:  ID;

audioevent_value: ID;

upgrade_property: 'Upgrade' EQ upgrade_value;
upgrade_value: ID;


// Special Generic Properties
weaponslot_property: 'WeaponSlot' EQ WEAPONSLOT+;


// Generic
rand_value: INT INT DISTRIBUTION_FORM;
coord3D: XCOORD YCOORD ZCOORD;

// Lexer Rules

// General
INT: '-'? [0-9]+;
FLOAT: '-'? [0-9]* '.' [0-9]+;
PROCENT: (INT | FLOAT) '%';
EQ: '=';

// Weapon
WEAPONSLOT: 'PRIMARY' | 'SECONDARY' | 'TERTIARY';

// Veterency
VETERENCY: 'VETERAN' | 'ELITE' | 'HEROIC';

// AIData Class
XCOORD: 'X:'(INT | FLOAT);
YCOORD: 'Y:'(INT | FLOAT);
ZCOORD: 'Z:'(INT | FLOAT);

// MappedImage Class
COORDLEFT: 'Left:'INT;
COORDTOP: 'Top:'INT;
COORDRIGHT: 'Right:'INT;
COORDBOTTOM: 'Bottom:'INT;

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

NL: [\n];

// Skips
SKIp: [ \t\r]+ -> skip; // skip whitespaces
COMMENT: (';' | '//') ~[\r\n]* -> skip; // skip comments
WS: [ \t]+;

// Learned Things
// Explicit strings ('something') has to be above generic (like ID) and if a lexer rule (1) ueses another lexer rule (2) then (2) has to be above (1)