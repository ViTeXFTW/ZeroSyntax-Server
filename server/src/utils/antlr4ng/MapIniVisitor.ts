// Generated from ./server/src/utils/antlr4ng/MapIni.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { ProgramContext } from "./MapIniParser.js";
import { ClassesContext } from "./MapIniParser.js";
import { AiDataClassContext } from "./MapIniParser.js";
import { AiDataClass_propertiesContext } from "./MapIniParser.js";
import { AiDataClass_structurePropertyContext } from "./MapIniParser.js";
import { AiDataClass_teamPropertyContext } from "./MapIniParser.js";
import { AiDataClass_wealthPropertyContext } from "./MapIniParser.js";
import { AiDataClass_poorPropertyContext } from "./MapIniParser.js";
import { AiDataClass_structureWealthyPropertyContext } from "./MapIniParser.js";
import { AiDataClass_structurePoorPropertyContext } from "./MapIniParser.js";
import { AiDataClass_teamWealthPropertyContext } from "./MapIniParser.js";
import { AiDataClass_teamPoorPropertyContext } from "./MapIniParser.js";
import { AiDataClass_teamResourcesPropertyContext } from "./MapIniParser.js";
import { AiDataClass_guardInnerAIPropertyContext } from "./MapIniParser.js";
import { AiDataClass_guardOuterAIPropertyContext } from "./MapIniParser.js";
import { AiDataClass_guardInnerHumanPropertyContext } from "./MapIniParser.js";
import { AiDataClass_guardOuterHumanPropertyContext } from "./MapIniParser.js";
import { AiDataClass_guardChaseUnitsPropertyContext } from "./MapIniParser.js";
import { AiDataClass_guardEnemyScanPropertyContext } from "./MapIniParser.js";
import { AiDataClass_guardEnemyReturnScanPropertyContext } from "./MapIniParser.js";
import { AiDataClass_alertRangeModifierPropertyContext } from "./MapIniParser.js";
import { AiDataClass_aggressiveRangeModifierPropertyContext } from "./MapIniParser.js";
import { AiDataClass_attackProrityDistanceModifierPropertyContext } from "./MapIniParser.js";
import { AiDataClass_maxRecruitRadiusPropertyContext } from "./MapIniParser.js";
import { AiDataClass_skirmishBaseDefenseExtraDistancePropertyContext } from "./MapIniParser.js";
import { AiDataClass_forceIdleMSECPropertyContext } from "./MapIniParser.js";
import { AiDataClass_forceSkirmishAIPropertyContext } from "./MapIniParser.js";
import { AiDataClass_rotateSkirmishBasePropertyContext } from "./MapIniParser.js";
import { AiDataClass_attackUsesLineOfSightPropertyContext } from "./MapIniParser.js";
import { AiDataClass_enableRepulsorPropertyContext } from "./MapIniParser.js";
import { AiDataClass_repulsedDistancePropertyContext } from "./MapIniParser.js";
import { AiDataClass_wallHeighPropertyContext } from "./MapIniParser.js";
import { AiDataClass_attackIgnoreInsignificantBuildingsPropertyContext } from "./MapIniParser.js";
import { AiDataClass_skirmishGroupFudgeDistancePropertyContext } from "./MapIniParser.js";
import { AiDataClass_minInfantryGroupPropertyContext } from "./MapIniParser.js";
import { AiDataClass_minVehicleGroupPropertyContext } from "./MapIniParser.js";
import { AiDataClass_minDistanceGroupPropertyContext } from "./MapIniParser.js";
import { AiDataClass_distanceRequiresGroupPropertyContext } from "./MapIniParser.js";
import { AiDataClass_infantryPathfindDiameterPropertyContext } from "./MapIniParser.js";
import { AiDataClass_vehiclePathfindDiameterPropertyContext } from "./MapIniParser.js";
import { AiDataClass_supplycenterSaveDistancePropertyContext } from "./MapIniParser.js";
import { AiDataClass_rebuildDelayTimeSecPropertyContext } from "./MapIniParser.js";
import { AiDataClass_aiDozerBoredRadiusPropertyContext } from "./MapIniParser.js";
import { AiDataClass_aiCrushesInfantryPropertyContext } from "./MapIniParser.js";
import { AiDataClass_maxRetaliationDistancePropertyContext } from "./MapIniParser.js";
import { AiDataClass_retailationFriendsRadiusPropertyContext } from "./MapIniParser.js";
import { AiDataClass_sideInfoContext } from "./MapIniParser.js";
import { AiDataClass_sideInfoPropertiesContext } from "./MapIniParser.js";
import { AiDataClass_sideInfo_resourceGatheresEasyContext } from "./MapIniParser.js";
import { AiDataClass_sideInfo_resourceGatheresMediumContext } from "./MapIniParser.js";
import { AiDataClass_sideInfo_resourceGatheresHardContext } from "./MapIniParser.js";
import { AiDataClass_sideInfo_baseDefenseStructureContext } from "./MapIniParser.js";
import { AiDataClass_sideInfo_skillSetContext } from "./MapIniParser.js";
import { AiDataClass_skirmishBuildListContext } from "./MapIniParser.js";
import { AiDataClass_skirmishBuildList_structureContext } from "./MapIniParser.js";
import { AiDataClass_skirmishBuildList_structure_propertiesContext } from "./MapIniParser.js";
import { AiDataClass_skirmishBuildList_structure_locationPropertyContext } from "./MapIniParser.js";
import { AiDataClass_skirmishBuildList_structure_rebuildsPropertyContext } from "./MapIniParser.js";
import { AiDataClass_skirmishBuildList_structure_anglePropertyContext } from "./MapIniParser.js";
import { AiDataClass_skirmishBuildList_structure_initiallyBuildPropertyContext } from "./MapIniParser.js";
import { AiDataClass_skirmishBuildList_structure_automaticallyBuildPropertyContext } from "./MapIniParser.js";
import { MappedImageClassContext } from "./MapIniParser.js";
import { MappedImageClassPropertiesContext } from "./MapIniParser.js";
import { MappedImageClass_texturePropertyContext } from "./MapIniParser.js";
import { MappedImageClass_textureWidthPropertyContext } from "./MapIniParser.js";
import { MappedImageClass_textureHeightPropertyContext } from "./MapIniParser.js";
import { MappedImageClass_coordsPropertyContext } from "./MapIniParser.js";
import { MappedImageClass_statusPropertyContext } from "./MapIniParser.js";
import { Animation2DClassContext } from "./MapIniParser.js";
import { Animation2DClassPropertiesContext } from "./MapIniParser.js";
import { Animation2DClass_animationModePropertyContext } from "./MapIniParser.js";
import { Animation2DClass_animationdelayPropertyContext } from "./MapIniParser.js";
import { Animation2DClass_randomizeStartFramePropertyContext } from "./MapIniParser.js";
import { Animation2DClass_numberImagesPropertyContext } from "./MapIniParser.js";
import { Animation2DClass_imagePropertyContext } from "./MapIniParser.js";
import { ArmorClassContext } from "./MapIniParser.js";
import { ArmorClassPropertiesContext } from "./MapIniParser.js";
import { ArmorClass_armorPropertyContext } from "./MapIniParser.js";
import { CommandButtonClassContext } from "./MapIniParser.js";
import { CommandButtonClassPropertiesContext } from "./MapIniParser.js";
import { Cb_command_propertyContext } from "./MapIniParser.js";
import { Cb_options_propertyContext } from "./MapIniParser.js";
import { Cb_options_valueContext } from "./MapIniParser.js";
import { Cb_buttonimage_propertyContext } from "./MapIniParser.js";
import { Cb_buttonbordertype_propertyContext } from "./MapIniParser.js";
import { Cb_textlabel_propertyContext } from "./MapIniParser.js";
import { Cb_descriptionlabel_propertyContext } from "./MapIniParser.js";
import { Cb_conflictinglabel_propertyContext } from "./MapIniParser.js";
import { Cb_cursorname_properyContext } from "./MapIniParser.js";
import { Cb_radius_cursorname_valueContext } from "./MapIniParser.js";
import { Cb_invalid_cursorname_properyContext } from "./MapIniParser.js";
import { Cb_unitspecificsound_propertyContext } from "./MapIniParser.js";
import { Cb_maxshotsfire_propertyContext } from "./MapIniParser.js";
import { Cb_purchasedlabel_propertyContext } from "./MapIniParser.js";
import { CommandSetClassContext } from "./MapIniParser.js";
import { CommandSetClassPropertyContext } from "./MapIniParser.js";
import { DamageFXClassContext } from "./MapIniParser.js";
import { DamageFXClassPropertiesContext } from "./MapIniParser.js";
import { Dfx_throttletime_propertyContext } from "./MapIniParser.js";
import { Dfx_amountformajorfx_propertyContext } from "./MapIniParser.js";
import { Dfx_majorfx_propertyContext } from "./MapIniParser.js";
import { Dfx_minorfx_propertyContext } from "./MapIniParser.js";
import { Dfx_vetmajorfx_propertyContext } from "./MapIniParser.js";
import { Dfx_vetminorfx_propertyContext } from "./MapIniParser.js";
import { DrawGroupInfoClassContext } from "./MapIniParser.js";
import { DrawgroupinfoPropertiesContext } from "./MapIniParser.js";
import { FxListClassContext } from "./MapIniParser.js";
import { FxlistblocksContext } from "./MapIniParser.js";
import { Fxlist_ps_blockContext } from "./MapIniParser.js";
import { Fxlist_ps_name_propertyContext } from "./MapIniParser.js";
import { Fxlist_ps_count_propertyContext } from "./MapIniParser.js";
import { Fxlist_ps_offset_propertyContext } from "./MapIniParser.js";
import { Fxlist_ps_radius_propertyContext } from "./MapIniParser.js";
import { Fxlist_ps_height_propertyContext } from "./MapIniParser.js";
import { Fxlist_ps_initialDelay_propertyContext } from "./MapIniParser.js";
import { Fxlist_ps_rotateX_propertyContext } from "./MapIniParser.js";
import { Fxlist_ps_rotatey_propertyContext } from "./MapIniParser.js";
import { Fxlist_ps_rotateZ_propertyContext } from "./MapIniParser.js";
import { Fxlist_ps_orienttoobject_propertyContext } from "./MapIniParser.js";
import { Fxlist_ps_ricochet_propertyContext } from "./MapIniParser.js";
import { Fxlist_ps_usecallerradius_propertyContext } from "./MapIniParser.js";
import { Fxlist_ps_attachtoobject_propertyContext } from "./MapIniParser.js";
import { Fxlist_ps_creategroundheight_propertyContext } from "./MapIniParser.js";
import { Fxlist_sound_blockContext } from "./MapIniParser.js";
import { Fxlist_sound_propertyContext } from "./MapIniParser.js";
import { Fxlist_rayeffect_blockContext } from "./MapIniParser.js";
import { Fxlist_rayeffect_primaryoffset_propertyContext } from "./MapIniParser.js";
import { Fxlist_rayeffect_secondaryoffset_propretyContext } from "./MapIniParser.js";
import { Fxlist_rayeffect_object_propetyContext } from "./MapIniParser.js";
import { Fxlist_tracer_blockContext } from "./MapIniParser.js";
import { Fxlist_tracer_name_propetyContext } from "./MapIniParser.js";
import { Fxlist_tracer_bonename_propertyContext } from "./MapIniParser.js";
import { Fxlist_tracer_speed_propertyContext } from "./MapIniParser.js";
import { Fxlist_tracer_decayat_propertyContext } from "./MapIniParser.js";
import { Fxlist_tracer_length_propertyContext } from "./MapIniParser.js";
import { Fxlist_tracer_width_propertyContext } from "./MapIniParser.js";
import { Fxlist_tracer_color_propertyContext } from "./MapIniParser.js";
import { Fxlist_tracer_probability_propertyContext } from "./MapIniParser.js";
import { Fxlist_lightpulse_blockContext } from "./MapIniParser.js";
import { Fxlist_lightpulse_color_propertyContext } from "./MapIniParser.js";
import { Fxlist_lightpulse_radius_propertyContext } from "./MapIniParser.js";
import { Fxlist_lightpulse_radiuspercentobjectsize_propertyContext } from "./MapIniParser.js";
import { Fxlist_lightpulse_increasetime_propertyContext } from "./MapIniParser.js";
import { Fxlist_lightpulse_decreasetime_propertyContext } from "./MapIniParser.js";
import { Fxlist_viewshake_blockContext } from "./MapIniParser.js";
import { Fxlist_viewshake_type_propertyContext } from "./MapIniParser.js";
import { Fxlist_viewshake_type_valueContext } from "./MapIniParser.js";
import { Fxlist_terrainscorch_blockContext } from "./MapIniParser.js";
import { Fxlist_scorch_type_propertyContext } from "./MapIniParser.js";
import { Fxlist_scorch_radius_propertyContext } from "./MapIniParser.js";
import { Fxlist_fxlistatbone_blockContext } from "./MapIniParser.js";
import { Fxlist_atbonepos_fx_propertyContext } from "./MapIniParser.js";
import { Fxlist_atbonepos_bonename_propertyContext } from "./MapIniParser.js";
import { Fxlist_atbonepos_orienttoobject_propertyContext } from "./MapIniParser.js";
import { InGameUIClassContext } from "./MapIniParser.js";
import { Igui_propertiesContext } from "./MapIniParser.js";
import { Igui_blocksContext } from "./MapIniParser.js";
import { Ingui_block_propertiesContext } from "./MapIniParser.js";
import { LocomotorClassContext } from "./MapIniParser.js";
import { Locomotor_propertiesContext } from "./MapIniParser.js";
import { Locomotor_surface_propertyContext } from "./MapIniParser.js";
import { Locomotor_zbehavior_propertyContext } from "./MapIniParser.js";
import { Locomotor_appereance_propertyContext } from "./MapIniParser.js";
import { Locomotor_movepriority_propertyContext } from "./MapIniParser.js";
import { Surface_valueContext } from "./MapIniParser.js";
import { Zbehavior_valueContext } from "./MapIniParser.js";
import { Appereance_valueContext } from "./MapIniParser.js";
import { Movepriority_valueContext } from "./MapIniParser.js";
import { ObjectReskinClassContext } from "./MapIniParser.js";
import { ObjectClassContext } from "./MapIniParser.js";
import { ObjectClass_propertiesContext } from "./MapIniParser.js";
import { ObjectClass_soundsContext } from "./MapIniParser.js";
import { ObjectClass_setsContext } from "./MapIniParser.js";
import { ObjectClass_weaponSetBlockContext } from "./MapIniParser.js";
import { ObjectClass_weaponSetPropertiesContext } from "./MapIniParser.js";
import { ObjectClass_armorSetBlockContext } from "./MapIniParser.js";
import { ObjectClass_armorSetPropertiesContext } from "./MapIniParser.js";
import { ObjectClass_setConditionsContext } from "./MapIniParser.js";
import { ObjectClass_prerequisiteSetBlockContext } from "./MapIniParser.js";
import { ObjectClass_prerequisiteSetPropertiesContext } from "./MapIniParser.js";
import { ObjectClass_unitSpecificSoundsBlockContext } from "./MapIniParser.js";
import { ObjectClass_unitSpecificFXBlockContext } from "./MapIniParser.js";
import { ObjectClass_unitSpecificFXPropertiesContext } from "./MapIniParser.js";
import { ObjectClass_removeModuleContext } from "./MapIniParser.js";
import { ObjectClass_addModuleContext } from "./MapIniParser.js";
import { ObjectClass_replaceModuleContext } from "./MapIniParser.js";
import { ObjectClass_modulesContext } from "./MapIniParser.js";
import { ObjectClass_drawModulesContext } from "./MapIniParser.js";
import { W3dDebrisDrawModuleContext } from "./MapIniParser.js";
import { W3dDefaultDrawModuleContext } from "./MapIniParser.js";
import { W3dModelDrawModuleContext } from "./MapIniParser.js";
import { W3dModelDrawPropertiesContext } from "./MapIniParser.js";
import { W3dLaserDrawModuleContext } from "./MapIniParser.js";
import { W3dLaserDrawPropertiesContext } from "./MapIniParser.js";
import { W3dDependencyDrawModuleContext } from "./MapIniParser.js";
import { W3dDependencyDrawPropertiesContext } from "./MapIniParser.js";
import { W3dVehicleDrawModuleContext } from "./MapIniParser.js";
import { W3dVehicleDrawPropertiesContext } from "./MapIniParser.js";
import { W3dOverlordTankDrawModuleContext } from "./MapIniParser.js";
import { W3dOverlordTankDrawPropertiesContext } from "./MapIniParser.js";
import { W3dProjectileStreamDrawModuleContext } from "./MapIniParser.js";
import { W3dProjectileStreamDrawPropertiesContext } from "./MapIniParser.js";
import { W3dScienceModelDrawModuleContext } from "./MapIniParser.js";
import { W3dScienceModelDrawPropertiesContext } from "./MapIniParser.js";
import { W3dSupplyDrawModuleContext } from "./MapIniParser.js";
import { W3dSupplyDrawPropertiesContext } from "./MapIniParser.js";
import { W3dTreeDrawModuleContext } from "./MapIniParser.js";
import { W3dTreeDrawPropertiesContext } from "./MapIniParser.js";
import { DrawModule_conditionBlockContext } from "./MapIniParser.js";
import { DrawModule_defaultconditionBlockContext } from "./MapIniParser.js";
import { DrawModule_transitionStateBlockContext } from "./MapIniParser.js";
import { DrawModule_conditionStateValueContext } from "./MapIniParser.js";
import { DrawModule_conditionStatePropertiesContext } from "./MapIniParser.js";
import { DrawModule_transitionKeyPropertyContext } from "./MapIniParser.js";
import { ObjectClass_bodyModulesContext } from "./MapIniParser.js";
import { BodyModule_valueContext } from "./MapIniParser.js";
import { BodyModule_propertiesContext } from "./MapIniParser.js";
import { BodyModule_highlanderContext } from "./MapIniParser.js";
import { BodyModule_highlander_propertiesContext } from "./MapIniParser.js";
import { ObjectClass_behaviorModulesContext } from "./MapIniParser.js";
import { BehaviorModule_valueContext } from "./MapIniParser.js";
import { BehaviorModule_animationSteeringUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_animationSteeringUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_armorUpgradeUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_armorUpgradeUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_assistedTargetingUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_assistedTargetingUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_autoDepositUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_autoDepositUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_autoFindHealingUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_autoFindHealingUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_autoHealBehaviorContext } from "./MapIniParser.js";
import { BehaviorModule_autoHealBehavior_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_baikonourLaunchPowerContext } from "./MapIniParser.js";
import { BehaviorModule_baikonourLaunchPower_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_baseRegenerateUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_battleBusSlowDeathBehaviorContext } from "./MapIniParser.js";
import { BehaviorModule_battleBusSlowDeathBehavior_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_battlePlanUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_battlePlanUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_boneFXDamageContext } from "./MapIniParser.js";
import { BehaviorModule_boneFXUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_boneFXUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_fXListContext } from "./MapIniParser.js";
import { BehaviorModule_oclContext } from "./MapIniParser.js";
import { BehaviorModule_particleSystemContext } from "./MapIniParser.js";
import { BehaviorModule_bridgeBehaviorContext } from "./MapIniParser.js";
import { BehaviorModule_bridgeBehavior_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_bridgeScaffoldBehaviorContext } from "./MapIniParser.js";
import { BehaviorModule_bridgeScaffoldBehavior_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_bridgeTowerBehaviorContext } from "./MapIniParser.js";
import { BehaviorModule_bridgeTowerBehavior_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_bunkerBusterBehaviorContext } from "./MapIniParser.js";
import { BehaviorModule_bunkerBusterBehavior_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_cashBountyPowerContext } from "./MapIniParser.js";
import { BehaviorModule_cashBountyPower_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_cashHackSpecialPowerContext } from "./MapIniParser.js";
import { BehaviorModule_cashHackSpecialPower_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_checkpointUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_checkpointUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_cleanupAreaPowerContext } from "./MapIniParser.js";
import { BehaviorModule_cleanupAreaPower_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_cleanupHazardUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_cleanupHazardUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_commandButtonHuntUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_commandButtonHuntUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_commandSetUpgradeContext } from "./MapIniParser.js";
import { BehaviorModule_commandSetUpgrade_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_convertToCarBombCrateCollideContext } from "./MapIniParser.js";
import { BehaviorModule_convertToCarBombCrateCollide_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_costModifierUpgradeContext } from "./MapIniParser.js";
import { BehaviorModule_costModifierUpgrade_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_countermeasuresBehaviorContext } from "./MapIniParser.js";
import { BehaviorModule_countermeasuresBehavior_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_createCrateDieContext } from "./MapIniParser.js";
import { BehaviorModule_createCrateDie_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_createObjectDieContext } from "./MapIniParser.js";
import { BehaviorModule_createObjectDie_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_convertToHijackedVehicleCrateCollideContext } from "./MapIniParser.js";
import { BehaviorModule_convertToHijackedVehicleCrateCollide_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_crushDieContext } from "./MapIniParser.js";
import { BehaviorModule_crushDie_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_damDieContext } from "./MapIniParser.js";
import { BehaviorModule_damDie_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_defaultProductionExitUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_defaultProductionExitUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_deletionUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_deletionUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_demoTrapUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_demoTrapUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_destroyDieContext } from "./MapIniParser.js";
import { BehaviorModule_destroyDie_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_dumbProjectileBehaviorContext } from "./MapIniParser.js";
import { BehaviorModule_dumbProjectileBehavior_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_dynamicShroudClearingRangeUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_dynamicShroudClearingRangeUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_dynamicShroudClearingRangeUpdate_decalContext } from "./MapIniParser.js";
import { BehaviorModule_dynamicShroudClearingRangeUpdate_decal_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_empUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_empUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_ejectPilotDieContext } from "./MapIniParser.js";
import { BehaviorModule_ejectPilotDie_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_enemyNearUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_enemyNearUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_experienceScalarUpgradeContext } from "./MapIniParser.js";
import { BehaviorModule_experienceScalarUpgrade_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_fxListDieContext } from "./MapIniParser.js";
import { BehaviorModule_fxListDie_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_fireOCLAfterWeaponCooldownUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_fireOCLAfterWeaponCooldownUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_fireSpreadUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_fireSpreadUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_fireWeaponCollideContext } from "./MapIniParser.js";
import { BehaviorModule_fireWeaponCollide_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_fireWeaponPowerContext } from "./MapIniParser.js";
import { BehaviorModule_fireWeaponPower_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_fireWeaponUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_fireWeaponUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_fireWeaponWhenDamagedBehaviorContext } from "./MapIniParser.js";
import { BehaviorModule_fireWeaponWhenDamagedBehavior_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_fireWeaponWhenDeadBehaviorContext } from "./MapIniParser.js";
import { BehaviorModule_fireWeaponWhenDeadBehavior_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_firestormDynamicGeometryInfoUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_firestormDynamicGeometryInfoUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_flammableUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_flammableUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_flightDeckBehaviorContext } from "./MapIniParser.js";
import { BehaviorModule_flightDeckBehavior_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_floatUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_floatUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_garrisonContainContext } from "./MapIniParser.js";
import { BehaviorModule_garrisonContain_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_generateMinefieldBehaviorContext } from "./MapIniParser.js";
import { BehaviorModule_generateMinefieldBehavior_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_grantScienceUpgradeContext } from "./MapIniParser.js";
import { BehaviorModule_grantScienceUpgrade_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_grantStealthBehaviorContext } from "./MapIniParser.js";
import { BehaviorModule_grantStealthBehavior_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_grantUpgradeCreateContext } from "./MapIniParser.js";
import { BehaviorModule_grantUpgradeCreate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_healContainContext } from "./MapIniParser.js";
import { BehaviorModule_healContain_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_heightDieUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_heightDieUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_helicopterSlowDeathBehaviorContext } from "./MapIniParser.js";
import { BehaviorModule_helicopterSlowDeathBehavior_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_helixContainContext } from "./MapIniParser.js";
import { BehaviorModule_helixContain_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_hijackerUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_hijackerUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_hordeUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_hordeUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_instantDeathBehaviorContext } from "./MapIniParser.js";
import { BehaviorModule_instantDeathBehavior_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_internetHackContainContext } from "./MapIniParser.js";
import { BehaviorModule_internetHackContain_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_jetSlowDeathBehaviorContext } from "./MapIniParser.js";
import { BehaviorModule_jetSlowDeathBehavior_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_keepObjectDieContext } from "./MapIniParser.js";
import { BehaviorModule_keepObjectDie_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_leafletDropBehaviorContext } from "./MapIniParser.js";
import { BehaviorModule_leafletDropBehavior_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_lifetimeUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_lifetimeUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_lockWeaponCreateContext } from "./MapIniParser.js";
import { BehaviorModule_lockWeaponCreate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_locomotorSetUpgradeContext } from "./MapIniParser.js";
import { BehaviorModule_locomotorSetUpgrade_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_maxHealthUpgradeContext } from "./MapIniParser.js";
import { BehaviorModule_maxHealthUpgrade_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_minefieldBehaviorContext } from "./MapIniParser.js";
import { BehaviorModule_minefieldBehavior_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_missileLauncherBuildingUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_missileLauncherBuildingUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_mobMemberSlavedUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_mobMemberSlavedUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_modelConditionUpgradeContext } from "./MapIniParser.js";
import { BehaviorModule_modelConditionUpgrade_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_moneyCrateCollideContext } from "./MapIniParser.js";
import { BehaviorModule_moneyCrateCollide_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_neutronBlastBehaviorContext } from "./MapIniParser.js";
import { BehaviorModule_neutronBlastBehavior_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_neutronMissileSlowDeathBehaviorContext } from "./MapIniParser.js";
import { BehaviorModule_neutronMissileSlowDeathBehavior_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_neutronMissileUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_neutronMissileUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_neutronMissileUpdate_properties_decalContext } from "./MapIniParser.js";
import { BehaviorModule_neutronMissileUpdate_properties_decal_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_oclSpecialPowerContext } from "./MapIniParser.js";
import { BehaviorModule_oclSpecialPower_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_oclUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_oclUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_objectCreationUpgradeContext } from "./MapIniParser.js";
import { BehaviorModule_objectCreationUpgrade_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_overchargeBehaviorContext } from "./MapIniParser.js";
import { BehaviorModule_overchargeBehavior_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_overlordContainContext } from "./MapIniParser.js";
import { BehaviorModule_overlordContain_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_parachuteContainContext } from "./MapIniParser.js";
import { BehaviorModule_parachuteContain_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_parkingPlaceBehaviorContext } from "./MapIniParser.js";
import { BehaviorModule_parkingPlaceBehavior_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_particleUplinkCannonUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_particleUplinkCannonUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_passengersFireUpgradeContext } from "./MapIniParser.js";
import { BehaviorModule_passengersFireUpgrade_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_physicsBehaviorContext } from "./MapIniParser.js";
import { BehaviorModule_physicsBehavior_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_pilotFindVehicleUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_pilotFindVehicleUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_pointDefenseLaserUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_pointDefenseLaserUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_poisonedBehaviorContext } from "./MapIniParser.js";
import { BehaviorModule_poisonedBehavior_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_powerPlantUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_powerPlantUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_powerPlantUpgradeContext } from "./MapIniParser.js";
import { BehaviorModule_powerPlantUpgrade_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_preorderCreateContext } from "./MapIniParser.js";
import { BehaviorModule_projectileStreamUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_propagandaTowerBehaviorContext } from "./MapIniParser.js";
import { BehaviorModule_propagandaTowerBehavior_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_productionUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_productionUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_queueProductionExitUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_queueProductionExitUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_radarUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_radarUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_radarUpgradeContext } from "./MapIniParser.js";
import { BehaviorModule_radarUpgrade_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_radiusDecalUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_railedTransportContainContext } from "./MapIniParser.js";
import { BehaviorModule_railedTransportContain_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_railedTransportDockUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_railedTransportDockUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_railroadBehaviorContext } from "./MapIniParser.js";
import { BehaviorModule_railroadBehavior_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_rebuildHoleBehaviorContext } from "./MapIniParser.js";
import { BehaviorModule_rebuildHoleBehavior_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_rebuildHoleExposeDieContext } from "./MapIniParser.js";
import { BehaviorModule_rebuildHoleExposeDie_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_repairDockUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_repairDockUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_replaceObjectUpgradeContext } from "./MapIniParser.js";
import { BehaviorModule_replaceObjectUpgrade_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_riderChangeContainContext } from "./MapIniParser.js";
import { BehaviorModule_riderChangeContain_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_sabotageCommandCenterCrateCollideContext } from "./MapIniParser.js";
import { BehaviorModule_sabotageCommandCenterCrateCollide_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_sabotageFakeBuildingCrateCollideContext } from "./MapIniParser.js";
import { BehaviorModule_sabotageFakeBuildingCrateCollide_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_sabotageInternetCenterCrateCollideContext } from "./MapIniParser.js";
import { BehaviorModule_sabotageInternetCenterCrateCollide_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_sabotageMilitaryFactoryCrateCollideContext } from "./MapIniParser.js";
import { BehaviorModule_sabotageMilitaryFactoryCrateCollide_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_sabotagePowerPlantCrateCollideContext } from "./MapIniParser.js";
import { BehaviorModule_sabotagePowerPlantCrateCollide_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_sabotageSuperweaponCrateCollideContext } from "./MapIniParser.js";
import { BehaviorModule_sabotageSuperweaponCrateCollide_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_sabotageSupplyCenterCrateCollideContext } from "./MapIniParser.js";
import { BehaviorModule_sabotageSupplyCenterCrateCollide_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_salvageCrateCollideContext } from "./MapIniParser.js";
import { BehaviorModule_salvageCrateCollide_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_slavedUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_slavedUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_slowDeathBehaviorContext } from "./MapIniParser.js";
import { BehaviorModule_slowDeathBehavior_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_smartBombTargetHomingUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_smartBombTargetHomingUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_spawnBehaviorContext } from "./MapIniParser.js";
import { BehaviorModule_spawnBehavior_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_spawnPointProductionExitUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_spawnPointProductionExitUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_specialAbilityContext } from "./MapIniParser.js";
import { BehaviorModule_specialAbility_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_specialAbilityUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_specialAbilityUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_specialPowerCompletionDieContext } from "./MapIniParser.js";
import { BehaviorModule_specialPowerCompletionDie_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_specialPowerCreateContext } from "./MapIniParser.js";
import { BehaviorModule_spectreGunshipDeploymentUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_spectreGunshipDeploymentUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_spectreGunshipUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_spectreGunshipUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_spectreGunshipUpdate_attackareadecalContext } from "./MapIniParser.js";
import { BehaviorModule_spectreGunshipUpdate_attackareadecal_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_spectreGunshipUpdate_targetingreticleDecalContext } from "./MapIniParser.js";
import { BehaviorModule_spectreGunshipUpdate_targetingreticleDecal_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_spyVisionSpecialPowerContext } from "./MapIniParser.js";
import { BehaviorModule_spyVisionSpecialPower_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_spyVisionUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_spyVisionUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_squishCollideContext } from "./MapIniParser.js";
import { BehaviorModule_statusBitUpgradeContext } from "./MapIniParser.js";
import { BehaviorModule_statusBitUpgrade_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_stealthDetectorUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_stealthDetectorUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_stealthUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_stealthUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_stealthUpgradeContext } from "./MapIniParser.js";
import { BehaviorModule_stealthUpgrade_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_stickyBombUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_stickyBombUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_structureCollapseUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_structureCollapseUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_structureToppleUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_structureToppleUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_subObjectsUpgradeContext } from "./MapIniParser.js";
import { BehaviorModule_subObjectsUpgrade_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_supplyCenterCreateContext } from "./MapIniParser.js";
import { BehaviorModule_supplyCenterDockUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_supplyCenterDockUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_supplyCenterProductionExitUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_supplyCenterProductionExitUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_supplyWarehouseCreateContext } from "./MapIniParser.js";
import { BehaviorModule_supplyWarehouseCripplingBehaviorContext } from "./MapIniParser.js";
import { BehaviorModule_supplyWarehouseCripplingBehavior_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_supplyWarehouseDockUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_supplyWarehouseDockUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_techBuildingBehaviorContext } from "./MapIniParser.js";
import { BehaviorModule_techBuildingBehavior_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_tensileFormationUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_tensileFormationUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_toppleUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_toppleUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_transitionDamageFXContext } from "./MapIniParser.js";
import { BehaviorModule_transitionDamageFX_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_transportContainContext } from "./MapIniParser.js";
import { BehaviorModule_transportContain_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_tunnelContainContext } from "./MapIniParser.js";
import { BehaviorModule_tunnelContain_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_unitCrateCollideContext } from "./MapIniParser.js";
import { BehaviorModule_unitCrateCollide_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_unpauseSpecialPowerUpgradeContext } from "./MapIniParser.js";
import { BehaviorModule_unpauseSpecialPowerUpgrade_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_upgradeDieContext } from "./MapIniParser.js";
import { BehaviorModule_upgradeDie_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_veterancyCrateCollideContext } from "./MapIniParser.js";
import { BehaviorModule_veterancyCrateCollide_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_veterancyGainCreateContext } from "./MapIniParser.js";
import { BehaviorModule_veterancyGainCreate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_waveGuideUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_waveGuideUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_weaponBonusUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_weaponBonusUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_weaponBonusUpgradeContext } from "./MapIniParser.js";
import { BehaviorModule_weaponBonusUpgrade_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_weaponSetUpgradeContext } from "./MapIniParser.js";
import { BehaviorModule_weaponSetUpgrade_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_turretBlockContext } from "./MapIniParser.js";
import { BehaviorModule_turretBlock_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_aiUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_aiUpdateInterfaceContext } from "./MapIniParser.js";
import { BehaviorModule_aiUpdateInterface_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_assultTroopAIUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_assultTroopAIUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_chinookAIUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_chinookAIUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_deliverPayloadAIUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_deliverPayloadAIUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_deployableAIUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_deployableAIUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_dozerAIUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_dozerAIUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_hackInternetAIUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_hackInternetAIUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_jetAIUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_jetAIUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_missileAIUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_missileAIUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_railedTransportAIUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_railedTransportAIUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_supplyTruckAIUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_supplyTruckAIUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_transportAIUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_transportAIUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_wanderAIUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_wanderAIUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_workerAIUpdateContext } from "./MapIniParser.js";
import { BehaviorModule_workerAIUpdate_propertiesContext } from "./MapIniParser.js";
import { BehaviorModule_deathTypesContext } from "./MapIniParser.js";
import { BehaviorModule_allowInsideKindOfContext } from "./MapIniParser.js";
import { BehaviorModule_forbidInsideKindOfContext } from "./MapIniParser.js";
import { BehaviorModule_fxlistNValueContext } from "./MapIniParser.js";
import { BehaviorModule_particleSystemNValueContext } from "./MapIniParser.js";
import { ObjectClass_clientModulesContext } from "./MapIniParser.js";
import { ClientUpdate_modulesContext } from "./MapIniParser.js";
import { ClientModule_animatedSysBoneClientUpdateContext } from "./MapIniParser.js";
import { ClientModule_animatedSysBoneClientUpdate_propertiesContext } from "./MapIniParser.js";
import { ClientModule_beaconUpdateContext } from "./MapIniParser.js";
import { ClientModule_beaconUpdate_propertiesContext } from "./MapIniParser.js";
import { ClientModule_laserUpdateContext } from "./MapIniParser.js";
import { ClientModule_laserUpdate_propertiesContext } from "./MapIniParser.js";
import { ClientModule_swayClientUpdateContext } from "./MapIniParser.js";
import { ClientModule_swayClientUpdate_propertiesContext } from "./MapIniParser.js";
import { RankClassContext } from "./MapIniParser.js";
import { Rank_propertiesContext } from "./MapIniParser.js";
import { ScienceClassContext } from "./MapIniParser.js";
import { Science_propertiesContext } from "./MapIniParser.js";
import { SpecialPowerClassContext } from "./MapIniParser.js";
import { SpecialPower_propertiesContext } from "./MapIniParser.js";
import { SoundEffectClassesContext } from "./MapIniParser.js";
import { AudioEventClassContext } from "./MapIniParser.js";
import { DialogEventClassContext } from "./MapIniParser.js";
import { Audioevent_propertiesContext } from "./MapIniParser.js";
import { ObjectCreationListClassContext } from "./MapIniParser.js";
import { ObjectCreationListClass_blocksContext } from "./MapIniParser.js";
import { ObjectCreationListClass_createDebrisBlockContext } from "./MapIniParser.js";
import { ObjectCreationListClass_createDebrisPropertiesContext } from "./MapIniParser.js";
import { Disposition_valueContext } from "./MapIniParser.js";
import { ObjectCreationListClass_createObjectBlockContext } from "./MapIniParser.js";
import { ObjectCreationListClass_createObjectPropertiesContext } from "./MapIniParser.js";
import { ObjectCreationListClass_applyRandomForceBlockContext } from "./MapIniParser.js";
import { ObjectCreationListClass_applyRandomForcePropertiesContext } from "./MapIniParser.js";
import { ObjectCreationListClass_attackBlockContext } from "./MapIniParser.js";
import { ObjectCreationListClass_attackPropertiesContext } from "./MapIniParser.js";
import { ObjectCreationListClass_fireWeaponBlockContext } from "./MapIniParser.js";
import { ObjectCreationListClass_fireWeaponPropertiesContext } from "./MapIniParser.js";
import { ObjectCreationListClass_deliveryPayloadBlockContext } from "./MapIniParser.js";
import { ObjectCreationListClass_deliveryPayloadPropertiesContext } from "./MapIniParser.js";
import { ObjectCreationListClass_deliveryDecalContext } from "./MapIniParser.js";
import { ParticleSystemClassContext } from "./MapIniParser.js";
import { ParticleSystemClass_propertiesContext } from "./MapIniParser.js";
import { ParticleSystemClass_priorityValueContext } from "./MapIniParser.js";
import { ParticleSystemClass_shaderValueContext } from "./MapIniParser.js";
import { ParticleSystemClass_typeValueContext } from "./MapIniParser.js";
import { ParticleSystemClass_velocityTypeValueContext } from "./MapIniParser.js";
import { ParticleSystemClass_volumeTypeValueContext } from "./MapIniParser.js";
import { ParticleSystemClass_windTypeValueContext } from "./MapIniParser.js";
import { PlayerTemplateClassContext } from "./MapIniParser.js";
import { PlayerTemplateClass_propertiesContext } from "./MapIniParser.js";
import { UpgradeClassContext } from "./MapIniParser.js";
import { Upgrade_propertiesContext } from "./MapIniParser.js";
import { Academyclassifier_valueContext } from "./MapIniParser.js";
import { WeaponClassContext } from "./MapIniParser.js";
import { Weapon_propertiesContext } from "./MapIniParser.js";
import { Weapon_damagetype_propertyContext } from "./MapIniParser.js";
import { Weapon_deathtype_propertyContext } from "./MapIniParser.js";
import { Weapon_damageaffects_propertyContext } from "./MapIniParser.js";
import { Weapon_weaponbonus_propertyContext } from "./MapIniParser.js";
import { Weapon_lasterbone_propertyContext } from "./MapIniParser.js";
import { Weapon_weaponbonus_condition_valueContext } from "./MapIniParser.js";
import { Weapon_weaponbonus_bonus_valueContext } from "./MapIniParser.js";
import { DeathType_valueContext } from "./MapIniParser.js";
import { DamageAffects_valueContext } from "./MapIniParser.js";
import { ProjectileColide_valueContext } from "./MapIniParser.js";
import { DamageType_valueContext } from "./MapIniParser.js";
import { ArmorType_valueContext } from "./MapIniParser.js";
import { WeatherClassContext } from "./MapIniParser.js";
import { Weather_propertiesContext } from "./MapIniParser.js";
import { EndContext } from "./MapIniParser.js";
import { FileContext } from "./MapIniParser.js";
import { Dgi_useplayercolor_propertyContext } from "./MapIniParser.js";
import { Dgi_colorfortext_propertyContext } from "./MapIniParser.js";
import { Dgi_colordropshadow_propertyContext } from "./MapIniParser.js";
import { Dgi_dropshadowoffsetX_propertyContext } from "./MapIniParser.js";
import { Dgi_dropshadowoffsetY_propertyContext } from "./MapIniParser.js";
import { Dgi_fontname_propertyContext } from "./MapIniParser.js";
import { Dgi_fontsize_propertyContext } from "./MapIniParser.js";
import { Dgi_fontisbold_propertyContext } from "./MapIniParser.js";
import { Dgi_drawposXperc_propertyContext } from "./MapIniParser.js";
import { Dgi_drawposYperc_propertyContext } from "./MapIniParser.js";
import { Faction_valueContext } from "./MapIniParser.js";
import { FactionEx_valueContext } from "./MapIniParser.js";
import { Armor_valueContext } from "./MapIniParser.js";
import { Animation2d_valueContext } from "./MapIniParser.js";
import { Crate_valueContext } from "./MapIniParser.js";
import { Commandbutton_valueContext } from "./MapIniParser.js";
import { CommandSet_valueContext } from "./MapIniParser.js";
import { DamageFX_valueContext } from "./MapIniParser.js";
import { Cursorname_valueContext } from "./MapIniParser.js";
import { Radius_cursorname_valueContext } from "./MapIniParser.js";
import { Invalid_cursorname_valueContext } from "./MapIniParser.js";
import { Mappedimage_valueContext } from "./MapIniParser.js";
import { Particlesystem_valueContext } from "./MapIniParser.js";
import { Fxlist_valueContext } from "./MapIniParser.js";
import { Locomotor_valueContext } from "./MapIniParser.js";
import { Locomotor_typeContext } from "./MapIniParser.js";
import { Object_propertyContext } from "./MapIniParser.js";
import { Object_valueContext } from "./MapIniParser.js";
import { Kindof_valueContext } from "./MapIniParser.js";
import { Status_valueContext } from "./MapIniParser.js";
import { Ocl_valueContext } from "./MapIniParser.js";
import { Science_propertyContext } from "./MapIniParser.js";
import { Science_valueContext } from "./MapIniParser.js";
import { Specialpower_propertyContext } from "./MapIniParser.js";
import { Specialpower_valueContext } from "./MapIniParser.js";
import { Audioevent_valueContext } from "./MapIniParser.js";
import { Upgrade_propertyContext } from "./MapIniParser.js";
import { Upgrade_valueContext } from "./MapIniParser.js";
import { Weapon_valueContext } from "./MapIniParser.js";
import { Turret_propertyContext } from "./MapIniParser.js";
import { Alt_turret_propertyContext } from "./MapIniParser.js";
import { TransitionKey_valueContext } from "./MapIniParser.js";
import { Weaponslot_propertyContext } from "./MapIniParser.js";
import { Weapon_propertyContext } from "./MapIniParser.js";
import { Veterency_modifierContext } from "./MapIniParser.js";
import { ModuleTag_valueContext } from "./MapIniParser.js";
import { Rand_valueContext } from "./MapIniParser.js";
import { Coord3DContext } from "./MapIniParser.js";
import { Autochoose_sourcesContext } from "./MapIniParser.js";
import { Object_condition_typesContext } from "./MapIniParser.js";
import { GeometryContext } from "./MapIniParser.js";
import { Shadow_valueContext } from "./MapIniParser.js";
import { Condition_flagsContext } from "./MapIniParser.js";
import { Ocl_createLocationContext } from "./MapIniParser.js";
import { Distribution_formContext } from "./MapIniParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `MapIniParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class MapIniVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `MapIniParser.program`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProgram?: (ctx: ProgramContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.classes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClasses?: (ctx: ClassesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass?: (ctx: AiDataClassContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_properties?: (ctx: AiDataClass_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_structureProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_structureProperty?: (ctx: AiDataClass_structurePropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_teamProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_teamProperty?: (ctx: AiDataClass_teamPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_wealthProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_wealthProperty?: (ctx: AiDataClass_wealthPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_poorProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_poorProperty?: (ctx: AiDataClass_poorPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_structureWealthyProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_structureWealthyProperty?: (ctx: AiDataClass_structureWealthyPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_structurePoorProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_structurePoorProperty?: (ctx: AiDataClass_structurePoorPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_teamWealthProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_teamWealthProperty?: (ctx: AiDataClass_teamWealthPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_teamPoorProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_teamPoorProperty?: (ctx: AiDataClass_teamPoorPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_teamResourcesProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_teamResourcesProperty?: (ctx: AiDataClass_teamResourcesPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_guardInnerAIProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_guardInnerAIProperty?: (ctx: AiDataClass_guardInnerAIPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_guardOuterAIProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_guardOuterAIProperty?: (ctx: AiDataClass_guardOuterAIPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_guardInnerHumanProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_guardInnerHumanProperty?: (ctx: AiDataClass_guardInnerHumanPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_guardOuterHumanProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_guardOuterHumanProperty?: (ctx: AiDataClass_guardOuterHumanPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_guardChaseUnitsProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_guardChaseUnitsProperty?: (ctx: AiDataClass_guardChaseUnitsPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_guardEnemyScanProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_guardEnemyScanProperty?: (ctx: AiDataClass_guardEnemyScanPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_guardEnemyReturnScanProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_guardEnemyReturnScanProperty?: (ctx: AiDataClass_guardEnemyReturnScanPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_alertRangeModifierProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_alertRangeModifierProperty?: (ctx: AiDataClass_alertRangeModifierPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_aggressiveRangeModifierProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_aggressiveRangeModifierProperty?: (ctx: AiDataClass_aggressiveRangeModifierPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_attackProrityDistanceModifierProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_attackProrityDistanceModifierProperty?: (ctx: AiDataClass_attackProrityDistanceModifierPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_maxRecruitRadiusProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_maxRecruitRadiusProperty?: (ctx: AiDataClass_maxRecruitRadiusPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_skirmishBaseDefenseExtraDistanceProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_skirmishBaseDefenseExtraDistanceProperty?: (ctx: AiDataClass_skirmishBaseDefenseExtraDistancePropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_forceIdleMSECProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_forceIdleMSECProperty?: (ctx: AiDataClass_forceIdleMSECPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_forceSkirmishAIProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_forceSkirmishAIProperty?: (ctx: AiDataClass_forceSkirmishAIPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_rotateSkirmishBaseProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_rotateSkirmishBaseProperty?: (ctx: AiDataClass_rotateSkirmishBasePropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_attackUsesLineOfSightProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_attackUsesLineOfSightProperty?: (ctx: AiDataClass_attackUsesLineOfSightPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_enableRepulsorProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_enableRepulsorProperty?: (ctx: AiDataClass_enableRepulsorPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_repulsedDistanceProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_repulsedDistanceProperty?: (ctx: AiDataClass_repulsedDistancePropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_wallHeighProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_wallHeighProperty?: (ctx: AiDataClass_wallHeighPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_attackIgnoreInsignificantBuildingsProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_attackIgnoreInsignificantBuildingsProperty?: (ctx: AiDataClass_attackIgnoreInsignificantBuildingsPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_skirmishGroupFudgeDistanceProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_skirmishGroupFudgeDistanceProperty?: (ctx: AiDataClass_skirmishGroupFudgeDistancePropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_minInfantryGroupProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_minInfantryGroupProperty?: (ctx: AiDataClass_minInfantryGroupPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_minVehicleGroupProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_minVehicleGroupProperty?: (ctx: AiDataClass_minVehicleGroupPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_minDistanceGroupProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_minDistanceGroupProperty?: (ctx: AiDataClass_minDistanceGroupPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_distanceRequiresGroupProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_distanceRequiresGroupProperty?: (ctx: AiDataClass_distanceRequiresGroupPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_infantryPathfindDiameterProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_infantryPathfindDiameterProperty?: (ctx: AiDataClass_infantryPathfindDiameterPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_vehiclePathfindDiameterProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_vehiclePathfindDiameterProperty?: (ctx: AiDataClass_vehiclePathfindDiameterPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_supplycenterSaveDistanceProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_supplycenterSaveDistanceProperty?: (ctx: AiDataClass_supplycenterSaveDistancePropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_rebuildDelayTimeSecProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_rebuildDelayTimeSecProperty?: (ctx: AiDataClass_rebuildDelayTimeSecPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_aiDozerBoredRadiusProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_aiDozerBoredRadiusProperty?: (ctx: AiDataClass_aiDozerBoredRadiusPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_aiCrushesInfantryProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_aiCrushesInfantryProperty?: (ctx: AiDataClass_aiCrushesInfantryPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_maxRetaliationDistanceProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_maxRetaliationDistanceProperty?: (ctx: AiDataClass_maxRetaliationDistancePropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_retailationFriendsRadiusProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_retailationFriendsRadiusProperty?: (ctx: AiDataClass_retailationFriendsRadiusPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_sideInfo`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_sideInfo?: (ctx: AiDataClass_sideInfoContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_sideInfoProperties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_sideInfoProperties?: (ctx: AiDataClass_sideInfoPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_sideInfo_resourceGatheresEasy`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_sideInfo_resourceGatheresEasy?: (ctx: AiDataClass_sideInfo_resourceGatheresEasyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_sideInfo_resourceGatheresMedium`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_sideInfo_resourceGatheresMedium?: (ctx: AiDataClass_sideInfo_resourceGatheresMediumContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_sideInfo_resourceGatheresHard`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_sideInfo_resourceGatheresHard?: (ctx: AiDataClass_sideInfo_resourceGatheresHardContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_sideInfo_baseDefenseStructure`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_sideInfo_baseDefenseStructure?: (ctx: AiDataClass_sideInfo_baseDefenseStructureContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_sideInfo_skillSet`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_sideInfo_skillSet?: (ctx: AiDataClass_sideInfo_skillSetContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_skirmishBuildList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_skirmishBuildList?: (ctx: AiDataClass_skirmishBuildListContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_skirmishBuildList_structure`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_skirmishBuildList_structure?: (ctx: AiDataClass_skirmishBuildList_structureContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_skirmishBuildList_structure_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_skirmishBuildList_structure_properties?: (ctx: AiDataClass_skirmishBuildList_structure_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_skirmishBuildList_structure_locationProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_skirmishBuildList_structure_locationProperty?: (ctx: AiDataClass_skirmishBuildList_structure_locationPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_skirmishBuildList_structure_rebuildsProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_skirmishBuildList_structure_rebuildsProperty?: (ctx: AiDataClass_skirmishBuildList_structure_rebuildsPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_skirmishBuildList_structure_angleProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_skirmishBuildList_structure_angleProperty?: (ctx: AiDataClass_skirmishBuildList_structure_anglePropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_skirmishBuildList_structure_initiallyBuildProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_skirmishBuildList_structure_initiallyBuildProperty?: (ctx: AiDataClass_skirmishBuildList_structure_initiallyBuildPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aiDataClass_skirmishBuildList_structure_automaticallyBuildProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAiDataClass_skirmishBuildList_structure_automaticallyBuildProperty?: (ctx: AiDataClass_skirmishBuildList_structure_automaticallyBuildPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.mappedImageClass`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMappedImageClass?: (ctx: MappedImageClassContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.mappedImageClassProperties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMappedImageClassProperties?: (ctx: MappedImageClassPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.mappedImageClass_textureProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMappedImageClass_textureProperty?: (ctx: MappedImageClass_texturePropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.mappedImageClass_textureWidthProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMappedImageClass_textureWidthProperty?: (ctx: MappedImageClass_textureWidthPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.mappedImageClass_textureHeightProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMappedImageClass_textureHeightProperty?: (ctx: MappedImageClass_textureHeightPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.mappedImageClass_coordsProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMappedImageClass_coordsProperty?: (ctx: MappedImageClass_coordsPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.mappedImageClass_statusProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMappedImageClass_statusProperty?: (ctx: MappedImageClass_statusPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.animation2DClass`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnimation2DClass?: (ctx: Animation2DClassContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.animation2DClassProperties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnimation2DClassProperties?: (ctx: Animation2DClassPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.animation2DClass_animationModeProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnimation2DClass_animationModeProperty?: (ctx: Animation2DClass_animationModePropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.animation2DClass_animationdelayProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnimation2DClass_animationdelayProperty?: (ctx: Animation2DClass_animationdelayPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.animation2DClass_randomizeStartFrameProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnimation2DClass_randomizeStartFrameProperty?: (ctx: Animation2DClass_randomizeStartFramePropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.animation2DClass_numberImagesProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnimation2DClass_numberImagesProperty?: (ctx: Animation2DClass_numberImagesPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.animation2DClass_imageProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnimation2DClass_imageProperty?: (ctx: Animation2DClass_imagePropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.armorClass`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArmorClass?: (ctx: ArmorClassContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.armorClassProperties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArmorClassProperties?: (ctx: ArmorClassPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.armorClass_armorProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArmorClass_armorProperty?: (ctx: ArmorClass_armorPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.commandButtonClass`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommandButtonClass?: (ctx: CommandButtonClassContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.commandButtonClassProperties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommandButtonClassProperties?: (ctx: CommandButtonClassPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.cb_command_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCb_command_property?: (ctx: Cb_command_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.cb_options_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCb_options_property?: (ctx: Cb_options_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.cb_options_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCb_options_value?: (ctx: Cb_options_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.cb_buttonimage_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCb_buttonimage_property?: (ctx: Cb_buttonimage_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.cb_buttonbordertype_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCb_buttonbordertype_property?: (ctx: Cb_buttonbordertype_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.cb_textlabel_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCb_textlabel_property?: (ctx: Cb_textlabel_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.cb_descriptionlabel_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCb_descriptionlabel_property?: (ctx: Cb_descriptionlabel_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.cb_conflictinglabel_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCb_conflictinglabel_property?: (ctx: Cb_conflictinglabel_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.cb_cursorname_propery`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCb_cursorname_propery?: (ctx: Cb_cursorname_properyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.cb_radius_cursorname_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCb_radius_cursorname_value?: (ctx: Cb_radius_cursorname_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.cb_invalid_cursorname_propery`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCb_invalid_cursorname_propery?: (ctx: Cb_invalid_cursorname_properyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.cb_unitspecificsound_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCb_unitspecificsound_property?: (ctx: Cb_unitspecificsound_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.cb_maxshotsfire_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCb_maxshotsfire_property?: (ctx: Cb_maxshotsfire_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.cb_purchasedlabel_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCb_purchasedlabel_property?: (ctx: Cb_purchasedlabel_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.commandSetClass`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommandSetClass?: (ctx: CommandSetClassContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.commandSetClassProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommandSetClassProperty?: (ctx: CommandSetClassPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.damageFXClass`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDamageFXClass?: (ctx: DamageFXClassContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.damageFXClassProperties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDamageFXClassProperties?: (ctx: DamageFXClassPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.dfx_throttletime_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDfx_throttletime_property?: (ctx: Dfx_throttletime_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.dfx_amountformajorfx_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDfx_amountformajorfx_property?: (ctx: Dfx_amountformajorfx_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.dfx_majorfx_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDfx_majorfx_property?: (ctx: Dfx_majorfx_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.dfx_minorfx_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDfx_minorfx_property?: (ctx: Dfx_minorfx_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.dfx_vetmajorfx_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDfx_vetmajorfx_property?: (ctx: Dfx_vetmajorfx_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.dfx_vetminorfx_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDfx_vetminorfx_property?: (ctx: Dfx_vetminorfx_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.drawGroupInfoClass`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrawGroupInfoClass?: (ctx: DrawGroupInfoClassContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.drawgroupinfoProperties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrawgroupinfoProperties?: (ctx: DrawgroupinfoPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxListClass`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxListClass?: (ctx: FxListClassContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlistblocks`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlistblocks?: (ctx: FxlistblocksContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_ps_block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_ps_block?: (ctx: Fxlist_ps_blockContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_ps_name_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_ps_name_property?: (ctx: Fxlist_ps_name_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_ps_count_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_ps_count_property?: (ctx: Fxlist_ps_count_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_ps_offset_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_ps_offset_property?: (ctx: Fxlist_ps_offset_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_ps_radius_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_ps_radius_property?: (ctx: Fxlist_ps_radius_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_ps_height_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_ps_height_property?: (ctx: Fxlist_ps_height_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_ps_initialDelay_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_ps_initialDelay_property?: (ctx: Fxlist_ps_initialDelay_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_ps_rotateX_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_ps_rotateX_property?: (ctx: Fxlist_ps_rotateX_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_ps_rotatey_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_ps_rotatey_property?: (ctx: Fxlist_ps_rotatey_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_ps_rotateZ_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_ps_rotateZ_property?: (ctx: Fxlist_ps_rotateZ_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_ps_orienttoobject_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_ps_orienttoobject_property?: (ctx: Fxlist_ps_orienttoobject_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_ps_ricochet_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_ps_ricochet_property?: (ctx: Fxlist_ps_ricochet_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_ps_usecallerradius_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_ps_usecallerradius_property?: (ctx: Fxlist_ps_usecallerradius_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_ps_attachtoobject_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_ps_attachtoobject_property?: (ctx: Fxlist_ps_attachtoobject_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_ps_creategroundheight_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_ps_creategroundheight_property?: (ctx: Fxlist_ps_creategroundheight_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_sound_block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_sound_block?: (ctx: Fxlist_sound_blockContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_sound_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_sound_property?: (ctx: Fxlist_sound_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_rayeffect_block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_rayeffect_block?: (ctx: Fxlist_rayeffect_blockContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_rayeffect_primaryoffset_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_rayeffect_primaryoffset_property?: (ctx: Fxlist_rayeffect_primaryoffset_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_rayeffect_secondaryoffset_proprety`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_rayeffect_secondaryoffset_proprety?: (ctx: Fxlist_rayeffect_secondaryoffset_propretyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_rayeffect_object_propety`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_rayeffect_object_propety?: (ctx: Fxlist_rayeffect_object_propetyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_tracer_block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_tracer_block?: (ctx: Fxlist_tracer_blockContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_tracer_name_propety`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_tracer_name_propety?: (ctx: Fxlist_tracer_name_propetyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_tracer_bonename_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_tracer_bonename_property?: (ctx: Fxlist_tracer_bonename_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_tracer_speed_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_tracer_speed_property?: (ctx: Fxlist_tracer_speed_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_tracer_decayat_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_tracer_decayat_property?: (ctx: Fxlist_tracer_decayat_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_tracer_length_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_tracer_length_property?: (ctx: Fxlist_tracer_length_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_tracer_width_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_tracer_width_property?: (ctx: Fxlist_tracer_width_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_tracer_color_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_tracer_color_property?: (ctx: Fxlist_tracer_color_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_tracer_probability_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_tracer_probability_property?: (ctx: Fxlist_tracer_probability_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_lightpulse_block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_lightpulse_block?: (ctx: Fxlist_lightpulse_blockContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_lightpulse_color_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_lightpulse_color_property?: (ctx: Fxlist_lightpulse_color_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_lightpulse_radius_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_lightpulse_radius_property?: (ctx: Fxlist_lightpulse_radius_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_lightpulse_radiuspercentobjectsize_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_lightpulse_radiuspercentobjectsize_property?: (ctx: Fxlist_lightpulse_radiuspercentobjectsize_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_lightpulse_increasetime_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_lightpulse_increasetime_property?: (ctx: Fxlist_lightpulse_increasetime_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_lightpulse_decreasetime_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_lightpulse_decreasetime_property?: (ctx: Fxlist_lightpulse_decreasetime_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_viewshake_block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_viewshake_block?: (ctx: Fxlist_viewshake_blockContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_viewshake_type_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_viewshake_type_property?: (ctx: Fxlist_viewshake_type_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_viewshake_type_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_viewshake_type_value?: (ctx: Fxlist_viewshake_type_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_terrainscorch_block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_terrainscorch_block?: (ctx: Fxlist_terrainscorch_blockContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_scorch_type_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_scorch_type_property?: (ctx: Fxlist_scorch_type_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_scorch_radius_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_scorch_radius_property?: (ctx: Fxlist_scorch_radius_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_fxlistatbone_block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_fxlistatbone_block?: (ctx: Fxlist_fxlistatbone_blockContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_atbonepos_fx_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_atbonepos_fx_property?: (ctx: Fxlist_atbonepos_fx_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_atbonepos_bonename_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_atbonepos_bonename_property?: (ctx: Fxlist_atbonepos_bonename_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_atbonepos_orienttoobject_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_atbonepos_orienttoobject_property?: (ctx: Fxlist_atbonepos_orienttoobject_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.inGameUIClass`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInGameUIClass?: (ctx: InGameUIClassContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.igui_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIgui_properties?: (ctx: Igui_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.igui_blocks`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIgui_blocks?: (ctx: Igui_blocksContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.ingui_block_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIngui_block_properties?: (ctx: Ingui_block_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.locomotorClass`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLocomotorClass?: (ctx: LocomotorClassContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.locomotor_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLocomotor_properties?: (ctx: Locomotor_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.locomotor_surface_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLocomotor_surface_property?: (ctx: Locomotor_surface_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.locomotor_zbehavior_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLocomotor_zbehavior_property?: (ctx: Locomotor_zbehavior_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.locomotor_appereance_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLocomotor_appereance_property?: (ctx: Locomotor_appereance_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.locomotor_movepriority_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLocomotor_movepriority_property?: (ctx: Locomotor_movepriority_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.surface_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSurface_value?: (ctx: Surface_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.zbehavior_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitZbehavior_value?: (ctx: Zbehavior_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.appereance_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAppereance_value?: (ctx: Appereance_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.movepriority_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMovepriority_value?: (ctx: Movepriority_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectReskinClass`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectReskinClass?: (ctx: ObjectReskinClassContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectClass`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectClass?: (ctx: ObjectClassContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectClass_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectClass_properties?: (ctx: ObjectClass_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectClass_sounds`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectClass_sounds?: (ctx: ObjectClass_soundsContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectClass_sets`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectClass_sets?: (ctx: ObjectClass_setsContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectClass_weaponSetBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectClass_weaponSetBlock?: (ctx: ObjectClass_weaponSetBlockContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectClass_weaponSetProperties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectClass_weaponSetProperties?: (ctx: ObjectClass_weaponSetPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectClass_armorSetBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectClass_armorSetBlock?: (ctx: ObjectClass_armorSetBlockContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectClass_armorSetProperties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectClass_armorSetProperties?: (ctx: ObjectClass_armorSetPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectClass_setConditions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectClass_setConditions?: (ctx: ObjectClass_setConditionsContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectClass_prerequisiteSetBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectClass_prerequisiteSetBlock?: (ctx: ObjectClass_prerequisiteSetBlockContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectClass_prerequisiteSetProperties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectClass_prerequisiteSetProperties?: (ctx: ObjectClass_prerequisiteSetPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectClass_unitSpecificSoundsBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectClass_unitSpecificSoundsBlock?: (ctx: ObjectClass_unitSpecificSoundsBlockContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectClass_unitSpecificFXBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectClass_unitSpecificFXBlock?: (ctx: ObjectClass_unitSpecificFXBlockContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectClass_unitSpecificFXProperties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectClass_unitSpecificFXProperties?: (ctx: ObjectClass_unitSpecificFXPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectClass_removeModule`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectClass_removeModule?: (ctx: ObjectClass_removeModuleContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectClass_addModule`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectClass_addModule?: (ctx: ObjectClass_addModuleContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectClass_replaceModule`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectClass_replaceModule?: (ctx: ObjectClass_replaceModuleContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectClass_modules`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectClass_modules?: (ctx: ObjectClass_modulesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectClass_drawModules`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectClass_drawModules?: (ctx: ObjectClass_drawModulesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.w3dDebrisDrawModule`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitW3dDebrisDrawModule?: (ctx: W3dDebrisDrawModuleContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.w3dDefaultDrawModule`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitW3dDefaultDrawModule?: (ctx: W3dDefaultDrawModuleContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.w3dModelDrawModule`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitW3dModelDrawModule?: (ctx: W3dModelDrawModuleContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.w3dModelDrawProperties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitW3dModelDrawProperties?: (ctx: W3dModelDrawPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.w3dLaserDrawModule`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitW3dLaserDrawModule?: (ctx: W3dLaserDrawModuleContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.w3dLaserDrawProperties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitW3dLaserDrawProperties?: (ctx: W3dLaserDrawPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.w3dDependencyDrawModule`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitW3dDependencyDrawModule?: (ctx: W3dDependencyDrawModuleContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.w3dDependencyDrawProperties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitW3dDependencyDrawProperties?: (ctx: W3dDependencyDrawPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.w3dVehicleDrawModule`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitW3dVehicleDrawModule?: (ctx: W3dVehicleDrawModuleContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.w3dVehicleDrawProperties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitW3dVehicleDrawProperties?: (ctx: W3dVehicleDrawPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.w3dOverlordTankDrawModule`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitW3dOverlordTankDrawModule?: (ctx: W3dOverlordTankDrawModuleContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.w3dOverlordTankDrawProperties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitW3dOverlordTankDrawProperties?: (ctx: W3dOverlordTankDrawPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.w3dProjectileStreamDrawModule`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitW3dProjectileStreamDrawModule?: (ctx: W3dProjectileStreamDrawModuleContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.w3dProjectileStreamDrawProperties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitW3dProjectileStreamDrawProperties?: (ctx: W3dProjectileStreamDrawPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.w3dScienceModelDrawModule`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitW3dScienceModelDrawModule?: (ctx: W3dScienceModelDrawModuleContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.w3dScienceModelDrawProperties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitW3dScienceModelDrawProperties?: (ctx: W3dScienceModelDrawPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.w3dSupplyDrawModule`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitW3dSupplyDrawModule?: (ctx: W3dSupplyDrawModuleContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.w3dSupplyDrawProperties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitW3dSupplyDrawProperties?: (ctx: W3dSupplyDrawPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.w3dTreeDrawModule`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitW3dTreeDrawModule?: (ctx: W3dTreeDrawModuleContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.w3dTreeDrawProperties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitW3dTreeDrawProperties?: (ctx: W3dTreeDrawPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.drawModule_conditionBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrawModule_conditionBlock?: (ctx: DrawModule_conditionBlockContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.drawModule_defaultconditionBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrawModule_defaultconditionBlock?: (ctx: DrawModule_defaultconditionBlockContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.drawModule_transitionStateBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrawModule_transitionStateBlock?: (ctx: DrawModule_transitionStateBlockContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.drawModule_conditionStateValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrawModule_conditionStateValue?: (ctx: DrawModule_conditionStateValueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.drawModule_conditionStateProperties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrawModule_conditionStateProperties?: (ctx: DrawModule_conditionStatePropertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.drawModule_transitionKeyProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrawModule_transitionKeyProperty?: (ctx: DrawModule_transitionKeyPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectClass_bodyModules`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectClass_bodyModules?: (ctx: ObjectClass_bodyModulesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.bodyModule_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBodyModule_value?: (ctx: BodyModule_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.bodyModule_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBodyModule_properties?: (ctx: BodyModule_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.bodyModule_highlander`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBodyModule_highlander?: (ctx: BodyModule_highlanderContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.bodyModule_highlander_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBodyModule_highlander_properties?: (ctx: BodyModule_highlander_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectClass_behaviorModules`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectClass_behaviorModules?: (ctx: ObjectClass_behaviorModulesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_value?: (ctx: BehaviorModule_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_animationSteeringUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_animationSteeringUpdate?: (ctx: BehaviorModule_animationSteeringUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_animationSteeringUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_animationSteeringUpdate_properties?: (ctx: BehaviorModule_animationSteeringUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_armorUpgradeUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_armorUpgradeUpdate?: (ctx: BehaviorModule_armorUpgradeUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_armorUpgradeUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_armorUpgradeUpdate_properties?: (ctx: BehaviorModule_armorUpgradeUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_assistedTargetingUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_assistedTargetingUpdate?: (ctx: BehaviorModule_assistedTargetingUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_assistedTargetingUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_assistedTargetingUpdate_properties?: (ctx: BehaviorModule_assistedTargetingUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_autoDepositUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_autoDepositUpdate?: (ctx: BehaviorModule_autoDepositUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_autoDepositUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_autoDepositUpdate_properties?: (ctx: BehaviorModule_autoDepositUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_autoFindHealingUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_autoFindHealingUpdate?: (ctx: BehaviorModule_autoFindHealingUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_autoFindHealingUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_autoFindHealingUpdate_properties?: (ctx: BehaviorModule_autoFindHealingUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_autoHealBehavior`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_autoHealBehavior?: (ctx: BehaviorModule_autoHealBehaviorContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_autoHealBehavior_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_autoHealBehavior_properties?: (ctx: BehaviorModule_autoHealBehavior_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_baikonourLaunchPower`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_baikonourLaunchPower?: (ctx: BehaviorModule_baikonourLaunchPowerContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_baikonourLaunchPower_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_baikonourLaunchPower_properties?: (ctx: BehaviorModule_baikonourLaunchPower_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_baseRegenerateUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_baseRegenerateUpdate?: (ctx: BehaviorModule_baseRegenerateUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_battleBusSlowDeathBehavior`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_battleBusSlowDeathBehavior?: (ctx: BehaviorModule_battleBusSlowDeathBehaviorContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_battleBusSlowDeathBehavior_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_battleBusSlowDeathBehavior_properties?: (ctx: BehaviorModule_battleBusSlowDeathBehavior_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_battlePlanUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_battlePlanUpdate?: (ctx: BehaviorModule_battlePlanUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_battlePlanUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_battlePlanUpdate_properties?: (ctx: BehaviorModule_battlePlanUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_boneFXDamage`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_boneFXDamage?: (ctx: BehaviorModule_boneFXDamageContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_boneFXUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_boneFXUpdate?: (ctx: BehaviorModule_boneFXUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_boneFXUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_boneFXUpdate_properties?: (ctx: BehaviorModule_boneFXUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_fXList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_fXList?: (ctx: BehaviorModule_fXListContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_ocl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_ocl?: (ctx: BehaviorModule_oclContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_particleSystem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_particleSystem?: (ctx: BehaviorModule_particleSystemContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_bridgeBehavior`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_bridgeBehavior?: (ctx: BehaviorModule_bridgeBehaviorContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_bridgeBehavior_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_bridgeBehavior_properties?: (ctx: BehaviorModule_bridgeBehavior_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_bridgeScaffoldBehavior`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_bridgeScaffoldBehavior?: (ctx: BehaviorModule_bridgeScaffoldBehaviorContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_bridgeScaffoldBehavior_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_bridgeScaffoldBehavior_properties?: (ctx: BehaviorModule_bridgeScaffoldBehavior_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_bridgeTowerBehavior`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_bridgeTowerBehavior?: (ctx: BehaviorModule_bridgeTowerBehaviorContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_bridgeTowerBehavior_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_bridgeTowerBehavior_properties?: (ctx: BehaviorModule_bridgeTowerBehavior_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_bunkerBusterBehavior`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_bunkerBusterBehavior?: (ctx: BehaviorModule_bunkerBusterBehaviorContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_bunkerBusterBehavior_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_bunkerBusterBehavior_properties?: (ctx: BehaviorModule_bunkerBusterBehavior_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_cashBountyPower`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_cashBountyPower?: (ctx: BehaviorModule_cashBountyPowerContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_cashBountyPower_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_cashBountyPower_properties?: (ctx: BehaviorModule_cashBountyPower_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_cashHackSpecialPower`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_cashHackSpecialPower?: (ctx: BehaviorModule_cashHackSpecialPowerContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_cashHackSpecialPower_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_cashHackSpecialPower_properties?: (ctx: BehaviorModule_cashHackSpecialPower_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_checkpointUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_checkpointUpdate?: (ctx: BehaviorModule_checkpointUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_checkpointUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_checkpointUpdate_properties?: (ctx: BehaviorModule_checkpointUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_cleanupAreaPower`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_cleanupAreaPower?: (ctx: BehaviorModule_cleanupAreaPowerContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_cleanupAreaPower_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_cleanupAreaPower_properties?: (ctx: BehaviorModule_cleanupAreaPower_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_cleanupHazardUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_cleanupHazardUpdate?: (ctx: BehaviorModule_cleanupHazardUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_cleanupHazardUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_cleanupHazardUpdate_properties?: (ctx: BehaviorModule_cleanupHazardUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_commandButtonHuntUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_commandButtonHuntUpdate?: (ctx: BehaviorModule_commandButtonHuntUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_commandButtonHuntUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_commandButtonHuntUpdate_properties?: (ctx: BehaviorModule_commandButtonHuntUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_commandSetUpgrade`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_commandSetUpgrade?: (ctx: BehaviorModule_commandSetUpgradeContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_commandSetUpgrade_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_commandSetUpgrade_properties?: (ctx: BehaviorModule_commandSetUpgrade_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_convertToCarBombCrateCollide`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_convertToCarBombCrateCollide?: (ctx: BehaviorModule_convertToCarBombCrateCollideContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_convertToCarBombCrateCollide_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_convertToCarBombCrateCollide_properties?: (ctx: BehaviorModule_convertToCarBombCrateCollide_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_costModifierUpgrade`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_costModifierUpgrade?: (ctx: BehaviorModule_costModifierUpgradeContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_costModifierUpgrade_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_costModifierUpgrade_properties?: (ctx: BehaviorModule_costModifierUpgrade_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_countermeasuresBehavior`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_countermeasuresBehavior?: (ctx: BehaviorModule_countermeasuresBehaviorContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_countermeasuresBehavior_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_countermeasuresBehavior_properties?: (ctx: BehaviorModule_countermeasuresBehavior_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_createCrateDie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_createCrateDie?: (ctx: BehaviorModule_createCrateDieContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_createCrateDie_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_createCrateDie_properties?: (ctx: BehaviorModule_createCrateDie_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_createObjectDie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_createObjectDie?: (ctx: BehaviorModule_createObjectDieContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_createObjectDie_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_createObjectDie_properties?: (ctx: BehaviorModule_createObjectDie_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_convertToHijackedVehicleCrateCollide`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_convertToHijackedVehicleCrateCollide?: (ctx: BehaviorModule_convertToHijackedVehicleCrateCollideContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_convertToHijackedVehicleCrateCollide_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_convertToHijackedVehicleCrateCollide_properties?: (ctx: BehaviorModule_convertToHijackedVehicleCrateCollide_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_crushDie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_crushDie?: (ctx: BehaviorModule_crushDieContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_crushDie_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_crushDie_properties?: (ctx: BehaviorModule_crushDie_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_damDie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_damDie?: (ctx: BehaviorModule_damDieContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_damDie_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_damDie_properties?: (ctx: BehaviorModule_damDie_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_defaultProductionExitUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_defaultProductionExitUpdate?: (ctx: BehaviorModule_defaultProductionExitUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_defaultProductionExitUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_defaultProductionExitUpdate_properties?: (ctx: BehaviorModule_defaultProductionExitUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_deletionUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_deletionUpdate?: (ctx: BehaviorModule_deletionUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_deletionUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_deletionUpdate_properties?: (ctx: BehaviorModule_deletionUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_demoTrapUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_demoTrapUpdate?: (ctx: BehaviorModule_demoTrapUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_demoTrapUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_demoTrapUpdate_properties?: (ctx: BehaviorModule_demoTrapUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_destroyDie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_destroyDie?: (ctx: BehaviorModule_destroyDieContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_destroyDie_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_destroyDie_properties?: (ctx: BehaviorModule_destroyDie_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_dumbProjectileBehavior`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_dumbProjectileBehavior?: (ctx: BehaviorModule_dumbProjectileBehaviorContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_dumbProjectileBehavior_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_dumbProjectileBehavior_properties?: (ctx: BehaviorModule_dumbProjectileBehavior_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_dynamicShroudClearingRangeUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_dynamicShroudClearingRangeUpdate?: (ctx: BehaviorModule_dynamicShroudClearingRangeUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_dynamicShroudClearingRangeUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_dynamicShroudClearingRangeUpdate_properties?: (ctx: BehaviorModule_dynamicShroudClearingRangeUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_dynamicShroudClearingRangeUpdate_decal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_dynamicShroudClearingRangeUpdate_decal?: (ctx: BehaviorModule_dynamicShroudClearingRangeUpdate_decalContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_dynamicShroudClearingRangeUpdate_decal_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_dynamicShroudClearingRangeUpdate_decal_properties?: (ctx: BehaviorModule_dynamicShroudClearingRangeUpdate_decal_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_empUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_empUpdate?: (ctx: BehaviorModule_empUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_empUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_empUpdate_properties?: (ctx: BehaviorModule_empUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_ejectPilotDie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_ejectPilotDie?: (ctx: BehaviorModule_ejectPilotDieContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_ejectPilotDie_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_ejectPilotDie_properties?: (ctx: BehaviorModule_ejectPilotDie_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_enemyNearUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_enemyNearUpdate?: (ctx: BehaviorModule_enemyNearUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_enemyNearUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_enemyNearUpdate_properties?: (ctx: BehaviorModule_enemyNearUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_experienceScalarUpgrade`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_experienceScalarUpgrade?: (ctx: BehaviorModule_experienceScalarUpgradeContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_experienceScalarUpgrade_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_experienceScalarUpgrade_properties?: (ctx: BehaviorModule_experienceScalarUpgrade_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_fxListDie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_fxListDie?: (ctx: BehaviorModule_fxListDieContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_fxListDie_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_fxListDie_properties?: (ctx: BehaviorModule_fxListDie_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_fireOCLAfterWeaponCooldownUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_fireOCLAfterWeaponCooldownUpdate?: (ctx: BehaviorModule_fireOCLAfterWeaponCooldownUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_fireOCLAfterWeaponCooldownUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_fireOCLAfterWeaponCooldownUpdate_properties?: (ctx: BehaviorModule_fireOCLAfterWeaponCooldownUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_fireSpreadUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_fireSpreadUpdate?: (ctx: BehaviorModule_fireSpreadUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_fireSpreadUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_fireSpreadUpdate_properties?: (ctx: BehaviorModule_fireSpreadUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_fireWeaponCollide`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_fireWeaponCollide?: (ctx: BehaviorModule_fireWeaponCollideContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_fireWeaponCollide_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_fireWeaponCollide_properties?: (ctx: BehaviorModule_fireWeaponCollide_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_fireWeaponPower`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_fireWeaponPower?: (ctx: BehaviorModule_fireWeaponPowerContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_fireWeaponPower_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_fireWeaponPower_properties?: (ctx: BehaviorModule_fireWeaponPower_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_fireWeaponUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_fireWeaponUpdate?: (ctx: BehaviorModule_fireWeaponUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_fireWeaponUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_fireWeaponUpdate_properties?: (ctx: BehaviorModule_fireWeaponUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_fireWeaponWhenDamagedBehavior`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_fireWeaponWhenDamagedBehavior?: (ctx: BehaviorModule_fireWeaponWhenDamagedBehaviorContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_fireWeaponWhenDamagedBehavior_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_fireWeaponWhenDamagedBehavior_properties?: (ctx: BehaviorModule_fireWeaponWhenDamagedBehavior_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_fireWeaponWhenDeadBehavior`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_fireWeaponWhenDeadBehavior?: (ctx: BehaviorModule_fireWeaponWhenDeadBehaviorContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_fireWeaponWhenDeadBehavior_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_fireWeaponWhenDeadBehavior_properties?: (ctx: BehaviorModule_fireWeaponWhenDeadBehavior_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_firestormDynamicGeometryInfoUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_firestormDynamicGeometryInfoUpdate?: (ctx: BehaviorModule_firestormDynamicGeometryInfoUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_firestormDynamicGeometryInfoUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_firestormDynamicGeometryInfoUpdate_properties?: (ctx: BehaviorModule_firestormDynamicGeometryInfoUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_flammableUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_flammableUpdate?: (ctx: BehaviorModule_flammableUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_flammableUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_flammableUpdate_properties?: (ctx: BehaviorModule_flammableUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_flightDeckBehavior`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_flightDeckBehavior?: (ctx: BehaviorModule_flightDeckBehaviorContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_flightDeckBehavior_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_flightDeckBehavior_properties?: (ctx: BehaviorModule_flightDeckBehavior_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_floatUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_floatUpdate?: (ctx: BehaviorModule_floatUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_floatUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_floatUpdate_properties?: (ctx: BehaviorModule_floatUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_garrisonContain`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_garrisonContain?: (ctx: BehaviorModule_garrisonContainContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_garrisonContain_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_garrisonContain_properties?: (ctx: BehaviorModule_garrisonContain_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_generateMinefieldBehavior`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_generateMinefieldBehavior?: (ctx: BehaviorModule_generateMinefieldBehaviorContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_generateMinefieldBehavior_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_generateMinefieldBehavior_properties?: (ctx: BehaviorModule_generateMinefieldBehavior_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_grantScienceUpgrade`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_grantScienceUpgrade?: (ctx: BehaviorModule_grantScienceUpgradeContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_grantScienceUpgrade_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_grantScienceUpgrade_properties?: (ctx: BehaviorModule_grantScienceUpgrade_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_grantStealthBehavior`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_grantStealthBehavior?: (ctx: BehaviorModule_grantStealthBehaviorContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_grantStealthBehavior_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_grantStealthBehavior_properties?: (ctx: BehaviorModule_grantStealthBehavior_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_grantUpgradeCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_grantUpgradeCreate?: (ctx: BehaviorModule_grantUpgradeCreateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_grantUpgradeCreate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_grantUpgradeCreate_properties?: (ctx: BehaviorModule_grantUpgradeCreate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_healContain`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_healContain?: (ctx: BehaviorModule_healContainContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_healContain_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_healContain_properties?: (ctx: BehaviorModule_healContain_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_heightDieUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_heightDieUpdate?: (ctx: BehaviorModule_heightDieUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_heightDieUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_heightDieUpdate_properties?: (ctx: BehaviorModule_heightDieUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_helicopterSlowDeathBehavior`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_helicopterSlowDeathBehavior?: (ctx: BehaviorModule_helicopterSlowDeathBehaviorContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_helicopterSlowDeathBehavior_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_helicopterSlowDeathBehavior_properties?: (ctx: BehaviorModule_helicopterSlowDeathBehavior_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_helixContain`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_helixContain?: (ctx: BehaviorModule_helixContainContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_helixContain_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_helixContain_properties?: (ctx: BehaviorModule_helixContain_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_hijackerUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_hijackerUpdate?: (ctx: BehaviorModule_hijackerUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_hijackerUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_hijackerUpdate_properties?: (ctx: BehaviorModule_hijackerUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_hordeUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_hordeUpdate?: (ctx: BehaviorModule_hordeUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_hordeUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_hordeUpdate_properties?: (ctx: BehaviorModule_hordeUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_instantDeathBehavior`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_instantDeathBehavior?: (ctx: BehaviorModule_instantDeathBehaviorContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_instantDeathBehavior_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_instantDeathBehavior_properties?: (ctx: BehaviorModule_instantDeathBehavior_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_internetHackContain`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_internetHackContain?: (ctx: BehaviorModule_internetHackContainContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_internetHackContain_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_internetHackContain_properties?: (ctx: BehaviorModule_internetHackContain_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_jetSlowDeathBehavior`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_jetSlowDeathBehavior?: (ctx: BehaviorModule_jetSlowDeathBehaviorContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_jetSlowDeathBehavior_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_jetSlowDeathBehavior_properties?: (ctx: BehaviorModule_jetSlowDeathBehavior_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_keepObjectDie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_keepObjectDie?: (ctx: BehaviorModule_keepObjectDieContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_keepObjectDie_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_keepObjectDie_properties?: (ctx: BehaviorModule_keepObjectDie_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_leafletDropBehavior`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_leafletDropBehavior?: (ctx: BehaviorModule_leafletDropBehaviorContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_leafletDropBehavior_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_leafletDropBehavior_properties?: (ctx: BehaviorModule_leafletDropBehavior_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_lifetimeUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_lifetimeUpdate?: (ctx: BehaviorModule_lifetimeUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_lifetimeUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_lifetimeUpdate_properties?: (ctx: BehaviorModule_lifetimeUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_lockWeaponCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_lockWeaponCreate?: (ctx: BehaviorModule_lockWeaponCreateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_lockWeaponCreate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_lockWeaponCreate_properties?: (ctx: BehaviorModule_lockWeaponCreate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_locomotorSetUpgrade`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_locomotorSetUpgrade?: (ctx: BehaviorModule_locomotorSetUpgradeContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_locomotorSetUpgrade_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_locomotorSetUpgrade_properties?: (ctx: BehaviorModule_locomotorSetUpgrade_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_maxHealthUpgrade`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_maxHealthUpgrade?: (ctx: BehaviorModule_maxHealthUpgradeContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_maxHealthUpgrade_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_maxHealthUpgrade_properties?: (ctx: BehaviorModule_maxHealthUpgrade_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_minefieldBehavior`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_minefieldBehavior?: (ctx: BehaviorModule_minefieldBehaviorContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_minefieldBehavior_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_minefieldBehavior_properties?: (ctx: BehaviorModule_minefieldBehavior_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_missileLauncherBuildingUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_missileLauncherBuildingUpdate?: (ctx: BehaviorModule_missileLauncherBuildingUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_missileLauncherBuildingUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_missileLauncherBuildingUpdate_properties?: (ctx: BehaviorModule_missileLauncherBuildingUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_mobMemberSlavedUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_mobMemberSlavedUpdate?: (ctx: BehaviorModule_mobMemberSlavedUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_mobMemberSlavedUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_mobMemberSlavedUpdate_properties?: (ctx: BehaviorModule_mobMemberSlavedUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_modelConditionUpgrade`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_modelConditionUpgrade?: (ctx: BehaviorModule_modelConditionUpgradeContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_modelConditionUpgrade_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_modelConditionUpgrade_properties?: (ctx: BehaviorModule_modelConditionUpgrade_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_moneyCrateCollide`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_moneyCrateCollide?: (ctx: BehaviorModule_moneyCrateCollideContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_moneyCrateCollide_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_moneyCrateCollide_properties?: (ctx: BehaviorModule_moneyCrateCollide_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_neutronBlastBehavior`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_neutronBlastBehavior?: (ctx: BehaviorModule_neutronBlastBehaviorContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_neutronBlastBehavior_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_neutronBlastBehavior_properties?: (ctx: BehaviorModule_neutronBlastBehavior_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_neutronMissileSlowDeathBehavior`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_neutronMissileSlowDeathBehavior?: (ctx: BehaviorModule_neutronMissileSlowDeathBehaviorContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_neutronMissileSlowDeathBehavior_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_neutronMissileSlowDeathBehavior_properties?: (ctx: BehaviorModule_neutronMissileSlowDeathBehavior_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_neutronMissileUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_neutronMissileUpdate?: (ctx: BehaviorModule_neutronMissileUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_neutronMissileUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_neutronMissileUpdate_properties?: (ctx: BehaviorModule_neutronMissileUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_neutronMissileUpdate_properties_decal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_neutronMissileUpdate_properties_decal?: (ctx: BehaviorModule_neutronMissileUpdate_properties_decalContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_neutronMissileUpdate_properties_decal_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_neutronMissileUpdate_properties_decal_properties?: (ctx: BehaviorModule_neutronMissileUpdate_properties_decal_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_oclSpecialPower`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_oclSpecialPower?: (ctx: BehaviorModule_oclSpecialPowerContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_oclSpecialPower_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_oclSpecialPower_properties?: (ctx: BehaviorModule_oclSpecialPower_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_oclUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_oclUpdate?: (ctx: BehaviorModule_oclUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_oclUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_oclUpdate_properties?: (ctx: BehaviorModule_oclUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_objectCreationUpgrade`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_objectCreationUpgrade?: (ctx: BehaviorModule_objectCreationUpgradeContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_objectCreationUpgrade_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_objectCreationUpgrade_properties?: (ctx: BehaviorModule_objectCreationUpgrade_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_overchargeBehavior`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_overchargeBehavior?: (ctx: BehaviorModule_overchargeBehaviorContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_overchargeBehavior_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_overchargeBehavior_properties?: (ctx: BehaviorModule_overchargeBehavior_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_overlordContain`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_overlordContain?: (ctx: BehaviorModule_overlordContainContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_overlordContain_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_overlordContain_properties?: (ctx: BehaviorModule_overlordContain_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_parachuteContain`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_parachuteContain?: (ctx: BehaviorModule_parachuteContainContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_parachuteContain_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_parachuteContain_properties?: (ctx: BehaviorModule_parachuteContain_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_parkingPlaceBehavior`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_parkingPlaceBehavior?: (ctx: BehaviorModule_parkingPlaceBehaviorContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_parkingPlaceBehavior_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_parkingPlaceBehavior_properties?: (ctx: BehaviorModule_parkingPlaceBehavior_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_particleUplinkCannonUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_particleUplinkCannonUpdate?: (ctx: BehaviorModule_particleUplinkCannonUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_particleUplinkCannonUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_particleUplinkCannonUpdate_properties?: (ctx: BehaviorModule_particleUplinkCannonUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_passengersFireUpgrade`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_passengersFireUpgrade?: (ctx: BehaviorModule_passengersFireUpgradeContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_passengersFireUpgrade_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_passengersFireUpgrade_properties?: (ctx: BehaviorModule_passengersFireUpgrade_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_physicsBehavior`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_physicsBehavior?: (ctx: BehaviorModule_physicsBehaviorContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_physicsBehavior_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_physicsBehavior_properties?: (ctx: BehaviorModule_physicsBehavior_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_pilotFindVehicleUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_pilotFindVehicleUpdate?: (ctx: BehaviorModule_pilotFindVehicleUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_pilotFindVehicleUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_pilotFindVehicleUpdate_properties?: (ctx: BehaviorModule_pilotFindVehicleUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_pointDefenseLaserUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_pointDefenseLaserUpdate?: (ctx: BehaviorModule_pointDefenseLaserUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_pointDefenseLaserUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_pointDefenseLaserUpdate_properties?: (ctx: BehaviorModule_pointDefenseLaserUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_poisonedBehavior`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_poisonedBehavior?: (ctx: BehaviorModule_poisonedBehaviorContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_poisonedBehavior_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_poisonedBehavior_properties?: (ctx: BehaviorModule_poisonedBehavior_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_powerPlantUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_powerPlantUpdate?: (ctx: BehaviorModule_powerPlantUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_powerPlantUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_powerPlantUpdate_properties?: (ctx: BehaviorModule_powerPlantUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_powerPlantUpgrade`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_powerPlantUpgrade?: (ctx: BehaviorModule_powerPlantUpgradeContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_powerPlantUpgrade_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_powerPlantUpgrade_properties?: (ctx: BehaviorModule_powerPlantUpgrade_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_preorderCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_preorderCreate?: (ctx: BehaviorModule_preorderCreateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_projectileStreamUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_projectileStreamUpdate?: (ctx: BehaviorModule_projectileStreamUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_propagandaTowerBehavior`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_propagandaTowerBehavior?: (ctx: BehaviorModule_propagandaTowerBehaviorContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_propagandaTowerBehavior_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_propagandaTowerBehavior_properties?: (ctx: BehaviorModule_propagandaTowerBehavior_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_productionUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_productionUpdate?: (ctx: BehaviorModule_productionUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_productionUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_productionUpdate_properties?: (ctx: BehaviorModule_productionUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_queueProductionExitUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_queueProductionExitUpdate?: (ctx: BehaviorModule_queueProductionExitUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_queueProductionExitUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_queueProductionExitUpdate_properties?: (ctx: BehaviorModule_queueProductionExitUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_radarUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_radarUpdate?: (ctx: BehaviorModule_radarUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_radarUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_radarUpdate_properties?: (ctx: BehaviorModule_radarUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_radarUpgrade`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_radarUpgrade?: (ctx: BehaviorModule_radarUpgradeContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_radarUpgrade_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_radarUpgrade_properties?: (ctx: BehaviorModule_radarUpgrade_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_radiusDecalUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_radiusDecalUpdate?: (ctx: BehaviorModule_radiusDecalUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_railedTransportContain`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_railedTransportContain?: (ctx: BehaviorModule_railedTransportContainContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_railedTransportContain_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_railedTransportContain_properties?: (ctx: BehaviorModule_railedTransportContain_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_railedTransportDockUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_railedTransportDockUpdate?: (ctx: BehaviorModule_railedTransportDockUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_railedTransportDockUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_railedTransportDockUpdate_properties?: (ctx: BehaviorModule_railedTransportDockUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_railroadBehavior`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_railroadBehavior?: (ctx: BehaviorModule_railroadBehaviorContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_railroadBehavior_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_railroadBehavior_properties?: (ctx: BehaviorModule_railroadBehavior_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_rebuildHoleBehavior`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_rebuildHoleBehavior?: (ctx: BehaviorModule_rebuildHoleBehaviorContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_rebuildHoleBehavior_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_rebuildHoleBehavior_properties?: (ctx: BehaviorModule_rebuildHoleBehavior_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_rebuildHoleExposeDie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_rebuildHoleExposeDie?: (ctx: BehaviorModule_rebuildHoleExposeDieContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_rebuildHoleExposeDie_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_rebuildHoleExposeDie_properties?: (ctx: BehaviorModule_rebuildHoleExposeDie_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_repairDockUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_repairDockUpdate?: (ctx: BehaviorModule_repairDockUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_repairDockUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_repairDockUpdate_properties?: (ctx: BehaviorModule_repairDockUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_replaceObjectUpgrade`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_replaceObjectUpgrade?: (ctx: BehaviorModule_replaceObjectUpgradeContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_replaceObjectUpgrade_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_replaceObjectUpgrade_properties?: (ctx: BehaviorModule_replaceObjectUpgrade_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_riderChangeContain`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_riderChangeContain?: (ctx: BehaviorModule_riderChangeContainContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_riderChangeContain_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_riderChangeContain_properties?: (ctx: BehaviorModule_riderChangeContain_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_sabotageCommandCenterCrateCollide`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_sabotageCommandCenterCrateCollide?: (ctx: BehaviorModule_sabotageCommandCenterCrateCollideContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_sabotageCommandCenterCrateCollide_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_sabotageCommandCenterCrateCollide_properties?: (ctx: BehaviorModule_sabotageCommandCenterCrateCollide_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_sabotageFakeBuildingCrateCollide`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_sabotageFakeBuildingCrateCollide?: (ctx: BehaviorModule_sabotageFakeBuildingCrateCollideContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_sabotageFakeBuildingCrateCollide_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_sabotageFakeBuildingCrateCollide_properties?: (ctx: BehaviorModule_sabotageFakeBuildingCrateCollide_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_sabotageInternetCenterCrateCollide`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_sabotageInternetCenterCrateCollide?: (ctx: BehaviorModule_sabotageInternetCenterCrateCollideContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_sabotageInternetCenterCrateCollide_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_sabotageInternetCenterCrateCollide_properties?: (ctx: BehaviorModule_sabotageInternetCenterCrateCollide_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_sabotageMilitaryFactoryCrateCollide`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_sabotageMilitaryFactoryCrateCollide?: (ctx: BehaviorModule_sabotageMilitaryFactoryCrateCollideContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_sabotageMilitaryFactoryCrateCollide_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_sabotageMilitaryFactoryCrateCollide_properties?: (ctx: BehaviorModule_sabotageMilitaryFactoryCrateCollide_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_sabotagePowerPlantCrateCollide`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_sabotagePowerPlantCrateCollide?: (ctx: BehaviorModule_sabotagePowerPlantCrateCollideContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_sabotagePowerPlantCrateCollide_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_sabotagePowerPlantCrateCollide_properties?: (ctx: BehaviorModule_sabotagePowerPlantCrateCollide_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_sabotageSuperweaponCrateCollide`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_sabotageSuperweaponCrateCollide?: (ctx: BehaviorModule_sabotageSuperweaponCrateCollideContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_sabotageSuperweaponCrateCollide_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_sabotageSuperweaponCrateCollide_properties?: (ctx: BehaviorModule_sabotageSuperweaponCrateCollide_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_sabotageSupplyCenterCrateCollide`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_sabotageSupplyCenterCrateCollide?: (ctx: BehaviorModule_sabotageSupplyCenterCrateCollideContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_sabotageSupplyCenterCrateCollide_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_sabotageSupplyCenterCrateCollide_properties?: (ctx: BehaviorModule_sabotageSupplyCenterCrateCollide_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_salvageCrateCollide`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_salvageCrateCollide?: (ctx: BehaviorModule_salvageCrateCollideContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_salvageCrateCollide_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_salvageCrateCollide_properties?: (ctx: BehaviorModule_salvageCrateCollide_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_slavedUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_slavedUpdate?: (ctx: BehaviorModule_slavedUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_slavedUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_slavedUpdate_properties?: (ctx: BehaviorModule_slavedUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_slowDeathBehavior`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_slowDeathBehavior?: (ctx: BehaviorModule_slowDeathBehaviorContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_slowDeathBehavior_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_slowDeathBehavior_properties?: (ctx: BehaviorModule_slowDeathBehavior_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_smartBombTargetHomingUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_smartBombTargetHomingUpdate?: (ctx: BehaviorModule_smartBombTargetHomingUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_smartBombTargetHomingUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_smartBombTargetHomingUpdate_properties?: (ctx: BehaviorModule_smartBombTargetHomingUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_spawnBehavior`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_spawnBehavior?: (ctx: BehaviorModule_spawnBehaviorContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_spawnBehavior_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_spawnBehavior_properties?: (ctx: BehaviorModule_spawnBehavior_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_spawnPointProductionExitUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_spawnPointProductionExitUpdate?: (ctx: BehaviorModule_spawnPointProductionExitUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_spawnPointProductionExitUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_spawnPointProductionExitUpdate_properties?: (ctx: BehaviorModule_spawnPointProductionExitUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_specialAbility`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_specialAbility?: (ctx: BehaviorModule_specialAbilityContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_specialAbility_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_specialAbility_properties?: (ctx: BehaviorModule_specialAbility_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_specialAbilityUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_specialAbilityUpdate?: (ctx: BehaviorModule_specialAbilityUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_specialAbilityUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_specialAbilityUpdate_properties?: (ctx: BehaviorModule_specialAbilityUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_specialPowerCompletionDie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_specialPowerCompletionDie?: (ctx: BehaviorModule_specialPowerCompletionDieContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_specialPowerCompletionDie_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_specialPowerCompletionDie_properties?: (ctx: BehaviorModule_specialPowerCompletionDie_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_specialPowerCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_specialPowerCreate?: (ctx: BehaviorModule_specialPowerCreateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_spectreGunshipDeploymentUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_spectreGunshipDeploymentUpdate?: (ctx: BehaviorModule_spectreGunshipDeploymentUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_spectreGunshipDeploymentUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_spectreGunshipDeploymentUpdate_properties?: (ctx: BehaviorModule_spectreGunshipDeploymentUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_spectreGunshipUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_spectreGunshipUpdate?: (ctx: BehaviorModule_spectreGunshipUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_spectreGunshipUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_spectreGunshipUpdate_properties?: (ctx: BehaviorModule_spectreGunshipUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_spectreGunshipUpdate_attackareadecal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_spectreGunshipUpdate_attackareadecal?: (ctx: BehaviorModule_spectreGunshipUpdate_attackareadecalContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_spectreGunshipUpdate_attackareadecal_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_spectreGunshipUpdate_attackareadecal_properties?: (ctx: BehaviorModule_spectreGunshipUpdate_attackareadecal_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_spectreGunshipUpdate_targetingreticleDecal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_spectreGunshipUpdate_targetingreticleDecal?: (ctx: BehaviorModule_spectreGunshipUpdate_targetingreticleDecalContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_spectreGunshipUpdate_targetingreticleDecal_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_spectreGunshipUpdate_targetingreticleDecal_properties?: (ctx: BehaviorModule_spectreGunshipUpdate_targetingreticleDecal_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_spyVisionSpecialPower`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_spyVisionSpecialPower?: (ctx: BehaviorModule_spyVisionSpecialPowerContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_spyVisionSpecialPower_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_spyVisionSpecialPower_properties?: (ctx: BehaviorModule_spyVisionSpecialPower_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_spyVisionUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_spyVisionUpdate?: (ctx: BehaviorModule_spyVisionUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_spyVisionUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_spyVisionUpdate_properties?: (ctx: BehaviorModule_spyVisionUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_squishCollide`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_squishCollide?: (ctx: BehaviorModule_squishCollideContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_statusBitUpgrade`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_statusBitUpgrade?: (ctx: BehaviorModule_statusBitUpgradeContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_statusBitUpgrade_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_statusBitUpgrade_properties?: (ctx: BehaviorModule_statusBitUpgrade_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_stealthDetectorUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_stealthDetectorUpdate?: (ctx: BehaviorModule_stealthDetectorUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_stealthDetectorUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_stealthDetectorUpdate_properties?: (ctx: BehaviorModule_stealthDetectorUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_stealthUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_stealthUpdate?: (ctx: BehaviorModule_stealthUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_stealthUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_stealthUpdate_properties?: (ctx: BehaviorModule_stealthUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_stealthUpgrade`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_stealthUpgrade?: (ctx: BehaviorModule_stealthUpgradeContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_stealthUpgrade_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_stealthUpgrade_properties?: (ctx: BehaviorModule_stealthUpgrade_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_stickyBombUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_stickyBombUpdate?: (ctx: BehaviorModule_stickyBombUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_stickyBombUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_stickyBombUpdate_properties?: (ctx: BehaviorModule_stickyBombUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_structureCollapseUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_structureCollapseUpdate?: (ctx: BehaviorModule_structureCollapseUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_structureCollapseUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_structureCollapseUpdate_properties?: (ctx: BehaviorModule_structureCollapseUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_structureToppleUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_structureToppleUpdate?: (ctx: BehaviorModule_structureToppleUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_structureToppleUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_structureToppleUpdate_properties?: (ctx: BehaviorModule_structureToppleUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_subObjectsUpgrade`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_subObjectsUpgrade?: (ctx: BehaviorModule_subObjectsUpgradeContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_subObjectsUpgrade_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_subObjectsUpgrade_properties?: (ctx: BehaviorModule_subObjectsUpgrade_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_supplyCenterCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_supplyCenterCreate?: (ctx: BehaviorModule_supplyCenterCreateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_supplyCenterDockUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_supplyCenterDockUpdate?: (ctx: BehaviorModule_supplyCenterDockUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_supplyCenterDockUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_supplyCenterDockUpdate_properties?: (ctx: BehaviorModule_supplyCenterDockUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_supplyCenterProductionExitUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_supplyCenterProductionExitUpdate?: (ctx: BehaviorModule_supplyCenterProductionExitUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_supplyCenterProductionExitUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_supplyCenterProductionExitUpdate_properties?: (ctx: BehaviorModule_supplyCenterProductionExitUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_supplyWarehouseCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_supplyWarehouseCreate?: (ctx: BehaviorModule_supplyWarehouseCreateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_supplyWarehouseCripplingBehavior`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_supplyWarehouseCripplingBehavior?: (ctx: BehaviorModule_supplyWarehouseCripplingBehaviorContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_supplyWarehouseCripplingBehavior_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_supplyWarehouseCripplingBehavior_properties?: (ctx: BehaviorModule_supplyWarehouseCripplingBehavior_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_supplyWarehouseDockUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_supplyWarehouseDockUpdate?: (ctx: BehaviorModule_supplyWarehouseDockUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_supplyWarehouseDockUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_supplyWarehouseDockUpdate_properties?: (ctx: BehaviorModule_supplyWarehouseDockUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_techBuildingBehavior`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_techBuildingBehavior?: (ctx: BehaviorModule_techBuildingBehaviorContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_techBuildingBehavior_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_techBuildingBehavior_properties?: (ctx: BehaviorModule_techBuildingBehavior_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_tensileFormationUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_tensileFormationUpdate?: (ctx: BehaviorModule_tensileFormationUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_tensileFormationUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_tensileFormationUpdate_properties?: (ctx: BehaviorModule_tensileFormationUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_toppleUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_toppleUpdate?: (ctx: BehaviorModule_toppleUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_toppleUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_toppleUpdate_properties?: (ctx: BehaviorModule_toppleUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_transitionDamageFX`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_transitionDamageFX?: (ctx: BehaviorModule_transitionDamageFXContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_transitionDamageFX_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_transitionDamageFX_properties?: (ctx: BehaviorModule_transitionDamageFX_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_transportContain`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_transportContain?: (ctx: BehaviorModule_transportContainContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_transportContain_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_transportContain_properties?: (ctx: BehaviorModule_transportContain_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_tunnelContain`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_tunnelContain?: (ctx: BehaviorModule_tunnelContainContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_tunnelContain_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_tunnelContain_properties?: (ctx: BehaviorModule_tunnelContain_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_unitCrateCollide`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_unitCrateCollide?: (ctx: BehaviorModule_unitCrateCollideContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_unitCrateCollide_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_unitCrateCollide_properties?: (ctx: BehaviorModule_unitCrateCollide_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_unpauseSpecialPowerUpgrade`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_unpauseSpecialPowerUpgrade?: (ctx: BehaviorModule_unpauseSpecialPowerUpgradeContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_unpauseSpecialPowerUpgrade_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_unpauseSpecialPowerUpgrade_properties?: (ctx: BehaviorModule_unpauseSpecialPowerUpgrade_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_upgradeDie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_upgradeDie?: (ctx: BehaviorModule_upgradeDieContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_upgradeDie_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_upgradeDie_properties?: (ctx: BehaviorModule_upgradeDie_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_veterancyCrateCollide`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_veterancyCrateCollide?: (ctx: BehaviorModule_veterancyCrateCollideContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_veterancyCrateCollide_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_veterancyCrateCollide_properties?: (ctx: BehaviorModule_veterancyCrateCollide_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_veterancyGainCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_veterancyGainCreate?: (ctx: BehaviorModule_veterancyGainCreateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_veterancyGainCreate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_veterancyGainCreate_properties?: (ctx: BehaviorModule_veterancyGainCreate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_waveGuideUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_waveGuideUpdate?: (ctx: BehaviorModule_waveGuideUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_waveGuideUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_waveGuideUpdate_properties?: (ctx: BehaviorModule_waveGuideUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_weaponBonusUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_weaponBonusUpdate?: (ctx: BehaviorModule_weaponBonusUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_weaponBonusUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_weaponBonusUpdate_properties?: (ctx: BehaviorModule_weaponBonusUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_weaponBonusUpgrade`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_weaponBonusUpgrade?: (ctx: BehaviorModule_weaponBonusUpgradeContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_weaponBonusUpgrade_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_weaponBonusUpgrade_properties?: (ctx: BehaviorModule_weaponBonusUpgrade_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_weaponSetUpgrade`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_weaponSetUpgrade?: (ctx: BehaviorModule_weaponSetUpgradeContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_weaponSetUpgrade_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_weaponSetUpgrade_properties?: (ctx: BehaviorModule_weaponSetUpgrade_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_turretBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_turretBlock?: (ctx: BehaviorModule_turretBlockContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_turretBlock_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_turretBlock_properties?: (ctx: BehaviorModule_turretBlock_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_aiUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_aiUpdate_properties?: (ctx: BehaviorModule_aiUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_aiUpdateInterface`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_aiUpdateInterface?: (ctx: BehaviorModule_aiUpdateInterfaceContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_aiUpdateInterface_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_aiUpdateInterface_properties?: (ctx: BehaviorModule_aiUpdateInterface_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_assultTroopAIUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_assultTroopAIUpdate?: (ctx: BehaviorModule_assultTroopAIUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_assultTroopAIUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_assultTroopAIUpdate_properties?: (ctx: BehaviorModule_assultTroopAIUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_chinookAIUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_chinookAIUpdate?: (ctx: BehaviorModule_chinookAIUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_chinookAIUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_chinookAIUpdate_properties?: (ctx: BehaviorModule_chinookAIUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_deliverPayloadAIUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_deliverPayloadAIUpdate?: (ctx: BehaviorModule_deliverPayloadAIUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_deliverPayloadAIUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_deliverPayloadAIUpdate_properties?: (ctx: BehaviorModule_deliverPayloadAIUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_deployableAIUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_deployableAIUpdate?: (ctx: BehaviorModule_deployableAIUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_deployableAIUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_deployableAIUpdate_properties?: (ctx: BehaviorModule_deployableAIUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_dozerAIUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_dozerAIUpdate?: (ctx: BehaviorModule_dozerAIUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_dozerAIUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_dozerAIUpdate_properties?: (ctx: BehaviorModule_dozerAIUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_hackInternetAIUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_hackInternetAIUpdate?: (ctx: BehaviorModule_hackInternetAIUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_hackInternetAIUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_hackInternetAIUpdate_properties?: (ctx: BehaviorModule_hackInternetAIUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_jetAIUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_jetAIUpdate?: (ctx: BehaviorModule_jetAIUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_jetAIUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_jetAIUpdate_properties?: (ctx: BehaviorModule_jetAIUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_missileAIUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_missileAIUpdate?: (ctx: BehaviorModule_missileAIUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_missileAIUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_missileAIUpdate_properties?: (ctx: BehaviorModule_missileAIUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_railedTransportAIUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_railedTransportAIUpdate?: (ctx: BehaviorModule_railedTransportAIUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_railedTransportAIUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_railedTransportAIUpdate_properties?: (ctx: BehaviorModule_railedTransportAIUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_supplyTruckAIUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_supplyTruckAIUpdate?: (ctx: BehaviorModule_supplyTruckAIUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_supplyTruckAIUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_supplyTruckAIUpdate_properties?: (ctx: BehaviorModule_supplyTruckAIUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_transportAIUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_transportAIUpdate?: (ctx: BehaviorModule_transportAIUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_transportAIUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_transportAIUpdate_properties?: (ctx: BehaviorModule_transportAIUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_wanderAIUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_wanderAIUpdate?: (ctx: BehaviorModule_wanderAIUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_wanderAIUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_wanderAIUpdate_properties?: (ctx: BehaviorModule_wanderAIUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_workerAIUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_workerAIUpdate?: (ctx: BehaviorModule_workerAIUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_workerAIUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_workerAIUpdate_properties?: (ctx: BehaviorModule_workerAIUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_deathTypes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_deathTypes?: (ctx: BehaviorModule_deathTypesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_allowInsideKindOf`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_allowInsideKindOf?: (ctx: BehaviorModule_allowInsideKindOfContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_forbidInsideKindOf`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_forbidInsideKindOf?: (ctx: BehaviorModule_forbidInsideKindOfContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_fxlistNValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_fxlistNValue?: (ctx: BehaviorModule_fxlistNValueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_particleSystemNValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_particleSystemNValue?: (ctx: BehaviorModule_particleSystemNValueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectClass_clientModules`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectClass_clientModules?: (ctx: ObjectClass_clientModulesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.clientUpdate_modules`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClientUpdate_modules?: (ctx: ClientUpdate_modulesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.clientModule_animatedSysBoneClientUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClientModule_animatedSysBoneClientUpdate?: (ctx: ClientModule_animatedSysBoneClientUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.clientModule_animatedSysBoneClientUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClientModule_animatedSysBoneClientUpdate_properties?: (ctx: ClientModule_animatedSysBoneClientUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.clientModule_beaconUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClientModule_beaconUpdate?: (ctx: ClientModule_beaconUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.clientModule_beaconUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClientModule_beaconUpdate_properties?: (ctx: ClientModule_beaconUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.clientModule_laserUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClientModule_laserUpdate?: (ctx: ClientModule_laserUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.clientModule_laserUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClientModule_laserUpdate_properties?: (ctx: ClientModule_laserUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.clientModule_swayClientUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClientModule_swayClientUpdate?: (ctx: ClientModule_swayClientUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.clientModule_swayClientUpdate_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClientModule_swayClientUpdate_properties?: (ctx: ClientModule_swayClientUpdate_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.rankClass`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRankClass?: (ctx: RankClassContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.rank_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRank_properties?: (ctx: Rank_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.scienceClass`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitScienceClass?: (ctx: ScienceClassContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.science_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitScience_properties?: (ctx: Science_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.specialPowerClass`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSpecialPowerClass?: (ctx: SpecialPowerClassContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.specialPower_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSpecialPower_properties?: (ctx: SpecialPower_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.soundEffectClasses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSoundEffectClasses?: (ctx: SoundEffectClassesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.audioEventClass`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAudioEventClass?: (ctx: AudioEventClassContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.dialogEventClass`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDialogEventClass?: (ctx: DialogEventClassContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.audioevent_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAudioevent_properties?: (ctx: Audioevent_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectCreationListClass`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectCreationListClass?: (ctx: ObjectCreationListClassContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectCreationListClass_blocks`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectCreationListClass_blocks?: (ctx: ObjectCreationListClass_blocksContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectCreationListClass_createDebrisBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectCreationListClass_createDebrisBlock?: (ctx: ObjectCreationListClass_createDebrisBlockContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectCreationListClass_createDebrisProperties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectCreationListClass_createDebrisProperties?: (ctx: ObjectCreationListClass_createDebrisPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.disposition_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDisposition_value?: (ctx: Disposition_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectCreationListClass_createObjectBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectCreationListClass_createObjectBlock?: (ctx: ObjectCreationListClass_createObjectBlockContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectCreationListClass_createObjectProperties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectCreationListClass_createObjectProperties?: (ctx: ObjectCreationListClass_createObjectPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectCreationListClass_applyRandomForceBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectCreationListClass_applyRandomForceBlock?: (ctx: ObjectCreationListClass_applyRandomForceBlockContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectCreationListClass_applyRandomForceProperties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectCreationListClass_applyRandomForceProperties?: (ctx: ObjectCreationListClass_applyRandomForcePropertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectCreationListClass_attackBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectCreationListClass_attackBlock?: (ctx: ObjectCreationListClass_attackBlockContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectCreationListClass_attackProperties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectCreationListClass_attackProperties?: (ctx: ObjectCreationListClass_attackPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectCreationListClass_fireWeaponBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectCreationListClass_fireWeaponBlock?: (ctx: ObjectCreationListClass_fireWeaponBlockContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectCreationListClass_fireWeaponProperties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectCreationListClass_fireWeaponProperties?: (ctx: ObjectCreationListClass_fireWeaponPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectCreationListClass_deliveryPayloadBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectCreationListClass_deliveryPayloadBlock?: (ctx: ObjectCreationListClass_deliveryPayloadBlockContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectCreationListClass_deliveryPayloadProperties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectCreationListClass_deliveryPayloadProperties?: (ctx: ObjectCreationListClass_deliveryPayloadPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectCreationListClass_deliveryDecal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectCreationListClass_deliveryDecal?: (ctx: ObjectCreationListClass_deliveryDecalContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.particleSystemClass`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParticleSystemClass?: (ctx: ParticleSystemClassContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.particleSystemClass_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParticleSystemClass_properties?: (ctx: ParticleSystemClass_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.particleSystemClass_priorityValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParticleSystemClass_priorityValue?: (ctx: ParticleSystemClass_priorityValueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.particleSystemClass_shaderValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParticleSystemClass_shaderValue?: (ctx: ParticleSystemClass_shaderValueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.particleSystemClass_typeValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParticleSystemClass_typeValue?: (ctx: ParticleSystemClass_typeValueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.particleSystemClass_velocityTypeValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParticleSystemClass_velocityTypeValue?: (ctx: ParticleSystemClass_velocityTypeValueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.particleSystemClass_volumeTypeValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParticleSystemClass_volumeTypeValue?: (ctx: ParticleSystemClass_volumeTypeValueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.particleSystemClass_windTypeValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParticleSystemClass_windTypeValue?: (ctx: ParticleSystemClass_windTypeValueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.playerTemplateClass`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPlayerTemplateClass?: (ctx: PlayerTemplateClassContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.playerTemplateClass_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPlayerTemplateClass_properties?: (ctx: PlayerTemplateClass_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.upgradeClass`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpgradeClass?: (ctx: UpgradeClassContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.upgrade_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpgrade_properties?: (ctx: Upgrade_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.academyclassifier_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAcademyclassifier_value?: (ctx: Academyclassifier_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.weaponClass`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWeaponClass?: (ctx: WeaponClassContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.weapon_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWeapon_properties?: (ctx: Weapon_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.weapon_damagetype_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWeapon_damagetype_property?: (ctx: Weapon_damagetype_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.weapon_deathtype_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWeapon_deathtype_property?: (ctx: Weapon_deathtype_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.weapon_damageaffects_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWeapon_damageaffects_property?: (ctx: Weapon_damageaffects_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.weapon_weaponbonus_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWeapon_weaponbonus_property?: (ctx: Weapon_weaponbonus_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.weapon_lasterbone_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWeapon_lasterbone_property?: (ctx: Weapon_lasterbone_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.weapon_weaponbonus_condition_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWeapon_weaponbonus_condition_value?: (ctx: Weapon_weaponbonus_condition_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.weapon_weaponbonus_bonus_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWeapon_weaponbonus_bonus_value?: (ctx: Weapon_weaponbonus_bonus_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.deathType_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeathType_value?: (ctx: DeathType_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.damageAffects_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDamageAffects_value?: (ctx: DamageAffects_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.projectileColide_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProjectileColide_value?: (ctx: ProjectileColide_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.damageType_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDamageType_value?: (ctx: DamageType_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.armorType_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArmorType_value?: (ctx: ArmorType_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.weatherClass`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWeatherClass?: (ctx: WeatherClassContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.weather_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWeather_properties?: (ctx: Weather_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.end`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnd?: (ctx: EndContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.file`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFile?: (ctx: FileContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.dgi_useplayercolor_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDgi_useplayercolor_property?: (ctx: Dgi_useplayercolor_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.dgi_colorfortext_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDgi_colorfortext_property?: (ctx: Dgi_colorfortext_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.dgi_colordropshadow_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDgi_colordropshadow_property?: (ctx: Dgi_colordropshadow_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.dgi_dropshadowoffsetX_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDgi_dropshadowoffsetX_property?: (ctx: Dgi_dropshadowoffsetX_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.dgi_dropshadowoffsetY_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDgi_dropshadowoffsetY_property?: (ctx: Dgi_dropshadowoffsetY_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.dgi_fontname_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDgi_fontname_property?: (ctx: Dgi_fontname_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.dgi_fontsize_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDgi_fontsize_property?: (ctx: Dgi_fontsize_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.dgi_fontisbold_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDgi_fontisbold_property?: (ctx: Dgi_fontisbold_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.dgi_drawposXperc_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDgi_drawposXperc_property?: (ctx: Dgi_drawposXperc_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.dgi_drawposYperc_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDgi_drawposYperc_property?: (ctx: Dgi_drawposYperc_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.faction_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFaction_value?: (ctx: Faction_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.factionEx_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFactionEx_value?: (ctx: FactionEx_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.armor_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArmor_value?: (ctx: Armor_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.animation2d_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnimation2d_value?: (ctx: Animation2d_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.crate_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCrate_value?: (ctx: Crate_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.commandbutton_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommandbutton_value?: (ctx: Commandbutton_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.commandSet_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommandSet_value?: (ctx: CommandSet_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.damageFX_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDamageFX_value?: (ctx: DamageFX_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.cursorname_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCursorname_value?: (ctx: Cursorname_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.radius_cursorname_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRadius_cursorname_value?: (ctx: Radius_cursorname_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.invalid_cursorname_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInvalid_cursorname_value?: (ctx: Invalid_cursorname_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.mappedimage_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMappedimage_value?: (ctx: Mappedimage_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.particlesystem_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParticlesystem_value?: (ctx: Particlesystem_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_value?: (ctx: Fxlist_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.locomotor_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLocomotor_value?: (ctx: Locomotor_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.locomotor_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLocomotor_type?: (ctx: Locomotor_typeContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.object_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject_property?: (ctx: Object_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.object_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject_value?: (ctx: Object_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.kindof_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKindof_value?: (ctx: Kindof_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.status_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatus_value?: (ctx: Status_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.ocl_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOcl_value?: (ctx: Ocl_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.science_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitScience_property?: (ctx: Science_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.science_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitScience_value?: (ctx: Science_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.specialpower_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSpecialpower_property?: (ctx: Specialpower_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.specialpower_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSpecialpower_value?: (ctx: Specialpower_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.audioevent_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAudioevent_value?: (ctx: Audioevent_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.upgrade_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpgrade_property?: (ctx: Upgrade_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.upgrade_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpgrade_value?: (ctx: Upgrade_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.weapon_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWeapon_value?: (ctx: Weapon_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.turret_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTurret_property?: (ctx: Turret_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.alt_turret_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlt_turret_property?: (ctx: Alt_turret_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.transitionKey_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransitionKey_value?: (ctx: TransitionKey_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.weaponslot_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWeaponslot_property?: (ctx: Weaponslot_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.weapon_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWeapon_property?: (ctx: Weapon_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.veterency_modifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVeterency_modifier?: (ctx: Veterency_modifierContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.moduleTag_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModuleTag_value?: (ctx: ModuleTag_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.rand_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRand_value?: (ctx: Rand_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.coord3D`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCoord3D?: (ctx: Coord3DContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.autochoose_sources`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAutochoose_sources?: (ctx: Autochoose_sourcesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.object_condition_types`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject_condition_types?: (ctx: Object_condition_typesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.geometry`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGeometry?: (ctx: GeometryContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.shadow_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShadow_value?: (ctx: Shadow_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.condition_flags`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCondition_flags?: (ctx: Condition_flagsContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.ocl_createLocation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOcl_createLocation?: (ctx: Ocl_createLocationContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.distribution_form`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDistribution_form?: (ctx: Distribution_formContext) => Result;
}

